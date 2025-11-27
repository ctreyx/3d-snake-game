(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Jl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const wt={},Vr=[],Zn=()=>{},Uf=()=>!1,Go=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ql=n=>n.startsWith("onUpdate:"),rn=Object.assign,ec=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Xd=Object.prototype.hasOwnProperty,bt=(n,e)=>Xd.call(n,e),st=Array.isArray,Hr=n=>ko(n)==="[object Map]",If=n=>ko(n)==="[object Set]",ot=n=>typeof n=="function",Ht=n=>typeof n=="string",Yi=n=>typeof n=="symbol",Nt=n=>n!==null&&typeof n=="object",Ff=n=>(Nt(n)||ot(n))&&ot(n.then)&&ot(n.catch),Nf=Object.prototype.toString,ko=n=>Nf.call(n),jd=n=>ko(n).slice(8,-1),Of=n=>ko(n)==="[object Object]",tc=n=>Ht(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ms=Jl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Yd=/-\w/g,Wi=Wo(n=>n.replace(Yd,e=>e.slice(1).toUpperCase())),qd=/\B([A-Z])/g,pr=Wo(n=>n.replace(qd,"-$1").toLowerCase()),Bf=Wo(n=>n.charAt(0).toUpperCase()+n.slice(1)),ca=Wo(n=>n?`on${Bf(n)}`:""),Gi=(n,e)=>!Object.is(n,e),Eo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},zf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},nc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Jc;const Xo=()=>Jc||(Jc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ic(n){if(st(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Ht(i)?Jd(i):ic(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Ht(n)||Nt(n))return n}const Kd=/;(?![^(]*\))/g,$d=/:([^]+)/,Zd=/\/\*[^]*?\*\//g;function Jd(n){const e={};return n.replace(Zd,"").split(Kd).forEach(t=>{if(t){const i=t.split($d);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Gr(n){let e="";if(Ht(n))e=n;else if(st(n))for(let t=0;t<n.length;t++){const i=Gr(n[t]);i&&(e+=i+" ")}else if(Nt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Qd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ep=Jl(Qd);function Vf(n){return!!n||n===""}const Hf=n=>!!(n&&n.__v_isRef===!0),Fr=n=>Ht(n)?n:n==null?"":st(n)||Nt(n)&&(n.toString===Nf||!ot(n.toString))?Hf(n)?Fr(n.value):JSON.stringify(n,Gf,2):String(n),Gf=(n,e)=>Hf(e)?Gf(n,e.value):Hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[ua(i,s)+" =>"]=r,t),{})}:If(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ua(t))}:Yi(e)?ua(e):Nt(e)&&!st(e)&&!Of(e)?String(e):e,ua=(n,e="")=>{var t;return Yi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let mn;class tp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=mn,!e&&mn&&(this.index=(mn.scopes||(mn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=mn;try{return mn=this,e()}finally{mn=t}}}on(){++this._on===1&&(this.prevScope=mn,mn=this)}off(){this._on>0&&--this._on===0&&(mn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function np(){return mn}let Dt;const fa=new WeakSet;class kf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,mn&&mn.active&&mn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fa.has(this)&&(fa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Xf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Qc(this),jf(this);const e=Dt,t=Hn;Dt=this,Hn=!0;try{return this.fn()}finally{Yf(this),Dt=e,Hn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)oc(e);this.deps=this.depsTail=void 0,Qc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Qa(this)&&this.run()}get dirty(){return Qa(this)}}let Wf=0,Ss,bs;function Xf(n,e=!1){if(n.flags|=8,e){n.next=bs,bs=n;return}n.next=Ss,Ss=n}function rc(){Wf++}function sc(){if(--Wf>0)return;if(bs){let e=bs;for(bs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ss;){let e=Ss;for(Ss=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function jf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Yf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),oc(i),ip(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Qa(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(qf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function qf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ds)||(n.globalVersion=Ds,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Qa(n))))return;n.flags|=2;const e=n.dep,t=Dt,i=Hn;Dt=n,Hn=!0;try{jf(n);const r=n.fn(n._value);(e.version===0||Gi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Dt=t,Hn=i,Yf(n),n.flags&=-3}}function oc(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)oc(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function ip(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Hn=!0;const Kf=[];function Si(){Kf.push(Hn),Hn=!1}function bi(){const n=Kf.pop();Hn=n===void 0?!0:n}function Qc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Dt;Dt=void 0;try{e()}finally{Dt=t}}}let Ds=0;class rp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ac{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Dt||!Hn||Dt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Dt)t=this.activeLink=new rp(Dt,this),Dt.deps?(t.prevDep=Dt.depsTail,Dt.depsTail.nextDep=t,Dt.depsTail=t):Dt.deps=Dt.depsTail=t,$f(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Dt.depsTail,t.nextDep=void 0,Dt.depsTail.nextDep=t,Dt.depsTail=t,Dt.deps===t&&(Dt.deps=i)}return t}trigger(e){this.version++,Ds++,this.notify(e)}notify(e){rc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{sc()}}}function $f(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)$f(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const el=new WeakMap,cr=Symbol(""),tl=Symbol(""),Ls=Symbol("");function en(n,e,t){if(Hn&&Dt){let i=el.get(n);i||el.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new ac),r.map=i,r.key=t),r.track()}}function di(n,e,t,i,r,s){const a=el.get(n);if(!a){Ds++;return}const l=c=>{c&&c.trigger()};if(rc(),e==="clear")a.forEach(l);else{const c=st(n),u=c&&tc(t);if(c&&t==="length"){const h=Number(i);a.forEach((d,x)=>{(x==="length"||x===Ls||!Yi(x)&&x>=h)&&l(d)})}else switch((t!==void 0||a.has(void 0))&&l(a.get(t)),u&&l(a.get(Ls)),e){case"add":c?u&&l(a.get("length")):(l(a.get(cr)),Hr(n)&&l(a.get(tl)));break;case"delete":c||(l(a.get(cr)),Hr(n)&&l(a.get(tl)));break;case"set":Hr(n)&&l(a.get(cr));break}}sc()}function Mr(n){const e=St(n);return e===n?e:(en(e,"iterate",Ls),In(n)?e:e.map(Gn))}function jo(n){return en(n=St(n),"iterate",Ls),n}function Ni(n,e){return yi(n)?ur(n)?Yr(Gn(e)):Yr(e):Gn(e)}const sp={__proto__:null,[Symbol.iterator](){return ha(this,Symbol.iterator,n=>Ni(this,n))},concat(...n){return Mr(this).concat(...n.map(e=>st(e)?Mr(e):e))},entries(){return ha(this,"entries",n=>(n[1]=Ni(this,n[1]),n))},every(n,e){return ri(this,"every",n,e,void 0,arguments)},filter(n,e){return ri(this,"filter",n,e,t=>t.map(i=>Ni(this,i)),arguments)},find(n,e){return ri(this,"find",n,e,t=>Ni(this,t),arguments)},findIndex(n,e){return ri(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ri(this,"findLast",n,e,t=>Ni(this,t),arguments)},findLastIndex(n,e){return ri(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ri(this,"forEach",n,e,void 0,arguments)},includes(...n){return da(this,"includes",n)},indexOf(...n){return da(this,"indexOf",n)},join(n){return Mr(this).join(n)},lastIndexOf(...n){return da(this,"lastIndexOf",n)},map(n,e){return ri(this,"map",n,e,void 0,arguments)},pop(){return cs(this,"pop")},push(...n){return cs(this,"push",n)},reduce(n,...e){return eu(this,"reduce",n,e)},reduceRight(n,...e){return eu(this,"reduceRight",n,e)},shift(){return cs(this,"shift")},some(n,e){return ri(this,"some",n,e,void 0,arguments)},splice(...n){return cs(this,"splice",n)},toReversed(){return Mr(this).toReversed()},toSorted(n){return Mr(this).toSorted(n)},toSpliced(...n){return Mr(this).toSpliced(...n)},unshift(...n){return cs(this,"unshift",n)},values(){return ha(this,"values",n=>Ni(this,n))}};function ha(n,e,t){const i=jo(n),r=i[e]();return i!==n&&!In(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const op=Array.prototype;function ri(n,e,t,i,r,s){const a=jo(n),l=a!==n&&!In(n),c=a[e];if(c!==op[e]){const d=c.apply(n,s);return l?Gn(d):d}let u=t;a!==n&&(l?u=function(d,x){return t.call(this,Ni(n,d),x,n)}:t.length>2&&(u=function(d,x){return t.call(this,d,x,n)}));const h=c.call(a,u,i);return l&&r?r(h):h}function eu(n,e,t,i){const r=jo(n);let s=t;return r!==n&&(In(n)?t.length>3&&(s=function(a,l,c){return t.call(this,a,l,c,n)}):s=function(a,l,c){return t.call(this,a,Ni(n,l),c,n)}),r[e](s,...i)}function da(n,e,t){const i=St(n);en(i,"iterate",Ls);const r=i[e](...t);return(r===-1||r===!1)&&fc(t[0])?(t[0]=St(t[0]),i[e](...t)):r}function cs(n,e,t=[]){Si(),rc();const i=St(n)[e].apply(n,t);return sc(),bi(),i}const ap=Jl("__proto__,__v_isRef,__isVue"),Zf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Yi));function lp(n){Yi(n)||(n=String(n));const e=St(this);return en(e,"has",n),e.hasOwnProperty(n)}class Jf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?_p:nh:s?th:eh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=st(e);if(!r){let c;if(a&&(c=sp[t]))return c;if(t==="hasOwnProperty")return lp}const l=Reflect.get(e,t,tn(e)?e:i);if((Yi(t)?Zf.has(t):ap(t))||(r||en(e,"get",t),s))return l;if(tn(l)){const c=a&&tc(t)?l:l.value;return r&&Nt(c)?il(c):c}return Nt(l)?r?il(l):cc(l):l}}class Qf extends Jf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=st(e)&&tc(t);if(!this._isShallow){const u=yi(s);if(!In(i)&&!yi(i)&&(s=St(s),i=St(i)),!a&&tn(s)&&!tn(i))return u||(s.value=i),!0}const l=a?Number(t)<e.length:bt(e,t),c=Reflect.set(e,t,i,tn(e)?e:r);return e===St(r)&&(l?Gi(i,s)&&di(e,"set",t,i):di(e,"add",t,i)),c}deleteProperty(e,t){const i=bt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&di(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Yi(t)||!Zf.has(t))&&en(e,"has",t),i}ownKeys(e){return en(e,"iterate",st(e)?"length":cr),Reflect.ownKeys(e)}}class cp extends Jf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const up=new Qf,fp=new cp,hp=new Qf(!0);const nl=n=>n,eo=n=>Reflect.getPrototypeOf(n);function dp(n,e,t){return function(...i){const r=this.__v_raw,s=St(r),a=Hr(s),l=n==="entries"||n===Symbol.iterator&&a,c=n==="keys"&&a,u=r[n](...i),h=t?nl:e?Yr:Gn;return!e&&en(s,"iterate",c?tl:cr),{next(){const{value:d,done:x}=u.next();return x?{value:d,done:x}:{value:l?[h(d[0]),h(d[1])]:h(d),done:x}},[Symbol.iterator](){return this}}}}function to(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function pp(n,e){const t={get(r){const s=this.__v_raw,a=St(s),l=St(r);n||(Gi(r,l)&&en(a,"get",r),en(a,"get",l));const{has:c}=eo(a),u=e?nl:n?Yr:Gn;if(c.call(a,r))return u(s.get(r));if(c.call(a,l))return u(s.get(l));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&en(St(r),"iterate",cr),r.size},has(r){const s=this.__v_raw,a=St(s),l=St(r);return n||(Gi(r,l)&&en(a,"has",r),en(a,"has",l)),r===l?s.has(r):s.has(r)||s.has(l)},forEach(r,s){const a=this,l=a.__v_raw,c=St(l),u=e?nl:n?Yr:Gn;return!n&&en(c,"iterate",cr),l.forEach((h,d)=>r.call(s,u(h),u(d),a))}};return rn(t,n?{add:to("add"),set:to("set"),delete:to("delete"),clear:to("clear")}:{add(r){!e&&!In(r)&&!yi(r)&&(r=St(r));const s=St(this);return eo(s).has.call(s,r)||(s.add(r),di(s,"add",r,r)),this},set(r,s){!e&&!In(s)&&!yi(s)&&(s=St(s));const a=St(this),{has:l,get:c}=eo(a);let u=l.call(a,r);u||(r=St(r),u=l.call(a,r));const h=c.call(a,r);return a.set(r,s),u?Gi(s,h)&&di(a,"set",r,s):di(a,"add",r,s),this},delete(r){const s=St(this),{has:a,get:l}=eo(s);let c=a.call(s,r);c||(r=St(r),c=a.call(s,r)),l&&l.call(s,r);const u=s.delete(r);return c&&di(s,"delete",r,void 0),u},clear(){const r=St(this),s=r.size!==0,a=r.clear();return s&&di(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=dp(r,n,e)}),t}function lc(n,e){const t=pp(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(bt(t,r)&&r in i?t:i,r,s)}const mp={get:lc(!1,!1)},xp={get:lc(!1,!0)},gp={get:lc(!0,!1)};const eh=new WeakMap,th=new WeakMap,nh=new WeakMap,_p=new WeakMap;function vp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mp(n){return n.__v_skip||!Object.isExtensible(n)?0:vp(jd(n))}function cc(n){return yi(n)?n:uc(n,!1,up,mp,eh)}function Sp(n){return uc(n,!1,hp,xp,th)}function il(n){return uc(n,!0,fp,gp,nh)}function uc(n,e,t,i,r){if(!Nt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Mp(n);if(s===0)return n;const a=r.get(n);if(a)return a;const l=new Proxy(n,s===2?i:t);return r.set(n,l),l}function ur(n){return yi(n)?ur(n.__v_raw):!!(n&&n.__v_isReactive)}function yi(n){return!!(n&&n.__v_isReadonly)}function In(n){return!!(n&&n.__v_isShallow)}function fc(n){return n?!!n.__v_raw:!1}function St(n){const e=n&&n.__v_raw;return e?St(e):n}function bp(n){return!bt(n,"__v_skip")&&Object.isExtensible(n)&&zf(n,"__v_skip",!0),n}const Gn=n=>Nt(n)?cc(n):n,Yr=n=>Nt(n)?il(n):n;function tn(n){return n?n.__v_isRef===!0:!1}function Ci(n){return yp(n,!1)}function yp(n,e){return tn(n)?n:new Ep(n,e)}class Ep{constructor(e,t){this.dep=new ac,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:St(e),this._value=t?e:Gn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||In(e)||yi(e);e=i?e:St(e),Gi(e,t)&&(this._rawValue=e,this._value=i?e:Gn(e),this.dep.trigger())}}function Tp(n){return tn(n)?n.value:n}const Ap={get:(n,e,t)=>e==="__v_raw"?n:Tp(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return tn(r)&&!tn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function ih(n){return ur(n)?n:new Proxy(n,Ap)}class wp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ac(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ds-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Dt!==this)return Xf(this,!0),!0}get value(){const e=this.dep.track();return qf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Rp(n,e,t=!1){let i,r;return ot(n)?i=n:(i=n.get,r=n.set),new wp(i,r,t)}const no={},Uo=new WeakMap;let rr;function Cp(n,e=!1,t=rr){if(t){let i=Uo.get(t);i||Uo.set(t,i=[]),i.push(n)}}function Pp(n,e,t=wt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:l,call:c}=t,u=A=>r?A:In(A)||r===!1||r===0?pi(A,1):pi(A);let h,d,x,g,S=!1,T=!1;if(tn(n)?(d=()=>n.value,S=In(n)):ur(n)?(d=()=>u(n),S=!0):st(n)?(T=!0,S=n.some(A=>ur(A)||In(A)),d=()=>n.map(A=>{if(tn(A))return A.value;if(ur(A))return u(A);if(ot(A))return c?c(A,2):A()})):ot(n)?e?d=c?()=>c(n,2):n:d=()=>{if(x){Si();try{x()}finally{bi()}}const A=rr;rr=h;try{return c?c(n,3,[g]):n(g)}finally{rr=A}}:d=Zn,e&&r){const A=d,O=r===!0?1/0:r;d=()=>pi(A(),O)}const _=np(),p=()=>{h.stop(),_&&_.active&&ec(_.effects,h)};if(s&&e){const A=e;e=(...O)=>{A(...O),p()}}let P=T?new Array(n.length).fill(no):no;const C=A=>{if(!(!(h.flags&1)||!h.dirty&&!A))if(e){const O=h.run();if(r||S||(T?O.some((D,B)=>Gi(D,P[B])):Gi(O,P))){x&&x();const D=rr;rr=h;try{const B=[O,P===no?void 0:T&&P[0]===no?[]:P,g];P=O,c?c(e,3,B):e(...B)}finally{rr=D}}}else h.run()};return l&&l(C),h=new kf(d),h.scheduler=a?()=>a(C,!1):C,g=A=>Cp(A,!1,h),x=h.onStop=()=>{const A=Uo.get(h);if(A){if(c)c(A,4);else for(const O of A)O();Uo.delete(h)}},e?i?C(!0):P=h.run():a?a(C.bind(null,!0),!0):h.run(),p.pause=h.pause.bind(h),p.resume=h.resume.bind(h),p.stop=p,p}function pi(n,e=1/0,t){if(e<=0||!Nt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,tn(n))pi(n.value,e,t);else if(st(n))for(let i=0;i<n.length;i++)pi(n[i],e,t);else if(If(n)||Hr(n))n.forEach(i=>{pi(i,e,t)});else if(Of(n)){for(const i in n)pi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&pi(n[i],e,t)}return n}function Gs(n,e,t,i){try{return i?n(...i):n()}catch(r){Yo(r,e,t)}}function Qn(n,e,t,i){if(ot(n)){const r=Gs(n,e,t,i);return r&&Ff(r)&&r.catch(s=>{Yo(s,e,t)}),r}if(st(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Qn(n[s],e,t,i));return r}}function Yo(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||wt;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const h=l.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](n,c,u)===!1)return}l=l.parent}if(s){Si(),Gs(s,null,10,[n,c,u]),bi();return}}Dp(n,t,r,i,a)}function Dp(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const un=[];let jn=-1;const kr=[];let Oi=null,Nr=0;const rh=Promise.resolve();let Io=null;function Lp(n){const e=Io||rh;return n?e.then(this?n.bind(this):n):e}function Up(n){let e=jn+1,t=un.length;for(;e<t;){const i=e+t>>>1,r=un[i],s=Us(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function hc(n){if(!(n.flags&1)){const e=Us(n),t=un[un.length-1];!t||!(n.flags&2)&&e>=Us(t)?un.push(n):un.splice(Up(e),0,n),n.flags|=1,sh()}}function sh(){Io||(Io=rh.then(ah))}function Ip(n){st(n)?kr.push(...n):Oi&&n.id===-1?Oi.splice(Nr+1,0,n):n.flags&1||(kr.push(n),n.flags|=1),sh()}function tu(n,e,t=jn+1){for(;t<un.length;t++){const i=un[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;un.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function oh(n){if(kr.length){const e=[...new Set(kr)].sort((t,i)=>Us(t)-Us(i));if(kr.length=0,Oi){Oi.push(...e);return}for(Oi=e,Nr=0;Nr<Oi.length;Nr++){const t=Oi[Nr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Oi=null,Nr=0}}const Us=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ah(n){try{for(jn=0;jn<un.length;jn++){const e=un[jn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Gs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;jn<un.length;jn++){const e=un[jn];e&&(e.flags&=-2)}jn=-1,un.length=0,oh(),Io=null,(un.length||kr.length)&&ah()}}let Ln=null,lh=null;function Fo(n){const e=Ln;return Ln=n,lh=n&&n.type.__scopeId||null,e}function Fp(n,e=Ln,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&fu(-1);const s=Fo(e);let a;try{a=n(...r)}finally{Fo(s),i._d&&fu(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Np(n,e){if(Ln===null)return n;const t=Zo(Ln),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,l,c=wt]=e[r];s&&(ot(s)&&(s={mounted:s,updated:s}),s.deep&&pi(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function $i(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const l=r[a];s&&(l.oldValue=s[a].value);let c=l.dir[i];c&&(Si(),Qn(c,t,8,[n.el,l,n,e]),bi())}}const Op=Symbol("_vte"),Bp=n=>n.__isTeleport,zp=Symbol("_leaveCb");function dc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,dc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function ch(n,e){return ot(n)?rn({name:n.name},e,{setup:n}):n}function uh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const No=new WeakMap;function ys(n,e,t,i,r=!1){if(st(n)){n.forEach((S,T)=>ys(S,e&&(st(e)?e[T]:e),t,i,r));return}if(Es(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ys(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Zo(i.component):i.el,a=r?null:s,{i:l,r:c}=n,u=e&&e.r,h=l.refs===wt?l.refs={}:l.refs,d=l.setupState,x=St(d),g=d===wt?Uf:S=>bt(x,S);if(u!=null&&u!==c){if(nu(e),Ht(u))h[u]=null,g(u)&&(d[u]=null);else if(tn(u)){u.value=null;const S=e;S.k&&(h[S.k]=null)}}if(ot(c))Gs(c,l,12,[a,h]);else{const S=Ht(c),T=tn(c);if(S||T){const _=()=>{if(n.f){const p=S?g(c)?d[c]:h[c]:c.value;if(r)st(p)&&ec(p,s);else if(st(p))p.includes(s)||p.push(s);else if(S)h[c]=[s],g(c)&&(d[c]=h[c]);else{const P=[s];c.value=P,n.k&&(h[n.k]=P)}}else S?(h[c]=a,g(c)&&(d[c]=a)):T&&(c.value=a,n.k&&(h[n.k]=a))};if(a){const p=()=>{_(),No.delete(n)};p.id=-1,No.set(n,p),yn(p,t)}else nu(n),_()}}}function nu(n){const e=No.get(n);e&&(e.flags|=8,No.delete(n))}Xo().requestIdleCallback;Xo().cancelIdleCallback;const Es=n=>!!n.type.__asyncLoader,fh=n=>n.type.__isKeepAlive;function Vp(n,e){hh(n,"a",e)}function Hp(n,e){hh(n,"da",e)}function hh(n,e,t=fn){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(qo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)fh(r.parent.vnode)&&Gp(i,e,t,r),r=r.parent}}function Gp(n,e,t,i){const r=qo(e,n,i,!0);mh(()=>{ec(i[e],r)},t)}function qo(n,e,t=fn,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Si();const l=ks(t),c=Qn(e,t,n,a);return l(),bi(),c});return i?r.unshift(s):r.push(s),s}}const Ti=n=>(e,t=fn)=>{(!Fs||n==="sp")&&qo(n,(...i)=>e(...i),t)},kp=Ti("bm"),dh=Ti("m"),Wp=Ti("bu"),Xp=Ti("u"),ph=Ti("bum"),mh=Ti("um"),jp=Ti("sp"),Yp=Ti("rtg"),qp=Ti("rtc");function Kp(n,e=fn){qo("ec",n,e)}const $p=Symbol.for("v-ndc");function Zp(n,e,t,i){let r;const s=t,a=st(n);if(a||Ht(n)){const l=a&&ur(n);let c=!1,u=!1;l&&(c=!In(n),u=yi(n),n=jo(n)),r=new Array(n.length);for(let h=0,d=n.length;h<d;h++)r[h]=e(c?u?Yr(Gn(n[h])):Gn(n[h]):n[h],h,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let l=0;l<n;l++)r[l]=e(l+1,l,void 0,s)}else if(Nt(n))if(n[Symbol.iterator])r=Array.from(n,(l,c)=>e(l,c,void 0,s));else{const l=Object.keys(n);r=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const h=l[c];r[c]=e(n[h],h,c,s)}}else r=[];return r}const rl=n=>n?Oh(n)?Zo(n):rl(n.parent):null,Ts=rn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>rl(n.parent),$root:n=>rl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>gh(n),$forceUpdate:n=>n.f||(n.f=()=>{hc(n.update)}),$nextTick:n=>n.n||(n.n=Lp.bind(n.proxy)),$watch:n=>c0.bind(n)}),pa=(n,e)=>n!==wt&&!n.__isScriptSetup&&bt(n,e),Jp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:l,appContext:c}=n;if(e[0]!=="$"){const x=a[e];if(x!==void 0)switch(x){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(pa(i,e))return a[e]=1,i[e];if(r!==wt&&bt(r,e))return a[e]=2,r[e];if(bt(s,e))return a[e]=3,s[e];if(t!==wt&&bt(t,e))return a[e]=4,t[e];sl&&(a[e]=0)}}const u=Ts[e];let h,d;if(u)return e==="$attrs"&&en(n.attrs,"get",""),u(n);if((h=l.__cssModules)&&(h=h[e]))return h;if(t!==wt&&bt(t,e))return a[e]=4,t[e];if(d=c.config.globalProperties,bt(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return pa(r,e)?(r[e]=t,!0):i!==wt&&bt(i,e)?(i[e]=t,!0):bt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},l){let c;return!!(t[l]||n!==wt&&l[0]!=="$"&&bt(n,l)||pa(e,l)||bt(s,l)||bt(i,l)||bt(Ts,l)||bt(r.config.globalProperties,l)||(c=a.__cssModules)&&c[l])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:bt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function iu(n){return st(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let sl=!0;function Qp(n){const e=gh(n),t=n.proxy,i=n.ctx;sl=!1,e.beforeCreate&&ru(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:l,provide:c,inject:u,created:h,beforeMount:d,mounted:x,beforeUpdate:g,updated:S,activated:T,deactivated:_,beforeDestroy:p,beforeUnmount:P,destroyed:C,unmounted:A,render:O,renderTracked:D,renderTriggered:B,errorCaptured:k,serverPrefetch:w,expose:b,inheritAttrs:z,components:j,directives:ee,filters:ue}=e;if(u&&e0(u,i,null),a)for(const he in a){const J=a[he];ot(J)&&(i[he]=J.bind(t))}if(r){const he=r.call(t,t);Nt(he)&&(n.data=cc(he))}if(sl=!0,s)for(const he in s){const J=s[he],_e=ot(J)?J.bind(t,t):ot(J.get)?J.get.bind(t,t):Zn,Te=!ot(J)&&ot(J.set)?J.set.bind(t):Zn,We=k0({get:_e,set:Te});Object.defineProperty(i,he,{enumerable:!0,configurable:!0,get:()=>We.value,set:Qe=>We.value=Qe})}if(l)for(const he in l)xh(l[he],i,t,he);if(c){const he=ot(c)?c.call(t):c;Reflect.ownKeys(he).forEach(J=>{o0(J,he[J])})}h&&ru(h,n,"c");function le(he,J){st(J)?J.forEach(_e=>he(_e.bind(t))):J&&he(J.bind(t))}if(le(kp,d),le(dh,x),le(Wp,g),le(Xp,S),le(Vp,T),le(Hp,_),le(Kp,k),le(qp,D),le(Yp,B),le(ph,P),le(mh,A),le(jp,w),st(b))if(b.length){const he=n.exposed||(n.exposed={});b.forEach(J=>{Object.defineProperty(he,J,{get:()=>t[J],set:_e=>t[J]=_e,enumerable:!0})})}else n.exposed||(n.exposed={});O&&n.render===Zn&&(n.render=O),z!=null&&(n.inheritAttrs=z),j&&(n.components=j),ee&&(n.directives=ee),w&&uh(n)}function e0(n,e,t=Zn){st(n)&&(n=ol(n));for(const i in n){const r=n[i];let s;Nt(r)?"default"in r?s=To(r.from||i,r.default,!0):s=To(r.from||i):s=To(r),tn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function ru(n,e,t){Qn(st(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function xh(n,e,t,i){let r=i.includes(".")?Mh(t,i):()=>t[i];if(Ht(n)){const s=e[n];ot(s)&&ma(r,s)}else if(ot(n))ma(r,n.bind(t));else if(Nt(n))if(st(n))n.forEach(s=>xh(s,e,t,i));else{const s=ot(n.handler)?n.handler.bind(t):e[n.handler];ot(s)&&ma(r,s,n)}}function gh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,l=s.get(e);let c;return l?c=l:!r.length&&!t&&!i?c=e:(c={},r.length&&r.forEach(u=>Oo(c,u,a,!0)),Oo(c,e,a)),Nt(e)&&s.set(e,c),c}function Oo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Oo(n,s,t,!0),r&&r.forEach(a=>Oo(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const l=t0[a]||t&&t[a];n[a]=l?l(n[a],e[a]):e[a]}return n}const t0={data:su,props:ou,emits:ou,methods:_s,computed:_s,beforeCreate:an,created:an,beforeMount:an,mounted:an,beforeUpdate:an,updated:an,beforeDestroy:an,beforeUnmount:an,destroyed:an,unmounted:an,activated:an,deactivated:an,errorCaptured:an,serverPrefetch:an,components:_s,directives:_s,watch:i0,provide:su,inject:n0};function su(n,e){return e?n?function(){return rn(ot(n)?n.call(this,this):n,ot(e)?e.call(this,this):e)}:e:n}function n0(n,e){return _s(ol(n),ol(e))}function ol(n){if(st(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function an(n,e){return n?[...new Set([].concat(n,e))]:e}function _s(n,e){return n?rn(Object.create(null),n,e):e}function ou(n,e){return n?st(n)&&st(e)?[...new Set([...n,...e])]:rn(Object.create(null),iu(n),iu(e??{})):e}function i0(n,e){if(!n)return e;if(!e)return n;const t=rn(Object.create(null),n);for(const i in e)t[i]=an(n[i],e[i]);return t}function _h(){return{app:null,config:{isNativeTag:Uf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let r0=0;function s0(n,e){return function(i,r=null){ot(i)||(i=rn({},i)),r!=null&&!Nt(r)&&(r=null);const s=_h(),a=new WeakSet,l=[];let c=!1;const u=s.app={_uid:r0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:W0,get config(){return s.config},set config(h){},use(h,...d){return a.has(h)||(h&&ot(h.install)?(a.add(h),h.install(u,...d)):ot(h)&&(a.add(h),h(u,...d))),u},mixin(h){return s.mixins.includes(h)||s.mixins.push(h),u},component(h,d){return d?(s.components[h]=d,u):s.components[h]},directive(h,d){return d?(s.directives[h]=d,u):s.directives[h]},mount(h,d,x){if(!c){const g=u._ceVNode||_i(i,r);return g.appContext=s,x===!0?x="svg":x===!1&&(x=void 0),n(g,h,x),c=!0,u._container=h,h.__vue_app__=u,Zo(g.component)}},onUnmount(h){l.push(h)},unmount(){c&&(Qn(l,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(h,d){return s.provides[h]=d,u},runWithContext(h){const d=Wr;Wr=u;try{return h()}finally{Wr=d}}};return u}}let Wr=null;function o0(n,e){if(fn){let t=fn.provides;const i=fn.parent&&fn.parent.provides;i===t&&(t=fn.provides=Object.create(i)),t[n]=e}}function To(n,e,t=!1){const i=O0();if(i||Wr){let r=Wr?Wr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ot(e)?e.call(i&&i.proxy):e}}const a0=Symbol.for("v-scx"),l0=()=>To(a0);function ma(n,e,t){return vh(n,e,t)}function vh(n,e,t=wt){const{immediate:i,deep:r,flush:s,once:a}=t,l=rn({},t),c=e&&i||!e&&s!=="post";let u;if(Fs){if(s==="sync"){const g=l0();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=Zn,g.resume=Zn,g.pause=Zn,g}}const h=fn;l.call=(g,S,T)=>Qn(g,h,S,T);let d=!1;s==="post"?l.scheduler=g=>{yn(g,h&&h.suspense)}:s!=="sync"&&(d=!0,l.scheduler=(g,S)=>{S?g():hc(g)}),l.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const x=Pp(n,e,l);return Fs&&(u?u.push(x):c&&x()),x}function c0(n,e,t){const i=this.proxy,r=Ht(n)?n.includes(".")?Mh(i,n):()=>i[n]:n.bind(i,i);let s;ot(e)?s=e:(s=e.handler,t=e);const a=ks(this),l=vh(r,s.bind(i),t);return a(),l}function Mh(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const u0=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Wi(e)}Modifiers`]||n[`${pr(e)}Modifiers`];function f0(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||wt;let r=t;const s=e.startsWith("update:"),a=s&&u0(i,e.slice(7));a&&(a.trim&&(r=t.map(h=>Ht(h)?h.trim():h)),a.number&&(r=t.map(nc)));let l,c=i[l=ca(e)]||i[l=ca(Wi(e))];!c&&s&&(c=i[l=ca(pr(e))]),c&&Qn(c,n,6,r);const u=i[l+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,Qn(u,n,6,r)}}const h0=new WeakMap;function Sh(n,e,t=!1){const i=t?h0:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},l=!1;if(!ot(n)){const c=u=>{const h=Sh(u,e,!0);h&&(l=!0,rn(a,h))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!s&&!l?(Nt(n)&&i.set(n,null),null):(st(s)?s.forEach(c=>a[c]=null):rn(a,s),Nt(n)&&i.set(n,a),a)}function Ko(n,e){return!n||!Go(e)?!1:(e=e.slice(2).replace(/Once$/,""),bt(n,e[0].toLowerCase()+e.slice(1))||bt(n,pr(e))||bt(n,e))}function au(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:l,emit:c,render:u,renderCache:h,props:d,data:x,setupState:g,ctx:S,inheritAttrs:T}=n,_=Fo(n);let p,P;try{if(t.shapeFlag&4){const A=r||i,O=A;p=qn(u.call(O,A,h,d,g,x,S)),P=l}else{const A=e;p=qn(A.length>1?A(d,{attrs:l,slots:a,emit:c}):A(d,null)),P=e.props?l:d0(l)}}catch(A){As.length=0,Yo(A,n,1),p=_i(Xi)}let C=p;if(P&&T!==!1){const A=Object.keys(P),{shapeFlag:O}=C;A.length&&O&7&&(s&&A.some(Ql)&&(P=p0(P,s)),C=qr(C,P,!1,!0))}return t.dirs&&(C=qr(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(t.dirs):t.dirs),t.transition&&dc(C,t.transition),p=C,Fo(_),p}const d0=n=>{let e;for(const t in n)(t==="class"||t==="style"||Go(t))&&((e||(e={}))[t]=n[t]);return e},p0=(n,e)=>{const t={};for(const i in n)(!Ql(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function m0(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:l,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?lu(i,a,u):!!a;if(c&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const x=h[d];if(a[x]!==i[x]&&!Ko(u,x))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:i===a?!1:i?a?lu(i,a,u):!0:!!a;return!1}function lu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Ko(t,s))return!0}return!1}function x0({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const bh={},yh=()=>Object.create(bh),Eh=n=>Object.getPrototypeOf(n)===bh;function g0(n,e,t,i=!1){const r={},s=yh();n.propsDefaults=Object.create(null),Th(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Sp(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function _0(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,l=St(r),[c]=n.propsOptions;let u=!1;if((i||a>0)&&!(a&16)){if(a&8){const h=n.vnode.dynamicProps;for(let d=0;d<h.length;d++){let x=h[d];if(Ko(n.emitsOptions,x))continue;const g=e[x];if(c)if(bt(s,x))g!==s[x]&&(s[x]=g,u=!0);else{const S=Wi(x);r[S]=al(c,l,S,g,n,!1)}else g!==s[x]&&(s[x]=g,u=!0)}}}else{Th(n,e,r,s)&&(u=!0);let h;for(const d in l)(!e||!bt(e,d)&&((h=pr(d))===d||!bt(e,h)))&&(c?t&&(t[d]!==void 0||t[h]!==void 0)&&(r[d]=al(c,l,d,void 0,n,!0)):delete r[d]);if(s!==l)for(const d in s)(!e||!bt(e,d))&&(delete s[d],u=!0)}u&&di(n.attrs,"set","")}function Th(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,l;if(e)for(let c in e){if(Ms(c))continue;const u=e[c];let h;r&&bt(r,h=Wi(c))?!s||!s.includes(h)?t[h]=u:(l||(l={}))[h]=u:Ko(n.emitsOptions,c)||(!(c in i)||u!==i[c])&&(i[c]=u,a=!0)}if(s){const c=St(t),u=l||wt;for(let h=0;h<s.length;h++){const d=s[h];t[d]=al(r,c,d,u[d],n,!bt(u,d))}}return a}function al(n,e,t,i,r,s){const a=n[t];if(a!=null){const l=bt(a,"default");if(l&&i===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ot(c)){const{propsDefaults:u}=r;if(t in u)i=u[t];else{const h=ks(r);i=u[t]=c.call(null,e),h()}}else i=c;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!l?i=!1:a[1]&&(i===""||i===pr(t))&&(i=!0))}return i}const v0=new WeakMap;function Ah(n,e,t=!1){const i=t?v0:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},l=[];let c=!1;if(!ot(n)){const h=d=>{c=!0;const[x,g]=Ah(d,e,!0);rn(a,x),g&&l.push(...g)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!s&&!c)return Nt(n)&&i.set(n,Vr),Vr;if(st(s))for(let h=0;h<s.length;h++){const d=Wi(s[h]);cu(d)&&(a[d]=wt)}else if(s)for(const h in s){const d=Wi(h);if(cu(d)){const x=s[h],g=a[d]=st(x)||ot(x)?{type:x}:rn({},x),S=g.type;let T=!1,_=!0;if(st(S))for(let p=0;p<S.length;++p){const P=S[p],C=ot(P)&&P.name;if(C==="Boolean"){T=!0;break}else C==="String"&&(_=!1)}else T=ot(S)&&S.name==="Boolean";g[0]=T,g[1]=_,(T||bt(g,"default"))&&l.push(d)}}const u=[a,l];return Nt(n)&&i.set(n,u),u}function cu(n){return n[0]!=="$"&&!Ms(n)}const pc=n=>n==="_"||n==="_ctx"||n==="$stable",mc=n=>st(n)?n.map(qn):[qn(n)],M0=(n,e,t)=>{if(e._n)return e;const i=Fp((...r)=>mc(e(...r)),t);return i._c=!1,i},wh=(n,e,t)=>{const i=n._ctx;for(const r in n){if(pc(r))continue;const s=n[r];if(ot(s))e[r]=M0(r,s,i);else if(s!=null){const a=mc(s);e[r]=()=>a}}},Rh=(n,e)=>{const t=mc(e);n.slots.default=()=>t},Ch=(n,e,t)=>{for(const i in e)(t||!pc(i))&&(n[i]=e[i])},S0=(n,e,t)=>{const i=n.slots=yh();if(n.vnode.shapeFlag&32){const r=e._;r?(Ch(i,e,t),t&&zf(i,"_",r,!0)):wh(e,i)}else e&&Rh(n,e)},b0=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=wt;if(i.shapeFlag&32){const l=e._;l?t&&l===1?s=!1:Ch(r,e,t):(s=!e.$stable,wh(e,r)),a=e}else e&&(Rh(n,e),a={default:1});if(s)for(const l in r)!pc(l)&&a[l]==null&&delete r[l]},yn=w0;function y0(n){return E0(n)}function E0(n,e){const t=Xo();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:l,createComment:c,setText:u,setElementText:h,parentNode:d,nextSibling:x,setScopeId:g=Zn,insertStaticContent:S}=n,T=(N,F,Y,R=null,se=null,oe=null,xe=void 0,ie=null,me=!!F.dynamicChildren)=>{if(N===F)return;N&&!us(N,F)&&(R=fe(N),Qe(N,se,oe,!0),N=null),F.patchFlag===-2&&(me=!1,F.dynamicChildren=null);const{type:Z,ref:ge,shapeFlag:y}=F;switch(Z){case $o:_(N,F,Y,R);break;case Xi:p(N,F,Y,R);break;case ga:N==null&&P(F,Y,R,xe);break;case Yn:j(N,F,Y,R,se,oe,xe,ie,me);break;default:y&1?O(N,F,Y,R,se,oe,xe,ie,me):y&6?ee(N,F,Y,R,se,oe,xe,ie,me):(y&64||y&128)&&Z.process(N,F,Y,R,se,oe,xe,ie,me,Ue)}ge!=null&&se?ys(ge,N&&N.ref,oe,F||N,!F):ge==null&&N&&N.ref!=null&&ys(N.ref,null,oe,N,!0)},_=(N,F,Y,R)=>{if(N==null)i(F.el=l(F.children),Y,R);else{const se=F.el=N.el;F.children!==N.children&&u(se,F.children)}},p=(N,F,Y,R)=>{N==null?i(F.el=c(F.children||""),Y,R):F.el=N.el},P=(N,F,Y,R)=>{[N.el,N.anchor]=S(N.children,F,Y,R,N.el,N.anchor)},C=({el:N,anchor:F},Y,R)=>{let se;for(;N&&N!==F;)se=x(N),i(N,Y,R),N=se;i(F,Y,R)},A=({el:N,anchor:F})=>{let Y;for(;N&&N!==F;)Y=x(N),r(N),N=Y;r(F)},O=(N,F,Y,R,se,oe,xe,ie,me)=>{if(F.type==="svg"?xe="svg":F.type==="math"&&(xe="mathml"),N==null)D(F,Y,R,se,oe,xe,ie,me);else{const Z=N.el&&N.el._isVueCE?N.el:null;try{Z&&Z._beginPatch(),w(N,F,se,oe,xe,ie,me)}finally{Z&&Z._endPatch()}}},D=(N,F,Y,R,se,oe,xe,ie)=>{let me,Z;const{props:ge,shapeFlag:y,transition:v,dirs:H}=N;if(me=N.el=a(N.type,oe,ge&&ge.is,ge),y&8?h(me,N.children):y&16&&k(N.children,me,null,R,se,xa(N,oe),xe,ie),H&&$i(N,null,R,"created"),B(me,N,N.scopeId,xe,R),ge){for(const ae in ge)ae!=="value"&&!Ms(ae)&&s(me,ae,null,ge[ae],oe,R);"value"in ge&&s(me,"value",null,ge.value,oe),(Z=ge.onVnodeBeforeMount)&&Xn(Z,R,N)}H&&$i(N,null,R,"beforeMount");const Q=T0(se,v);Q&&v.beforeEnter(me),i(me,F,Y),((Z=ge&&ge.onVnodeMounted)||Q||H)&&yn(()=>{Z&&Xn(Z,R,N),Q&&v.enter(me),H&&$i(N,null,R,"mounted")},se)},B=(N,F,Y,R,se)=>{if(Y&&g(N,Y),R)for(let oe=0;oe<R.length;oe++)g(N,R[oe]);if(se){let oe=se.subTree;if(F===oe||Lh(oe.type)&&(oe.ssContent===F||oe.ssFallback===F)){const xe=se.vnode;B(N,xe,xe.scopeId,xe.slotScopeIds,se.parent)}}},k=(N,F,Y,R,se,oe,xe,ie,me=0)=>{for(let Z=me;Z<N.length;Z++){const ge=N[Z]=ie?Bi(N[Z]):qn(N[Z]);T(null,ge,F,Y,R,se,oe,xe,ie)}},w=(N,F,Y,R,se,oe,xe)=>{const ie=F.el=N.el;let{patchFlag:me,dynamicChildren:Z,dirs:ge}=F;me|=N.patchFlag&16;const y=N.props||wt,v=F.props||wt;let H;if(Y&&Zi(Y,!1),(H=v.onVnodeBeforeUpdate)&&Xn(H,Y,F,N),ge&&$i(F,N,Y,"beforeUpdate"),Y&&Zi(Y,!0),(y.innerHTML&&v.innerHTML==null||y.textContent&&v.textContent==null)&&h(ie,""),Z?b(N.dynamicChildren,Z,ie,Y,R,xa(F,se),oe):xe||J(N,F,ie,null,Y,R,xa(F,se),oe,!1),me>0){if(me&16)z(ie,y,v,Y,se);else if(me&2&&y.class!==v.class&&s(ie,"class",null,v.class,se),me&4&&s(ie,"style",y.style,v.style,se),me&8){const Q=F.dynamicProps;for(let ae=0;ae<Q.length;ae++){const K=Q[ae],Ne=y[K],be=v[K];(be!==Ne||K==="value")&&s(ie,K,Ne,be,se,Y)}}me&1&&N.children!==F.children&&h(ie,F.children)}else!xe&&Z==null&&z(ie,y,v,Y,se);((H=v.onVnodeUpdated)||ge)&&yn(()=>{H&&Xn(H,Y,F,N),ge&&$i(F,N,Y,"updated")},R)},b=(N,F,Y,R,se,oe,xe)=>{for(let ie=0;ie<F.length;ie++){const me=N[ie],Z=F[ie],ge=me.el&&(me.type===Yn||!us(me,Z)||me.shapeFlag&198)?d(me.el):Y;T(me,Z,ge,null,R,se,oe,xe,!0)}},z=(N,F,Y,R,se)=>{if(F!==Y){if(F!==wt)for(const oe in F)!Ms(oe)&&!(oe in Y)&&s(N,oe,F[oe],null,se,R);for(const oe in Y){if(Ms(oe))continue;const xe=Y[oe],ie=F[oe];xe!==ie&&oe!=="value"&&s(N,oe,ie,xe,se,R)}"value"in Y&&s(N,"value",F.value,Y.value,se)}},j=(N,F,Y,R,se,oe,xe,ie,me)=>{const Z=F.el=N?N.el:l(""),ge=F.anchor=N?N.anchor:l("");let{patchFlag:y,dynamicChildren:v,slotScopeIds:H}=F;H&&(ie=ie?ie.concat(H):H),N==null?(i(Z,Y,R),i(ge,Y,R),k(F.children||[],Y,ge,se,oe,xe,ie,me)):y>0&&y&64&&v&&N.dynamicChildren?(b(N.dynamicChildren,v,Y,se,oe,xe,ie),(F.key!=null||se&&F===se.subTree)&&Ph(N,F,!0)):J(N,F,Y,ge,se,oe,xe,ie,me)},ee=(N,F,Y,R,se,oe,xe,ie,me)=>{F.slotScopeIds=ie,N==null?F.shapeFlag&512?se.ctx.activate(F,Y,R,xe,me):ue(F,Y,R,se,oe,xe,me):ce(N,F,me)},ue=(N,F,Y,R,se,oe,xe)=>{const ie=N.component=N0(N,R,se);if(fh(N)&&(ie.ctx.renderer=Ue),B0(ie,!1,xe),ie.asyncDep){if(se&&se.registerDep(ie,le,xe),!N.el){const me=ie.subTree=_i(Xi);p(null,me,F,Y),N.placeholder=me.el}}else le(ie,N,F,Y,se,oe,xe)},ce=(N,F,Y)=>{const R=F.component=N.component;if(m0(N,F,Y))if(R.asyncDep&&!R.asyncResolved){he(R,F,Y);return}else R.next=F,R.update();else F.el=N.el,R.vnode=F},le=(N,F,Y,R,se,oe,xe)=>{const ie=()=>{if(N.isMounted){let{next:y,bu:v,u:H,parent:Q,vnode:ae}=N;{const Be=Dh(N);if(Be){y&&(y.el=ae.el,he(N,y,xe)),Be.asyncDep.then(()=>{N.isUnmounted||ie()});return}}let K=y,Ne;Zi(N,!1),y?(y.el=ae.el,he(N,y,xe)):y=ae,v&&Eo(v),(Ne=y.props&&y.props.onVnodeBeforeUpdate)&&Xn(Ne,Q,y,ae),Zi(N,!0);const be=au(N),He=N.subTree;N.subTree=be,T(He,be,d(He.el),fe(He),N,se,oe),y.el=be.el,K===null&&x0(N,be.el),H&&yn(H,se),(Ne=y.props&&y.props.onVnodeUpdated)&&yn(()=>Xn(Ne,Q,y,ae),se)}else{let y;const{el:v,props:H}=F,{bm:Q,m:ae,parent:K,root:Ne,type:be}=N,He=Es(F);Zi(N,!1),Q&&Eo(Q),!He&&(y=H&&H.onVnodeBeforeMount)&&Xn(y,K,F),Zi(N,!0);{Ne.ce&&Ne.ce._def.shadowRoot!==!1&&Ne.ce._injectChildStyle(be);const Be=N.subTree=au(N);T(null,Be,Y,R,N,se,oe),F.el=Be.el}if(ae&&yn(ae,se),!He&&(y=H&&H.onVnodeMounted)){const Be=F;yn(()=>Xn(y,K,Be),se)}(F.shapeFlag&256||K&&Es(K.vnode)&&K.vnode.shapeFlag&256)&&N.a&&yn(N.a,se),N.isMounted=!0,F=Y=R=null}};N.scope.on();const me=N.effect=new kf(ie);N.scope.off();const Z=N.update=me.run.bind(me),ge=N.job=me.runIfDirty.bind(me);ge.i=N,ge.id=N.uid,me.scheduler=()=>hc(ge),Zi(N,!0),Z()},he=(N,F,Y)=>{F.component=N;const R=N.vnode.props;N.vnode=F,N.next=null,_0(N,F.props,R,Y),b0(N,F.children,Y),Si(),tu(N),bi()},J=(N,F,Y,R,se,oe,xe,ie,me=!1)=>{const Z=N&&N.children,ge=N?N.shapeFlag:0,y=F.children,{patchFlag:v,shapeFlag:H}=F;if(v>0){if(v&128){Te(Z,y,Y,R,se,oe,xe,ie,me);return}else if(v&256){_e(Z,y,Y,R,se,oe,xe,ie,me);return}}H&8?(ge&16&&$(Z,se,oe),y!==Z&&h(Y,y)):ge&16?H&16?Te(Z,y,Y,R,se,oe,xe,ie,me):$(Z,se,oe,!0):(ge&8&&h(Y,""),H&16&&k(y,Y,R,se,oe,xe,ie,me))},_e=(N,F,Y,R,se,oe,xe,ie,me)=>{N=N||Vr,F=F||Vr;const Z=N.length,ge=F.length,y=Math.min(Z,ge);let v;for(v=0;v<y;v++){const H=F[v]=me?Bi(F[v]):qn(F[v]);T(N[v],H,Y,null,se,oe,xe,ie,me)}Z>ge?$(N,se,oe,!0,!1,y):k(F,Y,R,se,oe,xe,ie,me,y)},Te=(N,F,Y,R,se,oe,xe,ie,me)=>{let Z=0;const ge=F.length;let y=N.length-1,v=ge-1;for(;Z<=y&&Z<=v;){const H=N[Z],Q=F[Z]=me?Bi(F[Z]):qn(F[Z]);if(us(H,Q))T(H,Q,Y,null,se,oe,xe,ie,me);else break;Z++}for(;Z<=y&&Z<=v;){const H=N[y],Q=F[v]=me?Bi(F[v]):qn(F[v]);if(us(H,Q))T(H,Q,Y,null,se,oe,xe,ie,me);else break;y--,v--}if(Z>y){if(Z<=v){const H=v+1,Q=H<ge?F[H].el:R;for(;Z<=v;)T(null,F[Z]=me?Bi(F[Z]):qn(F[Z]),Y,Q,se,oe,xe,ie,me),Z++}}else if(Z>v)for(;Z<=y;)Qe(N[Z],se,oe,!0),Z++;else{const H=Z,Q=Z,ae=new Map;for(Z=Q;Z<=v;Z++){const Ge=F[Z]=me?Bi(F[Z]):qn(F[Z]);Ge.key!=null&&ae.set(Ge.key,Z)}let K,Ne=0;const be=v-Q+1;let He=!1,Be=0;const pe=new Array(be);for(Z=0;Z<be;Z++)pe[Z]=0;for(Z=H;Z<=y;Z++){const Ge=N[Z];if(Ne>=be){Qe(Ge,se,oe,!0);continue}let Xe;if(Ge.key!=null)Xe=ae.get(Ge.key);else for(K=Q;K<=v;K++)if(pe[K-Q]===0&&us(Ge,F[K])){Xe=K;break}Xe===void 0?Qe(Ge,se,oe,!0):(pe[Xe-Q]=Z+1,Xe>=Be?Be=Xe:He=!0,T(Ge,F[Xe],Y,null,se,oe,xe,ie,me),Ne++)}const ye=He?A0(pe):Vr;for(K=ye.length-1,Z=be-1;Z>=0;Z--){const Ge=Q+Z,Xe=F[Ge],Fe=F[Ge+1],Ze=Ge+1<ge?Fe.el||Fe.placeholder:R;pe[Z]===0?T(null,Xe,Y,Ze,se,oe,xe,ie,me):He&&(K<0||Z!==ye[K]?We(Xe,Y,Ze,2):K--)}}},We=(N,F,Y,R,se=null)=>{const{el:oe,type:xe,transition:ie,children:me,shapeFlag:Z}=N;if(Z&6){We(N.component.subTree,F,Y,R);return}if(Z&128){N.suspense.move(F,Y,R);return}if(Z&64){xe.move(N,F,Y,Ue);return}if(xe===Yn){i(oe,F,Y);for(let y=0;y<me.length;y++)We(me[y],F,Y,R);i(N.anchor,F,Y);return}if(xe===ga){C(N,F,Y);return}if(R!==2&&Z&1&&ie)if(R===0)ie.beforeEnter(oe),i(oe,F,Y),yn(()=>ie.enter(oe),se);else{const{leave:y,delayLeave:v,afterLeave:H}=ie,Q=()=>{N.ctx.isUnmounted?r(oe):i(oe,F,Y)},ae=()=>{oe._isLeaving&&oe[zp](!0),y(oe,()=>{Q(),H&&H()})};v?v(oe,Q,ae):ae()}else i(oe,F,Y)},Qe=(N,F,Y,R=!1,se=!1)=>{const{type:oe,props:xe,ref:ie,children:me,dynamicChildren:Z,shapeFlag:ge,patchFlag:y,dirs:v,cacheIndex:H}=N;if(y===-2&&(se=!1),ie!=null&&(Si(),ys(ie,null,Y,N,!0),bi()),H!=null&&(F.renderCache[H]=void 0),ge&256){F.ctx.deactivate(N);return}const Q=ge&1&&v,ae=!Es(N);let K;if(ae&&(K=xe&&xe.onVnodeBeforeUnmount)&&Xn(K,F,N),ge&6)ve(N.component,Y,R);else{if(ge&128){N.suspense.unmount(Y,R);return}Q&&$i(N,null,F,"beforeUnmount"),ge&64?N.type.remove(N,F,Y,Ue,R):Z&&!Z.hasOnce&&(oe!==Yn||y>0&&y&64)?$(Z,F,Y,!1,!0):(oe===Yn&&y&384||!se&&ge&16)&&$(me,F,Y),R&&ft(N)}(ae&&(K=xe&&xe.onVnodeUnmounted)||Q)&&yn(()=>{K&&Xn(K,F,N),Q&&$i(N,null,F,"unmounted")},Y)},ft=N=>{const{type:F,el:Y,anchor:R,transition:se}=N;if(F===Yn){Ae(Y,R);return}if(F===ga){A(N);return}const oe=()=>{r(Y),se&&!se.persisted&&se.afterLeave&&se.afterLeave()};if(N.shapeFlag&1&&se&&!se.persisted){const{leave:xe,delayLeave:ie}=se,me=()=>xe(Y,oe);ie?ie(N.el,oe,me):me()}else oe()},Ae=(N,F)=>{let Y;for(;N!==F;)Y=x(N),r(N),N=Y;r(F)},ve=(N,F,Y)=>{const{bum:R,scope:se,job:oe,subTree:xe,um:ie,m:me,a:Z}=N;uu(me),uu(Z),R&&Eo(R),se.stop(),oe&&(oe.flags|=8,Qe(xe,N,F,Y)),ie&&yn(ie,F),yn(()=>{N.isUnmounted=!0},F)},$=(N,F,Y,R=!1,se=!1,oe=0)=>{for(let xe=oe;xe<N.length;xe++)Qe(N[xe],F,Y,R,se)},fe=N=>{if(N.shapeFlag&6)return fe(N.component.subTree);if(N.shapeFlag&128)return N.suspense.next();const F=x(N.anchor||N.el),Y=F&&F[Op];return Y?x(Y):F};let we=!1;const je=(N,F,Y)=>{N==null?F._vnode&&Qe(F._vnode,null,null,!0):T(F._vnode||null,N,F,null,null,null,Y),F._vnode=N,we||(we=!0,tu(),oh(),we=!1)},Ue={p:T,um:Qe,m:We,r:ft,mt:ue,mc:k,pc:J,pbc:b,n:fe,o:n};return{render:je,hydrate:void 0,createApp:s0(je)}}function xa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Zi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function T0(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Ph(n,e,t=!1){const i=n.children,r=e.children;if(st(i)&&st(r))for(let s=0;s<i.length;s++){const a=i[s];let l=r[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[s]=Bi(r[s]),l.el=a.el),!t&&l.patchFlag!==-2&&Ph(a,l)),l.type===$o&&l.patchFlag!==-1&&(l.el=a.el),l.type===Xi&&!l.el&&(l.el=a.el)}}function A0(n){const e=n.slice(),t=[0];let i,r,s,a,l;const c=n.length;for(i=0;i<c;i++){const u=n[i];if(u!==0){if(r=t[t.length-1],n[r]<u){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)l=s+a>>1,n[t[l]]<u?s=l+1:a=l;u<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Dh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Dh(e)}function uu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Lh=n=>n.__isSuspense;function w0(n,e){e&&e.pendingBranch?st(n)?e.effects.push(...n):e.effects.push(n):Ip(n)}const Yn=Symbol.for("v-fgt"),$o=Symbol.for("v-txt"),Xi=Symbol.for("v-cmt"),ga=Symbol.for("v-stc"),As=[];let Tn=null;function ws(n=!1){As.push(Tn=n?null:[])}function R0(){As.pop(),Tn=As[As.length-1]||null}let Is=1;function fu(n,e=!1){Is+=n,n<0&&Tn&&e&&(Tn.hasOnce=!0)}function Uh(n){return n.dynamicChildren=Is>0?Tn||Vr:null,R0(),Is>0&&Tn&&Tn.push(n),n}function _a(n,e,t,i,r,s){return Uh(Ot(n,e,t,i,r,s,!0))}function Ih(n,e,t,i,r){return Uh(_i(n,e,t,i,r,!0))}function Fh(n){return n?n.__v_isVNode===!0:!1}function us(n,e){return n.type===e.type&&n.key===e.key}const Nh=({key:n})=>n??null,Ao=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ht(n)||tn(n)||ot(n)?{i:Ln,r:n,k:e,f:!!t}:n:null);function Ot(n,e=null,t=null,i=0,r=null,s=n===Yn?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Nh(e),ref:e&&Ao(e),scopeId:lh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ln};return l?(xc(c,t),s&128&&n.normalize(c)):t&&(c.shapeFlag|=Ht(t)?8:16),Is>0&&!a&&Tn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Tn.push(c),c}const _i=C0;function C0(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===$p)&&(n=Xi),Fh(n)){const l=qr(n,e,!0);return t&&xc(l,t),Is>0&&!s&&Tn&&(l.shapeFlag&6?Tn[Tn.indexOf(n)]=l:Tn.push(l)),l.patchFlag=-2,l}if(G0(n)&&(n=n.__vccOpts),e){e=P0(e);let{class:l,style:c}=e;l&&!Ht(l)&&(e.class=Gr(l)),Nt(c)&&(fc(c)&&!st(c)&&(c=rn({},c)),e.style=ic(c))}const a=Ht(n)?1:Lh(n)?128:Bp(n)?64:Nt(n)?4:ot(n)?2:0;return Ot(n,e,t,i,r,a,s,!0)}function P0(n){return n?fc(n)||Eh(n)?rn({},n):n:null}function qr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:l,transition:c}=n,u=e?U0(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Nh(u),ref:e&&e.ref?t&&s?st(s)?s.concat(Ao(e)):[s,Ao(e)]:Ao(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Yn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&qr(n.ssContent),ssFallback:n.ssFallback&&qr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&i&&dc(h,c.clone(h)),h}function D0(n=" ",e=0){return _i($o,null,n,e)}function L0(n="",e=!1){return e?(ws(),Ih(Xi,null,n)):_i(Xi,null,n)}function qn(n){return n==null||typeof n=="boolean"?_i(Xi):st(n)?_i(Yn,null,n.slice()):Fh(n)?Bi(n):_i($o,null,String(n))}function Bi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:qr(n)}function xc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(st(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),xc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Eh(e)?e._ctx=Ln:r===3&&Ln&&(Ln.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ot(e)?(e={default:e,_ctx:Ln},t=32):(e=String(e),i&64?(t=16,e=[D0(e)]):t=8);n.children=e,n.shapeFlag|=t}function U0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Gr([e.class,i.class]));else if(r==="style")e.style=ic([e.style,i.style]);else if(Go(r)){const s=e[r],a=i[r];a&&s!==a&&!(st(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Xn(n,e,t,i=null){Qn(n,e,7,[t,i])}const I0=_h();let F0=0;function N0(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||I0,s={uid:F0++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new tp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ah(i,r),emitsOptions:Sh(i,r),emit:null,emitted:null,propsDefaults:wt,inheritAttrs:i.inheritAttrs,ctx:wt,data:wt,props:wt,attrs:wt,slots:wt,refs:wt,setupState:wt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=f0.bind(null,s),n.ce&&n.ce(s),s}let fn=null;const O0=()=>fn||Ln;let Bo,ll;{const n=Xo(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Bo=e("__VUE_INSTANCE_SETTERS__",t=>fn=t),ll=e("__VUE_SSR_SETTERS__",t=>Fs=t)}const ks=n=>{const e=fn;return Bo(n),n.scope.on(),()=>{n.scope.off(),Bo(e)}},hu=()=>{fn&&fn.scope.off(),Bo(null)};function Oh(n){return n.vnode.shapeFlag&4}let Fs=!1;function B0(n,e=!1,t=!1){e&&ll(e);const{props:i,children:r}=n.vnode,s=Oh(n);g0(n,i,s,e),S0(n,r,t||e);const a=s?z0(n,e):void 0;return e&&ll(!1),a}function z0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Jp);const{setup:i}=t;if(i){Si();const r=n.setupContext=i.length>1?H0(n):null,s=ks(n),a=Gs(i,n,0,[n.props,r]),l=Ff(a);if(bi(),s(),(l||n.sp)&&!Es(n)&&uh(n),l){if(a.then(hu,hu),e)return a.then(c=>{du(n,c)}).catch(c=>{Yo(c,n,0)});n.asyncDep=a}else du(n,a)}else Bh(n)}function du(n,e,t){ot(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Nt(e)&&(n.setupState=ih(e)),Bh(n)}function Bh(n,e,t){const i=n.type;n.render||(n.render=i.render||Zn);{const r=ks(n);Si();try{Qp(n)}finally{bi(),r()}}}const V0={get(n,e){return en(n,"get",""),n[e]}};function H0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,V0),slots:n.slots,emit:n.emit,expose:e}}function Zo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ih(bp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ts)return Ts[t](n)},has(e,t){return t in e||t in Ts}})):n.proxy}function G0(n){return ot(n)&&"__vccOpts"in n}const k0=(n,e)=>Rp(n,e,Fs),W0="3.5.25";let cl;const pu=typeof window<"u"&&window.trustedTypes;if(pu)try{cl=pu.createPolicy("vue",{createHTML:n=>n})}catch{}const zh=cl?n=>cl.createHTML(n):n=>n,X0="http://www.w3.org/2000/svg",j0="http://www.w3.org/1998/Math/MathML",hi=typeof document<"u"?document:null,mu=hi&&hi.createElement("template"),Y0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?hi.createElementNS(X0,n):e==="mathml"?hi.createElementNS(j0,n):t?hi.createElement(n,{is:t}):hi.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>hi.createTextNode(n),createComment:n=>hi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>hi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{mu.innerHTML=zh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const l=mu.content;if(i==="svg"||i==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},q0=Symbol("_vtc");function K0(n,e,t){const i=n[q0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const xu=Symbol("_vod"),$0=Symbol("_vsh"),Z0=Symbol(""),J0=/(?:^|;)\s*display\s*:/;function Q0(n,e,t){const i=n.style,r=Ht(t);let s=!1;if(t&&!r){if(e)if(Ht(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();t[l]==null&&wo(i,l,"")}else for(const a in e)t[a]==null&&wo(i,a,"");for(const a in t)a==="display"&&(s=!0),wo(i,a,t[a])}else if(r){if(e!==t){const a=i[Z0];a&&(t+=";"+a),i.cssText=t,s=J0.test(t)}}else e&&n.removeAttribute("style");xu in n&&(n[xu]=s?i.display:"",n[$0]&&(i.display="none"))}const gu=/\s*!important$/;function wo(n,e,t){if(st(t))t.forEach(i=>wo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=em(n,e);gu.test(t)?n.setProperty(pr(i),t.replace(gu,""),"important"):n[i]=t}}const _u=["Webkit","Moz","ms"],va={};function em(n,e){const t=va[e];if(t)return t;let i=Wi(e);if(i!=="filter"&&i in n)return va[e]=i;i=Bf(i);for(let r=0;r<_u.length;r++){const s=_u[r]+i;if(s in n)return va[e]=s}return e}const vu="http://www.w3.org/1999/xlink";function Mu(n,e,t,i,r,s=ep(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(vu,e.slice(6,e.length)):n.setAttributeNS(vu,e,t):t==null||s&&!Vf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Yi(t)?String(t):t)}function Su(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?zh(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const l=s==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Vf(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function Or(n,e,t,i){n.addEventListener(e,t,i)}function tm(n,e,t,i){n.removeEventListener(e,t,i)}const bu=Symbol("_vei");function nm(n,e,t,i,r=null){const s=n[bu]||(n[bu]={}),a=s[e];if(i&&a)a.value=i;else{const[l,c]=im(e);if(i){const u=s[e]=om(i,r);Or(n,l,u,c)}else a&&(tm(n,l,a,c),s[e]=void 0)}}const yu=/(?:Once|Passive|Capture)$/;function im(n){let e;if(yu.test(n)){e={};let i;for(;i=n.match(yu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):pr(n.slice(2)),e]}let Ma=0;const rm=Promise.resolve(),sm=()=>Ma||(rm.then(()=>Ma=0),Ma=Date.now());function om(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Qn(am(i,t.value),e,5,[i])};return t.value=n,t.attached=sm(),t}function am(n,e){if(st(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Eu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,lm=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?K0(n,i,a):e==="style"?Q0(n,t,i):Go(e)?Ql(e)||nm(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cm(n,e,i,a))?(Su(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Mu(n,e,i,a,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ht(i))?Su(n,Wi(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Mu(n,e,i,a))};function cm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Eu(e)&&ot(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Eu(e)&&Ht(t)?!1:e in n}const Tu=n=>{const e=n.props["onUpdate:modelValue"]||!1;return st(e)?t=>Eo(e,t):e};function um(n){n.target.composing=!0}function Au(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Sa=Symbol("_assign");function wu(n,e,t){return e&&(n=n.trim()),t&&(n=nc(n)),n}const fm={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[Sa]=Tu(r);const s=i||r.props&&r.props.type==="number";Or(n,e?"change":"input",a=>{a.target.composing||n[Sa](wu(n.value,t,s))}),(t||s)&&Or(n,"change",()=>{n.value=wu(n.value,t,s)}),e||(Or(n,"compositionstart",um),Or(n,"compositionend",Au),Or(n,"change",Au))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[Sa]=Tu(a),n.composing)return;const l=(s||n.type==="number")&&!/^0\d/.test(n.value)?nc(n.value):n.value,c=e??"";l!==c&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===c)||(n.value=c))}},hm=rn({patchProp:lm},Y0);let Ru;function dm(){return Ru||(Ru=y0(hm))}const pm=((...n)=>{const e=dm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=xm(i);if(!r)return;const s=e._component;!ot(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,mm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function mm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function xm(n){return Ht(n)?document.querySelector(n):n}const gc="181",gm=0,Cu=1,_m=2,Vh=1,vm=2,fi=3,ji=0,xn=1,mi=2,vi=0,Xr=1,Pu=2,Du=3,Lu=4,Mm=5,or=100,Sm=101,bm=102,ym=103,Em=104,Tm=200,Am=201,wm=202,Rm=203,ul=204,fl=205,Cm=206,Pm=207,Dm=208,Lm=209,Um=210,Im=211,Fm=212,Nm=213,Om=214,hl=0,dl=1,pl=2,Kr=3,ml=4,xl=5,gl=6,_l=7,Hh=0,Bm=1,zm=2,ki=0,Vm=1,Hm=2,Gm=3,km=4,Wm=5,Xm=6,jm=7,Gh=300,$r=301,Zr=302,vl=303,Ml=304,Jo=306,Sl=1e3,xi=1001,bl=1002,An=1003,Ym=1004,io=1005,Un=1006,ba=1007,lr=1008,ei=1009,kh=1010,Wh=1011,Ns=1012,_c=1013,fr=1014,gi=1015,es=1016,vc=1017,Mc=1018,Os=1020,Xh=35902,jh=35899,Yh=1021,qh=1022,Vn=1023,Bs=1026,zs=1027,Kh=1028,Sc=1029,bc=1030,yc=1031,Ec=1033,Ro=33776,Co=33777,Po=33778,Do=33779,yl=35840,El=35841,Tl=35842,Al=35843,wl=36196,Rl=37492,Cl=37496,Pl=37808,Dl=37809,Ll=37810,Ul=37811,Il=37812,Fl=37813,Nl=37814,Ol=37815,Bl=37816,zl=37817,Vl=37818,Hl=37819,Gl=37820,kl=37821,Wl=36492,Xl=36494,jl=36495,Yl=36283,ql=36284,Kl=36285,$l=36286,qm=3200,Km=3201,$h=0,$m=1,Vi="",Dn="srgb",Jr="srgb-linear",zo="linear",Tt="srgb",Sr=7680,Uu=519,Zm=512,Jm=513,Qm=514,Zh=515,ex=516,tx=517,nx=518,ix=519,Iu=35044,Fu="300 es",$n=2e3,Vo=2001;function Jh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ho(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function rx(){const n=Ho("canvas");return n.style.display="block",n}const Nu={};function Ou(...n){const e="THREE."+n.shift();console.log(e,...n)}function rt(...n){const e="THREE."+n.shift();console.warn(e,...n)}function zt(...n){const e="THREE."+n.shift();console.error(e,...n)}function Vs(...n){const e=n.join(" ");e in Nu||(Nu[e]=!0,rt(...n))}function sx(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bu=1234567;const Rs=Math.PI/180,Hs=180/Math.PI;function ns(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function ht(n,e,t){return Math.max(e,Math.min(t,n))}function Tc(n,e){return(n%e+e)%e}function ox(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function ax(n,e,t){return n!==e?(t-n)/(e-n):0}function Cs(n,e,t){return(1-t)*n+t*e}function lx(n,e,t,i){return Cs(n,e,1-Math.exp(-t*i))}function cx(n,e=1){return e-Math.abs(Tc(n,e*2)-e)}function ux(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function fx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function hx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function dx(n,e){return n+Math.random()*(e-n)}function px(n){return n*(.5-Math.random())}function mx(n){n!==void 0&&(Bu=n);let e=Bu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xx(n){return n*Rs}function gx(n){return n*Hs}function _x(n){return(n&n-1)===0&&n!==0}function vx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Mx(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Sx(n,e,t,i,r){const s=Math.cos,a=Math.sin,l=s(t/2),c=a(t/2),u=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),x=a((e-i)/2),g=s((i-e)/2),S=a((i-e)/2);switch(r){case"XYX":n.set(l*h,c*d,c*x,l*u);break;case"YZY":n.set(c*x,l*h,c*d,l*u);break;case"ZXZ":n.set(c*d,c*x,l*h,l*u);break;case"XZX":n.set(l*h,c*S,c*g,l*u);break;case"YXY":n.set(c*g,l*h,c*S,l*u);break;case"ZYZ":n.set(c*S,c*g,l*h,l*u);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Br(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ln(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const bx={DEG2RAD:Rs,RAD2DEG:Hs,generateUUID:ns,clamp:ht,euclideanModulo:Tc,mapLinear:ox,inverseLerp:ax,lerp:Cs,damp:lx,pingpong:cx,smoothstep:ux,smootherstep:fx,randInt:hx,randFloat:dx,randFloatSpread:px,seededRandom:mx,degToRad:xx,radToDeg:gx,isPowerOfTwo:_x,ceilPowerOfTwo:vx,floorPowerOfTwo:Mx,setQuaternionFromProperEuler:Sx,normalize:ln,denormalize:Br};class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ws{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,l){let c=i[r+0],u=i[r+1],h=i[r+2],d=i[r+3],x=s[a+0],g=s[a+1],S=s[a+2],T=s[a+3];if(l<=0){e[t+0]=c,e[t+1]=u,e[t+2]=h,e[t+3]=d;return}if(l>=1){e[t+0]=x,e[t+1]=g,e[t+2]=S,e[t+3]=T;return}if(d!==T||c!==x||u!==g||h!==S){let _=c*x+u*g+h*S+d*T;_<0&&(x=-x,g=-g,S=-S,T=-T,_=-_);let p=1-l;if(_<.9995){const P=Math.acos(_),C=Math.sin(P);p=Math.sin(p*P)/C,l=Math.sin(l*P)/C,c=c*p+x*l,u=u*p+g*l,h=h*p+S*l,d=d*p+T*l}else{c=c*p+x*l,u=u*p+g*l,h=h*p+S*l,d=d*p+T*l;const P=1/Math.sqrt(c*c+u*u+h*h+d*d);c*=P,u*=P,h*=P,d*=P}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const l=i[r],c=i[r+1],u=i[r+2],h=i[r+3],d=s[a],x=s[a+1],g=s[a+2],S=s[a+3];return e[t]=l*S+h*d+c*g-u*x,e[t+1]=c*S+h*x+u*d-l*g,e[t+2]=u*S+h*g+l*x-c*d,e[t+3]=h*S-l*d-c*x-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,c=Math.sin,u=l(i/2),h=l(r/2),d=l(s/2),x=c(i/2),g=c(r/2),S=c(s/2);switch(a){case"XYZ":this._x=x*h*d+u*g*S,this._y=u*g*d-x*h*S,this._z=u*h*S+x*g*d,this._w=u*h*d-x*g*S;break;case"YXZ":this._x=x*h*d+u*g*S,this._y=u*g*d-x*h*S,this._z=u*h*S-x*g*d,this._w=u*h*d+x*g*S;break;case"ZXY":this._x=x*h*d-u*g*S,this._y=u*g*d+x*h*S,this._z=u*h*S+x*g*d,this._w=u*h*d-x*g*S;break;case"ZYX":this._x=x*h*d-u*g*S,this._y=u*g*d+x*h*S,this._z=u*h*S-x*g*d,this._w=u*h*d+x*g*S;break;case"YZX":this._x=x*h*d+u*g*S,this._y=u*g*d+x*h*S,this._z=u*h*S-x*g*d,this._w=u*h*d-x*g*S;break;case"XZY":this._x=x*h*d-u*g*S,this._y=u*g*d-x*h*S,this._z=u*h*S+x*g*d,this._w=u*h*d+x*g*S;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],l=t[5],c=t[9],u=t[2],h=t[6],d=t[10],x=i+l+d;if(x>0){const g=.5/Math.sqrt(x+1);this._w=.25/g,this._x=(h-c)*g,this._y=(s-u)*g,this._z=(a-r)*g}else if(i>l&&i>d){const g=2*Math.sqrt(1+i-l-d);this._w=(h-c)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+u)/g}else if(l>d){const g=2*Math.sqrt(1+l-i-d);this._w=(s-u)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+d-i-l);this._w=(a-r)/g,this._x=(s+u)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,l=t._x,c=t._y,u=t._z,h=t._w;return this._x=i*h+a*l+r*u-s*c,this._y=r*h+a*c+s*l-i*u,this._z=s*h+a*u+i*c-r*l,this._w=a*h-i*l-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,l=this.dot(e);l<0&&(i=-i,r=-r,s=-s,a=-a,l=-l);let c=1-t;if(l<.9995){const u=Math.acos(l),h=Math.sin(u);c=Math.sin(c*u)/h,t=Math.sin(t*u)/h,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,l=e.z,c=e.w,u=2*(a*r-l*i),h=2*(l*t-s*r),d=2*(s*i-a*t);return this.x=t+c*u+a*d-l*h,this.y=i+c*h+l*u-s*d,this.z=r+c*d+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,l=t.y,c=t.z;return this.x=r*c-s*l,this.y=s*a-i*c,this.z=i*l-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ya.copy(this).projectOnVector(e),this.sub(ya)}reflect(e){return this.sub(ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ya=new q,zu=new Ws;class at{constructor(e,t,i,r,s,a,l,c,u){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,l,c,u)}set(e,t,i,r,s,a,l,c,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],l=i[3],c=i[6],u=i[1],h=i[4],d=i[7],x=i[2],g=i[5],S=i[8],T=r[0],_=r[3],p=r[6],P=r[1],C=r[4],A=r[7],O=r[2],D=r[5],B=r[8];return s[0]=a*T+l*P+c*O,s[3]=a*_+l*C+c*D,s[6]=a*p+l*A+c*B,s[1]=u*T+h*P+d*O,s[4]=u*_+h*C+d*D,s[7]=u*p+h*A+d*B,s[2]=x*T+g*P+S*O,s[5]=x*_+g*C+S*D,s[8]=x*p+g*A+S*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8];return t*a*h-t*l*u-i*s*h+i*l*c+r*s*u-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],d=h*a-l*u,x=l*c-h*s,g=u*s-a*c,S=t*d+i*x+r*g;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=d*T,e[1]=(r*u-h*i)*T,e[2]=(l*i-r*a)*T,e[3]=x*T,e[4]=(h*t-r*c)*T,e[5]=(r*s-l*t)*T,e[6]=g*T,e[7]=(i*c-u*t)*T,e[8]=(a*t-i*s)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,l){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*l)+a+e,-r*u,r*c,-r*(-u*a+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Ea.makeScale(e,t)),this}rotate(e){return this.premultiply(Ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ea=new at,Vu=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hu=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yx(){const n={enabled:!0,workingColorSpace:Jr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Tt&&(r.r=Mi(r.r),r.g=Mi(r.g),r.b=Mi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Tt&&(r.r=jr(r.r),r.g=jr(r.g),r.b=jr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Vi?zo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Vs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Vs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Jr]:{primaries:e,whitePoint:i,transfer:zo,toXYZ:Vu,fromXYZ:Hu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:e,whitePoint:i,transfer:Tt,toXYZ:Vu,fromXYZ:Hu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),n}const _t=yx();function Mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function jr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let br;class Ex{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{br===void 0&&(br=Ho("canvas")),br.width=e.width,br.height=e.height;const r=br.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=br}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ho("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Mi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mi(t[i]/255)*255):t[i]=Mi(t[i]);return{data:t,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tx=0;class Ac{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=ns(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(Ta(r[a].image)):s.push(Ta(r[a]))}else s=Ta(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ta(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ex.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let Ax=0;const Aa=new q;class hn extends ts{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,i=xi,r=xi,s=Un,a=lr,l=Vn,c=ei,u=hn.DEFAULT_ANISOTROPY,h=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=ns(),this.name="",this.source=new Ac(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Aa).x}get height(){return this.source.getSize(Aa).y}get depth(){return this.source.getSize(Aa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){rt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){rt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sl:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case bl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sl:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case bl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Gh;hn.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,u=c[0],h=c[4],d=c[8],x=c[1],g=c[5],S=c[9],T=c[2],_=c[6],p=c[10];if(Math.abs(h-x)<.01&&Math.abs(d-T)<.01&&Math.abs(S-_)<.01){if(Math.abs(h+x)<.1&&Math.abs(d+T)<.1&&Math.abs(S+_)<.1&&Math.abs(u+g+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(u+1)/2,A=(g+1)/2,O=(p+1)/2,D=(h+x)/4,B=(d+T)/4,k=(S+_)/4;return C>A&&C>O?C<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(C),r=D/i,s=B/i):A>O?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=D/r,s=k/r):O<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),i=B/s,r=k/s),this.set(i,r,s,t),this}let P=Math.sqrt((_-S)*(_-S)+(d-T)*(d-T)+(x-h)*(x-h));return Math.abs(P)<.001&&(P=1),this.x=(_-S)/P,this.y=(d-T)/P,this.z=(x-h)/P,this.w=Math.acos((u+g+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wx extends ts{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new hn(r);this.textures=[];const a=i.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ac(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hr extends wx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Qh extends hn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rx extends hn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xs{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(s,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ro.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ro.copy(i.boundingBox)),ro.applyMatrix4(e.matrixWorld),this.union(ro)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),so.subVectors(this.max,fs),yr.subVectors(e.a,fs),Er.subVectors(e.b,fs),Tr.subVectors(e.c,fs),Pi.subVectors(Er,yr),Di.subVectors(Tr,Er),Ji.subVectors(yr,Tr);let t=[0,-Pi.z,Pi.y,0,-Di.z,Di.y,0,-Ji.z,Ji.y,Pi.z,0,-Pi.x,Di.z,0,-Di.x,Ji.z,0,-Ji.x,-Pi.y,Pi.x,0,-Di.y,Di.x,0,-Ji.y,Ji.x,0];return!wa(t,yr,Er,Tr,so)||(t=[1,0,0,0,1,0,0,0,1],!wa(t,yr,Er,Tr,so))?!1:(oo.crossVectors(Pi,Di),t=[oo.x,oo.y,oo.z],wa(t,yr,Er,Tr,so))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const si=[new q,new q,new q,new q,new q,new q,new q,new q],Nn=new q,ro=new Xs,yr=new q,Er=new q,Tr=new q,Pi=new q,Di=new q,Ji=new q,fs=new q,so=new q,oo=new q,Qi=new q;function wa(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Qi.fromArray(n,s);const l=r.x*Math.abs(Qi.x)+r.y*Math.abs(Qi.y)+r.z*Math.abs(Qi.z),c=e.dot(Qi),u=t.dot(Qi),h=i.dot(Qi);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>l)return!1}return!0}const Cx=new Xs,hs=new q,Ra=new q;class wc{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Cx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);const t=hs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(hs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(Ra)),this.expandByPoint(hs.copy(e.center).sub(Ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const oi=new q,Ca=new q,ao=new q,Li=new q,Pa=new q,lo=new q,Da=new q;class Px{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ca.copy(e).add(t).multiplyScalar(.5),ao.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(Ca);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ao),l=Li.dot(this.direction),c=-Li.dot(ao),u=Li.lengthSq(),h=Math.abs(1-a*a);let d,x,g,S;if(h>0)if(d=a*c-l,x=a*l-c,S=s*h,d>=0)if(x>=-S)if(x<=S){const T=1/h;d*=T,x*=T,g=d*(d+a*x+2*l)+x*(a*d+x+2*c)+u}else x=s,d=Math.max(0,-(a*x+l)),g=-d*d+x*(x+2*c)+u;else x=-s,d=Math.max(0,-(a*x+l)),g=-d*d+x*(x+2*c)+u;else x<=-S?(d=Math.max(0,-(-a*s+l)),x=d>0?-s:Math.min(Math.max(-s,-c),s),g=-d*d+x*(x+2*c)+u):x<=S?(d=0,x=Math.min(Math.max(-s,-c),s),g=x*(x+2*c)+u):(d=Math.max(0,-(a*s+l)),x=d>0?s:Math.min(Math.max(-s,-c),s),g=-d*d+x*(x+2*c)+u);else x=a>0?-s:s,d=Math.max(0,-(a*x+l)),g=-d*d+x*(x+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ca).addScaledVector(ao,x),g}intersectSphere(e,t){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),r=oi.dot(oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,l,c;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,x=this.origin;return u>=0?(i=(e.min.x-x.x)*u,r=(e.max.x-x.x)*u):(i=(e.max.x-x.x)*u,r=(e.min.x-x.x)*u),h>=0?(s=(e.min.y-x.y)*h,a=(e.max.y-x.y)*h):(s=(e.max.y-x.y)*h,a=(e.min.y-x.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(l=(e.min.z-x.z)*d,c=(e.max.z-x.z)*d):(l=(e.max.z-x.z)*d,c=(e.min.z-x.z)*d),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,i,r,s){Pa.subVectors(t,e),lo.subVectors(i,e),Da.crossVectors(Pa,lo);let a=this.direction.dot(Da),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;Li.subVectors(this.origin,e);const c=l*this.direction.dot(lo.crossVectors(Li,lo));if(c<0)return null;const u=l*this.direction.dot(Pa.cross(Li));if(u<0||c+u>a)return null;const h=-l*Li.dot(Da);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,i,r,s,a,l,c,u,h,d,x,g,S,T,_){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,l,c,u,h,d,x,g,S,T,_)}set(e,t,i,r,s,a,l,c,u,h,d,x,g,S,T,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=l,p[13]=c,p[2]=u,p[6]=h,p[10]=d,p[14]=x,p[3]=g,p[7]=S,p[11]=T,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ar.setFromMatrixColumn(e,0).length(),s=1/Ar.setFromMatrixColumn(e,1).length(),a=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const x=a*h,g=a*d,S=l*h,T=l*d;t[0]=c*h,t[4]=-c*d,t[8]=u,t[1]=g+S*u,t[5]=x-T*u,t[9]=-l*c,t[2]=T-x*u,t[6]=S+g*u,t[10]=a*c}else if(e.order==="YXZ"){const x=c*h,g=c*d,S=u*h,T=u*d;t[0]=x+T*l,t[4]=S*l-g,t[8]=a*u,t[1]=a*d,t[5]=a*h,t[9]=-l,t[2]=g*l-S,t[6]=T+x*l,t[10]=a*c}else if(e.order==="ZXY"){const x=c*h,g=c*d,S=u*h,T=u*d;t[0]=x-T*l,t[4]=-a*d,t[8]=S+g*l,t[1]=g+S*l,t[5]=a*h,t[9]=T-x*l,t[2]=-a*u,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){const x=a*h,g=a*d,S=l*h,T=l*d;t[0]=c*h,t[4]=S*u-g,t[8]=x*u+T,t[1]=c*d,t[5]=T*u+x,t[9]=g*u-S,t[2]=-u,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){const x=a*c,g=a*u,S=l*c,T=l*u;t[0]=c*h,t[4]=T-x*d,t[8]=S*d+g,t[1]=d,t[5]=a*h,t[9]=-l*h,t[2]=-u*h,t[6]=g*d+S,t[10]=x-T*d}else if(e.order==="XZY"){const x=a*c,g=a*u,S=l*c,T=l*u;t[0]=c*h,t[4]=-d,t[8]=u*h,t[1]=x*d+T,t[5]=a*h,t[9]=g*d-S,t[2]=S*d-g,t[6]=l*h,t[10]=T*d+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dx,e,Lx)}lookAt(e,t,i){const r=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ui.crossVectors(i,Sn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ui.crossVectors(i,Sn)),Ui.normalize(),co.crossVectors(Sn,Ui),r[0]=Ui.x,r[4]=co.x,r[8]=Sn.x,r[1]=Ui.y,r[5]=co.y,r[9]=Sn.y,r[2]=Ui.z,r[6]=co.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],l=i[4],c=i[8],u=i[12],h=i[1],d=i[5],x=i[9],g=i[13],S=i[2],T=i[6],_=i[10],p=i[14],P=i[3],C=i[7],A=i[11],O=i[15],D=r[0],B=r[4],k=r[8],w=r[12],b=r[1],z=r[5],j=r[9],ee=r[13],ue=r[2],ce=r[6],le=r[10],he=r[14],J=r[3],_e=r[7],Te=r[11],We=r[15];return s[0]=a*D+l*b+c*ue+u*J,s[4]=a*B+l*z+c*ce+u*_e,s[8]=a*k+l*j+c*le+u*Te,s[12]=a*w+l*ee+c*he+u*We,s[1]=h*D+d*b+x*ue+g*J,s[5]=h*B+d*z+x*ce+g*_e,s[9]=h*k+d*j+x*le+g*Te,s[13]=h*w+d*ee+x*he+g*We,s[2]=S*D+T*b+_*ue+p*J,s[6]=S*B+T*z+_*ce+p*_e,s[10]=S*k+T*j+_*le+p*Te,s[14]=S*w+T*ee+_*he+p*We,s[3]=P*D+C*b+A*ue+O*J,s[7]=P*B+C*z+A*ce+O*_e,s[11]=P*k+C*j+A*le+O*Te,s[15]=P*w+C*ee+A*he+O*We,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],l=e[5],c=e[9],u=e[13],h=e[2],d=e[6],x=e[10],g=e[14],S=e[3],T=e[7],_=e[11],p=e[15];return S*(+s*c*d-r*u*d-s*l*x+i*u*x+r*l*g-i*c*g)+T*(+t*c*g-t*u*x+s*a*x-r*a*g+r*u*h-s*c*h)+_*(+t*u*d-t*l*g-s*a*d+i*a*g+s*l*h-i*u*h)+p*(-r*l*h-t*c*d+t*l*x+r*a*d-i*a*x+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],d=e[9],x=e[10],g=e[11],S=e[12],T=e[13],_=e[14],p=e[15],P=d*_*u-T*x*u+T*c*g-l*_*g-d*c*p+l*x*p,C=S*x*u-h*_*u-S*c*g+a*_*g+h*c*p-a*x*p,A=h*T*u-S*d*u+S*l*g-a*T*g-h*l*p+a*d*p,O=S*d*c-h*T*c-S*l*x+a*T*x+h*l*_-a*d*_,D=t*P+i*C+r*A+s*O;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/D;return e[0]=P*B,e[1]=(T*x*s-d*_*s-T*r*g+i*_*g+d*r*p-i*x*p)*B,e[2]=(l*_*s-T*c*s+T*r*u-i*_*u-l*r*p+i*c*p)*B,e[3]=(d*c*s-l*x*s-d*r*u+i*x*u+l*r*g-i*c*g)*B,e[4]=C*B,e[5]=(h*_*s-S*x*s+S*r*g-t*_*g-h*r*p+t*x*p)*B,e[6]=(S*c*s-a*_*s-S*r*u+t*_*u+a*r*p-t*c*p)*B,e[7]=(a*x*s-h*c*s+h*r*u-t*x*u-a*r*g+t*c*g)*B,e[8]=A*B,e[9]=(S*d*s-h*T*s-S*i*g+t*T*g+h*i*p-t*d*p)*B,e[10]=(a*T*s-S*l*s+S*i*u-t*T*u-a*i*p+t*l*p)*B,e[11]=(h*l*s-a*d*s-h*i*u+t*d*u+a*i*g-t*l*g)*B,e[12]=O*B,e[13]=(h*T*r-S*d*r+S*i*x-t*T*x-h*i*_+t*d*_)*B,e[14]=(S*l*r-a*T*r-S*i*c+t*T*c+a*i*_-t*l*_)*B,e[15]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*x+t*l*x)*B,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,l=e.y,c=e.z,u=s*a,h=s*l;return this.set(u*a+i,u*l-r*c,u*c+r*l,0,u*l+r*c,h*l+i,h*c-r*a,0,u*c-r*l,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,l=t._z,c=t._w,u=s+s,h=a+a,d=l+l,x=s*u,g=s*h,S=s*d,T=a*h,_=a*d,p=l*d,P=c*u,C=c*h,A=c*d,O=i.x,D=i.y,B=i.z;return r[0]=(1-(T+p))*O,r[1]=(g+A)*O,r[2]=(S-C)*O,r[3]=0,r[4]=(g-A)*D,r[5]=(1-(x+p))*D,r[6]=(_+P)*D,r[7]=0,r[8]=(S+C)*B,r[9]=(_-P)*B,r[10]=(1-(x+T))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ar.set(r[0],r[1],r[2]).length();const a=Ar.set(r[4],r[5],r[6]).length(),l=Ar.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const u=1/s,h=1/a,d=1/l;return On.elements[0]*=u,On.elements[1]*=u,On.elements[2]*=u,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=d,On.elements[9]*=d,On.elements[10]*=d,t.setFromRotationMatrix(On),i.x=s,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,a,l=$n,c=!1){const u=this.elements,h=2*s/(t-e),d=2*s/(i-r),x=(t+e)/(t-e),g=(i+r)/(i-r);let S,T;if(c)S=s/(a-s),T=a*s/(a-s);else if(l===$n)S=-(a+s)/(a-s),T=-2*a*s/(a-s);else if(l===Vo)S=-a/(a-s),T=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=x,u[12]=0,u[1]=0,u[5]=d,u[9]=g,u[13]=0,u[2]=0,u[6]=0,u[10]=S,u[14]=T,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,a,l=$n,c=!1){const u=this.elements,h=2/(t-e),d=2/(i-r),x=-(t+e)/(t-e),g=-(i+r)/(i-r);let S,T;if(c)S=1/(a-s),T=a/(a-s);else if(l===$n)S=-2/(a-s),T=-(a+s)/(a-s);else if(l===Vo)S=-1/(a-s),T=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=0,u[12]=x,u[1]=0,u[5]=d,u[9]=0,u[13]=g,u[2]=0,u[6]=0,u[10]=S,u[14]=T,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ar=new q,On=new Bt,Dx=new q(0,0,0),Lx=new q(1,1,1),Ui=new q,co=new q,Sn=new q,Gu=new Bt,ku=new Ws;class ti{constructor(e=0,t=0,i=0,r=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],l=r[8],c=r[1],u=r[5],h=r[9],d=r[2],x=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(x,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(x,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ku.setFromEuler(this),this.setFromQuaternion(ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class ed{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ux=0;const Wu=new q,wr=new Ws,ai=new Bt,uo=new q,ds=new q,Ix=new q,Fx=new Ws,Xu=new q(1,0,0),ju=new q(0,1,0),Yu=new q(0,0,1),qu={type:"added"},Nx={type:"removed"},Rr={type:"childadded",child:null},La={type:"childremoved",child:null};class gn extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new q,t=new ti,i=new Ws,r=new q(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Bt},normalMatrix:{value:new at}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ed,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(Xu,e)}rotateY(e){return this.rotateOnAxis(ju,e)}rotateZ(e){return this.rotateOnAxis(Yu,e)}translateOnAxis(e,t){return Wu.copy(e).applyQuaternion(this.quaternion),this.position.add(Wu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xu,e)}translateY(e){return this.translateOnAxis(ju,e)}translateZ(e){return this.translateOnAxis(Yu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?uo.copy(e):uo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(ds,uo,this.up):ai.lookAt(uo,ds,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),wr.setFromRotationMatrix(ai),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(zt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qu),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nx),La.child=e,this.dispatchEvent(La),La.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qu),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,e,Ix),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,Fx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const d=c[u];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(e.animations,c))}}if(t){const l=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),d=a(e.shapes),x=a(e.skeletons),g=a(e.animations),S=a(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),x.length>0&&(i.skeletons=x),g.length>0&&(i.animations=g),S.length>0&&(i.nodes=S)}return i.object=r,i;function a(l){const c=[];for(const u in l){const h=l[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gn.DEFAULT_UP=new q(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new q,li=new q,Ua=new q,ci=new q,Cr=new q,Pr=new q,Ku=new q,Ia=new q,Fa=new q,Na=new q,Oa=new At,Ba=new At,za=new At;class zn{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Bn.subVectors(e,t),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Bn.subVectors(r,t),li.subVectors(i,t),Ua.subVectors(e,t);const a=Bn.dot(Bn),l=Bn.dot(li),c=Bn.dot(Ua),u=li.dot(li),h=li.dot(Ua),d=a*u-l*l;if(d===0)return s.set(0,0,0),null;const x=1/d,g=(u*c-l*h)*x,S=(a*h-l*c)*x;return s.set(1-g-S,S,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,i,r,s,a,l,c){return this.getBarycoord(e,t,i,r,ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ci.x),c.addScaledVector(a,ci.y),c.addScaledVector(l,ci.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return Oa.setScalar(0),Ba.setScalar(0),za.setScalar(0),Oa.fromBufferAttribute(e,t),Ba.fromBufferAttribute(e,i),za.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Oa,s.x),a.addScaledVector(Ba,s.y),a.addScaledVector(za,s.z),a}static isFrontFacing(e,t,i,r){return Bn.subVectors(i,t),li.subVectors(e,t),Bn.cross(li).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Bn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return zn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,l;Cr.subVectors(r,i),Pr.subVectors(s,i),Ia.subVectors(e,i);const c=Cr.dot(Ia),u=Pr.dot(Ia);if(c<=0&&u<=0)return t.copy(i);Fa.subVectors(e,r);const h=Cr.dot(Fa),d=Pr.dot(Fa);if(h>=0&&d<=h)return t.copy(r);const x=c*d-h*u;if(x<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Cr,a);Na.subVectors(e,s);const g=Cr.dot(Na),S=Pr.dot(Na);if(S>=0&&g<=S)return t.copy(s);const T=g*u-c*S;if(T<=0&&u>=0&&S<=0)return l=u/(u-S),t.copy(i).addScaledVector(Pr,l);const _=h*S-g*d;if(_<=0&&d-h>=0&&g-S>=0)return Ku.subVectors(s,r),l=(d-h)/(d-h+(g-S)),t.copy(r).addScaledVector(Ku,l);const p=1/(_+T+x);return a=T*p,l=x*p,t.copy(i).addScaledVector(Cr,a).addScaledVector(Pr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},fo={h:0,s:0,l:0};function Va(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class vt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=_t.workingColorSpace){if(e=Tc(e,1),t=ht(t,0,1),i=ht(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Va(a,s,e+1/3),this.g=Va(a,s,e),this.b=Va(a,s,e-1/3)}return _t.colorSpaceToWorking(this,r),this}setStyle(e,t=Dn){function i(s){s!==void 0&&parseFloat(s)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:rt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dn){const i=td[e.toLowerCase()];return i!==void 0?this.setHex(i,t):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return _t.workingToColorSpace(Qt.copy(this),e),Math.round(ht(Qt.r*255,0,255))*65536+Math.round(ht(Qt.g*255,0,255))*256+Math.round(ht(Qt.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(Qt.copy(this),t);const i=Qt.r,r=Qt.g,s=Qt.b,a=Math.max(i,r,s),l=Math.min(i,r,s);let c,u;const h=(l+a)/2;if(l===a)c=0,u=0;else{const d=a-l;switch(u=h<=.5?d/(a+l):d/(2-a-l),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Dn){_t.workingToColorSpace(Qt.copy(this),e);const t=Qt.r,i=Qt.g,r=Qt.b;return e!==Dn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(fo);const i=Cs(Ii.h,fo.h,t),r=Cs(Ii.s,fo.s,t),s=Cs(Ii.l,fo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new vt;vt.NAMES=td;let Ox=0;class js extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=Xr,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ul,this.blendDst=fl,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){rt(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){rt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ul&&(i.blendSrc=this.blendSrc),this.blendDst!==fl&&(i.blendDst=this.blendDst),this.blendEquation!==or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const l in s){const c=s[l];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ps extends js{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new q,ho=new dt;let Bx=0;class Jn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Iu,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ho.fromBufferAttribute(this,t),ho.applyMatrix3(e),this.setXY(t,ho.x,ho.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Br(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Br(t,this.array)),t}setX(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Br(t,this.array)),t}setY(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Br(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Br(t,this.array)),t}setW(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Iu&&(e.usage=this.usage),e}}class nd extends Jn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class id extends Jn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class nn extends Jn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let zx=0;const Pn=new Bt,Ha=new gn,Dr=new q,bn=new Xs,ps=new Xs,Xt=new q;class kn extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jh(e)?id:nd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new at().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,i){return Pn.makeTranslation(e,t,i),this.applyMatrix4(Pn),this}scale(e,t,i){return Pn.makeScale(e,t,i),this.applyMatrix4(Pn),this}lookAt(e){return Ha.lookAt(e),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];ps.setFromBufferAttribute(l),this.morphTargetsRelative?(Xt.addVectors(bn.min,ps.min),bn.expandByPoint(Xt),Xt.addVectors(bn.max,ps.max),bn.expandByPoint(Xt)):(bn.expandByPoint(ps.min),bn.expandByPoint(ps.max))}bn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Xt));if(t)for(let s=0,a=t.length;s<a;s++){const l=t[s],c=this.morphTargetsRelative;for(let u=0,h=l.count;u<h;u++)Xt.fromBufferAttribute(l,u),c&&(Dr.fromBufferAttribute(e,u),Xt.add(Dr)),r=Math.max(r,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),l=[],c=[];for(let k=0;k<i.count;k++)l[k]=new q,c[k]=new q;const u=new q,h=new q,d=new q,x=new dt,g=new dt,S=new dt,T=new q,_=new q;function p(k,w,b){u.fromBufferAttribute(i,k),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,b),x.fromBufferAttribute(s,k),g.fromBufferAttribute(s,w),S.fromBufferAttribute(s,b),h.sub(u),d.sub(u),g.sub(x),S.sub(x);const z=1/(g.x*S.y-S.x*g.y);isFinite(z)&&(T.copy(h).multiplyScalar(S.y).addScaledVector(d,-g.y).multiplyScalar(z),_.copy(d).multiplyScalar(g.x).addScaledVector(h,-S.x).multiplyScalar(z),l[k].add(T),l[w].add(T),l[b].add(T),c[k].add(_),c[w].add(_),c[b].add(_))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let k=0,w=P.length;k<w;++k){const b=P[k],z=b.start,j=b.count;for(let ee=z,ue=z+j;ee<ue;ee+=3)p(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const C=new q,A=new q,O=new q,D=new q;function B(k){O.fromBufferAttribute(r,k),D.copy(O);const w=l[k];C.copy(w),C.sub(O.multiplyScalar(O.dot(w))).normalize(),A.crossVectors(D,w);const z=A.dot(c[k])<0?-1:1;a.setXYZW(k,C.x,C.y,C.z,z)}for(let k=0,w=P.length;k<w;++k){const b=P[k],z=b.start,j=b.count;for(let ee=z,ue=z+j;ee<ue;ee+=3)B(e.getX(ee+0)),B(e.getX(ee+1)),B(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let x=0,g=i.count;x<g;x++)i.setXYZ(x,0,0,0);const r=new q,s=new q,a=new q,l=new q,c=new q,u=new q,h=new q,d=new q;if(e)for(let x=0,g=e.count;x<g;x+=3){const S=e.getX(x+0),T=e.getX(x+1),_=e.getX(x+2);r.fromBufferAttribute(t,S),s.fromBufferAttribute(t,T),a.fromBufferAttribute(t,_),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,T),u.fromBufferAttribute(i,_),l.add(h),c.add(h),u.add(h),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(T,c.x,c.y,c.z),i.setXYZ(_,u.x,u.y,u.z)}else for(let x=0,g=t.count;x<g;x+=3)r.fromBufferAttribute(t,x+0),s.fromBufferAttribute(t,x+1),a.fromBufferAttribute(t,x+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(x+0,h.x,h.y,h.z),i.setXYZ(x+1,h.x,h.y,h.z),i.setXYZ(x+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(l,c){const u=l.array,h=l.itemSize,d=l.normalized,x=new u.constructor(c.length*h);let g=0,S=0;for(let T=0,_=c.length;T<_;T++){l.isInterleavedBufferAttribute?g=c[T]*l.data.stride+l.offset:g=c[T]*h;for(let p=0;p<h;p++)x[S++]=u[g++]}return new Jn(x,h,d)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,i=this.index.array,r=this.attributes;for(const l in r){const c=r[l],u=e(c,i);t.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const c=[],u=s[l];for(let h=0,d=u.length;h<d;h++){const x=u[h],g=e(x,i);c.push(g)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const u=a[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let d=0,x=u.length;d<x;d++){const g=u[d];h.push(g.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(t))}const s=e.morphAttributes;for(const u in s){const h=[],d=s[u];for(let x=0,g=d.length;x<g;x++)h.push(d[x].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $u=new Bt,er=new Px,po=new wc,Zu=new q,mo=new q,xo=new q,go=new q,Ga=new q,_o=new q,Ju=new q,vo=new q;class Gt extends gn{constructor(e=new kn,t=new Ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){_o.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=l[c],d=s[c];h!==0&&(Ga.fromBufferAttribute(d,e),a?_o.addScaledVector(Ga,h):_o.addScaledVector(Ga.sub(t),h))}t.add(_o)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(s),er.copy(e.ray).recast(e.near),!(po.containsPoint(er.origin)===!1&&(er.intersectSphere(po,Zu)===null||er.origin.distanceToSquared(Zu)>(e.far-e.near)**2))&&($u.copy(s).invert(),er.copy(e.ray).applyMatrix4($u),!(i.boundingBox!==null&&er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,er)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,l=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,x=s.groups,g=s.drawRange;if(l!==null)if(Array.isArray(a))for(let S=0,T=x.length;S<T;S++){const _=x[S],p=a[_.materialIndex],P=Math.max(_.start,g.start),C=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let A=P,O=C;A<O;A+=3){const D=l.getX(A),B=l.getX(A+1),k=l.getX(A+2);r=Mo(this,p,e,i,u,h,d,D,B,k),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const S=Math.max(0,g.start),T=Math.min(l.count,g.start+g.count);for(let _=S,p=T;_<p;_+=3){const P=l.getX(_),C=l.getX(_+1),A=l.getX(_+2);r=Mo(this,a,e,i,u,h,d,P,C,A),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let S=0,T=x.length;S<T;S++){const _=x[S],p=a[_.materialIndex],P=Math.max(_.start,g.start),C=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let A=P,O=C;A<O;A+=3){const D=A,B=A+1,k=A+2;r=Mo(this,p,e,i,u,h,d,D,B,k),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const S=Math.max(0,g.start),T=Math.min(c.count,g.start+g.count);for(let _=S,p=T;_<p;_+=3){const P=_,C=_+1,A=_+2;r=Mo(this,a,e,i,u,h,d,P,C,A),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function Vx(n,e,t,i,r,s,a,l){let c;if(e.side===xn?c=i.intersectTriangle(a,s,r,!0,l):c=i.intersectTriangle(r,s,a,e.side===ji,l),c===null)return null;vo.copy(l),vo.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(vo);return u<t.near||u>t.far?null:{distance:u,point:vo.clone(),object:n}}function Mo(n,e,t,i,r,s,a,l,c,u){n.getVertexPosition(l,mo),n.getVertexPosition(c,xo),n.getVertexPosition(u,go);const h=Vx(n,e,t,i,mo,xo,go,Ju);if(h){const d=new q;zn.getBarycoord(Ju,mo,xo,go,d),r&&(h.uv=zn.getInterpolatedAttribute(r,l,c,u,d,new dt)),s&&(h.uv1=zn.getInterpolatedAttribute(s,l,c,u,d,new dt)),a&&(h.normal=zn.getInterpolatedAttribute(a,l,c,u,d,new q),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const x={a:l,b:c,c:u,normal:new q,materialIndex:0};zn.getNormal(mo,xo,go,x.normal),h.face=x,h.barycoord=d}return h}class dr extends kn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],h=[],d=[];let x=0,g=0;S("z","y","x",-1,-1,i,t,e,a,s,0),S("z","y","x",1,-1,i,t,-e,a,s,1),S("x","z","y",1,1,e,i,t,r,a,2),S("x","z","y",1,-1,e,i,-t,r,a,3),S("x","y","z",1,-1,e,t,i,r,s,4),S("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new nn(u,3)),this.setAttribute("normal",new nn(h,3)),this.setAttribute("uv",new nn(d,2));function S(T,_,p,P,C,A,O,D,B,k,w){const b=A/B,z=O/k,j=A/2,ee=O/2,ue=D/2,ce=B+1,le=k+1;let he=0,J=0;const _e=new q;for(let Te=0;Te<le;Te++){const We=Te*z-ee;for(let Qe=0;Qe<ce;Qe++){const ft=Qe*b-j;_e[T]=ft*P,_e[_]=We*C,_e[p]=ue,u.push(_e.x,_e.y,_e.z),_e[T]=0,_e[_]=0,_e[p]=D>0?1:-1,h.push(_e.x,_e.y,_e.z),d.push(Qe/B),d.push(1-Te/k),he+=1}}for(let Te=0;Te<k;Te++)for(let We=0;We<B;We++){const Qe=x+We+ce*Te,ft=x+We+ce*(Te+1),Ae=x+(We+1)+ce*(Te+1),ve=x+(We+1)+ce*Te;c.push(Qe,ft,ve),c.push(ft,Ae,ve),J+=6}l.addGroup(g,J,w),g+=J,x+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function cn(n){const e={};for(let t=0;t<n.length;t++){const i=Qr(n[t]);for(const r in i)e[r]=i[r]}return e}function Hx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function rd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const Gx={clone:Qr,merge:cn};var kx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends js{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kx,this.fragmentShader=Wx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qr(e.uniforms),this.uniformsGroups=Hx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class sd extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new q,Qu=new dt,ef=new dt;class En extends sd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hs*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,t){return this.getViewBounds(e,Qu,ef),t.subVectors(ef,Qu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Lr=-90,Ur=1;class Xx extends gn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(Lr,Ur,e,t);r.layers=this.layers,this.add(r);const s=new En(Lr,Ur,e,t);s.layers=this.layers,this.add(s);const a=new En(Lr,Ur,e,t);a.layers=this.layers,this.add(a);const l=new En(Lr,Ur,e,t);l.layers=this.layers,this.add(l);const c=new En(Lr,Ur,e,t);c.layers=this.layers,this.add(c);const u=new En(Lr,Ur,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,l,c]=t;for(const u of t)this.remove(u);if(e===$n)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Vo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,c,u,h]=this.children,d=e.getRenderTarget(),x=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,l),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,x,g),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class od extends hn{constructor(e=[],t=$r,i,r,s,a,l,c,u,h){super(e,t,i,r,s,a,l,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jx extends hr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new od(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new dr(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:Qr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:vi});s.uniforms.tEquirect.value=t;const a=new Gt(r,s),l=t.minFilter;return t.minFilter===lr&&(t.minFilter=Un),new Xx(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class zr extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yx={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const l=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const T of e.hand.values()){const _=t.getJointPose(T,i),p=this._getHandJoint(u,T);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],x=h.position.distanceTo(d.position),g=.02,S=.005;u.inputState.pinching&&x>g+S?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&x<=g-S&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Yx)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class qx extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Kx extends hn{constructor(e=null,t=1,i=1,r,s,a,l,c,u=An,h=An,d,x){super(null,a,l,c,u,h,r,s,d,x),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wa=new q,$x=new q,Zx=new at;class sr{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Wa.subVectors(i,t).cross($x.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Wa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Zx.getNormalMatrix(e),r=this.coplanarPoint(Wa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tr=new wc,Jx=new dt(.5,.5),So=new q;class Rc{constructor(e=new sr,t=new sr,i=new sr,r=new sr,s=new sr,a=new sr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$n,i=!1){const r=this.planes,s=e.elements,a=s[0],l=s[1],c=s[2],u=s[3],h=s[4],d=s[5],x=s[6],g=s[7],S=s[8],T=s[9],_=s[10],p=s[11],P=s[12],C=s[13],A=s[14],O=s[15];if(r[0].setComponents(u-a,g-h,p-S,O-P).normalize(),r[1].setComponents(u+a,g+h,p+S,O+P).normalize(),r[2].setComponents(u+l,g+d,p+T,O+C).normalize(),r[3].setComponents(u-l,g-d,p-T,O-C).normalize(),i)r[4].setComponents(c,x,_,A).normalize(),r[5].setComponents(u-c,g-x,p-_,O-A).normalize();else if(r[4].setComponents(u-c,g-x,p-_,O-A).normalize(),t===$n)r[5].setComponents(u+c,g+x,p+_,O+A).normalize();else if(t===Vo)r[5].setComponents(c,x,_,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){tr.center.set(0,0,0);const t=Jx.distanceTo(e.center);return tr.radius=.7071067811865476+t,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(So.x=r.normal.x>0?e.max.x:e.min.x,So.y=r.normal.y>0?e.max.y:e.min.y,So.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(So)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ad extends hn{constructor(e,t,i=fr,r,s,a,l=An,c=An,u,h=Bs,d=1){if(h!==Bs&&h!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:d};super(x,r,s,a,l,c,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ac(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ld extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Cc extends kn{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:l,thetaLength:c};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],x=[],g=[];let S=0;const T=[],_=i/2;let p=0;P(),a===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new nn(d,3)),this.setAttribute("normal",new nn(x,3)),this.setAttribute("uv",new nn(g,2));function P(){const A=new q,O=new q;let D=0;const B=(t-e)/i;for(let k=0;k<=s;k++){const w=[],b=k/s,z=b*(t-e)+e;for(let j=0;j<=r;j++){const ee=j/r,ue=ee*c+l,ce=Math.sin(ue),le=Math.cos(ue);O.x=z*ce,O.y=-b*i+_,O.z=z*le,d.push(O.x,O.y,O.z),A.set(ce,B,le).normalize(),x.push(A.x,A.y,A.z),g.push(ee,1-b),w.push(S++)}T.push(w)}for(let k=0;k<r;k++)for(let w=0;w<s;w++){const b=T[w][k],z=T[w+1][k],j=T[w+1][k+1],ee=T[w][k+1];(e>0||w!==0)&&(h.push(b,z,ee),D+=3),(t>0||w!==s-1)&&(h.push(z,j,ee),D+=3)}u.addGroup(p,D,0),p+=D}function C(A){const O=S,D=new dt,B=new q;let k=0;const w=A===!0?e:t,b=A===!0?1:-1;for(let j=1;j<=r;j++)d.push(0,_*b,0),x.push(0,b,0),g.push(.5,.5),S++;const z=S;for(let j=0;j<=r;j++){const ue=j/r*c+l,ce=Math.cos(ue),le=Math.sin(ue);B.x=w*le,B.y=_*b,B.z=w*ce,d.push(B.x,B.y,B.z),x.push(0,b,0),D.x=ce*.5+.5,D.y=le*.5*b+.5,g.push(D.x,D.y),S++}for(let j=0;j<r;j++){const ee=O+j,ue=z+j;A===!0?h.push(ue,ue+1,ee):h.push(ue+1,ue,ee),k+=3}u.addGroup(p,k,A===!0?1:2),p+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pc extends kn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];l(r),u(i),h(),this.setAttribute("position",new nn(s,3)),this.setAttribute("normal",new nn(s.slice(),3)),this.setAttribute("uv",new nn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function l(P){const C=new q,A=new q,O=new q;for(let D=0;D<t.length;D+=3)g(t[D+0],C),g(t[D+1],A),g(t[D+2],O),c(C,A,O,P)}function c(P,C,A,O){const D=O+1,B=[];for(let k=0;k<=D;k++){B[k]=[];const w=P.clone().lerp(A,k/D),b=C.clone().lerp(A,k/D),z=D-k;for(let j=0;j<=z;j++)j===0&&k===D?B[k][j]=w:B[k][j]=w.clone().lerp(b,j/z)}for(let k=0;k<D;k++)for(let w=0;w<2*(D-k)-1;w++){const b=Math.floor(w/2);w%2===0?(x(B[k][b+1]),x(B[k+1][b]),x(B[k][b])):(x(B[k][b+1]),x(B[k+1][b+1]),x(B[k+1][b]))}}function u(P){const C=new q;for(let A=0;A<s.length;A+=3)C.x=s[A+0],C.y=s[A+1],C.z=s[A+2],C.normalize().multiplyScalar(P),s[A+0]=C.x,s[A+1]=C.y,s[A+2]=C.z}function h(){const P=new q;for(let C=0;C<s.length;C+=3){P.x=s[C+0],P.y=s[C+1],P.z=s[C+2];const A=_(P)/2/Math.PI+.5,O=p(P)/Math.PI+.5;a.push(A,1-O)}S(),d()}function d(){for(let P=0;P<a.length;P+=6){const C=a[P+0],A=a[P+2],O=a[P+4],D=Math.max(C,A,O),B=Math.min(C,A,O);D>.9&&B<.1&&(C<.2&&(a[P+0]+=1),A<.2&&(a[P+2]+=1),O<.2&&(a[P+4]+=1))}}function x(P){s.push(P.x,P.y,P.z)}function g(P,C){const A=P*3;C.x=e[A+0],C.y=e[A+1],C.z=e[A+2]}function S(){const P=new q,C=new q,A=new q,O=new q,D=new dt,B=new dt,k=new dt;for(let w=0,b=0;w<s.length;w+=9,b+=6){P.set(s[w+0],s[w+1],s[w+2]),C.set(s[w+3],s[w+4],s[w+5]),A.set(s[w+6],s[w+7],s[w+8]),D.set(a[b+0],a[b+1]),B.set(a[b+2],a[b+3]),k.set(a[b+4],a[b+5]),O.copy(P).add(C).add(A).divideScalar(3);const z=_(O);T(D,b+0,P,z),T(B,b+2,C,z),T(k,b+4,A,z)}}function T(P,C,A,O){O<0&&P.x===1&&(a[C]=P.x-1),A.x===0&&A.z===0&&(a[C]=O/2/Math.PI+.5)}function _(P){return Math.atan2(P.z,-P.x)}function p(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.vertices,e.indices,e.radius,e.details)}}class Qo extends kn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,l=Math.floor(i),c=Math.floor(r),u=l+1,h=c+1,d=e/l,x=t/c,g=[],S=[],T=[],_=[];for(let p=0;p<h;p++){const P=p*x-a;for(let C=0;C<u;C++){const A=C*d-s;S.push(A,-P,0),T.push(0,0,1),_.push(C/l),_.push(1-p/c)}}for(let p=0;p<c;p++)for(let P=0;P<l;P++){const C=P+u*p,A=P+u*(p+1),O=P+1+u*(p+1),D=P+1+u*p;g.push(C,A,D),g.push(A,O,D)}this.setIndex(g),this.setAttribute("position",new nn(S,3)),this.setAttribute("normal",new nn(T,3)),this.setAttribute("uv",new nn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.width,e.height,e.widthSegments,e.heightSegments)}}class zi extends kn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+l,Math.PI);let u=0;const h=[],d=new q,x=new q,g=[],S=[],T=[],_=[];for(let p=0;p<=i;p++){const P=[],C=p/i;let A=0;p===0&&a===0?A=.5/t:p===i&&c===Math.PI&&(A=-.5/t);for(let O=0;O<=t;O++){const D=O/t;d.x=-e*Math.cos(r+D*s)*Math.sin(a+C*l),d.y=e*Math.cos(a+C*l),d.z=e*Math.sin(r+D*s)*Math.sin(a+C*l),S.push(d.x,d.y,d.z),x.copy(d).normalize(),T.push(x.x,x.y,x.z),_.push(D+A,1-C),P.push(u++)}h.push(P)}for(let p=0;p<i;p++)for(let P=0;P<t;P++){const C=h[p][P+1],A=h[p][P],O=h[p+1][P],D=h[p+1][P+1];(p!==0||a>0)&&g.push(C,A,D),(p!==i-1||c<Math.PI)&&g.push(A,O,D)}this.setIndex(g),this.setAttribute("position",new nn(S,3)),this.setAttribute("normal",new nn(T,3)),this.setAttribute("uv",new nn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Dc extends Pc{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Dc(e.radius,e.detail)}}class ms extends js{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$h,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qx extends js{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eg extends js{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cd extends gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Xa=new Bt,tf=new q,nf=new q;class tg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rc,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;tf.setFromMatrixPosition(e.matrixWorld),t.position.copy(tf),nf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nf),t.updateMatrixWorld(),Xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const rf=new Bt,xs=new q,ja=new q;class ng extends tg{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new At(2,1,1,1),new At(0,1,1,1),new At(3,1,1,1),new At(1,1,1,1),new At(3,0,1,1),new At(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),xs.setFromMatrixPosition(e.matrixWorld),i.position.copy(xs),ja.copy(i.position),ja.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ja),i.updateMatrixWorld(),r.makeTranslation(-xs.x,-xs.y,-xs.z),rf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rf,i.coordinateSystem,i.reversedDepth)}}class ig extends cd{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new ng}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class rg extends sd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,l=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sg extends cd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class og extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function sf(n,e,t,i){const r=ag(i);switch(t){case Yh:return n*e;case Kh:return n*e/r.components*r.byteLength;case Sc:return n*e/r.components*r.byteLength;case bc:return n*e*2/r.components*r.byteLength;case yc:return n*e*2/r.components*r.byteLength;case qh:return n*e*3/r.components*r.byteLength;case Vn:return n*e*4/r.components*r.byteLength;case Ec:return n*e*4/r.components*r.byteLength;case Ro:case Co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Po:case Do:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case El:case Al:return Math.max(n,16)*Math.max(e,8)/4;case yl:case Tl:return Math.max(n,8)*Math.max(e,8)/2;case wl:case Rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Il:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case zl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case kl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Wl:case Xl:case jl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Yl:case ql:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Kl:case $l:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ag(n){switch(n){case ei:case kh:return{byteLength:1,components:1};case Ns:case Wh:case es:return{byteLength:2,components:1};case vc:case Mc:return{byteLength:2,components:4};case fr:case _c:case gi:return{byteLength:4,components:1};case Xh:case jh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gc}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gc);function ud(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function lg(n){const e=new WeakMap;function t(l,c){const u=l.array,h=l.usage,d=u.byteLength,x=n.createBuffer();n.bindBuffer(c,x),n.bufferData(c,u,h),l.onUploadCallback();let g;if(u instanceof Float32Array)g=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)g=n.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=n.SHORT;else if(u instanceof Uint32Array)g=n.UNSIGNED_INT;else if(u instanceof Int32Array)g=n.INT;else if(u instanceof Int8Array)g=n.BYTE;else if(u instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:x,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function i(l,c,u){const h=c.array,d=c.updateRanges;if(n.bindBuffer(u,l),d.length===0)n.bufferSubData(u,0,h);else{d.sort((g,S)=>g.start-S.start);let x=0;for(let g=1;g<d.length;g++){const S=d[x],T=d[g];T.start<=S.start+S.count+1?S.count=Math.max(S.count,T.start+T.count-S.start):(++x,d[x]=T)}d.length=x+1;for(let g=0,S=d.length;g<S;g++){const T=d[g];n.bufferSubData(u,T.start*h.BYTES_PER_ELEMENT,h,T.start,T.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(n.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=e.get(l);if(u===void 0)e.set(l,t(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,l,c),u.version=l.version}}return{get:r,remove:s,update:a}}var cg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ug=`#ifdef USE_ALPHAHASH
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
#endif`,fg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mg=`#ifdef USE_AOMAP
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
#endif`,xg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gg=`#ifdef USE_BATCHING
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
#endif`,_g=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bg=`#ifdef USE_IRIDESCENCE
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
#endif`,yg=`#ifdef USE_BUMPMAP
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
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lg=`#define PI 3.141592653589793
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
} // validated`,Ug=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ig=`vec3 transformedNormal = objectNormal;
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
#endif`,Fg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Og=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hg=`#ifdef USE_ENVMAP
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
#endif`,Gg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kg=`#ifdef USE_ENVMAP
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
#endif`,Wg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xg=`#ifdef USE_ENVMAP
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
#endif`,jg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$g=`#ifdef USE_GRADIENTMAP
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
}`,Zg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e_=`uniform bool receiveShadow;
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
#endif`,t_=`#ifdef USE_ENVMAP
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
#endif`,n_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o_=`PhysicalMaterial material;
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
#endif`,a_=`uniform sampler2D dfgLUT;
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
}`,l_=`
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
#endif`,c_=`#if defined( RE_IndirectDiffuse )
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
#endif`,u_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,__=`#if defined( USE_POINTS_UV )
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
#endif`,v_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,b_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E_=`#ifdef USE_MORPHTARGETS
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
#endif`,T_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,w_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D_=`#ifdef USE_NORMALMAP
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
#endif`,L_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Y_=`float getShadowMask() {
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
}`,q_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K_=`#ifdef USE_SKINNING
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
#endif`,$_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z_=`#ifdef USE_SKINNING
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
#endif`,J_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ev=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nv=`#ifdef USE_TRANSMISSION
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
#endif`,iv=`#ifdef USE_TRANSMISSION
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
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,av=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cv=`uniform sampler2D t2D;
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
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pv=`#include <common>
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
}`,mv=`#if DEPTH_PACKING == 3200
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
}`,xv=`#define DISTANCE
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
}`,gv=`#define DISTANCE
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
}`,_v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mv=`uniform float scale;
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
}`,Sv=`uniform vec3 diffuse;
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
}`,bv=`#include <common>
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
}`,yv=`uniform vec3 diffuse;
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
}`,Ev=`#define LAMBERT
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
}`,Tv=`#define LAMBERT
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
}`,Av=`#define MATCAP
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
}`,wv=`#define MATCAP
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
}`,Rv=`#define NORMAL
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
}`,Cv=`#define NORMAL
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
}`,Pv=`#define PHONG
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
}`,Dv=`#define PHONG
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
}`,Lv=`#define STANDARD
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
}`,Uv=`#define STANDARD
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
}`,Iv=`#define TOON
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
}`,Fv=`#define TOON
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
}`,Nv=`uniform float size;
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
}`,Ov=`uniform vec3 diffuse;
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
}`,Bv=`#include <common>
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
}`,zv=`uniform vec3 color;
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
}`,Vv=`uniform float rotation;
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
}`,Hv=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:cg,alphahash_pars_fragment:ug,alphamap_fragment:fg,alphamap_pars_fragment:hg,alphatest_fragment:dg,alphatest_pars_fragment:pg,aomap_fragment:mg,aomap_pars_fragment:xg,batching_pars_vertex:gg,batching_vertex:_g,begin_vertex:vg,beginnormal_vertex:Mg,bsdfs:Sg,iridescence_fragment:bg,bumpmap_pars_fragment:yg,clipping_planes_fragment:Eg,clipping_planes_pars_fragment:Tg,clipping_planes_pars_vertex:Ag,clipping_planes_vertex:wg,color_fragment:Rg,color_pars_fragment:Cg,color_pars_vertex:Pg,color_vertex:Dg,common:Lg,cube_uv_reflection_fragment:Ug,defaultnormal_vertex:Ig,displacementmap_pars_vertex:Fg,displacementmap_vertex:Ng,emissivemap_fragment:Og,emissivemap_pars_fragment:Bg,colorspace_fragment:zg,colorspace_pars_fragment:Vg,envmap_fragment:Hg,envmap_common_pars_fragment:Gg,envmap_pars_fragment:kg,envmap_pars_vertex:Wg,envmap_physical_pars_fragment:t_,envmap_vertex:Xg,fog_vertex:jg,fog_pars_vertex:Yg,fog_fragment:qg,fog_pars_fragment:Kg,gradientmap_pars_fragment:$g,lightmap_pars_fragment:Zg,lights_lambert_fragment:Jg,lights_lambert_pars_fragment:Qg,lights_pars_begin:e_,lights_toon_fragment:n_,lights_toon_pars_fragment:i_,lights_phong_fragment:r_,lights_phong_pars_fragment:s_,lights_physical_fragment:o_,lights_physical_pars_fragment:a_,lights_fragment_begin:l_,lights_fragment_maps:c_,lights_fragment_end:u_,logdepthbuf_fragment:f_,logdepthbuf_pars_fragment:h_,logdepthbuf_pars_vertex:d_,logdepthbuf_vertex:p_,map_fragment:m_,map_pars_fragment:x_,map_particle_fragment:g_,map_particle_pars_fragment:__,metalnessmap_fragment:v_,metalnessmap_pars_fragment:M_,morphinstance_vertex:S_,morphcolor_vertex:b_,morphnormal_vertex:y_,morphtarget_pars_vertex:E_,morphtarget_vertex:T_,normal_fragment_begin:A_,normal_fragment_maps:w_,normal_pars_fragment:R_,normal_pars_vertex:C_,normal_vertex:P_,normalmap_pars_fragment:D_,clearcoat_normal_fragment_begin:L_,clearcoat_normal_fragment_maps:U_,clearcoat_pars_fragment:I_,iridescence_pars_fragment:F_,opaque_fragment:N_,packing:O_,premultiplied_alpha_fragment:B_,project_vertex:z_,dithering_fragment:V_,dithering_pars_fragment:H_,roughnessmap_fragment:G_,roughnessmap_pars_fragment:k_,shadowmap_pars_fragment:W_,shadowmap_pars_vertex:X_,shadowmap_vertex:j_,shadowmask_pars_fragment:Y_,skinbase_vertex:q_,skinning_pars_vertex:K_,skinning_vertex:$_,skinnormal_vertex:Z_,specularmap_fragment:J_,specularmap_pars_fragment:Q_,tonemapping_fragment:ev,tonemapping_pars_fragment:tv,transmission_fragment:nv,transmission_pars_fragment:iv,uv_pars_fragment:rv,uv_pars_vertex:sv,uv_vertex:ov,worldpos_vertex:av,background_vert:lv,background_frag:cv,backgroundCube_vert:uv,backgroundCube_frag:fv,cube_vert:hv,cube_frag:dv,depth_vert:pv,depth_frag:mv,distanceRGBA_vert:xv,distanceRGBA_frag:gv,equirect_vert:_v,equirect_frag:vv,linedashed_vert:Mv,linedashed_frag:Sv,meshbasic_vert:bv,meshbasic_frag:yv,meshlambert_vert:Ev,meshlambert_frag:Tv,meshmatcap_vert:Av,meshmatcap_frag:wv,meshnormal_vert:Rv,meshnormal_frag:Cv,meshphong_vert:Pv,meshphong_frag:Dv,meshphysical_vert:Lv,meshphysical_frag:Uv,meshtoon_vert:Iv,meshtoon_frag:Fv,points_vert:Nv,points_frag:Ov,shadow_vert:Bv,shadow_frag:zv,sprite_vert:Vv,sprite_frag:Hv},Ie={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Kn={basic:{uniforms:cn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:cn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:cn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:cn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:cn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:cn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:cn([Ie.points,Ie.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:cn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:cn([Ie.common,Ie.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:cn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:cn([Ie.sprite,Ie.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:cn([Ie.common,Ie.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:cn([Ie.lights,Ie.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Kn.physical={uniforms:cn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const bo={r:0,b:0,g:0},nr=new ti,Gv=new Bt;function kv(n,e,t,i,r,s,a){const l=new vt(0);let c=s===!0?0:1,u,h,d=null,x=0,g=null;function S(C){let A=C.isScene===!0?C.background:null;return A&&A.isTexture&&(A=(C.backgroundBlurriness>0?t:e).get(A)),A}function T(C){let A=!1;const O=S(C);O===null?p(l,c):O&&O.isColor&&(p(O,1),A=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(C,A){const O=S(A);O&&(O.isCubeTexture||O.mapping===Jo)?(h===void 0&&(h=new Gt(new dr(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Qr(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,B,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),nr.copy(A.backgroundRotation),nr.x*=-1,nr.y*=-1,nr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),h.material.uniforms.envMap.value=O,h.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gv.makeRotationFromEuler(nr)),h.material.toneMapped=_t.getTransfer(O.colorSpace)!==Tt,(d!==O||x!==O.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,d=O,x=O.version,g=n.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):O&&O.isTexture&&(u===void 0&&(u=new Gt(new Qo(2,2),new Ei({name:"BackgroundMaterial",uniforms:Qr(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=O,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.toneMapped=_t.getTransfer(O.colorSpace)!==Tt,O.matrixAutoUpdate===!0&&O.updateMatrix(),u.material.uniforms.uvTransform.value.copy(O.matrix),(d!==O||x!==O.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,d=O,x=O.version,g=n.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null))}function p(C,A){C.getRGB(bo,rd(n)),i.buffers.color.setClear(bo.r,bo.g,bo.b,A,a)}function P(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return l},setClearColor:function(C,A=1){l.set(C),c=A,p(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(C){c=C,p(l,c)},render:T,addToRenderList:_,dispose:P}}function Wv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=x(null);let s=r,a=!1;function l(b,z,j,ee,ue){let ce=!1;const le=d(ee,j,z);s!==le&&(s=le,u(s.object)),ce=g(b,ee,j,ue),ce&&S(b,ee,j,ue),ue!==null&&e.update(ue,n.ELEMENT_ARRAY_BUFFER),(ce||a)&&(a=!1,A(b,z,j,ee),ue!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function c(){return n.createVertexArray()}function u(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function d(b,z,j){const ee=j.wireframe===!0;let ue=i[b.id];ue===void 0&&(ue={},i[b.id]=ue);let ce=ue[z.id];ce===void 0&&(ce={},ue[z.id]=ce);let le=ce[ee];return le===void 0&&(le=x(c()),ce[ee]=le),le}function x(b){const z=[],j=[],ee=[];for(let ue=0;ue<t;ue++)z[ue]=0,j[ue]=0,ee[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:j,attributeDivisors:ee,object:b,attributes:{},index:null}}function g(b,z,j,ee){const ue=s.attributes,ce=z.attributes;let le=0;const he=j.getAttributes();for(const J in he)if(he[J].location>=0){const Te=ue[J];let We=ce[J];if(We===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(We=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(We=b.instanceColor)),Te===void 0||Te.attribute!==We||We&&Te.data!==We.data)return!0;le++}return s.attributesNum!==le||s.index!==ee}function S(b,z,j,ee){const ue={},ce=z.attributes;let le=0;const he=j.getAttributes();for(const J in he)if(he[J].location>=0){let Te=ce[J];Te===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(Te=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(Te=b.instanceColor));const We={};We.attribute=Te,Te&&Te.data&&(We.data=Te.data),ue[J]=We,le++}s.attributes=ue,s.attributesNum=le,s.index=ee}function T(){const b=s.newAttributes;for(let z=0,j=b.length;z<j;z++)b[z]=0}function _(b){p(b,0)}function p(b,z){const j=s.newAttributes,ee=s.enabledAttributes,ue=s.attributeDivisors;j[b]=1,ee[b]===0&&(n.enableVertexAttribArray(b),ee[b]=1),ue[b]!==z&&(n.vertexAttribDivisor(b,z),ue[b]=z)}function P(){const b=s.newAttributes,z=s.enabledAttributes;for(let j=0,ee=z.length;j<ee;j++)z[j]!==b[j]&&(n.disableVertexAttribArray(j),z[j]=0)}function C(b,z,j,ee,ue,ce,le){le===!0?n.vertexAttribIPointer(b,z,j,ue,ce):n.vertexAttribPointer(b,z,j,ee,ue,ce)}function A(b,z,j,ee){T();const ue=ee.attributes,ce=j.getAttributes(),le=z.defaultAttributeValues;for(const he in ce){const J=ce[he];if(J.location>=0){let _e=ue[he];if(_e===void 0&&(he==="instanceMatrix"&&b.instanceMatrix&&(_e=b.instanceMatrix),he==="instanceColor"&&b.instanceColor&&(_e=b.instanceColor)),_e!==void 0){const Te=_e.normalized,We=_e.itemSize,Qe=e.get(_e);if(Qe===void 0)continue;const ft=Qe.buffer,Ae=Qe.type,ve=Qe.bytesPerElement,$=Ae===n.INT||Ae===n.UNSIGNED_INT||_e.gpuType===_c;if(_e.isInterleavedBufferAttribute){const fe=_e.data,we=fe.stride,je=_e.offset;if(fe.isInstancedInterleavedBuffer){for(let Ue=0;Ue<J.locationSize;Ue++)p(J.location+Ue,fe.meshPerAttribute);b.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ue=0;Ue<J.locationSize;Ue++)_(J.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,ft);for(let Ue=0;Ue<J.locationSize;Ue++)C(J.location+Ue,We/J.locationSize,Ae,Te,we*ve,(je+We/J.locationSize*Ue)*ve,$)}else{if(_e.isInstancedBufferAttribute){for(let fe=0;fe<J.locationSize;fe++)p(J.location+fe,_e.meshPerAttribute);b.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let fe=0;fe<J.locationSize;fe++)_(J.location+fe);n.bindBuffer(n.ARRAY_BUFFER,ft);for(let fe=0;fe<J.locationSize;fe++)C(J.location+fe,We/J.locationSize,Ae,Te,We*ve,We/J.locationSize*fe*ve,$)}}else if(le!==void 0){const Te=le[he];if(Te!==void 0)switch(Te.length){case 2:n.vertexAttrib2fv(J.location,Te);break;case 3:n.vertexAttrib3fv(J.location,Te);break;case 4:n.vertexAttrib4fv(J.location,Te);break;default:n.vertexAttrib1fv(J.location,Te)}}}}P()}function O(){k();for(const b in i){const z=i[b];for(const j in z){const ee=z[j];for(const ue in ee)h(ee[ue].object),delete ee[ue];delete z[j]}delete i[b]}}function D(b){if(i[b.id]===void 0)return;const z=i[b.id];for(const j in z){const ee=z[j];for(const ue in ee)h(ee[ue].object),delete ee[ue];delete z[j]}delete i[b.id]}function B(b){for(const z in i){const j=i[z];if(j[b.id]===void 0)continue;const ee=j[b.id];for(const ue in ee)h(ee[ue].object),delete ee[ue];delete j[b.id]}}function k(){w(),a=!0,s!==r&&(s=r,u(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:k,resetDefaultState:w,dispose:O,releaseStatesOfGeometry:D,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:_,disableUnusedAttributes:P}}function Xv(n,e,t){let i;function r(u){i=u}function s(u,h){n.drawArrays(i,u,h),t.update(h,i,1)}function a(u,h,d){d!==0&&(n.drawArraysInstanced(i,u,h,d),t.update(h,i,d))}function l(u,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,h,0,d);let g=0;for(let S=0;S<d;S++)g+=h[S];t.update(g,i,1)}function c(u,h,d,x){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let S=0;S<u.length;S++)a(u[S],h[S],x[S]);else{g.multiDrawArraysInstancedWEBGL(i,u,0,h,0,x,0,d);let S=0;for(let T=0;T<d;T++)S+=h[T]*x[T];t.update(S,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function jv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(B){return!(B!==Vn&&i.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(B){const k=B===es&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==ei&&i.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==gi&&!k)}function c(B){if(B==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const h=c(u);h!==u&&(rt("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),P=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=S>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:x,maxTextures:g,maxVertexTextures:S,maxTextureSize:T,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:P,maxVaryings:C,maxFragmentUniforms:A,vertexTextures:O,maxSamples:D}}function Yv(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new sr,l=new at,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,x){const g=d.length!==0||x||i!==0||r;return r=x,i=d.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,x){t=h(d,x,0)},this.setState=function(d,x,g){const S=d.clippingPlanes,T=d.clipIntersection,_=d.clipShadows,p=n.get(d);if(!r||S===null||S.length===0||s&&!_)s?h(null):u();else{const P=s?0:i,C=P*4;let A=p.clippingState||null;c.value=A,A=h(S,x,C,g);for(let O=0;O!==C;++O)A[O]=t[O];p.clippingState=A,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=P}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,x,g,S){const T=d!==null?d.length:0;let _=null;if(T!==0){if(_=c.value,S!==!0||_===null){const p=g+T*4,P=x.matrixWorldInverse;l.getNormalMatrix(P),(_===null||_.length<p)&&(_=new Float32Array(p));for(let C=0,A=g;C!==T;++C,A+=4)a.copy(d[C]).applyMatrix4(P,l),a.normal.toArray(_,A),_[A+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,_}}function qv(n){let e=new WeakMap;function t(a,l){return l===vl?a.mapping=$r:l===Ml&&(a.mapping=Zr),a}function i(a){if(a&&a.isTexture){const l=a.mapping;if(l===vl||l===Ml)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new jx(c.height);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Hi=4,of=[.125,.215,.35,.446,.526,.582],ar=20,Kv=256,gs=new rg,af=new vt;let Ya=null,qa=0,Ka=0,$a=!1;const $v=new q;class lf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:l=$v}=s;Ya=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ya,qa,Ka),this._renderer.xr.enabled=$a,e.scissorTest=!1,Ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$r||e.mapping===Zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ya=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:es,format:Vn,colorSpace:Jr,depthBuffer:!1},r=cf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cf(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Zv(s)),this._blurMaterial=Qv(s,e,t),this._ggxMaterial=Jv(s,e,t)}return r}_compileMaterial(e){const t=new Gt(new kn,e);this._renderer.compile(t,gs)}_sceneToCubeUV(e,t,i,r,s){const c=new En(90,1,t,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,x=d.autoClear,g=d.toneMapping;d.getClearColor(af),d.toneMapping=ki,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gt(new dr,new Ps({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,_=T.material;let p=!1;const P=e.background;P?P.isColor&&(_.color.copy(P),e.background=null,p=!0):(_.color.copy(af),p=!0);for(let C=0;C<6;C++){const A=C%3;A===0?(c.up.set(0,u[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[C],s.y,s.z)):A===1?(c.up.set(0,0,u[C]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[C],s.z)):(c.up.set(0,u[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[C]));const O=this._cubeSize;Ir(r,A*O,C>2?O:0,O,O),d.setRenderTarget(r),p&&d.render(T,c),d.render(e,c)}d.toneMapping=g,d.autoClear=x,e.background=P}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===$r||e.mapping===Zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;Ir(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,gs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[i];l.material=a;const c=a.uniforms,u=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(u*u-h*h),x=.05+u*.95,g=d*x,{_lodMax:S}=this,T=this._sizeLods[i],_=3*T*(i>S-Hi?i-S+Hi:0),p=4*(this._cubeSize-T);c.envMap.value=e.texture,c.roughness.value=g,c.mipInt.value=S-t,Ir(s,_,p,3*T,2*T),r.setRenderTarget(s),r.render(l,gs),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=S-i,Ir(e,_,p,3*T,2*T),r.setRenderTarget(e),r.render(l,gs)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,l){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&zt("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[r];d.material=u;const x=u.uniforms,g=this._sizeLods[i]-1,S=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*ar-1),T=s/S,_=isFinite(s)?1+Math.floor(h*T):ar;_>ar&&rt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ar}`);const p=[];let P=0;for(let B=0;B<ar;++B){const k=B/T,w=Math.exp(-k*k/2);p.push(w),B===0?P+=w:B<_&&(P+=2*w)}for(let B=0;B<p.length;B++)p[B]=p[B]/P;x.envMap.value=e.texture,x.samples.value=_,x.weights.value=p,x.latitudinal.value=a==="latitudinal",l&&(x.poleAxis.value=l);const{_lodMax:C}=this;x.dTheta.value=S,x.mipInt.value=C-i;const A=this._sizeLods[r],O=3*A*(r>C-Hi?r-C+Hi:0),D=4*(this._cubeSize-A);Ir(t,O,D,3*A,2*A),c.setRenderTarget(t),c.render(d,gs)}}function Zv(n){const e=[],t=[],i=[];let r=n;const s=n-Hi+1+of.length;for(let a=0;a<s;a++){const l=Math.pow(2,r);e.push(l);let c=1/l;a>n-Hi?c=of[a-n+Hi-1]:a===0&&(c=0),t.push(c);const u=1/(l-2),h=-u,d=1+u,x=[h,h,d,h,d,d,h,h,d,d,h,d],g=6,S=6,T=3,_=2,p=1,P=new Float32Array(T*S*g),C=new Float32Array(_*S*g),A=new Float32Array(p*S*g);for(let D=0;D<g;D++){const B=D%3*2/3-1,k=D>2?0:-1,w=[B,k,0,B+2/3,k,0,B+2/3,k+1,0,B,k,0,B+2/3,k+1,0,B,k+1,0];P.set(w,T*S*D),C.set(x,_*S*D);const b=[D,D,D,D,D,D];A.set(b,p*S*D)}const O=new kn;O.setAttribute("position",new Jn(P,T)),O.setAttribute("uv",new Jn(C,_)),O.setAttribute("faceIndex",new Jn(A,p)),i.push(new Gt(O,null)),r>Hi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function cf(n,e,t){const i=new hr(n,e,t);return i.texture.mapping=Jo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ir(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Jv(n,e,t){return new Ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Kv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ea(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Qv(n,e,t){const i=new Float32Array(ar),r=new q(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ea(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function uf(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ea(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function ff(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function ea(){return`

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
	`}function eM(n){let e=new WeakMap,t=null;function i(l){if(l&&l.isTexture){const c=l.mapping,u=c===vl||c===Ml,h=c===$r||c===Zr;if(u||h){let d=e.get(l);const x=d!==void 0?d.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==x)return t===null&&(t=new lf(n)),d=u?t.fromEquirectangular(l,d):t.fromCubemap(l,d),d.texture.pmremVersion=l.pmremVersion,e.set(l,d),d.texture;if(d!==void 0)return d.texture;{const g=l.image;return u&&g&&g.height>0||h&&g&&r(g)?(t===null&&(t=new lf(n)),d=u?t.fromEquirectangular(l):t.fromCubemap(l),d.texture.pmremVersion=l.pmremVersion,e.set(l,d),l.addEventListener("dispose",s),d.texture):null}}}return l}function r(l){let c=0;const u=6;for(let h=0;h<u;h++)l[h]!==void 0&&c++;return c===u}function s(l){const c=l.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function tM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Vs("WebGLRenderer: "+i+" extension not supported."),r}}}function nM(n,e,t,i){const r={},s=new WeakMap;function a(d){const x=d.target;x.index!==null&&e.remove(x.index);for(const S in x.attributes)e.remove(x.attributes[S]);x.removeEventListener("dispose",a),delete r[x.id];const g=s.get(x);g&&(e.remove(g),s.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function l(d,x){return r[x.id]===!0||(x.addEventListener("dispose",a),r[x.id]=!0,t.memory.geometries++),x}function c(d){const x=d.attributes;for(const g in x)e.update(x[g],n.ARRAY_BUFFER)}function u(d){const x=[],g=d.index,S=d.attributes.position;let T=0;if(g!==null){const P=g.array;T=g.version;for(let C=0,A=P.length;C<A;C+=3){const O=P[C+0],D=P[C+1],B=P[C+2];x.push(O,D,D,B,B,O)}}else if(S!==void 0){const P=S.array;T=S.version;for(let C=0,A=P.length/3-1;C<A;C+=3){const O=C+0,D=C+1,B=C+2;x.push(O,D,D,B,B,O)}}else return;const _=new(Jh(x)?id:nd)(x,1);_.version=T;const p=s.get(d);p&&e.remove(p),s.set(d,_)}function h(d){const x=s.get(d);if(x){const g=d.index;g!==null&&x.version<g.version&&u(d)}else u(d);return s.get(d)}return{get:l,update:c,getWireframeAttribute:h}}function iM(n,e,t){let i;function r(x){i=x}let s,a;function l(x){s=x.type,a=x.bytesPerElement}function c(x,g){n.drawElements(i,g,s,x*a),t.update(g,i,1)}function u(x,g,S){S!==0&&(n.drawElementsInstanced(i,g,s,x*a,S),t.update(g,i,S))}function h(x,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,x,0,S);let _=0;for(let p=0;p<S;p++)_+=g[p];t.update(_,i,1)}function d(x,g,S,T){if(S===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<x.length;p++)u(x[p]/a,g[p],T[p]);else{_.multiDrawElementsInstancedWEBGL(i,g,0,s,x,0,T,0,S);let p=0;for(let P=0;P<S;P++)p+=g[P]*T[P];t.update(p,i,1)}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function rM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,l){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=l*(s/3);break;case n.LINES:t.lines+=l*(s/2);break;case n.LINE_STRIP:t.lines+=l*(s-1);break;case n.LINE_LOOP:t.lines+=l*s;break;case n.POINTS:t.points+=l*s;break;default:zt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function sM(n,e,t){const i=new WeakMap,r=new At;function s(a,l,c){const u=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=h!==void 0?h.length:0;let x=i.get(l);if(x===void 0||x.count!==d){let b=function(){k.dispose(),i.delete(l),l.removeEventListener("dispose",b)};var g=b;x!==void 0&&x.texture.dispose();const S=l.morphAttributes.position!==void 0,T=l.morphAttributes.normal!==void 0,_=l.morphAttributes.color!==void 0,p=l.morphAttributes.position||[],P=l.morphAttributes.normal||[],C=l.morphAttributes.color||[];let A=0;S===!0&&(A=1),T===!0&&(A=2),_===!0&&(A=3);let O=l.attributes.position.count*A,D=1;O>e.maxTextureSize&&(D=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const B=new Float32Array(O*D*4*d),k=new Qh(B,O,D,d);k.type=gi,k.needsUpdate=!0;const w=A*4;for(let z=0;z<d;z++){const j=p[z],ee=P[z],ue=C[z],ce=O*D*4*z;for(let le=0;le<j.count;le++){const he=le*w;S===!0&&(r.fromBufferAttribute(j,le),B[ce+he+0]=r.x,B[ce+he+1]=r.y,B[ce+he+2]=r.z,B[ce+he+3]=0),T===!0&&(r.fromBufferAttribute(ee,le),B[ce+he+4]=r.x,B[ce+he+5]=r.y,B[ce+he+6]=r.z,B[ce+he+7]=0),_===!0&&(r.fromBufferAttribute(ue,le),B[ce+he+8]=r.x,B[ce+he+9]=r.y,B[ce+he+10]=r.z,B[ce+he+11]=ue.itemSize===4?r.w:1)}}x={count:d,texture:k,size:new dt(O,D)},i.set(l,x),l.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let S=0;for(let _=0;_<u.length;_++)S+=u[_];const T=l.morphTargetsRelative?1:1-S;c.getUniforms().setValue(n,"morphTargetBaseInfluence",T),c.getUniforms().setValue(n,"morphTargetInfluences",u)}c.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}return{update:s}}function oM(n,e,t,i){let r=new WeakMap;function s(c){const u=i.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const x=c.skeleton;r.get(x)!==u&&(x.update(),r.set(x,u))}return d}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}const fd=new hn,hf=new ad(1,1),hd=new Qh,dd=new Rx,pd=new od,df=[],pf=[],mf=new Float32Array(16),xf=new Float32Array(9),gf=new Float32Array(4);function is(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=df[r];if(s===void 0&&(s=new Float32Array(r),df[r]=s),e!==0){i.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=t,n[a].toArray(s,l)}return s}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ta(n,e){let t=pf[e];t===void 0&&(t=new Int32Array(e),pf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function aM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function lM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),Wt(t,e)}}function cM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),Wt(t,e)}}function uM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),Wt(t,e)}}function fM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(kt(t,i))return;gf.set(i),n.uniformMatrix2fv(this.addr,!1,gf),Wt(t,i)}}function hM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(kt(t,i))return;xf.set(i),n.uniformMatrix3fv(this.addr,!1,xf),Wt(t,i)}}function dM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(kt(t,i))return;mf.set(i),n.uniformMatrix4fv(this.addr,!1,mf),Wt(t,i)}}function pM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function mM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),Wt(t,e)}}function xM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),Wt(t,e)}}function gM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),Wt(t,e)}}function _M(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function vM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),Wt(t,e)}}function MM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),Wt(t,e)}}function SM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),Wt(t,e)}}function bM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(hf.compareFunction=Zh,s=hf):s=fd,t.setTexture2D(e||s,r)}function yM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||dd,r)}function EM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||pd,r)}function TM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||hd,r)}function AM(n){switch(n){case 5126:return aM;case 35664:return lM;case 35665:return cM;case 35666:return uM;case 35674:return fM;case 35675:return hM;case 35676:return dM;case 5124:case 35670:return pM;case 35667:case 35671:return mM;case 35668:case 35672:return xM;case 35669:case 35673:return gM;case 5125:return _M;case 36294:return vM;case 36295:return MM;case 36296:return SM;case 35678:case 36198:case 36298:case 36306:case 35682:return bM;case 35679:case 36299:case 36307:return yM;case 35680:case 36300:case 36308:case 36293:return EM;case 36289:case 36303:case 36311:case 36292:return TM}}function wM(n,e){n.uniform1fv(this.addr,e)}function RM(n,e){const t=is(e,this.size,2);n.uniform2fv(this.addr,t)}function CM(n,e){const t=is(e,this.size,3);n.uniform3fv(this.addr,t)}function PM(n,e){const t=is(e,this.size,4);n.uniform4fv(this.addr,t)}function DM(n,e){const t=is(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function LM(n,e){const t=is(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function UM(n,e){const t=is(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function IM(n,e){n.uniform1iv(this.addr,e)}function FM(n,e){n.uniform2iv(this.addr,e)}function NM(n,e){n.uniform3iv(this.addr,e)}function OM(n,e){n.uniform4iv(this.addr,e)}function BM(n,e){n.uniform1uiv(this.addr,e)}function zM(n,e){n.uniform2uiv(this.addr,e)}function VM(n,e){n.uniform3uiv(this.addr,e)}function HM(n,e){n.uniform4uiv(this.addr,e)}function GM(n,e,t){const i=this.cache,r=e.length,s=ta(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||fd,s[a])}function kM(n,e,t){const i=this.cache,r=e.length,s=ta(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||dd,s[a])}function WM(n,e,t){const i=this.cache,r=e.length,s=ta(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||pd,s[a])}function XM(n,e,t){const i=this.cache,r=e.length,s=ta(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||hd,s[a])}function jM(n){switch(n){case 5126:return wM;case 35664:return RM;case 35665:return CM;case 35666:return PM;case 35674:return DM;case 35675:return LM;case 35676:return UM;case 5124:case 35670:return IM;case 35667:case 35671:return FM;case 35668:case 35672:return NM;case 35669:case 35673:return OM;case 5125:return BM;case 36294:return zM;case 36295:return VM;case 36296:return HM;case 35678:case 36198:case 36298:case 36306:case 35682:return GM;case 35679:case 36299:case 36307:return kM;case 35680:case 36300:case 36308:case 36293:return WM;case 36289:case 36303:case 36311:case 36292:return XM}}class YM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=AM(t.type)}}class qM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jM(t.type)}}class KM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(e,t[l.id],i)}}}const Za=/(\w+)(\])?(\[|\.)?/g;function _f(n,e){n.seq.push(e),n.map[e.id]=e}function $M(n,e,t){const i=n.name,r=i.length;for(Za.lastIndex=0;;){const s=Za.exec(i),a=Za.lastIndex;let l=s[1];const c=s[2]==="]",u=s[3];if(c&&(l=l|0),u===void 0||u==="["&&a+2===r){_f(t,u===void 0?new YM(l,n,e):new qM(l,n,e));break}else{let d=t.map[l];d===void 0&&(d=new KM(l),_f(t,d)),t=d}}}class Lo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);$M(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const l=t[s],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function vf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ZM=37297;let JM=0;function QM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return i.join(`
`)}const Mf=new at;function eS(n){_t._getMatrix(Mf,_t.workingColorSpace,n);const e=`mat3( ${Mf.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(n)){case zo:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Sf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+QM(n.getShaderSource(e),l)}else return s}function tS(n,e){const t=eS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function nS(n,e){let t;switch(e){case Vm:t="Linear";break;case Hm:t="Reinhard";break;case Gm:t="Cineon";break;case km:t="ACESFilmic";break;case Xm:t="AgX";break;case jm:t="Neutral";break;case Wm:t="Custom";break;default:rt("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yo=new q;function iS(){_t.getLuminanceCoefficients(yo);const n=yo.x.toFixed(4),e=yo.y.toFixed(4),t=yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)}function sS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function oS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let l=1;s.type===n.FLOAT_MAT2&&(l=2),s.type===n.FLOAT_MAT3&&(l=3),s.type===n.FLOAT_MAT4&&(l=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:l}}return t}function vs(n){return n!==""}function bf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(n){return n.replace(aS,cS)}const lS=new Map;function cS(n,e){let t=lt[e];if(t===void 0){const i=lS.get(e);if(i!==void 0)t=lt[i],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zl(t)}const uS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ef(n){return n.replace(uS,fS)}function fS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function hS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Vh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===vm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function dS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case $r:case Zr:e="ENVMAP_TYPE_CUBE";break;case Jo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zr:e="ENVMAP_MODE_REFRACTION";break}return e}function mS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Hh:e="ENVMAP_BLENDING_MULTIPLY";break;case Bm:e="ENVMAP_BLENDING_MIX";break;case zm:e="ENVMAP_BLENDING_ADD";break}return e}function xS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function gS(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,l=t.fragmentShader;const c=hS(t),u=dS(t),h=pS(t),d=mS(t),x=xS(t),g=rS(t),S=sS(s),T=r.createProgram();let _,p,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(vs).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(vs).join(`
`),p.length>0&&(p+=`
`)):(_=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),p=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?lt.tonemapping_pars_fragment:"",t.toneMapping!==ki?nS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,tS("linearToOutputTexel",t.outputColorSpace),iS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vs).join(`
`)),a=Zl(a),a=bf(a,t),a=yf(a,t),l=Zl(l),l=bf(l,t),l=yf(l,t),a=Ef(a),l=Ef(l),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===Fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const C=P+_+a,A=P+p+l,O=vf(r,r.VERTEX_SHADER,C),D=vf(r,r.FRAGMENT_SHADER,A);r.attachShader(T,O),r.attachShader(T,D),t.index0AttributeName!==void 0?r.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function B(z){if(n.debug.checkShaderErrors){const j=r.getProgramInfoLog(T)||"",ee=r.getShaderInfoLog(O)||"",ue=r.getShaderInfoLog(D)||"",ce=j.trim(),le=ee.trim(),he=ue.trim();let J=!0,_e=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,T,O,D);else{const Te=Sf(r,O,"vertex"),We=Sf(r,D,"fragment");zt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ce+`
`+Te+`
`+We)}else ce!==""?rt("WebGLProgram: Program Info Log:",ce):(le===""||he==="")&&(_e=!1);_e&&(z.diagnostics={runnable:J,programLog:ce,vertexShader:{log:le,prefix:_},fragmentShader:{log:he,prefix:p}})}r.deleteShader(O),r.deleteShader(D),k=new Lo(r,T),w=oS(r,T)}let k;this.getUniforms=function(){return k===void 0&&B(this),k};let w;this.getAttributes=function(){return w===void 0&&B(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(T,ZM)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JM++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=O,this.fragmentShader=D,this}let _S=0;class vS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new MS(e),t.set(e,i)),i}}class MS{constructor(e){this.id=_S++,this.code=e,this.usedTimes=0}}function SS(n,e,t,i,r,s,a){const l=new ed,c=new vS,u=new Set,h=[],d=r.logarithmicDepthBuffer,x=r.vertexTextures;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return u.add(w),w===0?"uv":`uv${w}`}function _(w,b,z,j,ee){const ue=j.fog,ce=ee.geometry,le=w.isMeshStandardMaterial?j.environment:null,he=(w.isMeshStandardMaterial?t:e).get(w.envMap||le),J=he&&he.mapping===Jo?he.image.height:null,_e=S[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&rt("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const Te=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,We=Te!==void 0?Te.length:0;let Qe=0;ce.morphAttributes.position!==void 0&&(Qe=1),ce.morphAttributes.normal!==void 0&&(Qe=2),ce.morphAttributes.color!==void 0&&(Qe=3);let ft,Ae,ve,$;if(_e){const mt=Kn[_e];ft=mt.vertexShader,Ae=mt.fragmentShader}else ft=w.vertexShader,Ae=w.fragmentShader,c.update(w),ve=c.getVertexShaderID(w),$=c.getFragmentShaderID(w);const fe=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),je=ee.isInstancedMesh===!0,Ue=ee.isBatchedMesh===!0,et=!!w.map,N=!!w.matcap,F=!!he,Y=!!w.aoMap,R=!!w.lightMap,se=!!w.bumpMap,oe=!!w.normalMap,xe=!!w.displacementMap,ie=!!w.emissiveMap,me=!!w.metalnessMap,Z=!!w.roughnessMap,ge=w.anisotropy>0,y=w.clearcoat>0,v=w.dispersion>0,H=w.iridescence>0,Q=w.sheen>0,ae=w.transmission>0,K=ge&&!!w.anisotropyMap,Ne=y&&!!w.clearcoatMap,be=y&&!!w.clearcoatNormalMap,He=y&&!!w.clearcoatRoughnessMap,Be=H&&!!w.iridescenceMap,pe=H&&!!w.iridescenceThicknessMap,ye=Q&&!!w.sheenColorMap,Ge=Q&&!!w.sheenRoughnessMap,Xe=!!w.specularMap,Fe=!!w.specularColorMap,Ze=!!w.specularIntensityMap,V=ae&&!!w.transmissionMap,De=ae&&!!w.thicknessMap,Re=!!w.gradientMap,Ce=!!w.alphaMap,Se=w.alphaTest>0,de=!!w.alphaHash,Ve=!!w.extensions;let tt=ki;w.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(tt=n.toneMapping);const yt={shaderID:_e,shaderType:w.type,shaderName:w.name,vertexShader:ft,fragmentShader:Ae,defines:w.defines,customVertexShaderID:ve,customFragmentShaderID:$,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:Ue,batchingColor:Ue&&ee._colorsTexture!==null,instancing:je,instancingColor:je&&ee.instanceColor!==null,instancingMorph:je&&ee.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Jr,alphaToCoverage:!!w.alphaToCoverage,map:et,matcap:N,envMap:F,envMapMode:F&&he.mapping,envMapCubeUVHeight:J,aoMap:Y,lightMap:R,bumpMap:se,normalMap:oe,displacementMap:x&&xe,emissiveMap:ie,normalMapObjectSpace:oe&&w.normalMapType===$m,normalMapTangentSpace:oe&&w.normalMapType===$h,metalnessMap:me,roughnessMap:Z,anisotropy:ge,anisotropyMap:K,clearcoat:y,clearcoatMap:Ne,clearcoatNormalMap:be,clearcoatRoughnessMap:He,dispersion:v,iridescence:H,iridescenceMap:Be,iridescenceThicknessMap:pe,sheen:Q,sheenColorMap:ye,sheenRoughnessMap:Ge,specularMap:Xe,specularColorMap:Fe,specularIntensityMap:Ze,transmission:ae,transmissionMap:V,thicknessMap:De,gradientMap:Re,opaque:w.transparent===!1&&w.blending===Xr&&w.alphaToCoverage===!1,alphaMap:Ce,alphaTest:Se,alphaHash:de,combine:w.combine,mapUv:et&&T(w.map.channel),aoMapUv:Y&&T(w.aoMap.channel),lightMapUv:R&&T(w.lightMap.channel),bumpMapUv:se&&T(w.bumpMap.channel),normalMapUv:oe&&T(w.normalMap.channel),displacementMapUv:xe&&T(w.displacementMap.channel),emissiveMapUv:ie&&T(w.emissiveMap.channel),metalnessMapUv:me&&T(w.metalnessMap.channel),roughnessMapUv:Z&&T(w.roughnessMap.channel),anisotropyMapUv:K&&T(w.anisotropyMap.channel),clearcoatMapUv:Ne&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:be&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&T(w.sheenRoughnessMap.channel),specularMapUv:Xe&&T(w.specularMap.channel),specularColorMapUv:Fe&&T(w.specularColorMap.channel),specularIntensityMapUv:Ze&&T(w.specularIntensityMap.channel),transmissionMapUv:V&&T(w.transmissionMap.channel),thicknessMapUv:De&&T(w.thicknessMap.channel),alphaMapUv:Ce&&T(w.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(oe||ge),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!ce.attributes.uv&&(et||Ce),fog:!!ue,useFog:w.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:we,skinning:ee.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:We,morphTextureStride:Qe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:tt,decodeVideoTexture:et&&w.map.isVideoTexture===!0&&_t.getTransfer(w.map.colorSpace)===Tt,decodeVideoTextureEmissive:ie&&w.emissiveMap.isVideoTexture===!0&&_t.getTransfer(w.emissiveMap.colorSpace)===Tt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===mi,flipSided:w.side===xn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ve&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&w.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return yt.vertexUv1s=u.has(1),yt.vertexUv2s=u.has(2),yt.vertexUv3s=u.has(3),u.clear(),yt}function p(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const z in w.defines)b.push(z),b.push(w.defines[z]);return w.isRawShaderMaterial===!1&&(P(b,w),C(b,w),b.push(n.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function P(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function C(w,b){l.disableAll(),b.supportsVertexTextures&&l.enable(0),b.instancing&&l.enable(1),b.instancingColor&&l.enable(2),b.instancingMorph&&l.enable(3),b.matcap&&l.enable(4),b.envMap&&l.enable(5),b.normalMapObjectSpace&&l.enable(6),b.normalMapTangentSpace&&l.enable(7),b.clearcoat&&l.enable(8),b.iridescence&&l.enable(9),b.alphaTest&&l.enable(10),b.vertexColors&&l.enable(11),b.vertexAlphas&&l.enable(12),b.vertexUv1s&&l.enable(13),b.vertexUv2s&&l.enable(14),b.vertexUv3s&&l.enable(15),b.vertexTangents&&l.enable(16),b.anisotropy&&l.enable(17),b.alphaHash&&l.enable(18),b.batching&&l.enable(19),b.dispersion&&l.enable(20),b.batchingColor&&l.enable(21),b.gradientMap&&l.enable(22),w.push(l.mask),l.disableAll(),b.fog&&l.enable(0),b.useFog&&l.enable(1),b.flatShading&&l.enable(2),b.logarithmicDepthBuffer&&l.enable(3),b.reversedDepthBuffer&&l.enable(4),b.skinning&&l.enable(5),b.morphTargets&&l.enable(6),b.morphNormals&&l.enable(7),b.morphColors&&l.enable(8),b.premultipliedAlpha&&l.enable(9),b.shadowMapEnabled&&l.enable(10),b.doubleSided&&l.enable(11),b.flipSided&&l.enable(12),b.useDepthPacking&&l.enable(13),b.dithering&&l.enable(14),b.transmission&&l.enable(15),b.sheen&&l.enable(16),b.opaque&&l.enable(17),b.pointsUvs&&l.enable(18),b.decodeVideoTexture&&l.enable(19),b.decodeVideoTextureEmissive&&l.enable(20),b.alphaToCoverage&&l.enable(21),w.push(l.mask)}function A(w){const b=S[w.type];let z;if(b){const j=Kn[b];z=Gx.clone(j.uniforms)}else z=w.uniforms;return z}function O(w,b){let z;for(let j=0,ee=h.length;j<ee;j++){const ue=h[j];if(ue.cacheKey===b){z=ue,++z.usedTimes;break}}return z===void 0&&(z=new gS(n,b,w,s),h.push(z)),z}function D(w){if(--w.usedTimes===0){const b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function B(w){c.remove(w)}function k(){c.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:A,acquireProgram:O,releaseProgram:D,releaseShaderCache:B,programs:h,dispose:k}}function bS(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let l=n.get(a);return l===void 0&&(l={},n.set(a,l)),l}function i(a){n.delete(a)}function r(a,l,c){n.get(a)[l]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function yS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Af(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function wf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,x,g,S,T,_){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:x,material:g,groupOrder:S,renderOrder:d.renderOrder,z:T,group:_},n[e]=p):(p.id=d.id,p.object=d,p.geometry=x,p.material=g,p.groupOrder=S,p.renderOrder=d.renderOrder,p.z=T,p.group=_),e++,p}function l(d,x,g,S,T,_){const p=a(d,x,g,S,T,_);g.transmission>0?i.push(p):g.transparent===!0?r.push(p):t.push(p)}function c(d,x,g,S,T,_){const p=a(d,x,g,S,T,_);g.transmission>0?i.unshift(p):g.transparent===!0?r.unshift(p):t.unshift(p)}function u(d,x){t.length>1&&t.sort(d||yS),i.length>1&&i.sort(x||Af),r.length>1&&r.sort(x||Af)}function h(){for(let d=e,x=n.length;d<x;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function ES(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new wf,n.set(i,[a])):r>=s.length?(a=new wf,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function TS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new vt};break;case"SpotLight":t={position:new q,direction:new q,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function AS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let wS=0;function RS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function CS(n){const e=new TS,t=AS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new q);const r=new q,s=new Bt,a=new Bt;function l(u){let h=0,d=0,x=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let g=0,S=0,T=0,_=0,p=0,P=0,C=0,A=0,O=0,D=0,B=0;u.sort(RS);for(let w=0,b=u.length;w<b;w++){const z=u[w],j=z.color,ee=z.intensity,ue=z.distance,ce=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=j.r*ee,d+=j.g*ee,x+=j.b*ee;else if(z.isLightProbe){for(let le=0;le<9;le++)i.probe[le].addScaledVector(z.sh.coefficients[le],ee);B++}else if(z.isDirectionalLight){const le=e.get(z);if(le.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const he=z.shadow,J=t.get(z);J.shadowIntensity=he.intensity,J.shadowBias=he.bias,J.shadowNormalBias=he.normalBias,J.shadowRadius=he.radius,J.shadowMapSize=he.mapSize,i.directionalShadow[g]=J,i.directionalShadowMap[g]=ce,i.directionalShadowMatrix[g]=z.shadow.matrix,P++}i.directional[g]=le,g++}else if(z.isSpotLight){const le=e.get(z);le.position.setFromMatrixPosition(z.matrixWorld),le.color.copy(j).multiplyScalar(ee),le.distance=ue,le.coneCos=Math.cos(z.angle),le.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),le.decay=z.decay,i.spot[T]=le;const he=z.shadow;if(z.map&&(i.spotLightMap[O]=z.map,O++,he.updateMatrices(z),z.castShadow&&D++),i.spotLightMatrix[T]=he.matrix,z.castShadow){const J=t.get(z);J.shadowIntensity=he.intensity,J.shadowBias=he.bias,J.shadowNormalBias=he.normalBias,J.shadowRadius=he.radius,J.shadowMapSize=he.mapSize,i.spotShadow[T]=J,i.spotShadowMap[T]=ce,A++}T++}else if(z.isRectAreaLight){const le=e.get(z);le.color.copy(j).multiplyScalar(ee),le.halfWidth.set(z.width*.5,0,0),le.halfHeight.set(0,z.height*.5,0),i.rectArea[_]=le,_++}else if(z.isPointLight){const le=e.get(z);if(le.color.copy(z.color).multiplyScalar(z.intensity),le.distance=z.distance,le.decay=z.decay,z.castShadow){const he=z.shadow,J=t.get(z);J.shadowIntensity=he.intensity,J.shadowBias=he.bias,J.shadowNormalBias=he.normalBias,J.shadowRadius=he.radius,J.shadowMapSize=he.mapSize,J.shadowCameraNear=he.camera.near,J.shadowCameraFar=he.camera.far,i.pointShadow[S]=J,i.pointShadowMap[S]=ce,i.pointShadowMatrix[S]=z.shadow.matrix,C++}i.point[S]=le,S++}else if(z.isHemisphereLight){const le=e.get(z);le.skyColor.copy(z.color).multiplyScalar(ee),le.groundColor.copy(z.groundColor).multiplyScalar(ee),i.hemi[p]=le,p++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=x;const k=i.hash;(k.directionalLength!==g||k.pointLength!==S||k.spotLength!==T||k.rectAreaLength!==_||k.hemiLength!==p||k.numDirectionalShadows!==P||k.numPointShadows!==C||k.numSpotShadows!==A||k.numSpotMaps!==O||k.numLightProbes!==B)&&(i.directional.length=g,i.spot.length=T,i.rectArea.length=_,i.point.length=S,i.hemi.length=p,i.directionalShadow.length=P,i.directionalShadowMap.length=P,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=P,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=A+O-D,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=B,k.directionalLength=g,k.pointLength=S,k.spotLength=T,k.rectAreaLength=_,k.hemiLength=p,k.numDirectionalShadows=P,k.numPointShadows=C,k.numSpotShadows=A,k.numSpotMaps=O,k.numLightProbes=B,i.version=wS++)}function c(u,h){let d=0,x=0,g=0,S=0,T=0;const _=h.matrixWorldInverse;for(let p=0,P=u.length;p<P;p++){const C=u[p];if(C.isDirectionalLight){const A=i.directional[d];A.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(_),d++}else if(C.isSpotLight){const A=i.spot[g];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(_),A.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(_),g++}else if(C.isRectAreaLight){const A=i.rectArea[S];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(_),a.identity(),s.copy(C.matrixWorld),s.premultiply(_),a.extractRotation(s),A.halfWidth.set(C.width*.5,0,0),A.halfHeight.set(0,C.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),S++}else if(C.isPointLight){const A=i.point[x];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(_),x++}else if(C.isHemisphereLight){const A=i.hemi[T];A.direction.setFromMatrixPosition(C.matrixWorld),A.direction.transformDirection(_),T++}}}return{setup:l,setupView:c,state:i}}function Rf(n){const e=new CS(n),t=[],i=[];function r(h){u.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function l(){e.setup(t)}function c(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function PS(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let l;return a===void 0?(l=new Rf(n),e.set(r,[l])):s>=a.length?(l=new Rf(n),a.push(l)):l=a[s],l}function i(){e=new WeakMap}return{get:t,dispose:i}}const DS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LS=`uniform sampler2D shadow_pass;
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
}`;function US(n,e,t){let i=new Rc;const r=new dt,s=new dt,a=new At,l=new Qx({depthPacking:Km}),c=new eg,u={},h=t.maxTextureSize,d={[ji]:xn,[xn]:ji,[mi]:mi},x=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:DS,fragmentShader:LS}),g=x.clone();g.defines.HORIZONTAL_PASS=1;const S=new kn;S.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Gt(S,x),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vh;let p=this.type;this.render=function(D,B,k){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||D.length===0)return;const w=n.getRenderTarget(),b=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),j=n.state;j.setBlending(vi),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ee=p!==fi&&this.type===fi,ue=p===fi&&this.type!==fi;for(let ce=0,le=D.length;ce<le;ce++){const he=D[ce],J=he.shadow;if(J===void 0){rt("WebGLShadowMap:",he,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const _e=J.getFrameExtents();if(r.multiply(_e),s.copy(J.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/_e.x),r.x=s.x*_e.x,J.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/_e.y),r.y=s.y*_e.y,J.mapSize.y=s.y)),J.map===null||ee===!0||ue===!0){const We=this.type!==fi?{minFilter:An,magFilter:An}:{};J.map!==null&&J.map.dispose(),J.map=new hr(r.x,r.y,We),J.map.texture.name=he.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();const Te=J.getViewportCount();for(let We=0;We<Te;We++){const Qe=J.getViewport(We);a.set(s.x*Qe.x,s.y*Qe.y,s.x*Qe.z,s.y*Qe.w),j.viewport(a),J.updateMatrices(he,We),i=J.getFrustum(),A(B,k,J.camera,he,this.type)}J.isPointLightShadow!==!0&&this.type===fi&&P(J,k),J.needsUpdate=!1}p=this.type,_.needsUpdate=!1,n.setRenderTarget(w,b,z)};function P(D,B){const k=e.update(T);x.defines.VSM_SAMPLES!==D.blurSamples&&(x.defines.VSM_SAMPLES=D.blurSamples,g.defines.VSM_SAMPLES=D.blurSamples,x.needsUpdate=!0,g.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new hr(r.x,r.y)),x.uniforms.shadow_pass.value=D.map.texture,x.uniforms.resolution.value=D.mapSize,x.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(B,null,k,x,T,null),g.uniforms.shadow_pass.value=D.mapPass.texture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(B,null,k,g,T,null)}function C(D,B,k,w){let b=null;const z=k.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(z!==void 0)b=z;else if(b=k.isPointLight===!0?c:l,n.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const j=b.uuid,ee=B.uuid;let ue=u[j];ue===void 0&&(ue={},u[j]=ue);let ce=ue[ee];ce===void 0&&(ce=b.clone(),ue[ee]=ce,B.addEventListener("dispose",O)),b=ce}if(b.visible=B.visible,b.wireframe=B.wireframe,w===fi?b.side=B.shadowSide!==null?B.shadowSide:B.side:b.side=B.shadowSide!==null?B.shadowSide:d[B.side],b.alphaMap=B.alphaMap,b.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,b.map=B.map,b.clipShadows=B.clipShadows,b.clippingPlanes=B.clippingPlanes,b.clipIntersection=B.clipIntersection,b.displacementMap=B.displacementMap,b.displacementScale=B.displacementScale,b.displacementBias=B.displacementBias,b.wireframeLinewidth=B.wireframeLinewidth,b.linewidth=B.linewidth,k.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const j=n.properties.get(b);j.light=k}return b}function A(D,B,k,w,b){if(D.visible===!1)return;if(D.layers.test(B.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&b===fi)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,D.matrixWorld);const ee=e.update(D),ue=D.material;if(Array.isArray(ue)){const ce=ee.groups;for(let le=0,he=ce.length;le<he;le++){const J=ce[le],_e=ue[J.materialIndex];if(_e&&_e.visible){const Te=C(D,_e,w,b);D.onBeforeShadow(n,D,B,k,ee,Te,J),n.renderBufferDirect(k,null,ee,Te,D,J),D.onAfterShadow(n,D,B,k,ee,Te,J)}}}else if(ue.visible){const ce=C(D,ue,w,b);D.onBeforeShadow(n,D,B,k,ee,ce,null),n.renderBufferDirect(k,null,ee,ce,D,null),D.onAfterShadow(n,D,B,k,ee,ce,null)}}const j=D.children;for(let ee=0,ue=j.length;ee<ue;ee++)A(j[ee],B,k,w,b)}function O(D){D.target.removeEventListener("dispose",O);for(const k in u){const w=u[k],b=D.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const IS={[hl]:dl,[pl]:gl,[ml]:_l,[Kr]:xl,[dl]:hl,[gl]:pl,[_l]:ml,[xl]:Kr};function FS(n,e){function t(){let V=!1;const De=new At;let Re=null;const Ce=new At(0,0,0,0);return{setMask:function(Se){Re!==Se&&!V&&(n.colorMask(Se,Se,Se,Se),Re=Se)},setLocked:function(Se){V=Se},setClear:function(Se,de,Ve,tt,yt){yt===!0&&(Se*=tt,de*=tt,Ve*=tt),De.set(Se,de,Ve,tt),Ce.equals(De)===!1&&(n.clearColor(Se,de,Ve,tt),Ce.copy(De))},reset:function(){V=!1,Re=null,Ce.set(-1,0,0,0)}}}function i(){let V=!1,De=!1,Re=null,Ce=null,Se=null;return{setReversed:function(de){if(De!==de){const Ve=e.get("EXT_clip_control");de?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),De=de;const tt=Se;Se=null,this.setClear(tt)}},getReversed:function(){return De},setTest:function(de){de?fe(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(de){Re!==de&&!V&&(n.depthMask(de),Re=de)},setFunc:function(de){if(De&&(de=IS[de]),Ce!==de){switch(de){case hl:n.depthFunc(n.NEVER);break;case dl:n.depthFunc(n.ALWAYS);break;case pl:n.depthFunc(n.LESS);break;case Kr:n.depthFunc(n.LEQUAL);break;case ml:n.depthFunc(n.EQUAL);break;case xl:n.depthFunc(n.GEQUAL);break;case gl:n.depthFunc(n.GREATER);break;case _l:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ce=de}},setLocked:function(de){V=de},setClear:function(de){Se!==de&&(De&&(de=1-de),n.clearDepth(de),Se=de)},reset:function(){V=!1,Re=null,Ce=null,Se=null,De=!1}}}function r(){let V=!1,De=null,Re=null,Ce=null,Se=null,de=null,Ve=null,tt=null,yt=null;return{setTest:function(mt){V||(mt?fe(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(mt){De!==mt&&!V&&(n.stencilMask(mt),De=mt)},setFunc:function(mt,sn,_n){(Re!==mt||Ce!==sn||Se!==_n)&&(n.stencilFunc(mt,sn,_n),Re=mt,Ce=sn,Se=_n)},setOp:function(mt,sn,_n){(de!==mt||Ve!==sn||tt!==_n)&&(n.stencilOp(mt,sn,_n),de=mt,Ve=sn,tt=_n)},setLocked:function(mt){V=mt},setClear:function(mt){yt!==mt&&(n.clearStencil(mt),yt=mt)},reset:function(){V=!1,De=null,Re=null,Ce=null,Se=null,de=null,Ve=null,tt=null,yt=null}}}const s=new t,a=new i,l=new r,c=new WeakMap,u=new WeakMap;let h={},d={},x=new WeakMap,g=[],S=null,T=!1,_=null,p=null,P=null,C=null,A=null,O=null,D=null,B=new vt(0,0,0),k=0,w=!1,b=null,z=null,j=null,ee=null,ue=null;const ce=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,he=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(J)[1]),le=he>=1):J.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),le=he>=2);let _e=null,Te={};const We=n.getParameter(n.SCISSOR_BOX),Qe=n.getParameter(n.VIEWPORT),ft=new At().fromArray(We),Ae=new At().fromArray(Qe);function ve(V,De,Re,Ce){const Se=new Uint8Array(4),de=n.createTexture();n.bindTexture(V,de),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<Re;Ve++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(De,0,n.RGBA,1,1,Ce,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(De+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return de}const $={};$[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),fe(n.DEPTH_TEST),a.setFunc(Kr),se(!1),oe(Cu),fe(n.CULL_FACE),Y(vi);function fe(V){h[V]!==!0&&(n.enable(V),h[V]=!0)}function we(V){h[V]!==!1&&(n.disable(V),h[V]=!1)}function je(V,De){return d[V]!==De?(n.bindFramebuffer(V,De),d[V]=De,V===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=De),V===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=De),!0):!1}function Ue(V,De){let Re=g,Ce=!1;if(V){Re=x.get(De),Re===void 0&&(Re=[],x.set(De,Re));const Se=V.textures;if(Re.length!==Se.length||Re[0]!==n.COLOR_ATTACHMENT0){for(let de=0,Ve=Se.length;de<Ve;de++)Re[de]=n.COLOR_ATTACHMENT0+de;Re.length=Se.length,Ce=!0}}else Re[0]!==n.BACK&&(Re[0]=n.BACK,Ce=!0);Ce&&n.drawBuffers(Re)}function et(V){return S!==V?(n.useProgram(V),S=V,!0):!1}const N={[or]:n.FUNC_ADD,[Sm]:n.FUNC_SUBTRACT,[bm]:n.FUNC_REVERSE_SUBTRACT};N[ym]=n.MIN,N[Em]=n.MAX;const F={[Tm]:n.ZERO,[Am]:n.ONE,[wm]:n.SRC_COLOR,[ul]:n.SRC_ALPHA,[Um]:n.SRC_ALPHA_SATURATE,[Dm]:n.DST_COLOR,[Cm]:n.DST_ALPHA,[Rm]:n.ONE_MINUS_SRC_COLOR,[fl]:n.ONE_MINUS_SRC_ALPHA,[Lm]:n.ONE_MINUS_DST_COLOR,[Pm]:n.ONE_MINUS_DST_ALPHA,[Im]:n.CONSTANT_COLOR,[Fm]:n.ONE_MINUS_CONSTANT_COLOR,[Nm]:n.CONSTANT_ALPHA,[Om]:n.ONE_MINUS_CONSTANT_ALPHA};function Y(V,De,Re,Ce,Se,de,Ve,tt,yt,mt){if(V===vi){T===!0&&(we(n.BLEND),T=!1);return}if(T===!1&&(fe(n.BLEND),T=!0),V!==Mm){if(V!==_||mt!==w){if((p!==or||A!==or)&&(n.blendEquation(n.FUNC_ADD),p=or,A=or),mt)switch(V){case Xr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pu:n.blendFunc(n.ONE,n.ONE);break;case Du:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:zt("WebGLState: Invalid blending: ",V);break}else switch(V){case Xr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Du:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lu:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",V);break}P=null,C=null,O=null,D=null,B.set(0,0,0),k=0,_=V,w=mt}return}Se=Se||De,de=de||Re,Ve=Ve||Ce,(De!==p||Se!==A)&&(n.blendEquationSeparate(N[De],N[Se]),p=De,A=Se),(Re!==P||Ce!==C||de!==O||Ve!==D)&&(n.blendFuncSeparate(F[Re],F[Ce],F[de],F[Ve]),P=Re,C=Ce,O=de,D=Ve),(tt.equals(B)===!1||yt!==k)&&(n.blendColor(tt.r,tt.g,tt.b,yt),B.copy(tt),k=yt),_=V,w=!1}function R(V,De){V.side===mi?we(n.CULL_FACE):fe(n.CULL_FACE);let Re=V.side===xn;De&&(Re=!Re),se(Re),V.blending===Xr&&V.transparent===!1?Y(vi):Y(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),s.setMask(V.colorWrite);const Ce=V.stencilWrite;l.setTest(Ce),Ce&&(l.setMask(V.stencilWriteMask),l.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),l.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ie(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(V){b!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),b=V)}function oe(V){V!==gm?(fe(n.CULL_FACE),V!==z&&(V===Cu?n.cullFace(n.BACK):V===_m?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),z=V}function xe(V){V!==j&&(le&&n.lineWidth(V),j=V)}function ie(V,De,Re){V?(fe(n.POLYGON_OFFSET_FILL),(ee!==De||ue!==Re)&&(n.polygonOffset(De,Re),ee=De,ue=Re)):we(n.POLYGON_OFFSET_FILL)}function me(V){V?fe(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function Z(V){V===void 0&&(V=n.TEXTURE0+ce-1),_e!==V&&(n.activeTexture(V),_e=V)}function ge(V,De,Re){Re===void 0&&(_e===null?Re=n.TEXTURE0+ce-1:Re=_e);let Ce=Te[Re];Ce===void 0&&(Ce={type:void 0,texture:void 0},Te[Re]=Ce),(Ce.type!==V||Ce.texture!==De)&&(_e!==Re&&(n.activeTexture(Re),_e=Re),n.bindTexture(V,De||$[V]),Ce.type=V,Ce.texture=De)}function y(){const V=Te[_e];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function H(){try{n.compressedTexImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Q(){try{n.texSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function ae(){try{n.texSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Ne(){try{n.compressedTexSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function be(){try{n.texStorage2D(...arguments)}catch(V){V("WebGLState:",V)}}function He(){try{n.texStorage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Be(){try{n.texImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function pe(){try{n.texImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function ye(V){ft.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),ft.copy(V))}function Ge(V){Ae.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),Ae.copy(V))}function Xe(V,De){let Re=u.get(De);Re===void 0&&(Re=new WeakMap,u.set(De,Re));let Ce=Re.get(V);Ce===void 0&&(Ce=n.getUniformBlockIndex(De,V.name),Re.set(V,Ce))}function Fe(V,De){const Ce=u.get(De).get(V);c.get(De)!==Ce&&(n.uniformBlockBinding(De,Ce,V.__bindingPointIndex),c.set(De,Ce))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},_e=null,Te={},d={},x=new WeakMap,g=[],S=null,T=!1,_=null,p=null,P=null,C=null,A=null,O=null,D=null,B=new vt(0,0,0),k=0,w=!1,b=null,z=null,j=null,ee=null,ue=null,ft.set(0,0,n.canvas.width,n.canvas.height),Ae.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:fe,disable:we,bindFramebuffer:je,drawBuffers:Ue,useProgram:et,setBlending:Y,setMaterial:R,setFlipSided:se,setCullFace:oe,setLineWidth:xe,setPolygonOffset:ie,setScissorTest:me,activeTexture:Z,bindTexture:ge,unbindTexture:y,compressedTexImage2D:v,compressedTexImage3D:H,texImage2D:Be,texImage3D:pe,updateUBOMapping:Xe,uniformBlockBinding:Fe,texStorage2D:be,texStorage3D:He,texSubImage2D:Q,texSubImage3D:ae,compressedTexSubImage2D:K,compressedTexSubImage3D:Ne,scissor:ye,viewport:Ge,reset:Ze}}function NS(n,e,t,i,r,s,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new dt,h=new WeakMap;let d;const x=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(y,v){return g?new OffscreenCanvas(y,v):Ho("canvas")}function T(y,v,H){let Q=1;const ae=ge(y);if((ae.width>H||ae.height>H)&&(Q=H/Math.max(ae.width,ae.height)),Q<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const K=Math.floor(Q*ae.width),Ne=Math.floor(Q*ae.height);d===void 0&&(d=S(K,Ne));const be=v?S(K,Ne):d;return be.width=K,be.height=Ne,be.getContext("2d").drawImage(y,0,0,K,Ne),rt("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+K+"x"+Ne+")."),be}else return"data"in y&&rt("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),y;return y}function _(y){return y.generateMipmaps}function p(y){n.generateMipmap(y)}function P(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(y,v,H,Q,ae=!1){if(y!==null){if(n[y]!==void 0)return n[y];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let K=v;if(v===n.RED&&(H===n.FLOAT&&(K=n.R32F),H===n.HALF_FLOAT&&(K=n.R16F),H===n.UNSIGNED_BYTE&&(K=n.R8)),v===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.R8UI),H===n.UNSIGNED_SHORT&&(K=n.R16UI),H===n.UNSIGNED_INT&&(K=n.R32UI),H===n.BYTE&&(K=n.R8I),H===n.SHORT&&(K=n.R16I),H===n.INT&&(K=n.R32I)),v===n.RG&&(H===n.FLOAT&&(K=n.RG32F),H===n.HALF_FLOAT&&(K=n.RG16F),H===n.UNSIGNED_BYTE&&(K=n.RG8)),v===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RG8UI),H===n.UNSIGNED_SHORT&&(K=n.RG16UI),H===n.UNSIGNED_INT&&(K=n.RG32UI),H===n.BYTE&&(K=n.RG8I),H===n.SHORT&&(K=n.RG16I),H===n.INT&&(K=n.RG32I)),v===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RGB8UI),H===n.UNSIGNED_SHORT&&(K=n.RGB16UI),H===n.UNSIGNED_INT&&(K=n.RGB32UI),H===n.BYTE&&(K=n.RGB8I),H===n.SHORT&&(K=n.RGB16I),H===n.INT&&(K=n.RGB32I)),v===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),H===n.UNSIGNED_INT&&(K=n.RGBA32UI),H===n.BYTE&&(K=n.RGBA8I),H===n.SHORT&&(K=n.RGBA16I),H===n.INT&&(K=n.RGBA32I)),v===n.RGB&&(H===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),v===n.RGBA){const Ne=ae?zo:_t.getTransfer(Q);H===n.FLOAT&&(K=n.RGBA32F),H===n.HALF_FLOAT&&(K=n.RGBA16F),H===n.UNSIGNED_BYTE&&(K=Ne===Tt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function A(y,v){let H;return y?v===null||v===fr||v===Os?H=n.DEPTH24_STENCIL8:v===gi?H=n.DEPTH32F_STENCIL8:v===Ns&&(H=n.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===fr||v===Os?H=n.DEPTH_COMPONENT24:v===gi?H=n.DEPTH_COMPONENT32F:v===Ns&&(H=n.DEPTH_COMPONENT16),H}function O(y,v){return _(y)===!0||y.isFramebufferTexture&&y.minFilter!==An&&y.minFilter!==Un?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function D(y){const v=y.target;v.removeEventListener("dispose",D),k(v),v.isVideoTexture&&h.delete(v)}function B(y){const v=y.target;v.removeEventListener("dispose",B),b(v)}function k(y){const v=i.get(y);if(v.__webglInit===void 0)return;const H=y.source,Q=x.get(H);if(Q){const ae=Q[v.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&w(y),Object.keys(Q).length===0&&x.delete(H)}i.remove(y)}function w(y){const v=i.get(y);n.deleteTexture(v.__webglTexture);const H=y.source,Q=x.get(H);delete Q[v.__cacheKey],a.memory.textures--}function b(y){const v=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(v.__webglFramebuffer[Q]))for(let ae=0;ae<v.__webglFramebuffer[Q].length;ae++)n.deleteFramebuffer(v.__webglFramebuffer[Q][ae]);else n.deleteFramebuffer(v.__webglFramebuffer[Q]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Q])}else{if(Array.isArray(v.__webglFramebuffer))for(let Q=0;Q<v.__webglFramebuffer.length;Q++)n.deleteFramebuffer(v.__webglFramebuffer[Q]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Q=0;Q<v.__webglColorRenderbuffer.length;Q++)v.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Q]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const H=y.textures;for(let Q=0,ae=H.length;Q<ae;Q++){const K=i.get(H[Q]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(H[Q])}i.remove(y)}let z=0;function j(){z=0}function ee(){const y=z;return y>=r.maxTextures&&rt("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),z+=1,y}function ue(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function ce(y,v){const H=i.get(y);if(y.isVideoTexture&&me(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&H.__version!==y.version){const Q=y.image;if(Q===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{$(H,y,v);return}}else y.isExternalTexture&&(H.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+v)}function le(y,v){const H=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&H.__version!==y.version){$(H,y,v);return}else y.isExternalTexture&&(H.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+v)}function he(y,v){const H=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&H.__version!==y.version){$(H,y,v);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+v)}function J(y,v){const H=i.get(y);if(y.version>0&&H.__version!==y.version){fe(H,y,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+v)}const _e={[Sl]:n.REPEAT,[xi]:n.CLAMP_TO_EDGE,[bl]:n.MIRRORED_REPEAT},Te={[An]:n.NEAREST,[Ym]:n.NEAREST_MIPMAP_NEAREST,[io]:n.NEAREST_MIPMAP_LINEAR,[Un]:n.LINEAR,[ba]:n.LINEAR_MIPMAP_NEAREST,[lr]:n.LINEAR_MIPMAP_LINEAR},We={[Zm]:n.NEVER,[ix]:n.ALWAYS,[Jm]:n.LESS,[Zh]:n.LEQUAL,[Qm]:n.EQUAL,[nx]:n.GEQUAL,[ex]:n.GREATER,[tx]:n.NOTEQUAL};function Qe(y,v){if(v.type===gi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Un||v.magFilter===ba||v.magFilter===io||v.magFilter===lr||v.minFilter===Un||v.minFilter===ba||v.minFilter===io||v.minFilter===lr)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,_e[v.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,_e[v.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,_e[v.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,Te[v.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,Te[v.minFilter]),v.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,We[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===An||v.minFilter!==io&&v.minFilter!==lr||v.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ft(y,v){let H=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",D));const Q=v.source;let ae=x.get(Q);ae===void 0&&(ae={},x.set(Q,ae));const K=ue(v);if(K!==y.__cacheKey){ae[K]===void 0&&(ae[K]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ae[K].usedTimes++;const Ne=ae[y.__cacheKey];Ne!==void 0&&(ae[y.__cacheKey].usedTimes--,Ne.usedTimes===0&&w(v)),y.__cacheKey=K,y.__webglTexture=ae[K].texture}return H}function Ae(y,v,H){return Math.floor(Math.floor(y/H)/v)}function ve(y,v,H,Q){const K=y.updateRanges;if(K.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,H,Q,v.data);else{K.sort((pe,ye)=>pe.start-ye.start);let Ne=0;for(let pe=1;pe<K.length;pe++){const ye=K[Ne],Ge=K[pe],Xe=ye.start+ye.count,Fe=Ae(Ge.start,v.width,4),Ze=Ae(ye.start,v.width,4);Ge.start<=Xe+1&&Fe===Ze&&Ae(Ge.start+Ge.count-1,v.width,4)===Fe?ye.count=Math.max(ye.count,Ge.start+Ge.count-ye.start):(++Ne,K[Ne]=Ge)}K.length=Ne+1;const be=n.getParameter(n.UNPACK_ROW_LENGTH),He=n.getParameter(n.UNPACK_SKIP_PIXELS),Be=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let pe=0,ye=K.length;pe<ye;pe++){const Ge=K[pe],Xe=Math.floor(Ge.start/4),Fe=Math.ceil(Ge.count/4),Ze=Xe%v.width,V=Math.floor(Xe/v.width),De=Fe,Re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,V),t.texSubImage2D(n.TEXTURE_2D,0,Ze,V,De,Re,H,Q,v.data)}y.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,be),n.pixelStorei(n.UNPACK_SKIP_PIXELS,He),n.pixelStorei(n.UNPACK_SKIP_ROWS,Be)}}function $(y,v,H){let Q=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Q=n.TEXTURE_3D);const ae=ft(y,v),K=v.source;t.bindTexture(Q,y.__webglTexture,n.TEXTURE0+H);const Ne=i.get(K);if(K.version!==Ne.__version||ae===!0){t.activeTexture(n.TEXTURE0+H);const be=_t.getPrimaries(_t.workingColorSpace),He=v.colorSpace===Vi?null:_t.getPrimaries(v.colorSpace),Be=v.colorSpace===Vi||be===He?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let pe=T(v.image,!1,r.maxTextureSize);pe=Z(v,pe);const ye=s.convert(v.format,v.colorSpace),Ge=s.convert(v.type);let Xe=C(v.internalFormat,ye,Ge,v.colorSpace,v.isVideoTexture);Qe(Q,v);let Fe;const Ze=v.mipmaps,V=v.isVideoTexture!==!0,De=Ne.__version===void 0||ae===!0,Re=K.dataReady,Ce=O(v,pe);if(v.isDepthTexture)Xe=A(v.format===zs,v.type),De&&(V?t.texStorage2D(n.TEXTURE_2D,1,Xe,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,Xe,pe.width,pe.height,0,ye,Ge,null));else if(v.isDataTexture)if(Ze.length>0){V&&De&&t.texStorage2D(n.TEXTURE_2D,Ce,Xe,Ze[0].width,Ze[0].height);for(let Se=0,de=Ze.length;Se<de;Se++)Fe=Ze[Se],V?Re&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Fe.width,Fe.height,ye,Ge,Fe.data):t.texImage2D(n.TEXTURE_2D,Se,Xe,Fe.width,Fe.height,0,ye,Ge,Fe.data);v.generateMipmaps=!1}else V?(De&&t.texStorage2D(n.TEXTURE_2D,Ce,Xe,pe.width,pe.height),Re&&ve(v,pe,ye,Ge)):t.texImage2D(n.TEXTURE_2D,0,Xe,pe.width,pe.height,0,ye,Ge,pe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){V&&De&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Xe,Ze[0].width,Ze[0].height,pe.depth);for(let Se=0,de=Ze.length;Se<de;Se++)if(Fe=Ze[Se],v.format!==Vn)if(ye!==null)if(V){if(Re)if(v.layerUpdates.size>0){const Ve=sf(Fe.width,Fe.height,v.format,v.type);for(const tt of v.layerUpdates){const yt=Fe.data.subarray(tt*Ve/Fe.data.BYTES_PER_ELEMENT,(tt+1)*Ve/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,tt,Fe.width,Fe.height,1,ye,yt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,Fe.width,Fe.height,pe.depth,ye,Fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Se,Xe,Fe.width,Fe.height,pe.depth,0,Fe.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,Fe.width,Fe.height,pe.depth,ye,Ge,Fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Se,Xe,Fe.width,Fe.height,pe.depth,0,ye,Ge,Fe.data)}else{V&&De&&t.texStorage2D(n.TEXTURE_2D,Ce,Xe,Ze[0].width,Ze[0].height);for(let Se=0,de=Ze.length;Se<de;Se++)Fe=Ze[Se],v.format!==Vn?ye!==null?V?Re&&t.compressedTexSubImage2D(n.TEXTURE_2D,Se,0,0,Fe.width,Fe.height,ye,Fe.data):t.compressedTexImage2D(n.TEXTURE_2D,Se,Xe,Fe.width,Fe.height,0,Fe.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Re&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Fe.width,Fe.height,ye,Ge,Fe.data):t.texImage2D(n.TEXTURE_2D,Se,Xe,Fe.width,Fe.height,0,ye,Ge,Fe.data)}else if(v.isDataArrayTexture)if(V){if(De&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Xe,pe.width,pe.height,pe.depth),Re)if(v.layerUpdates.size>0){const Se=sf(pe.width,pe.height,v.format,v.type);for(const de of v.layerUpdates){const Ve=pe.data.subarray(de*Se/pe.data.BYTES_PER_ELEMENT,(de+1)*Se/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,pe.width,pe.height,1,ye,Ge,Ve)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,ye,Ge,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Xe,pe.width,pe.height,pe.depth,0,ye,Ge,pe.data);else if(v.isData3DTexture)V?(De&&t.texStorage3D(n.TEXTURE_3D,Ce,Xe,pe.width,pe.height,pe.depth),Re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,ye,Ge,pe.data)):t.texImage3D(n.TEXTURE_3D,0,Xe,pe.width,pe.height,pe.depth,0,ye,Ge,pe.data);else if(v.isFramebufferTexture){if(De)if(V)t.texStorage2D(n.TEXTURE_2D,Ce,Xe,pe.width,pe.height);else{let Se=pe.width,de=pe.height;for(let Ve=0;Ve<Ce;Ve++)t.texImage2D(n.TEXTURE_2D,Ve,Xe,Se,de,0,ye,Ge,null),Se>>=1,de>>=1}}else if(Ze.length>0){if(V&&De){const Se=ge(Ze[0]);t.texStorage2D(n.TEXTURE_2D,Ce,Xe,Se.width,Se.height)}for(let Se=0,de=Ze.length;Se<de;Se++)Fe=Ze[Se],V?Re&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,ye,Ge,Fe):t.texImage2D(n.TEXTURE_2D,Se,Xe,ye,Ge,Fe);v.generateMipmaps=!1}else if(V){if(De){const Se=ge(pe);t.texStorage2D(n.TEXTURE_2D,Ce,Xe,Se.width,Se.height)}Re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Ge,pe)}else t.texImage2D(n.TEXTURE_2D,0,Xe,ye,Ge,pe);_(v)&&p(Q),Ne.__version=K.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function fe(y,v,H){if(v.image.length!==6)return;const Q=ft(y,v),ae=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+H);const K=i.get(ae);if(ae.version!==K.__version||Q===!0){t.activeTexture(n.TEXTURE0+H);const Ne=_t.getPrimaries(_t.workingColorSpace),be=v.colorSpace===Vi?null:_t.getPrimaries(v.colorSpace),He=v.colorSpace===Vi||Ne===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const Be=v.isCompressedTexture||v.image[0].isCompressedTexture,pe=v.image[0]&&v.image[0].isDataTexture,ye=[];for(let de=0;de<6;de++)!Be&&!pe?ye[de]=T(v.image[de],!0,r.maxCubemapSize):ye[de]=pe?v.image[de].image:v.image[de],ye[de]=Z(v,ye[de]);const Ge=ye[0],Xe=s.convert(v.format,v.colorSpace),Fe=s.convert(v.type),Ze=C(v.internalFormat,Xe,Fe,v.colorSpace),V=v.isVideoTexture!==!0,De=K.__version===void 0||Q===!0,Re=ae.dataReady;let Ce=O(v,Ge);Qe(n.TEXTURE_CUBE_MAP,v);let Se;if(Be){V&&De&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Ze,Ge.width,Ge.height);for(let de=0;de<6;de++){Se=ye[de].mipmaps;for(let Ve=0;Ve<Se.length;Ve++){const tt=Se[Ve];v.format!==Vn?Xe!==null?V?Re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve,0,0,tt.width,tt.height,Xe,tt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve,Ze,tt.width,tt.height,0,tt.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve,0,0,tt.width,tt.height,Xe,Fe,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve,Ze,tt.width,tt.height,0,Xe,Fe,tt.data)}}}else{if(Se=v.mipmaps,V&&De){Se.length>0&&Ce++;const de=ge(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Ze,de.width,de.height)}for(let de=0;de<6;de++)if(pe){V?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ye[de].width,ye[de].height,Xe,Fe,ye[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ze,ye[de].width,ye[de].height,0,Xe,Fe,ye[de].data);for(let Ve=0;Ve<Se.length;Ve++){const yt=Se[Ve].image[de].image;V?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve+1,0,0,yt.width,yt.height,Xe,Fe,yt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve+1,Ze,yt.width,yt.height,0,Xe,Fe,yt.data)}}else{V?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Xe,Fe,ye[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ze,Xe,Fe,ye[de]);for(let Ve=0;Ve<Se.length;Ve++){const tt=Se[Ve];V?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve+1,0,0,Xe,Fe,tt.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve+1,Ze,Xe,Fe,tt.image[de])}}}_(v)&&p(n.TEXTURE_CUBE_MAP),K.__version=ae.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function we(y,v,H,Q,ae,K){const Ne=s.convert(H.format,H.colorSpace),be=s.convert(H.type),He=C(H.internalFormat,Ne,be,H.colorSpace),Be=i.get(v),pe=i.get(H);if(pe.__renderTarget=v,!Be.__hasExternalTextures){const ye=Math.max(1,v.width>>K),Ge=Math.max(1,v.height>>K);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,K,He,ye,Ge,v.depth,0,Ne,be,null):t.texImage2D(ae,K,He,ye,Ge,0,Ne,be,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),ie(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ae,pe.__webglTexture,0,xe(v)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ae,pe.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function je(y,v,H){if(n.bindRenderbuffer(n.RENDERBUFFER,y),v.depthBuffer){const Q=v.depthTexture,ae=Q&&Q.isDepthTexture?Q.type:null,K=A(v.stencilBuffer,ae),Ne=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=xe(v);ie(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,K,v.width,v.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,K,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,K,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ne,n.RENDERBUFFER,y)}else{const Q=v.textures;for(let ae=0;ae<Q.length;ae++){const K=Q[ae],Ne=s.convert(K.format,K.colorSpace),be=s.convert(K.type),He=C(K.internalFormat,Ne,be,K.colorSpace),Be=xe(v);H&&ie(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,He,v.width,v.height):ie(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be,He,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,He,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(v.depthTexture);Q.__renderTarget=v,(!Q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ce(v.depthTexture,0);const ae=Q.__webglTexture,K=xe(v);if(v.depthTexture.format===Bs)ie(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0);else if(v.depthTexture.format===zs)ie(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function et(y){const v=i.get(y),H=y.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==y.depthTexture){const Q=y.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Q){const ae=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Q.removeEventListener("dispose",ae)};Q.addEventListener("dispose",ae),v.__depthDisposeCallback=ae}v.__boundDepthTexture=Q}if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const Q=y.texture.mipmaps;Q&&Q.length>0?Ue(v.__webglFramebuffer[0],y):Ue(v.__webglFramebuffer,y)}else if(H){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]===void 0)v.__webglDepthbuffer[Q]=n.createRenderbuffer(),je(v.__webglDepthbuffer[Q],y,!1);else{const ae=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,K)}}else{const Q=y.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),je(v.__webglDepthbuffer,y,!1);else{const ae=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,K)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function N(y,v,H){const Q=i.get(y);v!==void 0&&we(Q.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&et(y)}function F(y){const v=y.texture,H=i.get(y),Q=i.get(v);y.addEventListener("dispose",B);const ae=y.textures,K=y.isWebGLCubeRenderTarget===!0,Ne=ae.length>1;if(Ne||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=v.version,a.memory.textures++),K){H.__webglFramebuffer=[];for(let be=0;be<6;be++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[be]=[];for(let He=0;He<v.mipmaps.length;He++)H.__webglFramebuffer[be][He]=n.createFramebuffer()}else H.__webglFramebuffer[be]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let be=0;be<v.mipmaps.length;be++)H.__webglFramebuffer[be]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Ne)for(let be=0,He=ae.length;be<He;be++){const Be=i.get(ae[be]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),a.memory.textures++)}if(y.samples>0&&ie(y)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let be=0;be<ae.length;be++){const He=ae[be];H.__webglColorRenderbuffer[be]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[be]);const Be=s.convert(He.format,He.colorSpace),pe=s.convert(He.type),ye=C(He.internalFormat,Be,pe,He.colorSpace,y.isXRRenderTarget===!0),Ge=xe(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,ye,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,H.__webglColorRenderbuffer[be])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),je(H.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Qe(n.TEXTURE_CUBE_MAP,v);for(let be=0;be<6;be++)if(v.mipmaps&&v.mipmaps.length>0)for(let He=0;He<v.mipmaps.length;He++)we(H.__webglFramebuffer[be][He],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,He);else we(H.__webglFramebuffer[be],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);_(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let be=0,He=ae.length;be<He;be++){const Be=ae[be],pe=i.get(Be);let ye=n.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ye=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,pe.__webglTexture),Qe(ye,Be),we(H.__webglFramebuffer,y,Be,n.COLOR_ATTACHMENT0+be,ye,0),_(Be)&&p(ye)}t.unbindTexture()}else{let be=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(be=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,Q.__webglTexture),Qe(be,v),v.mipmaps&&v.mipmaps.length>0)for(let He=0;He<v.mipmaps.length;He++)we(H.__webglFramebuffer[He],y,v,n.COLOR_ATTACHMENT0,be,He);else we(H.__webglFramebuffer,y,v,n.COLOR_ATTACHMENT0,be,0);_(v)&&p(be),t.unbindTexture()}y.depthBuffer&&et(y)}function Y(y){const v=y.textures;for(let H=0,Q=v.length;H<Q;H++){const ae=v[H];if(_(ae)){const K=P(y),Ne=i.get(ae).__webglTexture;t.bindTexture(K,Ne),p(K),t.unbindTexture()}}}const R=[],se=[];function oe(y){if(y.samples>0){if(ie(y)===!1){const v=y.textures,H=y.width,Q=y.height;let ae=n.COLOR_BUFFER_BIT;const K=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ne=i.get(y),be=v.length>1;if(be)for(let Be=0;Be<v.length;Be++)t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const He=y.texture.mipmaps;He&&He.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Be=0;Be<v.length;Be++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),be){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ne.__webglColorRenderbuffer[Be]);const pe=i.get(v[Be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,pe,0)}n.blitFramebuffer(0,0,H,Q,0,0,H,Q,ae,n.NEAREST),c===!0&&(R.length=0,se.length=0,R.push(n.COLOR_ATTACHMENT0+Be),y.depthBuffer&&y.resolveDepthBuffer===!1&&(R.push(K),se.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,se)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),be)for(let Be=0;Be<v.length;Be++){t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,Ne.__webglColorRenderbuffer[Be]);const pe=i.get(v[Be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&c){const v=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function xe(y){return Math.min(r.maxSamples,y.samples)}function ie(y){const v=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function me(y){const v=a.render.frame;h.get(y)!==v&&(h.set(y,v),y.update())}function Z(y,v){const H=y.colorSpace,Q=y.format,ae=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||H!==Jr&&H!==Vi&&(_t.getTransfer(H)===Tt?(Q!==Vn||ae!==ei)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",H)),v}function ge(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(u.width=y.naturalWidth||y.width,u.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(u.width=y.displayWidth,u.height=y.displayHeight):(u.width=y.width,u.height=y.height),u}this.allocateTextureUnit=ee,this.resetTextureUnits=j,this.setTexture2D=ce,this.setTexture2DArray=le,this.setTexture3D=he,this.setTextureCube=J,this.rebindTextures=N,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=we,this.useMultisampledRTT=ie}function OS(n,e){function t(i,r=Vi){let s;const a=_t.getTransfer(r);if(i===ei)return n.UNSIGNED_BYTE;if(i===vc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Mc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===jh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===kh)return n.BYTE;if(i===Wh)return n.SHORT;if(i===Ns)return n.UNSIGNED_SHORT;if(i===_c)return n.INT;if(i===fr)return n.UNSIGNED_INT;if(i===gi)return n.FLOAT;if(i===es)return n.HALF_FLOAT;if(i===Yh)return n.ALPHA;if(i===qh)return n.RGB;if(i===Vn)return n.RGBA;if(i===Bs)return n.DEPTH_COMPONENT;if(i===zs)return n.DEPTH_STENCIL;if(i===Kh)return n.RED;if(i===Sc)return n.RED_INTEGER;if(i===bc)return n.RG;if(i===yc)return n.RG_INTEGER;if(i===Ec)return n.RGBA_INTEGER;if(i===Ro||i===Co||i===Po||i===Do)if(a===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ro)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ro)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Co)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Po)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Do)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yl||i===El||i===Tl||i===Al)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===yl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===El)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Al)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wl||i===Rl||i===Cl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===wl||i===Rl)return a===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Cl)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pl||i===Dl||i===Ll||i===Ul||i===Il||i===Fl||i===Nl||i===Ol||i===Bl||i===zl||i===Vl||i===Hl||i===Gl||i===kl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Pl)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dl)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ll)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ul)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Il)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fl)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nl)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ol)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bl)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zl)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vl)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hl)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gl)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kl)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wl||i===Xl||i===jl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Wl)return a===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yl||i===ql||i===Kl||i===$l)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Yl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ql)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$l)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Os?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const BS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zS=`
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

}`;class VS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ld(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ei({vertexShader:BS,fragmentShader:zS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new Qo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HS extends ts{constructor(e,t){super();const i=this;let r=null,s=1,a=null,l="local-floor",c=1,u=null,h=null,d=null,x=null,g=null,S=null;const T=typeof XRWebGLBinding<"u",_=new VS,p={},P=t.getContextAttributes();let C=null,A=null;const O=[],D=[],B=new dt;let k=null;const w=new En;w.viewport=new At;const b=new En;b.viewport=new At;const z=[w,b],j=new og;let ee=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let fe=O[$];return fe===void 0&&(fe=new ka,O[$]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function($){let fe=O[$];return fe===void 0&&(fe=new ka,O[$]=fe),fe.getGripSpace()},this.getHand=function($){let fe=O[$];return fe===void 0&&(fe=new ka,O[$]=fe),fe.getHandSpace()};function ce($){const fe=D.indexOf($.inputSource);if(fe===-1)return;const we=O[fe];we!==void 0&&(we.update($.inputSource,$.frame,u||a),we.dispatchEvent({type:$.type,data:$.inputSource}))}function le(){r.removeEventListener("select",ce),r.removeEventListener("selectstart",ce),r.removeEventListener("selectend",ce),r.removeEventListener("squeeze",ce),r.removeEventListener("squeezestart",ce),r.removeEventListener("squeezeend",ce),r.removeEventListener("end",le),r.removeEventListener("inputsourceschange",he);for(let $=0;$<O.length;$++){const fe=D[$];fe!==null&&(D[$]=null,O[$].disconnect(fe))}ee=null,ue=null,_.reset();for(const $ in p)delete p[$];e.setRenderTarget(C),g=null,x=null,d=null,r=null,A=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(k),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){l=$,i.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return x!==null?x:g},this.getBinding=function(){return d===null&&T&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(C=e.getRenderTarget(),r.addEventListener("select",ce),r.addEventListener("selectstart",ce),r.addEventListener("selectend",ce),r.addEventListener("squeeze",ce),r.addEventListener("squeezestart",ce),r.addEventListener("squeezeend",ce),r.addEventListener("end",le),r.addEventListener("inputsourceschange",he),P.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(B),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,je=null,Ue=null;P.depth&&(Ue=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=P.stencil?zs:Bs,je=P.stencil?Os:fr);const et={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:s};d=this.getBinding(),x=d.createProjectionLayer(et),r.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),A=new hr(x.textureWidth,x.textureHeight,{format:Vn,type:ei,depthTexture:new ad(x.textureWidth,x.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const we={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,we),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),A=new hr(g.framebufferWidth,g.framebufferHeight,{format:Vn,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(l),ve.setContext(r),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function he($){for(let fe=0;fe<$.removed.length;fe++){const we=$.removed[fe],je=D.indexOf(we);je>=0&&(D[je]=null,O[je].disconnect(we))}for(let fe=0;fe<$.added.length;fe++){const we=$.added[fe];let je=D.indexOf(we);if(je===-1){for(let et=0;et<O.length;et++)if(et>=D.length){D.push(we),je=et;break}else if(D[et]===null){D[et]=we,je=et;break}if(je===-1)break}const Ue=O[je];Ue&&Ue.connect(we)}}const J=new q,_e=new q;function Te($,fe,we){J.setFromMatrixPosition(fe.matrixWorld),_e.setFromMatrixPosition(we.matrixWorld);const je=J.distanceTo(_e),Ue=fe.projectionMatrix.elements,et=we.projectionMatrix.elements,N=Ue[14]/(Ue[10]-1),F=Ue[14]/(Ue[10]+1),Y=(Ue[9]+1)/Ue[5],R=(Ue[9]-1)/Ue[5],se=(Ue[8]-1)/Ue[0],oe=(et[8]+1)/et[0],xe=N*se,ie=N*oe,me=je/(-se+oe),Z=me*-se;if(fe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Z),$.translateZ(me),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ue[10]===-1)$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const ge=N+me,y=F+me,v=xe-Z,H=ie+(je-Z),Q=Y*F/y*ge,ae=R*F/y*ge;$.projectionMatrix.makePerspective(v,H,Q,ae,ge,y),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function We($,fe){fe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(fe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let fe=$.near,we=$.far;_.texture!==null&&(_.depthNear>0&&(fe=_.depthNear),_.depthFar>0&&(we=_.depthFar)),j.near=b.near=w.near=fe,j.far=b.far=w.far=we,(ee!==j.near||ue!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),ee=j.near,ue=j.far),j.layers.mask=$.layers.mask|6,w.layers.mask=j.layers.mask&3,b.layers.mask=j.layers.mask&5;const je=$.parent,Ue=j.cameras;We(j,je);for(let et=0;et<Ue.length;et++)We(Ue[et],je);Ue.length===2?Te(j,w,b):j.projectionMatrix.copy(w.projectionMatrix),Qe($,j,je)};function Qe($,fe,we){we===null?$.matrix.copy(fe.matrixWorld):($.matrix.copy(we.matrixWorld),$.matrix.invert(),$.matrix.multiply(fe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Hs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(x===null&&g===null))return c},this.setFoveation=function($){c=$,x!==null&&(x.fixedFoveation=$),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(j)},this.getCameraTexture=function($){return p[$]};let ft=null;function Ae($,fe){if(h=fe.getViewerPose(u||a),S=fe,h!==null){const we=h.views;g!==null&&(e.setRenderTargetFramebuffer(A,g.framebuffer),e.setRenderTarget(A));let je=!1;we.length!==j.cameras.length&&(j.cameras.length=0,je=!0);for(let F=0;F<we.length;F++){const Y=we[F];let R=null;if(g!==null)R=g.getViewport(Y);else{const oe=d.getViewSubImage(x,Y);R=oe.viewport,F===0&&(e.setRenderTargetTextures(A,oe.colorTexture,oe.depthStencilTexture),e.setRenderTarget(A))}let se=z[F];se===void 0&&(se=new En,se.layers.enable(F),se.viewport=new At,z[F]=se),se.matrix.fromArray(Y.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Y.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(R.x,R.y,R.width,R.height),F===0&&(j.matrix.copy(se.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),je===!0&&j.cameras.push(se)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){d=i.getBinding();const F=d.getDepthInformation(we[0]);F&&F.isValid&&F.texture&&_.init(F,r.renderState)}if(Ue&&Ue.includes("camera-access")&&T){e.state.unbindTexture(),d=i.getBinding();for(let F=0;F<we.length;F++){const Y=we[F].camera;if(Y){let R=p[Y];R||(R=new ld,p[Y]=R);const se=d.getCameraImage(Y);R.sourceTexture=se}}}}for(let we=0;we<O.length;we++){const je=D[we],Ue=O[we];je!==null&&Ue!==void 0&&Ue.update(je,fe,u||a)}ft&&ft($,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),S=null}const ve=new ud;ve.setAnimationLoop(Ae),this.setAnimationLoop=function($){ft=$},this.dispose=function(){}}}const ir=new ti,GS=new Bt;function kS(n,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function i(_,p){p.color.getRGB(_.fogColor.value,rd(n)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,P,C,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(_,p):p.isMeshToonMaterial?(s(_,p),d(_,p)):p.isMeshPhongMaterial?(s(_,p),h(_,p)):p.isMeshStandardMaterial?(s(_,p),x(_,p),p.isMeshPhysicalMaterial&&g(_,p,A)):p.isMeshMatcapMaterial?(s(_,p),S(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),T(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(a(_,p),p.isLineDashedMaterial&&l(_,p)):p.isPointsMaterial?c(_,p,P,C):p.isSpriteMaterial?u(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===xn&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===xn&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const P=e.get(p),C=P.envMap,A=P.envMapRotation;C&&(_.envMap.value=C,ir.copy(A),ir.x*=-1,ir.y*=-1,ir.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),_.envMapRotation.value.setFromMatrix4(GS.makeRotationFromEuler(ir)),_.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function a(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function l(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function c(_,p,P,C){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*P,_.scale.value=C*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function h(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function d(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function x(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function g(_,p,P){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===xn&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=P.texture,_.transmissionSamplerSize.value.set(P.width,P.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function S(_,p){p.matcap&&(_.matcap.value=p.matcap)}function T(_,p){const P=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(P.matrixWorld),_.nearDistance.value=P.shadow.camera.near,_.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function WS(n,e,t,i){let r={},s={},a=[];const l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(P,C){const A=C.program;i.uniformBlockBinding(P,A)}function u(P,C){let A=r[P.id];A===void 0&&(S(P),A=h(P),r[P.id]=A,P.addEventListener("dispose",_));const O=C.program;i.updateUBOMapping(P,O);const D=e.render.frame;s[P.id]!==D&&(x(P),s[P.id]=D)}function h(P){const C=d();P.__bindingPointIndex=C;const A=n.createBuffer(),O=P.__size,D=P.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,O,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,C,A),A}function d(){for(let P=0;P<l;P++)if(a.indexOf(P)===-1)return a.push(P),P;return zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const C=r[P.id],A=P.uniforms,O=P.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let D=0,B=A.length;D<B;D++){const k=Array.isArray(A[D])?A[D]:[A[D]];for(let w=0,b=k.length;w<b;w++){const z=k[w];if(g(z,D,w,O)===!0){const j=z.__offset,ee=Array.isArray(z.value)?z.value:[z.value];let ue=0;for(let ce=0;ce<ee.length;ce++){const le=ee[ce],he=T(le);typeof le=="number"||typeof le=="boolean"?(z.__data[0]=le,n.bufferSubData(n.UNIFORM_BUFFER,j+ue,z.__data)):le.isMatrix3?(z.__data[0]=le.elements[0],z.__data[1]=le.elements[1],z.__data[2]=le.elements[2],z.__data[3]=0,z.__data[4]=le.elements[3],z.__data[5]=le.elements[4],z.__data[6]=le.elements[5],z.__data[7]=0,z.__data[8]=le.elements[6],z.__data[9]=le.elements[7],z.__data[10]=le.elements[8],z.__data[11]=0):(le.toArray(z.__data,ue),ue+=he.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,j,z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(P,C,A,O){const D=P.value,B=C+"_"+A;if(O[B]===void 0)return typeof D=="number"||typeof D=="boolean"?O[B]=D:O[B]=D.clone(),!0;{const k=O[B];if(typeof D=="number"||typeof D=="boolean"){if(k!==D)return O[B]=D,!0}else if(k.equals(D)===!1)return k.copy(D),!0}return!1}function S(P){const C=P.uniforms;let A=0;const O=16;for(let B=0,k=C.length;B<k;B++){const w=Array.isArray(C[B])?C[B]:[C[B]];for(let b=0,z=w.length;b<z;b++){const j=w[b],ee=Array.isArray(j.value)?j.value:[j.value];for(let ue=0,ce=ee.length;ue<ce;ue++){const le=ee[ue],he=T(le),J=A%O,_e=J%he.boundary,Te=J+_e;A+=_e,Te!==0&&O-Te<he.storage&&(A+=O-Te),j.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=A,A+=he.storage}}}const D=A%O;return D>0&&(A+=O-D),P.__size=A,P.__cache={},this}function T(P){const C={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(C.boundary=4,C.storage=4):P.isVector2?(C.boundary=8,C.storage=8):P.isVector3||P.isColor?(C.boundary=16,C.storage=12):P.isVector4?(C.boundary=16,C.storage=16):P.isMatrix3?(C.boundary=48,C.storage=48):P.isMatrix4?(C.boundary=64,C.storage=64):P.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):rt("WebGLRenderer: Unsupported uniform value type.",P),C}function _(P){const C=P.target;C.removeEventListener("dispose",_);const A=a.indexOf(C.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(r[C.id]),delete r[C.id],delete s[C.id]}function p(){for(const P in r)n.deleteBuffer(r[P]);a=[],r={},s={}}return{bind:c,update:u,dispose:p}}const XS=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ui=null;function jS(){return ui===null&&(ui=new Kx(XS,32,32,bc,es),ui.minFilter=Un,ui.magFilter=Un,ui.wrapS=xi,ui.wrapT=xi,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}class YS{constructor(e={}){const{canvas:t=rx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const S=new Set([Ec,yc,Sc]),T=new Set([ei,fr,Ns,Os,vc,Mc]),_=new Uint32Array(4),p=new Int32Array(4);let P=null,C=null;const A=[],O=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let B=!1;this._outputColorSpace=Dn;let k=0,w=0,b=null,z=-1,j=null;const ee=new At,ue=new At;let ce=null;const le=new vt(0);let he=0,J=t.width,_e=t.height,Te=1,We=null,Qe=null;const ft=new At(0,0,J,_e),Ae=new At(0,0,J,_e);let ve=!1;const $=new Rc;let fe=!1,we=!1;const je=new Bt,Ue=new q,et=new At,N={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let F=!1;function Y(){return b===null?Te:1}let R=i;function se(E,W){return t.getContext(E,W)}try{const E={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gc}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",Ve,!1),R===null){const W="webgl2";if(R=se(W,E),R===null)throw se(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw E("WebGLRenderer: "+E.message),E}let oe,xe,ie,me,Z,ge,y,v,H,Q,ae,K,Ne,be,He,Be,pe,ye,Ge,Xe,Fe,Ze,V,De;function Re(){oe=new tM(R),oe.init(),Ze=new OS(R,oe),xe=new jv(R,oe,e,Ze),ie=new FS(R,oe),xe.reversedDepthBuffer&&x&&ie.buffers.depth.setReversed(!0),me=new rM(R),Z=new bS,ge=new NS(R,oe,ie,Z,xe,Ze,me),y=new qv(D),v=new eM(D),H=new lg(R),V=new Wv(R,H),Q=new nM(R,H,me,V),ae=new oM(R,Q,H,me),Ge=new sM(R,xe,ge),Be=new Yv(Z),K=new SS(D,y,v,oe,xe,V,Be),Ne=new kS(D,Z),be=new ES,He=new PS(oe),ye=new kv(D,y,v,ie,ae,g,c),pe=new US(D,ae,xe),De=new WS(R,me,xe,ie),Xe=new Xv(R,oe,me),Fe=new iM(R,oe,me),me.programs=K.programs,D.capabilities=xe,D.extensions=oe,D.properties=Z,D.renderLists=be,D.shadowMap=pe,D.state=ie,D.info=me}Re();const Ce=new HS(D,R);this.xr=Ce,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=oe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=oe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(E){E!==void 0&&(Te=E,this.setSize(J,_e,!1))},this.getSize=function(E){return E.set(J,_e)},this.setSize=function(E,W,ne=!0){if(Ce.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}J=E,_e=W,t.width=Math.floor(E*Te),t.height=Math.floor(W*Te),ne===!0&&(t.style.width=E+"px",t.style.height=W+"px"),this.setViewport(0,0,E,W)},this.getDrawingBufferSize=function(E){return E.set(J*Te,_e*Te).floor()},this.setDrawingBufferSize=function(E,W,ne){J=E,_e=W,Te=ne,t.width=Math.floor(E*ne),t.height=Math.floor(W*ne),this.setViewport(0,0,E,W)},this.getCurrentViewport=function(E){return E.copy(ee)},this.getViewport=function(E){return E.copy(ft)},this.setViewport=function(E,W,ne,re){E.isVector4?ft.set(E.x,E.y,E.z,E.w):ft.set(E,W,ne,re),ie.viewport(ee.copy(ft).multiplyScalar(Te).round())},this.getScissor=function(E){return E.copy(Ae)},this.setScissor=function(E,W,ne,re){E.isVector4?Ae.set(E.x,E.y,E.z,E.w):Ae.set(E,W,ne,re),ie.scissor(ue.copy(Ae).multiplyScalar(Te).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(E){ie.setScissorTest(ve=E)},this.setOpaqueSort=function(E){We=E},this.setTransparentSort=function(E){Qe=E},this.getClearColor=function(E){return E.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(E=!0,W=!0,ne=!0){let re=0;if(E){let X=!1;if(b!==null){const Ee=b.texture.format;X=S.has(Ee)}if(X){const Ee=b.texture.type,Pe=T.has(Ee),ke=ye.getClearColor(),ze=ye.getClearAlpha(),Ye=ke.r,Je=ke.g,Ke=ke.b;Pe?(_[0]=Ye,_[1]=Je,_[2]=Ke,_[3]=ze,R.clearBufferuiv(R.COLOR,0,_)):(p[0]=Ye,p[1]=Je,p[2]=Ke,p[3]=ze,R.clearBufferiv(R.COLOR,0,p))}else re|=R.COLOR_BUFFER_BIT}W&&(re|=R.DEPTH_BUFFER_BIT),ne&&(re|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",Ve,!1),ye.dispose(),be.dispose(),He.dispose(),Z.dispose(),y.dispose(),v.dispose(),ae.dispose(),V.dispose(),De.dispose(),K.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Ys),Ce.removeEventListener("sessionend",wn),on.stop()};function Se(E){E.preventDefault(),Ou("WebGLRenderer: Context Lost."),B=!0}function de(){Ou("WebGLRenderer: Context Restored."),B=!1;const E=me.autoReset,W=pe.enabled,ne=pe.autoUpdate,re=pe.needsUpdate,X=pe.type;Re(),me.autoReset=E,pe.enabled=W,pe.autoUpdate=ne,pe.needsUpdate=re,pe.type=X}function Ve(E){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function tt(E){const W=E.target;W.removeEventListener("dispose",tt),yt(W)}function yt(E){mt(E),Z.remove(E)}function mt(E){const W=Z.get(E).programs;W!==void 0&&(W.forEach(function(ne){K.releaseProgram(ne)}),E.isShaderMaterial&&K.releaseShaderCache(E))}this.renderBufferDirect=function(E,W,ne,re,X,Ee){W===null&&(W=N);const Pe=X.isMesh&&X.matrixWorld.determinant()<0,ke=Ki(E,W,ne,re,X);ie.setMaterial(re,Pe);let ze=ne.index,Ye=1;if(re.wireframe===!0){if(ze=Q.getWireframeAttribute(ne),ze===void 0)return;Ye=2}const Je=ne.drawRange,Ke=ne.attributes.position;let ct=Je.start*Ye,xt=(Je.start+Je.count)*Ye;Ee!==null&&(ct=Math.max(ct,Ee.start*Ye),xt=Math.min(xt,(Ee.start+Ee.count)*Ye)),ze!==null?(ct=Math.max(ct,0),xt=Math.min(xt,ze.count)):Ke!=null&&(ct=Math.max(ct,0),xt=Math.min(xt,Ke.count));const It=xt-ct;if(It<0||It===1/0)return;V.setup(X,re,ke,ne,ze);let Ft,Mt=Xe;if(ze!==null&&(Ft=H.get(ze),Mt=Fe,Mt.setIndex(Ft)),X.isMesh)re.wireframe===!0?(ie.setLineWidth(re.wireframeLinewidth*Y()),Mt.setMode(R.LINES)):Mt.setMode(R.TRIANGLES);else if(X.isLine){let $e=re.linewidth;$e===void 0&&($e=1),ie.setLineWidth($e*Y()),X.isLineSegments?Mt.setMode(R.LINES):X.isLineLoop?Mt.setMode(R.LINE_LOOP):Mt.setMode(R.LINE_STRIP)}else X.isPoints?Mt.setMode(R.POINTS):X.isSprite&&Mt.setMode(R.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Vs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))Mt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const $e=X._multiDrawStarts,Rt=X._multiDrawCounts,pt=X._multiDrawCount,Et=ze?H.get(ze).bytesPerElement:1,ii=Z.get(re).currentProgram.getUniforms();for(let Zt=0;Zt<pt;Zt++)ii.setValue(R,"_gl_DrawID",Zt),Mt.render($e[Zt]/Et,Rt[Zt])}else if(X.isInstancedMesh)Mt.renderInstances(ct,It,X.count);else if(ne.isInstancedBufferGeometry){const $e=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Rt=Math.min(ne.instanceCount,$e);Mt.renderInstances(ct,It,Rt)}else Mt.render(ct,It)};function sn(E,W,ne){E.transparent===!0&&E.side===mi&&E.forceSinglePass===!1?(E.side=xn,E.needsUpdate=!0,ni(E,W,ne),E.side=ji,E.needsUpdate=!0,ni(E,W,ne),E.side=mi):ni(E,W,ne)}this.compile=function(E,W,ne=null){ne===null&&(ne=E),C=He.get(ne),C.init(W),O.push(C),ne.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(C.pushLight(X),X.castShadow&&C.pushShadow(X))}),E!==ne&&E.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(C.pushLight(X),X.castShadow&&C.pushShadow(X))}),C.setupLights();const re=new Set;return E.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ee=X.material;if(Ee)if(Array.isArray(Ee))for(let Pe=0;Pe<Ee.length;Pe++){const ke=Ee[Pe];sn(ke,ne,X),re.add(ke)}else sn(Ee,ne,X),re.add(Ee)}),C=O.pop(),re},this.compileAsync=function(E,W,ne=null){const re=this.compile(E,W,ne);return new Promise(X=>{function Ee(){if(re.forEach(function(Pe){Z.get(Pe).currentProgram.isReady()&&re.delete(Pe)}),re.size===0){X(E);return}setTimeout(Ee,10)}oe.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let _n=null;function Ai(E){_n&&_n(E)}function Ys(){on.stop()}function wn(){on.start()}const on=new ud;on.setAnimationLoop(Ai),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(E){_n=E,Ce.setAnimationLoop(E),E===null?on.stop():on.start()},Ce.addEventListener("sessionstart",Ys),Ce.addEventListener("sessionend",wn),this.render=function(E,W){if(W!==void 0&&W.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(W),W=Ce.getCamera()),E.isScene===!0&&E.onBeforeRender(D,E,W,b),C=He.get(E,O.length),C.init(W),O.push(C),je.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),$.setFromProjectionMatrix(je,$n,W.reversedDepth),we=this.localClippingEnabled,fe=Be.init(this.clippingPlanes,we),P=be.get(E,A.length),P.init(),A.push(P),Ce.enabled===!0&&Ce.isPresenting===!0){const Ee=D.xr.getDepthSensingMesh();Ee!==null&&mr(Ee,W,-1/0,D.sortObjects)}mr(E,W,0,D.sortObjects),P.finish(),D.sortObjects===!0&&P.sort(We,Qe),F=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,F&&ye.addToRenderList(P,E),this.info.render.frame++,fe===!0&&Be.beginShadows();const ne=C.state.shadowsArray;pe.render(ne,E,W),fe===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=P.opaque,X=P.transmissive;if(C.setupLights(),W.isArrayCamera){const Ee=W.cameras;if(X.length>0)for(let Pe=0,ke=Ee.length;Pe<ke;Pe++){const ze=Ee[Pe];vn(re,X,E,ze)}F&&ye.render(E);for(let Pe=0,ke=Ee.length;Pe<ke;Pe++){const ze=Ee[Pe];Ut(P,E,ze,ze.viewport)}}else X.length>0&&vn(re,X,E,W),F&&ye.render(E),Ut(P,E,W);b!==null&&w===0&&(ge.updateMultisampleRenderTarget(b),ge.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(D,E,W),V.resetDefaultState(),z=-1,j=null,O.pop(),O.length>0?(C=O[O.length-1],fe===!0&&Be.setGlobalState(D.clippingPlanes,C.state.camera)):C=null,A.pop(),A.length>0?P=A[A.length-1]:P=null};function mr(E,W,ne,re){if(E.visible===!1)return;if(E.layers.test(W.layers)){if(E.isGroup)ne=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(W);else if(E.isLight)C.pushLight(E),E.castShadow&&C.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$.intersectsSprite(E)){re&&et.setFromMatrixPosition(E.matrixWorld).applyMatrix4(je);const Pe=ae.update(E),ke=E.material;ke.visible&&P.push(E,Pe,ke,ne,et.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$.intersectsObject(E))){const Pe=ae.update(E),ke=E.material;if(re&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),et.copy(E.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),et.copy(Pe.boundingSphere.center)),et.applyMatrix4(E.matrixWorld).applyMatrix4(je)),Array.isArray(ke)){const ze=Pe.groups;for(let Ye=0,Je=ze.length;Ye<Je;Ye++){const Ke=ze[Ye],ct=ke[Ke.materialIndex];ct&&ct.visible&&P.push(E,Pe,ct,ne,et.z,Ke)}}else ke.visible&&P.push(E,Pe,ke,ne,et.z,null)}}const Ee=E.children;for(let Pe=0,ke=Ee.length;Pe<ke;Pe++)mr(Ee[Pe],W,ne,re)}function Ut(E,W,ne,re){const{opaque:X,transmissive:Ee,transparent:Pe}=E;C.setupLightsView(ne),fe===!0&&Be.setGlobalState(D.clippingPlanes,ne),re&&ie.viewport(ee.copy(re)),X.length>0&&wi(X,W,ne),Ee.length>0&&wi(Ee,W,ne),Pe.length>0&&wi(Pe,W,ne),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function vn(E,W,ne,re){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;C.state.transmissionRenderTarget[re.id]===void 0&&(C.state.transmissionRenderTarget[re.id]=new hr(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?es:ei,minFilter:lr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const Ee=C.state.transmissionRenderTarget[re.id],Pe=re.viewport||ee;Ee.setSize(Pe.z*D.transmissionResolutionScale,Pe.w*D.transmissionResolutionScale);const ke=D.getRenderTarget(),ze=D.getActiveCubeFace(),Ye=D.getActiveMipmapLevel();D.setRenderTarget(Ee),D.getClearColor(le),he=D.getClearAlpha(),he<1&&D.setClearColor(16777215,.5),D.clear(),F&&ye.render(ne);const Je=D.toneMapping;D.toneMapping=ki;const Ke=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),C.setupLightsView(re),fe===!0&&Be.setGlobalState(D.clippingPlanes,re),wi(E,ne,re),ge.updateMultisampleRenderTarget(Ee),ge.updateRenderTargetMipmap(Ee),oe.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let xt=0,It=W.length;xt<It;xt++){const Ft=W[xt],{object:Mt,geometry:$e,material:Rt,group:pt}=Ft;if(Rt.side===mi&&Mt.layers.test(re.layers)){const Et=Rt.side;Rt.side=xn,Rt.needsUpdate=!0,qs(Mt,ne,re,$e,Rt,pt),Rt.side=Et,Rt.needsUpdate=!0,ct=!0}}ct===!0&&(ge.updateMultisampleRenderTarget(Ee),ge.updateRenderTargetMipmap(Ee))}D.setRenderTarget(ke,ze,Ye),D.setClearColor(le,he),Ke!==void 0&&(re.viewport=Ke),D.toneMapping=Je}function wi(E,W,ne){const re=W.isScene===!0?W.overrideMaterial:null;for(let X=0,Ee=E.length;X<Ee;X++){const Pe=E[X],{object:ke,geometry:ze,group:Ye}=Pe;let Je=Pe.material;Je.allowOverride===!0&&re!==null&&(Je=re),ke.layers.test(ne.layers)&&qs(ke,W,ne,ze,Je,Ye)}}function qs(E,W,ne,re,X,Ee){E.onBeforeRender(D,W,ne,re,X,Ee),E.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(D,W,ne,re,E,Ee),X.transparent===!0&&X.side===mi&&X.forceSinglePass===!1?(X.side=xn,X.needsUpdate=!0,D.renderBufferDirect(ne,W,re,X,E,Ee),X.side=ji,X.needsUpdate=!0,D.renderBufferDirect(ne,W,re,X,E,Ee),X.side=mi):D.renderBufferDirect(ne,W,re,X,E,Ee),E.onAfterRender(D,W,ne,re,X,Ee)}function ni(E,W,ne){W.isScene!==!0&&(W=N);const re=Z.get(E),X=C.state.lights,Ee=C.state.shadowsArray,Pe=X.state.version,ke=K.getParameters(E,X.state,Ee,W,ne),ze=K.getProgramCacheKey(ke);let Ye=re.programs;re.environment=E.isMeshStandardMaterial?W.environment:null,re.fog=W.fog,re.envMap=(E.isMeshStandardMaterial?v:y).get(E.envMap||re.environment),re.envMapRotation=re.environment!==null&&E.envMap===null?W.environmentRotation:E.envMapRotation,Ye===void 0&&(E.addEventListener("dispose",tt),Ye=new Map,re.programs=Ye);let Je=Ye.get(ze);if(Je!==void 0){if(re.currentProgram===Je&&re.lightsStateVersion===Pe)return qi(E,ke),Je}else ke.uniforms=K.getUniforms(E),E.onBeforeCompile(ke,D),Je=K.acquireProgram(ke,ze),Ye.set(ze,Je),re.uniforms=ke.uniforms;const Ke=re.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ke.clippingPlanes=Be.uniform),qi(E,ke),re.needsLights=rs(E),re.lightsStateVersion=Pe,re.needsLights&&(Ke.ambientLightColor.value=X.state.ambient,Ke.lightProbe.value=X.state.probe,Ke.directionalLights.value=X.state.directional,Ke.directionalLightShadows.value=X.state.directionalShadow,Ke.spotLights.value=X.state.spot,Ke.spotLightShadows.value=X.state.spotShadow,Ke.rectAreaLights.value=X.state.rectArea,Ke.ltc_1.value=X.state.rectAreaLTC1,Ke.ltc_2.value=X.state.rectAreaLTC2,Ke.pointLights.value=X.state.point,Ke.pointLightShadows.value=X.state.pointShadow,Ke.hemisphereLights.value=X.state.hemi,Ke.directionalShadowMap.value=X.state.directionalShadowMap,Ke.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ke.spotShadowMap.value=X.state.spotShadowMap,Ke.spotLightMatrix.value=X.state.spotLightMatrix,Ke.spotLightMap.value=X.state.spotLightMap,Ke.pointShadowMap.value=X.state.pointShadowMap,Ke.pointShadowMatrix.value=X.state.pointShadowMatrix),re.currentProgram=Je,re.uniformsList=null,Je}function xr(E){if(E.uniformsList===null){const W=E.currentProgram.getUniforms();E.uniformsList=Lo.seqWithValue(W.seq,E.uniforms)}return E.uniformsList}function qi(E,W){const ne=Z.get(E);ne.outputColorSpace=W.outputColorSpace,ne.batching=W.batching,ne.batchingColor=W.batchingColor,ne.instancing=W.instancing,ne.instancingColor=W.instancingColor,ne.instancingMorph=W.instancingMorph,ne.skinning=W.skinning,ne.morphTargets=W.morphTargets,ne.morphNormals=W.morphNormals,ne.morphColors=W.morphColors,ne.morphTargetsCount=W.morphTargetsCount,ne.numClippingPlanes=W.numClippingPlanes,ne.numIntersection=W.numClipIntersection,ne.vertexAlphas=W.vertexAlphas,ne.vertexTangents=W.vertexTangents,ne.toneMapping=W.toneMapping}function Ki(E,W,ne,re,X){W.isScene!==!0&&(W=N),ge.resetTextureUnits();const Ee=W.fog,Pe=re.isMeshStandardMaterial?W.environment:null,ke=b===null?D.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Jr,ze=(re.isMeshStandardMaterial?v:y).get(re.envMap||Pe),Ye=re.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Je=!!ne.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ke=!!ne.morphAttributes.position,ct=!!ne.morphAttributes.normal,xt=!!ne.morphAttributes.color;let It=ki;re.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(It=D.toneMapping);const Ft=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Mt=Ft!==void 0?Ft.length:0,$e=Z.get(re),Rt=C.state.lights;if(fe===!0&&(we===!0||E!==j)){const Yt=E===j&&re.id===z;Be.setState(re,E,Yt)}let pt=!1;re.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Rt.state.version||$e.outputColorSpace!==ke||X.isBatchedMesh&&$e.batching===!1||!X.isBatchedMesh&&$e.batching===!0||X.isBatchedMesh&&$e.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&$e.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&$e.instancing===!1||!X.isInstancedMesh&&$e.instancing===!0||X.isSkinnedMesh&&$e.skinning===!1||!X.isSkinnedMesh&&$e.skinning===!0||X.isInstancedMesh&&$e.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&$e.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&$e.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&$e.instancingMorph===!1&&X.morphTexture!==null||$e.envMap!==ze||re.fog===!0&&$e.fog!==Ee||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Be.numPlanes||$e.numIntersection!==Be.numIntersection)||$e.vertexAlphas!==Ye||$e.vertexTangents!==Je||$e.morphTargets!==Ke||$e.morphNormals!==ct||$e.morphColors!==xt||$e.toneMapping!==It||$e.morphTargetsCount!==Mt)&&(pt=!0):(pt=!0,$e.__version=re.version);let Et=$e.currentProgram;pt===!0&&(Et=ni(re,W,X));let ii=!1,Zt=!1,Wn=!1;const Ct=Et.getUniforms(),jt=$e.uniforms;if(ie.useProgram(Et.program)&&(ii=!0,Zt=!0,Wn=!0),re.id!==z&&(z=re.id,Zt=!0),ii||j!==E){ie.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ct.setValue(R,"projectionMatrix",E.projectionMatrix),Ct.setValue(R,"viewMatrix",E.matrixWorldInverse);const qt=Ct.map.cameraPosition;qt!==void 0&&qt.setValue(R,Ue.setFromMatrixPosition(E.matrixWorld)),xe.logarithmicDepthBuffer&&Ct.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Ct.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),j!==E&&(j=E,Zt=!0,Wn=!0)}if(X.isSkinnedMesh){Ct.setOptional(R,X,"bindMatrix"),Ct.setOptional(R,X,"bindMatrixInverse");const Yt=X.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Ct.setValue(R,"boneTexture",Yt.boneTexture,ge))}X.isBatchedMesh&&(Ct.setOptional(R,X,"batchingTexture"),Ct.setValue(R,"batchingTexture",X._matricesTexture,ge),Ct.setOptional(R,X,"batchingIdTexture"),Ct.setValue(R,"batchingIdTexture",X._indirectTexture,ge),Ct.setOptional(R,X,"batchingColorTexture"),X._colorsTexture!==null&&Ct.setValue(R,"batchingColorTexture",X._colorsTexture,ge));const dn=ne.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&Ge.update(X,ne,Et),(Zt||$e.receiveShadow!==X.receiveShadow)&&($e.receiveShadow=X.receiveShadow,Ct.setValue(R,"receiveShadow",X.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(jt.envMap.value=ze,jt.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&W.environment!==null&&(jt.envMapIntensity.value=W.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=jS()),Zt&&(Ct.setValue(R,"toneMappingExposure",D.toneMappingExposure),$e.needsLights&&Ks(jt,Wn),Ee&&re.fog===!0&&Ne.refreshFogUniforms(jt,Ee),Ne.refreshMaterialUniforms(jt,re,Te,_e,C.state.transmissionRenderTarget[E.id]),Lo.upload(R,xr($e),jt,ge)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Lo.upload(R,xr($e),jt,ge),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Ct.setValue(R,"center",X.center),Ct.setValue(R,"modelViewMatrix",X.modelViewMatrix),Ct.setValue(R,"normalMatrix",X.normalMatrix),Ct.setValue(R,"modelMatrix",X.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Yt=re.uniformsGroups;for(let qt=0,gr=Yt.length;qt<gr;qt++){const Rn=Yt[qt];De.update(Rn,Et),De.bind(Rn,Et)}}return Et}function Ks(E,W){E.ambientLightColor.needsUpdate=W,E.lightProbe.needsUpdate=W,E.directionalLights.needsUpdate=W,E.directionalLightShadows.needsUpdate=W,E.pointLights.needsUpdate=W,E.pointLightShadows.needsUpdate=W,E.spotLights.needsUpdate=W,E.spotLightShadows.needsUpdate=W,E.rectAreaLights.needsUpdate=W,E.hemisphereLights.needsUpdate=W}function rs(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,W,ne){const re=Z.get(E);re.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),Z.get(E.texture).__webglTexture=W,Z.get(E.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ne,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,W){const ne=Z.get(E);ne.__webglFramebuffer=W,ne.__useDefaultFramebuffer=W===void 0};const ss=R.createFramebuffer();this.setRenderTarget=function(E,W=0,ne=0){b=E,k=W,w=ne;let re=!0,X=null,Ee=!1,Pe=!1;if(E){const ze=Z.get(E);if(ze.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(R.FRAMEBUFFER,null),re=!1;else if(ze.__webglFramebuffer===void 0)ge.setupRenderTarget(E);else if(ze.__hasExternalTextures)ge.rebindTextures(E,Z.get(E.texture).__webglTexture,Z.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ke=E.depthTexture;if(ze.__boundDepthTexture!==Ke){if(Ke!==null&&Z.has(Ke)&&(E.width!==Ke.image.width||E.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(E)}}const Ye=E.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Pe=!0);const Je=Z.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Je[W])?X=Je[W][ne]:X=Je[W],Ee=!0):E.samples>0&&ge.useMultisampledRTT(E)===!1?X=Z.get(E).__webglMultisampledFramebuffer:Array.isArray(Je)?X=Je[ne]:X=Je,ee.copy(E.viewport),ue.copy(E.scissor),ce=E.scissorTest}else ee.copy(ft).multiplyScalar(Te).floor(),ue.copy(Ae).multiplyScalar(Te).floor(),ce=ve;if(ne!==0&&(X=ss),ie.bindFramebuffer(R.FRAMEBUFFER,X)&&re&&ie.drawBuffers(E,X),ie.viewport(ee),ie.scissor(ue),ie.setScissorTest(ce),Ee){const ze=Z.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+W,ze.__webglTexture,ne)}else if(Pe){const ze=W;for(let Ye=0;Ye<E.textures.length;Ye++){const Je=Z.get(E.textures[Ye]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ye,Je.__webglTexture,ne,ze)}}else if(E!==null&&ne!==0){const ze=Z.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ze.__webglTexture,ne)}z=-1},this.readRenderTargetPixels=function(E,W,ne,re,X,Ee,Pe,ke=0){if(!(E&&E.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(ze=ze[Pe]),ze){ie.bindFramebuffer(R.FRAMEBUFFER,ze);try{const Ye=E.textures[ke],Je=Ye.format,Ke=Ye.type;if(!xe.textureFormatReadable(Je)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(Ke)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=E.width-re&&ne>=0&&ne<=E.height-X&&(E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+ke),R.readPixels(W,ne,re,X,Ze.convert(Je),Ze.convert(Ke),Ee))}finally{const Ye=b!==null?Z.get(b).__webglFramebuffer:null;ie.bindFramebuffer(R.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(E,W,ne,re,X,Ee,Pe,ke=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(ze=ze[Pe]),ze)if(W>=0&&W<=E.width-re&&ne>=0&&ne<=E.height-X){ie.bindFramebuffer(R.FRAMEBUFFER,ze);const Ye=E.textures[ke],Je=Ye.format,Ke=Ye.type;if(!xe.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ct),R.bufferData(R.PIXEL_PACK_BUFFER,Ee.byteLength,R.STREAM_READ),E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+ke),R.readPixels(W,ne,re,X,Ze.convert(Je),Ze.convert(Ke),0);const xt=b!==null?Z.get(b).__webglFramebuffer:null;ie.bindFramebuffer(R.FRAMEBUFFER,xt);const It=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await sx(R,It,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ct),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Ee),R.deleteBuffer(ct),R.deleteSync(It),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,W=null,ne=0){const re=Math.pow(2,-ne),X=Math.floor(E.image.width*re),Ee=Math.floor(E.image.height*re),Pe=W!==null?W.x:0,ke=W!==null?W.y:0;ge.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,ne,0,0,Pe,ke,X,Ee),ie.unbindTexture()};const $s=R.createFramebuffer(),Mn=R.createFramebuffer();this.copyTextureToTexture=function(E,W,ne=null,re=null,X=0,Ee=null){Ee===null&&(X!==0?(Vs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=X,X=0):Ee=0);let Pe,ke,ze,Ye,Je,Ke,ct,xt,It;const Ft=E.isCompressedTexture?E.mipmaps[Ee]:E.image;if(ne!==null)Pe=ne.max.x-ne.min.x,ke=ne.max.y-ne.min.y,ze=ne.isBox3?ne.max.z-ne.min.z:1,Ye=ne.min.x,Je=ne.min.y,Ke=ne.isBox3?ne.min.z:0;else{const dn=Math.pow(2,-X);Pe=Math.floor(Ft.width*dn),ke=Math.floor(Ft.height*dn),E.isDataArrayTexture?ze=Ft.depth:E.isData3DTexture?ze=Math.floor(Ft.depth*dn):ze=1,Ye=0,Je=0,Ke=0}re!==null?(ct=re.x,xt=re.y,It=re.z):(ct=0,xt=0,It=0);const Mt=Ze.convert(W.format),$e=Ze.convert(W.type);let Rt;W.isData3DTexture?(ge.setTexture3D(W,0),Rt=R.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ge.setTexture2DArray(W,0),Rt=R.TEXTURE_2D_ARRAY):(ge.setTexture2D(W,0),Rt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,W.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,W.unpackAlignment);const pt=R.getParameter(R.UNPACK_ROW_LENGTH),Et=R.getParameter(R.UNPACK_IMAGE_HEIGHT),ii=R.getParameter(R.UNPACK_SKIP_PIXELS),Zt=R.getParameter(R.UNPACK_SKIP_ROWS),Wn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ft.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ft.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ye),R.pixelStorei(R.UNPACK_SKIP_ROWS,Je),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ke);const Ct=E.isDataArrayTexture||E.isData3DTexture,jt=W.isDataArrayTexture||W.isData3DTexture;if(E.isDepthTexture){const dn=Z.get(E),Yt=Z.get(W),qt=Z.get(dn.__renderTarget),gr=Z.get(Yt.__renderTarget);ie.bindFramebuffer(R.READ_FRAMEBUFFER,qt.__webglFramebuffer),ie.bindFramebuffer(R.DRAW_FRAMEBUFFER,gr.__webglFramebuffer);for(let Rn=0;Rn<ze;Rn++)Ct&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Z.get(E).__webglTexture,X,Ke+Rn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Z.get(W).__webglTexture,Ee,It+Rn)),R.blitFramebuffer(Ye,Je,Pe,ke,ct,xt,Pe,ke,R.DEPTH_BUFFER_BIT,R.NEAREST);ie.bindFramebuffer(R.READ_FRAMEBUFFER,null),ie.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(X!==0||E.isRenderTargetTexture||Z.has(E)){const dn=Z.get(E),Yt=Z.get(W);ie.bindFramebuffer(R.READ_FRAMEBUFFER,$s),ie.bindFramebuffer(R.DRAW_FRAMEBUFFER,Mn);for(let qt=0;qt<ze;qt++)Ct?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,dn.__webglTexture,X,Ke+qt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,dn.__webglTexture,X),jt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Yt.__webglTexture,Ee,It+qt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Yt.__webglTexture,Ee),X!==0?R.blitFramebuffer(Ye,Je,Pe,ke,ct,xt,Pe,ke,R.COLOR_BUFFER_BIT,R.NEAREST):jt?R.copyTexSubImage3D(Rt,Ee,ct,xt,It+qt,Ye,Je,Pe,ke):R.copyTexSubImage2D(Rt,Ee,ct,xt,Ye,Je,Pe,ke);ie.bindFramebuffer(R.READ_FRAMEBUFFER,null),ie.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else jt?E.isDataTexture||E.isData3DTexture?R.texSubImage3D(Rt,Ee,ct,xt,It,Pe,ke,ze,Mt,$e,Ft.data):W.isCompressedArrayTexture?R.compressedTexSubImage3D(Rt,Ee,ct,xt,It,Pe,ke,ze,Mt,Ft.data):R.texSubImage3D(Rt,Ee,ct,xt,It,Pe,ke,ze,Mt,$e,Ft):E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Ee,ct,xt,Pe,ke,Mt,$e,Ft.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Ee,ct,xt,Ft.width,Ft.height,Mt,Ft.data):R.texSubImage2D(R.TEXTURE_2D,Ee,ct,xt,Pe,ke,Mt,$e,Ft);R.pixelStorei(R.UNPACK_ROW_LENGTH,pt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Et),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ii),R.pixelStorei(R.UNPACK_SKIP_ROWS,Zt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Wn),Ee===0&&W.generateMipmaps&&R.generateMipmap(Rt),ie.unbindTexture()},this.initRenderTarget=function(E){Z.get(E).__webglFramebuffer===void 0&&ge.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ge.setTextureCube(E,0):E.isData3DTexture?ge.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ge.setTexture2DArray(E,0):ge.setTexture2D(E,0),ie.unbindTexture()},this.resetState=function(){k=0,w=0,b=null,ie.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}var Cf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ja={},Pf;function qS(){return Pf||(Pf=1,(function(){var n;function e(o){var f=0;return function(){return f<o.length?{done:!1,value:o[f++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,f,m){return o==Array.prototype||o==Object.prototype||(o[f]=m.value),o};function i(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cf=="object"&&Cf];for(var f=0;f<o.length;++f){var m=o[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=i(this);function s(o,f){if(f)e:{var m=r;o=o.split(".");for(var M=0;M<o.length-1;M++){var L=o[M];if(!(L in m))break e;m=m[L]}o=o[o.length-1],M=m[o],f=f(M),f!=M&&f!=null&&t(m,o,{configurable:!0,writable:!0,value:f})}}s("Symbol",function(o){function f(I){if(this instanceof f)throw new TypeError("Symbol is not a constructor");return new m(M+(I||"")+"_"+L++,I)}function m(I,U){this.h=I,t(this,"description",{configurable:!0,writable:!0,value:U})}if(o)return o;m.prototype.toString=function(){return this.h};var M="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",L=0;return f}),s("Symbol.iterator",function(o){if(o)return o;o=Symbol("Symbol.iterator");for(var f="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),m=0;m<f.length;m++){var M=r[f[m]];typeof M=="function"&&typeof M.prototype[o]!="function"&&t(M.prototype,o,{configurable:!0,writable:!0,value:function(){return a(e(this))}})}return o});function a(o){return o={next:o},o[Symbol.iterator]=function(){return this},o}function l(o){var f=typeof Symbol<"u"&&Symbol.iterator&&o[Symbol.iterator];return f?f.call(o):{next:e(o)}}function c(o){if(!(o instanceof Array)){o=l(o);for(var f,m=[];!(f=o.next()).done;)m.push(f.value);o=m}return o}var u=typeof Object.assign=="function"?Object.assign:function(o,f){for(var m=1;m<arguments.length;m++){var M=arguments[m];if(M)for(var L in M)Object.prototype.hasOwnProperty.call(M,L)&&(o[L]=M[L])}return o};s("Object.assign",function(o){return o||u});var h=typeof Object.create=="function"?Object.create:function(o){function f(){}return f.prototype=o,new f},d;if(typeof Object.setPrototypeOf=="function")d=Object.setPrototypeOf;else{var x;e:{var g={a:!0},S={};try{S.__proto__=g,x=S.a;break e}catch{}x=!1}d=x?function(o,f){if(o.__proto__=f,o.__proto__!==f)throw new TypeError(o+" is not extensible");return o}:null}var T=d;function _(o,f){if(o.prototype=h(f.prototype),o.prototype.constructor=o,T)T(o,f);else for(var m in f)if(m!="prototype")if(Object.defineProperties){var M=Object.getOwnPropertyDescriptor(f,m);M&&Object.defineProperty(o,m,M)}else o[m]=f[m];o.ya=f.prototype}function p(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function P(o){if(o.m)throw new TypeError("Generator is already running");o.m=!0}p.prototype.u=function(o){this.i=o};function C(o,f){o.l={ma:f,na:!0},o.h=o.s||o.v}p.prototype.return=function(o){this.l={return:o},this.h=this.v};function A(o,f,m){return o.h=m,{value:f}}function O(o){this.h=new p,this.i=o}function D(o,f){P(o.h);var m=o.h.j;return m?B(o,"return"in m?m.return:function(M){return{value:M,done:!0}},f,o.h.return):(o.h.return(f),k(o))}function B(o,f,m,M){try{var L=f.call(o.h.j,m);if(!(L instanceof Object))throw new TypeError("Iterator result "+L+" is not an object");if(!L.done)return o.h.m=!1,L;var I=L.value}catch(U){return o.h.j=null,C(o.h,U),k(o)}return o.h.j=null,M.call(o.h,I),k(o)}function k(o){for(;o.h.h;)try{var f=o.i(o.h);if(f)return o.h.m=!1,{value:f.value,done:!1}}catch(m){o.h.i=void 0,C(o.h,m)}if(o.h.m=!1,o.h.l){if(f=o.h.l,o.h.l=null,f.na)throw f.ma;return{value:f.return,done:!0}}return{value:void 0,done:!0}}function w(o){this.next=function(f){return P(o.h),o.h.j?f=B(o,o.h.j.next,f,o.h.u):(o.h.u(f),f=k(o)),f},this.throw=function(f){return P(o.h),o.h.j?f=B(o,o.h.j.throw,f,o.h.u):(C(o.h,f),f=k(o)),f},this.return=function(f){return D(o,f)},this[Symbol.iterator]=function(){return this}}function b(o){function f(M){return o.next(M)}function m(M){return o.throw(M)}return new Promise(function(M,L){function I(U){U.done?M(U.value):Promise.resolve(U.value).then(f,m).then(I,L)}I(o.next())})}function z(o){return b(new w(new O(o)))}s("Promise",function(o){function f(U){this.i=0,this.j=void 0,this.h=[],this.u=!1;var G=this.l();try{U(G.resolve,G.reject)}catch(te){G.reject(te)}}function m(){this.h=null}function M(U){return U instanceof f?U:new f(function(G){G(U)})}if(o)return o;m.prototype.i=function(U){if(this.h==null){this.h=[];var G=this;this.j(function(){G.m()})}this.h.push(U)};var L=r.setTimeout;m.prototype.j=function(U){L(U,0)},m.prototype.m=function(){for(;this.h&&this.h.length;){var U=this.h;this.h=[];for(var G=0;G<U.length;++G){var te=U[G];U[G]=null;try{te()}catch(Me){this.l(Me)}}}this.h=null},m.prototype.l=function(U){this.j(function(){throw U})},f.prototype.l=function(){function U(Me){return function(Le){te||(te=!0,Me.call(G,Le))}}var G=this,te=!1;return{resolve:U(this.I),reject:U(this.m)}},f.prototype.I=function(U){if(U===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(U instanceof f)this.L(U);else{e:switch(typeof U){case"object":var G=U!=null;break e;case"function":G=!0;break e;default:G=!1}G?this.F(U):this.s(U)}},f.prototype.F=function(U){var G=void 0;try{G=U.then}catch(te){this.m(te);return}typeof G=="function"?this.M(G,U):this.s(U)},f.prototype.m=function(U){this.v(2,U)},f.prototype.s=function(U){this.v(1,U)},f.prototype.v=function(U,G){if(this.i!=0)throw Error("Cannot settle("+U+", "+G+"): Promise already settled in state"+this.i);this.i=U,this.j=G,this.i===2&&this.K(),this.H()},f.prototype.K=function(){var U=this;L(function(){if(U.D()){var G=r.console;typeof G<"u"&&G.error(U.j)}},1)},f.prototype.D=function(){if(this.u)return!1;var U=r.CustomEvent,G=r.Event,te=r.dispatchEvent;return typeof te>"u"?!0:(typeof U=="function"?U=new U("unhandledrejection",{cancelable:!0}):typeof G=="function"?U=new G("unhandledrejection",{cancelable:!0}):(U=r.document.createEvent("CustomEvent"),U.initCustomEvent("unhandledrejection",!1,!0,U)),U.promise=this,U.reason=this.j,te(U))},f.prototype.H=function(){if(this.h!=null){for(var U=0;U<this.h.length;++U)I.i(this.h[U]);this.h=null}};var I=new m;return f.prototype.L=function(U){var G=this.l();U.T(G.resolve,G.reject)},f.prototype.M=function(U,G){var te=this.l();try{U.call(G,te.resolve,te.reject)}catch(Me){te.reject(Me)}},f.prototype.then=function(U,G){function te(qe,Oe){return typeof qe=="function"?function(it){try{Me(qe(it))}catch(ut){Le(ut)}}:Oe}var Me,Le,nt=new f(function(qe,Oe){Me=qe,Le=Oe});return this.T(te(U,Me),te(G,Le)),nt},f.prototype.catch=function(U){return this.then(void 0,U)},f.prototype.T=function(U,G){function te(){switch(Me.i){case 1:U(Me.j);break;case 2:G(Me.j);break;default:throw Error("Unexpected state: "+Me.i)}}var Me=this;this.h==null?I.i(te):this.h.push(te),this.u=!0},f.resolve=M,f.reject=function(U){return new f(function(G,te){te(U)})},f.race=function(U){return new f(function(G,te){for(var Me=l(U),Le=Me.next();!Le.done;Le=Me.next())M(Le.value).T(G,te)})},f.all=function(U){var G=l(U),te=G.next();return te.done?M([]):new f(function(Me,Le){function nt(it){return function(ut){qe[it]=ut,Oe--,Oe==0&&Me(qe)}}var qe=[],Oe=0;do qe.push(void 0),Oe++,M(te.value).T(nt(qe.length-1),Le),te=G.next();while(!te.done)})},f});function j(o,f){o instanceof String&&(o+="");var m=0,M=!1,L={next:function(){if(!M&&m<o.length){var I=m++;return{value:f(I,o[I]),done:!1}}return M=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.keys",function(o){return o||function(){return j(this,function(f){return f})}}),s("Array.prototype.fill",function(o){return o||function(f,m,M){var L=this.length||0;for(0>m&&(m=Math.max(0,L+m)),(M==null||M>L)&&(M=L),M=Number(M),0>M&&(M=Math.max(0,L+M)),m=Number(m||0);m<M;m++)this[m]=f;return this}});function ee(o){return o||Array.prototype.fill}s("Int8Array.prototype.fill",ee),s("Uint8Array.prototype.fill",ee),s("Uint8ClampedArray.prototype.fill",ee),s("Int16Array.prototype.fill",ee),s("Uint16Array.prototype.fill",ee),s("Int32Array.prototype.fill",ee),s("Uint32Array.prototype.fill",ee),s("Float32Array.prototype.fill",ee),s("Float64Array.prototype.fill",ee),s("Object.is",function(o){return o||function(f,m){return f===m?f!==0||1/f===1/m:f!==f&&m!==m}}),s("Array.prototype.includes",function(o){return o||function(f,m){var M=this;M instanceof String&&(M=String(M));var L=M.length;for(m=m||0,0>m&&(m=Math.max(m+L,0));m<L;m++){var I=M[m];if(I===f||Object.is(I,f))return!0}return!1}}),s("String.prototype.includes",function(o){return o||function(f,m){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(f instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(f,m||0)!==-1}});var ue=this||self;function ce(o,f){o=o.split(".");var m=ue;o[0]in m||typeof m.execScript>"u"||m.execScript("var "+o[0]);for(var M;o.length&&(M=o.shift());)o.length||f===void 0?m[M]&&m[M]!==Object.prototype[M]?m=m[M]:m=m[M]={}:m[M]=f}function le(o){var f;e:{if((f=ue.navigator)&&(f=f.userAgent))break e;f=""}return f.indexOf(o)!=-1}var he=Array.prototype.map?function(o,f){return Array.prototype.map.call(o,f,void 0)}:function(o,f){for(var m=o.length,M=Array(m),L=typeof o=="string"?o.split(""):o,I=0;I<m;I++)I in L&&(M[I]=f.call(void 0,L[I],I,o));return M},J={},_e=null;function Te(o){var f=o.length,m=3*f/4;m%3?m=Math.floor(m):"=.".indexOf(o[f-1])!=-1&&(m="=.".indexOf(o[f-2])!=-1?m-2:m-1);var M=new Uint8Array(m),L=0;return We(o,function(I){M[L++]=I}),L!==m?M.subarray(0,L):M}function We(o,f){function m(te){for(;M<o.length;){var Me=o.charAt(M++),Le=_e[Me];if(Le!=null)return Le;if(!/^[\s\xa0]*$/.test(Me))throw Error("Unknown base64 encoding at char: "+Me)}return te}Qe();for(var M=0;;){var L=m(-1),I=m(0),U=m(64),G=m(64);if(G===64&&L===-1)break;f(L<<2|I>>4),U!=64&&(f(I<<4&240|U>>2),G!=64&&f(U<<6&192|G))}}function Qe(){if(!_e){_e={};for(var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),f=["+/=","+/","-_=","-_.","-_"],m=0;5>m;m++){var M=o.concat(f[m].split(""));J[m]=M;for(var L=0;L<M.length;L++){var I=M[L];_e[I]===void 0&&(_e[I]=L)}}}}var ft=typeof Uint8Array<"u",Ae=!(le("Trident")||le("MSIE"))&&typeof ue.btoa=="function";function ve(o){if(!Ae){var f;f===void 0&&(f=0),Qe(),f=J[f];for(var m=Array(Math.floor(o.length/3)),M=f[64]||"",L=0,I=0;L<o.length-2;L+=3){var U=o[L],G=o[L+1],te=o[L+2],Me=f[U>>2];U=f[(U&3)<<4|G>>4],G=f[(G&15)<<2|te>>6],te=f[te&63],m[I++]=Me+U+G+te}switch(Me=0,te=M,o.length-L){case 2:Me=o[L+1],te=f[(Me&15)<<2]||M;case 1:o=o[L],m[I]=f[o>>2]+f[(o&3)<<4|Me>>4]+te+M}return m.join("")}for(f="";10240<o.length;)f+=String.fromCharCode.apply(null,o.subarray(0,10240)),o=o.subarray(10240);return f+=String.fromCharCode.apply(null,o),btoa(f)}var $=RegExp("[-_.]","g");function fe(o){switch(o){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function we(o){if(!Ae)return Te(o);$.test(o)&&(o=o.replace($,fe)),o=atob(o);for(var f=new Uint8Array(o.length),m=0;m<o.length;m++)f[m]=o.charCodeAt(m);return f}var je;function Ue(){return je||(je=new Uint8Array(0))}var et={},N=typeof Uint8Array.prototype.slice=="function",F=0,Y=0;function R(o){var f=0>o;o=Math.abs(o);var m=o>>>0;o=Math.floor((o-m)/4294967296),f&&(m=l(oe(m,o)),f=m.next().value,o=m.next().value,m=f),F=m>>>0,Y=o>>>0}var se=typeof BigInt=="function";function oe(o,f){return f=~f,o?o=~o+1:f+=1,[o,f]}function xe(o,f){this.i=o>>>0,this.h=f>>>0}function ie(o){if(!o)return me||(me=new xe(0,0));if(!/^-?\d+$/.test(o))return null;if(16>o.length)R(Number(o));else if(se)o=BigInt(o),F=Number(o&BigInt(4294967295))>>>0,Y=Number(o>>BigInt(32)&BigInt(4294967295));else{var f=+(o[0]==="-");Y=F=0;for(var m=o.length,M=f,L=(m-f)%6+f;L<=m;M=L,L+=6)M=Number(o.slice(M,L)),Y*=1e6,F=1e6*F+M,4294967296<=F&&(Y+=F/4294967296|0,F%=4294967296);f&&(f=l(oe(F,Y)),o=f.next().value,f=f.next().value,F=o,Y=f)}return new xe(F,Y)}var me;function Z(o,f){return Error("Invalid wire type: "+o+" (at position "+f+")")}function ge(){return Error("Failed to read varint, encoding is invalid.")}function y(o,f){return Error("Tried to read past the end of the data "+f+" > "+o)}function v(){throw Error("Invalid UTF8")}function H(o,f){return f=String.fromCharCode.apply(null,f),o==null?f:o+f}var Q=void 0,ae,K=typeof TextDecoder<"u",Ne,be=typeof TextEncoder<"u",He;function Be(o){if(o!==et)throw Error("illegal external caller")}function pe(o,f){if(Be(f),this.V=o,o!=null&&o.length===0)throw Error("ByteString should be constructed with non-empty values")}function ye(){return He||(He=new pe(null,et))}function Ge(o){Be(et);var f=o.V;return f=f==null||ft&&f!=null&&f instanceof Uint8Array?f:typeof f=="string"?we(f):null,f==null?f:o.V=f}function Xe(o){if(typeof o=="string")return{buffer:we(o),C:!1};if(Array.isArray(o))return{buffer:new Uint8Array(o),C:!1};if(o.constructor===Uint8Array)return{buffer:o,C:!1};if(o.constructor===ArrayBuffer)return{buffer:new Uint8Array(o),C:!1};if(o.constructor===pe)return{buffer:Ge(o)||Ue(),C:!0};if(o instanceof Uint8Array)return{buffer:new Uint8Array(o.buffer,o.byteOffset,o.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Fe(o,f){this.i=null,this.m=!1,this.h=this.j=this.l=0,Ze(this,o,f)}function Ze(o,f,m){m=m===void 0?{}:m,o.S=m.S===void 0?!1:m.S,f&&(f=Xe(f),o.i=f.buffer,o.m=f.C,o.l=0,o.j=o.i.length,o.h=o.l)}Fe.prototype.reset=function(){this.h=this.l};function V(o,f){if(o.h=f,f>o.j)throw y(o.j,f)}function De(o){var f=o.i,m=o.h,M=f[m++],L=M&127;if(M&128&&(M=f[m++],L|=(M&127)<<7,M&128&&(M=f[m++],L|=(M&127)<<14,M&128&&(M=f[m++],L|=(M&127)<<21,M&128&&(M=f[m++],L|=M<<28,M&128&&f[m++]&128&&f[m++]&128&&f[m++]&128&&f[m++]&128&&f[m++]&128)))))throw ge();return V(o,m),L}function Re(o,f){if(0>f)throw Error("Tried to read a negative byte length: "+f);var m=o.h,M=m+f;if(M>o.j)throw y(f,o.j-m);return o.h=M,m}var Ce=[];function Se(){this.h=[]}Se.prototype.length=function(){return this.h.length},Se.prototype.end=function(){var o=this.h;return this.h=[],o};function de(o,f,m){for(;0<m||127<f;)o.h.push(f&127|128),f=(f>>>7|m<<25)>>>0,m>>>=7;o.h.push(f)}function Ve(o,f){for(;127<f;)o.h.push(f&127|128),f>>>=7;o.h.push(f)}function tt(o,f){if(Ce.length){var m=Ce.pop();Ze(m,o,f),o=m}else o=new Fe(o,f);this.h=o,this.j=this.h.h,this.i=this.l=-1,this.setOptions(f)}tt.prototype.setOptions=function(o){o=o===void 0?{}:o,this.ca=o.ca===void 0?!1:o.ca},tt.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function yt(o){var f=o.h;if(f.h==f.j)return!1;o.j=o.h.h;var m=De(o.h)>>>0;if(f=m>>>3,m&=7,!(0<=m&&5>=m))throw Z(m,o.j);if(1>f)throw Error("Invalid field number: "+f+" (at position "+o.j+")");return o.l=f,o.i=m,!0}function mt(o){switch(o.i){case 0:if(o.i!=0)mt(o);else e:{o=o.h;for(var f=o.h,m=f+10,M=o.i;f<m;)if((M[f++]&128)===0){V(o,f);break e}throw ge()}break;case 1:o=o.h,V(o,o.h+8);break;case 2:o.i!=2?mt(o):(f=De(o.h)>>>0,o=o.h,V(o,o.h+f));break;case 5:o=o.h,V(o,o.h+4);break;case 3:f=o.l;do{if(!yt(o))throw Error("Unmatched start-group tag: stream EOF");if(o.i==4){if(o.l!=f)throw Error("Unmatched end-group tag");break}mt(o)}while(!0);break;default:throw Z(o.i,o.j)}}var sn=[];function _n(){this.j=[],this.i=0,this.h=new Se}function Ai(o,f){f.length!==0&&(o.j.push(f),o.i+=f.length)}function Ys(o,f){if(f=f.R){Ai(o,o.h.end());for(var m=0;m<f.length;m++)Ai(o,Ge(f[m])||Ue())}}var wn=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function on(o,f){return wn?o[wn]|=f:o.A!==void 0?o.A|=f:(Object.defineProperties(o,{A:{value:f,configurable:!0,writable:!0,enumerable:!1}}),f)}function mr(o,f){wn?o[wn]&&(o[wn]&=~f):o.A!==void 0&&(o.A&=~f)}function Ut(o){var f;return wn?f=o[wn]:f=o.A,f??0}function vn(o,f){wn?o[wn]=f:o.A!==void 0?o.A=f:Object.defineProperties(o,{A:{value:f,configurable:!0,writable:!0,enumerable:!1}})}function wi(o){return on(o,1),o}function qs(o,f){vn(f,(o|0)&-51)}function ni(o,f){vn(f,(o|18)&-41)}var xr={};function qi(o){return o!==null&&typeof o=="object"&&!Array.isArray(o)&&o.constructor===Object}var Ki,Ks=[];vn(Ks,23),Ki=Object.freeze(Ks);function rs(o){if(Ut(o.o)&2)throw Error("Cannot mutate an immutable Message")}function ss(o){var f=o.length;(f=f?o[f-1]:void 0)&&qi(f)?f.g=1:(f={},o.push((f.g=1,f)))}function $s(o){var f=o.i+o.G;return o.B||(o.B=o.o[f]={})}function Mn(o,f){return f===-1?null:f>=o.i?o.B?o.B[f]:void 0:o.o[f+o.G]}function E(o,f,m,M){rs(o),W(o,f,m,M)}function W(o,f,m,M){o.j&&(o.j=void 0),f>=o.i||M?$s(o)[f]=m:(o.o[f+o.G]=m,(o=o.B)&&f in o&&delete o[f])}function ne(o,f,m,M){var L=Mn(o,f);Array.isArray(L)||(L=Ki);var I=Ut(L);if(I&1||wi(L),M)I&2||on(L,2),m&1||Object.freeze(L);else{M=!(m&2);var U=I&2;m&1||!U?M&&I&16&&!U&&mr(L,16):(L=wi(Array.prototype.slice.call(L)),W(o,f,L))}return L}function re(o,f){var m=Mn(o,f),M=m==null?m:typeof m=="number"||m==="NaN"||m==="Infinity"||m==="-Infinity"?Number(m):void 0;return M!=null&&M!==m&&W(o,f,M),M}function X(o,f,m,M,L){o.h||(o.h={});var I=o.h[m],U=ne(o,m,3,L);if(!I){var G=U;I=[];var te=!!(Ut(o.o)&16);U=!!(Ut(G)&2);var Me=G;!L&&U&&(G=Array.prototype.slice.call(G));for(var Le=U,nt=0;nt<G.length;nt++){var qe=G[nt],Oe=f,it=!1;if(it=it===void 0?!1:it,qe=Array.isArray(qe)?new Oe(qe):it?new Oe:void 0,qe!==void 0){Oe=qe.o;var ut=it=Ut(Oe);U&&(ut|=2),te&&(ut|=16),ut!=it&&vn(Oe,ut),Oe=ut,Le=Le||!!(2&Oe),I.push(qe)}}return o.h[m]=I,te=Ut(G),f=te|33,f=Le?f&-9:f|8,te!=f&&(Le=G,Object.isFrozen(Le)&&(Le=Array.prototype.slice.call(Le)),vn(Le,f),G=Le),Me!==G&&W(o,m,G),(L||M&&U)&&on(I,2),M&&Object.freeze(I),I}return L||(L=Object.isFrozen(I),M&&!L?Object.freeze(I):!M&&L&&(I=Array.prototype.slice.call(I),o.h[m]=I)),I}function Ee(o,f,m){var M=!!(Ut(o.o)&2);if(f=X(o,f,m,M,M),o=ne(o,m,3,M),!(M||Ut(o)&8)){for(M=0;M<f.length;M++){if(m=f[M],Ut(m.o)&2){var L=pt(m,!1);L.j=m}else L=m;m!==L&&(f[M]=L,o[M]=L.o)}on(o,8)}return f}function Pe(o,f,m){if(m!=null&&typeof m!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof m+": "+m);E(o,f,m)}function ke(o,f,m,M,L){rs(o);var I=X(o,m,f,!1,!1);return m=M??new m,o=ne(o,f,2,!1),L!=null?(I.splice(L,0,m),o.splice(L,0,m.o)):(I.push(m),o.push(m.o)),m.C()&&mr(o,8),m}function ze(o,f){return o??f}function Ye(o,f,m){return m=m===void 0?0:m,ze(re(o,f),m)}var Je;function Ke(o){switch(typeof o){case"number":return isFinite(o)?o:String(o);case"object":if(o)if(Array.isArray(o)){if((Ut(o)&128)!==0)return o=Array.prototype.slice.call(o),ss(o),o}else{if(ft&&o!=null&&o instanceof Uint8Array)return ve(o);if(o instanceof pe){var f=o.V;return f==null?"":typeof f=="string"?f:o.V=ve(f)}}}return o}function ct(o,f,m,M){if(o!=null){if(Array.isArray(o))o=xt(o,f,m,M!==void 0);else if(qi(o)){var L={},I;for(I in o)L[I]=ct(o[I],f,m,M);o=L}else o=f(o,M);return o}}function xt(o,f,m,M){var L=Ut(o);M=M?!!(L&16):void 0,o=Array.prototype.slice.call(o);for(var I=0;I<o.length;I++)o[I]=ct(o[I],f,m,M);return m(L,o),o}function It(o){return o.ja===xr?o.toJSON():Ke(o)}function Ft(o,f){o&128&&ss(f)}function Mt(o,f,m){if(m=m===void 0?ni:m,o!=null){if(ft&&o instanceof Uint8Array)return o.length?new pe(new Uint8Array(o),et):ye();if(Array.isArray(o)){var M=Ut(o);return M&2?o:f&&!(M&32)&&(M&16||M===0)?(vn(o,M|2),o):(o=xt(o,Mt,M&4?ni:m,!0),f=Ut(o),f&4&&f&2&&Object.freeze(o),o)}return o.ja===xr?Rt(o):o}}function $e(o,f,m,M,L,I,U){if(o=o.h&&o.h[m]){if(M=Ut(o),M&2?M=o:(I=he(o,Rt),ni(M,I),Object.freeze(I),M=I),rs(f),U=M==null?Ki:wi([]),M!=null){for(I=!!M.length,o=0;o<M.length;o++){var G=M[o];I=I&&!(Ut(G.o)&2),U[o]=G.o}I=(I?8:0)|1,o=Ut(U),(o&I)!==I&&(Object.isFrozen(U)&&(U=Array.prototype.slice.call(U)),vn(U,o|I)),f.h||(f.h={}),f.h[m]=M}else f.h&&(f.h[m]=void 0);W(f,m,U,L)}else E(f,m,Mt(M,I,U),L)}function Rt(o){return Ut(o.o)&2||(o=pt(o,!0),on(o.o,2)),o}function pt(o,f){var m=o.o,M=[];on(M,16);var L=o.constructor.h;if(L&&M.push(L),L=o.B,L){M.length=m.length,M.fill(void 0,M.length,m.length);var I={};M[M.length-1]=I}(Ut(m)&128)!==0&&ss(M),f=f||o.C()?ni:qs,I=o.constructor,Je=M,M=new I(M),Je=void 0,o.R&&(M.R=o.R.slice()),I=!!(Ut(m)&16);for(var U=L?m.length-1:m.length,G=0;G<U;G++)$e(o,M,G-o.G,m[G],!1,I,f);if(L)for(var te in L)$e(o,M,+te,L[te],!0,I,f);return M}function Et(o,f,m){o==null&&(o=Je),Je=void 0;var M=this.constructor.i||0,L=0<M,I=this.constructor.h,U=!1;if(o==null){o=I?[I]:[];var G=48,te=!0;L&&(M=0,G|=128),vn(o,G)}else{if(!Array.isArray(o)||I&&I!==o[0])throw Error();var Me=G=on(o,0);if((te=(16&Me)!==0)&&((U=(32&Me)!==0)||(Me|=32)),L){if(128&Me)M=0;else if(0<o.length){var Le=o[o.length-1];if(qi(Le)&&"g"in Le){M=0,Me|=128,delete Le.g;var nt=!0,qe;for(qe in Le){nt=!1;break}nt&&o.pop()}}}else if(128&Me)throw Error();G!==Me&&vn(o,Me)}this.G=(I?0:-1)-M,this.h=void 0,this.o=o;e:{if(I=this.o.length,M=I-1,I&&(I=this.o[M],qi(I))){this.B=I,this.i=M-this.G;break e}f!==void 0&&-1<f?(this.i=Math.max(f,M+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!L&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(m){f=te&&!U&&!0,L=this.i;var Oe;for(te=0;te<m.length;te++)U=m[te],U<L?(U+=this.G,(M=o[U])?ii(M,f):o[U]=Ki):(Oe||(Oe=$s(this)),(M=Oe[U])?ii(M,f):Oe[U]=Ki)}}Et.prototype.toJSON=function(){return xt(this.o,It,Ft)},Et.prototype.C=function(){return!!(Ut(this.o)&2)};function ii(o,f){if(Array.isArray(o)){var m=Ut(o),M=1;!f||m&2||(M|=16),(m&M)!==M&&vn(o,m|M)}}Et.prototype.ja=xr,Et.prototype.toString=function(){return this.o.toString()};function Zt(o,f,m){if(m){var M={},L;for(L in m){var I=m[L],U=I.qa;U||(M.J=I.wa||I.oa.W,I.ia?(M.aa=Lc(I.ia),U=(function(G){return function(te,Me,Le){return G.J(te,Me,Le,G.aa)}})(M)):I.ka?(M.Z=Uc(I.da.P,I.ka),U=(function(G){return function(te,Me,Le){return G.J(te,Me,Le,G.Z)}})(M)):U=M.J,I.qa=U),U(f,o,I.da),M={J:M.J,aa:M.aa,Z:M.Z}}}Ys(f,o)}var Wn=Symbol();function Ct(o,f,m){return o[Wn]||(o[Wn]=function(M,L){return f(M,L,m)})}function jt(o){var f=o[Wn];if(!f){var m=ia(o);f=function(M,L){return Ic(M,L,m)},o[Wn]=f}return f}function dn(o){var f=o.ia;if(f)return jt(f);if(f=o.va)return Ct(o.da.P,f,o.ka)}function Yt(o){var f=dn(o),m=o.da,M=o.oa.U;return f?function(L,I){return M(L,I,m,f)}:function(L,I){return M(L,I,m)}}function qt(o,f){var m=o[f];return typeof m=="function"&&m.length===0&&(m=m(),o[f]=m),Array.isArray(m)&&(as in m||os in m||0<m.length&&typeof m[0]=="function")?m:void 0}function gr(o,f,m,M,L,I){f.P=o[0];var U=1;if(o.length>U&&typeof o[U]!="number"){var G=o[U++];m(f,G)}for(;U<o.length;){m=o[U++];for(var te=U+1;te<o.length&&typeof o[te]!="number";)te++;switch(G=o[U++],te-=U,te){case 0:M(f,m,G);break;case 1:(te=qt(o,U))?(U++,L(f,m,G,te)):M(f,m,G,o[U++]);break;case 2:te=U++,te=qt(o,te),L(f,m,G,te,o[U++]);break;case 3:I(f,m,G,o[U++],o[U++],o[U++]);break;case 4:I(f,m,G,o[U++],o[U++],o[U++],o[U++]);break;default:throw Error("unexpected number of binary field arguments: "+te)}}return f}var Rn=Symbol();function Lc(o){var f=o[Rn];if(!f){var m=na(o);f=function(M,L){return Fc(M,L,m)},o[Rn]=f}return f}function Uc(o,f){var m=o[Rn];return m||(m=function(M,L){return Zt(M,L,f)},o[Rn]=m),m}var os=Symbol();function md(o,f){o.push(f)}function xd(o,f,m){o.push(f,m.W)}function gd(o,f,m,M){var L=Lc(M),I=na(M).P,U=m.W;o.push(f,function(G,te,Me){return U(G,te,Me,I,L)})}function _d(o,f,m,M,L,I){var U=Uc(M,I),G=m.W;o.push(f,function(te,Me,Le){return G(te,Me,Le,M,U)})}function na(o){var f=o[os];return f||(f=gr(o,o[os]=[],md,xd,gd,_d),as in o&&os in o&&(o.length=0),f)}var as=Symbol();function vd(o,f){o[0]=f}function Md(o,f,m,M){var L=m.U;o[f]=M?function(I,U,G){return L(I,U,G,M)}:L}function Sd(o,f,m,M,L){var I=m.U,U=jt(M),G=ia(M).P;o[f]=function(te,Me,Le){return I(te,Me,Le,G,U,L)}}function bd(o,f,m,M,L,I,U){var G=m.U,te=Ct(M,L,I);o[f]=function(Me,Le,nt){return G(Me,Le,nt,M,te,U)}}function ia(o){var f=o[as];return f||(f=gr(o,o[as]={},vd,Md,Sd,bd),as in o&&os in o&&(o.length=0),f)}function Ic(o,f,m){for(;yt(f)&&f.i!=4;){var M=f.l,L=m[M];if(!L){var I=m[0];I&&(I=I[M])&&(L=m[M]=Yt(I))}if(!L||!L(f,o,M)){L=f,M=o,I=L.j,mt(L);var U=L;if(!U.ca){if(L=U.h.h-I,U.h.h=I,U=U.h,L==0)L=ye();else{if(I=Re(U,L),U.S&&U.m)L=U.i.subarray(I,I+L);else{U=U.i;var G=I;L=I+L,L=G===L?Ue():N?U.slice(G,L):new Uint8Array(U.subarray(G,L))}L=L.length==0?ye():new pe(L,et)}(I=M.R)?I.push(L):M.R=[L]}}}return o}function Fc(o,f,m){for(var M=m.length,L=M%2==1,I=L?1:0;I<M;I+=2)(0,m[I+1])(f,o,m[I]);Zt(o,f,L?m[0]:void 0)}function ls(o,f){return{U:o,W:f}}var Fn=ls(function(o,f,m){if(o.i!==5)return!1;o=o.h;var M=o.i,L=o.h,I=M[L],U=M[L+1],G=M[L+2];return M=M[L+3],V(o,o.h+4),U=(I<<0|U<<8|G<<16|M<<24)>>>0,o=2*(U>>31)+1,I=U>>>23&255,U&=8388607,E(f,m,I==255?U?NaN:1/0*o:I==0?o*Math.pow(2,-149)*U:o*Math.pow(2,I-150)*(U+Math.pow(2,23))),!0},function(o,f,m){if(f=re(f,m),f!=null){Ve(o.h,8*m+5),o=o.h;var M=+f;M===0?0<1/M?F=Y=0:(Y=0,F=2147483648):isNaN(M)?(Y=0,F=2147483647):(M=(m=0>M?-2147483648:0)?-M:M,34028234663852886e22<M?(Y=0,F=(m|2139095040)>>>0):11754943508222875e-54>M?(M=Math.round(M/Math.pow(2,-149)),Y=0,F=(m|M)>>>0):(f=Math.floor(Math.log(M)/Math.LN2),M*=Math.pow(2,-f),M=Math.round(8388608*M),16777216<=M&&++f,Y=0,F=(m|f+127<<23|M&8388607)>>>0)),m=F,o.h.push(m>>>0&255),o.h.push(m>>>8&255),o.h.push(m>>>16&255),o.h.push(m>>>24&255)}}),yd=ls(function(o,f,m){if(o.i!==0)return!1;var M=o.h,L=0,I=o=0,U=M.i,G=M.h;do{var te=U[G++];L|=(te&127)<<I,I+=7}while(32>I&&te&128);for(32<I&&(o|=(te&127)>>4),I=3;32>I&&te&128;I+=7)te=U[G++],o|=(te&127)<<I;if(V(M,G),128>te)M=L>>>0,te=o>>>0,(o=te&2147483648)&&(M=~M+1>>>0,te=~te>>>0,M==0&&(te=te+1>>>0)),M=4294967296*te+(M>>>0);else throw ge();return E(f,m,o?-M:M),!0},function(o,f,m){f=Mn(f,m),f!=null&&(typeof f=="string"&&ie(f),f!=null&&(Ve(o.h,8*m),typeof f=="number"?(o=o.h,R(f),de(o,F,Y)):(m=ie(f),de(o.h,m.i,m.h))))}),Ed=ls(function(o,f,m){return o.i!==0?!1:(E(f,m,De(o.h)),!0)},function(o,f,m){if(f=Mn(f,m),f!=null&&f!=null)if(Ve(o.h,8*m),o=o.h,m=f,0<=m)Ve(o,m);else{for(f=0;9>f;f++)o.h.push(m&127|128),m>>=7;o.h.push(1)}}),Nc=ls(function(o,f,m){if(o.i!==2)return!1;var M=De(o.h)>>>0;o=o.h;var L=Re(o,M);if(o=o.i,K){var I=o,U;(U=ae)||(U=ae=new TextDecoder("utf-8",{fatal:!0})),o=L+M,I=L===0&&o===I.length?I:I.subarray(L,o);try{var G=U.decode(I)}catch(nt){if(Q===void 0){try{U.decode(new Uint8Array([128]))}catch{}try{U.decode(new Uint8Array([97])),Q=!0}catch{Q=!1}}throw!Q&&(ae=void 0),nt}}else{G=L,M=G+M,L=[];for(var te=null,Me,Le;G<M;)Me=o[G++],128>Me?L.push(Me):224>Me?G>=M?v():(Le=o[G++],194>Me||(Le&192)!==128?(G--,v()):L.push((Me&31)<<6|Le&63)):240>Me?G>=M-1?v():(Le=o[G++],(Le&192)!==128||Me===224&&160>Le||Me===237&&160<=Le||((I=o[G++])&192)!==128?(G--,v()):L.push((Me&15)<<12|(Le&63)<<6|I&63)):244>=Me?G>=M-2?v():(Le=o[G++],(Le&192)!==128||(Me<<28)+(Le-144)>>30!==0||((I=o[G++])&192)!==128||((U=o[G++])&192)!==128?(G--,v()):(Me=(Me&7)<<18|(Le&63)<<12|(I&63)<<6|U&63,Me-=65536,L.push((Me>>10&1023)+55296,(Me&1023)+56320))):v(),8192<=L.length&&(te=H(te,L),L.length=0);G=H(te,L)}return E(f,m,G),!0},function(o,f,m){if(f=Mn(f,m),f!=null){var M=!1;if(M=M===void 0?!1:M,be){if(M&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(f))throw Error("Found an unpaired surrogate");f=(Ne||(Ne=new TextEncoder)).encode(f)}else{for(var L=0,I=new Uint8Array(3*f.length),U=0;U<f.length;U++){var G=f.charCodeAt(U);if(128>G)I[L++]=G;else{if(2048>G)I[L++]=G>>6|192;else{if(55296<=G&&57343>=G){if(56319>=G&&U<f.length){var te=f.charCodeAt(++U);if(56320<=te&&57343>=te){G=1024*(G-55296)+te-56320+65536,I[L++]=G>>18|240,I[L++]=G>>12&63|128,I[L++]=G>>6&63|128,I[L++]=G&63|128;continue}else U--}if(M)throw Error("Found an unpaired surrogate");G=65533}I[L++]=G>>12|224,I[L++]=G>>6&63|128}I[L++]=G&63|128}}f=L===I.length?I:I.subarray(0,L)}Ve(o.h,8*m+2),Ve(o.h,f.length),Ai(o,o.h.end()),Ai(o,f)}}),Oc=ls(function(o,f,m,M,L){if(o.i!==2)return!1;f=ke(f,m,M),m=o.h.j,M=De(o.h)>>>0;var I=o.h.h+M,U=I-m;if(0>=U&&(o.h.j=I,L(f,o,void 0,void 0,void 0),U=I-o.h.h),U)throw Error("Message parsing ended unexpectedly. Expected to read "+(M+" bytes, instead read "+(M-U)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return o.h.h=I,o.h.j=m,!0},function(o,f,m,M,L){if(f=Ee(f,M,m),f!=null)for(M=0;M<f.length;M++){var I=o;Ve(I.h,8*m+2);var U=I.h.end();Ai(I,U),U.push(I.i),I=U,L(f[M],o),U=o;var G=I.pop();for(G=U.i+U.h.length()-G;127<G;)I.push(G&127|128),G>>>=7,U.i++;I.push(G),U.i++}});function ra(o){return function(f,m){e:{if(sn.length){var M=sn.pop();M.setOptions(m),Ze(M.h,f,m),f=M}else f=new tt(f,m);try{var L=ia(o),I=Ic(new L.P,f,L);break e}finally{L=f.h,L.i=null,L.m=!1,L.l=0,L.j=0,L.h=0,L.S=!1,f.l=-1,f.i=-1,100>sn.length&&sn.push(f)}I=void 0}return I}}function sa(o){return function(){var f=new _n;Fc(this,f,na(o)),Ai(f,f.h.end());for(var m=new Uint8Array(f.i),M=f.j,L=M.length,I=0,U=0;U<L;U++){var G=M[U];m.set(G,I),I+=G.length}return f.j=[m],m}}function _r(o){Et.call(this,o)}_(_r,Et);var Bc=[_r,1,Ed,2,Fn,3,Nc,4,Nc];_r.prototype.l=sa(Bc);function oa(o){Et.call(this,o,-1,Td)}_(oa,Et),oa.prototype.addClassification=function(o,f){return ke(this,1,_r,o,f),this};var Td=[1],zc=ra([oa,1,Oc,Bc]);function vr(o){Et.call(this,o)}_(vr,Et);var Vc=[vr,1,Fn,2,Fn,3,Fn,4,Fn,5,Fn];vr.prototype.l=sa(Vc);function Hc(o){Et.call(this,o,-1,Ad)}_(Hc,Et);var Ad=[1],Gc=ra([Hc,1,Oc,Vc]);function Zs(o){Et.call(this,o)}_(Zs,Et);var kc=[Zs,1,Fn,2,Fn,3,Fn,4,Fn,5,Fn,6,yd],wd=ra(kc);Zs.prototype.l=sa(kc);function Wc(o,f,m){if(m=o.createShader(m===0?o.VERTEX_SHADER:o.FRAGMENT_SHADER),o.shaderSource(m,f),o.compileShader(m),!o.getShaderParameter(m,o.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+o.getShaderInfoLog(m));return m}function Xc(o){return Ee(o,_r,1).map(function(f){var m=Mn(f,1);return{index:m??0,score:Ye(f,2),label:Mn(f,3)!=null?ze(Mn(f,3),""):void 0,displayName:Mn(f,4)!=null?ze(Mn(f,4),""):void 0}})}function jc(o){return{x:Ye(o,1),y:Ye(o,2),z:Ye(o,3),visibility:re(o,4)!=null?Ye(o,4):void 0}}function Yc(o){return o.map(function(f){return Ee(Gc(f),vr,1).map(jc)})}function aa(o,f){this.i=o,this.h=f,this.m=0}function qc(o,f,m){return Rd(o,f),typeof o.h.canvas.transferToImageBitmap=="function"?Promise.resolve(o.h.canvas.transferToImageBitmap()):m?Promise.resolve(o.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(o.h.canvas):(o.j===void 0&&(o.j=document.createElement("canvas")),new Promise(function(M){o.j.height=o.h.canvas.height,o.j.width=o.h.canvas.width,o.j.getContext("2d",{}).drawImage(o.h.canvas,0,0,o.h.canvas.width,o.h.canvas.height),M(o.j)}))}function Rd(o,f){var m=o.h;if(o.s===void 0){var M=Wc(m,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),L=Wc(m,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),I=m.createProgram();if(m.attachShader(I,M),m.attachShader(I,L),m.linkProgram(I),!m.getProgramParameter(I,m.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+m.getProgramInfoLog(I));M=o.s=I,m.useProgram(M),L=m.getUniformLocation(M,"sampler0"),o.l={O:m.getAttribLocation(M,"aVertex"),N:m.getAttribLocation(M,"aTex"),xa:L},o.v=m.createBuffer(),m.bindBuffer(m.ARRAY_BUFFER,o.v),m.enableVertexAttribArray(o.l.O),m.vertexAttribPointer(o.l.O,2,m.FLOAT,!1,0,0),m.bufferData(m.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),m.STATIC_DRAW),m.bindBuffer(m.ARRAY_BUFFER,null),o.u=m.createBuffer(),m.bindBuffer(m.ARRAY_BUFFER,o.u),m.enableVertexAttribArray(o.l.N),m.vertexAttribPointer(o.l.N,2,m.FLOAT,!1,0,0),m.bufferData(m.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),m.STATIC_DRAW),m.bindBuffer(m.ARRAY_BUFFER,null),m.uniform1i(L,0)}M=o.l,m.useProgram(o.s),m.canvas.width=f.width,m.canvas.height=f.height,m.viewport(0,0,f.width,f.height),m.activeTexture(m.TEXTURE0),o.i.bindTexture2d(f.glName),m.enableVertexAttribArray(M.O),m.bindBuffer(m.ARRAY_BUFFER,o.v),m.vertexAttribPointer(M.O,2,m.FLOAT,!1,0,0),m.enableVertexAttribArray(M.N),m.bindBuffer(m.ARRAY_BUFFER,o.u),m.vertexAttribPointer(M.N,2,m.FLOAT,!1,0,0),m.bindFramebuffer(m.DRAW_FRAMEBUFFER?m.DRAW_FRAMEBUFFER:m.FRAMEBUFFER,null),m.clearColor(0,0,0,0),m.clear(m.COLOR_BUFFER_BIT),m.colorMask(!0,!0,!0,!0),m.drawArrays(m.TRIANGLE_FAN,0,4),m.disableVertexAttribArray(M.O),m.disableVertexAttribArray(M.N),m.bindBuffer(m.ARRAY_BUFFER,null),o.i.bindTexture2d(0)}function Cd(o){this.h=o}var Pd=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Dd(o,f){return f+o}function Kc(o,f){window[o]=f}function Ld(o){var f=document.createElement("script");return f.setAttribute("src",o),f.setAttribute("crossorigin","anonymous"),new Promise(function(m){f.addEventListener("load",function(){m()},!1),f.addEventListener("error",function(){m()},!1),document.body.appendChild(f)})}function Ud(){return z(function(o){switch(o.h){case 1:return o.s=2,A(o,WebAssembly.instantiate(Pd),4);case 4:o.h=3,o.s=0;break;case 2:return o.s=0,o.l=null,o.return(!1);case 3:return o.return(!0)}})}function la(o){if(this.h=o,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=o&&o.locateFile||Dd,typeof window=="object")var f=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")f=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=f,o.options){f=l(Object.keys(o.options));for(var m=f.next();!m.done;m=f.next()){m=m.value;var M=o.options[m].default;M!==void 0&&(this.l[m]=typeof M=="function"?M():M)}}}n=la.prototype,n.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function Id(o){var f,m,M,L,I,U,G,te,Me,Le,nt;return z(function(qe){switch(qe.h){case 1:return o.ga?(f=o.h.files===void 0?[]:typeof o.h.files=="function"?o.h.files(o.l):o.h.files,A(qe,Ud(),2)):qe.return();case 2:if(m=qe.i,typeof window=="object")return Kc("createMediapipeSolutionsWasm",{locateFile:o.locateFile}),Kc("createMediapipeSolutionsPackedAssets",{locateFile:o.locateFile}),U=f.filter(function(Oe){return Oe.data!==void 0}),G=f.filter(function(Oe){return Oe.data===void 0}),te=Promise.all(U.map(function(Oe){var it=Js(o,Oe.url);if(Oe.path!==void 0){var ut=Oe.path;it=it.then(function(Lt){return o.overrideFile(ut,Lt),Promise.resolve(Lt)})}return it})),Me=Promise.all(G.map(function(Oe){return Oe.simd===void 0||Oe.simd&&m||!Oe.simd&&!m?Ld(o.locateFile(Oe.url,o.ha)):Promise.resolve()})).then(function(){var Oe,it,ut;return z(function(Lt){if(Lt.h==1)return Oe=window.createMediapipeSolutionsWasm,it=window.createMediapipeSolutionsPackedAssets,ut=o,A(Lt,Oe(it),2);ut.i=Lt.i,Lt.h=0})}),Le=(function(){return z(function(Oe){return o.h.graph&&o.h.graph.url?Oe=A(Oe,Js(o,o.h.graph.url),0):(Oe.h=0,Oe=void 0),Oe})})(),A(qe,Promise.all([Me,te,Le]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return M=f.filter(function(Oe){return Oe.simd===void 0||Oe.simd&&m||!Oe.simd&&!m}).map(function(Oe){return o.locateFile(Oe.url,o.ha)}),importScripts.apply(null,c(M)),L=o,A(qe,createMediapipeSolutionsWasm(Module),6);case 6:L.i=qe.i,o.m=new OffscreenCanvas(1,1),o.i.canvas=o.m,I=o.i.GL.createContext(o.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),o.i.GL.makeContextCurrent(I),qe.h=4;break;case 7:if(o.m=document.createElement("canvas"),nt=o.m.getContext("webgl2",{}),!nt&&(nt=o.m.getContext("webgl",{}),!nt))return alert("Failed to create WebGL canvas context when passing video frame."),qe.return();o.K=nt,o.i.canvas=o.m,o.i.createContext(o.m,!0,!0,{});case 4:o.j=new o.i.SolutionWasm,o.ga=!1,qe.h=0}})}function Fd(o){var f,m,M,L,I,U,G,te;return z(function(Me){if(Me.h==1){if(o.h.graph&&o.h.graph.url&&o.fa===o.h.graph.url)return Me.return();if(o.u=!0,!o.h.graph||!o.h.graph.url){Me.h=2;return}return o.fa=o.h.graph.url,A(Me,Js(o,o.h.graph.url),3)}for(Me.h!=2&&(f=Me.i,o.j.loadGraph(f)),m=l(Object.keys(o.D)),M=m.next();!M.done;M=m.next())L=M.value,o.j.overrideFile(L,o.D[L]);if(o.D={},o.h.listeners)for(I=l(o.h.listeners),U=I.next();!U.done;U=I.next())G=U.value,zd(o,G);te=o.l,o.l={},o.setOptions(te),Me.h=0})}n.reset=function(){var o=this;return z(function(f){o.j&&(o.j.reset(),o.s={},o.v={}),f.h=0})},n.setOptions=function(o,f){var m=this;if(f=f||this.h.options){for(var M=[],L=[],I={},U=l(Object.keys(o)),G=U.next();!G.done;I={X:I.X,Y:I.Y},G=U.next())if(G=G.value,!(G in this.l&&this.l[G]===o[G])){this.l[G]=o[G];var te=f[G];te!==void 0&&(te.onChange&&(I.X=te.onChange,I.Y=o[G],M.push((function(Me){return function(){var Le;return z(function(nt){if(nt.h==1)return A(nt,Me.X(Me.Y),2);Le=nt.i,Le===!0&&(m.u=!0),nt.h=0})}})(I))),te.graphOptionXref&&(G=Object.assign({},{calculatorName:"",calculatorIndex:0},te.graphOptionXref,{valueNumber:te.type===1?o[G]:0,valueBoolean:te.type===0?o[G]:!1,valueString:te.type===2?o[G]:""}),L.push(G)))}(M.length!==0||L.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(L),this.F=(this.F===void 0?[]:this.F).concat(M))}};function Nd(o){var f,m,M,L,I,U,G;return z(function(te){switch(te.h){case 1:if(!o.u)return te.return();if(!o.F){te.h=2;break}f=l(o.F),m=f.next();case 3:if(m.done){te.h=5;break}return M=m.value,A(te,M(),4);case 4:m=f.next(),te.h=3;break;case 5:o.F=void 0;case 2:if(o.H){for(L=new o.i.GraphOptionChangeRequestList,I=l(o.H),U=I.next();!U.done;U=I.next())G=U.value,L.push_back(G);o.j.changeOptions(L),L.delete(),o.H=void 0}o.u=!1,te.h=0}})}n.initialize=function(){var o=this;return z(function(f){return f.h==1?A(f,Id(o),2):f.h!=3?A(f,Fd(o),3):A(f,Nd(o),0)})};function Js(o,f){var m,M;return z(function(L){return f in o.L?L.return(o.L[f]):(m=o.locateFile(f,""),M=fetch(m).then(function(I){return I.arrayBuffer()}),o.L[f]=M,L.return(M))})}n.overrideFile=function(o,f){this.j?this.j.overrideFile(o,f):this.D[o]=f},n.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},n.send=function(o,f){var m=this,M,L,I,U,G,te,Me,Le,nt;return z(function(qe){switch(qe.h){case 1:return m.h.inputs?(M=1e3*(f??performance.now()),A(qe,m.I,2)):qe.return();case 2:return A(qe,m.initialize(),3);case 3:for(L=new m.i.PacketDataList,I=l(Object.keys(o)),U=I.next();!U.done;U=I.next())if(G=U.value,te=m.h.inputs[G]){e:{var Oe=o[G];switch(te.type){case"video":var it=m.s[te.stream];if(it||(it=new aa(m.i,m.K),m.s[te.stream]=it),it.m===0&&(it.m=it.i.createTexture()),typeof HTMLVideoElement<"u"&&Oe instanceof HTMLVideoElement)var ut=Oe.videoWidth,Lt=Oe.videoHeight;else typeof HTMLImageElement<"u"&&Oe instanceof HTMLImageElement?(ut=Oe.naturalWidth,Lt=Oe.naturalHeight):(ut=Oe.width,Lt=Oe.height);Lt={glName:it.m,width:ut,height:Lt},ut=it.h,ut.canvas.width=Lt.width,ut.canvas.height=Lt.height,ut.activeTexture(ut.TEXTURE0),it.i.bindTexture2d(it.m),ut.texImage2D(ut.TEXTURE_2D,0,ut.RGBA,ut.RGBA,ut.UNSIGNED_BYTE,Oe),it.i.bindTexture2d(0),it=Lt;break e;case"detections":for(it=m.s[te.stream],it||(it=new Cd(m.i),m.s[te.stream]=it),it.data||(it.data=new it.h.DetectionListData),it.data.reset(Oe.length),Lt=0;Lt<Oe.length;++Lt){ut=Oe[Lt];var Pt=it.data,Kt=Pt.setBoundingBox,Cn=Lt,pn=ut.la,gt=new Zs;if(Pe(gt,1,pn.ra),Pe(gt,2,pn.sa),Pe(gt,3,pn.height),Pe(gt,4,pn.width),Pe(gt,5,pn.rotation),E(gt,6,pn.pa),pn=gt.l(),Kt.call(Pt,Cn,pn),ut.ea)for(Pt=0;Pt<ut.ea.length;++Pt){gt=ut.ea[Pt],Kt=it.data,Cn=Kt.addNormalizedLandmark,pn=Lt,gt=Object.assign({},gt,{visibility:gt.visibility?gt.visibility:0});var $t=new vr;Pe($t,1,gt.x),Pe($t,2,gt.y),Pe($t,3,gt.z),gt.visibility&&Pe($t,4,gt.visibility),gt=$t.l(),Cn.call(Kt,pn,gt)}if(ut.ba)for(Pt=0;Pt<ut.ba.length;++Pt)Kt=it.data,Cn=Kt.addClassification,pn=Lt,gt=ut.ba[Pt],$t=new _r,Pe($t,2,gt.score),gt.index&&E($t,1,gt.index),gt.label&&E($t,3,gt.label),gt.displayName&&E($t,4,gt.displayName),gt=$t.l(),Cn.call(Kt,pn,gt)}it=it.data;break e;default:it={}}}switch(Me=it,Le=te.stream,te.type){case"video":L.pushTexture2d(Object.assign({},Me,{stream:Le,timestamp:M}));break;case"detections":nt=Me,nt.stream=Le,nt.timestamp=M,L.pushDetectionList(nt);break;default:throw Error("Unknown input config type: '"+te.type+"'")}}return m.j.send(L),A(qe,m.I,4);case 4:L.delete(),qe.h=0}})};function Od(o,f,m){var M,L,I,U,G,te,Me,Le,nt,qe,Oe,it,ut,Lt;return z(function(Pt){switch(Pt.h){case 1:if(!m)return Pt.return(f);for(M={},L=0,I=l(Object.keys(m)),U=I.next();!U.done;U=I.next())G=U.value,te=m[G],typeof te!="string"&&te.type==="texture"&&f[te.stream]!==void 0&&++L;1<L&&(o.M=!1),Me=l(Object.keys(m)),U=Me.next();case 2:if(U.done){Pt.h=4;break}if(Le=U.value,nt=m[Le],typeof nt=="string")return ut=M,Lt=Le,A(Pt,Bd(o,Le,f[nt]),14);if(qe=f[nt.stream],nt.type==="detection_list"){if(qe){for(var Kt=qe.getRectList(),Cn=qe.getLandmarksList(),pn=qe.getClassificationsList(),gt=[],$t=0;$t<Kt.size();++$t){var Ri=wd(Kt.get($t)),Vd=Ye(Ri,1),Hd=Ye(Ri,2),Gd=Ye(Ri,3),kd=Ye(Ri,4),Wd=Ye(Ri,5,0),Qs=void 0;Qs=Qs===void 0?0:Qs,Ri={la:{ra:Vd,sa:Hd,height:Gd,width:kd,rotation:Wd,pa:ze(Mn(Ri,6),Qs)},ea:Ee(Gc(Cn.get($t)),vr,1).map(jc),ba:Xc(zc(pn.get($t)))},gt.push(Ri)}Kt=gt}else Kt=[];M[Le]=Kt,Pt.h=7;break}if(nt.type==="proto_list"){if(qe){for(Kt=Array(qe.size()),Cn=0;Cn<qe.size();Cn++)Kt[Cn]=qe.get(Cn);qe.delete()}else Kt=[];M[Le]=Kt,Pt.h=7;break}if(qe===void 0){Pt.h=3;break}if(nt.type==="float_list"){M[Le]=qe,Pt.h=7;break}if(nt.type==="proto"){M[Le]=qe,Pt.h=7;break}if(nt.type!=="texture")throw Error("Unknown output config type: '"+nt.type+"'");return Oe=o.v[Le],Oe||(Oe=new aa(o.i,o.K),o.v[Le]=Oe),A(Pt,qc(Oe,qe,o.M),13);case 13:it=Pt.i,M[Le]=it;case 7:nt.transform&&M[Le]&&(M[Le]=nt.transform(M[Le])),Pt.h=3;break;case 14:ut[Lt]=Pt.i;case 3:U=Me.next(),Pt.h=2;break;case 4:return Pt.return(M)}})}function Bd(o,f,m){var M;return z(function(L){return typeof m=="number"||m instanceof Uint8Array||m instanceof o.i.Uint8BlobList?L.return(m):m instanceof o.i.Texture2dDataOut?(M=o.v[f],M||(M=new aa(o.i,o.K),o.v[f]=M),L.return(qc(M,m,o.M))):L.return(void 0)})}function zd(o,f){for(var m=f.name||"$",M=[].concat(c(f.wants)),L=new o.i.StringList,I=l(f.wants),U=I.next();!U.done;U=I.next())L.push_back(U.value);I=o.i.PacketListener.implement({onResults:function(G){for(var te={},Me=0;Me<f.wants.length;++Me)te[M[Me]]=G.get(Me);var Le=o.listeners[m];Le&&(o.I=Od(o,te,f.outs).then(function(nt){nt=Le(nt);for(var qe=0;qe<f.wants.length;++qe){var Oe=te[M[qe]];typeof Oe=="object"&&Oe.hasOwnProperty&&Oe.hasOwnProperty("delete")&&Oe.delete()}nt&&(o.I=nt)}))}}),o.j.attachMultiListener(L,I),L.delete()}n.onResults=function(o,f){this.listeners[f||"$"]=o},ce("Solution",la),ce("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function $c(o){return o===void 0&&(o=0),o===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function Zc(o){var f=this;o=o||{},this.h=new la({locateFile:o.locateFile,files:function(m){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:$c(m.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:Yc},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:Yc},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(m){return m.map(function(M){return Xc(zc(M))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(m){var M,L,I;return z(function(U){return U.h==1?(M=$c(m),L="third_party/mediapipe/modules/hand_landmark/"+M,A(U,Js(f.h,M),2)):(I=U.i,f.h.overrideFile(L,I),U.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}n=Zc.prototype,n.close=function(){return this.h.close(),Promise.resolve()},n.onResults=function(o){this.h.onResults(o)},n.initialize=function(){var o=this;return z(function(f){return A(f,o.h.initialize(),0)})},n.reset=function(){this.h.reset()},n.send=function(o){var f=this;return z(function(m){return A(m,f.h.send(o),0)})},n.setOptions=function(o){this.h.setOptions(o)},ce("Hands",Zc),ce("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),ce("VERSION","0.4.1675469240")}).call(Ja)),Ja}var KS=qS();const $S={class:"game-container"},ZS={class:"panel-header"},JS={class:"control-group"},QS={class:"model-selector"},eb=["onClick"],tb={class:"control-group"},nb={class:"control-group"},ib={class:"status-text"},rb={key:0},sb={class:"score-display"},Df=.5,Lf=.15,ob=.3,ab=ch({__name:"SnakeGame",setup(n){const e=Ci(null),t=Ci(null),i=Ci(!1),r=Ci(!1),s=Ci(!1),a=Ci(0),l=Ci("#00ff88"),c=Ci("cube"),u=[{label:"方块",value:"cube"},{label:"球体",value:"sphere"},{label:"四面体",value:"tetra"}];let h,d,x,g;const S=[];let T=Lf;const _=new q(0,0,0);let p,P;const C=[],A=new zi(.1,4,4),O=Ae=>{const $=[16711680,16776960,16753920,16711935,65535],fe=$[Math.floor(Math.random()*$.length)];for(let we=0;we<20;we++){const je=new Ps({color:fe}),Ue=new Gt(A,je);Ue.position.copy(Ae);const et=new q((Math.random()-.5)*.8,(Math.random()-.5)*.8,(Math.random()-.5)*.8);h.add(Ue),C.push({mesh:Ue,velocity:et,life:1})}},D=()=>{for(let Ae=C.length-1;Ae>=0;Ae--){const ve=C[Ae];ve&&(ve.life-=.02,ve.life<=0?(h.remove(ve.mesh),ve.mesh.geometry.dispose(),ve.mesh.material.dispose(),C.splice(Ae,1)):(ve.mesh.position.add(ve.velocity),ve.mesh.scale.setScalar(ve.life),ve.mesh.rotation.x+=.1))}},B=()=>{i.value=!i.value},k=()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()},w=Ae=>{c.value=Ae,ce()},b=()=>{const Ae=new vt(l.value);S.forEach(ve=>{ve.traverse($=>{$ instanceof Gt&&($.material.color.set(Ae),$.material.emissive.set(Ae))})})},z=()=>{if(!e.value)return;h=new qx,d=new En(75,window.innerWidth/window.innerHeight,.1,1e3),d.position.z=20,x=new YS({antialias:!0,alpha:!0}),x.setSize(window.innerWidth,window.innerHeight),x.setPixelRatio(window.devicePixelRatio),x.setClearColor(0,0),e.value.appendChild(x.domElement);const Ae=new sg(16777215,.5);h.add(Ae);const ve=new ig(16777215,1);ve.position.set(10,10,10),h.add(ve),ue(new q(0,0,0));for(let $=0;$<5;$++)le();J(),window.addEventListener("resize",Te)},j=()=>{switch(c.value){case"sphere":return new zi(.4,16,16);case"tetra":return new Dc(.5);case"cube":default:return new dr(.6,.6,.6)}},ee=()=>{const Ae=new zr,ve=new dr(.7,.6,.8),$=new ms({color:l.value,emissive:l.value,emissiveIntensity:.5,roughness:.4,metalness:.6}),fe=new Gt(ve,$);Ae.add(fe);const we=new zi(.15,16,16),je=new Ps({color:16777215}),Ue=new zi(.07,16,16),et=new Ps({color:0}),N=new Gt(we,je);N.position.set(-.2,.2,.3),Ae.add(N);const F=new Gt(Ue,et);F.position.set(-.2,.2,.42),Ae.add(F);const Y=new Gt(we,je);Y.position.set(.2,.2,.3),Ae.add(Y);const R=new Gt(Ue,et);return R.position.set(.2,.2,.42),Ae.add(R),Ae},ue=Ae=>{let ve;if(S.length===0)ve=ee();else{const $=j(),fe=new ms({color:l.value,emissive:l.value,emissiveIntensity:.3,roughness:.4,metalness:.6});ve=new Gt($,fe)}ve.position.copy(Ae),h.add(ve),S.push(ve)},ce=()=>{const Ae=S.map(ve=>ve.position.clone());S.forEach(ve=>h.remove(ve)),S.length=0,Ae.forEach(ve=>ue(ve))},le=()=>{const Ae=S[S.length-1];Ae&&ue(Ae.position.clone())},he=()=>{const Ae=new zr,ve=new zi(.5,32,32),$=new ms({color:16711680,emissive:11141120,emissiveIntensity:.4,roughness:.2,metalness:.3}),fe=new Gt(ve,$);fe.scale.set(1,.9,1),Ae.add(fe);const we=new Cc(.05,.05,.3,8),je=new ms({color:6111287}),Ue=new Gt(we,je);Ue.position.y=.5,Ae.add(Ue);const et=new zi(.2,8,8),N=new ms({color:5025616}),F=new Gt(et,N);return F.position.set(.15,.5,0),F.scale.set(1,.2,.5),F.rotation.z=.5,Ae.add(F),Ae},J=()=>{p&&h.remove(p),p=he(),_e(),h.add(p)},_e=()=>{const Ae=d.position.z,ve=bx.degToRad(d.fov),$=2*Math.tan(ve/2)*Ae,we=$*d.aspect*.45,je=$*.45;p.position.set((Math.random()-.5)*2*we,(Math.random()-.5)*2*je,0)},Te=()=>{!d||!x||(d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight))},We=async()=>{if(t.value){P=new KS.Hands({locateFile:Ae=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${Ae}`}),P.setOptions({maxNumHands:1,modelComplexity:1,minDetectionConfidence:.5,minTrackingConfidence:.5}),P.onResults(Qe);try{const Ae=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640},height:{ideal:480}}});t.value.srcObject=Ae,await t.value.play();const ve=async()=>{t.value&&!t.value.paused&&!t.value.ended&&await P.send({image:t.value}),requestAnimationFrame(ve)};ve()}catch(Ae){console.error("Error accessing camera:",Ae),alert("无法访问摄像头，请检查权限或设备支持情况。")}}},Qe=Ae=>{if(Ae.multiHandLandmarks&&Ae.multiHandLandmarks.length>0){r.value=!0;const ve=Ae.multiHandLandmarks[0],$=(1-ve[8].x)*2-1,fe=(1-ve[8].y)*2-1;_.x=$*15,_.y=fe*10;const we=ve[4],je=ve[8];Math.sqrt(Math.pow(we.x-je.x,2)+Math.pow(we.y-je.y,2))<.05?(s.value=!0,T=ob):(s.value=!1,T=Lf)}else r.value=!1},ft=()=>{g=requestAnimationFrame(ft),D();const Ae=S[0];if(Ae){const ve=new q().subVectors(_,Ae.position);ve.length()>T&&ve.normalize().multiplyScalar(T),Ae.position.add(ve),Ae.lookAt(_)}for(let ve=S.length-1;ve>0;ve--){const $=S[ve],fe=S[ve-1];if($&&fe){const we=$.position.distanceTo(fe.position);if(we>Df){const je=new q().subVectors(fe.position,$.position).normalize(),Ue=we-Df;$.position.add(je.multiplyScalar(Ue)),$.lookAt(fe.position)}}}Ae&&p&&(Math.sqrt(Math.pow(Ae.position.x-p.position.x,2)+Math.pow(Ae.position.y-p.position.y,2))<1.5&&(a.value+=10,le(),O(p.position.clone()),_e()),p.rotation.z+=.02),D(),x.render(h,d)};return dh(()=>{z(),We(),ft()}),ph(()=>{cancelAnimationFrame(g),window.removeEventListener("resize",Te),t.value&&t.value.srcObject&&t.value.srcObject.getTracks().forEach($=>$.stop()),x.dispose()}),(Ae,ve)=>(ws(),_a("div",$S,[Ot("div",{ref_key:"canvasContainer",ref:e,class:"canvas-container"},null,512),Ot("video",{ref_key:"inputVideo",ref:t,class:"input-video",playsinline:""},null,512),Ot("div",{class:Gr(["ui-panel",{hidden:i.value}])},[Ot("div",ZS,[ve[1]||(ve[1]=Ot("h2",null,"3D 贪吃蛇控制",-1)),Ot("button",{onClick:B,class:"toggle-btn"},Fr(i.value?"显示":"隐藏"),1)]),Ot("div",JS,[ve[2]||(ve[2]=Ot("label",null,"蛇身模型",-1)),Ot("div",QS,[(ws(),_a(Yn,null,Zp(u,$=>Ot("button",{key:$.value,class:Gr({active:c.value===$.value}),onClick:fe=>w($.value)},Fr($.label),11,eb)),64))])]),Ot("div",tb,[ve[3]||(ve[3]=Ot("label",null,"蛇身颜色",-1)),Np(Ot("input",{type:"color","onUpdate:modelValue":ve[0]||(ve[0]=$=>l.value=$),onInput:b},null,544),[[fm,l.value]])]),Ot("div",nb,[ve[4]||(ve[4]=Ot("label",null,"状态",-1)),Ot("div",ib,[Ot("span",{class:Gr({active:r.value})},Fr(r.value?"检测到手势":"未检测到手势"),3),r.value?(ws(),_a("span",rb," | "+Fr(s.value?"加速中！":"正常速度"),1)):L0("",!0)])]),Ot("div",{class:"control-group"},[Ot("button",{onClick:k,class:"fullscreen-btn"}," 切换全屏 ")])],2),Ot("div",sb," 得分: "+Fr(a.value),1)]))}}),lb=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},cb=lb(ab,[["__scopeId","data-v-698bacf2"]]),ub=ch({__name:"App",setup(n){return(e,t)=>(ws(),Ih(cb))}});pm(ub).mount("#app");
