(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function sc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qa={exports:{}},ei={},_a={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _r=Symbol.for("react.element"),ac=Symbol.for("react.portal"),lc=Symbol.for("react.fragment"),dc=Symbol.for("react.strict_mode"),cc=Symbol.for("react.profiler"),uc=Symbol.for("react.provider"),gc=Symbol.for("react.context"),pc=Symbol.for("react.forward_ref"),hc=Symbol.for("react.suspense"),mc=Symbol.for("react.memo"),fc=Symbol.for("react.lazy"),Ls=Symbol.iterator;function yc(t){return t===null||typeof t!="object"?null:(t=Ls&&t[Ls]||t["@@iterator"],typeof t=="function"?t:null)}var $a={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qa=Object.assign,Ya={};function ir(t,e,r){this.props=t,this.context=e,this.refs=Ya,this.updater=r||$a}ir.prototype.isReactComponent={};ir.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ir.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ja(){}Ja.prototype=ir.prototype;function jo(t,e,r){this.props=t,this.context=e,this.refs=Ya,this.updater=r||$a}var Uo=jo.prototype=new Ja;Uo.constructor=jo;Qa(Uo,ir.prototype);Uo.isPureReactComponent=!0;var Fs=Array.isArray,Za=Object.prototype.hasOwnProperty,Vo={current:null},Xa={key:!0,ref:!0,__self:!0,__source:!0};function tl(t,e,r){var n,i={},o=null,s=null;if(e!=null)for(n in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Za.call(e,n)&&!Xa.hasOwnProperty(n)&&(i[n]=e[n]);var a=arguments.length-2;if(a===1)i.children=r;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(n in a=t.defaultProps,a)i[n]===void 0&&(i[n]=a[n]);return{$$typeof:_r,type:t,key:o,ref:s,props:i,_owner:Vo.current}}function vc(t,e){return{$$typeof:_r,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ho(t){return typeof t=="object"&&t!==null&&t.$$typeof===_r}function Sc(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Bs=/\/+/g;function Ci(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Sc(""+t.key):e.toString(36)}function Sn(t,e,r,n,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case _r:case ac:s=!0}}if(s)return s=t,i=i(s),t=n===""?"."+Ci(s,0):n,Fs(i)?(r="",t!=null&&(r=t.replace(Bs,"$&/")+"/"),Sn(i,e,r,"",function(u){return u})):i!=null&&(Ho(i)&&(i=vc(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Bs,"$&/")+"/")+t)),e.push(i)),1;if(s=0,n=n===""?".":n+":",Fs(t))for(var a=0;a<t.length;a++){o=t[a];var l=n+Ci(o,a);s+=Sn(o,e,r,l,i)}else if(l=yc(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=n+Ci(o,a++),s+=Sn(o,e,r,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function en(t,e,r){if(t==null)return t;var n=[],i=0;return Sn(t,n,"","",function(o){return e.call(r,o,i++)}),n}function Cc(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var lt={current:null},Cn={transition:null},Ac={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:Cn,ReactCurrentOwner:Vo};function el(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:en,forEach:function(t,e,r){en(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return en(t,function(){e++}),e},toArray:function(t){return en(t,function(e){return e})||[]},only:function(t){if(!Ho(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};R.Component=ir;R.Fragment=lc;R.Profiler=cc;R.PureComponent=jo;R.StrictMode=dc;R.Suspense=hc;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ac;R.act=el;R.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=Qa({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Vo.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Za.call(e,l)&&!Xa.hasOwnProperty(l)&&(n[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];n.children=a}return{$$typeof:_r,type:t.type,key:i,ref:o,props:n,_owner:s}};R.createContext=function(t){return t={$$typeof:gc,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:uc,_context:t},t.Consumer=t};R.createElement=tl;R.createFactory=function(t){var e=tl.bind(null,t);return e.type=t,e};R.createRef=function(){return{current:null}};R.forwardRef=function(t){return{$$typeof:pc,render:t}};R.isValidElement=Ho;R.lazy=function(t){return{$$typeof:fc,_payload:{_status:-1,_result:t},_init:Cc}};R.memo=function(t,e){return{$$typeof:mc,type:t,compare:e===void 0?null:e}};R.startTransition=function(t){var e=Cn.transition;Cn.transition={};try{t()}finally{Cn.transition=e}};R.unstable_act=el;R.useCallback=function(t,e){return lt.current.useCallback(t,e)};R.useContext=function(t){return lt.current.useContext(t)};R.useDebugValue=function(){};R.useDeferredValue=function(t){return lt.current.useDeferredValue(t)};R.useEffect=function(t,e){return lt.current.useEffect(t,e)};R.useId=function(){return lt.current.useId()};R.useImperativeHandle=function(t,e,r){return lt.current.useImperativeHandle(t,e,r)};R.useInsertionEffect=function(t,e){return lt.current.useInsertionEffect(t,e)};R.useLayoutEffect=function(t,e){return lt.current.useLayoutEffect(t,e)};R.useMemo=function(t,e){return lt.current.useMemo(t,e)};R.useReducer=function(t,e,r){return lt.current.useReducer(t,e,r)};R.useRef=function(t){return lt.current.useRef(t)};R.useState=function(t){return lt.current.useState(t)};R.useSyncExternalStore=function(t,e,r){return lt.current.useSyncExternalStore(t,e,r)};R.useTransition=function(){return lt.current.useTransition()};R.version="18.3.1";_a.exports=R;var X=_a.exports;const wc=sc(X);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bc=X,Pc=Symbol.for("react.element"),kc=Symbol.for("react.fragment"),Ic=Object.prototype.hasOwnProperty,Mc=bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dc={key:!0,ref:!0,__self:!0,__source:!0};function rl(t,e,r){var n,i={},o=null,s=null;r!==void 0&&(o=""+r),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(n in e)Ic.call(e,n)&&!Dc.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:Pc,type:t,key:o,ref:s,props:i,_owner:Mc.current}}ei.Fragment=kc;ei.jsx=rl;ei.jsxs=rl;qa.exports=ei;var c=qa.exports,qi={},nl={exports:{}},St={},il={exports:{}},ol={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,D){var E=I.length;I.push(D);t:for(;0<E;){var H=E-1>>>1,Q=I[H];if(0<i(Q,D))I[H]=D,I[E]=Q,E=H;else break t}}function r(I){return I.length===0?null:I[0]}function n(I){if(I.length===0)return null;var D=I[0],E=I.pop();if(E!==D){I[0]=E;t:for(var H=0,Q=I.length,Xr=Q>>>1;H<Xr;){var fe=2*(H+1)-1,Si=I[fe],ye=fe+1,tn=I[ye];if(0>i(Si,E))ye<Q&&0>i(tn,Si)?(I[H]=tn,I[ye]=E,H=ye):(I[H]=Si,I[fe]=E,H=fe);else if(ye<Q&&0>i(tn,E))I[H]=tn,I[ye]=E,H=ye;else break t}}return D}function i(I,D){var E=I.sortIndex-D.sortIndex;return E!==0?E:I.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],h=1,f=null,m=3,S=!1,C=!1,w=!1,z=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(I){for(var D=r(u);D!==null;){if(D.callback===null)n(u);else if(D.startTime<=I)n(u),D.sortIndex=D.expirationTime,e(l,D);else break;D=r(u)}}function y(I){if(w=!1,p(I),!C)if(r(l)!==null)C=!0,yi(P);else{var D=r(u);D!==null&&vi(y,D.startTime-I)}}function P(I,D){C=!1,w&&(w=!1,g(M),M=-1),S=!0;var E=m;try{for(p(D),f=r(l);f!==null&&(!(f.expirationTime>D)||I&&!Mt());){var H=f.callback;if(typeof H=="function"){f.callback=null,m=f.priorityLevel;var Q=H(f.expirationTime<=D);D=t.unstable_now(),typeof Q=="function"?f.callback=Q:f===r(l)&&n(l),p(D)}else n(l);f=r(l)}if(f!==null)var Xr=!0;else{var fe=r(u);fe!==null&&vi(y,fe.startTime-D),Xr=!1}return Xr}finally{f=null,m=E,S=!1}}var A=!1,b=null,M=-1,O=5,T=-1;function Mt(){return!(t.unstable_now()-T<O)}function ar(){if(b!==null){var I=t.unstable_now();T=I;var D=!0;try{D=b(!0,I)}finally{D?lr():(A=!1,b=null)}}else A=!1}var lr;if(typeof d=="function")lr=function(){d(ar)};else if(typeof MessageChannel<"u"){var Os=new MessageChannel,oc=Os.port2;Os.port1.onmessage=ar,lr=function(){oc.postMessage(null)}}else lr=function(){z(ar,0)};function yi(I){b=I,A||(A=!0,lr())}function vi(I,D){M=z(function(){I(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){C||S||(C=!0,yi(P))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return r(l)},t.unstable_next=function(I){switch(m){case 1:case 2:case 3:var D=3;break;default:D=m}var E=m;m=D;try{return I()}finally{m=E}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,D){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var E=m;m=I;try{return D()}finally{m=E}},t.unstable_scheduleCallback=function(I,D,E){var H=t.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?H+E:H):E=H,I){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=E+Q,I={id:h++,callback:D,priorityLevel:I,startTime:E,expirationTime:Q,sortIndex:-1},E>H?(I.sortIndex=E,e(u,I),r(l)===null&&I===r(u)&&(w?(g(M),M=-1):w=!0,vi(y,E-H))):(I.sortIndex=Q,e(l,I),C||S||(C=!0,yi(P))),I},t.unstable_shouldYield=Mt,t.unstable_wrapCallback=function(I){var D=m;return function(){var E=m;m=D;try{return I.apply(this,arguments)}finally{m=E}}}})(ol);il.exports=ol;var Ec=il.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc=X,vt=Ec;function v(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sl=new Set,Rr={};function Re(t,e){Je(t,e),Je(t+"Capture",e)}function Je(t,e){for(Rr[t]=e,t=0;t<e.length;t++)sl.add(e[t])}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_i=Object.prototype.hasOwnProperty,Tc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ws={},Gs={};function xc(t){return _i.call(Gs,t)?!0:_i.call(Ws,t)?!1:Tc.test(t)?Gs[t]=!0:(Ws[t]=!0,!1)}function Nc(t,e,r,n){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zc(t,e,r,n){if(e===null||typeof e>"u"||Nc(t,e,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dt(t,e,r,n,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){et[t]=new dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];et[e]=new dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){et[t]=new dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){et[t]=new dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){et[t]=new dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){et[t]=new dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){et[t]=new dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){et[t]=new dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){et[t]=new dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ko=/[\-:]([a-z])/g;function qo(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ko,qo);et[e]=new dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ko,qo);et[e]=new dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ko,qo);et[e]=new dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){et[t]=new dt(t,1,!1,t.toLowerCase(),null,!1,!1)});et.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){et[t]=new dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function _o(t,e,r,n){var i=et.hasOwnProperty(e)?et[e]:null;(i!==null?i.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zc(e,r,i,n)&&(r=null),n||i===null?xc(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):i.mustUseProperty?t[i.propertyName]=r===null?i.type===3?!1:"":r:(e=i.attributeName,n=i.attributeNamespace,r===null?t.removeAttribute(e):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?t.setAttributeNS(n,e,r):t.setAttribute(e,r))))}var Qt=Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rn=Symbol.for("react.element"),Ne=Symbol.for("react.portal"),ze=Symbol.for("react.fragment"),$o=Symbol.for("react.strict_mode"),$i=Symbol.for("react.profiler"),al=Symbol.for("react.provider"),ll=Symbol.for("react.context"),Qo=Symbol.for("react.forward_ref"),Qi=Symbol.for("react.suspense"),Yi=Symbol.for("react.suspense_list"),Yo=Symbol.for("react.memo"),Jt=Symbol.for("react.lazy"),dl=Symbol.for("react.offscreen"),js=Symbol.iterator;function dr(t){return t===null||typeof t!="object"?null:(t=js&&t[js]||t["@@iterator"],typeof t=="function"?t:null)}var U=Object.assign,Ai;function yr(t){if(Ai===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);Ai=e&&e[1]||""}return`
`+Ai+t}var wi=!1;function bi(t,e){if(!t||wi)return"";wi=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var n=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){n=u}t.call(e.prototype)}else{try{throw Error()}catch(u){n=u}t()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=n.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{wi=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?yr(t):""}function Oc(t){switch(t.tag){case 5:return yr(t.type);case 16:return yr("Lazy");case 13:return yr("Suspense");case 19:return yr("SuspenseList");case 0:case 2:case 15:return t=bi(t.type,!1),t;case 11:return t=bi(t.type.render,!1),t;case 1:return t=bi(t.type,!0),t;default:return""}}function Ji(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ze:return"Fragment";case Ne:return"Portal";case $i:return"Profiler";case $o:return"StrictMode";case Qi:return"Suspense";case Yi:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ll:return(t.displayName||"Context")+".Consumer";case al:return(t._context.displayName||"Context")+".Provider";case Qo:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yo:return e=t.displayName||null,e!==null?e:Ji(t.type)||"Memo";case Jt:e=t._payload,t=t._init;try{return Ji(t(e))}catch{}}return null}function Lc(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ji(e);case 8:return e===$o?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ue(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cl(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Fc(t){var e=cl(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function nn(t){t._valueTracker||(t._valueTracker=Fc(t))}function ul(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),n="";return t&&(n=cl(t)?t.checked?"true":"false":t.value),t=n,t!==r?(e.setValue(t),!0):!1}function Tn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Zi(t,e){var r=e.checked;return U({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Us(t,e){var r=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;r=ue(e.value!=null?e.value:r),t._wrapperState={initialChecked:n,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function gl(t,e){e=e.checked,e!=null&&_o(t,"checked",e,!1)}function Xi(t,e){gl(t,e);var r=ue(e.value),n=e.type;if(r!=null)n==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?to(t,e.type,r):e.hasOwnProperty("defaultValue")&&to(t,e.type,ue(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vs(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function to(t,e,r){(e!=="number"||Tn(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var vr=Array.isArray;function Ke(t,e,r,n){if(t=t.options,e){e={};for(var i=0;i<r.length;i++)e["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=e.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&n&&(t[r].defaultSelected=!0)}else{for(r=""+ue(r),e=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function eo(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(v(91));return U({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hs(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(v(92));if(vr(r)){if(1<r.length)throw Error(v(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:ue(r)}}function pl(t,e){var r=ue(e.value),n=ue(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),n!=null&&(t.defaultValue=""+n)}function Ks(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hl(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ro(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hl(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var on,ml=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,n,i){MSApp.execUnsafeLocalFunction(function(){return t(e,r,n,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(on=on||document.createElement("div"),on.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=on.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Tr(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bc=["Webkit","ms","Moz","O"];Object.keys(Ar).forEach(function(t){Bc.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ar[e]=Ar[t]})});function fl(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Ar.hasOwnProperty(t)&&Ar[t]?(""+e).trim():e+"px"}function yl(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=fl(r,e[r],n);r==="float"&&(r="cssFloat"),n?t.setProperty(r,i):t[r]=i}}var Wc=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function no(t,e){if(e){if(Wc[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(v(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(v(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(v(61))}if(e.style!=null&&typeof e.style!="object")throw Error(v(62))}}function io(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oo=null;function Jo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var so=null,qe=null,_e=null;function qs(t){if(t=Yr(t)){if(typeof so!="function")throw Error(v(280));var e=t.stateNode;e&&(e=si(e),so(t.stateNode,t.type,e))}}function vl(t){qe?_e?_e.push(t):_e=[t]:qe=t}function Sl(){if(qe){var t=qe,e=_e;if(_e=qe=null,qs(t),e)for(t=0;t<e.length;t++)qs(e[t])}}function Cl(t,e){return t(e)}function Al(){}var Pi=!1;function wl(t,e,r){if(Pi)return t(e,r);Pi=!0;try{return Cl(t,e,r)}finally{Pi=!1,(qe!==null||_e!==null)&&(Al(),Sl())}}function xr(t,e){var r=t.stateNode;if(r===null)return null;var n=si(r);if(n===null)return null;r=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(v(231,e,typeof r));return r}var ao=!1;if(Kt)try{var cr={};Object.defineProperty(cr,"passive",{get:function(){ao=!0}}),window.addEventListener("test",cr,cr),window.removeEventListener("test",cr,cr)}catch{ao=!1}function Gc(t,e,r,n,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(r,u)}catch(h){this.onError(h)}}var wr=!1,xn=null,Nn=!1,lo=null,jc={onError:function(t){wr=!0,xn=t}};function Uc(t,e,r,n,i,o,s,a,l){wr=!1,xn=null,Gc.apply(jc,arguments)}function Vc(t,e,r,n,i,o,s,a,l){if(Uc.apply(this,arguments),wr){if(wr){var u=xn;wr=!1,xn=null}else throw Error(v(198));Nn||(Nn=!0,lo=u)}}function Te(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function bl(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _s(t){if(Te(t)!==t)throw Error(v(188))}function Hc(t){var e=t.alternate;if(!e){if(e=Te(t),e===null)throw Error(v(188));return e!==t?null:t}for(var r=t,n=e;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return _s(i),t;if(o===n)return _s(i),e;o=o.sibling}throw Error(v(188))}if(r.return!==n.return)r=i,n=o;else{for(var s=!1,a=i.child;a;){if(a===r){s=!0,r=i,n=o;break}if(a===n){s=!0,n=i,r=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===r){s=!0,r=o,n=i;break}if(a===n){s=!0,n=o,r=i;break}a=a.sibling}if(!s)throw Error(v(189))}}if(r.alternate!==n)throw Error(v(190))}if(r.tag!==3)throw Error(v(188));return r.stateNode.current===r?t:e}function Pl(t){return t=Hc(t),t!==null?kl(t):null}function kl(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=kl(t);if(e!==null)return e;t=t.sibling}return null}var Il=vt.unstable_scheduleCallback,$s=vt.unstable_cancelCallback,Kc=vt.unstable_shouldYield,qc=vt.unstable_requestPaint,K=vt.unstable_now,_c=vt.unstable_getCurrentPriorityLevel,Zo=vt.unstable_ImmediatePriority,Ml=vt.unstable_UserBlockingPriority,zn=vt.unstable_NormalPriority,$c=vt.unstable_LowPriority,Dl=vt.unstable_IdlePriority,ri=null,Bt=null;function Qc(t){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(ri,t,void 0,(t.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:Zc,Yc=Math.log,Jc=Math.LN2;function Zc(t){return t>>>=0,t===0?32:31-(Yc(t)/Jc|0)|0}var sn=64,an=4194304;function Sr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function On(t,e){var r=t.pendingLanes;if(r===0)return 0;var n=0,i=t.suspendedLanes,o=t.pingedLanes,s=r&268435455;if(s!==0){var a=s&~i;a!==0?n=Sr(a):(o&=s,o!==0&&(n=Sr(o)))}else s=r&~i,s!==0?n=Sr(s):o!==0&&(n=Sr(o));if(n===0)return 0;if(e!==0&&e!==n&&!(e&i)&&(i=n&-n,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(n&4&&(n|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)r=31-xt(e),i=1<<r,n|=t[r],e&=~i;return n}function Xc(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tu(t,e){for(var r=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-xt(o),a=1<<s,l=i[s];l===-1?(!(a&r)||a&n)&&(i[s]=Xc(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function co(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function El(){var t=sn;return sn<<=1,!(sn&4194240)&&(sn=64),t}function ki(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function $r(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-xt(e),t[e]=r}function eu(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<r;){var i=31-xt(r),o=1<<i;e[i]=0,n[i]=-1,t[i]=-1,r&=~o}}function Xo(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var n=31-xt(r),i=1<<n;i&e|t[n]&e&&(t[n]|=e),r&=~i}}var N=0;function Rl(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tl,ts,xl,Nl,zl,uo=!1,ln=[],ne=null,ie=null,oe=null,Nr=new Map,zr=new Map,Xt=[],ru="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qs(t,e){switch(t){case"focusin":case"focusout":ne=null;break;case"dragenter":case"dragleave":ie=null;break;case"mouseover":case"mouseout":oe=null;break;case"pointerover":case"pointerout":Nr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":zr.delete(e.pointerId)}}function ur(t,e,r,n,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Yr(e),e!==null&&ts(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function nu(t,e,r,n,i){switch(e){case"focusin":return ne=ur(ne,t,e,r,n,i),!0;case"dragenter":return ie=ur(ie,t,e,r,n,i),!0;case"mouseover":return oe=ur(oe,t,e,r,n,i),!0;case"pointerover":var o=i.pointerId;return Nr.set(o,ur(Nr.get(o)||null,t,e,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,zr.set(o,ur(zr.get(o)||null,t,e,r,n,i)),!0}return!1}function Ol(t){var e=Ce(t.target);if(e!==null){var r=Te(e);if(r!==null){if(e=r.tag,e===13){if(e=bl(r),e!==null){t.blockedOn=e,zl(t.priority,function(){xl(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function An(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=go(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var n=new r.constructor(r.type,r);oo=n,r.target.dispatchEvent(n),oo=null}else return e=Yr(r),e!==null&&ts(e),t.blockedOn=r,!1;e.shift()}return!0}function Ys(t,e,r){An(t)&&r.delete(e)}function iu(){uo=!1,ne!==null&&An(ne)&&(ne=null),ie!==null&&An(ie)&&(ie=null),oe!==null&&An(oe)&&(oe=null),Nr.forEach(Ys),zr.forEach(Ys)}function gr(t,e){t.blockedOn===e&&(t.blockedOn=null,uo||(uo=!0,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,iu)))}function Or(t){function e(i){return gr(i,t)}if(0<ln.length){gr(ln[0],t);for(var r=1;r<ln.length;r++){var n=ln[r];n.blockedOn===t&&(n.blockedOn=null)}}for(ne!==null&&gr(ne,t),ie!==null&&gr(ie,t),oe!==null&&gr(oe,t),Nr.forEach(e),zr.forEach(e),r=0;r<Xt.length;r++)n=Xt[r],n.blockedOn===t&&(n.blockedOn=null);for(;0<Xt.length&&(r=Xt[0],r.blockedOn===null);)Ol(r),r.blockedOn===null&&Xt.shift()}var $e=Qt.ReactCurrentBatchConfig,Ln=!0;function ou(t,e,r,n){var i=N,o=$e.transition;$e.transition=null;try{N=1,es(t,e,r,n)}finally{N=i,$e.transition=o}}function su(t,e,r,n){var i=N,o=$e.transition;$e.transition=null;try{N=4,es(t,e,r,n)}finally{N=i,$e.transition=o}}function es(t,e,r,n){if(Ln){var i=go(t,e,r,n);if(i===null)Oi(t,e,n,Fn,r),Qs(t,n);else if(nu(i,t,e,r,n))n.stopPropagation();else if(Qs(t,n),e&4&&-1<ru.indexOf(t)){for(;i!==null;){var o=Yr(i);if(o!==null&&Tl(o),o=go(t,e,r,n),o===null&&Oi(t,e,n,Fn,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else Oi(t,e,n,null,r)}}var Fn=null;function go(t,e,r,n){if(Fn=null,t=Jo(n),t=Ce(t),t!==null)if(e=Te(t),e===null)t=null;else if(r=e.tag,r===13){if(t=bl(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fn=t,null}function Ll(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_c()){case Zo:return 1;case Ml:return 4;case zn:case $c:return 16;case Dl:return 536870912;default:return 16}default:return 16}}var ee=null,rs=null,wn=null;function Fl(){if(wn)return wn;var t,e=rs,r=e.length,n,i="value"in ee?ee.value:ee.textContent,o=i.length;for(t=0;t<r&&e[t]===i[t];t++);var s=r-t;for(n=1;n<=s&&e[r-n]===i[o-n];n++);return wn=i.slice(t,1<n?1-n:void 0)}function bn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function dn(){return!0}function Js(){return!1}function Ct(t){function e(r,n,i,o,s){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(r=t[a],this[a]=r?r(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?dn:Js,this.isPropagationStopped=Js,this}return U(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=dn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=dn)},persist:function(){},isPersistent:dn}),e}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ns=Ct(or),Qr=U({},or,{view:0,detail:0}),au=Ct(Qr),Ii,Mi,pr,ni=U({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:is,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pr&&(pr&&t.type==="mousemove"?(Ii=t.screenX-pr.screenX,Mi=t.screenY-pr.screenY):Mi=Ii=0,pr=t),Ii)},movementY:function(t){return"movementY"in t?t.movementY:Mi}}),Zs=Ct(ni),lu=U({},ni,{dataTransfer:0}),du=Ct(lu),cu=U({},Qr,{relatedTarget:0}),Di=Ct(cu),uu=U({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),gu=Ct(uu),pu=U({},or,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hu=Ct(pu),mu=U({},or,{data:0}),Xs=Ct(mu),fu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Su(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=vu[t])?!!e[t]:!1}function is(){return Su}var Cu=U({},Qr,{key:function(t){if(t.key){var e=fu[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:is,charCode:function(t){return t.type==="keypress"?bn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Au=Ct(Cu),wu=U({},ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ta=Ct(wu),bu=U({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:is}),Pu=Ct(bu),ku=U({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iu=Ct(ku),Mu=U({},ni,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Du=Ct(Mu),Eu=[9,13,27,32],os=Kt&&"CompositionEvent"in window,br=null;Kt&&"documentMode"in document&&(br=document.documentMode);var Ru=Kt&&"TextEvent"in window&&!br,Bl=Kt&&(!os||br&&8<br&&11>=br),ea=" ",ra=!1;function Wl(t,e){switch(t){case"keyup":return Eu.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gl(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Oe=!1;function Tu(t,e){switch(t){case"compositionend":return Gl(e);case"keypress":return e.which!==32?null:(ra=!0,ea);case"textInput":return t=e.data,t===ea&&ra?null:t;default:return null}}function xu(t,e){if(Oe)return t==="compositionend"||!os&&Wl(t,e)?(t=Fl(),wn=rs=ee=null,Oe=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bl&&e.locale!=="ko"?null:e.data;default:return null}}var Nu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function na(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Nu[t.type]:e==="textarea"}function jl(t,e,r,n){vl(n),e=Bn(e,"onChange"),0<e.length&&(r=new ns("onChange","change",null,r,n),t.push({event:r,listeners:e}))}var Pr=null,Lr=null;function zu(t){Zl(t,0)}function ii(t){var e=Be(t);if(ul(e))return t}function Ou(t,e){if(t==="change")return e}var Ul=!1;if(Kt){var Ei;if(Kt){var Ri="oninput"in document;if(!Ri){var ia=document.createElement("div");ia.setAttribute("oninput","return;"),Ri=typeof ia.oninput=="function"}Ei=Ri}else Ei=!1;Ul=Ei&&(!document.documentMode||9<document.documentMode)}function oa(){Pr&&(Pr.detachEvent("onpropertychange",Vl),Lr=Pr=null)}function Vl(t){if(t.propertyName==="value"&&ii(Lr)){var e=[];jl(e,Lr,t,Jo(t)),wl(zu,e)}}function Lu(t,e,r){t==="focusin"?(oa(),Pr=e,Lr=r,Pr.attachEvent("onpropertychange",Vl)):t==="focusout"&&oa()}function Fu(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ii(Lr)}function Bu(t,e){if(t==="click")return ii(e)}function Wu(t,e){if(t==="input"||t==="change")return ii(e)}function Gu(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zt=typeof Object.is=="function"?Object.is:Gu;function Fr(t,e){if(zt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!_i.call(e,i)||!zt(t[i],e[i]))return!1}return!0}function sa(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function aa(t,e){var r=sa(t);t=0;for(var n;r;){if(r.nodeType===3){if(n=t+r.textContent.length,t<=e&&n>=e)return{node:r,offset:e-t};t=n}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=sa(r)}}function Hl(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hl(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Kl(){for(var t=window,e=Tn();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=Tn(t.document)}return e}function ss(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ju(t){var e=Kl(),r=t.focusedElem,n=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&Hl(r.ownerDocument.documentElement,r)){if(n!==null&&ss(r)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!t.extend&&o>n&&(i=n,n=o,o=i),i=aa(r,o);var s=aa(r,n);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>n?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Uu=Kt&&"documentMode"in document&&11>=document.documentMode,Le=null,po=null,kr=null,ho=!1;function la(t,e,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ho||Le==null||Le!==Tn(n)||(n=Le,"selectionStart"in n&&ss(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),kr&&Fr(kr,n)||(kr=n,n=Bn(po,"onSelect"),0<n.length&&(e=new ns("onSelect","select",null,e,r),t.push({event:e,listeners:n}),e.target=Le)))}function cn(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Fe={animationend:cn("Animation","AnimationEnd"),animationiteration:cn("Animation","AnimationIteration"),animationstart:cn("Animation","AnimationStart"),transitionend:cn("Transition","TransitionEnd")},Ti={},ql={};Kt&&(ql=document.createElement("div").style,"AnimationEvent"in window||(delete Fe.animationend.animation,delete Fe.animationiteration.animation,delete Fe.animationstart.animation),"TransitionEvent"in window||delete Fe.transitionend.transition);function oi(t){if(Ti[t])return Ti[t];if(!Fe[t])return t;var e=Fe[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in ql)return Ti[t]=e[r];return t}var _l=oi("animationend"),$l=oi("animationiteration"),Ql=oi("animationstart"),Yl=oi("transitionend"),Jl=new Map,da="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pe(t,e){Jl.set(t,e),Re(e,[t])}for(var xi=0;xi<da.length;xi++){var Ni=da[xi],Vu=Ni.toLowerCase(),Hu=Ni[0].toUpperCase()+Ni.slice(1);pe(Vu,"on"+Hu)}pe(_l,"onAnimationEnd");pe($l,"onAnimationIteration");pe(Ql,"onAnimationStart");pe("dblclick","onDoubleClick");pe("focusin","onFocus");pe("focusout","onBlur");pe(Yl,"onTransitionEnd");Je("onMouseEnter",["mouseout","mouseover"]);Je("onMouseLeave",["mouseout","mouseover"]);Je("onPointerEnter",["pointerout","pointerover"]);Je("onPointerLeave",["pointerout","pointerover"]);Re("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Re("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Re("onBeforeInput",["compositionend","keypress","textInput","paste"]);Re("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Re("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Re("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ku=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));function ca(t,e,r){var n=t.type||"unknown-event";t.currentTarget=r,Vc(n,e,void 0,t),t.currentTarget=null}function Zl(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var n=t[r],i=n.event;n=n.listeners;t:{var o=void 0;if(e)for(var s=n.length-1;0<=s;s--){var a=n[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break t;ca(i,a,u),o=l}else for(s=0;s<n.length;s++){if(a=n[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break t;ca(i,a,u),o=l}}}if(Nn)throw t=lo,Nn=!1,lo=null,t}function F(t,e){var r=e[So];r===void 0&&(r=e[So]=new Set);var n=t+"__bubble";r.has(n)||(Xl(e,t,2,!1),r.add(n))}function zi(t,e,r){var n=0;e&&(n|=4),Xl(r,t,n,e)}var un="_reactListening"+Math.random().toString(36).slice(2);function Br(t){if(!t[un]){t[un]=!0,sl.forEach(function(r){r!=="selectionchange"&&(Ku.has(r)||zi(r,!1,t),zi(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[un]||(e[un]=!0,zi("selectionchange",!1,e))}}function Xl(t,e,r,n){switch(Ll(e)){case 1:var i=ou;break;case 4:i=su;break;default:i=es}r=i.bind(null,e,r,t),i=void 0,!ao||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,r,{capture:!0,passive:i}):t.addEventListener(e,r,!0):i!==void 0?t.addEventListener(e,r,{passive:i}):t.addEventListener(e,r,!1)}function Oi(t,e,r,n,i){var o=n;if(!(e&1)&&!(e&2)&&n!==null)t:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var a=n.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=n.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Ce(a),s===null)return;if(l=s.tag,l===5||l===6){n=o=s;continue t}a=a.parentNode}}n=n.return}wl(function(){var u=o,h=Jo(r),f=[];t:{var m=Jl.get(t);if(m!==void 0){var S=ns,C=t;switch(t){case"keypress":if(bn(r)===0)break t;case"keydown":case"keyup":S=Au;break;case"focusin":C="focus",S=Di;break;case"focusout":C="blur",S=Di;break;case"beforeblur":case"afterblur":S=Di;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=du;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Pu;break;case _l:case $l:case Ql:S=gu;break;case Yl:S=Iu;break;case"scroll":S=au;break;case"wheel":S=Du;break;case"copy":case"cut":case"paste":S=hu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=ta}var w=(e&4)!==0,z=!w&&t==="scroll",g=w?m!==null?m+"Capture":null:m;w=[];for(var d=u,p;d!==null;){p=d;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,g!==null&&(y=xr(d,g),y!=null&&w.push(Wr(d,y,p)))),z)break;d=d.return}0<w.length&&(m=new S(m,C,null,r,h),f.push({event:m,listeners:w}))}}if(!(e&7)){t:{if(m=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",m&&r!==oo&&(C=r.relatedTarget||r.fromElement)&&(Ce(C)||C[qt]))break t;if((S||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,S?(C=r.relatedTarget||r.toElement,S=u,C=C?Ce(C):null,C!==null&&(z=Te(C),C!==z||C.tag!==5&&C.tag!==6)&&(C=null)):(S=null,C=u),S!==C)){if(w=Zs,y="onMouseLeave",g="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(w=ta,y="onPointerLeave",g="onPointerEnter",d="pointer"),z=S==null?m:Be(S),p=C==null?m:Be(C),m=new w(y,d+"leave",S,r,h),m.target=z,m.relatedTarget=p,y=null,Ce(h)===u&&(w=new w(g,d+"enter",C,r,h),w.target=p,w.relatedTarget=z,y=w),z=y,S&&C)e:{for(w=S,g=C,d=0,p=w;p;p=xe(p))d++;for(p=0,y=g;y;y=xe(y))p++;for(;0<d-p;)w=xe(w),d--;for(;0<p-d;)g=xe(g),p--;for(;d--;){if(w===g||g!==null&&w===g.alternate)break e;w=xe(w),g=xe(g)}w=null}else w=null;S!==null&&ua(f,m,S,w,!1),C!==null&&z!==null&&ua(f,z,C,w,!0)}}t:{if(m=u?Be(u):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var P=Ou;else if(na(m))if(Ul)P=Wu;else{P=Fu;var A=Lu}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(P=Bu);if(P&&(P=P(t,u))){jl(f,P,r,h);break t}A&&A(t,m,u),t==="focusout"&&(A=m._wrapperState)&&A.controlled&&m.type==="number"&&to(m,"number",m.value)}switch(A=u?Be(u):window,t){case"focusin":(na(A)||A.contentEditable==="true")&&(Le=A,po=u,kr=null);break;case"focusout":kr=po=Le=null;break;case"mousedown":ho=!0;break;case"contextmenu":case"mouseup":case"dragend":ho=!1,la(f,r,h);break;case"selectionchange":if(Uu)break;case"keydown":case"keyup":la(f,r,h)}var b;if(os)t:{switch(t){case"compositionstart":var M="onCompositionStart";break t;case"compositionend":M="onCompositionEnd";break t;case"compositionupdate":M="onCompositionUpdate";break t}M=void 0}else Oe?Wl(t,r)&&(M="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(M="onCompositionStart");M&&(Bl&&r.locale!=="ko"&&(Oe||M!=="onCompositionStart"?M==="onCompositionEnd"&&Oe&&(b=Fl()):(ee=h,rs="value"in ee?ee.value:ee.textContent,Oe=!0)),A=Bn(u,M),0<A.length&&(M=new Xs(M,t,null,r,h),f.push({event:M,listeners:A}),b?M.data=b:(b=Gl(r),b!==null&&(M.data=b)))),(b=Ru?Tu(t,r):xu(t,r))&&(u=Bn(u,"onBeforeInput"),0<u.length&&(h=new Xs("onBeforeInput","beforeinput",null,r,h),f.push({event:h,listeners:u}),h.data=b))}Zl(f,e)})}function Wr(t,e,r){return{instance:t,listener:e,currentTarget:r}}function Bn(t,e){for(var r=e+"Capture",n=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=xr(t,r),o!=null&&n.unshift(Wr(t,o,i)),o=xr(t,e),o!=null&&n.push(Wr(t,o,i))),t=t.return}return n}function xe(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ua(t,e,r,n,i){for(var o=e._reactName,s=[];r!==null&&r!==n;){var a=r,l=a.alternate,u=a.stateNode;if(l!==null&&l===n)break;a.tag===5&&u!==null&&(a=u,i?(l=xr(r,o),l!=null&&s.unshift(Wr(r,l,a))):i||(l=xr(r,o),l!=null&&s.push(Wr(r,l,a)))),r=r.return}s.length!==0&&t.push({event:e,listeners:s})}var qu=/\r\n?/g,_u=/\u0000|\uFFFD/g;function ga(t){return(typeof t=="string"?t:""+t).replace(qu,`
`).replace(_u,"")}function gn(t,e,r){if(e=ga(e),ga(t)!==e&&r)throw Error(v(425))}function Wn(){}var mo=null,fo=null;function yo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vo=typeof setTimeout=="function"?setTimeout:void 0,$u=typeof clearTimeout=="function"?clearTimeout:void 0,pa=typeof Promise=="function"?Promise:void 0,Qu=typeof queueMicrotask=="function"?queueMicrotask:typeof pa<"u"?function(t){return pa.resolve(null).then(t).catch(Yu)}:vo;function Yu(t){setTimeout(function(){throw t})}function Li(t,e){var r=e,n=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){t.removeChild(i),Or(e);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Or(e)}function se(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ha(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var sr=Math.random().toString(36).slice(2),Ft="__reactFiber$"+sr,Gr="__reactProps$"+sr,qt="__reactContainer$"+sr,So="__reactEvents$"+sr,Ju="__reactListeners$"+sr,Zu="__reactHandles$"+sr;function Ce(t){var e=t[Ft];if(e)return e;for(var r=t.parentNode;r;){if(e=r[qt]||r[Ft]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=ha(t);t!==null;){if(r=t[Ft])return r;t=ha(t)}return e}t=r,r=t.parentNode}return null}function Yr(t){return t=t[Ft]||t[qt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Be(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(v(33))}function si(t){return t[Gr]||null}var Co=[],We=-1;function he(t){return{current:t}}function B(t){0>We||(t.current=Co[We],Co[We]=null,We--)}function L(t,e){We++,Co[We]=t.current,t.current=e}var ge={},ot=he(ge),gt=he(!1),ke=ge;function Ze(t,e){var r=t.type.contextTypes;if(!r)return ge;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=e[o];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function pt(t){return t=t.childContextTypes,t!=null}function Gn(){B(gt),B(ot)}function ma(t,e,r){if(ot.current!==ge)throw Error(v(168));L(ot,e),L(gt,r)}function td(t,e,r){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in e))throw Error(v(108,Lc(t)||"Unknown",i));return U({},r,n)}function jn(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ge,ke=ot.current,L(ot,t),L(gt,gt.current),!0}function fa(t,e,r){var n=t.stateNode;if(!n)throw Error(v(169));r?(t=td(t,e,ke),n.__reactInternalMemoizedMergedChildContext=t,B(gt),B(ot),L(ot,t)):B(gt),L(gt,r)}var jt=null,ai=!1,Fi=!1;function ed(t){jt===null?jt=[t]:jt.push(t)}function Xu(t){ai=!0,ed(t)}function me(){if(!Fi&&jt!==null){Fi=!0;var t=0,e=N;try{var r=jt;for(N=1;t<r.length;t++){var n=r[t];do n=n(!0);while(n!==null)}jt=null,ai=!1}catch(i){throw jt!==null&&(jt=jt.slice(t+1)),Il(Zo,me),i}finally{N=e,Fi=!1}}return null}var Ge=[],je=0,Un=null,Vn=0,At=[],wt=0,Ie=null,Ut=1,Vt="";function ve(t,e){Ge[je++]=Vn,Ge[je++]=Un,Un=t,Vn=e}function rd(t,e,r){At[wt++]=Ut,At[wt++]=Vt,At[wt++]=Ie,Ie=t;var n=Ut;t=Vt;var i=32-xt(n)-1;n&=~(1<<i),r+=1;var o=32-xt(e)+i;if(30<o){var s=i-i%5;o=(n&(1<<s)-1).toString(32),n>>=s,i-=s,Ut=1<<32-xt(e)+i|r<<i|n,Vt=o+t}else Ut=1<<o|r<<i|n,Vt=t}function as(t){t.return!==null&&(ve(t,1),rd(t,1,0))}function ls(t){for(;t===Un;)Un=Ge[--je],Ge[je]=null,Vn=Ge[--je],Ge[je]=null;for(;t===Ie;)Ie=At[--wt],At[wt]=null,Vt=At[--wt],At[wt]=null,Ut=At[--wt],At[wt]=null}var yt=null,ft=null,W=!1,Tt=null;function nd(t,e){var r=bt(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function ya(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yt=t,ft=se(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yt=t,ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=Ie!==null?{id:Ut,overflow:Vt}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=bt(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,yt=t,ft=null,!0):!1;default:return!1}}function Ao(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wo(t){if(W){var e=ft;if(e){var r=e;if(!ya(t,e)){if(Ao(t))throw Error(v(418));e=se(r.nextSibling);var n=yt;e&&ya(t,e)?nd(n,r):(t.flags=t.flags&-4097|2,W=!1,yt=t)}}else{if(Ao(t))throw Error(v(418));t.flags=t.flags&-4097|2,W=!1,yt=t}}}function va(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yt=t}function pn(t){if(t!==yt)return!1;if(!W)return va(t),W=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yo(t.type,t.memoizedProps)),e&&(e=ft)){if(Ao(t))throw id(),Error(v(418));for(;e;)nd(t,e),e=se(e.nextSibling)}if(va(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(v(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){ft=se(t.nextSibling);break t}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}ft=null}}else ft=yt?se(t.stateNode.nextSibling):null;return!0}function id(){for(var t=ft;t;)t=se(t.nextSibling)}function Xe(){ft=yt=null,W=!1}function ds(t){Tt===null?Tt=[t]:Tt.push(t)}var tg=Qt.ReactCurrentBatchConfig;function hr(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(v(309));var n=r.stateNode}if(!n)throw Error(v(147,t));var i=n,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(v(284));if(!r._owner)throw Error(v(290,t))}return t}function hn(t,e){throw t=Object.prototype.toString.call(e),Error(v(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sa(t){var e=t._init;return e(t._payload)}function od(t){function e(g,d){if(t){var p=g.deletions;p===null?(g.deletions=[d],g.flags|=16):p.push(d)}}function r(g,d){if(!t)return null;for(;d!==null;)e(g,d),d=d.sibling;return null}function n(g,d){for(g=new Map;d!==null;)d.key!==null?g.set(d.key,d):g.set(d.index,d),d=d.sibling;return g}function i(g,d){return g=ce(g,d),g.index=0,g.sibling=null,g}function o(g,d,p){return g.index=p,t?(p=g.alternate,p!==null?(p=p.index,p<d?(g.flags|=2,d):p):(g.flags|=2,d)):(g.flags|=1048576,d)}function s(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,d,p,y){return d===null||d.tag!==6?(d=Hi(p,g.mode,y),d.return=g,d):(d=i(d,p),d.return=g,d)}function l(g,d,p,y){var P=p.type;return P===ze?h(g,d,p.props.children,y,p.key):d!==null&&(d.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Jt&&Sa(P)===d.type)?(y=i(d,p.props),y.ref=hr(g,d,p),y.return=g,y):(y=Rn(p.type,p.key,p.props,null,g.mode,y),y.ref=hr(g,d,p),y.return=g,y)}function u(g,d,p,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Ki(p,g.mode,y),d.return=g,d):(d=i(d,p.children||[]),d.return=g,d)}function h(g,d,p,y,P){return d===null||d.tag!==7?(d=Pe(p,g.mode,y,P),d.return=g,d):(d=i(d,p),d.return=g,d)}function f(g,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Hi(""+d,g.mode,p),d.return=g,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case rn:return p=Rn(d.type,d.key,d.props,null,g.mode,p),p.ref=hr(g,null,d),p.return=g,p;case Ne:return d=Ki(d,g.mode,p),d.return=g,d;case Jt:var y=d._init;return f(g,y(d._payload),p)}if(vr(d)||dr(d))return d=Pe(d,g.mode,p,null),d.return=g,d;hn(g,d)}return null}function m(g,d,p,y){var P=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return P!==null?null:a(g,d,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case rn:return p.key===P?l(g,d,p,y):null;case Ne:return p.key===P?u(g,d,p,y):null;case Jt:return P=p._init,m(g,d,P(p._payload),y)}if(vr(p)||dr(p))return P!==null?null:h(g,d,p,y,null);hn(g,p)}return null}function S(g,d,p,y,P){if(typeof y=="string"&&y!==""||typeof y=="number")return g=g.get(p)||null,a(d,g,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case rn:return g=g.get(y.key===null?p:y.key)||null,l(d,g,y,P);case Ne:return g=g.get(y.key===null?p:y.key)||null,u(d,g,y,P);case Jt:var A=y._init;return S(g,d,p,A(y._payload),P)}if(vr(y)||dr(y))return g=g.get(p)||null,h(d,g,y,P,null);hn(d,y)}return null}function C(g,d,p,y){for(var P=null,A=null,b=d,M=d=0,O=null;b!==null&&M<p.length;M++){b.index>M?(O=b,b=null):O=b.sibling;var T=m(g,b,p[M],y);if(T===null){b===null&&(b=O);break}t&&b&&T.alternate===null&&e(g,b),d=o(T,d,M),A===null?P=T:A.sibling=T,A=T,b=O}if(M===p.length)return r(g,b),W&&ve(g,M),P;if(b===null){for(;M<p.length;M++)b=f(g,p[M],y),b!==null&&(d=o(b,d,M),A===null?P=b:A.sibling=b,A=b);return W&&ve(g,M),P}for(b=n(g,b);M<p.length;M++)O=S(b,g,M,p[M],y),O!==null&&(t&&O.alternate!==null&&b.delete(O.key===null?M:O.key),d=o(O,d,M),A===null?P=O:A.sibling=O,A=O);return t&&b.forEach(function(Mt){return e(g,Mt)}),W&&ve(g,M),P}function w(g,d,p,y){var P=dr(p);if(typeof P!="function")throw Error(v(150));if(p=P.call(p),p==null)throw Error(v(151));for(var A=P=null,b=d,M=d=0,O=null,T=p.next();b!==null&&!T.done;M++,T=p.next()){b.index>M?(O=b,b=null):O=b.sibling;var Mt=m(g,b,T.value,y);if(Mt===null){b===null&&(b=O);break}t&&b&&Mt.alternate===null&&e(g,b),d=o(Mt,d,M),A===null?P=Mt:A.sibling=Mt,A=Mt,b=O}if(T.done)return r(g,b),W&&ve(g,M),P;if(b===null){for(;!T.done;M++,T=p.next())T=f(g,T.value,y),T!==null&&(d=o(T,d,M),A===null?P=T:A.sibling=T,A=T);return W&&ve(g,M),P}for(b=n(g,b);!T.done;M++,T=p.next())T=S(b,g,M,T.value,y),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?M:T.key),d=o(T,d,M),A===null?P=T:A.sibling=T,A=T);return t&&b.forEach(function(ar){return e(g,ar)}),W&&ve(g,M),P}function z(g,d,p,y){if(typeof p=="object"&&p!==null&&p.type===ze&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case rn:t:{for(var P=p.key,A=d;A!==null;){if(A.key===P){if(P=p.type,P===ze){if(A.tag===7){r(g,A.sibling),d=i(A,p.props.children),d.return=g,g=d;break t}}else if(A.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Jt&&Sa(P)===A.type){r(g,A.sibling),d=i(A,p.props),d.ref=hr(g,A,p),d.return=g,g=d;break t}r(g,A);break}else e(g,A);A=A.sibling}p.type===ze?(d=Pe(p.props.children,g.mode,y,p.key),d.return=g,g=d):(y=Rn(p.type,p.key,p.props,null,g.mode,y),y.ref=hr(g,d,p),y.return=g,g=y)}return s(g);case Ne:t:{for(A=p.key;d!==null;){if(d.key===A)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){r(g,d.sibling),d=i(d,p.children||[]),d.return=g,g=d;break t}else{r(g,d);break}else e(g,d);d=d.sibling}d=Ki(p,g.mode,y),d.return=g,g=d}return s(g);case Jt:return A=p._init,z(g,d,A(p._payload),y)}if(vr(p))return C(g,d,p,y);if(dr(p))return w(g,d,p,y);hn(g,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(r(g,d.sibling),d=i(d,p),d.return=g,g=d):(r(g,d),d=Hi(p,g.mode,y),d.return=g,g=d),s(g)):r(g,d)}return z}var tr=od(!0),sd=od(!1),Hn=he(null),Kn=null,Ue=null,cs=null;function us(){cs=Ue=Kn=null}function gs(t){var e=Hn.current;B(Hn),t._currentValue=e}function bo(t,e,r){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===r)break;t=t.return}}function Qe(t,e){Kn=t,cs=Ue=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ut=!0),t.firstContext=null)}function kt(t){var e=t._currentValue;if(cs!==t)if(t={context:t,memoizedValue:e,next:null},Ue===null){if(Kn===null)throw Error(v(308));Ue=t,Kn.dependencies={lanes:0,firstContext:t}}else Ue=Ue.next=t;return e}var Ae=null;function ps(t){Ae===null?Ae=[t]:Ae.push(t)}function ad(t,e,r,n){var i=e.interleaved;return i===null?(r.next=r,ps(e)):(r.next=i.next,i.next=r),e.interleaved=r,_t(t,n)}function _t(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Zt=!1;function hs(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ld(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ht(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ae(t,e,r){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,x&2){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,_t(t,r)}return i=n.interleaved,i===null?(e.next=e,ps(n)):(e.next=i.next,i.next=e),n.interleaved=e,_t(t,r)}function Pn(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,Xo(t,r)}}function Ca(t,e){var r=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=s:o=o.next=s,r=r.next}while(r!==null);o===null?i=o=e:o=o.next=e}else i=o=e;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function qn(t,e,r,n){var i=t.updateQueue;Zt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,h=u=l=null,a=o;do{var m=a.lane,S=a.eventTime;if((n&m)===m){h!==null&&(h=h.next={eventTime:S,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});t:{var C=t,w=a;switch(m=e,S=r,w.tag){case 1:if(C=w.payload,typeof C=="function"){f=C.call(S,f,m);break t}f=C;break t;case 3:C.flags=C.flags&-65537|128;case 0:if(C=w.payload,m=typeof C=="function"?C.call(S,f,m):C,m==null)break t;f=U({},f,m);break t;case 2:Zt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else S={eventTime:S,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=S,l=f):h=h.next=S,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);De|=s,t.lanes=s,t.memoizedState=f}}function Aa(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(v(191,i));i.call(n)}}}var Jr={},Wt=he(Jr),jr=he(Jr),Ur=he(Jr);function we(t){if(t===Jr)throw Error(v(174));return t}function ms(t,e){switch(L(Ur,e),L(jr,t),L(Wt,Jr),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ro(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ro(e,t)}B(Wt),L(Wt,e)}function er(){B(Wt),B(jr),B(Ur)}function dd(t){we(Ur.current);var e=we(Wt.current),r=ro(e,t.type);e!==r&&(L(jr,t),L(Wt,r))}function fs(t){jr.current===t&&(B(Wt),B(jr))}var G=he(0);function _n(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bi=[];function ys(){for(var t=0;t<Bi.length;t++)Bi[t]._workInProgressVersionPrimary=null;Bi.length=0}var kn=Qt.ReactCurrentDispatcher,Wi=Qt.ReactCurrentBatchConfig,Me=0,j=null,_=null,Y=null,$n=!1,Ir=!1,Vr=0,eg=0;function rt(){throw Error(v(321))}function vs(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!zt(t[r],e[r]))return!1;return!0}function Ss(t,e,r,n,i,o){if(Me=o,j=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,kn.current=t===null||t.memoizedState===null?og:sg,t=r(n,i),Ir){o=0;do{if(Ir=!1,Vr=0,25<=o)throw Error(v(301));o+=1,Y=_=null,e.updateQueue=null,kn.current=ag,t=r(n,i)}while(Ir)}if(kn.current=Qn,e=_!==null&&_.next!==null,Me=0,Y=_=j=null,$n=!1,e)throw Error(v(300));return t}function Cs(){var t=Vr!==0;return Vr=0,t}function Lt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?j.memoizedState=Y=t:Y=Y.next=t,Y}function It(){if(_===null){var t=j.alternate;t=t!==null?t.memoizedState:null}else t=_.next;var e=Y===null?j.memoizedState:Y.next;if(e!==null)Y=e,_=t;else{if(t===null)throw Error(v(310));_=t,t={memoizedState:_.memoizedState,baseState:_.baseState,baseQueue:_.baseQueue,queue:_.queue,next:null},Y===null?j.memoizedState=Y=t:Y=Y.next=t}return Y}function Hr(t,e){return typeof e=="function"?e(t):e}function Gi(t){var e=It(),r=e.queue;if(r===null)throw Error(v(311));r.lastRenderedReducer=t;var n=_,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var a=s=null,l=null,u=o;do{var h=u.lane;if((Me&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:t(n,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=n):l=l.next=f,j.lanes|=h,De|=h}u=u.next}while(u!==null&&u!==o);l===null?s=n:l.next=a,zt(n,e.memoizedState)||(ut=!0),e.memoizedState=n,e.baseState=s,e.baseQueue=l,r.lastRenderedState=n}if(t=r.interleaved,t!==null){i=t;do o=i.lane,j.lanes|=o,De|=o,i=i.next;while(i!==t)}else i===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function ji(t){var e=It(),r=e.queue;if(r===null)throw Error(v(311));r.lastRenderedReducer=t;var n=r.dispatch,i=r.pending,o=e.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);zt(o,e.memoizedState)||(ut=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),r.lastRenderedState=o}return[o,n]}function cd(){}function ud(t,e){var r=j,n=It(),i=e(),o=!zt(n.memoizedState,i);if(o&&(n.memoizedState=i,ut=!0),n=n.queue,As(hd.bind(null,r,n,t),[t]),n.getSnapshot!==e||o||Y!==null&&Y.memoizedState.tag&1){if(r.flags|=2048,Kr(9,pd.bind(null,r,n,i,e),void 0,null),J===null)throw Error(v(349));Me&30||gd(r,e,i)}return i}function gd(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=j.updateQueue,e===null?(e={lastEffect:null,stores:null},j.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function pd(t,e,r,n){e.value=r,e.getSnapshot=n,md(e)&&fd(t)}function hd(t,e,r){return r(function(){md(e)&&fd(t)})}function md(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!zt(t,r)}catch{return!0}}function fd(t){var e=_t(t,1);e!==null&&Nt(e,t,1,-1)}function wa(t){var e=Lt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:t},e.queue=t,t=t.dispatch=ig.bind(null,j,t),[e.memoizedState,t]}function Kr(t,e,r,n){return t={tag:t,create:e,destroy:r,deps:n,next:null},e=j.updateQueue,e===null?(e={lastEffect:null,stores:null},j.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(n=r.next,r.next=t,t.next=n,e.lastEffect=t)),t}function yd(){return It().memoizedState}function In(t,e,r,n){var i=Lt();j.flags|=t,i.memoizedState=Kr(1|e,r,void 0,n===void 0?null:n)}function li(t,e,r,n){var i=It();n=n===void 0?null:n;var o=void 0;if(_!==null){var s=_.memoizedState;if(o=s.destroy,n!==null&&vs(n,s.deps)){i.memoizedState=Kr(e,r,o,n);return}}j.flags|=t,i.memoizedState=Kr(1|e,r,o,n)}function ba(t,e){return In(8390656,8,t,e)}function As(t,e){return li(2048,8,t,e)}function vd(t,e){return li(4,2,t,e)}function Sd(t,e){return li(4,4,t,e)}function Cd(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ad(t,e,r){return r=r!=null?r.concat([t]):null,li(4,4,Cd.bind(null,e,t),r)}function ws(){}function wd(t,e){var r=It();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&vs(e,n[1])?n[0]:(r.memoizedState=[t,e],t)}function bd(t,e){var r=It();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&vs(e,n[1])?n[0]:(t=t(),r.memoizedState=[t,e],t)}function Pd(t,e,r){return Me&21?(zt(r,e)||(r=El(),j.lanes|=r,De|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ut=!0),t.memoizedState=r)}function rg(t,e){var r=N;N=r!==0&&4>r?r:4,t(!0);var n=Wi.transition;Wi.transition={};try{t(!1),e()}finally{N=r,Wi.transition=n}}function kd(){return It().memoizedState}function ng(t,e,r){var n=de(t);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Id(t))Md(e,r);else if(r=ad(t,e,r,n),r!==null){var i=at();Nt(r,t,n,i),Dd(r,e,n)}}function ig(t,e,r){var n=de(t),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Id(t))Md(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,r);if(i.hasEagerState=!0,i.eagerState=a,zt(a,s)){var l=e.interleaved;l===null?(i.next=i,ps(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}r=ad(t,e,i,n),r!==null&&(i=at(),Nt(r,t,n,i),Dd(r,e,n))}}function Id(t){var e=t.alternate;return t===j||e!==null&&e===j}function Md(t,e){Ir=$n=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function Dd(t,e,r){if(r&4194240){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,Xo(t,r)}}var Qn={readContext:kt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},og={readContext:kt,useCallback:function(t,e){return Lt().memoizedState=[t,e===void 0?null:e],t},useContext:kt,useEffect:ba,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,In(4194308,4,Cd.bind(null,e,t),r)},useLayoutEffect:function(t,e){return In(4194308,4,t,e)},useInsertionEffect:function(t,e){return In(4,2,t,e)},useMemo:function(t,e){var r=Lt();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var n=Lt();return e=r!==void 0?r(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=ng.bind(null,j,t),[n.memoizedState,t]},useRef:function(t){var e=Lt();return t={current:t},e.memoizedState=t},useState:wa,useDebugValue:ws,useDeferredValue:function(t){return Lt().memoizedState=t},useTransition:function(){var t=wa(!1),e=t[0];return t=rg.bind(null,t[1]),Lt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var n=j,i=Lt();if(W){if(r===void 0)throw Error(v(407));r=r()}else{if(r=e(),J===null)throw Error(v(349));Me&30||gd(n,e,r)}i.memoizedState=r;var o={value:r,getSnapshot:e};return i.queue=o,ba(hd.bind(null,n,o,t),[t]),n.flags|=2048,Kr(9,pd.bind(null,n,o,r,e),void 0,null),r},useId:function(){var t=Lt(),e=J.identifierPrefix;if(W){var r=Vt,n=Ut;r=(n&~(1<<32-xt(n)-1)).toString(32)+r,e=":"+e+"R"+r,r=Vr++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=eg++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sg={readContext:kt,useCallback:wd,useContext:kt,useEffect:As,useImperativeHandle:Ad,useInsertionEffect:vd,useLayoutEffect:Sd,useMemo:bd,useReducer:Gi,useRef:yd,useState:function(){return Gi(Hr)},useDebugValue:ws,useDeferredValue:function(t){var e=It();return Pd(e,_.memoizedState,t)},useTransition:function(){var t=Gi(Hr)[0],e=It().memoizedState;return[t,e]},useMutableSource:cd,useSyncExternalStore:ud,useId:kd,unstable_isNewReconciler:!1},ag={readContext:kt,useCallback:wd,useContext:kt,useEffect:As,useImperativeHandle:Ad,useInsertionEffect:vd,useLayoutEffect:Sd,useMemo:bd,useReducer:ji,useRef:yd,useState:function(){return ji(Hr)},useDebugValue:ws,useDeferredValue:function(t){var e=It();return _===null?e.memoizedState=t:Pd(e,_.memoizedState,t)},useTransition:function(){var t=ji(Hr)[0],e=It().memoizedState;return[t,e]},useMutableSource:cd,useSyncExternalStore:ud,useId:kd,unstable_isNewReconciler:!1};function Et(t,e){if(t&&t.defaultProps){e=U({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function Po(t,e,r,n){e=t.memoizedState,r=r(n,e),r=r==null?e:U({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var di={isMounted:function(t){return(t=t._reactInternals)?Te(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var n=at(),i=de(t),o=Ht(n,i);o.payload=e,r!=null&&(o.callback=r),e=ae(t,o,i),e!==null&&(Nt(e,t,i,n),Pn(e,t,i))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var n=at(),i=de(t),o=Ht(n,i);o.tag=1,o.payload=e,r!=null&&(o.callback=r),e=ae(t,o,i),e!==null&&(Nt(e,t,i,n),Pn(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=at(),n=de(t),i=Ht(r,n);i.tag=2,e!=null&&(i.callback=e),e=ae(t,i,n),e!==null&&(Nt(e,t,n,r),Pn(e,t,n))}};function Pa(t,e,r,n,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,o,s):e.prototype&&e.prototype.isPureReactComponent?!Fr(r,n)||!Fr(i,o):!0}function Ed(t,e,r){var n=!1,i=ge,o=e.contextType;return typeof o=="object"&&o!==null?o=kt(o):(i=pt(e)?ke:ot.current,n=e.contextTypes,o=(n=n!=null)?Ze(t,i):ge),e=new e(r,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=di,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function ka(t,e,r,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,n),e.state!==t&&di.enqueueReplaceState(e,e.state,null)}function ko(t,e,r,n){var i=t.stateNode;i.props=r,i.state=t.memoizedState,i.refs={},hs(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=kt(o):(o=pt(e)?ke:ot.current,i.context=Ze(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Po(t,e,o,r),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&di.enqueueReplaceState(i,i.state,null),qn(t,r,i,n),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function rr(t,e){try{var r="",n=e;do r+=Oc(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Ui(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Io(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var lg=typeof WeakMap=="function"?WeakMap:Map;function Rd(t,e,r){r=Ht(-1,r),r.tag=3,r.payload={element:null};var n=e.value;return r.callback=function(){Jn||(Jn=!0,Lo=n),Io(t,e)},r}function Td(t,e,r){r=Ht(-1,r),r.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=e.value;r.payload=function(){return n(i)},r.callback=function(){Io(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Io(t,e),typeof n!="function"&&(le===null?le=new Set([this]):le.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),r}function Ia(t,e,r){var n=t.pingCache;if(n===null){n=t.pingCache=new lg;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(r)||(i.add(r),t=wg.bind(null,t,e,r),e.then(t,t))}function Ma(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Da(t,e,r,n,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Ht(-1,1),e.tag=2,ae(r,e,1))),r.lanes|=1),t)}var dg=Qt.ReactCurrentOwner,ut=!1;function st(t,e,r,n){e.child=t===null?sd(e,null,r,n):tr(e,t.child,r,n)}function Ea(t,e,r,n,i){r=r.render;var o=e.ref;return Qe(e,i),n=Ss(t,e,r,n,o,i),r=Cs(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$t(t,e,i)):(W&&r&&as(e),e.flags|=1,st(t,e,n,i),e.child)}function Ra(t,e,r,n,i){if(t===null){var o=r.type;return typeof o=="function"&&!Rs(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=o,xd(t,e,o,n,i)):(t=Rn(r.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(r=r.compare,r=r!==null?r:Fr,r(s,n)&&t.ref===e.ref)return $t(t,e,i)}return e.flags|=1,t=ce(o,n),t.ref=e.ref,t.return=e,e.child=t}function xd(t,e,r,n,i){if(t!==null){var o=t.memoizedProps;if(Fr(o,n)&&t.ref===e.ref)if(ut=!1,e.pendingProps=n=o,(t.lanes&i)!==0)t.flags&131072&&(ut=!0);else return e.lanes=t.lanes,$t(t,e,i)}return Mo(t,e,r,n,i)}function Nd(t,e,r){var n=e.pendingProps,i=n.children,o=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},L(He,mt),mt|=r;else{if(!(r&1073741824))return t=o!==null?o.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,L(He,mt),mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,L(He,mt),mt|=n}else o!==null?(n=o.baseLanes|r,e.memoizedState=null):n=r,L(He,mt),mt|=n;return st(t,e,i,r),e.child}function zd(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Mo(t,e,r,n,i){var o=pt(r)?ke:ot.current;return o=Ze(e,o),Qe(e,i),r=Ss(t,e,r,n,o,i),n=Cs(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$t(t,e,i)):(W&&n&&as(e),e.flags|=1,st(t,e,r,i),e.child)}function Ta(t,e,r,n,i){if(pt(r)){var o=!0;jn(e)}else o=!1;if(Qe(e,i),e.stateNode===null)Mn(t,e),Ed(e,r,n),ko(e,r,n,i),n=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=kt(u):(u=pt(r)?ke:ot.current,u=Ze(e,u));var h=r.getDerivedStateFromProps,f=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==n||l!==u)&&ka(e,s,n,u),Zt=!1;var m=e.memoizedState;s.state=m,qn(e,n,s,i),l=e.memoizedState,a!==n||m!==l||gt.current||Zt?(typeof h=="function"&&(Po(e,r,h,n),l=e.memoizedState),(a=Zt||Pa(e,r,a,n,m,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=l),s.props=n,s.state=l,s.context=u,n=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{s=e.stateNode,ld(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Et(e.type,a),s.props=u,f=e.pendingProps,m=s.context,l=r.contextType,typeof l=="object"&&l!==null?l=kt(l):(l=pt(r)?ke:ot.current,l=Ze(e,l));var S=r.getDerivedStateFromProps;(h=typeof S=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||m!==l)&&ka(e,s,n,l),Zt=!1,m=e.memoizedState,s.state=m,qn(e,n,s,i);var C=e.memoizedState;a!==f||m!==C||gt.current||Zt?(typeof S=="function"&&(Po(e,r,S,n),C=e.memoizedState),(u=Zt||Pa(e,r,u,n,m,C,l)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,C,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,C,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=C),s.props=n,s.state=C,s.context=l,n=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),n=!1)}return Do(t,e,r,n,o,i)}function Do(t,e,r,n,i,o){zd(t,e);var s=(e.flags&128)!==0;if(!n&&!s)return i&&fa(e,r,!1),$t(t,e,o);n=e.stateNode,dg.current=e;var a=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&s?(e.child=tr(e,t.child,null,o),e.child=tr(e,null,a,o)):st(t,e,a,o),e.memoizedState=n.state,i&&fa(e,r,!0),e.child}function Od(t){var e=t.stateNode;e.pendingContext?ma(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ma(t,e.context,!1),ms(t,e.containerInfo)}function xa(t,e,r,n,i){return Xe(),ds(i),e.flags|=256,st(t,e,r,n),e.child}var Eo={dehydrated:null,treeContext:null,retryLane:0};function Ro(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ld(t,e,r){var n=e.pendingProps,i=G.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),L(G,i&1),t===null)return wo(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=n.children,t=n.fallback,o?(n=e.mode,o=e.child,s={mode:"hidden",children:s},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=gi(s,n,0,null),t=Pe(t,n,r,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Ro(r),e.memoizedState=Eo,t):bs(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return cg(t,e,s,n,a,i,r);if(o){o=n.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:n.children};return!(s&1)&&e.child!==i?(n=e.child,n.childLanes=0,n.pendingProps=l,e.deletions=null):(n=ce(i,l),n.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=ce(a,o):(o=Pe(o,s,r,null),o.flags|=2),o.return=e,n.return=e,n.sibling=o,e.child=n,n=o,o=e.child,s=t.child.memoizedState,s=s===null?Ro(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~r,e.memoizedState=Eo,n}return o=t.child,t=o.sibling,n=ce(o,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n}function bs(t,e){return e=gi({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function mn(t,e,r,n){return n!==null&&ds(n),tr(e,t.child,null,r),t=bs(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function cg(t,e,r,n,i,o,s){if(r)return e.flags&256?(e.flags&=-257,n=Ui(Error(v(422))),mn(t,e,s,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=n.fallback,i=e.mode,n=gi({mode:"visible",children:n.children},i,0,null),o=Pe(o,i,s,null),o.flags|=2,n.return=e,o.return=e,n.sibling=o,e.child=n,e.mode&1&&tr(e,t.child,null,s),e.child.memoizedState=Ro(s),e.memoizedState=Eo,o);if(!(e.mode&1))return mn(t,e,s,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var a=n.dgst;return n=a,o=Error(v(419)),n=Ui(o,n,void 0),mn(t,e,s,n)}if(a=(s&t.childLanes)!==0,ut||a){if(n=J,n!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,_t(t,i),Nt(n,t,i,-1))}return Es(),n=Ui(Error(v(421))),mn(t,e,s,n)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=bg.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,ft=se(i.nextSibling),yt=e,W=!0,Tt=null,t!==null&&(At[wt++]=Ut,At[wt++]=Vt,At[wt++]=Ie,Ut=t.id,Vt=t.overflow,Ie=e),e=bs(e,n.children),e.flags|=4096,e)}function Na(t,e,r){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),bo(t.return,e,r)}function Vi(t,e,r,n,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function Fd(t,e,r){var n=e.pendingProps,i=n.revealOrder,o=n.tail;if(st(t,e,n.children,r),n=G.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Na(t,r,e);else if(t.tag===19)Na(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(L(G,n),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(r=e.child,i=null;r!==null;)t=r.alternate,t!==null&&_n(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=e.child,e.child=null):(i=r.sibling,r.sibling=null),Vi(e,!1,i,r,o);break;case"backwards":for(r=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&_n(t)===null){e.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}Vi(e,!0,r,null,o);break;case"together":Vi(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Mn(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $t(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),De|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(v(153));if(e.child!==null){for(t=e.child,r=ce(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=ce(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function ug(t,e,r){switch(e.tag){case 3:Od(e),Xe();break;case 5:dd(e);break;case 1:pt(e.type)&&jn(e);break;case 4:ms(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,i=e.memoizedProps.value;L(Hn,n._currentValue),n._currentValue=i;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(L(G,G.current&1),e.flags|=128,null):r&e.child.childLanes?Ld(t,e,r):(L(G,G.current&1),t=$t(t,e,r),t!==null?t.sibling:null);L(G,G.current&1);break;case 19:if(n=(r&e.childLanes)!==0,t.flags&128){if(n)return Fd(t,e,r);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),L(G,G.current),n)break;return null;case 22:case 23:return e.lanes=0,Nd(t,e,r)}return $t(t,e,r)}var Bd,To,Wd,Gd;Bd=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};To=function(){};Wd=function(t,e,r,n){var i=t.memoizedProps;if(i!==n){t=e.stateNode,we(Wt.current);var o=null;switch(r){case"input":i=Zi(t,i),n=Zi(t,n),o=[];break;case"select":i=U({},i,{value:void 0}),n=U({},n,{value:void 0}),o=[];break;case"textarea":i=eo(t,i),n=eo(t,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=Wn)}no(r,n);var s;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Rr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var l=n[u];if(a=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(r||(r={}),r[s]=l[s])}else r||(o||(o=[]),o.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Rr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&F("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}r&&(o=o||[]).push("style",r);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Gd=function(t,e,r,n){r!==n&&(e.flags|=4)};function mr(t,e){if(!W)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,n=0;if(e)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=r,e}function gg(t,e,r){var n=e.pendingProps;switch(ls(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(e),null;case 1:return pt(e.type)&&Gn(),nt(e),null;case 3:return n=e.stateNode,er(),B(gt),B(ot),ys(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(pn(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Tt!==null&&(Wo(Tt),Tt=null))),To(t,e),nt(e),null;case 5:fs(e);var i=we(Ur.current);if(r=e.type,t!==null&&e.stateNode!=null)Wd(t,e,r,n,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(v(166));return nt(e),null}if(t=we(Wt.current),pn(e)){n=e.stateNode,r=e.type;var o=e.memoizedProps;switch(n[Ft]=e,n[Gr]=o,t=(e.mode&1)!==0,r){case"dialog":F("cancel",n),F("close",n);break;case"iframe":case"object":case"embed":F("load",n);break;case"video":case"audio":for(i=0;i<Cr.length;i++)F(Cr[i],n);break;case"source":F("error",n);break;case"img":case"image":case"link":F("error",n),F("load",n);break;case"details":F("toggle",n);break;case"input":Us(n,o),F("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},F("invalid",n);break;case"textarea":Hs(n,o),F("invalid",n)}no(r,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?n.textContent!==a&&(o.suppressHydrationWarning!==!0&&gn(n.textContent,a,t),i=["children",a]):typeof a=="number"&&n.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&gn(n.textContent,a,t),i=["children",""+a]):Rr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&F("scroll",n)}switch(r){case"input":nn(n),Vs(n,o,!0);break;case"textarea":nn(n),Ks(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=Wn)}n=i,e.updateQueue=n,n!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hl(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=s.createElement(r,{is:n.is}):(t=s.createElement(r),r==="select"&&(s=t,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):t=s.createElementNS(t,r),t[Ft]=e,t[Gr]=n,Bd(t,e,!1,!1),e.stateNode=t;t:{switch(s=io(r,n),r){case"dialog":F("cancel",t),F("close",t),i=n;break;case"iframe":case"object":case"embed":F("load",t),i=n;break;case"video":case"audio":for(i=0;i<Cr.length;i++)F(Cr[i],t);i=n;break;case"source":F("error",t),i=n;break;case"img":case"image":case"link":F("error",t),F("load",t),i=n;break;case"details":F("toggle",t),i=n;break;case"input":Us(t,n),i=Zi(t,n),F("invalid",t);break;case"option":i=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},i=U({},n,{value:void 0}),F("invalid",t);break;case"textarea":Hs(t,n),i=eo(t,n),F("invalid",t);break;default:i=n}no(r,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?yl(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ml(t,l)):o==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Tr(t,l):typeof l=="number"&&Tr(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Rr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&F("scroll",t):l!=null&&_o(t,o,l,s))}switch(r){case"input":nn(t),Vs(t,n,!1);break;case"textarea":nn(t),Ks(t);break;case"option":n.value!=null&&t.setAttribute("value",""+ue(n.value));break;case"select":t.multiple=!!n.multiple,o=n.value,o!=null?Ke(t,!!n.multiple,o,!1):n.defaultValue!=null&&Ke(t,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Wn)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break t;case"img":n=!0;break t;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nt(e),null;case 6:if(t&&e.stateNode!=null)Gd(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(v(166));if(r=we(Ur.current),we(Wt.current),pn(e)){if(n=e.stateNode,r=e.memoizedProps,n[Ft]=e,(o=n.nodeValue!==r)&&(t=yt,t!==null))switch(t.tag){case 3:gn(n.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gn(n.nodeValue,r,(t.mode&1)!==0)}o&&(e.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Ft]=e,e.stateNode=n}return nt(e),null;case 13:if(B(G),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(W&&ft!==null&&e.mode&1&&!(e.flags&128))id(),Xe(),e.flags|=98560,o=!1;else if(o=pn(e),n!==null&&n.dehydrated!==null){if(t===null){if(!o)throw Error(v(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(v(317));o[Ft]=e}else Xe(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nt(e),o=!1}else Tt!==null&&(Wo(Tt),Tt=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||G.current&1?$===0&&($=3):Es())),e.updateQueue!==null&&(e.flags|=4),nt(e),null);case 4:return er(),To(t,e),t===null&&Br(e.stateNode.containerInfo),nt(e),null;case 10:return gs(e.type._context),nt(e),null;case 17:return pt(e.type)&&Gn(),nt(e),null;case 19:if(B(G),o=e.memoizedState,o===null)return nt(e),null;if(n=(e.flags&128)!==0,s=o.rendering,s===null)if(n)mr(o,!1);else{if($!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=_n(t),s!==null){for(e.flags|=128,mr(o,!1),n=s.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=r,r=e.child;r!==null;)o=r,t=n,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return L(G,G.current&1|2),e.child}t=t.sibling}o.tail!==null&&K()>nr&&(e.flags|=128,n=!0,mr(o,!1),e.lanes=4194304)}else{if(!n)if(t=_n(s),t!==null){if(e.flags|=128,n=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),mr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!W)return nt(e),null}else 2*K()-o.renderingStartTime>nr&&r!==1073741824&&(e.flags|=128,n=!0,mr(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(r=o.last,r!==null?r.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=K(),e.sibling=null,r=G.current,L(G,n?r&1|2:r&1),e):(nt(e),null);case 22:case 23:return Ds(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?mt&1073741824&&(nt(e),e.subtreeFlags&6&&(e.flags|=8192)):nt(e),null;case 24:return null;case 25:return null}throw Error(v(156,e.tag))}function pg(t,e){switch(ls(e),e.tag){case 1:return pt(e.type)&&Gn(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return er(),B(gt),B(ot),ys(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return fs(e),null;case 13:if(B(G),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(v(340));Xe()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return B(G),null;case 4:return er(),null;case 10:return gs(e.type._context),null;case 22:case 23:return Ds(),null;case 24:return null;default:return null}}var fn=!1,it=!1,hg=typeof WeakSet=="function"?WeakSet:Set,k=null;function Ve(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){V(t,e,n)}else r.current=null}function xo(t,e,r){try{r()}catch(n){V(t,e,n)}}var za=!1;function mg(t,e){if(mo=Ln,t=Kl(),ss(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break t}var s=0,a=-1,l=-1,u=0,h=0,f=t,m=null;e:for(;;){for(var S;f!==r||i!==0&&f.nodeType!==3||(a=s+i),f!==o||n!==0&&f.nodeType!==3||(l=s+n),f.nodeType===3&&(s+=f.nodeValue.length),(S=f.firstChild)!==null;)m=f,f=S;for(;;){if(f===t)break e;if(m===r&&++u===i&&(a=s),m===o&&++h===n&&(l=s),(S=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=S}r=a===-1||l===-1?null:{start:a,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(fo={focusedElem:t,selectionRange:r},Ln=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var w=C.memoizedProps,z=C.memoizedState,g=e.stateNode,d=g.getSnapshotBeforeUpdate(e.elementType===e.type?w:Et(e.type,w),z);g.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(y){V(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return C=za,za=!1,C}function Mr(t,e,r){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&xo(e,r,o)}i=i.next}while(i!==n)}}function ci(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var n=r.create;r.destroy=n()}r=r.next}while(r!==e)}}function No(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function jd(t){var e=t.alternate;e!==null&&(t.alternate=null,jd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ft],delete e[Gr],delete e[So],delete e[Ju],delete e[Zu])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ud(t){return t.tag===5||t.tag===3||t.tag===4}function Oa(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ud(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zo(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=Wn));else if(n!==4&&(t=t.child,t!==null))for(zo(t,e,r),t=t.sibling;t!==null;)zo(t,e,r),t=t.sibling}function Oo(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(Oo(t,e,r),t=t.sibling;t!==null;)Oo(t,e,r),t=t.sibling}var Z=null,Rt=!1;function Yt(t,e,r){for(r=r.child;r!==null;)Vd(t,e,r),r=r.sibling}function Vd(t,e,r){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(ri,r)}catch{}switch(r.tag){case 5:it||Ve(r,e);case 6:var n=Z,i=Rt;Z=null,Yt(t,e,r),Z=n,Rt=i,Z!==null&&(Rt?(t=Z,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Z.removeChild(r.stateNode));break;case 18:Z!==null&&(Rt?(t=Z,r=r.stateNode,t.nodeType===8?Li(t.parentNode,r):t.nodeType===1&&Li(t,r),Or(t)):Li(Z,r.stateNode));break;case 4:n=Z,i=Rt,Z=r.stateNode.containerInfo,Rt=!0,Yt(t,e,r),Z=n,Rt=i;break;case 0:case 11:case 14:case 15:if(!it&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&xo(r,e,s),i=i.next}while(i!==n)}Yt(t,e,r);break;case 1:if(!it&&(Ve(r,e),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(a){V(r,e,a)}Yt(t,e,r);break;case 21:Yt(t,e,r);break;case 22:r.mode&1?(it=(n=it)||r.memoizedState!==null,Yt(t,e,r),it=n):Yt(t,e,r);break;default:Yt(t,e,r)}}function La(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new hg),e.forEach(function(n){var i=Pg.bind(null,t,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Dt(t,e){var r=e.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=t,s=e,a=s;t:for(;a!==null;){switch(a.tag){case 5:Z=a.stateNode,Rt=!1;break t;case 3:Z=a.stateNode.containerInfo,Rt=!0;break t;case 4:Z=a.stateNode.containerInfo,Rt=!0;break t}a=a.return}if(Z===null)throw Error(v(160));Vd(o,s,i),Z=null,Rt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){V(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Hd(e,t),e=e.sibling}function Hd(t,e){var r=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dt(e,t),Ot(t),n&4){try{Mr(3,t,t.return),ci(3,t)}catch(w){V(t,t.return,w)}try{Mr(5,t,t.return)}catch(w){V(t,t.return,w)}}break;case 1:Dt(e,t),Ot(t),n&512&&r!==null&&Ve(r,r.return);break;case 5:if(Dt(e,t),Ot(t),n&512&&r!==null&&Ve(r,r.return),t.flags&32){var i=t.stateNode;try{Tr(i,"")}catch(w){V(t,t.return,w)}}if(n&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=r!==null?r.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&gl(i,o),io(a,s);var u=io(a,o);for(s=0;s<l.length;s+=2){var h=l[s],f=l[s+1];h==="style"?yl(i,f):h==="dangerouslySetInnerHTML"?ml(i,f):h==="children"?Tr(i,f):_o(i,h,f,u)}switch(a){case"input":Xi(i,o);break;case"textarea":pl(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?Ke(i,!!o.multiple,S,!1):m!==!!o.multiple&&(o.defaultValue!=null?Ke(i,!!o.multiple,o.defaultValue,!0):Ke(i,!!o.multiple,o.multiple?[]:"",!1))}i[Gr]=o}catch(w){V(t,t.return,w)}}break;case 6:if(Dt(e,t),Ot(t),n&4){if(t.stateNode===null)throw Error(v(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(w){V(t,t.return,w)}}break;case 3:if(Dt(e,t),Ot(t),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Or(e.containerInfo)}catch(w){V(t,t.return,w)}break;case 4:Dt(e,t),Ot(t);break;case 13:Dt(e,t),Ot(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Is=K())),n&4&&La(t);break;case 22:if(h=r!==null&&r.memoizedState!==null,t.mode&1?(it=(u=it)||h,Dt(e,t),it=u):Dt(e,t),Ot(t),n&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(k=t,h=t.child;h!==null;){for(f=k=h;k!==null;){switch(m=k,S=m.child,m.tag){case 0:case 11:case 14:case 15:Mr(4,m,m.return);break;case 1:Ve(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){n=m,r=m.return;try{e=n,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(w){V(n,r,w)}}break;case 5:Ve(m,m.return);break;case 22:if(m.memoizedState!==null){Ba(f);continue}}S!==null?(S.return=m,k=S):Ba(f)}h=h.sibling}t:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=fl("display",s))}catch(w){V(t,t.return,w)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){V(t,t.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break t;for(;f.sibling===null;){if(f.return===null||f.return===t)break t;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Dt(e,t),Ot(t),n&4&&La(t);break;case 21:break;default:Dt(e,t),Ot(t)}}function Ot(t){var e=t.flags;if(e&2){try{t:{for(var r=t.return;r!==null;){if(Ud(r)){var n=r;break t}r=r.return}throw Error(v(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Tr(i,""),n.flags&=-33);var o=Oa(t);Oo(t,o,i);break;case 3:case 4:var s=n.stateNode.containerInfo,a=Oa(t);zo(t,a,s);break;default:throw Error(v(161))}}catch(l){V(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fg(t,e,r){k=t,Kd(t)}function Kd(t,e,r){for(var n=(t.mode&1)!==0;k!==null;){var i=k,o=i.child;if(i.tag===22&&n){var s=i.memoizedState!==null||fn;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||it;a=fn;var u=it;if(fn=s,(it=l)&&!u)for(k=i;k!==null;)s=k,l=s.child,s.tag===22&&s.memoizedState!==null?Wa(i):l!==null?(l.return=s,k=l):Wa(i);for(;o!==null;)k=o,Kd(o),o=o.sibling;k=i,fn=a,it=u}Fa(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,k=o):Fa(t)}}function Fa(t){for(;k!==null;){var e=k;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:it||ci(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!it)if(r===null)n.componentDidMount();else{var i=e.elementType===e.type?r.memoizedProps:Et(e.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Aa(e,o,n);break;case 3:var s=e.updateQueue;if(s!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}Aa(e,s,r)}break;case 5:var a=e.stateNode;if(r===null&&e.flags&4){r=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Or(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}it||e.flags&512&&No(e)}catch(m){V(e,e.return,m)}}if(e===t){k=null;break}if(r=e.sibling,r!==null){r.return=e.return,k=r;break}k=e.return}}function Ba(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var r=e.sibling;if(r!==null){r.return=e.return,k=r;break}k=e.return}}function Wa(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{ci(4,e)}catch(l){V(e,r,l)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var i=e.return;try{n.componentDidMount()}catch(l){V(e,i,l)}}var o=e.return;try{No(e)}catch(l){V(e,o,l)}break;case 5:var s=e.return;try{No(e)}catch(l){V(e,s,l)}}}catch(l){V(e,e.return,l)}if(e===t){k=null;break}var a=e.sibling;if(a!==null){a.return=e.return,k=a;break}k=e.return}}var yg=Math.ceil,Yn=Qt.ReactCurrentDispatcher,Ps=Qt.ReactCurrentOwner,Pt=Qt.ReactCurrentBatchConfig,x=0,J=null,q=null,tt=0,mt=0,He=he(0),$=0,qr=null,De=0,ui=0,ks=0,Dr=null,ct=null,Is=0,nr=1/0,Gt=null,Jn=!1,Lo=null,le=null,yn=!1,re=null,Zn=0,Er=0,Fo=null,Dn=-1,En=0;function at(){return x&6?K():Dn!==-1?Dn:Dn=K()}function de(t){return t.mode&1?x&2&&tt!==0?tt&-tt:tg.transition!==null?(En===0&&(En=El()),En):(t=N,t!==0||(t=window.event,t=t===void 0?16:Ll(t.type)),t):1}function Nt(t,e,r,n){if(50<Er)throw Er=0,Fo=null,Error(v(185));$r(t,r,n),(!(x&2)||t!==J)&&(t===J&&(!(x&2)&&(ui|=r),$===4&&te(t,tt)),ht(t,n),r===1&&x===0&&!(e.mode&1)&&(nr=K()+500,ai&&me()))}function ht(t,e){var r=t.callbackNode;tu(t,e);var n=On(t,t===J?tt:0);if(n===0)r!==null&&$s(r),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(r!=null&&$s(r),e===1)t.tag===0?Xu(Ga.bind(null,t)):ed(Ga.bind(null,t)),Qu(function(){!(x&6)&&me()}),r=null;else{switch(Rl(n)){case 1:r=Zo;break;case 4:r=Ml;break;case 16:r=zn;break;case 536870912:r=Dl;break;default:r=zn}r=Xd(r,qd.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function qd(t,e){if(Dn=-1,En=0,x&6)throw Error(v(327));var r=t.callbackNode;if(Ye()&&t.callbackNode!==r)return null;var n=On(t,t===J?tt:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=Xn(t,n);else{e=n;var i=x;x|=2;var o=$d();(J!==t||tt!==e)&&(Gt=null,nr=K()+500,be(t,e));do try{Cg();break}catch(a){_d(t,a)}while(!0);us(),Yn.current=o,x=i,q!==null?e=0:(J=null,tt=0,e=$)}if(e!==0){if(e===2&&(i=co(t),i!==0&&(n=i,e=Bo(t,i))),e===1)throw r=qr,be(t,0),te(t,n),ht(t,K()),r;if(e===6)te(t,n);else{if(i=t.current.alternate,!(n&30)&&!vg(i)&&(e=Xn(t,n),e===2&&(o=co(t),o!==0&&(n=o,e=Bo(t,o))),e===1))throw r=qr,be(t,0),te(t,n),ht(t,K()),r;switch(t.finishedWork=i,t.finishedLanes=n,e){case 0:case 1:throw Error(v(345));case 2:Se(t,ct,Gt);break;case 3:if(te(t,n),(n&130023424)===n&&(e=Is+500-K(),10<e)){if(On(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){at(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=vo(Se.bind(null,t,ct,Gt),e);break}Se(t,ct,Gt);break;case 4:if(te(t,n),(n&4194240)===n)break;for(e=t.eventTimes,i=-1;0<n;){var s=31-xt(n);o=1<<s,s=e[s],s>i&&(i=s),n&=~o}if(n=i,n=K()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*yg(n/1960))-n,10<n){t.timeoutHandle=vo(Se.bind(null,t,ct,Gt),n);break}Se(t,ct,Gt);break;case 5:Se(t,ct,Gt);break;default:throw Error(v(329))}}}return ht(t,K()),t.callbackNode===r?qd.bind(null,t):null}function Bo(t,e){var r=Dr;return t.current.memoizedState.isDehydrated&&(be(t,e).flags|=256),t=Xn(t,e),t!==2&&(e=ct,ct=r,e!==null&&Wo(e)),t}function Wo(t){ct===null?ct=t:ct.push.apply(ct,t)}function vg(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!zt(o(),i))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function te(t,e){for(e&=~ks,e&=~ui,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-xt(e),n=1<<r;t[r]=-1,e&=~n}}function Ga(t){if(x&6)throw Error(v(327));Ye();var e=On(t,0);if(!(e&1))return ht(t,K()),null;var r=Xn(t,e);if(t.tag!==0&&r===2){var n=co(t);n!==0&&(e=n,r=Bo(t,n))}if(r===1)throw r=qr,be(t,0),te(t,e),ht(t,K()),r;if(r===6)throw Error(v(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Se(t,ct,Gt),ht(t,K()),null}function Ms(t,e){var r=x;x|=1;try{return t(e)}finally{x=r,x===0&&(nr=K()+500,ai&&me())}}function Ee(t){re!==null&&re.tag===0&&!(x&6)&&Ye();var e=x;x|=1;var r=Pt.transition,n=N;try{if(Pt.transition=null,N=1,t)return t()}finally{N=n,Pt.transition=r,x=e,!(x&6)&&me()}}function Ds(){mt=He.current,B(He)}function be(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,$u(r)),q!==null)for(r=q.return;r!==null;){var n=r;switch(ls(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Gn();break;case 3:er(),B(gt),B(ot),ys();break;case 5:fs(n);break;case 4:er();break;case 13:B(G);break;case 19:B(G);break;case 10:gs(n.type._context);break;case 22:case 23:Ds()}r=r.return}if(J=t,q=t=ce(t.current,null),tt=mt=e,$=0,qr=null,ks=ui=De=0,ct=Dr=null,Ae!==null){for(e=0;e<Ae.length;e++)if(r=Ae[e],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var s=o.next;o.next=i,n.next=s}r.pending=n}Ae=null}return t}function _d(t,e){do{var r=q;try{if(us(),kn.current=Qn,$n){for(var n=j.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}$n=!1}if(Me=0,Y=_=j=null,Ir=!1,Vr=0,Ps.current=null,r===null||r.return===null){$=1,qr=e,q=null;break}t:{var o=t,s=r.return,a=r,l=e;if(e=tt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var S=Ma(s);if(S!==null){S.flags&=-257,Da(S,s,a,o,e),S.mode&1&&Ia(o,u,e),e=S,l=u;var C=e.updateQueue;if(C===null){var w=new Set;w.add(l),e.updateQueue=w}else C.add(l);break t}else{if(!(e&1)){Ia(o,u,e),Es();break t}l=Error(v(426))}}else if(W&&a.mode&1){var z=Ma(s);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Da(z,s,a,o,e),ds(rr(l,a));break t}}o=l=rr(l,a),$!==4&&($=2),Dr===null?Dr=[o]:Dr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var g=Rd(o,l,e);Ca(o,g);break t;case 1:a=l;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(le===null||!le.has(p)))){o.flags|=65536,e&=-e,o.lanes|=e;var y=Td(o,a,e);Ca(o,y);break t}}o=o.return}while(o!==null)}Yd(r)}catch(P){e=P,q===r&&r!==null&&(q=r=r.return);continue}break}while(!0)}function $d(){var t=Yn.current;return Yn.current=Qn,t===null?Qn:t}function Es(){($===0||$===3||$===2)&&($=4),J===null||!(De&268435455)&&!(ui&268435455)||te(J,tt)}function Xn(t,e){var r=x;x|=2;var n=$d();(J!==t||tt!==e)&&(Gt=null,be(t,e));do try{Sg();break}catch(i){_d(t,i)}while(!0);if(us(),x=r,Yn.current=n,q!==null)throw Error(v(261));return J=null,tt=0,$}function Sg(){for(;q!==null;)Qd(q)}function Cg(){for(;q!==null&&!Kc();)Qd(q)}function Qd(t){var e=Zd(t.alternate,t,mt);t.memoizedProps=t.pendingProps,e===null?Yd(t):q=e,Ps.current=null}function Yd(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=pg(r,e),r!==null){r.flags&=32767,q=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$=6,q=null;return}}else if(r=gg(r,e,mt),r!==null){q=r;return}if(e=e.sibling,e!==null){q=e;return}q=e=t}while(e!==null);$===0&&($=5)}function Se(t,e,r){var n=N,i=Pt.transition;try{Pt.transition=null,N=1,Ag(t,e,r,n)}finally{Pt.transition=i,N=n}return null}function Ag(t,e,r,n){do Ye();while(re!==null);if(x&6)throw Error(v(327));r=t.finishedWork;var i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(v(177));t.callbackNode=null,t.callbackPriority=0;var o=r.lanes|r.childLanes;if(eu(t,o),t===J&&(q=J=null,tt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||yn||(yn=!0,Xd(zn,function(){return Ye(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Pt.transition,Pt.transition=null;var s=N;N=1;var a=x;x|=4,Ps.current=null,mg(t,r),Hd(r,t),ju(fo),Ln=!!mo,fo=mo=null,t.current=r,fg(r),qc(),x=a,N=s,Pt.transition=o}else t.current=r;if(yn&&(yn=!1,re=t,Zn=i),o=t.pendingLanes,o===0&&(le=null),Qc(r.stateNode),ht(t,K()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)i=e[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Jn)throw Jn=!1,t=Lo,Lo=null,t;return Zn&1&&t.tag!==0&&Ye(),o=t.pendingLanes,o&1?t===Fo?Er++:(Er=0,Fo=t):Er=0,me(),null}function Ye(){if(re!==null){var t=Rl(Zn),e=Pt.transition,r=N;try{if(Pt.transition=null,N=16>t?16:t,re===null)var n=!1;else{if(t=re,re=null,Zn=0,x&6)throw Error(v(331));var i=x;for(x|=4,k=t.current;k!==null;){var o=k,s=o.child;if(k.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(k=u;k!==null;){var h=k;switch(h.tag){case 0:case 11:case 15:Mr(8,h,o)}var f=h.child;if(f!==null)f.return=h,k=f;else for(;k!==null;){h=k;var m=h.sibling,S=h.return;if(jd(h),h===u){k=null;break}if(m!==null){m.return=S,k=m;break}k=S}}}var C=o.alternate;if(C!==null){var w=C.child;if(w!==null){C.child=null;do{var z=w.sibling;w.sibling=null,w=z}while(w!==null)}}k=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,k=s;else t:for(;k!==null;){if(o=k,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Mr(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,k=g;break t}k=o.return}}var d=t.current;for(k=d;k!==null;){s=k;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,k=p;else t:for(s=d;k!==null;){if(a=k,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ci(9,a)}}catch(P){V(a,a.return,P)}if(a===s){k=null;break t}var y=a.sibling;if(y!==null){y.return=a.return,k=y;break t}k=a.return}}if(x=i,me(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(ri,t)}catch{}n=!0}return n}finally{N=r,Pt.transition=e}}return!1}function ja(t,e,r){e=rr(r,e),e=Rd(t,e,1),t=ae(t,e,1),e=at(),t!==null&&($r(t,1,e),ht(t,e))}function V(t,e,r){if(t.tag===3)ja(t,t,r);else for(;e!==null;){if(e.tag===3){ja(e,t,r);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(le===null||!le.has(n))){t=rr(r,t),t=Td(e,t,1),e=ae(e,t,1),t=at(),e!==null&&($r(e,1,t),ht(e,t));break}}e=e.return}}function wg(t,e,r){var n=t.pingCache;n!==null&&n.delete(e),e=at(),t.pingedLanes|=t.suspendedLanes&r,J===t&&(tt&r)===r&&($===4||$===3&&(tt&130023424)===tt&&500>K()-Is?be(t,0):ks|=r),ht(t,e)}function Jd(t,e){e===0&&(t.mode&1?(e=an,an<<=1,!(an&130023424)&&(an=4194304)):e=1);var r=at();t=_t(t,e),t!==null&&($r(t,e,r),ht(t,r))}function bg(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Jd(t,r)}function Pg(t,e){var r=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(v(314))}n!==null&&n.delete(e),Jd(t,r)}var Zd;Zd=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||gt.current)ut=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return ut=!1,ug(t,e,r);ut=!!(t.flags&131072)}else ut=!1,W&&e.flags&1048576&&rd(e,Vn,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;Mn(t,e),t=e.pendingProps;var i=Ze(e,ot.current);Qe(e,r),i=Ss(null,e,n,t,i,r);var o=Cs();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pt(n)?(o=!0,jn(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hs(e),i.updater=di,e.stateNode=i,i._reactInternals=e,ko(e,n,t,r),e=Do(null,e,n,!0,o,r)):(e.tag=0,W&&o&&as(e),st(null,e,i,r),e=e.child),e;case 16:n=e.elementType;t:{switch(Mn(t,e),t=e.pendingProps,i=n._init,n=i(n._payload),e.type=n,i=e.tag=Ig(n),t=Et(n,t),i){case 0:e=Mo(null,e,n,t,r);break t;case 1:e=Ta(null,e,n,t,r);break t;case 11:e=Ea(null,e,n,t,r);break t;case 14:e=Ra(null,e,n,Et(n.type,t),r);break t}throw Error(v(306,n,""))}return e;case 0:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Et(n,i),Mo(t,e,n,i,r);case 1:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Et(n,i),Ta(t,e,n,i,r);case 3:t:{if(Od(e),t===null)throw Error(v(387));n=e.pendingProps,o=e.memoizedState,i=o.element,ld(t,e),qn(e,n,null,r);var s=e.memoizedState;if(n=s.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=rr(Error(v(423)),e),e=xa(t,e,n,r,i);break t}else if(n!==i){i=rr(Error(v(424)),e),e=xa(t,e,n,r,i);break t}else for(ft=se(e.stateNode.containerInfo.firstChild),yt=e,W=!0,Tt=null,r=sd(e,null,n,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Xe(),n===i){e=$t(t,e,r);break t}st(t,e,n,r)}e=e.child}return e;case 5:return dd(e),t===null&&wo(e),n=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,yo(n,i)?s=null:o!==null&&yo(n,o)&&(e.flags|=32),zd(t,e),st(t,e,s,r),e.child;case 6:return t===null&&wo(e),null;case 13:return Ld(t,e,r);case 4:return ms(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=tr(e,null,n,r):st(t,e,n,r),e.child;case 11:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Et(n,i),Ea(t,e,n,i,r);case 7:return st(t,e,e.pendingProps,r),e.child;case 8:return st(t,e,e.pendingProps.children,r),e.child;case 12:return st(t,e,e.pendingProps.children,r),e.child;case 10:t:{if(n=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,L(Hn,n._currentValue),n._currentValue=s,o!==null)if(zt(o.value,s)){if(o.children===i.children&&!gt.current){e=$t(t,e,r);break t}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===n){if(o.tag===1){l=Ht(-1,r&-r),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),bo(o.return,r,e),a.lanes|=r;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(v(341));s.lanes|=r,a=s.alternate,a!==null&&(a.lanes|=r),bo(s,r,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}st(t,e,i.children,r),e=e.child}return e;case 9:return i=e.type,n=e.pendingProps.children,Qe(e,r),i=kt(i),n=n(i),e.flags|=1,st(t,e,n,r),e.child;case 14:return n=e.type,i=Et(n,e.pendingProps),i=Et(n.type,i),Ra(t,e,n,i,r);case 15:return xd(t,e,e.type,e.pendingProps,r);case 17:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Et(n,i),Mn(t,e),e.tag=1,pt(n)?(t=!0,jn(e)):t=!1,Qe(e,r),Ed(e,n,i),ko(e,n,i,r),Do(null,e,n,!0,t,r);case 19:return Fd(t,e,r);case 22:return Nd(t,e,r)}throw Error(v(156,e.tag))};function Xd(t,e){return Il(t,e)}function kg(t,e,r,n){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(t,e,r,n){return new kg(t,e,r,n)}function Rs(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ig(t){if(typeof t=="function")return Rs(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qo)return 11;if(t===Yo)return 14}return 2}function ce(t,e){var r=t.alternate;return r===null?(r=bt(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Rn(t,e,r,n,i,o){var s=2;if(n=t,typeof t=="function")Rs(t)&&(s=1);else if(typeof t=="string")s=5;else t:switch(t){case ze:return Pe(r.children,i,o,e);case $o:s=8,i|=8;break;case $i:return t=bt(12,r,e,i|2),t.elementType=$i,t.lanes=o,t;case Qi:return t=bt(13,r,e,i),t.elementType=Qi,t.lanes=o,t;case Yi:return t=bt(19,r,e,i),t.elementType=Yi,t.lanes=o,t;case dl:return gi(r,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case al:s=10;break t;case ll:s=9;break t;case Qo:s=11;break t;case Yo:s=14;break t;case Jt:s=16,n=null;break t}throw Error(v(130,t==null?t:typeof t,""))}return e=bt(s,r,e,i),e.elementType=t,e.type=n,e.lanes=o,e}function Pe(t,e,r,n){return t=bt(7,t,n,e),t.lanes=r,t}function gi(t,e,r,n){return t=bt(22,t,n,e),t.elementType=dl,t.lanes=r,t.stateNode={isHidden:!1},t}function Hi(t,e,r){return t=bt(6,t,null,e),t.lanes=r,t}function Ki(t,e,r){return e=bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Mg(t,e,r,n,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ki(0),this.expirationTimes=ki(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ki(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ts(t,e,r,n,i,o,s,a,l){return t=new Mg(t,e,r,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=bt(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},hs(o),t}function Dg(t,e,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ne,key:n==null?null:""+n,children:t,containerInfo:e,implementation:r}}function tc(t){if(!t)return ge;t=t._reactInternals;t:{if(Te(t)!==t||t.tag!==1)throw Error(v(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break t;case 1:if(pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break t}}e=e.return}while(e!==null);throw Error(v(171))}if(t.tag===1){var r=t.type;if(pt(r))return td(t,r,e)}return e}function ec(t,e,r,n,i,o,s,a,l){return t=Ts(r,n,!0,t,i,o,s,a,l),t.context=tc(null),r=t.current,n=at(),i=de(r),o=Ht(n,i),o.callback=e??null,ae(r,o,i),t.current.lanes=i,$r(t,i,n),ht(t,n),t}function pi(t,e,r,n){var i=e.current,o=at(),s=de(i);return r=tc(r),e.context===null?e.context=r:e.pendingContext=r,e=Ht(o,s),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=ae(i,e,s),t!==null&&(Nt(t,i,s,o),Pn(t,i,s)),s}function ti(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ua(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function xs(t,e){Ua(t,e),(t=t.alternate)&&Ua(t,e)}function Eg(){return null}var rc=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ns(t){this._internalRoot=t}hi.prototype.render=Ns.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(v(409));pi(t,e,null,null)};hi.prototype.unmount=Ns.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ee(function(){pi(null,t,null,null)}),e[qt]=null}};function hi(t){this._internalRoot=t}hi.prototype.unstable_scheduleHydration=function(t){if(t){var e=Nl();t={blockedOn:null,target:t,priority:e};for(var r=0;r<Xt.length&&e!==0&&e<Xt[r].priority;r++);Xt.splice(r,0,t),r===0&&Ol(t)}};function zs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function mi(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Va(){}function Rg(t,e,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var u=ti(s);o.call(u)}}var s=ec(e,n,t,0,null,!1,!1,"",Va);return t._reactRootContainer=s,t[qt]=s.current,Br(t.nodeType===8?t.parentNode:t),Ee(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof n=="function"){var a=n;n=function(){var u=ti(l);a.call(u)}}var l=Ts(t,0,!1,null,null,!1,!1,"",Va);return t._reactRootContainer=l,t[qt]=l.current,Br(t.nodeType===8?t.parentNode:t),Ee(function(){pi(e,l,r,n)}),l}function fi(t,e,r,n,i){var o=r._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=ti(s);a.call(l)}}pi(e,s,t,i)}else s=Rg(r,e,t,i,n);return ti(s)}Tl=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Sr(e.pendingLanes);r!==0&&(Xo(e,r|1),ht(e,K()),!(x&6)&&(nr=K()+500,me()))}break;case 13:Ee(function(){var n=_t(t,1);if(n!==null){var i=at();Nt(n,t,1,i)}}),xs(t,1)}};ts=function(t){if(t.tag===13){var e=_t(t,134217728);if(e!==null){var r=at();Nt(e,t,134217728,r)}xs(t,134217728)}};xl=function(t){if(t.tag===13){var e=de(t),r=_t(t,e);if(r!==null){var n=at();Nt(r,t,e,n)}xs(t,e)}};Nl=function(){return N};zl=function(t,e){var r=N;try{return N=t,e()}finally{N=r}};so=function(t,e,r){switch(e){case"input":if(Xi(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var n=r[e];if(n!==t&&n.form===t.form){var i=si(n);if(!i)throw Error(v(90));ul(n),Xi(n,i)}}}break;case"textarea":pl(t,r);break;case"select":e=r.value,e!=null&&Ke(t,!!r.multiple,e,!1)}};Cl=Ms;Al=Ee;var Tg={usingClientEntryPoint:!1,Events:[Yr,Be,si,vl,Sl,Ms]},fr={findFiberByHostInstance:Ce,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xg={bundleType:fr.bundleType,version:fr.version,rendererPackageName:fr.rendererPackageName,rendererConfig:fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Pl(t),t===null?null:t.stateNode},findFiberByHostInstance:fr.findFiberByHostInstance||Eg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vn.isDisabled&&vn.supportsFiber)try{ri=vn.inject(xg),Bt=vn}catch{}}St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tg;St.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zs(e))throw Error(v(200));return Dg(t,e,null,r)};St.createRoot=function(t,e){if(!zs(t))throw Error(v(299));var r=!1,n="",i=rc;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ts(t,1,!1,null,null,r,!1,n,i),t[qt]=e.current,Br(t.nodeType===8?t.parentNode:t),new Ns(e)};St.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(v(188)):(t=Object.keys(t).join(","),Error(v(268,t)));return t=Pl(e),t=t===null?null:t.stateNode,t};St.flushSync=function(t){return Ee(t)};St.hydrate=function(t,e,r){if(!mi(e))throw Error(v(200));return fi(null,t,e,!0,r)};St.hydrateRoot=function(t,e,r){if(!zs(t))throw Error(v(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",s=rc;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),e=ec(e,null,t,1,r??null,i,!1,o,s),t[qt]=e.current,Br(t),n)for(t=0;t<n.length;t++)r=n[t],i=r._getVersion,i=i(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,i]:e.mutableSourceEagerHydrationData.push(r,i);return new hi(e)};St.render=function(t,e,r){if(!mi(e))throw Error(v(200));return fi(null,t,e,!1,r)};St.unmountComponentAtNode=function(t){if(!mi(t))throw Error(v(40));return t._reactRootContainer?(Ee(function(){fi(null,null,t,!1,function(){t._reactRootContainer=null,t[qt]=null})}),!0):!1};St.unstable_batchedUpdates=Ms;St.unstable_renderSubtreeIntoContainer=function(t,e,r,n){if(!mi(r))throw Error(v(200));if(t==null||t._reactInternals===void 0)throw Error(v(38));return fi(t,e,r,!1,n)};St.version="18.3.1-next-f1338f8080-20240426";function nc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nc)}catch(t){console.error(t)}}nc(),nl.exports=St;var Ng=nl.exports,Ha=Ng;qi.createRoot=Ha.createRoot,qi.hydrateRoot=Ha.hydrateRoot;const Zr={veda1:{id:"veda1",title:"Cloud Security",icon:"☁️",sanskritName:"आकाश रक्षा",sanskritPronunciation:"Ākāśa Rakṣā",gradient:"linear-gradient(135deg, #22D3EE, #06B6D4)",description:"Comprehensive coverage of AWS, Azure, and GCP security with detailed service explanations. Guard the digital heavens.",sections:[{id:"cloud-fundamentals",title:"Cloud Fundamentals",icon:"📚",chapters:[{id:"v1c1",title:"Introduction to Cloud Computing",desc:"Fundamentals of cloud computing and security"},{id:"v1c2",title:"Cloud Service Models",desc:"IaaS, PaaS, and SaaS Explained"},{id:"v1c3",title:"Cloud Deployment Models",desc:"Public, Private, Hybrid, and Multi-cloud"},{id:"v1c4",title:"Shared Responsibility Model",desc:"Security shared between provider and customer"},{id:"v1c5",title:"Cloud Attack Surface",desc:"Understanding cloud-specific threats"},{id:"v1c6",title:"Cloud Security Architecture",desc:"Zero Trust and defense in depth"},{id:"v1c7",title:"Cloud Governance",desc:"Policies, controls, and governance"},{id:"v1c8",title:"Cloud Security Roles",desc:"Responsibilities in cloud security"}]},{id:"aws-security",title:"AWS Security",icon:"🌐",chapters:[{id:"v1c9",title:"AWS IAM Deep Dive",desc:"Identity and Access Management"},{id:"v1c10",title:"IAM Policies and Permissions",desc:"JSON policies, roles, boundaries"},{id:"v1c11",title:"AWS Identity Center",desc:"SSO and centralized access"},{id:"v1c12",title:"AWS KMS and Encryption",desc:"Key management and encryption"},{id:"v1c13",title:"AWS VPC Security",desc:"Network isolation and security groups"},{id:"v1c14",title:"AWS S3 Security",desc:"Bucket policies and access controls"},{id:"v1c15",title:"AWS EC2 Security",desc:"Instance hardening"},{id:"v1c16",title:"AWS Lambda Security",desc:"Function security"},{id:"v1c17",title:"AWS CloudTrail",desc:"Audit logging"},{id:"v1c18",title:"AWS GuardDuty",desc:"Threat detection"},{id:"v1c19",title:"AWS Security Hub",desc:"Centralized security view"},{id:"v1c20",title:"AWS Config Rules",desc:"Resource compliance"},{id:"v1c21",title:"AWS WAF & Shield",desc:"Web app and DDoS protection"},{id:"v1c22",title:"AWS Artifact",desc:"Compliance reports"},{id:"v1c23",title:"AWS Security Best Practices",desc:"Comprehensive guidelines"}]},{id:"azure-security",title:"Azure Security",icon:"🔷",chapters:[{id:"v1c24",title:"Azure Active Directory",desc:"Identity and access in Azure"},{id:"v1c25",title:"Azure RBAC",desc:"Role-based access control"},{id:"v1c26",title:"Azure Key Vault",desc:"Secrets and keys management"},{id:"v1c27",title:"Azure Network Security",desc:"NSGs, Firewall, DDoS"},{id:"v1c28",title:"Azure Storage Security",desc:"Blob storage and SAS tokens"},{id:"v1c29",title:"Azure VM Security",desc:"VM hardening and monitoring"},{id:"v1c30",title:"Azure Functions Security",desc:"Serverless security"},{id:"v1c31",title:"Azure Monitor & Log Analytics",desc:"Monitoring and logging"},{id:"v1c32",title:"Azure Sentinel",desc:"SIEM and SOAR"},{id:"v1c33",title:"Azure Defender for Cloud",desc:"Cloud security posture"},{id:"v1c34",title:"Azure Policy",desc:"Policy as code"},{id:"v1c35",title:"Azure Blueprints",desc:"Governance blueprints"},{id:"v1c36",title:"Azure Security Center",desc:"Security center features"},{id:"v1c37",title:"Azure Compliance Manager",desc:"Compliance management"},{id:"v1c38",title:"Azure Security Best Practices",desc:"Azure security guidelines"}]},{id:"gcp-security",title:"GCP Security",icon:"🔶",chapters:[{id:"v1c39",title:"GCP IAM Deep Dive",desc:"Identity and Access Management"},{id:"v1c40",title:"GCP Resource Hierarchy",desc:"Organization, folders, projects"},{id:"v1c41",title:"GCP VPC Security",desc:"VPC networks and firewall rules"},{id:"v1c42",title:"GCP Cloud Storage Security",desc:"Bucket security and ACLs"},{id:"v1c43",title:"GCP Compute Engine Security",desc:"Instance security"},{id:"v1c44",title:"GCP Cloud Functions Security",desc:"Serverless functions"},{id:"v1c45",title:"GCP Cloud Audit Logs",desc:"Audit logging"},{id:"v1c46",title:"GCP Security Command Center",desc:"Security headquarters"},{id:"v1c47",title:"GCP VPC Service Controls",desc:"Data exfiltration protection"},{id:"v1c48",title:"GCP Binary Authorization",desc:"Container trust"},{id:"v1c49",title:"GCP Cloud KMS",desc:"Key management"},{id:"v1c50",title:"GCP Secret Manager",desc:"Secrets management"},{id:"v1c51",title:"GCP Security Scanner",desc:"Web vulnerability scanning"},{id:"v1c52",title:"GCP Artifact Registry Security",desc:"Container registry"},{id:"v1c53",title:"GCP Security Best Practices",desc:"Comprehensive guidelines"}]}]},veda2:{id:"veda2",title:"Compliance",icon:"⚖️",sanskritName:"धर्म नियम",sanskritPronunciation:"Dharma Niyama",gradient:"linear-gradient(135deg, #34D399, #10B981)",description:"Deep dive into major compliance frameworks: CIS, ISO 27001, SOC 2, GDPR, and more. Law of digital dharma.",sections:[{id:"compliance-fundamentals",title:"Compliance Fundamentals",icon:"📖",chapters:[{id:"v2c1",title:"Introduction to Security Compliance",desc:"Compliance basics and importance"},{id:"v2c2",title:"Compliance Frameworks Overview",desc:"Overview of major frameworks"},{id:"v2c3",title:"Compliance vs. Security",desc:"Understanding the difference"},{id:"v2c4",title:"Compliance Assessment Process",desc:"How assessments work"},{id:"v2c5",title:"Compliance Continuous Monitoring",desc:"Ongoing compliance"}]},{id:"cis-controls",title:"CIS Controls",icon:"🛡️",chapters:[{id:"v2c6",title:"CIS Controls Overview",desc:"CIS Critical Security Controls"},{id:"v2c7",title:"Inventory of Enterprise Assets",desc:"Asset management controls"},{id:"v2c8",title:"Inventory of Software",desc:"Software inventory"},{id:"v2c9",title:"Data Protection",desc:"Data at rest and in transit"},{id:"v2c10",title:"Secure Configuration Management",desc:"Secure settings"},{id:"v2c11",title:"Account Management",desc:"User account controls"},{id:"v2c12",title:"Access Control Management",desc:"Access management"},{id:"v2c13",title:"Audit Log Management",desc:"Logging and monitoring"}]},{id:"iso-27001",title:"ISO 27001",icon:"📜",chapters:[{id:"v2c14",title:"ISO 27001 Overview",desc:"ISMS introduction"},{id:"v2c15",title:"ISMS Implementation",desc:"Building an ISMS"},{id:"v2c16",title:"Risk Assessment",desc:"Security risk analysis"},{id:"v2c17",title:"Statement of Applicability",desc:"Scope and controls"},{id:"v2c18",title:"Annex A Controls",desc:"Detailed controls"},{id:"v2c19",title:"Internal Audit",desc:"Audit processes"},{id:"v2c20",title:"Management Review",desc:"Leadership review"},{id:"v2c21",title:"Certification Process",desc:"Getting certified"}]},{id:"soc-2",title:"SOC 2",icon:"✓",chapters:[{id:"v2c22",title:"SOC 2 Overview",desc:"SOC 2 introduction"},{id:"v2c23",title:"Trust Service Criteria",desc:"TSC explained"},{id:"v2c24",title:"Type I vs Type II",desc:"Audit types"},{id:"v2c25",title:"Audit Preparation",desc:"Getting ready for audit"},{id:"v2c26",title:"Continuous Monitoring",desc:"Ongoing compliance"},{id:"v2c27",title:"Reporting",desc:"Report types"}]},{id:"gdpr",title:"GDPR",icon:"🇪🇺",chapters:[{id:"v2c28",title:"GDPR Overview",desc:"General Data Protection Regulation"},{id:"v2c29",title:"Data Subject Rights",desc:"Individual rights"},{id:"v2c30",title:"Lawful Basis for Processing",desc:"Legal grounds"},{id:"v2c31",title:"Data Protection Impact Assessment",desc:"DPIA process"},{id:"v2c32",title:"Data Breach Notification",desc:"Breach reporting"},{id:"v2c33",title:"Data Protection Officer",desc:"DPO role"},{id:"v2c34",title:"Cross-Border Transfers",desc:"International transfers"},{id:"v2c35",title:"Fines and Enforcement",desc:"Penalties"}]},{id:"ccpa",title:"CCPA/CPRA",icon:"🇺🇸",chapters:[{id:"v2c36",title:"CCPA Overview",desc:"California Consumer Privacy Act"},{id:"v2c37",title:"Consumer Rights",desc:"CCPA rights"},{id:"v2c38",title:"Business Obligations",desc:"Requirements"},{id:"v2c39",title:"Enforcement",desc:"CCPA enforcement"},{id:"v2c40",title:"CPRA Updates",desc:"California Privacy Rights Act"}]},{id:"hitrust",title:"HITRUST",icon:"🏥",chapters:[{id:"v2c41",title:"HITRUST Overview",desc:"Healthcare security"},{id:"v2c42",title:"r2R Validated Assessment",desc:"Assessment process"},{id:"v2c43",title:"CSF Certification",desc:"Certification"},{id:"v2c44",title:"Third-Party Assurance",desc:"Vendor security"},{id:"v2c45",title:"Continuous Monitoring",desc:"Ongoing assurance"}]},{id:"cmmc",title:"CMMC",icon:"🪖",chapters:[{id:"v2c46",title:"CMMC Overview",desc:"Cybersecurity Maturity Model"},{id:"v2c47",title:"Level 1-5 Requirements",desc:"Maturity levels"},{id:"v2c48",title:"C3PAO Assessment",desc:"Third-party assessment"},{id:"v2c49",title:"POA&M Process",desc:"Plan of action"},{id:"v2c50",title:"Certification Lifecycle",desc:"Certification"}]},{id:"pci-dss",title:"PCI DSS",icon:"💳",chapters:[{id:"v2c51",title:"PCI DSS Overview",desc:"Payment card security"},{id:"v2c52",title:"12 Requirements",desc:"Detailed requirements"},{id:"v2c53",title:"SAQ Types",desc:"Self-assessment questionnaires"},{id:"v2c54",title:"PA-DSS",desc:"Payment application"},{id:"v2c55",title:"Tokenization",desc:"Tokenization"},{id:"v2c56",title:"Merchant Levels",desc:"Merchant levels"}]},{id:"hipaa",title:"HIPAA",icon:"⚕️",chapters:[{id:"v2c57",title:"HIPAA Overview",desc:"Health insurance portability"},{id:"v2c58",title:"PHI Protection",desc:"Protected health information"},{id:"v2c59",title:"Security Rule",desc:"Security requirements"},{id:"v2c60",title:"Breach Notification",desc:"Breach rules"},{id:"v2c61",title:"Business Associates",desc:"Third-party requirements"}]},{id:"nist",title:"NIST",icon:"📐",chapters:[{id:"v2c62",title:"NIST CSF Overview",desc:"Cybersecurity Framework"},{id:"v2c63",title:"Framework Core",desc:"Core functions"},{id:"v2c64",title:"Implementation Tiers",desc:"Maturity tiers"},{id:"v2c65",title:"Profiles",desc:"Target profiles"},{id:"v2c66",title:"NIST 800-53",desc:"Security controls"}]}]},veda3:{id:"veda3",title:"AppSec",icon:"🛡️",sanskritName:"आयुध रक्षा",sanskritPronunciation:"Āyudha Rakṣā",gradient:"linear-gradient(135deg, #FB7185, #F43F5E)",description:"OWASP Top 10, secure development lifecycle, penetration testing, and vulnerability assessment. Armored protection for applications.",sections:[{id:"secure-development",title:"Secure Development",icon:"💻",chapters:[{id:"v3c1",title:"SDLC Security",desc:"Security in development lifecycle"},{id:"v3c2",title:"Threat Modeling",desc:"STRIDE and attack trees"},{id:"v3c3",title:"Secure Coding Practices",desc:"Writing secure code"},{id:"v3c4",title:"Security Testing",desc:"Testing strategies"},{id:"v3c5",title:"Code Review",desc:"Security code review"},{id:"v3c6",title:"Security Champions",desc:"Building security culture"},{id:"v3c7",title:"DevSecOps Integration",desc:"Shifting security left"},{id:"v3c8",title:"Secure Design Patterns",desc:"Security patterns"}]},{id:"owasp-top-10",title:"OWASP Top 10",icon:"🔝",chapters:[{id:"v3c9",title:"A01:2021 Broken Access Control",desc:"Access control vulnerabilities"},{id:"v3c10",title:"A02:2021 Cryptographic Failures",desc:"Crypto and data exposure"},{id:"v3c11",title:"A03:2021 Injection",desc:"SQL, NoSQL, Command injection"},{id:"v3c12",title:"A04:2021 Insecure Design",desc:"Design flaws"},{id:"v3c13",title:"A05:2021 Security Misconfiguration",desc:"Misconfiguration issues"},{id:"v3c14",title:"A06:2021 Vulnerable Components",desc:"Component vulnerabilities"},{id:"v3c15",title:"A07:2021 Auth Failures",desc:"Authentication issues"},{id:"v3c16",title:"A08:2021 Data Integrity Failures",desc:"Software/data integrity"},{id:"v3c17",title:"A09:2021 Logging Failures",desc:"Logging and monitoring"},{id:"v3c18",title:"A10:2021 SSRF",desc:"Server-side request forgery"}]},{id:"additional-vulnerabilities",title:"Additional Vulnerabilities",icon:"⚠️",chapters:[{id:"v3c19",title:"IDOR",desc:"Insecure Direct Object Reference"},{id:"v3c20",title:"XXE",desc:"XML External Entity"},{id:"v3c21",title:"Deserialization",desc:"Serialization attacks"},{id:"v3c22",title:"Race Conditions",desc:"TOCTOU vulnerabilities"},{id:"v3c23",title:"Business Logic Flaws",desc:"Logic vulnerabilities"},{id:"v3c24",title:"Information Disclosure",desc:"Data leakage"},{id:"v3c25",title:"JWT Attacks",desc:"JSON Web Token attacks"},{id:"v3c26",title:"OAuth Vulnerabilities",desc:"OAuth security"},{id:"v3c27",title:"GraphQL Security",desc:"GraphQL vulnerabilities"},{id:"v3c28",title:"WebSocket Security",desc:"WebSocket attacks"}]},{id:"testing-tools",title:"Testing & Tools",icon:"🔧",chapters:[{id:"v3c29",title:"Burp Suite",desc:"Web security testing"},{id:"v3c30",title:"OWASP ZAP",desc:"OWASP scanning tool"},{id:"v3c31",title:"Static Analysis (SAST)",desc:"Source code analysis"},{id:"v3c32",title:"Dynamic Analysis (DAST)",desc:"Runtime testing"},{id:"v3c33",title:"Interactive Testing (IAST)",desc:"Hybrid testing"},{id:"v3c34",title:"Penetration Testing",desc:"Pen testing methodology"},{id:"v3c35",title:"Fuzzing",desc:"Fuzz testing"},{id:"v3c36",title:"Code Review Tools",desc:"Review automation"},{id:"v3c37",title:"Vulnerability Scanner",desc:"Automated scanning"},{id:"v3c38",title:"Security Regression Testing",desc:"Regression testing"},{id:"v3c39",title:"Bug Bounty",desc:"Bug bounty programs"},{id:"v3c40",title:"Responsible Disclosure",desc:"Disclosure programs"}]}]},veda4:{id:"veda4",title:"DevSecOps",icon:"🔧",sanskritName:"यंत्र सुरक्षा",sanskritPronunciation:"Yantra Surakṣā",gradient:"linear-gradient(135deg, #FBBF24, #F59E0B)",description:"Integrating security into CI/CD pipelines, security automation, and cloud-native security. The sacred machinery of protection.",sections:[{id:"devsecops-fundamentals",title:"DevSecOps Fundamentals",icon:"🔰",chapters:[{id:"v4c1",title:"DevSecOps Introduction",desc:"DevSecOps overview"},{id:"v4c2",title:"Shift-Left Security",desc:"Moving security left"},{id:"v4c3",title:"Security as Code",desc:"Infrastructure as code"},{id:"v4c4",title:"Infrastructure as Code Security",desc:"IaC security"},{id:"v4c5",title:"Pipeline Security",desc:"CI/CD pipeline security"},{id:"v4c6",title:"Automated Security Testing",desc:"Automation in pipelines"},{id:"v4c7",title:"Secure CI/CD",desc:"Hardening pipelines"},{id:"v4c8",title:"DevSecOps Culture",desc:"Building security culture"}]},{id:"tooling",title:"Tooling",icon:"🛠️",chapters:[{id:"v4c9",title:"SAST Tools",desc:"Static analysis tools"},{id:"v4c10",title:"DAST Tools",desc:"Dynamic analysis tools"},{id:"v4c11",title:"SCA Tools",desc:"Dependency scanning"},{id:"v4c12",title:"Container Scanning",desc:"Container security"},{id:"v4c13",title:"IaC Scanning",desc:"Infrastructure scanning"},{id:"v4c14",title:"Secrets Detection",desc:"Secret scanning"},{id:"v4c15",title:"Runtime Protection",desc:"Runtime security"},{id:"v4c16",title:"SIEM Integration",desc:"Log management"},{id:"v4c17",title:"SOAR Integration",desc:"Automation integration"},{id:"v4c18",title:"Monitoring & Alerting",desc:"Observability"}]},{id:"implementation",title:"Implementation",icon:"🚀",chapters:[{id:"v4c19",title:"Building Secure Pipelines",desc:"Pipeline architecture"},{id:"v4c20",title:"Integrating Security in GitOps",desc:"GitOps security"},{id:"v4c21",title:"Policy as Code",desc:"OPA and policies"},{id:"v4c22",title:"Cloud Native Security",desc:"Cloud-native approach"},{id:"v4c23",title:"Zero Trust Pipeline",desc:"Zero trust in CI/CD"},{id:"v4c24",title:"Supply Chain Security",desc:"SBOM and supply chain"},{id:"v4c25",title:"SBOM Management",desc:"Software bill of materials"},{id:"v4c26",title:"Vulnerability Management",desc:"Vuln management"},{id:"v4c27",title:"Incident Response",desc:"Response procedures"},{id:"v4c28",title:"Continuous Compliance",desc:"Always compliant"},{id:"v4c29",title:"Security Metrics",desc:"Measuring security"},{id:"v4c30",title:"Maturity Assessment",desc:"DevSecOps maturity"}]}]},veda5:{id:"veda5",title:"Kubernetes & Containers",icon:"🌀",sanskritName:"घट रक्षा",sanskritPronunciation:"Ghaṭa Rakṣā",gradient:"linear-gradient(135deg, #A78BFA, #8B5CF6)",description:"Container security fundamentals, Kubernetes hardening, and cloud-native security patterns. The eternal wheel of container protection.",sections:[{id:"container-fundamentals",title:"Container Fundamentals",icon:"📦",chapters:[{id:"v5c1",title:"Container Security Overview",desc:"Container security basics"},{id:"v5c2",title:"Docker Security Best Practices",desc:"Docker hardening"},{id:"v5c3",title:"Container Runtime Security",desc:"Runtime protection"},{id:"v5c4",title:"Container Images",desc:"Image security"},{id:"v5c5",title:"Registry Security",desc:"Container registry"},{id:"v5c6",title:"Microsegmentation",desc:"Container segmentation"}]},{id:"kubernetes-architecture",title:"Kubernetes Architecture",icon:"🏗️",chapters:[{id:"v5c7",title:"K8s Security Architecture",desc:"Kubernetes security design"},{id:"v5c8",title:"API Server Security",desc:"API server hardening"},{id:"v5c9",title:"Etcd Security",desc:"Etcd encryption"},{id:"v5c10",title:"Kubelet Security",desc:"Kubelet hardening"},{id:"v5c11",title:"Network Policies",desc:"K8s networking"},{id:"v5c12",title:"RBAC in K8s",desc:"Role-based access"}]},{id:"kubernetes-security",title:"Kubernetes Security",icon:"🔐",chapters:[{id:"v5c13",title:"Pod Security Standards",desc:"PSS and PSA"},{id:"v5c14",title:"Network Policies Deep Dive",desc:"Advanced policies"},{id:"v5c15",title:"Secrets Management",desc:"K8s secrets"},{id:"v5c16",title:"ConfigMaps Security",desc:"ConfigMap handling"},{id:"v5c17",title:"Ingress Security",desc:"Ingress controller"},{id:"v5c18",title:"Service Mesh",desc:"Service mesh security"},{id:"v5c19",title:"Policy Enforcement (OPA)",desc:"Open Policy Agent"},{id:"v5c20",title:"Image Security Scanning",desc:"Trivy and scanning"},{id:"v5c21",title:"Runtime Security",desc:"Falco and detection"},{id:"v5c22",title:"Cluster Auditing",desc:"Audit logs"},{id:"v5c23",title:"Multi-Cluster Security",desc:"Multi-cluster"},{id:"v5c24",title:"Cloud Native Security Tools",desc:"CNSP tools"}]},{id:"kubernetes-operations",title:"Kubernetes Operations",icon:"⚡",chapters:[{id:"v5c25",title:"Secure Cluster Setup",desc:"Hardened clusters"},{id:"v5c26",title:"Workload Security",desc:"Pod security"},{id:"v5c27",title:"Supply Chain Security",desc:"Sigstore and attestations"},{id:"v5c28",title:"Runtime Protection",desc:"Runtime defense"},{id:"v5c29",title:"Monitoring & Logging",desc:"Observability"},{id:"v5c30",title:"Incident Response",desc:"K8s IR"},{id:"v5c31",title:"Disaster Recovery",desc:"Backup and restore"},{id:"v5c32",title:"Compliance Mapping",desc:"K8s compliance"},{id:"v5c33",title:"Benchmark (CIS K8s)",desc:"CIS benchmarks"},{id:"v5c34",title:"Troubleshooting",desc:"Common issues"},{id:"v5c35",title:"Hardening Guide",desc:"Hardening checklist"}]}]},veda6:{id:"veda6",title:"Network Security",icon:"🌐",gradient:"linear-gradient(135deg, #60A5FA, #3B82F6)",description:"Network fundamentals, perimeter security, monitoring, and advanced network protection strategies.",sections:[{id:"network-fundamentals",title:"Network Fundamentals",icon:"📡",chapters:[{id:"v6c1",title:"Network Security Overview",desc:"Network security basics"},{id:"v6c2",title:"OSI Model Security",desc:"Layer-by-layer security"},{id:"v6c3",title:"TCP/IP Security",desc:"Protocol security"},{id:"v6c4",title:"DNS Security",desc:"DNSSEC and DNS filtering"},{id:"v6c5",title:"ARP Security",desc:"ARP spoofing prevention"},{id:"v6c6",title:"DHCP Security",desc:"DHCP attacks"},{id:"v6c7",title:"VLAN Security",desc:"VLAN segmentation"},{id:"v6c8",title:"VPN Technologies",desc:"VPN security"}]},{id:"perimeter-security",title:"Perimeter Security",icon:"🏰",chapters:[{id:"v6c9",title:"Firewall Architecture",desc:"Firewall design"},{id:"v6c10",title:"IDS/IPS",desc:"Intrusion detection"},{id:"v6c11",title:"DDoS Protection",desc:"DDoS mitigation"},{id:"v6c12",title:"WAF",desc:"Web application firewall"},{id:"v6c13",title:"Web Gateway",desc:"Secure web gateway"},{id:"v6c14",title:"Email Security",desc:"Email protection"},{id:"v6c15",title:"DNS Filtering",desc:"DNS-based filtering"},{id:"v6c16",title:"CDN Security",desc:"CDN security features"}]},{id:"network-monitoring",title:"Network Monitoring",icon:"📊",chapters:[{id:"v6c17",title:"SIEM",desc:"Security information"},{id:"v6c18",title:"Network Segmentation",desc:"Segment design"},{id:"v6c19",title:"Zero Trust Network",desc:"Zero trust model"},{id:"v6c20",title:"Microsegmentation",desc:"Fine-grained segmentation"},{id:"v6c21",title:"Network Forensics",desc:"Forensic analysis"},{id:"v6c22",title:"Packet Analysis",desc:"Packet capture"},{id:"v6c23",title:"Flow Analysis",desc:"NetFlow analysis"},{id:"v6c24",title:"Threat Hunting",desc:"Proactive hunting"},{id:"v6c25",title:"Incident Detection",desc:"Detection methods"},{id:"v6c26",title:"SOC Operations",desc:"Security operations"}]},{id:"advanced-topics",title:"Advanced Topics",icon:"🎯",chapters:[{id:"v6c27",title:"Cloud Network Security",desc:"VPC and cloud networking"},{id:"v6c28",title:"Hybrid Cloud Security",desc:"Hybrid connectivity"},{id:"v6c29",title:"5G Security",desc:"5G network security"},{id:"v6c30",title:"IoT Security",desc:"Internet of Things"},{id:"v6c31",title:"SD-WAN Security",desc:"SD-WAN protection"},{id:"v6c32",title:"SASE",desc:"Secure access service edge"},{id:"v6c33",title:"Threat Intelligence",desc:"CTI and feeds"},{id:"v6c34",title:"Red Team Operations",desc:"Red team testing"},{id:"v6c35",title:"Network Automation",desc:"Automation with Python"}]}]}},zg=()=>{const t=[];return Object.values(Zr).forEach(e=>{e.sections.forEach(r=>{r.chapters.forEach(n=>{t.push({...n,vedaId:e.id,vedaTitle:e.title,sectionId:r.id,sectionTitle:r.title})})})}),t},Og={v1c1:`
    <h3>What is Cloud Computing?</h3>
    <p>
      Cloud computing is the delivery of computing services — including servers, storage, databases, networking, software, analytics, and intelligence — over the Internet ("the cloud") to offer faster innovation, flexible resources, and economies of scale. Instead of owning and maintaining physical data centers and servers, you can access technology services on an as-needed basis from a cloud provider.
    </p>

    <div class="info-box">
      <div class="info-title">💡 Key Concept: On-Demand Computing</div>
      <p>Think of cloud computing like electricity. You don't build a power plant in your home — you plug into the grid and pay for what you use. Cloud computing works the same way for IT resources.</p>
    </div>

    <h4>Essential Characteristics of Cloud Computing (NIST Definition)</h4>
    <p>The National Institute of Standards and Technology (NIST) defines five essential characteristics:</p>
    <ol>
      <li><strong>On-Demand Self-Service:</strong> A consumer can unilaterally provision computing capabilities, such as server time and network storage, as needed automatically without requiring human interaction with each service provider.</li>
      <li><strong>Broad Network Access:</strong> Capabilities are available over the network and accessed through standard mechanisms (mobile phones, tablets, laptops, workstations).</li>
      <li><strong>Resource Pooling:</strong> The provider's computing resources are pooled to serve multiple consumers using a multi-tenant model. Resources are dynamically assigned and reassigned according to consumer demand.</li>
      <li><strong>Rapid Elasticity:</strong> Capabilities can be elastically provisioned and released, in some cases automatically, to scale rapidly outward and inward commensurate with demand.</li>
      <li><strong>Measured Service:</strong> Cloud systems automatically control and optimize resource use by leveraging a metering capability, providing transparency for both the provider and consumer.</li>
    </ol>

    <h4>Why Cloud Security Matters</h4>
    <p>Cloud security is critical because organizations are rapidly migrating their infrastructure, applications, and data to cloud environments. This shift introduces new security challenges:</p>
    <ul>
      <li><strong>Loss of Physical Control:</strong> Your data lives on someone else's hardware in a location you may not know.</li>
      <li><strong>Shared Responsibility Model:</strong> Security is split between you and the cloud provider — misunderstanding this boundary is the #1 cause of cloud breaches.</li>
      <li><strong>Expanded Attack Surface:</strong> Internet-facing cloud resources create more entry points for attackers.</li>
      <li><strong>Data Sovereignty:</strong> Your data may cross international borders, subjecting it to different laws and regulations.</li>
      <li><strong>Identity is the New Perimeter:</strong> Traditional network perimeters dissolve in the cloud; identity and access management becomes paramount.</li>
    </ul>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Shared Responsibility Model</div>
      <p>The shared responsibility model defines what the cloud provider is responsible for versus what the customer is responsible for. This varies by service model:</p>
      <ul>
        <li><strong>IaaS:</strong> Provider secures the physical infrastructure; you secure everything above the OS.</li>
        <li><strong>PaaS:</strong> Provider secures runtime, middleware, and OS; you secure your applications and data.</li>
        <li><strong>SaaS:</strong> Provider secures almost everything; you secure your data, identity, and access.</li>
      </ul>
    </div>

    <h4>Cloud Security Benefits</h4>
    <ul>
      <li><strong>Centralized Security:</strong> Security policies can be managed from a single pane of glass.</li>
      <li><strong>Automated Compliance:</strong> Cloud providers invest heavily in certifications (SOC 2, ISO 27001, FedRAMP).</li>
      <li><strong>Built-in Redundancy:</strong> Data replication across availability zones and regions.</li>
      <li><strong>Advanced Threat Detection:</strong> Providers offer AI/ML-powered security services.</li>
    </ul>

    <h4>Cloud Service Models Overview</h4>
    <table>
      <thead>
        <tr>
          <th>Service Model</th>
          <th>What You Manage</th>
          <th>What Provider Manages</th>
          <th>Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>IaaS</strong></td>
          <td>Apps, Data, Runtime, OS</td>
          <td>Virtualization, Servers, Storage, Networking</td>
          <td>EC2, VMs, GCE</td>
        </tr>
        <tr>
          <td><strong>PaaS</strong></td>
          <td>Apps, Data</td>
          <td>Runtime, Middleware, OS, Infrastructure</td>
          <td>Elastic Beanstalk, App Service</td>
        </tr>
        <tr>
          <td><strong>SaaS</strong></td>
          <td>Data, User Access</td>
          <td>Everything else</td>
          <td>Office 365, Salesforce, Dropbox</td>
        </tr>
      </tbody>
    </table>

    <div class="callout">
      <div class="callout-icon">📊</div>
      <div class="callout-content">
        <h4>Market Share Insight</h4>
        <p>As of 2024, AWS holds ~31% of the cloud market, Azure ~25%, and GCP ~12%. The remaining ~32% is spread across Alibaba Cloud, Oracle, IBM, and others. Understanding multi-cloud is increasingly important for security professionals.</p>
      </div>
    </div>
  `,v1c2:`
    <h3>Cloud Service Models: IaaS, PaaS, and SaaS Deep Dive</h3>
    <p>
      Cloud services are delivered in three primary models, each offering different levels of control, flexibility, and management responsibility. Understanding these models is fundamental to securing cloud environments.
    </p>

    <h4>1. Infrastructure as a Service (IaaS)</h4>
    <p>IaaS provides virtualized computing resources over the internet. You rent IT infrastructure — servers, virtual machines, storage, networks — on a pay-as-you-go basis.</p>
    <ul>
      <li><strong>You manage:</strong> Applications, data, runtime, middleware, operating system</li>
      <li><strong>Provider manages:</strong> Virtualization, servers, storage, networking</li>
      <li><strong>Examples:</strong> AWS EC2, Azure Virtual Machines, Google Compute Engine</li>
      <li><strong>Security responsibility:</strong> Heaviest on the customer</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Example: Running a Web Application on IaaS</div>
      <p>You launch a virtual machine (EC2 instance), install the web server (Nginx/Apache), deploy your application code, configure the database, manage the operating system patches, and configure the firewall rules. The cloud provider ensures the physical server and network hardware are secure.</p>
    </div>

    <h4>2. Platform as a Service (PaaS)</h4>
    <p>PaaS provides a platform allowing customers to develop, run, and manage applications without dealing with the underlying infrastructure complexity.</p>
    <ul>
      <li><strong>You manage:</strong> Applications and data</li>
      <li><strong>Provider manages:</strong> Runtime, middleware, operating system, virtualization, servers, storage, networking</li>
      <li><strong>Examples:</strong> AWS Elastic Beanstalk, Azure App Service, Google App Engine, Heroku</li>
      <li><strong>Security responsibility:</strong> Moderate — provider handles most infrastructure security</li>
    </ul>

    <h5>PaaS Security Considerations</h5>
    <ul>
      <li><strong>Runtime Security:</strong> While the provider patches the runtime, you control application-level security</li>
      <li><strong>Data Protection:</strong> Your data in the PaaS database must still be encrypted and access-controlled by you</li>
      <li><strong>Application Secrets:</strong> Use managed secret stores (AWS Secrets Manager, Azure Key Vault) rather than hardcoded credentials</li>
    </ul>

    <h4>3. Software as a Service (SaaS)</h4>
    <p>SaaS delivers fully functional software applications over the internet, typically via a web browser. The provider manages everything.</p>
    <ul>
      <li><strong>You manage:</strong> Data, user access, and configuration settings</li>
      <li><strong>Provider manages:</strong> Everything else — application, runtime, middleware, OS, virtualization, servers, storage, networking</li>
      <li><strong>Examples:</strong> Microsoft 365, Google Workspace, Salesforce, Dropbox</li>
      <li><strong>Security responsibility:</strong> Lightweight — focused on data classification and access control</li>
    </ul>

    <h5>SaaS Security Best Practices</h5>
    <ol>
      <li><strong>Data Classification:</strong> Know what data you're putting in SaaS applications</li>
      <li><strong>Access Control:</strong> Enforce MFA, use SSO with identity providers</li>
      <li><strong>CASB Deployment:</strong> Cloud Access Security Brokers monitor and control SaaS usage</li>
      <li><strong>Shadow IT Discovery:</strong> Monitor for unauthorized SaaS usage in your organization</li>
    </ol>

    <h4>Security Comparison Table</h4>
    <table>
      <thead>
        <tr>
          <th>Aspect</th>
          <th>IaaS</th>
          <th>PaaS</th>
          <th>SaaS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Customer Control Level</td>
          <td>High</td>
          <td>Medium</td>
          <td>Low</td>
        </tr>
        <tr>
          <td>Customer Security Responsibility</td>
          <td>OS, Apps, Data, Runtime</td>
          <td>Apps, Data</td>
          <td>Data, Access</td>
        </tr>
        <tr>
          <td>Flexibility</td>
          <td>Very High</td>
          <td>Moderate</td>
          <td>Limited</td>
        </tr>
        <tr>
          <td>Management Overhead</td>
          <td>High</td>
          <td>Low</td>
          <td>Minimal</td>
        </tr>
        <tr>
          <td>Security Risk Surface</td>
          <td>Largest (more you manage)</td>
          <td>Medium</td>
          <td>Smallest</td>
        </tr>
        <tr>
          <td>Use Case</td>
          <td>Full control needed</td>
          <td>Dev-focused teams</td>
          <td>End-user applications</td>
        </tr>
      </tbody>
    </table>

    <h4>The "as-a-Service" Expansion</h4>
    <p>Beyond the Big Three, modern cloud offerings include:</p>
    <ul>
      <li><strong>FaaS (Function as a Service):</strong> Serverless computing (AWS Lambda, Azure Functions) — you only code the function, provider manages everything else</li>
      <li><strong>DaaS (Desktop as a Service):</strong> Virtual desktops (Amazon WorkSpaces, Azure Virtual Desktop)</li>
      <li><strong>DBaaS (Database as a Service):</strong> Managed databases (Amazon RDS, Azure SQL Database)</li>
      <li><strong>STaaS (Storage as a Service):</strong> Cloud storage (Amazon S3, Azure Blob Storage)</li>
      <li><strong>SECaaS (Security as a Service):</strong> Cloud security tools (Cloudflare, Zscaler, CrowdStrike Falcon Go)</li>
      <li><strong>Kubernetes as a Service:</strong> Managed Kubernetes (EKS, AKS, GKE)</li>
    </ul>

    <div class="warning-box">
      <div class="warning-title">⚠️ Security Warning</div>
      <p>The more the provider manages, the less you control. In SaaS environments, you're trusting the provider's security entirely for the application layer. Always verify the provider's security certifications (SOC 2 Type II, ISO 27001) and understand the shared responsibility boundaries. Never assume security = convenience.</p>
    </div>
  `,v1c3:`
    <h3>Cloud Deployment Models</h3>
    <p>
      Cloud deployment models define where your infrastructure lives, who has access, and how resources are managed. Each model has distinct security implications that every security professional must understand.
    </p>

    <h4>1. Public Cloud</h4>
    <p>A public cloud is owned and operated by a third-party cloud service provider, which delivers computing resources over the internet.</p>
    <ul>
      <li><strong>Ownership:</strong> Cloud provider owns and manages all hardware and software</li>
      <li><strong>Access:</strong> Open to the general public or a large industry group</li>
      <li><strong>Examples:</strong> AWS, Azure, GCP, IBM Cloud, Oracle Cloud, Alibaba Cloud</li>
      <li><strong>Multi-tenancy:</strong> Resources are shared among multiple customers (tenants) with strong logical isolation</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 How Multi-Tenancy Works</div>
      <p>In a public cloud, thousands of customers share the same physical servers, storage arrays, and network equipment. Each tenant's data is logically isolated through:</p>
      <ul>
        <li>Hypervisor-level virtualization (each VM is isolated)</li>
        <li>Network segmentation (VPCs, security groups)</li>
        <li>Encryption (each tenant's data encrypted with unique keys)</li>
        <li>Identity and access controls</li>
      </ul>
      <p>This is similar to an apartment building — everyone shares the same structure, but each apartment has its own lock and walls.</p>
    </div>

    <h4>2. Private Cloud</h4>
    <p>A private cloud is dedicated to a single organization. It can be hosted on-premises, in a colocation facility, or by a third-party provider, but the infrastructure is exclusively used by one entity.</p>
    <ul>
      <li><strong>Ownership:</strong> Single organization or dedicated third-party</li>
      <li><strong>Access:</strong> Restricted to internal users or specific partners</li>
      <li><strong>Examples:</strong> VMware vSphere, OpenStack, Nutanix AHV, Red Hat OpenShift</li>
      <li><strong>Best for:</strong> Highly regulated industries (banking, healthcare, government)</li>
    </ul>

    <h4>3. Hybrid Cloud</h4>
    <p>A hybrid cloud combines public and private clouds, allowing data and applications to flow between them. This is the most common enterprise deployment today.</p>
    <div class="callout">
      <div class="callout-icon">🏗️</div>
      <div class="callout-content">
        <h4>Hybrid Cloud Architecture</h4>
        <p>Typical pattern: Keep sensitive databases and regulated workloads on-premises (private cloud), while running web applications and development environments in the public cloud. Connectivity is established through VPN tunnels or dedicated connections (AWS Direct Connect, Azure ExpressRoute).</p>
      </div>
    </div>
    <ul>
      <li><strong>Benefits:</strong> Flexibility, scalability, compliance</li>
      <li><strong>Challenge:</strong> Consistent security policies across both environments</li>
      <li><strong>Examples:</strong> Azure Arc, AWS Outposts, Google Distributed Cloud</li>
    </ul>

    <h4>4. Multi-Cloud</h4>
    <p>A multi-cloud strategy uses two or more cloud providers simultaneously.</p>
    <ul>
      <li><strong>Motivation:</strong> Avoid vendor lock-in, leverage best-of-breed services, geographic redundancy, regulatory compliance</li>
      <li><strong>Security Challenge:</strong> Each provider has different security tools, APIs, policies, and dashboards — creating a fragmented security posture</li>
      <li><strong>Solution:</strong> Cloud Security Posture Management (CSPM) tools like Prisma Cloud, Wiz, Orca, or Lacework</li>
    </ul>

    <h4>5. Community Cloud</h4>
    <p>A community cloud is shared by several organizations with common concerns (security requirements, compliance mandates, policy).</p>
    <ul>
      <li><strong>Examples:</strong> Government clouds (AWS GovCloud, Azure Government), healthcare consortium clouds</li>
      <li><strong>Benefit:</strong> Shared costs while meeting specific compliance requirements</li>
    </ul>

    <div class="callout">
      <div class="callout-icon">🎯</div>
      <div class="callout-content">
        <h4>Deployment Model Selection Guide</h4>
        <p><strong>Heavily regulated industries</strong> (healthcare, finance, government) → Hybrid or Private cloud for sensitive workloads.<br>
        <strong>Startups & digital natives</strong> → Public cloud for speed and cost efficiency.<br>
        <strong>Large enterprises</strong> → Multi-cloud or Hybrid for flexibility and risk distribution.<br>
        <strong>Data sovereignty requirements</strong> → Private cloud or specific public cloud regions.</p>
      </div>
    </div>
  `,v1c4:`
    <h3>The Shared Responsibility Model</h3>
    <p>
      The shared responsibility model is the <mark>single most important concept</mark> in cloud security. Misunderstanding who is responsible for what leads to security gaps that attackers exploit.
    </p>

    <h4>The Core Principle</h4>
    <p>Cloud security is a <strong>shared</strong> responsibility between the cloud provider and the customer. The provider secures <em>the cloud</em> (infrastructure), while the customer secures <em>in the cloud</em> (their data, applications, configurations).</p>

    <blockquote>
      "The cloud provider is responsible for security <em>of</em> the cloud. The customer is responsible for security <em>in</em> the cloud."
      <br>— AWS Shared Responsibility Model
    </blockquote>

    <h4>Responsibility Breakdown by Service Type</h4>

    <table>
      <thead>
        <tr>
          <th>Security Area</th>
          <th>IaaS</th>
          <th>PaaS</th>
          <th>SaaS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Physical Datacenter</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
        </tr>
        <tr>
          <td>Network Infrastructure</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
        </tr>
        <tr>
          <td>Hypervisor / Virtualization</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
        </tr>
        <tr>
          <td>Operating System</td>
          <td style="color:#FFD700;font-weight:600;">🔶 Customer</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
        </tr>
        <tr>
          <td>Middleware</td>
          <td style="color:#FFD700;font-weight:600;">🔶 Customer</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
        </tr>
        <tr>
          <td>Runtime</td>
          <td style="color:#FFD700;font-weight:600;">🔶 Customer</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
        </tr>
        <tr>
          <td>Applications</td>
          <td style="color:#FFD700;font-weight:600;">🔶 Customer</td>
          <td style="color:#FFD700;font-weight:600;">🔶 Customer</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
        </tr>
        <tr>
          <td>Data</td>
          <td style="color:#FFD700;font-weight:600;">🔶 Customer</td>
          <td style="color:#FFD700;font-weight:600;">🔶 Customer</td>
          <td style="color:#FFD700;font-weight:600;">🔶 Customer</td>
        </tr>
        <tr>
          <td>Identity &amp; Access</td>
          <td style="color:#FFD700;font-weight:600;">🔶 Customer</td>
          <td style="color:#FFD700;font-weight:600;">🔶 Customer</td>
          <td style="color:#FFD700;font-weight:600;">🔶 Customer</td>
        </tr>
        <tr>
          <td>Configuration</td>
          <td style="color:#E11D48;font-weight:600;">🔴 Customer</td>
          <td style="color:#E11D48;font-weight:600;">🔴 Customer</td>
          <td style="color:#E11D48;font-weight:600;">🔴 Customer</td>
        </tr>
      </tbody>
    </table>

    <h4>Provider-Specific Responsibility Models</h4>

    <h5>AWS Shared Responsibility Model</h5>
    <ul>
      <li><strong>AWS is responsible for:</strong> Security <em>of</em> the cloud — protecting the infrastructure (hardware, software, networking, facilities)</li>
      <li><strong>Customer is responsible for:</strong> Security <em>in</em> the cloud — customer data, platform, applications, identity and access management, data encryption</li>
      <li><strong>Key documents:</strong> AWS Well-Architected Framework, AWS Security Hub findings</li>
    </ul>

    <h5>Azure Shared Responsibility Model</h5>
    <ul>
      <li><strong>Microsoft is responsible for:</strong> Physical data center, network infrastructure, hypervisor, host OS</li>
      <li><strong>Customer is responsible for:</strong> Data, endpoints, accounts, access management, application security</li>
      <li><strong>Unique aspect:</strong> Azure takes more responsibility for OS management in PaaS (even for some IaaS scenarios with Azure Automanage)</li>
    </ul>

    <h5>Google Cloud Shared Responsibility Model</h5>
    <ul>
      <li><strong>Google is responsible for:</strong> Physical security, infrastructure, networking, data processing</li>
      <li><strong>Customer is responsible for:</strong> Data classification, IAM policies, application security, OS patching (on Compute Engine)</li>
      <li><strong>Unique aspect:</strong> Google emphasizes data encryption — data is encrypted by default at all layers</li>
    </ul>

    <h4>Real-World Breach: Capital One (2019)</h4>
    <div class="warning-box">
      <div class="warning-title">⚠️ Case Study: Capital One Data Breach</div>
      <p><strong>What happened:</strong> A former AWS employee exploited a misconfigured Web Application Firewall (WAF) that had excessive permissions to the EC2 Instance Metadata Service (IMDSv1). This allowed the attacker to obtain temporary AWS credentials and access 106 million customer records stored in AWS S3.</p>
      <p><strong>Root cause:</strong> The customer (Capital One) was responsible for configuring the WAF correctly and restricting IMDS access — AWS provided secure tools, but they were misconfigured.</p>
      <p><strong>Impact:</strong> 80,000 bank account numbers, 140,000 Social Security numbers exposed. $80 million fine from OCC.</p>
      <p><strong>Lesson:</strong> The provider gives you secure building blocks. It's YOUR job to assemble them correctly. <strong>Always restrict IMDS access</strong> (use IMDSv2, enforce via security groups).</p>
    </div>

    <h4>Real-World Breach: Microsoft Exchange (2021)</h4>
    <div class="warning-box">
      <div class="warning-title">⚠️ Case Study: Hafnium / Exchange Server</div>
      <p><strong>What happened:</strong> Chinese state-sponsored group "Hafnium" exploited four zero-day vulnerabilities in Microsoft Exchange Server (on-premises). This affected 250,000+ servers globally before Microsoft released patches.</p>
      <p><strong>Root cause:</strong> Customers hadn't patched their Exchange servers promptly. If these were on Exchange Online (SaaS), Microsoft would have patched them automatically.</p>
      <p><strong>Lesson:</strong> On-premises means <strong>you</strong> own the patching cycle. In PaaS/SaaS, the provider handles it. Choose the right service model for your security maturity.</p>
    </div>

    <h4>Common Responsibility Gaps</h4>
    <table>
      <thead>
        <tr>
          <th>Gap</th>
          <th>Why It Happens</th>
          <th>How to Close It</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>IAM Over-Permissions</td>
          <td>Default policies are broad, teams grant excessive access</td>
          <td>Implement least privilege, use Access Analyzer</td>
        </tr>
        <tr>
          <td>Unencrypted Data</td>
          <td>Encryption not enabled by default on some services</td>
          <td>Enable default encryption, use KMS with customer-managed keys</td>
        </tr>
        <tr>
          <td>Missing MFA</td>
          <td>Convenience over security</td>
          <td>Enforce MFA via SCPs/conditional access policies</td>
        </tr>
        <tr>
          <td>Public Storage Buckets</td>
          <td>Default is private, but teams change it for convenience</td>
          <td>Block public access at account level, use S3 Block Public Access</td>
        </tr>
        <tr>
          <td>Unpatched Systems</td>
          <td>No automated patching strategy</td>
          <td>Use managed patching (AWS Systems Manager, Azure Update Management)</td>
        </tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 Pro Tip: The "CSPM Gap"</div>
      <p>Cloud Security Posture Management (CSPM) tools exist specifically to help you manage your portion of shared responsibility. Tools like AWS Security Hub, Azure Defender, GCP Security Command Center, or third-party tools (Wiz, Prisma Cloud, Orca, Lacework) continuously scan for misconfigurations and compliance violations. <strong>The average organization has 3,500+ misconfigurations across their cloud accounts at any given time.</strong></p>
    </div>
  `,v1c5:`
    <h3>Understanding the Cloud Attack Surface</h3>
    <p>
      The cloud attack surface refers to all the points where an unauthorized user could potentially gain access to your cloud environment, extract data, or cause harm. In cloud computing, this surface is significantly more complex than traditional on-premises environments.
    </p>

    <h4>The Cloud Attack Surface Model</h4>
    <div class="info-box">
      <div class="info-title">🗺️ The Cloud Attack Surface Pyramid</div>
      <p>Think of your attack surface as a pyramid with four critical layers:</p>
      <ol>
        <li><strong>Identity Layer (Most Critical):</strong> IAM users, roles, service accounts, API keys, access tokens, federated credentials</li>
        <li><strong>Management Plane:</strong> Cloud console access, APIs, CLI tools, SDKs, Terraform state</li>
        <li><strong>Data Plane:</strong> The actual data stored in cloud services — databases, storage buckets, queues, caches</li>
        <li><strong>Network Plane:</strong> VPCs, subnets, security groups, load balancers, DNS, CDN</li>
      </ol>
      <p style="margin-top:10px"><strong>80% of cloud breaches involve the Identity Layer</strong>. Protecting identities is your highest-impact security investment.</p>
    </div>

    <h4>Top Cloud Attack Vectors</h4>

    <h5>1. Misconfiguration (Cause of ~70% of breaches)</h5>
    <p>Misconfiguration is the #1 cause of cloud breaches. Gartner predicts: "Through 2025, <strong>99% of cloud security failures</strong> will be the customer's fault."</p>
    <ul>
      <li>Storage buckets left publicly accessible (S3, GCS, Azure Blob)</li>
      <li>Database ports exposed to the internet (MongoDB, Redis, Elasticsearch)</li>
      <li>Overly permissive IAM policies with wildcards <code>"Action": "*"</code></li>
      <li>Default credentials not changed on admin consoles</li>
      <li>Unencrypted data at rest or in transit</li>
      <li>Logging and monitoring disabled</li>
      <li>SSH/RDP open to 0.0.0.0/0</li>
    </ul>

    <h5>2. Identity & Credential Abuse</h5>
    <p>Credentials are the #1 target for attackers because they're the easiest path to legitimate access.</p>
    <ul>
      <li><strong>GitHub leaks:</strong> Over 100,000 AWS access keys have been found in public GitHub repos</li>
      <li><strong>Phishing:</strong> Fake cloud login pages to steal credentials</li>
      <li><strong>Instance metadata exploitation:</strong> SSRF attacks accessing IMDS (Capital One breach pattern)</li>
      <li><strong>Service account abuse:</strong> Forgotten service accounts with admin-level permissions</li>
      <li><strong>Credential stuffing:</strong> Using leaked passwords from other breaches</li>
    </ul>

    <h5>3. Insecure APIs</h5>
    <p>Every cloud resource is accessible via API. Weak or improperly secured APIs become prime targets.</p>
    <ul>
      <li>API endpoints without authentication or with weak auth</li>
      <li>Lack of rate limiting on API calls</li>
      <li>Insecure direct object references (IDOR)</li>
      <li>Excessive API permissions (overprivileged service accounts)</li>
      <li>Unencrypted API endpoints (HTTP instead of HTTPS)</li>
    </ul>

    <h5>4. Account Hijacking</h5>
    <ul>
      <li>Phishing attacks targeting cloud console credentials</li>
      <li>Credential stuffing with passwords from data breaches</li>
      <li>Session hijacking through stolen or insecure tokens</li>
      <li>SIM-swapping to bypass SMS-based MFA</li>
    </ul>

    <h5>5. Insider Threats</h5>
    <p>Insiders with legitimate access can cause the most damage.</p>
    <ul>
      <li><strong>Malicious:</strong> Disgruntled employees exfiltrating data before departure</li>
      <li><strong>Accidental:</strong> Developers deploying insecure configurations</li>
      <li><strong>Negligent:</strong> Users sharing credentials, using weak passwords</li>
      <li><strong>Compromised:</strong> Insider accounts taken over by external attackers</li>
    </ul>

    <h5>6. Supply Chain Attacks</h5>
    <p>Attacks targeting the software supply chain and cloud tooling:</p>
    <ul>
      <li>Compromised container images in registries</li>
      <li>Malicious Terraform modules or CloudFormation templates</li>
      <li>Backdoored CI/CD tools and deployment scripts</li>
      <li>Dependency confusion attacks</li>
    </ul>

    <h5>7. Advanced Persistent Threats (APTs)</h5>
    <p>Sophisticated, long-term state-sponsored attacks:</p>
    <ul>
      <li>Supply chain compromise of cloud management tools</li>
      <li>Zero-day exploitation of cloud services</li>
      <li>Lateral movement across cloud resources (island hopping)</li>
      <li>Long-dwell-time persistence in cloud environments</li>
    </ul>

    <h4>Attack Surface Reduction Strategies</h4>
    <div class="success-box">
      <div class="success-title">✓ Attack Surface Reduction Checklist</div>
      <ol>
        <li><strong>Enable MFA</strong> on ALL accounts, especially privileged ones (use hardware keys or authenticator apps, not SMS)</li>
        <li><strong>Use temporary credentials</strong> (STS, Workload Identity Federation) instead of long-lived access keys</li>
        <li><strong>Practice least privilege</strong> — audit and minimize all IAM policies</li>
        <li><strong>Use VPC endpoints</strong> to keep traffic within the cloud network</li>
        <li><strong>Run automated security audits</strong> with CSPM tools weekly</li>
        <li><strong>Remove unused resources</strong> and orphaned accounts immediately</li>
        <li><strong>Encrypt all data</strong> at rest (AES-256) and in transit (TLS 1.2+)</li>
        <li><strong>Implement network segmentation</strong> with security groups and NACLs</li>
        <li><strong>Scan for secrets</strong> in code repositories (GitLeaks, TruffleHog)</li>
        <li><strong>Implement Cloud Security Posture Management</strong> for continuous monitoring</li>
      </ol>
    </div>

    <div class="warning-box">
      <div class="warning-title">⚠️ Industry Statistics</div>
      <ul>
        <li>Palo Alto Networks 2024: <strong>83% of organizations</strong> experienced at least one cloud security incident in the past 12 months</li>
        <li>Average time to discover a misconfigured cloud resource: <strong>108 days</strong></li>
        <li><strong>45% of breaches</strong> involve hacking, <strong>22%</strong> involve cloud misconfiguration (Verizon DBIR 2024)</li>
        <li>Average cost of a cloud data breach: <strong>$4.88 million</strong> (IBM Cost of a Data Breach 2024)</li>
      </ul>
    </div>
  `,v1c6:`
    <h3>Cloud Security Architecture</h3>
    <p>
      A robust cloud security architecture provides <strong>defense in depth</strong> — multiple layers of security controls so that if one layer fails, others still protect your assets. This chapter covers architectural principles and patterns for securing cloud environments.
    </p>

    <h4>Defense in Depth — The Cloud Security Layers</h4>
    <p>Think of cloud security as concentric circles around your data. An attacker must penetrate ALL layers to reach critical assets.</p>

    <table>
      <thead>
        <tr>
          <th>Layer</th>
          <th>Controls</th>
          <th>Example Services</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>1. Physical</strong></td>
          <td>Data center security, biometric access, 24/7 monitoring</td>
          <td>Provider Managed (AWS/Azure/GCP DCs)</td>
        </tr>
        <tr>
          <td><strong>2. Network</strong></td>
          <td>Firewalls, IDS/IPS, DDoS protection, VPN, DNS security</td>
          <td>AWS WAF, Azure Firewall, Cloud Armor</td>
        </tr>
        <tr>
          <td><strong>3. Host / Compute</strong></td>
          <td>OS hardening, patching, endpoint protection, container security</td>
          <td>AWS Inspector, Azure Defender for Servers</td>
        </tr>
        <tr>
          <td><strong>4. Application</strong></td>
          <td>WAF, input validation, authentication, authorization</td>
          <td>AWS Shield, Cloudflare, OAuth2/OIDC</td>
        </tr>
        <tr>
          <td><strong>5. Data</strong></td>
          <td>Encryption, classification, access control, DLP</td>
          <td>AWS KMS, Azure Key Vault, GCP KMS, Macie</td>
        </tr>
        <tr>
          <td><strong>6. Identity</strong></td>
          <td>MFA, SSO, least privilege, zero trust, PAM</td>
          <td>AWS IAM, Azure AD, GCP IAM</td>
        </tr>
        <tr>
          <td><strong>7. Governance</strong></td>
          <td>Policy enforcement, monitoring, audit, compliance</td>
          <td>AWS Config, Azure Policy, GCP Org Policies</td>
        </tr>
      </tbody>
    </table>

    <h4>Zero Trust Architecture (ZTA) in Cloud</h4>
    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Zero Trust</div>
      <p>Zero Trust is a security architecture based on one principle: <strong>"Never trust, always verify."</strong> It eliminates the concept of a trusted network perimeter and assumes threats can come from anywhere — inside or outside.</p>
    </div>
    <p>Zero Trust has three core pillars:</p>
    <ol>
      <li><strong>Verify Explicitly:</strong> Authenticate and authorize <em>every</em> request based on all available data points — user identity, device health, location, resource sensitivity, and data classification.</li>
      <li><strong>Least Privilege Access:</strong> Limit access with Just-In-Time (JIT) and Just-Enough-Access (JEA) policies. No standing privileges — access is granted on-demand and revoked immediately after use.</li>
      <li><strong>Assume Breach:</strong> Design as if attackers are already inside. Minimize blast radius through microsegmentation. Verify end-to-end encryption continuously. Use advanced analytics to detect and respond to threats.</li>
    </ol>

    <h5>Zero Trust Implementation in Cloud</h5>
    <table>
      <thead>
        <tr>
          <th>Zero Trust Principle</th>
          <th>AWS Implementation</th>
          <th>Azure Implementation</th>
          <th>GCP Implementation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Identity Verification</td>
          <td>IAM + Cognito + MFA</td>
          <td>Azure AD + Entra ID + MFA</td>
          <td>Cloud Identity + MFA</td>
        </tr>
        <tr>
          <td>Device Trust</td>
          <td colspan="3">MDM/UEM integration, device compliance policies</td>
        </tr>
        <tr>
          <td>Network Segmentation</td>
          <td>VPC + Security Groups + PrivateLink</td>
          <td>VNet + NSGs + Private Link</td>
          <td>VPC + Firewall Rules + Private Service Connect</td>
        </tr>
        <tr>
          <td>Workload Identity</td>
          <td>IAM Roles for Service Accounts (IRSA)</td>
          <td>Managed Identities</td>
          <td>Workload Identity</td>
        </tr>
        <tr>
          <td>Continuous Verification</td>
          <td>GuardDuty + Inspector + Security Hub</td>
          <td>Defender for Cloud + Sentinel</td>
          <td>Security Command Center + Chronicle</td>
        </tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 Real-World Example: Google BeyondCorp</div>
      <p>Google implemented BeyondCorp, a Zero Trust architecture that <strong>eliminated the traditional VPN</strong> for its entire 60,000+ employee workforce:</p>
      <ul>
        <li>No device is inherently trusted based on network location</li>
        <li>Every access request is authenticated, authorized, and encrypted</li>
        <li>Device health is verified before granting access to any application</li>
        <li>Access is granted to specific applications, not the entire network</li>
      </ul>
      <p><strong>Result:</strong> 100% of Google's workforce works without a VPN, with <strong>fewer</strong> security incidents and better user experience.</p>
    </div>

    <h4>Microsegmentation</h4>
    <p>Microsegmentation divides your cloud environment into granular, isolated security zones. Each zone has its own security policies, preventing lateral movement by attackers.</p>
    <ul>
      <li><strong>East-West Traffic:</strong> Controls communication between workloads (VM-to-VM, container-to-container, service-to-service)</li>
      <li><strong>North-South Traffic:</strong> Controls traffic entering/leaving your cloud environment</li>
      <li><strong>Tools:</strong> AWS Security Groups + NACLs, Azure NSGs, GCP Firewall Rules, Istio Service Mesh, Calico, Cilium</li>
    </ul>

    <div class="callout">
      <div class="callout-icon">🛡️</div>
      <div class="callout-content">
        <h4>Why Microsegmentation Matters</h4>
        <p>Without microsegmentation, an attacker who compromises one VM can freely communicate with every other VM in the same network segment. With proper microsegmentation, they're contained to just that one workload. This is how you <strong>minimize the blast radius</strong> of any breach.</p>
      </div>
    </div>

    <h4>Well-Architected Frameworks — Security Pillar</h4>
    <p>All three major cloud providers publish a Well-Architected Framework with a dedicated security pillar:</p>
    <table>
      <thead>
        <tr>
          <th>Framework</th>
          <th>Security Pillar Focus</th>
          <th>Best Practices</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>AWS WA Framework</strong></td>
          <td>Security Pillar</td>
          <td>6 best practices: IAM, detection, infrastructure protection, data protection, incident response</td>
        </tr>
        <tr>
          <td><strong>Azure WA Framework</strong></td>
          <td>Security Pillar</td>
          <td>5 recommendations: Identity, perimeter, network, compute, data</td>
        </tr>
        <tr>
          <td><strong>GCP Architecture Framework</strong></td>
          <td>Security Blueprint</td>
          <td>4 domains: Identity-centric access, data protection, network security, security operations</td>
        </tr>
      </tbody>
    </table>
    <p>Common themes across <strong>all</strong> frameworks:</p>
    <ol>
      <li>Implement strong identity and access management</li>
      <li>Protect data in transit and at rest</li>
      <li>Establish security monitoring and alerting</li>
      <li>Automate security best practices (Infrastructure as Code)</li>
      <li>Protect the network perimeter and internal boundaries</li>
      <li>Prepare for incident response before it happens</li>
    </ol>

    <h4>Cloud Security Architecture Patterns</h4>

    <h5>1. Hub-and-Spoke Network</h5>
    <p>A centralized VPC ("hub") connects to multiple workload VPCs ("spokes") through peering or transit gateways. The hub houses centralized security appliances (firewalls, inspection gateways, logging).</p>
    <ul>
      <li><strong>Hub:</strong> Centralized inspection, logging, firewall</li>
      <li><strong>Spokes:</strong> Individual application environments</li>
      <li><strong>Benefit:</strong> East-west traffic inspection, consistent policy, single management point</li>
    </ul>

    <h5>2. Security Landing Zone</h5>
    <p>A multi-account architecture that separates environments and enforces governance from the start.</p>
    <ul>
      <li><strong>Networking Account:</strong> Centralized VPC, Transit Gateway, DNS</li>
      <li><strong>Security Account:</strong> SIEM, logging, security tooling</li>
      <li><strong>Logging Account:</strong> Centralized log aggregation (immutable storage)</li>
      <li><strong>Workload Accounts:</strong> Application-specific environments</li>
      <li><strong>Break-Glass Account:</strong> Emergency access with heavy monitoring</li>
    </ul>

    <h5>3. Three-Tier Architecture Security</h5>
    <p>The classic web application architecture in the cloud with security controls at each tier:</p>
    <table>
      <thead>
        <tr>
          <th>Tier</th>
          <th>Components</th>
          <th>Security Controls</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Presentation</strong></td>
          <td>Web servers, load balancers</td>
          <td>WAF, DDoS protection, TLS termination</td>
        </tr>
        <tr>
          <td><strong>Application</strong></td>
          <td>Application servers, containers</td>
          <td>Runtime security, container scanning, code signing</td>
        </tr>
        <tr>
          <td><strong>Data</strong></td>
          <td>Databases, caches, storage</td>
          <td>Encryption, access control, backup, DLP</td>
        </tr>
      </tbody>
    </table>
  `,v1c7:`
    <h3>Cloud Governance: Policies, Controls, and Compliance</h3>
    <p>
      Cloud governance establishes the policies, roles, and controls that ensure your cloud infrastructure is secure, compliant, cost-effective, and efficiently managed. Without proper governance, cloud environments quickly become chaotic and insecure.
    </p>

    <h4>What is Cloud Governance?</h4>
    <div class="info-box">
      <div class="info-title">💡 Key Concept: Cloud Governance</div>
      <p>Cloud governance is the set of policies, procedures, and technical controls used to manage security, compliance, and operations in cloud environments. It answers three fundamental questions:</p>
      <ol>
        <li><strong>Who</strong> can access what resources?</li>
        <li><strong>What</strong> configurations are required and prohibited?</li>
        <li><strong>How</strong> do we detect and respond to violations?</li>
      </ol>
    </div>

    <h4>The Three Pillars of Cloud Governance</h4>
    <table>
      <thead>
        <tr>
          <th>Pillar</th>
          <th>Focus</th>
          <th>Key Questions</th>
          <th>Tools & Techniques</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Security Governance</strong></td>
          <td>Protecting assets and data</td>
          <td>"Are we secure?"</td>
          <td>IAM policies, encryption standards, vulnerability management</td>
        </tr>
        <tr>
          <td><strong>Compliance Governance</strong></td>
          <td>Meeting regulatory requirements</td>
          <td>"Are we compliant?"</td>
          <td>Audit trails, compliance frameworks, data residency controls</td>
        </tr>
        <tr>
          <td><strong>Operational Governance</strong></td>
          <td>Efficient resource management</td>
          <td>"Are we efficient?"</td>
          <td>Cost management, resource tagging, naming conventions</td>
        </tr>
      </tbody>
    </table>

    <h4>Policy as Code</h4>
    <p>Policy as Code defines governance rules in machine-readable formats, enabling <strong>automated enforcement</strong> and continuous compliance checking rather than periodic manual audits.</p>

    <div class="callout">
      <div class="callout-icon">🛠️</div>
      <div class="callout-content">
        <h4>Popular Policy-as-Code Tools</h4>
        <p><strong>Open Policy Agent (OPA):</strong> Cloud-neutral policy engine using Rego language — works with any cloud<br>
        <strong>AWS Config Rules:</strong> AWS-specific compliance checking with managed and custom rules<br>
        <strong>Azure Policy:</strong> Azure-native policy enforcement with built-in and custom initiatives<br>
        <strong>Google Organization Policy:</strong> GCP-specific policy constraints at org/folder/project level<br>
        <strong>Sentinel (HashiCorp):</strong> Policy as code for Terraform Enterprise<br>
        <strong>Cloud Custodian:</strong> Multi-cloud governance automation with policy definitions in YAML</p>
      </div>
    </div>

    <h5>Example: Preventing Public S3 Buckets with OPA</h5>
    <pre><code>
# Rego policy to deny public S3 bucket creation
package cloud.security

deny[msg] {
  input.resource_type == "aws_s3_bucket"
  input.config.public_access_block_configuration == null
  msg := "S3 bucket must have public access block configuration"
}

deny[msg] {
  input.resource_type == "aws_s3_bucket"
  input.config.acl == "public-read"
  msg := "S3 bucket ACL must not be public-read"
}
</code></pre>

    <h4>Infrastructure as Code (IaC) Governance</h4>
    <p>IaC governance ensures that all cloud resources are deployed through controlled, auditable, and repeatable processes.</p>
    <ul>
      <li><strong>Version Control:</strong> All infrastructure changes tracked in Git with branch protection</li>
      <li><strong>Code Review:</strong> Peer review for all infrastructure changes (pull request approvals)</li>
      <li><strong>Automated Testing:</strong> Validate configurations before deployment using Checkov, tfsec, Terrascan, or cfn-lint</li>
      <li><strong>Change Management:</strong> Approval workflows for production changes with audit trail</li>
      <li><strong>Secrets Management:</strong> Never commit secrets to Git — use Vault, AWS Secrets Manager, or SOPS</li>
    </ul>

    <h5>IaC Security Scanning Pipeline</h5>
    <pre><code>
# Example CI/CD pipeline for IaC security
stages:
  - validate
  - security-scan
  - plan
  - apply

security-scan:
  stage: security-scan
  script:
    - checkov -d . --framework terraform
    - tfsec .
    - terrascan scan -i terraform
  allow_failure: false
</code></pre>

    <h4>Resource Tagging Strategy</h4>
    <p>Tagging is critical for cost allocation, access control, compliance, and operational management. Untagged resources are <strong>ungoverned resources</strong>.</p>
    <table>
      <thead>
        <tr>
          <th>Tag Key</th>
          <th>Example Values</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Environment</td><td>prod, staging, dev, sandbox</td><td>Access control, cost tracking, lifecycle management</td></tr>
        <tr><td>Owner</td><td>team-backend, john.doe@example.com</td><td>Accountability, incident response contacts</td></tr>
        <tr><td>DataClassification</td><td>public, internal, confidential, restricted</td><td>Security policies, encryption requirements</td></tr>
        <tr><td>CostCenter</td><td>CC-1234, Engineering-456</td><td>Budget allocation, chargeback</td></tr>
        <tr><td>Application</td><td>payment-service, user-portal</td><td>Resource grouping, dependency mapping</td></tr>
        <tr><td>Compliance</td><td>hipaa, pci, soc2, gdpr</td><td>Audit readiness, scope determination</td></tr>
        <tr><td>BackupPolicy</td><td>critical, standard, none</td><td>Automated backup enforcement</td></tr>
        <tr><td>ShutdownSchedule</td><td>none, weekdays-18h, weekends</td><td>Cost optimization for non-prod</td></tr>
      </tbody>
    </table>

    <h4>Guardrails and Preventive Controls</h4>
    <div class="warning-box">
      <div class="warning-title">⚠️ Real-World Failure: Cost Governance</div>
      <p>In 2023, a major financial services company discovered <strong>$2.3 million</strong> in unexpected cloud costs in one month. Investigation revealed: 127 orphaned VMs running 24/7, 34 unattached storage volumes, and 8 load balancers with zero traffic. A proper tagging policy and automated resource lifecycle management would have caught this in <strong>week one</strong>.</p>
    </div>

    <h5>Governance Implementation Checklist</h5>
    <ol>
      <li>Define a cloud governance framework aligned with business objectives and risk appetite</li>
      <li>Implement mandatory tagging policies with automated enforcement (deny untagged resources)</li>
      <li>Set up cost anomaly detection, budget alerts, and automated shutdown policies</li>
      <li>Deploy policy-as-code rules in CI/CD pipelines (shift-left governance)</li>
      <li>Establish a Cloud Center of Excellence (CCoE) with representatives from each team</li>
      <li>Create runbooks for common security incidents and configuration changes</li>
      <li>Schedule quarterly architecture reviews and annual security assessments</li>
      <li>Implement automated remediation for common misconfigurations</li>
    </ol>
  `,v1c8:`
    <h3>Cloud Security Roles, Responsibilities, and IAM</h3>
    <p>
      Effective cloud security requires clear role definitions. In the cloud, "roles" has a double meaning: <strong>organizational roles</strong> (people and teams) and <strong>technical roles</strong> (IAM roles and service accounts). Both must be designed and managed correctly.
    </p>

    <h4>Organizational Security Roles</h4>
    <table>
      <thead>
        <tr>
          <th>Role</th>
          <th>Core Responsibilities</th>
          <th>Key Skills</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>CISO</strong></td>
          <td>Security strategy, risk management, board reporting, regulatory compliance</td>
          <td>Leadership, risk frameworks (NIST, ISO 27001), regulations</td>
        </tr>
        <tr>
          <td><strong>Cloud Security Architect</strong></td>
          <td>Design secure cloud architectures, conduct design reviews, threat modeling</td>
          <td>Multi-cloud platforms, networking, zero trust, TOGAF</td>
        </tr>
        <tr>
          <td><strong>Cloud Security Engineer</strong></td>
          <td>Implement security controls, automate security tooling, IaC security</td>
          <td>Terraform, Python, CI/CD, IaC, Kubernetes security</td>
        </tr>
        <tr>
          <td><strong>Security Operations (SecOps)</strong></td>
          <td>24/7 monitoring, threat detection, incident response, forensics</td>
          <td>SIEM, SOAR, DFIR, threat intelligence</td>
        </tr>
        <tr>
          <td><strong>DevSecOps Engineer</strong></td>
          <td>Embed security in CI/CD: SAST, DAST, SCA, container scanning</td>
          <td>Jenkins/GitHub Actions, container security, SAST/DAST tools</td>
        </tr>
        <tr>
          <td><strong>Compliance Analyst</strong></td>
          <td>Ensure regulatory compliance, prepare for audits, evidence collection</td>
          <td>SOC 2, ISO 27001, HIPAA, PCI DSS, GDPR</td>
        </tr>
        <tr>
          <td><strong>Identity & Access Manager</strong></td>
          <td>Manage IAM policies, access reviews, PAM, identity governance</td>
          <td>LDAP, SAML, OAuth, RBAC, ABAC, privileged access management</td>
        </tr>
      </tbody>
    </table>

    <h4>Technical IAM Roles in Cloud</h4>
    <p>IAM roles are the backbone of cloud authorization. Unlike traditional user accounts, roles can be attached to services, applications, and even individual API calls.</p>

    <h5>Three Types of Cloud Identities</h5>
    <table>
      <thead>
        <tr>
          <th>Identity Type</th>
          <th>Purpose</th>
          <th>Security Risk</th>
          <th>Best Practice</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Human Users</strong></td>
          <td>Developers, admins, operators interact with cloud console</td>
          <td>Credential theft, phishing, over-permissioning</td>
          <td>SSO + MFA, just-in-time access, regular reviews</td>
        </tr>
        <tr>
          <td><strong>Service Accounts</strong></td>
          <td>Applications and services authenticate programmatically</td>
          <td>Secret leakage, long-lived credentials, excessive permissions</td>
          <td>Workload identity federation, short-lived tokens, auto-rotation</td>
        </tr>
        <tr>
          <td><strong>Machine/Workload Identity</strong></td>
          <td>VMs, containers, serverless functions access cloud resources</td>
          <td>Lateral movement, privilege escalation via metadata APIs</li>
          <td>Instance profiles, managed identities, block IMDSv1</td>
        </tr>
      </tbody>
    </table>

    <div class="key-box">
      <div class="key-title">🔑 Key Insight: Service Accounts Are the Biggest Risk</div>
      <p>Service accounts are <strong>10x more likely to be exploited</strong> than human accounts because they typically have: excessive permissions that are never reviewed, long-lived credentials that are rarely rotated, and no MFA protection (MFA doesn't work for machines the same way). The SolarWinds attack and the Capital One breach both involved service account compromise.</p>
    </div>

    <h5>Role Mapping Across Cloud Providers</h5>
    <table>
      <thead>
        <tr>
          <th>Concept</th>
          <th>AWS</th>
          <th>Azure</th>
          <th>GCP</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Human User Identity</td>
          <td>IAM User (root + IAM)</td>
          <td>Microsoft Entra ID User</td>
          <td>Google Account</td>
        </tr>
        <tr>
          <td>Group/Collection</td>
          <td>IAM Group</td>
          <td>Entra ID Group</td>
          <td>Google Group</td>
        </tr>
        <tr>
          <td>Service Role</td>
          <td>IAM Role</td>
          <td>Managed Identity / Service Principal</td>
          <td>Service Account</td>
        </tr>
        <tr>
          <td>Temporary Credential</td>
          <td>STS / AssumeRole</td>
          <td>Managed Identity Token</td>
          <td>Workload Identity Federation Token</td>
        </tr>
        <tr>
          <td>External Federation</td>
          <td>SAML / OIDC Federation</td>
          <td>External ID / Workload ID</td>
          <td>Workforce Identity Federation</td>
        </tr>
        <tr>
          <td>Privileged Access</td>
          <td>IAM Roles Anywhere, SSO</td>
          <td>PIM (Privileged Identity Mgmt)</td>
          <td>Organization Policy Admin</td>
        </tr>
      </tbody>
    </table>

    <h4>Principle of Least Privilege (PoLP)</h4>
    <div class="warning-box">
      <div class="warning-title">⚠️ The Danger of Over-Permissioned Roles</div>
      <p>A study by Ermetic found that <strong>98% of organizations</strong> gave their cloud identities more permissions than they actually needed. The #1 attack pattern in cloud breaches is:</p>
      <p><code>Compromise weak identity → Escalate privileges → Lateral movement → Exfiltrate data</code></p>
      <p>Most organizations never audit IAM policies after initial creation.</p>
    </div>

    <h5>Implementing Least Privilege: Step by Step</h5>
    <ol>
      <li><strong>Inventory all identities:</strong> List all IAM users, roles, service accounts, and API keys across all cloud accounts</li>
      <li><strong>Analyze actual usage:</strong> Use AWS Access Analyzer / Azure Access Reviews / GCP IAM Recommender to find unused permissions</li>
      <li><strong>Use predefined roles:</strong> Prefer AWS managed policies, Azure built-in roles, or GCP predefined roles over custom ones</li>
      <li><strong>Avoid wildcards:</strong> <strong>Never</strong> use <code>"Action": "*"</code> or <code>"Resource": "*"</code> in production policies</li>
      <li><strong>Implement time-based access:</strong> Use just-in-time (JIT) access — grant elevated permissions only when needed, auto-revoke after a set time</li>
      <li><strong>Conduct quarterly access reviews:</strong> Business owners must certify access for their team members</li>
      <li><strong>Implement break-glass procedures:</strong> Emergency access accounts with heavy monitoring and mandatory post-use review</li>
    </ol>

    <h5>Example IAM Policy Analysis</h5>
    <pre><code>
# ❌ DANGEROUS: Over-permissioned policy
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": "*",
    "Resource": "*"
  }]
}
# This gives FULL access to EVERYTHING in the account!

# ✅ SECURE: Least privilege policy
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": [
      "s3:GetObject",
      "s3:ListBucket"
    ],
    "Resource": [
      "arn:aws:s3:::my-app-logs/*",
      "arn:aws:s3:::my-app-logs"
    ],
    "Condition": {
      "IpAddress": {"aws:SourceIp": "10.0.0.0/16"}
    }
  }]
}
# This allows ONLY reading specific S3 objects from a specific network
</code></pre>

    <h4>RACI Matrix for Cloud Security</h4>
    <p>A RACI (Responsible, Accountable, Consulted, Informed) matrix clarifies who does what in security operations:</p>
    <table>
      <thead>
        <tr>
          <th>Activity</th>
          <th>CISO</th>
          <th>Cloud Security Eng</th>
          <th>Dev Team</th>
          <th>Platform/DevOps Team</th>
          <th>Compliance</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>IAM Policy Review</td><td>A</td><td>R</td><td>C</td><td>I</td><td>C</td></tr>
        <tr><td>Network Security Design</td><td>A</td><td>R</td><td>I</td><td>C</td><td>I</td></tr>
        <tr><td>Encryption Configuration</td><td>A</td><td>R</td><td>C</td><td>C</td><td>A</td></tr>
        <tr><td>Incident Response</td><td>A</td><td>R</td><td>C</td><td>C</td><td>I</td></tr>
        <tr><td>Security Monitoring</td><td>A</td><td>R</td><td>I</td><td>R</td><td>I</td></tr>
        <tr><td>Compliance Audit Prep</td><td>A</td><td>C</td><td>I</td><td>I</td><td>R</td></tr>
        <tr><td>Change Management</td><td>A</td><td>C</td><td>C</td><td>R</td><td>I</td></tr>
      </tbody>
    </table>
    <p style="font-size:0.9rem; color:var(--text-muted); margin-top:8px;">
      <strong>R</strong> = Responsible (does the work) | <strong>A</strong> = Accountable (final decision-maker) | <strong>C</strong> = Consulted (provides input) | <strong>I</strong> = Informed (kept in the loop)
    </p>
  `,v1c9:`
    <h3>AWS IAM Deep Dive</h3>
    <p>
      AWS Identity and Access Management (IAM) is the foundational security service in AWS. It controls who can access your AWS resources, what actions they can perform, and under what conditions. <strong>Getting IAM right is the single most important security task in AWS.</strong>
    </p>

    <h4>What is IAM?</h4>
    <p>IAM is a web service that helps you securely control access to AWS resources. You use IAM to control who is authenticated (signed in) and authorized (has permissions) to use resources.</p>

    <div class="info-box">
      <div class="info-title">💡 The IAM Hierarchy</div>
      <p>Think of IAM as concentric circles of access:</p>
      <ol>
        <li><strong>Root Account</strong> — The account owner with <em>god-mode</em> access. Should be protected with MFA and ideally locked away</li>
        <li><strong>IAM Users</strong> — Individual people with their own credentials</li>
        <li><strong>IAM Groups</strong> — Collections of users with shared permissions</li>
        <li><strong>IAM Roles</strong> — Temporary credentials for AWS services, cross-account access, or federation</li>
        <li><strong>Service Accounts</strong> — Roles assumed by AWS services on your behalf</li>
      </ol>
    </div>

    <h4>IAM Users vs. Roles</h4>
    <table>
      <thead>
        <tr>
          <th>Aspect</th>
          <th>IAM User</th>
          <th>IAM Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Identity</td>
          <td>Long-term credentials (password + access keys)</td>
          <td>Temporary credentials via STS</td>
        </tr>
        <tr>
          <td>Assigned to</td>
          <td>A person or application</td>
          <td>An AWS service, instance, or external entity</td>
        </tr>
        <tr>
          <td>Credentials Duration</td>
          <td>Permanent until rotated</td>
          <td>1-12 hours (typically 1 hour)</td>
        </tr>
        <tr>
          <td>MFA Support</td>
          <td>Yes (recommended)</td>
          <td>N/A (uses temporary tokens)</td>
        </tr>
        <tr>
          <td>Use Case</td>
          <td>Human access to AWS console/CLI</td>
          <td>Service-to-service, cross-account, EC2 instances</td>
        </tr>
      </tbody>
    </table>

    <h4>IAM Policy Anatomy</h4>
    <p>IAM policies are JSON documents that define permissions. Every policy has this structure:</p>
    <pre><code>
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "OptionalStatementId",
      "Effect": "Allow | Deny",
      "Action": "s3:GetObject | iam:* | ec2:RunInstances",
      "Resource": "arn:aws:s3:::my-bucket/* | *",
      "Condition": {
        "IpAddress": {"aws:SourceIp": "10.0.0.0/24"},
        "DateLessThan": {"aws:CurrentTime": "2025-12-31T23:59:59Z"}
      }
    }
  ]
}
</code></pre>

    <h5>Key Policy Elements Explained</h5>
    <ul>
      <li><strong>Effect:</strong> Whether the statement allows or denies access (Deny always wins over Allow)</li>
      <li><strong>Action:</strong> The specific API operations (e.g., <code>s3:GetObject</code>, <code>ec2:*</code>, <code>iam:CreateUser</code>)</li>
      <li><strong>Resource:</strong>The ARN identifying which resources the policy applies to</li>
      <li><strong>Condition:</strong> Optional constraints (source IP, time of day, encryption requirement, etc.)</li>
    </ul>

    <div class="warning-box">
      <div class="warning-title">⚠️ Critical IAM Mistakes to Avoid</div>
      <ul>
        <li>Never use the root account for daily operations</li>
        <li>Never attach AdministratorAccess policy to user accounts in production</li>
        <li>Never leave access keys in source code (use AWS Secrets Manager or SSO)</li>
        <li>Never create IAM users without MFA</li>
        <li>Avoid wildcard (*) in Resource unless absolutely necessary</li>
      </ul>
    </div>

    <h4>IAM Best Practices Checklist</h4>
    <ol>
      <li>Enable MFA for all users, especially the root account</li>
      <li>Use IAM roles instead of long-term access keys</li>
      <li>Apply the principle of least privilege — start with no permissions and add only what's needed</li>
      <li>Use IAM Access Analyzer to identify resources shared externally</li>
      <li>Rotate credentials regularly (access keys every 90 days)</li>
      <li>Use AWS Organizations SCPs (Service Control Policies) for account-level guardrails</li>
      <li>Enable CloudTrail for all IAM actions</li>
      <li>Use permission boundaries for delegated administration</li>
    </ol>

    <h4>AWS IAM Access Analyzer</h4>
    <p>A powerful tool that identifies resources shared with external entities and provides findings on unused permissions.</p>
    <ul>
      <li><strong>External Access:</strong> Finds S3 buckets, IAM roles, KMS keys shared outside your account</li>
      <li><strong>Unused Access:</strong> Identifies permissions not used in the last 90 days — prime candidates for removal</li>
      <li><strong>Policy Generation:</strong> Generates least-privilege policies based on CloudTrail access logs</li>
    </ul>
  `,v1c10:`
    <h3>IAM Policies and Permissions</h3>
    <p>
      AWS IAM policies are the primary mechanism for controlling access to AWS resources. A deep understanding of policy types, evaluation logic, and advanced features is essential for cloud security.
    </p>

    <h4>Types of IAM Policies</h4>
    <table>
      <thead>
        <tr>
          <th>Policy Type</th>
          <th>Attached To</th>
          <th>Use Case</th>
          <th>Limitations</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>AWS Managed</strong></td>
          <td>Any IAM entity</td>
          <td>Predefined policies like <code>ViewAuditLogs</code>, <code>SecurityAudit</code></td>
          <td>Cannot modify; may be overly broad</td>
        </tr>
        <tr>
          <td><strong>Customer Managed</strong></td>
          <td>Any IAM entity</td>
          <td>Reusable policies across your organization</td>
          <td>You manage versions and updates</td>
        </tr>
        <tr>
          <td><strong>Inline</strong></td>
          <td>Single user/role/group</td>
          <td>Highly specific one-off permissions</td>
          <td>Not reusable; harder to audit at scale</td>
        </tr>
        <tr>
          <td><strong>Permission Boundary</strong></td>
          <td>User or Role</td>
          <td>Set maximum permission ceiling for delegated admins</td>
          <td>Only limits; doesn't grant permissions</td>
        </tr>
        <tr>
          <td><strong>Service Control Policy (SCP)</strong></td>
          <td>AWS Organization OU/Account</td>
          <td>Organization-wide guardrails (e.g., deny region, deny service)</td>
          <td>Does not grant permissions; only restricts</td>
        </tr>
        <tr>
          <td><strong>Session Policy</strong></td>
          <td>Role assumption</td>
          <td>Further restrict permissions during assumed-role sessions</td>
          <td>Only applicable via AssumeRole API</td>
        </tr>
        <tr>
          <td><strong>Resource-Based</strong></td>
          <td>Resource (S3 bucket policy, SQS policy, etc.)</td>
          <td>Grant cross-account or external access to specific resources</td>
          <td>Complex to manage at scale</td>
        </tr>
      </tbody>
    </table>

    <h4>Policy Evaluation Logic</h4>
    <p>AWS evaluates multiple policies in a specific order. Understanding this is crucial for debugging permission issues:</p>

    <ol>
      <li><strong>Explicit Deny always wins</strong> — If any policy denies an action, access is denied regardless of any Allow statements</li>
      <li><strong>Allow is required</strong> — At least one policy must explicitly Allow the action</li>
      <li><strong>Resource match required</strong> — The action must be allowed on the specific resource</li>
      <li><strong>Condition keys evaluated</strong> — Additional context-based constraints (IP, time, MFA, encryption)</li>
    </ol>

    <div class="callout">
      <div class="callout-icon">🧠</div>
      <div class="callout-content">
        <h4>The Three Rules of IAM Evaluation</h4>
        <p><strong>1.</strong> By default, all requests are <strong>denied</strong><br>
        <strong>2.</strong> An explicit <code>Allow</code> overrides the default deny<br>
        <strong>3.</strong> An explicit <code>Deny</code> overrides any <code>Allow</code></p>
        <p><em>Remember: Deny always wins.</em></p>
      </div>
    </div>

    <h4>Action and Resource ARN Patterns</h4>
    <table>
      <thead>
        <tr>
          <th>Service</th>
          <th>Action Pattern</th>
          <th>Resource ARN Format</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>S3</td><td><code>s3:GetObject</code>, <code>s3:PutObject</code></td><td><code>arn:aws:s3:::bucket-name/*</code></td></tr>
        <tr><td>EC2</td><td><code>ec2:RunInstances</code>, <code>ec2:TerminateInstances</code></td><td><code>arn:aws:ec2:region:account:instance/*</code></td></tr>
        <tr><td>Lambda</td><td><code>lambda:InvokeFunction</code>, <code>lambda:CreateFunction</code></td><td><code>arn:aws:lambda:region:account:function:name</code></td></tr>
        <tr><td>SNS</td><td><code>sns:Publish</code>, <code>sns:Subscribe</code></td><td><code>arn:aws:sns:region:account:topic-name</code></td></tr>
        <tr><td>RDS</td><td><code>rds:DescribeDBInstances</code>, <code>rds:DeleteDBInstance</code></td><td><code>arn:aws:rds:region:account:db:instance-name</code></td></tr>
        <tr><td>IAM</td><td><code>iam:CreateUser</code>, <code>iam:PutUserPolicy</code></td><td><code>arn:aws:iam::account:role/role-name</code></td></tr>
      </tbody>
    </table>

    <h4>Condition Keys — Granular Control</h4>
    <p>Condition keys let you add context-based restrictions to policies:</p>
    <table>
      <thead>
        <tr>
          <th>Condition Key</th>
          <th>Values</th>
          <th>Use Case</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>aws:SourceIp</td><td>IP ranges</td><td>Restrict access to corporate network</td></tr>
        <tr><td>aws:MultiFactorAuthPresent</td><td>true/false</td><td>Require MFA for sensitive actions</td></tr>
        <tr><td>aws:RequestedRegion</td><td>us-east-1, eu-west-1</td><td>Restrict which regions can be used</td></tr>
        <tr><td>aws:SecureTransport</td><td>true/false</td><td>Enforce HTTPS only</td></tr>
        <tr><td>aws:PrincipalTag/&lt;key&gt;</td><td>Tag values</td><td>Control access based on user tags</td></tr>
        <tr><td>kms:EncryptionContext:&lt;key&gt;</td><td>String values</td><td>Require encryption context for KMS</td></tr>
        <tr><td>s3:x-amz-server-side-encryption</td><td>AES256, aws:kms</td><td>Require encryption on PUT</td></tr>
      </tbody>
    </table>

    <h5>Example: MFA-Required Policy for Sensitive Actions</h5>
    <pre><code>
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "DenyDeleteUnlessMFA",
      "Effect": "Deny",
      "Action": [
        "iam:Delete*",
        "ec2:Terminate*",
        "s3:DeleteBucket"
      ],
      "Resource": "*",
      "Condition": {
        "BoolIfExists": {
          "aws:MultiFactorAuthPresent": "false"
        }
      }
    }
  ]
}
</code></pre>

    <h4>Policy Testing with IAM Policy Simulator</h4>
    <p>AWS provides the <strong>IAM Policy Simulator</strong> in the console to test policies before deployment:</p>
    <ul>
      <li>Select a user, role, or group</li>
      <li>Choose an action and resource</li>
      <li>Simulator shows ALL matching policies and the final decision</li>
      <li>Essential for debugging complex permission setups</li>
    </ul>

    <div class="tip-box">
      <div class="tip-title">💡 Pro Tip: SCPs for Guardrails</div>
      <p>Use Service Control Policies at the <strong>Organization level</strong> to enforce account-wide restrictions such as:</p>
      <ul>
        <li>Deny creation of resources outside approved regions</li>
        <li>Block disabling CloudTrail</li>
        <li>Prevent root account usage</li>
        <li>Enforce encryption on specific services</li>
      </ul>
    </div>
  `,v1c11:`
    <h3>AWS Identity Center (SSO)</h3>
    <p>
      AWS Identity Center (formerly AWS SSO) is the centralized identity management service for AWS Organizations. It enables single sign-on access to AWS accounts, cloud applications, and custom applications.
    </p>

    <h4>What Problem Does Identity Center Solve?</h4>
    <p>Without Identity Center, each AWS account requires separate IAM users and credentials. In a multi-account environment (common in enterprises), this creates:</p>
    <ul>
      <li>Credentials sprawl — users have separate passwords for each account</li>
      <li>Inconsistent access management across accounts</li>
      <li>Difficult compliance tracking</li>
      <li>Increased attack surface from multiple credential sets</li>
    </ul>

    <h4>How Identity Center Works</h4>
    <ol>
      <li><strong>Central Directory:</strong> Uses AWS Managed Microsoft AD, AD Connector, or SAML 2.0 federation to connect to your identity source (on-prem AD or other IdP)</li>
      <li><strong>Permission Sets:</strong> Define IAM policies that determine what users/roles can do in target accounts (replaces the need for IAM users in each account)</li>
      <li><strong>Account Assignments:</strong> Map users/groups to specific AWS accounts with specific permission sets</li>
      <li><strong>SSO Portal:</strong> Users access all assigned accounts through a single web portal at <code>myapps.aws.amazon.com</code></li>
    </ol>

    <h4>Permission Sets</h4>
    <p>Permission sets are essentially IAM policies packaged for Identity Center:</p>
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Built-in</td><td>Pre-defined permission levels</td><td>AdministratorAccess, ReadOnlyAccess, PowerUserAccess</td></tr>
        <tr><td>Custom</td><td>Your own fine-grained policies</td><td>S3-Access-Only, Billing-Viewer</td></tr>
        <tr><td>Session Duration</td><td>Configurable session length</td><td>1 hour (default) up to 12 hours</td></tr>
      </tbody>
    </table>

    <h4>Identity Center Security Best Practices</h4>
    <ul>
      <li>Federation with corporate identity provider (Azure AD, Okta, etc.) — <strong>eliminate standalone passwords</strong></li>
      <li>Enable MFA at the identity provider level (not just at AWS level)</li>
      <li>Use permission set assignment through groups, not individual users</li>
      <li>Implement account-level session duration controls</li>
      <li>Monitor sign-in events with CloudTrail</li>
      <li>Use application assignments for non-AWS SaaS apps alongside AWS access</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Identity Center vs. Cross-Account Role</div>
      <p><strong>Both</strong> enable cross-account access, but with key differences:</p>
      <table>
        <thead>
          <tr><th>Feature</th><th>Identity Center</th><th>Cross-Account Role</th></tr>
        </thead>
        <tbody>
          <tr><td>Setup Complexity</td><td>Low (centralized)</td><td>Higher (per-account roles)</td></tr>
          <tr><td>User Experience</td><td>Single portal, SSO</td><td>Switch role in console or assume via CLI</td></tr>
          <tr><td>Scalability</td><td>Excellent (100s of accounts)</td><td>Complex at scale</td></tr>
          <tr><td>Fine-Grained Control</td><td>Permission sets + account assignments</td><td>Individual role trust policies</td></tr>
          <tr><td>Best For</td><td>Enterprises with AWS Organizations</td><td>Simple 2-3 account setups or automation</td></tr>
        </tbody>
      </table>
    </div>
  `,v1c12:`
    <h3>AWS KMS and Encryption</h3>
    <p>
      AWS Key Management Service (KMS) is the encryption engine at the heart of AWS security. Understanding KMS is essential because encryption protects data confidentiality, and KMS manages the keys that make it all work.
    </p>

    <h4>What is KMS?</h4>
    <p>AWS KMS is a managed service that makes it easy to create and control the cryptographic keys used to encrypt your data. KMS uses <strong>Hardware Security Modules (HSMs)</strong> — FIPS 140-2 validated hardware — to protect key material.</p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Envelope Encryption</div>
      <p>AWS uses <strong>envelope encryption</strong> to protect data efficiently:</p>
      <ol>
        <li>Generate a <strong>Data Encryption Key (DEK)</strong> to encrypt your data</li>
        <li>Encrypt the DEK itself with a <strong>Master Key (CMK)</strong> stored in KMS</li>
        <li>Store the encrypted DEK alongside your encrypted data</li>
        <li>When decrypting, send the encrypted DEK to KMS, which decrypts it using the CMK</li>
      </ol>
      <p><strong>Why?</strong> Encrypting each piece of data directly with a master key would exhaust the key's cryptographic limits. Instead, lightweight DEKs encrypt the data, and the master key only protects the DEK. This scales to billions of objects.</p>
    </div>

    <h4>Types of KMS Keys</h4>
    <table>
      <thead>
        <tr>
          <th>Key Type</th>
          <th>Managed By</th>
          <th>Use Case</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>AWS Managed Keys</strong></td>
          <td>AWS (automatic)</td>
          <td>Default encryption for services like S3, EBS, RDS</td>
          <td>Free</td>
        </tr>
        <tr>
          <td><strong>Customer Managed Keys (CMK)</strong></td>
          <td>You (with KMS)</td>
          <td>Granular control, custom key policies, cross-account</td>
          <td>$1/month per key + API calls</td>
        </tr>
        <tr>
          <td><strong>Customer Managed Keys (Custom Key Store)</strong></td>
          <td>You (in CloudHSM)</td>
          <td>Full FIPS 140-2 Level 3 compliance, single-tenant HSM</td>
          <td>CloudHSM monthly fee + KMS usage</td>
        </tr>
      </tbody>
    </table>

    <h4>Key Policy vs. IAM Policy</h4>
    <p>A common source of confusion: KMS keys have their <strong>own resource-based policy</strong> separate from IAM policies. Both must allow access:</p>
    <pre><code>
# KMS Key Policy (must be attached to the key)
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "Allow IAM Role to use key",
    "Effect": "Allow",
    "Principal": {
      "AWS": "arn:aws:iam::111122223333:role/my-app-role"
    },
    "Action": [
      "kms:Encrypt",
      "kms:Decrypt",
      "kms:GenerateDataKey"
    ],
    "Resource": "*"
  }]
}

// Even with this key policy, the IAM role must ALSO have
// a permission policy allowing KMS actions.
// BOTH must allow — KMS combines them with AND logic.
</code></pre>

    <h4>KMS Key Rotation</h4>
    <ul>
      <li><strong>Automatic Rotation:</strong> Available for CMKs, rotates key material every year. Old material retained for decryption of previously encrypted data</li>
      <li><strong>Manual Rotation:</strong> You create a new key and update applications. Provides full control</li>
      <li><strong>Best Practice:</strong> Enable automatic rotation for all CMKs. For compliance, enable annually</li>
    </ul>

    <h4>Encryption Across AWS Services</h4>
    <table>
      <thead>
        <tr>
          <th>Service</th>
          <th>At-Rest Encryption</th>
          <th>In-Transit Encryption</th>
          <th>KMS Integration</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>S3</td><td>AES-256 (SSE-S3) or KMS (SSE-KMS)</td><td>TLS 1.2+</td><td>SSE-KMS with customer CMK</td></tr>
        <tr><td>EBS</td><td>AES-256 via EBS encryption</td><td>N/A (server-side)</td><td>Encrypted volume with KMS key</td></tr>
        <tr><td>RDS</td><td>AES-256 via KMS</td><td>SSL/TLS</td><td>Encrypted DB instance with KMS</td></tr>
        <tr><td>Lambda</td><td>Environment variables encrypted</td><td>TLS</td><td>KMS key for env var encryption</td></tr>
        <tr><td>SQS/SNS</td><td>Server-side encryption with KMS</td><td>TLS</td><td>SSE-KMS supported</td></tr>
        <tr><td>EFS</td><td>AES-256</td><td>TLS 1.2</td><td>KMS-managed keys</td></tr>
      </tbody>
    </table>

    <div class="warning-box">
      <div class="warning-title">⚠️ Common KMS Pitfalls</div>
      <ul>
        <li><strong>Key deletion:</strong> Keys scheduled for deletion have a 7-30 day waiting period. Data encrypted with a deleted key is <strong>permanently unrecoverable</strong></li>
        <li><strong>Cross-account access:</strong> Key policy must explicitly grant access to external accounts</li>
        <li><strong>API rate limits:</strong> KMS has throttling — batch operations may hit <code>ThrottlingException</code>. Request a quota increase proactively</li>
        <li><strong>Import key material:</strong> You can import your own key material (Bring Your Own Key), but you cannot export AWS-managed key material</li>
      </ul>
    </div>
  `,v1c13:`
    <h3>AWS VPC Security</h3>
    <p>
      A Virtual Private Cloud (VPC) is your private, isolated section of the AWS Cloud. VPC security is foundational because <strong>every AWS resource lives in a VPC</strong>. A misconfigured VPC can expose your entire environment.
    </p>

    <h4>VPC Fundamentals</h4>
    <p>When you create a VPC, you define:</p>
    <ul>
      <li><strong>CIDR Block:</strong> IP address range (e.g., <code>10.0.0.0/16</code> = 65,536 addresses)</li>
      <li><strong>Subnets:</strong> Subdivisions within the VPC's CIDR range</li>
      <li><strong>Route Tables:</strong> Determine where network traffic is directed</li>
      <li><strong>Internet Gateway (IGW):</strong> Enables VPC to communicate with the internet</li>
      <li><strong>NAT Gateway:</strong> Allows private subnet resources to access the internet (outbound only)</li>
    </ul>

    <h4>Subnet Types and Security</h4>
    <table>
      <thead>
        <tr>
          <th>Subnet Type</th>
          <th>Internet Access</th>
          <th>Use Case</th>
          <th>Security Level</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Public Subnet</strong></td>
          <td>Direct (via Internet Gateway)</td>
          <td>Web servers, bastion hosts, load balancers</td>
          <td>Lower — resources have public IPs</td>
        </tr>
        <tr>
          <td><strong>Private Subnet</strong></td>
          <td>Outbound only (via NAT Gateway)</td>
          <td>Application servers, databases</td>
          <td>Higher — no direct internet access</td>
        </tr>
        <tr>
          <td><strong>Isolated Subnet</strong></td>
          <td>None</td>
          <td>Highly sensitive resources, data processing</td>
          <td>Highest — fully air-gapped</td>
        </tr>
      </tbody>
    </table>

    <h4>Security Groups (SGs) — Stateful Firewalls</h4>
    <p>Security Groups act as virtual firewalls for your EC2 instances and other ENI-attached resources.</p>
    <div class="key-box">
      <div class="key-title">🔑 Key Properties of Security Groups</div>
      <ul>
        <li><strong>Stateful:</strong> If you allow inbound traffic, the response is automatically allowed outbound</li>
        <li><strong>Default Deny:</strong> All inbound traffic is denied unless explicitly allowed by rules</li>
        <li><strong>Default Allow:</strong> All outbound traffic is allowed (can be restricted)</li>
        <li><strong>Attach to Multiple Resources:</strong> One SG can be attached to many instances</li>
        <li><strong>Reference Other SGs:</strong> Rules can reference other security groups (useful for microsegmentation)</li>
      </ul>
    </div>

    <h5>Security Group Best Practices</h5>
    <ol>
      <li><strong>Default SG:</strong> Replace it, don't use it for production resources</li>
      <li><strong>Principle of Least Privilege:</strong> Only allow specific IPs, ports, and protocols</li>
      <li><strong>Never use 0.0.0.0/0:</strong> Except for public-facing load balancers — and even then, restrict to specific ports</li>
      <li><strong>Use separate SGs per tier:</strong> Web tier SG, App tier SG, DB tier SG — allow only necessary cross-tier traffic</li>
      <li><strong>Audit SGs regularly:</strong> Use AWS Security Hub or tools like Prowler</li>
    </ol>

    <h4>Network ACLs (NACLs) — Stateless Firewalls</h4>
    <p>While Security Groups operate at the instance level, NACLs operate at the <strong>subnet level</strong> and provide an additional layer of defense.</p>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Security Group</th>
          <th>NACL</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Scope</td><td>Instance (ENI)</td><td>Subnet</td></tr>
        <tr><td>Statefulness</td><td>Stateful (auto-allow responses)</td><td>Stateless (must define both inbound and outbound rules)</td></tr>
        <tr><td>Default</td><td>Deny all inbound, allow all outbound</td><td>Allow all inbound and outbound</td></tr>
        <tr><td>Rule Evaluation</td><td>All rules evaluated, all allow</td><td>Evaluated by rule number, first match wins</td></tr>
        <tr><td>Explicit Deny</td><td>Not needed (implicit deny)</td><td>Can explicitly deny specific IPs/ports</td></tr>
      </tbody>
    </table>

    <div class="warning-box">
      <div class="warning-title">⚠️ Critical: NACL Rule Ordering</div>
      <p>NACL rules are evaluated in <strong>numerical order from lowest to highest</strong>. The first matching rule wins. If Rule 100 allows <code>0.0.0.0/0</code> on port 22, Rule 200 denying <code>0.0.0.0/0</code> on port 22 will <strong>never be reached</strong>. Always number deny rules with lower numbers than allow rules.</p>
    </div>

    <h4>VPC Security Patterns</h4>
    <h5>1. Three-Tier Architecture</h5>
    <pre><code>
Internet
   │
   ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Public      │────▶│  Private    │────▶│  Private     │
│  Subnet      │     │  Subnet     │     │  (Database)   │
│  (ALB, WAF)  │     │  (App)      │     │  Subnet       │
└─────────────┘     └─────────────┘     └─────────────┘
  SG: 80,443 in     SG: only ALB     SG: only App SG
  SG: SSH from      SG: DB port      SG: DB port only
    bastion only    out: none        out: none
</code></pre>

    <h5>2. VPC Flow Logs for Monitoring</h5>
    <p>VPC Flow Logs capture information about IP traffic going to and from network interfaces. Enable them on <strong>all</strong> production VPCs:</p>
    <ul>
      <li>Capture: Accept, Reject, or All traffic</li>
      <li>Destination: CloudWatch Logs or S3</li>
      <li>Retention: At least 90 days for incident investigation</li>
      <li>Use case: Detect lateral movement, data exfiltration, brute force</li>
    </ul>

    <h5>3. VPC Peering & Transit Gateway</h5>
    <ul>
      <li><strong>VPC Peering:</strong> Direct connection between two VPCs — no internet transit, no encryption by default</li>
      <li><strong>Transit Gateway:</strong> Hub-and-spoke model connecting many VPCs and on-prem networks</li>
      <li><strong>Security Consideration:</strong> Each side's security groups and NACLs still apply — peering doesn't bypass security controls</li>
    </ul>
  `,v1c14:`
    <h3>AWS S3 Security</h3>
    <p>
      Amazon S3 (Simple Storage Service) is one of the most widely used AWS services — and one of the most frequently <strong>misconfigured</strong>. S3 buckets have been responsible for some of the largest data breaches in history.
    </p>

    <h4>S3 Security Fundamentals</h4>
    <p>S3 has <strong>four layers of access control</strong>:</p>
    <ol>
      <li><strong>IAM Policies:</strong> Control which users/roles can call S3 APIs</li>
      <li><strong>Bucket Policies:</strong> Resource-based policies controlling access at the bucket level</li>
      <li><strong>Access Control Lists (ACLs):</strong> Legacy, object-level access grants — <strong>avoid</strong></li>
      <li><strong>S3 Block Public Access:</strong> Account-level and bucket-level settings to prevent public access</li>
    </ol>

    <div class="warning-box">
      <div class="warning-title">⚠️ The Four Public Access Settings</div>
      <p>S3 Block Public Access has four settings that should ALL be enabled at the account level unless explicitly overridden:</p>
      <ul>
        <li><strong>BlockPublicAcls:</strong> Ignores ACLs that grant public access</li>
        <li><strong>IgnorePublicAcls:</strong> Prevents PUT requests with public ACLs</li>
        <li><strong>BlockPublicPolicy:</strong> Blocks bucket policies that grant public access</li>
        <li><strong>RestrictPublicBuckets:</strong> Limits public access to buckets with public policies</li>
      </ul>
    </div>

    <h4>Encryption Options</h4>
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Server-Side?</th>
          <th>Key Management</th>
          <th>How to Enforce</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>SSE-S3</strong></td>
          <td>Yes</td>
          <td>AWS managed keys (S3 managed)</td>
          <td>Default encryption on bucket</td>
        </tr>
        <tr>
          <td><strong>SSE-KMS</strong></td>
          <td>Yes</td>
          <td>Customer managed KMS keys</td>
          <td>Bucket policy + KMS key policy</td>
        </tr>
        <tr>
          <td><strong>SSE-C</strong></td>
          <td>Yes</td>
          <td>Customer provided keys</td>
          <td>Pass key with each API call</td>
        </tr>
        <tr>
          <td><strong>Client-Side</strong></td>
          <td>No</td>
          <td>You encrypt before upload</td>
          <td>Application code/AWS Encryption SDK</td>
        </tr>
      </tbody>
    </table>

    <h4>Secure Bucket Configuration Checklist</h4>
    <ol>
      <li>Enable <strong>S3 Block Public Access</strong> at the account level</li>
      <li>Enable <strong>default encryption</strong> (SSE-S3 or SSE-KMS)</li>
      <li>Enable <strong>versioning</strong> — protects against accidental deletion and enables data recovery</li>
      <li>Enable <strong>MFA Delete</strong> — requires MFA to delete object versions (root account only)</li>
      <li>Enable <strong>access logging</strong> — logs all access requests to a separate bucket</li>
      <li>Remove <strong>ACLs</strong> — use bucket policies and IAM instead</li>
      <li>Use <strong>S3 Object Lock</strong> for compliance (WORM — Write Once, Read Many) requirements</li>
      <li>Configure <strong>lifecycle policies</strong> to auto-transition to cheaper tiers or expire</li>
      <li>Enable <strong>event notifications</strong> for monitoring access patterns</li>
    </ol>

    <h4>Common S3 Misconfigurations</h4>
    <table>
      <thead>
        <tr>
          <th>Misconfiguration</th>
          <th>Risk</th>
          <th>Fix</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bucket ACL allows "Everyone"</td>
          <td>Public data access</td>
          <td>Enable Block Public Access, use IAM/bucket policies</td>
        </tr>
        <tr>
          <td>No encryption enabled</td>
          <td>Data readable if storage compromised</td>
          <td>Enable default encryption (SSE-S3 or SSE-KMS)</td>
        </tr>
        <tr>
          <td>Cross-account access misconfigured</td>
          <td>Unintended cross-account data sharing</td>
          <td>Explicitly specify account ARNs in bucket policies</td>
        </tr>
        <tr>
          <td>Logging not enabled</td>
          <td>No audit trail for data access</td>
          <td>Enable server access logging</td>
        </tr>
        <tr>
          <td>Outdated bucket policy with wildcards</td>
          <td>Excessive permissions</td>
          <td>Review and scope bucket policies to specific principals</td>
        </tr>
      </tbody>
    </table>

    <h5>Example: Secure S3 Bucket Policy</h5>
    <pre><code>
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "DenyUnencryptedUploads",
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:PutObject",
      "Resource": "arn:aws:s3:::my-secure-bucket/*",
      "Condition": {
        "StringNotEquals": {
          "s3:x-amz-server-side-encryption": "aws:kms"
        }
      }
    },
    {
      "Sid": "DenyInsecureConnections",
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:*",
      "Resource": [
        "arn:aws:s3:::my-secure-bucket",
        "arn:aws:s3:::my-secure-bucket/*"
      ],
      "Condition": {
        "Bool": {
          "aws:SecureTransport": "false"
        }
      }
    }
  ]
}
</code></pre>
    <p>This policy does two things: <strong>denies uploads without KMS encryption</strong> and <strong>denies any connection that's not HTTPS</strong>.</p>
  `,v1c15:`
    <h3>AWS EC2 Security</h3>
    <p>
      Amazon Elastic Compute Cloud (EC2) provides scalable computing capacity in the AWS cloud. EC2 instances are among the most commonly compromised cloud resources, making security hardening absolutely critical.
    </p>

    <h4>EC2 Security Layers</h4>
    <table>
      <thead>
        <tr>
          <th>Layer</th>
          <th>Security Mechanism</th>
          <th>Controls</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Instance Level</td>
          <td>Security Groups</td>
          <td>Inbound/outbound traffic rules</td>
        </tr>
        <tr>
          <td>Network Level</td>
          <td>VPC, Subnets, NACLs, VPC Flow Logs</td>
          <td>Network isolation, traffic monitoring</td>
        </tr>
        <tr>
          <td>Operating System</td>
          <td>AMI hardening, patching, SELinux/AppArmor</td>
          <td>Host firewall, minimal packages, CIS benchmarks</td>
        </tr>
        <tr>
          <td>Application</td>
          <td>Application-level controls</td>
          <td>Input validation, auth, WAF</td>
        </tr>
        <tr>
          <td>Data</td>
          <td>Encryption (EBS, SSM, KMS)</td>
          <td>Encrypted volumes, secrets management</td>
        </tr>
      </tbody>
    </table>

    <h4>EC2 Instance Metadata Service (IMDS)</h4>
    <div class="key-box">
      <div class="key-title">🔑 Key Concept: IMDS Security</div>
      <p>Every EC2 instance has access to the Instance Metadata Service at <code>169.254.169.254</code>. This service provides temporary AWS credentials (access key, secret key, session token) via IAM roles attached to the instance. This was the attack vector in the <strong>Capital One breach</strong>.</p>
      <ul>
        <li><strong>IMDSv1:</strong> Simple HTTP PUT — no authentication. Vulnerable to SSRF attacks.</li>
        <li><strong>IMDSv2:</strong> Requires session tokens via a PUT hop-first request. Much more secure.</li>
      </ul>
      <p><strong>Best Practice:</strong> Always enforce IMDSv2. You can configure this at the launch template or launch configuration level.</p>
    </div>

    <h5>Enforcing IMDSv2</h5>
    <pre><code>
# AWS CLI to create a launch template with IMDSv2 required
aws ec2 create-launch-template   --launch-template-name secure-template   --version-description "IMDSv2 required"   --launch-template-data '{
    "MetadataOptions": {
      "HttpTokens": "required",
      "HttpPutResponseHopLimit": 2,
      "HttpEndpoint": "enabled"
    }
  }'
</code></pre>

    <h4>EC2 Security Hardening Checklist</h4>
    <ol>
      <li>Use the <strong>latest generation</strong> instance types (better performance and security features)</li>
      <li>Use <strong>Amazon Linux 2023</strong>, Ubuntu 22.04 LTS, or similar well-maintained AMIs</li>
      <li>Disable password authentication; use <strong>SSH key pairs</strong> or <strong>SSM Session Manager</strong></li>
      <li>Configure security groups with <strong>least privilege</strong> — never open SSH/RDP to 0.0.0.0/0</li>
      <li>Enable <strong>detailed monitoring</strong> (1-minute granularity)</li>
      <li>Use <strong>encrypted EBS volumes</strong> with KMS customer-managed keys</li>
      <li>Apply <strong>OS-level hardening</strong> (CIS Benchmark): disable unnecessary services, configure firewall, enable audit logging</li>
      <li>Install <strong>AWS Systems Manager Agent</strong> for automated patching and management</li>
      <li>Enable <strong>VPC Flow Logs</strong> for network traffic monitoring</li>
      <li>Use <strong>GuardDuty</strong> for threat detection on EC2 workloads</li>
      <li>Implement <strong>auto-scaling with launch templates</strong> (not manual instances)</li>
      <li>Tag all instances consistently for cost tracking and access control</li>
    </ol>

    <h4>Bastion Hosts vs. AWS Systems Manager</h4>
    <p>Traditional approach:</p>
    <pre><code>
  Developer SSH → Bastion Host → EC2 Instance
  (Requires VPN, key management, bastion hardening)
</code></pre>
    <p>Modern approach (preferred):</p>
    <pre><code>
  Developer → AWS Console/CLI → SSM Session Manager → EC2 Instance
  (No SSH keys, no bastion, fully audited, uses IAM auth)
</code></pre>

    <div class="info-box">
      <div class="info-title">💡 Recommendation: Use SSM Session Manager</div>
      <p>SSH uses key pairs that must be managed, rotated, and protected. <strong>AWS Systems Manager Session Manager</strong> eliminates SSH entirely:</p>
      <ul>
        <li>Uses IAM authentication instead of SSH keys</li>
        <li>All sessions are logged automatically to CloudWatch Logs and/or S3</li>
        <li>No need for bastion hosts or VPN tunnels</li>
        <li>Works with IAM policies for granular access control</li>
      </ul>
    </div>
  `,v1c16:`
    <h3>AWS Lambda Security</h3>
    <p>
      AWS Lambda is a serverless compute service that runs your code in response to events. While Lambda reduces infrastructure management overhead, it introduces unique security considerations.
    </p>

    <h4>Lambda Security Model</h4>
    <p>Each Lambda function has its own security context:</p>
    <ul>
      <li><strong>Execution Role:</strong> IAM role that Lambda assumes when executing your function code</li>
      <li><strong>Resource Policy:</strong> Controls which services/accounts can invoke the function</li>
      <li><strong>Environment Variables:</strong> Stored encrypted with KMS; accessible by any code running in the function</li>
      <li><strong>VPC Configuration:</strong> Functions can run inside your VPC for private resource access</li>
      <li><strong>Layers:</strong> Reusable dependencies that run with your function</li>
    </ul>

    <h4>Common Lambda Security Pitfalls</h4>
    <div class="warning-box">
      <div class="warning-title">⚠️ Lambda Anti-Patterns</div>
      <ul>
        <li><strong>Overprivileged execution roles:</strong> Using <code>AdministratorAccess</code> instead of scoped permissions</li>
        <li><strong>Secrets in environment variables:</strong> Plain text secrets visible in console (use Lambda Extensions + Secrets Manager)</li>
        <li><strong>No timeout configured:</strong> Can lead to resource exhaustion and unexpected costs</li>
        <li><strong>Publicly accessible functions:</strong> Invoking Lambda from API Gateway without authentication</li>
        <li><strong>Insecure dependencies:</strong> Outdated or malicious packages in deployment packages/layers</li>
      </ul>
    </div>

    <h4>Lambda Security Best Practices</h4>
    <ol>
      <li><strong>Least privilege execution role:</strong> Only grant permissions for the specific services and actions your function needs</li>
      <li><strong>Use managed runtimes:</strong> AWS manages the runtime; bring-your-own runtimes require more security attention</li>
      <li><strong>Secure environment variables:</strong> Use AWS Lambda Extensions to fetch secrets from Secrets Manager at runtime</li>
      <li><strong>Enable code signing:</strong> Use AWS Signer to ensure only trusted, untampered code runs in production</li>
      <li><strong>Use VPC endpoints:</strong> Keep Lambda-to-AWS traffic within the AWS network</li>
      <li><strong>Enable X-Ray tracing:</strong> For security observability and debugging</li>
      <li><strong>Implement concurrency limits:</strong> Prevent resource exhaustion attacks</li>
      <li><strong>Use ARM64 architecture:</strong> 20% cheaper and has smaller attack surface than x86</li>
    </ol>

    <h5>Cold Start Security Considerations</h5>
    <p>Lambda's "cold start" initialization creates unique security implications:</p>
    <ul>
      <li>Environment variables are decrypted once at initialization — stored in memory</li>
      <li>Temporary files created during initialization persist across warm invocations</li>
      <li><strong>Best practice:</strong> Never write sensitive data to <code>/tmp</code>; clear it between invocations</li>
    </ul>

    <div class="callout">
      <div class="callout-icon">🏗️</div>
      <div class="callout-content">
        <h4>Code Signing Example</h4>
        <p>Lambda code signing uses a signing profile with a trusted publisher:</p>
        <pre><code>
# Create a code signing configuration
aws lambda create-code-signing-config   --allowed-publishers SigningProfileVersionArns=arn:aws:signer:us-east-1:123456789:signing-profile:my-profile:1   --code-signing-policies '{"UntrustedArtifactOnDeployment":"Enforce"}'
</code></pre>
        <p>This ensures <strong>only signed, verified code</strong> can be deployed to your production Lambda functions.</p>
      </div>
    </div>
  `,v1c17:`
    <h3>AWS CloudTrail</h3>
    <p>
      AWS CloudTrail is the <strong>audit backbone</strong> of your AWS environment. It records API calls and account activity across your AWS infrastructure, providing a comprehensive history of who did what, when, and from where.
    </p>

    <h4>What CloudTrail Captures</h4>
    <ul>
      <li><strong>Management Events:</strong> Control plane operations (CreateBucket, DeleteInstance, AttachRolePolicy)</li>
      <li><strong>Data Events:</strong> Data plane operations (S3 GetObject, Lambda Invoke) — <em>must be explicitly enabled</em></li>
      <li><strong>CloudTrail Insights:</strong> Detects unusual patterns (e.g., spike in TerminateInstances)</li>
    </ul>

    <h4>CloudTrail Configuration Best Practices</h4>
    <ol>
      <li><strong>Multi-region trail:</strong> Always create a trail that applies to <strong>all regions</strong>, even if you only deploy in one. Attackers may use other regions.</li>
      <li><strong>S3 bucket with MFA delete:</strong> Store logs in S3 with versioning and MFA delete to prevent tampering</li>
      <li><strong>CloudWatch Logs integration:</strong> Send CloudTrail events to CloudWatch for real-time monitoring and alerting</li>
      <li><strong>Enable log file validation:</strong> Uses SHA-256 hashing to detect log tampering</li>
      <li><strong>Data events:</strong> Enable for sensitive resources (S3 buckets with PII, Lambda functions)</li>
    </ol>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Immutable Audit Trail</div>
      <p>Your CloudTrail logs are <strong>legal evidence</strong>. During a security incident, attackers may try to delete or modify logs. Protect them with:</p>
      <ul>
        <li>S3 Object Lock (WORM compliance mode)</li>
        <li>Multi-region trail (harder to destroy completely)</li>
        <li>Duplicate logs to a separate "security" account</li>
        <li>Enable log file validation (cryptographic proof of integrity)</li>
      </ul>
    </div>

    <h4>CloudTrail Event Structure</h4>
    <p>Each CloudTrail event is a JSON document:</p>
    <pre><code>
{
  "eventVersion": "1.08",
  "userIdentity": {
    "type": "AssumedRole",
    "arn": "arn:aws:iam::123456789:role/admin"
  },
  "eventTime": "2024-01-15T10:30:00Z",
  "eventSource": "s3.amazonaws.com",
  "eventName": "PutObject",
  "awsRegion": "us-east-1",
  "sourceIPAddress": "203.0.113.50",
  "requestParameters": {
    "bucketName": "sensitive-data-bucket"
  }
}
</code></pre>

    <h4>Detecting Suspicious Activity with CloudTrail</h4>
    <table>
      <thead>
        <tr>
          <th>Suspicious Activity</th>
          <th>CloudTrail Event to Monitor</th>
          <th>Response</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Root account usage</td>
          <td><code>ConsoleLogin</code> with <code>additionalEventData.RootUserUsage: "Yes"</code></td>
          <td>Immediate alert to security team</td>
        </tr>
        <tr><td>IAM policy changes</td><td><code>PutUserPolicy</code>, <code>AttachRolePolicy</code></td><td>High priority alert</td></tr>
        <tr><td>CloudTrail disabled</td><td><code>StopLogging</code></td><td>Critical alert — possible attacker covering tracks</td></tr>
        <tr><td>Console login from unusual location</td><td><code>ConsoleLogin</code> with new source IP</td><td>Verify with user, trigger MFA challenge</td></tr>
        <tr><td>Mass data download</td><td>Multiple <code>GetObject</code> from S3</td><td>Check if authorized; possible data exfiltration</td></tr>
        <tr><td>Security group modification</td><td><code>AuthorizeSecurityGroupIngress</code></td><td>Verify legitimacy</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 CloudTrail Lake</div>
      <p><strong>CloudTrail Lake</strong> allows you to run SQL queries directly on your CloudTrail events without setting up a data lake. Example use cases:</p>
      <ul>
        <li>Find all S3 buckets made public in the last 30 days</li>
        <li>Identify all users who logged in without MFA</li>
        <li>Detect API calls from IP addresses in threat intelligence feeds</li>
      </ul>
    </div>
  `,v1c18:`
    <h3>AWS GuardDuty</h3>
    <p>
      Amazon GuardDuty is AWS's <strong>intelligent threat detection</strong> service. It continuously monitors your AWS accounts and workloads for malicious activity and unauthorized behavior using machine learning, anomaly detection, and integrated threat intelligence.
    </p>

    <div class="info-box">
      <div class="info-title">💡 How GuardDuty Works</div>
      <p>GuardDuty analyzes data from multiple sources without deploying any agents or software:</p>
      <ul>
        <li><strong>CloudTrail Events:</strong> Detects unusual API calls, reconnaissance, and privilege escalation</li>
        <li><strong>VPC Flow Logs:</strong> Identifies anomalous network traffic patterns (e.g., communication with known C2 servers)</li>
        <li><strong>DNS Logs:</strong> Detects DNS query patterns associated with crypto miners, malware, and data exfiltration</li>
      </ul>
      <p>All analysis is performed by AWS in the background — there's no performance impact on your workloads.</p>
    </div>

    <h5>GuardDuty Finding Types</h5>
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>What It Detects</th>
          <th>Severity</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Reconnaissance</strong></td>
          <td>Unusual API activity, port scanning, vulnerability probing</td>
          <td>Low to Medium</td>
          <td><code>Recon:EC2/PortProbeUnprotectedPort</code></td>
        </tr>
        <tr>
          <td><strong>Instance Compromise</strong></td>
          <td>Cryptomining, malware communication, backdoor access</td>
          <td>Medium to High</td>
          <td><code>Trojan:EC2/BlackNixies</code> (cryptominer)</td>
        </tr>
        <tr>
          <td><strong>Account Compromise</strong></td>
          <td>Unusual API calls, API calls from Tor nodes, credential theft</td>
          <td>Medium to High</td>
          <td><code>UnauthorizedAccess:IAMUser</code></td>
        </tr>
        <tr>
          <td><strong>Bucket Compromise</strong></td>
          <td>Unusual S3 access patterns, data exfiltration</td>
          <td>High</td>
          <td><code>S3/PermissionsChange</code></td>
        </tr>
        <tr>
          <td><strong>Resource Consumption</strong></td>
          <td>Cryptomining, unusual compute usage</td>
          <td>Medium</td>
          <td><code>CryptoCurrency:EC2/BitcoinTool</code></td>
        </tr>
        <tr>
          <td><strong>Network Intrusion</strong></td>
          <td>Unusual VPC traffic, port scanning</td>
          <td>Medium</td>
          <td><code>Recon:EC2/Portscan</code></td>
        </tr>
        <tr>
          <td><strong>Penetration Testing</strong></td>
          <td>Pen testing tools detected (Kali Linux, Metasploit)</td>
          <td>High</td>
          <td><code>Recon:EC2/KaliLinux</code></td>
        </tr>
      </tbody>
    </table>

    <h4>GuardDuty Setup Best Practices</h4>
    <ol>
      <li>Enable GuardDuty in <strong>all regions</strong> (attackers may use non-production regions)</li>
      <li>Enable <strong>Auto-enable for new accounts</strong> in the organization settings</li>
      <li>Configure <strong>CloudWatch Events</strong> to trigger Lambda functions for automated remediation</li>
      <li>Set up <strong>SNS notifications</strong> for Medium and High severity findings</li>
      <li>Review findings weekly in the GuardDuty console</li>
      <li>Enable <strong>malware protection</strong> for EC2 workloads (scans EBS volumes and containers)</li>
    </ol>

    <h4>Automated Response to GuardDuty Findings</h4>
    <pre><code>
# Example AWS EventBridge rule for GuardDuty findings
{
  "source": ["aws.guardduty"],
  "detail-type": ["GuardDuty Finding"],
  "detail": {
    "severity": [{"numeric": [">=", 7]}]
  }
}
# Route to SNS → Lambda → Auto-isolate instance,
# notify Slack, create Jira ticket, etc.
</code></pre>

    <div class="success-box">
      <div class="success-title">✓ Real-World Detection</div>
      <p>GuardDuty detected a crypto-mining attack in a customer's environment by identifying:</p>
      <ul>
        <li>An EC2 instance making DNS queries to known crypto-mining pool domains</li>
        <li>Unusual outbound network traffic at 2 AM</li>
        <li>The finding <code>CryptoCurrency:EC2/BitcoinTool.B!DNS</code> was triggered automatically</li>
      </ul>
    </div>
  `,v1c19:`
    <h3>AWS Security Hub</h3>
    <p>
      AWS Security Hub is the <strong>centralized security dashboard</strong> for your AWS environment. It aggregates, organizes, and prioritizes security findings from multiple AWS services and integrated third-party tools.
    </p>

    <h4>What Security Hub Does</h4>
    <p>Without Security Hub, you'd need to check multiple consoles and dashboards for security issues:</p>
    <ul>
      <li>CloudTrail → API activity</li>
      <li>GuardDuty → Threat detection</li>
      <li>Inspector → Vulnerability scanning</li>
      <li>Macie → Sensitive data detection</li>
      <li>IAM Access Analyzer → External access</li>
    </ul>
    <p><strong>Security Hub unifies all of this</strong> into a single view with prioritization.</p>

    <h4>Security Standards</h4>
    <p>Security Hub continuously checks your environment against security best-practice standards:</p>
    <table>
      <thead>
        <tr>
          <th>Standard</th>
          <th>Focus</th>
          <th>Controls</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>AWS Foundational Security Best Practices</strong></td><td>Critical security checks</td><td>135+ controls</td></tr>
        <tr><td><strong>CIS AWS Foundations Benchmark</strong></td><td>CIS benchmarks</td><td>180+ controls</td></tr>
        <tr><td><strong>AWS Well-Architected Framework</strong></td><td>Architecture review</td><td>100+ controls</td></tr>
        <tr><td><strong>PCI DSS</strong></td><td>Payment card security</td><td>300+ controls</td></tr>
        <tr><td><strong>AWS Control Tower Guardrails</strong></td><td>Multi-account governance</td><td>Varies</td></tr>
      </tbody>
    </table>

    <h4>Finding Prioritization</h4>
    <p>Each finding has a severity score (0-100) based on three factors:</p>
    <table>
      <thead>
        <tr>
          <th>Factor</th>
          <th>Description</th>
          <th>Weight</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>Severity</strong></td><td>How bad is the issue?</td><td>30%</td></tr>
        <tr><td><strong>Compliance Status</strong></td><td>Does it violate a standard?</td><td>30%</td></tr>
        <tr><td><strong>Resource Exposure</strong></td><td>Is it internet-facing?</td><td>40%</td></tr>
      </tbody>
    </table>

    <h4>Insight Filters for Investigation</h4>
    <p>Security Hub Insights let you search and analyze findings:</p>
    <div class="info-box">
      <div class="info-title">💡 Example Security Hub Insights</div>
      <ul>
        <li><strong>Top 10 IAM users without MFA</strong> — prioritize remediation</li>
        <li><strong>All public S3 buckets</strong> — immediate data exposure check</li>
        <li><strong>Unpatched EC2 instances</strong> — prioritize by CVE severity</li>
        <li><strong>Cross-account API calls</strong> — detect privilege escalation</li>
      </ul>
    </div>

    <h4>Security Hub Best Practices</h4>
    <ol>
      <li>Enable <strong>all available standards</strong> in your account</li>
      <li>Set up <strong>automated suppression</strong> for known false positives</li>
      <li>Use <strong>Security Hub auto-import</strong> for third-party findings (from Wiz, Orca, Prisma Cloud, etc.)</li>
      <li>Configure <strong>EventBridge rules</strong> to trigger on High/Critical findings</li>
      <li>Track your <strong>Secure Score</strong> over time — aim for 80%+</li>
      <li>Review <strong>Insights</strong> weekly to identify trends</li>
    </ol>
  `,v1c20:`
    <h3>AWS Config Rules</h3>
    <p>
      AWS Config continuously monitors and records your AWS resource configurations. AWS Config Rules allow you to evaluate whether your resources comply with specific configurations and best practices.
    </p>

    <h4>How Config Rules Work</h4>
    <ol>
      <li><strong>Configuration Recorder</strong> tracks all supported resources in your account</li>
      <li>AWS Config evaluates each resource against your <strong>Config Rules</strong></li>
      <li>Resources are marked as <strong>COMPLIANT</strong> or <strong>NON_COMPLIANT</strong></li>
      <li>Non-compliant resources trigger <strong>remediation actions</strong> (via SSM Automation or Lambda)</li>
    </ol>

    <h4>Types of Config Rules</h4>
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>How It Works</th>
          <th>Example Rules</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>AWS Managed Rules</strong></td>
          <td>Pre-built by AWS; maintained and updated automatically</td>
          <td>s3-bucket-public-read-prohibited, ec2-instance-no-public-ip, mfa-enabled-for-iam-console-access</td>
        </tr>
        <tr>
          <td><strong>Custom Rules (Lambda)</strong></td>
          <td>You write Lambda functions with custom compliance logic</td>
          <td>Check that all RDS instances use a specific engine version</td>
        </tr>
        <tr>
          <td><strong>Custom Rules (Guard)</strong></td>
          <td>Define rules in Rego or use built-in Guard syntax</td>
          <td>Check tagging requirements, resource naming conventions</td>
        </tr>
      </tbody>
    </table>

    <h4>Example: Essential Config Rules for Security</h4>
    <table>
      <thead>
        <tr>
          <th>Rule</th>
          <th>What It Checks</th>
          <th>Risk Addressed</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>cloudtrail-enabled-all-regions</td><td>CloudTrail is enabled in all regions</td><td>Audit coverage gaps</td></tr>
        <tr><td>root-account-mfa-enabled</td><td>Root account has MFA</td><td>Root account compromise</td></tr>
        <tr><td>iam-password-policy</td><td>Strong password policy enforced</td><td>Brute force attacks</td></tr>
        <tr><td>s3-bucket-server-side-encryption-enabled</td><td>S3 buckets use encryption</td><td>Data at rest exposure</td></tr>
        <tr><td>restricted-ssh</td><td>SSH not open to 0.0.0.0/0</td><td>Unauthorized access</td></tr>
        <tr><td>vpc-sg-open-only-to-authorized-ports</td><td>Security groups only allow approved ports</td><td>Lateral movement</td></tr>
        <tr><td>alb-http-to-https-redirection-check</td><td>ALB redirects HTTP to HTTPS</td><td>Man-in-the-middle attacks</td></tr>
        <tr><td>encrypted-volumes</td><td>EBS volumes are encrypted</td><td>Data theft from EBS</td></tr>
      </tbody>
    </table>

    <h4>Config Rules with Auto-Remediation</h4>
    <p>One of the most powerful features: Config Rules can <strong>automatically fix</strong> non-compliant resources:</p>
    <pre><code>
# Example: Auto-remediate public S3 buckets
# Config Rule → SSM Automation Document → Lambda
# to remove the public access block

1. Config detects s3-bucket-public-read-prohibited violation
2. Event sent to EventBridge
3. EventBridge triggers SSM Automation
4. SSM runs Lambda to update bucket policy
5. Config re-evaluates — now COMPLIANT
</code></pre>

    <div class="info-box">
      <div class="info-title">💡 Config Aggregator</div>
      <p><strong>AWS Config Aggregator</strong> lets you aggregate configuration data from multiple AWS accounts and regions into a single view — essential for multi-account organizations using AWS Organizations.</p>
    </div>
  `,v1c21:`
    <h3>AWS WAF & Shield</h3>
    <p>
      AWS Web Application Firewall (WAF) and AWS Shield protect your web applications from common web exploits and distributed denial of service (DDoS) attacks.
    </p>

    <h4>AWS WAF (Web Application Firewall)</h4>
    <p>AWS WAF is a Layer 7 (application layer) firewall that inspects HTTP/HTTPS requests and allows you to create rules to block, allow, or count requests based on conditions.</p>

    <h5>How WAF Works</h5>
    <ol>
      <li>A client sends an HTTP request</li>
      <li>The request encounters the WAF (associated with an ALB, API Gateway, CloudFront, or AppSync)</li>
      <li>WAF evaluates the request against your <strong>Web ACL</strong> (Web Access Control List)</li>
      <li>Based on the action of the matching rule, the request is ALLOWED, BLOCKED, or COUNTED</li>
      <li>If no rules match, the default action is applied (typically ALLOW)</li>
    </ol>

    <h5>WAF Rule Types</h5>
    <table>
      <thead>
        <tr>
          <th>Rule Type</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>Regular Rules</strong></td><td>Match conditions on individual requests</td><td>Block requests with SQL injection patterns</td></tr>
        <tr><td><strong>Rule Groups</strong></td><td>Reusable collections of rules</td><td>AWS Managed Rules (AWSManagedRulesCommonRuleSet)</td></tr>
        <tr><td><strong>Rate-Based Rules</strong></td><td>Trigger when request count exceeds threshold</td><td>Block IPs with >1000 requests/5 min</td></tr>
        <tr><td><strong>Web ACL Association</strong></td><td>Associate WAF with a resource</td><td>WAF → CloudFront Distribution</td></tr>
      </tbody>
    </table>

    <h5>AWS Managed Rule Groups</h5>
    <p>AWS provides pre-built rule groups that protect against common threats:</p>
    <ul>
      <li><strong>Core Rule Set (CRS):</strong> Blocks common attack patterns (SQL injection, XSS, LFI/RFI)</li>
      <li><strong>Known Bad Inputs:</strong> Blocks known malicious patterns</li>
      <li><strong>Bot Control:</strong> Identifies and manages bot traffic</li>
      <li><strong>Account Takeover Prevention:</strong> Detects credential stuffing and brute force</li>
      <li><strong>Fraud Control:</strong> Detects fraud signals (volumetric spikes, anonymous proxies)</li>
    </ul>

    <h4>AWS Shield</h4>
    <p>AWS Shield protects against <strong>DDoS attacks</strong> at the network and transport layers (Layers 3 and 4).</p>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Shield Standard</th>
          <th>Shield Advanced</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Active DDoS Protection</td><td>✅ Always on (network/transport)</td><td>✅ + Application layer protection</td></tr>
        <tr><td>Cost Protection</td><td>Not included</td><td>✅ Credits for scaling due to DDoS</td></tr>
        <tr><td>24/7 DDoS Response Team (DRT)</td><td>No</td><td>✅ Direct access during attacks</td></tr>
        <tr><td>Advanced Threat Detection</td><td>Basic</td><td>✅ Near real-time visibility</td></tr>
        <tr><td>Custom Mitigations</td><td>No</td><td>✅ Tailored protections</td></tr>
        <tr><td>Cost</td><td>Free</td><td>$3,000/month + data transfer</td></tr>
      </tbody>
    </table>

    <div class="warning-box">
      <div class="warning-title">⚠️ Capital One Breach Connection</div>
      <p>The Capital One breach occurred because the WAF <strong>SSRF protection was not properly configured</strong>. The attacker used a Server-Side Request Forgery vulnerability to access the IMDS. This highlights that:</p>
      <ul>
        <li>WAF requires proper configuration, not just deployment</li>
        <li>SSRF protection must be explicitly enabled</li>
        <li>Defense in depth is essential — WAF alone is not sufficient</li>
      </ul>
    </div>

    <h4>WAF Best Practices</h4>
    <ol>
      <li>Deploy WAF in front of <strong>all</strong> internet-facing resources (CloudFront, ALB, API Gateway, AppSync)</li>
      <li>Start with <strong>Detection mode</strong> (COUNT action) — monitor for false positives before blocking</li>
      <li>Enable <strong>AWS Managed Rules</strong> — they're maintained by AWS security experts and updated as new threats emerge</li>
      <li>Create <strong>Rate-based rules</strong> to slow down brute force and scraping attacks</li>
      <li>Set up WAF <strong>logging to S3 or Kinesis</strong> for analysis</li>
      <li>Integrate with <strong>AWS Firewall Manager</strong> for organization-wide WAF management</li>
      <li>Review WAF metrics in CloudWatch regularly</li>
    </ol>
  `,v1c22:`
    <h3>AWS Artifact</h3>
    <p>
      AWS Artifact is your go-to service for <strong>on-demand access to AWS security and compliance reports</strong>. It's your central repository for demonstrating compliance to auditors and stakeholders.
    </p>

    <h4>What AWS Artifact Provides</h4>
    <table>
      <thead>
        <tr>
          <th>Report Type</th>
          <th>Description</th>
          <th>Frequency</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>SOC Reports</strong></td><td>SOC 1, SOC 2, SOC 3 reports showing AWS controls</td><td>Quarterly updates</td></tr>
        <tr><td><strong>PCI DSS Reports</strong></td><td>AWS PCI DSS Attestation of Compliance</td><td>Annual with quarterly updates</td></tr>
        <tr><td><strong>Certifications</strong></td><td>ISO 27001, ISO 27017, ISO 27018, ISO 27701</td><td>Annual certification</td></tr>
        <tr><td><strong>FedRAMP</strong></td><td>FedRAMP Authorization Package (ATO)</td><td>Continuous monitoring</td></tr>
        <tr><td><strong>HIPAA BAA</strong></td><td>Business Associate Agreement for HIPAA compliance</td><td>Always available</td></tr>
        <tr><td><strong>Network Architecture</strong></td><td>Logical data center diagrams and security controls</td><td>Updated periodically</td></tr>
        <tr><td><strong>GDPR DPA</strong></td><td>Data Processing Addendum</td><td>Always available</td></tr>
        <tr><td><strong>Customer Compliance Resources</strong></td><td>Best practice guides, security whitepapers</td><td>Continuously updated</td></tr>
      </tbody>
    </table>

    <h4>Why AWS Artifact Matters</h4>
    <div class="info-box">
      <div class="info-title">📋 Compliance Made Easy</div>
      <p>Without AWS Artifact, you'd need to:</p>
      <ul>
        <li>Request each report individually from AWS support</li>
        <li>Wait days or weeks for delivery</li>
        <li>Manage multiple document formats and storage</li>
      </ul>
      <p>With AWS Artifact, <strong>all compliance artifacts are available on-demand</strong> — just a few clicks. And as an AWS customer, you have <strong>automatic access</strong>.</p>
    </div>

    <h4>How to Use AWS Artifact for Compliance</h4>
    <ol>
      <li><strong>Access:</strong> AWS Console → Security, Identity & Compliance → AWS Artifact</li>
      <li><strong>Download:</strong> Download relevant reports for your audit (SOC 2 Type II is most common for B2B)</li>
      <li><strong>Share:</strong> Share reports with customers/partners via Artifact's built-in sharing</li>
      <li><strong>Audit Preparation:</strong> Use the reports as evidence of AWS's security controls during your own audit</li>
    </ol>

    <h4>AWS Artifact in Your Compliance Program</h4>
    <p>When preparing for your own SOC 2 or ISO 27001 audit:</p>
    <ul>
      <li>SOC 2 auditors will want to see AWS's SOC 2 report to understand <strong>which controls are inherited</strong> from AWS</li>
      <li>You only need to demonstrate controls for the areas <strong>not</strong> covered by AWS (i.e., your shared responsibility)</li>
      <li>This significantly reduces your audit scope and cost</li>
    </ul>

    <div class="callout">
      <div class="callout-icon">💰</div>
      <div class="callout-content">
        <h4>Cost Saving Tip</h4>
        <p>AWS Artifact is <strong>free</strong> for all AWS customers. There is no charge to access, download, or share reports. However, AWS Partner Network (APN) partners may need to pay AWS to reproduce reports for their own customers.</p>
      </div>
    </div>
  `,v1c23:`
    <h3>AWS Security Best Practices</h3>
    <p>
      This chapter summarizes the comprehensive best practices for securing your AWS environment. Think of this as the <strong>master reference checklist</strong> that ties together everything covered in this Veda.
    </p>

    <h4>The 10 Pillars of AWS Security</h4>

    <table>
      <thead>
        <tr>
          <th>Pillar</th>
          <th>Practices</th>
          <th>Priority</th>
          <th>AWS Service</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>1. Identity &amp; Access</strong></td>
          <td>MFA everywhere, least privilege, SSO federation, permission boundaries</td>
          <td style="color:#E11D48;font-weight:700;">CRITICAL</td>
          <td>IAM, SSO, Organizations</td>
        </tr>
        <tr>
          <td><strong>2. Data Protection</strong></td>
          <td>Encrypt at rest and in transit, classify data, protect keys</td>
          <td style="color:#E11D48;font-weight:700;">CRITICAL</td>
          <td>KMS, S3 Encryption, Macie</td>
        </tr>
        <tr>
          <td><strong>3. Network Security</strong></td>
          <td>VPC design, security groups, NACLs, WAF, Shield</td>
          <td style="color:#FF6B35;font-weight:700;">HIGH</td>
          <td>VPC, WAF, Shield, Network Firewall</td>
        </tr>
        <tr>
          <td><strong>4. Infrastructure Security</strong></td>
          <td>Harden AMIs, EC2, EBS, use Systems Manager</td>
          <td style="color:#FF6B35;font-weight:700;">HIGH</td>
          <td>Inspector, SSM, GuardDuty</td>
        </tr>
        <tr>
          <td><strong>5. Logging &amp; Monitoring</strong></td>
          <td>CloudTrail, CloudWatch, Security Hub, GuardDuty</td>
          <td style="color:#FF6B35;font-weight:700;">HIGH</td>
          <td>CloudTrail, CloudWatch, Security Hub</td>
        </tr>
        <tr>
          <td><strong>6. Incident Response</strong></td>
          <td>Playbooks, automated response, forensic readiness</td>
          <td style="color:#FFD700;font-weight:700;">MEDIUM-HIGH</td>
          <td>GuardDuty, EventBridge, Lambda</td>
        </tr>
        <tr>
          <td><strong>7. Compliance &amp; Audit</strong></td>
          <td>Continuous compliance, Config Rules, artifact management</td>
          <td style="color:#FFD700;font-weight:700;">MEDIUM-HIGH</td>
          <td>Config, Security Hub, Audit Manager</td>
        </tr>
        <tr>
          <td><strong>8. Application Security</strong></td>
          <td>WAF, input validation, secrets management, code signing</td>
          <td style="color:#FFD700;font-weight:700;">MEDIUM</td>
          <td>WAF, CodeGuru, Secrets Manager</td>
        </tr>
        <tr>
          <td><strong>9. Backup &amp; Recovery</strong></td>
          <td>Cross-region backups, RPO/RTO planning, DR testing</td>
          <td style="color:#22C55E;font-weight:700;">MEDIUM</td>
          <td>Backup, S3, RDS Snapshots</td>
        </tr>
        <tr>
          <td><strong>10. Cost &amp; Resource Governance</strong></td>
          <td>Tagging, budgets, anomaly detection, resource cleanup</td>
          <td style="color:#22C55E;font-weight:700;">MEDIUM</td>
          <td>Cost Explorer, Budgets, Organizations</td>
        </tr>
      </tbody>
    </table>

    <h4>Automated Security Baseline</h4>
    <p>Implement this security baseline in <strong>every</strong> AWS account automatically (using CloudFormation/Terraform):</p>
    <div class="callout">
      <div class="callout-icon">🚀</div>
      <div class="callout-content">
        <h4>Must-Have Security Baseline</h4>
        <pre><code>
1. Multi-region CloudTrail with log file validation ✅
2. S3 Block Public Access at account level ✅
3. Default encryption for all EBS volumes ✅
4. MFA Delete on root account ✅
5. GuardDuty enabled in all regions ✅
6. Security Hub with all standards enabled ✅
7. SCPs to deny non-approved regions ✅
8. AWS Config enabled with essential managed rules ✅
</code></pre>
      </div>
    </div>

    <h4>Quick Reference: AWS Security Checklist</h4>
    <div class="success-box">
      <div class="success-title">✓ Final Security Checklist</div>
      <ol>
        <li>Root account MFA enabled and root access key deleted</li>
        <li>IAM users use roles and temporary credentials only</li>
        <li>SSO or federation for all human access</li>
        <li>CloudTrail enabled in all regions with log file validation</li>
        <li>GuardDuty enabled for threat detection</li>
        <li>S3: Block Public Access enabled, default encryption on, versioning on</li>
        <li>EBS: Default encryption, regular snapshots with retention policies</li>
        <li>RDS: Encryption at rest, automated backups, no public access</li>
        <li>EC2: No public IPs, Security Group least privilege, SSM instead of SSH</li>
        <li>VPC: Flow logs on, NAT Gateway for private subnets, no 0.0.0.0/0 for SSH/RDP</li>
        <li>WAF: Enabled on all internet-facing endpoints</li>
        <li>Config: Enabled with managed rules for continuous compliance</li>
        <li>Secrets: Stored in Secrets Manager with rotation enabled</li>
        <li>KMS: CMK rotation enabled, key policies reviewed quarterly</li>
        <li>IAM: Access Analyzer run quarterly, unused permissions removed</li>
        <li>Cost Anomaly Detection configured with appropriate thresholds</li>
        <li>All resources tagged consistently per governance policy</li>
      </ol>
    </div>

    <div class="callout">
      <div class="callout-icon">🎓</div>
      <div class="callout-content">
        <h4>Cloud Security Veda 1 Complete!</h4>
        <p>You've now covered the fundamentals of cloud security including:</p>
        <ul>
          <li>Cloud computing models and service types</li>
          <li>Shared responsibility model</li>
          <li>Cloud attack surface analysis</li>
          <li>Zero Trust architecture</li>
          <li>Comprehensive AWS security (IAM, VPC, S3, EC2, Lambda, CloudTrail, GuardDuty, WAF, Security Hub, Config)</li>
          <li>Governance, compliance, and best practices</li>
        </ul>
        <p>Ready to continue your journey? The next Vedas await: Compliance, AppSec, DevSecOps, Kubernetes & Containers, and Network Security.</p>
      </div>
    </div>
  `},Lg={v1c24:`
    <h3>Azure Active Directory (Entra ID)</h3>
    <p>
      Azure Active Directory, now rebranded as <strong>Microsoft Entra ID</strong>, is Microsoft's cloud-based identity and access management service. It is the <strong>foundation of security</strong> in the Azure ecosystem — every Azure resource, user login, and application access flows through Entra ID.
    </p>

    <h4>What is Entra ID?</h4>
    <p>Entra ID provides:</p>
    <ul>
      <li><strong>Authentication:</strong> Verifies who users are (Single Sign-On, MFA, passwordless)</li>
      <li><strong>Authorization:</strong> Controls what users can access (RBAC, Conditional Access)</li>
      <li><strong>Directory Services:</strong> Stores user, group, and application objects</li>
      <li><strong>Identity Governance:</strong> Manages access lifecycle (onboarding, transfers, offboarding)</li>
    </ul>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Entra ID vs. Traditional Active Directory</div>
      <p>Traditional Active Directory (on-premises) used protocols like LDAP and Kerberos. Entra ID is cloud-native and uses modern protocols:</p>
      <table>
        <thead>
          <tr><th>Feature</th><th>On-Prem AD</th><th>Entra ID</th></tr>
        </thead>
        <tbody>
          <tr><td>Protocols</td><td>LDAP, Kerberos, NTLM</td><td>SAML, OAuth 2.0, OpenID Connect</td></tr>
          <tr><td>Location</td><td>On-premises</td><td>Globally distributed cloud</td></tr>
          <tr><td>Management</td><td>GPOs, AD Sites</td><td>Conditional Access, Entra admin center</td></tr>
          <tr><td>Authentication</td><td>Passwords, smart cards</td><td>MFA, Passwordless, FIDO2 keys</li>
          <tr><td>Scalability</td><td>Limited by server capacity</td><td>Auto-scales to billions of identities</td></tr>
        </tbody>
      </table>
    </div>

    <h4>Entra ID Architecture</h4>
    <ol>
      <li><strong>Tenants:</strong> A tenant is a dedicated instance of Entra ID. Each organization gets its own tenant. Tenant = security boundary.</li>
      <li><strong>Users &amp; Groups:</strong> User accounts represent people or services. Groups simplify permission management.</li>
      <li><strong>Applications:</strong> Registered in Entra ID for authentication (Enterprise Apps, App Registrations)</li>
      <li><strong>Service Principals:</strong> The "machine identity" of an application — like a service account</li>
      <li><strong>Managed Identities:</strong> Automatically managed service principals for Azure resources</li>
    </ol>

    <h4>Hybrid Identity</h4>
    <p>Most enterprises have both on-premises AD and Entra ID. Two main integration patterns:</p>
    <table>
      <thead>
        <tr><th>Pattern</th><th>How It Works</th><th>Best For</th></tr>
      </thead>
      <tbody>
        <tr><td>Password Hash Sync (PHS)</td><td>Syncs password hashes from on-prem AD to Entra ID</td><td>Simple cloud-only auth with cloud MFA</td></tr>
        <tr><td>Pass-through Authentication (PTA)</td><td>On-prem agents validate passwords in real-time</td><td>Organizations that can't sync password hashes</td></tr>
        <tr><td>Federation (AD FS)</td><td>On-prem AD FS server handles authentication</td><td>Complex multi-forest or advanced SSO scenarios</td></tr>
      </tbody>
    </table>

    <h4>Entra ID Security Best Practices</h4>
    <div class="success-box">
      <div class="success-title">✓ Entra ID Security Checklist</div>
      <ol>
        <li>Enable <strong>MFA for all users</strong> — Conditional Access policies to enforce</li>
        <li>Deploy <strong>Passwordless Authentication</strong> — FIDO2 keys, Windows Hello, Microsoft Authenticator</li>
        <li>Use <strong>Conditional Access</strong> — enforce compliant devices, trusted locations, risk-based policies</li>
        <li>Enable <strong>Identity Protection</strong> — detect risky sign-ins, leaked credentials, impossible travel</li>
        <li>Implement <strong>Privileged Identity Management (PIM)</strong> — time-limited, approval-based role activation</li>
        <li><strong>Disable legacy protocols</strong> — IMAP, POP3, Basic Auth, legacy TLS</li>
        <li><strong>Monitor sign-in logs</strong> — use Workbooks and Alerts for anomalies</li>
        <li>Use <strong>External ID</strong> for secure collaboration with partners and customers</li>
        <li>Enable <strong>Continuous Access Evaluation (CAE)</strong> — real-time session revocation</li>
      </ol>
    </div>
  `,v1c25:`
    <h3>Azure Role-Based Access Control (RBAC)</h3>
    <p>
      Azure RBAC is the authorization system used to manage access to Azure resources. It follows the principle of <strong>least privilege</strong>, ensuring users and services get only the permissions they need — nothing more.
    </p>

    <h4>How Azure RBAC Works</h4>
    <p>Azure RBAC uses a three-element model:</p>
    <div class="info-box">
      <div class="info-title">ℹ️ Security Principal + Role Definition + Scope</div>
      <p>
        <strong>Security Principal:</strong> Who wants access? (User, Group, Service Principal, Managed Identity)<br>
        <strong>Role Definition:</strong> What can they do? (Collection of permissions like "Read virtual machines")<br>
        <strong>Scope:</strong> Where can they do it? (Management Group, Subscription, Resource Group, or individual resource)
      </p>
    </div>

    <h4>Azure Built-In Roles</h4>
    <table>
      <thead>
        <tr><th>Role</th><th>Permissions</th><th>Use Case</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Owner</strong></td><td>Full access, assign roles</td><td>Subscription administrators</td></tr>
        <tr><td><strong>Contributor</strong></td><td>Create/manage all resources (cannot assign roles)</td><td>Developers, engineers</td></tr>
        <tr><td><strong>Reader</strong></td><td>View existing resources</td><td>Auditors, read-only monitoring</td></tr>
        <tr><td><strong>User Access Administrator</strong></td><td>Manage user access to resources</td><td>Delegated access management</td></tr>
        <tr><td><strong>Virtual Machine Contributor</strong></td><td>Manage VMs but not access</td><td>VM operations team</td></tr>
        <tr><td><strong>Network Contributor</strong></td><td>Manage networking resources</td><td>Network team</td></tr>
        <tr><td><strong>Key Vault Secrets Officer</strong></td><td>Manage secrets and keys</td><td>Security team</td></tr>
        <tr><td><strong>Security Admin</strong></td><td>Manage security solutions</td><td>SOC team</td></tr>
        <tr><td><strong>Security Reader</strong></td><td>View security findings and policies</td><td>Compliance analysts</td></tr>
      </tbody>
    </table>

    <h4>Custom Roles</h4>
    <p>When built-in roles don't meet your needs, create custom roles:</p>
    <pre><code>
{
  "Name": "Custom VM Security Admin",
  "Description": "Can manage VM security settings but not create/delete VMs",
  "Actions": [
    "Microsoft.Compute/virtualMachines/read",
    "Microsoft.Compute/virtualMachines/extensions/write",
    "Microsoft.KeyVault/vaults/keys/*",
    "Microsoft.Network/networkSecurityGroups/write"
  ],
  "NotActions": [
    "Microsoft.Compute/virtualMachines/delete"
  ],
  "AssignableScopes": ["/subscriptions/xxx/resourceGroups/prod-rg"]
}
</code></pre>

    <h4>RBAC Best Practices</h4>
    <ol>
      <li><strong>Avoid Owner role:</strong> Use Contributor or custom roles instead</li>
      <li><strong>Assign at the narrowest scope:</strong> Resource group or individual resource, not subscription</li>
      <li><strong>Use PIM:</strong> Grant elevated roles just-in-time, not permanently</li>
      <li><strong>Review access quarterly:</strong> Use Access Reviews in Entra ID</li>
      <li><strong>Deny by default:</strong> Use Deny Assignments to block specific actions even if a role allows them</li>
      <li><strong>Separate management:</strong> Don't assign both Owner and Contributor — use the most specific role</li>
    </ol>

    <h5>Deny Assignments — Advanced Control</h5>
    <div class="info-box">
      <div class="info-title">💡 Deny Assignments</div>
      <p>Deny Assignments block specific actions regardless of what a role definition allows. They cannot be removed by the resource owner. Use cases:</p>
      <ul>
        <li>Prevent deletion of critical resources</li>
        <li>Block creation of resources in certain regions</li>
        <li>Enforce tagging requirements</li>
      </ul>
    </div>
  `,v1c26:`
    <h3>Azure Key Vault</h3>
    <p>
      Azure Key Vault is a <strong>centralized secrets management</strong> service that safeguards cryptographic keys, secrets, certificates, and other sensitive assets. It is a cornerstone of any Azure security architecture.
    </p>

    <h4>What Key Vault Protects</h4>
    <table>
      <thead>
        <tr><th>Asset Type</th><th>Description</th><th>Example Use Case</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Keys</strong></td><td>Cryptographic keys (RSA, EC, AES)</td><td>Data encryption, signing, key wrapping</td></tr>
        <tr><td><strong>Secrets</strong></td><td>Passwords, connection strings, API keys</td><td>Database passwords, service credentials</td></tr>
        <tr><td><strong>Certificates</strong></td><td>SSL/TLS certificates</td><td>HTTPS endpoints, code signing</td></tr>
        <tr><td><strong>Hardware Security Modules (HSM)</strong></td><td>FIPS 140-2 Level 2/3 validated modules</td><td>Regulatory compliance, high-value keys</td></tr>
      </tbody>
    </table>

    <h4>Key Vault Security Model</h4>
    <p>Key Vault uses a multi-layered security model:</p>
    <ol>
      <li><strong>Entra ID Authentication:</strong> All access is authenticated through Entra ID — no vault-specific credentials</li>
      <li><strong>Access Policies / RBAC:</strong> Fine-grained permissions at the vault, key, secret, or certificate level</li>
      <li><strong>Azure Managed HSM:</strong> Keys stored in FIPS 140-2 Level 3 validated HSMs (single-tenant)</li>
      <li><strong>Soft Delete &amp; Purge Protection:</strong> Deleted keys/secrets are recoverable for a configurable retention period (7-90 days)</li>
      <li><strong>Network Isolation:</strong> Private endpoints, firewall rules, and service endpoints</li>
      <li><strong>Logging:</strong> All operations logged to Azure Monitor and optionally to a storage account</li>
    </ol>

    <h5>Key Vault Access Policies vs. RBAC</h5>
    <table>
      <thead>
        <tr><th>Feature</th><th>Access Policies (Legacy)</th><th>Azure RBAC (Recommended)</th></tr>
      </thead>
      <tbody>
        <tr><td>Granularity</td><td>Per key/secret/certificate</td><td>Vault-level or resource-level</td></tr>
        <tr><td>Consistency</td><td>Different from Azure RBAC</td><td>Same model as other Azure resources</td></tr>
        <tr><td>Microsoft Recommendation</td><td>Legacy</td><td><strong>Use RBAC for new deployments</strong></td></tr>
      </tbody>
    </table>

    <h4>Key Rotation</h4>
    <p>Key Vault supports automatic key rotation:</p>
    <ul>
      <li>Configure rotation policies with specific lifetimes (e.g., 90 days, 1 year)</li>
      <li>Key Vault auto-generates a new key version at the configured interval</li>
      <li>Old versions remain available for decryption (backward compatible)</li>
      <li>Applications can use the <strong>latest</strong> version or a specific version</li>
    </ul>

    <div class="callout">
      <div class="callout-icon">🔄</div>
      <div class="callout-content">
        <h4>Key Rotation Best Practice</h4>
        <p>Always design applications to <strong>fetch keys at runtime</strong> rather than caching them. This way, when a key is rotated, the application automatically picks up the new version. Use Key Vault's <code>getLatestVersion</code> API in your code.</p>
      </div>
    </div>

    <h4>Private Endpoints for Key Vault</h4>
    <p>By default, Key Vault is accessible over the public internet. For maximum security:</p>
    <ol>
      <li>Create a <strong>Private Endpoint</strong> in your VNet</li>
      <li>Disable <strong>public network access</strong> on the vault</li>
      <li>Use <strong>Private DNS Zones</strong> to resolve vault endpoints privately</li>
      <li>Restrict access to specific subnet(s)</li>
    </ol>

    <h4>Key Vault and Managed Identity Integration</h4>
    <pre><code>
# Grant a VM's Managed Identity access to Key Vault secrets
# Using Azure CLI:
az keyvault set-policy   --name myKeyVault   --object-id $(az vm identity show -g MyRG -n MyVM --query principalId -o tsv)   --secret-permissions get list
</code></pre>

    <div class="warning-box">
      <div class="warning-title">⚠️ Common Key Vault Pitfalls</div>
      <ul>
        <li><strong>Purge Protection:</strong> Without it, deleted keys are permanently gone after the retention period</li>
        <li><strong>Soft Delete:</strong> Enabled by default in new vaults but verify on older ones</li>
        <li><strong>Network exposure:</strong> Public endpoint access without firewall rules = anyone with valid credentials can reach your vault</li>
        <li><strong>Logging:</strong> If you don't log Key Vault operations, you have no audit trail for key access</li>
      </ul>
    </div>
  `,v1c27:`
    <h3>Azure Network Security</h3>
    <p>
      Azure provides a comprehensive set of network security controls to protect your cloud resources. Understanding the <strong>layered network security model</strong> is essential for designing secure Azure architectures.
    </p>

    <h4>Network Security Layers</h4>
    <table>
      <thead>
        <tr><th>Layer</th><th>Service</th><th>Function</th></tr>
      </thead>
      <tbody>
        <tr><td>Network Perimeter</td><td>Azure Firewall, Front Door, DDoS Protection</td><td>Block/allow traffic at the edge</td></tr>
        <tr><td>Network Segmentation</td><td>VNet, Subnets, NSGs</td><td>Isolate workloads logically</td></tr>
        <tr><td>Application Security</td><td>Azure WAF, Application Gateway</td><td>Protect web applications</td></tr>
        <tr><td>Service Endpoints</td><td>Microsoft.Service endpoints</td><td>Keep traffic within Azure backbone</td></tr>
        <tr><td>Private Connectivity</td><td>Private Link, ExpressRoute</td><td>Private access to Azure services</td></tr>
      </tbody>
    </table>

    <h4>Network Security Groups (NSGs)</h4>
    <p>NSGs are Azure's equivalent of Security Groups in AWS. They contain <strong>security rules</strong> that allow or deny inbound/outbound network traffic.</p>

    <h5>NSG Rule Priority Logic</h5>
    <ol>
      <li>Rules are evaluated <strong>in priority order</strong> (lowest number = highest priority)</li>
      <li>First matching rule <strong>wins</strong> — no other rules are evaluated</li>
      <li>Built-in default rules: Allow VNet Inbound, Deny All Inbound, Allow VNet Outbound, Deny All Outbound</li>
      <li>You can create <strong>deny rules with lower priority</strong> to override allow rules</li>
    </ol>

    <h5>NSG Security Rules Anatomy</h5>
    <pre><code>
Name: Allow-HTTPS-From-ALB
Priority: 100
Direction: Inbound
Source: VirtualNetwork (or specific IP prefix)
Source Port: *
Destination: Any (or specific subnet)
Destination Port: 443
Protocol: Tcp
Action: Allow
</code></pre>

    <h4>Azure Firewall</h4>
    <p>Azure Firewall is a <strong>managed, cloud-native</strong> firewall service that provides centralized network security policy across multiple VNets and subscriptions.</p>
    <ul>
      <li><strong>Stateful inspection:</strong> Tracks connection state for intelligent filtering</li>
      <li><strong>Application rules:</strong> Filter by FQDN (e.g., allow access to *.microsoft.com)</li>
      <li><strong>Network rules:</strong> Filter by IP/port/protocol</li>
      <li><strong>NAT rules:</strong> Port forwarding and destination NAT</li>
      <li><strong>Threat Intelligence:</strong> Built-in alerting and deny logic based on Microsoft threat intelligence</li>
      <li><strong>DNS Proxy:</strong> Azure Firewall can act as a DNS proxy, enabling FQDN filtering</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Azure Firewall vs. NSG</div>
      <p><strong>NSGs</strong> are <em>micro-segmentation</em> tools — they apply at the VM/Subnet level with simple 5-tuple rules.<br>
      <strong>Azure Firewall</strong> is a <em>next-generation firewall</em> — it operates at the VNet/perimeter level with L3-L7 inspection, application rules, and threat intelligence.</p>
      <p>In a mature architecture, <strong>both are used together</strong>: Azure Firewall at the perimeter, NSGs at the workload level.</p>
    </div>

    <h4>DDoS Protection</h4>
    <p>Azure DDoS Protection provides automatic attack mitigation:</p>
    <table>
      <thead>
        <tr><th>Plan</th><th>Features</th><th>Cost</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Basic</strong></td><td>Always-on, automatic protection for public IPs</td><td>Free</td></tr>
        <tr><td><strong>Standard</strong></td><td>Enhanced mitigation policies, attack analytics, cost protection, auto-tuning</td><td>Per resource/month</td></tr>
        <tr><td><strong>Plan 1 + Adaptive</strong></td><td>+ Adaptive tuning based on traffic learning</td><td>Higher tier</td></tr>
      </tbody>
    </table>

    <h5>DDoS Mitigation Flow</h5>
    <ol>
      <li>Monitor traffic continuously using machine learning</li>
      <li>Detect anomalous traffic patterns</li>
      <li>Rate-limit or drop malicious traffic at the edge</li>
      <li>Notify via alerts and provide post-attack analytics</li>
    </ol>

    <h4>Bastion — Secure RDP/SSH</h4>
    <div class="info-box">
      <div class="info-title">💡 Azure Bastion — No Public IPs for VMs</div>
      <p>Azure Bastion provides secure, seamless RDP/SSH connectivity to VMs directly through the Azure portal <strong>over TLS</strong>. Benefits:</p>
      <ul>
        <li>No public IP addresses on VMs</li>
        <li>No need for jump boxes or bastion hosts</li>
        <li>Uses Entra ID authentication</li>
        <li>Traffic stays within Azure's network (not traversing the internet)</li>
        <li>Works with NSGs and JIT access</li>
      </ul>
    </div>
  `,v1c28:`
    <h3>Azure Storage Security</h3>
    <p>
      Azure Storage holds some of the most critical data in your Azure environment. Securing storage accounts requires understanding multiple layers: network access, authentication, encryption, and data protection.
    </p>

    <h4>Storage Account Access Tiers</h4>
    <p>Azure Storage supports multiple authentication methods (from most secure to least secure):</p>
    <ol>
      <li><strong>Azure AD (Entra ID):</strong> Recommended — uses role-based access with Conditional Access policies, MFA, and audit logging</li>
      <li><strong>Shared Key:</strong> Account-level keys (key1, key2) — rotate regularly</li>
      <li><strong>Shared Access Signatures (SAS):</strong> Time-limited, scoped tokens — use stored access policies for revocation</li>
      <li><strong>Public Access:</strong> Available at the container level — <strong>avoid in production</strong></li>
    </ol>

    <div class="warning-box">
      <div class="warning-title">⚠️ Public Access Risks</div>
      <p>In 2020, Microsoft disclosed that <strong>more than 10,000 Azure Storage accounts</strong> had their blob containers inadvertently exposed to the public internet. Always:</p>
      <ul>
        <li>Set default access level to <strong>Private</strong></li>
        <li>Enable <strong>Secure Transfer Required</strong> (HTTPS only)</li>
        <li>Use <strong>Private Endpoints</strong> to eliminate public exposure entirely</li>
      </ul>
    </div>

    <h4>Azure Blob Storage Security</h4>
    <table>
      <thead>
        <tr><th>Security Control</th><th>Description</th><th>Configuration</th></tr>
      </thead>
      <tbody>
        <tr><td>Encryption at Rest</td><td>AES-256 encryption (enabled by default, Microsoft-managed keys)</td><td>Optional: Customer-managed keys via Key Vault</td></tr>
        <tr><td>Secure Transfer</td><td>Requires HTTPS for all requests</td><td>Enabled at storage account level</td></tr>
        <tr><td>Network Isolation</td><td>Restrict access to specific VNets</td><td>Private Endpoints + firewall rules</td></tr>
        <tr><td>Immutability</td><td>Prevent deletion/modification for compliance</td><td>Legal hold, time-based retention</td></tr>
        <tr><td>Versioning</td><td>Auto-version blob modifications</td><td>Recommended for critical data</td></tr>
        <tr><td>Soft Delete</td><td>Deleted blobs recoverable for configurable period</td><td>Enable for all critical containers</td></tr>
        <tr><td>Change Feed</td><td>Track all blob modifications</td><td>Useful for audit and forensics</td></tr>
      </tbody>
    </table>

    <h4>Shared Access Signatures (SAS) Best Practices</h4>
    <div class="key-box">
      <div class="key-title">🔑 SAS Security Best Practices</div>
      <ul>
        <li><strong>Always set an expiration:</strong> Never create SAS tokens without an expiry time</li>
        <li><strong>Use Stored Access Policies:</strong> Allows server-side revocation of SAS permissions</li>
        <li><strong>Restrict to specific resources:</strong> Grant access to specific containers/blobs, not the entire account</li>
        <li><strong>Use HTTPS-only SAS:</strong> Set the <code>signedProtocol</code> to <code>https</code></li>
        <li><strong>Avoid Account SAS:</strong> Prefer Service SAS (scoped to a specific resource)</li>
        <li><strong>Monitor SAS usage:</strong> Enable storage analytics logging</li>
        <li><strong>Short durations:</strong> Use the shortest expiry time that meets the use case</li>
      </ul>
    </div>

    <h4>Azure Files and File Sync Security</h4>
    <ul>
      <li>Encrypt data in transit with SMB encryption (always)</li>
      <li>Use Private Endpoints for Azure Files</li>
      <li>Enable AD-based authentication (on-premises AD or Entra DS)</li>
      <li>Use Shared Key or Azure AD authentication (not anonymous)</li>
    </ul>
  `,v1c29:`
    <h3>Azure VM Security</h3>
    <p>
      Azure Virtual Machines are among the most commonly deployed resources. While they provide familiar compute models, the security responsibility is <strong>primarily yours</strong> (the customer) under the shared responsibility model.
    </p>

    <h4>Azure VM Security Architecture</h4>
    <div class="callout">
      <div class="callout-icon">🏗️</div>
      <div class="callout-content">
        <h4>Defense-in-Depth for Azure VMs</h4>
        <ol>
          <li><strong>Azure Security Center/Defender:</strong> Continuous assessment and recommendations</li>
          <li><strong>Network Security Groups:</strong> Control network traffic at the subnet/VM level</li>
          <li><strong>Azure Firewall:</strong> Centralized perimeter protection</li>
          <li><strong>Just-In-Time VM Access:</strong> Open management ports only when needed</li>
          <li><strong>Disk Encryption:</strong> Azure Disk Encryption (BitLocker for Windows, DM-Crypt for Linux)</li>
          <li><strong>Entra ID:</strong> Azure RBAC for access control + Conditional Access</li>
          <li><strong>Bastion:</strong> Secure RDP/SSH without public IPs</li>
          <li><strong>Guest Configuration:</strong> Enforce OS-level compliance</li>
        </ol>
      </div>
    </div>

    <h4>Just-In-Time (JIT) VM Access</h4>
    <p>JIT access is one of the most impactful security features for VMs:</p>
    <ol>
      <li>Management ports (RDP: 3389, SSH: 22, PowerShell: 5986) are <strong>locked by default</strong></li>
      <li>Users request access through the Azure Portal or API</li>
      <li>Access is granted for a <strong>limited time window</strong> (configurable, typically 3 hours max)</li>
      <li>Access is <strong>logged</strong> in Activity Logs and can trigger alerts</li>
      <li>After the window expires, ports are automatically re-locked</li>
    </ol>

    <div class="success-box">
      <div class="success-title">✓ JIT Impact</div>
      <p>Organizations using JIT VM access see a <strong>95%+ reduction in port scanning attacks</strong> on their management interfaces. Since ports are closed by default, attackers scanning the internet never see them open.</p>
    </div>

    <h4>Azure Disk Encryption</h4>
    <table>
      <thead>
        <tr><th>Feature</th><th>Windows VMs</th><th>Linux VMs</th></tr>
      </thead>
      <tbody>
        <tr><td>Encryption</td><td>BitLocker</td><td>DM-Crypt</td></tr>
        <tr><td>Key Management</td><td>Key Vault or Entra ID</td><td>Key Vault or Entra ID</td></tr>
        <tr><td>Temp Disk</td><td>Not encrypted by default</td><td>Not encrypted by default</td></tr>
        <tr><td>Encryption at Host</td><td>Available (encrypts at the host, not inside VM)</td><td>Available</td></tr>
      </tbody>
    </table>

    <div class="callout">
      <div class="callout-icon">⚡</div>
      <div class="callout-content">
        <h4>Encrypt at Host vs. Server-Side Encryption</h4>
        <p><strong>Server-side encryption (SSE):</strong> Azure encrypts data as it writes to storage and decrypts as it reads. Transparent to the VM but managed by Azure.<br>
        <strong>Encryption at Host:</strong> Data is encrypted in the VM's memory before being written to the disk. Even Azure operators cannot read the data. <strong>Use this for highly sensitive workloads.</strong></p>
      </div>
    </div>

    <h4>VM Hardening Checklist</h4>
    <ol>
      <li>Use <strong>Azure Marketplace</strong> images — they're patched and hardened</li>
      <li>Enable <strong>Azure Security Center</strong> agent on all VMs</li>
      <li>Configure <strong>NSGs</strong> with least-privilege rules</li>
      <li>Enable <strong>JIT access</strong> for all management ports</li>
      <li>Enable <strong>encryption at host</strong> or <strong>Azure Disk Encryption</strong></li>
      <li>Disable <strong>password authentication</strong>; use SSH keys (Linux) or Entra ID (Windows)</li>
      <li>Apply <strong>OS hardening</strong> (STIG/CIS benchmarks)</li>
      <li>Configure <strong>automatic OS patching</strong> (Azure provides automatic VM guest patching)</li>
      <li>Enable <strong>boot diagnostics</strong> for troubleshooting security events</li>
      <li>Use <strong>Availability Zones</strong> for resilience against localized attacks</li>
    </ol>
  `,v1c30:`
    <h3>Azure Functions Security</h3>
    <p>
      Azure Functions is the serverless compute offering from Microsoft. Its event-driven, pay-per-execution model provides unique security characteristics — the platform handles most infrastructure concerns, but developers must still secure their code and configuration.
    </p>

    <h4>Azure Functions Identity</h4>
    <p>Every Azure Function has a <strong>system-assigned managed identity</strong> (or can have a user-assigned one). This identity is used to authenticate to other Azure services — no secrets needed.</p>
    <ul>
      <li>Enabled by default on all function apps</li>
      <li>Assign RBAC roles to the identity for specific resources</li>
      <li>Identity is automatically rotated and managed by Azure</li>
    </ul>

    <h5>Function App Authentication/Authorization</h5>
    <p>Built-in authentication (Easy Auth) handles identity without code changes:</p>
    <table>
      <thead>
        <tr><th>Identity Provider</th><th>Use Case</th></tr>
      </thead>
      <tbody>
        <tr><td>Microsoft Entra ID</td><td>Enterprise SSO, corporate apps</td></tr>
        <tr><td>Microsoft Account</td><td>Consumer apps</td></tr>
        <tr><td>Google, Facebook, Twitter</td><td>Social login scenarios</td></tr>
        <tr><td>Custom OpenID Connect</td><td>Any OIDC-compliant IdP</td></tr>
        <tr><td>API Keys</td><td>Simple dev/test access (not recommended for production)</td></tr>
      </tbody>
    </table>

    <h4>Functions Security Best Practices</h4>
    <ol>
      <li><strong>Use Managed Identity</strong> instead of connection strings for all Azure service connections</li>
      <li><strong>Secure function keys:</strong> Don't expose keys in client-side code; use Entra ID authentication instead</li>
      <li><strong>Network restrictions:</strong> Use VNet integration and access restrictions to limit which IPs can call functions</li>
      <li><strong>Premium Plan for sensitive workloads:</strong> Provides VNet integration, premium compute, and no cold starts</li>
      <li><strong>Disable CORS</strong> or restrict to specific origins</li>
      <li><strong>Set function timeouts:</strong> Prevent runaway functions (default is 5 min; configurable to 10 min on Consumption plan)</li>
      <li><strong>Code signing:</strong> Deploy only from trusted sources</li>
      <li><strong>Application Insights:</strong> Enable for security monitoring and anomaly detection</li>
    </ol>

    <h4>Durable Functions Security</h4>
    <p>Durable Functions (stateful orchestrations) have specific security considerations:</p>
    <ul>
      <li>Orchestration history is stored in the configured storage backend — encrypt it</li>
      <li>Use <strong>external event</strong> APIs carefully — validate input</li>
      <li>Implement <strong>rate limiting</strong> on HTTP-triggered orchestration starters</li>
    </ul>

    <div class="warning-box">
      <div class="warning-title">⚠️ Functions Pitfall: Exposed Endpoints</div>
      <p>Functions on the Consumption plan are publicly accessible by default. Without proper authentication and network restrictions, anyone who discovers your function URL can invoke it. Always configure <strong>Authorization level</strong> and <strong>Access Restrictions</strong>.</p>
    </div>
  `,v1c31:`
    <h3>Azure Monitor & Log Analytics</h3>
    <p>
      Azure Monitor is the comprehensive monitoring platform that provides <strong>full-stack observability</strong> across Azure resources, on-premises infrastructure, and hybrid environments. For security, it's your primary tool for detecting and responding to threats.
    </p>

    <h4>Azure Monitor Components</h4>
    <table>
      <thead>
        <tr><th>Component</th><th>Function</th><th>Security Relevance</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Azure Monitor Logs</strong></td><td>Collects and analyzes log data</td><td>Security investigations, threat hunting</td></tr>
        <tr><td><strong>Log Analytics</strong></td><td>Query and analyze log data with KQL</td><td>Central security analytics platform</td></tr>
        <tr><td><strong>Azure Monitor Metrics</strong></td><td>Numerical performance data</td><td>Anomaly detection, capacity planning</td></tr>
        <tr><td><strong>Application Insights</strong></td><td>Application performance monitoring</td><td>Detect application-layer attacks</td></tr>
        <tr><td><strong>Azure Monitor Alerts</strong></td><td>Proactive notifications</td><td>Real-time security incident alerts</td></tr>
        <tr><td><strong>Azure Monitor Workbooks</strong></td><td>Interactive visual reports</td><td>Security dashboards</td></tr>
      </tbody>
    </table>

    <h4>Log Analytics Query Language (KQL)</h4>
    <p>KQL (Kusto Query Language) is a powerful query language for log analysis. Essential security queries:</p>
    <pre><code>
// Find all failed sign-ins in the last 24 hours
SigninLogs
| where TimeGenerated > ago(24h)
| where ResultType == "50074" // MFA challenge failed
| summarize FailedMFA = count() by UserPrincipalName
| order by FailedMFA desc

// Detect impossible travel
SigninLogs
| where TimeGenerated > ago(7d)
| summarize StartLocation = make_set(Location), EndLocation = make_set(Location) by UserPrincipalName
| where array_length(StartLocation) > 3

// Find suspicious Azure resource creation (potential crypto miner)
AzureActivity
| where TimeGenerated > ago(24h)
| where OperationNameValue contains "Microsoft.Compute/virtualMachines/write"
| where Caller contains "unknown"
| project TimeGenerated, Caller, ResourceGroup
</code></pre>

    <h5>Key Workspace Configuration</h5>
    <ul>
      <li>Use <strong>dedicated Log Analytics workspaces</strong> per environment (prod, staging, dev)</li>
      <li>Configure <strong>retention policies</strong> — at least 90 days for security logs (1 year preferred)</li>
      <li>Enable <strong>data export</strong> from Azure Monitor to long-term storage (ADLS Gen2, Event Hub)</li>
      <li>Set up <strong>data collection rules</strong> for Windows Event Logs, Syslog, custom logs</li>
      <li>Enable <strong>Azure Monitor agent</strong> (replaces legacy MMA agent) on all VMs</li>
    </ul>

    <div class="callout">
      <div class="callout-icon">📊</div>
      <div class="callout-content">
        <h4>KQL Cheat Sheet for Security</h4>
        <p><strong>Sign-in analysis:</strong> <code>SigninLogs</code> — track all Azure AD sign-ins<br>
        <strong>Audit trail:</strong> <code>AuditLogs</code> — who changed what in Entra ID<br>
        <strong>Resource changes:</strong> <code>AzureActivity</code> — all ARM operations<br>
        <strong>Network connections:</strong> <code>VMConnection</code> — track communication patterns<br>
        <strong>Windows events:</strong> <code>Event</code> — system, security, application logs<br>
        <strong>Threat detection:</strong> <code>SecurityAlert</code> — security findings aggregated</p>
      </div>
    </div>
  `,v1c32:`
    <h3>Azure Sentinel</h3>
    <p>
      Azure Sentinel is Microsoft's <strong>cloud-native SIEM (Security Information and Event Management)</strong> and SOAR (Security Orchestration, Automation, and Response) solution. It provides intelligent security analytics across your entire enterprise — spanning on-premises, cloud, and hybrid environments.
    </p>

    <h4>Why Sentinel?</h4>
    <p>Traditional SIEM tools require significant infrastructure, specialized staff, and expensive licensing. Sentinel is different:</p>
    <table>
      <thead>
        <tr><th>Traditional SIEM</th><th>Azure Sentinel</th></tr>
      </thead>
      <tbody>
        <tr><td>Expensive hardware/software</td><td>Cloud-native, pay-as-you-go</td></tr>
        <tr><td>Monolithic deployment</td><td>Serverless, scales automatically</td></tr>
        <tr><td>Months to deploy</td><td>Hours to get started</td></tr>
        <tr><td>Custom connectors require development</td><td>250+ built-in connectors + Common Event Format</td></tr>
        <tr><td>Requires on-premise infrastructure</td><td>Fully managed, zero infrastructure</td></tr>
      </tbody>
    </table>

    <h4>Sentinel Architecture</h4>
    <pre><code>
Data Sources → Connectors → Log Analytics Workspace → Sentinel
                                                          │
                                                   Analytics Rules
                                                          │
                                            ┌────────────┼────────────┐
                                            ▼            ▼            ▼
                                      Incidents    Hunting    Workbooks
                                            │
                                      Playbooks (SOAR)
                                            │
                                      Response Actions
</code></pre>

    <h4>Key Sentinel Features</h4>
    <ol>
      <li><strong>Analytics Rules:</strong> Correlate events across data sources to generate security incidents. Use built-in rules or create custom ones with KQL.</li>
      <li><strong>Fusion (ML):</strong> Automatically correlates multiple low-fidelity alerts into high-fidelity incidents using machine learning.</li>
      <li><strong>Incidents:</strong> Aggregated alerts with context, severity, and status tracking.</li>
      <li><strong>Hunting:</strong> Proactively search for threats using KQL queries and built-in hunting queries.</li>
      <li><strong>Playbooks:</strong> Automated response workflows using Azure Logic Apps. Respond to incidents in seconds.</li>
      <li><strong>Workbooks:</strong> Custom dashboards for security visualization and reporting.</li>
      <li><strong>Threat Intelligence:</strong> Integrate TI feeds to enrich alerts with known indicators of compromise.</li>
      <li><strong>UEBA (Entity Behavior Analytics):</strong> ML-powered anomaly detection for users and entities.</li>
      <li><strong>Notebooks:</strong> Jupyter notebooks for advanced analytics and investigation.</li>
      <li><strong>Automation Rules:</strong> Automatically triage, assign, and close incidents.</li>
    </ol>

    <h5>Essential Sentinel Analytics Rules to Enable</h5>
    <table>
      <thead>
        <tr><th>Rule Category</th><th>Example</th><th>Priority</th></tr>
      </thead>
      <tbody>
        <tr><td>Brute Force</td><td>Multiple failed logins from single source</td><td>High</td></tr>
        <tr><td>Impossible Travel</td><td>User logs in from two distant locations in minutes</td><td>High</td></tr>
        <tr><td>Mass Data Export</td><td>Unusual volume of data downloaded from SharePoint</td><td>High</td></tr>
        <tr><td>Privilege Escalation</td><td>User self-grants elevated roles</td><td>Critical</td></tr>
        <tr><td>Suspicious Process Execution</td><td>Known attack tools (Mimikatz, Cobalt Strike)</td><td>Critical</td></tr>
        <tr><td>Lateral Movement</td><td>Authentication to multiple machines in short timeframe</td><td>High</td></tr>
        <tr><td>New Country Login</td><td>Sign-in from country where organization has no presence</td><td>Medium</td></tr>
      </tbody>
    </table>
  `,v1c33:`
    <h3>Azure Defender for Cloud</h3>
    <p>
      Azure Defender for Cloud (formerly Azure Security Center) is Microsoft's <strong>unified cloud security management</strong> and <strong>threat protection</strong> platform. It provides continuous security assessment, threat detection, and remediation recommendations across hybrid cloud workloads.
    </p>

    <h4>Defender for Cloud Tiers</h4>
    <table>
      <thead>
        <tr><th>Tier</th><th>Features</th><th>Cost</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Free Tier</strong></td>
          <td>Security recommendations, secure score, continuous assessment</td>
          <td>Free</td>
        </tr>
        <tr>
          <td><strong>Defender for Servers (Plan 1)</strong></td>
          <td>+ Just-in-time VM access, adaptive application controls, vulnerability assessment</td>
          <td>Per machine/month</td>
        </tr>
        <tr>
          <td><strong>Defender for Servers (Plan 2)</strong></td>
          <td>+ EDR (Endpoint Detection and Response), threat detection, behavioral analysis</td>
          <td>Higher per machine/month</td>
        </tr>
        <tr>
          <td><strong>Defender for Containers</strong></td>
          <td>+ Container image scanning, runtime protection for Kubernetes</td>
          <td>Per node/month</td>
        </tr>
        <tr>
          <td><strong>Defender for Storage</strong></td>
          <td>+ Malware scanning, sensitive data discovery for blob storage</td>
          <td>Per storage account/month</td>
        </tr>
        <tr>
          <td><strong>Defender for SQL</strong></td>
          <td>+ SQL injection detection, vulnerability assessment for SQL databases</td>
          <td>Per server/month</td>
        </tr>
        <tr>
          <td><strong>Defender for Key Vault</strong></td>
          <td>+ Key vault access anomaly detection</td>
          <td>Per vault/month</td>
        </tr>
        <tr>
          <td><strong>Defender for DNS</strong></td>
          <td>+ DNS-layer protection against malicious domains</td>
          <td>Per resource/month</td>
        </tr>
        <tr>
          <td><strong>Defender for ARM</strong></td>
          <td>+ Anomaly detection on resource manager operations</td>
          <td>Per subscription/month</td>
        </tr>
      </tbody>
    </table>

    <h4>Secure Score</h4>
    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Secure Score</div>
      <p>Secure Score is a normalized score (0-100%) based on security recommendations. It helps you understand your current security posture and prioritize improvements.</p>
      <ul>
        <li>Every recommendation has a <strong>security impact</strong> rating (High, Medium, Low)</li>
        <li>Completing recommendations <strong>increases</strong> your score</li>
        <li>Your score is compared against Azure benchmarks</li>
        <li>Goal: Achieve 80%+ secure score</li>
      </ul>
    </div>

    <h4>Key Defender for Cloud Capabilities</h4>
    <table>
      <thead>
        <tr><th>Capability</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>Continuous Assessment</td><td>Scans resources continuously for misconfigurations and vulnerabilities</td></tr>
        <tr><td>Regulatory Compliance</td><td>Maps findings to compliance standards (ISO 27001, SOC 2, PCI DSS, etc.)</td></tr>
        <tr><td>Threat Protection</td><td>Alerts on detected threats (ransomware, cryptominers, brute force)</td></tr>
        <tr><td>Adaptive Application Control</td><td>Uses ML to learn which applications should run on VMs and blocks everything else</td></tr>
        <tr><td>Network Hardening</td><td>Recommends network security group rules based on traffic analysis</td></tr>
        <tr><td>File Integrity Monitoring</td><td>Detects changes to critical system files on Windows/Linux VMs</td></tr>
        <tr><td>Vulnerability Assessment</td><td>Built-in Qualys-powered scanner — no additional license required for MDC P2</td></tr>
      </tbody>
    </table>

    <h5>Enabling Defender for Cloud at Scale</h4>
    <pre><code>
# Enable enhanced security features across entire management group using Azure CLI
az security pricing create   --name VirtualMachines   --tier "Standard"

az security pricing create   --name SqlServers   --tier "Standard"

az security pricing create   --name StorageAccounts   --tier "Standard"

# Auto-provision Log Analytics agent
az security auto-provisioning-setting update   --name "default"   --auto-provision "On"
</code></pre>
  `,v1c34:`
    <h3>Azure Policy</h3>
    <p>
      Azure Policy is a governance service that enables you to <strong>create, assign, and manage policies</strong> that enforce different rules and effects over your Azure resources. It ensures resources stay compliant with your corporate standards and service-level agreements.
    </p>

    <h4>How Azure Policy Works</h4>
    <div class="info-box">
      <div class="info-title">💡 The Policy Engine</div>
      <p>Azure Policy evaluates resources in Azure by comparing <strong>properties</strong> of those resources against defined rules. Each policy has three components:</p>
      <ul>
        <li><strong>Policy Definition:</strong> The rule — "All storage accounts must use encryption"</li>
        <li><strong>Assignment:</strong> Where the policy applies — a specific subscription or resource group</li>
        <li><strong>Parameters:</strong> Optional customization per assignment</li>
      </ul>
      <p><strong>Policy Evaluation:</strong> Azure Policy runs evaluations on a regular cadence and can also trigger on resource changes (Azure Policy extension for ARM). Non-compliant resources are flagged but <strong>not automatically fixed</strong> unless remediation tasks are configured.</p>
    </div>

    <table>
      <thead>
        <tr><th>Policy Type</th><th>Description</th><th>Use Case</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Built-in Policies</strong></td><td>Pre-defined by Microsoft (>10,000)</td><td>Quick compliance setup, CIS benchmarks</td></tr>
        <tr><td><strong>Custom Policies</strong></td><td>Written in policy language (JSON with conditions)</td><td>Organization-specific requirements</td></tr>
        <tr><td><strong>Initiatives (Policy Sets)</strong></td><td>Groups of related policies</td><td>Apply a complete compliance standard (e.g., CIS, NIST)</td></tr>
      </tbody>
    </table>

    <h4>Policy Effects</h4>
    <table>
      <thead>
        <tr><th>Effect</th><th>Behavior</th></tr>
      </thead>
      <tbody>
        <tr><td>Audit</td><td>Creates a warning event for non-compliant resources (default)</td></tr>
        <tr><td>Deny</td><td>Blocks non-compliant resource creation/modification</td></tr>
        <tr><td>Append</td><td>Adds missing properties during creation (e.g., adding tags)</td></tr>
        <tr><td>DeployIfNotExists</td><td>Deploys a resource if it doesn't exist (e.g., deploy Log Analytics agent)</td></tr>
        <tr><td>Modify</td><td>Adds, updates, or removes properties on existing resources</td></tr>
        <tr><td>Disabled</td><td>Policy not evaluated</td></tr>
      </tbody>
    </table>

    <h5>Essential Security Policies</h5>
    <pre><code>
// Example: Deny creation of storage accounts without encryption
{
  "properties": {
    "displayName": "Storage accounts should encrypt data at rest",
    "policyType": "Custom",
    "mode": "All",
    "parameters": {},
    "policyRule": {
      "if": {
        "allOf": [
          {
            "field": "type",
            "equals": "Microsoft.Storage/storageAccounts"
          },
          {
            "field": "Microsoft.Storage/storageAccounts/encryption.keySource",
            "notEquals": "Microsoft.Storage"
          }
        ]
      },
      "then": {
        "effect": "Deny"
      }
    }
  }
}
</code></pre>

    <div class="info-box">
      <div class="info-title">💡 Azure Blueprints vs. Azure Policy</div>
      <p><strong>Azure Policy</strong> enforces <em>what</em> configurations must look like.<br>
      <strong>Azure Blueprints</strong> defines <em>what</em> resources should exist and their configurations (entire environment-as-code).<br>
      They complement each other: Blueprints deploy the environment, Policies enforce compliance.</p>
    </div>
  `,v1c35:`
    <h3>Azure Blueprints</h3>
    <p>
      Azure Blueprints enables you to define a <strong>repeatable set of Azure resources</strong> that implement and adhere to standards, patterns, and requirements. Think of Blueprints as "environment templates" that ensure consistency, governance, and compliance from day one.
    </p>

    <h4>What Are Blueprints?</h4>
    <p>Blueprints are <strong>immutable snapshots</strong> of a governed environment. Unlike ARM templates, Blueprints include:</p>
    <ul>
      <li><strong>Resource templates:</strong> ARM templates for deploying resources</li>
      <li><strong>Policy assignments:</strong> Azure Policy assignments baked into the blueprint</li>
      <li><strong>Role assignments:</strong> RBAC assignments for consistent access control</li>
      <li><strong>Resource groups:</strong> Blueprint can create and manage resource groups</li>
    </ul>

    <h4>Blueprint Lifecycle</h4>
    <ol>
      <li><strong>Create:</strong> Define the blueprint with artifacts</li>
      <li><strong>Publish:</strong> Create a versioned snapshot (v1, v2, etc.)</li>
      <li><strong>Assign:</strong> Deploy the blueprint to a subscription/resource group with parameters</li>
      <li><strong>Track:</strong> Monitor deployment progress and compliance</li>
      <li><strong>Update:</strong> Create a new version of the published blueprint</li>
    </ol>

    <h4>Built-in Blueprints</h4>
    <table>
      <thead>
        <tr><th>Blueprint</th><th>Focus</th></tr>
      </thead>
      <tbody>
        <tr><td>ISO 27001</td><td>Information security management</td></tr>
        <tr><td>NIST SP 800-53 Rev 5</td><td>US federal security controls</td></tr>
        <tr><td>NIST Cybersecurity Framework</td><td>Risk management framework</td></tr>
        <tr><td>CIS Microsoft Azure Foundations Benchmark</td><td>CIS security benchmarks</td></tr>
        <tr><td>UK OFFICIAL / NHS DSPT</td><td>UK government security standards</td></tr>
        <tr><td>HITRUST</td><td>Healthcare information security</td></tr>
        <tr><td>Payment Card Industry (PCI)</td><td>PCI DSS compliance</td></tr>
      </tbody>
    </table>

    <h4>Blueprint vs. ARM Templates vs. Terraform</h4>
    <table>
      <thead>
        <tr><th>Feature</th><th>Blueprints</th><th>ARM Templates</th><th>Terraform</th></tr>
      </thead>
      <tbody>
        <tr><td>Policy Integration</td><td><strong>Native</strong></td><td>Separate</td><td>Via provider</td></tr>
        <tr><td>RBAC Integration</td><td><strong>Native</strong></td><td>Separate</td><td>Via provider</td></tr>
        <tr><td>Immutability</td><td><strong>Published versions are immutable</strong></td><td>Overwrites</td><td>State file management</td></tr>
        <tr><td>Multi-subscription</td><td><strong>Single deployment across subscriptions</strong></td><td>One subscription per deployment</td><td>Multiple providers</td></tr>
        <tr><td>GitOps</td><td>Limited</td><td>Good</td><td><strong>Best in class</strong></td></tr>
        <tr><td>Ecosystem</td><td>Azure only</td><td>Azure only</td><td>Multi-cloud</td></tr>
      </tbody>
    </table>

    <div class="callout">
      <div class="callout-icon">🏗️</div>
      <div class="callout-content">
        <h4>Enterprise Deployment Pattern</h4>
        <p>A common enterprise pattern:</p>
        <ol>
          <li>Deploy <strong>Azure Blueprints</strong> to set up subscription structure, policies, and RBAC</li>
          <li>Use <strong>Azure Policy</strong> for ongoing compliance enforcement</li>
          <li>Use <strong>Terraform/Azure Bicep</strong> for individual resource deployments</li>
          <li>Use <strong>Azure DevOps/GitHub Actions</strong> for CI/CD pipelines</li>
        </ol>
        <p>This gives you <strong>governance at scale</strong> with <strong>flexibility at the resource level</strong>.</p>
      </div>
    </div>
  `,v1c36:`
    <h3>Azure Security Center</h3>
    <p>
      Azure Security Center has evolved into <strong>Azure Defender for Cloud</strong> and <strong>Microsoft Defender for Cloud Apps</strong>. While the original Security Center branding is being phased out, understanding its foundational concepts remains essential.
    </p>

    <h4>Evolution: Security Center → Defender for Cloud</h4>
    <table>
      <thead>
        <tr><th>Era</th><th>Service</th><th>Key Features</th></tr>
      </thead>
      <tbody>
        <tr><td>2015-2020</td><td>Azure Security Center (Free + Standard)</td><td>Security recommendations, Just-In-Time access, Adaptive Application Controls</td></tr>
        <tr><td>2020-2023</td><td>Azure Defender for Cloud</td><td>Unified security management, plan-based pricing, enhanced threat protection</td></tr>
        <tr><td>2023+</td><td>Microsoft Defender for Cloud + Defender for Cloud Apps</td><td>Full CASB, broader SaaS protection, enhanced CNAPP capabilities</td></tr>
      </tbody>
    </table>

    <h4>Legacy Security Center Features Now in Defender</h4>
    <div class="info-box">
      <div class="info-title">📋 Feature Migration Map</div>
      <ul>
        <li><strong>Security Recommendations →</strong> Defender for Cloud Secure Score &amp; Recommendations</li>
        <li><strong>Just-In-Time VM Access →</strong> JIT in Defender for Servers Plan 1</li>
        <li><strong>Adaptive Application Controls →</strong> Adaptive Controls in Defender for Servers Plan 2</li>
        <li><strong>Security Alerts →</strong> Enhanced alerts in Defender for Servers Plan 2</li>
        <li><strong>File Integrity Monitoring →</strong> FIM in Defender for Servers Plan 2</li>
        <li><strong>Regulatory Compliance Dashboard →</strong> Enhanced regulatory compliance in Defender</li>
      </ul>
    </div>

    <h4>Secure Score Deep Dive</h4>
    <p>Secure Score measures your security posture across key areas:</p>
    <table>
      <thead>
        <tr><th>Security Area</th><th>Weight</th><th>Improvement Strategies</th></tr>
      </thead>
      <tbody>
        <tr><td>Compute</td><td>20%</td><td>Enable JIT, update OS, enable encryption</td></tr>
        <tr><td>Networking</td><td>15%</td><td>NSG rules, NSGs on subnets, close management ports</td></tr>
        <tr><td>Data &amp; Storage</td><td>25%</td><td>Enable encryption, restrict access, use private endpoints</td></tr>
        <tr><td>Identity &amp; Access</td><td>30%</td><td>MFA, RBAC, least privilege, Conditional Access</td></tr>
        <tr><td>Inventory and Asset Management</td><td>10%</td><td>Tag resources, complete inventory</td></tr>
      </tbody>
    </table>

    <h4>Comparison: Defender for Cloud vs. Third-Party CSPM</h4>
    <table>
      <thead>
        <tr><th>Capability</th><th>Defender for Cloud</th><th>Third-Party (Wiz, Prisma, Orca)</th></tr>
      </thead>
      <tbody>
        <tr><td>Azure-Native Features</td><td><strong>Deep integration</strong> + first-party optimizations</td><td>May lag behind new Azure features</td></tr>
        <tr><td>Multi-Cloud</td><td>AWS + GCP support</td><td>Specialized multi-cloud coverage</td></tr>
        <tr><td>Agentless Scanning</td><td>Yes + agent-based for enhanced</td><td>All agentless</td></tr>
        <tr><td>Graph Database</td><td>Yes (resource graph)</td><td>More mature graph analysis (Wiz)</td>
        <tr><td>Kubernetes Scanning</td><td>Defender for Containers</td><td>Specialized CNAPP features</td></tr>
        <tr><td>Workload Protection (EDR)</td><td>Yes (MDC P2)</td><td>Limited to alerting</td></tr>
      </tbody>
    </table>
  `,v1c37:`
    <h3>Azure Compliance Manager</h3>
    <p>
      Azure Compliance Manager (now integrated into Microsoft Purview compliance portal) helps you <strong>assess, track, and improve</strong> your compliance posture. Unlike Defender for Cloud's Secure Score, it's specifically designed around <strong>regulatory compliance frameworks</strong>.
    </p>

    <h4>What Compliance Manager Does</h4>
    <ul>
      <li><strong>Assess:</strong> Evaluate your current compliance against industry standards</li>
      <li><strong>Improve:</strong> Get actionable improvement activities with step-by-step guidance</li>
      <li><strong>Document:</strong> Maintain evidence and documentation for audits</li>
      <li><strong>Report:</strong> Generate compliance reports for stakeholders and auditors</li>
    </ul>

    <h4>Available Compliance Assessments</h4>
    <table>
      <thead>
        <tr><th>Assessment</th><th>Framework</th><th>Focus</th></tr>
      </thead>
      <tbody>
        <tr><td>GDPR Assessment</td><td>EU GDPR</td><td>Data protection for EU citizens</td></tr>
        <tr><td>HIPAA Assessment</td><td>HIPAA</td><td>Healthcare data protection</td></tr>
        <tr><td>ISO 27001 Assessment</td><td>ISO 27001</td><td>Information security management</td></tr>
        <tr><td>SOC 2 Assessment</td><td>AICPA Trust Services</td><td>Service organization controls</td></tr>
        <tr><td>NIST 800-53 Assessment</td><td>NIST</td><td>US federal security controls</td></tr>
        <tr><td>CIS Benchmarks Assessment</td><td>CIS</td><td>Center for Internet Security best practices</td></tr>
        <tr><td>PCI DSS Assessment</td><td>PCI DSS</td><td>Payment card data security</td></tr>
        <tr><td>FedRAMP Assessment</td><td>FedRAMP</td><td>US government cloud authorization</td></tr>
      </tbody>
    </table>

    <h4>Compliance Score</h4>
    <p>Each assessment has a <strong>Compliance Score</strong> (percentage):</p>
    <div class="callout">
      <div class="callout-icon">📊</div>
      <div class="callout-content">
        <h4>How Compliance Score Works</h4>
        <ul>
          <li>Each assessment requirement is marked as <strong>Completed</strong>, <strong>In Progress</strong>, or <strong>Planned</strong></li>
          <li>Score = (Completed + In Progress × 0.5) / Total × 100</li>
          <li>Use it to show auditors your progress and commitment</li>
          <li>Click any requirement to see associated <strong>Improvement Steps</strong></li>
        </ul>
      </div>
    </div>

    <h4>Using Compliance Manager for Audits</h4>
    <ol>
      <li><strong>Initial Assessment:</strong> Run the built-in assessment to get your baseline score</li>
      <li><strong>Gap Analysis:</strong> Identify areas where you're non-compliant</li>
      <li><strong>Remediation:</strong> Follow improvement steps to close gaps</li>
      <li><strong>Evidence Collection:</strong> Upload compliance evidence (screenshots, configurations, policies)</li>
      <li><strong>Audit Support:</strong> Export reports and share with auditors directly from the portal</li>
      <li><strong>Continuous Monitoring:</strong> Track score changes over time</li>
    </ol>

    <div class="info-box">
      <div class="info-title">💡 Pro Tip: Cross-Framework Mapping</div>
      <p>Compliance Manager maps requirements across <strong>multiple frameworks simultaneously</strong>. For example, implementing one Azure security control might improve your score in GDPR, ISO 27001, <em>and</em> SOC 2 at the same time. Always check the cross-framework insights when planning compliance improvements.</p>
    </div>
  `,v1c38:`
    <h3>Azure Security Best Practices</h3>
    <p>
      This chapter summarizes the comprehensive best practices for securing your Azure environment. It ties together everything covered in this Azure Security section into a <strong>master reference</strong>.
    </p>

    <h4>The 10 Pillars of Azure Security</h4>
    <table>
      <thead>
        <tr>
          <th>Pillar</th>
          <th>Practices</th>
          <th>Priority</th>
          <th>Azure Service</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>1. Identity &amp; Access</strong></td>
          <td>MFA, PIM, Conditional Access, disable legacy auth</td>
          <td style="color:#E11D48;font-weight:700;">CRITICAL</td>
          <td>Entra ID, PIM, Conditional Access</td>
        </tr>
        <tr>
          <td><strong>2. Network Security</strong></td>
          <td>NSGs, Azure Firewall, DDoS Protection, Bastion</td>
          <td style="color:#E11D48;font-weight:700;">CRITICAL</td>
          <td>Azure Firewall, NSG, DDoS, Bastion</td>
        </tr>
        <tr>
          <td><strong>3. Data Protection</strong></td>
          <td>Encryption at rest/in transit, Key Vault, immutability</td>
          <td style="color:#E11D48;font-weight:700;">CRITICAL</td>
          <td>Key Vault, Storage Encryption, Private Endpoints</td>
        </tr>
        <tr>
          <td><strong>4. Compute Security</strong></td>
          <td>JIT access, disk encryption, OS hardening, Defender</td>
          <td style="color:#FF6B35;font-weight:700;">HIGH</td>
          <td>Defender for Servers, VM Agent, JIT</td>
        </tr>
        <tr>
          <td><strong>5. Monitoring &amp; Logging</strong></td>
          <td>Log Analytics, Sentinel, Activity Logs, Alerts</td>
          <td style="color:#FF6B35;font-weight:700;">HIGH</td>
          <td>Azure Monitor, Sentinel, Activity Log</td>
        </tr>
        <tr>
          <td><strong>6. Governance &amp; Compliance</strong></td>
          <td>Blueprints, Policy, Secure Score, Compliance Manager</td>
          <td style="color:#FF6B35;font-weight:700;">HIGH</td>
          <td>Azure Policy, Blueprints, Defender</td>
        </tr>
        <tr>
          <td><strong>7. Application Security</strong></td>
          <td>Functions security, App Service TLS, managed identities</td>
          <td style="color:#FFD700;font-weight:700;">MEDIUM-HIGH</td>
          <td>App Service, Functions, App Gateway</td>
        </tr>
        <tr>
          <td><strong>8. Backup &amp; Recovery</strong></td>
          <td>Azure Backup, site recovery, soft delete, immutability</td>
          <td style="color:#FFD700;font-weight:700;">MEDIUM-HIGH</td>
          <td>Azure Backup, Site Recovery, Key Vault</td>
        </tr>
        <tr>
          <td><strong>9. CI/CD Security</strong></td>
          <td>Secure pipelines, code signing, artifact management</td>
          <td style="color:#FFD700;font-weight:700;">MEDIUM</td>
          <td>DevOps, Container Registry</td>
        </tr>
        <tr>
          <td><strong>10. Cost &amp; Resource Governance</strong></td>
          <td>Tagging, budgets, locks, resource policies</td>
          <td style="color:#22C55E;font-weight:700;">MEDIUM</td>
          <td>Cost Management, Policy, Azure Advisor</td>
        </tr>
      </tbody>
    </table>

    <h4>Quick Reference: Azure Security Checklist</h4>
    <div class="success-box">
      <div class="success-title">✓ Azure Security Checklist</div>
      <ol>
        <li>Enable <strong>MFA</strong> for all users via Conditional Access</li>
        <li>Deploy <strong>Azure Firewall</strong> or third-party NVA at hub VNet</li>
        <li>Enable <strong>DDoS Protection Standard</strong> on public IPs</li>
        <li>Use <strong>Bastion</strong> instead of public IP for VM access</li>
        <li>Enable <strong>JIT access</strong> for all management ports</li>
        <li>Use <strong>Managed Identities</strong> instead of secrets/credentials</li>
        <li>Store all secrets in <strong>Key Vault</strong> with soft delete + purge protection</li>
        <li>Enable <strong>Azure Defender</strong> for all resource types</li>
        <li>Deploy <strong>Sentinel</strong> for centralized SIEM</li>
        <li>Use <strong>Azure Policy</strong> with Deny effects for guardrails</li>
        <li>Deploy <strong>Azure Blueprints</strong> for environment governance</li>
        <li>Enable <strong>diagnostic logging</strong> on all resources</li>
        <li>Use <strong>Private Endpoints</strong> for all PaaS services</li>
        <li>Enable <strong>Secure Transfer Required</strong> on all storage accounts</li>
        <li>Enable <strong>encryption at host</strong> for sensitive VMs</li>
        <li>Use <strong>Azure Disk Encryption</strong> for all managed disks</li>
        <li>Tag all resources consistently per governance policy</li>
      </ol>
    </div>

    <div class="callout">
      <div class="callout-icon">🎓</div>
      <div class="callout-content">
        <h4>Azure Security Veda 1 Part Complete!</h4>
        <p>You've now covered comprehensive Azure security including:</p>
        <ul>
          <li>Entra ID identity management and Conditional Access</li>
          <li>RBAC and Deny Assignments</li>
          <li>Key Vault secrets and key management</li>
          <li>Network security (NSGs, Azure Firewall, DDoS, Bastion)</li>
          <li>Storage security (encryption, SAS, private endpoints)</li>
          <li>VM security (JIT, disk encryption, hardening)</li>
          <li>Functions serverless security</li>
          <li>Azure Monitor, Log Analytics, and Sentinel SIEM</li>
          <li>Defender for Cloud unified security management</li>
          <li>Azure Policy and Blueprints governance</li>
          <li>Compliance Manager for regulatory compliance</li>
          <li>The 10 pillars of Azure security</li>
        </ul>
        <p>Ready to continue your journey? Next: GCP Security.</p>
      </div>
    </div>
  `},Fg={v1c39:`
    <h3>GCP IAM Deep Dive</h3>
    <p>
      Google Cloud Identity and Access Management (IAM) is the <strong>foundational access control service</strong> in Google Cloud. Unlike AWS and Azure, GCP's IAM operates at three levels simultaneously — granting you fine-grained, hierarchical control over every resource.
    </p>

    <h4>GCP IAM Hierarchy</h4>
    <p>GCP resources are organized in a strict hierarchy, and IAM policies are inherited downward:</p>
    <pre><code>
Organization (root)
  └── Folder(s)
        └── Project(s)
              └── Resources (VMs, Buckets, DBs, etc.)

IAM Policy applied at Organization → inherited by ALL resources below
IAM Policy applied at Folder → inherited by sub-folders + projects
IAM Policy applied at Project → inherited by all resources in project
IAM Policy applied at Resource → applies only to that resource
</code></pre>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Policy Inheritance</div>
      <p>GCP IAM uses an <strong>additive model</strong> — policies are inherited from parent nodes and accumulate. If a user has <code>roles/editor</code> at the organization level, they have it on every resource in the organization, even if the project or resource has no explicit policy.</p>
      <p>To <strong>remove</strong> inherited permissions, you must grant a higher-level policy that <strong>explicitly denies</strong> via Organization Policy Constraints, or restructure your hierarchy.</p>
    </div>

    <h4>Types of Identities in GCP IAM</h4>
    <table>
      <thead>
        <tr><th>Identity Type</th><th>Description</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Google Accounts</strong></td><td>Individual Google/Gmail accounts</td><td>user@example.com</td></tr>
        <tr><td><strong>Google Groups</strong></td><td>Collections of Google accounts</td><td>security-team@googlegroups.com</td></tr>
        <tr><td><strong>Service Accounts</strong></td><td>Machine identities for applications</td><td>my-app@project.iam.gserviceaccount.com</td></tr>
        <tr><td><strong>Workload Identity Federation</strong></td><td>External identity federation (AWS, Azure, OIDC)</td><td>AWS role → GCP service account</td></tr>
        <tr><td><strong>Domain-Wide Delegation</strong></td><td>Service acting on behalf of users in a Google Workspace domain</td><td>Admin-delegated scopes</td></tr>
      </tbody>
    </table>

    <h4>GCP IAM Roles</h4>
    <table>
      <thead>
        <tr><th>Type</th><th>Description</th><th>Example Roles</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Primitive Roles</strong></td><td>Owner, Editor, Viewer (legacy, avoid in production)</td><td>roles/owner, roles/editor, roles/viewer</td></tr>
        <tr><td><strong>Predefined Roles</strong></td><td>Curated by Google for specific services</td><td>roles/storage.objectViewer, roles/compute.instanceAdmin</td></tr>
        <tr><td><strong>Custom Roles</strong></td><td>You define exact permissions needed</td><td>roles.custom.myReadOnlyRole</td></tr>
      </tbody>
    </table>

    <h5>Why Avoid Primitive Roles?</h5>
    <div class="warning-box">
      <div class="warning-title">⚠️ Primitive Roles Are Dangerous</div>
      <ul>
        <li><strong>Owner</strong> can IAM policy — grant permissions to anyone, even themselves as Owner on other projects</li>
        <li><strong>Editor</strong> can modify (delete, replace) most resources — too broad for most use cases</li>
        <li>Primitive roles <strong>apply to ALL services</strong> — there is no service scoping</li>
        <li><strong>Best practice:</strong> Always use Predefined or Custom roles with the minimum permissions required</li>
      </ul>
    </div>

    <h4>Service Accounts — Special Considerations</h4>
    <p>Service accounts are the #1 attack vector in GCP environments:</p>
    <ul>
      <li>GCE instances use <strong>service account scopes</strong> (legacy) or <strong>Workload Identity</strong> (recommended)</li>
      <li>Service accounts use <strong>JSON key files</strong> for authentication outside GCP — <strong>these keys are often leaked</strong></li>
      <li>Google recommends <strong>user-managed service accounts (User-Managed SA)</strong> with Workload Identity Federation instead of creating keys</li>
      <li>Service accounts should have <strong>minimal permissions</strong> and be audited regularly</li>
    </ul>

    <div class="callout">
      <div class="callout-icon">🛡️</div>
      <div class="callout-content">
        <h4>GCP IAM Best Practices</h4>
        <ul>
          <li>Never use Owner or Editor — use Predefined roles with specific scopes</li>
          <li>Enable <strong>Organization Policy Constraints</strong> to restrict IAM policy modifications</li>
          <li>Use <strong>Access Transparency</strong> to see when Google accesses your data</li>
          <li>Enable <strong>Audit Logging</strong> for all admin-read and data-read operations</li>
          <li>Review IAM policies quarterly using <strong>IAM Recommender</strong></li>
          <li>Delete unused service accounts and rotate keys regularly</li>
        </ul>
      </div>
    </div>
  `,v1c40:`
    <h3>GCP Resource Hierarchy</h3>
    <p>
      Understanding GCP's resource hierarchy is <strong>critical for security and billing</strong>. Unlike AWS (where accounts are flat) or Azure (which uses Management Groups), GCP uses a strict parent-child inheritance model.
    </p>

    <h4>The Four Levels</h4>
    <table>
      <thead>
        <tr><th>Level</th><th>GCP Concept</th><th>AWS Equivalent</th><th>Azure Equivalent</th><th>Can Hold IAM?</th></tr>
      </thead>
      <tbody>
        <tr><td>1 (Top)</td><td><strong>Organization</strong></td><td>AWS Organization</td><td>Entra ID Tenant</td><td>✅</td></tr>
        <tr><td>2</td><td><strong>Folder</strong></td><td>OU (Organizational Unit)</td><td>Management Group</td><td>✅</td></tr>
        <tr><td>3</td><td><strong>Project</strong></td><td>AWS Account</td><td>Subscription</td><td>✅</td></tr>
        <tr><td>4 (Bottom)</td><td><strong>Resource</strong></td><td>AWS Resource</td><td>Azure Resource</td><td>✅ (resource-level IAM)</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 The Organization Node</div>
      <p>The Organization node is the <strong>root of the hierarchy</strong> and represents your company. It's linked to your Google Workspace (formerly G Suite) domain. All projects and folders must belong to an Organization. If you haven't set one up, there's a placeholder organization that was auto-created.</p>
      <p>Key capabilities at the Organization level:</p>
      <ul>
        <li>Organization Policy Constraints (restrict regions, APIs, VM types, etc.)</li>
        <li>IAM policies that apply to <strong>everything</strong> below</li>
        <li>Shared VPC Host projects</li>
      </ul>
    </div>

    <h4>Folders: The Underused Superpower</h4>
    <p>Folders allow you to group projects and other folders into a hierarchy. They are <strong>massively underused</strong> but incredibly powerful for:</p>
    <ul>
      <li><strong>Organizational alignment:</strong> Mirror your company structure (Engineering → Backend, Frontend, Data)</li>
      <li><strong>Policy inheritance:</strong> Apply IAM and Organization Policies at the folder level</li>
      <li><strong>Access delegation:</strong> Give a team admin over their folder without giving them Organization-level access</li>
      <li><strong>Billing grouping:</strong> Group projects by cost center</li>
    </ul>

    <h5>Example Folder Hierarchy</h5>
    <pre><code>
Organization: example.com
├── Engineering
│   ├── Production (Project: prod-app)
│   ├── Staging (Project: staging-app)
│   └── Development (Project: dev-app)
├── Finance
│   ├── Production (Project: prod-billing)
│   └── Analytics (Project: analytics)
└── Shared-Services
    ├── Networking (VPC, DNS)
    └── Security (SIEM, Audit Logs)
</code></pre>

    <h4>Projects: The Fundamental Unit</h4>
    <p>A Google Cloud Project is the fundamental unit for organizing GCP resources:</p>
    <ul>
      <li>Every resource belongs to exactly <strong>one project</strong></li>
      <li>Projects provide <strong>isolation</strong> — IAM, billing, APIs are per-project</li>
      <li>Each project has a unique ID (permanent) and name (changeable)</li>
      <li>Projects are independent — enabling APIs, changing IAM on one project doesn't affect others</li>
    </ul>

    <div class="warning-box">
      <div class="warning-title">⚠️ Common Mistakes</div>
      <ul>
        <li><strong>Everything in the Default Project:</strong> Don't put production workloads in the auto-created "default" project</li>
        <li><strong>No Folders:</strong> Without folders, you can't delegate management or apply policies at scale</li>
        <li><strong>Too Many Projects:</strong> Uncontrolled project sprawl leads to orphaned resources, cost leaks, and unmanaged IAM policies</li>
        <li><strong>Not Using Org Policies:</strong> Failing to restrict allowed regions, APIs, or SKUs at the org level</li>
      </ul>
    </div>

    <h4>Organization Policy Constraints</h4>
    <p>Organization Policy Constraints are <strong>hard guardrails</strong> that restrict what can happen at the org, folder, or project level:</p>
    <table>
      <thead>
        <tr><th>Constraint</th><th>What It Restricts</th><th>Recommended Value</th></tr>
      </thead>
      <tbody>
        <tr><td>constraints/compute.vmExternalIpAccess</td><td>VMs with external IPs</td><td>Deny all, allow specific projects</td></tr>
        <tr><td>constraints/compute.skipDefaultNetworkCreation</td><td>Default VPC creation</td><td>Deny (force custom VPCs)</td></tr>
        <tr><td>constraints/iam.allowedPolicyMemberDomains</td><td>Who can be granted IAM roles</td><td>Only your domains</td></tr>
        <tr><td>constraints/storage.publicAccessPrevention</td><td>Public access to Cloud Storage</td><td>Enforced</td></tr>
        <tr><td>constraints/gcp.resourceLocations</td><td>Where resources can be deployed</td><td>Approved regions only</td></tr>
        <tr><td>constraints/compute.restrictProtocolForwardingCreationForNetworks</td><td>Protocol forwarding rules</td><td>Restrict to approved networks</td></tr>
      </tbody>
    </table>
  `,v1c41:`
    <h3>GCP VPC Security</h3>
    <p>
      Google Virtual Private Cloud (VPC) provides <strong>global, regional, and zonal</strong> networking for your cloud resources. GCP's VPC model differs significantly from AWS and Azure — it's a <strong>global VPC</strong> with subnets in regions, not region-bound VPCs.
    </p>

    <h4>GCP VPC Fundamentals</h4>
    <div class="callout">
      <div class="callout-icon">🌐</div>
      <div class="callout-content">
        <h4>Global vs. Regional VPC</h4>
        <p><strong>AWS/Azure:</strong> Each region has its own VPC. Peering connects them.<br>
        <strong>GCP:</strong> A single <strong>global VPC</strong> spans all regions. Subnets are regional but the VPC network itself is global. Communication between regions happens over Google's private backbone by default — <strong>no peering required</strong>.</p>
      </div>
    </div>

    <table>
      <thead>
        <tr><th>Concept</th><th>Description</th><th>Security Implication</th></tr>
      </thead>
      <tbody>
        <tr><td>VPC Network</td><td>A global network with subnets in multiple regions</td><td>Consistent security policies across regions</td></tr>
        <tr><td>Subnet</td><td>Regional IP range within a VPC</td><td>Firewall rules apply at subnet level</td></tr>
        <tr><td>Firewall Rules</td><td>Stateful, applied at the network or instance level</td><td>Allows or denies traffic based on criteria</td></tr>
        <tr><td>Routes</td><td>Define how traffic is directed</td><td>Custom routes can route traffic through appliances</td></tr>
        <tr><td>Cloud Router + BGP</td><td>Dynamic routing with on-premises</td><td>Hybrid connectivity, VPN, Interconnect</td></tr>
      </tbody>
    </table>

    <h4>Firewall Rules — Deep Dive</h4>
    <p>GCP firewall rules are <strong>stateful</strong> — if you allow inbound, the response is automatically allowed. Rules are evaluated at the VPC level (not the instance level like Security Groups in AWS).</p>

    <h5>Firewall Rule Priority</h5>
    <ol>
      <li>Rules are identified by <strong>name</strong>, not by priority number</li>
      <li>All matching rules are <strong>combined</strong> — if any rule allows, traffic is allowed (unless Hierarchical Firewall Policies override)</li>
      <li>Implicit <strong>deny all ingress</strong> and <strong>deny all egress</strong> at the bottom</li>
    </ol>

    <h5>Firewall Rule Targets</h5>
    <table>
      <thead>
        <tr><th>Target</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>All instances in network</td><td>Applies to all VMs in the VPC</td></tr>
        <tr><td>Specified target tags</td><td>Only VMs with matching network tags</td></tr>
        <tr><td>Specified service account</td><td>Only VMs running under a specific service account (recommended)</td></tr>
      </tbody>
    </table>

    <div class="warning-box">
      <div class="warning-title">⚠️ GCP Firewall Gotchas</div>
      <ul>
        <li>GCP firewall rules are <strong>not tied to a subnet</strong> — they apply to matching targets across the <strong>entire VPC</strong></li>
        <li>Using network tags? <strong>All VMs with that tag</strong> across all regions are affected</li>
        <li>Multiple matching allow rules are <strong>additive</strong> — any single allow rule permits traffic</li>
        <li>Service account targeting is <strong>strongly recommended</strong> over network tags for fine-grained control</li>
        <li>Default VPC comes with <strong>overly permissive</strong> firewall rules — review and restrict</li>
      </ul>
    </div>

    <h4>VPC Flow Logs</h4>
    <p>VPC Flow Logs record network traffic metadata for monitoring, forensics, and security analysis:</p>
    <ul>
      <li>Aggregated or sampled flow data</li>
      <li>Logging frequency: 5-second to 1-hour intervals</li>
      <li>Export to <strong>Cloud Logging</strong> or <strong>BigQuery</strong> for analysis</li>
      <li>Can be enabled at the VPC, subnet, or VM interface level</li>
      <li><strong>Enable on all production VPCs</strong> — essential for incident response</li>
    </ul>

    <h4>Cloud NAT &amp; Private Google Access</h4>
    <ul>
      <li><strong>Cloud NAT:</strong> Allows VMs with only private IPs to access the internet (for updates, API calls) without exposing them</li>
      <li><strong>Private Google Access:</strong> Allows VMs with private IPs to reach Google APIs and services without a public IP</li>
      <li>Both significantly <strong>reduce your attack surface</strong> by eliminating the need for external IPs</li>
    </ul>
  `,v1c42:`
    <h3>GCP Cloud Storage Security</h3>
    <p>
      Google Cloud Storage (GCS) is the object storage service for GCP. Properly configuring bucket security is <strong>essential</strong> — misconfigurations have led to major data breaches.
    </p>

    <h4>Cloud Storage Access Model</h4>
    <p>GCS uses a <strong>unified bucket-level IAM</strong> model (similar to AWS S3 but with key differences):</p>
    <ul>
      <li><strong>Uniform bucket-level access:</strong> IAM policies on the bucket control all access (recommended)</li>
      <li><strong>Fine-grained ACLs:</strong> Legacy object-level ACL lists (avoid in new deployments)</li>
      <li>Google recommends <strong>uniform bucket-level access</strong> for all new and existing buckets</li>
    </ul>

    <h4>Predefined Bucket Roles</h4>
    <table>
      <thead>
        <tr><th>Role</th><th>Permissions</th><th>Use Case</th></tr>
      </thead>
      <tbody>
        <tr><td>roles/storage.legacyBucketReader</td><td>Read bucket and ACLs</td><td>Read-only legacy access</td></tr>
        <tr><td>roles/storage.objectViewer</td><td>Read objects and metadata</td><td>Public content serving</td></tr>
        <tr><td>roles/storage.objectCreator</td><td>Create objects</td><td>Upload-only access</td></tr>
        <tr><td>roles/storage.objectAdmin</td><td>Full object management</td><td>Application access</td></tr>
        <tr><td>roles/storage.legacyBucketWriter</td><td>Write to bucket</td><td>Legacy write access</td></tr>
        <tr><td>roles/storage.admin</td><td>Full bucket management + IAM</td><td>Bucket administrators</td></tr>
      </tbody>
    </table>

    <h4>Encryption Options</h4>
    <p>All Cloud Storage data is <strong>encrypted at rest by default</strong> using Google-managed encryption keys:</p>
    <table>
      <thead>
        <tr><th>Type</th><th>Key Management</th><th>Control Level</th></tr>
      </thead>
      <tbody>
        <tr><td>Google-managed encryption</td><td>Google manages keys</td><td>Default, transparent</td></tr>
        <tr><td>Customer-managed encryption keys (CMEK)</td><td>Cloud KMS</td><td>You control key lifecycle and access</td></tr>
        <tr><td>Customer-supplied encryption keys (CSEK)</td><td>Your own key (provided per request)</td><td>Maximum control, most complex</td></tr>
      </tbody>
    </table>

    <h5>Enabling CMEK</h5>
    <pre><code>
# Set CMEK on a bucket
gsutil kms encryption -p projects/my-project   -k locations/global/keyRings/my-ring/cryptoKeys/my-key   gs://my-secure-bucket
</code></pre>

    <h4>Bucket Policy Only (Enforced Uniform Access)</h4>
    <div class="info-box">
      <div class="info-title">💡 Lock Down Your Buckets</div>
      <p><strong>Bucket Policy Only</strong> mode disables fine-grained ACLs, ensuring all access is controlled through IAM:</p>
      <pre><code>
# Enforce uniform bucket-level access
gsutil uniformbucketlevelaccess set on gs://my-bucket

# Verify setting
gsutil uniformbucketlevelaccess get gs://my-bucket
</code></pre>
      <p>Google recommends enabling <strong>Bucket Policy Only</strong> on all production buckets.</p>
    </div>

    <h4>Data Access Prevention</h4>
    <p>Google's <strong>Data Access</strong> logs capture all API calls to Cloud Storage:</p>
    <ul>
      <li>Enabled by default for audit-enabled buckets</li>
      <li>Records read and write operations</li>
      <li>Logs include: caller identity, bucket, object, operation type</li>
      <li>Exportable to BigQuery for long-term analysis</li>
    </ul>

    <h4>Public Access Prevention</h4>
    <div class="warning-box">
      <div class="warning-title">⚠️ Preventing Public Access</div>
      <p>To block all public access to your Cloud Storage buckets:</p>
      <pre><code>
# Organization Policy to prevent public access
# constraints/storage.publicAccessPrevention
# Set to "enforced" at the Organization level

gcloud organizations policy set-enforce   storage.publicAccessPrevention=true   --organization=ORGANIZATION_ID
</code></pre>
      <p>This is the GCP equivalent of S3 Block Public Access — should be enabled <strong>organization-wide</strong>.</p>
    </div>
  `,v1c43:`
    <h3>GCP Compute Engine Security</h3>
    <p>
      Google Compute Engine (GCE) provides virtual machines that you fully control. As with AWS EC2 and Azure VMs, the <strong>security responsibility is yours</strong> — you manage the guest OS, applications, and configurations.
    </p>

    <h4>Compute Engine Security Model</h4>
    <table>
      <thead>
        <tr><th>Layer</th><th>Security Controls</th></tr>
      </thead>
      <tbody>
        <tr><td>Network</td><td>VPC firewall rules, network tags, service accounts</td></tr>
        <tr><td>Instance</td><td>OS-level firewall, SSH key management, auto-updates</td></tr>
        <tr><td>Application</td><td>Application hardening, vulnerability scanning</td></tr>
        <tr><td>Data</td><td>Persistent disk encryption, customer-managed keys</td></tr>
        <tr><td>Identity</td><td>Service accounts with scoped permissions</td></tr>
      </tbody>
    </table>

    <h4>Instance Metadata Security</h4>
    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Protecting the Metadata Server</div>
      <p>Every GCE instance has access to the <strong>metadata server</strong> at <code>169.254.169.254</code>, which provides:</p>
      <ul>
        <li>Service account tokens (equivalent to AWS IMDS)</li>
        <li>Project and instance metadata</li>
        <li>Custom metadata (may contain secrets!)</li>
      </ul>
      <p><strong>Protection strategies:</strong></p>
      <ol>
        <li>Use <strong>VPC-SC (VPC Service Controls)</strong> to prevent data exfiltration</li>
        <li>Block metadata access at the <strong>OS firewall level</strong> for sensitive instances</li>
        <li>Use <strong>Workload Identity</strong> instead of service account keys</li>
        <li>Never store secrets in <strong>custom metadata</strong> — use Secret Manager instead</li>
        <li>Restrict service account scopes to <strong>read-only</strong> when possible</li>
      </ol>
    </div>

    <h5>Service Account Scopes vs. Service Account IAM</h5>
    <table>
      <thead>
        <tr><th>Approach</th><th>Old Model</th><th>New Model</th></tr>
      </thead>
      <tbody>
        <tr><td>Authorization</td><td>Instance metadata scopes</td><td>Service account IAM roles</td></tr>
        <tr><td>Granularity</td><td>Coarse (read-only, read-write, full)</td><td><strong>Fine-grained (per-service)</strong></td></tr>
        <tr><td>Default Setting</td><td>Allow full access to all Cloud APIs</td><td>Allow no access to Cloud APIs (recommended)</td></tr>
        <tr><td>Security</td><td>Less secure</td><td><strong>More secure</strong></td></tr>
      </tbody>
    </table>

    <h4>Shielded VM</h4>
    <div class="info-box">
      <div class="info-title">🛡️ Shielded VM — Hardware-Level Security</div>
      <p>Shielded VMs use hardware security features (TPM 2.0, Secure Boot) to ensure VM integrity:</p>
      <ul>
        <li><strong>Secure Boot:</strong> Verifies bootloader and kernel integrity at startup</li>
        <li><strong>vTPM (Virtual Trusted Platform Module):</strong> Enables measured boot and integrity monitoring</li>
        <tr><td>Integrity Monitoring:</td><td>Detects unauthorized changes to boot sequence</td></tr>
        <li><strong>UEFI-compatible:</strong> Modern firmware</li>
      </ul>
      <p><strong>Recommended:</strong> Enable Shielded VM on all production instances. The extra cost is minimal.</p>
    </div>

    <h4>Compute Engine Hardening</h4>
    <ol>
      <li>Use <strong>Shielded VMs</strong> for all production workloads</li>
      <li>Remove <strong>external IPs</strong> — use Cloud NAT for outbound and IAP for inbound</li>
      <li>Use <strong>Workload Identity Federation</strong> instead of service account keys</li>
      <li>Set service account scopes to <strong>only what's needed</strong> (or use the default "no scopes")</li>
      <li>Enable <strong>OS Login</strong> for SSH key management via IAM</li>
      <li>Configure <strong>automatic OS updates</strong> (enable automatic package updates)</li>
      <li>Use <strong>Custom Images</strong> pre-hardened with CIS benchmarks</li>
      <li>Enable <strong>serial port logging</strong> for post-mortem debugging</li>
      <li>Restrict <strong>guest attributes API access</strong></li>
      <li>Use <strong>Confidential VMs</strong> for highly sensitive workloads (encrypted memory)</li>
    </ol>

    <h5>Identity-Aware Proxy (IAP) for SSH</h5>
    <div class="info-box">
      <div class="info-title">💡 IAP for TCP Forwarding — Replace SSH Keys</div>
      <p><strong>Identity-Aware Proxy (IAP)</strong> provides secure SSH access without public IPs or SSH keys:</p>
      <ul>
        <li>All access goes through Google's infrastructure</li>
        <li>Authenticated via Entra ID/Google Accounts with MFA</li>
        <li>Audit-logged in Cloud Audit Logs</li>
        <li>Access can be granted per-instance via IAM</li>
      </ul>
      <pre><code>
# Connect via IAP
gcloud beta compute ssh instance-name   --zone=us-central1-a   --tunnel-through-iap
</code></pre>
    </div>
  `,v1c44:`
    <h3>GCP Cloud Functions Security</h3>
    <p>
      Google Cloud Functions is the serverless compute platform in GCP. Like AWS Lambda, it abstracts infrastructure management but introduces unique security patterns.
    </p>

    <h4>Cloud Functions Identity</h4>
    <p>Each Cloud Function runs with a <strong>service account</strong> identity:</p>
    <ul>
      <li>Default: the Compute Engine default service account</li>
      <li>Recommended: <strong>dedicated service account</strong> with minimum permissions</li>
      <li>Can also use <strong>Workload Identity</strong> to run as a Kubernetes service account</li>
    </ul>

    <h4>HTTP vs. Event-Driven Functions</h4>
    <p>Security considerations differ based on trigger type:</p>
    <table>
      <thead>
        <tr><th>Trigger</th><th>Security Model</th><th>Best For</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>HTTP Trigger</strong></td><td>Publicly accessible URL (unless restricted)</td><td>APIs, webhooks</td></tr>
        <tr><td><strong>Cloud Events (Pub/Sub, Storage, Firestore)</strong></td><td>Only triggered by the specified event source</td><td>Background processing, event-driven architecture</td></tr>
        <tr><td><strong>Cloud Scheduler / Workflows</strong></td><td>Internal trigger via service account</td><td>Cron jobs, scheduled tasks</td></tr>
      </tbody>
    </table>

    <h5>Securing HTTP Functions</h5>
    <ol>
      <li><strong>Authentication:</strong> Require authentication for all production functions</li>
      <li><strong>IAM invoker role:</strong> Grant <code>roles/cloudfunctions.invoker</code> only to specific service accounts</li>
      <li><strong>VPC Connector:</strong> Use for functions that need to access private resources</li>
      <li><strong>Ingress settings:</strong> Set to "Allow internal traffic only" or "Allow internal and Cloud Load Balancing"</li>
      <li><strong>CORS:</strong> Configure CORS headers to restrict browser-based access</li>
    </ol>

    <div class="warning-box">
      <div class="warning-title">⚠️ Secret Handling in Cloud Functions</div>
      <p>Never hardcode secrets in function code or environment variables visible in the console. Instead:</p>
      <ol>
        <li>Use <strong>Secret Manager</strong> to store secrets</li>
        <li>Grant the function's service account <code>roles/secretmanager.secretAccessor</code></li>
        <li>Fetch secrets at function initialization (cached for warm invocations)</li>
      </ol>
    </div>

    <h4>Cloud Functions Security Checklist</h4>
    <ul>
      <li>Enable <strong>VPC Service Controls</strong> for sensitive projects</li>
      <li>Set <strong>maximum instances</strong> to prevent runaway scaling and costs</li>
      <li>Enable <strong>Cloud Audit Logs</strong> for all function invocations</li>
      <li>Use <strong>.gcloudignore</strong> to prevent sensitive files from being deployed</li>
      <li>Implement <strong>input validation</strong> in function code</li>
      <li>Keep <strong>dependencies updated</strong> and scan for vulnerabilities</li>
    </ul>
  `,v1c45:`
    <h3>GCP Cloud Audit Logs</h3>
    <p>
      Cloud Audit Logs is GCP's audit trail service. It records <strong>who did what, where, and when</strong> across your Google Cloud resources. Understanding audit logs is essential for security monitoring, compliance, and incident response.
    </p>

    <h4>Types of Audit Logs</h4>
    <table>
      <thead>
        <tr><th>Type</th><th>Description</th><th>Enabled By Default?</th><th>Cost</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Admin Activity</strong></td><td>Modifications to resource configuration (create, update, delete)</td><td>✅ Yes</td><td>Free</td></tr>
        <tr><td><strong>System Event</strong></td><td>Automated Google system events (e.g., live migration)</td><td>✅ Yes</td><td>Free</td></tr>
        <tr><td><strong>Data Access</strong></td><td>Reading resource metadata or user-provided data</td><td>❌ No (BigQuery: enabled by default)</td><td>Charged</td></tr>
        <tr><td><strong>Policy Denied</strong></td><td>Requests denied by VPC-SC or IAM deny policies</td><td>❌ No</td><td>Charged</td></tr>
      </tbody>
    </table>

    <div class="key-box">
      <div class="key-title">🔑 Best Practice: Enable Data Access Audit Logs</div>
      <p>While Data Access audit logs incur additional costs, they are <strong>essential for security investigations</strong>. Without them, you can see <em>who changed a policy</em> but not <em>who accessed sensitive data</em>. Enable them for all production resources.</p>
    </div>

    <h4>Log Sinks for Retention</h4>
    <p>By default, audit logs are retained for 30 days. For compliance and forensic purposes, export to long-term storage:</p>
    <ul>
      <li><strong>Cloud Storage:</strong> Cheap, durable, unlimited retention (set lifecycle policies)</li>
      <li><strong>BigQuery:</strong> Analytics-ready, SQL queries on log data, cost-effective for large volumes</li>
      <li><strong>Pub/Sub:</strong>Real-time streaming to SIEM/SOAR tools</li>
      <li><strong>Splunk/Elastic:</strong>Via Pub/Sub subscription for external SIEM</li>
    </ul>

    <h5>Creating a Log Sink</h5>
    <pre><code>
# Export all Data Access logs to BigQuery
gcloud logging sinks create my-audit-sink   bigquery.googleapis.com/projects/my-project/datasets/audit_logs   --log-filter='protoPayload.serviceName="storage.googleapis.com" AND protoPayload.methodName="storage.objects.get"'   --use-partitioned-tables
</code></pre>

    <h4>Detecting Threats with Audit Logs</h4>
    <p>Key indicators to monitor in audit logs:</p>
    <table>
      <thead>
        <tr><th>Threat Indicator</th><th>Log Event</th><th>Response</th></tr>
      </thead>
      <tbody>
        <tr><td>Unusual API calls</td><td>New or rare methodName values</td><td>Investigate source IP and identity</td></tr>
        <tr><td>Privilege escalation</td><td>SetIamPolicy with added roles</td><td>Alert and revert immediately</td></tr>
        <tr><td>Exfiltration attempts</td><td>Bucket policy modifications + data downloads</td><td>Block service account, investigate</td></tr>
        <tr><td>Unauthorized access</td><td>403 errors with valid authentication</td><td>Check IAM policies for unauthorized attempts</td></tr>
        <tr><td>Resource deletion</td><td>delete operations outside change windows</td><td>Restore from backup, investigate</td></tr>
      </tbody>
    </table>

    <div class="callout">
      <div class="callout-icon">🔍</div>
      <div class="callout-content">
        <h4>Log Query Example: Detect External Access</h4>
        <pre><code>
# BigQuery SQL to find data access from unusual locations
SELECT
  timestamp,
  protoPayload.authenticationInfo.principalEmail,
  protoPayload.requestMetadata.callerIp,
  protoPayload.methodName,
  protoPayload.serviceName
FROM "project.audit_logs.cloudaudit_googleapis_com_data_access"
WHERE
  timestamp > TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 7 DAY)
  AND protoPayload.requestMetadata.callerIp NOT LIKE "35.%"  -- Filter out common GCP IPs
ORDER BY timestamp DESC
</code></pre>
      </div>
    </div>
  `,v1c46:`
    <h3>GCP Security Command Center</h3>
    <p>
      Security Command Center (SCC) is GCP's <strong>centralized security and risk management platform</strong>. It provides asset inventory, vulnerability scanning, threat detection, and security analytics in one place.
    </p>

    <h4>SCC Tiers</h4>
    <table>
      <thead>
        <tr><th>Tier</th><th>Features</th><th>Cost</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Standard Tier</strong></td>
          <td>Security health dashboard, asset inventory, basic security recommendations, findings from integrated services</td>
          <td>Free</td>
        </tr>
        <tr>
          <td><strong>Premium Tier</strong></td>
          <td>Event Threat Detection (ETD), Web Security Scanner, Container scanning, IDS for on-prem</td>
          <td>Per resource/month</td>
        </tr>
        <tr>
          <td><strong>MSSPs</strong></td>
          <td>Multi-tenant management for managed security service providers</td>
          <td>Custom pricing</td>
        </tr>
        <tbody>
      </tbody>
    </table>

    <h4>Key SCC Capabilities</h4>
    <ol>
      <li><strong>Asset Inventory:</strong> Complete inventory of all GCP resources — VMs, storage, databases, IAM policies. Searchable and filterable.</li>
      <li><strong>Security Health Dashboard:</strong> Aggregated view of security findings from all integrated services.</li>
      <li><strong>Findings Management:</strong> Track, triage, and remediate security findings with severity scoring.</li>
      <li><strong>Mute Rules:</strong> Suppress false positive findings automatically.</li>
      <li><strong>Notification Channels:</strong> Send findings to Pub/Sub, Slack, PagerDuty, etc.</li>
      <li><strong>Source Properties:</strong> Track which security scanners reported each finding.</li>
    </ol>

    <h4>Event Threat Detection (Premium)</h4>
    <p>ETD uses Google's threat intelligence to detect malicious activity in your environment:</p>
    <ul>
      <li>Malware detection in GCE and GKE workloads</li>
      <li>Cryptominer detection</li>
      <li>Outgoing DoS attack detection</li>
      <li>Reverse shell detection</li>
      <li>Suricata-based IDS for on-premise network traffic</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 SCC + Chronicle SIEM Integration</div>
      <p>For enterprise customers, SCC integrates with <strong>Google Chronicle SIEM</strong> (now part of Google SecOps) for:</p>
      <ul>
        <li>Long-term log retention and analysis</li>
        <li>Advanced threat hunting with YARA-L rules</li>
        <li>Cross-product correlation (Workspace + Cloud + endpoints)</li>
        <li>Automated investigation and response with SOAR</li>
      </ul>
    </div>

    <h4>SCC Best Practices</h4>
    <ol>
      <li>Enable SCC <strong>organization-wide</strong> for maximum visibility</li>
      <li>Enable <strong>Premium tier</strong> for Event Threat Detection</li>
      <li>Set up <strong>notification channels</strong> for real-time alerts</li>
      <li>Review <strong>findings weekly</strong> and assign remediation owners</li>
      <li>Use <strong>mute rules</strong> carefully — document why each rule exists</li>
      <li>Leverage the <strong>asset inventory</strong> for CMDB and shadow IT discovery</li>
    </ol>
  `,v1c47:`
    <h3>GCP VPC Service Controls</h3>
    <p>
      VPC Service Controls create <strong>security perimeters</strong> around GCP services to mitigate data exfiltration risks. They are a critical component of <strong>Zero Trust architecture</strong> in GCP.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Security Perimeters</div>
      <p>A security perimeter is a <strong>boundary</strong> around Google Cloud services. Resources and data within the perimeter cannot be accessed by <strong>unauthorized</strong> principals outside the perimeter, even if they have correct IAM permissions. This prevents data exfiltration even by compromised credentials.</p>
    </div>

    <h4>What VPC-SC Protects Against</h4>
    <ul>
      <li><strong>Data exfiltration via compromised credentials:</strong> Even with valid IAM, data cannot leave the perimeter</li>
      <li><strong>Code download attacks:</strong> Malicious actors trying to download sensitive data to external endpoints</li>
      <li><strong>Copy attacks:</strong> Copying data to projects outside the perimeter</li>
      <li><strong>Data sharing outside the organization:</strong> Enforces data residency and access policies</li>
    </ul>

    <h4>Supported Services</h4>
    <p>As of 2024, VPC-SC protects over 25 services including:</p>
    <table>
      <thead>
        <tr><th>Service Category</th><th>Services</th></tr>
      </thead>
      <tbody>
        <tr><td>Storage</td><td>Cloud Storage, BigQuery</td></tr>
        <tr><td>Compute</td><td>Compute Engine, GKE</td></tr>
        <tr><td>AI/ML</td><td>Vertex AI, AutoML</td></tr>
        <tr><td>Serverless</td><td>Cloud Functions, Cloud Run, App Engine</td></tr>
        <tr><td>Databases</td><td>Cloud SQL, Spanner, Firestore</td></tr>
        <tr><td>Analytics</td><td>Dataflow, Dataproc, BigQuery</td></tr>
        <tr><td>Networking</td><td>Cloud DNS, NAT</td></tr>
      </tbody>
    </table>

    <h4>VPC-SC Access Levels</h4>
    <p>Access levels define <strong>who</strong> can access resources inside the perimeter:</p>
    <table>
      <thead>
        <tr><th>Access Level Type</th><th>Description</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td>IP-based</td><td>Specify allowed IP ranges</td><td>Corporate VPN IP ranges</td></tr>
        <tr><td>Device-based</td><td>Require managed devices (via BeyondCorp)</td><td>Corporate laptops with MDM</td></tr>
        <tr><td>Identity-based</td><td>Require specific Google identities</td><td>Members of security group</td></tr>
      </tbody>
    </table>

    <h5>Access Level Example (YAML)</h5>
    <pre><code>
name: accessPolicies/123/accessLevels/corp_access
title: Corporate Access
basic:
  conditions:
    - ipSubnetworks:
        - "35.235.0.0/16"  # Corporate VPN
    - requiredAccessLevels:
        - accessPolicies/123/accessLevels/high_trust
    - members:
        - "group:security@example.com"
</code></pre>

    <div class="callout">
      <div class="callout-icon">🚨</div>
      <div class="callout-content">
        <h4>VPC-SC Incident Response</h4>
        <p>If VPC-SC blocks a legitimate request, the error is returned immediately:</p>
        <pre><code>
ERROR: PERMISSION_DENIED:
Request is prohibited by organization's policy.
The request was blocked by VPC Service Controls
</code></pre>
        <p><strong>Do NOT remove VPC-SC</strong> to resolve the error. Instead, investigate the blocked request, verify it's authorized, and adjust access levels if needed.</p>
      </div>
    </div>

    <h4>Bridging and Egress Controls</h4>
    <p><strong>Bridging</strong> allows authorized API calls to access resources across perimeters. <strong>Egress policies</strong> control data leaving the perimeter:</p>
    <ul>
      <li><strong>Restricted Services:</strong> Define which services can receive data from inside the perimeter</li>
      <li><strong>Access Levels:</strong> Combine with access levels for granular control</li>
      <li><strong>Audit logging:</strong> All perimeter violations are logged for investigation</li>
    </ul>
  `,v1c48:`
    <h3>GCP Binary Authorization</h3>
    <p>
      Binary Authorization (Binauthz) is a <strong>deploy-time security policy</strong> that ensures only <strong>signed and verified container images</strong> are deployed to GKE, Cloud Run, and other GCP services.
    </p>

    <h4>Why Binary Authorization?</h4>
    <p>Container supply chain attacks are increasing. Without image verification, attackers can:</p>
    <ul>
      <li>Push malicious images to your container registry</li>
      <li>Tamper with images in transit</li>
      <li>Deploy known-vulnerable images</li>
      <li>Use unauthorized base images</li>
    </ul>

    <h4>Binauthz Architecture</h4>
    <pre><code>
1. Developer builds container image
2. Image signed by Sigstore/Cosign or KMS
3. Image pushed to Artifact Registry
4. ATTESTOR verifies signature + policy
5. ✅ Image deployed (or ❌ denied)
</code></pre>

    <h4>Attestors</h4>
    <p>Attestors verify that images meet your security requirements:</p>
    <table>
      <thead>
        <tr><th>Attestor Type</th><th>Function</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>KMS Key Attestor</strong></td><td>Verifies images signed with a specific KMS key</td></tr>
        <tr><td><strong>P.Kix Attestor</strong></td><td>Verifies PGP-signature-based attestations</td></tr>
        <tr><td><strong>IAP Attestor</strong></td><td>Uses Google's Identity-Aware Proxy for verification</td></tr>
        <tr><td><strong>Continuous Validation</strong></td><td>Continuously checks deployed images against policy</td></tr>
      </tbody>
    </table>

    <h4>Binauthz Policy Example</h4>
    <pre><code>
# Require all GKE images to be signed by trusted key
gcloud container binauthz policy create   --project=my-project   --attestor-project=my-project   --attestor=kms_key   --keyversion-project=my-project   --keyversion-location=global   --keyversion-keyring=my-keyring   --keyversion=signing-key-v1
</code></pre>

    <h4>Continuous Validation Mode</h4>
    <div class="info-box">
      <div class="info-title">💡 Continuous Validation</div>
      <p>Beyond deploy-time checks, Binary Authorization can <strong>continuously validate</strong> running images:</p>
      <ul>
        <li>Detects if an image is later found to be vulnerable (CVE disclosed after deployment)</li>
        <li>Alerts if an image was rebuilt without going through the signing process</li>
        <li>Enforces freshness policies (e.g., images must be rebuilt within 30 days)</li>
      </ul>
    </div>

    <h4>Integration with Supply Chain Security</h4>
    <p>Binauthz works with other GCP security services:</p>
    <ul>
      <li><strong>Artifact Analysis:</strong> Automatically scan images on push</li>
      <li><strong>SLSA Framework:</strong> Provenance attestations for supply chain integrity</li>
      <li><strong>Artifact Registry:</strong> Central repository for container images</li>
      <li><strong>Cloud Build:</strong> Automated build pipelines with signing</li>
    </ul>
  `,v1c49:`
    <h3>GCP Cloud KMS</h3>
    <p>
      Google Cloud Key Management Service (Cloud KMS) lets you manage <strong>cryptographic keys</strong> for your cloud services. Like AWS KMS, it uses Hardware Security Modules (HSMs) to protect key material, but with GCP-specific integration patterns.
    </p>

    <h4>Key Ring and Key Hierarchy</h4>
    <p>GCP KMS organizes keys in a three-level hierarchy:</p>
    <pre><code>
Location (e.g., global, us-east1)
  └── Key Ring
        └── Crypto Key
              ├── Key Version 1 (primary)
              ├── Key Version 2 (active)
              └── Key Version N (destroyed/scheduled for deletion)
</code></pre>

    <table>
      <thead>
        <tr><th>Resource</th><th>Description</th><th>Cost</th></tr>
      </thead>
      <tbody>
        <tr><td>Key Ring</td><td>Organizational grouping for keys</td><td>Free</td></tr>
        <tr><td>Crypto Key</td><td>The key itself (contains versions)</td><td>$0.03/key/month</td></tr>
        <tr><td>Key Version</td><td>Specific cryptographic material</td><td>$0.03/version/month</td></tr>
        <tr><td>Asymmetric Keys</td><td>RSA, EC key pairs for signing/encryption</td><td>Higher cost</td></tr>
      </tbody>
    </table>

    <h4>Key Types</h4>
    <table>
      <thead>
        <tr><th>Key Purpose</th><th>Algorithm</th><th>Use Case</th></tr>
      </thead>
      <tbody>
        <tr><td>Symmetric Encryption</td><td>AES-256-GCM</td><td>Data encryption (Cloud Storage, BigQuery, GCE disks)</td></tr>
        <tr><td>Asymmetric Sign</td><td>RSA-2048/4096, ECDSA P-256/384</td><td>Digital signatures, JWT signing</td></tr>
        <tr><td>Asymmetric Decrypt</td><td>RSA-2048/4096</td><td>Envelope encryption with small public key</td></tr>
        <tr><td>MAC</td><td>HMAC (SHA-256/512)</td><td>Message authentication, integrity verification</td></tr>
      </tbody>
    </table>

    <h4>Key Rotation</h4>
    <p>Cloud KMS supports <strong>automatic key rotation</strong>:</p>
    <ul>
      <li>Configure rotation period (e.g., every 90 days, 1 year)</li>
      <li>New key version automatically created at rotation time</li>
      <li>Old versions retained for decryption</li>
      <li>Next rotation time automatically recalculated</li>
    </ul>

    <div class="warning-box">
      <div class="warning-title">⚠️ Key Deletion</div>
      <p>Scheduling a key for deletion starts a <strong>24-hour to 100-day waiting period</strong>. After deletion, all data encrypted with that key version becomes <strong>permanently unrecoverable</strong>. <strong>Always test decryption before deleting.</strong></p>
    </div>

    <h4>Cloud KMS IAM Roles</h4>
    <table>
      <thead>
        <tr><th>Role</th><th>Permissions</th><th>Use Case</th></tr>
      </thead>
      <tbody>
        <tr><td>roles/cloudkms.cryptoKeyEncrypterDecrypter</td><td>Encrypt/decrypt with specific keys</td><td>Application workloads</td></tr>
        <tr><td>roles/cloudkms.cryptoKeyEncrypter</td><td>Encrypt only</td><td>Write-only encryption services</td></tr>
        <tr><td>roles/cloudkms.cryptoKeyDecrypter</td><td>Decrypt only</td><td>Batch decryption jobs</td></tr>
        <tr><td>roles/cloudkms.keyRingEncrypterDecrypter</td><td>Encrypt/decrypt on any key in ring</td><td>Broad encryption access</td></tr>
        <tr><td>roles/cloudkms.admin</td><td>Full key management</td><td>Key administrators</td></tr>
      </tbody>
    </table>

    <h4>Envelope Encryption with Cloud KMS</h4>
    <div class="callout">
      <div class="callout-icon">🔄</div>
      <div class="callout-content">
        <h4>GCP Envelope Encryption Flow</h4>
        <ol>
          <li>Generate a Data Encryption Key (DEK) locally</li>
          <li>Encrypt your data with the DEK</li>
          <li>Call Cloud KMS to encrypt the DEK with your Key Encryption Key (KEK)</li>
          <li>Store the encrypted DEK alongside the encrypted data</li>
          <li>To decrypt: send encrypted DEK to KMS → get plaintext DEK → decrypt data</li>
        </ol>
        <p>This pattern is used by Cloud Storage, GCE persistent disks, and BigQuery transparently.</p>
      </div>
    </div>
  `,v1c50:`
    <h3>GCP Secret Manager</h3>
    <p>
      Secret Manager is GCP's <strong>centralized secrets management</strong> service. It provides secure storage, access control, and version management for API keys, passwords, certificates, and other sensitive data.
    </p>

    <h4>Why Not Environment Variables?</h4>
    <div class="warning-box">
      <div class="warning-title">⚠️ The Problem with Environment Variables</div>
      <ul>
        <li>Visible in process listings (<code>/proc/self/environ</code>)</li>
        <li>Logged in error messages and stack traces</li>
        <li>Hard to rotate — requires redeployment</li>
        <li>No access audit trail for who read the secret</li>
        <li>Often committed to source code (accidentally)</li>
      </ul>
      <p><strong>Secret Manager solves all of these</strong> by providing encrypted, versioned, access-controlled secret storage with full audit logging.</p>
    </div>

    <h4>Key Features</h4>
    <table>
      <thead>
        <tr><th>Feature</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>Versioning</td><td>All secret versions are stored and accessible. You can disable or destroy old versions.</td></tr>
        <tr><td>Replication</td><td>Automatic replication across GCP regions for availability. Customer-managed replication for compliance (e.g., single region).</td></tr>
        <tr><td>Access Control</td><td>Fine-grained IAM: secretAccessor, secretManager, admin roles</td></tr>
        <tr><td>Audit Logging</ttd>| All secret accesses logged in Cloud Audit Logs</td></tr>
        <tr><td>Rotation</td><td>Configure automatic rotation with Cloud Scheduler + Cloud Functions</td></tr>
        <tr><td>Integration</td><td>Native integration with GKE (Secrets Store CSI Driver), Cloud Run, Cloud Functions, App Engine</td></tr>
      </tbody>
    </table>

    <h4>Secret Manager IAM Roles</h4>
    <table>
      <thead>
        <tr><th>Role</th><th>Permissions</th><th>Use Case</th></tr>
      </thead>
      <tbody>
        <tr><td>roles/secretmanager.secretAccessor</td><td>Read secret versions</td><td>Applications that need to use secrets</td></tr>
        <tr><td>roles/secretmanager.secretVersionAdder</td><td>Add new versions</td><td>CI/CD pipelines</td></tr>
        <tr><td>roles/secretmanager.secretManager</td><td>Full management</td><td>Security administrators</td></tr>
      </tbody>
    </table>

    <h5>Application Integration Example (Python)</h5>
    <pre><code>
from google.cloud import secretmanager

client = secretmanager.SecretManagerServiceClient()
name = f"projects/my-project/secrets/db-password/versions/latest"
response = client.access_secret_version(request={"name": name})
db_password = response.payload.data.decode("UTF-8")
</code></pre>

    <h5>Rotation Automation</h5>
    <ol>
      <li>Create a Cloud Function that generates a new secret</li>
      <li>Schedule it with Cloud Scheduler (e.g., every 30 days)</li>
      <li>Function adds new version to Secret Manager</li>
      <li>Optionally, triggers dependent services to reload secrets</li>
      <li>Disable or destroy old versions after verification</li>
    </ol>

    <div class="info-box">
      <div class="info-title">💡 Secret Manager vs. KMS vs. Environment Variables</div>
      <table>
        <thead>
          <tr><th>Criteria</th><th>Secret Manager</th><th>KMS</th><th>Env Variables</th></tr>
        </thead>
        <tbody>
          <tr><td>Encryption</td><td>✅ AES-256</td><td>✅ AES-256</td><td>❌ Plain text in process</td></tr>
          <tr><td>Versioning</td><td>✅ Built-in</td><td>✅ Key versions</td><td>❌ None</td></tr>
          <tr><td>Access Control</td><td>✅ IAM</td><td>✅ IAM + Key Policy</td><td>❌ OS-level only</td></tr>
          <tr><td>Audit Logging</td><td>✅ Cloud Audit Logs</td><td>✅ Cloud Audit Logs</td><td>❌ No</td></tr>
          <tr><td>Auto-Rotation</td><td>✅ Via scheduler</td><td>✅ Automatic</td><td>❌ Manual</td></tr>
          <tr><td>Cost</td><td>$0.40/secret/month</td><td>$0.03/key/month</td><td>Free</td></tr>
        </tbody>
      </table>
    </div>
  `,v1c51:`
    <h3>GCP Security Scanner</h3>
    <p>
      Web Security Scanner is a <strong>managed vulnerability scanning service</strong> that crawls your web applications running on GCP (App Engine, Compute Engine, GKE) to identify security vulnerabilities like XSS, SQL injection, and more.
    </p>

    <h4>How It Works</h4>
    <ol>
      <li>You provide a <strong>starting URL</strong> (e.g., your App Engine app's login page)</li>
      <li>The scanner <strong>crawls</strong> your application, discovering pages and forms</li>
      <li>It <strong>executes attacks</strong> (fuzzing, injection attempts, XSS payloads) against discovered endpoints</li>
      <li><strong>Findings</strong> are reported with severity levels and remediation guidance</li>
    </ol>

    <div class="info-box">
      <div class="info-title">💡 Scanner Limitations</div>
      <p>While useful, Web Security Scanner is not a replacement for comprehensive penetration testing:</p>
      <ul>
        <li>Only scans GCP-hosted applications</li>
        <li>Crawl-based — cannot test authenticated pages deeply without configuration</li>
        <li>Does not test business logic vulnerabilities</li>
        <li>May produce false positives that need manual investigation</li>
        <li>Limited to common web vulnerabilities</li>
      </ul>
      <p>For comprehensive testing, combine with <strong>Burp Suite</strong>, <strong>OWASP ZAP</strong>, or professional pentests.</p>
    </div>

    <h4>Scanner Integration with SCC</h4>
    <p>Scanner findings are automatically integrated with <strong>Security Command Center</strong>:</p>
    <ul>
      <li>All findings appear in SCC dashboard</li>
      <li>Can be filtered by severity, resource, and scan configuration</li>
      <li>Integrates with Pub/Sub for real-time notifications</li>
    </ul>

    <h5>Recommended Scan Frequency</h5>
    <table>
      <thead>
        <tr><th>Application Type</th><th>Recommended Frequency</th></tr>
      </thead>
      <tbody>
        <tr><td>Public-facing production</td><td>Weekly or after each deployment</td></tr>
        <tr><td>Internal applications</td><td>Monthly</td></tr>
        <tr><td>Pre-production/staging</td><td>After major changes</td></tr>
      </tbody>
    </table>
  `,v1c52:`
    <h3>GCP Artifact Registry Security</h3>
    <p>
      Artifact Registry is GCP's <strong>container image and package management</strong> service. It stores Docker images, Helm charts, npm packages, Python packages, and more. Securing your artifact registry is critical for <strong>supply chain security</strong>.
    </p>

    <h4>Artifact Registry Security Controls</h4>
    <table>
      <thead>
        <tr><th>Control</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>VPC-SC Perimeter</td><td>Restrict registry access to authorized networks only</td></tr>
        <tr><td>IAM Permissions</td><td>Granular roles: roles/artifactregistry.reader, roles/artifactregistry.writer, roles/artifactregistry.admin</td></tr>
        <tr><td>Image Vulnerability Scanning</td><td>Automatic scanning on push (uses Container Analysis + On-Demand Scanning API)</td></tr>
        <tr><td>Image Signing</td><td>Verify image integrity and provenance using Binary Authorization attestations</td></tr>
        <tr><td>Retention Policies</td><td>Automatically delete old or untagged images to reduce attack surface</li>
        <tr><td>Encryption</td><td>Google-managed or customer-managed encryption keys (CMEK)</td></tr>
        <tr><td>Audit Logging</td><td>All push/pull operations logged in Cloud Audit Logs</td></tr>
      </tbody>
    </table>

    <h4>Container Image Vulnerability Scanning</h4>
    <p>GCP provides two scanning mechanisms:</p>
    <table>
      <thead>
        <tr><th>Type</th><th>Trigger</th><th>Coverage</th></tr>
      </thead>
      <tbody>
        <tr><td>Automatic On-Push</td><td>Triggered when image is pushed to Artifact Registry</td><td>CVE vulnerabilities in OS packages</td></tr>
        <tr><td>On-Demand Scanning API</strong></td><td>Programmatic or CI/CD integration</td><td>CVE + OS packages + language-specific packages</td></tr>
      </tbody>
    </table>

    <div class="warning-box">
      <div class="warning-title">⚠️ Container Supply Chain Risks</div>
      <p>According to the Sysdig 2024 Cloud Native Security Report: <strong>73% of images scanned had high or critical vulnerabilities</strong>. Common risks:</p>
      <ul>
        <li>Using <strong>latest</strong> tag (unpredictable builds)</li>
        <li>Images with <strong>embedded secrets</strong> or hardcoded credentials</li>
        <li><strong>Outdated base images</strong> running unsupported OS versions</li>
        <li>Images from <strong>unverified sources</strong> (not using Binary Authorization)</li>
      </ul>
    </div>

    <h5>Best Practices</h5>
    <ol>
      <li>Enable <strong>automatic vulnerability scanning</strong> on all repositories</li>
      <li>Use <strong>Binary Authorization</strong> to enforce only scanned, signed images deploy</li>
      <li>Configure <strong>retention policies</strong> to remove old and untagged images</li>
      <li>Use <strong>immutable tags</strong> — never overwrite :latest or :v1 tags</li>
      <li>Pin images to <strong>SHA256 digests</strong> instead of tags for maximum integrity</li>
      <li>Scan base images with tools like <strong>Trivy</strong>, <strong>Grype</strong>, or <strong>Snyk</strong></li>
      <li>Implement a <strong>Software Supply Chain Security</strong> policy (SLSA framework)</li>
    </ol>
  `,v1c53:`
    <h3>GCP Security Best Practices</h3>
    <p>
      This chapter summarizes the comprehensive best practices for securing your Google Cloud environment. It ties together everything covered in this Cloud Security Veda's GCP section into a <strong>master reference</strong>.
    </p>

    <h4>The 10 Pillars of GCP Security</h4>
    <table>
      <thead>
        <tr>
          <th>Pillar</th>
          <th>Practices</th>
          <th>Priority</th>
          <th>GCP Service</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>1. Identity &amp; Access</strong></td>
          <td>Least privilege, Org Policies, IAM Recommender, disable default SA</td>
          <td style="color:#E11D48;font-weight:700;">CRITICAL</td>
          <td>IAM, Org Policies</td>
        </tr>
        <tr>
          <td><strong>2. Network Security</strong></td>
          <td>VPC-SC, firewall rules, private connectivity, DNS security</td>
          <td style="color:#E11D48;font-weight:700;">CRITICAL</td>
          <td>VPC-SC, VPC Firewall, Cloud NAT</td>
        </tr>
        <tr>
          <td><strong>3. Data Protection</strong></td>
          <td>CMEK encryption, Secret Manager, bucket policies, DLP</td>
          <td style="color:#E11D48;font-weight:700;">CRITICAL</td>
          <td>KMS, Secret Manager, DLP API</td>
        </tr>
        <tr>
          <td><strong>4. Compute Security</strong></td>
          <td>Shielded VMs, Confidential VMs, IAP, no external IPs</td>
          <td style="color:#FF6B35;font-weight:700;">HIGH</td>
          <td>Compute Engine, IAP, Confidential Computing</td>
        </tr>
        <tr>
          <td><strong>5. Logging &amp; Monitoring</strong></td>
          <td>Audit Logs, SCC, Chronicle, alert policies</td>
          <td style="color:#FF6B35;font-weight:700;">HIGH</td>
          <td>Cloud Logging, SCC, Chronicle SIEM</td>
        </tr>
        <tr>
          <td><strong>6. Container &amp; Serverless Security</strong></td>
          <td>Binary Auth, vulnerability scanning, Workload Identity, Pod Security</td>
          <td style="color:#FF6B35;font-weight:700;">HIGH</td>
          <td>Binauthz, GKE, Artifact Registry</td>
        </tr>
        <tr>
          <td><strong>7. Threat Detection</strong></td>
          <td>Event Threat Detection, SCC findings, SIEM correlation</td>
          <td style="color:#FFD700;font-weight:700;">MEDIUM-HIGH</td>
          <td>SCC Premium, Chronicle SIEM</td>
        </tr>
        <tr>
          <td><strong>8. Governance &amp; Compliance</strong></td>
          <td>Org Policies, SCC compliance dashboards, Forseti</td>
          <td style="color:#FFD700;font-weight:700;">MEDIUM-HIGH</td>
          <td>Org Policies, SCC, Forseti</li></td>
        </tr>
        <tr>
          <td><strong>9. Backup &amp; Recovery</strong></td>
          <td>Cloud Storage versioning, snapshots, DR planning</td>
          <td style="color:#22C55E;font-weight:700;">MEDIUM</td>
          <td>Cloud Storage, BigQuery, Backup for GKE</td>
        </tr>
        <tr>
          <td><strong>10. Cost &amp; Resource Governance</strong></td>
          <td>Labels, budgets, recommender, resource deletion policies</td>
          <td style="color:#22C55E;font-weight:700;">MEDIUM</td>
          <td>Recommender, Billing, Org Policies</td>
        </tr>
      </tbody>
    </table>

    <h4>Quick Reference: GCP Security Checklist</h4>
    <div class="success-box">
      <div class="success-title">✓ GCP Security Checklist</div>
      <ol>
        <li>Enable <strong>Cloud Audit Logs</strong> (all types) organization-wide</li>
        <li>Use <strong>Workload Identity</strong> instead of service account keys</li>
        <li>If keys are necessary, use <strong>short-lived keys</strong> and rotate regularly</li>
        <li>Enable <strong>VPC-SC</strong> perimeters around sensitive projects</li>
        <li>Remove <strong>external IPs</strong> from VMs — use IAP and Cloud NAT</li>
        <li>Enable <strong>Shielded VMs</strong> on all production instances</li>
        <li>Use <strong>customer-managed encryption keys</strong> (CMEK) for sensitive data</li>
        <li>Store secrets in <strong>Secret Manager</strong>, not environment variables</li>
        <li>Enable <strong>Container Analysis vulnerability scanning</strong> on all repositories</li>
        <li>Use <strong>Binary Authorization</strong> for container deploy-time enforcement</li>
        <li>Set <strong>Organization Policy Constraints</strong> (allowed regions, VM types, public IP access)</li>
        <li>Enable <strong>Security Command Center Premium</strong> for Event Threat Detection</li>
        <li>Use <strong>OS Login</strong> for SSH key management</li>
        <li>Enable <strong>Confidential Computing</strong> for highly sensitive workloads</li>
        <li>Review <strong>IAM Recommender</strong> suggestions quarterly</li>
        <li>Tag all resources with <strong>Labels</strong> for cost tracking and policy enforcement</li>
      </ol>
    </div>

    <div class="callout">
      <div class="callout-icon">🎓</div>
      <div class="callout-content">
        <h4>Cloud Security Veda 1 Complete!</h4>
        <p>You've now covered comprehensive cloud security across all three major platforms:</p>
        <ul>
          <li>✅ Cloud computing fundamentals and service models</li>
          <li>✅ Shared responsibility model</li>
          <li>✅ Cloud attack surface analysis</li>
          <li>✅ Zero Trust architecture</li>
          <li>✅ AWS security (IAM, VPC, S3, EC2, Lambda, CloudTrail, GuardDuty, WAF, Security Hub, Config)</li>
          <li>✅ Azure security (Entra ID, RBAC, Key Vault, NSG, Defender, Sentinel, Policy, Blueprints)</li>
          <li>✅ GCP security (IAM hierarchy, Resource hierarchy, VPC-SC, Binary Auth, KMS, Secret Manager)</li>
          <li>✅ Governance, compliance, and best practices</li>
        </ul>
        <p>Ready to continue your journey? The next Vedas await:
        <strong>Compliance (Veda 2)</strong>, <strong>AppSec (Veda 3)</strong>, <strong>DevSecOps (Veda 4)</strong>,
        <strong>Kubernetes &amp; Containers (Veda 5)</strong>, and <strong>Network Security (Veda 6)</strong>.</p>
      </div>
    </div>
  `},Bg={v2c1:`
    <h3>Introduction to Security Compliance</h3>
    <p>
      Security compliance is the practice of ensuring that an organization meets <strong>regulatory, legal, and contractual requirements</strong> related to information security. It goes beyond just implementing security controls — it requires <strong>documented evidence</strong> that those controls are in place and effective.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Compliance vs. Security</div>
      <p><strong>Security</strong> is the practice of protecting information assets from threats. <strong>Compliance</strong> is the process of demonstrating that you meet specific security standards and regulations. You can be <em>secure but not compliant</em> (you protect data but don't follow required frameworks) or <em>compliant but not secure</em> (you check boxes but still have vulnerabilities).</p>
    </div>

    <h4>Why Compliance Matters</h4>
    <ul>
      <li><strong>Legal Requirement:</strong> Non-compliance can result in fines, lawsuits, and criminal charges</li>
      <li><strong>Customer Trust:</strong> Compliance certifications demonstrate commitment to data protection</li>
      <li><strong>Risk Reduction:</strong> Compliance frameworks identify and mitigate security risks systematically</li>
      <li><strong>Competitive Advantage:</strong> Many enterprise contracts require specific compliance certifications</li>
      <li><strong>Operational Improvement:</strong> Frameworks provide structured approaches to security</li>
    </ul>

    <h4>The Compliance Lifecycle</h4>
    <ol>
      <li><strong>Identify:</strong> Determine which regulations and standards apply to your organization</li>
      <li><strong>Assess:</strong> Evaluate current security posture against requirements</li>
      <li><strong>Implement:</strong> Deploy controls, policies, and procedures</li>
      <li><strong>Monitor:</strong> Continuously track compliance status and security posture</li>
      <li><strong>Report:</strong> Document evidence and generate compliance reports</li>
      <li><strong>Remediate:</strong> Address gaps and violations</li>
      <li><strong>Audit:</strong> Undergo formal review by internal or external auditors</li>
    </ol>

    <h4>Key Compliance Terms</h4>
    <table>
      <thead>
        <tr><th>Term</th><th>Definition</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Control</strong></td><td>A safeguard or countermeasure designed to reduce risk</td></tr>
        <tr><td><strong>Policy</strong></td><td>A high-level statement of security intent and direction</td></tr>
        <tr><td><strong>Procedure</strong></td><td>A detailed, step-by-step implementation of a control</td></tr>
        <tr><td><strong>Standard</strong></td><td>A specific, measurable requirement or specification</td></tr>
        <tr><td><strong>Guideline</strong></td><td>A recommended practice that allows flexibility in implementation</td></tr>
        <tr><td><strong>Audit</strong></td><td>A systematic examination of compliance evidence</td></tr>
        <tr><td><strong>Finding</strong></td><td>A gap or deficiency identified during an audit</td></tr>
        <tr><td><strong>Remediation</strong></td><td>The process of correcting identified deficiencies</td></tr>
      </tbody>
    </table>
  `,v2c2:`
    <h3>Compliance Frameworks Overview</h3>
    <p>
      A compliance framework is a <strong>structured set of guidelines, standards, and best practices</strong> that organizations follow to ensure they meet regulatory and security requirements. Different frameworks serve different purposes and industries.
    </p>

    <h4>Major Compliance Frameworks</h4>
    <table>
      <thead>
        <tr><th>Framework</th><th>Focus Area</th><th>Industry</th><th>Geography</th><th>Mandatory?</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>ISO 27001</strong></td><td>Information Security Management</td><td>All industries</td><td>International</td><td>Voluntary (but widely expected)</td></tr>
        <tr><td><strong>SOC 2</strong></td><td>Service Organization Controls</td><td>SaaS / Technology</td><td>North America</td><td>Often required by customers</td></tr>
        <tr><td><strong>GDPR</strong></td><td>Data Privacy</td><td>All (with EU data subjects)</td><td>European Union</td><td>Mandatory</td></tr>
        <tr><td><strong>HIPAA</strong></td><td>Health Information Protection</td><td>Healthcare</td><td>United States</td><td>Mandatory</td></tr>
        <tr><td><strong>PCI DSS</strong></td><td>Payment Card Security</td><td>Financial / Retail</td><td>Global</td><td>Mandatory for card processors</td></tr>
        <tr><td><strong>CIS Controls</strong></td><td>Cybersecurity Best Practices</td><td>All industries</td><td>Global</td><td>Voluntary</td></tr>
        <tr><td><strong>NIST CSF</strong></td><td>Cybersecurity Risk Management</td><td>Critical infrastructure</td><td>United States</td><td>Voluntary (mandatory for federal)</td></tr>
        <tr><td><strong>CMMC</strong></td><td>Defense Industrial Base Security</td><td>Defense contractors</td><td>United States</td><td>Mandatory for DoD contractors</td></tr>
        <tr><td><strong>CCPA/CPRA</strong></td><td>Consumer Privacy</td><td>All businesses with CA consumers</td><td>California</td><td>Mandatory</td></tr>
        <tr><td><strong>HITRUST</strong></td><td>Healthcare Risk Management</td><td>Healthcare</td><td>United States</td><td>Often required</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 Choosing the Right Framework</div>
      <p>Organizations often need to comply with <strong>multiple frameworks simultaneously</strong>. A well-designed compliance program maps controls across frameworks to avoid duplication. For example, ISO 27001 Annex A controls can satisfy many GDPR and PCI DSS requirements.</p>
    </div>

    <h4>Compliance Overlap Matrix</h4>
    <table>
      <thead>
        <tr><th>Control Domain</th><th>ISO 27001</th><th>SOC 2</th><th>GDPR</th><th>PCI DSS</th><th>HIPAA</th></tr>
      </thead>
      <tbody>
        <tr><td>Access Control</td><td>✅ A.9</td><td>✅ CC6.1</td><td>✅ Art. 32</td><td>✅ Req 7</td><td>✅ 164.312(a)</td></tr>
        <tr><td>Encryption</td><td>✅ A.10</td><td>✅ CC6.7</td><td>✅ Art. 32</td><td>✅ Req 4</td><td>✅ 164.312(a)(2)(iv)</td></tr>
        <tr><td>Logging & Monitoring</td><td>✅ A.12</td><td>✅ CC7.2</td><td>✅ Art. 30</td><td>✅ Req 10</td><td>✅ 164.312(b)</td></tr>
        <tr><td>Incident Response</td><td>✅ A.16</td><td>✅ CC7.4</td><td>✅ Art. 33-34</td><td>✅ Req 12</td><td>✅ 164.308(a)(6)</td></tr>
        <tr><td>Risk Assessment</td><td>✅ 6.1</td><td>✅ CC3.2</td><td>✅ Art. 35</td><td>✅ Req 12</td><td>✅ 164.308(a)(1)</td></tr>
        <tr><td>Vendor Management</td><td>✅ A.15</td><td>✅ CC9.2</td><td>✅ Art. 28</td><td>✅ Req 12</td><td>✅ 164.308(b)(1)</td></tr>
      </tbody>
    </table>
  `,v2c3:`
    <h3>Compliance vs. Security</h3>
    <p>
      One of the most <strong>misunderstood concepts</strong> in cybersecurity is the relationship between compliance and security. They are related but <strong>not the same thing</strong>. Understanding this distinction is critical for building an effective security program.
    </p>

    <h4>The Fundamental Difference</h4>
    <table>
      <thead>
        <tr><th>Aspect</th><th>Security</th><th>Compliance</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Goal</strong></td><td>Protect assets from threats</td><td>Meet regulatory/contractual requirements</td></tr>
        <tr><td><strong>Driven By</strong></td><td>Risk management</td><td>Legal/regulatory obligations</td></tr>
        <tr><td><strong>Scope</strong></td><td>All potential threats</td><td>Specific mandated controls</td></tr>
        <tr><td><strong>Measurement</strong></td><td>Reduced incidents and vulnerabilities</td><td>Audit pass/fail rates</td></tr>
        <tr><td><strong>Timeline</strong></td><td>Continuous (always evolving)</td><td>Periodic (audits, reviews)</td></tr>
        <tr><td><strong>Flexibility</strong></td><td>Choose best-fit controls</td><td>Must follow prescribed requirements</td></tr>
      </tbody>
    </table>

    <div class="warning-box">
      <div class="warning-title">⚠️ The Compliance Trap</div>
      <p>Many organizations make the mistake of treating compliance as the <strong>end goal</strong> rather than a <strong>byproduct</strong> of good security. Being PCI DSS compliant does not mean you are secure — it means you meet the <em>minimum</em> PCI DSS requirements. The <strong>2013 Target breach</strong> occurred while Target was PCI DSS compliant. Attackers exploited vulnerabilities that compliance checklists didn't cover.</p>
    </div>

    <h4>The Venn Diagram of Compliance and Security</h4>
    <ul>
      <li><strong>Compliance-only zone:</strong> Controls that satisfy auditors but don't meaningfully reduce risk (e.g., password rotation policies that lead to weaker passwords)</li>
      <li><strong>Security-only zone:</strong> Controls that reduce risk but aren't mandated (e.g., threat hunting, deception technology)</li>
      <li><strong>Overlap zone:</strong> Controls that both protect the organization AND satisfy compliance requirements (e.g., encryption, access controls, logging)</li>
    </ul>

    <h4>How to Build a Program That Does Both</h4>
    <ol>
      <li><strong>Start with risk:</strong> Identify your most critical assets and threats, then implement controls</li>
      <li><strong>Map to frameworks:</strong> Align your security controls with compliance requirements to maximize overlap</li>
      <li><strong>Go beyond compliance:</strong> Implement security controls for risks that frameworks don't address</li>
      <li><strong>Automate evidence collection:</strong> Use compliance automation tools to reduce audit burden</li>
      <li><strong>Continuous improvement:</strong> Treat compliance as a continuous process, not an annual event</li>
    </ol>
  `,v2c4:`
    <h3>Compliance Assessment Process</h3>
    <p>
      A compliance assessment is a <strong>systematic evaluation</strong> of an organization's adherence to regulatory requirements, industry standards, and internal policies. It identifies gaps, weaknesses, and areas for improvement.
    </p>

    <h4>Types of Compliance Assessments</h4>
    <table>
      <thead>
        <tr><th>Type</th><th>Description</th><th>Performed By</th><th>Frequency</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Self-Assessment</strong></td><td>Internal evaluation using checklists</td><td>Internal teams</td><td>Quarterly/Annually</td></tr>
        <tr><td><strong>Internal Audit</strong></td><td>Formal review by internal audit team</td><td>Internal audit department</td><td>Annually</td></tr>
        <tr><td><strong>External Audit</strong></td><td>Independent third-party evaluation</td><td>Certified auditors</td><td>Annually</td></tr>
        <tr><td><strong>Penetration Test</strong></td><td>Technical security testing</td><td>Red team / external testers</td><td>Annually / After changes</td></tr>
        <tr><td><strong>Continuous Monitoring</strong></td><td>Automated compliance tracking</td><td>Compliance tools</td><td>Real-time</td></tr>
      </tbody>
    </table>

    <h4>Step-by-Step Assessment Process</h4>
    <ol>
      <li>
        <strong>Define Scope</strong>
        <ul>
          <li>Identify which frameworks, systems, and processes are in scope</li>
          <li>Define organizational boundaries (which locations, departments, cloud environments)</li>
          <li>Determine the assessment period</li>
        </ul>
      </li>
      <li>
        <strong>Gather Documentation</strong>
        <ul>
          <li>Security policies and procedures</li>
          <li>Architecture diagrams and network maps</li>
          <li>Previous audit reports and findings</li>
          <li>Risk assessments and treatment plans</li>
        </ul>
      </li>
      <li>
        <strong>Control Mapping</strong>
        <p>Map existing controls to framework requirements. Use a control matrix:</p>
        <pre><code>
| Framework Requirement | Existing Control | Gap? | Owner | Status |
|-----------------------|------------------|------|-------|--------|
| Access Management     | IAM Policies     | No   | IT    | Pass  |
| Encryption at Rest    | KMS/TDE          | No   | Sec   | Pass  |
| Incident Response     | IR Plan v2.1     | Yes  | CISO  | Fail  |
        </code></pre>
      </li>
      <li>
        <strong>Evidence Collection</strong>
        <ul>
          <li>Screenshots of configurations</li>
          <li>System logs and audit trails</li>
          <li>Policy documents</li>
          <li>Interview notes with stakeholders</li>
          <li>Automated scan results</li>
        </ul>
      </li>
      <li>
        <strong>Gap Analysis</strong>
        <p>Document all identified gaps with severity ratings:</p>
        <table>
          <thead>
            <tr><th>Severity</th><th>Criteria</th><th>Remediation Timeline</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Critical</strong></td><td>Direct regulatory violation / data exposure risk</td><td>30 days</td></tr>
            <tr><td><strong>High</strong></td><td>Missing major control / audit finding likely</td><td>60 days</td></tr>
            <tr><td><strong>Medium</strong></td><td>Control exists but needs improvement</td><td>90 days</td></tr>
            <tr><td><strong>Low</strong></td><td>Best practice recommendation</td><td>Next cycle</td></tr>
          </tbody>
        </table>
      </li>
      <li>
        <strong>Remediation Planning</strong>
        <p>For each gap, create a remediation plan with:</p>
        <ul>
          <li>Specific action items</li>
          <li>Responsible parties</li>
          <li>Deadlines</li>
          <li>Resource requirements</li>
          <li>Success criteria</li>
        </ul>
      </li>
      <li>
        <strong>Report Generation</strong>
        <p>Compile findings into a formal compliance report including executive summary, methodology, findings, and recommendations.</p>
      </li>
    </ol>
  `,v2c5:`
    <h3>Compliance Continuous Monitoring</h3>
    <p>
      Continuous compliance monitoring (CCM) replaces the traditional <strong>"point-in-time" audit</strong> model with <strong>real-time, automated compliance tracking</strong>. Instead of discovering compliance gaps during annual audits, organizations detect drift as it happens.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Continuous Compliance</div>
      <p>Continuous compliance means that compliance status is monitored <strong>24/7/365</strong>, not just during audit season. This enables organizations to maintain a <strong>constant compliance posture</strong> rather than scrambling before audits.</p>
    </div>

    <h4>Benefits of Continuous Monitoring</h4>
    <ul>
      <li><strong>Real-time visibility:</strong> Know your compliance status at any moment</li>
      <li><strong>Reduced audit burden:</strong> Auditors can rely on continuous evidence</li>
      <li><strong>Faster remediation:</strong> Drift detected in hours, not months</li>
      <li><strong>Cost reduction:</strong> Less manual effort preparing for audits</li>
      <li><strong>Risk reduction:</strong> Vulnerabilities addressed before exploitation</li>
    </ul>

    <h4>Continuous Monitoring Architecture</h4>
    <pre><code>
┌─────────────────────────────────────────────┐
│              CLOUD ENVIRONMENT              │
│  ┌─────────┐ ┌──────────┐ ┌──────────────┐  │
│  │Servers  │ │Databases │ │Network Devices│  │
│  └────┬────┘ └────┬─────┘ └──────┬───────┘  │
└───────┼──────────┼──────────────┼───────────┘
        │          │              │
        ▼          ▼              ▼
┌─────────────────────────────────────────────┐
│          DATA COLLECTION LAYER              │
│  ┌────────┐ ┌─────────┐ ┌──────────────┐   │
│  │Agents  │ │APIs     │ │Log Collectors│   │
│  └────┬───┘ └────┬────┘ └──────┬───────┘   │
└───────┼──────────┼──────────────┼───────────┘
        │          │              │
        ▼          ▼              ▼
┌─────────────────────────────────────────────┐
│          ANALYSIS & CORRELATION             │
│  ┌────────────────────────────────────┐     │
│  │  Configuration Management Database  │     │
│  │  + Policy Engine + Risk Scoring     │     │
│  └────────────────────────────────────┘     │
└──────────────────────┬──────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────┐
│        REPORTING & ALERTING                  │
│  ┌─────────┐ ┌──────────┐ ┌──────────────┐  │
│  │Dashboards│ │Alerts    │ │Audit Reports │  │
│  └─────────┘ └──────────┘ └──────────────┘  │
└─────────────────────────────────────────────┘
</code></pre>

    <h4>Key Metrics to Monitor</h4>
    <table>
      <thead>
        <tr><th>Metric</th><th>Description</th><th>Target</th></tr>
      </thead>
      <tbody>
        <tr><td>Compliance Score</td><td>Percentage of controls passing</td><td>≥ 95%</td></tr>
        <tr><td>Mean Time to Remediate (MTTR)</td><td>Average time to fix compliance gaps</td><td>< 7 days for critical</td></tr>
        <tr><td>Control Coverage</td><td>Percentage of controls with automated monitoring</td><td>≥ 80%</td></tr>
        <tr><td>Alert Response Time</td><td>Time from alert to triage</td><td>< 4 hours</td></tr>
        <tr><td>Configuration Drift</td><td>Number of configurations deviating from baseline</td><td>0</td></tr>
      </tbody>
    </table>

    <h4>Popular Compliance Monitoring Tools</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>Type</th><th>Best For</th></tr>
      </thead>
      <tbody>
        <tr><td>AWS Config</td><td>Cloud-native</td><td>AWS compliance rules</td></tr>
        <tr><td>Azure Policy</td><td>Cloud-native</td><td>Azure governance</td></tr>
        <tr><td>Chef InSpec</td><td>Infrastructure as Code</td><td>Multi-cloud compliance</td></tr>
        <tr><td>OpenSCAP</td><td>Open source</td><td>SCAP-based compliance</td></tr>
        <tr><td>Prisma Cloud</td><td>CSPM</td><td>Multi-cloud security posture</td></tr>
        <tr><td>Drata / Vanta</td><td>GRC platform</td><td>SOC 2 / ISO automation</td></tr>
        <tr><td>Splunk</td><td>SIEM</td><td>Log-based compliance monitoring</td></tr>
      </tbody>
    </table>
  `,v2c6:`
    <h3>CIS Controls Overview</h3>
    <p>
      The <strong>Center for Internet Security (CIS) Critical Security Controls</strong> are a prioritized set of <strong>18 actionable security controls</strong> designed to defend against the most pervasive cyber attacks. Originally developed in response to real-world attacks against government and defense systems, they provide a <strong>battle-tested framework</strong> for organizations of all sizes.
    </p>

    <h4>The 18 CIS Controls (v8)</h4>
    <table>
      <thead>
        <tr><th>#</th><th>Control</th><th>Safeguard Count</th><th>Priority</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Inventory and Control of Enterprise Assets</td><td>9</td><td style="color:#E11D48;font-weight:700;">HIGH</td></tr>
        <tr><td>2</td><td>Inventory and Control of Software Assets</td><td>9</td><td style="color:#E11D48;font-weight:700;">HIGH</td></tr>
        <tr><td>3</td><td>Data Protection</td><td>13</td><td style="color:#E11D48;font-weight:700;">HIGH</td></tr>
        <tr><td>4</td><td>Secure Configuration of Enterprise Assets and Software</td><td>11</td><td style="color:#FF6B35;font-weight:700;">HIGH</td></tr>
        <tr><td>5</td><td>Account Management</td><td>9</td><td style="color:#FF6B35;font-weight:700;">HIGH</td></tr>
        <tr><td>6</td><td>Access Control Management</td><td>8</td><td style="color:#FF6B35;font-weight:700;">HIGH</td></tr>
        <tr><td>7</td><td>Continuous Vulnerability Management</td><td>9</td><td style="color:#FF6B35;font-weight:700;">HIGH</td></tr>
        <tr><td>8</td><td>Audit Log Management</td><td>9</td><td style="color:#F59E0B;font-weight:700;">MEDIUM</td></tr>
        <tr><td>9</td><td>Email and Web Browser Protections</td><td>15</td><td style="color:#F59E0B;font-weight:700;">MEDIUM</td></tr>
        <tr><td>10</td><td>Malware Defenses</td><td>8</td><td style="color:#F59E0B;font-weight:700;">MEDIUM</td></tr>
        <tr><td>11</td><td>Data Recovery</td><td>9</td><td style="color:#10B981;font-weight:700;">MEDIUM</td></tr>
        <tr><td>12</td><td>Network Infrastructure Management</td><td>10</td><td style="color:#10B981;font-weight:700;">MEDIUM</td></tr>
        <tr><td>13</td><td>Security Awareness and Skills Training</td><td>5</td><td style="color:#10B981;font-weight:700;">MEDIUM</td></tr>
        <tr><td>14</td><td>Service Provider Management</td><td>9</td><td style="color:#06B6D4;font-weight:700;">MEDIUM</td></tr>
        <tr><td>15</td><td>Application Software Security</td><td>9</td><td style="color:#06B6D4;font-weight:700;">MEDIUM</td></tr>
        <tr><td>16</td><td>Incident Response Management</td><td>10</td><td style="color:#06B6D4;font-weight:700;">MEDIUM</td></tr>
        <tr><td>17</td><td>Penetration Testing</td><td>6</td><td style="color:#8B5CF6;font-weight:700;">LOW</td></tr>
        <tr><td>18</td><td>Cardinality of Network Operations</td><td>6</td><td style="color:#8B5CF6;font-weight:700;">LOW</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 Implementation Groups (IG)</div>
      <p>CIS divides controls into three implementation groups based on organizational maturity and risk:</p>
      <ul>
        <li><strong>IG1 (Essential Cyber Hygiene):</strong> Controls 1, 2, 3, 4, 5, 6, 8, 11 — minimum security for all organizations</li>
        <li><strong>IG2 (Expanded):</strong> IG1 + Controls 7, 9, 10, 12, 14, 15, 16 — for organizations with moderate complexity</li>
        <li><strong>IG3 (Comprehensive):</strong> All 18 controls — for organizations with significant risk profiles</li>
      </ul>
    </div>
  `,v2c7:`
    <h3>Inventory of Enterprise Assets</h3>
    <p>
      You cannot secure what you do not know exists. <strong>Asset inventory</strong> is the foundational control upon which all other security measures depend. CIS Control #1 requires maintaining an accurate, complete inventory of all hardware, software, and data assets.
    </p>

    <h4>What to Inventory</h4>
    <table>
      <thead>
        <tr><th>Asset Type</th><th>Examples</th><th>Priority</th><th>Auto-Discoverable?</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Endpoints</strong></td><td>Laptops, desktops, mobile devices</td><td>Critical</td><td>✅ Yes (MDM agents)</td></tr>
        <tr><td><strong>Servers</strong></td><td>Physical servers, VMs, cloud instances</td><td>Critical</td><td>✅ Yes (SCM tools)</td></tr>
        <tr><td><strong>Network Devices</strong></td><td>Routers, switches, firewalls, APs</td><td>High</td><td>✅ Yes (NMS)</td></tr>
        <tr><td><strong>Cloud Resources</strong></td><td>VPCs, storage buckets, databases</td><td>Critical</td><td>✅ Yes (CSPM)</td></tr>
        <tr><td><strong>IoT Devices</strong></td><td>Sensors, cameras, smart devices</td><td>Medium</td><td>❌ Difficult</td></tr>
        <tr><td><strong>Software</strong></td><td>Installed applications, licenses</td><td>High</td><td>✅ Yes (SAM tools)</td></tr>
        <tr><td><strong>Data Stores</strong></td><td>Databases, file shares, data lakes</td><td>Critical</td><td>⚠️ Partial</td></tr>
        <tr><td><strong>DNS Records</strong></td><td>Domains, subdomains, certificates</td><td>High</td><td>✅ Yes (external scanning)</td></tr>
      </tbody>
    </table>

    <h4>Asset Inventory Best Practices</h4>
    <ol>
      <li><strong>Automated Discovery:</strong> Use network scanning (Nmap), agent-based tools (CrowdStrike, Tanium), and cloud APIs (AWS Config, Azure Resource Graph) to discover assets automatically</li>
      <li><strong>Asset Classification:</strong> Tag assets by criticality (Tier 1-4), owner, data classification, and environment</li>
      <li><strong>Dynamic Inventory:</strong> Asset inventory must be <em>living</em> — updated in real-time as resources are provisioned and decommissioned</li>
      <li><strong>Shadow IT Detection:</strong> Monitor network traffic for unknown devices and unsanctioned cloud services</li>
      <li><strong>Integration with CMDB:</strong> Feed inventory data into a Configuration Management Database for centralized management</li>
    </ol>

    <div class="warning-box">
      <div class="warning-title">⚠️ Shadow IT Risk</div>
      <p>Organizations typically have <strong>30-50% more assets</strong> than what appears in their official inventory. Shadow IT — unauthorized cloud services, personal devices, and undocumented systems — represents a massive attack surface. Tools like CASB (Cloud Access Security Brokers) and network traffic analysis can help discover shadow IT.</p>
    </div>

    <h4>Recommended Tools</h4>
    <ul>
      <li><strong>AWS:</strong> AWS Config, AWS Resource Groups Tagging API</li>
      <li><strong>Azure:</strong> Azure Resource Graph, Azure Policy</li>
      <li><strong>GCP:</strong> Cloud Asset Inventory</li>
      <li><strong>Multi-cloud:</strong> Prisma Cloud, Wiz, Orca Security</li>
      <li><strong>Endpoint:</strong> CrowdStrike Falcon, Tanium, Microsoft Defender for Endpoint</li>
    </ul>
  `,v2c8:`
    <h3>Inventory of Software</h3>
    <p>
      Every piece of software running in your environment is a <strong>potential attack vector</strong>. CIS Control #2 mandates maintaining a complete inventory of all software — operating systems, applications, libraries, and services — to ensure only <strong>authorized and managed software</strong> is running.
    </p>

    <h4>The Software Inventory Challenge</h4>
    <p>Modern environments face unique software inventory challenges:</p>
    <ul>
      <li><strong>Containers:</strong> Ephemeral images spinning up and down</li>
      <li><strong>SaaS Applications:</strong>Shadow IT tools employees sign up for without IT approval</li>
      <li><strong>Open Source Libraries:</strong> Transitive dependencies you didn't even know you installed</li>
      <li><strong>Serverless Functions:</strong> Code running without persistent infrastructure</li>
    </ul>

    <h4>Software Inventory Categories</h4>
    <table>
      <thead>
        <tr><th>Category</th><th>Examples</th><th>Management Approach</th></tr>
      </thead>
      <tbody>
        <tr><td>Operating Systems</td><td>Windows, Linux, macOS</td><td>Patch management, CIS benchmarks</td></tr>
        <tr><td>Enterprise Applications</td><td>Office 365, SAP, Salesforce</td><td>Vendor management, configuration hardening</td></tr>
        <tr><td>Custom Applications</td><td>Internal web apps, APIs</td><td>SDLC security, dependency scanning</td></tr>
        <tr><td>Open Source Components</td><td>npm, pip, NuGet packages</td><td>SCA tools, SBOMs</td></tr>
        <tr><td>Browser Extensions</td><td>Chrome/Firefox add-ons</td><td>Browser management policies</td></tr>
        <tr><td>Plugins & Add-ins</td><td>Office add-ins, WordPress plugins</td><td>Approval workflows, regular review</td></tr>
      </tbody>
    </table>

    <h4>Application Whitelisting vs. Blacklisting</h4>
    <div class="callout">
      <div class="callout-icon">🛡️</div>
      <div class="callout-content">
        <h4>Application Control Strategy</h4>
        <ul>
          <li><strong>Whitelisting (recommended):</strong> Only explicitly approved software can execute. Most secure but requires ongoing maintenance</li>
          <li><strong>Blacklisting:</strong> Only known-malicious software is blocked. Easier to implement but ineffective against new threats</li>
          <li><strong>Greylisting:</strong> Unknown applications are quarantined until reviewed. Good balance of security and usability</li>
        </ul>
        <p>Tools: Windows Defender Application Control (WDAC), AppLocker, Carbon Black, CrowdStrike Falcon Firewall</p>
      </div>
    </div>

    <h4>SBOM — Software Bill of Materials</h4>
    <div class="key-box">
      <div class="key-title">🔑 Key Concept: SBOM</div>
      <p>An <strong>SBOM</strong> is a formal, machine-readable inventory of all components, libraries, and dependencies in a software application. Analogous to a parts list for manufactured goods. SBOMs are now <strong>mandatory for US federal software</strong> (Executive Order 14028).</p>
    </div>
    <ul>
      <li><strong>SPDX</strong> and <strong>CycloneDX</strong> are the two leading SBOM formats</li>
      <li>Generate SBOMs during CI/CD using tools like <strong>Syft</strong>, <strong>Trivy</strong>, <strong>CycloneDX</strong></li>
      <li>Cross-reference SBOMs against vulnerability databases to identify affected components</li>
    </ul>
  `,v2c9:`
    <h3>Data Protection</h3>
    <p>
      <strong>Data protection</strong> encompasses the policies, procedures, and technical controls that ensure data is <strong>collected, stored, processed, and disposed of securely</strong>. CIS Control #3 focuses on protecting data both at rest and in transit.
    </p>

    <h4>Data Classification</h4>
    <p>Before protecting data, you must <strong>classify</strong> it. Different data requires different levels of protection:</p>
    <table>
      <thead>
        <tr><th>Classification</th><th>Description</th><th>Examples</th><th>Handling</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Public</strong></td><td>No impact if disclosed</td><td>Marketing materials, public docs</td><td>No special controls</td></tr>
        <tr><td><strong>Internal</strong></td><td>Limited impact if disclosed</td><td>Internal memos, org charts</td><td>Access controls, DLP</td></tr>
        <tr><td><strong>Confidential</strong></td><td>Significant impact if disclosed</td><td>Financial data, PII, trade secrets</td><td>Encryption, strict access controls, DLP</td></tr>
        <tr><td><strong>Restricted</strong></td><td>Severe impact if disclosed</td><td>Encryption keys, classified data</td><td>Highest encryption, need-to-know access, HSMs</td></tr>
      </tbody>
    </table>

    <h4>Data Protection Controls</h4>
    <table>
      <thead>
        <tr><th>Control</th><th>Purpose</th><th>Implementation</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Encryption at Rest</strong></td><td>Protects stored data</td><td>AES-256, cloud-native encryption (AWS KMS, Azure Key Vault, GCP KMS)</td></tr>
        <tr><td><strong>Encryption in Transit</strong></td><td>Protects data in motion</td><td>TLS 1.2/1.3, certificate pinning, VPN/IPsec</td></tr>
        <tr><td><strong>Data Loss Prevention (DLP)</strong></td><td>Prevents unauthorized data exfiltration</td><td>Microsoft Purview, Google DLP, Symantec DLP, AWS Macie</td></tr>
        <tr><td><strong>Data Masking</strong></td><td>Obfuscates sensitive data in non-production</td><td>Tokenization, format-preserving encryption, synthetic data</td></tr>
        <tr><td><strong>Data Retention Policies</strong></td><td>Defines how long data is kept</td><td>Automated lifecycle policies, legal hold capabilities</td></tr>
        <tr><td><strong>Secure Disposal</strong></td><td>Ensures data is unrecoverable when deleted</td><td>NIST 800-88 guidelines, crypto-shredding</td></tr>
      </tbody>
    </table>

    <h4>Encryption Standards</h4>
    <pre><code>
# Recommended minimum encryption standards
Symmetric:  AES-256-GCM (or ChaCha20-Poly1305)
Asymmetric: RSA-2048+ or ECDSA P-256/384
Hashing:    SHA-256 minimum (SHA-384/SHA-512 preferred for passwords)
TLS:        TLS 1.2 minimum (TLS 1.3 recommended)
Key Exchange: ECDHE with PFS (Perfect Forward Secrecy)
</code></pre>

    <div class="warning-box">
      <div class="warning-title">⚠️ Cryptographic Agility</div>
      <p>Design systems for <strong>cryptographic agility</strong> — the ability to swap algorithms without major rearchitecture. Quantum computing threats mean today's RSA and ECC may become obsolete. NIST is already standardizing <strong>post-quantum cryptography (PQC)</strong> algorithms (CRYSTALS-Kyber, CRYSTALS-Dilithium).</p>
    </div>
  `,v2c10:`
    <h3>Secure Configuration Management</h3>
    <p>
      <strong>Default configurations</strong> are almost never secure. CIS Control #4 requires establishing and maintaining a <strong>secure configuration baseline</strong> for all hardware and software, and continuously monitoring for configuration drift.
    </p>

    <h4>The Configuration Drift Problem</h4>
    <p>Configuration drift occurs when systems gradually deviate from their approved baseline due to:</p>
    <ul>
      <li>Manual changes by administrators (often undocumented)</li>
      <li>Software updates changing default settings</li>
      <li>Emergency patches applied without proper review</li>
      <li>Developer modifications in non-production environments</li>
    </ul>

    <h4>CIS Benchmarks</h4>
    <div class="info-box">
      <div class="info-title">💡 CIS Benchmarks</div>
      <p>The CIS publishes <strong>free, community-driven security configuration baselines</strong> for hundreds of products including:
        <ul>
          <li>Operating Systems (Windows, Ubuntu, RHEL, macOS)</li>
          <li>Databases (Oracle, SQL Server, MySQL, PostgreSQL)</li>
          <li>Cloud Platforms (AWS, Azure, GCP)</li>
          <li>Network Devices (Cisco, Juniper, Palo Alto)</li>
          <li>Containers (Docker, Kubernetes)</li>
          <li>Middleware (Apache, Nginx, Tomcat)</li>
        </ul>
      </p>
    </div>

    <h4>Secure Configuration Checklist</h4>
    <table>
      <thead>
        <tr><th>Category</th><th>Control Example</th><th>Risk if Misconfigured</th></tr>
      </thead>
      <tbody>
        <tr><td>Authentication</td><td>Enforce MFA, disable default accounts</td><td>Credential theft, unauthorized access</td></tr>
        <tr><td>Network</td><td>Disable unnecessary ports/services, configure firewalls</td><td>Lateral movement, data exfiltration</td></tr>
        <tr><td>Logging</td><td>Enable audit logging, send to SIEM</td><td>Blind spots during investigation</td></tr>
        <tr><td>Encryption</td><td>Enforce TLS, disable weak ciphers</td><td>Data interception</td></tr>
        <tr><td>File Permissions</td><td>Apply least privilege to files and directories</td><td>Unauthorized data access</td></tr>
        <tr><td>Updates</td><td>Enable automatic security updates</td><td>Known vulnerability exploitation</td></tr>
        <tr><td>Services</td><td>Disable unnecessary services and daemons</td><td>Expanded attack surface</td></tr>
      </tbody>
    </table>

    <h4>Configuration Management Tools</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>Category</th><th>Key Features</th></tr>
      </thead>
      <tbody>
        <tr><td>Ansible</td><td>Configuration as Code</td><td>Agentless, idempotent playbooks</td></tr>
        <tr><td>Puppet</td><td>Configuration Management</td><td>Declarative manifests, large-scale management</td></tr>
        <tr><td>Chef</td><td>Configuration Management</td><td>Ruby DSL, cookbook ecosystem</td></tr>
        <tr><td>Chef InSpec</td><td>Compliance Scanning</td><td>Test compliance as code</td></tr>
        <tr><td>OpenSCAP</td><td>SCAP Compliance</td><td>SCAP-based scanning and remediation</td></tr>
        <tr><td>Tenable Nessus</td><td>Vulnerability Scanning</td><td>Configuration auditing + vuln scanning</td></tr>
      </tbody>
    </table>
  `,v2c11:`
    <h3>Account Management</h3>
    <p>
      <strong>Identity is the new perimeter</strong>. CIS Control #5 focuses on the complete lifecycle management of all accounts — from creation through retirement. Poor account management is one of the <strong>top causes of data breaches</strong>.
    </p>

    <h4>Account Lifecycle</h4>
    <pre><code>
1. REQUEST     →  Manager approval required
              →  Role-based access assignment
2. PROVISION   →  Create account with correct permissions
              →  Assign to appropriate security groups
              →  Configure MFA
3. ACCESS      →  Periodic access reviews (quarterly minimum)
              →  Monitor for anomalous activity
4. MODIFY      →  Update permissions for role changes
              →  Escalation/de-escalation procedures
5. DISABLE     →  Triggered by termination/transfer
              →  Automated via HR-IAM integration
6. DELETE      →  Remove all access and data
              →  Audit log retention
</code></pre>

    <h4>Account Types and Management</h4>
    <table>
      <thead>
        <tr><th>Account Type</th><th>Description</th><th>Management Priority</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Privileged Accounts</strong></td><td>Admin/root accounts with elevated access</td><td>Highest — PAM solutions, session recording</td></tr>
        <tr><td><strong>Service Accounts</strong></td><td>Machine-to-machine authentication</td><td>High — minimal permissions, no interactive login</td></tr>
        <tr><td><strong>User Accounts</strong></td><td>Standard employee/contractor accounts</td><td>Medium — regular review and lifecycle management</td></tr>
        <tr><td><strong>Shared Accounts</strong></td><td>Accounts used by multiple people</td><td>Eliminate if possible; highest risk if unavoidable</td></tr>
        <tr><td><strong>Vendor/Third-Party Accounts</strong></td><td>External access for vendors</td><td>High — time-limited, scoped access</td></tr>
        <tr><td><strong>Emergency/Break-Glass</strong></td><td>Accounts for emergency situations</td><td>Highest — tightly controlled, fully audited</td></tr>
      </tbody>
    </table>

    <h4>Best Practices</h4>
    <ol>
      <li><strong>Unique Accounts:</strong> Every user must have a unique, individual account — no shared logins</li>
      <li><strong>Automated Provisioning/Deprovisioning:</strong> Integrate IAM with HR systems so accounts are created on hire and disabled on termination</li>
      <li><strong>Privileged Access Management (PAM):</strong> Use tools like CyberArk, BeyondTrust, or HashiCorp Vault to manage privileged credentials</li>
      <li><strong>Regular Access Reviews:</strong> Conduct quarterly access reviews with manager attestation</li>
      <li><strong>Account Expiration:</strong> Set automatic expiration dates for all accounts, especially vendor/temporary accounts</li>
      <li><strong>Password Policy:</strong> Minimum 14 characters, no complexity requirements (per NIST 800-63B), use of password managers encouraged</li>
      <li><strong>Disable, Don't Delete:</strong> When employees leave, disable accounts first, then delete after a retention period</li>
    </ol>
  `,v2c12:`
    <h3>Access Control Management</h3>
    <p>
      CIS Control #6 addresses <strong>who can access what</strong> across your entire environment. Effective access control follows the principles of <strong>least privilege</strong> and <strong>separation of duties</strong>.
    </p>

    <h4>Access Control Models</h4>
    <table>
      <thead>
        <tr><th>Model</th><th>Description</th><th>Example</th><th>Best For</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Discretionary (DAC)</strong></td><td>Resource owner controls access</td><td>File permissions on Windows</td><td>Small environments</td></tr>
        <tr><td><strong>Mandatory (MAC)</strong></td><td>System enforces access based on security labels</td><td>Military classification systems</td><td>Government/Defense</td></tr>
        <tr><td><strong>Role-Based (RBAC)</strong></td><td>Access based on job roles</td><td>AWS IAM roles, Azure RBAC</td><td>Enterprise cloud environments</td></tr>
        <tr><td><strong>Attribute-Based (ABAC)</strong></td><td>Access based on attributes (user, resource, environment)</td><td>AWS IAM policies with conditions</td><td>Fine-grained, dynamic environments</td></tr>
        <tr><td><strong>Zero Trust</strong></td><td>Never trust, always verify; every request is authenticated and authorized</td><td>BeyondCorp, ZTNA</td><td>Modern distributed organizations</td></tr>
      </tbody>
    </table>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Principle of Least Privilege (PoLP)</div>
      <p>Users and systems should have <strong>only the minimum permissions necessary</strong> to perform their job functions. This limits the blast radius if an account is compromised. Implement PoLP through role-based access, just-in-time (JIT) access, and regular entitlement reviews.</p>
    </div>

    <h4>Multi-Factor Authentication (MFA)</h4>
    <p>MFA is the <strong>single most effective control</strong> against credential-based attacks. CIS requires MFA for all accounts, especially privileged accounts.</p>
    <table>
      <thead>
        <tr><th>MFA Type</th><th>Security Level</th><th>Examples</th><th>Phishing-Resistant?</th></tr>
      </thead>
      <tbody>
        <tr><td>SMS OTP</td><td>Low</td><td>Text message codes</td><td>❌ No (SIM swap attacks)</td></tr>
        <tr><td>TOTP Apps</td><td>Medium</td><td>Google Authenticator, Authy</td><td>❌ No</td></tr>
        <tr><td>Push Notifications</td><td>Medium-High</td><td>Microsoft Authenticator, Duo Push</td><td>❌ No (push fatigue attacks)</td></tr>
        <tr><td>Hardware Tokens (FIDO2/U2F)</td><td>High</td><td>YubiKey, Titan Security Key</td><td>✅ Yes</td></tr>
        <tr><td>Biometrics</td><td>High</td><td>Windows Hello, Touch ID</td><td>✅ Yes (when paired with FIDO2)</td></tr>
        <tr><td>Certificate-Based</td><td>Very High</td><td>Smart cards, PIV/CAC</td><td>✅ Yes</td></tr>
      </tbody>
    </table>

    <h4>Access Control Governance</h4>
    <ol>
      <li>Implement centralized identity management (Azure AD/Entra ID, Okta, Ping Identity)</li>
      <li>Enforce MFA on all accounts, with phishing-resistant MFA for administrators</li>
      <li>Use Role-Based Access Control (RBAC) to simplify permission management</li>
      <li>Implement Just-In-Time (JIT) access for privileged operations</li>
      <li>Conduct quarterly access reviews and certification campaigns</li>
      <li>Monitor and alert on access anomalies (impossible travel, unusual hours)</li>
      <li>Implement SSO for all applications to reduce credential sprawl</li>
    </ol>
  `,v2c13:`
    <h3>Audit Log Management</h3>
    <p>
      CIS Control #8 emphasizes the critical importance of <strong>collecting, managing, and analyzing audit logs</strong>. Without proper logging, organizations are blind to security events and cannot investigate incidents or demonstrate compliance.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: The Three Pillars of Logging</div>
      <ol>
        <li><strong>Collection:</strong> Capture logs from all relevant sources</li>
        <li><strong>Centralization:</strong> Aggregate logs to a single platform</li>
        <li><strong>Analysis:</strong> Search, correlate, and alert on log data</li>
      </ol>
    </div>

    <h4>What to Log</h4>
    <table>
      <thead>
        <tr><th>Category</th><th>Events to Log</th><th>Retention</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Authentication</strong></td><td>Login success/failure, MFA events, password changes, account lockouts</td><td>12 months minimum</td></tr>
        <tr><td><strong>Authorization</strong></td><td>Access granted/denied, privilege escalation, policy changes</td><td>12 months minimum</td></tr>
        <tr><td><strong>Data Access</strong></td><td>File reads/writes, database queries, API calls</td><td>6-12 months</td></tr>
        <tr><td><strong>System Changes</strong></td><td>Configuration changes, software installs, patch installations</td><td>12 months minimum</td></tr>
        <tr><td><strong>Administrative</strong></td><td>User account creation/modification/deletion, group membership changes</td><td>12 months minimum</td></tr>
        <tr><td><strong>Network</strong></td><td>Firewall events, VPN connections, DNS queries</td><td>6-12 months</td></tr>
        <tr><td><strong>Security Events</strong></td><td>Antivirus detections, IDS/IPS alerts, DLP triggers</td><td>12+ months</td></tr>
      </tbody>
    </table>

    <h4>Log Management Best Practices</h4>
    <ul>
      <li><strong>Standardize Formats:</strong> Use Common Event Format (CEF) or structured JSON for consistency</li>
      <li><strong>Timestamps:</strong> Ensure all logs use UTC timestamps with millisecond precision</li>
      <li><strong>Integrity:</strong> Use cryptographic hashing (e.g., HMAC) to prevent log tampering</li>
      <li><strong>Redundancy:</strong> Send logs to multiple destinations for resilience</li>
      <li><strong>Access Control:</strong> Restrict log access to authorized personnel only</li>
      <li><strong>Correlation:</strong> Use SIEM to correlate events across multiple sources</li>
    </ul>

    <h4>Log Retention Requirements</h4>
    <pre><code>
# Typical log retention by framework
SOC 2:          12 months (audit period)
PCI DSS:        12 months (with 3 months immediately accessible)
HIPAA:          6 years (varies by state)
GDPR:           Per purpose limitation principle
SOX:            7 years (financial records)
NIST 800-92:    As defined by organizational policy
</code></pre>

    <h4>SIEM Integration</h4>
    <p>Security Information and Event Management (SIEM) platforms collect, normalize, and analyze log data from across the environment. Modern SIEM solutions include:</p>
    <ul>
      <li><strong>Splunk:</strong> Industry-leading log management and analytics</li>
      <li><strong>Microsoft Sentinel:</strong> Cloud-native SIEM on Azure</li>
      <li><strong>Elastic Security (SIEM):</strong> Open-source log analytics</li>
      <li><strong>IBM QRadar:</strong> Enterprise SIEM with built-in compliance</li>
      <li><strong>Google Chronicle:</strong> Cloud-native security analytics</li>
    </ul>
  `,v2c14:`
    <h3>ISO 27001 Overview</h3>
    <p>
      <strong>ISO/IEC 27001</strong> is the international standard for <strong>Information Security Management Systems (ISMS)</strong>. It provides a systematic approach to managing sensitive company information so that it remains secure. Published by the International Organization for Standardization (ISO) and the International Electrotechnical Commission (IEC), it is the <strong>most widely adopted information security standard in the world</strong>.
    </p>

    <h4>What ISO 27001 Is (and Isn't)</h4>
    <table>
      <thead>
        <tr><th>ISO 27001 IS</th><th>ISO 27001 IS NOT</th></tr>
      </thead>
      <tbody>
        <tr><td>A framework for managing information security</td><td>A prescriptive checklist of technical controls</td></tr>
        <tr><td>A risk-based approach to security</td><td>A one-time certification event</td></tr>
        <tr><td>Applicable to all organizations, any size</td><td>Only for large enterprises</td></tr>
        <tr><td>A continuous improvement cycle</td><td>A product you can buy</td></tr>
        <tr><td>Voluntary (but increasingly expected)</td><td>Legally required (in most cases)</td></tr>
      </tbody>
    </table>

    <h4>ISO 27001:2022 Structure</h4>
    <p>The 2022 revision reorganized controls into four themes:</p>
    <table>
      <thead>
        <tr><th>Theme</th><th>Controls</th><th>Focus</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Organizational (37 controls)</strong></td><td>Policies, roles, asset management, access control, supplier relationships</td><td>People and processes</td></tr>
        <tr><td><strong>People (8 controls)</strong></td><td>Screening, awareness training, disciplinary process, post-employment</td><td>Human factors</td></tr>
        <tr><td><strong>Physical (14 controls)</strong></td><td>Security perimeters, entry controls, equipment protection, secure disposal</td><td>Physical security</td></tr>
        <tr><td><strong>Technological (34 controls)</strong></td><td>Endpoint devices, privileged access, authentication, cryptography, logging, DLP</td><td>Technical controls</td></tr>
      </tbody>
    </table>

    <h4>Certification Bodies</h4>
    <p>ISO 27001 certification must be performed by an <strong>accredited certification body</strong> (CB). Accreditation ensures the CB meets ISO/IEC 17021 requirements. Recognized accreditation bodies include:</p>
    <ul>
      <li><strong>UKAS</strong> (United Kingdom Accreditation Service)</li>
      <li><strong>ANAB</strong> (ANSI National Accreditation Board)</li>
      <li><strong>DAkkS</strong> (German Accreditation Body)</li>
      <li><strong>CNAS</strong> (China National Accreditation Service)</li>
      <li><strong>JAS-ANZ</strong> (Joint Accreditation System of Australia and New Zealand)</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 ISO 27001 vs. ISO 27002</div>
      <p><strong>ISO 27001</strong> defines the ISMS requirements — what you need to have (the management system). <strong>ISO 27002</strong> provides detailed guidance on implementing the Annex A controls — how to implement them. Think of 27001 as the "what" and 27002 as the "how."</p>
    </div>
  `,v2c15:`
    <h3>ISMS Implementation</h3>
    <p>
      An <strong>Information Security Management System (ISMS)</strong> is a systematic, risk-based approach to managing sensitive information. ISO 27001 defines a <strong>Plan-Do-Check-Act (PDCA)</strong> cycle for continuous improvement.
    </p>

    <h4>PDCA Cycle</h4>
    <pre><code>
┌──────────────────────────────────────────────────┐
│                                                    │
│    ┌─────────┐    ┌──────────┐    ┌─────────┐    │
│    │  PLAN   │───▶│   DO     │───▶│  CHECK  │    │
│    └─────────┘    └──────────┘    └─────────┘    │
│       ▲                                    │      │
│       │                                    ▼      │
│    ┌─────────┐    ┌──────────┐                     │
│    │  ACT    │◀───│  Improve │                     │
│    └─────────┘    └──────────┘                     │
│                                                    │
└──────────────────────────────────────────────────┘
</code></pre>

    <h4>Step-by-Step ISMS Implementation</h4>
    <ol>
      <li>
        <strong>Define the ISMS Scope</strong>
        <ul>
          <li>Identify organizational units, locations, assets, and technologies in scope</li>
          <li>Consider external parties and cloud services</li>
          <li>Document exclusions and justifications</li>
        </ul>
      </li>
      <li>
        <strong>Obtain Management Support</strong>
        <ul>
          <li>Present business case (risk-based, not just compliance)</li>
          <li>Secure budget and resource allocation</li>
          <li>Appoint management representative for ISMS</li>
        </ul>
      </li>
      <li>
        <strong>Define Information Security Policy</strong>
        <ul>
          <li>High-level policy aligned with business objectives</li>
          <li>Define security objectives and commitment to continual improvement</li>
          <li>Policy must be approved by top management</li>
        </ul>
      </li>
      <li>
        <strong>Conduct Risk Assessment</strong>
        <ul>
          <li>Identify assets, threats, vulnerabilities, and impacts</li>
          <li>Evaluate risk levels using a consistent methodology</li>
          <li>Produce a Statement of Applicability (SoA)</li>
        </ul>
      </li>
      <li>
        <strong>Select and Implement Controls</strong>
        <ul>
          <li>Choose appropriate Annex A controls based on risk assessment</li>
          <li>Implement policies, procedures, and technical controls</li>
          <li>Allocate responsibilities and resources</li>
        </ul>
      </li>
      <li>
        <strong>Train and Create Awareness</strong>
        <ul>
          <li>Role-specific training for developers, admins, users</li>
          <li>Security awareness programs for all employees</li>
          <li>Document training completion</li>
        </ul>
      </li>
      <li>
        <strong>Monitor, Measure, and Review</strong>
        <ul>
          <li>Monitor control effectiveness through metrics and audits</li>
          <li>Conduct internal audits</li>
          <li>Management review of ISMS performance</li>
        </ul>
      </li>
      <li>
        <strong>Continual Improvement</strong>
        <ul>
          <li>Address audit findings and nonconformities</li>
          <li>Update risk assessments as environment changes</li>
          <li>Feed lessons learned back into the ISMS</li>
        </ul>
      </li>
    </ol>
  `,v2c16:`
    <h3>Risk Assessment</h3>
    <p>
      <strong>Risk assessment</strong> is the cornerstone of ISO 27001 and virtually every compliance framework. It is the process of identifying, analyzing, and evaluating <strong>information security risks</strong> to determine which controls are needed.
    </p>

    <h4>Key Risk Assessment Terms</h4>
    <table>
      <thead>
        <tr><th>Term</th><th>Definition</th><th>Formula</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Asset</strong></td><td>Anything of value to the organization</td><td>Data, systems, people, processes, reputation</td></tr>
        <tr><td><strong>Threat</strong></td><td>Potential cause of an unwanted incident</td><td>Hackers, natural disasters, insider threats, vendor failure</td></tr>
        <tr><td><strong>Vulnerability</strong></td><td>Weakness that can be exploited</td><td>Unpatched software, misconfigurations, weak passwords</td></tr>
        <tr><td><strong>Risk</strong></td><td>The potential for loss or damage</td><td>Risk = Likelihood × Impact</td></tr>
        <tr><td><strong>Likelihood</strong></td><td>Probability of a threat exploiting a vulnerability</td><td>Qualitative or quantitative</td></tr>
        <tr><td><strong>Impact</strong></td><td>Consequences if the risk materializes</td><td>Financial, reputational, operational, legal</td></tr>
        <tr><td><strong>Risk Appetite</strong></td><td>Amount of risk the organization accepts</td><td>Defined by management / board</td></tr>
        <tr><td><strong>Residual Risk</strong></td><td>Risk remaining after controls are applied</td><td>Must be within risk appetite</td></tr>
      </tbody>
    </table>

    <h4>Risk Assessment Methodology</h4>
    <pre><code>
Step 1: IDENTIFY
  ├── Identify assets (data, systems, processes)
  ├── Identify threats (threat landscape analysis)
  └── Identify vulnerabilities (scanning, testing, review)

Step 2: ANALYZE
  ├── Assess likelihood (how probable is exploitation?)
  ├── Assess impact (what's the damage if exploited?)
  └── Calculate inherent risk (likelihood × impact)

Step 3: EVALUATE
  ├── Compare risk level against risk appetite
  ├── Prioritize risks (Critical → High → Medium → Low)
  └── Decide: Accept, Mitigate, Transfer, or Avoid

Step 4: TREAT
  ├── Implement controls to reduce risk
  ├── Accept residual risk with management sign-off
  ├── Transfer risk via insurance or outsourcing
  └── Avoid risk by eliminating the activity

Step 5: MONITOR
  ├── Continuously review risk landscape
  ├── Reassess when environment changes
  └── Update risk register regularly
</code></pre>

    <h4>Risk Matrix Example</h4>
    <table>
      <thead>
        <tr><th></th><th style="text-align:center">Insignificant</th><th style="text-align:center">Minor</th><th style="text-align:center">Moderate</th><th style="text-align:center">Major</th><th style="text-align:center">Catastrophic</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Almost Certain</strong></td><td style="background:#10B981;color:white">5</td><td style="background:#84CC16;color:white">10</td><td style="background:#F59E0B;color:white">15</td><td style="background:#F97316;color:white">20</td><td style="background:#E11D48;color:white">25</td></tr>
        <tr><td><strong>Likely</strong></td><td style="background:#84CC16;color:white">4</td><td style="background:#F59E0B;color:white">8</td><td style="background:#F97316;color:white">12</td><td style="background:#E11D48;color:white">16</td><td style="background:#7C2D12;color:white">20</td></tr>
        <tr><td><strong>Possible</strong></td><td style="background:#22C55E;color:white">3</td><td style="background:#F59E0B;color:white">6</td><td style="background:#F97316;color:white">9</td><td style="background:#E11D48;color:white">12</td><td style="background:#7C2D12;color:white">15</td></tr>
        <tr><td><strong>Unlikely</strong></td><td style="background:#10B981;color:white">2</td><td style="background:#84CC16;color:white">4</td><td style="background:#F59E0B;color:white">6</td><td style="background:#F97316;color:white">8</td><td style="background:#B91C1C;color:white">10</td></tr>
        <tr><td><strong>Rare</strong></td><td style="background:#22C55E;color:white">1</td><td style="background:#22C55E;color:white">2</td><td style="background:#84CC16;color:white">3</td><td style="background:#F59E0B;color:white">5</td><td style="background:#F97316;color:white">6</td></tr>
      </tbody>
    </table>
  `,v2c17:`
    <h3>Statement of Applicability</h3>
    <p>
      The <strong>Statement of Applicability (SoA)</strong> is a mandatory document required by ISO 27001 (Clause 6.1.3). It is one of the most critical artifacts in the certification process, providing a <strong>comprehensive justification</strong> for the inclusion or exclusion of each Annex A control.
    </p>

    <h4>What the SoA Must Contain</h4>
    <ul>
      <li><strong>List of all 93 Annex A controls</strong> (from ISO 27001:2022)</li>
      <li><strong>Applicability status:</strong> Justify why each control is included or excluded</li>
      <li><strong>Control implementation status:</strong> Implemented, Partially Implemented, Not Implemented, Planned</li>
      <li><strong>Justification for exclusions:</strong> Valid, documented reasons for any excluded controls</li>
      <li><strong>Responsible owner:</strong> Who implements and maintains each control</li>
    </ul>

    <div class="warning-box">
      <div class="warning-title">⚠️ Common SoA Mistakes</div>
      <ul>
        <li><strong>Excluding controls without justification:</strong> Auditors will challenge any exclusion without valid reasoning</li>
        <li><strong>Copy-paste from templates:</strong> SoA must be specific to YOUR organization</li>
        <li><strong>Vagueness:</strong> "Not applicable" is not a valid justification — explain WHY</li>
        <li><strong>Stale content:</strong> SoA must be reviewed and updated regularly (at least annually)</li>
      </ul>
    </div>

    <h4>Sample SoA Entry</h4>
    <pre><code>
Control ID: A.5.23  Information Security for Cloud Services
Status:       Implemented
Owner:        Cloud Security Team
Justification: Organization uses AWS, Azure, and GCP with shared
  responsibility model understood. Cloud security policies
  defined in v1c8 of Security Vedas. Provider security
  capabilities reviewed annually.
Excluded:      No
Notes:         References cloud security controls from v1c1-v1c53
</code></pre>

    <h4>SoA and Risk Assessment Link</h4>
    <p>The SoA must be directly linked to the <strong>risk assessment</strong>. Controls selected for implementation should correspond to risks identified. If a control is excluded, the associated residual risk must be within the organization's risk appetite and formally accepted by management.</p>
  `,v2c18:`
    <h3>Annex A Controls</h3>
    <p>
      <strong>ISO 27001:2022 Annex A</strong> contains <strong>93 controls</strong> organized into four themes. These controls represent the <strong>information security measures</strong> an organization can implement to address identified risks.
    </p>

    <h4>The 93 Controls by Theme</h4>
    <table>
      <thead>
        <tr><th>Theme</th><th># Controls</th><th>Key Areas</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Organizational (A.5)</strong></td><td>37</td><td>Policies, roles, threat intelligence, asset management, access control, supplier security, incident management, business continuity, compliance</td></tr>
        <tr><td><strong>People (A.6)</strong></td><td>8</td><td>Screening, terms of employment, awareness, disciplinary process, post-employment</td></tr>
        <tr><td><strong>Physical (A.7)</strong></td><td>14</td><td>Security perimeters, entry controls, office security, equipment protection, secure disposal</td></tr>
        <tr><td><strong>Technological (A.8)</strong></td><td>34</td><td>User devices, access rights, authentication, malware, backup, logging, monitoring, network security, secure development, data protection</td></tr>
      </tbody>
    </table>

    <h4>Key Controls by Category</h4>
    <h5>Organizational Controls (A.5)</h5>
    <table>
      <thead>
        <tr><th>Control</th><th>ID</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>Information Security Policies</td><td>A.5.1</td><td>Establish, implement, and maintain a set of policies</td></tr>
        <tr><td>Information Security Roles</td><td>A.5.2</td><td>Define and allocate security responsibilities</td></tr>
        <tr><td>Segregation of Duties</td><td>A.5.3</td><td>Separate conflicting duties and responsibilities</td></tr>
        <tr><td>Management Responsibilities</td><td>A.5.4</td><td>Management must direct and support ISMS</td></tr>
        <tr><td>Contact with Authorities</td><td>A.5.5</td><td>Maintain contact with relevant authorities</td></tr>
        <tr><td>Contact with Special Interest Groups</td><td>A.5.6</td><td>Maintain contact with relevant security groups</td></tr>
        <tr><td>Threat Intelligence</td><td>A.5.7</td><td>Collect and analyze threat information</td></tr>
        <tr><td>Information Security in Project Management</td><td>A.5.8</td><td>Integrate security into projects</td></tr>
        <tr><td>Inventory of Information Assets</td><td>A.5.9</td><td>Maintain accurate asset inventory</td></tr>
        <tr><td>Acceptable Use</td><td>A.5.10</td><td>Define acceptable use of information and assets</td></tr>
        <tr><td>Return of Assets</td><td>A.5.10</td><td>Ensure return of assets on termination</td></tr>
        <tr><td>Classification of Information</td><td>A.5.12</td><td>Classify information according to its sensitivity</td></tr>
        <tr><td>Information Labelling</td><td>A.5.13</td><td>Label information according to classification</td></tr>
        <tr><td>Information Transfer</td><td>A.5.14</td><td>Ensure secure information transfer agreements</td></tr>
      </tbody>
    </table>

    <h5>Technological Controls (A.8) — Selected Key Controls</h5>
    <table>
      <thead>
        <tr><th>Control</th><th>ID</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>User Endpoint Devices</td><td>A.8.1</td><td>Implement controls for user devices</td></tr>
        <tr><td>Privileged Access Rights</td><td>A.8.2</td><td>Restrict and control privileged access</td></tr>
        <tr><td>Information Access Restriction</td><td>A.8.3</td><td>Control access to information based on policy</td></tr>
        <tr><td>Access to Source Code</td><td>A.8.4</td><td>Control access to source code and development tools</td></tr>
        <tr><td>Secure Authentication</td><td>A.8.5</td><td>Implement secure authentication mechanisms</td></tr>
        <tr><td>Capacity Management</td><td>A.8.6</td><td>Monitor and adjust resource capacity</td></tr>
        <tr><td>Protection Against Malware</td><td>A.8.7</td><td>Implement malware prevention and detection</td></tr>
        <tr><td>Management of Technical Vulnerabilities</td><td>A.8.8</td><td>Patch management and vulnerability remediation</td></tr>
        <tr><td>Configuration Management</td><td>A.8.9</td><td>Implement security configuration settings</td></tr>
        <tr><td>Information Deletion</td><td>A.8.10</td><td>Securely delete information when no longer needed</td></tr>
        <tr><td>Data Masking</td><td>A.8.11</td><td>Mask data in non-production environments</td></tr>
        <tr><td>Data Leakage Prevention</td><td>A.8.12</td><td>Implement DLP controls</td></tr>
        <tr><td>Information Backup</td><td>A.8.13</td><td>Perform regular backups</td></tr>
        <tr><td>Redundancy of Information Processing</td><td>A.8.14</td><td>Ensure redundant systems and failover</td></tr>
        <tr><td>Logging</td><td>A.8.15</td><td>Record security events, retain logs</td></tr>
        <tr><td>Monitoring Activities</td><td>A.8.16</td><td>Monitor networks, systems, and applications</td></tr>
        <tr><td>Clock Synchronization</td><td>A.8.17</td><td>Synchronize all clocks to consistent time source</td></tr>
        <tr><td>Use of Privileged Utility Programs</td><td>A.8.18</td><td>Control system utilities</td></tr>
        <tr><td>Installation of Software</td><td>A.8.19</td><td>Control software installation</td></tr>
        <tr><td>Networks Security</td><td>A.8.20</td><td>Secure network infrastructure</td></tr>
        <tr><td>Security of Network Services</td><td>A.8.21</td><td>Manage network services security</td></tr>
        <tr><td>Segregation of Networks</td><td>A.8.22</td><td>Segment network infrastructure</td></tr>
        <tr><td>Web Filtering</td><td>A.8.23</td><td>Control access to external websites</td></tr>
        <tr><td>Use of Cryptography</td><td>A.8.24</td><td>Implement cryptographic controls</td></tr>
        <tr><td>Secure Development Life Cycle</td><td>A.8.25</td><td>Incorporate security into SDLC</td></tr>
        <tr><td>Application Security Requirements</td><td>A.8.26</td><td>Define security requirements for applications</td></tr>
        <tr><td>Secure System Architecture</td><td>A.8.27</td><td>Design secure system architectures</td></tr>
        <tr><td>Secure Coding</td><td>A.8.28</td><td>Follow secure coding practices</td></tr>
        <tr><td>Security Testing</td><td>A.8.29</td><td>Test systems for security vulnerabilities</td></tr>
        <tr><td>Outsourced Development</td><td>A.8.30</td><td>Control outsourced development</td></tr>
        <tr><td>Separation of Development, Test and Production</td><td>A.8.31</td><td>Separate environments</td></tr>
        <tr><td>Change Management</td><td>A.8.32</td><td>Control changes to systems and software</td></tr>
        <tr><td>Test Information</td><td>A.8.33</td><td>Properly protect test information</td></tr>
        <tr><td>Protection of IS During Audit</td><td>A.8.34</td><td>Minimize disruption during audits</td></tr>
      </tbody>
    </table>
  `,v2c19:`
    <h3>Internal Audit</h3>
    <p>
      <strong>Internal audits</strong> are a critical component of ISO 27001, providing <strong>independent verification</strong> that the ISMS is effectively implemented, maintained, and improving. Unlike external audits, internal audits are conducted by the organization itself or by a hired independent party.
    </p>

    <h4>Internal Audit vs. External Audit</h4>
    <table>
      <thead>
        <tr><th>Aspect</th><th>Internal Audit</th><th>External Audit (Certification)</th></tr>
      </thead>
      <tbody>
        <tr><td>Purpose</td><td>Check ISMS effectiveness, find improvements</td><td>Determine if ISMS meets ISO 27001 requirements</td></tr>
        <tr><td>Performed By</td><td>Internal team or hired consultant</td><td>Accredited certification body</td></tr>
        <tr><td>Frequency</td><td>At least annually (recommended quarterly)</td><td>Annual surveillance + 3-year recertification</td></tr>
        <tr><td>Outcome</td><td>Improvement actions</td><td>Certificate issuance or maintenance</td></tr>
        <tr><td>Scope</td><td>Can be partial or full</td><td>Full ISMS scope</td></tr>
        <tr><td>Formality</td><td>Flexible</td><td>Structured, follows strict procedures</td></tr>
      </tbody>
    </table>

    <h4>Planning and Conducting Internal Audits</h4>
    <ol>
      <li><strong>Audit Schedule:</strong> Create an annual audit plan covering all ISMS processes and departments</li>
      <li><strong>Audit Criteria:</strong> Define what will be audited — specific ISO 27001 clauses, Annex A controls, or processes</li>
      <li><strong>Auditor Selection:</strong> Choose auditors with appropriate competence and <strong>independence</strong> from the audited area</li>
      <li><strong>Audit Preparation:</strong> Review documentation, prepare checklists, schedule interviews</li>
      <li><strong>Conduct Audit:</strong> Gather evidence through document review, interviews, observation, and system testing</li>
      <li><strong>Report Findings:</strong> Document nonconformities (major and minor), observations, and opportunities for improvement</li>
      <li><strong>Management Review:</strong> Present findings to management for decision-making</li>
      <li><strong>Corrective Actions:</strong> Define and implement corrective actions with deadlines</li>
      <li><strong>Follow-up Audit:</strong> Verify corrective actions have been effectively implemented</li>
    </ol>

    <h4>Nonconformity Classification</h4>
    <table>
      <thead>
        <tr><th>Level</th><th>Definition</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Major</strong></td><td>A control is missing, broken, or not addressing the risk it was designed to mitigate</td><td>No risk assessment performed; critical security control entirely absent</td></tr>
        <tr><td><strong>Minor</strong></td><td>A control is partially implemented or has a minor deviation</td><td>Security policy exists but hasn't been reviewed in 18 months</td></tr>
        <tr><td><strong>Observation</strong></td><td>A potential area for improvement (not nonconformity)</td><td>Recommendation to enhance monitoring capabilities</td></tr>
      </tbody>
    </table>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Auditor Competence</div>
      <p>ISO 27001 auditors must demonstrate <strong>impartiality, due professional care, and appropriate knowledge</strong> of the standard. Lead auditors typically hold certifications such as <strong>CISA, CISSP, or IRCA-registered ISO 27001 Lead Auditor</strong>.</p>
    </div>
  `,v2c20:`
    <h3>Management Review</h3>
    <p>
      <strong>Management review</strong> is a mandatory requirement under ISO 27001 (Clause 9.3) where top management evaluates the <strong>continuing suitability, adequacy, and effectiveness</strong> of the ISMS. It is not a formality — it drives strategic security decisions.
    </p>

    <h4>What Management Must Review</h4>
    <table>
      <thead>
        <tr><th>Review Input</th><th>Purpose</th><th>Source</th></tr>
      </thead>
      <tbody>
        <tr><td>Status of information security objectives</td><td>Measure progress toward goals</td><td>Security metrics dashboard</td></tr>
        <tr><td>Information security performance and effectiveness</td><td>Evaluate control effectiveness</td><td>KPI reports, audit results</td></tr>
        <tr><td>Opportunities for improvement</td><td>Drive continual improvement</td><td>Audit findings, incident lessons</td></tr>
        <tr><td>Changes in internal/external issues</td><td>Assess impact of environmental changes</td><td>Risk register, threat intelligence</td></tr>
        <tr><td>Adequacy of resources</td><td>Ensure sufficient budget and staffing</td><td>Resource allocation review</td></tr>
        <tr><td>Nonconformities and corrective actions</td><td>Track remediation progress</td><td>Previous audit reports</td></tr>
        <tr><td>Results of risk assessment and risk treatment</td><td>Ensure risk alignment</td><td>Risk register</td></tr>
        <tr><td>Changes to the organization</td><td>Identify scope changes</td><td>Organizational changes, M&A activity</td></tr>
      </tbody>
    </table>

    <h4>Management Review Process</h4>
    <pre><code>
1. PREPARATION    → Collect review inputs from all ISMS process owners
2. REVIEW MEETING → Discuss inputs, decisions, and actions (minimum annually)
3. DECISIONS      → Approve changes, allocate resources, set new objectives
4. DOCUMENTATION  → Record decisions and management actions
5. FOLLOW-UP      → Track implementation of management decisions
</code></pre>

    <div class="callout">
      <div class="callout-icon">📋</div>
      <div class="callout-content">
        <h4>Best Practice: Quarterly Reviews</h4>
        <p>While ISO 27001 requires at least <strong>one management review per year</strong>, best practice is to conduct reviews <strong>quarterly</strong>. More frequent reviews enable faster response to emerging risks and ensure the ISMS stays aligned with business objectives.</p>
      </div>
    </div>
  `,v2c21:`
    <h3>Certification Process</h3>
    <p>
      ISO 27001 <strong>certification</strong> is the formal process by which an accredited <strong>certification body (CB)</strong> verifies that an organization's ISMS meets all requirements of the standard. Certification is typically valid for <strong>3 years</strong> with annual surveillance audits.
    </p>

    <h4>The Certification Journey</h4>
    <pre><code>
Phase 1: READINESS (Months 1-3)
├── Define ISMS scope
├── Conduct initial risk assessment
├── Define security policies
├── Select Annex A controls
├── Document the SoA
└── Gap analysis and remediation planning

Phase 2: IMPLEMENTATION (Months 3-9)
├── Implement selected controls
├── Deploy policies and procedures
├── Conduct staff awareness training
├── Perform internal audits
├── Hold management reviews
└── Remediate findings from internal audits

Phase 3: STAGE 1 AUDIT (Month 10-12)
├── Document review by CB auditor
├── Verify ISMS documentation is complete
├── Assess readiness for Stage 2
└── Identify any gaps before main audit

Phase 4: STAGE 2 AUDIT (Month 12-15)
├── On-site audit of ISMS implementation
├── Interview key personnel
├── Examine evidence of control operation
├── Test control effectiveness
└── Produce audit report with findings

Phase 5: CERTIFICATION (Month 15+)
├── CB issues certificate (if no major NCs)
├── Certificate valid for 3 years
└── Annual surveillance audits begin

Phase 6: SURVEILLANCE (Yearly)
├── Annual audit (typically 2-3 days)
├── Review changes since last audit
├── Sample controls for ongoing verification
└── Recertification at end of 3-year cycle
</code></pre>

    <h4>Certification Costs</h4>
    <table>
      <thead>
        <tr><th>Cost Component</th><th>Estimated Range</th><th>Notes</th></tr>
      </thead>
      <tbody>
        <tr><td>Consulting / Implementation Support</td><td>$20K – $100K+</td><td>Depends on scope and complexity</td></tr>
        <tr><td>Stage 1 Audit</td><td>$5K – $15K</td><td>Document review</td></tr>
        <tr><td>Stage 2 Audit</td><td>$10K – $30K</td><td>Full certification audit</td></tr>
        <tr><td>Annual Surveillance</td><td>$5K – $15K/year</td><td>Annual maintenance audit</td></tr>
        <tr><td>Recertification (Year 3)</td><td>$10K – $25K</td><td>Full re-audit</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 Tips for Successful Certification</div>
      <ul>
        <li>Start with a <strong>gap analysis</strong> to understand where you stand</li>
        <li>Get <strong>management commitment</strong> early — budget and resources must be allocated</li>
        <li>Don't over-document — focus on <strong>effective controls</strong>, not paperwork</li>
        <li>Use a <strong>compliance management platform</strong> (Drata, Vanta, Laika) to automate evidence collection</li>
        <li>Conduct <strong>at least 2 internal audits</strong> before the Stage 2 audit</li>
        <li>Prepare staff with <strong>awareness training</strong> — auditors will interview employees</li>
      </ul>
    </div>
  `,v2c22:`
    <h3>SOC 2 Overview</h3>
    <p>
      <strong>SOC 2 (System and Organization Controls 2)</strong> is an audit framework developed by the <strong>American Institute of Certified Public Accountants (AICPA)</strong>. It evaluates an organization's <strong>information systems</strong> relevant to security, availability, processing integrity, confidentiality, and privacy. Unlike ISO 27001 (which is a standard you implement), SOC 2 is an <strong>audit report</strong> you produce.
    </p>

    <h4>The Trust Service Criteria (TSC)</h4>
    <p>SOC 2 audits are conducted against five Trust Service Criteria:</p>
    <table>
      <thead>
        <tr><th>Criteria</th><th>Symbol</th><th>Focus</th><th>Mandatory?</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Security</strong></td><td>🔒</td><td>Protection against unauthorized access (Common Criteria)</td><td style="color:#E11D48;">Always required</td></tr>
        <tr><td><strong>Availability</strong></td><td>⚡</td><td>System uptime and operational readiness</td><td>Optional</td></tr>
        <tr><td><strong>Processing Integrity</strong></td><td>⚙️</td><td>System processing is complete, valid, accurate, timely</td><td>Optional</td></tr>
        <tr><td><strong>Confidentiality</strong></td><td>🔐</td><td>Classification and protection of confidential information</td><td>Optional</td></tr>
        <tr><td><strong>Privacy</strong></td><td>👤</td><td>Personal information collection, use, retention, disclosure</td><td>Optional</td></tr>
      </tbody>
    </table>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Common Criteria vs. Criteria-Specific</div>
      <p>All SOC 2 audits include the <strong>Common Criteria (CC series)</strong> which map to security. If you also select Availability, Confidentiality, etc., additional criteria are added. The <strong>Security criterion is mandatory</strong> — you cannot have a SOC 2 without it. Many organizations select all five criteria for comprehensive coverage.</p>
    </div>

    <h4>SOC 2 Trust Principles in Detail</h4>
    <table>
      <thead>
        <tr><th>Principle</th><th>Key Focus Areas</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Security</strong></td><td>Firewalls, intrusion detection, encryption, access controls, MFA, security monitoring</td></tr>
        <tr><td><strong>Availability</strong></td><td>Performance monitoring, disaster recovery, business continuity, redundancy, SLA management</td></tr>
        <tr><td><strong>Processing Integrity</strong></td><td>Quality assurance, data validation, error handling, process monitoring</td></tr>
        <tr><td><strong>Confidentiality</strong></td><td>Data classification, encryption, access restrictions, confidentiality agreements, disposal</td></tr>
        <tr><td><strong>Privacy</strong></td><td>Notice and consent, collection limitation, use/retention/disposal, access and disclosure, quality</td></tr>
      </tbody>
    </table>
  `,v2c23:`
    <h3>Trust Service Criteria</h3>
    <p>
      The <strong>Trust Service Criteria (TSC)</strong> are the specific requirements that SOC 2 auditors evaluate. They are organized into <strong>Common Criteria (CC)</strong> applicable to all SOC 2 audits, and <strong>additional criteria</strong> for each supplementary principle.
    </p>

    <h4>Common Criteria (CC) — Security</h4>
    <p>The CC series forms the foundation of every SOC 2 engagement. Key control areas:</p>
    <table>
      <thead>
        <tr><th>CC Series</th><th>Description</th><th>Example Controls</th></tr>
      </thead>
      <tbody>
        <tr><td>CC1 - Control Environment</td><td>Management's commitment to integrity and ethical values</td><td>Code of conduct, organizational structure, performance reviews</td></tr>
        <tr><td>CC2 - Communication and Information</td><td>Internal and external communication of security policies</td><td>Acceptable use policies, incident reporting channels, customer notifications</td></tr>
        <tr><td>CC3 - Risk Assessment</td><td>Identification and assessment of risks to objectives</td><td>Risk assessments, fraud risk, change impact analysis</td></tr>
        <tr><td>CC4 - Monitoring</td><td>Ongoing and/or separate evaluations of controls</td><tr><td>Internal audits, management reviews, SOC reports</td></tr>
        <tr><td>CC5 - Control Activities</td><td>Policies and procedures to mitigate risks</td><td>Authorization processes, reconciliations, reviews</td></tr>
        <tr><td>CC6 - Logical and Physical Access</td><td>Restricting access to authorized personnel</td><td>MFA, role-based access, encryption, physical security</td></tr>
        <tr><td>CC7 - System Operations</td><td>Detecting and responding to security incidents</td><td>Monitoring, intrusion detection, incident response, backups</td></tr>
        <tr><td>CC8 - Change Management</td><td>Authorized, tested, and approved changes</td><td>Change control boards, testing environments, release management</td></tr>
        <tr><td>CC9 - Risk Mitigation</td><td>Identifying and managing risk from business disruptions</td><td>Vendor assessments, insurance, continuity planning</td></tr>
      </tbody>
    </table>

    <h4>Additional Criteria by Trust Principle</h4>
    <table>
      <thead>
        <tr><th>Principle</th><th>Additional Criteria</th><th>Key Focus</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Availability (A1)</strong></td><td>A1.1-A1.3</td><td>Performance, recovery, continuity</td></tr>
        <tr><td><strong>Processing Integrity (PI1)</strong></td><td>PI1.1-PI1.5</td><td>Processing accuracy, completeness, timeliness</td></tr>
        <tr><td><strong>Confidentiality (C1)</strong></td><td>C1.1-C1.3</td><td>Identification, disposal, protection of confidential data</td></tr>
        <tr><td><strong>Privacy (P1-P8)</strong></td><td>P1.1-P8.1</td><td>Notice, choice, collection, use, disclosure, quality, monitoring</td></tr>
      </tbody>
    </table>
  `,v2c24:`
    <h3>Type I vs Type II</h3>
    <p>
      SOC 2 reports come in two types, and understanding the difference is <strong>critical</strong> when customers or partners request your SOC report.
    </p>

    <table>
      <thead>
        <tr><th>Aspect</th><th>Type I</th><th>Type II</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>What It Examines</strong></td><td>Design of controls at a <strong>point in time</strong></td><td>Operating effectiveness of controls over a <strong>period of time</strong></td></tr>
        <tr><td><strong>Duration</strong></td><td>Snapshot (single date)</td><td>Typically 6-12 months of audit period</td></tr>
        <tr><td><strong>Focus</strong></td><td>"Are the right controls designed?"</td><td>"Do the controls actually work over time?"</td></tr>
        <tr><td><strong>Effort</strong></td><td>Lower (weeks)</td><td>Higher (months)</td></tr>
        <tr><td><strong>Cost</strong></td><td>Lower</td><td>Higher</td></tr>
        <tr><td><strong>Credibility</strong></td><td>Limited — only proves design</td><td>High — proves operational effectiveness</td></tr>
        <tr><td><strong>Customer Expectation</strong></td><td>Rarely sufficient</td><td>Industry standard for B2B SaaS</td></tr>
      </tbody>
    </table>

    <div class="callout">
      <div class="callout-icon">🚨</div>
      <div class="callout-content">
        <h4>Always Get Type II</h4>
        <p>Almost all enterprise customers now require <strong>SOC 2 Type II</strong>. Type I is typically only a stepping stone to Type II. If a customer asks for "SOC 2 compliance," they almost certainly mean Type II. Plan for Type II from the start to avoid wasted effort.</p>
      </div>
    </div>

    <h4>Achieving Type II</h4>
    <ol>
      <li><strong>First:</strong> Complete a Type I to identify control design gaps</li>
      <li><strong>Remediate:</strong> Fix any design issues found during Type I</li>
      <li><strong>Bridge period:</strong> Some auditors allow a bridge between Type I and Type II (typically 3-6 months of overlap)</li>
      <li><strong>Type II observation period:</strong> Auditor tests controls over 6-12 months</li>
      <li><strong>Report issuance:</strong> SOC 2 Type II report generated</li>
    </ol>

    <h4>Bridge Letter</h4>
    <div class="info-box">
      <div class="info-title">💡 Bridge Letters</div>
      <p>A <strong>Bridge Letter</strong> (or Bridge SOC) covers the gap between the end of one Type II report period and the start of the next. It provides interim assurance that controls remain effective while the full Type II observation period runs. Bridge letters are typically issued for 1-3 months.</p>
    </div>
  `,v2c25:`
    <h3>Audit Preparation</h3>
    <p>
      SOC 2 audits typically cost <strong>$20K-$100K+</strong> and take <strong>3-12 months</strong> of preparation. Proper preparation can dramatically reduce cost and timeline while improving outcomes.
    </p>

    <h4>Preparation Timeline</h4>
    <pre><code>
12+ Months Before Audit
├── Define trust service criteria (which principles?)
├── Select auditor (Big 4 vs. boutique firm)
├── Scope determination (which systems, orgs, locations)
└── Budget allocation

6-12 Months Before
├── Gap analysis against TSC
├── Remediate critical control gaps
├── Document policies and procedures
├── Implement technical controls
├── Begin evidence collection
└── Staff training and awareness

3-6 Months Before
├── Run a "pre-audit" (internal dry-run)
├── Test evidence collection automation
├── Prepare management for interviews
├── Review system documentation
└── Address any outstanding findings

0-3 Months Before
├── Final documentation review
├── Confirm auditor logistics
├── Brief key stakeholders
└── Ensure monitoring tools are operational
</code></pre>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Readiness Assessment</div>
      <p>A <strong>readiness assessment</strong> (sometimes called a "pre-audit") is an internal or consultant-led evaluation to identify gaps before the actual audit. Think of it as a practice test. Addressing findings from a readiness assessment is <strong>significantly cheaper</strong> than remediating formal audit findings.</p>
    </div>

    <h4>Common Audit Findings</h4>
    <table>
      <thead>
        <tr><th>Finding Type</th><th>Example</th><th>Prevalence</th></tr>
      </thead>
      <tbody>
        <tr><td>Missing documentation</td><td>No written incident response plan</td><td>Very Common</td></tr>
        <tr><td>Access review gaps</td><td>No quarterly access recertification</td><td>Very Common</td></tr>
        <tr><td>Incomplete change management</td><td>Emergency changes not retroactively documented</td><td>Common</td></tr>
        <tr><td>Insufficient monitoring</td><td>No alerting on failed login attempts</td><td>Common</td></tr>
        <tr><td>Vendor management gaps</td><td>No SOC reports reviewed from key vendors</td><td>Common</td></tr>
        <tr><td>Inconsistent configurations</td><td>Dev and prod environments differ significantly</td><td>Moderate</td></tr>
      </tbody>
    </table>
  `,v2c26:`
    <h3>Continuous Monitoring</h3>
    <p>
      For organizations undergoing SOC 2, <strong>continuous monitoring</strong> means maintaining <strong>real-time compliance posture awareness</strong> between audit periods. This reduces the "compliance scramble" before audits and provides ongoing assurance.
    </p>

    <h4>What to Monitor Continuously</h4>
    <table>
      <thead>
        <tr><th>Control Area</th><th>What to Monitor</th><th>Tool Example</th></tr>
      </thead>
      <tbody>
        <tr><td>Access Controls</td><td>User provisioning/deprovisioning, dormant accounts, privilege escalation</td><td>SailPoint, Okta, Azure AD</td></tr>
        <tr><td>Change Management</td><td>Unauthorized changes, change approval rates, emergency change frequency</td><td>ServiceNow, Jira, GitHub Actions</td></tr>
        <tr><td>Security Events</td><td>Failed logins, malware detections, blocked attacks</td><td>Splunk, Sentinel, Datadog</td></tr>
        <tr><td>System Availability</td><td>Uptime, error rates, latency, incident counts</td><td>PagerDuty, Datadog, New Relic</td></tr>
        <tr><td>Data Protection</td><td>Encryption status, data classification, DLP alerts</td><td>Cloud Custodian, AWS Macie, Microsoft Purview</td></tr>
        <tr><td>Vendor Risk</td><td>SOC report status, security questionnaire responses, incident notifications</td><td>Vanta, Drata, Whistic</td></tr>
        <tr><td>Configuration Compliance</td><td>Infrastructure drift from approved baselines</td><td>AWS Config, Azure Policy, Chef InSpec</td></tr>
      </tbody>
    </table>

    <h4>Automated Evidence Collection</h4>
    <div class="callout">
      <div class="callout-icon">⚡</div>
      <div class="callout-content">
        <h4>Automate Evidence, Automate Compliance</h4>
        <p>Manual evidence collection is the <strong>#1 time sink</strong> in SOC 2 preparation. Modern platforms automate >80% of evidence collection:</p>
        <ul>
          <li><strong>Drata / Vanta:</strong> Connect to 100+ cloud services, automatically collect evidence for 70+ SOC 2 controls</li>
          <li><strong>Laika:</strong> Combines evidence collection with policy templates and employee training</li>
          <li><strong>Secureframe:</strong> Compliance automation with built-in auditor workflow</li>
          <li><strong>Tugboat Logic (OneTrust):</strong> Policy generation and control mapping</li>
        </ul>
        <p>These platforms can reduce SOC 2 readiness time from <strong>12 months to 3-4 months</strong>.</p>
      </div>
    </div>

    <h4>Continuous Monitoring Metrics</h4>
    <ul>
      <li><strong>Control Pass Rate:</strong> Percentage of controls passing at any given time (target: >95%)</li>
      <li><strong>Mean Time to Remediate (MTTR):</strong> Average time to fix non-compliant controls (target: <7 days for critical)</li>
      <li><strong>Evidence Freshness:</strong>Age of most recent evidence for each control (target: <30 days)</li>
      <li><strong>Exception Rate:</strong> Number of approved exceptions vs. total controls</li>
    </ul>
  `,v2c27:`
    <h3>Reporting</h3>
    <p>
      SOC 2 <strong>reporting</strong> is the final deliverable that communicates your security posture to stakeholders. Understanding who receives reports, what they contain, and how to use them effectively is critical.
    </p>

    <h4>Report Types</h4>
    <table>
      <thead>
        <tr><th>Type</th><th>Audience</th><th>Content</th><th>Accessibility</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>SOC 2 Type II Report</strong></td><td>Current customers, prospects</td><td>Detailed audit findings, control descriptions, test results</td><td>Restricted under NDA</td></tr>
        <tr><td><strong>SOC 3 Report</strong></td><td>General public</td><td>Summary-level auditor opinion on controls</td><td>Public (can display seal)</td></tr>
        <tr><td><strong>Bridge Letter</strong></td><td>Current customers</td><td>Interim assurance between Type II periods</td><td>Restricted under NDA</td></tr>
        <tr><td><strong>Management's Assertion</strong></td><td>Auditor, board</td><td>Management's description of system and control assertions</td><td>Internal / auditor only</td></tr>
        <tr><td><strong>Executive Summary</strong></td><td>C-suite, board</td><td>High-level overview of findings and posture</td><td>Internal</td></tr>
      </tbody>
    </table>

    <h4>The SOC 2 Report Structure</h4>
    <pre><code>
Section 1: Opinion Letter
  └── Independent auditor's opinion on control effectiveness

Section 2: Management's Assertion
  ├── System Description
  ├── Control Objectives
  ├── Control Criteria (mapped to TSC)
  └── Written Assertions

Section 3: Control Descriptions & Tests of Operating Effectiveness
  ├── CC1 - Control Environment (tests and results)
  ├── CC2 - Communication and Information
  ├── CC3 - Risk Assessment
  ├── CC6 - Logical and Physical Access
  ├── CC7 - System Operations
  └── ... (all applicable criteria)

Section 4: Control Exceptions / User Exceptions
  └── Any identified control exceptions

Section 5: Additional Information
  └── Carve-outs, inclusive/exclusive criteria
</code></pre>

    <h4>Using SOC 2 Reports Effectively</h4>
    <ul>
      <li><strong>For customers:</strong> Provide under NDA as part of your security package. Include a cover letter summarizing key points.</li>
      <li><strong>For internal use:</strong> Use findings as a roadmap for security improvement, not just a compliance checkbox</li>
      <li><strong>For prospects:</strong> Offer SOC 3 (public) first; provide full SOC 2 under NDA during procurement</li>
      <li><strong>Continuous value:</strong> Extract metrics from SOC 2 (control pass rates, finding trends) to track security maturity over time</li>
    </ul>

    <div class="success-box">
      <div class="success-title">✓ SOC 2 Best Practices</div>
      <ol>
        <li>Publish a public <strong>SOC 3 report</strong> with your security seal on your website</li>
        <li>Maintain a <strong>SOC 2 "package"</strong> (report, bridge letter, executive summary, FAQ) ready for customer requests</li>
        <li>Use continuous monitoring tools to <strong>stay audit-ready year-round</strong></li>
        <li>Track <strong>finding trends</strong> — decreasing findings year-over-year demonstrates improvement</li>
        <li>Share your SOC 2 report with your <strong>own security team</strong> — it's a valuable improvement tool, not just a customer artifact</li>
      </ol>
    </div>
  `,v2c28:`
    <h3>GDPR Overview</h3>
    <p>
      The <strong>General Data Protection Regulation (GDPR)</strong> is the European Union's comprehensive data protection law that came into effect on <strong>May 25, 2018</strong>. It replaced the 1995 Data Protection Directive and represents the most significant shift in data privacy regulation in decades. GDPR applies to any organization that processes personal data of individuals in the EU, regardless of where the organization is located.
    </p>

    <h4>Core Principles of GDPR</h4>
    <ul>
      <li><strong>Lawfulness, Fairness, and Transparency:</strong> Data must be processed lawfully with clear notice to the individual</li>
      <li><strong>Purpose Limitation:</strong> Data collected for one purpose cannot be repurposed without additional consent</li>
      <li><strong>Data Minimization:</strong> Collect only the data that is strictly necessary</li>
      <li><strong>Accuracy:</strong> Keep personal data accurate and up to date</li>
      <li><strong>Storage Limitation:</strong> Retain data only as long as necessary</li>
      <li><strong>Integrity and Confidentiality:</strong> Protect data with appropriate security measures</li>
      <li><strong>Accountability:</strong> The data controller must demonstrate compliance with all principles</li>
    </ul>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Extraterritorial Reach</div>
      <p>GDPR applies to <strong>any organization worldwide</strong> that processes personal data of EU residents. This means a US-based SaaS company serving EU customers must comply with GDPR even without a physical presence in Europe. Article 3 establishes this extraterritorial jurisdiction.</p>
    </div>

    <h4>Key Terms</h4>
    <table>
      <thead>
        <tr><th>Term</th><th>Definition</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Data Controller</strong></td><td>Entity that determines the purposes and means of processing</td></tr>
        <tr><td><strong>Data Processor</strong></td><td>Entity that processes data on behalf of the controller</td></tr>
        <tr><td><strong>Data Subject</strong></td><td>The individual whose data is being processed</td></tr>
        <tr><td><strong>Personal Data</strong></td><td>Any information relating to an identified or identifiable person</td></tr>
        <tr><td><strong>Special Categories</strong></td><td>Racial/ethnic origin, political opinions, health, biometric data, etc.</td></tr>
        <tr><td><strong>DPO</strong></td><td>Data Protection Officer — required expert within the organization</td></tr>
        <tr><td><strong>Supervisory Authority</strong></td><td>National data protection authority in each EU member state</td></tr>
      </tbody>
    </table>
  `,v2c29:`
    <h3>Data Subject Rights</h3>
    <p>
      GDPR grants <strong>eight fundamental rights</strong> to data subjects. Understanding and implementing mechanisms to support these rights is essential for compliance. These rights empower individuals with control over their personal data.
    </p>

    <h4>The Eight Data Subject Rights</h4>
    <table>
      <thead>
        <tr><th>#</th><th>Right</th><th>GDPR Article</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td><strong>Right to Information</strong></td><td>Art. 13-14</td><td>Know what data is collected, why, how long it's kept, and who it's shared with</td></tr>
        <tr><td>2</td><td><strong>Right of Access</strong></td><td>Art. 15</td><td>Obtain a copy of all personal data held by an organization</td></tr>
        <tr><td>3</td><td><strong>Right to Rectification</strong></td><td>Art. 16</td><td>Correct inaccurate personal data</td></tr>
        <tr><td>4</td><td><strong>Right to Erasure ("Right to be Forgotten")</strong></td><td>Art. 17</td><td>Request deletion of personal data under specific conditions</td></tr>
        <tr><td>5</td><td><strong>Right to Restriction of Processing</strong></td><td>Art. 18</td><td>Limit how data is used while disputes are resolved</td></tr>
        <tr><td>6</td><td><strong>Right to Data Portability</strong></td><td>Art. 20</td><td>Receive data in a structured, machine-readable format</td></tr>
        <tr><td>7</td><td><strong>Right to Object</strong></td><td>Art. 21</td><td>Object to processing for direct marketing, research, or public interest</td></tr>
        <tr><td>8</td><td><strong>Rights Related to Automated Decisions</strong></td><td>Art. 22</td><td>Not be subject to solely automated decisions with legal effects</td></tr>
      </tbody>
    </table>

    <h4>Response Timeframes</h4>
    <ul>
      <li>Organizations must respond to data subject requests within <strong>30 days</strong></li>
      <li>This can be extended by <strong>two additional months</strong> for complex requests</li>
      <li>You must <strong>verify the identity</strong> of the requestor before fulfilling requests</li>
      <li>Requests can be made <strong>orally or in writing</strong> — including via automated means</li>
    </ul>

    <div class="warning-box">
      <div class="warning-title">⚠️ Right to Erasure Exceptions</div>
      <p>Right to erasure is <strong>not absolute</strong>. Organizations can retain data when necessary for: freedom of expression, legal obligations, public health, archiving/research, and legal claims. Understanding these exceptions is crucial for proper request handling.</p>
    </div>
  `,v2c30:`
    <h3>Lawful Basis for Processing</h3>
    <p>
      Under GDPR Article 6, processing personal data is only lawful when at least one of <strong>six legal bases</strong> applies. Choosing the correct legal basis is fundamental to compliance, as it affects data subject rights and organizational obligations.
    </p>

    <h4>The Six Legal Bases</h4>
    <table>
      <thead>
        <tr><th>Legal Basis</th><th>GDPR Reference</th><th>When to Use</th><th>Key Requirement</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Consent</strong></td><td>Art. 6(1)(a)</td><td>Marketing, cookies, non-essential processing</td><td>Must be freely given, specific, informed, unambiguous</td></tr>
        <tr><td><strong>Contractual Necessity</strong></td><td>Art. 6(1)(b)</td><td>Fulfilling a contract with the data subject</td><td>Processing must be necessary for the contract</td></tr>
        <tr><td><strong>Legal Obligation</strong></td><td>Art. 6(1)(c)</td><td>Tax reporting, employment law requirements</td><td>Must be a specific legal requirement</td></tr>
        <tr><td><strong>Vital Interests</strong></td><td>Art. 6(1)(d)</td><td>Life-or-death situations</td><td>Necessary to protect someone's life</td></tr>
        <tr><td><strong>Public Task</strong></td><td>Art. 6(1)(e)</td><td>Government agencies performing official functions</td><td>Based on law with clear basis</td></tr>
        <tr><td><strong>Legitimate Interests</strong></td><td>Art. 6(1)(f)</td><td>Fraud prevention, IT security, direct marketing</td><td>Must balance against data subject's rights</td></tr>
      </tbody>
    </table>

    <h4>Consent Requirements (Strictest Standard)</h4>
    <ul>
      <li><strong>Freely Given:</strong> No coercion — "take it or leave it" consent is invalid for non-essential processing</li>
      <li><strong>Specific:</strong> Separate consent for each purpose (no blanket consent)</li>
      <li><strong>Informed:</strong> Clear, plain-language explanation of what data is collected and how it's used</li>
      <li><strong>Unambiguous:</strong> Requires a clear affirmative action (opt-in boxes, not pre-ticked)</li>
      <li><strong>Withdrawable:</strong> As easy to withdraw consent as to give it</li>
      <li><strong>Documented:</strong> Keep records of when, how, and what the individual consented to</li>
    </ul>

    <h4>Legitimate Interest Assessment (LIA)</h4>
    <p>When relying on legitimate interests, organizations must conduct a three-part test:</p>
    <ol>
      <li><strong>Purpose Test:</strong> Is there a legitimate interest behind the processing?</li>
      <li><strong>Necessity Test:</strong> Is the processing necessary to achieve that purpose?</li>
      <li><strong>Balancing Test:</strong> Do the data subject's rights override the organization's interests?</li>
    </ol>
  `,v2c31:`
    <h3>Data Protection Impact Assessment (DPIA)</h3>
    <p>
      A <strong>Data Protection Impact Assessment</strong> is a process designed to identify and minimize data protection risks of a project or system. Under GDPR Article 35, DPIAs are <strong>mandatory</strong> for processing operations that are likely to result in high risk to individuals' rights and freedoms.
    </p>

    <h4>When a DPIA is Required</h4>
    <ul>
      <li><strong>Large-scale profiling:</strong> Systematic evaluation of personal aspects (credit scoring, employee monitoring)</li>
      <li><strong>Large-scale processing of special categories:</strong> Health data, biometrics, political opinions on a large scale</li>
      <li><strong>Systematic monitoring:</strong> Public areas using CCTV, online behavioral tracking</li>
      <li><strong>New technologies:</strong> AI/ML processing, IoT devices, novel data processing methods</li>
      <li><strong>Large-scale processing:</strong> Processing affecting a large number of data subjects or large volumes of data</li>
      <li><strong>Matching/combining datasets:</strong> Merging data from different sources for new purposes</li>
      <li><strong>Vulnerable data subjects:</strong> Children, employees, patients, or other vulnerable groups</li>
    </ul>

    <h4>DPIA Process (9 Steps)</h4>
    <ol>
      <li><strong>Identify the need for a DPIA:</strong> Determine if the processing is high-risk per GDPR guidelines</li>
      <li><strong>Describe the processing:</strong> Document the nature, scope, context, and purposes of the processing</li>
      <li><strong>Consult stakeholders:</strong> Involve DPO, data protection authorities, and business owners</li>
      <li><strong>Assess necessity and proportionality:</strong> Evaluate whether processing is necessary and balanced</li>
      <li><strong>Identify and assess risks:</strong> Determine the likelihood and severity of risks to individuals</li>
      <li><strong>Identify mitigation measures:</strong> Implement controls to reduce identified risks</li>
      <li><strong>Sign off and record outcomes:</strong> Document the DPIA results and decisions</li>
      <li><strong>Integrate outcomes into plan:</strong> Incorporate DPIA findings into the project plan</li>
      <li><strong>Keep under review:</strong> Reassess when there are changes to processing activities</li>
    </ol>

    <h4>DPIA Risk Matrix</h4>
    <table>
      <thead>
        <tr><th>Risk Level</th><th>Criteria</th><th>Action Required</th></tr>
      </thead>
      <tbody>
        <tr><td>🟢 Low</td><td>Minimal impact on individuals, standard processing</td><td>Document and proceed, no further action</td></tr>
        <tr><td>🟡 Medium</td><td>Some risk but mitigable with controls</td><td>Implement additional safeguards before proceeding</td></tr>
        <tr><td>🟠 High</td><td>Significant risk to rights and freedoms</td><td>Consult supervisory authority before processing</td></tr>
        <tr><td>🔴 Critical</td><td>Severe risk, potential for harm</td><td>Redesign processing or obtain explicit consent</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 DPIA Template Structure</div>
      <p>A comprehensive DPIA should include: project description, data flows diagram, consultation with stakeholders, necessity & proportionality assessment, risk assessment with likelihood and severity scores, mitigation measures with implementation timeline, and sign-off by the DPO.</p>
    </div>
  `,v2c32:`
    <h3>Data Breach Notification</h3>
    <p>
      GDPR Articles 33 and 34 establish strict timelines and procedures for reporting personal data breaches. <strong>Failing to report a breach within the required timeframe</strong> can result in significant penalties, separate from any fines for the breach itself.
    </p>

    <h4>Notification Timelines</h4>
    <table>
      <thead>
        <tr><th>Notification</th><th>Timeframe</th><th>Recipient</th><th>GDPR Article</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Supervisory Authority</strong></td><td><strong>72 hours</strong> from discovery</td><td>Lead supervisory authority</td><td>Art. 33</td></tr>
        <tr><td><strong>Data Subjects</strong></td><td>"<strong>Without undue delay</strong>" — typically within 72 hours</td><td>Affected individuals</td><td>Art. 34</td></tr>
      </tbody>
    </table>

    <h4>When Must Data Subjects Be Notified?</h4>
    <p>Notification to individuals is required when a breach is <strong>likely to result in a high risk</strong> to their rights and freedoms. Risk is assessed based on:</p>
    <ul>
      <li><strong>Number of individuals</strong> affected</li>
      <li><strong>Sensitivity</strong> of the compromised data (special categories are higher risk)</li>
      <li><strong>Nature of the breach</strong> (accidental vs. malicious, encrypted vs. unencrypted)</li>
      <li><strong>Potential consequences</strong> (identity theft, financial loss, discrimination)</li>
      <li><strong>Mitigation measures</strong> already in place</li>
    </ul>

    <h4>Breach Notification Content</h4>
    <p>When reporting to the supervisory authority, include:</p>
    <ul>
      <li>Description of the breach including categories and approximate number of individuals and records</li>
      <li>Name and contact details of the data protection officer or contact point</li>
      <li>Likely consequences of the breach</li>
      <li>Measures taken or proposed to address the breach and mitigate effects</li>
    </ul>

    <h4>Breach Response Checklist</h4>
    <ol>
      <li><strong>Contain:</strong> Immediately limit the breach scope (isolate systems, revoke access)</li>
      <li><strong>Assess:</strong> Determine what data was compromised and how many individuals are affected</li>
      <li><strong>Notify:</strong> Report to supervisory authority within 72 hours; notify affected individuals if high risk</li>
      <li><strong>Investigate:</strong> Conduct root cause analysis to determine how the breach occurred</li>
      <li><strong>Remediate:</strong> Fix vulnerabilities and implement stronger controls</li>
      <li><strong>Document:</strong> Maintain a breach register with all relevant details</li>
      <li><strong>Review:</strong> Update security measures and procedures to prevent recurrence</li>
    </ol>

    <div class="warning-box">
      <div class="warning-title">⚠️ 72 Hours Is Tight</div>
      <p>The 72-hour clock starts when the organization <strong>becomes aware</strong> of the breach, not when it occurred. Organizations that lack proper detection capabilities may already be in violation. Having<response-plans and automated detection is critical to meeting this timeline.</p>
    </div>
  `,v2c33:`
    <h3>Data Protection Officer (DPO)</h3>
    <p>
      The <strong>Data Protection Officer</strong> is a mandatory or recommended role under GDPR responsible for overseeing data protection strategy and ensuring compliance. The DPO serves as the point of contact between the organization and supervisory authorities.
    </p>

    <h4>When a DPO Is Mandatory</h4>
    <p>A DPO <strong>must be appointed</strong> when:</p>
    <ul>
      <li>The organization is a <strong>public authority or body</strong> (except courts acting in judicial capacity)</li>
      <li>Core activities involve <strong>large-scale, regular, systematic monitoring</strong> of data subjects (e.g., online tracking, behavioral advertising)</li>
      <li>Core activities involve <strong>large-scale processing of special categories</strong> of data (health, biometric, criminal records) or data relating to criminal convictions</li>
    </ul>

    <h4>DPO Responsibilities</h4>
    <table>
      <thead>
        <tr><th>Responsibility</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Inform & Advise</strong></td><td>Educate the organization and employees on compliance obligations</td></tr>
        <tr><strong>Monitor Compliance</strong></td></tr>
        <tr><td>Monitor GDPR compliance, data protection policies, and security measures</td></tr>
        <tr><td><strong>Advise on DPIAs</strong></td><td>Review and advise on Data Protection Impact Assessments</td></tr>
        <tr><td><strong>Cooperate with Authorities</strong></td><td>Act as the contact point for supervisory authorities</td></tr>
        <tr><td><strong>Handle Inquiries</strong></td><td>Respond to data subject rights requests and inquiries</td></tr>
        <tr><td><strong>Maintain Records</strong></td><td>Keep and update records of processing activities (ROPA)</td></tr>
      </tbody>
    </table>

    <h4>DPO Independence Requirements</h4>
    <ul>
      <li>DPO reports directly to the <strong>highest management level</strong></li>
      <li>Cannot be <strong>dismissed or penalized</strong> for performing duties</li>
      <li>Must not have <strong>conflicting responsibilities</strong> that could compromise independence</li>
      <li>Can be <strong>internal or external</strong> (outsourced DPO services are permitted)</li>
      <li>Contact details must be <strong>publicly published</strong> and provided to the supervisory authority</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Virtual DPO Options</div>
      <p>Smaller organizations that aren't required to appoint a full-time DPO can use <strong>virtual or outsourced DPO services</strong>. A virtual DPO provides expert compliance guidance part-time, making GDPR compliance accessible to organizations of all sizes.</p>
    </div>
  `,v2c34:`
    <h3>Cross-Border Data Transfers</h3>
    <p>
      GDPR <strong>strictly regulates</strong> the transfer of personal data outside the European Economic Area (EEA). Since the <strong>Schrems II</strong> ruling in 2020, organizations must carefully evaluate and implement appropriate safeguards for every international data transfer.
    </p>

    <h4>Adequacy Decisions</h4>
    <p>The European Commission can grant <strong>adequacy decisions</strong> to countries with sufficient data protection laws, allowing free data flow:</p>
    <ul>
      <li><strong>Current adequacy decisions:</strong> UK, Japan, South Korea, Canada (commercial), Israel, New Zealand, Argentina, Uruguay</li>
      <li><strong>US-EU Data Privacy Framework (DPF):</strong> Adopted July 2023, replacing the invalidated Privacy Shield. Companies must self-certify with the US Department of Commerce</li>
      <li>Adequacy decisions are <strong>reviewed periodically</strong> and can be revoked</li>
    </ul>

    <h4>Transfer Mechanisms</h4>
    <table>
      <thead>
        <tr><th>Mechanism</th><th>When to Use</th><th>Key Requirement</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Adequacy Decision</strong></td><td>Country has EU adequacy status</td><td>None additional required</td></tr>
        <tr><td><strong>Standard Contractual Clauses (SCCs)</strong></td><td>Most common mechanism for vendor transfers</td><td>2021 EU-approved SCCs must be used; Transfer Impact Assessment (TIA) required</td></tr>
        <tr><td><strong>Binding Corporate Rules (BCRs)</strong></td><td>Intra-group corporate transfers</td><td>Must be approved by supervisory authority</td></tr>
        <tr><td><strong>Certification/Codes of Conduct</strong></td><td>Industry-specific transfers</td><td>Must be approved by supervisory authority or board</td></tr>
        <tr><td><strong>Derogations</strong></td><td>No other mechanism available</td><td>Explicit consent, contract necessity, or vital interests only</td></tr>
      </tbody>
    </table>

    <h4>Transfer Impact Assessment (TIA)</h4>
    <p>Following Schrems II, organizations using SCCs must conduct a TIA to evaluate whether the legal framework of the destination country provides adequate protection:</p>
    <ol>
      <li>Map the data transfer (what data, to whom, where)</li>
      <li>Assess the legal framework of the third country (surveillance laws, rule of law)</li>
      <li>Evaluate if redress mechanisms are available to data subjects</li>
      <li>Implement supplementary measures if needed (encryption, pseudonymization, contractual protections)</li>
      <li>Document and regularly review the TIA</li>
    </ol>

    <div class="warning-box">
      <div class="warning-title">⚠️ Data Localization Considerations</div>
      <p>Some countries (e.g., China, Russia, India) have <strong>data localization requirements</strong> that conflict with GDPR transfer rules. Organizations operating in multiple jurisdictions must navigate competing legal frameworks carefully, often requiring separate data storage infrastructure per region.</p>
    </div>
  `,v2c35:`
    <h3>GDPR Fines and Enforcement</h3>
    <p>
      The GDPR introduced <strong>significantly higher penalties</strong> than its predecessor, the Data Protection Directive. Supervisory authorities now have the power to impose fines that can materially impact an organization's bottom line, making compliance a <strong>critical business priority</strong>.
    </p>

    <h4>Two-Tier Fine Structure</h4>
    <table>
      <thead>
        <tr><th>Tier</th><th>Maximum Fine</th><th>Applies To</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Lower Tier</strong></td><td><strong>€10 million</strong> or <strong>2%</strong> of global annual turnover (whichever is higher)</td><td>Record-keeping failures, notification failures, failure to appoint DPO</td></tr>
        <tr><td><strong>Higher Tier</strong></td><td><strong>€20 million</strong> or <strong>4%</strong> of global annual turnover (whichever is higher)</td><td>Core violations: unlawful processing, data subject rights violations, unauthorized transfers, failure to obtain valid consent</td></tr>
      </tbody>
    </table>

    <h4>Notable GDPR Enforcement Actions</h4>
    <table>
      <thead>
        <tr><th>Year</th><th>Organization</th><th>Fine</th><th>Violation</th></tr>
      </thead>
      <tbody>
        <tr><td>2023</td><td>Meta (Facebook)</td><td>€1.2 billion</td><td>Unlawful cross-border data transfers to US</td></tr>
        <tr><td>2022</td><td>Meta (Instagram)</td><td>€405 million</td><td>Children's data processing violations</td></tr>
        <tr><td>2021</td><td>Amazon Europe</td><td>€746 million</td><td>Inadequate consent mechanisms for advertising cookies</td></tr>
        <tr><td>2020</td><td>Google (Ireland)</td><td>€50 million</td><td>Lack of valid consent for ad personalization</td></tr>
        <tr><td>2019</td><td>British Airways</td><td>£20 million</td><td>Data breach affecting 400,000+ customers</td></tr>
      </tbody>
    </table>

    <h4>Other Enforcement Powers</h4>
    <p>Beyond fines, supervisory authorities can impose:</p>
    <ul>
      <li><strong>Processing bans:</strong> Order complete cessation of data processing</li>
      <li><strong>Data deletion orders:</strong> Mandate deletion of unlawfully processed data</li>
      <li><strong>Processing limitations:</strong> Restrict how data can be used</li>
      <li><strong>Suspension of data flows:</strong> Halt international data transfers</li>
      <li><strong>Compensation claims:</strong> Data subjects can seek compensation for material and non-material damages</li>
      <li><strong>Collective actions:</strong> Consumer groups can file complaints on behalf of individuals</li>
    </ul>

    <h4>Avoiding Fines: Best Practices</h4>
    <ol>
      <li><strong>Conduct regular DPIAs</strong> for high-risk processing activities</li>
      <li><strong>Implement Privacy by Design and Default</strong> in all systems and processes</li>
      <li><strong>Maintain comprehensive records</strong> of processing activities</li>
      <li><strong>Encrypt and pseudonymize</strong> personal data wherever possible</li>
      <li><strong>Train employees</strong> on data protection obligations</li>
      <li><strong>Establish breach response procedures</strong> and test them regularly</li>
      <li><strong>Appoint a qualified DPO</strong> with adequate resources and authority</li>
    </ol>
  `,v2c36:`
    <h3>CCPA Overview</h3>
    <p>
      The <strong>California Consumer Privacy Act (CCPA)</strong>, effective January 1, 2020, was the first comprehensive state-level privacy law in the United States. It grants California residents significant rights over their personal information and imposes obligations on businesses that collect and process their data. The <strong>California Privacy Rights Act (CPRA)</strong>, effective January 1, 2023, amended and expanded CCPA significantly, creating the California Privacy Protection Agency (CPPA) as the enforcement body.
    </p>

    <h4>Who Does CCPA Apply To?</h4>
    <p>A for-profit entity doing business in California that meets <strong>any</strong> of the following thresholds:</p>
    <ul>
      <li>Annual gross revenue exceeding <strong>$25 million</strong></li>
      <li>Annually buys, sells, or shares personal information of <strong>100,000+ consumers or households</strong></li>
      <li>Derives <strong>50% or more</strong> of annual revenue from selling or sharing personal information</li>
    </ul>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: "Doing Business in California"</div>
      <p>CCPA has broad reach — a business qualifies if it operates in California, collects data of California residents, or meets revenue thresholds regardless of physical presence. This means many out-of-state and international companies fall within scope.</p>
    </div>

    <h4>Key Definitions</h4>
    <table>
      <thead>
        <tr><th>Term</th><th>Definition</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Consumer</strong></td><td>A natural person who is a California resident</td></tr>
        <tr><td><strong>Personal Information (PI)</strong></td><td>Information that identifies, relates to, describes, or can be linked to a consumer</td></tr>
        <tr><td><strong>Sensitive Personal Information (SPI)</strong></td><td>SSN, driver's license, financial account info, precise geolocation, racial/ethnic origin, religious beliefs, biometric data, health info, sexual orientation</td></tr>
        <tr><td><strong>Business</strong></td><td>For-profit entity meeting the thresholds above</td></tr>
        <tr><td><strong>Service Provider</strong></td><td>Entity processing PI on behalf of a business under contract</td></tr>
        <tr><td><strong>Third Party</strong></td><td>Entity receiving PI from a business for a business purpose</td></tr>
        <tr><td><strong>Sale</strong></td><td>Selling, renting, releasing, or disclosing PI for monetary or other valuable consideration</td></tr>
        <tr><td><strong>Sharing</strong></td><td>Making PI available for cross-context behavioral advertising (CPRA expansion)</td></tr>
      </tbody>
    </table>
  `,v2c37:`
    <h3>Consumer Rights</h3>
    <p>
      CCPA grants California residents a suite of rights regarding their personal information, many of which parallel GDPR rights but with California-specific nuances and enforcement mechanisms.
    </p>

    <h4>Core Consumer Rights</h4>
    <table>
      <thead>
        <tr><th>Right</th><th>Description</th><th>CPRA Enhancement?</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Right to Know</strong></td><td>Know what PI is collected, why, and with whom it's shared — including specific pieces of PI</td><td>✅ Expanded to categories and specific pieces</td></tr>
        <tr><td><strong>Right to Delete</strong></td><td>Request deletion of collected PI, with exceptions</td><td>✅ Expanded to include data collected through automated means</td></tr>
        <tr><td><strong>Right to Opt-Out of Sale</strong></td><td>Direct businesses not to sell PI</td><td>✅ Expanded to include "sharing" for cross-context advertising</td></tr>
        <tr><td><strong>Right to Non-Discrimination</strong></td><td>Not be discriminated against for exercising CCPA rights</td><td>✅ Clarified and strengthened</td></tr>
        <tr><td><strong>Right to Correct</strong></td><td>Request correction of inaccurate PI</td><td>✅ New under CPRA</td></tr>
        <tr><td><strong>Right to Limit Use of SPI</strong></td><td>Limit use of sensitive PI to necessary purposes only</td><td>✅ New under CPRA</td></tr>
        <tr><td><strong>Right to Opt-Out of Automated Decision-Making</strong></td><td>Opt out of automated decision-making technology including profiling</td><td>✅ New under CPRA (effective 2026)</td></tr>
      </tbody>
    </table>

    <h4>Right to Know — Details</h4>
    <ul>
      <li>Businesses must disclose: categories of PI collected, categories of sources, purposes for collecting/selling/sharing, specific pieces of PI collected</li>
      <li>Right to request PI collected in the <strong>last 12 months</strong></li>
      <li>Businesses must provide at least <strong>two designated methods</strong> for submitting requests (e.g., toll-free number, web form)</li>
      <li>Must respond within <strong>45 days</strong>; extendable by 45 days with notice</li>
    </ul>

    <h4>Right to Opt-Out — "Do Not Sell or Share My Personal Information"</h4>
    <ul>
      <li>Businesses must provide a clear <strong>"Do Not Sell or Share My Personal Information"</strong> link on their website</li>
      <li>Must wait at least <strong>12 months</strong> before requesting reauthorization</li>
      <li>Must respect opt-out signals (Global Privacy Control / GPC)</li>
    </ul>
  `,v2c38:`
    <h3>Business Obligations</h3>
    <p>
      Companies subject to CCPA/CPRA must implement specific processes, policies, and technical measures to comply with the law. These obligations extend across data collection, processing, sharing, and consumer interaction.
    </p>

    <h4>Data Collection Notice Requirements</h4>
    <p>At or before the point of collection, businesses must provide notice including:</p>
    <ul>
      <li>Categories of PI to be collected and purposes for which each will be used</li>
      <li>Whether PI will be sold or shared, and how to opt out</li>
      <li>Retention periods for each category</li>
      <li>A link to the full privacy policy</li>
    </ul>

    <h4>Privacy Policy Requirements</h4>
    <ul>
      <li>Description of consumer rights and how to exercise them</li>
      <li>List of categories of PI collected, sold, and shared in the last 12 months</li>
      <li>Disclosure of retention periods and criteria used</li>
      <li>Description of the process for handling consumer requests</li>
      <li>At least two methods for submitting requests</li>
      <li>Updated at least <strong>once every 12 months</strong></li>
    </ul>

    <h4>Service Provider & Third Party Contracts</h4>
    <p>Contracts with service providers must include:</p>
    <ul>
      <li>Prohibition on selling or sharing PI</li>
      <li>Requirement to only use PI for specified business purposes</li>
      <li>Requirement to notify the business of any breach</li>
      <li>Requirement to certify compliance upon request</li>
    </ul>

    <h4>Cybersecurity Requirements (CPRA)</h4>
    <ul>
      <li>Implement <strong>reasonable security procedures</strong> appropriate to the nature of PI</li>
      <li>Conduct <strong>annual cybersecurity audits</strong> (effective 2024 for high-risk processors)</li>
      <li>Perform <strong>risk assessments</strong> for processing that presents significant risk</li>
      <li>Submit results to the <strong>California Privacy Protection Agency (CPPA)</strong></li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Privacy by Design Under CCPA</div>
      <p>CPRA emphasizes <strong>data minimization</strong> and <strong>purpose limitation</strong>. Businesses should implement privacy-by-design principles: collect only what's needed, limit retention, and build privacy controls into systems from the start.</p>
    </div>
  `,v2c39:`
    <h3>CCPA Enforcement</h3>
    <p>
      CCPA/CPRA enforcement is shared between the <strong>California Attorney General (AG)</strong> and the newly established <strong>California Privacy Protection Agency (CPPA)</strong>. The law provides for both civil penalties and a limited private right of action.
    </p>

    <h4>Enforcement Bodies</h4>
    <table>
      <thead>
        <tr><th>Enforcer</th><th>Jurisdiction</th><th>Powers</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>California AG</strong></td><td>Broad — all CCPA violations</td><td>Investigate, prosecute, seek civil penalties and injunctive relief</td></tr>
        <tr><td><strong>CPPA</strong></td><td>Technical and administrative violations, rulemaking</td><td>Investigate, issue fines, develop regulations, conduct audits</td></tr>
      </tbody>
    </table>

    <h4>Penalties</h4>
    <ul>
      <li><strong>Civil Penalties (Administrative):</strong> Up to <strong>$2,500 per violation</strong> (unintentional); up to <strong>$7,500 per violation</strong> (intentional or involving minors)</li>
      <li>No cap on total penalties — penalties accumulate per violation, per consumer</li>
      <li>The AG and CPPA have discretion to pursue civil penalties or seek <strong>injunctive relief</strong> only</li>
    </ul>

    <h4>Private Right of Action (Data Breaches Only)</h4>
    <ul>
      <li>Consumers may sue for <strong>unauthorized access and exfiltration, theft, or disclosure</strong> due to a business's failure to implement reasonable security</li>
      <li>Damages: <strong>$100 to $750 per consumer per incident</strong>, or actual damages (whichever is greater)</li>
      <li>Or the AG may bring an action on behalf of affected consumers</li>
      <li>30-day <strong>cure period</strong>: businesses can cure after receiving notice (AG discretion on whether cure is possible for non-breach violations)</li>
    </ul>

    <h4>Notable CCPA Enforcement Actions</h4>
    <table>
      <thead>
        <tr><th>Year</th><th>Organization</th><th>Action</th><th>Details</th></tr>
      </thead>
      <tbody>
        <tr><td>2022</td><td>Sephora</td><td>Settlement</td><td>$1.2 million — failed to disclose sale of personal data and honor opt-out requests</td></tr>
        <tr><td>2022</td><td>Microsoft</td><td>Settlement</td><td>$350,000 — failed to comply with consumer request verification</td></tr>
        <tr><td>2023</td><td>Uber</td><td>Investigation</td><td>Data breach notification and driver data handling</td></tr>
        <tr><td>2023</td><td>Temu</td><td>Investigation</td><td>Data collection practices and privacy compliance</td></tr>
      </tbody>
    </table>

    <div class="warning-box">
      <div class="warning-title">⚠️ Per-Violation, Per-Consumer Model</div>
      <p>CCPA fines are calculated on a <strong>per-violation, per-consumer basis</strong>. For a database of 1 million consumers, even a $2,500/violation fine totals $2.5 billion. This makes large-scale non-compliance financially devastating.</p>
    </div>
  `,v2c40:`
    <h3>CPRA Updates and Future Developments</h3>
    <p>
      The <strong>California Privacy Rights Act (CPRA)</strong> significantly amended CCPA, effective January 1, 2023. Understanding the changes and upcoming requirements is essential for organizations subject to California's privacy law.
    </p>

    <h4>Key CPRA Amendments to CCPA</h4>
    <table>
      <thead>
        <tr><th>Area</th><th>CCPA Original</th><th>CPRA Update</th></tr>
      </thead>
      <tbody>
        <tr><td>Sensitive PI</td><td>No separate category</td><td>Added category with right to limit use</td></tr>
        <tr><td>Right to Correct</td><td>Not available</td><td>New consumer right</td></tr>
        <tr><td>Automated Decision-Making</td><td>Not addressed</td><td>Right to opt-out (effective 2026)</td></tr>
        <tr><td>Data Retention</td><td>Discourage retention</td><td>Must disclose retention periods; cannot retain longer than necessary</td></tr>
        <tr><td>Audit Rights</td><td>Not for AG</td><td>CPPA and AG have independent audit authority</td></tr>
        <tr><td>Cybersecurity</td><td>Not addressed</td><td>Annual cybersecurity audits for high-risk processors</td></tr>
        <tr><td>Enforcement</td><td>AG only</td><td>Shared between AG and CPPA</td></tr>
      </tbody>
    </table>

    <h4>CPPA Rulemaking</h4>
    <p>The CPPA is actively developing <strong>implementing regulations</strong> including:</p>
    <ul>
      <li>Automated decision-making technology rules and opt-out mechanisms</li>
      <li>Risk assessment requirements for processing that presents significant risk</li>
      <li>Data sharing agreements and contractual requirements</li>
      <li>Metrics and methodologies for cybersecurity audits</li>
      <li>Consent management and opt-out preference signal standards</li>
    </ul>

    <h4>Preparing for Future Requirements</h4>
    <ol>
      <li><strong>Monitor CPPA rulemaking:</strong> Regulations are evolving rapidly; subscribe to CPPA updates</li>
      <li><strong>Implement privacy engineering:</strong> Build configurable privacy controls that can adapt to new rules</li>
      <li><strong>Conduct data mapping:</strong> Understand what PI you collect, where it flows, and who receives it</li>
      <li><strong>Invest in automation:</strong> Consumer request volumes will increase — manual processes won't scale</li>
      <li><strong>Vendor management:</strong> Ensure service providers and third parties can comply with CPRA requirements</li>
    </ol>

    <div class="info-box">
      <div class="info-title">💡 Beyond California</div>
      <p>CCPA/CPRA has inspired similar laws in <strong>Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), Utah (UCPA), Texas (TDPSA)</strong>, and others. Building a robust privacy program for CCPA often achieves significant compliance with these other state laws as well. Track the <strong>IAPP State Privacy Law Tracker</strong> for current status.</p>
    </div>
  `,v2c46:`
    <h3>CMMC Overview</h3>
    <p>
      The <strong>Cybersecurity Maturity Model Certification (CMMC)</strong> is a unified cybersecurity standard developed by the <strong>U.S. Department of Defense (DoD)</strong> for the Defense Industrial Base (DIB). It combines various cybersecurity standards (NIST SP 800-171, NIST CSF, FAR requirements) into a <strong>single, tiered certification framework</strong> to protect Controlled Unclassified Information (CUI) and Federal Contract Information (FCI) within the DoD supply chain.
    </p>

    <h4>Why CMMC Was Created</h4>
    <p>Before CMMC, DoD contractors self-attested compliance with NIST 800-171. An investigation found that many contractors claimed compliance without actually implementing required controls. CMMC was created to introduce <strong>third-party assessments</strong> and <strong>tiered maturity levels</strong> to ensure actual implementation.</p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: CMMC 2.0</div>
      <p>In 2023, DoD released <strong>CMMC 2.0</strong>, simplifying the model from 5 levels to 3 levels and leveraging existing certifications (ISO 27001, SOC 2) as pathways to compliance. Level 1 focuses on basic hygiene, Level 2 aligns with NIST SP 800-171, and Level 3 targets organizations subject to NIST SP 800-171 requirements plus additional controls.</p>
    </div>

    <h4>What Information CMMC Protects</h4>
    <table>
      <thead>
        <tr><th>Data Type</th><th>Description</th><th>Protection Level</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Federal Contract Information (FCI)</strong></td><td>Information not intended for public release, provided by/to government under contract</td><td>Level 1+</td></tr>
        <tr><td><strong>Controlled Unclassified Information (CUI)</strong></td><td>Government-created information requiring safeguarding per law/regulation</td><td>Level 2+</td></tr>
        <tr><td><strong>CUI Basic</strong></td><td>Standard CUI across all programs</td><td>Level 2</td></tr>
        <tr><td><strong>CUI Specified</strong></td><td>CUI with specific handling/spreading controls</td><td>Level 2+</td></tr>
      </tbody>
    </table>

    <h4>CMMC Ecosystem</h4>
    <ul>
      <li><strong>CMMC-AB:</strong> The CMMC Accreditation Body oversees the certification ecosystem</li>
      <li><strong>C3PAOs:</strong> Certified Third-Party Assessment Organizations conduct assessments</li>
      <li><strong>DIBCAC:</strong> Defense Industrial Base Cybersecurity Assessment Center (now managed by CMMC-AB)</li>
      <li><strong>SMCs:</strong> Scoping and Maturity Certifications for self-assessments under Level 2</li>
    </ul>
  `,v2c47:`
    <h3>CMMC Level 1 — Basic Cyber Hygiene</h3>
    <p>
      <strong>Level 1</strong> requires organizations to implement <strong>15 basic cybersecurity practices</strong> derived from <strong>FAR 52.204-21</strong> (Safeguarding Covered Defense Information and Cyber Incident Reporting). This is the <strong>minimum baseline</strong> for all DoD contractors handling FCI.
    </p>

    <h4>Level 1 Requirements (15 Practices)</h4>
    <table>
      <thead>
        <tr><th>#</th><th>Practice</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Access Control</td><td>Limit system access to authorized users and processes</td></tr>
        <tr><td>2</td><td>Media Protection</td><td>Protect and control media containing CUI</td></tr>
        <tr><td>3</td><td>Physical Security</td><td>Escort visitors and maintain audit logs of physical access</td></tr>
        <tr><td>4</td><td>Secure Configurations</td><td>Establish and maintain baseline configurations for IT systems</td></tr>
        <tr><td>5</td><td>Access Control for Mobile Devices</td><td>Limit or disable non-essential mobile device functions</td></tr>
        <tr><td>6</td><td>Personnel Security</td><td>Screen individuals prior to authorizing access to systems containing CUI</td></tr>
        <tr><td>7</td><td>Security Assessment</td><td>Periodically assess security controls to determine effectiveness</td></tr>
        <tr><td>8</td><td>Authentication</td><td>Identify and authenticate users before authorizing access</td></tr>
        <tr><td>9</td><td>System & Communications Protection</td><td>Monitor, detect, and protect against unauthorized access/use</td></tr>
        <tr><td>10</td><td>System & Information Integrity</td><td>Identify, report, and correct information system flaws timely</td></tr>
        <tr><td>11</td><td>Security Awareness Training</td><td>Ensure managers and employees are trained on security responsibilities</td></tr>
        <tr><td>12</td><td>Audit & Accountability</td><td>Create and retain system audit logs and records</td></tr>
        <tr><td>13</td><td>Configuration Management</td><td>Establish and maintain baseline configurations and security settings</td></tr>
        <tr><td>14</td><td>Incident Response</td><td>Identify, report, and respond to cybersecurity incidents</td></tr>
        <tr><td>15</td><td>Contingency Planning</td><td>Establish and maintain contingency plans for information systems</td></tr>
      </tbody>
    </table>

    <h4>Level 1 Assessment</h4>
    <ul>
      <li><strong>Self-assessment only</strong> — no third-party certification required</li>
      <li>Annual <strong>SMC (Self-Assessment and Maturity Certification)</strong> required</li>
      <li>Must submit score to the <strong>Cybersecurity Maturity Model</strong> portal</li>
      <li>Estimated cost: <strong>$1,000 – $5,000</strong> (internal labor)</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Level 1 Applicability</div>
      <p>Level 1 applies to companies that handle <strong>FCI only</strong> (not CUI) and contract for less than $50,000 in DOD work. Many small suppliers fall into this category. Level 1 is designed to be achievable for organizations with minimal cybersecurity infrastructure.</p>
    </div>
  `,v2c48:`
    <h3>CMMC Level 2 — Intermediate</h3>
    <p>
      <strong>Level 2</strong> requires organizations to implement and document <strong>110 security practices</strong> aligned with <strong>NIST SP 800-171 Rev. 2</strong>. This level protects <strong>Controlled Unclassified Information (CUI)</strong> and is the most common requirement for DoD contractors.
    </p>

    <h4>Alignment with NIST SP 800-171</h4>
    <p>CMMC Level 2 directly maps to the 110 security requirements in NIST SP 800-171, organized across 14 families:</p>
    <table>
      <thead>
        <tr><th>Family</th><th># Controls</th><th>Focus Area</th></tr>
      </thead>
      <tbody>
        <tr><td>Access Control (AC)</td><td>22</td><td>Limiting system access to authorized users</td></tr>
        <tr><td>Awareness and Training (AT)</td><td>3</td><td>Security awareness for all users</td></tr>
        <tr><td>Audit and Accountability (AU)</td><td>9</td><td>Logging and monitoring events</td></tr>
        <tr><td>Configuration Management (CM)</td><td>9</td><td>Baseline configurations and change control</td></tr>
        <tr><td>Identification and Authentication (IA)</td><td>11</td><td>Verifying user and device identity</td></tr>
        <tr><td>Incident Response (IR)</td><td>3</td><td>Detecting and responding to incidents</td></tr>
        <tr><td>Maintenance (MA)</td><td>6</td><td>System maintenance procedures</td></tr>
        <tr><td>Media Protection (MP)</td><td>9</td><td>Protecting media containing CUI</td></tr>
        <tr><td>Personnel Security (PS)</td><td>2</td><td>Screening and terminating personnel</td></tr>
        <tr><td>Physical Protection (PE)</td><td>6</td><td>Physical access to CUI</td></tr>
        <tr><td>Risk Assessment (RA)</td><td>3</td><td>Periodic risk assessments</td></tr>
        <tr><td>Security Assessment (CA)</td><td>4</td><td>Periodic security assessments</td></tr>
        <tr><td>System and Communications Protection (SC)</td><td>16</td><td>Network security and boundary protection</td></tr>
        <tr><td>System and Information Integrity (SI)</td><td>7</td><td>Flaw remediation and malware protection</td></tr>
      </tbody>
    </table>

    <h4>Level 2 Assessment Options</h4>
    <table>
      <thead>
        <tr><th>Assessment Type</th><th>Performed By</th><th>Validity</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Third-Party Assessment (C3PAO)</strong></td><td>Certified Third-Party Assessment Organization</td><td>3 years</td></tr>
        <tr><td><strong>SMC (Self-Assessment)</strong></td><td>Organization (with evidence review)</td><td>3 years</td></tr>
      </tbody>
    </table>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: NIST SP 800-171</div>
      <p>NIST SP 800-171 is the <strong>foundational standard</strong> for protecting CUI in non-federal systems. It was originally mandated through DFARS 252.204-7012. CMMC Level 2 codifies these requirements into a certifiable framework, adding process maturity requirements on top.</p>
    </div>
  `,v2c49:`
    <h3>CMMC Level 3 — Good Cyber Hygiene</h3>
    <p>
      <strong>Level 3</strong> is the highest level of CMMC certification, requiring organizations to implement <strong>all 110 NIST SP 800-171 practices plus additional controls</strong> from other frameworks. Level 3 aims to protect CUI with <strong>comprehensive, optimized security programs</strong> and requires government-led assessments (DIBCAC).
    </p>

    <h4>Additional Requirements Beyond Level 2</h4>
    <ul>
      <li>All 110 NIST SP 800-171 controls <strong>fully implemented and documented</strong></li>
      <li>Establish, maintain, and <strong>review a plan</strong> for implementing security controls</li>
      <li>Provide <strong>adequate resourcing</strong> and organizational support for security measures</li>
      <li>Designate a <strong>senior leader</strong> to oversee CUI protection</li>
      <li>Maintain a <strong>security unit</strong> or equivalent function</li>
      <li>Develop, document, and maintain <strong>security policies and procedures</strong></li>
      <li>Participate in <strong>DIBCAC-led government assessments</strong></li>
    </ul>

    <h4>Level 3 Assessment</h4>
    <ul>
      <li><strong>Government-led assessment</strong> (DIBCAC or authorized entity)</li>
      <li><strong>Not self-assessable</strong> — requires independent government review</li>
      <li>More rigorous evidence requirements than Level 2</li>
      <li>Estimated cost: significantly higher than Level 2 due to scope and assessment rigor</li>
    </ul>

    <h4>Scope and Applicability</h4>
    <table>
      <thead>
        <tr><th>Aspect</th><th>Details</th></tr>
      </thead>
      <tbody>
        <tr><td>Contracts</td><td>Contracts with specific national security program requirements</td></tr>
        <tr><td>Data</td><td>High-value CUI across the entire enterprise</td></tr>
        <tr><td>Assessments</td><td>Government-led, not self-assessed</td></tr>
        <tr><td>Maturity Expectation</td><td>Institutionalized processes with continuous improvement</td></tr>
      </tbody>
    </table>

    <div class="warning-box">
      <div class="warning-title">⚠️ Level 3 Complexity</div>
      <p>Level 3 requires a <strong>mature, well-resourced security program</strong>. Organizations should typically achieve Level 2 certification before pursuing Level 3. The government assessment process is significantly more demanding and requires extensive documentation and evidence.</p>
    </div>
  `,v2c50:`
    <h3>CMMC Certification Lifecycle</h3>
    <p>
      CMMC certification is <strong>valid for 3 years</strong> and requires ongoing maintenance, evidence retention, and renewal. Understanding the full lifecycle helps organizations plan resources and maintain continuous compliance.
    </p>

    <h4>Certification Timeline</h4>
    <pre><code>
Year 1: CERTIFICATION
  ├── Engage C3PAO (for Level 2) or DIBCAC (for Level 3)
  ├── Conduct Stage 1 assessment (document review)
  ├── Remediate findings
  ├── Conduct Stage 2 assessment (on-site)
  ├── Receive certification with score
  └── Submit score to CMMC portal

Years 2-3: MAINTENANCE
  ├── Continuous monitoring of security controls
  ├── Annual self-assessments (recommended)
  ├── Maintain evidence repository
  ├── Update SOPs and documentation
  └── Address any changes in scope or personnel

Year 3: RECERTIFICATION
  ├── Begin recertification preparation 6 months prior
  ├── Review and update all documentation
  ├── Conduct internal pre-assessment
  ├── Engage assessor for renewal
  └── Submit updated score to CMMC portal
</code></pre>

    <h4>POA&M (Plan of Action & Milestones)</h4>
    <div class="key-box">
      <div class="key-title">🔑 Key Concept: POA&M</div>
      <p>A <strong>POA&M</strong> is a document that records identified weaknesses along with planned corrective actions, milestones, and completion dates. Open POA&Ms are allowed at certification, but each must have a <strong>specific remediation plan</strong> with deadlines. POA&Ms must be closed within the certification period — critical items cannot remain open at renewal.</p>
    </div>

    <h4>Evidence Management</h4>
    <p>CMMC requires organizations to maintain evidence of control implementation:</p>
    <ul>
      <li>Evidence must be retained for the <strong>entire 3-year certification period</strong></li>
      <li>Digital evidence is preferred (scanned documents acceptable)</li>
      <li>Evidence must be <strong>organized by control family</strong> for efficient assessment</li>
      <li>Automated evidence collection tools (e.g., compliance platforms) are recommended</li>
    </ul>

    <h4>Cost Estimates by Level</h4>
    <table>
      <thead>
        <tr><th>Level</th><th>Estimated Certification Cost</th><th>Assessment Type</th></tr>
      </thead>
      <tbody>
        <tr><td>Level 1</td><td>$1K – $5K</td><td>Self-assessment (SMC)</td></tr>
        <tr><td>Level 2</td><td>$5K – $50K+</td><td>C3PAO or SMC</td></tr>
        <tr><td>Level 3</td><td>$50K – $150K+</td><td>DIBCAC government assessment</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 Certification Roadmap</div>
      <p>Organizations should start by identifying which CMMC level their contracts require, then build a <strong>gap analysis and remediation roadmap</strong>. Many organizations find that existing ISO 27001 or SOC 2 certifications significantly reduce the effort needed for CMMC Level 2 certification.</p>
    </div>
  `,v2c51:`
    <h3>PCI DSS Overview</h3>
    <p>
      The <strong>Payment Card Industry Data Security Standard (PCI DSS)</strong> is a set of security standards designed to ensure that <strong>all companies that accept, process, store, or transmit credit card information</strong> maintain a secure environment. PCI DSS is governed by the <strong>PCI Security Standards Council (PCI SSC)</strong>, founded by the major payment brands (Visa, Mastercard, American Express, Discover, JCB).
    </p>

    <h4>Key Concepts</h4>
    <ul>
      <li><strong>Not a law:</strong> PCI DSS is an industry standard, but it is enforced through contractual relationships with payment brands and acquiring banks</li>
      <li><strong>Applies to everyone in the payment chain:</strong> Merchants, processors, acquirers, service providers, and any entity storing, processing, or transmitting cardholder data</li>
      <li><strong>Validation frequency:</strong> Depends on merchant level (annual for most, quarterly for some)</li>
      <li><strong>Non-compliance consequences:</strong> Fines ($5,000–$100,000/month from payment brands), increased transaction fees, termination of merchant account, liability for fraud</li>
    </ul>

    <h4>The 6 Goals of PCI DSS</h4>
    <ol>
      <li>Build and maintain a secure network and systems</li>
      <li>Protect cardholder data</li>
      <li>Maintain a vulnerability management program</li>
      <li>Implement strong access control measures</li>
      <li>Regularly monitor and test networks</li>
      <li>Maintain an information security policy</li>
    </ol>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: PCI DSS v4.0</div>
      <p>PCI DSS version 4.0, released <strong>March 2022</strong>, replaced v3.2.1 (which was retired March 31, 2024). v4.0 emphasizes <strong>flexibility and customization</strong>, introduces <strong>300+ sub-requirements</strong>, and places greater emphasis on <strong>continuous security validation</strong>, <strong>authentication</strong>, and <strong>zero trust principles</strong>.</p>
    </div>
  `,v2c52:`
    <h3>PCI DSS Requirement 1 & 2: Secure Network</h3>
    <p>
      Requirements 1 and 2 of PCI DSS focus on building and maintaining a <strong>secure network infrastructure</strong> to protect cardholder data environments (CDE) from external threats.
    </p>

    <h4>Requirement 1: Install and Maintain Network Security Controls</h4>
    <p>Install and maintain a firewall and/or network security controls (NSCs) to prevent unauthorized access to system components and cardholder data.</p>
    <ul>
      <li><strong>1.1:</strong> Install and maintain firewall and/or NSCs at each network boundary</li>
      <li><strong>1.2:</strong> Establish and maintain a secure configuration — deny all traffic by default; allow only necessary protocols, ports, services</li>
      <li><strong>1.3:</strong> Establish and maintain rules that restrict connections between untrusted networks and any system components in the CDE</li>
      <li><strong>1.4:</strong> Restrict any direct public access between untrusted networks and system components</li>
      <li><strong>1.5:</strong> Implement network segmentation (PCI DSS v4.0) to isolate the CDE from other networks</li>
    </ul>

    <h4>Requirement 2: Apply Secure Configurations</h4>
    <p>Do not use vendor-supplied defaults for system passwords and other security parameters.</p>
    <ul>
      <li><strong>2.1:</strong> Change all default passwords before placing a system on the network</li>
      <li><strong>2.2:</strong> Perform and document risk ranking for all system components</li>
      <li><strong>2.3:</strong> Encrypt all non-console administrative access using strong cryptography</li>
    </ul>

    <h4>Network Segmentation Best Practices</h4>
    <table>
      <thead>
        <tr><th>Segment</th><th>Purpose</th><th>Best Practice</th></tr>
      </thead>
      <tbody>
        <tr><td>CDE (Cardholder Data Environment)</td><td>Systems processing/ storing/ transmitting cardholder data</td><td>Strictest access controls, full monitoring</td></tr>
        <tr><td>Connected-to/Impacted-by Systems</td><td>Systems that can affect CDE security</td><td>Controlled access, monitored connections</td></tr>
        <tr><td>Out-of-Scope Systems</td><td>Systems with no connection to CDE</td><td>Documented justification for exclusion</td></tr>
      </tbody>
    </table>
  `,v2c53:`
    <h3>PCI DSS Requirement 3 & 4: Protect Cardholder Data</h3>
    <p>
      Requirements 3 and 4 of PCI DSS mandate the <strong>protection of stored cardholder data</strong> and the <strong>encryption of data in transit</strong> across open, public networks.
    </p>

    <h4>Requirement 3: Protect Stored Account Data</h4>
    <ul>
      <li><strong>3.1:</strong> Keep stored account data to a <strong>minimum</strong> — implement data retention and disposal policies</li>
      <li><strong>3.2:</strong> Do not store <strong>sensitive authentication data</strong> after authorization (even if encrypted):
        <ul>
          <li>Full track data (magnetic stripe data)</li>
          <li>CVV2/CVC2/CAV2</li>
          <li>PIN/PIN block</li>
          <li>Values stored on the chip (CVM, PIN)</li>
        </ul>
      </li>
      <li><strong>3.3:</strong> Mask PAN when displayed (first six and last four digits only)</li>
      <li><strong>3.4:</strong> Render PAN <strong>unreadable</strong> anywhere it is stored — using one of:
        <ul>
          <li>One-way hash functions (with entire PAN)</li>
          <li>Truncation (hashing cannot be used)</li>
          <li>Index tokens and pads (pads must be securely stored)</li>
          <li>Strong cryptography with associated key management</li>
        </ul>
      </li>
      <li><strong>3.5:</strong> Protect encryption keys used for encryption of PAN</li>
    </ul>

    <h4>Requirement 4: Encrypt Transmission of Cardholder Data</h4>
    <ul>
      <li><strong>4.1:</strong> Use strong cryptography to safeguard PAN during transmission across open, public networks</li>
      <li><strong>4.2:</strong> Never send unprotected PANs by end-user messaging technologies (email, instant messaging, chat)</li>
    </ul>

    <div class="callout">
      <div class="callout-icon">🛡️</div>
      <div class="callout-content">
        <h4>Tokenization vs. Encryption</h4>
        <p><strong>Tokenization</strong> replaces the PAN with a non-reversible token, reducing PCI DSS scope. <strong>Encryption</strong> is reversible with the proper key. Both are acceptable methods for protecting stored data, but tokenization is often preferred because it eliminates the need to manage encryption keys and reduces the CDE scope.</p>
      </div>
    </div>
  `,v2c54:`
    <h3>PCI DSS Requirement 5 & 6: Vulnerability Management</h3>
    <p>
      Requirements 5 and 6 ensure organizations actively protect systems against <strong>malware</strong> and address <strong>known vulnerabilities</strong> through proper configuration management.
    </p>

    <h4>Requirement 5: Protect All Systems and Networks from Malicious Software</h4>
    <ul>
      <li><strong>5.1:</strong> Deploy and maintain anti-malware mechanisms (including anti-phishing) for all systems commonly affected by malicious software</li>
      <li><strong>5.2:</strong> Ensure anti-malware is active and current; enable periodic scans</li>
      <li><strong>5.3:</strong> Perform periodic evaluations to examine emerging threats; evaluate ability to detect or block exploits</li>
    </ul>

    <h4>Requirement 6: Develop and Maintain Secure Systems and Software</h4>
    <ul>
      <li><strong>6.1:</strong> Establish a process to identify security vulnerabilities, using reputable outside sources for security information</li>
      <li><strong>6.2:</strong> Establish a process to identify, assess, and manage common and critical internal and external software vulnerabilities:</li>
        <ul>
          <li>Run internal and external network vulnerability scans at least quarterly and after any significant change</li>
          <li>Perform annual penetration testing</li>
          <li>Address identified vulnerabilities and deploy patches as soon as possible</li>
        </ul>
      <li><strong>6.3:</strong> Keep all system components and software up to date with latest vendor security patches; install critical patches within one month</li>
      <li><strong>6.4:</strong> Protect all pages and services with public-facing web applications against known attacks by deploying manual or automated threat assessment tools</li>
      <li><strong>6.5:</strong> Establish and maintain documentation of all security and operational procedures</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Penetration Testing Requirements</div>
      <p>PCI DSS requires <strong>annual penetration testing</strong> (Requirement 11.4) and <strong>internal/external vulnerability scans</strong> (Requirement 11.3). Pen testing must be performed by qualified personnel and cover the CDE and any out-of-scope systems that could impact CDE security.</p>
    </div>
  `,v2c55:`
    <h3>PCI DSS Requirement 7 & 8: Access Control</h3>
    <p>
      Requirements 7 and 8 of PCI DSS enforce <strong>strict access control</strong> and <strong>strong authentication</strong>, ensuring only authorized personnel can access cardholder data and system components.
    </p>

    <h4>Requirement 7: Restrict Access to System Components and Cardholder Data</h4>
    <ul>
      <li><strong>7.1:</strong> Define access control needs for personnel based on job responsibilities and data access requirements</li>
      <li><strong>7.2:</strong> <strong>Limit access</strong> to system components and cardholder data to only individuals whose job requires access</li>
      <li><strong>7.3:</strong> Ensure access is <strong>granted only to the lowest level of system access</strong> and privileges necessary for job functions (least privilege)</li>
      <li><strong>7.4:</strong> Implement an <strong>access control system</strong> for system components (physical or logical):
        <ul>
          <li>Establish unique user accounts and a process for assigning them</li>
          <li>Implement role-based access controls</li>
          <li>Document access assignments and access control policies</li>
          <li>Periodically review and update access privileges</li>
        </ul>
      </li>
    </ul>

    <h4>Requirement 8: Identify Users and Authenticate Access</h4>
    <ul>
      <li><strong>8.1:</strong> Define and implement policies for the security of user accounts</li>
      <li><strong>8.2:</strong> <strong>Authenticate all users</strong> before access to system components and cardholder data:
        <ul>
          <li>MFA required for all access to the CDE (v4.0)</li>
          <li>Use phishing-resistant authentication for CDE access (v4.0)</li>
          <li>Password-based MFA must ensure passwords are protected during transmission and storage</li>
        </ul>
      </li>
      <li><strong>8.3:</strong> Implement MFA for all access to the CDE and other security-sensitive areas</li>
      <li><strong>8.4:</strong> Protect stored authentication data and account credentials</li>
      <li><strong>8.5:</strong> Implement controls to prevent brute-force attacks</li>
    </ul>

    <div class="warning-box">
      <div class="warning-title">⚠️ MFA in PCI DSS v4.0</div>
      <p>PCI DSS 4.0 significantly strengthened MFA requirements. MFA is now <strong>required for all access to the CDE</strong>, including access by employees, administrators, and third parties. The standard now also specifies that MFA solutions must be <strong>phishing-resistant</strong> for certain scenarios (effective from March 31, 2025).</p>
    </div>
  `,v2c56:`
    <h3>PCI DSS Requirement 10 & 11: Monitor & Test</h3>
    <p>
      Requirements 10 and 11 mandate <strong>comprehensive monitoring of all network resources and cardholder data access</strong>, along with regular <strong>security testing</strong> to validate the effectiveness of controls.
    </p>

    <h4>Requirement 10: Log and Monitor All Access to System Components and Cardholder Data</h4>
    <ul>
      <li><strong>10.1:</strong> Log all individual user access to system components and cardholder data</li>
      <li><strong>10.2:</strong> Audit all actions taken by any individual with administrative (root) or system-level access</li>
      <li><strong>10.3:</strong> Record audit trail entries for:
        <ul>
          <li>Individual user access to cardholder data</li>
          <li>All actions by users with administrative privileges</li>
          <li>Access to all audit logs</li>
          <li>Invalid logical access attempts</li>
          <li>Use of identification and authentication mechanisms</li>
          <li>Creation and deletion of system-level objects</li>
        </ul>
      </li>
      <li><strong>10.4:</strong> Synchronize all audit trail timestamps to a single time source</li>
      <li><strong>10.5:</strong> Protect audit trail data from unauthorized modification</li>
      <li><strong>10.6:</strong> Review all security event logs daily or upon transaction processing</li>
      <li><strong>10.7:</strong> Retain audit trail history for <strong>at least 12 months</strong> (3 months immediately accessible)</li>
      <li><strong>10.8:</strong> Implement processes to respond to failures in audit logging mechanisms</li>
    </ul>

    <h4>Requirement 11: Regularly Test Security of Systems and Networks</h4>
    <ul>
      <li><strong>11.1:</strong> Establish and implement a process for <strong>vulnerability identification</strong> (internal and external scans):
        <ul>
          <li>External scans at least quarterly and after significant changes</li>
          <li>Internal scans at least quarterly</li>
        </ul>
      </li>
      <li><strong>11.3:</strong> Conduct <strong>internal and external penetration testing</strong> at least annually and after significant changes</li>
      <li><strong>11.4:</strong> Test segmentation controls at least every 6 months (new in v4.0)</li>
    </ul>

    <h4>PCI DSS Merchant Levels</h4>
    <table>
      <thead>
        <tr><th>Level</th><th>Criteria</th><th>Validation Requirements</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Level 1</strong></td><td>> 6 million transactions/year OR prior breach/compromise</td><td>Annual ROC by QSA + quarterly ASV scans</td></tr>
        <tr><td><strong>Level 2</strong></td><td>1–6 million transactions/year</td><td>Annual SAQ (with ROC option) + quarterly ASV scans</td></tr>
        <tr><td><strong>Level 3</strong></td><td>20,000–1 million e-commerce transactions/year</td><td>Annual SAQ + quarterly ASV scans</td></tr>
        <tr><td><strong>Level 4</strong></td><td>< 20,000 e-commerce OR up to 1 million total transactions/year</td><td>Annual SAQ + quarterly ASV scans (recommended)</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 PCI Assessment Types</div>
      <p><strong>ROC (Report on Compliance):</strong> Detailed audit report by a QSA (Qualified Security Assessor) — required for Level 1 merchants. <strong>SAQ (Self-Assessment Questionnaire):</strong> Self-assessment form with multiple types based on payment processing method. <strong>ASV (Approved Scanning Vendor):</strong> External vulnerability scans conducted quarterly by a PCI SSC-approved vendor.</p>
    </div>
  `,v2c57:`
    <h3>HIPAA Overview</h3>
    <p>
      The <strong>Health Insurance Portability and Accountability Act (HIPAA)</strong> of 1996 is US legislation that provides data privacy and security provisions for safeguarding <strong>protected health information (PHI)</strong>. The Act was modernized by the <strong>HITECH Act of 2009</strong>, which strengthened enforcement and introduced the <strong>Breach Notification Rule</strong>.
    </p>

    <h4>Who Must Comply</h4>
    <p>HIPAA applies to <strong>Covered Entities</strong> and their <strong>Business Associates</strong>:</p>
    <ul>
      <li><strong>Covered Entities:</strong>
        <ul>
          <li>Health Plans (health insurance companies, HMOs, government healthcare programs)</li>
          <li>Healthcare Clearinghouses (entities processing nonstandard health information)</li>
          <li>Healthcare Providers (doctors, clinics, hospitals, pharmacies — any who transmit health information electronically)</li>
        </ul>
      </li>
      <li><strong>Business Associates:</strong> Any person or entity that performs functions or activities on behalf of a covered entity involving the use or disclosure of PHI (e.g., billing companies, IT vendors, cloud hosting providers, attorneys)</li>
    </ul>

    <h4>The Three HIPAA Rules</h4>
    <div class="callout">
      <div class="callout-icon">📋</div>
      <div class="callout-content">
        <h4>HIPAA's Three Core Rules</h4>
        <ol>
          <li><strong>Privacy Rule:</strong> Governs the use and disclosure of PHI</li>
          <li><strong>Security Rule:</strong> Sets standards for safeguarding electronic PHI (ePHI)</li>
          <li><strong>Breach Notification Rule:</strong> Requirements for reporting breaches of unsecured PHI</li>
        </ol>
      </div>
    </div>

    <h4>Key Definitions</h4>
    <table>
      <thead>
        <tr><th>Term</th><th>Definition</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>PHI (Protected Health Information)</strong></td><td>Individually identifiable health information — any data relating to past, present, or future physical/mental health, provision of healthcare, or payment for healthcare that can identify an individual</td></tr>
        <tr><td><strong>ePHI</strong></td><td>PHI created, received, maintained, or transmitted electronically</td></tr>
        <tr><td><strong>Minimum Necessary Standard</strong></td><td>Use, disclosure, and requests for PHI must be limited to the minimum necessary to accomplish the intended purpose</td></tr>
        <tr><td><strong>BAA (Business Associate Agreement)</strong></td><td>Contract between a covered entity and business associate specifying responsibilities for protecting PHI</td></tr>
      </tbody>
    </table>
  `,v2c58:`
    <h3>HIPAA Privacy Rule</h3>
    <p>
      The <strong>Privacy Rule</strong> (45 CFR Part 160 and Part 164, Subparts A and E) establishes national standards for the protection of individually identifiable health information. It governs <strong>how PHI can be used and disclosed</strong> by covered entities and business associates.
    </p>

    <h4>Patient Rights Under the Privacy Rule</h4>
    <table>
      <thead>
        <tr><th>Right</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Right to Notice of Privacy Practices</strong></td><td>Patients must receive a clear notice explaining how their PHI may be used</td></tr>
        <tr><td><strong>Right to Access</strong></td><td>Right to inspect and obtain a copy of their PHI (within 30 days, extendable by 30)</td></tr>
        <tr><td><strong>Right to Amendment</strong></td><td>Request amendment of inaccurate PHI (within 60 days)</td></tr>
        <tr><td><strong>Right to Accounting of Disclosures</strong></td><td>Right to receive an accounting of disclosures (excluding treatment, payment, and operations)</td></tr>
        <tr><td><strong>Right to Request Restrictions</strong></td><td>Request restrictions on certain uses and disclosures (though the entity is not required to agree, except for self-pay)</td></tr>
        <tr><td><strong>Right to Confidential Communications</strong></td><td>Request alternative means or locations for communication</td></tr>
        <tr><td><strong>Right to a Paper Copy</strong></td><td>Receive a paper copy of the privacy notice on request</td></tr>
      </tbody>
    </table>

    <h4>Permitted Uses and Disclosures</h4>
    <p>PHI can be used or disclosed without patient <strong>authorization</strong> for:</p>
    <ul>
      <li><strong>Treatment:</strong> Coordination of care, referrals, consultations</li>
      <li><strong>Payment:</strong> Billing, claims management, collections</li>
      <li><strong>Healthcare Operations:</strong> Quality assessment, competency assurance, accreditation</li>
      <li><strong>Public Health:</strong> Reporting disease, injury, or death as required by law</li>
      <li><strong>Law Enforcement:</strong> Required by law, court orders, subpoenas, identifying suspects</li>
      <li><strong>Workers' Compensation:</strong> As authorized by law</li>
      <li><strong>Research:</strong> With IRB approval or waiver</li>
    </ul>

    <h4>Requires Patient Authorization</h4>
    <p>Any use or disclosure <strong>not covered</strong> by the permitted categories above requires written patient authorization, including:</p>
    <ul>
      <li>Psychotherapy notes</li>
      <li>Substance abuse treatment records</li>
      <li>Marketing purposes</li>
      <li>Sale of PHI</li>
      <li>Most research uses</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Minimum Necessary Standard</div>
      <p>The Minimum Necessary Standard requires that covered entities limit PHI use, disclosure, and requests to the <strong>minimum necessary</strong> to accomplish the intended purpose. Exceptions apply for treatment (providers can access what they need) and disclosures authorized by the patient.</p>
    </div>
  `,v2c59:`
    <h3>HIPAA Security Rule</h3>
    <p>
      The <strong>Security Rule</strong> (45 CFR Part 164, Subparts A and C) requires appropriate <strong>administrative, physical, and technical safeguards</strong> to ensure the <strong>confidentiality, integrity, and availability (CIA)</strong> of electronic protected health information (ePHI). Unlike the Privacy Rule, the Security Rule is limited to ePHI only.
    </p>

    <h4>Administrative Safeguards (§164.308)</h4>
    <table>
      <thead>
        <tr><th>Standard</th><th>Implementation Specification</th><th>Addressable?</th></tr>
      </thead>
      <tbody>
        <tr><td>Security Management Process</td><td>Risk analysis, risk management, sanction policy, IS activity review</td><td>Required</td></tr>
        <tr><td>Assigned Security Responsibility</td><td>Identify a security official</td><td>Required</td></tr>
        <tr><td>Workforce Security</td><td>Authorization/supervision, termination procedures, clearance procedures</td><td>Required (some addressable)</td></tr>
        <tr><td>Information Access Management</td><td>Isolation of healthcare clearinghouse functions, access authorization, access establishment/ modification</td><td>Required and Addressable</td></tr>
        <tr><td>Security Awareness & Training</td><td>Security reminders, malware protection, login monitoring, password management</td><td>Addressable</td></tr>
        <tr><td>Security Incident Procedures</td><td>Response and reporting of security incidents</td><td>Required</td></tr>
        <tr><td>Contingency Plan</td><td>Data backup, disaster recovery, emergency mode operations, testing, criticality analysis</td><td>Required and Addressable</td></tr>
        <tr><td>Evaluation</td><td>Technical and nontechnical evaluation of Security Rule compliance</td><td>Required</td></tr>
        <tr><td>Business Associate Contracts</td><td>Written contract requiring safeguards for PHI</td><td>Required</td></tr>
      </tbody>
    </table>

    <h4>Physical Safeguards (§164.310)</h4>
    <table>
      <thead>
        <tr><th>Standard</th><th>Implementation Specification</th><th>Addressable?</th></tr>
      </thead>
      <tbody>
        <tr><td>Facility Access Controls</td><td>Contingency operations, facility security plan, access control and validation, maintenance records</td><td>Required and Addressable</td></tr>
        <tr><td>Workstation Use</td><td>Policies governing workstation functions and physical attributes</td><td>Required</td></tr>
        <tr><td>Workstation Security</td><td>Physical safeguards for workstations accessing ePHI</td><td>Required</td></tr>
        <tr><td>Device and Media Controls</td><td>Disposal, media re-use, accountability, data backup/storage</td><td>Required and Addressable</td></tr>
      </tbody>
    </table>

    <h4>Technical Safeguards (§164.312)</h4>
    <table>
      <thead>
        <tr><th>Standard</th><th>Implementation Specification</th><th>Addressable?</th></tr>
      </thead>
      <tbody>
        <tr><td>Access Control</td><td>Unique user ID, emergency access procedure, automatic logoff, encryption and decryption</td><td>Required and Addressable</td></tr>
        <tr><td>Audit Controls</td><td>Hardware, software, and procedural mechanisms to record and examine access and activity</td><td>Required</td></tr>
        <tr><td>Integrity</td><td>Mechanisms to authenticate ePHI, protect from improper alteration or destruction</td><td>Required and Addressable</td></tr>
        <tr><td>Person or Entity Authentication</td><td>Procedures to verify that a person/entity seeking access is who they claim to be</td><td>Required</td></tr>
        <tr><td>Transmission Security</td><td>Integrity controls and encryption for ePHI in transit</td><td>Required and Addressable</td></tr>
      </tbody>
    </table>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Required vs. Addressable</div>
      <p>HIPAA standards are either <strong>Required (R)</strong> — must be implemented — or <strong>Addressable (A)</strong> — the organization must assess whether the specification is reasonable and appropriate. If not, the organization must document why and implement an equivalent alternative measure. "Not applicable" is <strong>not a valid response</strong> for addressable specifications.</p>
    </div>
  `,v2c60:`
    <h3>HIPAA Breach Notification Rule</h3>
    <p>
      The <strong>Breach Notification Rule</strong> (45 CFR §§ 164.400-414) requires covered entities and business associates to provide notification following a <strong>breach of unsecured PHI</strong>. The HITECH Act strengthened these requirements significantly.
    </p>

    <h4>What Constitutes a Breach?</h4>
    <p>A breach is the <strong>unauthorized acquisition, access, use, or disclosure</strong> of PHI that compromises its security or privacy. There are three exceptions:</p>
    <ol>
      <li><strong>Unintentional access:</strong> By an employee or person acting under authority, made in good faith, within scope of authority</li>
      <li><strong>Inadvertent disclosure:</strong> Between authorized persons at the covered entity (or BA) who would not reasonably retain the information</li>
      <li><strong>Unable to retain:</strong> The unauthorized person could not reasonably have retained the information</li>
    </ol>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Risk Assessment for Breaches</div>
      <p>A breach is assumed unless the covered entity demonstrates a <strong>low probability that PHI has been compromised</strong> based on a risk assessment considering: (1) nature and extent of PHI involved, (2) unauthorized person who used or to whom disclosure was made, (3) whether PHI was actually acquired or viewed, and (4) extent to which risk was mitigated.</p>
    </div>

    <h4>Notification Requirements</h4>
    <table>
      <thead>
        <tr><th>Notification Type</th><th>Timeframe</th><th>Threshold</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Individual Notification</strong></td><td><strong>60 days or less</strong> from discovery</td><td>Any breach affecting 500+ individuals; must also notify HHS</td></tr>
        <tr><td><strong>Media Notification</strong></td><td><strong>60 days or less</strong> from discovery</td><td>Breach affecting 500+ residents of a state/jurisdiction</td></tr>
        <tr><td><strong>HHS Secretary Notification</strong></td><td>Annual log for breaches <500 individuals; within 60 days for 500+</td><td>All breaches</td></tr>
      </tbody>
    </table>

    <h4>Notification Content</h4>
    <p>Individual notification must include:</p>
    <ul>
      <li>Description of the breach (what happened, when)</li>
      <li>Types of unsecured PHI involved</li>
      <li>Steps individuals should take to protect themselves</li>
      <li>Description of what the entity is doing to investigate, mitigate, and prevent future breaches</li>
      <li>Contact information for further questions</li>
    </ul>

    <h4>Penalties for Non-Compliance</h4>
    <table>
      <thead>
        <tr><th>Tier</th><th>Annual Maximum</th><th>Circumstances (per violation)</th></tr>
      </thead>
      <tbody>
        <tr><td>Tier 1</td><td>$25,000</td><td>Did not know (and by exercising reasonable diligence would not have known) of the violation</td></tr>
        <tr><td>Tier 2</td><td>$100,000</td><td>Reasonable cause (not willful neglect)</td></tr>
        <tr><td>Tier 3</td><td>$250,000</td><td>Corrected willful neglect within 30 days</td></tr>
        <tr><td>Tier 4</td><td>$1.5 million</td><td>Willful neglect, not corrected within 30 days</td></tr>
      </tbody>
    </table>

    <div class="warning-box">
      <div class="warning-title">⚠️ OCR Enforcement Trends</div>
      <p>The HHS Office for Civil Rights (OCR) has increased enforcement significantly, with penalties exceeding <strong>$100 million</strong> in some recent settlements. The <strong>cybersecurity checklist</strong> (announced 2023) adds security-specific requirements for breach investigations.</p>
    </div>
  `,v2c61:`
    <h3>HIPAA Business Associate Agreements</h3>
    <p>
      A <strong>Business Associate Agreement (BAA)</strong> is a <strong>written contract</strong> between a covered entity and a business associate (or between subcontractors) that specifies how the BA will safeguard PHI. Under the HITECH Act, BAs are now <strong>directly liable</strong> for compliance with certain HIPAA provisions.
    </p>

    <h4>Required BAA Provisions</h4>
    <p>Under 45 CFR §164.504(e), a BAA must include:</p>
    <ul>
      <li><strong>Permitted uses and disclosures:</strong> BA may only use/disclose PHI as permitted by the agreement or required by law</li>
      <li><strong>Safeguard requirements:</strong> BA must implement appropriate safeguards to prevent unauthorized use/disclosure</li>
      <li><strong>Reporting obligations:</strong> BA must report any use/disclosure not provided in the agreement, including breaches</li>
      <li><strong>PHI access:**</strong> Covered entity's right to access PHI from BA as needed</li>
      <li><strong>Amendments:</strong> BA must make internal practices consistent with the agreement</li>
      <li><strong>De-identification:</strong> BA must ensure PHI is de-identified per §164.514 before using for purposes outside the agreement</li>
      <li><strong>Subcontractor requirements:</strong> BA must ensure any subcontractors who access PHI agree to the same restrictions</li>
      <li><strong>Termination:</strong> BA must return or destroy PHI upon termination; if infeasible, extend agreement provisions</li>
    </ul>

    <h4>Business Associate Obligations Under HITECH</h4>
    <table>
      <thead>
        <tr><th>Obligation</th><th>Details</th></tr>
      </thead>
      <tbody>
        <tr><td>Breach Notification</td><td>BAs must notify covered entity of any breach without unreasonable delay (no later than 60 days)</td></tr>
        <tr><td>Security Rule Compliance</td><td>BAs must implement administrative, physical, and technical safeguards</td></tr>
        <tr><td>Privacy Rule Compliance</td><td>BAs have same obligations as covered entities for permitted uses/disclosures</td></tr>
        <tr><td>Enforcement</td><td>OCR can directly enforce against BAs — covered entities may also terminate BAs for violations</td></tr>
        <tr><td>State Law</td><td>BAs must further comply with state laws that are more protective of PHI</td></tr>
      </tbody>
    </table>

    <h4>Common Business Associates</h4>
    <table>
      <thead>
        <tr><th>BA Type</th><th>Examples</th><th>Key Considerations</th></tr>
      </thead>
      <tbody>
        <tr><td>Cloud Hosting</td><td>AWS, Azure, GCP (when hosting PHI)</td><td>Shared responsibility model; ensure BAA is signed</td></tr>
        <tr><td>EHR/EMR Vendors</td><td>Epic, Cerner, Athenahealth</td><td>Data portability, integration security</td></tr>
        <tr><td>Billing/Coding</td><td>Revenue cycle management companies</td><td>Access to full patient records and financial data</td></tr>
        <tr><td>IT Services</td><td>Managed service providers, help desk</td><td>System access, incident response obligations</td></tr>
        <tr><td>Analytics</td><td>Data analytics, population health platforms</td><td>De-identification requirements, data retention</td></tr>
        <tr><td>Legal/Accounting</td><td>Law firms, accounting firms</td><td>Confidentiality, secure document handling</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 Due Diligence for BA Selection</div>
      <p>Before signing a BAA, conduct thorough due diligence: review the BA's <strong>SOC 2 report</strong>, <strong>security certifications</strong>, <strong>incident history</strong>, and <strong>data handling practices</strong>. Include specific security requirements in the BAA, such as encryption standards, incident notification timelines, and right-to-audit clauses.</p>
    </div>
  `,v2c62:`
    <h3>NIST Cybersecurity Framework (CSF) Overview</h3>
    <p>
      The <strong>NIST Cybersecurity Framework (CSF)</strong> is a set of guidelines — developed by the <strong>National Institute of Standards and Technology (NIST)</strong> — to help organizations manage and reduce cybersecurity risk. Originally published in 2014 and updated to <strong>CSF 2.0 in February 2024</strong>, it provides a <strong>voluntary, risk-based approach</strong> to cybersecurity that is widely adopted across industries.
    </p>

    <h4>Key Features of CSF 2.0</h4>
    <ul>
      <li><strong>Broader applicability:</strong> Extended beyond critical infrastructure to <strong>all organizations</strong>, including small businesses</li>
      <li><strong>New Govern function:</strong> Added as a sixth core function to address governance, risk strategy, and supply chain risk management</li>
      <li><strong>Improved usability:</strong> Simplified structure with clearer guidance and implementation examples</li>
      <li><strong>Global alignment:</strong> Harmonized with international frameworks (ISO 27001, NIST 800-53, CIS Controls)</li>
    </ul>

    <h4>Framework Structure</h4>
    <p>The NIST CSF is organized into three main components:</p>
    <ol>
      <li><strong>Core Functions</strong> — High-level strategic categories (6 functions)</li>
      <li><strong>Categories</strong> — Division of each function into logical groups (22 categories)</li>
      <li><strong>Subcategories</strong> — Technical and operational outcomes (106 subcategories in CSF 1.1; expanded in 2.0)</li>
    </ol>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Profiles and Tiers</div>
      <p>Organizations use <strong>Current Profiles</strong> to document their existing cybersecurity posture and <strong>Target Profiles</strong> to define their desired state. <strong>Implementation Tiers</strong> (1-4) provide context on how organizations view cybersecurity risk and the processes in place to manage it.</p>
    </div>
  `,v2c63:`
    <h3>NIST CSF — GOVERN & IDENTIFY Functions</h3>
    <p>
      The <strong>Govern (GV)</strong> and <strong>Identify (ID)</strong> functions form the foundation of a cybersecurity program, establishing organizational context, priorities, and asset understanding.
    </p>

    <h4>Govern Function (New in CSF 2.0)</h4>
    <p>The Govern function establishes the organization's <strong>cybersecurity strategy, expectations, and policy</strong> — informing and supporting each of the other five functions.</p>
    <table>
      <thead>
        <tr><th>Category</th><th>Focus</th></tr>
      </thead>
      <tbody>
        <tr><td>GV.OC — Organizational Context</td><td>Mission priorities, stakeholder expectations, legal/regulatory requirements</td></tr>
        <tr><td>GV.RM — Risk Management Strategy</td><td>Risk appetite, tolerance statements, roles and responsibilities</td></tr>
        <tr><td>GV.RR — Roles, Responsibilities, and Authorities</td><td>Cybersecurity roles, board oversight, accountability</td></tr>
        <tr><td>GV.PO — Policy</td><td>Cybersecurity policy based on context, strategy, and risk</td></tr>
        <tr><td>GV.SC — Cybersecurity Supply Chain Risk Management</td><td>Supply chain risk management program, vendor assessments</td></tr>
      </tbody>
    </table>

    <h4>Identify Function</h4>
    <p>The Identify function helps organizations understand their <strong>business context, resources, and risk</strong> to inform cybersecurity strategy.</p>
    <table>
      <thead>
        <tr><th>Category</th><th>Focus</th></tr>
      </thead>
      <tbody>
        <tr><td>ID.AM — Asset Management</td><td>Inventory of hardware, software, data, systems; mapping data flows</td></tr>
        <tr><td>ID.RA — Risk Assessment</td><td>Identifying threats, vulnerabilities, likelihood, and impact</td></tr>
        <tr><td>ID.IM — Improvement</td><td>Lessons learned, continuous improvement processes</td></tr>
      </tbody>
    </table>

    <h4>Key Activities for ID.AM</h4>
    <ul>
      <li>Maintain inventories of hardware, software, and data assets</li>
      <li>Map and document network architecture and data flows</li>
      <li>Identify and prioritize assets based on criticality</li>
      <li>Establish baseline of expected network operations</li>
      <li>Maintain inventories of external information systems</li>
    </ul>
  `,v2c64:`
    <h3>NIST CSF — PROTECT Function</h3>
    <p>
      The <strong>Protect (PR)</strong> function supports the ability to <strong>ensure delivery of critical services</strong> by implementing appropriate safeguards. Once the organization understands its environment (Identify) and establishes governance, it can deploy protective measures.
    </p>

    <h4>Protect Function Categories</h4>
    <table>
      <thead>
        <tr><th>Category</th><th>Focus</th><th>Key Activities</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>PR.AA — Identity Management, Authentication, and Access Control</strong></td><td>Secure access to assets</td><td>
          <ul>
            <li>Manage identities and credentials</li>
            <li>Enforce least privilege and separation of duties</li>
            <li>Require MFA for privileged and remote access</li>
            <li>Manage physical access to assets</li>
          </ul>
        </td></tr>
        <tr><td><strong>PR.AT — Awareness and Training</strong></td><td>Educate users</td><td>
          <ul>
            <li>Security awareness training for all personnel</li>
            <li>Role-based training for privileged users</li>
            <li>Exercise and testing of awareness</li>
          </ul>
        </td></tr>
        <tr><td><strong>PR.DS — Data Security</strong></td><td>Protect data integrity and confidentiality</td><td>
          <ul>
            <li>Protect data at rest and in transit</li>
            <li>Implement data loss prevention</li>
            <li>Manage data classification and labeling</li>
            <li>Ensure integrity checking and validation</li>
          </ul>
        </td></tr>
        <tr><td><strong>PR.PS — Platform Security</strong></td><td>Manage and secure technology infrastructure</td><td>
          <ul>
            <li>Manage and maintain configurations</li>
            <li>Apply software updates and patches</li>
            <li>Implement logging and monitoring at infrastructure level</li>
          </ul>
        </td></tr>
        <tr><td><strong>PR.IR — Technology Infrastructure Resilience</strong></td><td>Ensure resilience and recovery capability</td><td>
          <ul>
            <li>Implement network protections and segmentation</li>
            <li>Manage technology assets' lifecycle</li>
            <li>Establish and maintain backup and restore processes</li>
          </ul>
        </td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 CSF 2.0 Changes to Protect</div>
      <p>CSF 2.0 expanded the Protect function significantly. The new <strong>Platform Security (PR.PS)</strong> category emphasizes managing the security of hardware, software, and services — reflecting modern cloud-native architectures. <strong>Technology Infrastructure Resilience (PR.IR)</strong> now explicitly addresses backup, continuity, and failover.</p>
    </div>
  `,v2c65:`
    <h3>NIST CSF — DETECT Function</h3>
    <p>
      The <strong>Detect (DE)</strong> function enables timely discovery of cybersecurity events and anomalies. Effective detection requires <strong>continuous monitoring</strong>, <strong>anomaly analysis</strong>, and <strong>well-defined detection processes</strong>.
    </p>

    <h4>Detect Function Categories</h4>
    <table>
      <thead>
        <tr><th>Category</th><th>Focus</th><th>Key Activities</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>DE.CM — Continuous Monitoring</strong></td><td>Monitor networks and assets for anomalies</td><td>
          <ul>
            <li>Monitor networks for potentially adverse events</li>
            <li>Monitor physical environment for anomalies</li>
            <li>Monitor personnel activity for insider threats</li>
            <li>Monitor external service provider activities</li>
            <li>Monitor computing hardware and software for anomalies</li>
            <li>Perform vulnerability scans regularly</li>
          </ul>
        </td></tr>
        <tr><td><strong>DE.AE — Adverse Event Analysis</strong></td><td>Analyze anomalies and indicators of compromise</td><td>
          <ul>
            <li>Establish baseline of expected operations</li>
            <li>Analyze detected anomalies for attack patterns</li>
            <li>Correlate information from multiple sources</li>
            <li>Estimate impact and scope of adverse events</li>
            <li>Establish incident alert thresholds</li>
          </ul>
        </td></tr>
      </tbody>
    </table>

    <h4>Detection Best Practices</h4>
    <ul>
      <li><strong>Deploy SIEM:</strong> Centralize log collection and correlation for real-time threat detection</li>
      <li><strong>Implement EDR:</strong> Endpoint detection and response tools provide visibility into endpoint behavior</li>
      <li><strong>Network monitoring:</strong> Deploy IDS/IPS and network traffic analysis tools</li>
      <li><strong>Threat intelligence:</strong> Integrate threat feeds to detect known indicators of compromise (IOCs)</li>
      <li><strong>User behavior analytics:</strong> Monitor for anomalous user actions and privilege escalation</li>
      <li><strong>24/7 monitoring:</strong> Consider SOC services or MDR for round-the-clock coverage</li>
    </ul>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Mean Time to Detect (MTTD)</div>
      <p><strong>MTTD</strong> measures how long it takes to detect a security incident. The industry average is <strong>194 days</strong> (IBM Cost of a Data Breach 2023). Reducing MTTD is critical — faster detection dramatically reduces the impact and cost of breaches. Aim for MTTD of <strong>days or hours</strong>, not months.</p>
    </div>
  `,v2c66:`
    <h3>NIST CSF — RESPOND & RECOVER Functions</h3>
    <p>
      The <strong>Respond (RS)</strong> and <strong>Recover (RC)</strong> functions address how organizations react to detected cybersecurity incidents and restore services. Together they ensure <strong>business continuity</strong> and <strong>resilience</strong>.
    </p>

    <h4>Respond Function (RS)</h4>
    <table>
      <thead>
        <tr><th>Category</th><th>Focus</th></tr>
      </thead>
      <tbody>
        <tr><td>RS.MA — Incident Management</td><td>Execute incident response plan when incident is detected</td></tr>
        <tr><td>RS.AN — Incident Analysis</td><td>Investigate incidents to determine scope, root cause, and appropriate response</td></tr>
        <tr><td>RS.CO — Incident Response Reporting & Communication</td><td>Share incident information with stakeholders, regulators, and affected parties</td></tr>
        <tr><td>RS.MI — Incident Mitigation</td><td>Contain and mitigate incidents; eliminate attacker presence</td></tr>
      </tbody>
    </table>

    <h4>Recover Function (RC)</h4>
    <table>
      <thead>
        <tr><th>Category</th><th>Focus</th></tr>
      </thead>
      <tbody>
        <tr><td>RC.RP — Incident Recovery Plan Execution</td><td>Execute recovery activities during or after an incident</td></tr>
        <tr><td>RC.CO — Incident Recovery Communication</td><td>Coordinate restoration activities with internal and external stakeholders</td></tr>
      </tbody>
    </table>

    <h4>Incident Response Plan Components</h4>
    <p>A comprehensive IR plan should include:</p>
    <ol>
      <li><strong>Preparation:</strong> IR team formation, tools, communication channels, escalation procedures</li>
      <li><strong>Identification:</strong> Determine if an event is an incident; classify severity</li>
      <li><strong>Containment:</strong> Short-term containment (isolate affected systems) and long-term containment (temporary fixes)</li>
      <li><strong>Eradication:</strong> Remove threat actor, malware, and persistence mechanisms</li>
      <li><strong>Recovery:</strong> Restore systems from backups, validate integrity, return to normal operations</li>
      <li><strong>Lessons Learned:</strong> Post-incident review; update procedures and controls</li>
    </ol>

    <h4>Recovery Planning Best Practices</h4>
    <table>
      <thead>
        <tr><th>Activity</th><th>Frequency</th></tr>
      </thead>
      <tbody>
        <tr><td>Backup testing and restoration drills</td><td>Quarterly</td></tr>
        <tr><td>Tabletop exercises and IR simulations</td><td>Bi-annually</td></tr>
        <tr><td>Full disaster recovery testing</td><td>Annually</td></tr>
        <tr><td>IR plan review and update</td><td>Annually or after significant changes</td></tr>
        <tr><td>Communication plan testing</td><td>Bi-annually</td></tr>
      </tbody>
    </table>

    <div class="warning-box">
      <div class="warning-title">⚠️ Ransomware Considerations</div>
      <p>Modern incident response must account for <strong>ransomware</strong>. Key considerations: maintain <strong>offline/immutable backups</strong>, test restoration regularly, develop specific ransomware response procedures, coordinate with law enforcement (FBI IC3, CISA), and consider legal implications before paying ransom (OFAC sanctions screening).</p>
    </div>

    <h4>CSF 2.0 Govern: Continuous Improvement (RC.IM)</h4>
    <ul>
      <li>Incorporate lessons learned from incidents and exercises</li>
      <li>Update recovery plans based on organizational changes</li>
      <li>Review and adjust risk management strategies</li>
      <li>Communicate improvement activities to relevant stakeholders</li>
    </ul>
  `},Wg={},Gg={},jg={},Ug={},Ka={...Og,...Lg,...Fg,...Bg,...Wg,...Gg,...jg,...Ug},Vg=()=>c.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"})}),Hg=()=>c.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("path",{d:"M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"})}),Kg=()=>c.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})}),Go=()=>c.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"20",height:"20",children:c.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),ic={veda1:{sanskrit:"नभः स्पृशं दीप्तामृतस्य पूर्णः",transliteration:"Nah: Spṛśaṃ Dīptāmṛtasya Pūrṇaḥ",meaning:"Touching the sky, full of radiant nectar"},veda2:{sanskrit:"धर्मो रक्षति रक्षितः",transliteration:"Dharmaḥ Rakṣati Rakṣitaḥ",meaning:"Dharma protects those who protect it"},veda3:{sanskrit:"विद्यादामृतमश्नुते",transliteration:"Vidyād Āmṛtam Aśnute",meaning:"Through knowledge, one attains immortality"},veda4:{sanskrit:"एकं सत् विप्रा बहुधा वदन्ति",transliteration:"Ekam Sat Viprā Bahudhā Vadanti",meaning:"The reality is one, the wise call it by many names"},veda5:{sanskrit:"समुद्राय वरुणाय स्वाहा",transliteration:"Samudrāya Varuṇāya Svāhā",meaning:"Salutations to the Lord of oceans and waters"},veda6:{sanskrit:"अग्निर्मूर्धा जातवेदा अहं ब्राह्मणामृतं क्षरामि",transliteration:"Agnir mūrdhā jātavedā ahaṃ brāhmaṇāmṛtaṃ kṣarāmi",meaning:"I am the fire in the head, the source of immortal knowledge"}};function qg({onNavigate:t}){const e=Object.values(Zr),r=e.reduce((n,i)=>n+i.sections.reduce((o,s)=>o+s.chapters.length,0),0);return c.jsxs("div",{className:"home-page",children:[c.jsxs("div",{className:"welcome-header",children:[c.jsx("h1",{children:"The Security Vedas"}),c.jsx("p",{className:"subtitle",children:"परमं धाम सुरक्षायः"}),c.jsxs("p",{children:["Your celestial guide to cybersecurity wisdom - ",r," sacred chapters across 6 domains"]}),c.jsxs("div",{className:"sanskrit-verse",children:[c.jsx("div",{className:"verse-text",children:"यथा जलं शीतलं चैव गुह्यं च परमं पदम्।"}),c.jsx("div",{className:"verse-text",children:"तथा सूचना-सुरक्षा प्रोक्ता ज्ञातव्या विवेकिभिः।।"}),c.jsx("div",{className:"verse-meaning",children:'"As water is cool and leads to the highest secret place, so is information security - to be understood by the wise."'})]})]}),c.jsx("div",{className:"veda-grid",children:e.map((n,i)=>{const o=n.sections.reduce((l,u)=>l+u.chapters.length,0),s=i+1,a=ic[n.id]||{sanskrit:""};return c.jsxs("div",{className:"glass-card",onClick:()=>t(n.id),children:[c.jsx("div",{className:`card-icon veda-${s}`,children:n.icon}),c.jsx("h3",{children:n.title}),c.jsx("p",{className:"card-desc",children:n.description}),c.jsxs("div",{className:"card-meta",children:[c.jsxs("span",{className:"chapter-count",children:[c.jsx("span",{children:o})," chapters"]}),c.jsxs("span",{className:"chapter-count",children:[c.jsx("span",{children:n.sections.length})," sections"]})]}),a.sanskrit&&c.jsx("div",{className:"sanskrit-footer",children:a.sanskrit})]},n.id)})})]})}function _g({vedaId:t,onNavigate:e,onSelectChapter:r,completedChapters:n,onToggleComplete:i}){const o=Zr[t],s=ic[t]||{sanskrit:"",transliteration:""};return o?c.jsxs("div",{className:"veda-page",children:[c.jsxs("div",{className:"veda-page-header",children:[c.jsxs("button",{className:"back-btn",onClick:()=>e("home"),children:[c.jsx(Go,{})," Return to Sanctuary"]}),c.jsxs("h1",{children:[o.icon," ",o.title]}),s.sanskrit&&c.jsxs("div",{className:"veda-mantra",children:[s.sanskrit,c.jsx("br",{}),c.jsx("span",{style:{fontSize:"1rem",fontStyle:"italic"},children:s.transliteration})]}),c.jsx("p",{children:o.description})]}),c.jsx("div",{className:"sections-grid",children:o.sections.map((a,l)=>c.jsx(Yg,{section:a,sectionIndex:l,vedaId:t,onSelectChapter:r,completedChapters:n,onToggleComplete:i},a.id))})]}):null}function $g({progressPercent:t,completedCount:e,totalChapters:r,completedChapters:n,vedasData:i,onClose:o}){const s=Object.values(i),a=h=>{const f=i[h];if(!f)return{completed:0,total:0};const m=f.sections.flatMap(C=>C.chapters.map(w=>w.id));return{completed:m.filter(C=>n.includes(C)).length,total:m.length}},l=s.map(h=>{const{completed:f,total:m}=a(h.id),S=m>0?Math.round(f/m*100):0;return{...h,completed:f,total:m,percent:S,isComplete:f===m&&m>0}}),u=l.filter(h=>h.isComplete).length;return c.jsx("div",{className:"certification-overlay",onClick:o,children:c.jsxs("div",{className:"certification-modal",onClick:h=>h.stopPropagation(),children:[c.jsx("button",{className:"cert-close-btn",onClick:o,children:"×"}),c.jsxs("div",{className:"cert-header",children:[c.jsx("div",{className:"cert-om",children:"🕉"}),c.jsx("h2",{children:"The Security Vedas"}),c.jsx("p",{className:"cert-subtitle",children:"परमं धाम सुरक्षायः"})]}),c.jsxs("div",{className:"cert-overall-progress",children:[c.jsx("div",{className:"cert-progress-bar",children:c.jsx("div",{className:"cert-progress-fill",style:{width:`${t}%`}})}),c.jsxs("p",{className:"cert-progress-text",children:[e," of ",r," Chapters Completed (",t,"%)"]})]}),c.jsxs("div",{className:"cert-vedas-section",children:[c.jsx("h3",{children:"🎓 Veda Certifications"}),c.jsx("p",{className:"cert-vedas-subtitle",children:"Complete all chapters in a Veda to unlock its certificate"}),c.jsx("div",{className:"cert-vedas-grid",children:l.map(h=>c.jsxs("div",{className:`cert-veda-card ${h.isComplete?"eligible":""}`,children:[c.jsx("div",{className:"cert-veda-icon",children:h.icon}),c.jsxs("div",{className:"cert-veda-info",children:[c.jsx("h4",{children:h.title}),c.jsxs("div",{className:"cert-veda-progress",children:[c.jsx("div",{className:"cert-veda-progress-bar",children:c.jsx("div",{className:"cert-veda-progress-fill",style:{width:`${h.percent}%`}})}),c.jsxs("span",{children:[h.completed,"/",h.total," chapters"]})]})]}),h.isComplete?c.jsx("button",{className:"cert-veda-btn",onClick:()=>alert(`Downloading ${h.title} Certificate!`),children:"📜 Get Certificate"}):c.jsx("div",{className:"cert-pending",children:"In Progress"})]},h.id))})]}),c.jsx("div",{className:"cert-overall",children:u===s.length?c.jsxs("div",{className:"cert-grand-eligible",children:[c.jsx("span",{className:"cert-grand-icon",children:"🏆"}),c.jsx("h3",{children:"Grand Master of Security Vedas"}),c.jsx("p",{children:"You have completed all 6 Vedas! Your cybersecurity knowledge is supreme."}),c.jsx("button",{className:"cert-download-btn",onClick:()=>alert("Downloading Grand Master Certificate!"),children:"🎖️ Download Grand Certificate"})]}):c.jsxs("p",{className:"cert-more",children:["Complete ",s.length-u," more Veda",s.length-u>1?"s":""," for the Grand Master Certificate!"]})})]})})}function Qg({chapter:t,vedaId:e,onNavigate:r,onSelectChapter:n}){const i=Zr[e];if(!t||!i)return c.jsxs("div",{className:"chapter-page",children:[c.jsxs("button",{className:"back-btn",onClick:()=>r("home"),children:[c.jsx(Go,{})," Return to Sanctuary"]}),c.jsx("p",{children:"Chapter not found"})]});let o="";for(const h of i.sections)if(h.chapters.find(f=>f.id===t.id)){o=h.title;break}const s=i.sections.flatMap(h=>h.chapters),a=s.findIndex(h=>h.id===t.id),l=a>0?s[a-1]:null,u=a<s.length-1?s[a+1]:null;return c.jsxs("div",{className:"chapter-page",children:[c.jsxs("button",{className:"back-btn",onClick:()=>r(e),children:[c.jsx(Go,{})," Back to ",i.title]}),c.jsxs("div",{className:"chapter-header",children:[c.jsxs("span",{className:"chapter-veda-badge",children:[i.icon," ",i.title]}),c.jsx("span",{className:"chapter-section-badge",children:o})]}),c.jsx("h1",{className:"chapter-title",children:t.title}),c.jsx("div",{className:"chapter-content",children:Ka[t.id]?c.jsx("div",{dangerouslySetInnerHTML:{__html:Ka[t.id]}}):c.jsxs("div",{className:"chapter-placeholder",children:[c.jsx("h3",{children:"📜 Content Coming Soon"}),c.jsx("p",{children:"This sacred knowledge is being written. Check back soon for comprehensive coverage of:"}),c.jsxs("ul",{children:[c.jsx("li",{children:"Key concepts and fundamentals"}),c.jsx("li",{children:"Best practices and implementation"}),c.jsx("li",{children:"Real-world examples and scenarios"}),c.jsx("li",{children:"Tools and techniques"})]})]})}),c.jsxs("div",{className:"chapter-nav",children:[l?c.jsxs("button",{className:"nav-btn nav-prev",onClick:()=>n(l,e),children:[c.jsx("span",{className:"nav-arrow",children:"←"}),c.jsx("div",{className:"nav-label",children:"Previous"}),c.jsx("div",{className:"nav-title",children:l.title})]}):c.jsx("span",{}),u?c.jsxs("button",{className:"nav-btn nav-next",onClick:()=>n(u,e),children:[c.jsx("div",{className:"nav-label",children:"Next"}),c.jsx("div",{className:"nav-title",children:u.title}),c.jsx("span",{className:"nav-arrow",children:"→"})]}):c.jsx("span",{})]}),c.jsxs("div",{className:"chapter-meta",children:[c.jsxs("span",{className:"meta-item",children:["🆔 ",t.id]}),c.jsxs("span",{className:"meta-item",children:["📚 ",i.title]}),c.jsxs("span",{className:"meta-item",children:["📖 ",a+1," / ",s.length]})]})]})}function Yg({section:t,sectionIndex:e,vedaId:r,onSelectChapter:n,completedChapters:i,onToggleComplete:o}){const[s,a]=X.useState(!1);return c.jsxs("div",{className:`section-card ${s?"expanded":""}`,onClick:()=>a(!s),children:[c.jsxs("div",{className:"section-header",children:[c.jsxs("h3",{children:[c.jsx("span",{className:"section-icon",children:t.icon}),t.title]}),c.jsx("span",{className:"chevron",children:s?"✦":"+"})]}),c.jsx("div",{className:"chapter-list",children:c.jsx("div",{className:"chapter-scroll-container",children:c.jsx("div",{className:"chapter-items",children:t.chapters.map((l,u)=>c.jsxs("div",{className:`chapter-item ${i.includes(l.id)?"completed":""}`,onClick:h=>{h.stopPropagation(),n(l,r)},children:[c.jsx("span",{className:"chapter-num",children:String(u+1).padStart(2,"0")}),c.jsx("span",{className:"chapter-title-text",children:l.title}),c.jsx("span",{className:"chapter-check",onClick:h=>{h.stopPropagation(),o(l.id)},title:i.includes(l.id)?"Mark as incomplete":"Mark as complete",children:"✓"})]},l.id))})})})]})}function Jg({onClose:t,onSearch:e,chapters:r}){const[n,i]=X.useState(""),o=X.useMemo(()=>{if(!n.trim())return[];const s=n.toLowerCase();return r.filter(a=>a.title.toLowerCase().includes(s)||a.desc.toLowerCase().includes(s)).slice(0,10)},[n,r]);return X.useEffect(()=>{const s=a=>{a.key==="Escape"&&t()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[t]),c.jsx("div",{className:"search-overlay",onClick:t,children:c.jsxs("div",{className:"search-modal",onClick:s=>s.stopPropagation(),children:[c.jsxs("div",{className:"search-input-wrapper",children:[c.jsx(Kg,{}),c.jsx("input",{type:"text",placeholder:"Search the sacred texts...",value:n,onChange:s=>i(s.target.value),autoFocus:!0}),c.jsx("span",{className:"search-shortcut",children:"ESC"})]}),c.jsxs("div",{className:"search-results",children:[n&&o.length===0&&c.jsx("div",{className:"search-no-results",children:"No wisdom found in the archives"}),o.map(s=>c.jsxs("div",{className:"search-result-item",onClick:()=>{e(s.title),t()},children:[c.jsx("h4",{children:s.title}),c.jsxs("p",{children:[s.vedaTitle," - ",s.sectionTitle]})]},s.id))]})]})})}function Zg(){const[t,e]=X.useState(()=>localStorage.getItem("theme")||"dark"),[r,n]=X.useState("home"),[i,o]=X.useState(null),[s,a]=X.useState(null),[l,u]=X.useState(!1),[h,f]=X.useState(!1),[m,S]=X.useState(()=>{const A=localStorage.getItem("completedChapters");return A?JSON.parse(A):[]}),C=X.useMemo(()=>zg(),[]),w=C.length,z=m.length,g=Math.round(z/w*100),d=A=>{S(b=>{const M=b.includes(A)?b.filter(O=>O!==A):[...b,A];return localStorage.setItem("completedChapters",JSON.stringify(M)),M}),(g===99||g===100)&&setTimeout(()=>f(!0),500)};X.useEffect(()=>{document.documentElement.setAttribute("data-theme",t),localStorage.setItem("theme",t)},[t]),X.useEffect(()=>{const A=b=>{(b.metaKey||b.ctrlKey)&&b.key==="k"&&(b.preventDefault(),u(!0))};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[]);const p=()=>{e(A=>A==="dark"?"light":"dark")},y=(A,b)=>{o(A),a(b)},P=A=>{n(A),o(null),a(null)};return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"bg-mesh",children:[c.jsx("div",{className:"floating-orb orb-1"}),c.jsx("div",{className:"floating-orb orb-2"}),c.jsx("div",{className:"floating-orb orb-3"}),c.jsx("div",{className:"floating-orb orb-4"}),c.jsx("div",{className:"floating-orb orb-5"}),c.jsx("div",{className:"floating-orb orb-6"}),c.jsx("div",{className:"aurora"}),c.jsxs("div",{className:"stars",children:[c.jsx("div",{className:"star"}),c.jsx("div",{className:"star"}),c.jsx("div",{className:"star"}),c.jsx("div",{className:"star"}),c.jsx("div",{className:"star"}),c.jsx("div",{className:"star"}),c.jsx("div",{className:"star"}),c.jsx("div",{className:"star"}),c.jsx("div",{className:"star"}),c.jsx("div",{className:"star"}),c.jsx("div",{className:"star"}),c.jsx("div",{className:"star"})]}),c.jsx("div",{className:"shooting-star"}),c.jsx("div",{className:"shooting-star"})]}),c.jsxs("header",{className:"app-header",children:[c.jsxs("div",{className:"header-brand",onClick:()=>P("home"),children:[c.jsx("span",{className:"header-om",children:"🕉"}),c.jsx("span",{className:"header-title",children:"The Security Vedas"})]}),c.jsxs("div",{className:"header-actions",children:[c.jsxs("div",{className:"progress-indicator",onClick:()=>f(!0),title:"View Progress",children:[c.jsxs("div",{className:"progress-ring",children:[c.jsxs("svg",{viewBox:"0 0 36 36",children:[c.jsx("path",{className:"progress-bg",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"}),c.jsx("path",{className:"progress-fill",strokeDasharray:`${g}, 100`,d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"})]}),c.jsxs("span",{className:"progress-text",children:[g,"%"]})]}),c.jsx("span",{className:"progress-label",children:"Progress"})]}),c.jsx("button",{className:"header-btn search-btn",onClick:()=>u(!0),title:"Search",children:c.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"20",height:"20",children:c.jsx("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})})}),c.jsx("button",{className:"header-btn theme-btn",onClick:p,title:"Toggle theme",children:t==="dark"?c.jsx(Vg,{}):c.jsx(Hg,{})})]})]}),c.jsxs("main",{className:"main-content full-width",children:[i?c.jsx(Qg,{chapter:i,vedaId:s,onNavigate:P,onSelectChapter:y}):r==="home"?c.jsx(qg,{onNavigate:P}):c.jsx(_g,{vedaId:r,onNavigate:P,onSelectChapter:y,completedChapters:m,onToggleComplete:d}),c.jsx("footer",{className:"app-footer",children:c.jsxs("div",{className:"footer-content",children:[c.jsx("div",{className:"footer-om",children:"🕉"}),c.jsxs("div",{className:"footer-text",children:[c.jsx("p",{className:"footer-title",children:"The Security Vedas"}),c.jsx("p",{className:"footer-subtitle",children:"परमं धाम सुरक्षायः"})]}),c.jsx("div",{className:"footer-line"}),c.jsxs("div",{className:"footercredits",children:[c.jsxs("p",{children:["Crafted with 🙏 by ",c.jsx("strong",{children:"Aditya [ th3-v3ng34nc3 ]"})]}),c.jsx("p",{className:"footer-motto",children:"सत्यं वद। धर्मं चर। | Speak truth. Follow dharma."})]}),c.jsx("div",{className:"footer-year",children:"© 2026"})]})})]}),h&&c.jsx($g,{progressPercent:g,completedCount:z,totalChapters:w,completedChapters:m,vedasData:Zr,onClose:()=>f(!1)}),l&&c.jsx(Jg,{onClose:()=>u(!1),onSearch:A=>{var M;const b=C.find(O=>O.title===A);if(b){const O=`veda${((M=b.vedaTitle.match(/(\d+)/))==null?void 0:M[1])||1}`;o(b),a(O)}u(!1)},chapters:C})]})}qi.createRoot(document.getElementById("root")).render(c.jsx(wc.StrictMode,{children:c.jsx(Zg,{})}));
