function Wc(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function Vc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xs={exports:{}},pl={},ys={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lr=Symbol.for("react.element"),Hc=Symbol.for("react.portal"),Yc=Symbol.for("react.fragment"),Gc=Symbol.for("react.strict_mode"),Kc=Symbol.for("react.profiler"),Xc=Symbol.for("react.provider"),qc=Symbol.for("react.context"),Zc=Symbol.for("react.forward_ref"),Jc=Symbol.for("react.suspense"),ed=Symbol.for("react.memo"),td=Symbol.for("react.lazy"),ta=Symbol.iterator;function nd(e){return e===null||typeof e!="object"?null:(e=ta&&e[ta]||e["@@iterator"],typeof e=="function"?e:null)}var ws={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ks=Object.assign,js={};function pn(e,t,n){this.props=e,this.context=t,this.refs=js,this.updater=n||ws}pn.prototype.isReactComponent={};pn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ss(){}Ss.prototype=pn.prototype;function no(e,t,n){this.props=e,this.context=t,this.refs=js,this.updater=n||ws}var ro=no.prototype=new Ss;ro.constructor=no;ks(ro,pn.prototype);ro.isPureReactComponent=!0;var na=Array.isArray,Ns=Object.prototype.hasOwnProperty,lo={current:null},Cs={key:!0,ref:!0,__self:!0,__source:!0};function Es(e,t,n){var r,l={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Ns.call(t,r)&&!Cs.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];l.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:lr,type:e,key:i,ref:a,props:l,_owner:lo.current}}function rd(e,t){return{$$typeof:lr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function io(e){return typeof e=="object"&&e!==null&&e.$$typeof===lr}function ld(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ra=/\/+/g;function Tl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ld(""+e.key):t.toString(36)}function zr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case lr:case Hc:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+Tl(a,0):r,na(l)?(n="",e!=null&&(n=e.replace(ra,"$&/")+"/"),zr(l,t,n,"",function(u){return u})):l!=null&&(io(l)&&(l=rd(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(ra,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",na(e))for(var s=0;s<e.length;s++){i=e[s];var c=r+Tl(i,s);a+=zr(i,t,n,c,l)}else if(c=nd(e),typeof c=="function")for(e=c.call(e),s=0;!(i=e.next()).done;)i=i.value,c=r+Tl(i,s++),a+=zr(i,t,n,c,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function pr(e,t,n){if(e==null)return e;var r=[],l=0;return zr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function id(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Lr={transition:null},od={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Lr,ReactCurrentOwner:lo};function bs(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:pr,forEach:function(e,t,n){pr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pr(e,function(){t++}),t},toArray:function(e){return pr(e,function(t){return t})||[]},only:function(e){if(!io(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=pn;T.Fragment=Yc;T.Profiler=Kc;T.PureComponent=no;T.StrictMode=Gc;T.Suspense=Jc;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=od;T.act=bs;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ks({},e.props),l=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=lo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)Ns.call(t,c)&&!Cs.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:lr,type:e.type,key:l,ref:i,props:r,_owner:a}};T.createContext=function(e){return e={$$typeof:qc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Xc,_context:e},e.Consumer=e};T.createElement=Es;T.createFactory=function(e){var t=Es.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:Zc,render:e}};T.isValidElement=io;T.lazy=function(e){return{$$typeof:td,_payload:{_status:-1,_result:e},_init:id}};T.memo=function(e,t){return{$$typeof:ed,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=Lr.transition;Lr.transition={};try{e()}finally{Lr.transition=t}};T.unstable_act=bs;T.useCallback=function(e,t){return ce.current.useCallback(e,t)};T.useContext=function(e){return ce.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};T.useEffect=function(e,t){return ce.current.useEffect(e,t)};T.useId=function(){return ce.current.useId()};T.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return ce.current.useMemo(e,t)};T.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};T.useRef=function(e){return ce.current.useRef(e)};T.useState=function(e){return ce.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return ce.current.useTransition()};T.version="18.3.1";ys.exports=T;var N=ys.exports;const Ps=Vc(N),ad=Wc({__proto__:null,default:Ps},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sd=N,ud=Symbol.for("react.element"),cd=Symbol.for("react.fragment"),dd=Object.prototype.hasOwnProperty,fd=sd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pd={key:!0,ref:!0,__self:!0,__source:!0};function _s(e,t,n){var r,l={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)dd.call(t,r)&&!pd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:ud,type:e,key:i,ref:a,props:l,_owner:fd.current}}pl.Fragment=cd;pl.jsx=_s;pl.jsxs=_s;xs.exports=pl;var o=xs.exports,zs={exports:{}},Se={},Ls={exports:{}},Rs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,z){var R=b.length;b.push(z);e:for(;0<R;){var V=R-1>>>1,q=b[V];if(0<l(q,z))b[V]=z,b[R]=q,R=V;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var z=b[0],R=b.pop();if(R!==z){b[0]=R;e:for(var V=0,q=b.length,dr=q>>>1;V<dr;){var kt=2*(V+1)-1,Rl=b[kt],jt=kt+1,fr=b[jt];if(0>l(Rl,R))jt<q&&0>l(fr,Rl)?(b[V]=fr,b[jt]=R,V=jt):(b[V]=Rl,b[kt]=R,V=kt);else if(jt<q&&0>l(fr,R))b[V]=fr,b[jt]=R,V=jt;else break e}}return z}function l(b,z){var R=b.sortIndex-z.sortIndex;return R!==0?R:b.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var c=[],u=[],m=1,h=null,g=3,w=!1,y=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(b){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=b)r(u),z.sortIndex=z.expirationTime,t(c,z);else break;z=n(u)}}function x(b){if(v=!1,p(b),!y)if(n(c)!==null)y=!0,zl(S);else{var z=n(u);z!==null&&Ll(x,z.startTime-b)}}function S(b,z){y=!1,v&&(v=!1,f(_),_=-1),w=!0;var R=g;try{for(p(z),h=n(c);h!==null&&(!(h.expirationTime>z)||b&&!fe());){var V=h.callback;if(typeof V=="function"){h.callback=null,g=h.priorityLevel;var q=V(h.expirationTime<=z);z=e.unstable_now(),typeof q=="function"?h.callback=q:h===n(c)&&r(c),p(z)}else r(c);h=n(c)}if(h!==null)var dr=!0;else{var kt=n(u);kt!==null&&Ll(x,kt.startTime-z),dr=!1}return dr}finally{h=null,g=R,w=!1}}var P=!1,E=null,_=-1,F=5,L=-1;function fe(){return!(e.unstable_now()-L<F)}function gn(){if(E!==null){var b=e.unstable_now();L=b;var z=!0;try{z=E(!0,b)}finally{z?vn():(P=!1,E=null)}}else P=!1}var vn;if(typeof d=="function")vn=function(){d(gn)};else if(typeof MessageChannel<"u"){var ea=new MessageChannel,Qc=ea.port2;ea.port1.onmessage=gn,vn=function(){Qc.postMessage(null)}}else vn=function(){k(gn,0)};function zl(b){E=b,P||(P=!0,vn())}function Ll(b,z){_=k(function(){b(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,zl(S))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(b){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var R=g;g=z;try{return b()}finally{g=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,z){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var R=g;g=b;try{return z()}finally{g=R}},e.unstable_scheduleCallback=function(b,z,R){var V=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?V+R:V):R=V,b){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=R+q,b={id:m++,callback:z,priorityLevel:b,startTime:R,expirationTime:q,sortIndex:-1},R>V?(b.sortIndex=R,t(u,b),n(c)===null&&b===n(u)&&(v?(f(_),_=-1):v=!0,Ll(x,R-V))):(b.sortIndex=q,t(c,b),y||w||(y=!0,zl(S))),b},e.unstable_shouldYield=fe,e.unstable_wrapCallback=function(b){var z=g;return function(){var R=g;g=z;try{return b.apply(this,arguments)}finally{g=R}}}})(Rs);Ls.exports=Rs;var hd=Ls.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md=N,je=hd;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ts=new Set,An={};function Ot(e,t){on(e,t),on(e+"Capture",t)}function on(e,t){for(An[e]=t,e=0;e<t.length;e++)Ts.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oi=Object.prototype.hasOwnProperty,gd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la={},ia={};function vd(e){return oi.call(ia,e)?!0:oi.call(la,e)?!1:gd.test(e)?ia[e]=!0:(la[e]=!0,!1)}function xd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yd(e,t,n,r){if(t===null||typeof t>"u"||xd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,l,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var oo=/[\-:]([a-z])/g;function ao(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(oo,ao);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(oo,ao);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(oo,ao);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function so(e,t,n,r){var l=re.hasOwnProperty(t)?re[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(yd(t,n,l,r)&&(n=null),r||l===null?vd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=md.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hr=Symbol.for("react.element"),$t=Symbol.for("react.portal"),Ut=Symbol.for("react.fragment"),uo=Symbol.for("react.strict_mode"),ai=Symbol.for("react.profiler"),Is=Symbol.for("react.provider"),Os=Symbol.for("react.context"),co=Symbol.for("react.forward_ref"),si=Symbol.for("react.suspense"),ui=Symbol.for("react.suspense_list"),fo=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),Ms=Symbol.for("react.offscreen"),oa=Symbol.iterator;function xn(e){return e===null||typeof e!="object"?null:(e=oa&&e[oa]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Il;function En(e){if(Il===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Il=t&&t[1]||""}return`
`+Il+e}var Ol=!1;function Ml(e,t){if(!e||Ol)return"";Ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,s=i.length-1;1<=a&&0<=s&&l[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(l[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||l[a]!==i[s]){var c=`
`+l[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=s);break}}}finally{Ol=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?En(e):""}function wd(e){switch(e.tag){case 5:return En(e.type);case 16:return En("Lazy");case 13:return En("Suspense");case 19:return En("SuspenseList");case 0:case 2:case 15:return e=Ml(e.type,!1),e;case 11:return e=Ml(e.type.render,!1),e;case 1:return e=Ml(e.type,!0),e;default:return""}}function ci(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ut:return"Fragment";case $t:return"Portal";case ai:return"Profiler";case uo:return"StrictMode";case si:return"Suspense";case ui:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Os:return(e.displayName||"Context")+".Consumer";case Is:return(e._context.displayName||"Context")+".Provider";case co:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fo:return t=e.displayName||null,t!==null?t:ci(e.type)||"Memo";case et:t=e._payload,e=e._init;try{return ci(e(t))}catch{}}return null}function kd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ci(t);case 8:return t===uo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jd(e){var t=Fs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mr(e){e._valueTracker||(e._valueTracker=jd(e))}function Ds(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Fs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ur(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function di(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function aa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function As(e,t){t=t.checked,t!=null&&so(e,"checked",t,!1)}function fi(e,t){As(e,t);var n=gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pi(e,t.type,n):t.hasOwnProperty("defaultValue")&&pi(e,t.type,gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function pi(e,t,n){(t!=="number"||Ur(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var bn=Array.isArray;function Jt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function hi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ua(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(bn(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gt(n)}}function Bs(e,t){var n=gt(t.value),r=gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ca(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $s(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$s(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gr,Us=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gr=gr||document.createElement("div"),gr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sd=["Webkit","ms","Moz","O"];Object.keys(zn).forEach(function(e){Sd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),zn[t]=zn[e]})});function Qs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||zn.hasOwnProperty(e)&&zn[e]?(""+t).trim():t+"px"}function Ws(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Qs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Nd=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gi(e,t){if(t){if(Nd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function vi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xi=null;function po(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yi=null,en=null,tn=null;function da(e){if(e=ar(e)){if(typeof yi!="function")throw Error(j(280));var t=e.stateNode;t&&(t=xl(t),yi(e.stateNode,e.type,t))}}function Vs(e){en?tn?tn.push(e):tn=[e]:en=e}function Hs(){if(en){var e=en,t=tn;if(tn=en=null,da(e),t)for(e=0;e<t.length;e++)da(t[e])}}function Ys(e,t){return e(t)}function Gs(){}var Fl=!1;function Ks(e,t,n){if(Fl)return e(t,n);Fl=!0;try{return Ys(e,t,n)}finally{Fl=!1,(en!==null||tn!==null)&&(Gs(),Hs())}}function $n(e,t){var n=e.stateNode;if(n===null)return null;var r=xl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var wi=!1;if(Ge)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){wi=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{wi=!1}function Cd(e,t,n,r,l,i,a,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var Ln=!1,Qr=null,Wr=!1,ki=null,Ed={onError:function(e){Ln=!0,Qr=e}};function bd(e,t,n,r,l,i,a,s,c){Ln=!1,Qr=null,Cd.apply(Ed,arguments)}function Pd(e,t,n,r,l,i,a,s,c){if(bd.apply(this,arguments),Ln){if(Ln){var u=Qr;Ln=!1,Qr=null}else throw Error(j(198));Wr||(Wr=!0,ki=u)}}function Mt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Xs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fa(e){if(Mt(e)!==e)throw Error(j(188))}function _d(e){var t=e.alternate;if(!t){if(t=Mt(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return fa(l),e;if(i===r)return fa(l),t;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=l,r=i;else{for(var a=!1,s=l.child;s;){if(s===n){a=!0,n=l,r=i;break}if(s===r){a=!0,r=l,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=l;break}if(s===r){a=!0,r=i,n=l;break}s=s.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function qs(e){return e=_d(e),e!==null?Zs(e):null}function Zs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zs(e);if(t!==null)return t;e=e.sibling}return null}var Js=je.unstable_scheduleCallback,pa=je.unstable_cancelCallback,zd=je.unstable_shouldYield,Ld=je.unstable_requestPaint,H=je.unstable_now,Rd=je.unstable_getCurrentPriorityLevel,ho=je.unstable_ImmediatePriority,eu=je.unstable_UserBlockingPriority,Vr=je.unstable_NormalPriority,Td=je.unstable_LowPriority,tu=je.unstable_IdlePriority,hl=null,$e=null;function Id(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(hl,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Fd,Od=Math.log,Md=Math.LN2;function Fd(e){return e>>>=0,e===0?32:31-(Od(e)/Md|0)|0}var vr=64,xr=4194304;function Pn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~l;s!==0?r=Pn(s):(i&=a,i!==0&&(r=Pn(i)))}else a=n&~l,a!==0?r=Pn(a):i!==0&&(r=Pn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Oe(t),l=1<<n,r|=e[n],t&=~l;return r}function Dd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ad(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Oe(i),s=1<<a,c=l[a];c===-1?(!(s&n)||s&r)&&(l[a]=Dd(s,t)):c<=t&&(e.expiredLanes|=s),i&=~s}}function ji(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nu(){var e=vr;return vr<<=1,!(vr&4194240)&&(vr=64),e}function Dl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ir(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=n}function Bd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Oe(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function mo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Oe(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var O=0;function ru(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lu,go,iu,ou,au,Si=!1,yr=[],at=null,st=null,ut=null,Un=new Map,Qn=new Map,nt=[],$d="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ha(e,t){switch(e){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":st=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":Un.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qn.delete(t.pointerId)}}function wn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=ar(t),t!==null&&go(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ud(e,t,n,r,l){switch(t){case"focusin":return at=wn(at,e,t,n,r,l),!0;case"dragenter":return st=wn(st,e,t,n,r,l),!0;case"mouseover":return ut=wn(ut,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Un.set(i,wn(Un.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Qn.set(i,wn(Qn.get(i)||null,e,t,n,r,l)),!0}return!1}function su(e){var t=Ct(e.target);if(t!==null){var n=Mt(t);if(n!==null){if(t=n.tag,t===13){if(t=Xs(n),t!==null){e.blockedOn=t,au(e.priority,function(){iu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ni(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xi=r,n.target.dispatchEvent(r),xi=null}else return t=ar(n),t!==null&&go(t),e.blockedOn=n,!1;t.shift()}return!0}function ma(e,t,n){Rr(e)&&n.delete(t)}function Qd(){Si=!1,at!==null&&Rr(at)&&(at=null),st!==null&&Rr(st)&&(st=null),ut!==null&&Rr(ut)&&(ut=null),Un.forEach(ma),Qn.forEach(ma)}function kn(e,t){e.blockedOn===t&&(e.blockedOn=null,Si||(Si=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,Qd)))}function Wn(e){function t(l){return kn(l,e)}if(0<yr.length){kn(yr[0],e);for(var n=1;n<yr.length;n++){var r=yr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(at!==null&&kn(at,e),st!==null&&kn(st,e),ut!==null&&kn(ut,e),Un.forEach(t),Qn.forEach(t),n=0;n<nt.length;n++)r=nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nt.length&&(n=nt[0],n.blockedOn===null);)su(n),n.blockedOn===null&&nt.shift()}var nn=Ze.ReactCurrentBatchConfig,Yr=!0;function Wd(e,t,n,r){var l=O,i=nn.transition;nn.transition=null;try{O=1,vo(e,t,n,r)}finally{O=l,nn.transition=i}}function Vd(e,t,n,r){var l=O,i=nn.transition;nn.transition=null;try{O=4,vo(e,t,n,r)}finally{O=l,nn.transition=i}}function vo(e,t,n,r){if(Yr){var l=Ni(e,t,n,r);if(l===null)Gl(e,t,r,Gr,n),ha(e,r);else if(Ud(l,e,t,n,r))r.stopPropagation();else if(ha(e,r),t&4&&-1<$d.indexOf(e)){for(;l!==null;){var i=ar(l);if(i!==null&&lu(i),i=Ni(e,t,n,r),i===null&&Gl(e,t,r,Gr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Gl(e,t,r,null,n)}}var Gr=null;function Ni(e,t,n,r){if(Gr=null,e=po(r),e=Ct(e),e!==null)if(t=Mt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Xs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gr=e,null}function uu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rd()){case ho:return 1;case eu:return 4;case Vr:case Td:return 16;case tu:return 536870912;default:return 16}default:return 16}}var lt=null,xo=null,Tr=null;function cu(){if(Tr)return Tr;var e,t=xo,n=t.length,r,l="value"in lt?lt.value:lt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[i-r];r++);return Tr=l.slice(e,1<r?1-r:void 0)}function Ir(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wr(){return!0}function ga(){return!1}function Ne(e){function t(n,r,l,i,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?wr:ga,this.isPropagationStopped=ga,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wr)},persist:function(){},isPersistent:wr}),t}var hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yo=Ne(hn),or=Q({},hn,{view:0,detail:0}),Hd=Ne(or),Al,Bl,jn,ml=Q({},or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jn&&(jn&&e.type==="mousemove"?(Al=e.screenX-jn.screenX,Bl=e.screenY-jn.screenY):Bl=Al=0,jn=e),Al)},movementY:function(e){return"movementY"in e?e.movementY:Bl}}),va=Ne(ml),Yd=Q({},ml,{dataTransfer:0}),Gd=Ne(Yd),Kd=Q({},or,{relatedTarget:0}),$l=Ne(Kd),Xd=Q({},hn,{animationName:0,elapsedTime:0,pseudoElement:0}),qd=Ne(Xd),Zd=Q({},hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jd=Ne(Zd),ef=Q({},hn,{data:0}),xa=Ne(ef),tf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rf[e])?!!t[e]:!1}function wo(){return lf}var of=Q({},or,{key:function(e){if(e.key){var t=tf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ir(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wo,charCode:function(e){return e.type==="keypress"?Ir(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ir(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),af=Ne(of),sf=Q({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ya=Ne(sf),uf=Q({},or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wo}),cf=Ne(uf),df=Q({},hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ff=Ne(df),pf=Q({},ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hf=Ne(pf),mf=[9,13,27,32],ko=Ge&&"CompositionEvent"in window,Rn=null;Ge&&"documentMode"in document&&(Rn=document.documentMode);var gf=Ge&&"TextEvent"in window&&!Rn,du=Ge&&(!ko||Rn&&8<Rn&&11>=Rn),wa=" ",ka=!1;function fu(e,t){switch(e){case"keyup":return mf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function vf(e,t){switch(e){case"compositionend":return pu(t);case"keypress":return t.which!==32?null:(ka=!0,wa);case"textInput":return e=t.data,e===wa&&ka?null:e;default:return null}}function xf(e,t){if(Qt)return e==="compositionend"||!ko&&fu(e,t)?(e=cu(),Tr=xo=lt=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return du&&t.locale!=="ko"?null:t.data;default:return null}}var yf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yf[e.type]:t==="textarea"}function hu(e,t,n,r){Vs(r),t=Kr(t,"onChange"),0<t.length&&(n=new yo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Tn=null,Vn=null;function wf(e){Cu(e,0)}function gl(e){var t=Ht(e);if(Ds(t))return e}function kf(e,t){if(e==="change")return t}var mu=!1;if(Ge){var Ul;if(Ge){var Ql="oninput"in document;if(!Ql){var Sa=document.createElement("div");Sa.setAttribute("oninput","return;"),Ql=typeof Sa.oninput=="function"}Ul=Ql}else Ul=!1;mu=Ul&&(!document.documentMode||9<document.documentMode)}function Na(){Tn&&(Tn.detachEvent("onpropertychange",gu),Vn=Tn=null)}function gu(e){if(e.propertyName==="value"&&gl(Vn)){var t=[];hu(t,Vn,e,po(e)),Ks(wf,t)}}function jf(e,t,n){e==="focusin"?(Na(),Tn=t,Vn=n,Tn.attachEvent("onpropertychange",gu)):e==="focusout"&&Na()}function Sf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(Vn)}function Nf(e,t){if(e==="click")return gl(t)}function Cf(e,t){if(e==="input"||e==="change")return gl(t)}function Ef(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fe=typeof Object.is=="function"?Object.is:Ef;function Hn(e,t){if(Fe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!oi.call(t,l)||!Fe(e[l],t[l]))return!1}return!0}function Ca(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ea(e,t){var n=Ca(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ca(n)}}function vu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xu(){for(var e=window,t=Ur();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ur(e.document)}return t}function jo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function bf(e){var t=xu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vu(n.ownerDocument.documentElement,n)){if(r!==null&&jo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Ea(n,i);var a=Ea(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pf=Ge&&"documentMode"in document&&11>=document.documentMode,Wt=null,Ci=null,In=null,Ei=!1;function ba(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ei||Wt==null||Wt!==Ur(r)||(r=Wt,"selectionStart"in r&&jo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),In&&Hn(In,r)||(In=r,r=Kr(Ci,"onSelect"),0<r.length&&(t=new yo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wt)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vt={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},Wl={},yu={};Ge&&(yu=document.createElement("div").style,"AnimationEvent"in window||(delete Vt.animationend.animation,delete Vt.animationiteration.animation,delete Vt.animationstart.animation),"TransitionEvent"in window||delete Vt.transitionend.transition);function vl(e){if(Wl[e])return Wl[e];if(!Vt[e])return e;var t=Vt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yu)return Wl[e]=t[n];return e}var wu=vl("animationend"),ku=vl("animationiteration"),ju=vl("animationstart"),Su=vl("transitionend"),Nu=new Map,Pa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xt(e,t){Nu.set(e,t),Ot(t,[e])}for(var Vl=0;Vl<Pa.length;Vl++){var Hl=Pa[Vl],_f=Hl.toLowerCase(),zf=Hl[0].toUpperCase()+Hl.slice(1);xt(_f,"on"+zf)}xt(wu,"onAnimationEnd");xt(ku,"onAnimationIteration");xt(ju,"onAnimationStart");xt("dblclick","onDoubleClick");xt("focusin","onFocus");xt("focusout","onBlur");xt(Su,"onTransitionEnd");on("onMouseEnter",["mouseout","mouseover"]);on("onMouseLeave",["mouseout","mouseover"]);on("onPointerEnter",["pointerout","pointerover"]);on("onPointerLeave",["pointerout","pointerover"]);Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lf=new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));function _a(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Pd(r,t,void 0,e),e.currentTarget=null}function Cu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==i&&l.isPropagationStopped())break e;_a(l,s,u),i=c}else for(a=0;a<r.length;a++){if(s=r[a],c=s.instance,u=s.currentTarget,s=s.listener,c!==i&&l.isPropagationStopped())break e;_a(l,s,u),i=c}}}if(Wr)throw e=ki,Wr=!1,ki=null,e}function D(e,t){var n=t[Li];n===void 0&&(n=t[Li]=new Set);var r=e+"__bubble";n.has(r)||(Eu(t,e,2,!1),n.add(r))}function Yl(e,t,n){var r=0;t&&(r|=4),Eu(n,e,r,t)}var jr="_reactListening"+Math.random().toString(36).slice(2);function Yn(e){if(!e[jr]){e[jr]=!0,Ts.forEach(function(n){n!=="selectionchange"&&(Lf.has(n)||Yl(n,!1,e),Yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jr]||(t[jr]=!0,Yl("selectionchange",!1,t))}}function Eu(e,t,n,r){switch(uu(t)){case 1:var l=Wd;break;case 4:l=Vd;break;default:l=vo}n=l.bind(null,t,n,e),l=void 0,!wi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Gl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;a=a.return}for(;s!==null;){if(a=Ct(s),a===null)return;if(c=a.tag,c===5||c===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Ks(function(){var u=i,m=po(n),h=[];e:{var g=Nu.get(e);if(g!==void 0){var w=yo,y=e;switch(e){case"keypress":if(Ir(n)===0)break e;case"keydown":case"keyup":w=af;break;case"focusin":y="focus",w=$l;break;case"focusout":y="blur",w=$l;break;case"beforeblur":case"afterblur":w=$l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=va;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Gd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=cf;break;case wu:case ku:case ju:w=qd;break;case Su:w=ff;break;case"scroll":w=Hd;break;case"wheel":w=hf;break;case"copy":case"cut":case"paste":w=Jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ya}var v=(t&4)!==0,k=!v&&e==="scroll",f=v?g!==null?g+"Capture":null:g;v=[];for(var d=u,p;d!==null;){p=d;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=$n(d,f),x!=null&&v.push(Gn(d,x,p)))),k)break;d=d.return}0<v.length&&(g=new w(g,y,null,n,m),h.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&n!==xi&&(y=n.relatedTarget||n.fromElement)&&(Ct(y)||y[Ke]))break e;if((w||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=u,y=y?Ct(y):null,y!==null&&(k=Mt(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=u),w!==y)){if(v=va,x="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=ya,x="onPointerLeave",f="onPointerEnter",d="pointer"),k=w==null?g:Ht(w),p=y==null?g:Ht(y),g=new v(x,d+"leave",w,n,m),g.target=k,g.relatedTarget=p,x=null,Ct(m)===u&&(v=new v(f,d+"enter",y,n,m),v.target=p,v.relatedTarget=k,x=v),k=x,w&&y)t:{for(v=w,f=y,d=0,p=v;p;p=Bt(p))d++;for(p=0,x=f;x;x=Bt(x))p++;for(;0<d-p;)v=Bt(v),d--;for(;0<p-d;)f=Bt(f),p--;for(;d--;){if(v===f||f!==null&&v===f.alternate)break t;v=Bt(v),f=Bt(f)}v=null}else v=null;w!==null&&za(h,g,w,v,!1),y!==null&&k!==null&&za(h,k,y,v,!0)}}e:{if(g=u?Ht(u):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var S=kf;else if(ja(g))if(mu)S=Cf;else{S=Sf;var P=jf}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=Nf);if(S&&(S=S(e,u))){hu(h,S,n,m);break e}P&&P(e,g,u),e==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&pi(g,"number",g.value)}switch(P=u?Ht(u):window,e){case"focusin":(ja(P)||P.contentEditable==="true")&&(Wt=P,Ci=u,In=null);break;case"focusout":In=Ci=Wt=null;break;case"mousedown":Ei=!0;break;case"contextmenu":case"mouseup":case"dragend":Ei=!1,ba(h,n,m);break;case"selectionchange":if(Pf)break;case"keydown":case"keyup":ba(h,n,m)}var E;if(ko)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Qt?fu(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(du&&n.locale!=="ko"&&(Qt||_!=="onCompositionStart"?_==="onCompositionEnd"&&Qt&&(E=cu()):(lt=m,xo="value"in lt?lt.value:lt.textContent,Qt=!0)),P=Kr(u,_),0<P.length&&(_=new xa(_,e,null,n,m),h.push({event:_,listeners:P}),E?_.data=E:(E=pu(n),E!==null&&(_.data=E)))),(E=gf?vf(e,n):xf(e,n))&&(u=Kr(u,"onBeforeInput"),0<u.length&&(m=new xa("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:u}),m.data=E))}Cu(h,t)})}function Gn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=$n(e,n),i!=null&&r.unshift(Gn(e,i,l)),i=$n(e,t),i!=null&&r.push(Gn(e,i,l))),e=e.return}return r}function Bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function za(e,t,n,r,l){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,c=s.alternate,u=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&u!==null&&(s=u,l?(c=$n(n,i),c!=null&&a.unshift(Gn(n,c,s))):l||(c=$n(n,i),c!=null&&a.push(Gn(n,c,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Rf=/\r\n?/g,Tf=/\u0000|\uFFFD/g;function La(e){return(typeof e=="string"?e:""+e).replace(Rf,`
`).replace(Tf,"")}function Sr(e,t,n){if(t=La(t),La(e)!==t&&n)throw Error(j(425))}function Xr(){}var bi=null,Pi=null;function _i(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zi=typeof setTimeout=="function"?setTimeout:void 0,If=typeof clearTimeout=="function"?clearTimeout:void 0,Ra=typeof Promise=="function"?Promise:void 0,Of=typeof queueMicrotask=="function"?queueMicrotask:typeof Ra<"u"?function(e){return Ra.resolve(null).then(e).catch(Mf)}:zi;function Mf(e){setTimeout(function(){throw e})}function Kl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Wn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Wn(t)}function ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ta(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mn=Math.random().toString(36).slice(2),Be="__reactFiber$"+mn,Kn="__reactProps$"+mn,Ke="__reactContainer$"+mn,Li="__reactEvents$"+mn,Ff="__reactListeners$"+mn,Df="__reactHandles$"+mn;function Ct(e){var t=e[Be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ta(e);e!==null;){if(n=e[Be])return n;e=Ta(e)}return t}e=n,n=e.parentNode}return null}function ar(e){return e=e[Be]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ht(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function xl(e){return e[Kn]||null}var Ri=[],Yt=-1;function yt(e){return{current:e}}function A(e){0>Yt||(e.current=Ri[Yt],Ri[Yt]=null,Yt--)}function M(e,t){Yt++,Ri[Yt]=e.current,e.current=t}var vt={},ae=yt(vt),me=yt(!1),zt=vt;function an(e,t){var n=e.type.contextTypes;if(!n)return vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ge(e){return e=e.childContextTypes,e!=null}function qr(){A(me),A(ae)}function Ia(e,t,n){if(ae.current!==vt)throw Error(j(168));M(ae,t),M(me,n)}function bu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(j(108,kd(e)||"Unknown",l));return Q({},n,r)}function Zr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,zt=ae.current,M(ae,e),M(me,me.current),!0}function Oa(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=bu(e,t,zt),r.__reactInternalMemoizedMergedChildContext=e,A(me),A(ae),M(ae,e)):A(me),M(me,n)}var We=null,yl=!1,Xl=!1;function Pu(e){We===null?We=[e]:We.push(e)}function Af(e){yl=!0,Pu(e)}function wt(){if(!Xl&&We!==null){Xl=!0;var e=0,t=O;try{var n=We;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}We=null,yl=!1}catch(l){throw We!==null&&(We=We.slice(e+1)),Js(ho,wt),l}finally{O=t,Xl=!1}}return null}var Gt=[],Kt=0,Jr=null,el=0,Ce=[],Ee=0,Lt=null,Ve=1,He="";function St(e,t){Gt[Kt++]=el,Gt[Kt++]=Jr,Jr=e,el=t}function _u(e,t,n){Ce[Ee++]=Ve,Ce[Ee++]=He,Ce[Ee++]=Lt,Lt=e;var r=Ve;e=He;var l=32-Oe(r)-1;r&=~(1<<l),n+=1;var i=32-Oe(t)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,Ve=1<<32-Oe(t)+l|n<<l|r,He=i+e}else Ve=1<<i|n<<l|r,He=e}function So(e){e.return!==null&&(St(e,1),_u(e,1,0))}function No(e){for(;e===Jr;)Jr=Gt[--Kt],Gt[Kt]=null,el=Gt[--Kt],Gt[Kt]=null;for(;e===Lt;)Lt=Ce[--Ee],Ce[Ee]=null,He=Ce[--Ee],Ce[Ee]=null,Ve=Ce[--Ee],Ce[Ee]=null}var ke=null,we=null,B=!1,Ie=null;function zu(e,t){var n=be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ma(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,we=ct(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Lt!==null?{id:Ve,overflow:He}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,we=null,!0):!1;default:return!1}}function Ti(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ii(e){if(B){var t=we;if(t){var n=t;if(!Ma(e,t)){if(Ti(e))throw Error(j(418));t=ct(n.nextSibling);var r=ke;t&&Ma(e,t)?zu(r,n):(e.flags=e.flags&-4097|2,B=!1,ke=e)}}else{if(Ti(e))throw Error(j(418));e.flags=e.flags&-4097|2,B=!1,ke=e}}}function Fa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function Nr(e){if(e!==ke)return!1;if(!B)return Fa(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_i(e.type,e.memoizedProps)),t&&(t=we)){if(Ti(e))throw Lu(),Error(j(418));for(;t;)zu(e,t),t=ct(t.nextSibling)}if(Fa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=ct(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=ke?ct(e.stateNode.nextSibling):null;return!0}function Lu(){for(var e=we;e;)e=ct(e.nextSibling)}function sn(){we=ke=null,B=!1}function Co(e){Ie===null?Ie=[e]:Ie.push(e)}var Bf=Ze.ReactCurrentBatchConfig;function Sn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=l.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Cr(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Da(e){var t=e._init;return t(e._payload)}function Ru(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=ht(f,d),f.index=0,f.sibling=null,f}function i(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,x){return d===null||d.tag!==6?(d=ri(p,f.mode,x),d.return=f,d):(d=l(d,p),d.return=f,d)}function c(f,d,p,x){var S=p.type;return S===Ut?m(f,d,p.props.children,x,p.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===et&&Da(S)===d.type)?(x=l(d,p.props),x.ref=Sn(f,d,p),x.return=f,x):(x=$r(p.type,p.key,p.props,null,f.mode,x),x.ref=Sn(f,d,p),x.return=f,x)}function u(f,d,p,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=li(p,f.mode,x),d.return=f,d):(d=l(d,p.children||[]),d.return=f,d)}function m(f,d,p,x,S){return d===null||d.tag!==7?(d=_t(p,f.mode,x,S),d.return=f,d):(d=l(d,p),d.return=f,d)}function h(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ri(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case hr:return p=$r(d.type,d.key,d.props,null,f.mode,p),p.ref=Sn(f,null,d),p.return=f,p;case $t:return d=li(d,f.mode,p),d.return=f,d;case et:var x=d._init;return h(f,x(d._payload),p)}if(bn(d)||xn(d))return d=_t(d,f.mode,p,null),d.return=f,d;Cr(f,d)}return null}function g(f,d,p,x){var S=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:s(f,d,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:return p.key===S?c(f,d,p,x):null;case $t:return p.key===S?u(f,d,p,x):null;case et:return S=p._init,g(f,d,S(p._payload),x)}if(bn(p)||xn(p))return S!==null?null:m(f,d,p,x,null);Cr(f,p)}return null}function w(f,d,p,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,s(d,f,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case hr:return f=f.get(x.key===null?p:x.key)||null,c(d,f,x,S);case $t:return f=f.get(x.key===null?p:x.key)||null,u(d,f,x,S);case et:var P=x._init;return w(f,d,p,P(x._payload),S)}if(bn(x)||xn(x))return f=f.get(p)||null,m(d,f,x,S,null);Cr(d,x)}return null}function y(f,d,p,x){for(var S=null,P=null,E=d,_=d=0,F=null;E!==null&&_<p.length;_++){E.index>_?(F=E,E=null):F=E.sibling;var L=g(f,E,p[_],x);if(L===null){E===null&&(E=F);break}e&&E&&L.alternate===null&&t(f,E),d=i(L,d,_),P===null?S=L:P.sibling=L,P=L,E=F}if(_===p.length)return n(f,E),B&&St(f,_),S;if(E===null){for(;_<p.length;_++)E=h(f,p[_],x),E!==null&&(d=i(E,d,_),P===null?S=E:P.sibling=E,P=E);return B&&St(f,_),S}for(E=r(f,E);_<p.length;_++)F=w(E,f,_,p[_],x),F!==null&&(e&&F.alternate!==null&&E.delete(F.key===null?_:F.key),d=i(F,d,_),P===null?S=F:P.sibling=F,P=F);return e&&E.forEach(function(fe){return t(f,fe)}),B&&St(f,_),S}function v(f,d,p,x){var S=xn(p);if(typeof S!="function")throw Error(j(150));if(p=S.call(p),p==null)throw Error(j(151));for(var P=S=null,E=d,_=d=0,F=null,L=p.next();E!==null&&!L.done;_++,L=p.next()){E.index>_?(F=E,E=null):F=E.sibling;var fe=g(f,E,L.value,x);if(fe===null){E===null&&(E=F);break}e&&E&&fe.alternate===null&&t(f,E),d=i(fe,d,_),P===null?S=fe:P.sibling=fe,P=fe,E=F}if(L.done)return n(f,E),B&&St(f,_),S;if(E===null){for(;!L.done;_++,L=p.next())L=h(f,L.value,x),L!==null&&(d=i(L,d,_),P===null?S=L:P.sibling=L,P=L);return B&&St(f,_),S}for(E=r(f,E);!L.done;_++,L=p.next())L=w(E,f,_,L.value,x),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?_:L.key),d=i(L,d,_),P===null?S=L:P.sibling=L,P=L);return e&&E.forEach(function(gn){return t(f,gn)}),B&&St(f,_),S}function k(f,d,p,x){if(typeof p=="object"&&p!==null&&p.type===Ut&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:e:{for(var S=p.key,P=d;P!==null;){if(P.key===S){if(S=p.type,S===Ut){if(P.tag===7){n(f,P.sibling),d=l(P,p.props.children),d.return=f,f=d;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===et&&Da(S)===P.type){n(f,P.sibling),d=l(P,p.props),d.ref=Sn(f,P,p),d.return=f,f=d;break e}n(f,P);break}else t(f,P);P=P.sibling}p.type===Ut?(d=_t(p.props.children,f.mode,x,p.key),d.return=f,f=d):(x=$r(p.type,p.key,p.props,null,f.mode,x),x.ref=Sn(f,d,p),x.return=f,f=x)}return a(f);case $t:e:{for(P=p.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=l(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=li(p,f.mode,x),d.return=f,f=d}return a(f);case et:return P=p._init,k(f,d,P(p._payload),x)}if(bn(p))return y(f,d,p,x);if(xn(p))return v(f,d,p,x);Cr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=l(d,p),d.return=f,f=d):(n(f,d),d=ri(p,f.mode,x),d.return=f,f=d),a(f)):n(f,d)}return k}var un=Ru(!0),Tu=Ru(!1),tl=yt(null),nl=null,Xt=null,Eo=null;function bo(){Eo=Xt=nl=null}function Po(e){var t=tl.current;A(tl),e._currentValue=t}function Oi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function rn(e,t){nl=e,Eo=Xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(Eo!==e)if(e={context:e,memoizedValue:t,next:null},Xt===null){if(nl===null)throw Error(j(308));Xt=e,nl.dependencies={lanes:0,firstContext:e}}else Xt=Xt.next=e;return t}var Et=null;function _o(e){Et===null?Et=[e]:Et.push(e)}function Iu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,_o(t)):(n.next=l.next,l.next=n),t.interleaved=n,Xe(e,r)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tt=!1;function zo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ou(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Xe(e,n)}return l=r.interleaved,l===null?(t.next=t,_o(r)):(t.next=l.next,l.next=t),r.interleaved=t,Xe(e,n)}function Or(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mo(e,n)}}function Aa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function rl(e,t,n,r){var l=e.updateQueue;tt=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var c=s,u=c.next;c.next=null,a===null?i=u:a.next=u,a=c;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==a&&(s===null?m.firstBaseUpdate=u:s.next=u,m.lastBaseUpdate=c))}if(i!==null){var h=l.baseState;a=0,m=u=c=null,s=i;do{var g=s.lane,w=s.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,v=s;switch(g=t,w=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(w,h,g);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,g=typeof y=="function"?y.call(w,h,g):y,g==null)break e;h=Q({},h,g);break e;case 2:tt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[s]:g.push(s))}else w={eventTime:w,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(u=m=w,c=h):m=m.next=w,a|=g;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;g=s,s=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(m===null&&(c=h),l.baseState=c,l.firstBaseUpdate=u,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Tt|=a,e.lanes=a,e.memoizedState=h}}function Ba(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(j(191,l));l.call(r)}}}var sr={},Ue=yt(sr),Xn=yt(sr),qn=yt(sr);function bt(e){if(e===sr)throw Error(j(174));return e}function Lo(e,t){switch(M(qn,t),M(Xn,e),M(Ue,sr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:mi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=mi(t,e)}A(Ue),M(Ue,t)}function cn(){A(Ue),A(Xn),A(qn)}function Mu(e){bt(qn.current);var t=bt(Ue.current),n=mi(t,e.type);t!==n&&(M(Xn,e),M(Ue,n))}function Ro(e){Xn.current===e&&(A(Ue),A(Xn))}var $=yt(0);function ll(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ql=[];function To(){for(var e=0;e<ql.length;e++)ql[e]._workInProgressVersionPrimary=null;ql.length=0}var Mr=Ze.ReactCurrentDispatcher,Zl=Ze.ReactCurrentBatchConfig,Rt=0,U=null,K=null,Z=null,il=!1,On=!1,Zn=0,$f=0;function le(){throw Error(j(321))}function Io(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fe(e[n],t[n]))return!1;return!0}function Oo(e,t,n,r,l,i){if(Rt=i,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Mr.current=e===null||e.memoizedState===null?Vf:Hf,e=n(r,l),On){i=0;do{if(On=!1,Zn=0,25<=i)throw Error(j(301));i+=1,Z=K=null,t.updateQueue=null,Mr.current=Yf,e=n(r,l)}while(On)}if(Mr.current=ol,t=K!==null&&K.next!==null,Rt=0,Z=K=U=null,il=!1,t)throw Error(j(300));return e}function Mo(){var e=Zn!==0;return Zn=0,e}function Ae(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?U.memoizedState=Z=e:Z=Z.next=e,Z}function ze(){if(K===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=Z===null?U.memoizedState:Z.next;if(t!==null)Z=t,K=e;else{if(e===null)throw Error(j(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Z===null?U.memoizedState=Z=e:Z=Z.next=e}return Z}function Jn(e,t){return typeof t=="function"?t(e):t}function Jl(e){var t=ze(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=K,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=a=null,c=null,u=i;do{var m=u.lane;if((Rt&m)===m)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=h,a=r):c=c.next=h,U.lanes|=m,Tt|=m}u=u.next}while(u!==null&&u!==i);c===null?a=r:c.next=s,Fe(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,U.lanes|=i,Tt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ei(e){var t=ze(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);Fe(i,t.memoizedState)||(he=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Fu(){}function Du(e,t){var n=U,r=ze(),l=t(),i=!Fe(r.memoizedState,l);if(i&&(r.memoizedState=l,he=!0),r=r.queue,Fo($u.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,er(9,Bu.bind(null,n,r,l,t),void 0,null),J===null)throw Error(j(349));Rt&30||Au(n,t,l)}return l}function Au(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bu(e,t,n,r){t.value=n,t.getSnapshot=r,Uu(t)&&Qu(e)}function $u(e,t,n){return n(function(){Uu(t)&&Qu(e)})}function Uu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fe(e,n)}catch{return!0}}function Qu(e){var t=Xe(e,1);t!==null&&Me(t,e,1,-1)}function $a(e){var t=Ae();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:e},t.queue=e,e=e.dispatch=Wf.bind(null,U,e),[t.memoizedState,e]}function er(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wu(){return ze().memoizedState}function Fr(e,t,n,r){var l=Ae();U.flags|=e,l.memoizedState=er(1|t,n,void 0,r===void 0?null:r)}function wl(e,t,n,r){var l=ze();r=r===void 0?null:r;var i=void 0;if(K!==null){var a=K.memoizedState;if(i=a.destroy,r!==null&&Io(r,a.deps)){l.memoizedState=er(t,n,i,r);return}}U.flags|=e,l.memoizedState=er(1|t,n,i,r)}function Ua(e,t){return Fr(8390656,8,e,t)}function Fo(e,t){return wl(2048,8,e,t)}function Vu(e,t){return wl(4,2,e,t)}function Hu(e,t){return wl(4,4,e,t)}function Yu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gu(e,t,n){return n=n!=null?n.concat([e]):null,wl(4,4,Yu.bind(null,t,e),n)}function Do(){}function Ku(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Io(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xu(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Io(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qu(e,t,n){return Rt&21?(Fe(n,t)||(n=nu(),U.lanes|=n,Tt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function Uf(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=Zl.transition;Zl.transition={};try{e(!1),t()}finally{O=n,Zl.transition=r}}function Zu(){return ze().memoizedState}function Qf(e,t,n){var r=pt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ju(e))ec(t,n);else if(n=Iu(e,t,n,r),n!==null){var l=ue();Me(n,e,r,l),tc(n,t,r)}}function Wf(e,t,n){var r=pt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ju(e))ec(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(l.hasEagerState=!0,l.eagerState=s,Fe(s,a)){var c=t.interleaved;c===null?(l.next=l,_o(t)):(l.next=c.next,c.next=l),t.interleaved=l;return}}catch{}finally{}n=Iu(e,t,l,r),n!==null&&(l=ue(),Me(n,e,r,l),tc(n,t,r))}}function Ju(e){var t=e.alternate;return e===U||t!==null&&t===U}function ec(e,t){On=il=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mo(e,n)}}var ol={readContext:_e,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},Vf={readContext:_e,useCallback:function(e,t){return Ae().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:Ua,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fr(4194308,4,Yu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fr(4,2,e,t)},useMemo:function(e,t){var n=Ae();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ae();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qf.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=Ae();return e={current:e},t.memoizedState=e},useState:$a,useDebugValue:Do,useDeferredValue:function(e){return Ae().memoizedState=e},useTransition:function(){var e=$a(!1),t=e[0];return e=Uf.bind(null,e[1]),Ae().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=U,l=Ae();if(B){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),J===null)throw Error(j(349));Rt&30||Au(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Ua($u.bind(null,r,i,e),[e]),r.flags|=2048,er(9,Bu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ae(),t=J.identifierPrefix;if(B){var n=He,r=Ve;n=(r&~(1<<32-Oe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$f++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Hf={readContext:_e,useCallback:Ku,useContext:_e,useEffect:Fo,useImperativeHandle:Gu,useInsertionEffect:Vu,useLayoutEffect:Hu,useMemo:Xu,useReducer:Jl,useRef:Wu,useState:function(){return Jl(Jn)},useDebugValue:Do,useDeferredValue:function(e){var t=ze();return qu(t,K.memoizedState,e)},useTransition:function(){var e=Jl(Jn)[0],t=ze().memoizedState;return[e,t]},useMutableSource:Fu,useSyncExternalStore:Du,useId:Zu,unstable_isNewReconciler:!1},Yf={readContext:_e,useCallback:Ku,useContext:_e,useEffect:Fo,useImperativeHandle:Gu,useInsertionEffect:Vu,useLayoutEffect:Hu,useMemo:Xu,useReducer:ei,useRef:Wu,useState:function(){return ei(Jn)},useDebugValue:Do,useDeferredValue:function(e){var t=ze();return K===null?t.memoizedState=e:qu(t,K.memoizedState,e)},useTransition:function(){var e=ei(Jn)[0],t=ze().memoizedState;return[e,t]},useMutableSource:Fu,useSyncExternalStore:Du,useId:Zu,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Mi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var kl={isMounted:function(e){return(e=e._reactInternals)?Mt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),l=pt(e),i=Ye(r,l);i.payload=t,n!=null&&(i.callback=n),t=dt(e,i,l),t!==null&&(Me(t,e,l,r),Or(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),l=pt(e),i=Ye(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=dt(e,i,l),t!==null&&(Me(t,e,l,r),Or(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=pt(e),l=Ye(n,r);l.tag=2,t!=null&&(l.callback=t),t=dt(e,l,r),t!==null&&(Me(t,e,r,n),Or(t,e,r))}};function Qa(e,t,n,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Hn(n,r)||!Hn(l,i):!0}function nc(e,t,n){var r=!1,l=vt,i=t.contextType;return typeof i=="object"&&i!==null?i=_e(i):(l=ge(t)?zt:ae.current,r=t.contextTypes,i=(r=r!=null)?an(e,l):vt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=kl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Wa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&kl.enqueueReplaceState(t,t.state,null)}function Fi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},zo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=_e(i):(i=ge(t)?zt:ae.current,l.context=an(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Mi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&kl.enqueueReplaceState(l,l.state,null),rl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function dn(e,t){try{var n="",r=t;do n+=wd(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function ti(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Di(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Gf=typeof WeakMap=="function"?WeakMap:Map;function rc(e,t,n){n=Ye(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sl||(sl=!0,Gi=r),Di(e,t)},n}function lc(e,t,n){n=Ye(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Di(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Di(e,t),typeof r!="function"&&(ft===null?ft=new Set([this]):ft.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Va(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Gf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=sp.bind(null,e,t,n),t.then(e,e))}function Ha(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ya(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ye(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e)}var Kf=Ze.ReactCurrentOwner,he=!1;function se(e,t,n,r){t.child=e===null?Tu(t,null,n,r):un(t,e.child,n,r)}function Ga(e,t,n,r,l){n=n.render;var i=t.ref;return rn(t,l),r=Oo(e,t,n,r,i,l),n=Mo(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,qe(e,t,l)):(B&&n&&So(t),t.flags|=1,se(e,t,r,l),t.child)}function Ka(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Ho(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,ic(e,t,i,r,l)):(e=$r(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Hn,n(a,r)&&e.ref===t.ref)return qe(e,t,l)}return t.flags|=1,e=ht(i,r),e.ref=t.ref,e.return=t,t.child=e}function ic(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Hn(i,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,qe(e,t,l)}return Ai(e,t,n,r,l)}function oc(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(Zt,xe),xe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,M(Zt,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,M(Zt,xe),xe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,M(Zt,xe),xe|=r;return se(e,t,l,n),t.child}function ac(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ai(e,t,n,r,l){var i=ge(n)?zt:ae.current;return i=an(t,i),rn(t,l),n=Oo(e,t,n,r,i,l),r=Mo(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,qe(e,t,l)):(B&&r&&So(t),t.flags|=1,se(e,t,n,l),t.child)}function Xa(e,t,n,r,l){if(ge(n)){var i=!0;Zr(t)}else i=!1;if(rn(t,l),t.stateNode===null)Dr(e,t),nc(t,n,r),Fi(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=_e(u):(u=ge(n)?zt:ae.current,u=an(t,u));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||c!==u)&&Wa(t,a,r,u),tt=!1;var g=t.memoizedState;a.state=g,rl(t,r,a,l),c=t.memoizedState,s!==r||g!==c||me.current||tt?(typeof m=="function"&&(Mi(t,n,m,r),c=t.memoizedState),(s=tt||Qa(t,n,s,r,g,c,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ou(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Re(t.type,s),a.props=u,h=t.pendingProps,g=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=_e(c):(c=ge(n)?zt:ae.current,c=an(t,c));var w=n.getDerivedStateFromProps;(m=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==h||g!==c)&&Wa(t,a,r,c),tt=!1,g=t.memoizedState,a.state=g,rl(t,r,a,l);var y=t.memoizedState;s!==h||g!==y||me.current||tt?(typeof w=="function"&&(Mi(t,n,w,r),y=t.memoizedState),(u=tt||Qa(t,n,u,r,g,y,c)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Bi(e,t,n,r,i,l)}function Bi(e,t,n,r,l,i){ac(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&Oa(t,n,!1),qe(e,t,i);r=t.stateNode,Kf.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=un(t,e.child,null,i),t.child=un(t,null,s,i)):se(e,t,s,i),t.memoizedState=r.state,l&&Oa(t,n,!0),t.child}function sc(e){var t=e.stateNode;t.pendingContext?Ia(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ia(e,t.context,!1),Lo(e,t.containerInfo)}function qa(e,t,n,r,l){return sn(),Co(l),t.flags|=256,se(e,t,n,r),t.child}var $i={dehydrated:null,treeContext:null,retryLane:0};function Ui(e){return{baseLanes:e,cachePool:null,transitions:null}}function uc(e,t,n){var r=t.pendingProps,l=$.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),M($,l&1),e===null)return Ii(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Nl(a,r,0,null),e=_t(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ui(n),t.memoizedState=$i,e):Ao(t,a));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Xf(e,t,a,r,s,l,n);if(i){i=r.fallback,a=t.mode,l=e.child,s=l.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=ht(l,c),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=ht(s,i):(i=_t(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Ui(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=$i,r}return i=e.child,e=i.sibling,r=ht(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ao(e,t){return t=Nl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Er(e,t,n,r){return r!==null&&Co(r),un(t,e.child,null,n),e=Ao(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xf(e,t,n,r,l,i,a){if(n)return t.flags&256?(t.flags&=-257,r=ti(Error(j(422))),Er(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Nl({mode:"visible",children:r.children},l,0,null),i=_t(i,l,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&un(t,e.child,null,a),t.child.memoizedState=Ui(a),t.memoizedState=$i,i);if(!(t.mode&1))return Er(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(j(419)),r=ti(i,r,void 0),Er(e,t,a,r)}if(s=(a&e.childLanes)!==0,he||s){if(r=J,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Xe(e,l),Me(r,e,l,-1))}return Vo(),r=ti(Error(j(421))),Er(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=up.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,we=ct(l.nextSibling),ke=t,B=!0,Ie=null,e!==null&&(Ce[Ee++]=Ve,Ce[Ee++]=He,Ce[Ee++]=Lt,Ve=e.id,He=e.overflow,Lt=t),t=Ao(t,r.children),t.flags|=4096,t)}function Za(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Oi(e.return,t,n)}function ni(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function cc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(se(e,t,r.children,n),r=$.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Za(e,n,t);else if(e.tag===19)Za(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M($,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&ll(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ni(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ll(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ni(t,!0,n,null,i);break;case"together":ni(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Dr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qf(e,t,n){switch(t.tag){case 3:sc(t),sn();break;case 5:Mu(t);break;case 1:ge(t.type)&&Zr(t);break;case 4:Lo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;M(tl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(M($,$.current&1),t.flags|=128,null):n&t.child.childLanes?uc(e,t,n):(M($,$.current&1),e=qe(e,t,n),e!==null?e.sibling:null);M($,$.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return cc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),M($,$.current),r)break;return null;case 22:case 23:return t.lanes=0,oc(e,t,n)}return qe(e,t,n)}var dc,Qi,fc,pc;dc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qi=function(){};fc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,bt(Ue.current);var i=null;switch(n){case"input":l=di(e,l),r=di(e,r),i=[];break;case"select":l=Q({},l,{value:void 0}),r=Q({},r,{value:void 0}),i=[];break;case"textarea":l=hi(e,l),r=hi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xr)}gi(n,r);var a;n=null;for(u in l)if(!r.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var s=l[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(An.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(s=l!=null?l[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(An.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&D("scroll",e),i||s===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};pc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Nn(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Zf(e,t,n){var r=t.pendingProps;switch(No(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return ge(t.type)&&qr(),ie(t),null;case 3:return r=t.stateNode,cn(),A(me),A(ae),To(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Nr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ie!==null&&(qi(Ie),Ie=null))),Qi(e,t),ie(t),null;case 5:Ro(t);var l=bt(qn.current);if(n=t.type,e!==null&&t.stateNode!=null)fc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return ie(t),null}if(e=bt(Ue.current),Nr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Be]=t,r[Kn]=i,e=(t.mode&1)!==0,n){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(l=0;l<_n.length;l++)D(_n[l],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":aa(r,i),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},D("invalid",r);break;case"textarea":ua(r,i),D("invalid",r)}gi(n,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Sr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Sr(r.textContent,s,e),l=["children",""+s]):An.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&D("scroll",r)}switch(n){case"input":mr(r),sa(r,i,!0);break;case"textarea":mr(r),ca(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Xr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$s(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Be]=t,e[Kn]=r,dc(e,t,!1,!1),t.stateNode=e;e:{switch(a=vi(n,r),n){case"dialog":D("cancel",e),D("close",e),l=r;break;case"iframe":case"object":case"embed":D("load",e),l=r;break;case"video":case"audio":for(l=0;l<_n.length;l++)D(_n[l],e);l=r;break;case"source":D("error",e),l=r;break;case"img":case"image":case"link":D("error",e),D("load",e),l=r;break;case"details":D("toggle",e),l=r;break;case"input":aa(e,r),l=di(e,r),D("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Q({},r,{value:void 0}),D("invalid",e);break;case"textarea":ua(e,r),l=hi(e,r),D("invalid",e);break;default:l=r}gi(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var c=s[i];i==="style"?Ws(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Us(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Bn(e,c):typeof c=="number"&&Bn(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(An.hasOwnProperty(i)?c!=null&&i==="onScroll"&&D("scroll",e):c!=null&&so(e,i,c,a))}switch(n){case"input":mr(e),sa(e,r,!1);break;case"textarea":mr(e),ca(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Jt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Jt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Xr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)pc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=bt(qn.current),bt(Ue.current),Nr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Be]=t,(i=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:Sr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Sr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Be]=t,t.stateNode=r}return ie(t),null;case 13:if(A($),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&we!==null&&t.mode&1&&!(t.flags&128))Lu(),sn(),t.flags|=98560,i=!1;else if(i=Nr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[Be]=t}else sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),i=!1}else Ie!==null&&(qi(Ie),Ie=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$.current&1?X===0&&(X=3):Vo())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return cn(),Qi(e,t),e===null&&Yn(t.stateNode.containerInfo),ie(t),null;case 10:return Po(t.type._context),ie(t),null;case 17:return ge(t.type)&&qr(),ie(t),null;case 19:if(A($),i=t.memoizedState,i===null)return ie(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Nn(i,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ll(e),a!==null){for(t.flags|=128,Nn(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return M($,$.current&1|2),t.child}e=e.sibling}i.tail!==null&&H()>fn&&(t.flags|=128,r=!0,Nn(i,!1),t.lanes=4194304)}else{if(!r)if(e=ll(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Nn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!B)return ie(t),null}else 2*H()-i.renderingStartTime>fn&&n!==1073741824&&(t.flags|=128,r=!0,Nn(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=H(),t.sibling=null,n=$.current,M($,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return Wo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Jf(e,t){switch(No(t),t.tag){case 1:return ge(t.type)&&qr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cn(),A(me),A(ae),To(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ro(t),null;case 13:if(A($),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A($),null;case 4:return cn(),null;case 10:return Po(t.type._context),null;case 22:case 23:return Wo(),null;case 24:return null;default:return null}}var br=!1,oe=!1,ep=typeof WeakSet=="function"?WeakSet:Set,C=null;function qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(e,t,r)}else n.current=null}function Wi(e,t,n){try{n()}catch(r){W(e,t,r)}}var Ja=!1;function tp(e,t){if(bi=Yr,e=xu(),jo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,c=-1,u=0,m=0,h=e,g=null;t:for(;;){for(var w;h!==n||l!==0&&h.nodeType!==3||(s=a+l),h!==i||r!==0&&h.nodeType!==3||(c=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(w=h.firstChild)!==null;)g=h,h=w;for(;;){if(h===e)break t;if(g===n&&++u===l&&(s=a),g===i&&++m===r&&(c=a),(w=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=w}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pi={focusedElem:e,selectionRange:n},Yr=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,k=y.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:Re(t.type,v),k);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(x){W(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return y=Ja,Ja=!1,y}function Mn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Wi(t,n,i)}l=l.next}while(l!==r)}}function jl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hc(e){var t=e.alternate;t!==null&&(e.alternate=null,hc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Be],delete t[Kn],delete t[Li],delete t[Ff],delete t[Df])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mc(e){return e.tag===5||e.tag===3||e.tag===4}function es(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xr));else if(r!==4&&(e=e.child,e!==null))for(Hi(e,t,n),e=e.sibling;e!==null;)Hi(e,t,n),e=e.sibling}function Yi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yi(e,t,n),e=e.sibling;e!==null;)Yi(e,t,n),e=e.sibling}var te=null,Te=!1;function Je(e,t,n){for(n=n.child;n!==null;)gc(e,t,n),n=n.sibling}function gc(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(hl,n)}catch{}switch(n.tag){case 5:oe||qt(n,t);case 6:var r=te,l=Te;te=null,Je(e,t,n),te=r,Te=l,te!==null&&(Te?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Te?(e=te,n=n.stateNode,e.nodeType===8?Kl(e.parentNode,n):e.nodeType===1&&Kl(e,n),Wn(e)):Kl(te,n.stateNode));break;case 4:r=te,l=Te,te=n.stateNode.containerInfo,Te=!0,Je(e,t,n),te=r,Te=l;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Wi(n,t,a),l=l.next}while(l!==r)}Je(e,t,n);break;case 1:if(!oe&&(qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){W(n,t,s)}Je(e,t,n);break;case 21:Je(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,Je(e,t,n),oe=r):Je(e,t,n);break;default:Je(e,t,n)}}function ts(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ep),t.forEach(function(r){var l=cp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:te=s.stateNode,Te=!1;break e;case 3:te=s.stateNode.containerInfo,Te=!0;break e;case 4:te=s.stateNode.containerInfo,Te=!0;break e}s=s.return}if(te===null)throw Error(j(160));gc(i,a,l),te=null,Te=!1;var c=l.alternate;c!==null&&(c.return=null),l.return=null}catch(u){W(l,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vc(t,e),t=t.sibling}function vc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),De(e),r&4){try{Mn(3,e,e.return),jl(3,e)}catch(v){W(e,e.return,v)}try{Mn(5,e,e.return)}catch(v){W(e,e.return,v)}}break;case 1:Le(t,e),De(e),r&512&&n!==null&&qt(n,n.return);break;case 5:if(Le(t,e),De(e),r&512&&n!==null&&qt(n,n.return),e.flags&32){var l=e.stateNode;try{Bn(l,"")}catch(v){W(e,e.return,v)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&As(l,i),vi(s,a);var u=vi(s,i);for(a=0;a<c.length;a+=2){var m=c[a],h=c[a+1];m==="style"?Ws(l,h):m==="dangerouslySetInnerHTML"?Us(l,h):m==="children"?Bn(l,h):so(l,m,h,u)}switch(s){case"input":fi(l,i);break;case"textarea":Bs(l,i);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Jt(l,!!i.multiple,w,!1):g!==!!i.multiple&&(i.defaultValue!=null?Jt(l,!!i.multiple,i.defaultValue,!0):Jt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Kn]=i}catch(v){W(e,e.return,v)}}break;case 6:if(Le(t,e),De(e),r&4){if(e.stateNode===null)throw Error(j(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(v){W(e,e.return,v)}}break;case 3:if(Le(t,e),De(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wn(t.containerInfo)}catch(v){W(e,e.return,v)}break;case 4:Le(t,e),De(e);break;case 13:Le(t,e),De(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Uo=H())),r&4&&ts(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(u=oe)||m,Le(t,e),oe=u):Le(t,e),De(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(C=e,m=e.child;m!==null;){for(h=C=m;C!==null;){switch(g=C,w=g.child,g.tag){case 0:case 11:case 14:case 15:Mn(4,g,g.return);break;case 1:qt(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){W(r,n,v)}}break;case 5:qt(g,g.return);break;case 22:if(g.memoizedState!==null){rs(h);continue}}w!==null?(w.return=g,C=w):rs(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{l=h.stateNode,u?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=h.stateNode,c=h.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Qs("display",a))}catch(v){W(e,e.return,v)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){W(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Le(t,e),De(e),r&4&&ts(e);break;case 21:break;default:Le(t,e),De(e)}}function De(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mc(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Bn(l,""),r.flags&=-33);var i=es(e);Yi(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,s=es(e);Hi(e,s,a);break;default:throw Error(j(161))}}catch(c){W(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function np(e,t,n){C=e,xc(e)}function xc(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var l=C,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||br;if(!a){var s=l.alternate,c=s!==null&&s.memoizedState!==null||oe;s=br;var u=oe;if(br=a,(oe=c)&&!u)for(C=l;C!==null;)a=C,c=a.child,a.tag===22&&a.memoizedState!==null?ls(l):c!==null?(c.return=a,C=c):ls(l);for(;i!==null;)C=i,xc(i),i=i.sibling;C=l,br=s,oe=u}ns(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,C=i):ns(e)}}function ns(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||jl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ba(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ba(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Wn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}oe||t.flags&512&&Vi(t)}catch(g){W(t,t.return,g)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function rs(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function ls(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{jl(4,t)}catch(c){W(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(c){W(t,l,c)}}var i=t.return;try{Vi(t)}catch(c){W(t,i,c)}break;case 5:var a=t.return;try{Vi(t)}catch(c){W(t,a,c)}}}catch(c){W(t,t.return,c)}if(t===e){C=null;break}var s=t.sibling;if(s!==null){s.return=t.return,C=s;break}C=t.return}}var rp=Math.ceil,al=Ze.ReactCurrentDispatcher,Bo=Ze.ReactCurrentOwner,Pe=Ze.ReactCurrentBatchConfig,I=0,J=null,Y=null,ne=0,xe=0,Zt=yt(0),X=0,tr=null,Tt=0,Sl=0,$o=0,Fn=null,pe=null,Uo=0,fn=1/0,Qe=null,sl=!1,Gi=null,ft=null,Pr=!1,it=null,ul=0,Dn=0,Ki=null,Ar=-1,Br=0;function ue(){return I&6?H():Ar!==-1?Ar:Ar=H()}function pt(e){return e.mode&1?I&2&&ne!==0?ne&-ne:Bf.transition!==null?(Br===0&&(Br=nu()),Br):(e=O,e!==0||(e=window.event,e=e===void 0?16:uu(e.type)),e):1}function Me(e,t,n,r){if(50<Dn)throw Dn=0,Ki=null,Error(j(185));ir(e,n,r),(!(I&2)||e!==J)&&(e===J&&(!(I&2)&&(Sl|=n),X===4&&rt(e,ne)),ve(e,r),n===1&&I===0&&!(t.mode&1)&&(fn=H()+500,yl&&wt()))}function ve(e,t){var n=e.callbackNode;Ad(e,t);var r=Hr(e,e===J?ne:0);if(r===0)n!==null&&pa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&pa(n),t===1)e.tag===0?Af(is.bind(null,e)):Pu(is.bind(null,e)),Of(function(){!(I&6)&&wt()}),n=null;else{switch(ru(r)){case 1:n=ho;break;case 4:n=eu;break;case 16:n=Vr;break;case 536870912:n=tu;break;default:n=Vr}n=Ec(n,yc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yc(e,t){if(Ar=-1,Br=0,I&6)throw Error(j(327));var n=e.callbackNode;if(ln()&&e.callbackNode!==n)return null;var r=Hr(e,e===J?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=cl(e,r);else{t=r;var l=I;I|=2;var i=kc();(J!==e||ne!==t)&&(Qe=null,fn=H()+500,Pt(e,t));do try{op();break}catch(s){wc(e,s)}while(!0);bo(),al.current=i,I=l,Y!==null?t=0:(J=null,ne=0,t=X)}if(t!==0){if(t===2&&(l=ji(e),l!==0&&(r=l,t=Xi(e,l))),t===1)throw n=tr,Pt(e,0),rt(e,r),ve(e,H()),n;if(t===6)rt(e,r);else{if(l=e.current.alternate,!(r&30)&&!lp(l)&&(t=cl(e,r),t===2&&(i=ji(e),i!==0&&(r=i,t=Xi(e,i))),t===1))throw n=tr,Pt(e,0),rt(e,r),ve(e,H()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Nt(e,pe,Qe);break;case 3:if(rt(e,r),(r&130023424)===r&&(t=Uo+500-H(),10<t)){if(Hr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=zi(Nt.bind(null,e,pe,Qe),t);break}Nt(e,pe,Qe);break;case 4:if(rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-Oe(r);i=1<<a,a=t[a],a>l&&(l=a),r&=~i}if(r=l,r=H()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rp(r/1960))-r,10<r){e.timeoutHandle=zi(Nt.bind(null,e,pe,Qe),r);break}Nt(e,pe,Qe);break;case 5:Nt(e,pe,Qe);break;default:throw Error(j(329))}}}return ve(e,H()),e.callbackNode===n?yc.bind(null,e):null}function Xi(e,t){var n=Fn;return e.current.memoizedState.isDehydrated&&(Pt(e,t).flags|=256),e=cl(e,t),e!==2&&(t=pe,pe=n,t!==null&&qi(t)),e}function qi(e){pe===null?pe=e:pe.push.apply(pe,e)}function lp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Fe(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rt(e,t){for(t&=~$o,t&=~Sl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Oe(t),r=1<<n;e[n]=-1,t&=~r}}function is(e){if(I&6)throw Error(j(327));ln();var t=Hr(e,0);if(!(t&1))return ve(e,H()),null;var n=cl(e,t);if(e.tag!==0&&n===2){var r=ji(e);r!==0&&(t=r,n=Xi(e,r))}if(n===1)throw n=tr,Pt(e,0),rt(e,t),ve(e,H()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nt(e,pe,Qe),ve(e,H()),null}function Qo(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(fn=H()+500,yl&&wt())}}function It(e){it!==null&&it.tag===0&&!(I&6)&&ln();var t=I;I|=1;var n=Pe.transition,r=O;try{if(Pe.transition=null,O=1,e)return e()}finally{O=r,Pe.transition=n,I=t,!(I&6)&&wt()}}function Wo(){xe=Zt.current,A(Zt)}function Pt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,If(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(No(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qr();break;case 3:cn(),A(me),A(ae),To();break;case 5:Ro(r);break;case 4:cn();break;case 13:A($);break;case 19:A($);break;case 10:Po(r.type._context);break;case 22:case 23:Wo()}n=n.return}if(J=e,Y=e=ht(e.current,null),ne=xe=t,X=0,tr=null,$o=Sl=Tt=0,pe=Fn=null,Et!==null){for(t=0;t<Et.length;t++)if(n=Et[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}n.pending=r}Et=null}return e}function wc(e,t){do{var n=Y;try{if(bo(),Mr.current=ol,il){for(var r=U.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}il=!1}if(Rt=0,Z=K=U=null,On=!1,Zn=0,Bo.current=null,n===null||n.return===null){X=1,tr=t,Y=null;break}e:{var i=e,a=n.return,s=n,c=t;if(t=ne,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,m=s,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=Ha(a);if(w!==null){w.flags&=-257,Ya(w,a,s,i,t),w.mode&1&&Va(i,u,t),t=w,c=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(c),t.updateQueue=v}else y.add(c);break e}else{if(!(t&1)){Va(i,u,t),Vo();break e}c=Error(j(426))}}else if(B&&s.mode&1){var k=Ha(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Ya(k,a,s,i,t),Co(dn(c,s));break e}}i=c=dn(c,s),X!==4&&(X=2),Fn===null?Fn=[i]:Fn.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=rc(i,c,t);Aa(i,f);break e;case 1:s=c;var d=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ft===null||!ft.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=lc(i,s,t);Aa(i,x);break e}}i=i.return}while(i!==null)}Sc(n)}catch(S){t=S,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function kc(){var e=al.current;return al.current=ol,e===null?ol:e}function Vo(){(X===0||X===3||X===2)&&(X=4),J===null||!(Tt&268435455)&&!(Sl&268435455)||rt(J,ne)}function cl(e,t){var n=I;I|=2;var r=kc();(J!==e||ne!==t)&&(Qe=null,Pt(e,t));do try{ip();break}catch(l){wc(e,l)}while(!0);if(bo(),I=n,al.current=r,Y!==null)throw Error(j(261));return J=null,ne=0,X}function ip(){for(;Y!==null;)jc(Y)}function op(){for(;Y!==null&&!zd();)jc(Y)}function jc(e){var t=Cc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?Sc(e):Y=t,Bo.current=null}function Sc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Jf(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Y=null;return}}else if(n=Zf(n,t,xe),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);X===0&&(X=5)}function Nt(e,t,n){var r=O,l=Pe.transition;try{Pe.transition=null,O=1,ap(e,t,n,r)}finally{Pe.transition=l,O=r}return null}function ap(e,t,n,r){do ln();while(it!==null);if(I&6)throw Error(j(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Bd(e,i),e===J&&(Y=J=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pr||(Pr=!0,Ec(Vr,function(){return ln(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Pe.transition,Pe.transition=null;var a=O;O=1;var s=I;I|=4,Bo.current=null,tp(e,n),vc(n,e),bf(Pi),Yr=!!bi,Pi=bi=null,e.current=n,np(n),Ld(),I=s,O=a,Pe.transition=i}else e.current=n;if(Pr&&(Pr=!1,it=e,ul=l),i=e.pendingLanes,i===0&&(ft=null),Id(n.stateNode),ve(e,H()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(sl)throw sl=!1,e=Gi,Gi=null,e;return ul&1&&e.tag!==0&&ln(),i=e.pendingLanes,i&1?e===Ki?Dn++:(Dn=0,Ki=e):Dn=0,wt(),null}function ln(){if(it!==null){var e=ru(ul),t=Pe.transition,n=O;try{if(Pe.transition=null,O=16>e?16:e,it===null)var r=!1;else{if(e=it,it=null,ul=0,I&6)throw Error(j(331));var l=I;for(I|=4,C=e.current;C!==null;){var i=C,a=i.child;if(C.flags&16){var s=i.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(C=u;C!==null;){var m=C;switch(m.tag){case 0:case 11:case 15:Mn(8,m,i)}var h=m.child;if(h!==null)h.return=m,C=h;else for(;C!==null;){m=C;var g=m.sibling,w=m.return;if(hc(m),m===u){C=null;break}if(g!==null){g.return=w,C=g;break}C=w}}}var y=i.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}C=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,C=a;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Mn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,C=f;break e}C=i.return}}var d=e.current;for(C=d;C!==null;){a=C;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,C=p;else e:for(a=d;C!==null;){if(s=C,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:jl(9,s)}}catch(S){W(s,s.return,S)}if(s===a){C=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,C=x;break e}C=s.return}}if(I=l,wt(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(hl,e)}catch{}r=!0}return r}finally{O=n,Pe.transition=t}}return!1}function os(e,t,n){t=dn(n,t),t=rc(e,t,1),e=dt(e,t,1),t=ue(),e!==null&&(ir(e,1,t),ve(e,t))}function W(e,t,n){if(e.tag===3)os(e,e,n);else for(;t!==null;){if(t.tag===3){os(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ft===null||!ft.has(r))){e=dn(n,e),e=lc(t,e,1),t=dt(t,e,1),e=ue(),t!==null&&(ir(t,1,e),ve(t,e));break}}t=t.return}}function sp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(ne&n)===n&&(X===4||X===3&&(ne&130023424)===ne&&500>H()-Uo?Pt(e,0):$o|=n),ve(e,t)}function Nc(e,t){t===0&&(e.mode&1?(t=xr,xr<<=1,!(xr&130023424)&&(xr=4194304)):t=1);var n=ue();e=Xe(e,t),e!==null&&(ir(e,t,n),ve(e,n))}function up(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nc(e,n)}function cp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Nc(e,n)}var Cc;Cc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,qf(e,t,n);he=!!(e.flags&131072)}else he=!1,B&&t.flags&1048576&&_u(t,el,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Dr(e,t),e=t.pendingProps;var l=an(t,ae.current);rn(t,n),l=Oo(null,t,r,e,l,n);var i=Mo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(i=!0,Zr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,zo(t),l.updater=kl,t.stateNode=l,l._reactInternals=t,Fi(t,r,e,n),t=Bi(null,t,r,!0,i,n)):(t.tag=0,B&&i&&So(t),se(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Dr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=fp(r),e=Re(r,e),l){case 0:t=Ai(null,t,r,e,n);break e;case 1:t=Xa(null,t,r,e,n);break e;case 11:t=Ga(null,t,r,e,n);break e;case 14:t=Ka(null,t,r,Re(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Ai(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Xa(e,t,r,l,n);case 3:e:{if(sc(t),e===null)throw Error(j(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Ou(e,t),rl(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=dn(Error(j(423)),t),t=qa(e,t,r,n,l);break e}else if(r!==l){l=dn(Error(j(424)),t),t=qa(e,t,r,n,l);break e}else for(we=ct(t.stateNode.containerInfo.firstChild),ke=t,B=!0,Ie=null,n=Tu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sn(),r===l){t=qe(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return Mu(t),e===null&&Ii(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,_i(r,l)?a=null:i!==null&&_i(r,i)&&(t.flags|=32),ac(e,t),se(e,t,a,n),t.child;case 6:return e===null&&Ii(t),null;case 13:return uc(e,t,n);case 4:return Lo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=un(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Ga(e,t,r,l,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,a=l.value,M(tl,r._currentValue),r._currentValue=a,i!==null)if(Fe(i.value,a)){if(i.children===l.children&&!me.current){t=qe(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Ye(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?c.next=c:(c.next=m.next,m.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Oi(i.return,n,t),s.lanes|=n;break}c=c.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(j(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Oi(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}se(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,rn(t,n),l=_e(l),r=r(l),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,l=Re(r,t.pendingProps),l=Re(r.type,l),Ka(e,t,r,l,n);case 15:return ic(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Dr(e,t),t.tag=1,ge(r)?(e=!0,Zr(t)):e=!1,rn(t,n),nc(t,r,l),Fi(t,r,l,n),Bi(null,t,r,!0,e,n);case 19:return cc(e,t,n);case 22:return oc(e,t,n)}throw Error(j(156,t.tag))};function Ec(e,t){return Js(e,t)}function dp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(e,t,n,r){return new dp(e,t,n,r)}function Ho(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fp(e){if(typeof e=="function")return Ho(e)?1:0;if(e!=null){if(e=e.$$typeof,e===co)return 11;if(e===fo)return 14}return 2}function ht(e,t){var n=e.alternate;return n===null?(n=be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $r(e,t,n,r,l,i){var a=2;if(r=e,typeof e=="function")Ho(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ut:return _t(n.children,l,i,t);case uo:a=8,l|=8;break;case ai:return e=be(12,n,t,l|2),e.elementType=ai,e.lanes=i,e;case si:return e=be(13,n,t,l),e.elementType=si,e.lanes=i,e;case ui:return e=be(19,n,t,l),e.elementType=ui,e.lanes=i,e;case Ms:return Nl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Is:a=10;break e;case Os:a=9;break e;case co:a=11;break e;case fo:a=14;break e;case et:a=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=be(a,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function _t(e,t,n,r){return e=be(7,e,r,t),e.lanes=n,e}function Nl(e,t,n,r){return e=be(22,e,r,t),e.elementType=Ms,e.lanes=n,e.stateNode={isHidden:!1},e}function ri(e,t,n){return e=be(6,e,null,t),e.lanes=n,e}function li(e,t,n){return t=be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function pp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dl(0),this.expirationTimes=Dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Yo(e,t,n,r,l,i,a,s,c){return e=new pp(e,t,n,s,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=be(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zo(i),e}function hp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$t,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function bc(e){if(!e)return vt;e=e._reactInternals;e:{if(Mt(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(ge(n))return bu(e,n,t)}return t}function Pc(e,t,n,r,l,i,a,s,c){return e=Yo(n,r,!0,e,l,i,a,s,c),e.context=bc(null),n=e.current,r=ue(),l=pt(n),i=Ye(r,l),i.callback=t??null,dt(n,i,l),e.current.lanes=l,ir(e,l,r),ve(e,r),e}function Cl(e,t,n,r){var l=t.current,i=ue(),a=pt(l);return n=bc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ye(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dt(l,t,a),e!==null&&(Me(e,l,a,i),Or(e,l,a)),a}function dl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function as(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Go(e,t){as(e,t),(e=e.alternate)&&as(e,t)}function mp(){return null}var _c=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ko(e){this._internalRoot=e}El.prototype.render=Ko.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Cl(e,t,null,null)};El.prototype.unmount=Ko.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;It(function(){Cl(null,e,null,null)}),t[Ke]=null}};function El(e){this._internalRoot=e}El.prototype.unstable_scheduleHydration=function(e){if(e){var t=ou();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nt.length&&t!==0&&t<nt[n].priority;n++);nt.splice(n,0,e),n===0&&su(e)}};function Xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ss(){}function gp(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var u=dl(a);i.call(u)}}var a=Pc(t,r,e,0,null,!1,!1,"",ss);return e._reactRootContainer=a,e[Ke]=a.current,Yn(e.nodeType===8?e.parentNode:e),It(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var u=dl(c);s.call(u)}}var c=Yo(e,0,!1,null,null,!1,!1,"",ss);return e._reactRootContainer=c,e[Ke]=c.current,Yn(e.nodeType===8?e.parentNode:e),It(function(){Cl(t,c,n,r)}),c}function Pl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var s=l;l=function(){var c=dl(a);s.call(c)}}Cl(t,a,e,l)}else a=gp(n,t,e,l,r);return dl(a)}lu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pn(t.pendingLanes);n!==0&&(mo(t,n|1),ve(t,H()),!(I&6)&&(fn=H()+500,wt()))}break;case 13:It(function(){var r=Xe(e,1);if(r!==null){var l=ue();Me(r,e,1,l)}}),Go(e,1)}};go=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=ue();Me(t,e,134217728,n)}Go(e,134217728)}};iu=function(e){if(e.tag===13){var t=pt(e),n=Xe(e,t);if(n!==null){var r=ue();Me(n,e,t,r)}Go(e,t)}};ou=function(){return O};au=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};yi=function(e,t,n){switch(t){case"input":if(fi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=xl(r);if(!l)throw Error(j(90));Ds(r),fi(r,l)}}}break;case"textarea":Bs(e,n);break;case"select":t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}};Ys=Qo;Gs=It;var vp={usingClientEntryPoint:!1,Events:[ar,Ht,xl,Vs,Hs,Qo]},Cn={findFiberByHostInstance:Ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xp={bundleType:Cn.bundleType,version:Cn.version,rendererPackageName:Cn.rendererPackageName,rendererConfig:Cn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qs(e),e===null?null:e.stateNode},findFiberByHostInstance:Cn.findFiberByHostInstance||mp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_r.isDisabled&&_r.supportsFiber)try{hl=_r.inject(xp),$e=_r}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vp;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xo(t))throw Error(j(200));return hp(e,t,null,n)};Se.createRoot=function(e,t){if(!Xo(e))throw Error(j(299));var n=!1,r="",l=_c;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Yo(e,1,!1,null,null,n,!1,r,l),e[Ke]=t.current,Yn(e.nodeType===8?e.parentNode:e),new Ko(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=qs(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return It(e)};Se.hydrate=function(e,t,n){if(!bl(t))throw Error(j(200));return Pl(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!Xo(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",a=_c;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Pc(t,null,e,1,n??null,l,!1,i,a),e[Ke]=t.current,Yn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new El(t)};Se.render=function(e,t,n){if(!bl(t))throw Error(j(200));return Pl(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!bl(e))throw Error(j(40));return e._reactRootContainer?(It(function(){Pl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};Se.unstable_batchedUpdates=Qo;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bl(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Pl(e,t,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function zc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zc)}catch(e){console.error(e)}}zc(),zs.exports=Se;var yp=zs.exports,Lc,us=yp;Lc=us.createRoot,us.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nr(){return nr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nr.apply(this,arguments)}var ot;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ot||(ot={}));const cs="popstate";function wp(e){e===void 0&&(e={});function t(l,i){let{pathname:a="/",search:s="",hash:c=""}=Ft(l.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),Zi("",{pathname:a,search:s,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(l,i){let a=l.document.querySelector("base"),s="";if(a&&a.getAttribute("href")){let c=l.location.href,u=c.indexOf("#");s=u===-1?c:c.slice(0,u)}return s+"#"+(typeof i=="string"?i:fl(i))}function r(l,i){qo(l.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return jp(t,n,r,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function qo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function kp(){return Math.random().toString(36).substr(2,8)}function ds(e,t){return{usr:e.state,key:e.key,idx:t}}function Zi(e,t,n,r){return n===void 0&&(n=null),nr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ft(t):t,{state:n,key:t&&t.key||r||kp()})}function fl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ft(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function jp(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,a=l.history,s=ot.Pop,c=null,u=m();u==null&&(u=0,a.replaceState(nr({},a.state,{idx:u}),""));function m(){return(a.state||{idx:null}).idx}function h(){s=ot.Pop;let k=m(),f=k==null?null:k-u;u=k,c&&c({action:s,location:v.location,delta:f})}function g(k,f){s=ot.Push;let d=Zi(v.location,k,f);n&&n(d,k),u=m()+1;let p=ds(d,u),x=v.createHref(d);try{a.pushState(p,"",x)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;l.location.assign(x)}i&&c&&c({action:s,location:v.location,delta:1})}function w(k,f){s=ot.Replace;let d=Zi(v.location,k,f);n&&n(d,k),u=m();let p=ds(d,u),x=v.createHref(d);a.replaceState(p,"",x),i&&c&&c({action:s,location:v.location,delta:0})}function y(k){let f=l.location.origin!=="null"?l.location.origin:l.location.href,d=typeof k=="string"?k:fl(k);return d=d.replace(/ $/,"%20"),G(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let v={get action(){return s},get location(){return e(l,a)},listen(k){if(c)throw new Error("A history only accepts one active listener");return l.addEventListener(cs,h),c=k,()=>{l.removeEventListener(cs,h),c=null}},createHref(k){return t(l,k)},createURL:y,encodeLocation(k){let f=y(k);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:w,go(k){return a.go(k)}};return v}var fs;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(fs||(fs={}));function Sp(e,t,n){return n===void 0&&(n="/"),Np(e,t,n)}function Np(e,t,n,r){let l=typeof t=="string"?Ft(t):t,i=Zo(l.pathname||"/",n);if(i==null)return null;let a=Rc(e);Cp(a);let s=null;for(let c=0;s==null&&c<a.length;++c){let u=Fp(i);s=Ip(a[c],u)}return s}function Rc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,a,s)=>{let c={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};c.relativePath.startsWith("/")&&(G(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=mt([r,c.relativePath]),m=n.concat(c);i.children&&i.children.length>0&&(G(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Rc(i.children,t,m,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Rp(u,i.index),routesMeta:m})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))l(i,a);else for(let c of Tc(i.path))l(i,a,c)}),t}function Tc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let a=Tc(r.join("/")),s=[];return s.push(...a.map(c=>c===""?i:[i,c].join("/"))),l&&s.push(...a),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function Cp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Tp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ep=/^:[\w-]+$/,bp=3,Pp=2,_p=1,zp=10,Lp=-2,ps=e=>e==="*";function Rp(e,t){let n=e.split("/"),r=n.length;return n.some(ps)&&(r+=Lp),t&&(r+=Pp),n.filter(l=>!ps(l)).reduce((l,i)=>l+(Ep.test(i)?bp:i===""?_p:zp),r)}function Tp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function Ip(e,t,n){let{routesMeta:r}=e,l={},i="/",a=[];for(let s=0;s<r.length;++s){let c=r[s],u=s===r.length-1,m=i==="/"?t:t.slice(i.length)||"/",h=Op({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},m),g=c.route;if(!h)return null;Object.assign(l,h.params),a.push({params:l,pathname:mt([i,h.pathname]),pathnameBase:$p(mt([i,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(i=mt([i,h.pathnameBase]))}return a}function Op(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Mp(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],a=i.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:r.reduce((u,m,h)=>{let{paramName:g,isOptional:w}=m;if(g==="*"){let v=s[h]||"";a=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const y=s[h];return w&&!y?u[g]=void 0:u[g]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function Mp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),qo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,c)=>(r.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function Fp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return qo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Zo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Dp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?Ft(e):e;return{pathname:n?n.startsWith("/")?n:Ap(n,t):t,search:Up(r),hash:Qp(l)}}function Ap(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function ii(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ic(e,t){let n=Bp(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Oc(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=Ft(e):(l=nr({},e),G(!l.pathname||!l.pathname.includes("?"),ii("?","pathname","search",l)),G(!l.pathname||!l.pathname.includes("#"),ii("#","pathname","hash",l)),G(!l.search||!l.search.includes("#"),ii("#","search","hash",l)));let i=e===""||l.pathname==="",a=i?"/":l.pathname,s;if(a==null)s=n;else{let h=t.length-1;if(!r&&a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),h-=1;l.pathname=g.join("/")}s=h>=0?t[h]:"/"}let c=Dp(l,s),u=a&&a!=="/"&&a.endsWith("/"),m=(i||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||m)&&(c.pathname+="/"),c}const mt=e=>e.join("/").replace(/\/\/+/g,"/"),$p=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Up=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Qp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Wp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Mc=["post","put","patch","delete"];new Set(Mc);const Vp=["get",...Mc];new Set(Vp);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rr(){return rr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rr.apply(this,arguments)}const Jo=N.createContext(null),Hp=N.createContext(null),Dt=N.createContext(null),_l=N.createContext(null),At=N.createContext({outlet:null,matches:[],isDataRoute:!1}),Fc=N.createContext(null);function Yp(e,t){let{relative:n}=t===void 0?{}:t;ur()||G(!1);let{basename:r,navigator:l}=N.useContext(Dt),{hash:i,pathname:a,search:s}=Ac(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:mt([r,a])),l.createHref({pathname:c,search:s,hash:i})}function ur(){return N.useContext(_l)!=null}function cr(){return ur()||G(!1),N.useContext(_l).location}function Dc(e){N.useContext(Dt).static||N.useLayoutEffect(e)}function Gp(){let{isDataRoute:e}=N.useContext(At);return e?ah():Kp()}function Kp(){ur()||G(!1);let e=N.useContext(Jo),{basename:t,future:n,navigator:r}=N.useContext(Dt),{matches:l}=N.useContext(At),{pathname:i}=cr(),a=JSON.stringify(Ic(l,n.v7_relativeSplatPath)),s=N.useRef(!1);return Dc(()=>{s.current=!0}),N.useCallback(function(u,m){if(m===void 0&&(m={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let h=Oc(u,JSON.parse(a),i,m.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:mt([t,h.pathname])),(m.replace?r.replace:r.push)(h,m.state,m)},[t,r,a,i,e])}function Ac(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=N.useContext(Dt),{matches:l}=N.useContext(At),{pathname:i}=cr(),a=JSON.stringify(Ic(l,r.v7_relativeSplatPath));return N.useMemo(()=>Oc(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function Xp(e,t){return qp(e,t)}function qp(e,t,n,r){ur()||G(!1);let{navigator:l}=N.useContext(Dt),{matches:i}=N.useContext(At),a=i[i.length-1],s=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=cr(),m;if(t){var h;let k=typeof t=="string"?Ft(t):t;c==="/"||(h=k.pathname)!=null&&h.startsWith(c)||G(!1),m=k}else m=u;let g=m.pathname||"/",w=g;if(c!=="/"){let k=c.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(k.length).join("/")}let y=Sp(e,{pathname:w}),v=nh(y&&y.map(k=>Object.assign({},k,{params:Object.assign({},s,k.params),pathname:mt([c,l.encodeLocation?l.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?c:mt([c,l.encodeLocation?l.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r);return t&&v?N.createElement(_l.Provider,{value:{location:rr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:ot.Pop}},v):v}function Zp(){let e=oh(),t=Wp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},t),n?N.createElement("pre",{style:l},n):null,null)}const Jp=N.createElement(Zp,null);class eh extends N.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?N.createElement(At.Provider,{value:this.props.routeContext},N.createElement(Fc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function th(e){let{routeContext:t,match:n,children:r}=e,l=N.useContext(Jo);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(At.Provider,{value:t},r)}function nh(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,s=(l=n)==null?void 0:l.errors;if(s!=null){let m=a.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id])!==void 0);m>=0||G(!1),a=a.slice(0,Math.min(a.length,m+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<a.length;m++){let h=a[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=m),h.route.id){let{loaderData:g,errors:w}=n,y=h.route.loader&&g[h.route.id]===void 0&&(!w||w[h.route.id]===void 0);if(h.route.lazy||y){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((m,h,g)=>{let w,y=!1,v=null,k=null;n&&(w=s&&h.route.id?s[h.route.id]:void 0,v=h.route.errorElement||Jp,c&&(u<0&&g===0?(sh("route-fallback"),y=!0,k=null):u===g&&(y=!0,k=h.route.hydrateFallbackElement||null)));let f=t.concat(a.slice(0,g+1)),d=()=>{let p;return w?p=v:y?p=k:h.route.Component?p=N.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=m,N.createElement(th,{match:h,routeContext:{outlet:m,matches:f,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?N.createElement(eh,{location:n.location,revalidation:n.revalidation,component:v,error:w,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var Bc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Bc||{}),$c=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}($c||{});function rh(e){let t=N.useContext(Jo);return t||G(!1),t}function lh(e){let t=N.useContext(Hp);return t||G(!1),t}function ih(e){let t=N.useContext(At);return t||G(!1),t}function Uc(e){let t=ih(),n=t.matches[t.matches.length-1];return n.route.id||G(!1),n.route.id}function oh(){var e;let t=N.useContext(Fc),n=lh(),r=Uc();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function ah(){let{router:e}=rh(Bc.UseNavigateStable),t=Uc($c.UseNavigateStable),n=N.useRef(!1);return Dc(()=>{n.current=!0}),N.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,rr({fromRouteId:t},i)))},[e,t])}const hs={};function sh(e,t,n){hs[e]||(hs[e]=!0)}function uh(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ji(e){G(!1)}function ch(e){let{basename:t="/",children:n=null,location:r,navigationType:l=ot.Pop,navigator:i,static:a=!1,future:s}=e;ur()&&G(!1);let c=t.replace(/^\/*/,"/"),u=N.useMemo(()=>({basename:c,navigator:i,static:a,future:rr({v7_relativeSplatPath:!1},s)}),[c,s,i,a]);typeof r=="string"&&(r=Ft(r));let{pathname:m="/",search:h="",hash:g="",state:w=null,key:y="default"}=r,v=N.useMemo(()=>{let k=Zo(m,c);return k==null?null:{location:{pathname:k,search:h,hash:g,state:w,key:y},navigationType:l}},[c,m,h,g,w,y,l]);return v==null?null:N.createElement(Dt.Provider,{value:u},N.createElement(_l.Provider,{children:n,value:v}))}function dh(e){let{children:t,location:n}=e;return Xp(eo(t),n)}new Promise(()=>{});function eo(e,t){t===void 0&&(t=[]);let n=[];return N.Children.forEach(e,(r,l)=>{if(!N.isValidElement(r))return;let i=[...t,l];if(r.type===N.Fragment){n.push.apply(n,eo(r.props.children,i));return}r.type!==Ji&&G(!1),!r.props.index||!r.props.children||G(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=eo(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function to(){return to=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},to.apply(this,arguments)}function fh(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function ph(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function hh(e,t){return e.button===0&&(!t||t==="_self")&&!ph(e)}const mh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],gh="6";try{window.__reactRouterVersion=gh}catch{}const vh="startTransition",ms=ad[vh];function xh(e){let{basename:t,children:n,future:r,window:l}=e,i=N.useRef();i.current==null&&(i.current=wp({window:l,v5Compat:!0}));let a=i.current,[s,c]=N.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},m=N.useCallback(h=>{u&&ms?ms(()=>c(h)):c(h)},[c,u]);return N.useLayoutEffect(()=>a.listen(m),[a,m]),N.useEffect(()=>uh(r),[r]),N.createElement(ch,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const yh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ye=N.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:i,replace:a,state:s,target:c,to:u,preventScrollReset:m,viewTransition:h}=t,g=fh(t,mh),{basename:w}=N.useContext(Dt),y,v=!1;if(typeof u=="string"&&wh.test(u)&&(y=u,yh))try{let p=new URL(window.location.href),x=u.startsWith("//")?new URL(p.protocol+u):new URL(u),S=Zo(x.pathname,w);x.origin===p.origin&&S!=null?u=S+x.search+x.hash:v=!0}catch{}let k=Yp(u,{relative:l}),f=kh(u,{replace:a,state:s,target:c,preventScrollReset:m,relative:l,viewTransition:h});function d(p){r&&r(p),p.defaultPrevented||f(p)}return N.createElement("a",to({},g,{href:y||k,onClick:v||i?r:d,ref:n,target:c}))});var gs;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(gs||(gs={}));var vs;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(vs||(vs={}));function kh(e,t){let{target:n,replace:r,state:l,preventScrollReset:i,relative:a,viewTransition:s}=t===void 0?{}:t,c=Gp(),u=cr(),m=Ac(e,{relative:a});return N.useCallback(h=>{if(hh(h,n)){h.preventDefault();let g=r!==void 0?r:fl(u)===fl(m);c(e,{replace:g,state:l,preventScrollReset:i,relative:a,viewTransition:s})}},[u,c,m,r,l,n,e,i,a,s])}const jh=()=>{const[e,t]=N.useState(!1),[n,r]=N.useState(!1);return N.useEffect(()=>{const l=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]),N.useEffect(()=>{n?document.body.style.overflow="hidden":document.body.style.overflow="unset";const l=i=>{i.key==="Escape"&&n&&r(!1)};return document.addEventListener("keydown",l),()=>{document.body.style.overflow="unset",document.removeEventListener("keydown",l)}},[n]),o.jsx("header",{id:"header",className:`modern-header ${e?"scrolled":""}`,children:o.jsx("div",{className:"container",children:o.jsxs("nav",{className:"navbar-modern",children:[o.jsx("div",{className:"navbar-brand",children:o.jsx(ye,{to:"/",className:"logo-link",children:o.jsx("img",{src:"./images/logo.png",alt:"Qik.ai Logo",className:"logo-img"})})}),o.jsx("div",{className:"navbar-nav desktop-nav",children:o.jsxs("div",{className:"nav-links",children:[o.jsx(ye,{to:"/",className:"nav-link",children:"Home"}),o.jsx(ye,{to:"/about",className:"nav-link",children:"About"}),o.jsx(ye,{to:"/contact",className:"nav-link",children:"Contact"})]})}),o.jsx("button",{className:"mobile-menu-toggle",onClick:()=>r(!n),"aria-label":"Toggle mobile menu",children:o.jsxs("span",{className:`hamburger ${n?"active":""}`,children:[o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{})]})}),o.jsx("div",{className:`mobile-nav ${n?"active":""}`,onClick:l=>{l.target===l.currentTarget&&r(!1)},children:o.jsx("div",{className:"mobile-nav-content",children:o.jsxs("div",{className:"mobile-nav-links",children:[o.jsx(ye,{to:"/",className:"mobile-nav-link",onClick:()=>r(!1),children:"Home"}),o.jsx(ye,{to:"/about",className:"mobile-nav-link",onClick:()=>r(!1),children:"About"}),o.jsx(ye,{to:"/contact",className:"mobile-nav-link",onClick:()=>r(!1),children:"Contact"})]})})}),o.jsx("div",{className:"header-contact",children:o.jsxs("a",{href:"mailto:hello@qik.ai",className:"contact-link",children:[o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:o.jsx("path",{d:"M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"})}),o.jsx("span",{children:"hello@qik.ai"})]})})]})})})},Sh=()=>o.jsxs("footer",{id:"footer",className:"animated animatedFadeInDown fadeInDown",children:[o.jsx("div",{className:"footer-top",children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"row",children:[o.jsxs("div",{className:"col-md-4",children:[o.jsx("h4",{children:o.jsx("a",{href:"/",children:o.jsx("img",{src:"./images/logo.png",alt:"Qik.ai Logo"})})}),o.jsx("p",{children:"Supercharge your business with 50+ integrated business applications. With Qik Cloud Stack, you can speedup, automate and bring transparency to your business activities. Experience the power of cloud to increase your business productivity by 20%."})]}),o.jsxs("div",{className:"col-md-4 text-center-uvs",children:[o.jsx("h4",{children:"Contact"}),o.jsx("ul",{style:{listStyleType:"none",padding:0,margin:0,marginTop:"20px"},children:o.jsx("li",{style:{marginBottom:"13px"},children:"Email: hello@qik.ai"})})]}),o.jsxs("div",{className:"col-md-4 text-right-uvs",children:[o.jsx("h4",{children:"Always reachable on"}),o.jsxs("div",{className:"social-links",style:{marginTop:"20px"},children:[o.jsx("button",{style:{backgroundColor:"transparent",borderColor:"transparent",outlineColor:"transparent",outline:"none"},children:o.jsx("img",{src:"./images/linkedin.svg",alt:"Business solution icon"})}),o.jsx("button",{style:{backgroundColor:"transparent",borderColor:"transparent",outlineColor:"transparent",outline:"none"},children:o.jsx("img",{src:"./images/gmail.svg",alt:"Business solution icon",style:{marginLeft:"20px"}})})]})]})]})})}),o.jsx("div",{className:"containervs",children:o.jsx("div",{className:"copyright",children:o.jsxs("p",{style:{textAlign:"center"},children:["All rights reserved © 2025",o.jsx("strong",{children:o.jsx("span",{children:o.jsx("a",{href:"/",target:"_blank",children:"Qik.Ai"})})})]})})})]}),Nh=()=>{const e=N.useRef(null);return N.useEffect(()=>{const t=e.current,n=t.getContext("2d"),r=()=>{t.parentElement;const u=window.devicePixelRatio||1,m=window.innerWidth,h=window.innerHeight;t.width=m*u,t.height=h*u,t.style.width=m+"px",t.style.height=h+"px",n.scale(u,u)};r(),window.addEventListener("resize",r);const l=[],i=45,a=140;let s;for(let u=0;u<i;u++){const m=Math.random();let h="normal";m>.85?h="hub":m>.7&&(h="core"),l.push({x:Math.random()*t.width,y:Math.random()*t.height,vx:(Math.random()-.5)*.6,vy:(Math.random()-.5)*.6,radius:h==="hub"?Math.random()*3+5:h==="core"?Math.random()*2+4:Math.random()*2+2,pulse:Math.random()*Math.PI*2,energy:Math.random(),type:h,brightness:Math.random()*.5+.5,glowIntensity:Math.random()*.8+.2})}const c=()=>{n.clearRect(0,0,t.width,t.height),l.forEach((u,m)=>{u.x+=u.vx,u.y+=u.vy,(u.x<-20||u.x>t.width+20)&&(u.vx*=-1),(u.y<-20||u.y>t.height+20)&&(u.vy*=-1),u.x=Math.max(-10,Math.min(t.width+10,u.x)),u.y=Math.max(-10,Math.min(t.height+10,u.y)),u.pulse+=.015+(u.type==="hub"?.01:0),u.energy=(Math.sin(u.pulse)+1)/2;const h=u.type==="hub",g=u.type==="core",w=u.radius,y=w+u.energy*(h?6:g?4:2),v=n.createRadialGradient(u.x,u.y,0,u.x,u.y,y*2.5);h?(v.addColorStop(0,`rgba(139, 92, 246, ${.4*u.energy*u.glowIntensity})`),v.addColorStop(.3,`rgba(167, 139, 250, ${.3*u.energy})`),v.addColorStop(.6,`rgba(59, 130, 246, ${.2*u.energy})`),v.addColorStop(1,"rgba(139, 92, 246, 0)")):g?(v.addColorStop(0,`rgba(59, 130, 246, ${.35*u.energy*u.glowIntensity})`),v.addColorStop(.4,`rgba(139, 92, 246, ${.25*u.energy})`),v.addColorStop(1,"rgba(59, 130, 246, 0)")):(v.addColorStop(0,`rgba(167, 139, 250, ${.25*u.energy*u.glowIntensity})`),v.addColorStop(.5,`rgba(139, 92, 246, ${.15*u.energy})`),v.addColorStop(1,"rgba(167, 139, 250, 0)")),n.save(),n.globalCompositeOperation="screen",n.beginPath(),n.fillStyle=v,n.arc(u.x,u.y,y*2.5,0,Math.PI*2),n.fill(),n.restore();const k=n.createRadialGradient(u.x,u.y,0,u.x,u.y,y);h?(k.addColorStop(0,`rgba(255, 255, 255, ${.95*u.brightness})`),k.addColorStop(.2,`rgba(139, 92, 246, ${.9*u.energy})`),k.addColorStop(.6,`rgba(59, 130, 246, ${.7*u.energy})`),k.addColorStop(1,`rgba(139, 92, 246, ${.1*u.energy})`)):g?(k.addColorStop(0,`rgba(255, 255, 255, ${.85*u.brightness})`),k.addColorStop(.3,`rgba(59, 130, 246, ${.8*u.energy})`),k.addColorStop(1,`rgba(139, 92, 246, ${.1*u.energy})`)):(k.addColorStop(0,`rgba(255, 255, 255, ${.7*u.brightness})`),k.addColorStop(.4,`rgba(167, 139, 250, ${.6*u.energy})`),k.addColorStop(1,`rgba(139, 92, 246, ${.05*u.energy})`)),n.beginPath(),n.fillStyle=k,n.arc(u.x,u.y,y,0,Math.PI*2),n.fill();const f=n.createRadialGradient(u.x,u.y,0,u.x,u.y,w*.5);f.addColorStop(0,`rgba(255, 255, 255, ${.95+u.energy*.05})`),f.addColorStop(.7,`rgba(255, 255, 255, ${.8*u.brightness})`),f.addColorStop(1,`rgba(255, 255, 255, ${.2*u.brightness})`),n.beginPath(),n.fillStyle=f,n.arc(u.x,u.y,w*.5,0,Math.PI*2),n.fill(),h&&u.energy>.7&&(n.save(),n.globalCompositeOperation="screen",n.beginPath(),n.strokeStyle=`rgba(255, 255, 255, ${(u.energy-.7)*2})`,n.lineWidth=1+u.energy,n.arc(u.x,u.y,w+8+u.energy*4,0,Math.PI*2),n.stroke(),n.restore(),u.energy>.9&&(n.save(),n.globalCompositeOperation="screen",n.strokeStyle=`rgba(255, 255, 255, ${u.energy*.8})`,n.lineWidth=2,n.beginPath(),n.moveTo(u.x-10,u.y),n.lineTo(u.x+10,u.y),n.moveTo(u.x,u.y-10),n.lineTo(u.x,u.y+10),n.stroke(),n.restore()))});for(let u=0;u<l.length;u++)for(let m=u+1;m<l.length;m++){const h=l[u].x-l[m].x,g=l[u].y-l[m].y,w=Math.sqrt(h*h+g*g);let y=a;if(l[u].type==="hub"||l[m].type==="hub"?y=a*1.4:(l[u].type==="core"||l[m].type==="core")&&(y=a*1.2),w<y){const v=(1-w/y)*.8,k=(l[u].energy+l[m].energy)/2,f=l[u].type==="hub"||l[m].type==="hub",d=l[u].type==="core"||l[m].type==="core",p=n.createLinearGradient(l[u].x,l[u].y,l[m].x,l[m].y);if(f?(p.addColorStop(0,`rgba(139, 92, 246, ${v*(.6+k*.4)})`),p.addColorStop(.5,`rgba(167, 139, 250, ${v*(.7+k*.3)})`),p.addColorStop(1,`rgba(59, 130, 246, ${v*(.6+k*.4)})`)):d?(p.addColorStop(0,`rgba(59, 130, 246, ${v*(.5+k*.3)})`),p.addColorStop(.5,`rgba(139, 92, 246, ${v*(.6+k*.2)})`),p.addColorStop(1,`rgba(59, 130, 246, ${v*(.5+k*.3)})`)):(p.addColorStop(0,`rgba(167, 139, 250, ${v*(.4+k*.3)})`),p.addColorStop(.5,`rgba(139, 92, 246, ${v*(.5+k*.2)})`),p.addColorStop(1,`rgba(167, 139, 250, ${v*(.4+k*.3)})`)),n.save(),n.globalCompositeOperation="screen",n.beginPath(),n.strokeStyle=p,n.lineWidth=(f?2.5:d?2:1.5)+k*.5,n.moveTo(l[u].x,l[u].y),n.lineTo(l[m].x,l[m].y),n.stroke(),n.restore(),k>.5){const P=Date.now()*.001*(f?2:1.5)%2;let E,_;if(P<=1)E=l[u].x+(l[m].x-l[u].x)*P,_=l[u].y+(l[m].y-l[u].y)*P;else{const fe=P-1;E=l[m].x+(l[u].x-l[m].x)*fe,_=l[m].y+(l[u].y-l[m].y)*fe}const F=(f?4:d?3:2)*k,L=n.createRadialGradient(E,_,0,E,_,F*2);L.addColorStop(0,`rgba(255, 255, 255, ${k*.9})`),L.addColorStop(.5,`rgba(139, 92, 246, ${k*.7})`),L.addColorStop(1,"rgba(139, 92, 246, 0)"),n.save(),n.globalCompositeOperation="screen",n.beginPath(),n.fillStyle=L,n.arc(E,_,F*2,0,Math.PI*2),n.fill(),n.beginPath(),n.fillStyle=`rgba(255, 255, 255, ${k})`,n.arc(E,_,F*.5,0,Math.PI*2),n.fill(),n.restore()}}}s=requestAnimationFrame(c)};return c(),()=>{window.removeEventListener("resize",r),s&&cancelAnimationFrame(s)}},[]),o.jsx("div",{className:"ai-network-container",children:o.jsx("canvas",{ref:e,className:"ai-network-canvas",style:{width:"100%",height:"100vh",background:"transparent",borderRadius:"0",border:"none"}})})},Ch=()=>o.jsx("div",{className:"hero-animation-wrapper",children:o.jsx(Nh,{})}),Eh=new Set(["Qik AllVoices","Qik DragonDrip","Qik Forms","Qik Surveys","Qik Email Validator","Qik Feature Maestro","Qik OnboardFlow","Qik OKR & Goals","NexusPost","Qik AssetGrid","Qik BookIt"]),bh=new Set(["Qik Sign"]),Ph=({kind:e})=>{const t=e==="ALPHA";return o.jsx("span",{style:{position:"absolute",top:8,right:8,background:t?"linear-gradient(135deg,#FF7A59 0%,#FF3D81 100%)":"linear-gradient(135deg,#94A3FF 0%,#4F46E5 100%)",color:"#fff",fontSize:11,padding:"6px 9px",fontWeight:800,letterSpacing:".5px",borderRadius:999,boxShadow:"0 6px 14px rgba(0,0,0,.12)",zIndex:5},title:t?"Alpha product":"Beta product",children:e})},ee=({title:e,img:t,children:n,alphaMode:r})=>{const l=!bh.has(e),i=Eh.has(e)?"ALPHA":"BETA";return o.jsx("div",{className:"col-md-4 col-sm-6 col-12 business-card-animate",children:o.jsxs("div",{className:"feature-item business-product enhanced-card",style:{position:"relative"},children:[l&&o.jsx(Ph,{kind:i}),o.jsx("img",{src:t,alt:`${e} icon`,className:"business-card-img"}),o.jsxs("div",{className:"business-card-content",children:[o.jsx("strong",{children:e}),o.jsx("p",{children:n})]})]})})},_h=({alphaMode:e=!1})=>o.jsx("div",{id:"sub-business-solutions",children:o.jsxs("div",{className:"col-md-12",id:"products",style:{display:"flex",flexDirection:"column",gap:"40px"},children:[o.jsxs("div",{className:"row",style:{display:"flex",flexWrap:"wrap",gap:"32px 0"},children:[o.jsx("div",{className:"col-md-12",style:{marginBottom:"20px"},children:o.jsx("h6",{style:{color:"#00abf6",fontWeight:"bold",marginBottom:"15px"},children:"Compliance, Legal & Risk Management"})}),o.jsx(ee,{alphaMode:e,img:"./images/logos/Qik Sign.png",title:"Qik Sign",children:"Secure E-Signature Platform: Legally binding digital signatures with audit trails & workflow automation"}),o.jsx(ee,{alphaMode:e,img:"./images/logos/Qik Policy Management Portal.PNG",title:"Qik Policy Management Portal",children:"Centralized policy creation, management, and compliance tracking"}),o.jsx(ee,{alphaMode:e,img:"./images/logos/Qik Whistleblower.PNG",title:"Qik Whistleblower",children:"Anonymous reporting and incident management system"}),o.jsx(ee,{alphaMode:e,img:"./images/logos/Qik RetainRight.PNG",title:"Qik RetainRight",children:"Document Retention & Auto-Purge Scheduler: Automated compliance for data retention policies"}),o.jsx(ee,{alphaMode:e,img:"./images/logos/LegaDraft.PNG",title:"Qik LegaDraft",children:"AI-Powered Legal Document Assistant: AI-driven legal document creation and review"}),o.jsx(ee,{alphaMode:e,img:"./images/logos/Qik CLM.png",title:"Qik CLM",children:"Contract Lifecycle Management: End-to-end contract drafting, collaboration, approvals, renewals & AI clause analysis"})]}),e&&o.jsxs("div",{className:"row",style:{display:"flex",flexWrap:"wrap",gap:"32px 0"},children:[o.jsx("div",{className:"col-md-12",style:{marginBottom:"20px"},children:o.jsx("h6",{style:{color:"#00abf6",fontWeight:"bold",marginBottom:"15px"},children:"Human Capital & Performance"})}),o.jsx(ee,{alphaMode:e,img:"./images/logos/Qik OnboardFlow.PNG",title:"Qik OnboardFlow",children:"Employee Onboarding and Off-boarding: Streamlined employee lifecycle management"}),o.jsx(ee,{alphaMode:e,img:"./images/logos/Qik OKR & Goals.PNG",title:"Qik OKR & Goals",children:"Objective and key results tracking and performance management"}),o.jsx(ee,{alphaMode:e,img:"./images/logos/Qik AllVoices.PNG",title:"Qik AllVoices",children:"Employee voice and feedback collection platform"})]}),e&&o.jsxs("div",{className:"row",style:{display:"flex",flexWrap:"wrap",gap:"32px 0"},children:[o.jsx("div",{className:"col-md-12",style:{marginBottom:"20px"},children:o.jsx("h6",{style:{color:"#00abf6",fontWeight:"bold",marginBottom:"15px"},children:"Marketing, Communications & Engagement"})}),o.jsx(ee,{alphaMode:e,img:"./images/logos/Qik DragonDrip.PNG",title:"Qik DragonDrip",children:"Email Campaign Builder: Marketing automation and email campaign management"}),o.jsx(ee,{alphaMode:e,img:"./images/logos/NexusPost.PNG",title:"NexusPost",children:"Social Media Management"}),o.jsx(ee,{alphaMode:e,img:"./images/logos/Qik Forms.PNG",title:"Qik Forms",children:"Dynamic form builder and data collection"}),o.jsx(ee,{alphaMode:e,img:"./images/logos/Qik Surveys.PNG",title:"Qik Surveys",children:"Survey creation and data collection tools"}),o.jsx(ee,{alphaMode:e,img:"./images/logos/Qik Email Validator.PNG",title:"Qik Email Validator",children:"Email verification"})]}),e&&o.jsxs("div",{className:"row",style:{display:"flex",flexWrap:"wrap",gap:"32px 0"},children:[o.jsx("div",{className:"col-md-12",style:{marginBottom:"20px"},children:o.jsx("h6",{style:{color:"#00abf6",fontWeight:"bold",marginBottom:"15px"},children:"Product Management & Innovation"})}),o.jsx(ee,{alphaMode:e,img:"./images/logos/Qik Feature Maestro.png",title:"Qik Feature Maestro",children:"SaaS Feature Request Board: Product development and feature request management"})]}),e&&o.jsxs("div",{className:"row",style:{display:"flex",flexWrap:"wrap",gap:"32px 0"},children:[o.jsx("div",{className:"col-md-12",style:{marginBottom:"20px"},children:o.jsx("h6",{style:{color:"#00abf6",fontWeight:"bold",marginBottom:"15px"},children:"Operations & Asset management"})}),o.jsx(ee,{alphaMode:e,img:"./images/logos/Qik AssetGrid.PNG",title:"Qik AssetGrid",children:"Company Asset Tracker: Comprehensive asset inventory and management system"}),o.jsx(ee,{alphaMode:e,img:"./images/logos/Qik BookIt.PNG",title:"Qik BookIt",children:"Resource booking and reservation management system"})]}),e&&o.jsx("div",{className:"row",style:{display:"flex",flexWrap:"wrap",gap:"32px 0"},children:o.jsx("div",{className:"col-md-12",style:{marginBottom:"20px"},children:o.jsx("h6",{style:{color:"#00abf6",fontWeight:"bold",marginBottom:"15px"},children:"Engagement & Communication"})})})]})}),zh=()=>{const e=cr(),t=()=>{if(e&&e.search&&e.search.length>0)return e.search;if(typeof window<"u"&&window.location&&window.location.search&&window.location.search.length>0)return window.location.search;if(typeof window<"u"&&window.location&&window.location.hash){const l=window.location.hash,i=l.indexOf("?");if(i!==-1)return l.substring(i)}return""},n=new URLSearchParams(t()),r=(n.get("alpha")||"").toLowerCase()==="true"||n.get("alpha")==="1";return o.jsxs("div",{children:[o.jsx(jh,{}),o.jsxs("section",{id:"qik-intro",className:"qik-intro hero-enhanced",children:[o.jsxs("div",{className:"hero-background",children:[o.jsx("div",{className:"hero-gradient-orb hero-orb-1"}),o.jsx("div",{className:"hero-gradient-orb hero-orb-2"}),o.jsx("div",{className:"hero-gradient-orb hero-orb-3"}),o.jsx("div",{className:"hero-gradient-orb hero-orb-4"}),o.jsx("div",{className:"hero-gradient-orb hero-orb-5"}),o.jsx("div",{className:"hero-particles"}),o.jsx("div",{className:"hero-particles-secondary"})]}),o.jsx("div",{className:"hero-animation-background",children:o.jsx(Ch,{})}),o.jsx("div",{className:"container hero-content",children:o.jsx("div",{className:"row align-items-center justify-content-center",children:o.jsxs("div",{className:"col-lg-8 col-md-10 hero-text-section",children:[o.jsxs("div",{className:"hero-badge",children:[o.jsx("span",{className:"badge-icon",children:"✨"}),o.jsx("span",{className:"badge-text",children:"Next-Gen AI Technology"})]}),o.jsx("h1",{className:"hero-title",children:o.jsx("span",{className:"title-highlight",children:"Qik Cloud Stack"})}),o.jsx("h2",{className:"hero-subtitle",children:"Intelligent business solutions powered by AI to fuel your growth"}),o.jsx("p",{className:"hero-description",children:"Experience the future of business automation with our comprehensive AI-powered cloud platform. From CRM to analytics, transform your operations with cutting-edge artificial intelligence."}),o.jsxs("div",{className:"hero-actions",children:[o.jsxs(ye,{to:"/contact",className:"hero-btn hero-btn-nova hero-btn-nova-primary",title:"Get started with Qik","aria-label":"Get Started with Qik platform",children:[o.jsx("span",{className:"hero-btn-label",children:"Get Started"}),o.jsx("span",{className:"hero-btn-icon-wrapper","aria-hidden":"true",children:o.jsxs("svg",{className:"hero-btn-icon",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M5 12h14"}),o.jsx("path",{d:"M13 6l6 6-6 6"})]})})]}),o.jsxs("button",{onClick:()=>{const l=document.getElementById("business-solutions");l&&l.scrollIntoView({behavior:"smooth"})},className:"hero-btn hero-btn-nova hero-btn-nova-outline",children:[o.jsx("span",{className:"hero-btn-label",children:"Learn More"}),o.jsx("span",{className:"hero-btn-icon-wrapper","aria-hidden":"true",children:o.jsx("svg",{className:"hero-btn-icon",width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:o.jsx("path",{d:"M8 12L3 7H13L8 12Z"})})})]})]}),o.jsxs("div",{className:"hero-stats",children:[o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{className:"stat-number",children:"50+"}),o.jsx("span",{className:"stat-label",children:"AI Tools"})]}),o.jsx("div",{className:"stat-divider"}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{className:"stat-number",children:"10k+"}),o.jsx("span",{className:"stat-label",children:"Businesses"})]}),o.jsx("div",{className:"stat-divider"}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{className:"stat-number",children:"99.9%"}),o.jsx("span",{className:"stat-label",children:"Uptime"})]})]})]})})})]}),o.jsx("section",{id:"business-solutions",className:"business-solutions-section",children:o.jsxs("div",{className:"container",children:[o.jsx("div",{className:"row",children:o.jsx("div",{className:"col-12",children:o.jsxs("div",{className:"section-header text-center",style:{position:"relative"},children:[r&&o.jsx("div",{className:"alpha-badge",style:{position:"absolute",top:"-12px",right:"16px",background:"linear-gradient(135deg, #8B5CF6 0%, #4F46E5 100%)",color:"#fff",padding:"6px 10px",borderRadius:"999px",fontSize:"12px",fontWeight:700,boxShadow:"0 6px 18px rgba(79,70,229,0.14)",zIndex:5},title:"Alpha mode active",children:"ALPHA"}),o.jsx("h2",{className:"section-title",children:"Our Business Solutions"}),o.jsx("p",{className:"section-subtitle",children:"Comprehensive AI-powered tools to transform your business operations"})]})})}),o.jsx("div",{className:"row",children:o.jsx("div",{className:"col-12",children:o.jsx(_h,{alphaMode:r})})})]})}),o.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
  height: 60px;
  padding: 0;
  overflow: hidden;
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
  height: 50px;
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
      padding: 100px 20px 60px;
      gap: 50px;
      position: relative;
      pointer-events: auto;
      transform: translateX(0);
      opacity: 0;
      transition: opacity 0.4s ease 0.2s;
    }

    .mobile-nav.active .mobile-nav-content {
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
      text-align: center;
      width: 100%;
      padding: 15px 0;
      border-radius: 10px;
      opacity: 0;
      transform: translateY(20px);
    }

    .mobile-nav.active .mobile-nav-link {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.3s ease, opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s;
    }

    .mobile-nav.active .mobile-nav-link:nth-child(1) { transition-delay: 0.4s; }
    .mobile-nav.active .mobile-nav-link:nth-child(2) { transition-delay: 0.5s; }
    .mobile-nav.active .mobile-nav-link:nth-child(3) { transition-delay: 0.6s; }

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

    @media (max-width: 600px) {
      .hero-enhanced {
        padding-top: 170px;
      }
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

    /* Nova Buttons Base */
    .hero-btn.hero-btn-nova {
      --nova-radius: 18px;
      --nova-fx-shadow: 0 4px 16px -4px rgba(0,212,230,.35), 0 6px 18px -6px rgba(179,77,255,.32), 0 2px 5px -2px rgba(255,63,181,.25);
      border-radius: var(--nova-radius) !important;
      position: relative;
      font-weight: 600;
      line-height: 1.1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 0.95em 2.4em !important;
      cursor: pointer;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      border: none;
      background: transparent;
      color: #fff;
      box-shadow: none;
      transition: transform .55s cubic-bezier(.16,.8,.24,1), box-shadow .55s ease, background .55s ease, color .4s ease;
      will-change: transform, box-shadow;
      isolation: isolate;
      overflow: hidden;
    }
    .hero-btn.hero-btn-nova:focus-visible { outline: none; box-shadow: 0 0 0 3px rgba(255,255,255,.9), 0 0 0 6px rgba(0,212,230,.55); }

    /* Primary Filled */
    .hero-btn.hero-btn-nova-primary {
      --gradient-angle: 135deg;
      --g1: #00D4E6;
      --g2: #b34dff;
      --g3: #ff3fb5;
      position: relative;
      background: linear-gradient(var(--gradient-angle), var(--g1) 0%, var(--g2) 45%, var(--g3) 100%);
      color: #fff;
      border: none;
      box-shadow: var(--nova-fx-shadow);
      animation: novaPulse 6s ease-in-out infinite;
    }
    .hero-btn.hero-btn-nova-primary:before,
    .hero-btn.hero-btn-nova-primary:after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
    }
    /* Soft moving light */
    .hero-btn.hero-btn-nova-primary:before {
      background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.55) 50%, rgba(255,255,255,0) 100%);
      width: 160%;
      left: -30%;
      mix-blend-mode: overlay;
      transform: translateX(-50%);
      opacity: 0;
      transition: opacity .6s ease;
    }
    .hero-btn.hero-btn-nova-primary:hover:before { opacity: .55; animation: novaSheen 2.4s ease-in-out forwards; }
    /* Subtle ambient glow */
    .hero-btn.hero-btn-nova-primary:after {
      background: radial-gradient(circle at 30% 35%, rgba(255,255,255,.55), transparent 70%);
      filter: blur(18px) saturate(1.2);
      opacity: .35;
      z-index: -1;
      transition: opacity .6s ease;
    }
    .hero-btn.hero-btn-nova-primary:hover:after { opacity: .55; }
    .hero-btn.hero-btn-nova-primary:hover {
      transform: translateY(-4px) scale(1.02);
      box-shadow: 0 10px 34px -8px rgba(0,212,230,.55), 0 14px 38px -10px rgba(179,77,255,.45), 0 6px 14px -4px rgba(255,63,181,.4);
    }
    .hero-btn.hero-btn-nova-primary:active {
      transform: translateY(0) scale(.96);
      transition: transform .2s ease;
      box-shadow: 0 4px 14px -4px rgba(0,212,230,.5), 0 6px 18px -10px rgba(179,77,255,.4);
    }
    .hero-btn.hero-btn-nova .hero-btn-label { position: relative; z-index: 2; }
    .hero-btn.hero-btn-nova .hero-btn-icon-wrapper {
      position: relative;
      width: 34px; height: 34px;
      display: inline-flex; align-items: center; justify-content: center;
      border-radius: 11px;
      background: rgba(255,255,255,.2);
      backdrop-filter: blur(5px) brightness(1.15);
      box-shadow: inset 0 0 0 1px rgba(255,255,255,.45), 0 4px 10px -2px rgba(0,0,0,.25);
      margin-left: 6px;
      transition: transform .6s ease, background .6s ease;
    }
    .hero-btn.hero-btn-nova:hover .hero-btn-icon-wrapper { transform: translateX(2px) rotate(18deg) scale(1.08); background: rgba(255,255,255,.28); }
    .hero-btn.hero-btn-nova .hero-btn-icon { stroke-width: 2.2; }

    /* Outline Variant */
    .hero-btn.hero-btn-nova-outline {
      --outline-bg: rgba(255,255,255,0.08);
      background: var(--outline-bg);
      color: #00abf6; /* unified base color */
      box-shadow: 0 2px 10px -2px rgba(0,212,230,.25), 0 4px 18px -6px rgba(79,70,229,.25);
      border: 1.5px solid rgba(0,212,230,.5);
      backdrop-filter: blur(12px) saturate(1.4);
    }
    /* Outline variant icon wrapper should mirror primary variant for consistent sizing */
    .hero-btn.hero-btn-nova-outline .hero-btn-icon-wrapper {
      background: rgba(0,212,230,.12);
      box-shadow: inset 0 0 0 1px rgba(0,212,230,.35), 0 4px 10px -2px rgba(0,0,0,.25);
    }
    .hero-btn.hero-btn-nova-outline:before { display:none; }
    .hero-btn.hero-btn-nova-outline:hover {
      color: #00d4e6; /* brighter hover */
      transform: translateY(-4px) scale(1.02);
      border-color: rgba(0,212,230,.85);
      background: linear-gradient(135deg, rgba(0,212,230,0.14), rgba(179,77,255,0.14) 55%, rgba(255,63,181,0.14));
      box-shadow: 0 8px 28px -10px rgba(0,212,230,.4), 0 10px 32px -12px rgba(79,70,229,.35);
    }
    .hero-btn.hero-btn-nova-outline:active { transform: translateY(0) scale(.96); }

    /* Animations */
    @keyframes novaPulse { 0%,100% { transform: translateY(0) scale(1);} 50% { transform: translateY(-2px) scale(1.015);} }
    @keyframes novaSheen { 0% { transform: translateX(-60%); } 55% { transform: translateX(60%); } 100% { transform: translateX(60%); } }
    @media (prefers-reduced-motion: reduce) {
      .hero-btn.hero-btn-nova { animation: none; }
      .hero-btn.hero-btn-nova-primary:before { display: none; }
      .hero-btn.hero-btn-nova:hover { transform: translateY(-3px) scale(1.015); }
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
  color: #00abf6; /* unified with Compliance section heading */
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
      background: linear-gradient(135deg, #00D4E6 0%, #b34dff 50%, #ff3fb5 100%);
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
  /* Unified hero-actions stacking + full-width centering */
  .hero-actions { flex-direction: column; align-items: stretch; gap: 14px; }
  .hero-actions .hero-btn.hero-btn-nova { width: 100%; max-width: 100%; padding: 0.95em 1.6em !important; }
  .hero-actions .hero-btn.hero-btn-nova .hero-btn-icon-wrapper { width: 36px; height: 36px; }
  .hero-actions .hero-btn.hero-btn-nova-primary,
  .hero-actions .hero-btn.hero-btn-nova-outline { min-height: 60px; }
  .hero-actions .hero-btn.hero-btn-nova .hero-btn-label { font-size: 1.05rem; }
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
`}}),o.jsx(Sh,{})]})},Lh=()=>o.jsx("nav",{id:"sidebar",children:o.jsxs("ul",{className:"list-unstyled components",children:[o.jsx("li",{className:"nav-item",style:{height:"50px"}}),o.jsx("li",{children:o.jsx(ye,{to:"/",children:o.jsx("span",{children:" Home"})})}),o.jsx("li",{children:o.jsx(ye,{to:"/Academy",children:o.jsx("span",{children:" Academy"})})}),o.jsx("li",{children:o.jsx(ye,{to:"/Business",children:o.jsx("span",{children:" Business"})})})]})}),Rh=()=>{const e=N.useRef([]),t=(n,r)=>{e.current[n||1].scrollIntoView({behavior:"smooth"})};return o.jsxs("div",{children:[o.jsx("header",{id:"header",children:o.jsx("div",{className:"containervs",children:o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-md-2 col-sm-2 col-2",children:o.jsx("a",{href:"/",children:o.jsx("img",{src:"./images/logo.png",alt:"Qik.ai",className:"img-logovs"})})}),o.jsx("div",{className:"col-md-6 col-3",children:o.jsx("div",{className:" nav-menu d-none d-lg-block float-right",style:{padding:4},children:o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx("div",{onClick:()=>t(1),children:"Home"})}),o.jsx("li",{children:o.jsx("div",{onClick:()=>t(2),children:"Features"})}),o.jsx("li",{children:o.jsx("div",{onClick:()=>t(3),children:"Pricing"})}),o.jsx("li",{children:o.jsx("div",{onClick:()=>t(4),children:"Contact Us"})})]})})}),o.jsx("div",{className:"col-md-3 col-sm-6 col-6 text-right",children:o.jsxs("div",{className:"us-contact",children:[o.jsx("i",{className:"fa fa-envelope"})," hello@qik.ai"]})})]})})}),o.jsx("section",{ref:n=>e.current[1]=n,id:"qik-intro",className:"qik-intro",children:o.jsx("div",{className:"containervs",children:o.jsxs("div",{className:"col-md-12 row",children:[o.jsxs("div",{className:"col-md-6 introtext",children:[o.jsxs("h2",{children:["Qik Coaching Institute App on Cloud",o.jsx("hr",{className:"section-line-border mhide"}),o.jsx("hr",{className:"section-line-border1 mshow"})]}),o.jsx("p",{children:"Undoubtedly the simplest yet most powerful software on cloud to automate & grow your coaching institute. Trusted by 2000+ institutions worldwide."}),o.jsx("button",{onClick:()=>t(3),className:"btn btn-primary btn-lg",style:{marginBottom:"40px",borderRadius:"4px"},children:"Get Business App"})]}),o.jsxs("div",{className:"col-md-6",children:[o.jsx("img",{src:"./images/academy-intro.png",alt:"",style:{width:"100%"}}),o.jsx("br",{}),o.jsx("br",{}),o.jsx("h5",{style:{textAlign:"center"},children:"Qik Coaching Institute Software"})]})]})})}),o.jsx("style",{dangerouslySetInnerHTML:{__html:`   .introtext h2{text-align:left;}
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
	`}}),o.jsx("section",{ref:n=>e.current[2]=n,id:"qik-features",className:"qik-features",children:o.jsx("div",{className:"containervs",children:o.jsxs("div",{className:"col-md-12",children:[o.jsxs("div",{className:"col-md-12 containervs-text-center",children:[o.jsx("span",{className:"uvs-span",children:"Core Features"}),o.jsxs("h2",{children:["Next Generation features that will help you manage & grow your coaching institute seamlessly.",o.jsx("hr",{className:"section-line-border1"})," ",o.jsx("br",{}),o.jsx("br",{})]})]}),o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-md-4",children:o.jsx("table",{className:"table uvstable",children:o.jsx("tbody",{children:o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("img",{src:"./images/cf1.svg",alt:""})}),o.jsxs("td",{children:[o.jsx("h4",{children:"Student Record"}),o.jsx("p",{children:"Record of student details with photographs personal & parent contact details, batches, previous year marks, etc."})]})]})})})}),o.jsx("div",{className:"col-md-4",children:o.jsx("table",{className:"table uvstable",children:o.jsx("tbody",{children:o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("img",{src:"./images/cf2.svg",alt:""})}),o.jsxs("td",{children:[o.jsx("h4",{children:"Test Management"}),o.jsx("p",{children:"Facility to add Test details & marks, enter students marks, auto alerts to students & parents for marks obtained. Record of all tests & scored marks studentwise"})]})]})})})}),o.jsx("div",{className:"col-md-4",children:o.jsx("table",{className:"table uvstable",children:o.jsx("tbody",{children:o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("img",{src:"./images/cf3.svg",alt:""})}),o.jsxs("td",{children:[o.jsx("h4",{children:"Fees Management"}),o.jsx("p",{children:"Keep track of all payments datewise. Alert for paid amount & remaining amountm facilityto print receipts."})]})]})})})}),o.jsx("div",{className:"col-md-4",children:o.jsx("table",{className:"table uvstable",children:o.jsx("tbody",{children:o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("img",{src:"./images/cf4.svg",alt:""})}),o.jsxs("td",{children:[o.jsx("h4",{children:"Assign Homework"}),o.jsx("p",{children:" "})]})]})})})}),o.jsx("div",{className:"col-md-4",children:o.jsx("table",{className:"table uvstable",children:o.jsx("tbody",{children:o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("img",{src:"./images/cf5.svg",alt:""})}),o.jsxs("td",{children:[o.jsx("h4",{children:"I-Card Printing"}),o.jsx("p",{children:"Be ahead & unique from competitors by providing I-cards to students. Facility to design own institute I-card by uploading header & footer logo. Generate Individual or Bulk I-cards batchwise & print."})]})]})})})}),o.jsx("div",{className:"col-md-4",children:o.jsx("table",{className:"table uvstable",children:o.jsx("tbody",{children:o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("img",{src:"./images/cf6.svg",alt:""})}),o.jsxs("td",{children:[o.jsx("h4",{children:"Videos"}),o.jsx("p",{children:" "})]})]})})})}),o.jsx("div",{className:"col-md-4",children:o.jsx("table",{className:"table uvstable",children:o.jsx("tbody",{children:o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("img",{src:"./images/cf7.svg",alt:""})}),o.jsxs("td",{children:[o.jsx("h4",{children:"Custom Setting"}),o.jsx("p",{children:"Management of all modules configuration settings such as SMS API Setting, facility to add/update institute details with logo, receipt header or footer images etc."})]})]})})})}),o.jsx("div",{className:"col-md-4",children:o.jsx("table",{className:"table uvstable",children:o.jsx("tbody",{children:o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("img",{src:"./images/cf8.svg",alt:""})}),o.jsxs("td",{children:[o.jsx("h4",{children:"Mobile Application"}),o.jsx("p",{children:"Single App which gives information about Attendance, Tests, Exam results, Holidays and Fees details to students and parents."})]})]})})})}),o.jsx("div",{className:"col-md-4",children:o.jsx("table",{className:"table uvstable",children:o.jsx("tbody",{children:o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("img",{src:"./images/cf9.svg",alt:""})}),o.jsxs("td",{children:[o.jsx("h4",{children:"Reports"}),o.jsx("p",{children:"All full-fledged reports with filter & sort to generate custom reports as per need. Complete set of reports such as enquires, registrations, attendance, tests, expences, Results student or batchwise & many more"})]})]})})})}),o.jsx("div",{className:"col-md-4",children:o.jsx("table",{className:"table uvstable",children:o.jsx("tbody",{children:o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("img",{src:"./images/Enquiry.svg",alt:""})}),o.jsxs("td",{children:[o.jsx("h4",{children:"Enquiry Management"}),o.jsx("p",{children:"Keep track on all enquiries with status & follow up date reminder for coverting open enquiries into admissions. Enquiry report where can review all Prospect, Converted & Closed enquiries."})]})]})})})}),o.jsx("div",{className:"col-md-4",children:o.jsx("table",{className:"table uvstable",children:o.jsx("tbody",{children:o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("img",{src:"./images/Biometric.svg",alt:""})}),o.jsxs("td",{children:[o.jsx("h4",{children:"Biometric Attendance"}),o.jsx("p",{children:"Track daily batch-wise attendance of students, send daily attendance alerts to absentees, push attendance from biometric machine to cloud in real time"})]})]})})})}),o.jsx("div",{className:"col-md-4",children:o.jsx("table",{className:"table uvstable",children:o.jsx("tbody",{children:o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("img",{src:"./images/Subjectwise.svg",alt:""})}),o.jsxs("td",{children:[o.jsx("h4",{children:"Subjectwise Progress"}),o.jsx("p",{children:"Subjectwise complete progress report of student for parents. All performance record such as total present days & absent days, Fees Summary, Total tests & obtained marks, Remarks & many more"})]})]})})})}),o.jsx("div",{className:"col-md-4",children:o.jsx("table",{className:"table uvstable",children:o.jsx("tbody",{children:o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("img",{src:"./images/sms.svg",alt:""})}),o.jsxs("td",{children:[o.jsx("h4",{children:"Auto SMS"}),o.jsx("p",{children:"Automatically send SMS alerts to parents for subjectwise absentee, fees payment, test results, holidays etc. Facility to send custom messages like for batch timing, festival wishes or b’day wish etc."})]})]})})})}),o.jsx("div",{className:"col-md-4",children:o.jsx("table",{className:"table uvstable",children:o.jsx("tbody",{children:o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("img",{src:"./images/Exam.svg",alt:""})}),o.jsxs("td",{children:[o.jsx("h4",{children:"Test"}),o.jsx("p",{children:"Facility to add test & details such as title, description & out of marks. Test marks & absent for test alerts to parents. Storing all test records studentwise."})]})]})})})}),o.jsx("div",{className:"col-md-4",children:o.jsx("table",{className:"table uvstable",children:o.jsx("tbody",{children:o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("img",{src:"./images/smstemplete.svg",alt:""})}),o.jsxs("td",{children:[o.jsx("h4",{children:"SMS Templates"}),o.jsx("p",{children:"Save all event based SMS templates such as New registration, Absentee, Test Marks, Holidays etc. Can create custom template & save for future use."})]})]})})})}),o.jsx("div",{className:"col-md-4",children:o.jsx("table",{className:"table uvstable",children:o.jsx("tbody",{children:o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("img",{src:"./images/email.svg",alt:""})}),o.jsxs("td",{children:[o.jsx("h4",{children:"Email Alerts"}),o.jsx("p",{children:"Send custom email alerts to parents batchwise/subjectwise"})]})]})})})}),o.jsx("div",{className:"col-md-4",children:o.jsx("table",{className:"table uvstable",children:o.jsx("tbody",{children:o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("img",{src:"./images/omr.svg",alt:""})}),o.jsxs("td",{children:[o.jsx("h4",{children:"OMR Integration"}),o.jsx("p",{children:"Automatic checking of OMR Sheets for MCQs. Automatically update marks scored and analyse question-wise performance. OMR results alert to parents via SMS."})]})]})})})}),o.jsx("div",{className:"col-md-4",children:o.jsx("table",{className:"table uvstable",children:o.jsx("tbody",{children:o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("img",{src:"./images/expense.svg",alt:""})}),o.jsxs("td",{children:[o.jsx("h4",{children:"Manage Expense"}),o.jsx("p",{children:"Keep track of all expense entries & salaries. Create categories & heads as per expenses. Keep record of all payment transactions with bank account details."})]})]})})})}),o.jsx("div",{className:"col-md-4",children:o.jsx("table",{className:"table uvstable",children:o.jsx("tbody",{children:o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("img",{src:"./images/subscription.svg",alt:""})}),o.jsxs("td",{children:[o.jsx("h4",{children:" Online Subscription"}),o.jsx("p",{children:"Easy & speedy modes to top up your subscription packages. Netbanking, Credit/Debit Card & Paytm."})]})]})})})})]})]})})}),o.jsx("section",{ref:n=>e.current[3]=n,id:"qik-pricing",className:"qik-pricing",children:o.jsx("div",{className:"containervs",children:o.jsxs("div",{className:"row",children:[o.jsxs("div",{className:"col-md-12",style:{textAlign:"center",marginBottom:"7%"},children:[o.jsx("span",{className:"uvs-span",children:"Pricing"}),o.jsxs("h2",{children:["App subscription ",o.jsx("hr",{className:"section-line-border1"})]})]}),o.jsx("div",{className:"col-md-12",children:o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-md-4",children:o.jsx("div",{className:"uvs-classics",children:o.jsxs("table",{className:"uvs-table",children:[o.jsxs("caption",{children:["Customize Pack 1",o.jsx("br",{}),o.jsx("span",{className:"uvs-line"})]}),o.jsxs("tbody",{children:[o.jsx("tr",{children:o.jsxs("td",{children:[o.jsx("span",{style:{color:"#00abf6"},children:"50% discount"}),"   ",o.jsx("strong",{children:o.jsx("strike",{children:"$999"})})]})}),o.jsx("tr",{children:o.jsxs("td",{children:[o.jsx("h2",{children:"$450"})," Per Month"]})}),o.jsx("tr",{children:o.jsxs("td",{children:[o.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),o.jsx("tr",{children:o.jsxs("td",{children:[o.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),o.jsx("tr",{children:o.jsxs("td",{children:[o.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),o.jsx("tr",{children:o.jsxs("td",{children:[o.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),o.jsx("tr",{children:o.jsxs("td",{children:[o.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),o.jsx("tr",{children:o.jsx("td",{className:"select-td",children:o.jsxs("button",{className:"btn btn-uvs",children:["Choose Plan   ",o.jsx("i",{className:"fa fa-angle-right",children:" "}),o.jsx("i",{className:"fa fa-angle-right",children:" "})]})})})]})]})})}),o.jsx("div",{className:"col-md-4",children:o.jsx("div",{className:"uvs-classics-vs",children:o.jsxs("table",{className:"uvs-table",children:[o.jsxs("caption",{style:{color:"#fff"},children:["Annual Pack 3",o.jsx("br",{}),o.jsx("span",{className:"uvs-linevs"})]}),o.jsxs("tbody",{children:[o.jsx("tr",{children:o.jsxs("td",{children:[o.jsx("h2",{style:{color:"#fff"},children:"$990"})," Per Month"]})}),o.jsx("tr",{children:o.jsxs("td",{children:[o.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),o.jsx("tr",{children:o.jsxs("td",{children:[o.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),o.jsx("tr",{children:o.jsxs("td",{children:[o.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),o.jsx("tr",{children:o.jsxs("td",{children:[o.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),o.jsx("tr",{children:o.jsxs("td",{children:[o.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),o.jsx("tr",{children:o.jsx("td",{className:"select-td",children:o.jsxs("button",{className:"btn btn-primary",children:["Choose Plan   ",o.jsx("i",{className:"fa fa-angle-right",children:" "}),o.jsx("i",{className:"fa fa-angle-right",children:" "})]})})})]})]})})}),o.jsx("div",{className:"col-md-4",children:o.jsx("div",{className:"uvs-classics",children:o.jsxs("table",{className:"uvs-table",children:[o.jsxs("caption",{children:["Customize Pack 4 ",o.jsx("br",{}),o.jsx("span",{className:"uvs-line"})]}),o.jsxs("tbody",{children:[o.jsx("tr",{children:o.jsxs("td",{children:[o.jsx("span",{style:{color:"#00abf6"},children:"50% discount"}),"   ",o.jsx("strong",{children:o.jsx("strike",{children:"$999"})})]})}),o.jsx("tr",{children:o.jsxs("td",{children:[o.jsx("h2",{children:"$450"})," Per Month"]})}),o.jsx("tr",{children:o.jsxs("td",{children:[o.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),o.jsx("tr",{children:o.jsxs("td",{children:[o.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),o.jsx("tr",{children:o.jsxs("td",{children:[o.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),o.jsx("tr",{children:o.jsxs("td",{children:[o.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),o.jsx("tr",{children:o.jsxs("td",{children:[o.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),o.jsx("tr",{children:o.jsx("td",{className:"select-td",children:o.jsxs("button",{className:"btn btn-uvs",children:["Choose Plan   ",o.jsx("i",{className:"fa fa-angle-right",children:" "}),o.jsx("i",{className:"fa fa-angle-right",children:" "})]})})})]})]})})})]})})]})})}),o.jsx("section",{ref:n=>e.current[4]=n,id:"contact-us",style:{paddingTop:"100px"},children:o.jsx("div",{className:"containervs",children:o.jsxs("div",{className:"row",children:[o.jsxs("div",{className:"col-md-12 containervs-text-center",children:[o.jsx("span",{className:"uvs-span",children:"Contact us"}),o.jsxs("h2",{children:["Let's create progress ",o.jsx("br",{}),"together ",o.jsx("hr",{className:"section-line-border1"})]})]}),o.jsx("div",{className:"col-md-6",children:o.jsx("img",{src:"./images/contact.svg",width:"100%",alt:""})}),o.jsx("div",{className:"col-md-6",children:o.jsxs("div",{className:"form-uvsl",children:[o.jsx("br",{}),o.jsx("br",{}),"Name ",o.jsx("input",{type:"text",name:"name",className:"form-control"}),"Email Address",o.jsx("input",{type:"text",name:"name",className:"form-control"}),"Mobile Number",o.jsx("input",{type:"text",name:"name",className:"form-control"}),"Description",o.jsx("textarea",{className:"form-control",defaultValue:""}),o.jsx("input",{type:"submit",className:"btn btn-primary btn-lg",text:"Submit"})]})})]})})}),o.jsxs("footer",{id:"footer",children:[o.jsx("div",{className:"footer-top",children:o.jsx("div",{className:"containervs",children:o.jsxs("div",{className:"row",children:[o.jsxs("div",{className:"col-md-4",children:[o.jsx("h4",{children:o.jsx(ye,{to:"/",children:o.jsx("img",{src:"./images/logo.png",alt:""})})}),o.jsx("p",{children:"Supercharge your business with 50+ integrated business applications. With Qik Cloud Stack, you can speedup, automate and bring transparency to your business activities. Experience the power of cloud to increase your business productivity by 20%."})]}),o.jsxs("div",{className:"col-md-4 text-center-uvs",children:[o.jsx("h4",{children:"Contact"}),o.jsx("ul",{style:{listStyleType:"none",padding:0,margin:0,marginTop:"20px"},children:o.jsx("li",{style:{marginBottom:"13px"},children:"Email: hello@qik.ai"})})]}),o.jsxs("div",{className:"col-md-4 text-right-uvs",children:[o.jsx("h4",{children:"Always reachable on"}),o.jsxs("div",{className:"social-links",style:{marginTop:"20px"},children:[o.jsx("button",{style:{backgroundColor:"transparent",outlineColor:"transparent",borderColor:"transparent",outline:"none"},children:o.jsx("img",{src:"./images/linkedin.svg",alt:""})}),o.jsx("button",{style:{backgroundColor:"transparent",outlineColor:"transparent",borderColor:"transparent",outline:"none"},children:o.jsx("img",{src:"./images/gmail.svg",style:{marginLeft:"20px"},alt:""})})]})]})]})})}),o.jsx("div",{className:"containervs",children:o.jsx("div",{className:"copyright",children:o.jsxs("p",{style:{textAlign:"center"},children:["All rights reserved © 2023",o.jsx("strong",{children:o.jsx("span",{children:o.jsx(ye,{to:"/",children:"Qik.Ai"})})})]})})})]})]})};class Th extends N.Component{render(){return o.jsx(xh,{basename:"/",children:o.jsxs("div",{children:[o.jsx("div",{style:{display:"none"},children:o.jsx(Lh,{})}),o.jsxs(dh,{children:[o.jsx(Ji,{path:"/",element:o.jsx(zh,{})}),o.jsx(Ji,{path:"/Business",element:o.jsx(Rh,{})})]})]})})}}const Ih=document.getElementById("root"),Oh=Lc(Ih);Oh.render(o.jsx(Ps.StrictMode,{children:o.jsx(Th,{})}));
