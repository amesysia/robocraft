(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function NE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lv={exports:{}},pc={},Ov={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ta=Symbol.for("react.element"),RE=Symbol.for("react.portal"),bE=Symbol.for("react.fragment"),PE=Symbol.for("react.strict_mode"),jE=Symbol.for("react.profiler"),DE=Symbol.for("react.provider"),VE=Symbol.for("react.context"),LE=Symbol.for("react.forward_ref"),OE=Symbol.for("react.suspense"),ME=Symbol.for("react.memo"),FE=Symbol.for("react.lazy"),bm=Symbol.iterator;function UE(t){return t===null||typeof t!="object"?null:(t=bm&&t[bm]||t["@@iterator"],typeof t=="function"?t:null)}var Mv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fv=Object.assign,Uv={};function gs(t,e,n){this.props=t,this.context=e,this.refs=Uv,this.updater=n||Mv}gs.prototype.isReactComponent={};gs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};gs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zv(){}zv.prototype=gs.prototype;function zh(t,e,n){this.props=t,this.context=e,this.refs=Uv,this.updater=n||Mv}var Kh=zh.prototype=new zv;Kh.constructor=zh;Fv(Kh,gs.prototype);Kh.isPureReactComponent=!0;var Pm=Array.isArray,Kv=Object.prototype.hasOwnProperty,Bh={current:null},Bv={key:!0,ref:!0,__self:!0,__source:!0};function $v(t,e,n){var r,i={},s=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Kv.call(e,r)&&!Bv.hasOwnProperty(r)&&(i[r]=e[r]);var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){for(var d=Array(c),h=0;h<c;h++)d[h]=arguments[h+2];i.children=d}if(t&&t.defaultProps)for(r in c=t.defaultProps,c)i[r]===void 0&&(i[r]=c[r]);return{$$typeof:ta,type:t,key:s,ref:a,props:i,_owner:Bh.current}}function zE(t,e){return{$$typeof:ta,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $h(t){return typeof t=="object"&&t!==null&&t.$$typeof===ta}function KE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jm=/\/+/g;function Eu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?KE(""+t.key):e.toString(36)}function tl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case ta:case RE:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+Eu(a,0):r,Pm(i)?(n="",t!=null&&(n=t.replace(jm,"$&/")+"/"),tl(i,e,n,"",function(h){return h})):i!=null&&($h(i)&&(i=zE(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(jm,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",Pm(t))for(var c=0;c<t.length;c++){s=t[c];var d=r+Eu(s,c);a+=tl(s,e,n,d,i)}else if(d=UE(t),typeof d=="function")for(t=d.call(t),c=0;!(s=t.next()).done;)s=s.value,d=r+Eu(s,c++),a+=tl(s,e,n,d,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ba(t,e,n){if(t==null)return t;var r=[],i=0;return tl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function BE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pt={current:null},nl={transition:null},$E={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:nl,ReactCurrentOwner:Bh};function Wv(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:ba,forEach:function(t,e,n){ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ba(t,function(){e++}),e},toArray:function(t){return ba(t,function(e){return e})||[]},only:function(t){if(!$h(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};de.Component=gs;de.Fragment=bE;de.Profiler=jE;de.PureComponent=zh;de.StrictMode=PE;de.Suspense=OE;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$E;de.act=Wv;de.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Fv({},t.props),i=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Bh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(d in e)Kv.call(e,d)&&!Bv.hasOwnProperty(d)&&(r[d]=e[d]===void 0&&c!==void 0?c[d]:e[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){c=Array(d);for(var h=0;h<d;h++)c[h]=arguments[h+2];r.children=c}return{$$typeof:ta,type:t.type,key:i,ref:s,props:r,_owner:a}};de.createContext=function(t){return t={$$typeof:VE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:DE,_context:t},t.Consumer=t};de.createElement=$v;de.createFactory=function(t){var e=$v.bind(null,t);return e.type=t,e};de.createRef=function(){return{current:null}};de.forwardRef=function(t){return{$$typeof:LE,render:t}};de.isValidElement=$h;de.lazy=function(t){return{$$typeof:FE,_payload:{_status:-1,_result:t},_init:BE}};de.memo=function(t,e){return{$$typeof:ME,type:t,compare:e===void 0?null:e}};de.startTransition=function(t){var e=nl.transition;nl.transition={};try{t()}finally{nl.transition=e}};de.unstable_act=Wv;de.useCallback=function(t,e){return pt.current.useCallback(t,e)};de.useContext=function(t){return pt.current.useContext(t)};de.useDebugValue=function(){};de.useDeferredValue=function(t){return pt.current.useDeferredValue(t)};de.useEffect=function(t,e){return pt.current.useEffect(t,e)};de.useId=function(){return pt.current.useId()};de.useImperativeHandle=function(t,e,n){return pt.current.useImperativeHandle(t,e,n)};de.useInsertionEffect=function(t,e){return pt.current.useInsertionEffect(t,e)};de.useLayoutEffect=function(t,e){return pt.current.useLayoutEffect(t,e)};de.useMemo=function(t,e){return pt.current.useMemo(t,e)};de.useReducer=function(t,e,n){return pt.current.useReducer(t,e,n)};de.useRef=function(t){return pt.current.useRef(t)};de.useState=function(t){return pt.current.useState(t)};de.useSyncExternalStore=function(t,e,n){return pt.current.useSyncExternalStore(t,e,n)};de.useTransition=function(){return pt.current.useTransition()};de.version="18.3.1";Ov.exports=de;var H=Ov.exports;const WE=NE(H);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qE=H,GE=Symbol.for("react.element"),HE=Symbol.for("react.fragment"),QE=Object.prototype.hasOwnProperty,YE=qE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,XE={key:!0,ref:!0,__self:!0,__source:!0};function qv(t,e,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)QE.call(e,r)&&!XE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:GE,type:t,key:s,ref:a,props:i,_owner:YE.current}}pc.Fragment=HE;pc.jsx=qv;pc.jsxs=qv;Lv.exports=pc;var u=Lv.exports,Td={},Gv={exports:{}},Rt={},Hv={exports:{}},Qv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,G){var J=z.length;z.push(G);e:for(;0<J;){var re=J-1>>>1,se=z[re];if(0<i(se,G))z[re]=G,z[J]=se,J=re;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],J=z.pop();if(J!==G){z[0]=J;e:for(var re=0,se=z.length,oe=se>>>1;re<oe;){var me=2*(re+1)-1,rn=z[me],zt=me+1,Wn=z[zt];if(0>i(rn,J))zt<se&&0>i(Wn,rn)?(z[re]=Wn,z[zt]=J,re=zt):(z[re]=rn,z[me]=J,re=me);else if(zt<se&&0>i(Wn,J))z[re]=Wn,z[zt]=J,re=zt;else break e}}return G}function i(z,G){var J=z.sortIndex-G.sortIndex;return J!==0?J:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,c=a.now();t.unstable_now=function(){return a.now()-c}}var d=[],h=[],p=1,g=null,_=3,N=!1,R=!1,P=!1,V=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(z){for(var G=n(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=z)r(h),G.sortIndex=G.expirationTime,e(d,G);else break;G=n(h)}}function j(z){if(P=!1,b(z),!R)if(n(d)!==null)R=!0,Y(A);else{var G=n(h);G!==null&&te(j,G.startTime-z)}}function A(z,G){R=!1,P&&(P=!1,x(v),v=-1),N=!0;var J=_;try{for(b(G),g=n(d);g!==null&&(!(g.expirationTime>G)||z&&!S());){var re=g.callback;if(typeof re=="function"){g.callback=null,_=g.priorityLevel;var se=re(g.expirationTime<=G);G=t.unstable_now(),typeof se=="function"?g.callback=se:g===n(d)&&r(d),b(G)}else r(d);g=n(d)}if(g!==null)var oe=!0;else{var me=n(h);me!==null&&te(j,me.startTime-G),oe=!1}return oe}finally{g=null,_=J,N=!1}}var F=!1,y=null,v=-1,I=5,E=-1;function S(){return!(t.unstable_now()-E<I)}function C(){if(y!==null){var z=t.unstable_now();E=z;var G=!0;try{G=y(!0,z)}finally{G?w():(F=!1,y=null)}}else F=!1}var w;if(typeof k=="function")w=function(){k(C)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,K=B.port2;B.port1.onmessage=C,w=function(){K.postMessage(null)}}else w=function(){V(C,0)};function Y(z){y=z,F||(F=!0,w())}function te(z,G){v=V(function(){z(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){R||N||(R=!0,Y(A))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(d)},t.unstable_next=function(z){switch(_){case 1:case 2:case 3:var G=3;break;default:G=_}var J=_;_=G;try{return z()}finally{_=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=_;_=z;try{return G()}finally{_=J}},t.unstable_scheduleCallback=function(z,G,J){var re=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?re+J:re):J=re,z){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=J+se,z={id:p++,callback:G,priorityLevel:z,startTime:J,expirationTime:se,sortIndex:-1},J>re?(z.sortIndex=J,e(h,z),n(d)===null&&z===n(h)&&(P?(x(v),v=-1):P=!0,te(j,J-re))):(z.sortIndex=se,e(d,z),R||N||(R=!0,Y(A))),z},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(z){var G=_;return function(){var J=_;_=G;try{return z.apply(this,arguments)}finally{_=J}}}})(Qv);Hv.exports=Qv;var JE=Hv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZE=H,Nt=JE;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yv=new Set,Ao={};function gi(t,e){rs(t,e),rs(t+"Capture",e)}function rs(t,e){for(Ao[t]=e,t=0;t<e.length;t++)Yv.add(e[t])}var Vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wd=Object.prototype.hasOwnProperty,eI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dm={},Vm={};function tI(t){return wd.call(Vm,t)?!0:wd.call(Dm,t)?!1:eI.test(t)?Vm[t]=!0:(Dm[t]=!0,!1)}function nI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function rI(t,e,n,r){if(e===null||typeof e>"u"||nI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mt(t,e,n,r,i,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Je[t]=new mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Je[e]=new mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Je[t]=new mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Je[t]=new mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Je[t]=new mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Je[t]=new mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Je[t]=new mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Je[t]=new mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Je[t]=new mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wh=/[\-:]([a-z])/g;function qh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wh,qh);Je[e]=new mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wh,qh);Je[e]=new mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wh,qh);Je[e]=new mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Je[t]=new mt(t,1,!1,t.toLowerCase(),null,!1,!1)});Je.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Je[t]=new mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gh(t,e,n,r){var i=Je.hasOwnProperty(e)?Je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rI(e,n,i,r)&&(n=null),r||i===null?tI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Bn=ZE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pa=Symbol.for("react.element"),bi=Symbol.for("react.portal"),Pi=Symbol.for("react.fragment"),Hh=Symbol.for("react.strict_mode"),Ed=Symbol.for("react.profiler"),Xv=Symbol.for("react.provider"),Jv=Symbol.for("react.context"),Qh=Symbol.for("react.forward_ref"),Id=Symbol.for("react.suspense"),kd=Symbol.for("react.suspense_list"),Yh=Symbol.for("react.memo"),tr=Symbol.for("react.lazy"),Zv=Symbol.for("react.offscreen"),Lm=Symbol.iterator;function Ks(t){return t===null||typeof t!="object"?null:(t=Lm&&t[Lm]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,Iu;function eo(t){if(Iu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Iu=e&&e[1]||""}return`
`+Iu+t}var ku=!1;function Su(t,e){if(!t||ku)return"";ku=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,c=s.length-1;1<=a&&0<=c&&i[a]!==s[c];)c--;for(;1<=a&&0<=c;a--,c--)if(i[a]!==s[c]){if(a!==1||c!==1)do if(a--,c--,0>c||i[a]!==s[c]){var d=`
`+i[a].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=a&&0<=c);break}}}finally{ku=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?eo(t):""}function iI(t){switch(t.tag){case 5:return eo(t.type);case 16:return eo("Lazy");case 13:return eo("Suspense");case 19:return eo("SuspenseList");case 0:case 2:case 15:return t=Su(t.type,!1),t;case 11:return t=Su(t.type.render,!1),t;case 1:return t=Su(t.type,!0),t;default:return""}}function Sd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Pi:return"Fragment";case bi:return"Portal";case Ed:return"Profiler";case Hh:return"StrictMode";case Id:return"Suspense";case kd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Jv:return(t.displayName||"Context")+".Consumer";case Xv:return(t._context.displayName||"Context")+".Provider";case Qh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yh:return e=t.displayName||null,e!==null?e:Sd(t.type)||"Memo";case tr:e=t._payload,t=t._init;try{return Sd(t(e))}catch{}}return null}function sI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sd(e);case 8:return e===Hh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function e_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function oI(t){var e=e_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ja(t){t._valueTracker||(t._valueTracker=oI(t))}function t_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=e_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xd(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Om(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function n_(t,e){e=e.checked,e!=null&&Gh(t,"checked",e,!1)}function Ad(t,e){n_(t,e);var n=kr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cd(t,e.type,kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cd(t,e,n){(e!=="number"||kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var to=Array.isArray;function $i(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+kr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Nd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(to(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:kr(n)}}function r_(t,e){var n=kr(e.value),r=kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Um(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function i_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?i_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Da,s_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Da=Da||document.createElement("div"),Da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Co(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},aI=["Webkit","ms","Moz","O"];Object.keys(uo).forEach(function(t){aI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),uo[e]=uo[t]})});function o_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||uo.hasOwnProperty(t)&&uo[t]?(""+e).trim():e+"px"}function a_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=o_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var lI=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bd(t,e){if(e){if(lI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Pd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jd=null;function Xh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dd=null,Wi=null,qi=null;function zm(t){if(t=ia(t)){if(typeof Dd!="function")throw Error(U(280));var e=t.stateNode;e&&(e=_c(e),Dd(t.stateNode,t.type,e))}}function l_(t){Wi?qi?qi.push(t):qi=[t]:Wi=t}function c_(){if(Wi){var t=Wi,e=qi;if(qi=Wi=null,zm(t),e)for(t=0;t<e.length;t++)zm(e[t])}}function u_(t,e){return t(e)}function d_(){}var xu=!1;function h_(t,e,n){if(xu)return t(e,n);xu=!0;try{return u_(t,e,n)}finally{xu=!1,(Wi!==null||qi!==null)&&(d_(),c_())}}function No(t,e){var n=t.stateNode;if(n===null)return null;var r=_c(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Vd=!1;if(Vn)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){Vd=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{Vd=!1}function cI(t,e,n,r,i,s,a,c,d){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(p){this.onError(p)}}var ho=!1,Sl=null,xl=!1,Ld=null,uI={onError:function(t){ho=!0,Sl=t}};function dI(t,e,n,r,i,s,a,c,d){ho=!1,Sl=null,cI.apply(uI,arguments)}function hI(t,e,n,r,i,s,a,c,d){if(dI.apply(this,arguments),ho){if(ho){var h=Sl;ho=!1,Sl=null}else throw Error(U(198));xl||(xl=!0,Ld=h)}}function yi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function f_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Km(t){if(yi(t)!==t)throw Error(U(188))}function fI(t){var e=t.alternate;if(!e){if(e=yi(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Km(i),t;if(s===r)return Km(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,c=i.child;c;){if(c===n){a=!0,n=i,r=s;break}if(c===r){a=!0,r=i,n=s;break}c=c.sibling}if(!a){for(c=s.child;c;){if(c===n){a=!0,n=s,r=i;break}if(c===r){a=!0,r=s,n=i;break}c=c.sibling}if(!a)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function p_(t){return t=fI(t),t!==null?m_(t):null}function m_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=m_(t);if(e!==null)return e;t=t.sibling}return null}var g_=Nt.unstable_scheduleCallback,Bm=Nt.unstable_cancelCallback,pI=Nt.unstable_shouldYield,mI=Nt.unstable_requestPaint,Ve=Nt.unstable_now,gI=Nt.unstable_getCurrentPriorityLevel,Jh=Nt.unstable_ImmediatePriority,y_=Nt.unstable_UserBlockingPriority,Al=Nt.unstable_NormalPriority,yI=Nt.unstable_LowPriority,v_=Nt.unstable_IdlePriority,mc=null,fn=null;function vI(t){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(mc,t,void 0,(t.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:wI,_I=Math.log,TI=Math.LN2;function wI(t){return t>>>=0,t===0?32:31-(_I(t)/TI|0)|0}var Va=64,La=4194304;function no(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Cl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var c=a&~i;c!==0?r=no(c):(s&=a,s!==0&&(r=no(s)))}else a=n&~i,a!==0?r=no(a):s!==0&&(r=no(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Gt(e),i=1<<n,r|=t[n],e&=~i;return r}function EI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function II(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Gt(s),c=1<<a,d=i[a];d===-1?(!(c&n)||c&r)&&(i[a]=EI(c,e)):d<=e&&(t.expiredLanes|=c),s&=~c}}function Od(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function __(){var t=Va;return Va<<=1,!(Va&4194240)&&(Va=64),t}function Au(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function na(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gt(e),t[e]=n}function kI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Gt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Zh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Gt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ye=0;function T_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var w_,ef,E_,I_,k_,Md=!1,Oa=[],dr=null,hr=null,fr=null,Ro=new Map,bo=new Map,rr=[],SI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $m(t,e){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":Ro.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(e.pointerId)}}function $s(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ia(e),e!==null&&ef(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function xI(t,e,n,r,i){switch(e){case"focusin":return dr=$s(dr,t,e,n,r,i),!0;case"dragenter":return hr=$s(hr,t,e,n,r,i),!0;case"mouseover":return fr=$s(fr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ro.set(s,$s(Ro.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,bo.set(s,$s(bo.get(s)||null,t,e,n,r,i)),!0}return!1}function S_(t){var e=Hr(t.target);if(e!==null){var n=yi(e);if(n!==null){if(e=n.tag,e===13){if(e=f_(n),e!==null){t.blockedOn=e,k_(t.priority,function(){E_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);jd=r,n.target.dispatchEvent(r),jd=null}else return e=ia(n),e!==null&&ef(e),t.blockedOn=n,!1;e.shift()}return!0}function Wm(t,e,n){rl(t)&&n.delete(e)}function AI(){Md=!1,dr!==null&&rl(dr)&&(dr=null),hr!==null&&rl(hr)&&(hr=null),fr!==null&&rl(fr)&&(fr=null),Ro.forEach(Wm),bo.forEach(Wm)}function Ws(t,e){t.blockedOn===e&&(t.blockedOn=null,Md||(Md=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,AI)))}function Po(t){function e(i){return Ws(i,t)}if(0<Oa.length){Ws(Oa[0],t);for(var n=1;n<Oa.length;n++){var r=Oa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(dr!==null&&Ws(dr,t),hr!==null&&Ws(hr,t),fr!==null&&Ws(fr,t),Ro.forEach(e),bo.forEach(e),n=0;n<rr.length;n++)r=rr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)S_(n),n.blockedOn===null&&rr.shift()}var Gi=Bn.ReactCurrentBatchConfig,Nl=!0;function CI(t,e,n,r){var i=ye,s=Gi.transition;Gi.transition=null;try{ye=1,tf(t,e,n,r)}finally{ye=i,Gi.transition=s}}function NI(t,e,n,r){var i=ye,s=Gi.transition;Gi.transition=null;try{ye=4,tf(t,e,n,r)}finally{ye=i,Gi.transition=s}}function tf(t,e,n,r){if(Nl){var i=Fd(t,e,n,r);if(i===null)Ou(t,e,r,Rl,n),$m(t,r);else if(xI(i,t,e,n,r))r.stopPropagation();else if($m(t,r),e&4&&-1<SI.indexOf(t)){for(;i!==null;){var s=ia(i);if(s!==null&&w_(s),s=Fd(t,e,n,r),s===null&&Ou(t,e,r,Rl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ou(t,e,r,null,n)}}var Rl=null;function Fd(t,e,n,r){if(Rl=null,t=Xh(r),t=Hr(t),t!==null)if(e=yi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=f_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Rl=t,null}function x_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gI()){case Jh:return 1;case y_:return 4;case Al:case yI:return 16;case v_:return 536870912;default:return 16}default:return 16}}var cr=null,nf=null,il=null;function A_(){if(il)return il;var t,e=nf,n=e.length,r,i="value"in cr?cr.value:cr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return il=i.slice(t,1<r?1-r:void 0)}function sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ma(){return!0}function qm(){return!1}function bt(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(n=t[c],this[c]=n?n(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ma:qm,this.isPropagationStopped=qm,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ma)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ma)},persist:function(){},isPersistent:Ma}),e}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rf=bt(ys),ra=Ne({},ys,{view:0,detail:0}),RI=bt(ra),Cu,Nu,qs,gc=Ne({},ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qs&&(qs&&t.type==="mousemove"?(Cu=t.screenX-qs.screenX,Nu=t.screenY-qs.screenY):Nu=Cu=0,qs=t),Cu)},movementY:function(t){return"movementY"in t?t.movementY:Nu}}),Gm=bt(gc),bI=Ne({},gc,{dataTransfer:0}),PI=bt(bI),jI=Ne({},ra,{relatedTarget:0}),Ru=bt(jI),DI=Ne({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),VI=bt(DI),LI=Ne({},ys,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),OI=bt(LI),MI=Ne({},ys,{data:0}),Hm=bt(MI),FI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function KI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=zI[t])?!!e[t]:!1}function sf(){return KI}var BI=Ne({},ra,{key:function(t){if(t.key){var e=FI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?UI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sf,charCode:function(t){return t.type==="keypress"?sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$I=bt(BI),WI=Ne({},gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qm=bt(WI),qI=Ne({},ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sf}),GI=bt(qI),HI=Ne({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),QI=bt(HI),YI=Ne({},gc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),XI=bt(YI),JI=[9,13,27,32],of=Vn&&"CompositionEvent"in window,fo=null;Vn&&"documentMode"in document&&(fo=document.documentMode);var ZI=Vn&&"TextEvent"in window&&!fo,C_=Vn&&(!of||fo&&8<fo&&11>=fo),Ym=" ",Xm=!1;function N_(t,e){switch(t){case"keyup":return JI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function R_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ji=!1;function ek(t,e){switch(t){case"compositionend":return R_(e);case"keypress":return e.which!==32?null:(Xm=!0,Ym);case"textInput":return t=e.data,t===Ym&&Xm?null:t;default:return null}}function tk(t,e){if(ji)return t==="compositionend"||!of&&N_(t,e)?(t=A_(),il=nf=cr=null,ji=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return C_&&e.locale!=="ko"?null:e.data;default:return null}}var nk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nk[t.type]:e==="textarea"}function b_(t,e,n,r){l_(r),e=bl(e,"onChange"),0<e.length&&(n=new rf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var po=null,jo=null;function rk(t){K_(t,0)}function yc(t){var e=Li(t);if(t_(e))return t}function ik(t,e){if(t==="change")return e}var P_=!1;if(Vn){var bu;if(Vn){var Pu="oninput"in document;if(!Pu){var Zm=document.createElement("div");Zm.setAttribute("oninput","return;"),Pu=typeof Zm.oninput=="function"}bu=Pu}else bu=!1;P_=bu&&(!document.documentMode||9<document.documentMode)}function eg(){po&&(po.detachEvent("onpropertychange",j_),jo=po=null)}function j_(t){if(t.propertyName==="value"&&yc(jo)){var e=[];b_(e,jo,t,Xh(t)),h_(rk,e)}}function sk(t,e,n){t==="focusin"?(eg(),po=e,jo=n,po.attachEvent("onpropertychange",j_)):t==="focusout"&&eg()}function ok(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yc(jo)}function ak(t,e){if(t==="click")return yc(e)}function lk(t,e){if(t==="input"||t==="change")return yc(e)}function ck(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jt=typeof Object.is=="function"?Object.is:ck;function Do(t,e){if(Jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wd.call(e,i)||!Jt(t[i],e[i]))return!1}return!0}function tg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ng(t,e){var n=tg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tg(n)}}function D_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?D_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function V_(){for(var t=window,e=kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=kl(t.document)}return e}function af(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uk(t){var e=V_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&D_(n.ownerDocument.documentElement,n)){if(r!==null&&af(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ng(n,s);var a=ng(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dk=Vn&&"documentMode"in document&&11>=document.documentMode,Di=null,Ud=null,mo=null,zd=!1;function rg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zd||Di==null||Di!==kl(r)||(r=Di,"selectionStart"in r&&af(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mo&&Do(mo,r)||(mo=r,r=bl(Ud,"onSelect"),0<r.length&&(e=new rf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Di)))}function Fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vi={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},ju={},L_={};Vn&&(L_=document.createElement("div").style,"AnimationEvent"in window||(delete Vi.animationend.animation,delete Vi.animationiteration.animation,delete Vi.animationstart.animation),"TransitionEvent"in window||delete Vi.transitionend.transition);function vc(t){if(ju[t])return ju[t];if(!Vi[t])return t;var e=Vi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in L_)return ju[t]=e[n];return t}var O_=vc("animationend"),M_=vc("animationiteration"),F_=vc("animationstart"),U_=vc("transitionend"),z_=new Map,ig="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(t,e){z_.set(t,e),gi(e,[t])}for(var Du=0;Du<ig.length;Du++){var Vu=ig[Du],hk=Vu.toLowerCase(),fk=Vu[0].toUpperCase()+Vu.slice(1);Dr(hk,"on"+fk)}Dr(O_,"onAnimationEnd");Dr(M_,"onAnimationIteration");Dr(F_,"onAnimationStart");Dr("dblclick","onDoubleClick");Dr("focusin","onFocus");Dr("focusout","onBlur");Dr(U_,"onTransitionEnd");rs("onMouseEnter",["mouseout","mouseover"]);rs("onMouseLeave",["mouseout","mouseover"]);rs("onPointerEnter",["pointerout","pointerover"]);rs("onPointerLeave",["pointerout","pointerover"]);gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gi("onBeforeInput",["compositionend","keypress","textInput","paste"]);gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pk=new Set("cancel close invalid load scroll toggle".split(" ").concat(ro));function sg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,hI(r,e,void 0,t),t.currentTarget=null}function K_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var c=r[a],d=c.instance,h=c.currentTarget;if(c=c.listener,d!==s&&i.isPropagationStopped())break e;sg(i,c,h),s=d}else for(a=0;a<r.length;a++){if(c=r[a],d=c.instance,h=c.currentTarget,c=c.listener,d!==s&&i.isPropagationStopped())break e;sg(i,c,h),s=d}}}if(xl)throw t=Ld,xl=!1,Ld=null,t}function Ee(t,e){var n=e[qd];n===void 0&&(n=e[qd]=new Set);var r=t+"__bubble";n.has(r)||(B_(e,t,2,!1),n.add(r))}function Lu(t,e,n){var r=0;e&&(r|=4),B_(n,t,r,e)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function Vo(t){if(!t[Ua]){t[Ua]=!0,Yv.forEach(function(n){n!=="selectionchange"&&(pk.has(n)||Lu(n,!1,t),Lu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ua]||(e[Ua]=!0,Lu("selectionchange",!1,e))}}function B_(t,e,n,r){switch(x_(e)){case 1:var i=CI;break;case 4:i=NI;break;default:i=tf}n=i.bind(null,e,n,t),i=void 0,!Vd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ou(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var c=r.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var d=a.tag;if((d===3||d===4)&&(d=a.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;a=a.return}for(;c!==null;){if(a=Hr(c),a===null)return;if(d=a.tag,d===5||d===6){r=s=a;continue e}c=c.parentNode}}r=r.return}h_(function(){var h=s,p=Xh(n),g=[];e:{var _=z_.get(t);if(_!==void 0){var N=rf,R=t;switch(t){case"keypress":if(sl(n)===0)break e;case"keydown":case"keyup":N=$I;break;case"focusin":R="focus",N=Ru;break;case"focusout":R="blur",N=Ru;break;case"beforeblur":case"afterblur":N=Ru;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Gm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=PI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=GI;break;case O_:case M_:case F_:N=VI;break;case U_:N=QI;break;case"scroll":N=RI;break;case"wheel":N=XI;break;case"copy":case"cut":case"paste":N=OI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Qm}var P=(e&4)!==0,V=!P&&t==="scroll",x=P?_!==null?_+"Capture":null:_;P=[];for(var k=h,b;k!==null;){b=k;var j=b.stateNode;if(b.tag===5&&j!==null&&(b=j,x!==null&&(j=No(k,x),j!=null&&P.push(Lo(k,j,b)))),V)break;k=k.return}0<P.length&&(_=new N(_,R,null,n,p),g.push({event:_,listeners:P}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",N=t==="mouseout"||t==="pointerout",_&&n!==jd&&(R=n.relatedTarget||n.fromElement)&&(Hr(R)||R[Ln]))break e;if((N||_)&&(_=p.window===p?p:(_=p.ownerDocument)?_.defaultView||_.parentWindow:window,N?(R=n.relatedTarget||n.toElement,N=h,R=R?Hr(R):null,R!==null&&(V=yi(R),R!==V||R.tag!==5&&R.tag!==6)&&(R=null)):(N=null,R=h),N!==R)){if(P=Gm,j="onMouseLeave",x="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(P=Qm,j="onPointerLeave",x="onPointerEnter",k="pointer"),V=N==null?_:Li(N),b=R==null?_:Li(R),_=new P(j,k+"leave",N,n,p),_.target=V,_.relatedTarget=b,j=null,Hr(p)===h&&(P=new P(x,k+"enter",R,n,p),P.target=b,P.relatedTarget=V,j=P),V=j,N&&R)t:{for(P=N,x=R,k=0,b=P;b;b=xi(b))k++;for(b=0,j=x;j;j=xi(j))b++;for(;0<k-b;)P=xi(P),k--;for(;0<b-k;)x=xi(x),b--;for(;k--;){if(P===x||x!==null&&P===x.alternate)break t;P=xi(P),x=xi(x)}P=null}else P=null;N!==null&&og(g,_,N,P,!1),R!==null&&V!==null&&og(g,V,R,P,!0)}}e:{if(_=h?Li(h):window,N=_.nodeName&&_.nodeName.toLowerCase(),N==="select"||N==="input"&&_.type==="file")var A=ik;else if(Jm(_))if(P_)A=lk;else{A=ok;var F=sk}else(N=_.nodeName)&&N.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(A=ak);if(A&&(A=A(t,h))){b_(g,A,n,p);break e}F&&F(t,_,h),t==="focusout"&&(F=_._wrapperState)&&F.controlled&&_.type==="number"&&Cd(_,"number",_.value)}switch(F=h?Li(h):window,t){case"focusin":(Jm(F)||F.contentEditable==="true")&&(Di=F,Ud=h,mo=null);break;case"focusout":mo=Ud=Di=null;break;case"mousedown":zd=!0;break;case"contextmenu":case"mouseup":case"dragend":zd=!1,rg(g,n,p);break;case"selectionchange":if(dk)break;case"keydown":case"keyup":rg(g,n,p)}var y;if(of)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else ji?N_(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(C_&&n.locale!=="ko"&&(ji||v!=="onCompositionStart"?v==="onCompositionEnd"&&ji&&(y=A_()):(cr=p,nf="value"in cr?cr.value:cr.textContent,ji=!0)),F=bl(h,v),0<F.length&&(v=new Hm(v,t,null,n,p),g.push({event:v,listeners:F}),y?v.data=y:(y=R_(n),y!==null&&(v.data=y)))),(y=ZI?ek(t,n):tk(t,n))&&(h=bl(h,"onBeforeInput"),0<h.length&&(p=new Hm("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:h}),p.data=y))}K_(g,e)})}function Lo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=No(t,n),s!=null&&r.unshift(Lo(t,s,i)),s=No(t,e),s!=null&&r.push(Lo(t,s,i))),t=t.return}return r}function xi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function og(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var c=n,d=c.alternate,h=c.stateNode;if(d!==null&&d===r)break;c.tag===5&&h!==null&&(c=h,i?(d=No(n,s),d!=null&&a.unshift(Lo(n,d,c))):i||(d=No(n,s),d!=null&&a.push(Lo(n,d,c)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var mk=/\r\n?/g,gk=/\u0000|\uFFFD/g;function ag(t){return(typeof t=="string"?t:""+t).replace(mk,`
`).replace(gk,"")}function za(t,e,n){if(e=ag(e),ag(t)!==e&&n)throw Error(U(425))}function Pl(){}var Kd=null,Bd=null;function $d(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wd=typeof setTimeout=="function"?setTimeout:void 0,yk=typeof clearTimeout=="function"?clearTimeout:void 0,lg=typeof Promise=="function"?Promise:void 0,vk=typeof queueMicrotask=="function"?queueMicrotask:typeof lg<"u"?function(t){return lg.resolve(null).then(t).catch(_k)}:Wd;function _k(t){setTimeout(function(){throw t})}function Mu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Po(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Po(e)}function pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function cg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vs=Math.random().toString(36).slice(2),dn="__reactFiber$"+vs,Oo="__reactProps$"+vs,Ln="__reactContainer$"+vs,qd="__reactEvents$"+vs,Tk="__reactListeners$"+vs,wk="__reactHandles$"+vs;function Hr(t){var e=t[dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ln]||n[dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=cg(t);t!==null;){if(n=t[dn])return n;t=cg(t)}return e}t=n,n=t.parentNode}return null}function ia(t){return t=t[dn]||t[Ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Li(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function _c(t){return t[Oo]||null}var Gd=[],Oi=-1;function Vr(t){return{current:t}}function ke(t){0>Oi||(t.current=Gd[Oi],Gd[Oi]=null,Oi--)}function Te(t,e){Oi++,Gd[Oi]=t.current,t.current=e}var Sr={},at=Vr(Sr),Tt=Vr(!1),ri=Sr;function is(t,e){var n=t.type.contextTypes;if(!n)return Sr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function wt(t){return t=t.childContextTypes,t!=null}function jl(){ke(Tt),ke(at)}function ug(t,e,n){if(at.current!==Sr)throw Error(U(168));Te(at,e),Te(Tt,n)}function $_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,sI(t)||"Unknown",i));return Ne({},n,r)}function Dl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,ri=at.current,Te(at,t),Te(Tt,Tt.current),!0}function dg(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=$_(t,e,ri),r.__reactInternalMemoizedMergedChildContext=t,ke(Tt),ke(at),Te(at,t)):ke(Tt),Te(Tt,n)}var Sn=null,Tc=!1,Fu=!1;function W_(t){Sn===null?Sn=[t]:Sn.push(t)}function Ek(t){Tc=!0,W_(t)}function Lr(){if(!Fu&&Sn!==null){Fu=!0;var t=0,e=ye;try{var n=Sn;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Sn=null,Tc=!1}catch(i){throw Sn!==null&&(Sn=Sn.slice(t+1)),g_(Jh,Lr),i}finally{ye=e,Fu=!1}}return null}var Mi=[],Fi=0,Vl=null,Ll=0,Pt=[],jt=0,ii=null,xn=1,An="";function Wr(t,e){Mi[Fi++]=Ll,Mi[Fi++]=Vl,Vl=t,Ll=e}function q_(t,e,n){Pt[jt++]=xn,Pt[jt++]=An,Pt[jt++]=ii,ii=t;var r=xn;t=An;var i=32-Gt(r)-1;r&=~(1<<i),n+=1;var s=32-Gt(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,xn=1<<32-Gt(e)+i|n<<i|r,An=s+t}else xn=1<<s|n<<i|r,An=t}function lf(t){t.return!==null&&(Wr(t,1),q_(t,1,0))}function cf(t){for(;t===Vl;)Vl=Mi[--Fi],Mi[Fi]=null,Ll=Mi[--Fi],Mi[Fi]=null;for(;t===ii;)ii=Pt[--jt],Pt[jt]=null,An=Pt[--jt],Pt[jt]=null,xn=Pt[--jt],Pt[jt]=null}var At=null,St=null,Se=!1,Wt=null;function G_(t,e){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,At=t,St=pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,At=t,St=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ii!==null?{id:xn,overflow:An}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,At=t,St=null,!0):!1;default:return!1}}function Hd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qd(t){if(Se){var e=St;if(e){var n=e;if(!hg(t,e)){if(Hd(t))throw Error(U(418));e=pr(n.nextSibling);var r=At;e&&hg(t,e)?G_(r,n):(t.flags=t.flags&-4097|2,Se=!1,At=t)}}else{if(Hd(t))throw Error(U(418));t.flags=t.flags&-4097|2,Se=!1,At=t}}}function fg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;At=t}function Ka(t){if(t!==At)return!1;if(!Se)return fg(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$d(t.type,t.memoizedProps)),e&&(e=St)){if(Hd(t))throw H_(),Error(U(418));for(;e;)G_(t,e),e=pr(e.nextSibling)}if(fg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){St=pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}St=null}}else St=At?pr(t.stateNode.nextSibling):null;return!0}function H_(){for(var t=St;t;)t=pr(t.nextSibling)}function ss(){St=At=null,Se=!1}function uf(t){Wt===null?Wt=[t]:Wt.push(t)}var Ik=Bn.ReactCurrentBatchConfig;function Gs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var c=i.refs;a===null?delete c[s]:c[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Ba(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function pg(t){var e=t._init;return e(t._payload)}function Q_(t){function e(x,k){if(t){var b=x.deletions;b===null?(x.deletions=[k],x.flags|=16):b.push(k)}}function n(x,k){if(!t)return null;for(;k!==null;)e(x,k),k=k.sibling;return null}function r(x,k){for(x=new Map;k!==null;)k.key!==null?x.set(k.key,k):x.set(k.index,k),k=k.sibling;return x}function i(x,k){return x=vr(x,k),x.index=0,x.sibling=null,x}function s(x,k,b){return x.index=b,t?(b=x.alternate,b!==null?(b=b.index,b<k?(x.flags|=2,k):b):(x.flags|=2,k)):(x.flags|=1048576,k)}function a(x){return t&&x.alternate===null&&(x.flags|=2),x}function c(x,k,b,j){return k===null||k.tag!==6?(k=qu(b,x.mode,j),k.return=x,k):(k=i(k,b),k.return=x,k)}function d(x,k,b,j){var A=b.type;return A===Pi?p(x,k,b.props.children,j,b.key):k!==null&&(k.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===tr&&pg(A)===k.type)?(j=i(k,b.props),j.ref=Gs(x,k,b),j.return=x,j):(j=hl(b.type,b.key,b.props,null,x.mode,j),j.ref=Gs(x,k,b),j.return=x,j)}function h(x,k,b,j){return k===null||k.tag!==4||k.stateNode.containerInfo!==b.containerInfo||k.stateNode.implementation!==b.implementation?(k=Gu(b,x.mode,j),k.return=x,k):(k=i(k,b.children||[]),k.return=x,k)}function p(x,k,b,j,A){return k===null||k.tag!==7?(k=ei(b,x.mode,j,A),k.return=x,k):(k=i(k,b),k.return=x,k)}function g(x,k,b){if(typeof k=="string"&&k!==""||typeof k=="number")return k=qu(""+k,x.mode,b),k.return=x,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Pa:return b=hl(k.type,k.key,k.props,null,x.mode,b),b.ref=Gs(x,null,k),b.return=x,b;case bi:return k=Gu(k,x.mode,b),k.return=x,k;case tr:var j=k._init;return g(x,j(k._payload),b)}if(to(k)||Ks(k))return k=ei(k,x.mode,b,null),k.return=x,k;Ba(x,k)}return null}function _(x,k,b,j){var A=k!==null?k.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return A!==null?null:c(x,k,""+b,j);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Pa:return b.key===A?d(x,k,b,j):null;case bi:return b.key===A?h(x,k,b,j):null;case tr:return A=b._init,_(x,k,A(b._payload),j)}if(to(b)||Ks(b))return A!==null?null:p(x,k,b,j,null);Ba(x,b)}return null}function N(x,k,b,j,A){if(typeof j=="string"&&j!==""||typeof j=="number")return x=x.get(b)||null,c(k,x,""+j,A);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Pa:return x=x.get(j.key===null?b:j.key)||null,d(k,x,j,A);case bi:return x=x.get(j.key===null?b:j.key)||null,h(k,x,j,A);case tr:var F=j._init;return N(x,k,b,F(j._payload),A)}if(to(j)||Ks(j))return x=x.get(b)||null,p(k,x,j,A,null);Ba(k,j)}return null}function R(x,k,b,j){for(var A=null,F=null,y=k,v=k=0,I=null;y!==null&&v<b.length;v++){y.index>v?(I=y,y=null):I=y.sibling;var E=_(x,y,b[v],j);if(E===null){y===null&&(y=I);break}t&&y&&E.alternate===null&&e(x,y),k=s(E,k,v),F===null?A=E:F.sibling=E,F=E,y=I}if(v===b.length)return n(x,y),Se&&Wr(x,v),A;if(y===null){for(;v<b.length;v++)y=g(x,b[v],j),y!==null&&(k=s(y,k,v),F===null?A=y:F.sibling=y,F=y);return Se&&Wr(x,v),A}for(y=r(x,y);v<b.length;v++)I=N(y,x,v,b[v],j),I!==null&&(t&&I.alternate!==null&&y.delete(I.key===null?v:I.key),k=s(I,k,v),F===null?A=I:F.sibling=I,F=I);return t&&y.forEach(function(S){return e(x,S)}),Se&&Wr(x,v),A}function P(x,k,b,j){var A=Ks(b);if(typeof A!="function")throw Error(U(150));if(b=A.call(b),b==null)throw Error(U(151));for(var F=A=null,y=k,v=k=0,I=null,E=b.next();y!==null&&!E.done;v++,E=b.next()){y.index>v?(I=y,y=null):I=y.sibling;var S=_(x,y,E.value,j);if(S===null){y===null&&(y=I);break}t&&y&&S.alternate===null&&e(x,y),k=s(S,k,v),F===null?A=S:F.sibling=S,F=S,y=I}if(E.done)return n(x,y),Se&&Wr(x,v),A;if(y===null){for(;!E.done;v++,E=b.next())E=g(x,E.value,j),E!==null&&(k=s(E,k,v),F===null?A=E:F.sibling=E,F=E);return Se&&Wr(x,v),A}for(y=r(x,y);!E.done;v++,E=b.next())E=N(y,x,v,E.value,j),E!==null&&(t&&E.alternate!==null&&y.delete(E.key===null?v:E.key),k=s(E,k,v),F===null?A=E:F.sibling=E,F=E);return t&&y.forEach(function(C){return e(x,C)}),Se&&Wr(x,v),A}function V(x,k,b,j){if(typeof b=="object"&&b!==null&&b.type===Pi&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Pa:e:{for(var A=b.key,F=k;F!==null;){if(F.key===A){if(A=b.type,A===Pi){if(F.tag===7){n(x,F.sibling),k=i(F,b.props.children),k.return=x,x=k;break e}}else if(F.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===tr&&pg(A)===F.type){n(x,F.sibling),k=i(F,b.props),k.ref=Gs(x,F,b),k.return=x,x=k;break e}n(x,F);break}else e(x,F);F=F.sibling}b.type===Pi?(k=ei(b.props.children,x.mode,j,b.key),k.return=x,x=k):(j=hl(b.type,b.key,b.props,null,x.mode,j),j.ref=Gs(x,k,b),j.return=x,x=j)}return a(x);case bi:e:{for(F=b.key;k!==null;){if(k.key===F)if(k.tag===4&&k.stateNode.containerInfo===b.containerInfo&&k.stateNode.implementation===b.implementation){n(x,k.sibling),k=i(k,b.children||[]),k.return=x,x=k;break e}else{n(x,k);break}else e(x,k);k=k.sibling}k=Gu(b,x.mode,j),k.return=x,x=k}return a(x);case tr:return F=b._init,V(x,k,F(b._payload),j)}if(to(b))return R(x,k,b,j);if(Ks(b))return P(x,k,b,j);Ba(x,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,k!==null&&k.tag===6?(n(x,k.sibling),k=i(k,b),k.return=x,x=k):(n(x,k),k=qu(b,x.mode,j),k.return=x,x=k),a(x)):n(x,k)}return V}var os=Q_(!0),Y_=Q_(!1),Ol=Vr(null),Ml=null,Ui=null,df=null;function hf(){df=Ui=Ml=null}function ff(t){var e=Ol.current;ke(Ol),t._currentValue=e}function Yd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Hi(t,e){Ml=t,df=Ui=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_t=!0),t.firstContext=null)}function Ft(t){var e=t._currentValue;if(df!==t)if(t={context:t,memoizedValue:e,next:null},Ui===null){if(Ml===null)throw Error(U(308));Ui=t,Ml.dependencies={lanes:0,firstContext:t}}else Ui=Ui.next=t;return e}var Qr=null;function pf(t){Qr===null?Qr=[t]:Qr.push(t)}function X_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,pf(e)):(n.next=i.next,i.next=n),e.interleaved=n,On(t,r)}function On(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var nr=!1;function mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function J_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,On(t,n)}return i=r.interleaved,i===null?(e.next=e,pf(r)):(e.next=i.next,i.next=e),r.interleaved=e,On(t,n)}function ol(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zh(t,n)}}function mg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fl(t,e,n,r){var i=t.updateQueue;nr=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var d=c,h=d.next;d.next=null,a===null?s=h:a.next=h,a=d;var p=t.alternate;p!==null&&(p=p.updateQueue,c=p.lastBaseUpdate,c!==a&&(c===null?p.firstBaseUpdate=h:c.next=h,p.lastBaseUpdate=d))}if(s!==null){var g=i.baseState;a=0,p=h=d=null,c=s;do{var _=c.lane,N=c.eventTime;if((r&_)===_){p!==null&&(p=p.next={eventTime:N,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var R=t,P=c;switch(_=e,N=n,P.tag){case 1:if(R=P.payload,typeof R=="function"){g=R.call(N,g,_);break e}g=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=P.payload,_=typeof R=="function"?R.call(N,g,_):R,_==null)break e;g=Ne({},g,_);break e;case 2:nr=!0}}c.callback!==null&&c.lane!==0&&(t.flags|=64,_=i.effects,_===null?i.effects=[c]:_.push(c))}else N={eventTime:N,lane:_,tag:c.tag,payload:c.payload,callback:c.callback,next:null},p===null?(h=p=N,d=g):p=p.next=N,a|=_;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;_=c,c=_.next,_.next=null,i.lastBaseUpdate=_,i.shared.pending=null}}while(!0);if(p===null&&(d=g),i.baseState=d,i.firstBaseUpdate=h,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);oi|=a,t.lanes=a,t.memoizedState=g}}function gg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var sa={},pn=Vr(sa),Mo=Vr(sa),Fo=Vr(sa);function Yr(t){if(t===sa)throw Error(U(174));return t}function gf(t,e){switch(Te(Fo,e),Te(Mo,t),Te(pn,sa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rd(e,t)}ke(pn),Te(pn,e)}function as(){ke(pn),ke(Mo),ke(Fo)}function Z_(t){Yr(Fo.current);var e=Yr(pn.current),n=Rd(e,t.type);e!==n&&(Te(Mo,t),Te(pn,n))}function yf(t){Mo.current===t&&(ke(pn),ke(Mo))}var Ae=Vr(0);function Ul(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uu=[];function vf(){for(var t=0;t<Uu.length;t++)Uu[t]._workInProgressVersionPrimary=null;Uu.length=0}var al=Bn.ReactCurrentDispatcher,zu=Bn.ReactCurrentBatchConfig,si=0,Ce=null,ze=null,qe=null,zl=!1,go=!1,Uo=0,kk=0;function tt(){throw Error(U(321))}function _f(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jt(t[n],e[n]))return!1;return!0}function Tf(t,e,n,r,i,s){if(si=s,Ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,al.current=t===null||t.memoizedState===null?Ck:Nk,t=n(r,i),go){s=0;do{if(go=!1,Uo=0,25<=s)throw Error(U(301));s+=1,qe=ze=null,e.updateQueue=null,al.current=Rk,t=n(r,i)}while(go)}if(al.current=Kl,e=ze!==null&&ze.next!==null,si=0,qe=ze=Ce=null,zl=!1,e)throw Error(U(300));return t}function wf(){var t=Uo!==0;return Uo=0,t}function ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Ce.memoizedState=qe=t:qe=qe.next=t,qe}function Ut(){if(ze===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var e=qe===null?Ce.memoizedState:qe.next;if(e!==null)qe=e,ze=t;else{if(t===null)throw Error(U(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},qe===null?Ce.memoizedState=qe=t:qe=qe.next=t}return qe}function zo(t,e){return typeof e=="function"?e(t):e}function Ku(t){var e=Ut(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=ze,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var c=a=null,d=null,h=s;do{var p=h.lane;if((si&p)===p)d!==null&&(d=d.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var g={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};d===null?(c=d=g,a=r):d=d.next=g,Ce.lanes|=p,oi|=p}h=h.next}while(h!==null&&h!==s);d===null?a=r:d.next=c,Jt(r,e.memoizedState)||(_t=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=d,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ce.lanes|=s,oi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bu(t){var e=Ut(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);Jt(s,e.memoizedState)||(_t=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function eT(){}function tT(t,e){var n=Ce,r=Ut(),i=e(),s=!Jt(r.memoizedState,i);if(s&&(r.memoizedState=i,_t=!0),r=r.queue,Ef(iT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,Ko(9,rT.bind(null,n,r,i,e),void 0,null),Ge===null)throw Error(U(349));si&30||nT(n,e,i)}return i}function nT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rT(t,e,n,r){e.value=n,e.getSnapshot=r,sT(e)&&oT(t)}function iT(t,e,n){return n(function(){sT(e)&&oT(t)})}function sT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jt(t,n)}catch{return!0}}function oT(t){var e=On(t,1);e!==null&&Ht(e,t,1,-1)}function yg(t){var e=ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:t},e.queue=t,t=t.dispatch=Ak.bind(null,Ce,t),[e.memoizedState,t]}function Ko(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function aT(){return Ut().memoizedState}function ll(t,e,n,r){var i=ln();Ce.flags|=t,i.memoizedState=Ko(1|e,n,void 0,r===void 0?null:r)}function wc(t,e,n,r){var i=Ut();r=r===void 0?null:r;var s=void 0;if(ze!==null){var a=ze.memoizedState;if(s=a.destroy,r!==null&&_f(r,a.deps)){i.memoizedState=Ko(e,n,s,r);return}}Ce.flags|=t,i.memoizedState=Ko(1|e,n,s,r)}function vg(t,e){return ll(8390656,8,t,e)}function Ef(t,e){return wc(2048,8,t,e)}function lT(t,e){return wc(4,2,t,e)}function cT(t,e){return wc(4,4,t,e)}function uT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dT(t,e,n){return n=n!=null?n.concat([t]):null,wc(4,4,uT.bind(null,e,t),n)}function If(){}function hT(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_f(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function fT(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_f(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function pT(t,e,n){return si&21?(Jt(n,e)||(n=__(),Ce.lanes|=n,oi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_t=!0),t.memoizedState=n)}function Sk(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=zu.transition;zu.transition={};try{t(!1),e()}finally{ye=n,zu.transition=r}}function mT(){return Ut().memoizedState}function xk(t,e,n){var r=yr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gT(t))yT(e,n);else if(n=X_(t,e,n,r),n!==null){var i=ht();Ht(n,t,r,i),vT(n,e,r)}}function Ak(t,e,n){var r=yr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gT(t))yT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,c=s(a,n);if(i.hasEagerState=!0,i.eagerState=c,Jt(c,a)){var d=e.interleaved;d===null?(i.next=i,pf(e)):(i.next=d.next,d.next=i),e.interleaved=i;return}}catch{}finally{}n=X_(t,e,i,r),n!==null&&(i=ht(),Ht(n,t,r,i),vT(n,e,r))}}function gT(t){var e=t.alternate;return t===Ce||e!==null&&e===Ce}function yT(t,e){go=zl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function vT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zh(t,n)}}var Kl={readContext:Ft,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},Ck={readContext:Ft,useCallback:function(t,e){return ln().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:vg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ll(4194308,4,uT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ll(4194308,4,t,e)},useInsertionEffect:function(t,e){return ll(4,2,t,e)},useMemo:function(t,e){var n=ln();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ln();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=xk.bind(null,Ce,t),[r.memoizedState,t]},useRef:function(t){var e=ln();return t={current:t},e.memoizedState=t},useState:yg,useDebugValue:If,useDeferredValue:function(t){return ln().memoizedState=t},useTransition:function(){var t=yg(!1),e=t[0];return t=Sk.bind(null,t[1]),ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ce,i=ln();if(Se){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Ge===null)throw Error(U(349));si&30||nT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,vg(iT.bind(null,r,s,t),[t]),r.flags|=2048,Ko(9,rT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ln(),e=Ge.identifierPrefix;if(Se){var n=An,r=xn;n=(r&~(1<<32-Gt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Uo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Nk={readContext:Ft,useCallback:hT,useContext:Ft,useEffect:Ef,useImperativeHandle:dT,useInsertionEffect:lT,useLayoutEffect:cT,useMemo:fT,useReducer:Ku,useRef:aT,useState:function(){return Ku(zo)},useDebugValue:If,useDeferredValue:function(t){var e=Ut();return pT(e,ze.memoizedState,t)},useTransition:function(){var t=Ku(zo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:eT,useSyncExternalStore:tT,useId:mT,unstable_isNewReconciler:!1},Rk={readContext:Ft,useCallback:hT,useContext:Ft,useEffect:Ef,useImperativeHandle:dT,useInsertionEffect:lT,useLayoutEffect:cT,useMemo:fT,useReducer:Bu,useRef:aT,useState:function(){return Bu(zo)},useDebugValue:If,useDeferredValue:function(t){var e=Ut();return ze===null?e.memoizedState=t:pT(e,ze.memoizedState,t)},useTransition:function(){var t=Bu(zo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:eT,useSyncExternalStore:tT,useId:mT,unstable_isNewReconciler:!1};function Bt(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Xd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ec={isMounted:function(t){return(t=t._reactInternals)?yi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ht(),i=yr(t),s=Pn(r,i);s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,i),e!==null&&(Ht(e,t,i,r),ol(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ht(),i=yr(t),s=Pn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,i),e!==null&&(Ht(e,t,i,r),ol(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ht(),r=yr(t),i=Pn(n,r);i.tag=2,e!=null&&(i.callback=e),e=mr(t,i,r),e!==null&&(Ht(e,t,r,n),ol(e,t,r))}};function _g(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!Do(n,r)||!Do(i,s):!0}function _T(t,e,n){var r=!1,i=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ft(s):(i=wt(e)?ri:at.current,r=e.contextTypes,s=(r=r!=null)?is(t,i):Sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ec,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Tg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ec.enqueueReplaceState(e,e.state,null)}function Jd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},mf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ft(s):(s=wt(e)?ri:at.current,i.context=is(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Xd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ec.enqueueReplaceState(i,i.state,null),Fl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ls(t,e){try{var n="",r=e;do n+=iI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function $u(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var bk=typeof WeakMap=="function"?WeakMap:Map;function TT(t,e,n){n=Pn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){$l||($l=!0,ch=r),Zd(t,e)},n}function wT(t,e,n){n=Pn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Zd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zd(t,e),typeof r!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function wg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new bk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Wk.bind(null,t,e,n),e.then(t,t))}function Eg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ig(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pn(-1,1),e.tag=2,mr(n,e,1))),n.lanes|=1),t)}var Pk=Bn.ReactCurrentOwner,_t=!1;function dt(t,e,n,r){e.child=t===null?Y_(e,null,n,r):os(e,t.child,n,r)}function kg(t,e,n,r,i){n=n.render;var s=e.ref;return Hi(e,i),r=Tf(t,e,n,r,s,i),n=wf(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(Se&&n&&lf(e),e.flags|=1,dt(t,e,r,i),e.child)}function Sg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!bf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ET(t,e,s,r,i)):(t=hl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Do,n(a,r)&&t.ref===e.ref)return Mn(t,e,i)}return e.flags|=1,t=vr(s,r),t.ref=e.ref,t.return=e,e.child=t}function ET(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Do(s,r)&&t.ref===e.ref)if(_t=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(_t=!0);else return e.lanes=t.lanes,Mn(t,e,i)}return eh(t,e,n,r,i)}function IT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(Ki,kt),kt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Te(Ki,kt),kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Te(Ki,kt),kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Te(Ki,kt),kt|=r;return dt(t,e,i,n),e.child}function kT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function eh(t,e,n,r,i){var s=wt(n)?ri:at.current;return s=is(e,s),Hi(e,i),n=Tf(t,e,n,r,s,i),r=wf(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(Se&&r&&lf(e),e.flags|=1,dt(t,e,n,i),e.child)}function xg(t,e,n,r,i){if(wt(n)){var s=!0;Dl(e)}else s=!1;if(Hi(e,i),e.stateNode===null)cl(t,e),_T(e,n,r),Jd(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,c=e.memoizedProps;a.props=c;var d=a.context,h=n.contextType;typeof h=="object"&&h!==null?h=Ft(h):(h=wt(n)?ri:at.current,h=is(e,h));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==r||d!==h)&&Tg(e,a,r,h),nr=!1;var _=e.memoizedState;a.state=_,Fl(e,r,a,i),d=e.memoizedState,c!==r||_!==d||Tt.current||nr?(typeof p=="function"&&(Xd(e,n,p,r),d=e.memoizedState),(c=nr||_g(e,n,c,r,_,d,h))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=d),a.props=r,a.state=d,a.context=h,r=c):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,J_(t,e),c=e.memoizedProps,h=e.type===e.elementType?c:Bt(e.type,c),a.props=h,g=e.pendingProps,_=a.context,d=n.contextType,typeof d=="object"&&d!==null?d=Ft(d):(d=wt(n)?ri:at.current,d=is(e,d));var N=n.getDerivedStateFromProps;(p=typeof N=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==g||_!==d)&&Tg(e,a,r,d),nr=!1,_=e.memoizedState,a.state=_,Fl(e,r,a,i);var R=e.memoizedState;c!==g||_!==R||Tt.current||nr?(typeof N=="function"&&(Xd(e,n,N,r),R=e.memoizedState),(h=nr||_g(e,n,h,r,_,R,d)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,R,d),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,R,d)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),a.props=r,a.state=R,a.context=d,r=h):(typeof a.componentDidUpdate!="function"||c===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),r=!1)}return th(t,e,n,r,s,i)}function th(t,e,n,r,i,s){kT(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&dg(e,n,!1),Mn(t,e,s);r=e.stateNode,Pk.current=e;var c=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=os(e,t.child,null,s),e.child=os(e,null,c,s)):dt(t,e,c,s),e.memoizedState=r.state,i&&dg(e,n,!0),e.child}function ST(t){var e=t.stateNode;e.pendingContext?ug(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ug(t,e.context,!1),gf(t,e.containerInfo)}function Ag(t,e,n,r,i){return ss(),uf(i),e.flags|=256,dt(t,e,n,r),e.child}var nh={dehydrated:null,treeContext:null,retryLane:0};function rh(t){return{baseLanes:t,cachePool:null,transitions:null}}function xT(t,e,n){var r=e.pendingProps,i=Ae.current,s=!1,a=(e.flags&128)!==0,c;if((c=a)||(c=t!==null&&t.memoizedState===null?!1:(i&2)!==0),c?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Te(Ae,i&1),t===null)return Qd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,s?(r=e.mode,s=e.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Sc(a,r,0,null),t=ei(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rh(n),e.memoizedState=nh,t):kf(e,a));if(i=t.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return jk(t,e,a,r,c,i,n);if(s){s=r.fallback,a=e.mode,i=t.child,c=i.sibling;var d={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=d,e.deletions=null):(r=vr(i,d),r.subtreeFlags=i.subtreeFlags&14680064),c!==null?s=vr(c,s):(s=ei(s,a,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,a=t.child.memoizedState,a=a===null?rh(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=nh,r}return s=t.child,t=s.sibling,r=vr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function kf(t,e){return e=Sc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $a(t,e,n,r){return r!==null&&uf(r),os(e,t.child,null,n),t=kf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jk(t,e,n,r,i,s,a){if(n)return e.flags&256?(e.flags&=-257,r=$u(Error(U(422))),$a(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Sc({mode:"visible",children:r.children},i,0,null),s=ei(s,i,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&os(e,t.child,null,a),e.child.memoizedState=rh(a),e.memoizedState=nh,s);if(!(e.mode&1))return $a(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var c=r.dgst;return r=c,s=Error(U(419)),r=$u(s,r,void 0),$a(t,e,a,r)}if(c=(a&t.childLanes)!==0,_t||c){if(r=Ge,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,On(t,i),Ht(r,t,i,-1))}return Rf(),r=$u(Error(U(421))),$a(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=qk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,St=pr(i.nextSibling),At=e,Se=!0,Wt=null,t!==null&&(Pt[jt++]=xn,Pt[jt++]=An,Pt[jt++]=ii,xn=t.id,An=t.overflow,ii=e),e=kf(e,r.children),e.flags|=4096,e)}function Cg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Yd(t.return,e,n)}function Wu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function AT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(dt(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cg(t,n,e);else if(t.tag===19)Cg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Te(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ul(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Wu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ul(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Wu(e,!0,n,null,s);break;case"together":Wu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),oi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Dk(t,e,n){switch(e.tag){case 3:ST(e),ss();break;case 5:Z_(e);break;case 1:wt(e.type)&&Dl(e);break;case 4:gf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Te(Ol,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Te(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?xT(t,e,n):(Te(Ae,Ae.current&1),t=Mn(t,e,n),t!==null?t.sibling:null);Te(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return AT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Te(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,IT(t,e,n)}return Mn(t,e,n)}var CT,ih,NT,RT;CT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ih=function(){};NT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Yr(pn.current);var s=null;switch(n){case"input":i=xd(t,i),r=xd(t,r),s=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),s=[];break;case"textarea":i=Nd(t,i),r=Nd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Pl)}bd(n,r);var a;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var c=i[h];for(a in c)c.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ao.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var d=r[h];if(c=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&d!==c&&(d!=null||c!=null))if(h==="style")if(c){for(a in c)!c.hasOwnProperty(a)||d&&d.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in d)d.hasOwnProperty(a)&&c[a]!==d[a]&&(n||(n={}),n[a]=d[a])}else n||(s||(s=[]),s.push(h,n)),n=d;else h==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(s=s||[]).push(h,d)):h==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(h,""+d):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ao.hasOwnProperty(h)?(d!=null&&h==="onScroll"&&Ee("scroll",t),s||c===d||(s=[])):(s=s||[]).push(h,d))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};RT=function(t,e,n,r){n!==r&&(e.flags|=4)};function Hs(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Vk(t,e,n){var r=e.pendingProps;switch(cf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(e),null;case 1:return wt(e.type)&&jl(),nt(e),null;case 3:return r=e.stateNode,as(),ke(Tt),ke(at),vf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ka(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wt!==null&&(hh(Wt),Wt=null))),ih(t,e),nt(e),null;case 5:yf(e);var i=Yr(Fo.current);if(n=e.type,t!==null&&e.stateNode!=null)NT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return nt(e),null}if(t=Yr(pn.current),Ka(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[dn]=e,r[Oo]=s,t=(e.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(i=0;i<ro.length;i++)Ee(ro[i],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":Om(r,s),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ee("invalid",r);break;case"textarea":Fm(r,s),Ee("invalid",r)}bd(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var c=s[a];a==="children"?typeof c=="string"?r.textContent!==c&&(s.suppressHydrationWarning!==!0&&za(r.textContent,c,t),i=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(s.suppressHydrationWarning!==!0&&za(r.textContent,c,t),i=["children",""+c]):Ao.hasOwnProperty(a)&&c!=null&&a==="onScroll"&&Ee("scroll",r)}switch(n){case"input":ja(r),Mm(r,s,!0);break;case"textarea":ja(r),Um(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Pl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=i_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[dn]=e,t[Oo]=r,CT(t,e,!1,!1),e.stateNode=t;e:{switch(a=Pd(n,r),n){case"dialog":Ee("cancel",t),Ee("close",t),i=r;break;case"iframe":case"object":case"embed":Ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<ro.length;i++)Ee(ro[i],t);i=r;break;case"source":Ee("error",t),i=r;break;case"img":case"image":case"link":Ee("error",t),Ee("load",t),i=r;break;case"details":Ee("toggle",t),i=r;break;case"input":Om(t,r),i=xd(t,r),Ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),Ee("invalid",t);break;case"textarea":Fm(t,r),i=Nd(t,r),Ee("invalid",t);break;default:i=r}bd(n,i),c=i;for(s in c)if(c.hasOwnProperty(s)){var d=c[s];s==="style"?a_(t,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&s_(t,d)):s==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Co(t,d):typeof d=="number"&&Co(t,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ao.hasOwnProperty(s)?d!=null&&s==="onScroll"&&Ee("scroll",t):d!=null&&Gh(t,s,d,a))}switch(n){case"input":ja(t),Mm(t,r,!1);break;case"textarea":ja(t),Um(t);break;case"option":r.value!=null&&t.setAttribute("value",""+kr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?$i(t,!!r.multiple,s,!1):r.defaultValue!=null&&$i(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Pl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nt(e),null;case 6:if(t&&e.stateNode!=null)RT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Yr(Fo.current),Yr(pn.current),Ka(e)){if(r=e.stateNode,n=e.memoizedProps,r[dn]=e,(s=r.nodeValue!==n)&&(t=At,t!==null))switch(t.tag){case 3:za(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&za(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dn]=e,e.stateNode=r}return nt(e),null;case 13:if(ke(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&St!==null&&e.mode&1&&!(e.flags&128))H_(),ss(),e.flags|=98560,s=!1;else if(s=Ka(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[dn]=e}else ss(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nt(e),s=!1}else Wt!==null&&(hh(Wt),Wt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?Ke===0&&(Ke=3):Rf())),e.updateQueue!==null&&(e.flags|=4),nt(e),null);case 4:return as(),ih(t,e),t===null&&Vo(e.stateNode.containerInfo),nt(e),null;case 10:return ff(e.type._context),nt(e),null;case 17:return wt(e.type)&&jl(),nt(e),null;case 19:if(ke(Ae),s=e.memoizedState,s===null)return nt(e),null;if(r=(e.flags&128)!==0,a=s.rendering,a===null)if(r)Hs(s,!1);else{if(Ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Ul(t),a!==null){for(e.flags|=128,Hs(s,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Te(Ae,Ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ve()>cs&&(e.flags|=128,r=!0,Hs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ul(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Hs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Se)return nt(e),null}else 2*Ve()-s.renderingStartTime>cs&&n!==1073741824&&(e.flags|=128,r=!0,Hs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ve(),e.sibling=null,n=Ae.current,Te(Ae,r?n&1|2:n&1),e):(nt(e),null);case 22:case 23:return Nf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?kt&1073741824&&(nt(e),e.subtreeFlags&6&&(e.flags|=8192)):nt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function Lk(t,e){switch(cf(e),e.tag){case 1:return wt(e.type)&&jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return as(),ke(Tt),ke(at),vf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return yf(e),null;case 13:if(ke(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));ss()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ke(Ae),null;case 4:return as(),null;case 10:return ff(e.type._context),null;case 22:case 23:return Nf(),null;case 24:return null;default:return null}}var Wa=!1,st=!1,Ok=typeof WeakSet=="function"?WeakSet:Set,Q=null;function zi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function sh(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var Ng=!1;function Mk(t,e){if(Kd=Nl,t=V_(),af(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,c=-1,d=-1,h=0,p=0,g=t,_=null;t:for(;;){for(var N;g!==n||i!==0&&g.nodeType!==3||(c=a+i),g!==s||r!==0&&g.nodeType!==3||(d=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(N=g.firstChild)!==null;)_=g,g=N;for(;;){if(g===t)break t;if(_===n&&++h===i&&(c=a),_===s&&++p===r&&(d=a),(N=g.nextSibling)!==null)break;g=_,_=g.parentNode}g=N}n=c===-1||d===-1?null:{start:c,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bd={focusedElem:t,selectionRange:n},Nl=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var P=R.memoizedProps,V=R.memoizedState,x=e.stateNode,k=x.getSnapshotBeforeUpdate(e.elementType===e.type?P:Bt(e.type,P),V);x.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var b=e.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(j){Pe(e,e.return,j)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return R=Ng,Ng=!1,R}function yo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&sh(e,n,s)}i=i.next}while(i!==r)}}function Ic(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function oh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function bT(t){var e=t.alternate;e!==null&&(t.alternate=null,bT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dn],delete e[Oo],delete e[qd],delete e[Tk],delete e[wk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function PT(t){return t.tag===5||t.tag===3||t.tag===4}function Rg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||PT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ah(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Pl));else if(r!==4&&(t=t.child,t!==null))for(ah(t,e,n),t=t.sibling;t!==null;)ah(t,e,n),t=t.sibling}function lh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(lh(t,e,n),t=t.sibling;t!==null;)lh(t,e,n),t=t.sibling}var He=null,$t=!1;function Jn(t,e,n){for(n=n.child;n!==null;)jT(t,e,n),n=n.sibling}function jT(t,e,n){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(mc,n)}catch{}switch(n.tag){case 5:st||zi(n,e);case 6:var r=He,i=$t;He=null,Jn(t,e,n),He=r,$t=i,He!==null&&($t?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&($t?(t=He,n=n.stateNode,t.nodeType===8?Mu(t.parentNode,n):t.nodeType===1&&Mu(t,n),Po(t)):Mu(He,n.stateNode));break;case 4:r=He,i=$t,He=n.stateNode.containerInfo,$t=!0,Jn(t,e,n),He=r,$t=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&sh(n,e,a),i=i.next}while(i!==r)}Jn(t,e,n);break;case 1:if(!st&&(zi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){Pe(n,e,c)}Jn(t,e,n);break;case 21:Jn(t,e,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,Jn(t,e,n),st=r):Jn(t,e,n);break;default:Jn(t,e,n)}}function bg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ok),e.forEach(function(r){var i=Gk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,a=e,c=a;e:for(;c!==null;){switch(c.tag){case 5:He=c.stateNode,$t=!1;break e;case 3:He=c.stateNode.containerInfo,$t=!0;break e;case 4:He=c.stateNode.containerInfo,$t=!0;break e}c=c.return}if(He===null)throw Error(U(160));jT(s,a,i),He=null,$t=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(h){Pe(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)DT(e,t),e=e.sibling}function DT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kt(e,t),an(t),r&4){try{yo(3,t,t.return),Ic(3,t)}catch(P){Pe(t,t.return,P)}try{yo(5,t,t.return)}catch(P){Pe(t,t.return,P)}}break;case 1:Kt(e,t),an(t),r&512&&n!==null&&zi(n,n.return);break;case 5:if(Kt(e,t),an(t),r&512&&n!==null&&zi(n,n.return),t.flags&32){var i=t.stateNode;try{Co(i,"")}catch(P){Pe(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,c=t.type,d=t.updateQueue;if(t.updateQueue=null,d!==null)try{c==="input"&&s.type==="radio"&&s.name!=null&&n_(i,s),Pd(c,a);var h=Pd(c,s);for(a=0;a<d.length;a+=2){var p=d[a],g=d[a+1];p==="style"?a_(i,g):p==="dangerouslySetInnerHTML"?s_(i,g):p==="children"?Co(i,g):Gh(i,p,g,h)}switch(c){case"input":Ad(i,s);break;case"textarea":r_(i,s);break;case"select":var _=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var N=s.value;N!=null?$i(i,!!s.multiple,N,!1):_!==!!s.multiple&&(s.defaultValue!=null?$i(i,!!s.multiple,s.defaultValue,!0):$i(i,!!s.multiple,s.multiple?[]:"",!1))}i[Oo]=s}catch(P){Pe(t,t.return,P)}}break;case 6:if(Kt(e,t),an(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Pe(t,t.return,P)}}break;case 3:if(Kt(e,t),an(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Po(e.containerInfo)}catch(P){Pe(t,t.return,P)}break;case 4:Kt(e,t),an(t);break;case 13:Kt(e,t),an(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Af=Ve())),r&4&&bg(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(st=(h=st)||p,Kt(e,t),st=h):Kt(e,t),an(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!p&&t.mode&1)for(Q=t,p=t.child;p!==null;){for(g=Q=p;Q!==null;){switch(_=Q,N=_.child,_.tag){case 0:case 11:case 14:case 15:yo(4,_,_.return);break;case 1:zi(_,_.return);var R=_.stateNode;if(typeof R.componentWillUnmount=="function"){r=_,n=_.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(P){Pe(r,n,P)}}break;case 5:zi(_,_.return);break;case 22:if(_.memoizedState!==null){jg(g);continue}}N!==null?(N.return=_,Q=N):jg(g)}p=p.sibling}e:for(p=null,g=t;;){if(g.tag===5){if(p===null){p=g;try{i=g.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(c=g.stateNode,d=g.memoizedProps.style,a=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=o_("display",a))}catch(P){Pe(t,t.return,P)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(P){Pe(t,t.return,P)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Kt(e,t),an(t),r&4&&bg(t);break;case 21:break;default:Kt(e,t),an(t)}}function an(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(PT(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Co(i,""),r.flags&=-33);var s=Rg(t);lh(t,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,c=Rg(t);ah(t,c,a);break;default:throw Error(U(161))}}catch(d){Pe(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Fk(t,e,n){Q=t,VT(t)}function VT(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Wa;if(!a){var c=i.alternate,d=c!==null&&c.memoizedState!==null||st;c=Wa;var h=st;if(Wa=a,(st=d)&&!h)for(Q=i;Q!==null;)a=Q,d=a.child,a.tag===22&&a.memoizedState!==null?Dg(i):d!==null?(d.return=a,Q=d):Dg(i);for(;s!==null;)Q=s,VT(s),s=s.sibling;Q=i,Wa=c,st=h}Pg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):Pg(t)}}function Pg(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:st||Ic(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Bt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&gg(e,s,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}gg(e,a,n)}break;case 5:var c=e.stateNode;if(n===null&&e.flags&4){n=c;var d=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&Po(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}st||e.flags&512&&oh(e)}catch(_){Pe(e,e.return,_)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function jg(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function Dg(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ic(4,e)}catch(d){Pe(e,n,d)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(d){Pe(e,i,d)}}var s=e.return;try{oh(e)}catch(d){Pe(e,s,d)}break;case 5:var a=e.return;try{oh(e)}catch(d){Pe(e,a,d)}}}catch(d){Pe(e,e.return,d)}if(e===t){Q=null;break}var c=e.sibling;if(c!==null){c.return=e.return,Q=c;break}Q=e.return}}var Uk=Math.ceil,Bl=Bn.ReactCurrentDispatcher,Sf=Bn.ReactCurrentOwner,Ot=Bn.ReactCurrentBatchConfig,pe=0,Ge=null,Oe=null,Xe=0,kt=0,Ki=Vr(0),Ke=0,Bo=null,oi=0,kc=0,xf=0,vo=null,yt=null,Af=0,cs=1/0,kn=null,$l=!1,ch=null,gr=null,qa=!1,ur=null,Wl=0,_o=0,uh=null,ul=-1,dl=0;function ht(){return pe&6?Ve():ul!==-1?ul:ul=Ve()}function yr(t){return t.mode&1?pe&2&&Xe!==0?Xe&-Xe:Ik.transition!==null?(dl===0&&(dl=__()),dl):(t=ye,t!==0||(t=window.event,t=t===void 0?16:x_(t.type)),t):1}function Ht(t,e,n,r){if(50<_o)throw _o=0,uh=null,Error(U(185));na(t,n,r),(!(pe&2)||t!==Ge)&&(t===Ge&&(!(pe&2)&&(kc|=n),Ke===4&&ir(t,Xe)),Et(t,r),n===1&&pe===0&&!(e.mode&1)&&(cs=Ve()+500,Tc&&Lr()))}function Et(t,e){var n=t.callbackNode;II(t,e);var r=Cl(t,t===Ge?Xe:0);if(r===0)n!==null&&Bm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Bm(n),e===1)t.tag===0?Ek(Vg.bind(null,t)):W_(Vg.bind(null,t)),vk(function(){!(pe&6)&&Lr()}),n=null;else{switch(T_(r)){case 1:n=Jh;break;case 4:n=y_;break;case 16:n=Al;break;case 536870912:n=v_;break;default:n=Al}n=BT(n,LT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function LT(t,e){if(ul=-1,dl=0,pe&6)throw Error(U(327));var n=t.callbackNode;if(Qi()&&t.callbackNode!==n)return null;var r=Cl(t,t===Ge?Xe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ql(t,r);else{e=r;var i=pe;pe|=2;var s=MT();(Ge!==t||Xe!==e)&&(kn=null,cs=Ve()+500,Zr(t,e));do try{Bk();break}catch(c){OT(t,c)}while(!0);hf(),Bl.current=s,pe=i,Oe!==null?e=0:(Ge=null,Xe=0,e=Ke)}if(e!==0){if(e===2&&(i=Od(t),i!==0&&(r=i,e=dh(t,i))),e===1)throw n=Bo,Zr(t,0),ir(t,r),Et(t,Ve()),n;if(e===6)ir(t,r);else{if(i=t.current.alternate,!(r&30)&&!zk(i)&&(e=ql(t,r),e===2&&(s=Od(t),s!==0&&(r=s,e=dh(t,s))),e===1))throw n=Bo,Zr(t,0),ir(t,r),Et(t,Ve()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:qr(t,yt,kn);break;case 3:if(ir(t,r),(r&130023424)===r&&(e=Af+500-Ve(),10<e)){if(Cl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Wd(qr.bind(null,t,yt,kn),e);break}qr(t,yt,kn);break;case 4:if(ir(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-Gt(r);s=1<<a,a=e[a],a>i&&(i=a),r&=~s}if(r=i,r=Ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Uk(r/1960))-r,10<r){t.timeoutHandle=Wd(qr.bind(null,t,yt,kn),r);break}qr(t,yt,kn);break;case 5:qr(t,yt,kn);break;default:throw Error(U(329))}}}return Et(t,Ve()),t.callbackNode===n?LT.bind(null,t):null}function dh(t,e){var n=vo;return t.current.memoizedState.isDehydrated&&(Zr(t,e).flags|=256),t=ql(t,e),t!==2&&(e=yt,yt=n,e!==null&&hh(e)),t}function hh(t){yt===null?yt=t:yt.push.apply(yt,t)}function zk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Jt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(t,e){for(e&=~xf,e&=~kc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gt(e),r=1<<n;t[n]=-1,e&=~r}}function Vg(t){if(pe&6)throw Error(U(327));Qi();var e=Cl(t,0);if(!(e&1))return Et(t,Ve()),null;var n=ql(t,e);if(t.tag!==0&&n===2){var r=Od(t);r!==0&&(e=r,n=dh(t,r))}if(n===1)throw n=Bo,Zr(t,0),ir(t,e),Et(t,Ve()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qr(t,yt,kn),Et(t,Ve()),null}function Cf(t,e){var n=pe;pe|=1;try{return t(e)}finally{pe=n,pe===0&&(cs=Ve()+500,Tc&&Lr())}}function ai(t){ur!==null&&ur.tag===0&&!(pe&6)&&Qi();var e=pe;pe|=1;var n=Ot.transition,r=ye;try{if(Ot.transition=null,ye=1,t)return t()}finally{ye=r,Ot.transition=n,pe=e,!(pe&6)&&Lr()}}function Nf(){kt=Ki.current,ke(Ki)}function Zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yk(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(cf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jl();break;case 3:as(),ke(Tt),ke(at),vf();break;case 5:yf(r);break;case 4:as();break;case 13:ke(Ae);break;case 19:ke(Ae);break;case 10:ff(r.type._context);break;case 22:case 23:Nf()}n=n.return}if(Ge=t,Oe=t=vr(t.current,null),Xe=kt=e,Ke=0,Bo=null,xf=kc=oi=0,yt=vo=null,Qr!==null){for(e=0;e<Qr.length;e++)if(n=Qr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}Qr=null}return t}function OT(t,e){do{var n=Oe;try{if(hf(),al.current=Kl,zl){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}zl=!1}if(si=0,qe=ze=Ce=null,go=!1,Uo=0,Sf.current=null,n===null||n.return===null){Ke=1,Bo=e,Oe=null;break}e:{var s=t,a=n.return,c=n,d=e;if(e=Xe,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var h=d,p=c,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var _=p.alternate;_?(p.updateQueue=_.updateQueue,p.memoizedState=_.memoizedState,p.lanes=_.lanes):(p.updateQueue=null,p.memoizedState=null)}var N=Eg(a);if(N!==null){N.flags&=-257,Ig(N,a,c,s,e),N.mode&1&&wg(s,h,e),e=N,d=h;var R=e.updateQueue;if(R===null){var P=new Set;P.add(d),e.updateQueue=P}else R.add(d);break e}else{if(!(e&1)){wg(s,h,e),Rf();break e}d=Error(U(426))}}else if(Se&&c.mode&1){var V=Eg(a);if(V!==null){!(V.flags&65536)&&(V.flags|=256),Ig(V,a,c,s,e),uf(ls(d,c));break e}}s=d=ls(d,c),Ke!==4&&(Ke=2),vo===null?vo=[s]:vo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var x=TT(s,d,e);mg(s,x);break e;case 1:c=d;var k=s.type,b=s.stateNode;if(!(s.flags&128)&&(typeof k.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(gr===null||!gr.has(b)))){s.flags|=65536,e&=-e,s.lanes|=e;var j=wT(s,c,e);mg(s,j);break e}}s=s.return}while(s!==null)}UT(n)}catch(A){e=A,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function MT(){var t=Bl.current;return Bl.current=Kl,t===null?Kl:t}function Rf(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),Ge===null||!(oi&268435455)&&!(kc&268435455)||ir(Ge,Xe)}function ql(t,e){var n=pe;pe|=2;var r=MT();(Ge!==t||Xe!==e)&&(kn=null,Zr(t,e));do try{Kk();break}catch(i){OT(t,i)}while(!0);if(hf(),pe=n,Bl.current=r,Oe!==null)throw Error(U(261));return Ge=null,Xe=0,Ke}function Kk(){for(;Oe!==null;)FT(Oe)}function Bk(){for(;Oe!==null&&!pI();)FT(Oe)}function FT(t){var e=KT(t.alternate,t,kt);t.memoizedProps=t.pendingProps,e===null?UT(t):Oe=e,Sf.current=null}function UT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Lk(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ke=6,Oe=null;return}}else if(n=Vk(n,e,kt),n!==null){Oe=n;return}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);Ke===0&&(Ke=5)}function qr(t,e,n){var r=ye,i=Ot.transition;try{Ot.transition=null,ye=1,$k(t,e,n,r)}finally{Ot.transition=i,ye=r}return null}function $k(t,e,n,r){do Qi();while(ur!==null);if(pe&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(kI(t,s),t===Ge&&(Oe=Ge=null,Xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qa||(qa=!0,BT(Al,function(){return Qi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ot.transition,Ot.transition=null;var a=ye;ye=1;var c=pe;pe|=4,Sf.current=null,Mk(t,n),DT(n,t),uk(Bd),Nl=!!Kd,Bd=Kd=null,t.current=n,Fk(n),mI(),pe=c,ye=a,Ot.transition=s}else t.current=n;if(qa&&(qa=!1,ur=t,Wl=i),s=t.pendingLanes,s===0&&(gr=null),vI(n.stateNode),Et(t,Ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($l)throw $l=!1,t=ch,ch=null,t;return Wl&1&&t.tag!==0&&Qi(),s=t.pendingLanes,s&1?t===uh?_o++:(_o=0,uh=t):_o=0,Lr(),null}function Qi(){if(ur!==null){var t=T_(Wl),e=Ot.transition,n=ye;try{if(Ot.transition=null,ye=16>t?16:t,ur===null)var r=!1;else{if(t=ur,ur=null,Wl=0,pe&6)throw Error(U(331));var i=pe;for(pe|=4,Q=t.current;Q!==null;){var s=Q,a=s.child;if(Q.flags&16){var c=s.deletions;if(c!==null){for(var d=0;d<c.length;d++){var h=c[d];for(Q=h;Q!==null;){var p=Q;switch(p.tag){case 0:case 11:case 15:yo(8,p,s)}var g=p.child;if(g!==null)g.return=p,Q=g;else for(;Q!==null;){p=Q;var _=p.sibling,N=p.return;if(bT(p),p===h){Q=null;break}if(_!==null){_.return=N,Q=_;break}Q=N}}}var R=s.alternate;if(R!==null){var P=R.child;if(P!==null){R.child=null;do{var V=P.sibling;P.sibling=null,P=V}while(P!==null)}}Q=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Q=a;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:yo(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,Q=x;break e}Q=s.return}}var k=t.current;for(Q=k;Q!==null;){a=Q;var b=a.child;if(a.subtreeFlags&2064&&b!==null)b.return=a,Q=b;else e:for(a=k;Q!==null;){if(c=Q,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Ic(9,c)}}catch(A){Pe(c,c.return,A)}if(c===a){Q=null;break e}var j=c.sibling;if(j!==null){j.return=c.return,Q=j;break e}Q=c.return}}if(pe=i,Lr(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(mc,t)}catch{}r=!0}return r}finally{ye=n,Ot.transition=e}}return!1}function Lg(t,e,n){e=ls(n,e),e=TT(t,e,1),t=mr(t,e,1),e=ht(),t!==null&&(na(t,1,e),Et(t,e))}function Pe(t,e,n){if(t.tag===3)Lg(t,t,n);else for(;e!==null;){if(e.tag===3){Lg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gr===null||!gr.has(r))){t=ls(n,t),t=wT(e,t,1),e=mr(e,t,1),t=ht(),e!==null&&(na(e,1,t),Et(e,t));break}}e=e.return}}function Wk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ht(),t.pingedLanes|=t.suspendedLanes&n,Ge===t&&(Xe&n)===n&&(Ke===4||Ke===3&&(Xe&130023424)===Xe&&500>Ve()-Af?Zr(t,0):xf|=n),Et(t,e)}function zT(t,e){e===0&&(t.mode&1?(e=La,La<<=1,!(La&130023424)&&(La=4194304)):e=1);var n=ht();t=On(t,e),t!==null&&(na(t,e,n),Et(t,n))}function qk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),zT(t,n)}function Gk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),zT(t,n)}var KT;KT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tt.current)_t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _t=!1,Dk(t,e,n);_t=!!(t.flags&131072)}else _t=!1,Se&&e.flags&1048576&&q_(e,Ll,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;cl(t,e),t=e.pendingProps;var i=is(e,at.current);Hi(e,n),i=Tf(null,e,r,t,i,n);var s=wf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wt(r)?(s=!0,Dl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,mf(e),i.updater=Ec,e.stateNode=i,i._reactInternals=e,Jd(e,r,t,n),e=th(null,e,r,!0,s,n)):(e.tag=0,Se&&s&&lf(e),dt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(cl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Qk(r),t=Bt(r,t),i){case 0:e=eh(null,e,r,t,n);break e;case 1:e=xg(null,e,r,t,n);break e;case 11:e=kg(null,e,r,t,n);break e;case 14:e=Sg(null,e,r,Bt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),eh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),xg(t,e,r,i,n);case 3:e:{if(ST(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,J_(t,e),Fl(e,r,null,n);var a=e.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ls(Error(U(423)),e),e=Ag(t,e,r,n,i);break e}else if(r!==i){i=ls(Error(U(424)),e),e=Ag(t,e,r,n,i);break e}else for(St=pr(e.stateNode.containerInfo.firstChild),At=e,Se=!0,Wt=null,n=Y_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ss(),r===i){e=Mn(t,e,n);break e}dt(t,e,r,n)}e=e.child}return e;case 5:return Z_(e),t===null&&Qd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,$d(r,i)?a=null:s!==null&&$d(r,s)&&(e.flags|=32),kT(t,e),dt(t,e,a,n),e.child;case 6:return t===null&&Qd(e),null;case 13:return xT(t,e,n);case 4:return gf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=os(e,null,r,n):dt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),kg(t,e,r,i,n);case 7:return dt(t,e,e.pendingProps,n),e.child;case 8:return dt(t,e,e.pendingProps.children,n),e.child;case 12:return dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,a=i.value,Te(Ol,r._currentValue),r._currentValue=a,s!==null)if(Jt(s.value,a)){if(s.children===i.children&&!Tt.current){e=Mn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var c=s.dependencies;if(c!==null){a=s.child;for(var d=c.firstContext;d!==null;){if(d.context===r){if(s.tag===1){d=Pn(-1,n&-n),d.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?d.next=d:(d.next=p.next,p.next=d),h.pending=d}}s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),Yd(s.return,n,e),c.lanes|=n;break}d=d.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(U(341));a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Yd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}dt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Hi(e,n),i=Ft(i),r=r(i),e.flags|=1,dt(t,e,r,n),e.child;case 14:return r=e.type,i=Bt(r,e.pendingProps),i=Bt(r.type,i),Sg(t,e,r,i,n);case 15:return ET(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),cl(t,e),e.tag=1,wt(r)?(t=!0,Dl(e)):t=!1,Hi(e,n),_T(e,r,i),Jd(e,r,i,n),th(null,e,r,!0,t,n);case 19:return AT(t,e,n);case 22:return IT(t,e,n)}throw Error(U(156,e.tag))};function BT(t,e){return g_(t,e)}function Hk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,n,r){return new Hk(t,e,n,r)}function bf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qk(t){if(typeof t=="function")return bf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qh)return 11;if(t===Yh)return 14}return 2}function vr(t,e){var n=t.alternate;return n===null?(n=Lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function hl(t,e,n,r,i,s){var a=2;if(r=t,typeof t=="function")bf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Pi:return ei(n.children,i,s,e);case Hh:a=8,i|=8;break;case Ed:return t=Lt(12,n,e,i|2),t.elementType=Ed,t.lanes=s,t;case Id:return t=Lt(13,n,e,i),t.elementType=Id,t.lanes=s,t;case kd:return t=Lt(19,n,e,i),t.elementType=kd,t.lanes=s,t;case Zv:return Sc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xv:a=10;break e;case Jv:a=9;break e;case Qh:a=11;break e;case Yh:a=14;break e;case tr:a=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Lt(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ei(t,e,n,r){return t=Lt(7,t,r,e),t.lanes=n,t}function Sc(t,e,n,r){return t=Lt(22,t,r,e),t.elementType=Zv,t.lanes=n,t.stateNode={isHidden:!1},t}function qu(t,e,n){return t=Lt(6,t,null,e),t.lanes=n,t}function Gu(t,e,n){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Yk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Au(0),this.expirationTimes=Au(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Au(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pf(t,e,n,r,i,s,a,c,d){return t=new Yk(t,e,n,c,d),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mf(s),t}function Xk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function $T(t){if(!t)return Sr;t=t._reactInternals;e:{if(yi(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(wt(n))return $_(t,n,e)}return e}function WT(t,e,n,r,i,s,a,c,d){return t=Pf(n,r,!0,t,i,s,a,c,d),t.context=$T(null),n=t.current,r=ht(),i=yr(n),s=Pn(r,i),s.callback=e??null,mr(n,s,i),t.current.lanes=i,na(t,i,r),Et(t,r),t}function xc(t,e,n,r){var i=e.current,s=ht(),a=yr(i);return n=$T(n),e.context===null?e.context=n:e.pendingContext=n,e=Pn(s,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=mr(i,e,a),t!==null&&(Ht(t,i,a,s),ol(t,i,a)),a}function Gl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Og(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jf(t,e){Og(t,e),(t=t.alternate)&&Og(t,e)}function Jk(){return null}var qT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Df(t){this._internalRoot=t}Ac.prototype.render=Df.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));xc(t,e,null,null)};Ac.prototype.unmount=Df.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ai(function(){xc(null,t,null,null)}),e[Ln]=null}};function Ac(t){this._internalRoot=t}Ac.prototype.unstable_scheduleHydration=function(t){if(t){var e=I_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<rr.length&&e!==0&&e<rr[n].priority;n++);rr.splice(n,0,t),n===0&&S_(t)}};function Vf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mg(){}function Zk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Gl(a);s.call(h)}}var a=WT(e,r,t,0,null,!1,!1,"",Mg);return t._reactRootContainer=a,t[Ln]=a.current,Vo(t.nodeType===8?t.parentNode:t),ai(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var c=r;r=function(){var h=Gl(d);c.call(h)}}var d=Pf(t,0,!1,null,null,!1,!1,"",Mg);return t._reactRootContainer=d,t[Ln]=d.current,Vo(t.nodeType===8?t.parentNode:t),ai(function(){xc(e,d,n,r)}),d}function Nc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var c=i;i=function(){var d=Gl(a);c.call(d)}}xc(e,a,t,i)}else a=Zk(n,e,t,i,r);return Gl(a)}w_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=no(e.pendingLanes);n!==0&&(Zh(e,n|1),Et(e,Ve()),!(pe&6)&&(cs=Ve()+500,Lr()))}break;case 13:ai(function(){var r=On(t,1);if(r!==null){var i=ht();Ht(r,t,1,i)}}),jf(t,1)}};ef=function(t){if(t.tag===13){var e=On(t,134217728);if(e!==null){var n=ht();Ht(e,t,134217728,n)}jf(t,134217728)}};E_=function(t){if(t.tag===13){var e=yr(t),n=On(t,e);if(n!==null){var r=ht();Ht(n,t,e,r)}jf(t,e)}};I_=function(){return ye};k_=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};Dd=function(t,e,n){switch(e){case"input":if(Ad(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=_c(r);if(!i)throw Error(U(90));t_(r),Ad(r,i)}}}break;case"textarea":r_(t,n);break;case"select":e=n.value,e!=null&&$i(t,!!n.multiple,e,!1)}};u_=Cf;d_=ai;var eS={usingClientEntryPoint:!1,Events:[ia,Li,_c,l_,c_,Cf]},Qs={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tS={bundleType:Qs.bundleType,version:Qs.version,rendererPackageName:Qs.rendererPackageName,rendererConfig:Qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=p_(t),t===null?null:t.stateNode},findFiberByHostInstance:Qs.findFiberByHostInstance||Jk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ga.isDisabled&&Ga.supportsFiber)try{mc=Ga.inject(tS),fn=Ga}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eS;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vf(e))throw Error(U(200));return Xk(t,e,null,n)};Rt.createRoot=function(t,e){if(!Vf(t))throw Error(U(299));var n=!1,r="",i=qT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Pf(t,1,!1,null,null,n,!1,r,i),t[Ln]=e.current,Vo(t.nodeType===8?t.parentNode:t),new Df(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=p_(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return ai(t)};Rt.hydrate=function(t,e,n){if(!Cc(e))throw Error(U(200));return Nc(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!Vf(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=qT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=WT(e,null,t,1,n??null,i,!1,s,a),t[Ln]=e.current,Vo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ac(e)};Rt.render=function(t,e,n){if(!Cc(e))throw Error(U(200));return Nc(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!Cc(t))throw Error(U(40));return t._reactRootContainer?(ai(function(){Nc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ln]=null})}),!0):!1};Rt.unstable_batchedUpdates=Cf;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Cc(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Nc(t,e,n,!1,r)};Rt.version="18.3.1-next-f1338f8080-20240426";function GT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(GT)}catch(t){console.error(t)}}GT(),Gv.exports=Rt;var nS=Gv.exports,Fg=nS;Td.createRoot=Fg.createRoot,Td.hydrateRoot=Fg.hydrateRoot;/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=t=>{const e=iS(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Hu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},oS=H.createContext({}),aS=()=>H.useContext(oS),lS=H.forwardRef(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:r,className:i="",children:s,iconNode:a,...c},d)=>{const{size:h=24,strokeWidth:p=2,absoluteStrokeWidth:g=!1,color:_="currentColor",className:N=""}=aS()??{},R=r??g?Number(n??p)*24/Number(e??h):n??p;return H.createElement("svg",{ref:d,...Hu,width:e??h??Hu.width,height:e??h??Hu.height,stroke:t??_,strokeWidth:R,className:HT("lucide",N,i),...!s&&!sS(c)&&{"aria-hidden":"true"},...c},[...a.map(([P,V])=>H.createElement(P,V)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=(t,e)=>{const n=H.forwardRef(({className:r,...i},s)=>H.createElement(lS,{ref:s,iconNode:e,className:HT(`lucide-${rS(Ug(t))}`,`lucide-${t}`,r),...i}));return n.displayName=Ug(t),n};/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],QT=le("arrow-left",cS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Qu=le("arrow-right",uS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z",key:"1ol0lm"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}],["path",{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6",key:"1fr6do"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}]],hS=le("backpack",dS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],YT=le("book-open",fS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],mS=le("camera",pS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],zg=le("check",gS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],vS=le("chevron-down",yS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],TS=le("chevron-up",_S);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],ES=le("circle-alert",wS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],kS=le("circle-check-big",IS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],xS=le("circle-check",SS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],XT=le("circle-play",AS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],NS=le("circle-plus",CS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",key:"1cez44"}],["path",{d:"m13 12-3 5h4l-3 5",key:"1t22er"}]],bS=le("cloud-lightning",RS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"M10.94 5.274A7 7 0 0 1 15.71 10h1.79a4.5 4.5 0 0 1 4.222 6.057",key:"1uxyv8"}],["path",{d:"M18.796 18.81A4.5 4.5 0 0 1 17.5 19H9A7 7 0 0 1 5.79 5.78",key:"99tcn7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],jS=le("cloud-off",PS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],VS=le("cloud",DS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Yu=le("eye-off",LS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Xu=le("eye",OS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],FS=le("heart",MS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],zS=le("house",US);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],Kg=le("image",KS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],$S=le("key-round",BS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],To=le("lock",WS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],GS=le("log-in",qS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],QS=le("log-out",HS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Ju=le("mail",YS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["path",{d:"M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z",key:"vbtd3f"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}]],JS=le("monitor-play",XS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],ex=le("panel-left-close",ZS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],nx=le("panel-left-open",tx);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=[["path",{d:"m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999",key:"1lw9ds"}],["path",{d:"M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024",key:"ffj4ej"}],["path",{d:"M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069",key:"8tj4zw"}],["path",{d:"M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z",key:"hh6h97"}]],JT=le("pickaxe",rx);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]],Bg=le("puzzle",ix);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],ox=le("refresh-cw",sx);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],lx=le("sparkles",ax);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],ux=le("star",cx);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],hx=le("trophy",dx);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],px=le("upload",fx);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],gx=le("user",mx);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],vx=le("users",yx);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Lf=le("zap",_x),Tx=({activeTab:t,setActiveTab:e,playerData:n,syncStatus:r,onLogout:i})=>{const[s,a]=H.useState(!1),c=(n==null?void 0:n.xp)??0,d=(n==null?void 0:n.level)??0,h=(d+1)*500,p=c%500/500*100;return u.jsxs("aside",{className:`sidebar ${s?"collapsed":""}`,children:[u.jsxs("div",{className:"sidebar-header",children:[u.jsxs("div",{className:"sidebar-logo",children:[u.jsx(Lf,{className:"logo-icon",size:24}),u.jsx("span",{className:"logo-text",style:{fontFamily:'"Press Start 2P", cursive',fontSize:"1rem",letterSpacing:"0px"},children:"RoboCraft"})]}),u.jsx("button",{className:"sidebar-toggle-btn",onClick:()=>a(!s),title:s?"Menüyü Genişlet":"Menüyü Daralt",children:s?u.jsx(nx,{size:20}):u.jsx(ex,{size:20})})]}),u.jsxs("nav",{className:"nav-menu",children:[u.jsxs("div",{className:`nav-item ${t==="dashboard"?"active":""}`,onClick:()=>e("dashboard"),title:"Gösterge Paneli",children:[u.jsx(zS,{className:"nav-icon",size:20}),u.jsx("span",{className:"nav-text",children:"Gösterge Paneli"})]}),u.jsxs("div",{className:`nav-item ${t==="courses"?"active":""}`,onClick:()=>e("courses"),title:"Derslerim",children:[u.jsx(YT,{className:"nav-icon",size:20}),u.jsx("span",{className:"nav-text",children:"Derslerim"})]}),u.jsxs("div",{className:`nav-item ${t==="adventure"?"active":""}`,onClick:()=>e("adventure"),title:"Keşif Madeni",children:[u.jsx(JT,{className:"nav-icon",size:20}),u.jsx("span",{className:"nav-text",children:"Keşif Madeni"})]}),u.jsxs("div",{className:`nav-item ${t==="live"?"active":""}`,onClick:()=>e("live"),title:"Canlı Yayınlar",children:[u.jsx(JS,{className:"nav-icon",size:20}),u.jsx("span",{className:"nav-text",children:"Canlı Yayınlar"})]}),u.jsxs("div",{className:`nav-item ${t==="community"?"active":""}`,onClick:()=>e("community"),title:"Topluluk",children:[u.jsx(vx,{className:"nav-icon",size:20}),u.jsx("span",{className:"nav-text",children:"Topluluk"})]}),u.jsxs("div",{className:`nav-item nav-item-profile ${t==="profile"?"active":""}`,onClick:()=>e("profile"),title:"Profil & Envanter",id:"nav-profile",children:[u.jsx(hS,{className:"nav-icon",size:20}),u.jsx("span",{className:"nav-text",children:"Profil & Envanter"}),t!=="profile"&&u.jsx("span",{className:"nav-new-dot"})]})]}),u.jsxs("div",{className:"sidebar-bottom-controls",children:[u.jsxs("div",{className:`sync-widget ${r||"local"} ${s?"collapsed":""}`,children:[r==="synced"&&u.jsxs(u.Fragment,{children:[u.jsx(VS,{className:"sync-icon success",size:16}),!s&&u.jsx("span",{className:"sync-text",children:"Bulut Eşitlendi"})]}),r==="saving"&&u.jsxs(u.Fragment,{children:[u.jsx(ox,{className:"sync-icon spinning",size:16}),!s&&u.jsx("span",{className:"sync-text",children:"Eşitleniyor..."})]}),r==="local"&&u.jsxs(u.Fragment,{children:[u.jsx(jS,{className:"sync-icon local",size:16}),!s&&u.jsx("span",{className:"sync-text",children:"Yerel Mod (Offline)"})]}),r==="error"&&u.jsxs(u.Fragment,{children:[u.jsx(bS,{className:"sync-icon error animate-pulse",size:16}),!s&&u.jsx("span",{className:"sync-text",children:"Bağlantı Hatası"})]})]}),u.jsxs("button",{type:"button",onClick:i,className:`sidebar-logout-btn ${s?"collapsed":""}`,title:"Oturumu Kapat",children:[u.jsx(QS,{size:16,className:"logout-icon"}),!s&&u.jsx("span",{className:"logout-text",children:"Çıkış Yap"})]})]}),u.jsxs("div",{className:"level-widget",children:[u.jsx("div",{className:"level-title",children:"MEVCUT SEVİYE"}),u.jsxs("div",{className:"level-number",children:["Seviye ",d]}),u.jsx("div",{className:"progress-bar-bg",children:u.jsx("div",{className:"progress-fill",style:{width:`${p}%`}})}),u.jsxs("div",{className:"xp-text",children:[c.toLocaleString()," / ",h.toLocaleString()," XP"]})]})]})},wo=[{id:"wooden_sword",name:"Ahşap Kılıç",emoji:"🗡️",description:"Maceraya ilk adım. Temel bir kılıç.",category:"weapons",price:100,rarity:"common",slot:"hand",power:4},{id:"stone_sword",name:"Taş Kılıç",emoji:"⚔️",description:"Mağaralardan kazınan sağlam taştan yapılmış.",category:"weapons",price:250,rarity:"common",slot:"hand",power:5},{id:"iron_sword",name:"Demir Kılıç",emoji:"🔪",description:"Savaşçıların tercihi. Güvenilir ve dayanıklı.",category:"weapons",price:500,rarity:"rare",slot:"hand",power:7},{id:"diamond_sword",name:"Elmas Kılıç",emoji:"💎",description:"Nadir bulunan elmaslardan işlenmiş efsanevi kılıç.",category:"weapons",price:1200,rarity:"epic",slot:"hand",power:10},{id:"netherite_sword",name:"Netherit Kılıç",emoji:"🌋",description:"Nether'ın derinliklerinden çıkarılan en güçlü metal.",category:"weapons",price:3e3,rarity:"legendary",slot:"hand",power:13},{id:"bow",name:"Yay",emoji:"🏹",description:"Uzak mesafeden hedef almak için mükemmel.",category:"weapons",price:400,rarity:"rare",slot:"hand",power:6},{id:"leather_helmet",name:"Deri Miğfer",emoji:"🪖",description:"Temel koruma sağlayan hafif deri başlık.",category:"armor",price:150,rarity:"common",slot:"head",defense:1},{id:"iron_helmet",name:"Demir Miğfer",emoji:"⛑️",description:"Kafanı çelik gibi koruyan sağlam miğfer.",category:"armor",price:600,rarity:"rare",slot:"head",defense:2},{id:"diamond_helmet",name:"Elmas Miğfer",emoji:"💠",description:"Mavi parıltısıyla düşmanları korkutan başlık.",category:"armor",price:1500,rarity:"epic",slot:"head",defense:3},{id:"iron_chestplate",name:"Demir Göğüs Zırhı",emoji:"🛡️",description:"Göğsünü ok ve kılıçlardan koruyan güçlü zırh.",category:"armor",price:700,rarity:"rare",slot:"body",defense:6},{id:"diamond_chestplate",name:"Elmas Göğüs Zırhı",emoji:"🔷",description:"Savaş alanının en değerli zırhı.",category:"armor",price:2e3,rarity:"epic",slot:"body",defense:8},{id:"iron_boots",name:"Demir Bot",emoji:"👢",description:"Taş zemin üzerinde rahatça yürüyen metal botlar.",category:"armor",price:400,rarity:"rare",slot:"feet",defense:2},{id:"diamond_boots",name:"Elmas Bot",emoji:"👟",description:"Her arazide süzülerek yürüyen efsanevi ayakkabılar.",category:"armor",price:1200,rarity:"epic",slot:"feet",defense:3},{id:"wooden_pickaxe",name:"Ahşap Kazma",emoji:"⛏️",description:"Madenciliğin başlangıcı. Köklü bir araç.",category:"tools",price:80,rarity:"common",slot:"hand",power:2},{id:"iron_pickaxe",name:"Demir Kazma",emoji:"🔨",description:"Elmas dışındaki tüm madenleri kıran güçlü kazma.",category:"tools",price:450,rarity:"rare",slot:"hand",power:4},{id:"diamond_pickaxe",name:"Elmas Kazma",emoji:"💎",description:"Her bloğu tek vuruşta kıran mükemmel araç.",category:"tools",price:1800,rarity:"epic",slot:"hand",power:8},{id:"fishing_rod",name:"Olta",emoji:"🎣",description:"Göl kenarında sakin sakin balık tutmak için.",category:"tools",price:120,rarity:"common",slot:"hand",power:1},{id:"shovel",name:"Kürek",emoji:"🌿",description:"Toprak ve kum işlemenin vazgeçilmez aracı.",category:"tools",price:100,rarity:"common",slot:"hand",power:1},{id:"golden_apple",name:"Altın Elma",emoji:"🍎",description:"Büyülü güçlerle dolu nadir altın elma. Can geri verir.",category:"special",price:800,rarity:"rare",slot:"none",power:0},{id:"enchanted_book",name:"Büyülü Kitap",emoji:"📖",description:"Gizemli büyüler barındıran eski bir kitap.",category:"special",price:1e3,rarity:"epic",slot:"none",power:0},{id:"elytra",name:"Elytra",emoji:"🦋",description:"Gökyüzünde süzülmeni sağlayan nadir kanatlar. Son derece özel.",category:"special",price:4e3,rarity:"legendary",slot:"body",defense:0},{id:"totem",name:"Ölümsüzlük Totemi",emoji:"🗿",description:"Ölümün eşiğindeyken seni geri döndüren mistik totem.",category:"special",price:3500,rarity:"legendary",slot:"none",power:0},{id:"trident",name:"Trident",emoji:"🔱",description:"Okyanus derinliklerinden çıkarılan mitolojik silah.",category:"weapons",price:2500,rarity:"legendary",slot:"hand",power:11}],wx=[{id:"all",label:"Tümü",emoji:"🎮"},{id:"weapons",label:"Silahlar",emoji:"⚔️"},{id:"armor",label:"Zırhlar",emoji:"🛡️"},{id:"tools",label:"Araçlar",emoji:"⛏️"},{id:"special",label:"Özel",emoji:"✨"}],cn={common:{label:"Sıradan",color:"#9ca3af",glow:"rgba(156, 163, 175, 0.3)",border:"rgba(156, 163, 175, 0.4)"},rare:{label:"Nadir",color:"#60a5fa",glow:"rgba(96, 165, 250, 0.35)",border:"rgba(96, 165, 250, 0.5)"},epic:{label:"Destansı",color:"#c084fc",glow:"rgba(192, 132, 252, 0.35)",border:"rgba(192, 132, 252, 0.5)"},legendary:{label:"Efsanevi",color:"#fbbf24",glow:"rgba(251, 191, 36, 0.4)",border:"rgba(251, 191, 36, 0.6)"}},o={W:"#8b5a2b",S:"#9ca3af",I:"#e5e7eb",D:"#22d3ee",N:"#4b5563",L:"#a0522d",D_W:"#5c3a21",D_I:"#9ca3af",D_D:"#0891b2",D_N:"#374151",K:"#111827",T:"transparent"},Ys=(t,e)=>[[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.K,o.K,o.T,o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.K,t,o.K,o.T,o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.K,t,e,o.K,o.T,o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.K,t,e,o.K,o.T,o.T,o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.K,t,e,o.K,o.T,o.T,o.T,o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.K,t,e,o.K,o.T,o.T,o.T,o.T,o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.K,t,e,o.K,o.T,o.T,o.T,o.T,o.T,o.T],[o.T,o.T,o.T,o.T,o.T,o.K,t,e,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.T,o.T,o.T,o.T,o.K,t,e,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.T,o.T,o.T,o.T,o.K,e,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.T,o.T,o.K,o.K,o.K,o.K,o.K,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.T,o.K,o.W,o.D_W,o.K,o.W,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.K,t,o.K,o.K,o.K,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.K,o.K,o.T,o.T,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T]],Zu=(t,e)=>[[t,t,t,t,t,t,t,t],[t,t,e,t,t,e,t,t],[t,e,e,e,e,e,e,t],[t,e,o.T,o.T,o.T,o.T,e,t],[t,e,o.T,o.T,o.T,o.T,e,t],[t,e,o.T,o.T,o.T,o.T,e,t],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T]],$g=(t,e)=>[[o.T,o.T,t,t,t,t,o.T,o.T],[o.T,t,t,e,e,t,t,o.T],[t,t,e,e,e,e,t,t],[t,t,e,e,e,e,t,t],[t,t,t,e,e,t,t,t],[t,t,t,t,t,t,t,t],[t,t,e,e,e,e,t,t],[t,t,e,e,e,e,t,t],[o.T,t,t,t,t,t,t,o.T],[o.T,o.T,t,e,e,t,o.T,o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T]],ed=(t,e)=>[[o.T,o.T,o.T,o.T,o.T,o.T,o.K,o.K,o.K,o.K,o.K,o.K,o.K,o.T,o.T,o.T],[o.T,o.T,o.T,o.T,o.T,o.K,t,t,t,t,t,e,o.K,o.T,o.T,o.T],[o.T,o.T,o.T,o.T,o.K,t,t,t,e,e,e,e,o.K,o.T,o.T,o.T],[o.T,o.T,o.T,o.K,t,e,o.K,o.K,o.K,o.K,o.K,e,e,o.K,o.T,o.T],[o.T,o.T,o.K,t,e,o.K,o.T,o.T,o.T,o.T,o.K,e,o.K,o.T,o.T,o.T],[o.T,o.K,t,e,o.K,o.T,o.T,o.T,o.T,o.K,o.W,o.K,o.T,o.T,o.T,o.T],[o.K,t,e,o.K,o.T,o.T,o.T,o.T,o.K,o.W,o.D_W,o.K,o.T,o.T,o.T,o.T],[o.K,e,o.K,o.T,o.T,o.T,o.T,o.K,o.W,o.D_W,o.K,o.T,o.T,o.T,o.T,o.T],[o.K,o.K,o.T,o.T,o.T,o.T,o.K,o.W,o.D_W,o.K,o.T,o.T,o.T,o.T,o.T,o.T],[o.T,o.T,o.T,o.T,o.T,o.K,o.W,o.D_W,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.T,o.T,o.T,o.T,o.K,o.W,o.D_W,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.T,o.T,o.T,o.K,o.W,o.D_W,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.T,o.T,o.K,o.W,o.D_W,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.T,o.K,o.W,o.D_W,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.K,o.W,o.K,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.K,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T]],Ex=(t,e)=>[[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.K,o.K,o.K,o.T,o.T,o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.K,t,t,e,o.K,o.T,o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.K,t,t,t,e,o.K,o.T,o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.K,t,t,t,e,e,o.K,o.T,o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.K,t,t,e,e,e,o.K,o.T,o.T,o.T],[o.T,o.T,o.T,o.T,o.T,o.K,e,e,e,e,o.K,o.K,o.T,o.T,o.T,o.T],[o.T,o.T,o.T,o.T,o.T,o.K,e,o.K,o.K,o.K,o.T,o.T,o.T,o.T,o.T,o.T],[o.T,o.T,o.T,o.T,o.K,o.W,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.T,o.T,o.T,o.K,o.W,o.D_W,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.T,o.T,o.K,o.W,o.D_W,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.T,o.K,o.W,o.D_W,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.K,o.W,o.D_W,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.K,o.D_W,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.T,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T]],Ix=[[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.K,o.K,o.K],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.K,o.K,o.W,o.K,"#e5e7eb"],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.K,o.K,o.W,o.K,o.K,"#e5e7eb",o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.K,o.W,o.W,o.K,o.T,o.T,"#e5e7eb",o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.K,o.W,o.D_W,o.K,o.T,o.T,o.T,"#e5e7eb",o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.K,o.W,o.D_W,o.K,o.T,o.T,o.T,o.T,"#e5e7eb",o.T],[o.T,o.T,o.T,o.T,o.T,o.K,o.W,o.D_W,o.K,o.T,o.T,o.T,o.T,o.T,"#e5e7eb",o.T],[o.T,o.T,o.T,o.T,o.K,o.W,o.D_W,o.K,o.T,o.T,o.T,o.T,o.T,o.T,"#e5e7eb",o.T],[o.T,o.T,o.T,o.K,o.W,o.D_W,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,"#e5e7eb",o.T],[o.T,o.T,o.K,o.W,o.D_W,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,"#e5e7eb",o.T],[o.T,o.K,o.W,o.D_W,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,"#e5e7eb",o.T],[o.K,o.K,o.K,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,"#e5e7eb",o.T],[o.K,o.W,o.D_W,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.K],[o.K,o.D_W,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.K,"#e5e7eb"],[o.T,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.K],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T]],kx=[[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.K,o.K,o.K,o.T,o.T,o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.K,o.K,o.W,o.W,o.K,o.T,o.T,o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.K,o.K,o.W,o.D_W,o.K,o.K,"#e5e7eb",o.K,o.T,o.T],[o.T,o.T,o.T,o.T,o.K,o.K,o.W,o.W,o.K,o.K,o.T,o.T,"#e5e7eb",o.T,o.K,o.T],[o.T,o.T,o.T,o.K,o.W,o.W,o.K,o.K,o.T,o.T,o.T,o.T,"#e5e7eb",o.T,o.K,o.T],[o.T,o.T,o.K,o.W,o.W,o.K,o.T,o.T,o.T,o.T,o.T,o.T,"#e5e7eb",o.T,o.K,o.T],[o.T,o.K,o.W,o.W,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,"#e5e7eb",o.T,o.K,o.T],[o.T,o.K,o.W,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,"#e5e7eb",o.T,o.K,o.T],[o.T,o.K,o.D_W,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,"#e5e7eb",o.T,o.K,o.T],[o.T,o.K,o.D_W,o.D_W,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,"#e5e7eb",o.T,o.K,o.T],[o.T,o.T,o.K,o.D_W,o.D_W,o.K,o.T,o.T,o.T,o.T,o.T,o.T,"#e5e7eb",o.T,o.K,o.T],[o.T,o.T,o.T,o.K,o.D_W,o.D_W,o.K,o.K,o.T,o.T,o.T,o.T,"#e5e7eb",o.T,o.K,o.T],[o.T,o.T,o.T,o.T,o.K,o.K,o.D_W,o.D_W,o.K,o.K,o.T,o.T,"#e5e7eb",o.T,o.K,o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.K,o.K,o.D_W,o.D_W,o.K,o.K,"#e5e7eb",o.K,o.T,o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.K,o.K,o.D_W,o.D_W,o.K,o.T,o.T,o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.K,o.K,o.K,o.T,o.T,o.T]],Sx=[[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.K,o.D,o.D,o.K,o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.K,o.D,o.D,o.D,o.K,o.D],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.K,o.K,o.D,o.I,o.D,o.K,o.D,o.K],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.K,o.D,o.I,o.K,o.D,o.K,o.T,o.K,o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.K,o.D,o.I,o.K,o.T,o.K,o.T,o.T,o.T,o.T],[o.T,o.T,o.T,o.T,o.T,o.K,o.D,o.I,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.T,o.T,o.T,o.T,o.K,o.D,o.I,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.T,o.T,o.T,o.K,o.D,o.I,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.T,o.T,o.K,o.D,o.I,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.T,o.K,o.D,o.I,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.K,o.D,o.I,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.D,o.D,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.D,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.D,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.K,o.D,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T],[o.T,o.K,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T]],xx={wooden_sword:{type:"sword",pixels:Ys(o.W,o.D_W)},stone_sword:{type:"sword",pixels:Ys(o.S,o.D_I)},iron_sword:{type:"sword",pixels:Ys(o.I,o.D_I)},diamond_sword:{type:"sword",pixels:Ys(o.D,o.D_D)},netherite_sword:{type:"sword",pixels:Ys(o.N,o.D_N)},bow:{type:"bow",pixels:kx},trident:{type:"sword",pixels:Sx},wooden_pickaxe:{type:"tool",pixels:ed(o.W,o.D_W)},iron_pickaxe:{type:"tool",pixels:ed(o.I,o.D_I)},diamond_pickaxe:{type:"tool",pixels:ed(o.D,o.D_D)},fishing_rod:{type:"tool",pixels:Ix},shovel:{type:"tool",pixels:Ex(o.I,o.D_I)},leather_helmet:{type:"helmet",pixels:Zu(o.L,"#8b4513")},iron_helmet:{type:"helmet",pixels:Zu(o.I,o.D_I)},diamond_helmet:{type:"helmet",pixels:Zu(o.D,o.D_D)},iron_chestplate:{type:"chestplate",pixels:$g(o.I,o.D_I)},diamond_chestplate:{type:"chestplate",pixels:$g(o.D,o.D_D)},elytra:{type:"wings",pixels:[[o.T,o.S,o.T,o.T,o.T,o.T,o.S,o.T],[o.S,o.I,o.T,o.T,o.T,o.T,o.I,o.S],[o.S,o.I,o.T,o.T,o.T,o.T,o.I,o.S],[o.S,o.I,o.T,o.T,o.T,o.T,o.I,o.S],[o.S,o.D_I,o.T,o.T,o.T,o.T,o.D_I,o.S],[o.T,o.D_I,o.T,o.T,o.T,o.T,o.D_I,o.T],[o.T,o.D_I,o.T,o.T,o.T,o.T,o.D_I,o.T],[o.T,o.T,o.T,o.T,o.T,o.T,o.T,o.T]]}},Ax=t=>Array(32).fill().map((e,n)=>Array(16).fill().map((r,i)=>i>=4&&i<12&&n>=0&&n<8?n<2?t.hairColor:n===4&&(i===6||i===9)?t.eyeColor:n===6&&i>=6&&i<10?t.hairColor:t.skinColor:i>=4&&i<12&&n>=8&&n<20?t.shirtColor:(i<4||i>=12)&&n>=8&&n<20?n<12?t.shirtColor:t.skinColor:i>=4&&i<12&&n>=20&&n<32?n>28?"#3d2b1f":t.pantsColor:null)),li=({avatar:t,customSkin:e,equippedItems:n,onSelectAvatar:r,availableAvatars:i,playerLevel:s})=>{var N;if(!t)return null;const a=e||Ax(t),c=R=>{const P=n==null?void 0:n[R];return P&&wo.find(V=>V.id===P)||null},d=c("head"),h=c("body"),p=c("hand"),g=c("feet"),_=(R,P,V)=>{if(!R)return null;const x=xx[R.id];return!x||!x.pixels?null:x.pixels.map((k,b)=>k.map((j,A)=>j==="transparent"?null:u.jsx("rect",{x:P+A,y:V+b,width:"1",height:"1",fill:j},`${R.id}-${A}-${b}`)))};return u.jsxs("div",{className:"avatar-section",children:[u.jsxs("div",{className:"avatar-render-area",children:[u.jsx("div",{className:"avatar-bg-particles",children:[...Array(6)].map((R,P)=>u.jsx("div",{className:`particle particle-${P}`},P))}),u.jsx("div",{className:"mc-character",children:u.jsxs("svg",{viewBox:"0 0 32 36",width:"160",height:"180",style:{imageRendering:"pixelated"},className:"mc-svg",children:[u.jsx("g",{transform:"translate(8, 2)",children:a.map((R,P)=>R.map((V,x)=>V?u.jsx("rect",{x,y:P,width:"1",height:"1",fill:V},`skin-${x}-${P}`):null))}),u.jsxs("g",{transform:"translate(8, 2)",children:[_(h,0,8),g&&u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"4",y:"28",width:"8",height:"4",fill:((N=cn[g.rarity])==null?void 0:N.color)||"#4b5563"}),u.jsx("rect",{x:"4",y:"27",width:"8",height:"1",fill:"#111827",opacity:"0.3"})]}),_(d,4,0),_(p,10,4),(h==null?void 0:h.id)==="elytra"&&_(h,0,8)]})]})}),u.jsx("div",{className:"avatar-name-tag",children:u.jsx("span",{className:"avatar-name-text",children:e?"Özel Karakter":t.name})}),u.jsx("div",{className:"avatar-shadow"})]}),u.jsxs("div",{className:"equipped-slots",children:[u.jsx("div",{className:"equipped-slot-title",children:"🎽 Giyilen Eşyalar"}),u.jsx("div",{className:"equipped-slots-grid",children:[{slot:"head",label:"⛑️ Kask",item:d},{slot:"body",label:"🛡️ Zırh",item:h},{slot:"hand",label:"🤚 El",item:p},{slot:"feet",label:"👢 Bot",item:g}].map(({slot:R,label:P,item:V})=>{var x,k;return u.jsxs("div",{className:`equipped-slot-card ${V?"has-item":"empty"}`,style:V?{"--rarity-color":(x=cn[V.rarity])==null?void 0:x.color,"--rarity-glow":(k=cn[V.rarity])==null?void 0:k.glow}:{},children:[u.jsx("div",{className:"slot-label",children:P}),V?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"slot-item-emoji",children:V.emoji}),u.jsx("div",{className:"slot-item-name",children:V.name})]}):u.jsx("div",{className:"slot-empty-text",children:"Boş"})]},R)})})]}),i&&u.jsxs("div",{className:"avatar-selector",children:[u.jsx("div",{className:"avatar-selector-title",children:"🎭 Karakter Seç"}),u.jsx("div",{className:"avatar-grid",children:i.map(R=>{const P=R.unlockLevel>s,V=R.id===t.id&&!e;return u.jsxs("button",{className:`avatar-card ${V?"selected":""} ${P?"locked":""}`,onClick:()=>!P&&r&&r(R),title:P?`Seviye ${R.unlockLevel}'de açılır`:R.name,disabled:P,children:[P&&u.jsxs("div",{className:"avatar-lock-overlay",children:["🔒",u.jsxs("span",{children:["Lv.",R.unlockLevel]})]}),u.jsx("div",{className:"avatar-card-emoji",children:R.emoji}),u.jsx("div",{className:"avatar-card-name",children:R.name}),V&&u.jsx("div",{className:"avatar-selected-dot"})]},R.id)})})]})]})},jn=[{id:"steve",name:"Steve",description:"Minecraft'ın efsanevi kahramanı",emoji:"🧑",skinColor:"#c68642",hairColor:"#5b3c1a",eyeColor:"#3d85c8",shirtColor:"#3d85c8",pantsColor:"#5b3c1a",unlockLevel:0},{id:"alex",name:"Alex",description:"Cesur ve güçlü maceracı",emoji:"👩",skinColor:"#c68642",hairColor:"#c97a3d",eyeColor:"#2d5f2d",shirtColor:"#3d8b3d",pantsColor:"#5b3c1a",unlockLevel:0},{id:"creeper",name:"Creeper",description:"Ssss... Patlamamak için söz veriyorum!",emoji:"💚",skinColor:"#4a7c4a",hairColor:"#2d5c2d",eyeColor:"#000000",shirtColor:"#3d6b3d",pantsColor:"#2d5c2d",unlockLevel:3},{id:"skeleton",name:"İskelet",description:"Nether'dan gelen kemik savaşçı",emoji:"💀",skinColor:"#e8e8d0",hairColor:"#c8c8b0",eyeColor:"#000000",shirtColor:"#d0d0b8",pantsColor:"#b8b8a0",unlockLevel:5},{id:"enderman",name:"Enderman",description:"Karanlığın efendisi, teleport ustası",emoji:"🖤",skinColor:"#1a1a2e",hairColor:"#0d0d1a",eyeColor:"#800080",shirtColor:"#0d0d1a",pantsColor:"#0a0a15",unlockLevel:8},{id:"villager",name:"Köylü",description:"Ticaretin ustası, bilge köy sakini",emoji:"👳",skinColor:"#c68642",hairColor:"#5b3c1a",eyeColor:"#2d5f2d",shirtColor:"#6b5b3e",pantsColor:"#4a3728",unlockLevel:10}],Wg=({isDarkMode:t,toggleTheme:e,playerData:n,setActiveTab:r})=>{var a;const i=jn.find(c=>c.id===(n==null?void 0:n.avatarId))||jn[0],s=n!=null&&n.displayName?n.displayName.split(" ")[0]:"Kahraman";return u.jsxs(u.Fragment,{children:[u.jsxs("header",{className:"top-header",children:[u.jsxs("div",{className:"greeting-area",children:[u.jsxs("h1",{children:["Hoş Geldin, ",s,"!"]}),u.jsx("p",{children:"Öğrenmeye ve üretmeye hazır mısın?"})]}),u.jsxs("div",{className:"header-actions",children:[u.jsx("div",{className:"icon-btn theme-toggle",onClick:e,title:"Tema Değiştir",children:t?"☀️":"🌙"}),u.jsxs("div",{className:"search-bar",children:[u.jsx("span",{children:"🔍"}),u.jsx("input",{type:"text",placeholder:"Kurs veya konu ara..."})]}),u.jsxs("div",{className:"icon-btn",children:[u.jsx("span",{children:"🔔"}),u.jsx("div",{className:"notification-dot"})]}),u.jsx("div",{className:"user-avatar-placeholder",style:{padding:0,overflow:"hidden",cursor:"pointer",border:"2px solid var(--accent-cyan)",background:"transparent",display:"flex",alignItems:"center",justifyContent:"center"},onClick:()=>r("showcase"),title:"Vitrinine Git!",children:u.jsx("div",{style:{transform:"scale(0.35)",transformOrigin:"center center"},children:u.jsx(li,{avatar:i,customSkin:n==null?void 0:n.customSkin,equippedItems:n==null?void 0:n.equippedItems})})})]})]}),u.jsxs("div",{className:"dashboard-grid",children:[u.jsxs("div",{className:"left-column",children:[u.jsxs("div",{className:"card icebreaker-banner-card",children:[u.jsxs("div",{className:"icebreaker-banner-info",children:[u.jsx("span",{className:"badge badge-icebreaker",children:"ÖZEL ETKİNLİK"}),u.jsx("h2",{children:"Giriş: Buz Kırma Etkinliği"}),u.jsx("p",{children:"Toplulukla tanışmak için kendi robotunun veya devrenin görselini yükle, diğer öğrencilerin paylaşımlarını keşfet! 📸🤖"}),u.jsxs("button",{className:"btn-primary",onClick:()=>r("icebreaker"),children:[u.jsx("span",{children:"🚀"})," Etkinliğe Katıl"]})]}),u.jsxs("div",{className:"icebreaker-preview-area",children:[u.jsx("div",{className:"neon-grid-pattern"}),u.jsx("span",{children:"👾"})]})]}),u.jsxs("div",{className:"card active-course-card",children:[u.jsxs("div",{className:"course-info",children:[u.jsx("span",{className:"badge",children:"Aktif Kursun"}),u.jsx("h2",{children:"Arduino: LED Yakıp Söndürme"}),u.jsx("p",{children:"🕑 Son çalışma: 2 saat önce • Adım 3'te kaldın."}),u.jsxs("button",{className:"btn-primary",children:[u.jsx("span",{children:"▶"})," Kaldığın Yerden Devam Et"]})]}),u.jsx("div",{className:"image-placeholder",children:"Breadboard Görsel Alanı"})]}),u.jsxs("div",{className:"stats-row",children:[u.jsxs("div",{className:"card stat-card",children:[u.jsx("div",{className:"stat-icon icon-purple",children:"🔥"}),u.jsxs("div",{className:"stat-text",children:[u.jsx("h3",{children:"7 Gün"}),u.jsx("p",{children:"Öğrenme Serisi"})]})]}),u.jsxs("div",{className:"card stat-card",onClick:()=>r("profile"),style:{cursor:"pointer"},children:[u.jsx("div",{className:"stat-icon icon-blue",children:"🤖"}),u.jsxs("div",{className:"stat-text",children:[u.jsxs("h3",{children:[((a=n==null?void 0:n.unlockedGolems)==null?void 0:a.length)||0," Golem"]}),u.jsx("p",{children:"Keşfedilen Golem"})]})]})]})]}),u.jsx("div",{className:"right-column",children:u.jsxs("div",{className:"card live-event-card",children:[u.jsxs("div",{className:"event-header",children:[u.jsx("h3",{children:"Sıradaki Etkinlik"}),u.jsxs("div",{className:"live-indicator",children:[u.jsx("div",{className:"pulse-dot"}),"CANLI"]})]}),u.jsxs("div",{className:"event-image-placeholder",children:["Eğitmen Görsel Alanı",u.jsx("div",{className:"time-tag",children:"15:00'da Başlıyor"})]}),u.jsxs("div",{className:"event-details",children:[u.jsx("h4",{children:"Çoklu LED ve Döngüler"}),u.jsx("p",{children:"👨‍🏫 Eğitmen: Elifnur Bağcı"}),u.jsx("button",{className:"btn-danger",children:"Derse Katıl"})]})]})})]})]})},Cx=()=>u.jsxs("div",{className:"live-classroom",children:[u.jsxs("header",{className:"live-header-bar",children:[u.jsxs("div",{className:"live-header-left",children:[u.jsx("span",{className:"badge-live",children:"CANLI YAYIN"}),u.jsx("span",{className:"live-title",children:"Arduino Döngüleri (For & While)"})]}),u.jsxs("div",{className:"live-header-right",children:[u.jsx("button",{className:"btn-secondary",children:"✋ Söz İste"}),u.jsx("button",{className:"btn-outline-danger",children:"Dersten Ayrıl"})]})]}),u.jsxs("div",{className:"live-main",children:[u.jsxs("div",{className:"live-left-panel",children:[u.jsxs("div",{className:"video-container",children:[u.jsx("div",{className:"video-placeholder",children:"Eğitmen Kamera Görseli (Selin Yılmaz)"}),u.jsx("div",{className:"video-overlay-name",children:"🎥 Selin Yılmaz"})]}),u.jsxs("div",{className:"chat-container",children:[u.jsx("div",{className:"chat-header",children:"Sınıf Sohbeti (24 Kişi)"}),u.jsxs("div",{className:"chat-messages",children:[u.jsxs("div",{className:"chat-message",children:[u.jsx("span",{className:"chat-name-instructor",children:"Eğitmen:"}),u.jsx("span",{className:"chat-text",children:"Herkes breadboard kurulumunu bitirdi mi?"})]}),u.jsxs("div",{className:"chat-message",children:[u.jsx("span",{className:"chat-name-student",children:"Ahmet K.:"}),u.jsx("span",{className:"chat-text",children:"Evet hocam, LED'leri bağladım."})]}),u.jsxs("div",{className:"chat-message",children:[u.jsx("span",{className:"chat-name-student",children:"Zeynep A.:"}),u.jsx("span",{className:"chat-text",children:"Direnç yönü fark etmiyor değil mi?"})]}),u.jsxs("div",{className:"chat-message",children:[u.jsx("span",{className:"chat-name-instructor",children:"Eğitmen:"}),u.jsx("span",{className:"chat-text",children:"Hayır Zeynep, dirençlerin yönü (polaritesi) yoktur, istediğin yönde takabilirsin. 👍"})]})]}),u.jsxs("div",{className:"chat-input-area",children:[u.jsx("input",{type:"text",className:"chat-input",placeholder:"Bir mesaj yazın..."}),u.jsx("button",{className:"chat-send-btn",children:"➤"})]})]})]}),u.jsxs("div",{className:"live-workspace",children:[u.jsxs("div",{className:"workspace-header",children:[u.jsxs("div",{className:"workspace-tabs",children:[u.jsx("div",{className:"workspace-tab active",children:"⚙️ Tinkercad Simülatörü"}),u.jsx("div",{className:"workspace-tab",children:"🔌 Şema Görünümü"})]}),u.jsx("button",{className:"btn-success",children:"▶ Simülasyonu Başlat"})]}),u.jsxs("div",{className:"workspace-content",children:[u.jsx("div",{className:"simulator-pane",children:u.jsxs("div",{className:"simulator-placeholder",children:[u.jsx("div",{className:"drag-drop-badge",children:"✥ Sürükle ve Bırak"}),"Breadboard Simülasyon Görseli"]})}),u.jsxs("div",{className:"code-pane",children:[u.jsx("div",{className:"code-title",children:"SKETCH.INO"}),u.jsxs("div",{className:"code-line",children:[u.jsx("span",{className:"syntax-keyword",children:"void"})," ",u.jsx("span",{className:"syntax-function",children:"setup"}),"() ","{"]}),u.jsxs("div",{className:"code-line",children:["  ",u.jsx("span",{className:"syntax-comment",children:"// 4. Pini çıkış olarak ayarla"})]}),u.jsxs("div",{className:"code-line",children:["  ",u.jsx("span",{className:"syntax-function",children:"pinMode"}),"(",u.jsx("span",{className:"syntax-number",children:"4"}),", ",u.jsx("span",{className:"syntax-text",children:"OUTPUT"}),");"]}),u.jsx("div",{className:"code-line",children:"}"}),u.jsx("div",{className:"code-line",children:u.jsx("br",{})}),u.jsxs("div",{className:"code-line",children:[u.jsx("span",{className:"syntax-keyword",children:"void"})," ",u.jsx("span",{className:"syntax-function",children:"loop"}),"() ","{"]}),u.jsxs("div",{className:"code-line",children:["  ",u.jsx("span",{className:"syntax-comment",children:"// LED'i yak ve 1 sn bekle"})]}),u.jsxs("div",{className:"code-line",children:["  ",u.jsx("span",{className:"syntax-function",children:"digitalWrite"}),"(",u.jsx("span",{className:"syntax-number",children:"4"}),", ",u.jsx("span",{className:"syntax-text",children:"HIGH"}),");"]}),u.jsxs("div",{className:"code-line",children:["  ",u.jsx("span",{className:"syntax-function",children:"delay"}),"(",u.jsx("span",{className:"syntax-number",children:"1000"}),");"]}),u.jsx("div",{className:"code-line",children:u.jsx("br",{})}),u.jsxs("div",{className:"code-line",children:["  ",u.jsx("span",{className:"syntax-comment",children:"// LED'i söndür ve 1 sn bekle"})]}),u.jsxs("div",{className:"code-line",children:["  ",u.jsx("span",{className:"syntax-function",children:"digitalWrite"}),"(",u.jsx("span",{className:"syntax-number",children:"4"}),", ",u.jsx("span",{className:"syntax-text",children:"LOW"}),");"]}),u.jsxs("div",{className:"code-line",children:["  ",u.jsx("span",{className:"syntax-function",children:"delay"}),"(",u.jsx("span",{className:"syntax-number",children:"1000"}),");"]}),u.jsx("div",{className:"code-line",children:"}"})]})]})]})]})]}),Nx=({isDarkMode:t,toggleTheme:e})=>{const n=[{rank:1,name:"Ali Kaya",xp:5200},{rank:2,name:"Zeynep Aslan",xp:4850},{rank:3,name:"Ahmet Yılmaz",xp:4600},{rank:4,name:"Elifnur Bağcı",xp:4100},{rank:5,name:"Caner Ekinci",xp:3950},{rank:6,name:"Ayşe Çelik",xp:3800},{rank:7,name:"Burak Demir",xp:3720},{rank:8,name:"Deniz Yıldız",xp:3650},{rank:9,name:"Emre Şahin",xp:3500},{rank:10,name:"Fatma Öztürk",xp:3400},{rank:11,name:"Gökhan Aydın",xp:3250},{rank:12,name:"Hande Polat",xp:3100},{rank:13,name:"İbrahim Koç",xp:2950},{rank:14,name:"Kemal Aksoy",xp:2800},{rank:15,name:"Leyla Kılıç",xp:2600}],r=[{id:1,user:"Ahmet Yılmaz",text:"Arduino: LED Yakıp Söndürme dersini tamamladı.",time:"10 dk önce",icon:"📚"},{id:2,user:"Ayşe Çelik",text:"C++ Pointers testinden 100 tam puan aldı!",time:"45 dk önce",icon:"⭐"},{id:3,user:"Caner Ekinci",text:"Tinkercad Breadboard görevini paylaştı.",time:"2 saat önce",icon:"🛠️"},{id:4,user:"Zeynep Aslan",text:"Hafta 2 modüllerini %100 tamamladı.",time:"3 saat önce",icon:"🏆"}];return u.jsxs(u.Fragment,{children:[u.jsxs("header",{className:"top-header",children:[u.jsxs("div",{className:"greeting-area",children:[u.jsx("h1",{children:"Topluluk ve Liderlik 👥"}),u.jsx("p",{children:"Diğer öğrencilerle etkileşime geçin ve sıralamanızı görün."})]}),u.jsxs("div",{className:"header-actions",children:[u.jsx("div",{className:"icon-btn theme-toggle",onClick:e,style:{cursor:"pointer"},title:"Tema Değiştir",children:t?"☀️":"🌙"}),u.jsxs("div",{className:"search-bar",children:[u.jsx("span",{children:"🔍"}),u.jsx("input",{type:"text",placeholder:"Öğrenci veya konu ara..."})]}),u.jsxs("div",{className:"icon-btn",children:[u.jsx("span",{children:"🔔"}),u.jsx("div",{className:"notification-dot"})]}),u.jsx("div",{className:"user-avatar-placeholder"})]})]}),u.jsxs("div",{className:"community-container",children:[u.jsx("div",{className:"community-left",children:u.jsxs("div",{className:"card h-full flex-col",children:[u.jsx("h2",{className:"section-title",children:"Liderlik Tablosu"}),u.jsx("div",{className:"leaderboard-list",children:n.map(i=>u.jsxs("div",{className:`leaderboard-item ${i.rank<=3?"top-three":""}`,children:[u.jsx("div",{className:"lb-rank",children:i.rank===1?"🥇":i.rank===2?"🥈":i.rank===3?"🥉":i.rank}),u.jsx("div",{className:"lb-name",children:i.name}),u.jsxs("div",{className:"lb-xp",children:[i.xp," XP"]})]},i.rank))})]})}),u.jsxs("div",{className:"community-right",children:[u.jsxs("div",{className:"card activity-card",children:[u.jsx("h2",{className:"section-title",children:"Son Etkinlikler"}),u.jsx("div",{className:"activity-feed",children:r.map(i=>u.jsxs("div",{className:"activity-item",children:[u.jsx("div",{className:"act-icon",children:i.icon}),u.jsxs("div",{className:"act-content",children:[u.jsx("span",{className:"act-user",children:i.user})," ",i.text,u.jsx("div",{className:"act-time",children:i.time})]})]},i.id))})]}),u.jsxs("div",{className:"card chat-card",children:[u.jsx("div",{className:"chat-header",children:"Topluluk Sohbeti"}),u.jsxs("div",{className:"chat-messages",children:[u.jsxs("div",{className:"chat-message",children:[u.jsx("span",{className:"chat-name-student",style:{color:"#c678dd"},children:"Kemal Aksoy:"}),u.jsx("span",{className:"chat-text",children:"Arkadaşlar merhaba, döngüler ödevini bitiren var mı?"})]}),u.jsxs("div",{className:"chat-message",children:[u.jsx("span",{className:"chat-name-student",children:"Ayşe Çelik:"}),u.jsx("span",{className:"chat-text",children:"Ben bitirdim Kemal, for döngüsünü kullanırsan çok daha kısa sürüyor."})]}),u.jsxs("div",{className:"chat-message",children:[u.jsx("span",{className:"chat-name-student",style:{color:"#61afef"},children:"Ali Kaya:"}),u.jsx("span",{className:"chat-text",children:"Aynen, while yerine for çok daha pratik oldu bu projede."})]})]}),u.jsxs("div",{className:"chat-input-area",children:[u.jsx("input",{type:"text",className:"chat-input",placeholder:"Topluluğa bir mesaj gönderin..."}),u.jsx("button",{className:"chat-send-btn",children:"➤"})]})]})]})]})]})},Rx=({playerXP:t,inventory:e,equippedItems:n,onBuy:r,onEquip:i,onUnequip:s})=>{const[a,c]=H.useState("shop"),[d,h]=H.useState("all"),[p,g]=H.useState(null),[_,N]=H.useState(null),R=wo.filter(A=>d==="all"||A.category===d),P=A=>e.includes(A),V=A=>Object.values(n).includes(A),x=A=>t>=A,k=A=>{!x(A.price)||P(A.id)||(r(A),N(A.id),setTimeout(()=>N(null),2e3),g(null))},b=A=>{A.slot!=="none"&&(V(A.id)?s(A.slot):i(A))},j=wo.filter(A=>e.includes(A.id));return u.jsxs("div",{className:"item-shop",children:[u.jsxs("div",{className:"shop-tabs",children:[u.jsxs("button",{className:`shop-tab ${a==="shop"?"active":""}`,onClick:()=>c("shop"),id:"tab-shop",children:["🛒 Mağaza",u.jsxs("span",{className:"shop-tab-count",children:[wo.length," eşya"]})]}),u.jsxs("button",{className:`shop-tab ${a==="inventory"?"active":""}`,onClick:()=>c("inventory"),id:"tab-inventory",children:["🎒 Envanterim",u.jsxs("span",{className:"shop-tab-count",children:[j.length," eşya"]})]})]}),a==="shop"&&u.jsxs("div",{className:"shop-content",children:[u.jsx("div",{className:"category-filter",children:wx.map(A=>u.jsxs("button",{className:`cat-btn ${d===A.id?"active":""}`,onClick:()=>h(A.id),id:`cat-${A.id}`,children:[A.emoji," ",A.label]},A.id))}),u.jsx("div",{className:"items-grid",children:R.map(A=>{const F=P(A.id),y=x(A.price),v=cn[A.rarity],I=_===A.id;return u.jsxs("div",{className:`item-card ${A.rarity} ${F?"owned":""} ${!y&&!F?"locked":""} ${I?"buy-success":""}`,style:{"--rarity-color":v.color,"--rarity-glow":v.glow,"--rarity-border":v.border},onClick:()=>g((p==null?void 0:p.id)===A.id?null:A),id:`item-${A.id}`,children:[!F&&!y&&u.jsxs("div",{className:"item-lock-overlay",children:[u.jsx("span",{className:"lock-icon",children:"🔒"}),u.jsxs("span",{className:"lock-xp",children:["+",A.price-t," XP gerek"]})]}),F&&u.jsx("div",{className:"owned-badge",children:"✓"}),I&&u.jsx("div",{className:"success-flash",children:"✨ Alındı!"}),u.jsx("div",{className:"rarity-stripe"}),u.jsx("div",{className:"item-emoji",children:A.emoji}),u.jsxs("div",{className:"item-info",children:[u.jsx("div",{className:"item-name",children:A.name}),u.jsx("div",{className:"item-rarity-badge",style:{color:v.color},children:v.label})]}),u.jsx("div",{className:`item-price ${F?"owned-price":y?"can-afford":"cant-afford"}`,children:F?"✅ Sahipsin":`⚡ ${A.price.toLocaleString()} XP`})]},A.id)})})]}),a==="inventory"&&u.jsx("div",{className:"inventory-content",children:j.length===0?u.jsxs("div",{className:"empty-inventory",children:[u.jsx("div",{className:"empty-inv-icon",children:"📦"}),u.jsx("div",{className:"empty-inv-title",children:"Envanterin Boş"}),u.jsx("div",{className:"empty-inv-desc",children:"Mağazadan eşya satın al ve buraya ekle!"})]}):u.jsx("div",{className:"items-grid inventory-grid",children:j.map(A=>{const F=V(A.id),y=cn[A.rarity],v=A.slot!=="none";return u.jsxs("div",{className:`item-card ${A.rarity} owned ${F?"equipped-active":""}`,style:{"--rarity-color":y.color,"--rarity-glow":y.glow,"--rarity-border":y.border},onClick:()=>g((p==null?void 0:p.id)===A.id?null:A),id:`inv-item-${A.id}`,children:[F&&u.jsx("div",{className:"equipped-badge",children:"🎽 Giyili"}),u.jsx("div",{className:"rarity-stripe"}),u.jsx("div",{className:"item-emoji",children:A.emoji}),u.jsxs("div",{className:"item-info",children:[u.jsx("div",{className:"item-name",children:A.name}),u.jsx("div",{className:"item-rarity-badge",style:{color:y.color},children:y.label})]}),v&&u.jsx("button",{className:`equip-btn ${F?"unequip":""}`,onClick:I=>{I.stopPropagation(),b(A)},id:`equip-${A.id}`,children:F?"📤 Çıkar":"📥 Giydir"})]},A.id)})})}),p&&u.jsxs("div",{className:"item-detail-panel",id:"item-detail-panel",children:[u.jsx("div",{className:"detail-backdrop",onClick:()=>g(null)}),u.jsxs("div",{className:`detail-card ${p.rarity}`,style:{"--rarity-color":cn[p.rarity].color,"--rarity-glow":cn[p.rarity].glow,"--rarity-border":cn[p.rarity].border},children:[u.jsx("button",{className:"detail-close",onClick:()=>g(null),children:"✕"}),u.jsx("div",{className:"detail-emoji",children:p.emoji}),u.jsx("div",{className:"detail-name",children:p.name}),u.jsxs("div",{className:"detail-rarity",style:{color:cn[p.rarity].color},children:["✦ ",cn[p.rarity].label]}),u.jsx("div",{className:"detail-description",children:p.description}),u.jsxs("div",{className:"detail-stats",children:[p.power>0&&u.jsxs("div",{className:"stat-pill",children:["⚔️ Güç: ",p.power]}),p.defense>0&&u.jsxs("div",{className:"stat-pill",children:["🛡️ Savunma: ",p.defense]}),p.slot!=="none"&&u.jsxs("div",{className:"stat-pill",children:["📍 Slot: ",p.slot]})]}),P(p.id)?p.slot!=="none"?u.jsx("button",{className:`detail-action-btn ${V(p.id)?"unequip-btn":"equip-primary-btn"}`,onClick:()=>{b(p),g(null)},id:"detail-equip-btn",children:V(p.id)?"📤 Çıkar":"📥 Avatara Giydir"}):u.jsx("div",{className:"detail-owned-msg",children:"✅ Sahipsin"}):u.jsx("button",{className:`detail-action-btn buy-btn ${x(p.price)?"":"disabled"}`,onClick:()=>k(p),disabled:!x(p.price),id:"detail-buy-btn",children:x(p.price)?`⚡ ${p.price.toLocaleString()} XP ile Satın Al`:`🔒 Yetersiz XP (${(p.price-t).toLocaleString()} XP eksik)`})]})]})]})},td=Array(32).fill().map((t,e)=>Array(16).fill().map((n,r)=>r>=4&&r<12&&e>=0&&e<8?e<2?"#5b3c1a":e===4&&(r===6||r===9)?"#3d85c8":e===6&&r>=6&&r<10?"#5b3c1a":"#c68642":r>=4&&r<12&&e>=8&&e<20?"#3d85c8":(r<4||r>=12)&&e>=8&&e<20?e<12?"#3d85c8":"#c68642":r>=4&&r<12&&e>=20&&e<32?e>28?"#3d2b1f":"#5b3c1a":null)),qg=["#c68642","#e8b890","#5b3c1a","#3d85c8","#3d8b3d","#4a7c4a","#fbbf24","#ef4444","#10b981","#8b5cf6","#111827","#ffffff"],bx=({currentSkin:t,onSave:e,onClose:n})=>{const[r,i]=H.useState(t||td),[s,a]=H.useState(qg[0]),[c,d]=H.useState(!1),[h,p]=H.useState("brush"),g=(R,P)=>{if(r[P][R]===null)return;const V=[...r];V[P]=[...V[P]],V[P][R]=h==="eraser"?td[P][R]:s,i(V)},_=(R,P)=>{c&&g(R,P)},N=()=>{d(!1)};return H.useEffect(()=>(window.addEventListener("mouseup",N),()=>window.removeEventListener("mouseup",N)),[]),u.jsx("div",{className:"skin-editor-overlay",children:u.jsxs("div",{className:"skin-editor-modal",children:[u.jsxs("div",{className:"se-header",children:[u.jsx("h3",{children:"🖌️ Skin Düzenleyici"}),u.jsx("button",{className:"se-close-btn",onClick:n,children:"✕"})]}),u.jsxs("div",{className:"se-body",children:[u.jsxs("div",{className:"se-tools",children:[u.jsxs("div",{className:"se-tool-group",children:[u.jsx("h4",{children:"Araçlar"}),u.jsxs("div",{className:"se-tool-btns",children:[u.jsx("button",{className:`se-tool-btn ${h==="brush"?"active":""}`,onClick:()=>p("brush"),children:"🖌️ Fırça"}),u.jsx("button",{className:`se-tool-btn ${h==="eraser"?"active":""}`,onClick:()=>p("eraser"),children:"🧹 Silgi"})]})]}),u.jsxs("div",{className:"se-tool-group",children:[u.jsx("h4",{children:"Renk Paleti"}),u.jsx("div",{className:"se-palette",children:qg.map(R=>u.jsx("button",{className:`se-color-swatch ${s===R&&h==="brush"?"active":""}`,style:{backgroundColor:R},onClick:()=>{a(R),p("brush")}},R))}),u.jsxs("div",{className:"se-custom-color",children:[u.jsx("input",{type:"color",value:s,onChange:R=>{a(R.target.value),p("brush")}}),u.jsx("span",{children:"Özel Renk"})]})]})]}),u.jsx("div",{className:"se-canvas-container",children:u.jsx("div",{className:"se-grid",onMouseLeave:N,children:r.map((R,P)=>u.jsx("div",{className:"se-row",children:R.map((V,x)=>u.jsx("div",{className:`se-pixel ${V===null?"empty":""}`,style:{backgroundColor:V||"transparent"},onMouseDown:()=>g(x,P),onMouseEnter:()=>_(x,P),onTouchStart:()=>g(x,P)},`${x}-${P}`))},P))})})]}),u.jsxs("div",{className:"se-footer",style:{justifyContent:"space-between"},children:[u.jsx("button",{className:"se-btn secondary",onClick:()=>i(td),style:{color:"var(--accent-red)"},children:"🔄 Sıfırla"}),u.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[u.jsx("button",{className:"se-btn secondary",onClick:n,children:"İptal"}),u.jsx("button",{className:"se-btn primary",onClick:()=>e(r),children:"✅ Tamamlandı ve Kaydet"})]})]})]})})},Xs={m1:[{id:"golem_m1",name:"Kömür Golemi",skinColor:"#1f2937",hairColor:"#111827",shirtColor:"#374151",pantsColor:"#111827",eyeColor:"#ef4444",emoji:"⬛"},{id:"golem_m1_magma",name:"Magma Kömür Golemi",skinColor:"#450a0a",hairColor:"#7f1d1d",shirtColor:"#991b1b",pantsColor:"#450a0a",eyeColor:"#fde047",emoji:"🌋"}],m4:[{id:"golem_m4",name:"Demir Golemi",skinColor:"#e5e7eb",hairColor:"#9ca3af",shirtColor:"#d1d5db",pantsColor:"#6b7280",eyeColor:"#3b82f6",emoji:"⚪"},{id:"golem_m4_rust",name:"Paslı Demir Golemi",skinColor:"#9a3412",hairColor:"#7c2d12",shirtColor:"#c2410c",pantsColor:"#431407",eyeColor:"#ea580c",emoji:"⛓️"}],m2:[{id:"golem_m2",name:"Bakır Golemi",skinColor:"#d97706",hairColor:"#b45309",shirtColor:"#451a03",pantsColor:"#78350f",eyeColor:"#fde047",emoji:"🟠"},{id:"golem_m2_ox",name:"Oksitli Bakır Golemi",skinColor:"#14b8a6",hairColor:"#0f766e",shirtColor:"#042f2e",pantsColor:"#134e4a",eyeColor:"#ccfbf1",emoji:"🗽"}],m3:[{id:"golem_m3",name:"Altın Golemi",skinColor:"#fde047",hairColor:"#eab308",shirtColor:"#ca8a04",pantsColor:"#a16207",eyeColor:"#ffffff",emoji:"🟡"},{id:"golem_m3_rose",name:"Rose Gold Golem",skinColor:"#fda4af",hairColor:"#fb7185",shirtColor:"#e11d48",pantsColor:"#9f1239",eyeColor:"#ffe4e6",emoji:"🌸"}]},Px={m1:["Kömür madenleri çok karanlık. Orada dikkatli ol!","Daha fazla kömür, fırınlarımız için iyidir.","Bana siyah ve havalı eşyalar al!"],m4:["Demir gibi sağlamım!","Kalkanlar ve zırhlar benden sorulur.","Bana yeni bir zırh alırsan daha da güçlenirim."],m2:["Bakır işlemek ustalık ister.","Paslanmamaya dikkat etmeliyim.","Biraz daha bakır bulursan bana zırh alabilirsin."],m3:["Altın gibi parlıyorum!","Zenginlik her şey değildir ama güzel görünmek harika.","Madenlerde en derine in, altın orada!"]},Gg=[{id:"leather_helmet",name:"Deri Miğfer",emoji:"🪖",slot:"head",cost:{coal:5,iron:0,copper:0,gold:0}},{id:"iron_helmet",name:"Demir Miğfer",emoji:"⛑️",slot:"head",cost:{coal:10,iron:5,copper:0,gold:0}},{id:"iron_chestplate",name:"Demir Göğüs Zırhı",emoji:"🛡️",slot:"body",cost:{coal:15,iron:8,copper:5,gold:0}},{id:"diamond_chestplate",name:"Elmas Göğüs Zırhı",emoji:"🔷",slot:"body",cost:{coal:0,iron:10,copper:15,gold:5}},{id:"diamond_pickaxe",name:"Elmas Kazma",emoji:"💎",slot:"hand",cost:{coal:0,iron:5,copper:20,gold:10}},{id:"iron_pickaxe",name:"Demir Kazma",emoji:"🔨",slot:"hand",cost:{coal:12,iron:8,copper:5,gold:0}}],jx=({playerData:t,setPlayerData:e,handleGolemEquip:n,buyGolemItem:r})=>{const[i,s]=H.useState(null),[a,c]=H.useState(""),{resources:d,golemEquipment:h,inventory:p,golemVariations:g,unlockedGolems:_}=t,N=y=>(_||[]).includes(y),R=[{id:"m1",isUnlocked:N("coal"),taskName:"Kömür Bul!"},{id:"m4",isUnlocked:N("iron"),taskName:"Demir Bul!"},{id:"m2",isUnlocked:N("copper"),taskName:"Bakır Bul!"},{id:"m3",isUnlocked:N("gold"),taskName:"Altın Bul!"}],P=(y,v)=>{v&&s(y)},V=(y,v)=>{y.stopPropagation();const I=Px[v];c(I[Math.floor(Math.random()*I.length)]),setTimeout(()=>c(""),3e3)},x=y=>{p.includes(y.id)||r&&r(y.id,y.cost)},k=(y,v)=>{e(I=>({...I,golemVariations:{...I.golemVariations,[y]:v}}))},b=i&&((g==null?void 0:g[i])||Xs[i][0].id),j=i&&Xs[i].find(y=>y.id===b),A=i&&(h[i]||{}),F=p.map(y=>Gg.find(v=>v.id===y)||wo.find(v=>v.id===y)).filter(Boolean);return u.jsxs("div",{className:"golems-view-container",children:[u.jsx("div",{className:"golems-showcase",children:u.jsx("div",{className:"golem-grid",children:R.map(y=>{const v=y.id,I=(g==null?void 0:g[v])||Xs[v][0].id,E=Xs[v].find(C=>C.id===I),S=h[v]||{};return u.jsxs("div",{className:`golem-card ${y.isUnlocked?"unlocked-card":"locked-card"}`,onClick:()=>P(v,y.isUnlocked),children:[!y.isUnlocked&&u.jsxs("div",{className:"golem-locked-overlay",children:[u.jsx("div",{className:"locked-icon",children:"🔒"}),u.jsx("div",{className:"locked-text",children:y.taskName})]}),u.jsxs("div",{className:"gc-display",children:[u.jsx(li,{avatar:E,equippedItems:S}),a&&y.isUnlocked&&u.jsx("div",{className:"golem-chat-bubble",children:a})]}),u.jsxs("div",{className:"gc-info",children:[u.jsx("h4",{children:E.name}),y.isUnlocked&&u.jsxs("div",{className:"gc-actions",children:[u.jsx("button",{className:"gc-talk-btn",onClick:C=>V(C,v),children:"💬 Konuş"}),u.jsx("p",{className:"gc-hint",children:"Büyütmek için tıkla"})]})]})]},v)})})}),u.jsxs("div",{className:"golem-shop",style:{marginTop:"2rem"},children:[u.jsxs("div",{className:"tc-header",children:[u.jsx("h3",{children:"🛒 Golem Ekipman Mağazası"}),u.jsx("p",{children:"Keşif Madeninden bulduğun madenleri kullanarak Golemlerine kıyafet satın al."}),u.jsxs("div",{className:"shop-my-resources",children:[u.jsx("span",{children:"Senin Madenlerin: "}),u.jsxs("span",{className:"res-badge",children:["⬛ ",(d==null?void 0:d.coal)||0]}),u.jsxs("span",{className:"res-badge",children:["⚪ ",(d==null?void 0:d.iron)||0]}),u.jsxs("span",{className:"res-badge",children:["🟠 ",(d==null?void 0:d.copper)||0]}),u.jsxs("span",{className:"res-badge",children:["🟡 ",(d==null?void 0:d.gold)||0]})]})]}),u.jsx("div",{className:"golem-shop-grid",children:Gg.map(y=>{const v=p.includes(y.id),I=((d==null?void 0:d.coal)||0)>=y.cost.coal&&((d==null?void 0:d.iron)||0)>=y.cost.iron&&((d==null?void 0:d.copper)||0)>=y.cost.copper&&((d==null?void 0:d.gold)||0)>=y.cost.gold;return u.jsxs("div",{className:`golem-shop-item ${v?"owned":""}`,children:[u.jsx("div",{className:"gs-icon",children:y.emoji}),u.jsxs("div",{className:"gs-info",children:[u.jsx("h4",{children:y.name}),u.jsxs("div",{className:"gs-cost",children:[y.cost.coal>0&&u.jsxs("span",{children:["⬛ ",y.cost.coal]}),y.cost.iron>0&&u.jsxs("span",{children:["⚪ ",y.cost.iron]}),y.cost.copper>0&&u.jsxs("span",{children:["🟠 ",y.cost.copper]}),y.cost.gold>0&&u.jsxs("span",{children:["🟡 ",y.cost.gold]})]})]}),u.jsx("button",{className:"gs-buy-btn",onClick:()=>x(y),disabled:v||!I,children:v?"Alındı":"Satın Al"})]},y.id)})})]}),i&&j&&u.jsx("div",{className:"golem-modal-overlay",onClick:()=>s(null),children:u.jsxs("div",{className:"golem-modal-content",onClick:y=>y.stopPropagation(),children:[u.jsx("button",{className:"golem-modal-close",onClick:()=>s(null),children:"✕"}),u.jsx("div",{className:"gm-header",children:u.jsxs("h2",{children:[j.name," Yönetimi"]})}),u.jsxs("div",{className:"gm-body",children:[u.jsx("div",{className:"gm-left",children:u.jsx(li,{avatar:j,equippedItems:A})}),u.jsxs("div",{className:"gm-right",children:[u.jsxs("div",{className:"gm-section",children:[u.jsx("h3",{children:"🎭 Stil (Varyasyon) Seç"}),u.jsx("div",{className:"gm-variations",children:Xs[i].map(y=>u.jsxs("button",{className:`gm-vari-btn ${b===y.id?"active":""}`,onClick:()=>k(i,y.id),children:[u.jsx("span",{className:"vari-emoji",children:y.emoji}),y.name]},y.id))})]}),u.jsxs("div",{className:"gm-section gc-inventory",children:[u.jsx("h3",{children:"🎒 Envanterinden Giydir"}),F.length===0?u.jsx("p",{className:"gc-empty-inv",children:"Hiç eşyan yok. Aşağıdaki mağazadan al!"}):u.jsx("div",{className:"gc-items-grid",children:F.map(y=>{const v=A[y.slot]===y.id;return u.jsxs("div",{className:`gc-item-slot ${v?"equipped":""}`,onClick:()=>n(i,y),title:y.name,children:[u.jsx("span",{className:"gc-item-emoji",children:y.emoji}),v&&u.jsx("div",{className:"gc-equipped-dot"})]},y.id)})})]})]})]})]})})]})},Dx=({playerData:t,setPlayerData:e,setActiveTab:n,exchangeResource:r,handleGolemEquip:i,buyGolemItem:s})=>{const[a,c]=H.useState("shop"),[d,h]=H.useState(!1),p=jn.find(j=>j.id===t.avatarId)||jn[0],g=j=>{e(A=>({...A,customSkin:j})),h(!1)},_=j=>{t.xp<j.price||t.inventory.includes(j.id)||e(A=>({...A,xp:A.xp-j.price,inventory:[...A.inventory,j.id]}))},N=j=>{e(A=>({...A,equippedItems:{...A.equippedItems,[j.slot]:j.id}}))},R=j=>{e(A=>{const F={...A.equippedItems};return delete F[j],{...A,equippedItems:F}})},P=j=>{e(A=>({...A,avatarId:j.id}))},V=(t.level+1)*500,x=t.xp%500/500*100,k=t.tasks||[],b=k.filter(j=>j.done).length;return u.jsxs("div",{className:"profile-view",children:[u.jsxs("div",{className:"profile-header",children:[u.jsx("div",{className:"profile-header-left",children:u.jsxs("div",{className:"profile-title-area",children:[u.jsxs("h1",{className:"profile-title",children:[u.jsx("span",{className:"mc-title-icon",children:"⚔️"}),"Profil & Envanter"]}),u.jsx("p",{className:"profile-subtitle",children:"Görevleri tamamla, XP kazan, eşyaları satın al ve avatarını özelleştir!"})]})}),u.jsxs("div",{className:"profile-xp-widget",children:[u.jsxs("div",{className:"xp-level-badge",children:[u.jsx("span",{className:"xp-level-num",children:t.level}),u.jsx("span",{className:"xp-level-label",children:"SEVİYE"})]}),u.jsxs("div",{className:"xp-bar-area",children:[u.jsxs("div",{className:"xp-bar-labels",children:[u.jsxs("span",{children:["⚡ ",t.xp.toLocaleString()," XP"]}),u.jsxs("span",{className:"xp-next",children:["Sonraki: ",V.toLocaleString()]})]}),u.jsx("div",{className:"xp-bar-bg",children:u.jsx("div",{className:"xp-bar-fill",style:{width:`${x}%`},children:u.jsx("div",{className:"xp-bar-shine"})})})]})]})]}),u.jsxs("div",{className:"profile-main-layout",children:[u.jsxs("div",{className:"profile-left-panel",children:[u.jsx(li,{avatar:p,customSkin:t.customSkin,equippedItems:t.equippedItems,onSelectAvatar:P,availableAvatars:jn,playerLevel:t.level}),u.jsx("button",{className:"edit-skin-btn",onClick:()=>h(!0),children:"🖌️ Karakterini Düzenle"})]}),u.jsxs("div",{className:"profile-right-panel",children:[u.jsxs("div",{className:"right-panel-tabs",children:[u.jsx("button",{className:`rp-tab ${a==="shop"?"active":""}`,onClick:()=>c("shop"),children:"🛒 Mağaza & Envanter"}),u.jsxs("button",{className:`rp-tab ${a==="tasks"?"active":""}`,onClick:()=>c("tasks"),children:["📋 Görevler",k.filter(j=>!j.done).length>0&&u.jsx("span",{className:"task-badge",children:k.filter(j=>!j.done).length})]}),u.jsx("button",{className:`rp-tab ${a==="golems"?"active":""}`,onClick:()=>c("golems"),children:"🤖 Golemlerim"})]}),a==="shop"&&u.jsx(Rx,{playerXP:t.xp,inventory:t.inventory,equippedItems:t.equippedItems,onBuy:_,onEquip:N,onUnequip:R}),a==="tasks"&&u.jsxs("div",{className:"tasks-panel",children:[u.jsxs("div",{className:"tasks-header-info",children:[u.jsxs("div",{style:{marginBottom:"1rem"},children:[u.jsx("h3",{style:{fontSize:"1.1rem",color:"var(--text-primary)",marginBottom:"0.3rem"},children:"🎯 Günlük Görevler"}),u.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)"},children:"Puan (XP) kazanmak için sana tanımlanan aşağıdaki görevleri tamamla. Görevin üstüne tıklayarak ilgili sekmeye (Derslerim, Keşif Madeni vb.) gidebilirsin."})]}),u.jsxs("div",{className:"tasks-progress-text",children:[b,"/",k.length," görev tamamlandı"]}),u.jsx("div",{className:"tasks-progress-bar",children:u.jsx("div",{className:"tasks-progress-fill",style:{width:`${b/k.length*100}%`}})})]}),u.jsx("div",{className:"tasks-list",children:k.map(j=>u.jsxs("div",{className:`task-item ${j.done?"done":""}`,id:`task-${j.id}`,children:[u.jsx("div",{className:"task-icon",children:j.icon||"🚀"}),u.jsxs("div",{className:"task-content",children:[u.jsx("div",{className:"task-title",children:j.title}),u.jsxs("div",{className:"task-reward",children:[u.jsxs("span",{className:"task-xp-badge",children:["⚡ ",j.xp," XP"]}),u.jsx("span",{className:"task-xp-badge",style:{background:"var(--accent-cyan)",color:"#000",marginLeft:"0.5rem"},children:"+50 Kazma"})]})]}),u.jsx("div",{style:{display:"flex",gap:"0.5rem"},children:u.jsx("button",{className:`task-btn ${j.done?"task-done-btn":""}`,onClick:()=>{!j.done&&n&&n(j.targetTab)},disabled:j.done,title:j.done?"Tamamlandı":"Öğretmenin tanımladığı göreve git",children:j.done?"✅ Tamamlandı":"🚀 Göreve Git"})})]},j.id))}),b===k.length&&u.jsxs("div",{className:"all-done-message",children:[u.jsx("div",{className:"all-done-icon",children:"🏆"}),u.jsx("div",{className:"all-done-title",children:"Tüm görevler tamamlandı!"}),u.jsx("div",{className:"all-done-desc",children:"Harika iş çıkardın! Yeni görevler yakında geliyor."})]})]}),a==="golems"&&u.jsx(jx,{playerData:t,setPlayerData:e,exchangeResource:r,handleGolemEquip:i,buyGolemItem:s})]})]}),d&&u.jsx(bx,{currentSkin:t.customSkin,onSave:g,onClose:()=>h(!1)})]})},Vx=({tasks:t,updateTaskProgress:e,setActiveTab:n,setActiveVideoWeek:r})=>{const[i,s]=H.useState("week1"),[a,c]=H.useState(!1),[d,h]=H.useState(""),[p,g]=H.useState(""),_=t.find(A=>A.id==="week6"),N=(_==null?void 0:_.tinkercadLink)||"",R=t.filter(A=>A.targetTab==="courses").length,P=t.filter(A=>A.targetTab==="courses"&&A.done).length,V=R>0?Math.round(P/R*100):0,x=(A,F)=>{F&&s(y=>y===A?null:A)},k=(A,F=100)=>{e(A,F)},b=()=>{h(N),g(""),c(!0)},j=A=>{if(A.preventDefault(),!d.trim()){g("Lütfen Tinkercad proje bağlantınızı girin.");return}if(!d.includes("tinkercad.com")){g("Lütfen geçerli bir Tinkercad bağlantısı girin.");return}e("week6",50,{tinkercadLink:d}),c(!1)};return u.jsxs("div",{className:"courses-view",children:[u.jsxs("div",{className:"courses-header",children:[u.jsxs("div",{className:"ch-title-area",children:[u.jsxs("h1",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[u.jsx(YT,{size:28,className:"text-cyan"})," Derslerim ve Görevlerim"]}),u.jsx("p",{children:"Öğretmeninin senin için tanımladığı içerikleri tamamla ve bir sonraki haftanın kilidini aç!"})]}),u.jsxs("div",{className:"ch-progress-area",children:[u.jsxs("div",{className:"ch-progress-text",children:["Genel İlerleme ",u.jsxs("span",{children:["%",V]})]}),u.jsx("div",{className:"ch-progress-bar",children:u.jsx("div",{className:"ch-progress-fill",style:{width:`${V}%`}})})]})]}),u.jsx("div",{className:"weeks-container",style:{display:"flex",flexDirection:"column",gap:"1rem",marginTop:"2rem"},children:t.filter(A=>A.id.startsWith("week")).map((A,F)=>{const y=i===A.id,v=A.unlocked;return u.jsxs("div",{className:`week-card ${v?"":"locked"} ${A.done?"completed":""}`,style:{backgroundColor:"var(--bg-card)",borderRadius:"var(--border-radius-md)",border:`1px solid ${v?"var(--border-color)":"rgba(255,255,255,0.02)"}`,overflow:"hidden",transition:"all 0.3s ease",opacity:v?1:.6},children:[u.jsxs("div",{className:"week-header",onClick:()=>x(A.id,v),style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1.5rem",cursor:v?"pointer":"not-allowed",backgroundColor:y?"rgba(255,255,255,0.03)":"transparent"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[A.done?u.jsx(kS,{className:"text-cyan",size:24}):v?u.jsx("div",{style:{width:24,height:24,borderRadius:"50%",border:"2px solid var(--accent-cyan)"}}):u.jsx(To,{size:24,color:"#666"}),u.jsx("h3",{style:{margin:0,fontSize:"1.2rem",color:v?"var(--text-primary)":"var(--text-secondary)"},children:A.title})]}),v&&u.jsx("div",{children:y?u.jsx(TS,{size:20}):u.jsx(vS,{size:20})})]}),v&&y&&u.jsxs("div",{className:"week-content",style:{padding:"1.5rem",borderTop:"1px solid var(--border-color)"},children:[u.jsxs("p",{style:{color:"var(--text-secondary)",marginBottom:"1.5rem"},children:["Bu haftanın görevlerini tamamlayarak ",A.xp," XP kazanabilir ve bir sonraki haftanın kilidini açabilirsin."]}),u.jsxs("div",{className:"task-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"1rem"},children:[u.jsxs("div",{className:"task-box",style:{padding:"1rem",backgroundColor:"rgba(0,0,0,0.2)",borderRadius:"8px",border:"1px solid rgba(255,255,255,0.05)"},children:[u.jsxs("h4",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"},children:[u.jsx(XT,{size:18})," Konu Anlatımı"]}),u.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginBottom:"1rem"},children:"Asenkron ders videosunu izle."}),u.jsx("button",{className:"btn-primary",style:{width:"100%",justifyContent:"center",padding:"0.6rem",fontSize:"0.85rem"},onClick:()=>{r&&r(A.id),n&&n("video-player")},children:A.progress>=50?"Videoyu Tekrar İzle":"Videoyu İzle (+%50)"})]}),A.id==="week6"?u.jsxs("div",{className:"task-box",style:{padding:"1rem",backgroundColor:"rgba(0,0,0,0.2)",borderRadius:"8px",border:"1px solid rgba(255,255,255,0.05)"},children:[u.jsxs("h4",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"},children:[u.jsx(Bg,{size:18})," Görev: Kod Dedektifi"]}),u.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginBottom:"1rem"},children:"Çöken güvenlik sistemini onar!"}),u.jsx("button",{className:"btn-primary",style:{width:"100%",justifyContent:"center",padding:"0.6rem",fontSize:"0.85rem",backgroundColor:"var(--bg-card-hover)",color:"var(--text-primary)"},onClick:b,disabled:A.progress<50,children:A.done?"Görev Tamamlandı":A.progress<50?"Önce Videoyu İzle":"Görevi Çöz"})]}):u.jsxs("div",{className:"task-box",style:{padding:"1rem",backgroundColor:"rgba(0,0,0,0.2)",borderRadius:"8px",border:"1px solid rgba(255,255,255,0.05)"},children:[u.jsxs("h4",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"},children:[u.jsx(Bg,{size:18})," Sürükle Bırak Testi"]}),u.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginBottom:"1rem"},children:"Öğrendiklerini etkileşimli test ile pekiştir."}),u.jsx("button",{className:"btn-primary",style:{width:"100%",justifyContent:"center",padding:"0.6rem",fontSize:"0.85rem",backgroundColor:"var(--bg-card-hover)",color:"var(--text-primary)"},onClick:()=>k(A.id,50),disabled:A.done||A.progress<50,children:A.done?"Tamamlandı":A.progress<50?"Önce Videoyu İzle":"Testi Çöz (+%50)"})]})]}),u.jsxs("div",{className:"week-progress",style:{marginTop:"1.5rem"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.85rem",marginBottom:"0.5rem"},children:[u.jsx("span",{children:"Haftalık İlerleme"}),u.jsxs("span",{children:[A.progress,"%"]})]}),u.jsx("div",{className:"week-progress-bar-bg",style:{width:"100%",height:"6px",backgroundColor:"rgba(255,255,255,0.1)",borderRadius:"3px",overflow:"hidden"},children:u.jsx("div",{style:{height:"100%",width:`${A.progress}%`,backgroundColor:"var(--accent-cyan)",transition:"width 0.3s"}})})]})]})]},A.id)})}),a&&u.jsxs("div",{className:"detective-modal-overlay",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(7, 10, 18, 0.85)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,padding:"1rem",boxSizing:"border-box"},onClick:()=>c(!1),children:[u.jsx("style",{children:`
            @keyframes modalSlideIn {
              from {
                transform: translateY(-20px);
                opacity: 0;
              }
              to {
                transform: translateY(0);
                opacity: 1;
              }
            }
          `}),u.jsxs("div",{className:"detective-modal-card",style:{background:"#151d2a",width:"100%",maxWidth:"520px",borderRadius:"16px",border:"1px solid rgba(255, 255, 255, 0.08)",boxShadow:"0 20px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(59, 130, 246, 0.15)",overflow:"hidden",position:"relative",animation:"modalSlideIn 0.3s ease-out"},onClick:A=>A.stopPropagation(),children:[u.jsxs("div",{style:{background:"linear-gradient(135deg, #1d4ed8, #2563eb, #3b82f6)",padding:"1.75rem 2rem",position:"relative",display:"flex",alignItems:"center",gap:"1.25rem"},children:[u.jsx("div",{style:{background:"rgba(255, 255, 255, 0.15)",width:"48px",height:"48px",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.8rem",boxShadow:"inset 0 1px 2px rgba(255, 255, 255, 0.2)"},children:"🕵️‍♂️"}),u.jsxs("div",{style:{flex:1},children:[u.jsx("h2",{style:{margin:0,color:"#fff",fontSize:"1.4rem",fontWeight:800,letterSpacing:"-0.02em",display:"flex",alignItems:"center",gap:"0.5rem"},children:"Görev: Kod Dedektifi"}),u.jsx("p",{style:{margin:"4px 0 0 0",color:"rgba(255, 255, 255, 0.8)",fontSize:"0.85rem",fontWeight:500},children:"Çöken güvenlik sistemini onar!"})]}),u.jsx("div",{style:{background:"rgba(0, 0, 0, 0.25)",color:"#fff",padding:"4px 12px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:800,border:"1px solid rgba(255, 255, 255, 0.15)",letterSpacing:"0.05em"},children:"HAFTA 6"}),u.jsx("button",{onClick:()=>c(!1),style:{position:"absolute",top:"1rem",right:"1rem",background:"none",border:"none",color:"rgba(255, 255, 255, 0.6)",fontSize:"1.25rem",cursor:"pointer",padding:"4px",display:"flex",alignItems:"center",justifyContent:"center",transition:"color 0.2s"},onMouseEnter:A=>A.target.style.color="#fff",onMouseLeave:A=>A.target.style.color="rgba(255, 255, 255, 0.6)",children:"✕"})]}),u.jsxs("div",{style:{padding:"2rem"},children:[u.jsxs("div",{className:"detective-alert-box",style:{background:"rgba(251, 146, 60, 0.05)",borderLeft:"4px solid #f97316",padding:"1.25rem",borderRadius:"0 8px 8px 0",marginBottom:"1.5rem",fontSize:"0.9rem",lineHeight:"1.6",color:"rgba(255, 255, 255, 0.9)"},children:[u.jsx("div",{style:{fontWeight:800,color:"#f97316",display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"},children:"🚨 ACİL DURUM!"}),"Kötü niyetli bir hacker grubu laboratuvarımızın girişindeki alarmın kodlarını ve kablolarını karıştırdı. Simülasyonu başlattığımızda LED patlıyor!",u.jsx("br",{}),u.jsx("br",{}),"Tinkercad'e git, donanım hatasını ",u.jsx("strong",{children:"(eksik direnç)"})," bul ve kodun içindeki matematiksel hatayı ",u.jsx("strong",{children:"(= yerine == olmalı)"})," düzelt. Kurtardığın devrenin linkini aşağıya yapıştır."]}),u.jsxs("div",{className:"detective-rewards-box",style:{border:"1.5px dashed rgba(16, 185, 129, 0.4)",background:"rgba(16, 185, 129, 0.03)",borderRadius:"12px",padding:"1.05rem 1.25rem",marginBottom:"1.75rem",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"1rem"},children:[u.jsx("span",{className:"detective-rewards-label",style:{fontSize:"0.9rem",color:"rgba(255, 255, 255, 0.7)",fontWeight:600},children:"Görevi Tamamlarsan:"}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("span",{style:{background:"rgba(16, 185, 129, 0.15)",color:"#34d399",padding:"6px 12px",borderRadius:"8px",fontSize:"0.85rem",fontWeight:700,display:"flex",alignItems:"center",gap:"4px",border:"1px solid rgba(16, 185, 129, 0.2)"},children:"⚡ +150 XP"}),u.jsx("span",{className:"detective-rewards-sublabel",style:{fontSize:"0.8rem",color:"rgba(255, 255, 255, 0.5)",fontWeight:500},children:"Deneyim Puanı"})]})]}),u.jsxs("form",{onSubmit:j,children:[u.jsxs("div",{style:{marginBottom:"1.5rem"},children:[u.jsx("label",{className:"detective-input-label",style:{display:"block",fontSize:"0.9rem",fontWeight:700,color:"#fff",marginBottom:"0.6rem"},children:"Tinkercad Proje Bağlantın"}),u.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center"},children:[u.jsx("span",{className:"detective-link-icon",style:{position:"absolute",left:"12px",color:"rgba(255, 255, 255, 0.4)",fontSize:"1rem",display:"flex",alignItems:"center"},children:"🔗"}),u.jsx("input",{type:"text",placeholder:"https://www.tinkercad.com/things/...",value:d,onChange:A=>{h(A.target.value),p&&g("")},disabled:_==null?void 0:_.done,className:"detective-input",style:{width:"100%",background:"#0d1520",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"10px",padding:"12px 12px 12px 38px",color:"#fff",fontSize:"0.9rem",outline:"none",transition:"border-color 0.2s",boxSizing:"border-box"},onFocus:A=>A.target.style.borderColor="#3b82f6",onBlur:A=>A.target.style.borderColor="rgba(255, 255, 255, 0.1)"})]}),p&&u.jsxs("div",{style:{color:"#ef4444",fontSize:"0.8rem",marginTop:"6px",fontWeight:500},children:["⚠️ ",p]}),u.jsx("div",{className:"detective-footnote",style:{fontSize:"0.75rem",color:"rgba(255, 255, 255, 0.4)",marginTop:"8px",lineHeight:"1.4"},children:'* Projenin gizlilik ayarını "Herkese Açık" yapmayı unutma!'})]}),_!=null&&_.done?u.jsx("button",{type:"button",onClick:()=>c(!1),style:{width:"100%",background:"rgba(16, 185, 129, 0.15)",color:"#34d399",border:"1px solid rgba(16, 185, 129, 0.3)",padding:"14px",borderRadius:"10px",fontWeight:700,fontSize:"0.95rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:"✓ Görev Tamamlandı (Kapat)"}):u.jsx("button",{type:"submit",style:{width:"100%",background:"#3b82f6",color:"#fff",border:"none",padding:"14px",borderRadius:"10px",fontWeight:700,fontSize:"0.95rem",cursor:"pointer",transition:"background-color 0.2s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},onMouseEnter:A=>A.target.style.backgroundColor="#2563eb",onMouseLeave:A=>A.target.style.backgroundColor="#3b82f6",children:"🚀 Görevi Tamamla ve Ödülleri Al"})]})]})]})]})]})},Hg=t=>{const e=Math.min(6+Math.floor(t/2),12),n=e*e,r=[];for(let i=0;i<n;i++){const s=Math.random();let a="stone";s>.95?a="gold":s>.85?a="iron":s>.7?a="copper":s>.45&&(a="coal"),r.push({id:i,type:a,revealed:!1})}return{newTiles:r,size:e}},nd={coal:{name:"Kömür Golemi",emoji:"⬛",id:"m1"},copper:{name:"Bakır Golemi",emoji:"🟠",id:"m2"},iron:{name:"Demir Golemi",emoji:"⚪",id:"m4"},gold:{name:"Altın Golemi",emoji:"🟡",id:"m3"}},Qg={m1:[{id:"golem_m1",name:"Kömür Golemi",skinColor:"#1f2937",hairColor:"#111827",shirtColor:"#374151",pantsColor:"#111827",eyeColor:"#ef4444",emoji:"⬛"},{id:"golem_m1_magma",name:"Magma Kömür Golemi",skinColor:"#450a0a",hairColor:"#7f1d1d",shirtColor:"#991b1b",pantsColor:"#450a0a",eyeColor:"#fde047",emoji:"🌋"}],m4:[{id:"golem_m4",name:"Demir Golemi",skinColor:"#e5e7eb",hairColor:"#9ca3af",shirtColor:"#d1d5db",pantsColor:"#6b7280",eyeColor:"#3b82f6",emoji:"⚪"},{id:"golem_m4_rust",name:"Paslı Demir Golemi",skinColor:"#9a3412",hairColor:"#7c2d12",shirtColor:"#c2410c",pantsColor:"#431407",eyeColor:"#ea580c",emoji:"⛓️"}],m2:[{id:"golem_m2",name:"Bakır Golemi",skinColor:"#d97706",hairColor:"#b45309",shirtColor:"#451a03",pantsColor:"#78350f",eyeColor:"#fde047",emoji:"🟠"},{id:"golem_m2_ox",name:"Oksitli Bakır Golemi",skinColor:"#14b8a6",hairColor:"#0f766e",shirtColor:"#042f2e",pantsColor:"#134e4a",eyeColor:"#ccfbf1",emoji:"🗽"}],m3:[{id:"golem_m3",name:"Altın Golemi",skinColor:"#fde047",hairColor:"#eab308",shirtColor:"#ca8a04",pantsColor:"#a16207",eyeColor:"#ffffff",emoji:"🟡"},{id:"golem_m3_rose",name:"Rose Gold Golem",skinColor:"#fda4af",hairColor:"#fb7185",shirtColor:"#e11d48",pantsColor:"#9f1239",eyeColor:"#ffe4e6",emoji:"🌸"}]},Lx=({playerData:t,collectResource:e,useEnergy:n,unlockGolem:r})=>{var V,x,k,b,j,A,F;const[i,s]=H.useState([]),[a,c]=H.useState(8),[d,h]=H.useState([]),[p,g]=H.useState(null);H.useEffect(()=>{const{newTiles:y,size:v}=Hg(t.level||1);s(y),c(v)},[t.level]);const _=(y,v)=>{const I=i[v];if(I.revealed||!n(1))return;const E=[...i];if(E[v].revealed=!0,s(E),I.type!=="stone"){e(I.type,1),t.unlockedGolems.includes(I.type)||(r(I.type),g(I.type));const S=Date.now(),C=y.currentTarget.getBoundingClientRect(),w=y.clientX-C.left,B=y.clientY-C.top;h(K=>[...K,{id:S,x:w,y:B,text:`+1 ${I.type.toUpperCase()}`}]),setTimeout(()=>{h(K=>K.filter(Y=>Y.id!==S))},1e3)}else{const S=Date.now(),C=y.currentTarget.getBoundingClientRect(),w=y.clientX-C.left,B=y.clientY-C.top;h(K=>[...K,{id:S,x:w,y:B,text:"BOŞ"}]),setTimeout(()=>{h(K=>K.filter(Y=>Y.id!==S))},1e3)}},N=()=>{const{newTiles:y,size:v}=Hg(t.level||1);s(y),c(v)},R=(y,v)=>{const I=nd[y].id,{golemVariations:E,golemEquipment:S}=t,C=(E==null?void 0:E[I])||Qg[I][0].id,w=Qg[I].find(K=>K.id===C),B=(S==null?void 0:S[I])||{};return u.jsxs("div",{style:{position:"absolute",...v,transform:"scale(0.5)",transformOrigin:"bottom center",zIndex:5,pointerEvents:"none",filter:"drop-shadow(0px 10px 10px rgba(0,0,0,0.5))"},children:[u.jsx(li,{avatar:w,equippedItems:B}),u.jsx("div",{style:{position:"absolute",top:"-40px",left:"50%",transform:"translateX(-50%)",background:"rgba(0,0,0,0.7)",padding:"5px 10px",borderRadius:"10px",fontSize:"1.2rem",whiteSpace:"nowrap"},children:"Maden bekçisi ⛏️"})]},y)},P={coal:{top:"10%",left:"5%"},iron:{top:"30%",right:"5%"},copper:{bottom:"20%",left:"10%"},gold:{bottom:"10%",right:"10%"}};return u.jsxs("div",{className:"adventure-view",style:{position:"relative"},children:[(V=t.unlockedGolems)==null?void 0:V.map(y=>P[y]?R(y,P[y]):null),u.jsxs("div",{className:"adventure-header",children:[u.jsxs("div",{className:"ah-title",children:[u.jsxs("h1",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[u.jsx(JT,{size:28,className:"text-cyan"})," Keşif Madeni"]}),u.jsx("p",{children:"Şansını dene! Her kazı 1 enerji harcar. Karanlık taşların altında ne olduğunu bul. Seviyen arttıkça maden büyür!"})]}),u.jsxs("div",{className:"ah-stats-container",style:{zIndex:10},children:[u.jsxs("div",{className:"energy-badge",children:[u.jsx("span",{className:"energy-icon",children:"⚡"}),u.jsxs("div",{className:"energy-info",children:[u.jsx("span",{className:"energy-label",children:"Kazma Hakkı"}),u.jsxs("div",{className:"energy-bar-container",children:[u.jsx("div",{className:"energy-bar-fill",style:{width:`${Math.min((t==null?void 0:t.energy)||0,100)}%`}}),u.jsx("span",{className:"energy-count",children:(t==null?void 0:t.energy)||0})]})]})]}),u.jsxs("div",{className:"ah-resources",children:[u.jsxs("div",{className:"resource-item",children:[u.jsx("span",{className:"res-icon",children:"⬛"}),u.jsx("span",{className:"res-count",children:((x=t==null?void 0:t.resources)==null?void 0:x.coal)||0}),u.jsx("span",{className:"res-name",children:"Kömür"})]}),u.jsxs("div",{className:"resource-item",children:[u.jsx("span",{className:"res-icon",children:"⚪"}),u.jsx("span",{className:"res-count",children:((k=t==null?void 0:t.resources)==null?void 0:k.iron)||0}),u.jsx("span",{className:"res-name",children:"Demir"})]}),u.jsxs("div",{className:"resource-item",children:[u.jsx("span",{className:"res-icon",children:"🟠"}),u.jsx("span",{className:"res-count",children:((b=t==null?void 0:t.resources)==null?void 0:b.copper)||0}),u.jsx("span",{className:"res-name",children:"Bakır"})]}),u.jsxs("div",{className:"resource-item",children:[u.jsx("span",{className:"res-icon",children:"🟡"}),u.jsx("span",{className:"res-count",children:((j=t==null?void 0:t.resources)==null?void 0:j.gold)||0}),u.jsx("span",{className:"res-name",children:"Altın"})]})]})]})]}),u.jsxs("div",{className:"mine-grid-container",style:{zIndex:10},children:[u.jsx("div",{className:"mine-grid-header",children:u.jsx("button",{className:"refresh-grid-btn",onClick:N,children:"🔄 Haritayı Yenile"})}),u.jsxs("div",{className:"mine-grid",style:{gridTemplateColumns:`repeat(${a}, 1fr)`},children:[i.map((y,v)=>u.jsx("div",{className:`grid-tile ${y.revealed?"revealed":"hidden"} ${y.revealed?y.type:""}`,onClick:I=>_(I,v)},y.id)),d.map(y=>u.jsx("div",{className:"floating-text",style:{left:y.x,top:y.y,zIndex:20},children:y.text},y.id))]})]}),p&&u.jsx("div",{className:"golem-modal-overlay",style:{zIndex:1e3},onClick:()=>g(null),children:u.jsxs("div",{className:"golem-modal-content",onClick:y=>y.stopPropagation(),style:{maxWidth:"400px",textAlign:"center",padding:"2rem"},children:[u.jsx("div",{style:{fontSize:"4rem",marginBottom:"1rem"},children:(A=nd[p])==null?void 0:A.emoji}),u.jsx("h2",{style:{color:"var(--accent-cyan)",marginBottom:"1rem"},children:"YENİ GOLEM BULUNDU!"}),u.jsx("h3",{style:{marginBottom:"1rem"},children:(F=nd[p])==null?void 0:F.name}),u.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"1.5rem",lineHeight:"1.5"},children:'"Beni buldun! Profilim sekmesindeki golemlerim kısmında beni giydirip bana güzel eşyalar alabilirsin. Artık madende de yanında olacağım!"'}),u.jsx("button",{className:"btn-primary",style:{width:"100%",justifyContent:"center"},onClick:()=>g(null),children:"Harika!"})]})})]})},Yg={m1:[{id:"golem_m1",name:"Kömür Golemi",emoji:"⬛"},{id:"golem_m1_magma",name:"Magma Kömür Golemi",emoji:"🌋"}],m4:[{id:"golem_m4",name:"Demir Golemi",emoji:"⚪"},{id:"golem_m4_rust",name:"Paslı Demir Golemi",emoji:"⛓️"}],m2:[{id:"golem_m2",name:"Bakır Golemi",emoji:"🟠"},{id:"golem_m2_ox",name:"Oksitli Bakır Golemi",emoji:"🗽"}],m3:[{id:"golem_m3",name:"Altın Golemi",emoji:"🟡"},{id:"golem_m3_rose",name:"Rose Gold Golem",emoji:"🌸"}]},Ox=({playerData:t})=>{const e=jn.find(c=>c.id===t.avatarId)||jn[0],{golemVariations:n,unlockedGolems:r,golemEquipment:i}=t,s=c=>(r||[]).includes(c),a=[{id:"m1",res:"coal"},{id:"m4",res:"iron"},{id:"m2",res:"copper"},{id:"m3",res:"gold"}];return u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",height:"100%",padding:"2rem"},children:[u.jsxs("div",{style:{textAlign:"center",marginBottom:"4rem"},children:[u.jsxs("h1",{style:{display:"flex",alignItems:"center",gap:"1rem",justifyContent:"center",fontSize:"2.5rem",color:"var(--text-primary)"},children:[u.jsx(hx,{size:40,className:"text-cyan"}),"Benim Vitrinim",u.jsx(ux,{size:40,className:"text-cyan"})]}),u.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"1.2rem",marginTop:"1rem"},children:"Seni ve bulduğun tüm Golemleri arkadaşlarına göster!"})]}),u.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"center",gap:"4rem",width:"100%",maxWidth:"1200px",padding:"3rem",background:"linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.05) 100%)",borderRadius:"24px",boxShadow:"0 20px 40px rgba(0,0,0,0.4)",border:"1px solid var(--border-color)",position:"relative",overflow:"hidden"},children:[u.jsx("div",{style:{position:"absolute",top:"-50px",left:"20%",width:"300px",height:"300px",background:"var(--accent-cyan)",opacity:.1,filter:"blur(100px)",borderRadius:"50%"}}),u.jsx("div",{style:{position:"absolute",bottom:"-50px",right:"20%",width:"300px",height:"300px",background:"var(--accent-red)",opacity:.05,filter:"blur(100px)",borderRadius:"50%"}}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",zIndex:10},children:[u.jsx("div",{style:{transform:"scale(1.5)",transformOrigin:"bottom center",marginBottom:"2rem"},children:u.jsx(li,{avatar:e,customSkin:t.customSkin,equippedItems:t.equippedItems})}),u.jsxs("div",{style:{background:"var(--bg-card)",padding:"0.8rem 1.5rem",borderRadius:"12px",border:"1px solid var(--border-color)",display:"flex",alignItems:"center",gap:"0.5rem"},children:[u.jsx(lx,{size:20,className:"text-cyan"}),u.jsxs("span",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:["Seviye ",t.level," Usta"]})]})]}),a.map(c=>{if(!s(c.res))return null;const d=c.id,h=(n==null?void 0:n[d])||Yg[d][0].id,p=Yg[d].find(_=>_.id===h),g=(i==null?void 0:i[d])||{};return u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",zIndex:10},children:[u.jsx("div",{style:{transform:"scale(1.2)",transformOrigin:"bottom center",marginBottom:"1.5rem"},children:u.jsx(li,{avatar:p,equippedItems:g})}),u.jsx("div",{style:{background:"rgba(0,0,0,0.5)",padding:"0.5rem 1rem",borderRadius:"8px",border:"1px solid var(--border-color)",fontSize:"0.9rem",color:"var(--text-secondary)"},children:p.name})]},d)}),a.every(c=>!s(c.res))&&u.jsx("div",{style:{position:"absolute",right:"10%",top:"40%",maxWidth:"250px",textAlign:"center",color:"var(--text-secondary)"},children:u.jsx("p",{children:"Keşif Madeninde kazı yaparak Golemleri bul ve vitrinine ekle!"})})]})]})},Mx={week1:{title:"1. Hafta: Temel Elektrik & Devreler",embedCode:'<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZWzudPVnLsQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius: 12px; border: 1px solid var(--border-color);"></iframe>'},week2:{title:"2. Hafta: LED Yakıp Söndürme (Dijital Çıkış)",embedCode:'<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius: 12px; border: 1px solid var(--border-color);"></iframe>'},week3:{title:"3. Hafta: Sonsuz Döngüler (For & While)",embedCode:'<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius: 12px; border: 1px solid var(--border-color);"></iframe>'},week4:{title:"4. Hafta: Buton ile Kontrol (Dijital Giriş)",embedCode:'<iframe width="100%" height="100%" src="https://www.youtube.com/embed/hmq5R5-gfY0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius: 12px; border: 1px solid var(--border-color);"></iframe>'},week5:{title:"5. Hafta: RGB LED ile Renk Şöleni",embedCode:'<iframe width="100%" height="100%" src="https://www.youtube.com/embed/GSvMF6YnEvQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius: 12px; border: 1px solid var(--border-color);"></iframe>'},week6:{title:"6. Hafta: Potansiyometre (Analog Giriş)",embedCode:'<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius: 12px; border: 1px solid var(--border-color);"></iframe>'},week7:{title:"7. Hafta: LDR ile Karanlıkta Yanan Lamba",embedCode:'<iframe width="100%" height="100%" src="https://www.youtube.com/embed/aAU0__quUlk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius: 12px; border: 1px solid var(--border-color);"></iframe>'},week8:{title:"8. Hafta: Buzzer ile Müzik Çalmak",embedCode:'<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius: 12px; border: 1px solid var(--border-color);"></iframe>'},week9:{title:"9. Hafta: Ultrasonik Sensör ile Mesafe Ölçümü",embedCode:'<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ruw2zwvTjjs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius: 12px; border: 1px solid var(--border-color);"></iframe>'},week10:{title:"10. Hafta: Servo Motor Kontrolü",embedCode:'<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius: 12px; border: 1px solid var(--border-color);"></iframe>'},week11:{title:"11. Hafta: LCD Ekrana Yazı Yazdırmak",embedCode:'<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Z-cQ8bfYrxQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius: 12px; border: 1px solid var(--border-color);"></iframe>'},week12:{title:"12. Hafta: Bluetooth ile Uzaktan Kontrol",embedCode:'<iframe width="100%" height="100%" src="https://www.youtube.com/embed/3bg2nvwxhyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius: 12px; border: 1px solid var(--border-color);"></iframe>'},week13:{title:"13. Hafta: Büyük Final Projesi (Robot Yapımı)",embedCode:'<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZZzik24Ppy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius: 12px; border: 1px solid var(--border-color);"></iframe>'}},Fx=({tasks:t,activeVideoWeek:e,setActiveVideoWeek:n,setActiveTab:r,updateTaskProgress:i})=>{const s=t.filter(h=>h.id.startsWith("week")),a=s.find(h=>h.id===e)||s[0],c=Mx[a.id]||{title:a.title,embedCode:'<div style="color:var(--text-secondary); text-align:center; padding: 2rem;">Bu hafta için video bulunamadı.</div>'},d=(h,p)=>{p&&n(h)};return u.jsxs("div",{style:{display:"flex",height:"100vh",backgroundColor:"var(--bg-app)",color:"var(--text-primary)",fontFamily:'var(--font-primary, "Inter", sans-serif)'},children:[u.jsxs("aside",{style:{width:"320px",borderRight:"1px solid var(--border-color)",backgroundColor:"rgba(10, 15, 26, 0.4)",display:"flex",flexDirection:"column",flexShrink:0},children:[u.jsxs("div",{style:{padding:"1.5rem",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",gap:"1rem"},children:[u.jsx("button",{onClick:()=>r("courses"),style:{background:"rgba(255,255,255,0.05)",border:"1px solid var(--border-color)",borderRadius:"8px",width:"38px",height:"38px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"var(--text-primary)",transition:"all 0.2s ease"},title:"Derslerime Dön",className:"back-to-courses-btn",children:u.jsx(QT,{size:18})}),u.jsxs("div",{children:[u.jsx("h2",{style:{fontSize:"1.1rem",margin:0,fontWeight:"700",letterSpacing:"0.5px"},children:"Ders Videoları"}),u.jsx("span",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:"Haftalık Eğitimler"})]})]}),u.jsx("div",{style:{flex:1,overflowY:"auto",padding:"1rem 0.75rem"},className:"custom-scrollbar",children:s.map(h=>{const p=h.id===e,g=h.unlocked,_=h.progress>=50;return u.jsxs("div",{onClick:()=>d(h.id,g),style:{display:"flex",alignItems:"center",gap:"0.75rem",padding:"1rem",borderRadius:"10px",marginBottom:"0.5rem",cursor:g?"pointer":"not-allowed",backgroundColor:p?"rgba(0, 240, 255, 0.1)":"transparent",border:p?"1px solid rgba(0, 240, 255, 0.25)":"1px solid transparent",opacity:g?1:.45,transition:"all 0.25s ease"},className:`video-week-tab ${p?"active":""} ${g?"unlocked":"locked"}`,children:[u.jsx("div",{style:{display:"flex",alignItems:"center",flexShrink:0},children:g?_?u.jsx(xS,{size:18,color:"var(--accent-cyan)"}):u.jsx(XT,{size:18,color:"#aaa"}):u.jsx(To,{size:16,color:"#666"})}),u.jsxs("div",{style:{flex:1,minWidth:0},children:[u.jsx("div",{style:{fontSize:"0.9rem",fontWeight:p?"700":"500",color:p?"var(--accent-cyan)":"var(--text-primary)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:h.title}),u.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-secondary)",marginTop:"0.2rem"},children:g?_?"İzlendi":"İzlenmedi":"Kilitli"})]})]},h.id)})})]}),u.jsxs("main",{style:{flex:1,padding:"2.5rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(5, 7, 12, 0.85)",position:"relative"},children:[u.jsxs("div",{style:{width:"100%",maxWidth:"1000px",marginBottom:"1.5rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("h1",{style:{fontSize:"1.5rem",fontWeight:"700",margin:0,color:"var(--text-primary)",background:"linear-gradient(90deg, #fff, var(--text-secondary))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:c.title}),u.jsx("button",{onClick:()=>{a.progress<50&&i(a.id,50)},style:{fontSize:"0.85rem",padding:"0.5rem 1rem",backgroundColor:a.progress>=50?"rgba(16, 185, 129, 0.15)":"var(--accent-cyan)",border:a.progress>=50?"1px solid rgba(16, 185, 129, 0.3)":"1px solid var(--accent-cyan)",borderRadius:"20px",color:a.progress>=50?"#10b981":"#000",fontWeight:"700",cursor:a.progress>=50?"default":"pointer",borderStyle:"solid",outline:"none",transition:"all 0.2s ease",boxShadow:a.progress>=50?"none":"0 4px 12px rgba(0, 240, 255, 0.2)"},disabled:a.progress>=50,children:a.progress>=50?"✓ Görev Tamamlandı":"⚡ Görevi Tamamla"})]}),u.jsx("div",{style:{width:"100%",maxWidth:"1000px",aspectRatio:"16/9",borderRadius:"16px",overflow:"hidden",boxShadow:"0 20px 50px rgba(0, 240, 255, 0.08), 0 0 0 1px rgba(0, 240, 255, 0.15)",backgroundColor:"#000",position:"relative"},children:u.jsx("div",{style:{width:"100%",height:"100%"},dangerouslySetInnerHTML:{__html:c.embedCode}})})]})]})},Ux=()=>{};var Xg={};/**
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
 */const ZT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],c=t[n++],d=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(d>>10)),e[r++]=String.fromCharCode(56320+(d&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},e0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,c=a?t[i+1]:0,d=i+2<t.length,h=d?t[i+2]:0,p=s>>2,g=(s&3)<<4|c>>4;let _=(c&15)<<2|h>>6,N=h&63;d||(N=64,a||(_=64)),r.push(n[p],n[g],n[_],n[N])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ZT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||c==null||h==null||g==null)throw new Kx;const _=s<<2|c>>4;if(r.push(_),h!==64){const N=c<<4&240|h>>2;if(r.push(N),g!==64){const R=h<<6&192|g;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Kx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bx=function(t){const e=ZT(t);return e0.encodeByteArray(e,!0)},Hl=function(t){return Bx(t).replace(/\./g,"")},t0=function(t){try{return e0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function $x(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Wx=()=>$x().__FIREBASE_DEFAULTS__,qx=()=>{if(typeof process>"u"||typeof Xg>"u")return;const t=Xg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Gx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&t0(t[1]);return e&&JSON.parse(e)},Rc=()=>{try{return Ux()||Wx()||qx()||Gx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},n0=t=>{var e,n;return(n=(e=Rc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Hx=t=>{const e=n0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},r0=()=>{var t;return(t=Rc())==null?void 0:t.config},i0=t=>{var e;return(e=Rc())==null?void 0:e[`_${t}`]};/**
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
 */class Qx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Yx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Hl(JSON.stringify(n)),Hl(JSON.stringify(a)),""].join(".")}/**
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
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function Jx(){var e;const t=(e=Rc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function s0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function eA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tA(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nA(){return!Jx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function o0(){try{return typeof indexedDB=="object"}catch{return!1}}function a0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function rA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const iA="FirebaseError";class nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=iA,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vi.prototype.create)}}class vi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?sA(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new nn(i,c,r)}}function sA(t,e){return t.replace(oA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const oA=/\{\$([^}]+)}/g;function aA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(Jg(s)&&Jg(a)){if(!xr(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Jg(t){return t!==null&&typeof t=="object"}/**
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
 */function oa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function io(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function so(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function lA(t,e){const n=new cA(t,e);return n.subscribe.bind(n)}class cA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");uA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=rd),i.error===void 0&&(i.error=rd),i.complete===void 0&&(i.complete=rd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function rd(){}/**
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
 */const dA=1e3,hA=2,fA=4*60*60*1e3,pA=.5;function Zg(t,e=dA,n=hA){const r=e*Math.pow(n,t),i=Math.round(pA*r*(Math.random()-.5)*2);return Math.min(fA,r+i)}/**
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
 */function Re(t){return t&&t._delegate?t._delegate:t}/**
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
 */function aa(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function l0(t){return(await fetch(t,{credentials:"include"})).ok}class Zt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Gr="[DEFAULT]";/**
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
 */class mA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Qx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yA(e))try{this.getOrInitializeService({instanceIdentifier:Gr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gr){return this.instances.has(e)}getOptions(e=Gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gr){return this.component?this.component.multipleInstances?e:Gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gA(t){return t===Gr?void 0:t}function yA(t){return t.instantiationMode==="EAGER"}/**
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
 */class vA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const _A={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},TA=he.INFO,wA={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},EA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=wA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bc{constructor(e){this.name=e,this._logLevel=TA,this._logHandler=EA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_A[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const IA=(t,e)=>e.some(n=>t instanceof n);let ey,ty;function kA(){return ey||(ey=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SA(){return ty||(ty=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c0=new WeakMap,fh=new WeakMap,u0=new WeakMap,id=new WeakMap,Of=new WeakMap;function xA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(_r(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&c0.set(n,t)}).catch(()=>{}),Of.set(e,t),e}function AA(t){if(fh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});fh.set(t,e)}let ph={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||u0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function CA(t){ph=t(ph)}function NA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sd(this),e,...n);return u0.set(r,e.sort?e.sort():[e]),_r(r)}:SA().includes(t)?function(...e){return t.apply(sd(this),e),_r(c0.get(this))}:function(...e){return _r(t.apply(sd(this),e))}}function RA(t){return typeof t=="function"?NA(t):(t instanceof IDBTransaction&&AA(t),IA(t,kA())?new Proxy(t,ph):t)}function _r(t){if(t instanceof IDBRequest)return xA(t);if(id.has(t))return id.get(t);const e=RA(t);return e!==t&&(id.set(t,e),Of.set(e,t)),e}const sd=t=>Of.get(t);function d0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),c=_r(a);return r&&a.addEventListener("upgradeneeded",d=>{r(_r(a.result),d.oldVersion,d.newVersion,_r(a.transaction),d)}),n&&a.addEventListener("blocked",d=>n(d.oldVersion,d.newVersion,d)),c.then(d=>{s&&d.addEventListener("close",()=>s()),i&&d.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const bA=["get","getKey","getAll","getAllKeys","count"],PA=["put","add","delete","clear"],od=new Map;function ny(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(od.get(e))return od.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=PA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bA.includes(n)))return;const s=async function(a,...c){const d=this.transaction(a,i?"readwrite":"readonly");let h=d.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),i&&d.done]))[0]};return od.set(e,s),s}CA(t=>({...t,get:(e,n,r)=>ny(e,n)||t.get(e,n,r),has:(e,n)=>!!ny(e,n)||t.has(e,n)}));/**
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
 */class jA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(DA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function DA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mh="@firebase/app",ry="0.14.12";/**
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
 */const Fn=new bc("@firebase/app"),VA="@firebase/app-compat",LA="@firebase/analytics-compat",OA="@firebase/analytics",MA="@firebase/app-check-compat",FA="@firebase/app-check",UA="@firebase/auth",zA="@firebase/auth-compat",KA="@firebase/database",BA="@firebase/data-connect",$A="@firebase/database-compat",WA="@firebase/functions",qA="@firebase/functions-compat",GA="@firebase/installations",HA="@firebase/installations-compat",QA="@firebase/messaging",YA="@firebase/messaging-compat",XA="@firebase/performance",JA="@firebase/performance-compat",ZA="@firebase/remote-config",eC="@firebase/remote-config-compat",tC="@firebase/storage",nC="@firebase/storage-compat",rC="@firebase/firestore",iC="@firebase/ai",sC="@firebase/firestore-compat",oC="firebase",aC="12.13.0";/**
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
 */const gh="[DEFAULT]",lC={[mh]:"fire-core",[VA]:"fire-core-compat",[OA]:"fire-analytics",[LA]:"fire-analytics-compat",[FA]:"fire-app-check",[MA]:"fire-app-check-compat",[UA]:"fire-auth",[zA]:"fire-auth-compat",[KA]:"fire-rtdb",[BA]:"fire-data-connect",[$A]:"fire-rtdb-compat",[WA]:"fire-fn",[qA]:"fire-fn-compat",[GA]:"fire-iid",[HA]:"fire-iid-compat",[QA]:"fire-fcm",[YA]:"fire-fcm-compat",[XA]:"fire-perf",[JA]:"fire-perf-compat",[ZA]:"fire-rc",[eC]:"fire-rc-compat",[tC]:"fire-gcs",[nC]:"fire-gcs-compat",[rC]:"fire-fst",[sC]:"fire-fst-compat",[iC]:"fire-vertex","fire-js":"fire-js",[oC]:"fire-js-all"};/**
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
 */const $o=new Map,cC=new Map,yh=new Map;function iy(t,e){try{t.container.addComponent(e)}catch(n){Fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tn(t){const e=t.name;if(yh.has(e))return Fn.debug(`There were multiple attempts to register component ${e}.`),!1;yh.set(e,t);for(const n of $o.values())iy(n,t);for(const n of cC.values())iy(n,t);return!0}function _i(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Dt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const uC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tr=new vi("app","Firebase",uC);/**
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
 */class dC{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tr.create("app-deleted",{appName:this._name})}}/**
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
 */const _s=aC;function h0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:gh,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Tr.create("bad-app-name",{appName:String(i)});if(n||(n=r0()),!n)throw Tr.create("no-options");const s=$o.get(i);if(s){if(xr(n,s.options)&&xr(r,s.config))return s;throw Tr.create("duplicate-app",{appName:i})}const a=new vA(i);for(const d of yh.values())a.addComponent(d);const c=new dC(n,r,a);return $o.set(i,c),c}function Pc(t=gh){const e=$o.get(t);if(!e&&t===gh&&r0())return h0();if(!e)throw Tr.create("no-app",{appName:t});return e}function hC(){return Array.from($o.values())}function Mt(t,e,n){let r=lC[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fn.warn(a.join(" "));return}Tn(new Zt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const fC="firebase-heartbeat-database",pC=1,Wo="firebase-heartbeat-store";let ad=null;function f0(){return ad||(ad=d0(fC,pC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Wo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Tr.create("idb-open",{originalErrorMessage:t.message})})),ad}async function mC(t){try{const n=(await f0()).transaction(Wo),r=await n.objectStore(Wo).get(p0(t));return await n.done,r}catch(e){if(e instanceof nn)Fn.warn(e.message);else{const n=Tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fn.warn(n.message)}}}async function sy(t,e){try{const r=(await f0()).transaction(Wo,"readwrite");await r.objectStore(Wo).put(e,p0(t)),await r.done}catch(n){if(n instanceof nn)Fn.warn(n.message);else{const r=Tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fn.warn(r.message)}}}function p0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const gC=1024,yC=30;class vC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=oy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>yC){const a=wC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Fn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=oy(),{heartbeatsToSend:r,unsentEntries:i}=_C(this._heartbeatsCache.heartbeats),s=Hl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Fn.warn(n),""}}}function oy(){return new Date().toISOString().substring(0,10)}function _C(t,e=gC){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),ay(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ay(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class TC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return o0()?a0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return sy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return sy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ay(t){return Hl(JSON.stringify({version:2,heartbeats:t})).length}function wC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function EC(t){Tn(new Zt("platform-logger",e=>new jA(e),"PRIVATE")),Tn(new Zt("heartbeat",e=>new vC(e),"PRIVATE")),Mt(mh,ry,t),Mt(mh,ry,"esm2020"),Mt("fire-js","")}EC("");var IC="firebase",kC="12.13.0";/**
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
 */Mt(IC,kC,"app");var ly=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wr,m0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,v){function I(){}I.prototype=v.prototype,y.F=v.prototype,y.prototype=new I,y.prototype.constructor=y,y.D=function(E,S,C){for(var w=Array(arguments.length-2),B=2;B<arguments.length;B++)w[B-2]=arguments[B];return v.prototype[S].apply(E,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,v,I){I||(I=0);const E=Array(16);if(typeof v=="string")for(var S=0;S<16;++S)E[S]=v.charCodeAt(I++)|v.charCodeAt(I++)<<8|v.charCodeAt(I++)<<16|v.charCodeAt(I++)<<24;else for(S=0;S<16;++S)E[S]=v[I++]|v[I++]<<8|v[I++]<<16|v[I++]<<24;v=y.g[0],I=y.g[1],S=y.g[2];let C=y.g[3],w;w=v+(C^I&(S^C))+E[0]+3614090360&4294967295,v=I+(w<<7&4294967295|w>>>25),w=C+(S^v&(I^S))+E[1]+3905402710&4294967295,C=v+(w<<12&4294967295|w>>>20),w=S+(I^C&(v^I))+E[2]+606105819&4294967295,S=C+(w<<17&4294967295|w>>>15),w=I+(v^S&(C^v))+E[3]+3250441966&4294967295,I=S+(w<<22&4294967295|w>>>10),w=v+(C^I&(S^C))+E[4]+4118548399&4294967295,v=I+(w<<7&4294967295|w>>>25),w=C+(S^v&(I^S))+E[5]+1200080426&4294967295,C=v+(w<<12&4294967295|w>>>20),w=S+(I^C&(v^I))+E[6]+2821735955&4294967295,S=C+(w<<17&4294967295|w>>>15),w=I+(v^S&(C^v))+E[7]+4249261313&4294967295,I=S+(w<<22&4294967295|w>>>10),w=v+(C^I&(S^C))+E[8]+1770035416&4294967295,v=I+(w<<7&4294967295|w>>>25),w=C+(S^v&(I^S))+E[9]+2336552879&4294967295,C=v+(w<<12&4294967295|w>>>20),w=S+(I^C&(v^I))+E[10]+4294925233&4294967295,S=C+(w<<17&4294967295|w>>>15),w=I+(v^S&(C^v))+E[11]+2304563134&4294967295,I=S+(w<<22&4294967295|w>>>10),w=v+(C^I&(S^C))+E[12]+1804603682&4294967295,v=I+(w<<7&4294967295|w>>>25),w=C+(S^v&(I^S))+E[13]+4254626195&4294967295,C=v+(w<<12&4294967295|w>>>20),w=S+(I^C&(v^I))+E[14]+2792965006&4294967295,S=C+(w<<17&4294967295|w>>>15),w=I+(v^S&(C^v))+E[15]+1236535329&4294967295,I=S+(w<<22&4294967295|w>>>10),w=v+(S^C&(I^S))+E[1]+4129170786&4294967295,v=I+(w<<5&4294967295|w>>>27),w=C+(I^S&(v^I))+E[6]+3225465664&4294967295,C=v+(w<<9&4294967295|w>>>23),w=S+(v^I&(C^v))+E[11]+643717713&4294967295,S=C+(w<<14&4294967295|w>>>18),w=I+(C^v&(S^C))+E[0]+3921069994&4294967295,I=S+(w<<20&4294967295|w>>>12),w=v+(S^C&(I^S))+E[5]+3593408605&4294967295,v=I+(w<<5&4294967295|w>>>27),w=C+(I^S&(v^I))+E[10]+38016083&4294967295,C=v+(w<<9&4294967295|w>>>23),w=S+(v^I&(C^v))+E[15]+3634488961&4294967295,S=C+(w<<14&4294967295|w>>>18),w=I+(C^v&(S^C))+E[4]+3889429448&4294967295,I=S+(w<<20&4294967295|w>>>12),w=v+(S^C&(I^S))+E[9]+568446438&4294967295,v=I+(w<<5&4294967295|w>>>27),w=C+(I^S&(v^I))+E[14]+3275163606&4294967295,C=v+(w<<9&4294967295|w>>>23),w=S+(v^I&(C^v))+E[3]+4107603335&4294967295,S=C+(w<<14&4294967295|w>>>18),w=I+(C^v&(S^C))+E[8]+1163531501&4294967295,I=S+(w<<20&4294967295|w>>>12),w=v+(S^C&(I^S))+E[13]+2850285829&4294967295,v=I+(w<<5&4294967295|w>>>27),w=C+(I^S&(v^I))+E[2]+4243563512&4294967295,C=v+(w<<9&4294967295|w>>>23),w=S+(v^I&(C^v))+E[7]+1735328473&4294967295,S=C+(w<<14&4294967295|w>>>18),w=I+(C^v&(S^C))+E[12]+2368359562&4294967295,I=S+(w<<20&4294967295|w>>>12),w=v+(I^S^C)+E[5]+4294588738&4294967295,v=I+(w<<4&4294967295|w>>>28),w=C+(v^I^S)+E[8]+2272392833&4294967295,C=v+(w<<11&4294967295|w>>>21),w=S+(C^v^I)+E[11]+1839030562&4294967295,S=C+(w<<16&4294967295|w>>>16),w=I+(S^C^v)+E[14]+4259657740&4294967295,I=S+(w<<23&4294967295|w>>>9),w=v+(I^S^C)+E[1]+2763975236&4294967295,v=I+(w<<4&4294967295|w>>>28),w=C+(v^I^S)+E[4]+1272893353&4294967295,C=v+(w<<11&4294967295|w>>>21),w=S+(C^v^I)+E[7]+4139469664&4294967295,S=C+(w<<16&4294967295|w>>>16),w=I+(S^C^v)+E[10]+3200236656&4294967295,I=S+(w<<23&4294967295|w>>>9),w=v+(I^S^C)+E[13]+681279174&4294967295,v=I+(w<<4&4294967295|w>>>28),w=C+(v^I^S)+E[0]+3936430074&4294967295,C=v+(w<<11&4294967295|w>>>21),w=S+(C^v^I)+E[3]+3572445317&4294967295,S=C+(w<<16&4294967295|w>>>16),w=I+(S^C^v)+E[6]+76029189&4294967295,I=S+(w<<23&4294967295|w>>>9),w=v+(I^S^C)+E[9]+3654602809&4294967295,v=I+(w<<4&4294967295|w>>>28),w=C+(v^I^S)+E[12]+3873151461&4294967295,C=v+(w<<11&4294967295|w>>>21),w=S+(C^v^I)+E[15]+530742520&4294967295,S=C+(w<<16&4294967295|w>>>16),w=I+(S^C^v)+E[2]+3299628645&4294967295,I=S+(w<<23&4294967295|w>>>9),w=v+(S^(I|~C))+E[0]+4096336452&4294967295,v=I+(w<<6&4294967295|w>>>26),w=C+(I^(v|~S))+E[7]+1126891415&4294967295,C=v+(w<<10&4294967295|w>>>22),w=S+(v^(C|~I))+E[14]+2878612391&4294967295,S=C+(w<<15&4294967295|w>>>17),w=I+(C^(S|~v))+E[5]+4237533241&4294967295,I=S+(w<<21&4294967295|w>>>11),w=v+(S^(I|~C))+E[12]+1700485571&4294967295,v=I+(w<<6&4294967295|w>>>26),w=C+(I^(v|~S))+E[3]+2399980690&4294967295,C=v+(w<<10&4294967295|w>>>22),w=S+(v^(C|~I))+E[10]+4293915773&4294967295,S=C+(w<<15&4294967295|w>>>17),w=I+(C^(S|~v))+E[1]+2240044497&4294967295,I=S+(w<<21&4294967295|w>>>11),w=v+(S^(I|~C))+E[8]+1873313359&4294967295,v=I+(w<<6&4294967295|w>>>26),w=C+(I^(v|~S))+E[15]+4264355552&4294967295,C=v+(w<<10&4294967295|w>>>22),w=S+(v^(C|~I))+E[6]+2734768916&4294967295,S=C+(w<<15&4294967295|w>>>17),w=I+(C^(S|~v))+E[13]+1309151649&4294967295,I=S+(w<<21&4294967295|w>>>11),w=v+(S^(I|~C))+E[4]+4149444226&4294967295,v=I+(w<<6&4294967295|w>>>26),w=C+(I^(v|~S))+E[11]+3174756917&4294967295,C=v+(w<<10&4294967295|w>>>22),w=S+(v^(C|~I))+E[2]+718787259&4294967295,S=C+(w<<15&4294967295|w>>>17),w=I+(C^(S|~v))+E[9]+3951481745&4294967295,y.g[0]=y.g[0]+v&4294967295,y.g[1]=y.g[1]+(S+(w<<21&4294967295|w>>>11))&4294967295,y.g[2]=y.g[2]+S&4294967295,y.g[3]=y.g[3]+C&4294967295}r.prototype.v=function(y,v){v===void 0&&(v=y.length);const I=v-this.blockSize,E=this.C;let S=this.h,C=0;for(;C<v;){if(S==0)for(;C<=I;)i(this,y,C),C+=this.blockSize;if(typeof y=="string"){for(;C<v;)if(E[S++]=y.charCodeAt(C++),S==this.blockSize){i(this,E),S=0;break}}else for(;C<v;)if(E[S++]=y[C++],S==this.blockSize){i(this,E),S=0;break}}this.h=S,this.o+=v},r.prototype.A=function(){var y=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);y[0]=128;for(var v=1;v<y.length-8;++v)y[v]=0;v=this.o*8;for(var I=y.length-8;I<y.length;++I)y[I]=v&255,v/=256;for(this.v(y),y=Array(16),v=0,I=0;I<4;++I)for(let E=0;E<32;E+=8)y[v++]=this.g[I]>>>E&255;return y};function s(y,v){var I=c;return Object.prototype.hasOwnProperty.call(I,y)?I[y]:I[y]=v(y)}function a(y,v){this.h=v;const I=[];let E=!0;for(let S=y.length-1;S>=0;S--){const C=y[S]|0;E&&C==v||(I[S]=C,E=!1)}this.g=I}var c={};function d(y){return-128<=y&&y<128?s(y,function(v){return new a([v|0],v<0?-1:0)}):new a([y|0],y<0?-1:0)}function h(y){if(isNaN(y)||!isFinite(y))return g;if(y<0)return V(h(-y));const v=[];let I=1;for(let E=0;y>=I;E++)v[E]=y/I|0,I*=4294967296;return new a(v,0)}function p(y,v){if(y.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(y.charAt(0)=="-")return V(p(y.substring(1),v));if(y.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=h(Math.pow(v,8));let E=g;for(let C=0;C<y.length;C+=8){var S=Math.min(8,y.length-C);const w=parseInt(y.substring(C,C+S),v);S<8?(S=h(Math.pow(v,S)),E=E.j(S).add(h(w))):(E=E.j(I),E=E.add(h(w)))}return E}var g=d(0),_=d(1),N=d(16777216);t=a.prototype,t.m=function(){if(P(this))return-V(this).m();let y=0,v=1;for(let I=0;I<this.g.length;I++){const E=this.i(I);y+=(E>=0?E:4294967296+E)*v,v*=4294967296}return y},t.toString=function(y){if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(R(this))return"0";if(P(this))return"-"+V(this).toString(y);const v=h(Math.pow(y,6));var I=this;let E="";for(;;){const S=j(I,v).g;I=x(I,S.j(v));let C=((I.g.length>0?I.g[0]:I.h)>>>0).toString(y);if(I=S,R(I))return C+E;for(;C.length<6;)C="0"+C;E=C+E}},t.i=function(y){return y<0?0:y<this.g.length?this.g[y]:this.h};function R(y){if(y.h!=0)return!1;for(let v=0;v<y.g.length;v++)if(y.g[v]!=0)return!1;return!0}function P(y){return y.h==-1}t.l=function(y){return y=x(this,y),P(y)?-1:R(y)?0:1};function V(y){const v=y.g.length,I=[];for(let E=0;E<v;E++)I[E]=~y.g[E];return new a(I,~y.h).add(_)}t.abs=function(){return P(this)?V(this):this},t.add=function(y){const v=Math.max(this.g.length,y.g.length),I=[];let E=0;for(let S=0;S<=v;S++){let C=E+(this.i(S)&65535)+(y.i(S)&65535),w=(C>>>16)+(this.i(S)>>>16)+(y.i(S)>>>16);E=w>>>16,C&=65535,w&=65535,I[S]=w<<16|C}return new a(I,I[I.length-1]&-2147483648?-1:0)};function x(y,v){return y.add(V(v))}t.j=function(y){if(R(this)||R(y))return g;if(P(this))return P(y)?V(this).j(V(y)):V(V(this).j(y));if(P(y))return V(this.j(V(y)));if(this.l(N)<0&&y.l(N)<0)return h(this.m()*y.m());const v=this.g.length+y.g.length,I=[];for(var E=0;E<2*v;E++)I[E]=0;for(E=0;E<this.g.length;E++)for(let S=0;S<y.g.length;S++){const C=this.i(E)>>>16,w=this.i(E)&65535,B=y.i(S)>>>16,K=y.i(S)&65535;I[2*E+2*S]+=w*K,k(I,2*E+2*S),I[2*E+2*S+1]+=C*K,k(I,2*E+2*S+1),I[2*E+2*S+1]+=w*B,k(I,2*E+2*S+1),I[2*E+2*S+2]+=C*B,k(I,2*E+2*S+2)}for(y=0;y<v;y++)I[y]=I[2*y+1]<<16|I[2*y];for(y=v;y<2*v;y++)I[y]=0;return new a(I,0)};function k(y,v){for(;(y[v]&65535)!=y[v];)y[v+1]+=y[v]>>>16,y[v]&=65535,v++}function b(y,v){this.g=y,this.h=v}function j(y,v){if(R(v))throw Error("division by zero");if(R(y))return new b(g,g);if(P(y))return v=j(V(y),v),new b(V(v.g),V(v.h));if(P(v))return v=j(y,V(v)),new b(V(v.g),v.h);if(y.g.length>30){if(P(y)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var I=_,E=v;E.l(y)<=0;)I=A(I),E=A(E);var S=F(I,1),C=F(E,1);for(E=F(E,2),I=F(I,2);!R(E);){var w=C.add(E);w.l(y)<=0&&(S=S.add(I),C=w),E=F(E,1),I=F(I,1)}return v=x(y,S.j(v)),new b(S,v)}for(S=g;y.l(v)>=0;){for(I=Math.max(1,Math.floor(y.m()/v.m())),E=Math.ceil(Math.log(I)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),C=h(I),w=C.j(v);P(w)||w.l(y)>0;)I-=E,C=h(I),w=C.j(v);R(C)&&(C=_),S=S.add(C),y=x(y,w)}return new b(S,y)}t.B=function(y){return j(this,y).h},t.and=function(y){const v=Math.max(this.g.length,y.g.length),I=[];for(let E=0;E<v;E++)I[E]=this.i(E)&y.i(E);return new a(I,this.h&y.h)},t.or=function(y){const v=Math.max(this.g.length,y.g.length),I=[];for(let E=0;E<v;E++)I[E]=this.i(E)|y.i(E);return new a(I,this.h|y.h)},t.xor=function(y){const v=Math.max(this.g.length,y.g.length),I=[];for(let E=0;E<v;E++)I[E]=this.i(E)^y.i(E);return new a(I,this.h^y.h)};function A(y){const v=y.g.length+1,I=[];for(let E=0;E<v;E++)I[E]=y.i(E)<<1|y.i(E-1)>>>31;return new a(I,y.h)}function F(y,v){const I=v>>5;v%=32;const E=y.g.length-I,S=[];for(let C=0;C<E;C++)S[C]=v>0?y.i(C+I)>>>v|y.i(C+I+1)<<32-v:y.i(C+I);return new a(S,y.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,m0=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=p,wr=a}).apply(typeof ly<"u"?ly:typeof self<"u"?self:typeof window<"u"?window:{});var Ha=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var g0,oo,y0,fl,vh,v0,_0,T0;(function(){var t,e=Object.defineProperty;function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ha=="object"&&Ha];for(var f=0;f<l.length;++f){var m=l[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,f){if(f)e:{var m=r;l=l.split(".");for(var T=0;T<l.length-1;T++){var D=l[T];if(!(D in m))break e;m=m[D]}l=l[l.length-1],T=m[l],f=f(T),f!=T&&f!=null&&e(m,l,{configurable:!0,writable:!0,value:f})}}i("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(l){return l||function(f){var m=[],T;for(T in f)Object.prototype.hasOwnProperty.call(f,T)&&m.push([T,f[T]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function c(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function d(l,f,m){return l.call.apply(l.bind,arguments)}function h(l,f,m){return h=d,h.apply(null,arguments)}function p(l,f){var m=Array.prototype.slice.call(arguments,1);return function(){var T=m.slice();return T.push.apply(T,arguments),l.apply(this,T)}}function g(l,f){function m(){}m.prototype=f.prototype,l.Z=f.prototype,l.prototype=new m,l.prototype.constructor=l,l.Ob=function(T,D,L){for(var $=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)$[ae-2]=arguments[ae];return f.prototype[D].apply(T,$)}}var _=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function N(l){const f=l.length;if(f>0){const m=Array(f);for(let T=0;T<f;T++)m[T]=l[T];return m}return[]}function R(l,f){for(let T=1;T<arguments.length;T++){const D=arguments[T];var m=typeof D;if(m=m!="object"?m:D?Array.isArray(D)?"array":m:"null",m=="array"||m=="object"&&typeof D.length=="number"){m=l.length||0;const L=D.length||0;l.length=m+L;for(let $=0;$<L;$++)l[m+$]=D[$]}else l.push(D)}}class P{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function V(l){a.setTimeout(()=>{throw l},0)}function x(){var l=y;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class k{constructor(){this.h=this.g=null}add(f,m){const T=b.get();T.set(f,m),this.h?this.h.next=T:this.g=T,this.h=T}}var b=new P(()=>new j,l=>l.reset());class j{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let A,F=!1,y=new k,v=()=>{const l=Promise.resolve(void 0);A=()=>{l.then(I)}};function I(){for(var l;l=x();){try{l.h.call(l.g)}catch(m){V(m)}var f=b;f.j(l),f.h<100&&(f.h++,l.next=f.g,f.g=l)}F=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function S(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return l}();function w(l){return/^[\s\xa0]*$/.test(l)}function B(l,f){S.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,f)}g(B,S),B.prototype.init=function(l,f){const m=this.type=l.type,T=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget,f||(m=="mouseover"?f=l.fromElement:m=="mouseout"&&(f=l.toElement)),this.relatedTarget=f,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&B.Z.h.call(this)},B.prototype.h=function(){B.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var K="closure_listenable_"+(Math.random()*1e6|0),Y=0;function te(l,f,m,T,D){this.listener=l,this.proxy=null,this.src=f,this.type=m,this.capture=!!T,this.ha=D,this.key=++Y,this.da=this.fa=!1}function z(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function G(l,f,m){for(const T in l)f.call(m,l[T],T,l)}function J(l,f){for(const m in l)f.call(void 0,l[m],m,l)}function re(l){const f={};for(const m in l)f[m]=l[m];return f}const se="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oe(l,f){let m,T;for(let D=1;D<arguments.length;D++){T=arguments[D];for(m in T)l[m]=T[m];for(let L=0;L<se.length;L++)m=se[L],Object.prototype.hasOwnProperty.call(T,m)&&(l[m]=T[m])}}function me(l){this.src=l,this.g={},this.h=0}me.prototype.add=function(l,f,m,T,D){const L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);const $=zt(l,f,T,D);return $>-1?(f=l[$],m||(f.fa=!1)):(f=new te(f,this.src,L,!!T,D),f.fa=m,l.push(f)),f};function rn(l,f){const m=f.type;if(m in l.g){var T=l.g[m],D=Array.prototype.indexOf.call(T,f,void 0),L;(L=D>=0)&&Array.prototype.splice.call(T,D,1),L&&(z(f),l.g[m].length==0&&(delete l.g[m],l.h--))}}function zt(l,f,m,T){for(let D=0;D<l.length;++D){const L=l[D];if(!L.da&&L.listener==f&&L.capture==!!m&&L.ha==T)return D}return-1}var Wn="closure_lm_"+(Math.random()*1e6|0),tu={};function jp(l,f,m,T,D){if(Array.isArray(f)){for(let L=0;L<f.length;L++)jp(l,f[L],m,T,D);return null}return m=Lp(m),l&&l[K]?l.J(f,m,c(T)?!!T.capture:!1,D):eE(l,f,m,!1,T,D)}function eE(l,f,m,T,D,L){if(!f)throw Error("Invalid event type");const $=c(D)?!!D.capture:!!D;let ae=ru(l);if(ae||(l[Wn]=ae=new me(l)),m=ae.add(f,m,T,$,L),m.proxy)return m;if(T=tE(),m.proxy=T,T.src=l,T.listener=m,l.addEventListener)C||(D=$),D===void 0&&(D=!1),l.addEventListener(f.toString(),T,D);else if(l.attachEvent)l.attachEvent(Vp(f.toString()),T);else if(l.addListener&&l.removeListener)l.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return m}function tE(){function l(m){return f.call(l.src,l.listener,m)}const f=nE;return l}function Dp(l,f,m,T,D){if(Array.isArray(f))for(var L=0;L<f.length;L++)Dp(l,f[L],m,T,D);else T=c(T)?!!T.capture:!!T,m=Lp(m),l&&l[K]?(l=l.i,L=String(f).toString(),L in l.g&&(f=l.g[L],m=zt(f,m,T,D),m>-1&&(z(f[m]),Array.prototype.splice.call(f,m,1),f.length==0&&(delete l.g[L],l.h--)))):l&&(l=ru(l))&&(f=l.g[f.toString()],l=-1,f&&(l=zt(f,m,T,D)),(m=l>-1?f[l]:null)&&nu(m))}function nu(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[K])rn(f.i,l);else{var m=l.type,T=l.proxy;f.removeEventListener?f.removeEventListener(m,T,l.capture):f.detachEvent?f.detachEvent(Vp(m),T):f.addListener&&f.removeListener&&f.removeListener(T),(m=ru(f))?(rn(m,l),m.h==0&&(m.src=null,f[Wn]=null)):z(l)}}}function Vp(l){return l in tu?tu[l]:tu[l]="on"+l}function nE(l,f){if(l.da)l=!0;else{f=new B(f,this);const m=l.listener,T=l.ha||l.src;l.fa&&nu(l),l=m.call(T,f)}return l}function ru(l){return l=l[Wn],l instanceof me?l:null}var iu="__closure_events_fn_"+(Math.random()*1e9>>>0);function Lp(l){return typeof l=="function"?l:(l[iu]||(l[iu]=function(f){return l.handleEvent(f)}),l[iu])}function et(){E.call(this),this.i=new me(this),this.M=this,this.G=null}g(et,E),et.prototype[K]=!0,et.prototype.removeEventListener=function(l,f,m,T){Dp(this,l,f,m,T)};function ct(l,f){var m,T=l.G;if(T)for(m=[];T;T=T.G)m.push(T);if(l=l.M,T=f.type||f,typeof f=="string")f=new S(f,l);else if(f instanceof S)f.target=f.target||l;else{var D=f;f=new S(T,l),oe(f,D)}D=!0;let L,$;if(m)for($=m.length-1;$>=0;$--)L=f.g=m[$],D=_a(L,T,!0,f)&&D;if(L=f.g=l,D=_a(L,T,!0,f)&&D,D=_a(L,T,!1,f)&&D,m)for($=0;$<m.length;$++)L=f.g=m[$],D=_a(L,T,!1,f)&&D}et.prototype.N=function(){if(et.Z.N.call(this),this.i){var l=this.i;for(const f in l.g){const m=l.g[f];for(let T=0;T<m.length;T++)z(m[T]);delete l.g[f],l.h--}}this.G=null},et.prototype.J=function(l,f,m,T){return this.i.add(String(l),f,!1,m,T)},et.prototype.K=function(l,f,m,T){return this.i.add(String(l),f,!0,m,T)};function _a(l,f,m,T){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();let D=!0;for(let L=0;L<f.length;++L){const $=f[L];if($&&!$.da&&$.capture==m){const ae=$.listener,Ue=$.ha||$.src;$.fa&&rn(l.i,$),D=ae.call(Ue,T)!==!1&&D}}return D&&!T.defaultPrevented}function rE(l,f){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=h(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:a.setTimeout(l,f||0)}function Op(l){l.g=rE(()=>{l.g=null,l.i&&(l.i=!1,Op(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class iE extends E{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Op(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xs(l){E.call(this),this.h=l,this.g={}}g(xs,E);var Mp=[];function Fp(l){G(l.g,function(f,m){this.g.hasOwnProperty(m)&&nu(f)},l),l.g={}}xs.prototype.N=function(){xs.Z.N.call(this),Fp(this)},xs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var su=a.JSON.stringify,sE=a.JSON.parse,oE=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Up(){}function zp(){}var As={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ou(){S.call(this,"d")}g(ou,S);function au(){S.call(this,"c")}g(au,S);var Ur={},Kp=null;function Ta(){return Kp=Kp||new et}Ur.Ia="serverreachability";function Bp(l){S.call(this,Ur.Ia,l)}g(Bp,S);function Cs(l){const f=Ta();ct(f,new Bp(f))}Ur.STAT_EVENT="statevent";function $p(l,f){S.call(this,Ur.STAT_EVENT,l),this.stat=f}g($p,S);function ut(l){const f=Ta();ct(f,new $p(f,l))}Ur.Ja="timingevent";function Wp(l,f){S.call(this,Ur.Ja,l),this.size=f}g(Wp,S);function Ns(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},f)}function Rs(){this.g=!0}Rs.prototype.ua=function(){this.g=!1};function aE(l,f,m,T,D,L){l.info(function(){if(l.g)if(L){var $="",ae=L.split("&");for(let ve=0;ve<ae.length;ve++){var Ue=ae[ve].split("=");if(Ue.length>1){const $e=Ue[0];Ue=Ue[1];const on=$e.split("_");$=on.length>=2&&on[1]=="type"?$+($e+"="+Ue+"&"):$+($e+"=redacted&")}}}else $=null;else $=L;return"XMLHTTP REQ ("+T+") [attempt "+D+"]: "+f+`
`+m+`
`+$})}function lE(l,f,m,T,D,L,$){l.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+D+"]: "+f+`
`+m+`
`+L+" "+$})}function Ii(l,f,m,T){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+uE(l,m)+(T?" "+T:"")})}function cE(l,f){l.info(function(){return"TIMEOUT: "+f})}Rs.prototype.info=function(){};function uE(l,f){if(!l.g)return f;if(!f)return null;try{const L=JSON.parse(f);if(L){for(l=0;l<L.length;l++)if(Array.isArray(L[l])){var m=L[l];if(!(m.length<2)){var T=m[1];if(Array.isArray(T)&&!(T.length<1)){var D=T[0];if(D!="noop"&&D!="stop"&&D!="close")for(let $=1;$<T.length;$++)T[$]=""}}}}return su(L)}catch{return f}}var wa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},qp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Gp;function lu(){}g(lu,Up),lu.prototype.g=function(){return new XMLHttpRequest},Gp=new lu;function bs(l){return encodeURIComponent(String(l))}function dE(l){var f=1;l=l.split(":");const m=[];for(;f>0&&l.length;)m.push(l.shift()),f--;return l.length&&m.push(l.join(":")),m}function qn(l,f,m,T){this.j=l,this.i=f,this.l=m,this.S=T||1,this.V=new xs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Hp}function Hp(){this.i=null,this.g="",this.h=!1}var Qp={},cu={};function uu(l,f,m){l.M=1,l.A=Ia(sn(f)),l.u=m,l.R=!0,Yp(l,null)}function Yp(l,f){l.F=Date.now(),Ea(l),l.B=sn(l.A);var m=l.B,T=l.S;Array.isArray(T)||(T=[String(T)]),cm(m.i,"t",T),l.C=0,m=l.j.L,l.h=new Hp,l.g=Am(l.j,m?f:null,!l.u),l.P>0&&(l.O=new iE(h(l.Y,l,l.g),l.P)),f=l.V,m=l.g,T=l.ba;var D="readystatechange";Array.isArray(D)||(D&&(Mp[0]=D.toString()),D=Mp);for(let L=0;L<D.length;L++){const $=jp(m,D[L],T||f.handleEvent,!1,f.h||f);if(!$)break;f.g[$.key]=$}f=l.J?re(l.J):{},l.u?(l.v||(l.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,f)):(l.v="GET",l.g.ea(l.B,l.v,null,f)),Cs(),aE(l.i,l.v,l.B,l.l,l.S,l.u)}qn.prototype.ba=function(l){l=l.target;const f=this.O;f&&Qn(l)==3?f.j():this.Y(l)},qn.prototype.Y=function(l){try{if(l==this.g)e:{const ae=Qn(this.g),Ue=this.g.ya(),ve=this.g.ca();if(!(ae<3)&&(ae!=3||this.g&&(this.h.h||this.g.la()||gm(this.g)))){this.K||ae!=4||Ue==7||(Ue==8||ve<=0?Cs(3):Cs(2)),du(this);var f=this.g.ca();this.X=f;var m=hE(this);if(this.o=f==200,lE(this.i,this.v,this.B,this.l,this.S,ae,f),this.o){if(this.U&&!this.L){t:{if(this.g){var T,D=this.g;if((T=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(T)){var L=T;break t}}L=null}if(l=L)Ii(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,hu(this,l);else{this.o=!1,this.m=3,ut(12),zr(this),Ps(this);break e}}if(this.R){l=!0;let $e;for(;!this.K&&this.C<m.length;)if($e=fE(this,m),$e==cu){ae==4&&(this.m=4,ut(14),l=!1),Ii(this.i,this.l,null,"[Incomplete Response]");break}else if($e==Qp){this.m=4,ut(15),Ii(this.i,this.l,m,"[Invalid Chunk]"),l=!1;break}else Ii(this.i,this.l,$e,null),hu(this,$e);if(Xp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ae!=4||m.length!=0||this.h.h||(this.m=1,ut(16),l=!1),this.o=this.o&&l,!l)Ii(this.i,this.l,m,"[Invalid Chunked Response]"),zr(this),Ps(this);else if(m.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),Tu($),$.P=!0,ut(11))}}else Ii(this.i,this.l,m,null),hu(this,m);ae==4&&zr(this),this.o&&!this.K&&(ae==4?Im(this.j,this):(this.o=!1,Ea(this)))}else AE(this.g),f==400&&m.indexOf("Unknown SID")>0?(this.m=3,ut(12)):(this.m=0,ut(13)),zr(this),Ps(this)}}}catch{}finally{}};function hE(l){if(!Xp(l))return l.g.la();const f=gm(l.g);if(f==="")return"";let m="";const T=f.length,D=Qn(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return zr(l),Ps(l),"";l.h.i=new a.TextDecoder}for(let L=0;L<T;L++)l.h.h=!0,m+=l.h.i.decode(f[L],{stream:!(D&&L==T-1)});return f.length=0,l.h.g+=m,l.C=0,l.h.g}function Xp(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function fE(l,f){var m=l.C,T=f.indexOf(`
`,m);return T==-1?cu:(m=Number(f.substring(m,T)),isNaN(m)?Qp:(T+=1,T+m>f.length?cu:(f=f.slice(T,T+m),l.C=T+m,f)))}qn.prototype.cancel=function(){this.K=!0,zr(this)};function Ea(l){l.T=Date.now()+l.H,Jp(l,l.H)}function Jp(l,f){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Ns(h(l.aa,l),f)}function du(l){l.D&&(a.clearTimeout(l.D),l.D=null)}qn.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(cE(this.i,this.B),this.M!=2&&(Cs(),ut(17)),zr(this),this.m=2,Ps(this)):Jp(this,this.T-l)};function Ps(l){l.j.I==0||l.K||Im(l.j,l)}function zr(l){du(l);var f=l.O;f&&typeof f.dispose=="function"&&f.dispose(),l.O=null,Fp(l.V),l.g&&(f=l.g,l.g=null,f.abort(),f.dispose())}function hu(l,f){try{var m=l.j;if(m.I!=0&&(m.g==l||fu(m.h,l))){if(!l.L&&fu(m.h,l)&&m.I==3){try{var T=m.Ba.g.parse(f)}catch{T=null}if(Array.isArray(T)&&T.length==3){var D=T;if(D[0]==0){e:if(!m.v){if(m.g)if(m.g.F+3e3<l.F)Ca(m),xa(m);else break e;_u(m),ut(18)}}else m.xa=D[1],0<m.xa-m.K&&D[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=Ns(h(m.Va,m),6e3));tm(m.h)<=1&&m.ta&&(m.ta=void 0)}else Br(m,11)}else if((l.L||m.g==l)&&Ca(m),!w(f))for(D=m.Ba.g.parse(f),f=0;f<D.length;f++){let ve=D[f];const $e=ve[0];if(!($e<=m.K))if(m.K=$e,ve=ve[1],m.I==2)if(ve[0]=="c"){m.M=ve[1],m.ba=ve[2];const on=ve[3];on!=null&&(m.ka=on,m.j.info("VER="+m.ka));const $r=ve[4];$r!=null&&(m.za=$r,m.j.info("SVER="+m.za));const Yn=ve[5];Yn!=null&&typeof Yn=="number"&&Yn>0&&(T=1.5*Yn,m.O=T,m.j.info("backChannelRequestTimeoutMs_="+T)),T=m;const Xn=l.g;if(Xn){const Ra=Xn.g?Xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ra){var L=T.h;L.g||Ra.indexOf("spdy")==-1&&Ra.indexOf("quic")==-1&&Ra.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(pu(L,L.h),L.h=null))}if(T.G){const wu=Xn.g?Xn.g.getResponseHeader("X-HTTP-Session-Id"):null;wu&&(T.wa=wu,we(T.J,T.G,wu))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-l.F,m.j.info("Handshake RTT: "+m.T+"ms")),T=m;var $=l;if(T.na=xm(T,T.L?T.ba:null,T.W),$.L){nm(T.h,$);var ae=$,Ue=T.O;Ue&&(ae.H=Ue),ae.D&&(du(ae),Ea(ae)),T.g=$}else wm(T);m.i.length>0&&Aa(m)}else ve[0]!="stop"&&ve[0]!="close"||Br(m,7);else m.I==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?Br(m,7):vu(m):ve[0]!="noop"&&m.l&&m.l.qa(ve),m.A=0)}}Cs(4)}catch{}}var pE=class{constructor(l,f){this.g=l,this.map=f}};function Zp(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function em(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function tm(l){return l.h?1:l.g?l.g.size:0}function fu(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function pu(l,f){l.g?l.g.add(f):l.h=f}function nm(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Zp.prototype.cancel=function(){if(this.i=rm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function rm(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const m of l.g.values())f=f.concat(m.G);return f}return N(l.i)}var im=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mE(l,f){if(l){l=l.split("&");for(let m=0;m<l.length;m++){const T=l[m].indexOf("=");let D,L=null;T>=0?(D=l[m].substring(0,T),L=l[m].substring(T+1)):D=l[m],f(D,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Gn(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;l instanceof Gn?(this.l=l.l,js(this,l.j),this.o=l.o,this.g=l.g,Ds(this,l.u),this.h=l.h,mu(this,um(l.i)),this.m=l.m):l&&(f=String(l).match(im))?(this.l=!1,js(this,f[1]||"",!0),this.o=Vs(f[2]||""),this.g=Vs(f[3]||"",!0),Ds(this,f[4]),this.h=Vs(f[5]||"",!0),mu(this,f[6]||"",!0),this.m=Vs(f[7]||"")):(this.l=!1,this.i=new Os(null,this.l))}Gn.prototype.toString=function(){const l=[];var f=this.j;f&&l.push(Ls(f,sm,!0),":");var m=this.g;return(m||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Ls(f,sm,!0),"@"),l.push(bs(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&l.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(Ls(m,m.charAt(0)=="/"?vE:yE,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",Ls(m,TE)),l.join("")},Gn.prototype.resolve=function(l){const f=sn(this);let m=!!l.j;m?js(f,l.j):m=!!l.o,m?f.o=l.o:m=!!l.g,m?f.g=l.g:m=l.u!=null;var T=l.h;if(m)Ds(f,l.u);else if(m=!!l.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var D=f.h.lastIndexOf("/");D!=-1&&(T=f.h.slice(0,D+1)+T)}if(D=T,D==".."||D==".")T="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){T=D.lastIndexOf("/",0)==0,D=D.split("/");const L=[];for(let $=0;$<D.length;){const ae=D[$++];ae=="."?T&&$==D.length&&L.push(""):ae==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),T&&$==D.length&&L.push("")):(L.push(ae),T=!0)}T=L.join("/")}else T=D}return m?f.h=T:m=l.i.toString()!=="",m?mu(f,um(l.i)):m=!!l.m,m&&(f.m=l.m),f};function sn(l){return new Gn(l)}function js(l,f,m){l.j=m?Vs(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Ds(l,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);l.u=f}else l.u=null}function mu(l,f,m){f instanceof Os?(l.i=f,wE(l.i,l.l)):(m||(f=Ls(f,_E)),l.i=new Os(f,l.l))}function we(l,f,m){l.i.set(f,m)}function Ia(l){return we(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Vs(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Ls(l,f,m){return typeof l=="string"?(l=encodeURI(l).replace(f,gE),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function gE(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var sm=/[#\/\?@]/g,yE=/[#\?:]/g,vE=/[#\?]/g,_E=/[#\?@]/g,TE=/#/g;function Os(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Kr(l){l.g||(l.g=new Map,l.h=0,l.i&&mE(l.i,function(f,m){l.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=Os.prototype,t.add=function(l,f){Kr(this),this.i=null,l=ki(this,l);let m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(f),this.h+=1,this};function om(l,f){Kr(l),f=ki(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function am(l,f){return Kr(l),f=ki(l,f),l.g.has(f)}t.forEach=function(l,f){Kr(this),this.g.forEach(function(m,T){m.forEach(function(D){l.call(f,D,T,this)},this)},this)};function lm(l,f){Kr(l);let m=[];if(typeof f=="string")am(l,f)&&(m=m.concat(l.g.get(ki(l,f))));else for(l=Array.from(l.g.values()),f=0;f<l.length;f++)m=m.concat(l[f]);return m}t.set=function(l,f){return Kr(this),this.i=null,l=ki(this,l),am(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},t.get=function(l,f){return l?(l=lm(this,l),l.length>0?String(l[0]):f):f};function cm(l,f,m){om(l,f),m.length>0&&(l.i=null,l.g.set(ki(l,f),N(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(let T=0;T<f.length;T++){var m=f[T];const D=bs(m);m=lm(this,m);for(let L=0;L<m.length;L++){let $=D;m[L]!==""&&($+="="+bs(m[L])),l.push($)}}return this.i=l.join("&")};function um(l){const f=new Os;return f.i=l.i,l.g&&(f.g=new Map(l.g),f.h=l.h),f}function ki(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function wE(l,f){f&&!l.j&&(Kr(l),l.i=null,l.g.forEach(function(m,T){const D=T.toLowerCase();T!=D&&(om(this,T),cm(this,D,m))},l)),l.j=f}function EE(l,f){const m=new Rs;if(a.Image){const T=new Image;T.onload=p(Hn,m,"TestLoadImage: loaded",!0,f,T),T.onerror=p(Hn,m,"TestLoadImage: error",!1,f,T),T.onabort=p(Hn,m,"TestLoadImage: abort",!1,f,T),T.ontimeout=p(Hn,m,"TestLoadImage: timeout",!1,f,T),a.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=l}else f(!1)}function IE(l,f){const m=new Rs,T=new AbortController,D=setTimeout(()=>{T.abort(),Hn(m,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:T.signal}).then(L=>{clearTimeout(D),L.ok?Hn(m,"TestPingServer: ok",!0,f):Hn(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(D),Hn(m,"TestPingServer: error",!1,f)})}function Hn(l,f,m,T,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),T(m)}catch{}}function kE(){this.g=new oE}function gu(l){this.i=l.Sb||null,this.h=l.ab||!1}g(gu,Up),gu.prototype.g=function(){return new ka(this.i,this.h)};function ka(l,f){et.call(this),this.H=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(ka,et),t=ka.prototype,t.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=f,this.readyState=1,Fs(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(f.body=l),(this.H||a).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ms(this)),this.readyState=0},t.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Fs(this)),this.g&&(this.readyState=3,Fs(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;dm(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function dm(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}t.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Ms(this):Fs(this),this.readyState==3&&dm(this)}},t.Oa=function(l){this.g&&(this.response=this.responseText=l,Ms(this))},t.Na=function(l){this.g&&(this.response=l,Ms(this))},t.ga=function(){this.g&&Ms(this)};function Ms(l){l.readyState=4,l.l=null,l.j=null,l.B=null,Fs(l)}t.setRequestHeader=function(l,f){this.A.append(l,f)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=f.next();return l.join(`\r
`)};function Fs(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ka.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function hm(l){let f="";return G(l,function(m,T){f+=T,f+=":",f+=m,f+=`\r
`}),f}function yu(l,f,m){e:{for(T in m){var T=!1;break e}T=!0}T||(m=hm(m),typeof l=="string"?m!=null&&bs(m):we(l,f,m))}function be(l){et.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(be,et);var SE=/^https?$/i,xE=["POST","PUT"];t=be.prototype,t.Fa=function(l){this.H=l},t.ea=function(l,f,m,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Gp.g(),this.g.onreadystatechange=_(h(this.Ca,this));try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(L){fm(this,L);return}if(l=m||"",m=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var D in T)m.set(D,T[D]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const L of T.keys())m.set(L,T.get(L));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(m.keys()).find(L=>L.toLowerCase()=="content-type"),D=a.FormData&&l instanceof a.FormData,!(Array.prototype.indexOf.call(xE,f,void 0)>=0)||T||D||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,$]of m)this.g.setRequestHeader(L,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(L){fm(this,L)}};function fm(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.o=5,pm(l),Sa(l)}function pm(l){l.A||(l.A=!0,ct(l,"complete"),ct(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,ct(this,"complete"),ct(this,"abort"),Sa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Sa(this,!0)),be.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?mm(this):this.Xa())},t.Xa=function(){mm(this)};function mm(l){if(l.h&&typeof s<"u"){if(l.v&&Qn(l)==4)setTimeout(l.Ca.bind(l),0);else if(ct(l,"readystatechange"),Qn(l)==4){l.h=!1;try{const L=l.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var T;if(T=L===0){let $=String(l.D).match(im)[1]||null;!$&&a.self&&a.self.location&&($=a.self.location.protocol.slice(0,-1)),T=!SE.test($?$.toLowerCase():"")}m=T}if(m)ct(l,"complete"),ct(l,"success");else{l.o=6;try{var D=Qn(l)>2?l.g.statusText:""}catch{D=""}l.l=D+" ["+l.ca()+"]",pm(l)}}finally{Sa(l)}}}}function Sa(l,f){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const m=l.g;l.g=null,f||ct(l,"ready");try{m.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Qn(l){return l.g?l.g.readyState:0}t.ca=function(){try{return Qn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),sE(f)}};function gm(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function AE(l){const f={};l=(l.g&&Qn(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<l.length;T++){if(w(l[T]))continue;var m=dE(l[T]);const D=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const L=f[D]||[];f[D]=L,L.push(m)}J(f,function(T){return T.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Us(l,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||f}function ym(l){this.za=0,this.i=[],this.j=new Rs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Us("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Us("baseRetryDelayMs",5e3,l),this.Za=Us("retryDelaySeedMs",1e4,l),this.Ta=Us("forwardChannelMaxRetries",2,l),this.va=Us("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new Zp(l&&l.concurrentRequestLimit),this.Ba=new kE,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=ym.prototype,t.ka=8,t.I=1,t.connect=function(l,f,m,T){ut(0),this.W=l,this.H=f||{},m&&T!==void 0&&(this.H.OSID=m,this.H.OAID=T),this.F=this.X,this.J=xm(this,null,this.W),Aa(this)};function vu(l){if(vm(l),l.I==3){var f=l.V++,m=sn(l.J);if(we(m,"SID",l.M),we(m,"RID",f),we(m,"TYPE","terminate"),zs(l,m),f=new qn(l,l.j,f),f.M=2,f.A=Ia(sn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.A.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.A,m=!0),m||(f.g=Am(f.j,null),f.g.ea(f.A)),f.F=Date.now(),Ea(f)}Sm(l)}function xa(l){l.g&&(Tu(l),l.g.cancel(),l.g=null)}function vm(l){xa(l),l.v&&(a.clearTimeout(l.v),l.v=null),Ca(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&a.clearTimeout(l.m),l.m=null)}function Aa(l){if(!em(l.h)&&!l.m){l.m=!0;var f=l.Ea;A||v(),F||(A(),F=!0),y.add(f,l),l.D=0}}function CE(l,f){return tm(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=f.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Ns(h(l.Ea,l,f),km(l,l.D)),l.D++,!0)}t.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const D=new qn(this,this.j,l);let L=this.o;if(this.U&&(L?(L=re(L),oe(L,this.U)):L=this.U),this.u!==null||this.R||(D.J=L,L=null),this.S)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var T=this.i[m];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(f+=T,f>4096){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=Tm(this,D,f),m=sn(this.J),we(m,"RID",l),we(m,"CVER",22),this.G&&we(m,"X-HTTP-Session-Id",this.G),zs(this,m),L&&(this.R?f="headers="+bs(hm(L))+"&"+f:this.u&&yu(m,this.u,L)),pu(this.h,D),this.Ra&&we(m,"TYPE","init"),this.S?(we(m,"$req",f),we(m,"SID","null"),D.U=!0,uu(D,m,null)):uu(D,m,f),this.I=2}}else this.I==3&&(l?_m(this,l):this.i.length==0||em(this.h)||_m(this))};function _m(l,f){var m;f?m=f.l:m=l.V++;const T=sn(l.J);we(T,"SID",l.M),we(T,"RID",m),we(T,"AID",l.K),zs(l,T),l.u&&l.o&&yu(T,l.u,l.o),m=new qn(l,l.j,m,l.D+1),l.u===null&&(m.J=l.o),f&&(l.i=f.G.concat(l.i)),f=Tm(l,m,1e3),m.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),pu(l.h,m),uu(m,T,f)}function zs(l,f){l.H&&G(l.H,function(m,T){we(f,T,m)}),l.l&&G({},function(m,T){we(f,T,m)})}function Tm(l,f,m){m=Math.min(l.i.length,m);const T=l.l?h(l.l.Ka,l.l,l):null;e:{var D=l.i;let ae=-1;for(;;){const Ue=["count="+m];ae==-1?m>0?(ae=D[0].g,Ue.push("ofs="+ae)):ae=0:Ue.push("ofs="+ae);let ve=!0;for(let $e=0;$e<m;$e++){var L=D[$e].g;const on=D[$e].map;if(L-=ae,L<0)ae=Math.max(0,D[$e].g-100),ve=!1;else try{L="req"+L+"_"||"";try{var $=on instanceof Map?on:Object.entries(on);for(const[$r,Yn]of $){let Xn=Yn;c(Yn)&&(Xn=su(Yn)),Ue.push(L+$r+"="+encodeURIComponent(Xn))}}catch($r){throw Ue.push(L+"type="+encodeURIComponent("_badmap")),$r}}catch{T&&T(on)}}if(ve){$=Ue.join("&");break e}}$=void 0}return l=l.i.splice(0,m),f.G=l,$}function wm(l){if(!l.g&&!l.v){l.Y=1;var f=l.Da;A||v(),F||(A(),F=!0),y.add(f,l),l.A=0}}function _u(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Ns(h(l.Da,l),km(l,l.A)),l.A++,!0)}t.Da=function(){if(this.v=null,Em(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Ns(h(this.Wa,this),l)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ut(10),xa(this),Em(this))};function Tu(l){l.B!=null&&(a.clearTimeout(l.B),l.B=null)}function Em(l){l.g=new qn(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var f=sn(l.na);we(f,"RID","rpc"),we(f,"SID",l.M),we(f,"AID",l.K),we(f,"CI",l.F?"0":"1"),!l.F&&l.ia&&we(f,"TO",l.ia),we(f,"TYPE","xmlhttp"),zs(l,f),l.u&&l.o&&yu(f,l.u,l.o),l.O&&(l.g.H=l.O);var m=l.g;l=l.ba,m.M=1,m.A=Ia(sn(f)),m.u=null,m.R=!0,Yp(m,l)}t.Va=function(){this.C!=null&&(this.C=null,xa(this),_u(this),ut(19))};function Ca(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Im(l,f){var m=null;if(l.g==f){Ca(l),Tu(l),l.g=null;var T=2}else if(fu(l.h,f))m=f.G,nm(l.h,f),T=1;else return;if(l.I!=0){if(f.o)if(T==1){m=f.u?f.u.length:0,f=Date.now()-f.F;var D=l.D;T=Ta(),ct(T,new Wp(T,m)),Aa(l)}else wm(l);else if(D=f.m,D==3||D==0&&f.X>0||!(T==1&&CE(l,f)||T==2&&_u(l)))switch(m&&m.length>0&&(f=l.h,f.i=f.i.concat(m)),D){case 1:Br(l,5);break;case 4:Br(l,10);break;case 3:Br(l,6);break;default:Br(l,2)}}}function km(l,f){let m=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(m*=2),m*f}function Br(l,f){if(l.j.info("Error code "+f),f==2){var m=h(l.bb,l),T=l.Ua;const D=!T;T=new Gn(T||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||js(T,"https"),Ia(T),D?EE(T.toString(),m):IE(T.toString(),m)}else ut(2);l.I=0,l.l&&l.l.pa(f),Sm(l),vm(l)}t.bb=function(l){l?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function Sm(l){if(l.I=0,l.ja=[],l.l){const f=rm(l.h);(f.length!=0||l.i.length!=0)&&(R(l.ja,f),R(l.ja,l.i),l.h.i.length=0,N(l.i),l.i.length=0),l.l.oa()}}function xm(l,f,m){var T=m instanceof Gn?sn(m):new Gn(m);if(T.g!="")f&&(T.g=f+"."+T.g),Ds(T,T.u);else{var D=a.location;T=D.protocol,f=f?f+"."+D.hostname:D.hostname,D=+D.port;const L=new Gn(null);T&&js(L,T),f&&(L.g=f),D&&Ds(L,D),m&&(L.h=m),T=L}return m=l.G,f=l.wa,m&&f&&we(T,m,f),we(T,"VER",l.ka),zs(l,T),T}function Am(l,f,m){if(f&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Aa&&!l.ma?new be(new gu({ab:m})):new be(l.ma),f.Fa(l.L),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cm(){}t=Cm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Na(){}Na.prototype.g=function(l,f){return new It(l,f)};function It(l,f){et.call(this),this.g=new ym(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(l?l["X-WebChannel-Client-Profile"]=f.sa:l={"X-WebChannel-Client-Profile":f.sa}),this.g.U=l,(l=f&&f.Qb)&&!w(l)&&(this.g.u=l),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!w(f)&&(this.g.G=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Si(this)}g(It,et),It.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){vu(this.g)},It.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.v&&(m={},m.__data__=su(l),l=m);f.i.push(new pE(f.Ya++,l)),f.I==3&&Aa(f)},It.prototype.N=function(){this.g.l=null,delete this.j,vu(this.g),delete this.g,It.Z.N.call(this)};function Nm(l){ou.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const m in f){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}g(Nm,ou);function Rm(){au.call(this),this.status=1}g(Rm,au);function Si(l){this.g=l}g(Si,Cm),Si.prototype.ra=function(){ct(this.g,"a")},Si.prototype.qa=function(l){ct(this.g,new Nm(l))},Si.prototype.pa=function(l){ct(this.g,new Rm)},Si.prototype.oa=function(){ct(this.g,"b")},Na.prototype.createWebChannel=Na.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,T0=function(){return new Na},_0=function(){return Ta()},v0=Ur,vh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},wa.NO_ERROR=0,wa.TIMEOUT=8,wa.HTTP_ERROR=6,fl=wa,qp.COMPLETE="complete",y0=qp,zp.EventType=As,As.OPEN="a",As.CLOSE="b",As.ERROR="c",As.MESSAGE="d",et.prototype.listen=et.prototype.J,oo=zp,be.prototype.listenOnce=be.prototype.K,be.prototype.getLastError=be.prototype.Ha,be.prototype.getLastErrorCode=be.prototype.ya,be.prototype.getStatus=be.prototype.ca,be.prototype.getResponseJson=be.prototype.La,be.prototype.getResponseText=be.prototype.la,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Fa,g0=be}).apply(typeof Ha<"u"?Ha:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
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
 */let Ts="12.13.0";function SC(t){Ts=t}/**
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
 */const ci=new bc("@firebase/firestore");function Ai(){return ci.logLevel}function q(t,...e){if(ci.logLevel<=he.DEBUG){const n=e.map(Mf);ci.debug(`Firestore (${Ts}): ${t}`,...n)}}function Un(t,...e){if(ci.logLevel<=he.ERROR){const n=e.map(Mf);ci.error(`Firestore (${Ts}): ${t}`,...n)}}function ui(t,...e){if(ci.logLevel<=he.WARN){const n=e.map(Mf);ci.warn(`Firestore (${Ts}): ${t}`,...n)}}function Mf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ee(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,w0(t,r,n)}function w0(t,e,n){let r=`FIRESTORE (${Ts}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Un(r),new Error(r)}function ge(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||w0(e,i,r)}function ie(t,e){return t}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Er{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class E0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class AC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class CC{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ge(this.o===void 0,42304);let r=this.i;const i=d=>this.i!==r?(r=this.i,n(d)):Promise.resolve();let s=new Er;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Er,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const d=s;e.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},c=d=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(d=>c(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Er)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ge(typeof r.accessToken=="string",31837,{l:r}),new E0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string",2055,{h:e}),new it(e)}}class NC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class RC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new NC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ge(this.o===void 0,3512);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new cy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new cy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function PC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Ff{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=PC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function _h(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return ld(i)===ld(s)?ce(i,s):ld(i)?1:-1}return ce(t.length,e.length)}const jC=55296,DC=57343;function ld(t){const e=t.charCodeAt(0);return e>=jC&&e<=DC}function us(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const uy="__name__";class un{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ee(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return un.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof un?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=un.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ce(e.length,n.length)}static compareSegments(e,n){const r=un.isNumericId(e),i=un.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?un.extractNumericId(e).compare(un.extractNumericId(n)):_h(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return wr.fromString(e.substring(4,e.length-2))}}class _e extends un{construct(e,n,r){return new _e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new _e(n)}static emptyPath(){return new _e([])}}const VC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends un{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return VC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===uy}static keyField(){return new Ye([uy])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new W(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new W(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=d,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(s(),i++)}if(s(),a)throw new W(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(_e.fromString(e))}static fromName(e){return new X(_e.fromString(e).popFirst(5))}static empty(){return new X(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return _e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new _e(e.slice()))}}/**
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
 */function I0(t,e,n){if(!n)throw new W(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function LC(t,e,n,r){if(e===!0&&r===!0)throw new W(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function dy(t){if(!X.isDocumentKey(t))throw new W(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hy(t){if(X.isDocumentKey(t))throw new W(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function k0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function jc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee(12329,{type:typeof t})}function Qt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jc(t);throw new W(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Fe(t,e){const n={typeString:t};return e&&(n.value=e),n}function la(t,e){if(!k0(t))throw new W(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(i&&typeof a!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new W(O.INVALID_ARGUMENT,n);return!0}/**
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
 */const fy=-62135596800,py=1e6;class Ie{static now(){return Ie.fromMillis(Date.now())}static fromDate(e){return Ie.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*py);return new Ie(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<fy)throw new W(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/py}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ie._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(la(e,Ie._jsonSchema))return new Ie(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-fy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ie._jsonSchemaVersion="firestore/timestamp/1.0",Ie._jsonSchema={type:Fe("string",Ie._jsonSchemaVersion),seconds:Fe("number"),nanoseconds:Fe("number")};/**
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
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new Ie(0,0))}static max(){return new ne(new Ie(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const qo=-1;function OC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ne.fromTimestamp(r===1e9?new Ie(n+1,0):new Ie(n,r));return new Ar(i,X.empty(),e)}function MC(t){return new Ar(t.readTime,t.key,qo)}class Ar{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ar(ne.min(),X.empty(),qo)}static max(){return new Ar(ne.max(),X.empty(),qo)}}function FC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const UC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ws(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==UC)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++s,a&&s===i&&n()},d=>r(d))}),a=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,a=new Array(s);let c=0;for(let d=0;d<s;d++){const h=d;n(e[h]).next(p=>{a[h]=p,++c,c===s&&r(a)},p=>i(p))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function KC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Es(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Dc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Dc.ce=-1;/**
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
 */const Uf=-1;function Vc(t){return t==null}function Ql(t){return t===0&&1/t==-1/0}function BC(t){return typeof t=="number"&&Number.isInteger(t)&&!Ql(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const S0="";function $C(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=my(e)),e=WC(t.get(n),e);return my(e)}function WC(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case S0:n+="";break;default:n+=s}}return n}function my(t){return t+S0+""}/**
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
 */function gy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Or(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function x0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class xe{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qa(this.root,e,this.comparator,!0)}}class Qa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=i??Qe.EMPTY,this.right=s??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Be{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new yy(this.data.getIterator())}getIteratorFrom(e){return new yy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Be(this.comparator);return n.data=e,n}}class yy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class xt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new xt([])}unionWith(e){let n=new Be(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return us(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class A0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new A0("Invalid base64 string: "+s):s}}(e);return new Ze(n)}static fromUint8Array(e){const n=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const qC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cr(t){if(ge(!!t,39018),typeof t=="string"){let e=0;const n=qC.exec(t);if(ge(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Nr(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
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
 */const C0="server_timestamp",N0="__type__",R0="__previous_value__",b0="__local_write_time__";function zf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[N0])==null?void 0:r.stringValue)===C0}function Lc(t){const e=t.mapValue.fields[R0];return zf(e)?Lc(e):e}function Go(t){const e=Cr(t.mapValue.fields[b0].timestampValue);return new Ie(e.seconds,e.nanos)}/**
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
 */class GC{constructor(e,n,r,i,s,a,c,d,h,p,g){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=d,this.useFetchStreams=h,this.isUsingEmulator=p,this.apiKey=g}}const Yl="(default)";class Ho{constructor(e,n){this.projectId=e,this.database=n||Yl}static empty(){return new Ho("","")}get isDefaultDatabase(){return this.database===Yl}isEqual(e){return e instanceof Ho&&e.projectId===this.projectId&&e.database===this.database}}function HC(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ho(t.options.projectId,e)}/**
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
 */const P0="__type__",QC="__max__",Ya={mapValue:{}},j0="__vector__",Xl="value";function Rr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zf(t)?4:XC(t)?9007199254740991:YC(t)?10:11:ee(28295,{value:t})}function wn(t,e){if(t===e)return!0;const n=Rr(t);if(n!==Rr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Go(t).isEqual(Go(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Cr(i.timestampValue),c=Cr(s.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Nr(i.bytesValue).isEqual(Nr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return De(i.geoPointValue.latitude)===De(s.geoPointValue.latitude)&&De(i.geoPointValue.longitude)===De(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return De(i.integerValue)===De(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=De(i.doubleValue),c=De(s.doubleValue);return a===c?Ql(a)===Ql(c):isNaN(a)&&isNaN(c)}return!1}(t,e);case 9:return us(t.arrayValue.values||[],e.arrayValue.values||[],wn);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},c=s.mapValue.fields||{};if(gy(a)!==gy(c))return!1;for(const d in a)if(a.hasOwnProperty(d)&&(c[d]===void 0||!wn(a[d],c[d])))return!1;return!0}(t,e);default:return ee(52216,{left:t})}}function Qo(t,e){return(t.values||[]).find(n=>wn(n,e))!==void 0}function ds(t,e){if(t===e)return 0;const n=Rr(t),r=Rr(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(s,a){const c=De(s.integerValue||s.doubleValue),d=De(a.integerValue||a.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(t,e);case 3:return vy(t.timestampValue,e.timestampValue);case 4:return vy(Go(t),Go(e));case 5:return _h(t.stringValue,e.stringValue);case 6:return function(s,a){const c=Nr(s),d=Nr(a);return c.compareTo(d)}(t.bytesValue,e.bytesValue);case 7:return function(s,a){const c=s.split("/"),d=a.split("/");for(let h=0;h<c.length&&h<d.length;h++){const p=ce(c[h],d[h]);if(p!==0)return p}return ce(c.length,d.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,a){const c=ce(De(s.latitude),De(a.latitude));return c!==0?c:ce(De(s.longitude),De(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return _y(t.arrayValue,e.arrayValue);case 10:return function(s,a){var _,N,R,P;const c=s.fields||{},d=a.fields||{},h=(_=c[Xl])==null?void 0:_.arrayValue,p=(N=d[Xl])==null?void 0:N.arrayValue,g=ce(((R=h==null?void 0:h.values)==null?void 0:R.length)||0,((P=p==null?void 0:p.values)==null?void 0:P.length)||0);return g!==0?g:_y(h,p)}(t.mapValue,e.mapValue);case 11:return function(s,a){if(s===Ya.mapValue&&a===Ya.mapValue)return 0;if(s===Ya.mapValue)return 1;if(a===Ya.mapValue)return-1;const c=s.fields||{},d=Object.keys(c),h=a.fields||{},p=Object.keys(h);d.sort(),p.sort();for(let g=0;g<d.length&&g<p.length;++g){const _=_h(d[g],p[g]);if(_!==0)return _;const N=ds(c[d[g]],h[p[g]]);if(N!==0)return N}return ce(d.length,p.length)}(t.mapValue,e.mapValue);default:throw ee(23264,{he:n})}}function vy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Cr(t),r=Cr(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function _y(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ds(n[i],r[i]);if(s)return s}return ce(n.length,r.length)}function hs(t){return Th(t)}function Th(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Cr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Nr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Th(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Th(n.fields[a])}`;return i+"}"}(t.mapValue):ee(61005,{value:t})}function pl(t){switch(Rr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Lc(t);return e?16+pl(e):16;case 5:return 2*t.stringValue.length;case 6:return Nr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+pl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Or(r.fields,(s,a)=>{i+=s.length+pl(a)}),i}(t.mapValue);default:throw ee(13486,{value:t})}}function Ty(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function wh(t){return!!t&&"integerValue"in t}function Kf(t){return!!t&&"arrayValue"in t}function wy(t){return!!t&&"nullValue"in t}function Ey(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ml(t){return!!t&&"mapValue"in t}function YC(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[P0])==null?void 0:r.stringValue)===j0}function Eo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Or(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Eo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Eo(t.arrayValue.values[n]);return e}return{...t}}function XC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===QC}/**
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
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ml(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Eo(n)}setAll(e){let n=Ye.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!n.isImmediateParentOf(c)){const d=this.getFieldsMap(n);this.applyChanges(d,r,i),r={},i=[],n=c.popLast()}a?r[c.lastSegment()]=Eo(a):i.push(c.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ml(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ml(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Or(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new vt(Eo(this.value))}}function D0(t){const e=[];return Or(t.fields,(n,r)=>{const i=new Ye([n]);if(ml(r)){const s=D0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new xt(e)}/**
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
 */class ot{constructor(e,n,r,i,s,a,c){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ot(e,0,ne.min(),ne.min(),ne.min(),vt.empty(),0)}static newFoundDocument(e,n,r,i){return new ot(e,1,n,ne.min(),r,i,0)}static newNoDocument(e,n){return new ot(e,2,n,ne.min(),ne.min(),vt.empty(),0)}static newUnknownDocument(e,n){return new ot(e,3,n,ne.min(),ne.min(),vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Jl{constructor(e,n){this.position=e,this.inclusive=n}}function Iy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=X.comparator(X.fromName(a.referenceValue),n.key):r=ds(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ky(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Yo{constructor(e,n="asc"){this.field=e,this.dir=n}}function JC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class V0{}class Me extends V0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new eN(e,n,r):n==="array-contains"?new rN(e,r):n==="in"?new iN(e,r):n==="not-in"?new sN(e,r):n==="array-contains-any"?new oN(e,r):new Me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new tN(e,r):new nN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ds(n,this.value)):n!==null&&Rr(this.value)===Rr(n)&&this.matchesComparison(ds(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class en extends V0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new en(e,n)}matches(e){return L0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function L0(t){return t.op==="and"}function O0(t){return ZC(t)&&L0(t)}function ZC(t){for(const e of t.filters)if(e instanceof en)return!1;return!0}function Eh(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+hs(t.value);if(O0(t))return t.filters.map(e=>Eh(e)).join(",");{const e=t.filters.map(n=>Eh(n)).join(",");return`${t.op}(${e})`}}function M0(t,e){return t instanceof Me?function(r,i){return i instanceof Me&&r.op===i.op&&r.field.isEqual(i.field)&&wn(r.value,i.value)}(t,e):t instanceof en?function(r,i){return i instanceof en&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,c)=>s&&M0(a,i.filters[c]),!0):!1}(t,e):void ee(19439)}function F0(t){return t instanceof Me?function(n){return`${n.field.canonicalString()} ${n.op} ${hs(n.value)}`}(t):t instanceof en?function(n){return n.op.toString()+" {"+n.getFilters().map(F0).join(" ,")+"}"}(t):"Filter"}class eN extends Me{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class tN extends Me{constructor(e,n){super(e,"in",n),this.keys=U0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class nN extends Me{constructor(e,n){super(e,"not-in",n),this.keys=U0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function U0(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class rN extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Kf(n)&&Qo(n.arrayValue,this.value)}}class iN extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qo(this.value.arrayValue,n)}}class sN extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Qo(this.value.arrayValue,n)}}class oN extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Kf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Qo(this.value.arrayValue,r))}}/**
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
 */class aN{constructor(e,n=null,r=[],i=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.Te=null}}function Sy(t,e=null,n=[],r=[],i=null,s=null,a=null){return new aN(t,e,n,r,i,s,a)}function Bf(t){const e=ie(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Eh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Vc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>hs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>hs(r)).join(",")),e.Te=n}return e.Te}function $f(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!JC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!M0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ky(t.startAt,e.startAt)&&ky(t.endAt,e.endAt)}function Ih(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Is{constructor(e,n=null,r=[],i=[],s=null,a="F",c=null,d=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=d,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function lN(t,e,n,r,i,s,a,c){return new Is(t,e,n,r,i,s,a,c)}function Oc(t){return new Is(t)}function xy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function cN(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function z0(t){return t.collectionGroup!==null}function Io(t){const e=ie(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Be(Ye.comparator);return a.filters.forEach(d=>{d.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Yo(s,r))}),n.has(Ye.keyField().canonicalString())||e.Ie.push(new Yo(Ye.keyField(),r))}return e.Ie}function mn(t){const e=ie(t);return e.Ee||(e.Ee=uN(e,Io(t))),e.Ee}function uN(t,e){if(t.limitType==="F")return Sy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Yo(i.field,s)});const n=t.endAt?new Jl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Jl(t.startAt.position,t.startAt.inclusive):null;return Sy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function kh(t,e){const n=t.filters.concat([e]);return new Is(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function dN(t,e){const n=t.explicitOrderBy.concat([e]);return new Is(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Sh(t,e,n){return new Is(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Mc(t,e){return $f(mn(t),mn(e))&&t.limitType===e.limitType}function K0(t){return`${Bf(mn(t))}|lt:${t.limitType}`}function Ci(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>F0(i)).join(", ")}]`),Vc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>hs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>hs(i)).join(",")),`Target(${r})`}(mn(t))}; limitType=${t.limitType})`}function Fc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):X.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Io(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(a,c,d){const h=Iy(a,c,d);return a.inclusive?h<=0:h<0}(r.startAt,Io(r),i)||r.endAt&&!function(a,c,d){const h=Iy(a,c,d);return a.inclusive?h>=0:h>0}(r.endAt,Io(r),i))}(t,e)}function hN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function B0(t){return(e,n)=>{let r=!1;for(const i of Io(t)){const s=fN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function fN(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(s,a,c){const d=a.data.field(s),h=c.data.field(s);return d!==null&&h!==null?ds(d,h):ee(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:t.dir})}}/**
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
 */class Ti{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Or(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return x0(this.inner)}size(){return this.innerSize}}/**
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
 */const pN=new xe(X.comparator);function zn(){return pN}const $0=new xe(X.comparator);function ao(...t){let e=$0;for(const n of t)e=e.insert(n.key,n);return e}function W0(t){let e=$0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Xr(){return ko()}function q0(){return ko()}function ko(){return new Ti(t=>t.toString(),(t,e)=>t.isEqual(e))}const mN=new xe(X.comparator),gN=new Be(X.comparator);function ue(...t){let e=gN;for(const n of t)e=e.add(n);return e}const yN=new Be(ce);function vN(){return yN}/**
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
 */function Wf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ql(e)?"-0":e}}function G0(t){return{integerValue:""+t}}function _N(t,e){return BC(e)?G0(e):Wf(t,e)}/**
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
 */class Uc{constructor(){this._=void 0}}function TN(t,e,n){return t instanceof Xo?function(i,s){const a={fields:{[N0]:{stringValue:C0},[b0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&zf(s)&&(s=Lc(s)),s&&(a.fields[R0]=s),{mapValue:a}}(n,e):t instanceof Jo?Q0(t,e):t instanceof Zo?Y0(t,e):function(i,s){const a=H0(i,s),c=Ay(a)+Ay(i.Ae);return wh(a)&&wh(i.Ae)?G0(c):Wf(i.serializer,c)}(t,e)}function wN(t,e,n){return t instanceof Jo?Q0(t,e):t instanceof Zo?Y0(t,e):n}function H0(t,e){return t instanceof Zl?function(r){return wh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Xo extends Uc{}class Jo extends Uc{constructor(e){super(),this.elements=e}}function Q0(t,e){const n=X0(e);for(const r of t.elements)n.some(i=>wn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Zo extends Uc{constructor(e){super(),this.elements=e}}function Y0(t,e){let n=X0(e);for(const r of t.elements)n=n.filter(i=>!wn(i,r));return{arrayValue:{values:n}}}class Zl extends Uc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Ay(t){return De(t.integerValue||t.doubleValue)}function X0(t){return Kf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class EN{constructor(e,n){this.field=e,this.transform=n}}function IN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Jo&&i instanceof Jo||r instanceof Zo&&i instanceof Zo?us(r.elements,i.elements,wn):r instanceof Zl&&i instanceof Zl?wn(r.Ae,i.Ae):r instanceof Xo&&i instanceof Xo}(t.transform,e.transform)}class kN{constructor(e,n){this.version=e,this.transformResults=n}}class Yt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yt}static exists(e){return new Yt(void 0,e)}static updateTime(e){return new Yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zc{}function J0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ew(t.key,Yt.none()):new ca(t.key,t.data,Yt.none());{const n=t.data,r=vt.empty();let i=new Be(Ye.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Mr(t.key,r,new xt(i.toArray()),Yt.none())}}function SN(t,e,n){t instanceof ca?function(i,s,a){const c=i.value.clone(),d=Ny(i.fieldTransforms,s,a.transformResults);c.setAll(d),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Mr?function(i,s,a){if(!gl(i.precondition,s))return void s.convertToUnknownDocument(a.version);const c=Ny(i.fieldTransforms,s,a.transformResults),d=s.data;d.setAll(Z0(i)),d.setAll(c),s.convertToFoundDocument(a.version,d).setHasCommittedMutations()}(t,e,n):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function So(t,e,n,r){return t instanceof ca?function(s,a,c,d){if(!gl(s.precondition,a))return c;const h=s.value.clone(),p=Ry(s.fieldTransforms,d,a);return h.setAll(p),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Mr?function(s,a,c,d){if(!gl(s.precondition,a))return c;const h=Ry(s.fieldTransforms,d,a),p=a.data;return p.setAll(Z0(s)),p.setAll(h),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,a,c){return gl(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(t,e,n)}function xN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=H0(r.transform,i||null);s!=null&&(n===null&&(n=vt.empty()),n.set(r.field,s))}return n||null}function Cy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&us(r,i,(s,a)=>IN(s,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ca extends zc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Mr extends zc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Z0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ny(t,e,n){const r=new Map;ge(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,c=e.data.field(s.field);r.set(s.field,wN(a,c,n[i]))}return r}function Ry(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,TN(s,a,e))}return r}class ew extends zc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class AN extends zc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class CN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&SN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=q0();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let c=this.applyToLocalView(a,s.mutatedFields);c=n.has(i.key)?null:c;const d=J0(a,c);d!==null&&r.set(i.key,d),a.isValidDocument()||a.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&us(this.mutations,e.mutations,(n,r)=>Cy(n,r))&&us(this.baseMutations,e.baseMutations,(n,r)=>Cy(n,r))}}class qf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ge(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return mN}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new qf(e,n,r,i)}}/**
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
 */class NN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class RN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Le,fe;function bN(t){switch(t){case O.OK:return ee(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return ee(15467,{code:t})}}function tw(t){if(t===void 0)return Un("GRPC error has no .code"),O.UNKNOWN;switch(t){case Le.OK:return O.OK;case Le.CANCELLED:return O.CANCELLED;case Le.UNKNOWN:return O.UNKNOWN;case Le.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Le.INTERNAL:return O.INTERNAL;case Le.UNAVAILABLE:return O.UNAVAILABLE;case Le.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Le.NOT_FOUND:return O.NOT_FOUND;case Le.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Le.ABORTED:return O.ABORTED;case Le.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Le.DATA_LOSS:return O.DATA_LOSS;default:return ee(39323,{code:t})}}(fe=Le||(Le={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function PN(){return new TextEncoder}/**
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
 */const jN=new wr([4294967295,4294967295],0);function by(t){const e=PN().encode(t),n=new m0;return n.update(e),new Uint8Array(n.digest())}function Py(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new wr([n,r],0),new wr([i,s],0)]}class Gf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new lo(`Invalid padding: ${n}`);if(r<0)throw new lo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new lo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new lo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=wr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(wr.fromNumber(r)));return i.compare(jN)===1&&(i=new wr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=by(e),[r,i]=Py(n);for(let s=0;s<this.hashCount;s++){const a=this.ye(r,i,s);if(!this.we(a))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new Gf(s,i,n);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const n=by(e),[r,i]=Py(n);for(let s=0;s<this.hashCount;s++){const a=this.ye(r,i,s);this.Se(a)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class lo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ua{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,da.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ua(ne.min(),i,new xe(ce),zn(),ue())}}class da{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new da(r,n,ue(),ue(),ue())}}/**
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
 */class yl{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class nw{constructor(e,n){this.targetId=e,this.Ce=n}}class rw{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class jy{constructor(){this.ve=0,this.Fe=Dy(),this.Me=Ze.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ue(),n=ue(),r=ue();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee(38017,{changeType:s})}}),new da(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Dy()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ge(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class DN{constructor(e){this.Ge=e,this.ze=new Map,this.je=zn(),this.Je=Xa(),this.He=Xa(),this.Ze=new xe(ce)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ee(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Ih(s))if(r===0){const a=new X(s.path);this.et(n,a,ot.newNoDocument(a,ne.min()))}else ge(r===1,20013,{expectedCount:r});else{const a=this._t(n);if(a!==r){const c=this.ut(e),d=c?this.ct(c,e,a):1;if(d!==0){this.it(n);const h=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let a,c;try{a=Nr(r).toUint8Array()}catch(d){if(d instanceof A0)return ui("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{c=new Gf(a,i,s)}catch(d){return ui(d instanceof lo?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,a)=>{const c=this.ot(a);if(c){if(s.current&&Ih(c.target)){const d=new X(c.target.path);this.It(d).has(a)||this.Et(a,d)||this.et(a,d,ot.newNoDocument(d,e))}s.Be&&(n.set(a,s.ke()),s.Ke())}});let r=ue();this.He.forEach((s,a)=>{let c=!0;a.forEachWhile(d=>{const h=this.ot(d);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.je.forEach((s,a)=>a.setReadTime(e));const i=new ua(e,n,this.Ze,this.je,r);return this.je=zn(),this.Je=Xa(),this.He=Xa(),this.Ze=new xe(ce),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new jy,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Be(ce),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Be(ce),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new jy),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Xa(){return new xe(X.comparator)}function Dy(){return new xe(X.comparator)}const VN={asc:"ASCENDING",desc:"DESCENDING"},LN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ON={and:"AND",or:"OR"};class MN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xh(t,e){return t.useProto3Json||Vc(e)?e:{value:e}}function ec(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function FN(t,e){return ec(t,e.toTimestamp())}function gn(t){return ge(!!t,49232),ne.fromTimestamp(function(n){const r=Cr(n);return new Ie(r.seconds,r.nanos)}(t))}function Hf(t,e){return Ah(t,e).canonicalString()}function Ah(t,e){const n=function(i){return new _e(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function sw(t){const e=_e.fromString(t);return ge(uw(e),10190,{key:e.toString()}),e}function Ch(t,e){return Hf(t.databaseId,e.path)}function cd(t,e){const n=sw(e);if(n.get(1)!==t.databaseId.projectId)throw new W(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(aw(n))}function ow(t,e){return Hf(t.databaseId,e)}function UN(t){const e=sw(t);return e.length===4?_e.emptyPath():aw(e)}function Nh(t){return new _e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function aw(t){return ge(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Vy(t,e,n){return{name:Ch(t,e),fields:n.value.mapValue.fields}}function zN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ee(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,p){return h.useProto3Json?(ge(p===void 0||typeof p=="string",58123),Ze.fromBase64String(p||"")):(ge(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Ze.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const p=h.code===void 0?O.UNKNOWN:tw(h.code);return new W(p,h.message||"")}(a);n=new rw(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=cd(t,r.document.name),s=gn(r.document.updateTime),a=r.document.createTime?gn(r.document.createTime):ne.min(),c=new vt({mapValue:{fields:r.document.fields}}),d=ot.newFoundDocument(i,s,a,c),h=r.targetIds||[],p=r.removedTargetIds||[];n=new yl(h,p,d.key,d)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=cd(t,r.document),s=r.readTime?gn(r.readTime):ne.min(),a=ot.newNoDocument(i,s),c=r.removedTargetIds||[];n=new yl([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=cd(t,r.document),s=r.removedTargetIds||[];n=new yl([],s,i,null)}else{if(!("filter"in e))return ee(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new RN(i,s),c=r.targetId;n=new nw(c,a)}}return n}function KN(t,e){let n;if(e instanceof ca)n={update:Vy(t,e.key,e.value)};else if(e instanceof ew)n={delete:Ch(t,e.key)};else if(e instanceof Mr)n={update:Vy(t,e.key,e.data),updateMask:XN(e.fieldMask)};else{if(!(e instanceof AN))return ee(16599,{dt:e.type});n={verify:Ch(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const c=a.transform;if(c instanceof Xo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Jo)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Zo)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Zl)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw ee(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:FN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee(27497)}(t,e.precondition)),n}function BN(t,e){return t&&t.length>0?(ge(e!==void 0,14353),t.map(n=>function(i,s){let a=i.updateTime?gn(i.updateTime):gn(s);return a.isEqual(ne.min())&&(a=gn(s)),new kN(a,i.transformResults||[])}(n,e))):[]}function $N(t,e){return{documents:[ow(t,e.path)]}}function WN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ow(t,i);const s=function(h){if(h.length!==0)return cw(en.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(p=>function(_){return{field:Ni(_.field),direction:HN(_.dir)}}(p))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const c=xh(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:i}}function qN(t){let e=UN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ge(r===1,65062);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(g){const _=lw(g);return _ instanceof en&&O0(_)?_.getFilters():[_]}(n.where));let a=[];n.orderBy&&(a=function(g){return g.map(_=>function(R){return new Yo(Ri(R.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(_))}(n.orderBy));let c=null;n.limit&&(c=function(g){let _;return _=typeof g=="object"?g.value:g,Vc(_)?null:_}(n.limit));let d=null;n.startAt&&(d=function(g){const _=!!g.before,N=g.values||[];return new Jl(N,_)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const _=!g.before,N=g.values||[];return new Jl(N,_)}(n.endAt)),lN(e,i,a,s,c,"F",d,h)}function GN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function lw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ri(n.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ri(n.unaryFilter.field);return Me.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ri(n.unaryFilter.field);return Me.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ri(n.unaryFilter.field);return Me.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}}(t):t.fieldFilter!==void 0?function(n){return Me.create(Ri(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return en.create(n.compositeFilter.filters.map(r=>lw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee(1026)}}(n.compositeFilter.op))}(t):ee(30097,{filter:t})}function HN(t){return VN[t]}function QN(t){return LN[t]}function YN(t){return ON[t]}function Ni(t){return{fieldPath:t.canonicalString()}}function Ri(t){return Ye.fromServerFormat(t.fieldPath)}function cw(t){return t instanceof Me?function(n){if(n.op==="=="){if(Ey(n.value))return{unaryFilter:{field:Ni(n.field),op:"IS_NAN"}};if(wy(n.value))return{unaryFilter:{field:Ni(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ey(n.value))return{unaryFilter:{field:Ni(n.field),op:"IS_NOT_NAN"}};if(wy(n.value))return{unaryFilter:{field:Ni(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ni(n.field),op:QN(n.op),value:n.value}}}(t):t instanceof en?function(n){const r=n.getFilters().map(i=>cw(i));return r.length===1?r[0]:{compositeFilter:{op:YN(n.op),filters:r}}}(t):ee(54877,{filter:t})}function XN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function dw(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class Cn{constructor(e,n,r,i,s=ne.min(),a=ne.min(),c=Ze.EMPTY_BYTE_STRING,d=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=d}withSequenceNumber(e){return new Cn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class JN{constructor(e){this.yt=e}}function ZN(t){const e=qN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sh(e,e.limit,"L"):e}/**
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
 */class e2{constructor(){this.bn=new t2}addToCollectionParentIndex(e,n){return this.bn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Ar.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Ar.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class t2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Be(_e.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Be(_e.comparator)).toArray()}}/**
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
 */const Ly={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},hw=41943040;class gt{static withCacheSize(e){return new gt(e,gt.DEFAULT_COLLECTION_PERCENTILE,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */gt.DEFAULT_COLLECTION_PERCENTILE=10,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,gt.DEFAULT=new gt(hw,gt.DEFAULT_COLLECTION_PERCENTILE,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),gt.DISABLED=new gt(-1,0,0);/**
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
 */class br{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new br(0)}static ar(){return new br(-1)}}/**
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
 */const Oy="LruGarbageCollector",n2=1048576;function My([t,e],[n,r]){const i=ce(t,n);return i===0?ce(e,r):i}class r2{constructor(e){this.Pr=e,this.buffer=new Be(My),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();My(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class i2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){q(Oy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Es(n)?q(Oy,"Ignoring IndexedDB error during garbage collection: ",n):await ws(n)}await this.Ar(3e5)})}}class s2{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Dc.ce);const r=new r2(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Ly)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ly):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,a,c,d,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),i=this.params.maximumSequenceNumbersToCollect):i=g,a=Date.now(),this.nthSequenceNumber(e,i))).next(g=>(r=g,c=Date.now(),this.removeTargets(e,r,n))).next(g=>(s=g,d=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(h=Date.now(),Ai()<=he.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${s} targets in `+(d-c)+`ms
	Removed ${g} documents in `+(h-d)+`ms
Total Duration: ${h-p}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:g})))}}function o2(t,e){return new s2(t,e)}/**
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
 */class a2{constructor(){this.changes=new Ti(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class l2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class c2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&So(r.mutation,i,xt.empty(),Ie.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const i=Xr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=ao();return s.forEach((c,d)=>{a=a.insert(c,d.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=Xr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,c)=>{n.set(a,c)})})}computeViews(e,n,r,i){let s=zn();const a=ko(),c=function(){return ko()}();return n.forEach((d,h)=>{const p=r.get(h.key);i.has(h.key)&&(p===void 0||p.mutation instanceof Mr)?s=s.insert(h.key,h):p!==void 0?(a.set(h.key,p.mutation.getFieldMask()),So(p.mutation,h,p.mutation.getFieldMask(),Ie.now())):a.set(h.key,xt.empty())}),this.recalculateAndSaveOverlays(e,s).next(d=>(d.forEach((h,p)=>a.set(h,p)),n.forEach((h,p)=>c.set(h,new l2(p,a.get(h)??null))),c))}recalculateAndSaveOverlays(e,n){const r=ko();let i=new xe((a,c)=>a-c),s=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const c of a)c.keys().forEach(d=>{const h=n.get(d);if(h===null)return;let p=r.get(d)||xt.empty();p=c.applyToLocalView(h,p),r.set(d,p);const g=(i.get(c.batchId)||ue()).add(d);i=i.insert(c.batchId,g)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const d=c.getNext(),h=d.key,p=d.value,g=q0();p.forEach(_=>{if(!s.has(_)){const N=J0(n.get(_),r.get(_));N!==null&&g.set(_,N),s=s.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return M.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return cN(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):z0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Xr());let c=qo,d=s;return a.next(h=>M.forEach(h,(p,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),s.get(p)?M.resolve():this.remoteDocumentCache.getEntry(e,p).next(_=>{d=d.insert(p,_)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,d,h,ue())).next(p=>({batchId:c,changes:W0(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let i=ao();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let a=ao();return this.indexManager.getCollectionParents(e,s).next(c=>M.forEach(c,d=>{const h=function(g,_){return new Is(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,d.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(p=>{p.forEach((g,_)=>{a=a.insert(g,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(a=>{s.forEach((d,h)=>{const p=h.getKey();a.get(p)===null&&(a=a.insert(p,ot.newInvalidDocument(p)))});let c=ao();return a.forEach((d,h)=>{const p=s.get(d);p!==void 0&&So(p.mutation,h,xt.empty(),Ie.now()),Fc(n,h)&&(c=c.insert(d,h))}),c})}}/**
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
 */class u2{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:gn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:ZN(i.bundledQuery),readTime:gn(i.readTime)}}(n)),M.resolve()}}/**
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
 */class d2{constructor(){this.overlays=new xe(X.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Xr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Xr(),s=n.length+1,a=new X(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const d=c.getNext().value,h=d.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&d.largestBatchId>r&&i.set(d.getKey(),d)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new xe((h,p)=>h-p);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let p=s.get(h.largestBatchId);p===null&&(p=Xr(),s=s.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const c=Xr(),d=s.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((h,p)=>c.set(h,p)),!(c.size()>=i)););return M.resolve(c)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new NN(n,r));let s=this.Lr.get(n);s===void 0&&(s=ue(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
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
 */class h2{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class Qf{constructor(){this.kr=new Be(We.Kr),this.qr=new Be(We.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new We(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new We(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new X(new _e([])),r=new We(n,e),i=new We(n,e+1),s=[];return this.qr.forEachInRange([r,i],a=>{this.Wr(a),s.push(a.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new X(new _e([])),r=new We(n,e),i=new We(n,e+1);let s=ue();return this.qr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new We(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return X.comparator(e.key,n.key)||ce(e.Jr,n.Jr)}static Ur(e,n){return ce(e.Jr,n.Jr)||X.comparator(e.key,n.key)}}/**
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
 */class f2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Be(We.Kr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new CN(s,n,r,i);this.mutationQueue.push(a);for(const c of i)this.Hr=this.Hr.add(new We(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(a)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Uf:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),i=new We(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],a=>{const c=this.Zr(a.Jr);s.push(c)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Be(ce);return n.forEach(i=>{const s=new We(i,0),a=new We(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,a],c=>{r=r.add(c.Jr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;X.isDocumentKey(s)||(s=s.child(""));const a=new We(new X(s),0);let c=new Be(ce);return this.Hr.forEachWhile(d=>{const h=d.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(c=c.add(d.Jr)),!0)},a),M.resolve(this.Yr(c))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ge(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return M.forEach(n.mutations,i=>{const s=new We(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new We(n,0),i=this.Hr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class p2{constructor(e){this.ti=e,this.docs=function(){return new xe(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(e,n){let r=zn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ot.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=zn();const a=n.path,c=new X(a.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){const{key:h,value:{document:p}}=d.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||FC(MC(p),r)<=0||(i.has(p.key)||Fc(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ee(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new m2(this)}getSize(e){return M.resolve(this.size)}}class m2 extends a2{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class g2{constructor(e){this.persistence=e,this.ri=new Ti(n=>Bf(n),$f),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.ii=0,this.si=new Qf,this.targetCount=0,this.oi=br._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new br(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((a,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ri.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
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
 */class fw{constructor(e,n){this._i={},this.overlays={},this.ai=new Dc(0),this.ui=!1,this.ui=!0,this.ci=new h2,this.referenceDelegate=e(this),this.li=new g2(this),this.indexManager=new e2,this.remoteDocumentCache=function(i){return new p2(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new JN(n),this.Pi=new u2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new d2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new f2(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new y2(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class y2 extends zC{constructor(e){super(),this.currentSequenceNumber=e}}class Yf{constructor(e){this.persistence=e,this.Ri=new Qf,this.Ai=null}static Vi(e){return new Yf(e)}get di(){if(this.Ai)return this.Ai;throw ee(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const i=X.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,ne.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class tc{constructor(e,n){this.persistence=e,this.fi=new Ti(r=>$C(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=o2(this,n)}static Vi(e,n){return new tc(e,n)}Ti(){}Ii(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,a=>this.wr(e,a,n).next(c=>{c||(r++,s.removeEntry(a,ne.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=pl(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Xf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=ue(),i=ue();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Xf(e,n.fromCache,r,i)}}/**
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
 */class v2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class _2{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return nA()?8:KC(lt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new v2;return this.ys(e,n,a).next(c=>{if(s.result=c,this.As)return this.ws(e,n,a,c.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(Ai()<=he.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Ci(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Ai()<=he.DEBUG&&q("QueryEngine","Query:",Ci(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Ai()<=he.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Ci(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mn(n))):M.resolve())}gs(e,n){if(xy(n))return M.resolve(null);let r=mn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Sh(n,null,"F"),r=mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=ue(...s);return this.fs.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(d=>{const h=this.Ss(n,c);return this.bs(n,h,a,d.readTime)?this.gs(e,Sh(n,null,"F")):this.Ds(e,h,n,d)}))})))}ps(e,n,r,i){return xy(n)||i.isEqual(ne.min())?M.resolve(null):this.fs.getDocuments(e,r).next(s=>{const a=this.Ss(n,s);return this.bs(n,a,r,i)?M.resolve(null):(Ai()<=he.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ci(n)),this.Ds(e,a,n,OC(i,qo)).next(c=>c))})}Ss(e,n){let r=new Be(B0(e));return n.forEach((i,s)=>{Fc(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return Ai()<=he.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Ci(n)),this.fs.getDocumentsMatchingQuery(e,n,Ar.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */const Jf="LocalStore",T2=3e8;class w2{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new xe(ce),this.Fs=new Ti(s=>Bf(s),$f),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new c2(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function E2(t,e,n,r){return new w2(t,e,n,r)}async function pw(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],c=[];let d=ue();for(const h of i){a.push(h.batchId);for(const p of h.mutations)d=d.add(p.key)}for(const h of s){c.push(h.batchId);for(const p of h.mutations)d=d.add(p.key)}return n.localDocuments.getDocuments(r,d).next(h=>({Ns:h,removedBatchIds:a,addedBatchIds:c}))})})}function I2(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(c,d,h,p){const g=h.batch,_=g.keys();let N=M.resolve();return _.forEach(R=>{N=N.next(()=>p.getEntry(d,R)).next(P=>{const V=h.docVersions.get(R);ge(V!==null,48541),P.version.compareTo(V)<0&&(g.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),p.addEntry(P)))})}),N.next(()=>c.mutationQueue.removeMutationBatch(d,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let d=ue();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(d=d.add(c.batch.mutations[h].key));return d}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function mw(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function k2(t,e){const n=ie(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const c=[];e.targetChanges.forEach((p,g)=>{const _=i.get(g);if(!_)return;c.push(n.li.removeMatchingKeys(s,p.removedDocuments,g).next(()=>n.li.addMatchingKeys(s,p.addedDocuments,g)));let N=_.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?N=N.withResumeToken(Ze.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):p.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(p.resumeToken,r)),i=i.insert(g,N),function(P,V,x){return P.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=T2?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(_,N,p)&&c.push(n.li.updateTargetData(s,N))});let d=zn(),h=ue();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(s,p))}),c.push(S2(s,a,e.documentUpdates).next(p=>{d=p.Bs,h=p.Ls})),!r.isEqual(ne.min())){const p=n.li.getLastRemoteSnapshotVersion(s).next(g=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(p)}return M.waitFor(c).next(()=>a.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,d,h)).next(()=>d)}).then(s=>(n.vs=i,s))}function S2(t,e,n){let r=ue(),i=ue();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let a=zn();return n.forEach((c,d)=>{const h=s.get(c);d.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),d.isNoDocument()&&d.version.isEqual(ne.min())?(e.removeEntry(c,d.readTime),a=a.insert(c,d)):!h.isValidDocument()||d.version.compareTo(h.version)>0||d.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(d),a=a.insert(c,d)):q(Jf,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",d.version)}),{Bs:a,Ls:i}})}function x2(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Uf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function A2(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.li.allocateTargetId(r).next(a=>(i=new Cn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Rh(t,e,n){const r=ie(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Es(a))throw a;q(Jf,`Failed to update sequence numbers for target ${e}: ${a}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function Fy(t,e,n){const r=ie(t);let i=ne.min(),s=ue();return r.persistence.runTransaction("Execute query","readwrite",a=>function(d,h,p){const g=ie(d),_=g.Fs.get(p);return _!==void 0?M.resolve(g.vs.get(_)):g.li.getTargetData(h,p)}(r,a,mn(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,c.targetId).next(d=>{s=d})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,n?i:ne.min(),n?s:ue())).next(c=>(C2(r,hN(e),c),{documents:c,ks:s})))}function C2(t,e,n){let r=t.Ms.get(e)||ne.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class Uy{constructor(){this.activeTargetIds=vN()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class N2{constructor(){this.vo=new Uy,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Uy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class R2{Mo(e){}shutdown(){}}/**
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
 */const zy="ConnectivityMonitor";class Ky{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){q(zy,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){q(zy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ja=null;function bh(){return Ja===null?Ja=function(){return 268435456+Math.round(2147483648*Math.random())}():Ja++,"0x"+Ja.toString(16)}/**
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
 */const ud="RestConnection",b2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class P2{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Yl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const a=bh(),c=this.Qo(e,n.toUriEncodedString());q(ud,`Sending RPC '${e}' ${a}:`,c,r);const d={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(d,i,s);const{host:h}=new URL(c),p=aa(h);return this.zo(e,c,d,r,p).then(g=>(q(ud,`Received RPC '${e}' ${a}: `,g),g),g=>{throw ui(ud,`RPC '${e}' ${a} failed with error: `,g,"url: ",c,"request:",r),g})}jo(e,n,r,i,s,a){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ts}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=b2[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class j2{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const rt="WebChannelConnection",Js=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Yi extends P2{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Yi.c_){const e=_0();Js(e,v0.STAT_EVENT,n=>{n.stat===vh.PROXY?q(rt,"STAT_EVENT: detected buffering proxy"):n.stat===vh.NOPROXY&&q(rt,"STAT_EVENT: detected no buffering proxy")}),Yi.c_=!0}}zo(e,n,r,i,s){const a=bh();return new Promise((c,d)=>{const h=new g0;h.setWithCredentials(!0),h.listenOnce(y0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case fl.NO_ERROR:const g=h.getResponseJson();q(rt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),c(g);break;case fl.TIMEOUT:q(rt,`RPC '${e}' ${a} timed out`),d(new W(O.DEADLINE_EXCEEDED,"Request time out"));break;case fl.HTTP_ERROR:const _=h.getStatus();if(q(rt,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let N=h.getResponseJson();Array.isArray(N)&&(N=N[0]);const R=N==null?void 0:N.error;if(R&&R.status&&R.message){const P=function(x){const k=x.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(k)>=0?k:O.UNKNOWN}(R.status);d(new W(P,R.message))}else d(new W(O.UNKNOWN,"Server responded with status "+h.getStatus()))}else d(new W(O.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{q(rt,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(i);q(rt,`RPC '${e}' ${a} sending request:`,i),h.send(n,"POST",p,r,15)})}T_(e,n,r){const i=bh(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const h=s.join("");q(rt,`Creating RPC '${e}' stream ${i}: ${h}`,c);const p=a.createWebChannel(h,c);this.I_(p);let g=!1,_=!1;const N=new j2({Jo:R=>{_?q(rt,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(g||(q(rt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),q(rt,`RPC '${e}' stream ${i} sending:`,R),p.send(R))},Ho:()=>p.close()});return Js(p,oo.EventType.OPEN,()=>{_||(q(rt,`RPC '${e}' stream ${i} transport opened.`),N.i_())}),Js(p,oo.EventType.CLOSE,()=>{_||(_=!0,q(rt,`RPC '${e}' stream ${i} transport closed`),N.o_(),this.E_(p))}),Js(p,oo.EventType.ERROR,R=>{_||(_=!0,ui(rt,`RPC '${e}' stream ${i} transport errored. Name:`,R.name,"Message:",R.message),N.o_(new W(O.UNAVAILABLE,"The operation could not be completed")))}),Js(p,oo.EventType.MESSAGE,R=>{var P;if(!_){const V=R.data[0];ge(!!V,16349);const x=V,k=(x==null?void 0:x.error)||((P=x[0])==null?void 0:P.error);if(k){q(rt,`RPC '${e}' stream ${i} received error:`,k);const b=k.status;let j=function(y){const v=Le[y];if(v!==void 0)return tw(v)}(b),A=k.message;b==="NOT_FOUND"&&A.includes("database")&&A.includes("does not exist")&&A.includes(this.databaseId.database)&&ui(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),j===void 0&&(j=O.INTERNAL,A="Unknown error status: "+b+" with message "+k.message),_=!0,N.o_(new W(j,A)),p.close()}else q(rt,`RPC '${e}' stream ${i} received:`,V),N.__(V)}}),Yi.u_(),setTimeout(()=>{N.s_()},0),N}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return T0()}}/**
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
 */function D2(t){return new Yi(t)}function dd(){return typeof document<"u"?document:null}/**
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
 */function Kc(t){return new MN(t,!0)}/**
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
 */Yi.c_=!1;class gw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const By="PersistentStream";class yw{constructor(e,n,r,i,s,a,c,d){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=d,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new gw(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Un(n.toString()),Un("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new W(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return q(By,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(q(By,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class V2 extends yw{constructor(e,n,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=zN(this.serializer,e),r=function(s){if(!("targetChange"in s))return ne.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?ne.min():a.readTime?gn(a.readTime):ne.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=Nh(this.serializer),n.addTarget=function(s,a){let c;const d=a.target;if(c=Ih(d)?{documents:$N(s,d)}:{query:WN(s,d).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=iw(s,a.resumeToken);const h=xh(s,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(ne.min())>0){c.readTime=ec(s,a.snapshotVersion.toTimestamp());const h=xh(s,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=GN(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Nh(this.serializer),n.removeTarget=e,this.K_(n)}}class L2 extends yw{constructor(e,n,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ge(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ge(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ge(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=BN(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Nh(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>KN(this.serializer,r))};this.K_(n)}}/**
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
 */class O2{}class M2 extends O2{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new W(O.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Wo(e,Ah(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(O.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.jo(e,Ah(n,r),i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new W(O.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function F2(t,e,n,r){return new M2(t,e,n,r)}class U2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Un(n),this.aa=!1):q("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const En="RemoteStore";class z2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new br(1e3),this.Va=new br(1001),this.da=new Set,this.ma=[],this.fa=s,this.fa.Mo(a=>{r.enqueueAndForget(async()=>{wi(this)&&(q(En,"Restarting streams for network reachability change."),await async function(d){const h=ie(d);h.da.add(4),await ha(h),h.ga.set("Unknown"),h.da.delete(4),await Bc(h)}(this))})}),this.ga=new U2(r,i)}}async function Bc(t){if(wi(t))for(const e of t.ma)await e(!0)}async function ha(t){for(const e of t.ma)await e(!1)}function Ph(t,e){return t.Ea.get(e)||void 0}function vw(t,e){const n=ie(t),r=Ph(n,e.targetId);if(r!==void 0&&n.Ia.has(r))return;const i=function(c,d){const h=Ph(c,d);h!==void 0&&c.Ra.delete(h);const p=function(_,N){return N%2!=0?_.Va.next():_.Aa.next()}(c,d);return c.Ea.set(d,p),c.Ra.set(p,d),p}(n,e.targetId);q(En,"remoteStoreListen mapping SDK target ID to remote",e.targetId,i);const s=new Cn(e.target,i,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(i,s),np(n)?tp(n):ks(n).O_()&&ep(n,s)}function Zf(t,e){const n=ie(t),r=ks(n),i=Ph(n,e);q(En,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,i),n.Ia.delete(i),n.Ea.delete(e),n.Ra.delete(i),r.O_()&&_w(n,i),n.Ia.size===0&&(r.O_()?r.L_():wi(n)&&n.ga.set("Unknown"))}function ep(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void q(En,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}ks(t).Z_(e)}function _w(t,e){t.pa.$e(e),ks(t).X_(e)}function tp(t){t.pa=new DN({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):ue()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ks(t).start(),t.ga.ua()}function np(t){return wi(t)&&!ks(t).x_()&&t.Ia.size>0}function wi(t){return ie(t).da.size===0}function Tw(t){t.pa=void 0}async function K2(t){t.ga.set("Online")}async function B2(t){t.Ia.forEach((e,n)=>{ep(t,e)})}async function $2(t,e){Tw(t),np(t)?(t.ga.ha(e),tp(t)):t.ga.set("Unknown")}async function W2(t,e,n){if(t.ga.set("Online"),e instanceof rw&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const c of s.targetIds){if(i.Ia.has(c)){const d=i.Ra.get(c);d!==void 0&&(await i.remoteSyncer.rejectListen(d,a),i.Ea.delete(d),i.Ra.delete(c)),i.Ia.delete(c)}i.pa.removeTarget(c)}}(t,e)}catch(r){q(En,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await nc(t,r)}else if(e instanceof yl?t.pa.Xe(e):e instanceof nw?t.pa.st(e):t.pa.tt(e),!n.isEqual(ne.min()))try{const r=await mw(t.localStore);n.compareTo(r)>=0&&await function(s,a){const c=s.pa.Tt(a);c.targetChanges.forEach((h,p)=>{if(h.resumeToken.approximateByteSize()>0){const g=s.Ia.get(p);g&&s.Ia.set(p,g.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,p)=>{const g=s.Ia.get(h);if(!g)return;s.Ia.set(h,g.withResumeToken(Ze.EMPTY_BYTE_STRING,g.snapshotVersion)),_w(s,h);const _=new Cn(g.target,h,p,g.sequenceNumber);ep(s,_)});const d=function(p,g){const _=new Map;g.targetChanges.forEach((R,P)=>{const V=p.Ra.get(P);V!==void 0&&_.set(V,R)});let N=new xe(ce);return g.targetMismatches.forEach((R,P)=>{const V=p.Ra.get(R);V!==void 0&&(N=N.insert(V,P))}),new ua(g.snapshotVersion,_,N,g.documentUpdates,g.resolvedLimboDocuments)}(s,c);return s.remoteSyncer.applyRemoteEvent(d)}(t,n)}catch(r){q(En,"Failed to raise snapshot:",r),await nc(t,r)}}async function nc(t,e,n){if(!Es(e))throw e;t.da.add(1),await ha(t),t.ga.set("Offline"),n||(n=()=>mw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q(En,"Retrying IndexedDB access"),await n(),t.da.delete(1),await Bc(t)})}function ww(t,e){return e().catch(n=>nc(t,n,e))}async function $c(t){const e=ie(t),n=Pr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Uf;for(;q2(e);)try{const i=await x2(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,G2(e,i)}catch(i){await nc(e,i)}Ew(e)&&Iw(e)}function q2(t){return wi(t)&&t.Ta.length<10}function G2(t,e){t.Ta.push(e);const n=Pr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function Ew(t){return wi(t)&&!Pr(t).x_()&&t.Ta.length>0}function Iw(t){Pr(t).start()}async function H2(t){Pr(t).ra()}async function Q2(t){const e=Pr(t);for(const n of t.Ta)e.ea(n.mutations)}async function Y2(t,e,n){const r=t.Ta.shift(),i=qf.from(r,e,n);await ww(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await $c(t)}async function X2(t,e){e&&Pr(t).Y_&&await async function(r,i){if(function(a){return bN(a)&&a!==O.ABORTED}(i.code)){const s=r.Ta.shift();Pr(r).B_(),await ww(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await $c(r)}}(t,e),Ew(t)&&Iw(t)}async function $y(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),q(En,"RemoteStore received new credentials");const r=wi(n);n.da.add(3),await ha(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await Bc(n)}async function J2(t,e){const n=ie(t);e?(n.da.delete(2),await Bc(n)):e||(n.da.add(2),await ha(n),n.ga.set("Unknown"))}function ks(t){return t.ya||(t.ya=function(n,r,i){const s=ie(n);return s.sa(),new V2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:K2.bind(null,t),Yo:B2.bind(null,t),t_:$2.bind(null,t),H_:W2.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),np(t)?tp(t):t.ga.set("Unknown")):(await t.ya.stop(),Tw(t))})),t.ya}function Pr(t){return t.wa||(t.wa=function(n,r,i){const s=ie(n);return s.sa(),new L2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:H2.bind(null,t),t_:X2.bind(null,t),ta:Q2.bind(null,t),na:Y2.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await $c(t)):(await t.wa.stop(),t.Ta.length>0&&(q(En,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
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
 */class rp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,c=new rp(e,n,a,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ip(t,e){if(Un("AsyncQueue",`${e}: ${t}`),Es(t))return new W(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Xi{static emptySet(e){return new Xi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=ao(),this.sortedSet=new xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Xi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Wy{constructor(){this.Sa=new xe(X.comparator)}track(e){const n=e.doc.key,r=this.Sa.get(n);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(n):e.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):ee(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal((n,r)=>{e.push(r)}),e}}class fs{constructor(e,n,r,i,s,a,c,d,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=d,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const a=[];return n.forEach(c=>{a.push({type:0,doc:c})}),new fs(e,n,Xi.emptySet(n),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Z2{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class eR{constructor(){this.queries=qy(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,r){const i=ie(n),s=i.queries;i.queries=qy(),s.forEach((a,c)=>{for(const d of c.va)d.onError(r)})})(this,new W(O.ABORTED,"Firestore shutting down"))}}function qy(){return new Ti(t=>K0(t),Mc)}async function kw(t,e){const n=ie(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Fa()&&e.Ma()&&(r=2):(s=new Z2,r=e.Ma()?0:1);try{switch(r){case 0:s.Ca=await n.onListen(i,!0);break;case 1:s.Ca=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(a){const c=ip(a,`Initialization of query '${Ci(e.query)}' failed`);return void e.onError(c)}n.queries.set(i,s),s.va.push(e),e.Oa(n.onlineState),s.Ca&&e.Na(s.Ca)&&sp(n)}async function Sw(t,e){const n=ie(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const a=s.va.indexOf(e);a>=0&&(s.va.splice(a,1),s.va.length===0?i=e.Ma()?0:1:!s.Fa()&&e.Ma()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function tR(t,e){const n=ie(t);let r=!1;for(const i of e){const s=i.query,a=n.queries.get(s);if(a){for(const c of a.va)c.Na(i)&&(r=!0);a.Ca=i}}r&&sp(n)}function nR(t,e,n){const r=ie(t),i=r.queries.get(e);if(i)for(const s of i.va)s.onError(n);r.queries.delete(e)}function sp(t){t.xa.forEach(e=>{e.next()})}var jh,Gy;(Gy=jh||(jh={})).Ba="default",Gy.Cache="cache";class xw{constructor(e,n,r){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new fs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=fs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==jh.Cache}}/**
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
 */class Aw{constructor(e){this.key=e}}class Cw{constructor(e){this.key=e}}class rR{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=ue(),this.mutatedKeys=ue(),this.iu=B0(e),this.su=new Xi(this.iu)}get ou(){return this.tu}_u(e,n){const r=n?n.au:new Wy,i=n?n.su:this.su;let s=n?n.mutatedKeys:this.mutatedKeys,a=i,c=!1;const d=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,g)=>{const _=i.get(p),N=Fc(this.query,g)?g:null,R=!!_&&this.mutatedKeys.has(_.key),P=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let V=!1;_&&N?_.data.isEqual(N.data)?R!==P&&(r.track({type:3,doc:N}),V=!0):this.uu(_,N)||(r.track({type:2,doc:N}),V=!0,(d&&this.iu(N,d)>0||h&&this.iu(N,h)<0)&&(c=!0)):!_&&N?(r.track({type:0,doc:N}),V=!0):_&&!N&&(r.track({type:1,doc:_}),V=!0,(d||h)&&(c=!0)),V&&(N?(a=a.add(N),s=P?s.add(p):s.delete(p)):(a=a.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{su:a,au:r,bs:c,mutatedKeys:s}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const a=e.au.Da();a.sort((p,g)=>function(N,R){const P=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{Vt:V})}};return P(N)-P(R)}(p.type,g.type)||this.iu(p.doc,g.doc)),this.cu(r),i=i??!1;const c=n&&!i?this.lu():[],d=this.ru.size===0&&this.current&&!i?1:0,h=d!==this.nu;return this.nu=d,a.length!==0||h?{snapshot:new fs(this.query,e.su,s,a,e.mutatedKeys,d===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:c}:{hu:c}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new Wy,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=ue(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const n=[];return e.forEach(r=>{this.ru.has(r)||n.push(new Cw(r))}),this.ru.forEach(r=>{e.has(r)||n.push(new Aw(r))}),n}Tu(e){this.tu=e.ks,this.ru=ue();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return fs.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const op="SyncEngine";class iR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class sR{constructor(e){this.key=e,this.Eu=!1}}class oR{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ru={},this.Au=new Ti(c=>K0(c),Mc),this.Vu=new Map,this.du=new Set,this.mu=new xe(X.comparator),this.fu=new Map,this.gu=new Qf,this.pu={},this.yu=new Map,this.wu=br.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function aR(t,e,n=!0){const r=Dw(t);let i;const s=r.Au.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Iu()):i=await Nw(r,e,n,!0),i}async function lR(t,e){const n=Dw(t);await Nw(n,e,!0,!1)}async function Nw(t,e,n,r){const i=await A2(t.localStore,mn(e)),s=i.targetId,a=t.sharedClientState.addLocalQueryTarget(s,n);let c;return r&&(c=await cR(t,e,s,a==="current",i.resumeToken)),t.isPrimaryClient&&n&&vw(t.remoteStore,i),c}async function cR(t,e,n,r,i){t.bu=(g,_,N)=>async function(P,V,x,k){let b=V.view._u(x);b.bs&&(b=await Fy(P.localStore,V.query,!1).then(({documents:y})=>V.view._u(y,b)));const j=k&&k.targetChanges.get(V.targetId),A=k&&k.targetMismatches.get(V.targetId)!=null,F=V.view.applyChanges(b,P.isPrimaryClient,j,A);return Qy(P,V.targetId,F.hu),F.snapshot}(t,g,_,N);const s=await Fy(t.localStore,e,!0),a=new rR(e,s.ks),c=a._u(s.documents),d=da.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=a.applyChanges(c,t.isPrimaryClient,d);Qy(t,n,h.hu);const p=new iR(e,n,a);return t.Au.set(e,p),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),h.snapshot}async function uR(t,e,n){const r=ie(t),i=r.Au.get(e),s=r.Vu.get(i.targetId);if(s.length>1)return r.Vu.set(i.targetId,s.filter(a=>!Mc(a,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Rh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Zf(r.remoteStore,i.targetId),Dh(r,i.targetId)}).catch(ws)):(Dh(r,i.targetId),await Rh(r.localStore,i.targetId,!0))}async function dR(t,e){const n=ie(t),r=n.Au.get(e),i=n.Vu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Zf(n.remoteStore,r.targetId))}async function hR(t,e,n){const r=_R(t);try{const i=await function(a,c){const d=ie(a),h=Ie.now(),p=c.reduce((N,R)=>N.add(R.key),ue());let g,_;return d.persistence.runTransaction("Locally write mutations","readwrite",N=>{let R=zn(),P=ue();return d.xs.getEntries(N,p).next(V=>{R=V,R.forEach((x,k)=>{k.isValidDocument()||(P=P.add(x))})}).next(()=>d.localDocuments.getOverlayedDocuments(N,R)).next(V=>{g=V;const x=[];for(const k of c){const b=xN(k,g.get(k.key).overlayedDocument);b!=null&&x.push(new Mr(k.key,b,D0(b.value.mapValue),Yt.exists(!0)))}return d.mutationQueue.addMutationBatch(N,h,x,c)}).next(V=>{_=V;const x=V.applyToLocalDocumentSet(g,P);return d.documentOverlayCache.saveOverlays(N,V.batchId,x)})}).then(()=>({batchId:_.batchId,changes:W0(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,d){let h=a.pu[a.currentUser.toKey()];h||(h=new xe(ce)),h=h.insert(c,d),a.pu[a.currentUser.toKey()]=h}(r,i.batchId,n),await fa(r,i.changes),await $c(r.remoteStore)}catch(i){const s=ip(i,"Failed to persist write");n.reject(s)}}async function Rw(t,e){const n=ie(t);try{const r=await k2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const a=n.fu.get(s);a&&(ge(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.Eu=!0:i.modifiedDocuments.size>0?ge(a.Eu,14607):i.removedDocuments.size>0&&(ge(a.Eu,42227),a.Eu=!1))}),await fa(n,r,e)}catch(r){await ws(r)}}function Hy(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Au.forEach((s,a)=>{const c=a.view.Oa(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){const d=ie(a);d.onlineState=c;let h=!1;d.queries.forEach((p,g)=>{for(const _ of g.va)_.Oa(c)&&(h=!0)}),h&&sp(d)}(r.eventManager,e),i.length&&r.Ru.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function fR(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.fu.get(e),s=i&&i.key;if(s){let a=new xe(X.comparator);a=a.insert(s,ot.newNoDocument(s,ne.min()));const c=ue().add(s),d=new ua(ne.min(),new Map,new xe(ce),a,c);await Rw(r,d),r.mu=r.mu.remove(s),r.fu.delete(e),ap(r)}else await Rh(r.localStore,e,!1).then(()=>Dh(r,e,n)).catch(ws)}async function pR(t,e){const n=ie(t),r=e.batch.batchId;try{const i=await I2(n.localStore,e);Pw(n,r,null),bw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fa(n,i)}catch(i){await ws(i)}}async function mR(t,e,n){const r=ie(t);try{const i=await function(a,c){const d=ie(a);return d.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return d.mutationQueue.lookupMutationBatch(h,c).next(g=>(ge(g!==null,37113),p=g.keys(),d.mutationQueue.removeMutationBatch(h,g))).next(()=>d.mutationQueue.performConsistencyCheck(h)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(h,p,c)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>d.localDocuments.getDocuments(h,p))})}(r.localStore,e);Pw(r,e,n),bw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await fa(r,i)}catch(i){await ws(i)}}function bw(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function Pw(t,e,n){const r=ie(t);let i=r.pu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.pu[r.currentUser.toKey()]=i}}function Dh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vu.get(e))t.Au.delete(r),n&&t.Ru.Du(r,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(r=>{t.gu.containsKey(r)||jw(t,r)})}function jw(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(Zf(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),ap(t))}function Qy(t,e,n){for(const r of n)r instanceof Aw?(t.gu.addReference(r.key,e),gR(t,r)):r instanceof Cw?(q(op,"Document no longer in limbo: "+r.key),t.gu.removeReference(r.key,e),t.gu.containsKey(r.key)||jw(t,r.key)):ee(19791,{Cu:r})}function gR(t,e){const n=e.key,r=n.path.canonicalString();t.mu.get(n)||t.du.has(r)||(q(op,"New document in limbo: "+n),t.du.add(r),ap(t))}function ap(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new X(_e.fromString(e)),r=t.wu.next();t.fu.set(r,new sR(n)),t.mu=t.mu.insert(n,r),vw(t.remoteStore,new Cn(mn(Oc(n.path)),r,"TargetPurposeLimboResolution",Dc.ce))}}async function fa(t,e,n){const r=ie(t),i=[],s=[],a=[];r.Au.isEmpty()||(r.Au.forEach((c,d)=>{a.push(r.bu(d,e,n).then(h=>{var p;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(p=n==null?void 0:n.targetChanges.get(d.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(d.targetId,g?"current":"not-current")}if(h){i.push(h);const g=Xf.Es(d.targetId,h);s.push(g)}}))}),await Promise.all(a),r.Ru.H_(i),await async function(d,h){const p=ie(d);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>M.forEach(h,_=>M.forEach(_.Ts,N=>p.persistence.referenceDelegate.addReference(g,_.targetId,N)).next(()=>M.forEach(_.Is,N=>p.persistence.referenceDelegate.removeReference(g,_.targetId,N)))))}catch(g){if(!Es(g))throw g;q(Jf,"Failed to update sequence numbers: "+g)}for(const g of h){const _=g.targetId;if(!g.fromCache){const N=p.vs.get(_),R=N.snapshotVersion,P=N.withLastLimboFreeSnapshotVersion(R);p.vs=p.vs.insert(_,P)}}}(r.localStore,s))}async function yR(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){q(op,"User change. New user:",e.toKey());const r=await pw(n.localStore,e);n.currentUser=e,function(s,a){s.yu.forEach(c=>{c.forEach(d=>{d.reject(new W(O.CANCELLED,a))})}),s.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fa(n,r.Ns)}}function vR(t,e){const n=ie(t),r=n.fu.get(e);if(r&&r.Eu)return ue().add(r.key);{let i=ue();const s=n.Vu.get(e);if(!s)return i;for(const a of s){const c=n.Au.get(a);i=i.unionWith(c.view.ou)}return i}}function Dw(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Rw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fR.bind(null,e),e.Ru.H_=tR.bind(null,e.eventManager),e.Ru.Du=nR.bind(null,e.eventManager),e}function _R(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mR.bind(null,e),e}class rc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Kc(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return E2(this.persistence,new _2,e.initialUser,this.serializer)}xu(e){return new fw(Yf.Vi,this.serializer)}Mu(e){return new N2}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}rc.provider={build:()=>new rc};class TR extends rc{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){ge(this.persistence.referenceDelegate instanceof tc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new i2(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?gt.withCacheSize(this.cacheSizeBytes):gt.DEFAULT;return new fw(r=>tc.Vi(r,n),this.serializer)}}class Vh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yR.bind(null,this.syncEngine),await J2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new eR}()}createDatastore(e){const n=Kc(e.databaseInfo.databaseId),r=D2(e.databaseInfo);return F2(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,a,c){return new z2(r,i,s,a,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Hy(this.syncEngine,n,0),function(){return Ky.v()?new Ky:new R2}())}createSyncEngine(e,n){return function(i,s,a,c,d,h,p){const g=new oR(i,s,a,c,d,h);return p&&(g.Su=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ie(i);q(En,"RemoteStore shutting down."),s.da.add(5),await ha(s),s.fa.shutdown(),s.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Vh.provider={build:()=>new Vh};/**
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
 */class Vw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):Un("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const jr="FirestoreClient";class wR{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=Ff.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{q(jr,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(q(jr,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ip(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hd(t,e){t.asyncQueue.verifyOperationInProgress(),q(jr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await pw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Yy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ER(t);q(jr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>$y(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>$y(e.remoteStore,i)),t._onlineComponents=e}async function ER(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q(jr,"Using user provided OfflineComponentProvider");try{await hd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ui("Error using user provided cache. Falling back to memory cache: "+n),await hd(t,new rc)}}else q(jr,"Using default OfflineComponentProvider"),await hd(t,new TR(void 0));return t._offlineComponents}async function Lw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q(jr,"Using user provided OnlineComponentProvider"),await Yy(t,t._uninitializedComponentsProvider._online)):(q(jr,"Using default OnlineComponentProvider"),await Yy(t,new Vh))),t._onlineComponents}function IR(t){return Lw(t).then(e=>e.syncEngine)}async function Lh(t){const e=await Lw(t),n=e.eventManager;return n.onListen=aR.bind(null,e.syncEngine),n.onUnlisten=uR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=lR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=dR.bind(null,e.syncEngine),n}function kR(t,e,n,r){const i=new Vw(r),s=new xw(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>kw(await Lh(t),s)),()=>{i.Ku(),t.asyncQueue.enqueueAndForget(async()=>Sw(await Lh(t),s))}}function SR(t,e,n={}){const r=new Er;return t.asyncQueue.enqueueAndForget(async()=>function(s,a,c,d,h){const p=new Vw({next:_=>{p.Ku(),a.enqueueAndForget(()=>Sw(s,g));const N=_.docs.has(c);!N&&_.fromCache?h.reject(new W(O.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&_.fromCache&&d&&d.source==="server"?h.reject(new W(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),g=new xw(Oc(c.path),p,{includeMetadataChanges:!0,Wa:!0});return kw(s,g)}(await Lh(t),t.asyncQueue,e,n,r)),r.promise}function xR(t,e){const n=new Er;return t.asyncQueue.enqueueAndForget(async()=>hR(await IR(t),e,n)),n.promise}/**
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
 */function Ow(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const AR="ComponentProvider",Xy=new Map;function CR(t,e,n,r,i){return new GC(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Ow(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const Mw="firestore.googleapis.com",Jy=!0;class Zy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Mw,this.ssl=Jy}else this.host=e.host,this.ssl=e.ssl??Jy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=hw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<n2)throw new W(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}LC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ow(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new xC;switch(r.type){case"firstParty":return new RC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Xy.get(n);r&&(q(AR,"Removing Datastore"),Xy.delete(n),r.terminate())}(this),Promise.resolve()}}function NR(t,e,n,r={}){var h;t=Qt(t,Wc);const i=aa(e),s=t._getSettings(),a={...s,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;i&&l0(`https://${c}`),s.host!==Mw&&s.host!==c&&ui("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...s,host:c,ssl:i,emulatorOptions:r};if(!xr(d,a)&&(t._setSettings(d),r.mockUserToken)){let p,g;if(typeof r.mockUserToken=="string")p=r.mockUserToken,g=it.MOCK_USER;else{p=Yx(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new W(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new it(_)}t._authCredentials=new AC(new E0(p,g))}}/**
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
 */class Ei{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ei(this.firestore,e,this._query)}}class je{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}toJSON(){return{type:je._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(la(n,je._jsonSchema))return new je(e,r||null,new X(_e.fromString(n.referencePath)))}}je._jsonSchemaVersion="firestore/documentReference/1.0",je._jsonSchema={type:Fe("string",je._jsonSchemaVersion),referencePath:Fe("string")};class Ir extends Ei{constructor(e,n,r){super(e,n,Oc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new X(e))}withConverter(e){return new Ir(this.firestore,e,this._path)}}function ev(t,e,...n){if(t=Re(t),I0("collection","path",e),t instanceof Wc){const r=_e.fromString(e,...n);return hy(r),new Ir(t,null,r)}{if(!(t instanceof je||t instanceof Ir))throw new W(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return hy(r),new Ir(t.firestore,null,r)}}function qc(t,e,...n){if(t=Re(t),arguments.length===1&&(e=Ff.newId()),I0("doc","path",e),t instanceof Wc){const r=_e.fromString(e,...n);return dy(r),new je(t,null,new X(r))}{if(!(t instanceof je||t instanceof Ir))throw new W(O.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return dy(r),new je(t.firestore,t instanceof Ir?t.converter:null,new X(r))}}/**
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
 */const tv="AsyncQueue";class nv{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new gw(this,"async_queue_retry"),this.lc=()=>{const r=dd();r&&q(tv,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=dd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=dd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new Er;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!Es(e))throw e;q(tv,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,Un("INTERNAL UNHANDLED ERROR: ",rv(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const i=rp.createAndSchedule(this,e,n,r,s=>this.Ec(s));return this.oc.push(i),i}Pc(){this._c&&ee(47125,{Rc:rv(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function rv(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class di extends Wc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new nv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new nv(e),this._firestoreClient=void 0,await e}}}function RR(t,e){const n=typeof t=="object"?t:Pc(),r=typeof t=="string"?t:Yl,i=_i(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Hx("firestore");s&&NR(i,...s)}return i}function lp(t){if(t._terminated)throw new W(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||bR(t),t._firestoreClient}function bR(t){var r,i,s,a;const e=t._freezeSettings(),n=CR(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new wR(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(d){const h=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(h),_online:h}}(t._componentsProvider))}/**
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
 */class Vt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vt(Ze.fromBase64String(e))}catch(n){throw new W(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vt(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Vt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(la(e,Vt._jsonSchema))return Vt.fromBase64String(e.bytes)}}Vt._jsonSchemaVersion="firestore/bytes/1.0",Vt._jsonSchema={type:Fe("string",Vt._jsonSchemaVersion),bytes:Fe("string")};/**
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
 */class cp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Gc{constructor(e){this._methodName=e}}/**
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
 */class yn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:yn._jsonSchemaVersion}}static fromJSON(e){if(la(e,yn._jsonSchema))return new yn(e.latitude,e.longitude)}}yn._jsonSchemaVersion="firestore/geoPoint/1.0",yn._jsonSchema={type:Fe("string",yn._jsonSchemaVersion),latitude:Fe("number"),longitude:Fe("number")};/**
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
 */class Xt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Xt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(la(e,Xt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Xt(e.vectorValues);throw new W(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Xt._jsonSchemaVersion="firestore/vectorValue/1.0",Xt._jsonSchema={type:Fe("string",Xt._jsonSchemaVersion),vectorValues:Fe("object")};/**
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
 */const PR=/^__.*__$/;class jR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Mr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ca(e,this.data,n,this.fieldTransforms)}}class Fw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Mr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Uw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{dataSource:t})}}class up{constructor(e,n,r,i,s,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.fc(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new up({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.wc(e),r}Sc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return ic(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(Uw(this.dataSource)&&PR.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class DR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Kc(e)}V(e,n,r,i=!1){return new up({dataSource:e,methodName:n,targetDoc:r,path:Ye.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hc(t){const e=t._freezeSettings(),n=Kc(t._databaseId);return new DR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function zw(t,e,n,r,i,s={}){const a=t.V(s.merge||s.mergeFields?2:0,e,n,i);hp("Data must be an object, but it was:",a,r);const c=Kw(r,a);let d,h;if(s.merge)d=new xt(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const p=[];for(const g of s.mergeFields){const _=ps(e,g,n);if(!a.contains(_))throw new W(O.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Ww(p,_)||p.push(_)}d=new xt(p),h=a.fieldTransforms.filter(g=>d.covers(g.field))}else d=null,h=a.fieldTransforms;return new jR(new vt(c),d,h)}class Qc extends Gc{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qc}}class dp extends Gc{_toFieldTransform(e){return new EN(e.path,new Xo)}isEqual(e){return e instanceof dp}}function VR(t,e,n,r){const i=t.V(1,e,n);hp("Data must be an object, but it was:",i,r);const s=[],a=vt.empty();Or(r,(d,h)=>{const p=$w(e,d,n);h=Re(h);const g=i.Sc(p);if(h instanceof Qc)s.push(p);else{const _=pa(h,g);_!=null&&(s.push(p),a.set(p,_))}});const c=new xt(s);return new Fw(a,c,i.fieldTransforms)}function LR(t,e,n,r,i,s){const a=t.V(1,e,n),c=[ps(e,r,n)],d=[i];if(s.length%2!=0)throw new W(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<s.length;_+=2)c.push(ps(e,s[_])),d.push(s[_+1]);const h=[],p=vt.empty();for(let _=c.length-1;_>=0;--_)if(!Ww(h,c[_])){const N=c[_];let R=d[_];R=Re(R);const P=a.Sc(N);if(R instanceof Qc)h.push(N);else{const V=pa(R,P);V!=null&&(h.push(N),p.set(N,V))}}const g=new xt(h);return new Fw(p,g,a.fieldTransforms)}function OR(t,e,n,r=!1){return pa(n,t.V(r?4:3,e))}function pa(t,e){if(Bw(t=Re(t)))return hp("Unsupported field value:",e,t),Kw(t,e);if(t instanceof Gc)return function(r,i){if(!Uw(i.dataSource))throw i.Dc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Dc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const c of r){let d=pa(c,i.bc(a));d==null&&(d={nullValue:"NULL_VALUE"}),s.push(d),a++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _N(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ie.fromDate(r);return{timestampValue:ec(i.serializer,s)}}if(r instanceof Ie){const s=new Ie(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ec(i.serializer,s)}}if(r instanceof yn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vt)return{bytesValue:iw(i.serializer,r._byteString)};if(r instanceof je){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Dc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Hf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Xt)return function(a,c){const d=a instanceof Xt?a.toArray():a;return{mapValue:{fields:{[P0]:{stringValue:j0},[Xl]:{arrayValue:{values:d.map(p=>{if(typeof p!="number")throw c.Dc("VectorValues must only contain numeric values.");return Wf(c.serializer,p)})}}}}}}(r,i);if(dw(r))return r._toProto(i.serializer);throw i.Dc(`Unsupported field value: ${jc(r)}`)}(t,e)}function Kw(t,e){const n={};return x0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Or(t,(r,i)=>{const s=pa(i,e.yc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Bw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ie||t instanceof yn||t instanceof Vt||t instanceof je||t instanceof Gc||t instanceof Xt||dw(t))}function hp(t,e,n){if(!Bw(n)||!k0(n)){const r=jc(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function ps(t,e,n){if((e=Re(e))instanceof cp)return e._internalPath;if(typeof e=="string")return $w(t,e);throw ic("Field path arguments must be of type string or ",t,!1,void 0,n)}const MR=new RegExp("[~\\*/\\[\\]]");function $w(t,e,n){if(e.search(MR)>=0)throw ic(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new cp(...e.split("."))._internalPath}catch{throw ic(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ic(t,e,n,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let d="";return(s||a)&&(d+=" (found",s&&(d+=` in field ${r}`),a&&(d+=` in document ${i}`),d+=")"),new W(O.INVALID_ARGUMENT,c+t+d)}function Ww(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class FR{convertValue(e,n="none"){switch(Rr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Nr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Or(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Xl].arrayValue)==null?void 0:i.values)==null?void 0:s.map(a=>De(a.doubleValue));return new Xt(n)}convertGeoPoint(e){return new yn(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Lc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Go(e));default:return null}}convertTimestamp(e){const n=Cr(e);return new Ie(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=_e.fromString(e);ge(uw(r),9688,{name:e});const i=new Ho(r.get(1),r.get(3)),s=new X(r.popFirst(5));return i.isEqual(n)||Un(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class qw extends FR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,n)}}function UR(){return new dp("serverTimestamp")}const iv="@firebase/firestore",sv="4.14.1";/**
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
 */function ov(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class Gw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(ps("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class zR extends Gw{data(){return super.data()}}/**
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
 */function KR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fp{}class Hw extends fp{}function BR(t,e,...n){let r=[];e instanceof fp&&r.push(e),r=r.concat(n),function(s){const a=s.filter(d=>d instanceof mp).length,c=s.filter(d=>d instanceof pp).length;if(a>1||a>0&&c>0)throw new W(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class pp extends Hw{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new pp(e,n,r)}_apply(e){const n=this._parse(e);return Qw(e._query,n),new Ei(e.firestore,e.converter,kh(e._query,n))}_parse(e){const n=Hc(e.firestore);return function(s,a,c,d,h,p,g){let _;if(h.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new W(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){lv(g,p);const R=[];for(const P of g)R.push(av(d,s,P));_={arrayValue:{values:R}}}else _=av(d,s,g)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||lv(g,p),_=OR(c,a,g,p==="in"||p==="not-in");return Me.create(h,p,_)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class mp extends fp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new mp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:en.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let a=i;const c=s.getFlattenedFilters();for(const d of c)Qw(a,d),a=kh(a,d)}(e._query,n),new Ei(e.firestore,e.converter,kh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class gp extends Hw{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new gp(e,n)}_apply(e){const n=function(i,s,a){if(i.startAt!==null)throw new W(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Yo(s,a)}(e._query,this._field,this._direction);return new Ei(e.firestore,e.converter,dN(e._query,n))}}function $R(t,e="asc"){const n=e,r=ps("orderBy",t);return gp._create(r,n)}function av(t,e,n){if(typeof(n=Re(n))=="string"){if(n==="")throw new W(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!z0(e)&&n.indexOf("/")!==-1)throw new W(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(_e.fromString(n));if(!X.isDocumentKey(r))throw new W(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ty(t,new X(r))}if(n instanceof je)return Ty(t,n._key);throw new W(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jc(n)}.`)}function lv(t,e){if(!Array.isArray(t)||t.length===0)throw new W(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Qw(t,e){const n=function(i,s){for(const a of i)for(const c of a.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Yw(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class co{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ti extends Gw{constructor(e,n,r,i,s,a){super(e,n,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ps("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ti._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ti._jsonSchemaVersion="firestore/documentSnapshot/1.0",ti._jsonSchema={type:Fe("string",ti._jsonSchemaVersion),bundleSource:Fe("string","DocumentSnapshot"),bundleName:Fe("string"),bundle:Fe("string")};class vl extends ti{data(e={}){return super.data(e)}}class Ji{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new co(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new vl(this._firestore,this._userDataWriter,r.key,r,new co(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const d=new vl(i._firestore,i._userDataWriter,c.doc.key,c.doc,new co(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:d,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const d=new vl(i._firestore,i._userDataWriter,c.doc.key,c.doc,new co(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,p=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:WR(c.type),doc:d,oldIndex:h,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ji._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ff.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function WR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:t})}}/**
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
 */Ji._jsonSchemaVersion="firestore/querySnapshot/1.0",Ji._jsonSchema={type:Fe("string",Ji._jsonSchemaVersion),bundleSource:Fe("string","QuerySnapshot"),bundleName:Fe("string"),bundle:Fe("string")};/**
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
 */function qR(t){t=Qt(t,je);const e=Qt(t.firestore,di),n=lp(e);return SR(n,t._key).then(r=>Xw(e,t,r))}function GR(t,e,n){t=Qt(t,je);const r=Qt(t.firestore,di),i=Yw(t.converter,e,n),s=Hc(r);return yp(r,[zw(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Yt.none())])}function HR(t,e,n,...r){t=Qt(t,je);const i=Qt(t.firestore,di),s=Hc(i);let a;return a=typeof(e=Re(e))=="string"||e instanceof cp?LR(s,"updateDoc",t._key,e,n,r):VR(s,"updateDoc",t._key,e),yp(i,[a.toMutation(t._key,Yt.exists(!0))])}function QR(t,e){const n=Qt(t.firestore,di),r=qc(t),i=Yw(t.converter,e),s=Hc(t.firestore);return yp(n,[zw(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Yt.exists(!1))]).then(()=>r)}function YR(t,...e){var h,p,g;t=Re(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||ov(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(ov(e[r])){const _=e[r];e[r]=(h=_.next)==null?void 0:h.bind(_),e[r+1]=(p=_.error)==null?void 0:p.bind(_),e[r+2]=(g=_.complete)==null?void 0:g.bind(_)}let s,a,c;if(t instanceof je)a=Qt(t.firestore,di),c=Oc(t._key.path),s={next:_=>{e[r]&&e[r](Xw(a,t,_))},error:e[r+1],complete:e[r+2]};else{const _=Qt(t,Ei);a=Qt(_.firestore,di),c=_._query;const N=new qw(a);s={next:R=>{e[r]&&e[r](new Ji(a,N,_,R))},error:e[r+1],complete:e[r+2]},KR(t._query)}const d=lp(a);return kR(d,c,i,s)}function yp(t,e){const n=lp(t);return xR(n,e)}function Xw(t,e,n){const r=n.docs.get(e._key),i=new qw(t);return new ti(t,i,e._key,r,new co(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){SC(_s),Tn(new Zt("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),c=new di(new CC(r.getProvider("auth-internal")),new bC(a,r.getProvider("app-check-internal")),HC(a,i),a);return s={useFetchStreams:n,...s},c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Mt(iv,sv,e),Mt(iv,sv,"esm2020")})();const Jw="@firebase/installations",vp="0.6.22";/**
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
 */const Zw=1e4,e1=`w:${vp}`,t1="FIS_v2",XR="https://firebaseinstallations.googleapis.com/v1",JR=60*60*1e3,ZR="installations",eb="Installations";/**
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
 */const tb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},hi=new vi(ZR,eb,tb);function n1(t){return t instanceof nn&&t.code.includes("request-failed")}/**
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
 */function r1({projectId:t}){return`${XR}/projects/${t}/installations`}function i1(t){return{token:t.token,requestStatus:2,expiresIn:rb(t.expiresIn),creationTime:Date.now()}}async function s1(t,e){const r=(await e.json()).error;return hi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function o1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function nb(t,{refreshToken:e}){const n=o1(t);return n.append("Authorization",ib(e)),n}async function a1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function rb(t){return Number(t.replace("s","000"))}function ib(t){return`${t1} ${t}`}/**
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
 */async function sb({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=r1(t),i=o1(t),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={fid:n,authVersion:t1,appId:t.appId,sdkVersion:e1},c={method:"POST",headers:i,body:JSON.stringify(a)},d=await a1(()=>fetch(r,c));if(d.ok){const h=await d.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:i1(h.authToken)}}else throw await s1("Create Installation",d)}/**
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
 */function l1(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function ob(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ab=/^[cdef][\w-]{21}$/,Oh="";function lb(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=cb(t);return ab.test(n)?n:Oh}catch{return Oh}}function cb(t){return ob(t).substr(0,22)}/**
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
 */function Yc(t){return`${t.appName}!${t.appId}`}/**
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
 */const c1=new Map;function u1(t,e){const n=Yc(t);d1(n,e),ub(n,e)}function d1(t,e){const n=c1.get(t);if(n)for(const r of n)r(e)}function ub(t,e){const n=db();n&&n.postMessage({key:t,fid:e}),hb()}let Jr=null;function db(){return!Jr&&"BroadcastChannel"in self&&(Jr=new BroadcastChannel("[Firebase] FID Change"),Jr.onmessage=t=>{d1(t.data.key,t.data.fid)}),Jr}function hb(){c1.size===0&&Jr&&(Jr.close(),Jr=null)}/**
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
 */const fb="firebase-installations-database",pb=1,fi="firebase-installations-store";let fd=null;function _p(){return fd||(fd=d0(fb,pb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fi)}}})),fd}async function sc(t,e){const n=Yc(t),i=(await _p()).transaction(fi,"readwrite"),s=i.objectStore(fi),a=await s.get(n);return await s.put(e,n),await i.done,(!a||a.fid!==e.fid)&&u1(t,e.fid),e}async function h1(t){const e=Yc(t),r=(await _p()).transaction(fi,"readwrite");await r.objectStore(fi).delete(e),await r.done}async function Xc(t,e){const n=Yc(t),i=(await _p()).transaction(fi,"readwrite"),s=i.objectStore(fi),a=await s.get(n),c=e(a);return c===void 0?await s.delete(n):await s.put(c,n),await i.done,c&&(!a||a.fid!==c.fid)&&u1(t,c.fid),c}/**
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
 */async function Tp(t){let e;const n=await Xc(t.appConfig,r=>{const i=mb(r),s=gb(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Oh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function mb(t){const e=t||{fid:lb(),registrationStatus:0};return f1(e)}function gb(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(hi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=yb(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:vb(t)}:{installationEntry:e}}async function yb(t,e){try{const n=await sb(t,e);return sc(t.appConfig,n)}catch(n){throw n1(n)&&n.customData.serverCode===409?await h1(t.appConfig):await sc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function vb(t){let e=await cv(t.appConfig);for(;e.registrationStatus===1;)await l1(100),e=await cv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Tp(t);return r||n}return e}function cv(t){return Xc(t,e=>{if(!e)throw hi.create("installation-not-found");return f1(e)})}function f1(t){return _b(t)?{fid:t.fid,registrationStatus:0}:t}function _b(t){return t.registrationStatus===1&&t.registrationTime+Zw<Date.now()}/**
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
 */async function Tb({appConfig:t,heartbeatServiceProvider:e},n){const r=wb(t,n),i=nb(t,n),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={installation:{sdkVersion:e1,appId:t.appId}},c={method:"POST",headers:i,body:JSON.stringify(a)},d=await a1(()=>fetch(r,c));if(d.ok){const h=await d.json();return i1(h)}else throw await s1("Generate Auth Token",d)}function wb(t,{fid:e}){return`${r1(t)}/${e}/authTokens:generate`}/**
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
 */async function wp(t,e=!1){let n;const r=await Xc(t.appConfig,s=>{if(!p1(s))throw hi.create("not-registered");const a=s.authToken;if(!e&&kb(a))return s;if(a.requestStatus===1)return n=Eb(t,e),s;{if(!navigator.onLine)throw hi.create("app-offline");const c=xb(s);return n=Ib(t,c),c}});return n?await n:r.authToken}async function Eb(t,e){let n=await uv(t.appConfig);for(;n.authToken.requestStatus===1;)await l1(100),n=await uv(t.appConfig);const r=n.authToken;return r.requestStatus===0?wp(t,e):r}function uv(t){return Xc(t,e=>{if(!p1(e))throw hi.create("not-registered");const n=e.authToken;return Ab(n)?{...e,authToken:{requestStatus:0}}:e})}async function Ib(t,e){try{const n=await Tb(t,e),r={...e,authToken:n};return await sc(t.appConfig,r),n}catch(n){if(n1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await h1(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await sc(t.appConfig,r)}throw n}}function p1(t){return t!==void 0&&t.registrationStatus===2}function kb(t){return t.requestStatus===2&&!Sb(t)}function Sb(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+JR}function xb(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function Ab(t){return t.requestStatus===1&&t.requestTime+Zw<Date.now()}/**
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
 */async function Cb(t){const e=t,{installationEntry:n,registrationPromise:r}=await Tp(e);return r?r.catch(console.error):wp(e).catch(console.error),n.fid}/**
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
 */async function Nb(t,e=!1){const n=t;return await Rb(n),(await wp(n,e)).token}async function Rb(t){const{registrationPromise:e}=await Tp(t);e&&await e}/**
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
 */function bb(t){if(!t||!t.options)throw pd("App Configuration");if(!t.name)throw pd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw pd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function pd(t){return hi.create("missing-app-config-values",{valueName:t})}/**
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
 */const m1="installations",Pb="installations-internal",jb=t=>{const e=t.getProvider("app").getImmediate(),n=bb(e),r=_i(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Db=t=>{const e=t.getProvider("app").getImmediate(),n=_i(e,m1).getImmediate();return{getId:()=>Cb(n),getToken:i=>Nb(n,i)}};function Vb(){Tn(new Zt(m1,jb,"PUBLIC")),Tn(new Zt(Pb,Db,"PRIVATE"))}Vb();Mt(Jw,vp);Mt(Jw,vp,"esm2020");/**
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
 */const oc="analytics",Lb="firebase_id",Ob="origin",Mb=60*1e3,Fb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ep="https://www.googletagmanager.com/gtag/js";/**
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
 */const ft=new bc("@firebase/analytics");/**
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
 */const Ub={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ct=new vi("analytics","Analytics",Ub);/**
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
 */function zb(t){if(!t.startsWith(Ep)){const e=Ct.create("invalid-gtag-resource",{gtagURL:t});return ft.warn(e.message),""}return t}function g1(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Kb(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Bb(t,e){const n=Kb("firebase-js-sdk-policy",{createScriptURL:zb}),r=document.createElement("script"),i=`${Ep}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function $b(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Wb(t,e,n,r,i,s){const a=r[i];try{if(a)await e[a];else{const d=(await g1(n)).find(h=>h.measurementId===i);d&&await e[d.appId]}}catch(c){ft.error(c)}t("config",i,s)}async function qb(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const c=await g1(n);for(const d of a){const h=c.find(g=>g.measurementId===d),p=h&&e[h.appId];if(p)s.push(p);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){ft.error(s)}}function Gb(t,e,n,r){async function i(s,...a){try{if(s==="event"){const[c,d]=a;await qb(t,e,n,c,d)}else if(s==="config"){const[c,d]=a;await Wb(t,e,n,r,c,d)}else if(s==="consent"){const[c,d]=a;t("consent",c,d)}else if(s==="get"){const[c,d,h]=a;t("get",c,d,h)}else if(s==="set"){const[c]=a;t("set",c)}else t(s,...a)}catch(c){ft.error(c)}}return i}function Hb(t,e,n,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Gb(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function Qb(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ep)&&n.src.includes(t))return n;return null}/**
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
 */const Yb=30,Xb=1e3;class Jb{constructor(e={},n=Xb){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const y1=new Jb;function Zb(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function eP(t){var a;const{appId:e,apiKey:n}=t,r={method:"GET",headers:Zb(n)},i=Fb.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let c="";try{const d=await s.json();(a=d.error)!=null&&a.message&&(c=d.error.message)}catch{}throw Ct.create("config-fetch-failed",{httpStatus:s.status,responseMessage:c})}return s.json()}async function tP(t,e=y1,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ct.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ct.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new iP;return setTimeout(async()=>{c.abort()},Mb),v1({appId:r,apiKey:i,measurementId:s},a,c,e)}async function v1(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=y1){var c;const{appId:s,measurementId:a}=t;try{await nP(r,e)}catch(d){if(a)return ft.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:s,measurementId:a};throw d}try{const d=await eP(t);return i.deleteThrottleMetadata(s),d}catch(d){const h=d;if(!rP(h)){if(i.deleteThrottleMetadata(s),a)return ft.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:s,measurementId:a};throw d}const p=Number((c=h==null?void 0:h.customData)==null?void 0:c.httpStatus)===503?Zg(n,i.intervalMillis,Yb):Zg(n,i.intervalMillis),g={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return i.setThrottleMetadata(s,g),ft.debug(`Calling attemptFetch again in ${p} millis`),v1(t,g,r,i)}}function nP(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ct.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function rP(t){if(!(t instanceof nn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class iP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function sP(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,a={...r,send_to:s};t("event",n,a)}}async function oP(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
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
 */async function aP(){if(o0())try{await a0()}catch(t){return ft.warn(Ct.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ft.warn(Ct.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function lP(t,e,n,r,i,s,a){const c=tP(t);c.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&ft.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>ft.error(_)),e.push(c);const d=aP().then(_=>{if(_)return r.getId()}),[h,p]=await Promise.all([c,d]);Qb(s)||Bb(s,h.measurementId),i("js",new Date);const g=(a==null?void 0:a.config)??{};return g[Ob]="firebase",g.update=!0,p!=null&&(g[Lb]=p),i("config",h.measurementId,g),h.measurementId}/**
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
 */class cP{constructor(e){this.app=e}_delete(){return delete Zi[this.app.options.appId],Promise.resolve()}}let Zi={},dv=[];const hv={};let md="dataLayer",uP="gtag",fv,Ip,pv=!1;function dP(){const t=[];if(s0()&&t.push("This is a browser extension environment."),rA()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ct.create("invalid-analytics-context",{errorInfo:e});ft.warn(n.message)}}function hP(t,e,n){dP();const r=t.options.appId;if(!r)throw Ct.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ft.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ct.create("no-api-key");if(Zi[r]!=null)throw Ct.create("already-exists",{id:r});if(!pv){$b(md);const{wrappedGtag:s,gtagCore:a}=Hb(Zi,dv,hv,md,uP);Ip=s,fv=a,pv=!0}return Zi[r]=lP(t,dv,hv,e,fv,md,n),new cP(t)}function fP(t=Pc()){t=Re(t);const e=_i(t,oc);return e.isInitialized()?e.getImmediate():pP(t)}function pP(t,e={}){const n=_i(t,oc);if(n.isInitialized()){const i=n.getImmediate();if(xr(e,n.getOptions()))return i;throw Ct.create("already-initialized")}return n.initialize({options:e})}function mP(t,e,n){t=Re(t),oP(Ip,Zi[t.app.options.appId],e,n).catch(r=>ft.error(r))}function gP(t,e,n,r){t=Re(t),sP(Ip,Zi[t.app.options.appId],e,n,r).catch(i=>ft.error(i))}const mv="@firebase/analytics",gv="0.10.22";function yP(){Tn(new Zt(oc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return hP(r,i,n)},"PUBLIC")),Tn(new Zt("analytics-internal",t,"PRIVATE")),Mt(mv,gv),Mt(mv,gv,"esm2020");function t(e){try{const n=e.getProvider(oc).getImmediate();return{logEvent:(r,i,s)=>gP(n,r,i,s),setUserProperties:(r,i)=>mP(n,r,i)}}catch(n){throw Ct.create("interop-component-reg-failed",{reason:n})}}}yP();function _1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vP=_1,T1=new vi("auth","Firebase",_1());/**
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
 */const ac=new bc("@firebase/auth");function _P(t,...e){ac.logLevel<=he.WARN&&ac.warn(`Auth (${_s}): ${t}`,...e)}function _l(t,...e){ac.logLevel<=he.ERROR&&ac.error(`Auth (${_s}): ${t}`,...e)}/**
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
 */function tn(t,...e){throw kp(t,...e)}function vn(t,...e){return kp(t,...e)}function w1(t,e,n){const r={...vP(),[e]:n};return new vi("auth","Firebase",r).create(e,{appName:t.name})}function Dn(t){return w1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return T1.create(t,...e)}function Z(t,e,...n){if(!t)throw kp(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _l(e),new Error(e)}function Kn(t,e){t||Nn(e)}/**
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
 */function Mh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function TP(){return yv()==="http:"||yv()==="https:"}function yv(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function wP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TP()||s0()||"connection"in navigator)?navigator.onLine:!0}function EP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ma{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=Xx()||eA()}get(){return wP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Sp(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class E1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const IP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const kP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],SP=new ma(3e4,6e4);function $n(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function In(t,e,n,r,i={}){return I1(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const c=oa({key:t.config.apiKey,...a}).slice(1),d=await t._getAdditionalHeaders();d["Content-Type"]="application/json",t.languageCode&&(d["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:d,...s};return Zx()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&aa(t.emulatorConfig.host)&&(h.credentials="include"),E1.fetch()(await k1(t,t.config.apiHost,n,c),h)})}async function I1(t,e,n){t._canInitEmulator=!1;const r={...IP,...e};try{const i=new AP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Za(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[d,h]=c.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw Za(t,"credential-already-in-use",a);if(d==="EMAIL_EXISTS")throw Za(t,"email-already-in-use",a);if(d==="USER_DISABLED")throw Za(t,"user-disabled",a);const p=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw w1(t,p,h);tn(t,p)}}catch(i){if(i instanceof nn)throw i;tn(t,"network-request-failed",{message:String(i)})}}async function ga(t,e,n,r,i={}){const s=await In(t,e,n,r,i);return"mfaPendingCredential"in s&&tn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function k1(t,e,n,r){const i=`${e}${n}?${r}`,s=t,a=s.config.emulator?Sp(t.config,i):`${t.config.apiScheme}://${i}`;return kP.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function xP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class AP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vn(this.auth,"network-request-failed")),SP.get())})}}function Za(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vn(t,e,r);return i.customData._tokenResponse=n,i}function vv(t){return t!==void 0&&t.enterprise!==void 0}class CP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return xP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function NP(t,e){return In(t,"GET","/v2/recaptchaConfig",$n(t,e))}/**
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
 */async function RP(t,e){return In(t,"POST","/v1/accounts:delete",e)}async function lc(t,e){return In(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function xo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bP(t,e=!1){const n=Re(t),r=await n.getIdToken(e),i=xp(r);Z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:xo(gd(i.auth_time)),issuedAtTime:xo(gd(i.iat)),expirationTime:xo(gd(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function gd(t){return Number(t)*1e3}function xp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _l("JWT malformed, contained fewer than 3 sections"),null;try{const i=t0(n);return i?JSON.parse(i):(_l("Failed to decode base64 JWT payload"),null)}catch(i){return _l("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function _v(t){const e=xp(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ms(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nn&&PP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function PP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class jP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xo(this.lastLoginAt),this.creationTime=xo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function cc(t){var g;const e=t.auth,n=await t.getIdToken(),r=await ms(t,lc(e,{idToken:n}));Z(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(g=i.providerUserInfo)!=null&&g.length?S1(i.providerUserInfo):[],a=VP(t.providerData,s),c=t.isAnonymous,d=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=c?d:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Fh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function DP(t){const e=Re(t);await cc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function VP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function S1(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function LP(t,e){const n=await I1(t,{},async()=>{const r=oa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=await k1(t,i,"/v1/token",`key=${s}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const d={method:"POST",headers:c,body:r};return t.emulatorConfig&&aa(t.emulatorConfig.host)&&(d.credentials="include"),E1.fetch()(a,d)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function OP(t,e){return In(t,"POST","/v2/accounts:revokeToken",$n(t,e))}/**
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
 */class es{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_v(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=_v(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await LP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new es;return r&&(Z(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(Z(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(Z(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new es,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
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
 */function Zn(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new jP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ms(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bP(this,e)}reload(){return DP(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await cc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dt(this.auth.app))return Promise.reject(Dn(this.auth));const e=await this.getIdToken();return await ms(this,RP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,a=n.photoURL??void 0,c=n.tenantId??void 0,d=n._redirectEventId??void 0,h=n.createdAt??void 0,p=n.lastLoginAt??void 0,{uid:g,emailVerified:_,isAnonymous:N,providerData:R,stsTokenManager:P}=n;Z(g&&P,e,"internal-error");const V=es.fromJSON(this.name,P);Z(typeof g=="string",e,"internal-error"),Zn(r,e.name),Zn(i,e.name),Z(typeof _=="boolean",e,"internal-error"),Z(typeof N=="boolean",e,"internal-error"),Zn(s,e.name),Zn(a,e.name),Zn(c,e.name),Zn(d,e.name),Zn(h,e.name),Zn(p,e.name);const x=new qt({uid:g,auth:e,email:i,emailVerified:_,displayName:r,isAnonymous:N,photoURL:a,phoneNumber:s,tenantId:c,stsTokenManager:V,createdAt:h,lastLoginAt:p});return R&&Array.isArray(R)&&(x.providerData=R.map(k=>({...k}))),d&&(x._redirectEventId=d),x}static async _fromIdTokenResponse(e,n,r=!1){const i=new es;i.updateFromServerResponse(n);const s=new qt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await cc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?S1(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new es;c.updateFromIdToken(r);const d=new qt({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Fh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(d,h),d}}/**
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
 */const Tv=new Map;function Rn(t){Kn(t instanceof Function,"Expected a class definition");let e=Tv.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tv.set(t,e),e)}/**
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
 */class x1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}x1.type="NONE";const wv=x1;/**
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
 */function Tl(t,e,n){return`firebase:${t}:${e}:${n}`}class ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Tl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Tl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await lc(this.auth,{idToken:e}).catch(()=>{});return n?qt._fromGetAccountInfoResponse(this.auth,n,e):null}return qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ts(Rn(wv),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Rn(wv);const a=Tl(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const p=await h._get(a);if(p){let g;if(typeof p=="string"){const _=await lc(e,{idToken:p}).catch(()=>{});if(!_)break;g=await qt._fromGetAccountInfoResponse(e,_,p)}else g=qt._fromJSON(e,p);h!==s&&(c=g),s=h;break}}catch{}const d=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!d.length?new ts(s,e,r):(s=d[0],c&&await s._set(a,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new ts(s,e,r))}}/**
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
 */function Ev(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(R1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(A1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(P1(e))return"Blackberry";if(j1(e))return"Webos";if(C1(e))return"Safari";if((e.includes("chrome/")||N1(e))&&!e.includes("edge/"))return"Chrome";if(b1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function A1(t=lt()){return/firefox\//i.test(t)}function C1(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function N1(t=lt()){return/crios\//i.test(t)}function R1(t=lt()){return/iemobile/i.test(t)}function b1(t=lt()){return/android/i.test(t)}function P1(t=lt()){return/blackberry/i.test(t)}function j1(t=lt()){return/webos/i.test(t)}function Ap(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function MP(t=lt()){var e;return Ap(t)&&!!((e=window.navigator)!=null&&e.standalone)}function FP(){return tA()&&document.documentMode===10}function D1(t=lt()){return Ap(t)||b1(t)||j1(t)||P1(t)||/windows phone/i.test(t)||R1(t)}/**
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
 */function V1(t,e=[]){let n;switch(t){case"Browser":n=Ev(lt());break;case"Worker":n=`${Ev(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_s}/${r}`}/**
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
 */class UP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,c)=>{try{const d=e(s);a(d)}catch(d){c(d)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function zP(t,e={}){return In(t,"GET","/v2/passwordPolicy",$n(t,e))}/**
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
 */const KP=6;class BP{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??KP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class $P{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Iv(this),this.idTokenSubscription=new Iv(this),this.beforeStateQueue=new UP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=T1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ts.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await lc(this,{idToken:e}),r=await qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Dt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(s=this.redirectUser)==null?void 0:s._redirectEventId,c=r==null?void 0:r._redirectEventId,d=await this.tryRedirectSignIn(e);(!a||a===c)&&(d!=null&&d.user)&&(r=d.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await cc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=EP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dt(this.app))return Promise.reject(Dn(this));const n=e?Re(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dt(this.app)?Promise.reject(Dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dt(this.app)?Promise.reject(Dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zP(this),n=new BP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new vi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await OP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await ts.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const d=e.addObserver(n,r,i);return()=>{a=!0,d()}}else{const d=e.addObserver(n);return()=>{a=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=V1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&_P(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Fr(t){return Re(t)}class Iv{constructor(e){this.auth=e,this.observer=null,this.addObserver=lA(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Jc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function WP(t){Jc=t}function L1(t){return Jc.loadJS(t)}function qP(){return Jc.recaptchaEnterpriseScript}function GP(){return Jc.gapiScript}function HP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class QP{constructor(){this.enterprise=new YP}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class YP{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const XP="recaptcha-enterprise",O1="NO_RECAPTCHA";class JP{constructor(e){this.type=XP,this.auth=Fr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{NP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new CP(d);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(d=>{c(d)})})}function i(s,a,c){const d=window.grecaptcha;vv(d)?d.enterprise.ready(()=>{d.enterprise.execute(s,{action:e}).then(h=>{a(h)}).catch(()=>{a(O1)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new QP().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(c=>{if(!n&&vv(window.grecaptcha))i(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let d=qP();d.length!==0&&(d+=c),L1(d).then(()=>{i(c,s,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function kv(t,e,n,r=!1,i=!1){const s=new JP(t);let a;if(i)a=O1;else try{a=await s.verify(n)}catch{a=await s.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const d=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:d,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const d=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function uc(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await kv(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await kv(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(a)})}/**
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
 */function ZP(t,e){const n=_i(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(xr(s,e??{}))return i;tn(i,"already-initialized")}return n.initialize({options:e})}function ej(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function tj(t,e,n){const r=Fr(t);Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=M1(e),{host:a,port:c}=nj(e),d=c===null?"":`:${c}`,h={url:`${s}//${a}${d}/`},p=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Z(xr(h,r.config.emulator)&&xr(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,aa(a)?l0(`${s}//${a}${d}`):rj()}function M1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function nj(t){const e=M1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Sv(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Sv(a)}}}function Sv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function rj(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Cp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}async function ij(t,e){return In(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function sj(t,e){return ga(t,"POST","/v1/accounts:signInWithPassword",$n(t,e))}async function oj(t,e){return In(t,"POST","/v1/accounts:sendOobCode",$n(t,e))}async function aj(t,e){return oj(t,e)}/**
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
 */async function lj(t,e){return ga(t,"POST","/v1/accounts:signInWithEmailLink",$n(t,e))}async function cj(t,e){return ga(t,"POST","/v1/accounts:signInWithEmailLink",$n(t,e))}/**
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
 */class ea extends Cp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ea(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ea(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uc(e,n,"signInWithPassword",sj);case"emailLink":return lj(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uc(e,r,"signUpPassword",ij);case"emailLink":return cj(e,{idToken:n,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ns(t,e){return ga(t,"POST","/v1/accounts:signInWithIdp",$n(t,e))}/**
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
 */const uj="http://localhost";class pi extends Cp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new pi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const a=new pi(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ns(e,n)}buildRequest(){const e={requestUri:uj,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oa(n)}return e}}/**
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
 */function dj(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hj(t){const e=io(so(t)).link,n=e?io(so(e)).deep_link_id:null,r=io(so(t)).deep_link_id;return(r?io(so(r)).link:null)||r||n||e||t}class Np{constructor(e){const n=io(so(e)),r=n.apiKey??null,i=n.oobCode??null,s=dj(n.mode??null);Z(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=hj(e);try{return new Np(n)}catch{return null}}}/**
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
 */class Ss{constructor(){this.providerId=Ss.PROVIDER_ID}static credential(e,n){return ea._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Np.parseLink(n);return Z(r,"argument-error"),ea._fromEmailAndCode(e,r.code,r.tenantId)}}Ss.PROVIDER_ID="password";Ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class F1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ya extends F1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class sr extends ya{constructor(){super("facebook.com")}static credential(e){return pi._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
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
 */class or extends ya{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return pi._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return or.credential(n,r)}catch{return null}}}or.GOOGLE_SIGN_IN_METHOD="google.com";or.PROVIDER_ID="google.com";/**
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
 */class ar extends ya{constructor(){super("github.com")}static credential(e){return pi._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
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
 */class lr extends ya{constructor(){super("twitter.com")}static credential(e,n){return pi._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
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
 */async function fj(t,e){return ga(t,"POST","/v1/accounts:signUp",$n(t,e))}/**
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
 */class mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await qt._fromIdTokenResponse(e,r,i),a=xv(r);return new mi({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xv(r);return new mi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class dc extends nn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,dc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new dc(e,n,r,i)}}function U1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?dc._fromErrorAndOperation(t,s,e,r):s})}async function pj(t,e,n=!1){const r=await ms(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return mi._forOperation(t,"link",r)}/**
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
 */async function mj(t,e,n=!1){const{auth:r}=t;if(Dt(r.app))return Promise.reject(Dn(r));const i="reauthenticate";try{const s=await ms(t,U1(r,i,e,t),n);Z(s.idToken,r,"internal-error");const a=xp(s.idToken);Z(a,r,"internal-error");const{sub:c}=a;return Z(t.uid===c,r,"user-mismatch"),mi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),s}}/**
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
 */async function z1(t,e,n=!1){if(Dt(t.app))return Promise.reject(Dn(t));const r="signIn",i=await U1(t,r,e),s=await mi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function gj(t,e){return z1(Fr(t),e)}/**
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
 */async function K1(t){const e=Fr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function yj(t,e,n){const r=Fr(t);await uc(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",aj)}async function vj(t,e,n){if(Dt(t.app))return Promise.reject(Dn(t));const r=Fr(t),a=await uc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",fj).catch(d=>{throw d.code==="auth/password-does-not-meet-requirements"&&K1(t),d}),c=await mi._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function _j(t,e,n){return Dt(t.app)?Promise.reject(Dn(t)):gj(Re(t),Ss.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&K1(t),r})}/**
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
 */async function Tj(t,e){return In(t,"POST","/v1/accounts:update",e)}/**
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
 */async function wj(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Re(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},a=await ms(r,Tj(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:d})=>d==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function Ej(t,e,n,r){return Re(t).onIdTokenChanged(e,n,r)}function Ij(t,e,n){return Re(t).beforeAuthStateChanged(e,n)}function kj(t,e,n,r){return Re(t).onAuthStateChanged(e,n,r)}function Sj(t){return Re(t).signOut()}const hc="__sak";/**
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
 */class B1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hc,"1"),this.storage.removeItem(hc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const xj=1e3,Aj=10;class $1 extends B1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=D1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,d)=>{this.notifyListeners(a,d)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);FP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Aj):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xj)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$1.type="LOCAL";const Cj=$1;/**
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
 */class W1 extends B1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}W1.type="SESSION";const q1=W1;/**
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
 */function Nj(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Zc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Zc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async h=>h(n.origin,s)),d=await Nj(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:d})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zc.receivers=[];/**
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
 */function Rp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Rj{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,d)=>{const h=Rp("",20);i.port1.start();const p=setTimeout(()=>{d(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){const _=g;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(_.data.response);break;default:clearTimeout(p),clearTimeout(s),d(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function _n(){return window}function bj(t){_n().location.href=t}/**
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
 */function G1(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function Pj(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jj(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Dj(){return G1()?self:null}/**
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
 */const H1="firebaseLocalStorageDb",Vj=1,fc="firebaseLocalStorage",Q1="fbase_key";class va{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function eu(t,e){return t.transaction([fc],e?"readwrite":"readonly").objectStore(fc)}function Lj(){const t=indexedDB.deleteDatabase(H1);return new va(t).toPromise()}function Uh(){const t=indexedDB.open(H1,Vj);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fc,{keyPath:Q1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fc)?e(r):(r.close(),await Lj(),e(await Uh()))})})}async function Av(t,e,n){const r=eu(t,!0).put({[Q1]:e,value:n});return new va(r).toPromise()}async function Oj(t,e){const n=eu(t,!1).get(e),r=await new va(n).toPromise();return r===void 0?null:r.value}function Cv(t,e){const n=eu(t,!0).delete(e);return new va(n).toPromise()}const Mj=800,Fj=3;class Y1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Fj)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return G1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zc._getInstance(Dj()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Pj(),!this.activeServiceWorker)return;this.sender=new Rj(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jj()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uh();return await Av(e,hc,"1"),await Cv(e,hc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Av(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Oj(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=eu(i,!1).getAll();return new va(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mj)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Y1.type="LOCAL";const Uj=Y1;new ma(3e4,6e4);/**
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
 */function zj(t,e){return e?Rn(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class bp extends Cp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Kj(t){return z1(t.auth,new bp(t),t.bypassAuthState)}function Bj(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),mj(n,new bp(t),t.bypassAuthState)}async function $j(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),pj(n,new bp(t),t.bypassAuthState)}/**
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
 */class X1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}const d={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(d))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Kj;case"linkViaPopup":case"linkViaRedirect":return $j;case"reauthViaPopup":case"reauthViaRedirect":return Bj;default:tn(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Wj=new ma(2e3,1e4);class Bi extends X1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Bi.currentPopupAction&&Bi.currentPopupAction.cancel(),Bi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=Rp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Wj.get())};e()}}Bi.currentPopupAction=null;/**
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
 */const qj="pendingRedirect",wl=new Map;class Gj extends X1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wl.get(this.auth._key());if(!e){try{const r=await Hj(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wl.set(this.auth._key(),e)}return this.bypassAuthState||wl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hj(t,e){const n=Xj(e),r=Yj(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Qj(t,e){wl.set(t._key(),e)}function Yj(t){return Rn(t._redirectPersistence)}function Xj(t){return Tl(qj,t.config.apiKey,t.name)}async function Jj(t,e,n=!1){if(Dt(t.app))return Promise.reject(Dn(t));const r=Fr(t),i=zj(r,e),a=await new Gj(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Zj=10*60*1e3;class eD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!J1(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(vn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Zj&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nv(e))}saveEventToCache(e){this.cachedEventUids.add(Nv(e)),this.lastProcessedEventTime=Date.now()}}function Nv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function J1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return J1(t);default:return!1}}/**
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
 */async function nD(t,e={}){return In(t,"GET","/v1/projects",e)}/**
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
 */const rD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iD=/^https?/;async function sD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nD(t);for(const n of e)try{if(oD(n))return}catch{}tn(t,"unauthorized-domain")}function oD(t){const e=Mh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!iD.test(n))return!1;if(rD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const aD=new ma(3e4,6e4);function Rv(){const t=_n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lD(t){return new Promise((e,n)=>{var i,s,a;function r(){Rv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rv(),n(vn(t,"network-request-failed"))},timeout:aD.get()})}if((s=(i=_n().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((a=_n().gapi)!=null&&a.load)r();else{const c=HP("iframefcb");return _n()[c]=()=>{gapi.load?r():n(vn(t,"network-request-failed"))},L1(`${GP()}?onload=${c}`).catch(d=>n(d))}}).catch(e=>{throw El=null,e})}let El=null;function cD(t){return El=El||lD(t),El}/**
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
 */const uD=new ma(5e3,15e3),dD="__/auth/iframe",hD="emulator/auth/iframe",fD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mD(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sp(e,hD):`https://${t.config.authDomain}/${dD}`,r={apiKey:e.apiKey,appName:t.name,v:_s},i=pD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${oa(r).slice(1)}`}async function gD(t){const e=await cD(t),n=_n().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:mD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=vn(t,"network-request-failed"),c=_n().setTimeout(()=>{s(a)},uD.get());function d(){_n().clearTimeout(c),i(r)}r.ping(d).then(d,()=>{s(a)})}))}/**
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
 */const yD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vD=500,_D=600,TD="_blank",wD="http://localhost";class bv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ED(t,e,n,r=vD,i=_D){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const d={...yD,width:r.toString(),height:i.toString(),top:s,left:a},h=lt().toLowerCase();n&&(c=N1(h)?TD:n),A1(h)&&(e=e||wD,d.scrollbars="yes");const p=Object.entries(d).reduce((_,[N,R])=>`${_}${N}=${R},`,"");if(MP(h)&&c!=="_self")return ID(e||"",c),new bv(null);const g=window.open(e||"",c,p);Z(g,t,"popup-blocked");try{g.focus()}catch{}return new bv(g)}function ID(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const kD="__/auth/handler",SD="emulator/auth/handler",xD=encodeURIComponent("fac");async function Pv(t,e,n,r,i,s){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_s,eventId:i};if(e instanceof F1){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",aA(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))a[p]=g}if(e instanceof ya){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(a.scopes=p.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const d=await t._getAppCheckToken(),h=d?`#${xD}=${encodeURIComponent(d)}`:"";return`${AD(t)}?${oa(c).slice(1)}${h}`}function AD({config:t}){return t.emulator?Sp(t,SD):`https://${t.authDomain}/${kD}`}/**
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
 */const yd="webStorageSupport";class CD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=q1,this._completeRedirectFn=Jj,this._overrideRedirectResult=Qj}async _openPopup(e,n,r,i){var a;Kn((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const s=await Pv(e,n,r,Mh(),i);return ED(e,s,Rp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Pv(e,n,r,Mh(),i);return bj(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gD(e),r=new eD(e);return n.register("authEvent",i=>(Z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(yd,{type:yd},i=>{var a;const s=(a=i==null?void 0:i[0])==null?void 0:a[yd];s!==void 0&&n(!!s),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return D1()||C1()||Ap()}}const ND=CD;var jv="@firebase/auth",Dv="1.13.1";/**
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
 */class RD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function bD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function PD(t){Tn(new Zt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;Z(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:V1(t)},h=new $P(r,i,s,d);return ej(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Tn(new Zt("auth-internal",e=>{const n=Fr(e.getProvider("auth").getImmediate());return(r=>new RD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(jv,Dv,bD(t)),Mt(jv,Dv,"esm2020")}/**
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
 */const jD=5*60,DD=i0("authIdTokenMaxAge")||jD;let Vv=null;const VD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>DD)return;const i=n==null?void 0:n.token;Vv!==i&&(Vv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function LD(t=Pc()){const e=_i(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ZP(t,{popupRedirectResolver:ND,persistence:[Uj,Cj,q1]}),r=i0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=VD(s.toString());Ij(n,a,()=>a(n.currentUser)),Ej(n,c=>a(c))}}const i=n0("auth");return i&&tj(n,`http://${i}`),n}function OD(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}WP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",OD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});PD("Browser");const Z1={apiKey:"AIzaSyBOKhMuNNI0iH54V7XhUnBiFLbMsWl38nw",authDomain:"aue-lms.firebaseapp.com",projectId:"aue-lms",storageBucket:"aue-lms.firebasestorage.app",messagingSenderId:"785225731833",appId:"1:785225731833:web:32e1f8d806797409dc9c28",measurementId:"G-JVXJZ1SYTS"},MD=t=>!t||t.startsWith("YOUR_")||t==="",Pp=!Object.values(Z1).some(MD);let ni=null,el=null,bn=null,FD=null;if(Pp)try{el=hC().length===0?h0(Z1):Pc(),ni=RR(el),bn=LD(el),typeof window<"u"&&(FD=fP(el)),console.log("⚡ [Firebase] Firebase, Firestore, Auth ve Analytics başarıyla başlatıldı.")}catch(t){console.warn("⚠️ [Firebase] Firebase başlatılırken hata oluştu, Yerel Mod aktif:",t)}else console.log("ℹ️ [Firebase] Firebase yapılandırılmadı. Yerel Modda çalışılıyor.");const hn=Pp&&ni!==null,vd=Pp&&bn!==null,_d=t=>({"auth/email-already-in-use":"Bu e-posta adresi zaten kullanımda. Giriş yapmayı deneyin.","auth/invalid-email":"Geçersiz e-posta adresi. Lütfen kontrol edin.","auth/weak-password":"Şifre çok zayıf. En az 6 karakter kullanın.","auth/user-not-found":"Bu e-posta ile kayıtlı bir hesap bulunamadı.","auth/wrong-password":"Hatalı şifre. Lütfen tekrar deneyin.","auth/invalid-credential":"E-posta veya şifre hatalı. Lütfen kontrol edin.","auth/too-many-requests":"Çok fazla başarısız deneme. Lütfen bir süre bekleyin.","auth/network-request-failed":"Bağlantı hatası. İnternet bağlantınızı kontrol edin.","auth/operation-not-allowed":"Bu giriş yöntemi etkin değil. Yöneticinize başvurun.","auth/requires-recent-login":"Bu işlem için yeniden giriş yapmanız gerekiyor."})[t]||"Bir hata oluştu. Lütfen tekrar deneyin.",UD=async t=>{if(hn)try{const n=qc(ni,"users",t),r=await qR(n);if(r.exists()){const i=r.data();return localStorage.setItem(`playerData_${t}`,JSON.stringify(i)),i}}catch(n){console.error("❌ [Firebase] Firestore'dan veri yüklenirken hata oluştu. Yerel yedek kullanılıyor:",n)}const e=localStorage.getItem(`playerData_${t}`);if(e)try{return JSON.parse(e)}catch(n){return console.error("❌ [LocalData] Yerel veri parse hatası:",n),null}return null},Il=async(t,e)=>{if(localStorage.setItem(`playerData_${t}`,JSON.stringify(e)),hn)try{const n=qc(ni,"users",t);return await GR(n,e,{merge:!0}),!0}catch(n){throw console.error("❌ [Firebase] Firestore veri kaydetme hatası:",n),n}return!1},zD=({onLoginSuccess:t,INITIAL_PLAYER_DATA:e})=>{const[n,r]=H.useState("login"),[i,s]=H.useState(""),[a,c]=H.useState(""),[d,h]=H.useState(!1),[p,g]=H.useState(""),[_,N]=H.useState(""),[R,P]=H.useState(""),[V,x]=H.useState(""),[k,b]=H.useState(!1),[j,A]=H.useState(!1),[F,y]=H.useState("steve"),[v,I]=H.useState(""),[E,S]=H.useState(!1),[C,w]=H.useState(!1),[B,K]=H.useState(""),[Y,te]=H.useState(""),z=jn.filter(oe=>oe.unlockLevel<=0),G=()=>{K(""),te(""),c(""),P(""),x(""),h(!1),b(!1),A(!1),S(!1)},J=async oe=>{if(oe.preventDefault(),K(""),!i.trim()){K("Lütfen e-posta adresinizi girin.");return}if(!a){K("Lütfen şifrenizi girin.");return}w(!0);try{if(vd){const me=await _j(bn,i.trim(),a);t(me.user.uid,null)}else K("Firebase Authentication yapılandırılmamış. Lütfen yöneticinizle iletişime geçin.")}catch(me){K(_d(me.code))}finally{w(!1)}},re=async oe=>{if(oe.preventDefault(),K(""),!p.trim()){K("Lütfen e-posta adresinizi girin.");return}if(!_.trim()){K("Lütfen adınızı ve soyadınızı girin.");return}if(_.trim().length<2){K("Ad soyad en az 2 karakter olmalıdır.");return}if(!R){K("Lütfen bir şifre belirleyin.");return}if(R.length<6){K("Şifre en az 6 karakter olmalıdır.");return}if(R!==V){K("Şifreler eşleşmiyor! Lütfen kontrol edin.");return}w(!0);try{if(vd){const me=await vj(bn,p.trim(),R);await wj(me.user,{displayName:_.trim()});const rn={...e,displayName:_.trim(),avatarId:F};await Il(me.user.uid,rn),t(me.user.uid,rn)}else K("Firebase Authentication yapılandırılmamış. Lütfen yöneticinizle iletişime geçin.")}catch(me){K(_d(me.code))}finally{w(!1)}},se=async oe=>{if(oe.preventDefault(),K(""),te(""),!v.trim()){K("Lütfen e-posta adresinizi girin.");return}w(!0);try{vd?(await yj(bn,v.trim()),S(!0),te(`Şifre sıfırlama bağlantısı ${v.trim()} adresine gönderildi. Gelen kutunuzu kontrol edin.`)):K("Firebase Authentication yapılandırılmamış.")}catch(me){K(_d(me.code))}finally{w(!1)}};return u.jsxs("div",{className:"login-container",children:[u.jsx("div",{className:"login-glow-bg"}),u.jsxs("div",{className:"login-card",children:[u.jsxs("div",{className:"login-header",children:[u.jsx("div",{className:"pulse-circle-small",children:u.jsx(Lf,{className:"login-zap-small",size:28})}),u.jsx("h1",{className:"login-title",children:"ROBOCRAFT"}),u.jsx("p",{className:"login-subtitle",children:"LMS & Adventure Platform"})]}),u.jsxs("div",{className:"login-tabs",children:[u.jsxs("button",{type:"button",className:`login-tab-btn ${n==="login"?"active":""}`,onClick:()=>{r("login"),G()},children:[u.jsx(GS,{size:16}),"Giriş Yap"]}),u.jsxs("button",{type:"button",className:`login-tab-btn ${n==="register"?"active":""}`,onClick:()=>{r("register"),G()},children:[u.jsx(NS,{size:16}),"Karakter Oluştur"]}),u.jsxs("button",{type:"button",className:`login-tab-btn ${n==="reset"?"active":""}`,onClick:()=>{r("reset"),G()},children:[u.jsx($S,{size:16}),"Şifremi Unuttum"]})]}),B&&u.jsxs("div",{className:"login-error-alert animate-bounce-short",children:[u.jsx(ES,{size:16,className:"flex-shrink-0"}),u.jsx("span",{children:B})]}),Y&&u.jsxs("div",{className:"login-success-alert",children:[u.jsx(zg,{size:16,className:"flex-shrink-0"}),u.jsx("span",{children:Y})]}),n==="login"&&u.jsxs("form",{className:"login-form",onSubmit:J,children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"E-POSTA ADRESİ"}),u.jsxs("div",{className:"input-wrapper",children:[u.jsx(Ju,{size:18,className:"input-icon"}),u.jsx("input",{type:"email",placeholder:"ornek@email.com",value:i,onChange:oe=>s(oe.target.value),disabled:C,className:"cyber-input",autoComplete:"email"})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"ŞİFRE"}),u.jsxs("div",{className:"input-wrapper",children:[u.jsx(To,{size:18,className:"input-icon"}),u.jsx("input",{type:d?"text":"password",placeholder:"Şifrenizi girin",value:a,onChange:oe=>c(oe.target.value),disabled:C,className:"cyber-input password-input",maxLength:60,autoComplete:"current-password"}),u.jsx("button",{type:"button",className:"password-toggle-btn",onClick:()=>h(!d),disabled:C,title:d?"Şifreyi Gizle":"Şifreyi Göster",children:d?u.jsx(Yu,{size:18}):u.jsx(Xu,{size:18})})]})]}),u.jsx("button",{type:"submit",className:"btn-cyber btn-login-submit",disabled:C,children:C?u.jsx("div",{className:"spinner-small"}):u.jsxs(u.Fragment,{children:["Sanal Ağa Bağlan ",u.jsx(Qu,{size:18})]})}),u.jsx("button",{type:"button",className:"login-forgot-link",onClick:()=>{r("reset"),G()},children:"Şifremi unuttum"})]}),n==="register"&&u.jsxs("form",{className:"login-form",onSubmit:re,children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"E-POSTA ADRESİ"}),u.jsxs("div",{className:"input-wrapper",children:[u.jsx(Ju,{size:18,className:"input-icon"}),u.jsx("input",{type:"email",placeholder:"ornek@email.com",value:p,onChange:oe=>g(oe.target.value),disabled:C,className:"cyber-input",autoComplete:"email"})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"TAM ADINIZ"}),u.jsxs("div",{className:"input-wrapper",children:[u.jsx(gx,{size:18,className:"input-icon"}),u.jsx("input",{type:"text",placeholder:"Adınız Soyadınız",value:_,onChange:oe=>N(oe.target.value),disabled:C,className:"cyber-input",maxLength:50,autoComplete:"name"})]}),u.jsx("span",{className:"input-help",children:"Profil ve skor tablosunda görünecek adınız."})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"ŞİFRE"}),u.jsxs("div",{className:"input-wrapper",children:[u.jsx(To,{size:18,className:"input-icon"}),u.jsx("input",{type:k?"text":"password",placeholder:"En az 6 karakter",value:R,onChange:oe=>P(oe.target.value),disabled:C,className:"cyber-input password-input",maxLength:60,autoComplete:"new-password"}),u.jsx("button",{type:"button",className:"password-toggle-btn",onClick:()=>b(!k),disabled:C,title:k?"Şifreyi Gizle":"Şifreyi Göster",children:k?u.jsx(Yu,{size:18}):u.jsx(Xu,{size:18})})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"ŞİFRE TEKRAR"}),u.jsxs("div",{className:"input-wrapper",children:[u.jsx(To,{size:18,className:"input-icon"}),u.jsx("input",{type:j?"text":"password",placeholder:"Şifreyi tekrar girin",value:V,onChange:oe=>x(oe.target.value),disabled:C,className:"cyber-input password-input",maxLength:60,autoComplete:"new-password"}),u.jsx("button",{type:"button",className:"password-toggle-btn",onClick:()=>A(!j),disabled:C,title:j?"Şifreyi Gizle":"Şifreyi Göster",children:j?u.jsx(Yu,{size:18}):u.jsx(Xu,{size:18})})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"BAŞLANGIÇ KARAKTERİ"}),u.jsx("div",{className:"avatar-selector",children:z.map(oe=>{const me=F===oe.id;return u.jsxs("div",{className:`avatar-option-card ${me?"selected":""}`,onClick:()=>!C&&y(oe.id),children:[u.jsx("div",{className:"avatar-option-emoji",children:oe.emoji}),u.jsxs("div",{className:"avatar-option-info",children:[u.jsx("span",{className:"avatar-option-name",children:oe.name}),me&&u.jsx(zg,{size:14,className:"avatar-option-check"})]})]},oe.id)})})]}),u.jsx("button",{type:"submit",className:"btn-cyber btn-register-submit",disabled:C,children:C?u.jsx("div",{className:"spinner-small"}):u.jsxs(u.Fragment,{children:["Karakteri Oluştur & Başlat ",u.jsx(Qu,{size:18})]})})]}),n==="reset"&&u.jsx("form",{className:"login-form",onSubmit:se,children:E?u.jsxs("div",{style:{textAlign:"center",padding:"1rem 0"},children:[u.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"📧"}),u.jsxs("p",{style:{color:"var(--text-secondary)",lineHeight:1.6},children:["Şifre sıfırlama bağlantısı ",u.jsx("strong",{children:v})," adresine gönderildi.",u.jsx("br",{}),"Gelen kutunuzu kontrol edin (spam klasörünü de)."]}),u.jsx("button",{type:"button",className:"btn-cyber btn-login-submit",style:{marginTop:"1.5rem"},onClick:()=>{r("login"),G()},children:"Giriş Sayfasına Dön"})]}):u.jsxs(u.Fragment,{children:[u.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",marginBottom:"1.5rem",lineHeight:1.6},children:"Kayıtlı e-posta adresinizi girin. Şifre sıfırlama bağlantısı göndereceğiz."}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"E-POSTA ADRESİ"}),u.jsxs("div",{className:"input-wrapper",children:[u.jsx(Ju,{size:18,className:"input-icon"}),u.jsx("input",{type:"email",placeholder:"ornek@email.com",value:v,onChange:oe=>I(oe.target.value),disabled:C,className:"cyber-input",autoComplete:"email"})]})]}),u.jsx("button",{type:"submit",className:"btn-cyber btn-login-submit",disabled:C,children:C?u.jsx("div",{className:"spinner-small"}):u.jsxs(u.Fragment,{children:["Sıfırlama Linki Gönder ",u.jsx(Qu,{size:18})]})})]})})]})]})},Zs=[{id:"mock1",username:"Demir_Kaan",avatarId:"alex",imageUrl:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=60",caption:"Devre kartımı kurdum, ilk test başarılı! Ledler harika yanıp sönüyor. 🤖🔌",likes:{student1:!0,student2:!0},createdAt:new Date(Date.now()-36e5*2).toISOString()},{id:"mock2",username:"Siber_Deniz",avatarId:"steve",imageUrl:"https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=60",caption:"RGB LED ile renk şöleni yapıyoruz, kodu yükledim! 🌈⚡ #Robocraft",likes:{student3:!0},createdAt:new Date(Date.now()-36e5*5).toISOString()},{id:"mock3",username:"Yazilimci_Arda",avatarId:"creeper",imageUrl:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=60",caption:"İlk breadboard kurulumum, kablolar biraz karışık ama çalışıyor! 🛠️💡",likes:{student1:!0,student4:!0,student5:!0},createdAt:new Date(Date.now()-36e5*24).toISOString()}],KD=({setActiveTab:t,playerData:e,currentUser:n})=>{const[r,i]=H.useState([]),[s,a]=H.useState(null),[c,d]=H.useState(null),[h,p]=H.useState(""),[g,_]=H.useState(!1),[N,R]=H.useState(!1),P=H.useRef(null);H.useEffect(()=>{if(!hn){const C=localStorage.getItem("icebreaker_uploads");C?i(JSON.parse(C)):(i(Zs),localStorage.setItem("icebreaker_uploads",JSON.stringify(Zs)));return}const E=BR(ev(ni,"icebreakers"),$R("createdAt","desc")),S=YR(E,C=>{const w=C.docs.map(B=>{const K=B.data();let Y=new Date().toISOString();return K.createdAt&&(typeof K.createdAt.toDate=="function"?Y=K.createdAt.toDate().toISOString():K.createdAt.seconds?Y=new Date(K.createdAt.seconds*1e3).toISOString():Y=new Date(K.createdAt).toISOString()),{id:B.id,...K,createdAt:Y}});i(w)},C=>{console.warn("Firestore real-time sync failed, using localStorage fallback:",C);const w=localStorage.getItem("icebreaker_uploads");i(w?JSON.parse(w):Zs)});return()=>S()},[]);const V=E=>{const S=new Date(E),w=new Date-S,B=Math.floor(w/1e3),K=Math.floor(B/60),Y=Math.floor(K/60),te=Math.floor(Y/24);return B<60?"Şimdi":K<60?`${K}d önce`:Y<24?`${Y}sa önce`:`${te}g önce`},x=E=>{const S=jn.find(C=>C.id===E);return S?S.emoji:"🤖"},k=E=>{E.preventDefault(),R(!0)},b=()=>{R(!1)},j=E=>{if(E.preventDefault(),R(!1),E.dataTransfer.files&&E.dataTransfer.files[0]){const S=E.dataTransfer.files[0];S.type.startsWith("image/")?F(S):alert("Lütfen geçerli bir görsel dosyası seçin!")}},A=E=>{E.target.files&&E.target.files[0]&&F(E.target.files[0])},F=E=>{a(E);const S=new FileReader;S.onload=C=>{d(C.target.result)},S.readAsDataURL(E)},y=E=>new Promise((S,C)=>{const w=new FileReader;w.readAsDataURL(E),w.onload=B=>{const K=new Kg;K.src=B.target.result,K.onload=()=>{const Y=document.createElement("canvas");let te=K.width,z=K.height;const G=600;te>z?te>G&&(z*=G/te,te=G):z>G&&(te*=G/z,z=G),Y.width=te,Y.height=z,Y.getContext("2d").drawImage(K,0,0,te,z);const re=Y.toDataURL("image/jpeg",.7);S(re)},K.onerror=Y=>C(Y)},w.onerror=B=>C(B)}),v=async E=>{if(E.preventDefault(),!s){alert("Lütfen paylaşmak için bir görsel seçin!");return}_(!0);try{const S=await y(s),C={username:n||"RoboGezgin",avatarId:(e==null?void 0:e.avatarId)||"steve",imageUrl:S,caption:h.trim()||"Harika bir devre kurdum! 🤖🔌",likes:{},createdAt:hn?UR():new Date().toISOString()};if(hn)await QR(ev(ni,"icebreakers"),C);else{const w=localStorage.getItem("icebreaker_uploads"),B=w?JSON.parse(w):[...Zs],Y=[{...C,id:"local_"+Date.now(),createdAt:new Date().toISOString()},...B];localStorage.setItem("icebreaker_uploads",JSON.stringify(Y)),i(Y)}a(null),d(null),p("")}catch(S){console.error("Görsel paylaşılırken hata oluştu:",S),alert("Görsel paylaşılırken bir hata oluştu. Lütfen tekrar deneyin!")}finally{_(!1)}},I=async(E,S={})=>{const C=n||"misafir",w={...S};if(w[C]?delete w[C]:w[C]=!0,hn&&!E.startsWith("local_"))try{const B=qc(ni,"icebreakers",E);await HR(B,{likes:w})}catch(B){console.error("Beğeni güncellenirken hata oluştu:",B)}else{const B=localStorage.getItem("icebreaker_uploads"),Y=(B?JSON.parse(B):[...Zs]).map(te=>te.id===E?{...te,likes:w}:te);localStorage.setItem("icebreaker_uploads",JSON.stringify(Y)),i(Y)}};return u.jsxs("div",{className:"icebreaker-container",children:[u.jsxs("header",{className:"icebreaker-header",children:[u.jsxs("button",{className:"btn-secondary btn-back",onClick:()=>t("dashboard"),children:[u.jsx(QT,{size:18})," Ana Sayfaya Dön"]}),u.jsxs("div",{className:"icebreaker-title-group",children:[u.jsx("h1",{children:"Giriş: Buz Kırma Etkinliği 🧩"}),u.jsx("p",{children:"Sınıf arkadaşlarınla tanışmak için yaptığın tasarımları, devreleri veya çalışma masanı paylaş!"})]})]}),u.jsxs("div",{className:"icebreaker-content",children:[u.jsx("section",{className:"icebreaker-upload-section",children:u.jsxs("div",{className:"card upload-card",children:[u.jsx("h3",{children:"Görsel Paylaş 📸"}),u.jsxs("form",{onSubmit:v,children:[u.jsxs("div",{className:`upload-zone ${N?"dragover":""} ${c?"has-preview":""}`,onDragOver:k,onDragLeave:b,onDrop:j,onClick:()=>{var E;return(E=P.current)==null?void 0:E.click()},children:[u.jsx("input",{type:"file",ref:P,onChange:A,accept:"image/*",style:{display:"none"}}),c?u.jsxs("div",{className:"preview-container",children:[u.jsx("img",{src:c,alt:"Önizleme",className:"upload-preview"}),u.jsxs("div",{className:"preview-overlay",children:[u.jsx(mS,{size:24}),u.jsx("span",{children:"Farklı Bir Görsel Seç"})]})]}):u.jsxs("div",{className:"upload-placeholder",children:[u.jsx(px,{size:36,className:"text-cyan animate-pulse"}),u.jsx("p",{className:"upload-title",children:"Görsel Seç veya Sürükle Bırak"}),u.jsx("p",{className:"upload-subtitle",children:"Devrenin veya projenin fotoğrafı (PNG, JPG)"})]})]}),u.jsxs("div",{className:"input-group",style:{marginTop:"1.5rem"},children:[u.jsx("label",{children:"Projen/Çalışman Hakkında Açıklama"}),u.jsx("textarea",{value:h,onChange:E=>p(E.target.value),placeholder:"Bu devrede ne yaptın? Hangi bileşenleri kullandın? Ya da sadece merhaba de! 👋",maxLength:150,rows:3}),u.jsxs("span",{className:"char-count",children:[h.length,"/150"]})]}),u.jsx("button",{type:"submit",className:"btn-primary btn-share",disabled:g||!s,style:{width:"100%",justifyContent:"center",marginTop:"1rem",padding:"1rem"},children:g?u.jsx(u.Fragment,{children:"Sıkıştırılıyor ve Yükleniyor..."}):u.jsx(u.Fragment,{children:"Paylaş ve Sınıfa Katıl 🚀"})})]})]})}),u.jsxs("section",{className:"icebreaker-gallery-section",children:[u.jsxs("div",{className:"gallery-header",children:[u.jsxs("h3",{children:["Topluluk Paylaşımları (",r.length,")"]}),u.jsx("span",{className:"gallery-status-badge",children:hn?"🟢 Bulut Bağlantısı Aktif":"🟡 Yerel Mod (Çevrimdışı)"})]}),r.length===0?u.jsxs("div",{className:"empty-gallery",children:[u.jsx(Kg,{size:48,className:"text-muted"}),u.jsx("p",{children:"Henüz kimse bir şey paylaşmadı. İlk paylaşan sen ol!"})]}):u.jsx("div",{className:"gallery-grid",children:r.map(E=>{const S=E.likes&&E.likes[n||"misafir"],C=Object.keys(E.likes||{}).length;return u.jsxs("div",{className:"gallery-card",children:[u.jsxs("div",{className:"gallery-card-header",children:[u.jsx("div",{className:"user-avatar-emoji",children:x(E.avatarId)}),u.jsxs("div",{className:"user-info",children:[u.jsx("span",{className:"username",children:E.username}),u.jsx("span",{className:"timestamp",children:V(E.createdAt)})]})]}),u.jsx("div",{className:"gallery-card-image-wrapper",children:u.jsx("img",{src:E.imageUrl,alt:"Topluluk Paylaşımı",className:"gallery-image"})}),u.jsxs("div",{className:"gallery-card-body",children:[u.jsx("p",{className:"caption",children:E.caption}),u.jsx("div",{className:"gallery-card-footer",children:u.jsxs("button",{className:`btn-like ${S?"liked":""}`,onClick:()=>I(E.id,E.likes),title:S?"Beğenmekten Vazgeç":"Beğen",children:[u.jsx(FS,{size:16,fill:S?"var(--accent-red)":"transparent"}),u.jsxs("span",{children:[C," Beğeni"]})]})})]})]},E.id)})})]})]})]})},er={xp:0,level:0,displayName:"",avatarId:"steve",inventory:[],equippedItems:{},golemEquipment:{m1:{},m2:{},m3:{}},golemVariations:{m1:"golem_m1",m2:"golem_m2",m3:"golem_m3",m4:"golem_m4"},resources:{coal:0,copper:0,gold:0,iron:0},unlockedGolems:[],energy:0,showcasePositions:{player:{x:50,y:50},m1:{x:20,y:50},m2:{x:80,y:50},m3:{x:50,y:80}},tasks:[{id:"week1",title:"1. Hafta: Temel Elektrik & Devreler",xp:150,done:!1,unlocked:!0,targetTab:"courses",progress:0,requiredProgress:100},{id:"week2",title:"2. Hafta: LED Yakıp Söndürme (Dijital Çıkış)",xp:200,done:!1,unlocked:!1,targetTab:"courses",progress:0,requiredProgress:100},{id:"week3",title:"3. Hafta: Sonsuz Döngüler (For & While)",xp:150,done:!1,unlocked:!1,targetTab:"courses",progress:0,requiredProgress:100},{id:"week4",title:"4. Hafta: Buton ile Kontrol (Dijital Giriş)",xp:250,done:!1,unlocked:!1,targetTab:"courses",progress:0,requiredProgress:100},{id:"week5",title:"5. Hafta: RGB LED ile Renk Şöleni",xp:200,done:!1,unlocked:!1,targetTab:"courses",progress:0,requiredProgress:100},{id:"week6",title:"6. Hafta: Potansiyometre (Analog Giriş)",xp:300,done:!1,unlocked:!1,targetTab:"courses",progress:0,requiredProgress:100},{id:"week7",title:"7. Hafta: LDR ile Karanlıkta Yanan Lamba",xp:300,done:!1,unlocked:!1,targetTab:"courses",progress:0,requiredProgress:100},{id:"week8",title:"8. Hafta: Buzzer ile Müzik Çalmak",xp:250,done:!1,unlocked:!1,targetTab:"courses",progress:0,requiredProgress:100},{id:"week9",title:"9. Hafta: Ultrasonik Sensör ile Mesafe Ölçümü",xp:350,done:!1,unlocked:!1,targetTab:"courses",progress:0,requiredProgress:100},{id:"week10",title:"10. Hafta: Servo Motor Kontrolü",xp:300,done:!1,unlocked:!1,targetTab:"courses",progress:0,requiredProgress:100},{id:"week11",title:"11. Hafta: LCD Ekrana Yazı Yazdırmak",xp:400,done:!1,unlocked:!1,targetTab:"courses",progress:0,requiredProgress:100},{id:"week12",title:"12. Hafta: Bluetooth ile Uzaktan Kontrol",xp:500,done:!1,unlocked:!1,targetTab:"courses",progress:0,requiredProgress:100},{id:"week13",title:"13. Hafta: Büyük Final Projesi (Robot Yapımı)",xp:1e3,done:!1,unlocked:!1,targetTab:"courses",progress:0,requiredProgress:100}]},BD=()=>{const[t,e]=H.useState(null),[n,r]=H.useState(null),[i,s]=H.useState("dashboard"),[a,c]=H.useState(!0),[d,h]=H.useState(er),[p,g]=H.useState(null),[_,N]=H.useState("week1"),[R,P]=H.useState(!0),[V,x]=H.useState(hn?"synced":"local");H.useEffect(()=>{if(!bn){P(!1);return}const w=kj(bn,async B=>{if(B){e(B.uid),r(B),P(!0);try{const K=await UD(B.uid);if(K){if(K.tasks){const Y=er.tasks.map(re=>re.id);let te=K.tasks.filter(re=>Y.includes(re.id));const z=te.findIndex(re=>re.id==="week1");z!==-1&&!te[z].unlocked&&(te[z].unlocked=!0);const G=te.map(re=>re.id);er.tasks.some(re=>!G.includes(re.id))&&(te=er.tasks.map(re=>{const se=te.find(oe=>oe.id===re.id);return se||re})),K.tasks=te}!K.displayName&&B.displayName&&(K.displayName=B.displayName),h(K)}else if(hn){const Y={...er,displayName:B.displayName||""};await Il(B.uid,Y),h(Y)}}catch(K){console.error("Uygulama yüklenirken Firebase hatası:",K),x("error")}finally{P(!1)}}else e(null),r(null),h(er),P(!1)});return()=>w()},[]),H.useEffect(()=>{if(R||!t)return;if(!hn){Il(t,d).catch(()=>{}),x("local");return}x("saving");const w=setTimeout(async()=>{try{await Il(t,d),x("synced")}catch(B){console.error("Firestore kaydetme hatası:",B),x("error")}},1500);return()=>clearTimeout(w)},[d,R,t]),H.useEffect(()=>{document.body.classList.toggle("light-mode",!a)},[a]);const k=()=>c(!a),b=(w,B)=>{h(B),e(w)},j=async()=>{if(bn)try{await Sj(bn)}catch(w){console.error("Sign-out error:",w)}e(null),r(null),h(er),s("dashboard")},A=(w,B,K={})=>{h(Y=>{const te=Y.tasks.map(se=>{if(se.id===w&&!se.done){const oe=Math.min(se.progress+B,se.requiredProgress),me=oe>=se.requiredProgress;return{...se,progress:oe,done:me,newlyDone:me,...K}}return se}),z=te.findIndex(se=>se.id===w&&se.newlyDone);let G=Y.xp,J=Y.level,re=Y.energy||0;if(z!==-1){const se=te[z];G+=se.xp,J=Math.floor(G/500),re+=50,se.newlyDone=!1,g("⚡ +50 Kazma Hakkı Kazanıldı!"),setTimeout(()=>g(null),3e3),z+1<te.length&&(te[z+1].unlocked=!0)}return{...Y,xp:G,level:J,energy:re,tasks:te}})},F=(w=1)=>{let B=!1;return h(K=>(K.energy||0)>=w?(B=!0,{...K,energy:K.energy-w}):K),B},y=(w,B,K)=>{h(Y=>({...Y,showcasePositions:{...Y.showcasePositions,[w]:{x:B,y:K}}}))},v=(w,B)=>{h(K=>({...K,resources:{...K.resources,[w]:(K.resources[w]||0)+B}}))},I=w=>{h(B=>B.unlockedGolems.includes(w)?B:{...B,unlockedGolems:[...B.unlockedGolems,w]})},E=(w,B)=>{let K=!1;return h(Y=>{if(Y.inventory.includes(w))return Y;const te=Y.resources;for(const[G,J]of Object.entries(B))if((te[G]||0)<J)return Y;K=!0;const z={...te};for(const[G,J]of Object.entries(B))z[G]-=J;return{...Y,resources:z,inventory:[...Y.inventory,w]}}),K},S=(w,B)=>{h(K=>{const te={...K.golemEquipment[w]||{}};return te[B.slot]===B.id?delete te[B.slot]:te[B.slot]=B.id,{...K,golemEquipment:{...K.golemEquipment,[w]:te}}})},C=()=>{switch(i){case"dashboard":return u.jsx(Wg,{isDarkMode:a,toggleTheme:k,playerData:d,updateShowcasePosition:y,setActiveTab:s});case"icebreaker":return u.jsx(KD,{setActiveTab:s,playerData:d,currentUser:t});case"live":return u.jsx(Cx,{});case"courses":return u.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[u.jsx(Vx,{tasks:d.tasks,updateTaskProgress:A,setActiveTab:s,setActiveVideoWeek:N}),p&&u.jsx("div",{className:"energy-toast",style:{position:"absolute",bottom:"2rem",right:"2rem",backgroundColor:"var(--accent-cyan)",color:"#000",padding:"1rem 1.5rem",borderRadius:"8px",fontWeight:"bold",boxShadow:"0 4px 15px rgba(0,0,0,0.3)",animation:"slideUp 0.5s ease-out"},children:p})]});case"video-player":return u.jsx(Fx,{tasks:d.tasks,activeVideoWeek:_,setActiveVideoWeek:N,setActiveTab:s,updateTaskProgress:A});case"adventure":return u.jsx(Lx,{tasks:d.tasks,playerData:d,collectResource:v,useEnergy:F,unlockGolem:I});case"community":return u.jsx(Nx,{isDarkMode:a,toggleTheme:k});case"profile":return u.jsx(Dx,{playerData:d,setPlayerData:h,setActiveTab:s,buyGolemItem:E,handleGolemEquip:S});case"showcase":return u.jsx(Ox,{playerData:d});default:return u.jsx(Wg,{isDarkMode:a,toggleTheme:k,playerData:d,updateShowcasePosition:y,setActiveTab:s})}};return t?R?u.jsx("div",{className:"firebase-loading-overlay",children:u.jsxs("div",{className:"loading-card",children:[u.jsx("div",{className:"pulse-circle",children:u.jsx(Lf,{className:"loading-zap",size:48})}),u.jsx("h2",{style:{fontFamily:'"Press Start 2P", cursive',fontSize:"1.2rem",color:"var(--accent-cyan)"},children:"ROBOCRAFT"}),u.jsx("p",{style:{marginTop:"1rem",color:"var(--text-secondary)"},children:"Sanal Ağa Bağlanılıyor..."}),u.jsx("div",{className:"loading-bar",children:u.jsx("div",{className:"loading-bar-fill"})})]})}):u.jsxs("div",{className:"app-container",children:[u.jsx(Tx,{activeTab:i,setActiveTab:s,playerData:d,syncStatus:V,onLogout:j}),u.jsx("main",{className:"main-content",style:{padding:i==="live"?"1.5rem":i==="video-player"?"0":"2.5rem 3rem"},children:C()})]}):u.jsx(zD,{onLoginSuccess:b,INITIAL_PLAYER_DATA:er})};Td.createRoot(document.getElementById("root")).render(u.jsx(WE.StrictMode,{children:u.jsx(BD,{})}));
