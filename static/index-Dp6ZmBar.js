function Qc(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function Wc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var va={exports:{}},dl={},xa={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rr=Symbol.for("react.element"),Vc=Symbol.for("react.portal"),Hc=Symbol.for("react.fragment"),Yc=Symbol.for("react.strict_mode"),Gc=Symbol.for("react.profiler"),Kc=Symbol.for("react.provider"),Xc=Symbol.for("react.context"),qc=Symbol.for("react.forward_ref"),Zc=Symbol.for("react.suspense"),Jc=Symbol.for("react.memo"),ed=Symbol.for("react.lazy"),Js=Symbol.iterator;function td(e){return e===null||typeof e!="object"?null:(e=Js&&e[Js]||e["@@iterator"],typeof e=="function"?e:null)}var ya={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wa=Object.assign,ka={};function fn(e,t,n){this.props=e,this.context=t,this.refs=ka,this.updater=n||ya}fn.prototype.isReactComponent={};fn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ja(){}ja.prototype=fn.prototype;function ts(e,t,n){this.props=e,this.context=t,this.refs=ka,this.updater=n||ya}var ns=ts.prototype=new ja;ns.constructor=ts;wa(ns,fn.prototype);ns.isPureReactComponent=!0;var eo=Array.isArray,Sa=Object.prototype.hasOwnProperty,rs={current:null},Na={key:!0,ref:!0,__self:!0,__source:!0};function Ca(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Sa.call(t,r)&&!Na.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];l.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:rr,type:e,key:i,ref:o,props:l,_owner:rs.current}}function nd(e,t){return{$$typeof:rr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ls(e){return typeof e=="object"&&e!==null&&e.$$typeof===rr}function rd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var to=/\/+/g;function Rl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rd(""+e.key):t.toString(36)}function br(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case rr:case Vc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Rl(o,0):r,eo(l)?(n="",e!=null&&(n=e.replace(to,"$&/")+"/"),br(l,t,n,"",function(u){return u})):l!=null&&(ls(l)&&(l=nd(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(to,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",eo(e))for(var a=0;a<e.length;a++){i=e[a];var c=r+Rl(i,a);o+=br(i,t,n,c,l)}else if(c=td(e),typeof c=="function")for(e=c.call(e),a=0;!(i=e.next()).done;)i=i.value,c=r+Rl(i,a++),o+=br(i,t,n,c,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function dr(e,t,n){if(e==null)return e;var r=[],l=0;return br(e,r,"","",function(i){return t.call(n,i,l++)}),r}function ld(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},_r={transition:null},id={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:_r,ReactCurrentOwner:rs};function Ea(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:dr,forEach:function(e,t,n){dr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return dr(e,function(){t++}),t},toArray:function(e){return dr(e,function(t){return t})||[]},only:function(e){if(!ls(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=fn;T.Fragment=Hc;T.Profiler=Gc;T.PureComponent=ts;T.StrictMode=Yc;T.Suspense=Zc;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=id;T.act=Ea;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=wa({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=rs.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)Sa.call(t,c)&&!Na.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:rr,type:e.type,key:l,ref:i,props:r,_owner:o}};T.createContext=function(e){return e={$$typeof:Xc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Kc,_context:e},e.Consumer=e};T.createElement=Ca;T.createFactory=function(e){var t=Ca.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:qc,render:e}};T.isValidElement=ls;T.lazy=function(e){return{$$typeof:ed,_payload:{_status:-1,_result:e},_init:ld}};T.memo=function(e,t){return{$$typeof:Jc,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=_r.transition;_r.transition={};try{e()}finally{_r.transition=t}};T.unstable_act=Ea;T.useCallback=function(e,t){return ue.current.useCallback(e,t)};T.useContext=function(e){return ue.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};T.useEffect=function(e,t){return ue.current.useEffect(e,t)};T.useId=function(){return ue.current.useId()};T.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return ue.current.useMemo(e,t)};T.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};T.useRef=function(e){return ue.current.useRef(e)};T.useState=function(e){return ue.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return ue.current.useTransition()};T.version="18.3.1";xa.exports=T;var N=xa.exports;const Pa=Wc(N),sd=Qc({__proto__:null,default:Pa},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var od=N,ad=Symbol.for("react.element"),ud=Symbol.for("react.fragment"),cd=Object.prototype.hasOwnProperty,dd=od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fd={key:!0,ref:!0,__self:!0,__source:!0};function ba(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)cd.call(t,r)&&!fd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:ad,type:e,key:i,ref:o,props:l,_owner:dd.current}}dl.Fragment=ud;dl.jsx=ba;dl.jsxs=ba;va.exports=dl;var s=va.exports,_a={exports:{}},je={},za={exports:{}},La={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,z){var R=P.length;P.push(z);e:for(;0<R;){var V=R-1>>>1,q=P[V];if(0<l(q,z))P[V]=z,P[R]=q,R=V;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var z=P[0],R=P.pop();if(R!==z){P[0]=R;e:for(var V=0,q=P.length,ur=q>>>1;V<ur;){var wt=2*(V+1)-1,Ll=P[wt],kt=wt+1,cr=P[kt];if(0>l(Ll,R))kt<q&&0>l(cr,Ll)?(P[V]=cr,P[kt]=R,V=kt):(P[V]=Ll,P[wt]=R,V=wt);else if(kt<q&&0>l(cr,R))P[V]=cr,P[kt]=R,V=kt;else break e}}return z}function l(P,z){var R=P.sortIndex-z.sortIndex;return R!==0?R:P.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var c=[],u=[],m=1,h=null,g=3,w=!1,y=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=P)r(u),z.sortIndex=z.expirationTime,t(c,z);else break;z=n(u)}}function x(P){if(v=!1,p(P),!y)if(n(c)!==null)y=!0,_l(S);else{var z=n(u);z!==null&&zl(x,z.startTime-P)}}function S(P,z){y=!1,v&&(v=!1,f(_),_=-1),w=!0;var R=g;try{for(p(z),h=n(c);h!==null&&(!(h.expirationTime>z)||P&&!de());){var V=h.callback;if(typeof V=="function"){h.callback=null,g=h.priorityLevel;var q=V(h.expirationTime<=z);z=e.unstable_now(),typeof q=="function"?h.callback=q:h===n(c)&&r(c),p(z)}else r(c);h=n(c)}if(h!==null)var ur=!0;else{var wt=n(u);wt!==null&&zl(x,wt.startTime-z),ur=!1}return ur}finally{h=null,g=R,w=!1}}var b=!1,E=null,_=-1,F=5,L=-1;function de(){return!(e.unstable_now()-L<F)}function mn(){if(E!==null){var P=e.unstable_now();L=P;var z=!0;try{z=E(!0,P)}finally{z?gn():(b=!1,E=null)}}else b=!1}var gn;if(typeof d=="function")gn=function(){d(mn)};else if(typeof MessageChannel<"u"){var Zs=new MessageChannel,Uc=Zs.port2;Zs.port1.onmessage=mn,gn=function(){Uc.postMessage(null)}}else gn=function(){k(mn,0)};function _l(P){E=P,b||(b=!0,gn())}function zl(P,z){_=k(function(){P(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,_l(S))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(P){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var R=g;g=z;try{return P()}finally{g=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,z){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var R=g;g=P;try{return z()}finally{g=R}},e.unstable_scheduleCallback=function(P,z,R){var V=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?V+R:V):R=V,P){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=R+q,P={id:m++,callback:z,priorityLevel:P,startTime:R,expirationTime:q,sortIndex:-1},R>V?(P.sortIndex=R,t(u,P),n(c)===null&&P===n(u)&&(v?(f(_),_=-1):v=!0,zl(x,R-V))):(P.sortIndex=q,t(c,P),y||w||(y=!0,_l(S))),P},e.unstable_shouldYield=de,e.unstable_wrapCallback=function(P){var z=g;return function(){var R=g;g=z;try{return P.apply(this,arguments)}finally{g=R}}}})(La);za.exports=La;var pd=za.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd=N,ke=pd;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ra=new Set,Dn={};function Mt(e,t){ln(e,t),ln(e+"Capture",t)}function ln(e,t){for(Dn[e]=t,e=0;e<t.length;e++)Ra.add(t[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ii=Object.prototype.hasOwnProperty,md=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,no={},ro={};function gd(e){return ii.call(ro,e)?!0:ii.call(no,e)?!1:md.test(e)?ro[e]=!0:(no[e]=!0,!1)}function vd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xd(e,t,n,r){if(t===null||typeof t>"u"||vd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var is=/[\-:]([a-z])/g;function ss(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(is,ss);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(is,ss);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(is,ss);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function os(e,t,n,r){var l=ne.hasOwnProperty(t)?ne[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(xd(t,n,l,r)&&(n=null),r||l===null?gd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qe=hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fr=Symbol.for("react.element"),Bt=Symbol.for("react.portal"),At=Symbol.for("react.fragment"),as=Symbol.for("react.strict_mode"),si=Symbol.for("react.profiler"),Ta=Symbol.for("react.provider"),Ma=Symbol.for("react.context"),us=Symbol.for("react.forward_ref"),oi=Symbol.for("react.suspense"),ai=Symbol.for("react.suspense_list"),cs=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),Ia=Symbol.for("react.offscreen"),lo=Symbol.iterator;function vn(e){return e===null||typeof e!="object"?null:(e=lo&&e[lo]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Tl;function Cn(e){if(Tl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Tl=t&&t[1]||""}return`
`+Tl+e}var Ml=!1;function Il(e,t){if(!e||Ml)return"";Ml=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var c=`
`+l[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=a);break}}}finally{Ml=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cn(e):""}function yd(e){switch(e.tag){case 5:return Cn(e.type);case 16:return Cn("Lazy");case 13:return Cn("Suspense");case 19:return Cn("SuspenseList");case 0:case 2:case 15:return e=Il(e.type,!1),e;case 11:return e=Il(e.type.render,!1),e;case 1:return e=Il(e.type,!0),e;default:return""}}function ui(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case At:return"Fragment";case Bt:return"Portal";case si:return"Profiler";case as:return"StrictMode";case oi:return"Suspense";case ai:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ma:return(e.displayName||"Context")+".Consumer";case Ta:return(e._context.displayName||"Context")+".Provider";case us:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cs:return t=e.displayName||null,t!==null?t:ui(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return ui(e(t))}catch{}}return null}function wd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ui(t);case 8:return t===as?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oa(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kd(e){var t=Oa(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function pr(e){e._valueTracker||(e._valueTracker=kd(e))}function Fa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Oa(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ci(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function io(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Da(e,t){t=t.checked,t!=null&&os(e,"checked",t,!1)}function di(e,t){Da(e,t);var n=mt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fi(e,t.type,n):t.hasOwnProperty("defaultValue")&&fi(e,t.type,mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function so(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fi(e,t,n){(t!=="number"||Br(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var En=Array.isArray;function Zt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function pi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(En(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mt(n)}}function $a(e,t){var n=mt(t.value),r=mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ao(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ba(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ba(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hr,Aa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(hr=hr||document.createElement("div"),hr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=hr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $n(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jd=["Webkit","ms","Moz","O"];Object.keys(_n).forEach(function(e){jd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_n[t]=_n[e]})});function Ua(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_n.hasOwnProperty(e)&&_n[e]?(""+t).trim():t+"px"}function Qa(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ua(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Sd=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mi(e,t){if(t){if(Sd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function gi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vi=null;function ds(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xi=null,Jt=null,en=null;function uo(e){if(e=sr(e)){if(typeof xi!="function")throw Error(j(280));var t=e.stateNode;t&&(t=gl(t),xi(e.stateNode,e.type,t))}}function Wa(e){Jt?en?en.push(e):en=[e]:Jt=e}function Va(){if(Jt){var e=Jt,t=en;if(en=Jt=null,uo(e),t)for(e=0;e<t.length;e++)uo(t[e])}}function Ha(e,t){return e(t)}function Ya(){}var Ol=!1;function Ga(e,t,n){if(Ol)return e(t,n);Ol=!0;try{return Ha(e,t,n)}finally{Ol=!1,(Jt!==null||en!==null)&&(Ya(),Va())}}function Bn(e,t){var n=e.stateNode;if(n===null)return null;var r=gl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var yi=!1;if(Ye)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){yi=!0}}),window.addEventListener("test",xn,xn),window.removeEventListener("test",xn,xn)}catch{yi=!1}function Nd(e,t,n,r,l,i,o,a,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var zn=!1,Ar=null,Ur=!1,wi=null,Cd={onError:function(e){zn=!0,Ar=e}};function Ed(e,t,n,r,l,i,o,a,c){zn=!1,Ar=null,Nd.apply(Cd,arguments)}function Pd(e,t,n,r,l,i,o,a,c){if(Ed.apply(this,arguments),zn){if(zn){var u=Ar;zn=!1,Ar=null}else throw Error(j(198));Ur||(Ur=!0,wi=u)}}function It(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ka(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function co(e){if(It(e)!==e)throw Error(j(188))}function bd(e){var t=e.alternate;if(!t){if(t=It(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return co(l),e;if(i===r)return co(l),t;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Xa(e){return e=bd(e),e!==null?qa(e):null}function qa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qa(e);if(t!==null)return t;e=e.sibling}return null}var Za=ke.unstable_scheduleCallback,fo=ke.unstable_cancelCallback,_d=ke.unstable_shouldYield,zd=ke.unstable_requestPaint,H=ke.unstable_now,Ld=ke.unstable_getCurrentPriorityLevel,fs=ke.unstable_ImmediatePriority,Ja=ke.unstable_UserBlockingPriority,Qr=ke.unstable_NormalPriority,Rd=ke.unstable_LowPriority,eu=ke.unstable_IdlePriority,fl=null,Be=null;function Td(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(fl,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:Od,Md=Math.log,Id=Math.LN2;function Od(e){return e>>>=0,e===0?32:31-(Md(e)/Id|0)|0}var mr=64,gr=4194304;function Pn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~l;a!==0?r=Pn(a):(i&=o,i!==0&&(r=Pn(i)))}else o=n&~l,o!==0?r=Pn(o):i!==0&&(r=Pn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Me(t),l=1<<n,r|=e[n],t&=~l;return r}function Fd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Me(i),a=1<<o,c=l[o];c===-1?(!(a&n)||a&r)&&(l[o]=Fd(a,t)):c<=t&&(e.expiredLanes|=a),i&=~a}}function ki(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function tu(){var e=mr;return mr<<=1,!(mr&4194240)&&(mr=64),e}function Fl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function lr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Me(t),e[t]=n}function $d(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Me(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function ps(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Me(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var I=0;function nu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ru,hs,lu,iu,su,ji=!1,vr=[],st=null,ot=null,at=null,An=new Map,Un=new Map,tt=[],Bd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function po(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":ot=null;break;case"mouseover":case"mouseout":at=null;break;case"pointerover":case"pointerout":An.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Un.delete(t.pointerId)}}function yn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=sr(t),t!==null&&hs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ad(e,t,n,r,l){switch(t){case"focusin":return st=yn(st,e,t,n,r,l),!0;case"dragenter":return ot=yn(ot,e,t,n,r,l),!0;case"mouseover":return at=yn(at,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return An.set(i,yn(An.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Un.set(i,yn(Un.get(i)||null,e,t,n,r,l)),!0}return!1}function ou(e){var t=Nt(e.target);if(t!==null){var n=It(t);if(n!==null){if(t=n.tag,t===13){if(t=Ka(n),t!==null){e.blockedOn=t,su(e.priority,function(){lu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Si(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vi=r,n.target.dispatchEvent(r),vi=null}else return t=sr(n),t!==null&&hs(t),e.blockedOn=n,!1;t.shift()}return!0}function ho(e,t,n){zr(e)&&n.delete(t)}function Ud(){ji=!1,st!==null&&zr(st)&&(st=null),ot!==null&&zr(ot)&&(ot=null),at!==null&&zr(at)&&(at=null),An.forEach(ho),Un.forEach(ho)}function wn(e,t){e.blockedOn===t&&(e.blockedOn=null,ji||(ji=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,Ud)))}function Qn(e){function t(l){return wn(l,e)}if(0<vr.length){wn(vr[0],e);for(var n=1;n<vr.length;n++){var r=vr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(st!==null&&wn(st,e),ot!==null&&wn(ot,e),at!==null&&wn(at,e),An.forEach(t),Un.forEach(t),n=0;n<tt.length;n++)r=tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tt.length&&(n=tt[0],n.blockedOn===null);)ou(n),n.blockedOn===null&&tt.shift()}var tn=qe.ReactCurrentBatchConfig,Vr=!0;function Qd(e,t,n,r){var l=I,i=tn.transition;tn.transition=null;try{I=1,ms(e,t,n,r)}finally{I=l,tn.transition=i}}function Wd(e,t,n,r){var l=I,i=tn.transition;tn.transition=null;try{I=4,ms(e,t,n,r)}finally{I=l,tn.transition=i}}function ms(e,t,n,r){if(Vr){var l=Si(e,t,n,r);if(l===null)Yl(e,t,r,Hr,n),po(e,r);else if(Ad(l,e,t,n,r))r.stopPropagation();else if(po(e,r),t&4&&-1<Bd.indexOf(e)){for(;l!==null;){var i=sr(l);if(i!==null&&ru(i),i=Si(e,t,n,r),i===null&&Yl(e,t,r,Hr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Yl(e,t,r,null,n)}}var Hr=null;function Si(e,t,n,r){if(Hr=null,e=ds(r),e=Nt(e),e!==null)if(t=It(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ka(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Hr=e,null}function au(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ld()){case fs:return 1;case Ja:return 4;case Qr:case Rd:return 16;case eu:return 536870912;default:return 16}default:return 16}}var rt=null,gs=null,Lr=null;function uu(){if(Lr)return Lr;var e,t=gs,n=t.length,r,l="value"in rt?rt.value:rt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Lr=l.slice(e,1<r?1-r:void 0)}function Rr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xr(){return!0}function mo(){return!1}function Se(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?xr:mo,this.isPropagationStopped=mo,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xr)},persist:function(){},isPersistent:xr}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vs=Se(pn),ir=Q({},pn,{view:0,detail:0}),Vd=Se(ir),Dl,$l,kn,pl=Q({},ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kn&&(kn&&e.type==="mousemove"?(Dl=e.screenX-kn.screenX,$l=e.screenY-kn.screenY):$l=Dl=0,kn=e),Dl)},movementY:function(e){return"movementY"in e?e.movementY:$l}}),go=Se(pl),Hd=Q({},pl,{dataTransfer:0}),Yd=Se(Hd),Gd=Q({},ir,{relatedTarget:0}),Bl=Se(Gd),Kd=Q({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),Xd=Se(Kd),qd=Q({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zd=Se(qd),Jd=Q({},pn,{data:0}),vo=Se(Jd),ef={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nf[e])?!!t[e]:!1}function xs(){return rf}var lf=Q({},ir,{key:function(e){if(e.key){var t=ef[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xs,charCode:function(e){return e.type==="keypress"?Rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sf=Se(lf),of=Q({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xo=Se(of),af=Q({},ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xs}),uf=Se(af),cf=Q({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),df=Se(cf),ff=Q({},pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pf=Se(ff),hf=[9,13,27,32],ys=Ye&&"CompositionEvent"in window,Ln=null;Ye&&"documentMode"in document&&(Ln=document.documentMode);var mf=Ye&&"TextEvent"in window&&!Ln,cu=Ye&&(!ys||Ln&&8<Ln&&11>=Ln),yo=" ",wo=!1;function du(e,t){switch(e){case"keyup":return hf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ut=!1;function gf(e,t){switch(e){case"compositionend":return fu(t);case"keypress":return t.which!==32?null:(wo=!0,yo);case"textInput":return e=t.data,e===yo&&wo?null:e;default:return null}}function vf(e,t){if(Ut)return e==="compositionend"||!ys&&du(e,t)?(e=uu(),Lr=gs=rt=null,Ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cu&&t.locale!=="ko"?null:t.data;default:return null}}var xf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ko(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xf[e.type]:t==="textarea"}function pu(e,t,n,r){Wa(r),t=Yr(t,"onChange"),0<t.length&&(n=new vs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Rn=null,Wn=null;function yf(e){Nu(e,0)}function hl(e){var t=Vt(e);if(Fa(t))return e}function wf(e,t){if(e==="change")return t}var hu=!1;if(Ye){var Al;if(Ye){var Ul="oninput"in document;if(!Ul){var jo=document.createElement("div");jo.setAttribute("oninput","return;"),Ul=typeof jo.oninput=="function"}Al=Ul}else Al=!1;hu=Al&&(!document.documentMode||9<document.documentMode)}function So(){Rn&&(Rn.detachEvent("onpropertychange",mu),Wn=Rn=null)}function mu(e){if(e.propertyName==="value"&&hl(Wn)){var t=[];pu(t,Wn,e,ds(e)),Ga(yf,t)}}function kf(e,t,n){e==="focusin"?(So(),Rn=t,Wn=n,Rn.attachEvent("onpropertychange",mu)):e==="focusout"&&So()}function jf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hl(Wn)}function Sf(e,t){if(e==="click")return hl(t)}function Nf(e,t){if(e==="input"||e==="change")return hl(t)}function Cf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:Cf;function Vn(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ii.call(t,l)||!Oe(e[l],t[l]))return!1}return!0}function No(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Co(e,t){var n=No(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=No(n)}}function gu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vu(){for(var e=window,t=Br();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Br(e.document)}return t}function ws(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ef(e){var t=vu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gu(n.ownerDocument.documentElement,n)){if(r!==null&&ws(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Co(n,i);var o=Co(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pf=Ye&&"documentMode"in document&&11>=document.documentMode,Qt=null,Ni=null,Tn=null,Ci=!1;function Eo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ci||Qt==null||Qt!==Br(r)||(r=Qt,"selectionStart"in r&&ws(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tn&&Vn(Tn,r)||(Tn=r,r=Yr(Ni,"onSelect"),0<r.length&&(t=new vs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qt)))}function yr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wt={animationend:yr("Animation","AnimationEnd"),animationiteration:yr("Animation","AnimationIteration"),animationstart:yr("Animation","AnimationStart"),transitionend:yr("Transition","TransitionEnd")},Ql={},xu={};Ye&&(xu=document.createElement("div").style,"AnimationEvent"in window||(delete Wt.animationend.animation,delete Wt.animationiteration.animation,delete Wt.animationstart.animation),"TransitionEvent"in window||delete Wt.transitionend.transition);function ml(e){if(Ql[e])return Ql[e];if(!Wt[e])return e;var t=Wt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xu)return Ql[e]=t[n];return e}var yu=ml("animationend"),wu=ml("animationiteration"),ku=ml("animationstart"),ju=ml("transitionend"),Su=new Map,Po="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vt(e,t){Su.set(e,t),Mt(t,[e])}for(var Wl=0;Wl<Po.length;Wl++){var Vl=Po[Wl],bf=Vl.toLowerCase(),_f=Vl[0].toUpperCase()+Vl.slice(1);vt(bf,"on"+_f)}vt(yu,"onAnimationEnd");vt(wu,"onAnimationIteration");vt(ku,"onAnimationStart");vt("dblclick","onDoubleClick");vt("focusin","onFocus");vt("focusout","onBlur");vt(ju,"onTransitionEnd");ln("onMouseEnter",["mouseout","mouseover"]);ln("onMouseLeave",["mouseout","mouseover"]);ln("onPointerEnter",["pointerout","pointerover"]);ln("onPointerLeave",["pointerout","pointerover"]);Mt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zf=new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));function bo(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Pd(r,t,void 0,e),e.currentTarget=null}function Nu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==i&&l.isPropagationStopped())break e;bo(l,a,u),i=c}else for(o=0;o<r.length;o++){if(a=r[o],c=a.instance,u=a.currentTarget,a=a.listener,c!==i&&l.isPropagationStopped())break e;bo(l,a,u),i=c}}}if(Ur)throw e=wi,Ur=!1,wi=null,e}function D(e,t){var n=t[zi];n===void 0&&(n=t[zi]=new Set);var r=e+"__bubble";n.has(r)||(Cu(t,e,2,!1),n.add(r))}function Hl(e,t,n){var r=0;t&&(r|=4),Cu(n,e,r,t)}var wr="_reactListening"+Math.random().toString(36).slice(2);function Hn(e){if(!e[wr]){e[wr]=!0,Ra.forEach(function(n){n!=="selectionchange"&&(zf.has(n)||Hl(n,!1,e),Hl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wr]||(t[wr]=!0,Hl("selectionchange",!1,t))}}function Cu(e,t,n,r){switch(au(t)){case 1:var l=Qd;break;case 4:l=Wd;break;default:l=ms}n=l.bind(null,t,n,e),l=void 0,!yi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Yl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;o=o.return}for(;a!==null;){if(o=Nt(a),o===null)return;if(c=o.tag,c===5||c===6){r=i=o;continue e}a=a.parentNode}}r=r.return}Ga(function(){var u=i,m=ds(n),h=[];e:{var g=Su.get(e);if(g!==void 0){var w=vs,y=e;switch(e){case"keypress":if(Rr(n)===0)break e;case"keydown":case"keyup":w=sf;break;case"focusin":y="focus",w=Bl;break;case"focusout":y="blur",w=Bl;break;case"beforeblur":case"afterblur":w=Bl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=go;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Yd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=uf;break;case yu:case wu:case ku:w=Xd;break;case ju:w=df;break;case"scroll":w=Vd;break;case"wheel":w=pf;break;case"copy":case"cut":case"paste":w=Zd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=xo}var v=(t&4)!==0,k=!v&&e==="scroll",f=v?g!==null?g+"Capture":null:g;v=[];for(var d=u,p;d!==null;){p=d;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=Bn(d,f),x!=null&&v.push(Yn(d,x,p)))),k)break;d=d.return}0<v.length&&(g=new w(g,y,null,n,m),h.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&n!==vi&&(y=n.relatedTarget||n.fromElement)&&(Nt(y)||y[Ge]))break e;if((w||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=u,y=y?Nt(y):null,y!==null&&(k=It(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=u),w!==y)){if(v=go,x="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=xo,x="onPointerLeave",f="onPointerEnter",d="pointer"),k=w==null?g:Vt(w),p=y==null?g:Vt(y),g=new v(x,d+"leave",w,n,m),g.target=k,g.relatedTarget=p,x=null,Nt(m)===u&&(v=new v(f,d+"enter",y,n,m),v.target=p,v.relatedTarget=k,x=v),k=x,w&&y)t:{for(v=w,f=y,d=0,p=v;p;p=$t(p))d++;for(p=0,x=f;x;x=$t(x))p++;for(;0<d-p;)v=$t(v),d--;for(;0<p-d;)f=$t(f),p--;for(;d--;){if(v===f||f!==null&&v===f.alternate)break t;v=$t(v),f=$t(f)}v=null}else v=null;w!==null&&_o(h,g,w,v,!1),y!==null&&k!==null&&_o(h,k,y,v,!0)}}e:{if(g=u?Vt(u):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var S=wf;else if(ko(g))if(hu)S=Nf;else{S=jf;var b=kf}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=Sf);if(S&&(S=S(e,u))){pu(h,S,n,m);break e}b&&b(e,g,u),e==="focusout"&&(b=g._wrapperState)&&b.controlled&&g.type==="number"&&fi(g,"number",g.value)}switch(b=u?Vt(u):window,e){case"focusin":(ko(b)||b.contentEditable==="true")&&(Qt=b,Ni=u,Tn=null);break;case"focusout":Tn=Ni=Qt=null;break;case"mousedown":Ci=!0;break;case"contextmenu":case"mouseup":case"dragend":Ci=!1,Eo(h,n,m);break;case"selectionchange":if(Pf)break;case"keydown":case"keyup":Eo(h,n,m)}var E;if(ys)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ut?du(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(cu&&n.locale!=="ko"&&(Ut||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ut&&(E=uu()):(rt=m,gs="value"in rt?rt.value:rt.textContent,Ut=!0)),b=Yr(u,_),0<b.length&&(_=new vo(_,e,null,n,m),h.push({event:_,listeners:b}),E?_.data=E:(E=fu(n),E!==null&&(_.data=E)))),(E=mf?gf(e,n):vf(e,n))&&(u=Yr(u,"onBeforeInput"),0<u.length&&(m=new vo("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:u}),m.data=E))}Nu(h,t)})}function Yn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Bn(e,n),i!=null&&r.unshift(Yn(e,i,l)),i=Bn(e,t),i!=null&&r.push(Yn(e,i,l))),e=e.return}return r}function $t(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _o(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,l?(c=Bn(n,i),c!=null&&o.unshift(Yn(n,c,a))):l||(c=Bn(n,i),c!=null&&o.push(Yn(n,c,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Lf=/\r\n?/g,Rf=/\u0000|\uFFFD/g;function zo(e){return(typeof e=="string"?e:""+e).replace(Lf,`
`).replace(Rf,"")}function kr(e,t,n){if(t=zo(t),zo(e)!==t&&n)throw Error(j(425))}function Gr(){}var Ei=null,Pi=null;function bi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _i=typeof setTimeout=="function"?setTimeout:void 0,Tf=typeof clearTimeout=="function"?clearTimeout:void 0,Lo=typeof Promise=="function"?Promise:void 0,Mf=typeof queueMicrotask=="function"?queueMicrotask:typeof Lo<"u"?function(e){return Lo.resolve(null).then(e).catch(If)}:_i;function If(e){setTimeout(function(){throw e})}function Gl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Qn(t)}function ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ro(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hn=Math.random().toString(36).slice(2),$e="__reactFiber$"+hn,Gn="__reactProps$"+hn,Ge="__reactContainer$"+hn,zi="__reactEvents$"+hn,Of="__reactListeners$"+hn,Ff="__reactHandles$"+hn;function Nt(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ge]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ro(e);e!==null;){if(n=e[$e])return n;e=Ro(e)}return t}e=n,n=e.parentNode}return null}function sr(e){return e=e[$e]||e[Ge],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function gl(e){return e[Gn]||null}var Li=[],Ht=-1;function xt(e){return{current:e}}function $(e){0>Ht||(e.current=Li[Ht],Li[Ht]=null,Ht--)}function O(e,t){Ht++,Li[Ht]=e.current,e.current=t}var gt={},se=xt(gt),he=xt(!1),_t=gt;function sn(e,t){var n=e.type.contextTypes;if(!n)return gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function me(e){return e=e.childContextTypes,e!=null}function Kr(){$(he),$(se)}function To(e,t,n){if(se.current!==gt)throw Error(j(168));O(se,t),O(he,n)}function Eu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(j(108,wd(e)||"Unknown",l));return Q({},n,r)}function Xr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gt,_t=se.current,O(se,e),O(he,he.current),!0}function Mo(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Eu(e,t,_t),r.__reactInternalMemoizedMergedChildContext=e,$(he),$(se),O(se,e)):$(he),O(he,n)}var Qe=null,vl=!1,Kl=!1;function Pu(e){Qe===null?Qe=[e]:Qe.push(e)}function Df(e){vl=!0,Pu(e)}function yt(){if(!Kl&&Qe!==null){Kl=!0;var e=0,t=I;try{var n=Qe;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qe=null,vl=!1}catch(l){throw Qe!==null&&(Qe=Qe.slice(e+1)),Za(fs,yt),l}finally{I=t,Kl=!1}}return null}var Yt=[],Gt=0,qr=null,Zr=0,Ne=[],Ce=0,zt=null,We=1,Ve="";function jt(e,t){Yt[Gt++]=Zr,Yt[Gt++]=qr,qr=e,Zr=t}function bu(e,t,n){Ne[Ce++]=We,Ne[Ce++]=Ve,Ne[Ce++]=zt,zt=e;var r=We;e=Ve;var l=32-Me(r)-1;r&=~(1<<l),n+=1;var i=32-Me(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,We=1<<32-Me(t)+l|n<<l|r,Ve=i+e}else We=1<<i|n<<l|r,Ve=e}function ks(e){e.return!==null&&(jt(e,1),bu(e,1,0))}function js(e){for(;e===qr;)qr=Yt[--Gt],Yt[Gt]=null,Zr=Yt[--Gt],Yt[Gt]=null;for(;e===zt;)zt=Ne[--Ce],Ne[Ce]=null,Ve=Ne[--Ce],Ne[Ce]=null,We=Ne[--Ce],Ne[Ce]=null}var we=null,ye=null,B=!1,Te=null;function _u(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Io(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,ye=ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zt!==null?{id:We,overflow:Ve}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,ye=null,!0):!1;default:return!1}}function Ri(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ti(e){if(B){var t=ye;if(t){var n=t;if(!Io(e,t)){if(Ri(e))throw Error(j(418));t=ut(n.nextSibling);var r=we;t&&Io(e,t)?_u(r,n):(e.flags=e.flags&-4097|2,B=!1,we=e)}}else{if(Ri(e))throw Error(j(418));e.flags=e.flags&-4097|2,B=!1,we=e}}}function Oo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function jr(e){if(e!==we)return!1;if(!B)return Oo(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!bi(e.type,e.memoizedProps)),t&&(t=ye)){if(Ri(e))throw zu(),Error(j(418));for(;t;)_u(e,t),t=ut(t.nextSibling)}if(Oo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=we?ut(e.stateNode.nextSibling):null;return!0}function zu(){for(var e=ye;e;)e=ut(e.nextSibling)}function on(){ye=we=null,B=!1}function Ss(e){Te===null?Te=[e]:Te.push(e)}var $f=qe.ReactCurrentBatchConfig;function jn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Sr(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fo(e){var t=e._init;return t(e._payload)}function Lu(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=pt(f,d),f.index=0,f.sibling=null,f}function i(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,p,x){return d===null||d.tag!==6?(d=ni(p,f.mode,x),d.return=f,d):(d=l(d,p),d.return=f,d)}function c(f,d,p,x){var S=p.type;return S===At?m(f,d,p.props.children,x,p.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Je&&Fo(S)===d.type)?(x=l(d,p.props),x.ref=jn(f,d,p),x.return=f,x):(x=$r(p.type,p.key,p.props,null,f.mode,x),x.ref=jn(f,d,p),x.return=f,x)}function u(f,d,p,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=ri(p,f.mode,x),d.return=f,d):(d=l(d,p.children||[]),d.return=f,d)}function m(f,d,p,x,S){return d===null||d.tag!==7?(d=bt(p,f.mode,x,S),d.return=f,d):(d=l(d,p),d.return=f,d)}function h(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ni(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case fr:return p=$r(d.type,d.key,d.props,null,f.mode,p),p.ref=jn(f,null,d),p.return=f,p;case Bt:return d=ri(d,f.mode,p),d.return=f,d;case Je:var x=d._init;return h(f,x(d._payload),p)}if(En(d)||vn(d))return d=bt(d,f.mode,p,null),d.return=f,d;Sr(f,d)}return null}function g(f,d,p,x){var S=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:a(f,d,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case fr:return p.key===S?c(f,d,p,x):null;case Bt:return p.key===S?u(f,d,p,x):null;case Je:return S=p._init,g(f,d,S(p._payload),x)}if(En(p)||vn(p))return S!==null?null:m(f,d,p,x,null);Sr(f,p)}return null}function w(f,d,p,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,a(d,f,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case fr:return f=f.get(x.key===null?p:x.key)||null,c(d,f,x,S);case Bt:return f=f.get(x.key===null?p:x.key)||null,u(d,f,x,S);case Je:var b=x._init;return w(f,d,p,b(x._payload),S)}if(En(x)||vn(x))return f=f.get(p)||null,m(d,f,x,S,null);Sr(d,x)}return null}function y(f,d,p,x){for(var S=null,b=null,E=d,_=d=0,F=null;E!==null&&_<p.length;_++){E.index>_?(F=E,E=null):F=E.sibling;var L=g(f,E,p[_],x);if(L===null){E===null&&(E=F);break}e&&E&&L.alternate===null&&t(f,E),d=i(L,d,_),b===null?S=L:b.sibling=L,b=L,E=F}if(_===p.length)return n(f,E),B&&jt(f,_),S;if(E===null){for(;_<p.length;_++)E=h(f,p[_],x),E!==null&&(d=i(E,d,_),b===null?S=E:b.sibling=E,b=E);return B&&jt(f,_),S}for(E=r(f,E);_<p.length;_++)F=w(E,f,_,p[_],x),F!==null&&(e&&F.alternate!==null&&E.delete(F.key===null?_:F.key),d=i(F,d,_),b===null?S=F:b.sibling=F,b=F);return e&&E.forEach(function(de){return t(f,de)}),B&&jt(f,_),S}function v(f,d,p,x){var S=vn(p);if(typeof S!="function")throw Error(j(150));if(p=S.call(p),p==null)throw Error(j(151));for(var b=S=null,E=d,_=d=0,F=null,L=p.next();E!==null&&!L.done;_++,L=p.next()){E.index>_?(F=E,E=null):F=E.sibling;var de=g(f,E,L.value,x);if(de===null){E===null&&(E=F);break}e&&E&&de.alternate===null&&t(f,E),d=i(de,d,_),b===null?S=de:b.sibling=de,b=de,E=F}if(L.done)return n(f,E),B&&jt(f,_),S;if(E===null){for(;!L.done;_++,L=p.next())L=h(f,L.value,x),L!==null&&(d=i(L,d,_),b===null?S=L:b.sibling=L,b=L);return B&&jt(f,_),S}for(E=r(f,E);!L.done;_++,L=p.next())L=w(E,f,_,L.value,x),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?_:L.key),d=i(L,d,_),b===null?S=L:b.sibling=L,b=L);return e&&E.forEach(function(mn){return t(f,mn)}),B&&jt(f,_),S}function k(f,d,p,x){if(typeof p=="object"&&p!==null&&p.type===At&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case fr:e:{for(var S=p.key,b=d;b!==null;){if(b.key===S){if(S=p.type,S===At){if(b.tag===7){n(f,b.sibling),d=l(b,p.props.children),d.return=f,f=d;break e}}else if(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Je&&Fo(S)===b.type){n(f,b.sibling),d=l(b,p.props),d.ref=jn(f,b,p),d.return=f,f=d;break e}n(f,b);break}else t(f,b);b=b.sibling}p.type===At?(d=bt(p.props.children,f.mode,x,p.key),d.return=f,f=d):(x=$r(p.type,p.key,p.props,null,f.mode,x),x.ref=jn(f,d,p),x.return=f,f=x)}return o(f);case Bt:e:{for(b=p.key;d!==null;){if(d.key===b)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=l(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=ri(p,f.mode,x),d.return=f,f=d}return o(f);case Je:return b=p._init,k(f,d,b(p._payload),x)}if(En(p))return y(f,d,p,x);if(vn(p))return v(f,d,p,x);Sr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=l(d,p),d.return=f,f=d):(n(f,d),d=ni(p,f.mode,x),d.return=f,f=d),o(f)):n(f,d)}return k}var an=Lu(!0),Ru=Lu(!1),Jr=xt(null),el=null,Kt=null,Ns=null;function Cs(){Ns=Kt=el=null}function Es(e){var t=Jr.current;$(Jr),e._currentValue=t}function Mi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nn(e,t){el=e,Ns=Kt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function be(e){var t=e._currentValue;if(Ns!==e)if(e={context:e,memoizedValue:t,next:null},Kt===null){if(el===null)throw Error(j(308));Kt=e,el.dependencies={lanes:0,firstContext:e}}else Kt=Kt.next=e;return t}var Ct=null;function Ps(e){Ct===null?Ct=[e]:Ct.push(e)}function Tu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Ps(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ke(e,r)}function Ke(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var et=!1;function bs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function He(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ct(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ke(e,n)}return l=r.interleaved,l===null?(t.next=t,Ps(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ke(e,n)}function Tr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ps(e,n)}}function Do(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function tl(e,t,n,r){var l=e.updateQueue;et=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var c=a,u=c.next;c.next=null,o===null?i=u:o.next=u,o=c;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==o&&(a===null?m.firstBaseUpdate=u:a.next=u,m.lastBaseUpdate=c))}if(i!==null){var h=l.baseState;o=0,m=u=c=null,a=i;do{var g=a.lane,w=a.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(g=t,w=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(w,h,g);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,g=typeof y=="function"?y.call(w,h,g):y,g==null)break e;h=Q({},h,g);break e;case 2:et=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[a]:g.push(a))}else w={eventTime:w,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(u=m=w,c=h):m=m.next=w,o|=g;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;g=a,a=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(m===null&&(c=h),l.baseState=c,l.firstBaseUpdate=u,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Rt|=o,e.lanes=o,e.memoizedState=h}}function $o(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(j(191,l));l.call(r)}}}var or={},Ae=xt(or),Kn=xt(or),Xn=xt(or);function Et(e){if(e===or)throw Error(j(174));return e}function _s(e,t){switch(O(Xn,t),O(Kn,e),O(Ae,or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hi(t,e)}$(Ae),O(Ae,t)}function un(){$(Ae),$(Kn),$(Xn)}function Iu(e){Et(Xn.current);var t=Et(Ae.current),n=hi(t,e.type);t!==n&&(O(Kn,e),O(Ae,n))}function zs(e){Kn.current===e&&($(Ae),$(Kn))}var A=xt(0);function nl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xl=[];function Ls(){for(var e=0;e<Xl.length;e++)Xl[e]._workInProgressVersionPrimary=null;Xl.length=0}var Mr=qe.ReactCurrentDispatcher,ql=qe.ReactCurrentBatchConfig,Lt=0,U=null,K=null,Z=null,rl=!1,Mn=!1,qn=0,Bf=0;function re(){throw Error(j(321))}function Rs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Oe(e[n],t[n]))return!1;return!0}function Ts(e,t,n,r,l,i){if(Lt=i,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Mr.current=e===null||e.memoizedState===null?Wf:Vf,e=n(r,l),Mn){i=0;do{if(Mn=!1,qn=0,25<=i)throw Error(j(301));i+=1,Z=K=null,t.updateQueue=null,Mr.current=Hf,e=n(r,l)}while(Mn)}if(Mr.current=ll,t=K!==null&&K.next!==null,Lt=0,Z=K=U=null,rl=!1,t)throw Error(j(300));return e}function Ms(){var e=qn!==0;return qn=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?U.memoizedState=Z=e:Z=Z.next=e,Z}function _e(){if(K===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=Z===null?U.memoizedState:Z.next;if(t!==null)Z=t,K=e;else{if(e===null)throw Error(j(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Z===null?U.memoizedState=Z=e:Z=Z.next=e}return Z}function Zn(e,t){return typeof t=="function"?t(e):t}function Zl(e){var t=_e(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=K,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,c=null,u=i;do{var m=u.lane;if((Lt&m)===m)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=h,o=r):c=c.next=h,U.lanes|=m,Rt|=m}u=u.next}while(u!==null&&u!==i);c===null?o=r:c.next=a,Oe(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,U.lanes|=i,Rt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Jl(e){var t=_e(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Oe(i,t.memoizedState)||(pe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ou(){}function Fu(e,t){var n=U,r=_e(),l=t(),i=!Oe(r.memoizedState,l);if(i&&(r.memoizedState=l,pe=!0),r=r.queue,Is(Bu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Jn(9,$u.bind(null,n,r,l,t),void 0,null),J===null)throw Error(j(349));Lt&30||Du(n,t,l)}return l}function Du(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function $u(e,t,n,r){t.value=n,t.getSnapshot=r,Au(t)&&Uu(e)}function Bu(e,t,n){return n(function(){Au(t)&&Uu(e)})}function Au(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function Uu(e){var t=Ke(e,1);t!==null&&Ie(t,e,1,-1)}function Bo(e){var t=De();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:e},t.queue=e,e=e.dispatch=Qf.bind(null,U,e),[t.memoizedState,e]}function Jn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Qu(){return _e().memoizedState}function Ir(e,t,n,r){var l=De();U.flags|=e,l.memoizedState=Jn(1|t,n,void 0,r===void 0?null:r)}function xl(e,t,n,r){var l=_e();r=r===void 0?null:r;var i=void 0;if(K!==null){var o=K.memoizedState;if(i=o.destroy,r!==null&&Rs(r,o.deps)){l.memoizedState=Jn(t,n,i,r);return}}U.flags|=e,l.memoizedState=Jn(1|t,n,i,r)}function Ao(e,t){return Ir(8390656,8,e,t)}function Is(e,t){return xl(2048,8,e,t)}function Wu(e,t){return xl(4,2,e,t)}function Vu(e,t){return xl(4,4,e,t)}function Hu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yu(e,t,n){return n=n!=null?n.concat([e]):null,xl(4,4,Hu.bind(null,t,e),n)}function Os(){}function Gu(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ku(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xu(e,t,n){return Lt&21?(Oe(n,t)||(n=tu(),U.lanes|=n,Rt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function Af(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=ql.transition;ql.transition={};try{e(!1),t()}finally{I=n,ql.transition=r}}function qu(){return _e().memoizedState}function Uf(e,t,n){var r=ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zu(e))Ju(t,n);else if(n=Tu(e,t,n,r),n!==null){var l=ae();Ie(n,e,r,l),ec(n,t,r)}}function Qf(e,t,n){var r=ft(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zu(e))Ju(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(l.hasEagerState=!0,l.eagerState=a,Oe(a,o)){var c=t.interleaved;c===null?(l.next=l,Ps(t)):(l.next=c.next,c.next=l),t.interleaved=l;return}}catch{}finally{}n=Tu(e,t,l,r),n!==null&&(l=ae(),Ie(n,e,r,l),ec(n,t,r))}}function Zu(e){var t=e.alternate;return e===U||t!==null&&t===U}function Ju(e,t){Mn=rl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ec(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ps(e,n)}}var ll={readContext:be,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},Wf={readContext:be,useCallback:function(e,t){return De().memoizedState=[e,t===void 0?null:t],e},useContext:be,useEffect:Ao,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ir(4194308,4,Hu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ir(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ir(4,2,e,t)},useMemo:function(e,t){var n=De();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=De();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Uf.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=De();return e={current:e},t.memoizedState=e},useState:Bo,useDebugValue:Os,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=Bo(!1),t=e[0];return e=Af.bind(null,e[1]),De().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=U,l=De();if(B){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),J===null)throw Error(j(349));Lt&30||Du(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Ao(Bu.bind(null,r,i,e),[e]),r.flags|=2048,Jn(9,$u.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=De(),t=J.identifierPrefix;if(B){var n=Ve,r=We;n=(r&~(1<<32-Me(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Bf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Vf={readContext:be,useCallback:Gu,useContext:be,useEffect:Is,useImperativeHandle:Yu,useInsertionEffect:Wu,useLayoutEffect:Vu,useMemo:Ku,useReducer:Zl,useRef:Qu,useState:function(){return Zl(Zn)},useDebugValue:Os,useDeferredValue:function(e){var t=_e();return Xu(t,K.memoizedState,e)},useTransition:function(){var e=Zl(Zn)[0],t=_e().memoizedState;return[e,t]},useMutableSource:Ou,useSyncExternalStore:Fu,useId:qu,unstable_isNewReconciler:!1},Hf={readContext:be,useCallback:Gu,useContext:be,useEffect:Is,useImperativeHandle:Yu,useInsertionEffect:Wu,useLayoutEffect:Vu,useMemo:Ku,useReducer:Jl,useRef:Qu,useState:function(){return Jl(Zn)},useDebugValue:Os,useDeferredValue:function(e){var t=_e();return K===null?t.memoizedState=e:Xu(t,K.memoizedState,e)},useTransition:function(){var e=Jl(Zn)[0],t=_e().memoizedState;return[e,t]},useMutableSource:Ou,useSyncExternalStore:Fu,useId:qu,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ii(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var yl={isMounted:function(e){return(e=e._reactInternals)?It(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),l=ft(e),i=He(r,l);i.payload=t,n!=null&&(i.callback=n),t=ct(e,i,l),t!==null&&(Ie(t,e,l,r),Tr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),l=ft(e),i=He(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ct(e,i,l),t!==null&&(Ie(t,e,l,r),Tr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=ft(e),l=He(n,r);l.tag=2,t!=null&&(l.callback=t),t=ct(e,l,r),t!==null&&(Ie(t,e,r,n),Tr(t,e,r))}};function Uo(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Vn(n,r)||!Vn(l,i):!0}function tc(e,t,n){var r=!1,l=gt,i=t.contextType;return typeof i=="object"&&i!==null?i=be(i):(l=me(t)?_t:se.current,r=t.contextTypes,i=(r=r!=null)?sn(e,l):gt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=yl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Qo(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&yl.enqueueReplaceState(t,t.state,null)}function Oi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},bs(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=be(i):(i=me(t)?_t:se.current,l.context=sn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ii(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&yl.enqueueReplaceState(l,l.state,null),tl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function cn(e,t){try{var n="",r=t;do n+=yd(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function ei(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Yf=typeof WeakMap=="function"?WeakMap:Map;function nc(e,t,n){n=He(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sl||(sl=!0,Yi=r),Fi(e,t)},n}function rc(e,t,n){n=He(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Fi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Fi(e,t),typeof r!="function"&&(dt===null?dt=new Set([this]):dt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Wo(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Yf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=op.bind(null,e,t,n),t.then(e,e))}function Vo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ho(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=He(-1,1),t.tag=2,ct(n,t,1))),n.lanes|=1),e)}var Gf=qe.ReactCurrentOwner,pe=!1;function oe(e,t,n,r){t.child=e===null?Ru(t,null,n,r):an(t,e.child,n,r)}function Yo(e,t,n,r,l){n=n.render;var i=t.ref;return nn(t,l),r=Ts(e,t,n,r,i,l),n=Ms(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(B&&n&&ks(t),t.flags|=1,oe(e,t,r,l),t.child)}function Go(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Ws(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,lc(e,t,i,r,l)):(e=$r(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Vn,n(o,r)&&e.ref===t.ref)return Xe(e,t,l)}return t.flags|=1,e=pt(i,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Vn(i,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Xe(e,t,l)}return Di(e,t,n,r,l)}function ic(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(qt,ve),ve|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(qt,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,O(qt,ve),ve|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,O(qt,ve),ve|=r;return oe(e,t,l,n),t.child}function sc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Di(e,t,n,r,l){var i=me(n)?_t:se.current;return i=sn(t,i),nn(t,l),n=Ts(e,t,n,r,i,l),r=Ms(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(B&&r&&ks(t),t.flags|=1,oe(e,t,n,l),t.child)}function Ko(e,t,n,r,l){if(me(n)){var i=!0;Xr(t)}else i=!1;if(nn(t,l),t.stateNode===null)Or(e,t),tc(t,n,r),Oi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=be(u):(u=me(n)?_t:se.current,u=sn(t,u));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||c!==u)&&Qo(t,o,r,u),et=!1;var g=t.memoizedState;o.state=g,tl(t,r,o,l),c=t.memoizedState,a!==r||g!==c||he.current||et?(typeof m=="function"&&(Ii(t,n,m,r),c=t.memoizedState),(a=et||Uo(t,n,a,r,g,c,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Mu(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Le(t.type,a),o.props=u,h=t.pendingProps,g=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=be(c):(c=me(n)?_t:se.current,c=sn(t,c));var w=n.getDerivedStateFromProps;(m=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||g!==c)&&Qo(t,o,r,c),et=!1,g=t.memoizedState,o.state=g,tl(t,r,o,l);var y=t.memoizedState;a!==h||g!==y||he.current||et?(typeof w=="function"&&(Ii(t,n,w,r),y=t.memoizedState),(u=et||Uo(t,n,u,r,g,y,c)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return $i(e,t,n,r,i,l)}function $i(e,t,n,r,l,i){sc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Mo(t,n,!1),Xe(e,t,i);r=t.stateNode,Gf.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=an(t,e.child,null,i),t.child=an(t,null,a,i)):oe(e,t,a,i),t.memoizedState=r.state,l&&Mo(t,n,!0),t.child}function oc(e){var t=e.stateNode;t.pendingContext?To(e,t.pendingContext,t.pendingContext!==t.context):t.context&&To(e,t.context,!1),_s(e,t.containerInfo)}function Xo(e,t,n,r,l){return on(),Ss(l),t.flags|=256,oe(e,t,n,r),t.child}var Bi={dehydrated:null,treeContext:null,retryLane:0};function Ai(e){return{baseLanes:e,cachePool:null,transitions:null}}function ac(e,t,n){var r=t.pendingProps,l=A.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),O(A,l&1),e===null)return Ti(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=jl(o,r,0,null),e=bt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ai(n),t.memoizedState=Bi,e):Fs(t,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return Kf(e,t,o,r,a,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,a=l.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=pt(l,c),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=pt(a,i):(i=bt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Ai(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Bi,r}return i=e.child,e=i.sibling,r=pt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Fs(e,t){return t=jl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Nr(e,t,n,r){return r!==null&&Ss(r),an(t,e.child,null,n),e=Fs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kf(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=ei(Error(j(422))),Nr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=jl({mode:"visible",children:r.children},l,0,null),i=bt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&an(t,e.child,null,o),t.child.memoizedState=Ai(o),t.memoizedState=Bi,i);if(!(t.mode&1))return Nr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(j(419)),r=ei(i,r,void 0),Nr(e,t,o,r)}if(a=(o&e.childLanes)!==0,pe||a){if(r=J,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ke(e,l),Ie(r,e,l,-1))}return Qs(),r=ei(Error(j(421))),Nr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=ap.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ye=ut(l.nextSibling),we=t,B=!0,Te=null,e!==null&&(Ne[Ce++]=We,Ne[Ce++]=Ve,Ne[Ce++]=zt,We=e.id,Ve=e.overflow,zt=t),t=Fs(t,r.children),t.flags|=4096,t)}function qo(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Mi(e.return,t,n)}function ti(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function uc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(oe(e,t,r.children,n),r=A.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qo(e,n,t);else if(e.tag===19)qo(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(A,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&nl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ti(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&nl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ti(t,!0,n,null,i);break;case"together":ti(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Or(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Xf(e,t,n){switch(t.tag){case 3:oc(t),on();break;case 5:Iu(t);break;case 1:me(t.type)&&Xr(t);break;case 4:_s(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;O(Jr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(A,A.current&1),t.flags|=128,null):n&t.child.childLanes?ac(e,t,n):(O(A,A.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);O(A,A.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return uc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),O(A,A.current),r)break;return null;case 22:case 23:return t.lanes=0,ic(e,t,n)}return Xe(e,t,n)}var cc,Ui,dc,fc;cc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ui=function(){};dc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Et(Ae.current);var i=null;switch(n){case"input":l=ci(e,l),r=ci(e,r),i=[];break;case"select":l=Q({},l,{value:void 0}),r=Q({},r,{value:void 0}),i=[];break;case"textarea":l=pi(e,l),r=pi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gr)}mi(n,r);var o;n=null;for(u in l)if(!r.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var a=l[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Dn.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(a=l!=null?l[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&a[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Dn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&D("scroll",e),i||a===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};fc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Sn(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function qf(e,t,n){var r=t.pendingProps;switch(js(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return me(t.type)&&Kr(),le(t),null;case 3:return r=t.stateNode,un(),$(he),$(se),Ls(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(jr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Te!==null&&(Xi(Te),Te=null))),Ui(e,t),le(t),null;case 5:zs(t);var l=Et(Xn.current);if(n=t.type,e!==null&&t.stateNode!=null)dc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return le(t),null}if(e=Et(Ae.current),jr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[$e]=t,r[Gn]=i,e=(t.mode&1)!==0,n){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(l=0;l<bn.length;l++)D(bn[l],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":io(r,i),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},D("invalid",r);break;case"textarea":oo(r,i),D("invalid",r)}mi(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&kr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&kr(r.textContent,a,e),l=["children",""+a]):Dn.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&D("scroll",r)}switch(n){case"input":pr(r),so(r,i,!0);break;case"textarea":pr(r),ao(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Gr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ba(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[$e]=t,e[Gn]=r,cc(e,t,!1,!1),t.stateNode=e;e:{switch(o=gi(n,r),n){case"dialog":D("cancel",e),D("close",e),l=r;break;case"iframe":case"object":case"embed":D("load",e),l=r;break;case"video":case"audio":for(l=0;l<bn.length;l++)D(bn[l],e);l=r;break;case"source":D("error",e),l=r;break;case"img":case"image":case"link":D("error",e),D("load",e),l=r;break;case"details":D("toggle",e),l=r;break;case"input":io(e,r),l=ci(e,r),D("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Q({},r,{value:void 0}),D("invalid",e);break;case"textarea":oo(e,r),l=pi(e,r),D("invalid",e);break;default:l=r}mi(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];i==="style"?Qa(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Aa(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&$n(e,c):typeof c=="number"&&$n(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Dn.hasOwnProperty(i)?c!=null&&i==="onScroll"&&D("scroll",e):c!=null&&os(e,i,c,o))}switch(n){case"input":pr(e),so(e,r,!1);break;case"textarea":pr(e),ao(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Zt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Zt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Gr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)fc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Et(Xn.current),Et(Ae.current),jr(t)){if(r=t.stateNode,n=t.memoizedProps,r[$e]=t,(i=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:kr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&kr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$e]=t,t.stateNode=r}return le(t),null;case 13:if($(A),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&ye!==null&&t.mode&1&&!(t.flags&128))zu(),on(),t.flags|=98560,i=!1;else if(i=jr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[$e]=t}else on(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),i=!1}else Te!==null&&(Xi(Te),Te=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||A.current&1?X===0&&(X=3):Qs())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return un(),Ui(e,t),e===null&&Hn(t.stateNode.containerInfo),le(t),null;case 10:return Es(t.type._context),le(t),null;case 17:return me(t.type)&&Kr(),le(t),null;case 19:if($(A),i=t.memoizedState,i===null)return le(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Sn(i,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=nl(e),o!==null){for(t.flags|=128,Sn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(A,A.current&1|2),t.child}e=e.sibling}i.tail!==null&&H()>dn&&(t.flags|=128,r=!0,Sn(i,!1),t.lanes=4194304)}else{if(!r)if(e=nl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Sn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!B)return le(t),null}else 2*H()-i.renderingStartTime>dn&&n!==1073741824&&(t.flags|=128,r=!0,Sn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=H(),t.sibling=null,n=A.current,O(A,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Us(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Zf(e,t){switch(js(t),t.tag){case 1:return me(t.type)&&Kr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return un(),$(he),$(se),Ls(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zs(t),null;case 13:if($(A),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));on()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(A),null;case 4:return un(),null;case 10:return Es(t.type._context),null;case 22:case 23:return Us(),null;case 24:return null;default:return null}}var Cr=!1,ie=!1,Jf=typeof WeakSet=="function"?WeakSet:Set,C=null;function Xt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(e,t,r)}else n.current=null}function Qi(e,t,n){try{n()}catch(r){W(e,t,r)}}var Zo=!1;function ep(e,t){if(Ei=Vr,e=vu(),ws(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,c=-1,u=0,m=0,h=e,g=null;t:for(;;){for(var w;h!==n||l!==0&&h.nodeType!==3||(a=o+l),h!==i||r!==0&&h.nodeType!==3||(c=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(w=h.firstChild)!==null;)g=h,h=w;for(;;){if(h===e)break t;if(g===n&&++u===l&&(a=o),g===i&&++m===r&&(c=o),(w=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=w}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pi={focusedElem:e,selectionRange:n},Vr=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,k=y.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:Le(t.type,v),k);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(x){W(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return y=Zo,Zo=!1,y}function In(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Qi(t,n,i)}l=l.next}while(l!==r)}}function wl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pc(e){var t=e.alternate;t!==null&&(e.alternate=null,pc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$e],delete t[Gn],delete t[zi],delete t[Of],delete t[Ff])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hc(e){return e.tag===5||e.tag===3||e.tag===4}function Jo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gr));else if(r!==4&&(e=e.child,e!==null))for(Vi(e,t,n),e=e.sibling;e!==null;)Vi(e,t,n),e=e.sibling}function Hi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Hi(e,t,n),e=e.sibling;e!==null;)Hi(e,t,n),e=e.sibling}var ee=null,Re=!1;function Ze(e,t,n){for(n=n.child;n!==null;)mc(e,t,n),n=n.sibling}function mc(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(fl,n)}catch{}switch(n.tag){case 5:ie||Xt(n,t);case 6:var r=ee,l=Re;ee=null,Ze(e,t,n),ee=r,Re=l,ee!==null&&(Re?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Re?(e=ee,n=n.stateNode,e.nodeType===8?Gl(e.parentNode,n):e.nodeType===1&&Gl(e,n),Qn(e)):Gl(ee,n.stateNode));break;case 4:r=ee,l=Re,ee=n.stateNode.containerInfo,Re=!0,Ze(e,t,n),ee=r,Re=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Qi(n,t,o),l=l.next}while(l!==r)}Ze(e,t,n);break;case 1:if(!ie&&(Xt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){W(n,t,a)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,Ze(e,t,n),ie=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function ea(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Jf),t.forEach(function(r){var l=up.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,Re=!1;break e;case 3:ee=a.stateNode.containerInfo,Re=!0;break e;case 4:ee=a.stateNode.containerInfo,Re=!0;break e}a=a.return}if(ee===null)throw Error(j(160));mc(i,o,l),ee=null,Re=!1;var c=l.alternate;c!==null&&(c.return=null),l.return=null}catch(u){W(l,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gc(t,e),t=t.sibling}function gc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),Fe(e),r&4){try{In(3,e,e.return),wl(3,e)}catch(v){W(e,e.return,v)}try{In(5,e,e.return)}catch(v){W(e,e.return,v)}}break;case 1:ze(t,e),Fe(e),r&512&&n!==null&&Xt(n,n.return);break;case 5:if(ze(t,e),Fe(e),r&512&&n!==null&&Xt(n,n.return),e.flags&32){var l=e.stateNode;try{$n(l,"")}catch(v){W(e,e.return,v)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Da(l,i),gi(a,o);var u=gi(a,i);for(o=0;o<c.length;o+=2){var m=c[o],h=c[o+1];m==="style"?Qa(l,h):m==="dangerouslySetInnerHTML"?Aa(l,h):m==="children"?$n(l,h):os(l,m,h,u)}switch(a){case"input":di(l,i);break;case"textarea":$a(l,i);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Zt(l,!!i.multiple,w,!1):g!==!!i.multiple&&(i.defaultValue!=null?Zt(l,!!i.multiple,i.defaultValue,!0):Zt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Gn]=i}catch(v){W(e,e.return,v)}}break;case 6:if(ze(t,e),Fe(e),r&4){if(e.stateNode===null)throw Error(j(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(v){W(e,e.return,v)}}break;case 3:if(ze(t,e),Fe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(v){W(e,e.return,v)}break;case 4:ze(t,e),Fe(e);break;case 13:ze(t,e),Fe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Bs=H())),r&4&&ea(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(u=ie)||m,ze(t,e),ie=u):ze(t,e),Fe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(C=e,m=e.child;m!==null;){for(h=C=m;C!==null;){switch(g=C,w=g.child,g.tag){case 0:case 11:case 14:case 15:In(4,g,g.return);break;case 1:Xt(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){W(r,n,v)}}break;case 5:Xt(g,g.return);break;case 22:if(g.memoizedState!==null){na(h);continue}}w!==null?(w.return=g,C=w):na(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{l=h.stateNode,u?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,c=h.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Ua("display",o))}catch(v){W(e,e.return,v)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){W(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ze(t,e),Fe(e),r&4&&ea(e);break;case 21:break;default:ze(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hc(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&($n(l,""),r.flags&=-33);var i=Jo(e);Hi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Jo(e);Vi(e,a,o);break;default:throw Error(j(161))}}catch(c){W(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tp(e,t,n){C=e,vc(e)}function vc(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var l=C,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Cr;if(!o){var a=l.alternate,c=a!==null&&a.memoizedState!==null||ie;a=Cr;var u=ie;if(Cr=o,(ie=c)&&!u)for(C=l;C!==null;)o=C,c=o.child,o.tag===22&&o.memoizedState!==null?ra(l):c!==null?(c.return=o,C=c):ra(l);for(;i!==null;)C=i,vc(i),i=i.sibling;C=l,Cr=a,ie=u}ta(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,C=i):ta(e)}}function ta(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||wl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&$o(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$o(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Qn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ie||t.flags&512&&Wi(t)}catch(g){W(t,t.return,g)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function na(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function ra(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{wl(4,t)}catch(c){W(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(c){W(t,l,c)}}var i=t.return;try{Wi(t)}catch(c){W(t,i,c)}break;case 5:var o=t.return;try{Wi(t)}catch(c){W(t,o,c)}}}catch(c){W(t,t.return,c)}if(t===e){C=null;break}var a=t.sibling;if(a!==null){a.return=t.return,C=a;break}C=t.return}}var np=Math.ceil,il=qe.ReactCurrentDispatcher,Ds=qe.ReactCurrentOwner,Pe=qe.ReactCurrentBatchConfig,M=0,J=null,Y=null,te=0,ve=0,qt=xt(0),X=0,er=null,Rt=0,kl=0,$s=0,On=null,fe=null,Bs=0,dn=1/0,Ue=null,sl=!1,Yi=null,dt=null,Er=!1,lt=null,ol=0,Fn=0,Gi=null,Fr=-1,Dr=0;function ae(){return M&6?H():Fr!==-1?Fr:Fr=H()}function ft(e){return e.mode&1?M&2&&te!==0?te&-te:$f.transition!==null?(Dr===0&&(Dr=tu()),Dr):(e=I,e!==0||(e=window.event,e=e===void 0?16:au(e.type)),e):1}function Ie(e,t,n,r){if(50<Fn)throw Fn=0,Gi=null,Error(j(185));lr(e,n,r),(!(M&2)||e!==J)&&(e===J&&(!(M&2)&&(kl|=n),X===4&&nt(e,te)),ge(e,r),n===1&&M===0&&!(t.mode&1)&&(dn=H()+500,vl&&yt()))}function ge(e,t){var n=e.callbackNode;Dd(e,t);var r=Wr(e,e===J?te:0);if(r===0)n!==null&&fo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fo(n),t===1)e.tag===0?Df(la.bind(null,e)):Pu(la.bind(null,e)),Mf(function(){!(M&6)&&yt()}),n=null;else{switch(nu(r)){case 1:n=fs;break;case 4:n=Ja;break;case 16:n=Qr;break;case 536870912:n=eu;break;default:n=Qr}n=Cc(n,xc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xc(e,t){if(Fr=-1,Dr=0,M&6)throw Error(j(327));var n=e.callbackNode;if(rn()&&e.callbackNode!==n)return null;var r=Wr(e,e===J?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=al(e,r);else{t=r;var l=M;M|=2;var i=wc();(J!==e||te!==t)&&(Ue=null,dn=H()+500,Pt(e,t));do try{ip();break}catch(a){yc(e,a)}while(!0);Cs(),il.current=i,M=l,Y!==null?t=0:(J=null,te=0,t=X)}if(t!==0){if(t===2&&(l=ki(e),l!==0&&(r=l,t=Ki(e,l))),t===1)throw n=er,Pt(e,0),nt(e,r),ge(e,H()),n;if(t===6)nt(e,r);else{if(l=e.current.alternate,!(r&30)&&!rp(l)&&(t=al(e,r),t===2&&(i=ki(e),i!==0&&(r=i,t=Ki(e,i))),t===1))throw n=er,Pt(e,0),nt(e,r),ge(e,H()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:St(e,fe,Ue);break;case 3:if(nt(e,r),(r&130023424)===r&&(t=Bs+500-H(),10<t)){if(Wr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=_i(St.bind(null,e,fe,Ue),t);break}St(e,fe,Ue);break;case 4:if(nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Me(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=H()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*np(r/1960))-r,10<r){e.timeoutHandle=_i(St.bind(null,e,fe,Ue),r);break}St(e,fe,Ue);break;case 5:St(e,fe,Ue);break;default:throw Error(j(329))}}}return ge(e,H()),e.callbackNode===n?xc.bind(null,e):null}function Ki(e,t){var n=On;return e.current.memoizedState.isDehydrated&&(Pt(e,t).flags|=256),e=al(e,t),e!==2&&(t=fe,fe=n,t!==null&&Xi(t)),e}function Xi(e){fe===null?fe=e:fe.push.apply(fe,e)}function rp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Oe(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nt(e,t){for(t&=~$s,t&=~kl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Me(t),r=1<<n;e[n]=-1,t&=~r}}function la(e){if(M&6)throw Error(j(327));rn();var t=Wr(e,0);if(!(t&1))return ge(e,H()),null;var n=al(e,t);if(e.tag!==0&&n===2){var r=ki(e);r!==0&&(t=r,n=Ki(e,r))}if(n===1)throw n=er,Pt(e,0),nt(e,t),ge(e,H()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,St(e,fe,Ue),ge(e,H()),null}function As(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(dn=H()+500,vl&&yt())}}function Tt(e){lt!==null&&lt.tag===0&&!(M&6)&&rn();var t=M;M|=1;var n=Pe.transition,r=I;try{if(Pe.transition=null,I=1,e)return e()}finally{I=r,Pe.transition=n,M=t,!(M&6)&&yt()}}function Us(){ve=qt.current,$(qt)}function Pt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Tf(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(js(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Kr();break;case 3:un(),$(he),$(se),Ls();break;case 5:zs(r);break;case 4:un();break;case 13:$(A);break;case 19:$(A);break;case 10:Es(r.type._context);break;case 22:case 23:Us()}n=n.return}if(J=e,Y=e=pt(e.current,null),te=ve=t,X=0,er=null,$s=kl=Rt=0,fe=On=null,Ct!==null){for(t=0;t<Ct.length;t++)if(n=Ct[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Ct=null}return e}function yc(e,t){do{var n=Y;try{if(Cs(),Mr.current=ll,rl){for(var r=U.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}rl=!1}if(Lt=0,Z=K=U=null,Mn=!1,qn=0,Ds.current=null,n===null||n.return===null){X=1,er=t,Y=null;break}e:{var i=e,o=n.return,a=n,c=t;if(t=te,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,m=a,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=Vo(o);if(w!==null){w.flags&=-257,Ho(w,o,a,i,t),w.mode&1&&Wo(i,u,t),t=w,c=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(c),t.updateQueue=v}else y.add(c);break e}else{if(!(t&1)){Wo(i,u,t),Qs();break e}c=Error(j(426))}}else if(B&&a.mode&1){var k=Vo(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Ho(k,o,a,i,t),Ss(cn(c,a));break e}}i=c=cn(c,a),X!==4&&(X=2),On===null?On=[i]:On.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=nc(i,c,t);Do(i,f);break e;case 1:a=c;var d=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(dt===null||!dt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=rc(i,a,t);Do(i,x);break e}}i=i.return}while(i!==null)}jc(n)}catch(S){t=S,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function wc(){var e=il.current;return il.current=ll,e===null?ll:e}function Qs(){(X===0||X===3||X===2)&&(X=4),J===null||!(Rt&268435455)&&!(kl&268435455)||nt(J,te)}function al(e,t){var n=M;M|=2;var r=wc();(J!==e||te!==t)&&(Ue=null,Pt(e,t));do try{lp();break}catch(l){yc(e,l)}while(!0);if(Cs(),M=n,il.current=r,Y!==null)throw Error(j(261));return J=null,te=0,X}function lp(){for(;Y!==null;)kc(Y)}function ip(){for(;Y!==null&&!_d();)kc(Y)}function kc(e){var t=Nc(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?jc(e):Y=t,Ds.current=null}function jc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Zf(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Y=null;return}}else if(n=qf(n,t,ve),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);X===0&&(X=5)}function St(e,t,n){var r=I,l=Pe.transition;try{Pe.transition=null,I=1,sp(e,t,n,r)}finally{Pe.transition=l,I=r}return null}function sp(e,t,n,r){do rn();while(lt!==null);if(M&6)throw Error(j(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if($d(e,i),e===J&&(Y=J=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Er||(Er=!0,Cc(Qr,function(){return rn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Pe.transition,Pe.transition=null;var o=I;I=1;var a=M;M|=4,Ds.current=null,ep(e,n),gc(n,e),Ef(Pi),Vr=!!Ei,Pi=Ei=null,e.current=n,tp(n),zd(),M=a,I=o,Pe.transition=i}else e.current=n;if(Er&&(Er=!1,lt=e,ol=l),i=e.pendingLanes,i===0&&(dt=null),Td(n.stateNode),ge(e,H()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(sl)throw sl=!1,e=Yi,Yi=null,e;return ol&1&&e.tag!==0&&rn(),i=e.pendingLanes,i&1?e===Gi?Fn++:(Fn=0,Gi=e):Fn=0,yt(),null}function rn(){if(lt!==null){var e=nu(ol),t=Pe.transition,n=I;try{if(Pe.transition=null,I=16>e?16:e,lt===null)var r=!1;else{if(e=lt,lt=null,ol=0,M&6)throw Error(j(331));var l=M;for(M|=4,C=e.current;C!==null;){var i=C,o=i.child;if(C.flags&16){var a=i.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(C=u;C!==null;){var m=C;switch(m.tag){case 0:case 11:case 15:In(8,m,i)}var h=m.child;if(h!==null)h.return=m,C=h;else for(;C!==null;){m=C;var g=m.sibling,w=m.return;if(pc(m),m===u){C=null;break}if(g!==null){g.return=w,C=g;break}C=w}}}var y=i.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}C=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,C=o;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:In(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,C=f;break e}C=i.return}}var d=e.current;for(C=d;C!==null;){o=C;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,C=p;else e:for(o=d;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wl(9,a)}}catch(S){W(a,a.return,S)}if(a===o){C=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,C=x;break e}C=a.return}}if(M=l,yt(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(fl,e)}catch{}r=!0}return r}finally{I=n,Pe.transition=t}}return!1}function ia(e,t,n){t=cn(n,t),t=nc(e,t,1),e=ct(e,t,1),t=ae(),e!==null&&(lr(e,1,t),ge(e,t))}function W(e,t,n){if(e.tag===3)ia(e,e,n);else for(;t!==null;){if(t.tag===3){ia(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dt===null||!dt.has(r))){e=cn(n,e),e=rc(t,e,1),t=ct(t,e,1),e=ae(),t!==null&&(lr(t,1,e),ge(t,e));break}}t=t.return}}function op(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(te&n)===n&&(X===4||X===3&&(te&130023424)===te&&500>H()-Bs?Pt(e,0):$s|=n),ge(e,t)}function Sc(e,t){t===0&&(e.mode&1?(t=gr,gr<<=1,!(gr&130023424)&&(gr=4194304)):t=1);var n=ae();e=Ke(e,t),e!==null&&(lr(e,t,n),ge(e,n))}function ap(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Sc(e,n)}function up(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Sc(e,n)}var Nc;Nc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,Xf(e,t,n);pe=!!(e.flags&131072)}else pe=!1,B&&t.flags&1048576&&bu(t,Zr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Or(e,t),e=t.pendingProps;var l=sn(t,se.current);nn(t,n),l=Ts(null,t,r,e,l,n);var i=Ms();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(i=!0,Xr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,bs(t),l.updater=yl,t.stateNode=l,l._reactInternals=t,Oi(t,r,e,n),t=$i(null,t,r,!0,i,n)):(t.tag=0,B&&i&&ks(t),oe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Or(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=dp(r),e=Le(r,e),l){case 0:t=Di(null,t,r,e,n);break e;case 1:t=Ko(null,t,r,e,n);break e;case 11:t=Yo(null,t,r,e,n);break e;case 14:t=Go(null,t,r,Le(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Di(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Ko(e,t,r,l,n);case 3:e:{if(oc(t),e===null)throw Error(j(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Mu(e,t),tl(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=cn(Error(j(423)),t),t=Xo(e,t,r,n,l);break e}else if(r!==l){l=cn(Error(j(424)),t),t=Xo(e,t,r,n,l);break e}else for(ye=ut(t.stateNode.containerInfo.firstChild),we=t,B=!0,Te=null,n=Ru(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(on(),r===l){t=Xe(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return Iu(t),e===null&&Ti(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,bi(r,l)?o=null:i!==null&&bi(r,i)&&(t.flags|=32),sc(e,t),oe(e,t,o,n),t.child;case 6:return e===null&&Ti(t),null;case 13:return ac(e,t,n);case 4:return _s(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=an(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Yo(e,t,r,l,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,O(Jr,r._currentValue),r._currentValue=o,i!==null)if(Oe(i.value,o)){if(i.children===l.children&&!he.current){t=Xe(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=He(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?c.next=c:(c.next=m.next,m.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Mi(i.return,n,t),a.lanes|=n;break}c=c.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(j(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Mi(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}oe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,nn(t,n),l=be(l),r=r(l),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,l=Le(r,t.pendingProps),l=Le(r.type,l),Go(e,t,r,l,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Or(e,t),t.tag=1,me(r)?(e=!0,Xr(t)):e=!1,nn(t,n),tc(t,r,l),Oi(t,r,l,n),$i(null,t,r,!0,e,n);case 19:return uc(e,t,n);case 22:return ic(e,t,n)}throw Error(j(156,t.tag))};function Cc(e,t){return Za(e,t)}function cp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new cp(e,t,n,r)}function Ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dp(e){if(typeof e=="function")return Ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===us)return 11;if(e===cs)return 14}return 2}function pt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $r(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Ws(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case At:return bt(n.children,l,i,t);case as:o=8,l|=8;break;case si:return e=Ee(12,n,t,l|2),e.elementType=si,e.lanes=i,e;case oi:return e=Ee(13,n,t,l),e.elementType=oi,e.lanes=i,e;case ai:return e=Ee(19,n,t,l),e.elementType=ai,e.lanes=i,e;case Ia:return jl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ta:o=10;break e;case Ma:o=9;break e;case us:o=11;break e;case cs:o=14;break e;case Je:o=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Ee(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function bt(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function jl(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=Ia,e.lanes=n,e.stateNode={isHidden:!1},e}function ni(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function ri(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fl(0),this.expirationTimes=Fl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Vs(e,t,n,r,l,i,o,a,c){return e=new fp(e,t,n,a,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ee(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bs(i),e}function pp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ec(e){if(!e)return gt;e=e._reactInternals;e:{if(It(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(me(n))return Eu(e,n,t)}return t}function Pc(e,t,n,r,l,i,o,a,c){return e=Vs(n,r,!0,e,l,i,o,a,c),e.context=Ec(null),n=e.current,r=ae(),l=ft(n),i=He(r,l),i.callback=t??null,ct(n,i,l),e.current.lanes=l,lr(e,l,r),ge(e,r),e}function Sl(e,t,n,r){var l=t.current,i=ae(),o=ft(l);return n=Ec(n),t.context===null?t.context=n:t.pendingContext=n,t=He(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ct(l,t,o),e!==null&&(Ie(e,l,o,i),Tr(e,l,o)),o}function ul(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hs(e,t){sa(e,t),(e=e.alternate)&&sa(e,t)}function hp(){return null}var bc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ys(e){this._internalRoot=e}Nl.prototype.render=Ys.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Sl(e,t,null,null)};Nl.prototype.unmount=Ys.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tt(function(){Sl(null,e,null,null)}),t[Ge]=null}};function Nl(e){this._internalRoot=e}Nl.prototype.unstable_scheduleHydration=function(e){if(e){var t=iu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tt.length&&t!==0&&t<tt[n].priority;n++);tt.splice(n,0,e),n===0&&ou(e)}};function Gs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function oa(){}function mp(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var u=ul(o);i.call(u)}}var o=Pc(t,r,e,0,null,!1,!1,"",oa);return e._reactRootContainer=o,e[Ge]=o.current,Hn(e.nodeType===8?e.parentNode:e),Tt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var u=ul(c);a.call(u)}}var c=Vs(e,0,!1,null,null,!1,!1,"",oa);return e._reactRootContainer=c,e[Ge]=c.current,Hn(e.nodeType===8?e.parentNode:e),Tt(function(){Sl(t,c,n,r)}),c}function El(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var c=ul(o);a.call(c)}}Sl(t,o,e,l)}else o=mp(n,t,e,l,r);return ul(o)}ru=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pn(t.pendingLanes);n!==0&&(ps(t,n|1),ge(t,H()),!(M&6)&&(dn=H()+500,yt()))}break;case 13:Tt(function(){var r=Ke(e,1);if(r!==null){var l=ae();Ie(r,e,1,l)}}),Hs(e,1)}};hs=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var n=ae();Ie(t,e,134217728,n)}Hs(e,134217728)}};lu=function(e){if(e.tag===13){var t=ft(e),n=Ke(e,t);if(n!==null){var r=ae();Ie(n,e,t,r)}Hs(e,t)}};iu=function(){return I};su=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};xi=function(e,t,n){switch(t){case"input":if(di(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=gl(r);if(!l)throw Error(j(90));Fa(r),di(r,l)}}}break;case"textarea":$a(e,n);break;case"select":t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}};Ha=As;Ya=Tt;var gp={usingClientEntryPoint:!1,Events:[sr,Vt,gl,Wa,Va,As]},Nn={findFiberByHostInstance:Nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vp={bundleType:Nn.bundleType,version:Nn.version,rendererPackageName:Nn.rendererPackageName,rendererConfig:Nn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xa(e),e===null?null:e.stateNode},findFiberByHostInstance:Nn.findFiberByHostInstance||hp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{fl=Pr.inject(vp),Be=Pr}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gp;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gs(t))throw Error(j(200));return pp(e,t,null,n)};je.createRoot=function(e,t){if(!Gs(e))throw Error(j(299));var n=!1,r="",l=bc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Vs(e,1,!1,null,null,n,!1,r,l),e[Ge]=t.current,Hn(e.nodeType===8?e.parentNode:e),new Ys(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Xa(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return Tt(e)};je.hydrate=function(e,t,n){if(!Cl(t))throw Error(j(200));return El(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!Gs(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=bc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Pc(t,null,e,1,n??null,l,!1,i,o),e[Ge]=t.current,Hn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Nl(t)};je.render=function(e,t,n){if(!Cl(t))throw Error(j(200));return El(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!Cl(e))throw Error(j(40));return e._reactRootContainer?(Tt(function(){El(null,null,e,!1,function(){e._reactRootContainer=null,e[Ge]=null})}),!0):!1};je.unstable_batchedUpdates=As;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Cl(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return El(e,t,n,!1,r)};je.version="18.3.1-next-f1338f8080-20240426";function _c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_c)}catch(e){console.error(e)}}_c(),_a.exports=je;var xp=_a.exports,zc,aa=xp;zc=aa.createRoot,aa.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tr(){return tr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},tr.apply(this,arguments)}var it;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(it||(it={}));const ua="popstate";function yp(e){e===void 0&&(e={});function t(l,i){let{pathname:o="/",search:a="",hash:c=""}=Ot(l.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),qi("",{pathname:o,search:a,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(l,i){let o=l.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let c=l.location.href,u=c.indexOf("#");a=u===-1?c:c.slice(0,u)}return a+"#"+(typeof i=="string"?i:cl(i))}function r(l,i){Ks(l.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return kp(t,n,r,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ks(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function wp(){return Math.random().toString(36).substr(2,8)}function ca(e,t){return{usr:e.state,key:e.key,idx:t}}function qi(e,t,n,r){return n===void 0&&(n=null),tr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ot(t):t,{state:n,key:t&&t.key||r||wp()})}function cl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ot(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function kp(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,o=l.history,a=it.Pop,c=null,u=m();u==null&&(u=0,o.replaceState(tr({},o.state,{idx:u}),""));function m(){return(o.state||{idx:null}).idx}function h(){a=it.Pop;let k=m(),f=k==null?null:k-u;u=k,c&&c({action:a,location:v.location,delta:f})}function g(k,f){a=it.Push;let d=qi(v.location,k,f);n&&n(d,k),u=m()+1;let p=ca(d,u),x=v.createHref(d);try{o.pushState(p,"",x)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;l.location.assign(x)}i&&c&&c({action:a,location:v.location,delta:1})}function w(k,f){a=it.Replace;let d=qi(v.location,k,f);n&&n(d,k),u=m();let p=ca(d,u),x=v.createHref(d);o.replaceState(p,"",x),i&&c&&c({action:a,location:v.location,delta:0})}function y(k){let f=l.location.origin!=="null"?l.location.origin:l.location.href,d=typeof k=="string"?k:cl(k);return d=d.replace(/ $/,"%20"),G(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let v={get action(){return a},get location(){return e(l,o)},listen(k){if(c)throw new Error("A history only accepts one active listener");return l.addEventListener(ua,h),c=k,()=>{l.removeEventListener(ua,h),c=null}},createHref(k){return t(l,k)},createURL:y,encodeLocation(k){let f=y(k);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:w,go(k){return o.go(k)}};return v}var da;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(da||(da={}));function jp(e,t,n){return n===void 0&&(n="/"),Sp(e,t,n)}function Sp(e,t,n,r){let l=typeof t=="string"?Ot(t):t,i=Xs(l.pathname||"/",n);if(i==null)return null;let o=Lc(e);Np(o);let a=null;for(let c=0;a==null&&c<o.length;++c){let u=Op(i);a=Tp(o[c],u)}return a}function Lc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,o,a)=>{let c={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};c.relativePath.startsWith("/")&&(G(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=ht([r,c.relativePath]),m=n.concat(c);i.children&&i.children.length>0&&(G(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Lc(i.children,t,m,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Lp(u,i.index),routesMeta:m})};return e.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))l(i,o);else for(let c of Rc(i.path))l(i,o,c)}),t}function Rc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let o=Rc(r.join("/")),a=[];return a.push(...o.map(c=>c===""?i:[i,c].join("/"))),l&&a.push(...o),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function Np(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Rp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Cp=/^:[\w-]+$/,Ep=3,Pp=2,bp=1,_p=10,zp=-2,fa=e=>e==="*";function Lp(e,t){let n=e.split("/"),r=n.length;return n.some(fa)&&(r+=zp),t&&(r+=Pp),n.filter(l=>!fa(l)).reduce((l,i)=>l+(Cp.test(i)?Ep:i===""?bp:_p),r)}function Rp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function Tp(e,t,n){let{routesMeta:r}=e,l={},i="/",o=[];for(let a=0;a<r.length;++a){let c=r[a],u=a===r.length-1,m=i==="/"?t:t.slice(i.length)||"/",h=Mp({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},m),g=c.route;if(!h)return null;Object.assign(l,h.params),o.push({params:l,pathname:ht([i,h.pathname]),pathnameBase:Bp(ht([i,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(i=ht([i,h.pathnameBase]))}return o}function Mp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ip(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],o=i.replace(/(.)\/+$/,"$1"),a=l.slice(1);return{params:r.reduce((u,m,h)=>{let{paramName:g,isOptional:w}=m;if(g==="*"){let v=a[h]||"";o=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[h];return w&&!y?u[g]=void 0:u[g]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:e}}function Ip(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ks(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function Op(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ks(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Xs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Fp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?Ot(e):e;return{pathname:n?n.startsWith("/")?n:Dp(n,t):t,search:Ap(r),hash:Up(l)}}function Dp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function li(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $p(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Tc(e,t){let n=$p(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Mc(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=Ot(e):(l=tr({},e),G(!l.pathname||!l.pathname.includes("?"),li("?","pathname","search",l)),G(!l.pathname||!l.pathname.includes("#"),li("#","pathname","hash",l)),G(!l.search||!l.search.includes("#"),li("#","search","hash",l)));let i=e===""||l.pathname==="",o=i?"/":l.pathname,a;if(o==null)a=n;else{let h=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),h-=1;l.pathname=g.join("/")}a=h>=0?t[h]:"/"}let c=Fp(l,a),u=o&&o!=="/"&&o.endsWith("/"),m=(i||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||m)&&(c.pathname+="/"),c}const ht=e=>e.join("/").replace(/\/\/+/g,"/"),Bp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ap=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Up=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Qp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ic=["post","put","patch","delete"];new Set(Ic);const Wp=["get",...Ic];new Set(Wp);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nr(){return nr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nr.apply(this,arguments)}const qs=N.createContext(null),Vp=N.createContext(null),Ft=N.createContext(null),Pl=N.createContext(null),Dt=N.createContext({outlet:null,matches:[],isDataRoute:!1}),Oc=N.createContext(null);function Hp(e,t){let{relative:n}=t===void 0?{}:t;ar()||G(!1);let{basename:r,navigator:l}=N.useContext(Ft),{hash:i,pathname:o,search:a}=Dc(e,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:ht([r,o])),l.createHref({pathname:c,search:a,hash:i})}function ar(){return N.useContext(Pl)!=null}function bl(){return ar()||G(!1),N.useContext(Pl).location}function Fc(e){N.useContext(Ft).static||N.useLayoutEffect(e)}function Yp(){let{isDataRoute:e}=N.useContext(Dt);return e?sh():Gp()}function Gp(){ar()||G(!1);let e=N.useContext(qs),{basename:t,future:n,navigator:r}=N.useContext(Ft),{matches:l}=N.useContext(Dt),{pathname:i}=bl(),o=JSON.stringify(Tc(l,n.v7_relativeSplatPath)),a=N.useRef(!1);return Fc(()=>{a.current=!0}),N.useCallback(function(u,m){if(m===void 0&&(m={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=Mc(u,JSON.parse(o),i,m.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:ht([t,h.pathname])),(m.replace?r.replace:r.push)(h,m.state,m)},[t,r,o,i,e])}function Dc(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=N.useContext(Ft),{matches:l}=N.useContext(Dt),{pathname:i}=bl(),o=JSON.stringify(Tc(l,r.v7_relativeSplatPath));return N.useMemo(()=>Mc(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function Kp(e,t){return Xp(e,t)}function Xp(e,t,n,r){ar()||G(!1);let{navigator:l}=N.useContext(Ft),{matches:i}=N.useContext(Dt),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=bl(),m;if(t){var h;let k=typeof t=="string"?Ot(t):t;c==="/"||(h=k.pathname)!=null&&h.startsWith(c)||G(!1),m=k}else m=u;let g=m.pathname||"/",w=g;if(c!=="/"){let k=c.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(k.length).join("/")}let y=jp(e,{pathname:w}),v=th(y&&y.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:ht([c,l.encodeLocation?l.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?c:ht([c,l.encodeLocation?l.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r);return t&&v?N.createElement(Pl.Provider,{value:{location:nr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:it.Pop}},v):v}function qp(){let e=ih(),t=Qp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},t),n?N.createElement("pre",{style:l},n):null,null)}const Zp=N.createElement(qp,null);class Jp extends N.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?N.createElement(Dt.Provider,{value:this.props.routeContext},N.createElement(Oc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function eh(e){let{routeContext:t,match:n,children:r}=e,l=N.useContext(qs);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(Dt.Provider,{value:t},r)}function th(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(l=n)==null?void 0:l.errors;if(a!=null){let m=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);m>=0||G(!1),o=o.slice(0,Math.min(o.length,m+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<o.length;m++){let h=o[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=m),h.route.id){let{loaderData:g,errors:w}=n,y=h.route.loader&&g[h.route.id]===void 0&&(!w||w[h.route.id]===void 0);if(h.route.lazy||y){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((m,h,g)=>{let w,y=!1,v=null,k=null;n&&(w=a&&h.route.id?a[h.route.id]:void 0,v=h.route.errorElement||Zp,c&&(u<0&&g===0?(oh("route-fallback"),y=!0,k=null):u===g&&(y=!0,k=h.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,g+1)),d=()=>{let p;return w?p=v:y?p=k:h.route.Component?p=N.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=m,N.createElement(eh,{match:h,routeContext:{outlet:m,matches:f,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?N.createElement(Jp,{location:n.location,revalidation:n.revalidation,component:v,error:w,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var $c=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}($c||{}),Bc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Bc||{});function nh(e){let t=N.useContext(qs);return t||G(!1),t}function rh(e){let t=N.useContext(Vp);return t||G(!1),t}function lh(e){let t=N.useContext(Dt);return t||G(!1),t}function Ac(e){let t=lh(),n=t.matches[t.matches.length-1];return n.route.id||G(!1),n.route.id}function ih(){var e;let t=N.useContext(Oc),n=rh(),r=Ac();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function sh(){let{router:e}=nh($c.UseNavigateStable),t=Ac(Bc.UseNavigateStable),n=N.useRef(!1);return Fc(()=>{n.current=!0}),N.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,nr({fromRouteId:t},i)))},[e,t])}const pa={};function oh(e,t,n){pa[e]||(pa[e]=!0)}function ah(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Zi(e){G(!1)}function uh(e){let{basename:t="/",children:n=null,location:r,navigationType:l=it.Pop,navigator:i,static:o=!1,future:a}=e;ar()&&G(!1);let c=t.replace(/^\/*/,"/"),u=N.useMemo(()=>({basename:c,navigator:i,static:o,future:nr({v7_relativeSplatPath:!1},a)}),[c,a,i,o]);typeof r=="string"&&(r=Ot(r));let{pathname:m="/",search:h="",hash:g="",state:w=null,key:y="default"}=r,v=N.useMemo(()=>{let k=Xs(m,c);return k==null?null:{location:{pathname:k,search:h,hash:g,state:w,key:y},navigationType:l}},[c,m,h,g,w,y,l]);return v==null?null:N.createElement(Ft.Provider,{value:u},N.createElement(Pl.Provider,{children:n,value:v}))}function ch(e){let{children:t,location:n}=e;return Kp(Ji(t),n)}new Promise(()=>{});function Ji(e,t){t===void 0&&(t=[]);let n=[];return N.Children.forEach(e,(r,l)=>{if(!N.isValidElement(r))return;let i=[...t,l];if(r.type===N.Fragment){n.push.apply(n,Ji(r.props.children,i));return}r.type!==Zi&&G(!1),!r.props.index||!r.props.children||G(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ji(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function es(){return es=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},es.apply(this,arguments)}function dh(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function fh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ph(e,t){return e.button===0&&(!t||t==="_self")&&!fh(e)}const hh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],mh="6";try{window.__reactRouterVersion=mh}catch{}const gh="startTransition",ha=sd[gh];function vh(e){let{basename:t,children:n,future:r,window:l}=e,i=N.useRef();i.current==null&&(i.current=yp({window:l,v5Compat:!0}));let o=i.current,[a,c]=N.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},m=N.useCallback(h=>{u&&ha?ha(()=>c(h)):c(h)},[c,u]);return N.useLayoutEffect(()=>o.listen(m),[o,m]),N.useEffect(()=>ah(r),[r]),N.createElement(uh,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const xh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xe=N.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:i,replace:o,state:a,target:c,to:u,preventScrollReset:m,viewTransition:h}=t,g=dh(t,hh),{basename:w}=N.useContext(Ft),y,v=!1;if(typeof u=="string"&&yh.test(u)&&(y=u,xh))try{let p=new URL(window.location.href),x=u.startsWith("//")?new URL(p.protocol+u):new URL(u),S=Xs(x.pathname,w);x.origin===p.origin&&S!=null?u=S+x.search+x.hash:v=!0}catch{}let k=Hp(u,{relative:l}),f=wh(u,{replace:o,state:a,target:c,preventScrollReset:m,relative:l,viewTransition:h});function d(p){r&&r(p),p.defaultPrevented||f(p)}return N.createElement("a",es({},g,{href:y||k,onClick:v||i?r:d,ref:n,target:c}))});var ma;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ma||(ma={}));var ga;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ga||(ga={}));function wh(e,t){let{target:n,replace:r,state:l,preventScrollReset:i,relative:o,viewTransition:a}=t===void 0?{}:t,c=Yp(),u=bl(),m=Dc(e,{relative:o});return N.useCallback(h=>{if(ph(h,n)){h.preventDefault();let g=r!==void 0?r:cl(u)===cl(m);c(e,{replace:g,state:l,preventScrollReset:i,relative:o,viewTransition:a})}},[u,c,m,r,l,n,e,i,o,a])}const kh=()=>{const[e,t]=N.useState(!1),[n,r]=N.useState(!1);return N.useEffect(()=>{const l=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]),N.useEffect(()=>{n?document.body.style.overflow="hidden":document.body.style.overflow="unset";const l=i=>{i.key==="Escape"&&n&&r(!1)};return document.addEventListener("keydown",l),()=>{document.body.style.overflow="unset",document.removeEventListener("keydown",l)}},[n]),s.jsx("header",{id:"header",className:`modern-header ${e?"scrolled":""}`,children:s.jsx("div",{className:"container",children:s.jsxs("nav",{className:"navbar-modern",children:[s.jsx("div",{className:"navbar-brand",children:s.jsx(xe,{to:"/",className:"logo-link",children:s.jsx("img",{src:"./images/logo.png",alt:"Qik.ai Logo",className:"logo-img"})})}),s.jsx("div",{className:"navbar-nav desktop-nav",children:s.jsxs("div",{className:"nav-links",children:[s.jsx(xe,{to:"/",className:"nav-link",children:"Home"}),s.jsx(xe,{to:"/about",className:"nav-link",children:"About"}),s.jsx(xe,{to:"/contact",className:"nav-link",children:"Contact"})]})}),s.jsx("button",{className:"mobile-menu-toggle",onClick:()=>r(!n),"aria-label":"Toggle mobile menu",children:s.jsxs("span",{className:`hamburger ${n?"active":""}`,children:[s.jsx("span",{}),s.jsx("span",{}),s.jsx("span",{})]})}),s.jsx("div",{className:`mobile-nav ${n?"active":""}`,onClick:l=>{l.target===l.currentTarget&&r(!1)},children:s.jsx("div",{className:"mobile-nav-content",children:s.jsxs("div",{className:"mobile-nav-links",children:[s.jsx(xe,{to:"/",className:"mobile-nav-link",onClick:()=>r(!1),children:"Home"}),s.jsx(xe,{to:"/about",className:"mobile-nav-link",onClick:()=>r(!1),children:"About"}),s.jsx(xe,{to:"/contact",className:"mobile-nav-link",onClick:()=>r(!1),children:"Contact"})]})})}),s.jsx("div",{className:"header-contact",children:s.jsxs("a",{href:"mailto:hello@qik.ai",className:"contact-link",children:[s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:s.jsx("path",{d:"M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"})}),s.jsx("span",{children:"hello@qik.ai"})]})})]})})})},jh=()=>s.jsxs("footer",{id:"footer",className:"animated animatedFadeInDown fadeInDown",children:[s.jsx("div",{className:"footer-top",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col-md-4",children:[s.jsx("h4",{children:s.jsx("a",{href:"/",children:s.jsx("img",{src:"./images/logo.png",alt:"Qik.ai Logo"})})}),s.jsx("p",{children:"Supercharge your business with 50+ integrated business applications. With Qik Cloud Stack, you can speedup, automate and bring transparency to your business activities. Experience the power of cloud to increase your business productivity by 20%."})]}),s.jsxs("div",{className:"col-md-4 text-center-uvs",children:[s.jsx("h4",{children:"Contact"}),s.jsx("ul",{style:{listStyleType:"none",padding:0,margin:0,marginTop:"20px"},children:s.jsx("li",{style:{marginBottom:"13px"},children:"Email: hello@qik.ai"})})]}),s.jsxs("div",{className:"col-md-4 text-right-uvs",children:[s.jsx("h4",{children:"Always reachable on"}),s.jsxs("div",{className:"social-links",style:{marginTop:"20px"},children:[s.jsx("button",{style:{backgroundColor:"transparent",borderColor:"transparent",outlineColor:"transparent",outline:"none"},children:s.jsx("img",{src:"./images/linkedin.svg",alt:"Business solution icon"})}),s.jsx("button",{style:{backgroundColor:"transparent",borderColor:"transparent",outlineColor:"transparent",outline:"none"},children:s.jsx("img",{src:"./images/gmail.svg",alt:"Business solution icon",style:{marginLeft:"20px"}})})]})]})]})})}),s.jsx("div",{className:"containervs",children:s.jsx("div",{className:"copyright",children:s.jsxs("p",{style:{textAlign:"center"},children:["All rights reserved © 2025",s.jsx("strong",{children:s.jsx("span",{children:s.jsx("a",{href:"/",target:"_blank",children:"Qik.Ai"})})})]})})})]}),Sh=()=>{const e=N.useRef(null);return N.useEffect(()=>{const t=e.current,n=t.getContext("2d"),r=()=>{t.parentElement;const u=window.devicePixelRatio||1,m=window.innerWidth,h=window.innerHeight;t.width=m*u,t.height=h*u,t.style.width=m+"px",t.style.height=h+"px",n.scale(u,u)};r(),window.addEventListener("resize",r);const l=[],i=45,o=140;let a;for(let u=0;u<i;u++){const m=Math.random();let h="normal";m>.85?h="hub":m>.7&&(h="core"),l.push({x:Math.random()*t.width,y:Math.random()*t.height,vx:(Math.random()-.5)*.6,vy:(Math.random()-.5)*.6,radius:h==="hub"?Math.random()*3+5:h==="core"?Math.random()*2+4:Math.random()*2+2,pulse:Math.random()*Math.PI*2,energy:Math.random(),type:h,brightness:Math.random()*.5+.5,glowIntensity:Math.random()*.8+.2})}const c=()=>{n.clearRect(0,0,t.width,t.height),l.forEach((u,m)=>{u.x+=u.vx,u.y+=u.vy,(u.x<-20||u.x>t.width+20)&&(u.vx*=-1),(u.y<-20||u.y>t.height+20)&&(u.vy*=-1),u.x=Math.max(-10,Math.min(t.width+10,u.x)),u.y=Math.max(-10,Math.min(t.height+10,u.y)),u.pulse+=.015+(u.type==="hub"?.01:0),u.energy=(Math.sin(u.pulse)+1)/2;const h=u.type==="hub",g=u.type==="core",w=u.radius,y=w+u.energy*(h?6:g?4:2),v=n.createRadialGradient(u.x,u.y,0,u.x,u.y,y*2.5);h?(v.addColorStop(0,`rgba(139, 92, 246, ${.4*u.energy*u.glowIntensity})`),v.addColorStop(.3,`rgba(167, 139, 250, ${.3*u.energy})`),v.addColorStop(.6,`rgba(59, 130, 246, ${.2*u.energy})`),v.addColorStop(1,"rgba(139, 92, 246, 0)")):g?(v.addColorStop(0,`rgba(59, 130, 246, ${.35*u.energy*u.glowIntensity})`),v.addColorStop(.4,`rgba(139, 92, 246, ${.25*u.energy})`),v.addColorStop(1,"rgba(59, 130, 246, 0)")):(v.addColorStop(0,`rgba(167, 139, 250, ${.25*u.energy*u.glowIntensity})`),v.addColorStop(.5,`rgba(139, 92, 246, ${.15*u.energy})`),v.addColorStop(1,"rgba(167, 139, 250, 0)")),n.save(),n.globalCompositeOperation="screen",n.beginPath(),n.fillStyle=v,n.arc(u.x,u.y,y*2.5,0,Math.PI*2),n.fill(),n.restore();const k=n.createRadialGradient(u.x,u.y,0,u.x,u.y,y);h?(k.addColorStop(0,`rgba(255, 255, 255, ${.95*u.brightness})`),k.addColorStop(.2,`rgba(139, 92, 246, ${.9*u.energy})`),k.addColorStop(.6,`rgba(59, 130, 246, ${.7*u.energy})`),k.addColorStop(1,`rgba(139, 92, 246, ${.1*u.energy})`)):g?(k.addColorStop(0,`rgba(255, 255, 255, ${.85*u.brightness})`),k.addColorStop(.3,`rgba(59, 130, 246, ${.8*u.energy})`),k.addColorStop(1,`rgba(139, 92, 246, ${.1*u.energy})`)):(k.addColorStop(0,`rgba(255, 255, 255, ${.7*u.brightness})`),k.addColorStop(.4,`rgba(167, 139, 250, ${.6*u.energy})`),k.addColorStop(1,`rgba(139, 92, 246, ${.05*u.energy})`)),n.beginPath(),n.fillStyle=k,n.arc(u.x,u.y,y,0,Math.PI*2),n.fill();const f=n.createRadialGradient(u.x,u.y,0,u.x,u.y,w*.5);f.addColorStop(0,`rgba(255, 255, 255, ${.95+u.energy*.05})`),f.addColorStop(.7,`rgba(255, 255, 255, ${.8*u.brightness})`),f.addColorStop(1,`rgba(255, 255, 255, ${.2*u.brightness})`),n.beginPath(),n.fillStyle=f,n.arc(u.x,u.y,w*.5,0,Math.PI*2),n.fill(),h&&u.energy>.7&&(n.save(),n.globalCompositeOperation="screen",n.beginPath(),n.strokeStyle=`rgba(255, 255, 255, ${(u.energy-.7)*2})`,n.lineWidth=1+u.energy,n.arc(u.x,u.y,w+8+u.energy*4,0,Math.PI*2),n.stroke(),n.restore(),u.energy>.9&&(n.save(),n.globalCompositeOperation="screen",n.strokeStyle=`rgba(255, 255, 255, ${u.energy*.8})`,n.lineWidth=2,n.beginPath(),n.moveTo(u.x-10,u.y),n.lineTo(u.x+10,u.y),n.moveTo(u.x,u.y-10),n.lineTo(u.x,u.y+10),n.stroke(),n.restore()))});for(let u=0;u<l.length;u++)for(let m=u+1;m<l.length;m++){const h=l[u].x-l[m].x,g=l[u].y-l[m].y,w=Math.sqrt(h*h+g*g);let y=o;if(l[u].type==="hub"||l[m].type==="hub"?y=o*1.4:(l[u].type==="core"||l[m].type==="core")&&(y=o*1.2),w<y){const v=(1-w/y)*.8,k=(l[u].energy+l[m].energy)/2,f=l[u].type==="hub"||l[m].type==="hub",d=l[u].type==="core"||l[m].type==="core",p=n.createLinearGradient(l[u].x,l[u].y,l[m].x,l[m].y);if(f?(p.addColorStop(0,`rgba(139, 92, 246, ${v*(.6+k*.4)})`),p.addColorStop(.5,`rgba(167, 139, 250, ${v*(.7+k*.3)})`),p.addColorStop(1,`rgba(59, 130, 246, ${v*(.6+k*.4)})`)):d?(p.addColorStop(0,`rgba(59, 130, 246, ${v*(.5+k*.3)})`),p.addColorStop(.5,`rgba(139, 92, 246, ${v*(.6+k*.2)})`),p.addColorStop(1,`rgba(59, 130, 246, ${v*(.5+k*.3)})`)):(p.addColorStop(0,`rgba(167, 139, 250, ${v*(.4+k*.3)})`),p.addColorStop(.5,`rgba(139, 92, 246, ${v*(.5+k*.2)})`),p.addColorStop(1,`rgba(167, 139, 250, ${v*(.4+k*.3)})`)),n.save(),n.globalCompositeOperation="screen",n.beginPath(),n.strokeStyle=p,n.lineWidth=(f?2.5:d?2:1.5)+k*.5,n.moveTo(l[u].x,l[u].y),n.lineTo(l[m].x,l[m].y),n.stroke(),n.restore(),k>.5){const b=Date.now()*.001*(f?2:1.5)%2;let E,_;if(b<=1)E=l[u].x+(l[m].x-l[u].x)*b,_=l[u].y+(l[m].y-l[u].y)*b;else{const de=b-1;E=l[m].x+(l[u].x-l[m].x)*de,_=l[m].y+(l[u].y-l[m].y)*de}const F=(f?4:d?3:2)*k,L=n.createRadialGradient(E,_,0,E,_,F*2);L.addColorStop(0,`rgba(255, 255, 255, ${k*.9})`),L.addColorStop(.5,`rgba(139, 92, 246, ${k*.7})`),L.addColorStop(1,"rgba(139, 92, 246, 0)"),n.save(),n.globalCompositeOperation="screen",n.beginPath(),n.fillStyle=L,n.arc(E,_,F*2,0,Math.PI*2),n.fill(),n.beginPath(),n.fillStyle=`rgba(255, 255, 255, ${k})`,n.arc(E,_,F*.5,0,Math.PI*2),n.fill(),n.restore()}}}a=requestAnimationFrame(c)};return c(),()=>{window.removeEventListener("resize",r),a&&cancelAnimationFrame(a)}},[]),s.jsx("div",{className:"ai-network-container",children:s.jsx("canvas",{ref:e,className:"ai-network-canvas",style:{width:"100%",height:"100vh",background:"transparent",borderRadius:"0",border:"none"}})})},Nh=()=>s.jsx("div",{className:"hero-animation-wrapper",children:s.jsx(Sh,{})}),Ch=()=>s.jsx("div",{id:"sub-business-solutions",children:s.jsxs("div",{className:"col-md-12",id:"products",style:{display:"flex",flexDirection:"column",gap:"40px"},children:[s.jsxs("div",{className:"row",style:{display:"flex",flexWrap:"wrap",gap:"32px 0"},children:[s.jsx("div",{className:"col-md-12",style:{marginBottom:"20px"},children:s.jsx("h6",{style:{color:"#00abf6",fontWeight:"bold",marginBottom:"15px"},children:"Compliance, Legal & Risk Management"})}),s.jsx("div",{className:"col-md-4 col-sm-6 col-12 business-card-animate",children:s.jsxs("div",{className:"feature-item business-product enhanced-card",children:[s.jsx("img",{src:"./images/logos/Qik Policy Management Portal.PNG",alt:"Qik Policy Management Portal icon",className:"business-card-img"}),s.jsxs("div",{className:"business-card-content",children:[s.jsx("strong",{children:"Qik Policy Management Portal"}),s.jsx("p",{children:"Centralized policy creation, management, and compliance tracking"})]})]})}),s.jsx("div",{className:"col-md-4 col-sm-6 col-12 business-card-animate",children:s.jsxs("div",{className:"feature-item business-product enhanced-card",children:[s.jsx("img",{src:"./images/logos/Qik Whistleblower.PNG",alt:"Qik Whistleblower icon",className:"business-card-img"}),s.jsxs("div",{className:"business-card-content",children:[s.jsx("strong",{children:"Qik Whistleblower"}),s.jsx("p",{children:"Anonymous reporting and incident management system"})]})]})}),s.jsx("div",{className:"col-md-4 col-sm-6 col-12 business-card-animate",children:s.jsxs("div",{className:"feature-item business-product enhanced-card",children:[s.jsx("img",{src:"./images/logos/Qik RetainRight.PNG",alt:"Qik RetainRight icon",className:"business-card-img"}),s.jsxs("div",{className:"business-card-content",children:[s.jsx("strong",{children:"Qik RetainRight"}),s.jsx("p",{children:"Document Retention & Auto-Purge Scheduler: Automated compliance for data retention policies"})]})]})}),s.jsx("div",{className:"col-md-4 col-sm-6 col-12 business-card-animate",children:s.jsxs("div",{className:"feature-item business-product enhanced-card",children:[s.jsx("img",{src:"./images/logos/LegaDraft.PNG",alt:"LegaDraft icon",className:"business-card-img"}),s.jsxs("div",{className:"business-card-content",children:[s.jsx("strong",{children:"Qik LegaDraft"}),s.jsx("p",{children:"AI-Powered Legal Document Assistant: AI-driven legal document creation and review"})]})]})})]}),s.jsxs("div",{className:"row",style:{display:"flex",flexWrap:"wrap",gap:"32px 0"},children:[s.jsx("div",{className:"col-md-12",style:{marginBottom:"20px"},children:s.jsx("h6",{style:{color:"#00abf6",fontWeight:"bold",marginBottom:"15px"},children:"Human Capital & Performance"})}),s.jsx("div",{className:"col-md-4 col-sm-6 col-12 business-card-animate",children:s.jsxs("div",{className:"feature-item business-product enhanced-card",children:[s.jsx("img",{src:"./images/logos/Qik OnboardFlow.PNG",alt:"Qik OnboardFlow icon",className:"business-card-img"}),s.jsxs("div",{className:"business-card-content",children:[s.jsx("strong",{children:"Qik OnboardFlow"}),s.jsx("p",{children:"Employee Onboarding and Off-boarding: Streamlined employee lifecycle management"})]})]})}),s.jsx("div",{className:"col-md-4 col-sm-6 col-12 business-card-animate",children:s.jsxs("div",{className:"feature-item business-product enhanced-card",children:[s.jsx("img",{src:"./images/logos/Qik OKR & Goals.PNG",alt:"Qik OKR & Goals icon",className:"business-card-img"}),s.jsxs("div",{className:"business-card-content",children:[s.jsx("strong",{children:"Qik OKR & Goals"}),s.jsx("p",{children:"Objective and key results tracking and performance management"})]})]})}),s.jsx("div",{className:"col-md-4 col-sm-6 col-12 business-card-animate",children:s.jsxs("div",{className:"feature-item business-product enhanced-card",children:[s.jsx("img",{src:"./images/logos/Qik AllVoices.PNG",alt:"Qik AllVoices icon",className:"business-card-img"}),s.jsxs("div",{className:"business-card-content",children:[s.jsx("strong",{children:"Qik AllVoices"}),s.jsx("p",{children:"Employee voice and feedback collection platform"})]})]})})]}),s.jsxs("div",{className:"row",style:{display:"flex",flexWrap:"wrap",gap:"32px 0"},children:[s.jsx("div",{className:"col-md-12",style:{marginBottom:"20px"},children:s.jsx("h6",{style:{color:"#00abf6",fontWeight:"bold",marginBottom:"15px"},children:"Marketing, Communications & Engagement"})}),s.jsx("div",{className:"col-md-4 col-sm-6 col-12 business-card-animate",children:s.jsxs("div",{className:"feature-item business-product enhanced-card",children:[s.jsx("img",{src:"./images/logos/Qik DragonDrip.PNG",alt:"Qik DragonDrip icon",className:"business-card-img"}),s.jsxs("div",{className:"business-card-content",children:[s.jsx("strong",{children:"Qik DragonDrip"}),s.jsx("p",{children:"Email Campaign Builder: Marketing automation and email campaign management"})]})]})}),s.jsx("div",{className:"col-md-4 col-sm-6 col-12 business-card-animate",children:s.jsxs("div",{className:"feature-item business-product enhanced-card",children:[s.jsx("img",{src:"./images/logos/NexusPost.PNG",alt:"NexusPost Social Media Management icon",className:"business-card-img"}),s.jsxs("div",{className:"business-card-content",children:[s.jsx("strong",{children:"NexusPost"}),s.jsx("p",{children:"Social Media Management"})]})]})}),s.jsx("div",{className:"col-md-4 col-sm-6 col-12 business-card-animate",children:s.jsxs("div",{className:"feature-item business-product enhanced-card",children:[s.jsx("img",{src:"./images/logos/Qik Forms.PNG",alt:"Qik Forms icon",className:"business-card-img"}),s.jsxs("div",{className:"business-card-content",children:[s.jsx("strong",{children:"Qik Forms"}),s.jsx("p",{children:"Dynamic form builder and data collection"})]})]})}),s.jsx("div",{className:"col-md-4 col-sm-6 col-12 business-card-animate",children:s.jsxs("div",{className:"feature-item business-product enhanced-card",children:[s.jsx("img",{src:"./images/logos/Qik Surveys.PNG",alt:"Qik Surveys icon",className:"business-card-img"}),s.jsxs("div",{className:"business-card-content",children:[s.jsx("strong",{children:"Qik Surveys"}),s.jsx("p",{children:"Survey creation and data collection tools"})]})]})}),s.jsx("div",{className:"col-md-4 col-sm-6 col-12 business-card-animate",children:s.jsxs("div",{className:"feature-item business-product enhanced-card",children:[s.jsx("img",{src:"./images/logos/Qik Email Validator.PNG",alt:"Qik Email Validator icon",className:"business-card-img"}),s.jsxs("div",{className:"business-card-content",children:[s.jsx("strong",{children:"Qik Email Validator"}),s.jsx("p",{children:"Email verification"})]})]})})]}),s.jsxs("div",{className:"row",style:{display:"flex",flexWrap:"wrap",gap:"32px 0"},children:[s.jsx("div",{className:"col-md-12",style:{marginBottom:"20px"},children:s.jsx("h6",{style:{color:"#00abf6",fontWeight:"bold",marginBottom:"15px"},children:"Product Management & Innovation"})}),s.jsx("div",{className:"col-md-4 col-sm-6 col-12 business-card-animate",children:s.jsxs("div",{className:"feature-item business-product enhanced-card",children:[s.jsx("img",{src:"./images/logos/Qik Feature Maestro.png",alt:"Qik Feature Maestro icon",className:"business-card-img"}),s.jsxs("div",{className:"business-card-content",children:[s.jsx("strong",{children:"Qik Feature Maestro"}),s.jsx("p",{children:"SaaS Feature Request Board: Product development and feature request management"})]})]})})]}),s.jsxs("div",{className:"row",style:{display:"flex",flexWrap:"wrap",gap:"32px 0"},children:[s.jsx("div",{className:"col-md-12",style:{marginBottom:"20px"},children:s.jsx("h6",{style:{color:"#00abf6",fontWeight:"bold",marginBottom:"15px"},children:"Operations & Asset management"})}),s.jsx("div",{className:"col-md-4 col-sm-6 col-12 business-card-animate",children:s.jsxs("div",{className:"feature-item business-product enhanced-card",children:[s.jsx("img",{src:"./images/logos/Qik AssetGrid.PNG",alt:"Qik AssetGrid icon",className:"business-card-img"}),s.jsxs("div",{className:"business-card-content",children:[s.jsx("strong",{children:"Qik AssetGrid"}),s.jsx("p",{children:"Company Asset Tracker: Comprehensive asset inventory and management system"})]})]})}),s.jsx("div",{className:"col-md-4 col-sm-6 col-12 business-card-animate",children:s.jsxs("div",{className:"feature-item business-product enhanced-card",children:[s.jsx("img",{src:"./images/logos/Qik BookIt.PNG",alt:"Qik BookIt icon",className:"business-card-img"}),s.jsxs("div",{className:"business-card-content",children:[s.jsx("strong",{children:"Qik BookIt"}),s.jsx("p",{children:"Resource booking and reservation management system"})]})]})})]}),s.jsx("div",{className:"row",style:{display:"flex",flexWrap:"wrap",gap:"32px 0"},children:s.jsx("div",{className:"col-md-12",style:{marginBottom:"20px"},children:s.jsx("h6",{style:{color:"#00abf6",fontWeight:"bold",marginBottom:"15px"},children:"Engagement & Communication"})})})]})}),Eh=()=>s.jsxs("div",{children:[s.jsx(kh,{}),s.jsxs("section",{id:"qik-intro",className:"qik-intro hero-enhanced",children:[s.jsxs("div",{className:"hero-background",children:[s.jsx("div",{className:"hero-gradient-orb hero-orb-1"}),s.jsx("div",{className:"hero-gradient-orb hero-orb-2"}),s.jsx("div",{className:"hero-gradient-orb hero-orb-3"}),s.jsx("div",{className:"hero-gradient-orb hero-orb-4"}),s.jsx("div",{className:"hero-gradient-orb hero-orb-5"}),s.jsx("div",{className:"hero-particles"}),s.jsx("div",{className:"hero-particles-secondary"})]}),s.jsx("div",{className:"hero-animation-background",children:s.jsx(Nh,{})}),s.jsx("div",{className:"container hero-content",children:s.jsx("div",{className:"row align-items-center justify-content-center",children:s.jsxs("div",{className:"col-lg-8 col-md-10 hero-text-section",children:[s.jsxs("div",{className:"hero-badge",children:[s.jsx("span",{className:"badge-icon",children:"✨"}),s.jsx("span",{className:"badge-text",children:"Next-Gen AI Technology"})]}),s.jsx("h1",{className:"hero-title",children:s.jsx("span",{className:"title-highlight",children:"Qik Cloud Stack"})}),s.jsx("h2",{className:"hero-subtitle",children:"Intelligent business solutions powered by AI to fuel your growth"}),s.jsx("p",{className:"hero-description",children:"Experience the future of business automation with our comprehensive AI-powered cloud platform. From CRM to analytics, transform your operations with cutting-edge artificial intelligence."}),s.jsxs("div",{className:"hero-actions",children:[s.jsxs(xe,{to:"/contact",className:"btn btn-primary btn-lg hero-btn",children:[s.jsx("span",{children:"Get Started"}),s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:s.jsx("path",{d:"M13.025 1L18 5.975L6.975 17H3V13.025L13.025 1Z"})})]}),s.jsxs("button",{onClick:()=>{const e=document.getElementById("business-solutions");e&&e.scrollIntoView({behavior:"smooth"})},className:"btn btn-outline-primary btn-lg hero-btn",children:[s.jsx("span",{children:"Learn More"}),s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:s.jsx("path",{d:"M8 12L3 7H13L8 12Z"})})]})]}),s.jsxs("div",{className:"hero-stats",children:[s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-number",children:"50+"}),s.jsx("span",{className:"stat-label",children:"AI Tools"})]}),s.jsx("div",{className:"stat-divider"}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-number",children:"10k+"}),s.jsx("span",{className:"stat-label",children:"Businesses"})]}),s.jsx("div",{className:"stat-divider"}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-number",children:"99.9%"}),s.jsx("span",{className:"stat-label",children:"Uptime"})]})]})]})})})]}),s.jsx("section",{id:"business-solutions",className:"business-solutions-section",children:s.jsxs("div",{className:"container",children:[s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-12",children:s.jsxs("div",{className:"section-header text-center",children:[s.jsx("h2",{className:"section-title",children:"Our Business Solutions"}),s.jsx("p",{className:"section-subtitle",children:"Comprehensive AI-powered tools to transform your business operations"})]})})}),s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-12",children:s.jsx(Ch,{})})})]})}),s.jsx("style",{dangerouslySetInnerHTML:{__html:`
    /* Modern Header Styles */
    .modern-header {
      background: rgba(248, 250, 252, 0.95);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(139, 92, 246, 0.1);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10003;
      transition: all 0.3s ease;
      padding: 8px 0;
    }

    .modern-header.scrolled {
      background: rgba(248, 250, 252, 0.98);
      box-shadow: 0 8px 32px rgba(139, 92, 246, 0.1);
      border-bottom-color: rgba(139, 92, 246, 0.2);
    }

    .navbar-modern {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 0;
      position: relative;
      max-width: 100%;
      overflow: hidden;
    }

    /* Logo Section */
    .navbar-brand {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      z-index: 1001;
      flex: 0 0 auto;
    }

    .logo-link {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      transition: all 0.3s ease;
      padding: 8px 0;
    }

    .logo-link:hover {
      transform: translateY(-1px);
    }

    .logo-img {
      height: 35px;
      width: auto;
      transition: all 0.3s ease;
      display: block;
      vertical-align: middle;
      max-width: 100%;
    }

    .logo-text {
      font-size: 1.8rem;
      font-weight: 800;
      line-height: 1;
    }

    .logo-qik {
      color: var(--text-primary);
    }

    .logo-ai {
      background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* Desktop Navigation */
    .desktop-nav {
      display: flex;
      align-items: center;
      gap: 40px;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 30px;
    }

    .nav-link {
      color: var(--text-primary);
      text-decoration: none;
      font-weight: 500;
      font-size: 1rem;
      padding: 8px 0;
      position: relative;
      transition: all 0.3s ease;
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%);
      transition: width 0.3s ease;
    }

    .nav-link:hover {
      color: var(--qik-purple);
    }

    .nav-link:hover::after {
      width: 100%;
    }

    /* Navigation CTA Buttons */
    .nav-cta {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .nav-btn {
      padding: 10px 20px;
      font-size: 0.9rem;
      font-weight: 600;
      border-radius: 10px;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      text-decoration: none;
      border: none;
      cursor: pointer;
    }

    .nav-btn.btn-primary {
      background: linear-gradient(135deg, #00D4E6 0%, #4F46E5 100%);
      color: white;
      box-shadow: 0 4px 15px rgba(0, 212, 230, 0.3);
      border-radius: 10px;
    }

    .nav-btn.btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 212, 230, 0.4);
      color: white;
    }

    .nav-btn.btn-outline-primary {
      background: rgba(0, 212, 230, 0.05);
      border: 1.5px solid rgba(0, 212, 230, 0.3);
      color: var(--qik-cyan);
      backdrop-filter: blur(10px);
      border-radius: 10px;
    }

    .nav-btn.btn-outline-primary:hover {
      background: rgba(0, 212, 230, 0.1);
      border-color: var(--qik-cyan);
      color: var(--qik-cyan);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 212, 230, 0.2);
    }

    /* Mobile Menu Toggle */
    .mobile-menu-toggle {
      display: none !important;
      background: none !important;
      border: none !important;
      padding: 12px !important;
      cursor: pointer !important;
      z-index: 10002 !important;
      transition: all 0.3s ease !important;
      position: relative !important;
      border-radius: 8px !important;
    }

    .mobile-menu-toggle:hover {
      background: rgba(139, 92, 246, 0.1) !important;
    }

    /* Show mobile menu toggle on mobile devices */
    @media (max-width: 768px) {
      .mobile-menu-toggle {
        display: block !important;
      }
    }

    .hamburger {
      display: flex;
      flex-direction: column;
      width: 24px;
      height: 18px;
      position: relative;
      justify-content: space-between;
    }

    .hamburger span {
      display: block;
      height: 2px;
      width: 100%;
      background: var(--text-primary);
      border-radius: 1px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      transform-origin: center;
    }

    .hamburger span:nth-child(1) {
      transform: translateY(0);
    }

    .hamburger span:nth-child(2) {
      transform: translateY(0);
    }

    .hamburger span:nth-child(3) {
      transform: translateY(0);
    }

    .hamburger.active span:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active span:nth-child(2) {
      opacity: 0;
      transform: scale(0);
    }

    .hamburger.active span:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }

    .mobile-nav {
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      background: rgba(248, 250, 252, 0.98) !important;
      backdrop-filter: blur(20px) !important;
      transform: translateX(100%) !important;
      transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), visibility 0.4s ease, opacity 0.4s ease !important;
      z-index: 10001 !important;
      display: block !important;
      visibility: hidden !important;
      opacity: 0 !important;
      overflow: hidden !important;
      pointer-events: none !important;
    }

    .mobile-nav.active {
      transform: translateX(0) !important;
      visibility: visible !important;
      opacity: 1 !important;
      pointer-events: auto !important;
    }

    .mobile-nav-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
      padding: 80px 20px 40px;
      gap: 50px;
      position: relative;
      pointer-events: auto;
      transform: translateX(30px);
      opacity: 0;
      transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s, opacity 0.4s ease 0.1s;
    }

    .mobile-nav.active .mobile-nav-content {
      transform: translateX(0);
      opacity: 1;
    }

    /* Overlay click area */
    .mobile-nav::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: transparent;
      z-index: -1;
    }

    .mobile-nav-links {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
      width: 100%;
      padding: 0 40px;
    }

    .mobile-nav-link {
      color: var(--text-primary);
      text-decoration: none;
      font-size: 2rem;
      font-weight: 600;
      transition: all 0.3s ease;
      transform: translateY(20px);
      opacity: 0;
      animation: slideInUp 0.6s ease forwards;
      text-align: center;
      width: 100%;
      padding: 15px 0;
      border-radius: 10px;
    }

    .mobile-nav-link:nth-child(1) { animation-delay: 0.2s; }
    .mobile-nav-link:nth-child(2) { animation-delay: 0.3s; }
    .mobile-nav-link:nth-child(3) { animation-delay: 0.4s; }

    @keyframes slideInUp {
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .mobile-nav-link:hover {
      color: var(--qik-purple);
      transform: translateY(-2px) scale(1.05);
      background: rgba(139, 92, 246, 0.1);
    }

    .mobile-nav-cta {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
      max-width: 280px;
    }

    .mobile-nav-btn {
      width: 100%;
      justify-content: center;
      padding: 16px 24px;
      font-size: 1rem;
    }

    /* Contact Info */
    .header-contact {
      display: none;
      position: absolute;
      top: -35px;
      right: 0;
    }

    .contact-link {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 500;
      padding: 6px 12px;
      border-radius: 6px;
      background: rgba(139, 92, 246, 0.05);
      transition: all 0.3s ease;
    }

    .contact-link:hover {
      color: var(--qik-purple);
      background: rgba(139, 92, 246, 0.1);
    }

    /* Enhanced Hero Section with Background Animation */
    .hero-enhanced {
      min-height: 100vh;
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, 
        rgba(248, 250, 252, 0.95) 0%,
        rgba(248, 250, 252, 0.8) 50%,
        rgba(239, 246, 255, 0.9) 100%);
      display: flex;
      align-items: center;
      padding: 140px 0 80px; /* Increased top padding for header */
    }

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
    }

    /* AI Animation Background Layer */
    .hero-animation-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      opacity: 0.4;
      pointer-events: none;
    }

    .hero-content {
      position: relative;
      z-index: 3;
    }

    /* Hero Text Section - Centered and Enhanced */
    .hero-text-section {
      animation: slideInFromBottom 1.2s ease-out;
      text-align: center;
      position: relative;
      z-index: 4;
    }

    @keyframes slideInFromBottom {
      0% { opacity: 0; transform: translateY(40px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    /* Floating gradient orbs */
    .hero-gradient-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.6;
      animation: float 8s ease-in-out infinite;
    }

    .hero-orb-1 {
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(0, 212, 230, 0.3) 0%, transparent 70%);
      top: -200px;
      left: -200px;
      animation-delay: 0s;
    }

    .hero-orb-2 {
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(79, 70, 229, 0.25) 0%, transparent 70%);
      top: 60%;
      right: -150px;
      animation-delay: -3s;
    }

    .hero-orb-3 {
      width: 250px;
      height: 250px;
      background: radial-gradient(circle, rgba(232, 121, 249, 0.2) 0%, transparent 70%);
      top: 30%;
      left: 70%;
      animation-delay: -6s;
    }

    .hero-orb-4 {
      width: 180px;
      height: 180px;
      background: radial-gradient(circle, rgba(0, 212, 230, 0.15) 0%, transparent 70%);
      top: 70%;
      left: 10%;
      animation-delay: -2s;
    }

    .hero-orb-5 {
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, rgba(79, 70, 229, 0.18) 0%, transparent 70%);
      top: 10%;
      left: 40%;
      animation-delay: -8s;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px) scale(1); }
      33% { transform: translateY(-30px) scale(1.1); }
      66% { transform: translateY(20px) scale(0.9); }
    }

    /* Floating particles */
    .hero-particles {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        radial-gradient(2px 2px at 20px 30px, rgba(0, 212, 230, 0.4), transparent),
        radial-gradient(2px 2px at 40px 70px, rgba(79, 70, 229, 0.3), transparent),
        radial-gradient(1px 1px at 90px 40px, rgba(255, 255, 255, 0.5), transparent),
        radial-gradient(1px 1px at 130px 80px, rgba(0, 212, 230, 0.3), transparent),
        radial-gradient(2px 2px at 160px 30px, rgba(79, 70, 229, 0.2), transparent),
        radial-gradient(1px 1px at 50px 10px, rgba(232, 121, 249, 0.3), transparent),
        radial-gradient(1px 1px at 110px 60px, rgba(0, 212, 230, 0.2), transparent),
        radial-gradient(2px 2px at 80px 90px, rgba(79, 70, 229, 0.15), transparent),
        radial-gradient(1px 1px at 170px 50px, rgba(255, 255, 255, 0.3), transparent),
        radial-gradient(1px 1px at 30px 85px, rgba(232, 121, 249, 0.2), transparent);
      background-repeat: repeat;
      background-size: 120px 80px;
      animation: sparkle 12s linear infinite;
    }

    @keyframes sparkle {
      0% { transform: translateY(0px); }
      100% { transform: translateY(-160px); }
    }

    /* Secondary particle layer for more density */
    .hero-particles-secondary {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        radial-gradient(1px 1px at 35px 15px, rgba(0, 212, 230, 0.25), transparent),
        radial-gradient(1px 1px at 75px 45px, rgba(232, 121, 249, 0.2), transparent),
        radial-gradient(1px 1px at 15px 75px, rgba(79, 70, 229, 0.18), transparent),
        radial-gradient(1px 1px at 145px 25px, rgba(255, 255, 255, 0.3), transparent),
        radial-gradient(1px 1px at 65px 85px, rgba(0, 212, 230, 0.15), transparent),
        radial-gradient(1px 1px at 105px 35px, rgba(232, 121, 249, 0.15), transparent);
      background-repeat: repeat;
      background-size: 100px 60px;
      animation: sparkle-reverse 10s linear infinite;
    }

    @keyframes sparkle-reverse {
      0% { transform: translateY(-100px) rotate(0deg); }
      100% { transform: translateY(-260px) rotate(360deg); }
    }

    .hero-content {
      position: relative;
      z-index: 2;
    }

    /* Hero Text Section */
    .hero-text-section {
      animation: slideInFromLeft 1s ease-out;
    }

    /* Hero Actions */
    .hero-actions {
      display: flex;
      gap: 16px;
      margin: 32px 0;
      flex-wrap: wrap;
      justify-content: center;
    }

    .hero-btn {
      padding: 14px 28px;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 10px;
      transition: all 0.3s ease;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-width: 140px;
      justify-content: center;
    }

    .hero-btn.btn-primary {
      background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%);
      color: white;
      border: none;
      box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
    }

    .hero-btn.btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
      color: white;
    }

    .hero-btn.btn-outline-primary {
      background: rgba(139, 92, 246, 0.05);
      border: 1.5px solid rgba(139, 92, 246, 0.3);
      color: var(--qik-purple);
      backdrop-filter: blur(10px);
    }

    .hero-btn.btn-outline-primary:hover {
      background: rgba(139, 92, 246, 0.1);
      border-color: var(--qik-purple);
      color: var(--qik-purple);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(139, 92, 246, 0.2);
    }

    @keyframes slideInFromLeft {
      0% { opacity: 0; transform: translateX(-50px); }
      100% { opacity: 1; transform: translateX(0); }
    }

    /* Hero Badge */
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(0, 212, 230, 0.2);
      border-radius: 50px;
      padding: 10px 24px;
      margin-bottom: 35px;
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--qik-cyan);
      animation: glow-pulse 3s ease-in-out infinite;
      box-shadow: 0 4px 20px rgba(0, 212, 230, 0.15);
    }

    @keyframes glow-pulse {
      0%, 100% { box-shadow: 0 0 20px rgba(0, 212, 230, 0.2); }
      50% { box-shadow: 0 0 30px rgba(0, 212, 230, 0.4); }
    }

    .badge-icon {
      font-size: 1.1rem;
      animation: rotate 4s linear infinite;
    }

    @keyframes rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    /* Enhanced Typography for Background Animation */
    .hero-title {
      font-size: 4.5rem;
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 25px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      text-shadow: 0 4px 20px rgba(255, 255, 255, 0.8);
    }

    .title-main {
      background: linear-gradient(135deg, #1E293B 0%, #475569 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: 0 2px 10px rgba(255, 255, 255, 0.5);
    }

    .title-highlight {
      background: linear-gradient(135deg, #00D4E6 0%, #4F46E5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: 0 0 40px rgba(0, 212, 230, 0.6);
      animation: text-glow 2s ease-in-out infinite alternate;
      filter: drop-shadow(0 2px 4px rgba(255, 255, 255, 0.3));
    }

    @keyframes text-glow {
      0% { filter: brightness(1) drop-shadow(0 2px 4px rgba(255, 255, 255, 0.3)); }
      100% { filter: brightness(1.2) drop-shadow(0 4px 8px rgba(255, 255, 255, 0.5)); }
    }

    .hero-subtitle {
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1.5;
      color: var(--text-secondary);
      margin-bottom: 30px;
      max-width: 650px;
      margin-left: auto;
      margin-right: auto;
      text-shadow: 0 2px 8px rgba(255, 255, 255, 0.8);
    }

    .hero-description {
      font-size: 1.1rem;
      line-height: 1.7;
      color: var(--text-secondary);
      margin-bottom: 40px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      opacity: 0.95;
      text-shadow: 0 1px 4px rgba(255, 255, 255, 0.6);
    }

    /* Hero Stats with Enhanced Visibility */
    .hero-stats {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      margin-bottom: 50px;
      padding: 25px 35px;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 20px;
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      box-shadow: 0 8px 32px rgba(0, 212, 230, 0.1);
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .stat-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }

    .stat-number {
      font-size: 1.8rem;
      font-weight: 800;
      background: linear-gradient(135deg, #00D4E6 0%, #4F46E5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .stat-label {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .stat-divider {
      width: 1px;
      height: 40px;
      background: linear-gradient(to bottom, transparent, rgba(0, 212, 230, 0.3), transparent);
    }

    /* Enhanced Buttons with Better Visibility */
    .hero-cta {
      display: flex;
      gap: 20px;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn-lg {
      padding: 16px 32px;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 10px;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
    }

    .btn-gradient {
      background: linear-gradient(135deg, #00D4E6 0%, #4F46E5 100%);
      border: none;
      color: white;
      box-shadow: 0 10px 30px rgba(0, 212, 230, 0.4);
      position: relative;
    }

    .btn-gradient:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(0, 212, 230, 0.5);
      color: white;
    }

    .btn-shine {
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s;
    }

    .btn-gradient:hover .btn-shine {
      left: 100%;
    }

    .btn-outline-primary {
      background: rgba(0, 212, 230, 0.05);
      border: 2px solid rgba(0, 212, 230, 0.3);
      color: var(--qik-cyan);
      backdrop-filter: blur(10px);
    }

    .btn-outline-primary:hover {
      background: rgba(0, 212, 230, 0.1);
      border-color: var(--qik-cyan);
      color: var(--qik-cyan);
      transform: translateY(-3px);
      box-shadow: 0 15px 35px rgba(0, 212, 230, 0.2);
    }

    /* AI Network Animation as Full Background */
    .ai-network-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 0;
      overflow: visible;
      background: transparent;
      backdrop-filter: none;
      border: none;
      box-shadow: none;
      animation: none;
    }

    @keyframes container-float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }

    .ai-network-canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 0;
    }

    .ai-network-overlay {
      display: none;
    }

    .ai-glow-effect {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60%;
      height: 60%;
      background: radial-gradient(circle, 
        rgba(0, 212, 230, 0.04) 0%, 
        rgba(79, 70, 229, 0.03) 40%,
        rgba(232, 121, 249, 0.02) 60%,
        transparent 80%);
      border-radius: 50%;
      animation: pulse-glow 12s ease-in-out infinite;
      pointer-events: none;
    }

    @keyframes pulse-glow {
      0%, 100% { 
        transform: translate(-50%, -50%) scale(1); 
        opacity: 0.3; 
      }
      50% { 
        transform: translate(-50%, -50%) scale(1.3); 
        opacity: 0.6; 
      }
    }

    .ai-network-label {
      display: none;
    }

    /* Business Solutions Section */
    .business-solutions-section {
      padding: 100px 0;
      background: linear-gradient(180deg, 
        rgba(248, 250, 252, 0.5) 0%, 
        var(--bg-surface-elevated) 100%);
      position: relative;
    }

    .business-solutions-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, 
        transparent 0%, 
        rgba(0, 212, 230, 0.4) 30%,
        rgba(79, 70, 229, 0.4) 70%,
        transparent 100%);
    }

    .section-header {
      margin-bottom: 80px;
    }

    .section-title {
      font-size: 3rem;
      font-weight: 800;
      background: linear-gradient(135deg, #00D4E6 0%, #4F46E5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 25px;
    }

    .section-subtitle {
      font-size: 1.3rem;
      color: var(--text-secondary);
      max-width: 650px;
      margin: 0 auto;
      line-height: 1.6;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .desktop-nav {
        display: none !important;
      }
      
      .mobile-menu-toggle {
        display: block !important;
      }
      
      .mobile-nav {
        display: block !important;
      }
      
      .header-contact {
        display: none !important;
      }
      
      .hero-enhanced {
        min-height: 100vh;
        padding: 120px 0 60px;
      }
      
      .hero-title {
        font-size: 2.8rem;
      }
      
      .hero-subtitle {
        font-size: 1.3rem;
      }
      
      .hero-description {
        font-size: 1rem;
        max-width: 90%;
      }
      
      .hero-stats {
        gap: 20px;
        flex-wrap: wrap;
        justify-content: center;
        padding: 20px 25px;
        margin-bottom: 40px;
      }
      
      .hero-animation-background {
        opacity: 0.4;
      }
      
      .hero-cta {
        flex-direction: column;
        width: 100%;
        gap: 15px;
      }
      
      .btn-lg {
        width: 100%;
        justify-content: center;
      }
      
      .section-title {
        font-size: 2.2rem;
      }
    }

    @media (min-width: 1200px) {
      .header-contact {
        display: block;
      }
    }

    /* Original Styles */
    .boxus { 
        align-self: flex-end;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        margin: 0 auto 0 auto;
        transform-origin: bottom;
    }
    .bounce-1us {
        animation-name: bounce-1us;
        animation-timing-function: linear;
    }
    @keyframes bounce-1us {
        0%   { transform: translateY(0); }
        50%  { transform: translateY(-20px); }
        100% { transform: translateY(0); }
    }

	#products img {
    text-align: center;
    margin: 25px 0;
}
	#products a {font-size:18px;color: #001e4b;  text-align: center;
    font-weight: 600;}#products a:hover{color:#00abf6;}

