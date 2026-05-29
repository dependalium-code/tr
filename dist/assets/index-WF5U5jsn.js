var QE=Object.defineProperty;var JE=(n,e,t)=>e in n?QE(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var xo=(n,e,t)=>JE(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function eT(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ny={exports:{}},Hd={},Dy={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var du=Symbol.for("react.element"),tT=Symbol.for("react.portal"),nT=Symbol.for("react.fragment"),iT=Symbol.for("react.strict_mode"),rT=Symbol.for("react.profiler"),sT=Symbol.for("react.provider"),oT=Symbol.for("react.context"),aT=Symbol.for("react.forward_ref"),lT=Symbol.for("react.suspense"),cT=Symbol.for("react.memo"),uT=Symbol.for("react.lazy"),U_=Symbol.iterator;function fT(n){return n===null||typeof n!="object"?null:(n=U_&&n[U_]||n["@@iterator"],typeof n=="function"?n:null)}var Ly={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Iy=Object.assign,Uy={};function Pl(n,e,t){this.props=n,this.context=e,this.refs=Uy,this.updater=t||Ly}Pl.prototype.isReactComponent={};Pl.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Pl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Fy(){}Fy.prototype=Pl.prototype;function Xg(n,e,t){this.props=n,this.context=e,this.refs=Uy,this.updater=t||Ly}var Yg=Xg.prototype=new Fy;Yg.constructor=Xg;Iy(Yg,Pl.prototype);Yg.isPureReactComponent=!0;var F_=Array.isArray,Oy=Object.prototype.hasOwnProperty,qg={current:null},ky={key:!0,ref:!0,__self:!0,__source:!0};function By(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Oy.call(e,i)&&!ky.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:du,type:n,key:s,ref:o,props:r,_owner:qg.current}}function dT(n,e){return{$$typeof:du,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function $g(n){return typeof n=="object"&&n!==null&&n.$$typeof===du}function hT(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var O_=/\/+/g;function hh(n,e){return typeof n=="object"&&n!==null&&n.key!=null?hT(""+n.key):e.toString(36)}function wf(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case du:case tT:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+hh(o,0):i,F_(r)?(t="",n!=null&&(t=n.replace(O_,"$&/")+"/"),wf(r,e,t,"",function(c){return c})):r!=null&&($g(r)&&(r=dT(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(O_,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",F_(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+hh(s,a);o+=wf(s,e,t,l,r)}else if(l=fT(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+hh(s,a++),o+=wf(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Mu(n,e,t){if(n==null)return n;var i=[],r=0;return wf(n,i,"","",function(s){return e.call(t,s,r++)}),i}function pT(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var li={current:null},Af={transition:null},mT={ReactCurrentDispatcher:li,ReactCurrentBatchConfig:Af,ReactCurrentOwner:qg};function zy(){throw Error("act(...) is not supported in production builds of React.")}dt.Children={map:Mu,forEach:function(n,e,t){Mu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Mu(n,function(){e++}),e},toArray:function(n){return Mu(n,function(e){return e})||[]},only:function(n){if(!$g(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};dt.Component=Pl;dt.Fragment=nT;dt.Profiler=rT;dt.PureComponent=Xg;dt.StrictMode=iT;dt.Suspense=lT;dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mT;dt.act=zy;dt.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Iy({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qg.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Oy.call(e,l)&&!ky.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:du,type:n.type,key:r,ref:s,props:i,_owner:o}};dt.createContext=function(n){return n={$$typeof:oT,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:sT,_context:n},n.Consumer=n};dt.createElement=By;dt.createFactory=function(n){var e=By.bind(null,n);return e.type=n,e};dt.createRef=function(){return{current:null}};dt.forwardRef=function(n){return{$$typeof:aT,render:n}};dt.isValidElement=$g;dt.lazy=function(n){return{$$typeof:uT,_payload:{_status:-1,_result:n},_init:pT}};dt.memo=function(n,e){return{$$typeof:cT,type:n,compare:e===void 0?null:e}};dt.startTransition=function(n){var e=Af.transition;Af.transition={};try{n()}finally{Af.transition=e}};dt.unstable_act=zy;dt.useCallback=function(n,e){return li.current.useCallback(n,e)};dt.useContext=function(n){return li.current.useContext(n)};dt.useDebugValue=function(){};dt.useDeferredValue=function(n){return li.current.useDeferredValue(n)};dt.useEffect=function(n,e){return li.current.useEffect(n,e)};dt.useId=function(){return li.current.useId()};dt.useImperativeHandle=function(n,e,t){return li.current.useImperativeHandle(n,e,t)};dt.useInsertionEffect=function(n,e){return li.current.useInsertionEffect(n,e)};dt.useLayoutEffect=function(n,e){return li.current.useLayoutEffect(n,e)};dt.useMemo=function(n,e){return li.current.useMemo(n,e)};dt.useReducer=function(n,e,t){return li.current.useReducer(n,e,t)};dt.useRef=function(n){return li.current.useRef(n)};dt.useState=function(n){return li.current.useState(n)};dt.useSyncExternalStore=function(n,e,t){return li.current.useSyncExternalStore(n,e,t)};dt.useTransition=function(){return li.current.useTransition()};dt.version="18.3.1";Dy.exports=dt;var Be=Dy.exports;const qs=eT(Be);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gT=Be,_T=Symbol.for("react.element"),vT=Symbol.for("react.fragment"),xT=Object.prototype.hasOwnProperty,yT=gT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ST={key:!0,ref:!0,__self:!0,__source:!0};function Vy(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)xT.call(e,i)&&!ST.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:_T,type:n,key:s,ref:o,props:r,_owner:yT.current}}Hd.Fragment=vT;Hd.jsx=Vy;Hd.jsxs=Vy;Ny.exports=Hd;var x=Ny.exports,Up={},Hy={exports:{}},Xi={},Gy={exports:{}},Wy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(O,X){var N=O.length;O.push(X);e:for(;0<N;){var te=N-1>>>1,se=O[te];if(0<r(se,X))O[te]=X,O[N]=se,N=te;else break e}}function t(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var X=O[0],N=O.pop();if(N!==X){O[0]=N;e:for(var te=0,se=O.length,Ce=se>>>1;te<Ce;){var Ie=2*(te+1)-1,be=O[Ie],K=Ie+1,re=O[K];if(0>r(be,N))K<se&&0>r(re,be)?(O[te]=re,O[K]=N,te=K):(O[te]=be,O[Ie]=N,te=Ie);else if(K<se&&0>r(re,N))O[te]=re,O[K]=N,te=K;else break e}}return X}function r(O,X){var N=O.sortIndex-X.sortIndex;return N!==0?N:O.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,f=3,d=!1,m=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var X=t(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=O)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=t(c)}}function M(O){if(v=!1,y(O),!m)if(t(l)!==null)m=!0,B(A);else{var X=t(c);X!==null&&F(M,X.startTime-O)}}function A(O,X){m=!1,v&&(v=!1,p(S),S=-1),d=!0;var N=f;try{for(y(X),h=t(l);h!==null&&(!(h.expirationTime>X)||O&&!D());){var te=h.callback;if(typeof te=="function"){h.callback=null,f=h.priorityLevel;var se=te(h.expirationTime<=X);X=n.unstable_now(),typeof se=="function"?h.callback=se:h===t(l)&&i(l),y(X)}else i(l);h=t(l)}if(h!==null)var Ce=!0;else{var Ie=t(c);Ie!==null&&F(M,Ie.startTime-X),Ce=!1}return Ce}finally{h=null,f=N,d=!1}}var T=!1,w=null,S=-1,C=5,R=-1;function D(){return!(n.unstable_now()-R<C)}function L(){if(w!==null){var O=n.unstable_now();R=O;var X=!0;try{X=w(!0,O)}finally{X?V():(T=!1,w=null)}}else T=!1}var V;if(typeof g=="function")V=function(){g(L)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,I=G.port2;G.port1.onmessage=L,V=function(){I.postMessage(null)}}else V=function(){_(L,0)};function B(O){w=O,T||(T=!0,V())}function F(O,X){S=_(function(){O(n.unstable_now())},X)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(O){O.callback=null},n.unstable_continueExecution=function(){m||d||(m=!0,B(A))},n.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<O?Math.floor(1e3/O):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(O){switch(f){case 1:case 2:case 3:var X=3;break;default:X=f}var N=f;f=X;try{return O()}finally{f=N}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(O,X){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var N=f;f=O;try{return X()}finally{f=N}},n.unstable_scheduleCallback=function(O,X,N){var te=n.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?te+N:te):N=te,O){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=N+se,O={id:u++,callback:X,priorityLevel:O,startTime:N,expirationTime:se,sortIndex:-1},N>te?(O.sortIndex=N,e(c,O),t(l)===null&&O===t(c)&&(v?(p(S),S=-1):v=!0,F(M,N-te))):(O.sortIndex=se,e(l,O),m||d||(m=!0,B(A))),O},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(O){var X=f;return function(){var N=f;f=X;try{return O.apply(this,arguments)}finally{f=N}}}})(Wy);Gy.exports=Wy;var MT=Gy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ET=Be,Gi=MT;function de(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jy=new Set,Uc={};function ca(n,e){hl(n,e),hl(n+"Capture",e)}function hl(n,e){for(Uc[n]=e,n=0;n<e.length;n++)jy.add(e[n])}var ms=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fp=Object.prototype.hasOwnProperty,TT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k_={},B_={};function wT(n){return Fp.call(B_,n)?!0:Fp.call(k_,n)?!1:TT.test(n)?B_[n]=!0:(k_[n]=!0,!1)}function AT(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function CT(n,e,t,i){if(e===null||typeof e>"u"||AT(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ci(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Fn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Fn[n]=new ci(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Fn[e]=new ci(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Fn[n]=new ci(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Fn[n]=new ci(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Fn[n]=new ci(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Fn[n]=new ci(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Fn[n]=new ci(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Fn[n]=new ci(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Fn[n]=new ci(n,5,!1,n.toLowerCase(),null,!1,!1)});var Kg=/[\-:]([a-z])/g;function Zg(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Kg,Zg);Fn[e]=new ci(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Kg,Zg);Fn[e]=new ci(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Kg,Zg);Fn[e]=new ci(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Fn[n]=new ci(n,1,!1,n.toLowerCase(),null,!1,!1)});Fn.xlinkHref=new ci("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Fn[n]=new ci(n,1,!1,n.toLowerCase(),null,!0,!0)});function Qg(n,e,t,i){var r=Fn.hasOwnProperty(e)?Fn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(CT(e,t,r,i)&&(t=null),i||r===null?wT(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Es=ET.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Eu=Symbol.for("react.element"),Oa=Symbol.for("react.portal"),ka=Symbol.for("react.fragment"),Jg=Symbol.for("react.strict_mode"),Op=Symbol.for("react.profiler"),Xy=Symbol.for("react.provider"),Yy=Symbol.for("react.context"),e0=Symbol.for("react.forward_ref"),kp=Symbol.for("react.suspense"),Bp=Symbol.for("react.suspense_list"),t0=Symbol.for("react.memo"),Us=Symbol.for("react.lazy"),qy=Symbol.for("react.offscreen"),z_=Symbol.iterator;function Fl(n){return n===null||typeof n!="object"?null:(n=z_&&n[z_]||n["@@iterator"],typeof n=="function"?n:null)}var qt=Object.assign,ph;function ec(n){if(ph===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);ph=e&&e[1]||""}return`
`+ph+n}var mh=!1;function gh(n,e){if(!n||mh)return"";mh=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{mh=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?ec(n):""}function bT(n){switch(n.tag){case 5:return ec(n.type);case 16:return ec("Lazy");case 13:return ec("Suspense");case 19:return ec("SuspenseList");case 0:case 2:case 15:return n=gh(n.type,!1),n;case 11:return n=gh(n.type.render,!1),n;case 1:return n=gh(n.type,!0),n;default:return""}}function zp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ka:return"Fragment";case Oa:return"Portal";case Op:return"Profiler";case Jg:return"StrictMode";case kp:return"Suspense";case Bp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Yy:return(n.displayName||"Context")+".Consumer";case Xy:return(n._context.displayName||"Context")+".Provider";case e0:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case t0:return e=n.displayName||null,e!==null?e:zp(n.type)||"Memo";case Us:e=n._payload,n=n._init;try{return zp(n(e))}catch{}}return null}function RT(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zp(e);case 8:return e===Jg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function oo(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $y(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function PT(n){var e=$y(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Tu(n){n._valueTracker||(n._valueTracker=PT(n))}function Ky(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=$y(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Jf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Vp(n,e){var t=e.checked;return qt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function V_(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=oo(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zy(n,e){e=e.checked,e!=null&&Qg(n,"checked",e,!1)}function Hp(n,e){Zy(n,e);var t=oo(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Gp(n,e.type,t):e.hasOwnProperty("defaultValue")&&Gp(n,e.type,oo(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function H_(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Gp(n,e,t){(e!=="number"||Jf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var tc=Array.isArray;function Qa(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+oo(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Wp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(de(91));return qt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function G_(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(de(92));if(tc(t)){if(1<t.length)throw Error(de(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:oo(t)}}function Qy(n,e){var t=oo(e.value),i=oo(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function W_(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Jy(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Jy(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var wu,eS=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(wu=wu||document.createElement("div"),wu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wu.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Fc(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var pc={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},NT=["Webkit","ms","Moz","O"];Object.keys(pc).forEach(function(n){NT.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),pc[e]=pc[n]})});function tS(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||pc.hasOwnProperty(n)&&pc[n]?(""+e).trim():e+"px"}function nS(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=tS(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var DT=qt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xp(n,e){if(e){if(DT[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(de(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(de(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(de(61))}if(e.style!=null&&typeof e.style!="object")throw Error(de(62))}}function Yp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qp=null;function n0(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var $p=null,Ja=null,el=null;function j_(n){if(n=mu(n)){if(typeof $p!="function")throw Error(de(280));var e=n.stateNode;e&&(e=Yd(e),$p(n.stateNode,n.type,e))}}function iS(n){Ja?el?el.push(n):el=[n]:Ja=n}function rS(){if(Ja){var n=Ja,e=el;if(el=Ja=null,j_(n),e)for(n=0;n<e.length;n++)j_(e[n])}}function sS(n,e){return n(e)}function oS(){}var _h=!1;function aS(n,e,t){if(_h)return n(e,t);_h=!0;try{return sS(n,e,t)}finally{_h=!1,(Ja!==null||el!==null)&&(oS(),rS())}}function Oc(n,e){var t=n.stateNode;if(t===null)return null;var i=Yd(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(de(231,e,typeof t));return t}var Kp=!1;if(ms)try{var Ol={};Object.defineProperty(Ol,"passive",{get:function(){Kp=!0}}),window.addEventListener("test",Ol,Ol),window.removeEventListener("test",Ol,Ol)}catch{Kp=!1}function LT(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var mc=!1,ed=null,td=!1,Zp=null,IT={onError:function(n){mc=!0,ed=n}};function UT(n,e,t,i,r,s,o,a,l){mc=!1,ed=null,LT.apply(IT,arguments)}function FT(n,e,t,i,r,s,o,a,l){if(UT.apply(this,arguments),mc){if(mc){var c=ed;mc=!1,ed=null}else throw Error(de(198));td||(td=!0,Zp=c)}}function ua(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function lS(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function X_(n){if(ua(n)!==n)throw Error(de(188))}function OT(n){var e=n.alternate;if(!e){if(e=ua(n),e===null)throw Error(de(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return X_(r),n;if(s===i)return X_(r),e;s=s.sibling}throw Error(de(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(de(189))}}if(t.alternate!==i)throw Error(de(190))}if(t.tag!==3)throw Error(de(188));return t.stateNode.current===t?n:e}function cS(n){return n=OT(n),n!==null?uS(n):null}function uS(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=uS(n);if(e!==null)return e;n=n.sibling}return null}var fS=Gi.unstable_scheduleCallback,Y_=Gi.unstable_cancelCallback,kT=Gi.unstable_shouldYield,BT=Gi.unstable_requestPaint,sn=Gi.unstable_now,zT=Gi.unstable_getCurrentPriorityLevel,i0=Gi.unstable_ImmediatePriority,dS=Gi.unstable_UserBlockingPriority,nd=Gi.unstable_NormalPriority,VT=Gi.unstable_LowPriority,hS=Gi.unstable_IdlePriority,Gd=null,Vr=null;function HT(n){if(Vr&&typeof Vr.onCommitFiberRoot=="function")try{Vr.onCommitFiberRoot(Gd,n,void 0,(n.current.flags&128)===128)}catch{}}var Sr=Math.clz32?Math.clz32:jT,GT=Math.log,WT=Math.LN2;function jT(n){return n>>>=0,n===0?32:31-(GT(n)/WT|0)|0}var Au=64,Cu=4194304;function nc(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function id(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=nc(a):(s&=o,s!==0&&(i=nc(s)))}else o=t&~r,o!==0?i=nc(o):s!==0&&(i=nc(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Sr(e),r=1<<t,i|=n[t],e&=~r;return i}function XT(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function YT(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Sr(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=XT(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Qp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function pS(){var n=Au;return Au<<=1,!(Au&4194240)&&(Au=64),n}function vh(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function hu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Sr(e),n[e]=t}function qT(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Sr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function r0(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Sr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var wt=0;function mS(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var gS,s0,_S,vS,xS,Jp=!1,bu=[],$s=null,Ks=null,Zs=null,kc=new Map,Bc=new Map,Os=[],$T="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function q_(n,e){switch(n){case"focusin":case"focusout":$s=null;break;case"dragenter":case"dragleave":Ks=null;break;case"mouseover":case"mouseout":Zs=null;break;case"pointerover":case"pointerout":kc.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bc.delete(e.pointerId)}}function kl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=mu(e),e!==null&&s0(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function KT(n,e,t,i,r){switch(e){case"focusin":return $s=kl($s,n,e,t,i,r),!0;case"dragenter":return Ks=kl(Ks,n,e,t,i,r),!0;case"mouseover":return Zs=kl(Zs,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return kc.set(s,kl(kc.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Bc.set(s,kl(Bc.get(s)||null,n,e,t,i,r)),!0}return!1}function yS(n){var e=Fo(n.target);if(e!==null){var t=ua(e);if(t!==null){if(e=t.tag,e===13){if(e=lS(t),e!==null){n.blockedOn=e,xS(n.priority,function(){_S(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Cf(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=em(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);qp=i,t.target.dispatchEvent(i),qp=null}else return e=mu(t),e!==null&&s0(e),n.blockedOn=t,!1;e.shift()}return!0}function $_(n,e,t){Cf(n)&&t.delete(e)}function ZT(){Jp=!1,$s!==null&&Cf($s)&&($s=null),Ks!==null&&Cf(Ks)&&(Ks=null),Zs!==null&&Cf(Zs)&&(Zs=null),kc.forEach($_),Bc.forEach($_)}function Bl(n,e){n.blockedOn===e&&(n.blockedOn=null,Jp||(Jp=!0,Gi.unstable_scheduleCallback(Gi.unstable_NormalPriority,ZT)))}function zc(n){function e(r){return Bl(r,n)}if(0<bu.length){Bl(bu[0],n);for(var t=1;t<bu.length;t++){var i=bu[t];i.blockedOn===n&&(i.blockedOn=null)}}for($s!==null&&Bl($s,n),Ks!==null&&Bl(Ks,n),Zs!==null&&Bl(Zs,n),kc.forEach(e),Bc.forEach(e),t=0;t<Os.length;t++)i=Os[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Os.length&&(t=Os[0],t.blockedOn===null);)yS(t),t.blockedOn===null&&Os.shift()}var tl=Es.ReactCurrentBatchConfig,rd=!0;function QT(n,e,t,i){var r=wt,s=tl.transition;tl.transition=null;try{wt=1,o0(n,e,t,i)}finally{wt=r,tl.transition=s}}function JT(n,e,t,i){var r=wt,s=tl.transition;tl.transition=null;try{wt=4,o0(n,e,t,i)}finally{wt=r,tl.transition=s}}function o0(n,e,t,i){if(rd){var r=em(n,e,t,i);if(r===null)bh(n,e,i,sd,t),q_(n,i);else if(KT(r,n,e,t,i))i.stopPropagation();else if(q_(n,i),e&4&&-1<$T.indexOf(n)){for(;r!==null;){var s=mu(r);if(s!==null&&gS(s),s=em(n,e,t,i),s===null&&bh(n,e,i,sd,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else bh(n,e,i,null,t)}}var sd=null;function em(n,e,t,i){if(sd=null,n=n0(i),n=Fo(n),n!==null)if(e=ua(n),e===null)n=null;else if(t=e.tag,t===13){if(n=lS(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return sd=n,null}function SS(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zT()){case i0:return 1;case dS:return 4;case nd:case VT:return 16;case hS:return 536870912;default:return 16}default:return 16}}var zs=null,a0=null,bf=null;function MS(){if(bf)return bf;var n,e=a0,t=e.length,i,r="value"in zs?zs.value:zs.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return bf=r.slice(n,1<i?1-i:void 0)}function Rf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ru(){return!0}function K_(){return!1}function Yi(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ru:K_,this.isPropagationStopped=K_,this}return qt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ru)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ru)},persist:function(){},isPersistent:Ru}),e}var Nl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},l0=Yi(Nl),pu=qt({},Nl,{view:0,detail:0}),ew=Yi(pu),xh,yh,zl,Wd=qt({},pu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:c0,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==zl&&(zl&&n.type==="mousemove"?(xh=n.screenX-zl.screenX,yh=n.screenY-zl.screenY):yh=xh=0,zl=n),xh)},movementY:function(n){return"movementY"in n?n.movementY:yh}}),Z_=Yi(Wd),tw=qt({},Wd,{dataTransfer:0}),nw=Yi(tw),iw=qt({},pu,{relatedTarget:0}),Sh=Yi(iw),rw=qt({},Nl,{animationName:0,elapsedTime:0,pseudoElement:0}),sw=Yi(rw),ow=qt({},Nl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),aw=Yi(ow),lw=qt({},Nl,{data:0}),Q_=Yi(lw),cw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dw(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=fw[n])?!!e[n]:!1}function c0(){return dw}var hw=qt({},pu,{key:function(n){if(n.key){var e=cw[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Rf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?uw[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:c0,charCode:function(n){return n.type==="keypress"?Rf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Rf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),pw=Yi(hw),mw=qt({},Wd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),J_=Yi(mw),gw=qt({},pu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:c0}),_w=Yi(gw),vw=qt({},Nl,{propertyName:0,elapsedTime:0,pseudoElement:0}),xw=Yi(vw),yw=qt({},Wd,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Sw=Yi(yw),Mw=[9,13,27,32],u0=ms&&"CompositionEvent"in window,gc=null;ms&&"documentMode"in document&&(gc=document.documentMode);var Ew=ms&&"TextEvent"in window&&!gc,ES=ms&&(!u0||gc&&8<gc&&11>=gc),ev=" ",tv=!1;function TS(n,e){switch(n){case"keyup":return Mw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wS(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ba=!1;function Tw(n,e){switch(n){case"compositionend":return wS(e);case"keypress":return e.which!==32?null:(tv=!0,ev);case"textInput":return n=e.data,n===ev&&tv?null:n;default:return null}}function ww(n,e){if(Ba)return n==="compositionend"||!u0&&TS(n,e)?(n=MS(),bf=a0=zs=null,Ba=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ES&&e.locale!=="ko"?null:e.data;default:return null}}var Aw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nv(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Aw[n.type]:e==="textarea"}function AS(n,e,t,i){iS(i),e=od(e,"onChange"),0<e.length&&(t=new l0("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var _c=null,Vc=null;function Cw(n){OS(n,0)}function jd(n){var e=Ha(n);if(Ky(e))return n}function bw(n,e){if(n==="change")return e}var CS=!1;if(ms){var Mh;if(ms){var Eh="oninput"in document;if(!Eh){var iv=document.createElement("div");iv.setAttribute("oninput","return;"),Eh=typeof iv.oninput=="function"}Mh=Eh}else Mh=!1;CS=Mh&&(!document.documentMode||9<document.documentMode)}function rv(){_c&&(_c.detachEvent("onpropertychange",bS),Vc=_c=null)}function bS(n){if(n.propertyName==="value"&&jd(Vc)){var e=[];AS(e,Vc,n,n0(n)),aS(Cw,e)}}function Rw(n,e,t){n==="focusin"?(rv(),_c=e,Vc=t,_c.attachEvent("onpropertychange",bS)):n==="focusout"&&rv()}function Pw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return jd(Vc)}function Nw(n,e){if(n==="click")return jd(e)}function Dw(n,e){if(n==="input"||n==="change")return jd(e)}function Lw(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Tr=typeof Object.is=="function"?Object.is:Lw;function Hc(n,e){if(Tr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Fp.call(e,r)||!Tr(n[r],e[r]))return!1}return!0}function sv(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ov(n,e){var t=sv(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=sv(t)}}function RS(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?RS(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function PS(){for(var n=window,e=Jf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Jf(n.document)}return e}function f0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Iw(n){var e=PS(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&RS(t.ownerDocument.documentElement,t)){if(i!==null&&f0(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=ov(t,s);var o=ov(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Uw=ms&&"documentMode"in document&&11>=document.documentMode,za=null,tm=null,vc=null,nm=!1;function av(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;nm||za==null||za!==Jf(i)||(i=za,"selectionStart"in i&&f0(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),vc&&Hc(vc,i)||(vc=i,i=od(tm,"onSelect"),0<i.length&&(e=new l0("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=za)))}function Pu(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Va={animationend:Pu("Animation","AnimationEnd"),animationiteration:Pu("Animation","AnimationIteration"),animationstart:Pu("Animation","AnimationStart"),transitionend:Pu("Transition","TransitionEnd")},Th={},NS={};ms&&(NS=document.createElement("div").style,"AnimationEvent"in window||(delete Va.animationend.animation,delete Va.animationiteration.animation,delete Va.animationstart.animation),"TransitionEvent"in window||delete Va.transitionend.transition);function Xd(n){if(Th[n])return Th[n];if(!Va[n])return n;var e=Va[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in NS)return Th[n]=e[t];return n}var DS=Xd("animationend"),LS=Xd("animationiteration"),IS=Xd("animationstart"),US=Xd("transitionend"),FS=new Map,lv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mo(n,e){FS.set(n,e),ca(e,[n])}for(var wh=0;wh<lv.length;wh++){var Ah=lv[wh],Fw=Ah.toLowerCase(),Ow=Ah[0].toUpperCase()+Ah.slice(1);mo(Fw,"on"+Ow)}mo(DS,"onAnimationEnd");mo(LS,"onAnimationIteration");mo(IS,"onAnimationStart");mo("dblclick","onDoubleClick");mo("focusin","onFocus");mo("focusout","onBlur");mo(US,"onTransitionEnd");hl("onMouseEnter",["mouseout","mouseover"]);hl("onMouseLeave",["mouseout","mouseover"]);hl("onPointerEnter",["pointerout","pointerover"]);hl("onPointerLeave",["pointerout","pointerover"]);ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ca("onBeforeInput",["compositionend","keypress","textInput","paste"]);ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ic="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ic));function cv(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,FT(i,e,void 0,n),n.currentTarget=null}function OS(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;cv(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;cv(r,a,c),s=l}}}if(td)throw n=Zp,td=!1,Zp=null,n}function Ft(n,e){var t=e[am];t===void 0&&(t=e[am]=new Set);var i=n+"__bubble";t.has(i)||(kS(e,n,2,!1),t.add(i))}function Ch(n,e,t){var i=0;e&&(i|=4),kS(t,n,i,e)}var Nu="_reactListening"+Math.random().toString(36).slice(2);function Gc(n){if(!n[Nu]){n[Nu]=!0,jy.forEach(function(t){t!=="selectionchange"&&(kw.has(t)||Ch(t,!1,n),Ch(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Nu]||(e[Nu]=!0,Ch("selectionchange",!1,e))}}function kS(n,e,t,i){switch(SS(e)){case 1:var r=QT;break;case 4:r=JT;break;default:r=o0}t=r.bind(null,e,t,n),r=void 0,!Kp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function bh(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Fo(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}aS(function(){var c=s,u=n0(t),h=[];e:{var f=FS.get(n);if(f!==void 0){var d=l0,m=n;switch(n){case"keypress":if(Rf(t)===0)break e;case"keydown":case"keyup":d=pw;break;case"focusin":m="focus",d=Sh;break;case"focusout":m="blur",d=Sh;break;case"beforeblur":case"afterblur":d=Sh;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Z_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=nw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=_w;break;case DS:case LS:case IS:d=sw;break;case US:d=xw;break;case"scroll":d=ew;break;case"wheel":d=Sw;break;case"copy":case"cut":case"paste":d=aw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=J_}var v=(e&4)!==0,_=!v&&n==="scroll",p=v?f!==null?f+"Capture":null:f;v=[];for(var g=c,y;g!==null;){y=g;var M=y.stateNode;if(y.tag===5&&M!==null&&(y=M,p!==null&&(M=Oc(g,p),M!=null&&v.push(Wc(g,M,y)))),_)break;g=g.return}0<v.length&&(f=new d(f,m,null,t,u),h.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",d=n==="mouseout"||n==="pointerout",f&&t!==qp&&(m=t.relatedTarget||t.fromElement)&&(Fo(m)||m[gs]))break e;if((d||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,d?(m=t.relatedTarget||t.toElement,d=c,m=m?Fo(m):null,m!==null&&(_=ua(m),m!==_||m.tag!==5&&m.tag!==6)&&(m=null)):(d=null,m=c),d!==m)){if(v=Z_,M="onMouseLeave",p="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(v=J_,M="onPointerLeave",p="onPointerEnter",g="pointer"),_=d==null?f:Ha(d),y=m==null?f:Ha(m),f=new v(M,g+"leave",d,t,u),f.target=_,f.relatedTarget=y,M=null,Fo(u)===c&&(v=new v(p,g+"enter",m,t,u),v.target=y,v.relatedTarget=_,M=v),_=M,d&&m)t:{for(v=d,p=m,g=0,y=v;y;y=ga(y))g++;for(y=0,M=p;M;M=ga(M))y++;for(;0<g-y;)v=ga(v),g--;for(;0<y-g;)p=ga(p),y--;for(;g--;){if(v===p||p!==null&&v===p.alternate)break t;v=ga(v),p=ga(p)}v=null}else v=null;d!==null&&uv(h,f,d,v,!1),m!==null&&_!==null&&uv(h,_,m,v,!0)}}e:{if(f=c?Ha(c):window,d=f.nodeName&&f.nodeName.toLowerCase(),d==="select"||d==="input"&&f.type==="file")var A=bw;else if(nv(f))if(CS)A=Dw;else{A=Pw;var T=Rw}else(d=f.nodeName)&&d.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(A=Nw);if(A&&(A=A(n,c))){AS(h,A,t,u);break e}T&&T(n,f,c),n==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Gp(f,"number",f.value)}switch(T=c?Ha(c):window,n){case"focusin":(nv(T)||T.contentEditable==="true")&&(za=T,tm=c,vc=null);break;case"focusout":vc=tm=za=null;break;case"mousedown":nm=!0;break;case"contextmenu":case"mouseup":case"dragend":nm=!1,av(h,t,u);break;case"selectionchange":if(Uw)break;case"keydown":case"keyup":av(h,t,u)}var w;if(u0)e:{switch(n){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Ba?TS(n,t)&&(S="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(ES&&t.locale!=="ko"&&(Ba||S!=="onCompositionStart"?S==="onCompositionEnd"&&Ba&&(w=MS()):(zs=u,a0="value"in zs?zs.value:zs.textContent,Ba=!0)),T=od(c,S),0<T.length&&(S=new Q_(S,n,null,t,u),h.push({event:S,listeners:T}),w?S.data=w:(w=wS(t),w!==null&&(S.data=w)))),(w=Ew?Tw(n,t):ww(n,t))&&(c=od(c,"onBeforeInput"),0<c.length&&(u=new Q_("onBeforeInput","beforeinput",null,t,u),h.push({event:u,listeners:c}),u.data=w))}OS(h,e)})}function Wc(n,e,t){return{instance:n,listener:e,currentTarget:t}}function od(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Oc(n,t),s!=null&&i.unshift(Wc(n,s,r)),s=Oc(n,e),s!=null&&i.push(Wc(n,s,r))),n=n.return}return i}function ga(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function uv(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Oc(t,s),l!=null&&o.unshift(Wc(t,l,a))):r||(l=Oc(t,s),l!=null&&o.push(Wc(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Bw=/\r\n?/g,zw=/\u0000|\uFFFD/g;function fv(n){return(typeof n=="string"?n:""+n).replace(Bw,`
`).replace(zw,"")}function Du(n,e,t){if(e=fv(e),fv(n)!==e&&t)throw Error(de(425))}function ad(){}var im=null,rm=null;function sm(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var om=typeof setTimeout=="function"?setTimeout:void 0,Vw=typeof clearTimeout=="function"?clearTimeout:void 0,dv=typeof Promise=="function"?Promise:void 0,Hw=typeof queueMicrotask=="function"?queueMicrotask:typeof dv<"u"?function(n){return dv.resolve(null).then(n).catch(Gw)}:om;function Gw(n){setTimeout(function(){throw n})}function Rh(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),zc(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);zc(e)}function Qs(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function hv(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Dl=Math.random().toString(36).slice(2),Ur="__reactFiber$"+Dl,jc="__reactProps$"+Dl,gs="__reactContainer$"+Dl,am="__reactEvents$"+Dl,Ww="__reactListeners$"+Dl,jw="__reactHandles$"+Dl;function Fo(n){var e=n[Ur];if(e)return e;for(var t=n.parentNode;t;){if(e=t[gs]||t[Ur]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=hv(n);n!==null;){if(t=n[Ur])return t;n=hv(n)}return e}n=t,t=n.parentNode}return null}function mu(n){return n=n[Ur]||n[gs],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ha(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(de(33))}function Yd(n){return n[jc]||null}var lm=[],Ga=-1;function go(n){return{current:n}}function Ot(n){0>Ga||(n.current=lm[Ga],lm[Ga]=null,Ga--)}function Ut(n,e){Ga++,lm[Ga]=n.current,n.current=e}var ao={},Kn=go(ao),gi=go(!1),Jo=ao;function pl(n,e){var t=n.type.contextTypes;if(!t)return ao;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function _i(n){return n=n.childContextTypes,n!=null}function ld(){Ot(gi),Ot(Kn)}function pv(n,e,t){if(Kn.current!==ao)throw Error(de(168));Ut(Kn,e),Ut(gi,t)}function BS(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(de(108,RT(n)||"Unknown",r));return qt({},t,i)}function cd(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ao,Jo=Kn.current,Ut(Kn,n),Ut(gi,gi.current),!0}function mv(n,e,t){var i=n.stateNode;if(!i)throw Error(de(169));t?(n=BS(n,e,Jo),i.__reactInternalMemoizedMergedChildContext=n,Ot(gi),Ot(Kn),Ut(Kn,n)):Ot(gi),Ut(gi,t)}var is=null,qd=!1,Ph=!1;function zS(n){is===null?is=[n]:is.push(n)}function Xw(n){qd=!0,zS(n)}function _o(){if(!Ph&&is!==null){Ph=!0;var n=0,e=wt;try{var t=is;for(wt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}is=null,qd=!1}catch(r){throw is!==null&&(is=is.slice(n+1)),fS(i0,_o),r}finally{wt=e,Ph=!1}}return null}var Wa=[],ja=0,ud=null,fd=0,er=[],tr=0,ea=null,as=1,ls="";function bo(n,e){Wa[ja++]=fd,Wa[ja++]=ud,ud=n,fd=e}function VS(n,e,t){er[tr++]=as,er[tr++]=ls,er[tr++]=ea,ea=n;var i=as;n=ls;var r=32-Sr(i)-1;i&=~(1<<r),t+=1;var s=32-Sr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,as=1<<32-Sr(e)+r|t<<r|i,ls=s+n}else as=1<<s|t<<r|i,ls=n}function d0(n){n.return!==null&&(bo(n,1),VS(n,1,0))}function h0(n){for(;n===ud;)ud=Wa[--ja],Wa[ja]=null,fd=Wa[--ja],Wa[ja]=null;for(;n===ea;)ea=er[--tr],er[tr]=null,ls=er[--tr],er[tr]=null,as=er[--tr],er[tr]=null}var Vi=null,ki=null,zt=!1,vr=null;function HS(n,e){var t=rr(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function gv(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Vi=n,ki=Qs(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Vi=n,ki=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ea!==null?{id:as,overflow:ls}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=rr(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Vi=n,ki=null,!0):!1;default:return!1}}function cm(n){return(n.mode&1)!==0&&(n.flags&128)===0}function um(n){if(zt){var e=ki;if(e){var t=e;if(!gv(n,e)){if(cm(n))throw Error(de(418));e=Qs(t.nextSibling);var i=Vi;e&&gv(n,e)?HS(i,t):(n.flags=n.flags&-4097|2,zt=!1,Vi=n)}}else{if(cm(n))throw Error(de(418));n.flags=n.flags&-4097|2,zt=!1,Vi=n}}}function _v(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Vi=n}function Lu(n){if(n!==Vi)return!1;if(!zt)return _v(n),zt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!sm(n.type,n.memoizedProps)),e&&(e=ki)){if(cm(n))throw GS(),Error(de(418));for(;e;)HS(n,e),e=Qs(e.nextSibling)}if(_v(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(de(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){ki=Qs(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}ki=null}}else ki=Vi?Qs(n.stateNode.nextSibling):null;return!0}function GS(){for(var n=ki;n;)n=Qs(n.nextSibling)}function ml(){ki=Vi=null,zt=!1}function p0(n){vr===null?vr=[n]:vr.push(n)}var Yw=Es.ReactCurrentBatchConfig;function Vl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(de(309));var i=t.stateNode}if(!i)throw Error(de(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(de(284));if(!t._owner)throw Error(de(290,n))}return n}function Iu(n,e){throw n=Object.prototype.toString.call(e),Error(de(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function vv(n){var e=n._init;return e(n._payload)}function WS(n){function e(p,g){if(n){var y=p.deletions;y===null?(p.deletions=[g],p.flags|=16):y.push(g)}}function t(p,g){if(!n)return null;for(;g!==null;)e(p,g),g=g.sibling;return null}function i(p,g){for(p=new Map;g!==null;)g.key!==null?p.set(g.key,g):p.set(g.index,g),g=g.sibling;return p}function r(p,g){return p=no(p,g),p.index=0,p.sibling=null,p}function s(p,g,y){return p.index=y,n?(y=p.alternate,y!==null?(y=y.index,y<g?(p.flags|=2,g):y):(p.flags|=2,g)):(p.flags|=1048576,g)}function o(p){return n&&p.alternate===null&&(p.flags|=2),p}function a(p,g,y,M){return g===null||g.tag!==6?(g=Oh(y,p.mode,M),g.return=p,g):(g=r(g,y),g.return=p,g)}function l(p,g,y,M){var A=y.type;return A===ka?u(p,g,y.props.children,M,y.key):g!==null&&(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Us&&vv(A)===g.type)?(M=r(g,y.props),M.ref=Vl(p,g,y),M.return=p,M):(M=Ff(y.type,y.key,y.props,null,p.mode,M),M.ref=Vl(p,g,y),M.return=p,M)}function c(p,g,y,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=kh(y,p.mode,M),g.return=p,g):(g=r(g,y.children||[]),g.return=p,g)}function u(p,g,y,M,A){return g===null||g.tag!==7?(g=jo(y,p.mode,M,A),g.return=p,g):(g=r(g,y),g.return=p,g)}function h(p,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Oh(""+g,p.mode,y),g.return=p,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Eu:return y=Ff(g.type,g.key,g.props,null,p.mode,y),y.ref=Vl(p,null,g),y.return=p,y;case Oa:return g=kh(g,p.mode,y),g.return=p,g;case Us:var M=g._init;return h(p,M(g._payload),y)}if(tc(g)||Fl(g))return g=jo(g,p.mode,y,null),g.return=p,g;Iu(p,g)}return null}function f(p,g,y,M){var A=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return A!==null?null:a(p,g,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Eu:return y.key===A?l(p,g,y,M):null;case Oa:return y.key===A?c(p,g,y,M):null;case Us:return A=y._init,f(p,g,A(y._payload),M)}if(tc(y)||Fl(y))return A!==null?null:u(p,g,y,M,null);Iu(p,y)}return null}function d(p,g,y,M,A){if(typeof M=="string"&&M!==""||typeof M=="number")return p=p.get(y)||null,a(g,p,""+M,A);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Eu:return p=p.get(M.key===null?y:M.key)||null,l(g,p,M,A);case Oa:return p=p.get(M.key===null?y:M.key)||null,c(g,p,M,A);case Us:var T=M._init;return d(p,g,y,T(M._payload),A)}if(tc(M)||Fl(M))return p=p.get(y)||null,u(g,p,M,A,null);Iu(g,M)}return null}function m(p,g,y,M){for(var A=null,T=null,w=g,S=g=0,C=null;w!==null&&S<y.length;S++){w.index>S?(C=w,w=null):C=w.sibling;var R=f(p,w,y[S],M);if(R===null){w===null&&(w=C);break}n&&w&&R.alternate===null&&e(p,w),g=s(R,g,S),T===null?A=R:T.sibling=R,T=R,w=C}if(S===y.length)return t(p,w),zt&&bo(p,S),A;if(w===null){for(;S<y.length;S++)w=h(p,y[S],M),w!==null&&(g=s(w,g,S),T===null?A=w:T.sibling=w,T=w);return zt&&bo(p,S),A}for(w=i(p,w);S<y.length;S++)C=d(w,p,S,y[S],M),C!==null&&(n&&C.alternate!==null&&w.delete(C.key===null?S:C.key),g=s(C,g,S),T===null?A=C:T.sibling=C,T=C);return n&&w.forEach(function(D){return e(p,D)}),zt&&bo(p,S),A}function v(p,g,y,M){var A=Fl(y);if(typeof A!="function")throw Error(de(150));if(y=A.call(y),y==null)throw Error(de(151));for(var T=A=null,w=g,S=g=0,C=null,R=y.next();w!==null&&!R.done;S++,R=y.next()){w.index>S?(C=w,w=null):C=w.sibling;var D=f(p,w,R.value,M);if(D===null){w===null&&(w=C);break}n&&w&&D.alternate===null&&e(p,w),g=s(D,g,S),T===null?A=D:T.sibling=D,T=D,w=C}if(R.done)return t(p,w),zt&&bo(p,S),A;if(w===null){for(;!R.done;S++,R=y.next())R=h(p,R.value,M),R!==null&&(g=s(R,g,S),T===null?A=R:T.sibling=R,T=R);return zt&&bo(p,S),A}for(w=i(p,w);!R.done;S++,R=y.next())R=d(w,p,S,R.value,M),R!==null&&(n&&R.alternate!==null&&w.delete(R.key===null?S:R.key),g=s(R,g,S),T===null?A=R:T.sibling=R,T=R);return n&&w.forEach(function(L){return e(p,L)}),zt&&bo(p,S),A}function _(p,g,y,M){if(typeof y=="object"&&y!==null&&y.type===ka&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Eu:e:{for(var A=y.key,T=g;T!==null;){if(T.key===A){if(A=y.type,A===ka){if(T.tag===7){t(p,T.sibling),g=r(T,y.props.children),g.return=p,p=g;break e}}else if(T.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Us&&vv(A)===T.type){t(p,T.sibling),g=r(T,y.props),g.ref=Vl(p,T,y),g.return=p,p=g;break e}t(p,T);break}else e(p,T);T=T.sibling}y.type===ka?(g=jo(y.props.children,p.mode,M,y.key),g.return=p,p=g):(M=Ff(y.type,y.key,y.props,null,p.mode,M),M.ref=Vl(p,g,y),M.return=p,p=M)}return o(p);case Oa:e:{for(T=y.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){t(p,g.sibling),g=r(g,y.children||[]),g.return=p,p=g;break e}else{t(p,g);break}else e(p,g);g=g.sibling}g=kh(y,p.mode,M),g.return=p,p=g}return o(p);case Us:return T=y._init,_(p,g,T(y._payload),M)}if(tc(y))return m(p,g,y,M);if(Fl(y))return v(p,g,y,M);Iu(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(t(p,g.sibling),g=r(g,y),g.return=p,p=g):(t(p,g),g=Oh(y,p.mode,M),g.return=p,p=g),o(p)):t(p,g)}return _}var gl=WS(!0),jS=WS(!1),dd=go(null),hd=null,Xa=null,m0=null;function g0(){m0=Xa=hd=null}function _0(n){var e=dd.current;Ot(dd),n._currentValue=e}function fm(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function nl(n,e){hd=n,m0=Xa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(mi=!0),n.firstContext=null)}function cr(n){var e=n._currentValue;if(m0!==n)if(n={context:n,memoizedValue:e,next:null},Xa===null){if(hd===null)throw Error(de(308));Xa=n,hd.dependencies={lanes:0,firstContext:n}}else Xa=Xa.next=n;return e}var Oo=null;function v0(n){Oo===null?Oo=[n]:Oo.push(n)}function XS(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,v0(e)):(t.next=r.next,r.next=t),e.interleaved=t,_s(n,i)}function _s(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Fs=!1;function x0(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function YS(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function fs(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Js(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,yt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,_s(n,t)}return r=i.interleaved,r===null?(e.next=e,v0(i)):(e.next=r.next,r.next=e),i.interleaved=e,_s(n,t)}function Pf(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,r0(n,t)}}function xv(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function pd(n,e,t,i){var r=n.updateQueue;Fs=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,d=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:d,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=n,v=a;switch(f=e,d=t,v.tag){case 1:if(m=v.payload,typeof m=="function"){h=m.call(d,h,f);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,f=typeof m=="function"?m.call(d,h,f):m,f==null)break e;h=qt({},h,f);break e;case 2:Fs=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else d={eventTime:d,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=d,l=h):u=u.next=d,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);na|=o,n.lanes=o,n.memoizedState=h}}function yv(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(de(191,r));r.call(i)}}}var gu={},Hr=go(gu),Xc=go(gu),Yc=go(gu);function ko(n){if(n===gu)throw Error(de(174));return n}function y0(n,e){switch(Ut(Yc,e),Ut(Xc,n),Ut(Hr,gu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=jp(e,n)}Ot(Hr),Ut(Hr,e)}function _l(){Ot(Hr),Ot(Xc),Ot(Yc)}function qS(n){ko(Yc.current);var e=ko(Hr.current),t=jp(e,n.type);e!==t&&(Ut(Xc,n),Ut(Hr,t))}function S0(n){Xc.current===n&&(Ot(Hr),Ot(Xc))}var Wt=go(0);function md(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nh=[];function M0(){for(var n=0;n<Nh.length;n++)Nh[n]._workInProgressVersionPrimary=null;Nh.length=0}var Nf=Es.ReactCurrentDispatcher,Dh=Es.ReactCurrentBatchConfig,ta=0,Yt=null,gn=null,Cn=null,gd=!1,xc=!1,qc=0,qw=0;function Bn(){throw Error(de(321))}function E0(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Tr(n[t],e[t]))return!1;return!0}function T0(n,e,t,i,r,s){if(ta=s,Yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Nf.current=n===null||n.memoizedState===null?Qw:Jw,n=t(i,r),xc){s=0;do{if(xc=!1,qc=0,25<=s)throw Error(de(301));s+=1,Cn=gn=null,e.updateQueue=null,Nf.current=eA,n=t(i,r)}while(xc)}if(Nf.current=_d,e=gn!==null&&gn.next!==null,ta=0,Cn=gn=Yt=null,gd=!1,e)throw Error(de(300));return n}function w0(){var n=qc!==0;return qc=0,n}function Nr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?Yt.memoizedState=Cn=n:Cn=Cn.next=n,Cn}function ur(){if(gn===null){var n=Yt.alternate;n=n!==null?n.memoizedState:null}else n=gn.next;var e=Cn===null?Yt.memoizedState:Cn.next;if(e!==null)Cn=e,gn=n;else{if(n===null)throw Error(de(310));gn=n,n={memoizedState:gn.memoizedState,baseState:gn.baseState,baseQueue:gn.baseQueue,queue:gn.queue,next:null},Cn===null?Yt.memoizedState=Cn=n:Cn=Cn.next=n}return Cn}function $c(n,e){return typeof e=="function"?e(n):e}function Lh(n){var e=ur(),t=e.queue;if(t===null)throw Error(de(311));t.lastRenderedReducer=n;var i=gn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((ta&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Yt.lanes|=u,na|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Tr(i,e.memoizedState)||(mi=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Yt.lanes|=s,na|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Ih(n){var e=ur(),t=e.queue;if(t===null)throw Error(de(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Tr(s,e.memoizedState)||(mi=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function $S(){}function KS(n,e){var t=Yt,i=ur(),r=e(),s=!Tr(i.memoizedState,r);if(s&&(i.memoizedState=r,mi=!0),i=i.queue,A0(JS.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Cn!==null&&Cn.memoizedState.tag&1){if(t.flags|=2048,Kc(9,QS.bind(null,t,i,r,e),void 0,null),bn===null)throw Error(de(349));ta&30||ZS(t,e,r)}return r}function ZS(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Yt.updateQueue,e===null?(e={lastEffect:null,stores:null},Yt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function QS(n,e,t,i){e.value=t,e.getSnapshot=i,e1(e)&&t1(n)}function JS(n,e,t){return t(function(){e1(e)&&t1(n)})}function e1(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Tr(n,t)}catch{return!0}}function t1(n){var e=_s(n,1);e!==null&&Mr(e,n,1,-1)}function Sv(n){var e=Nr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$c,lastRenderedState:n},e.queue=n,n=n.dispatch=Zw.bind(null,Yt,n),[e.memoizedState,n]}function Kc(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Yt.updateQueue,e===null?(e={lastEffect:null,stores:null},Yt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function n1(){return ur().memoizedState}function Df(n,e,t,i){var r=Nr();Yt.flags|=n,r.memoizedState=Kc(1|e,t,void 0,i===void 0?null:i)}function $d(n,e,t,i){var r=ur();i=i===void 0?null:i;var s=void 0;if(gn!==null){var o=gn.memoizedState;if(s=o.destroy,i!==null&&E0(i,o.deps)){r.memoizedState=Kc(e,t,s,i);return}}Yt.flags|=n,r.memoizedState=Kc(1|e,t,s,i)}function Mv(n,e){return Df(8390656,8,n,e)}function A0(n,e){return $d(2048,8,n,e)}function i1(n,e){return $d(4,2,n,e)}function r1(n,e){return $d(4,4,n,e)}function s1(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function o1(n,e,t){return t=t!=null?t.concat([n]):null,$d(4,4,s1.bind(null,e,n),t)}function C0(){}function a1(n,e){var t=ur();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&E0(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function l1(n,e){var t=ur();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&E0(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function c1(n,e,t){return ta&21?(Tr(t,e)||(t=pS(),Yt.lanes|=t,na|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,mi=!0),n.memoizedState=t)}function $w(n,e){var t=wt;wt=t!==0&&4>t?t:4,n(!0);var i=Dh.transition;Dh.transition={};try{n(!1),e()}finally{wt=t,Dh.transition=i}}function u1(){return ur().memoizedState}function Kw(n,e,t){var i=to(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},f1(n))d1(e,t);else if(t=XS(n,e,t,i),t!==null){var r=oi();Mr(t,n,i,r),h1(t,e,i)}}function Zw(n,e,t){var i=to(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(f1(n))d1(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Tr(a,o)){var l=e.interleaved;l===null?(r.next=r,v0(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=XS(n,e,r,i),t!==null&&(r=oi(),Mr(t,n,i,r),h1(t,e,i))}}function f1(n){var e=n.alternate;return n===Yt||e!==null&&e===Yt}function d1(n,e){xc=gd=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function h1(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,r0(n,t)}}var _d={readContext:cr,useCallback:Bn,useContext:Bn,useEffect:Bn,useImperativeHandle:Bn,useInsertionEffect:Bn,useLayoutEffect:Bn,useMemo:Bn,useReducer:Bn,useRef:Bn,useState:Bn,useDebugValue:Bn,useDeferredValue:Bn,useTransition:Bn,useMutableSource:Bn,useSyncExternalStore:Bn,useId:Bn,unstable_isNewReconciler:!1},Qw={readContext:cr,useCallback:function(n,e){return Nr().memoizedState=[n,e===void 0?null:e],n},useContext:cr,useEffect:Mv,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Df(4194308,4,s1.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Df(4194308,4,n,e)},useInsertionEffect:function(n,e){return Df(4,2,n,e)},useMemo:function(n,e){var t=Nr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Nr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Kw.bind(null,Yt,n),[i.memoizedState,n]},useRef:function(n){var e=Nr();return n={current:n},e.memoizedState=n},useState:Sv,useDebugValue:C0,useDeferredValue:function(n){return Nr().memoizedState=n},useTransition:function(){var n=Sv(!1),e=n[0];return n=$w.bind(null,n[1]),Nr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Yt,r=Nr();if(zt){if(t===void 0)throw Error(de(407));t=t()}else{if(t=e(),bn===null)throw Error(de(349));ta&30||ZS(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Mv(JS.bind(null,i,s,n),[n]),i.flags|=2048,Kc(9,QS.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Nr(),e=bn.identifierPrefix;if(zt){var t=ls,i=as;t=(i&~(1<<32-Sr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=qc++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=qw++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Jw={readContext:cr,useCallback:a1,useContext:cr,useEffect:A0,useImperativeHandle:o1,useInsertionEffect:i1,useLayoutEffect:r1,useMemo:l1,useReducer:Lh,useRef:n1,useState:function(){return Lh($c)},useDebugValue:C0,useDeferredValue:function(n){var e=ur();return c1(e,gn.memoizedState,n)},useTransition:function(){var n=Lh($c)[0],e=ur().memoizedState;return[n,e]},useMutableSource:$S,useSyncExternalStore:KS,useId:u1,unstable_isNewReconciler:!1},eA={readContext:cr,useCallback:a1,useContext:cr,useEffect:A0,useImperativeHandle:o1,useInsertionEffect:i1,useLayoutEffect:r1,useMemo:l1,useReducer:Ih,useRef:n1,useState:function(){return Ih($c)},useDebugValue:C0,useDeferredValue:function(n){var e=ur();return gn===null?e.memoizedState=n:c1(e,gn.memoizedState,n)},useTransition:function(){var n=Ih($c)[0],e=ur().memoizedState;return[n,e]},useMutableSource:$S,useSyncExternalStore:KS,useId:u1,unstable_isNewReconciler:!1};function gr(n,e){if(n&&n.defaultProps){e=qt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function dm(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:qt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Kd={isMounted:function(n){return(n=n._reactInternals)?ua(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=oi(),r=to(n),s=fs(i,r);s.payload=e,t!=null&&(s.callback=t),e=Js(n,s,r),e!==null&&(Mr(e,n,r,i),Pf(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=oi(),r=to(n),s=fs(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Js(n,s,r),e!==null&&(Mr(e,n,r,i),Pf(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=oi(),i=to(n),r=fs(t,i);r.tag=2,e!=null&&(r.callback=e),e=Js(n,r,i),e!==null&&(Mr(e,n,i,t),Pf(e,n,i))}};function Ev(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Hc(t,i)||!Hc(r,s):!0}function p1(n,e,t){var i=!1,r=ao,s=e.contextType;return typeof s=="object"&&s!==null?s=cr(s):(r=_i(e)?Jo:Kn.current,i=e.contextTypes,s=(i=i!=null)?pl(n,r):ao),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Kd,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Tv(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Kd.enqueueReplaceState(e,e.state,null)}function hm(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},x0(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=cr(s):(s=_i(e)?Jo:Kn.current,r.context=pl(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(dm(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Kd.enqueueReplaceState(r,r.state,null),pd(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function vl(n,e){try{var t="",i=e;do t+=bT(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Uh(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function pm(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var tA=typeof WeakMap=="function"?WeakMap:Map;function m1(n,e,t){t=fs(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){xd||(xd=!0,Tm=i),pm(n,e)},t}function g1(n,e,t){t=fs(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){pm(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){pm(n,e),typeof i!="function"&&(eo===null?eo=new Set([this]):eo.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function wv(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new tA;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=mA.bind(null,n,e,t),e.then(n,n))}function Av(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Cv(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=fs(-1,1),e.tag=2,Js(t,e,1))),t.lanes|=1),n)}var nA=Es.ReactCurrentOwner,mi=!1;function ti(n,e,t,i){e.child=n===null?jS(e,null,t,i):gl(e,n.child,t,i)}function bv(n,e,t,i,r){t=t.render;var s=e.ref;return nl(e,r),i=T0(n,e,t,i,s,r),t=w0(),n!==null&&!mi?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,vs(n,e,r)):(zt&&t&&d0(e),e.flags|=1,ti(n,e,i,r),e.child)}function Rv(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!U0(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,_1(n,e,s,i,r)):(n=Ff(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Hc,t(o,i)&&n.ref===e.ref)return vs(n,e,r)}return e.flags|=1,n=no(s,i),n.ref=e.ref,n.return=e,e.child=n}function _1(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Hc(s,i)&&n.ref===e.ref)if(mi=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(mi=!0);else return e.lanes=n.lanes,vs(n,e,r)}return mm(n,e,t,i,r)}function v1(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(qa,Pi),Pi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Ut(qa,Pi),Pi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Ut(qa,Pi),Pi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Ut(qa,Pi),Pi|=i;return ti(n,e,r,t),e.child}function x1(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function mm(n,e,t,i,r){var s=_i(t)?Jo:Kn.current;return s=pl(e,s),nl(e,r),t=T0(n,e,t,i,s,r),i=w0(),n!==null&&!mi?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,vs(n,e,r)):(zt&&i&&d0(e),e.flags|=1,ti(n,e,t,r),e.child)}function Pv(n,e,t,i,r){if(_i(t)){var s=!0;cd(e)}else s=!1;if(nl(e,r),e.stateNode===null)Lf(n,e),p1(e,t,i),hm(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=cr(c):(c=_i(t)?Jo:Kn.current,c=pl(e,c));var u=t.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Tv(e,o,i,c),Fs=!1;var f=e.memoizedState;o.state=f,pd(e,i,o,r),l=e.memoizedState,a!==i||f!==l||gi.current||Fs?(typeof u=="function"&&(dm(e,t,u,i),l=e.memoizedState),(a=Fs||Ev(e,t,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,YS(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:gr(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=cr(l):(l=_i(t)?Jo:Kn.current,l=pl(e,l));var d=t.getDerivedStateFromProps;(u=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Tv(e,o,i,l),Fs=!1,f=e.memoizedState,o.state=f,pd(e,i,o,r);var m=e.memoizedState;a!==h||f!==m||gi.current||Fs?(typeof d=="function"&&(dm(e,t,d,i),m=e.memoizedState),(c=Fs||Ev(e,t,c,i,f,m,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return gm(n,e,t,i,s,r)}function gm(n,e,t,i,r,s){x1(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&mv(e,t,!1),vs(n,e,s);i=e.stateNode,nA.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=gl(e,n.child,null,s),e.child=gl(e,null,a,s)):ti(n,e,a,s),e.memoizedState=i.state,r&&mv(e,t,!0),e.child}function y1(n){var e=n.stateNode;e.pendingContext?pv(n,e.pendingContext,e.pendingContext!==e.context):e.context&&pv(n,e.context,!1),y0(n,e.containerInfo)}function Nv(n,e,t,i,r){return ml(),p0(r),e.flags|=256,ti(n,e,t,i),e.child}var _m={dehydrated:null,treeContext:null,retryLane:0};function vm(n){return{baseLanes:n,cachePool:null,transitions:null}}function S1(n,e,t){var i=e.pendingProps,r=Wt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Ut(Wt,r&1),n===null)return um(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Jd(o,i,0,null),n=jo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=vm(t),e.memoizedState=_m,n):b0(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return iA(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=no(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=no(a,s):(s=jo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?vm(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=_m,i}return s=n.child,n=s.sibling,i=no(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function b0(n,e){return e=Jd({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Uu(n,e,t,i){return i!==null&&p0(i),gl(e,n.child,null,t),n=b0(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function iA(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Uh(Error(de(422))),Uu(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Jd({mode:"visible",children:i.children},r,0,null),s=jo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&gl(e,n.child,null,o),e.child.memoizedState=vm(o),e.memoizedState=_m,s);if(!(e.mode&1))return Uu(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(de(419)),i=Uh(s,i,void 0),Uu(n,e,o,i)}if(a=(o&n.childLanes)!==0,mi||a){if(i=bn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,_s(n,r),Mr(i,n,r,-1))}return I0(),i=Uh(Error(de(421))),Uu(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=gA.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,ki=Qs(r.nextSibling),Vi=e,zt=!0,vr=null,n!==null&&(er[tr++]=as,er[tr++]=ls,er[tr++]=ea,as=n.id,ls=n.overflow,ea=e),e=b0(e,i.children),e.flags|=4096,e)}function Dv(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),fm(n.return,e,t)}function Fh(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function M1(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ti(n,e,i.children,t),i=Wt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Dv(n,t,e);else if(n.tag===19)Dv(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Ut(Wt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&md(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Fh(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&md(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Fh(e,!0,t,null,s);break;case"together":Fh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Lf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function vs(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),na|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(de(153));if(e.child!==null){for(n=e.child,t=no(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=no(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function rA(n,e,t){switch(e.tag){case 3:y1(e),ml();break;case 5:qS(e);break;case 1:_i(e.type)&&cd(e);break;case 4:y0(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ut(dd,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ut(Wt,Wt.current&1),e.flags|=128,null):t&e.child.childLanes?S1(n,e,t):(Ut(Wt,Wt.current&1),n=vs(n,e,t),n!==null?n.sibling:null);Ut(Wt,Wt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return M1(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ut(Wt,Wt.current),i)break;return null;case 22:case 23:return e.lanes=0,v1(n,e,t)}return vs(n,e,t)}var E1,xm,T1,w1;E1=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};xm=function(){};T1=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ko(Hr.current);var s=null;switch(t){case"input":r=Vp(n,r),i=Vp(n,i),s=[];break;case"select":r=qt({},r,{value:void 0}),i=qt({},i,{value:void 0}),s=[];break;case"textarea":r=Wp(n,r),i=Wp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=ad)}Xp(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Uc.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Uc.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ft("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};w1=function(n,e,t,i){t!==i&&(e.flags|=4)};function Hl(n,e){if(!zt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function zn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function sA(n,e,t){var i=e.pendingProps;switch(h0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zn(e),null;case 1:return _i(e.type)&&ld(),zn(e),null;case 3:return i=e.stateNode,_l(),Ot(gi),Ot(Kn),M0(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Lu(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vr!==null&&(Cm(vr),vr=null))),xm(n,e),zn(e),null;case 5:S0(e);var r=ko(Yc.current);if(t=e.type,n!==null&&e.stateNode!=null)T1(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(de(166));return zn(e),null}if(n=ko(Hr.current),Lu(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Ur]=e,i[jc]=s,n=(e.mode&1)!==0,t){case"dialog":Ft("cancel",i),Ft("close",i);break;case"iframe":case"object":case"embed":Ft("load",i);break;case"video":case"audio":for(r=0;r<ic.length;r++)Ft(ic[r],i);break;case"source":Ft("error",i);break;case"img":case"image":case"link":Ft("error",i),Ft("load",i);break;case"details":Ft("toggle",i);break;case"input":V_(i,s),Ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ft("invalid",i);break;case"textarea":G_(i,s),Ft("invalid",i)}Xp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Du(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Du(i.textContent,a,n),r=["children",""+a]):Uc.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ft("scroll",i)}switch(t){case"input":Tu(i),H_(i,s,!0);break;case"textarea":Tu(i),W_(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ad)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Jy(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Ur]=e,n[jc]=i,E1(n,e,!1,!1),e.stateNode=n;e:{switch(o=Yp(t,i),t){case"dialog":Ft("cancel",n),Ft("close",n),r=i;break;case"iframe":case"object":case"embed":Ft("load",n),r=i;break;case"video":case"audio":for(r=0;r<ic.length;r++)Ft(ic[r],n);r=i;break;case"source":Ft("error",n),r=i;break;case"img":case"image":case"link":Ft("error",n),Ft("load",n),r=i;break;case"details":Ft("toggle",n),r=i;break;case"input":V_(n,i),r=Vp(n,i),Ft("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=qt({},i,{value:void 0}),Ft("invalid",n);break;case"textarea":G_(n,i),r=Wp(n,i),Ft("invalid",n);break;default:r=i}Xp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?nS(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&eS(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Fc(n,l):typeof l=="number"&&Fc(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Uc.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ft("scroll",n):l!=null&&Qg(n,s,l,o))}switch(t){case"input":Tu(n),H_(n,i,!1);break;case"textarea":Tu(n),W_(n);break;case"option":i.value!=null&&n.setAttribute("value",""+oo(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Qa(n,!!i.multiple,s,!1):i.defaultValue!=null&&Qa(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=ad)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zn(e),null;case 6:if(n&&e.stateNode!=null)w1(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(de(166));if(t=ko(Yc.current),ko(Hr.current),Lu(e)){if(i=e.stateNode,t=e.memoizedProps,i[Ur]=e,(s=i.nodeValue!==t)&&(n=Vi,n!==null))switch(n.tag){case 3:Du(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Du(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ur]=e,e.stateNode=i}return zn(e),null;case 13:if(Ot(Wt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&ki!==null&&e.mode&1&&!(e.flags&128))GS(),ml(),e.flags|=98560,s=!1;else if(s=Lu(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(de(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(de(317));s[Ur]=e}else ml(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zn(e),s=!1}else vr!==null&&(Cm(vr),vr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Wt.current&1?vn===0&&(vn=3):I0())),e.updateQueue!==null&&(e.flags|=4),zn(e),null);case 4:return _l(),xm(n,e),n===null&&Gc(e.stateNode.containerInfo),zn(e),null;case 10:return _0(e.type._context),zn(e),null;case 17:return _i(e.type)&&ld(),zn(e),null;case 19:if(Ot(Wt),s=e.memoizedState,s===null)return zn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Hl(s,!1);else{if(vn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=md(n),o!==null){for(e.flags|=128,Hl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Ut(Wt,Wt.current&1|2),e.child}n=n.sibling}s.tail!==null&&sn()>xl&&(e.flags|=128,i=!0,Hl(s,!1),e.lanes=4194304)}else{if(!i)if(n=md(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Hl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!zt)return zn(e),null}else 2*sn()-s.renderingStartTime>xl&&t!==1073741824&&(e.flags|=128,i=!0,Hl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=sn(),e.sibling=null,t=Wt.current,Ut(Wt,i?t&1|2:t&1),e):(zn(e),null);case 22:case 23:return L0(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Pi&1073741824&&(zn(e),e.subtreeFlags&6&&(e.flags|=8192)):zn(e),null;case 24:return null;case 25:return null}throw Error(de(156,e.tag))}function oA(n,e){switch(h0(e),e.tag){case 1:return _i(e.type)&&ld(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return _l(),Ot(gi),Ot(Kn),M0(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return S0(e),null;case 13:if(Ot(Wt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(de(340));ml()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Ot(Wt),null;case 4:return _l(),null;case 10:return _0(e.type._context),null;case 22:case 23:return L0(),null;case 24:return null;default:return null}}var Fu=!1,jn=!1,aA=typeof WeakSet=="function"?WeakSet:Set,De=null;function Ya(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Kt(n,e,i)}else t.current=null}function ym(n,e,t){try{t()}catch(i){Kt(n,e,i)}}var Lv=!1;function lA(n,e){if(im=rd,n=PS(),f0(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=n,f=null;t:for(;;){for(var d;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(d=h.firstChild)!==null;)f=h,h=d;for(;;){if(h===n)break t;if(f===t&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(d=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=d}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(rm={focusedElem:n,selectionRange:t},rd=!1,De=e;De!==null;)if(e=De,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,De=n;else for(;De!==null;){e=De;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,_=m.memoizedState,p=e.stateNode,g=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:gr(e.type,v),_);p.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(de(163))}}catch(M){Kt(e,e.return,M)}if(n=e.sibling,n!==null){n.return=e.return,De=n;break}De=e.return}return m=Lv,Lv=!1,m}function yc(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&ym(e,t,s)}r=r.next}while(r!==i)}}function Zd(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Sm(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function A1(n){var e=n.alternate;e!==null&&(n.alternate=null,A1(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Ur],delete e[jc],delete e[am],delete e[Ww],delete e[jw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function C1(n){return n.tag===5||n.tag===3||n.tag===4}function Iv(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||C1(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Mm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=ad));else if(i!==4&&(n=n.child,n!==null))for(Mm(n,e,t),n=n.sibling;n!==null;)Mm(n,e,t),n=n.sibling}function Em(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Em(n,e,t),n=n.sibling;n!==null;)Em(n,e,t),n=n.sibling}var Pn=null,_r=!1;function Cs(n,e,t){for(t=t.child;t!==null;)b1(n,e,t),t=t.sibling}function b1(n,e,t){if(Vr&&typeof Vr.onCommitFiberUnmount=="function")try{Vr.onCommitFiberUnmount(Gd,t)}catch{}switch(t.tag){case 5:jn||Ya(t,e);case 6:var i=Pn,r=_r;Pn=null,Cs(n,e,t),Pn=i,_r=r,Pn!==null&&(_r?(n=Pn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Pn.removeChild(t.stateNode));break;case 18:Pn!==null&&(_r?(n=Pn,t=t.stateNode,n.nodeType===8?Rh(n.parentNode,t):n.nodeType===1&&Rh(n,t),zc(n)):Rh(Pn,t.stateNode));break;case 4:i=Pn,r=_r,Pn=t.stateNode.containerInfo,_r=!0,Cs(n,e,t),Pn=i,_r=r;break;case 0:case 11:case 14:case 15:if(!jn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ym(t,e,o),r=r.next}while(r!==i)}Cs(n,e,t);break;case 1:if(!jn&&(Ya(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Kt(t,e,a)}Cs(n,e,t);break;case 21:Cs(n,e,t);break;case 22:t.mode&1?(jn=(i=jn)||t.memoizedState!==null,Cs(n,e,t),jn=i):Cs(n,e,t);break;default:Cs(n,e,t)}}function Uv(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new aA),e.forEach(function(i){var r=_A.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function fr(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Pn=a.stateNode,_r=!1;break e;case 3:Pn=a.stateNode.containerInfo,_r=!0;break e;case 4:Pn=a.stateNode.containerInfo,_r=!0;break e}a=a.return}if(Pn===null)throw Error(de(160));b1(s,o,r),Pn=null,_r=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Kt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)R1(e,n),e=e.sibling}function R1(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(fr(e,n),Cr(n),i&4){try{yc(3,n,n.return),Zd(3,n)}catch(v){Kt(n,n.return,v)}try{yc(5,n,n.return)}catch(v){Kt(n,n.return,v)}}break;case 1:fr(e,n),Cr(n),i&512&&t!==null&&Ya(t,t.return);break;case 5:if(fr(e,n),Cr(n),i&512&&t!==null&&Ya(t,t.return),n.flags&32){var r=n.stateNode;try{Fc(r,"")}catch(v){Kt(n,n.return,v)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Zy(r,s),Yp(a,o);var c=Yp(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?nS(r,h):u==="dangerouslySetInnerHTML"?eS(r,h):u==="children"?Fc(r,h):Qg(r,u,h,c)}switch(a){case"input":Hp(r,s);break;case"textarea":Qy(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var d=s.value;d!=null?Qa(r,!!s.multiple,d,!1):f!==!!s.multiple&&(s.defaultValue!=null?Qa(r,!!s.multiple,s.defaultValue,!0):Qa(r,!!s.multiple,s.multiple?[]:"",!1))}r[jc]=s}catch(v){Kt(n,n.return,v)}}break;case 6:if(fr(e,n),Cr(n),i&4){if(n.stateNode===null)throw Error(de(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(v){Kt(n,n.return,v)}}break;case 3:if(fr(e,n),Cr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{zc(e.containerInfo)}catch(v){Kt(n,n.return,v)}break;case 4:fr(e,n),Cr(n);break;case 13:fr(e,n),Cr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(N0=sn())),i&4&&Uv(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(jn=(c=jn)||u,fr(e,n),jn=c):fr(e,n),Cr(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(De=n,u=n.child;u!==null;){for(h=De=u;De!==null;){switch(f=De,d=f.child,f.tag){case 0:case 11:case 14:case 15:yc(4,f,f.return);break;case 1:Ya(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(v){Kt(i,t,v)}}break;case 5:Ya(f,f.return);break;case 22:if(f.memoizedState!==null){Ov(h);continue}}d!==null?(d.return=f,De=d):Ov(h)}u=u.sibling}e:for(u=null,h=n;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=tS("display",o))}catch(v){Kt(n,n.return,v)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(v){Kt(n,n.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:fr(e,n),Cr(n),i&4&&Uv(n);break;case 21:break;default:fr(e,n),Cr(n)}}function Cr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(C1(t)){var i=t;break e}t=t.return}throw Error(de(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Fc(r,""),i.flags&=-33);var s=Iv(n);Em(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Iv(n);Mm(n,a,o);break;default:throw Error(de(161))}}catch(l){Kt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function cA(n,e,t){De=n,P1(n)}function P1(n,e,t){for(var i=(n.mode&1)!==0;De!==null;){var r=De,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Fu;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||jn;a=Fu;var c=jn;if(Fu=o,(jn=l)&&!c)for(De=r;De!==null;)o=De,l=o.child,o.tag===22&&o.memoizedState!==null?kv(r):l!==null?(l.return=o,De=l):kv(r);for(;s!==null;)De=s,P1(s),s=s.sibling;De=r,Fu=a,jn=c}Fv(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,De=s):Fv(n)}}function Fv(n){for(;De!==null;){var e=De;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jn||Zd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:gr(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&yv(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}yv(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&zc(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(de(163))}jn||e.flags&512&&Sm(e)}catch(f){Kt(e,e.return,f)}}if(e===n){De=null;break}if(t=e.sibling,t!==null){t.return=e.return,De=t;break}De=e.return}}function Ov(n){for(;De!==null;){var e=De;if(e===n){De=null;break}var t=e.sibling;if(t!==null){t.return=e.return,De=t;break}De=e.return}}function kv(n){for(;De!==null;){var e=De;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Zd(4,e)}catch(l){Kt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Kt(e,r,l)}}var s=e.return;try{Sm(e)}catch(l){Kt(e,s,l)}break;case 5:var o=e.return;try{Sm(e)}catch(l){Kt(e,o,l)}}}catch(l){Kt(e,e.return,l)}if(e===n){De=null;break}var a=e.sibling;if(a!==null){a.return=e.return,De=a;break}De=e.return}}var uA=Math.ceil,vd=Es.ReactCurrentDispatcher,R0=Es.ReactCurrentOwner,ar=Es.ReactCurrentBatchConfig,yt=0,bn=null,hn=null,Ln=0,Pi=0,qa=go(0),vn=0,Zc=null,na=0,Qd=0,P0=0,Sc=null,hi=null,N0=0,xl=1/0,ts=null,xd=!1,Tm=null,eo=null,Ou=!1,Vs=null,yd=0,Mc=0,wm=null,If=-1,Uf=0;function oi(){return yt&6?sn():If!==-1?If:If=sn()}function to(n){return n.mode&1?yt&2&&Ln!==0?Ln&-Ln:Yw.transition!==null?(Uf===0&&(Uf=pS()),Uf):(n=wt,n!==0||(n=window.event,n=n===void 0?16:SS(n.type)),n):1}function Mr(n,e,t,i){if(50<Mc)throw Mc=0,wm=null,Error(de(185));hu(n,t,i),(!(yt&2)||n!==bn)&&(n===bn&&(!(yt&2)&&(Qd|=t),vn===4&&ks(n,Ln)),vi(n,i),t===1&&yt===0&&!(e.mode&1)&&(xl=sn()+500,qd&&_o()))}function vi(n,e){var t=n.callbackNode;YT(n,e);var i=id(n,n===bn?Ln:0);if(i===0)t!==null&&Y_(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Y_(t),e===1)n.tag===0?Xw(Bv.bind(null,n)):zS(Bv.bind(null,n)),Hw(function(){!(yt&6)&&_o()}),t=null;else{switch(mS(i)){case 1:t=i0;break;case 4:t=dS;break;case 16:t=nd;break;case 536870912:t=hS;break;default:t=nd}t=k1(t,N1.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function N1(n,e){if(If=-1,Uf=0,yt&6)throw Error(de(327));var t=n.callbackNode;if(il()&&n.callbackNode!==t)return null;var i=id(n,n===bn?Ln:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Sd(n,i);else{e=i;var r=yt;yt|=2;var s=L1();(bn!==n||Ln!==e)&&(ts=null,xl=sn()+500,Wo(n,e));do try{hA();break}catch(a){D1(n,a)}while(!0);g0(),vd.current=s,yt=r,hn!==null?e=0:(bn=null,Ln=0,e=vn)}if(e!==0){if(e===2&&(r=Qp(n),r!==0&&(i=r,e=Am(n,r))),e===1)throw t=Zc,Wo(n,0),ks(n,i),vi(n,sn()),t;if(e===6)ks(n,i);else{if(r=n.current.alternate,!(i&30)&&!fA(r)&&(e=Sd(n,i),e===2&&(s=Qp(n),s!==0&&(i=s,e=Am(n,s))),e===1))throw t=Zc,Wo(n,0),ks(n,i),vi(n,sn()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(de(345));case 2:Ro(n,hi,ts);break;case 3:if(ks(n,i),(i&130023424)===i&&(e=N0+500-sn(),10<e)){if(id(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){oi(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=om(Ro.bind(null,n,hi,ts),e);break}Ro(n,hi,ts);break;case 4:if(ks(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Sr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=sn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*uA(i/1960))-i,10<i){n.timeoutHandle=om(Ro.bind(null,n,hi,ts),i);break}Ro(n,hi,ts);break;case 5:Ro(n,hi,ts);break;default:throw Error(de(329))}}}return vi(n,sn()),n.callbackNode===t?N1.bind(null,n):null}function Am(n,e){var t=Sc;return n.current.memoizedState.isDehydrated&&(Wo(n,e).flags|=256),n=Sd(n,e),n!==2&&(e=hi,hi=t,e!==null&&Cm(e)),n}function Cm(n){hi===null?hi=n:hi.push.apply(hi,n)}function fA(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Tr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ks(n,e){for(e&=~P0,e&=~Qd,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Sr(e),i=1<<t;n[t]=-1,e&=~i}}function Bv(n){if(yt&6)throw Error(de(327));il();var e=id(n,0);if(!(e&1))return vi(n,sn()),null;var t=Sd(n,e);if(n.tag!==0&&t===2){var i=Qp(n);i!==0&&(e=i,t=Am(n,i))}if(t===1)throw t=Zc,Wo(n,0),ks(n,e),vi(n,sn()),t;if(t===6)throw Error(de(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ro(n,hi,ts),vi(n,sn()),null}function D0(n,e){var t=yt;yt|=1;try{return n(e)}finally{yt=t,yt===0&&(xl=sn()+500,qd&&_o())}}function ia(n){Vs!==null&&Vs.tag===0&&!(yt&6)&&il();var e=yt;yt|=1;var t=ar.transition,i=wt;try{if(ar.transition=null,wt=1,n)return n()}finally{wt=i,ar.transition=t,yt=e,!(yt&6)&&_o()}}function L0(){Pi=qa.current,Ot(qa)}function Wo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Vw(t)),hn!==null)for(t=hn.return;t!==null;){var i=t;switch(h0(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ld();break;case 3:_l(),Ot(gi),Ot(Kn),M0();break;case 5:S0(i);break;case 4:_l();break;case 13:Ot(Wt);break;case 19:Ot(Wt);break;case 10:_0(i.type._context);break;case 22:case 23:L0()}t=t.return}if(bn=n,hn=n=no(n.current,null),Ln=Pi=e,vn=0,Zc=null,P0=Qd=na=0,hi=Sc=null,Oo!==null){for(e=0;e<Oo.length;e++)if(t=Oo[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Oo=null}return n}function D1(n,e){do{var t=hn;try{if(g0(),Nf.current=_d,gd){for(var i=Yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gd=!1}if(ta=0,Cn=gn=Yt=null,xc=!1,qc=0,R0.current=null,t===null||t.return===null){vn=1,Zc=e,hn=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Ln,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var d=Av(o);if(d!==null){d.flags&=-257,Cv(d,o,a,s,e),d.mode&1&&wv(s,c,e),e=d,l=c;var m=e.updateQueue;if(m===null){var v=new Set;v.add(l),e.updateQueue=v}else m.add(l);break e}else{if(!(e&1)){wv(s,c,e),I0();break e}l=Error(de(426))}}else if(zt&&a.mode&1){var _=Av(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Cv(_,o,a,s,e),p0(vl(l,a));break e}}s=l=vl(l,a),vn!==4&&(vn=2),Sc===null?Sc=[s]:Sc.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=m1(s,l,e);xv(s,p);break e;case 1:a=l;var g=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(eo===null||!eo.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=g1(s,a,e);xv(s,M);break e}}s=s.return}while(s!==null)}U1(t)}catch(A){e=A,hn===t&&t!==null&&(hn=t=t.return);continue}break}while(!0)}function L1(){var n=vd.current;return vd.current=_d,n===null?_d:n}function I0(){(vn===0||vn===3||vn===2)&&(vn=4),bn===null||!(na&268435455)&&!(Qd&268435455)||ks(bn,Ln)}function Sd(n,e){var t=yt;yt|=2;var i=L1();(bn!==n||Ln!==e)&&(ts=null,Wo(n,e));do try{dA();break}catch(r){D1(n,r)}while(!0);if(g0(),yt=t,vd.current=i,hn!==null)throw Error(de(261));return bn=null,Ln=0,vn}function dA(){for(;hn!==null;)I1(hn)}function hA(){for(;hn!==null&&!kT();)I1(hn)}function I1(n){var e=O1(n.alternate,n,Pi);n.memoizedProps=n.pendingProps,e===null?U1(n):hn=e,R0.current=null}function U1(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=oA(t,e),t!==null){t.flags&=32767,hn=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{vn=6,hn=null;return}}else if(t=sA(t,e,Pi),t!==null){hn=t;return}if(e=e.sibling,e!==null){hn=e;return}hn=e=n}while(e!==null);vn===0&&(vn=5)}function Ro(n,e,t){var i=wt,r=ar.transition;try{ar.transition=null,wt=1,pA(n,e,t,i)}finally{ar.transition=r,wt=i}return null}function pA(n,e,t,i){do il();while(Vs!==null);if(yt&6)throw Error(de(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(de(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(qT(n,s),n===bn&&(hn=bn=null,Ln=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ou||(Ou=!0,k1(nd,function(){return il(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=ar.transition,ar.transition=null;var o=wt;wt=1;var a=yt;yt|=4,R0.current=null,lA(n,t),R1(t,n),Iw(rm),rd=!!im,rm=im=null,n.current=t,cA(t),BT(),yt=a,wt=o,ar.transition=s}else n.current=t;if(Ou&&(Ou=!1,Vs=n,yd=r),s=n.pendingLanes,s===0&&(eo=null),HT(t.stateNode),vi(n,sn()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(xd)throw xd=!1,n=Tm,Tm=null,n;return yd&1&&n.tag!==0&&il(),s=n.pendingLanes,s&1?n===wm?Mc++:(Mc=0,wm=n):Mc=0,_o(),null}function il(){if(Vs!==null){var n=mS(yd),e=ar.transition,t=wt;try{if(ar.transition=null,wt=16>n?16:n,Vs===null)var i=!1;else{if(n=Vs,Vs=null,yd=0,yt&6)throw Error(de(331));var r=yt;for(yt|=4,De=n.current;De!==null;){var s=De,o=s.child;if(De.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(De=c;De!==null;){var u=De;switch(u.tag){case 0:case 11:case 15:yc(8,u,s)}var h=u.child;if(h!==null)h.return=u,De=h;else for(;De!==null;){u=De;var f=u.sibling,d=u.return;if(A1(u),u===c){De=null;break}if(f!==null){f.return=d,De=f;break}De=d}}}var m=s.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}De=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,De=o;else e:for(;De!==null;){if(s=De,s.flags&2048)switch(s.tag){case 0:case 11:case 15:yc(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,De=p;break e}De=s.return}}var g=n.current;for(De=g;De!==null;){o=De;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,De=y;else e:for(o=g;De!==null;){if(a=De,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Zd(9,a)}}catch(A){Kt(a,a.return,A)}if(a===o){De=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,De=M;break e}De=a.return}}if(yt=r,_o(),Vr&&typeof Vr.onPostCommitFiberRoot=="function")try{Vr.onPostCommitFiberRoot(Gd,n)}catch{}i=!0}return i}finally{wt=t,ar.transition=e}}return!1}function zv(n,e,t){e=vl(t,e),e=m1(n,e,1),n=Js(n,e,1),e=oi(),n!==null&&(hu(n,1,e),vi(n,e))}function Kt(n,e,t){if(n.tag===3)zv(n,n,t);else for(;e!==null;){if(e.tag===3){zv(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(eo===null||!eo.has(i))){n=vl(t,n),n=g1(e,n,1),e=Js(e,n,1),n=oi(),e!==null&&(hu(e,1,n),vi(e,n));break}}e=e.return}}function mA(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=oi(),n.pingedLanes|=n.suspendedLanes&t,bn===n&&(Ln&t)===t&&(vn===4||vn===3&&(Ln&130023424)===Ln&&500>sn()-N0?Wo(n,0):P0|=t),vi(n,e)}function F1(n,e){e===0&&(n.mode&1?(e=Cu,Cu<<=1,!(Cu&130023424)&&(Cu=4194304)):e=1);var t=oi();n=_s(n,e),n!==null&&(hu(n,e,t),vi(n,t))}function gA(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),F1(n,t)}function _A(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(de(314))}i!==null&&i.delete(e),F1(n,t)}var O1;O1=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||gi.current)mi=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return mi=!1,rA(n,e,t);mi=!!(n.flags&131072)}else mi=!1,zt&&e.flags&1048576&&VS(e,fd,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Lf(n,e),n=e.pendingProps;var r=pl(e,Kn.current);nl(e,t),r=T0(null,e,i,n,r,t);var s=w0();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_i(i)?(s=!0,cd(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,x0(e),r.updater=Kd,e.stateNode=r,r._reactInternals=e,hm(e,i,n,t),e=gm(null,e,i,!0,s,t)):(e.tag=0,zt&&s&&d0(e),ti(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Lf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=xA(i),n=gr(i,n),r){case 0:e=mm(null,e,i,n,t);break e;case 1:e=Pv(null,e,i,n,t);break e;case 11:e=bv(null,e,i,n,t);break e;case 14:e=Rv(null,e,i,gr(i.type,n),t);break e}throw Error(de(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:gr(i,r),mm(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:gr(i,r),Pv(n,e,i,r,t);case 3:e:{if(y1(e),n===null)throw Error(de(387));i=e.pendingProps,s=e.memoizedState,r=s.element,YS(n,e),pd(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=vl(Error(de(423)),e),e=Nv(n,e,i,t,r);break e}else if(i!==r){r=vl(Error(de(424)),e),e=Nv(n,e,i,t,r);break e}else for(ki=Qs(e.stateNode.containerInfo.firstChild),Vi=e,zt=!0,vr=null,t=jS(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ml(),i===r){e=vs(n,e,t);break e}ti(n,e,i,t)}e=e.child}return e;case 5:return qS(e),n===null&&um(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,sm(i,r)?o=null:s!==null&&sm(i,s)&&(e.flags|=32),x1(n,e),ti(n,e,o,t),e.child;case 6:return n===null&&um(e),null;case 13:return S1(n,e,t);case 4:return y0(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=gl(e,null,i,t):ti(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:gr(i,r),bv(n,e,i,r,t);case 7:return ti(n,e,e.pendingProps,t),e.child;case 8:return ti(n,e,e.pendingProps.children,t),e.child;case 12:return ti(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ut(dd,i._currentValue),i._currentValue=o,s!==null)if(Tr(s.value,o)){if(s.children===r.children&&!gi.current){e=vs(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=fs(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),fm(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(de(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),fm(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ti(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,nl(e,t),r=cr(r),i=i(r),e.flags|=1,ti(n,e,i,t),e.child;case 14:return i=e.type,r=gr(i,e.pendingProps),r=gr(i.type,r),Rv(n,e,i,r,t);case 15:return _1(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:gr(i,r),Lf(n,e),e.tag=1,_i(i)?(n=!0,cd(e)):n=!1,nl(e,t),p1(e,i,r),hm(e,i,r,t),gm(null,e,i,!0,n,t);case 19:return M1(n,e,t);case 22:return v1(n,e,t)}throw Error(de(156,e.tag))};function k1(n,e){return fS(n,e)}function vA(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rr(n,e,t,i){return new vA(n,e,t,i)}function U0(n){return n=n.prototype,!(!n||!n.isReactComponent)}function xA(n){if(typeof n=="function")return U0(n)?1:0;if(n!=null){if(n=n.$$typeof,n===e0)return 11;if(n===t0)return 14}return 2}function no(n,e){var t=n.alternate;return t===null?(t=rr(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Ff(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")U0(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ka:return jo(t.children,r,s,e);case Jg:o=8,r|=8;break;case Op:return n=rr(12,t,e,r|2),n.elementType=Op,n.lanes=s,n;case kp:return n=rr(13,t,e,r),n.elementType=kp,n.lanes=s,n;case Bp:return n=rr(19,t,e,r),n.elementType=Bp,n.lanes=s,n;case qy:return Jd(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Xy:o=10;break e;case Yy:o=9;break e;case e0:o=11;break e;case t0:o=14;break e;case Us:o=16,i=null;break e}throw Error(de(130,n==null?n:typeof n,""))}return e=rr(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function jo(n,e,t,i){return n=rr(7,n,i,e),n.lanes=t,n}function Jd(n,e,t,i){return n=rr(22,n,i,e),n.elementType=qy,n.lanes=t,n.stateNode={isHidden:!1},n}function Oh(n,e,t){return n=rr(6,n,null,e),n.lanes=t,n}function kh(n,e,t){return e=rr(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function yA(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vh(0),this.expirationTimes=vh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vh(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function F0(n,e,t,i,r,s,o,a,l){return n=new yA(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=rr(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},x0(s),n}function SA(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Oa,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function B1(n){if(!n)return ao;n=n._reactInternals;e:{if(ua(n)!==n||n.tag!==1)throw Error(de(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_i(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(de(171))}if(n.tag===1){var t=n.type;if(_i(t))return BS(n,t,e)}return e}function z1(n,e,t,i,r,s,o,a,l){return n=F0(t,i,!0,n,r,s,o,a,l),n.context=B1(null),t=n.current,i=oi(),r=to(t),s=fs(i,r),s.callback=e??null,Js(t,s,r),n.current.lanes=r,hu(n,r,i),vi(n,i),n}function eh(n,e,t,i){var r=e.current,s=oi(),o=to(r);return t=B1(t),e.context===null?e.context=t:e.pendingContext=t,e=fs(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Js(r,e,o),n!==null&&(Mr(n,r,o,s),Pf(n,r,o)),o}function Md(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Vv(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function O0(n,e){Vv(n,e),(n=n.alternate)&&Vv(n,e)}function MA(){return null}var V1=typeof reportError=="function"?reportError:function(n){console.error(n)};function k0(n){this._internalRoot=n}th.prototype.render=k0.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(de(409));eh(n,e,null,null)};th.prototype.unmount=k0.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ia(function(){eh(null,n,null,null)}),e[gs]=null}};function th(n){this._internalRoot=n}th.prototype.unstable_scheduleHydration=function(n){if(n){var e=vS();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Os.length&&e!==0&&e<Os[t].priority;t++);Os.splice(t,0,n),t===0&&yS(n)}};function B0(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function nh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Hv(){}function EA(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Md(o);s.call(c)}}var o=z1(e,i,n,0,null,!1,!1,"",Hv);return n._reactRootContainer=o,n[gs]=o.current,Gc(n.nodeType===8?n.parentNode:n),ia(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Md(l);a.call(c)}}var l=F0(n,0,!1,null,null,!1,!1,"",Hv);return n._reactRootContainer=l,n[gs]=l.current,Gc(n.nodeType===8?n.parentNode:n),ia(function(){eh(e,l,t,i)}),l}function ih(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Md(o);a.call(l)}}eh(e,o,n,r)}else o=EA(t,e,n,r,i);return Md(o)}gS=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=nc(e.pendingLanes);t!==0&&(r0(e,t|1),vi(e,sn()),!(yt&6)&&(xl=sn()+500,_o()))}break;case 13:ia(function(){var i=_s(n,1);if(i!==null){var r=oi();Mr(i,n,1,r)}}),O0(n,1)}};s0=function(n){if(n.tag===13){var e=_s(n,134217728);if(e!==null){var t=oi();Mr(e,n,134217728,t)}O0(n,134217728)}};_S=function(n){if(n.tag===13){var e=to(n),t=_s(n,e);if(t!==null){var i=oi();Mr(t,n,e,i)}O0(n,e)}};vS=function(){return wt};xS=function(n,e){var t=wt;try{return wt=n,e()}finally{wt=t}};$p=function(n,e,t){switch(e){case"input":if(Hp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Yd(i);if(!r)throw Error(de(90));Ky(i),Hp(i,r)}}}break;case"textarea":Qy(n,t);break;case"select":e=t.value,e!=null&&Qa(n,!!t.multiple,e,!1)}};sS=D0;oS=ia;var TA={usingClientEntryPoint:!1,Events:[mu,Ha,Yd,iS,rS,D0]},Gl={findFiberByHostInstance:Fo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wA={bundleType:Gl.bundleType,version:Gl.version,rendererPackageName:Gl.rendererPackageName,rendererConfig:Gl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Es.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=cS(n),n===null?null:n.stateNode},findFiberByHostInstance:Gl.findFiberByHostInstance||MA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ku.isDisabled&&ku.supportsFiber)try{Gd=ku.inject(wA),Vr=ku}catch{}}Xi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TA;Xi.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!B0(e))throw Error(de(200));return SA(n,e,null,t)};Xi.createRoot=function(n,e){if(!B0(n))throw Error(de(299));var t=!1,i="",r=V1;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=F0(n,1,!1,null,null,t,!1,i,r),n[gs]=e.current,Gc(n.nodeType===8?n.parentNode:n),new k0(e)};Xi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(de(188)):(n=Object.keys(n).join(","),Error(de(268,n)));return n=cS(e),n=n===null?null:n.stateNode,n};Xi.flushSync=function(n){return ia(n)};Xi.hydrate=function(n,e,t){if(!nh(e))throw Error(de(200));return ih(null,n,e,!0,t)};Xi.hydrateRoot=function(n,e,t){if(!B0(n))throw Error(de(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=V1;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=z1(e,null,n,1,t??null,r,!1,s,o),n[gs]=e.current,Gc(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new th(e)};Xi.render=function(n,e,t){if(!nh(e))throw Error(de(200));return ih(null,n,e,!1,t)};Xi.unmountComponentAtNode=function(n){if(!nh(n))throw Error(de(40));return n._reactRootContainer?(ia(function(){ih(null,null,n,!1,function(){n._reactRootContainer=null,n[gs]=null})}),!0):!1};Xi.unstable_batchedUpdates=D0;Xi.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!nh(t))throw Error(de(200));if(n==null||n._reactInternals===void 0)throw Error(de(38));return ih(n,e,t,!1,i)};Xi.version="18.3.1-next-f1338f8080-20240426";function H1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(H1)}catch(n){console.error(n)}}H1(),Hy.exports=Xi;var AA=Hy.exports,Gv=AA;Up.createRoot=Gv.createRoot,Up.hydrateRoot=Gv.hydrateRoot;var G1=(n=>(n.BASE="base",n.BODY="body",n.HEAD="head",n.HTML="html",n.LINK="link",n.META="meta",n.NOSCRIPT="noscript",n.SCRIPT="script",n.STYLE="style",n.TITLE="title",n.FRAGMENT="Symbol(react.fragment)",n))(G1||{}),Bh={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}};Object.values(G1);var z0={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"};Object.entries(z0).reduce((n,[e,t])=>(n[t]=e,n),{});var Qc="data-rh",CA=n=>Array.isArray(n)?n.join(""):n,bA=(n,e)=>{const t=Object.keys(n);for(let i=0;i<t.length;i+=1)if(e[t[i]]&&e[t[i]].includes(n[t[i]]))return!0;return!1},zh=(n,e)=>Array.isArray(n)?n.reduce((t,i)=>(bA(i,e)?t.priority.push(i):t.default.push(i),t),{priority:[],default:[]}):{default:n,priority:[]},RA=["noscript","script","style"],bm=(n,e=!0)=>e===!1?String(n):String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),W1=n=>Object.keys(n).reduce((e,t)=>{const i=typeof n[t]<"u"?`${t}="${n[t]}"`:`${t}`;return e?`${e} ${i}`:i},""),PA=(n,e,t,i)=>{const r=W1(t),s=CA(e);return r?`<${n} ${Qc}="true" ${r}>${bm(s,i)}</${n}>`:`<${n} ${Qc}="true">${bm(s,i)}</${n}>`},NA=(n,e,t=!0)=>e.reduce((i,r)=>{const s=r,o=Object.keys(s).filter(c=>!(c==="innerHTML"||c==="cssText")).reduce((c,u)=>{const h=typeof s[u]>"u"?u:`${u}="${bm(s[u],t)}"`;return c?`${c} ${h}`:h},""),a=s.innerHTML||s.cssText||"",l=RA.indexOf(n)===-1;return`${i}<${n} ${Qc}="true" ${o}${l?"/>":`>${a}</${n}>`}`},""),j1=(n,e={})=>Object.keys(n).reduce((t,i)=>{const r=z0[i];return t[r||i]=n[i],t},e),DA=(n,e,t)=>{const i={key:e,[Qc]:!0},r=j1(t,i);return[qs.createElement("title",r,e)]},Of=(n,e)=>e.map((t,i)=>{const r={key:i,[Qc]:!0};return Object.keys(t).forEach(s=>{const a=z0[s]||s;if(a==="innerHTML"||a==="cssText"){const l=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:l}}else r[a]=t[s]}),qs.createElement(n,r)}),Qi=(n,e,t=!0)=>{switch(n){case"title":return{toComponent:()=>DA(n,e.title,e.titleAttributes),toString:()=>PA(n,e.title,e.titleAttributes,t)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>j1(e),toString:()=>W1(e)};default:return{toComponent:()=>Of(n,e),toString:()=>NA(n,e,t)}}},LA=({metaTags:n,linkTags:e,scriptTags:t,encode:i})=>{const r=zh(n,Bh.meta),s=zh(e,Bh.link),o=zh(t,Bh.script);return{priorityMethods:{toComponent:()=>[...Of("meta",r.priority),...Of("link",s.priority),...Of("script",o.priority)],toString:()=>`${Qi("meta",r.priority,i)} ${Qi("link",s.priority,i)} ${Qi("script",o.priority,i)}`},metaTags:r.default,linkTags:s.default,scriptTags:o.default}},IA=n=>{const{baseTag:e,bodyAttributes:t,encode:i=!0,htmlAttributes:r,noscriptTags:s,styleTags:o,title:a="",titleAttributes:l,prioritizeSeoTags:c}=n;let{linkTags:u,metaTags:h,scriptTags:f}=n,d={toComponent:()=>[],toString:()=>""};return c&&({priorityMethods:d,linkTags:u,metaTags:h,scriptTags:f}=LA(n)),{priority:d,base:Qi("base",e,i),bodyAttributes:Qi("bodyAttributes",t,i),htmlAttributes:Qi("htmlAttributes",r,i),link:Qi("link",u,i),meta:Qi("meta",h,i),noscript:Qi("noscript",s,i),script:Qi("script",f,i),style:Qi("style",o,i),title:Qi("title",{title:a,titleAttributes:l},i)}},UA=IA,Bu=[],X1=!!(typeof window<"u"&&window.document&&window.document.createElement),FA=class{constructor(n,e){xo(this,"instances",[]);xo(this,"canUseDOM",X1);xo(this,"context");xo(this,"value",{setHelmet:n=>{this.context.helmet=n},helmetInstances:{get:()=>this.canUseDOM?Bu:this.instances,add:n=>{(this.canUseDOM?Bu:this.instances).push(n)},remove:n=>{const e=(this.canUseDOM?Bu:this.instances).indexOf(n);(this.canUseDOM?Bu:this.instances).splice(e,1)}}});this.context=n,this.canUseDOM=e||!1,e||(n.helmet=UA({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},OA=parseInt(qs.version.split(".")[0],10),Wv=OA>=19,kA={},BA=qs.createContext(kA),Go,zA=(Go=class extends Be.Component{constructor(t){super(t);xo(this,"helmetData");Wv?this.helmetData=null:this.helmetData=new FA(this.props.context||{},Go.canUseDOM)}render(){return Wv?qs.createElement(qs.Fragment,null,this.props.children):qs.createElement(BA.Provider,{value:this.helmetData.value},this.props.children)}},xo(Go,"canUseDOM",X1),Go);function ns(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Y1(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Hi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Jc={duration:.5,overwrite:!1,delay:0},V0,In,Vt,sr=1e8,Nt=1/sr,Rm=Math.PI*2,VA=Rm/4,HA=0,q1=Math.sqrt,GA=Math.cos,WA=Math.sin,Rn=function(e){return typeof e=="string"},Qt=function(e){return typeof e=="function"},xs=function(e){return typeof e=="number"},H0=function(e){return typeof e>"u"},Xr=function(e){return typeof e=="object"},xi=function(e){return e!==!1},G0=function(){return typeof window<"u"},zu=function(e){return Qt(e)||Rn(e)},$1=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},$n=Array.isArray,jA=/random\([^)]+\)/g,XA=/,\s*/g,jv=/(?:-?\.?\d|\.)+/gi,K1=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,$a=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Vh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Z1=/[+-]=-?[.\d]+/,YA=/[^,'"\[\]\s]+/gi,qA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,jt,Dr,Pm,W0,Wi={},Ed={},Q1,J1=function(e){return(Ed=yl(e,Wi))&&Ti},j0=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},eu=function(e,t){return!t&&console.warn(e)},eM=function(e,t){return e&&(Wi[e]=t)&&Ed&&(Ed[e]=t)||Wi},tu=function(){return 0},$A={suppressEvents:!0,isStart:!0,kill:!1},kf={suppressEvents:!0,kill:!1},KA={suppressEvents:!0},X0={},io=[],Nm={},tM,Di={},Hh={},Xv=30,Bf=[],Y0="",q0=function(e){var t=e[0],i,r;if(Xr(t)||Qt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Bf.length;r--&&!Bf[r].targetTest(t););i=Bf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new EM(e[r],i)))||e.splice(r,1);return e},Xo=function(e){return e._gsap||q0(or(e))[0]._gsap},nM=function(e,t,i){return(i=e[t])&&Qt(i)?e[t]():H0(i)&&e.getAttribute&&e.getAttribute(t)||i},yi=function(e,t){return(e=e.split(",")).forEach(t)||e},rn=function(e){return Math.round(e*1e5)/1e5||0},Gt=function(e){return Math.round(e*1e7)/1e7||0},rl=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},ZA=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Td=function(){var e=io.length,t=io.slice(0),i,r;for(Nm={},io.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},$0=function(e){return!!(e._initted||e._startAt||e.add)},iM=function(e,t,i,r){io.length&&!In&&Td(),e.render(t,i,!!(In&&t<0&&$0(e))),io.length&&!In&&Td()},rM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(YA).length<2?t:Rn(e)?e.trim():e},sM=function(e){return e},ji=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},QA=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},yl=function(e,t){for(var i in t)e[i]=t[i];return e},Yv=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Xr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},wd=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Ec=function(e){var t=e.parent||jt,i=e.keyframes?QA($n(e.keyframes)):ji;if(xi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},JA=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},oM=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},rh=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},lo=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Yo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},eC=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Dm=function(e,t,i,r){return e._startAt&&(In?e._startAt.revert(kf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},tC=function n(e){return!e||e._ts&&n(e.parent)},qv=function(e){return e._repeat?Sl(e._tTime,e=e.duration()+e._rDelay)*e:0},Sl=function(e,t){var i=Math.floor(e=Gt(e/t));return e&&i===e?i-1:i},Ad=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},sh=function(e){return e._end=Gt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Nt)||0))},oh=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Gt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),sh(e),i._dirty||Yo(i,e)),e},aM=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Ad(e.rawTime(),t),(!t._dur||_u(0,t.totalDuration(),i)-t._tTime>Nt)&&t.render(i,!0)),Yo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Nt}},Fr=function(e,t,i,r){return t.parent&&lo(t),t._start=Gt((xs(i)?i:i||e!==jt?Zi(e,i,t):e._time)+t._delay),t._end=Gt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),oM(e,t,"_first","_last",e._sort?"_start":0),Lm(t)||(e._recent=t),r||aM(e,t),e._ts<0&&oh(e,e._tTime),e},lM=function(e,t){return(Wi.ScrollTrigger||j0("scrollTrigger",t))&&Wi.ScrollTrigger.create(t,e)},cM=function(e,t,i,r,s){if(Z0(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!In&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&tM!==Ui.frame)return io.push(e),e._lazy=[s,r],1},nC=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Lm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},iC=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&nC(e)&&!(!e._initted&&Lm(e))||(e._ts<0||e._dp._ts<0)&&!Lm(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=_u(0,e._tDur,t),u=Sl(l,a),e._yoyo&&u&1&&(o=1-o),u!==Sl(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||In||r||e._zTime===Nt||!t&&e._zTime){if(!e._initted&&cM(e,t,r,i,l))return;for(h=e._zTime,e._zTime=t||(i?Nt:0),i||(i=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Dm(e,t,i,!0),e._onUpdate&&!i&&Bi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Bi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&lo(e,1),!i&&!In&&(Bi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},rC=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ml=function(e,t,i,r){var s=e._repeat,o=Gt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Gt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&oh(e,e._tTime=e._tDur*a),e.parent&&sh(e),i||Yo(e.parent,e),e},$v=function(e){return e instanceof pi?Yo(e):Ml(e,e._dur)},sC={_start:0,endTime:tu,totalDuration:tu},Zi=function n(e,t,i){var r=e.labels,s=e._recent||sC,o=e.duration()>=sr?s.endTime(!1):e._dur,a,l,c;return Rn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*($n(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Tc=function(e,t,i){var r=xs(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=xi(l.vars.inherit)&&l.parent;o.immediateRender=xi(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new dn(t[0],o,t[s+1])},vo=function(e,t){return e||e===0?t(e):t},_u=function(e,t,i){return i<e?e:i>t?t:i},Xn=function(e,t){return!Rn(e)||!(t=qA.exec(e))?"":t[1]},oC=function(e,t,i){return vo(i,function(r){return _u(e,t,r)})},Im=[].slice,uM=function(e,t){return e&&Xr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Xr(e[0]))&&!e.nodeType&&e!==Dr},aC=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Rn(r)&&!t||uM(r,1)?(s=i).push.apply(s,or(r)):i.push(r)})||i},or=function(e,t,i){return Vt&&!t&&Vt.selector?Vt.selector(e):Rn(e)&&!i&&(Pm||!El())?Im.call((t||W0).querySelectorAll(e),0):$n(e)?aC(e,i):uM(e)?Im.call(e,0):e?[e]:[]},Um=function(e){return e=or(e)[0]||eu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return or(t,i.querySelectorAll?i:i===e?eu("Invalid scope")||W0.createElement("div"):e)}},fM=function(e){return e.sort(function(){return .5-Math.random()})},dM=function(e){if(Qt(e))return e;var t=Xr(e)?e:{each:e},i=qo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,h=r;return Rn(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,d,m){var v=(m||t).length,_=o[v],p,g,y,M,A,T,w,S,C;if(!_){if(C=t.grid==="auto"?0:(t.grid||[1,sr])[1],!C){for(w=-sr;w<(w=m[C++].getBoundingClientRect().left)&&C<v;);C<v&&C--}for(_=o[v]=[],p=l?Math.min(C,v)*u-.5:r%C,g=C===sr?0:l?v*h/C-.5:r/C|0,w=0,S=sr,T=0;T<v;T++)y=T%C-p,M=g-(T/C|0),_[T]=A=c?Math.abs(c==="y"?M:y):q1(y*y+M*M),A>w&&(w=A),A<S&&(S=A);r==="random"&&fM(_),_.max=w-S,_.min=S,_.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(C>v?v-1:c?c==="y"?v/C:C:Math.max(C,v/C))||0)*(r==="edges"?-1:1),_.b=v<0?s-v:s,_.u=Xn(t.amount||t.each)||0,i=i&&v<0?yC(i):i}return v=(_[f]-_.min)/_.max||0,Gt(_.b+(i?i(v):v)*_.v)+_.u}},Fm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Gt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(xs(i)?0:Xn(i))}},hM=function(e,t){var i=$n(e),r,s;return!i&&Xr(e)&&(r=i=e.radius||sr,e.values?(e=or(e.values),(s=!xs(e[0]))&&(r*=r)):e=Fm(e.increment)),vo(t,i?Qt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=sr,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?e[u]:o,s||u===o||xs(o)?u:u+Xn(o)}:Fm(e))},pM=function(e,t,i,r){return vo($n(e)?!t:i===!0?!!(i=0):!r,function(){return $n(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},lC=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},cC=function(e,t){return function(i){return e(parseFloat(i))+(t||Xn(i))}},uC=function(e,t,i){return gM(e,t,0,1,i)},mM=function(e,t,i){return vo(i,function(r){return e[~~t(r)]})},fC=function n(e,t,i){var r=t-e;return $n(e)?mM(e,n(0,e.length),t):vo(i,function(s){return(r+(s-e)%r)%r+e})},dC=function n(e,t,i){var r=t-e,s=r*2;return $n(e)?mM(e,n(0,e.length-1),t):vo(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},nu=function(e){return e.replace(jA,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(XA);return pM(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},gM=function(e,t,i,r,s){var o=t-e,a=r-i;return vo(s,function(l){return i+((l-e)/o*a||0)})},hC=function n(e,t,i,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Rn(e),a={},l,c,u,h,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if($n(e)&&!$n(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(n(e[c-1],e[c]));h--,s=function(m){m*=h;var v=Math.min(f,~~m);return u[v](m-v)},i=t}else r||(e=yl($n(e)?[]:{},e));if(!u){for(l in t)K0.call(a,e,l,"get",t[l]);s=function(m){return e_(m,a)||(o?e.p:e)}}}return vo(i,s)},Kv=function(e,t,i){var r=e.labels,s=sr,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Bi=function(e,t,i){var r=e.vars,s=r[t],o=Vt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&io.length&&Td(),a&&(Vt=a),u=l?s.apply(c,l):s.call(c),Vt=o,u},rc=function(e){return lo(e),e.scrollTrigger&&e.scrollTrigger.kill(!!In),e.progress()<1&&Bi(e,"onInterrupt"),e},Ka,_M=[],vM=function(e){if(e)if(e=!e.name&&e.default||e,G0()||e.headless){var t=e.name,i=Qt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:tu,render:e_,add:K0,kill:PC,modifier:RC,rawVars:0},o={targetTest:0,get:0,getSetter:J0,aliases:{},register:0};if(El(),e!==r){if(Di[t])return;ji(r,ji(wd(e,s),o)),yl(r.prototype,yl(s,wd(e,o))),Di[r.prop=t]=r,e.targetTest&&(Bf.push(r),X0[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}eM(t,r),e.register&&e.register(Ti,r,Si)}else _M.push(e)},Pt=255,sc={aqua:[0,Pt,Pt],lime:[0,Pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pt],navy:[0,0,128],white:[Pt,Pt,Pt],olive:[128,128,0],yellow:[Pt,Pt,0],orange:[Pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pt,0,0],pink:[Pt,192,203],cyan:[0,Pt,Pt],transparent:[Pt,Pt,Pt,0]},Gh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Pt+.5|0},xM=function(e,t,i){var r=e?xs(e)?[e>>16,e>>8&Pt,e&Pt]:0:sc.black,s,o,a,l,c,u,h,f,d,m;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),sc[e])r=sc[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Pt,r&Pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Pt,e&Pt]}else if(e.substr(0,3)==="hsl"){if(r=m=e.match(jv),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Gh(l+1/3,s,o),r[1]=Gh(l,s,o),r[2]=Gh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(K1),i&&r.length<4&&(r[3]=1),r}else r=e.match(jv)||sc.transparent;r=r.map(Number)}return t&&!m&&(s=r[0]/Pt,o=r[1]/Pt,a=r[2]/Pt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},yM=function(e){var t=[],i=[],r=-1;return e.split(ro).forEach(function(s){var o=s.match($a)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},Zv=function(e,t,i){var r="",s=(e+r).match(ro),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=xM(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=yM(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(ro,"1").split($a),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(ro),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},ro=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in sc)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),pC=/hsl[a]?\(/,SM=function(e){var t=e.join(" "),i;if(ro.lastIndex=0,ro.test(t))return i=pC.test(t),e[1]=Zv(e[1],i),e[0]=Zv(e[0],i,yM(e[1])),!0},iu,Ui=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,h,f,d,m=function v(_){var p=n()-r,g=_===!0,y,M,A,T;if((p>e||p<0)&&(i+=p-t),r+=p,A=r-i,y=A-o,(y>0||g)&&(T=++h.frame,f=A-h.time*1e3,h.time=A=A/1e3,o+=y+(y>=s?4:s-y),M=1),g||(l=c(v)),M)for(d=0;d<a.length;d++)a[d](A,f,T,_)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){Q1&&(!Pm&&G0()&&(Dr=Pm=window,W0=Dr.document||{},Wi.gsap=Ti,(Dr.gsapVersions||(Dr.gsapVersions=[])).push(Ti.version),J1(Ed||Dr.GreenSockGlobals||!Dr.gsap&&Dr||{}),_M.forEach(vM)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(_){return setTimeout(_,o-h.time*1e3+1|0)},iu=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),iu=0,c=tu},lagSmoothing:function(_,p){e=_||1/0,t=Math.min(p||33,e)},fps:function(_){s=1e3/(_||240),o=h.time*1e3+s},add:function(_,p,g){var y=p?function(M,A,T,w){_(M,A,T,w),h.remove(y)}:_;return h.remove(_),a[g?"unshift":"push"](y),El(),y},remove:function(_,p){~(p=a.indexOf(_))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h}(),El=function(){return!iu&&Ui.wake()},gt={},mC=/^[\d.\-M][\d.\-,\s]/,gC=/["']/g,_C=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(gC,"").trim():+c,r=l.substr(a+1).trim();return t},vC=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},xC=function(e){var t=(e+"").split("("),i=gt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[_C(t[1])]:vC(e).split(",").map(rM)):gt._CE&&mC.test(e)?gt._CE("",e):i},yC=function(e){return function(t){return 1-e(1-t)}},qo=function(e,t){return e&&(Qt(e)?e:gt[e]||xC(e))||t},fa=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return yi(e,function(a){gt[a]=Wi[a]=s,gt[o=a.toLowerCase()]=i;for(var l in s)gt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=gt[a+"."+l]=s[l]}),s},MM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Wh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Rm*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*WA((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:MM(a);return s=Rm/s,l.config=function(c,u){return n(e,c,u)},l},jh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:MM(i);return r.config=function(s){return n(e,s)},r};yi("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;fa(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});gt.Linear.easeNone=gt.none=gt.Linear.easeIn;fa("Elastic",Wh("in"),Wh("out"),Wh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};fa("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);fa("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});fa("Circ",function(n){return-(q1(1-n*n)-1)});fa("Sine",function(n){return n===1?1:-GA(n*VA)+1});fa("Back",jh("in"),jh("out"),jh());gt.SteppedEase=gt.steps=Wi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Nt;return function(a){return((r*_u(0,o,a)|0)+s)*i}}};Jc.ease=gt["quad.out"];yi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Y0+=n+","+n+"Params,"});var EM=function(e,t){this.id=HA++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:nM,this.set=t?t.getSetter:J0},ru=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ml(this,+t.duration,1,1),this.data=t.data,Vt&&(this._ctx=Vt,Vt.data.push(this)),iu||Ui.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ml(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(El(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(oh(this,i),!s._dp||s.parent||aM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Fr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Nt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),iM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+qv(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+qv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Sl(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Nt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Ad(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Nt?0:this._rts,this.totalTime(_u(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),sh(this),eC(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(El(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Nt&&(this._tTime-=Nt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Gt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Fr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(xi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ad(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=KA);var r=In;return In=i,$0(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),In=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,$v(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,$v(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Zi(this,i),xi(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,xi(r)),this._dur||(this._zTime=-Nt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Nt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Nt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Nt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Qt(i)?i:sM,l=function(){var u=r.then;r.then=null,s&&s(),Qt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){rc(this)},n}();ji(ru.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Nt,_prom:0,_ps:!1,_rts:1});var pi=function(n){Y1(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=xi(i.sortChildren),jt&&Fr(i.parent||jt,ns(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&lM(ns(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Tc(0,arguments,this),this},t.from=function(r,s,o){return Tc(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Tc(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Ec(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new dn(r,s,Zi(this,o),1),this},t.call=function(r,s,o){return Fr(this,dn.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new dn(r,o,Zi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Ec(o).immediateRender=xi(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,Ec(a).immediateRender=xi(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Gt(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,d,m,v,_,p,g,y,M,A,T,w;if(this!==jt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,M=this._start,y=this._ts,p=!y,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,_=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,s,o);if(f=Gt(u%_),u===l?(v=this._repeat,f=c):(A=Gt(u/_),v=~~A,v&&v===A&&(f=c,v--),f>c&&(f=c)),A=Sl(this._tTime,_),!a&&this._tTime&&A!==v&&this._tTime-A*_-this._dur<=0&&(A=v),T&&v&1&&(f=c-f,w=1),v!==A&&!this._lock){var S=T&&A&1,C=S===(T&&v&1);if(v<A&&(S=!S),a=S?0:u%c?c:u,this._lock=1,this.render(a||(w?0:Gt(v*_)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Bi(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,A=v),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,C&&(this._lock=2,a=S?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=rC(this,Gt(a),Gt(f)),g&&(u-=f-(f=g._start))),this._tTime=u,this._time=f,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!A&&(Bi(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(d=this._first;d;){if(m=d._next,(d._act||f>=d._start)&&d._ts&&g!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){g=0,m&&(u+=this._zTime=-Nt);break}}d=m}else{d=this._last;for(var R=r<0?r:f;d;){if(m=d._prev,(d._act||R<=d._end)&&d._ts&&g!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(R-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(R-d._start)*d._ts,s,o||In&&$0(d)),f!==this._time||!this._ts&&!p){g=0,m&&(u+=this._zTime=R?-Nt:Nt);break}}d=m}}if(g&&!s&&(this.pause(),g.render(f>=a?0:-Nt)._zTime=f>=a?1:-1,this._ts))return this._start=M,sh(this),this.render(r,s,o);this._onUpdate&&!s&&Bi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(M===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&lo(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Bi(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(xs(s)||(s=Zi(this,s,r)),!(r instanceof ru)){if($n(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Rn(r))return this.addLabel(r,s);if(Qt(r))r=dn.delayedCall(0,r);else return this}return this!==r?Fr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-sr);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof dn?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Rn(r)?this.removeLabel(r):Qt(r)?this.killTweensOf(r):(r.parent===this&&rh(this,r),r===this._recent&&(this._recent=this._last),Yo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Gt(Ui.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Zi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=dn.delayedCall(0,s||tu,o);return a.data="isPause",this._hasPause=1,Fr(this,a,Zi(this,r))},t.removePause=function(r){var s=this._first;for(r=Zi(this,r);s;)s._start===r&&s.data==="isPause"&&lo(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Hs!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=or(r),l=this._first,c=xs(s),u;l;)l instanceof dn?ZA(l._targets,a)&&(c?(!Hs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Zi(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,m=dn.to(o,ji({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Nt,onStart:function(){if(o.pause(),!d){var _=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==_&&Ml(m,_,0,1).render(m._time,!0,!0),d=1}u&&u.apply(m,h||[])}},s));return f?m.render(0):m},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,ji({startAt:{time:Zi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Kv(this,Zi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Kv(this,Zi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Nt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=Gt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Yo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Yo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=sr,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Fr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Gt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ml(o,o===jt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(jt._ts&&(iM(jt,Ad(r,jt)),tM=Ui.frame),Ui.frame>=Xv){Xv+=Hi.autoSleep||120;var s=jt._first;if((!s||!s._ts)&&Hi.autoSleep&&Ui._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ui.sleep()}}},e}(ru);ji(pi.prototype,{_lock:0,_hasPause:0,_forcing:0});var SC=function(e,t,i,r,s,o,a){var l=new Si(this._pt,e,t,0,1,RM,null,s),c=0,u=0,h,f,d,m,v,_,p,g;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=nu(r)),o&&(g=[i,r],o(g,e,t),i=g[0],r=g[1]),f=i.match(Vh)||[];h=Vh.exec(r);)m=h[0],v=r.substring(c,h.index),d?d=(d+1)%5:v.substr(-5)==="rgba("&&(d=1),m!==f[u++]&&(_=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:v||u===1?v:",",s:_,c:m.charAt(1)==="="?rl(_,m)-_:parseFloat(m)-_,m:d&&d<4?Math.round:0},c=Vh.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Z1.test(r)||p)&&(l.e=0),this._pt=l,l},K0=function(e,t,i,r,s,o,a,l,c,u){Qt(r)&&(r=r(s||0,e,o));var h=e[t],f=i!=="get"?i:Qt(h)?c?e[t.indexOf("set")||!Qt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Qt(h)?c?AC:CM:Q0,m;if(Rn(r)&&(~r.indexOf("random(")&&(r=nu(r)),r.charAt(1)==="="&&(m=rl(f,r)+(Xn(f)||0),(m||m===0)&&(r=m))),!u||f!==r||Om)return!isNaN(f*r)&&r!==""?(m=new Si(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?bC:bM,0,d),c&&(m.fp=c),a&&m.modifier(a,this,e),this._pt=m):(!h&&!(t in e)&&j0(t,r),SC.call(this,e,t,f,r,d,l||Hi.stringFilter,c))},MC=function(e,t,i,r,s){if(Qt(e)&&(e=wc(e,s,t,i,r)),!Xr(e)||e.style&&e.nodeType||$n(e)||$1(e))return Rn(e)?wc(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=wc(e[a],s,t,i,r);return o},TM=function(e,t,i,r,s,o){var a,l,c,u;if(Di[e]&&(a=new Di[e]).init(s,a.rawVars?t[e]:MC(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new Si(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Ka))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Hs,Om,Z0=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,d=r.autoRevert,m=e._dur,v=e._startAt,_=e._targets,p=e.parent,g=p&&p.data==="nested"?p.vars.targets:_,y=e._overwrite==="auto"&&!V0,M=e.timeline,A=r.easeReverse||h,T,w,S,C,R,D,L,V,G,I,B,F,O;if(M&&(!f||!s)&&(s="none"),e._ease=qo(s,Jc.ease),e._rEase=A&&(qo(A)||e._ease),e._from=!M&&!!r.runBackwards,e._from&&(e.ratio=1),!M||f&&!r.stagger){if(V=_[0]?Xo(_[0]).harness:0,F=V&&r[V.prop],T=wd(r,X0),v&&(v._zTime<0&&v.progress(1),t<0&&u&&a&&!d?v.render(-1,!0):v.revert(u&&m?kf:$A),v._lazy=0),o){if(lo(e._startAt=dn.set(_,ji({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!v&&xi(l),startAt:null,delay:0,onUpdate:c&&function(){return Bi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(In||!a&&!d)&&e._startAt.revert(kf),a&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&m&&!v){if(t&&(a=!1),S=ji({overwrite:!1,data:"isFromStart",lazy:a&&!v&&xi(l),immediateRender:a,stagger:0,parent:p},T),F&&(S[V.prop]=F),lo(e._startAt=dn.set(_,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(In?e._startAt.revert(kf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Nt,Nt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&xi(l)||l&&!m,w=0;w<_.length;w++){if(R=_[w],L=R._gsap||q0(_)[w]._gsap,e._ptLookup[w]=I={},Nm[L.id]&&io.length&&Td(),B=g===_?w:g.indexOf(R),V&&(G=new V).init(R,F||T,e,B,g)!==!1&&(e._pt=C=new Si(e._pt,R,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(X){I[X]=C}),G.priority&&(D=1)),!V||F)for(S in T)Di[S]&&(G=TM(S,T,e,B,R,g))?G.priority&&(D=1):I[S]=C=K0.call(e,R,S,"get",T[S],B,g,0,r.stringFilter);e._op&&e._op[w]&&e.kill(R,e._op[w]),y&&e._pt&&(Hs=e,jt.killTweensOf(R,I,e.globalTime(t)),O=!e.parent,Hs=0),e._pt&&l&&(Nm[L.id]=1)}D&&PM(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!O,f&&t<=0&&M.render(sr,!0,!0)},EC=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Om=1,e.vars[t]="+=0",Z0(e,a),Om=0,l?eu(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,h.e&&(h.e=rn(i)+Xn(h.e)),h.b&&(h.b=u.s+Xn(h.b))},TC=function(e,t){var i=e[0]?Xo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=yl({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},wC=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if($n(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},wc=function(e,t,i,r,s){return Qt(e)?e.call(t,i,r,s):Rn(e)&&~e.indexOf("random(")?nu(e):e},wM=Y0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",AM={};yi(wM+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return AM[n]=1});var dn=function(n){Y1(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Ec(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,m=l.keyframes,v=l.defaults,_=l.scrollTrigger,p=r.parent||jt,g=($n(i)||$1(i)?xs(i[0]):"length"in r)?[i]:or(i),y,M,A,T,w,S,C,R;if(a._targets=g.length?q0(g):eu("GSAP target "+i+" not found. https://gsap.com",!Hi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,m||f||zu(c)||zu(u)){r=a.vars;var D=r.easeReverse||r.yoyoEase;if(y=a.timeline=new pi({data:"nested",defaults:v||{},targets:p&&p.data==="nested"?p.vars.targets:g}),y.kill(),y.parent=y._dp=ns(a),y._start=0,f||zu(c)||zu(u)){if(T=g.length,C=f&&dM(f),Xr(f))for(w in f)~wM.indexOf(w)&&(R||(R={}),R[w]=f[w]);for(M=0;M<T;M++)A=wd(r,AM),A.stagger=0,D&&(A.easeReverse=D),R&&yl(A,R),S=g[M],A.duration=+wc(c,ns(a),M,S,g),A.delay=(+wc(u,ns(a),M,S,g)||0)-a._delay,!f&&T===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),y.to(S,A,C?C(M,S,g):0),y._ease=gt.none;y.duration()?c=u=0:a.timeline=0}else if(m){Ec(ji(y.vars.defaults,{ease:"none"})),y._ease=qo(m.ease||r.ease||"none");var L=0,V,G,I;if($n(m))m.forEach(function(B){return y.to(g,B,">")}),y.duration();else{A={};for(w in m)w==="ease"||w==="easeEach"||wC(w,m[w],A,m.easeEach);for(w in A)for(V=A[w].sort(function(B,F){return B.t-F.t}),L=0,M=0;M<V.length;M++)G=V[M],I={ease:G.e,duration:(G.t-(M?V[M-1].t:0))/100*c},I[w]=G.v,y.to(g,I,L),L+=I.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return d===!0&&!V0&&(Hs=ns(a),jt.killTweensOf(g),Hs=0),Fr(p,ns(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!m&&a._start===Gt(p._time)&&xi(h)&&tC(ns(a))&&p.data!=="nested")&&(a._tTime=-Nt,a.render(Math.max(0,-u)||0)),_&&lM(ns(a),_),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-Nt&&!u?l:r<Nt?0:r,f,d,m,v,_,p,g,y;if(!c)iC(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,y=this.timeline,this._repeat){if(v=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(v*100+r,s,o);if(f=Gt(h%v),h===l?(m=this._repeat,f=c):(_=Gt(h/v),m=~~_,m&&m===_?(f=c,m--):f>c&&(f=c)),p=this._yoyo&&m&1,p&&(f=c-f),_=Sl(this._tTime,v),f===a&&!o&&this._initted&&m===_)return this._tTime=h,this;m!==_&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==v&&this._initted&&(this._lock=o=1,this.render(Gt(v*m),!0).invalidate()._lock=0)}if(!this._initted){if(cM(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==_))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var M=f<a;if(M!==this._inv){var A=M?a:c-a;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=A?(M?-1:1)/A:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=g=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=g=this._ease(f/c);if(this._from&&(this.ratio=g=1-g),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!_&&(Bi(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(g,d.d),d=d._next;y&&y.render(r<0?r:y._dur*y._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Dm(this,r,s,o),Bi(this,"onUpdate")),this._repeat&&m!==_&&this.vars.onRepeat&&!s&&this.parent&&Bi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Dm(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&lo(this,1),!s&&!(u&&!a)&&(h||a||p)&&(Bi(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){iu||Ui.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Z0(this,c),u=this._ease(c/this._dur),EC(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(oh(this,0),this.parent||oM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?rc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!In),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Hs&&Hs.vars.overwrite!==!0)._first||rc(this),this.parent&&o!==this.timeline.totalDuration()&&Ml(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?or(r):a,c=this._ptLookup,u=this._pt,h,f,d,m,v,_,p;if((!s||s==="all")&&JA(a,l))return s==="all"&&(this._pt=0),rc(this);for(h=this._op=this._op||[],s!=="all"&&(Rn(s)&&(v={},yi(s,function(g){return v[g]=1}),s=v),s=TC(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,m=f,d={}):(d=h[p]=h[p]||{},m=s);for(v in m)_=f&&f[v],_&&((!("kill"in _.d)||_.d.kill(v)===!0)&&rh(this,_,"_pt"),delete f[v]),d!=="all"&&(d[v]=1)}return this._initted&&!this._pt&&u&&rc(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Tc(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Tc(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return jt.killTweensOf(r,s,o)},e}(ru);ji(dn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});yi("staggerTo,staggerFrom,staggerFromTo",function(n){dn[n]=function(){var e=new pi,t=Im.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Q0=function(e,t,i){return e[t]=i},CM=function(e,t,i){return e[t](i)},AC=function(e,t,i,r){return e[t](r.fp,i)},CC=function(e,t,i){return e.setAttribute(t,i)},J0=function(e,t){return Qt(e[t])?CM:H0(e[t])&&e.setAttribute?CC:Q0},bM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},bC=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},RM=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},e_=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},RC=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},PC=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?rh(this,t,"_pt"):t.dep||(i=1),t=r;return!i},NC=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},PM=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},Si=function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||bM,this.d=l||this,this.set=c||Q0,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=NC,this.m=i,this.mt=s,this.tween=r},n}();yi(Y0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return X0[n]=1});Wi.TweenMax=Wi.TweenLite=dn;Wi.TimelineLite=Wi.TimelineMax=pi;jt=new pi({sortChildren:!1,defaults:Jc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Hi.stringFilter=SM;var $o=[],zf={},DC=[],Qv=0,LC=0,Xh=function(e){return(zf[e]||DC).map(function(t){return t()})},km=function(){var e=Date.now(),t=[];e-Qv>2&&(Xh("matchMediaInit"),$o.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=Dr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),Xh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Qv=e,Xh("matchMedia"))},NM=function(){function n(t,i){this.selector=i&&Um(i),this.data=[],this._r=[],this.isReverted=!1,this.id=LC++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Qt(i)&&(s=r,r=i,i=Qt);var o=this,a=function(){var c=Vt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Um(s)),Vt=o,h=r.apply(o,arguments),Qt(h)&&o._r.push(h),Vt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,i===Qt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Vt;Vt=null,i(this),Vt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof dn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof pi?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof dn)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=$o.length;o--;)$o[o].id===this.id&&$o.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),IC=function(){function n(t){this.contexts=[],this.scope=t,Vt&&Vt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Xr(i)||(i={matches:i});var o=new NM(0,s||this.scope),a=o.conditions={},l,c,u;Vt&&!o.selector&&(o.selector=Vt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=Dr.matchMedia(i[c]),l&&($o.indexOf(o)<0&&$o.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(km):l.addEventListener("change",km)));return u&&r(o,function(h){return o.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Cd={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return vM(r)})},timeline:function(e){return new pi(e)},getTweensOf:function(e,t){return jt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Rn(e)&&(e=or(e)[0]);var s=Xo(e||{}).get,o=i?sM:rM;return i==="native"&&(i=""),e&&(t?o((Di[t]&&Di[t].get||s)(e,t,i,r)):function(a,l,c){return o((Di[a]&&Di[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=or(e),e.length>1){var r=e.map(function(u){return Ti.quickSetter(u,t,i)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var o=Di[t],a=Xo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Ka._pt=0,h.init(e,i?u+i:u,Ka,0,[e]),h.render(1,h),Ka._pt&&e_(1,Ka)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=Ti.to(e,ji((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return jt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=qo(e.ease,Jc.ease)),Yv(Jc,e||{})},config:function(e){return Yv(Hi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Di[a]&&!Wi[a]&&eu(t+" effect requires "+a+" plugin.")}),Hh[t]=function(a,l,c){return i(or(a),ji(l||{},s),c)},o&&(pi.prototype[t]=function(a,l,c){return this.add(Hh[t](a,Xr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){gt[e]=qo(t)},parseEase:function(e,t){return arguments.length?qo(e,t):gt},getById:function(e){return jt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new pi(e),r,s;for(i.smoothChildTiming=xi(e.smoothChildTiming),jt.remove(i),i._dp=0,i._time=i._tTime=jt._time,r=jt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof dn&&r.vars.onComplete===r._targets[0]))&&Fr(i,r,r._start-r._delay),r=s;return Fr(jt,i,0),i},context:function(e,t){return e?new NM(e,t):Vt},matchMedia:function(e){return new IC(e)},matchMediaRefresh:function(){return $o.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||km()},addEventListener:function(e,t){var i=zf[e]||(zf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=zf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:fC,wrapYoyo:dC,distribute:dM,random:pM,snap:hM,normalize:uC,getUnit:Xn,clamp:oC,splitColor:xM,toArray:or,selector:Um,mapRange:gM,pipe:lC,unitize:cC,interpolate:hC,shuffle:fM},install:J1,effects:Hh,ticker:Ui,updateRoot:pi.updateRoot,plugins:Di,globalTimeline:jt,core:{PropTween:Si,globals:eM,Tween:dn,Timeline:pi,Animation:ru,getCache:Xo,_removeLinkedListItem:rh,reverting:function(){return In},context:function(e){return e&&Vt&&(Vt.data.push(e),e._ctx=Vt),Vt},suppressOverwrites:function(e){return V0=e}}};yi("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Cd[n]=dn[n]});Ui.add(pi.updateRoot);Ka=Cd.to({},{duration:0});var UC=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},FC=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=UC(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Yh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Rn(s)&&(l={},yi(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}FC(a,s)}}}},Ti=Cd.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)In?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Yh("roundProps",Fm),Yh("modifiers"),Yh("snap",hM))||Cd;dn.version=pi.version=Ti.version="3.15.0";Q1=1;G0()&&El();gt.Power0;gt.Power1;gt.Power2;gt.Power3;gt.Power4;gt.Linear;gt.Quad;gt.Cubic;gt.Quart;gt.Quint;gt.Strong;gt.Elastic;gt.Back;gt.SteppedEase;gt.Bounce;gt.Sine;gt.Expo;gt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Jv,Gs,sl,t_,Bo,ex,n_,OC=function(){return typeof window<"u"},ys={},Po=180/Math.PI,ol=Math.PI/180,_a=Math.atan2,tx=1e8,i_=/([A-Z])/g,kC=/(left|right|width|margin|padding|x)/i,BC=/[\s,\(]\S/,Or={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Bm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zC=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},VC=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},HC=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},GC=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},DM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},LM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},WC=function(e,t,i){return e.style[t]=i},jC=function(e,t,i){return e.style.setProperty(t,i)},XC=function(e,t,i){return e._gsap[t]=i},YC=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},qC=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},$C=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Xt="transform",Mi=Xt+"Origin",KC=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in ys&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Or[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=rs(r,a)}):this.tfm[e]=o.x?o[e]:rs(r,e),e===Mi&&(this.tfm.zOrigin=o.zOrigin);else return Or.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Xt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Mi,t,"")),e=Xt}(s||t)&&this.props.push(e,t,s[e])},IM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ZC=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(i_,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=n_(),(!s||!s.isStart)&&!i[Xt]&&(IM(i),r.zOrigin&&i[Mi]&&(i[Mi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},UM=function(e,t){var i={target:e,props:[],revert:ZC,save:KC};return e._gsap||Ti.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},FM,zm=function(e,t){var i=Gs.createElementNS?Gs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Gs.createElement(e);return i&&i.style?i:Gs.createElement(e)},zi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(i_,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Tl(t)||t,1)||""},nx="O,Moz,ms,Ms,Webkit".split(","),Tl=function(e,t,i){var r=t||Bo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(nx[o]+e in s););return o<0?null:(o===3?"ms":o>=0?nx[o]:"")+e},Vm=function(){OC()&&window.document&&(Jv=window,Gs=Jv.document,sl=Gs.documentElement,Bo=zm("div")||{style:{}},zm("div"),Xt=Tl(Xt),Mi=Xt+"Origin",Bo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",FM=!!Tl("perspective"),n_=Ti.core.reverting,t_=1)},ix=function(e){var t=e.ownerSVGElement,i=zm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),sl.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),sl.removeChild(i),s},rx=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},OM=function(e){var t,i;try{t=e.getBBox()}catch{t=ix(e),i=1}return t&&(t.width||t.height)||i||(t=ix(e)),t&&!t.width&&!t.x&&!t.y?{x:+rx(e,["x","cx","x1"])||0,y:+rx(e,["y","cy","y1"])||0,width:0,height:0}:t},kM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&OM(e))},co=function(e,t){if(t){var i=e.style,r;t in ys&&t!==Mi&&(t=Xt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(i_,"-$1").toLowerCase())):i.removeAttribute(t)}},Ws=function(e,t,i,r,s,o){var a=new Si(e._pt,t,i,0,1,o?LM:DM);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},sx={deg:1,rad:1,turn:1},QC={grid:1,flex:1},uo=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Bo.style,l=kC.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",d=r==="%",m,v,_,p;if(r===o||!s||sx[r]||sx[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),p=e.getCTM&&kM(e),(d||o==="%")&&(ys[t]||~t.indexOf("adius")))return m=p?e.getBBox()[l?"width":"height"]:e[u],rn(d?s/m*h:s/100*m);if(a[l?"width":"height"]=h+(f?o:r),v=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===Gs||!v.appendChild)&&(v=Gs.body),_=v._gsap,_&&d&&_.width&&l&&_.time===Ui.time&&!_.uncache)return rn(s/_.width*h);if(d&&(t==="height"||t==="width")){var g=e.style[t];e.style[t]=h+r,m=e[u],g?e.style[t]=g:co(e,t)}else(d||o==="%")&&!QC[zi(v,"display")]&&(a.position=zi(e,"position")),v===e&&(a.position="static"),v.appendChild(Bo),m=Bo[u],v.removeChild(Bo),a.position="absolute";return l&&d&&(_=Xo(v),_.time=Ui.time,_.width=v[u]),rn(f?m*s/h:m&&s?h/m*s:0)},rs=function(e,t,i,r){var s;return t_||Vm(),t in Or&&t!=="transform"&&(t=Or[t],~t.indexOf(",")&&(t=t.split(",")[0])),ys[t]&&t!=="transform"?(s=ou(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Rd(zi(e,Mi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=bd[t]&&bd[t](e,t,i)||zi(e,t)||nM(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?uo(e,t,s,i)+i:s},JC=function(e,t,i,r){if(!i||i==="none"){var s=Tl(t,e,1),o=s&&zi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=zi(e,"borderTopColor"))}var a=new Si(this._pt,e.style,t,0,1,RM),l=0,c=0,u,h,f,d,m,v,_,p,g,y,M,A;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=zi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(v=e.style[t],e.style[t]=r,r=zi(e,t)||r,v?e.style[t]=v:co(e,t)),u=[i,r],SM(u),i=u[0],r=u[1],f=i.match($a)||[],A=r.match($a)||[],A.length){for(;h=$a.exec(r);)_=h[0],g=r.substring(l,h.index),m?m=(m+1)%5:(g.substr(-5)==="rgba("||g.substr(-5)==="hsla(")&&(m=1),_!==(v=f[c++]||"")&&(d=parseFloat(v)||0,M=v.substr((d+"").length),_.charAt(1)==="="&&(_=rl(d,_)+M),p=parseFloat(_),y=_.substr((p+"").length),l=$a.lastIndex-y.length,y||(y=y||Hi.units[t]||M,l===r.length&&(r+=y,a.e+=y)),M!==y&&(d=uo(e,t,v,y)||0),a._pt={_next:a._pt,p:g||c===1?g:",",s:d,c:p-d,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?LM:DM;return Z1.test(r)&&(a.e=0),this._pt=a,a},ox={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},eb=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=ox[i]||i,t[1]=ox[r]||r,t.join(" ")},tb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ys[a]&&(l=1,a=a==="transformOrigin"?Mi:Xt),co(i,a);l&&(co(i,Xt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",ou(i,1),o.uncache=1,IM(r)))}},bd={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Si(e._pt,t,i,0,0,tb);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},su=[1,0,0,1,0,0],BM={},zM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ax=function(e){var t=zi(e,Xt);return zM(t)?su:t.substr(7).match(K1).map(rn)},r_=function(e,t){var i=e._gsap||Xo(e),r=e.style,s=ax(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?su:s):(s===su&&!e.offsetParent&&e!==sl&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,sl.appendChild(e)),s=ax(e),l?r.display=l:co(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):sl.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Hm=function(e,t,i,r,s,o){var a=e._gsap,l=s||r_(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],m=l[1],v=l[2],_=l[3],p=l[4],g=l[5],y=t.split(" "),M=parseFloat(y[0])||0,A=parseFloat(y[1])||0,T,w,S,C;i?l!==su&&(w=d*_-m*v)&&(S=M*(_/w)+A*(-v/w)+(v*g-_*p)/w,C=M*(-m/w)+A*(d/w)-(d*g-m*p)/w,M=S,A=C):(T=OM(e),M=T.x+(~y[0].indexOf("%")?M/100*T.width:M),A=T.y+(~(y[1]||y[0]).indexOf("%")?A/100*T.height:A)),r||r!==!1&&a.smooth?(p=M-c,g=A-u,a.xOffset=h+(p*d+g*v)-p,a.yOffset=f+(p*m+g*_)-g):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=A,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[Mi]="0px 0px",o&&(Ws(o,a,"xOrigin",c,M),Ws(o,a,"yOrigin",u,A),Ws(o,a,"xOffset",h,a.xOffset),Ws(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",M+" "+A)},ou=function(e,t){var i=e._gsap||new EM(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=zi(e,Mi)||"0",u,h,f,d,m,v,_,p,g,y,M,A,T,w,S,C,R,D,L,V,G,I,B,F,O,X,N,te,se,Ce,Ie,be;return u=h=f=v=_=p=g=y=M=0,d=m=1,i.svg=!!(e.getCTM&&kM(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Xt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Xt]!=="none"?l[Xt]:"")),r.scale=r.rotate=r.translate="none"),w=r_(e,i.svg),i.svg&&(i.uncache?(O=e.getBBox(),c=i.xOrigin-O.x+"px "+(i.yOrigin-O.y)+"px",F=""):F=!t&&e.getAttribute("data-svg-origin"),Hm(e,F||c,!!F||i.originIsAbsolute,i.smooth!==!1,w)),A=i.xOrigin||0,T=i.yOrigin||0,w!==su&&(D=w[0],L=w[1],V=w[2],G=w[3],u=I=w[4],h=B=w[5],w.length===6?(d=Math.sqrt(D*D+L*L),m=Math.sqrt(G*G+V*V),v=D||L?_a(L,D)*Po:0,g=V||G?_a(V,G)*Po+v:0,g&&(m*=Math.abs(Math.cos(g*ol))),i.svg&&(u-=A-(A*D+T*V),h-=T-(A*L+T*G))):(be=w[6],Ce=w[7],N=w[8],te=w[9],se=w[10],Ie=w[11],u=w[12],h=w[13],f=w[14],S=_a(be,se),_=S*Po,S&&(C=Math.cos(-S),R=Math.sin(-S),F=I*C+N*R,O=B*C+te*R,X=be*C+se*R,N=I*-R+N*C,te=B*-R+te*C,se=be*-R+se*C,Ie=Ce*-R+Ie*C,I=F,B=O,be=X),S=_a(-V,se),p=S*Po,S&&(C=Math.cos(-S),R=Math.sin(-S),F=D*C-N*R,O=L*C-te*R,X=V*C-se*R,Ie=G*R+Ie*C,D=F,L=O,V=X),S=_a(L,D),v=S*Po,S&&(C=Math.cos(S),R=Math.sin(S),F=D*C+L*R,O=I*C+B*R,L=L*C-D*R,B=B*C-I*R,D=F,I=O),_&&Math.abs(_)+Math.abs(v)>359.9&&(_=v=0,p=180-p),d=rn(Math.sqrt(D*D+L*L+V*V)),m=rn(Math.sqrt(B*B+be*be)),S=_a(I,B),g=Math.abs(S)>2e-4?S*Po:0,M=Ie?1/(Ie<0?-Ie:Ie):0),i.svg&&(F=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!zM(zi(e,Xt)),F&&e.setAttribute("transform",F))),Math.abs(g)>90&&Math.abs(g)<270&&(s?(d*=-1,g+=v<=0?180:-180,v+=v<=0?180:-180):(m*=-1,g+=g<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=rn(d),i.scaleY=rn(m),i.rotation=rn(v)+a,i.rotationX=rn(_)+a,i.rotationY=rn(p)+a,i.skewX=g+a,i.skewY=y+a,i.transformPerspective=M+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Mi]=Rd(c)),i.xOffset=i.yOffset=0,i.force3D=Hi.force3D,i.renderTransform=i.svg?ib:FM?VM:nb,i.uncache=0,i},Rd=function(e){return(e=e.split(" "))[0]+" "+e[1]},qh=function(e,t,i){var r=Xn(t);return rn(parseFloat(t)+parseFloat(uo(e,"x",i+"px",r)))+r},nb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,VM(e,t)},yo="0deg",Wl="0px",So=") ",VM=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,h=i.rotationX,f=i.skewX,d=i.skewY,m=i.scaleX,v=i.scaleY,_=i.transformPerspective,p=i.force3D,g=i.target,y=i.zOrigin,M="",A=p==="auto"&&e&&e!==1||p===!0;if(y&&(h!==yo||u!==yo)){var T=parseFloat(u)*ol,w=Math.sin(T),S=Math.cos(T),C;T=parseFloat(h)*ol,C=Math.cos(T),o=qh(g,o,w*C*-y),a=qh(g,a,-Math.sin(T)*-y),l=qh(g,l,S*C*-y+y)}_!==Wl&&(M+="perspective("+_+So),(r||s)&&(M+="translate("+r+"%, "+s+"%) "),(A||o!==Wl||a!==Wl||l!==Wl)&&(M+=l!==Wl||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+So),c!==yo&&(M+="rotate("+c+So),u!==yo&&(M+="rotateY("+u+So),h!==yo&&(M+="rotateX("+h+So),(f!==yo||d!==yo)&&(M+="skew("+f+", "+d+So),(m!==1||v!==1)&&(M+="scale("+m+", "+v+So),g.style[Xt]=M||"translate(0, 0)"},ib=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,h=i.scaleX,f=i.scaleY,d=i.target,m=i.xOrigin,v=i.yOrigin,_=i.xOffset,p=i.yOffset,g=i.forceCSS,y=parseFloat(o),M=parseFloat(a),A,T,w,S,C;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ol,c*=ol,A=Math.cos(l)*h,T=Math.sin(l)*h,w=Math.sin(l-c)*-f,S=Math.cos(l-c)*f,c&&(u*=ol,C=Math.tan(c-u),C=Math.sqrt(1+C*C),w*=C,S*=C,u&&(C=Math.tan(u),C=Math.sqrt(1+C*C),A*=C,T*=C)),A=rn(A),T=rn(T),w=rn(w),S=rn(S)):(A=h,S=f,T=w=0),(y&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(y=uo(d,"x",o,"px"),M=uo(d,"y",a,"px")),(m||v||_||p)&&(y=rn(y+m-(m*A+v*w)+_),M=rn(M+v-(m*T+v*S)+p)),(r||s)&&(C=d.getBBox(),y=rn(y+r/100*C.width),M=rn(M+s/100*C.height)),C="matrix("+A+","+T+","+w+","+S+","+y+","+M+")",d.setAttribute("transform",C),g&&(d.style[Xt]=C)},rb=function(e,t,i,r,s){var o=360,a=Rn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Po:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*tx)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*tx)%o-~~(c/o)*o)),e._pt=f=new Si(e._pt,t,i,r,c,zC),f.e=u,f.u="deg",e._props.push(i),f},lx=function(e,t){for(var i in t)e[i]=t[i];return e},sb=function(e,t,i){var r=lx({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,h,f,d,m;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Xt]=t,a=ou(i,1),co(i,Xt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Xt],o[Xt]=t,a=ou(i,1),o[Xt]=c);for(l in ys)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Xn(c),m=Xn(u),h=d!==m?uo(i,l,c,m):parseFloat(c),f=parseFloat(u),e._pt=new Si(e._pt,a,l,h,f-h,Bm),e._pt.u=m||0,e._props.push(l));lx(a,r)};yi("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});bd[e>1?"border"+n:n]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(m){return rs(a,m,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(m,v){return d[m]=f[v]=f[v]||f[(v-1)/2|0]}),a.init(l,d,h)}});var HM={name:"css",register:Vm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,h,f,d,m,v,_,p,g,y,M,A,T,w,S,C;t_||Vm(),this.styles=this.styles||UM(e),S=this.styles.props,this.tween=i;for(v in t)if(v!=="autoRound"&&(u=t[v],!(Di[v]&&TM(v,t,i,r,e,s)))){if(d=typeof u,m=bd[v],d==="function"&&(u=u.call(i,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=nu(u)),m)m(this,e,v,u,i)&&(w=1);else if(v.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(v)+"").trim(),u+="",ro.lastIndex=0,ro.test(c)||(_=Xn(c),p=Xn(u),p?_!==p&&(c=uo(e,v,c,p)+p):_&&(u+=_)),this.add(a,"setProperty",c,u,r,s,0,0,v),o.push(v),S.push(v,0,a[v]);else if(d!=="undefined"){if(l&&v in l?(c=typeof l[v]=="function"?l[v].call(i,r,e,s):l[v],Rn(c)&&~c.indexOf("random(")&&(c=nu(c)),Xn(c+"")||c==="auto"||(c+=Hi.units[v]||Xn(rs(e,v))||""),(c+"").charAt(1)==="="&&(c=rs(e,v))):c=rs(e,v),f=parseFloat(c),g=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),g&&(u=u.substr(2)),h=parseFloat(u),v in Or&&(v==="autoAlpha"&&(f===1&&rs(e,"visibility")==="hidden"&&h&&(f=0),S.push("visibility",0,a.visibility),Ws(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),v!=="scale"&&v!=="transform"&&(v=Or[v],~v.indexOf(",")&&(v=v.split(",")[0]))),y=v in ys,y){if(this.styles.save(v),C=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=zi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=u,u=zi(e,"perspective"),R?e.style.perspective=R:co(e,"perspective")}h=parseFloat(u)}if(M||(A=e._gsap,A.renderTransform&&!t.parseTransform||ou(e,t.parseTransform),T=t.smoothOrigin!==!1&&A.smooth,M=this._pt=new Si(this._pt,a,Xt,0,1,A.renderTransform,A,0,-1),M.dep=1),v==="scale")this._pt=new Si(this._pt,A,"scaleY",A.scaleY,(g?rl(A.scaleY,g+h):h)-A.scaleY||0,Bm),this._pt.u=0,o.push("scaleY",v),v+="X";else if(v==="transformOrigin"){S.push(Mi,0,a[Mi]),u=eb(u),A.svg?Hm(e,u,0,T,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==A.zOrigin&&Ws(this,A,"zOrigin",A.zOrigin,p),Ws(this,a,v,Rd(c),Rd(u)));continue}else if(v==="svgOrigin"){Hm(e,u,1,T,0,this);continue}else if(v in BM){rb(this,A,v,f,g?rl(f,g+u):u);continue}else if(v==="smoothOrigin"){Ws(this,A,"smooth",A.smooth,u);continue}else if(v==="force3D"){A[v]=u;continue}else if(v==="transform"){sb(this,u,e);continue}}else v in a||(v=Tl(v)||v);if(y||(h||h===0)&&(f||f===0)&&!BC.test(u)&&v in a)_=(c+"").substr((f+"").length),h||(h=0),p=Xn(u)||(v in Hi.units?Hi.units[v]:_),_!==p&&(f=uo(e,v,c,p)),this._pt=new Si(this._pt,y?A:a,v,f,(g?rl(f,g+h):h)-f,!y&&(p==="px"||v==="zIndex")&&t.autoRound!==!1?GC:Bm),this._pt.u=p||0,y&&C!==u?(this._pt.b=c,this._pt.e=C,this._pt.r=HC):_!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=VC);else if(v in a)JC.call(this,e,v,c,g?g+u:u);else if(v in e)this.add(e,v,c||e[v],g?g+u:u,r,s);else if(v!=="parseTransform"){j0(v,u);continue}y||(v in a?S.push(v,0,a[v]):typeof e[v]=="function"?S.push(v,2,e[v]()):S.push(v,1,c||e[v])),o.push(v)}}w&&PM(this)},render:function(e,t){if(t.tween._time||!n_())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:rs,aliases:Or,getSetter:function(e,t,i){var r=Or[t];return r&&r.indexOf(",")<0&&(t=r),t in ys&&t!==Mi&&(e._gsap.x||rs(e,"x"))?i&&ex===i?t==="scale"?YC:XC:(ex=i||{})&&(t==="scale"?qC:$C):e.style&&!H0(e.style[t])?WC:~t.indexOf("-")?jC:J0(e,t)},core:{_removeProperty:co,_getMatrix:r_}};Ti.utils.checkPrefix=Tl;Ti.core.getStyleSaver=UM;(function(n,e,t,i){var r=yi(n+","+e+","+t,function(s){ys[s]=1});yi(e,function(s){Hi.units[s]="deg",BM[s]=1}),Or[r[13]]=n+","+e,yi(i,function(s){var o=s.split(":");Or[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");yi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Hi.units[n]="px"});Ti.registerPlugin(HM);var _t=Ti.registerPlugin(HM)||Ti;_t.core.Tween;function ob(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function ab(n,e,t){return e&&ob(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Nn,Vf,Fi,js,Xs,al,GM,No,ll,WM,cs,mr,jM,XM=function(){return Nn||typeof window<"u"&&(Nn=window.gsap)&&Nn.registerPlugin&&Nn},YM=1,Za=[],ut=[],Gr=[],Ac=Date.now,Gm=function(e,t){return t},lb=function(){var e=ll.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,ut),r.push.apply(r,Gr),ut=i,Gr=r,Gm=function(o,a){return t[o](a)}},so=function(e,t){return~Gr.indexOf(e)&&Gr[Gr.indexOf(e)+1][t]},Cc=function(e){return!!~WM.indexOf(e)},Qn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Zn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Vu="scrollLeft",Hu="scrollTop",Wm=function(){return cs&&cs.isPressed||ut.cache++},Pd=function(e,t){var i=function r(s){if(s||s===0){YM&&(Fi.history.scrollRestoration="manual");var o=cs&&cs.isPressed;s=r.v=Math.round(s)||(cs&&cs.iOS?1:0),e(s),r.cacheID=ut.cache,o&&Gm("ss",s)}else(t||ut.cache!==r.cacheID||Gm("ref"))&&(r.cacheID=ut.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},si={s:Vu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Pd(function(n){return arguments.length?Fi.scrollTo(n,_n.sc()):Fi.pageXOffset||js[Vu]||Xs[Vu]||al[Vu]||0})},_n={s:Hu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:si,sc:Pd(function(n){return arguments.length?Fi.scrollTo(si.sc(),n):Fi.pageYOffset||js[Hu]||Xs[Hu]||al[Hu]||0})},di=function(e,t){return(t&&t._ctx&&t._ctx.selector||Nn.utils.toArray)(e)[0]||(typeof e=="string"&&Nn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},cb=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},fo=function(e,t){var i=t.s,r=t.sc;Cc(e)&&(e=js.scrollingElement||Xs);var s=ut.indexOf(e),o=r===_n.sc?1:2;!~s&&(s=ut.push(e)-1),ut[s+o]||Qn(e,"scroll",Wm);var a=ut[s+o],l=a||(ut[s+o]=Pd(so(e,i),!0)||(Cc(e)?r:Pd(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=Nn.getProperty(e,"scrollBehavior")==="smooth"),l},jm=function(e,t,i){var r=e,s=e,o=Ac(),a=o,l=t||50,c=Math.max(500,l*3),u=function(m,v){var _=Ac();v||_-o>l?(s=r,r=m,a=o,o=_):i?r+=m:r=s+(m-s)/(_-a)*(o-a)},h=function(){s=r=i?0:r,a=o=0},f=function(m){var v=a,_=s,p=Ac();return(m||m===0)&&m!==r&&u(m),o===a||p-a>c?0:(r+(i?_:-_))/((i?p:o)-v)*1e3};return{update:u,reset:h,getVelocity:f}},jl=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},cx=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},qM=function(){ll=Nn.core.globals().ScrollTrigger,ll&&ll.core&&lb()},$M=function(e){return Nn=e||XM(),!Vf&&Nn&&typeof document<"u"&&document.body&&(Fi=window,js=document,Xs=js.documentElement,al=js.body,WM=[Fi,js,Xs,al],Nn.utils.clamp,jM=Nn.core.context||function(){},No="onpointerenter"in al?"pointer":"mouse",GM=on.isTouch=Fi.matchMedia&&Fi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Fi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,mr=on.eventTypes=("ontouchstart"in Xs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Xs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return YM=0},500),Vf=1),ll||qM(),Vf};si.op=_n;ut.cache=0;var on=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){Vf||$M(Nn)||console.warn("Please gsap.registerPlugin(Observer)"),ll||qM();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,h=i.onStop,f=i.onStopDelay,d=i.ignore,m=i.wheelSpeed,v=i.event,_=i.onDragStart,p=i.onDragEnd,g=i.onDrag,y=i.onPress,M=i.onRelease,A=i.onRight,T=i.onLeft,w=i.onUp,S=i.onDown,C=i.onChangeX,R=i.onChangeY,D=i.onChange,L=i.onToggleX,V=i.onToggleY,G=i.onHover,I=i.onHoverEnd,B=i.onMove,F=i.ignoreCheck,O=i.isNormalizer,X=i.onGestureStart,N=i.onGestureEnd,te=i.onWheel,se=i.onEnable,Ce=i.onDisable,Ie=i.onClick,be=i.scrollSpeed,K=i.capture,re=i.allowClicks,ce=i.lockAxis,Re=i.onLockAxis;this.target=a=di(a)||Xs,this.vars=i,d&&(d=Nn.utils.toArray(d)),r=r||1e-9,s=s||0,m=m||1,be=be||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Fi.getComputedStyle(al).lineHeight)||22);var Ve,Ne,et,we,We,tt,je,q=this,ft=0,Ht=0,k=i.passive||!u&&i.passive!==!1,nt=fo(a,si),Ke=fo(a,_n),pt=nt(),_e=Ke(),rt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&mr[0]==="pointerdown",P=Cc(a),E=a.ownerDocument||js,H=[0,0,0],Q=[0,0,0],ne=0,me=function(){return ne=Ac()},oe=function(pe,He){return(q.event=pe)&&d&&cb(pe.target,d)||He&&rt&&pe.pointerType!=="touch"||F&&F(pe,He)},Z=function(){q._vx.reset(),q._vy.reset(),Ne.pause(),h&&h(q)},ee=function(){var pe=q.deltaX=cx(H),He=q.deltaY=cx(Q),ae=Math.abs(pe)>=r,Ge=Math.abs(He)>=r;D&&(ae||Ge)&&D(q,pe,He,H,Q),ae&&(A&&q.deltaX>0&&A(q),T&&q.deltaX<0&&T(q),C&&C(q),L&&q.deltaX<0!=ft<0&&L(q),ft=q.deltaX,H[0]=H[1]=H[2]=0),Ge&&(S&&q.deltaY>0&&S(q),w&&q.deltaY<0&&w(q),R&&R(q),V&&q.deltaY<0!=Ht<0&&V(q),Ht=q.deltaY,Q[0]=Q[1]=Q[2]=0),(we||et)&&(B&&B(q),et&&(_&&et===1&&_(q),g&&g(q),et=0),we=!1),tt&&!(tt=!1)&&Re&&Re(q),We&&(te(q),We=!1),Ve=0},xe=function(pe,He,ae){H[ae]+=pe,Q[ae]+=He,q._vx.update(pe),q._vy.update(He),c?Ve||(Ve=requestAnimationFrame(ee)):ee()},Ae=function(pe,He){ce&&!je&&(q.axis=je=Math.abs(pe)>Math.abs(He)?"x":"y",tt=!0),je!=="y"&&(H[2]+=pe,q._vx.update(pe,!0)),je!=="x"&&(Q[2]+=He,q._vy.update(He,!0)),c?Ve||(Ve=requestAnimationFrame(ee)):ee()},ge=function(pe){if(!oe(pe,1)){pe=jl(pe,u);var He=pe.clientX,ae=pe.clientY,Ge=He-q.x,Ue=ae-q.y,$e=q.isDragging;q.x=He,q.y=ae,($e||(Ge||Ue)&&(Math.abs(q.startX-He)>=s||Math.abs(q.startY-ae)>=s))&&(et||(et=$e?2:1),$e||(q.isDragging=!0),Ae(Ge,Ue))}},fe=q.onPress=function(le){oe(le,1)||le&&le.button||(q.axis=je=null,Ne.pause(),q.isPressed=!0,le=jl(le),ft=Ht=0,q.startX=q.x=le.clientX,q.startY=q.y=le.clientY,q._vx.reset(),q._vy.reset(),Qn(O?a:E,mr[1],ge,k,!0),q.deltaX=q.deltaY=0,y&&y(q))},ve=q.onRelease=function(le){if(!oe(le,1)){Zn(O?a:E,mr[1],ge,!0);var pe=!isNaN(q.y-q.startY),He=q.isDragging,ae=He&&(Math.abs(q.x-q.startX)>3||Math.abs(q.y-q.startY)>3),Ge=jl(le);!ae&&pe&&(q._vx.reset(),q._vy.reset(),u&&re&&Nn.delayedCall(.08,function(){if(Ac()-ne>300&&!le.defaultPrevented){if(le.target.click)le.target.click();else if(E.createEvent){var Ue=E.createEvent("MouseEvents");Ue.initMouseEvent("click",!0,!0,Fi,1,Ge.screenX,Ge.screenY,Ge.clientX,Ge.clientY,!1,!1,!1,!1,0,null),le.target.dispatchEvent(Ue)}}})),q.isDragging=q.isGesturing=q.isPressed=!1,h&&He&&!O&&Ne.restart(!0),et&&ee(),p&&He&&p(q),M&&M(q,ae)}},Xe=function(pe){return pe.touches&&pe.touches.length>1&&(q.isGesturing=!0)&&X(pe,q.isDragging)},Ze=function(){return(q.isGesturing=!1)||N(q)},U=function(pe){if(!oe(pe)){var He=nt(),ae=Ke();xe((He-pt)*be,(ae-_e)*be,1),pt=He,_e=ae,h&&Ne.restart(!0)}},ue=function(pe){if(!oe(pe)){pe=jl(pe,u),te&&(We=!0);var He=(pe.deltaMode===1?l:pe.deltaMode===2?Fi.innerHeight:1)*m;xe(pe.deltaX*He,pe.deltaY*He,0),h&&!O&&Ne.restart(!0)}},J=function(pe){if(!oe(pe)){var He=pe.clientX,ae=pe.clientY,Ge=He-q.x,Ue=ae-q.y;q.x=He,q.y=ae,we=!0,h&&Ne.restart(!0),(Ge||Ue)&&Ae(Ge,Ue)}},Se=function(pe){q.event=pe,G(q)},he=function(pe){q.event=pe,I(q)},ie=function(pe){return oe(pe)||jl(pe,u)&&Ie(q)};Ne=q._dc=Nn.delayedCall(f||.25,Z).pause(),q.deltaX=q.deltaY=0,q._vx=jm(0,50,!0),q._vy=jm(0,50,!0),q.scrollX=nt,q.scrollY=Ke,q.isDragging=q.isGesturing=q.isPressed=!1,jM(this),q.enable=function(le){return q.isEnabled||(Qn(P?E:a,"scroll",Wm),o.indexOf("scroll")>=0&&Qn(P?E:a,"scroll",U,k,K),o.indexOf("wheel")>=0&&Qn(a,"wheel",ue,k,K),(o.indexOf("touch")>=0&&GM||o.indexOf("pointer")>=0)&&(Qn(a,mr[0],fe,k,K),Qn(E,mr[2],ve),Qn(E,mr[3],ve),re&&Qn(a,"click",me,!0,!0),Ie&&Qn(a,"click",ie),X&&Qn(E,"gesturestart",Xe),N&&Qn(E,"gestureend",Ze),G&&Qn(a,No+"enter",Se),I&&Qn(a,No+"leave",he),B&&Qn(a,No+"move",J)),q.isEnabled=!0,q.isDragging=q.isGesturing=q.isPressed=we=et=!1,q._vx.reset(),q._vy.reset(),pt=nt(),_e=Ke(),le&&le.type&&fe(le),se&&se(q)),q},q.disable=function(){q.isEnabled&&(Za.filter(function(le){return le!==q&&Cc(le.target)}).length||Zn(P?E:a,"scroll",Wm),q.isPressed&&(q._vx.reset(),q._vy.reset(),Zn(O?a:E,mr[1],ge,!0)),Zn(P?E:a,"scroll",U,K),Zn(a,"wheel",ue,K),Zn(a,mr[0],fe,K),Zn(E,mr[2],ve),Zn(E,mr[3],ve),Zn(a,"click",me,!0),Zn(a,"click",ie),Zn(E,"gesturestart",Xe),Zn(E,"gestureend",Ze),Zn(a,No+"enter",Se),Zn(a,No+"leave",he),Zn(a,No+"move",J),q.isEnabled=q.isPressed=q.isDragging=!1,Ce&&Ce(q))},q.kill=q.revert=function(){q.disable();var le=Za.indexOf(q);le>=0&&Za.splice(le,1),cs===q&&(cs=0)},Za.push(q),O&&Cc(a)&&(cs=q),q.enable(v)},ab(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();on.version="3.15.0";on.create=function(n){return new on(n)};on.register=$M;on.getAll=function(){return Za.slice()};on.getById=function(n){return Za.filter(function(e){return e.vars.id===n})[0]};XM()&&Nn.registerPlugin(on);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Le,Ua,ct,Et,Li,Mt,s_,Nd,au,bc,oc,Gu,Gn,ah,Xm,ni,ux,fx,Fa,KM,$h,ZM,ei,Ym,QM,JM,Is,qm,o_,cl,a_,Rc,$m,Kh,Wu=1,Wn=Date.now,Zh=Wn(),lr=0,ac=0,dx=function(e,t,i){var r=Ni(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},hx=function(e,t){return t&&(!Ni(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},ub=function n(){return ac&&requestAnimationFrame(n)},px=function(){return ah=1},mx=function(){return ah=0},Lr=function(e){return e},lc=function(e){return Math.round(e*1e5)/1e5||0},eE=function(){return typeof window<"u"},tE=function(){return Le||eE()&&(Le=window.gsap)&&Le.registerPlugin&&Le},ra=function(e){return!!~s_.indexOf(e)},nE=function(e){return(e==="Height"?a_:ct["inner"+e])||Li["client"+e]||Mt["client"+e]},iE=function(e){return so(e,"getBoundingClientRect")||(ra(e)?function(){return Xf.width=ct.innerWidth,Xf.height=a_,Xf}:function(){return ss(e)})},fb=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=so(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?nE(s):e["client"+s])||0}},db=function(e,t){return!t||~Gr.indexOf(e)?iE(e):function(){return Xf}},kr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=so(e,i))?o()-iE(e)()[s]:ra(e)?(Li[i]||Mt[i])-nE(r):e[i]-e["offset"+r])},ju=function(e,t){for(var i=0;i<Fa.length;i+=3)(!t||~t.indexOf(Fa[i+1]))&&e(Fa[i],Fa[i+1],Fa[i+2])},Ni=function(e){return typeof e=="string"},Yn=function(e){return typeof e=="function"},cc=function(e){return typeof e=="number"},Do=function(e){return typeof e=="object"},Xl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},va=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},xa=Math.abs,rE="left",sE="top",l_="right",c_="bottom",Ko="width",Zo="height",Pc="Right",Nc="Left",Dc="Top",Lc="Bottom",fn="padding",nr="margin",wl="Width",u_="Height",mn="px",ir=function(e){return ct.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},hb=function(e){var t=ir(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},gx=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},ss=function(e,t){var i=t&&ir(e)[Xm]!=="matrix(1, 0, 0, 1, 0, 0)"&&Le.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},Dd=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},oE=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},pb=function(e){return function(t){return Le.utils.snap(oE(e),t)}},f_=function(e){var t=Le.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},mb=function(e){return function(t,i){return f_(oE(e))(t,i.direction)}},Xu=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},An=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},wn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Yu=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},_x={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},qu={toggleActions:"play",anticipatePin:0},Ld={top:0,left:0,center:.5,bottom:1,right:1},Hf=function(e,t){if(Ni(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Ld?Ld[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},$u=function(e,t,i,r,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,m=Et.createElement("div"),v=ra(i)||so(i,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,p=v?Mt:i.tagName==="IFRAME"?i.contentDocument.body:i,g=e.indexOf("start")!==-1,y=g?c:u,M="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((_||l)&&v?"fixed;":"absolute;"),(_||l||!v)&&(M+=(r===_n?l_:c_)+":"+(o+parseFloat(f))+"px;"),a&&(M+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=g,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=M,m.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(m,p.children[0]):p.appendChild(m),m._offset=m["offset"+r.op.d2],Gf(m,0,r,g),m},Gf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+wl]=1,s["border"+a+wl]=0,s[i.p]=t+"px",Le.set(e,s)},at=[],Km={},lu,vx=function(){return Wn()-lr>34&&(lu||(lu=requestAnimationFrame(ds)))},ya=function(){(!ei||!ei.isPressed||ei.startX>Mt.clientWidth)&&(ut.cache++,ei?lu||(lu=requestAnimationFrame(ds)):ds(),lr||oa("scrollStart"),lr=Wn())},Qh=function(){JM=ct.innerWidth,QM=ct.innerHeight},uc=function(e){ut.cache++,(e===!0||!Gn&&!ZM&&!Et.fullscreenElement&&!Et.webkitFullscreenElement&&(!Ym||JM!==ct.innerWidth||Math.abs(ct.innerHeight-QM)>ct.innerHeight*.25))&&Nd.restart(!0)},sa={},gb=[],aE=function n(){return wn(Qe,"scrollEnd",n)||zo(!0)},oa=function(e){return sa[e]&&sa[e].map(function(t){return t()})||gb},Ri=[],lE=function(e){for(var t=0;t<Ri.length;t+=5)(!e||Ri[t+4]&&Ri[t+4].query===e)&&(Ri[t].style.cssText=Ri[t+1],Ri[t].getBBox&&Ri[t].setAttribute("transform",Ri[t+2]||""),Ri[t+3].uncache=1)},cE=function(){return ut.forEach(function(e){return Yn(e)&&++e.cacheID&&(e.rec=e())})},d_=function(e,t){var i;for(ni=0;ni<at.length;ni++)i=at[ni],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Rc=!0,t&&lE(t),t||oa("revert")},uE=function(e,t){ut.cache++,(t||!ii)&&ut.forEach(function(i){return Yn(i)&&i.cacheID++&&(i.rec=0)}),Ni(e)&&(ct.history.scrollRestoration=o_=e)},ii,Qo=0,xx,_b=function(){if(xx!==Qo){var e=xx=Qo;requestAnimationFrame(function(){return e===Qo&&zo(!0)})}},fE=function(){Mt.appendChild(cl),a_=!ei&&cl.offsetHeight||ct.innerHeight,Mt.removeChild(cl)},yx=function(e){return au(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},zo=function(e,t){if(Li=Et.documentElement,Mt=Et.body,s_=[ct,Et,Li,Mt],lr&&!e&&!Rc){An(Qe,"scrollEnd",aE);return}fE(),ii=Qe.isRefreshing=!0,Rc||cE();var i=oa("refreshInit");KM&&Qe.sort(),t||d_(),ut.forEach(function(r){Yn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),at.slice(0).forEach(function(r){return r.refresh()}),Rc=!1,at.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),$m=1,yx(!0),at.forEach(function(r){var s=kr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),yx(!1),$m=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),ut.forEach(function(r){Yn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),uE(o_,1),Nd.pause(),Qo++,ii=2,ds(2),at.forEach(function(r){return Yn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),ii=Qe.isRefreshing=!1,oa("refresh")},Zm=0,Wf=1,Ic,ds=function(e){if(e===2||!ii&&!Rc){Qe.isUpdating=!0,Ic&&Ic.update(0);var t=at.length,i=Wn(),r=i-Zh>=50,s=t&&at[0].scroll();if(Wf=Zm>s?-1:1,ii||(Zm=s),r&&(lr&&!ah&&i-lr>200&&(lr=0,oa("scrollEnd")),oc=Zh,Zh=i),Wf<0){for(ni=t;ni-- >0;)at[ni]&&at[ni].update(0,r);Wf=1}else for(ni=0;ni<t;ni++)at[ni]&&at[ni].update(0,r);Qe.isUpdating=!1}lu=0},Qm=[rE,sE,c_,l_,nr+Lc,nr+Pc,nr+Dc,nr+Nc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],jf=Qm.concat([Ko,Zo,"boxSizing","max"+wl,"max"+u_,"position",nr,fn,fn+Dc,fn+Pc,fn+Lc,fn+Nc]),vb=function(e,t,i){ul(i);var r=e._gsap;if(r.spacerIsNative)ul(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Jh=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Qm.length,o=t.style,a=e.style,l;s--;)l=Qm[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[c_]=a[l_]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ko]=Dd(e,si)+mn,o[Zo]=Dd(e,_n)+mn,o[fn]=a[nr]=a[sE]=a[rE]="0",ul(r),a[Ko]=a["max"+wl]=i[Ko],a[Zo]=a["max"+u_]=i[Zo],a[fn]=i[fn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},xb=/([A-Z])/g,ul=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Le.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(xb,"-$1").toLowerCase())}},Ku=function(e){for(var t=jf.length,i=e.style,r=[],s=0;s<t;s++)r.push(jf[s],i[jf[s]]);return r.t=e,r},yb=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Xf={left:0,top:0},Sx=function(e,t,i,r,s,o,a,l,c,u,h,f,d,m){Yn(e)&&(e=e(l)),Ni(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Hf("0"+e.substr(3),i):0));var v=d?d.time():0,_,p,g;if(d&&d.seek(0),isNaN(e)||(e=+e),cc(e))d&&(e=Le.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Gf(a,i,r,!0);else{Yn(t)&&(t=t(l));var y=(e||"0").split(" "),M,A,T,w;g=di(t,l)||Mt,M=ss(g)||{},(!M||!M.left&&!M.top)&&ir(g).display==="none"&&(w=g.style.display,g.style.display="block",M=ss(g),w?g.style.display=w:g.style.removeProperty("display")),A=Hf(y[0],M[r.d]),T=Hf(y[1]||"0",i),e=M[r.p]-c[r.p]-u+A+s-T,a&&Gf(a,T,r,i-T<20||a._isStart&&T>20),i-=i-T}if(m&&(l[m]=e||-.001,e<0&&(e=0)),o){var S=e+i,C=o._isStart;_="scroll"+r.d2,Gf(o,S,r,C&&S>20||!C&&(h?Math.max(Mt[_],Li[_]):o.parentNode[_])<=S+1),h&&(c=ss(a),h&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+mn))}return d&&g&&(_=ss(g),d.seek(f),p=ss(g),d._caScrollDist=_[r.p]-p[r.p],e=e/d._caScrollDist*f),d&&d.seek(v),d?e:Math.round(e)},Sb=/(webkit|moz|length|cssText|inset)/i,Mx=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===Mt){e._stOrig=s.cssText,a=ir(e);for(o in a)!+o&&!Sb.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Le.core.getCache(e).uncache=1,t.appendChild(e)}},dE=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Zu=function(e,t,i){var r={};r[t.p]="+="+i,Le.set(e,r)},Ex=function(e,t){var i=fo(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,m={};c=c||i();var v=dE(i,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=m,m[r]=function(){return v(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){ut.cache++,o.tween&&ds()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Le.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},An(e,"wheel",i.wheelHandler),Qe.isTouch&&An(e,"touchmove",i.wheelHandler),s},Qe=function(){function n(t,i){Ua||n.register(Le)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),qm(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ac){this.update=this.refresh=this.kill=Lr;return}i=gx(Ni(i)||cc(i)||i.nodeType?{trigger:i}:i,qu);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,m=s.pinSpacing,v=s.invalidateOnRefresh,_=s.anticipatePin,p=s.onScrubComplete,g=s.onSnapComplete,y=s.once,M=s.snap,A=s.pinReparent,T=s.pinSpacer,w=s.containerAnimation,S=s.fastScrollEnd,C=s.preventOverlaps,R=i.horizontal||i.containerAnimation&&i.horizontal!==!1?si:_n,D=!h&&h!==0,L=di(i.scroller||ct),V=Le.core.getCache(L),G=ra(L),I=("pinType"in i?i.pinType:so(L,"pinType")||G&&"fixed")==="fixed",B=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],F=D&&i.toggleActions.split(" "),O="markers"in i?i.markers:qu.markers,X=G?0:parseFloat(ir(L)["border"+R.p2+wl])||0,N=this,te=i.onRefreshInit&&function(){return i.onRefreshInit(N)},se=fb(L,G,R),Ce=db(L,G),Ie=0,be=0,K=0,re=fo(L,R),ce,Re,Ve,Ne,et,we,We,tt,je,q,ft,Ht,k,nt,Ke,pt,_e,rt,P,E,H,Q,ne,me,oe,Z,ee,xe,Ae,ge,fe,ve,Xe,Ze,U,ue,J,Se,he;if(N._startClamp=N._endClamp=!1,N._dir=R,_*=45,N.scroller=L,N.scroll=w?w.time.bind(w):re,Ne=re(),N.vars=i,r=r||i.animation,"refreshPriority"in i&&(KM=1,i.refreshPriority===-9999&&(Ic=N)),V.tweenScroll=V.tweenScroll||{top:Ex(L,_n),left:Ex(L,si)},N.tweenTo=ce=V.tweenScroll[R.p],N.scrubDuration=function(ae){Xe=cc(ae)&&ae,Xe?ve?ve.duration(ae):ve=Le.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Xe,paused:!0,onComplete:function(){return p&&p(N)}}):(ve&&ve.progress(1).kill(),ve=0)},r&&(r.vars.lazy=!1,r._initted&&!N.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),N.animation=r.pause(),r.scrollTrigger=N,N.scrubDuration(h),ge=0,l||(l=r.vars.id)),M&&((!Do(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in Mt.style&&Le.set(G?[Mt,Li]:L,{scrollBehavior:"auto"}),ut.forEach(function(ae){return Yn(ae)&&ae.target===(G?Et.scrollingElement||Li:L)&&(ae.smooth=!1)}),Ve=Yn(M.snapTo)?M.snapTo:M.snapTo==="labels"?pb(r):M.snapTo==="labelsDirectional"?mb(r):M.directional!==!1?function(ae,Ge){return f_(M.snapTo)(ae,Wn()-be<500?0:Ge.direction)}:Le.utils.snap(M.snapTo),Ze=M.duration||{min:.1,max:2},Ze=Do(Ze)?bc(Ze.min,Ze.max):bc(Ze,Ze),U=Le.delayedCall(M.delay||Xe/2||.1,function(){var ae=re(),Ge=Wn()-be<500,Ue=ce.tween;if((Ge||Math.abs(N.getVelocity())<10)&&!Ue&&!ah&&Ie!==ae){var $e=(ae-we)/nt,ln=r&&!D?r.totalProgress():$e,lt=Ge?0:(ln-fe)/(Wn()-oc)*1e3||0,kt=Le.utils.clamp(-$e,1-$e,xa(lt/2)*lt/.185),Bt=$e+(M.inertia===!1?0:kt),Dt,Ct,St=M,On=St.onStart,Lt=St.onInterrupt,Sn=St.onComplete;if(Dt=Ve(Bt,N),cc(Dt)||(Dt=Bt),Ct=Math.max(0,Math.round(we+Dt*nt)),ae<=We&&ae>=we&&Ct!==ae){if(Ue&&!Ue._initted&&Ue.data<=xa(Ct-ae))return;M.inertia===!1&&(kt=Dt-$e),ce(Ct,{duration:Ze(xa(Math.max(xa(Bt-ln),xa(Dt-ln))*.185/lt/.05||0)),ease:M.ease||"power3",data:xa(Ct-ae),onInterrupt:function(){return U.restart(!0)&&Lt&&va(N,Lt)},onComplete:function(){N.update(),Ie=re(),r&&!D&&(ve?ve.resetTo("totalProgress",Dt,r._tTime/r._tDur):r.progress(Dt)),ge=fe=r&&!D?r.totalProgress():N.progress,g&&g(N),Sn&&va(N,Sn)}},ae,kt*nt,Ct-ae-kt*nt),On&&va(N,On,ce.tween)}}else N.isActive&&Ie!==ae&&U.restart(!0)}).pause()),l&&(Km[l]=N),f=N.trigger=di(f||d!==!0&&d),he=f&&f._gsap&&f._gsap.stRevert,he&&(he=he(N)),d=d===!0?f:di(d),Ni(a)&&(a={targets:f,className:a}),d&&(m===!1||m===nr||(m=!m&&d.parentNode&&d.parentNode.style&&ir(d.parentNode).display==="flex"?!1:fn),N.pin=d,Re=Le.core.getCache(d),Re.spacer?Ke=Re.pinState:(T&&(T=di(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),Re.spacerIsNative=!!T,T&&(Re.spacerState=Ku(T))),Re.spacer=rt=T||Et.createElement("div"),rt.classList.add("pin-spacer"),l&&rt.classList.add("pin-spacer-"+l),Re.pinState=Ke=Ku(d)),i.force3D!==!1&&Le.set(d,{force3D:!0}),N.spacer=rt=Re.spacer,Ae=ir(d),me=Ae[m+R.os2],E=Le.getProperty(d),H=Le.quickSetter(d,R.a,mn),Jh(d,rt,Ae),_e=Ku(d)),O){Ht=Do(O)?gx(O,_x):_x,q=$u("scroller-start",l,L,R,Ht,0),ft=$u("scroller-end",l,L,R,Ht,0,q),P=q["offset"+R.op.d2];var ie=di(so(L,"content")||L);tt=this.markerStart=$u("start",l,ie,R,Ht,P,0,w),je=this.markerEnd=$u("end",l,ie,R,Ht,P,0,w),w&&(Se=Le.quickSetter([tt,je],R.a,mn)),!I&&!(Gr.length&&so(L,"fixedMarkers")===!0)&&(hb(G?Mt:L),Le.set([q,ft],{force3D:!0}),Z=Le.quickSetter(q,R.a,mn),xe=Le.quickSetter(ft,R.a,mn))}if(w){var le=w.vars.onUpdate,pe=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){N.update(0,0,1),le&&le.apply(w,pe||[])})}if(N.previous=function(){return at[at.indexOf(N)-1]},N.next=function(){return at[at.indexOf(N)+1]},N.revert=function(ae,Ge){if(!Ge)return N.kill(!0);var Ue=ae!==!1||!N.enabled,$e=Gn;Ue!==N.isReverted&&(Ue&&(ue=Math.max(re(),N.scroll.rec||0),K=N.progress,J=r&&r.progress()),tt&&[tt,je,q,ft].forEach(function(ln){return ln.style.display=Ue?"none":"block"}),Ue&&(Gn=N,N.update(Ue)),d&&(!A||!N.isActive)&&(Ue?vb(d,rt,Ke):Jh(d,rt,ir(d),oe)),Ue||N.update(Ue),Gn=$e,N.isReverted=Ue)},N.refresh=function(ae,Ge,Ue,$e){if(!((Gn||!N.enabled)&&!Ge)){if(d&&ae&&lr){An(n,"scrollEnd",aE);return}!ii&&te&&te(N),Gn=N,ce.tween&&!Ue&&(ce.tween.kill(),ce.tween=0),ve&&ve.pause(),v&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Me){return Me.vars.immediateRender&&Me.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var ln=se(),lt=Ce(),kt=w?w.duration():kr(L,R),Bt=nt<=.01||!nt,Dt=0,Ct=$e||0,St=Do(Ue)?Ue.end:i.end,On=i.endTrigger||f,Lt=Do(Ue)?Ue.start:i.start||(i.start===0||!f?0:d?"0 0":"0 100%"),Sn=N.pinnedContainer=i.pinnedContainer&&di(i.pinnedContainer,N),wi=f&&Math.max(0,at.indexOf(N))||0,cn=wi,pn,Mn,$r,ha,En,en,qi,b,z,$,W,Y,ye;for(O&&Do(Ue)&&(Y=Le.getProperty(q,R.p),ye=Le.getProperty(ft,R.p));cn-- >0;)en=at[cn],en.end||en.refresh(0,1)||(Gn=N),qi=en.pin,qi&&(qi===f||qi===d||qi===Sn)&&!en.isReverted&&($||($=[]),$.unshift(en),en.revert(!0,!0)),en!==at[cn]&&(wi--,cn--);for(Yn(Lt)&&(Lt=Lt(N)),Lt=dx(Lt,"start",N),we=Sx(Lt,f,ln,R,re(),tt,q,N,lt,X,I,kt,w,N._startClamp&&"_startClamp")||(d?-.001:0),Yn(St)&&(St=St(N)),Ni(St)&&!St.indexOf("+=")&&(~St.indexOf(" ")?St=(Ni(Lt)?Lt.split(" ")[0]:"")+St:(Dt=Hf(St.substr(2),ln),St=Ni(Lt)?Lt:(w?Le.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,we):we)+Dt,On=f)),St=dx(St,"end",N),We=Math.max(we,Sx(St||(On?"100% 0":kt),On,ln,R,re()+Dt,je,ft,N,lt,X,I,kt,w,N._endClamp&&"_endClamp"))||-.001,Dt=0,cn=wi;cn--;)en=at[cn]||{},qi=en.pin,qi&&en.start-en._pinPush<=we&&!w&&en.end>0&&(pn=en.end-(N._startClamp?Math.max(0,en.start):en.start),(qi===f&&en.start-en._pinPush<we||qi===Sn)&&isNaN(Lt)&&(Dt+=pn*(1-en.progress)),qi===d&&(Ct+=pn));if(we+=Dt,We+=Dt,N._startClamp&&(N._startClamp+=Dt),N._endClamp&&!ii&&(N._endClamp=We||-.001,We=Math.min(We,kr(L,R))),nt=We-we||(we-=.01)&&.001,Bt&&(K=Le.utils.clamp(0,1,Le.utils.normalize(we,We,ue))),N._pinPush=Ct,tt&&Dt&&(pn={},pn[R.a]="+="+Dt,Sn&&(pn[R.p]="-="+re()),Le.set([tt,je],pn)),d&&!($m&&N.end>=kr(L,R)))pn=ir(d),ha=R===_n,$r=re(),Q=parseFloat(E(R.a))+Ct,!kt&&We>1&&(W=(G?Et.scrollingElement||Li:L).style,W={style:W,value:W["overflow"+R.a.toUpperCase()]},G&&ir(Mt)["overflow"+R.a.toUpperCase()]!=="scroll"&&(W.style["overflow"+R.a.toUpperCase()]="scroll")),Jh(d,rt,pn),_e=Ku(d),Mn=ss(d,!0),b=I&&fo(L,ha?si:_n)(),m?(oe=[m+R.os2,nt+Ct+mn],oe.t=rt,cn=m===fn?Dd(d,R)+nt+Ct:0,cn&&(oe.push(R.d,cn+mn),rt.style.flexBasis!=="auto"&&(rt.style.flexBasis=cn+mn)),ul(oe),Sn&&at.forEach(function(Me){Me.pin===Sn&&Me.vars.pinSpacing!==!1&&(Me._subPinOffset=!0)}),I&&re(ue)):(cn=Dd(d,R),cn&&rt.style.flexBasis!=="auto"&&(rt.style.flexBasis=cn+mn)),I&&(En={top:Mn.top+(ha?$r-we:b)+mn,left:Mn.left+(ha?b:$r-we)+mn,boxSizing:"border-box",position:"fixed"},En[Ko]=En["max"+wl]=Math.ceil(Mn.width)+mn,En[Zo]=En["max"+u_]=Math.ceil(Mn.height)+mn,En[nr]=En[nr+Dc]=En[nr+Pc]=En[nr+Lc]=En[nr+Nc]="0",En[fn]=pn[fn],En[fn+Dc]=pn[fn+Dc],En[fn+Pc]=pn[fn+Pc],En[fn+Lc]=pn[fn+Lc],En[fn+Nc]=pn[fn+Nc],pt=yb(Ke,En,A),ii&&re(0)),r?(z=r._initted,$h(1),r.render(r.duration(),!0,!0),ne=E(R.a)-Q+nt+Ct,ee=Math.abs(nt-ne)>1,I&&ee&&pt.splice(pt.length-2,2),r.render(0,!0,!0),z||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),$h(0)):ne=nt,W&&(W.value?W.style["overflow"+R.a.toUpperCase()]=W.value:W.style.removeProperty("overflow-"+R.a));else if(f&&re()&&!w)for(Mn=f.parentNode;Mn&&Mn!==Mt;)Mn._pinOffset&&(we-=Mn._pinOffset,We-=Mn._pinOffset),Mn=Mn.parentNode;$&&$.forEach(function(Me){return Me.revert(!1,!0)}),N.start=we,N.end=We,Ne=et=ii?ue:re(),!w&&!ii&&(Ne<ue&&re(ue),N.scroll.rec=0),N.revert(!1,!0),be=Wn(),U&&(Ie=-1,U.restart(!0)),Gn=0,r&&D&&(r._initted||J)&&r.progress()!==J&&r.progress(J||0,!0).render(r.time(),!0,!0),(Bt||K!==N.progress||w||v||r&&!r._initted)&&(r&&!D&&(r._initted||K||r.vars.immediateRender!==!1)&&r.totalProgress(w&&we<-.001&&!K?Le.utils.normalize(we,We,0):K,!0),N.progress=Bt||(Ne-we)/nt===K?0:K),d&&m&&(rt._pinOffset=Math.round(N.progress*ne)),ve&&ve.invalidate(),isNaN(Y)||(Y-=Le.getProperty(q,R.p),ye-=Le.getProperty(ft,R.p),Zu(q,R,Y),Zu(tt,R,Y-($e||0)),Zu(ft,R,ye),Zu(je,R,ye-($e||0))),Bt&&!ii&&N.update(),u&&!ii&&!k&&(k=!0,u(N),k=!1)}},N.getVelocity=function(){return(re()-et)/(Wn()-oc)*1e3||0},N.endAnimation=function(){Xl(N.callbackAnimation),r&&(ve?ve.progress(1):r.paused()?D||Xl(r,N.direction<0,1):Xl(r,r.reversed()))},N.labelToScroll=function(ae){return r&&r.labels&&(we||N.refresh()||we)+r.labels[ae]/r.duration()*nt||0},N.getTrailing=function(ae){var Ge=at.indexOf(N),Ue=N.direction>0?at.slice(0,Ge).reverse():at.slice(Ge+1);return(Ni(ae)?Ue.filter(function($e){return $e.vars.preventOverlaps===ae}):Ue).filter(function($e){return N.direction>0?$e.end<=we:$e.start>=We})},N.update=function(ae,Ge,Ue){if(!(w&&!Ue&&!ae)){var $e=ii===!0?ue:N.scroll(),ln=ae?0:($e-we)/nt,lt=ln<0?0:ln>1?1:ln||0,kt=N.progress,Bt,Dt,Ct,St,On,Lt,Sn,wi;if(Ge&&(et=Ne,Ne=w?re():$e,M&&(fe=ge,ge=r&&!D?r.totalProgress():lt)),_&&d&&!Gn&&!Wu&&lr&&(!lt&&we<$e+($e-et)/(Wn()-oc)*_?lt=1e-4:lt===1&&We>$e+($e-et)/(Wn()-oc)*_&&(lt=.9999)),lt!==kt&&N.enabled){if(Bt=N.isActive=!!lt&&lt<1,Dt=!!kt&&kt<1,Lt=Bt!==Dt,On=Lt||!!lt!=!!kt,N.direction=lt>kt?1:-1,N.progress=lt,On&&!Gn&&(Ct=lt&&!kt?0:lt===1?1:kt===1?2:3,D&&(St=!Lt&&F[Ct+1]!=="none"&&F[Ct+1]||F[Ct],wi=r&&(St==="complete"||St==="reset"||St in r))),C&&(Lt||wi)&&(wi||h||!r)&&(Yn(C)?C(N):N.getTrailing(C).forEach(function($r){return $r.endAnimation()})),D||(ve&&!Gn&&!Wu?(ve._dp._time-ve._start!==ve._time&&ve.render(ve._dp._time-ve._start),ve.resetTo?ve.resetTo("totalProgress",lt,r._tTime/r._tDur):(ve.vars.totalProgress=lt,ve.invalidate().restart())):r&&r.totalProgress(lt,!!(Gn&&(be||ae)))),d){if(ae&&m&&(rt.style[m+R.os2]=me),!I)H(lc(Q+ne*lt));else if(On){if(Sn=!ae&&lt>kt&&We+1>$e&&$e+1>=kr(L,R),A)if(!ae&&(Bt||Sn)){var cn=ss(d,!0),pn=$e-we;Mx(d,Mt,cn.top+(R===_n?pn:0)+mn,cn.left+(R===_n?0:pn)+mn)}else Mx(d,rt);ul(Bt||Sn?pt:_e),ee&&lt<1&&Bt||H(Q+(lt===1&&!Sn?ne:0))}}M&&!ce.tween&&!Gn&&!Wu&&U.restart(!0),a&&(Lt||y&&lt&&(lt<1||!Kh))&&au(a.targets).forEach(function($r){return $r.classList[Bt||y?"add":"remove"](a.className)}),o&&!D&&!ae&&o(N),On&&!Gn?(D&&(wi&&(St==="complete"?r.pause().totalProgress(1):St==="reset"?r.restart(!0).pause():St==="restart"?r.restart(!0):r[St]()),o&&o(N)),(Lt||!Kh)&&(c&&Lt&&va(N,c),B[Ct]&&va(N,B[Ct]),y&&(lt===1?N.kill(!1,1):B[Ct]=0),Lt||(Ct=lt===1?1:3,B[Ct]&&va(N,B[Ct]))),S&&!Bt&&Math.abs(N.getVelocity())>(cc(S)?S:2500)&&(Xl(N.callbackAnimation),ve?ve.progress(1):Xl(r,St==="reverse"?1:!lt,1))):D&&o&&!Gn&&o(N)}if(xe){var Mn=w?$e/w.duration()*(w._caScrollDist||0):$e;Z(Mn+(q._isFlipped?1:0)),xe(Mn)}Se&&Se(-$e/w.duration()*(w._caScrollDist||0))}},N.enable=function(ae,Ge){N.enabled||(N.enabled=!0,An(L,"resize",uc),G||An(L,"scroll",ya),te&&An(n,"refreshInit",te),ae!==!1&&(N.progress=K=0,Ne=et=Ie=re()),Ge!==!1&&N.refresh())},N.getTween=function(ae){return ae&&ce?ce.tween:ve},N.setPositions=function(ae,Ge,Ue,$e){if(w){var ln=w.scrollTrigger,lt=w.duration(),kt=ln.end-ln.start;ae=ln.start+kt*ae/lt,Ge=ln.start+kt*Ge/lt}N.refresh(!1,!1,{start:hx(ae,Ue&&!!N._startClamp),end:hx(Ge,Ue&&!!N._endClamp)},$e),N.update()},N.adjustPinSpacing=function(ae){if(oe&&ae){var Ge=oe.indexOf(R.d)+1;oe[Ge]=parseFloat(oe[Ge])+ae+mn,oe[1]=parseFloat(oe[1])+ae+mn,ul(oe)}},N.disable=function(ae,Ge){if(ae!==!1&&N.revert(!0,!0),N.enabled&&(N.enabled=N.isActive=!1,Ge||ve&&ve.pause(),ue=0,Re&&(Re.uncache=1),te&&wn(n,"refreshInit",te),U&&(U.pause(),ce.tween&&ce.tween.kill()&&(ce.tween=0)),!G)){for(var Ue=at.length;Ue--;)if(at[Ue].scroller===L&&at[Ue]!==N)return;wn(L,"resize",uc),G||wn(L,"scroll",ya)}},N.kill=function(ae,Ge){N.disable(ae,Ge),ve&&!Ge&&ve.kill(),l&&delete Km[l];var Ue=at.indexOf(N);Ue>=0&&at.splice(Ue,1),Ue===ni&&Wf>0&&ni--,Ue=0,at.forEach(function($e){return $e.scroller===N.scroller&&(Ue=1)}),Ue||ii||(N.scroll.rec=0),r&&(r.scrollTrigger=null,ae&&r.revert({kill:!1}),Ge||r.kill()),tt&&[tt,je,q,ft].forEach(function($e){return $e.parentNode&&$e.parentNode.removeChild($e)}),Ic===N&&(Ic=0),d&&(Re&&(Re.uncache=1),Ue=0,at.forEach(function($e){return $e.pin===d&&Ue++}),Ue||(Re.spacer=0)),i.onKill&&i.onKill(N)},at.push(N),N.enable(!1,!1),he&&he(N),r&&r.add&&!nt){var He=N.update;N.update=function(){N.update=He,ut.cache++,we||We||N.refresh()},Le.delayedCall(.01,N.update),nt=.01,we=We=0}else N.refresh();d&&_b()},n.register=function(i){return Ua||(Le=i||tE(),eE()&&window.document&&n.enable(),Ua=ac),Ua},n.defaults=function(i){if(i)for(var r in i)qu[r]=i[r];return qu},n.disable=function(i,r){ac=0,at.forEach(function(o){return o[r?"kill":"disable"](i)}),wn(ct,"wheel",ya),wn(Et,"scroll",ya),clearInterval(Gu),wn(Et,"touchcancel",Lr),wn(Mt,"touchstart",Lr),Xu(wn,Et,"pointerdown,touchstart,mousedown",px),Xu(wn,Et,"pointerup,touchend,mouseup",mx),Nd.kill(),ju(wn);for(var s=0;s<ut.length;s+=3)Yu(wn,ut[s],ut[s+1]),Yu(wn,ut[s],ut[s+2])},n.enable=function(){if(ct=window,Et=document,Li=Et.documentElement,Mt=Et.body,Le){if(au=Le.utils.toArray,bc=Le.utils.clamp,qm=Le.core.context||Lr,$h=Le.core.suppressOverwrites||Lr,o_=ct.history.scrollRestoration||"auto",Zm=ct.pageYOffset||0,Le.core.globals("ScrollTrigger",n),Mt){ac=1,cl=document.createElement("div"),cl.style.height="100vh",cl.style.position="absolute",fE(),ub(),on.register(Le),n.isTouch=on.isTouch,Is=on.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ym=on.isTouch===1,An(ct,"wheel",ya),s_=[ct,Et,Li,Mt],Le.matchMedia?(n.matchMedia=function(u){var h=Le.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},Le.addEventListener("matchMediaInit",function(){cE(),d_()}),Le.addEventListener("matchMediaRevert",function(){return lE()}),Le.addEventListener("matchMedia",function(){zo(0,1),oa("matchMedia")}),Le.matchMedia().add("(orientation: portrait)",function(){return Qh(),Qh})):console.warn("Requires GSAP 3.11.0 or later"),Qh(),An(Et,"scroll",ya);var i=Mt.hasAttribute("style"),r=Mt.style,s=r.borderTopStyle,o=Le.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=ss(Mt),_n.m=Math.round(a.top+_n.sc())||0,si.m=Math.round(a.left+si.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(Mt.setAttribute("style",""),Mt.removeAttribute("style")),Gu=setInterval(vx,250),Le.delayedCall(.5,function(){return Wu=0}),An(Et,"touchcancel",Lr),An(Mt,"touchstart",Lr),Xu(An,Et,"pointerdown,touchstart,mousedown",px),Xu(An,Et,"pointerup,touchend,mouseup",mx),Xm=Le.utils.checkPrefix("transform"),jf.push(Xm),Ua=Wn(),Nd=Le.delayedCall(.2,zo).pause(),Fa=[Et,"visibilitychange",function(){var u=ct.innerWidth,h=ct.innerHeight;Et.hidden?(ux=u,fx=h):(ux!==u||fx!==h)&&uc()},Et,"DOMContentLoaded",zo,ct,"load",zo,ct,"resize",uc],ju(An),at.forEach(function(u){return u.enable(0,1)}),l=0;l<ut.length;l+=3)Yu(wn,ut[l],ut[l+1]),Yu(wn,ut[l],ut[l+2])}else if(Et){var c=function u(){n.enable(),Et.removeEventListener("DOMContentLoaded",u)};Et.addEventListener("DOMContentLoaded",c)}}},n.config=function(i){"limitCallbacks"in i&&(Kh=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Gu)||(Gu=r)&&setInterval(vx,r),"ignoreMobileResize"in i&&(Ym=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(ju(wn)||ju(An,i.autoRefreshEvents||"none"),ZM=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=di(i),o=ut.indexOf(s),a=ra(s);~o&&ut.splice(o,a?6:2),r&&(a?Gr.unshift(ct,r,Mt,r,Li,r):Gr.unshift(s,r))},n.clearMatchMedia=function(i){at.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(Ni(i)?di(i):i).getBoundingClientRect(),a=o[s?Ko:Zo]*r||0;return s?o.right-a>0&&o.left+a<ct.innerWidth:o.bottom-a>0&&o.top+a<ct.innerHeight},n.positionInViewport=function(i,r,s){Ni(i)&&(i=di(i));var o=i.getBoundingClientRect(),a=o[s?Ko:Zo],l=r==null?a/2:r in Ld?Ld[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ct.innerWidth:(o.top+l)/ct.innerHeight},n.killAll=function(i){if(at.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=sa.killAll||[];sa={},r.forEach(function(s){return s()})}},n}();Qe.version="3.15.0";Qe.saveStyles=function(n){return n?au(n).forEach(function(e){if(e&&e.style){var t=Ri.indexOf(e);t>=0&&Ri.splice(t,5),Ri.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Le.core.getCache(e),qm())}}):Ri};Qe.revert=function(n,e){return d_(!n,e)};Qe.create=function(n,e){return new Qe(n,e)};Qe.refresh=function(n){return n?uc(!0):(Ua||Qe.register())&&zo(!0)};Qe.update=function(n){return++ut.cache&&ds(n===!0?2:0)};Qe.clearScrollMemory=uE;Qe.maxScroll=function(n,e){return kr(n,e?si:_n)};Qe.getScrollFunc=function(n,e){return fo(di(n),e?si:_n)};Qe.getById=function(n){return Km[n]};Qe.getAll=function(){return at.filter(function(n){return n.vars.id!=="ScrollSmoother"})};Qe.isScrolling=function(){return!!lr};Qe.snapDirectional=f_;Qe.addEventListener=function(n,e){var t=sa[n]||(sa[n]=[]);~t.indexOf(e)||t.push(e)};Qe.removeEventListener=function(n,e){var t=sa[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Qe.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Le.delayedCall(r,function(){u(h,f),h=[],f=[]}).pause();return function(m){h.length||d.restart(!0),h.push(m.trigger),f.push(m),s<=h.length&&d.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Yn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Yn(s)&&(s=s(),An(Qe,"refresh",function(){return s=e.batchMax()})),au(n).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(Qe.create(c))}),t};var Tx=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},ep=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(on.isTouch?" pinch-zoom":""):"none",e===Li&&n(Mt,t)},Qu={auto:1,scroll:1},Mb=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Le.core.getCache(s),a=Wn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Mt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Qu[(l=ir(s)).overflowY]||Qu[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!ra(s)&&(Qu[(l=ir(s)).overflowY]||Qu[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},hE=function(e,t,i,r){return on.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&Mb,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&An(Et,on.eventTypes[0],Ax,!1,!0)},onDisable:function(){return wn(Et,on.eventTypes[0],Ax,!0)}})},Eb=/(input|label|select|textarea)/i,wx,Ax=function(e){var t=Eb.test(e.target.tagName);(t||wx)&&(e._gsapAllow=!0,wx=t)},Tb=function(e){Do(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=di(e.target)||Li,u=Le.core.globals().ScrollSmoother,h=u&&u.get(),f=Is&&(e.content&&di(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=fo(c,_n),m=fo(c,si),v=1,_=(on.isTouch&&ct.visualViewport?ct.visualViewport.scale*ct.visualViewport.width:ct.outerWidth)/ct.innerWidth,p=0,g=Yn(r)?function(){return r(a)}:function(){return r||2.8},y,M,A=hE(c,e.type,!0,s),T=function(){return M=!1},w=Lr,S=Lr,C=function(){l=kr(c,_n),S=bc(Is?1:0,l),i&&(w=bc(0,kr(c,si))),y=Qo},R=function(){f._gsap.y=lc(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(M){requestAnimationFrame(T);var O=lc(a.deltaY/2),X=S(d.v-O);if(f&&X!==d.v+d.offset){d.offset=X-d.v;var N=lc((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",f._gsap.y=N+"px",d.cacheID=ut.cache,ds()}return!0}d.offset&&R(),M=!0},L,V,G,I,B=function(){C(),L.isActive()&&L.vars.scrollY>l&&(d()>l?L.progress(1)&&d(l):L.resetTo("scrollY",l))};return f&&Le.set(f,{y:"+=0"}),e.ignoreCheck=function(F){return Is&&F.type==="touchmove"&&D()||v>1.05&&F.type!=="touchstart"||a.isGesturing||F.touches&&F.touches.length>1},e.onPress=function(){M=!1;var F=v;v=lc((ct.visualViewport&&ct.visualViewport.scale||1)/_),L.pause(),F!==v&&ep(c,v>1.01?!0:i?!1:"x"),V=m(),G=d(),C(),y=Qo},e.onRelease=e.onGestureStart=function(F,O){if(d.offset&&R(),!O)I.restart(!0);else{ut.cache++;var X=g(),N,te;i&&(N=m(),te=N+X*.05*-F.velocityX/.227,X*=Tx(m,N,te,kr(c,si)),L.vars.scrollX=w(te)),N=d(),te=N+X*.05*-F.velocityY/.227,X*=Tx(d,N,te,kr(c,_n)),L.vars.scrollY=S(te),L.invalidate().duration(X).play(.01),(Is&&L.vars.scrollY>=l||N>=l-1)&&Le.to({},{onUpdate:B,duration:X})}o&&o(F)},e.onWheel=function(){L._ts&&L.pause(),Wn()-p>1e3&&(y=0,p=Wn())},e.onChange=function(F,O,X,N,te){if(Qo!==y&&C(),O&&i&&m(w(N[2]===O?V+(F.startX-F.x):m()+O-N[1])),X){d.offset&&R();var se=te[2]===X,Ce=se?G+F.startY-F.y:d()+X-te[1],Ie=S(Ce);se&&Ce!==Ie&&(G+=Ie-Ce),d(Ie)}(X||O)&&ds()},e.onEnable=function(){ep(c,i?!1:"x"),Qe.addEventListener("refresh",B),An(ct,"resize",B),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=m.smooth=!1),A.enable()},e.onDisable=function(){ep(c,!0),wn(ct,"resize",B),Qe.removeEventListener("refresh",B),A.kill()},e.lockAxis=e.lockAxis!==!1,a=new on(e),a.iOS=Is,Is&&!d()&&d(1),Is&&Le.ticker.add(Lr),I=a._dc,L=Le.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:dE(d,d(),function(){return L.pause()})},onUpdate:ds,onComplete:I.vars.onComplete}),a};Qe.sort=function(n){if(Yn(n))return at.sort(n);var e=ct.pageYOffset||0;return Qe.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ct.innerHeight}),at.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Qe.observe=function(n){return new on(n)};Qe.normalizeScroll=function(n){if(typeof n>"u")return ei;if(n===!0&&ei)return ei.enable();if(n===!1){ei&&ei.kill(),ei=n;return}var e=n instanceof on?n:Tb(n);return ei&&ei.target===e.target&&ei.kill(),ra(e.target)&&(ei=e),e};Qe.core={_getVelocityProp:jm,_inputObserver:hE,_scrollers:ut,_proxies:Gr,bridge:{ss:function(){lr||oa("scrollStart"),lr=Wn()},ref:function(){return Gn}}};tE()&&Le.registerPlugin(Qe);const Mo={hero:{title:"Diseñamos el futuro digital de tu marca",subtitle:"Transformamos ideas en experiencias digitales memorables. Diseño web, redes sociales y SEO que impulsa el crecimiento real de tu negocio.",cta1:"Ver proyectos",cta2:"Hablemos"},services:[{id:1,title:"Diseño Web",description:"Creamos sitios web y tiendas online que convierten visitantes en clientes. Diseño a medida, rápido, seguro y optimizado para todos los dispositivos.",features:["Landing pages de alta conversión","E-commerce con Shopify / WooCommerce","Webs corporativas premium","Diseño UX/UI personalizado"]},{id:2,title:"Redes Sociales",description:"Gestionamos tu presencia en Instagram, TikTok y LinkedIn con contenido que engancha, crece tu comunidad y genera oportunidades reales de negocio.",features:["Estrategia de contenido mensual","Diseño de posts y reels","Community management diario","Campañas de publicidad pagada"]},{id:3,title:"SEO & Posicionamiento",description:"Llevamos tu web a la primera página de Google con estrategias SEO técnicas, de contenido y link building que generan tráfico orgánico sostenible.",features:["Auditoría SEO completa","Optimización técnica on-page","Estrategia de contenidos SEO","Link building de calidad"]}],portfolio:[{id:1,name:"LuxeMode Store",category:"E-commerce",year:"2024",tag:"Web"},{id:2,name:"NexFlow SaaS",category:"Dashboard · SaaS",year:"2024",tag:"Web"},{id:3,name:"La Trattoria",category:"Restaurante · Web",year:"2024",tag:"Web"},{id:4,name:"Frames Studio",category:"Portfolio · Fotógrafo",year:"2023",tag:"Branding"},{id:5,name:"MoveIt App",category:"Identidad · Branding",year:"2024",tag:"Branding"},{id:6,name:"Pulsar Tech",category:"Startup · Web corporativa",year:"2024",tag:"Web"}],contact:{email:"hola@creaar.es",phone:"+34 654 321 000",address:"Barcelona, España · 100% Remote"},socials:{instagram:"https://www.instagram.com/creaar.es",linkedin:"https://www.linkedin.com/company/creaar",tiktok:"https://www.tiktok.com/@creaar.es",facebook:"https://www.facebook.com/creaar.es"}},pE=Be.createContext(null);function wb({children:n}){const[e,t]=Be.useState(()=>{try{const s=localStorage.getItem("creaarData");if(s){const o=JSON.parse(s);return{hero:{...Mo.hero,...o.hero},services:o.services||Mo.services,portfolio:o.portfolio||Mo.portfolio,contact:{...Mo.contact,...o.contact},socials:{...Mo.socials,...o.socials}}}}catch{}return Mo}),i=(s,o)=>{t(a=>{const l={...a,[s]:o};return localStorage.setItem("creaarData",JSON.stringify(l)),l})},r=()=>{localStorage.removeItem("creaarData"),t(Mo)};return x.jsx(pE.Provider,{value:{data:e,updateSection:i,resetData:r},children:n})}function wr(){const n=Be.useContext(pE);if(!n)throw new Error("useData must be used within DataProvider");return n}function Ab(){const{data:n}=wr(),{instagram:e,linkedin:t,tiktok:i,facebook:r}=n.socials,s=Be.useRef(null),[o,a]=Be.useState(!1),[l,c]=Be.useState(!1);Be.useEffect(()=>{_t.fromTo(s.current,{y:-80,opacity:0},{y:0,opacity:1,duration:.8,ease:"power3.out",delay:.2});const d=()=>a(window.scrollY>40);return window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)},[]);const u=d=>{if(c(!1),d.startsWith("#")&&!d.includes("/")){const m=document.querySelector(d);m&&m.scrollIntoView({behavior:"smooth"})}else window.location.hash=d},h=[{label:"Servicios",href:"#services"},{label:"Portfolio",href:"#portfolio"},{label:"Testimonios",href:"#testimonials"},{label:"Contacto",href:"#contact"}],f=[{href:e,title:"Instagram",icon:x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:[x.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5"}),x.jsx("circle",{cx:"12",cy:"12",r:"5"}),x.jsx("circle",{cx:"17.5",cy:"6.5",r:"1",fill:"currentColor",stroke:"none"})]})},{href:t,title:"LinkedIn",icon:x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:[x.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"}),x.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),x.jsx("circle",{cx:"4",cy:"4",r:"2"})]})},{href:i,title:"TikTok",icon:x.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:x.jsx("path",{d:"M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"})})},{href:r,title:"Facebook",icon:x.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:x.jsx("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})})}];return x.jsxs(x.Fragment,{children:[x.jsx("nav",{ref:s,className:`navbar ${o?"scrolled":""}`,children:x.jsxs("div",{className:"container navbar-inner",children:[x.jsxs("a",{href:"#hero",className:"nav-logo",onClick:d=>{d.preventDefault(),u("#hero")},children:["creaar",x.jsx("span",{className:"nav-logo-accent",children:"."}),"es"]}),x.jsx("ul",{className:"nav-links",children:h.map(d=>x.jsx("li",{children:x.jsx("button",{className:"nav-link",onClick:()=>u(d.href),children:d.label})},d.href))}),x.jsxs("div",{className:"nav-right",children:[x.jsx("div",{style:{display:"flex",gap:6},children:f.map(d=>x.jsx("a",{href:d.href,title:d.title,target:"_blank",rel:"noopener noreferrer",className:"social-link",style:{width:32,height:32},children:d.icon},d.title))}),x.jsx("a",{href:"#/admin",className:"nav-admin-link",onClick:d=>{d.preventDefault(),window.location.hash="/admin",window.dispatchEvent(new HashChangeEvent("hashchange"))},children:"Admin"}),x.jsxs("button",{className:"nav-cta",onClick:()=>u("#contact"),children:["Empezar proyecto",x.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:x.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),x.jsxs("button",{className:`nav-mobile-toggle ${l?"open":""}`,onClick:()=>c(!l),"aria-label":"Menú",children:[x.jsx("span",{className:"hamburger-line"}),x.jsx("span",{className:"hamburger-line"}),x.jsx("span",{className:"hamburger-line"})]})]})}),x.jsxs("div",{className:`nav-mobile-menu ${l?"open":""}`,children:[h.map(d=>x.jsx("button",{className:"nav-mobile-link",onClick:()=>u(d.href),children:d.label},d.href)),x.jsx("div",{style:{display:"flex",gap:8,padding:"8px 16px"},children:f.map(d=>x.jsx("a",{href:d.href,title:d.title,target:"_blank",rel:"noopener noreferrer",className:"social-link",style:{width:36,height:36},children:d.icon},d.title))}),x.jsx("button",{className:"nav-mobile-cta",onClick:()=>u("#contact"),children:"Empezar proyecto →"})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const h_="184",Cb=0,Cx=1,bb=2,Yf=1,Rb=2,fc=3,ho=0,Ei=1,os=2,hs=0,fl=1,bx=2,Rx=3,Px=4,Pb=5,Io=100,Nb=101,Db=102,Lb=103,Ib=104,Ub=200,Fb=201,Ob=202,kb=203,Jm=204,eg=205,Bb=206,zb=207,Vb=208,Hb=209,Gb=210,Wb=211,jb=212,Xb=213,Yb=214,tg=0,ng=1,ig=2,Al=3,rg=4,sg=5,og=6,ag=7,mE=0,qb=1,$b=2,Wr=0,gE=1,_E=2,vE=3,xE=4,yE=5,SE=6,ME=7,EE=300,aa=301,Cl=302,tp=303,np=304,lh=306,lg=1e3,us=1001,cg=1002,Dn=1003,Kb=1004,Ju=1005,qn=1006,ip=1007,Vo=1008,Oi=1009,TE=1010,wE=1011,cu=1012,p_=1013,Yr=1014,Br=1015,Ss=1016,m_=1017,g_=1018,uu=1020,AE=35902,CE=35899,bE=1021,RE=1022,yr=1023,Ms=1026,Ho=1027,PE=1028,__=1029,la=1030,v_=1031,x_=1033,qf=33776,$f=33777,Kf=33778,Zf=33779,ug=35840,fg=35841,dg=35842,hg=35843,pg=36196,mg=37492,gg=37496,_g=37488,vg=37489,Id=37490,xg=37491,yg=37808,Sg=37809,Mg=37810,Eg=37811,Tg=37812,wg=37813,Ag=37814,Cg=37815,bg=37816,Rg=37817,Pg=37818,Ng=37819,Dg=37820,Lg=37821,Ig=36492,Ug=36494,Fg=36495,Og=36283,kg=36284,Ud=36285,Bg=36286,Zb=3200,zg=0,Qb=1,Bs="",Ji="srgb",Fd="srgb-linear",Od="linear",Tt="srgb",Sa=7680,Nx=519,Jb=512,e2=513,t2=514,y_=515,n2=516,i2=517,S_=518,r2=519,Dx=35044,Lx="300 es",zr=2e3,fu=2001;function s2(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function kd(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function o2(){const n=kd("canvas");return n.style.display="block",n}const Ix={};function Ux(...n){const e="THREE."+n.shift();console.log(e,...n)}function NE(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function qe(...n){n=NE(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function xt(...n){n=NE(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Vg(...n){const e=n.join(" ");e in Ix||(Ix[e]=!0,qe(...n))}function a2(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const l2={[tg]:ng,[ig]:og,[rg]:ag,[Al]:sg,[ng]:tg,[og]:ig,[ag]:rg,[sg]:Al};class da{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rp=Math.PI/180,Hg=180/Math.PI;function vu(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vn[n&255]+Vn[n>>8&255]+Vn[n>>16&255]+Vn[n>>24&255]+"-"+Vn[e&255]+Vn[e>>8&255]+"-"+Vn[e>>16&15|64]+Vn[e>>24&255]+"-"+Vn[t&63|128]+Vn[t>>8&255]+"-"+Vn[t>>16&255]+Vn[t>>24&255]+Vn[i&255]+Vn[i>>8&255]+Vn[i>>16&255]+Vn[i>>24&255]).toLowerCase()}function ht(n,e,t){return Math.max(e,Math.min(t,n))}function c2(n,e){return(n%e+e)%e}function sp(n,e,t){return(1-t)*n+t*e}function Yl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function fi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const R_=class R_{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};R_.prototype.isVector2=!0;let ke=R_;class Ll{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],f=s[o+0],d=s[o+1],m=s[o+2],v=s[o+3];if(h!==v||l!==f||c!==d||u!==m){let _=l*f+c*d+u*m+h*v;_<0&&(f=-f,d=-d,m=-m,v=-v,_=-_);let p=1-a;if(_<.9995){const g=Math.acos(_),y=Math.sin(g);p=Math.sin(p*g)/y,a=Math.sin(a*g)/y,l=l*p+f*a,c=c*p+d*a,u=u*p+m*a,h=h*p+v*a}else{l=l*p+f*a,c=c*p+d*a,u=u*p+m*a,h=h*p+v*a;const g=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=g,c*=g,u*=g,h*=g}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+u*h+l*d-c*f,e[t+1]=l*m+u*f+c*h-a*d,e[t+2]=c*m+u*d+a*f-l*h,e[t+3]=u*m-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),d=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const P_=class P_{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return op.copy(this).projectOnVector(e),this.sub(op)}reflect(e){return this.sub(op.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};P_.prototype.isVector3=!0;let j=P_;const op=new j,Fx=new Ll,N_=class N_{constructor(e,t,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],m=i[8],v=r[0],_=r[3],p=r[6],g=r[1],y=r[4],M=r[7],A=r[2],T=r[5],w=r[8];return s[0]=o*v+a*g+l*A,s[3]=o*_+a*y+l*T,s[6]=o*p+a*M+l*w,s[1]=c*v+u*g+h*A,s[4]=c*_+u*y+h*T,s[7]=c*p+u*M+h*w,s[2]=f*v+d*g+m*A,s[5]=f*_+d*y+m*T,s[8]=f*p+d*M+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,m=t*h+i*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=h*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ap.makeScale(e,t)),this}rotate(e){return this.premultiply(ap.makeRotation(-e)),this}translate(e,t){return this.premultiply(ap.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};N_.prototype.isMatrix3=!0;let Je=N_;const ap=new Je,Ox=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kx=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function u2(){const n={enabled:!0,workingColorSpace:Fd,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Tt&&(r.r=ps(r.r),r.g=ps(r.g),r.b=ps(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Tt&&(r.r=dl(r.r),r.g=dl(r.g),r.b=dl(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Bs?Od:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Vg("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Vg("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Fd]:{primaries:e,whitePoint:i,transfer:Od,toXYZ:Ox,fromXYZ:kx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ji},outputColorSpaceConfig:{drawingBufferColorSpace:Ji}},[Ji]:{primaries:e,whitePoint:i,transfer:Tt,toXYZ:Ox,fromXYZ:kx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ji}}}),n}const mt=u2();function ps(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function dl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ma;class f2{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ma===void 0&&(Ma=kd("canvas")),Ma.width=e.width,Ma.height=e.height;const r=Ma.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ma}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=kd("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ps(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ps(t[i]/255)*255):t[i]=ps(t[i]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let d2=0;class M_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:d2++}),this.uuid=vu(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(lp(r[o].image)):s.push(lp(r[o]))}else s=lp(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function lp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?f2.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let h2=0;const cp=new j;class ai extends da{constructor(e=ai.DEFAULT_IMAGE,t=ai.DEFAULT_MAPPING,i=us,r=us,s=qn,o=Vo,a=yr,l=Oi,c=ai.DEFAULT_ANISOTROPY,u=Bs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h2++}),this.uuid=vu(),this.name="",this.source=new M_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cp).x}get height(){return this.source.getSize(cp).y}get depth(){return this.source.getSize(cp).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==EE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lg:e.x=e.x-Math.floor(e.x);break;case us:e.x=e.x<0?0:1;break;case cg:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lg:e.y=e.y-Math.floor(e.y);break;case us:e.y=e.y<0?0:1;break;case cg:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=EE;ai.DEFAULT_ANISOTROPY=1;const D_=class D_{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],v=l[2],_=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(m-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(m+_)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,M=(d+1)/2,A=(p+1)/2,T=(u+f)/4,w=(h+v)/4,S=(m+_)/4;return y>M&&y>A?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=w/i):M>A?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=S/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=w/s,r=S/s),this.set(i,r,s,t),this}let g=Math.sqrt((_-m)*(_-m)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(_-m)/g,this.y=(h-v)/g,this.z=(f-u)/g,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};D_.prototype.isVector4=!0;let Zt=D_;class p2 extends da{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new ai(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new M_(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jr extends p2{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class DE extends ai{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class m2 extends ai{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vd=class Vd{constructor(e,t,i,r,s,o,a,l,c,u,h,f,d,m,v,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,d,m,v,_)}set(e,t,i,r,s,o,a,l,c,u,h,f,d,m,v,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=v,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vd().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Ea.setFromMatrixColumn(e,0).length(),s=1/Ea.setFromMatrixColumn(e,1).length(),o=1/Ea.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,m=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,m=c*u,v=c*h;t[0]=f+v*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,m=c*u,v=c*h;t[0]=f-v*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,m=a*u,v=a*h;t[0]=l*u,t[4]=m*c-d,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,m=a*l,v=a*c;t[0]=l*u,t[4]=v-f*h,t[8]=m*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+m,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*l,d=o*c,m=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=o*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(g2,e,_2)}lookAt(e,t,i){const r=this.elements;return Ci.subVectors(e,t),Ci.lengthSq()===0&&(Ci.z=1),Ci.normalize(),bs.crossVectors(i,Ci),bs.lengthSq()===0&&(Math.abs(i.z)===1?Ci.x+=1e-4:Ci.z+=1e-4,Ci.normalize(),bs.crossVectors(i,Ci)),bs.normalize(),ef.crossVectors(Ci,bs),r[0]=bs.x,r[4]=ef.x,r[8]=Ci.x,r[1]=bs.y,r[5]=ef.y,r[9]=Ci.y,r[2]=bs.z,r[6]=ef.z,r[10]=Ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],m=i[2],v=i[6],_=i[10],p=i[14],g=i[3],y=i[7],M=i[11],A=i[15],T=r[0],w=r[4],S=r[8],C=r[12],R=r[1],D=r[5],L=r[9],V=r[13],G=r[2],I=r[6],B=r[10],F=r[14],O=r[3],X=r[7],N=r[11],te=r[15];return s[0]=o*T+a*R+l*G+c*O,s[4]=o*w+a*D+l*I+c*X,s[8]=o*S+a*L+l*B+c*N,s[12]=o*C+a*V+l*F+c*te,s[1]=u*T+h*R+f*G+d*O,s[5]=u*w+h*D+f*I+d*X,s[9]=u*S+h*L+f*B+d*N,s[13]=u*C+h*V+f*F+d*te,s[2]=m*T+v*R+_*G+p*O,s[6]=m*w+v*D+_*I+p*X,s[10]=m*S+v*L+_*B+p*N,s[14]=m*C+v*V+_*F+p*te,s[3]=g*T+y*R+M*G+A*O,s[7]=g*w+y*D+M*I+A*X,s[11]=g*S+y*L+M*B+A*N,s[15]=g*C+y*V+M*F+A*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],v=e[7],_=e[11],p=e[15],g=l*d-c*f,y=a*d-c*h,M=a*f-l*h,A=o*d-c*u,T=o*f-l*u,w=o*h-a*u;return t*(v*g-_*y+p*M)-i*(m*g-_*A+p*T)+r*(m*y-v*A+p*w)-s*(m*M-v*T+_*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],v=e[13],_=e[14],p=e[15],g=t*a-i*o,y=t*l-r*o,M=t*c-s*o,A=i*l-r*a,T=i*c-s*a,w=r*c-s*l,S=u*v-h*m,C=u*_-f*m,R=u*p-d*m,D=h*_-f*v,L=h*p-d*v,V=f*p-d*_,G=g*V-y*L+M*D+A*R-T*C+w*S;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/G;return e[0]=(a*V-l*L+c*D)*I,e[1]=(r*L-i*V-s*D)*I,e[2]=(v*w-_*T+p*A)*I,e[3]=(f*T-h*w-d*A)*I,e[4]=(l*R-o*V-c*C)*I,e[5]=(t*V-r*R+s*C)*I,e[6]=(_*M-m*w-p*y)*I,e[7]=(u*w-f*M+d*y)*I,e[8]=(o*L-a*R+c*S)*I,e[9]=(i*R-t*L-s*S)*I,e[10]=(m*T-v*M+p*g)*I,e[11]=(h*M-u*T-d*g)*I,e[12]=(a*C-o*D-l*S)*I,e[13]=(t*D-i*C+r*S)*I,e[14]=(v*y-m*A-_*g)*I,e[15]=(u*A-h*y+f*g)*I,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,m=s*h,v=o*u,_=o*h,p=a*h,g=l*c,y=l*u,M=l*h,A=i.x,T=i.y,w=i.z;return r[0]=(1-(v+p))*A,r[1]=(d+M)*A,r[2]=(m-y)*A,r[3]=0,r[4]=(d-M)*T,r[5]=(1-(f+p))*T,r[6]=(_+g)*T,r[7]=0,r[8]=(m+y)*w,r[9]=(_-g)*w,r[10]=(1-(f+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let o=Ea.set(r[0],r[1],r[2]).length();const a=Ea.set(r[4],r[5],r[6]).length(),l=Ea.set(r[8],r[9],r[10]).length();s<0&&(o=-o),dr.copy(this);const c=1/o,u=1/a,h=1/l;return dr.elements[0]*=c,dr.elements[1]*=c,dr.elements[2]*=c,dr.elements[4]*=u,dr.elements[5]*=u,dr.elements[6]*=u,dr.elements[8]*=h,dr.elements[9]*=h,dr.elements[10]*=h,t.setFromRotationMatrix(dr),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=zr,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let m,v;if(l)m=s/(o-s),v=o*s/(o-s);else if(a===zr)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===fu)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=zr,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-r),f=-(t+e)/(t-e),d=-(i+r)/(i-r);let m,v;if(l)m=1/(o-s),v=o/(o-s);else if(a===zr)m=-2/(o-s),v=-(o+s)/(o-s);else if(a===fu)m=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Vd.prototype.isMatrix4=!0;let Jt=Vd;const Ea=new j,dr=new Jt,g2=new j(0,0,0),_2=new j(1,1,1),bs=new j,ef=new j,Ci=new j,Bx=new Jt,zx=new Ll;class po{constructor(e=0,t=0,i=0,r=po.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bx,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zx.setFromEuler(this),this.setFromQuaternion(zx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}po.DEFAULT_ORDER="XYZ";class LE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let v2=0;const Vx=new j,Ta=new Ll,Kr=new Jt,tf=new j,ql=new j,x2=new j,y2=new Ll,Hx=new j(1,0,0),Gx=new j(0,1,0),Wx=new j(0,0,1),jx={type:"added"},S2={type:"removed"},wa={type:"childadded",child:null},up={type:"childremoved",child:null};class Un extends da{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v2++}),this.uuid=vu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new j,t=new po,i=new Ll,r=new j(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Je}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new LE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ta.setFromAxisAngle(e,t),this.quaternion.multiply(Ta),this}rotateOnWorldAxis(e,t){return Ta.setFromAxisAngle(e,t),this.quaternion.premultiply(Ta),this}rotateX(e){return this.rotateOnAxis(Hx,e)}rotateY(e){return this.rotateOnAxis(Gx,e)}rotateZ(e){return this.rotateOnAxis(Wx,e)}translateOnAxis(e,t){return Vx.copy(e).applyQuaternion(this.quaternion),this.position.add(Vx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hx,e)}translateY(e){return this.translateOnAxis(Gx,e)}translateZ(e){return this.translateOnAxis(Wx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?tf.copy(e):tf.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ql.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kr.lookAt(ql,tf,this.up):Kr.lookAt(tf,ql,this.up),this.quaternion.setFromRotationMatrix(Kr),r&&(Kr.extractRotation(r.matrixWorld),Ta.setFromRotationMatrix(Kr),this.quaternion.premultiply(Ta.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(xt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jx),wa.child=e,this.dispatchEvent(wa),wa.child=null):xt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(S2),up.child=e,this.dispatchEvent(up),up.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jx),wa.child=e,this.dispatchEvent(wa),wa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ql,e,x2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ql,y2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Un.DEFAULT_UP=new j(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class dc extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const M2={type:"move"};class fp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const _=t.getJointPose(v,i),p=this._getHandJoint(c,v);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(M2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new dc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const IE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rs={h:0,s:0,l:0},nf={h:0,s:0,l:0};function dp(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ji){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=mt.workingColorSpace){if(e=c2(e,1),t=ht(t,0,1),i=ht(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=dp(o,s,e+1/3),this.g=dp(o,s,e),this.b=dp(o,s,e-1/3)}return mt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ji){function i(s){s!==void 0&&parseFloat(s)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ji){const i=IE[e.toLowerCase()];return i!==void 0?this.setHex(i,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}copyLinearToSRGB(e){return this.r=dl(e.r),this.g=dl(e.g),this.b=dl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ji){return mt.workingToColorSpace(Hn.copy(this),e),Math.round(ht(Hn.r*255,0,255))*65536+Math.round(ht(Hn.g*255,0,255))*256+Math.round(ht(Hn.b*255,0,255))}getHexString(e=Ji){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(Hn.copy(this),t);const i=Hn.r,r=Hn.g,s=Hn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(Hn.copy(this),t),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=Ji){mt.workingToColorSpace(Hn.copy(this),e);const t=Hn.r,i=Hn.g,r=Hn.b;return e!==Ji?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Rs),this.setHSL(Rs.h+e,Rs.s+t,Rs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Rs),e.getHSL(nf);const i=sp(Rs.h,nf.h,t),r=sp(Rs.s,nf.s,t),s=sp(Rs.l,nf.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Ye;Ye.NAMES=IE;class E2 extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new po,this.environmentIntensity=1,this.environmentRotation=new po,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const hr=new j,Zr=new j,hp=new j,Qr=new j,Aa=new j,Ca=new j,Xx=new j,pp=new j,mp=new j,gp=new j,_p=new Zt,vp=new Zt,xp=new Zt;class xr{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),hr.subVectors(e,t),r.cross(hr);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){hr.subVectors(r,t),Zr.subVectors(i,t),hp.subVectors(e,t);const o=hr.dot(hr),a=hr.dot(Zr),l=hr.dot(hp),c=Zr.dot(Zr),u=Zr.dot(hp),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Qr)===null?!1:Qr.x>=0&&Qr.y>=0&&Qr.x+Qr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Qr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qr.x),l.addScaledVector(o,Qr.y),l.addScaledVector(a,Qr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return _p.setScalar(0),vp.setScalar(0),xp.setScalar(0),_p.fromBufferAttribute(e,t),vp.fromBufferAttribute(e,i),xp.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(_p,s.x),o.addScaledVector(vp,s.y),o.addScaledVector(xp,s.z),o}static isFrontFacing(e,t,i,r){return hr.subVectors(i,t),Zr.subVectors(e,t),hr.cross(Zr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hr.subVectors(this.c,this.b),Zr.subVectors(this.a,this.b),hr.cross(Zr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return xr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return xr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Aa.subVectors(r,i),Ca.subVectors(s,i),pp.subVectors(e,i);const l=Aa.dot(pp),c=Ca.dot(pp);if(l<=0&&c<=0)return t.copy(i);mp.subVectors(e,r);const u=Aa.dot(mp),h=Ca.dot(mp);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Aa,o);gp.subVectors(e,s);const d=Aa.dot(gp),m=Ca.dot(gp);if(m>=0&&d<=m)return t.copy(s);const v=d*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(Ca,a);const _=u*m-d*h;if(_<=0&&h-u>=0&&d-m>=0)return Xx.subVectors(s,r),a=(h-u)/(h-u+(d-m)),t.copy(r).addScaledVector(Xx,a);const p=1/(_+v+f);return o=v*p,a=f*p,t.copy(i).addScaledVector(Aa,o).addScaledVector(Ca,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xu{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pr):pr.fromBufferAttribute(s,o),pr.applyMatrix4(e.matrixWorld),this.expandByPoint(pr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rf.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rf.copy(i.boundingBox)),rf.applyMatrix4(e.matrixWorld),this.union(rf)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pr),pr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($l),sf.subVectors(this.max,$l),ba.subVectors(e.a,$l),Ra.subVectors(e.b,$l),Pa.subVectors(e.c,$l),Ps.subVectors(Ra,ba),Ns.subVectors(Pa,Ra),Eo.subVectors(ba,Pa);let t=[0,-Ps.z,Ps.y,0,-Ns.z,Ns.y,0,-Eo.z,Eo.y,Ps.z,0,-Ps.x,Ns.z,0,-Ns.x,Eo.z,0,-Eo.x,-Ps.y,Ps.x,0,-Ns.y,Ns.x,0,-Eo.y,Eo.x,0];return!yp(t,ba,Ra,Pa,sf)||(t=[1,0,0,0,1,0,0,0,1],!yp(t,ba,Ra,Pa,sf))?!1:(of.crossVectors(Ps,Ns),t=[of.x,of.y,of.z],yp(t,ba,Ra,Pa,sf))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Jr=[new j,new j,new j,new j,new j,new j,new j,new j],pr=new j,rf=new xu,ba=new j,Ra=new j,Pa=new j,Ps=new j,Ns=new j,Eo=new j,$l=new j,sf=new j,of=new j,To=new j;function yp(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){To.fromArray(n,s);const a=r.x*Math.abs(To.x)+r.y*Math.abs(To.y)+r.z*Math.abs(To.z),l=e.dot(To),c=t.dot(To),u=i.dot(To);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const un=new j,af=new ke;let T2=0;class Er extends da{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:T2++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Dx,this.updateRanges=[],this.gpuType=Br,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)af.fromBufferAttribute(this,t),af.applyMatrix3(e),this.setXY(t,af.x,af.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Yl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=fi(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yl(t,this.array)),t}setX(e,t){return this.normalized&&(t=fi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yl(t,this.array)),t}setY(e,t){return this.normalized&&(t=fi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=fi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yl(t,this.array)),t}setW(e,t){return this.normalized&&(t=fi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=fi(t,this.array),i=fi(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=fi(t,this.array),i=fi(i,this.array),r=fi(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=fi(t,this.array),i=fi(i,this.array),r=fi(r,this.array),s=fi(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class UE extends Er{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class FE extends Er{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class an extends Er{constructor(e,t,i){super(new Float32Array(e),t,i)}}const w2=new xu,Kl=new j,Sp=new j;class ch{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):w2.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kl.subVectors(e,this.center);const t=Kl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Kl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kl.copy(e.center).add(Sp)),this.expandByPoint(Kl.copy(e.center).sub(Sp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let A2=0;const Ki=new Jt,Mp=new Un,Na=new j,bi=new xu,Zl=new xu,Tn=new j;class ui extends da{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A2++}),this.uuid=vu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(s2(e)?FE:UE)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ki.makeRotationFromQuaternion(e),this.applyMatrix4(Ki),this}rotateX(e){return Ki.makeRotationX(e),this.applyMatrix4(Ki),this}rotateY(e){return Ki.makeRotationY(e),this.applyMatrix4(Ki),this}rotateZ(e){return Ki.makeRotationZ(e),this.applyMatrix4(Ki),this}translate(e,t,i){return Ki.makeTranslation(e,t,i),this.applyMatrix4(Ki),this}scale(e,t,i){return Ki.makeScale(e,t,i),this.applyMatrix4(Ki),this}lookAt(e){return Mp.lookAt(e),Mp.updateMatrix(),this.applyMatrix4(Mp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Na).negate(),this.translate(Na.x,Na.y,Na.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new an(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];bi.setFromBufferAttribute(s),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,bi.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,bi.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(bi.min),this.boundingBox.expandByPoint(bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ch);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(bi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Zl.setFromBufferAttribute(a),this.morphTargetsRelative?(Tn.addVectors(bi.min,Zl.min),bi.expandByPoint(Tn),Tn.addVectors(bi.max,Zl.max),bi.expandByPoint(Tn)):(bi.expandByPoint(Zl.min),bi.expandByPoint(Zl.max))}bi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Tn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Tn.fromBufferAttribute(a,c),l&&(Na.fromBufferAttribute(e,c),Tn.add(Na)),r=Math.max(r,i.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Er(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<i.count;S++)a[S]=new j,l[S]=new j;const c=new j,u=new j,h=new j,f=new ke,d=new ke,m=new ke,v=new j,_=new j;function p(S,C,R){c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,R),f.fromBufferAttribute(s,S),d.fromBufferAttribute(s,C),m.fromBufferAttribute(s,R),u.sub(c),h.sub(c),d.sub(f),m.sub(f);const D=1/(d.x*m.y-m.x*d.y);isFinite(D)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(D),_.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(D),a[S].add(v),a[C].add(v),a[R].add(v),l[S].add(_),l[C].add(_),l[R].add(_))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let S=0,C=g.length;S<C;++S){const R=g[S],D=R.start,L=R.count;for(let V=D,G=D+L;V<G;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const y=new j,M=new j,A=new j,T=new j;function w(S){A.fromBufferAttribute(r,S),T.copy(A);const C=a[S];y.copy(C),y.sub(A.multiplyScalar(A.dot(C))).normalize(),M.crossVectors(T,C);const D=M.dot(l[S])<0?-1:1;o.setXYZW(S,y.x,y.y,y.z,D)}for(let S=0,C=g.length;S<C;++S){const R=g[S],D=R.start,L=R.count;for(let V=D,G=D+L;V<G;V+=3)w(e.getX(V+0)),w(e.getX(V+1)),w(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Er(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,c=new j,u=new j,h=new j;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),v=e.getX(f+1),_=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,_),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,_),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tn.fromBufferAttribute(e,t),Tn.normalize(),e.setXYZ(t,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,m=0;for(let v=0,_=l.length;v<_;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new Er(f,u,h)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ui,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let C2=0;class Il extends da{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C2++}),this.uuid=vu(),this.name="",this.type="Material",this.blending=fl,this.side=ho,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jm,this.blendDst=eg,this.blendEquation=Io,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Al,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sa,this.stencilZFail=Sa,this.stencilZPass=Sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fl&&(i.blending=this.blending),this.side!==ho&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jm&&(i.blendSrc=this.blendSrc),this.blendDst!==eg&&(i.blendDst=this.blendDst),this.blendEquation!==Io&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Al&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Sa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Sa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const es=new j,Ep=new j,lf=new j,Ds=new j,Tp=new j,cf=new j,wp=new j;class OE{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,es)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=es.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(es.copy(this.origin).addScaledVector(this.direction,t),es.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ep.copy(e).add(t).multiplyScalar(.5),lf.copy(t).sub(e).normalize(),Ds.copy(this.origin).sub(Ep);const s=e.distanceTo(t)*.5,o=-this.direction.dot(lf),a=Ds.dot(this.direction),l=-Ds.dot(lf),c=Ds.lengthSq(),u=Math.abs(1-o*o);let h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=s*u,h>=0)if(f>=-m)if(f<=m){const v=1/u;h*=v,f*=v,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ep).addScaledVector(lf,f),d}intersectSphere(e,t){es.subVectors(e.center,this.origin);const i=es.dot(this.direction),r=es.dot(es)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,es)!==null}intersectTriangle(e,t,i,r,s){Tp.subVectors(t,e),cf.subVectors(i,e),wp.crossVectors(Tp,cf);let o=this.direction.dot(wp),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ds.subVectors(this.origin,e);const l=a*this.direction.dot(cf.crossVectors(Ds,cf));if(l<0)return null;const c=a*this.direction.dot(Tp.cross(Ds));if(c<0||l+c>o)return null;const u=-a*Ds.dot(wp);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class E_ extends Il{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new po,this.combine=mE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yx=new Jt,wo=new OE,uf=new ch,qx=new j,ff=new j,df=new j,hf=new j,Ap=new j,pf=new j,$x=new j,mf=new j;class ri extends Un{constructor(e=new ui,t=new E_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){pf.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Ap.fromBufferAttribute(h,e),o?pf.addScaledVector(Ap,u):pf.addScaledVector(Ap.sub(t),u))}t.add(pf)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),uf.copy(i.boundingSphere),uf.applyMatrix4(s),wo.copy(e.ray).recast(e.near),!(uf.containsPoint(wo.origin)===!1&&(wo.intersectSphere(uf,qx)===null||wo.origin.distanceToSquared(qx)>(e.far-e.near)**2))&&(Yx.copy(s).invert(),wo.copy(e.ray).applyMatrix4(Yx),!(i.boundingBox!==null&&wo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wo)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){const _=f[m],p=o[_.materialIndex],g=Math.max(_.start,d.start),y=Math.min(a.count,Math.min(_.start+_.count,d.start+d.count));for(let M=g,A=y;M<A;M+=3){const T=a.getX(M),w=a.getX(M+1),S=a.getX(M+2);r=gf(this,p,e,i,c,u,h,T,w,S),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let _=m,p=v;_<p;_+=3){const g=a.getX(_),y=a.getX(_+1),M=a.getX(_+2);r=gf(this,o,e,i,c,u,h,g,y,M),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){const _=f[m],p=o[_.materialIndex],g=Math.max(_.start,d.start),y=Math.min(l.count,Math.min(_.start+_.count,d.start+d.count));for(let M=g,A=y;M<A;M+=3){const T=M,w=M+1,S=M+2;r=gf(this,p,e,i,c,u,h,T,w,S),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let _=m,p=v;_<p;_+=3){const g=_,y=_+1,M=_+2;r=gf(this,o,e,i,c,u,h,g,y,M),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function b2(n,e,t,i,r,s,o,a){let l;if(e.side===Ei?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ho,a),l===null)return null;mf.copy(a),mf.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(mf);return c<t.near||c>t.far?null:{distance:c,point:mf.clone(),object:n}}function gf(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ff),n.getVertexPosition(l,df),n.getVertexPosition(c,hf);const u=b2(n,e,t,i,ff,df,hf,$x);if(u){const h=new j;xr.getBarycoord($x,ff,df,hf,h),r&&(u.uv=xr.getInterpolatedAttribute(r,a,l,c,h,new ke)),s&&(u.uv1=xr.getInterpolatedAttribute(s,a,l,c,h,new ke)),o&&(u.normal=xr.getInterpolatedAttribute(o,a,l,c,h,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new j,materialIndex:0};xr.getNormal(ff,df,hf,f.normal),u.face=f,u.barycoord=h}return u}class R2 extends ai{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Dn,u=Dn,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cp=new j,P2=new j,N2=new Je;class Lo{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Cp.subVectors(i,t).cross(P2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Cp),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||N2.getNormalMatrix(e),r=this.coplanarPoint(Cp).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ao=new ch,D2=new ke(.5,.5),_f=new j;class T_{constructor(e=new Lo,t=new Lo,i=new Lo,r=new Lo,s=new Lo,o=new Lo){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],m=s[8],v=s[9],_=s[10],p=s[11],g=s[12],y=s[13],M=s[14],A=s[15];if(r[0].setComponents(c-o,d-u,p-m,A-g).normalize(),r[1].setComponents(c+o,d+u,p+m,A+g).normalize(),r[2].setComponents(c+a,d+h,p+v,A+y).normalize(),r[3].setComponents(c-a,d-h,p-v,A-y).normalize(),i)r[4].setComponents(l,f,_,M).normalize(),r[5].setComponents(c-l,d-f,p-_,A-M).normalize();else if(r[4].setComponents(c-l,d-f,p-_,A-M).normalize(),t===zr)r[5].setComponents(c+l,d+f,p+_,A+M).normalize();else if(t===fu)r[5].setComponents(l,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ao.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ao.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ao)}intersectsSprite(e){Ao.center.set(0,0,0);const t=D2.distanceTo(e.center);return Ao.radius=.7071067811865476+t,Ao.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ao)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(_f.x=r.normal.x>0?e.max.x:e.min.x,_f.y=r.normal.y>0?e.max.y:e.min.y,_f.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_f)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kE extends Il{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kx=new Jt,Gg=new OE,vf=new ch,xf=new j;class L2 extends Un{constructor(e=new ui,t=new kE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vf.copy(i.boundingSphere),vf.applyMatrix4(r),vf.radius+=s,e.ray.intersectsSphere(vf)===!1)return;Kx.copy(r).invert(),Gg.copy(e.ray).applyMatrix4(Kx);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,v=d;m<v;m++){const _=c.getX(m);xf.fromBufferAttribute(h,_),Zx(xf,_,l,r,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,v=d;m<v;m++)xf.fromBufferAttribute(h,m),Zx(xf,m,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zx(n,e,t,i,r,s,o){const a=Gg.distanceSqToPoint(n);if(a<t){const l=new j;Gg.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class BE extends ai{constructor(e=[],t=aa,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bl extends ai{constructor(e,t,i=Yr,r,s,o,a=Dn,l=Dn,c,u=Ms,h=1){if(u!==Ms&&u!==Ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new M_(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class I2 extends bl{constructor(e,t=Yr,i=aa,r,s,o=Dn,a=Dn,l,c=Ms){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class zE extends ai{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yu extends ui{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(u,3)),this.setAttribute("uv",new an(h,2));function m(v,_,p,g,y,M,A,T,w,S,C){const R=M/w,D=A/S,L=M/2,V=A/2,G=T/2,I=w+1,B=S+1;let F=0,O=0;const X=new j;for(let N=0;N<B;N++){const te=N*D-V;for(let se=0;se<I;se++){const Ce=se*R-L;X[v]=Ce*g,X[_]=te*y,X[p]=G,c.push(X.x,X.y,X.z),X[v]=0,X[_]=0,X[p]=T>0?1:-1,u.push(X.x,X.y,X.z),h.push(se/w),h.push(1-N/S),F+=1}}for(let N=0;N<S;N++)for(let te=0;te<w;te++){const se=f+te+I*N,Ce=f+te+I*(N+1),Ie=f+(te+1)+I*(N+1),be=f+(te+1)+I*N;l.push(se,Ce,be),l.push(Ce,Ie,be),O+=6}a.addGroup(d,O,C),d+=O,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Bd extends ui{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let m=0;const v=[],_=i/2;let p=0;g(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new an(h,3)),this.setAttribute("normal",new an(f,3)),this.setAttribute("uv",new an(d,2));function g(){const M=new j,A=new j;let T=0;const w=(t-e)/i;for(let S=0;S<=s;S++){const C=[],R=S/s,D=R*(t-e)+e;for(let L=0;L<=r;L++){const V=L/r,G=V*l+a,I=Math.sin(G),B=Math.cos(G);A.x=D*I,A.y=-R*i+_,A.z=D*B,h.push(A.x,A.y,A.z),M.set(I,w,B).normalize(),f.push(M.x,M.y,M.z),d.push(V,1-R),C.push(m++)}v.push(C)}for(let S=0;S<r;S++)for(let C=0;C<s;C++){const R=v[C][S],D=v[C+1][S],L=v[C+1][S+1],V=v[C][S+1];(e>0||C!==0)&&(u.push(R,D,V),T+=3),(t>0||C!==s-1)&&(u.push(D,L,V),T+=3)}c.addGroup(p,T,0),p+=T}function y(M){const A=m,T=new ke,w=new j;let S=0;const C=M===!0?e:t,R=M===!0?1:-1;for(let L=1;L<=r;L++)h.push(0,_*R,0),f.push(0,R,0),d.push(.5,.5),m++;const D=m;for(let L=0;L<=r;L++){const G=L/r*l+a,I=Math.cos(G),B=Math.sin(G);w.x=C*B,w.y=_*R,w.z=C*I,h.push(w.x,w.y,w.z),f.push(0,R,0),T.x=I*.5+.5,T.y=B*.5*R+.5,d.push(T.x,T.y),m++}for(let L=0;L<r;L++){const V=A+L,G=D+L;M===!0?u.push(G,G+1,V):u.push(G+1,G,V),S+=3}c.addGroup(p,S,M===!0?1:2),p+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zd extends ui{constructor(e=[new ke(0,-.5),new ke(.5,0),new ke(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=ht(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/t,h=new j,f=new ke,d=new j,m=new j,v=new j;let _=0,p=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:_=e[g+1].x-e[g].x,p=e[g+1].y-e[g].y,d.x=p*1,d.y=-_,d.z=p*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:_=e[g+1].x-e[g].x,p=e[g+1].y-e[g].y,d.x=p*1,d.y=-_,d.z=p*0,m.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(m)}for(let g=0;g<=t;g++){const y=i+g*u*r,M=Math.sin(y),A=Math.cos(y);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*M,h.y=e[T].y,h.z=e[T].x*A,o.push(h.x,h.y,h.z),f.x=g/t,f.y=T/(e.length-1),a.push(f.x,f.y);const w=l[3*T+0]*M,S=l[3*T+1],C=l[3*T+0]*A;c.push(w,S,C)}}for(let g=0;g<t;g++)for(let y=0;y<e.length-1;y++){const M=y+g*e.length,A=M,T=M+e.length,w=M+e.length+1,S=M+1;s.push(A,T,S),s.push(w,S,T)}this.setIndex(s),this.setAttribute("position",new an(o,3)),this.setAttribute("uv",new an(a,2)),this.setAttribute("normal",new an(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zd(e.points,e.segments,e.phiStart,e.phiLength)}}class uh extends ui{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],m=[],v=[],_=[];for(let p=0;p<u;p++){const g=p*f-o;for(let y=0;y<c;y++){const M=y*h-s;m.push(M,-g,0),v.push(0,0,1),_.push(y/a),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let g=0;g<a;g++){const y=g+c*p,M=g+c*(p+1),A=g+1+c*(p+1),T=g+1+c*p;d.push(y,M,T),d.push(M,A,T)}this.setIndex(d),this.setAttribute("position",new an(m,3)),this.setAttribute("normal",new an(v,3)),this.setAttribute("uv",new an(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uh(e.width,e.height,e.widthSegments,e.heightSegments)}}class w_ extends ui{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new j,f=new j,d=[],m=[],v=[],_=[];for(let p=0;p<=i;p++){const g=[],y=p/i;let M=0;p===0&&o===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let A=0;A<=t;A++){const T=A/t;h.x=-e*Math.cos(r+T*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(r+T*s)*Math.sin(o+y*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),_.push(T+M,1-y),g.push(c++)}u.push(g)}for(let p=0;p<i;p++)for(let g=0;g<t;g++){const y=u[p][g+1],M=u[p][g],A=u[p+1][g],T=u[p+1][g+1];(p!==0||o>0)&&d.push(y,M,T),(p!==i-1||l<Math.PI)&&d.push(M,A,T)}this.setIndex(d),this.setAttribute("position",new an(m,3)),this.setAttribute("normal",new an(v,3)),this.setAttribute("uv",new an(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new w_(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class A_ extends ui{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],u=[],h=[],f=new j,d=new j,m=new j;for(let v=0;v<=i;v++){const _=o+v/i*a;for(let p=0;p<=r;p++){const g=p/r*s;d.x=(e+t*Math.cos(_))*Math.cos(g),d.y=(e+t*Math.cos(_))*Math.sin(g),d.z=t*Math.sin(_),c.push(d.x,d.y,d.z),f.x=e*Math.cos(g),f.y=e*Math.sin(g),m.subVectors(d,f).normalize(),u.push(m.x,m.y,m.z),h.push(p/r),h.push(v/i)}}for(let v=1;v<=i;v++)for(let _=1;_<=r;_++){const p=(r+1)*v+_-1,g=(r+1)*(v-1)+_-1,y=(r+1)*(v-1)+_,M=(r+1)*v+_;l.push(p,g,M),l.push(g,y,M)}this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(u,3)),this.setAttribute("uv",new an(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new A_(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Rl(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Qx(r))r.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Qx(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Jn(n){const e={};for(let t=0;t<n.length;t++){const i=Rl(n[t]);for(const r in i)e[r]=i[r]}return e}function Qx(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function U2(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function VE(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const F2={clone:Rl,merge:Jn};var O2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,k2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qr extends Il{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O2,this.fragmentShader=k2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rl(e.uniforms),this.uniformsGroups=U2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class B2 extends qr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class z2 extends Il{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zg,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new po,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class V2 extends Il{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class H2 extends Il{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class C_ extends Un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const bp=new Jt,Jx=new j,ey=new j;class HE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=Oi,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new T_,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Jx.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jx),ey.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ey),t.updateMatrixWorld(),bp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bp,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===fu||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const yf=new j,Sf=new Ll,br=new j;class GE extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=zr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yf,Sf,br),br.x===1&&br.y===1&&br.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yf,Sf,br.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(yf,Sf,br),br.x===1&&br.y===1&&br.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yf,Sf,br.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ls=new j,ty=new ke,ny=new ke;class Ii extends GE{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hg*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hg*2*Math.atan(Math.tan(rp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ls.x,Ls.y).multiplyScalar(-e/Ls.z),Ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ls.x,Ls.y).multiplyScalar(-e/Ls.z)}getViewSize(e,t){return this.getViewBounds(e,ty,ny),t.subVectors(ny,ty)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rp*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class G2 extends HE{constructor(){super(new Ii(90,1,.5,500)),this.isPointLightShadow=!0}}class iy extends C_{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new G2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class b_ extends GE{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class W2 extends HE{constructor(){super(new b_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class j2 extends C_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new W2}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class X2 extends C_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Da=-90,La=1;class Y2 extends Un{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ii(Da,La,e,t);r.layers=this.layers,this.add(r);const s=new Ii(Da,La,e,t);s.layers=this.layers,this.add(s);const o=new Ii(Da,La,e,t);o.layers=this.layers,this.add(o);const a=new Ii(Da,La,e,t);a.layers=this.layers,this.add(a);const l=new Ii(Da,La,e,t);l.layers=this.layers,this.add(l);const c=new Ii(Da,La,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===zr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class q2 extends Ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class $2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,qe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const L_=class L_{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};L_.prototype.isMatrix2=!0;let ry=L_;function sy(n,e,t,i){const r=K2(i);switch(t){case bE:return n*e;case PE:return n*e/r.components*r.byteLength;case __:return n*e/r.components*r.byteLength;case la:return n*e*2/r.components*r.byteLength;case v_:return n*e*2/r.components*r.byteLength;case RE:return n*e*3/r.components*r.byteLength;case yr:return n*e*4/r.components*r.byteLength;case x_:return n*e*4/r.components*r.byteLength;case qf:case $f:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Kf:case Zf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fg:case hg:return Math.max(n,16)*Math.max(e,8)/4;case ug:case dg:return Math.max(n,8)*Math.max(e,8)/2;case pg:case mg:case _g:case vg:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gg:case Id:case xg:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yg:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sg:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Mg:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Eg:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Tg:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case wg:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ag:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Cg:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case bg:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Rg:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Pg:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ng:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Dg:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Lg:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ig:case Ug:case Fg:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Og:case kg:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ud:case Bg:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function K2(n){switch(n){case Oi:case TE:return{byteLength:1,components:1};case cu:case wE:case Ss:return{byteLength:2,components:1};case m_:case g_:return{byteLength:2,components:4};case Yr:case p_:case Br:return{byteLength:4,components:1};case AE:case CE:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:h_}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=h_);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function WE(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Z2(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){const m=h[f],v=h[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){const v=h[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Q2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J2=`#ifdef USE_ALPHAHASH
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
#endif`,eR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rR=`#ifdef USE_AOMAP
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
#endif`,sR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oR=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,aR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fR=`#ifdef USE_IRIDESCENCE
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
#endif`,dR=`#ifdef USE_BUMPMAP
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
#endif`,hR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_R=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,SR=`#define PI 3.141592653589793
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
} // validated`,MR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ER=`vec3 transformedNormal = objectNormal;
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
#endif`,TR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bR="gl_FragColor = linearToOutputTexel( gl_FragColor );",RR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PR=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,NR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,DR=`#ifdef USE_ENVMAP
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
#endif`,LR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IR=`#ifdef USE_ENVMAP
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
#endif`,UR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BR=`#ifdef USE_GRADIENTMAP
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
}`,zR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GR=`uniform bool receiveShadow;
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
#endif
#include <lightprobes_pars_fragment>`,WR=`#ifdef USE_ENVMAP
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
#endif`,jR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$R=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,KR=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ZR=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,QR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,JR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eP=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,tP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lP=`#if defined( USE_POINTS_UV )
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
#endif`,cP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pP=`#ifdef USE_MORPHTARGETS
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
#endif`,mP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_P=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SP=`#ifdef USE_NORMALMAP
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
#endif`,MP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,EP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CP=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,UP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,OP=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,kP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BP=`#ifdef USE_SKINNING
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
#endif`,zP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VP=`#ifdef USE_SKINNING
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
#endif`,HP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jP=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,XP=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,YP=`#ifdef USE_TRANSMISSION
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
#endif`,qP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$P=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JP=`uniform sampler2D t2D;
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
}`,e3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r3=`#include <common>
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
}`,s3=`#if DEPTH_PACKING == 3200
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
}`,o3=`#define DISTANCE
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
}`,a3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,l3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u3=`uniform float scale;
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
}`,f3=`uniform vec3 diffuse;
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
}`,d3=`#include <common>
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
}`,h3=`uniform vec3 diffuse;
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
}`,p3=`#define LAMBERT
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
}`,m3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,g3=`#define MATCAP
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
}`,_3=`#define MATCAP
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
}`,v3=`#define NORMAL
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
}`,x3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,y3=`#define PHONG
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
}`,S3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,M3=`#define STANDARD
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
}`,E3=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,T3=`#define TOON
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
}`,w3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,A3=`uniform float size;
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
}`,C3=`uniform vec3 diffuse;
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
}`,b3=`#include <common>
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
}`,R3=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,P3=`uniform float rotation;
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
}`,N3=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Q2,alphahash_pars_fragment:J2,alphamap_fragment:eR,alphamap_pars_fragment:tR,alphatest_fragment:nR,alphatest_pars_fragment:iR,aomap_fragment:rR,aomap_pars_fragment:sR,batching_pars_vertex:oR,batching_vertex:aR,begin_vertex:lR,beginnormal_vertex:cR,bsdfs:uR,iridescence_fragment:fR,bumpmap_pars_fragment:dR,clipping_planes_fragment:hR,clipping_planes_pars_fragment:pR,clipping_planes_pars_vertex:mR,clipping_planes_vertex:gR,color_fragment:_R,color_pars_fragment:vR,color_pars_vertex:xR,color_vertex:yR,common:SR,cube_uv_reflection_fragment:MR,defaultnormal_vertex:ER,displacementmap_pars_vertex:TR,displacementmap_vertex:wR,emissivemap_fragment:AR,emissivemap_pars_fragment:CR,colorspace_fragment:bR,colorspace_pars_fragment:RR,envmap_fragment:PR,envmap_common_pars_fragment:NR,envmap_pars_fragment:DR,envmap_pars_vertex:LR,envmap_physical_pars_fragment:WR,envmap_vertex:IR,fog_vertex:UR,fog_pars_vertex:FR,fog_fragment:OR,fog_pars_fragment:kR,gradientmap_pars_fragment:BR,lightmap_pars_fragment:zR,lights_lambert_fragment:VR,lights_lambert_pars_fragment:HR,lights_pars_begin:GR,lights_toon_fragment:jR,lights_toon_pars_fragment:XR,lights_phong_fragment:YR,lights_phong_pars_fragment:qR,lights_physical_fragment:$R,lights_physical_pars_fragment:KR,lights_fragment_begin:ZR,lights_fragment_maps:QR,lights_fragment_end:JR,lightprobes_pars_fragment:eP,logdepthbuf_fragment:tP,logdepthbuf_pars_fragment:nP,logdepthbuf_pars_vertex:iP,logdepthbuf_vertex:rP,map_fragment:sP,map_pars_fragment:oP,map_particle_fragment:aP,map_particle_pars_fragment:lP,metalnessmap_fragment:cP,metalnessmap_pars_fragment:uP,morphinstance_vertex:fP,morphcolor_vertex:dP,morphnormal_vertex:hP,morphtarget_pars_vertex:pP,morphtarget_vertex:mP,normal_fragment_begin:gP,normal_fragment_maps:_P,normal_pars_fragment:vP,normal_pars_vertex:xP,normal_vertex:yP,normalmap_pars_fragment:SP,clearcoat_normal_fragment_begin:MP,clearcoat_normal_fragment_maps:EP,clearcoat_pars_fragment:TP,iridescence_pars_fragment:wP,opaque_fragment:AP,packing:CP,premultiplied_alpha_fragment:bP,project_vertex:RP,dithering_fragment:PP,dithering_pars_fragment:NP,roughnessmap_fragment:DP,roughnessmap_pars_fragment:LP,shadowmap_pars_fragment:IP,shadowmap_pars_vertex:UP,shadowmap_vertex:FP,shadowmask_pars_fragment:OP,skinbase_vertex:kP,skinning_pars_vertex:BP,skinning_vertex:zP,skinnormal_vertex:VP,specularmap_fragment:HP,specularmap_pars_fragment:GP,tonemapping_fragment:WP,tonemapping_pars_fragment:jP,transmission_fragment:XP,transmission_pars_fragment:YP,uv_pars_fragment:qP,uv_pars_vertex:$P,uv_vertex:KP,worldpos_vertex:ZP,background_vert:QP,background_frag:JP,backgroundCube_vert:e3,backgroundCube_frag:t3,cube_vert:n3,cube_frag:i3,depth_vert:r3,depth_frag:s3,distance_vert:o3,distance_frag:a3,equirect_vert:l3,equirect_frag:c3,linedashed_vert:u3,linedashed_frag:f3,meshbasic_vert:d3,meshbasic_frag:h3,meshlambert_vert:p3,meshlambert_frag:m3,meshmatcap_vert:g3,meshmatcap_frag:_3,meshnormal_vert:v3,meshnormal_frag:x3,meshphong_vert:y3,meshphong_frag:S3,meshphysical_vert:M3,meshphysical_frag:E3,meshtoon_vert:T3,meshtoon_frag:w3,points_vert:A3,points_frag:C3,shadow_vert:b3,shadow_frag:R3,sprite_vert:P3,sprite_frag:N3},Ee={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Ir={basic:{uniforms:Jn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:Jn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:Jn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:Jn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:Jn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ye(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:Jn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:Jn([Ee.points,Ee.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:Jn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:Jn([Ee.common,Ee.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:Jn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:Jn([Ee.sprite,Ee.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:Jn([Ee.common,Ee.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:Jn([Ee.lights,Ee.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Ir.physical={uniforms:Jn([Ir.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Mf={r:0,b:0,g:0},D3=new Jt,jE=new Je;jE.set(-1,0,0,0,1,0,0,0,1);function L3(n,e,t,i,r,s){const o=new Ye(0);let a=r===!0?0:1,l,c,u=null,h=0,f=null;function d(g){let y=g.isScene===!0?g.background:null;if(y&&y.isTexture){const M=g.backgroundBlurriness>0;y=e.get(y,M)}return y}function m(g){let y=!1;const M=d(g);M===null?_(o,a):M&&M.isColor&&(_(M,1),y=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(g,y){const M=d(y);M&&(M.isCubeTexture||M.mapping===lh)?(c===void 0&&(c=new ri(new yu(1,1,1),new qr({name:"BackgroundCubeMaterial",uniforms:Rl(Ir.backgroundCube.uniforms),vertexShader:Ir.backgroundCube.vertexShader,fragmentShader:Ir.backgroundCube.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(D3.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(jE),c.material.toneMapped=mt.getTransfer(M.colorSpace)!==Tt,(u!==M||h!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,f=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ri(new uh(2,2),new qr({name:"BackgroundMaterial",uniforms:Rl(Ir.background.uniforms),vertexShader:Ir.background.vertexShader,fragmentShader:Ir.background.fragmentShader,side:ho,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=mt.getTransfer(M.colorSpace)!==Tt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,f=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function _(g,y){g.getRGB(Mf,VE(n)),t.buffers.color.setClear(Mf.r,Mf.g,Mf.b,y,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(g,y=1){o.set(g),a=y,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,_(o,a)},render:m,addToRenderList:v,dispose:p}}function I3(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(D,L,V,G,I){let B=!1;const F=h(D,G,V,L);s!==F&&(s=F,c(s.object)),B=d(D,G,V,I),B&&m(D,G,V,I),I!==null&&e.update(I,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,M(D,L,V,G),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function h(D,L,V,G){const I=G.wireframe===!0;let B=i[L.id];B===void 0&&(B={},i[L.id]=B);const F=D.isInstancedMesh===!0?D.id:0;let O=B[F];O===void 0&&(O={},B[F]=O);let X=O[V.id];X===void 0&&(X={},O[V.id]=X);let N=X[I];return N===void 0&&(N=f(l()),X[I]=N),N}function f(D){const L=[],V=[],G=[];for(let I=0;I<t;I++)L[I]=0,V[I]=0,G[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:G,object:D,attributes:{},index:null}}function d(D,L,V,G){const I=s.attributes,B=L.attributes;let F=0;const O=V.getAttributes();for(const X in O)if(O[X].location>=0){const te=I[X];let se=B[X];if(se===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(se=D.instanceColor)),te===void 0||te.attribute!==se||se&&te.data!==se.data)return!0;F++}return s.attributesNum!==F||s.index!==G}function m(D,L,V,G){const I={},B=L.attributes;let F=0;const O=V.getAttributes();for(const X in O)if(O[X].location>=0){let te=B[X];te===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(te=D.instanceColor));const se={};se.attribute=te,te&&te.data&&(se.data=te.data),I[X]=se,F++}s.attributes=I,s.attributesNum=F,s.index=G}function v(){const D=s.newAttributes;for(let L=0,V=D.length;L<V;L++)D[L]=0}function _(D){p(D,0)}function p(D,L){const V=s.newAttributes,G=s.enabledAttributes,I=s.attributeDivisors;V[D]=1,G[D]===0&&(n.enableVertexAttribArray(D),G[D]=1),I[D]!==L&&(n.vertexAttribDivisor(D,L),I[D]=L)}function g(){const D=s.newAttributes,L=s.enabledAttributes;for(let V=0,G=L.length;V<G;V++)L[V]!==D[V]&&(n.disableVertexAttribArray(V),L[V]=0)}function y(D,L,V,G,I,B,F){F===!0?n.vertexAttribIPointer(D,L,V,I,B):n.vertexAttribPointer(D,L,V,G,I,B)}function M(D,L,V,G){v();const I=G.attributes,B=V.getAttributes(),F=L.defaultAttributeValues;for(const O in B){const X=B[O];if(X.location>=0){let N=I[O];if(N===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(N=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(N=D.instanceColor)),N!==void 0){const te=N.normalized,se=N.itemSize,Ce=e.get(N);if(Ce===void 0)continue;const Ie=Ce.buffer,be=Ce.type,K=Ce.bytesPerElement,re=be===n.INT||be===n.UNSIGNED_INT||N.gpuType===p_;if(N.isInterleavedBufferAttribute){const ce=N.data,Re=ce.stride,Ve=N.offset;if(ce.isInstancedInterleavedBuffer){for(let Ne=0;Ne<X.locationSize;Ne++)p(X.location+Ne,ce.meshPerAttribute);D.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ne=0;Ne<X.locationSize;Ne++)_(X.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let Ne=0;Ne<X.locationSize;Ne++)y(X.location+Ne,se/X.locationSize,be,te,Re*K,(Ve+se/X.locationSize*Ne)*K,re)}else{if(N.isInstancedBufferAttribute){for(let ce=0;ce<X.locationSize;ce++)p(X.location+ce,N.meshPerAttribute);D.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let ce=0;ce<X.locationSize;ce++)_(X.location+ce);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let ce=0;ce<X.locationSize;ce++)y(X.location+ce,se/X.locationSize,be,te,se*K,se/X.locationSize*ce*K,re)}}else if(F!==void 0){const te=F[O];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(X.location,te);break;case 3:n.vertexAttrib3fv(X.location,te);break;case 4:n.vertexAttrib4fv(X.location,te);break;default:n.vertexAttrib1fv(X.location,te)}}}}g()}function A(){C();for(const D in i){const L=i[D];for(const V in L){const G=L[V];for(const I in G){const B=G[I];for(const F in B)u(B[F].object),delete B[F];delete G[I]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;const L=i[D.id];for(const V in L){const G=L[V];for(const I in G){const B=G[I];for(const F in B)u(B[F].object),delete B[F];delete G[I]}}delete i[D.id]}function w(D){for(const L in i){const V=i[L];for(const G in V){const I=V[G];if(I[D.id]===void 0)continue;const B=I[D.id];for(const F in B)u(B[F].object),delete B[F];delete I[D.id]}}}function S(D){for(const L in i){const V=i[L],G=D.isInstancedMesh===!0?D.id:0,I=V[G];if(I!==void 0){for(const B in I){const F=I[B];for(const O in F)u(F[O].object),delete F[O];delete I[B]}delete V[G],Object.keys(V).length===0&&delete i[L]}}}function C(){R(),o=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:_,disableUnusedAttributes:g}}function U3(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function F3(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==yr&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const S=w===Ss&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Oi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Br&&!S)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:M,maxSamples:A,samples:T}}function O3(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Lo,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const m=h.clippingPlanes,v=h.clipIntersection,_=h.clipShadows,p=n.get(h);if(!r||m===null||m.length===0||s&&!_)s?u(null):c();else{const g=s?0:i,y=g*4;let M=p.clippingState||null;l.value=M,M=u(m,f,y,d);for(let A=0;A!==y;++A)M[A]=t[A];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,m){const v=h!==null?h.length:0;let _=null;if(v!==0){if(_=l.value,m!==!0||_===null){const p=d+v*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(_===null||_.length<p)&&(_=new Float32Array(p));for(let y=0,M=d;y!==v;++y,M+=4)o.copy(h[y]).applyMatrix4(g,a),o.normal.toArray(_,M),_[M+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,_}}const Ys=4,oy=[.125,.215,.35,.446,.526,.582],Uo=20,k3=256,Ql=new b_,ay=new Ye;let Rp=null,Pp=0,Np=0,Dp=!1;const B3=new j;class ly{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=B3}=s;Rp=this._renderer.getRenderTarget(),Pp=this._renderer.getActiveCubeFace(),Np=this._renderer.getActiveMipmapLevel(),Dp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rp,Pp,Np),this._renderer.xr.enabled=Dp,e.scissorTest=!1,Ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===aa||e.mapping===Cl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rp=this._renderer.getRenderTarget(),Pp=this._renderer.getActiveCubeFace(),Np=this._renderer.getActiveMipmapLevel(),Dp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:Ss,format:yr,colorSpace:Fd,depthBuffer:!1},r=cy(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cy(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=z3(s)),this._blurMaterial=H3(s,e,t),this._ggxMaterial=V3(s,e,t)}return r}_compileMaterial(e){const t=new ri(new ui,e);this._renderer.compile(t,Ql)}_sceneToCubeUV(e,t,i,r,s){const l=new Ii(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(ay),h.toneMapping=Wr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ri(new yu,new E_({name:"PMREM.Background",side:Ei,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,_=v.material;let p=!1;const g=e.background;g?g.isColor&&(_.color.copy(g),e.background=null,p=!0):(_.color.copy(ay),p=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):M===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const A=this._cubeSize;Ia(r,M*A,y>2?A:0,A,A),h.setRenderTarget(r),p&&h.render(v,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===aa||e.mapping===Cl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uy());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ia(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ql)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:m}=this,v=this._sizeLods[i],_=3*v*(i>m-Ys?i-m+Ys:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-t,Ia(s,_,p,3*v,2*v),r.setRenderTarget(s),r.render(a,Ql),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Ia(e,_,p,3*v,2*v),r.setRenderTarget(e),r.render(a,Ql)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&xt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Uo-1),v=s/m,_=isFinite(s)?1+Math.floor(u*v):Uo;_>Uo&&qe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Uo}`);const p=[];let g=0;for(let w=0;w<Uo;++w){const S=w/v,C=Math.exp(-S*S/2);p.push(C),w===0?g+=C:w<_&&(g+=2*C)}for(let w=0;w<p.length;w++)p[w]=p[w]/g;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=m,f.mipInt.value=y-i;const M=this._sizeLods[r],A=3*M*(r>y-Ys?r-y+Ys:0),T=4*(this._cubeSize-M);Ia(t,A,T,3*M,2*M),l.setRenderTarget(t),l.render(h,Ql)}}function z3(n){const e=[],t=[],i=[];let r=n;const s=n-Ys+1+oy.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Ys?l=oy[o-n+Ys-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,v=3,_=2,p=1,g=new Float32Array(v*m*d),y=new Float32Array(_*m*d),M=new Float32Array(p*m*d);for(let T=0;T<d;T++){const w=T%3*2/3-1,S=T>2?0:-1,C=[w,S,0,w+2/3,S,0,w+2/3,S+1,0,w,S,0,w+2/3,S+1,0,w,S+1,0];g.set(C,v*m*T),y.set(f,_*m*T);const R=[T,T,T,T,T,T];M.set(R,p*m*T)}const A=new ui;A.setAttribute("position",new Er(g,v)),A.setAttribute("uv",new Er(y,_)),A.setAttribute("faceIndex",new Er(M,p)),i.push(new ri(A,null)),r>Ys&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function cy(n,e,t){const i=new jr(n,e,t);return i.texture.mapping=lh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ia(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function V3(n,e,t){return new qr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:k3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fh(),fragmentShader:`

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

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

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
		`,blending:hs,depthTest:!1,depthWrite:!1})}function H3(n,e,t){const i=new Float32Array(Uo),r=new j(0,1,0);return new qr({name:"SphericalGaussianBlur",defines:{n:Uo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fh(),fragmentShader:`

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
		`,blending:hs,depthTest:!1,depthWrite:!1})}function uy(){return new qr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fh(),fragmentShader:`

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
		`,blending:hs,depthTest:!1,depthWrite:!1})}function fy(){return new qr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function fh(){return`

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
	`}class XE extends jr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new BE(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new yu(5,5,5),s=new qr({name:"CubemapFromEquirect",uniforms:Rl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ei,blending:hs});s.uniforms.tEquirect.value=t;const o=new ri(r,s),a=t.minFilter;return t.minFilter===Vo&&(t.minFilter=qn),new Y2(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function G3(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===tp||d===np)if(e.has(f)){const m=e.get(f).texture;return a(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const v=new XE(m.height);return v.fromEquirectangularTexture(n,f),e.set(f,v),f.addEventListener("dispose",c),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const d=f.mapping,m=d===tp||d===np,v=d===aa||d===Cl;if(m||v){let _=t.get(f);const p=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new ly(n)),_=m?i.fromEquirectangular(f,_):i.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),_.texture;if(_!==void 0)return _.texture;{const g=f.image;return m&&g&&g.height>0||v&&g&&l(g)?(i===null&&(i=new ly(n)),_=m?i.fromEquirectangular(f):i.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),f.addEventListener("dispose",u),_.texture):null}}}return f}function a(f,d){return d===tp?f.mapping=aa:d===np&&(f.mapping=Cl),f}function l(f){let d=0;const m=6;for(let v=0;v<m;v++)f[v]!==void 0&&d++;return d===m}function c(f){const d=f.target;d.removeEventListener("dispose",c);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(f){const d=f.target;d.removeEventListener("dispose",u);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function W3(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Vg("WebGLRenderer: "+i+" extension not supported."),r}}}function j3(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,m=h.attributes.position;let v=0;if(m===void 0)return;if(d!==null){const g=d.array;v=d.version;for(let y=0,M=g.length;y<M;y+=3){const A=g[y+0],T=g[y+1],w=g[y+2];f.push(A,T,T,w,w,A)}}else{const g=m.array;v=m.version;for(let y=0,M=g.length/3-1;y<M;y+=3){const A=y+0,T=y+1,w=y+2;f.push(A,T,T,w,w,A)}}const _=new(m.count>=65535?FE:UE)(f,1);_.version=v;const p=s.get(h);p&&e.remove(p),s.set(h,_)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function X3(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){n.drawElements(i,f,s,h*o),t.update(f,i,1)}function c(h,f,d){d!==0&&(n.drawElementsInstanced(i,f,s,h*o,d),t.update(f,i,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,d);let v=0;for(let _=0;_<d;_++)v+=f[_];t.update(v,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Y3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:xt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function q3(n,e,t){const i=new WeakMap,r=new Zt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let R=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",R)};var d=R;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;m===!0&&(M=1),v===!0&&(M=2),_===!0&&(M=3);let A=a.attributes.position.count*M,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const w=new Float32Array(A*T*4*h),S=new DE(w,A,T,h);S.type=Br,S.needsUpdate=!0;const C=M*4;for(let D=0;D<h;D++){const L=p[D],V=g[D],G=y[D],I=A*T*4*D;for(let B=0;B<L.count;B++){const F=B*C;m===!0&&(r.fromBufferAttribute(L,B),w[I+F+0]=r.x,w[I+F+1]=r.y,w[I+F+2]=r.z,w[I+F+3]=0),v===!0&&(r.fromBufferAttribute(V,B),w[I+F+4]=r.x,w[I+F+5]=r.y,w[I+F+6]=r.z,w[I+F+7]=0),_===!0&&(r.fromBufferAttribute(G,B),w[I+F+8]=r.x,w[I+F+9]=r.y,w[I+F+10]=r.z,w[I+F+11]=G.itemSize===4?r.w:1)}}f={count:h,texture:S,size:new ke(A,T)},i.set(a,f),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function $3(n,e,t,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const K3={[gE]:"LINEAR_TONE_MAPPING",[_E]:"REINHARD_TONE_MAPPING",[vE]:"CINEON_TONE_MAPPING",[xE]:"ACES_FILMIC_TONE_MAPPING",[SE]:"AGX_TONE_MAPPING",[ME]:"NEUTRAL_TONE_MAPPING",[yE]:"CUSTOM_TONE_MAPPING"};function Z3(n,e,t,i,r){const s=new jr(e,t,{type:n,depthBuffer:i,stencilBuffer:r,depthTexture:i?new bl(e,t):void 0}),o=new jr(e,t,{type:Ss,depthBuffer:!1,stencilBuffer:!1}),a=new ui;a.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new an([0,2,0,0,2,0],2));const l=new B2({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ri(a,l),u=new b_(-1,1,1,-1,0,1);let h=null,f=null,d=!1,m,v=null,_=[],p=!1;this.setSize=function(g,y){s.setSize(g,y),o.setSize(g,y);for(let M=0;M<_.length;M++){const A=_[M];A.setSize&&A.setSize(g,y)}},this.setEffects=function(g){_=g,p=_.length>0&&_[0].isRenderPass===!0;const y=s.width,M=s.height;for(let A=0;A<_.length;A++){const T=_[A];T.setSize&&T.setSize(y,M)}},this.begin=function(g,y){if(d||g.toneMapping===Wr&&_.length===0)return!1;if(v=y,y!==null){const M=y.width,A=y.height;(s.width!==M||s.height!==A)&&this.setSize(M,A)}return p===!1&&g.setRenderTarget(s),m=g.toneMapping,g.toneMapping=Wr,!0},this.hasRenderPass=function(){return p},this.end=function(g,y){g.toneMapping=m,d=!0;let M=s,A=o;for(let T=0;T<_.length;T++){const w=_[T];if(w.enabled!==!1&&(w.render(g,A,M,y),w.needsSwap!==!1)){const S=M;M=A,A=S}}if(h!==g.outputColorSpace||f!==g.toneMapping){h=g.outputColorSpace,f=g.toneMapping,l.defines={},mt.getTransfer(h)===Tt&&(l.defines.SRGB_TRANSFER="");const T=K3[f];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,g.setRenderTarget(v),g.render(c,u),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const YE=new ai,Wg=new bl(1,1),qE=new DE,$E=new m2,KE=new BE,dy=[],hy=[],py=new Float32Array(16),my=new Float32Array(9),gy=new Float32Array(4);function Ul(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=dy[r];if(s===void 0&&(s=new Float32Array(r),dy[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function xn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function dh(n,e){let t=hy[e];t===void 0&&(t=new Int32Array(e),hy[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Q3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function J3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2fv(this.addr,e),yn(t,e)}}function eN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;n.uniform3fv(this.addr,e),yn(t,e)}}function tN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4fv(this.addr,e),yn(t,e)}}function nN(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,i))return;gy.set(i),n.uniformMatrix2fv(this.addr,!1,gy),yn(t,i)}}function iN(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,i))return;my.set(i),n.uniformMatrix3fv(this.addr,!1,my),yn(t,i)}}function rN(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,i))return;py.set(i),n.uniformMatrix4fv(this.addr,!1,py),yn(t,i)}}function sN(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function oN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2iv(this.addr,e),yn(t,e)}}function aN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;n.uniform3iv(this.addr,e),yn(t,e)}}function lN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4iv(this.addr,e),yn(t,e)}}function cN(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function uN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2uiv(this.addr,e),yn(t,e)}}function fN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;n.uniform3uiv(this.addr,e),yn(t,e)}}function dN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4uiv(this.addr,e),yn(t,e)}}function hN(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Wg.compareFunction=t.isReversedDepthBuffer()?S_:y_,s=Wg):s=YE,t.setTexture2D(e||s,r)}function pN(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||$E,r)}function mN(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||KE,r)}function gN(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||qE,r)}function _N(n){switch(n){case 5126:return Q3;case 35664:return J3;case 35665:return eN;case 35666:return tN;case 35674:return nN;case 35675:return iN;case 35676:return rN;case 5124:case 35670:return sN;case 35667:case 35671:return oN;case 35668:case 35672:return aN;case 35669:case 35673:return lN;case 5125:return cN;case 36294:return uN;case 36295:return fN;case 36296:return dN;case 35678:case 36198:case 36298:case 36306:case 35682:return hN;case 35679:case 36299:case 36307:return pN;case 35680:case 36300:case 36308:case 36293:return mN;case 36289:case 36303:case 36311:case 36292:return gN}}function vN(n,e){n.uniform1fv(this.addr,e)}function xN(n,e){const t=Ul(e,this.size,2);n.uniform2fv(this.addr,t)}function yN(n,e){const t=Ul(e,this.size,3);n.uniform3fv(this.addr,t)}function SN(n,e){const t=Ul(e,this.size,4);n.uniform4fv(this.addr,t)}function MN(n,e){const t=Ul(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function EN(n,e){const t=Ul(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function TN(n,e){const t=Ul(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function wN(n,e){n.uniform1iv(this.addr,e)}function AN(n,e){n.uniform2iv(this.addr,e)}function CN(n,e){n.uniform3iv(this.addr,e)}function bN(n,e){n.uniform4iv(this.addr,e)}function RN(n,e){n.uniform1uiv(this.addr,e)}function PN(n,e){n.uniform2uiv(this.addr,e)}function NN(n,e){n.uniform3uiv(this.addr,e)}function DN(n,e){n.uniform4uiv(this.addr,e)}function LN(n,e,t){const i=this.cache,r=e.length,s=dh(t,r);xn(i,s)||(n.uniform1iv(this.addr,s),yn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Wg:o=YE;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function IN(n,e,t){const i=this.cache,r=e.length,s=dh(t,r);xn(i,s)||(n.uniform1iv(this.addr,s),yn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||$E,s[o])}function UN(n,e,t){const i=this.cache,r=e.length,s=dh(t,r);xn(i,s)||(n.uniform1iv(this.addr,s),yn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||KE,s[o])}function FN(n,e,t){const i=this.cache,r=e.length,s=dh(t,r);xn(i,s)||(n.uniform1iv(this.addr,s),yn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||qE,s[o])}function ON(n){switch(n){case 5126:return vN;case 35664:return xN;case 35665:return yN;case 35666:return SN;case 35674:return MN;case 35675:return EN;case 35676:return TN;case 5124:case 35670:return wN;case 35667:case 35671:return AN;case 35668:case 35672:return CN;case 35669:case 35673:return bN;case 5125:return RN;case 36294:return PN;case 36295:return NN;case 36296:return DN;case 35678:case 36198:case 36298:case 36306:case 35682:return LN;case 35679:case 36299:case 36307:return IN;case 35680:case 36300:case 36308:case 36293:return UN;case 36289:case 36303:case 36311:case 36292:return FN}}class kN{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_N(t.type)}}class BN{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ON(t.type)}}class zN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Lp=/(\w+)(\])?(\[|\.)?/g;function _y(n,e){n.seq.push(e),n.map[e.id]=e}function VN(n,e,t){const i=n.name,r=i.length;for(Lp.lastIndex=0;;){const s=Lp.exec(i),o=Lp.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){_y(t,c===void 0?new kN(a,n,e):new BN(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new zN(a),_y(t,h)),t=h}}}class Qf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);VN(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function vy(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const HN=37297;let GN=0;function WN(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const xy=new Je;function jN(n){mt._getMatrix(xy,mt.workingColorSpace,n);const e=`mat3( ${xy.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(n)){case Od:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function yy(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+WN(n.getShaderSource(e),a)}else return s}function XN(n,e){const t=jN(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const YN={[gE]:"Linear",[_E]:"Reinhard",[vE]:"Cineon",[xE]:"ACESFilmic",[SE]:"AgX",[ME]:"Neutral",[yE]:"Custom"};function qN(n,e){const t=YN[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ef=new j;function $N(){mt.getLuminanceCoefficients(Ef);const n=Ef.x.toFixed(4),e=Ef.y.toFixed(4),t=Ef.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KN(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hc).join(`
`)}function ZN(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function QN(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function hc(n){return n!==""}function Sy(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function My(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const JN=/^[ \t]*#include +<([\w\d./]+)>/gm;function jg(n){return n.replace(JN,tD)}const eD=new Map;function tD(n,e){let t=st[e];if(t===void 0){const i=eD.get(e);if(i!==void 0)t=st[i],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jg(t)}const nD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ey(n){return n.replace(nD,iD)}function iD(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ty(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const rD={[Yf]:"SHADOWMAP_TYPE_PCF",[fc]:"SHADOWMAP_TYPE_VSM"};function sD(n){return rD[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const oD={[aa]:"ENVMAP_TYPE_CUBE",[Cl]:"ENVMAP_TYPE_CUBE",[lh]:"ENVMAP_TYPE_CUBE_UV"};function aD(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":oD[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const lD={[Cl]:"ENVMAP_MODE_REFRACTION"};function cD(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":lD[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uD={[mE]:"ENVMAP_BLENDING_MULTIPLY",[qb]:"ENVMAP_BLENDING_MIX",[$b]:"ENVMAP_BLENDING_ADD"};function fD(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":uD[n.combine]||"ENVMAP_BLENDING_NONE"}function dD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function hD(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=sD(t),c=aD(t),u=cD(t),h=fD(t),f=dD(t),d=KN(t),m=ZN(s),v=r.createProgram();let _,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(hc).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(hc).join(`
`),p.length>0&&(p+=`
`)):(_=[Ty(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hc).join(`
`),p=[Ty(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wr?"#define TONE_MAPPING":"",t.toneMapping!==Wr?st.tonemapping_pars_fragment:"",t.toneMapping!==Wr?qN("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,XN("linearToOutputTexel",t.outputColorSpace),$N(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hc).join(`
`)),o=jg(o),o=Sy(o,t),o=My(o,t),a=jg(a),a=Sy(a,t),a=My(a,t),o=Ey(o),a=Ey(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===Lx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=g+_+o,M=g+p+a,A=vy(r,r.VERTEX_SHADER,y),T=vy(r,r.FRAGMENT_SHADER,M);r.attachShader(v,A),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(D){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(v)||"",V=r.getShaderInfoLog(A)||"",G=r.getShaderInfoLog(T)||"",I=L.trim(),B=V.trim(),F=G.trim();let O=!0,X=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,A,T);else{const N=yy(r,A,"vertex"),te=yy(r,T,"fragment");xt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+I+`
`+N+`
`+te)}else I!==""?qe("WebGLProgram: Program Info Log:",I):(B===""||F==="")&&(X=!1);X&&(D.diagnostics={runnable:O,programLog:I,vertexShader:{log:B,prefix:_},fragmentShader:{log:F,prefix:p}})}r.deleteShader(A),r.deleteShader(T),S=new Qf(r,v),C=QN(r,v)}let S;this.getUniforms=function(){return S===void 0&&w(this),S};let C;this.getAttributes=function(){return C===void 0&&w(this),C};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(v,HN)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=GN++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=T,this}let pD=0;class mD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new gD(e),t.set(e,i)),i}}class gD{constructor(e){this.id=pD++,this.code=e,this.usedTimes=0}}function _D(n){return n===la||n===Id||n===Ud}function vD(n,e,t,i,r,s){const o=new LE,a=new mD,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return l.add(S),S===0?"uv":`uv${S}`}function v(S,C,R,D,L,V){const G=D.fog,I=L.geometry,B=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,F=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,O=e.get(S.envMap||B,F),X=O&&O.mapping===lh?O.image.height:null,N=d[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&qe("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const te=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,se=te!==void 0?te.length:0;let Ce=0;I.morphAttributes.position!==void 0&&(Ce=1),I.morphAttributes.normal!==void 0&&(Ce=2),I.morphAttributes.color!==void 0&&(Ce=3);let Ie,be,K,re;if(N){const pe=Ir[N];Ie=pe.vertexShader,be=pe.fragmentShader}else Ie=S.vertexShader,be=S.fragmentShader,a.update(S),K=a.getVertexShaderID(S),re=a.getFragmentShaderID(S);const ce=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),Ve=L.isInstancedMesh===!0,Ne=L.isBatchedMesh===!0,et=!!S.map,we=!!S.matcap,We=!!O,tt=!!S.aoMap,je=!!S.lightMap,q=!!S.bumpMap,ft=!!S.normalMap,Ht=!!S.displacementMap,k=!!S.emissiveMap,nt=!!S.metalnessMap,Ke=!!S.roughnessMap,pt=S.anisotropy>0,_e=S.clearcoat>0,rt=S.dispersion>0,P=S.iridescence>0,E=S.sheen>0,H=S.transmission>0,Q=pt&&!!S.anisotropyMap,ne=_e&&!!S.clearcoatMap,me=_e&&!!S.clearcoatNormalMap,oe=_e&&!!S.clearcoatRoughnessMap,Z=P&&!!S.iridescenceMap,ee=P&&!!S.iridescenceThicknessMap,xe=E&&!!S.sheenColorMap,Ae=E&&!!S.sheenRoughnessMap,ge=!!S.specularMap,fe=!!S.specularColorMap,ve=!!S.specularIntensityMap,Xe=H&&!!S.transmissionMap,Ze=H&&!!S.thicknessMap,U=!!S.gradientMap,ue=!!S.alphaMap,J=S.alphaTest>0,Se=!!S.alphaHash,he=!!S.extensions;let ie=Wr;S.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(ie=n.toneMapping);const le={shaderID:N,shaderType:S.type,shaderName:S.name,vertexShader:Ie,fragmentShader:be,defines:S.defines,customVertexShaderID:K,customFragmentShaderID:re,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&L._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&L.instanceColor!==null,instancingMorph:Ve&&L.morphTexture!==null,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:mt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:et,matcap:we,envMap:We,envMapMode:We&&O.mapping,envMapCubeUVHeight:X,aoMap:tt,lightMap:je,bumpMap:q,normalMap:ft,displacementMap:Ht,emissiveMap:k,normalMapObjectSpace:ft&&S.normalMapType===Qb,normalMapTangentSpace:ft&&S.normalMapType===zg,packedNormalMap:ft&&S.normalMapType===zg&&_D(S.normalMap.format),metalnessMap:nt,roughnessMap:Ke,anisotropy:pt,anisotropyMap:Q,clearcoat:_e,clearcoatMap:ne,clearcoatNormalMap:me,clearcoatRoughnessMap:oe,dispersion:rt,iridescence:P,iridescenceMap:Z,iridescenceThicknessMap:ee,sheen:E,sheenColorMap:xe,sheenRoughnessMap:Ae,specularMap:ge,specularColorMap:fe,specularIntensityMap:ve,transmission:H,transmissionMap:Xe,thicknessMap:Ze,gradientMap:U,opaque:S.transparent===!1&&S.blending===fl&&S.alphaToCoverage===!1,alphaMap:ue,alphaTest:J,alphaHash:Se,combine:S.combine,mapUv:et&&m(S.map.channel),aoMapUv:tt&&m(S.aoMap.channel),lightMapUv:je&&m(S.lightMap.channel),bumpMapUv:q&&m(S.bumpMap.channel),normalMapUv:ft&&m(S.normalMap.channel),displacementMapUv:Ht&&m(S.displacementMap.channel),emissiveMapUv:k&&m(S.emissiveMap.channel),metalnessMapUv:nt&&m(S.metalnessMap.channel),roughnessMapUv:Ke&&m(S.roughnessMap.channel),anisotropyMapUv:Q&&m(S.anisotropyMap.channel),clearcoatMapUv:ne&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:me&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&m(S.sheenRoughnessMap.channel),specularMapUv:ge&&m(S.specularMap.channel),specularColorMapUv:fe&&m(S.specularColorMap.channel),specularIntensityMapUv:ve&&m(S.specularIntensityMap.channel),transmissionMapUv:Xe&&m(S.transmissionMap.channel),thicknessMapUv:Ze&&m(S.thicknessMap.channel),alphaMapUv:ue&&m(S.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ft||pt),vertexNormals:!!I.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(et||ue),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||I.attributes.normal===void 0&&ft===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Re,skinning:L.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Ce,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ie,decodeVideoTexture:et&&S.map.isVideoTexture===!0&&mt.getTransfer(S.map.colorSpace)===Tt,decodeVideoTextureEmissive:k&&S.emissiveMap.isVideoTexture===!0&&mt.getTransfer(S.emissiveMap.colorSpace)===Tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===os,flipSided:S.side===Ei,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:he&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&S.extensions.multiDraw===!0||Ne)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return le.vertexUv1s=l.has(1),le.vertexUv2s=l.has(2),le.vertexUv3s=l.has(3),l.clear(),le}function _(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)C.push(R),C.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(p(C,S),g(C,S),C.push(n.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function p(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.numLightProbes),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function g(S,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),S.push(o.mask)}function y(S){const C=d[S.type];let R;if(C){const D=Ir[C];R=F2.clone(D.uniforms)}else R=S.uniforms;return R}function M(S,C){let R=u.get(C);return R!==void 0?++R.usedTimes:(R=new hD(n,C,S,r),c.push(R),u.set(C,R)),R}function A(S){if(--S.usedTimes===0){const C=c.indexOf(S);c[C]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function T(S){a.remove(S)}function w(){a.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:y,acquireProgram:M,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:w}}function xD(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function yD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function wy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ay(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,v,_,p){let g=n[e];return g===void 0?(g={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:_,group:p},n[e]=g):(g.id=f.id,g.object=f,g.geometry=d,g.material=m,g.materialVariant=o(f),g.groupOrder=v,g.renderOrder=f.renderOrder,g.z=_,g.group=p),e++,g}function l(f,d,m,v,_,p){const g=a(f,d,m,v,_,p);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):t.push(g)}function c(f,d,m,v,_,p){const g=a(f,d,m,v,_,p);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):t.unshift(g)}function u(f,d){t.length>1&&t.sort(f||yD),i.length>1&&i.sort(d||wy),r.length>1&&r.sort(d||wy)}function h(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function SD(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ay,n.set(i,[o])):r>=s.length?(o=new Ay,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function MD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new Ye};break;case"SpotLight":t={position:new j,direction:new j,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function ED(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let TD=0;function wD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function AD(n){const e=new MD,t=ED(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,s=new Jt,o=new Jt;function a(c){let u=0,h=0,f=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let d=0,m=0,v=0,_=0,p=0,g=0,y=0,M=0,A=0,T=0,w=0;c.sort(wD);for(let C=0,R=c.length;C<R;C++){const D=c[C],L=D.color,V=D.intensity,G=D.distance;let I=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===la?I=D.shadow.map.texture:I=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=L.r*V,h+=L.g*V,f+=L.b*V;else if(D.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(D.sh.coefficients[B],V);w++}else if(D.isDirectionalLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const F=D.shadow,O=t.get(D);O.shadowIntensity=F.intensity,O.shadowBias=F.bias,O.shadowNormalBias=F.normalBias,O.shadowRadius=F.radius,O.shadowMapSize=F.mapSize,i.directionalShadow[d]=O,i.directionalShadowMap[d]=I,i.directionalShadowMatrix[d]=D.shadow.matrix,g++}i.directional[d]=B,d++}else if(D.isSpotLight){const B=e.get(D);B.position.setFromMatrixPosition(D.matrixWorld),B.color.copy(L).multiplyScalar(V),B.distance=G,B.coneCos=Math.cos(D.angle),B.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),B.decay=D.decay,i.spot[v]=B;const F=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,F.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[v]=F.matrix,D.castShadow){const O=t.get(D);O.shadowIntensity=F.intensity,O.shadowBias=F.bias,O.shadowNormalBias=F.normalBias,O.shadowRadius=F.radius,O.shadowMapSize=F.mapSize,i.spotShadow[v]=O,i.spotShadowMap[v]=I,M++}v++}else if(D.isRectAreaLight){const B=e.get(D);B.color.copy(L).multiplyScalar(V),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),i.rectArea[_]=B,_++}else if(D.isPointLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),B.distance=D.distance,B.decay=D.decay,D.castShadow){const F=D.shadow,O=t.get(D);O.shadowIntensity=F.intensity,O.shadowBias=F.bias,O.shadowNormalBias=F.normalBias,O.shadowRadius=F.radius,O.shadowMapSize=F.mapSize,O.shadowCameraNear=F.camera.near,O.shadowCameraFar=F.camera.far,i.pointShadow[m]=O,i.pointShadowMap[m]=I,i.pointShadowMatrix[m]=D.shadow.matrix,y++}i.point[m]=B,m++}else if(D.isHemisphereLight){const B=e.get(D);B.skyColor.copy(D.color).multiplyScalar(V),B.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[p]=B,p++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const S=i.hash;(S.directionalLength!==d||S.pointLength!==m||S.spotLength!==v||S.rectAreaLength!==_||S.hemiLength!==p||S.numDirectionalShadows!==g||S.numPointShadows!==y||S.numSpotShadows!==M||S.numSpotMaps!==A||S.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=_,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,S.directionalLength=d,S.pointLength=m,S.spotLength=v,S.rectAreaLength=_,S.hemiLength=p,S.numDirectionalShadows=g,S.numPointShadows=y,S.numSpotShadows=M,S.numSpotMaps=A,S.numLightProbes=w,i.version=TD++)}function l(c,u){let h=0,f=0,d=0,m=0,v=0;const _=u.matrixWorldInverse;for(let p=0,g=c.length;p<g;p++){const y=c[p];if(y.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),h++}else if(y.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),d++}else if(y.isRectAreaLight){const M=i.rectArea[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),o.identity(),s.copy(y.matrixWorld),s.premultiply(_),o.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),f++}else if(y.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(_),v++}}}return{setup:a,setupView:l,state:i}}function Cy(n){const e=new AD(n),t=[],i=[],r=[];function s(f){h.camera=f,t.length=0,i.length=0,r.length=0}function o(f){t.push(f)}function a(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function CD(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Cy(n),e.set(r,[a])):s>=o.length?(a=new Cy(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const bD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,PD=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],ND=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],by=new Jt,Jl=new j,Ip=new j;function DD(n,e,t){let i=new T_;const r=new ke,s=new ke,o=new Zt,a=new V2,l=new H2,c={},u=t.maxTextureSize,h={[ho]:Ei,[Ei]:ho,[os]:os},f=new qr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:bD,fragmentShader:RD}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new ui;m.setAttribute("position",new Er(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ri(m,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yf;let p=this.type;this.render=function(T,w,S){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;this.type===Rb&&(qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Yf);const C=n.getRenderTarget(),R=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),L=n.state;L.setBlending(hs),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const V=p!==this.type;V&&w.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(I=>I.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,I=T.length;G<I;G++){const B=T[G],F=B.shadow;if(F===void 0){qe("WebGLShadowMap:",B,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const O=F.getFrameExtents();r.multiply(O),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/O.x),r.x=s.x*O.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/O.y),r.y=s.y*O.y,F.mapSize.y=s.y));const X=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=X,F.map===null||V===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===fc){if(B.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new jr(r.x,r.y,{format:la,type:Ss,minFilter:qn,magFilter:qn,generateMipmaps:!1}),F.map.texture.name=B.name+".shadowMap",F.map.depthTexture=new bl(r.x,r.y,Br),F.map.depthTexture.name=B.name+".shadowMapDepth",F.map.depthTexture.format=Ms,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Dn,F.map.depthTexture.magFilter=Dn}else B.isPointLight?(F.map=new XE(r.x),F.map.depthTexture=new I2(r.x,Yr)):(F.map=new jr(r.x,r.y),F.map.depthTexture=new bl(r.x,r.y,Yr)),F.map.depthTexture.name=B.name+".shadowMap",F.map.depthTexture.format=Ms,this.type===Yf?(F.map.depthTexture.compareFunction=X?S_:y_,F.map.depthTexture.minFilter=qn,F.map.depthTexture.magFilter=qn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Dn,F.map.depthTexture.magFilter=Dn);F.camera.updateProjectionMatrix()}const N=F.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<N;te++){if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,te),n.clear();else{te===0&&(n.setRenderTarget(F.map),n.clear());const se=F.getViewport(te);o.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),L.viewport(o)}if(B.isPointLight){const se=F.camera,Ce=F.matrix,Ie=B.distance||se.far;Ie!==se.far&&(se.far=Ie,se.updateProjectionMatrix()),Jl.setFromMatrixPosition(B.matrixWorld),se.position.copy(Jl),Ip.copy(se.position),Ip.add(PD[te]),se.up.copy(ND[te]),se.lookAt(Ip),se.updateMatrixWorld(),Ce.makeTranslation(-Jl.x,-Jl.y,-Jl.z),by.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),F._frustum.setFromProjectionMatrix(by,se.coordinateSystem,se.reversedDepth)}else F.updateMatrices(B);i=F.getFrustum(),M(w,S,F.camera,B,this.type)}F.isPointLightShadow!==!0&&this.type===fc&&g(F,S),F.needsUpdate=!1}p=this.type,_.needsUpdate=!1,n.setRenderTarget(C,R,D)};function g(T,w){const S=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new jr(r.x,r.y,{format:la,type:Ss})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(w,null,S,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(w,null,S,d,v,null)}function y(T,w,S,C){let R=null;const D=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)R=D;else if(R=S.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const L=R.uuid,V=w.uuid;let G=c[L];G===void 0&&(G={},c[L]=G);let I=G[V];I===void 0&&(I=R.clone(),G[V]=I,w.addEventListener("dispose",A)),R=I}if(R.visible=w.visible,R.wireframe=w.wireframe,C===fc?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:h[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const L=n.properties.get(R);L.light=S}return R}function M(T,w,S,C,R){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===fc)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);const V=e.update(T),G=T.material;if(Array.isArray(G)){const I=V.groups;for(let B=0,F=I.length;B<F;B++){const O=I[B],X=G[O.materialIndex];if(X&&X.visible){const N=y(T,X,C,R);T.onBeforeShadow(n,T,w,S,V,N,O),n.renderBufferDirect(S,null,V,N,T,O),T.onAfterShadow(n,T,w,S,V,N,O)}}}else if(G.visible){const I=y(T,G,C,R);T.onBeforeShadow(n,T,w,S,V,I,null),n.renderBufferDirect(S,null,V,I,T,null),T.onAfterShadow(n,T,w,S,V,I,null)}}const L=T.children;for(let V=0,G=L.length;V<G;V++)M(L[V],w,S,C,R)}function A(T){T.target.removeEventListener("dispose",A);for(const S in c){const C=c[S],R=T.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}function LD(n,e){function t(){let U=!1;const ue=new Zt;let J=null;const Se=new Zt(0,0,0,0);return{setMask:function(he){J!==he&&!U&&(n.colorMask(he,he,he,he),J=he)},setLocked:function(he){U=he},setClear:function(he,ie,le,pe,He){He===!0&&(he*=pe,ie*=pe,le*=pe),ue.set(he,ie,le,pe),Se.equals(ue)===!1&&(n.clearColor(he,ie,le,pe),Se.copy(ue))},reset:function(){U=!1,J=null,Se.set(-1,0,0,0)}}}function i(){let U=!1,ue=!1,J=null,Se=null,he=null;return{setReversed:function(ie){if(ue!==ie){const le=e.get("EXT_clip_control");ie?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT),ue=ie;const pe=he;he=null,this.setClear(pe)}},getReversed:function(){return ue},setTest:function(ie){ie?ce(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(ie){J!==ie&&!U&&(n.depthMask(ie),J=ie)},setFunc:function(ie){if(ue&&(ie=l2[ie]),Se!==ie){switch(ie){case tg:n.depthFunc(n.NEVER);break;case ng:n.depthFunc(n.ALWAYS);break;case ig:n.depthFunc(n.LESS);break;case Al:n.depthFunc(n.LEQUAL);break;case rg:n.depthFunc(n.EQUAL);break;case sg:n.depthFunc(n.GEQUAL);break;case og:n.depthFunc(n.GREATER);break;case ag:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=ie}},setLocked:function(ie){U=ie},setClear:function(ie){he!==ie&&(he=ie,ue&&(ie=1-ie),n.clearDepth(ie))},reset:function(){U=!1,J=null,Se=null,he=null,ue=!1}}}function r(){let U=!1,ue=null,J=null,Se=null,he=null,ie=null,le=null,pe=null,He=null;return{setTest:function(ae){U||(ae?ce(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(ae){ue!==ae&&!U&&(n.stencilMask(ae),ue=ae)},setFunc:function(ae,Ge,Ue){(J!==ae||Se!==Ge||he!==Ue)&&(n.stencilFunc(ae,Ge,Ue),J=ae,Se=Ge,he=Ue)},setOp:function(ae,Ge,Ue){(ie!==ae||le!==Ge||pe!==Ue)&&(n.stencilOp(ae,Ge,Ue),ie=ae,le=Ge,pe=Ue)},setLocked:function(ae){U=ae},setClear:function(ae){He!==ae&&(n.clearStencil(ae),He=ae)},reset:function(){U=!1,ue=null,J=null,Se=null,he=null,ie=null,le=null,pe=null,He=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f={},d=new WeakMap,m=[],v=null,_=!1,p=null,g=null,y=null,M=null,A=null,T=null,w=null,S=new Ye(0,0,0),C=0,R=!1,D=null,L=null,V=null,G=null,I=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,O=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(X)[1]),F=O>=1):X.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),F=O>=2);let N=null,te={};const se=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),Ie=new Zt().fromArray(se),be=new Zt().fromArray(Ce);function K(U,ue,J,Se){const he=new Uint8Array(4),ie=n.createTexture();n.bindTexture(U,ie),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let le=0;le<J;le++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(ue+le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return ie}const re={};re[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(n.DEPTH_TEST),o.setFunc(Al),q(!1),ft(Cx),ce(n.CULL_FACE),tt(hs);function ce(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function Re(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Ve(U,ue){return f[U]!==ue?(n.bindFramebuffer(U,ue),f[U]=ue,U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ue),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ne(U,ue){let J=m,Se=!1;if(U){J=d.get(ue),J===void 0&&(J=[],d.set(ue,J));const he=U.textures;if(J.length!==he.length||J[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,le=he.length;ie<le;ie++)J[ie]=n.COLOR_ATTACHMENT0+ie;J.length=he.length,Se=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,Se=!0);Se&&n.drawBuffers(J)}function et(U){return v!==U?(n.useProgram(U),v=U,!0):!1}const we={[Io]:n.FUNC_ADD,[Nb]:n.FUNC_SUBTRACT,[Db]:n.FUNC_REVERSE_SUBTRACT};we[Lb]=n.MIN,we[Ib]=n.MAX;const We={[Ub]:n.ZERO,[Fb]:n.ONE,[Ob]:n.SRC_COLOR,[Jm]:n.SRC_ALPHA,[Gb]:n.SRC_ALPHA_SATURATE,[Vb]:n.DST_COLOR,[Bb]:n.DST_ALPHA,[kb]:n.ONE_MINUS_SRC_COLOR,[eg]:n.ONE_MINUS_SRC_ALPHA,[Hb]:n.ONE_MINUS_DST_COLOR,[zb]:n.ONE_MINUS_DST_ALPHA,[Wb]:n.CONSTANT_COLOR,[jb]:n.ONE_MINUS_CONSTANT_COLOR,[Xb]:n.CONSTANT_ALPHA,[Yb]:n.ONE_MINUS_CONSTANT_ALPHA};function tt(U,ue,J,Se,he,ie,le,pe,He,ae){if(U===hs){_===!0&&(Re(n.BLEND),_=!1);return}if(_===!1&&(ce(n.BLEND),_=!0),U!==Pb){if(U!==p||ae!==R){if((g!==Io||A!==Io)&&(n.blendEquation(n.FUNC_ADD),g=Io,A=Io),ae)switch(U){case fl:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bx:n.blendFunc(n.ONE,n.ONE);break;case Rx:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Px:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:xt("WebGLState: Invalid blending: ",U);break}else switch(U){case fl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bx:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Rx:xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Px:xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:xt("WebGLState: Invalid blending: ",U);break}y=null,M=null,T=null,w=null,S.set(0,0,0),C=0,p=U,R=ae}return}he=he||ue,ie=ie||J,le=le||Se,(ue!==g||he!==A)&&(n.blendEquationSeparate(we[ue],we[he]),g=ue,A=he),(J!==y||Se!==M||ie!==T||le!==w)&&(n.blendFuncSeparate(We[J],We[Se],We[ie],We[le]),y=J,M=Se,T=ie,w=le),(pe.equals(S)===!1||He!==C)&&(n.blendColor(pe.r,pe.g,pe.b,He),S.copy(pe),C=He),p=U,R=!1}function je(U,ue){U.side===os?Re(n.CULL_FACE):ce(n.CULL_FACE);let J=U.side===Ei;ue&&(J=!J),q(J),U.blending===fl&&U.transparent===!1?tt(hs):tt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const Se=U.stencilWrite;a.setTest(Se),Se&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),k(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(U){D!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),D=U)}function ft(U){U!==Cb?(ce(n.CULL_FACE),U!==L&&(U===Cx?n.cullFace(n.BACK):U===bb?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),L=U}function Ht(U){U!==V&&(F&&n.lineWidth(U),V=U)}function k(U,ue,J){U?(ce(n.POLYGON_OFFSET_FILL),(G!==ue||I!==J)&&(G=ue,I=J,o.getReversed()&&(ue=-ue),n.polygonOffset(ue,J))):Re(n.POLYGON_OFFSET_FILL)}function nt(U){U?ce(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function Ke(U){U===void 0&&(U=n.TEXTURE0+B-1),N!==U&&(n.activeTexture(U),N=U)}function pt(U,ue,J){J===void 0&&(N===null?J=n.TEXTURE0+B-1:J=N);let Se=te[J];Se===void 0&&(Se={type:void 0,texture:void 0},te[J]=Se),(Se.type!==U||Se.texture!==ue)&&(N!==J&&(n.activeTexture(J),N=J),n.bindTexture(U,ue||re[U]),Se.type=U,Se.texture=ue)}function _e(){const U=te[N];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function rt(){try{n.compressedTexImage2D(...arguments)}catch(U){xt("WebGLState:",U)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(U){xt("WebGLState:",U)}}function E(){try{n.texSubImage2D(...arguments)}catch(U){xt("WebGLState:",U)}}function H(){try{n.texSubImage3D(...arguments)}catch(U){xt("WebGLState:",U)}}function Q(){try{n.compressedTexSubImage2D(...arguments)}catch(U){xt("WebGLState:",U)}}function ne(){try{n.compressedTexSubImage3D(...arguments)}catch(U){xt("WebGLState:",U)}}function me(){try{n.texStorage2D(...arguments)}catch(U){xt("WebGLState:",U)}}function oe(){try{n.texStorage3D(...arguments)}catch(U){xt("WebGLState:",U)}}function Z(){try{n.texImage2D(...arguments)}catch(U){xt("WebGLState:",U)}}function ee(){try{n.texImage3D(...arguments)}catch(U){xt("WebGLState:",U)}}function xe(U){return h[U]!==void 0?h[U]:n.getParameter(U)}function Ae(U,ue){h[U]!==ue&&(n.pixelStorei(U,ue),h[U]=ue)}function ge(U){Ie.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Ie.copy(U))}function fe(U){be.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),be.copy(U))}function ve(U,ue){let J=c.get(ue);J===void 0&&(J=new WeakMap,c.set(ue,J));let Se=J.get(U);Se===void 0&&(Se=n.getUniformBlockIndex(ue,U.name),J.set(U,Se))}function Xe(U,ue){const Se=c.get(ue).get(U);l.get(ue)!==Se&&(n.uniformBlockBinding(ue,Se,U.__bindingPointIndex),l.set(ue,Se))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},N=null,te={},f={},d=new WeakMap,m=[],v=null,_=!1,p=null,g=null,y=null,M=null,A=null,T=null,w=null,S=new Ye(0,0,0),C=0,R=!1,D=null,L=null,V=null,G=null,I=null,Ie.set(0,0,n.canvas.width,n.canvas.height),be.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ce,disable:Re,bindFramebuffer:Ve,drawBuffers:Ne,useProgram:et,setBlending:tt,setMaterial:je,setFlipSided:q,setCullFace:ft,setLineWidth:Ht,setPolygonOffset:k,setScissorTest:nt,activeTexture:Ke,bindTexture:pt,unbindTexture:_e,compressedTexImage2D:rt,compressedTexImage3D:P,texImage2D:Z,texImage3D:ee,pixelStorei:Ae,getParameter:xe,updateUBOMapping:ve,uniformBlockBinding:Xe,texStorage2D:me,texStorage3D:oe,texSubImage2D:E,texSubImage3D:H,compressedTexSubImage2D:Q,compressedTexSubImage3D:ne,scissor:ge,viewport:fe,reset:Ze}}function ID(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,u=new WeakMap,h=new Set;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,E){return m?new OffscreenCanvas(P,E):kd("canvas")}function _(P,E,H){let Q=1;const ne=rt(P);if((ne.width>H||ne.height>H)&&(Q=H/Math.max(ne.width,ne.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const me=Math.floor(Q*ne.width),oe=Math.floor(Q*ne.height);f===void 0&&(f=v(me,oe));const Z=E?v(me,oe):f;return Z.width=me,Z.height=oe,Z.getContext("2d").drawImage(P,0,0,me,oe),qe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+me+"x"+oe+")."),Z}else return"data"in P&&qe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function p(P){return P.generateMipmaps}function g(P){n.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(P,E,H,Q,ne,me=!1){if(P!==null){if(n[P]!==void 0)return n[P];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let oe;Q&&(oe=e.get("EXT_texture_norm16"),oe||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=E;if(E===n.RED&&(H===n.FLOAT&&(Z=n.R32F),H===n.HALF_FLOAT&&(Z=n.R16F),H===n.UNSIGNED_BYTE&&(Z=n.R8),H===n.UNSIGNED_SHORT&&oe&&(Z=oe.R16_EXT),H===n.SHORT&&oe&&(Z=oe.R16_SNORM_EXT)),E===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.R8UI),H===n.UNSIGNED_SHORT&&(Z=n.R16UI),H===n.UNSIGNED_INT&&(Z=n.R32UI),H===n.BYTE&&(Z=n.R8I),H===n.SHORT&&(Z=n.R16I),H===n.INT&&(Z=n.R32I)),E===n.RG&&(H===n.FLOAT&&(Z=n.RG32F),H===n.HALF_FLOAT&&(Z=n.RG16F),H===n.UNSIGNED_BYTE&&(Z=n.RG8),H===n.UNSIGNED_SHORT&&oe&&(Z=oe.RG16_EXT),H===n.SHORT&&oe&&(Z=oe.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.RG8UI),H===n.UNSIGNED_SHORT&&(Z=n.RG16UI),H===n.UNSIGNED_INT&&(Z=n.RG32UI),H===n.BYTE&&(Z=n.RG8I),H===n.SHORT&&(Z=n.RG16I),H===n.INT&&(Z=n.RG32I)),E===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),H===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),H===n.UNSIGNED_INT&&(Z=n.RGB32UI),H===n.BYTE&&(Z=n.RGB8I),H===n.SHORT&&(Z=n.RGB16I),H===n.INT&&(Z=n.RGB32I)),E===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),H===n.UNSIGNED_INT&&(Z=n.RGBA32UI),H===n.BYTE&&(Z=n.RGBA8I),H===n.SHORT&&(Z=n.RGBA16I),H===n.INT&&(Z=n.RGBA32I)),E===n.RGB&&(H===n.UNSIGNED_SHORT&&oe&&(Z=oe.RGB16_EXT),H===n.SHORT&&oe&&(Z=oe.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),E===n.RGBA){const ee=me?Od:mt.getTransfer(ne);H===n.FLOAT&&(Z=n.RGBA32F),H===n.HALF_FLOAT&&(Z=n.RGBA16F),H===n.UNSIGNED_BYTE&&(Z=ee===Tt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&oe&&(Z=oe.RGBA16_EXT),H===n.SHORT&&oe&&(Z=oe.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function A(P,E){let H;return P?E===null||E===Yr||E===uu?H=n.DEPTH24_STENCIL8:E===Br?H=n.DEPTH32F_STENCIL8:E===cu&&(H=n.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yr||E===uu?H=n.DEPTH_COMPONENT24:E===Br?H=n.DEPTH_COMPONENT32F:E===cu&&(H=n.DEPTH_COMPONENT16),H}function T(P,E){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Dn&&P.minFilter!==qn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function w(P){const E=P.target;E.removeEventListener("dispose",w),C(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&h.delete(E)}function S(P){const E=P.target;E.removeEventListener("dispose",S),D(E)}function C(P){const E=i.get(P);if(E.__webglInit===void 0)return;const H=P.source,Q=d.get(H);if(Q){const ne=Q[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(P),Object.keys(Q).length===0&&d.delete(H)}i.remove(P)}function R(P){const E=i.get(P);n.deleteTexture(E.__webglTexture);const H=P.source,Q=d.get(H);delete Q[E.__cacheKey],o.memory.textures--}function D(P){const E=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let ne=0;ne<E.__webglFramebuffer[Q].length;ne++)n.deleteFramebuffer(E.__webglFramebuffer[Q][ne]);else n.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)n.deleteFramebuffer(E.__webglFramebuffer[Q]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=P.textures;for(let Q=0,ne=H.length;Q<ne;Q++){const me=i.get(H[Q]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),o.memory.textures--),i.remove(H[Q])}i.remove(P)}let L=0;function V(){L=0}function G(){return L}function I(P){L=P}function B(){const P=L;return P>=r.maxTextures&&qe("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),L+=1,P}function F(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function O(P,E){const H=i.get(P);if(P.isVideoTexture&&pt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){const Q=P.image;if(Q===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(H,P,E);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+E)}function X(P,E){const H=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){Re(H,P,E);return}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+E)}function N(P,E){const H=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){Re(H,P,E);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+E)}function te(P,E){const H=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&H.__version!==P.version){Ve(H,P,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+E)}const se={[lg]:n.REPEAT,[us]:n.CLAMP_TO_EDGE,[cg]:n.MIRRORED_REPEAT},Ce={[Dn]:n.NEAREST,[Kb]:n.NEAREST_MIPMAP_NEAREST,[Ju]:n.NEAREST_MIPMAP_LINEAR,[qn]:n.LINEAR,[ip]:n.LINEAR_MIPMAP_NEAREST,[Vo]:n.LINEAR_MIPMAP_LINEAR},Ie={[Jb]:n.NEVER,[r2]:n.ALWAYS,[e2]:n.LESS,[y_]:n.LEQUAL,[t2]:n.EQUAL,[S_]:n.GEQUAL,[n2]:n.GREATER,[i2]:n.NOTEQUAL};function be(P,E){if(E.type===Br&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===qn||E.magFilter===ip||E.magFilter===Ju||E.magFilter===Vo||E.minFilter===qn||E.minFilter===ip||E.minFilter===Ju||E.minFilter===Vo)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,se[E.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,se[E.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,se[E.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Ce[E.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Ce[E.minFilter]),E.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Ie[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Dn||E.minFilter!==Ju&&E.minFilter!==Vo||E.type===Br&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function K(P,E){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",w));const Q=E.source;let ne=d.get(Q);ne===void 0&&(ne={},d.set(Q,ne));const me=F(E);if(me!==P.__cacheKey){ne[me]===void 0&&(ne[me]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ne[me].usedTimes++;const oe=ne[P.__cacheKey];oe!==void 0&&(ne[P.__cacheKey].usedTimes--,oe.usedTimes===0&&R(E)),P.__cacheKey=me,P.__webglTexture=ne[me].texture}return H}function re(P,E,H){return Math.floor(Math.floor(P/H)/E)}function ce(P,E,H,Q){const me=P.updateRanges;if(me.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,H,Q,E.data);else{me.sort((Ae,ge)=>Ae.start-ge.start);let oe=0;for(let Ae=1;Ae<me.length;Ae++){const ge=me[oe],fe=me[Ae],ve=ge.start+ge.count,Xe=re(fe.start,E.width,4),Ze=re(ge.start,E.width,4);fe.start<=ve+1&&Xe===Ze&&re(fe.start+fe.count-1,E.width,4)===Xe?ge.count=Math.max(ge.count,fe.start+fe.count-ge.start):(++oe,me[oe]=fe)}me.length=oe+1;const Z=t.getParameter(n.UNPACK_ROW_LENGTH),ee=t.getParameter(n.UNPACK_SKIP_PIXELS),xe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let Ae=0,ge=me.length;Ae<ge;Ae++){const fe=me[Ae],ve=Math.floor(fe.start/4),Xe=Math.ceil(fe.count/4),Ze=ve%E.width,U=Math.floor(ve/E.width),ue=Xe,J=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Ze,U,ue,J,H,Q,E.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Z),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(n.UNPACK_SKIP_ROWS,xe)}}function Re(P,E,H){let Q=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=n.TEXTURE_3D);const ne=K(P,E),me=E.source;t.bindTexture(Q,P.__webglTexture,n.TEXTURE0+H);const oe=i.get(me);if(me.version!==oe.__version||ne===!0){if(t.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const J=mt.getPrimaries(mt.workingColorSpace),Se=E.colorSpace===Bs?null:mt.getPrimaries(E.colorSpace),he=E.colorSpace===Bs||J===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let ee=_(E.image,!1,r.maxTextureSize);ee=_e(E,ee);const xe=s.convert(E.format,E.colorSpace),Ae=s.convert(E.type);let ge=M(E.internalFormat,xe,Ae,E.normalized,E.colorSpace,E.isVideoTexture);be(Q,E);let fe;const ve=E.mipmaps,Xe=E.isVideoTexture!==!0,Ze=oe.__version===void 0||ne===!0,U=me.dataReady,ue=T(E,ee);if(E.isDepthTexture)ge=A(E.format===Ho,E.type),Ze&&(Xe?t.texStorage2D(n.TEXTURE_2D,1,ge,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,ge,ee.width,ee.height,0,xe,Ae,null));else if(E.isDataTexture)if(ve.length>0){Xe&&Ze&&t.texStorage2D(n.TEXTURE_2D,ue,ge,ve[0].width,ve[0].height);for(let J=0,Se=ve.length;J<Se;J++)fe=ve[J],Xe?U&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,fe.width,fe.height,xe,Ae,fe.data):t.texImage2D(n.TEXTURE_2D,J,ge,fe.width,fe.height,0,xe,Ae,fe.data);E.generateMipmaps=!1}else Xe?(Ze&&t.texStorage2D(n.TEXTURE_2D,ue,ge,ee.width,ee.height),U&&ce(E,ee,xe,Ae)):t.texImage2D(n.TEXTURE_2D,0,ge,ee.width,ee.height,0,xe,Ae,ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Xe&&Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,ge,ve[0].width,ve[0].height,ee.depth);for(let J=0,Se=ve.length;J<Se;J++)if(fe=ve[J],E.format!==yr)if(xe!==null)if(Xe){if(U)if(E.layerUpdates.size>0){const he=sy(fe.width,fe.height,E.format,E.type);for(const ie of E.layerUpdates){const le=fe.data.subarray(ie*he/fe.data.BYTES_PER_ELEMENT,(ie+1)*he/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,ie,fe.width,fe.height,1,xe,le)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,ee.depth,xe,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,ge,fe.width,fe.height,ee.depth,0,fe.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,ee.depth,xe,Ae,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,ge,fe.width,fe.height,ee.depth,0,xe,Ae,fe.data)}else{Xe&&Ze&&t.texStorage2D(n.TEXTURE_2D,ue,ge,ve[0].width,ve[0].height);for(let J=0,Se=ve.length;J<Se;J++)fe=ve[J],E.format!==yr?xe!==null?Xe?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,fe.width,fe.height,xe,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,J,ge,fe.width,fe.height,0,fe.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?U&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,fe.width,fe.height,xe,Ae,fe.data):t.texImage2D(n.TEXTURE_2D,J,ge,fe.width,fe.height,0,xe,Ae,fe.data)}else if(E.isDataArrayTexture)if(Xe){if(Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,ge,ee.width,ee.height,ee.depth),U)if(E.layerUpdates.size>0){const J=sy(ee.width,ee.height,E.format,E.type);for(const Se of E.layerUpdates){const he=ee.data.subarray(Se*J/ee.data.BYTES_PER_ELEMENT,(Se+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Se,ee.width,ee.height,1,xe,Ae,he)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,xe,Ae,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ge,ee.width,ee.height,ee.depth,0,xe,Ae,ee.data);else if(E.isData3DTexture)Xe?(Ze&&t.texStorage3D(n.TEXTURE_3D,ue,ge,ee.width,ee.height,ee.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,xe,Ae,ee.data)):t.texImage3D(n.TEXTURE_3D,0,ge,ee.width,ee.height,ee.depth,0,xe,Ae,ee.data);else if(E.isFramebufferTexture){if(Ze)if(Xe)t.texStorage2D(n.TEXTURE_2D,ue,ge,ee.width,ee.height);else{let J=ee.width,Se=ee.height;for(let he=0;he<ue;he++)t.texImage2D(n.TEXTURE_2D,he,ge,J,Se,0,xe,Ae,null),J>>=1,Se>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){const J=n.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),ee.parentNode!==J){J.appendChild(ee),h.add(E),J.onpaint=pe=>{const He=pe.changedElements;for(const ae of h)He.includes(ae.image)&&(ae.needsUpdate=!0)},J.requestPaint();return}const Se=0,he=n.RGBA,ie=n.RGBA,le=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Se,he,ie,le,ee),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ve.length>0){if(Xe&&Ze){const J=rt(ve[0]);t.texStorage2D(n.TEXTURE_2D,ue,ge,J.width,J.height)}for(let J=0,Se=ve.length;J<Se;J++)fe=ve[J],Xe?U&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,xe,Ae,fe):t.texImage2D(n.TEXTURE_2D,J,ge,xe,Ae,fe);E.generateMipmaps=!1}else if(Xe){if(Ze){const J=rt(ee);t.texStorage2D(n.TEXTURE_2D,ue,ge,J.width,J.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Ae,ee)}else t.texImage2D(n.TEXTURE_2D,0,ge,xe,Ae,ee);p(E)&&g(Q),oe.__version=me.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ve(P,E,H){if(E.image.length!==6)return;const Q=K(P,E),ne=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+H);const me=i.get(ne);if(ne.version!==me.__version||Q===!0){t.activeTexture(n.TEXTURE0+H);const oe=mt.getPrimaries(mt.workingColorSpace),Z=E.colorSpace===Bs?null:mt.getPrimaries(E.colorSpace),ee=E.colorSpace===Bs||oe===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const xe=E.isCompressedTexture||E.image[0].isCompressedTexture,Ae=E.image[0]&&E.image[0].isDataTexture,ge=[];for(let ie=0;ie<6;ie++)!xe&&!Ae?ge[ie]=_(E.image[ie],!0,r.maxCubemapSize):ge[ie]=Ae?E.image[ie].image:E.image[ie],ge[ie]=_e(E,ge[ie]);const fe=ge[0],ve=s.convert(E.format,E.colorSpace),Xe=s.convert(E.type),Ze=M(E.internalFormat,ve,Xe,E.normalized,E.colorSpace),U=E.isVideoTexture!==!0,ue=me.__version===void 0||Q===!0,J=ne.dataReady;let Se=T(E,fe);be(n.TEXTURE_CUBE_MAP,E);let he;if(xe){U&&ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Ze,fe.width,fe.height);for(let ie=0;ie<6;ie++){he=ge[ie].mipmaps;for(let le=0;le<he.length;le++){const pe=he[le];E.format!==yr?ve!==null?U?J&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,le,0,0,pe.width,pe.height,ve,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,le,Ze,pe.width,pe.height,0,pe.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,le,0,0,pe.width,pe.height,ve,Xe,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,le,Ze,pe.width,pe.height,0,ve,Xe,pe.data)}}}else{if(he=E.mipmaps,U&&ue){he.length>0&&Se++;const ie=rt(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Ze,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ae){U?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ge[ie].width,ge[ie].height,ve,Xe,ge[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ze,ge[ie].width,ge[ie].height,0,ve,Xe,ge[ie].data);for(let le=0;le<he.length;le++){const He=he[le].image[ie].image;U?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,le+1,0,0,He.width,He.height,ve,Xe,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,le+1,Ze,He.width,He.height,0,ve,Xe,He.data)}}else{U?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ve,Xe,ge[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ze,ve,Xe,ge[ie]);for(let le=0;le<he.length;le++){const pe=he[le];U?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,le+1,0,0,ve,Xe,pe.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,le+1,Ze,ve,Xe,pe.image[ie])}}}p(E)&&g(n.TEXTURE_CUBE_MAP),me.__version=ne.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ne(P,E,H,Q,ne,me){const oe=s.convert(H.format,H.colorSpace),Z=s.convert(H.type),ee=M(H.internalFormat,oe,Z,H.normalized,H.colorSpace),xe=i.get(E),Ae=i.get(H);if(Ae.__renderTarget=E,!xe.__hasExternalTextures){const ge=Math.max(1,E.width>>me),fe=Math.max(1,E.height>>me);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,me,ee,ge,fe,E.depth,0,oe,Z,null):t.texImage2D(ne,me,ee,ge,fe,0,oe,Z,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Ke(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ne,Ae.__webglTexture,0,nt(E)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ne,Ae.__webglTexture,me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function et(P,E,H){if(n.bindRenderbuffer(n.RENDERBUFFER,P),E.depthBuffer){const Q=E.depthTexture,ne=Q&&Q.isDepthTexture?Q.type:null,me=A(E.stencilBuffer,ne),oe=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ke(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,nt(E),me,E.width,E.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,nt(E),me,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,me,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,P)}else{const Q=E.textures;for(let ne=0;ne<Q.length;ne++){const me=Q[ne],oe=s.convert(me.format,me.colorSpace),Z=s.convert(me.type),ee=M(me.internalFormat,oe,Z,me.normalized,me.colorSpace);Ke(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,nt(E),ee,E.width,E.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,nt(E),ee,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ee,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(P,E,H){const Q=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(E.depthTexture);if(ne.__renderTarget=E,(!ne.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,E.depthTexture.addEventListener("dispose",w)),ne.__webglTexture===void 0){ne.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),be(n.TEXTURE_CUBE_MAP,E.depthTexture);const xe=s.convert(E.depthTexture.format),Ae=s.convert(E.depthTexture.type);let ge;E.depthTexture.format===Ms?ge=n.DEPTH_COMPONENT24:E.depthTexture.format===Ho&&(ge=n.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ge,E.width,E.height,0,xe,Ae,null)}}else O(E.depthTexture,0);const me=ne.__webglTexture,oe=nt(E),Z=Q?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,ee=E.depthTexture.format===Ho?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ms)Ke(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,Z,me,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,ee,Z,me,0);else if(E.depthTexture.format===Ho)Ke(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,Z,me,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,ee,Z,me,0);else throw new Error("Unknown depthTexture format")}function We(P){const E=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const Q=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",ne)};Q.addEventListener("dispose",ne),E.__depthDisposeCallback=ne}E.__boundDepthTexture=Q}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(H)for(let Q=0;Q<6;Q++)we(E.__webglFramebuffer[Q],P,Q);else{const Q=P.texture.mipmaps;Q&&Q.length>0?we(E.__webglFramebuffer[0],P,0):we(E.__webglFramebuffer,P,0)}else if(H){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=n.createRenderbuffer(),et(E.__webglDepthbuffer[Q],P,!1);else{const ne=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=E.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,me)}}else{const Q=P.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),et(E.__webglDepthbuffer,P,!1);else{const ne=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,me)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(P,E,H){const Q=i.get(P);E!==void 0&&Ne(Q.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&We(P)}function je(P){const E=P.texture,H=i.get(P),Q=i.get(E);P.addEventListener("dispose",S);const ne=P.textures,me=P.isWebGLCubeRenderTarget===!0,oe=ne.length>1;if(oe||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=E.version,o.memory.textures++),me){H.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[Z]=[];for(let ee=0;ee<E.mipmaps.length;ee++)H.__webglFramebuffer[Z][ee]=n.createFramebuffer()}else H.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let Z=0;Z<E.mipmaps.length;Z++)H.__webglFramebuffer[Z]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(oe)for(let Z=0,ee=ne.length;Z<ee;Z++){const xe=i.get(ne[Z]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Ke(P)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Z=0;Z<ne.length;Z++){const ee=ne[Z];H.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[Z]);const xe=s.convert(ee.format,ee.colorSpace),Ae=s.convert(ee.type),ge=M(ee.internalFormat,xe,Ae,ee.normalized,ee.colorSpace,P.isXRRenderTarget===!0),fe=nt(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,ge,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,H.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),et(H.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(me){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),be(n.TEXTURE_CUBE_MAP,E);for(let Z=0;Z<6;Z++)if(E.mipmaps&&E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)Ne(H.__webglFramebuffer[Z][ee],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ee);else Ne(H.__webglFramebuffer[Z],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(E)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let Z=0,ee=ne.length;Z<ee;Z++){const xe=ne[Z],Ae=i.get(xe);let ge=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ge=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,Ae.__webglTexture),be(ge,xe),Ne(H.__webglFramebuffer,P,xe,n.COLOR_ATTACHMENT0+Z,ge,0),p(xe)&&g(ge)}t.unbindTexture()}else{let Z=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Z=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,Q.__webglTexture),be(Z,E),E.mipmaps&&E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)Ne(H.__webglFramebuffer[ee],P,E,n.COLOR_ATTACHMENT0,Z,ee);else Ne(H.__webglFramebuffer,P,E,n.COLOR_ATTACHMENT0,Z,0);p(E)&&g(Z),t.unbindTexture()}P.depthBuffer&&We(P)}function q(P){const E=P.textures;for(let H=0,Q=E.length;H<Q;H++){const ne=E[H];if(p(ne)){const me=y(P),oe=i.get(ne).__webglTexture;t.bindTexture(me,oe),g(me),t.unbindTexture()}}}const ft=[],Ht=[];function k(P){if(P.samples>0){if(Ke(P)===!1){const E=P.textures,H=P.width,Q=P.height;let ne=n.COLOR_BUFFER_BIT;const me=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(P),Z=E.length>1;if(Z)for(let xe=0;xe<E.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const ee=P.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let xe=0;xe<E.length;xe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[xe]);const Ae=i.get(E[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ae,0)}n.blitFramebuffer(0,0,H,Q,0,0,H,Q,ne,n.NEAREST),l===!0&&(ft.length=0,Ht.length=0,ft.push(n.COLOR_ATTACHMENT0+xe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ft.push(me),Ht.push(me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ht)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let xe=0;xe<E.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,oe.__webglColorRenderbuffer[xe]);const Ae=i.get(E[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,Ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function nt(P){return Math.min(r.maxSamples,P.samples)}function Ke(P){const E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function pt(P){const E=o.render.frame;u.get(P)!==E&&(u.set(P,E),P.update())}function _e(P,E){const H=P.colorSpace,Q=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==Fd&&H!==Bs&&(mt.getTransfer(H)===Tt?(Q!==yr||ne!==Oi)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):xt("WebGLTextures: Unsupported texture color space:",H)),E}function rt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=V,this.getTextureUnits=G,this.setTextureUnits=I,this.setTexture2D=O,this.setTexture2DArray=X,this.setTexture3D=N,this.setTextureCube=te,this.rebindTextures=tt,this.setupRenderTarget=je,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function UD(n,e){function t(i,r=Bs){let s;const o=mt.getTransfer(r);if(i===Oi)return n.UNSIGNED_BYTE;if(i===m_)return n.UNSIGNED_SHORT_4_4_4_4;if(i===g_)return n.UNSIGNED_SHORT_5_5_5_1;if(i===AE)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===CE)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===TE)return n.BYTE;if(i===wE)return n.SHORT;if(i===cu)return n.UNSIGNED_SHORT;if(i===p_)return n.INT;if(i===Yr)return n.UNSIGNED_INT;if(i===Br)return n.FLOAT;if(i===Ss)return n.HALF_FLOAT;if(i===bE)return n.ALPHA;if(i===RE)return n.RGB;if(i===yr)return n.RGBA;if(i===Ms)return n.DEPTH_COMPONENT;if(i===Ho)return n.DEPTH_STENCIL;if(i===PE)return n.RED;if(i===__)return n.RED_INTEGER;if(i===la)return n.RG;if(i===v_)return n.RG_INTEGER;if(i===x_)return n.RGBA_INTEGER;if(i===qf||i===$f||i===Kf||i===Zf)if(o===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$f)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Kf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$f)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Kf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ug||i===fg||i===dg||i===hg)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ug)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fg)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dg)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hg)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pg||i===mg||i===gg||i===_g||i===vg||i===Id||i===xg)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===pg||i===mg)return o===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===gg)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===_g)return s.COMPRESSED_R11_EAC;if(i===vg)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Id)return s.COMPRESSED_RG11_EAC;if(i===xg)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===yg||i===Sg||i===Mg||i===Eg||i===Tg||i===wg||i===Ag||i===Cg||i===bg||i===Rg||i===Pg||i===Ng||i===Dg||i===Lg)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===yg)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sg)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mg)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Eg)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tg)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wg)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ag)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cg)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bg)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rg)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pg)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ng)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dg)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lg)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ig||i===Ug||i===Fg)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ig)return o===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ug)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fg)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Og||i===kg||i===Ud||i===Bg)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Og)return s.COMPRESSED_RED_RGTC1_EXT;if(i===kg)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ud)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bg)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===uu?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const FD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OD=`
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

}`;class kD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new zE(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new qr({vertexShader:FD,fragmentShader:OD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ri(new uh(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BD extends da{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null;const v=typeof XRWebGLBinding<"u",_=new kD,p={},g=t.getContextAttributes();let y=null,M=null;const A=[],T=[],w=new ke;let S=null;const C=new Ii;C.viewport=new Zt;const R=new Ii;R.viewport=new Zt;const D=[C,R],L=new q2;let V=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let re=A[K];return re===void 0&&(re=new fp,A[K]=re),re.getTargetRaySpace()},this.getControllerGrip=function(K){let re=A[K];return re===void 0&&(re=new fp,A[K]=re),re.getGripSpace()},this.getHand=function(K){let re=A[K];return re===void 0&&(re=new fp,A[K]=re),re.getHandSpace()};function I(K){const re=T.indexOf(K.inputSource);if(re===-1)return;const ce=A[re];ce!==void 0&&(ce.update(K.inputSource,K.frame,c||o),ce.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",F);for(let K=0;K<A.length;K++){const re=T[K];re!==null&&(T[K]=null,A[K].disconnect(re))}V=null,G=null,_.reset();for(const K in p)delete p[K];e.setRenderTarget(y),d=null,f=null,h=null,r=null,M=null,be.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",B),r.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Re=null,Ve=null;g.depth&&(Ve=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=g.stencil?Ho:Ms,Re=g.stencil?uu:Yr);const Ne={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Ne),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new jr(f.textureWidth,f.textureHeight,{format:yr,type:Oi,depthTexture:new bl(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ce={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new jr(d.framebufferWidth,d.framebufferHeight,{format:yr,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),be.setContext(r),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F(K){for(let re=0;re<K.removed.length;re++){const ce=K.removed[re],Re=T.indexOf(ce);Re>=0&&(T[Re]=null,A[Re].disconnect(ce))}for(let re=0;re<K.added.length;re++){const ce=K.added[re];let Re=T.indexOf(ce);if(Re===-1){for(let Ne=0;Ne<A.length;Ne++)if(Ne>=T.length){T.push(ce),Re=Ne;break}else if(T[Ne]===null){T[Ne]=ce,Re=Ne;break}if(Re===-1)break}const Ve=A[Re];Ve&&Ve.connect(ce)}}const O=new j,X=new j;function N(K,re,ce){O.setFromMatrixPosition(re.matrixWorld),X.setFromMatrixPosition(ce.matrixWorld);const Re=O.distanceTo(X),Ve=re.projectionMatrix.elements,Ne=ce.projectionMatrix.elements,et=Ve[14]/(Ve[10]-1),we=Ve[14]/(Ve[10]+1),We=(Ve[9]+1)/Ve[5],tt=(Ve[9]-1)/Ve[5],je=(Ve[8]-1)/Ve[0],q=(Ne[8]+1)/Ne[0],ft=et*je,Ht=et*q,k=Re/(-je+q),nt=k*-je;if(re.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(nt),K.translateZ(k),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ve[10]===-1)K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Ke=et+k,pt=we+k,_e=ft-nt,rt=Ht+(Re-nt),P=We*we/pt*Ke,E=tt*we/pt*Ke;K.projectionMatrix.makePerspective(_e,rt,P,E,Ke,pt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function te(K,re){re===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(re.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let re=K.near,ce=K.far;_.texture!==null&&(_.depthNear>0&&(re=_.depthNear),_.depthFar>0&&(ce=_.depthFar)),L.near=R.near=C.near=re,L.far=R.far=C.far=ce,(V!==L.near||G!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),V=L.near,G=L.far),L.layers.mask=K.layers.mask|6,C.layers.mask=L.layers.mask&-5,R.layers.mask=L.layers.mask&-3;const Re=K.parent,Ve=L.cameras;te(L,Re);for(let Ne=0;Ne<Ve.length;Ne++)te(Ve[Ne],Re);Ve.length===2?N(L,C,R):L.projectionMatrix.copy(C.projectionMatrix),se(K,L,Re)};function se(K,re,ce){ce===null?K.matrix.copy(re.matrixWorld):(K.matrix.copy(ce.matrixWorld),K.matrix.invert(),K.matrix.multiply(re.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Hg*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(L)},this.getCameraTexture=function(K){return p[K]};let Ce=null;function Ie(K,re){if(u=re.getViewerPose(c||o),m=re,u!==null){const ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let Re=!1;ce.length!==L.cameras.length&&(L.cameras.length=0,Re=!0);for(let we=0;we<ce.length;we++){const We=ce[we];let tt=null;if(d!==null)tt=d.getViewport(We);else{const q=h.getViewSubImage(f,We);tt=q.viewport,we===0&&(e.setRenderTargetTextures(M,q.colorTexture,q.depthStencilTexture),e.setRenderTarget(M))}let je=D[we];je===void 0&&(je=new Ii,je.layers.enable(we),je.viewport=new Zt,D[we]=je),je.matrix.fromArray(We.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(We.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(tt.x,tt.y,tt.width,tt.height),we===0&&(L.matrix.copy(je.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Re===!0&&L.cameras.push(je)}const Ve=r.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const we=h.getDepthInformation(ce[0]);we&&we.isValid&&we.texture&&_.init(we,r.renderState)}if(Ve&&Ve.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let we=0;we<ce.length;we++){const We=ce[we].camera;if(We){let tt=p[We];tt||(tt=new zE,p[We]=tt);const je=h.getCameraImage(We);tt.sourceTexture=je}}}}for(let ce=0;ce<A.length;ce++){const Re=T[ce],Ve=A[ce];Re!==null&&Ve!==void 0&&Ve.update(Re,re,c||o)}Ce&&Ce(K,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),m=null}const be=new WE;be.setAnimationLoop(Ie),this.setAnimationLoop=function(K){Ce=K},this.dispose=function(){}}}const zD=new Jt,ZE=new Je;ZE.set(-1,0,0,0,1,0,0,0,1);function VD(n,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function i(_,p){p.color.getRGB(_.fogColor.value,VE(n)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,g,y,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(_,p):p.isMeshLambertMaterial?(s(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(_,p),h(_,p)):p.isMeshPhongMaterial?(s(_,p),u(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(_,p),f(_,p),p.isMeshPhysicalMaterial&&d(_,p,M)):p.isMeshMatcapMaterial?(s(_,p),m(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),v(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?l(_,p,g,y):p.isSpriteMaterial?c(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Ei&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Ei&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const g=e.get(p),y=g.envMap,M=g.envMapRotation;y&&(_.envMap.value=y,_.envMapRotation.value.setFromMatrix4(zD.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(ZE),_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,g,y){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*g,_.scale.value=y*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function h(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function f(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function d(_,p,g){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ei&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=g.texture,_.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,p){p.matcap&&(_.matcap.value=p.matcap)}function v(_,p){const g=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(g.matrixWorld),_.nearDistance.value=g.shadow.camera.near,_.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function HD(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,y){const M=y.program;i.uniformBlockBinding(g,M)}function c(g,y){let M=r[g.id];M===void 0&&(m(g),M=u(g),r[g.id]=M,g.addEventListener("dispose",_));const A=y.program;i.updateUBOMapping(g,A);const T=e.render.frame;s[g.id]!==T&&(f(g),s[g.id]=T)}function u(g){const y=h();g.__bindingPointIndex=y;const M=n.createBuffer(),A=g.__size,T=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,A,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,M),M}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const y=r[g.id],M=g.uniforms,A=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,w=M.length;T<w;T++){const S=Array.isArray(M[T])?M[T]:[M[T]];for(let C=0,R=S.length;C<R;C++){const D=S[C];if(d(D,T,C,A)===!0){const L=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let G=0;for(let I=0;I<V.length;I++){const B=V[I],F=v(B);typeof B=="number"||typeof B=="boolean"?(D.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,L+G,D.__data)):B.isMatrix3?(D.__data[0]=B.elements[0],D.__data[1]=B.elements[1],D.__data[2]=B.elements[2],D.__data[3]=0,D.__data[4]=B.elements[3],D.__data[5]=B.elements[4],D.__data[6]=B.elements[5],D.__data[7]=0,D.__data[8]=B.elements[6],D.__data[9]=B.elements[7],D.__data[10]=B.elements[8],D.__data[11]=0):ArrayBuffer.isView(B)?D.__data.set(new B.constructor(B.buffer,B.byteOffset,D.__data.length)):(B.toArray(D.__data,G),G+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(g,y,M,A){const T=g.value,w=y+"_"+M;if(A[w]===void 0)return typeof T=="number"||typeof T=="boolean"?A[w]=T:ArrayBuffer.isView(T)?A[w]=T.slice():A[w]=T.clone(),!0;{const S=A[w];if(typeof T=="number"||typeof T=="boolean"){if(S!==T)return A[w]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(S.equals(T)===!1)return S.copy(T),!0}}return!1}function m(g){const y=g.uniforms;let M=0;const A=16;for(let w=0,S=y.length;w<S;w++){const C=Array.isArray(y[w])?y[w]:[y[w]];for(let R=0,D=C.length;R<D;R++){const L=C[R],V=Array.isArray(L.value)?L.value:[L.value];for(let G=0,I=V.length;G<I;G++){const B=V[G],F=v(B),O=M%A,X=O%F.boundary,N=O+X;M+=X,N!==0&&A-N<F.storage&&(M+=A-N),L.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=F.storage}}}const T=M%A;return T>0&&(M+=A-T),g.__size=M,g.__cache={},this}function v(g){const y={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(y.boundary=4,y.storage=4):g.isVector2?(y.boundary=8,y.storage=8):g.isVector3||g.isColor?(y.boundary=16,y.storage=12):g.isVector4?(y.boundary=16,y.storage=16):g.isMatrix3?(y.boundary=48,y.storage=48):g.isMatrix4?(y.boundary=64,y.storage=64):g.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(y.boundary=16,y.storage=g.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",g),y}function _(g){const y=g.target;y.removeEventListener("dispose",_);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}const GD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Rr=null;function WD(){return Rr===null&&(Rr=new R2(GD,16,16,la,Ss),Rr.name="DFG_LUT",Rr.minFilter=qn,Rr.magFilter=qn,Rr.wrapS=us,Rr.wrapT=us,Rr.generateMipmaps=!1,Rr.needsUpdate=!0),Rr}class jD{constructor(e={}){const{canvas:t=o2(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Oi}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const v=d,_=new Set([x_,v_,__]),p=new Set([Oi,Yr,cu,uu,m_,g_]),g=new Uint32Array(4),y=new Int32Array(4),M=new j;let A=null,T=null;const w=[],S=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1,L=null;this._outputColorSpace=Ji;let V=0,G=0,I=null,B=-1,F=null;const O=new Zt,X=new Zt;let N=null;const te=new Ye(0);let se=0,Ce=t.width,Ie=t.height,be=1,K=null,re=null;const ce=new Zt(0,0,Ce,Ie),Re=new Zt(0,0,Ce,Ie);let Ve=!1;const Ne=new T_;let et=!1,we=!1;const We=new Jt,tt=new j,je=new Zt,q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function Ht(){return I===null?be:1}let k=i;function nt(b,z){return t.getContext(b,z)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${h_}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",pe,!1),k===null){const z="webgl2";if(k=nt(z,b),k===null)throw nt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw xt("WebGLRenderer: "+b.message),b}let Ke,pt,_e,rt,P,E,H,Q,ne,me,oe,Z,ee,xe,Ae,ge,fe,ve,Xe,Ze,U,ue,J;function Se(){Ke=new W3(k),Ke.init(),U=new UD(k,Ke),pt=new F3(k,Ke,e,U),_e=new LD(k,Ke),pt.reversedDepthBuffer&&f&&_e.buffers.depth.setReversed(!0),rt=new Y3(k),P=new xD,E=new ID(k,Ke,_e,P,pt,U,rt),H=new G3(R),Q=new Z2(k),ue=new I3(k,Q),ne=new j3(k,Q,rt,ue),me=new $3(k,ne,Q,ue,rt),ve=new q3(k,pt,E),Ae=new O3(P),oe=new vD(R,H,Ke,pt,ue,Ae),Z=new VD(R,P),ee=new SD,xe=new CD(Ke),fe=new L3(R,H,_e,me,m,l),ge=new DD(R,me,pt),J=new HD(k,rt,pt,_e),Xe=new U3(k,Ke,rt),Ze=new X3(k,Ke,rt),rt.programs=oe.programs,R.capabilities=pt,R.extensions=Ke,R.properties=P,R.renderLists=ee,R.shadowMap=ge,R.state=_e,R.info=rt}Se(),v!==Oi&&(C=new Z3(v,t.width,t.height,r,s));const he=new BD(R,k);this.xr=he,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const b=Ke.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ke.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(b){b!==void 0&&(be=b,this.setSize(Ce,Ie,!1))},this.getSize=function(b){return b.set(Ce,Ie)},this.setSize=function(b,z,$=!0){if(he.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ce=b,Ie=z,t.width=Math.floor(b*be),t.height=Math.floor(z*be),$===!0&&(t.style.width=b+"px",t.style.height=z+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(Ce*be,Ie*be).floor()},this.setDrawingBufferSize=function(b,z,$){Ce=b,Ie=z,be=$,t.width=Math.floor(b*$),t.height=Math.floor(z*$),this.setViewport(0,0,b,z)},this.setEffects=function(b){if(v===Oi){xt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let z=0;z<b.length;z++)if(b[z].isOutputPass===!0){qe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(O)},this.getViewport=function(b){return b.copy(ce)},this.setViewport=function(b,z,$,W){b.isVector4?ce.set(b.x,b.y,b.z,b.w):ce.set(b,z,$,W),_e.viewport(O.copy(ce).multiplyScalar(be).round())},this.getScissor=function(b){return b.copy(Re)},this.setScissor=function(b,z,$,W){b.isVector4?Re.set(b.x,b.y,b.z,b.w):Re.set(b,z,$,W),_e.scissor(X.copy(Re).multiplyScalar(be).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(b){_e.setScissorTest(Ve=b)},this.setOpaqueSort=function(b){K=b},this.setTransparentSort=function(b){re=b},this.getClearColor=function(b){return b.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(b=!0,z=!0,$=!0){let W=0;if(b){let Y=!1;if(I!==null){const ye=I.texture.format;Y=_.has(ye)}if(Y){const ye=I.texture.type,Me=p.has(ye),Te=fe.getClearColor(),Fe=fe.getClearAlpha(),Oe=Te.r,it=Te.g,ot=Te.b;Me?(g[0]=Oe,g[1]=it,g[2]=ot,g[3]=Fe,k.clearBufferuiv(k.COLOR,0,g)):(y[0]=Oe,y[1]=it,y[2]=ot,y[3]=Fe,k.clearBufferiv(k.COLOR,0,y))}else W|=k.COLOR_BUFFER_BIT}z&&(W|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&k.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),L=b},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),fe.dispose(),ee.dispose(),xe.dispose(),P.dispose(),H.dispose(),me.dispose(),ue.dispose(),J.dispose(),oe.dispose(),he.dispose(),he.removeEventListener("sessionstart",lt),he.removeEventListener("sessionend",kt),Bt.stop()};function ie(b){b.preventDefault(),Ux("WebGLRenderer: Context Lost."),D=!0}function le(){Ux("WebGLRenderer: Context Restored."),D=!1;const b=rt.autoReset,z=ge.enabled,$=ge.autoUpdate,W=ge.needsUpdate,Y=ge.type;Se(),rt.autoReset=b,ge.enabled=z,ge.autoUpdate=$,ge.needsUpdate=W,ge.type=Y}function pe(b){xt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function He(b){const z=b.target;z.removeEventListener("dispose",He),ae(z)}function ae(b){Ge(b),P.remove(b)}function Ge(b){const z=P.get(b).programs;z!==void 0&&(z.forEach(function($){oe.releaseProgram($)}),b.isShaderMaterial&&oe.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,$,W,Y,ye){z===null&&(z=q);const Me=Y.isMesh&&Y.matrixWorld.determinant()<0,Te=Mn(b,z,$,W,Y);_e.setMaterial(W,Me);let Fe=$.index,Oe=1;if(W.wireframe===!0){if(Fe=ne.getWireframeAttribute($),Fe===void 0)return;Oe=2}const it=$.drawRange,ot=$.attributes.position;let ze=it.start*Oe,At=(it.start+it.count)*Oe;ye!==null&&(ze=Math.max(ze,ye.start*Oe),At=Math.min(At,(ye.start+ye.count)*Oe)),Fe!==null?(ze=Math.max(ze,0),At=Math.min(At,Fe.count)):ot!=null&&(ze=Math.max(ze,0),At=Math.min(At,ot.count));const tn=At-ze;if(tn<0||tn===1/0)return;ue.setup(Y,W,Te,$,Fe);let $t,bt=Xe;if(Fe!==null&&($t=Q.get(Fe),bt=Ze,bt.setIndex($t)),Y.isMesh)W.wireframe===!0?(_e.setLineWidth(W.wireframeLinewidth*Ht()),bt.setMode(k.LINES)):bt.setMode(k.TRIANGLES);else if(Y.isLine){let kn=W.linewidth;kn===void 0&&(kn=1),_e.setLineWidth(kn*Ht()),Y.isLineSegments?bt.setMode(k.LINES):Y.isLineLoop?bt.setMode(k.LINE_LOOP):bt.setMode(k.LINE_STRIP)}else Y.isPoints?bt.setMode(k.POINTS):Y.isSprite&&bt.setMode(k.TRIANGLES);if(Y.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))bt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const kn=Y._multiDrawStarts,Pe=Y._multiDrawCounts,Ai=Y._multiDrawCount,vt=Fe?Q.get(Fe).bytesPerElement:1,$i=P.get(W).currentProgram.getUniforms();for(let Ar=0;Ar<Ai;Ar++)$i.setValue(k,"_gl_DrawID",Ar),bt.render(kn[Ar]/vt,Pe[Ar])}else if(Y.isInstancedMesh)bt.renderInstances(ze,tn,Y.count);else if($.isInstancedBufferGeometry){const kn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Pe=Math.min($.instanceCount,kn);bt.renderInstances(ze,tn,Pe)}else bt.render(ze,tn)};function Ue(b,z,$){b.transparent===!0&&b.side===os&&b.forceSinglePass===!1?(b.side=Ei,b.needsUpdate=!0,Sn(b,z,$),b.side=ho,b.needsUpdate=!0,Sn(b,z,$),b.side=os):Sn(b,z,$)}this.compile=function(b,z,$=null){$===null&&($=b),T=xe.get($),T.init(z),S.push(T),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),b!==$&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights();const W=new Set;return b.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const ye=Y.material;if(ye)if(Array.isArray(ye))for(let Me=0;Me<ye.length;Me++){const Te=ye[Me];Ue(Te,$,Y),W.add(Te)}else Ue(ye,$,Y),W.add(ye)}),T=S.pop(),W},this.compileAsync=function(b,z,$=null){const W=this.compile(b,z,$);return new Promise(Y=>{function ye(){if(W.forEach(function(Me){P.get(Me).currentProgram.isReady()&&W.delete(Me)}),W.size===0){Y(b);return}setTimeout(ye,10)}Ke.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let $e=null;function ln(b){$e&&$e(b)}function lt(){Bt.stop()}function kt(){Bt.start()}const Bt=new WE;Bt.setAnimationLoop(ln),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(b){$e=b,he.setAnimationLoop(b),b===null?Bt.stop():Bt.start()},he.addEventListener("sessionstart",lt),he.addEventListener("sessionend",kt),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(b,z);const $=he.enabled===!0&&he.isPresenting===!0,W=C!==null&&(I===null||$)&&C.begin(R,I);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(z),z=he.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,z,I),T=xe.get(b,S.length),T.init(z),T.state.textureUnits=E.getTextureUnits(),S.push(T),We.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ne.setFromProjectionMatrix(We,zr,z.reversedDepth),we=this.localClippingEnabled,et=Ae.init(this.clippingPlanes,we),A=ee.get(b,w.length),A.init(),w.push(A),he.enabled===!0&&he.isPresenting===!0){const Me=R.xr.getDepthSensingMesh();Me!==null&&Dt(Me,z,-1/0,R.sortObjects)}Dt(b,z,0,R.sortObjects),A.finish(),R.sortObjects===!0&&A.sort(K,re),ft=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,ft&&fe.addToRenderList(A,b),this.info.render.frame++,et===!0&&Ae.beginShadows();const Y=T.state.shadowsArray;if(ge.render(Y,b,z),et===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&C.hasRenderPass())===!1){const Me=A.opaque,Te=A.transmissive;if(T.setupLights(),z.isArrayCamera){const Fe=z.cameras;if(Te.length>0)for(let Oe=0,it=Fe.length;Oe<it;Oe++){const ot=Fe[Oe];St(Me,Te,b,ot)}ft&&fe.render(b);for(let Oe=0,it=Fe.length;Oe<it;Oe++){const ot=Fe[Oe];Ct(A,b,ot,ot.viewport)}}else Te.length>0&&St(Me,Te,b,z),ft&&fe.render(b),Ct(A,b,z)}I!==null&&G===0&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),W&&C.end(R),b.isScene===!0&&b.onAfterRender(R,b,z),ue.resetDefaultState(),B=-1,F=null,S.pop(),S.length>0?(T=S[S.length-1],E.setTextureUnits(T.state.textureUnits),et===!0&&Ae.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?A=w[w.length-1]:A=null,L!==null&&L.renderEnd()};function Dt(b,z,$,W){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ne.intersectsSprite(b)){W&&je.setFromMatrixPosition(b.matrixWorld).applyMatrix4(We);const Me=me.update(b),Te=b.material;Te.visible&&A.push(b,Me,Te,$,je.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ne.intersectsObject(b))){const Me=me.update(b),Te=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),je.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),je.copy(Me.boundingSphere.center)),je.applyMatrix4(b.matrixWorld).applyMatrix4(We)),Array.isArray(Te)){const Fe=Me.groups;for(let Oe=0,it=Fe.length;Oe<it;Oe++){const ot=Fe[Oe],ze=Te[ot.materialIndex];ze&&ze.visible&&A.push(b,Me,ze,$,je.z,ot)}}else Te.visible&&A.push(b,Me,Te,$,je.z,null)}}const ye=b.children;for(let Me=0,Te=ye.length;Me<Te;Me++)Dt(ye[Me],z,$,W)}function Ct(b,z,$,W){const{opaque:Y,transmissive:ye,transparent:Me}=b;T.setupLightsView($),et===!0&&Ae.setGlobalState(R.clippingPlanes,$),W&&_e.viewport(O.copy(W)),Y.length>0&&On(Y,z,$),ye.length>0&&On(ye,z,$),Me.length>0&&On(Me,z,$),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function St(b,z,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){const ze=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new jr(1,1,{generateMipmaps:!0,type:ze?Ss:Oi,minFilter:Vo,samples:Math.max(4,pt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace})}const ye=T.state.transmissionRenderTarget[W.id],Me=W.viewport||O;ye.setSize(Me.z*R.transmissionResolutionScale,Me.w*R.transmissionResolutionScale);const Te=R.getRenderTarget(),Fe=R.getActiveCubeFace(),Oe=R.getActiveMipmapLevel();R.setRenderTarget(ye),R.getClearColor(te),se=R.getClearAlpha(),se<1&&R.setClearColor(16777215,.5),R.clear(),ft&&fe.render($);const it=R.toneMapping;R.toneMapping=Wr;const ot=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),et===!0&&Ae.setGlobalState(R.clippingPlanes,W),On(b,$,W),E.updateMultisampleRenderTarget(ye),E.updateRenderTargetMipmap(ye),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let At=0,tn=z.length;At<tn;At++){const $t=z[At],{object:bt,geometry:kn,material:Pe,group:Ai}=$t;if(Pe.side===os&&bt.layers.test(W.layers)){const vt=Pe.side;Pe.side=Ei,Pe.needsUpdate=!0,Lt(bt,$,W,kn,Pe,Ai),Pe.side=vt,Pe.needsUpdate=!0,ze=!0}}ze===!0&&(E.updateMultisampleRenderTarget(ye),E.updateRenderTargetMipmap(ye))}R.setRenderTarget(Te,Fe,Oe),R.setClearColor(te,se),ot!==void 0&&(W.viewport=ot),R.toneMapping=it}function On(b,z,$){const W=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,ye=b.length;Y<ye;Y++){const Me=b[Y],{object:Te,geometry:Fe,group:Oe}=Me;let it=Me.material;it.allowOverride===!0&&W!==null&&(it=W),Te.layers.test($.layers)&&Lt(Te,z,$,Fe,it,Oe)}}function Lt(b,z,$,W,Y,ye){b.onBeforeRender(R,z,$,W,Y,ye),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(R,z,$,W,b,ye),Y.transparent===!0&&Y.side===os&&Y.forceSinglePass===!1?(Y.side=Ei,Y.needsUpdate=!0,R.renderBufferDirect($,z,W,Y,b,ye),Y.side=ho,Y.needsUpdate=!0,R.renderBufferDirect($,z,W,Y,b,ye),Y.side=os):R.renderBufferDirect($,z,W,Y,b,ye),b.onAfterRender(R,z,$,W,Y,ye)}function Sn(b,z,$){z.isScene!==!0&&(z=q);const W=P.get(b),Y=T.state.lights,ye=T.state.shadowsArray,Me=Y.state.version,Te=oe.getParameters(b,Y.state,ye,z,$,T.state.lightProbeGridArray),Fe=oe.getProgramCacheKey(Te);let Oe=W.programs;W.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?z.environment:null,W.fog=z.fog;const it=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;W.envMap=H.get(b.envMap||W.environment,it),W.envMapRotation=W.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,Oe===void 0&&(b.addEventListener("dispose",He),Oe=new Map,W.programs=Oe);let ot=Oe.get(Fe);if(ot!==void 0){if(W.currentProgram===ot&&W.lightsStateVersion===Me)return cn(b,Te),ot}else Te.uniforms=oe.getUniforms(b),L!==null&&b.isNodeMaterial&&L.build(b,$,Te),b.onBeforeCompile(Te,R),ot=oe.acquireProgram(Te,Fe),Oe.set(Fe,ot),W.uniforms=Te.uniforms;const ze=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ze.clippingPlanes=Ae.uniform),cn(b,Te),W.needsLights=ha(b),W.lightsStateVersion=Me,W.needsLights&&(ze.ambientLightColor.value=Y.state.ambient,ze.lightProbe.value=Y.state.probe,ze.directionalLights.value=Y.state.directional,ze.directionalLightShadows.value=Y.state.directionalShadow,ze.spotLights.value=Y.state.spot,ze.spotLightShadows.value=Y.state.spotShadow,ze.rectAreaLights.value=Y.state.rectArea,ze.ltc_1.value=Y.state.rectAreaLTC1,ze.ltc_2.value=Y.state.rectAreaLTC2,ze.pointLights.value=Y.state.point,ze.pointLightShadows.value=Y.state.pointShadow,ze.hemisphereLights.value=Y.state.hemi,ze.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ze.spotLightMatrix.value=Y.state.spotLightMatrix,ze.spotLightMap.value=Y.state.spotLightMap,ze.pointShadowMatrix.value=Y.state.pointShadowMatrix),W.lightProbeGrid=T.state.lightProbeGridArray.length>0,W.currentProgram=ot,W.uniformsList=null,ot}function wi(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=Qf.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function cn(b,z){const $=P.get(b);$.outputColorSpace=z.outputColorSpace,$.batching=z.batching,$.batchingColor=z.batchingColor,$.instancing=z.instancing,$.instancingColor=z.instancingColor,$.instancingMorph=z.instancingMorph,$.skinning=z.skinning,$.morphTargets=z.morphTargets,$.morphNormals=z.morphNormals,$.morphColors=z.morphColors,$.morphTargetsCount=z.morphTargetsCount,$.numClippingPlanes=z.numClippingPlanes,$.numIntersection=z.numClipIntersection,$.vertexAlphas=z.vertexAlphas,$.vertexTangents=z.vertexTangents,$.toneMapping=z.toneMapping}function pn(b,z){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition(z.matrixWorld);for(let $=0,W=b.length;$<W;$++){const Y=b[$];if(Y.texture!==null&&Y.boundingBox.containsPoint(M))return Y}return null}function Mn(b,z,$,W,Y){z.isScene!==!0&&(z=q),E.resetTextureUnits();const ye=z.fog,Me=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?z.environment:null,Te=I===null?R.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:mt.workingColorSpace,Fe=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Oe=H.get(W.envMap||Me,Fe),it=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ot=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ze=!!$.morphAttributes.position,At=!!$.morphAttributes.normal,tn=!!$.morphAttributes.color;let $t=Wr;W.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&($t=R.toneMapping);const bt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,kn=bt!==void 0?bt.length:0,Pe=P.get(W),Ai=T.state.lights;if(et===!0&&(we===!0||b!==F)){const It=b===F&&W.id===B;Ae.setState(W,b,It)}let vt=!1;W.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Ai.state.version||Pe.outputColorSpace!==Te||Y.isBatchedMesh&&Pe.batching===!1||!Y.isBatchedMesh&&Pe.batching===!0||Y.isBatchedMesh&&Pe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Pe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Pe.instancing===!1||!Y.isInstancedMesh&&Pe.instancing===!0||Y.isSkinnedMesh&&Pe.skinning===!1||!Y.isSkinnedMesh&&Pe.skinning===!0||Y.isInstancedMesh&&Pe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Pe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Pe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Pe.instancingMorph===!1&&Y.morphTexture!==null||Pe.envMap!==Oe||W.fog===!0&&Pe.fog!==ye||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Ae.numPlanes||Pe.numIntersection!==Ae.numIntersection)||Pe.vertexAlphas!==it||Pe.vertexTangents!==ot||Pe.morphTargets!==ze||Pe.morphNormals!==At||Pe.morphColors!==tn||Pe.toneMapping!==$t||Pe.morphTargetsCount!==kn||!!Pe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Pe.__version=W.version);let $i=Pe.currentProgram;vt===!0&&($i=Sn(W,z,Y),L&&W.isNodeMaterial&&L.onUpdateProgram(W,$i,Pe));let Ar=!1,Ts=!1,pa=!1;const Rt=$i.getUniforms(),nn=Pe.uniforms;if(_e.useProgram($i.program)&&(Ar=!0,Ts=!0,pa=!0),W.id!==B&&(B=W.id,Ts=!0),Pe.needsLights){const It=pn(T.state.lightProbeGridArray,Y);Pe.lightProbeGrid!==It&&(Pe.lightProbeGrid=It,Ts=!0)}if(Ar||F!==b){_e.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Rt.setValue(k,"projectionMatrix",b.projectionMatrix),Rt.setValue(k,"viewMatrix",b.matrixWorldInverse);const As=Rt.map.cameraPosition;As!==void 0&&As.setValue(k,tt.setFromMatrixPosition(b.matrixWorld)),pt.logarithmicDepthBuffer&&Rt.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Rt.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),F!==b&&(F=b,Ts=!0,pa=!0)}if(Pe.needsLights&&(Ai.state.directionalShadowMap.length>0&&Rt.setValue(k,"directionalShadowMap",Ai.state.directionalShadowMap,E),Ai.state.spotShadowMap.length>0&&Rt.setValue(k,"spotShadowMap",Ai.state.spotShadowMap,E),Ai.state.pointShadowMap.length>0&&Rt.setValue(k,"pointShadowMap",Ai.state.pointShadowMap,E)),Y.isSkinnedMesh){Rt.setOptional(k,Y,"bindMatrix"),Rt.setOptional(k,Y,"bindMatrixInverse");const It=Y.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Rt.setValue(k,"boneTexture",It.boneTexture,E))}Y.isBatchedMesh&&(Rt.setOptional(k,Y,"batchingTexture"),Rt.setValue(k,"batchingTexture",Y._matricesTexture,E),Rt.setOptional(k,Y,"batchingIdTexture"),Rt.setValue(k,"batchingIdTexture",Y._indirectTexture,E),Rt.setOptional(k,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Rt.setValue(k,"batchingColorTexture",Y._colorsTexture,E));const ws=$.morphAttributes;if((ws.position!==void 0||ws.normal!==void 0||ws.color!==void 0)&&ve.update(Y,$,$i),(Ts||Pe.receiveShadow!==Y.receiveShadow)&&(Pe.receiveShadow=Y.receiveShadow,Rt.setValue(k,"receiveShadow",Y.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&z.environment!==null&&(nn.envMapIntensity.value=z.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=WD()),Ts){if(Rt.setValue(k,"toneMappingExposure",R.toneMappingExposure),Pe.needsLights&&$r(nn,pa),ye&&W.fog===!0&&Z.refreshFogUniforms(nn,ye),Z.refreshMaterialUniforms(nn,W,be,Ie,T.state.transmissionRenderTarget[b.id]),Pe.needsLights&&Pe.lightProbeGrid){const It=Pe.lightProbeGrid;nn.probesSH.value=It.texture,nn.probesMin.value.copy(It.boundingBox.min),nn.probesMax.value.copy(It.boundingBox.max),nn.probesResolution.value.copy(It.resolution)}Qf.upload(k,wi(Pe),nn,E)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Qf.upload(k,wi(Pe),nn,E),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Rt.setValue(k,"center",Y.center),Rt.setValue(k,"modelViewMatrix",Y.modelViewMatrix),Rt.setValue(k,"normalMatrix",Y.normalMatrix),Rt.setValue(k,"modelMatrix",Y.matrixWorld),W.uniformsGroups!==void 0){const It=W.uniformsGroups;for(let As=0,ma=It.length;As<ma;As++){const I_=It[As];J.update(I_,$i),J.bind(I_,$i)}}return $i}function $r(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function ha(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,z,$){const W=P.get(b);W.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),P.get(b.texture).__webglTexture=z,P.get(b.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,z){const $=P.get(b);$.__webglFramebuffer=z,$.__useDefaultFramebuffer=z===void 0};const En=k.createFramebuffer();this.setRenderTarget=function(b,z=0,$=0){I=b,V=z,G=$;let W=null,Y=!1,ye=!1;if(b){const Te=P.get(b);if(Te.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(k.FRAMEBUFFER,Te.__webglFramebuffer),O.copy(b.viewport),X.copy(b.scissor),N=b.scissorTest,_e.viewport(O),_e.scissor(X),_e.setScissorTest(N),B=-1;return}else if(Te.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(Te.__hasExternalTextures)E.rebindTextures(b,P.get(b.texture).__webglTexture,P.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const it=b.depthTexture;if(Te.__boundDepthTexture!==it){if(it!==null&&P.has(it)&&(b.width!==it.image.width||b.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}const Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ye=!0);const Oe=P.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Oe[z])?W=Oe[z][$]:W=Oe[z],Y=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?W=P.get(b).__webglMultisampledFramebuffer:Array.isArray(Oe)?W=Oe[$]:W=Oe,O.copy(b.viewport),X.copy(b.scissor),N=b.scissorTest}else O.copy(ce).multiplyScalar(be).floor(),X.copy(Re).multiplyScalar(be).floor(),N=Ve;if($!==0&&(W=En),_e.bindFramebuffer(k.FRAMEBUFFER,W)&&_e.drawBuffers(b,W),_e.viewport(O),_e.scissor(X),_e.setScissorTest(N),Y){const Te=P.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+z,Te.__webglTexture,$)}else if(ye){const Te=z;for(let Fe=0;Fe<b.textures.length;Fe++){const Oe=P.get(b.textures[Fe]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Fe,Oe.__webglTexture,$,Te)}}else if(b!==null&&$!==0){const Te=P.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Te.__webglTexture,$)}B=-1},this.readRenderTargetPixels=function(b,z,$,W,Y,ye,Me,Te=0){if(!(b&&b.isWebGLRenderTarget)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=P.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Fe=Fe[Me]),Fe){_e.bindFramebuffer(k.FRAMEBUFFER,Fe);try{const Oe=b.textures[Te],it=Oe.format,ot=Oe.type;if(b.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Te),!pt.textureFormatReadable(it)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(ot)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-W&&$>=0&&$<=b.height-Y&&k.readPixels(z,$,W,Y,U.convert(it),U.convert(ot),ye)}finally{const Oe=I!==null?P.get(I).__webglFramebuffer:null;_e.bindFramebuffer(k.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(b,z,$,W,Y,ye,Me,Te=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=P.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Fe=Fe[Me]),Fe)if(z>=0&&z<=b.width-W&&$>=0&&$<=b.height-Y){_e.bindFramebuffer(k.FRAMEBUFFER,Fe);const Oe=b.textures[Te],it=Oe.format,ot=Oe.type;if(b.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Te),!pt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ze),k.bufferData(k.PIXEL_PACK_BUFFER,ye.byteLength,k.STREAM_READ),k.readPixels(z,$,W,Y,U.convert(it),U.convert(ot),0);const At=I!==null?P.get(I).__webglFramebuffer:null;_e.bindFramebuffer(k.FRAMEBUFFER,At);const tn=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await a2(k,tn,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ze),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ye),k.deleteBuffer(ze),k.deleteSync(tn),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,z=null,$=0){const W=Math.pow(2,-$),Y=Math.floor(b.image.width*W),ye=Math.floor(b.image.height*W),Me=z!==null?z.x:0,Te=z!==null?z.y:0;E.setTexture2D(b,0),k.copyTexSubImage2D(k.TEXTURE_2D,$,0,0,Me,Te,Y,ye),_e.unbindTexture()};const en=k.createFramebuffer(),qi=k.createFramebuffer();this.copyTextureToTexture=function(b,z,$=null,W=null,Y=0,ye=0){let Me,Te,Fe,Oe,it,ot,ze,At,tn;const $t=b.isCompressedTexture?b.mipmaps[ye]:b.image;if($!==null)Me=$.max.x-$.min.x,Te=$.max.y-$.min.y,Fe=$.isBox3?$.max.z-$.min.z:1,Oe=$.min.x,it=$.min.y,ot=$.isBox3?$.min.z:0;else{const nn=Math.pow(2,-Y);Me=Math.floor($t.width*nn),Te=Math.floor($t.height*nn),b.isDataArrayTexture?Fe=$t.depth:b.isData3DTexture?Fe=Math.floor($t.depth*nn):Fe=1,Oe=0,it=0,ot=0}W!==null?(ze=W.x,At=W.y,tn=W.z):(ze=0,At=0,tn=0);const bt=U.convert(z.format),kn=U.convert(z.type);let Pe;z.isData3DTexture?(E.setTexture3D(z,0),Pe=k.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(E.setTexture2DArray(z,0),Pe=k.TEXTURE_2D_ARRAY):(E.setTexture2D(z,0),Pe=k.TEXTURE_2D),_e.activeTexture(k.TEXTURE0),_e.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,z.flipY),_e.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),_e.pixelStorei(k.UNPACK_ALIGNMENT,z.unpackAlignment);const Ai=_e.getParameter(k.UNPACK_ROW_LENGTH),vt=_e.getParameter(k.UNPACK_IMAGE_HEIGHT),$i=_e.getParameter(k.UNPACK_SKIP_PIXELS),Ar=_e.getParameter(k.UNPACK_SKIP_ROWS),Ts=_e.getParameter(k.UNPACK_SKIP_IMAGES);_e.pixelStorei(k.UNPACK_ROW_LENGTH,$t.width),_e.pixelStorei(k.UNPACK_IMAGE_HEIGHT,$t.height),_e.pixelStorei(k.UNPACK_SKIP_PIXELS,Oe),_e.pixelStorei(k.UNPACK_SKIP_ROWS,it),_e.pixelStorei(k.UNPACK_SKIP_IMAGES,ot);const pa=b.isDataArrayTexture||b.isData3DTexture,Rt=z.isDataArrayTexture||z.isData3DTexture;if(b.isDepthTexture){const nn=P.get(b),ws=P.get(z),It=P.get(nn.__renderTarget),As=P.get(ws.__renderTarget);_e.bindFramebuffer(k.READ_FRAMEBUFFER,It.__webglFramebuffer),_e.bindFramebuffer(k.DRAW_FRAMEBUFFER,As.__webglFramebuffer);for(let ma=0;ma<Fe;ma++)pa&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,P.get(b).__webglTexture,Y,ot+ma),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,P.get(z).__webglTexture,ye,tn+ma)),k.blitFramebuffer(Oe,it,Me,Te,ze,At,Me,Te,k.DEPTH_BUFFER_BIT,k.NEAREST);_e.bindFramebuffer(k.READ_FRAMEBUFFER,null),_e.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Y!==0||b.isRenderTargetTexture||P.has(b)){const nn=P.get(b),ws=P.get(z);_e.bindFramebuffer(k.READ_FRAMEBUFFER,en),_e.bindFramebuffer(k.DRAW_FRAMEBUFFER,qi);for(let It=0;It<Fe;It++)pa?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,nn.__webglTexture,Y,ot+It):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,nn.__webglTexture,Y),Rt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ws.__webglTexture,ye,tn+It):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ws.__webglTexture,ye),Y!==0?k.blitFramebuffer(Oe,it,Me,Te,ze,At,Me,Te,k.COLOR_BUFFER_BIT,k.NEAREST):Rt?k.copyTexSubImage3D(Pe,ye,ze,At,tn+It,Oe,it,Me,Te):k.copyTexSubImage2D(Pe,ye,ze,At,Oe,it,Me,Te);_e.bindFramebuffer(k.READ_FRAMEBUFFER,null),_e.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Rt?b.isDataTexture||b.isData3DTexture?k.texSubImage3D(Pe,ye,ze,At,tn,Me,Te,Fe,bt,kn,$t.data):z.isCompressedArrayTexture?k.compressedTexSubImage3D(Pe,ye,ze,At,tn,Me,Te,Fe,bt,$t.data):k.texSubImage3D(Pe,ye,ze,At,tn,Me,Te,Fe,bt,kn,$t):b.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ye,ze,At,Me,Te,bt,kn,$t.data):b.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ye,ze,At,$t.width,$t.height,bt,$t.data):k.texSubImage2D(k.TEXTURE_2D,ye,ze,At,Me,Te,bt,kn,$t);_e.pixelStorei(k.UNPACK_ROW_LENGTH,Ai),_e.pixelStorei(k.UNPACK_IMAGE_HEIGHT,vt),_e.pixelStorei(k.UNPACK_SKIP_PIXELS,$i),_e.pixelStorei(k.UNPACK_SKIP_ROWS,Ar),_e.pixelStorei(k.UNPACK_SKIP_IMAGES,Ts),ye===0&&z.generateMipmaps&&k.generateMipmap(Pe),_e.unbindTexture()},this.initRenderTarget=function(b){P.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),_e.unbindTexture()},this.resetState=function(){V=0,G=0,I=null,_e.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}_t.registerPlugin(Qe);const Pr=[{body:"#f0f0f0",emissive:"#1a1a3a",roughness:.25,metalness:.15,p1Color:new Ye("#7c3aed"),p2Color:new Ye("#06b6d4"),label:"white"},{body:"#0e0e1c",emissive:"#4c1d95",roughness:.35,metalness:.2,p1Color:new Ye("#6366f1"),p2Color:new Ye("#3b82f6"),label:"black"},{body:"#9333ea",emissive:"#c084fc",roughness:.2,metalness:.25,p1Color:new Ye("#22d3ee"),p2Color:new Ye("#ec4899"),label:"violet"}],XD=4,YD=1.1;function qD(n){const e=new dc,t=[new ke(.01,0),new ke(.11,.09),new ke(.14,.25),new ke(.11,.44),new ke(.16,.64),new ke(.28,.83),new ke(.25,.93),new ke(.17,1.06),new ke(.21,1.2),new ke(.27,1.37),new ke(.24,1.51),new ke(.18,1.63),new ke(.07,1.73),new ke(.065,1.84)],i=new zd(t,72);e.add(new ri(i,n));const r=new w_(.27,36,36),s=new ri(r,n);s.position.y=2.17,e.add(s);const o=[new ke(.01,0),new ke(.28,.04),new ke(.33,.22),new ke(.31,.46),new ke(.24,.64),new ke(.1,.78),new ke(.01,.88)],a=new zd(o,48),l=new ri(a,n);l.position.y=2.17,e.add(l),[{x:-.36,angleZ:Math.PI/4.5,foreX:-.54,foreAngle:Math.PI/6.5},{x:.36,angleZ:-Math.PI/4.5,foreX:.54,foreAngle:-Math.PI/6.5}].forEach(({x:d,angleZ:m,foreX:v,foreAngle:_})=>{const p=new Bd(.04,.055,.68,18),g=new ri(p,n);g.position.set(d,1.35,0),g.rotation.z=m,e.add(g);const y=new Bd(.032,.04,.58,16),M=new ri(y,n);M.position.set(v,.98,0),M.rotation.z=_,e.add(M)});const u=new A_(.22,.018,16,80),h=new E_({color:8141549,transparent:!0,opacity:.55}),f=new ri(u,h);return f.rotation.x=Math.PI/2,f.position.y=.008,e.add(f),{group:e,ring:f,ringMat:h}}function $D(){const e=new Float32Array(540);for(let r=0;r<180;r++){const s=1.6+Math.random()*1.8,o=Math.random()*Math.PI*2,a=Math.acos(2*Math.random()-1);e[r*3]=s*Math.sin(a)*Math.cos(o),e[r*3+1]=s*Math.sin(a)*Math.sin(o)+1.1,e[r*3+2]=s*Math.cos(a)}const t=new ui;t.setAttribute("position",new Er(e,3));const i=new kE({size:.026,color:8141549,transparent:!0,opacity:.55});return{points:new L2(t,i),geo:t,mat:i}}function KD(){const{data:n}=wr(),{title:e,subtitle:t,cta1:i,cta2:r}=n.hero,s=Be.useRef(null),o=Be.useRef(null),[a,l]=Be.useState(0);Be.useEffect(()=>{const u=s.current;if(!u)return;const h=u.clientWidth,f=u.clientHeight,d=new E2,m=new Ii(38,h/f,.1,100);m.position.set(0,1.25,5.2),m.lookAt(0,1.2,0);const v=new jD({antialias:!0,alpha:!0});v.setSize(h,f),v.setPixelRatio(Math.min(window.devicePixelRatio,2)),v.setClearColor(0,0),u.appendChild(v.domElement);const _=new z2({color:new Ye(Pr[0].body),emissive:new Ye(Pr[0].emissive),emissiveIntensity:.28,roughness:Pr[0].roughness,metalness:Pr[0].metalness}),{group:p,ringMat:g}=qD(_);p.position.y=-.5,p.rotation.y=.15,d.add(p);const{points:y,geo:M,mat:A}=$D();d.add(y);const T=new X2(16777215,.45);d.add(T);const w=new j2(16777215,1.3);w.position.set(2,3.5,2),d.add(w);const S=new iy(8141549,2.2,9);S.position.set(-2.2,2,2),d.add(S);const C=new iy(440020,1.8,7);C.position.set(2.2,.5,1),d.add(C);let R=0,D=0,L=!1,V=0;const G=new Ye;function I(se){const Ce=Pr[se];_.color.set(Ce.body),_.emissive.set(Ce.emissive),_.roughness=Ce.roughness,_.metalness=Ce.metalness,S.color.copy(Ce.p1Color),C.color.copy(Ce.p2Color),g.color.copy(Ce.p1Color)}const B={y:.15,x:0},F=se=>{const Ce=se.clientX/window.innerWidth*2-1,Ie=se.clientY/window.innerHeight*2-1;B.y=.15+Ce*.45,B.x=-Ie*.12};window.addEventListener("mousemove",F,{passive:!0});const O=()=>{const se=u.clientWidth,Ce=u.clientHeight;m.aspect=se/Ce,m.updateProjectionMatrix(),v.setSize(se,Ce)};window.addEventListener("resize",O,{passive:!0});const X=new $2;let N;const te=()=>{N=requestAnimationFrame(te);const se=X.getDelta(),Ce=X.elapsedTime;if(D+=se,!L&&D>=XD&&(L=!0,V=0,D=0),L)if(V+=se/YD,V>=1)V=1,L=!1,R=(R+1)%Pr.length,I(R),l(R);else{const Ie=(R+1)%Pr.length,be=Pr[R],K=Pr[Ie],re=V;_.color.copy(G.set(be.body)).lerp(G.set(K.body),re);const ce=new Ye(be.body),Re=new Ye(K.body);_.color.copy(ce).lerp(Re,re);const Ve=new Ye(be.emissive),Ne=new Ye(K.emissive);_.emissive.copy(Ve).lerp(Ne,re);const et=new Ye().copy(be.p1Color),we=new Ye().copy(K.p1Color);S.color.copy(et).lerp(we,re);const We=new Ye().copy(be.p2Color),tt=new Ye().copy(K.p2Color);C.color.copy(We).lerp(tt,re),g.color.copy(et).lerp(we,re)}p.rotation.y+=(B.y-p.rotation.y)*.055,p.rotation.x+=(B.x-p.rotation.x)*.055,p.position.y=-.5+Math.sin(Ce*.55)*.055,S.position.x=-2.2+Math.sin(Ce*.28)*.6,S.position.z=2+Math.cos(Ce*.22)*.5,C.position.x=2.2+Math.cos(Ce*.35)*.5,C.position.z=1+Math.sin(Ce*.3)*.5,y.rotation.y+=.0018,y.rotation.x=Math.sin(Ce*.15)*.08,v.render(d,m)};return te(),()=>{cancelAnimationFrame(N),window.removeEventListener("mousemove",F),window.removeEventListener("resize",O),u.contains(v.domElement)&&u.removeChild(v.domElement),v.dispose(),_.dispose(),M.dispose(),A.dispose(),g.dispose()}},[]),Be.useEffect(()=>{const u=_t.context(()=>{_t.timeline({delay:.5}).fromTo(".hero-badge",{y:-20,opacity:0},{y:0,opacity:1,duration:.6,ease:"power3.out"}).fromTo(".hero-word",{y:110,opacity:0},{y:0,opacity:1,duration:1,stagger:.055,ease:"power4.out"},"-=0.3").fromTo(".hero-subtitle",{y:30,opacity:0},{y:0,opacity:1,duration:.75,ease:"power3.out"},"-=0.5").fromTo(".hero-action",{y:20,opacity:0},{y:0,opacity:1,duration:.55,stagger:.12,ease:"power3.out"},"-=0.35").fromTo(".hero-stat",{y:18,opacity:0},{y:0,opacity:1,duration:.5,stagger:.1,ease:"power3.out"},"-=0.2"),_t.to(".hero-orb-1",{yPercent:40,ease:"none",scrollTrigger:{trigger:o.current,start:"top top",end:"bottom top",scrub:2}}),_t.to(".scroll-indicator",{opacity:0,scrollTrigger:{trigger:o.current,start:"top top",end:"15% top",scrub:!0}})},o);return()=>u.revert()},[]);const c=e.split(" ");return x.jsxs("section",{id:"hero",ref:o,className:"hero",children:[x.jsxs("div",{className:"hero-bg",children:[x.jsx("div",{className:"hero-orb hero-orb-1"}),x.jsx("div",{className:"hero-orb hero-orb-2"}),x.jsx("div",{className:"hero-grid-overlay"})]}),x.jsx("div",{className:"container",children:x.jsxs("div",{className:"hero-content",children:[x.jsxs("div",{className:"hero-badge",children:[x.jsx("span",{className:"hero-badge-dot"}),"Agencia Digital Premium"]}),x.jsx("h1",{className:"hero-title",children:c.map((u,h)=>x.jsxs("span",{className:"hero-word-wrap",children:[x.jsx("span",{className:"hero-word",children:["digital","futuro"].includes(u.toLowerCase().replace(",",""))?x.jsx("span",{className:"highlight",children:u}):u}),h<c.length-1?" ":""]},h))}),x.jsx("p",{className:"hero-subtitle",children:t}),x.jsxs("div",{className:"hero-actions",children:[x.jsxs("a",{href:"#portfolio",className:"hero-action btn-primary",children:[x.jsx("span",{children:i}),x.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:x.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]}),x.jsx("a",{href:"#contact",className:"hero-action btn-ghost",children:r})]}),x.jsxs("div",{className:"hero-stats",children:[x.jsxs("div",{className:"hero-stat",children:[x.jsx("span",{className:"stat-number",children:"50+"}),x.jsx("span",{className:"stat-label",children:"Proyectos completados"})]}),x.jsx("div",{className:"hero-stats-divider"}),x.jsxs("div",{className:"hero-stat",children:[x.jsx("span",{className:"stat-number",children:"98%"}),x.jsx("span",{className:"stat-label",children:"Clientes satisfechos"})]}),x.jsx("div",{className:"hero-stats-divider"}),x.jsxs("div",{className:"hero-stat",children:[x.jsx("span",{className:"stat-number",children:"5★"}),x.jsx("span",{className:"stat-label",children:"Valoración media"})]})]})]})}),x.jsx("div",{ref:s,className:"hero-canvas-wrap",children:x.jsx("div",{className:"hero-color-indicator",children:Pr.map((u,h)=>x.jsx("div",{className:`color-dot ${h===a?"active":""}`},h))})}),x.jsxs("div",{className:"scroll-indicator","aria-hidden":"true",children:[x.jsx("span",{className:"scroll-text",children:"Scroll"}),x.jsx("div",{className:"scroll-line",children:x.jsx("div",{className:"scroll-dot"})})]})]})}_t.registerPlugin(Qe);const Ry=[x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:[x.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}),x.jsx("path",{d:"M8 21h8M12 17v4"}),x.jsx("path",{d:"M7 8h4M7 11h2"}),x.jsx("rect",{x:"13",y:"7",width:"5",height:"5",rx:"1"})]},"web"),x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:[x.jsx("circle",{cx:"18",cy:"5",r:"3"}),x.jsx("circle",{cx:"6",cy:"12",r:"3"}),x.jsx("circle",{cx:"18",cy:"19",r:"3"}),x.jsx("path",{d:"M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"})]},"social"),x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:[x.jsx("circle",{cx:"11",cy:"11",r:"8"}),x.jsx("path",{d:"m21 21-4.35-4.35M11 7v4l3 2"})]},"seo")];function ZD(){const{data:n}=wr(),{services:e}=n,t=Be.useRef(null);return Be.useEffect(()=>{const i=_t.context(()=>{_t.fromTo(".services-header",{y:50,opacity:0},{y:0,opacity:1,duration:.85,ease:"power3.out",scrollTrigger:{trigger:".services-header",start:"top 85%",once:!0}}),_t.fromTo(".service-card",{y:70,opacity:0,scale:.97},{y:0,opacity:1,scale:1,duration:.9,stagger:.15,ease:"power3.out",scrollTrigger:{trigger:".services-grid",start:"top 82%",once:!0}})},t);return()=>i.revert()},[]),x.jsx("section",{id:"services",ref:t,className:"services section",children:x.jsxs("div",{className:"container",children:[x.jsxs("div",{className:"section-header services-header",children:[x.jsxs("div",{className:"section-tag",children:[x.jsx("span",{className:"section-tag-dot"}),"Nuestros servicios"]}),x.jsxs("h2",{className:"section-title",children:["Todo lo que necesita ",x.jsx("span",{className:"gradient-text",children:"tu negocio digital"})]}),x.jsx("p",{className:"section-subtitle",children:"Combinamos diseño de alto impacto, estrategia digital y tecnología de última generación para hacer crecer tu marca online."})]}),x.jsx("div",{className:"services-grid",children:e.map((i,r)=>x.jsx("div",{className:"service-card",children:x.jsxs("div",{className:"service-card-inner",children:[x.jsxs("span",{className:"service-number",children:["0",r+1]}),x.jsx("div",{className:"service-icon-wrap",children:Ry[r%Ry.length]}),x.jsx("h3",{className:"service-title",children:i.title}),x.jsx("p",{className:"service-desc",children:i.description}),x.jsx("ul",{className:"service-features",children:i.features.map(s=>x.jsxs("li",{className:"service-feature",children:[x.jsx("span",{className:"service-feature-check",children:x.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:x.jsx("polyline",{points:"20 6 9 17 4 12"})})}),s]},s))}),x.jsxs("a",{href:"#contact",className:"service-link",children:["Saber más",x.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:x.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})},i.id))})]})})}_t.registerPlugin(Qe);const Py=["linear-gradient(135deg, #0f0c29, #302b63, #24243e)","linear-gradient(135deg, #0a1628, #1a3a5c, #0d2440)","linear-gradient(135deg, #1a0533, #3d0575, #6a0dad)","linear-gradient(135deg, #0d2b1d, #155239, #0a6624)","linear-gradient(135deg, #2d0320, #660f47, #991b1b)","linear-gradient(135deg, #020617, #0c1445, #162260)"],Tf=["#a78bfa","#67e8f9","#c084fc","#4ade80","#fb7185","#60a5fa"],QD=["Todos","Web","Branding","Social","App"];function JD({accent:n}){return x.jsx("div",{className:"portfolio-mockup",children:x.jsxs("div",{className:"portfolio-mockup-screen",children:[x.jsxs("div",{className:"mockup-topbar",children:[x.jsx("span",{className:"mockup-dot"}),x.jsx("span",{className:"mockup-dot"}),x.jsx("span",{className:"mockup-dot"})]}),x.jsxs("div",{className:"mockup-content",children:[x.jsx("div",{className:"mockup-bar",style:{height:10,width:"55%",background:n+"66",borderRadius:3}}),x.jsx("div",{className:"mockup-bar",style:{width:"100%"}}),x.jsx("div",{className:"mockup-bar",style:{width:"75%"}}),x.jsx("div",{className:"mockup-bar",style:{width:"50%"}}),x.jsxs("div",{style:{display:"flex",gap:6,marginTop:4},children:[x.jsx("div",{className:"mockup-bar",style:{flex:1,height:26,borderRadius:4,background:n+"22"}}),x.jsx("div",{className:"mockup-bar",style:{flex:1,height:26,borderRadius:4,background:"rgba(255,255,255,0.05)"}}),x.jsx("div",{className:"mockup-bar",style:{flex:1,height:26,borderRadius:4,background:"rgba(255,255,255,0.05)"}})]}),x.jsx("div",{className:"mockup-bar",style:{width:"100%",marginTop:2}}),x.jsx("div",{className:"mockup-bar",style:{width:"60%"}})]})]})})}function eL(){const{data:n}=wr(),{portfolio:e}=n,t=Be.useRef(null),[i,r]=Be.useState("Todos"),s=i==="Todos"?e:e.filter(o=>o.tag===i);return Be.useEffect(()=>{const o=_t.context(()=>{_t.fromTo(".portfolio-header",{y:50,opacity:0},{y:0,opacity:1,duration:.85,ease:"power3.out",scrollTrigger:{trigger:".portfolio-header",start:"top 85%",once:!0}}),_t.fromTo(".portfolio-filters",{y:24,opacity:0},{y:0,opacity:1,duration:.6,ease:"power3.out",scrollTrigger:{trigger:".portfolio-filters",start:"top 88%",once:!0}}),_t.fromTo(".portfolio-grid",{y:50,opacity:0},{y:0,opacity:1,duration:.9,ease:"power3.out",scrollTrigger:{trigger:".portfolio-grid",start:"top 84%",once:!0}})},t);return()=>o.revert()},[]),Be.useEffect(()=>{_t.fromTo(".portfolio-item",{y:30,opacity:0,scale:.97},{y:0,opacity:1,scale:1,duration:.6,stagger:.07,ease:"power3.out"})},[i]),x.jsx("section",{id:"portfolio",ref:t,className:"portfolio section",children:x.jsxs("div",{className:"container",children:[x.jsxs("div",{className:"section-header portfolio-header",children:[x.jsxs("div",{className:"section-tag",children:[x.jsx("span",{className:"section-tag-dot"}),"Portfolio"]}),x.jsxs("h2",{className:"section-title",children:["Proyectos que ",x.jsx("span",{className:"gradient-text",children:"hablan por sí solos"})]}),x.jsx("p",{className:"section-subtitle",children:"Cada proyecto es una historia de transformación digital. Aquí están algunos de los trabajos de los que más orgullosos estamos."})]}),x.jsx("div",{className:"portfolio-filters",children:QD.map(o=>x.jsx("button",{className:`filter-btn ${i===o?"active":""}`,onClick:()=>r(o),children:o},o))}),x.jsx("div",{className:"portfolio-grid",children:s.map((o,a)=>x.jsxs("div",{className:"portfolio-item",children:[x.jsxs("div",{className:"portfolio-image",children:[x.jsx("div",{className:"portfolio-visual",style:{background:Py[a%Py.length]},children:x.jsx(JD,{accent:Tf[a%Tf.length]})}),x.jsxs("div",{className:"portfolio-overlay",children:[x.jsx("span",{style:{fontSize:"0.75rem",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:Tf[a%Tf.length],marginBottom:6,display:"block"},children:o.category}),x.jsx("span",{style:{fontFamily:"var(--font-display)",fontSize:"1.25rem",fontWeight:700,color:"#fff"},children:o.name})]})]}),x.jsxs("div",{className:"portfolio-info",children:[x.jsxs("div",{children:[x.jsx("div",{className:"portfolio-name",children:o.name}),x.jsxs("div",{className:"portfolio-category",children:[o.category," · ",o.year]})]}),x.jsx("div",{className:"portfolio-arrow",children:x.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:x.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})})]})]},o.id))})]})})}_t.registerPlugin(Qe);const Co=[{text:"Trabajar con creaar.es fue una experiencia increíble. Rediseñaron nuestra web en tiempo récord y las ventas online aumentaron un 240% en tres meses. Son un equipo que de verdad se involucra con tu negocio.",name:"María Fernández",role:"CEO · LuxeMode",initials:"MF",avatarGradient:"linear-gradient(135deg, #7c3aed, #a855f7)",stars:5},{text:"El trabajo de SEO que hicieron para nosotros superó todas nuestras expectativas. Pasamos de la página 4 a la posición 1 en nuestras palabras clave principales. El tráfico orgánico se triplicó en 6 meses.",name:"Carlos Méndez",role:"Fundador · Pulsar Tech",initials:"CM",avatarGradient:"linear-gradient(135deg, #06b6d4, #3b82f6)",stars:5},{text:"Desde que gestionan nuestras redes sociales, la comunidad ha crecido de 800 a más de 18.000 seguidores en Instagram. El contenido que crean refleja perfectamente nuestra esencia como restaurante.",name:"Elena Soler",role:"Propietaria · La Trattoria",initials:"ES",avatarGradient:"linear-gradient(135deg, #ec4899, #f97316)",stars:5}];function tL(){const n=Be.useRef(null),[e,t]=Be.useState(0),i=Be.useRef(null),r=Be.useCallback(l=>{t(l)},[]),s=Be.useCallback(()=>{t(l=>(l-1+Co.length)%Co.length)},[]),o=Be.useCallback(()=>{t(l=>(l+1)%Co.length)},[]);Be.useEffect(()=>(i.current=setInterval(()=>{t(l=>(l+1)%Co.length)},5e3),()=>clearInterval(i.current)),[]);const a=l=>{clearInterval(i.current),l(),i.current=setInterval(()=>{t(c=>(c+1)%Co.length)},5e3)};return Be.useEffect(()=>{_t.fromTo(".testimonial-slide.active .testimonial-text",{y:20,opacity:0},{y:0,opacity:1,duration:.55,ease:"power3.out"}),_t.fromTo(".testimonial-slide.active .testimonial-author",{y:16,opacity:0},{y:0,opacity:1,duration:.5,ease:"power3.out",delay:.12})},[e]),Be.useEffect(()=>{const l=_t.context(()=>{_t.fromTo(".testimonials-header",{y:50,opacity:0},{y:0,opacity:1,duration:.85,ease:"power3.out",scrollTrigger:{trigger:".testimonials-header",start:"top 85%",once:!0}}),_t.fromTo(".testimonial-carousel",{y:40,opacity:0},{y:0,opacity:1,duration:.85,ease:"power3.out",scrollTrigger:{trigger:".testimonial-carousel",start:"top 88%",once:!0}})},n);return()=>l.revert()},[]),x.jsx("section",{id:"testimonials",ref:n,className:"testimonials section",children:x.jsxs("div",{className:"container",children:[x.jsxs("div",{className:"section-header testimonials-header",children:[x.jsxs("div",{className:"section-tag",children:[x.jsx("span",{className:"section-tag-dot"}),"Testimonios"]}),x.jsxs("h2",{className:"section-title",children:["Lo que dicen"," ",x.jsx("span",{className:"gradient-text",children:"nuestros clientes"})]}),x.jsx("p",{className:"section-subtitle",children:"Más de 50 empresas han confiado en nosotros para transformar su presencia digital. Aquí está su experiencia."})]}),x.jsxs("div",{className:"testimonial-carousel",children:[x.jsx("div",{className:"testimonial-track",children:Co.map((l,c)=>x.jsxs("div",{className:`testimonial-slide ${c===e?"active":""}`,children:[x.jsx("div",{className:"testimonial-quote-mark","aria-hidden":"true",children:'"'}),x.jsx("div",{className:"testimonial-stars","aria-label":`${l.stars} estrellas`,children:Array.from({length:l.stars}).map((u,h)=>x.jsx("span",{className:"star",children:"★"},h))}),x.jsxs("p",{className:"testimonial-text",children:['"',l.text,'"']}),x.jsxs("div",{className:"testimonial-author",children:[x.jsx("div",{className:"author-avatar",style:{background:l.avatarGradient},children:l.initials}),x.jsxs("div",{className:"author-info",children:[x.jsx("span",{className:"author-name",children:l.name}),x.jsx("span",{className:"author-role",children:l.role})]})]})]},c))}),x.jsxs("div",{className:"testimonial-controls",children:[x.jsx("button",{className:"testimonial-nav-btn",onClick:()=>a(s),"aria-label":"Anterior",children:x.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:x.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),x.jsx("div",{className:"testimonial-dots",children:Co.map((l,c)=>x.jsx("button",{className:`testimonial-dot ${c===e?"active":""}`,onClick:()=>a(()=>r(c)),"aria-label":`Testimonio ${c+1}`},c))}),x.jsx("button",{className:"testimonial-nav-btn",onClick:()=>a(o),"aria-label":"Siguiente",children:x.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:x.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})})]})]})]})})}_t.registerPlugin(Qe);const nL=["Diseño Web","Tienda Online / E-commerce","Gestión de Redes Sociales","SEO & Posicionamiento","Branding & Identidad Visual","Otro / No sé aún"],iL=["Menos de 1.000 €","1.000 € – 3.000 €","3.000 € – 8.000 €","Más de 8.000 €"];function rL(){const{data:n}=wr(),{email:e,phone:t,address:i}=n.contact,r=Be.useRef(null),[s,o]=Be.useState({name:"",email:"",service:"",budget:"",message:""}),[a,l]=Be.useState(!1),[c,u]=Be.useState(!1),h=m=>o(v=>({...v,[m.target.name]:m.target.value})),f=m=>{m.preventDefault(),u(!0),setTimeout(()=>{u(!1),l(!0)},1800)};Be.useEffect(()=>{const m=_t.context(()=>{_t.fromTo(".contact-header-left",{x:-50,opacity:0},{x:0,opacity:1,duration:.9,ease:"power3.out",scrollTrigger:{trigger:".contact-header-left",start:"top 85%",once:!0}}),_t.fromTo(".contact-form-section",{x:50,opacity:0},{x:0,opacity:1,duration:.9,ease:"power3.out",scrollTrigger:{trigger:".contact-form-section",start:"top 85%",once:!0}}),_t.fromTo(".contact-item",{y:28,opacity:0},{y:0,opacity:1,duration:.6,stagger:.12,ease:"power3.out",scrollTrigger:{trigger:".contact-items",start:"top 87%",once:!0}})},r);return()=>m.revert()},[]);const d=[{label:"Email",value:e,icon:x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:[x.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),x.jsx("path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"})]})},{label:"Teléfono",value:t,icon:x.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:x.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.77-.77a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17.2z"})})},{label:"Ubicación",value:i,icon:x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:[x.jsx("path",{d:"M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"}),x.jsx("circle",{cx:"12",cy:"10",r:"3"})]})},{label:"Respuesta",value:"En menos de 24 horas",icon:x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:[x.jsx("circle",{cx:"12",cy:"12",r:"10"}),x.jsx("polyline",{points:"12 6 12 12 16 14"})]})}];return x.jsx("section",{id:"contact",ref:r,className:"contact section",children:x.jsx("div",{className:"container",children:x.jsxs("div",{className:"contact-grid",children:[x.jsxs("div",{className:"contact-info-section contact-header-left",children:[x.jsxs("div",{className:"section-tag",children:[x.jsx("span",{className:"section-tag-dot"}),"Contacto"]}),x.jsxs("h2",{className:"section-title",children:["Hablemos de tu ",x.jsx("span",{className:"gradient-text",children:"próximo proyecto"})]}),x.jsx("p",{className:"section-subtitle",children:"Cuéntanos qué necesitas y te responderemos en menos de 24 horas con una propuesta sin compromiso."}),x.jsx("div",{className:"contact-items",children:d.map(m=>x.jsxs("div",{className:"contact-item",children:[x.jsx("div",{className:"contact-item-icon",children:m.icon}),x.jsxs("div",{children:[x.jsx("div",{className:"contact-item-label",children:m.label}),x.jsx("div",{className:"contact-item-value",children:m.value})]})]},m.label))})]}),x.jsx("div",{className:"contact-form-section",children:a?x.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:20,padding:"48px 24px",textAlign:"center",minHeight:400},children:[x.jsx("div",{style:{width:72,height:72,borderRadius:"50%",background:"var(--gradient-main)",display:"flex",alignItems:"center",justifyContent:"center"},children:x.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2.5",children:x.jsx("polyline",{points:"20 6 9 17 4 12"})})}),x.jsx("h3",{style:{fontFamily:"var(--font-display)",fontSize:"1.5rem",fontWeight:700},children:"¡Mensaje enviado!"}),x.jsx("p",{style:{color:"var(--text-secondary)",maxWidth:300,lineHeight:1.6},children:"Gracias por contactarnos. Te respondemos en menos de 24 horas con una propuesta personalizada."}),x.jsx("button",{className:"btn-ghost",onClick:()=>{l(!1),o({name:"",email:"",service:"",budget:"",message:""})},children:"Enviar otro mensaje"})]}):x.jsxs("form",{className:"contact-form",onSubmit:f,noValidate:!0,children:[x.jsxs("div",{className:"form-row",children:[x.jsxs("div",{className:"form-group",children:[x.jsxs("label",{className:"form-label",htmlFor:"cn",children:["Nombre",x.jsx("span",{className:"required",children:"*"})]}),x.jsx("input",{id:"cn",name:"name",type:"text",className:"form-input",placeholder:"Tu nombre",value:s.name,onChange:h,required:!0})]}),x.jsxs("div",{className:"form-group",children:[x.jsxs("label",{className:"form-label",htmlFor:"ce",children:["Email",x.jsx("span",{className:"required",children:"*"})]}),x.jsx("input",{id:"ce",name:"email",type:"email",className:"form-input",placeholder:"tu@email.com",value:s.email,onChange:h,required:!0})]})]}),x.jsxs("div",{className:"form-group",children:[x.jsxs("label",{className:"form-label",htmlFor:"cs",children:["¿Qué necesitas?",x.jsx("span",{className:"required",children:"*"})]}),x.jsxs("select",{id:"cs",name:"service",className:"form-select",value:s.service,onChange:h,required:!0,children:[x.jsx("option",{value:"",disabled:!0,children:"Selecciona un servicio"}),nL.map(m=>x.jsx("option",{value:m,children:m},m))]})]}),x.jsxs("div",{className:"form-group",children:[x.jsx("label",{className:"form-label",htmlFor:"cb",children:"Presupuesto aproximado"}),x.jsxs("select",{id:"cb",name:"budget",className:"form-select",value:s.budget,onChange:h,children:[x.jsx("option",{value:"",children:"Selecciona tu rango"}),iL.map(m=>x.jsx("option",{value:m,children:m},m))]})]}),x.jsxs("div",{className:"form-group",children:[x.jsxs("label",{className:"form-label",htmlFor:"cm",children:["Cuéntanos tu proyecto",x.jsx("span",{className:"required",children:"*"})]}),x.jsx("textarea",{id:"cm",name:"message",className:"form-textarea",placeholder:"Describe tu proyecto, objetivos y cualquier detalle relevante...",value:s.message,onChange:h,rows:5,required:!0})]}),x.jsx("button",{type:"submit",className:"form-submit",disabled:c,children:c?x.jsxs(x.Fragment,{children:[x.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",style:{animation:"spin 0.8s linear infinite"},children:x.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),x.jsx("span",{children:"Enviando..."})]}):x.jsxs(x.Fragment,{children:[x.jsx("span",{children:"Enviar mensaje"}),x.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:x.jsx("path",{d:"M22 2 11 13M22 2 15 22l-4-9-9-4 20-7z"})})]})}),x.jsx("p",{className:"form-note",children:"Sin compromiso · Respuesta en < 24h · 100% confidencial"})]})})]})})})}_t.registerPlugin(Qe);function sL(){const{data:n}=wr(),{instagram:e,linkedin:t,tiktok:i,facebook:r}=n.socials,s=Be.useRef(null);Be.useEffect(()=>{const c=_t.context(()=>{_t.fromTo(".footer-grid > *",{y:30,opacity:0},{y:0,opacity:1,duration:.7,stagger:.1,ease:"power3.out",scrollTrigger:{trigger:s.current,start:"top 90%",once:!0}})},s);return()=>c.revert()},[]);const o=c=>{if(c.startsWith("#")&&!c.includes("/")){const u=document.querySelector(c);u&&u.scrollIntoView({behavior:"smooth"})}},a=[{title:"Servicios",links:[{label:"Diseño Web",href:"#services"},{label:"E-commerce",href:"#services"},{label:"Redes Sociales",href:"#services"},{label:"SEO & Posicionamiento",href:"#services"}]},{title:"Empresa",links:[{label:"Portfolio",href:"#portfolio"},{label:"Testimonios",href:"#testimonials"},{label:"Proceso de trabajo",href:"#services"},{label:"Admin",href:"/admin",isHash:!0}]},{title:"Contacto",links:[{label:n.contact.email,href:`mailto:${n.contact.email}`,external:!0},{label:n.contact.phone,href:`tel:${n.contact.phone.replace(/\s/g,"")}`,external:!0},{label:n.contact.address,href:"#",noNav:!0},{label:"Empezar proyecto →",href:"#contact"}]}],l=[{href:e,title:"Instagram",icon:x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:[x.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5"}),x.jsx("circle",{cx:"12",cy:"12",r:"5"}),x.jsx("circle",{cx:"17.5",cy:"6.5",r:"1",fill:"currentColor",stroke:"none"})]})},{href:t,title:"LinkedIn",icon:x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:[x.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"}),x.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),x.jsx("circle",{cx:"4",cy:"4",r:"2"})]})},{href:i,title:"TikTok",icon:x.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:x.jsx("path",{d:"M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"})})},{href:r,title:"Facebook",icon:x.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:x.jsx("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})})}];return x.jsx("footer",{ref:s,className:"footer",children:x.jsxs("div",{className:"container",children:[x.jsxs("div",{className:"footer-grid",children:[x.jsxs("div",{className:"footer-brand",children:[x.jsxs("div",{className:"footer-logo",children:["creaar",x.jsx("span",{className:"footer-logo-accent",children:"."}),"es"]}),x.jsx("p",{className:"footer-tagline",children:"Agencia digital premium. Transformamos marcas con diseño web, redes sociales y SEO que generan resultados reales."}),x.jsx("div",{className:"footer-socials",children:l.map(c=>x.jsx("a",{href:c.href,title:c.title,target:"_blank",rel:"noopener noreferrer",className:"social-link",children:c.icon},c.title))})]}),a.map(c=>x.jsxs("div",{children:[x.jsx("h4",{className:"footer-col-title",children:c.title}),x.jsx("ul",{className:"footer-links",children:c.links.map(u=>x.jsx("li",{children:u.external?x.jsx("a",{href:u.href,className:"footer-link",children:u.label}):u.isHash?x.jsx("a",{href:`#${u.href}`,className:"footer-link",onClick:h=>{h.preventDefault(),window.location.hash=u.href,window.dispatchEvent(new HashChangeEvent("hashchange"))},children:u.label}):x.jsx("a",{href:u.noNav?void 0:u.href,className:"footer-link",onClick:h=>{!u.noNav&&u.href.startsWith("#")&&(h.preventDefault(),o(u.href))},children:u.label})},u.label))})]},c.title))]}),x.jsxs("div",{className:"footer-bottom",children:[x.jsxs("p",{className:"footer-copy",children:["© ",new Date().getFullYear()," ",x.jsx("a",{href:"https://creaar.es",children:"creaar.es"})," — Todos los derechos reservados."]}),x.jsxs("div",{className:"footer-legal",children:[x.jsx("a",{href:"#",children:"Aviso legal"}),x.jsx("a",{href:"#",children:"Privacidad"}),x.jsx("a",{href:"#",children:"Cookies"})]})]})]})})}const oL="creaar2024";function aL(){const[n,e]=Be.useState(""),[t,i]=Be.useState(""),[r,s]=Be.useState(!1),o=Be.useRef(null);Be.useEffect(()=>{_t.fromTo(o.current,{y:32,opacity:0},{y:0,opacity:1,duration:.7,ease:"power3.out",delay:.15})},[]);const a=l=>{l.preventDefault(),i(""),s(!0),setTimeout(()=>{n===oL?(sessionStorage.setItem("creaar_admin","true"),window.location.hash="/admin",window.dispatchEvent(new HashChangeEvent("hashchange"))):(i("Contraseña incorrecta. Inténtalo de nuevo."),s(!1),_t.fromTo(o.current,{x:-8},{x:0,duration:.5,ease:"elastic.out(1, 0.3)"}))},600)};return x.jsxs("div",{className:"admin-login-page",children:[x.jsx("div",{className:"admin-login-bg"}),x.jsxs("div",{ref:o,className:"admin-login-card",children:[x.jsxs("div",{className:"admin-login-logo",children:["creaar",x.jsx("span",{className:"nav-logo-accent",children:"."}),"es"]}),x.jsx("p",{className:"admin-login-subtitle",children:"Panel de administración"}),x.jsxs("form",{className:"admin-login-form",onSubmit:a,noValidate:!0,children:[t&&x.jsx("div",{className:"admin-login-error",children:t}),x.jsxs("div",{className:"admin-field",children:[x.jsx("label",{className:"admin-label",htmlFor:"admin-pass",children:"Contraseña"}),x.jsx("input",{id:"admin-pass",type:"password",className:"admin-input",placeholder:"••••••••••",value:n,onChange:l=>e(l.target.value),autoFocus:!0,required:!0})]}),x.jsx("button",{type:"submit",className:"admin-save-btn",style:{marginTop:"4px",justifyContent:"center"},disabled:r,children:r?x.jsxs(x.Fragment,{children:[x.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",style:{animation:"spin 0.8s linear infinite"},children:x.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),"Verificando..."]}):x.jsxs(x.Fragment,{children:[x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[x.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),x.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),"Entrar al panel"]})})]}),x.jsx("div",{className:"admin-login-back",children:x.jsx("a",{href:"#/",onClick:()=>{window.location.hash="/"},children:"← Volver a la web"})})]})]})}const lL=[{id:"hero",label:"Hero",icon:x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:[x.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),x.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]})},{id:"services",label:"Servicios",icon:x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:[x.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}),x.jsx("path",{d:"M8 21h8M12 17v4"})]})},{id:"portfolio",label:"Portfolio",icon:x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:[x.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),x.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),x.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}),x.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"})]})},{id:"contact",label:"Contacto",icon:x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:[x.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),x.jsx("path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"})]})},{id:"socials",label:"Redes Sociales",icon:x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:[x.jsx("circle",{cx:"18",cy:"5",r:"3"}),x.jsx("circle",{cx:"6",cy:"12",r:"3"}),x.jsx("circle",{cx:"18",cy:"19",r:"3"}),x.jsx("path",{d:"M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"})]})}];function Su(){return x.jsxs("span",{className:"admin-saved-badge",children:[x.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:x.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Guardado"]})}function cL(){const{data:n,updateSection:e}=wr(),[t,i]=Be.useState({...n.hero}),[r,s]=Be.useState(!1),o=()=>{e("hero",t),s(!0),setTimeout(()=>s(!1),2500)};return x.jsxs("div",{children:[x.jsx("h2",{className:"admin-section-title",children:"Hero"}),x.jsx("p",{className:"admin-section-desc",children:"Texto principal que ve el visitante al entrar a la web."}),x.jsxs("div",{className:"admin-card",children:[x.jsxs("div",{className:"admin-card-title",children:[x.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:x.jsx("path",{d:"M4 6h16M4 12h16M4 18h7"})}),"Contenido"]}),x.jsxs("div",{className:"admin-form",children:[x.jsxs("div",{className:"admin-field",children:[x.jsx("label",{className:"admin-label",children:"Título principal"}),x.jsx("input",{className:"admin-input",value:t.title,onChange:a=>i(l=>({...l,title:a.target.value}))})]}),x.jsxs("div",{className:"admin-field",children:[x.jsx("label",{className:"admin-label",children:"Subtítulo / descripción"}),x.jsx("textarea",{className:"admin-textarea",rows:3,value:t.subtitle,onChange:a=>i(l=>({...l,subtitle:a.target.value}))})]}),x.jsxs("div",{className:"admin-form-row",children:[x.jsxs("div",{className:"admin-field",children:[x.jsx("label",{className:"admin-label",children:"Texto CTA principal"}),x.jsx("input",{className:"admin-input",value:t.cta1,onChange:a=>i(l=>({...l,cta1:a.target.value}))})]}),x.jsxs("div",{className:"admin-field",children:[x.jsx("label",{className:"admin-label",children:"Texto CTA secundario"}),x.jsx("input",{className:"admin-input",value:t.cta2,onChange:a=>i(l=>({...l,cta2:a.target.value}))})]})]}),x.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[x.jsxs("button",{className:"admin-save-btn",onClick:o,children:[x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[x.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),x.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),x.jsx("polyline",{points:"7 3 7 8 15 8"})]}),"Guardar cambios"]}),r&&x.jsx(Su,{})]})]})]})]})}function uL(){const{data:n,updateSection:e}=wr(),[t,i]=Be.useState(n.services.map(h=>({...h,features:[...h.features]}))),[r,s]=Be.useState(!1),o=(h,f,d)=>i(m=>m.map((v,_)=>_===h?{...v,[f]:d}:v)),a=(h,f,d)=>i(m=>m.map((v,_)=>_===h?{...v,features:v.features.map((p,g)=>g===f?d:p)}:v)),l=h=>i(f=>f.map((d,m)=>m===h?{...d,features:[...d.features,""]}:d)),c=(h,f)=>i(d=>d.map((m,v)=>v===h?{...m,features:m.features.filter((_,p)=>p!==f)}:m)),u=()=>{e("services",t),s(!0),setTimeout(()=>s(!1),2500)};return x.jsxs("div",{children:[x.jsx("h2",{className:"admin-section-title",children:"Servicios"}),x.jsx("p",{className:"admin-section-desc",children:"Edita el título, descripción y características de cada servicio."}),t.map((h,f)=>x.jsxs("div",{className:"admin-card",children:[x.jsxs("div",{className:"admin-card-title",children:[x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:[x.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}),x.jsx("path",{d:"M8 21h8M12 17v4"})]}),"Servicio ",f+1]}),x.jsxs("div",{className:"admin-form",children:[x.jsxs("div",{className:"admin-field",children:[x.jsx("label",{className:"admin-label",children:"Título"}),x.jsx("input",{className:"admin-input",value:h.title,onChange:d=>o(f,"title",d.target.value)})]}),x.jsxs("div",{className:"admin-field",children:[x.jsx("label",{className:"admin-label",children:"Descripción"}),x.jsx("textarea",{className:"admin-textarea",rows:3,value:h.description,onChange:d=>o(f,"description",d.target.value)})]}),x.jsxs("div",{className:"admin-field",children:[x.jsx("label",{className:"admin-label",children:"Características (una por línea)"}),x.jsx("div",{className:"admin-features-list",children:h.features.map((d,m)=>x.jsxs("div",{className:"admin-feature-row",children:[x.jsx("input",{className:"admin-input",value:d,onChange:v=>a(f,m,v.target.value),placeholder:`Característica ${m+1}`}),x.jsx("button",{className:"admin-remove-btn",onClick:()=>c(f,m),title:"Eliminar",children:x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[x.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),x.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]},m))}),x.jsxs("button",{className:"admin-add-btn",onClick:()=>l(f),children:[x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[x.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),x.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"Añadir característica"]})]})]})]},h.id)),x.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[x.jsxs("button",{className:"admin-save-btn",onClick:u,children:[x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[x.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),x.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),x.jsx("polyline",{points:"7 3 7 8 15 8"})]}),"Guardar cambios"]}),r&&x.jsx(Su,{})]})]})}function fL(){const{data:n,updateSection:e}=wr(),[t,i]=Be.useState(n.portfolio.map(l=>({...l}))),[r,s]=Be.useState(!1),o=(l,c,u)=>i(h=>h.map((f,d)=>d===l?{...f,[c]:u}:f)),a=()=>{e("portfolio",t),s(!0),setTimeout(()=>s(!1),2500)};return x.jsxs("div",{children:[x.jsx("h2",{className:"admin-section-title",children:"Portfolio"}),x.jsx("p",{className:"admin-section-desc",children:"Edita los proyectos mostrados en la sección de portfolio."}),x.jsxs("div",{className:"admin-card",children:[x.jsxs("div",{className:"admin-card-title",children:[x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:[x.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),x.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"})]}),"Proyectos"]}),x.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:0},children:[x.jsxs("div",{className:"admin-portfolio-row",style:{paddingBottom:10,marginBottom:4},children:[x.jsx("span",{className:"admin-label",style:{marginBottom:0},children:"Nombre"}),x.jsx("span",{className:"admin-label",style:{marginBottom:0},children:"Categoría"}),x.jsx("span",{className:"admin-label",style:{marginBottom:0},children:"Año"}),x.jsx("span",{className:"admin-label",style:{marginBottom:0},children:"Tag"})]}),t.map((l,c)=>x.jsxs("div",{className:"admin-portfolio-row",children:[x.jsx("input",{className:"admin-input",value:l.name,onChange:u=>o(c,"name",u.target.value),placeholder:"Nombre proyecto"}),x.jsx("input",{className:"admin-input",value:l.category,onChange:u=>o(c,"category",u.target.value),placeholder:"Categoría"}),x.jsx("input",{className:"admin-input",value:l.year,onChange:u=>o(c,"year",u.target.value),placeholder:"2024",maxLength:4}),x.jsxs("select",{className:"admin-select",value:l.tag,onChange:u=>o(c,"tag",u.target.value),children:[x.jsx("option",{value:"Web",children:"Web"}),x.jsx("option",{value:"Branding",children:"Branding"}),x.jsx("option",{value:"Social",children:"Social"}),x.jsx("option",{value:"App",children:"App"})]})]},l.id))]})]}),x.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[x.jsxs("button",{className:"admin-save-btn",onClick:a,children:[x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[x.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),x.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),x.jsx("polyline",{points:"7 3 7 8 15 8"})]}),"Guardar cambios"]}),r&&x.jsx(Su,{})]})]})}function dL(){const{data:n,updateSection:e}=wr(),[t,i]=Be.useState({...n.contact}),[r,s]=Be.useState(!1),o=()=>{e("contact",t),s(!0),setTimeout(()=>s(!1),2500)};return x.jsxs("div",{children:[x.jsx("h2",{className:"admin-section-title",children:"Contacto"}),x.jsx("p",{className:"admin-section-desc",children:"Información de contacto que aparece en la sección de la web."}),x.jsxs("div",{className:"admin-card",children:[x.jsxs("div",{className:"admin-card-title",children:[x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:[x.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),x.jsx("path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"})]}),"Datos de contacto"]}),x.jsxs("div",{className:"admin-form",children:[x.jsxs("div",{className:"admin-field",children:[x.jsx("label",{className:"admin-label",children:"Email"}),x.jsx("input",{className:"admin-input",type:"email",value:t.email,onChange:a=>i(l=>({...l,email:a.target.value})),placeholder:"hola@creaar.es"})]}),x.jsxs("div",{className:"admin-field",children:[x.jsx("label",{className:"admin-label",children:"Teléfono"}),x.jsx("input",{className:"admin-input",type:"tel",value:t.phone,onChange:a=>i(l=>({...l,phone:a.target.value})),placeholder:"+34 654 321 000"})]}),x.jsxs("div",{className:"admin-field",children:[x.jsx("label",{className:"admin-label",children:"Dirección / Ubicación"}),x.jsx("input",{className:"admin-input",value:t.address,onChange:a=>i(l=>({...l,address:a.target.value})),placeholder:"Barcelona, España · 100% Remote"})]}),x.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[x.jsxs("button",{className:"admin-save-btn",onClick:o,children:[x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[x.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),x.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),x.jsx("polyline",{points:"7 3 7 8 15 8"})]}),"Guardar cambios"]}),r&&x.jsx(Su,{})]})]})]})]})}const hL=[{key:"instagram",label:"Instagram",handle:"@creaar.es",icon:x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:[x.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5"}),x.jsx("circle",{cx:"12",cy:"12",r:"5"}),x.jsx("circle",{cx:"17.5",cy:"6.5",r:"1",fill:"currentColor",stroke:"none"})]})},{key:"linkedin",label:"LinkedIn",handle:"@creaar.es",icon:x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:[x.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),x.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),x.jsx("circle",{cx:"4",cy:"4",r:"2"})]})},{key:"tiktok",label:"TikTok",handle:"@creaar.es",icon:x.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:x.jsx("path",{d:"M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"})})},{key:"facebook",label:"Facebook",handle:"@creaar.es",icon:x.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:x.jsx("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})})}];function pL(){const{data:n,updateSection:e}=wr(),[t,i]=Be.useState({...n.socials}),[r,s]=Be.useState(!1),o=()=>{e("socials",t),s(!0),setTimeout(()=>s(!1),2500)};return x.jsxs("div",{children:[x.jsx("h2",{className:"admin-section-title",children:"Redes Sociales"}),x.jsx("p",{className:"admin-section-desc",children:"URLs de los perfiles sociales de creaar.es."}),x.jsxs("div",{className:"admin-card",children:[x.jsxs("div",{className:"admin-card-title",children:[x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",children:[x.jsx("circle",{cx:"18",cy:"5",r:"3"}),x.jsx("circle",{cx:"6",cy:"12",r:"3"}),x.jsx("circle",{cx:"18",cy:"19",r:"3"}),x.jsx("path",{d:"M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"})]}),"Perfiles sociales"]}),hL.map(a=>x.jsxs("div",{className:"admin-social-row",children:[x.jsx("div",{className:"admin-social-icon",children:a.icon}),x.jsxs("div",{style:{minWidth:100},children:[x.jsx("div",{className:"admin-social-label",children:a.label}),x.jsx("div",{className:"admin-social-handle",children:a.handle})]}),x.jsx("input",{className:"admin-input",style:{flex:1},value:t[a.key]||"",onChange:l=>i(c=>({...c,[a.key]:l.target.value})),placeholder:`https://www.${a.key==="tiktok"?"tiktok":a.key==="instagram"?"instagram":a.key==="linkedin"?"linkedin":"facebook"}.com/creaar.es`})]},a.key)),x.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,marginTop:16},children:[x.jsxs("button",{className:"admin-save-btn",onClick:o,children:[x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[x.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),x.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),x.jsx("polyline",{points:"7 3 7 8 15 8"})]}),"Guardar cambios"]}),r&&x.jsx(Su,{})]})]})]})}const mL={hero:cL,services:uL,portfolio:fL,contact:dL,socials:pL};function gL(){const[n,e]=Be.useState("hero"),t=mL[n],i=()=>{sessionStorage.removeItem("creaar_admin"),window.location.hash="/",window.dispatchEvent(new HashChangeEvent("hashchange"))},r=()=>{window.location.hash="/",window.dispatchEvent(new HashChangeEvent("hashchange"))};return x.jsxs("div",{className:"admin-layout",children:[x.jsxs("header",{className:"admin-topbar",children:[x.jsxs("div",{className:"admin-topbar-logo",children:["creaar",x.jsx("span",{className:"nav-logo-accent",children:"."}),"es",x.jsx("span",{style:{color:"var(--text-muted)",fontWeight:400,fontSize:"0.8rem",marginLeft:10},children:"Admin"})]}),x.jsxs("div",{className:"admin-topbar-actions",children:[x.jsxs("button",{className:"admin-preview-btn",onClick:r,children:[x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[x.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),x.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),"Vista previa"]}),x.jsxs("button",{className:"admin-logout-btn",onClick:i,children:[x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[x.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),x.jsx("polyline",{points:"16 17 21 12 16 7"}),x.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),"Cerrar sesión"]})]})]}),x.jsxs("div",{className:"admin-body",children:[x.jsxs("aside",{className:"admin-sidebar",children:[x.jsx("div",{className:"admin-nav-label",children:"Secciones"}),lL.map(s=>x.jsxs("button",{className:`admin-nav-item ${n===s.id?"active":""}`,onClick:()=>e(s.id),children:[s.icon,s.label]},s.id))]}),x.jsx("main",{className:"admin-main",children:x.jsx(t,{})})]})]})}_t.registerPlugin(Qe);function _L(){const[n,e]=Be.useState(()=>window.location.hash.slice(1)||"/");return Be.useEffect(()=>{const t=()=>e(window.location.hash.slice(1)||"/");return window.addEventListener("hashchange",t),()=>window.removeEventListener("hashchange",t)},[]),n}function vL(){return Be.useEffect(()=>()=>Qe.getAll().forEach(n=>n.kill()),[]),x.jsxs("div",{className:"app",children:[x.jsx(Ab,{}),x.jsxs("main",{children:[x.jsx(KD,{}),x.jsx(ZD,{}),x.jsx(eL,{}),x.jsx(tL,{}),x.jsx(rL,{})]}),x.jsx(sL,{})]})}function xL(){const n=_L(),e=n.startsWith("/admin"),t=sessionStorage.getItem("creaar_admin")==="true";return x.jsx(wb,{children:e?t&&n!=="/admin/login"?x.jsx(gL,{}):x.jsx(aL,{}):x.jsx(vL,{})})}Up.createRoot(document.getElementById("root")).render(x.jsx(qs.StrictMode,{children:x.jsx(zA,{children:x.jsx(xL,{})})}));
