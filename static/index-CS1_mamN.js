function Wc(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function Yc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bs={exports:{}},hi={},ws={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lr=Symbol.for("react.element"),Gc=Symbol.for("react.portal"),Kc=Symbol.for("react.fragment"),qc=Symbol.for("react.strict_mode"),Xc=Symbol.for("react.profiler"),Zc=Symbol.for("react.provider"),Jc=Symbol.for("react.context"),ed=Symbol.for("react.forward_ref"),td=Symbol.for("react.suspense"),nd=Symbol.for("react.memo"),rd=Symbol.for("react.lazy"),no=Symbol.iterator;function id(e){return e===null||typeof e!="object"?null:(e=no&&e[no]||e["@@iterator"],typeof e=="function"?e:null)}var ks={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},js=Object.assign,Ss={};function fn(e,t,n){this.props=e,this.context=t,this.refs=Ss,this.updater=n||ks}fn.prototype.isReactComponent={};fn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ns(){}Ns.prototype=fn.prototype;function na(e,t,n){this.props=e,this.context=t,this.refs=Ss,this.updater=n||ks}var ra=na.prototype=new Ns;ra.constructor=na;js(ra,fn.prototype);ra.isPureReactComponent=!0;var ro=Array.isArray,Cs=Object.prototype.hasOwnProperty,ia={current:null},Es={key:!0,ref:!0,__self:!0,__source:!0};function Ps(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)Cs.call(t,r)&&!Es.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:lr,type:e,key:l,ref:o,props:i,_owner:ia.current}}function ld(e,t){return{$$typeof:lr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function la(e){return typeof e=="object"&&e!==null&&e.$$typeof===lr}function ad(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var io=/\/+/g;function Ri(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ad(""+e.key):t.toString(36)}function Lr(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case lr:case Gc:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ri(o,0):r,ro(i)?(n="",e!=null&&(n=e.replace(io,"$&/")+"/"),Lr(i,t,n,"",function(u){return u})):i!=null&&(la(i)&&(i=ld(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(io,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",ro(e))for(var s=0;s<e.length;s++){l=e[s];var c=r+Ri(l,s);o+=Lr(l,t,n,c,i)}else if(c=id(e),typeof c=="function")for(e=c.call(e),s=0;!(l=e.next()).done;)l=l.value,c=r+Ri(l,s++),o+=Lr(l,t,n,c,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function hr(e,t,n){if(e==null)return e;var r=[],i=0;return Lr(e,r,"","",function(l){return t.call(n,l,i++)}),r}function od(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Ir={transition:null},sd={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Ir,ReactCurrentOwner:ia};function zs(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:hr,forEach:function(e,t,n){hr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hr(e,function(){t++}),t},toArray:function(e){return hr(e,function(t){return t})||[]},only:function(e){if(!la(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=fn;M.Fragment=Kc;M.Profiler=Xc;M.PureComponent=na;M.StrictMode=qc;M.Suspense=td;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sd;M.act=zs;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=js({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=ia.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)Cs.call(t,c)&&!Es.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:lr,type:e.type,key:i,ref:l,props:r,_owner:o}};M.createContext=function(e){return e={$$typeof:Jc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Zc,_context:e},e.Consumer=e};M.createElement=Ps;M.createFactory=function(e){var t=Ps.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:ed,render:e}};M.isValidElement=la;M.lazy=function(e){return{$$typeof:rd,_payload:{_status:-1,_result:e},_init:od}};M.memo=function(e,t){return{$$typeof:nd,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Ir.transition;Ir.transition={};try{e()}finally{Ir.transition=t}};M.unstable_act=zs;M.useCallback=function(e,t){return ce.current.useCallback(e,t)};M.useContext=function(e){return ce.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};M.useEffect=function(e,t){return ce.current.useEffect(e,t)};M.useId=function(){return ce.current.useId()};M.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return ce.current.useMemo(e,t)};M.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};M.useRef=function(e){return ce.current.useRef(e)};M.useState=function(e){return ce.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return ce.current.useTransition()};M.version="18.3.1";ws.exports=M;var j=ws.exports;const _s=Yc(j),ud=Wc({__proto__:null,default:_s},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cd=j,dd=Symbol.for("react.element"),pd=Symbol.for("react.fragment"),fd=Object.prototype.hasOwnProperty,hd=cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,md={key:!0,ref:!0,__self:!0,__source:!0};function Ls(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)fd.call(t,r)&&!md.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:dd,type:e,key:l,ref:o,props:i,_owner:hd.current}}hi.Fragment=pd;hi.jsx=Ls;hi.jsxs=Ls;bs.exports=hi;var a=bs.exports,Is={exports:{}},je={},Ms={exports:{}},Rs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,_){var I=E.length;E.push(_);e:for(;0<I;){var V=I-1>>>1,X=E[V];if(0<i(X,_))E[V]=_,E[I]=X,I=V;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var _=E[0],I=E.pop();if(I!==_){E[0]=I;e:for(var V=0,X=E.length,pr=X>>>1;V<pr;){var wt=2*(V+1)-1,Mi=E[wt],kt=wt+1,fr=E[kt];if(0>i(Mi,I))kt<X&&0>i(fr,Mi)?(E[V]=fr,E[kt]=I,V=kt):(E[V]=Mi,E[wt]=I,V=wt);else if(kt<X&&0>i(fr,I))E[V]=fr,E[kt]=I,V=kt;else break e}}return _}function i(E,_){var I=E.sortIndex-_.sortIndex;return I!==0?I:E.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],u=[],m=1,h=null,g=3,b=!1,y=!1,x=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(E){for(var _=n(u);_!==null;){if(_.callback===null)r(u);else if(_.startTime<=E)r(u),_.sortIndex=_.expirationTime,t(c,_);else break;_=n(u)}}function v(E){if(x=!1,f(E),!y)if(n(c)!==null)y=!0,Li(S);else{var _=n(u);_!==null&&Ii(v,_.startTime-E)}}function S(E,_){y=!1,x&&(x=!1,p(z),z=-1),b=!0;var I=g;try{for(f(_),h=n(c);h!==null&&(!(h.expirationTime>_)||E&&!pe());){var V=h.callback;if(typeof V=="function"){h.callback=null,g=h.priorityLevel;var X=V(h.expirationTime<=_);_=e.unstable_now(),typeof X=="function"?h.callback=X:h===n(c)&&r(c),f(_)}else r(c);h=n(c)}if(h!==null)var pr=!0;else{var wt=n(u);wt!==null&&Ii(v,wt.startTime-_),pr=!1}return pr}finally{h=null,g=I,b=!1}}var P=!1,C=null,z=-1,O=5,L=-1;function pe(){return!(e.unstable_now()-L<O)}function gn(){if(C!==null){var E=e.unstable_now();L=E;var _=!0;try{_=C(!0,E)}finally{_?xn():(P=!1,C=null)}}else P=!1}var xn;if(typeof d=="function")xn=function(){d(gn)};else if(typeof MessageChannel<"u"){var to=new MessageChannel,Vc=to.port2;to.port1.onmessage=gn,xn=function(){Vc.postMessage(null)}}else xn=function(){w(gn,0)};function Li(E){C=E,P||(P=!0,xn())}function Ii(E,_){z=w(function(){E(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||b||(y=!0,Li(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(E){switch(g){case 1:case 2:case 3:var _=3;break;default:_=g}var I=g;g=_;try{return E()}finally{g=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,_){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var I=g;g=E;try{return _()}finally{g=I}},e.unstable_scheduleCallback=function(E,_,I){var V=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?V+I:V):I=V,E){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=I+X,E={id:m++,callback:_,priorityLevel:E,startTime:I,expirationTime:X,sortIndex:-1},I>V?(E.sortIndex=I,t(u,E),n(c)===null&&E===n(u)&&(x?(p(z),z=-1):x=!0,Ii(v,I-V))):(E.sortIndex=X,t(c,E),y||b||(y=!0,Li(S))),E},e.unstable_shouldYield=pe,e.unstable_wrapCallback=function(E){var _=g;return function(){var I=g;g=_;try{return E.apply(this,arguments)}finally{g=I}}}})(Rs);Ms.exports=Rs;var gd=Ms.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd=j,ke=gd;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ts=new Set,An={};function Tt(e,t){an(e,t),an(e+"Capture",t)}function an(e,t){for(An[e]=t,e=0;e<t.length;e++)Ts.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ol=Object.prototype.hasOwnProperty,vd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lo={},ao={};function yd(e){return ol.call(ao,e)?!0:ol.call(lo,e)?!1:vd.test(e)?ao[e]=!0:(lo[e]=!0,!1)}function bd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wd(e,t,n,r){if(t===null||typeof t>"u"||bd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var aa=/[\-:]([a-z])/g;function oa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(aa,oa);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(aa,oa);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(aa,oa);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function sa(e,t,n,r){var i=re.hasOwnProperty(t)?re[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wd(t,n,i,r)&&(n=null),r||i===null?yd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mr=Symbol.for("react.element"),$t=Symbol.for("react.portal"),Ut=Symbol.for("react.fragment"),ua=Symbol.for("react.strict_mode"),sl=Symbol.for("react.profiler"),Fs=Symbol.for("react.provider"),Os=Symbol.for("react.context"),ca=Symbol.for("react.forward_ref"),ul=Symbol.for("react.suspense"),cl=Symbol.for("react.suspense_list"),da=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),Ds=Symbol.for("react.offscreen"),oo=Symbol.iterator;function vn(e){return e===null||typeof e!="object"?null:(e=oo&&e[oo]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Ti;function Cn(e){if(Ti===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ti=t&&t[1]||""}return`
`+Ti+e}var Fi=!1;function Oi(e,t){if(!e||Fi)return"";Fi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var c=`
`+i[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=s);break}}}finally{Fi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cn(e):""}function kd(e){switch(e.tag){case 5:return Cn(e.type);case 16:return Cn("Lazy");case 13:return Cn("Suspense");case 19:return Cn("SuspenseList");case 0:case 2:case 15:return e=Oi(e.type,!1),e;case 11:return e=Oi(e.type.render,!1),e;case 1:return e=Oi(e.type,!0),e;default:return""}}function dl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ut:return"Fragment";case $t:return"Portal";case sl:return"Profiler";case ua:return"StrictMode";case ul:return"Suspense";case cl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Os:return(e.displayName||"Context")+".Consumer";case Fs:return(e._context.displayName||"Context")+".Provider";case ca:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case da:return t=e.displayName||null,t!==null?t:dl(e.type)||"Memo";case et:t=e._payload,e=e._init;try{return dl(e(t))}catch{}}return null}function jd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dl(t);case 8:return t===ua?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Sd(e){var t=Bs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gr(e){e._valueTracker||(e._valueTracker=Sd(e))}function As(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Bs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Hr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pl(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function so(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function $s(e,t){t=t.checked,t!=null&&sa(e,"checked",t,!1)}function fl(e,t){$s(e,t);var n=gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hl(e,t.type,n):t.hasOwnProperty("defaultValue")&&hl(e,t.type,gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function uo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hl(e,t,n){(t!=="number"||Hr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var En=Array.isArray;function Jt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ml(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function co(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(En(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gt(n)}}function Us(e,t){var n=gt(t.value),r=gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function po(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Hs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Hs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xr,Qs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $n(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nd=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){Nd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function Vs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function Ws(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Vs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Cd=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xl(e,t){if(t){if(Cd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function vl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yl=null;function pa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bl=null,en=null,tn=null;function fo(e){if(e=sr(e)){if(typeof bl!="function")throw Error(k(280));var t=e.stateNode;t&&(t=yi(t),bl(e.stateNode,e.type,t))}}function Ys(e){en?tn?tn.push(e):tn=[e]:en=e}function Gs(){if(en){var e=en,t=tn;if(tn=en=null,fo(e),t)for(e=0;e<t.length;e++)fo(t[e])}}function Ks(e,t){return e(t)}function qs(){}var Di=!1;function Xs(e,t,n){if(Di)return e(t,n);Di=!0;try{return Ks(e,t,n)}finally{Di=!1,(en!==null||tn!==null)&&(qs(),Gs())}}function Un(e,t){var n=e.stateNode;if(n===null)return null;var r=yi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var wl=!1;if(Ge)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){wl=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{wl=!1}function Ed(e,t,n,r,i,l,o,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var In=!1,Qr=null,Vr=!1,kl=null,Pd={onError:function(e){In=!0,Qr=e}};function zd(e,t,n,r,i,l,o,s,c){In=!1,Qr=null,Ed.apply(Pd,arguments)}function _d(e,t,n,r,i,l,o,s,c){if(zd.apply(this,arguments),In){if(In){var u=Qr;In=!1,Qr=null}else throw Error(k(198));Vr||(Vr=!0,kl=u)}}function Ft(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ho(e){if(Ft(e)!==e)throw Error(k(188))}function Ld(e){var t=e.alternate;if(!t){if(t=Ft(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return ho(i),e;if(l===r)return ho(i),t;l=l.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Js(e){return e=Ld(e),e!==null?eu(e):null}function eu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=eu(e);if(t!==null)return t;e=e.sibling}return null}var tu=ke.unstable_scheduleCallback,mo=ke.unstable_cancelCallback,Id=ke.unstable_shouldYield,Md=ke.unstable_requestPaint,W=ke.unstable_now,Rd=ke.unstable_getCurrentPriorityLevel,fa=ke.unstable_ImmediatePriority,nu=ke.unstable_UserBlockingPriority,Wr=ke.unstable_NormalPriority,Td=ke.unstable_LowPriority,ru=ke.unstable_IdlePriority,mi=null,$e=null;function Fd(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(mi,e,void 0,(e.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:Bd,Od=Math.log,Dd=Math.LN2;function Bd(e){return e>>>=0,e===0?32:31-(Od(e)/Dd|0)|0}var vr=64,yr=4194304;function Pn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=Pn(s):(l&=o,l!==0&&(r=Pn(l)))}else o=n&~i,o!==0?r=Pn(o):l!==0&&(r=Pn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Te(t),i=1<<n,r|=e[n],t&=~i;return r}function Ad(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $d(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Te(l),s=1<<o,c=i[o];c===-1?(!(s&n)||s&r)&&(i[o]=Ad(s,t)):c<=t&&(e.expiredLanes|=s),l&=~s}}function jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function iu(){var e=vr;return vr<<=1,!(vr&4194240)&&(vr=64),e}function Bi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ar(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Te(t),e[t]=n}function Ud(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Te(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function ha(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Te(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var T=0;function lu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var au,ma,ou,su,uu,Sl=!1,br=[],ot=null,st=null,ut=null,Hn=new Map,Qn=new Map,nt=[],Hd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function go(e,t){switch(e){case"focusin":case"focusout":ot=null;break;case"dragenter":case"dragleave":st=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qn.delete(t.pointerId)}}function bn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=sr(t),t!==null&&ma(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Qd(e,t,n,r,i){switch(t){case"focusin":return ot=bn(ot,e,t,n,r,i),!0;case"dragenter":return st=bn(st,e,t,n,r,i),!0;case"mouseover":return ut=bn(ut,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Hn.set(l,bn(Hn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Qn.set(l,bn(Qn.get(l)||null,e,t,n,r,i)),!0}return!1}function cu(e){var t=Nt(e.target);if(t!==null){var n=Ft(t);if(n!==null){if(t=n.tag,t===13){if(t=Zs(n),t!==null){e.blockedOn=t,uu(e.priority,function(){ou(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Nl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yl=r,n.target.dispatchEvent(r),yl=null}else return t=sr(n),t!==null&&ma(t),e.blockedOn=n,!1;t.shift()}return!0}function xo(e,t,n){Mr(e)&&n.delete(t)}function Vd(){Sl=!1,ot!==null&&Mr(ot)&&(ot=null),st!==null&&Mr(st)&&(st=null),ut!==null&&Mr(ut)&&(ut=null),Hn.forEach(xo),Qn.forEach(xo)}function wn(e,t){e.blockedOn===t&&(e.blockedOn=null,Sl||(Sl=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,Vd)))}function Vn(e){function t(i){return wn(i,e)}if(0<br.length){wn(br[0],e);for(var n=1;n<br.length;n++){var r=br[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ot!==null&&wn(ot,e),st!==null&&wn(st,e),ut!==null&&wn(ut,e),Hn.forEach(t),Qn.forEach(t),n=0;n<nt.length;n++)r=nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nt.length&&(n=nt[0],n.blockedOn===null);)cu(n),n.blockedOn===null&&nt.shift()}var nn=Ze.ReactCurrentBatchConfig,Gr=!0;function Wd(e,t,n,r){var i=T,l=nn.transition;nn.transition=null;try{T=1,ga(e,t,n,r)}finally{T=i,nn.transition=l}}function Yd(e,t,n,r){var i=T,l=nn.transition;nn.transition=null;try{T=4,ga(e,t,n,r)}finally{T=i,nn.transition=l}}function ga(e,t,n,r){if(Gr){var i=Nl(e,t,n,r);if(i===null)Ki(e,t,r,Kr,n),go(e,r);else if(Qd(i,e,t,n,r))r.stopPropagation();else if(go(e,r),t&4&&-1<Hd.indexOf(e)){for(;i!==null;){var l=sr(i);if(l!==null&&au(l),l=Nl(e,t,n,r),l===null&&Ki(e,t,r,Kr,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Ki(e,t,r,null,n)}}var Kr=null;function Nl(e,t,n,r){if(Kr=null,e=pa(r),e=Nt(e),e!==null)if(t=Ft(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kr=e,null}function du(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rd()){case fa:return 1;case nu:return 4;case Wr:case Td:return 16;case ru:return 536870912;default:return 16}default:return 16}}var it=null,xa=null,Rr=null;function pu(){if(Rr)return Rr;var e,t=xa,n=t.length,r,i="value"in it?it.value:it.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return Rr=i.slice(e,1<r?1-r:void 0)}function Tr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wr(){return!0}function vo(){return!1}function Se(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?wr:vo,this.isPropagationStopped=vo,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wr)},persist:function(){},isPersistent:wr}),t}var hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},va=Se(hn),or=H({},hn,{view:0,detail:0}),Gd=Se(or),Ai,$i,kn,gi=H({},or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ya,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kn&&(kn&&e.type==="mousemove"?(Ai=e.screenX-kn.screenX,$i=e.screenY-kn.screenY):$i=Ai=0,kn=e),Ai)},movementY:function(e){return"movementY"in e?e.movementY:$i}}),yo=Se(gi),Kd=H({},gi,{dataTransfer:0}),qd=Se(Kd),Xd=H({},or,{relatedTarget:0}),Ui=Se(Xd),Zd=H({},hn,{animationName:0,elapsedTime:0,pseudoElement:0}),Jd=Se(Zd),ep=H({},hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tp=Se(ep),np=H({},hn,{data:0}),bo=Se(np),rp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ip={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ap(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lp[e])?!!t[e]:!1}function ya(){return ap}var op=H({},or,{key:function(e){if(e.key){var t=rp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Tr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ip[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ya,charCode:function(e){return e.type==="keypress"?Tr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sp=Se(op),up=H({},gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wo=Se(up),cp=H({},or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ya}),dp=Se(cp),pp=H({},hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),fp=Se(pp),hp=H({},gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mp=Se(hp),gp=[9,13,27,32],ba=Ge&&"CompositionEvent"in window,Mn=null;Ge&&"documentMode"in document&&(Mn=document.documentMode);var xp=Ge&&"TextEvent"in window&&!Mn,fu=Ge&&(!ba||Mn&&8<Mn&&11>=Mn),ko=" ",jo=!1;function hu(e,t){switch(e){case"keyup":return gp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ht=!1;function vp(e,t){switch(e){case"compositionend":return mu(t);case"keypress":return t.which!==32?null:(jo=!0,ko);case"textInput":return e=t.data,e===ko&&jo?null:e;default:return null}}function yp(e,t){if(Ht)return e==="compositionend"||!ba&&hu(e,t)?(e=pu(),Rr=xa=it=null,Ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fu&&t.locale!=="ko"?null:t.data;default:return null}}var bp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function So(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bp[e.type]:t==="textarea"}function gu(e,t,n,r){Ys(r),t=qr(t,"onChange"),0<t.length&&(n=new va("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Rn=null,Wn=null;function wp(e){Eu(e,0)}function xi(e){var t=Wt(e);if(As(t))return e}function kp(e,t){if(e==="change")return t}var xu=!1;if(Ge){var Hi;if(Ge){var Qi="oninput"in document;if(!Qi){var No=document.createElement("div");No.setAttribute("oninput","return;"),Qi=typeof No.oninput=="function"}Hi=Qi}else Hi=!1;xu=Hi&&(!document.documentMode||9<document.documentMode)}function Co(){Rn&&(Rn.detachEvent("onpropertychange",vu),Wn=Rn=null)}function vu(e){if(e.propertyName==="value"&&xi(Wn)){var t=[];gu(t,Wn,e,pa(e)),Xs(wp,t)}}function jp(e,t,n){e==="focusin"?(Co(),Rn=t,Wn=n,Rn.attachEvent("onpropertychange",vu)):e==="focusout"&&Co()}function Sp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xi(Wn)}function Np(e,t){if(e==="click")return xi(t)}function Cp(e,t){if(e==="input"||e==="change")return xi(t)}function Ep(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:Ep;function Yn(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ol.call(t,i)||!Oe(e[i],t[i]))return!1}return!0}function Eo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Po(e,t){var n=Eo(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Eo(n)}}function yu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bu(){for(var e=window,t=Hr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hr(e.document)}return t}function wa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Pp(e){var t=bu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yu(n.ownerDocument.documentElement,n)){if(r!==null&&wa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Po(n,l);var o=Po(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zp=Ge&&"documentMode"in document&&11>=document.documentMode,Qt=null,Cl=null,Tn=null,El=!1;function zo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;El||Qt==null||Qt!==Hr(r)||(r=Qt,"selectionStart"in r&&wa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tn&&Yn(Tn,r)||(Tn=r,r=qr(Cl,"onSelect"),0<r.length&&(t=new va("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qt)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vt={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},Vi={},wu={};Ge&&(wu=document.createElement("div").style,"AnimationEvent"in window||(delete Vt.animationend.animation,delete Vt.animationiteration.animation,delete Vt.animationstart.animation),"TransitionEvent"in window||delete Vt.transitionend.transition);function vi(e){if(Vi[e])return Vi[e];if(!Vt[e])return e;var t=Vt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wu)return Vi[e]=t[n];return e}var ku=vi("animationend"),ju=vi("animationiteration"),Su=vi("animationstart"),Nu=vi("transitionend"),Cu=new Map,_o="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vt(e,t){Cu.set(e,t),Tt(t,[e])}for(var Wi=0;Wi<_o.length;Wi++){var Yi=_o[Wi],_p=Yi.toLowerCase(),Lp=Yi[0].toUpperCase()+Yi.slice(1);vt(_p,"on"+Lp)}vt(ku,"onAnimationEnd");vt(ju,"onAnimationIteration");vt(Su,"onAnimationStart");vt("dblclick","onDoubleClick");vt("focusin","onFocus");vt("focusout","onBlur");vt(Nu,"onTransitionEnd");an("onMouseEnter",["mouseout","mouseover"]);an("onMouseLeave",["mouseout","mouseover"]);an("onPointerEnter",["pointerout","pointerover"]);an("onPointerLeave",["pointerout","pointerover"]);Tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ip=new Set("cancel close invalid load scroll toggle".split(" ").concat(zn));function Lo(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_d(r,t,void 0,e),e.currentTarget=null}function Eu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==l&&i.isPropagationStopped())break e;Lo(i,s,u),l=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,u=s.currentTarget,s=s.listener,c!==l&&i.isPropagationStopped())break e;Lo(i,s,u),l=c}}}if(Vr)throw e=kl,Vr=!1,kl=null,e}function D(e,t){var n=t[Il];n===void 0&&(n=t[Il]=new Set);var r=e+"__bubble";n.has(r)||(Pu(t,e,2,!1),n.add(r))}function Gi(e,t,n){var r=0;t&&(r|=4),Pu(n,e,r,t)}var jr="_reactListening"+Math.random().toString(36).slice(2);function Gn(e){if(!e[jr]){e[jr]=!0,Ts.forEach(function(n){n!=="selectionchange"&&(Ip.has(n)||Gi(n,!1,e),Gi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jr]||(t[jr]=!0,Gi("selectionchange",!1,t))}}function Pu(e,t,n,r){switch(du(t)){case 1:var i=Wd;break;case 4:i=Yd;break;default:i=ga}n=i.bind(null,t,n,e),i=void 0,!wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ki(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Nt(s),o===null)return;if(c=o.tag,c===5||c===6){r=l=o;continue e}s=s.parentNode}}r=r.return}Xs(function(){var u=l,m=pa(n),h=[];e:{var g=Cu.get(e);if(g!==void 0){var b=va,y=e;switch(e){case"keypress":if(Tr(n)===0)break e;case"keydown":case"keyup":b=sp;break;case"focusin":y="focus",b=Ui;break;case"focusout":y="blur",b=Ui;break;case"beforeblur":case"afterblur":b=Ui;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=yo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=qd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=dp;break;case ku:case ju:case Su:b=Jd;break;case Nu:b=fp;break;case"scroll":b=Gd;break;case"wheel":b=mp;break;case"copy":case"cut":case"paste":b=tp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=wo}var x=(t&4)!==0,w=!x&&e==="scroll",p=x?g!==null?g+"Capture":null:g;x=[];for(var d=u,f;d!==null;){f=d;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,p!==null&&(v=Un(d,p),v!=null&&x.push(Kn(d,v,f)))),w)break;d=d.return}0<x.length&&(g=new b(g,y,null,n,m),h.push({event:g,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",g&&n!==yl&&(y=n.relatedTarget||n.fromElement)&&(Nt(y)||y[Ke]))break e;if((b||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,b?(y=n.relatedTarget||n.toElement,b=u,y=y?Nt(y):null,y!==null&&(w=Ft(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(b=null,y=u),b!==y)){if(x=yo,v="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=wo,v="onPointerLeave",p="onPointerEnter",d="pointer"),w=b==null?g:Wt(b),f=y==null?g:Wt(y),g=new x(v,d+"leave",b,n,m),g.target=w,g.relatedTarget=f,v=null,Nt(m)===u&&(x=new x(p,d+"enter",y,n,m),x.target=f,x.relatedTarget=w,v=x),w=v,b&&y)t:{for(x=b,p=y,d=0,f=x;f;f=At(f))d++;for(f=0,v=p;v;v=At(v))f++;for(;0<d-f;)x=At(x),d--;for(;0<f-d;)p=At(p),f--;for(;d--;){if(x===p||p!==null&&x===p.alternate)break t;x=At(x),p=At(p)}x=null}else x=null;b!==null&&Io(h,g,b,x,!1),y!==null&&w!==null&&Io(h,w,y,x,!0)}}e:{if(g=u?Wt(u):window,b=g.nodeName&&g.nodeName.toLowerCase(),b==="select"||b==="input"&&g.type==="file")var S=kp;else if(So(g))if(xu)S=Cp;else{S=Sp;var P=jp}else(b=g.nodeName)&&b.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=Np);if(S&&(S=S(e,u))){gu(h,S,n,m);break e}P&&P(e,g,u),e==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&hl(g,"number",g.value)}switch(P=u?Wt(u):window,e){case"focusin":(So(P)||P.contentEditable==="true")&&(Qt=P,Cl=u,Tn=null);break;case"focusout":Tn=Cl=Qt=null;break;case"mousedown":El=!0;break;case"contextmenu":case"mouseup":case"dragend":El=!1,zo(h,n,m);break;case"selectionchange":if(zp)break;case"keydown":case"keyup":zo(h,n,m)}var C;if(ba)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Ht?hu(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(fu&&n.locale!=="ko"&&(Ht||z!=="onCompositionStart"?z==="onCompositionEnd"&&Ht&&(C=pu()):(it=m,xa="value"in it?it.value:it.textContent,Ht=!0)),P=qr(u,z),0<P.length&&(z=new bo(z,e,null,n,m),h.push({event:z,listeners:P}),C?z.data=C:(C=mu(n),C!==null&&(z.data=C)))),(C=xp?vp(e,n):yp(e,n))&&(u=qr(u,"onBeforeInput"),0<u.length&&(m=new bo("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:u}),m.data=C))}Eu(h,t)})}function Kn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Un(e,n),l!=null&&r.unshift(Kn(e,l,i)),l=Un(e,t),l!=null&&r.push(Kn(e,l,i))),e=e.return}return r}function At(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Io(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,u=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&u!==null&&(s=u,i?(c=Un(n,l),c!=null&&o.unshift(Kn(n,c,s))):i||(c=Un(n,l),c!=null&&o.push(Kn(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Mp=/\r\n?/g,Rp=/\u0000|\uFFFD/g;function Mo(e){return(typeof e=="string"?e:""+e).replace(Mp,`
`).replace(Rp,"")}function Sr(e,t,n){if(t=Mo(t),Mo(e)!==t&&n)throw Error(k(425))}function Xr(){}var Pl=null,zl=null;function _l(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ll=typeof setTimeout=="function"?setTimeout:void 0,Tp=typeof clearTimeout=="function"?clearTimeout:void 0,Ro=typeof Promise=="function"?Promise:void 0,Fp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ro<"u"?function(e){return Ro.resolve(null).then(e).catch(Op)}:Ll;function Op(e){setTimeout(function(){throw e})}function qi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Vn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vn(t)}function ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function To(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mn=Math.random().toString(36).slice(2),Ae="__reactFiber$"+mn,qn="__reactProps$"+mn,Ke="__reactContainer$"+mn,Il="__reactEvents$"+mn,Dp="__reactListeners$"+mn,Bp="__reactHandles$"+mn;function Nt(e){var t=e[Ae];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Ae]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=To(e);e!==null;){if(n=e[Ae])return n;e=To(e)}return t}e=n,n=e.parentNode}return null}function sr(e){return e=e[Ae]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function yi(e){return e[qn]||null}var Ml=[],Yt=-1;function yt(e){return{current:e}}function B(e){0>Yt||(e.current=Ml[Yt],Ml[Yt]=null,Yt--)}function F(e,t){Yt++,Ml[Yt]=e.current,e.current=t}var xt={},oe=yt(xt),me=yt(!1),_t=xt;function on(e,t){var n=e.type.contextTypes;if(!n)return xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ge(e){return e=e.childContextTypes,e!=null}function Zr(){B(me),B(oe)}function Fo(e,t,n){if(oe.current!==xt)throw Error(k(168));F(oe,t),F(me,n)}function zu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,jd(e)||"Unknown",i));return H({},n,r)}function Jr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xt,_t=oe.current,F(oe,e),F(me,me.current),!0}function Oo(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=zu(e,t,_t),r.__reactInternalMemoizedMergedChildContext=e,B(me),B(oe),F(oe,e)):B(me),F(me,n)}var Qe=null,bi=!1,Xi=!1;function _u(e){Qe===null?Qe=[e]:Qe.push(e)}function Ap(e){bi=!0,_u(e)}function bt(){if(!Xi&&Qe!==null){Xi=!0;var e=0,t=T;try{var n=Qe;for(T=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qe=null,bi=!1}catch(i){throw Qe!==null&&(Qe=Qe.slice(e+1)),tu(fa,bt),i}finally{T=t,Xi=!1}}return null}var Gt=[],Kt=0,ei=null,ti=0,Ne=[],Ce=0,Lt=null,Ve=1,We="";function jt(e,t){Gt[Kt++]=ti,Gt[Kt++]=ei,ei=e,ti=t}function Lu(e,t,n){Ne[Ce++]=Ve,Ne[Ce++]=We,Ne[Ce++]=Lt,Lt=e;var r=Ve;e=We;var i=32-Te(r)-1;r&=~(1<<i),n+=1;var l=32-Te(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ve=1<<32-Te(t)+i|n<<i|r,We=l+e}else Ve=1<<l|n<<i|r,We=e}function ka(e){e.return!==null&&(jt(e,1),Lu(e,1,0))}function ja(e){for(;e===ei;)ei=Gt[--Kt],Gt[Kt]=null,ti=Gt[--Kt],Gt[Kt]=null;for(;e===Lt;)Lt=Ne[--Ce],Ne[Ce]=null,We=Ne[--Ce],Ne[Ce]=null,Ve=Ne[--Ce],Ne[Ce]=null}var we=null,be=null,A=!1,Re=null;function Iu(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Do(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,be=ct(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Lt!==null?{id:Ve,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,be=null,!0):!1;default:return!1}}function Rl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tl(e){if(A){var t=be;if(t){var n=t;if(!Do(e,t)){if(Rl(e))throw Error(k(418));t=ct(n.nextSibling);var r=we;t&&Do(e,t)?Iu(r,n):(e.flags=e.flags&-4097|2,A=!1,we=e)}}else{if(Rl(e))throw Error(k(418));e.flags=e.flags&-4097|2,A=!1,we=e}}}function Bo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function Nr(e){if(e!==we)return!1;if(!A)return Bo(e),A=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_l(e.type,e.memoizedProps)),t&&(t=be)){if(Rl(e))throw Mu(),Error(k(418));for(;t;)Iu(e,t),t=ct(t.nextSibling)}if(Bo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){be=ct(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}be=null}}else be=we?ct(e.stateNode.nextSibling):null;return!0}function Mu(){for(var e=be;e;)e=ct(e.nextSibling)}function sn(){be=we=null,A=!1}function Sa(e){Re===null?Re=[e]:Re.push(e)}var $p=Ze.ReactCurrentBatchConfig;function jn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var s=i.refs;o===null?delete s[l]:s[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Cr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ao(e){var t=e._init;return t(e._payload)}function Ru(e){function t(p,d){if(e){var f=p.deletions;f===null?(p.deletions=[d],p.flags|=16):f.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=ht(p,d),p.index=0,p.sibling=null,p}function l(p,d,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<d?(p.flags|=2,d):f):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,f,v){return d===null||d.tag!==6?(d=il(f,p.mode,v),d.return=p,d):(d=i(d,f),d.return=p,d)}function c(p,d,f,v){var S=f.type;return S===Ut?m(p,d,f.props.children,v,f.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===et&&Ao(S)===d.type)?(v=i(d,f.props),v.ref=jn(p,d,f),v.return=p,v):(v=Ur(f.type,f.key,f.props,null,p.mode,v),v.ref=jn(p,d,f),v.return=p,v)}function u(p,d,f,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=ll(f,p.mode,v),d.return=p,d):(d=i(d,f.children||[]),d.return=p,d)}function m(p,d,f,v,S){return d===null||d.tag!==7?(d=zt(f,p.mode,v,S),d.return=p,d):(d=i(d,f),d.return=p,d)}function h(p,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=il(""+d,p.mode,f),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case mr:return f=Ur(d.type,d.key,d.props,null,p.mode,f),f.ref=jn(p,null,d),f.return=p,f;case $t:return d=ll(d,p.mode,f),d.return=p,d;case et:var v=d._init;return h(p,v(d._payload),f)}if(En(d)||vn(d))return d=zt(d,p.mode,f,null),d.return=p,d;Cr(p,d)}return null}function g(p,d,f,v){var S=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:s(p,d,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case mr:return f.key===S?c(p,d,f,v):null;case $t:return f.key===S?u(p,d,f,v):null;case et:return S=f._init,g(p,d,S(f._payload),v)}if(En(f)||vn(f))return S!==null?null:m(p,d,f,v,null);Cr(p,f)}return null}function b(p,d,f,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(f)||null,s(d,p,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case mr:return p=p.get(v.key===null?f:v.key)||null,c(d,p,v,S);case $t:return p=p.get(v.key===null?f:v.key)||null,u(d,p,v,S);case et:var P=v._init;return b(p,d,f,P(v._payload),S)}if(En(v)||vn(v))return p=p.get(f)||null,m(d,p,v,S,null);Cr(d,v)}return null}function y(p,d,f,v){for(var S=null,P=null,C=d,z=d=0,O=null;C!==null&&z<f.length;z++){C.index>z?(O=C,C=null):O=C.sibling;var L=g(p,C,f[z],v);if(L===null){C===null&&(C=O);break}e&&C&&L.alternate===null&&t(p,C),d=l(L,d,z),P===null?S=L:P.sibling=L,P=L,C=O}if(z===f.length)return n(p,C),A&&jt(p,z),S;if(C===null){for(;z<f.length;z++)C=h(p,f[z],v),C!==null&&(d=l(C,d,z),P===null?S=C:P.sibling=C,P=C);return A&&jt(p,z),S}for(C=r(p,C);z<f.length;z++)O=b(C,p,z,f[z],v),O!==null&&(e&&O.alternate!==null&&C.delete(O.key===null?z:O.key),d=l(O,d,z),P===null?S=O:P.sibling=O,P=O);return e&&C.forEach(function(pe){return t(p,pe)}),A&&jt(p,z),S}function x(p,d,f,v){var S=vn(f);if(typeof S!="function")throw Error(k(150));if(f=S.call(f),f==null)throw Error(k(151));for(var P=S=null,C=d,z=d=0,O=null,L=f.next();C!==null&&!L.done;z++,L=f.next()){C.index>z?(O=C,C=null):O=C.sibling;var pe=g(p,C,L.value,v);if(pe===null){C===null&&(C=O);break}e&&C&&pe.alternate===null&&t(p,C),d=l(pe,d,z),P===null?S=pe:P.sibling=pe,P=pe,C=O}if(L.done)return n(p,C),A&&jt(p,z),S;if(C===null){for(;!L.done;z++,L=f.next())L=h(p,L.value,v),L!==null&&(d=l(L,d,z),P===null?S=L:P.sibling=L,P=L);return A&&jt(p,z),S}for(C=r(p,C);!L.done;z++,L=f.next())L=b(C,p,z,L.value,v),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?z:L.key),d=l(L,d,z),P===null?S=L:P.sibling=L,P=L);return e&&C.forEach(function(gn){return t(p,gn)}),A&&jt(p,z),S}function w(p,d,f,v){if(typeof f=="object"&&f!==null&&f.type===Ut&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case mr:e:{for(var S=f.key,P=d;P!==null;){if(P.key===S){if(S=f.type,S===Ut){if(P.tag===7){n(p,P.sibling),d=i(P,f.props.children),d.return=p,p=d;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===et&&Ao(S)===P.type){n(p,P.sibling),d=i(P,f.props),d.ref=jn(p,P,f),d.return=p,p=d;break e}n(p,P);break}else t(p,P);P=P.sibling}f.type===Ut?(d=zt(f.props.children,p.mode,v,f.key),d.return=p,p=d):(v=Ur(f.type,f.key,f.props,null,p.mode,v),v.ref=jn(p,d,f),v.return=p,p=v)}return o(p);case $t:e:{for(P=f.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){n(p,d.sibling),d=i(d,f.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=ll(f,p.mode,v),d.return=p,p=d}return o(p);case et:return P=f._init,w(p,d,P(f._payload),v)}if(En(f))return y(p,d,f,v);if(vn(f))return x(p,d,f,v);Cr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,f),d.return=p,p=d):(n(p,d),d=il(f,p.mode,v),d.return=p,p=d),o(p)):n(p,d)}return w}var un=Ru(!0),Tu=Ru(!1),ni=yt(null),ri=null,qt=null,Na=null;function Ca(){Na=qt=ri=null}function Ea(e){var t=ni.current;B(ni),e._currentValue=t}function Fl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function rn(e,t){ri=e,Na=qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function ze(e){var t=e._currentValue;if(Na!==e)if(e={context:e,memoizedValue:t,next:null},qt===null){if(ri===null)throw Error(k(308));qt=e,ri.dependencies={lanes:0,firstContext:e}}else qt=qt.next=e;return t}var Ct=null;function Pa(e){Ct===null?Ct=[e]:Ct.push(e)}function Fu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Pa(t)):(n.next=i.next,i.next=n),t.interleaved=n,qe(e,r)}function qe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tt=!1;function za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ou(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,qe(e,n)}return i=r.interleaved,i===null?(t.next=t,Pa(r)):(t.next=i.next,i.next=t),r.interleaved=t,qe(e,n)}function Fr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ha(e,n)}}function $o(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ii(e,t,n,r){var i=e.updateQueue;tt=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,u=c.next;c.next=null,o===null?l=u:o.next=u,o=c;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==o&&(s===null?m.firstBaseUpdate=u:s.next=u,m.lastBaseUpdate=c))}if(l!==null){var h=i.baseState;o=0,m=u=c=null,s=l;do{var g=s.lane,b=s.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:b,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,x=s;switch(g=t,b=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){h=y.call(b,h,g);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,g=typeof y=="function"?y.call(b,h,g):y,g==null)break e;h=H({},h,g);break e;case 2:tt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else b={eventTime:b,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(u=m=b,c=h):m=m.next=b,o|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(m===null&&(c=h),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Mt|=o,e.lanes=o,e.memoizedState=h}}function Uo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var ur={},Ue=yt(ur),Xn=yt(ur),Zn=yt(ur);function Et(e){if(e===ur)throw Error(k(174));return e}function _a(e,t){switch(F(Zn,t),F(Xn,e),F(Ue,ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gl(t,e)}B(Ue),F(Ue,t)}function cn(){B(Ue),B(Xn),B(Zn)}function Du(e){Et(Zn.current);var t=Et(Ue.current),n=gl(t,e.type);t!==n&&(F(Xn,e),F(Ue,n))}function La(e){Xn.current===e&&(B(Ue),B(Xn))}var $=yt(0);function li(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zi=[];function Ia(){for(var e=0;e<Zi.length;e++)Zi[e]._workInProgressVersionPrimary=null;Zi.length=0}var Or=Ze.ReactCurrentDispatcher,Ji=Ze.ReactCurrentBatchConfig,It=0,U=null,K=null,Z=null,ai=!1,Fn=!1,Jn=0,Up=0;function ie(){throw Error(k(321))}function Ma(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Oe(e[n],t[n]))return!1;return!0}function Ra(e,t,n,r,i,l){if(It=l,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Or.current=e===null||e.memoizedState===null?Wp:Yp,e=n(r,i),Fn){l=0;do{if(Fn=!1,Jn=0,25<=l)throw Error(k(301));l+=1,Z=K=null,t.updateQueue=null,Or.current=Gp,e=n(r,i)}while(Fn)}if(Or.current=oi,t=K!==null&&K.next!==null,It=0,Z=K=U=null,ai=!1,t)throw Error(k(300));return e}function Ta(){var e=Jn!==0;return Jn=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?U.memoizedState=Z=e:Z=Z.next=e,Z}function _e(){if(K===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=Z===null?U.memoizedState:Z.next;if(t!==null)Z=t,K=e;else{if(e===null)throw Error(k(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Z===null?U.memoizedState=Z=e:Z=Z.next=e}return Z}function er(e,t){return typeof t=="function"?t(e):t}function el(e){var t=_e(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=K,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,c=null,u=l;do{var m=u.lane;if((It&m)===m)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=h,o=r):c=c.next=h,U.lanes|=m,Mt|=m}u=u.next}while(u!==null&&u!==l);c===null?o=r:c.next=s,Oe(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,U.lanes|=l,Mt|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function tl(e){var t=_e(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Oe(l,t.memoizedState)||(he=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Bu(){}function Au(e,t){var n=U,r=_e(),i=t(),l=!Oe(r.memoizedState,i);if(l&&(r.memoizedState=i,he=!0),r=r.queue,Fa(Hu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,tr(9,Uu.bind(null,n,r,i,t),void 0,null),J===null)throw Error(k(349));It&30||$u(n,t,i)}return i}function $u(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uu(e,t,n,r){t.value=n,t.getSnapshot=r,Qu(t)&&Vu(e)}function Hu(e,t,n){return n(function(){Qu(t)&&Vu(e)})}function Qu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function Vu(e){var t=qe(e,1);t!==null&&Fe(t,e,1,-1)}function Ho(e){var t=Be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:e},t.queue=e,e=e.dispatch=Vp.bind(null,U,e),[t.memoizedState,e]}function tr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wu(){return _e().memoizedState}function Dr(e,t,n,r){var i=Be();U.flags|=e,i.memoizedState=tr(1|t,n,void 0,r===void 0?null:r)}function wi(e,t,n,r){var i=_e();r=r===void 0?null:r;var l=void 0;if(K!==null){var o=K.memoizedState;if(l=o.destroy,r!==null&&Ma(r,o.deps)){i.memoizedState=tr(t,n,l,r);return}}U.flags|=e,i.memoizedState=tr(1|t,n,l,r)}function Qo(e,t){return Dr(8390656,8,e,t)}function Fa(e,t){return wi(2048,8,e,t)}function Yu(e,t){return wi(4,2,e,t)}function Gu(e,t){return wi(4,4,e,t)}function Ku(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qu(e,t,n){return n=n!=null?n.concat([e]):null,wi(4,4,Ku.bind(null,t,e),n)}function Oa(){}function Xu(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ma(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zu(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ma(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ju(e,t,n){return It&21?(Oe(n,t)||(n=iu(),U.lanes|=n,Mt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function Hp(e,t){var n=T;T=n!==0&&4>n?n:4,e(!0);var r=Ji.transition;Ji.transition={};try{e(!1),t()}finally{T=n,Ji.transition=r}}function ec(){return _e().memoizedState}function Qp(e,t,n){var r=ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tc(e))nc(t,n);else if(n=Fu(e,t,n,r),n!==null){var i=ue();Fe(n,e,r,i),rc(n,t,r)}}function Vp(e,t,n){var r=ft(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tc(e))nc(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,s=l(o,n);if(i.hasEagerState=!0,i.eagerState=s,Oe(s,o)){var c=t.interleaved;c===null?(i.next=i,Pa(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Fu(e,t,i,r),n!==null&&(i=ue(),Fe(n,e,r,i),rc(n,t,r))}}function tc(e){var t=e.alternate;return e===U||t!==null&&t===U}function nc(e,t){Fn=ai=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ha(e,n)}}var oi={readContext:ze,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Wp={readContext:ze,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:ze,useEffect:Qo,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Dr(4194308,4,Ku.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Dr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Dr(4,2,e,t)},useMemo:function(e,t){var n=Be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qp.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:Ho,useDebugValue:Oa,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=Ho(!1),t=e[0];return e=Hp.bind(null,e[1]),Be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=U,i=Be();if(A){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),J===null)throw Error(k(349));It&30||$u(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Qo(Hu.bind(null,r,l,e),[e]),r.flags|=2048,tr(9,Uu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Be(),t=J.identifierPrefix;if(A){var n=We,r=Ve;n=(r&~(1<<32-Te(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Jn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Up++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Yp={readContext:ze,useCallback:Xu,useContext:ze,useEffect:Fa,useImperativeHandle:qu,useInsertionEffect:Yu,useLayoutEffect:Gu,useMemo:Zu,useReducer:el,useRef:Wu,useState:function(){return el(er)},useDebugValue:Oa,useDeferredValue:function(e){var t=_e();return Ju(t,K.memoizedState,e)},useTransition:function(){var e=el(er)[0],t=_e().memoizedState;return[e,t]},useMutableSource:Bu,useSyncExternalStore:Au,useId:ec,unstable_isNewReconciler:!1},Gp={readContext:ze,useCallback:Xu,useContext:ze,useEffect:Fa,useImperativeHandle:qu,useInsertionEffect:Yu,useLayoutEffect:Gu,useMemo:Zu,useReducer:tl,useRef:Wu,useState:function(){return tl(er)},useDebugValue:Oa,useDeferredValue:function(e){var t=_e();return K===null?t.memoizedState=e:Ju(t,K.memoizedState,e)},useTransition:function(){var e=tl(er)[0],t=_e().memoizedState;return[e,t]},useMutableSource:Bu,useSyncExternalStore:Au,useId:ec,unstable_isNewReconciler:!1};function Ie(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ol(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ki={isMounted:function(e){return(e=e._reactInternals)?Ft(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),i=ft(e),l=Ye(r,i);l.payload=t,n!=null&&(l.callback=n),t=dt(e,l,i),t!==null&&(Fe(t,e,i,r),Fr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),i=ft(e),l=Ye(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=dt(e,l,i),t!==null&&(Fe(t,e,i,r),Fr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=ft(e),i=Ye(n,r);i.tag=2,t!=null&&(i.callback=t),t=dt(e,i,r),t!==null&&(Fe(t,e,r,n),Fr(t,e,r))}};function Vo(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Yn(n,r)||!Yn(i,l):!0}function ic(e,t,n){var r=!1,i=xt,l=t.contextType;return typeof l=="object"&&l!==null?l=ze(l):(i=ge(t)?_t:oe.current,r=t.contextTypes,l=(r=r!=null)?on(e,i):xt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ki,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Wo(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ki.enqueueReplaceState(t,t.state,null)}function Dl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},za(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=ze(l):(l=ge(t)?_t:oe.current,i.context=on(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ol(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ki.enqueueReplaceState(i,i.state,null),ii(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function dn(e,t){try{var n="",r=t;do n+=kd(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function nl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Bl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Kp=typeof WeakMap=="function"?WeakMap:Map;function lc(e,t,n){n=Ye(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ui||(ui=!0,Kl=r),Bl(e,t)},n}function ac(e,t,n){n=Ye(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Bl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Bl(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Yo(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Kp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=cf.bind(null,e,t,n),t.then(e,e))}function Go(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ko(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ye(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e)}var qp=Ze.ReactCurrentOwner,he=!1;function se(e,t,n,r){t.child=e===null?Tu(t,null,n,r):un(t,e.child,n,r)}function qo(e,t,n,r,i){n=n.render;var l=t.ref;return rn(t,i),r=Ra(e,t,n,r,l,i),n=Ta(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xe(e,t,i)):(A&&n&&ka(t),t.flags|=1,se(e,t,r,i),t.child)}function Xo(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!Va(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,oc(e,t,l,r,i)):(e=Ur(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Yn,n(o,r)&&e.ref===t.ref)return Xe(e,t,i)}return t.flags|=1,e=ht(l,r),e.ref=t.ref,e.return=t,t.child=e}function oc(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Yn(l,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,Xe(e,t,i)}return Al(e,t,n,r,i)}function sc(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(Zt,ve),ve|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(Zt,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,F(Zt,ve),ve|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,F(Zt,ve),ve|=r;return se(e,t,i,n),t.child}function uc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Al(e,t,n,r,i){var l=ge(n)?_t:oe.current;return l=on(t,l),rn(t,i),n=Ra(e,t,n,r,l,i),r=Ta(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xe(e,t,i)):(A&&r&&ka(t),t.flags|=1,se(e,t,n,i),t.child)}function Zo(e,t,n,r,i){if(ge(n)){var l=!0;Jr(t)}else l=!1;if(rn(t,i),t.stateNode===null)Br(e,t),ic(t,n,r),Dl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ze(u):(u=ge(n)?_t:oe.current,u=on(t,u));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||c!==u)&&Wo(t,o,r,u),tt=!1;var g=t.memoizedState;o.state=g,ii(t,r,o,i),c=t.memoizedState,s!==r||g!==c||me.current||tt?(typeof m=="function"&&(Ol(t,n,m,r),c=t.memoizedState),(s=tt||Vo(t,n,s,r,g,c,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Ou(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ie(t.type,s),o.props=u,h=t.pendingProps,g=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=ze(c):(c=ge(n)?_t:oe.current,c=on(t,c));var b=n.getDerivedStateFromProps;(m=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==h||g!==c)&&Wo(t,o,r,c),tt=!1,g=t.memoizedState,o.state=g,ii(t,r,o,i);var y=t.memoizedState;s!==h||g!==y||me.current||tt?(typeof b=="function"&&(Ol(t,n,b,r),y=t.memoizedState),(u=tt||Vo(t,n,u,r,g,y,c)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return $l(e,t,n,r,l,i)}function $l(e,t,n,r,i,l){uc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Oo(t,n,!1),Xe(e,t,l);r=t.stateNode,qp.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=un(t,e.child,null,l),t.child=un(t,null,s,l)):se(e,t,s,l),t.memoizedState=r.state,i&&Oo(t,n,!0),t.child}function cc(e){var t=e.stateNode;t.pendingContext?Fo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fo(e,t.context,!1),_a(e,t.containerInfo)}function Jo(e,t,n,r,i){return sn(),Sa(i),t.flags|=256,se(e,t,n,r),t.child}var Ul={dehydrated:null,treeContext:null,retryLane:0};function Hl(e){return{baseLanes:e,cachePool:null,transitions:null}}function dc(e,t,n){var r=t.pendingProps,i=$.current,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),F($,i&1),e===null)return Tl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ni(o,r,0,null),e=zt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Hl(n),t.memoizedState=Ul,e):Da(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Xp(e,t,o,r,s,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=ht(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=ht(s,l):(l=zt(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?Hl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=Ul,r}return l=e.child,e=l.sibling,r=ht(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Da(e,t){return t=Ni({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Er(e,t,n,r){return r!==null&&Sa(r),un(t,e.child,null,n),e=Da(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xp(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=nl(Error(k(422))),Er(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Ni({mode:"visible",children:r.children},i,0,null),l=zt(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&un(t,e.child,null,o),t.child.memoizedState=Hl(o),t.memoizedState=Ul,l);if(!(t.mode&1))return Er(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(k(419)),r=nl(l,r,void 0),Er(e,t,o,r)}if(s=(o&e.childLanes)!==0,he||s){if(r=J,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,qe(e,i),Fe(r,e,i,-1))}return Qa(),r=nl(Error(k(421))),Er(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=df.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,be=ct(i.nextSibling),we=t,A=!0,Re=null,e!==null&&(Ne[Ce++]=Ve,Ne[Ce++]=We,Ne[Ce++]=Lt,Ve=e.id,We=e.overflow,Lt=t),t=Da(t,r.children),t.flags|=4096,t)}function es(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fl(e.return,t,n)}function rl(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function pc(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(se(e,t,r.children,n),r=$.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&es(e,n,t);else if(e.tag===19)es(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F($,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&li(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),rl(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&li(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}rl(t,!0,n,null,l);break;case"together":rl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Br(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zp(e,t,n){switch(t.tag){case 3:cc(t),sn();break;case 5:Du(t);break;case 1:ge(t.type)&&Jr(t);break;case 4:_a(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;F(ni,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F($,$.current&1),t.flags|=128,null):n&t.child.childLanes?dc(e,t,n):(F($,$.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);F($,$.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return pc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F($,$.current),r)break;return null;case 22:case 23:return t.lanes=0,sc(e,t,n)}return Xe(e,t,n)}var fc,Ql,hc,mc;fc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ql=function(){};hc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Et(Ue.current);var l=null;switch(n){case"input":i=pl(e,i),r=pl(e,r),l=[];break;case"select":i=H({},i,{value:void 0}),r=H({},r,{value:void 0}),l=[];break;case"textarea":i=ml(e,i),r=ml(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xr)}xl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(An.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var c=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&s[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(l||(l=[]),l.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(l=l||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(An.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&D("scroll",e),l||s===c||(l=[])):(l=l||[]).push(u,c))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};mc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Sn(e,t){if(!A)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Jp(e,t,n){var r=t.pendingProps;switch(ja(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return ge(t.type)&&Zr(),le(t),null;case 3:return r=t.stateNode,cn(),B(me),B(oe),Ia(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Nr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Re!==null&&(Zl(Re),Re=null))),Ql(e,t),le(t),null;case 5:La(t);var i=Et(Zn.current);if(n=t.type,e!==null&&t.stateNode!=null)hc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return le(t),null}if(e=Et(Ue.current),Nr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ae]=t,r[qn]=l,e=(t.mode&1)!==0,n){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(i=0;i<zn.length;i++)D(zn[i],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":so(r,l),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},D("invalid",r);break;case"textarea":co(r,l),D("invalid",r)}xl(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Sr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Sr(r.textContent,s,e),i=["children",""+s]):An.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&D("scroll",r)}switch(n){case"input":gr(r),uo(r,l,!0);break;case"textarea":gr(r),po(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Xr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ae]=t,e[qn]=r,fc(e,t,!1,!1),t.stateNode=e;e:{switch(o=vl(n,r),n){case"dialog":D("cancel",e),D("close",e),i=r;break;case"iframe":case"object":case"embed":D("load",e),i=r;break;case"video":case"audio":for(i=0;i<zn.length;i++)D(zn[i],e);i=r;break;case"source":D("error",e),i=r;break;case"img":case"image":case"link":D("error",e),D("load",e),i=r;break;case"details":D("toggle",e),i=r;break;case"input":so(e,r),i=pl(e,r),D("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=H({},r,{value:void 0}),D("invalid",e);break;case"textarea":co(e,r),i=ml(e,r),D("invalid",e);break;default:i=r}xl(n,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var c=s[l];l==="style"?Ws(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Qs(e,c)):l==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&$n(e,c):typeof c=="number"&&$n(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(An.hasOwnProperty(l)?c!=null&&l==="onScroll"&&D("scroll",e):c!=null&&sa(e,l,c,o))}switch(n){case"input":gr(e),uo(e,r,!1);break;case"textarea":gr(e),po(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Jt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Jt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Xr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)mc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Et(Zn.current),Et(Ue.current),Nr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ae]=t,(l=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:Sr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Sr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ae]=t,t.stateNode=r}return le(t),null;case 13:if(B($),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&be!==null&&t.mode&1&&!(t.flags&128))Mu(),sn(),t.flags|=98560,l=!1;else if(l=Nr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(k(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(k(317));l[Ae]=t}else sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),l=!1}else Re!==null&&(Zl(Re),Re=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$.current&1?q===0&&(q=3):Qa())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return cn(),Ql(e,t),e===null&&Gn(t.stateNode.containerInfo),le(t),null;case 10:return Ea(t.type._context),le(t),null;case 17:return ge(t.type)&&Zr(),le(t),null;case 19:if(B($),l=t.memoizedState,l===null)return le(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)Sn(l,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=li(e),o!==null){for(t.flags|=128,Sn(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F($,$.current&1|2),t.child}e=e.sibling}l.tail!==null&&W()>pn&&(t.flags|=128,r=!0,Sn(l,!1),t.lanes=4194304)}else{if(!r)if(e=li(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Sn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!A)return le(t),null}else 2*W()-l.renderingStartTime>pn&&n!==1073741824&&(t.flags|=128,r=!0,Sn(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=W(),t.sibling=null,n=$.current,F($,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Ha(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function ef(e,t){switch(ja(t),t.tag){case 1:return ge(t.type)&&Zr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cn(),B(me),B(oe),Ia(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return La(t),null;case 13:if(B($),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B($),null;case 4:return cn(),null;case 10:return Ea(t.type._context),null;case 22:case 23:return Ha(),null;case 24:return null;default:return null}}var Pr=!1,ae=!1,tf=typeof WeakSet=="function"?WeakSet:Set,N=null;function Xt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function Vl(e,t,n){try{n()}catch(r){Q(e,t,r)}}var ts=!1;function nf(e,t){if(Pl=Gr,e=bu(),wa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,s=-1,c=-1,u=0,m=0,h=e,g=null;t:for(;;){for(var b;h!==n||i!==0&&h.nodeType!==3||(s=o+i),h!==l||r!==0&&h.nodeType!==3||(c=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(b=h.firstChild)!==null;)g=h,h=b;for(;;){if(h===e)break t;if(g===n&&++u===i&&(s=o),g===l&&++m===r&&(c=o),(b=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=b}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(zl={focusedElem:e,selectionRange:n},Gr=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,w=y.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ie(t.type,x),w);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){Q(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return y=ts,ts=!1,y}function On(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Vl(t,n,l)}i=i.next}while(i!==r)}}function ji(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function gc(e){var t=e.alternate;t!==null&&(e.alternate=null,gc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ae],delete t[qn],delete t[Il],delete t[Dp],delete t[Bp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xc(e){return e.tag===5||e.tag===3||e.tag===4}function ns(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xr));else if(r!==4&&(e=e.child,e!==null))for(Yl(e,t,n),e=e.sibling;e!==null;)Yl(e,t,n),e=e.sibling}function Gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gl(e,t,n),e=e.sibling;e!==null;)Gl(e,t,n),e=e.sibling}var te=null,Me=!1;function Je(e,t,n){for(n=n.child;n!==null;)vc(e,t,n),n=n.sibling}function vc(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(mi,n)}catch{}switch(n.tag){case 5:ae||Xt(n,t);case 6:var r=te,i=Me;te=null,Je(e,t,n),te=r,Me=i,te!==null&&(Me?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Me?(e=te,n=n.stateNode,e.nodeType===8?qi(e.parentNode,n):e.nodeType===1&&qi(e,n),Vn(e)):qi(te,n.stateNode));break;case 4:r=te,i=Me,te=n.stateNode.containerInfo,Me=!0,Je(e,t,n),te=r,Me=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Vl(n,t,o),i=i.next}while(i!==r)}Je(e,t,n);break;case 1:if(!ae&&(Xt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Q(n,t,s)}Je(e,t,n);break;case 21:Je(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,Je(e,t,n),ae=r):Je(e,t,n);break;default:Je(e,t,n)}}function rs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new tf),t.forEach(function(r){var i=pf.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:te=s.stateNode,Me=!1;break e;case 3:te=s.stateNode.containerInfo,Me=!0;break e;case 4:te=s.stateNode.containerInfo,Me=!0;break e}s=s.return}if(te===null)throw Error(k(160));vc(l,o,i),te=null,Me=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Q(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yc(t,e),t=t.sibling}function yc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),De(e),r&4){try{On(3,e,e.return),ji(3,e)}catch(x){Q(e,e.return,x)}try{On(5,e,e.return)}catch(x){Q(e,e.return,x)}}break;case 1:Le(t,e),De(e),r&512&&n!==null&&Xt(n,n.return);break;case 5:if(Le(t,e),De(e),r&512&&n!==null&&Xt(n,n.return),e.flags&32){var i=e.stateNode;try{$n(i,"")}catch(x){Q(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&$s(i,l),vl(s,o);var u=vl(s,l);for(o=0;o<c.length;o+=2){var m=c[o],h=c[o+1];m==="style"?Ws(i,h):m==="dangerouslySetInnerHTML"?Qs(i,h):m==="children"?$n(i,h):sa(i,m,h,u)}switch(s){case"input":fl(i,l);break;case"textarea":Us(i,l);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var b=l.value;b!=null?Jt(i,!!l.multiple,b,!1):g!==!!l.multiple&&(l.defaultValue!=null?Jt(i,!!l.multiple,l.defaultValue,!0):Jt(i,!!l.multiple,l.multiple?[]:"",!1))}i[qn]=l}catch(x){Q(e,e.return,x)}}break;case 6:if(Le(t,e),De(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(x){Q(e,e.return,x)}}break;case 3:if(Le(t,e),De(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vn(t.containerInfo)}catch(x){Q(e,e.return,x)}break;case 4:Le(t,e),De(e);break;case 13:Le(t,e),De(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||($a=W())),r&4&&rs(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(u=ae)||m,Le(t,e),ae=u):Le(t,e),De(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(N=e,m=e.child;m!==null;){for(h=N=m;N!==null;){switch(g=N,b=g.child,g.tag){case 0:case 11:case 14:case 15:On(4,g,g.return);break;case 1:Xt(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){Q(r,n,x)}}break;case 5:Xt(g,g.return);break;case 22:if(g.memoizedState!==null){ls(h);continue}}b!==null?(b.return=g,N=b):ls(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,u?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=h.stateNode,c=h.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Vs("display",o))}catch(x){Q(e,e.return,x)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){Q(e,e.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Le(t,e),De(e),r&4&&rs(e);break;case 21:break;default:Le(t,e),De(e)}}function De(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(xc(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($n(i,""),r.flags&=-33);var l=ns(e);Gl(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=ns(e);Yl(e,s,o);break;default:throw Error(k(161))}}catch(c){Q(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rf(e,t,n){N=e,bc(e)}function bc(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Pr;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||ae;s=Pr;var u=ae;if(Pr=o,(ae=c)&&!u)for(N=i;N!==null;)o=N,c=o.child,o.tag===22&&o.memoizedState!==null?as(i):c!==null?(c.return=o,N=c):as(i);for(;l!==null;)N=l,bc(l),l=l.sibling;N=i,Pr=s,ae=u}is(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,N=l):is(e)}}function is(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||ji(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ie(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Uo(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Uo(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Vn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ae||t.flags&512&&Wl(t)}catch(g){Q(t,t.return,g)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function ls(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function as(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ji(4,t)}catch(c){Q(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Q(t,i,c)}}var l=t.return;try{Wl(t)}catch(c){Q(t,l,c)}break;case 5:var o=t.return;try{Wl(t)}catch(c){Q(t,o,c)}}}catch(c){Q(t,t.return,c)}if(t===e){N=null;break}var s=t.sibling;if(s!==null){s.return=t.return,N=s;break}N=t.return}}var lf=Math.ceil,si=Ze.ReactCurrentDispatcher,Ba=Ze.ReactCurrentOwner,Pe=Ze.ReactCurrentBatchConfig,R=0,J=null,Y=null,ne=0,ve=0,Zt=yt(0),q=0,nr=null,Mt=0,Si=0,Aa=0,Dn=null,fe=null,$a=0,pn=1/0,He=null,ui=!1,Kl=null,pt=null,zr=!1,lt=null,ci=0,Bn=0,ql=null,Ar=-1,$r=0;function ue(){return R&6?W():Ar!==-1?Ar:Ar=W()}function ft(e){return e.mode&1?R&2&&ne!==0?ne&-ne:$p.transition!==null?($r===0&&($r=iu()),$r):(e=T,e!==0||(e=window.event,e=e===void 0?16:du(e.type)),e):1}function Fe(e,t,n,r){if(50<Bn)throw Bn=0,ql=null,Error(k(185));ar(e,n,r),(!(R&2)||e!==J)&&(e===J&&(!(R&2)&&(Si|=n),q===4&&rt(e,ne)),xe(e,r),n===1&&R===0&&!(t.mode&1)&&(pn=W()+500,bi&&bt()))}function xe(e,t){var n=e.callbackNode;$d(e,t);var r=Yr(e,e===J?ne:0);if(r===0)n!==null&&mo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&mo(n),t===1)e.tag===0?Ap(os.bind(null,e)):_u(os.bind(null,e)),Fp(function(){!(R&6)&&bt()}),n=null;else{switch(lu(r)){case 1:n=fa;break;case 4:n=nu;break;case 16:n=Wr;break;case 536870912:n=ru;break;default:n=Wr}n=Pc(n,wc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wc(e,t){if(Ar=-1,$r=0,R&6)throw Error(k(327));var n=e.callbackNode;if(ln()&&e.callbackNode!==n)return null;var r=Yr(e,e===J?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=di(e,r);else{t=r;var i=R;R|=2;var l=jc();(J!==e||ne!==t)&&(He=null,pn=W()+500,Pt(e,t));do try{sf();break}catch(s){kc(e,s)}while(!0);Ca(),si.current=l,R=i,Y!==null?t=0:(J=null,ne=0,t=q)}if(t!==0){if(t===2&&(i=jl(e),i!==0&&(r=i,t=Xl(e,i))),t===1)throw n=nr,Pt(e,0),rt(e,r),xe(e,W()),n;if(t===6)rt(e,r);else{if(i=e.current.alternate,!(r&30)&&!af(i)&&(t=di(e,r),t===2&&(l=jl(e),l!==0&&(r=l,t=Xl(e,l))),t===1))throw n=nr,Pt(e,0),rt(e,r),xe(e,W()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:St(e,fe,He);break;case 3:if(rt(e,r),(r&130023424)===r&&(t=$a+500-W(),10<t)){if(Yr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ll(St.bind(null,e,fe,He),t);break}St(e,fe,He);break;case 4:if(rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Te(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=W()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lf(r/1960))-r,10<r){e.timeoutHandle=Ll(St.bind(null,e,fe,He),r);break}St(e,fe,He);break;case 5:St(e,fe,He);break;default:throw Error(k(329))}}}return xe(e,W()),e.callbackNode===n?wc.bind(null,e):null}function Xl(e,t){var n=Dn;return e.current.memoizedState.isDehydrated&&(Pt(e,t).flags|=256),e=di(e,t),e!==2&&(t=fe,fe=n,t!==null&&Zl(t)),e}function Zl(e){fe===null?fe=e:fe.push.apply(fe,e)}function af(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Oe(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rt(e,t){for(t&=~Aa,t&=~Si,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Te(t),r=1<<n;e[n]=-1,t&=~r}}function os(e){if(R&6)throw Error(k(327));ln();var t=Yr(e,0);if(!(t&1))return xe(e,W()),null;var n=di(e,t);if(e.tag!==0&&n===2){var r=jl(e);r!==0&&(t=r,n=Xl(e,r))}if(n===1)throw n=nr,Pt(e,0),rt(e,t),xe(e,W()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,St(e,fe,He),xe(e,W()),null}function Ua(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(pn=W()+500,bi&&bt())}}function Rt(e){lt!==null&&lt.tag===0&&!(R&6)&&ln();var t=R;R|=1;var n=Pe.transition,r=T;try{if(Pe.transition=null,T=1,e)return e()}finally{T=r,Pe.transition=n,R=t,!(R&6)&&bt()}}function Ha(){ve=Zt.current,B(Zt)}function Pt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Tp(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(ja(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zr();break;case 3:cn(),B(me),B(oe),Ia();break;case 5:La(r);break;case 4:cn();break;case 13:B($);break;case 19:B($);break;case 10:Ea(r.type._context);break;case 22:case 23:Ha()}n=n.return}if(J=e,Y=e=ht(e.current,null),ne=ve=t,q=0,nr=null,Aa=Si=Mt=0,fe=Dn=null,Ct!==null){for(t=0;t<Ct.length;t++)if(n=Ct[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}Ct=null}return e}function kc(e,t){do{var n=Y;try{if(Ca(),Or.current=oi,ai){for(var r=U.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ai=!1}if(It=0,Z=K=U=null,Fn=!1,Jn=0,Ba.current=null,n===null||n.return===null){q=1,nr=t,Y=null;break}e:{var l=e,o=n.return,s=n,c=t;if(t=ne,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,m=s,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var b=Go(o);if(b!==null){b.flags&=-257,Ko(b,o,s,l,t),b.mode&1&&Yo(l,u,t),t=b,c=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(c),t.updateQueue=x}else y.add(c);break e}else{if(!(t&1)){Yo(l,u,t),Qa();break e}c=Error(k(426))}}else if(A&&s.mode&1){var w=Go(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Ko(w,o,s,l,t),Sa(dn(c,s));break e}}l=c=dn(c,s),q!==4&&(q=2),Dn===null?Dn=[l]:Dn.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=lc(l,c,t);$o(l,p);break e;case 1:s=c;var d=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(pt===null||!pt.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var v=ac(l,s,t);$o(l,v);break e}}l=l.return}while(l!==null)}Nc(n)}catch(S){t=S,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function jc(){var e=si.current;return si.current=oi,e===null?oi:e}function Qa(){(q===0||q===3||q===2)&&(q=4),J===null||!(Mt&268435455)&&!(Si&268435455)||rt(J,ne)}function di(e,t){var n=R;R|=2;var r=jc();(J!==e||ne!==t)&&(He=null,Pt(e,t));do try{of();break}catch(i){kc(e,i)}while(!0);if(Ca(),R=n,si.current=r,Y!==null)throw Error(k(261));return J=null,ne=0,q}function of(){for(;Y!==null;)Sc(Y)}function sf(){for(;Y!==null&&!Id();)Sc(Y)}function Sc(e){var t=Ec(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?Nc(e):Y=t,Ba.current=null}function Nc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ef(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,Y=null;return}}else if(n=Jp(n,t,ve),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);q===0&&(q=5)}function St(e,t,n){var r=T,i=Pe.transition;try{Pe.transition=null,T=1,uf(e,t,n,r)}finally{Pe.transition=i,T=r}return null}function uf(e,t,n,r){do ln();while(lt!==null);if(R&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Ud(e,l),e===J&&(Y=J=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zr||(zr=!0,Pc(Wr,function(){return ln(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Pe.transition,Pe.transition=null;var o=T;T=1;var s=R;R|=4,Ba.current=null,nf(e,n),yc(n,e),Pp(zl),Gr=!!Pl,zl=Pl=null,e.current=n,rf(n),Md(),R=s,T=o,Pe.transition=l}else e.current=n;if(zr&&(zr=!1,lt=e,ci=i),l=e.pendingLanes,l===0&&(pt=null),Fd(n.stateNode),xe(e,W()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ui)throw ui=!1,e=Kl,Kl=null,e;return ci&1&&e.tag!==0&&ln(),l=e.pendingLanes,l&1?e===ql?Bn++:(Bn=0,ql=e):Bn=0,bt(),null}function ln(){if(lt!==null){var e=lu(ci),t=Pe.transition,n=T;try{if(Pe.transition=null,T=16>e?16:e,lt===null)var r=!1;else{if(e=lt,lt=null,ci=0,R&6)throw Error(k(331));var i=R;for(R|=4,N=e.current;N!==null;){var l=N,o=l.child;if(N.flags&16){var s=l.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(N=u;N!==null;){var m=N;switch(m.tag){case 0:case 11:case 15:On(8,m,l)}var h=m.child;if(h!==null)h.return=m,N=h;else for(;N!==null;){m=N;var g=m.sibling,b=m.return;if(gc(m),m===u){N=null;break}if(g!==null){g.return=b,N=g;break}N=b}}}var y=l.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var w=x.sibling;x.sibling=null,x=w}while(x!==null)}}N=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,N=o;else e:for(;N!==null;){if(l=N,l.flags&2048)switch(l.tag){case 0:case 11:case 15:On(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,N=p;break e}N=l.return}}var d=e.current;for(N=d;N!==null;){o=N;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,N=f;else e:for(o=d;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ji(9,s)}}catch(S){Q(s,s.return,S)}if(s===o){N=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,N=v;break e}N=s.return}}if(R=i,bt(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(mi,e)}catch{}r=!0}return r}finally{T=n,Pe.transition=t}}return!1}function ss(e,t,n){t=dn(n,t),t=lc(e,t,1),e=dt(e,t,1),t=ue(),e!==null&&(ar(e,1,t),xe(e,t))}function Q(e,t,n){if(e.tag===3)ss(e,e,n);else for(;t!==null;){if(t.tag===3){ss(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=dn(n,e),e=ac(t,e,1),t=dt(t,e,1),e=ue(),t!==null&&(ar(t,1,e),xe(t,e));break}}t=t.return}}function cf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(ne&n)===n&&(q===4||q===3&&(ne&130023424)===ne&&500>W()-$a?Pt(e,0):Aa|=n),xe(e,t)}function Cc(e,t){t===0&&(e.mode&1?(t=yr,yr<<=1,!(yr&130023424)&&(yr=4194304)):t=1);var n=ue();e=qe(e,t),e!==null&&(ar(e,t,n),xe(e,n))}function df(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cc(e,n)}function pf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Cc(e,n)}var Ec;Ec=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,Zp(e,t,n);he=!!(e.flags&131072)}else he=!1,A&&t.flags&1048576&&Lu(t,ti,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Br(e,t),e=t.pendingProps;var i=on(t,oe.current);rn(t,n),i=Ra(null,t,r,e,i,n);var l=Ta();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(l=!0,Jr(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,za(t),i.updater=ki,t.stateNode=i,i._reactInternals=t,Dl(t,r,e,n),t=$l(null,t,r,!0,l,n)):(t.tag=0,A&&l&&ka(t),se(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Br(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=hf(r),e=Ie(r,e),i){case 0:t=Al(null,t,r,e,n);break e;case 1:t=Zo(null,t,r,e,n);break e;case 11:t=qo(null,t,r,e,n);break e;case 14:t=Xo(null,t,r,Ie(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ie(r,i),Al(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ie(r,i),Zo(e,t,r,i,n);case 3:e:{if(cc(t),e===null)throw Error(k(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Ou(e,t),ii(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=dn(Error(k(423)),t),t=Jo(e,t,r,n,i);break e}else if(r!==i){i=dn(Error(k(424)),t),t=Jo(e,t,r,n,i);break e}else for(be=ct(t.stateNode.containerInfo.firstChild),we=t,A=!0,Re=null,n=Tu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sn(),r===i){t=Xe(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return Du(t),e===null&&Tl(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,_l(r,i)?o=null:l!==null&&_l(r,l)&&(t.flags|=32),uc(e,t),se(e,t,o,n),t.child;case 6:return e===null&&Tl(t),null;case 13:return dc(e,t,n);case 4:return _a(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=un(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ie(r,i),qo(e,t,r,i,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,F(ni,r._currentValue),r._currentValue=o,l!==null)if(Oe(l.value,o)){if(l.children===i.children&&!me.current){t=Xe(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(l.tag===1){c=Ye(-1,n&-n),c.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?c.next=c:(c.next=m.next,m.next=c),u.pending=c}}l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Fl(l.return,n,t),s.lanes|=n;break}c=c.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(k(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Fl(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}se(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,rn(t,n),i=ze(i),r=r(i),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,i=Ie(r,t.pendingProps),i=Ie(r.type,i),Xo(e,t,r,i,n);case 15:return oc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ie(r,i),Br(e,t),t.tag=1,ge(r)?(e=!0,Jr(t)):e=!1,rn(t,n),ic(t,r,i),Dl(t,r,i,n),$l(null,t,r,!0,e,n);case 19:return pc(e,t,n);case 22:return sc(e,t,n)}throw Error(k(156,t.tag))};function Pc(e,t){return tu(e,t)}function ff(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new ff(e,t,n,r)}function Va(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hf(e){if(typeof e=="function")return Va(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ca)return 11;if(e===da)return 14}return 2}function ht(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ur(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")Va(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ut:return zt(n.children,i,l,t);case ua:o=8,i|=8;break;case sl:return e=Ee(12,n,t,i|2),e.elementType=sl,e.lanes=l,e;case ul:return e=Ee(13,n,t,i),e.elementType=ul,e.lanes=l,e;case cl:return e=Ee(19,n,t,i),e.elementType=cl,e.lanes=l,e;case Ds:return Ni(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fs:o=10;break e;case Os:o=9;break e;case ca:o=11;break e;case da:o=14;break e;case et:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ee(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function zt(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function Ni(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=Ds,e.lanes=n,e.stateNode={isHidden:!1},e}function il(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function ll(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function mf(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bi(0),this.expirationTimes=Bi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wa(e,t,n,r,i,l,o,s,c){return e=new mf(e,t,n,s,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ee(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},za(l),e}function gf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$t,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function zc(e){if(!e)return xt;e=e._reactInternals;e:{if(Ft(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(ge(n))return zu(e,n,t)}return t}function _c(e,t,n,r,i,l,o,s,c){return e=Wa(n,r,!0,e,i,l,o,s,c),e.context=zc(null),n=e.current,r=ue(),i=ft(n),l=Ye(r,i),l.callback=t??null,dt(n,l,i),e.current.lanes=i,ar(e,i,r),xe(e,r),e}function Ci(e,t,n,r){var i=t.current,l=ue(),o=ft(i);return n=zc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ye(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dt(i,t,o),e!==null&&(Fe(e,i,o,l),Fr(e,i,o)),o}function pi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function us(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ya(e,t){us(e,t),(e=e.alternate)&&us(e,t)}function xf(){return null}var Lc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ga(e){this._internalRoot=e}Ei.prototype.render=Ga.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Ci(e,t,null,null)};Ei.prototype.unmount=Ga.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rt(function(){Ci(null,e,null,null)}),t[Ke]=null}};function Ei(e){this._internalRoot=e}Ei.prototype.unstable_scheduleHydration=function(e){if(e){var t=su();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nt.length&&t!==0&&t<nt[n].priority;n++);nt.splice(n,0,e),n===0&&cu(e)}};function Ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cs(){}function vf(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var u=pi(o);l.call(u)}}var o=_c(t,r,e,0,null,!1,!1,"",cs);return e._reactRootContainer=o,e[Ke]=o.current,Gn(e.nodeType===8?e.parentNode:e),Rt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=pi(c);s.call(u)}}var c=Wa(e,0,!1,null,null,!1,!1,"",cs);return e._reactRootContainer=c,e[Ke]=c.current,Gn(e.nodeType===8?e.parentNode:e),Rt(function(){Ci(t,c,n,r)}),c}function zi(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var c=pi(o);s.call(c)}}Ci(t,o,e,i)}else o=vf(n,t,e,i,r);return pi(o)}au=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pn(t.pendingLanes);n!==0&&(ha(t,n|1),xe(t,W()),!(R&6)&&(pn=W()+500,bt()))}break;case 13:Rt(function(){var r=qe(e,1);if(r!==null){var i=ue();Fe(r,e,1,i)}}),Ya(e,1)}};ma=function(e){if(e.tag===13){var t=qe(e,134217728);if(t!==null){var n=ue();Fe(t,e,134217728,n)}Ya(e,134217728)}};ou=function(e){if(e.tag===13){var t=ft(e),n=qe(e,t);if(n!==null){var r=ue();Fe(n,e,t,r)}Ya(e,t)}};su=function(){return T};uu=function(e,t){var n=T;try{return T=e,t()}finally{T=n}};bl=function(e,t,n){switch(t){case"input":if(fl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=yi(r);if(!i)throw Error(k(90));As(r),fl(r,i)}}}break;case"textarea":Us(e,n);break;case"select":t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}};Ks=Ua;qs=Rt;var yf={usingClientEntryPoint:!1,Events:[sr,Wt,yi,Ys,Gs,Ua]},Nn={findFiberByHostInstance:Nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bf={bundleType:Nn.bundleType,version:Nn.version,rendererPackageName:Nn.rendererPackageName,rendererConfig:Nn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Js(e),e===null?null:e.stateNode},findFiberByHostInstance:Nn.findFiberByHostInstance||xf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_r.isDisabled&&_r.supportsFiber)try{mi=_r.inject(bf),$e=_r}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yf;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ka(t))throw Error(k(200));return gf(e,t,null,n)};je.createRoot=function(e,t){if(!Ka(e))throw Error(k(299));var n=!1,r="",i=Lc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Wa(e,1,!1,null,null,n,!1,r,i),e[Ke]=t.current,Gn(e.nodeType===8?e.parentNode:e),new Ga(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Js(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return Rt(e)};je.hydrate=function(e,t,n){if(!Pi(t))throw Error(k(200));return zi(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!Ka(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=Lc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=_c(t,null,e,1,n??null,i,!1,l,o),e[Ke]=t.current,Gn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ei(t)};je.render=function(e,t,n){if(!Pi(t))throw Error(k(200));return zi(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!Pi(e))throw Error(k(40));return e._reactRootContainer?(Rt(function(){zi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};je.unstable_batchedUpdates=Ua;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Pi(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return zi(e,t,n,!1,r)};je.version="18.3.1-next-f1338f8080-20240426";function Ic(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ic)}catch(e){console.error(e)}}Ic(),Is.exports=je;var wf=Is.exports,Mc,ds=wf;Mc=ds.createRoot,ds.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rr(){return rr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rr.apply(this,arguments)}var at;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(at||(at={}));const ps="popstate";function kf(e){e===void 0&&(e={});function t(i,l){let{pathname:o="/",search:s="",hash:c=""}=Ot(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Jl("",{pathname:o,search:s,hash:c},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(i,l){let o=i.document.querySelector("base"),s="";if(o&&o.getAttribute("href")){let c=i.location.href,u=c.indexOf("#");s=u===-1?c:c.slice(0,u)}return s+"#"+(typeof l=="string"?l:fi(l))}function r(i,l){qa(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return Sf(t,n,r,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function qa(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function jf(){return Math.random().toString(36).substr(2,8)}function fs(e,t){return{usr:e.state,key:e.key,idx:t}}function Jl(e,t,n,r){return n===void 0&&(n=null),rr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ot(t):t,{state:n,key:t&&t.key||r||jf()})}function fi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ot(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Sf(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,s=at.Pop,c=null,u=m();u==null&&(u=0,o.replaceState(rr({},o.state,{idx:u}),""));function m(){return(o.state||{idx:null}).idx}function h(){s=at.Pop;let w=m(),p=w==null?null:w-u;u=w,c&&c({action:s,location:x.location,delta:p})}function g(w,p){s=at.Push;let d=Jl(x.location,w,p);n&&n(d,w),u=m()+1;let f=fs(d,u),v=x.createHref(d);try{o.pushState(f,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(v)}l&&c&&c({action:s,location:x.location,delta:1})}function b(w,p){s=at.Replace;let d=Jl(x.location,w,p);n&&n(d,w),u=m();let f=fs(d,u),v=x.createHref(d);o.replaceState(f,"",v),l&&c&&c({action:s,location:x.location,delta:0})}function y(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof w=="string"?w:fi(w);return d=d.replace(/ $/,"%20"),G(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let x={get action(){return s},get location(){return e(i,o)},listen(w){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(ps,h),c=w,()=>{i.removeEventListener(ps,h),c=null}},createHref(w){return t(i,w)},createURL:y,encodeLocation(w){let p=y(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:b,go(w){return o.go(w)}};return x}var hs;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(hs||(hs={}));function Nf(e,t,n){return n===void 0&&(n="/"),Cf(e,t,n)}function Cf(e,t,n,r){let i=typeof t=="string"?Ot(t):t,l=Xa(i.pathname||"/",n);if(l==null)return null;let o=Rc(e);Ef(o);let s=null;for(let c=0;s==null&&c<o.length;++c){let u=Bf(l);s=Ff(o[c],u)}return s}function Rc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(l,o,s)=>{let c={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};c.relativePath.startsWith("/")&&(G(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=mt([r,c.relativePath]),m=n.concat(c);l.children&&l.children.length>0&&(G(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Rc(l.children,t,m,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:Rf(u,l.index),routesMeta:m})};return e.forEach((l,o)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))i(l,o);else for(let c of Tc(l.path))i(l,o,c)}),t}function Tc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=Tc(r.join("/")),s=[];return s.push(...o.map(c=>c===""?l:[l,c].join("/"))),i&&s.push(...o),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function Ef(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Tf(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Pf=/^:[\w-]+$/,zf=3,_f=2,Lf=1,If=10,Mf=-2,ms=e=>e==="*";function Rf(e,t){let n=e.split("/"),r=n.length;return n.some(ms)&&(r+=Mf),t&&(r+=_f),n.filter(i=>!ms(i)).reduce((i,l)=>i+(Pf.test(l)?zf:l===""?Lf:If),r)}function Tf(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Ff(e,t,n){let{routesMeta:r}=e,i={},l="/",o=[];for(let s=0;s<r.length;++s){let c=r[s],u=s===r.length-1,m=l==="/"?t:t.slice(l.length)||"/",h=Of({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},m),g=c.route;if(!h)return null;Object.assign(i,h.params),o.push({params:i,pathname:mt([l,h.pathname]),pathnameBase:Hf(mt([l,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(l=mt([l,h.pathnameBase]))}return o}function Of(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Df(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,m,h)=>{let{paramName:g,isOptional:b}=m;if(g==="*"){let x=s[h]||"";o=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}const y=s[h];return b&&!y?u[g]=void 0:u[g]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:o,pattern:e}}function Df(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),qa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,c)=>(r.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Bf(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return qa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Xa(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Af(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ot(e):e;return{pathname:n?n.startsWith("/")?n:$f(n,t):t,search:Qf(r),hash:Vf(i)}}function $f(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function al(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Uf(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Fc(e,t){let n=Uf(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Oc(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ot(e):(i=rr({},e),G(!i.pathname||!i.pathname.includes("?"),al("?","pathname","search",i)),G(!i.pathname||!i.pathname.includes("#"),al("#","pathname","hash",i)),G(!i.search||!i.search.includes("#"),al("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,s;if(o==null)s=n;else{let h=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}s=h>=0?t[h]:"/"}let c=Af(i,s),u=o&&o!=="/"&&o.endsWith("/"),m=(l||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||m)&&(c.pathname+="/"),c}const mt=e=>e.join("/").replace(/\/\/+/g,"/"),Hf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Qf=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Vf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Wf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Dc=["post","put","patch","delete"];new Set(Dc);const Yf=["get",...Dc];new Set(Yf);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ir.apply(this,arguments)}const Za=j.createContext(null),Gf=j.createContext(null),Dt=j.createContext(null),_i=j.createContext(null),Bt=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Bc=j.createContext(null);function Kf(e,t){let{relative:n}=t===void 0?{}:t;cr()||G(!1);let{basename:r,navigator:i}=j.useContext(Dt),{hash:l,pathname:o,search:s}=$c(e,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:mt([r,o])),i.createHref({pathname:c,search:s,hash:l})}function cr(){return j.useContext(_i)!=null}function dr(){return cr()||G(!1),j.useContext(_i).location}function Ac(e){j.useContext(Dt).static||j.useLayoutEffect(e)}function qf(){let{isDataRoute:e}=j.useContext(Bt);return e?uh():Xf()}function Xf(){cr()||G(!1);let e=j.useContext(Za),{basename:t,future:n,navigator:r}=j.useContext(Dt),{matches:i}=j.useContext(Bt),{pathname:l}=dr(),o=JSON.stringify(Fc(i,n.v7_relativeSplatPath)),s=j.useRef(!1);return Ac(()=>{s.current=!0}),j.useCallback(function(u,m){if(m===void 0&&(m={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let h=Oc(u,JSON.parse(o),l,m.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:mt([t,h.pathname])),(m.replace?r.replace:r.push)(h,m.state,m)},[t,r,o,l,e])}function $c(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=j.useContext(Dt),{matches:i}=j.useContext(Bt),{pathname:l}=dr(),o=JSON.stringify(Fc(i,r.v7_relativeSplatPath));return j.useMemo(()=>Oc(e,JSON.parse(o),l,n==="path"),[e,o,l,n])}function Zf(e,t){return Jf(e,t)}function Jf(e,t,n,r){cr()||G(!1);let{navigator:i}=j.useContext(Dt),{matches:l}=j.useContext(Bt),o=l[l.length-1],s=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=dr(),m;if(t){var h;let w=typeof t=="string"?Ot(t):t;c==="/"||(h=w.pathname)!=null&&h.startsWith(c)||G(!1),m=w}else m=u;let g=m.pathname||"/",b=g;if(c!=="/"){let w=c.replace(/^\//,"").split("/");b="/"+g.replace(/^\//,"").split("/").slice(w.length).join("/")}let y=Nf(e,{pathname:b}),x=ih(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},s,w.params),pathname:mt([c,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:mt([c,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),l,n,r);return t&&x?j.createElement(_i.Provider,{value:{location:ir({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:at.Pop}},x):x}function eh(){let e=sh(),t=Wf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:i},n):null,null)}const th=j.createElement(eh,null);class nh extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(Bt.Provider,{value:this.props.routeContext},j.createElement(Bc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rh(e){let{routeContext:t,match:n,children:r}=e,i=j.useContext(Za);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Bt.Provider,{value:t},r)}function ih(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let m=o.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id])!==void 0);m>=0||G(!1),o=o.slice(0,Math.min(o.length,m+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<o.length;m++){let h=o[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=m),h.route.id){let{loaderData:g,errors:b}=n,y=h.route.loader&&g[h.route.id]===void 0&&(!b||b[h.route.id]===void 0);if(h.route.lazy||y){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((m,h,g)=>{let b,y=!1,x=null,w=null;n&&(b=s&&h.route.id?s[h.route.id]:void 0,x=h.route.errorElement||th,c&&(u<0&&g===0?(ch("route-fallback"),y=!0,w=null):u===g&&(y=!0,w=h.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,g+1)),d=()=>{let f;return b?f=x:y?f=w:h.route.Component?f=j.createElement(h.route.Component,null):h.route.element?f=h.route.element:f=m,j.createElement(rh,{match:h,routeContext:{outlet:m,matches:p,isDataRoute:n!=null},children:f})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?j.createElement(nh,{location:n.location,revalidation:n.revalidation,component:x,error:b,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var Uc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Uc||{}),Hc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Hc||{});function lh(e){let t=j.useContext(Za);return t||G(!1),t}function ah(e){let t=j.useContext(Gf);return t||G(!1),t}function oh(e){let t=j.useContext(Bt);return t||G(!1),t}function Qc(e){let t=oh(),n=t.matches[t.matches.length-1];return n.route.id||G(!1),n.route.id}function sh(){var e;let t=j.useContext(Bc),n=ah(),r=Qc();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function uh(){let{router:e}=lh(Uc.UseNavigateStable),t=Qc(Hc.UseNavigateStable),n=j.useRef(!1);return Ac(()=>{n.current=!0}),j.useCallback(function(i,l){l===void 0&&(l={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ir({fromRouteId:t},l)))},[e,t])}const gs={};function ch(e,t,n){gs[e]||(gs[e]=!0)}function dh(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function _n(e){G(!1)}function ph(e){let{basename:t="/",children:n=null,location:r,navigationType:i=at.Pop,navigator:l,static:o=!1,future:s}=e;cr()&&G(!1);let c=t.replace(/^\/*/,"/"),u=j.useMemo(()=>({basename:c,navigator:l,static:o,future:ir({v7_relativeSplatPath:!1},s)}),[c,s,l,o]);typeof r=="string"&&(r=Ot(r));let{pathname:m="/",search:h="",hash:g="",state:b=null,key:y="default"}=r,x=j.useMemo(()=>{let w=Xa(m,c);return w==null?null:{location:{pathname:w,search:h,hash:g,state:b,key:y},navigationType:i}},[c,m,h,g,b,y,i]);return x==null?null:j.createElement(Dt.Provider,{value:u},j.createElement(_i.Provider,{children:n,value:x}))}function fh(e){let{children:t,location:n}=e;return Zf(ea(t),n)}new Promise(()=>{});function ea(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,i)=>{if(!j.isValidElement(r))return;let l=[...t,i];if(r.type===j.Fragment){n.push.apply(n,ea(r.props.children,l));return}r.type!==_n&&G(!1),!r.props.index||!r.props.children||G(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ea(r.props.children,l)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ta(){return ta=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ta.apply(this,arguments)}function hh(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,l;for(l=0;l<r.length;l++)i=r[l],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function mh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function gh(e,t){return e.button===0&&(!t||t==="_self")&&!mh(e)}const xh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],vh="6";try{window.__reactRouterVersion=vh}catch{}const yh="startTransition",xs=ud[yh];function bh(e){let{basename:t,children:n,future:r,window:i}=e,l=j.useRef();l.current==null&&(l.current=kf({window:i,v5Compat:!0}));let o=l.current,[s,c]=j.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},m=j.useCallback(h=>{u&&xs?xs(()=>c(h)):c(h)},[c,u]);return j.useLayoutEffect(()=>o.listen(m),[o,m]),j.useEffect(()=>dh(r),[r]),j.createElement(ph,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const wh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ye=j.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:l,replace:o,state:s,target:c,to:u,preventScrollReset:m,viewTransition:h}=t,g=hh(t,xh),{basename:b}=j.useContext(Dt),y,x=!1;if(typeof u=="string"&&kh.test(u)&&(y=u,wh))try{let f=new URL(window.location.href),v=u.startsWith("//")?new URL(f.protocol+u):new URL(u),S=Xa(v.pathname,b);v.origin===f.origin&&S!=null?u=S+v.search+v.hash:x=!0}catch{}let w=Kf(u,{relative:i}),p=jh(u,{replace:o,state:s,target:c,preventScrollReset:m,relative:i,viewTransition:h});function d(f){r&&r(f),f.defaultPrevented||p(f)}return j.createElement("a",ta({},g,{href:y||w,onClick:x||l?r:d,ref:n,target:c}))});var vs;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(vs||(vs={}));var ys;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ys||(ys={}));function jh(e,t){let{target:n,replace:r,state:i,preventScrollReset:l,relative:o,viewTransition:s}=t===void 0?{}:t,c=qf(),u=dr(),m=$c(e,{relative:o});return j.useCallback(h=>{if(gh(h,n)){h.preventDefault();let g=r!==void 0?r:fi(u)===fi(m);c(e,{replace:g,state:i,preventScrollReset:l,relative:o,viewTransition:s})}},[u,c,m,r,i,n,e,l,o,s])}const Ja=()=>{const[e,t]=j.useState(!1),[n,r]=j.useState(!1);j.useEffect(()=>{const o=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]),j.useEffect(()=>{n?document.body.style.overflow="hidden":document.body.style.overflow="unset";const o=s=>{s.key==="Escape"&&n&&r(!1)};return document.addEventListener("keydown",o),()=>{document.body.style.overflow="unset",document.removeEventListener("keydown",o)}},[n]);const i=()=>{r(!n)},l=()=>{r(!1)};return a.jsxs(a.Fragment,{children:[a.jsx("header",{id:"header",className:`modern-header ${e?"scrolled":""}`,children:a.jsx("div",{className:"container",children:a.jsxs("nav",{className:"navbar-modern",style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"nowrap"},children:[a.jsx("div",{className:"navbar-brand",style:{flex:"0 0 auto"},children:a.jsx(ye,{to:"/",className:"logo-link",children:a.jsx("img",{src:"./images/logo.png",alt:"Qik.ai Logo",className:"logo-img"})})}),a.jsx("div",{className:"navbar-nav desktop-nav",style:{flex:"1 1 auto",display:"flex",justifyContent:"center"},children:a.jsxs("div",{className:"nav-links",style:{display:"flex",gap:"30px"},children:[a.jsx(ye,{to:"/",className:"nav-link",children:"Home"}),a.jsx(ye,{to:"/about",className:"nav-link",children:"About"}),a.jsx(ye,{to:"/contact",className:"nav-link",children:"Contact"})]})}),a.jsx("div",{className:"header-contact",style:{flex:"0 0 auto",display:"flex",alignItems:"center",justifyContent:"flex-end"},children:a.jsxs("a",{href:"mailto:hello@qik.ai",className:"contact-link",style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"})}),a.jsx("span",{children:"hello@qik.ai"})]})}),a.jsx("button",{className:"mobile-menu-button",onClick:i,"aria-label":"Toggle navigation menu","aria-expanded":n,children:a.jsxs("div",{className:`hamburger-icon ${n?"active":""}`,children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]})})]})})}),n&&a.jsx("div",{className:"mobile-nav-overlay",onClick:l,children:a.jsxs("div",{className:"mobile-nav-menu",onClick:o=>o.stopPropagation(),children:[a.jsxs("div",{className:"mobile-nav-header",children:[a.jsx("img",{src:"./images/logo.png",alt:"Qik.ai",className:"mobile-nav-logo"}),a.jsx("button",{className:"mobile-nav-close",onClick:l,"aria-label":"Close navigation menu",children:a.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),a.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),a.jsxs("nav",{className:"mobile-nav-links",children:[a.jsxs(ye,{to:"/",className:"mobile-nav-link",onClick:l,children:[a.jsx("span",{className:"nav-link-icon",children:"🏠"}),a.jsx("span",{className:"nav-link-text",children:"Home"})]}),a.jsxs(ye,{to:"/about",className:"mobile-nav-link",onClick:l,children:[a.jsx("span",{className:"nav-link-icon",children:"ℹ️"}),a.jsx("span",{className:"nav-link-text",children:"About"})]}),a.jsxs(ye,{to:"/contact",className:"mobile-nav-link",onClick:l,children:[a.jsx("span",{className:"nav-link-icon",children:"📧"}),a.jsx("span",{className:"nav-link-text",children:"Contact"})]})]}),a.jsx("div",{className:"mobile-nav-footer",children:a.jsxs("a",{href:"mailto:hello@qik.ai",className:"mobile-contact-btn",children:[a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"})}),"hello@qik.ai"]})})]})})]})},eo=()=>a.jsxs("footer",{id:"footer",className:"animated animatedFadeInDown fadeInDown",children:[a.jsx("div",{className:"footer-top",children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"col-md-4",children:[a.jsx("h4",{children:a.jsx("a",{href:"/",children:a.jsx("img",{src:"./images/logo.png",alt:"Qik.ai Logo",style:{width:"80px",height:"auto"}})})}),a.jsx("p",{children:"Supercharge your business with 50+ integrated business applications. With Qik Cloud Stack, you can speedup, automate and bring transparency to your business activities. Experience the power of cloud to increase your business productivity by 20%."})]}),a.jsxs("div",{className:"col-md-4 text-center-uvs",children:[a.jsx("h4",{children:"Contact"}),a.jsx("ul",{style:{listStyleType:"none",padding:0,margin:0,marginTop:"20px"},children:a.jsx("li",{style:{marginBottom:"13px"},children:"Email: hello@qik.ai"})})]}),a.jsxs("div",{className:"col-md-4 text-right-uvs",children:[a.jsx("h4",{children:"Always reachable on"}),a.jsxs("div",{className:"social-links",style:{marginTop:"20px"},children:[a.jsx("button",{style:{backgroundColor:"transparent",borderColor:"transparent",outlineColor:"transparent",outline:"none"},children:a.jsx("img",{src:"./images/linkedin.svg",alt:"Business solution icon"})}),a.jsx("button",{style:{backgroundColor:"transparent",borderColor:"transparent",outlineColor:"transparent",outline:"none"},children:a.jsx("img",{src:"./images/gmail.svg",alt:"Business solution icon",style:{marginLeft:"20px"}})})]})]})]})})}),a.jsx("div",{className:"containervs",children:a.jsx("div",{className:"copyright",children:a.jsxs("p",{style:{textAlign:"center"},children:["All rights reserved © 2025",a.jsx("strong",{children:a.jsx("span",{children:a.jsx("a",{href:"/",target:"_blank",children:"Qik.Ai"})})})]})})})]}),Sh=()=>{const e=j.useRef(null);return j.useEffect(()=>{const t=e.current,n=t.getContext("2d"),r=()=>{t.parentElement;const u=window.devicePixelRatio||1,m=window.innerWidth,h=window.innerHeight;t.width=m*u,t.height=h*u,t.style.width=m+"px",t.style.height=h+"px",n.scale(u,u)};r(),window.addEventListener("resize",r);const i=[],l=45,o=140;let s;for(let u=0;u<l;u++){const m=Math.random();let h="normal";m>.85?h="hub":m>.7&&(h="core"),i.push({x:Math.random()*t.width,y:Math.random()*t.height,vx:(Math.random()-.5)*.6,vy:(Math.random()-.5)*.6,radius:h==="hub"?Math.random()*3+5:h==="core"?Math.random()*2+4:Math.random()*2+2,pulse:Math.random()*Math.PI*2,energy:Math.random(),type:h,brightness:Math.random()*.5+.5,glowIntensity:Math.random()*.8+.2})}const c=()=>{n.clearRect(0,0,t.width,t.height),i.forEach((u,m)=>{u.x+=u.vx,u.y+=u.vy,(u.x<-20||u.x>t.width+20)&&(u.vx*=-1),(u.y<-20||u.y>t.height+20)&&(u.vy*=-1),u.x=Math.max(-10,Math.min(t.width+10,u.x)),u.y=Math.max(-10,Math.min(t.height+10,u.y)),u.pulse+=.015+(u.type==="hub"?.01:0),u.energy=(Math.sin(u.pulse)+1)/2;const h=u.type==="hub",g=u.type==="core",b=u.radius,y=b+u.energy*(h?6:g?4:2),x=n.createRadialGradient(u.x,u.y,0,u.x,u.y,y*2.5);h?(x.addColorStop(0,`rgba(139, 92, 246, ${.4*u.energy*u.glowIntensity})`),x.addColorStop(.3,`rgba(167, 139, 250, ${.3*u.energy})`),x.addColorStop(.6,`rgba(59, 130, 246, ${.2*u.energy})`),x.addColorStop(1,"rgba(139, 92, 246, 0)")):g?(x.addColorStop(0,`rgba(59, 130, 246, ${.35*u.energy*u.glowIntensity})`),x.addColorStop(.4,`rgba(139, 92, 246, ${.25*u.energy})`),x.addColorStop(1,"rgba(59, 130, 246, 0)")):(x.addColorStop(0,`rgba(167, 139, 250, ${.25*u.energy*u.glowIntensity})`),x.addColorStop(.5,`rgba(139, 92, 246, ${.15*u.energy})`),x.addColorStop(1,"rgba(167, 139, 250, 0)")),n.save(),n.globalCompositeOperation="screen",n.beginPath(),n.fillStyle=x,n.arc(u.x,u.y,y*2.5,0,Math.PI*2),n.fill(),n.restore();const w=n.createRadialGradient(u.x,u.y,0,u.x,u.y,y);h?(w.addColorStop(0,`rgba(255, 255, 255, ${.95*u.brightness})`),w.addColorStop(.2,`rgba(139, 92, 246, ${.9*u.energy})`),w.addColorStop(.6,`rgba(59, 130, 246, ${.7*u.energy})`),w.addColorStop(1,`rgba(139, 92, 246, ${.1*u.energy})`)):g?(w.addColorStop(0,`rgba(255, 255, 255, ${.85*u.brightness})`),w.addColorStop(.3,`rgba(59, 130, 246, ${.8*u.energy})`),w.addColorStop(1,`rgba(139, 92, 246, ${.1*u.energy})`)):(w.addColorStop(0,`rgba(255, 255, 255, ${.7*u.brightness})`),w.addColorStop(.4,`rgba(167, 139, 250, ${.6*u.energy})`),w.addColorStop(1,`rgba(139, 92, 246, ${.05*u.energy})`)),n.beginPath(),n.fillStyle=w,n.arc(u.x,u.y,y,0,Math.PI*2),n.fill();const p=n.createRadialGradient(u.x,u.y,0,u.x,u.y,b*.5);p.addColorStop(0,`rgba(255, 255, 255, ${.95+u.energy*.05})`),p.addColorStop(.7,`rgba(255, 255, 255, ${.8*u.brightness})`),p.addColorStop(1,`rgba(255, 255, 255, ${.2*u.brightness})`),n.beginPath(),n.fillStyle=p,n.arc(u.x,u.y,b*.5,0,Math.PI*2),n.fill(),h&&u.energy>.7&&(n.save(),n.globalCompositeOperation="screen",n.beginPath(),n.strokeStyle=`rgba(255, 255, 255, ${(u.energy-.7)*2})`,n.lineWidth=1+u.energy,n.arc(u.x,u.y,b+8+u.energy*4,0,Math.PI*2),n.stroke(),n.restore(),u.energy>.9&&(n.save(),n.globalCompositeOperation="screen",n.strokeStyle=`rgba(255, 255, 255, ${u.energy*.8})`,n.lineWidth=2,n.beginPath(),n.moveTo(u.x-10,u.y),n.lineTo(u.x+10,u.y),n.moveTo(u.x,u.y-10),n.lineTo(u.x,u.y+10),n.stroke(),n.restore()))});for(let u=0;u<i.length;u++)for(let m=u+1;m<i.length;m++){const h=i[u].x-i[m].x,g=i[u].y-i[m].y,b=Math.sqrt(h*h+g*g);let y=o;if(i[u].type==="hub"||i[m].type==="hub"?y=o*1.4:(i[u].type==="core"||i[m].type==="core")&&(y=o*1.2),b<y){const x=(1-b/y)*.8,w=(i[u].energy+i[m].energy)/2,p=i[u].type==="hub"||i[m].type==="hub",d=i[u].type==="core"||i[m].type==="core",f=n.createLinearGradient(i[u].x,i[u].y,i[m].x,i[m].y);if(p?(f.addColorStop(0,`rgba(139, 92, 246, ${x*(.6+w*.4)})`),f.addColorStop(.5,`rgba(167, 139, 250, ${x*(.7+w*.3)})`),f.addColorStop(1,`rgba(59, 130, 246, ${x*(.6+w*.4)})`)):d?(f.addColorStop(0,`rgba(59, 130, 246, ${x*(.5+w*.3)})`),f.addColorStop(.5,`rgba(139, 92, 246, ${x*(.6+w*.2)})`),f.addColorStop(1,`rgba(59, 130, 246, ${x*(.5+w*.3)})`)):(f.addColorStop(0,`rgba(167, 139, 250, ${x*(.4+w*.3)})`),f.addColorStop(.5,`rgba(139, 92, 246, ${x*(.5+w*.2)})`),f.addColorStop(1,`rgba(167, 139, 250, ${x*(.4+w*.3)})`)),n.save(),n.globalCompositeOperation="screen",n.beginPath(),n.strokeStyle=f,n.lineWidth=(p?2.5:d?2:1.5)+w*.5,n.moveTo(i[u].x,i[u].y),n.lineTo(i[m].x,i[m].y),n.stroke(),n.restore(),w>.5){const P=Date.now()*.001*(p?2:1.5)%2;let C,z;if(P<=1)C=i[u].x+(i[m].x-i[u].x)*P,z=i[u].y+(i[m].y-i[u].y)*P;else{const pe=P-1;C=i[m].x+(i[u].x-i[m].x)*pe,z=i[m].y+(i[u].y-i[m].y)*pe}const O=(p?4:d?3:2)*w,L=n.createRadialGradient(C,z,0,C,z,O*2);L.addColorStop(0,`rgba(255, 255, 255, ${w*.9})`),L.addColorStop(.5,`rgba(139, 92, 246, ${w*.7})`),L.addColorStop(1,"rgba(139, 92, 246, 0)"),n.save(),n.globalCompositeOperation="screen",n.beginPath(),n.fillStyle=L,n.arc(C,z,O*2,0,Math.PI*2),n.fill(),n.beginPath(),n.fillStyle=`rgba(255, 255, 255, ${w})`,n.arc(C,z,O*.5,0,Math.PI*2),n.fill(),n.restore()}}}s=requestAnimationFrame(c)};return c(),()=>{window.removeEventListener("resize",r),s&&cancelAnimationFrame(s)}},[]),a.jsx("div",{className:"ai-network-container",children:a.jsx("canvas",{ref:e,className:"ai-network-canvas",style:{width:"100%",height:"100vh",background:"transparent",borderRadius:"0",border:"none"}})})},Nh=()=>a.jsx("div",{className:"hero-animation-wrapper",children:a.jsx(Sh,{})}),Ch=new Set(["Qik AllVoices","Qik DragonDrip","Qik Forms","Qik Surveys","Qik Email Validator","Qik Feature Maestro","Qik OnboardFlow","Qik OKR & Goals","NexusPost","Qik AssetGrid","Qik BookIt"]),Eh=new Set(["Qik Sign"]),Ph=({kind:e})=>{const t=e==="ALPHA";return a.jsx("span",{style:{position:"absolute",top:8,right:8,background:t?"linear-gradient(135deg,#FF7A59 0%,#FF3D81 100%)":"linear-gradient(135deg,#94A3FF 0%,#4F46E5 100%)",color:"#fff",fontSize:11,padding:"6px 9px",fontWeight:800,letterSpacing:".5px",borderRadius:999,boxShadow:"0 6px 14px rgba(0,0,0,.12)",zIndex:5},title:t?"Alpha product":"Beta product",children:e})},ee=({title:e,img:t,children:n,alphaMode:r})=>{const i=!Eh.has(e),l=Ch.has(e)?"ALPHA":"BETA";return a.jsx("div",{className:"col-md-4 col-sm-6 col-12 business-card-animate",children:a.jsxs("div",{className:"feature-item business-product enhanced-card",style:{position:"relative"},children:[i&&a.jsx(Ph,{kind:l}),a.jsx("img",{src:t,alt:`${e} icon`,className:"business-card-img"}),a.jsxs("div",{className:"business-card-content",children:[a.jsx("strong",{children:e}),a.jsx("p",{children:n})]})]})})},zh=({alphaMode:e=!1})=>a.jsx("div",{id:"sub-business-solutions",children:a.jsxs("div",{className:"col-md-12",id:"products",style:{display:"flex",flexDirection:"column",gap:"40px"},children:[a.jsxs("div",{className:"row",style:{display:"flex",flexWrap:"wrap",gap:"32px 0"},children:[a.jsx("div",{className:"col-md-12",style:{marginBottom:"20px"},children:a.jsx("h6",{style:{color:"#00abf6",fontWeight:"bold",marginBottom:"15px"},children:"Compliance, Legal & Risk Management"})}),a.jsx(ee,{alphaMode:e,img:"./images/logos/Qik Sign.png",title:"Qik Sign",children:"Secure E-Signature Platform: Legally binding digital signatures with audit trails & workflow automation"}),a.jsx(ee,{alphaMode:e,img:"./images/logos/Qik Policy Management Portal.PNG",title:"Qik Policy Management Portal",children:"Centralized policy creation, management, and compliance tracking"}),a.jsx(ee,{alphaMode:e,img:"./images/logos/Qik Whistleblower.PNG",title:"Qik Whistleblower",children:"Anonymous reporting and incident management system"}),a.jsx(ee,{alphaMode:e,img:"./images/logos/Qik RetainRight.PNG",title:"Qik RetainRight",children:"Document Retention & Auto-Purge Scheduler: Automated compliance for data retention policies"}),a.jsx(ee,{alphaMode:e,img:"./images/logos/LegaDraft.PNG",title:"Qik LegaDraft",children:"AI-Powered Legal Document Assistant: AI-driven legal document creation and review"}),a.jsx(ee,{alphaMode:e,img:"./images/logos/Qik CLM.png",title:"Qik CLM",children:"Contract Lifecycle Management: End-to-end contract drafting, collaboration, approvals, renewals & AI clause analysis"})]}),e&&a.jsxs("div",{className:"row",style:{display:"flex",flexWrap:"wrap",gap:"32px 0"},children:[a.jsx("div",{className:"col-md-12",style:{marginBottom:"20px"},children:a.jsx("h6",{style:{color:"#00abf6",fontWeight:"bold",marginBottom:"15px"},children:"Human Capital & Performance"})}),a.jsx(ee,{alphaMode:e,img:"./images/logos/Qik OnboardFlow.PNG",title:"Qik OnboardFlow",children:"Employee Onboarding and Off-boarding: Streamlined employee lifecycle management"}),a.jsx(ee,{alphaMode:e,img:"./images/logos/Qik OKR & Goals.PNG",title:"Qik OKR & Goals",children:"Objective and key results tracking and performance management"}),a.jsx(ee,{alphaMode:e,img:"./images/logos/Qik AllVoices.PNG",title:"Qik AllVoices",children:"Employee voice and feedback collection platform"})]}),e&&a.jsxs("div",{className:"row",style:{display:"flex",flexWrap:"wrap",gap:"32px 0"},children:[a.jsx("div",{className:"col-md-12",style:{marginBottom:"20px"},children:a.jsx("h6",{style:{color:"#00abf6",fontWeight:"bold",marginBottom:"15px"},children:"Marketing, Communications & Engagement"})}),a.jsx(ee,{alphaMode:e,img:"./images/logos/Qik DragonDrip.PNG",title:"Qik DragonDrip",children:"Email Campaign Builder: Marketing automation and email campaign management"}),a.jsx(ee,{alphaMode:e,img:"./images/logos/NexusPost.PNG",title:"NexusPost",children:"Social Media Management"}),a.jsx(ee,{alphaMode:e,img:"./images/logos/Qik Forms.PNG",title:"Qik Forms",children:"Dynamic form builder and data collection"}),a.jsx(ee,{alphaMode:e,img:"./images/logos/Qik Surveys.PNG",title:"Qik Surveys",children:"Survey creation and data collection tools"}),a.jsx(ee,{alphaMode:e,img:"./images/logos/Qik Email Validator.PNG",title:"Qik Email Validator",children:"Email verification"})]}),e&&a.jsxs("div",{className:"row",style:{display:"flex",flexWrap:"wrap",gap:"32px 0"},children:[a.jsx("div",{className:"col-md-12",style:{marginBottom:"20px"},children:a.jsx("h6",{style:{color:"#00abf6",fontWeight:"bold",marginBottom:"15px"},children:"Product Management & Innovation"})}),a.jsx(ee,{alphaMode:e,img:"./images/logos/Qik Feature Maestro.png",title:"Qik Feature Maestro",children:"SaaS Feature Request Board: Product development and feature request management"})]}),e&&a.jsxs("div",{className:"row",style:{display:"flex",flexWrap:"wrap",gap:"32px 0"},children:[a.jsx("div",{className:"col-md-12",style:{marginBottom:"20px"},children:a.jsx("h6",{style:{color:"#00abf6",fontWeight:"bold",marginBottom:"15px"},children:"Operations & Asset management"})}),a.jsx(ee,{alphaMode:e,img:"./images/logos/Qik AssetGrid.PNG",title:"Qik AssetGrid",children:"Company Asset Tracker: Comprehensive asset inventory and management system"}),a.jsx(ee,{alphaMode:e,img:"./images/logos/Qik BookIt.PNG",title:"Qik BookIt",children:"Resource booking and reservation management system"})]}),e&&a.jsx("div",{className:"row",style:{display:"flex",flexWrap:"wrap",gap:"32px 0"},children:a.jsx("div",{className:"col-md-12",style:{marginBottom:"20px"},children:a.jsx("h6",{style:{color:"#00abf6",fontWeight:"bold",marginBottom:"15px"},children:"Engagement & Communication"})})})]})}),_h=()=>{const e=dr(),t=()=>{if(e&&e.search&&e.search.length>0)return e.search;if(typeof window<"u"&&window.location&&window.location.search&&window.location.search.length>0)return window.location.search;if(typeof window<"u"&&window.location&&window.location.hash){const i=window.location.hash,l=i.indexOf("?");if(l!==-1)return i.substring(l)}return""},n=new URLSearchParams(t()),r=(n.get("alpha")||"").toLowerCase()==="true"||n.get("alpha")==="1";return a.jsxs("div",{children:[a.jsx(Ja,{}),a.jsxs("section",{id:"qik-intro",className:"qik-intro hero-enhanced",children:[a.jsxs("div",{className:"hero-background",children:[a.jsx("div",{className:"hero-gradient-orb hero-orb-1"}),a.jsx("div",{className:"hero-gradient-orb hero-orb-2"}),a.jsx("div",{className:"hero-gradient-orb hero-orb-3"}),a.jsx("div",{className:"hero-gradient-orb hero-orb-4"}),a.jsx("div",{className:"hero-gradient-orb hero-orb-5"}),a.jsx("div",{className:"hero-particles"}),a.jsx("div",{className:"hero-particles-secondary"})]}),a.jsx("div",{className:"hero-animation-background",children:a.jsx(Nh,{})}),a.jsx("div",{className:"container hero-content",children:a.jsx("div",{className:"row align-items-center justify-content-center",children:a.jsxs("div",{className:"col-lg-8 col-md-10 hero-text-section",children:[a.jsxs("div",{className:"hero-badge",children:[a.jsx("span",{className:"badge-icon",children:"✨"}),a.jsx("span",{className:"badge-text",children:"Next-Gen AI Technology"})]}),a.jsx("h1",{className:"hero-title",children:a.jsx("span",{className:"title-highlight",children:"Qik Cloud Stack"})}),a.jsx("h2",{className:"hero-subtitle",children:"Intelligent business solutions powered by AI to fuel your growth"}),a.jsx("p",{className:"hero-description",children:"Experience the future of business automation with our comprehensive AI-powered cloud platform. From CRM to analytics, transform your operations with cutting-edge artificial intelligence."}),a.jsxs("div",{className:"hero-actions",children:[a.jsxs(ye,{to:"/contact",className:"hero-btn hero-btn-nova hero-btn-nova-primary",title:"Get started with Qik","aria-label":"Get Started with Qik platform",children:[a.jsx("span",{className:"hero-btn-label",children:"Get Started"}),a.jsx("span",{className:"hero-btn-icon-wrapper","aria-hidden":"true",children:a.jsxs("svg",{className:"hero-btn-icon",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M5 12h14"}),a.jsx("path",{d:"M13 6l6 6-6 6"})]})})]}),a.jsxs("button",{onClick:()=>{const i=document.getElementById("business-solutions");i&&i.scrollIntoView({behavior:"smooth"})},className:"hero-btn hero-btn-nova hero-btn-nova-outline",children:[a.jsx("span",{className:"hero-btn-label",children:"Learn More"}),a.jsx("span",{className:"hero-btn-icon-wrapper","aria-hidden":"true",children:a.jsx("svg",{className:"hero-btn-icon",width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:a.jsx("path",{d:"M8 12L3 7H13L8 12Z"})})})]})]}),a.jsxs("div",{className:"hero-stats",children:[a.jsxs("div",{className:"stat-item",children:[a.jsx("span",{className:"stat-number",children:"50+"}),a.jsx("span",{className:"stat-label",children:"AI Tools"})]}),a.jsx("div",{className:"stat-divider"}),a.jsxs("div",{className:"stat-item",children:[a.jsx("span",{className:"stat-number",children:"10k+"}),a.jsx("span",{className:"stat-label",children:"Businesses"})]}),a.jsx("div",{className:"stat-divider"}),a.jsxs("div",{className:"stat-item",children:[a.jsx("span",{className:"stat-number",children:"99.9%"}),a.jsx("span",{className:"stat-label",children:"Uptime"})]})]})]})})})]}),a.jsx("section",{id:"business-solutions",className:"business-solutions-section",children:a.jsxs("div",{className:"container",children:[a.jsx("div",{className:"row",children:a.jsx("div",{className:"col-12",children:a.jsxs("div",{className:"section-header text-center",style:{position:"relative"},children:[r&&a.jsx("div",{className:"alpha-badge",style:{position:"absolute",top:"-12px",right:"16px",background:"linear-gradient(135deg, #8B5CF6 0%, #4F46E5 100%)",color:"#fff",padding:"6px 10px",borderRadius:"999px",fontSize:"12px",fontWeight:700,boxShadow:"0 6px 18px rgba(79,70,229,0.14)",zIndex:5},title:"Alpha mode active",children:"ALPHA"}),a.jsx("h2",{className:"section-title",children:"Our Business Solutions"}),a.jsx("p",{className:"section-subtitle",children:"Comprehensive AI-powered tools to transform your business operations"})]})})}),a.jsx("div",{className:"row",children:a.jsx("div",{className:"col-12",children:a.jsx(zh,{alphaMode:r})})})]})}),a.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

    /* Modern Mobile Menu Styles */
    .mobile-menu-button {
      display: none;
      background: none;
      border: none;
      padding: 8px;
      cursor: pointer;
      z-index: 99998;
      transition: all 0.3s ease;
      border-radius: 8px;
    }

    .mobile-menu-button:hover {
      background: rgba(139, 92, 246, 0.1);
    }

    @media (max-width: 768px) {
      .mobile-menu-button {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    /* Modern Hamburger Icon */
    .hamburger-icon {
      width: 28px;
      height: 20px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .hamburger-icon span {
      display: block;
      height: 3px;
      width: 100%;
      background: var(--text-primary);
      border-radius: 2px;
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      transform-origin: center;
    }

    .hamburger-icon span:nth-child(1) {
      transform: translateY(0) rotate(0deg);
    }

    .hamburger-icon span:nth-child(2) {
      opacity: 1;
      transform: scaleX(1);
    }

    .hamburger-icon span:nth-child(3) {
      transform: translateY(0) rotate(0deg);
    }

    /* Active Hamburger Animation */
    .hamburger-icon.active span:nth-child(1) {
      transform: translateY(8.5px) rotate(45deg);
    }

    .hamburger-icon.active span:nth-child(2) {
      opacity: 0;
      transform: scaleX(0);
    }

    .hamburger-icon.active span:nth-child(3) {
      transform: translateY(-8.5px) rotate(-45deg);
    }

    /* Mobile Navigation Overlay */
    .mobile-nav-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(8px);
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeInOverlay 0.3s ease-out;
    }

    @keyframes fadeInOverlay {
      from {
        opacity: 0;
        backdrop-filter: blur(0px);
      }
      to {
        opacity: 1;
        backdrop-filter: blur(8px);
      }
    }

    /* Mobile Navigation Menu */
    .mobile-nav-menu {
      background: rgba(248, 250, 252, 0.98);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(139, 92, 246, 0.2);
      border-radius: 24px;
      padding: 0;
      margin: 20px;
      max-width: 400px;
      width: calc(100vw - 40px);
      box-shadow: 
        0 20px 60px rgba(139, 92, 246, 0.15),
        0 8px 32px rgba(0, 0, 0, 0.1);
      animation: slideInMenu 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      overflow: hidden;
    }

    @keyframes slideInMenu {
      from {
        transform: translateY(-30px) scale(0.95);
        opacity: 0;
      }
      to {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
    }

    /* Mobile Navigation Header */
    .mobile-nav-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 24px 28px 20px;
      border-bottom: 1px solid rgba(139, 92, 246, 0.1);
    }

    .mobile-nav-logo {
      height: 40px;
      width: auto;
    }

    .mobile-nav-close {
      background: rgba(139, 92, 246, 0.1);
      border: none;
      border-radius: 12px;
      padding: 8px;
      cursor: pointer;
      color: var(--text-primary);
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .mobile-nav-close:hover {
      background: rgba(139, 92, 246, 0.2);
      transform: rotate(90deg);
    }

    /* Mobile Navigation Links */
    .mobile-nav-links {
      padding: 24px 28px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .mobile-nav-link {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px 20px;
      color: var(--text-primary);
      text-decoration: none;
      border-radius: 16px;
      transition: all 0.3s ease;
      font-weight: 600;
      font-size: 1.1rem;
      position: relative;
      overflow: hidden;
    }

    .mobile-nav-link::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, 
        rgba(139, 92, 246, 0.1) 0%, 
        rgba(0, 212, 230, 0.1) 100%);
      transition: left 0.3s ease;
      z-index: 0;
    }

    .mobile-nav-link:hover::before {
      left: 0;
    }

    .mobile-nav-link:hover {
      color: var(--qik-purple);
      transform: translateX(8px);
      box-shadow: 0 8px 24px rgba(139, 92, 246, 0.15);
    }

    .nav-link-icon {
      font-size: 1.4rem;
      z-index: 1;
      position: relative;
    }

    .nav-link-text {
      z-index: 1;
      position: relative;
    }

    /* Mobile Navigation Footer */
    .mobile-nav-footer {
      padding: 20px 28px 28px;
      border-top: 1px solid rgba(139, 92, 246, 0.1);
    }

    .mobile-contact-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      width: 100%;
      padding: 16px 20px;
      background: linear-gradient(135deg, #8B5CF6 0%, #00D4E6 100%);
      color: white;
      text-decoration: none;
      border-radius: 16px;
      font-weight: 600;
      font-size: 1rem;
      transition: all 0.3s ease;
      box-shadow: 0 4px 16px rgba(139, 92, 246, 0.3);
    }

    .mobile-contact-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(139, 92, 246, 0.4);
      color: white;
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
      
      .mobile-menu-button {
        display: flex !important;
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
`}}),a.jsx(eo,{})]})},Lh=()=>a.jsx("nav",{id:"sidebar",children:a.jsxs("ul",{className:"list-unstyled components",children:[a.jsx("li",{className:"nav-item",style:{height:"50px"}}),a.jsx("li",{children:a.jsx(ye,{to:"/",children:a.jsx("span",{children:" Home"})})}),a.jsx("li",{children:a.jsx(ye,{to:"/Academy",children:a.jsx("span",{children:" Academy"})})}),a.jsx("li",{children:a.jsx(ye,{to:"/Business",children:a.jsx("span",{children:" Business"})})})]})}),Ih=()=>{const e=j.useRef([]),t=(n,r)=>{e.current[n||1].scrollIntoView({behavior:"smooth"})};return a.jsxs("div",{children:[a.jsx("header",{id:"header",children:a.jsx("div",{className:"containervs",children:a.jsxs("div",{className:"row",children:[a.jsx("div",{className:"col-md-2 col-sm-2 col-2",children:a.jsx("a",{href:"/",children:a.jsx("img",{src:"./images/logo.png",alt:"Qik.ai",className:"img-logovs"})})}),a.jsx("div",{className:"col-md-6 col-3",children:a.jsx("div",{className:" nav-menu d-none d-lg-block float-right",style:{padding:4},children:a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("div",{onClick:()=>t(1),children:"Home"})}),a.jsx("li",{children:a.jsx("div",{onClick:()=>t(2),children:"Features"})}),a.jsx("li",{children:a.jsx("div",{onClick:()=>t(3),children:"Pricing"})}),a.jsx("li",{children:a.jsx("div",{onClick:()=>t(4),children:"Contact Us"})})]})})}),a.jsx("div",{className:"col-md-3 col-sm-6 col-6 text-right",children:a.jsxs("div",{className:"us-contact",children:[a.jsx("i",{className:"fa fa-envelope"})," hello@qik.ai"]})})]})})}),a.jsx("section",{ref:n=>e.current[1]=n,id:"qik-intro",className:"qik-intro",children:a.jsx("div",{className:"containervs",children:a.jsxs("div",{className:"col-md-12 row",children:[a.jsxs("div",{className:"col-md-6 introtext",children:[a.jsxs("h2",{children:["Qik Coaching Institute App on Cloud",a.jsx("hr",{className:"section-line-border mhide"}),a.jsx("hr",{className:"section-line-border1 mshow"})]}),a.jsx("p",{children:"Undoubtedly the simplest yet most powerful software on cloud to automate & grow your coaching institute. Trusted by 2000+ institutions worldwide."}),a.jsx("button",{onClick:()=>t(3),className:"btn btn-primary btn-lg",style:{marginBottom:"40px",borderRadius:"4px"},children:"Get Business App"})]}),a.jsxs("div",{className:"col-md-6",children:[a.jsx("img",{src:"./images/academy-intro.png",alt:"",style:{width:"100%"}}),a.jsx("br",{}),a.jsx("br",{}),a.jsx("h5",{style:{textAlign:"center"},children:"Qik Coaching Institute Software"})]})]})})}),a.jsx("style",{dangerouslySetInnerHTML:{__html:`   .introtext h2{text-align:left;}
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
	`}}),a.jsx("section",{ref:n=>e.current[2]=n,id:"qik-features",className:"qik-features",children:a.jsx("div",{className:"containervs",children:a.jsxs("div",{className:"col-md-12",children:[a.jsxs("div",{className:"col-md-12 containervs-text-center",children:[a.jsx("span",{className:"uvs-span",children:"Core Features"}),a.jsxs("h2",{children:["Next Generation features that will help you manage & grow your coaching institute seamlessly.",a.jsx("hr",{className:"section-line-border1"})," ",a.jsx("br",{}),a.jsx("br",{})]})]}),a.jsxs("div",{className:"row",children:[a.jsx("div",{className:"col-md-4",children:a.jsx("table",{className:"table uvstable",children:a.jsx("tbody",{children:a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("img",{src:"./images/cf1.svg",alt:""})}),a.jsxs("td",{children:[a.jsx("h4",{children:"Student Record"}),a.jsx("p",{children:"Record of student details with photographs personal & parent contact details, batches, previous year marks, etc."})]})]})})})}),a.jsx("div",{className:"col-md-4",children:a.jsx("table",{className:"table uvstable",children:a.jsx("tbody",{children:a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("img",{src:"./images/cf2.svg",alt:""})}),a.jsxs("td",{children:[a.jsx("h4",{children:"Test Management"}),a.jsx("p",{children:"Facility to add Test details & marks, enter students marks, auto alerts to students & parents for marks obtained. Record of all tests & scored marks studentwise"})]})]})})})}),a.jsx("div",{className:"col-md-4",children:a.jsx("table",{className:"table uvstable",children:a.jsx("tbody",{children:a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("img",{src:"./images/cf3.svg",alt:""})}),a.jsxs("td",{children:[a.jsx("h4",{children:"Fees Management"}),a.jsx("p",{children:"Keep track of all payments datewise. Alert for paid amount & remaining amountm facilityto print receipts."})]})]})})})}),a.jsx("div",{className:"col-md-4",children:a.jsx("table",{className:"table uvstable",children:a.jsx("tbody",{children:a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("img",{src:"./images/cf4.svg",alt:""})}),a.jsxs("td",{children:[a.jsx("h4",{children:"Assign Homework"}),a.jsx("p",{children:" "})]})]})})})}),a.jsx("div",{className:"col-md-4",children:a.jsx("table",{className:"table uvstable",children:a.jsx("tbody",{children:a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("img",{src:"./images/cf5.svg",alt:""})}),a.jsxs("td",{children:[a.jsx("h4",{children:"I-Card Printing"}),a.jsx("p",{children:"Be ahead & unique from competitors by providing I-cards to students. Facility to design own institute I-card by uploading header & footer logo. Generate Individual or Bulk I-cards batchwise & print."})]})]})})})}),a.jsx("div",{className:"col-md-4",children:a.jsx("table",{className:"table uvstable",children:a.jsx("tbody",{children:a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("img",{src:"./images/cf6.svg",alt:""})}),a.jsxs("td",{children:[a.jsx("h4",{children:"Videos"}),a.jsx("p",{children:" "})]})]})})})}),a.jsx("div",{className:"col-md-4",children:a.jsx("table",{className:"table uvstable",children:a.jsx("tbody",{children:a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("img",{src:"./images/cf7.svg",alt:""})}),a.jsxs("td",{children:[a.jsx("h4",{children:"Custom Setting"}),a.jsx("p",{children:"Management of all modules configuration settings such as SMS API Setting, facility to add/update institute details with logo, receipt header or footer images etc."})]})]})})})}),a.jsx("div",{className:"col-md-4",children:a.jsx("table",{className:"table uvstable",children:a.jsx("tbody",{children:a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("img",{src:"./images/cf8.svg",alt:""})}),a.jsxs("td",{children:[a.jsx("h4",{children:"Mobile Application"}),a.jsx("p",{children:"Single App which gives information about Attendance, Tests, Exam results, Holidays and Fees details to students and parents."})]})]})})})}),a.jsx("div",{className:"col-md-4",children:a.jsx("table",{className:"table uvstable",children:a.jsx("tbody",{children:a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("img",{src:"./images/cf9.svg",alt:""})}),a.jsxs("td",{children:[a.jsx("h4",{children:"Reports"}),a.jsx("p",{children:"All full-fledged reports with filter & sort to generate custom reports as per need. Complete set of reports such as enquires, registrations, attendance, tests, expences, Results student or batchwise & many more"})]})]})})})}),a.jsx("div",{className:"col-md-4",children:a.jsx("table",{className:"table uvstable",children:a.jsx("tbody",{children:a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("img",{src:"./images/Enquiry.svg",alt:""})}),a.jsxs("td",{children:[a.jsx("h4",{children:"Enquiry Management"}),a.jsx("p",{children:"Keep track on all enquiries with status & follow up date reminder for coverting open enquiries into admissions. Enquiry report where can review all Prospect, Converted & Closed enquiries."})]})]})})})}),a.jsx("div",{className:"col-md-4",children:a.jsx("table",{className:"table uvstable",children:a.jsx("tbody",{children:a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("img",{src:"./images/Biometric.svg",alt:""})}),a.jsxs("td",{children:[a.jsx("h4",{children:"Biometric Attendance"}),a.jsx("p",{children:"Track daily batch-wise attendance of students, send daily attendance alerts to absentees, push attendance from biometric machine to cloud in real time"})]})]})})})}),a.jsx("div",{className:"col-md-4",children:a.jsx("table",{className:"table uvstable",children:a.jsx("tbody",{children:a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("img",{src:"./images/Subjectwise.svg",alt:""})}),a.jsxs("td",{children:[a.jsx("h4",{children:"Subjectwise Progress"}),a.jsx("p",{children:"Subjectwise complete progress report of student for parents. All performance record such as total present days & absent days, Fees Summary, Total tests & obtained marks, Remarks & many more"})]})]})})})}),a.jsx("div",{className:"col-md-4",children:a.jsx("table",{className:"table uvstable",children:a.jsx("tbody",{children:a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("img",{src:"./images/sms.svg",alt:""})}),a.jsxs("td",{children:[a.jsx("h4",{children:"Auto SMS"}),a.jsx("p",{children:"Automatically send SMS alerts to parents for subjectwise absentee, fees payment, test results, holidays etc. Facility to send custom messages like for batch timing, festival wishes or b’day wish etc."})]})]})})})}),a.jsx("div",{className:"col-md-4",children:a.jsx("table",{className:"table uvstable",children:a.jsx("tbody",{children:a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("img",{src:"./images/Exam.svg",alt:""})}),a.jsxs("td",{children:[a.jsx("h4",{children:"Test"}),a.jsx("p",{children:"Facility to add test & details such as title, description & out of marks. Test marks & absent for test alerts to parents. Storing all test records studentwise."})]})]})})})}),a.jsx("div",{className:"col-md-4",children:a.jsx("table",{className:"table uvstable",children:a.jsx("tbody",{children:a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("img",{src:"./images/smstemplete.svg",alt:""})}),a.jsxs("td",{children:[a.jsx("h4",{children:"SMS Templates"}),a.jsx("p",{children:"Save all event based SMS templates such as New registration, Absentee, Test Marks, Holidays etc. Can create custom template & save for future use."})]})]})})})}),a.jsx("div",{className:"col-md-4",children:a.jsx("table",{className:"table uvstable",children:a.jsx("tbody",{children:a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("img",{src:"./images/email.svg",alt:""})}),a.jsxs("td",{children:[a.jsx("h4",{children:"Email Alerts"}),a.jsx("p",{children:"Send custom email alerts to parents batchwise/subjectwise"})]})]})})})}),a.jsx("div",{className:"col-md-4",children:a.jsx("table",{className:"table uvstable",children:a.jsx("tbody",{children:a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("img",{src:"./images/omr.svg",alt:""})}),a.jsxs("td",{children:[a.jsx("h4",{children:"OMR Integration"}),a.jsx("p",{children:"Automatic checking of OMR Sheets for MCQs. Automatically update marks scored and analyse question-wise performance. OMR results alert to parents via SMS."})]})]})})})}),a.jsx("div",{className:"col-md-4",children:a.jsx("table",{className:"table uvstable",children:a.jsx("tbody",{children:a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("img",{src:"./images/expense.svg",alt:""})}),a.jsxs("td",{children:[a.jsx("h4",{children:"Manage Expense"}),a.jsx("p",{children:"Keep track of all expense entries & salaries. Create categories & heads as per expenses. Keep record of all payment transactions with bank account details."})]})]})})})}),a.jsx("div",{className:"col-md-4",children:a.jsx("table",{className:"table uvstable",children:a.jsx("tbody",{children:a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("img",{src:"./images/subscription.svg",alt:""})}),a.jsxs("td",{children:[a.jsx("h4",{children:" Online Subscription"}),a.jsx("p",{children:"Easy & speedy modes to top up your subscription packages. Netbanking, Credit/Debit Card & Paytm."})]})]})})})})]})]})})}),a.jsx("section",{ref:n=>e.current[3]=n,id:"qik-pricing",className:"qik-pricing",children:a.jsx("div",{className:"containervs",children:a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"col-md-12",style:{textAlign:"center",marginBottom:"7%"},children:[a.jsx("span",{className:"uvs-span",children:"Pricing"}),a.jsxs("h2",{children:["App subscription ",a.jsx("hr",{className:"section-line-border1"})]})]}),a.jsx("div",{className:"col-md-12",children:a.jsxs("div",{className:"row",children:[a.jsx("div",{className:"col-md-4",children:a.jsx("div",{className:"uvs-classics",children:a.jsxs("table",{className:"uvs-table",children:[a.jsxs("caption",{children:["Customize Pack 1",a.jsx("br",{}),a.jsx("span",{className:"uvs-line"})]}),a.jsxs("tbody",{children:[a.jsx("tr",{children:a.jsxs("td",{children:[a.jsx("span",{style:{color:"#00abf6"},children:"50% discount"}),"   ",a.jsx("strong",{children:a.jsx("strike",{children:"$999"})})]})}),a.jsx("tr",{children:a.jsxs("td",{children:[a.jsx("h2",{children:"$450"})," Per Month"]})}),a.jsx("tr",{children:a.jsxs("td",{children:[a.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),a.jsx("tr",{children:a.jsxs("td",{children:[a.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),a.jsx("tr",{children:a.jsxs("td",{children:[a.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),a.jsx("tr",{children:a.jsxs("td",{children:[a.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),a.jsx("tr",{children:a.jsxs("td",{children:[a.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),a.jsx("tr",{children:a.jsx("td",{className:"select-td",children:a.jsxs("button",{className:"btn btn-uvs",children:["Choose Plan   ",a.jsx("i",{className:"fa fa-angle-right",children:" "}),a.jsx("i",{className:"fa fa-angle-right",children:" "})]})})})]})]})})}),a.jsx("div",{className:"col-md-4",children:a.jsx("div",{className:"uvs-classics-vs",children:a.jsxs("table",{className:"uvs-table",children:[a.jsxs("caption",{style:{color:"#fff"},children:["Annual Pack 3",a.jsx("br",{}),a.jsx("span",{className:"uvs-linevs"})]}),a.jsxs("tbody",{children:[a.jsx("tr",{children:a.jsxs("td",{children:[a.jsx("h2",{style:{color:"#fff"},children:"$990"})," Per Month"]})}),a.jsx("tr",{children:a.jsxs("td",{children:[a.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),a.jsx("tr",{children:a.jsxs("td",{children:[a.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),a.jsx("tr",{children:a.jsxs("td",{children:[a.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),a.jsx("tr",{children:a.jsxs("td",{children:[a.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),a.jsx("tr",{children:a.jsxs("td",{children:[a.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),a.jsx("tr",{children:a.jsx("td",{className:"select-td",children:a.jsxs("button",{className:"btn btn-primary",children:["Choose Plan   ",a.jsx("i",{className:"fa fa-angle-right",children:" "}),a.jsx("i",{className:"fa fa-angle-right",children:" "})]})})})]})]})})}),a.jsx("div",{className:"col-md-4",children:a.jsx("div",{className:"uvs-classics",children:a.jsxs("table",{className:"uvs-table",children:[a.jsxs("caption",{children:["Customize Pack 4 ",a.jsx("br",{}),a.jsx("span",{className:"uvs-line"})]}),a.jsxs("tbody",{children:[a.jsx("tr",{children:a.jsxs("td",{children:[a.jsx("span",{style:{color:"#00abf6"},children:"50% discount"}),"   ",a.jsx("strong",{children:a.jsx("strike",{children:"$999"})})]})}),a.jsx("tr",{children:a.jsxs("td",{children:[a.jsx("h2",{children:"$450"})," Per Month"]})}),a.jsx("tr",{children:a.jsxs("td",{children:[a.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),a.jsx("tr",{children:a.jsxs("td",{children:[a.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),a.jsx("tr",{children:a.jsxs("td",{children:[a.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),a.jsx("tr",{children:a.jsxs("td",{children:[a.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),a.jsx("tr",{children:a.jsxs("td",{children:[a.jsx("i",{className:"fa fa-check","aria-hidden":"true"}),"It is a long established fact that"]})}),a.jsx("tr",{children:a.jsx("td",{className:"select-td",children:a.jsxs("button",{className:"btn btn-uvs",children:["Choose Plan   ",a.jsx("i",{className:"fa fa-angle-right",children:" "}),a.jsx("i",{className:"fa fa-angle-right",children:" "})]})})})]})]})})})]})})]})})}),a.jsx("section",{ref:n=>e.current[4]=n,id:"contact-us",style:{paddingTop:"100px"},children:a.jsx("div",{className:"containervs",children:a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"col-md-12 containervs-text-center",children:[a.jsx("span",{className:"uvs-span",children:"Contact us"}),a.jsxs("h2",{children:["Let's create progress ",a.jsx("br",{}),"together ",a.jsx("hr",{className:"section-line-border1"})]})]}),a.jsx("div",{className:"col-md-6",children:a.jsx("img",{src:"./images/contact.svg",width:"100%",alt:""})}),a.jsx("div",{className:"col-md-6",children:a.jsxs("div",{className:"form-uvsl",children:[a.jsx("br",{}),a.jsx("br",{}),"Name ",a.jsx("input",{type:"text",name:"name",className:"form-control"}),"Email Address",a.jsx("input",{type:"text",name:"name",className:"form-control"}),"Mobile Number",a.jsx("input",{type:"text",name:"name",className:"form-control"}),"Description",a.jsx("textarea",{className:"form-control",defaultValue:""}),a.jsx("input",{type:"submit",className:"btn btn-primary btn-lg",text:"Submit"})]})})]})})}),a.jsxs("footer",{id:"footer",children:[a.jsx("div",{className:"footer-top",children:a.jsx("div",{className:"containervs",children:a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"col-md-4",children:[a.jsx("h4",{children:a.jsx(ye,{to:"/",children:a.jsx("img",{src:"./images/logo.png",alt:""})})}),a.jsx("p",{children:"Supercharge your business with 50+ integrated business applications. With Qik Cloud Stack, you can speedup, automate and bring transparency to your business activities. Experience the power of cloud to increase your business productivity by 20%."})]}),a.jsxs("div",{className:"col-md-4 text-center-uvs",children:[a.jsx("h4",{children:"Contact"}),a.jsx("ul",{style:{listStyleType:"none",padding:0,margin:0,marginTop:"20px"},children:a.jsx("li",{style:{marginBottom:"13px"},children:"Email: hello@qik.ai"})})]}),a.jsxs("div",{className:"col-md-4 text-right-uvs",children:[a.jsx("h4",{children:"Always reachable on"}),a.jsxs("div",{className:"social-links",style:{marginTop:"20px"},children:[a.jsx("button",{style:{backgroundColor:"transparent",outlineColor:"transparent",borderColor:"transparent",outline:"none"},children:a.jsx("img",{src:"./images/linkedin.svg",alt:""})}),a.jsx("button",{style:{backgroundColor:"transparent",outlineColor:"transparent",borderColor:"transparent",outline:"none"},children:a.jsx("img",{src:"./images/gmail.svg",style:{marginLeft:"20px"},alt:""})})]})]})]})})}),a.jsx("div",{className:"containervs",children:a.jsx("div",{className:"copyright",children:a.jsxs("p",{style:{textAlign:"center"},children:["All rights reserved © 2023",a.jsx("strong",{children:a.jsx("span",{children:a.jsx(ye,{to:"/",children:"Qik.Ai"})})})]})})})]})]})},Mh=()=>a.jsx("section",{id:"about-us",className:"about-us-section",children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"col-12 text-center",children:[a.jsx("h2",{className:"section-title",children:"About Us"}),a.jsx("hr",{className:"section-line-border1",style:{margin:"20px auto"}})]}),a.jsx("div",{className:"col-md-8 mx-auto",style:{maxWidth:"900px",margin:"0 auto",textAlign:"left"},children:a.jsxs("div",{style:{fontSize:"18px",lineHeight:1.9},children:[a.jsxs("p",{style:{marginBottom:"1rem"},children:[a.jsx("strong",{children:"Qik Cloud Stack"}),", powered by Qik Innovations Private Limited, is your gateway to next-generation business automation. With over 50+ integrated AI-first applications, we help organizations streamline compliance, HR, legal, asset management, and more—trusted by 50,000+ businesses worldwide and delivering the best value for your money."]}),a.jsxs("p",{style:{marginBottom:"1rem"},children:["Founded in 2020, ",a.jsx("strong",{children:"Qik Innovations"})," is a global leader in technology solutions, specializing in Enterprise Managed Services, custom software, mobile and web app development. Our team of highly skilled engineers brings deep expertise in AI, ML, IoT, and cloud platforms, serving clients across BFSI, healthcare, retail, and telecom sectors."]}),a.jsx("p",{style:{marginBottom:"1rem"},children:"Our mission is to innovate, act, and deliver—empowering businesses to achieve more through intelligent automation and secure, scalable solutions. We pride ourselves on customer-centricity, proactive support, and a commitment to quality, driven by a systematic approach."}),a.jsx("p",{style:{marginBottom:"1rem"},children:"With our teams spread across the globe, we combine global reach with local expertise. Whether you’re a multinational or a growing startup, Qik Cloud Stack is your partner for AI first digital transformation."})]})})]})})}),Rh=()=>a.jsxs("div",{children:[a.jsx(Ja,{}),a.jsxs("section",{id:"qik-intro",className:"qik-intro hero-enhanced",children:[a.jsxs("div",{className:"hero-background",children:[a.jsx("div",{className:"hero-gradient-orb hero-orb-1"}),a.jsx("div",{className:"hero-gradient-orb hero-orb-2"}),a.jsx("div",{className:"hero-gradient-orb hero-orb-3"}),a.jsx("div",{className:"hero-gradient-orb hero-orb-4"}),a.jsx("div",{className:"hero-gradient-orb hero-orb-5"}),a.jsx("div",{className:"hero-particles"}),a.jsx("div",{className:"hero-particles-secondary"})]}),a.jsx("div",{className:"container hero-content",children:a.jsx("div",{className:"row align-items-center justify-content-center",children:a.jsx("div",{className:"col-lg-8 col-md-10 hero-text-section",children:a.jsx(Mh,{})})})})]}),a.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

    /* Modern Mobile Menu Styles */
    .mobile-menu-button {
      display: none;
      background: none;
      border: none;
      padding: 8px;
      cursor: pointer;
      z-index: 99998;
      transition: all 0.3s ease;
      border-radius: 8px;
    }

    .mobile-menu-button:hover {
      background: rgba(139, 92, 246, 0.1);
    }

    @media (max-width: 768px) {
      .mobile-menu-button {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    /* Modern Hamburger Icon */
    .hamburger-icon {
      width: 28px;
      height: 20px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .hamburger-icon span {
      display: block;
      height: 3px;
      width: 100%;
      background: var(--text-primary);
      border-radius: 2px;
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      transform-origin: center;
    }

    .hamburger-icon span:nth-child(1) {
      transform: translateY(0) rotate(0deg);
    }

    .hamburger-icon span:nth-child(2) {
      opacity: 1;
      transform: scaleX(1);
    }

    .hamburger-icon span:nth-child(3) {
      transform: translateY(0) rotate(0deg);
    }

    /* Active Hamburger Animation */
    .hamburger-icon.active span:nth-child(1) {
      transform: translateY(8.5px) rotate(45deg);
    }

    .hamburger-icon.active span:nth-child(2) {
      opacity: 0;
      transform: scaleX(0);
    }

    .hamburger-icon.active span:nth-child(3) {
      transform: translateY(-8.5px) rotate(-45deg);
    }

    /* Mobile Navigation Overlay */
    .mobile-nav-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(8px);
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeInOverlay 0.3s ease-out;
    }

    @keyframes fadeInOverlay {
      from {
        opacity: 0;
        backdrop-filter: blur(0px);
      }
      to {
        opacity: 1;
        backdrop-filter: blur(8px);
      }
    }

    /* Mobile Navigation Menu */
    .mobile-nav-menu {
      background: rgba(248, 250, 252, 0.98);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(139, 92, 246, 0.2);
      border-radius: 24px;
      padding: 0;
      margin: 20px;
      max-width: 400px;
      width: calc(100vw - 40px);
      box-shadow: 
        0 20px 60px rgba(139, 92, 246, 0.15),
        0 8px 32px rgba(0, 0, 0, 0.1);
      animation: slideInMenu 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      overflow: hidden;
    }

    @keyframes slideInMenu {
      from {
        transform: translateY(-30px) scale(0.95);
        opacity: 0;
      }
      to {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
    }

    /* Mobile Navigation Header */
    .mobile-nav-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 24px 28px 20px;
      border-bottom: 1px solid rgba(139, 92, 246, 0.1);
    }

    .mobile-nav-logo {
      height: 40px;
      width: auto;
    }

    .mobile-nav-close {
      background: rgba(139, 92, 246, 0.1);
      border: none;
      border-radius: 12px;
      padding: 8px;
      cursor: pointer;
      color: var(--text-primary);
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .mobile-nav-close:hover {
      background: rgba(139, 92, 246, 0.2);
      transform: rotate(90deg);
    }

    /* Mobile Navigation Links */
    .mobile-nav-links {
      padding: 24px 28px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .mobile-nav-link {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px 20px;
      color: var(--text-primary);
      text-decoration: none;
      border-radius: 16px;
      transition: all 0.3s ease;
      font-weight: 600;
      font-size: 1.1rem;
      position: relative;
      overflow: hidden;
    }

    .mobile-nav-link::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, 
        rgba(139, 92, 246, 0.1) 0%, 
        rgba(0, 212, 230, 0.1) 100%);
      transition: left 0.3s ease;
      z-index: 0;
    }

    .mobile-nav-link:hover::before {
      left: 0;
    }

    .mobile-nav-link:hover {
      color: var(--qik-purple);
      transform: translateX(8px);
      box-shadow: 0 8px 24px rgba(139, 92, 246, 0.15);
    }

    .nav-link-icon {
      font-size: 1.4rem;
      z-index: 1;
      position: relative;
    }

    .nav-link-text {
      z-index: 1;
      position: relative;
    }

    /* Mobile Navigation Footer */
    .mobile-nav-footer {
      padding: 20px 28px 28px;
      border-top: 1px solid rgba(139, 92, 246, 0.1);
    }

    .mobile-contact-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      width: 100%;
      padding: 16px 20px;
      background: linear-gradient(135deg, #8B5CF6 0%, #00D4E6 100%);
      color: white;
      text-decoration: none;
      border-radius: 16px;
      font-weight: 600;
      font-size: 1rem;
      transition: all 0.3s ease;
      box-shadow: 0 4px 16px rgba(139, 92, 246, 0.3);
    }

    .mobile-contact-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(139, 92, 246, 0.4);
      color: white;
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

    @media (min-width: 1200px) {
      .header-contact {
        display: block;
      }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .desktop-nav {
        display: none !important;
      }
      
      .mobile-menu-button {
        display: flex !important;
      }
      
      .header-contact {
        display: none !important;
      }
    }
`}}),a.jsx(eo,{})]}),Th=()=>{const[e,t]=j.useState({name:"",email:"",company:"",subject:"",message:""}),[n,r]=j.useState(!1),[i,l]=j.useState(null),o=c=>{const{name:u,value:m}=c.target;t(h=>({...h,[u]:m}))},s=async c=>{c.preventDefault(),r(!0),l(null);try{await new Promise(u=>setTimeout(u,2e3)),l("success"),t({name:"",email:"",company:"",subject:"",message:""})}catch{l("error")}finally{r(!1)}};return a.jsxs("div",{className:"contact-form-container",children:[a.jsxs("form",{onSubmit:s,className:"contact-form",children:[a.jsxs("div",{className:"form-header",children:[a.jsx("h3",{children:"Send us a message"}),a.jsx("p",{children:"Fill out the form below and we'll get back to you as soon as possible."})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"name",children:"Full Name *"}),a.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:o,required:!0,placeholder:"Your full name",className:"form-input"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"email",children:"Email Address *"}),a.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:o,required:!0,placeholder:"your.email@example.com",className:"form-input"})]})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"company",children:"Company"}),a.jsx("input",{type:"text",id:"company",name:"company",value:e.company,onChange:o,placeholder:"Your company name",className:"form-input"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"subject",children:"Subject *"}),a.jsxs("select",{id:"subject",name:"subject",value:e.subject,onChange:o,required:!0,className:"form-select",children:[a.jsx("option",{value:"",children:"Select a subject"}),a.jsx("option",{value:"general",children:"General Inquiry"}),a.jsx("option",{value:"demo",children:"Request a Demo"}),a.jsx("option",{value:"support",children:"Technical Support"}),a.jsx("option",{value:"partnership",children:"Partnership"}),a.jsx("option",{value:"pricing",children:"Pricing Information"}),a.jsx("option",{value:"other",children:"Other"})]})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"message",children:"Message *"}),a.jsx("textarea",{id:"message",name:"message",value:e.message,onChange:o,required:!0,rows:6,placeholder:"Tell us about your project, requirements, or any questions you have...",className:"form-textarea"})]}),a.jsx("button",{type:"submit",disabled:n,className:`submit-btn ${n?"submitting":""}`,children:n?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"spinner"}),a.jsx("span",{children:"Sending..."})]}):a.jsxs(a.Fragment,{children:[a.jsx("span",{children:"Send Message"}),a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M2 21L23 12L2 3V10L17 12L2 14V21Z"})})]})}),i==="success"&&a.jsxs("div",{className:"status-message success",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"})}),a.jsx("span",{children:"Message sent successfully! We'll get back to you soon."})]}),i==="error"&&a.jsxs("div",{className:"status-message error",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"})}),a.jsx("span",{children:"Failed to send message. Please try again."})]})]}),a.jsx("style",{dangerouslySetInnerHTML:{__html:`
            .contact-form-container {
              animation: slideInFromRight 1s ease-out;
            }

            .contact-form {
              background: rgba(255, 255, 255, 0.7);
              backdrop-filter: blur(10px);
              border-radius: 20px;
              padding: 2.5rem;
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
              border: 1px solid rgba(255, 255, 255, 0.2);
            }

            .form-header {
              text-align: center;
              margin-bottom: 2rem;
            }

            .form-header h3 {
              font-size: 1.75rem;
              font-weight: 700;
              color: var(--text-primary, #1e293b);
              margin-bottom: 0.5rem;
            }

            .form-header p {
              color: var(--text-secondary, #64748b);
              font-size: 0.95rem;
            }

            .form-row {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 1.5rem;
              margin-bottom: 1.5rem;
            }

            @media (max-width: 768px) {
              .form-row {
                grid-template-columns: 1fr;
                gap: 1rem;
                margin-bottom: 1rem;
              }

              .contact-form {
                padding: 1.5rem;
              }
            }

            .form-group {
              margin-bottom: 1.5rem;
            }

            .form-group:last-of-type {
              margin-bottom: 2rem;
            }

            .contact-form label {
              display: block;
              margin-bottom: 0.5rem;
              font-weight: 600;
              color: var(--text-primary, #1e293b);
              font-size: 0.9rem;
            }

            .form-input,
            .form-select,
            .form-textarea {
              width: 100%;
              padding: 0.875rem 1rem;
              border: 2px solid rgba(203, 213, 225, 0.5);
              border-radius: 12px;
              font-size: 0.95rem;
              transition: all 0.3s ease;
              background: rgba(255, 255, 255, 0.8);
              backdrop-filter: blur(5px);
              box-sizing: border-box;
            }

            .form-input:focus,
            .form-select:focus,
            .form-textarea:focus {
              outline: none;
              border-color: #00D4E6;
              box-shadow: 0 0 0 3px rgba(0, 212, 230, 0.1);
              background: rgba(255, 255, 255, 0.95);
            }

            .form-textarea {
              resize: vertical;
              min-height: 120px;
              font-family: inherit;
            }

            .submit-btn {
              width: 100%;
              padding: 1rem 2rem;
              background: linear-gradient(135deg, #00D4E6 0%, #4F46E5 100%);
              color: white;
              border: none;
              border-radius: 12px;
              font-size: 1rem;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.3s ease;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.5rem;
              min-height: 50px;
            }

            .submit-btn:hover:not(:disabled) {
              transform: translateY(-2px);
              box-shadow: 0 8px 25px rgba(0, 212, 230, 0.3);
            }

            .submit-btn:disabled {
              opacity: 0.8;
              cursor: not-allowed;
              transform: none;
            }

            .submit-btn.submitting {
              background: linear-gradient(135deg, #00D4E6 0%, #4F46E5 100%);
              opacity: 0.9;
            }

            .spinner {
              width: 18px;
              height: 18px;
              border: 2px solid rgba(255, 255, 255, 0.3);
              border-top: 2px solid white;
              border-radius: 50%;
              animation: spin 1s linear infinite;
            }

            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }

            .status-message {
              margin-top: 1rem;
              padding: 0.875rem 1rem;
              border-radius: 10px;
              display: flex;
              align-items: center;
              gap: 0.5rem;
              font-size: 0.9rem;
              font-weight: 500;
            }

            .status-message.success {
              background: rgba(34, 197, 94, 0.1);
              color: #16a34a;
              border: 1px solid rgba(34, 197, 94, 0.2);
            }

            .status-message.error {
              background: rgba(239, 68, 68, 0.1);
              color: #dc2626;
              border: 1px solid rgba(239, 68, 68, 0.2);
            }

            @keyframes slideInFromRight {
              0% { opacity: 0; transform: translateX(30px); }
              100% { opacity: 1; transform: translateX(0); }
            }
          `}})]})},Fh=()=>a.jsxs("div",{children:[a.jsx(Ja,{}),a.jsxs("section",{id:"qik-contact",className:"qik-contact hero-enhanced",children:[a.jsxs("div",{className:"hero-background",children:[a.jsx("div",{className:"hero-gradient-orb hero-orb-1"}),a.jsx("div",{className:"hero-gradient-orb hero-orb-2"}),a.jsx("div",{className:"hero-gradient-orb hero-orb-3"}),a.jsx("div",{className:"hero-gradient-orb hero-orb-4"}),a.jsx("div",{className:"hero-gradient-orb hero-orb-5"}),a.jsx("div",{className:"hero-particles"}),a.jsx("div",{className:"hero-particles-secondary"})]}),a.jsx("div",{className:"container hero-content",children:a.jsx("div",{className:"row align-items-center justify-content-center",children:a.jsxs("div",{className:"col-lg-10 col-md-12",children:[a.jsxs("div",{className:"contact-header text-center mb-5",children:[a.jsx("h1",{className:"contact-title",children:"Get In Touch"}),a.jsx("p",{className:"contact-subtitle",children:"Ready to transform your business with AI-powered solutions? We'd love to hear from you and discuss how Qik.ai can help you achieve your goals."})]}),a.jsxs("div",{className:"row",children:[a.jsx("div",{className:"col-lg-5 col-md-6 mb-4",children:a.jsxs("div",{className:"contact-info",children:[a.jsxs("div",{className:"contact-info-item",children:[a.jsx("div",{className:"contact-icon",children:a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"})})}),a.jsxs("div",{className:"contact-details",children:[a.jsx("h4",{children:"Email Us"}),a.jsx("p",{children:"hello@qik.ai"}),a.jsx("p",{children:"We typically respond within 24 hours"})]})]}),a.jsxs("div",{className:"contact-info-item",children:[a.jsx("div",{className:"contact-icon",children:a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"})})}),a.jsxs("div",{className:"contact-details",children:[a.jsx("h4",{children:"Office"}),a.jsx("p",{children:"Remote-first company"}),a.jsx("p",{children:"Serving clients globally"})]})]}),a.jsxs("div",{className:"contact-info-item",children:[a.jsx("div",{className:"contact-icon",children:a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22S22 17.52 22 12S17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"})})}),a.jsxs("div",{className:"contact-details",children:[a.jsx("h4",{children:"Support"}),a.jsx("p",{children:"24/7 Customer Support"}),a.jsx("p",{children:"Technical assistance available"})]})]})]})}),a.jsx("div",{className:"col-lg-7 col-md-6",children:a.jsx(Th,{})})]})]})})})]}),a.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

            /* Modern Mobile Menu Styles */
            .mobile-menu-button {
              display: none;
              background: none;
              border: none;
              padding: 8px;
              cursor: pointer;
              z-index: 99998;
              transition: all 0.3s ease;
              border-radius: 8px;
            }

            .mobile-menu-button:hover {
              background: rgba(139, 92, 246, 0.1);
            }

            @media (max-width: 768px) {
              .mobile-menu-button {
                display: flex;
                align-items: center;
                justify-content: center;
              }
            }

            /* Modern Hamburger Icon */
            .hamburger-icon {
              width: 28px;
              height: 20px;
              position: relative;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }

            .hamburger-icon span {
              display: block;
              height: 3px;
              width: 100%;
              background: var(--text-primary);
              border-radius: 2px;
              transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
              transform-origin: center;
            }

            .hamburger-icon span:nth-child(1) {
              transform: translateY(0) rotate(0deg);
            }

            .hamburger-icon span:nth-child(2) {
              opacity: 1;
              transform: scaleX(1);
            }

            .hamburger-icon span:nth-child(3) {
              transform: translateY(0) rotate(0deg);
            }

            /* Active Hamburger Animation */
            .hamburger-icon.active span:nth-child(1) {
              transform: translateY(8.5px) rotate(45deg);
            }

            .hamburger-icon.active span:nth-child(2) {
              opacity: 0;
              transform: scaleX(0);
            }

            .hamburger-icon.active span:nth-child(3) {
              transform: translateY(-8.5px) rotate(-45deg);
            }

            /* Mobile Navigation Overlay */
            .mobile-nav-overlay {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(0, 0, 0, 0.6);
              backdrop-filter: blur(8px);
              z-index: 99999;
              display: flex;
              align-items: center;
              justify-content: center;
              animation: fadeInOverlay 0.3s ease-out;
            }

            @keyframes fadeInOverlay {
              from {
                opacity: 0;
                backdrop-filter: blur(0px);
              }
              to {
                opacity: 1;
                backdrop-filter: blur(8px);
              }
            }

            /* Mobile Navigation Menu */
            .mobile-nav-menu {
              background: rgba(248, 250, 252, 0.98);
              backdrop-filter: blur(20px);
              border: 1px solid rgba(139, 92, 246, 0.2);
              border-radius: 24px;
              padding: 0;
              margin: 20px;
              max-width: 400px;
              width: calc(100vw - 40px);
              box-shadow: 
                0 20px 60px rgba(139, 92, 246, 0.15),
                0 8px 32px rgba(0, 0, 0, 0.1);
              animation: slideInMenu 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
              overflow: hidden;
            }

            @keyframes slideInMenu {
              from {
                transform: translateY(-30px) scale(0.95);
                opacity: 0;
              }
              to {
                transform: translateY(0) scale(1);
                opacity: 1;
              }
            }

            /* Mobile Navigation Header */
            .mobile-nav-header {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 24px 28px 20px;
              border-bottom: 1px solid rgba(139, 92, 246, 0.1);
            }

            .mobile-nav-logo {
              height: 40px;
              width: auto;
            }

            .mobile-nav-close {
              background: rgba(139, 92, 246, 0.1);
              border: none;
              border-radius: 12px;
              padding: 8px;
              cursor: pointer;
              color: var(--text-primary);
              transition: all 0.3s ease;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .mobile-nav-close:hover {
              background: rgba(139, 92, 246, 0.2);
              transform: rotate(90deg);
            }

            /* Mobile Navigation Links */
            .mobile-nav-links {
              padding: 24px 28px;
              display: flex;
              flex-direction: column;
              gap: 8px;
            }

            .mobile-nav-link {
              display: flex;
              align-items: center;
              gap: 16px;
              padding: 16px 20px;
              color: var(--text-primary);
              text-decoration: none;
              border-radius: 16px;
              transition: all 0.3s ease;
              font-weight: 600;
              font-size: 1.1rem;
              position: relative;
              overflow: hidden;
            }

            .mobile-nav-link::before {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(135deg, 
                rgba(139, 92, 246, 0.1) 0%, 
                rgba(0, 212, 230, 0.1) 100%);
              transition: left 0.3s ease;
              z-index: 0;
            }

            .mobile-nav-link:hover::before {
              left: 0;
            }

            .mobile-nav-link:hover {
              color: var(--qik-purple);
              transform: translateX(8px);
              box-shadow: 0 8px 24px rgba(139, 92, 246, 0.15);
            }

            .nav-link-icon {
              font-size: 1.4rem;
              z-index: 1;
              position: relative;
            }

            .nav-link-text {
              z-index: 1;
              position: relative;
            }

            /* Mobile Navigation Footer */
            .mobile-nav-footer {
              padding: 20px 28px 28px;
              border-top: 1px solid rgba(139, 92, 246, 0.1);
            }

            .mobile-contact-btn {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 12px;
              width: 100%;
              padding: 16px 20px;
              background: linear-gradient(135deg, #8B5CF6 0%, #00D4E6 100%);
              color: white;
              text-decoration: none;
              border-radius: 16px;
              font-weight: 600;
              font-size: 1rem;
              transition: all 0.3s ease;
              box-shadow: 0 4px 16px rgba(139, 92, 246, 0.3);
            }

            .mobile-contact-btn:hover {
              transform: translateY(-2px);
              box-shadow: 0 8px 24px rgba(139, 92, 246, 0.4);
              color: white;
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

            /* Responsive Design */
            @media (max-width: 768px) {
              .desktop-nav {
                display: none !important;
              }
              
              .mobile-menu-button {
                display: flex !important;
              }
              
              .header-contact {
                display: none !important;
              }
            }

            @media (min-width: 1200px) {
              .header-contact {
                display: block;
              }
            }

            /* Contact Page Styles */
            .qik-contact {
              min-height: 100vh;
              position: relative;
              overflow: hidden;
              background: linear-gradient(135deg, 
                rgba(248, 250, 252, 0.95) 0%,
                rgba(248, 250, 252, 0.8) 50%,
                rgba(239, 246, 255, 0.9) 100%);
              display: flex;
              align-items: center;
              padding: 140px 0 80px;
            }

            @media (max-width: 600px) {
              .qik-contact {
                padding-top: 170px;
              }
            }

            .contact-header {
              animation: slideInFromTop 1s ease-out;
            }

            .contact-title {
              font-size: 3.5rem;
              font-weight: 800;
              background: linear-gradient(135deg, #00D4E6 0%, #4F46E5 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              margin-bottom: 1rem;
              line-height: 1.2;
            }

            @media (max-width: 768px) {
              .contact-title {
                font-size: 2.5rem;
              }
            }

            .contact-subtitle {
              font-size: 1.25rem;
              color: var(--text-secondary, #64748b);
              max-width: 600px;
              margin: 0 auto 2rem;
              line-height: 1.6;
            }

            .contact-info {
              background: rgba(255, 255, 255, 0.7);
              backdrop-filter: blur(10px);
              border-radius: 20px;
              padding: 2rem;
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
              border: 1px solid rgba(255, 255, 255, 0.2);
              animation: slideInFromLeft 1s ease-out;
            }

            .contact-info-item {
              display: flex;
              align-items: flex-start;
              gap: 1.5rem;
              margin-bottom: 2rem;
            }

            .contact-info-item:last-child {
              margin-bottom: 0;
            }

            .contact-icon {
              flex-shrink: 0;
              width: 50px;
              height: 50px;
              background: linear-gradient(135deg, #00D4E6 0%, #4F46E5 100%);
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
            }

            .contact-details h4 {
              font-size: 1.25rem;
              font-weight: 700;
              color: var(--text-primary, #1e293b);
              margin-bottom: 0.5rem;
            }

            .contact-details p {
              font-size: 0.95rem;
              color: var(--text-secondary, #64748b);
              margin-bottom: 0.25rem;
              line-height: 1.5;
            }

            .contact-details p:last-child {
              margin-bottom: 0;
            }

            /* Animations */
            @keyframes slideInFromTop {
              0% { opacity: 0; transform: translateY(-30px); }
              100% { opacity: 1; transform: translateY(0); }
            }

            @keyframes slideInFromLeft {
              0% { opacity: 0; transform: translateX(-30px); }
              100% { opacity: 1; transform: translateX(0); }
            }

            /* Reuse existing hero background styles */
            .hero-background {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              z-index: 0;
            }

            .hero-content {
              position: relative;
              z-index: 3;
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
          `}}),a.jsx(eo,{})]});class Oh extends j.Component{render(){return a.jsx(bh,{basename:"/",children:a.jsxs("div",{children:[a.jsx("div",{style:{display:"none"},children:a.jsx(Lh,{})}),a.jsxs(fh,{children:[a.jsx(_n,{path:"/",element:a.jsx(_h,{})}),a.jsx(_n,{path:"/Business",element:a.jsx(Ih,{})}),a.jsx(_n,{path:"/about",element:a.jsx(Rh,{})}),a.jsx(_n,{path:"/contact",element:a.jsx(Fh,{})})]})]})})}}const Dh=document.getElementById("root"),Bh=Mc(Dh);Bh.render(a.jsx(_s.StrictMode,{children:a.jsx(Oh,{})}));