.feature-item{  -webkit-transition: all 0.25s linear;
  transition: all 0.25s linear;}
.feature-item:hover { 
  -webkit-transform: translateY(-10px);
          transform: translateY(-10px);
}

.business-product {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  min-height: 200px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.business-product:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  border-color: #00abf6;
}

.business-product img {
  width: 100%;
  height: auto;
  margin: 0 auto 15px;
  aspect-ratio: 16/9;
  object-fit: contain;
}

.business-product strong {
  display: block;
  color: #001e4b;
  font-size: 16px;
  margin-bottom: 10px;
}

 .us-contact {
    font-size: 14px;
    line-height: 28px;color: #001e4b;
}a.btn-primary {
    background: #2f42fc;
    border-color: #2f42fc;
    border-radius: 0;
    text-align: left;padding: 15px 40px;font-size: 16px;font-weight:600;
}.btn-primary{border-radius: 10px;}p{color: #001e4b;}body {
    color: #001e4b;
}.container, .container-lg, .container-md, .container-sm, .container-xl {
    max-width: 96%;
}

.sticky-column {
  position: -webkit-sticky;
  position: sticky;
  top: 20px;
  align-self: flex-start;
}
`}}),s.jsx(jh,{})]}),Ph=()=>s.jsx("nav",{id:"sidebar",children:s.jsxs("ul",{className:"list-unstyled components",children:[s.jsx("li",{className:"nav-item",style:{height:"50px"}}),s.jsx("li",{children:s.jsx(xe,{to:"/",children:s.jsx("span",{children:" Home"})})}),s.jsx("li",{children:s.jsx(xe,{to:"/Academy",children:s.jsx("span",{children:" Academy"})})}),s.jsx("li",{children:s.jsx(xe,{to:"/Business",children:s.jsx("span",{children:" Business"})})})]})}),bh=()=>{const e=N.useRef([]),t=(n,r)=>{e.current[n||1].scrollIntoView({behavior:"smooth"})};return s.jsxs("div",{children:[s.jsx("header",{id:"header",children:s.jsx("div",{className:"containervs",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-md-2 col-sm-2 col-2",children:s.jsx("a",{href:"/",children:s.jsx("img",{src:"./images/logo.png",alt:"Qik.ai",className:"img-logovs"})})}),s.jsx("div",{className:"col-md-6 col-3",children:s.jsx("div",{className:" nav-menu d-none d-lg-block float-right",style:{padding:4},children:s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx("div",{onClick:()=>t(1),children:"Home"})}),s.jsx("li",{children:s.jsx("div",{onClick:()=>t(2),children:"Features"})}),s.jsx("li",{children:s.jsx("div",{onClick:()=>t(3),children:"Pricing"})}),s.jsx("li",{children:s.jsx("div",{onClick:()=>t(4),children:"Contact Us"})})]})})}),s.jsx("div",{className:"col-md-3 col-sm-6 col-6 text-right",children:s.jsxs("div",{className:"us-contact",children:[s.jsx("i",{className:"fa fa-envelope"})," hello@qik.ai"]})})]})})}),s.jsx("section",{ref:n=>e.current[1]=n,id:"qik-intro",className:"qik-intro",children:s.jsx("div",{className:"containervs",children:s.jsxs("div",{className:"col-md-12 row",children:[s.jsxs("div",{className:"col-md-6 introtext",children:[s.jsxs("h2",{children:["Qik Coaching Institute App on Cloud",s.jsx("hr",{className:"section-line-border mhide"}),s.jsx("hr",{className:"section-line-border1 mshow"})]}),s.jsx("p",{children:"Undoubtedly the simplest yet most powerful software on cloud to automate & grow your coaching institute. Trusted by 2000+ institutions worldwide."}),s.jsx("button",{onClick:()=>t(3),className:"btn btn-primary btn-lg",style:{marginBottom:"40px",borderRadius:"4px"},children:"Get Business App"})]}),s.jsxs("div",{className:"col-md-6",children:[s.jsx("img",{src:"./images/academy-intro.png",alt:"",style:{width:"100%"}}),s.jsx("br",{}),s.jsx("br",{}),s.jsx("h5",{style:{textAlign:"center"},children:"Qik Coaching Institute Software"})]})]})})}),s.jsx("style",{dangerouslySetInnerHTML:{__html:`   .introtext h2{text-align:left;}
    .boxus { 
        align-self: flex-end;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        margin: 0 auto 0 auto;
        transform-origin: bottom;
    }
    .bounce-1us {
        animation-name: bounce-1us;
        animation-timing-function: linear;
    }
    @keyframes bounce-1us {
        0%   { transform: translateY(0); }
        50%  { transform: translateY(-20px); }
        100% { transform: translateY(0); }
    }
	table.table.uvstable {
    box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.08);margin-bottom:50px;  -webkit-transition: all 0.25s linear;
  transition: all 0.25s linear;
  -webkit-box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.08);
          box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.08);    min-height: 200px;
}
 
 
 .section-line-border {
        position: relative;
        overflow: hidden;
        height: 4px;
        width: 120px;
        border:none;
        background:#00abf6;
        margin:15px 0;
    }
    .section-line-border::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 4px;
        width: 60px;
        background:#00abf6;
    } .section-line-border1 {
        position: relative;
        overflow: hidden;
        height: 4px;
        width: 120px;
        border:none;
        background:#00abf6;
        margin:15px auto;
    }
    .section-line-border1::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 4px;
        width: 60px;
        background:#00abf6;
    }
