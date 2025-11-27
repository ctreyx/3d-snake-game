(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function $l(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const wt={},Nr=[],Kn=()=>{},Pf=()=>!1,No=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Zl=n=>n.startsWith("onUpdate:"),tn=Object.assign,Jl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},kd=Object.prototype.hasOwnProperty,bt=(n,e)=>kd.call(n,e),nt=Array.isArray,Or=n=>Oo(n)==="[object Map]",Df=n=>Oo(n)==="[object Set]",rt=n=>typeof n=="function",Ht=n=>typeof n=="string",ji=n=>typeof n=="symbol",Nt=n=>n!==null&&typeof n=="object",Lf=n=>(Nt(n)||rt(n))&&rt(n.then)&&rt(n.catch),Uf=Object.prototype.toString,Oo=n=>Uf.call(n),Wd=n=>Oo(n).slice(8,-1),If=n=>Oo(n)==="[object Object]",Ql=n=>Ht(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,xs=$l(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Xd=/-\w/g,ki=Bo(n=>n.replace(Xd,e=>e.slice(1).toUpperCase())),jd=/\B([A-Z])/g,hr=Bo(n=>n.replace(jd,"-$1").toLowerCase()),Ff=Bo(n=>n.charAt(0).toUpperCase()+n.slice(1)),ra=Bo(n=>n?`on${Ff(n)}`:""),Hi=(n,e)=>!Object.is(n,e),_o=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Nf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},ec=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Kc;const zo=()=>Kc||(Kc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tc(n){if(nt(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Ht(i)?$d(i):tc(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Ht(n)||Nt(n))return n}const qd=/;(?![^(]*\))/g,Yd=/:([^]+)/,Kd=/\/\*[^]*?\*\//g;function $d(n){const e={};return n.replace(Kd,"").split(qd).forEach(t=>{if(t){const i=t.split(Yd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Br(n){let e="";if(Ht(n))e=n;else if(nt(n))for(let t=0;t<n.length;t++){const i=Br(n[t]);i&&(e+=i+" ")}else if(Nt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Zd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jd=$l(Zd);function Of(n){return!!n||n===""}const Bf=n=>!!(n&&n.__v_isRef===!0),Ur=n=>Ht(n)?n:n==null?"":nt(n)||Nt(n)&&(n.toString===Uf||!rt(n.toString))?Bf(n)?Ur(n.value):JSON.stringify(n,zf,2):String(n),zf=(n,e)=>Bf(e)?zf(n,e.value):Or(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[sa(i,s)+" =>"]=r,t),{})}:Df(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>sa(t))}:ji(e)?sa(e):Nt(e)&&!nt(e)&&!If(e)?String(e):e,sa=(n,e="")=>{var t;return ji(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let dn;class Qd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=dn,!e&&dn&&(this.index=(dn.scopes||(dn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=dn;try{return dn=this,e()}finally{dn=t}}}on(){++this._on===1&&(this.prevScope=dn,dn=this)}off(){this._on>0&&--this._on===0&&(dn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ep(){return dn}let Dt;const oa=new WeakSet;class Vf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,dn&&dn.active&&dn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,oa.has(this)&&(oa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,$c(this),kf(this);const e=Dt,t=Vn;Dt=this,Vn=!0;try{return this.fn()}finally{Wf(this),Dt=e,Vn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)rc(e);this.deps=this.depsTail=void 0,$c(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?oa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$a(this)&&this.run()}get dirty(){return $a(this)}}let Hf=0,gs,_s;function Gf(n,e=!1){if(n.flags|=8,e){n.next=_s,_s=n;return}n.next=gs,gs=n}function nc(){Hf++}function ic(){if(--Hf>0)return;if(_s){let e=_s;for(_s=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;gs;){let e=gs;for(gs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function kf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Wf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),rc(i),tp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function $a(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Xf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Xf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Es)||(n.globalVersion=Es,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!$a(n))))return;n.flags|=2;const e=n.dep,t=Dt,i=Vn;Dt=n,Vn=!0;try{kf(n);const r=n.fn(n._value);(e.version===0||Hi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Dt=t,Vn=i,Wf(n),n.flags&=-3}}function rc(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)rc(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function tp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Vn=!0;const jf=[];function Si(){jf.push(Vn),Vn=!1}function bi(){const n=jf.pop();Vn=n===void 0?!0:n}function $c(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Dt;Dt=void 0;try{e()}finally{Dt=t}}}let Es=0;class np{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class sc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Dt||!Vn||Dt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Dt)t=this.activeLink=new np(Dt,this),Dt.deps?(t.prevDep=Dt.depsTail,Dt.depsTail.nextDep=t,Dt.depsTail=t):Dt.deps=Dt.depsTail=t,qf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Dt.depsTail,t.nextDep=void 0,Dt.depsTail.nextDep=t,Dt.depsTail=t,Dt.deps===t&&(Dt.deps=i)}return t}trigger(e){this.version++,Es++,this.notify(e)}notify(e){nc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ic()}}}function qf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)qf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Za=new WeakMap,lr=Symbol(""),Ja=Symbol(""),Ts=Symbol("");function Qt(n,e,t){if(Vn&&Dt){let i=Za.get(n);i||Za.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new sc),r.map=i,r.key=t),r.track()}}function di(n,e,t,i,r,s){const a=Za.get(n);if(!a){Es++;return}const l=c=>{c&&c.trigger()};if(nc(),e==="clear")a.forEach(l);else{const c=nt(n),u=c&&Ql(t);if(c&&t==="length"){const h=Number(i);a.forEach((d,x)=>{(x==="length"||x===Ts||!ji(x)&&x>=h)&&l(d)})}else switch((t!==void 0||a.has(void 0))&&l(a.get(t)),u&&l(a.get(Ts)),e){case"add":c?u&&l(a.get("length")):(l(a.get(lr)),Or(n)&&l(a.get(Ja)));break;case"delete":c||(l(a.get(lr)),Or(n)&&l(a.get(Ja)));break;case"set":Or(n)&&l(a.get(lr));break}}ic()}function _r(n){const e=St(n);return e===n?e:(Qt(e,"iterate",Ts),Un(n)?e:e.map(Hn))}function Vo(n){return Qt(n=St(n),"iterate",Ts),n}function Ni(n,e){return yi(n)?cr(n)?kr(Hn(e)):kr(e):Hn(e)}const ip={__proto__:null,[Symbol.iterator](){return aa(this,Symbol.iterator,n=>Ni(this,n))},concat(...n){return _r(this).concat(...n.map(e=>nt(e)?_r(e):e))},entries(){return aa(this,"entries",n=>(n[1]=Ni(this,n[1]),n))},every(n,e){return ri(this,"every",n,e,void 0,arguments)},filter(n,e){return ri(this,"filter",n,e,t=>t.map(i=>Ni(this,i)),arguments)},find(n,e){return ri(this,"find",n,e,t=>Ni(this,t),arguments)},findIndex(n,e){return ri(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ri(this,"findLast",n,e,t=>Ni(this,t),arguments)},findLastIndex(n,e){return ri(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ri(this,"forEach",n,e,void 0,arguments)},includes(...n){return la(this,"includes",n)},indexOf(...n){return la(this,"indexOf",n)},join(n){return _r(this).join(n)},lastIndexOf(...n){return la(this,"lastIndexOf",n)},map(n,e){return ri(this,"map",n,e,void 0,arguments)},pop(){return ss(this,"pop")},push(...n){return ss(this,"push",n)},reduce(n,...e){return Zc(this,"reduce",n,e)},reduceRight(n,...e){return Zc(this,"reduceRight",n,e)},shift(){return ss(this,"shift")},some(n,e){return ri(this,"some",n,e,void 0,arguments)},splice(...n){return ss(this,"splice",n)},toReversed(){return _r(this).toReversed()},toSorted(n){return _r(this).toSorted(n)},toSpliced(...n){return _r(this).toSpliced(...n)},unshift(...n){return ss(this,"unshift",n)},values(){return aa(this,"values",n=>Ni(this,n))}};function aa(n,e,t){const i=Vo(n),r=i[e]();return i!==n&&!Un(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const rp=Array.prototype;function ri(n,e,t,i,r,s){const a=Vo(n),l=a!==n&&!Un(n),c=a[e];if(c!==rp[e]){const d=c.apply(n,s);return l?Hn(d):d}let u=t;a!==n&&(l?u=function(d,x){return t.call(this,Ni(n,d),x,n)}:t.length>2&&(u=function(d,x){return t.call(this,d,x,n)}));const h=c.call(a,u,i);return l&&r?r(h):h}function Zc(n,e,t,i){const r=Vo(n);let s=t;return r!==n&&(Un(n)?t.length>3&&(s=function(a,l,c){return t.call(this,a,l,c,n)}):s=function(a,l,c){return t.call(this,a,Ni(n,l),c,n)}),r[e](s,...i)}function la(n,e,t){const i=St(n);Qt(i,"iterate",Ts);const r=i[e](...t);return(r===-1||r===!1)&&cc(t[0])?(t[0]=St(t[0]),i[e](...t)):r}function ss(n,e,t=[]){Si(),nc();const i=St(n)[e].apply(n,t);return ic(),bi(),i}const sp=$l("__proto__,__v_isRef,__isVue"),Yf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ji));function op(n){ji(n)||(n=String(n));const e=St(this);return Qt(e,"has",n),e.hasOwnProperty(n)}class Kf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?xp:Qf:s?Jf:Zf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=nt(e);if(!r){let c;if(a&&(c=ip[t]))return c;if(t==="hasOwnProperty")return op}const l=Reflect.get(e,t,en(e)?e:i);if((ji(t)?Yf.has(t):sp(t))||(r||Qt(e,"get",t),s))return l;if(en(l)){const c=a&&Ql(t)?l:l.value;return r&&Nt(c)?el(c):c}return Nt(l)?r?el(l):ac(l):l}}class $f extends Kf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=nt(e)&&Ql(t);if(!this._isShallow){const u=yi(s);if(!Un(i)&&!yi(i)&&(s=St(s),i=St(i)),!a&&en(s)&&!en(i))return u||(s.value=i),!0}const l=a?Number(t)<e.length:bt(e,t),c=Reflect.set(e,t,i,en(e)?e:r);return e===St(r)&&(l?Hi(i,s)&&di(e,"set",t,i):di(e,"add",t,i)),c}deleteProperty(e,t){const i=bt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&di(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!ji(t)||!Yf.has(t))&&Qt(e,"has",t),i}ownKeys(e){return Qt(e,"iterate",nt(e)?"length":lr),Reflect.ownKeys(e)}}class ap extends Kf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const lp=new $f,cp=new ap,up=new $f(!0);const Qa=n=>n,qs=n=>Reflect.getPrototypeOf(n);function fp(n,e,t){return function(...i){const r=this.__v_raw,s=St(r),a=Or(s),l=n==="entries"||n===Symbol.iterator&&a,c=n==="keys"&&a,u=r[n](...i),h=t?Qa:e?kr:Hn;return!e&&Qt(s,"iterate",c?Ja:lr),{next(){const{value:d,done:x}=u.next();return x?{value:d,done:x}:{value:l?[h(d[0]),h(d[1])]:h(d),done:x}},[Symbol.iterator](){return this}}}}function Ys(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function hp(n,e){const t={get(r){const s=this.__v_raw,a=St(s),l=St(r);n||(Hi(r,l)&&Qt(a,"get",r),Qt(a,"get",l));const{has:c}=qs(a),u=e?Qa:n?kr:Hn;if(c.call(a,r))return u(s.get(r));if(c.call(a,l))return u(s.get(l));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Qt(St(r),"iterate",lr),r.size},has(r){const s=this.__v_raw,a=St(s),l=St(r);return n||(Hi(r,l)&&Qt(a,"has",r),Qt(a,"has",l)),r===l?s.has(r):s.has(r)||s.has(l)},forEach(r,s){const a=this,l=a.__v_raw,c=St(l),u=e?Qa:n?kr:Hn;return!n&&Qt(c,"iterate",lr),l.forEach((h,d)=>r.call(s,u(h),u(d),a))}};return tn(t,n?{add:Ys("add"),set:Ys("set"),delete:Ys("delete"),clear:Ys("clear")}:{add(r){!e&&!Un(r)&&!yi(r)&&(r=St(r));const s=St(this);return qs(s).has.call(s,r)||(s.add(r),di(s,"add",r,r)),this},set(r,s){!e&&!Un(s)&&!yi(s)&&(s=St(s));const a=St(this),{has:l,get:c}=qs(a);let u=l.call(a,r);u||(r=St(r),u=l.call(a,r));const h=c.call(a,r);return a.set(r,s),u?Hi(s,h)&&di(a,"set",r,s):di(a,"add",r,s),this},delete(r){const s=St(this),{has:a,get:l}=qs(s);let c=a.call(s,r);c||(r=St(r),c=a.call(s,r)),l&&l.call(s,r);const u=s.delete(r);return c&&di(s,"delete",r,void 0),u},clear(){const r=St(this),s=r.size!==0,a=r.clear();return s&&di(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=fp(r,n,e)}),t}function oc(n,e){const t=hp(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(bt(t,r)&&r in i?t:i,r,s)}const dp={get:oc(!1,!1)},pp={get:oc(!1,!0)},mp={get:oc(!0,!1)};const Zf=new WeakMap,Jf=new WeakMap,Qf=new WeakMap,xp=new WeakMap;function gp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _p(n){return n.__v_skip||!Object.isExtensible(n)?0:gp(Wd(n))}function ac(n){return yi(n)?n:lc(n,!1,lp,dp,Zf)}function vp(n){return lc(n,!1,up,pp,Jf)}function el(n){return lc(n,!0,cp,mp,Qf)}function lc(n,e,t,i,r){if(!Nt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=_p(n);if(s===0)return n;const a=r.get(n);if(a)return a;const l=new Proxy(n,s===2?i:t);return r.set(n,l),l}function cr(n){return yi(n)?cr(n.__v_raw):!!(n&&n.__v_isReactive)}function yi(n){return!!(n&&n.__v_isReadonly)}function Un(n){return!!(n&&n.__v_isShallow)}function cc(n){return n?!!n.__v_raw:!1}function St(n){const e=n&&n.__v_raw;return e?St(e):n}function Mp(n){return!bt(n,"__v_skip")&&Object.isExtensible(n)&&Nf(n,"__v_skip",!0),n}const Hn=n=>Nt(n)?ac(n):n,kr=n=>Nt(n)?el(n):n;function en(n){return n?n.__v_isRef===!0:!1}function Ci(n){return Sp(n,!1)}function Sp(n,e){return en(n)?n:new bp(n,e)}class bp{constructor(e,t){this.dep=new sc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:St(e),this._value=t?e:Hn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Un(e)||yi(e);e=i?e:St(e),Hi(e,t)&&(this._rawValue=e,this._value=i?e:Hn(e),this.dep.trigger())}}function yp(n){return en(n)?n.value:n}const Ep={get:(n,e,t)=>e==="__v_raw"?n:yp(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return en(r)&&!en(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function eh(n){return cr(n)?n:new Proxy(n,Ep)}class Tp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new sc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Es-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Dt!==this)return Gf(this,!0),!0}get value(){const e=this.dep.track();return Xf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ap(n,e,t=!1){let i,r;return rt(n)?i=n:(i=n.get,r=n.set),new Tp(i,r,t)}const Ks={},wo=new WeakMap;let ir;function wp(n,e=!1,t=ir){if(t){let i=wo.get(t);i||wo.set(t,i=[]),i.push(n)}}function Rp(n,e,t=wt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:l,call:c}=t,u=A=>r?A:Un(A)||r===!1||r===0?pi(A,1):pi(A);let h,d,x,g,S=!1,T=!1;if(en(n)?(d=()=>n.value,S=Un(n)):cr(n)?(d=()=>u(n),S=!0):nt(n)?(T=!0,S=n.some(A=>cr(A)||Un(A)),d=()=>n.map(A=>{if(en(A))return A.value;if(cr(A))return u(A);if(rt(A))return c?c(A,2):A()})):rt(n)?e?d=c?()=>c(n,2):n:d=()=>{if(x){Si();try{x()}finally{bi()}}const A=ir;ir=h;try{return c?c(n,3,[g]):n(g)}finally{ir=A}}:d=Kn,e&&r){const A=d,O=r===!0?1/0:r;d=()=>pi(A(),O)}const _=ep(),m=()=>{h.stop(),_&&_.active&&Jl(_.effects,h)};if(s&&e){const A=e;e=(...O)=>{A(...O),m()}}let C=T?new Array(n.length).fill(Ks):Ks;const R=A=>{if(!(!(h.flags&1)||!h.dirty&&!A))if(e){const O=h.run();if(r||S||(T?O.some((L,B)=>Hi(L,C[B])):Hi(O,C))){x&&x();const L=ir;ir=h;try{const B=[O,C===Ks?void 0:T&&C[0]===Ks?[]:C,g];C=O,c?c(e,3,B):e(...B)}finally{ir=L}}}else h.run()};return l&&l(R),h=new Vf(d),h.scheduler=a?()=>a(R,!1):R,g=A=>wp(A,!1,h),x=h.onStop=()=>{const A=wo.get(h);if(A){if(c)c(A,4);else for(const O of A)O();wo.delete(h)}},e?i?R(!0):C=h.run():a?a(R.bind(null,!0),!0):h.run(),m.pause=h.pause.bind(h),m.resume=h.resume.bind(h),m.stop=m,m}function pi(n,e=1/0,t){if(e<=0||!Nt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,en(n))pi(n.value,e,t);else if(nt(n))for(let i=0;i<n.length;i++)pi(n[i],e,t);else if(Df(n)||Or(n))n.forEach(i=>{pi(i,e,t)});else if(If(n)){for(const i in n)pi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&pi(n[i],e,t)}return n}function Is(n,e,t,i){try{return i?n(...i):n()}catch(r){Ho(r,e,t)}}function Zn(n,e,t,i){if(rt(n)){const r=Is(n,e,t,i);return r&&Lf(r)&&r.catch(s=>{Ho(s,e,t)}),r}if(nt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Zn(n[s],e,t,i));return r}}function Ho(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||wt;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const h=l.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](n,c,u)===!1)return}l=l.parent}if(s){Si(),Is(s,null,10,[n,c,u]),bi();return}}Cp(n,t,r,i,a)}function Cp(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const an=[];let Wn=-1;const zr=[];let Oi=null,Ir=0;const th=Promise.resolve();let Ro=null;function Pp(n){const e=Ro||th;return n?e.then(this?n.bind(this):n):e}function Dp(n){let e=Wn+1,t=an.length;for(;e<t;){const i=e+t>>>1,r=an[i],s=As(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function uc(n){if(!(n.flags&1)){const e=As(n),t=an[an.length-1];!t||!(n.flags&2)&&e>=As(t)?an.push(n):an.splice(Dp(e),0,n),n.flags|=1,nh()}}function nh(){Ro||(Ro=th.then(rh))}function Lp(n){nt(n)?zr.push(...n):Oi&&n.id===-1?Oi.splice(Ir+1,0,n):n.flags&1||(zr.push(n),n.flags|=1),nh()}function Jc(n,e,t=Wn+1){for(;t<an.length;t++){const i=an[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;an.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ih(n){if(zr.length){const e=[...new Set(zr)].sort((t,i)=>As(t)-As(i));if(zr.length=0,Oi){Oi.push(...e);return}for(Oi=e,Ir=0;Ir<Oi.length;Ir++){const t=Oi[Ir];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Oi=null,Ir=0}}const As=n=>n.id==null?n.flags&2?-1:1/0:n.id;function rh(n){try{for(Wn=0;Wn<an.length;Wn++){const e=an[Wn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Is(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Wn<an.length;Wn++){const e=an[Wn];e&&(e.flags&=-2)}Wn=-1,an.length=0,ih(),Ro=null,(an.length||zr.length)&&rh()}}let Dn=null,sh=null;function Co(n){const e=Dn;return Dn=n,sh=n&&n.type.__scopeId||null,e}function Up(n,e=Dn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&lu(-1);const s=Co(e);let a;try{a=n(...r)}finally{Co(s),i._d&&lu(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Ip(n,e){if(Dn===null)return n;const t=Xo(Dn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,l,c=wt]=e[r];s&&(rt(s)&&(s={mounted:s,updated:s}),s.deep&&pi(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function Ki(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const l=r[a];s&&(l.oldValue=s[a].value);let c=l.dir[i];c&&(Si(),Zn(c,t,8,[n.el,l,n,e]),bi())}}const Fp=Symbol("_vte"),Np=n=>n.__isTeleport,Op=Symbol("_leaveCb");function fc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,fc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function oh(n,e){return rt(n)?tn({name:n.name},e,{setup:n}):n}function ah(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Po=new WeakMap;function vs(n,e,t,i,r=!1){if(nt(n)){n.forEach((S,T)=>vs(S,e&&(nt(e)?e[T]:e),t,i,r));return}if(Ms(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&vs(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Xo(i.component):i.el,a=r?null:s,{i:l,r:c}=n,u=e&&e.r,h=l.refs===wt?l.refs={}:l.refs,d=l.setupState,x=St(d),g=d===wt?Pf:S=>bt(x,S);if(u!=null&&u!==c){if(Qc(e),Ht(u))h[u]=null,g(u)&&(d[u]=null);else if(en(u)){u.value=null;const S=e;S.k&&(h[S.k]=null)}}if(rt(c))Is(c,l,12,[a,h]);else{const S=Ht(c),T=en(c);if(S||T){const _=()=>{if(n.f){const m=S?g(c)?d[c]:h[c]:c.value;if(r)nt(m)&&Jl(m,s);else if(nt(m))m.includes(s)||m.push(s);else if(S)h[c]=[s],g(c)&&(d[c]=h[c]);else{const C=[s];c.value=C,n.k&&(h[n.k]=C)}}else S?(h[c]=a,g(c)&&(d[c]=a)):T&&(c.value=a,n.k&&(h[n.k]=a))};if(a){const m=()=>{_(),Po.delete(n)};m.id=-1,Po.set(n,m),Sn(m,t)}else Qc(n),_()}}}function Qc(n){const e=Po.get(n);e&&(e.flags|=8,Po.delete(n))}zo().requestIdleCallback;zo().cancelIdleCallback;const Ms=n=>!!n.type.__asyncLoader,lh=n=>n.type.__isKeepAlive;function Bp(n,e){ch(n,"a",e)}function zp(n,e){ch(n,"da",e)}function ch(n,e,t=ln){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Go(e,i,t),t){let r=t.parent;for(;r&&r.parent;)lh(r.parent.vnode)&&Vp(i,e,t,r),r=r.parent}}function Vp(n,e,t,i){const r=Go(e,n,i,!0);hh(()=>{Jl(i[e],r)},t)}function Go(n,e,t=ln,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Si();const l=Fs(t),c=Zn(e,t,n,a);return l(),bi(),c});return i?r.unshift(s):r.push(s),s}}const Ti=n=>(e,t=ln)=>{(!Rs||n==="sp")&&Go(n,(...i)=>e(...i),t)},Hp=Ti("bm"),uh=Ti("m"),Gp=Ti("bu"),kp=Ti("u"),fh=Ti("bum"),hh=Ti("um"),Wp=Ti("sp"),Xp=Ti("rtg"),jp=Ti("rtc");function qp(n,e=ln){Go("ec",n,e)}const Yp=Symbol.for("v-ndc");function Kp(n,e,t,i){let r;const s=t,a=nt(n);if(a||Ht(n)){const l=a&&cr(n);let c=!1,u=!1;l&&(c=!Un(n),u=yi(n),n=Vo(n)),r=new Array(n.length);for(let h=0,d=n.length;h<d;h++)r[h]=e(c?u?kr(Hn(n[h])):Hn(n[h]):n[h],h,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let l=0;l<n;l++)r[l]=e(l+1,l,void 0,s)}else if(Nt(n))if(n[Symbol.iterator])r=Array.from(n,(l,c)=>e(l,c,void 0,s));else{const l=Object.keys(n);r=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const h=l[c];r[c]=e(n[h],h,c,s)}}else r=[];return r}const tl=n=>n?Ih(n)?Xo(n):tl(n.parent):null,Ss=tn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>tl(n.parent),$root:n=>tl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ph(n),$forceUpdate:n=>n.f||(n.f=()=>{uc(n.update)}),$nextTick:n=>n.n||(n.n=Pp.bind(n.proxy)),$watch:n=>a0.bind(n)}),ca=(n,e)=>n!==wt&&!n.__isScriptSetup&&bt(n,e),$p={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:l,appContext:c}=n;if(e[0]!=="$"){const x=a[e];if(x!==void 0)switch(x){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ca(i,e))return a[e]=1,i[e];if(r!==wt&&bt(r,e))return a[e]=2,r[e];if(bt(s,e))return a[e]=3,s[e];if(t!==wt&&bt(t,e))return a[e]=4,t[e];nl&&(a[e]=0)}}const u=Ss[e];let h,d;if(u)return e==="$attrs"&&Qt(n.attrs,"get",""),u(n);if((h=l.__cssModules)&&(h=h[e]))return h;if(t!==wt&&bt(t,e))return a[e]=4,t[e];if(d=c.config.globalProperties,bt(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return ca(r,e)?(r[e]=t,!0):i!==wt&&bt(i,e)?(i[e]=t,!0):bt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},l){let c;return!!(t[l]||n!==wt&&l[0]!=="$"&&bt(n,l)||ca(e,l)||bt(s,l)||bt(i,l)||bt(Ss,l)||bt(r.config.globalProperties,l)||(c=a.__cssModules)&&c[l])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:bt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function eu(n){return nt(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let nl=!0;function Zp(n){const e=ph(n),t=n.proxy,i=n.ctx;nl=!1,e.beforeCreate&&tu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:l,provide:c,inject:u,created:h,beforeMount:d,mounted:x,beforeUpdate:g,updated:S,activated:T,deactivated:_,beforeDestroy:m,beforeUnmount:C,destroyed:R,unmounted:A,render:O,renderTracked:L,renderTriggered:B,errorCaptured:W,serverPrefetch:P,expose:E,inheritAttrs:z,components:Z,directives:ie,filters:de}=e;if(u&&Jp(u,i,null),a)for(const fe in a){const K=a[fe];rt(K)&&(i[fe]=K.bind(t))}if(r){const fe=r.call(t,t);Nt(fe)&&(n.data=ac(fe))}if(nl=!0,s)for(const fe in s){const K=s[fe],ae=rt(K)?K.bind(t,t):rt(K.get)?K.get.bind(t,t):Kn,le=!rt(K)&&rt(K.set)?K.set.bind(t):Kn,Te=H0({get:ae,set:le});Object.defineProperty(i,fe,{enumerable:!0,configurable:!0,get:()=>Te.value,set:We=>Te.value=We})}if(l)for(const fe in l)dh(l[fe],i,t,fe);if(c){const fe=rt(c)?c.call(t):c;Reflect.ownKeys(fe).forEach(K=>{r0(K,fe[K])})}h&&tu(h,n,"c");function ce(fe,K){nt(K)?K.forEach(ae=>fe(ae.bind(t))):K&&fe(K.bind(t))}if(ce(Hp,d),ce(uh,x),ce(Gp,g),ce(kp,S),ce(Bp,T),ce(zp,_),ce(qp,W),ce(jp,L),ce(Xp,B),ce(fh,C),ce(hh,A),ce(Wp,P),nt(E))if(E.length){const fe=n.exposed||(n.exposed={});E.forEach(K=>{Object.defineProperty(fe,K,{get:()=>t[K],set:ae=>t[K]=ae,enumerable:!0})})}else n.exposed||(n.exposed={});O&&n.render===Kn&&(n.render=O),z!=null&&(n.inheritAttrs=z),Z&&(n.components=Z),ie&&(n.directives=ie),P&&ah(n)}function Jp(n,e,t=Kn){nt(n)&&(n=il(n));for(const i in n){const r=n[i];let s;Nt(r)?"default"in r?s=vo(r.from||i,r.default,!0):s=vo(r.from||i):s=vo(r),en(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function tu(n,e,t){Zn(nt(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function dh(n,e,t,i){let r=i.includes(".")?gh(t,i):()=>t[i];if(Ht(n)){const s=e[n];rt(s)&&ua(r,s)}else if(rt(n))ua(r,n.bind(t));else if(Nt(n))if(nt(n))n.forEach(s=>dh(s,e,t,i));else{const s=rt(n.handler)?n.handler.bind(t):e[n.handler];rt(s)&&ua(r,s,n)}}function ph(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,l=s.get(e);let c;return l?c=l:!r.length&&!t&&!i?c=e:(c={},r.length&&r.forEach(u=>Do(c,u,a,!0)),Do(c,e,a)),Nt(e)&&s.set(e,c),c}function Do(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Do(n,s,t,!0),r&&r.forEach(a=>Do(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const l=Qp[a]||t&&t[a];n[a]=l?l(n[a],e[a]):e[a]}return n}const Qp={data:nu,props:iu,emits:iu,methods:ps,computed:ps,beforeCreate:sn,created:sn,beforeMount:sn,mounted:sn,beforeUpdate:sn,updated:sn,beforeDestroy:sn,beforeUnmount:sn,destroyed:sn,unmounted:sn,activated:sn,deactivated:sn,errorCaptured:sn,serverPrefetch:sn,components:ps,directives:ps,watch:t0,provide:nu,inject:e0};function nu(n,e){return e?n?function(){return tn(rt(n)?n.call(this,this):n,rt(e)?e.call(this,this):e)}:e:n}function e0(n,e){return ps(il(n),il(e))}function il(n){if(nt(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function sn(n,e){return n?[...new Set([].concat(n,e))]:e}function ps(n,e){return n?tn(Object.create(null),n,e):e}function iu(n,e){return n?nt(n)&&nt(e)?[...new Set([...n,...e])]:tn(Object.create(null),eu(n),eu(e??{})):e}function t0(n,e){if(!n)return e;if(!e)return n;const t=tn(Object.create(null),n);for(const i in e)t[i]=sn(n[i],e[i]);return t}function mh(){return{app:null,config:{isNativeTag:Pf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let n0=0;function i0(n,e){return function(i,r=null){rt(i)||(i=tn({},i)),r!=null&&!Nt(r)&&(r=null);const s=mh(),a=new WeakSet,l=[];let c=!1;const u=s.app={_uid:n0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:G0,get config(){return s.config},set config(h){},use(h,...d){return a.has(h)||(h&&rt(h.install)?(a.add(h),h.install(u,...d)):rt(h)&&(a.add(h),h(u,...d))),u},mixin(h){return s.mixins.includes(h)||s.mixins.push(h),u},component(h,d){return d?(s.components[h]=d,u):s.components[h]},directive(h,d){return d?(s.directives[h]=d,u):s.directives[h]},mount(h,d,x){if(!c){const g=u._ceVNode||_i(i,r);return g.appContext=s,x===!0?x="svg":x===!1&&(x=void 0),n(g,h,x),c=!0,u._container=h,h.__vue_app__=u,Xo(g.component)}},onUnmount(h){l.push(h)},unmount(){c&&(Zn(l,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(h,d){return s.provides[h]=d,u},runWithContext(h){const d=Vr;Vr=u;try{return h()}finally{Vr=d}}};return u}}let Vr=null;function r0(n,e){if(ln){let t=ln.provides;const i=ln.parent&&ln.parent.provides;i===t&&(t=ln.provides=Object.create(i)),t[n]=e}}function vo(n,e,t=!1){const i=F0();if(i||Vr){let r=Vr?Vr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&rt(e)?e.call(i&&i.proxy):e}}const s0=Symbol.for("v-scx"),o0=()=>vo(s0);function ua(n,e,t){return xh(n,e,t)}function xh(n,e,t=wt){const{immediate:i,deep:r,flush:s,once:a}=t,l=tn({},t),c=e&&i||!e&&s!=="post";let u;if(Rs){if(s==="sync"){const g=o0();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=Kn,g.resume=Kn,g.pause=Kn,g}}const h=ln;l.call=(g,S,T)=>Zn(g,h,S,T);let d=!1;s==="post"?l.scheduler=g=>{Sn(g,h&&h.suspense)}:s!=="sync"&&(d=!0,l.scheduler=(g,S)=>{S?g():uc(g)}),l.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const x=Rp(n,e,l);return Rs&&(u?u.push(x):c&&x()),x}function a0(n,e,t){const i=this.proxy,r=Ht(n)?n.includes(".")?gh(i,n):()=>i[n]:n.bind(i,i);let s;rt(e)?s=e:(s=e.handler,t=e);const a=Fs(this),l=xh(r,s.bind(i),t);return a(),l}function gh(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const l0=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ki(e)}Modifiers`]||n[`${hr(e)}Modifiers`];function c0(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||wt;let r=t;const s=e.startsWith("update:"),a=s&&l0(i,e.slice(7));a&&(a.trim&&(r=t.map(h=>Ht(h)?h.trim():h)),a.number&&(r=t.map(ec)));let l,c=i[l=ra(e)]||i[l=ra(ki(e))];!c&&s&&(c=i[l=ra(hr(e))]),c&&Zn(c,n,6,r);const u=i[l+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,Zn(u,n,6,r)}}const u0=new WeakMap;function _h(n,e,t=!1){const i=t?u0:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},l=!1;if(!rt(n)){const c=u=>{const h=_h(u,e,!0);h&&(l=!0,tn(a,h))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!s&&!l?(Nt(n)&&i.set(n,null),null):(nt(s)?s.forEach(c=>a[c]=null):tn(a,s),Nt(n)&&i.set(n,a),a)}function ko(n,e){return!n||!No(e)?!1:(e=e.slice(2).replace(/Once$/,""),bt(n,e[0].toLowerCase()+e.slice(1))||bt(n,hr(e))||bt(n,e))}function ru(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:l,emit:c,render:u,renderCache:h,props:d,data:x,setupState:g,ctx:S,inheritAttrs:T}=n,_=Co(n);let m,C;try{if(t.shapeFlag&4){const A=r||i,O=A;m=jn(u.call(O,A,h,d,g,x,S)),C=l}else{const A=e;m=jn(A.length>1?A(d,{attrs:l,slots:a,emit:c}):A(d,null)),C=e.props?l:f0(l)}}catch(A){bs.length=0,Ho(A,n,1),m=_i(Wi)}let R=m;if(C&&T!==!1){const A=Object.keys(C),{shapeFlag:O}=R;A.length&&O&7&&(s&&A.some(Zl)&&(C=h0(C,s)),R=Wr(R,C,!1,!0))}return t.dirs&&(R=Wr(R,null,!1,!0),R.dirs=R.dirs?R.dirs.concat(t.dirs):t.dirs),t.transition&&fc(R,t.transition),m=R,Co(_),m}const f0=n=>{let e;for(const t in n)(t==="class"||t==="style"||No(t))&&((e||(e={}))[t]=n[t]);return e},h0=(n,e)=>{const t={};for(const i in n)(!Zl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function d0(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:l,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?su(i,a,u):!!a;if(c&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const x=h[d];if(a[x]!==i[x]&&!ko(u,x))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:i===a?!1:i?a?su(i,a,u):!0:!!a;return!1}function su(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!ko(t,s))return!0}return!1}function p0({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const vh={},Mh=()=>Object.create(vh),Sh=n=>Object.getPrototypeOf(n)===vh;function m0(n,e,t,i=!1){const r={},s=Mh();n.propsDefaults=Object.create(null),bh(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:vp(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function x0(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,l=St(r),[c]=n.propsOptions;let u=!1;if((i||a>0)&&!(a&16)){if(a&8){const h=n.vnode.dynamicProps;for(let d=0;d<h.length;d++){let x=h[d];if(ko(n.emitsOptions,x))continue;const g=e[x];if(c)if(bt(s,x))g!==s[x]&&(s[x]=g,u=!0);else{const S=ki(x);r[S]=rl(c,l,S,g,n,!1)}else g!==s[x]&&(s[x]=g,u=!0)}}}else{bh(n,e,r,s)&&(u=!0);let h;for(const d in l)(!e||!bt(e,d)&&((h=hr(d))===d||!bt(e,h)))&&(c?t&&(t[d]!==void 0||t[h]!==void 0)&&(r[d]=rl(c,l,d,void 0,n,!0)):delete r[d]);if(s!==l)for(const d in s)(!e||!bt(e,d))&&(delete s[d],u=!0)}u&&di(n.attrs,"set","")}function bh(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,l;if(e)for(let c in e){if(xs(c))continue;const u=e[c];let h;r&&bt(r,h=ki(c))?!s||!s.includes(h)?t[h]=u:(l||(l={}))[h]=u:ko(n.emitsOptions,c)||(!(c in i)||u!==i[c])&&(i[c]=u,a=!0)}if(s){const c=St(t),u=l||wt;for(let h=0;h<s.length;h++){const d=s[h];t[d]=rl(r,c,d,u[d],n,!bt(u,d))}}return a}function rl(n,e,t,i,r,s){const a=n[t];if(a!=null){const l=bt(a,"default");if(l&&i===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&rt(c)){const{propsDefaults:u}=r;if(t in u)i=u[t];else{const h=Fs(r);i=u[t]=c.call(null,e),h()}}else i=c;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!l?i=!1:a[1]&&(i===""||i===hr(t))&&(i=!0))}return i}const g0=new WeakMap;function yh(n,e,t=!1){const i=t?g0:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},l=[];let c=!1;if(!rt(n)){const h=d=>{c=!0;const[x,g]=yh(d,e,!0);tn(a,x),g&&l.push(...g)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!s&&!c)return Nt(n)&&i.set(n,Nr),Nr;if(nt(s))for(let h=0;h<s.length;h++){const d=ki(s[h]);ou(d)&&(a[d]=wt)}else if(s)for(const h in s){const d=ki(h);if(ou(d)){const x=s[h],g=a[d]=nt(x)||rt(x)?{type:x}:tn({},x),S=g.type;let T=!1,_=!0;if(nt(S))for(let m=0;m<S.length;++m){const C=S[m],R=rt(C)&&C.name;if(R==="Boolean"){T=!0;break}else R==="String"&&(_=!1)}else T=rt(S)&&S.name==="Boolean";g[0]=T,g[1]=_,(T||bt(g,"default"))&&l.push(d)}}const u=[a,l];return Nt(n)&&i.set(n,u),u}function ou(n){return n[0]!=="$"&&!xs(n)}const hc=n=>n==="_"||n==="_ctx"||n==="$stable",dc=n=>nt(n)?n.map(jn):[jn(n)],_0=(n,e,t)=>{if(e._n)return e;const i=Up((...r)=>dc(e(...r)),t);return i._c=!1,i},Eh=(n,e,t)=>{const i=n._ctx;for(const r in n){if(hc(r))continue;const s=n[r];if(rt(s))e[r]=_0(r,s,i);else if(s!=null){const a=dc(s);e[r]=()=>a}}},Th=(n,e)=>{const t=dc(e);n.slots.default=()=>t},Ah=(n,e,t)=>{for(const i in e)(t||!hc(i))&&(n[i]=e[i])},v0=(n,e,t)=>{const i=n.slots=Mh();if(n.vnode.shapeFlag&32){const r=e._;r?(Ah(i,e,t),t&&Nf(i,"_",r,!0)):Eh(e,i)}else e&&Th(n,e)},M0=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=wt;if(i.shapeFlag&32){const l=e._;l?t&&l===1?s=!1:Ah(r,e,t):(s=!e.$stable,Eh(e,r)),a=e}else e&&(Th(n,e),a={default:1});if(s)for(const l in r)!hc(l)&&a[l]==null&&delete r[l]},Sn=T0;function S0(n){return b0(n)}function b0(n,e){const t=zo();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:l,createComment:c,setText:u,setElementText:h,parentNode:d,nextSibling:x,setScopeId:g=Kn,insertStaticContent:S}=n,T=(F,N,j,w=null,re=null,se=null,_e=void 0,te=null,xe=!!N.dynamicChildren)=>{if(F===N)return;F&&!os(F,N)&&(w=ge(F),We(F,re,se,!0),F=null),N.patchFlag===-2&&(xe=!1,N.dynamicChildren=null);const{type:$,ref:ve,shapeFlag:b}=N;switch($){case Wo:_(F,N,j,w);break;case Wi:m(F,N,j,w);break;case ha:F==null&&C(N,j,w,_e);break;case Xn:Z(F,N,j,w,re,se,_e,te,xe);break;default:b&1?O(F,N,j,w,re,se,_e,te,xe):b&6?ie(F,N,j,w,re,se,_e,te,xe):(b&64||b&128)&&$.process(F,N,j,w,re,se,_e,te,xe,Ge)}ve!=null&&re?vs(ve,F&&F.ref,se,N||F,!N):ve==null&&F&&F.ref!=null&&vs(F.ref,null,se,F,!0)},_=(F,N,j,w)=>{if(F==null)i(N.el=l(N.children),j,w);else{const re=N.el=F.el;N.children!==F.children&&u(re,N.children)}},m=(F,N,j,w)=>{F==null?i(N.el=c(N.children||""),j,w):N.el=F.el},C=(F,N,j,w)=>{[F.el,F.anchor]=S(F.children,N,j,w,F.el,F.anchor)},R=({el:F,anchor:N},j,w)=>{let re;for(;F&&F!==N;)re=x(F),i(F,j,w),F=re;i(N,j,w)},A=({el:F,anchor:N})=>{let j;for(;F&&F!==N;)j=x(F),r(F),F=j;r(N)},O=(F,N,j,w,re,se,_e,te,xe)=>{if(N.type==="svg"?_e="svg":N.type==="math"&&(_e="mathml"),F==null)L(N,j,w,re,se,_e,te,xe);else{const $=F.el&&F.el._isVueCE?F.el:null;try{$&&$._beginPatch(),P(F,N,re,se,_e,te,xe)}finally{$&&$._endPatch()}}},L=(F,N,j,w,re,se,_e,te)=>{let xe,$;const{props:ve,shapeFlag:b,transition:v,dirs:H}=F;if(xe=F.el=a(F.type,se,ve&&ve.is,ve),b&8?h(xe,F.children):b&16&&W(F.children,xe,null,w,re,fa(F,se),_e,te),H&&Ki(F,null,w,"created"),B(xe,F,F.scopeId,_e,w),ve){for(const oe in ve)oe!=="value"&&!xs(oe)&&s(xe,oe,null,ve[oe],se,w);"value"in ve&&s(xe,"value",null,ve.value,se),($=ve.onVnodeBeforeMount)&&kn($,w,F)}H&&Ki(F,null,w,"beforeMount");const J=y0(re,v);J&&v.beforeEnter(xe),i(xe,N,j),(($=ve&&ve.onVnodeMounted)||J||H)&&Sn(()=>{$&&kn($,w,F),J&&v.enter(xe),H&&Ki(F,null,w,"mounted")},re)},B=(F,N,j,w,re)=>{if(j&&g(F,j),w)for(let se=0;se<w.length;se++)g(F,w[se]);if(re){let se=re.subTree;if(N===se||Ch(se.type)&&(se.ssContent===N||se.ssFallback===N)){const _e=re.vnode;B(F,_e,_e.scopeId,_e.slotScopeIds,re.parent)}}},W=(F,N,j,w,re,se,_e,te,xe=0)=>{for(let $=xe;$<F.length;$++){const ve=F[$]=te?Bi(F[$]):jn(F[$]);T(null,ve,N,j,w,re,se,_e,te)}},P=(F,N,j,w,re,se,_e)=>{const te=N.el=F.el;let{patchFlag:xe,dynamicChildren:$,dirs:ve}=N;xe|=F.patchFlag&16;const b=F.props||wt,v=N.props||wt;let H;if(j&&$i(j,!1),(H=v.onVnodeBeforeUpdate)&&kn(H,j,N,F),ve&&Ki(N,F,j,"beforeUpdate"),j&&$i(j,!0),(b.innerHTML&&v.innerHTML==null||b.textContent&&v.textContent==null)&&h(te,""),$?E(F.dynamicChildren,$,te,j,w,fa(N,re),se):_e||K(F,N,te,null,j,w,fa(N,re),se,!1),xe>0){if(xe&16)z(te,b,v,j,re);else if(xe&2&&b.class!==v.class&&s(te,"class",null,v.class,re),xe&4&&s(te,"style",b.style,v.style,re),xe&8){const J=N.dynamicProps;for(let oe=0;oe<J.length;oe++){const q=J[oe],Ue=b[q],be=v[q];(be!==Ue||q==="value")&&s(te,q,Ue,be,re,j)}}xe&1&&F.children!==N.children&&h(te,N.children)}else!_e&&$==null&&z(te,b,v,j,re);((H=v.onVnodeUpdated)||ve)&&Sn(()=>{H&&kn(H,j,N,F),ve&&Ki(N,F,j,"updated")},w)},E=(F,N,j,w,re,se,_e)=>{for(let te=0;te<N.length;te++){const xe=F[te],$=N[te],ve=xe.el&&(xe.type===Xn||!os(xe,$)||xe.shapeFlag&198)?d(xe.el):j;T(xe,$,ve,null,w,re,se,_e,!0)}},z=(F,N,j,w,re)=>{if(N!==j){if(N!==wt)for(const se in N)!xs(se)&&!(se in j)&&s(F,se,N[se],null,re,w);for(const se in j){if(xs(se))continue;const _e=j[se],te=N[se];_e!==te&&se!=="value"&&s(F,se,te,_e,re,w)}"value"in j&&s(F,"value",N.value,j.value,re)}},Z=(F,N,j,w,re,se,_e,te,xe)=>{const $=N.el=F?F.el:l(""),ve=N.anchor=F?F.anchor:l("");let{patchFlag:b,dynamicChildren:v,slotScopeIds:H}=N;H&&(te=te?te.concat(H):H),F==null?(i($,j,w),i(ve,j,w),W(N.children||[],j,ve,re,se,_e,te,xe)):b>0&&b&64&&v&&F.dynamicChildren?(E(F.dynamicChildren,v,j,re,se,_e,te),(N.key!=null||re&&N===re.subTree)&&wh(F,N,!0)):K(F,N,j,ve,re,se,_e,te,xe)},ie=(F,N,j,w,re,se,_e,te,xe)=>{N.slotScopeIds=te,F==null?N.shapeFlag&512?re.ctx.activate(N,j,w,_e,xe):de(N,j,w,re,se,_e,xe):ue(F,N,xe)},de=(F,N,j,w,re,se,_e)=>{const te=F.component=I0(F,w,re);if(lh(F)&&(te.ctx.renderer=Ge),N0(te,!1,_e),te.asyncDep){if(re&&re.registerDep(te,ce,_e),!F.el){const xe=te.subTree=_i(Wi);m(null,xe,N,j),F.placeholder=xe.el}}else ce(te,F,N,j,re,se,_e)},ue=(F,N,j)=>{const w=N.component=F.component;if(d0(F,N,j))if(w.asyncDep&&!w.asyncResolved){fe(w,N,j);return}else w.next=N,w.update();else N.el=F.el,w.vnode=N},ce=(F,N,j,w,re,se,_e)=>{const te=()=>{if(F.isMounted){let{next:b,bu:v,u:H,parent:J,vnode:oe}=F;{const Fe=Rh(F);if(Fe){b&&(b.el=oe.el,fe(F,b,_e)),Fe.asyncDep.then(()=>{F.isUnmounted||te()});return}}let q=b,Ue;$i(F,!1),b?(b.el=oe.el,fe(F,b,_e)):b=oe,v&&_o(v),(Ue=b.props&&b.props.onVnodeBeforeUpdate)&&kn(Ue,J,b,oe),$i(F,!0);const be=ru(F),ze=F.subTree;F.subTree=be,T(ze,be,d(ze.el),ge(ze),F,re,se),b.el=be.el,q===null&&p0(F,be.el),H&&Sn(H,re),(Ue=b.props&&b.props.onVnodeUpdated)&&Sn(()=>kn(Ue,J,b,oe),re)}else{let b;const{el:v,props:H}=N,{bm:J,m:oe,parent:q,root:Ue,type:be}=F,ze=Ms(N);$i(F,!1),J&&_o(J),!ze&&(b=H&&H.onVnodeBeforeMount)&&kn(b,q,N),$i(F,!0);{Ue.ce&&Ue.ce._def.shadowRoot!==!1&&Ue.ce._injectChildStyle(be);const Fe=F.subTree=ru(F);T(null,Fe,j,w,F,re,se),N.el=Fe.el}if(oe&&Sn(oe,re),!ze&&(b=H&&H.onVnodeMounted)){const Fe=N;Sn(()=>kn(b,q,Fe),re)}(N.shapeFlag&256||q&&Ms(q.vnode)&&q.vnode.shapeFlag&256)&&F.a&&Sn(F.a,re),F.isMounted=!0,N=j=w=null}};F.scope.on();const xe=F.effect=new Vf(te);F.scope.off();const $=F.update=xe.run.bind(xe),ve=F.job=xe.runIfDirty.bind(xe);ve.i=F,ve.id=F.uid,xe.scheduler=()=>uc(ve),$i(F,!0),$()},fe=(F,N,j)=>{N.component=F;const w=F.vnode.props;F.vnode=N,F.next=null,x0(F,N.props,w,j),M0(F,N.children,j),Si(),Jc(F),bi()},K=(F,N,j,w,re,se,_e,te,xe=!1)=>{const $=F&&F.children,ve=F?F.shapeFlag:0,b=N.children,{patchFlag:v,shapeFlag:H}=N;if(v>0){if(v&128){le($,b,j,w,re,se,_e,te,xe);return}else if(v&256){ae($,b,j,w,re,se,_e,te,xe);return}}H&8?(ve&16&&he($,re,se),b!==$&&h(j,b)):ve&16?H&16?le($,b,j,w,re,se,_e,te,xe):he($,re,se,!0):(ve&8&&h(j,""),H&16&&W(b,j,w,re,se,_e,te,xe))},ae=(F,N,j,w,re,se,_e,te,xe)=>{F=F||Nr,N=N||Nr;const $=F.length,ve=N.length,b=Math.min($,ve);let v;for(v=0;v<b;v++){const H=N[v]=xe?Bi(N[v]):jn(N[v]);T(F[v],H,j,null,re,se,_e,te,xe)}$>ve?he(F,re,se,!0,!1,b):W(N,j,w,re,se,_e,te,xe,b)},le=(F,N,j,w,re,se,_e,te,xe)=>{let $=0;const ve=N.length;let b=F.length-1,v=ve-1;for(;$<=b&&$<=v;){const H=F[$],J=N[$]=xe?Bi(N[$]):jn(N[$]);if(os(H,J))T(H,J,j,null,re,se,_e,te,xe);else break;$++}for(;$<=b&&$<=v;){const H=F[b],J=N[v]=xe?Bi(N[v]):jn(N[v]);if(os(H,J))T(H,J,j,null,re,se,_e,te,xe);else break;b--,v--}if($>b){if($<=v){const H=v+1,J=H<ve?N[H].el:w;for(;$<=v;)T(null,N[$]=xe?Bi(N[$]):jn(N[$]),j,J,re,se,_e,te,xe),$++}}else if($>v)for(;$<=b;)We(F[$],re,se,!0),$++;else{const H=$,J=$,oe=new Map;for($=J;$<=v;$++){const Ve=N[$]=xe?Bi(N[$]):jn(N[$]);Ve.key!=null&&oe.set(Ve.key,$)}let q,Ue=0;const be=v-J+1;let ze=!1,Fe=0;const me=new Array(be);for($=0;$<be;$++)me[$]=0;for($=H;$<=b;$++){const Ve=F[$];if(Ue>=be){We(Ve,re,se,!0);continue}let ke;if(Ve.key!=null)ke=oe.get(Ve.key);else for(q=J;q<=v;q++)if(me[q-J]===0&&os(Ve,N[q])){ke=q;break}ke===void 0?We(Ve,re,se,!0):(me[ke-J]=$+1,ke>=Fe?Fe=ke:ze=!0,T(Ve,N[ke],j,null,re,se,_e,te,xe),Ue++)}const ye=ze?E0(me):Nr;for(q=ye.length-1,$=be-1;$>=0;$--){const Ve=J+$,ke=N[Ve],Le=N[Ve+1],Ke=Ve+1<ve?Le.el||Le.placeholder:w;me[$]===0?T(null,ke,j,Ke,re,se,_e,te,xe):ze&&(q<0||$!==ye[q]?Te(ke,j,Ke,2):q--)}}},Te=(F,N,j,w,re=null)=>{const{el:se,type:_e,transition:te,children:xe,shapeFlag:$}=F;if($&6){Te(F.component.subTree,N,j,w);return}if($&128){F.suspense.move(N,j,w);return}if($&64){_e.move(F,N,j,Ge);return}if(_e===Xn){i(se,N,j);for(let b=0;b<xe.length;b++)Te(xe[b],N,j,w);i(F.anchor,N,j);return}if(_e===ha){R(F,N,j);return}if(w!==2&&$&1&&te)if(w===0)te.beforeEnter(se),i(se,N,j),Sn(()=>te.enter(se),re);else{const{leave:b,delayLeave:v,afterLeave:H}=te,J=()=>{F.ctx.isUnmounted?r(se):i(se,N,j)},oe=()=>{se._isLeaving&&se[Op](!0),b(se,()=>{J(),H&&H()})};v?v(se,J,oe):oe()}else i(se,N,j)},We=(F,N,j,w=!1,re=!1)=>{const{type:se,props:_e,ref:te,children:xe,dynamicChildren:$,shapeFlag:ve,patchFlag:b,dirs:v,cacheIndex:H}=F;if(b===-2&&(re=!1),te!=null&&(Si(),vs(te,null,j,F,!0),bi()),H!=null&&(N.renderCache[H]=void 0),ve&256){N.ctx.deactivate(F);return}const J=ve&1&&v,oe=!Ms(F);let q;if(oe&&(q=_e&&_e.onVnodeBeforeUnmount)&&kn(q,N,F),ve&6)pt(F.component,j,w);else{if(ve&128){F.suspense.unmount(j,w);return}J&&Ki(F,null,N,"beforeUnmount"),ve&64?F.type.remove(F,N,j,Ge,w):$&&!$.hasOnce&&(se!==Xn||b>0&&b&64)?he($,N,j,!1,!0):(se===Xn&&b&384||!re&&ve&16)&&he(xe,N,j),w&&st(F)}(oe&&(q=_e&&_e.onVnodeUnmounted)||J)&&Sn(()=>{q&&kn(q,N,F),J&&Ki(F,null,N,"unmounted")},j)},st=F=>{const{type:N,el:j,anchor:w,transition:re}=F;if(N===Xn){ut(j,w);return}if(N===ha){A(F);return}const se=()=>{r(j),re&&!re.persisted&&re.afterLeave&&re.afterLeave()};if(F.shapeFlag&1&&re&&!re.persisted){const{leave:_e,delayLeave:te}=re,xe=()=>_e(j,se);te?te(F.el,se,xe):xe()}else se()},ut=(F,N)=>{let j;for(;F!==N;)j=x(F),r(F),F=j;r(N)},pt=(F,N,j)=>{const{bum:w,scope:re,job:se,subTree:_e,um:te,m:xe,a:$}=F;au(xe),au($),w&&_o(w),re.stop(),se&&(se.flags|=8,We(_e,F,N,j)),te&&Sn(te,N),Sn(()=>{F.isUnmounted=!0},N)},he=(F,N,j,w=!1,re=!1,se=0)=>{for(let _e=se;_e<F.length;_e++)We(F[_e],N,j,w,re)},ge=F=>{if(F.shapeFlag&6)return ge(F.component.subTree);if(F.shapeFlag&128)return F.suspense.next();const N=x(F.anchor||F.el),j=N&&N[Fp];return j?x(j):N};let Ne=!1;const Ze=(F,N,j)=>{F==null?N._vnode&&We(N._vnode,null,null,!0):T(N._vnode||null,F,N,null,null,null,j),N._vnode=F,Ne||(Ne=!0,Jc(),ih(),Ne=!1)},Ge={p:T,um:We,m:Te,r:st,mt:de,mc:W,pc:K,pbc:E,n:ge,o:n};return{render:Ze,hydrate:void 0,createApp:i0(Ze)}}function fa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function $i({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function y0(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function wh(n,e,t=!1){const i=n.children,r=e.children;if(nt(i)&&nt(r))for(let s=0;s<i.length;s++){const a=i[s];let l=r[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[s]=Bi(r[s]),l.el=a.el),!t&&l.patchFlag!==-2&&wh(a,l)),l.type===Wo&&l.patchFlag!==-1&&(l.el=a.el),l.type===Wi&&!l.el&&(l.el=a.el)}}function E0(n){const e=n.slice(),t=[0];let i,r,s,a,l;const c=n.length;for(i=0;i<c;i++){const u=n[i];if(u!==0){if(r=t[t.length-1],n[r]<u){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)l=s+a>>1,n[t[l]]<u?s=l+1:a=l;u<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Rh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Rh(e)}function au(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Ch=n=>n.__isSuspense;function T0(n,e){e&&e.pendingBranch?nt(n)?e.effects.push(...n):e.effects.push(n):Lp(n)}const Xn=Symbol.for("v-fgt"),Wo=Symbol.for("v-txt"),Wi=Symbol.for("v-cmt"),ha=Symbol.for("v-stc"),bs=[];let yn=null;function ys(n=!1){bs.push(yn=n?null:[])}function A0(){bs.pop(),yn=bs[bs.length-1]||null}let ws=1;function lu(n,e=!1){ws+=n,n<0&&yn&&e&&(yn.hasOnce=!0)}function Ph(n){return n.dynamicChildren=ws>0?yn||Nr:null,A0(),ws>0&&yn&&yn.push(n),n}function da(n,e,t,i,r,s){return Ph(Ot(n,e,t,i,r,s,!0))}function Dh(n,e,t,i,r){return Ph(_i(n,e,t,i,r,!0))}function Lh(n){return n?n.__v_isVNode===!0:!1}function os(n,e){return n.type===e.type&&n.key===e.key}const Uh=({key:n})=>n??null,Mo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ht(n)||en(n)||rt(n)?{i:Dn,r:n,k:e,f:!!t}:n:null);function Ot(n,e=null,t=null,i=0,r=null,s=n===Xn?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Uh(e),ref:e&&Mo(e),scopeId:sh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Dn};return l?(pc(c,t),s&128&&n.normalize(c)):t&&(c.shapeFlag|=Ht(t)?8:16),ws>0&&!a&&yn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&yn.push(c),c}const _i=w0;function w0(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Yp)&&(n=Wi),Lh(n)){const l=Wr(n,e,!0);return t&&pc(l,t),ws>0&&!s&&yn&&(l.shapeFlag&6?yn[yn.indexOf(n)]=l:yn.push(l)),l.patchFlag=-2,l}if(V0(n)&&(n=n.__vccOpts),e){e=R0(e);let{class:l,style:c}=e;l&&!Ht(l)&&(e.class=Br(l)),Nt(c)&&(cc(c)&&!nt(c)&&(c=tn({},c)),e.style=tc(c))}const a=Ht(n)?1:Ch(n)?128:Np(n)?64:Nt(n)?4:rt(n)?2:0;return Ot(n,e,t,i,r,a,s,!0)}function R0(n){return n?cc(n)||Sh(n)?tn({},n):n:null}function Wr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:l,transition:c}=n,u=e?D0(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Uh(u),ref:e&&e.ref?t&&s?nt(s)?s.concat(Mo(e)):[s,Mo(e)]:Mo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Xn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Wr(n.ssContent),ssFallback:n.ssFallback&&Wr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&i&&fc(h,c.clone(h)),h}function C0(n=" ",e=0){return _i(Wo,null,n,e)}function P0(n="",e=!1){return e?(ys(),Dh(Wi,null,n)):_i(Wi,null,n)}function jn(n){return n==null||typeof n=="boolean"?_i(Wi):nt(n)?_i(Xn,null,n.slice()):Lh(n)?Bi(n):_i(Wo,null,String(n))}function Bi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Wr(n)}function pc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(nt(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),pc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Sh(e)?e._ctx=Dn:r===3&&Dn&&(Dn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else rt(e)?(e={default:e,_ctx:Dn},t=32):(e=String(e),i&64?(t=16,e=[C0(e)]):t=8);n.children=e,n.shapeFlag|=t}function D0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Br([e.class,i.class]));else if(r==="style")e.style=tc([e.style,i.style]);else if(No(r)){const s=e[r],a=i[r];a&&s!==a&&!(nt(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function kn(n,e,t,i=null){Zn(n,e,7,[t,i])}const L0=mh();let U0=0;function I0(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||L0,s={uid:U0++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yh(i,r),emitsOptions:_h(i,r),emit:null,emitted:null,propsDefaults:wt,inheritAttrs:i.inheritAttrs,ctx:wt,data:wt,props:wt,attrs:wt,slots:wt,refs:wt,setupState:wt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=c0.bind(null,s),n.ce&&n.ce(s),s}let ln=null;const F0=()=>ln||Dn;let Lo,sl;{const n=zo(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Lo=e("__VUE_INSTANCE_SETTERS__",t=>ln=t),sl=e("__VUE_SSR_SETTERS__",t=>Rs=t)}const Fs=n=>{const e=ln;return Lo(n),n.scope.on(),()=>{n.scope.off(),Lo(e)}},cu=()=>{ln&&ln.scope.off(),Lo(null)};function Ih(n){return n.vnode.shapeFlag&4}let Rs=!1;function N0(n,e=!1,t=!1){e&&sl(e);const{props:i,children:r}=n.vnode,s=Ih(n);m0(n,i,s,e),v0(n,r,t||e);const a=s?O0(n,e):void 0;return e&&sl(!1),a}function O0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,$p);const{setup:i}=t;if(i){Si();const r=n.setupContext=i.length>1?z0(n):null,s=Fs(n),a=Is(i,n,0,[n.props,r]),l=Lf(a);if(bi(),s(),(l||n.sp)&&!Ms(n)&&ah(n),l){if(a.then(cu,cu),e)return a.then(c=>{uu(n,c)}).catch(c=>{Ho(c,n,0)});n.asyncDep=a}else uu(n,a)}else Fh(n)}function uu(n,e,t){rt(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Nt(e)&&(n.setupState=eh(e)),Fh(n)}function Fh(n,e,t){const i=n.type;n.render||(n.render=i.render||Kn);{const r=Fs(n);Si();try{Zp(n)}finally{bi(),r()}}}const B0={get(n,e){return Qt(n,"get",""),n[e]}};function z0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,B0),slots:n.slots,emit:n.emit,expose:e}}function Xo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(eh(Mp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ss)return Ss[t](n)},has(e,t){return t in e||t in Ss}})):n.proxy}function V0(n){return rt(n)&&"__vccOpts"in n}const H0=(n,e)=>Ap(n,e,Rs),G0="3.5.25";let ol;const fu=typeof window<"u"&&window.trustedTypes;if(fu)try{ol=fu.createPolicy("vue",{createHTML:n=>n})}catch{}const Nh=ol?n=>ol.createHTML(n):n=>n,k0="http://www.w3.org/2000/svg",W0="http://www.w3.org/1998/Math/MathML",hi=typeof document<"u"?document:null,hu=hi&&hi.createElement("template"),X0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?hi.createElementNS(k0,n):e==="mathml"?hi.createElementNS(W0,n):t?hi.createElement(n,{is:t}):hi.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>hi.createTextNode(n),createComment:n=>hi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>hi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{hu.innerHTML=Nh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const l=hu.content;if(i==="svg"||i==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},j0=Symbol("_vtc");function q0(n,e,t){const i=n[j0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const du=Symbol("_vod"),Y0=Symbol("_vsh"),K0=Symbol(""),$0=/(?:^|;)\s*display\s*:/;function Z0(n,e,t){const i=n.style,r=Ht(t);let s=!1;if(t&&!r){if(e)if(Ht(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();t[l]==null&&So(i,l,"")}else for(const a in e)t[a]==null&&So(i,a,"");for(const a in t)a==="display"&&(s=!0),So(i,a,t[a])}else if(r){if(e!==t){const a=i[K0];a&&(t+=";"+a),i.cssText=t,s=$0.test(t)}}else e&&n.removeAttribute("style");du in n&&(n[du]=s?i.display:"",n[Y0]&&(i.display="none"))}const pu=/\s*!important$/;function So(n,e,t){if(nt(t))t.forEach(i=>So(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=J0(n,e);pu.test(t)?n.setProperty(hr(i),t.replace(pu,""),"important"):n[i]=t}}const mu=["Webkit","Moz","ms"],pa={};function J0(n,e){const t=pa[e];if(t)return t;let i=ki(e);if(i!=="filter"&&i in n)return pa[e]=i;i=Ff(i);for(let r=0;r<mu.length;r++){const s=mu[r]+i;if(s in n)return pa[e]=s}return e}const xu="http://www.w3.org/1999/xlink";function gu(n,e,t,i,r,s=Jd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(xu,e.slice(6,e.length)):n.setAttributeNS(xu,e,t):t==null||s&&!Of(t)?n.removeAttribute(e):n.setAttribute(e,s?"":ji(t)?String(t):t)}function _u(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Nh(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const l=s==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Of(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function Fr(n,e,t,i){n.addEventListener(e,t,i)}function Q0(n,e,t,i){n.removeEventListener(e,t,i)}const vu=Symbol("_vei");function em(n,e,t,i,r=null){const s=n[vu]||(n[vu]={}),a=s[e];if(i&&a)a.value=i;else{const[l,c]=tm(e);if(i){const u=s[e]=rm(i,r);Fr(n,l,u,c)}else a&&(Q0(n,l,a,c),s[e]=void 0)}}const Mu=/(?:Once|Passive|Capture)$/;function tm(n){let e;if(Mu.test(n)){e={};let i;for(;i=n.match(Mu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):hr(n.slice(2)),e]}let ma=0;const nm=Promise.resolve(),im=()=>ma||(nm.then(()=>ma=0),ma=Date.now());function rm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Zn(sm(i,t.value),e,5,[i])};return t.value=n,t.attached=im(),t}function sm(n,e){if(nt(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Su=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,om=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?q0(n,i,a):e==="style"?Z0(n,t,i):No(e)?Zl(e)||em(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):am(n,e,i,a))?(_u(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&gu(n,e,i,a,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ht(i))?_u(n,ki(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),gu(n,e,i,a))};function am(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Su(e)&&rt(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Su(e)&&Ht(t)?!1:e in n}const bu=n=>{const e=n.props["onUpdate:modelValue"]||!1;return nt(e)?t=>_o(e,t):e};function lm(n){n.target.composing=!0}function yu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const xa=Symbol("_assign");function Eu(n,e,t){return e&&(n=n.trim()),t&&(n=ec(n)),n}const cm={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[xa]=bu(r);const s=i||r.props&&r.props.type==="number";Fr(n,e?"change":"input",a=>{a.target.composing||n[xa](Eu(n.value,t,s))}),(t||s)&&Fr(n,"change",()=>{n.value=Eu(n.value,t,s)}),e||(Fr(n,"compositionstart",lm),Fr(n,"compositionend",yu),Fr(n,"change",yu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[xa]=bu(a),n.composing)return;const l=(s||n.type==="number")&&!/^0\d/.test(n.value)?ec(n.value):n.value,c=e??"";l!==c&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===c)||(n.value=c))}},um=tn({patchProp:om},X0);let Tu;function fm(){return Tu||(Tu=S0(um))}const hm=((...n)=>{const e=fm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=pm(i);if(!r)return;const s=e._component;!rt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,dm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function dm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function pm(n){return Ht(n)?document.querySelector(n):n}const mc="181",mm=0,Au=1,xm=2,Oh=1,gm=2,fi=3,Xi=0,pn=1,mi=2,vi=0,Hr=1,wu=2,Ru=3,Cu=4,_m=5,sr=100,vm=101,Mm=102,Sm=103,bm=104,ym=200,Em=201,Tm=202,Am=203,al=204,ll=205,wm=206,Rm=207,Cm=208,Pm=209,Dm=210,Lm=211,Um=212,Im=213,Fm=214,cl=0,ul=1,fl=2,Xr=3,hl=4,dl=5,pl=6,ml=7,Bh=0,Nm=1,Om=2,Gi=0,Bm=1,zm=2,Vm=3,Hm=4,Gm=5,km=6,Wm=7,zh=300,jr=301,qr=302,xl=303,gl=304,jo=306,_l=1e3,xi=1001,vl=1002,En=1003,Xm=1004,$s=1005,Ln=1006,ga=1007,ar=1008,Jn=1009,Vh=1010,Hh=1011,Cs=1012,xc=1013,ur=1014,gi=1015,$r=1016,gc=1017,_c=1018,Ps=1020,Gh=35902,kh=35899,Wh=1021,Xh=1022,zn=1023,Ds=1026,Ls=1027,jh=1028,vc=1029,Mc=1030,Sc=1031,bc=1033,bo=33776,yo=33777,Eo=33778,To=33779,Ml=35840,Sl=35841,bl=35842,yl=35843,El=36196,Tl=37492,Al=37496,wl=37808,Rl=37809,Cl=37810,Pl=37811,Dl=37812,Ll=37813,Ul=37814,Il=37815,Fl=37816,Nl=37817,Ol=37818,Bl=37819,zl=37820,Vl=37821,Hl=36492,Gl=36494,kl=36495,Wl=36283,Xl=36284,jl=36285,ql=36286,jm=3200,qm=3201,qh=0,Ym=1,zi="",Pn="srgb",Yr="srgb-linear",Uo="linear",Tt="srgb",vr=7680,Pu=519,Km=512,$m=513,Zm=514,Yh=515,Jm=516,Qm=517,ex=518,tx=519,Du=35044,Lu="300 es",Yn=2e3,Io=2001;function Kh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Fo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nx(){const n=Fo("canvas");return n.style.display="block",n}const Uu={};function Iu(...n){const e="THREE."+n.shift();console.log(e,...n)}function it(...n){const e="THREE."+n.shift();console.warn(e,...n)}function zt(...n){const e="THREE."+n.shift();console.error(e,...n)}function Us(...n){const e=n.join(" ");e in Uu||(Uu[e]=!0,it(...n))}function ix(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class Zr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_a=Math.PI/180,Yl=180/Math.PI;function Ns(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function ht(n,e,t){return Math.max(e,Math.min(t,n))}function rx(n,e){return(n%e+e)%e}function va(n,e,t){return(1-t)*n+t*e}function as(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Os{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,l){let c=i[r+0],u=i[r+1],h=i[r+2],d=i[r+3],x=s[a+0],g=s[a+1],S=s[a+2],T=s[a+3];if(l<=0){e[t+0]=c,e[t+1]=u,e[t+2]=h,e[t+3]=d;return}if(l>=1){e[t+0]=x,e[t+1]=g,e[t+2]=S,e[t+3]=T;return}if(d!==T||c!==x||u!==g||h!==S){let _=c*x+u*g+h*S+d*T;_<0&&(x=-x,g=-g,S=-S,T=-T,_=-_);let m=1-l;if(_<.9995){const C=Math.acos(_),R=Math.sin(C);m=Math.sin(m*C)/R,l=Math.sin(l*C)/R,c=c*m+x*l,u=u*m+g*l,h=h*m+S*l,d=d*m+T*l}else{c=c*m+x*l,u=u*m+g*l,h=h*m+S*l,d=d*m+T*l;const C=1/Math.sqrt(c*c+u*u+h*h+d*d);c*=C,u*=C,h*=C,d*=C}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const l=i[r],c=i[r+1],u=i[r+2],h=i[r+3],d=s[a],x=s[a+1],g=s[a+2],S=s[a+3];return e[t]=l*S+h*d+c*g-u*x,e[t+1]=c*S+h*x+u*d-l*g,e[t+2]=u*S+h*g+l*x-c*d,e[t+3]=h*S-l*d-c*x-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,c=Math.sin,u=l(i/2),h=l(r/2),d=l(s/2),x=c(i/2),g=c(r/2),S=c(s/2);switch(a){case"XYZ":this._x=x*h*d+u*g*S,this._y=u*g*d-x*h*S,this._z=u*h*S+x*g*d,this._w=u*h*d-x*g*S;break;case"YXZ":this._x=x*h*d+u*g*S,this._y=u*g*d-x*h*S,this._z=u*h*S-x*g*d,this._w=u*h*d+x*g*S;break;case"ZXY":this._x=x*h*d-u*g*S,this._y=u*g*d+x*h*S,this._z=u*h*S+x*g*d,this._w=u*h*d-x*g*S;break;case"ZYX":this._x=x*h*d-u*g*S,this._y=u*g*d+x*h*S,this._z=u*h*S-x*g*d,this._w=u*h*d+x*g*S;break;case"YZX":this._x=x*h*d+u*g*S,this._y=u*g*d+x*h*S,this._z=u*h*S-x*g*d,this._w=u*h*d-x*g*S;break;case"XZY":this._x=x*h*d-u*g*S,this._y=u*g*d-x*h*S,this._z=u*h*S+x*g*d,this._w=u*h*d+x*g*S;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],l=t[5],c=t[9],u=t[2],h=t[6],d=t[10],x=i+l+d;if(x>0){const g=.5/Math.sqrt(x+1);this._w=.25/g,this._x=(h-c)*g,this._y=(s-u)*g,this._z=(a-r)*g}else if(i>l&&i>d){const g=2*Math.sqrt(1+i-l-d);this._w=(h-c)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+u)/g}else if(l>d){const g=2*Math.sqrt(1+l-i-d);this._w=(s-u)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+d-i-l);this._w=(a-r)/g,this._x=(s+u)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,l=t._x,c=t._y,u=t._z,h=t._w;return this._x=i*h+a*l+r*u-s*c,this._y=r*h+a*c+s*l-i*u,this._z=s*h+a*u+i*c-r*l,this._w=a*h-i*l-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,l=this.dot(e);l<0&&(i=-i,r=-r,s=-s,a=-a,l=-l);let c=1-t;if(l<.9995){const u=Math.acos(l),h=Math.sin(u);c=Math.sin(c*u)/h,t=Math.sin(t*u)/h,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,l=e.z,c=e.w,u=2*(a*r-l*i),h=2*(l*t-s*r),d=2*(s*i-a*t);return this.x=t+c*u+a*d-l*h,this.y=i+c*h+l*u-s*d,this.z=r+c*d+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,l=t.y,c=t.z;return this.x=r*c-s*l,this.y=s*a-i*c,this.z=i*l-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ma.copy(this).projectOnVector(e),this.sub(Ma)}reflect(e){return this.sub(Ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ma=new Y,Fu=new Os;class ot{constructor(e,t,i,r,s,a,l,c,u){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,l,c,u)}set(e,t,i,r,s,a,l,c,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],l=i[3],c=i[6],u=i[1],h=i[4],d=i[7],x=i[2],g=i[5],S=i[8],T=r[0],_=r[3],m=r[6],C=r[1],R=r[4],A=r[7],O=r[2],L=r[5],B=r[8];return s[0]=a*T+l*C+c*O,s[3]=a*_+l*R+c*L,s[6]=a*m+l*A+c*B,s[1]=u*T+h*C+d*O,s[4]=u*_+h*R+d*L,s[7]=u*m+h*A+d*B,s[2]=x*T+g*C+S*O,s[5]=x*_+g*R+S*L,s[8]=x*m+g*A+S*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8];return t*a*h-t*l*u-i*s*h+i*l*c+r*s*u-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],d=h*a-l*u,x=l*c-h*s,g=u*s-a*c,S=t*d+i*x+r*g;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=d*T,e[1]=(r*u-h*i)*T,e[2]=(l*i-r*a)*T,e[3]=x*T,e[4]=(h*t-r*c)*T,e[5]=(r*s-l*t)*T,e[6]=g*T,e[7]=(i*c-u*t)*T,e[8]=(a*t-i*s)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,l){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*l)+a+e,-r*u,r*c,-r*(-u*a+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Sa.makeScale(e,t)),this}rotate(e){return this.premultiply(Sa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sa=new ot,Nu=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ou=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sx(){const n={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Tt&&(r.r=Mi(r.r),r.g=Mi(r.g),r.b=Mi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Tt&&(r.r=Gr(r.r),r.g=Gr(r.g),r.b=Gr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===zi?Uo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Us("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Us("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Yr]:{primaries:e,whitePoint:i,transfer:Uo,toXYZ:Nu,fromXYZ:Ou,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:e,whitePoint:i,transfer:Tt,toXYZ:Nu,fromXYZ:Ou,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),n}const _t=sx();function Mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Gr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Mr;class ox{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Mr===void 0&&(Mr=Fo("canvas")),Mr.width=e.width,Mr.height=e.height;const r=Mr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Mr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Mi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mi(t[i]/255)*255):t[i]=Mi(t[i]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ax=0;class yc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=Ns(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(ba(r[a].image)):s.push(ba(r[a]))}else s=ba(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ba(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ox.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let lx=0;const ya=new Y;class cn extends Zr{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,i=xi,r=xi,s=Ln,a=ar,l=zn,c=Jn,u=cn.DEFAULT_ANISOTROPY,h=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=Ns(),this.name="",this.source=new yc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ya).x}get height(){return this.source.getSize(ya).y}get depth(){return this.source.getSize(ya).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _l:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _l:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=zh;cn.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,u=c[0],h=c[4],d=c[8],x=c[1],g=c[5],S=c[9],T=c[2],_=c[6],m=c[10];if(Math.abs(h-x)<.01&&Math.abs(d-T)<.01&&Math.abs(S-_)<.01){if(Math.abs(h+x)<.1&&Math.abs(d+T)<.1&&Math.abs(S+_)<.1&&Math.abs(u+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(u+1)/2,A=(g+1)/2,O=(m+1)/2,L=(h+x)/4,B=(d+T)/4,W=(S+_)/4;return R>A&&R>O?R<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(R),r=L/i,s=B/i):A>O?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=L/r,s=W/r):O<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),i=B/s,r=W/s),this.set(i,r,s,t),this}let C=Math.sqrt((_-S)*(_-S)+(d-T)*(d-T)+(x-h)*(x-h));return Math.abs(C)<.001&&(C=1),this.x=(_-S)/C,this.y=(d-T)/C,this.z=(x-h)/C,this.w=Math.acos((u+g+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cx extends Zr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new cn(r);this.textures=[];const a=i.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new yc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fr extends cx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class $h extends cn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ux extends cn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bs{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Fn):Fn.fromBufferAttribute(s,a),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zs.copy(i.boundingBox)),Zs.applyMatrix4(e.matrixWorld),this.union(Zs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),Js.subVectors(this.max,ls),Sr.subVectors(e.a,ls),br.subVectors(e.b,ls),yr.subVectors(e.c,ls),Pi.subVectors(br,Sr),Di.subVectors(yr,br),Zi.subVectors(Sr,yr);let t=[0,-Pi.z,Pi.y,0,-Di.z,Di.y,0,-Zi.z,Zi.y,Pi.z,0,-Pi.x,Di.z,0,-Di.x,Zi.z,0,-Zi.x,-Pi.y,Pi.x,0,-Di.y,Di.x,0,-Zi.y,Zi.x,0];return!Ea(t,Sr,br,yr,Js)||(t=[1,0,0,0,1,0,0,0,1],!Ea(t,Sr,br,yr,Js))?!1:(Qs.crossVectors(Pi,Di),t=[Qs.x,Qs.y,Qs.z],Ea(t,Sr,br,yr,Js))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const si=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Fn=new Y,Zs=new Bs,Sr=new Y,br=new Y,yr=new Y,Pi=new Y,Di=new Y,Zi=new Y,ls=new Y,Js=new Y,Qs=new Y,Ji=new Y;function Ea(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ji.fromArray(n,s);const l=r.x*Math.abs(Ji.x)+r.y*Math.abs(Ji.y)+r.z*Math.abs(Ji.z),c=e.dot(Ji),u=t.dot(Ji),h=i.dot(Ji);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>l)return!1}return!0}const fx=new Bs,cs=new Y,Ta=new Y;class Ec{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):fx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cs.subVectors(e,this.center);const t=cs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(cs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cs.copy(e.center).add(Ta)),this.expandByPoint(cs.copy(e.center).sub(Ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const oi=new Y,Aa=new Y,eo=new Y,Li=new Y,wa=new Y,to=new Y,Ra=new Y;class hx{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Aa.copy(e).add(t).multiplyScalar(.5),eo.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(Aa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(eo),l=Li.dot(this.direction),c=-Li.dot(eo),u=Li.lengthSq(),h=Math.abs(1-a*a);let d,x,g,S;if(h>0)if(d=a*c-l,x=a*l-c,S=s*h,d>=0)if(x>=-S)if(x<=S){const T=1/h;d*=T,x*=T,g=d*(d+a*x+2*l)+x*(a*d+x+2*c)+u}else x=s,d=Math.max(0,-(a*x+l)),g=-d*d+x*(x+2*c)+u;else x=-s,d=Math.max(0,-(a*x+l)),g=-d*d+x*(x+2*c)+u;else x<=-S?(d=Math.max(0,-(-a*s+l)),x=d>0?-s:Math.min(Math.max(-s,-c),s),g=-d*d+x*(x+2*c)+u):x<=S?(d=0,x=Math.min(Math.max(-s,-c),s),g=x*(x+2*c)+u):(d=Math.max(0,-(a*s+l)),x=d>0?s:Math.min(Math.max(-s,-c),s),g=-d*d+x*(x+2*c)+u);else x=a>0?-s:s,d=Math.max(0,-(a*x+l)),g=-d*d+x*(x+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Aa).addScaledVector(eo,x),g}intersectSphere(e,t){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),r=oi.dot(oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,l,c;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,x=this.origin;return u>=0?(i=(e.min.x-x.x)*u,r=(e.max.x-x.x)*u):(i=(e.max.x-x.x)*u,r=(e.min.x-x.x)*u),h>=0?(s=(e.min.y-x.y)*h,a=(e.max.y-x.y)*h):(s=(e.max.y-x.y)*h,a=(e.min.y-x.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(l=(e.min.z-x.z)*d,c=(e.max.z-x.z)*d):(l=(e.max.z-x.z)*d,c=(e.min.z-x.z)*d),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,i,r,s){wa.subVectors(t,e),to.subVectors(i,e),Ra.crossVectors(wa,to);let a=this.direction.dot(Ra),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;Li.subVectors(this.origin,e);const c=l*this.direction.dot(to.crossVectors(Li,to));if(c<0)return null;const u=l*this.direction.dot(wa.cross(Li));if(u<0||c+u>a)return null;const h=-l*Li.dot(Ra);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,i,r,s,a,l,c,u,h,d,x,g,S,T,_){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,l,c,u,h,d,x,g,S,T,_)}set(e,t,i,r,s,a,l,c,u,h,d,x,g,S,T,_){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=l,m[13]=c,m[2]=u,m[6]=h,m[10]=d,m[14]=x,m[3]=g,m[7]=S,m[11]=T,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Er.setFromMatrixColumn(e,0).length(),s=1/Er.setFromMatrixColumn(e,1).length(),a=1/Er.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const x=a*h,g=a*d,S=l*h,T=l*d;t[0]=c*h,t[4]=-c*d,t[8]=u,t[1]=g+S*u,t[5]=x-T*u,t[9]=-l*c,t[2]=T-x*u,t[6]=S+g*u,t[10]=a*c}else if(e.order==="YXZ"){const x=c*h,g=c*d,S=u*h,T=u*d;t[0]=x+T*l,t[4]=S*l-g,t[8]=a*u,t[1]=a*d,t[5]=a*h,t[9]=-l,t[2]=g*l-S,t[6]=T+x*l,t[10]=a*c}else if(e.order==="ZXY"){const x=c*h,g=c*d,S=u*h,T=u*d;t[0]=x-T*l,t[4]=-a*d,t[8]=S+g*l,t[1]=g+S*l,t[5]=a*h,t[9]=T-x*l,t[2]=-a*u,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){const x=a*h,g=a*d,S=l*h,T=l*d;t[0]=c*h,t[4]=S*u-g,t[8]=x*u+T,t[1]=c*d,t[5]=T*u+x,t[9]=g*u-S,t[2]=-u,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){const x=a*c,g=a*u,S=l*c,T=l*u;t[0]=c*h,t[4]=T-x*d,t[8]=S*d+g,t[1]=d,t[5]=a*h,t[9]=-l*h,t[2]=-u*h,t[6]=g*d+S,t[10]=x-T*d}else if(e.order==="XZY"){const x=a*c,g=a*u,S=l*c,T=l*u;t[0]=c*h,t[4]=-d,t[8]=u*h,t[1]=x*d+T,t[5]=a*h,t[9]=g*d-S,t[2]=S*d-g,t[6]=l*h,t[10]=T*d+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dx,e,px)}lookAt(e,t,i){const r=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ui.crossVectors(i,vn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ui.crossVectors(i,vn)),Ui.normalize(),no.crossVectors(vn,Ui),r[0]=Ui.x,r[4]=no.x,r[8]=vn.x,r[1]=Ui.y,r[5]=no.y,r[9]=vn.y,r[2]=Ui.z,r[6]=no.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],l=i[4],c=i[8],u=i[12],h=i[1],d=i[5],x=i[9],g=i[13],S=i[2],T=i[6],_=i[10],m=i[14],C=i[3],R=i[7],A=i[11],O=i[15],L=r[0],B=r[4],W=r[8],P=r[12],E=r[1],z=r[5],Z=r[9],ie=r[13],de=r[2],ue=r[6],ce=r[10],fe=r[14],K=r[3],ae=r[7],le=r[11],Te=r[15];return s[0]=a*L+l*E+c*de+u*K,s[4]=a*B+l*z+c*ue+u*ae,s[8]=a*W+l*Z+c*ce+u*le,s[12]=a*P+l*ie+c*fe+u*Te,s[1]=h*L+d*E+x*de+g*K,s[5]=h*B+d*z+x*ue+g*ae,s[9]=h*W+d*Z+x*ce+g*le,s[13]=h*P+d*ie+x*fe+g*Te,s[2]=S*L+T*E+_*de+m*K,s[6]=S*B+T*z+_*ue+m*ae,s[10]=S*W+T*Z+_*ce+m*le,s[14]=S*P+T*ie+_*fe+m*Te,s[3]=C*L+R*E+A*de+O*K,s[7]=C*B+R*z+A*ue+O*ae,s[11]=C*W+R*Z+A*ce+O*le,s[15]=C*P+R*ie+A*fe+O*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],l=e[5],c=e[9],u=e[13],h=e[2],d=e[6],x=e[10],g=e[14],S=e[3],T=e[7],_=e[11],m=e[15];return S*(+s*c*d-r*u*d-s*l*x+i*u*x+r*l*g-i*c*g)+T*(+t*c*g-t*u*x+s*a*x-r*a*g+r*u*h-s*c*h)+_*(+t*u*d-t*l*g-s*a*d+i*a*g+s*l*h-i*u*h)+m*(-r*l*h-t*c*d+t*l*x+r*a*d-i*a*x+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],d=e[9],x=e[10],g=e[11],S=e[12],T=e[13],_=e[14],m=e[15],C=d*_*u-T*x*u+T*c*g-l*_*g-d*c*m+l*x*m,R=S*x*u-h*_*u-S*c*g+a*_*g+h*c*m-a*x*m,A=h*T*u-S*d*u+S*l*g-a*T*g-h*l*m+a*d*m,O=S*d*c-h*T*c-S*l*x+a*T*x+h*l*_-a*d*_,L=t*C+i*R+r*A+s*O;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/L;return e[0]=C*B,e[1]=(T*x*s-d*_*s-T*r*g+i*_*g+d*r*m-i*x*m)*B,e[2]=(l*_*s-T*c*s+T*r*u-i*_*u-l*r*m+i*c*m)*B,e[3]=(d*c*s-l*x*s-d*r*u+i*x*u+l*r*g-i*c*g)*B,e[4]=R*B,e[5]=(h*_*s-S*x*s+S*r*g-t*_*g-h*r*m+t*x*m)*B,e[6]=(S*c*s-a*_*s-S*r*u+t*_*u+a*r*m-t*c*m)*B,e[7]=(a*x*s-h*c*s+h*r*u-t*x*u-a*r*g+t*c*g)*B,e[8]=A*B,e[9]=(S*d*s-h*T*s-S*i*g+t*T*g+h*i*m-t*d*m)*B,e[10]=(a*T*s-S*l*s+S*i*u-t*T*u-a*i*m+t*l*m)*B,e[11]=(h*l*s-a*d*s-h*i*u+t*d*u+a*i*g-t*l*g)*B,e[12]=O*B,e[13]=(h*T*r-S*d*r+S*i*x-t*T*x-h*i*_+t*d*_)*B,e[14]=(S*l*r-a*T*r-S*i*c+t*T*c+a*i*_-t*l*_)*B,e[15]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*x+t*l*x)*B,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,l=e.y,c=e.z,u=s*a,h=s*l;return this.set(u*a+i,u*l-r*c,u*c+r*l,0,u*l+r*c,h*l+i,h*c-r*a,0,u*c-r*l,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,l=t._z,c=t._w,u=s+s,h=a+a,d=l+l,x=s*u,g=s*h,S=s*d,T=a*h,_=a*d,m=l*d,C=c*u,R=c*h,A=c*d,O=i.x,L=i.y,B=i.z;return r[0]=(1-(T+m))*O,r[1]=(g+A)*O,r[2]=(S-R)*O,r[3]=0,r[4]=(g-A)*L,r[5]=(1-(x+m))*L,r[6]=(_+C)*L,r[7]=0,r[8]=(S+R)*B,r[9]=(_-C)*B,r[10]=(1-(x+T))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Er.set(r[0],r[1],r[2]).length();const a=Er.set(r[4],r[5],r[6]).length(),l=Er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const u=1/s,h=1/a,d=1/l;return Nn.elements[0]*=u,Nn.elements[1]*=u,Nn.elements[2]*=u,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=d,Nn.elements[9]*=d,Nn.elements[10]*=d,t.setFromRotationMatrix(Nn),i.x=s,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,a,l=Yn,c=!1){const u=this.elements,h=2*s/(t-e),d=2*s/(i-r),x=(t+e)/(t-e),g=(i+r)/(i-r);let S,T;if(c)S=s/(a-s),T=a*s/(a-s);else if(l===Yn)S=-(a+s)/(a-s),T=-2*a*s/(a-s);else if(l===Io)S=-a/(a-s),T=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=x,u[12]=0,u[1]=0,u[5]=d,u[9]=g,u[13]=0,u[2]=0,u[6]=0,u[10]=S,u[14]=T,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,a,l=Yn,c=!1){const u=this.elements,h=2/(t-e),d=2/(i-r),x=-(t+e)/(t-e),g=-(i+r)/(i-r);let S,T;if(c)S=1/(a-s),T=a/(a-s);else if(l===Yn)S=-2/(a-s),T=-(a+s)/(a-s);else if(l===Io)S=-1/(a-s),T=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=0,u[12]=x,u[1]=0,u[5]=d,u[9]=0,u[13]=g,u[2]=0,u[6]=0,u[10]=S,u[14]=T,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Er=new Y,Nn=new Bt,dx=new Y(0,0,0),px=new Y(1,1,1),Ui=new Y,no=new Y,vn=new Y,Bu=new Bt,zu=new Os;class Qn{constructor(e=0,t=0,i=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],l=r[8],c=r[1],u=r[5],h=r[9],d=r[2],x=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(x,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(x,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zu.setFromEuler(this),this.setFromQuaternion(zu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class Zh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mx=0;const Vu=new Y,Tr=new Os,ai=new Bt,io=new Y,us=new Y,xx=new Y,gx=new Os,Hu=new Y(1,0,0),Gu=new Y(0,1,0),ku=new Y(0,0,1),Wu={type:"added"},_x={type:"removed"},Ar={type:"childadded",child:null},Ca={type:"childremoved",child:null};class mn extends Zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new Y,t=new Qn,i=new Os,r=new Y(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Bt},normalMatrix:{value:new ot}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.premultiply(Tr),this}rotateX(e){return this.rotateOnAxis(Hu,e)}rotateY(e){return this.rotateOnAxis(Gu,e)}rotateZ(e){return this.rotateOnAxis(ku,e)}translateOnAxis(e,t){return Vu.copy(e).applyQuaternion(this.quaternion),this.position.add(Vu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hu,e)}translateY(e){return this.translateOnAxis(Gu,e)}translateZ(e){return this.translateOnAxis(ku,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?io.copy(e):io.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(us,io,this.up):ai.lookAt(io,us,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),Tr.setFromRotationMatrix(ai),this.quaternion.premultiply(Tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(zt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wu),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_x),Ca.child=e,this.dispatchEvent(Ca),Ca.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wu),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,e,xx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,gx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const d=c[u];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(e.animations,c))}}if(t){const l=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),d=a(e.shapes),x=a(e.skeletons),g=a(e.animations),S=a(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),x.length>0&&(i.skeletons=x),g.length>0&&(i.animations=g),S.length>0&&(i.nodes=S)}return i.object=r,i;function a(l){const c=[];for(const u in l){const h=l[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mn.DEFAULT_UP=new Y(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new Y,li=new Y,Pa=new Y,ci=new Y,wr=new Y,Rr=new Y,Xu=new Y,Da=new Y,La=new Y,Ua=new Y,Ia=new At,Fa=new At,Na=new At;class Bn{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),On.subVectors(e,t),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){On.subVectors(r,t),li.subVectors(i,t),Pa.subVectors(e,t);const a=On.dot(On),l=On.dot(li),c=On.dot(Pa),u=li.dot(li),h=li.dot(Pa),d=a*u-l*l;if(d===0)return s.set(0,0,0),null;const x=1/d,g=(u*c-l*h)*x,S=(a*h-l*c)*x;return s.set(1-g-S,S,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,i,r,s,a,l,c){return this.getBarycoord(e,t,i,r,ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ci.x),c.addScaledVector(a,ci.y),c.addScaledVector(l,ci.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ia.setScalar(0),Fa.setScalar(0),Na.setScalar(0),Ia.fromBufferAttribute(e,t),Fa.fromBufferAttribute(e,i),Na.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ia,s.x),a.addScaledVector(Fa,s.y),a.addScaledVector(Na,s.z),a}static isFrontFacing(e,t,i,r){return On.subVectors(i,t),li.subVectors(e,t),On.cross(li).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),li.subVectors(this.a,this.b),On.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,l;wr.subVectors(r,i),Rr.subVectors(s,i),Da.subVectors(e,i);const c=wr.dot(Da),u=Rr.dot(Da);if(c<=0&&u<=0)return t.copy(i);La.subVectors(e,r);const h=wr.dot(La),d=Rr.dot(La);if(h>=0&&d<=h)return t.copy(r);const x=c*d-h*u;if(x<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(wr,a);Ua.subVectors(e,s);const g=wr.dot(Ua),S=Rr.dot(Ua);if(S>=0&&g<=S)return t.copy(s);const T=g*u-c*S;if(T<=0&&u>=0&&S<=0)return l=u/(u-S),t.copy(i).addScaledVector(Rr,l);const _=h*S-g*d;if(_<=0&&d-h>=0&&g-S>=0)return Xu.subVectors(s,r),l=(d-h)/(d-h+(g-S)),t.copy(r).addScaledVector(Xu,l);const m=1/(_+T+x);return a=T*m,l=x*m,t.copy(i).addScaledVector(wr,a).addScaledVector(Rr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},ro={h:0,s:0,l:0};function Oa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class vt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=_t.workingColorSpace){if(e=rx(e,1),t=ht(t,0,1),i=ht(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Oa(a,s,e+1/3),this.g=Oa(a,s,e),this.b=Oa(a,s,e-1/3)}return _t.colorSpaceToWorking(this,r),this}setStyle(e,t=Pn){function i(s){s!==void 0&&parseFloat(s)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pn){const i=Jh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return _t.workingToColorSpace(Jt.copy(this),e),Math.round(ht(Jt.r*255,0,255))*65536+Math.round(ht(Jt.g*255,0,255))*256+Math.round(ht(Jt.b*255,0,255))}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(Jt.copy(this),t);const i=Jt.r,r=Jt.g,s=Jt.b,a=Math.max(i,r,s),l=Math.min(i,r,s);let c,u;const h=(l+a)/2;if(l===a)c=0,u=0;else{const d=a-l;switch(u=h<=.5?d/(a+l):d/(2-a-l),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Pn){_t.workingToColorSpace(Jt.copy(this),e);const t=Jt.r,i=Jt.g,r=Jt.b;return e!==Pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(ro);const i=va(Ii.h,ro.h,t),r=va(Ii.s,ro.s,t),s=va(Ii.l,ro.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new vt;vt.NAMES=Jh;let vx=0;class zs extends Zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=Hr,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ll,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==al&&(i.blendSrc=this.blendSrc),this.blendDst!==ll&&(i.blendDst=this.blendDst),this.blendEquation!==sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const l in s){const c=s[l];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qh extends zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new Y,so=new dt;let Mx=0;class $n{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Du,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)so.fromBufferAttribute(this,t),so.applyMatrix3(e),this.setXY(t,so.x,so.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=as(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=hn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=as(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=as(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=as(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=as(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),r=hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),r=hn(r,this.array),s=hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Du&&(e.usage=this.usage),e}}class ed extends $n{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class td extends $n{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Tn extends $n{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Sx=0;const Cn=new Bt,Ba=new mn,Cr=new Y,Mn=new Bs,fs=new Bs,Wt=new Y;class ti extends Zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kh(e)?td:ed)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ot().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,i){return Cn.makeTranslation(e,t,i),this.applyMatrix4(Cn),this}scale(e,t,i){return Cn.makeScale(e,t,i),this.applyMatrix4(Cn),this}lookAt(e){return Ba.lookAt(e),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ec);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];fs.setFromBufferAttribute(l),this.morphTargetsRelative?(Wt.addVectors(Mn.min,fs.min),Mn.expandByPoint(Wt),Wt.addVectors(Mn.max,fs.max),Mn.expandByPoint(Wt)):(Mn.expandByPoint(fs.min),Mn.expandByPoint(fs.max))}Mn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(t)for(let s=0,a=t.length;s<a;s++){const l=t[s],c=this.morphTargetsRelative;for(let u=0,h=l.count;u<h;u++)Wt.fromBufferAttribute(l,u),c&&(Cr.fromBufferAttribute(e,u),Wt.add(Cr)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),l=[],c=[];for(let W=0;W<i.count;W++)l[W]=new Y,c[W]=new Y;const u=new Y,h=new Y,d=new Y,x=new dt,g=new dt,S=new dt,T=new Y,_=new Y;function m(W,P,E){u.fromBufferAttribute(i,W),h.fromBufferAttribute(i,P),d.fromBufferAttribute(i,E),x.fromBufferAttribute(s,W),g.fromBufferAttribute(s,P),S.fromBufferAttribute(s,E),h.sub(u),d.sub(u),g.sub(x),S.sub(x);const z=1/(g.x*S.y-S.x*g.y);isFinite(z)&&(T.copy(h).multiplyScalar(S.y).addScaledVector(d,-g.y).multiplyScalar(z),_.copy(d).multiplyScalar(g.x).addScaledVector(h,-S.x).multiplyScalar(z),l[W].add(T),l[P].add(T),l[E].add(T),c[W].add(_),c[P].add(_),c[E].add(_))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let W=0,P=C.length;W<P;++W){const E=C[W],z=E.start,Z=E.count;for(let ie=z,de=z+Z;ie<de;ie+=3)m(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const R=new Y,A=new Y,O=new Y,L=new Y;function B(W){O.fromBufferAttribute(r,W),L.copy(O);const P=l[W];R.copy(P),R.sub(O.multiplyScalar(O.dot(P))).normalize(),A.crossVectors(L,P);const z=A.dot(c[W])<0?-1:1;a.setXYZW(W,R.x,R.y,R.z,z)}for(let W=0,P=C.length;W<P;++W){const E=C[W],z=E.start,Z=E.count;for(let ie=z,de=z+Z;ie<de;ie+=3)B(e.getX(ie+0)),B(e.getX(ie+1)),B(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $n(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let x=0,g=i.count;x<g;x++)i.setXYZ(x,0,0,0);const r=new Y,s=new Y,a=new Y,l=new Y,c=new Y,u=new Y,h=new Y,d=new Y;if(e)for(let x=0,g=e.count;x<g;x+=3){const S=e.getX(x+0),T=e.getX(x+1),_=e.getX(x+2);r.fromBufferAttribute(t,S),s.fromBufferAttribute(t,T),a.fromBufferAttribute(t,_),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,T),u.fromBufferAttribute(i,_),l.add(h),c.add(h),u.add(h),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(T,c.x,c.y,c.z),i.setXYZ(_,u.x,u.y,u.z)}else for(let x=0,g=t.count;x<g;x+=3)r.fromBufferAttribute(t,x+0),s.fromBufferAttribute(t,x+1),a.fromBufferAttribute(t,x+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(x+0,h.x,h.y,h.z),i.setXYZ(x+1,h.x,h.y,h.z),i.setXYZ(x+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(l,c){const u=l.array,h=l.itemSize,d=l.normalized,x=new u.constructor(c.length*h);let g=0,S=0;for(let T=0,_=c.length;T<_;T++){l.isInterleavedBufferAttribute?g=c[T]*l.data.stride+l.offset:g=c[T]*h;for(let m=0;m<h;m++)x[S++]=u[g++]}return new $n(x,h,d)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ti,i=this.index.array,r=this.attributes;for(const l in r){const c=r[l],u=e(c,i);t.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const c=[],u=s[l];for(let h=0,d=u.length;h<d;h++){const x=u[h],g=e(x,i);c.push(g)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const u=a[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let d=0,x=u.length;d<x;d++){const g=u[d];h.push(g.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(t))}const s=e.morphAttributes;for(const u in s){const h=[],d=s[u];for(let x=0,g=d.length;x<g;x++)h.push(d[x].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ju=new Bt,Qi=new hx,oo=new Ec,qu=new Y,ao=new Y,lo=new Y,co=new Y,za=new Y,uo=new Y,Yu=new Y,fo=new Y;class ei extends mn{constructor(e=new ti,t=new Qh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){uo.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=l[c],d=s[c];h!==0&&(za.fromBufferAttribute(d,e),a?uo.addScaledVector(za,h):uo.addScaledVector(za.sub(t),h))}t.add(uo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(s),Qi.copy(e.ray).recast(e.near),!(oo.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(oo,qu)===null||Qi.origin.distanceToSquared(qu)>(e.far-e.near)**2))&&(ju.copy(s).invert(),Qi.copy(e.ray).applyMatrix4(ju),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,l=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,x=s.groups,g=s.drawRange;if(l!==null)if(Array.isArray(a))for(let S=0,T=x.length;S<T;S++){const _=x[S],m=a[_.materialIndex],C=Math.max(_.start,g.start),R=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let A=C,O=R;A<O;A+=3){const L=l.getX(A),B=l.getX(A+1),W=l.getX(A+2);r=ho(this,m,e,i,u,h,d,L,B,W),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const S=Math.max(0,g.start),T=Math.min(l.count,g.start+g.count);for(let _=S,m=T;_<m;_+=3){const C=l.getX(_),R=l.getX(_+1),A=l.getX(_+2);r=ho(this,a,e,i,u,h,d,C,R,A),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let S=0,T=x.length;S<T;S++){const _=x[S],m=a[_.materialIndex],C=Math.max(_.start,g.start),R=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let A=C,O=R;A<O;A+=3){const L=A,B=A+1,W=A+2;r=ho(this,m,e,i,u,h,d,L,B,W),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const S=Math.max(0,g.start),T=Math.min(c.count,g.start+g.count);for(let _=S,m=T;_<m;_+=3){const C=_,R=_+1,A=_+2;r=ho(this,a,e,i,u,h,d,C,R,A),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function bx(n,e,t,i,r,s,a,l){let c;if(e.side===pn?c=i.intersectTriangle(a,s,r,!0,l):c=i.intersectTriangle(r,s,a,e.side===Xi,l),c===null)return null;fo.copy(l),fo.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(fo);return u<t.near||u>t.far?null:{distance:u,point:fo.clone(),object:n}}function ho(n,e,t,i,r,s,a,l,c,u){n.getVertexPosition(l,ao),n.getVertexPosition(c,lo),n.getVertexPosition(u,co);const h=bx(n,e,t,i,ao,lo,co,Yu);if(h){const d=new Y;Bn.getBarycoord(Yu,ao,lo,co,d),r&&(h.uv=Bn.getInterpolatedAttribute(r,l,c,u,d,new dt)),s&&(h.uv1=Bn.getInterpolatedAttribute(s,l,c,u,d,new dt)),a&&(h.normal=Bn.getInterpolatedAttribute(a,l,c,u,d,new Y),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const x={a:l,b:c,c:u,normal:new Y,materialIndex:0};Bn.getNormal(ao,lo,co,x.normal),h.face=x,h.barycoord=d}return h}class Jr extends ti{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],h=[],d=[];let x=0,g=0;S("z","y","x",-1,-1,i,t,e,a,s,0),S("z","y","x",1,-1,i,t,-e,a,s,1),S("x","z","y",1,1,e,i,t,r,a,2),S("x","z","y",1,-1,e,i,-t,r,a,3),S("x","y","z",1,-1,e,t,i,r,s,4),S("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Tn(u,3)),this.setAttribute("normal",new Tn(h,3)),this.setAttribute("uv",new Tn(d,2));function S(T,_,m,C,R,A,O,L,B,W,P){const E=A/B,z=O/W,Z=A/2,ie=O/2,de=L/2,ue=B+1,ce=W+1;let fe=0,K=0;const ae=new Y;for(let le=0;le<ce;le++){const Te=le*z-ie;for(let We=0;We<ue;We++){const st=We*E-Z;ae[T]=st*C,ae[_]=Te*R,ae[m]=de,u.push(ae.x,ae.y,ae.z),ae[T]=0,ae[_]=0,ae[m]=L>0?1:-1,h.push(ae.x,ae.y,ae.z),d.push(We/B),d.push(1-le/W),fe+=1}}for(let le=0;le<W;le++)for(let Te=0;Te<B;Te++){const We=x+Te+ue*le,st=x+Te+ue*(le+1),ut=x+(Te+1)+ue*(le+1),pt=x+(Te+1)+ue*le;c.push(We,st,pt),c.push(st,ut,pt),K+=6}l.addGroup(g,K,P),g+=K,x+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Kr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function on(n){const e={};for(let t=0;t<n.length;t++){const i=Kr(n[t]);for(const r in i)e[r]=i[r]}return e}function yx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function nd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const Ex={clone:Kr,merge:on};var Tx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ax=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tx,this.fragmentShader=Ax,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kr(e.uniforms),this.uniformsGroups=yx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class id extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new Y,Ku=new dt,$u=new dt;class bn extends id{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yl*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,t){return this.getViewBounds(e,Ku,$u),t.subVectors($u,Ku)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_a*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Pr=-90,Dr=1;class wx extends mn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(Pr,Dr,e,t);r.layers=this.layers,this.add(r);const s=new bn(Pr,Dr,e,t);s.layers=this.layers,this.add(s);const a=new bn(Pr,Dr,e,t);a.layers=this.layers,this.add(a);const l=new bn(Pr,Dr,e,t);l.layers=this.layers,this.add(l);const c=new bn(Pr,Dr,e,t);c.layers=this.layers,this.add(c);const u=new bn(Pr,Dr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,l,c]=t;for(const u of t)this.remove(u);if(e===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Io)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,c,u,h]=this.children,d=e.getRenderTarget(),x=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,l),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,x,g),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class rd extends cn{constructor(e=[],t=jr,i,r,s,a,l,c,u,h){super(e,t,i,r,s,a,l,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rx extends fr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new rd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Jr(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:Kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:vi});s.uniforms.tEquirect.value=t;const a=new ei(r,s),l=t.minFilter;return t.minFilter===ar&&(t.minFilter=Ln),new wx(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class po extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cx={type:"move"};class Va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const l=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const T of e.hand.values()){const _=t.getJointPose(T,i),m=this._getHandJoint(u,T);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],x=h.position.distanceTo(d.position),g=.02,S=.005;u.inputState.pinching&&x>g+S?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&x<=g-S&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Cx)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new po;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Px extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Dx extends cn{constructor(e=null,t=1,i=1,r,s,a,l,c,u=En,h=En,d,x){super(null,a,l,c,u,h,r,s,d,x),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ha=new Y,Lx=new Y,Ux=new ot;class rr{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ha.subVectors(i,t).cross(Lx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ha),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ux.getNormalMatrix(e),r=this.coplanarPoint(Ha).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new Ec,Ix=new dt(.5,.5),mo=new Y;class Tc{constructor(e=new rr,t=new rr,i=new rr,r=new rr,s=new rr,a=new rr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yn,i=!1){const r=this.planes,s=e.elements,a=s[0],l=s[1],c=s[2],u=s[3],h=s[4],d=s[5],x=s[6],g=s[7],S=s[8],T=s[9],_=s[10],m=s[11],C=s[12],R=s[13],A=s[14],O=s[15];if(r[0].setComponents(u-a,g-h,m-S,O-C).normalize(),r[1].setComponents(u+a,g+h,m+S,O+C).normalize(),r[2].setComponents(u+l,g+d,m+T,O+R).normalize(),r[3].setComponents(u-l,g-d,m-T,O-R).normalize(),i)r[4].setComponents(c,x,_,A).normalize(),r[5].setComponents(u-c,g-x,m-_,O-A).normalize();else if(r[4].setComponents(u-c,g-x,m-_,O-A).normalize(),t===Yn)r[5].setComponents(u+c,g+x,m+_,O+A).normalize();else if(t===Io)r[5].setComponents(c,x,_,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){er.center.set(0,0,0);const t=Ix.distanceTo(e.center);return er.radius=.7071067811865476+t,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(mo.x=r.normal.x>0?e.max.x:e.min.x,mo.y=r.normal.y>0?e.max.y:e.min.y,mo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sd extends cn{constructor(e,t,i=ur,r,s,a,l=En,c=En,u,h=Ds,d=1){if(h!==Ds&&h!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:d};super(x,r,s,a,l,c,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class od extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qo extends ti{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];l(r),u(i),h(),this.setAttribute("position",new Tn(s,3)),this.setAttribute("normal",new Tn(s.slice(),3)),this.setAttribute("uv",new Tn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function l(C){const R=new Y,A=new Y,O=new Y;for(let L=0;L<t.length;L+=3)g(t[L+0],R),g(t[L+1],A),g(t[L+2],O),c(R,A,O,C)}function c(C,R,A,O){const L=O+1,B=[];for(let W=0;W<=L;W++){B[W]=[];const P=C.clone().lerp(A,W/L),E=R.clone().lerp(A,W/L),z=L-W;for(let Z=0;Z<=z;Z++)Z===0&&W===L?B[W][Z]=P:B[W][Z]=P.clone().lerp(E,Z/z)}for(let W=0;W<L;W++)for(let P=0;P<2*(L-W)-1;P++){const E=Math.floor(P/2);P%2===0?(x(B[W][E+1]),x(B[W+1][E]),x(B[W][E])):(x(B[W][E+1]),x(B[W+1][E+1]),x(B[W+1][E]))}}function u(C){const R=new Y;for(let A=0;A<s.length;A+=3)R.x=s[A+0],R.y=s[A+1],R.z=s[A+2],R.normalize().multiplyScalar(C),s[A+0]=R.x,s[A+1]=R.y,s[A+2]=R.z}function h(){const C=new Y;for(let R=0;R<s.length;R+=3){C.x=s[R+0],C.y=s[R+1],C.z=s[R+2];const A=_(C)/2/Math.PI+.5,O=m(C)/Math.PI+.5;a.push(A,1-O)}S(),d()}function d(){for(let C=0;C<a.length;C+=6){const R=a[C+0],A=a[C+2],O=a[C+4],L=Math.max(R,A,O),B=Math.min(R,A,O);L>.9&&B<.1&&(R<.2&&(a[C+0]+=1),A<.2&&(a[C+2]+=1),O<.2&&(a[C+4]+=1))}}function x(C){s.push(C.x,C.y,C.z)}function g(C,R){const A=C*3;R.x=e[A+0],R.y=e[A+1],R.z=e[A+2]}function S(){const C=new Y,R=new Y,A=new Y,O=new Y,L=new dt,B=new dt,W=new dt;for(let P=0,E=0;P<s.length;P+=9,E+=6){C.set(s[P+0],s[P+1],s[P+2]),R.set(s[P+3],s[P+4],s[P+5]),A.set(s[P+6],s[P+7],s[P+8]),L.set(a[E+0],a[E+1]),B.set(a[E+2],a[E+3]),W.set(a[E+4],a[E+5]),O.copy(C).add(R).add(A).divideScalar(3);const z=_(O);T(L,E+0,C,z),T(B,E+2,R,z),T(W,E+4,A,z)}}function T(C,R,A,O){O<0&&C.x===1&&(a[R]=C.x-1),A.x===0&&A.z===0&&(a[R]=O/2/Math.PI+.5)}function _(C){return Math.atan2(C.z,-C.x)}function m(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.vertices,e.indices,e.radius,e.details)}}class Ac extends qo{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ac(e.radius,e.detail)}}class Yo extends ti{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,l=Math.floor(i),c=Math.floor(r),u=l+1,h=c+1,d=e/l,x=t/c,g=[],S=[],T=[],_=[];for(let m=0;m<h;m++){const C=m*x-a;for(let R=0;R<u;R++){const A=R*d-s;S.push(A,-C,0),T.push(0,0,1),_.push(R/l),_.push(1-m/c)}}for(let m=0;m<c;m++)for(let C=0;C<l;C++){const R=C+u*m,A=C+u*(m+1),O=C+1+u*(m+1),L=C+1+u*m;g.push(R,A,L),g.push(A,O,L)}this.setIndex(g),this.setAttribute("position",new Tn(S,3)),this.setAttribute("normal",new Tn(T,3)),this.setAttribute("uv",new Tn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.widthSegments,e.heightSegments)}}class wc extends ti{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+l,Math.PI);let u=0;const h=[],d=new Y,x=new Y,g=[],S=[],T=[],_=[];for(let m=0;m<=i;m++){const C=[],R=m/i;let A=0;m===0&&a===0?A=.5/t:m===i&&c===Math.PI&&(A=-.5/t);for(let O=0;O<=t;O++){const L=O/t;d.x=-e*Math.cos(r+L*s)*Math.sin(a+R*l),d.y=e*Math.cos(a+R*l),d.z=e*Math.sin(r+L*s)*Math.sin(a+R*l),S.push(d.x,d.y,d.z),x.copy(d).normalize(),T.push(x.x,x.y,x.z),_.push(L+A,1-R),C.push(u++)}h.push(C)}for(let m=0;m<i;m++)for(let C=0;C<t;C++){const R=h[m][C+1],A=h[m][C],O=h[m+1][C],L=h[m+1][C+1];(m!==0||a>0)&&g.push(R,A,L),(m!==i-1||c<Math.PI)&&g.push(A,O,L)}this.setIndex(g),this.setAttribute("position",new Tn(S,3)),this.setAttribute("normal",new Tn(T,3)),this.setAttribute("uv",new Tn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rc extends qo{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Rc(e.radius,e.detail)}}class Zu extends zs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fx extends zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nx extends zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ad extends mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ga=new Bt,Ju=new Y,Qu=new Y;class Ox{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tc,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ju.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ju),Qu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qu),t.updateMatrixWorld(),Ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ef=new Bt,hs=new Y,ka=new Y;class Bx extends Ox{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new At(2,1,1,1),new At(0,1,1,1),new At(3,1,1,1),new At(1,1,1,1),new At(3,0,1,1),new At(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),hs.setFromMatrixPosition(e.matrixWorld),i.position.copy(hs),ka.copy(i.position),ka.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ka),i.updateMatrixWorld(),r.makeTranslation(-hs.x,-hs.y,-hs.z),ef.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ef,i.coordinateSystem,i.reversedDepth)}}class zx extends ad{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Bx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Vx extends id{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,l=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Hx extends ad{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gx extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function tf(n,e,t,i){const r=kx(i);switch(t){case Wh:return n*e;case jh:return n*e/r.components*r.byteLength;case vc:return n*e/r.components*r.byteLength;case Mc:return n*e*2/r.components*r.byteLength;case Sc:return n*e*2/r.components*r.byteLength;case Xh:return n*e*3/r.components*r.byteLength;case zn:return n*e*4/r.components*r.byteLength;case bc:return n*e*4/r.components*r.byteLength;case bo:case yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Eo:case To:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sl:case yl:return Math.max(n,16)*Math.max(e,8)/4;case Ml:case bl:return Math.max(n,8)*Math.max(e,8)/2;case El:case Tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Il:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Fl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case zl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Hl:case Gl:case kl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Wl:case Xl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case jl:case ql:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kx(n){switch(n){case Jn:case Vh:return{byteLength:1,components:1};case Cs:case Hh:case $r:return{byteLength:2,components:1};case gc:case _c:return{byteLength:2,components:4};case ur:case xc:case gi:return{byteLength:4,components:1};case Gh:case kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mc}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mc);function ld(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Wx(n){const e=new WeakMap;function t(l,c){const u=l.array,h=l.usage,d=u.byteLength,x=n.createBuffer();n.bindBuffer(c,x),n.bufferData(c,u,h),l.onUploadCallback();let g;if(u instanceof Float32Array)g=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)g=n.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=n.SHORT;else if(u instanceof Uint32Array)g=n.UNSIGNED_INT;else if(u instanceof Int32Array)g=n.INT;else if(u instanceof Int8Array)g=n.BYTE;else if(u instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:x,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function i(l,c,u){const h=c.array,d=c.updateRanges;if(n.bindBuffer(u,l),d.length===0)n.bufferSubData(u,0,h);else{d.sort((g,S)=>g.start-S.start);let x=0;for(let g=1;g<d.length;g++){const S=d[x],T=d[g];T.start<=S.start+S.count+1?S.count=Math.max(S.count,T.start+T.count-S.start):(++x,d[x]=T)}d.length=x+1;for(let g=0,S=d.length;g<S;g++){const T=d[g];n.bufferSubData(u,T.start*h.BYTES_PER_ELEMENT,h,T.start,T.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(n.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=e.get(l);if(u===void 0)e.set(l,t(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,l,c),u.version=l.version}}return{get:r,remove:s,update:a}}var Xx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jx=`#ifdef USE_ALPHAHASH
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
#endif`,qx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$x=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zx=`#ifdef USE_AOMAP
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
#endif`,Jx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qx=`#ifdef USE_BATCHING
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
#endif`,eg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ng=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ig=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rg=`#ifdef USE_IRIDESCENCE
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
#endif`,sg=`#ifdef USE_BUMPMAP
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
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pg=`#define PI 3.141592653589793
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
} // validated`,mg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xg=`vec3 transformedNormal = objectNormal;
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
#endif`,gg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_g=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sg="gl_FragColor = linearToOutputTexel( gl_FragColor );",bg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yg=`#ifdef USE_ENVMAP
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
#endif`,Eg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Tg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
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
#endif`,Rg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lg=`#ifdef USE_GRADIENTMAP
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
}`,Ug=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ig=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ng=`uniform bool receiveShadow;
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
#endif`,Og=`#ifdef USE_ENVMAP
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
#endif`,Bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gg=`PhysicalMaterial material;
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
#endif`,kg=`uniform sampler2D dfgLUT;
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
}`,Wg=`
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
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
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
#endif`,jg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e_=`#if defined( USE_POINTS_UV )
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
#endif`,t_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o_=`#ifdef USE_MORPHTARGETS
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
#endif`,a_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,c_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,u_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d_=`#ifdef USE_NORMALMAP
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
#endif`,p_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,__=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,M_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C_=`float getShadowMask() {
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
}`,P_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D_=`#ifdef USE_SKINNING
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
#endif`,L_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U_=`#ifdef USE_SKINNING
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
#endif`,I_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B_=`#ifdef USE_TRANSMISSION
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
#endif`,z_=`#ifdef USE_TRANSMISSION
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
#endif`,V_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X_=`uniform sampler2D t2D;
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
}`,j_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$_=`#include <common>
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
}`,Z_=`#if DEPTH_PACKING == 3200
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
}`,J_=`#define DISTANCE
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
}`,Q_=`#define DISTANCE
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
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nv=`uniform float scale;
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
}`,iv=`uniform vec3 diffuse;
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
}`,rv=`#include <common>
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
}`,sv=`uniform vec3 diffuse;
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
}`,ov=`#define LAMBERT
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
}`,av=`#define LAMBERT
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
}`,lv=`#define MATCAP
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
}`,cv=`#define MATCAP
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
}`,uv=`#define NORMAL
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
}`,fv=`#define NORMAL
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
}`,hv=`#define PHONG
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
}`,dv=`#define PHONG
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
}`,pv=`#define STANDARD
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
}`,mv=`#define STANDARD
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
}`,xv=`#define TOON
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
}`,gv=`#define TOON
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
}`,_v=`uniform float size;
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
}`,vv=`uniform vec3 diffuse;
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
}`,Mv=`#include <common>
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
}`,Sv=`uniform vec3 color;
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
}`,bv=`uniform float rotation;
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
}`,yv=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:Xx,alphahash_pars_fragment:jx,alphamap_fragment:qx,alphamap_pars_fragment:Yx,alphatest_fragment:Kx,alphatest_pars_fragment:$x,aomap_fragment:Zx,aomap_pars_fragment:Jx,batching_pars_vertex:Qx,batching_vertex:eg,begin_vertex:tg,beginnormal_vertex:ng,bsdfs:ig,iridescence_fragment:rg,bumpmap_pars_fragment:sg,clipping_planes_fragment:og,clipping_planes_pars_fragment:ag,clipping_planes_pars_vertex:lg,clipping_planes_vertex:cg,color_fragment:ug,color_pars_fragment:fg,color_pars_vertex:hg,color_vertex:dg,common:pg,cube_uv_reflection_fragment:mg,defaultnormal_vertex:xg,displacementmap_pars_vertex:gg,displacementmap_vertex:_g,emissivemap_fragment:vg,emissivemap_pars_fragment:Mg,colorspace_fragment:Sg,colorspace_pars_fragment:bg,envmap_fragment:yg,envmap_common_pars_fragment:Eg,envmap_pars_fragment:Tg,envmap_pars_vertex:Ag,envmap_physical_pars_fragment:Og,envmap_vertex:wg,fog_vertex:Rg,fog_pars_vertex:Cg,fog_fragment:Pg,fog_pars_fragment:Dg,gradientmap_pars_fragment:Lg,lightmap_pars_fragment:Ug,lights_lambert_fragment:Ig,lights_lambert_pars_fragment:Fg,lights_pars_begin:Ng,lights_toon_fragment:Bg,lights_toon_pars_fragment:zg,lights_phong_fragment:Vg,lights_phong_pars_fragment:Hg,lights_physical_fragment:Gg,lights_physical_pars_fragment:kg,lights_fragment_begin:Wg,lights_fragment_maps:Xg,lights_fragment_end:jg,logdepthbuf_fragment:qg,logdepthbuf_pars_fragment:Yg,logdepthbuf_pars_vertex:Kg,logdepthbuf_vertex:$g,map_fragment:Zg,map_pars_fragment:Jg,map_particle_fragment:Qg,map_particle_pars_fragment:e_,metalnessmap_fragment:t_,metalnessmap_pars_fragment:n_,morphinstance_vertex:i_,morphcolor_vertex:r_,morphnormal_vertex:s_,morphtarget_pars_vertex:o_,morphtarget_vertex:a_,normal_fragment_begin:l_,normal_fragment_maps:c_,normal_pars_fragment:u_,normal_pars_vertex:f_,normal_vertex:h_,normalmap_pars_fragment:d_,clearcoat_normal_fragment_begin:p_,clearcoat_normal_fragment_maps:m_,clearcoat_pars_fragment:x_,iridescence_pars_fragment:g_,opaque_fragment:__,packing:v_,premultiplied_alpha_fragment:M_,project_vertex:S_,dithering_fragment:b_,dithering_pars_fragment:y_,roughnessmap_fragment:E_,roughnessmap_pars_fragment:T_,shadowmap_pars_fragment:A_,shadowmap_pars_vertex:w_,shadowmap_vertex:R_,shadowmask_pars_fragment:C_,skinbase_vertex:P_,skinning_pars_vertex:D_,skinning_vertex:L_,skinnormal_vertex:U_,specularmap_fragment:I_,specularmap_pars_fragment:F_,tonemapping_fragment:N_,tonemapping_pars_fragment:O_,transmission_fragment:B_,transmission_pars_fragment:z_,uv_pars_fragment:V_,uv_pars_vertex:H_,uv_vertex:G_,worldpos_vertex:k_,background_vert:W_,background_frag:X_,backgroundCube_vert:j_,backgroundCube_frag:q_,cube_vert:Y_,cube_frag:K_,depth_vert:$_,depth_frag:Z_,distanceRGBA_vert:J_,distanceRGBA_frag:Q_,equirect_vert:ev,equirect_frag:tv,linedashed_vert:nv,linedashed_frag:iv,meshbasic_vert:rv,meshbasic_frag:sv,meshlambert_vert:ov,meshlambert_frag:av,meshmatcap_vert:lv,meshmatcap_frag:cv,meshnormal_vert:uv,meshnormal_frag:fv,meshphong_vert:hv,meshphong_frag:dv,meshphysical_vert:pv,meshphysical_frag:mv,meshtoon_vert:xv,meshtoon_frag:gv,points_vert:_v,points_frag:vv,shadow_vert:Mv,shadow_frag:Sv,sprite_vert:bv,sprite_frag:yv},De={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},qn={basic:{uniforms:on([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:on([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new vt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:on([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:on([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:on([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new vt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:on([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:on([De.points,De.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:on([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:on([De.common,De.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:on([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:on([De.sprite,De.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:on([De.common,De.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:on([De.lights,De.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};qn.physical={uniforms:on([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const xo={r:0,b:0,g:0},tr=new Qn,Ev=new Bt;function Tv(n,e,t,i,r,s,a){const l=new vt(0);let c=s===!0?0:1,u,h,d=null,x=0,g=null;function S(R){let A=R.isScene===!0?R.background:null;return A&&A.isTexture&&(A=(R.backgroundBlurriness>0?t:e).get(A)),A}function T(R){let A=!1;const O=S(R);O===null?m(l,c):O&&O.isColor&&(m(O,1),A=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(R,A){const O=S(A);O&&(O.isCubeTexture||O.mapping===jo)?(h===void 0&&(h=new ei(new Jr(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Kr(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,B,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),tr.copy(A.backgroundRotation),tr.x*=-1,tr.y*=-1,tr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),h.material.uniforms.envMap.value=O,h.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(tr)),h.material.toneMapped=_t.getTransfer(O.colorSpace)!==Tt,(d!==O||x!==O.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,d=O,x=O.version,g=n.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):O&&O.isTexture&&(u===void 0&&(u=new ei(new Yo(2,2),new Ei({name:"BackgroundMaterial",uniforms:Kr(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=O,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.toneMapped=_t.getTransfer(O.colorSpace)!==Tt,O.matrixAutoUpdate===!0&&O.updateMatrix(),u.material.uniforms.uvTransform.value.copy(O.matrix),(d!==O||x!==O.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,d=O,x=O.version,g=n.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null))}function m(R,A){R.getRGB(xo,nd(n)),i.buffers.color.setClear(xo.r,xo.g,xo.b,A,a)}function C(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return l},setClearColor:function(R,A=1){l.set(R),c=A,m(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(R){c=R,m(l,c)},render:T,addToRenderList:_,dispose:C}}function Av(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=x(null);let s=r,a=!1;function l(E,z,Z,ie,de){let ue=!1;const ce=d(ie,Z,z);s!==ce&&(s=ce,u(s.object)),ue=g(E,ie,Z,de),ue&&S(E,ie,Z,de),de!==null&&e.update(de,n.ELEMENT_ARRAY_BUFFER),(ue||a)&&(a=!1,A(E,z,Z,ie),de!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function c(){return n.createVertexArray()}function u(E){return n.bindVertexArray(E)}function h(E){return n.deleteVertexArray(E)}function d(E,z,Z){const ie=Z.wireframe===!0;let de=i[E.id];de===void 0&&(de={},i[E.id]=de);let ue=de[z.id];ue===void 0&&(ue={},de[z.id]=ue);let ce=ue[ie];return ce===void 0&&(ce=x(c()),ue[ie]=ce),ce}function x(E){const z=[],Z=[],ie=[];for(let de=0;de<t;de++)z[de]=0,Z[de]=0,ie[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Z,attributeDivisors:ie,object:E,attributes:{},index:null}}function g(E,z,Z,ie){const de=s.attributes,ue=z.attributes;let ce=0;const fe=Z.getAttributes();for(const K in fe)if(fe[K].location>=0){const le=de[K];let Te=ue[K];if(Te===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(Te=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(Te=E.instanceColor)),le===void 0||le.attribute!==Te||Te&&le.data!==Te.data)return!0;ce++}return s.attributesNum!==ce||s.index!==ie}function S(E,z,Z,ie){const de={},ue=z.attributes;let ce=0;const fe=Z.getAttributes();for(const K in fe)if(fe[K].location>=0){let le=ue[K];le===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(le=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(le=E.instanceColor));const Te={};Te.attribute=le,le&&le.data&&(Te.data=le.data),de[K]=Te,ce++}s.attributes=de,s.attributesNum=ce,s.index=ie}function T(){const E=s.newAttributes;for(let z=0,Z=E.length;z<Z;z++)E[z]=0}function _(E){m(E,0)}function m(E,z){const Z=s.newAttributes,ie=s.enabledAttributes,de=s.attributeDivisors;Z[E]=1,ie[E]===0&&(n.enableVertexAttribArray(E),ie[E]=1),de[E]!==z&&(n.vertexAttribDivisor(E,z),de[E]=z)}function C(){const E=s.newAttributes,z=s.enabledAttributes;for(let Z=0,ie=z.length;Z<ie;Z++)z[Z]!==E[Z]&&(n.disableVertexAttribArray(Z),z[Z]=0)}function R(E,z,Z,ie,de,ue,ce){ce===!0?n.vertexAttribIPointer(E,z,Z,de,ue):n.vertexAttribPointer(E,z,Z,ie,de,ue)}function A(E,z,Z,ie){T();const de=ie.attributes,ue=Z.getAttributes(),ce=z.defaultAttributeValues;for(const fe in ue){const K=ue[fe];if(K.location>=0){let ae=de[fe];if(ae===void 0&&(fe==="instanceMatrix"&&E.instanceMatrix&&(ae=E.instanceMatrix),fe==="instanceColor"&&E.instanceColor&&(ae=E.instanceColor)),ae!==void 0){const le=ae.normalized,Te=ae.itemSize,We=e.get(ae);if(We===void 0)continue;const st=We.buffer,ut=We.type,pt=We.bytesPerElement,he=ut===n.INT||ut===n.UNSIGNED_INT||ae.gpuType===xc;if(ae.isInterleavedBufferAttribute){const ge=ae.data,Ne=ge.stride,Ze=ae.offset;if(ge.isInstancedInterleavedBuffer){for(let Ge=0;Ge<K.locationSize;Ge++)m(K.location+Ge,ge.meshPerAttribute);E.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ge=0;Ge<K.locationSize;Ge++)_(K.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,st);for(let Ge=0;Ge<K.locationSize;Ge++)R(K.location+Ge,Te/K.locationSize,ut,le,Ne*pt,(Ze+Te/K.locationSize*Ge)*pt,he)}else{if(ae.isInstancedBufferAttribute){for(let ge=0;ge<K.locationSize;ge++)m(K.location+ge,ae.meshPerAttribute);E.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ge=0;ge<K.locationSize;ge++)_(K.location+ge);n.bindBuffer(n.ARRAY_BUFFER,st);for(let ge=0;ge<K.locationSize;ge++)R(K.location+ge,Te/K.locationSize,ut,le,Te*pt,Te/K.locationSize*ge*pt,he)}}else if(ce!==void 0){const le=ce[fe];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(K.location,le);break;case 3:n.vertexAttrib3fv(K.location,le);break;case 4:n.vertexAttrib4fv(K.location,le);break;default:n.vertexAttrib1fv(K.location,le)}}}}C()}function O(){W();for(const E in i){const z=i[E];for(const Z in z){const ie=z[Z];for(const de in ie)h(ie[de].object),delete ie[de];delete z[Z]}delete i[E]}}function L(E){if(i[E.id]===void 0)return;const z=i[E.id];for(const Z in z){const ie=z[Z];for(const de in ie)h(ie[de].object),delete ie[de];delete z[Z]}delete i[E.id]}function B(E){for(const z in i){const Z=i[z];if(Z[E.id]===void 0)continue;const ie=Z[E.id];for(const de in ie)h(ie[de].object),delete ie[de];delete Z[E.id]}}function W(){P(),a=!0,s!==r&&(s=r,u(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:W,resetDefaultState:P,dispose:O,releaseStatesOfGeometry:L,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:_,disableUnusedAttributes:C}}function wv(n,e,t){let i;function r(u){i=u}function s(u,h){n.drawArrays(i,u,h),t.update(h,i,1)}function a(u,h,d){d!==0&&(n.drawArraysInstanced(i,u,h,d),t.update(h,i,d))}function l(u,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,h,0,d);let g=0;for(let S=0;S<d;S++)g+=h[S];t.update(g,i,1)}function c(u,h,d,x){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let S=0;S<u.length;S++)a(u[S],h[S],x[S]);else{g.multiDrawArraysInstancedWEBGL(i,u,0,h,0,x,0,d);let S=0;for(let T=0;T<d;T++)S+=h[T]*x[T];t.update(S,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function Rv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(B){return!(B!==zn&&i.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(B){const W=B===$r&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Jn&&i.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==gi&&!W)}function c(B){if(B==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const h=c(u);h!==u&&(it("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=S>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:x,maxTextures:g,maxVertexTextures:S,maxTextureSize:T,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:C,maxVaryings:R,maxFragmentUniforms:A,vertexTextures:O,maxSamples:L}}function Cv(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new rr,l=new ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,x){const g=d.length!==0||x||i!==0||r;return r=x,i=d.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,x){t=h(d,x,0)},this.setState=function(d,x,g){const S=d.clippingPlanes,T=d.clipIntersection,_=d.clipShadows,m=n.get(d);if(!r||S===null||S.length===0||s&&!_)s?h(null):u();else{const C=s?0:i,R=C*4;let A=m.clippingState||null;c.value=A,A=h(S,x,R,g);for(let O=0;O!==R;++O)A[O]=t[O];m.clippingState=A,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=C}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,x,g,S){const T=d!==null?d.length:0;let _=null;if(T!==0){if(_=c.value,S!==!0||_===null){const m=g+T*4,C=x.matrixWorldInverse;l.getNormalMatrix(C),(_===null||_.length<m)&&(_=new Float32Array(m));for(let R=0,A=g;R!==T;++R,A+=4)a.copy(d[R]).applyMatrix4(C,l),a.normal.toArray(_,A),_[A+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,_}}function Pv(n){let e=new WeakMap;function t(a,l){return l===xl?a.mapping=jr:l===gl&&(a.mapping=qr),a}function i(a){if(a&&a.isTexture){const l=a.mapping;if(l===xl||l===gl)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new Rx(c.height);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Vi=4,nf=[.125,.215,.35,.446,.526,.582],or=20,Dv=256,ds=new Vx,rf=new vt;let Wa=null,Xa=0,ja=0,qa=!1;const Lv=new Y;class sf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:l=Lv}=s;Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wa,Xa,ja),this._renderer.xr.enabled=qa,e.scissorTest=!1,Lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jr||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:$r,format:zn,colorSpace:Yr,depthBuffer:!1},r=of(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=of(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Uv(s)),this._blurMaterial=Fv(s,e,t),this._ggxMaterial=Iv(s,e,t)}return r}_compileMaterial(e){const t=new ei(new ti,e);this._renderer.compile(t,ds)}_sceneToCubeUV(e,t,i,r,s){const c=new bn(90,1,t,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,x=d.autoClear,g=d.toneMapping;d.getClearColor(rf),d.toneMapping=Gi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ei(new Jr,new Qh({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,_=T.material;let m=!1;const C=e.background;C?C.isColor&&(_.color.copy(C),e.background=null,m=!0):(_.color.copy(rf),m=!0);for(let R=0;R<6;R++){const A=R%3;A===0?(c.up.set(0,u[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[R],s.y,s.z)):A===1?(c.up.set(0,0,u[R]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[R],s.z)):(c.up.set(0,u[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[R]));const O=this._cubeSize;Lr(r,A*O,R>2?O:0,O,O),d.setRenderTarget(r),m&&d.render(T,c),d.render(e,c)}d.toneMapping=g,d.autoClear=x,e.background=C}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===jr||e.mapping===qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=af());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;Lr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,ds)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[i];l.material=a;const c=a.uniforms,u=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(u*u-h*h),x=.05+u*.95,g=d*x,{_lodMax:S}=this,T=this._sizeLods[i],_=3*T*(i>S-Vi?i-S+Vi:0),m=4*(this._cubeSize-T);c.envMap.value=e.texture,c.roughness.value=g,c.mipInt.value=S-t,Lr(s,_,m,3*T,2*T),r.setRenderTarget(s),r.render(l,ds),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=S-i,Lr(e,_,m,3*T,2*T),r.setRenderTarget(e),r.render(l,ds)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,l){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&zt("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[r];d.material=u;const x=u.uniforms,g=this._sizeLods[i]-1,S=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*or-1),T=s/S,_=isFinite(s)?1+Math.floor(h*T):or;_>or&&it(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${or}`);const m=[];let C=0;for(let B=0;B<or;++B){const W=B/T,P=Math.exp(-W*W/2);m.push(P),B===0?C+=P:B<_&&(C+=2*P)}for(let B=0;B<m.length;B++)m[B]=m[B]/C;x.envMap.value=e.texture,x.samples.value=_,x.weights.value=m,x.latitudinal.value=a==="latitudinal",l&&(x.poleAxis.value=l);const{_lodMax:R}=this;x.dTheta.value=S,x.mipInt.value=R-i;const A=this._sizeLods[r],O=3*A*(r>R-Vi?r-R+Vi:0),L=4*(this._cubeSize-A);Lr(t,O,L,3*A,2*A),c.setRenderTarget(t),c.render(d,ds)}}function Uv(n){const e=[],t=[],i=[];let r=n;const s=n-Vi+1+nf.length;for(let a=0;a<s;a++){const l=Math.pow(2,r);e.push(l);let c=1/l;a>n-Vi?c=nf[a-n+Vi-1]:a===0&&(c=0),t.push(c);const u=1/(l-2),h=-u,d=1+u,x=[h,h,d,h,d,d,h,h,d,d,h,d],g=6,S=6,T=3,_=2,m=1,C=new Float32Array(T*S*g),R=new Float32Array(_*S*g),A=new Float32Array(m*S*g);for(let L=0;L<g;L++){const B=L%3*2/3-1,W=L>2?0:-1,P=[B,W,0,B+2/3,W,0,B+2/3,W+1,0,B,W,0,B+2/3,W+1,0,B,W+1,0];C.set(P,T*S*L),R.set(x,_*S*L);const E=[L,L,L,L,L,L];A.set(E,m*S*L)}const O=new ti;O.setAttribute("position",new $n(C,T)),O.setAttribute("uv",new $n(R,_)),O.setAttribute("faceIndex",new $n(A,m)),i.push(new ei(O,null)),r>Vi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function of(n,e,t){const i=new fr(n,e,t);return i.texture.mapping=jo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Iv(n,e,t){return new Ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ko(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Fv(n,e,t){const i=new Float32Array(or),r=new Y(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ko(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function af(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ko(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function lf(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Ko(){return`

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
	`}function Nv(n){let e=new WeakMap,t=null;function i(l){if(l&&l.isTexture){const c=l.mapping,u=c===xl||c===gl,h=c===jr||c===qr;if(u||h){let d=e.get(l);const x=d!==void 0?d.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==x)return t===null&&(t=new sf(n)),d=u?t.fromEquirectangular(l,d):t.fromCubemap(l,d),d.texture.pmremVersion=l.pmremVersion,e.set(l,d),d.texture;if(d!==void 0)return d.texture;{const g=l.image;return u&&g&&g.height>0||h&&g&&r(g)?(t===null&&(t=new sf(n)),d=u?t.fromEquirectangular(l):t.fromCubemap(l),d.texture.pmremVersion=l.pmremVersion,e.set(l,d),l.addEventListener("dispose",s),d.texture):null}}}return l}function r(l){let c=0;const u=6;for(let h=0;h<u;h++)l[h]!==void 0&&c++;return c===u}function s(l){const c=l.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Ov(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Us("WebGLRenderer: "+i+" extension not supported."),r}}}function Bv(n,e,t,i){const r={},s=new WeakMap;function a(d){const x=d.target;x.index!==null&&e.remove(x.index);for(const S in x.attributes)e.remove(x.attributes[S]);x.removeEventListener("dispose",a),delete r[x.id];const g=s.get(x);g&&(e.remove(g),s.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function l(d,x){return r[x.id]===!0||(x.addEventListener("dispose",a),r[x.id]=!0,t.memory.geometries++),x}function c(d){const x=d.attributes;for(const g in x)e.update(x[g],n.ARRAY_BUFFER)}function u(d){const x=[],g=d.index,S=d.attributes.position;let T=0;if(g!==null){const C=g.array;T=g.version;for(let R=0,A=C.length;R<A;R+=3){const O=C[R+0],L=C[R+1],B=C[R+2];x.push(O,L,L,B,B,O)}}else if(S!==void 0){const C=S.array;T=S.version;for(let R=0,A=C.length/3-1;R<A;R+=3){const O=R+0,L=R+1,B=R+2;x.push(O,L,L,B,B,O)}}else return;const _=new(Kh(x)?td:ed)(x,1);_.version=T;const m=s.get(d);m&&e.remove(m),s.set(d,_)}function h(d){const x=s.get(d);if(x){const g=d.index;g!==null&&x.version<g.version&&u(d)}else u(d);return s.get(d)}return{get:l,update:c,getWireframeAttribute:h}}function zv(n,e,t){let i;function r(x){i=x}let s,a;function l(x){s=x.type,a=x.bytesPerElement}function c(x,g){n.drawElements(i,g,s,x*a),t.update(g,i,1)}function u(x,g,S){S!==0&&(n.drawElementsInstanced(i,g,s,x*a,S),t.update(g,i,S))}function h(x,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,x,0,S);let _=0;for(let m=0;m<S;m++)_+=g[m];t.update(_,i,1)}function d(x,g,S,T){if(S===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<x.length;m++)u(x[m]/a,g[m],T[m]);else{_.multiDrawElementsInstancedWEBGL(i,g,0,s,x,0,T,0,S);let m=0;for(let C=0;C<S;C++)m+=g[C]*T[C];t.update(m,i,1)}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Vv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,l){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=l*(s/3);break;case n.LINES:t.lines+=l*(s/2);break;case n.LINE_STRIP:t.lines+=l*(s-1);break;case n.LINE_LOOP:t.lines+=l*s;break;case n.POINTS:t.points+=l*s;break;default:zt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Hv(n,e,t){const i=new WeakMap,r=new At;function s(a,l,c){const u=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=h!==void 0?h.length:0;let x=i.get(l);if(x===void 0||x.count!==d){let E=function(){W.dispose(),i.delete(l),l.removeEventListener("dispose",E)};var g=E;x!==void 0&&x.texture.dispose();const S=l.morphAttributes.position!==void 0,T=l.morphAttributes.normal!==void 0,_=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],C=l.morphAttributes.normal||[],R=l.morphAttributes.color||[];let A=0;S===!0&&(A=1),T===!0&&(A=2),_===!0&&(A=3);let O=l.attributes.position.count*A,L=1;O>e.maxTextureSize&&(L=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const B=new Float32Array(O*L*4*d),W=new $h(B,O,L,d);W.type=gi,W.needsUpdate=!0;const P=A*4;for(let z=0;z<d;z++){const Z=m[z],ie=C[z],de=R[z],ue=O*L*4*z;for(let ce=0;ce<Z.count;ce++){const fe=ce*P;S===!0&&(r.fromBufferAttribute(Z,ce),B[ue+fe+0]=r.x,B[ue+fe+1]=r.y,B[ue+fe+2]=r.z,B[ue+fe+3]=0),T===!0&&(r.fromBufferAttribute(ie,ce),B[ue+fe+4]=r.x,B[ue+fe+5]=r.y,B[ue+fe+6]=r.z,B[ue+fe+7]=0),_===!0&&(r.fromBufferAttribute(de,ce),B[ue+fe+8]=r.x,B[ue+fe+9]=r.y,B[ue+fe+10]=r.z,B[ue+fe+11]=de.itemSize===4?r.w:1)}}x={count:d,texture:W,size:new dt(O,L)},i.set(l,x),l.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let S=0;for(let _=0;_<u.length;_++)S+=u[_];const T=l.morphTargetsRelative?1:1-S;c.getUniforms().setValue(n,"morphTargetBaseInfluence",T),c.getUniforms().setValue(n,"morphTargetInfluences",u)}c.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}return{update:s}}function Gv(n,e,t,i){let r=new WeakMap;function s(c){const u=i.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const x=c.skeleton;r.get(x)!==u&&(x.update(),r.set(x,u))}return d}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}const cd=new cn,cf=new sd(1,1),ud=new $h,fd=new ux,hd=new rd,uf=[],ff=[],hf=new Float32Array(16),df=new Float32Array(9),pf=new Float32Array(4);function Qr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=uf[r];if(s===void 0&&(s=new Float32Array(r),uf[r]=s),e!==0){i.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=t,n[a].toArray(s,l)}return s}function Gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $o(n,e){let t=ff[e];t===void 0&&(t=new Int32Array(e),ff[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function kv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Wv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function Xv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function jv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function qv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Gt(t,i))return;pf.set(i),n.uniformMatrix2fv(this.addr,!1,pf),kt(t,i)}}function Yv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Gt(t,i))return;df.set(i),n.uniformMatrix3fv(this.addr,!1,df),kt(t,i)}}function Kv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Gt(t,i))return;hf.set(i),n.uniformMatrix4fv(this.addr,!1,hf),kt(t,i)}}function $v(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Zv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function Jv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function Qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function eM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function tM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function nM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function iM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function rM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(cf.compareFunction=Yh,s=cf):s=cd,t.setTexture2D(e||s,r)}function sM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||fd,r)}function oM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||hd,r)}function aM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ud,r)}function lM(n){switch(n){case 5126:return kv;case 35664:return Wv;case 35665:return Xv;case 35666:return jv;case 35674:return qv;case 35675:return Yv;case 35676:return Kv;case 5124:case 35670:return $v;case 35667:case 35671:return Zv;case 35668:case 35672:return Jv;case 35669:case 35673:return Qv;case 5125:return eM;case 36294:return tM;case 36295:return nM;case 36296:return iM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return sM;case 35680:case 36300:case 36308:case 36293:return oM;case 36289:case 36303:case 36311:case 36292:return aM}}function cM(n,e){n.uniform1fv(this.addr,e)}function uM(n,e){const t=Qr(e,this.size,2);n.uniform2fv(this.addr,t)}function fM(n,e){const t=Qr(e,this.size,3);n.uniform3fv(this.addr,t)}function hM(n,e){const t=Qr(e,this.size,4);n.uniform4fv(this.addr,t)}function dM(n,e){const t=Qr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function pM(n,e){const t=Qr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function mM(n,e){const t=Qr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xM(n,e){n.uniform1iv(this.addr,e)}function gM(n,e){n.uniform2iv(this.addr,e)}function _M(n,e){n.uniform3iv(this.addr,e)}function vM(n,e){n.uniform4iv(this.addr,e)}function MM(n,e){n.uniform1uiv(this.addr,e)}function SM(n,e){n.uniform2uiv(this.addr,e)}function bM(n,e){n.uniform3uiv(this.addr,e)}function yM(n,e){n.uniform4uiv(this.addr,e)}function EM(n,e,t){const i=this.cache,r=e.length,s=$o(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||cd,s[a])}function TM(n,e,t){const i=this.cache,r=e.length,s=$o(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||fd,s[a])}function AM(n,e,t){const i=this.cache,r=e.length,s=$o(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||hd,s[a])}function wM(n,e,t){const i=this.cache,r=e.length,s=$o(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ud,s[a])}function RM(n){switch(n){case 5126:return cM;case 35664:return uM;case 35665:return fM;case 35666:return hM;case 35674:return dM;case 35675:return pM;case 35676:return mM;case 5124:case 35670:return xM;case 35667:case 35671:return gM;case 35668:case 35672:return _M;case 35669:case 35673:return vM;case 5125:return MM;case 36294:return SM;case 36295:return bM;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return TM;case 35680:case 36300:case 36308:case 36293:return AM;case 36289:case 36303:case 36311:case 36292:return wM}}class CM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=lM(t.type)}}class PM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=RM(t.type)}}class DM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(e,t[l.id],i)}}}const Ya=/(\w+)(\])?(\[|\.)?/g;function mf(n,e){n.seq.push(e),n.map[e.id]=e}function LM(n,e,t){const i=n.name,r=i.length;for(Ya.lastIndex=0;;){const s=Ya.exec(i),a=Ya.lastIndex;let l=s[1];const c=s[2]==="]",u=s[3];if(c&&(l=l|0),u===void 0||u==="["&&a+2===r){mf(t,u===void 0?new CM(l,n,e):new PM(l,n,e));break}else{let d=t.map[l];d===void 0&&(d=new DM(l),mf(t,d)),t=d}}}class Ao{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);LM(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const l=t[s],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function xf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const UM=37297;let IM=0;function FM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return i.join(`
`)}const gf=new ot;function NM(n){_t._getMatrix(gf,_t.workingColorSpace,n);const e=`mat3( ${gf.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(n)){case Uo:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function _f(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+FM(n.getShaderSource(e),l)}else return s}function OM(n,e){const t=NM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function BM(n,e){let t;switch(e){case Bm:t="Linear";break;case zm:t="Reinhard";break;case Vm:t="Cineon";break;case Hm:t="ACESFilmic";break;case km:t="AgX";break;case Wm:t="Neutral";break;case Gm:t="Custom";break;default:it("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const go=new Y;function zM(){_t.getLuminanceCoefficients(go);const n=go.x.toFixed(4),e=go.y.toFixed(4),t=go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function HM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function GM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let l=1;s.type===n.FLOAT_MAT2&&(l=2),s.type===n.FLOAT_MAT3&&(l=3),s.type===n.FLOAT_MAT4&&(l=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:l}}return t}function ms(n){return n!==""}function vf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kl(n){return n.replace(kM,XM)}const WM=new Map;function XM(n,e){let t=at[e];if(t===void 0){const i=WM.get(e);if(i!==void 0)t=at[i],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kl(t)}const jM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sf(n){return n.replace(jM,qM)}function qM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function YM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Oh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===gm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function KM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case jr:case qr:e="ENVMAP_TYPE_CUBE";break;case jo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $M(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qr:e="ENVMAP_MODE_REFRACTION";break}return e}function ZM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Bh:e="ENVMAP_BLENDING_MULTIPLY";break;case Nm:e="ENVMAP_BLENDING_MIX";break;case Om:e="ENVMAP_BLENDING_ADD";break}return e}function JM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function QM(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,l=t.fragmentShader;const c=YM(t),u=KM(t),h=$M(t),d=ZM(t),x=JM(t),g=VM(t),S=HM(s),T=r.createProgram();let _,m,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(ms).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(ms).join(`
`),m.length>0&&(m+=`
`)):(_=[bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),m=[bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?at.tonemapping_pars_fragment:"",t.toneMapping!==Gi?BM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,OM("linearToOutputTexel",t.outputColorSpace),zM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ms).join(`
`)),a=Kl(a),a=vf(a,t),a=Mf(a,t),l=Kl(l),l=vf(l,t),l=Mf(l,t),a=Sf(a),l=Sf(l),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===Lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const R=C+_+a,A=C+m+l,O=xf(r,r.VERTEX_SHADER,R),L=xf(r,r.FRAGMENT_SHADER,A);r.attachShader(T,O),r.attachShader(T,L),t.index0AttributeName!==void 0?r.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function B(z){if(n.debug.checkShaderErrors){const Z=r.getProgramInfoLog(T)||"",ie=r.getShaderInfoLog(O)||"",de=r.getShaderInfoLog(L)||"",ue=Z.trim(),ce=ie.trim(),fe=de.trim();let K=!0,ae=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,T,O,L);else{const le=_f(r,O,"vertex"),Te=_f(r,L,"fragment");zt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ue+`
`+le+`
`+Te)}else ue!==""?it("WebGLProgram: Program Info Log:",ue):(ce===""||fe==="")&&(ae=!1);ae&&(z.diagnostics={runnable:K,programLog:ue,vertexShader:{log:ce,prefix:_},fragmentShader:{log:fe,prefix:m}})}r.deleteShader(O),r.deleteShader(L),W=new Ao(r,T),P=GM(r,T)}let W;this.getUniforms=function(){return W===void 0&&B(this),W};let P;this.getAttributes=function(){return P===void 0&&B(this),P};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(T,UM)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=IM++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=O,this.fragmentShader=L,this}let eS=0;class tS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new nS(e),t.set(e,i)),i}}class nS{constructor(e){this.id=eS++,this.code=e,this.usedTimes=0}}function iS(n,e,t,i,r,s,a){const l=new Zh,c=new tS,u=new Set,h=[],d=r.logarithmicDepthBuffer,x=r.vertexTextures;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return u.add(P),P===0?"uv":`uv${P}`}function _(P,E,z,Z,ie){const de=Z.fog,ue=ie.geometry,ce=P.isMeshStandardMaterial?Z.environment:null,fe=(P.isMeshStandardMaterial?t:e).get(P.envMap||ce),K=fe&&fe.mapping===jo?fe.image.height:null,ae=S[P.type];P.precision!==null&&(g=r.getMaxPrecision(P.precision),g!==P.precision&&it("WebGLProgram.getParameters:",P.precision,"not supported, using",g,"instead."));const le=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Te=le!==void 0?le.length:0;let We=0;ue.morphAttributes.position!==void 0&&(We=1),ue.morphAttributes.normal!==void 0&&(We=2),ue.morphAttributes.color!==void 0&&(We=3);let st,ut,pt,he;if(ae){const mt=qn[ae];st=mt.vertexShader,ut=mt.fragmentShader}else st=P.vertexShader,ut=P.fragmentShader,c.update(P),pt=c.getVertexShaderID(P),he=c.getFragmentShaderID(P);const ge=n.getRenderTarget(),Ne=n.state.buffers.depth.getReversed(),Ze=ie.isInstancedMesh===!0,Ge=ie.isBatchedMesh===!0,tt=!!P.map,F=!!P.matcap,N=!!fe,j=!!P.aoMap,w=!!P.lightMap,re=!!P.bumpMap,se=!!P.normalMap,_e=!!P.displacementMap,te=!!P.emissiveMap,xe=!!P.metalnessMap,$=!!P.roughnessMap,ve=P.anisotropy>0,b=P.clearcoat>0,v=P.dispersion>0,H=P.iridescence>0,J=P.sheen>0,oe=P.transmission>0,q=ve&&!!P.anisotropyMap,Ue=b&&!!P.clearcoatMap,be=b&&!!P.clearcoatNormalMap,ze=b&&!!P.clearcoatRoughnessMap,Fe=H&&!!P.iridescenceMap,me=H&&!!P.iridescenceThicknessMap,ye=J&&!!P.sheenColorMap,Ve=J&&!!P.sheenRoughnessMap,ke=!!P.specularMap,Le=!!P.specularColorMap,Ke=!!P.specularIntensityMap,V=oe&&!!P.transmissionMap,Ce=oe&&!!P.thicknessMap,Ae=!!P.gradientMap,we=!!P.alphaMap,Se=P.alphaTest>0,pe=!!P.alphaHash,Be=!!P.extensions;let Je=Gi;P.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Je=n.toneMapping);const yt={shaderID:ae,shaderType:P.type,shaderName:P.name,vertexShader:st,fragmentShader:ut,defines:P.defines,customVertexShaderID:pt,customFragmentShaderID:he,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:g,batching:Ge,batchingColor:Ge&&ie._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&ie.instanceColor!==null,instancingMorph:Ze&&ie.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Yr,alphaToCoverage:!!P.alphaToCoverage,map:tt,matcap:F,envMap:N,envMapMode:N&&fe.mapping,envMapCubeUVHeight:K,aoMap:j,lightMap:w,bumpMap:re,normalMap:se,displacementMap:x&&_e,emissiveMap:te,normalMapObjectSpace:se&&P.normalMapType===Ym,normalMapTangentSpace:se&&P.normalMapType===qh,metalnessMap:xe,roughnessMap:$,anisotropy:ve,anisotropyMap:q,clearcoat:b,clearcoatMap:Ue,clearcoatNormalMap:be,clearcoatRoughnessMap:ze,dispersion:v,iridescence:H,iridescenceMap:Fe,iridescenceThicknessMap:me,sheen:J,sheenColorMap:ye,sheenRoughnessMap:Ve,specularMap:ke,specularColorMap:Le,specularIntensityMap:Ke,transmission:oe,transmissionMap:V,thicknessMap:Ce,gradientMap:Ae,opaque:P.transparent===!1&&P.blending===Hr&&P.alphaToCoverage===!1,alphaMap:we,alphaTest:Se,alphaHash:pe,combine:P.combine,mapUv:tt&&T(P.map.channel),aoMapUv:j&&T(P.aoMap.channel),lightMapUv:w&&T(P.lightMap.channel),bumpMapUv:re&&T(P.bumpMap.channel),normalMapUv:se&&T(P.normalMap.channel),displacementMapUv:_e&&T(P.displacementMap.channel),emissiveMapUv:te&&T(P.emissiveMap.channel),metalnessMapUv:xe&&T(P.metalnessMap.channel),roughnessMapUv:$&&T(P.roughnessMap.channel),anisotropyMapUv:q&&T(P.anisotropyMap.channel),clearcoatMapUv:Ue&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:be&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:me&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&T(P.sheenRoughnessMap.channel),specularMapUv:ke&&T(P.specularMap.channel),specularColorMapUv:Le&&T(P.specularColorMap.channel),specularIntensityMapUv:Ke&&T(P.specularIntensityMap.channel),transmissionMapUv:V&&T(P.transmissionMap.channel),thicknessMapUv:Ce&&T(P.thicknessMap.channel),alphaMapUv:we&&T(P.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(se||ve),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:ie.isPoints===!0&&!!ue.attributes.uv&&(tt||we),fog:!!de,useFog:P.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ne,skinning:ie.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:We,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:P.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Je,decodeVideoTexture:tt&&P.map.isVideoTexture===!0&&_t.getTransfer(P.map.colorSpace)===Tt,decodeVideoTextureEmissive:te&&P.emissiveMap.isVideoTexture===!0&&_t.getTransfer(P.emissiveMap.colorSpace)===Tt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===mi,flipSided:P.side===pn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Be&&P.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&P.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return yt.vertexUv1s=u.has(1),yt.vertexUv2s=u.has(2),yt.vertexUv3s=u.has(3),u.clear(),yt}function m(P){const E=[];if(P.shaderID?E.push(P.shaderID):(E.push(P.customVertexShaderID),E.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)E.push(z),E.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(C(E,P),R(E,P),E.push(n.outputColorSpace)),E.push(P.customProgramCacheKey),E.join()}function C(P,E){P.push(E.precision),P.push(E.outputColorSpace),P.push(E.envMapMode),P.push(E.envMapCubeUVHeight),P.push(E.mapUv),P.push(E.alphaMapUv),P.push(E.lightMapUv),P.push(E.aoMapUv),P.push(E.bumpMapUv),P.push(E.normalMapUv),P.push(E.displacementMapUv),P.push(E.emissiveMapUv),P.push(E.metalnessMapUv),P.push(E.roughnessMapUv),P.push(E.anisotropyMapUv),P.push(E.clearcoatMapUv),P.push(E.clearcoatNormalMapUv),P.push(E.clearcoatRoughnessMapUv),P.push(E.iridescenceMapUv),P.push(E.iridescenceThicknessMapUv),P.push(E.sheenColorMapUv),P.push(E.sheenRoughnessMapUv),P.push(E.specularMapUv),P.push(E.specularColorMapUv),P.push(E.specularIntensityMapUv),P.push(E.transmissionMapUv),P.push(E.thicknessMapUv),P.push(E.combine),P.push(E.fogExp2),P.push(E.sizeAttenuation),P.push(E.morphTargetsCount),P.push(E.morphAttributeCount),P.push(E.numDirLights),P.push(E.numPointLights),P.push(E.numSpotLights),P.push(E.numSpotLightMaps),P.push(E.numHemiLights),P.push(E.numRectAreaLights),P.push(E.numDirLightShadows),P.push(E.numPointLightShadows),P.push(E.numSpotLightShadows),P.push(E.numSpotLightShadowsWithMaps),P.push(E.numLightProbes),P.push(E.shadowMapType),P.push(E.toneMapping),P.push(E.numClippingPlanes),P.push(E.numClipIntersection),P.push(E.depthPacking)}function R(P,E){l.disableAll(),E.supportsVertexTextures&&l.enable(0),E.instancing&&l.enable(1),E.instancingColor&&l.enable(2),E.instancingMorph&&l.enable(3),E.matcap&&l.enable(4),E.envMap&&l.enable(5),E.normalMapObjectSpace&&l.enable(6),E.normalMapTangentSpace&&l.enable(7),E.clearcoat&&l.enable(8),E.iridescence&&l.enable(9),E.alphaTest&&l.enable(10),E.vertexColors&&l.enable(11),E.vertexAlphas&&l.enable(12),E.vertexUv1s&&l.enable(13),E.vertexUv2s&&l.enable(14),E.vertexUv3s&&l.enable(15),E.vertexTangents&&l.enable(16),E.anisotropy&&l.enable(17),E.alphaHash&&l.enable(18),E.batching&&l.enable(19),E.dispersion&&l.enable(20),E.batchingColor&&l.enable(21),E.gradientMap&&l.enable(22),P.push(l.mask),l.disableAll(),E.fog&&l.enable(0),E.useFog&&l.enable(1),E.flatShading&&l.enable(2),E.logarithmicDepthBuffer&&l.enable(3),E.reversedDepthBuffer&&l.enable(4),E.skinning&&l.enable(5),E.morphTargets&&l.enable(6),E.morphNormals&&l.enable(7),E.morphColors&&l.enable(8),E.premultipliedAlpha&&l.enable(9),E.shadowMapEnabled&&l.enable(10),E.doubleSided&&l.enable(11),E.flipSided&&l.enable(12),E.useDepthPacking&&l.enable(13),E.dithering&&l.enable(14),E.transmission&&l.enable(15),E.sheen&&l.enable(16),E.opaque&&l.enable(17),E.pointsUvs&&l.enable(18),E.decodeVideoTexture&&l.enable(19),E.decodeVideoTextureEmissive&&l.enable(20),E.alphaToCoverage&&l.enable(21),P.push(l.mask)}function A(P){const E=S[P.type];let z;if(E){const Z=qn[E];z=Ex.clone(Z.uniforms)}else z=P.uniforms;return z}function O(P,E){let z;for(let Z=0,ie=h.length;Z<ie;Z++){const de=h[Z];if(de.cacheKey===E){z=de,++z.usedTimes;break}}return z===void 0&&(z=new QM(n,E,P,s),h.push(z)),z}function L(P){if(--P.usedTimes===0){const E=h.indexOf(P);h[E]=h[h.length-1],h.pop(),P.destroy()}}function B(P){c.remove(P)}function W(){c.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:A,acquireProgram:O,releaseProgram:L,releaseShaderCache:B,programs:h,dispose:W}}function rS(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let l=n.get(a);return l===void 0&&(l={},n.set(a,l)),l}function i(a){n.delete(a)}function r(a,l,c){n.get(a)[l]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function sS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function yf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ef(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,x,g,S,T,_){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:x,material:g,groupOrder:S,renderOrder:d.renderOrder,z:T,group:_},n[e]=m):(m.id=d.id,m.object=d,m.geometry=x,m.material=g,m.groupOrder=S,m.renderOrder=d.renderOrder,m.z=T,m.group=_),e++,m}function l(d,x,g,S,T,_){const m=a(d,x,g,S,T,_);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):t.push(m)}function c(d,x,g,S,T,_){const m=a(d,x,g,S,T,_);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):t.unshift(m)}function u(d,x){t.length>1&&t.sort(d||sS),i.length>1&&i.sort(x||yf),r.length>1&&r.sort(x||yf)}function h(){for(let d=e,x=n.length;d<x;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function oS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Ef,n.set(i,[a])):r>=s.length?(a=new Ef,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function aS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new vt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function lS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let cS=0;function uS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function fS(n){const e=new aS,t=lS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new Y);const r=new Y,s=new Bt,a=new Bt;function l(u){let h=0,d=0,x=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let g=0,S=0,T=0,_=0,m=0,C=0,R=0,A=0,O=0,L=0,B=0;u.sort(uS);for(let P=0,E=u.length;P<E;P++){const z=u[P],Z=z.color,ie=z.intensity,de=z.distance,ue=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=Z.r*ie,d+=Z.g*ie,x+=Z.b*ie;else if(z.isLightProbe){for(let ce=0;ce<9;ce++)i.probe[ce].addScaledVector(z.sh.coefficients[ce],ie);B++}else if(z.isDirectionalLight){const ce=e.get(z);if(ce.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const fe=z.shadow,K=t.get(z);K.shadowIntensity=fe.intensity,K.shadowBias=fe.bias,K.shadowNormalBias=fe.normalBias,K.shadowRadius=fe.radius,K.shadowMapSize=fe.mapSize,i.directionalShadow[g]=K,i.directionalShadowMap[g]=ue,i.directionalShadowMatrix[g]=z.shadow.matrix,C++}i.directional[g]=ce,g++}else if(z.isSpotLight){const ce=e.get(z);ce.position.setFromMatrixPosition(z.matrixWorld),ce.color.copy(Z).multiplyScalar(ie),ce.distance=de,ce.coneCos=Math.cos(z.angle),ce.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ce.decay=z.decay,i.spot[T]=ce;const fe=z.shadow;if(z.map&&(i.spotLightMap[O]=z.map,O++,fe.updateMatrices(z),z.castShadow&&L++),i.spotLightMatrix[T]=fe.matrix,z.castShadow){const K=t.get(z);K.shadowIntensity=fe.intensity,K.shadowBias=fe.bias,K.shadowNormalBias=fe.normalBias,K.shadowRadius=fe.radius,K.shadowMapSize=fe.mapSize,i.spotShadow[T]=K,i.spotShadowMap[T]=ue,A++}T++}else if(z.isRectAreaLight){const ce=e.get(z);ce.color.copy(Z).multiplyScalar(ie),ce.halfWidth.set(z.width*.5,0,0),ce.halfHeight.set(0,z.height*.5,0),i.rectArea[_]=ce,_++}else if(z.isPointLight){const ce=e.get(z);if(ce.color.copy(z.color).multiplyScalar(z.intensity),ce.distance=z.distance,ce.decay=z.decay,z.castShadow){const fe=z.shadow,K=t.get(z);K.shadowIntensity=fe.intensity,K.shadowBias=fe.bias,K.shadowNormalBias=fe.normalBias,K.shadowRadius=fe.radius,K.shadowMapSize=fe.mapSize,K.shadowCameraNear=fe.camera.near,K.shadowCameraFar=fe.camera.far,i.pointShadow[S]=K,i.pointShadowMap[S]=ue,i.pointShadowMatrix[S]=z.shadow.matrix,R++}i.point[S]=ce,S++}else if(z.isHemisphereLight){const ce=e.get(z);ce.skyColor.copy(z.color).multiplyScalar(ie),ce.groundColor.copy(z.groundColor).multiplyScalar(ie),i.hemi[m]=ce,m++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=x;const W=i.hash;(W.directionalLength!==g||W.pointLength!==S||W.spotLength!==T||W.rectAreaLength!==_||W.hemiLength!==m||W.numDirectionalShadows!==C||W.numPointShadows!==R||W.numSpotShadows!==A||W.numSpotMaps!==O||W.numLightProbes!==B)&&(i.directional.length=g,i.spot.length=T,i.rectArea.length=_,i.point.length=S,i.hemi.length=m,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=A+O-L,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=B,W.directionalLength=g,W.pointLength=S,W.spotLength=T,W.rectAreaLength=_,W.hemiLength=m,W.numDirectionalShadows=C,W.numPointShadows=R,W.numSpotShadows=A,W.numSpotMaps=O,W.numLightProbes=B,i.version=cS++)}function c(u,h){let d=0,x=0,g=0,S=0,T=0;const _=h.matrixWorldInverse;for(let m=0,C=u.length;m<C;m++){const R=u[m];if(R.isDirectionalLight){const A=i.directional[d];A.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(_),d++}else if(R.isSpotLight){const A=i.spot[g];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(_),A.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(_),g++}else if(R.isRectAreaLight){const A=i.rectArea[S];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(_),a.identity(),s.copy(R.matrixWorld),s.premultiply(_),a.extractRotation(s),A.halfWidth.set(R.width*.5,0,0),A.halfHeight.set(0,R.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),S++}else if(R.isPointLight){const A=i.point[x];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(_),x++}else if(R.isHemisphereLight){const A=i.hemi[T];A.direction.setFromMatrixPosition(R.matrixWorld),A.direction.transformDirection(_),T++}}}return{setup:l,setupView:c,state:i}}function Tf(n){const e=new fS(n),t=[],i=[];function r(h){u.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function l(){e.setup(t)}function c(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function hS(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let l;return a===void 0?(l=new Tf(n),e.set(r,[l])):s>=a.length?(l=new Tf(n),a.push(l)):l=a[s],l}function i(){e=new WeakMap}return{get:t,dispose:i}}const dS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pS=`uniform sampler2D shadow_pass;
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
}`;function mS(n,e,t){let i=new Tc;const r=new dt,s=new dt,a=new At,l=new Fx({depthPacking:qm}),c=new Nx,u={},h=t.maxTextureSize,d={[Xi]:pn,[pn]:Xi,[mi]:mi},x=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:dS,fragmentShader:pS}),g=x.clone();g.defines.HORIZONTAL_PASS=1;const S=new ti;S.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ei(S,x),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oh;let m=this.type;this.render=function(L,B,W){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||L.length===0)return;const P=n.getRenderTarget(),E=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(vi),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ie=m!==fi&&this.type===fi,de=m===fi&&this.type!==fi;for(let ue=0,ce=L.length;ue<ce;ue++){const fe=L[ue],K=fe.shadow;if(K===void 0){it("WebGLShadowMap:",fe,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const ae=K.getFrameExtents();if(r.multiply(ae),s.copy(K.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ae.x),r.x=s.x*ae.x,K.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ae.y),r.y=s.y*ae.y,K.mapSize.y=s.y)),K.map===null||ie===!0||de===!0){const Te=this.type!==fi?{minFilter:En,magFilter:En}:{};K.map!==null&&K.map.dispose(),K.map=new fr(r.x,r.y,Te),K.map.texture.name=fe.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();const le=K.getViewportCount();for(let Te=0;Te<le;Te++){const We=K.getViewport(Te);a.set(s.x*We.x,s.y*We.y,s.x*We.z,s.y*We.w),Z.viewport(a),K.updateMatrices(fe,Te),i=K.getFrustum(),A(B,W,K.camera,fe,this.type)}K.isPointLightShadow!==!0&&this.type===fi&&C(K,W),K.needsUpdate=!1}m=this.type,_.needsUpdate=!1,n.setRenderTarget(P,E,z)};function C(L,B){const W=e.update(T);x.defines.VSM_SAMPLES!==L.blurSamples&&(x.defines.VSM_SAMPLES=L.blurSamples,g.defines.VSM_SAMPLES=L.blurSamples,x.needsUpdate=!0,g.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new fr(r.x,r.y)),x.uniforms.shadow_pass.value=L.map.texture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(B,null,W,x,T,null),g.uniforms.shadow_pass.value=L.mapPass.texture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(B,null,W,g,T,null)}function R(L,B,W,P){let E=null;const z=W.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(z!==void 0)E=z;else if(E=W.isPointLight===!0?c:l,n.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Z=E.uuid,ie=B.uuid;let de=u[Z];de===void 0&&(de={},u[Z]=de);let ue=de[ie];ue===void 0&&(ue=E.clone(),de[ie]=ue,B.addEventListener("dispose",O)),E=ue}if(E.visible=B.visible,E.wireframe=B.wireframe,P===fi?E.side=B.shadowSide!==null?B.shadowSide:B.side:E.side=B.shadowSide!==null?B.shadowSide:d[B.side],E.alphaMap=B.alphaMap,E.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,E.map=B.map,E.clipShadows=B.clipShadows,E.clippingPlanes=B.clippingPlanes,E.clipIntersection=B.clipIntersection,E.displacementMap=B.displacementMap,E.displacementScale=B.displacementScale,E.displacementBias=B.displacementBias,E.wireframeLinewidth=B.wireframeLinewidth,E.linewidth=B.linewidth,W.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Z=n.properties.get(E);Z.light=W}return E}function A(L,B,W,P,E){if(L.visible===!1)return;if(L.layers.test(B.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&E===fi)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,L.matrixWorld);const ie=e.update(L),de=L.material;if(Array.isArray(de)){const ue=ie.groups;for(let ce=0,fe=ue.length;ce<fe;ce++){const K=ue[ce],ae=de[K.materialIndex];if(ae&&ae.visible){const le=R(L,ae,P,E);L.onBeforeShadow(n,L,B,W,ie,le,K),n.renderBufferDirect(W,null,ie,le,L,K),L.onAfterShadow(n,L,B,W,ie,le,K)}}}else if(de.visible){const ue=R(L,de,P,E);L.onBeforeShadow(n,L,B,W,ie,ue,null),n.renderBufferDirect(W,null,ie,ue,L,null),L.onAfterShadow(n,L,B,W,ie,ue,null)}}const Z=L.children;for(let ie=0,de=Z.length;ie<de;ie++)A(Z[ie],B,W,P,E)}function O(L){L.target.removeEventListener("dispose",O);for(const W in u){const P=u[W],E=L.target.uuid;E in P&&(P[E].dispose(),delete P[E])}}}const xS={[cl]:ul,[fl]:pl,[hl]:ml,[Xr]:dl,[ul]:cl,[pl]:fl,[ml]:hl,[dl]:Xr};function gS(n,e){function t(){let V=!1;const Ce=new At;let Ae=null;const we=new At(0,0,0,0);return{setMask:function(Se){Ae!==Se&&!V&&(n.colorMask(Se,Se,Se,Se),Ae=Se)},setLocked:function(Se){V=Se},setClear:function(Se,pe,Be,Je,yt){yt===!0&&(Se*=Je,pe*=Je,Be*=Je),Ce.set(Se,pe,Be,Je),we.equals(Ce)===!1&&(n.clearColor(Se,pe,Be,Je),we.copy(Ce))},reset:function(){V=!1,Ae=null,we.set(-1,0,0,0)}}}function i(){let V=!1,Ce=!1,Ae=null,we=null,Se=null;return{setReversed:function(pe){if(Ce!==pe){const Be=e.get("EXT_clip_control");pe?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),Ce=pe;const Je=Se;Se=null,this.setClear(Je)}},getReversed:function(){return Ce},setTest:function(pe){pe?ge(n.DEPTH_TEST):Ne(n.DEPTH_TEST)},setMask:function(pe){Ae!==pe&&!V&&(n.depthMask(pe),Ae=pe)},setFunc:function(pe){if(Ce&&(pe=xS[pe]),we!==pe){switch(pe){case cl:n.depthFunc(n.NEVER);break;case ul:n.depthFunc(n.ALWAYS);break;case fl:n.depthFunc(n.LESS);break;case Xr:n.depthFunc(n.LEQUAL);break;case hl:n.depthFunc(n.EQUAL);break;case dl:n.depthFunc(n.GEQUAL);break;case pl:n.depthFunc(n.GREATER);break;case ml:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}we=pe}},setLocked:function(pe){V=pe},setClear:function(pe){Se!==pe&&(Ce&&(pe=1-pe),n.clearDepth(pe),Se=pe)},reset:function(){V=!1,Ae=null,we=null,Se=null,Ce=!1}}}function r(){let V=!1,Ce=null,Ae=null,we=null,Se=null,pe=null,Be=null,Je=null,yt=null;return{setTest:function(mt){V||(mt?ge(n.STENCIL_TEST):Ne(n.STENCIL_TEST))},setMask:function(mt){Ce!==mt&&!V&&(n.stencilMask(mt),Ce=mt)},setFunc:function(mt,nn,xn){(Ae!==mt||we!==nn||Se!==xn)&&(n.stencilFunc(mt,nn,xn),Ae=mt,we=nn,Se=xn)},setOp:function(mt,nn,xn){(pe!==mt||Be!==nn||Je!==xn)&&(n.stencilOp(mt,nn,xn),pe=mt,Be=nn,Je=xn)},setLocked:function(mt){V=mt},setClear:function(mt){yt!==mt&&(n.clearStencil(mt),yt=mt)},reset:function(){V=!1,Ce=null,Ae=null,we=null,Se=null,pe=null,Be=null,Je=null,yt=null}}}const s=new t,a=new i,l=new r,c=new WeakMap,u=new WeakMap;let h={},d={},x=new WeakMap,g=[],S=null,T=!1,_=null,m=null,C=null,R=null,A=null,O=null,L=null,B=new vt(0,0,0),W=0,P=!1,E=null,z=null,Z=null,ie=null,de=null;const ue=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,fe=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(K)[1]),ce=fe>=1):K.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),ce=fe>=2);let ae=null,le={};const Te=n.getParameter(n.SCISSOR_BOX),We=n.getParameter(n.VIEWPORT),st=new At().fromArray(Te),ut=new At().fromArray(We);function pt(V,Ce,Ae,we){const Se=new Uint8Array(4),pe=n.createTexture();n.bindTexture(V,pe),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<Ae;Be++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,we,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(Ce+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return pe}const he={};he[n.TEXTURE_2D]=pt(n.TEXTURE_2D,n.TEXTURE_2D,1),he[n.TEXTURE_CUBE_MAP]=pt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[n.TEXTURE_2D_ARRAY]=pt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),he[n.TEXTURE_3D]=pt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),ge(n.DEPTH_TEST),a.setFunc(Xr),re(!1),se(Au),ge(n.CULL_FACE),j(vi);function ge(V){h[V]!==!0&&(n.enable(V),h[V]=!0)}function Ne(V){h[V]!==!1&&(n.disable(V),h[V]=!1)}function Ze(V,Ce){return d[V]!==Ce?(n.bindFramebuffer(V,Ce),d[V]=Ce,V===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ce),V===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ge(V,Ce){let Ae=g,we=!1;if(V){Ae=x.get(Ce),Ae===void 0&&(Ae=[],x.set(Ce,Ae));const Se=V.textures;if(Ae.length!==Se.length||Ae[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,Be=Se.length;pe<Be;pe++)Ae[pe]=n.COLOR_ATTACHMENT0+pe;Ae.length=Se.length,we=!0}}else Ae[0]!==n.BACK&&(Ae[0]=n.BACK,we=!0);we&&n.drawBuffers(Ae)}function tt(V){return S!==V?(n.useProgram(V),S=V,!0):!1}const F={[sr]:n.FUNC_ADD,[vm]:n.FUNC_SUBTRACT,[Mm]:n.FUNC_REVERSE_SUBTRACT};F[Sm]=n.MIN,F[bm]=n.MAX;const N={[ym]:n.ZERO,[Em]:n.ONE,[Tm]:n.SRC_COLOR,[al]:n.SRC_ALPHA,[Dm]:n.SRC_ALPHA_SATURATE,[Cm]:n.DST_COLOR,[wm]:n.DST_ALPHA,[Am]:n.ONE_MINUS_SRC_COLOR,[ll]:n.ONE_MINUS_SRC_ALPHA,[Pm]:n.ONE_MINUS_DST_COLOR,[Rm]:n.ONE_MINUS_DST_ALPHA,[Lm]:n.CONSTANT_COLOR,[Um]:n.ONE_MINUS_CONSTANT_COLOR,[Im]:n.CONSTANT_ALPHA,[Fm]:n.ONE_MINUS_CONSTANT_ALPHA};function j(V,Ce,Ae,we,Se,pe,Be,Je,yt,mt){if(V===vi){T===!0&&(Ne(n.BLEND),T=!1);return}if(T===!1&&(ge(n.BLEND),T=!0),V!==_m){if(V!==_||mt!==P){if((m!==sr||A!==sr)&&(n.blendEquation(n.FUNC_ADD),m=sr,A=sr),mt)switch(V){case Hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wu:n.blendFunc(n.ONE,n.ONE);break;case Ru:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:zt("WebGLState: Invalid blending: ",V);break}else switch(V){case Hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ru:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cu:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",V);break}C=null,R=null,O=null,L=null,B.set(0,0,0),W=0,_=V,P=mt}return}Se=Se||Ce,pe=pe||Ae,Be=Be||we,(Ce!==m||Se!==A)&&(n.blendEquationSeparate(F[Ce],F[Se]),m=Ce,A=Se),(Ae!==C||we!==R||pe!==O||Be!==L)&&(n.blendFuncSeparate(N[Ae],N[we],N[pe],N[Be]),C=Ae,R=we,O=pe,L=Be),(Je.equals(B)===!1||yt!==W)&&(n.blendColor(Je.r,Je.g,Je.b,yt),B.copy(Je),W=yt),_=V,P=!1}function w(V,Ce){V.side===mi?Ne(n.CULL_FACE):ge(n.CULL_FACE);let Ae=V.side===pn;Ce&&(Ae=!Ae),re(Ae),V.blending===Hr&&V.transparent===!1?j(vi):j(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),s.setMask(V.colorWrite);const we=V.stencilWrite;l.setTest(we),we&&(l.setMask(V.stencilWriteMask),l.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),l.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),te(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):Ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function re(V){E!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),E=V)}function se(V){V!==mm?(ge(n.CULL_FACE),V!==z&&(V===Au?n.cullFace(n.BACK):V===xm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ne(n.CULL_FACE),z=V}function _e(V){V!==Z&&(ce&&n.lineWidth(V),Z=V)}function te(V,Ce,Ae){V?(ge(n.POLYGON_OFFSET_FILL),(ie!==Ce||de!==Ae)&&(n.polygonOffset(Ce,Ae),ie=Ce,de=Ae)):Ne(n.POLYGON_OFFSET_FILL)}function xe(V){V?ge(n.SCISSOR_TEST):Ne(n.SCISSOR_TEST)}function $(V){V===void 0&&(V=n.TEXTURE0+ue-1),ae!==V&&(n.activeTexture(V),ae=V)}function ve(V,Ce,Ae){Ae===void 0&&(ae===null?Ae=n.TEXTURE0+ue-1:Ae=ae);let we=le[Ae];we===void 0&&(we={type:void 0,texture:void 0},le[Ae]=we),(we.type!==V||we.texture!==Ce)&&(ae!==Ae&&(n.activeTexture(Ae),ae=Ae),n.bindTexture(V,Ce||he[V]),we.type=V,we.texture=Ce)}function b(){const V=le[ae];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function H(){try{n.compressedTexImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function J(){try{n.texSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function oe(){try{n.texSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Ue(){try{n.compressedTexSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function be(){try{n.texStorage2D(...arguments)}catch(V){V("WebGLState:",V)}}function ze(){try{n.texStorage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Fe(){try{n.texImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function me(){try{n.texImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function ye(V){st.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),st.copy(V))}function Ve(V){ut.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),ut.copy(V))}function ke(V,Ce){let Ae=u.get(Ce);Ae===void 0&&(Ae=new WeakMap,u.set(Ce,Ae));let we=Ae.get(V);we===void 0&&(we=n.getUniformBlockIndex(Ce,V.name),Ae.set(V,we))}function Le(V,Ce){const we=u.get(Ce).get(V);c.get(Ce)!==we&&(n.uniformBlockBinding(Ce,we,V.__bindingPointIndex),c.set(Ce,we))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ae=null,le={},d={},x=new WeakMap,g=[],S=null,T=!1,_=null,m=null,C=null,R=null,A=null,O=null,L=null,B=new vt(0,0,0),W=0,P=!1,E=null,z=null,Z=null,ie=null,de=null,st.set(0,0,n.canvas.width,n.canvas.height),ut.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:ge,disable:Ne,bindFramebuffer:Ze,drawBuffers:Ge,useProgram:tt,setBlending:j,setMaterial:w,setFlipSided:re,setCullFace:se,setLineWidth:_e,setPolygonOffset:te,setScissorTest:xe,activeTexture:$,bindTexture:ve,unbindTexture:b,compressedTexImage2D:v,compressedTexImage3D:H,texImage2D:Fe,texImage3D:me,updateUBOMapping:ke,uniformBlockBinding:Le,texStorage2D:be,texStorage3D:ze,texSubImage2D:J,texSubImage3D:oe,compressedTexSubImage2D:q,compressedTexSubImage3D:Ue,scissor:ye,viewport:Ve,reset:Ke}}function _S(n,e,t,i,r,s,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new dt,h=new WeakMap;let d;const x=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(b,v){return g?new OffscreenCanvas(b,v):Fo("canvas")}function T(b,v,H){let J=1;const oe=ve(b);if((oe.width>H||oe.height>H)&&(J=H/Math.max(oe.width,oe.height)),J<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const q=Math.floor(J*oe.width),Ue=Math.floor(J*oe.height);d===void 0&&(d=S(q,Ue));const be=v?S(q,Ue):d;return be.width=q,be.height=Ue,be.getContext("2d").drawImage(b,0,0,q,Ue),it("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+q+"x"+Ue+")."),be}else return"data"in b&&it("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),b;return b}function _(b){return b.generateMipmaps}function m(b){n.generateMipmap(b)}function C(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(b,v,H,J,oe=!1){if(b!==null){if(n[b]!==void 0)return n[b];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let q=v;if(v===n.RED&&(H===n.FLOAT&&(q=n.R32F),H===n.HALF_FLOAT&&(q=n.R16F),H===n.UNSIGNED_BYTE&&(q=n.R8)),v===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(q=n.R8UI),H===n.UNSIGNED_SHORT&&(q=n.R16UI),H===n.UNSIGNED_INT&&(q=n.R32UI),H===n.BYTE&&(q=n.R8I),H===n.SHORT&&(q=n.R16I),H===n.INT&&(q=n.R32I)),v===n.RG&&(H===n.FLOAT&&(q=n.RG32F),H===n.HALF_FLOAT&&(q=n.RG16F),H===n.UNSIGNED_BYTE&&(q=n.RG8)),v===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(q=n.RG8UI),H===n.UNSIGNED_SHORT&&(q=n.RG16UI),H===n.UNSIGNED_INT&&(q=n.RG32UI),H===n.BYTE&&(q=n.RG8I),H===n.SHORT&&(q=n.RG16I),H===n.INT&&(q=n.RG32I)),v===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(q=n.RGB8UI),H===n.UNSIGNED_SHORT&&(q=n.RGB16UI),H===n.UNSIGNED_INT&&(q=n.RGB32UI),H===n.BYTE&&(q=n.RGB8I),H===n.SHORT&&(q=n.RGB16I),H===n.INT&&(q=n.RGB32I)),v===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),H===n.UNSIGNED_INT&&(q=n.RGBA32UI),H===n.BYTE&&(q=n.RGBA8I),H===n.SHORT&&(q=n.RGBA16I),H===n.INT&&(q=n.RGBA32I)),v===n.RGB&&(H===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),v===n.RGBA){const Ue=oe?Uo:_t.getTransfer(J);H===n.FLOAT&&(q=n.RGBA32F),H===n.HALF_FLOAT&&(q=n.RGBA16F),H===n.UNSIGNED_BYTE&&(q=Ue===Tt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function A(b,v){let H;return b?v===null||v===ur||v===Ps?H=n.DEPTH24_STENCIL8:v===gi?H=n.DEPTH32F_STENCIL8:v===Cs&&(H=n.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ur||v===Ps?H=n.DEPTH_COMPONENT24:v===gi?H=n.DEPTH_COMPONENT32F:v===Cs&&(H=n.DEPTH_COMPONENT16),H}function O(b,v){return _(b)===!0||b.isFramebufferTexture&&b.minFilter!==En&&b.minFilter!==Ln?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function L(b){const v=b.target;v.removeEventListener("dispose",L),W(v),v.isVideoTexture&&h.delete(v)}function B(b){const v=b.target;v.removeEventListener("dispose",B),E(v)}function W(b){const v=i.get(b);if(v.__webglInit===void 0)return;const H=b.source,J=x.get(H);if(J){const oe=J[v.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&P(b),Object.keys(J).length===0&&x.delete(H)}i.remove(b)}function P(b){const v=i.get(b);n.deleteTexture(v.__webglTexture);const H=b.source,J=x.get(H);delete J[v.__cacheKey],a.memory.textures--}function E(b){const v=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let oe=0;oe<v.__webglFramebuffer[J].length;oe++)n.deleteFramebuffer(v.__webglFramebuffer[J][oe]);else n.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)n.deleteFramebuffer(v.__webglFramebuffer[J]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const H=b.textures;for(let J=0,oe=H.length;J<oe;J++){const q=i.get(H[J]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(H[J])}i.remove(b)}let z=0;function Z(){z=0}function ie(){const b=z;return b>=r.maxTextures&&it("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),z+=1,b}function de(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function ue(b,v){const H=i.get(b);if(b.isVideoTexture&&xe(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&H.__version!==b.version){const J=b.image;if(J===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{he(H,b,v);return}}else b.isExternalTexture&&(H.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+v)}function ce(b,v){const H=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){he(H,b,v);return}else b.isExternalTexture&&(H.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+v)}function fe(b,v){const H=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){he(H,b,v);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+v)}function K(b,v){const H=i.get(b);if(b.version>0&&H.__version!==b.version){ge(H,b,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+v)}const ae={[_l]:n.REPEAT,[xi]:n.CLAMP_TO_EDGE,[vl]:n.MIRRORED_REPEAT},le={[En]:n.NEAREST,[Xm]:n.NEAREST_MIPMAP_NEAREST,[$s]:n.NEAREST_MIPMAP_LINEAR,[Ln]:n.LINEAR,[ga]:n.LINEAR_MIPMAP_NEAREST,[ar]:n.LINEAR_MIPMAP_LINEAR},Te={[Km]:n.NEVER,[tx]:n.ALWAYS,[$m]:n.LESS,[Yh]:n.LEQUAL,[Zm]:n.EQUAL,[ex]:n.GEQUAL,[Jm]:n.GREATER,[Qm]:n.NOTEQUAL};function We(b,v){if(v.type===gi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Ln||v.magFilter===ga||v.magFilter===$s||v.magFilter===ar||v.minFilter===Ln||v.minFilter===ga||v.minFilter===$s||v.minFilter===ar)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,ae[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,ae[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,ae[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,le[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,le[v.minFilter]),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Te[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===En||v.minFilter!==$s&&v.minFilter!==ar||v.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function st(b,v){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",L));const J=v.source;let oe=x.get(J);oe===void 0&&(oe={},x.set(J,oe));const q=de(v);if(q!==b.__cacheKey){oe[q]===void 0&&(oe[q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),oe[q].usedTimes++;const Ue=oe[b.__cacheKey];Ue!==void 0&&(oe[b.__cacheKey].usedTimes--,Ue.usedTimes===0&&P(v)),b.__cacheKey=q,b.__webglTexture=oe[q].texture}return H}function ut(b,v,H){return Math.floor(Math.floor(b/H)/v)}function pt(b,v,H,J){const q=b.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,H,J,v.data);else{q.sort((me,ye)=>me.start-ye.start);let Ue=0;for(let me=1;me<q.length;me++){const ye=q[Ue],Ve=q[me],ke=ye.start+ye.count,Le=ut(Ve.start,v.width,4),Ke=ut(ye.start,v.width,4);Ve.start<=ke+1&&Le===Ke&&ut(Ve.start+Ve.count-1,v.width,4)===Le?ye.count=Math.max(ye.count,Ve.start+Ve.count-ye.start):(++Ue,q[Ue]=Ve)}q.length=Ue+1;const be=n.getParameter(n.UNPACK_ROW_LENGTH),ze=n.getParameter(n.UNPACK_SKIP_PIXELS),Fe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let me=0,ye=q.length;me<ye;me++){const Ve=q[me],ke=Math.floor(Ve.start/4),Le=Math.ceil(Ve.count/4),Ke=ke%v.width,V=Math.floor(ke/v.width),Ce=Le,Ae=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,V),t.texSubImage2D(n.TEXTURE_2D,0,Ke,V,Ce,Ae,H,J,v.data)}b.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,be),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,Fe)}}function he(b,v,H){let J=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=n.TEXTURE_3D);const oe=st(b,v),q=v.source;t.bindTexture(J,b.__webglTexture,n.TEXTURE0+H);const Ue=i.get(q);if(q.version!==Ue.__version||oe===!0){t.activeTexture(n.TEXTURE0+H);const be=_t.getPrimaries(_t.workingColorSpace),ze=v.colorSpace===zi?null:_t.getPrimaries(v.colorSpace),Fe=v.colorSpace===zi||be===ze?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let me=T(v.image,!1,r.maxTextureSize);me=$(v,me);const ye=s.convert(v.format,v.colorSpace),Ve=s.convert(v.type);let ke=R(v.internalFormat,ye,Ve,v.colorSpace,v.isVideoTexture);We(J,v);let Le;const Ke=v.mipmaps,V=v.isVideoTexture!==!0,Ce=Ue.__version===void 0||oe===!0,Ae=q.dataReady,we=O(v,me);if(v.isDepthTexture)ke=A(v.format===Ls,v.type),Ce&&(V?t.texStorage2D(n.TEXTURE_2D,1,ke,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,ke,me.width,me.height,0,ye,Ve,null));else if(v.isDataTexture)if(Ke.length>0){V&&Ce&&t.texStorage2D(n.TEXTURE_2D,we,ke,Ke[0].width,Ke[0].height);for(let Se=0,pe=Ke.length;Se<pe;Se++)Le=Ke[Se],V?Ae&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Le.width,Le.height,ye,Ve,Le.data):t.texImage2D(n.TEXTURE_2D,Se,ke,Le.width,Le.height,0,ye,Ve,Le.data);v.generateMipmaps=!1}else V?(Ce&&t.texStorage2D(n.TEXTURE_2D,we,ke,me.width,me.height),Ae&&pt(v,me,ye,Ve)):t.texImage2D(n.TEXTURE_2D,0,ke,me.width,me.height,0,ye,Ve,me.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){V&&Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,ke,Ke[0].width,Ke[0].height,me.depth);for(let Se=0,pe=Ke.length;Se<pe;Se++)if(Le=Ke[Se],v.format!==zn)if(ye!==null)if(V){if(Ae)if(v.layerUpdates.size>0){const Be=tf(Le.width,Le.height,v.format,v.type);for(const Je of v.layerUpdates){const yt=Le.data.subarray(Je*Be/Le.data.BYTES_PER_ELEMENT,(Je+1)*Be/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,Je,Le.width,Le.height,1,ye,yt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,Le.width,Le.height,me.depth,ye,Le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Se,ke,Le.width,Le.height,me.depth,0,Le.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Ae&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,Le.width,Le.height,me.depth,ye,Ve,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Se,ke,Le.width,Le.height,me.depth,0,ye,Ve,Le.data)}else{V&&Ce&&t.texStorage2D(n.TEXTURE_2D,we,ke,Ke[0].width,Ke[0].height);for(let Se=0,pe=Ke.length;Se<pe;Se++)Le=Ke[Se],v.format!==zn?ye!==null?V?Ae&&t.compressedTexSubImage2D(n.TEXTURE_2D,Se,0,0,Le.width,Le.height,ye,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,Se,ke,Le.width,Le.height,0,Le.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Ae&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Le.width,Le.height,ye,Ve,Le.data):t.texImage2D(n.TEXTURE_2D,Se,ke,Le.width,Le.height,0,ye,Ve,Le.data)}else if(v.isDataArrayTexture)if(V){if(Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,ke,me.width,me.height,me.depth),Ae)if(v.layerUpdates.size>0){const Se=tf(me.width,me.height,v.format,v.type);for(const pe of v.layerUpdates){const Be=me.data.subarray(pe*Se/me.data.BYTES_PER_ELEMENT,(pe+1)*Se/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,me.width,me.height,1,ye,Ve,Be)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,ye,Ve,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,me.width,me.height,me.depth,0,ye,Ve,me.data);else if(v.isData3DTexture)V?(Ce&&t.texStorage3D(n.TEXTURE_3D,we,ke,me.width,me.height,me.depth),Ae&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,ye,Ve,me.data)):t.texImage3D(n.TEXTURE_3D,0,ke,me.width,me.height,me.depth,0,ye,Ve,me.data);else if(v.isFramebufferTexture){if(Ce)if(V)t.texStorage2D(n.TEXTURE_2D,we,ke,me.width,me.height);else{let Se=me.width,pe=me.height;for(let Be=0;Be<we;Be++)t.texImage2D(n.TEXTURE_2D,Be,ke,Se,pe,0,ye,Ve,null),Se>>=1,pe>>=1}}else if(Ke.length>0){if(V&&Ce){const Se=ve(Ke[0]);t.texStorage2D(n.TEXTURE_2D,we,ke,Se.width,Se.height)}for(let Se=0,pe=Ke.length;Se<pe;Se++)Le=Ke[Se],V?Ae&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,ye,Ve,Le):t.texImage2D(n.TEXTURE_2D,Se,ke,ye,Ve,Le);v.generateMipmaps=!1}else if(V){if(Ce){const Se=ve(me);t.texStorage2D(n.TEXTURE_2D,we,ke,Se.width,Se.height)}Ae&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Ve,me)}else t.texImage2D(n.TEXTURE_2D,0,ke,ye,Ve,me);_(v)&&m(J),Ue.__version=q.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ge(b,v,H){if(v.image.length!==6)return;const J=st(b,v),oe=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+H);const q=i.get(oe);if(oe.version!==q.__version||J===!0){t.activeTexture(n.TEXTURE0+H);const Ue=_t.getPrimaries(_t.workingColorSpace),be=v.colorSpace===zi?null:_t.getPrimaries(v.colorSpace),ze=v.colorSpace===zi||Ue===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const Fe=v.isCompressedTexture||v.image[0].isCompressedTexture,me=v.image[0]&&v.image[0].isDataTexture,ye=[];for(let pe=0;pe<6;pe++)!Fe&&!me?ye[pe]=T(v.image[pe],!0,r.maxCubemapSize):ye[pe]=me?v.image[pe].image:v.image[pe],ye[pe]=$(v,ye[pe]);const Ve=ye[0],ke=s.convert(v.format,v.colorSpace),Le=s.convert(v.type),Ke=R(v.internalFormat,ke,Le,v.colorSpace),V=v.isVideoTexture!==!0,Ce=q.__version===void 0||J===!0,Ae=oe.dataReady;let we=O(v,Ve);We(n.TEXTURE_CUBE_MAP,v);let Se;if(Fe){V&&Ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,we,Ke,Ve.width,Ve.height);for(let pe=0;pe<6;pe++){Se=ye[pe].mipmaps;for(let Be=0;Be<Se.length;Be++){const Je=Se[Be];v.format!==zn?ke!==null?V?Ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be,0,0,Je.width,Je.height,ke,Je.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be,Ke,Je.width,Je.height,0,Je.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be,0,0,Je.width,Je.height,ke,Le,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be,Ke,Je.width,Je.height,0,ke,Le,Je.data)}}}else{if(Se=v.mipmaps,V&&Ce){Se.length>0&&we++;const pe=ve(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,we,Ke,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(me){V?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ye[pe].width,ye[pe].height,ke,Le,ye[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ke,ye[pe].width,ye[pe].height,0,ke,Le,ye[pe].data);for(let Be=0;Be<Se.length;Be++){const yt=Se[Be].image[pe].image;V?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be+1,0,0,yt.width,yt.height,ke,Le,yt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be+1,Ke,yt.width,yt.height,0,ke,Le,yt.data)}}else{V?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ke,Le,ye[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ke,ke,Le,ye[pe]);for(let Be=0;Be<Se.length;Be++){const Je=Se[Be];V?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be+1,0,0,ke,Le,Je.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be+1,Ke,ke,Le,Je.image[pe])}}}_(v)&&m(n.TEXTURE_CUBE_MAP),q.__version=oe.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Ne(b,v,H,J,oe,q){const Ue=s.convert(H.format,H.colorSpace),be=s.convert(H.type),ze=R(H.internalFormat,Ue,be,H.colorSpace),Fe=i.get(v),me=i.get(H);if(me.__renderTarget=v,!Fe.__hasExternalTextures){const ye=Math.max(1,v.width>>q),Ve=Math.max(1,v.height>>q);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,q,ze,ye,Ve,v.depth,0,Ue,be,null):t.texImage2D(oe,q,ze,ye,Ve,0,Ue,be,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),te(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,oe,me.__webglTexture,0,_e(v)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,oe,me.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(b,v,H){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer){const J=v.depthTexture,oe=J&&J.isDepthTexture?J.type:null,q=A(v.stencilBuffer,oe),Ue=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=_e(v);te(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,q,v.width,v.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,q,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,q,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ue,n.RENDERBUFFER,b)}else{const J=v.textures;for(let oe=0;oe<J.length;oe++){const q=J[oe],Ue=s.convert(q.format,q.colorSpace),be=s.convert(q.type),ze=R(q.internalFormat,Ue,be,q.colorSpace),Fe=_e(v);H&&te(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,ze,v.width,v.height):te(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,ze,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ze,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ge(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(v.depthTexture);J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ue(v.depthTexture,0);const oe=J.__webglTexture,q=_e(v);if(v.depthTexture.format===Ds)te(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0);else if(v.depthTexture.format===Ls)te(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function tt(b){const v=i.get(b),H=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const J=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){const oe=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",oe)};J.addEventListener("dispose",oe),v.__depthDisposeCallback=oe}v.__boundDepthTexture=J}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const J=b.texture.mipmaps;J&&J.length>0?Ge(v.__webglFramebuffer[0],b):Ge(v.__webglFramebuffer,b)}else if(H){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=n.createRenderbuffer(),Ze(v.__webglDepthbuffer[J],b,!1);else{const oe=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,q)}}else{const J=b.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Ze(v.__webglDepthbuffer,b,!1);else{const oe=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function F(b,v,H){const J=i.get(b);v!==void 0&&Ne(J.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&tt(b)}function N(b){const v=b.texture,H=i.get(b),J=i.get(v);b.addEventListener("dispose",B);const oe=b.textures,q=b.isWebGLCubeRenderTarget===!0,Ue=oe.length>1;if(Ue||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=v.version,a.memory.textures++),q){H.__webglFramebuffer=[];for(let be=0;be<6;be++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[be]=[];for(let ze=0;ze<v.mipmaps.length;ze++)H.__webglFramebuffer[be][ze]=n.createFramebuffer()}else H.__webglFramebuffer[be]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let be=0;be<v.mipmaps.length;be++)H.__webglFramebuffer[be]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Ue)for(let be=0,ze=oe.length;be<ze;be++){const Fe=i.get(oe[be]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&te(b)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let be=0;be<oe.length;be++){const ze=oe[be];H.__webglColorRenderbuffer[be]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[be]);const Fe=s.convert(ze.format,ze.colorSpace),me=s.convert(ze.type),ye=R(ze.internalFormat,Fe,me,ze.colorSpace,b.isXRRenderTarget===!0),Ve=_e(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,ye,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,H.__webglColorRenderbuffer[be])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Ze(H.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),We(n.TEXTURE_CUBE_MAP,v);for(let be=0;be<6;be++)if(v.mipmaps&&v.mipmaps.length>0)for(let ze=0;ze<v.mipmaps.length;ze++)Ne(H.__webglFramebuffer[be][ze],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,ze);else Ne(H.__webglFramebuffer[be],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);_(v)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let be=0,ze=oe.length;be<ze;be++){const Fe=oe[be],me=i.get(Fe);let ye=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ye=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,me.__webglTexture),We(ye,Fe),Ne(H.__webglFramebuffer,b,Fe,n.COLOR_ATTACHMENT0+be,ye,0),_(Fe)&&m(ye)}t.unbindTexture()}else{let be=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(be=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,J.__webglTexture),We(be,v),v.mipmaps&&v.mipmaps.length>0)for(let ze=0;ze<v.mipmaps.length;ze++)Ne(H.__webglFramebuffer[ze],b,v,n.COLOR_ATTACHMENT0,be,ze);else Ne(H.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,be,0);_(v)&&m(be),t.unbindTexture()}b.depthBuffer&&tt(b)}function j(b){const v=b.textures;for(let H=0,J=v.length;H<J;H++){const oe=v[H];if(_(oe)){const q=C(b),Ue=i.get(oe).__webglTexture;t.bindTexture(q,Ue),m(q),t.unbindTexture()}}}const w=[],re=[];function se(b){if(b.samples>0){if(te(b)===!1){const v=b.textures,H=b.width,J=b.height;let oe=n.COLOR_BUFFER_BIT;const q=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ue=i.get(b),be=v.length>1;if(be)for(let Fe=0;Fe<v.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const ze=b.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Fe=0;Fe<v.length;Fe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),be){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[Fe]);const me=i.get(v[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,me,0)}n.blitFramebuffer(0,0,H,J,0,0,H,J,oe,n.NEAREST),c===!0&&(w.length=0,re.length=0,w.push(n.COLOR_ATTACHMENT0+Fe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(w.push(q),re.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,re)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,w))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),be)for(let Fe=0;Fe<v.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[Fe]);const me=i.get(v[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const v=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function _e(b){return Math.min(r.maxSamples,b.samples)}function te(b){const v=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function xe(b){const v=a.render.frame;h.get(b)!==v&&(h.set(b,v),b.update())}function $(b,v){const H=b.colorSpace,J=b.format,oe=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||H!==Yr&&H!==zi&&(_t.getTransfer(H)===Tt?(J!==zn||oe!==Jn)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",H)),v}function ve(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=ie,this.resetTextureUnits=Z,this.setTexture2D=ue,this.setTexture2DArray=ce,this.setTexture3D=fe,this.setTextureCube=K,this.rebindTextures=F,this.setupRenderTarget=N,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=te}function vS(n,e){function t(i,r=zi){let s;const a=_t.getTransfer(r);if(i===Jn)return n.UNSIGNED_BYTE;if(i===gc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_c)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Gh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===kh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Vh)return n.BYTE;if(i===Hh)return n.SHORT;if(i===Cs)return n.UNSIGNED_SHORT;if(i===xc)return n.INT;if(i===ur)return n.UNSIGNED_INT;if(i===gi)return n.FLOAT;if(i===$r)return n.HALF_FLOAT;if(i===Wh)return n.ALPHA;if(i===Xh)return n.RGB;if(i===zn)return n.RGBA;if(i===Ds)return n.DEPTH_COMPONENT;if(i===Ls)return n.DEPTH_STENCIL;if(i===jh)return n.RED;if(i===vc)return n.RED_INTEGER;if(i===Mc)return n.RG;if(i===Sc)return n.RG_INTEGER;if(i===bc)return n.RGBA_INTEGER;if(i===bo||i===yo||i===Eo||i===To)if(a===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===bo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===To)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===bo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Eo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===To)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ml||i===Sl||i===bl||i===yl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ml)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===El||i===Tl||i===Al)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===El||i===Tl)return a===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Al)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wl||i===Rl||i===Cl||i===Pl||i===Dl||i===Ll||i===Ul||i===Il||i===Fl||i===Nl||i===Ol||i===Bl||i===zl||i===Vl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===wl)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rl)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cl)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pl)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dl)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ll)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ul)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Il)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fl)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nl)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ol)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bl)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zl)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vl)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hl||i===Gl||i===kl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Hl)return a===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wl||i===Xl||i===jl||i===ql)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Wl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ql)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ps?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const MS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SS=`
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

}`;class bS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new od(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ei({vertexShader:MS,fragmentShader:SS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ei(new Yo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yS extends Zr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,l="local-floor",c=1,u=null,h=null,d=null,x=null,g=null,S=null;const T=typeof XRWebGLBinding<"u",_=new bS,m={},C=t.getContextAttributes();let R=null,A=null;const O=[],L=[],B=new dt;let W=null;const P=new bn;P.viewport=new At;const E=new bn;E.viewport=new At;const z=[P,E],Z=new Gx;let ie=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let ge=O[he];return ge===void 0&&(ge=new Va,O[he]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(he){let ge=O[he];return ge===void 0&&(ge=new Va,O[he]=ge),ge.getGripSpace()},this.getHand=function(he){let ge=O[he];return ge===void 0&&(ge=new Va,O[he]=ge),ge.getHandSpace()};function ue(he){const ge=L.indexOf(he.inputSource);if(ge===-1)return;const Ne=O[ge];Ne!==void 0&&(Ne.update(he.inputSource,he.frame,u||a),Ne.dispatchEvent({type:he.type,data:he.inputSource}))}function ce(){r.removeEventListener("select",ue),r.removeEventListener("selectstart",ue),r.removeEventListener("selectend",ue),r.removeEventListener("squeeze",ue),r.removeEventListener("squeezestart",ue),r.removeEventListener("squeezeend",ue),r.removeEventListener("end",ce),r.removeEventListener("inputsourceschange",fe);for(let he=0;he<O.length;he++){const ge=L[he];ge!==null&&(L[he]=null,O[he].disconnect(ge))}ie=null,de=null,_.reset();for(const he in m)delete m[he];e.setRenderTarget(R),g=null,x=null,d=null,r=null,A=null,pt.stop(),i.isPresenting=!1,e.setPixelRatio(W),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){s=he,i.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){l=he,i.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(he){u=he},this.getBaseLayer=function(){return x!==null?x:g},this.getBinding=function(){return d===null&&T&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(he){if(r=he,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",ue),r.addEventListener("selectstart",ue),r.addEventListener("selectend",ue),r.addEventListener("squeeze",ue),r.addEventListener("squeezestart",ue),r.addEventListener("squeezeend",ue),r.addEventListener("end",ce),r.addEventListener("inputsourceschange",fe),C.xrCompatible!==!0&&await t.makeXRCompatible(),W=e.getPixelRatio(),e.getSize(B),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ne=null,Ze=null,Ge=null;C.depth&&(Ge=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ne=C.stencil?Ls:Ds,Ze=C.stencil?Ps:ur);const tt={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:s};d=this.getBinding(),x=d.createProjectionLayer(tt),r.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),A=new fr(x.textureWidth,x.textureHeight,{format:zn,type:Jn,depthTexture:new sd(x.textureWidth,x.textureHeight,Ze,void 0,void 0,void 0,void 0,void 0,void 0,Ne),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ne={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,Ne),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),A=new fr(g.framebufferWidth,g.framebufferHeight,{format:zn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(l),pt.setContext(r),pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function fe(he){for(let ge=0;ge<he.removed.length;ge++){const Ne=he.removed[ge],Ze=L.indexOf(Ne);Ze>=0&&(L[Ze]=null,O[Ze].disconnect(Ne))}for(let ge=0;ge<he.added.length;ge++){const Ne=he.added[ge];let Ze=L.indexOf(Ne);if(Ze===-1){for(let tt=0;tt<O.length;tt++)if(tt>=L.length){L.push(Ne),Ze=tt;break}else if(L[tt]===null){L[tt]=Ne,Ze=tt;break}if(Ze===-1)break}const Ge=O[Ze];Ge&&Ge.connect(Ne)}}const K=new Y,ae=new Y;function le(he,ge,Ne){K.setFromMatrixPosition(ge.matrixWorld),ae.setFromMatrixPosition(Ne.matrixWorld);const Ze=K.distanceTo(ae),Ge=ge.projectionMatrix.elements,tt=Ne.projectionMatrix.elements,F=Ge[14]/(Ge[10]-1),N=Ge[14]/(Ge[10]+1),j=(Ge[9]+1)/Ge[5],w=(Ge[9]-1)/Ge[5],re=(Ge[8]-1)/Ge[0],se=(tt[8]+1)/tt[0],_e=F*re,te=F*se,xe=Ze/(-re+se),$=xe*-re;if(ge.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX($),he.translateZ(xe),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert(),Ge[10]===-1)he.projectionMatrix.copy(ge.projectionMatrix),he.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const ve=F+xe,b=N+xe,v=_e-$,H=te+(Ze-$),J=j*N/b*ve,oe=w*N/b*ve;he.projectionMatrix.makePerspective(v,H,J,oe,ve,b),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}}function Te(he,ge){ge===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(ge.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(r===null)return;let ge=he.near,Ne=he.far;_.texture!==null&&(_.depthNear>0&&(ge=_.depthNear),_.depthFar>0&&(Ne=_.depthFar)),Z.near=E.near=P.near=ge,Z.far=E.far=P.far=Ne,(ie!==Z.near||de!==Z.far)&&(r.updateRenderState({depthNear:Z.near,depthFar:Z.far}),ie=Z.near,de=Z.far),Z.layers.mask=he.layers.mask|6,P.layers.mask=Z.layers.mask&3,E.layers.mask=Z.layers.mask&5;const Ze=he.parent,Ge=Z.cameras;Te(Z,Ze);for(let tt=0;tt<Ge.length;tt++)Te(Ge[tt],Ze);Ge.length===2?le(Z,P,E):Z.projectionMatrix.copy(P.projectionMatrix),We(he,Z,Ze)};function We(he,ge,Ne){Ne===null?he.matrix.copy(ge.matrixWorld):(he.matrix.copy(Ne.matrixWorld),he.matrix.invert(),he.matrix.multiply(ge.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(ge.projectionMatrix),he.projectionMatrixInverse.copy(ge.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=Yl*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(x===null&&g===null))return c},this.setFoveation=function(he){c=he,x!==null&&(x.fixedFoveation=he),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=he)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(Z)},this.getCameraTexture=function(he){return m[he]};let st=null;function ut(he,ge){if(h=ge.getViewerPose(u||a),S=ge,h!==null){const Ne=h.views;g!==null&&(e.setRenderTargetFramebuffer(A,g.framebuffer),e.setRenderTarget(A));let Ze=!1;Ne.length!==Z.cameras.length&&(Z.cameras.length=0,Ze=!0);for(let N=0;N<Ne.length;N++){const j=Ne[N];let w=null;if(g!==null)w=g.getViewport(j);else{const se=d.getViewSubImage(x,j);w=se.viewport,N===0&&(e.setRenderTargetTextures(A,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(A))}let re=z[N];re===void 0&&(re=new bn,re.layers.enable(N),re.viewport=new At,z[N]=re),re.matrix.fromArray(j.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(j.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(w.x,w.y,w.width,w.height),N===0&&(Z.matrix.copy(re.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Ze===!0&&Z.cameras.push(re)}const Ge=r.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){d=i.getBinding();const N=d.getDepthInformation(Ne[0]);N&&N.isValid&&N.texture&&_.init(N,r.renderState)}if(Ge&&Ge.includes("camera-access")&&T){e.state.unbindTexture(),d=i.getBinding();for(let N=0;N<Ne.length;N++){const j=Ne[N].camera;if(j){let w=m[j];w||(w=new od,m[j]=w);const re=d.getCameraImage(j);w.sourceTexture=re}}}}for(let Ne=0;Ne<O.length;Ne++){const Ze=L[Ne],Ge=O[Ne];Ze!==null&&Ge!==void 0&&Ge.update(Ze,ge,u||a)}st&&st(he,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),S=null}const pt=new ld;pt.setAnimationLoop(ut),this.setAnimationLoop=function(he){st=he},this.dispose=function(){}}}const nr=new Qn,ES=new Bt;function TS(n,e){function t(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function i(_,m){m.color.getRGB(_.fogColor.value,nd(n)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function r(_,m,C,R,A){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(_,m):m.isMeshToonMaterial?(s(_,m),d(_,m)):m.isMeshPhongMaterial?(s(_,m),h(_,m)):m.isMeshStandardMaterial?(s(_,m),x(_,m),m.isMeshPhysicalMaterial&&g(_,m,A)):m.isMeshMatcapMaterial?(s(_,m),S(_,m)):m.isMeshDepthMaterial?s(_,m):m.isMeshDistanceMaterial?(s(_,m),T(_,m)):m.isMeshNormalMaterial?s(_,m):m.isLineBasicMaterial?(a(_,m),m.isLineDashedMaterial&&l(_,m)):m.isPointsMaterial?c(_,m,C,R):m.isSpriteMaterial?u(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,t(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===pn&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,t(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===pn&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,t(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,t(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const C=e.get(m),R=C.envMap,A=C.envMapRotation;R&&(_.envMap.value=R,nr.copy(A),nr.x*=-1,nr.y*=-1,nr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),_.envMapRotation.value.setFromMatrix4(ES.makeRotationFromEuler(nr)),_.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,_.aoMapTransform))}function a(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform))}function l(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function c(_,m,C,R){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*C,_.scale.value=R*.5,m.map&&(_.map.value=m.map,t(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function u(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function h(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function d(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function x(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function g(_,m,C){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===pn&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=C.texture,_.transmissionSamplerSize.value.set(C.width,C.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,_.specularIntensityMapTransform))}function S(_,m){m.matcap&&(_.matcap.value=m.matcap)}function T(_,m){const C=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(C.matrixWorld),_.nearDistance.value=C.shadow.camera.near,_.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function AS(n,e,t,i){let r={},s={},a=[];const l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,R){const A=R.program;i.uniformBlockBinding(C,A)}function u(C,R){let A=r[C.id];A===void 0&&(S(C),A=h(C),r[C.id]=A,C.addEventListener("dispose",_));const O=R.program;i.updateUBOMapping(C,O);const L=e.render.frame;s[C.id]!==L&&(x(C),s[C.id]=L)}function h(C){const R=d();C.__bindingPointIndex=R;const A=n.createBuffer(),O=C.__size,L=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,O,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,A),A}function d(){for(let C=0;C<l;C++)if(a.indexOf(C)===-1)return a.push(C),C;return zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(C){const R=r[C.id],A=C.uniforms,O=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let L=0,B=A.length;L<B;L++){const W=Array.isArray(A[L])?A[L]:[A[L]];for(let P=0,E=W.length;P<E;P++){const z=W[P];if(g(z,L,P,O)===!0){const Z=z.__offset,ie=Array.isArray(z.value)?z.value:[z.value];let de=0;for(let ue=0;ue<ie.length;ue++){const ce=ie[ue],fe=T(ce);typeof ce=="number"||typeof ce=="boolean"?(z.__data[0]=ce,n.bufferSubData(n.UNIFORM_BUFFER,Z+de,z.__data)):ce.isMatrix3?(z.__data[0]=ce.elements[0],z.__data[1]=ce.elements[1],z.__data[2]=ce.elements[2],z.__data[3]=0,z.__data[4]=ce.elements[3],z.__data[5]=ce.elements[4],z.__data[6]=ce.elements[5],z.__data[7]=0,z.__data[8]=ce.elements[6],z.__data[9]=ce.elements[7],z.__data[10]=ce.elements[8],z.__data[11]=0):(ce.toArray(z.__data,de),de+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Z,z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(C,R,A,O){const L=C.value,B=R+"_"+A;if(O[B]===void 0)return typeof L=="number"||typeof L=="boolean"?O[B]=L:O[B]=L.clone(),!0;{const W=O[B];if(typeof L=="number"||typeof L=="boolean"){if(W!==L)return O[B]=L,!0}else if(W.equals(L)===!1)return W.copy(L),!0}return!1}function S(C){const R=C.uniforms;let A=0;const O=16;for(let B=0,W=R.length;B<W;B++){const P=Array.isArray(R[B])?R[B]:[R[B]];for(let E=0,z=P.length;E<z;E++){const Z=P[E],ie=Array.isArray(Z.value)?Z.value:[Z.value];for(let de=0,ue=ie.length;de<ue;de++){const ce=ie[de],fe=T(ce),K=A%O,ae=K%fe.boundary,le=K+ae;A+=ae,le!==0&&O-le<fe.storage&&(A+=O-le),Z.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=A,A+=fe.storage}}}const L=A%O;return L>0&&(A+=O-L),C.__size=A,C.__cache={},this}function T(C){const R={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(R.boundary=4,R.storage=4):C.isVector2?(R.boundary=8,R.storage=8):C.isVector3||C.isColor?(R.boundary=16,R.storage=12):C.isVector4?(R.boundary=16,R.storage=16):C.isMatrix3?(R.boundary=48,R.storage=48):C.isMatrix4?(R.boundary=64,R.storage=64):C.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):it("WebGLRenderer: Unsupported uniform value type.",C),R}function _(C){const R=C.target;R.removeEventListener("dispose",_);const A=a.indexOf(R.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(r[R.id]),delete r[R.id],delete s[R.id]}function m(){for(const C in r)n.deleteBuffer(r[C]);a=[],r={},s={}}return{bind:c,update:u,dispose:m}}const wS=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ui=null;function RS(){return ui===null&&(ui=new Dx(wS,32,32,Mc,$r),ui.minFilter=Ln,ui.magFilter=Ln,ui.wrapS=xi,ui.wrapT=xi,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}class CS{constructor(e={}){const{canvas:t=nx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const S=new Set([bc,Sc,vc]),T=new Set([Jn,ur,Cs,Ps,gc,_c]),_=new Uint32Array(4),m=new Int32Array(4);let C=null,R=null;const A=[],O=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let B=!1;this._outputColorSpace=Pn;let W=0,P=0,E=null,z=-1,Z=null;const ie=new At,de=new At;let ue=null;const ce=new vt(0);let fe=0,K=t.width,ae=t.height,le=1,Te=null,We=null;const st=new At(0,0,K,ae),ut=new At(0,0,K,ae);let pt=!1;const he=new Tc;let ge=!1,Ne=!1;const Ze=new Bt,Ge=new Y,tt=new At,F={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let N=!1;function j(){return E===null?le:1}let w=i;function re(y,k){return t.getContext(y,k)}try{const y={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mc}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",Be,!1),w===null){const k="webgl2";if(w=re(k,y),w===null)throw re(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw y("WebGLRenderer: "+y.message),y}let se,_e,te,xe,$,ve,b,v,H,J,oe,q,Ue,be,ze,Fe,me,ye,Ve,ke,Le,Ke,V,Ce;function Ae(){se=new Ov(w),se.init(),Ke=new vS(w,se),_e=new Rv(w,se,e,Ke),te=new gS(w,se),_e.reversedDepthBuffer&&x&&te.buffers.depth.setReversed(!0),xe=new Vv(w),$=new rS,ve=new _S(w,se,te,$,_e,Ke,xe),b=new Pv(L),v=new Nv(L),H=new Wx(w),V=new Av(w,H),J=new Bv(w,H,xe,V),oe=new Gv(w,J,H,xe),Ve=new Hv(w,_e,ve),Fe=new Cv($),q=new iS(L,b,v,se,_e,V,Fe),Ue=new TS(L,$),be=new oS,ze=new hS(se),ye=new Tv(L,b,v,te,oe,g,c),me=new mS(L,oe,_e),Ce=new AS(w,xe,_e,te),ke=new wv(w,se,xe),Le=new zv(w,se,xe),xe.programs=q.programs,L.capabilities=_e,L.extensions=se,L.properties=$,L.renderLists=be,L.shadowMap=me,L.state=te,L.info=xe}Ae();const we=new yS(L,w);this.xr=we,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const y=se.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=se.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(y){y!==void 0&&(le=y,this.setSize(K,ae,!1))},this.getSize=function(y){return y.set(K,ae)},this.setSize=function(y,k,ee=!0){if(we.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}K=y,ae=k,t.width=Math.floor(y*le),t.height=Math.floor(k*le),ee===!0&&(t.style.width=y+"px",t.style.height=k+"px"),this.setViewport(0,0,y,k)},this.getDrawingBufferSize=function(y){return y.set(K*le,ae*le).floor()},this.setDrawingBufferSize=function(y,k,ee){K=y,ae=k,le=ee,t.width=Math.floor(y*ee),t.height=Math.floor(k*ee),this.setViewport(0,0,y,k)},this.getCurrentViewport=function(y){return y.copy(ie)},this.getViewport=function(y){return y.copy(st)},this.setViewport=function(y,k,ee,ne){y.isVector4?st.set(y.x,y.y,y.z,y.w):st.set(y,k,ee,ne),te.viewport(ie.copy(st).multiplyScalar(le).round())},this.getScissor=function(y){return y.copy(ut)},this.setScissor=function(y,k,ee,ne){y.isVector4?ut.set(y.x,y.y,y.z,y.w):ut.set(y,k,ee,ne),te.scissor(de.copy(ut).multiplyScalar(le).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(y){te.setScissorTest(pt=y)},this.setOpaqueSort=function(y){Te=y},this.setTransparentSort=function(y){We=y},this.getClearColor=function(y){return y.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(y=!0,k=!0,ee=!0){let ne=0;if(y){let X=!1;if(E!==null){const Ee=E.texture.format;X=S.has(Ee)}if(X){const Ee=E.texture.type,Re=T.has(Ee),He=ye.getClearColor(),Oe=ye.getClearAlpha(),Xe=He.r,$e=He.g,qe=He.b;Re?(_[0]=Xe,_[1]=$e,_[2]=qe,_[3]=Oe,w.clearBufferuiv(w.COLOR,0,_)):(m[0]=Xe,m[1]=$e,m[2]=qe,m[3]=Oe,w.clearBufferiv(w.COLOR,0,m))}else ne|=w.COLOR_BUFFER_BIT}k&&(ne|=w.DEPTH_BUFFER_BIT),ee&&(ne|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),ye.dispose(),be.dispose(),ze.dispose(),$.dispose(),b.dispose(),v.dispose(),oe.dispose(),V.dispose(),Ce.dispose(),q.dispose(),we.dispose(),we.removeEventListener("sessionstart",Vs),we.removeEventListener("sessionend",An),rn.stop()};function Se(y){y.preventDefault(),Iu("WebGLRenderer: Context Lost."),B=!0}function pe(){Iu("WebGLRenderer: Context Restored."),B=!1;const y=xe.autoReset,k=me.enabled,ee=me.autoUpdate,ne=me.needsUpdate,X=me.type;Ae(),xe.autoReset=y,me.enabled=k,me.autoUpdate=ee,me.needsUpdate=ne,me.type=X}function Be(y){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Je(y){const k=y.target;k.removeEventListener("dispose",Je),yt(k)}function yt(y){mt(y),$.remove(y)}function mt(y){const k=$.get(y).programs;k!==void 0&&(k.forEach(function(ee){q.releaseProgram(ee)}),y.isShaderMaterial&&q.releaseShaderCache(y))}this.renderBufferDirect=function(y,k,ee,ne,X,Ee){k===null&&(k=F);const Re=X.isMesh&&X.matrixWorld.determinant()<0,He=Yi(y,k,ee,ne,X);te.setMaterial(ne,Re);let Oe=ee.index,Xe=1;if(ne.wireframe===!0){if(Oe=J.getWireframeAttribute(ee),Oe===void 0)return;Xe=2}const $e=ee.drawRange,qe=ee.attributes.position;let lt=$e.start*Xe,xt=($e.start+$e.count)*Xe;Ee!==null&&(lt=Math.max(lt,Ee.start*Xe),xt=Math.min(xt,(Ee.start+Ee.count)*Xe)),Oe!==null?(lt=Math.max(lt,0),xt=Math.min(xt,Oe.count)):qe!=null&&(lt=Math.max(lt,0),xt=Math.min(xt,qe.count));const It=xt-lt;if(It<0||It===1/0)return;V.setup(X,ne,He,ee,Oe);let Ft,Mt=ke;if(Oe!==null&&(Ft=H.get(Oe),Mt=Le,Mt.setIndex(Ft)),X.isMesh)ne.wireframe===!0?(te.setLineWidth(ne.wireframeLinewidth*j()),Mt.setMode(w.LINES)):Mt.setMode(w.TRIANGLES);else if(X.isLine){let Ye=ne.linewidth;Ye===void 0&&(Ye=1),te.setLineWidth(Ye*j()),X.isLineSegments?Mt.setMode(w.LINES):X.isLineLoop?Mt.setMode(w.LINE_LOOP):Mt.setMode(w.LINE_STRIP)}else X.isPoints?Mt.setMode(w.POINTS):X.isSprite&&Mt.setMode(w.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Us("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))Mt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ye=X._multiDrawStarts,Rt=X._multiDrawCounts,ft=X._multiDrawCount,Et=Oe?H.get(Oe).bytesPerElement:1,ii=$.get(ne).currentProgram.getUniforms();for(let $t=0;$t<ft;$t++)ii.setValue(w,"_gl_DrawID",$t),Mt.render(Ye[$t]/Et,Rt[$t])}else if(X.isInstancedMesh)Mt.renderInstances(lt,It,X.count);else if(ee.isInstancedBufferGeometry){const Ye=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Rt=Math.min(ee.instanceCount,Ye);Mt.renderInstances(lt,It,Rt)}else Mt.render(lt,It)};function nn(y,k,ee){y.transparent===!0&&y.side===mi&&y.forceSinglePass===!1?(y.side=pn,y.needsUpdate=!0,ni(y,k,ee),y.side=Xi,y.needsUpdate=!0,ni(y,k,ee),y.side=mi):ni(y,k,ee)}this.compile=function(y,k,ee=null){ee===null&&(ee=y),R=ze.get(ee),R.init(k),O.push(R),ee.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(R.pushLight(X),X.castShadow&&R.pushShadow(X))}),y!==ee&&y.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(R.pushLight(X),X.castShadow&&R.pushShadow(X))}),R.setupLights();const ne=new Set;return y.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ee=X.material;if(Ee)if(Array.isArray(Ee))for(let Re=0;Re<Ee.length;Re++){const He=Ee[Re];nn(He,ee,X),ne.add(He)}else nn(Ee,ee,X),ne.add(Ee)}),R=O.pop(),ne},this.compileAsync=function(y,k,ee=null){const ne=this.compile(y,k,ee);return new Promise(X=>{function Ee(){if(ne.forEach(function(Re){$.get(Re).currentProgram.isReady()&&ne.delete(Re)}),ne.size===0){X(y);return}setTimeout(Ee,10)}se.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let xn=null;function Ai(y){xn&&xn(y)}function Vs(){rn.stop()}function An(){rn.start()}const rn=new ld;rn.setAnimationLoop(Ai),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(y){xn=y,we.setAnimationLoop(y),y===null?rn.stop():rn.start()},we.addEventListener("sessionstart",Vs),we.addEventListener("sessionend",An),this.render=function(y,k){if(k!==void 0&&k.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(k),k=we.getCamera()),y.isScene===!0&&y.onBeforeRender(L,y,k,E),R=ze.get(y,O.length),R.init(k),O.push(R),Ze.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),he.setFromProjectionMatrix(Ze,Yn,k.reversedDepth),Ne=this.localClippingEnabled,ge=Fe.init(this.clippingPlanes,Ne),C=be.get(y,A.length),C.init(),A.push(C),we.enabled===!0&&we.isPresenting===!0){const Ee=L.xr.getDepthSensingMesh();Ee!==null&&dr(Ee,k,-1/0,L.sortObjects)}dr(y,k,0,L.sortObjects),C.finish(),L.sortObjects===!0&&C.sort(Te,We),N=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,N&&ye.addToRenderList(C,y),this.info.render.frame++,ge===!0&&Fe.beginShadows();const ee=R.state.shadowsArray;me.render(ee,y,k),ge===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=C.opaque,X=C.transmissive;if(R.setupLights(),k.isArrayCamera){const Ee=k.cameras;if(X.length>0)for(let Re=0,He=Ee.length;Re<He;Re++){const Oe=Ee[Re];gn(ne,X,y,Oe)}N&&ye.render(y);for(let Re=0,He=Ee.length;Re<He;Re++){const Oe=Ee[Re];Ut(C,y,Oe,Oe.viewport)}}else X.length>0&&gn(ne,X,y,k),N&&ye.render(y),Ut(C,y,k);E!==null&&P===0&&(ve.updateMultisampleRenderTarget(E),ve.updateRenderTargetMipmap(E)),y.isScene===!0&&y.onAfterRender(L,y,k),V.resetDefaultState(),z=-1,Z=null,O.pop(),O.length>0?(R=O[O.length-1],ge===!0&&Fe.setGlobalState(L.clippingPlanes,R.state.camera)):R=null,A.pop(),A.length>0?C=A[A.length-1]:C=null};function dr(y,k,ee,ne){if(y.visible===!1)return;if(y.layers.test(k.layers)){if(y.isGroup)ee=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(k);else if(y.isLight)R.pushLight(y),y.castShadow&&R.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||he.intersectsSprite(y)){ne&&tt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ze);const Re=oe.update(y),He=y.material;He.visible&&C.push(y,Re,He,ee,tt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||he.intersectsObject(y))){const Re=oe.update(y),He=y.material;if(ne&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),tt.copy(y.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),tt.copy(Re.boundingSphere.center)),tt.applyMatrix4(y.matrixWorld).applyMatrix4(Ze)),Array.isArray(He)){const Oe=Re.groups;for(let Xe=0,$e=Oe.length;Xe<$e;Xe++){const qe=Oe[Xe],lt=He[qe.materialIndex];lt&&lt.visible&&C.push(y,Re,lt,ee,tt.z,qe)}}else He.visible&&C.push(y,Re,He,ee,tt.z,null)}}const Ee=y.children;for(let Re=0,He=Ee.length;Re<He;Re++)dr(Ee[Re],k,ee,ne)}function Ut(y,k,ee,ne){const{opaque:X,transmissive:Ee,transparent:Re}=y;R.setupLightsView(ee),ge===!0&&Fe.setGlobalState(L.clippingPlanes,ee),ne&&te.viewport(ie.copy(ne)),X.length>0&&wi(X,k,ee),Ee.length>0&&wi(Ee,k,ee),Re.length>0&&wi(Re,k,ee),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function gn(y,k,ee,ne){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;R.state.transmissionRenderTarget[ne.id]===void 0&&(R.state.transmissionRenderTarget[ne.id]=new fr(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?$r:Jn,minFilter:ar,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const Ee=R.state.transmissionRenderTarget[ne.id],Re=ne.viewport||ie;Ee.setSize(Re.z*L.transmissionResolutionScale,Re.w*L.transmissionResolutionScale);const He=L.getRenderTarget(),Oe=L.getActiveCubeFace(),Xe=L.getActiveMipmapLevel();L.setRenderTarget(Ee),L.getClearColor(ce),fe=L.getClearAlpha(),fe<1&&L.setClearColor(16777215,.5),L.clear(),N&&ye.render(ee);const $e=L.toneMapping;L.toneMapping=Gi;const qe=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),R.setupLightsView(ne),ge===!0&&Fe.setGlobalState(L.clippingPlanes,ne),wi(y,ee,ne),ve.updateMultisampleRenderTarget(Ee),ve.updateRenderTargetMipmap(Ee),se.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let xt=0,It=k.length;xt<It;xt++){const Ft=k[xt],{object:Mt,geometry:Ye,material:Rt,group:ft}=Ft;if(Rt.side===mi&&Mt.layers.test(ne.layers)){const Et=Rt.side;Rt.side=pn,Rt.needsUpdate=!0,Hs(Mt,ee,ne,Ye,Rt,ft),Rt.side=Et,Rt.needsUpdate=!0,lt=!0}}lt===!0&&(ve.updateMultisampleRenderTarget(Ee),ve.updateRenderTargetMipmap(Ee))}L.setRenderTarget(He,Oe,Xe),L.setClearColor(ce,fe),qe!==void 0&&(ne.viewport=qe),L.toneMapping=$e}function wi(y,k,ee){const ne=k.isScene===!0?k.overrideMaterial:null;for(let X=0,Ee=y.length;X<Ee;X++){const Re=y[X],{object:He,geometry:Oe,group:Xe}=Re;let $e=Re.material;$e.allowOverride===!0&&ne!==null&&($e=ne),He.layers.test(ee.layers)&&Hs(He,k,ee,Oe,$e,Xe)}}function Hs(y,k,ee,ne,X,Ee){y.onBeforeRender(L,k,ee,ne,X,Ee),y.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),X.onBeforeRender(L,k,ee,ne,y,Ee),X.transparent===!0&&X.side===mi&&X.forceSinglePass===!1?(X.side=pn,X.needsUpdate=!0,L.renderBufferDirect(ee,k,ne,X,y,Ee),X.side=Xi,X.needsUpdate=!0,L.renderBufferDirect(ee,k,ne,X,y,Ee),X.side=mi):L.renderBufferDirect(ee,k,ne,X,y,Ee),y.onAfterRender(L,k,ee,ne,X,Ee)}function ni(y,k,ee){k.isScene!==!0&&(k=F);const ne=$.get(y),X=R.state.lights,Ee=R.state.shadowsArray,Re=X.state.version,He=q.getParameters(y,X.state,Ee,k,ee),Oe=q.getProgramCacheKey(He);let Xe=ne.programs;ne.environment=y.isMeshStandardMaterial?k.environment:null,ne.fog=k.fog,ne.envMap=(y.isMeshStandardMaterial?v:b).get(y.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&y.envMap===null?k.environmentRotation:y.envMapRotation,Xe===void 0&&(y.addEventListener("dispose",Je),Xe=new Map,ne.programs=Xe);let $e=Xe.get(Oe);if($e!==void 0){if(ne.currentProgram===$e&&ne.lightsStateVersion===Re)return qi(y,He),$e}else He.uniforms=q.getUniforms(y),y.onBeforeCompile(He,L),$e=q.acquireProgram(He,Oe),Xe.set(Oe,$e),ne.uniforms=He.uniforms;const qe=ne.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(qe.clippingPlanes=Fe.uniform),qi(y,He),ne.needsLights=es(y),ne.lightsStateVersion=Re,ne.needsLights&&(qe.ambientLightColor.value=X.state.ambient,qe.lightProbe.value=X.state.probe,qe.directionalLights.value=X.state.directional,qe.directionalLightShadows.value=X.state.directionalShadow,qe.spotLights.value=X.state.spot,qe.spotLightShadows.value=X.state.spotShadow,qe.rectAreaLights.value=X.state.rectArea,qe.ltc_1.value=X.state.rectAreaLTC1,qe.ltc_2.value=X.state.rectAreaLTC2,qe.pointLights.value=X.state.point,qe.pointLightShadows.value=X.state.pointShadow,qe.hemisphereLights.value=X.state.hemi,qe.directionalShadowMap.value=X.state.directionalShadowMap,qe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,qe.spotShadowMap.value=X.state.spotShadowMap,qe.spotLightMatrix.value=X.state.spotLightMatrix,qe.spotLightMap.value=X.state.spotLightMap,qe.pointShadowMap.value=X.state.pointShadowMap,qe.pointShadowMatrix.value=X.state.pointShadowMatrix),ne.currentProgram=$e,ne.uniformsList=null,$e}function pr(y){if(y.uniformsList===null){const k=y.currentProgram.getUniforms();y.uniformsList=Ao.seqWithValue(k.seq,y.uniforms)}return y.uniformsList}function qi(y,k){const ee=$.get(y);ee.outputColorSpace=k.outputColorSpace,ee.batching=k.batching,ee.batchingColor=k.batchingColor,ee.instancing=k.instancing,ee.instancingColor=k.instancingColor,ee.instancingMorph=k.instancingMorph,ee.skinning=k.skinning,ee.morphTargets=k.morphTargets,ee.morphNormals=k.morphNormals,ee.morphColors=k.morphColors,ee.morphTargetsCount=k.morphTargetsCount,ee.numClippingPlanes=k.numClippingPlanes,ee.numIntersection=k.numClipIntersection,ee.vertexAlphas=k.vertexAlphas,ee.vertexTangents=k.vertexTangents,ee.toneMapping=k.toneMapping}function Yi(y,k,ee,ne,X){k.isScene!==!0&&(k=F),ve.resetTextureUnits();const Ee=k.fog,Re=ne.isMeshStandardMaterial?k.environment:null,He=E===null?L.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Yr,Oe=(ne.isMeshStandardMaterial?v:b).get(ne.envMap||Re),Xe=ne.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,$e=!!ee.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),qe=!!ee.morphAttributes.position,lt=!!ee.morphAttributes.normal,xt=!!ee.morphAttributes.color;let It=Gi;ne.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(It=L.toneMapping);const Ft=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Mt=Ft!==void 0?Ft.length:0,Ye=$.get(ne),Rt=R.state.lights;if(ge===!0&&(Ne===!0||y!==Z)){const jt=y===Z&&ne.id===z;Fe.setState(ne,y,jt)}let ft=!1;ne.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Rt.state.version||Ye.outputColorSpace!==He||X.isBatchedMesh&&Ye.batching===!1||!X.isBatchedMesh&&Ye.batching===!0||X.isBatchedMesh&&Ye.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ye.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ye.instancing===!1||!X.isInstancedMesh&&Ye.instancing===!0||X.isSkinnedMesh&&Ye.skinning===!1||!X.isSkinnedMesh&&Ye.skinning===!0||X.isInstancedMesh&&Ye.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ye.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ye.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ye.instancingMorph===!1&&X.morphTexture!==null||Ye.envMap!==Oe||ne.fog===!0&&Ye.fog!==Ee||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Fe.numPlanes||Ye.numIntersection!==Fe.numIntersection)||Ye.vertexAlphas!==Xe||Ye.vertexTangents!==$e||Ye.morphTargets!==qe||Ye.morphNormals!==lt||Ye.morphColors!==xt||Ye.toneMapping!==It||Ye.morphTargetsCount!==Mt)&&(ft=!0):(ft=!0,Ye.__version=ne.version);let Et=Ye.currentProgram;ft===!0&&(Et=ni(ne,k,X));let ii=!1,$t=!1,Gn=!1;const Ct=Et.getUniforms(),Xt=Ye.uniforms;if(te.useProgram(Et.program)&&(ii=!0,$t=!0,Gn=!0),ne.id!==z&&(z=ne.id,$t=!0),ii||Z!==y){te.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Ct.setValue(w,"projectionMatrix",y.projectionMatrix),Ct.setValue(w,"viewMatrix",y.matrixWorldInverse);const qt=Ct.map.cameraPosition;qt!==void 0&&qt.setValue(w,Ge.setFromMatrixPosition(y.matrixWorld)),_e.logarithmicDepthBuffer&&Ct.setValue(w,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ct.setValue(w,"isOrthographic",y.isOrthographicCamera===!0),Z!==y&&(Z=y,$t=!0,Gn=!0)}if(X.isSkinnedMesh){Ct.setOptional(w,X,"bindMatrix"),Ct.setOptional(w,X,"bindMatrixInverse");const jt=X.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),Ct.setValue(w,"boneTexture",jt.boneTexture,ve))}X.isBatchedMesh&&(Ct.setOptional(w,X,"batchingTexture"),Ct.setValue(w,"batchingTexture",X._matricesTexture,ve),Ct.setOptional(w,X,"batchingIdTexture"),Ct.setValue(w,"batchingIdTexture",X._indirectTexture,ve),Ct.setOptional(w,X,"batchingColorTexture"),X._colorsTexture!==null&&Ct.setValue(w,"batchingColorTexture",X._colorsTexture,ve));const un=ee.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&Ve.update(X,ee,Et),($t||Ye.receiveShadow!==X.receiveShadow)&&(Ye.receiveShadow=X.receiveShadow,Ct.setValue(w,"receiveShadow",X.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Xt.envMap.value=Oe,Xt.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&k.environment!==null&&(Xt.envMapIntensity.value=k.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=RS()),$t&&(Ct.setValue(w,"toneMappingExposure",L.toneMappingExposure),Ye.needsLights&&Gs(Xt,Gn),Ee&&ne.fog===!0&&Ue.refreshFogUniforms(Xt,Ee),Ue.refreshMaterialUniforms(Xt,ne,le,ae,R.state.transmissionRenderTarget[y.id]),Ao.upload(w,pr(Ye),Xt,ve)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ao.upload(w,pr(Ye),Xt,ve),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ct.setValue(w,"center",X.center),Ct.setValue(w,"modelViewMatrix",X.modelViewMatrix),Ct.setValue(w,"normalMatrix",X.normalMatrix),Ct.setValue(w,"modelMatrix",X.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const jt=ne.uniformsGroups;for(let qt=0,mr=jt.length;qt<mr;qt++){const wn=jt[qt];Ce.update(wn,Et),Ce.bind(wn,Et)}}return Et}function Gs(y,k){y.ambientLightColor.needsUpdate=k,y.lightProbe.needsUpdate=k,y.directionalLights.needsUpdate=k,y.directionalLightShadows.needsUpdate=k,y.pointLights.needsUpdate=k,y.pointLightShadows.needsUpdate=k,y.spotLights.needsUpdate=k,y.spotLightShadows.needsUpdate=k,y.rectAreaLights.needsUpdate=k,y.hemisphereLights.needsUpdate=k}function es(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(y,k,ee){const ne=$.get(y);ne.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),$.get(y.texture).__webglTexture=k,$.get(y.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ee,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,k){const ee=$.get(y);ee.__webglFramebuffer=k,ee.__useDefaultFramebuffer=k===void 0};const ts=w.createFramebuffer();this.setRenderTarget=function(y,k=0,ee=0){E=y,W=k,P=ee;let ne=!0,X=null,Ee=!1,Re=!1;if(y){const Oe=$.get(y);if(Oe.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(w.FRAMEBUFFER,null),ne=!1;else if(Oe.__webglFramebuffer===void 0)ve.setupRenderTarget(y);else if(Oe.__hasExternalTextures)ve.rebindTextures(y,$.get(y.texture).__webglTexture,$.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const qe=y.depthTexture;if(Oe.__boundDepthTexture!==qe){if(qe!==null&&$.has(qe)&&(y.width!==qe.image.width||y.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(y)}}const Xe=y.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Re=!0);const $e=$.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray($e[k])?X=$e[k][ee]:X=$e[k],Ee=!0):y.samples>0&&ve.useMultisampledRTT(y)===!1?X=$.get(y).__webglMultisampledFramebuffer:Array.isArray($e)?X=$e[ee]:X=$e,ie.copy(y.viewport),de.copy(y.scissor),ue=y.scissorTest}else ie.copy(st).multiplyScalar(le).floor(),de.copy(ut).multiplyScalar(le).floor(),ue=pt;if(ee!==0&&(X=ts),te.bindFramebuffer(w.FRAMEBUFFER,X)&&ne&&te.drawBuffers(y,X),te.viewport(ie),te.scissor(de),te.setScissorTest(ue),Ee){const Oe=$.get(y.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+k,Oe.__webglTexture,ee)}else if(Re){const Oe=k;for(let Xe=0;Xe<y.textures.length;Xe++){const $e=$.get(y.textures[Xe]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Xe,$e.__webglTexture,ee,Oe)}}else if(y!==null&&ee!==0){const Oe=$.get(y.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Oe.__webglTexture,ee)}z=-1},this.readRenderTargetPixels=function(y,k,ee,ne,X,Ee,Re,He=0){if(!(y&&y.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=$.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Re!==void 0&&(Oe=Oe[Re]),Oe){te.bindFramebuffer(w.FRAMEBUFFER,Oe);try{const Xe=y.textures[He],$e=Xe.format,qe=Xe.type;if(!_e.textureFormatReadable($e)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(qe)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=y.width-ne&&ee>=0&&ee<=y.height-X&&(y.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+He),w.readPixels(k,ee,ne,X,Ke.convert($e),Ke.convert(qe),Ee))}finally{const Xe=E!==null?$.get(E).__webglFramebuffer:null;te.bindFramebuffer(w.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(y,k,ee,ne,X,Ee,Re,He=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=$.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Re!==void 0&&(Oe=Oe[Re]),Oe)if(k>=0&&k<=y.width-ne&&ee>=0&&ee<=y.height-X){te.bindFramebuffer(w.FRAMEBUFFER,Oe);const Xe=y.textures[He],$e=Xe.format,qe=Xe.type;if(!_e.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,lt),w.bufferData(w.PIXEL_PACK_BUFFER,Ee.byteLength,w.STREAM_READ),y.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+He),w.readPixels(k,ee,ne,X,Ke.convert($e),Ke.convert(qe),0);const xt=E!==null?$.get(E).__webglFramebuffer:null;te.bindFramebuffer(w.FRAMEBUFFER,xt);const It=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await ix(w,It,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,lt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Ee),w.deleteBuffer(lt),w.deleteSync(It),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,k=null,ee=0){const ne=Math.pow(2,-ee),X=Math.floor(y.image.width*ne),Ee=Math.floor(y.image.height*ne),Re=k!==null?k.x:0,He=k!==null?k.y:0;ve.setTexture2D(y,0),w.copyTexSubImage2D(w.TEXTURE_2D,ee,0,0,Re,He,X,Ee),te.unbindTexture()};const ks=w.createFramebuffer(),_n=w.createFramebuffer();this.copyTextureToTexture=function(y,k,ee=null,ne=null,X=0,Ee=null){Ee===null&&(X!==0?(Us("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=X,X=0):Ee=0);let Re,He,Oe,Xe,$e,qe,lt,xt,It;const Ft=y.isCompressedTexture?y.mipmaps[Ee]:y.image;if(ee!==null)Re=ee.max.x-ee.min.x,He=ee.max.y-ee.min.y,Oe=ee.isBox3?ee.max.z-ee.min.z:1,Xe=ee.min.x,$e=ee.min.y,qe=ee.isBox3?ee.min.z:0;else{const un=Math.pow(2,-X);Re=Math.floor(Ft.width*un),He=Math.floor(Ft.height*un),y.isDataArrayTexture?Oe=Ft.depth:y.isData3DTexture?Oe=Math.floor(Ft.depth*un):Oe=1,Xe=0,$e=0,qe=0}ne!==null?(lt=ne.x,xt=ne.y,It=ne.z):(lt=0,xt=0,It=0);const Mt=Ke.convert(k.format),Ye=Ke.convert(k.type);let Rt;k.isData3DTexture?(ve.setTexture3D(k,0),Rt=w.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ve.setTexture2DArray(k,0),Rt=w.TEXTURE_2D_ARRAY):(ve.setTexture2D(k,0),Rt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,k.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,k.unpackAlignment);const ft=w.getParameter(w.UNPACK_ROW_LENGTH),Et=w.getParameter(w.UNPACK_IMAGE_HEIGHT),ii=w.getParameter(w.UNPACK_SKIP_PIXELS),$t=w.getParameter(w.UNPACK_SKIP_ROWS),Gn=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Ft.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ft.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Xe),w.pixelStorei(w.UNPACK_SKIP_ROWS,$e),w.pixelStorei(w.UNPACK_SKIP_IMAGES,qe);const Ct=y.isDataArrayTexture||y.isData3DTexture,Xt=k.isDataArrayTexture||k.isData3DTexture;if(y.isDepthTexture){const un=$.get(y),jt=$.get(k),qt=$.get(un.__renderTarget),mr=$.get(jt.__renderTarget);te.bindFramebuffer(w.READ_FRAMEBUFFER,qt.__webglFramebuffer),te.bindFramebuffer(w.DRAW_FRAMEBUFFER,mr.__webglFramebuffer);for(let wn=0;wn<Oe;wn++)Ct&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,$.get(y).__webglTexture,X,qe+wn),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,$.get(k).__webglTexture,Ee,It+wn)),w.blitFramebuffer(Xe,$e,Re,He,lt,xt,Re,He,w.DEPTH_BUFFER_BIT,w.NEAREST);te.bindFramebuffer(w.READ_FRAMEBUFFER,null),te.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(X!==0||y.isRenderTargetTexture||$.has(y)){const un=$.get(y),jt=$.get(k);te.bindFramebuffer(w.READ_FRAMEBUFFER,ks),te.bindFramebuffer(w.DRAW_FRAMEBUFFER,_n);for(let qt=0;qt<Oe;qt++)Ct?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,un.__webglTexture,X,qe+qt):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,un.__webglTexture,X),Xt?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,jt.__webglTexture,Ee,It+qt):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,jt.__webglTexture,Ee),X!==0?w.blitFramebuffer(Xe,$e,Re,He,lt,xt,Re,He,w.COLOR_BUFFER_BIT,w.NEAREST):Xt?w.copyTexSubImage3D(Rt,Ee,lt,xt,It+qt,Xe,$e,Re,He):w.copyTexSubImage2D(Rt,Ee,lt,xt,Xe,$e,Re,He);te.bindFramebuffer(w.READ_FRAMEBUFFER,null),te.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Xt?y.isDataTexture||y.isData3DTexture?w.texSubImage3D(Rt,Ee,lt,xt,It,Re,He,Oe,Mt,Ye,Ft.data):k.isCompressedArrayTexture?w.compressedTexSubImage3D(Rt,Ee,lt,xt,It,Re,He,Oe,Mt,Ft.data):w.texSubImage3D(Rt,Ee,lt,xt,It,Re,He,Oe,Mt,Ye,Ft):y.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,Ee,lt,xt,Re,He,Mt,Ye,Ft.data):y.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,Ee,lt,xt,Ft.width,Ft.height,Mt,Ft.data):w.texSubImage2D(w.TEXTURE_2D,Ee,lt,xt,Re,He,Mt,Ye,Ft);w.pixelStorei(w.UNPACK_ROW_LENGTH,ft),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Et),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ii),w.pixelStorei(w.UNPACK_SKIP_ROWS,$t),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Gn),Ee===0&&k.generateMipmaps&&w.generateMipmap(Rt),te.unbindTexture()},this.initRenderTarget=function(y){$.get(y).__webglFramebuffer===void 0&&ve.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?ve.setTextureCube(y,0):y.isData3DTexture?ve.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?ve.setTexture2DArray(y,0):ve.setTexture2D(y,0),te.unbindTexture()},this.resetState=function(){W=0,P=0,E=null,te.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}var Af=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ka={},wf;function PS(){return wf||(wf=1,(function(){var n;function e(o){var f=0;return function(){return f<o.length?{done:!1,value:o[f++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,f,p){return o==Array.prototype||o==Object.prototype||(o[f]=p.value),o};function i(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Af=="object"&&Af];for(var f=0;f<o.length;++f){var p=o[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=i(this);function s(o,f){if(f)e:{var p=r;o=o.split(".");for(var M=0;M<o.length-1;M++){var D=o[M];if(!(D in p))break e;p=p[D]}o=o[o.length-1],M=p[o],f=f(M),f!=M&&f!=null&&t(p,o,{configurable:!0,writable:!0,value:f})}}s("Symbol",function(o){function f(I){if(this instanceof f)throw new TypeError("Symbol is not a constructor");return new p(M+(I||"")+"_"+D++,I)}function p(I,U){this.h=I,t(this,"description",{configurable:!0,writable:!0,value:U})}if(o)return o;p.prototype.toString=function(){return this.h};var M="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",D=0;return f}),s("Symbol.iterator",function(o){if(o)return o;o=Symbol("Symbol.iterator");for(var f="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),p=0;p<f.length;p++){var M=r[f[p]];typeof M=="function"&&typeof M.prototype[o]!="function"&&t(M.prototype,o,{configurable:!0,writable:!0,value:function(){return a(e(this))}})}return o});function a(o){return o={next:o},o[Symbol.iterator]=function(){return this},o}function l(o){var f=typeof Symbol<"u"&&Symbol.iterator&&o[Symbol.iterator];return f?f.call(o):{next:e(o)}}function c(o){if(!(o instanceof Array)){o=l(o);for(var f,p=[];!(f=o.next()).done;)p.push(f.value);o=p}return o}var u=typeof Object.assign=="function"?Object.assign:function(o,f){for(var p=1;p<arguments.length;p++){var M=arguments[p];if(M)for(var D in M)Object.prototype.hasOwnProperty.call(M,D)&&(o[D]=M[D])}return o};s("Object.assign",function(o){return o||u});var h=typeof Object.create=="function"?Object.create:function(o){function f(){}return f.prototype=o,new f},d;if(typeof Object.setPrototypeOf=="function")d=Object.setPrototypeOf;else{var x;e:{var g={a:!0},S={};try{S.__proto__=g,x=S.a;break e}catch{}x=!1}d=x?function(o,f){if(o.__proto__=f,o.__proto__!==f)throw new TypeError(o+" is not extensible");return o}:null}var T=d;function _(o,f){if(o.prototype=h(f.prototype),o.prototype.constructor=o,T)T(o,f);else for(var p in f)if(p!="prototype")if(Object.defineProperties){var M=Object.getOwnPropertyDescriptor(f,p);M&&Object.defineProperty(o,p,M)}else o[p]=f[p];o.ya=f.prototype}function m(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function C(o){if(o.m)throw new TypeError("Generator is already running");o.m=!0}m.prototype.u=function(o){this.i=o};function R(o,f){o.l={ma:f,na:!0},o.h=o.s||o.v}m.prototype.return=function(o){this.l={return:o},this.h=this.v};function A(o,f,p){return o.h=p,{value:f}}function O(o){this.h=new m,this.i=o}function L(o,f){C(o.h);var p=o.h.j;return p?B(o,"return"in p?p.return:function(M){return{value:M,done:!0}},f,o.h.return):(o.h.return(f),W(o))}function B(o,f,p,M){try{var D=f.call(o.h.j,p);if(!(D instanceof Object))throw new TypeError("Iterator result "+D+" is not an object");if(!D.done)return o.h.m=!1,D;var I=D.value}catch(U){return o.h.j=null,R(o.h,U),W(o)}return o.h.j=null,M.call(o.h,I),W(o)}function W(o){for(;o.h.h;)try{var f=o.i(o.h);if(f)return o.h.m=!1,{value:f.value,done:!1}}catch(p){o.h.i=void 0,R(o.h,p)}if(o.h.m=!1,o.h.l){if(f=o.h.l,o.h.l=null,f.na)throw f.ma;return{value:f.return,done:!0}}return{value:void 0,done:!0}}function P(o){this.next=function(f){return C(o.h),o.h.j?f=B(o,o.h.j.next,f,o.h.u):(o.h.u(f),f=W(o)),f},this.throw=function(f){return C(o.h),o.h.j?f=B(o,o.h.j.throw,f,o.h.u):(R(o.h,f),f=W(o)),f},this.return=function(f){return L(o,f)},this[Symbol.iterator]=function(){return this}}function E(o){function f(M){return o.next(M)}function p(M){return o.throw(M)}return new Promise(function(M,D){function I(U){U.done?M(U.value):Promise.resolve(U.value).then(f,p).then(I,D)}I(o.next())})}function z(o){return E(new P(new O(o)))}s("Promise",function(o){function f(U){this.i=0,this.j=void 0,this.h=[],this.u=!1;var G=this.l();try{U(G.resolve,G.reject)}catch(Q){G.reject(Q)}}function p(){this.h=null}function M(U){return U instanceof f?U:new f(function(G){G(U)})}if(o)return o;p.prototype.i=function(U){if(this.h==null){this.h=[];var G=this;this.j(function(){G.m()})}this.h.push(U)};var D=r.setTimeout;p.prototype.j=function(U){D(U,0)},p.prototype.m=function(){for(;this.h&&this.h.length;){var U=this.h;this.h=[];for(var G=0;G<U.length;++G){var Q=U[G];U[G]=null;try{Q()}catch(Me){this.l(Me)}}}this.h=null},p.prototype.l=function(U){this.j(function(){throw U})},f.prototype.l=function(){function U(Me){return function(Pe){Q||(Q=!0,Me.call(G,Pe))}}var G=this,Q=!1;return{resolve:U(this.I),reject:U(this.m)}},f.prototype.I=function(U){if(U===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(U instanceof f)this.L(U);else{e:switch(typeof U){case"object":var G=U!=null;break e;case"function":G=!0;break e;default:G=!1}G?this.F(U):this.s(U)}},f.prototype.F=function(U){var G=void 0;try{G=U.then}catch(Q){this.m(Q);return}typeof G=="function"?this.M(G,U):this.s(U)},f.prototype.m=function(U){this.v(2,U)},f.prototype.s=function(U){this.v(1,U)},f.prototype.v=function(U,G){if(this.i!=0)throw Error("Cannot settle("+U+", "+G+"): Promise already settled in state"+this.i);this.i=U,this.j=G,this.i===2&&this.K(),this.H()},f.prototype.K=function(){var U=this;D(function(){if(U.D()){var G=r.console;typeof G<"u"&&G.error(U.j)}},1)},f.prototype.D=function(){if(this.u)return!1;var U=r.CustomEvent,G=r.Event,Q=r.dispatchEvent;return typeof Q>"u"?!0:(typeof U=="function"?U=new U("unhandledrejection",{cancelable:!0}):typeof G=="function"?U=new G("unhandledrejection",{cancelable:!0}):(U=r.document.createEvent("CustomEvent"),U.initCustomEvent("unhandledrejection",!1,!0,U)),U.promise=this,U.reason=this.j,Q(U))},f.prototype.H=function(){if(this.h!=null){for(var U=0;U<this.h.length;++U)I.i(this.h[U]);this.h=null}};var I=new p;return f.prototype.L=function(U){var G=this.l();U.T(G.resolve,G.reject)},f.prototype.M=function(U,G){var Q=this.l();try{U.call(G,Q.resolve,Q.reject)}catch(Me){Q.reject(Me)}},f.prototype.then=function(U,G){function Q(je,Ie){return typeof je=="function"?function(et){try{Me(je(et))}catch(ct){Pe(ct)}}:Ie}var Me,Pe,Qe=new f(function(je,Ie){Me=je,Pe=Ie});return this.T(Q(U,Me),Q(G,Pe)),Qe},f.prototype.catch=function(U){return this.then(void 0,U)},f.prototype.T=function(U,G){function Q(){switch(Me.i){case 1:U(Me.j);break;case 2:G(Me.j);break;default:throw Error("Unexpected state: "+Me.i)}}var Me=this;this.h==null?I.i(Q):this.h.push(Q),this.u=!0},f.resolve=M,f.reject=function(U){return new f(function(G,Q){Q(U)})},f.race=function(U){return new f(function(G,Q){for(var Me=l(U),Pe=Me.next();!Pe.done;Pe=Me.next())M(Pe.value).T(G,Q)})},f.all=function(U){var G=l(U),Q=G.next();return Q.done?M([]):new f(function(Me,Pe){function Qe(et){return function(ct){je[et]=ct,Ie--,Ie==0&&Me(je)}}var je=[],Ie=0;do je.push(void 0),Ie++,M(Q.value).T(Qe(je.length-1),Pe),Q=G.next();while(!Q.done)})},f});function Z(o,f){o instanceof String&&(o+="");var p=0,M=!1,D={next:function(){if(!M&&p<o.length){var I=p++;return{value:f(I,o[I]),done:!1}}return M=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.keys",function(o){return o||function(){return Z(this,function(f){return f})}}),s("Array.prototype.fill",function(o){return o||function(f,p,M){var D=this.length||0;for(0>p&&(p=Math.max(0,D+p)),(M==null||M>D)&&(M=D),M=Number(M),0>M&&(M=Math.max(0,D+M)),p=Number(p||0);p<M;p++)this[p]=f;return this}});function ie(o){return o||Array.prototype.fill}s("Int8Array.prototype.fill",ie),s("Uint8Array.prototype.fill",ie),s("Uint8ClampedArray.prototype.fill",ie),s("Int16Array.prototype.fill",ie),s("Uint16Array.prototype.fill",ie),s("Int32Array.prototype.fill",ie),s("Uint32Array.prototype.fill",ie),s("Float32Array.prototype.fill",ie),s("Float64Array.prototype.fill",ie),s("Object.is",function(o){return o||function(f,p){return f===p?f!==0||1/f===1/p:f!==f&&p!==p}}),s("Array.prototype.includes",function(o){return o||function(f,p){var M=this;M instanceof String&&(M=String(M));var D=M.length;for(p=p||0,0>p&&(p=Math.max(p+D,0));p<D;p++){var I=M[p];if(I===f||Object.is(I,f))return!0}return!1}}),s("String.prototype.includes",function(o){return o||function(f,p){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(f instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(f,p||0)!==-1}});var de=this||self;function ue(o,f){o=o.split(".");var p=de;o[0]in p||typeof p.execScript>"u"||p.execScript("var "+o[0]);for(var M;o.length&&(M=o.shift());)o.length||f===void 0?p[M]&&p[M]!==Object.prototype[M]?p=p[M]:p=p[M]={}:p[M]=f}function ce(o){var f;e:{if((f=de.navigator)&&(f=f.userAgent))break e;f=""}return f.indexOf(o)!=-1}var fe=Array.prototype.map?function(o,f){return Array.prototype.map.call(o,f,void 0)}:function(o,f){for(var p=o.length,M=Array(p),D=typeof o=="string"?o.split(""):o,I=0;I<p;I++)I in D&&(M[I]=f.call(void 0,D[I],I,o));return M},K={},ae=null;function le(o){var f=o.length,p=3*f/4;p%3?p=Math.floor(p):"=.".indexOf(o[f-1])!=-1&&(p="=.".indexOf(o[f-2])!=-1?p-2:p-1);var M=new Uint8Array(p),D=0;return Te(o,function(I){M[D++]=I}),D!==p?M.subarray(0,D):M}function Te(o,f){function p(Q){for(;M<o.length;){var Me=o.charAt(M++),Pe=ae[Me];if(Pe!=null)return Pe;if(!/^[\s\xa0]*$/.test(Me))throw Error("Unknown base64 encoding at char: "+Me)}return Q}We();for(var M=0;;){var D=p(-1),I=p(0),U=p(64),G=p(64);if(G===64&&D===-1)break;f(D<<2|I>>4),U!=64&&(f(I<<4&240|U>>2),G!=64&&f(U<<6&192|G))}}function We(){if(!ae){ae={};for(var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),f=["+/=","+/","-_=","-_.","-_"],p=0;5>p;p++){var M=o.concat(f[p].split(""));K[p]=M;for(var D=0;D<M.length;D++){var I=M[D];ae[I]===void 0&&(ae[I]=D)}}}}var st=typeof Uint8Array<"u",ut=!(ce("Trident")||ce("MSIE"))&&typeof de.btoa=="function";function pt(o){if(!ut){var f;f===void 0&&(f=0),We(),f=K[f];for(var p=Array(Math.floor(o.length/3)),M=f[64]||"",D=0,I=0;D<o.length-2;D+=3){var U=o[D],G=o[D+1],Q=o[D+2],Me=f[U>>2];U=f[(U&3)<<4|G>>4],G=f[(G&15)<<2|Q>>6],Q=f[Q&63],p[I++]=Me+U+G+Q}switch(Me=0,Q=M,o.length-D){case 2:Me=o[D+1],Q=f[(Me&15)<<2]||M;case 1:o=o[D],p[I]=f[o>>2]+f[(o&3)<<4|Me>>4]+Q+M}return p.join("")}for(f="";10240<o.length;)f+=String.fromCharCode.apply(null,o.subarray(0,10240)),o=o.subarray(10240);return f+=String.fromCharCode.apply(null,o),btoa(f)}var he=RegExp("[-_.]","g");function ge(o){switch(o){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function Ne(o){if(!ut)return le(o);he.test(o)&&(o=o.replace(he,ge)),o=atob(o);for(var f=new Uint8Array(o.length),p=0;p<o.length;p++)f[p]=o.charCodeAt(p);return f}var Ze;function Ge(){return Ze||(Ze=new Uint8Array(0))}var tt={},F=typeof Uint8Array.prototype.slice=="function",N=0,j=0;function w(o){var f=0>o;o=Math.abs(o);var p=o>>>0;o=Math.floor((o-p)/4294967296),f&&(p=l(se(p,o)),f=p.next().value,o=p.next().value,p=f),N=p>>>0,j=o>>>0}var re=typeof BigInt=="function";function se(o,f){return f=~f,o?o=~o+1:f+=1,[o,f]}function _e(o,f){this.i=o>>>0,this.h=f>>>0}function te(o){if(!o)return xe||(xe=new _e(0,0));if(!/^-?\d+$/.test(o))return null;if(16>o.length)w(Number(o));else if(re)o=BigInt(o),N=Number(o&BigInt(4294967295))>>>0,j=Number(o>>BigInt(32)&BigInt(4294967295));else{var f=+(o[0]==="-");j=N=0;for(var p=o.length,M=f,D=(p-f)%6+f;D<=p;M=D,D+=6)M=Number(o.slice(M,D)),j*=1e6,N=1e6*N+M,4294967296<=N&&(j+=N/4294967296|0,N%=4294967296);f&&(f=l(se(N,j)),o=f.next().value,f=f.next().value,N=o,j=f)}return new _e(N,j)}var xe;function $(o,f){return Error("Invalid wire type: "+o+" (at position "+f+")")}function ve(){return Error("Failed to read varint, encoding is invalid.")}function b(o,f){return Error("Tried to read past the end of the data "+f+" > "+o)}function v(){throw Error("Invalid UTF8")}function H(o,f){return f=String.fromCharCode.apply(null,f),o==null?f:o+f}var J=void 0,oe,q=typeof TextDecoder<"u",Ue,be=typeof TextEncoder<"u",ze;function Fe(o){if(o!==tt)throw Error("illegal external caller")}function me(o,f){if(Fe(f),this.V=o,o!=null&&o.length===0)throw Error("ByteString should be constructed with non-empty values")}function ye(){return ze||(ze=new me(null,tt))}function Ve(o){Fe(tt);var f=o.V;return f=f==null||st&&f!=null&&f instanceof Uint8Array?f:typeof f=="string"?Ne(f):null,f==null?f:o.V=f}function ke(o){if(typeof o=="string")return{buffer:Ne(o),C:!1};if(Array.isArray(o))return{buffer:new Uint8Array(o),C:!1};if(o.constructor===Uint8Array)return{buffer:o,C:!1};if(o.constructor===ArrayBuffer)return{buffer:new Uint8Array(o),C:!1};if(o.constructor===me)return{buffer:Ve(o)||Ge(),C:!0};if(o instanceof Uint8Array)return{buffer:new Uint8Array(o.buffer,o.byteOffset,o.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Le(o,f){this.i=null,this.m=!1,this.h=this.j=this.l=0,Ke(this,o,f)}function Ke(o,f,p){p=p===void 0?{}:p,o.S=p.S===void 0?!1:p.S,f&&(f=ke(f),o.i=f.buffer,o.m=f.C,o.l=0,o.j=o.i.length,o.h=o.l)}Le.prototype.reset=function(){this.h=this.l};function V(o,f){if(o.h=f,f>o.j)throw b(o.j,f)}function Ce(o){var f=o.i,p=o.h,M=f[p++],D=M&127;if(M&128&&(M=f[p++],D|=(M&127)<<7,M&128&&(M=f[p++],D|=(M&127)<<14,M&128&&(M=f[p++],D|=(M&127)<<21,M&128&&(M=f[p++],D|=M<<28,M&128&&f[p++]&128&&f[p++]&128&&f[p++]&128&&f[p++]&128&&f[p++]&128)))))throw ve();return V(o,p),D}function Ae(o,f){if(0>f)throw Error("Tried to read a negative byte length: "+f);var p=o.h,M=p+f;if(M>o.j)throw b(f,o.j-p);return o.h=M,p}var we=[];function Se(){this.h=[]}Se.prototype.length=function(){return this.h.length},Se.prototype.end=function(){var o=this.h;return this.h=[],o};function pe(o,f,p){for(;0<p||127<f;)o.h.push(f&127|128),f=(f>>>7|p<<25)>>>0,p>>>=7;o.h.push(f)}function Be(o,f){for(;127<f;)o.h.push(f&127|128),f>>>=7;o.h.push(f)}function Je(o,f){if(we.length){var p=we.pop();Ke(p,o,f),o=p}else o=new Le(o,f);this.h=o,this.j=this.h.h,this.i=this.l=-1,this.setOptions(f)}Je.prototype.setOptions=function(o){o=o===void 0?{}:o,this.ca=o.ca===void 0?!1:o.ca},Je.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function yt(o){var f=o.h;if(f.h==f.j)return!1;o.j=o.h.h;var p=Ce(o.h)>>>0;if(f=p>>>3,p&=7,!(0<=p&&5>=p))throw $(p,o.j);if(1>f)throw Error("Invalid field number: "+f+" (at position "+o.j+")");return o.l=f,o.i=p,!0}function mt(o){switch(o.i){case 0:if(o.i!=0)mt(o);else e:{o=o.h;for(var f=o.h,p=f+10,M=o.i;f<p;)if((M[f++]&128)===0){V(o,f);break e}throw ve()}break;case 1:o=o.h,V(o,o.h+8);break;case 2:o.i!=2?mt(o):(f=Ce(o.h)>>>0,o=o.h,V(o,o.h+f));break;case 5:o=o.h,V(o,o.h+4);break;case 3:f=o.l;do{if(!yt(o))throw Error("Unmatched start-group tag: stream EOF");if(o.i==4){if(o.l!=f)throw Error("Unmatched end-group tag");break}mt(o)}while(!0);break;default:throw $(o.i,o.j)}}var nn=[];function xn(){this.j=[],this.i=0,this.h=new Se}function Ai(o,f){f.length!==0&&(o.j.push(f),o.i+=f.length)}function Vs(o,f){if(f=f.R){Ai(o,o.h.end());for(var p=0;p<f.length;p++)Ai(o,Ve(f[p])||Ge())}}var An=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function rn(o,f){return An?o[An]|=f:o.A!==void 0?o.A|=f:(Object.defineProperties(o,{A:{value:f,configurable:!0,writable:!0,enumerable:!1}}),f)}function dr(o,f){An?o[An]&&(o[An]&=~f):o.A!==void 0&&(o.A&=~f)}function Ut(o){var f;return An?f=o[An]:f=o.A,f??0}function gn(o,f){An?o[An]=f:o.A!==void 0?o.A=f:Object.defineProperties(o,{A:{value:f,configurable:!0,writable:!0,enumerable:!1}})}function wi(o){return rn(o,1),o}function Hs(o,f){gn(f,(o|0)&-51)}function ni(o,f){gn(f,(o|18)&-41)}var pr={};function qi(o){return o!==null&&typeof o=="object"&&!Array.isArray(o)&&o.constructor===Object}var Yi,Gs=[];gn(Gs,23),Yi=Object.freeze(Gs);function es(o){if(Ut(o.o)&2)throw Error("Cannot mutate an immutable Message")}function ts(o){var f=o.length;(f=f?o[f-1]:void 0)&&qi(f)?f.g=1:(f={},o.push((f.g=1,f)))}function ks(o){var f=o.i+o.G;return o.B||(o.B=o.o[f]={})}function _n(o,f){return f===-1?null:f>=o.i?o.B?o.B[f]:void 0:o.o[f+o.G]}function y(o,f,p,M){es(o),k(o,f,p,M)}function k(o,f,p,M){o.j&&(o.j=void 0),f>=o.i||M?ks(o)[f]=p:(o.o[f+o.G]=p,(o=o.B)&&f in o&&delete o[f])}function ee(o,f,p,M){var D=_n(o,f);Array.isArray(D)||(D=Yi);var I=Ut(D);if(I&1||wi(D),M)I&2||rn(D,2),p&1||Object.freeze(D);else{M=!(p&2);var U=I&2;p&1||!U?M&&I&16&&!U&&dr(D,16):(D=wi(Array.prototype.slice.call(D)),k(o,f,D))}return D}function ne(o,f){var p=_n(o,f),M=p==null?p:typeof p=="number"||p==="NaN"||p==="Infinity"||p==="-Infinity"?Number(p):void 0;return M!=null&&M!==p&&k(o,f,M),M}function X(o,f,p,M,D){o.h||(o.h={});var I=o.h[p],U=ee(o,p,3,D);if(!I){var G=U;I=[];var Q=!!(Ut(o.o)&16);U=!!(Ut(G)&2);var Me=G;!D&&U&&(G=Array.prototype.slice.call(G));for(var Pe=U,Qe=0;Qe<G.length;Qe++){var je=G[Qe],Ie=f,et=!1;if(et=et===void 0?!1:et,je=Array.isArray(je)?new Ie(je):et?new Ie:void 0,je!==void 0){Ie=je.o;var ct=et=Ut(Ie);U&&(ct|=2),Q&&(ct|=16),ct!=et&&gn(Ie,ct),Ie=ct,Pe=Pe||!!(2&Ie),I.push(je)}}return o.h[p]=I,Q=Ut(G),f=Q|33,f=Pe?f&-9:f|8,Q!=f&&(Pe=G,Object.isFrozen(Pe)&&(Pe=Array.prototype.slice.call(Pe)),gn(Pe,f),G=Pe),Me!==G&&k(o,p,G),(D||M&&U)&&rn(I,2),M&&Object.freeze(I),I}return D||(D=Object.isFrozen(I),M&&!D?Object.freeze(I):!M&&D&&(I=Array.prototype.slice.call(I),o.h[p]=I)),I}function Ee(o,f,p){var M=!!(Ut(o.o)&2);if(f=X(o,f,p,M,M),o=ee(o,p,3,M),!(M||Ut(o)&8)){for(M=0;M<f.length;M++){if(p=f[M],Ut(p.o)&2){var D=ft(p,!1);D.j=p}else D=p;p!==D&&(f[M]=D,o[M]=D.o)}rn(o,8)}return f}function Re(o,f,p){if(p!=null&&typeof p!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof p+": "+p);y(o,f,p)}function He(o,f,p,M,D){es(o);var I=X(o,p,f,!1,!1);return p=M??new p,o=ee(o,f,2,!1),D!=null?(I.splice(D,0,p),o.splice(D,0,p.o)):(I.push(p),o.push(p.o)),p.C()&&dr(o,8),p}function Oe(o,f){return o??f}function Xe(o,f,p){return p=p===void 0?0:p,Oe(ne(o,f),p)}var $e;function qe(o){switch(typeof o){case"number":return isFinite(o)?o:String(o);case"object":if(o)if(Array.isArray(o)){if((Ut(o)&128)!==0)return o=Array.prototype.slice.call(o),ts(o),o}else{if(st&&o!=null&&o instanceof Uint8Array)return pt(o);if(o instanceof me){var f=o.V;return f==null?"":typeof f=="string"?f:o.V=pt(f)}}}return o}function lt(o,f,p,M){if(o!=null){if(Array.isArray(o))o=xt(o,f,p,M!==void 0);else if(qi(o)){var D={},I;for(I in o)D[I]=lt(o[I],f,p,M);o=D}else o=f(o,M);return o}}function xt(o,f,p,M){var D=Ut(o);M=M?!!(D&16):void 0,o=Array.prototype.slice.call(o);for(var I=0;I<o.length;I++)o[I]=lt(o[I],f,p,M);return p(D,o),o}function It(o){return o.ja===pr?o.toJSON():qe(o)}function Ft(o,f){o&128&&ts(f)}function Mt(o,f,p){if(p=p===void 0?ni:p,o!=null){if(st&&o instanceof Uint8Array)return o.length?new me(new Uint8Array(o),tt):ye();if(Array.isArray(o)){var M=Ut(o);return M&2?o:f&&!(M&32)&&(M&16||M===0)?(gn(o,M|2),o):(o=xt(o,Mt,M&4?ni:p,!0),f=Ut(o),f&4&&f&2&&Object.freeze(o),o)}return o.ja===pr?Rt(o):o}}function Ye(o,f,p,M,D,I,U){if(o=o.h&&o.h[p]){if(M=Ut(o),M&2?M=o:(I=fe(o,Rt),ni(M,I),Object.freeze(I),M=I),es(f),U=M==null?Yi:wi([]),M!=null){for(I=!!M.length,o=0;o<M.length;o++){var G=M[o];I=I&&!(Ut(G.o)&2),U[o]=G.o}I=(I?8:0)|1,o=Ut(U),(o&I)!==I&&(Object.isFrozen(U)&&(U=Array.prototype.slice.call(U)),gn(U,o|I)),f.h||(f.h={}),f.h[p]=M}else f.h&&(f.h[p]=void 0);k(f,p,U,D)}else y(f,p,Mt(M,I,U),D)}function Rt(o){return Ut(o.o)&2||(o=ft(o,!0),rn(o.o,2)),o}function ft(o,f){var p=o.o,M=[];rn(M,16);var D=o.constructor.h;if(D&&M.push(D),D=o.B,D){M.length=p.length,M.fill(void 0,M.length,p.length);var I={};M[M.length-1]=I}(Ut(p)&128)!==0&&ts(M),f=f||o.C()?ni:Hs,I=o.constructor,$e=M,M=new I(M),$e=void 0,o.R&&(M.R=o.R.slice()),I=!!(Ut(p)&16);for(var U=D?p.length-1:p.length,G=0;G<U;G++)Ye(o,M,G-o.G,p[G],!1,I,f);if(D)for(var Q in D)Ye(o,M,+Q,D[Q],!0,I,f);return M}function Et(o,f,p){o==null&&(o=$e),$e=void 0;var M=this.constructor.i||0,D=0<M,I=this.constructor.h,U=!1;if(o==null){o=I?[I]:[];var G=48,Q=!0;D&&(M=0,G|=128),gn(o,G)}else{if(!Array.isArray(o)||I&&I!==o[0])throw Error();var Me=G=rn(o,0);if((Q=(16&Me)!==0)&&((U=(32&Me)!==0)||(Me|=32)),D){if(128&Me)M=0;else if(0<o.length){var Pe=o[o.length-1];if(qi(Pe)&&"g"in Pe){M=0,Me|=128,delete Pe.g;var Qe=!0,je;for(je in Pe){Qe=!1;break}Qe&&o.pop()}}}else if(128&Me)throw Error();G!==Me&&gn(o,Me)}this.G=(I?0:-1)-M,this.h=void 0,this.o=o;e:{if(I=this.o.length,M=I-1,I&&(I=this.o[M],qi(I))){this.B=I,this.i=M-this.G;break e}f!==void 0&&-1<f?(this.i=Math.max(f,M+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!D&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(p){f=Q&&!U&&!0,D=this.i;var Ie;for(Q=0;Q<p.length;Q++)U=p[Q],U<D?(U+=this.G,(M=o[U])?ii(M,f):o[U]=Yi):(Ie||(Ie=ks(this)),(M=Ie[U])?ii(M,f):Ie[U]=Yi)}}Et.prototype.toJSON=function(){return xt(this.o,It,Ft)},Et.prototype.C=function(){return!!(Ut(this.o)&2)};function ii(o,f){if(Array.isArray(o)){var p=Ut(o),M=1;!f||p&2||(M|=16),(p&M)!==M&&gn(o,p|M)}}Et.prototype.ja=pr,Et.prototype.toString=function(){return this.o.toString()};function $t(o,f,p){if(p){var M={},D;for(D in p){var I=p[D],U=I.qa;U||(M.J=I.wa||I.oa.W,I.ia?(M.aa=Cc(I.ia),U=(function(G){return function(Q,Me,Pe){return G.J(Q,Me,Pe,G.aa)}})(M)):I.ka?(M.Z=Pc(I.da.P,I.ka),U=(function(G){return function(Q,Me,Pe){return G.J(Q,Me,Pe,G.Z)}})(M)):U=M.J,I.qa=U),U(f,o,I.da),M={J:M.J,aa:M.aa,Z:M.Z}}}Vs(f,o)}var Gn=Symbol();function Ct(o,f,p){return o[Gn]||(o[Gn]=function(M,D){return f(M,D,p)})}function Xt(o){var f=o[Gn];if(!f){var p=Jo(o);f=function(M,D){return Dc(M,D,p)},o[Gn]=f}return f}function un(o){var f=o.ia;if(f)return Xt(f);if(f=o.va)return Ct(o.da.P,f,o.ka)}function jt(o){var f=un(o),p=o.da,M=o.oa.U;return f?function(D,I){return M(D,I,p,f)}:function(D,I){return M(D,I,p)}}function qt(o,f){var p=o[f];return typeof p=="function"&&p.length===0&&(p=p(),o[f]=p),Array.isArray(p)&&(is in p||ns in p||0<p.length&&typeof p[0]=="function")?p:void 0}function mr(o,f,p,M,D,I){f.P=o[0];var U=1;if(o.length>U&&typeof o[U]!="number"){var G=o[U++];p(f,G)}for(;U<o.length;){p=o[U++];for(var Q=U+1;Q<o.length&&typeof o[Q]!="number";)Q++;switch(G=o[U++],Q-=U,Q){case 0:M(f,p,G);break;case 1:(Q=qt(o,U))?(U++,D(f,p,G,Q)):M(f,p,G,o[U++]);break;case 2:Q=U++,Q=qt(o,Q),D(f,p,G,Q,o[U++]);break;case 3:I(f,p,G,o[U++],o[U++],o[U++]);break;case 4:I(f,p,G,o[U++],o[U++],o[U++],o[U++]);break;default:throw Error("unexpected number of binary field arguments: "+Q)}}return f}var wn=Symbol();function Cc(o){var f=o[wn];if(!f){var p=Zo(o);f=function(M,D){return Lc(M,D,p)},o[wn]=f}return f}function Pc(o,f){var p=o[wn];return p||(p=function(M,D){return $t(M,D,f)},o[wn]=p),p}var ns=Symbol();function dd(o,f){o.push(f)}function pd(o,f,p){o.push(f,p.W)}function md(o,f,p,M){var D=Cc(M),I=Zo(M).P,U=p.W;o.push(f,function(G,Q,Me){return U(G,Q,Me,I,D)})}function xd(o,f,p,M,D,I){var U=Pc(M,I),G=p.W;o.push(f,function(Q,Me,Pe){return G(Q,Me,Pe,M,U)})}function Zo(o){var f=o[ns];return f||(f=mr(o,o[ns]=[],dd,pd,md,xd),is in o&&ns in o&&(o.length=0),f)}var is=Symbol();function gd(o,f){o[0]=f}function _d(o,f,p,M){var D=p.U;o[f]=M?function(I,U,G){return D(I,U,G,M)}:D}function vd(o,f,p,M,D){var I=p.U,U=Xt(M),G=Jo(M).P;o[f]=function(Q,Me,Pe){return I(Q,Me,Pe,G,U,D)}}function Md(o,f,p,M,D,I,U){var G=p.U,Q=Ct(M,D,I);o[f]=function(Me,Pe,Qe){return G(Me,Pe,Qe,M,Q,U)}}function Jo(o){var f=o[is];return f||(f=mr(o,o[is]={},gd,_d,vd,Md),is in o&&ns in o&&(o.length=0),f)}function Dc(o,f,p){for(;yt(f)&&f.i!=4;){var M=f.l,D=p[M];if(!D){var I=p[0];I&&(I=I[M])&&(D=p[M]=jt(I))}if(!D||!D(f,o,M)){D=f,M=o,I=D.j,mt(D);var U=D;if(!U.ca){if(D=U.h.h-I,U.h.h=I,U=U.h,D==0)D=ye();else{if(I=Ae(U,D),U.S&&U.m)D=U.i.subarray(I,I+D);else{U=U.i;var G=I;D=I+D,D=G===D?Ge():F?U.slice(G,D):new Uint8Array(U.subarray(G,D))}D=D.length==0?ye():new me(D,tt)}(I=M.R)?I.push(D):M.R=[D]}}}return o}function Lc(o,f,p){for(var M=p.length,D=M%2==1,I=D?1:0;I<M;I+=2)(0,p[I+1])(f,o,p[I]);$t(o,f,D?p[0]:void 0)}function rs(o,f){return{U:o,W:f}}var In=rs(function(o,f,p){if(o.i!==5)return!1;o=o.h;var M=o.i,D=o.h,I=M[D],U=M[D+1],G=M[D+2];return M=M[D+3],V(o,o.h+4),U=(I<<0|U<<8|G<<16|M<<24)>>>0,o=2*(U>>31)+1,I=U>>>23&255,U&=8388607,y(f,p,I==255?U?NaN:1/0*o:I==0?o*Math.pow(2,-149)*U:o*Math.pow(2,I-150)*(U+Math.pow(2,23))),!0},function(o,f,p){if(f=ne(f,p),f!=null){Be(o.h,8*p+5),o=o.h;var M=+f;M===0?0<1/M?N=j=0:(j=0,N=2147483648):isNaN(M)?(j=0,N=2147483647):(M=(p=0>M?-2147483648:0)?-M:M,34028234663852886e22<M?(j=0,N=(p|2139095040)>>>0):11754943508222875e-54>M?(M=Math.round(M/Math.pow(2,-149)),j=0,N=(p|M)>>>0):(f=Math.floor(Math.log(M)/Math.LN2),M*=Math.pow(2,-f),M=Math.round(8388608*M),16777216<=M&&++f,j=0,N=(p|f+127<<23|M&8388607)>>>0)),p=N,o.h.push(p>>>0&255),o.h.push(p>>>8&255),o.h.push(p>>>16&255),o.h.push(p>>>24&255)}}),Sd=rs(function(o,f,p){if(o.i!==0)return!1;var M=o.h,D=0,I=o=0,U=M.i,G=M.h;do{var Q=U[G++];D|=(Q&127)<<I,I+=7}while(32>I&&Q&128);for(32<I&&(o|=(Q&127)>>4),I=3;32>I&&Q&128;I+=7)Q=U[G++],o|=(Q&127)<<I;if(V(M,G),128>Q)M=D>>>0,Q=o>>>0,(o=Q&2147483648)&&(M=~M+1>>>0,Q=~Q>>>0,M==0&&(Q=Q+1>>>0)),M=4294967296*Q+(M>>>0);else throw ve();return y(f,p,o?-M:M),!0},function(o,f,p){f=_n(f,p),f!=null&&(typeof f=="string"&&te(f),f!=null&&(Be(o.h,8*p),typeof f=="number"?(o=o.h,w(f),pe(o,N,j)):(p=te(f),pe(o.h,p.i,p.h))))}),bd=rs(function(o,f,p){return o.i!==0?!1:(y(f,p,Ce(o.h)),!0)},function(o,f,p){if(f=_n(f,p),f!=null&&f!=null)if(Be(o.h,8*p),o=o.h,p=f,0<=p)Be(o,p);else{for(f=0;9>f;f++)o.h.push(p&127|128),p>>=7;o.h.push(1)}}),Uc=rs(function(o,f,p){if(o.i!==2)return!1;var M=Ce(o.h)>>>0;o=o.h;var D=Ae(o,M);if(o=o.i,q){var I=o,U;(U=oe)||(U=oe=new TextDecoder("utf-8",{fatal:!0})),o=D+M,I=D===0&&o===I.length?I:I.subarray(D,o);try{var G=U.decode(I)}catch(Qe){if(J===void 0){try{U.decode(new Uint8Array([128]))}catch{}try{U.decode(new Uint8Array([97])),J=!0}catch{J=!1}}throw!J&&(oe=void 0),Qe}}else{G=D,M=G+M,D=[];for(var Q=null,Me,Pe;G<M;)Me=o[G++],128>Me?D.push(Me):224>Me?G>=M?v():(Pe=o[G++],194>Me||(Pe&192)!==128?(G--,v()):D.push((Me&31)<<6|Pe&63)):240>Me?G>=M-1?v():(Pe=o[G++],(Pe&192)!==128||Me===224&&160>Pe||Me===237&&160<=Pe||((I=o[G++])&192)!==128?(G--,v()):D.push((Me&15)<<12|(Pe&63)<<6|I&63)):244>=Me?G>=M-2?v():(Pe=o[G++],(Pe&192)!==128||(Me<<28)+(Pe-144)>>30!==0||((I=o[G++])&192)!==128||((U=o[G++])&192)!==128?(G--,v()):(Me=(Me&7)<<18|(Pe&63)<<12|(I&63)<<6|U&63,Me-=65536,D.push((Me>>10&1023)+55296,(Me&1023)+56320))):v(),8192<=D.length&&(Q=H(Q,D),D.length=0);G=H(Q,D)}return y(f,p,G),!0},function(o,f,p){if(f=_n(f,p),f!=null){var M=!1;if(M=M===void 0?!1:M,be){if(M&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(f))throw Error("Found an unpaired surrogate");f=(Ue||(Ue=new TextEncoder)).encode(f)}else{for(var D=0,I=new Uint8Array(3*f.length),U=0;U<f.length;U++){var G=f.charCodeAt(U);if(128>G)I[D++]=G;else{if(2048>G)I[D++]=G>>6|192;else{if(55296<=G&&57343>=G){if(56319>=G&&U<f.length){var Q=f.charCodeAt(++U);if(56320<=Q&&57343>=Q){G=1024*(G-55296)+Q-56320+65536,I[D++]=G>>18|240,I[D++]=G>>12&63|128,I[D++]=G>>6&63|128,I[D++]=G&63|128;continue}else U--}if(M)throw Error("Found an unpaired surrogate");G=65533}I[D++]=G>>12|224,I[D++]=G>>6&63|128}I[D++]=G&63|128}}f=D===I.length?I:I.subarray(0,D)}Be(o.h,8*p+2),Be(o.h,f.length),Ai(o,o.h.end()),Ai(o,f)}}),Ic=rs(function(o,f,p,M,D){if(o.i!==2)return!1;f=He(f,p,M),p=o.h.j,M=Ce(o.h)>>>0;var I=o.h.h+M,U=I-p;if(0>=U&&(o.h.j=I,D(f,o,void 0,void 0,void 0),U=I-o.h.h),U)throw Error("Message parsing ended unexpectedly. Expected to read "+(M+" bytes, instead read "+(M-U)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return o.h.h=I,o.h.j=p,!0},function(o,f,p,M,D){if(f=Ee(f,M,p),f!=null)for(M=0;M<f.length;M++){var I=o;Be(I.h,8*p+2);var U=I.h.end();Ai(I,U),U.push(I.i),I=U,D(f[M],o),U=o;var G=I.pop();for(G=U.i+U.h.length()-G;127<G;)I.push(G&127|128),G>>>=7,U.i++;I.push(G),U.i++}});function Qo(o){return function(f,p){e:{if(nn.length){var M=nn.pop();M.setOptions(p),Ke(M.h,f,p),f=M}else f=new Je(f,p);try{var D=Jo(o),I=Dc(new D.P,f,D);break e}finally{D=f.h,D.i=null,D.m=!1,D.l=0,D.j=0,D.h=0,D.S=!1,f.l=-1,f.i=-1,100>nn.length&&nn.push(f)}I=void 0}return I}}function ea(o){return function(){var f=new xn;Lc(this,f,Zo(o)),Ai(f,f.h.end());for(var p=new Uint8Array(f.i),M=f.j,D=M.length,I=0,U=0;U<D;U++){var G=M[U];p.set(G,I),I+=G.length}return f.j=[p],p}}function xr(o){Et.call(this,o)}_(xr,Et);var Fc=[xr,1,bd,2,In,3,Uc,4,Uc];xr.prototype.l=ea(Fc);function ta(o){Et.call(this,o,-1,yd)}_(ta,Et),ta.prototype.addClassification=function(o,f){return He(this,1,xr,o,f),this};var yd=[1],Nc=Qo([ta,1,Ic,Fc]);function gr(o){Et.call(this,o)}_(gr,Et);var Oc=[gr,1,In,2,In,3,In,4,In,5,In];gr.prototype.l=ea(Oc);function Bc(o){Et.call(this,o,-1,Ed)}_(Bc,Et);var Ed=[1],zc=Qo([Bc,1,Ic,Oc]);function Ws(o){Et.call(this,o)}_(Ws,Et);var Vc=[Ws,1,In,2,In,3,In,4,In,5,In,6,Sd],Td=Qo(Vc);Ws.prototype.l=ea(Vc);function Hc(o,f,p){if(p=o.createShader(p===0?o.VERTEX_SHADER:o.FRAGMENT_SHADER),o.shaderSource(p,f),o.compileShader(p),!o.getShaderParameter(p,o.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+o.getShaderInfoLog(p));return p}function Gc(o){return Ee(o,xr,1).map(function(f){var p=_n(f,1);return{index:p??0,score:Xe(f,2),label:_n(f,3)!=null?Oe(_n(f,3),""):void 0,displayName:_n(f,4)!=null?Oe(_n(f,4),""):void 0}})}function kc(o){return{x:Xe(o,1),y:Xe(o,2),z:Xe(o,3),visibility:ne(o,4)!=null?Xe(o,4):void 0}}function Wc(o){return o.map(function(f){return Ee(zc(f),gr,1).map(kc)})}function na(o,f){this.i=o,this.h=f,this.m=0}function Xc(o,f,p){return Ad(o,f),typeof o.h.canvas.transferToImageBitmap=="function"?Promise.resolve(o.h.canvas.transferToImageBitmap()):p?Promise.resolve(o.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(o.h.canvas):(o.j===void 0&&(o.j=document.createElement("canvas")),new Promise(function(M){o.j.height=o.h.canvas.height,o.j.width=o.h.canvas.width,o.j.getContext("2d",{}).drawImage(o.h.canvas,0,0,o.h.canvas.width,o.h.canvas.height),M(o.j)}))}function Ad(o,f){var p=o.h;if(o.s===void 0){var M=Hc(p,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),D=Hc(p,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),I=p.createProgram();if(p.attachShader(I,M),p.attachShader(I,D),p.linkProgram(I),!p.getProgramParameter(I,p.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+p.getProgramInfoLog(I));M=o.s=I,p.useProgram(M),D=p.getUniformLocation(M,"sampler0"),o.l={O:p.getAttribLocation(M,"aVertex"),N:p.getAttribLocation(M,"aTex"),xa:D},o.v=p.createBuffer(),p.bindBuffer(p.ARRAY_BUFFER,o.v),p.enableVertexAttribArray(o.l.O),p.vertexAttribPointer(o.l.O,2,p.FLOAT,!1,0,0),p.bufferData(p.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),p.STATIC_DRAW),p.bindBuffer(p.ARRAY_BUFFER,null),o.u=p.createBuffer(),p.bindBuffer(p.ARRAY_BUFFER,o.u),p.enableVertexAttribArray(o.l.N),p.vertexAttribPointer(o.l.N,2,p.FLOAT,!1,0,0),p.bufferData(p.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),p.STATIC_DRAW),p.bindBuffer(p.ARRAY_BUFFER,null),p.uniform1i(D,0)}M=o.l,p.useProgram(o.s),p.canvas.width=f.width,p.canvas.height=f.height,p.viewport(0,0,f.width,f.height),p.activeTexture(p.TEXTURE0),o.i.bindTexture2d(f.glName),p.enableVertexAttribArray(M.O),p.bindBuffer(p.ARRAY_BUFFER,o.v),p.vertexAttribPointer(M.O,2,p.FLOAT,!1,0,0),p.enableVertexAttribArray(M.N),p.bindBuffer(p.ARRAY_BUFFER,o.u),p.vertexAttribPointer(M.N,2,p.FLOAT,!1,0,0),p.bindFramebuffer(p.DRAW_FRAMEBUFFER?p.DRAW_FRAMEBUFFER:p.FRAMEBUFFER,null),p.clearColor(0,0,0,0),p.clear(p.COLOR_BUFFER_BIT),p.colorMask(!0,!0,!0,!0),p.drawArrays(p.TRIANGLE_FAN,0,4),p.disableVertexAttribArray(M.O),p.disableVertexAttribArray(M.N),p.bindBuffer(p.ARRAY_BUFFER,null),o.i.bindTexture2d(0)}function wd(o){this.h=o}var Rd=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Cd(o,f){return f+o}function jc(o,f){window[o]=f}function Pd(o){var f=document.createElement("script");return f.setAttribute("src",o),f.setAttribute("crossorigin","anonymous"),new Promise(function(p){f.addEventListener("load",function(){p()},!1),f.addEventListener("error",function(){p()},!1),document.body.appendChild(f)})}function Dd(){return z(function(o){switch(o.h){case 1:return o.s=2,A(o,WebAssembly.instantiate(Rd),4);case 4:o.h=3,o.s=0;break;case 2:return o.s=0,o.l=null,o.return(!1);case 3:return o.return(!0)}})}function ia(o){if(this.h=o,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=o&&o.locateFile||Cd,typeof window=="object")var f=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")f=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=f,o.options){f=l(Object.keys(o.options));for(var p=f.next();!p.done;p=f.next()){p=p.value;var M=o.options[p].default;M!==void 0&&(this.l[p]=typeof M=="function"?M():M)}}}n=ia.prototype,n.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function Ld(o){var f,p,M,D,I,U,G,Q,Me,Pe,Qe;return z(function(je){switch(je.h){case 1:return o.ga?(f=o.h.files===void 0?[]:typeof o.h.files=="function"?o.h.files(o.l):o.h.files,A(je,Dd(),2)):je.return();case 2:if(p=je.i,typeof window=="object")return jc("createMediapipeSolutionsWasm",{locateFile:o.locateFile}),jc("createMediapipeSolutionsPackedAssets",{locateFile:o.locateFile}),U=f.filter(function(Ie){return Ie.data!==void 0}),G=f.filter(function(Ie){return Ie.data===void 0}),Q=Promise.all(U.map(function(Ie){var et=Xs(o,Ie.url);if(Ie.path!==void 0){var ct=Ie.path;et=et.then(function(Lt){return o.overrideFile(ct,Lt),Promise.resolve(Lt)})}return et})),Me=Promise.all(G.map(function(Ie){return Ie.simd===void 0||Ie.simd&&p||!Ie.simd&&!p?Pd(o.locateFile(Ie.url,o.ha)):Promise.resolve()})).then(function(){var Ie,et,ct;return z(function(Lt){if(Lt.h==1)return Ie=window.createMediapipeSolutionsWasm,et=window.createMediapipeSolutionsPackedAssets,ct=o,A(Lt,Ie(et),2);ct.i=Lt.i,Lt.h=0})}),Pe=(function(){return z(function(Ie){return o.h.graph&&o.h.graph.url?Ie=A(Ie,Xs(o,o.h.graph.url),0):(Ie.h=0,Ie=void 0),Ie})})(),A(je,Promise.all([Me,Q,Pe]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return M=f.filter(function(Ie){return Ie.simd===void 0||Ie.simd&&p||!Ie.simd&&!p}).map(function(Ie){return o.locateFile(Ie.url,o.ha)}),importScripts.apply(null,c(M)),D=o,A(je,createMediapipeSolutionsWasm(Module),6);case 6:D.i=je.i,o.m=new OffscreenCanvas(1,1),o.i.canvas=o.m,I=o.i.GL.createContext(o.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),o.i.GL.makeContextCurrent(I),je.h=4;break;case 7:if(o.m=document.createElement("canvas"),Qe=o.m.getContext("webgl2",{}),!Qe&&(Qe=o.m.getContext("webgl",{}),!Qe))return alert("Failed to create WebGL canvas context when passing video frame."),je.return();o.K=Qe,o.i.canvas=o.m,o.i.createContext(o.m,!0,!0,{});case 4:o.j=new o.i.SolutionWasm,o.ga=!1,je.h=0}})}function Ud(o){var f,p,M,D,I,U,G,Q;return z(function(Me){if(Me.h==1){if(o.h.graph&&o.h.graph.url&&o.fa===o.h.graph.url)return Me.return();if(o.u=!0,!o.h.graph||!o.h.graph.url){Me.h=2;return}return o.fa=o.h.graph.url,A(Me,Xs(o,o.h.graph.url),3)}for(Me.h!=2&&(f=Me.i,o.j.loadGraph(f)),p=l(Object.keys(o.D)),M=p.next();!M.done;M=p.next())D=M.value,o.j.overrideFile(D,o.D[D]);if(o.D={},o.h.listeners)for(I=l(o.h.listeners),U=I.next();!U.done;U=I.next())G=U.value,Od(o,G);Q=o.l,o.l={},o.setOptions(Q),Me.h=0})}n.reset=function(){var o=this;return z(function(f){o.j&&(o.j.reset(),o.s={},o.v={}),f.h=0})},n.setOptions=function(o,f){var p=this;if(f=f||this.h.options){for(var M=[],D=[],I={},U=l(Object.keys(o)),G=U.next();!G.done;I={X:I.X,Y:I.Y},G=U.next())if(G=G.value,!(G in this.l&&this.l[G]===o[G])){this.l[G]=o[G];var Q=f[G];Q!==void 0&&(Q.onChange&&(I.X=Q.onChange,I.Y=o[G],M.push((function(Me){return function(){var Pe;return z(function(Qe){if(Qe.h==1)return A(Qe,Me.X(Me.Y),2);Pe=Qe.i,Pe===!0&&(p.u=!0),Qe.h=0})}})(I))),Q.graphOptionXref&&(G=Object.assign({},{calculatorName:"",calculatorIndex:0},Q.graphOptionXref,{valueNumber:Q.type===1?o[G]:0,valueBoolean:Q.type===0?o[G]:!1,valueString:Q.type===2?o[G]:""}),D.push(G)))}(M.length!==0||D.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(D),this.F=(this.F===void 0?[]:this.F).concat(M))}};function Id(o){var f,p,M,D,I,U,G;return z(function(Q){switch(Q.h){case 1:if(!o.u)return Q.return();if(!o.F){Q.h=2;break}f=l(o.F),p=f.next();case 3:if(p.done){Q.h=5;break}return M=p.value,A(Q,M(),4);case 4:p=f.next(),Q.h=3;break;case 5:o.F=void 0;case 2:if(o.H){for(D=new o.i.GraphOptionChangeRequestList,I=l(o.H),U=I.next();!U.done;U=I.next())G=U.value,D.push_back(G);o.j.changeOptions(D),D.delete(),o.H=void 0}o.u=!1,Q.h=0}})}n.initialize=function(){var o=this;return z(function(f){return f.h==1?A(f,Ld(o),2):f.h!=3?A(f,Ud(o),3):A(f,Id(o),0)})};function Xs(o,f){var p,M;return z(function(D){return f in o.L?D.return(o.L[f]):(p=o.locateFile(f,""),M=fetch(p).then(function(I){return I.arrayBuffer()}),o.L[f]=M,D.return(M))})}n.overrideFile=function(o,f){this.j?this.j.overrideFile(o,f):this.D[o]=f},n.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},n.send=function(o,f){var p=this,M,D,I,U,G,Q,Me,Pe,Qe;return z(function(je){switch(je.h){case 1:return p.h.inputs?(M=1e3*(f??performance.now()),A(je,p.I,2)):je.return();case 2:return A(je,p.initialize(),3);case 3:for(D=new p.i.PacketDataList,I=l(Object.keys(o)),U=I.next();!U.done;U=I.next())if(G=U.value,Q=p.h.inputs[G]){e:{var Ie=o[G];switch(Q.type){case"video":var et=p.s[Q.stream];if(et||(et=new na(p.i,p.K),p.s[Q.stream]=et),et.m===0&&(et.m=et.i.createTexture()),typeof HTMLVideoElement<"u"&&Ie instanceof HTMLVideoElement)var ct=Ie.videoWidth,Lt=Ie.videoHeight;else typeof HTMLImageElement<"u"&&Ie instanceof HTMLImageElement?(ct=Ie.naturalWidth,Lt=Ie.naturalHeight):(ct=Ie.width,Lt=Ie.height);Lt={glName:et.m,width:ct,height:Lt},ct=et.h,ct.canvas.width=Lt.width,ct.canvas.height=Lt.height,ct.activeTexture(ct.TEXTURE0),et.i.bindTexture2d(et.m),ct.texImage2D(ct.TEXTURE_2D,0,ct.RGBA,ct.RGBA,ct.UNSIGNED_BYTE,Ie),et.i.bindTexture2d(0),et=Lt;break e;case"detections":for(et=p.s[Q.stream],et||(et=new wd(p.i),p.s[Q.stream]=et),et.data||(et.data=new et.h.DetectionListData),et.data.reset(Ie.length),Lt=0;Lt<Ie.length;++Lt){ct=Ie[Lt];var Pt=et.data,Yt=Pt.setBoundingBox,Rn=Lt,fn=ct.la,gt=new Ws;if(Re(gt,1,fn.ra),Re(gt,2,fn.sa),Re(gt,3,fn.height),Re(gt,4,fn.width),Re(gt,5,fn.rotation),y(gt,6,fn.pa),fn=gt.l(),Yt.call(Pt,Rn,fn),ct.ea)for(Pt=0;Pt<ct.ea.length;++Pt){gt=ct.ea[Pt],Yt=et.data,Rn=Yt.addNormalizedLandmark,fn=Lt,gt=Object.assign({},gt,{visibility:gt.visibility?gt.visibility:0});var Kt=new gr;Re(Kt,1,gt.x),Re(Kt,2,gt.y),Re(Kt,3,gt.z),gt.visibility&&Re(Kt,4,gt.visibility),gt=Kt.l(),Rn.call(Yt,fn,gt)}if(ct.ba)for(Pt=0;Pt<ct.ba.length;++Pt)Yt=et.data,Rn=Yt.addClassification,fn=Lt,gt=ct.ba[Pt],Kt=new xr,Re(Kt,2,gt.score),gt.index&&y(Kt,1,gt.index),gt.label&&y(Kt,3,gt.label),gt.displayName&&y(Kt,4,gt.displayName),gt=Kt.l(),Rn.call(Yt,fn,gt)}et=et.data;break e;default:et={}}}switch(Me=et,Pe=Q.stream,Q.type){case"video":D.pushTexture2d(Object.assign({},Me,{stream:Pe,timestamp:M}));break;case"detections":Qe=Me,Qe.stream=Pe,Qe.timestamp=M,D.pushDetectionList(Qe);break;default:throw Error("Unknown input config type: '"+Q.type+"'")}}return p.j.send(D),A(je,p.I,4);case 4:D.delete(),je.h=0}})};function Fd(o,f,p){var M,D,I,U,G,Q,Me,Pe,Qe,je,Ie,et,ct,Lt;return z(function(Pt){switch(Pt.h){case 1:if(!p)return Pt.return(f);for(M={},D=0,I=l(Object.keys(p)),U=I.next();!U.done;U=I.next())G=U.value,Q=p[G],typeof Q!="string"&&Q.type==="texture"&&f[Q.stream]!==void 0&&++D;1<D&&(o.M=!1),Me=l(Object.keys(p)),U=Me.next();case 2:if(U.done){Pt.h=4;break}if(Pe=U.value,Qe=p[Pe],typeof Qe=="string")return ct=M,Lt=Pe,A(Pt,Nd(o,Pe,f[Qe]),14);if(je=f[Qe.stream],Qe.type==="detection_list"){if(je){for(var Yt=je.getRectList(),Rn=je.getLandmarksList(),fn=je.getClassificationsList(),gt=[],Kt=0;Kt<Yt.size();++Kt){var Ri=Td(Yt.get(Kt)),Bd=Xe(Ri,1),zd=Xe(Ri,2),Vd=Xe(Ri,3),Hd=Xe(Ri,4),Gd=Xe(Ri,5,0),js=void 0;js=js===void 0?0:js,Ri={la:{ra:Bd,sa:zd,height:Vd,width:Hd,rotation:Gd,pa:Oe(_n(Ri,6),js)},ea:Ee(zc(Rn.get(Kt)),gr,1).map(kc),ba:Gc(Nc(fn.get(Kt)))},gt.push(Ri)}Yt=gt}else Yt=[];M[Pe]=Yt,Pt.h=7;break}if(Qe.type==="proto_list"){if(je){for(Yt=Array(je.size()),Rn=0;Rn<je.size();Rn++)Yt[Rn]=je.get(Rn);je.delete()}else Yt=[];M[Pe]=Yt,Pt.h=7;break}if(je===void 0){Pt.h=3;break}if(Qe.type==="float_list"){M[Pe]=je,Pt.h=7;break}if(Qe.type==="proto"){M[Pe]=je,Pt.h=7;break}if(Qe.type!=="texture")throw Error("Unknown output config type: '"+Qe.type+"'");return Ie=o.v[Pe],Ie||(Ie=new na(o.i,o.K),o.v[Pe]=Ie),A(Pt,Xc(Ie,je,o.M),13);case 13:et=Pt.i,M[Pe]=et;case 7:Qe.transform&&M[Pe]&&(M[Pe]=Qe.transform(M[Pe])),Pt.h=3;break;case 14:ct[Lt]=Pt.i;case 3:U=Me.next(),Pt.h=2;break;case 4:return Pt.return(M)}})}function Nd(o,f,p){var M;return z(function(D){return typeof p=="number"||p instanceof Uint8Array||p instanceof o.i.Uint8BlobList?D.return(p):p instanceof o.i.Texture2dDataOut?(M=o.v[f],M||(M=new na(o.i,o.K),o.v[f]=M),D.return(Xc(M,p,o.M))):D.return(void 0)})}function Od(o,f){for(var p=f.name||"$",M=[].concat(c(f.wants)),D=new o.i.StringList,I=l(f.wants),U=I.next();!U.done;U=I.next())D.push_back(U.value);I=o.i.PacketListener.implement({onResults:function(G){for(var Q={},Me=0;Me<f.wants.length;++Me)Q[M[Me]]=G.get(Me);var Pe=o.listeners[p];Pe&&(o.I=Fd(o,Q,f.outs).then(function(Qe){Qe=Pe(Qe);for(var je=0;je<f.wants.length;++je){var Ie=Q[M[je]];typeof Ie=="object"&&Ie.hasOwnProperty&&Ie.hasOwnProperty("delete")&&Ie.delete()}Qe&&(o.I=Qe)}))}}),o.j.attachMultiListener(D,I),D.delete()}n.onResults=function(o,f){this.listeners[f||"$"]=o},ue("Solution",ia),ue("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function qc(o){return o===void 0&&(o=0),o===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function Yc(o){var f=this;o=o||{},this.h=new ia({locateFile:o.locateFile,files:function(p){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:qc(p.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:Wc},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:Wc},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(p){return p.map(function(M){return Gc(Nc(M))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(p){var M,D,I;return z(function(U){return U.h==1?(M=qc(p),D="third_party/mediapipe/modules/hand_landmark/"+M,A(U,Xs(f.h,M),2)):(I=U.i,f.h.overrideFile(D,I),U.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}n=Yc.prototype,n.close=function(){return this.h.close(),Promise.resolve()},n.onResults=function(o){this.h.onResults(o)},n.initialize=function(){var o=this;return z(function(f){return A(f,o.h.initialize(),0)})},n.reset=function(){this.h.reset()},n.send=function(o){var f=this;return z(function(p){return A(p,f.h.send(o),0)})},n.setOptions=function(o){this.h.setOptions(o)},ue("Hands",Yc),ue("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),ue("VERSION","0.4.1675469240")}).call(Ka)),Ka}var DS=PS();const LS={class:"game-container"},US={class:"panel-header"},IS={class:"control-group"},FS={class:"model-selector"},NS=["onClick"],OS={class:"control-group"},BS={class:"control-group"},zS={class:"status-text"},VS={key:0},HS={class:"score-display"},Rf=.5,Cf=.15,GS=.3,kS=oh({__name:"SnakeGame",setup(n){const e=Ci(null),t=Ci(null),i=Ci(!1),r=Ci(!1),s=Ci(!1),a=Ci(0),l=Ci("#00ff88"),c=Ci("cube"),u=[{label:"Cube",value:"cube"},{label:"Sphere",value:"sphere"},{label:"Tetra",value:"tetra"}];let h,d,x,g;const S=[];let T=Cf;const _=new Y(0,0,0);let m;const C={x:15,y:10,z:5};let R;const A=()=>{i.value=!i.value},O=()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()},L=ae=>{c.value=ae,z()},B=()=>{const ae=new vt(l.value);S.forEach(le=>{le.material.color.set(ae),le.material.emissive.set(ae)})},W=()=>{if(!e.value)return;h=new Px,d=new bn(75,window.innerWidth/window.innerHeight,.1,1e3),d.position.z=20,x=new CS({antialias:!0,alpha:!0}),x.setSize(window.innerWidth,window.innerHeight),x.setPixelRatio(window.devicePixelRatio),x.setClearColor(0,0),e.value.appendChild(x.domElement);const ae=new Hx(16777215,.5);h.add(ae);const le=new zx(16777215,1);le.position.set(10,10,10),h.add(le),E(new Y(0,0,0));for(let Te=0;Te<5;Te++)Z();ie(),window.addEventListener("resize",ue)},P=()=>{switch(c.value){case"sphere":return new wc(.4,16,16);case"tetra":return new Rc(.5);case"cube":default:return new Jr(.6,.6,.6)}},E=ae=>{const le=P(),Te=new Zu({color:l.value,emissive:l.value,emissiveIntensity:.5,roughness:.4,metalness:.6}),We=new ei(le,Te);We.position.copy(ae),h.add(We),S.push(We)},z=()=>{const ae=S.map(le=>le.position.clone());S.forEach(le=>h.remove(le)),S.length=0,ae.forEach(le=>E(le))},Z=()=>{const ae=S[S.length-1];ae&&E(ae.position.clone())},ie=()=>{m&&h.remove(m);const ae=new Ac(.5),le=new Zu({color:16711765,emissive:16711765,emissiveIntensity:.8});m=new ei(ae,le),de(),h.add(m)},de=()=>{m.position.set((Math.random()-.5)*C.x*2,(Math.random()-.5)*C.y*2,(Math.random()-.5)*C.z*2)},ue=()=>{!d||!x||(d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight))},ce=async()=>{if(t.value){R=new DS.Hands({locateFile:ae=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${ae}`}),R.setOptions({maxNumHands:1,modelComplexity:1,minDetectionConfidence:.5,minTrackingConfidence:.5}),R.onResults(fe);try{const ae=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640},height:{ideal:480}}});t.value.srcObject=ae,await t.value.play();const le=async()=>{t.value&&!t.value.paused&&!t.value.ended&&await R.send({image:t.value}),requestAnimationFrame(le)};le()}catch(ae){console.error("Error accessing camera:",ae),alert("无法访问摄像头，请检查权限或设备支持情况。")}}},fe=ae=>{if(ae.multiHandLandmarks&&ae.multiHandLandmarks.length>0){r.value=!0;const le=ae.multiHandLandmarks[0],Te=(1-le[8].x)*2-1,We=(1-le[8].y)*2-1;_.x=Te*15,_.y=We*10;const st=le[4],ut=le[8];Math.sqrt(Math.pow(st.x-ut.x,2)+Math.pow(st.y-ut.y,2))<.05?(s.value=!0,T=GS):(s.value=!1,T=Cf)}else r.value=!1},K=()=>{g=requestAnimationFrame(K);const ae=S[0];if(ae){const le=new Y().subVectors(_,ae.position);le.length()>T&&le.normalize().multiplyScalar(T),ae.position.add(le),ae.lookAt(_)}for(let le=S.length-1;le>0;le--){const Te=S[le],We=S[le-1];if(Te&&We){const st=Te.position.distanceTo(We.position);if(st>Rf){const ut=new Y().subVectors(We.position,Te.position).normalize(),pt=st-Rf;Te.position.add(ut.multiplyScalar(pt)),Te.lookAt(We.position)}}}ae&&m&&(ae.position.distanceTo(m.position)<1&&(a.value+=10,Z(),de()),m.rotation.x+=.02,m.rotation.y+=.03),x.render(h,d)};return uh(()=>{W(),ce(),K()}),fh(()=>{cancelAnimationFrame(g),window.removeEventListener("resize",ue),t.value&&t.value.srcObject&&t.value.srcObject.getTracks().forEach(Te=>Te.stop()),x.dispose()}),(ae,le)=>(ys(),da("div",LS,[Ot("div",{ref_key:"canvasContainer",ref:e,class:"canvas-container"},null,512),Ot("video",{ref_key:"inputVideo",ref:t,class:"input-video",playsinline:""},null,512),Ot("div",{class:Br(["ui-panel",{hidden:i.value}])},[Ot("div",US,[le[1]||(le[1]=Ot("h2",null,"3D Snake Control",-1)),Ot("button",{onClick:A,class:"toggle-btn"},Ur(i.value?"Show":"Hide"),1)]),Ot("div",IS,[le[2]||(le[2]=Ot("label",null,"Snake Model",-1)),Ot("div",FS,[(ys(),da(Xn,null,Kp(u,Te=>Ot("button",{key:Te.value,class:Br({active:c.value===Te.value}),onClick:We=>L(Te.value)},Ur(Te.label),11,NS)),64))])]),Ot("div",OS,[le[3]||(le[3]=Ot("label",null,"Snake Color",-1)),Ip(Ot("input",{type:"color","onUpdate:modelValue":le[0]||(le[0]=Te=>l.value=Te),onInput:B},null,544),[[cm,l.value]])]),Ot("div",BS,[le[4]||(le[4]=Ot("label",null,"Status",-1)),Ot("div",zS,[Ot("span",{class:Br({active:r.value})},Ur(r.value?"Hand Detected":"No Hand"),3),r.value?(ys(),da("span",VS," | "+Ur(s.value?"Speed Boost!":"Normal Speed"),1)):P0("",!0)])]),Ot("div",{class:"control-group"},[Ot("button",{onClick:O,class:"fullscreen-btn"}," Toggle Fullscreen ")])],2),Ot("div",HS," Score: "+Ur(a.value),1)]))}}),WS=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},XS=WS(kS,[["__scopeId","data-v-c4af8244"]]),jS=oh({__name:"App",setup(n){return(e,t)=>(ys(),Dh(XS))}});hm(jS).mount("#app");