.us-contact {
    font-size: 14px;
    line-height: 28px;color: #001e4b;
}.uvstable td img {
    width: 48px;
    height: 48px;
}.btn-primary{border-radius: 4px;}

.container, .container-lg, .container-md, .container-sm, .container-xl {
    max-width: 96%;
}.mshow{display:none;}.text-center-uvs{text-align:center;}.text-right-uvs{text-align:right;}
  @media only screen and (max-width: 780px) { section#contact-us {
    padding-bottom: 20px;
}  .mhide{display:none;}.introtext h2{text-align:center;}.mshow{display:block;} .span.uvs-span{font-size: 18px;}
#qik-pricing,#qik-features {
    padding-bottom: 10px;
}
.text-center-uvs{text-align:left;}.text-right-uvs{text-align:left;}
 }

html{overflow-x:hidden;}.form-uvsl .form-control {
    margin-bottom:16px;margin-top:8px;
    border: 0px solid #eee;
    background: #eee;
    padding: 25px 15px;
} 
	`}}),s.jsx("section",{ref:n=>e.current[2]=n,id:"qik-features",className:"qik-features",children:s.jsx("div",{className:"containervs",children:s.jsxs("div",{className:"col-md-12",children:[s.jsxs("div",{className:"col-md-12 containervs-text-center",children:[s.jsx("span",{className:"uvs-span",children:"Core Features"}),s.jsxs("h2",{children:["Next Generation features that will help you manage & grow your coaching institute seamlessly.",s.jsx("hr",{className:"section-line-border1"})," ",s.jsx("br",{}),s.jsx("br",{})]})]}),s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-md-4",children:s.jsx("table",{className:"table uvstable",children:s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("img",{src:"./images/cf1.svg",alt:""})}),s.jsxs("td",{children:[s.jsx("h4",{children:"Student Record"}),s.jsx("p",{children:"Record of student details with photographs personal & parent contact details, batches, previous year marks, etc."})]})]})})})}),s.jsx("div",{className:"col-md-4",children:s.jsx("table",{className:"table uvstable",children:s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("img",{src:"./images/cf2.svg",alt:""})}),s.jsxs("td",{children:[s.jsx("h4",{children:"Test Management"}),s.jsx("p",{children:"Facility to add Test details & marks, enter students marks, auto alerts to students & parents for marks obtained. Record of all tests & scored marks studentwise"})]})]})})})}),s.jsx("div",{className:"col-md-4",children:s.jsx("table",{className:"table uvstable",children:s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("img",{src:"./images/cf3.svg",alt:""})}),s.jsxs("td",{children:[s.jsx("h4",{children:"Fees Management"}),s.jsx("p",{children:"Keep track of all payments datewise. Alert for paid amount & remaining amountm facilityto print receipts."})]})]})})})}),s.jsx("div",{className:"col-md-4",children:s.jsx("table",{className:"table uvstable",children:s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("img",{src:"./images/cf4.svg",alt:""})}),s.jsxs("td",{children:[s.jsx("h4",{children:"Assign Homework"}),s.jsx("p",{children:" "})]})]})})})}),s.jsx("div",{className:"col-md-4",children:s.jsx("table",{className:"table uvstable",children:s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("img",{src:"./images/cf5.svg",alt:""})}),s.jsxs("td",{children:[s.jsx("h4",{children:"I-Card Printing"}),s.jsx("p",{children:"Be ahead & unique from competitors by providing I-cards to students. Facility to design own institute I-card by uploading header & footer logo. Generate Individual or Bulk I-cards batchwise & print."})]})]})})})}),s.jsx("div",{className:"col-md-4",children:s.jsx("table",{className:"table uvstable",children:s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("img",{src:"./images/cf6.svg",alt:""})}),s.jsxs("td",{children:[s.jsx("h4",{children:"Videos"}),s.jsx("p",{children:" "})]})]})})})}),s.jsx("div",{className:"col-md-4",children:s.jsx("table",{className:"table uvstable",children:s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("img",{src:"./images/cf7.svg",alt:""})}),s.jsxs("td",{children:[s.jsx("h4",{children:"Custom Setting"}),s.jsx("p",{children:"Management of all modules configuration settings such as SMS API Setting, facility to add/update institute details with logo, receipt header or footer images etc."})]})]})})})}),s.jsx("div",{className:"col-md-4",children:s.jsx("table",{className:"table uvstable",children:s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("img",{src:"./images/cf8.svg",alt:""})}),s.jsxs("td",{children:[s.jsx("h4",{children:"Mobile Application"}),s.jsx("p",{children:"Single App which gives information about Attendance, Tests, Exam results, Holidays and Fees details to students and parents."})]})]})})})}),s.jsx("div",{className:"col-md-4",children:s.jsx("table",{className:"table uvstable",children:s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("img",{src:"./images/cf9.svg",alt:""})}),s.jsxs("td",{children:[s.jsx("h4",{children:"Reports"}),s.jsx("p",{children:"All full-fledged reports with filter & sort to generate custom reports as per need. Complete set of reports such as enquires, registrations, attendance, tests, expences, Results student or batchwise & many more"})]})]})})})}),s.jsx("div",{className:"col-md-4",children:s.jsx("table",{className:"table uvstable",children:s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("img",{src:"./images/Enquiry.svg",alt:""})}),s.jsxs("td",{children:[s.jsx("h4",{children:"Enquiry Management"}),s.jsx("p",{children:"Keep track on all enquiries with status & follow up date reminder for coverting open enquiries into admissions. Enquiry report where can review all Prospect, Converted & Closed enquiries."})]})]})})})}),s.jsx("div",{className:"col-md-4",children:s.jsx("table",{className:"table uvstable",children:s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("img",{src:"./images/Biometric.svg",alt:""})}),s.jsxs("td",{children:[s.jsx("h4",{children:"Biometric Attendance"}),s.jsx("p",{children:"Track daily batch-wise attendance of students, send daily attendance alerts to absentees, push attendance from biometric machine to cloud in real time"})]})]})})})}),s.jsx("div",{className:"col-md-4",children:s.jsx("table",{className:"table uvstable",children:s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("img",{src:"./images/Subjectwise.svg",alt:""})}),s.jsxs("td",{children:[s.jsx("h4",{children:"Subjectwise Progress"}),s.jsx("p",{children:"Subjectwise complete progress report of student for parents. All performance record such as total present days & absent days, Fees Summary, Total tests & obtained marks, Remarks & many more"})]})]})})})}),s.jsx("div",{className:"col-md-4",children:s.jsx("table",{className:"table uvstable",children:s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("img",{src:"./images/sms.svg",alt:""})}),s.jsxs("td",{children:[s.jsx("h4",{children:"Auto SMS"}),s.jsx("p",{children:"Automatically send SMS alerts to parents for subjectwise absentee, fees payment, test results, holidays etc. Facility to send custom messages like for batch timing, festival wishes or b’day wish etc."})]})]})})})}),s.jsx("div",{className:"col-md-4",children:s.jsx("table",{className:"table uvstable",children:s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("img",{src:"./images/Exam.svg",alt:""})}),s.jsxs("td",{children:[s.jsx("h4",{children:"Test"}),s.jsx("p",{children:"Facility to add test & details such as title, description & out of marks. Test marks & absent for test alerts to parents. Storing all test records studentwise."})]})]})})})}),s.jsx("div",{className:"col-md-4",children:s.jsx("table",{className:"table uvstable",children:s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("img",{src:"./images/smstemplete.svg",alt:""})}),s.jsxs("td",{children:[s.jsx("h4",{children:"SMS Templates"}),s.jsx("p",{children:"Save all event based SMS templates such as New registration, Absentee, Test Marks, Holidays etc. Can create custom template & save for future use."})]})]})})})}),s.jsx("div",{className:"col-md-4",children:s.jsx("table",{className:"table uvstable",children:s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("img",{src:"./images/email.svg",alt:""})}),s.jsxs("td",{children:[s.jsx("h4",{children:"Email Alerts"}),s.jsx("p",{children:"Send custom email alerts to parents batchwise/subjectwise"})]})]})})})}),s.jsx("div",{className:"col-md-4",children:s.jsx("table",{className:"table uvstable",children:s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("img",{src:"./images/omr.svg",alt:""})}),s.jsxs("td",{children:[s.jsx("h4",{children:"OMR Integration"}),s.jsx("p",{children:"Automatic checking of OMR Sheets for MCQs. Automatically update marks scored and analyse question-wise performance. OMR results alert to parents via SMS."})]})]})})})}),s.jsx("div",{className:"col-md-4",children:s.jsx("table",{className:"table uvstable",children:s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("img",{src:"./images/expense.svg",alt:""})}),s.jsxs("td",{children:[s.jsx("h4",{children:"Manage Expense"}),s.jsx("p",{children:"Keep track of all expense entries & salaries. Create categories & heads as per expenses. Keep record of all payment transactions with bank account details."})]})]})})})}),s.jsx("div",{className:"col-md-4",children:s.jsx("table",{className:"table uvstable",children:s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("img",{src:"./images/subscription.svg",alt:""})}),s.jsxs("td",{children:[s.jsx("h4",{children:" Online Subscription"}),s.jsx("p",{children:"Easy & speedy modes to top up your subscription packages. Netbanking, Credit/Debit Card & Paytm."})]})]})})})})]})]})})}),s.jsx("section",{ref:n=>e.current[3]=n,id:"qik-pricing",className:"qik-pricing",children:s.jsx("div",{className:"containervs",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col-md-12",style:{textAlign:"center",marginBottom:"7%"},children:[s.jsx("span",{className:"uvs-span",children:"Pricing"}),s.jsxs("h2",{children:["App subscription ",s.jsx("hr",{className:"section-line-border1"})]})]}),s.jsx("div",{className:"col-md-12",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-md-4",children:s.jsx("div",{className:"uvs-classics",children:s.jsxs("table",{className:"uvs-table",children:[s.jsxs("caption",{children:["Customize Pack 1",s.jsx("br",{}),s.jsx("span",{className:"uvs-line"})]}),s.jsxs("tbody",{children:[s.jsx("tr",{children:s.jsxs("td",{children:[s.jsx("span",{style:{color:"#00abf6"},children:"50% discount"}),"   ",s.jsx("strong",{children:s.jsx("strike",{children:"$999"})})]})}),s.jsx("tr",{children:s.jsxs("td",{children:[s.jsx("h2",{children:"$450"})," Per Month"]})}),s.jsx("tr",{children:s.jsxs("td",{children:[s.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),s.jsx("tr",{children:s.jsxs("td",{children:[s.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),s.jsx("tr",{children:s.jsxs("td",{children:[s.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),s.jsx("tr",{children:s.jsxs("td",{children:[s.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),s.jsx("tr",{children:s.jsxs("td",{children:[s.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),s.jsx("tr",{children:s.jsx("td",{className:"select-td",children:s.jsxs("button",{className:"btn btn-uvs",children:["Choose Plan   ",s.jsx("i",{className:"fa fa-angle-right",children:" "}),s.jsx("i",{className:"fa fa-angle-right",children:" "})]})})})]})]})})}),s.jsx("div",{className:"col-md-4",children:s.jsx("div",{className:"uvs-classics-vs",children:s.jsxs("table",{className:"uvs-table",children:[s.jsxs("caption",{style:{color:"#fff"},children:["Annual Pack 3",s.jsx("br",{}),s.jsx("span",{className:"uvs-linevs"})]}),s.jsxs("tbody",{children:[s.jsx("tr",{children:s.jsxs("td",{children:[s.jsx("h2",{style:{color:"#fff"},children:"$990"})," Per Month"]})}),s.jsx("tr",{children:s.jsxs("td",{children:[s.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),s.jsx("tr",{children:s.jsxs("td",{children:[s.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),s.jsx("tr",{children:s.jsxs("td",{children:[s.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),s.jsx("tr",{children:s.jsxs("td",{children:[s.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),s.jsx("tr",{children:s.jsxs("td",{children:[s.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),s.jsx("tr",{children:s.jsx("td",{className:"select-td",children:s.jsxs("button",{className:"btn btn-primary",children:["Choose Plan   ",s.jsx("i",{className:"fa fa-angle-right",children:" "}),s.jsx("i",{className:"fa fa-angle-right",children:" "})]})})})]})]})})}),s.jsx("div",{className:"col-md-4",children:s.jsx("div",{className:"uvs-classics",children:s.jsxs("table",{className:"uvs-table",children:[s.jsxs("caption",{children:["Customize Pack 4 ",s.jsx("br",{}),s.jsx("span",{className:"uvs-line"})]}),s.jsxs("tbody",{children:[s.jsx("tr",{children:s.jsxs("td",{children:[s.jsx("span",{style:{color:"#00abf6"},children:"50% discount"}),"   ",s.jsx("strong",{children:s.jsx("strike",{children:"$999"})})]})}),s.jsx("tr",{children:s.jsxs("td",{children:[s.jsx("h2",{children:"$450"})," Per Month"]})}),s.jsx("tr",{children:s.jsxs("td",{children:[s.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),s.jsx("tr",{children:s.jsxs("td",{children:[s.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),s.jsx("tr",{children:s.jsxs("td",{children:[s.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),s.jsx("tr",{children:s.jsxs("td",{children:[s.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),s.jsx("tr",{children:s.jsxs("td",{children:[s.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),s.jsx("tr",{children:s.jsx("td",{className:"select-td",children:s.jsxs("button",{className:"btn btn-uvs",children:["Choose Plan   ",s.jsx("i",{className:"fa fa-angle-right",children:" "}),s.jsx("i",{className:"fa fa-angle-right",children:" "})]})})})]})]})})})]})})]})})}),s.jsx("section",{ref:n=>e.current[4]=n,id:"contact-us",style:{paddingTop:"100px"},children:s.jsx("div",{className:"containervs",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col-md-12 containervs-text-center",children:[s.jsx("span",{className:"uvs-span",children:"Contact us"}),s.jsxs("h2",{children:["Let's create progress ",s.jsx("br",{}),"together ",s.jsx("hr",{className:"section-line-border1"})]})]}),s.jsx("div",{className:"col-md-6",children:s.jsx("img",{src:"./images/contact.svg",width:"100%",alt:""})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"form-uvsl",children:[s.jsx("br",{}),s.jsx("br",{}),"Name ",s.jsx("input",{type:"text",name:"name",className:"form-control"}),"Email Address",s.jsx("input",{type:"text",name:"name",className:"form-control"}),"Mobile Number",s.jsx("input",{type:"text",name:"name",className:"form-control"}),"Description",s.jsx("textarea",{className:"form-control",defaultValue:""}),s.jsx("input",{type:"submit",className:"btn btn-primary btn-lg",text:"Submit"})]})})]})})}),s.jsxs("footer",{id:"footer",children:[s.jsx("div",{className:"footer-top",children:s.jsx("div",{className:"containervs",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col-md-4",children:[s.jsx("h4",{children:s.jsx(xe,{to:"/",children:s.jsx("img",{src:"./images/logo.png",alt:""})})}),s.jsx("p",{children:"Supercharge your business with 50+ integrated business applications. With Qik Cloud Stack, you can speedup, automate and bring transparency to your business activities. Experience the power of cloud to increase your business productivity by 20%."})]}),s.jsxs("div",{className:"col-md-4 text-center-uvs",children:[s.jsx("h4",{children:"Contact"}),s.jsx("ul",{style:{listStyleType:"none",padding:0,margin:0,marginTop:"20px"},children:s.jsx("li",{style:{marginBottom:"13px"},children:"Email: hello@qik.ai"})})]}),s.jsxs("div",{className:"col-md-4 text-right-uvs",children:[s.jsx("h4",{children:"Always reachable on"}),s.jsxs("div",{className:"social-links",style:{marginTop:"20px"},children:[s.jsx("button",{style:{backgroundColor:"transparent",outlineColor:"transparent",borderColor:"transparent",outline:"none"},children:s.jsx("img",{src:"./images/linkedin.svg",alt:""})}),s.jsx("button",{style:{backgroundColor:"transparent",outlineColor:"transparent",borderColor:"transparent",outline:"none"},children:s.jsx("img",{src:"./images/gmail.svg",style:{marginLeft:"20px"},alt:""})})]})]})]})})}),s.jsx("div",{className:"containervs",children:s.jsx("div",{className:"copyright",children:s.jsxs("p",{style:{textAlign:"center"},children:["All rights reserved © 2023",s.jsx("strong",{children:s.jsx("span",{children:s.jsx(xe,{to:"/",children:"Qik.Ai"})})})]})})})]})]})};class _h extends N.Component{render(){return s.jsx(vh,{basename:"/",children:s.jsxs("div",{children:[s.jsx("div",{style:{display:"none"},children:s.jsx(Ph,{})}),s.jsxs(ch,{children:[s.jsx(Zi,{path:"/",element:s.jsx(Eh,{})}),s.jsx(Zi,{path:"/Business",element:s.jsx(bh,{})})]})]})})}}const zh=document.getElementById("root"),Lh=zc(zh);Lh.render(s.jsx(Pa.StrictMode,{children:s.jsx(_h,{})}));
