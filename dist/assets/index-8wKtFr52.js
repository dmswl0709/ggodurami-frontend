import{r as e,f as t,d as n}from"./ui-BYBmBeOn.js";import{r,a as o}from"./vendor-dQk0gtQ5.js";import{u as a,a as i,B as l,R as s,b as c}from"./router-5R3vG782.js";import{a as d}from"./utils-DOYzWOY5.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var u,p,f={exports:{}},m={};var h,x,g,b,w=(p||(p=1,f.exports=function(){if(u)return m;u=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(t,n,r){var o=null;if(void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),"key"in n)for(var a in r={},n)"key"!==a&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:e,type:t,key:o,ref:void 0!==n?n:null,props:r}}return m.Fragment=t,m.jsx=n,m.jsxs=n,m}()),f.exports),y={exports:{}},v={},k={exports:{}},S={};function j(){return x||(x=1,k.exports=(h||(h=1,function(e){function t(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function n(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],c=l+1,d=e[c];if(0>o(s,n))c<a&&0>o(d,s)?(e[r]=d,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<a&&0>o(d,n)))break e;e[r]=d,e[c]=n,r=c}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(e.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var a=performance;e.unstable_now=function(){return a.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var s=[],c=[],d=1,u=null,p=3,f=!1,m=!1,h=!1,x=!1,g="function"==typeof setTimeout?setTimeout:null,b="function"==typeof clearTimeout?clearTimeout:null,w="undefined"!=typeof setImmediate?setImmediate:null;function y(e){for(var o=n(c);null!==o;){if(null===o.callback)r(c);else{if(!(o.startTime<=e))break;r(c),o.sortIndex=o.expirationTime,t(s,o)}o=n(c)}}function v(e){if(h=!1,y(e),!m)if(null!==n(s))m=!0,S||(S=!0,k());else{var t=n(c);null!==t&&T(v,t.startTime-e)}}var k,S=!1,j=-1,z=5,C=-1;function _(){return!(!x&&e.unstable_now()-C<z)}function E(){if(x=!1,S){var t=e.unstable_now();C=t;var o=!0;try{e:{m=!1,h&&(h=!1,b(j),j=-1),f=!0;var a=p;try{t:{for(y(t),u=n(s);null!==u&&!(u.expirationTime>t&&_());){var i=u.callback;if("function"==typeof i){u.callback=null,p=u.priorityLevel;var l=i(u.expirationTime<=t);if(t=e.unstable_now(),"function"==typeof l){u.callback=l,y(t),o=!0;break t}u===n(s)&&r(s),y(t)}else r(s);u=n(s)}if(null!==u)o=!0;else{var d=n(c);null!==d&&T(v,d.startTime-t),o=!1}}break e}finally{u=null,p=a,f=!1}o=void 0}}finally{o?k():S=!1}}}if("function"==typeof w)k=function(){w(E)};else if("undefined"!=typeof MessageChannel){var P=new MessageChannel,F=P.port2;P.port1.onmessage=E,k=function(){F.postMessage(null)}}else k=function(){g(E,0)};function T(t,n){j=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},e.unstable_requestPaint=function(){x=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},e.unstable_scheduleCallback=function(r,o,a){var i=e.unstable_now();switch(a="object"==typeof a&&null!==a&&"number"==typeof(a=a.delay)&&0<a?i+a:i,r){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return r={id:d++,callback:o,priorityLevel:r,startTime:a,expirationTime:l=a+l,sortIndex:-1},a>i?(r.sortIndex=a,t(c,r),null===n(s)&&r===n(c)&&(h?(b(j),j=-1):h=!0,T(v,a-i))):(r.sortIndex=l,t(s,r),m||f||(m=!0,S||(S=!0,k()))),r},e.unstable_shouldYield=_,e.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}}(S)),S)),k.exports}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function z(){if(g)return v;g=1;var e=j(),t=r(),n=o();function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function s(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function c(e){if(l(e)!==e)throw Error(a(188))}function d(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=d(e)))return t;e=e.sibling}return null}var u=Object.assign,p=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),y=Symbol.for("react.consumer"),k=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),C=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),F=Symbol.for("react.memo_cache_sentinel"),T=Symbol.iterator;function A(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=T&&e[T]||e["@@iterator"])?e:null}var N=Symbol.for("react.client.reference");function I(e){if(null==e)return null;if("function"==typeof e)return e.$$typeof===N?null:e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case h:return"Fragment";case b:return"Profiler";case x:return"StrictMode";case z:return"Suspense";case C:return"SuspenseList";case P:return"Activity"}if("object"==typeof e)switch(e.$$typeof){case m:return"Portal";case k:return(e.displayName||"Context")+".Provider";case y:return(e._context.displayName||"Context")+".Consumer";case S:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case _:return null!==(t=e.displayName||null)?t:I(e.type)||"Memo";case E:t=e._payload,e=e._init;try{return I(e(t))}catch(n){}}return null}var L=Array.isArray,D=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R={pending:!1,data:null,method:null,action:null},M=[],$=-1;function B(e){return{current:e}}function U(e){0>$||(e.current=M[$],M[$]=null,$--)}function W(e,t){$++,M[$]=e.current,e.current=t}var V=B(null),H=B(null),q=B(null),Q=B(null);function K(e,t){switch(W(q,t),W(H,e),W(V,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?iu(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=lu(t=iu(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(V),W(V,e)}function Y(){U(V),U(H),U(q)}function X(e){null!==e.memoizedState&&W(Q,e);var t=V.current,n=lu(t,e.type);t!==n&&(W(H,e),W(V,n))}function G(e){H.current===e&&(U(V),U(H)),Q.current===e&&(U(Q),Xu._currentValue=R)}var J=Object.prototype.hasOwnProperty,Z=e.unstable_scheduleCallback,ee=e.unstable_cancelCallback,te=e.unstable_shouldYield,ne=e.unstable_requestPaint,re=e.unstable_now,oe=e.unstable_getCurrentPriorityLevel,ae=e.unstable_ImmediatePriority,ie=e.unstable_UserBlockingPriority,le=e.unstable_NormalPriority,se=e.unstable_LowPriority,ce=e.unstable_IdlePriority,de=e.log,ue=e.unstable_setDisableYieldValue,pe=null,fe=null;function me(e){if("function"==typeof de&&ue(e),fe&&"function"==typeof fe.setStrictMode)try{fe.setStrictMode(pe,e)}catch(t){}}var he=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(xe(e)/ge|0)|0},xe=Math.log,ge=Math.LN2;var be=256,we=4194304;function ye(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194048&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ve(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var o=0,a=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var l=134217727&r;return 0!==l?0!==(r=l&~a)?o=ye(r):0!==(i&=l)?o=ye(i):n||0!==(n=l&~e)&&(o=ye(n)):0!==(l=r&~a)?o=ye(l):0!==i?o=ye(i):n||0!==(n=r&~e)&&(o=ye(n)),0===o?0:0!==t&&t!==o&&0===(t&a)&&((a=o&-o)>=(n=t&-t)||32===a&&4194048&n)?t:o}function ke(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function Se(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function je(){var e=be;return!(4194048&(be<<=1))&&(be=256),e}function ze(){var e=we;return!(62914560&(we<<=1))&&(we=4194304),e}function Ce(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _e(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ee(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-he(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194090&n}function Pe(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-he(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}function Fe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Te(e){return 2<(e&=-e)?8<e?134217727&e?32:268435456:8:2}function Ae(){var e=O.p;return 0!==e?e:void 0===(e=window.event)?32:up(e.type)}var Ne=Math.random().toString(36).slice(2),Ie="__reactFiber$"+Ne,Le="__reactProps$"+Ne,De="__reactContainer$"+Ne,Oe="__reactEvents$"+Ne,Re="__reactListeners$"+Ne,Me="__reactHandles$"+Ne,$e="__reactResources$"+Ne,Be="__reactMarker$"+Ne;function Ue(e){delete e[Ie],delete e[Le],delete e[Oe],delete e[Re],delete e[Me]}function We(e){var t=e[Ie];if(t)return t;for(var n=e.parentNode;n;){if(t=n[De]||n[Ie]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=vu(e);null!==e;){if(n=e[Ie])return n;e=vu(e)}return t}n=(e=n).parentNode}return null}function Ve(e){if(e=e[Ie]||e[De]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function He(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(a(33))}function qe(e){var t=e[$e];return t||(t=e[$e]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Qe(e){e[Be]=!0}var Ke=new Set,Ye={};function Xe(e,t){Ge(e,t),Ge(e+"Capture",t)}function Ge(e,t){for(Ye[e]=t,e=0;e<t.length;e++)Ke.add(t[e])}var Je,Ze,et=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tt={},nt={};function rt(e,t,n){if(o=t,J.call(nt,o)||!J.call(tt,o)&&(et.test(o)?nt[o]=!0:(tt[o]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var o}function ot(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function at(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function it(e){if(void 0===Je)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Je=t&&t[1]||"",Ze=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+Je+e+Ze}var lt=!1;function st(e,t){if(!e||lt)return"";lt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(o){var r=o}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}}else{try{throw Error()}catch(i){r=i}(n=e())&&"function"==typeof n.catch&&n.catch(function(){})}}catch(l){if(l&&r&&"string"==typeof l.stack)return[l.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=r.DetermineComponentFrameRoot(),i=a[0],l=a[1];if(i&&l){var s=i.split("\n"),c=l.split("\n");for(o=r=0;r<s.length&&!s[r].includes("DetermineComponentFrameRoot");)r++;for(;o<c.length&&!c[o].includes("DetermineComponentFrameRoot");)o++;if(r===s.length||o===c.length)for(r=s.length-1,o=c.length-1;1<=r&&0<=o&&s[r]!==c[o];)o--;for(;1<=r&&0<=o;r--,o--)if(s[r]!==c[o]){if(1!==r||1!==o)do{if(r--,0>--o||s[r]!==c[o]){var d="\n"+s[r].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}}while(1<=r&&0<=o);break}}}finally{lt=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?it(n):""}function ct(e){switch(e.tag){case 26:case 27:case 5:return it(e.type);case 16:return it("Lazy");case 13:return it("Suspense");case 19:return it("SuspenseList");case 0:case 15:return st(e.type,!1);case 11:return st(e.type.render,!1);case 1:return st(e.type,!0);case 31:return it("Activity");default:return""}}function dt(e){try{var t="";do{t+=ct(e),e=e.return}while(e);return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function pt(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function ft(e){e._valueTracker||(e._valueTracker=function(e){var t=pt(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function mt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pt(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ht(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var xt=/[\n"\\]/g;function gt(e){return e.replace(xt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function bt(e,t,n,r,o,a,i,l){e.name="",null!=i&&"function"!=typeof i&&"symbol"!=typeof i&&"boolean"!=typeof i?e.type=i:e.removeAttribute("type"),null!=t?"number"===i?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ut(t)):e.value!==""+ut(t)&&(e.value=""+ut(t)):"submit"!==i&&"reset"!==i||e.removeAttribute("value"),null!=t?yt(e,i,ut(t)):null!=n?yt(e,i,ut(n)):null!=r&&e.removeAttribute("value"),null==o&&null!=a&&(e.defaultChecked=!!a),null!=o&&(e.checked=o&&"function"!=typeof o&&"symbol"!=typeof o),null!=l&&"function"!=typeof l&&"symbol"!=typeof l&&"boolean"!=typeof l?e.name=""+ut(l):e.removeAttribute("name")}function wt(e,t,n,r,o,a,i,l){if(null!=a&&"function"!=typeof a&&"symbol"!=typeof a&&"boolean"!=typeof a&&(e.type=a),null!=t||null!=n){if(("submit"===a||"reset"===a)&&null==t)return;n=null!=n?""+ut(n):"",t=null!=t?""+ut(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}r="function"!=typeof(r=null!=r?r:o)&&"symbol"!=typeof r&&!!r,e.checked=l?e.checked:!!r,e.defaultChecked=!!r,null!=i&&"function"!=typeof i&&"symbol"!=typeof i&&"boolean"!=typeof i&&(e.name=i)}function yt(e,t,n){"number"===t&&ht(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function vt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ut(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function kt(e,t,n){null==t||((t=""+ut(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ut(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function St(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(a(92));if(L(r)){if(1<r.length)throw Error(a(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ut(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r)}function jt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var zt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ct(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"==typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!=typeof n||0===n||zt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function _t(e,t,n){if(null!=t&&"object"!=typeof t)throw Error(a(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var o in t)r=t[o],t.hasOwnProperty(o)&&n[o]!==r&&Ct(e,o,r)}else for(var i in t)t.hasOwnProperty(i)&&Ct(e,i,t[i])}function Et(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ft=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tt(e){return Ft.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var At=null;function Nt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var It=null,Lt=null;function Dt(e){var t=Ve(e);if(t&&(e=t.stateNode)){var n=e[Le]||null;e:switch(e=t.stateNode,t.type){case"input":if(bt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+gt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=r[Le]||null;if(!o)throw Error(a(90));bt(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&mt(r)}break e;case"textarea":kt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&vt(e,!!n.multiple,t,!1)}}}var Ot=!1;function Rt(e,t,n){if(Ot)return e(t,n);Ot=!0;try{return e(t)}finally{if(Ot=!1,(null!==It||null!==Lt)&&(Wc(),It&&(t=It,e=Lt,Lt=It=null,Dt(t),e)))for(t=0;t<e.length;t++)Dt(e[t])}}function Mt(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Le]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(a(231,t,typeof n));return n}var $t=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),Bt=!1;if($t)try{var Ut={};Object.defineProperty(Ut,"passive",{get:function(){Bt=!0}}),window.addEventListener("test",Ut,Ut),window.removeEventListener("test",Ut,Ut)}catch(Lp){Bt=!1}var Wt=null,Vt=null,Ht=null;function qt(){if(Ht)return Ht;var e,t,n=Vt,r=n.length,o="value"in Wt?Wt.value:Wt.textContent,a=o.length;for(e=0;e<r&&n[e]===o[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===o[a-t];t++);return Ht=o.slice(e,1<t?1-t:void 0)}function Qt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Kt(){return!0}function Yt(){return!1}function Xt(e){function t(t,n,r,o,a){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(o):o[i]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?Kt:Yt,this.isPropagationStopped=Yt,this}return u(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Kt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Kt)},persist:function(){},isPersistent:Kt}),t}var Gt,Jt,Zt,en={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tn=Xt(en),nn=u({},en,{view:0,detail:0}),rn=Xt(nn),on=u({},nn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zt&&(Zt&&"mousemove"===e.type?(Gt=e.screenX-Zt.screenX,Jt=e.screenY-Zt.screenY):Jt=Gt=0,Zt=e),Gt)},movementY:function(e){return"movementY"in e?e.movementY:Jt}}),an=Xt(on),ln=Xt(u({},on,{dataTransfer:0})),sn=Xt(u({},nn,{relatedTarget:0})),cn=Xt(u({},en,{animationName:0,elapsedTime:0,pseudoElement:0})),dn=Xt(u({},en,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),un=Xt(u({},en,{data:0})),pn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=mn[e])&&!!t[e]}function xn(){return hn}var gn=Xt(u({},nn,{key:function(e){if(e.key){var t=pn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Qt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?fn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xn,charCode:function(e){return"keypress"===e.type?Qt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Qt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),bn=Xt(u({},on,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),wn=Xt(u({},nn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xn})),yn=Xt(u({},en,{propertyName:0,elapsedTime:0,pseudoElement:0})),vn=Xt(u({},on,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),kn=Xt(u({},en,{newState:0,oldState:0})),Sn=[9,13,27,32],jn=$t&&"CompositionEvent"in window,zn=null;$t&&"documentMode"in document&&(zn=document.documentMode);var Cn=$t&&"TextEvent"in window&&!zn,_n=$t&&(!jn||zn&&8<zn&&11>=zn),En=String.fromCharCode(32),Pn=!1;function Fn(e,t){switch(e){case"keyup":return-1!==Sn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tn(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var An=!1;var Nn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function In(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Nn[e.type]:"textarea"===t}function Ln(e,t,n,r){It?Lt?Lt.push(r):Lt=[r]:It=r,0<(t=qd(t,"onChange")).length&&(n=new tn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dn=null,On=null;function Rn(e){Rd(e,0)}function Mn(e){if(mt(He(e)))return e}function $n(e,t){if("change"===e)return t}var Bn=!1;if($t){var Un;if($t){var Wn="oninput"in document;if(!Wn){var Vn=document.createElement("div");Vn.setAttribute("oninput","return;"),Wn="function"==typeof Vn.oninput}Un=Wn}else Un=!1;Bn=Un&&(!document.documentMode||9<document.documentMode)}function Hn(){Dn&&(Dn.detachEvent("onpropertychange",qn),On=Dn=null)}function qn(e){if("value"===e.propertyName&&Mn(On)){var t=[];Ln(t,On,e,Nt(e)),Rt(Rn,t)}}function Qn(e,t,n){"focusin"===e?(Hn(),On=n,(Dn=t).attachEvent("onpropertychange",qn)):"focusout"===e&&Hn()}function Kn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Mn(On)}function Yn(e,t){if("click"===e)return Mn(t)}function Xn(e,t){if("input"===e||"change"===e)return Mn(t)}var Gn="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function Jn(e,t){if(Gn(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!J.call(t,o)||!Gn(e[o],t[o]))return!1}return!0}function Zn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function er(e,t){var n,r=Zn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Zn(r)}}function tr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?tr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function nr(e){for(var t=ht((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=ht((e=t.contentWindow).document)}return t}function rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var or=$t&&"documentMode"in document&&11>=document.documentMode,ar=null,ir=null,lr=null,sr=!1;function cr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;sr||null==ar||ar!==ht(r)||("selectionStart"in(r=ar)&&rr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},lr&&Jn(lr,r)||(lr=r,0<(r=qd(ir,"onSelect")).length&&(t=new tn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ar)))}function dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ur={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionrun:dr("Transition","TransitionRun"),transitionstart:dr("Transition","TransitionStart"),transitioncancel:dr("Transition","TransitionCancel"),transitionend:dr("Transition","TransitionEnd")},pr={},fr={};function mr(e){if(pr[e])return pr[e];if(!ur[e])return e;var t,n=ur[e];for(t in n)if(n.hasOwnProperty(t)&&t in fr)return pr[e]=n[t];return e}$t&&(fr=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);var hr=mr("animationend"),xr=mr("animationiteration"),gr=mr("animationstart"),br=mr("transitionrun"),wr=mr("transitionstart"),yr=mr("transitioncancel"),vr=mr("transitionend"),kr=new Map,Sr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(e,t){kr.set(e,t),Xe(t,[e])}Sr.push("scrollEnd");var zr=new WeakMap;function Cr(e,t){if("object"==typeof e&&null!==e){var n=zr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:dt(t)},zr.set(e,t),t)}return{value:e,source:t,stack:dt(t)}}var _r=[],Er=0,Pr=0;function Fr(){for(var e=Er,t=Pr=Er=0;t<e;){var n=_r[t];_r[t++]=null;var r=_r[t];_r[t++]=null;var o=_r[t];_r[t++]=null;var a=_r[t];if(_r[t++]=null,null!==r&&null!==o){var i=r.pending;null===i?o.next=o:(o.next=i.next,i.next=o),r.pending=o}0!==a&&Ir(n,o,a)}}function Tr(e,t,n,r){_r[Er++]=e,_r[Er++]=t,_r[Er++]=n,_r[Er++]=r,Pr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Ar(e,t,n,r){return Tr(e,t,n,r),Lr(e)}function Nr(e,t){return Tr(e,null,null,t),Lr(e)}function Ir(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var o=!1,a=e.return;null!==a;)a.childLanes|=n,null!==(r=a.alternate)&&(r.childLanes|=n),22===a.tag&&(null===(e=a.stateNode)||1&e._visibility||(o=!0)),e=a,a=a.return;return 3===e.tag?(a=e.stateNode,o&&null!==t&&(o=31-he(n),null===(r=(e=a.hiddenUpdates)[o])?e[o]=[t]:r.push(t),t.lane=536870912|n),a):null}function Lr(e){if(50<Ic)throw Ic=0,Lc=null,Error(a(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Dr={};function Or(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rr(e,t,n,r){return new Or(e,t,n,r)}function Mr(e){return!(!(e=e.prototype)||!e.isReactComponent)}function $r(e,t){var n=e.alternate;return null===n?((n=Rr(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Br(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ur(e,t,n,r,o,i){var l=0;if(r=e,"function"==typeof e)Mr(e)&&(l=1);else if("string"==typeof e)l=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!=typeof t.precedence||"string"!=typeof t.href||""===t.href)break;return!0;case"link":if("string"!=typeof t.rel||"string"!=typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"==typeof t.precedence&&null==e);case"script":if(t.async&&"function"!=typeof t.async&&"symbol"!=typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"==typeof t.src)return!0}return!1}(e,n,V.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case P:return(e=Rr(31,n,t,o)).elementType=P,e.lanes=i,e;case h:return Wr(n.children,o,i,t);case x:l=8,o|=24;break;case b:return(e=Rr(12,n,t,2|o)).elementType=b,e.lanes=i,e;case z:return(e=Rr(13,n,t,o)).elementType=z,e.lanes=i,e;case C:return(e=Rr(19,n,t,o)).elementType=C,e.lanes=i,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case w:case k:l=10;break e;case y:l=9;break e;case S:l=11;break e;case _:l=14;break e;case E:l=16,r=null;break e}l=29,n=Error(a(130,null===e?"null":typeof e,"")),r=null}return(t=Rr(l,n,t,o)).elementType=e,t.type=r,t.lanes=i,t}function Wr(e,t,n,r){return(e=Rr(7,e,r,t)).lanes=n,e}function Vr(e,t,n){return(e=Rr(6,e,null,t)).lanes=n,e}function Hr(e,t,n){return(t=Rr(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var qr=[],Qr=0,Kr=null,Yr=0,Xr=[],Gr=0,Jr=null,Zr=1,eo="";function to(e,t){qr[Qr++]=Yr,qr[Qr++]=Kr,Kr=e,Yr=t}function no(e,t,n){Xr[Gr++]=Zr,Xr[Gr++]=eo,Xr[Gr++]=Jr,Jr=e;var r=Zr;e=eo;var o=32-he(r)-1;r&=~(1<<o),n+=1;var a=32-he(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Zr=1<<32-he(t)+o|n<<o|r,eo=a+e}else Zr=1<<a|n<<o|r,eo=e}function ro(e){null!==e.return&&(to(e,1),no(e,1,0))}function oo(e){for(;e===Kr;)Kr=qr[--Qr],qr[Qr]=null,Yr=qr[--Qr],qr[Qr]=null;for(;e===Jr;)Jr=Xr[--Gr],Xr[Gr]=null,eo=Xr[--Gr],Xr[Gr]=null,Zr=Xr[--Gr],Xr[Gr]=null}var ao=null,io=null,lo=!1,so=null,co=!1,uo=Error(a(519));function po(e){throw bo(Cr(Error(a(418,"")),e)),uo}function fo(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Ie]=e,t[Le]=r,n){case"dialog":Md("cancel",t),Md("close",t);break;case"iframe":case"object":case"embed":Md("load",t);break;case"video":case"audio":for(n=0;n<Dd.length;n++)Md(Dd[n],t);break;case"source":Md("error",t);break;case"img":case"image":case"link":Md("error",t),Md("load",t);break;case"details":Md("toggle",t);break;case"input":Md("invalid",t),wt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),ft(t);break;case"select":Md("invalid",t);break;case"textarea":Md("invalid",t),St(t,r.value,r.defaultValue,r.children),ft(t)}"string"!=typeof(n=r.children)&&"number"!=typeof n&&"bigint"!=typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||Jd(t.textContent,n)?(null!=r.popover&&(Md("beforetoggle",t),Md("toggle",t)),null!=r.onScroll&&Md("scroll",t),null!=r.onScrollEnd&&Md("scrollend",t),null!=r.onClick&&(t.onclick=Zd),t=!0):t=!1,t||po(e)}function mo(e){for(ao=e.return;ao;)switch(ao.tag){case 5:case 13:return void(co=!1);case 27:case 3:return void(co=!0);default:ao=ao.return}}function ho(e){if(e!==ao)return!1;if(!lo)return mo(e),lo=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||su(e.type,e.memoizedProps)),t=!t),t&&io&&po(e),mo(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){io=wu(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++;e=e.nextSibling}io=null}}else 27===n?(n=io,hu(e.type)?(e=yu,yu=null,io=e):io=n):io=ao?wu(e.stateNode.nextSibling):null;return!0}function xo(){io=ao=null,lo=!1}function go(){var e=so;return null!==e&&(null===vc?vc=e:vc.push.apply(vc,e),so=null),e}function bo(e){null===so?so=[e]:so.push(e)}var wo=B(null),yo=null,vo=null;function ko(e,t,n){W(wo,t._currentValue),t._currentValue=n}function So(e){e._currentValue=wo.current,U(wo)}function jo(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zo(e,t,n,r){var o=e.child;for(null!==o&&(o.return=e);null!==o;){var i=o.dependencies;if(null!==i){var l=o.child;i=i.firstContext;e:for(;null!==i;){var s=i;i=o;for(var c=0;c<t.length;c++)if(s.context===t[c]){i.lanes|=n,null!==(s=i.alternate)&&(s.lanes|=n),jo(i.return,n,e),r||(l=null);break e}i=s.next}}else if(18===o.tag){if(null===(l=o.return))throw Error(a(341));l.lanes|=n,null!==(i=l.alternate)&&(i.lanes|=n),jo(l,n,e),l=null}else l=o.child;if(null!==l)l.return=o;else for(l=o;null!==l;){if(l===e){l=null;break}if(null!==(o=l.sibling)){o.return=l.return,l=o;break}l=l.return}o=l}}function Co(e,t,n,r){e=null;for(var o=t,i=!1;null!==o;){if(!i)if(524288&o.flags)i=!0;else if(262144&o.flags)break;if(10===o.tag){var l=o.alternate;if(null===l)throw Error(a(387));if(null!==(l=l.memoizedProps)){var s=o.type;Gn(o.pendingProps.value,l.value)||(null!==e?e.push(s):e=[s])}}else if(o===Q.current){if(null===(l=o.alternate))throw Error(a(387));l.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(null!==e?e.push(Xu):e=[Xu])}o=o.return}null!==e&&zo(t,e,n,r),t.flags|=262144}function _o(e){for(e=e.firstContext;null!==e;){if(!Gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Eo(e){yo=e,vo=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Po(e){return To(yo,e)}function Fo(e,t){return null===yo&&Eo(e),To(e,t)}function To(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===vo){if(null===e)throw Error(a(308));vo=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else vo=vo.next=t;return n}var Ao="undefined"!=typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},No=e.unstable_scheduleCallback,Io=e.unstable_NormalPriority,Lo={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Do(){return{controller:new Ao,data:new Map,refCount:0}}function Oo(e){e.refCount--,0===e.refCount&&No(Io,function(){e.controller.abort()})}var Ro=null,Mo=0,$o=0,Bo=null;function Uo(){if(0===--Mo&&null!==Ro){null!==Bo&&(Bo.status="fulfilled");var e=Ro;Ro=null,$o=0,Bo=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Wo=D.S;D.S=function(e,t){"object"==typeof t&&null!==t&&"function"==typeof t.then&&function(e,t){if(null===Ro){var n=Ro=[];Mo=0,$o=Td(),Bo={status:"pending",value:void 0,then:function(e){n.push(e)}}}Mo++,t.then(Uo,Uo)}(0,t),null!==Wo&&Wo(e,t)};var Vo=B(null);function Ho(){var e=Vo.current;return null!==e?e:ac.pooledCache}function qo(e,t){W(Vo,null===t?Vo.current:t.pool)}function Qo(){var e=Ho();return null===e?null:{parent:Lo._currentValue,pool:e}}var Ko=Error(a(460)),Yo=Error(a(474)),Xo=Error(a(542)),Go={then:function(){}};function Jo(e){return"fulfilled"===(e=e.status)||"rejected"===e}function Zo(){}function ea(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Zo,Zo),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw ra(e=t.reason),e;default:if("string"==typeof t.status)t.then(Zo,Zo);else{if(null!==(e=ac)&&100<e.shellSuspendCounter)throw Error(a(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw ra(e=t.reason),e}throw ta=t,Ko}}var ta=null;function na(){if(null===ta)throw Error(a(459));var e=ta;return ta=null,e}function ra(e){if(e===Ko||e===Xo)throw Error(a(483))}var oa=!1;function aa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ia(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function la(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sa(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,2&oc){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,t=Lr(e),Ir(e,null,n),t}return Tr(e,r,t,n),Lr(e)}function ca(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Pe(e,n)}}function da(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var i={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===a?o=a=i:a=a.next=i,n=n.next}while(null!==n);null===a?o=a=t:a=a.next=t}else o=a=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ua=!1;function pa(){if(ua){if(null!==Bo)throw Bo}}function fa(e,t,n,r){ua=!1;var o=e.updateQueue;oa=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(null!==l){o.shared.pending=null;var s=l,c=s.next;s.next=null,null===i?a=c:i.next=c,i=s;var d=e.alternate;null!==d&&((l=(d=d.updateQueue).lastBaseUpdate)!==i&&(null===l?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=s))}if(null!==a){var p=o.baseState;for(i=0,d=c=s=null,l=a;;){var f=-536870913&l.lane,m=f!==l.lane;if(m?(lc&f)===f:(r&f)===f){0!==f&&f===$o&&(ua=!0),null!==d&&(d=d.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var h=e,x=l;f=t;var g=n;switch(x.tag){case 1:if("function"==typeof(h=x.payload)){p=h.call(g,p,f);break e}p=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null==(f="function"==typeof(h=x.payload)?h.call(g,p,f):h))break e;p=u({},p,f);break e;case 2:oa=!0}}null!==(f=l.callback)&&(e.flags|=64,m&&(e.flags|=8192),null===(m=o.callbacks)?o.callbacks=[f]:m.push(f))}else m={lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===d?(c=d=m,s=p):d=d.next=m,i|=f;if(null===(l=l.next)){if(null===(l=o.shared.pending))break;l=(m=l).next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}null===d&&(s=p),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=d,null===a&&(o.shared.lanes=0),hc|=i,e.lanes=i,e.memoizedState=p}}function ma(e,t){if("function"!=typeof e)throw Error(a(191,e));e.call(t)}function ha(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)ma(n[e],t)}var xa=B(null),ga=B(0);function ba(e,t){W(ga,e=fc),W(xa,t),fc=e|t.baseLanes}function wa(){W(ga,fc),W(xa,xa.current)}function ya(){fc=ga.current,U(xa),U(ga)}var va=0,ka=null,Sa=null,ja=null,za=!1,Ca=!1,_a=!1,Ea=0,Pa=0,Fa=null,Ta=0;function Aa(){throw Error(a(321))}function Na(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gn(e[n],t[n]))return!1;return!0}function Ia(e,t,n,r,o,a){return va=a,ka=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=null===e||null===e.memoizedState?Ki:Yi,_a=!1,a=n(r,o),_a=!1,Ca&&(a=Da(t,n,r,o)),La(e),a}function La(e){D.H=Qi;var t=null!==Sa&&null!==Sa.next;if(va=0,ja=Sa=ka=null,za=!1,Pa=0,Fa=null,t)throw Error(a(300));null===e||Pl||null!==(e=e.dependencies)&&_o(e)&&(Pl=!0)}function Da(e,t,n,r){ka=e;var o=0;do{if(Ca&&(Fa=null),Pa=0,Ca=!1,25<=o)throw Error(a(301));if(o+=1,ja=Sa=null,null!=e.updateQueue){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,null!=i.memoCache&&(i.memoCache.index=0)}D.H=Xi,i=t(n,r)}while(Ca);return i}function Oa(){var e=D.H,t=e.useState()[0];return t="function"==typeof t.then?Wa(t):t,e=e.useState()[0],(null!==Sa?Sa.memoizedState:null)!==e&&(ka.flags|=1024),t}function Ra(){var e=0!==Ea;return Ea=0,e}function Ma(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function $a(e){if(za){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}za=!1}va=0,ja=Sa=ka=null,Ca=!1,Pa=Ea=0,Fa=null}function Ba(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ja?ka.memoizedState=ja=e:ja=ja.next=e,ja}function Ua(){if(null===Sa){var e=ka.alternate;e=null!==e?e.memoizedState:null}else e=Sa.next;var t=null===ja?ka.memoizedState:ja.next;if(null!==t)ja=t,Sa=e;else{if(null===e){if(null===ka.alternate)throw Error(a(467));throw Error(a(310))}e={memoizedState:(Sa=e).memoizedState,baseState:Sa.baseState,baseQueue:Sa.baseQueue,queue:Sa.queue,next:null},null===ja?ka.memoizedState=ja=e:ja=ja.next=e}return ja}function Wa(e){var t=Pa;return Pa+=1,null===Fa&&(Fa=[]),e=ea(Fa,e,t),t=ka,null===(null===ja?t.memoizedState:ja.next)&&(t=t.alternate,D.H=null===t||null===t.memoizedState?Ki:Yi),e}function Va(e){if(null!==e&&"object"==typeof e){if("function"==typeof e.then)return Wa(e);if(e.$$typeof===k)return Po(e)}throw Error(a(438,String(e)))}function Ha(e){var t=null,n=ka.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=ka.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},ka.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=F;return t.index++,n}function qa(e,t){return"function"==typeof t?t(e):t}function Qa(e){return Ka(Ua(),Sa,e)}function Ka(e,t,n){var r=e.queue;if(null===r)throw Error(a(311));r.lastRenderedReducer=n;var o=e.baseQueue,i=r.pending;if(null!==i){if(null!==o){var l=o.next;o.next=i.next,i.next=l}t.baseQueue=o=i,r.pending=null}if(i=e.baseState,null===o)e.memoizedState=i;else{var s=l=null,c=null,d=t=o.next,u=!1;do{var p=-536870913&d.lane;if(p!==d.lane?(lc&p)===p:(va&p)===p){var f=d.revertLane;if(0===f)null!==c&&(c=c.next={lane:0,revertLane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),p===$o&&(u=!0);else{if((va&f)===f){d=d.next,f===$o&&(u=!0);continue}p={lane:0,revertLane:d.revertLane,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},null===c?(s=c=p,l=i):c=c.next=p,ka.lanes|=f,hc|=f}p=d.action,_a&&n(i,p),i=d.hasEagerState?d.eagerState:n(i,p)}else f={lane:p,revertLane:d.revertLane,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},null===c?(s=c=f,l=i):c=c.next=f,ka.lanes|=p,hc|=p;d=d.next}while(null!==d&&d!==t);if(null===c?l=i:c.next=s,!Gn(i,e.memoizedState)&&(Pl=!0,u&&null!==(n=Bo)))throw n;e.memoizedState=i,e.baseState=l,e.baseQueue=c,r.lastRenderedState=i}return null===o&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ya(e){var t=Ua(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(null!==o){n.pending=null;var l=o=o.next;do{i=e(i,l.action),l=l.next}while(l!==o);Gn(i,t.memoizedState)||(Pl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Xa(e,t,n){var r=ka,o=Ua(),i=lo;if(i){if(void 0===n)throw Error(a(407));n=n()}else n=t();var l=!Gn((Sa||o).memoizedState,n);if(l&&(o.memoizedState=n,Pl=!0),o=o.queue,wi(2048,8,Za.bind(null,r,o,e),[e]),o.getSnapshot!==t||l||null!==ja&&1&ja.memoizedState.tag){if(r.flags|=2048,xi(9,{destroy:void 0,resource:void 0},Ja.bind(null,r,o,n,t),null),null===ac)throw Error(a(349));i||124&va||Ga(r,t,n)}return n}function Ga(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=ka.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},ka.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ja(e,t,n,r){t.value=n,t.getSnapshot=r,ei(t)&&ti(e)}function Za(e,t,n){return n(function(){ei(t)&&ti(e)})}function ei(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gn(e,n)}catch(r){return!0}}function ti(e){var t=Nr(e,2);null!==t&&Rc(t,e,2)}function ni(e){var t=Ba();if("function"==typeof e){var n=e;if(e=n(),_a){me(!0);try{n()}finally{me(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:e},t}function ri(e,t,n,r){return e.baseState=n,Ka(e,Sa,"function"==typeof r?r:qa)}function oi(e,t,n,r,o){if(Vi(e))throw Error(a(485));if(null!==(e=t.action)){var i={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){i.listeners.push(e)}};null!==D.T?n(!0):i.isTransition=!1,r(i),null===(n=t.pending)?(i.next=t.pending=i,ai(t,i)):(i.next=n.next,t.pending=n.next=i)}}function ai(e,t){var n=t.action,r=t.payload,o=e.state;if(t.isTransition){var a=D.T,i={};D.T=i;try{var l=n(o,r),s=D.S;null!==s&&s(i,l),ii(e,t,l)}catch(c){si(e,t,c)}finally{D.T=a}}else try{ii(e,t,a=n(o,r))}catch(d){si(e,t,d)}}function ii(e,t,n){null!==n&&"object"==typeof n&&"function"==typeof n.then?n.then(function(n){li(e,t,n)},function(n){return si(e,t,n)}):li(e,t,n)}function li(e,t,n){t.status="fulfilled",t.value=n,ci(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,ai(e,n)))}function si(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,ci(t),t=t.next}while(t!==r)}e.action=null}function ci(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function di(e,t){return t}function ui(e,t){if(lo){var n=ac.formState;if(null!==n){e:{var r=ka;if(lo){if(io){t:{for(var o=io,a=co;8!==o.nodeType;){if(!a){o=null;break t}if(null===(o=wu(o.nextSibling))){o=null;break t}}o="F!"===(a=o.data)||"F"===a?o:null}if(o){io=wu(o.nextSibling),r="F!"===o.data;break e}}po(r)}r=!1}r&&(t=n[0])}}return(n=Ba()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:di,lastRenderedState:t},n.queue=r,n=Bi.bind(null,ka,r),r.dispatch=n,r=ni(!1),a=Wi.bind(null,ka,!1,r.queue),o={state:t,dispatch:null,action:e,pending:null},(r=Ba()).queue=o,n=oi.bind(null,ka,o,a,n),o.dispatch=n,r.memoizedState=e,[t,n,!1]}function pi(e){return fi(Ua(),Sa,e)}function fi(e,t,n){if(t=Ka(e,t,di)[0],e=Qa(qa)[0],"object"==typeof t&&null!==t&&"function"==typeof t.then)try{var r=Wa(t)}catch(i){if(i===Ko)throw Xo;throw i}else r=t;var o=(t=Ua()).queue,a=o.dispatch;return n!==t.memoizedState&&(ka.flags|=2048,xi(9,{destroy:void 0,resource:void 0},mi.bind(null,o,n),null)),[r,a,e]}function mi(e,t){e.action=t}function hi(e){var t=Ua(),n=Sa;if(null!==n)return fi(t,n,e);Ua(),t=t.memoizedState;var r=(n=Ua()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function xi(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=ka.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},ka.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function gi(){return Ua().memoizedState}function bi(e,t,n,r){var o=Ba();r=void 0===r?null:r,ka.flags|=e,o.memoizedState=xi(1|t,{destroy:void 0,resource:void 0},n,r)}function wi(e,t,n,r){var o=Ua();r=void 0===r?null:r;var a=o.memoizedState.inst;null!==Sa&&null!==r&&Na(r,Sa.memoizedState.deps)?o.memoizedState=xi(t,a,n,r):(ka.flags|=e,o.memoizedState=xi(1|t,a,n,r))}function yi(e,t){bi(8390656,8,e,t)}function vi(e,t){wi(2048,8,e,t)}function ki(e,t){return wi(4,2,e,t)}function Si(e,t){return wi(4,4,e,t)}function ji(e,t){if("function"==typeof t){e=e();var n=t(e);return function(){"function"==typeof n?n():t(null)}}if(null!=t)return e=e(),t.current=e,function(){t.current=null}}function zi(e,t,n){n=null!=n?n.concat([e]):null,wi(4,4,ji.bind(null,t,e),n)}function Ci(){}function _i(e,t){var n=Ua();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&Na(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ei(e,t){var n=Ua();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&Na(t,r[1]))return r[0];if(r=e(),_a){me(!0);try{e()}finally{me(!1)}}return n.memoizedState=[r,t],r}function Pi(e,t,n){return void 0===n||1073741824&va?e.memoizedState=t:(e.memoizedState=n,e=Oc(),ka.lanes|=e,hc|=e,n)}function Fi(e,t,n,r){return Gn(n,t)?n:null!==xa.current?(e=Pi(e,n,r),Gn(e,t)||(Pl=!0),e):42&va?(e=Oc(),ka.lanes|=e,hc|=e,t):(Pl=!0,e.memoizedState=n)}function Ti(e,t,n,r,o){var a=O.p;O.p=0!==a&&8>a?a:8;var i,l,s,c=D.T,d={};D.T=d,Wi(e,!1,t,n);try{var u=o(),p=D.S;if(null!==p&&p(d,u),null!==u&&"object"==typeof u&&"function"==typeof u.then)Ui(e,t,(i=r,l=[],s={status:"pending",value:null,reason:null,then:function(e){l.push(e)}},u.then(function(){s.status="fulfilled",s.value=i;for(var e=0;e<l.length;e++)(0,l[e])(i)},function(e){for(s.status="rejected",s.reason=e,e=0;e<l.length;e++)(0,l[e])(void 0)}),s),Dc());else Ui(e,t,r,Dc())}catch(f){Ui(e,t,{then:function(){},status:"rejected",reason:f},Dc())}finally{O.p=a,D.T=c}}function Ai(){}function Ni(e,t,n,r){if(5!==e.tag)throw Error(a(476));var o=Ii(e).queue;Ti(e,o,t,R,null===n?Ai:function(){return Li(e),n(r)})}function Ii(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:R,baseState:R,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:R},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function Li(e){Ui(e,Ii(e).next.queue,{},Dc())}function Di(){return Po(Xu)}function Oi(){return Ua().memoizedState}function Ri(){return Ua().memoizedState}function Mi(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Dc(),r=sa(t,e=la(n),n);return null!==r&&(Rc(r,t,n),ca(r,t,n)),t={cache:Do()},void(e.payload=t)}t=t.return}}function $i(e,t,n){var r=Dc();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Vi(e)?Hi(t,n):null!==(n=Ar(e,t,n,r))&&(Rc(n,e,r),qi(n,t,r))}function Bi(e,t,n){Ui(e,t,n,Dc())}function Ui(e,t,n,r){var o={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vi(e))Hi(t,o);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=a(i,n);if(o.hasEagerState=!0,o.eagerState=l,Gn(l,i))return Tr(e,t,o,0),null===ac&&Fr(),!1}catch(s){}if(null!==(n=Ar(e,t,o,r)))return Rc(n,e,r),qi(n,t,r),!0}return!1}function Wi(e,t,n,r){if(r={lane:2,revertLane:Td(),action:r,hasEagerState:!1,eagerState:null,next:null},Vi(e)){if(t)throw Error(a(479))}else null!==(t=Ar(e,n,r,2))&&Rc(t,e,2)}function Vi(e){var t=e.alternate;return e===ka||null!==t&&t===ka}function Hi(e,t){Ca=za=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qi(e,t,n){if(4194048&n){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Pe(e,n)}}var Qi={readContext:Po,use:Va,useCallback:Aa,useContext:Aa,useEffect:Aa,useImperativeHandle:Aa,useLayoutEffect:Aa,useInsertionEffect:Aa,useMemo:Aa,useReducer:Aa,useRef:Aa,useState:Aa,useDebugValue:Aa,useDeferredValue:Aa,useTransition:Aa,useSyncExternalStore:Aa,useId:Aa,useHostTransitionStatus:Aa,useFormState:Aa,useActionState:Aa,useOptimistic:Aa,useMemoCache:Aa,useCacheRefresh:Aa},Ki={readContext:Po,use:Va,useCallback:function(e,t){return Ba().memoizedState=[e,void 0===t?null:t],e},useContext:Po,useEffect:yi,useImperativeHandle:function(e,t,n){n=null!=n?n.concat([e]):null,bi(4194308,4,ji.bind(null,t,e),n)},useLayoutEffect:function(e,t){return bi(4194308,4,e,t)},useInsertionEffect:function(e,t){bi(4,2,e,t)},useMemo:function(e,t){var n=Ba();t=void 0===t?null:t;var r=e();if(_a){me(!0);try{e()}finally{me(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ba();if(void 0!==n){var o=n(t);if(_a){me(!0);try{n(t)}finally{me(!1)}}}else o=t;return r.memoizedState=r.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},r.queue=e,e=e.dispatch=$i.bind(null,ka,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Ba().memoizedState=e},useState:function(e){var t=(e=ni(e)).queue,n=Bi.bind(null,ka,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ci,useDeferredValue:function(e,t){return Pi(Ba(),e,t)},useTransition:function(){var e=ni(!1);return e=Ti.bind(null,ka,e.queue,!0,!1),Ba().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=ka,o=Ba();if(lo){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===ac)throw Error(a(349));124&lc||Ga(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,yi(Za.bind(null,r,i,e),[e]),r.flags|=2048,xi(9,{destroy:void 0,resource:void 0},Ja.bind(null,r,i,n,t),null),n},useId:function(){var e=Ba(),t=ac.identifierPrefix;if(lo){var n=eo;t="«"+t+"R"+(n=(Zr&~(1<<32-he(Zr)-1)).toString(32)+n),0<(n=Ea++)&&(t+="H"+n.toString(32)),t+="»"}else t="«"+t+"r"+(n=Ta++).toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Di,useFormState:ui,useActionState:ui,useOptimistic:function(e){var t=Ba();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Wi.bind(null,ka,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ha,useCacheRefresh:function(){return Ba().memoizedState=Mi.bind(null,ka)}},Yi={readContext:Po,use:Va,useCallback:_i,useContext:Po,useEffect:vi,useImperativeHandle:zi,useInsertionEffect:ki,useLayoutEffect:Si,useMemo:Ei,useReducer:Qa,useRef:gi,useState:function(){return Qa(qa)},useDebugValue:Ci,useDeferredValue:function(e,t){return Fi(Ua(),Sa.memoizedState,e,t)},useTransition:function(){var e=Qa(qa)[0],t=Ua().memoizedState;return["boolean"==typeof e?e:Wa(e),t]},useSyncExternalStore:Xa,useId:Oi,useHostTransitionStatus:Di,useFormState:pi,useActionState:pi,useOptimistic:function(e,t){return ri(Ua(),0,e,t)},useMemoCache:Ha,useCacheRefresh:Ri},Xi={readContext:Po,use:Va,useCallback:_i,useContext:Po,useEffect:vi,useImperativeHandle:zi,useInsertionEffect:ki,useLayoutEffect:Si,useMemo:Ei,useReducer:Ya,useRef:gi,useState:function(){return Ya(qa)},useDebugValue:Ci,useDeferredValue:function(e,t){var n=Ua();return null===Sa?Pi(n,e,t):Fi(n,Sa.memoizedState,e,t)},useTransition:function(){var e=Ya(qa)[0],t=Ua().memoizedState;return["boolean"==typeof e?e:Wa(e),t]},useSyncExternalStore:Xa,useId:Oi,useHostTransitionStatus:Di,useFormState:hi,useActionState:hi,useOptimistic:function(e,t){var n=Ua();return null!==Sa?ri(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ha,useCacheRefresh:Ri},Gi=null,Ji=0;function Zi(e){var t=Ji;return Ji+=1,null===Gi&&(Gi=[]),ea(Gi,e,t)}function el(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function tl(e,t){if(t.$$typeof===p)throw Error(a(525));throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function nl(e){return(0,e._init)(e._payload)}function rl(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function o(e,t){return(e=$r(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Vr(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function c(e,t,n,r){var a=n.type;return a===h?u(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"==typeof a&&null!==a&&a.$$typeof===E&&nl(a)===t.type)?(el(t=o(t,n.props),n),t.return=e,t):(el(t=Ur(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function d(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Hr(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function u(e,t,n,r,a){return null===t||7!==t.tag?((t=Wr(n,e.mode,r,a)).return=e,t):((t=o(t,n)).return=e,t)}function p(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t||"bigint"==typeof t)return(t=Vr(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case f:return el(n=Ur(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case m:return(t=Hr(t,e.mode,n)).return=e,t;case E:return p(e,t=(0,t._init)(t._payload),n)}if(L(t)||A(t))return(t=Wr(t,e.mode,n,null)).return=e,t;if("function"==typeof t.then)return p(e,Zi(t),n);if(t.$$typeof===k)return p(e,Fo(e,t),n);tl(e,t)}return null}function x(e,t,n,r){var o=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n||"bigint"==typeof n)return null!==o?null:s(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case f:return n.key===o?c(e,t,n,r):null;case m:return n.key===o?d(e,t,n,r):null;case E:return x(e,t,n=(o=n._init)(n._payload),r)}if(L(n)||A(n))return null!==o?null:u(e,t,n,r,null);if("function"==typeof n.then)return x(e,t,Zi(n),r);if(n.$$typeof===k)return x(e,t,Fo(e,n),r);tl(e,n)}return null}function g(e,t,n,r,o){if("string"==typeof r&&""!==r||"number"==typeof r||"bigint"==typeof r)return s(t,e=e.get(n)||null,""+r,o);if("object"==typeof r&&null!==r){switch(r.$$typeof){case f:return c(t,e=e.get(null===r.key?n:r.key)||null,r,o);case m:return d(t,e=e.get(null===r.key?n:r.key)||null,r,o);case E:return g(e,t,n,r=(0,r._init)(r._payload),o)}if(L(r)||A(r))return u(t,e=e.get(n)||null,r,o,null);if("function"==typeof r.then)return g(e,t,n,Zi(r),o);if(r.$$typeof===k)return g(e,t,n,Fo(t,r),o);tl(t,r)}return null}function b(s,c,d,u){if("object"==typeof d&&null!==d&&d.type===h&&null===d.key&&(d=d.props.children),"object"==typeof d&&null!==d){switch(d.$$typeof){case f:e:{for(var w=d.key;null!==c;){if(c.key===w){if((w=d.type)===h){if(7===c.tag){n(s,c.sibling),(u=o(c,d.props.children)).return=s,s=u;break e}}else if(c.elementType===w||"object"==typeof w&&null!==w&&w.$$typeof===E&&nl(w)===c.type){n(s,c.sibling),el(u=o(c,d.props),d),u.return=s,s=u;break e}n(s,c);break}t(s,c),c=c.sibling}d.type===h?((u=Wr(d.props.children,s.mode,u,d.key)).return=s,s=u):(el(u=Ur(d.type,d.key,d.props,null,s.mode,u),d),u.return=s,s=u)}return l(s);case m:e:{for(w=d.key;null!==c;){if(c.key===w){if(4===c.tag&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(s,c.sibling),(u=o(c,d.children||[])).return=s,s=u;break e}n(s,c);break}t(s,c),c=c.sibling}(u=Hr(d,s.mode,u)).return=s,s=u}return l(s);case E:return b(s,c,d=(w=d._init)(d._payload),u)}if(L(d))return function(o,a,l,s){for(var c=null,d=null,u=a,f=a=0,m=null;null!==u&&f<l.length;f++){u.index>f?(m=u,u=null):m=u.sibling;var h=x(o,u,l[f],s);if(null===h){null===u&&(u=m);break}e&&u&&null===h.alternate&&t(o,u),a=i(h,a,f),null===d?c=h:d.sibling=h,d=h,u=m}if(f===l.length)return n(o,u),lo&&to(o,f),c;if(null===u){for(;f<l.length;f++)null!==(u=p(o,l[f],s))&&(a=i(u,a,f),null===d?c=u:d.sibling=u,d=u);return lo&&to(o,f),c}for(u=r(u);f<l.length;f++)null!==(m=g(u,o,f,l[f],s))&&(e&&null!==m.alternate&&u.delete(null===m.key?f:m.key),a=i(m,a,f),null===d?c=m:d.sibling=m,d=m);return e&&u.forEach(function(e){return t(o,e)}),lo&&to(o,f),c}(s,c,d,u);if(A(d)){if("function"!=typeof(w=A(d)))throw Error(a(150));return function(o,l,s,c){if(null==s)throw Error(a(151));for(var d=null,u=null,f=l,m=l=0,h=null,b=s.next();null!==f&&!b.done;m++,b=s.next()){f.index>m?(h=f,f=null):h=f.sibling;var w=x(o,f,b.value,c);if(null===w){null===f&&(f=h);break}e&&f&&null===w.alternate&&t(o,f),l=i(w,l,m),null===u?d=w:u.sibling=w,u=w,f=h}if(b.done)return n(o,f),lo&&to(o,m),d;if(null===f){for(;!b.done;m++,b=s.next())null!==(b=p(o,b.value,c))&&(l=i(b,l,m),null===u?d=b:u.sibling=b,u=b);return lo&&to(o,m),d}for(f=r(f);!b.done;m++,b=s.next())null!==(b=g(f,o,m,b.value,c))&&(e&&null!==b.alternate&&f.delete(null===b.key?m:b.key),l=i(b,l,m),null===u?d=b:u.sibling=b,u=b);return e&&f.forEach(function(e){return t(o,e)}),lo&&to(o,m),d}(s,c,d=w.call(d),u)}if("function"==typeof d.then)return b(s,c,Zi(d),u);if(d.$$typeof===k)return b(s,c,Fo(s,d),u);tl(s,d)}return"string"==typeof d&&""!==d||"number"==typeof d||"bigint"==typeof d?(d=""+d,null!==c&&6===c.tag?(n(s,c.sibling),(u=o(c,d)).return=s,s=u):(n(s,c),(u=Vr(d,s.mode,u)).return=s,s=u),l(s)):n(s,c)}return function(e,t,n,r){try{Ji=0;var o=b(e,t,n,r);return Gi=null,o}catch(i){if(i===Ko||i===Xo)throw i;var a=Rr(29,i,null,e.mode);return a.lanes=r,a.return=e,a}}}var ol=rl(!0),al=rl(!1),il=B(null),ll=null;function sl(e){var t=e.alternate;W(pl,1&pl.current),W(il,e),null===ll&&(null===t||null!==xa.current||null!==t.memoizedState)&&(ll=e)}function cl(e){if(22===e.tag){if(W(pl,pl.current),W(il,e),null===ll){var t=e.alternate;null!==t&&null!==t.memoizedState&&(ll=e)}}else dl()}function dl(){W(pl,pl.current),W(il,il.current)}function ul(e){U(il),ll===e&&(ll=null),U(pl)}var pl=B(0);function fl(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||bu(n)))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(128&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ml(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:u({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var hl={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Dc(),o=la(r);o.payload=t,null!=n&&(o.callback=n),null!==(t=sa(e,o,r))&&(Rc(t,e,r),ca(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Dc(),o=la(r);o.tag=1,o.payload=t,null!=n&&(o.callback=n),null!==(t=sa(e,o,r))&&(Rc(t,e,r),ca(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Dc(),r=la(n);r.tag=2,null!=t&&(r.callback=t),null!==(t=sa(e,r,n))&&(Rc(t,e,n),ca(t,e,n))}};function xl(e,t,n,r,o,a,i){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,i):!t.prototype||!t.prototype.isPureReactComponent||(!Jn(n,r)||!Jn(o,a))}function gl(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hl.enqueueReplaceState(t,t.state,null)}function bl(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var o in n===t&&(n=u({},n)),e)void 0===n[o]&&(n[o]=e[o]);return n}var wl="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function yl(e){wl(e)}function vl(e){console.error(e)}function kl(e){wl(e)}function Sl(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function jl(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function zl(e,t,n){return(n=la(n)).tag=3,n.payload={element:null},n.callback=function(){Sl(e,t)},n}function Cl(e){return(e=la(e)).tag=3,e}function _l(e,t,n,r){var o=n.type.getDerivedStateFromError;if("function"==typeof o){var a=r.value;e.payload=function(){return o(a)},e.callback=function(){jl(t,n,r)}}var i=n.stateNode;null!==i&&"function"==typeof i.componentDidCatch&&(e.callback=function(){jl(t,n,r),"function"!=typeof o&&(null===Cc?Cc=new Set([this]):Cc.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var El=Error(a(461)),Pl=!1;function Fl(e,t,n,r){t.child=null===e?al(t,null,n,r):ol(t,e.child,n,r)}function Tl(e,t,n,r,o){n=n.render;var a=t.ref;if("ref"in r){var i={};for(var l in r)"ref"!==l&&(i[l]=r[l])}else i=r;return Eo(t),r=Ia(e,t,n,i,a,o),l=Ra(),null===e||Pl?(lo&&l&&ro(t),t.flags|=1,Fl(e,t,r,o),t.child):(Ma(e,t,o),Gl(e,t,o))}function Al(e,t,n,r,o){if(null===e){var a=n.type;return"function"!=typeof a||Mr(a)||void 0!==a.defaultProps||null!==n.compare?((e=Ur(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,Nl(e,t,a,r,o))}if(a=e.child,!Jl(e,o)){var i=a.memoizedProps;if((n=null!==(n=n.compare)?n:Jn)(i,r)&&e.ref===t.ref)return Gl(e,t,o)}return t.flags|=1,(e=$r(a,r)).ref=t.ref,e.return=t,t.child=e}function Nl(e,t,n,r,o){if(null!==e){var a=e.memoizedProps;if(Jn(a,r)&&e.ref===t.ref){if(Pl=!1,t.pendingProps=r=a,!Jl(e,o))return t.lanes=e.lanes,Gl(e,t,o);131072&e.flags&&(Pl=!0)}}return Ol(e,t,n,r,o)}function Il(e,t,n){var r=t.pendingProps,o=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(128&t.flags){if(r=null!==a?a.baseLanes|n:n,null!==e){for(o=t.child=e.child,a=0;null!==o;)a=a|o.lanes|o.childLanes,o=o.sibling;t.childLanes=a&~r}else t.childLanes=0,t.child=null;return Ll(e,t,r,n)}if(!(536870912&n))return t.lanes=t.childLanes=536870912,Ll(e,t,null!==a?a.baseLanes|n:n,n);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&qo(0,null!==a?a.cachePool:null),null!==a?ba(t,a):wa(),cl(t)}else null!==a?(qo(0,a.cachePool),ba(t,a),dl(),t.memoizedState=null):(null!==e&&qo(0,null),wa(),dl());return Fl(e,t,o,n),t.child}function Ll(e,t,n,r){var o=Ho();return o=null===o?null:{parent:Lo._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},null!==e&&qo(0,null),wa(),cl(t),null!==e&&Co(e,t,r,!0),null}function Dl(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!=typeof n&&"object"!=typeof n)throw Error(a(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function Ol(e,t,n,r,o){return Eo(t),n=Ia(e,t,n,r,void 0,o),r=Ra(),null===e||Pl?(lo&&r&&ro(t),t.flags|=1,Fl(e,t,n,o),t.child):(Ma(e,t,o),Gl(e,t,o))}function Rl(e,t,n,r,o,a){return Eo(t),t.updateQueue=null,n=Da(t,r,n,o),La(e),r=Ra(),null===e||Pl?(lo&&r&&ro(t),t.flags|=1,Fl(e,t,n,a),t.child):(Ma(e,t,a),Gl(e,t,a))}function Ml(e,t,n,r,o){if(Eo(t),null===t.stateNode){var a=Dr,i=n.contextType;"object"==typeof i&&null!==i&&(a=Po(i)),a=new n(r,a),t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,a.updater=hl,t.stateNode=a,a._reactInternals=t,(a=t.stateNode).props=r,a.state=t.memoizedState,a.refs={},aa(t),i=n.contextType,a.context="object"==typeof i&&null!==i?Po(i):Dr,a.state=t.memoizedState,"function"==typeof(i=n.getDerivedStateFromProps)&&(ml(t,n,i,r),a.state=t.memoizedState),"function"==typeof n.getDerivedStateFromProps||"function"==typeof a.getSnapshotBeforeUpdate||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||(i=a.state,"function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),i!==a.state&&hl.enqueueReplaceState(a,a.state,null),fa(t,r,a,o),pa(),a.state=t.memoizedState),"function"==typeof a.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){a=t.stateNode;var l=t.memoizedProps,s=bl(n,l);a.props=s;var c=a.context,d=n.contextType;i=Dr,"object"==typeof d&&null!==d&&(i=Po(d));var u=n.getDerivedStateFromProps;d="function"==typeof u||"function"==typeof a.getSnapshotBeforeUpdate,l=t.pendingProps!==l,d||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(l||c!==i)&&gl(t,a,r,i),oa=!1;var p=t.memoizedState;a.state=p,fa(t,r,a,o),pa(),c=t.memoizedState,l||p!==c||oa?("function"==typeof u&&(ml(t,n,u,r),c=t.memoizedState),(s=oa||xl(t,n,s,r,p,c,i))?(d||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.flags|=4194308)):("function"==typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=i,r=s):("function"==typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ia(e,t),d=bl(n,i=t.memoizedProps),a.props=d,u=t.pendingProps,p=a.context,c=n.contextType,s=Dr,"object"==typeof c&&null!==c&&(s=Po(c)),(c="function"==typeof(l=n.getDerivedStateFromProps)||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(i!==u||p!==s)&&gl(t,a,r,s),oa=!1,p=t.memoizedState,a.state=p,fa(t,r,a,o),pa();var f=t.memoizedState;i!==u||p!==f||oa||null!==e&&null!==e.dependencies&&_o(e.dependencies)?("function"==typeof l&&(ml(t,n,l,r),f=t.memoizedState),(d=oa||xl(t,n,d,r,p,f,s)||null!==e&&null!==e.dependencies&&_o(e.dependencies))?(c||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(r,f,s),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,f,s)),"function"==typeof a.componentDidUpdate&&(t.flags|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof a.componentDidUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),a.props=r,a.state=f,a.context=s,r=d):("function"!=typeof a.componentDidUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Dl(e,t),r=!!(128&t.flags),a||r?(a=t.stateNode,n=r&&"function"!=typeof n.getDerivedStateFromError?null:a.render(),t.flags|=1,null!==e&&r?(t.child=ol(t,e.child,null,o),t.child=ol(t,null,n,o)):Fl(e,t,n,o),t.memoizedState=a.state,e=t.child):e=Gl(e,t,o),e}function $l(e,t,n,r){return xo(),t.flags|=256,Fl(e,t,n,r),t.child}var Bl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ul(e){return{baseLanes:e,cachePool:Qo()}}function Wl(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=bc),e}function Vl(e,t,n){var r,o=t.pendingProps,i=!1,l=!!(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&!!(2&pl.current)),r&&(i=!0,t.flags&=-129),r=!!(32&t.flags),t.flags&=-33,null===e){if(lo){if(i?sl(t):dl(),lo){var s,c=io;if(s=c){e:{for(s=c,c=co;8!==s.nodeType;){if(!c){c=null;break e}if(null===(s=wu(s.nextSibling))){c=null;break e}}c=s}null!==c?(t.memoizedState={dehydrated:c,treeContext:null!==Jr?{id:Zr,overflow:eo}:null,retryLane:536870912,hydrationErrors:null},(s=Rr(18,null,null,0)).stateNode=c,s.return=t,t.child=s,ao=t,io=null,s=!0):s=!1}s||po(t)}if(null!==(c=t.memoizedState)&&null!==(c=c.dehydrated))return bu(c)?t.lanes=32:t.lanes=536870912,null;ul(t)}return c=o.children,o=o.fallback,i?(dl(),c=ql({mode:"hidden",children:c},i=t.mode),o=Wr(o,i,n,null),c.return=t,o.return=t,c.sibling=o,t.child=c,(i=t.child).memoizedState=Ul(n),i.childLanes=Wl(e,r,n),t.memoizedState=Bl,o):(sl(t),Hl(t,c))}if(null!==(s=e.memoizedState)&&null!==(c=s.dehydrated)){if(l)256&t.flags?(sl(t),t.flags&=-257,t=Ql(e,t,n)):null!==t.memoizedState?(dl(),t.child=e.child,t.flags|=128,t=null):(dl(),i=o.fallback,c=t.mode,o=ql({mode:"visible",children:o.children},c),(i=Wr(i,c,n,null)).flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,ol(t,e.child,null,n),(o=t.child).memoizedState=Ul(n),o.childLanes=Wl(e,r,n),t.memoizedState=Bl,t=i);else if(sl(t),bu(c)){if(r=c.nextSibling&&c.nextSibling.dataset)var d=r.dgst;r=d,(o=Error(a(419))).stack="",o.digest=r,bo({value:o,source:null,stack:null}),t=Ql(e,t,n)}else if(Pl||Co(e,t,n,!1),r=0!==(n&e.childLanes),Pl||r){if(null!==(r=ac)&&(0!==(o=0!==((o=42&(o=n&-n)?1:Fe(o))&(r.suspendedLanes|n))?0:o)&&o!==s.retryLane))throw s.retryLane=o,Nr(e,o),Rc(r,e,o),El;"$?"===c.data||Yc(),t=Ql(e,t,n)}else"$?"===c.data?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,io=wu(c.nextSibling),ao=t,lo=!0,so=null,co=!1,null!==e&&(Xr[Gr++]=Zr,Xr[Gr++]=eo,Xr[Gr++]=Jr,Zr=e.id,eo=e.overflow,Jr=t),(t=Hl(t,o.children)).flags|=4096);return t}return i?(dl(),i=o.fallback,c=t.mode,d=(s=e.child).sibling,(o=$r(s,{mode:"hidden",children:o.children})).subtreeFlags=65011712&s.subtreeFlags,null!==d?i=$r(d,i):(i=Wr(i,c,n,null)).flags|=2,i.return=t,o.return=t,o.sibling=i,t.child=o,o=i,i=t.child,null===(c=e.child.memoizedState)?c=Ul(n):(null!==(s=c.cachePool)?(d=Lo._currentValue,s=s.parent!==d?{parent:d,pool:d}:s):s=Qo(),c={baseLanes:c.baseLanes|n,cachePool:s}),i.memoizedState=c,i.childLanes=Wl(e,r,n),t.memoizedState=Bl,o):(sl(t),e=(n=e.child).sibling,(n=$r(n,{mode:"visible",children:o.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Hl(e,t){return(t=ql({mode:"visible",children:t},e.mode)).return=e,e.child=t}function ql(e,t){return(e=Rr(22,e,null,t)).lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ql(e,t,n){return ol(t,e.child,null,n),(e=Hl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Kl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),jo(e.return,t,n)}function Yl(e,t,n,r,o){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function Xl(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(Fl(e,t,r.children,n),2&(r=pl.current))r=1&r|2,t.flags|=128;else{if(null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Kl(e,n,t);else if(19===e.tag)Kl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(W(pl,r),o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===fl(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Yl(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===fl(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Yl(t,!0,n,null,a);break;case"together":Yl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),hc|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(Co(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=$r(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=$r(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Jl(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!_o(e))}function Zl(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Pl=!0;else{if(!(Jl(e,n)||128&t.flags))return Pl=!1,function(e,t,n){switch(t.tag){case 3:K(t,t.stateNode.containerInfo),ko(0,Lo,e.memoizedState.cache),xo();break;case 27:case 5:X(t);break;case 4:K(t,t.stateNode.containerInfo);break;case 10:ko(0,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(sl(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Vl(e,t,n):(sl(t),null!==(e=Gl(e,t,n))?e.sibling:null);sl(t);break;case 19:var o=!!(128&e.flags);if((r=0!==(n&t.childLanes))||(Co(e,t,n,!1),r=0!==(n&t.childLanes)),o){if(r)return Xl(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(pl,pl.current),r)break;return null;case 22:case 23:return t.lanes=0,Il(e,t,n);case 24:ko(0,Lo,e.memoizedState.cache)}return Gl(e,t,n)}(e,t,n);Pl=!!(131072&e.flags)}else Pl=!1,lo&&1048576&t.flags&&no(t,Yr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,o=r._init;if(r=o(r._payload),t.type=r,"function"!=typeof r){if(null!=r){if((o=r.$$typeof)===S){t.tag=11,t=Tl(null,t,r,e,n);break e}if(o===_){t.tag=14,t=Al(null,t,r,e,n);break e}}throw t=I(r)||r,Error(a(306,t,""))}Mr(r)?(e=bl(r,e),t.tag=1,t=Ml(null,t,r,e,n)):(t.tag=0,t=Ol(null,t,r,e,n))}return t;case 0:return Ol(e,t,t.type,t.pendingProps,n);case 1:return Ml(e,t,r=t.type,o=bl(r,t.pendingProps),n);case 3:e:{if(K(t,t.stateNode.containerInfo),null===e)throw Error(a(387));r=t.pendingProps;var i=t.memoizedState;o=i.element,ia(e,t),fa(t,r,null,n);var l=t.memoizedState;if(r=l.cache,ko(0,Lo,r),r!==i.cache&&zo(t,[Lo],n,!0),pa(),r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=$l(e,t,r,n);break e}if(r!==o){bo(o=Cr(Error(a(424)),t)),t=$l(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(io=wu(e.firstChild),ao=t,lo=!0,so=null,co=!0,n=al(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(xo(),r===o){t=Gl(e,t,n);break e}Fl(e,t,r,n)}t=t.child}return t;case 26:return Dl(e,t),null===e?(n=Fu(t.type,null,t.pendingProps,null))?t.memoizedState=n:lo||(n=t.type,e=t.pendingProps,(r=au(q.current).createElement(n))[Ie]=t,r[Le]=e,nu(r,n,e),Qe(r),t.stateNode=r):t.memoizedState=Fu(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return X(t),null===e&&lo&&(r=t.stateNode=ku(t.type,t.pendingProps,q.current),ao=t,co=!0,o=io,hu(t.type)?(yu=o,io=wu(r.firstChild)):io=o),Fl(e,t,t.pendingProps.children,n),Dl(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&lo&&((o=r=io)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Be])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(a=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(a!==o.rel||e.getAttribute("href")!==(null==o.href||""===o.href?null:o.href)||e.getAttribute("crossorigin")!==(null==o.crossOrigin?null:o.crossOrigin)||e.getAttribute("title")!==(null==o.title?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((a=e.getAttribute("src"))!==(null==o.src?null:o.src)||e.getAttribute("type")!==(null==o.type?null:o.type)||e.getAttribute("crossorigin")!==(null==o.crossOrigin?null:o.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var a=null==o.name?null:""+o.name;if("hidden"===o.type&&e.getAttribute("name")===a)return e}if(null===(e=wu(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,co))?(t.stateNode=r,ao=t,io=wu(r.firstChild),co=!1,o=!0):o=!1),o||po(t)),X(t),o=t.type,i=t.pendingProps,l=null!==e?e.memoizedProps:null,r=i.children,su(o,i)?r=null:null!==l&&su(o,l)&&(t.flags|=32),null!==t.memoizedState&&(o=Ia(e,t,Oa,null,null,n),Xu._currentValue=o),Dl(e,t),Fl(e,t,r,n),t.child;case 6:return null===e&&lo&&((e=n=io)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=wu(e.nextSibling)))return null}return e}(n,t.pendingProps,co))?(t.stateNode=n,ao=t,io=null,e=!0):e=!1),e||po(t)),null;case 13:return Vl(e,t,n);case 4:return K(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ol(t,null,r,n):Fl(e,t,r,n),t.child;case 11:return Tl(e,t,t.type,t.pendingProps,n);case 7:return Fl(e,t,t.pendingProps,n),t.child;case 8:case 12:return Fl(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ko(0,t.type,r.value),Fl(e,t,r.children,n),t.child;case 9:return o=t.type._context,r=t.pendingProps.children,Eo(t),r=r(o=Po(o)),t.flags|=1,Fl(e,t,r,n),t.child;case 14:return Al(e,t,t.type,t.pendingProps,n);case 15:return Nl(e,t,t.type,t.pendingProps,n);case 19:return Xl(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},null===e?((n=ql(r,n)).ref=t.ref,t.child=n,n.return=t,t=n):((n=$r(e.child,r)).ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Il(e,t,n);case 24:return Eo(t),r=Po(Lo),null===e?(null===(o=Ho())&&(o=ac,i=Do(),o.pooledCache=i,i.refCount++,null!==i&&(o.pooledCacheLanes|=n),o=i),t.memoizedState={parent:r,cache:o},aa(t),ko(0,Lo,o)):(0!==(e.lanes&n)&&(ia(e,t),fa(t,null,null,n),pa()),o=e.memoizedState,i=t.memoizedState,o.parent!==r?(o={parent:r,cache:r},t.memoizedState=o,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=o),ko(0,Lo,r)):(r=i.cache,ko(0,Lo,r),r!==o.cache&&zo(t,[Lo],n,!0))),Fl(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(a(156,t.tag))}function es(e){e.flags|=4}function ts(e,t){if("stylesheet"!==t.type||4&t.state.loading)e.flags&=-16777217;else if(e.flags|=16777216,!Wu(t)){if(null!==(t=il.current)&&((4194048&lc)===lc?null!==ll:(62914560&lc)!==lc&&!(536870912&lc)||t!==ll))throw ta=Go,Yo;e.flags|=8192}}function ns(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?ze():536870912,e.lanes|=t,wc|=t)}function rs(e,t){if(!lo)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function os(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=65011712&o.subtreeFlags,r|=65011712&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function as(e,t,n){var r=t.pendingProps;switch(oo(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return os(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),So(Lo),Y(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(ho(t)?es(t):null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,go())),os(t),null;case 26:return n=t.memoizedState,null===e?(es(t),null!==n?(os(t),ts(t,n)):(os(t),t.flags&=-16777217)):n?n!==e.memoizedState?(es(t),os(t),ts(t,n)):(os(t),t.flags&=-16777217):(e.memoizedProps!==r&&es(t),os(t),t.flags&=-16777217),null;case 27:G(t),n=q.current;var o=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==r&&es(t);else{if(!r){if(null===t.stateNode)throw Error(a(166));return os(t),null}e=V.current,ho(t)?fo(t):(e=ku(o,r,n),t.stateNode=e,es(t))}return os(t),null;case 5:if(G(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&es(t);else{if(!r){if(null===t.stateNode)throw Error(a(166));return os(t),null}if(e=V.current,ho(t))fo(t);else{switch(o=au(q.current),e){case 1:e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":(e=o.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"==typeof r.is?o.createElement("select",{is:r.is}):o.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e="string"==typeof r.is?o.createElement(n,{is:r.is}):o.createElement(n)}}e[Ie]=t,e[Le]=r;e:for(o=t.child;null!==o;){if(5===o.tag||6===o.tag)e.appendChild(o.stateNode);else if(4!==o.tag&&27!==o.tag&&null!==o.child){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;null===o.sibling;){if(null===o.return||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=e;e:switch(nu(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&es(t)}}return os(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&es(t);else{if("string"!=typeof r&&null===t.stateNode)throw Error(a(166));if(e=q.current,ho(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(o=ao))switch(o.tag){case 27:case 5:r=o.memoizedProps}e[Ie]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||Jd(e.nodeValue,n)))||po(t)}else(e=au(e).createTextNode(r))[Ie]=t,t.stateNode=e}return os(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(o=ho(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(a(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(a(317));o[Ie]=t}else xo(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4;os(t),o=!1}else o=go(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return 256&t.flags?(ul(t),t):(ul(t),null)}if(ul(t),128&t.flags)return t.lanes=n,t;if(n=null!==r,e=null!==e&&null!==e.memoizedState,n){o=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(o=r.alternate.memoizedState.cachePool.pool);var i=null;null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(i=r.memoizedState.cachePool.pool),i!==o&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),ns(t,t.updateQueue),os(t),null;case 4:return Y(),null===e&&Ud(t.stateNode.containerInfo),os(t),null;case 10:return So(t.type),os(t),null;case 19:if(U(pl),null===(o=t.memoizedState))return os(t),null;if(r=!!(128&t.flags),null===(i=o.rendering))if(r)rs(o,!1);else{if(0!==mc||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(i=fl(e))){for(t.flags|=128,rs(o,!1),e=i.updateQueue,t.updateQueue=e,ns(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Br(n,e),n=n.sibling;return W(pl,1&pl.current|2),t.child}e=e.sibling}null!==o.tail&&re()>jc&&(t.flags|=128,r=!0,rs(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=fl(i))){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,ns(t,e),rs(o,!0),null===o.tail&&"hidden"===o.tailMode&&!i.alternate&&!lo)return os(t),null}else 2*re()-o.renderingStartTime>jc&&536870912!==n&&(t.flags|=128,r=!0,rs(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(null!==(e=o.last)?e.sibling=i:t.child=i,o.last=i)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=re(),t.sibling=null,e=pl.current,W(pl,r?1&e|2:1&e),t):(os(t),null);case 22:case 23:return ul(t),ya(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?!!(536870912&n)&&!(128&t.flags)&&(os(t),6&t.subtreeFlags&&(t.flags|=8192)):os(t),null!==(n=t.updateQueue)&&ns(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&U(Vo),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),So(Lo),os(t),null;case 25:case 30:return null}throw Error(a(156,t.tag))}function is(e,t){switch(oo(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return So(Lo),Y(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return G(t),null;case 13:if(ul(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));xo()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return U(pl),null;case 4:return Y(),null;case 10:return So(t.type),null;case 22:case 23:return ul(t),ya(),null!==e&&U(Vo),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return So(Lo),null;default:return null}}function ls(e,t){switch(oo(t),t.tag){case 3:So(Lo),Y();break;case 26:case 27:case 5:G(t);break;case 4:Y();break;case 13:ul(t);break;case 19:U(pl);break;case 10:So(t.type);break;case 22:case 23:ul(t),ya(),null!==e&&U(Vo);break;case 24:So(Lo)}}function ss(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var o=r.next;n=o;do{if((n.tag&e)===e){r=void 0;var a=n.create,i=n.inst;r=a(),i.destroy=r}n=n.next}while(n!==o)}}catch(l){pd(t,t.return,l)}}function cs(e,t,n){try{var r=t.updateQueue,o=null!==r?r.lastEffect:null;if(null!==o){var a=o.next;r=a;do{if((r.tag&e)===e){var i=r.inst,l=i.destroy;if(void 0!==l){i.destroy=void 0,o=t;var s=n,c=l;try{c()}catch(d){pd(o,s,d)}}}r=r.next}while(r!==a)}}catch(d){pd(t,t.return,d)}}function ds(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{ha(t,n)}catch(r){pd(e,e.return,r)}}}function us(e,t,n){n.props=bl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){pd(e,t,r)}}function ps(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"==typeof n?e.refCleanup=n(r):n.current=r}}catch(o){pd(e,t,o)}}function fs(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"==typeof r)try{r()}catch(o){pd(e,t,o)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"==typeof n)try{n(null)}catch(a){pd(e,t,a)}else n.current=null}function ms(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(o){pd(e,e.return,o)}}function hs(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,i=null,l=null,s=null,c=null,d=null,u=null;for(m in n){var p=n[m];if(n.hasOwnProperty(m)&&null!=p)switch(m){case"checked":case"value":break;case"defaultValue":c=p;default:r.hasOwnProperty(m)||eu(e,t,m,null,r,p)}}for(var f in r){var m=r[f];if(p=n[f],r.hasOwnProperty(f)&&(null!=m||null!=p))switch(f){case"type":i=m;break;case"name":o=m;break;case"checked":d=m;break;case"defaultChecked":u=m;break;case"value":l=m;break;case"defaultValue":s=m;break;case"children":case"dangerouslySetInnerHTML":if(null!=m)throw Error(a(137,t));break;default:m!==p&&eu(e,t,f,m,r,p)}}return void bt(e,l,s,c,d,u,i,o);case"select":for(i in m=l=s=f=null,n)if(c=n[i],n.hasOwnProperty(i)&&null!=c)switch(i){case"value":break;case"multiple":m=c;default:r.hasOwnProperty(i)||eu(e,t,i,null,r,c)}for(o in r)if(i=r[o],c=n[o],r.hasOwnProperty(o)&&(null!=i||null!=c))switch(o){case"value":f=i;break;case"defaultValue":s=i;break;case"multiple":l=i;default:i!==c&&eu(e,t,o,i,r,c)}return t=s,n=l,r=m,void(null!=f?vt(e,!!n,f,!1):!!r!=!!n&&(null!=t?vt(e,!!n,t,!0):vt(e,!!n,n?[]:"",!1)));case"textarea":for(s in m=f=null,n)if(o=n[s],n.hasOwnProperty(s)&&null!=o&&!r.hasOwnProperty(s))switch(s){case"value":case"children":break;default:eu(e,t,s,null,r,o)}for(l in r)if(o=r[l],i=n[l],r.hasOwnProperty(l)&&(null!=o||null!=i))switch(l){case"value":f=o;break;case"defaultValue":m=o;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=o)throw Error(a(91));break;default:o!==i&&eu(e,t,l,o,r,i)}return void kt(e,f,m);case"option":for(var h in n)if(f=n[h],n.hasOwnProperty(h)&&null!=f&&!r.hasOwnProperty(h))if("selected"===h)e.selected=!1;else eu(e,t,h,null,r,f);for(c in r)if(f=r[c],m=n[c],r.hasOwnProperty(c)&&f!==m&&(null!=f||null!=m))if("selected"===c)e.selected=f&&"function"!=typeof f&&"symbol"!=typeof f;else eu(e,t,c,f,r,m);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)f=n[x],n.hasOwnProperty(x)&&null!=f&&!r.hasOwnProperty(x)&&eu(e,t,x,null,r,f);for(d in r)if(f=r[d],m=n[d],r.hasOwnProperty(d)&&f!==m&&(null!=f||null!=m))switch(d){case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(a(137,t));break;default:eu(e,t,d,f,r,m)}return;default:if(Et(t)){for(var g in n)f=n[g],n.hasOwnProperty(g)&&void 0!==f&&!r.hasOwnProperty(g)&&tu(e,t,g,void 0,r,f);for(u in r)f=r[u],m=n[u],!r.hasOwnProperty(u)||f===m||void 0===f&&void 0===m||tu(e,t,u,f,r,m);return}}for(var b in n)f=n[b],n.hasOwnProperty(b)&&null!=f&&!r.hasOwnProperty(b)&&eu(e,t,b,null,r,f);for(p in r)f=r[p],m=n[p],!r.hasOwnProperty(p)||f===m||null==f&&null==m||eu(e,t,p,f,r,m)}(r,e.type,n,t),r[Le]=t}catch(o){pd(e,e.return,o)}}function xs(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&hu(e.type)||4===e.tag}function gs(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||xs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&hu(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function bs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=Zd));else if(4!==r&&(27===r&&hu(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(bs(e,t,n),e=e.sibling;null!==e;)bs(e,t,n),e=e.sibling}function ws(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&hu(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(ws(e,t,n),e=e.sibling;null!==e;)ws(e,t,n),e=e.sibling}function ys(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);nu(t,r,n),t[Ie]=e,t[Le]=n}catch(a){pd(e,e.return,a)}}var vs=!1,ks=!1,Ss=!1,js="function"==typeof WeakSet?WeakSet:Set,zs=null;function Cs(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Ms(e,n),4&r&&ss(5,n);break;case 1:if(Ms(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(i){pd(n,n.return,i)}else{var o=bl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){pd(n,n.return,l)}}64&r&&ds(n),512&r&&ps(n,n.return);break;case 3:if(Ms(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{ha(e,t)}catch(i){pd(n,n.return,i)}}break;case 27:null===t&&4&r&&ys(n);case 26:case 5:Ms(e,n),null===t&&4&r&&ms(n),512&r&&ps(n,n.return);break;case 12:Ms(e,n);break;case 13:Ms(e,n),4&r&&As(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$?"!==e.data||"complete"===n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=xd.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||vs)){t=null!==t&&null!==t.memoizedState||ks,o=vs;var a=ks;vs=r,(ks=t)&&!a?Bs(e,n,!!(8772&n.subtreeFlags)):Ms(e,n),vs=o,ks=a}break;case 30:break;default:Ms(e,n)}}function _s(e){var t=e.alternate;null!==t&&(e.alternate=null,_s(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Ue(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Es=null,Ps=!1;function Fs(e,t,n){for(n=n.child;null!==n;)Ts(e,t,n),n=n.sibling}function Ts(e,t,n){if(fe&&"function"==typeof fe.onCommitFiberUnmount)try{fe.onCommitFiberUnmount(pe,n)}catch(a){}switch(n.tag){case 26:ks||fs(n,t),Fs(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:ks||fs(n,t);var r=Es,o=Ps;hu(n.type)&&(Es=n.stateNode,Ps=!1),Fs(e,t,n),Su(n.stateNode),Es=r,Ps=o;break;case 5:ks||fs(n,t);case 6:if(r=Es,o=Ps,Es=null,Fs(e,t,n),Ps=o,null!==(Es=r))if(Ps)try{(9===Es.nodeType?Es.body:"HTML"===Es.nodeName?Es.ownerDocument.body:Es).removeChild(n.stateNode)}catch(i){pd(n,t,i)}else try{Es.removeChild(n.stateNode)}catch(i){pd(n,t,i)}break;case 18:null!==Es&&(Ps?(xu(9===(e=Es).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Pp(e)):xu(Es,n.stateNode));break;case 4:r=Es,o=Ps,Es=n.stateNode.containerInfo,Ps=!0,Fs(e,t,n),Es=r,Ps=o;break;case 0:case 11:case 14:case 15:ks||cs(2,n,t),ks||cs(4,n,t),Fs(e,t,n);break;case 1:ks||(fs(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount&&us(n,t,r)),Fs(e,t,n);break;case 21:Fs(e,t,n);break;case 22:ks=(r=ks)||null!==n.memoizedState,Fs(e,t,n),ks=r;break;default:Fs(e,t,n)}}function As(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{Pp(e)}catch(n){pd(t,t.return,n)}}function Ns(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new js),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new js),t;default:throw Error(a(435,e.tag))}}(e);t.forEach(function(t){var r=gd.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}function Is(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r],i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 27:if(hu(s.type)){Es=s.stateNode,Ps=!1;break e}break;case 5:Es=s.stateNode,Ps=!1;break e;case 3:case 4:Es=s.stateNode.containerInfo,Ps=!0;break e}s=s.return}if(null===Es)throw Error(a(160));Ts(i,l,o),Es=null,Ps=!1,null!==(i=o.alternate)&&(i.return=null),o.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)Ds(t,e),t=t.sibling}var Ls=null;function Ds(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Is(t,e),Os(e),4&r&&(cs(3,e,e.return),ss(3,e),cs(5,e,e.return));break;case 1:Is(t,e),Os(e),512&r&&(ks||null===n||fs(n,n.return)),64&r&&vs&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var o=Ls;if(Is(t,e),Os(e),512&r&&(ks||null===n||fs(n,n.return)),4&r){var i=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(r){case"title":(!(i=o.getElementsByTagName("title")[0])||i[Be]||i[Ie]||"http://www.w3.org/2000/svg"===i.namespaceURI||i.hasAttribute("itemprop"))&&(i=o.createElement(r),o.head.insertBefore(i,o.querySelector("head > title"))),nu(i,r,n),i[Ie]=e,Qe(i),r=i;break e;case"link":var l=Bu("link","href",o).get(r+(n.href||""));if(l)for(var s=0;s<l.length;s++)if((i=l[s]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&i.getAttribute("rel")===(null==n.rel?null:n.rel)&&i.getAttribute("title")===(null==n.title?null:n.title)&&i.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){l.splice(s,1);break t}nu(i=o.createElement(r),r,n),o.head.appendChild(i);break;case"meta":if(l=Bu("meta","content",o).get(r+(n.content||"")))for(s=0;s<l.length;s++)if((i=l[s]).getAttribute("content")===(null==n.content?null:""+n.content)&&i.getAttribute("name")===(null==n.name?null:n.name)&&i.getAttribute("property")===(null==n.property?null:n.property)&&i.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&i.getAttribute("charset")===(null==n.charSet?null:n.charSet)){l.splice(s,1);break t}nu(i=o.createElement(r),r,n),o.head.appendChild(i);break;default:throw Error(a(468,r))}i[Ie]=e,Qe(i),r=i}e.stateNode=r}else Uu(o,e.type,e.stateNode);else e.stateNode=Du(o,r,e.memoizedProps);else i!==r?(null===i?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):i.count--,null===r?Uu(o,e.type,e.stateNode):Du(o,r,e.memoizedProps)):null===r&&null!==e.stateNode&&hs(e,e.memoizedProps,n.memoizedProps)}break;case 27:Is(t,e),Os(e),512&r&&(ks||null===n||fs(n,n.return)),null!==n&&4&r&&hs(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Is(t,e),Os(e),512&r&&(ks||null===n||fs(n,n.return)),32&e.flags){o=e.stateNode;try{jt(o,"")}catch(m){pd(e,e.return,m)}}4&r&&null!=e.stateNode&&hs(e,o=e.memoizedProps,null!==n?n.memoizedProps:o),1024&r&&(Ss=!0);break;case 6:if(Is(t,e),Os(e),4&r){if(null===e.stateNode)throw Error(a(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(m){pd(e,e.return,m)}}break;case 3:if($u=null,o=Ls,Ls=Cu(t.containerInfo),Is(t,e),Ls=o,Os(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Pp(t.containerInfo)}catch(m){pd(e,e.return,m)}Ss&&(Ss=!1,Rs(e));break;case 4:r=Ls,Ls=Cu(e.stateNode.containerInfo),Is(t,e),Os(e),Ls=r;break;case 12:default:Is(t,e),Os(e);break;case 13:Is(t,e),Os(e),8192&e.child.flags&&null!==e.memoizedState!=(null!==n&&null!==n.memoizedState)&&(Sc=re()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Ns(e,r)));break;case 22:o=null!==e.memoizedState;var c=null!==n&&null!==n.memoizedState,d=vs,u=ks;if(vs=d||o,ks=u||c,Is(t,e),ks=u,vs=d,Os(e),8192&r)e:for(t=e.stateNode,t._visibility=o?-2&t._visibility:1|t._visibility,o&&(null===n||c||vs||ks||$s(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){c=n=t;try{if(i=c.stateNode,o)"function"==typeof(l=i.style).setProperty?l.setProperty("display","none","important"):l.display="none";else{s=c.stateNode;var p=c.memoizedProps.style,f=null!=p&&p.hasOwnProperty("display")?p.display:null;s.style.display=null==f||"boolean"==typeof f?"":(""+f).trim()}}catch(m){pd(c,c.return,m)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=o?"":c.memoizedProps}catch(m){pd(c,c.return,m)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Ns(e,n))));break;case 19:Is(t,e),Os(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Ns(e,r)));case 30:case 21:}}function Os(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(xs(r)){n=r;break}r=r.return}if(null==n)throw Error(a(160));switch(n.tag){case 27:var o=n.stateNode;ws(e,gs(e),o);break;case 5:var i=n.stateNode;32&n.flags&&(jt(i,""),n.flags&=-33),ws(e,gs(e),i);break;case 3:case 4:var l=n.stateNode.containerInfo;bs(e,gs(e),l);break;default:throw Error(a(161))}}catch(s){pd(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Rs(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Rs(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Ms(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Cs(e,t.alternate,t),t=t.sibling}function $s(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:cs(4,t,t.return),$s(t);break;case 1:fs(t,t.return);var n=t.stateNode;"function"==typeof n.componentWillUnmount&&us(t,t.return,n),$s(t);break;case 27:Su(t.stateNode);case 26:case 5:fs(t,t.return),$s(t);break;case 22:null===t.memoizedState&&$s(t);break;default:$s(t)}e=e.sibling}}function Bs(e,t,n){for(n=n&&!!(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,o=e,a=t,i=a.flags;switch(a.tag){case 0:case 11:case 15:Bs(o,a,n),ss(4,a);break;case 1:if(Bs(o,a,n),"function"==typeof(o=(r=a).stateNode).componentDidMount)try{o.componentDidMount()}catch(c){pd(r,r.return,c)}if(null!==(o=(r=a).updateQueue)){var l=r.stateNode;try{var s=o.shared.hiddenCallbacks;if(null!==s)for(o.shared.hiddenCallbacks=null,o=0;o<s.length;o++)ma(s[o],l)}catch(c){pd(r,r.return,c)}}n&&64&i&&ds(a),ps(a,a.return);break;case 27:ys(a);case 26:case 5:Bs(o,a,n),n&&null===r&&4&i&&ms(a),ps(a,a.return);break;case 12:Bs(o,a,n);break;case 13:Bs(o,a,n),n&&4&i&&As(o,a);break;case 22:null===a.memoizedState&&Bs(o,a,n),ps(a,a.return);break;case 30:break;default:Bs(o,a,n)}t=t.sibling}}function Us(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Oo(n))}function Ws(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Oo(e))}function Vs(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Hs(e,t,n,r),t=t.sibling}function Hs(e,t,n,r){var o=t.flags;switch(t.tag){case 0:case 11:case 15:Vs(e,t,n,r),2048&o&&ss(9,t);break;case 1:case 13:default:Vs(e,t,n,r);break;case 3:Vs(e,t,n,r),2048&o&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Oo(e)));break;case 12:if(2048&o){Vs(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,i=a.id,l=a.onPostCommit;"function"==typeof l&&l(i,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(s){pd(t,t.return,s)}}else Vs(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,i=t.alternate,null!==t.memoizedState?2&a._visibility?Vs(e,t,n,r):Qs(e,t):2&a._visibility?Vs(e,t,n,r):(a._visibility|=2,qs(e,t,n,r,!!(10256&t.subtreeFlags))),2048&o&&Us(i,t);break;case 24:Vs(e,t,n,r),2048&o&&Ws(t.alternate,t)}}function qs(e,t,n,r,o){for(o=o&&!!(10256&t.subtreeFlags),t=t.child;null!==t;){var a=e,i=t,l=n,s=r,c=i.flags;switch(i.tag){case 0:case 11:case 15:qs(a,i,l,s,o),ss(8,i);break;case 23:break;case 22:var d=i.stateNode;null!==i.memoizedState?2&d._visibility?qs(a,i,l,s,o):Qs(a,i):(d._visibility|=2,qs(a,i,l,s,o)),o&&2048&c&&Us(i.alternate,i);break;case 24:qs(a,i,l,s,o),o&&2048&c&&Ws(i.alternate,i);break;default:qs(a,i,l,s,o)}t=t.sibling}}function Qs(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,o=r.flags;switch(r.tag){case 22:Qs(n,r),2048&o&&Us(r.alternate,r);break;case 24:Qs(n,r),2048&o&&Ws(r.alternate,r);break;default:Qs(n,r)}t=t.sibling}}var Ks=8192;function Ys(e){if(e.subtreeFlags&Ks)for(e=e.child;null!==e;)Xs(e),e=e.sibling}function Xs(e){switch(e.tag){case 26:Ys(e),e.flags&Ks&&null!==e.memoizedState&&function(e,t,n){if(null===Vu)throw Error(a(475));var r=Vu;if(!("stylesheet"!==t.type||"string"==typeof n.media&&!1===matchMedia(n.media).matches||4&t.state.loading)){if(null===t.instance){var o=Tu(n.href),i=e.querySelector(Au(o));if(i)return null!==(e=i._p)&&"object"==typeof e&&"function"==typeof e.then&&(r.count++,r=qu.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=i,void Qe(i);i=e.ownerDocument||e,n=Nu(n),(o=ju.get(o))&&Ru(n,o),Qe(i=i.createElement("link"));var l=i;l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),nu(i,"link",n),t.instance=i}null===r.stylesheets&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&!(3&t.state.loading)&&(r.count++,t=qu.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}(Ls,e.memoizedState,e.memoizedProps);break;case 5:default:Ys(e);break;case 3:case 4:var t=Ls;Ls=Cu(e.stateNode.containerInfo),Ys(e),Ls=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=Ks,Ks=16777216,Ys(e),Ks=t):Ys(e))}}function Gs(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Js(e){var t=e.deletions;if(16&e.flags){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];zs=r,tc(r,e)}Gs(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Zs(e),e=e.sibling}function Zs(e){switch(e.tag){case 0:case 11:case 15:Js(e),2048&e.flags&&cs(9,e,e.return);break;case 3:case 12:default:Js(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,ec(e)):Js(e)}}function ec(e){var t=e.deletions;if(16&e.flags){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];zs=r,tc(r,e)}Gs(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:cs(8,t,t.return),ec(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,ec(t));break;default:ec(t)}e=e.sibling}}function tc(e,t){for(;null!==zs;){var n=zs;switch(n.tag){case 0:case 11:case 15:cs(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Oo(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,zs=r;else e:for(n=e;null!==zs;){var o=(r=zs).sibling,a=r.return;if(_s(r),r===n){zs=null;break e}if(null!==o){o.return=a,zs=o;break e}zs=a}}}var nc={getCacheForType:function(e){var t=Po(Lo),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n}},rc="function"==typeof WeakMap?WeakMap:Map,oc=0,ac=null,ic=null,lc=0,sc=0,cc=null,dc=!1,uc=!1,pc=!1,fc=0,mc=0,hc=0,xc=0,gc=0,bc=0,wc=0,yc=null,vc=null,kc=!1,Sc=0,jc=1/0,zc=null,Cc=null,_c=0,Ec=null,Pc=null,Fc=0,Tc=0,Ac=null,Nc=null,Ic=0,Lc=null;function Dc(){if(2&oc&&0!==lc)return lc&-lc;if(null!==D.T){return 0!==$o?$o:Td()}return Ae()}function Oc(){0===bc&&(bc=536870912&lc&&!lo?536870912:je());var e=il.current;return null!==e&&(e.flags|=32),bc}function Rc(e,t,n){(e!==ac||2!==sc&&9!==sc)&&null===e.cancelPendingCommit||(Hc(e,0),Uc(e,lc,bc,!1)),_e(e,n),2&oc&&e===ac||(e===ac&&(!(2&oc)&&(xc|=n),4===mc&&Uc(e,lc,bc,!1)),jd(e))}function Mc(e,t,n){if(6&oc)throw Error(a(327));for(var r=!n&&!(124&t)&&0===(t&e.expiredLanes)||ke(e,t),o=r?function(e,t){var n=oc;oc|=2;var r=Qc(),o=Kc();ac!==e||lc!==t?(zc=null,jc=re()+500,Hc(e,t)):uc=ke(e,t);e:for(;;)try{if(0!==sc&&null!==ic){t=ic;var i=cc;t:switch(sc){case 1:sc=0,cc=null,td(e,t,i,1);break;case 2:case 9:if(Jo(i)){sc=0,cc=null,ed(t);break}t=function(){2!==sc&&9!==sc||ac!==e||(sc=7),jd(e)},i.then(t,t);break e;case 3:sc=7;break e;case 4:sc=5;break e;case 7:Jo(i)?(sc=0,cc=null,ed(t)):(sc=0,cc=null,td(e,t,i,7));break;case 5:var l=null;switch(ic.tag){case 26:l=ic.memoizedState;case 5:case 27:var s=ic;if(!l||Wu(l)){sc=0,cc=null;var c=s.sibling;if(null!==c)ic=c;else{var d=s.return;null!==d?(ic=d,nd(d)):ic=null}break t}}sc=0,cc=null,td(e,t,i,5);break;case 6:sc=0,cc=null,td(e,t,i,6);break;case 8:Vc(),mc=6;break e;default:throw Error(a(462))}}Jc();break}catch(u){qc(e,u)}return vo=yo=null,D.H=r,D.A=o,oc=n,null!==ic?0:(ac=null,lc=0,Fr(),mc)}(e,t):Xc(e,t,!0),i=r;;){if(0===o){uc&&!r&&Uc(e,t,0,!1);break}if(n=e.current.alternate,!i||Bc(n)){if(2===o){if(i=t,e.errorRecoveryDisabledLanes&i)var l=0;else l=0!==(l=-536870913&e.pendingLanes)?l:536870912&l?536870912:0;if(0!==l){t=l;e:{var s=e;o=yc;var c=s.current.memoizedState.isDehydrated;if(c&&(Hc(s,l).flags|=256),2!==(l=Xc(s,l,!1))){if(pc&&!c){s.errorRecoveryDisabledLanes|=i,xc|=i,o=4;break e}i=vc,vc=o,null!==i&&(null===vc?vc=i:vc.push.apply(vc,i))}o=l}if(i=!1,2!==o)continue}}if(1===o){Hc(e,0),Uc(e,t,0,!0);break}e:{switch(r=e,i=o){case 0:case 1:throw Error(a(345));case 4:if((4194048&t)!==t)break;case 6:Uc(r,t,bc,!dc);break e;case 2:vc=null;break;case 3:case 5:break;default:throw Error(a(329))}if((62914560&t)===t&&10<(o=Sc+300-re())){if(Uc(r,t,bc,!dc),0!==ve(r,0,!0))break e;r.timeoutHandle=du($c.bind(null,r,n,vc,zc,kc,t,bc,xc,wc,dc,i,2,-0,0),o)}else $c(r,n,vc,zc,kc,t,bc,xc,wc,dc,i,0,-0,0)}break}o=Xc(e,t,!1),i=!1}jd(e)}function $c(e,t,n,r,o,i,l,s,c,d,u,p,f,m){if(e.timeoutHandle=-1,(8192&(p=t.subtreeFlags)||!(16785408&~p))&&(Vu={stylesheets:null,count:0,unsuspend:Hu},Xs(t),null!==(p=function(){if(null===Vu)throw Error(a(475));var e=Vu;return e.stylesheets&&0===e.count&&Ku(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Ku(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=p(od.bind(null,e,t,i,n,r,o,l,s,c,u,1,f,m)),void Uc(e,i,l,!d);od(e,t,i,n,r,o,l,s,c)}function Bc(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!Gn(a(),o))return!1}catch(i){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Uc(e,t,n,r){t&=~gc,t&=~xc,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var o=t;0<o;){var a=31-he(o),i=1<<a;r[a]=-1,o&=~i}0!==n&&Ee(e,n,t)}function Wc(){return!!(6&oc)||(zd(0),!1)}function Vc(){if(null!==ic){if(0===sc)var e=ic.return;else vo=yo=null,$a(e=ic),Gi=null,Ji=0,e=ic;for(;null!==e;)ls(e.alternate,e),e=e.return;ic=null}}function Hc(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,uu(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Vc(),ac=e,ic=n=$r(e.current,null),lc=t,sc=0,cc=null,dc=!1,uc=ke(e,t),pc=!1,wc=bc=gc=xc=hc=mc=0,vc=yc=null,kc=!1,8&t&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var o=31-he(r),a=1<<o;t|=e[o],r&=~a}return fc=t,Fr(),n}function qc(e,t){ka=null,D.H=Qi,t===Ko||t===Xo?(t=na(),sc=3):t===Yo?(t=na(),sc=4):sc=t===El?8:null!==t&&"object"==typeof t&&"function"==typeof t.then?6:1,cc=t,null===ic&&(mc=1,Sl(e,Cr(t,e.current)))}function Qc(){var e=D.H;return D.H=Qi,null===e?Qi:e}function Kc(){var e=D.A;return D.A=nc,e}function Yc(){mc=4,dc||(4194048&lc)!==lc&&null!==il.current||(uc=!0),!(134217727&hc)&&!(134217727&xc)||null===ac||Uc(ac,lc,bc,!1)}function Xc(e,t,n){var r=oc;oc|=2;var o=Qc(),a=Kc();ac===e&&lc===t||(zc=null,Hc(e,t)),t=!1;var i=mc;e:for(;;)try{if(0!==sc&&null!==ic){var l=ic,s=cc;switch(sc){case 8:Vc(),i=6;break e;case 3:case 2:case 9:case 6:null===il.current&&(t=!0);var c=sc;if(sc=0,cc=null,td(e,l,s,c),n&&uc){i=0;break e}break;default:c=sc,sc=0,cc=null,td(e,l,s,c)}}Gc(),i=mc;break}catch(d){qc(e,d)}return t&&e.shellSuspendCounter++,vo=yo=null,oc=r,D.H=o,D.A=a,null===ic&&(ac=null,lc=0,Fr()),i}function Gc(){for(;null!==ic;)Zc(ic)}function Jc(){for(;null!==ic&&!te();)Zc(ic)}function Zc(e){var t=Zl(e.alternate,e,fc);e.memoizedProps=e.pendingProps,null===t?nd(e):ic=t}function ed(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Rl(n,t,t.pendingProps,t.type,void 0,lc);break;case 11:t=Rl(n,t,t.pendingProps,t.type.render,t.ref,lc);break;case 5:$a(t);default:ls(n,t),t=Zl(n,t=ic=Br(t,fc),fc)}e.memoizedProps=e.pendingProps,null===t?nd(e):ic=t}function td(e,t,n,r){vo=yo=null,$a(t),Gi=null,Ji=0;var o=t.return;try{if(function(e,t,n,r,o){if(n.flags|=32768,null!==r&&"object"==typeof r&&"function"==typeof r.then){if(null!==(t=n.alternate)&&Co(t,n,o,!0),null!==(n=il.current)){switch(n.tag){case 13:return null===ll?Yc():null===n.alternate&&0===mc&&(mc=3),n.flags&=-257,n.flags|=65536,n.lanes=o,r===Go?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),fd(e,r,o)),!1;case 22:return n.flags|=65536,r===Go?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),fd(e,r,o)),!1}throw Error(a(435,n.tag))}return fd(e,r,o),Yc(),!1}if(lo)return null!==(t=il.current)?(!(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=o,r!==uo&&bo(Cr(e=Error(a(422),{cause:r}),n))):(r!==uo&&bo(Cr(t=Error(a(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,o&=-o,e.lanes|=o,r=Cr(r,n),da(e,o=zl(e.stateNode,r,o)),4!==mc&&(mc=2)),!1;var i=Error(a(520),{cause:r});if(i=Cr(i,n),null===yc?yc=[i]:yc.push(i),4!==mc&&(mc=2),null===t)return!0;r=Cr(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,da(n,e=zl(n.stateNode,r,e)),!1;case 1:if(t=n.type,i=n.stateNode,!(128&n.flags||"function"!=typeof t.getDerivedStateFromError&&(null===i||"function"!=typeof i.componentDidCatch||null!==Cc&&Cc.has(i))))return n.flags|=65536,o&=-o,n.lanes|=o,_l(o=Cl(o),e,n,r),da(n,o),!1}n=n.return}while(null!==n);return!1}(e,o,t,n,lc))return mc=1,Sl(e,Cr(n,e.current)),void(ic=null)}catch(i){if(null!==o)throw ic=o,i;return mc=1,Sl(e,Cr(n,e.current)),void(ic=null)}32768&t.flags?(lo||1===r?e=!0:uc||536870912&lc?e=!1:(dc=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=il.current)&&13===r.tag&&(r.flags|=16384))),rd(t,e)):nd(t)}function nd(e){var t=e;do{if(32768&t.flags)return void rd(t,dc);e=t.return;var n=as(t.alternate,t,fc);if(null!==n)return void(ic=n);if(null!==(t=t.sibling))return void(ic=t);ic=t=e}while(null!==t);0===mc&&(mc=5)}function rd(e,t){do{var n=is(e.alternate,e);if(null!==n)return n.flags&=32767,void(ic=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(ic=e);ic=e=n}while(null!==e);mc=6,ic=null}function od(e,t,n,r,o,i,l,s,c){e.cancelPendingCommit=null;do{cd()}while(0!==_c);if(6&oc)throw Error(a(327));if(null!==t){if(t===e.current)throw Error(a(177));if(i=t.lanes|t.childLanes,function(e,t,n,r,o,a){var i=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,c=e.hiddenUpdates;for(n=i&~n;0<n;){var d=31-he(n),u=1<<d;l[d]=0,s[d]=-1;var p=c[d];if(null!==p)for(c[d]=null,d=0;d<p.length;d++){var f=p[d];null!==f&&(f.lane&=-536870913)}n&=~u}0!==r&&Ee(e,r,0),0!==a&&0===o&&0!==e.tag&&(e.suspendedLanes|=a&~(i&~t))}(e,n,i|=Pr,l,s,c),e===ac&&(ic=ac=null,lc=0),Pc=t,Ec=e,Fc=n,Tc=i,Ac=o,Nc=r,10256&t.subtreeFlags||10256&t.flags?(e.callbackNode=null,e.callbackPriority=0,Z(le,function(){return dd(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(13878&t.flags),13878&t.subtreeFlags||r){r=D.T,D.T=null,o=O.p,O.p=2,l=oc,oc|=4;try{!function(e,t){if(e=e.containerInfo,ru=op,rr(e=nr(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(x){n=null;break e}var l=0,s=-1,c=-1,d=0,u=0,p=e,f=null;t:for(;;){for(var m;p!==n||0!==o&&3!==p.nodeType||(s=l+o),p!==i||0!==r&&3!==p.nodeType||(c=l+r),3===p.nodeType&&(l+=p.nodeValue.length),null!==(m=p.firstChild);)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++d===o&&(s=l),f===i&&++u===r&&(c=l),null!==(m=p.nextSibling))break;f=(p=f).parentNode}p=m}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ou={focusedElem:e,selectionRange:n},op=!1,zs=t;null!==zs;)if(e=(t=zs).child,1024&t.subtreeFlags&&null!==e)e.return=t,zs=e;else for(;null!==zs;){switch(i=(t=zs).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(1024&e&&null!==i){e=void 0,n=t,o=i.memoizedProps,i=i.memoizedState,r=n.stateNode;try{var h=bl(n.type,o,(n.elementType,n.type));e=r.getSnapshotBeforeUpdate(h,i),r.__reactInternalSnapshotBeforeUpdate=e}catch(g){pd(n,n.return,g)}}break;case 3:if(1024&e)if(9===(n=(e=t.stateNode.containerInfo).nodeType))gu(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":gu(e);break;default:e.textContent=""}break;default:if(1024&e)throw Error(a(163))}if(null!==(e=t.sibling)){e.return=t.return,zs=e;break}zs=t.return}}(e,t)}finally{oc=l,O.p=o,D.T=r}}_c=1,ad(),id(),ld()}}function ad(){if(1===_c){_c=0;var e=Ec,t=Pc,n=!!(13878&t.flags);if(13878&t.subtreeFlags||n){n=D.T,D.T=null;var r=O.p;O.p=2;var o=oc;oc|=4;try{Ds(t,e);var a=ou,i=nr(e.containerInfo),l=a.focusedElem,s=a.selectionRange;if(i!==l&&l&&l.ownerDocument&&tr(l.ownerDocument.documentElement,l)){if(null!==s&&rr(l)){var c=s.start,d=s.end;if(void 0===d&&(d=c),"selectionStart"in l)l.selectionStart=c,l.selectionEnd=Math.min(d,l.value.length);else{var u=l.ownerDocument||document,p=u&&u.defaultView||window;if(p.getSelection){var f=p.getSelection(),m=l.textContent.length,h=Math.min(s.start,m),x=void 0===s.end?h:Math.min(s.end,m);!f.extend&&h>x&&(i=x,x=h,h=i);var g=er(l,h),b=er(l,x);if(g&&b&&(1!==f.rangeCount||f.anchorNode!==g.node||f.anchorOffset!==g.offset||f.focusNode!==b.node||f.focusOffset!==b.offset)){var w=u.createRange();w.setStart(g.node,g.offset),f.removeAllRanges(),h>x?(f.addRange(w),f.extend(b.node,b.offset)):(w.setEnd(b.node,b.offset),f.addRange(w))}}}}for(u=[],f=l;f=f.parentNode;)1===f.nodeType&&u.push({element:f,left:f.scrollLeft,top:f.scrollTop});for("function"==typeof l.focus&&l.focus(),l=0;l<u.length;l++){var y=u[l];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}op=!!ru,ou=ru=null}finally{oc=o,O.p=r,D.T=n}}e.current=t,_c=2}}function id(){if(2===_c){_c=0;var e=Ec,t=Pc,n=!!(8772&t.flags);if(8772&t.subtreeFlags||n){n=D.T,D.T=null;var r=O.p;O.p=2;var o=oc;oc|=4;try{Cs(e,t.alternate,t)}finally{oc=o,O.p=r,D.T=n}}_c=3}}function ld(){if(4===_c||3===_c){_c=0,ne();var e=Ec,t=Pc,n=Fc,r=Nc;10256&t.subtreeFlags||10256&t.flags?_c=5:(_c=0,Pc=Ec=null,sd(e,e.pendingLanes));var o=e.pendingLanes;if(0===o&&(Cc=null),Te(n),t=t.stateNode,fe&&"function"==typeof fe.onCommitFiberRoot)try{fe.onCommitFiberRoot(pe,t,void 0,!(128&~t.current.flags))}catch(s){}if(null!==r){t=D.T,o=O.p,O.p=2,D.T=null;try{for(var a=e.onRecoverableError,i=0;i<r.length;i++){var l=r[i];a(l.value,{componentStack:l.stack})}}finally{D.T=t,O.p=o}}3&Fc&&cd(),jd(e),o=e.pendingLanes,4194090&n&&42&o?e===Lc?Ic++:(Ic=0,Lc=e):Ic=0,zd(0)}}function sd(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Oo(t)))}function cd(e){return ad(),id(),ld(),dd()}function dd(){if(5!==_c)return!1;var e=Ec,t=Tc;Tc=0;var n=Te(Fc),r=D.T,o=O.p;try{O.p=32>n?32:n,D.T=null,n=Ac,Ac=null;var i=Ec,l=Fc;if(_c=0,Pc=Ec=null,Fc=0,6&oc)throw Error(a(331));var s=oc;if(oc|=4,Zs(i.current),Hs(i,i.current,l,n),oc=s,zd(0,!1),fe&&"function"==typeof fe.onPostCommitFiberRoot)try{fe.onPostCommitFiberRoot(pe,i)}catch(c){}return!0}finally{O.p=o,D.T=r,sd(e,t)}}function ud(e,t,n){t=Cr(n,t),null!==(e=sa(e,t=zl(e.stateNode,t,2),2))&&(_e(e,2),jd(e))}function pd(e,t,n){if(3===e.tag)ud(e,e,n);else for(;null!==t;){if(3===t.tag){ud(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Cc||!Cc.has(r))){e=Cr(n,e),null!==(r=sa(t,n=Cl(2),2))&&(_l(n,r,t,e),_e(r,2),jd(r));break}}t=t.return}}function fd(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new rc;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(pc=!0,o.add(n),e=md.bind(null,e,t,n),t.then(e,e))}function md(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ac===e&&(lc&n)===n&&(4===mc||3===mc&&(62914560&lc)===lc&&300>re()-Sc?!(2&oc)&&Hc(e,0):gc|=n,wc===lc&&(wc=0)),jd(e)}function hd(e,t){0===t&&(t=ze()),null!==(e=Nr(e,t))&&(_e(e,t),jd(e))}function xd(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),hd(e,n)}function gd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}null!==r&&r.delete(t),hd(e,n)}var bd=null,wd=null,yd=!1,vd=!1,kd=!1,Sd=0;function jd(e){e!==wd&&null===e.next&&(null===wd?bd=wd=e:wd=wd.next=e),vd=!0,yd||(yd=!0,fu(function(){6&oc?Z(ae,Cd):_d()}))}function zd(e,t){if(!kd&&vd){kd=!0;do{for(var n=!1,r=bd;null!==r;){if(0!==e){var o=r.pendingLanes;if(0===o)var a=0;else{var i=r.suspendedLanes,l=r.pingedLanes;a=(1<<31-he(42|e)+1)-1,a=201326741&(a&=o&~(i&~l))?201326741&a|1:a?2|a:0}0!==a&&(n=!0,Fd(r,a))}else a=lc,!(3&(a=ve(r,r===ac?a:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||ke(r,a)||(n=!0,Fd(r,a));r=r.next}}while(n);kd=!1}}function Cd(){_d()}function _d(){vd=yd=!1;var e=0;0!==Sd&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==cu&&(cu=e,!0);return cu=null,!1}()&&(e=Sd),Sd=0);for(var t=re(),n=null,r=bd;null!==r;){var o=r.next,a=Ed(r,t);0===a?(r.next=null,null===n?bd=o:n.next=o,null===o&&(wd=n)):(n=r,(0!==e||3&a)&&(vd=!0)),r=o}zd(e)}function Ed(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=-62914561&e.pendingLanes;0<a;){var i=31-he(a),l=1<<i,s=o[i];-1===s?0!==(l&n)&&0===(l&r)||(o[i]=Se(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}if(n=lc,n=ve(e,e===(t=ac)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===sc||9===sc)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&ee(r),e.callbackNode=null,e.callbackPriority=0;if(!(3&n)||ke(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&ee(r),Te(n)){case 2:case 8:n=ie;break;case 32:default:n=le;break;case 268435456:n=ce}return r=Pd.bind(null,e),n=Z(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&ee(r),e.callbackPriority=2,e.callbackNode=null,2}function Pd(e,t){if(0!==_c&&5!==_c)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(cd()&&e.callbackNode!==n)return null;var r=lc;return 0===(r=ve(e,e===ac?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Mc(e,r,t),Ed(e,re()),null!=e.callbackNode&&e.callbackNode===n?Pd.bind(null,e):null)}function Fd(e,t){if(cd())return null;Mc(e,t,!0)}function Td(){return 0===Sd&&(Sd=je()),Sd}function Ad(e){return null==e||"symbol"==typeof e||"boolean"==typeof e?null:"function"==typeof e?e:Tt(""+e)}function Nd(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Id=0;Id<Sr.length;Id++){var Ld=Sr[Id];jr(Ld.toLowerCase(),"on"+(Ld[0].toUpperCase()+Ld.slice(1)))}jr(hr,"onAnimationEnd"),jr(xr,"onAnimationIteration"),jr(gr,"onAnimationStart"),jr("dblclick","onDoubleClick"),jr("focusin","onFocus"),jr("focusout","onBlur"),jr(br,"onTransitionRun"),jr(wr,"onTransitionStart"),jr(yr,"onTransitionCancel"),jr(vr,"onTransitionEnd"),Ge("onMouseEnter",["mouseout","mouseover"]),Ge("onMouseLeave",["mouseout","mouseover"]),Ge("onPointerEnter",["pointerout","pointerover"]),Ge("onPointerLeave",["pointerout","pointerover"]),Xe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dd="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Od=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Dd));function Rd(e,t){t=!!(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==a&&o.isPropagationStopped())break e;a=l,o.currentTarget=c;try{a(o)}catch(d){wl(d)}o.currentTarget=null,a=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,c=l.currentTarget,l=l.listener,s!==a&&o.isPropagationStopped())break e;a=l,o.currentTarget=c;try{a(o)}catch(d){wl(d)}o.currentTarget=null,a=s}}}}function Md(e,t){var n=t[Oe];void 0===n&&(n=t[Oe]=new Set);var r=e+"__bubble";n.has(r)||(Wd(t,e,2,!1),n.add(r))}function $d(e,t,n){var r=0;t&&(r|=4),Wd(n,e,r,t)}var Bd="_reactListening"+Math.random().toString(36).slice(2);function Ud(e){if(!e[Bd]){e[Bd]=!0,Ke.forEach(function(t){"selectionchange"!==t&&(Od.has(t)||$d(t,!1,e),$d(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Bd]||(t[Bd]=!0,$d("selectionchange",!1,t))}}function Wd(e,t,n,r){switch(up(t)){case 2:var o=ap;break;case 8:o=ip;break;default:o=lp}n=o.bind(null,t,n,e),o=void 0,!Bt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Vd(e,t,n,r,o){var a=r;if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var s=r.stateNode.containerInfo;if(s===o)break;if(4===i)for(i=r.return;null!==i;){var c=i.tag;if((3===c||4===c)&&i.stateNode.containerInfo===o)return;i=i.return}for(;null!==s;){if(null===(i=We(s)))return;if(5===(c=i.tag)||6===c||26===c||27===c){r=a=i;continue e}s=s.parentNode}}r=r.return}Rt(function(){var r=a,o=Nt(n),i=[];e:{var s=kr.get(e);if(void 0!==s){var c=tn,d=e;switch(e){case"keypress":if(0===Qt(n))break e;case"keydown":case"keyup":c=gn;break;case"focusin":d="focus",c=sn;break;case"focusout":d="blur",c=sn;break;case"beforeblur":case"afterblur":c=sn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=an;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=ln;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=wn;break;case hr:case xr:case gr:c=cn;break;case vr:c=yn;break;case"scroll":case"scrollend":c=rn;break;case"wheel":c=vn;break;case"copy":case"cut":case"paste":c=dn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=bn;break;case"toggle":case"beforetoggle":c=kn}var u=!!(4&t),p=!u&&("scroll"===e||"scrollend"===e),f=u?null!==s?s+"Capture":null:s;u=[];for(var m,h=r;null!==h;){var x=h;if(m=x.stateNode,5!==(x=x.tag)&&26!==x&&27!==x||null===m||null===f||null!=(x=Mt(h,f))&&u.push(Hd(h,x,m)),p)break;h=h.return}0<u.length&&(s=new c(s,d,null,n,o),i.push({event:s,listeners:u}))}}if(!(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===At||!(d=n.relatedTarget||n.fromElement)||!We(d)&&!d[De])&&(c||s)&&(s=o.window===o?o:(s=o.ownerDocument)?s.defaultView||s.parentWindow:window,c?(c=r,null!==(d=(d=n.relatedTarget||n.toElement)?We(d):null)&&(p=l(d),u=d.tag,d!==p||5!==u&&27!==u&&6!==u)&&(d=null)):(c=null,d=r),c!==d)){if(u=an,x="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(u=bn,x="onPointerLeave",f="onPointerEnter",h="pointer"),p=null==c?s:He(c),m=null==d?s:He(d),(s=new u(x,h+"leave",c,n,o)).target=p,s.relatedTarget=m,x=null,We(o)===r&&((u=new u(f,h+"enter",d,n,o)).target=m,u.relatedTarget=p,x=u),p=x,c&&d)e:{for(f=d,h=0,m=u=c;m;m=Qd(m))h++;for(m=0,x=f;x;x=Qd(x))m++;for(;0<h-m;)u=Qd(u),h--;for(;0<m-h;)f=Qd(f),m--;for(;h--;){if(u===f||null!==f&&u===f.alternate)break e;u=Qd(u),f=Qd(f)}u=null}else u=null;null!==c&&Kd(i,s,c,u,!1),null!==d&&null!==p&&Kd(i,p,d,u,!0)}if("select"===(c=(s=r?He(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===c&&"file"===s.type)var g=$n;else if(In(s))if(Bn)g=Xn;else{g=Kn;var b=Qn}else!(c=s.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==s.type&&"radio"!==s.type?r&&Et(r.elementType)&&(g=$n):g=Yn;switch(g&&(g=g(e,r))?Ln(i,g,n,o):(b&&b(e,s,r),"focusout"===e&&r&&"number"===s.type&&null!=r.memoizedProps.value&&yt(s,"number",s.value)),b=r?He(r):window,e){case"focusin":(In(b)||"true"===b.contentEditable)&&(ar=b,ir=r,lr=null);break;case"focusout":lr=ir=ar=null;break;case"mousedown":sr=!0;break;case"contextmenu":case"mouseup":case"dragend":sr=!1,cr(i,n,o);break;case"selectionchange":if(or)break;case"keydown":case"keyup":cr(i,n,o)}var w;if(jn)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else An?Fn(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(_n&&"ko"!==n.locale&&(An||"onCompositionStart"!==y?"onCompositionEnd"===y&&An&&(w=qt()):(Vt="value"in(Wt=o)?Wt.value:Wt.textContent,An=!0)),0<(b=qd(r,y)).length&&(y=new un(y,e,null,n,o),i.push({event:y,listeners:b}),w?y.data=w:null!==(w=Tn(n))&&(y.data=w))),(w=Cn?function(e,t){switch(e){case"compositionend":return Tn(t);case"keypress":return 32!==t.which?null:(Pn=!0,En);case"textInput":return(e=t.data)===En&&Pn?null:e;default:return null}}(e,n):function(e,t){if(An)return"compositionend"===e||!jn&&Fn(e,t)?(e=qt(),Ht=Vt=Wt=null,An=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _n&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(y=qd(r,"onBeforeInput")).length&&(b=new un("onBeforeInput","beforeinput",null,n,o),i.push({event:b,listeners:y}),b.data=w)),function(e,t,n,r,o){if("submit"===t&&n&&n.stateNode===o){var a=Ad((o[Le]||null).action),i=r.submitter;i&&null!==(t=(t=i[Le]||null)?Ad(t.formAction):i.getAttribute("formAction"))&&(a=t,i=null);var l=new tn("action","action",null,r,o);e.push({event:l,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==Sd){var e=i?Nd(o,i):new FormData(o);Ni(n,{pending:!0,data:e,method:o.method,action:a},null,e)}}else"function"==typeof a&&(l.preventDefault(),e=i?Nd(o,i):new FormData(o),Ni(n,{pending:!0,data:e,method:o.method,action:a},a,e))},currentTarget:o}]})}}(i,e,r,n,o)}Rd(i,t)})}function Hd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qd(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,a=o.stateNode;if(5!==(o=o.tag)&&26!==o&&27!==o||null===a||(null!=(o=Mt(e,n))&&r.unshift(Hd(e,o,a)),null!=(o=Mt(e,t))&&r.push(Hd(e,o,a))),3===e.tag)return r;e=e.return}return[]}function Qd(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function Kd(e,t,n,r,o){for(var a=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(l=l.tag,null!==s&&s===r)break;5!==l&&26!==l&&27!==l||null===c||(s=c,o?null!=(c=Mt(n,a))&&i.unshift(Hd(n,c,s)):o||null!=(c=Mt(n,a))&&i.push(Hd(n,c,s))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var Yd=/\r\n?/g,Xd=/\u0000|\uFFFD/g;function Gd(e){return("string"==typeof e?e:""+e).replace(Yd,"\n").replace(Xd,"")}function Jd(e,t){return t=Gd(t),Gd(e)===t}function Zd(){}function eu(e,t,n,r,o,i){switch(n){case"children":"string"==typeof r?"body"===t||"textarea"===t&&""===r||jt(e,r):("number"==typeof r||"bigint"==typeof r)&&"body"!==t&&jt(e,""+r);break;case"className":ot(e,"class",r);break;case"tabIndex":ot(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ot(e,n,r);break;case"style":_t(e,r,i);break;case"data":if("object"!==t){ot(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"==typeof r||"symbol"==typeof r||"boolean"==typeof r){e.removeAttribute(n);break}r=Tt(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"==typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"==typeof i&&("formAction"===n?("input"!==t&&eu(e,t,"name",o.name,o,null),eu(e,t,"formEncType",o.formEncType,o,null),eu(e,t,"formMethod",o.formMethod,o,null),eu(e,t,"formTarget",o.formTarget,o,null)):(eu(e,t,"encType",o.encType,o,null),eu(e,t,"method",o.method,o,null),eu(e,t,"target",o.target,o,null))),null==r||"symbol"==typeof r||"boolean"==typeof r){e.removeAttribute(n);break}r=Tt(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Zd);break;case"onScroll":null!=r&&Md("scroll",e);break;case"onScrollEnd":null!=r&&Md("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!=typeof r||!("__html"in r))throw Error(a(61));if(null!=(n=r.__html)){if(null!=o.children)throw Error(a(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!=typeof r&&"symbol"!=typeof r;break;case"muted":e.muted=r&&"function"!=typeof r&&"symbol"!=typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"==typeof r||"boolean"==typeof r||"symbol"==typeof r){e.removeAttribute("xlink:href");break}n=Tt(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!=typeof r&&"symbol"!=typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!=typeof r&&"symbol"!=typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!=typeof r&&"symbol"!=typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!=typeof r&&"symbol"!=typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"==typeof r||"symbol"==typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Md("beforetoggle",e),Md("toggle",e),rt(e,"popover",r);break;case"xlinkActuate":at(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":at(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":at(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":at(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":at(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":at(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":at(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":at(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":at(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":rt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&rt(e,n=Pt.get(n)||n,r)}}function tu(e,t,n,r,o,i){switch(n){case"style":_t(e,r,i);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!=typeof r||!("__html"in r))throw Error(a(61));if(null!=(n=r.__html)){if(null!=o.children)throw Error(a(60));e.innerHTML=n}}break;case"children":"string"==typeof r?jt(e,r):("number"==typeof r||"bigint"==typeof r)&&jt(e,""+r);break;case"onScroll":null!=r&&Md("scroll",e);break;case"onScrollEnd":null!=r&&Md("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Zd);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Ye.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),"function"==typeof(i=null!=(i=e[Le]||null)?i[n]:null)&&e.removeEventListener(t,i,o),"function"!=typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):rt(e,n,r):("function"!=typeof i&&null!==i&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,o)))}}function nu(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Md("error",e),Md("load",e);var r,o=!1,i=!1;for(r in n)if(n.hasOwnProperty(r)){var l=n[r];if(null!=l)switch(r){case"src":o=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:eu(e,t,r,l,n,null)}}return i&&eu(e,t,"srcSet",n.srcSet,n,null),void(o&&eu(e,t,"src",n.src,n,null));case"input":Md("invalid",e);var s=r=l=i=null,c=null,d=null;for(o in n)if(n.hasOwnProperty(o)){var u=n[o];if(null!=u)switch(o){case"name":i=u;break;case"type":l=u;break;case"checked":c=u;break;case"defaultChecked":d=u;break;case"value":r=u;break;case"defaultValue":s=u;break;case"children":case"dangerouslySetInnerHTML":if(null!=u)throw Error(a(137,t));break;default:eu(e,t,o,u,n,null)}}return wt(e,r,s,c,d,l,i,!1),void ft(e);case"select":for(i in Md("invalid",e),o=l=r=null,n)if(n.hasOwnProperty(i)&&null!=(s=n[i]))switch(i){case"value":r=s;break;case"defaultValue":l=s;break;case"multiple":o=s;default:eu(e,t,i,s,n,null)}return t=r,n=l,e.multiple=!!o,void(null!=t?vt(e,!!o,t,!1):null!=n&&vt(e,!!o,n,!0));case"textarea":for(l in Md("invalid",e),r=i=o=null,n)if(n.hasOwnProperty(l)&&null!=(s=n[l]))switch(l){case"value":o=s;break;case"defaultValue":i=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(null!=s)throw Error(a(91));break;default:eu(e,t,l,s,n,null)}return St(e,o,i,r),void ft(e);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(o=n[c]))if("selected"===c)e.selected=o&&"function"!=typeof o&&"symbol"!=typeof o;else eu(e,t,c,o,n,null);return;case"dialog":Md("beforetoggle",e),Md("toggle",e),Md("cancel",e),Md("close",e);break;case"iframe":case"object":Md("load",e);break;case"video":case"audio":for(o=0;o<Dd.length;o++)Md(Dd[o],e);break;case"image":Md("error",e),Md("load",e);break;case"details":Md("toggle",e);break;case"embed":case"source":case"link":Md("error",e),Md("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in n)if(n.hasOwnProperty(d)&&null!=(o=n[d]))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:eu(e,t,d,o,n,null)}return;default:if(Et(t)){for(u in n)n.hasOwnProperty(u)&&(void 0!==(o=n[u])&&tu(e,t,u,o,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(null!=(o=n[s])&&eu(e,t,s,o,n,null))}var ru=null,ou=null;function au(e){return 9===e.nodeType?e:e.ownerDocument}function iu(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lu(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function su(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"bigint"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var cu=null;var du="function"==typeof setTimeout?setTimeout:void 0,uu="function"==typeof clearTimeout?clearTimeout:void 0,pu="function"==typeof Promise?Promise:void 0,fu="function"==typeof queueMicrotask?queueMicrotask:void 0!==pu?function(e){return pu.resolve(null).then(e).catch(mu)}:du;function mu(e){setTimeout(function(){throw e})}function hu(e){return"head"===e}function xu(e,t){var n=t,r=0,o=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0<r&&8>r){n=r;var i=e.ownerDocument;if(1&n&&Su(i.documentElement),2&n&&Su(i.body),4&n)for(Su(n=i.head),i=n.firstChild;i;){var l=i.nextSibling,s=i.nodeName;i[Be]||"SCRIPT"===s||"STYLE"===s||"LINK"===s&&"stylesheet"===i.rel.toLowerCase()||n.removeChild(i),i=l}}if(0===o)return e.removeChild(a),void Pp(t);o--}else"$"===n||"$?"===n||"$!"===n?o++:r=n.charCodeAt(0)-48;else r=0;n=a}while(n);Pp(t)}function gu(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":gu(n),Ue(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function bu(e){return"$!"===e.data||"$?"===e.data&&"complete"===e.ownerDocument.readyState}function wu(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}var yu=null;function vu(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}function ku(e,t,n){switch(t=au(n),e){case"html":if(!(e=t.documentElement))throw Error(a(452));return e;case"head":if(!(e=t.head))throw Error(a(453));return e;case"body":if(!(e=t.body))throw Error(a(454));return e;default:throw Error(a(451))}}function Su(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ue(e)}var ju=new Map,zu=new Set;function Cu(e){return"function"==typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var _u=O.d;O.d={f:function(){var e=_u.f(),t=Wc();return e||t},r:function(e){var t=Ve(e);null!==t&&5===t.tag&&"form"===t.type?Li(t):_u.r(e)},D:function(e){_u.D(e),Pu("dns-prefetch",e,null)},C:function(e,t){_u.C(e,t),Pu("preconnect",e,t)},L:function(e,t,n){_u.L(e,t,n);var r=Eu;if(r&&e&&t){var o='link[rel="preload"][as="'+gt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(o+='[imagesrcset="'+gt(n.imageSrcSet)+'"]',"string"==typeof n.imageSizes&&(o+='[imagesizes="'+gt(n.imageSizes)+'"]')):o+='[href="'+gt(e)+'"]';var a=o;switch(t){case"style":a=Tu(e);break;case"script":a=Iu(e)}ju.has(a)||(e=u({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),ju.set(a,e),null!==r.querySelector(o)||"style"===t&&r.querySelector(Au(a))||"script"===t&&r.querySelector(Lu(a))||(nu(t=r.createElement("link"),"link",e),Qe(t),r.head.appendChild(t)))}},m:function(e,t){_u.m(e,t);var n=Eu;if(n&&e){var r=t&&"string"==typeof t.as?t.as:"script",o='link[rel="modulepreload"][as="'+gt(r)+'"][href="'+gt(e)+'"]',a=o;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Iu(e)}if(!ju.has(a)&&(e=u({rel:"modulepreload",href:e},t),ju.set(a,e),null===n.querySelector(o))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Lu(a)))return}nu(r=n.createElement("link"),"link",e),Qe(r),n.head.appendChild(r)}}},X:function(e,t){_u.X(e,t);var n=Eu;if(n&&e){var r=qe(n).hoistableScripts,o=Iu(e),a=r.get(o);a||((a=n.querySelector(Lu(o)))||(e=u({src:e,async:!0},t),(t=ju.get(o))&&Mu(e,t),Qe(a=n.createElement("script")),nu(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(o,a))}},S:function(e,t,n){_u.S(e,t,n);var r=Eu;if(r&&e){var o=qe(r).hoistableStyles,a=Tu(e);t=t||"default";var i=o.get(a);if(!i){var l={loading:0,preload:null};if(i=r.querySelector(Au(a)))l.loading=5;else{e=u({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ju.get(a))&&Ru(e,n);var s=i=r.createElement("link");Qe(s),nu(s,"link",e),s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),s.addEventListener("load",function(){l.loading|=1}),s.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Ou(i,t,r)}i={type:"stylesheet",instance:i,count:1,state:l},o.set(a,i)}}},M:function(e,t){_u.M(e,t);var n=Eu;if(n&&e){var r=qe(n).hoistableScripts,o=Iu(e),a=r.get(o);a||((a=n.querySelector(Lu(o)))||(e=u({src:e,async:!0,type:"module"},t),(t=ju.get(o))&&Mu(e,t),Qe(a=n.createElement("script")),nu(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(o,a))}}};var Eu="undefined"==typeof document?null:document;function Pu(e,t,n){var r=Eu;if(r&&"string"==typeof t&&t){var o=gt(t);o='link[rel="'+e+'"][href="'+o+'"]',"string"==typeof n&&(o+='[crossorigin="'+n+'"]'),zu.has(o)||(zu.add(o),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(o)&&(nu(t=r.createElement("link"),"link",e),Qe(t),r.head.appendChild(t)))}}function Fu(e,t,n,r){var o,i,l,s,c=(c=q.current)?Cu(c):null;if(!c)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return"string"==typeof n.precedence&&"string"==typeof n.href?(t=Tu(n.href),(r=(n=qe(c).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"==typeof n.href&&"string"==typeof n.precedence){e=Tu(n.href);var d=qe(c).hoistableStyles,u=d.get(e);if(u||(c=c.ownerDocument||c,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,u),(d=c.querySelector(Au(e)))&&!d._p&&(u.instance=d,u.state.loading=5),ju.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ju.set(e,n),d||(o=c,i=e,l=n,s=u.state,o.querySelector('link[rel="preload"][as="style"]['+i+"]")?s.loading=1:(i=o.createElement("link"),s.preload=i,i.addEventListener("load",function(){return s.loading|=1}),i.addEventListener("error",function(){return s.loading|=2}),nu(i,"link",l),Qe(i),o.head.appendChild(i))))),t&&null===r)throw Error(a(528,""));return u}if(t&&null!==r)throw Error(a(529,""));return null;case"script":return t=n.async,"string"==typeof(n=n.src)&&t&&"function"!=typeof t&&"symbol"!=typeof t?(t=Iu(n),(r=(n=qe(c).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Tu(e){return'href="'+gt(e)+'"'}function Au(e){return'link[rel="stylesheet"]['+e+"]"}function Nu(e){return u({},e,{"data-precedence":e.precedence,precedence:null})}function Iu(e){return'[src="'+gt(e)+'"]'}function Lu(e){return"script[async]"+e}function Du(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+gt(n.href)+'"]');if(r)return t.instance=r,Qe(r),r;var o=u({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return Qe(r=(e.ownerDocument||e).createElement("style")),nu(r,"style",o),Ou(r,n.precedence,e),t.instance=r;case"stylesheet":o=Tu(n.href);var i=e.querySelector(Au(o));if(i)return t.state.loading|=4,t.instance=i,Qe(i),i;r=Nu(n),(o=ju.get(o))&&Ru(r,o),Qe(i=(e.ownerDocument||e).createElement("link"));var l=i;return l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),nu(i,"link",r),t.state.loading|=4,Ou(i,n.precedence,e),t.instance=i;case"script":return i=Iu(n.src),(o=e.querySelector(Lu(i)))?(t.instance=o,Qe(o),o):(r=n,(o=ju.get(i))&&Mu(r=u({},n),o),Qe(o=(e=e.ownerDocument||e).createElement("script")),nu(o,"link",r),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(a(443,t.type))}else"stylesheet"===t.type&&!(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Ou(r,n.precedence,e));return t.instance}function Ou(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=r.length?r[r.length-1]:null,a=o,i=0;i<r.length;i++){var l=r[i];if(l.dataset.precedence===t)a=l;else if(a!==o)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Ru(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Mu(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var $u=null;function Bu(e,t,n){if(null===$u){var r=new Map,o=$u=new Map;o.set(n,r)}else(r=(o=$u).get(n))||(r=new Map,o.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var a=n[o];if(!(a[Be]||a[Ie]||"link"===e&&"stylesheet"===a.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==a.namespaceURI){var i=a.getAttribute(t)||"";i=e+i;var l=r.get(i);l?l.push(a):r.set(i,[a])}}return r}function Uu(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function Wu(e){return!!("stylesheet"!==e.type||3&e.state.loading)}var Vu=null;function Hu(){}function qu(){if(this.count--,0===this.count)if(this.stylesheets)Ku(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var Qu=null;function Ku(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Qu=new Map,t.forEach(Yu,e),Qu=null,qu.call(e))}function Yu(e,t){if(!(4&t.state.loading)){var n=Qu.get(e);if(n)var r=n.get(null);else{n=new Map,Qu.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<o.length;a++){var i=o[a];"LINK"!==i.nodeName&&"not all"===i.getAttribute("media")||(n.set(i.dataset.precedence,i),r=i)}r&&n.set(null,r)}i=(o=t.instance).getAttribute("data-precedence"),(a=n.get(i)||r)===r&&n.set(null,o),n.set(i,o),this.count++,r=qu.bind(this),o.addEventListener("load",r),o.addEventListener("error",r),a?a.parentNode.insertBefore(o,a.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(o,e.firstChild),t.state.loading|=4}}var Xu={$$typeof:k,Provider:null,Consumer:null,_currentValue:R,_currentValue2:R,_threadCount:0};function Gu(e,t,n,r,o,a,i,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=r,this.onUncaughtError=o,this.onCaughtError=a,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Ju(e,t,n,r,o,a,i,l,s,c,d,u){return e=new Gu(e,t,n,i,l,s,c,u),t=1,!0===a&&(t|=24),a=Rr(3,null,null,t),e.current=a,a.stateNode=e,(t=Do()).refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},aa(a),e}function Zu(e){return e?e=Dr:Dr}function ep(e,t,n,r,o,a){o=Zu(o),null===r.context?r.context=o:r.pendingContext=o,(r=la(t)).payload={element:n},null!==(a=void 0===a?null:a)&&(r.callback=a),null!==(n=sa(e,r,t))&&(Rc(n,0,t),ca(n,e,t))}function tp(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function np(e,t){tp(e,t),(e=e.alternate)&&tp(e,t)}function rp(e){if(13===e.tag){var t=Nr(e,67108864);null!==t&&Rc(t,0,67108864),np(e,67108864)}}var op=!0;function ap(e,t,n,r){var o=D.T;D.T=null;var a=O.p;try{O.p=2,lp(e,t,n,r)}finally{O.p=a,D.T=o}}function ip(e,t,n,r){var o=D.T;D.T=null;var a=O.p;try{O.p=8,lp(e,t,n,r)}finally{O.p=a,D.T=o}}function lp(e,t,n,r){if(op){var o=sp(r);if(null===o)Vd(e,t,r,cp,n),yp(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return fp=vp(fp,e,t,n,r,o),!0;case"dragenter":return mp=vp(mp,e,t,n,r,o),!0;case"mouseover":return hp=vp(hp,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return xp.set(a,vp(xp.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,gp.set(a,vp(gp.get(a)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(yp(e,r),4&t&&-1<wp.indexOf(e)){for(;null!==o;){var a=Ve(o);if(null!==a)switch(a.tag){case 3:if((a=a.stateNode).current.memoizedState.isDehydrated){var i=ye(a.pendingLanes);if(0!==i){var l=a;for(l.pendingLanes|=2,l.entangledLanes|=2;i;){var s=1<<31-he(i);l.entanglements[1]|=s,i&=~s}jd(a),!(6&oc)&&(jc=re()+500,zd(0))}}break;case 13:null!==(l=Nr(a,2))&&Rc(l,0,2),Wc(),np(a,2)}if(null===(a=sp(r))&&Vd(e,t,r,cp,n),a===o)break;o=a}null!==o&&r.stopPropagation()}else Vd(e,t,r,null,n)}}function sp(e){return dp(e=Nt(e))}var cp=null;function dp(e){if(cp=null,null!==(e=We(e))){var t=l(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=s(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return cp=e,null}function up(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(oe()){case ae:return 2;case ie:return 8;case le:case se:return 32;case ce:return 268435456;default:return 32}default:return 32}}var pp=!1,fp=null,mp=null,hp=null,xp=new Map,gp=new Map,bp=[],wp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yp(e,t){switch(e){case"focusin":case"focusout":fp=null;break;case"dragenter":case"dragleave":mp=null;break;case"mouseover":case"mouseout":hp=null;break;case"pointerover":case"pointerout":xp.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gp.delete(t.pointerId)}}function vp(e,t,n,r,o,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},null!==t&&(null!==(t=Ve(t))&&rp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function kp(e){var t=We(e.target);if(null!==t){var n=l(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=s(n)))return e.blockedOn=t,void function(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}(e.priority,function(){if(13===n.tag){var e=Dc();e=Fe(e);var t=Nr(n,e);null!==t&&Rc(t,0,e),np(n,e)}})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Sp(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=sp(e.nativeEvent);if(null!==n)return null!==(t=Ve(n))&&rp(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);At=r,n.target.dispatchEvent(r),At=null,t.shift()}return!0}function jp(e,t,n){Sp(e)&&n.delete(t)}function zp(){pp=!1,null!==fp&&Sp(fp)&&(fp=null),null!==mp&&Sp(mp)&&(mp=null),null!==hp&&Sp(hp)&&(hp=null),xp.forEach(jp),gp.forEach(jp)}function Cp(t,n){t.blockedOn===n&&(t.blockedOn=null,pp||(pp=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,zp)))}var _p=null;function Ep(t){_p!==t&&(_p=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){_p===t&&(_p=null);for(var e=0;e<t.length;e+=3){var n=t[e],r=t[e+1],o=t[e+2];if("function"!=typeof r){if(null===dp(r||n))continue;break}var a=Ve(n);null!==a&&(t.splice(e,3),e-=3,Ni(a,{pending:!0,data:o,method:n.method,action:r},r,o))}}))}function Pp(e){function t(t){return Cp(t,e)}null!==fp&&Cp(fp,e),null!==mp&&Cp(mp,e),null!==hp&&Cp(hp,e),xp.forEach(t),gp.forEach(t);for(var n=0;n<bp.length;n++){var r=bp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<bp.length&&null===(n=bp[0]).blockedOn;)kp(n),null===n.blockedOn&&bp.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var o=n[r],a=n[r+1],i=o[Le]||null;if("function"==typeof a)i||Ep(n);else if(i){var l=null;if(a&&a.hasAttribute("formAction")){if(o=a,i=a[Le]||null)l=i.formAction;else if(null!==dp(o))continue}else l=i.action;"function"==typeof l?n[r+1]=l:(n.splice(r,3),r-=3),Ep(n)}}}function Fp(e){this._internalRoot=e}function Tp(e){this._internalRoot=e}Tp.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));ep(t.current,Dc(),e,t,null,null)},Tp.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;ep(e.current,2,null,e,null,null),Wc(),t[De]=null}},Tp.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ae();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bp.length&&0!==t&&t<bp[n].priority;n++);bp.splice(n,0,e),0===n&&kp(e)}};var Ap=t.version;if("19.1.0"!==Ap)throw Error(a(527,Ap,"19.1.0"));O.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=l(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var i=o.alternate;if(null===i){if(null!==(r=o.return)){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return c(o),e;if(i===r)return c(o),t;i=i.sibling}throw Error(a(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,d=o.child;d;){if(d===n){s=!0,n=o,r=i;break}if(d===r){s=!0,r=o,n=i;break}d=d.sibling}if(!s){for(d=i.child;d;){if(d===n){s=!0,n=i,r=o;break}if(d===r){s=!0,r=i,n=o;break}d=d.sibling}if(!s)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?d(e):null)?null:e.stateNode};var Np={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.0"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Ip=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ip.isDisabled&&Ip.supportsFiber)try{pe=Ip.inject(Np),fe=Ip}catch(Dp){}}return v.createRoot=function(e,t){if(!i(e))throw Error(a(299));var n=!1,r="",o=yl,l=vl,s=kl;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(o=t.onUncaughtError),void 0!==t.onCaughtError&&(l=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=Ju(e,1,!1,null,0,n,r,o,l,s,0,null),e[De]=t.current,Ud(e),new Fp(t)},v.hydrateRoot=function(e,t,n){if(!i(e))throw Error(a(299));var r=!1,o="",l=yl,s=vl,c=kl,d=null;return null!=n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onUncaughtError&&(l=n.onUncaughtError),void 0!==n.onCaughtError&&(s=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(d=n.formState)),(t=Ju(e,1,!0,t,0,r,o,l,s,c,0,d)).context=Zu(null),n=t.current,(o=la(r=Fe(r=Dc()))).callback=null,sa(n,o,r),n=r,t.current.lanes=n,_e(t,n),jd(t),e[De]=t.current,Ud(e),new Tp(t)},v.version="19.1.0",v}var C,_,E=(b||(b=1,function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),y.exports=z()),y.exports),P={exports:{}},F={};var T=(_||(_=1,P.exports=function(){if(C)return F;C=1;var e=r(),t="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},n=e.useSyncExternalStore,o=e.useRef,a=e.useEffect,i=e.useMemo,l=e.useDebugValue;return F.useSyncExternalStoreWithSelector=function(e,r,s,c,d){var u=o(null);if(null===u.current){var p={hasValue:!1,value:null};u.current=p}else p=u.current;u=i(function(){function e(e){if(!a){if(a=!0,n=e,e=c(e),void 0!==d&&p.hasValue){var r=p.value;if(d(r,e))return o=r}return o=e}if(r=o,t(n,e))return r;var i=c(e);return void 0!==d&&d(r,i)?(n=e,r):(n=e,o=i)}var n,o,a=!1,i=void 0===s?null:s;return[function(){return e(r())},null===i?void 0:function(){return e(i())}]},[r,s,c,d]);var f=n(e,u[0],u[1]);return a(function(){p.hasValue=!0,p.value=f},[f]),l(f),f},F}()),P.exports);var A={notify(){},get:()=>[]};var N=(()=>!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement))(),I=(()=>"undefined"!=typeof navigator&&"ReactNative"===navigator.product)(),L=(()=>N||I?e.useLayoutEffect:e.useEffect)(),D=Symbol.for("react-redux-context"),O="undefined"!=typeof globalThis?globalThis:{};function R(){if(!e.createContext)return{};const t=O[D]??(O[D]=new Map);let n=t.get(e.createContext);return n||(n=e.createContext(null),t.set(e.createContext,n)),n}var M=R();var $=function(t){const{children:n,context:r,serverState:o,store:a}=t,i=e.useMemo(()=>{const e=function(e){let t,n=A,r=0,o=!1;function a(){s.onStateChange&&s.onStateChange()}function i(){r++,t||(t=e.subscribe(a),n=function(){let e=null,t=null;return{clear(){e=null,t=null},notify(){(()=>{let t=e;for(;t;)t.callback(),t=t.next})()},get(){const t=[];let n=e;for(;n;)t.push(n),n=n.next;return t},subscribe(n){let r=!0;const o=t={callback:n,next:null,prev:t};return o.prev?o.prev.next=o:e=o,function(){r&&null!==e&&(r=!1,o.next?o.next.prev=o.prev:t=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}())}function l(){r--,t&&0===r&&(t(),t=void 0,n.clear(),n=A)}const s={addNestedSub:function(e){i();const t=n.subscribe(e);let r=!1;return()=>{r||(r=!0,t(),l())}},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:a,isSubscribed:function(){return o},trySubscribe:function(){o||(o=!0,i())},tryUnsubscribe:function(){o&&(o=!1,l())},getListeners:()=>n};return s}(a);return{store:a,subscription:e,getServerState:o?()=>o:void 0}},[a,o]),l=e.useMemo(()=>a.getState(),[a]);L(()=>{const{subscription:e}=i;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),l!==a.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}},[i,l]);const s=r||M;return e.createElement(s.Provider,{value:i},n)};function B(t=M){return function(){return e.useContext(t)}}var U=B();function W(e=M){const t=e===M?U:B(e),n=()=>{const{store:e}=t();return e};return Object.assign(n,{withTypes:()=>n}),n}var V=W();function H(e=M){const t=e===M?V:W(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var q=H(),Q=(e,t)=>e===t;function K(t=M){const n=t===M?U:B(t),r=(t,r={})=>{const{equalityFn:o=Q}="function"==typeof r?{equalityFn:r}:r,a=n(),{store:i,subscription:l,getServerState:s}=a;e.useRef(!0);const c=e.useCallback({[t.name]:e=>t(e)}[t.name],[t]),d=T.useSyncExternalStoreWithSelector(l.addNestedSub,i.getState,s||i.getState,c,o);return e.useDebugValue(d),d};return Object.assign(r,{withTypes:()=>r}),r}var Y=K();function X(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var G=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")(),J=()=>Math.random().toString(36).substring(7).split("").join("."),Z={INIT:`@@redux/INIT${J()}`,REPLACE:`@@redux/REPLACE${J()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${J()}`};function ee(e){if("object"!=typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||null===Object.getPrototypeOf(e)}function te(e,t,n){if("function"!=typeof e)throw new Error(X(2));if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(X(0));if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error(X(1));return n(te)(e,t)}let r=e,o=t,a=new Map,i=a,l=0,s=!1;function c(){i===a&&(i=new Map,a.forEach((e,t)=>{i.set(t,e)}))}function d(){if(s)throw new Error(X(3));return o}function u(e){if("function"!=typeof e)throw new Error(X(4));if(s)throw new Error(X(5));let t=!0;c();const n=l++;return i.set(n,e),function(){if(t){if(s)throw new Error(X(6));t=!1,c(),i.delete(n),a=null}}}function p(e){if(!ee(e))throw new Error(X(7));if(void 0===e.type)throw new Error(X(8));if("string"!=typeof e.type)throw new Error(X(17));if(s)throw new Error(X(9));try{s=!0,o=r(o,e)}finally{s=!1}return(a=i).forEach(e=>{e()}),e}p({type:Z.INIT});return{dispatch:p,subscribe:u,getState:d,replaceReducer:function(e){if("function"!=typeof e)throw new Error(X(10));r=e,p({type:Z.REPLACE})},[G]:function(){const e=u;return{subscribe(t){if("object"!=typeof t||null===t)throw new Error(X(11));function n(){const e=t;e.next&&e.next(d())}n();return{unsubscribe:e(n)}},[G](){return this}}}}}function ne(e){const t=Object.keys(e),n={};for(let i=0;i<t.length;i++){const r=t[i];"function"==typeof e[r]&&(n[r]=e[r])}const r=Object.keys(n);let o;try{!function(e){Object.keys(e).forEach(t=>{const n=e[t];if(void 0===n(void 0,{type:Z.INIT}))throw new Error(X(12));if(void 0===n(void 0,{type:Z.PROBE_UNKNOWN_ACTION()}))throw new Error(X(13))})}(n)}catch(a){o=a}return function(e={},t){if(o)throw o;let a=!1;const i={};for(let o=0;o<r.length;o++){const l=r[o],s=n[l],c=e[l],d=s(c,t);if(void 0===d)throw t&&t.type,new Error(X(14));i[l]=d,a=a||d!==c}return a=a||r.length!==Object.keys(e).length,a?i:e}}function re(...e){return 0===e.length?e=>e:1===e.length?e[0]:e.reduce((e,t)=>(...n)=>e(t(...n)))}var oe=Symbol.for("immer-nothing"),ae=Symbol.for("immer-draftable"),ie=Symbol.for("immer-state");function le(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var se=Object.getPrototypeOf;function ce(e){return!!e&&!!e[ie]}function de(e){var t;return!!e&&(pe(e)||Array.isArray(e)||!!e[ae]||!!(null==(t=e.constructor)?void 0:t[ae])||ge(e)||be(e))}var ue=Object.prototype.constructor.toString();function pe(e){if(!e||"object"!=typeof e)return!1;const t=se(e);if(null===t)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===ue}function fe(e,t){0===me(e)?Reflect.ownKeys(e).forEach(n=>{t(n,e[n],e)}):e.forEach((n,r)=>t(r,n,e))}function me(e){const t=e[ie];return t?t.type_:Array.isArray(e)?1:ge(e)?2:be(e)?3:0}function he(e,t){return 2===me(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function xe(e,t,n){const r=me(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function ge(e){return e instanceof Map}function be(e){return e instanceof Set}function we(e){return e.copy_||e.base_}function ye(e,t){if(ge(e))return new Map(e);if(be(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=pe(e);if(!0===t||"class_only"===t&&!n){const t=Object.getOwnPropertyDescriptors(e);delete t[ie];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){const o=n[r],a=t[o];!1===a.writable&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[o]})}return Object.create(se(e),t)}{const t=se(e);if(null!==t&&n)return{...e};const r=Object.create(t);return Object.assign(r,e)}}function ve(e,t=!1){return Se(e)||ce(e)||!de(e)||(me(e)>1&&(e.set=e.add=e.clear=e.delete=ke),Object.freeze(e),t&&Object.entries(e).forEach(([e,t])=>ve(t,!0))),e}function ke(){le(2)}function Se(e){return Object.isFrozen(e)}var je,ze={};function Ce(e){const t=ze[e];return t||le(0),t}function _e(){return je}function Ee(e,t){t&&(Ce("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Pe(e){Fe(e),e.drafts_.forEach(Ae),e.drafts_=null}function Fe(e){e===je&&(je=e.parent_)}function Te(e){return je={drafts_:[],parent_:je,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Ae(e){const t=e[ie];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function Ne(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return void 0!==e&&e!==n?(n[ie].modified_&&(Pe(t),le(4)),de(e)&&(e=Ie(t,e),t.parent_||De(t,e)),t.patches_&&Ce("Patches").generateReplacementPatches_(n[ie].base_,e,t.patches_,t.inversePatches_)):e=Ie(t,n,[]),Pe(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==oe?e:void 0}function Ie(e,t,n){if(Se(t))return t;const r=t[ie];if(!r)return fe(t,(o,a)=>Le(e,r,t,o,a,n)),t;if(r.scope_!==e)return t;if(!r.modified_)return De(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const t=r.copy_;let o=t,a=!1;3===r.type_&&(o=new Set(t),t.clear(),a=!0),fe(o,(o,i)=>Le(e,r,t,o,i,n,a)),De(e,t,!1),n&&e.patches_&&Ce("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function Le(e,t,n,r,o,a,i){if(ce(o)){const i=Ie(e,o,a&&t&&3!==t.type_&&!he(t.assigned_,r)?a.concat(r):void 0);if(xe(n,r,i),!ce(i))return;e.canAutoFreeze_=!1}else i&&n.add(o);if(de(o)&&!Se(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Ie(e,o),t&&t.scope_.parent_||"symbol"==typeof r||!Object.prototype.propertyIsEnumerable.call(n,r)||De(e,o)}}function De(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&ve(t,n)}var Oe={get(e,t){if(t===ie)return e;const n=we(e);if(!he(n,t))return function(e,t,n){var r;const o=$e(t,n);return o?"value"in o?o.value:null==(r=o.get)?void 0:r.call(e.draft_):void 0}(e,n,t);const r=n[t];return e.finalized_||!de(r)?r:r===Me(e.base_,t)?(Ue(e),e.copy_[t]=We(r,e)):r},has:(e,t)=>t in we(e),ownKeys:e=>Reflect.ownKeys(we(e)),set(e,t,n){const r=$e(we(e),t);if(null==r?void 0:r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const r=Me(we(e),t),i=null==r?void 0:r[ie];if(i&&i.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(((o=n)===(a=r)?0!==o||1/o==1/a:o!=o&&a!=a)&&(void 0!==n||he(e.base_,t)))return!0;Ue(e),Be(e)}var o,a;return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==Me(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,Ue(e),Be(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const n=we(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty(){le(11)},getPrototypeOf:e=>se(e.base_),setPrototypeOf(){le(12)}},Re={};function Me(e,t){const n=e[ie];return(n?we(n):e)[t]}function $e(e,t){if(!(t in e))return;let n=se(e);for(;n;){const e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=se(n)}}function Be(e){e.modified_||(e.modified_=!0,e.parent_&&Be(e.parent_))}function Ue(e){e.copy_||(e.copy_=ye(e.base_,e.scope_.immer_.useStrictShallowCopy_))}fe(Oe,(e,t)=>{Re[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Re.deleteProperty=function(e,t){return Re.set.call(this,e,t,void 0)},Re.set=function(e,t,n){return Oe.set.call(this,e[0],t,n,e[0])};function We(e,t){const n=ge(e)?Ce("MapSet").proxyMap_(e,t):be(e)?Ce("MapSet").proxySet_(e,t):function(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:_e(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=r,a=Oe;n&&(o=[r],a=Re);const{revoke:i,proxy:l}=Proxy.revocable(o,a);return r.draft_=l,r.revoke_=i,l}(e,t);return(t?t.scope_:_e()).drafts_.push(n),n}function Ve(e){if(!de(e)||Se(e))return e;const t=e[ie];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=ye(e,t.scope_.immer_.useStrictShallowCopy_)}else n=ye(e,!0);return fe(n,(e,t)=>{xe(n,e,Ve(t))}),t&&(t.finalized_=!1),n}var He=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,n)=>{if("function"==typeof e&&"function"!=typeof t){const n=t;t=e;const r=this;return function(e=n,...o){return r.produce(e,e=>t.call(this,e,...o))}}let r;if("function"!=typeof t&&le(6),void 0!==n&&"function"!=typeof n&&le(7),de(e)){const o=Te(this),a=We(e,void 0);let i=!0;try{r=t(a),i=!1}finally{i?Pe(o):Fe(o)}return Ee(o,n),Ne(r,o)}if(!e||"object"!=typeof e){if(r=t(e),void 0===r&&(r=e),r===oe&&(r=void 0),this.autoFreeze_&&ve(r,!0),n){const t=[],o=[];Ce("Patches").generateReplacementPatches_(e,r,t,o),n(t,o)}return r}le(1)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...n)=>this.produceWithPatches(t,t=>e(t,...n));let n,r;return[this.produce(e,t,(e,t)=>{n=e,r=t}),n,r]},"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof(null==e?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){de(e)||le(8),ce(e)&&(e=function(e){ce(e)||le(10);return Ve(e)}(e));const t=Te(this),n=We(e,void 0);return n[ie].isManual_=!0,Fe(t),n}finishDraft(e,t){const n=e&&e[ie];n&&n.isManual_||le(9);const{scope_:r}=n;return Ee(r,t),Ne(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));const r=Ce("Patches").applyPatches_;return ce(e)?r(e,t):this.produce(e,e=>r(e,t))}},qe=He.produce;function Qe(e){return({dispatch:t,getState:n})=>r=>o=>"function"==typeof o?o(t,n,e):r(o)}He.produceWithPatches.bind(He),He.setAutoFreeze.bind(He),He.setUseStrictShallowCopy.bind(He),He.applyPatches.bind(He),He.createDraft.bind(He),He.finishDraft.bind(He);var Ke=Qe(),Ye=Qe,Xe="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?re:re.apply(null,arguments)};function Ge(e,t){function n(...n){if(t){let r=t(...n);if(!r)throw new Error(ct(0));return{type:e,payload:r.payload,..."meta"in r&&{meta:r.meta},..."error"in r&&{error:r.error}}}return{type:e,payload:n[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=t=>function(e){return ee(e)&&"type"in e&&"string"==typeof e.type}(t)&&t.type===e,n}var Je=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return 1===t.length&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}};function Ze(e){return de(e)?qe(e,()=>{}):e}function et(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}var tt=e=>t=>{setTimeout(t,e)},nt=e=>function(t){const{autoBatch:n=!0}=t??{};let r=new Je(e);return n&&r.push(((e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let o=!0,a=!1,i=!1;const l=new Set,s="tick"===e.type?queueMicrotask:"raf"===e.type?"undefined"!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:tt(10):"callback"===e.type?e.queueNotification:tt(e.timeout),c=()=>{i=!1,a&&(a=!1,l.forEach(e=>e()))};return Object.assign({},r,{subscribe(e){const t=r.subscribe(()=>o&&e());return l.add(e),()=>{t(),l.delete(e)}},dispatch(e){var t;try{return o=!(null==(t=null==e?void 0:e.meta)?void 0:t.RTK_autoBatch),a=!o,a&&(i||(i=!0,s(c))),r.dispatch(e)}finally{o=!0}}})})("object"==typeof n?n:void 0)),r};function rt(e){const t={},n=[];let r;const o={addCase(e,n){const r="string"==typeof e?e:e.type;if(!r)throw new Error(ct(28));if(r in t)throw new Error(ct(29));return t[r]=n,o},addMatcher:(e,t)=>(n.push({matcher:e,reducer:t}),o),addDefaultCase:e=>(r=e,o)};return e(o),[t,n,r]}var ot=Symbol.for("rtk-slice-createasyncthunk");function at(e,t){return`${e}/${t}`}function it({creators:e}={}){var t;const n=null==(t=null==e?void 0:e.asyncThunk)?void 0:t[ot];return function(e){const{name:t,reducerPath:r=t}=e;if(!t)throw new Error(ct(11));const o=("function"==typeof e.reducers?e.reducers(function(){function e(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer:e=>Object.assign({[e.name]:(...t)=>e(...t)}[e.name],{_reducerDefinitionType:"reducer"}),preparedReducer:(e,t)=>({_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}),asyncThunk:e}}()):e.reducers)||{},a=Object.keys(o),i={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},l={addCase(e,t){const n="string"==typeof e?e:e.type;if(!n)throw new Error(ct(12));if(n in i.sliceCaseReducersByType)throw new Error(ct(13));return i.sliceCaseReducersByType[n]=t,l},addMatcher:(e,t)=>(i.sliceMatchers.push({matcher:e,reducer:t}),l),exposeAction:(e,t)=>(i.actionCreators[e]=t,l),exposeCaseReducer:(e,t)=>(i.sliceCaseReducersByName[e]=t,l)};function s(){const[t={},n=[],r]="function"==typeof e.extraReducers?rt(e.extraReducers):[e.extraReducers],o={...t,...i.sliceCaseReducersByType};return function(e,t){let n,[r,o,a]=rt(t);if("function"==typeof e)n=()=>Ze(e());else{const t=Ze(e);n=()=>t}function i(e=n(),t){let i=[r[t.type],...o.filter(({matcher:e})=>e(t)).map(({reducer:e})=>e)];return 0===i.filter(e=>!!e).length&&(i=[a]),i.reduce((e,n)=>{if(n){if(ce(e)){const r=n(e,t);return void 0===r?e:r}if(de(e))return qe(e,e=>n(e,t));{const r=n(e,t);if(void 0===r){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return r}}return e},e)}return i.getInitialState=n,i}(e.initialState,e=>{for(let t in o)e.addCase(t,o[t]);for(let t of i.sliceMatchers)e.addMatcher(t.matcher,t.reducer);for(let t of n)e.addMatcher(t.matcher,t.reducer);r&&e.addDefaultCase(r)})}a.forEach(r=>{const a=o[r],i={reducerName:r,type:at(t,r),createNotation:"function"==typeof e.reducers};!function(e){return"asyncThunk"===e._reducerDefinitionType}(a)?function({type:e,reducerName:t,createNotation:n},r,o){let a,i;if("reducer"in r){if(n&&!function(e){return"reducerWithPrepare"===e._reducerDefinitionType}(r))throw new Error(ct(17));a=r.reducer,i=r.prepare}else a=r;o.addCase(e,a).exposeCaseReducer(t,a).exposeAction(t,i?Ge(e,i):Ge(e))}(i,a,l):function({type:e,reducerName:t},n,r,o){if(!o)throw new Error(ct(18));const{payloadCreator:a,fulfilled:i,pending:l,rejected:s,settled:c,options:d}=n,u=o(e,a,d);r.exposeAction(t,u),i&&r.addCase(u.fulfilled,i);l&&r.addCase(u.pending,l);s&&r.addCase(u.rejected,s);c&&r.addMatcher(u.settled,c);r.exposeCaseReducer(t,{fulfilled:i||st,pending:l||st,rejected:s||st,settled:c||st})}(i,a,l,n)});const c=e=>e,d=new Map,u=new WeakMap;let p;function f(e,t){return p||(p=s()),p(e,t)}function m(){return p||(p=s()),p.getInitialState()}function h(t,n=!1){function r(e){let o=e[t];return void 0===o&&n&&(o=et(u,r,m)),o}function o(t=c){const r=et(d,n,()=>new WeakMap);return et(r,t,()=>{const r={};for(const[o,a]of Object.entries(e.selectors??{}))r[o]=lt(a,t,()=>et(u,t,m),n);return r})}return{reducerPath:t,getSelectors:o,get selectors(){return o(r)},selectSlice:r}}const x={name:t,reducer:f,actions:i.actionCreators,caseReducers:i.sliceCaseReducersByName,getInitialState:m,...h(r),injectInto(e,{reducerPath:t,...n}={}){const o=t??r;return e.inject({reducerPath:o,reducer:f},n),{...x,...h(o,!0)}}};return x}}function lt(e,t,n,r){function o(o,...a){let i=t(o);return void 0===i&&r&&(i=n()),e(i,...a)}return o.unwrapped=e,o}function st(){}function ct(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const dt=()=>{try{const e=localStorage.getItem("likedPosts");return e?JSON.parse(e):{}}catch(e){return console.error("좋아요 상태 로드 실패:",e),{}}},ut=e=>{try{localStorage.setItem("likedPosts",JSON.stringify(e))}catch(t){console.error("좋아요 상태 저장 실패:",t)}},pt=e=>{try{const t=JSON.parse(atob(e.split(".")[1]));return t.user_id||t.sub||""}catch{return""}},ft=it()({name:"auth",initialState:{isAuthenticated:!1,user:null,token:null,loading:!1,error:null,likedPosts:dt()},reducers:{loginStart:e=>{e.loading=!0,e.error=null},loginSuccess:(e,t)=>{if(e.loading=!1,e.isAuthenticated=!0,e.token=t.payload.token,e.error=null,t.payload.user)e.user=t.payload.user,localStorage.setItem("userInfo",JSON.stringify(t.payload.user));else{const n=pt(t.payload.token);e.user={user_id:n,username:"loading...",email:"loading..."}}localStorage.setItem("accessToken",t.payload.token)},loginFailure:(e,t)=>{e.loading=!1,e.isAuthenticated=!1,e.user=null,e.token=null,e.error=t.payload},logout:e=>{e.isAuthenticated=!1,e.user=null,e.token=null,e.error=null,e.likedPosts={},localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("userInfo"),localStorage.removeItem("likedPosts")},setUser:(e,t)=>{e.user=t.payload,localStorage.setItem("userInfo",JSON.stringify(t.payload))},setUserInfo:(e,t)=>{e.user=t.payload,localStorage.setItem("userInfo",JSON.stringify(t.payload))},initializeAuth:e=>{const t=localStorage.getItem("accessToken"),n=localStorage.getItem("userInfo");if(t&&n)try{const r=JSON.parse(n);e.token=t,e.user=r,e.isAuthenticated=!0,e.likedPosts=dt()}catch(r){localStorage.removeItem("accessToken"),localStorage.removeItem("userInfo"),localStorage.removeItem("likedPosts")}else if(t)try{const n=pt(t);n?(e.token=t,e.isAuthenticated=!0,e.user={user_id:n,username:"loading...",email:"loading..."},e.likedPosts=dt()):localStorage.removeItem("accessToken")}catch(r){localStorage.removeItem("accessToken")}else e.likedPosts={},localStorage.removeItem("likedPosts")},clearError:e=>{e.error=null},setLikeStatus:(e,t)=>{const{postId:n,liked:r}=t.payload;e.likedPosts[n]=r,console.log("🔧 setLikeStatus 액션 실행:"),console.log("  - postId:",n),console.log("  - liked:",r),console.log("  - 업데이트된 likedPosts:",e.likedPosts);try{const t={...e.likedPosts},n=JSON.stringify(t);localStorage.setItem("likedPosts",n),console.log("✅ localStorage 저장 성공:",n);const r=localStorage.getItem("likedPosts");console.log("🔍 저장 확인:",r)}catch(o){console.error("❌ localStorage 저장 실패:",o)}},removeLikeStatus:(e,t)=>{const n=t.payload;delete e.likedPosts[n],ut(e.likedPosts),console.log("좋아요 상태 제거됨:",n,"localStorage 업데이트됨")},setMultipleLikeStatus:(e,t)=>{e.likedPosts={...e.likedPosts,...t.payload},ut(e.likedPosts)},clearAllLikeStatus:e=>{e.likedPosts={},localStorage.removeItem("likedPosts")}}}),{loginStart:mt,loginSuccess:ht,loginFailure:xt,logout:gt,setUser:bt,setUserInfo:wt,initializeAuth:yt,clearError:vt,setLikeStatus:kt,removeLikeStatus:St,setMultipleLikeStatus:jt,clearAllLikeStatus:zt}=ft.actions,Ct=function(e){const t=function(e){const{thunk:t=!0,immutableCheck:n=!0,serializableCheck:r=!0,actionCreatorCheck:o=!0}=e??{};let a=new Je;return t&&("boolean"==typeof t?a.push(Ke):a.push(Ye(t.extraArgument))),a},{reducer:n,middleware:r,devTools:o=!0,preloadedState:a,enhancers:i}=e||{};let l,s;if("function"==typeof n)l=n;else{if(!ee(n))throw new Error(ct(1));l=ne(n)}s="function"==typeof r?r(t):t();let c=re;o&&(c=Xe({trace:!1,..."object"==typeof o&&o}));const d=function(...e){return t=>(n,r)=>{const o=t(n,r);let a=()=>{throw new Error(X(15))};const i={getState:o.getState,dispatch:(e,...t)=>a(e,...t)},l=e.map(e=>e(i));return a=re(...l)(o.dispatch),{...o,dispatch:a}}}(...s),u=nt(d);return te(l,a,c(..."function"==typeof i?i(u):u()))}({reducer:{auth:ft.reducer},middleware:e=>e({serializableCheck:{ignoredActions:["persist/PERSIST","persist/REHYDRATE"]}})}),_t=t`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Pretendard', sans-serif;
    background-color: #FFEFD5;
    background-attachment: fixed; /* 배경 고정 */
  }

  #root {
    width: 100%;
    min-height: 100vh;
    background-color: #FFEFD5; /* 추가 배경색 보장 */
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`,Et="/assets/Logo-BftjjQ-N.png",Pt=n.header`
  background-color: #FFEFD5;
  padding: 8px 24px;
  display: flex;
  justify-content: center;
  height: 60px;
  position: relative;
`,Ft=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 100%;
`,Tt=n.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
`,At=n.img`
  height: 145px;
  width: auto;
  object-fit: contain;
  position: relative;
  top: -10px;
  
  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s ease;
  }
`,Nt=n.nav`
  display: flex;
  gap: 32px;
  font-size: 17px;
  font-weight: 700;
  align-items: center;
  
  span {
    cursor: pointer;
    color: #000000;
    
    &:hover {
      opacity: 0.7;
      transition: opacity 0.2s ease;
    }
  }
`,It=()=>{const e=a();return w.jsx(Pt,{children:w.jsxs(Ft,{children:[w.jsx(Tt,{onClick:()=>{e("/")},children:w.jsx(At,{src:Et,alt:"꼬두라미"})}),w.jsxs(Nt,{children:[w.jsx("span",{onClick:()=>e("/ReportDetail"),children:"신고상황"}),w.jsx("span",{onClick:()=>e("/CommunityList"),children:"커뮤니티"}),w.jsx("span",{onClick:()=>e("/SupportList"),children:"지원금 및 세미나 정보"})]})]})})},Lt=()=>{const e=a();return w.jsx(Dt,{children:w.jsxs(Ot,{onClick:()=>{e("/report")},children:[" ",w.jsx(Rt,{children:"⚠️"}),w.jsx(Mt,{children:"실시간 피해 신고하기"})]})})},Dt=n.div`
  margin: 20px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`,Ot=n.button`
  width: 100%;
  padding: 15px 200px;
  background-color: #fff;
  border: 2px solid #ff6b6b;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #fff5f5;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 107, 107, 0.2);
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
  }
`,Rt=n.span`
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`,Mt=n.span`
  font-size: 22px;
  color: #ff6b6b;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`,$t=d.create({baseURL:"https://baekend.onrender.com",timeout:8e3,headers:{"Content-Type":"application/json",Accept:"application/json"}}),Bt=()=>{const t=a(),n=e.useRef(null),[r,o]=e.useState([]),[i,l]=e.useState(!0),[s,c]=e.useState(null),d=async()=>{try{l(!0),c(null);const e=await(async()=>{try{console.log("🔄 NewsSection: 세미나/행사 정보 조회 시작...");const e=await $t.get("/rda/ongoing-projects");if(console.log("NewsSection API 응답 상태:",e.status),console.log("NewsSection API 응답 데이터:",e.data),200===e.status&&Array.isArray(e.data))return console.log("✅ NewsSection: 세미나/행사 정보 조회 성공:",e.data.length,"건"),e.data;throw console.warn("❌ NewsSection: 예상과 다른 응답 형식:",e.data),new Error("Invalid response format")}catch(s){throw console.error("❌ NewsSection: 세미나/행사 정보 조회 실패:",s),s}})(),t=e.slice(0,8).map((e,t)=>({id:t+1,category:"공지사항",title:e.title,description:`농촌진흥청에서 제공하는 ${e.title.includes("교육")?"교육":e.title.includes("지원")?"지원사업":e.title.includes("세미나")?"세미나":"프로그램"} 정보입니다.`,date:(new Date).toLocaleDateString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit"}).replace(/\./g,"-").replace(/ /g,""),author:"농촌진흥청",link:e.link}));o(t),console.log("✅ NewsSection: 뉴스 데이터 로드 완료:",t.length,"건")}catch(e){console.error("❌ NewsSection: 데이터 로드 실패:",e),c(e instanceof Error?e.message:"데이터를 불러올 수 없습니다."),o((console.log("📋 NewsSection: 목업 데이터 사용"),[{id:1,category:"공지사항",title:"스마트 농업 현장 문제점 찾아 지원금 지원 세미나",description:"농촌진흥청에서 주관하는 스마트 농업 현장의 다양한 문제 해결을 위한 데이터 수집 및 지원금 안내",date:"2025-06-29",author:"농촌진흥청"},{id:2,category:"교육",title:"디지털 농업 기술 교육 프로그램 안내",description:"최신 디지털 농업 기술 및 스마트팜 운영 노하우에 대한 실무 교육 프로그램",date:"2025-06-28",author:"농촌진흥청"},{id:3,category:"지원사업",title:"친환경 농업 지원 사업 설명회",description:"친환경 농업 실천을 위한 각종 지원 사업 및 혜택에 대한 상세 안내",date:"2025-06-27",author:"농촌진흥청"},{id:4,category:"창업지원",title:"농업인 창업 지원 프로그램",description:"신규 농업인 및 창업을 희망하는 농업인을 위한 맞춤형 지원 프로그램",date:"2025-06-26",author:"농촌진흥청"}]))}finally{l(!1)}};e.useEffect(()=>{d()},[]);return w.jsxs(Ut,{children:[w.jsxs(Wt,{children:[w.jsxs(Vt,{children:["지원금 및 세미나 정보",i&&w.jsx(Ht,{children:" (로딩 중...)"}),s&&w.jsx(qt,{children:" (연결 오류 - 목업 데이터 표시)"})]}),w.jsxs(Kt,{children:[w.jsx(Yt,{onClick:()=>{n.current&&n.current.scrollBy({left:-300,behavior:"smooth"})},disabled:i,children:"◀"}),w.jsx(Yt,{onClick:()=>{n.current&&n.current.scrollBy({left:300,behavior:"smooth"})},disabled:i,children:"▶"}),w.jsx(Yt,{onClick:()=>{t("/SupportList")},children:"≡"})]})]}),i?w.jsx(Qt,{children:"🔄 세미나 정보를 불러오는 중..."}):w.jsx(Xt,{ref:n,children:r.map(e=>w.jsxs(Gt,{onClick:()=>{var n;(n=e).link&&n.link.startsWith("http")?(window.open(n.link,"_blank","noopener,noreferrer"),console.log("🔗 NewsSection: 외부 링크 열기:",n.link)):(t("/SupportDetail",{state:{supportItem:n}}),console.log("📄 NewsSection: 내부 페이지 이동:",n.title))},children:[w.jsx(Jt,{children:e.category}),w.jsx(Zt,{title:e.title,children:e.title}),w.jsx(en,{children:e.description}),w.jsxs(tn,{children:[w.jsx(nn,{children:e.date}),w.jsx(rn,{children:e.author})]})]},e.id))})]})},Ut=n.section`
  width: 100%;
  padding: 40px 20px;
  background-color: #FFEFD5;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px 16px;
  }

  @media (max-width: 480px) {
    padding: 16px 12px;
  }
`,Wt=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
`,Vt=n.h2`
  font-size: 24px;
  color: #333;
  font-weight: bold;
  margin: 0;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`,Ht=n.span`
  font-size: 14px;
  color: #666;
  font-weight: normal;
  margin-left: 8px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`,qt=n.span`
  font-size: 12px;
  color: #e74c3c;
  font-weight: normal;
  margin-left: 8px;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`,Qt=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  font-size: 16px;
  color: #666;
  background-color: #f9f9f9;
  border-radius: 10px;
  border: 2px dashed #ddd;
`,Kt=n.div`
  display: flex;
  gap: 10px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    align-self: flex-end;
  }
`,Yt=n.button`
  width: 40px;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #666;
  transition: all 0.2s;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: #f5f5f5;
    border-color: #999;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    font-size: 12px;
  }
`,Xt=n.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 10px;
  width: 100%;

  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }

  @media (max-width: 768px) {
    gap: 15px;
    
    &::-webkit-scrollbar {
      height: 6px;
    }
  }

  @media (max-width: 480px) {
    gap: 12px;
    
    &::-webkit-scrollbar {
      height: 5px;
    }
  }
`,Gt=n.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  min-width: 280px;
  max-width: 320px;
  flex-shrink: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 8px;
    min-width: 250px;
    max-width: 280px;
  }

  @media (max-width: 480px) {
    padding: 14px;
    min-width: 220px;
    max-width: 250px;
  }

  @media (max-width: 360px) {
    min-width: 200px;
    max-width: 220px;
  }
`,Jt=n.span`
  background-color: #e8f5e8;
  color: #2d5a27;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  align-self: flex-start;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 11px;
    padding: 3px 6px;
  }
`,Zt=n.h3`
  font-size: 16px;
  color: #333;
  margin: 12px 0 8px 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 15px;
    margin: 10px 0 6px 0;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin: 8px 0 6px 0;
  }
`,en=n.p`
  font-size: 13px;
  color: #666;
  margin-bottom: 16px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: keep-all;
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    margin-bottom: 10px;
  }
`,tn=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
  margin-top: auto;

  @media (max-width: 768px) {
    padding-top: 10px;
  }

  @media (max-width: 480px) {
    padding-top: 8px;
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
  }
`,nn=n.span`
  font-size: 12px;
  color: #999;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`,rn=n.span`
  font-size: 12px;
  color: #666;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`,on=({children:e})=>w.jsx(an,{children:e}),an=n.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,ln=()=>q(),sn=Y,cn=d.create({baseURL:"https://baekend.onrender.com",headers:{"Content-Type":"application/json"}}),dn=n.div`
  background-color: #FFEFD5;
  padding: 4px 24px 0 24px;
  display: flex;
  justify-content: center;
`,un=n.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`,pn=n.nav`
  display: flex;
  gap: 24px;
  font-size: 16px;
  font-weight: 700;
  align-items: center;

  span {
    cursor: pointer;
    color: #666464;

    &:hover {
      opacity: 0.7;
      transition: opacity 0.2s ease;
    }
  }
`,fn=n.div`
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
`,mn=n.span`
  cursor: pointer;
  color: #666464;
  
  &:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease;
  }
`,hn=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
`,xn=n.span`
  color: #4CAF50;
  font-weight: 600;
`,gn=n.span`
  cursor: pointer;
  color: #dc3545;
  font-size: 14px;
  
  &:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease;
  }
`,bn=n.span`
  cursor: pointer;
  color: #007bff;
  font-size: 14px;
  
  &:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease;
  }
`,wn=()=>{const t=a(),n=ln(),{isAuthenticated:r,user:o,token:i}=sn(e=>e.auth);e.useEffect(()=>{n(yt())},[n]),e.useEffect(()=>{(async()=>{if(i&&!o)try{const e=await(async e=>(await cn.get("/mypage",{headers:{Authorization:`Bearer ${e}`}})).data.mypage)(i);n(bt({user_id:e.user_id,username:e.username,email:e.email}))}catch(e){console.error("사용자 정보 조회 실패:",e),n(gt())}})()},[i,o,n]);const l=()=>{t("/Mypage")};return w.jsx(dn,{children:w.jsx(un,{children:w.jsx(pn,{children:r&&o?w.jsxs(hn,{children:[w.jsxs(xn,{children:[o.username,"님"]}),w.jsx(bn,{onClick:l,children:"마이페이지"}),w.jsx(gn,{onClick:()=>{window.confirm("로그아웃 하시겠습니까?")&&(n(gt()),t("/"))},children:"로그아웃"})]}):w.jsxs(fn,{children:[w.jsx(mn,{onClick:()=>{t("/login")},children:"로그인 / 회원가입"}),w.jsx(mn,{onClick:l,children:"마이페이지"})]})})})})},yn="/assets/red_marker-Ba_5C3z2.png",vn=e=>null==e?"":String(e),kn=(e,t)=>{const n=vn(e),r=vn(t);if(!n||!r||""===n.trim()||""===r.trim())return!1;const o=parseFloat(n),a=parseFloat(r);return!isNaN(o)&&!isNaN(a)&&o>33&&o<39&&a>125&&a<130},Sn=({reports:t=[],onMarkerClick:n,selectedReport:r,onReportBoxClick:o})=>{const a=e.useRef(null),i=e.useRef(null),l=e.useRef(null);e.useEffect(()=>{console.log("🔄 selectedReport useEffect 실행:",{selectedReport:null==r?void 0:r.title,hasMapInstance:!!i.current,hasInfoWindow:!!l.current}),i.current&&l.current&&(console.log("🔄 selectedReport 변경됨, InfoWindow 업데이트:",null==r?void 0:r.title),setTimeout(()=>{s()},50))},[r,o]);const s=()=>{const e=i.current,t=l.current;if(console.log("🔄 updateInfoWindow 호출됨:",{hasMap:!!e,hasInfoWindow:!!t,selectedReport:null==r?void 0:r.title}),e&&t)if(r){console.log("✅ InfoWindow 표시 시작:",r.title);const n=parseFloat(vn(r.latitude)),a=parseFloat(vn(r.longitude));if(console.log("📍 좌표:",{lat:n,lng:a}),!kn(n,a))return void console.warn("❌ 유효하지 않은 좌표:",n,a);const i=new window.kakao.maps.LatLng(n,a),l=`\n        <div style="\n          padding: 12px; \n          background: white; \n          border-radius: 8px; \n          box-shadow: 0 4px 12px rgba(0,0,0,0.15);\n          min-width: 220px;\n          max-width: 300px;\n          cursor: pointer;\n          border: 1px solid #ddd;\n          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n        " \n        onmouseover="this.style.boxShadow='0 6px 16px rgba(0,0,0,0.2)';"\n        onmouseout="this.style.boxShadow='0 4px 12px rgba(0,0,0,0.15)';"\n        onclick="window.handleReportBoxClick && window.handleReportBoxClick()">\n          <div style="\n            color: #d32f2f; \n            font-size: 15px; \n            font-weight: bold; \n            margin-bottom: 8px;\n            border-bottom: 1px solid #eee;\n            padding-bottom: 6px;\n          ">${r.title}</div>\n          <div style="\n            font-size: 13px; \n            color: #666; \n            background: #f5f5f5; \n            padding: 4px 8px; \n            border-radius: 4px;\n            margin-bottom: 8px;\n            display: inline-block;\n          ">${r.main_category} - ${r.sub_category}</div>\n          <div style="\n            font-size: 11px; \n            color: #999; \n            border-top: 1px solid #eee; \n            padding-top: 6px;\n            line-height: 1.4;\n          ">\n            📍 위도: ${n.toFixed(6)} | 경도: ${a.toFixed(6)}<br/>\n            🎯 마커: ${"재난"===r.main_category?"빨간색 (재난/재해)":"파란색 (병해충)"}\n          </div>\n        </div>\n      `;window.handleReportBoxClick=o,t.setContent(l),t.setPosition(i),t.setMap(e),e.panTo(i),console.log("✅ InfoWindow 표시 완료",{position:{lat:n,lng:a},content:l.substring(0,100)+"..."})}else console.log("🔄 InfoWindow 숨김"),t.setMap(null),delete window.handleReportBoxClick;else console.warn("⚠️ map 또는 infoWindow가 준비되지 않음")};e.useEffect(()=>{const e=()=>{var e;if(!a.current||!(null==(e=window.kakao)?void 0:e.maps))return;a.current.style.width="100%",a.current.style.height="500px",a.current.style.backgroundColor="#FFEFD5";const o=new window.kakao.maps.Map(a.current,{center:new window.kakao.maps.LatLng(36.5,127.8),level:13});i.current=o,l.current=new window.kakao.maps.InfoWindow({zIndex:1e3,removable:!1}),console.log("✅ 지도 및 InfoWindow 초기화 완료"),window.kakao.maps.event.addListener(o,"click",()=>{console.log("🗺️ 지도 클릭됨, InfoWindow 닫기"),n&&n("")}),r&&setTimeout(()=>{s()},100);const c=t.filter(e=>{try{return kn(e.latitude,e.longitude)}catch(t){return console.warn("좌표 검증 중 오류:",t,e),!1}});if(console.log("=== 지도 데이터 처리 ==="),console.log("전체 신고 수:",t.length),console.log("유효한 좌표를 가진 신고 수:",c.length),console.log("유효한 신고 데이터:",c),c.length>0)c.forEach((e,t)=>{try{const r=vn(e.latitude),a=vn(e.longitude),i=parseFloat(r),l=parseFloat(a);if(console.log(`마커 ${t+1} 생성:`,{title:e.title,id:e.id,originalLat:e.latitude,originalLng:e.longitude,convertedLat:i,convertedLng:l,category:e.main_category}),kn(i,l)){let r="",a="",s=null;const c=vn(e.main_category).toLowerCase();c.includes("재난")||c.includes("재해")||"재난"===c||"재해"===c?(r=yn,a="빨간색 (재난/재해)",s=new window.kakao.maps.Size(32,45)):c.includes("병해충")||c.includes("병해")||"병해충"===c?(r="/assets/blue_marker-chpBKDX-.png",a="파란색 (병해충)",s=new window.kakao.maps.Size(28,40)):(r=yn,a="기본",s=new window.kakao.maps.Size(32,45));const d=new window.kakao.maps.MarkerImage(r,s),u=new window.kakao.maps.Marker({position:new window.kakao.maps.LatLng(i,l),title:vn(e.title)||`신고 ${t+1}`,image:d});u.setMap(o),window.kakao.maps.event.addListener(u,"click",()=>{if(console.log("🖱️ 마커 클릭:",{title:e.title,id:e.id,hasOnMarkerClick:!!n}),n)if(e.id)console.log(`✅ onMarkerClick 호출 - ID: ${e.id}`),n(e.id);else{const r=vn(e.title).replace(/\s/g,"_"),o=`temp_${t}_${r}`;console.warn(`⚠️ Report ID 없음, 임시 ID 사용: ${o}`),n(o)}else console.warn("⚠️ onMarkerClick 콜백이 제공되지 않음")}),console.log(`✅ 마커 ${t+1} 생성 완료`)}else console.warn(`❌ 유효하지 않은 좌표: ${e.title}, lat: ${i}, lng: ${l}`)}catch(r){console.error(`❌ 마커 ${t+1} 생성 중 오류:`,r,e)}}),console.log(`🗺️ 총 ${c.length}개의 신고가 지도에 표시되었습니다.`);else{console.log("📍 유효한 신고 데이터가 없어 기본 마커 표시");[{lat:37.5665,lng:126.978,title:"서울"},{lat:35.1796,lng:129.0756,title:"부산"},{lat:35.8714,lng:128.6014,title:"대구"},{lat:37.4563,lng:126.7052,title:"인천"},{lat:35.1595,lng:126.8526,title:"광주"},{lat:36.3504,lng:127.3845,title:"대전"}].forEach(({lat:e,lng:t,title:n})=>{const r=new window.kakao.maps.Marker({position:new window.kakao.maps.LatLng(e,t),title:n});r.setMap(o);const a=new window.kakao.maps.InfoWindow({content:`<div style="padding:5px;">${n} 지역</div>`});window.kakao.maps.event.addListener(r,"click",()=>{a.open(o,r)})})}};return(()=>{var t;const n=document.querySelector('script[src*="dapi.kakao.com"]');if(n)return void((null==(t=window.kakao)?void 0:t.maps)?window.kakao.maps.load(e):n.addEventListener("load",()=>{window.kakao.maps.load(e)}));const r=document.createElement("script");r.src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=b74908d0327634ff8eff0c8309007f61&autoload=false",r.async=!0,r.onload=()=>{window.kakao.maps.load(e)},r.onerror=()=>{console.error("❌ 카카오 지도 API 로딩 실패")},document.head.appendChild(r)})(),()=>{l.current&&l.current.setMap(null),delete window.handleReportBoxClick}},[t,n]);const c=t.filter(e=>{try{return kn(e.latitude,e.longitude)}catch{return!1}}).length;return w.jsx(jn,{children:w.jsxs(zn,{children:[w.jsx(Cn,{ref:a,children:w.jsx(_n,{children:"지도를 불러오는 중..."})}),w.jsx(En,{children:w.jsx(Pn,{onClick:()=>window.location.reload(),children:"🔄 새로고침"})}),t.length>0&&w.jsxs(w.Fragment,{children:[w.jsxs(Fn,{children:[w.jsxs(Tn,{children:["총 ",t.length,"건의 신고"]}),w.jsxs(An,{children:["(위치 정보: ",c,"건)"]})]}),w.jsxs(Nn,{children:[w.jsx(In,{children:"범례"}),w.jsxs(Ln,{children:[w.jsx(Dn,{children:"●"}),w.jsx(Rn,{children:"재난/재해"})]}),w.jsxs(Ln,{children:[w.jsx(On,{children:"●"}),w.jsx(Rn,{children:"병해충"})]})]})]})]})})},jn=n.section`
  padding: 20px;
  background-color: #FFEFD5;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 10px;
  }
`,zn=n.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background: #fff;
  
  @media (min-width: 1400px) {
    width: 60vw;
  }
  
  @media (max-width: 1399px) {
    width: 80vw;
  }
  
  @media (max-width: 768px) {
    width: 95vw;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    border-radius: 6px;
    margin: 0;
  }
`,Cn=n.div`
  width: 100% !important;
  height: 500px !important;
  background-color: #FFEFD5 !important;
  
  @media (max-width: 1024px) {
    height: 450px !important;
  }
  
  @media (max-width: 768px) {
    height: 400px !important;
  }
  
  @media (max-width: 640px) {
    height: 350px !important;
  }
  
  @media (max-width: 480px) {
    height: 300px !important;
  }
  
  @media (max-width: 360px) {
    height: 280px !important;
  }
`,_n=n.div`
  font-size: 16px;
  color: #666;
  text-align: center;
  padding-top: 240px;
  
  @media (max-width: 768px) {
    padding-top: 190px;
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    padding-top: 140px;
    font-size: 13px;
  }
`,En=n.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  
  @media (max-width: 480px) {
    top: 5px;
    right: 5px;
  }
`,Pn=n.button`
  background: skyblue;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 12px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  white-space: nowrap;
  
  &:hover {
    background-color: #f5f5f5;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 480px) {
    padding: 6px 8px;
    font-size: 11px;
  }
`,Fn=n.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(255, 255, 255, 0.95);
  padding: 10px 12px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  
  @media (max-width: 480px) {
    bottom: 5px;
    left: 5px;
    padding: 8px 10px;
    border-radius: 6px;
  }
`,Tn=n.div`
  font-size: 14px;
  font-weight: 600;
  color: #d32f2f;
  margin-bottom: 2px;
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`,An=n.div`
  font-size: 11px;
  color: #666;
  
  @media (max-width: 480px) {
    font-size: 10px;
  }
`,Nn=n.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(255, 255, 255, 0.95);
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  
  @media (max-width: 768px) {
    padding: 10px;
  }
  
  @media (max-width: 480px) {
    top: 5px;
    left: 5px;
    padding: 8px;
    border-radius: 6px;
    max-width: 120px;
  }
`,In=n.div`
  font-size: 13px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  
  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 6px;
  }
`,Ln=n.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 3px;
  }
`,Dn=n.span`
  color: #ff4444;
  font-size: 16px;
  margin-right: 6px;
  font-weight: bold;
  
  @media (max-width: 480px) {
    font-size: 14px;
    margin-right: 4px;
  }
`,On=n.span`
  color: #4285f4;
  font-size: 16px;
  margin-right: 6px;
  font-weight: bold;
  
  @media (max-width: 480px) {
    font-size: 14px;
    margin-right: 4px;
  }
`,Rn=n.span`
  font-size: 11px;
  color: #666;
  
  @media (max-width: 480px) {
    font-size: 10px;
  }
`,Mn=()=>(console.log("📋 Home: 목업 데이터 사용"),{reports:[{title:"다저벌악",main_category:"병해충",sub_category:"병해",latitude:"35.7336908241694",longitude:"127.06573190851746",id:"mock_report_1"},{title:"제주도 태풍",main_category:"재난",sub_category:"태풍",latitude:"33.2375195759578",longitude:"126.515860406201",id:"mock_report_2"},{title:"전주 지진 발생",main_category:"재난",sub_category:"지진",latitude:"37.5665",longitude:"126.978",id:"mock_report_3"},{title:"대구 산불",main_category:"재난",sub_category:"산불",latitude:"35.8714",longitude:"128.6014",id:"mock_report_4"},{title:"부산 태풍",main_category:"재난",sub_category:"태풍",latitude:"35.1796",longitude:"129.0756",id:"mock_report_5"}]}),$n=()=>{const t=a(),[n,r]=e.useState([]),[o,i]=e.useState(!0),[l,s]=e.useState(null),[c,d]=e.useState(null);e.useEffect(()=>{(async()=>{try{i(!0),s(null);const e=await(async()=>{var e;try{console.log("🏠 Home: 최근 신고 데이터 조회 시작...");const t=await fetch("https://baekend.onrender.com/reports/recent",{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"},mode:"cors"});if(console.log("🏠 Home: API 응답 상태:",t.status),!t.ok)return console.warn(`🏠 Home: API 호출 실패 (${t.status}), 목업 데이터 사용`),Mn();const n=t.headers.get("content-type");if(!n||!n.includes("application/json"))return console.warn("🏠 Home: JSON 응답이 아님, 목업 데이터 사용"),Mn();const r=await t.json();return console.log("✅ Home: 실제 신고 데이터 로드 성공:",(null==(e=r.reports)?void 0:e.length)||0,"건"),r}catch(l){return console.error("❌ Home: API 호출 실패:",l),console.log("🔄 Home: 목업 데이터로 대체"),Mn()}})();r(e.reports),console.log("🏠 Home: 신고 데이터 로드 완료:",{"총신고수":e.reports.length,"유효한좌표":e.reports.filter(e=>e.latitude&&e.longitude).length})}catch(e){console.error("❌ Home: 신고 데이터 로드 실패:",e),s("신고 데이터를 불러올 수 없습니다.");const t=Mn();r(t.reports)}finally{i(!1)}})()},[]);return console.log("🏠 Home 렌더링:",{loading:o,error:l,reportsCount:n.length,selectedReport:null==c?void 0:c.title}),w.jsxs(w.Fragment,{children:[w.jsx(wn,{}),w.jsx(It,{}),w.jsx(on,{children:w.jsxs(Bn,{children:[w.jsx(Un,{children:w.jsx(Wn,{children:w.jsx(Sn,{reports:n,onMarkerClick:e=>{if(console.log("🏠 Home: 마커 클릭됨, 마커 위 신고내역 박스 표시:",e),""===e)return void d(null);const t=n.find(t=>t.id===e);t&&d(t)},selectedReport:c,onReportBoxClick:()=>{(null==c?void 0:c.id)&&(console.log("🏠 Home: 신고내역 박스 클릭됨, ReportDetail로 이동:",c.id),t("/ReportDetail",{state:{selectedReportId:c.id,fromHome:!0}}))}})})}),w.jsx(Lt,{}),w.jsx(Bt,{})]})})]})},Bn=n.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,Un=n.section`
  width: 100%;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;n.h2`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 22px;
  }
  
  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 8px;
  }
`,n.p`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 15px;
    padding: 0 10px;
  }
`;const Wn=n.div`
  position: relative;
  width: 100%;
`,Vn=n.div`
  margin-bottom: 20px;
`,Hn=n.label`
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`,qn=n.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f9f9f9;
  color: #333;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4CAF50;
    background-color: white;
  }

  &::placeholder {
    color: #999;
  }
`,Qn=({label:e,type:t="text",placeholder:n,value:r,onChange:o,required:a=!1})=>w.jsxs(Vn,{children:[w.jsx(Hn,{children:e}),w.jsx(qn,{type:t,placeholder:n,value:r,onChange:o,required:a})]}),Kn=n.button.withConfig({shouldForwardProp:e=>!["variant","fullWidth"].includes(e)})`
  padding: 14px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  width: ${e=>e.fullWidth?"100%":"auto"};

  ${e=>"primary"===e.variant&&"\n    background-color: #F4B942;\n    color: white;\n    \n    &:hover {\n      background-color: #E5A532;\n      transform: translateY(-1px);\n    }\n    \n    &:active {\n      transform: translateY(0);\n    }\n  "}

  ${e=>"secondary"===e.variant&&"\n    background-color: transparent;\n    color: #666;\n    border: 1px solid #ddd;\n    \n    &:hover {\n      background-color: #f5f5f5;\n    }\n  "}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    
    &:hover {
      transform: none;
    }
  }
`,Yn=({children:e,onClick:t,type:n="button",variant:r="primary",fullWidth:o=!1,disabled:a=!1})=>w.jsx(Kn,{type:n,onClick:t,variant:r,fullWidth:o,disabled:a,children:e}),Xn=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`,Gn=n.img`
  width: 150px;
  height: 150px;
  user-select: none;
`;n.h1`
  font-size: 28px;
  font-weight: 700;
  color: #4CAF50;
  margin: 0;
  letter-spacing: -0.5px;
  user-select: none;
`;const Jn=()=>{const e=a();return w.jsx(Xn,{onClick:()=>{e("/")},children:w.jsx(Gn,{src:Et,alt:"꼬두라미 로고"})})},Zn=d.create({baseURL:"https://baekend.onrender.com",headers:{"Content-Type":"application/json"}}),er=async e=>(await Zn.post("/login",e)).data,tr=n.div`
  min-height: 100vh;
  background-color: #FFEFD5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`,nr=n.div`
  background-color: #FFEFD5;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0);
  width: 100%;
  max-width: 400px;
`,rr=n.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
`,or=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid #eee;
`,ar=n.button`
  background: none;
  border: none;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  
  &:hover {
    color: #4CAF50;
  }
`,ir=n(ar)`
  color: #4CAF50;
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,lr=n.div`
  color: #dc3545;
  font-size: 14px;
  margin-top: 8px;
  padding: 8px 12px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
`,sr=n.div`
  color: #155724;
  font-size: 14px;
  margin-top: 8px;
  padding: 8px 12px;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
`,cr=n.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  z-index: 10;
`,dr=n.div`
  position: relative;
`,ur=n.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`,pr=n.div`
  background-color: #FFEFD5;
  border-radius: 16px;
  padding: 30px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 480px) {
    padding: 20px;
    margin: 0 10px;
  }
`,fr=n.h2`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`,mr=n.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`,hr=n.button`
  flex: 1;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
`,xr=n(hr)`
  background-color: #6c757d;
  color: white;
  
  &:hover {
    background-color: #5a6268;
  }
`,gr=n(hr)`
  background-color: #FBBF77;
  color: white;
  
  &:hover {
    background-color: #E6AB65;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`,br=n.div`
  margin-bottom: 20px;
`,wr=n.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
`,yr=n.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
  line-height: 1.4;
`,vr=()=>{const t=a(),n=ln(),{loading:r,error:o,isAuthenticated:i}=sn(e=>e.auth),[l,s]=e.useState({email:"",password:""}),[c,d]=e.useState(null),[u,p]=e.useState(!1),[f,m]=e.useState("login"),[h,x]=e.useState({email:"",password:"",currentPassword:"",newPassword:"",confirmPassword:""}),[g,b]=e.useState(!1),[y,v]=e.useState(""),[k,S]=e.useState("");e.useEffect(()=>{i&&t("/")},[i,t]),e.useEffect(()=>{n(vt())},[n]);const j=e=>t=>{s(n=>({...n,[e]:t.target.value})),o&&n(vt())},z=e=>t=>{x(n=>({...n,[e]:t.target.value})),y&&v("")};return w.jsxs(tr,{children:[w.jsxs(dr,{children:[w.jsxs(nr,{children:[w.jsx(Jn,{}),w.jsxs("form",{onSubmit:async e=>{var r,o,a,i,s,c,u,p;if(e.preventDefault(),l.email&&l.password?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l.email)||(n(xt("올바른 이메일 형식을 입력해주세요.")),0):(n(xt("이메일과 비밀번호를 입력해주세요.")),0)){n(mt());try{const e={email:l.email,password:l.password};console.log("전송할 로그인 데이터:",e);const r=await er(e);console.log("로그인 응답:",r);const o=await(async e=>(await Zn.get("/mypage",{headers:{Authorization:`Bearer ${e}`}})).data)(r.access_token);console.log("사용자 정보:",o),n(ht({user:{user_id:o.mypage.user_id,username:o.mypage.username,email:o.mypage.email},token:r.access_token})),d(r.message),setTimeout(()=>{t("/")},1500)}catch(f){console.error("로그인 오류:",f),console.error("응답 데이터:",null==(r=f.response)?void 0:r.data),console.error("응답 상태:",null==(o=f.response)?void 0:o.status);let e="로그인 중 오류가 발생했습니다.";401===(null==(a=f.response)?void 0:a.status)?e="이메일 또는 비밀번호가 틀렸습니다.":500===(null==(i=f.response)?void 0:i.status)?e="서버 내부 오류가 발생했습니다.":(null==(c=null==(s=f.response)?void 0:s.data)?void 0:c.message)?e=f.response.data.message:(null==(p=null==(u=f.response)?void 0:u.data)?void 0:p.detail)?e=Array.isArray(f.response.data.detail)?f.response.data.detail.map(e=>{var t;return`${(null==(t=e.loc)?void 0:t[1])||"필드"}: ${e.msg}`}).join(", "):f.response.data.detail:f.message&&(e=f.message),n(xt(e))}}},children:[w.jsx(Qn,{label:"이메일",type:"email",placeholder:"이메일을 입력하세요.",value:l.email,onChange:j("email"),required:!0}),w.jsx(Qn,{label:"비밀번호",type:"password",placeholder:"비밀번호를 입력하세요.",value:l.password,onChange:j("password"),required:!0}),o&&w.jsx(lr,{children:o}),c&&w.jsx(sr,{children:c}),w.jsx(rr,{children:w.jsx(Yn,{type:"submit",fullWidth:!0,disabled:r,children:r?"로그인 중...":"로그인"})}),w.jsxs(or,{children:[w.jsx(ar,{onClick:()=>{p(!0),m("login"),v(""),S(""),x({email:"",password:"",currentPassword:"",newPassword:"",confirmPassword:""})},children:"비밀번호 변경"}),w.jsx(ir,{onClick:()=>{t("/signup")},children:"회원가입"})]})]})]}),r&&w.jsx(cr,{children:w.jsx("div",{children:"로그인 중..."})})]}),u&&w.jsx(ur,{children:w.jsxs(pr,{children:[w.jsx(fr,{children:"비밀번호 변경"}),"login"===f?w.jsxs(br,{children:[w.jsx(wr,{children:"1단계: 본인 확인"}),w.jsx(yr,{children:"비밀번호 변경을 위해 현재 계정 정보를 입력해주세요."}),w.jsx(Qn,{label:"이메일",type:"email",placeholder:"이메일을 입력하세요",value:h.email,onChange:z("email")}),w.jsx(Qn,{label:"현재 비밀번호",type:"password",placeholder:"현재 비밀번호를 입력하세요",value:h.password,onChange:z("password")}),y&&w.jsx(lr,{children:y}),w.jsxs(mr,{children:[w.jsx(xr,{onClick:()=>{p(!1),m("login"),v(""),S(""),x({email:"",password:"",currentPassword:"",newPassword:"",confirmPassword:""})},disabled:g,children:"취소"}),w.jsx(gr,{onClick:async()=>{var e,t,n;if(h.email&&h.password){b(!0),v("");try{const e={email:h.email,password:h.password};await er(e);x(e=>({...e,currentPassword:e.password})),m("change")}catch(r){console.error("비밀번호 변경 로그인 오류:",r);let o="로그인에 실패했습니다.";401===(null==(e=r.response)?void 0:e.status)?o="이메일 또는 비밀번호가 틀렸습니다.":(null==(n=null==(t=r.response)?void 0:t.data)?void 0:n.message)&&(o=r.response.data.message),v(o)}finally{b(!1)}}else v("이메일과 현재 비밀번호를 입력해주세요.")},disabled:g,children:g?"확인 중...":"다음"})]})]}):w.jsxs(br,{children:[w.jsx(wr,{children:"2단계: 새 비밀번호 설정"}),w.jsx(yr,{children:"새로운 비밀번호를 입력해주세요. (최소 6자 이상)"}),w.jsx(Qn,{label:"새 비밀번호",type:"password",placeholder:"새 비밀번호를 입력하세요",value:h.newPassword,onChange:z("newPassword")}),w.jsx(Qn,{label:"새 비밀번호 확인",type:"password",placeholder:"새 비밀번호를 다시 입력하세요",value:h.confirmPassword,onChange:z("confirmPassword")}),y&&w.jsx(lr,{children:y}),k&&w.jsx(sr,{children:k}),w.jsxs(mr,{children:[w.jsx(xr,{onClick:()=>m("login"),disabled:g,children:"이전"}),w.jsx(gr,{onClick:async()=>{var e,t,n,r,o,a;if(h.currentPassword&&h.newPassword&&h.confirmPassword?h.newPassword.length<6?(v("새 비밀번호는 최소 6자 이상이어야 합니다."),0):h.newPassword!==h.confirmPassword?(v("새 비밀번호와 확인 비밀번호가 일치하지 않습니다."),0):h.currentPassword!==h.newPassword||(v("새 비밀번호는 현재 비밀번호와 달라야 합니다."),0):(v("모든 필드를 입력해주세요."),0)){b(!0),v("");try{const e=await er({email:h.email,password:h.currentPassword}),t={current_password:h.currentPassword,new_password:h.newPassword},n=await(async(e,t)=>(await Zn.patch("/change-password",e,{headers:{Authorization:`Bearer ${t}`}})).data)(t,e.access_token);S(n.message),setTimeout(()=>{p(!1),m("login"),x({email:"",password:"",currentPassword:"",newPassword:"",confirmPassword:""}),S("")},2e3)}catch(i){console.error("비밀번호 변경 오류:",i);let l="비밀번호 변경에 실패했습니다.";401===(null==(e=i.response)?void 0:e.status)?l="현재 비밀번호가 틀렸습니다.":400===(null==(t=i.response)?void 0:t.status)?l="비밀번호 형식이 올바르지 않습니다.":(null==(r=null==(n=i.response)?void 0:n.data)?void 0:r.message)?l=i.response.data.message:(null==(a=null==(o=i.response)?void 0:o.data)?void 0:a.detail)&&(l=Array.isArray(i.response.data.detail)?i.response.data.detail.map(e=>{var t;return`${(null==(t=e.loc)?void 0:t[1])||"필드"}: ${e.msg}`}).join(", "):i.response.data.detail),v(l)}finally{b(!1)}}},disabled:g,children:g?"변경 중...":"비밀번호 변경"})]})]})]})})]})},kr=n.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`,Sr=n.input`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  cursor: pointer;
  accent-color: #4CAF50;
`,jr=n.label`
  font-size: 14px;
  color: #333;
  cursor: pointer;
  user-select: none;
`,zr=({label:e,checked:t,onChange:n})=>w.jsxs(kr,{children:[w.jsx(Sr,{type:"checkbox",checked:t,onChange:e=>n(e.target.checked)}),w.jsx(jr,{children:e})]}),Cr={1:"서울",2:"부산광역시",3:"대구광역시",4:"인천광역시",5:"광주광역시",6:"대전광역시",7:"울산광역시",8:"세종특별자치시",9:"경기도",11:"충청북도",12:"충청남도",13:"전라북도",14:"전라남도",15:"경상북도",16:"경상남도",17:"제주특별자치도"},_r=d.create({baseURL:"https://baekend.onrender.com",headers:{"Content-Type":"application/json"}}),Er=n.div`
  min-height: 100vh;
  background-color: #FFEFD5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`,Pr=n.div`
  background-color: #FFEFD5;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0);
  width: 100%;
  max-width: 480px;
`,Fr=n.div`
  margin: 24px 0;
  padding: 16px;
  background-color: #FFEFD5;
  border-radius: 8px;
`,Tr=n.div`
  margin-bottom: 20px;
`,Ar=n.label`
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  
  @media (max-width: 480px) {
    font-size: 15px;
  }
`,Nr=n.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Ir=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Lr=n.input`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f9f9f9;
  color: #333;
  
  &:focus {
    outline: none;
    border-color: #4CAF50;
    background-color: white;
  }
  
  &:disabled {
    background-color: #f5f5f5;
    color: #666;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 15px;
  }
`,Dr=n.select`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f9f9f9;
  color: #333;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #4CAF50;
    background-color: white;
  }
  
  &:disabled {
    background-color: #f5f5f5;
    color: #666;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 15px;
  }
`,Or=n.button`
  padding: 12px 20px;
  background-color: #FBBF77;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    background-color: #e0a768;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 13px;
  }
`,Rr=n.div`
  font-size: 12px;
  color: #666;
  margin-top: 5px;
`,Mr=n.div`
  color: #dc3545;
  font-size: 14px;
  margin-top: 8px;
  padding: 8px 12px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
`,$r=n.div`
  color: #155724;
  font-size: 14px;
  margin-top: 8px;
  padding: 8px 12px;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
`,Br=n.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  z-index: 10;
`,Ur=n.div`
  position: relative;
`,Wr=()=>{const t=a(),[n,r]=e.useState({username:"",email:"",password:"",phone_num:"",crop_name:"",local_id:0,region_name:""}),[o,i]=e.useState({ageConfirm:!1,specialChars:!1,duplicateCheck:!1}),[l,s]=e.useState(!1),[c,d]=e.useState(null),[u,p]=e.useState(null),[f,m]=e.useState(!1),[h,x]=e.useState(!1),g=e=>t=>{const n=t.target.value;r(t=>({...t,[e]:n})),"password"===e?(e=>{const t=e.length>=8&&e.length<=15,n=/[!@#$%^&*(),.?":{}|<>]/.test(e);i(e=>({...e,ageConfirm:t,specialChars:n}))})(n):"email"===e&&(x(!1),i(e=>({...e,duplicateCheck:!1})),clearTimeout(window.emailTimeout),window.emailTimeout=setTimeout(()=>{n.trim()&&(async e=>{if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))return x(!1),void i(e=>({...e,duplicateCheck:!1}));try{setTimeout(()=>{x(!0),i(e=>({...e,duplicateCheck:!0}))},500)}catch(t){x(!1),i(e=>({...e,duplicateCheck:!1}))}})(n)},1e3)),c&&d(null)},b=e=>t=>{"ageConfirm"!==e&&"specialChars"!==e&&"duplicateCheck"!==e&&i(n=>({...n,[e]:t}))};return w.jsx(Er,{children:w.jsxs(Ur,{children:[w.jsxs(Pr,{children:[w.jsx(Jn,{}),w.jsxs("form",{onSubmit:async e=>{var r,a,i,l,c,u,f;if(e.preventDefault(),n.username&&n.email&&n.password&&n.phone_num?n.password.length<8||n.password.length>15?(d("비밀번호는 8자 이상, 15자 이하로 설정해주세요."),0):/[!@#$%^&*(),.?":{}|<>]/.test(n.password)?o.ageConfirm&&o.specialChars?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)?/^[0-9-]+$/.test(n.phone_num)||(d("올바른 전화번호 형식을 입력해주세요."),0):(d("올바른 이메일 형식을 입력해주세요."),0):(d("필수 약관에 동의해주세요."),0):(d("비밀번호에 특수문자를 포함해주세요."),0):(d("모든 필수 필드를 입력해주세요."),0)){s(!0),d(null),p(null);try{const e={username:n.username,email:n.email,password:n.password,phone_num:n.phone_num.replace(/[^0-9]/g,""),crop_name:n.crop_name,local_id:n.local_id||1};console.log("전송할 데이터:",e);const r=await(async e=>(await _r.post("/register",e)).data)(e);p(r.message||"✅ 회원가입이 완료되었습니다!"),setTimeout(()=>{t("/login")},2e3)}catch(m){console.error("회원가입 오류:",m),console.error("응답 데이터:",null==(r=m.response)?void 0:r.data),console.error("응답 상태:",null==(a=m.response)?void 0:a.status);let e="회원가입 중 오류가 발생했습니다.";500===(null==(i=m.response)?void 0:i.status)?e="서버 내부 오류가 발생했습니다. 백엔드 로그를 확인해주세요.":(null==(c=null==(l=m.response)?void 0:l.data)?void 0:c.message)?e=m.response.data.message:(null==(f=null==(u=m.response)?void 0:u.data)?void 0:f.detail)?e=Array.isArray(m.response.data.detail)?m.response.data.detail.map(e=>{var t;return`${(null==(t=e.loc)?void 0:t[1])||"필드"}: ${e.msg}`}).join(", "):m.response.data.detail:m.message&&(e=m.message),d(e)}finally{s(!1)}}},children:[w.jsx(Qn,{label:"이름",placeholder:"이름을 입력하세요.",value:n.username,onChange:g("username"),required:!0}),w.jsx(Qn,{label:"이메일",type:"email",placeholder:"이메일을 입력하세요.",value:n.email,onChange:g("email"),required:!0}),w.jsx(Qn,{label:"비밀번호",type:"password",placeholder:"비밀번호를 입력하세요.",value:n.password,onChange:g("password"),required:!0}),w.jsx(Qn,{label:"전화번호",type:"tel",placeholder:"010-1234-5678",value:n.phone_num,onChange:g("phone_num"),required:!0}),w.jsx(Qn,{label:"재배작물",placeholder:"재배하는 작물을 입력하세요",value:n.crop_name,onChange:g("crop_name")}),w.jsxs(Tr,{children:[w.jsx(Ar,{children:"지역 (선택)"}),w.jsxs(Nr,{children:[w.jsxs(Ir,{children:[f?w.jsxs(Dr,{value:n.local_id,onChange:e=>{const t=parseInt(e.target.value),n=Cr[t]||"";r(e=>({...e,local_id:t,region_name:n}))},children:[w.jsx("option",{value:0,children:"지역을 선택하세요"}),Object.entries(Cr).map(([e,t])=>w.jsxs("option",{value:parseInt(e),children:[t," (지역번호: ",e,")"]},e))]}):w.jsx(Lr,{type:"text",value:n.local_id?`${n.region_name} (지역번호: ${n.local_id})`:"지역을 선택해주세요",disabled:!0,placeholder:"지역을 선택해주세요"}),w.jsx(Or,{type:"button",onClick:()=>{m(!f),f&&r(e=>({...e,local_id:0,region_name:""}))},disabled:l,children:f?"취소":"지역찾기"})]}),f&&w.jsx(Rr,{children:"💡 지역을 선택하면 지역번호가 자동으로 설정됩니다."})]})]}),w.jsxs(Fr,{children:[w.jsx(zr,{label:"8자 이상, 15자 이하로 설정해 주세요.",checked:o.ageConfirm,onChange:b("ageConfirm"),disabled:!0}),w.jsx(zr,{label:"특수 문자를 사용해 주세요.",checked:o.specialChars,onChange:b("specialChars"),disabled:!0}),w.jsx(zr,{label:h?"사용 가능한 이메일입니다.":"이메일 중복 확인 중...",checked:o.duplicateCheck,onChange:b("duplicateCheck"),disabled:!0})]}),c&&w.jsx(Mr,{children:c}),u&&w.jsx($r,{children:u}),w.jsx(Yn,{type:"submit",fullWidth:!0,disabled:l,children:l?"처리중...":"회원가입"})]})]}),l&&w.jsx(Br,{children:w.jsx("div",{children:"처리중..."})})]})})},Vr=n.div`
  width: 100%; // 또는 max-width: inherit;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`,Hr=n.div`
  display: flex;
  width: 50%; /* FileUpload보다 좁게 (반절 정도) */
  min-width: 250px;
  max-width: 500px;
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 80%; /* 모바일 대응 */
  }
`,qr=n.button`
  flex: 1;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: ${({$active:e})=>e?"#FBBF77":"#F4F4F4"};
  color: black;
  border: none;
  border-right: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:last-child {
    border-right: none;
  }
`,Qr=({activeTab:e,onTabChange:t})=>w.jsx(Vr,{children:w.jsxs(Hr,{children:[w.jsx(qr,{$active:"disaster"===e,onClick:()=>t("disaster"),children:"재난/재해"}),w.jsx(qr,{$active:"pest"===e,onClick:()=>t("pest"),children:"병해충"})]})}),Kr=n.div`
  margin-bottom: 24px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    margin-bottom: 16px;
  }
`,Yr=n.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: white;
  color: black;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border-color: #0066ff;
    box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.1);
  }

  &::placeholder {
    color: #999;
  }

  @media (max-width: 1024px) {
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.7rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.65rem;
  }
`,Xr=n.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: white;
  color: black;
  box-sizing: border-box;
  outline: none;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  line-height: 1.5;

  &:focus {
    border-color: #0066ff;
    box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.1);
  }

  &::placeholder {
    color: #999;
  }

  @media (max-width: 1024px) {
    font-size: 0.95rem;
    min-height: 110px;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.7rem;
    min-height: 100px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.65rem;
    min-height: 90px;
  }
`,Gr=({type:e="text",value:t,onChange:n,placeholder:r,required:o=!1,rows:a=4})=>{const i=e=>{n(e.target.value)};return w.jsx(Kr,{children:"textarea"===e?w.jsx(Xr,{value:t,onChange:i,placeholder:r,rows:a,required:o}):w.jsx(Yr,{type:"text",value:t,onChange:i,placeholder:r,required:o})})},Jr=n.div`
  margin-bottom: 24px;
  background-color: #FFEFD5;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`,Zr=n.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 12px;
  color: #000;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 8px;
  }
`,eo=n.div`
  border: 1px solid #ccc;
  border-radius: 2px;
  background-color: white;
  overflow: hidden;
  width: 100%;
`,to=n.div`
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 6px 10px;
  }

  @media (max-width: 480px) {
    padding: 6px 8px;
  }
`,no=n.input`
  margin-right: 8px;

  @media (max-width: 480px) {
    margin-right: 6px;
  }
`,ro=n.div`
  padding: 40px 12px;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 32px 12px;
  }

  @media (max-width: 768px) {
    padding: 24px 10px;
  }

  @media (max-width: 480px) {
    padding: 20px 8px;
  }
`,oo=n.p`
  color: #000;
  font-size: 0.875rem;
  margin-bottom: 16px;

  @media (max-width: 1024px) {
    font-size: 0.825rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    margin-bottom: 10px;
  }
`,ao=n.div`
  display: flex;
  justify-content: center;
`,io=n.div`
  width: 40px;
  height: 40px;
  border: 1px solid #999;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 36px;
    height: 36px;
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
  }
`,lo=n.div`
  background-color: #d9d9d9;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px 12px;

  @media (max-width: 768px) {
    padding: 6px 10px;
    gap: 6px;
  }

  @media (max-width: 480px) {
    padding: 6px 8px;
    gap: 6px;
  }
`,so=n.label`
  font-size: 0.875rem;
  color: #0066cc;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 1024px) {
    font-size: 0.825rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`,co=n.button`
  font-size: 0.875rem;
  color: #000;
  cursor: ${({disabled:e})=>e?"default":"pointer"};
  background: none;
  border: none;

  &:hover {
    text-decoration: ${({disabled:e})=>e?"none":"underline"};
  }

  @media (max-width: 1024px) {
    font-size: 0.825rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`,uo=n.div`
  margin-top: 16px;

  @media (max-width: 768px) {
    margin-top: 12px;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
  }
`,po=n.div`
  background-color: #f8f8f8;
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.875rem;
  word-break: break-word;

  & + & {
    margin-top: 8px;
  }

  span {
    flex: 1 1 auto;
    margin-right: 8px;
    color: #000;
  }

  button {
    color: #cc0000;
    border: none;
    background: none;
    font-size: 0.875rem;
    cursor: pointer;
    flex-shrink: 0;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 1024px) {
      font-size: 0.825rem;
    }

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }

    @media (max-width: 480px) {
      font-size: 0.75rem;
    }
  }

  @media (max-width: 1024px) {
    font-size: 0.825rem;
    padding: 7px 10px;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 6px 10px;

    & + & {
      margin-top: 6px;
    }

    span {
      margin-right: 6px;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 6px 8px;

    span {
      margin-right: 6px;
    }
  }
`,fo=n.p`
  font-size: 0.875rem;
  font-weight: bold;
  margin-bottom: 8px;
  color: #000;

  @media (max-width: 1024px) {
    font-size: 0.825rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 6px;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    margin-bottom: 6px;
  }
`,mo=n.span`
  font-size: 0.875rem;
  color: #000;

  @media (max-width: 1024px) {
    font-size: 0.825rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`,ho=({files:e,onFilesChange:t,required:n=!1})=>w.jsxs(Jr,{children:[w.jsx(Zr,{children:"사진/동영상"}),w.jsxs(eo,{children:[w.jsxs(to,{children:[w.jsx(no,{type:"checkbox"}),w.jsx(mo,{children:"파일이름"})]}),w.jsxs(ro,{children:[w.jsx(oo,{children:"이곳을 더블클릭 또는 파일을 드래그 하세요."}),w.jsx(ao,{children:w.jsx(io,{children:w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#999",viewBox:"0 0 24 24",width:"24",height:"24",children:w.jsx("path",{d:"M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"})})})}),w.jsx("input",{type:"file",multiple:!0,accept:"image/*,video/*",onChange:n=>{const r=n.target.files;if(r){const n=Array.from(r);t([...e,...n])}},className:"hidden",id:"file-upload"})]}),w.jsxs(lo,{children:[w.jsx(so,{htmlFor:"file-upload",children:"파일 추가"}),w.jsx(co,{onClick:()=>t([]),disabled:0===e.length,children:"전체 삭제"})]})]}),e.length>0&&w.jsxs(uo,{children:[w.jsx(fo,{children:"업로드된 파일:"}),e.map((n,r)=>w.jsxs(po,{children:[w.jsx("span",{children:n.name}),w.jsx("button",{onClick:()=>(n=>{const r=e.filter((e,t)=>t!==n);t(r)})(r),children:"삭제"})]},r))]})]}),xo=n.div`
  text-align: center;
  justify-content: center; // 버튼을 가운데로 정렬
  margin-top: 0.01rem;
  margin-bottom: 1rem;
`,go=n.button`
  font-weight: bold;
  padding: 0.75rem 3rem;
  border-radius: 0.5rem;
  background-color: ${({disabled:e})=>e?"#D1D5DB":"#FBBF77"};
  color: ${({disabled:e})=>e?"#9CA3AF":"#000000"};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({disabled:e})=>e?"#D1D5DB":"#fbb15f"};
  }
`,bo=({onClick:e,disabled:t=!1})=>w.jsx(xo,{children:w.jsx(go,{onClick:e,disabled:t,children:"제출하기"})});class wo{constructor(){Object.defineProperty(this,"isLoaded",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"isLoading",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"loadPromise",{enumerable:!0,configurable:!0,writable:!0,value:null})}static getInstance(){return wo.instance||(wo.instance=new wo),wo.instance}async ensureLoaded(){var e,t;if(this.isLoaded&&(null==(t=null==(e=window.kakao)?void 0:e.maps)?void 0:t.services))return console.log("✅ 카카오맵 API 이미 로드됨"),Promise.resolve();if(this.isLoading&&this.loadPromise)return console.log("⏳ 카카오맵 API 로딩 대기 중..."),this.loadPromise;this.isLoading=!0,this.loadPromise=this.loadKakaoMapAPI();try{await this.loadPromise,this.isLoaded=!0,console.log("🎉 카카오맵 API 로드 완료")}catch(n){throw console.error("❌ 카카오맵 API 로드 실패:",n),this.isLoading=!1,this.loadPromise=null,n}}loadKakaoMapAPI(){return new Promise((e,t)=>{var n,r;if(null==(r=null==(n=window.kakao)?void 0:n.maps)?void 0:r.services)return console.log("카카오맵 API 이미 존재"),void e();if(document.querySelector('script[src*="dapi.kakao.com"]')){console.log("카카오맵 스크립트 대기 중...");const t=()=>{var n;(null==(n=window.kakao)?void 0:n.maps)?window.kakao.maps.load(()=>{window.kakao.maps.services?e():setTimeout(t,100)}):setTimeout(t,100)};return void t()}console.log("🔄 카카오맵 API 스크립트 새로 로드");const o=document.createElement("script");o.src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=b74908d0327634ff8eff0c8309007f61&autoload=false&libraries=services",o.async=!0,o.onload=()=>{var n;console.log("📦 카카오맵 스크립트 로드됨"),(null==(n=window.kakao)?void 0:n.maps)?window.kakao.maps.load(()=>{console.log("🗺️ 카카오맵 라이브러리 초기화 완료");const t=()=>{window.kakao.maps.services?e():setTimeout(t,50)};t()}):t(new Error("카카오 객체를 찾을 수 없습니다"))},o.onerror=e=>{console.error("❌ 카카오맵 스크립트 로드 실패:",e),t(new Error("카카오맵 스크립트 로드 실패"))},document.head.appendChild(o),setTimeout(()=>{this.isLoaded||t(new Error("카카오맵 API 로드 타임아웃"))},2e4)})}isMapReady(){var e,t;return this.isLoaded&&(null==(t=null==(e=window.kakao)?void 0:e.maps)?void 0:t.services)}}const yo=({isOpen:t,onClose:n,onLocationSelect:r})=>{const o=e.useRef(null),[a,i]=e.useState(null),[l,s]=e.useState(null),[c,d]=e.useState(""),[u,p]=e.useState(null),[f,m]=e.useState(!1),[h,x]=e.useState(null),[g,b]=e.useState(!1),y=e.useRef(null),v=wo.getInstance();e.useEffect(()=>{(async()=>{try{console.log("🚀 컴포넌트 마운트 - API 미리 로드 시작"),await v.ensureLoaded(),console.log("✅ API 미리 로드 성공")}catch(e){console.error("❌ API 미리 로드 실패:",e)}})()},[]);const k=()=>{l&&(l.setMap(null),s(null)),y.current&&(y.current.setMap(null),y.current=null),console.log("모든 기존 마커 제거 완료")};e.useEffect(()=>{if(!t||!o.current)return;return(async()=>{try{console.log("🗺️ 지도 초기화 시작..."),m(!0),x(null),b(!1),k(),p(null),v.isMapReady()||(console.log("⏳ API 로드 대기..."),await v.ensureLoaded());const e={center:new window.kakao.maps.LatLng(37.5665,126.978),level:8};console.log("🔨 지도 인스턴스 생성...");const t=new window.kakao.maps.Map(o.current,e);await new Promise(e=>{const n=()=>{try{t.getCenter(),e()}catch(r){setTimeout(n,100)}};n()}),i(t),b(!0),console.log("✅ 지도 초기화 완료")}catch(e){console.error("❌ 지도 초기화 실패:",e),x("지도를 불러오는데 실패했습니다. 새로고침 후 다시 시도해주세요.")}finally{m(!1)}})(),()=>{k()}},[t]),e.useEffect(()=>{if(!a||!g)return;console.log("👆 지도 클릭 이벤트 등록");const e=e=>{const t=e.latLng,n=t.getLat(),r=t.getLng();console.log("지도 클릭됨:",n,r),S(n,r)};return window.kakao.maps.event.addListener(a,"click",e),()=>{console.log("지도 클릭 이벤트 제거"),window.kakao.maps.event.removeListener(a,"click",e)}},[a,g]);const S=async(e,t)=>{if(a)try{console.log("지도 클릭 처리 시작:",e,t),((e,t)=>{if(!a)return null;k();const n=new window.kakao.maps.LatLng(e,t),r=new window.kakao.maps.Marker({position:n,map:a});s(r),y.current=r,console.log("새 마커 생성 완료:",e,t)})(e,t);const n=new window.kakao.maps.LatLng(e,t);a.setCenter(n);(new window.kakao.maps.services.Geocoder).coord2Address(t,e,(n,r)=>{if(console.log("지오코딩 상태:",r),r===window.kakao.maps.services.Status.OK&&n.length>0){const r=n[0];let o="";r.road_address?o=r.road_address.address_name:r.address&&(o=r.address.address_name),console.log("주소 변환 완료:",o),p({address:o,latitude:e,longitude:t})}else console.log("주소 변환 실패, 좌표만 저장"),p({address:`위도: ${e.toFixed(6)}, 경도: ${t.toFixed(6)}`,latitude:e,longitude:t})})}catch(n){console.error("지도 클릭 처리 실패:",n),p({address:`위도: ${e.toFixed(6)}, 경도: ${t.toFixed(6)}`,latitude:e,longitude:t})}},j=()=>{if(!a||!c.trim())return void console.log("지도 객체가 없거나 검색어가 비어있습니다.");console.log("검색 시작:",c);(new window.kakao.maps.services.Places).keywordSearch(c,(e,t)=>{if(console.log("검색 상태:",t),t===window.kakao.maps.services.Status.OK&&e.length>0){const t=e[0],n=parseFloat(t.y),r=parseFloat(t.x);console.log("검색 결과로 이동:",n,r);const o=new window.kakao.maps.LatLng(n,r);a.setCenter(o),a.setLevel(3),S(n,r)}else console.log("검색 결과가 없습니다."),alert("검색 결과가 없습니다. 다른 키워드로 검색해보세요.")})},z=()=>{console.log("위치 선택 취소"),p(null),d(""),b(!1),x(null),k(),n()},C=async()=>{var e;console.log("🔄 지도 새로고침 시작"),x(null),m(!0),b(!1),i(null),k(),p(null);try{const t=wo.getInstance();(null==(e=window.kakao)?void 0:e.maps)&&console.log("🔄 기존 카카오맵 API 재초기화"),setTimeout(async()=>{try{if(await t.ensureLoaded(),o.current){const e={center:new window.kakao.maps.LatLng(37.5665,126.978),level:8};console.log("🔨 지도 인스턴스 재생성...");const t=new window.kakao.maps.Map(o.current,e);await new Promise(e=>{const n=()=>{try{t.getCenter(),e()}catch(r){setTimeout(n,100)}};n()}),i(t),b(!0),m(!1),console.log("✅ 지도 새로고침 완료")}}catch(e){console.error("❌ 지도 새로고침 실패:",e),x("지도 새로고침에 실패했습니다. 페이지를 새로고침해주세요."),m(!1)}},500)}catch(t){console.error("❌ 새로고침 중 오류:",t),x("새로고침 중 오류가 발생했습니다."),m(!1)}};return t?w.jsx(No,{children:w.jsxs(Io,{children:[w.jsxs(Lo,{children:[w.jsx(Do,{children:"📍 위치 찾기"}),w.jsx(Oo,{onClick:z,children:"✕"})]}),w.jsxs(Ro,{children:[w.jsx(Mo,{children:"🔍 장소를 검색하거나 지도를 직접 클릭하여 위치를 선택하세요"}),w.jsxs($o,{children:[w.jsx(Bo,{type:"text",placeholder:"장소명이나 주소를 검색하세요 (예: 강남역, 서울시청)",value:c,onChange:e=>d(e.target.value),onKeyPress:e=>"Enter"===e.key&&j(),disabled:!g}),w.jsx(Uo,{onClick:j,disabled:!g,children:"🔍 검색"})]}),w.jsx(Wo,{onClick:()=>{a?navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{const t=e.coords.latitude,n=e.coords.longitude;console.log("현재 위치:",t,n);const r=new window.kakao.maps.LatLng(t,n);a.setCenter(r),a.setLevel(3),S(t,n)},e=>{console.error("위치 가져오기 오류:",e),alert("현재 위치를 가져올 수 없습니다.")}):alert("브라우저에서 위치 서비스를 지원하지 않습니다."):console.log("지도 객체가 없습니다.")},disabled:!g,children:"📍 현재 위치로 이동"})]}),w.jsx(Vo,{ref:o,children:f?w.jsxs(vo,{children:[w.jsx(ko,{}),w.jsxs(Ho,{children:["지도를 불러오는 중입니다...",w.jsx("br",{}),w.jsx("small",{children:"최초 로드 시 시간이 걸릴 수 있습니다."})]}),w.jsx(To,{onClick:C,children:"🔄 새로고침"})]}):h?w.jsxs(So,{children:[w.jsx(jo,{children:"⚠️"}),w.jsx(zo,{children:h}),w.jsx(To,{onClick:C,children:"🔄 다시 시도"})]}):g?w.jsxs(Po,{children:[w.jsx(Fo,{children:"✅ 지도 준비 완료"}),w.jsx(Ao,{onClick:C,children:"🔄"})]}):w.jsxs(Co,{children:[w.jsx(_o,{children:"🗺️"}),w.jsxs(Eo,{children:["지도를 준비하는 중입니다...",w.jsx("br",{}),w.jsx("small",{children:"지도가 표시되지 않으면 새로고침을 눌러주세요"})]}),w.jsx(To,{onClick:C,children:"🔄 새로고침"})]})}),u&&w.jsxs(qo,{children:[w.jsx(Qo,{children:"✅ 선택된 위치:"}),w.jsx(Ko,{children:u.address}),w.jsxs(Yo,{children:["위도: ",u.latitude.toFixed(6),", 경도: ",u.longitude.toFixed(6)]})]}),w.jsxs(Xo,{children:[w.jsx(Go,{onClick:z,children:"취소"}),w.jsx(Jo,{onClick:()=>{u?(console.log("위치 선택 확인 - 전달할 데이터:",u),r(u),z()):alert("지도에서 위치를 선택해주세요.")},disabled:!u,children:"이 위치로 선택"})]}),w.jsx(Zo,{children:"💡 지도에서 원하는 위치를 클릭하면 마커가 표시됩니다 🔄 지도가 보이지 않거나 로딩이 길어지면 페이지 새로고침을 해주세요."})]})}):null},vo=n.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: 10;
`,ko=n.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #FBBF77;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,So=n.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  z-index: 10;
  text-align: center;
  padding: 20px;
`,jo=n.div`
  font-size: 48px;
`,zo=n.div`
  color: #dc3545;
  font-size: 14px;
  line-height: 1.5;
  max-width: 300px;
`,Co=n.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(248, 249, 250, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  z-index: 10;
  text-align: center;
  padding: 20px;
`,_o=n.div`
  font-size: 48px;
`,Eo=n.div`
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  max-width: 300px;
  
  small {
    font-size: 12px;
    color: #999;
  }
`,Po=n.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 5;
`,Fo=n.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(76, 175, 80, 0.9);
  color: white;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
  animation: fadeOut 2s ease-in-out forwards;
  
  @keyframes fadeOut {
    0% { opacity: 1; }
    70% { opacity: 1; }
    100% { opacity: 0; }
  }
`,To=n.button`
  padding: 10px 20px;
  background-color: #FBBF77;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #E6AB65;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`,Ao=n.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 36px;
  height: 36px;
  background-color: rgba(251, 191, 119, 0.9);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  pointer-events: all;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: rgba(230, 171, 101, 0.9);
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`,No=n.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
  }
`,Io=n.div`
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 95%;
    max-height: 95vh;
  }
`,Lo=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
  background-color: #FBBF77;
  color: white;
  border-radius: 12px 12px 0 0;

  @media (max-width: 768px) {
    padding: 15px;
  }
`,Do=n.h2`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`,Oo=n.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`,Ro=n.div`
  padding: 20px;
  border-bottom: 1px solid #eee;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    padding: 15px;
  }
`,Mo=n.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 12px;
  text-align: center;
  background-color: #e3f2fd;
  padding: 8px 12px;
  border-radius: 6px;
  border-left: 4px solid #2196f3;
`,$o=n.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`,Bo=n.input`
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.95rem;

  &:focus {
    outline: none;
    border-color: #FBBF77;
  }

  &:disabled {
    background-color: #f5f5f5;
    color: #999;
  }
`,Uo=n.button`
  padding: 10px 16px;
  background-color: #FBBF77;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  white-space: nowrap;

  &:hover:not(:disabled) {
    background-color: #E6AB65;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,Wo=n.button`
  padding: 8px 12px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;

  &:hover:not(:disabled) {
    background-color: #5a6268;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,Vo=n.div`
  width: 100%;
  height: 400px;
  position: relative;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`,Ho=n.div`
  color: #666;
  font-size: 16px;
  text-align: center;
  line-height: 1.5;
  
  small {
    font-size: 14px;
    color: #999;
  }
`,qo=n.div`
  padding: 15px 20px;
  background-color: #e8f5e8;
  border-top: 1px solid #eee;
  border-left: 4px solid #4caf50;

  @media (max-width: 768px) {
    padding: 12px 15px;
  }
`,Qo=n.div`
  font-weight: 600;
  color: #2e7d2e;
  margin-bottom: 5px;
  font-size: 0.9rem;
`,Ko=n.div`
  font-size: 1rem;
  color: #333;
  margin-bottom: 3px;
  word-break: break-all;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`,Yo=n.div`
  font-size: 0.8rem;
  color: #666;
`,Xo=n.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 20px;
  border-top: 1px solid #eee;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Go=n.button`
  flex: 1;
  padding: 12px 20px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95rem;

  &:hover {
    background-color: #5a6268;
  }
`,Jo=n.button`
  flex: 2;
  padding: 12px 20px;
  background-color: #FBBF77;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;

  &:hover:not(:disabled) {
    background-color: #E6AB65;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`,Zo=n.div`
  text-align: center;
  padding: 10px 20px;
  font-size: 0.8rem;
  color: #666;
  background-color: #f8f9fa;
  border-radius: 0 0 12px 12px;

  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 0.75rem;
  }
`,ea=d.create({baseURL:"https://baekend.onrender.com"});ea.interceptors.request.use(e=>{const t=localStorage.getItem("accessToken");return t&&(e.headers.Authorization=`Bearer ${t}`,console.log("🔑 Authorization 헤더 추가")),e},e=>Promise.reject(e));const ta=()=>{const t=a(),[n,r]=e.useState("disaster"),[o,i]=e.useState([]),[l,s]=e.useState(""),[c,d]=e.useState(null),[u,p]=e.useState(null),[f,m]=e.useState(""),[h,x]=e.useState(""),[g,b]=e.useState(""),[y,v]=e.useState(""),[k,S]=e.useState(!1),[j,z]=e.useState(""),[C,_]=e.useState(""),[E,P]=e.useState(!1),[F,T]=e.useState(!1),[A,N]=e.useState(null),I=()=>{console.log("📍 ReportDetail 페이지로 이동"),t("/ReportDetail")};return w.jsxs(w.Fragment,{children:[w.jsx(on,{children:w.jsx(na,{children:w.jsxs(ra,{children:[w.jsx(Jn,{}),w.jsx(oa,{children:"신고하기"}),w.jsx(Qr,{activeTab:n,onTabChange:e=>{r(e),z(""),_(""),b(""),v(""),N(null)}}),"disaster"===n?w.jsx(aa,{children:w.jsxs(ia,{children:[w.jsxs(la,{children:[w.jsx(sa,{type:"radio",id:"earthquake",name:"disasterType",value:"earthquake",checked:"earthquake"===j,onChange:e=>z(e.target.value)}),w.jsx(ca,{htmlFor:"earthquake",children:"지진,산불"})]}),w.jsxs(la,{children:[w.jsx(sa,{type:"radio",id:"typhoon",name:"disasterType",value:"typhoon",checked:"typhoon"===j,onChange:e=>z(e.target.value)}),w.jsx(ca,{htmlFor:"typhoon",children:"태풍,호우"})]}),w.jsxs(la,{children:[w.jsx(sa,{type:"radio",id:"snow",name:"disasterType",value:"snow",checked:"snow"===j,onChange:e=>z(e.target.value)}),w.jsx(ca,{htmlFor:"snow",children:"폭설"})]})]})}):"pest"===n?w.jsx(aa,{children:w.jsxs(ia,{children:[w.jsxs(la,{children:[w.jsx(sa,{type:"radio",id:"disease",name:"pestType",value:"disease",checked:"disease"===C,onChange:e=>_(e.target.value)}),w.jsx(ca,{htmlFor:"disease",children:"질병"})]}),w.jsxs(la,{children:[w.jsx(sa,{type:"radio",id:"insect",name:"pestType",value:"insect",checked:"insect"===C,onChange:e=>_(e.target.value)}),w.jsx(ca,{htmlFor:"insect",children:"해충"})]})]})}):null,w.jsxs(da,{children:[w.jsx(ua,{children:"신고 제목"}),w.jsx(fa,{type:"text",placeholder:"신고 제목을 입력하세요",value:f,onChange:e=>m(e.target.value)})]}),w.jsx(ho,{files:o,onFilesChange:i}),w.jsxs(da,{children:[w.jsx(ua,{children:"신고 발생지역"}),w.jsxs(pa,{children:[w.jsx(fa,{type:"text",placeholder:"지역찾기 버튼을 눌러 지도에서 위치를 선택하세요",value:l,onChange:e=>s(e.target.value)}),w.jsx(ma,{onClick:()=>{P(!0)},children:"🗺️ 지역찾기"})]}),c&&u&&w.jsxs(ha,{children:["📍 선택된 좌표: 위도 ",c.toFixed(6),", 경도 ",u.toFixed(6)]}),w.jsxs(xa,{children:["💡 지역찾기 버튼을 누르면 지도가 열리고, 원하는 위치를 클릭하여 선택할 수 있습니다.",w.jsx("br",{}),"🔄 지도가 보이지 않거나 로딩이 길어지면 페이지 새로고침을 해주세요."]})]}),w.jsxs(da,{children:[w.jsx(ua,{children:"신고 내용"}),w.jsx(Gr,{type:"textarea",value:h,onChange:x,placeholder:"상세 내용을 입력하세요"})]}),"pest"===n&&w.jsx(ga,{children:w.jsxs(ba,{children:[w.jsx(wa,{children:"🤖"}),w.jsxs(ya,{children:[w.jsx(va,{children:"AI 자동 분석 서비스"}),w.jsx(ka,{children:"병해충 신고 시 업로드된 이미지를 YOLO AI가 자동으로 분석하여 병해충 종류를 식별해드립니다. 분석에는 약 5초가 소요됩니다."})]})]})}),w.jsxs(Ta,{children:[g&&w.jsx(Aa,{children:g}),y&&w.jsxs(Na,{children:[w.jsx(Ia,{children:y}),w.jsx(La,{children:"📍 잠시 후 신고 상세 페이지로 자동 이동됩니다..."})]}),A||F?w.jsx(Sa,{children:F?w.jsxs(ja,{children:[w.jsx(Ca,{children:"🤖"}),w.jsxs(_a,{children:["AI가 업로드된 이미지를 분석하고 있습니다...",w.jsx("br",{}),w.jsx("small",{style:{color:"#666"},children:"잠시만 기다려주세요. (약 5초 소요)"})]})]}):A?w.jsxs(za,{children:[w.jsx(Ca,{children:"🎉"}),w.jsxs(Ea,{children:[w.jsx(Pa,{children:"AI 분석 완료!"}),w.jsxs(Fa,{children:[w.jsx("strong",{children:"탐지된 병해충:"})," ",(null==(L=A.primary_detection)?void 0:L.class_name)||"감지되지 않음",w.jsx("br",{}),w.jsx("strong",{children:"신뢰도:"})," ",A.primary_detection?Math.round(100*A.primary_detection.confidence):0,"%",w.jsx("br",{}),w.jsx("strong",{children:"총 탐지 수:"})," ",A.total_detections,"개",w.jsx("br",{}),w.jsx("strong",{children:"카테고리:"})," ",A.category]})]})]}):null}):null,w.jsx(bo,{onClick:async()=>{var e,t,r,a,w,y,k,E,P,F;b(""),v(""),N(null);if(localStorage.getItem("accessToken")){if(("disaster"===n?j:C)?f.trim()?l.trim()?null===c||null===u||"number"!=typeof c||"number"!=typeof u||isNaN(c)||isNaN(u)?(b("지도에서 정확한 위치를 선택해주세요."),0):h.trim()?0!==o.length||(b("최소 1개의 파일을 업로드해주세요."),0):(b("신고 내용을 입력해주세요."),0):(b("신고 발생지역을 입력해주세요."),0):(b("제목을 입력해주세요."),0):(b("신고 유형을 선택해주세요."),0)){S(!0);try{console.log("=== 신고 제출 시작 ===");const e=new FormData,t=(()=>{if("disaster"===n)return{earthquake:{main:"재난",sub:"지진"},typhoon:{main:"재난",sub:"태풍"},snow:{main:"재난",sub:"폭설"}}[j]||null;return{disease:{main:"병해충",sub:"병해"},insect:{main:"병해충",sub:"해충"}}[C]||null})();if(!t)return b("올바른 카테고리를 선택해주세요."),void S(!1);e.append("main_category",t.main),e.append("sub_category",t.sub),e.append("title",f.trim()),e.append("content",h.trim()),e.append("local",l.trim());const r=c,a=u;if(null===r||null===a||"number"!=typeof r||"number"!=typeof a||isNaN(r)||isNaN(a))return b("위치 정보가 올바르지 않습니다. 다시 지역을 선택해주세요."),void S(!1);e.append("latitude",r.toString()),e.append("longitude",a.toString()),console.log("✅ 위도/경도 FormData에 추가됨:",r.toString(),a.toString()),o.forEach((t,n)=>{e.append("files",t),console.log(`📎 파일 ${n+1} 추가:`,t.name,t.type,t.size+" bytes")});const w=await(async e=>{var t,n;try{console.log("=== 신고 등록 API 호출 시작 ==="),console.log("전송할 FormData:");for(const[n,r]of e.entries())r instanceof File?console.log(`${n}: [File] ${r.name} (${r.size} bytes, ${r.type})`):console.log(`${n}: ${r}`);const t=await ea.post("/damage-report",e,{headers:{}});return console.log("✅ 신고 등록 성공:",t.data),t.data}catch(g){throw console.error("❌ 신고 등록 실패:",g),console.error("응답 데이터:",null==(t=g.response)?void 0:t.data),console.error("응답 상태:",null==(n=g.response)?void 0:n.status),g}})(e);let y=w.message||"✅ 신고가 성공적으로 접수되었습니다.";console.log("🎉 신고 제출 성공:",{report_id:w.report_id,uploaded_files:w.uploaded_files}),"병해충"===t.main&&w.report_id?(console.log("🤖 병해충 신고 감지 - AI 분석 시작"),T(!0),setTimeout(async()=>{try{console.log("🔍 AI 분석 실행 중...");const e=await(async e=>{var t,n;try{console.log("=== AI 분석 API 호출 시작 ==="),console.log("분석할 신고 ID:",e);const t=await ea.get(`/damage-report/detect-damage/${e}`);return console.log("✅ AI 분석 API 응답:",t.data),t.data.error?(console.error("❌ AI 분석 에러:",t.data.error),null):t.data.primary_detection?t.data:(console.warn("⚠️ AI 분석 결과에 primary_detection이 없음"),null)}catch(g){return console.error("❌ AI 분석 실패:",g),console.error("AI 분석 응답 데이터:",null==(t=g.response)?void 0:t.data),console.error("AI 분석 응답 상태:",null==(n=g.response)?void 0:n.status),null}})(w.report_id);if(e&&e.primary_detection){N(e);const t=Math.round(100*e.primary_detection.confidence),n=e.primary_detection.class_name;y+=`\n\n🤖 AI 분석도 완료되었습니다!\n주요 진단: ${n} (신뢰도: ${t}%)`,console.log("🎉 AI 분석 완료:",e)}else y+="\n\n⚠️ AI 분석에서 병해충을 감지하지 못했거나 분석에 실패했습니다.",console.log("⚠️ AI 분석 결과 없음");v(y),T(!1),setTimeout(()=>{console.log("🔄 AI 분석 완료 - ReportDetail 페이지로 이동"),I()},2e3)}catch(e){console.error("AI 분석 중 오류:",e),y+="\n\n⚠️ AI 분석 중 오류가 발생했지만 신고는 정상적으로 접수되었습니다.",v(y),T(!1),setTimeout(()=>{console.log("🔄 AI 분석 실패했지만 ReportDetail 페이지로 이동"),I()},2e3)}},5e3)):(v(y),setTimeout(()=>{console.log("🔄 재난 신고 완료 - ReportDetail 페이지로 이동"),I()},2e3)),i([]),s(""),d(null),p(null),m(""),x(""),z(""),_("")}catch(A){console.error("❌ 신고 제출 오류:",A);let n="신고 제출 중 오류가 발생했습니다.";if(401===(null==(e=A.response)?void 0:e.status))n="로그인이 만료되었습니다. 다시 로그인해주세요.";else if(404===(null==(t=A.response)?void 0:t.status))n="API 엔드포인트를 찾을 수 없습니다. 서버 설정을 확인해주세요.";else if(413===(null==(r=A.response)?void 0:r.status))n="파일 크기가 너무 큽니다. 더 작은 파일을 업로드해주세요.";else if(415===(null==(a=A.response)?void 0:a.status))n="지원하지 않는 파일 형식입니다.";else if(422===(null==(w=A.response)?void 0:w.status))if(console.error("422 에러 상세:",A.response.data),null==(k=null==(y=A.response)?void 0:y.data)?void 0:k.detail)if(Array.isArray(A.response.data.detail)){n=`입력 데이터 오류:\n${A.response.data.detail.map(e=>{var t;return`${(null==(t=e.loc)?void 0:t[1])||"알 수 없는 필드"}: ${e.msg||"유효하지 않은 값"}`}).join("\n")}`}else n=`입력 데이터 오류: ${A.response.data.detail}`;else n="입력 데이터 형식이 올바르지 않습니다. 모든 필드를 확인해주세요.";else 500===(null==(E=A.response)?void 0:E.status)?n="서버 내부 오류가 발생했습니다.":(null==(F=null==(P=A.response)?void 0:P.data)?void 0:F.message)?n=A.response.data.message:"ERR_NETWORK"===A.code&&(n="서버에 연결할 수 없습니다. 서버가 실행 중인지 확인해주세요.");b(n)}finally{S(!1)}}}else b("로그인이 필요합니다.")},disabled:k||F}),(k||F)&&w.jsx(Da,{children:k&&!F?"신고 제출 중...":F?"AI 분석 중...":"처리 중..."})]})]})})}),w.jsx(yo,{isOpen:E,onClose:()=>P(!1),onLocationSelect:e=>{console.log("🗺️ 받은 위치 데이터:",e),e?"number"==typeof e.latitude&&"number"==typeof e.longitude?(s(e.address||""),d(e.latitude),p(e.longitude),P(!1),console.log("✅ 위치 설정 완료:",{address:e.address,latitude:e.latitude,longitude:e.longitude})):console.error("위도/경도가 숫자 형태가 아닙니다:",e):console.error("선택된 위치 데이터가 없습니다.")}})]});var L},na=n.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0.1rem 0;

  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }

  @media (max-width: 480px) {
    padding: 1rem 0;
  }
`,ra=n.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1400px;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    max-width: 1024px;
    padding: 0 1.5rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.05rem;
  }
`,oa=n.h1`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.01rem 0;
  margin-left: 1.3rem;
  color: black;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin: 0.4rem 0;
    margin-left: 0.5rem;
  }
`,aa=n.section`
  width: 100%;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
`,ia=n.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`,la=n.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,sa=n.input`
  width: 1.2rem;
  height: 1.2rem;
  accent-color: #FBBF77;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 1.1rem;
    height: 1.1rem;
  }
`,ca=n.label`
  font-size: 1rem;
  font-weight: 500;
  color: black;
  cursor: pointer;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`,da=n.section`
  width: 100%;
  margin-bottom: 2rem;
  background-color: #FFEFD5;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`,ua=n.h2`
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
  margin-bottom: 0.8rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`,pa=n.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: row;
  width: 100%;

  @media (max-width: 1024px) {
    gap: 0.75rem;
  }

  @media (max-width: 768px) {
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`,fa=n.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: white;
  color: black;
  box-sizing: border-box;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: #FBBF77;
    box-shadow: 0 0 0 2px rgba(251, 191, 119, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`,ma=n.button`
  padding: 0.75rem 1rem;
  background-color: #FBBF77;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: #E6AB65;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 0.875rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.75rem;
    font-size: 0.95rem;
  }
`,ha=n.div`
  font-size: 0.85rem;
  color: #007bff;
  margin-top: 0.5rem;
  font-weight: 500;
  padding: 8px 12px;
  background-color: #e7f3ff;
  border-radius: 4px;
  border-left: 4px solid #007bff;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`,xa=n.div`
  font-size: 0.8rem;
  color: #666;
  margin-top: 0.5rem;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`,ga=n.section`
  width: 100%;
  margin-bottom: 2rem;
`,ba=n.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
  border: 2px solid #2196f3;
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 2px 8px rgba(33, 150, 243, 0.1);

  @media (max-width: 768px) {
    gap: 10px;
    padding: 14px 16px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    padding: 12px 14px;
  }
`,wa=n.div`
  font-size: 24px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`,ya=n.div`
  flex: 1;
`,va=n.h3`
  font-size: 16px;
  font-weight: 600;
  color: #1976d2;
  margin: 0 0 6px 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`,ka=n.p`
  font-size: 14px;
  color: #424242;
  margin: 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`,Sa=n.div`
  width: 100%;
  margin: 1rem 0;
`,ja=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #fff3e0 0%, #fce4ec 100%);
  border: 2px solid #ff9800;
  border-radius: 12px;
  padding: 16px 20px;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.7; }
    100% { opacity: 1; }
  }

  @media (max-width: 768px) {
    gap: 10px;
    padding: 14px 16px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    padding: 12px 14px;
    flex-direction: column;
    text-align: center;
  }
`,za=n.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: linear-gradient(135deg, #e8f5e8 0%, #f3e5f5 100%);
  border: 2px solid #4caf50;
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 2px 8px rgba(76, 175, 80, 0.1);

  @media (max-width: 768px) {
    gap: 10px;
    padding: 14px 16px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    padding: 12px 14px;
    flex-direction: column;
    text-align: center;
  }
`,Ca=n.div`
  font-size: 24px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`,_a=n.div`
  font-size: 14px;
  color: #e65100;
  font-weight: 500;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`,Ea=n.div`
  flex: 1;
`,Pa=n.h3`
  font-size: 16px;
  font-weight: 600;
  color: #2e7d32;
  margin: 0 0 8px 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`,Fa=n.div`
  font-size: 14px;
  color: #424242;
  line-height: 1.6;

  strong {
    color: #2e7d32;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`,Ta=n.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.01rem;
  margin-bottom: 1rem;
`,Aa=n.div`
  color: #dc3545;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  text-align: center;
  padding: 8px 12px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`,Na=n.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`,Ia=n.div`
  color: #155724;
  font-size: 0.9rem;
  text-align: center;
  padding: 8px 12px;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
  white-space: pre-line;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`,La=n.div`
  color: #0066cc;
  font-size: 0.85rem;
  text-align: center;
  padding: 6px 12px;
  background-color: #e6f3ff;
  border: 1px solid #b3d9ff;
  border-radius: 4px;
  font-weight: 500;
  width: 100%;
  box-sizing: border-box;
  animation: fadeInOut 2s infinite;

  @keyframes fadeInOut {
    0% { opacity: 0.7; }
    50% { opacity: 1; }
    100% { opacity: 0.7; }
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`,Da=n.div`
  color: #666;
  font-size: 0.9rem;
  margin-top: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`,Oa={1:"서울",2:"부산광역시",3:"대구광역시",4:"인천광역시",5:"광주광역시",6:"대전광역시",7:"울산광역시",8:"세종특별자치시",9:"경기도",11:"충청북도",12:"충청남도",13:"전라북도",14:"전라남도",15:"경상북도",16:"경상남도",17:"제주특별자치도"},Ra=n.div`
  min-height: 100vh;
  background-color: #FFEFD5;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ma=n.div`
  width: 100%;
  max-width: 500px;
  text-align: center;
  margin-bottom: 0.1px;
  
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`,$a=n.div`
  margin-top: 20px;  
  margin-bottom: 0px;
  
  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`,Ba=n.div`
  background-color: #FFEFD5;
  border-radius: 16px;
  padding: 10px 40px 40px 40px;
  width: 100%;
  max-width: 500px;
  
  @media (max-width: 768px) {
    padding: 10px 20px 30px 20px;
    margin: 0 10px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 15px 25px 15px;
  }
`,Ua=n.div`
  width: 80px;
  height: 80px;
  border: 3px solid #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -10px auto 20px;
  background-color: #f9f9f9;
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    margin: -10px auto 20px;
  }
  
  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    margin: -10px auto 20px;
  }
`,Wa=n.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Va=n.div`
  width: 40px;
  height: 40px;
  border: 2px solid #333;
  border-radius: 50% 50% 0 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 35px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 30px;
    border: 2px solid #333;
    border-radius: 30px 30px 0 0;
    border-top: none;
  }
  
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    
    &::before {
      top: 30px;
      width: 50px;
      height: 25px;
    }
  }
  
  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    
    &::before {
      top: 25px;
      width: 45px;
      height: 22px;
    }
  }
`,Ha=n.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 25px;
  }
  
  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`,qa=n.div`
  margin-bottom: 20px;
`,Qa=n.label`
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  
  @media (max-width: 480px) {
    font-size: 15px;
  }
`,Ka=n.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Ya=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Xa=n.input`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f9f9f9;
  color: #333;
  
  &:focus {
    outline: none;
    border-color: #4CAF50;
    background-color: white;
  }
  
  &:disabled {
    background-color: #f5f5f5;
    color: #666;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 15px;
  }
`,Ga=n.select`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f9f9f9;
  color: #333;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #4CAF50;
    background-color: white;
  }
  
  &:disabled {
    background-color: #f5f5f5;
    color: #666;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 15px;
  }
`,Ja=n.button`
  padding: 12px 20px;
  background-color: #FBBF77;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    background-color: #e0a768;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 13px;
  }
`,Za=n.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`,ei=n.button`
  flex: 1;
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #45a049;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    font-size: 15px;
  }
`,ti=n.button`
  flex: 1;
  padding: 12px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #5a6268;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    font-size: 15px;
  }
`,ni=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 18px;
  color: #666;
`,ri=n.div`
  background-color: #ffebee;
  color: #c62828;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
`,oi=n.div`
  background-color: #e8f5e8;
  color: #2e7d32;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
`,ai=n.div`
  font-size: 12px;
  color: #666;
  margin-top: 5px;
`,ii="https://baekend.onrender.com",li=d.create({baseURL:ii,timeout:1e4,headers:{"Content-Type":"application/json"}});li.interceptors.request.use(e=>{const t=localStorage.getItem("token")||localStorage.getItem("accessToken")||localStorage.getItem("authToken");return console.log("🔑 사용할 토큰:",t),t?(e.headers.Authorization=`Bearer ${t}`,console.log("📤 Authorization 헤더:",e.headers.Authorization)):console.warn("⚠️ 토큰이 없습니다!"),e},e=>Promise.reject(e));const si=()=>{const[t,n]=e.useState({username:"",email:"",region_name:"",crop_name:"",local_id:0,profile_image:""}),[r,o]=e.useState({username:"",email:"",region_name:"",crop_name:"",local_id:0,profile_image:""}),[a,i]=e.useState(!1),[l,s]=e.useState(!1),[c,u]=e.useState(!0),[p,f]=e.useState(!1),[m,h]=e.useState(""),[x,g]=e.useState(""),b=e=>Oa[e]||"";e.useEffect(()=>{(async()=>{var e,t,r,a,i,l;try{u(!0),h("");const e=localStorage.getItem("token")||localStorage.getItem("accessToken")||localStorage.getItem("authToken");if(console.log("🔍 현재 저장된 토큰들:"),console.log("token:",localStorage.getItem("token")),console.log("accessToken:",localStorage.getItem("accessToken")),console.log("authToken:",localStorage.getItem("authToken")),!e)return void h("로그인이 필요합니다. 다시 로그인해주세요.");console.log("API 요청 URL:",`${ii}/mypage`),console.log("사용할 토큰:",e);const t=await li.get("/mypage");console.log("✅ API 응답 성공:",t.data),console.log("📊 mypage 데이터 상세:",JSON.stringify(t.data.mypage,null,2));const r=t.data.mypage;console.log("🔍 각 필드 확인:"),console.log("username:",r.username),console.log("email:",r.email),console.log("region_name:",r.region_name),console.log("crop_name:",r.crop_name),console.log("local_id:",r.local_id),console.log("profile_image:",r.profile_image),n(r),o(r)}catch(s){console.error("❌ 사용자 정보 조회 실패:",s),d.isAxiosError(s)?(console.error("응답 상태:",null==(e=s.response)?void 0:e.status),console.error("응답 데이터:",null==(t=s.response)?void 0:t.data),console.error("요청 헤더:",null==(r=s.config)?void 0:r.headers),401===(null==(a=s.response)?void 0:a.status)?(h("인증이 만료되었습니다. 다시 로그인해주세요."),localStorage.removeItem("token"),localStorage.removeItem("accessToken"),localStorage.removeItem("authToken")):500===(null==(i=s.response)?void 0:i.status)?h("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요."):h(`사용자 정보를 불러오는데 실패했습니다. (${null==(l=s.response)?void 0:l.status})`)):h("네트워크 오류가 발생했습니다.")}finally{u(!1)}})()},[]);const y=e=>t=>{n(n=>({...n,[e]:t.target.value}))};return c?w.jsxs(Ra,{children:[w.jsx(Ma,{children:w.jsx($a,{children:w.jsx(Jn,{})})}),w.jsx(ni,{children:"사용자 정보를 불러오는 중..."})]}):w.jsxs(Ra,{children:[w.jsx(Ma,{children:w.jsx($a,{children:w.jsx(Jn,{})})}),w.jsxs(Ba,{children:[w.jsx(Ua,{children:t.profile_image?w.jsx(Wa,{src:t.profile_image,alt:"프로필 사진",onError:e=>{e.currentTarget.style.display="none";const t=e.currentTarget.parentElement;if(t){const e=document.createElement("div");e.innerHTML='<div style="width: 40px; height: 40px; border: 2px solid #333; border-radius: 50% 50% 0 0; position: relative;"></div>',t.appendChild(e)}}}):w.jsx(Va,{})}),w.jsx(Ha,{children:t.username||"USER"}),m&&w.jsx(ri,{children:m}),x&&w.jsx(oi,{children:x}),w.jsx(Qn,{label:"이름",type:"text",placeholder:"이름을 입력하세요",value:t.username,onChange:y("username"),disabled:!0}),w.jsx(Qn,{label:"이메일",type:"email",placeholder:"이메일을 입력하세요",value:t.email,onChange:y("email"),disabled:!0}),w.jsxs(qa,{children:[w.jsx(Qa,{children:"지역"}),w.jsxs(Ka,{children:[w.jsxs(Ya,{children:[a?w.jsxs(Ga,{value:t.local_id,onChange:e=>{const t=parseInt(e.target.value),r=b(t);n(e=>({...e,local_id:t,region_name:r}))},children:[w.jsx("option",{value:0,children:"지역을 선택하세요"}),Object.entries(Oa).map(([e,t])=>w.jsxs("option",{value:parseInt(e),children:[t," (지역번호: ",e,")"]},e))]}):w.jsx(Xa,{type:"text",value:`${t.region_name} (지역번호: ${t.local_id})`,disabled:!0}),w.jsx(Ja,{onClick:()=>{i(!a),a&&n(e=>({...e,local_id:r.local_id,region_name:r.region_name}))},disabled:p,children:a?"취소":"지역변경"})]}),a&&w.jsx(ai,{children:"💡 지역을 선택하면 지역번호가 자동으로 설정됩니다."})]})]}),w.jsxs(qa,{children:[w.jsx(Qa,{children:"재배 작물"}),w.jsxs(Ka,{children:[w.jsxs(Ya,{children:[w.jsx(Xa,{type:"text",placeholder:"재배하는 작물을 입력하세요",value:t.crop_name,onChange:y("crop_name"),disabled:!l}),w.jsx(Ja,{onClick:()=>{s(!l),l&&n(e=>({...e,crop_name:r.crop_name}))},disabled:p,children:l?"취소":"작물변경"})]}),l&&w.jsx(ai,{children:"💡 현재 재배하고 있는 주요 작물을 입력해주세요."})]})]}),(a||l)&&(t.crop_name!==r.crop_name||t.local_id!==r.local_id)&&w.jsxs(Za,{children:[w.jsx(ti,{onClick:()=>{n(r),i(!1),s(!1),h(""),g("")},disabled:p,children:"취소"}),w.jsx(ei,{onClick:async()=>{await(async()=>{var e,n;try{f(!0),h(""),g("");const e={crop_name:t.crop_name,local_id:t.local_id};console.log("📤 업데이트 요청 데이터:",e);const n=await li.patch("/mypage",e);console.log("✅ 업데이트 응답:",n.data),o({...r,crop_name:t.crop_name,local_id:t.local_id,region_name:b(t.local_id)}),g("정보가 성공적으로 업데이트되었습니다."),i(!1),s(!1),setTimeout(()=>g(""),3e3)}catch(a){console.error("❌ 사용자 정보 업데이트 실패:",a),d.isAxiosError(a)?401===(null==(e=a.response)?void 0:e.status)?h("인증이 만료되었습니다. 다시 로그인해주세요."):400===(null==(n=a.response)?void 0:n.status)?h("입력한 정보가 올바르지 않습니다."):h("정보 업데이트에 실패했습니다."):h("네트워크 오류가 발생했습니다.")}finally{f(!1)}})()},disabled:p,children:p?"저장 중...":"저장"})]})]})]})},ci=n.div`
  min-height: 100vh;
  background-color: #FFEFD5;
  padding: 5px 0;
`,di=n.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 5px;
  padding: 0 10px;
  max-width: 1200px;
  margin: 0 auto 5px auto;
  
  @media (max-width: 1024px) {
    max-width: 95%;
    margin-bottom: 3px;
    padding: 0 15px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 2px;
    padding: 0 10px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1px;
    padding: 0 5px;
  }
`,ui=n.div`
  margin-top: 2px;
  margin-bottom: -50px;
  
  @media (max-width: 768px) {
    margin-top: 1px;
  }
  
  @media (max-width: 480px) {
    margin-top: 1px;
  }
`,pi=n.h1`
  font-size: 25px;
  font-weight: 700;
  color: #333;
  margin: 15px 0 0 40px;
  text-align: left;
  
  @media (max-width: 1024px) {
    font-size: 28px;
    margin: 12px 0 0 40px;
  }
  
  @media (max-width: 768px) {
    font-size: 24px;
    margin: 10px 0 0 40px;
  }
  
  @media (max-width: 480px) {
    font-size: 22px;
    margin: 8px 0 0 50px;
  }
`,fi=n.div`
  width: 100%;
  height: 450px;
  margin-bottom: 30px;
  border-radius: 12px;
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto 30px auto;
  padding: 0 20px;
  box-sizing: border-box;
  
  iframe, 
  > div {
    width: 100% !important;
    height: 100% !important;
  }
  
  @media (max-width: 1024px) {
    max-width: 95%;
    height: 400px;
    padding: 0 15px;
    margin: 0 auto 25px auto;
  }
  
  @media (max-width: 768px) {
    height: 350px;
    padding: 0 10px;
    margin: 0 auto 20px auto;
  }
  
  @media (max-width: 480px) {
    height: 280px;
    padding: 0 5px;
    margin: 0 auto 15px auto;
  }
`,mi=n.div`
  background-color: white;
  border-radius: 16px;
  padding: 50px;
  width: 60vw;
  margin: 0 auto 40px auto;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    width: 95vw;
    padding: 30px 20px;
    margin: 0 auto;
  }
  
  @media (max-width: 480px) {
    width: 98vw;
    padding: 25px 15px;
    margin: 0 auto;
  }
`,hi=n.div`
  margin-bottom: 35px;
  
  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`,xi=n.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 18px;
  
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 12px;
  }
`,gi=n.span`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  min-width: 140px;
  margin-right: 15px;
  
  @media (max-width: 1024px) {
    font-size: 17px;
    min-width: 130px;
    margin-right: 12px;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    min-width: 120px;
    margin-right: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 15px;
    margin-bottom: 5px;
    min-width: auto;
    margin-right: 0;
  }
`,bi=n.span`
  font-size: 18px;
  color: #555;
  line-height: 1.5;
  
  @media (max-width: 1024px) {
    font-size: 17px;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 15px;
  }
`,wi=n.div`
  margin-bottom: 35px;
  
  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`,yi=n.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 18px;
  
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 12px;
  }
`,vi=n.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  
  @media (max-width: 1024px) {
    max-width: 450px;
  }
  
  @media (max-width: 768px) {
    max-width: 400px;
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
  }
`,ki=n.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  border: 2px solid #ddd;
  margin-bottom: 12px;
`,Si=n.p`
  font-size: 16px;
  color: #666;
  margin: 0;
  
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    font-size: 13px;
  }
`,ji=n.div`
  margin-top: 25px;
  
  @media (max-width: 768px) {
    margin-top: 20px;
  }
  
  @media (max-width: 480px) {
    margin-top: 15px;
  }
`,zi=n.p`
  font-size: 18px;
  color: #555;
  line-height: 1.6;
  margin: 0;
  
  @media (max-width: 1024px) {
    font-size: 17px;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 15px;
  }
`,Ci=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 18px;
  color: #666;
`,_i=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 18px;
  color: #e74c3c;
  text-align: center;
`,Ei=n.div`
  margin-bottom: 35px;
  
  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`,Pi=n.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border: 2px solid #007bff;
  border-radius: 12px;
  padding: 20px;
  margin-top: 10px;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 14px;
  }
`,Fi=n.div`
  position: absolute;
  top: -10px;
  left: 20px;
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.3);
`,Ti=n.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`,Ai=n.span`
  font-size: 16px;
  font-weight: 600;
  color: #495057;
  min-width: 120px;
  margin-right: 12px;
  
  @media (max-width: 1024px) {
    font-size: 15px;
    min-width: 110px;
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
    min-width: 100px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 4px;
    min-width: auto;
    margin-right: 0;
  }
`,Ni=n.span`
  font-size: 16px;
  color: #212529;
  font-weight: 500;
  
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`,Ii=n.div`
  width: 100%;
  height: 8px;
  background-color: #e9ecef;
  border-radius: 4px;
  margin-top: 6px;
  overflow: hidden;
  
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${e=>e.confidence}%;
    background: linear-gradient(90deg, 
      ${e=>e.confidence>=80?"#28a745":e.confidence>=60?"#ffc107":"#dc3545"} 0%, 
      ${e=>e.confidence>=80?"#20c997":e.confidence>=60?"#fd7e14":"#e74c3c"} 100%);
    border-radius: 4px;
    transition: width 0.3s ease;
  }
`,Li=n.div`
  text-align: center;
  color: #6c757d;
  font-style: italic;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px dashed #dee2e6;
`,Di=e=>e?e.startsWith("http://")||e.startsWith("https://")?e:e.startsWith("/static")?`http://baekend.onrender.com${e}`:`https://baekend.onrender.com/static/uploads/reports/${e}`:"",Oi=({aiResult:e,loading:t,error:n})=>{if(t)return w.jsxs(Pi,{children:[w.jsx(Fi,{children:"AI 분석"}),w.jsx("div",{style:{textAlign:"center",color:"#666",padding:"20px 0"},children:"🤖 AI가 이미지를 분석하는 중..."})]});if(n)return w.jsxs(Li,{children:[w.jsx("div",{style:{marginBottom:"10px"},children:"⚠️ AI 진단 중 오류 발생"}),w.jsx("div",{style:{fontSize:"12px",color:"#999"},children:n})]});if(!e)return w.jsx(Li,{children:"🤖 AI 진단 결과가 없습니다"});if(!e.primary_detection)return w.jsx(Li,{children:"🤖 AI가 병해충을 탐지하지 못했습니다"});try{const t=Math.round(100*e.primary_detection.confidence);return w.jsxs(Pi,{children:[w.jsx(Fi,{children:"AI 분석"}),w.jsxs(Ti,{children:[w.jsx(Ai,{children:"탐지 카테고리:"}),w.jsx(Ni,{children:e.category||"알 수 없음"})]}),w.jsxs(Ti,{children:[w.jsx(Ai,{children:"주요 진단:"}),w.jsx(Ni,{children:e.primary_detection.class_name||"알 수 없음"})]}),w.jsxs(Ti,{children:[w.jsx(Ai,{children:"신뢰도:"}),w.jsxs("div",{style:{flex:1},children:[w.jsxs(Ni,{children:[t,"%"]}),w.jsx(Ii,{confidence:t})]})]}),w.jsxs(Ti,{children:[w.jsx(Ai,{children:"총 탐지 수:"}),w.jsxs(Ni,{children:[e.total_detections||0,"개"]})]}),e.detections&&e.detections.length>1&&w.jsxs(Ti,{style:{flexDirection:"column",alignItems:"flex-start"},children:[w.jsx(Ai,{style:{marginBottom:"8px"},children:"추가 탐지 결과:"}),w.jsx("div",{style:{width:"100%"},children:e.detections.slice(1).map((e,t)=>w.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 0",fontSize:"14px",color:"#6c757d"},children:[w.jsx("span",{children:e.class_name||"알 수 없음"}),w.jsxs("span",{children:[Math.round(100*(e.confidence||0)),"%"]})]},t))})]})]})}catch(r){return console.error("AI 결과 렌더링 오류:",r),w.jsxs(Li,{children:[w.jsx("div",{style:{marginBottom:"10px"},children:"⚠️ AI 결과 표시 중 오류 발생"}),w.jsx("div",{style:{fontSize:"12px",color:"#999"},children:"결과 데이터 형식이 올바르지 않습니다"})]})}},Ri=({files:e})=>e&&0!==e.length?w.jsx("div",{children:e.map((e,t)=>{const n=Di(e);return console.log(`🖼️ 이미지 ${t+1} URL:`,n),w.jsxs("div",{style:{marginBottom:"15px"},children:[w.jsx(ki,{src:n,alt:`신고 첨부 파일 ${t+1}`,onLoad:()=>{console.log(`✅ 이미지 ${t+1} 로드 성공:`,n)},onError:r=>{var o;console.error(`❌ 이미지 ${t+1} 로드 실패:`,n);const a=r.target;a.style.display="none";const i=document.createElement("div");i.style.cssText="\n                  padding: 40px 20px;\n                  background-color: #f8f9fa;\n                  border: 2px dashed #dee2e6;\n                  border-radius: 12px;\n                  text-align: center;\n                  color: #6c757d;\n                  font-size: 14px;\n                ",i.innerHTML=`\n                  <div style="margin-bottom: 10px;">📷</div>\n                  <div>이미지를 불러올 수 없습니다</div>\n                  <div style="font-size: 12px; margin-top: 5px; color: #999;">\n                    URL: ${n}\n                  </div>\n                  <div style="font-size: 11px; margin-top: 5px; color: #999;">\n                    원본 경로: ${e}\n                  </div>\n                `,null==(o=a.parentNode)||o.insertBefore(i,a.nextSibling)}}),w.jsxs(Si,{children:["첨부 파일 ",t+1]})]},t)})}):w.jsxs("div",{style:{padding:"40px 20px",backgroundColor:"#f8f9fa",border:"2px dashed #dee2e6",borderRadius:"12px",textAlign:"center",color:"#6c757d",fontSize:"14px"},children:[w.jsx("div",{style:{marginBottom:"10px"},children:"📷"}),w.jsx("div",{children:"첨부된 파일이 없습니다"})]}),Mi=()=>(console.log("📋 목업 데이터 사용"),{reports:[{title:"다저벌악",main_category:"병해충",sub_category:"병해",latitude:"35.7336908241694",longitude:"127.06573190851746",id:"mock_report_1"},{title:"제주도 태풍",main_category:"재난",sub_category:"태풍",latitude:"33.2375195759578",longitude:"126.515860406201",id:"mock_report_2"},{title:"전주 지진 발생",main_category:"재난",sub_category:"지진",latitude:"37.5665",longitude:"126.978",id:"mock_report_3"}]}),$i=()=>{const[t,n]=e.useState([]),[r,o]=e.useState(null),[a,i]=e.useState(!0),[l,s]=e.useState(null),[c,d]=e.useState(!1),[u,p]=e.useState(null),[f,m]=e.useState(!1),[h,x]=e.useState(null);e.useEffect(()=>{(async()=>{try{i(!0);const e=await(async()=>{try{console.log("🔄 신고 목록 조회 시작...");const e=await fetch("https://baekend.onrender.com/reports/recent",{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"},mode:"cors"});if(console.log("API 응답 상태:",e.status),!e.ok)return console.warn(`API 호출 실패: ${e.status}. 목업 데이터 사용.`),Mi();const t=e.headers.get("content-type");if(!t||!t.includes("application/json"))return console.warn("JSON 응답이 아님. 목업 데이터 사용."),Mi();const n=await e.json();return console.log("✅ 신고 목록 조회 성공:",n),n}catch(l){return console.error("❌ API 호출 실패:",l),console.log("🔄 목업 데이터로 대체"),Mi()}})();n(e.reports||[]),s(null),console.log("신고 목록 로드 완료:",e.reports)}catch(e){s("데이터를 불러올 수 없습니다."),console.error("신고 목록 로드 중 치명적 오류:",e)}finally{i(!1)}})()},[]);return e.useEffect(()=>{var e;r&&(console.log("=== 선택된 신고 상세 정보 ==="),console.log("제목:",r.title),console.log("파일 정보:",r.files),console.log("파일 개수:",(null==(e=r.files)?void 0:e.length)||0),r.files&&r.files.length>0&&r.files.forEach((e,t)=>{console.log(`파일 ${t+1}:`,e),console.log(`파일 ${t+1} URL:`,Di(e))}))},[r]),a?w.jsx(ci,{children:w.jsx(Ci,{children:"신고 정보를 불러오는 중..."})}):l?w.jsx(ci,{children:w.jsx(_i,{children:w.jsx("div",{children:l})})}):w.jsxs(ci,{children:[w.jsxs(di,{children:[w.jsx(ui,{children:w.jsx(Jn,{})}),w.jsx(pi,{children:"신고상황 세부 페이지"})]}),w.jsx(fi,{children:w.jsx(Sn,{reports:t,onMarkerClick:async e=>{if(console.log("🗺️ 마커 클릭:",e),e){d(!0),m(!1),p(null),x(null),o(null);try{if(e.startsWith("temp_")||e.startsWith("mock_")){console.log("🎭 목업 데이터 사용:",e);const t={user_id:"mock_user_id",username:"테스트 사용자",main_category:"병해충",sub_category:"해충",title:e.includes("다저벌악")?"다저벌악":e.includes("태풍")?"제주도 태풍":e.includes("지진")?"전주 지진 발생":"테스트 신고",content:`이것은 ${e} 신고에 대한 상세 내용입니다.`,local:"테스트 지역",latitude:"37.5665",longitude:"126.978",files:[],created_at:(new Date).toISOString(),id:e};o(t),"병해충"===t.main_category&&(m(!0),setTimeout(()=>{p({category:"해충",total_detections:1,detections:[{class_id:2,class_name:"담배가루이",confidence:.9696160554885864,bbox:{x1:90.16170501708984,y1:64.73558044433594,x2:161.4823760986328,y2:155.4713897705078}}],primary_detection:{class_id:2,class_name:"담배가루이",confidence:.9696160554885864,bbox:{x1:90.16170501708984,y1:64.73558044433594,x2:161.4823760986328,y2:155.4713897705078}}}),m(!1)},2e3))}else{console.log("🌐 실제 API 호출 시작");const n=await(async e=>{try{console.log(`🔍 신고 상세 정보 조회: ${e}`);const n=[`https://baekend.onrender.com/damage-report/${e}`,`https://baekend.onrender.com/reports/${e}`,`https://baekend.onrender.com/report/${e}`,`https://baekend.onrender.com/damage-reports/${e}`];for(const e of n)try{console.log(`🔄 시도 중인 엔드포인트: ${e}`);const t=await fetch(e,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"},mode:"cors"});if(console.log(`📡 ${e} 응답 상태: ${t.status}`),t.ok){const e=await t.json();return console.log("✅ 신고 상세 정보 조회 성공:",e),e}if(404===t.status){console.log(`❌ ${e}에서 404 - 다음 엔드포인트 시도`);continue}console.warn(`⚠️ ${e}에서 ${t.status} 오류`);continue}catch(t){console.error(`❌ ${e} 호출 실패:`,t);continue}return console.warn("❌ 모든 엔드포인트에서 신고 상세 조회 실패"),null}catch(l){return console.error("❌ 신고 상세 조회 실패:",l),null}})(e);if(n){if(o(n),console.log("✅ 신고 상세 정보 로드 완료:",n),"병해충"===n.main_category){console.log("🤖 병해충 신고 감지 - AI 진단 시작"),m(!0);try{const{result:t,error:n}=await(async e=>{try{console.log(`🤖 AI 진단 요청: ${e}`);const t=await fetch(`https://baekend.onrender.com/damage-report/detect-damage/${e}`,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"},mode:"cors"});if(console.log("AI 진단 응답 상태:",t.status),!t.ok){const e=await t.text();console.warn(`❌ AI diagnosis API failed with status: ${t.status}, body: ${e}`);let n="AI 진단 서비스에 연결할 수 없습니다";return 404===t.status?n="해당 신고를 찾을 수 없습니다":500===t.status?n="AI 분석 중 서버 오류가 발생했습니다":t.status>=400&&t.status<500&&(n="잘못된 요청입니다"),{result:null,error:n}}const n=await t.json();return console.log("AI 진단 응답 데이터:",n),n.error?(console.warn(`❌ AI 진단 에러: ${n.error}`),{result:null,error:n.error}):n&&"object"==typeof n?n.primary_detection?(console.log("✅ AI 진단 성공:",n),{result:n,error:null}):(console.log("ℹ️ AI 진단 완료 - 탐지 결과 없음"),{result:{...n,primary_detection:null},error:null}):(console.warn("❌ AI 진단 결과 형식 오류"),{result:null,error:"응답 데이터 형식이 올바르지 않습니다"})}catch(l){console.error("❌ AI 진단 요청 실패:",l);let t="AI 진단 중 오류가 발생했습니다";return l instanceof TypeError&&l.message.includes("fetch")?t="네트워크 연결을 확인해주세요":l instanceof Error&&(t=l.message),{result:null,error:t}}})(e);p(t),x(n),t?console.log("🎉 AI 진단 성공:",t):n?console.log("⚠️ AI 진단 에러:",n):console.log("ℹ️ AI 진단 완료 - 탐지 결과 없음")}catch(t){console.error("AI 진단 중 예외 발생:",t),p(null),x("AI 진단 중 예상치 못한 오류가 발생했습니다")}finally{m(!1)}}}else{console.error("❌ 신고 상세 정보 로드 실패 - 목업 데이터 사용");const t={user_id:"fallback_user",username:"신고자",main_category:"병해충",sub_category:"해충",title:`신고 ID: ${e}`,content:`API 연결에 실패하여 임시 데이터를 표시합니다. 신고 ID: ${e}`,local:"위치 정보 불명",latitude:"37.5665",longitude:"126.978",files:[],created_at:(new Date).toISOString(),id:e};o(t),"병해충"===t.main_category&&(m(!0),setTimeout(()=>{p({category:"해충",total_detections:1,detections:[{class_id:0,class_name:"알 수 없는 병해충",confidence:.5,bbox:{x1:0,y1:0,x2:100,y2:100}}],primary_detection:{class_id:0,class_name:"알 수 없는 병해충",confidence:.5,bbox:{x1:0,y1:0,x2:100,y2:100}}}),m(!1)},1e3))}}}catch(n){console.error("❌ 마커 클릭 처리 중 전체 오류:",n)}finally{d(!1)}}else console.warn("❌ Report ID가 없습니다")}})}),w.jsxs(mi,{children:[r?w.jsxs(hi,{children:[w.jsx(xi,{children:w.jsx(gi,{style:{color:"#d32f2f",fontWeight:700,fontSize:"20px"},children:"📋 선택된 신고 상세 정보"})}),c?w.jsx(zi,{children:"상세 정보를 불러오는 중..."}):w.jsxs(w.Fragment,{children:[w.jsxs(xi,{children:[w.jsx(gi,{children:"신고 제목:"}),w.jsx(bi,{children:r.title})]}),w.jsxs(xi,{children:[w.jsx(gi,{children:"신고자:"}),w.jsx(bi,{children:r.username})]}),w.jsxs(xi,{children:[w.jsx(gi,{children:"카테고리:"}),w.jsxs(bi,{children:[r.main_category,r.sub_category&&` > ${r.sub_category}`]})]}),w.jsxs(xi,{children:[w.jsx(gi,{children:"발생 지역:"}),w.jsx(bi,{children:r.local})]}),w.jsxs(xi,{children:[w.jsx(gi,{children:"좌표:"}),w.jsxs(bi,{children:["위도: ",r.latitude,", 경도: ",r.longitude]})]}),w.jsxs(xi,{children:[w.jsx(gi,{children:"신고 일시:"}),w.jsx(bi,{children:new Date(r.created_at).toLocaleString("ko-KR")})]}),w.jsxs(ji,{children:[w.jsx(xi,{children:w.jsx(gi,{children:"신고 내용:"})}),w.jsx(zi,{style:{backgroundColor:"#f9f9f9",padding:"15px",borderRadius:"8px",marginTop:"10px"},children:r.content})]}),"병해충"===r.main_category&&w.jsxs(Ei,{children:[w.jsx(xi,{children:w.jsx(gi,{children:"🤖 AI 진단 결과:"})}),w.jsx(Oi,{aiResult:u,loading:f,error:h})]}),w.jsxs(wi,{children:[w.jsx(yi,{children:w.jsx(gi,{children:"첨부 파일:"})}),w.jsx(vi,{children:w.jsx(Ri,{files:r.files||[]})})]})]})]}):w.jsxs(hi,{children:[w.jsx(xi,{children:w.jsx(gi,{style:{color:"#666",fontWeight:600,fontSize:"18px"},children:"🗺️ 실시간 신고 현황"})}),w.jsxs(zi,{style:{textAlign:"center",padding:"40px 20px",color:"#666"},children:["지도의 마커를 클릭하면 해당 신고의 상세 정보를 확인할 수 있습니다.",w.jsx("br",{}),w.jsx("br",{}),w.jsxs("span",{style:{fontSize:"14px",color:"#999"},children:["💡 빨간색 마커: 재난/재해 신고 | 파란색 마커: 병해충 신고",w.jsx("br",{}),"🤖 병해충 신고의 경우 AI 진단 결과도 함께 확인할 수 있습니다."]})]})]}),t.length>0&&w.jsxs(ji,{children:[w.jsx(xi,{children:w.jsx(gi,{children:"최근 신고 현황:"})}),w.jsxs(zi,{children:["총 ",t.length,"건의 신고가 접수되어 지도에 표시되고 있습니다.",t.some(e=>e.latitude&&e.longitude)&&` (위치 정보가 있는 신고: ${t.filter(e=>e.latitude&&e.longitude).length}건)`,w.jsx("br",{}),w.jsxs("span",{style:{fontSize:"14px",color:"#666",marginTop:"8px",display:"inline-block"},children:["🤖 병해충 관련 신고: ",t.filter(e=>"병해충"===e.main_category).length,"건 (AI 진단 가능)"]})]})]})]})]})},Bi=n.div`
  min-height: 100vh;
  background-color: #FFEFD5;
  padding: 5px 0;
`,Ui=n.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 5px;
  padding: 0 10px;
  max-width: 1400px;
  margin: 0 auto 5px auto;
  
  @media (max-width: 1024px) {
    max-width: 95%;
    margin-bottom: 3px;
    padding: 0 15px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 2px;
    padding: 0 10px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1px;
    padding: 0 5px;
  }
`,Wi=n.div`
  margin-top: 2px;
  margin-bottom: -50px;
  
  @media (max-width: 768px) {
    margin-top: 1px;
  }
  
  @media (max-width: 480px) {
    margin-top: 1px;
  }
`,Vi=n.h1`
  font-size: 25px;
  font-weight: 700;
  color: #333;
  margin: 15px 0 0 40px;
  text-align: left;
  
  @media (max-width: 1024px) {
    font-size: 28px;
    margin: 12px 0 0 40px;
  }
  
  @media (max-width: 768px) {
    font-size: 24px;
    margin: 10px 0 0 40px;
  }
  
  @media (max-width: 480px) {
    font-size: 22px;
    margin: 8px 0 0 50px;
  }
`,Hi=n.div`
  background-color: #FFEFD5;
  border-radius: 16px;
  padding: 60px;
  max-width: 1000px;
  margin: 0 auto 40px auto;
  
  @media (max-width: 1024px) {
    max-width: 90%;
    padding: 40px 30px;
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    padding: 30px 30px ;
    margin: 0 40px;
  }
  
  @media (max-width: 480px) {
    padding: 25px 15px;
    margin: 0 5px;
  }
`,qi=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  font-size: 18px;
  color: #666;
`,Qi=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  font-size: 16px;
  color: #e74c3c;
  text-align: center;
  
  button {
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #FBBF77;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    
    &:hover {
      background-color: #E6AB65;
    }
  }
`,Ki=n.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid #ddd;
`,Yi=n.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`,Xi=n.thead`
  background-color: #FBBF77;
`,Gi=n.tr``,Ji=n.th`
  padding: 15px 10px;
  text-align: center;
  font-weight: 600;
  color: #333;
  border-right: 1px solid #bbb;
  
  &:last-child {
    border-right: none;
  }
  
  @media (max-width: 768px) {
    padding: 12px 8px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 6px;
  }
`,Zi=n.tbody``,el=n.tr`
  background-color: white;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f9f9f9;
  }
  
  &:last-child {
    border-bottom: none;
  }
`,tl=n.td`
  padding: 15px 10px;
  text-align: center;
  color: #555;
  border-right: 1px solid #eee;
  
  &:last-child {
    border-right: none;
  }
  
  &:nth-child(2) {
    text-align: left;
    padding-left: 15px;
    max-width: 400px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  @media (max-width: 768px) {
    padding: 12px 8px;
    
    &:nth-child(2) {
      padding-left: 12px;
      max-width: 250px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 10px 6px;
    
    &:nth-child(2) {
      padding-left: 10px;
      max-width: 150px;
    }
  }
`;n(tl)`
  color: #007bff;
  text-decoration: underline;
  
  &:hover {
    color: #0056b3;
  }
`;const nl=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 8px;
  flex-wrap: wrap;
`,rl=n.button.withConfig({shouldForwardProp:e=>"active"!==e})`
  width: 35px;
  height: 35px;
  border: 1px solid #ddd;
  background-color: ${e=>e.active?"#FBBF77":"white"};
  color: ${e=>e.active?"white":"#333"};
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: ${e=>e.active?"#E6AB65":"#f5f5f5"};
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,ol=n(rl)`
  border-radius: 8px;
  width: 40px;
`,al=n.button`
  margin-bottom: 20px;
  padding: 8px 16px;
  background-color: #FBBF77;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #E6AB65;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`,il=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  font-size: 14px;
  color: #666;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
    text-align: center;
  }
`,ll=n.div`
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  color: #666;
`,sl=d.create({baseURL:"https://baekend.onrender.com",timeout:1e4,headers:{"Content-Type":"application/json",Accept:"application/json"}}),cl=()=>{const t=a(),[n,r]=e.useState([]),[o,i]=e.useState(!0),[l,s]=e.useState(null),[c,u]=e.useState(null),[p,f]=e.useState(1),m=Math.ceil(n.length/10),h=10*(p-1),x=h+10,g=e.useMemo(()=>n.slice(h,x),[n,h,x]),b=async()=>{try{i(!0),s(null),f(1);const e=await(async()=>{try{console.log("🔄 세미나/행사 정보 조회 시작...");const e=await sl.get("/rda/ongoing-projects");if(console.log("API 응답 상태:",e.status),console.log("API 응답 데이터:",e.data),200===e.status&&Array.isArray(e.data))return console.log("✅ 세미나/행사 정보 조회 성공:",e.data.length,"건"),e.data;throw console.warn("❌ 예상과 다른 응답 형식:",e.data),new Error("Invalid response format")}catch(l){if(console.error("❌ 세미나/행사 정보 조회 실패:",l),d.isAxiosError(l)){if("ECONNABORTED"===l.code)throw new Error("요청 시간이 초과되었습니다.");if(l.response)throw new Error(`서버 오류: ${l.response.status}`);if(l.request)throw new Error("서버에 연결할 수 없습니다.")}throw new Error("알 수 없는 오류가 발생했습니다.")}})(),t=e.map((e,t)=>({id:t+1,title:e.title,link:e.link,date:(new Date).toLocaleDateString("ko-KR",{year:"2-digit",month:"2-digit",day:"2-digit"}).replace(/\./g,".").replace(/ /g,""),source:"농촌진흥청"}));r(t),u(new Date),console.log("✅ 지원 데이터 로드 완료:",t.length,"건")}catch(e){console.error("❌ 데이터 로드 실패:",e),s(e instanceof Error?e.message:"데이터를 불러올 수 없습니다."),r((console.log("📋 목업 데이터 사용"),[{id:1,title:"스마트 농업 현장 문제점 찾아 지원금 지원 세미나",link:"https://www.rda.go.kr/example1",date:"25.06.02",source:"농촌진흥청"},{id:2,title:"디지털 농업 기술 교육 프로그램 안내",link:"https://www.rda.go.kr/example2",date:"25.06.01",source:"농촌진흥청"},{id:3,title:"친환경 농업 지원 사업 설명회",link:"https://www.rda.go.kr/example3",date:"25.05.30",source:"농촌진흥청"},{id:4,title:"농업인 창업 지원 프로그램",link:"https://www.rda.go.kr/example4",date:"25.05.29",source:"농촌진흥청"},{id:5,title:"농작물 병해충 방제 기술 세미나",link:"https://www.rda.go.kr/example5",date:"25.05.28",source:"농촌진흥청"},{id:6,title:"첨단농업 기술 도입 지원사업 안내",link:"https://www.rda.go.kr/example6",date:"25.05.27",source:"농촌진흥청"},{id:7,title:"농업 6차 산업화 지원 프로그램",link:"https://www.rda.go.kr/example7",date:"25.05.26",source:"농촌진흥청"},{id:8,title:"스마트팜 구축 지원사업 설명회",link:"https://www.rda.go.kr/example8",date:"25.05.25",source:"농촌진흥청"},{id:9,title:"농업인 교육프로그램 운영 안내",link:"https://www.rda.go.kr/example9",date:"25.05.24",source:"농촌진흥청"},{id:10,title:"농촌융복합산업 활성화 세미나",link:"https://www.rda.go.kr/example10",date:"25.05.23",source:"농촌진흥청"},{id:11,title:"농업 신기술 보급사업 안내",link:"https://www.rda.go.kr/example11",date:"25.05.22",source:"농촌진흥청"},{id:12,title:"청년농업인 정착 지원 프로그램",link:"https://www.rda.go.kr/example12",date:"25.05.21",source:"농촌진흥청"},{id:13,title:"농업 빅데이터 활용 교육과정",link:"https://www.rda.go.kr/example13",date:"25.05.20",source:"농촌진흥청"},{id:14,title:"농업분야 인공지능 기술 세미나",link:"https://www.rda.go.kr/example14",date:"25.05.19",source:"농촌진흥청"},{id:15,title:"농산물 가공기술 교육 프로그램",link:"https://www.rda.go.kr/example15",date:"25.05.18",source:"농촌진흥청"}])),u(new Date)}finally{i(!1)}};e.useEffect(()=>{b()},[]);const y=e=>{e>=1&&e<=m&&e!==p&&(f(e),window.scrollTo({top:0,behavior:"smooth"}),console.log("📄 페이지 변경:",e))},v=()=>{console.log("🔄 데이터 새로고침"),b()};return w.jsxs(Bi,{children:[w.jsxs(Ui,{children:[w.jsx(Wi,{children:w.jsx(Jn,{})}),w.jsx(Vi,{children:"지원금 및 세미나"})]}),w.jsxs(Hi,{children:[w.jsxs(il,{children:[w.jsxs("div",{children:["총 ",n.length,"건의 세미나/행사 정보",c&&w.jsxs("span",{style:{marginLeft:"10px",fontSize:"12px"},children:["(마지막 업데이트: ",c.toLocaleTimeString("ko-KR"),")"]})]}),w.jsx(al,{onClick:v,disabled:o,children:o?"새로고침 중...":"🔄 새로고침"})]}),l&&w.jsxs(Qi,{children:[w.jsxs("div",{children:["⚠️ ",l]}),w.jsx("div",{style:{fontSize:"14px",marginTop:"5px"},children:"목업 데이터로 표시됩니다."}),w.jsx("button",{onClick:v,children:"다시 시도"})]}),o?w.jsx(qi,{children:"🔄 세미나/행사 정보를 불러오는 중..."}):w.jsxs(w.Fragment,{children:[w.jsx(Ki,{children:w.jsxs(Yi,{children:[w.jsx(Xi,{children:w.jsxs(Gi,{children:[w.jsx(Ji,{children:"번호"}),w.jsx(Ji,{children:"제목"}),w.jsx(Ji,{children:"출처"}),w.jsx(Ji,{children:"등록일"})]})}),w.jsx(Zi,{children:g.length>0?g.map((e,n)=>w.jsxs(el,{onClick:()=>(e=>{e.link&&e.link.startsWith("http")?(window.open(e.link,"_blank","noopener,noreferrer"),console.log("🔗 외부 링크 열기:",e.link)):(t("/SupportDetail",{state:{supportItem:e}}),console.log("📄 내부 페이지 이동:",e.title))})(e),children:[w.jsx(tl,{children:h+n+1}),w.jsx(tl,{title:e.title,children:e.title}),w.jsx(tl,{children:e.source}),w.jsx(tl,{children:e.date})]},e.id)):w.jsx(el,{children:w.jsx(tl,{colSpan:4,style:{textAlign:"center",padding:"40px"},children:"표시할 데이터가 없습니다."})})})]})}),m>1&&w.jsxs(w.Fragment,{children:[w.jsxs(nl,{children:[w.jsx(ol,{onClick:()=>{p>1&&y(p-1)},disabled:1===p,children:"←"}),(()=>{const e=[];if(m<=7)for(let t=1;t<=m;t++)e.push(t);else{let t=Math.max(1,p-3),n=Math.min(m,t+7-1);n-t<6&&(t=Math.max(1,n-7+1));for(let r=t;r<=n;r++)e.push(r)}return e})().map(e=>w.jsx(rl,{active:p===e,onClick:()=>y(e),children:e},e)),w.jsx(ol,{onClick:()=>{p<m&&y(p+1)},disabled:p===m,children:"→"})]}),w.jsx(ll,{children:n.length>0&&w.jsxs(w.Fragment,{children:[h+1,"-",Math.min(x,n.length)," / 총 ",n.length,"개 (페이지 ",p,"/",m,")"]})})]})]})]})]})},dl=n.div`
  min-height: 100vh;
  background-color: #FFEFD5;
  padding: 5px 0;
`,ul=n.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 5px;
  padding: 0 10px;
  max-width: 1200px;
  margin: 0 auto 5px auto;
  
  @media (max-width: 1024px) {
    max-width: 95%;
    margin-bottom: 3px;
    padding: 0 15px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 2px;
    padding: 0 10px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1px;
    padding: 0 5px;
  }
`,pl=n.div`
  margin-top: 2px;
  margin-bottom: -50px;
  
  @media (max-width: 768px) {
    margin-top: 1px;
  }
  
  @media (max-width: 480px) {
    margin-top: 1px;
  }
`,fl=n.h1`
  font-size: 25px;
  font-weight: 700;
  color: #333;
  margin: 15px 0 0 40px;
  text-align: left;
  
  @media (max-width: 1024px) {
    font-size: 28px;
    margin: 12px 0 0 40px;
  }
  
  @media (max-width: 768px) {
    font-size: 24px;
    margin: 10px 0 0 40px;
  }
  
  @media (max-width: 480px) {
    font-size: 22px;
    margin: 8px 0 0 50px;
  }
`,ml=n.div`
  background-color: #FFEFD5;
  border-radius: 16px;
  padding: 50px;
  max-width: 1200px;
  margin: 0 auto 40px auto;
  
  @media (max-width: 1024px) {
    max-width: 95%;
    padding: 40px 30px;
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    margin: 0 10px;
  }
  
  @media (max-width: 480px) {
    padding: 25px 15px;
    margin: 0 5px;
  }
`,hl=n.div`
  margin-bottom: 35px;
  padding-bottom: 25px;
  border-bottom: 1px solid white;
  
  @media (max-width: 1024px) {
    margin-bottom: 30px;
    padding-bottom: 20px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 25px;
    padding-bottom: 15px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 20px;
    padding-bottom: 12px;
  }
`,xl=n.h2`
  font-size: 22px;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  line-height: 1.4;
  
  @media (max-width: 1024px) {
    font-size: 20px;
    margin-bottom: 12px;
  }
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 8px;
  }
`,gl=n.p`
  font-size: 16px;
  color: #666;
  margin: 0;
  
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    font-size: 13px;
  }
`,bl=n.div`
  margin-bottom: 35px;
  
  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`,wl=n.table`
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`,yl=n.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`,vl=n.td`
  background-color: #FBBF77;
  padding: 15px 20px;
  font-weight: 600;
  color: #333;
  width: 150px;
  border-right: 1px solid #bbb;
  
  @media (max-width: 768px) {
    padding: 12px 15px;
    width: 120px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 12px;
    width: 100px;
    font-size: 14px;
  }
`,kl=n.td`
  padding: 15px 20px;
  color: #555;
  font-size: 16px;
  
  @media (max-width: 768px) {
    padding: 12px 15px;
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 14px;
  }
`,Sl=n.div`
  margin-bottom: 35px;
  
  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;n.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  
  @media (max-width: 1024px) {
    font-size: 17px;
    margin-bottom: 18px;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 15px;
    margin-bottom: 12px;
  }
`;const jl=n.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
  
  @media (max-width: 1024px) {
    font-size: 15px;
    margin-bottom: 12px;
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 13px;
    margin-bottom: 8px;
  }
`,zl=n.div`
  margin-top: 35px;
  padding-top: 25px;
  border-top: 1px solid white;
  
  @media (max-width: 1024px) {
    margin-top: 30px;
    padding-top: 20px;
  }
  
  @media (max-width: 768px) {
    margin-top: 25px;
    padding-top: 15px;
  }
  
  @media (max-width: 480px) {
    margin-top: 20px;
    padding-top: 12px;
  }
`,Cl=n.div`
  background-color: #FBBF77;
  border-radius: 8px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    padding: 12px 15px;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
  
  @media (max-width: 480px) {
    padding: 10px 12px;
    gap: 8px;
  }
`,_l=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`,El=n.span`
  font-size: 20px;
  color: #333;
  
  @media (max-width: 480px) {
    font-size: 18px;
  }
`,Pl=n.span`
  color: #333;
  font-weight: 500;
  font-size: 16px;
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`,Fl=n.div`
  display: flex;
  gap: 10px;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`,Tl=n.button`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
    border-color: #ccc;
  }
  
  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`,Al=()=>{const e={subtitle:"스마트 농업 현장 문제점 찾아 지원금 지급 공고",manager:"농업지원과",contact:"063-222-2222",period:"2025-06-02~2025-06-30",announcementNumber:"김제시 공고 제2025-626호",content:"'25년 소규모 사업장 방지시설 설치 지원사업 시행(추가) 공고\n\n- 사물인터넷(IoT) 측정기기 부착 지원 -\n\n「대기환경보전법」 제81조의 규정에 따라 추진하는 2025년도 소규모 대기오염 방지시설 설치지원 사업시설지원터넷 (IoT) 측정기기 부착지원」을 아래와 같이 추가로 공고오니 사업 참여 희망 사업장은 공고내용에 따라 신청서를 제출하 여 주시기 바랍니다.\n\n2025년 6월 2일\n\n김 제 시 장",attachmentName:"지원금제안서양식표.hwpx",attachmentSize:"58 kb"};return w.jsxs(dl,{children:[w.jsxs(ul,{children:[w.jsx(pl,{children:w.jsx(Jn,{})}),w.jsx(fl,{children:"지원금 및 세미나"})]}),w.jsx(on,{children:w.jsxs(ml,{children:[w.jsxs(hl,{children:[w.jsx(xl,{children:e.subtitle}),w.jsx(gl,{children:"농업지원과 2025.06.03"})]}),w.jsx(bl,{children:w.jsx(wl,{children:w.jsxs("tbody",{children:[w.jsxs(yl,{children:[w.jsx(vl,{children:"담당부서"}),w.jsx(kl,{children:e.manager})]}),w.jsxs(yl,{children:[w.jsx(vl,{children:"연락처"}),w.jsx(kl,{children:e.contact})]}),w.jsxs(yl,{children:[w.jsx(vl,{children:"공시/공고 기간"}),w.jsx(kl,{children:e.period})]})]})})}),w.jsxs(Sl,{children:[w.jsx(jl,{children:e.announcementNumber}),w.jsx(jl,{style:{whiteSpace:"pre-line"},children:e.content})]}),w.jsx(zl,{children:w.jsxs(Cl,{children:[w.jsxs(_l,{children:[w.jsx(El,{children:"📄"}),w.jsxs(Pl,{children:[e.attachmentName," [",e.attachmentSize,"]"]})]}),w.jsxs(Fl,{children:[w.jsx(Tl,{children:"다운로드"}),w.jsx(Tl,{children:"미리보기"})]})]})})]})})]})},Nl=d.create({baseURL:"https://baekend.onrender.com",headers:{"Content-Type":"application/json"}});Nl.interceptors.request.use(e=>{const t=localStorage.getItem("accessToken");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));const Il=n.div`
  min-height: 100vh;
  background-color: #FFEFD5;
  padding: 5px 0;
`,Ll=n.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 5px;
  padding: 0 10px;
  max-width: 1400px;
  margin: 0 auto 5px auto;
  
  @media (max-width: 1024px) {
    max-width: 95%;
    margin-bottom: 3px;
    padding: 0 15px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 2px;
    padding: 0 10px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1px;
    padding: 0 5px;
  }
`,Dl=n.div`
  margin-top: 2px;
  margin-bottom: -50px;
  
  @media (max-width: 768px) {
    margin-top: 1px;
  }
  
  @media (max-width: 480px) {
    margin-top: 1px;
  }
`,Ol=n.h1`
  font-size: 25px;
  font-weight: 700;
  color: #333;
  margin: 15px 0 0 40px;
  text-align: left;
  
  @media (max-width: 1024px) {
    font-size: 28px;
    margin: 12px 0 0 40px;
  }
  
  @media (max-width: 768px) {
    font-size: 24px;
    margin: 10px 0 0 40px;
  }
  
  @media (max-width: 480px) {
    font-size: 22px;
    margin: 8px 0 0 50px;
  }
`,Rl=n.div`
  background-color: #FFEFD5;
  border-radius: 16px;
  padding: 30px 60px 60px 60px;
  max-width: 1000px;
  margin: 0 auto 40px auto;
  
  @media (max-width: 1024px) {
    max-width: 90%;
    padding: 20px 30px 40px 30px;
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    padding: 15px 30px 30px 30px;
    margin: 0 40px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 15px 25px 15px;
    margin: 0 5px;
  }
`,Ml=n.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`,$l=n.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`,Bl=n.button.withConfig({shouldForwardProp:e=>"$active"!==e})`
  padding: 12px 24px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  
  &:first-child {
    background-color: ${e=>e.$active?"#8B4513":"#F5DEB3"};
    color: ${e=>e.$active?"white":"#8B4513"};
    border-radius: 12px 0 0 12px;
  }
  
  &:last-child {
    background-color: ${e=>e.$active?"#8B4513":"#F5DEB3"};
    color: ${e=>e.$active?"white":"#8B4513"};
    border-radius: 0 12px 12px 0;
    
    &:before {
      content: '📍';
      margin-right: 8px;
    }
  }
  
  &:hover {
    opacity: 0.8;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`,Ul=n.button`
  padding: 10px 20px;
  background-color: #FBBF77;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #E6AB65;
  }
  
  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 12px;
  }
`,Wl=n.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid #ddd;
`,Vl=n.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`,Hl=n.thead`
  background-color: #FBBF77;
`,ql=n.tr``,Ql=n.th`
  padding: 15px 10px;
  text-align: center;
  font-weight: 600;
  color: #333;
  border-right: 1px solid #bbb;
  
  &:last-child {
    border-right: none;
  }
  
  @media (max-width: 768px) {
    padding: 12px 8px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 6px;
  }
`,Kl=n.tbody``,Yl=n.tr`
  background-color: white;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f9f9f9;
  }
  
  &:last-child {
    border-bottom: none;
  }
`,Xl=n.td`
  padding: 15px 10px;
  text-align: center;
  color: #555;
  border-right: 1px solid #eee;
  
  &:last-child {
    border-right: none;
  }
  
  &:nth-child(2) {
    text-align: left;
    padding-left: 15px;
  }
  
  @media (max-width: 768px) {
    padding: 12px 8px;
    
    &:nth-child(2) {
      padding-left: 12px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 10px 6px;
    
    &:nth-child(2) {
      padding-left: 10px;
    }
  }
`,Gl=n.div`
  text-align: center;
  padding: 40px;
  font-size: 16px;
  color: #666;
`,Jl=n.div`
  text-align: center;
  padding: 40px;
  font-size: 16px;
  color: #dc3545;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  margin: 20px 0;
`,Zl=n.div`
  text-align: center;
  padding: 40px;
  font-size: 16px;
  color: #666;
`,es=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 8px;
  flex-wrap: wrap;
`,ts=n.button.withConfig({shouldForwardProp:e=>"active"!==e})`
  width: 35px;
  height: 35px;
  border: 1px solid #ddd;
  background-color: ${e=>e.active?"#FBBF77":"white"};
  color: ${e=>e.active?"white":"#333"};
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: ${e=>e.active?"#E6AB65":"#f5f5f5"};
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,ns=n(ts)`
  border-radius: 8px;
  width: 40px;
`,rs=n.div`
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  color: #666;
`,os=()=>{const t=a(),[n,r]=e.useState("전체보기"),[o,i]=e.useState([]),[l,s]=e.useState(!0),[c,d]=e.useState(null),[u,p]=e.useState(1),f=Math.ceil(o.length/10),m=10*(u-1),h=m+10,x=e.useMemo(()=>o.slice(m,h),[o,m,h]),g=async e=>{var r,o,a,l,c,u;s(!0),d(null),p(1);try{let t;if("전체보기"===e)t=await(async()=>(await Nl.get("/posts")).data)();else{if(!localStorage.getItem("accessToken"))return d("지역별 게시글을 보려면 로그인이 필요합니다."),void s(!1);t=await(async()=>(await Nl.get("/post/local")).data)()}i(t.posts||[])}catch(f){console.error("게시글 로드 오류:",f);let e="게시글을 불러오는 중 오류가 발생했습니다.";401===(null==(r=f.response)?void 0:r.status)?(e="로그인이 필요합니다.","지역별"===n&&setTimeout(()=>{t("/login")},2e3)):500===(null==(o=f.response)?void 0:o.status)?e="서버 내부 오류가 발생했습니다.":(null==(l=null==(a=f.response)?void 0:a.data)?void 0:l.message)?e=f.response.data.message:(null==(u=null==(c=f.response)?void 0:c.data)?void 0:u.detail)&&(e=f.response.data.detail),d(e)}finally{s(!1)}};e.useEffect(()=>{g("전체보기")},[]);const b=e=>{e>=1&&e<=f&&e!==u&&(p(e),window.scrollTo({top:0,behavior:"smooth"}))},y=e=>{try{const t=new Date(e),n=t.getFullYear().toString().slice(-2),r=(t.getMonth()+1).toString().padStart(2,"0");return`${n}.${r}.${t.getDate().toString().padStart(2,"0")}`}catch{return e}};return w.jsxs(Il,{children:[w.jsxs(Ll,{children:[w.jsx(Dl,{children:w.jsx(Jn,{})}),w.jsx(Ol,{children:"커뮤니티"})]}),w.jsxs(Rl,{children:[w.jsx(Ml,{children:w.jsx(Ul,{onClick:()=>{if(!localStorage.getItem("accessToken"))return alert("글쓰기를 하려면 로그인이 필요합니다."),void t("/login");t("/CommunityWrite")},children:"글쓰기"})}),w.jsx($l,{children:["전체보기","지역별"].map(e=>w.jsx(Bl,{$active:n===e,onClick:()=>(e=>{r(e),g(e)})(e),disabled:l,children:e},e))}),l&&w.jsx(Gl,{children:"게시글을 불러오는 중..."}),c&&w.jsx(Jl,{children:c}),!l&&!c&&w.jsxs(w.Fragment,{children:[w.jsx(Wl,{children:w.jsxs(Vl,{children:[w.jsx(Hl,{children:w.jsxs(ql,{children:[w.jsx(Ql,{children:"번호"}),w.jsx(Ql,{children:"제목"}),w.jsx(Ql,{children:"작성자"}),w.jsx(Ql,{children:"작성일"}),w.jsx(Ql,{children:"좋아요 수"})]})}),w.jsx(Kl,{children:0===x.length?w.jsx("tr",{children:w.jsx(Xl,{colSpan:5,children:w.jsx(Zl,{children:"게시글이 없습니다."})})}):x.map(e=>w.jsxs(Yl,{onClick:()=>{return n=e.id,void t(`/CommunityDetail/${n}`);var n},children:[w.jsx(Xl,{children:e.no}),w.jsx(Xl,{children:e.title}),w.jsx(Xl,{children:e.username}),w.jsx(Xl,{children:y(e.created_at)}),w.jsx(Xl,{children:e.likes})]},e.id))})]})}),f>1&&w.jsxs(w.Fragment,{children:[w.jsxs(es,{children:[w.jsx(ns,{onClick:()=>{u>1&&b(u-1)},disabled:1===u,children:"←"}),(()=>{const e=[];if(f<=7)for(let t=1;t<=f;t++)e.push(t);else{let t=Math.max(1,u-3),n=Math.min(f,t+7-1);n-t<6&&(t=Math.max(1,n-7+1));for(let r=t;r<=n;r++)e.push(r)}return e})().map(e=>w.jsx(ts,{active:u===e,onClick:()=>b(e),children:e},e)),w.jsx(ns,{onClick:()=>{u<f&&b(u+1)},disabled:u===f,children:"→"})]}),w.jsx(rs,{children:o.length>0&&w.jsxs(w.Fragment,{children:[m+1,"-",Math.min(h,o.length)," / 총 ",o.length,"개 (페이지 ",u,"/",f,")"]})})]})]})]})]})},as=n.div`
  text-align: center;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,is=n.span`
  font-size: 14px;
  color: #555;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`,ls=n.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  transition: all 0.3s ease;
  border-radius: 50%;
  
  &:hover {
    transform: scale(1.1);
    background-color: rgba(251, 191, 119, 0.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  img {
    width: 40px;
    height: 40px;
    transition: all 0.3s ease;
    
    @media (max-width: 768px) {
      width: 35px;
      height: 35px;
    }
    
    @media (max-width: 480px) {
      width: 30px;
      height: 30px;
    }
  }
`,ss=n.span`
  font-size: 12px;
  color: #999;
  
  @media (max-width: 480px) {
    font-size: 11px;
  }
`,cs=({isLiked:e,likeCount:t,onLike:n,showText:r=!0,showCount:o=!0})=>w.jsxs(as,{children:[r&&w.jsx(is,{children:"글 내용이 마음에 드셨다면"}),w.jsx(ls,{onClick:n,children:w.jsx("img",{src:e?"/images/ffavv.png":"/images/fav.png",alt:e?"좋아요 취소":"좋아요"})}),o&&w.jsxs(ss,{children:["좋아요 ",t,"개"]})]}),ds="https://baekend.onrender.com",us=d.create({baseURL:ds,headers:{"Content-Type":"application/json"}});us.interceptors.request.use(e=>{const t=localStorage.getItem("accessToken");return t&&(e.headers.Authorization=`Bearer ${t}`,console.log("🔑 Authorization 헤더 추가:",`Bearer ${t.substring(0,20)}...`)),e},e=>Promise.reject(e)),us.interceptors.response.use(e=>e,e=>{var t;return 401===(null==(t=e.response)?void 0:t.status)&&(console.log("❌ 401 오류 - 토큰 제거"),localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("userInfo"),localStorage.removeItem("likedPosts")),Promise.reject(e)});const ps=async e=>{try{return(await d.get(`${ds}/posts/${e}`)).data}catch(t){throw console.error("공개 게시글 조회 오류:",t),t}},fs=async e=>{try{return(await d.get(`${ds}/posts/${e}/comments`)).data}catch(t){throw console.error("공개 댓글 조회 오류:",t),t}},ms=()=>{const e=localStorage.getItem("accessToken");if(!e)return null;try{const t=JSON.parse(atob(e.split(".")[1]));return t.user_id||t.sub||null}catch{return null}},hs=e=>{try{const t=JSON.parse(atob(e.split(".")[1])),n=Date.now()/1e3;return t.exp>n}catch{return!1}},xs=n.div`
  min-height: 100vh;
  background-color: #FFEFD5;
  padding: 5px 0;
`,gs=n.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 5px;
  padding: 0 10px;
  max-width: 1400px;
  margin: 0 auto 5px auto;
  
  @media (max-width: 1024px) {
    max-width: 95%;
    margin-bottom: 3px;
    padding: 0 15px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 2px;
    padding: 0 10px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1px;
    padding: 0 5px;
  }
`,bs=n.div`
  margin-top: 2px;
  margin-bottom: -50px;
  
  @media (max-width: 768px) {
    margin-top: 1px;
  }
  
  @media (max-width: 480px) {
    margin-top: 1px;
  }
`,ws=n.h1`
  font-size: 25px;
  font-weight: 700;
  color: #333;
  margin: 15px 0 0 40px;
  text-align: left;
  
  @media (max-width: 1024px) {
    font-size: 28px;
    margin: 12px 0 0 40px;
  }
  
  @media (max-width: 768px) {
    font-size: 24px;
    margin: 10px 0 0 40px;
  }
  
  @media (max-width: 480px) {
    font-size: 22px;
    margin: 8px 0 0 50px;
  }
`,ys=n.div`
  background-color: #FFEFD5;
  border-radius: 16px;
  padding: 60px;
  max-width: 1000px;
  margin: 0 auto 40px auto;
  
  @media (max-width: 1024px) {
    max-width: 90%;
    padding: 40px 30px;
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    padding: 30px 30px;
    margin: 0 40px;
  }
  
  @media (max-width: 480px) {
    padding: 25px 15px;
    margin: 0 5px;
  }
`,vs=n.div`
  text-align: center;
  padding: 40px;
  font-size: 16px;
  color: #666;
`,ks=n.div`
  text-align: center;
  padding: 40px;
  font-size: 16px;
  color: #dc3545;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  margin: 20px 0;
`,Ss=n.div`
  background-color: white;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
  border: 1px solid #ddd;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
  
  @media (max-width: 480px) {
    padding: 15px;
  }
`,js=n.div`
  background-color: #FBBF77;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 12px;
  }
`,zs=n.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
`,Cs=n.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
  flex: 1;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`,_s=n.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  margin-left: 10px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #c82333;
  }
  
  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 11px;
  }
`,Es=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #666;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 11px;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
`,Ps=n.div`
  margin-bottom: 30px;
`,Fs=n.div`
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 10px;
  white-space: pre-wrap;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`,Ts=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 15px 0;
`,As=n.span`
  background-color: #FFEFD5;
  color: #8B4513;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  border: 1px solid #ddd;
`,Ns=n.div`
  margin-top: 40px;
`,Is=n.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,Ls=n.div`
  border-bottom: 1px solid #eee;
  padding: 15px 0;
  
  &:last-child {
    border-bottom: none;
  }
`,Ds=n.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
`,Os=n.div`
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,Rs=n.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`,Ms=n.button`
  background: none;
  border: none;
  color: #666;
  font-size: 12px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f0f0f0;
    color: #333;
  }
  
  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`,$s=n.textarea`
  width: 100%;
  min-height: 60px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 14px;
  resize: vertical;
  margin-bottom: 8px;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #FBBF77;
  }
`,Bs=n.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`,Us=n.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
`,Ws=n(Us)`
  background-color: #FBBF77;
  color: white;
  
  &:hover {
    background-color: #E6AB65;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`,Vs=n(Us)`
  background-color: #6c757d;
  color: white;
  
  &:hover {
    background-color: #5a6268;
  }
`,Hs=n.div`
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`,qs=n.textarea`
  width: 100%;
  min-height: 80px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  resize: vertical;
  font-family: inherit;
  font-size: 14px;
  background-color: white;
  color: #333;
  box-sizing: border-box;
  
  &::placeholder {
    color: #999;
  }
  
  &:focus {
    outline: none;
    border-color: #FBBF77;
  }
  
  @media (max-width: 768px) {
    font-size: 13px;
    padding: 10px;
  }
`,Qs=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
  }
`,Ks=n.span`
  font-size: 12px;
  color: #999;
`,Ys=n.button`
  padding: 8px 16px;
  background-color: #FBBF77;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #E6AB65;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    padding: 10px;
  }
`,Xs=n.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  gap: 10px;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Gs=n.button`
  flex: 1;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  @media (max-width: 480px) {
    padding: 10px;
  }
`,Js=n(Gs)`
  background-color: #FBBF77;
  color: white;
  
  &:hover {
    background-color: #E6AB65;
  }
`,Zs=n(Gs)`
  background-color: #FBBF77;
  color: white;
  
  &:hover {
    background-color: #E6AB65;
  }
`,ec=n.div`
  background-color: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 8px;
  padding: 16px;
  margin: 20px 0;
  text-align: center;
  
  p {
    margin: 0 0 12px 0;
    color: #856404;
  }
  
  button {
    background-color: #FBBF77;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    margin: 0 4px;
    
    &:hover {
      background-color: #E6AB65;
    }
  }
`,tc=n.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`,nc=n.div`
  background-color: white;
  border-radius: 12px;
  padding: 30px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 480px) {
    padding: 20px;
  }
`,rc=n.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
  text-align: center;
`,oc=n.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 25px;
  text-align: center;
  line-height: 1.5;
`,ac=n.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`,ic=n.button`
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
`,lc=n(ic)`
  background-color: #6c757d;
  color: white;
  
  &:hover {
    background-color: #5a6268;
  }
`,sc=n(ic)`
  background-color: #dc3545;
  color: white;
  
  &:hover {
    background-color: #c82333;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`,cc=()=>{const{id:t}=i(),n=a(),r=q(),{isAuthenticated:o,user:l,likedPosts:s}=Y(e=>e.auth),[c,u]=e.useState(null),[p,f]=e.useState([]),[m,h]=e.useState(""),[x,g]=e.useState(0),[b,y]=e.useState(!0),[v,k]=e.useState(null),[S,j]=e.useState(!1),[z,C]=e.useState(!1),[_,E]=e.useState(!1),[P,F]=e.useState(null),[T,A]=e.useState(""),[N,I]=e.useState(!1),[L,D]=e.useState(!1),[O,R]=e.useState(null),M=t&&s[t]||!1,$=e=>{if(console.log("=== 댓글 권한 체크 ==="),console.log("isAuthenticated:",o),console.log("user:",l),console.log("comment.user_id:",e.user_id),console.log("comment.username:",e.username),!o)return console.log("❌ 인증되지 않음"),!1;if(l&&l.user_id&&"loading..."!==l.username){const t=String(l.user_id),n=String(e.user_id),r=t===n&&""!==t;return console.log("Redux 사용자 ID로 비교:",t,"===",n,"=",r),r}const t=ms();if(t){const n=String(e.user_id),r=t===n;return console.log("토큰 사용자 ID로 비교:",t,"===",n,"=",r),r}return console.log("❌ 사용자 ID를 확인할 수 없음"),!1},B=()=>{if(console.log("=== 게시글 권한 체크 ==="),console.log("isAuthenticated:",o),console.log("post:",c),console.log("user:",l),!o||!c)return console.log("❌ 인증되지 않음 또는 게시글 없음"),!1;if(l&&l.user_id&&"loading..."!==l.username){const e=String(l.user_id),t=String(c.user_id),n=e===t&&""!==e;return console.log("Redux 사용자 ID로 비교:",e,"===",t,"=",n),n}const e=ms();if(e){const t=String(c.user_id),n=e===t;return console.log("토큰 사용자 ID로 비교:",e,"===",t,"=",n),n}return console.log("❌ 사용자 ID를 확인할 수 없음"),!1},U=async e=>{console.log("🔄 서버와 좋아요 상태 동기화 시작");const t=localStorage.getItem("accessToken");if(t&&hs(t))try{const t=await(async e=>{var t,n,r,o;try{if(console.log("🎯 개별 좋아요 상태 조회 시도:",e),!localStorage.getItem("accessToken"))throw new Error("토큰이 없습니다");const t=await us.get(`/posts/${e}/like-status/me`);return console.log("✅ 개별 좋아요 상태 응답:",t.data),t.data}catch(v){throw console.error("❌ 내 좋아요 상태 조회 오류:",v),console.error("오류 상세:",{status:null==(t=v.response)?void 0:t.status,message:(null==(r=null==(n=v.response)?void 0:n.data)?void 0:r.detail)||v.message,headers:null==(o=v.config)?void 0:o.headers}),v}})(e);console.log("📡 서버에서 받은 좋아요 데이터:",t),r(kt({postId:e,liked:t.liked}));const n=JSON.parse(localStorage.getItem("likedPosts")||"{}");n[e]=t.liked,localStorage.setItem("likedPosts",JSON.stringify(n)),g(t.total_likes),console.log("✅ 서버 동기화 완료:",{postId:e,liked:t.liked,totalLikes:t.total_likes})}catch(n){console.error("❌ 서버 동기화 실패:",n)}else console.log("❌ 유효하지 않은 토큰")};e.useEffect(()=>{console.log("=== 컴포넌트 마운트 - 인증 상태 복원 ==="),r(yt());const e=localStorage.getItem("accessToken"),t=localStorage.getItem("userInfo");if(console.log("토큰 존재:",!!e),console.log("사용자 정보 존재:",!!t),e&&t&&hs(e))try{const e=JSON.parse(t);console.log("✅ 인증 상태 복원 완료:",e.username)}catch(n){console.error("❌ 사용자 정보 파싱 오류:",n),r(gt()),localStorage.clear()}else console.log("❌ 유효하지 않은 인증 정보 - 로그아웃 처리"),r(gt()),localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("userInfo")},[r]),e.useEffect(()=>{(async()=>{if(o&&(!l||!l.user_id||"loading..."===l.username)){console.log("🔄 사용자 정보 로드 시도");try{const e=await(async()=>{if(!localStorage.getItem("accessToken"))return null;try{return(await us.get("/mypage")).data.mypage}catch(v){return console.error("사용자 정보 가져오기 실패:",v),null}})();if(e){const t={user_id:ms()||"unknown",username:e.username,email:e.email};r(wt(t)),console.log("✅ 사용자 정보 로드 완료:",t)}}catch(e){console.error("❌ 사용자 정보 로드 실패:",e)}}})()},[o,l,r]);const W=async e=>{console.log("=== 좋아요 상태 로드 시작 ==="),console.log("postId:",e),console.log("isAuthenticated:",o);try{if(o){const t=localStorage.getItem("accessToken");if(t&&hs(t))return console.log("✅ 로그인된 사용자 - 개별 좋아요 상태 조회"),void(await U(e));console.log("❌ 토큰 무효 - 로그아웃 처리"),r(gt()),localStorage.clear()}console.log("👤 비로그인 사용자 - 공개 좋아요 수 조회");const t=await(async e=>{try{return(await d.get(`${ds}/posts/${e}/like-status`)).data}catch(v){throw console.error("공개 좋아요 상태 조회 오류:",v),v}})(e);g(t.total_likes||0)}catch(t){console.error("❌ 좋아요 상태 로드 실패:",t),g(0)}},V=async e=>{var t;try{let a;if(o)try{a=await(async e=>{try{return(await us.get(`/posts/${e}/comments`)).data}catch(v){throw console.error("댓글 조회 오류:",v),v}})(e)}catch(n){if(401!==(null==(t=n.response)?void 0:t.status))throw n;r(gt()),localStorage.clear(),a=await fs(e)}else a=await fs(e);f(a.comments||[])}catch(a){console.error("댓글 로드 실패:",a),f([])}},H=async()=>{var e,n,a,i,l,s,c;if(!t)return k("게시글 ID가 없습니다."),void y(!1);try{let n;if(y(!0),k(null),o)try{n=await(async e=>{try{return(await us.get(`/posts/${e}`)).data}catch(v){throw console.error("게시글 조회 오류:",v),v}})(t)}catch(d){if(401!==(null==(e=d.response)?void 0:e.status))throw d;r(gt()),localStorage.clear(),n=await ps(t)}else n=await ps(t);u(n),await Promise.all([W(t),V(t)])}catch(p){console.error("게시글 로드 오류:",p);let e="게시글을 불러오는 중 오류가 발생했습니다.";404===(null==(n=p.response)?void 0:n.status)?e="존재하지 않는 게시글입니다.":500===(null==(a=p.response)?void 0:a.status)?e="서버 내부 오류가 발생했습니다.":"ERR_NETWORK"===p.code?e="서버에 연결할 수 없습니다. 서버가 실행 중인지 확인해주세요.":(null==(l=null==(i=p.response)?void 0:i.data)?void 0:l.message)?e=p.response.data.message:(null==(c=null==(s=p.response)?void 0:s.data)?void 0:c.detail)&&(e=p.response.data.detail),k(e)}finally{y(!1)}};e.useEffect(()=>{(async()=>{r(yt()),await new Promise(e=>setTimeout(e,100)),await H()})()},[t,r]),e.useEffect(()=>{(async()=>{o&&t&&(console.log("🔄 인증 상태 변경 감지 - 서버와 동기화"),await U(t))})()},[o,t]);const Q=()=>{F(null),A("")},K=async e=>{var t,o;if(confirm("정말로 이 댓글을 삭제하시겠습니까?"))try{D(!0),R(e),await(async e=>{try{return(await us.delete(`/comments/${e}`)).data}catch(v){throw console.error("댓글 삭제 오류:",v),v}})(e),f(t=>t.filter(t=>t.id!==e)),alert("댓글이 삭제되었습니다.")}catch(a){console.error("댓글 삭제 오류:",a),401===(null==(t=a.response)?void 0:t.status)?(r(gt()),localStorage.clear(),alert("로그인이 필요합니다."),n("/login")):403===(null==(o=a.response)?void 0:o.status)?alert("댓글 삭제 권한이 없습니다."):alert("댓글 삭제 중 오류가 발생했습니다.")}finally{D(!1),R(null)}},X=e=>{try{const t=new Date(e),n=t.getFullYear(),r=(t.getMonth()+1).toString().padStart(2,"0"),o=t.getDate().toString().padStart(2,"0"),a=t.getHours().toString().padStart(2,"0");return`${n}.${r}.${o} ${a}:${t.getMinutes().toString().padStart(2,"0")}`}catch{return e}},G=()=>{n("/CommunityList")},J=()=>{H()};return e.useEffect(()=>{const e=e=>{"Escape"===e.key&&P&&Q()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[P]),e.useEffect(()=>{console.log("=== Redux 상태 변경 감지 ==="),console.log("isAuthenticated:",o),console.log("user:",l),console.log("likedPosts:",s),console.log("현재 게시글 좋아요 상태 (isLiked):",M),console.log("localStorage likedPosts:",localStorage.getItem("likedPosts")),console.log("토큰에서 추출한 user_id:",ms()),console.log("현재 게시글:",c),console.log("댓글 수:",p.length),p.length>0&&(console.log("첫 번째 댓글:",p[0]),console.log("첫 번째 댓글 소유자 여부:",$(p[0]))),c&&console.log("게시글 소유자 여부:",B())},[o,l,s,M,c,p]),b?w.jsxs(xs,{children:[w.jsxs(gs,{children:[w.jsx(bs,{children:w.jsx(Jn,{})}),w.jsx(ws,{children:"커뮤니티"})]}),w.jsx(ys,{children:w.jsx(vs,{children:"게시글을 불러오는 중..."})})]}):v?w.jsxs(xs,{children:[w.jsxs(gs,{children:[w.jsx(bs,{children:w.jsx(Jn,{})}),w.jsx(ws,{children:"커뮤니티"})]}),w.jsxs(ys,{children:[w.jsx(ks,{children:v}),w.jsxs(Xs,{children:[w.jsx(Js,{onClick:G,children:"목록으로 돌아가기"}),w.jsx(Zs,{onClick:J,children:"다시 시도"})]})]})]}):c?w.jsxs(xs,{children:[w.jsxs(gs,{children:[w.jsx(bs,{children:w.jsx(Jn,{})}),w.jsx(ws,{children:"커뮤니티"})]}),w.jsxs(ys,{children:[w.jsxs(Ss,{children:[w.jsxs(js,{children:[w.jsxs(zs,{children:[w.jsx(Cs,{children:c.title}),B()&&w.jsx(_s,{onClick:()=>{C(!0)},disabled:_,children:_?"삭제 중...":"삭제"})]}),w.jsx(Es,{children:w.jsxs("span",{children:[X(c.created_at),"     작성자: ",c.username,"     좋아요: ",x]})})]}),w.jsxs(Ps,{children:[w.jsx(Fs,{children:c.content}),c.tags&&c.tags.length>0&&w.jsx(Ts,{children:c.tags.map((e,t)=>w.jsxs(As,{children:["#",e]},t))})]})]}),w.jsxs(Ns,{children:[w.jsxs(Is,{children:["💬 댓글 ",p.length]}),p.map(e=>w.jsxs(Ls,{children:[w.jsxs(Ds,{children:[e.username," · ",X(e.created_at)]}),P===e.id?w.jsxs("div",{children:[w.jsx($s,{value:T,onChange:e=>A(e.target.value),maxLength:3e3,disabled:N,placeholder:"댓글을 수정해주세요."}),w.jsxs("div",{style:{fontSize:"12px",color:"#999",marginBottom:"8px"},children:[T.length,"/3000"]}),w.jsxs(Bs,{children:[w.jsx(Vs,{onClick:Q,disabled:N,children:"취소"}),w.jsx(Ws,{onClick:()=>(async e=>{var t,o,a,i,l;if(T.trim())try{I(!0),console.log("댓글 수정 시도:",{commentId:e,content:T.trim()});const t={content:T.trim()},n=await us.patch(`/comments/${e}`,t);console.log("댓글 수정 성공:",n.data),f(t=>t.map(t=>t.id===e?{...t,content:T.trim()}:t)),F(null),A(""),alert("댓글이 수정되었습니다.")}catch(s){console.error("댓글 수정 오류:",s),console.error("오류 상세:",{status:null==(t=s.response)?void 0:t.status,data:null==(o=s.response)?void 0:o.data,message:s.message}),401===(null==(a=s.response)?void 0:a.status)?(r(gt()),localStorage.clear(),alert("로그인이 필요합니다."),n("/login")):403===(null==(i=s.response)?void 0:i.status)?alert("댓글 수정 권한이 없습니다."):422===(null==(l=s.response)?void 0:l.status)?alert("요청 데이터 형식이 올바르지 않습니다."):alert("댓글 수정 중 오류가 발생했습니다.")}finally{I(!1)}else alert("댓글 내용을 입력해주세요.")})(e.id),disabled:N||!T.trim(),children:N?"저장 중...":"저장"})]})]}):w.jsxs("div",{children:[w.jsx(Os,{children:e.content}),o&&$(e)&&w.jsxs(Rs,{children:[w.jsx(Ms,{onClick:()=>(e=>{F(e.id),A(e.content)})(e),disabled:null!==P||L,children:"수정"}),w.jsx(Ms,{onClick:()=>K(e.id),disabled:null!==P||L||O===e.id,children:O===e.id?"삭제 중...":"삭제"})]})]})]},e.id)),o?w.jsxs(Hs,{children:[w.jsx(qs,{placeholder:"댓글을 남겨주세요.",value:m,onChange:e=>h(e.target.value),maxLength:3e3,disabled:null!==P}),w.jsxs(Qs,{children:[w.jsxs(Ks,{children:[m.length,"/3000"]}),w.jsx(Ys,{onClick:async()=>{var e;if(m.trim()&&t){if(!o)return alert("로그인이 필요합니다."),void n("/login");try{j(!0);const e={post_id:t,content:m.trim()},n=await(async e=>{try{return(await us.post("/comments",e)).data}catch(v){throw console.error("댓글 작성 오류:",v),v}})(e),r={id:n.id,user_id:n.user_id,username:n.username,content:n.content,created_at:n.created_at};f(e=>[...e,r]),h("")}catch(a){console.error("댓글 작성 오류:",a),401===(null==(e=a.response)?void 0:e.status)?(r(gt()),localStorage.clear(),alert("로그인이 필요합니다."),n("/login")):alert("댓글 작성 중 오류가 발생했습니다.")}finally{j(!1)}}},disabled:S||!m.trim()||null!==P,children:S?"등록 중...":"등록"})]})]}):w.jsxs(ec,{children:[w.jsx("p",{children:"댓글을 작성하려면 로그인이 필요합니다."}),w.jsx("button",{onClick:()=>{n("/login")},children:"로그인하기"})]})]}),w.jsx(cs,{isLiked:M,likeCount:x,onLike:async()=>{var e;if(t){if(!o)return alert("로그인이 필요합니다."),void n("/login");try{console.log("=== 좋아요 토글 시작 ==="),console.log("현재 좋아요 상태:",M);const e=await(async e=>{try{return(await us.post(`/posts/${e}/like`)).data}catch(v){throw console.error("좋아요 토글 오류:",v),v}})(t);console.log("🎯 좋아요 토글 API 응답:",e),r(kt({postId:t,liked:e.liked}));const n=JSON.parse(localStorage.getItem("likedPosts")||"{}");n[t]=e.liked,localStorage.setItem("likedPosts",JSON.stringify(n)),g(e.total_likes),console.log("✅ 좋아요 토글 완료:",{postId:t,liked:e.liked,totalLikes:e.total_likes})}catch(a){console.error("❌ 좋아요 처리 오류:",a),401===(null==(e=a.response)?void 0:e.status)?(r(gt()),localStorage.clear(),alert("로그인이 필요합니다."),n("/login")):alert("좋아요 처리 중 오류가 발생했습니다.")}}},showText:!0,showCount:!0}),w.jsxs(Xs,{children:[w.jsx(Js,{onClick:G,children:"목록"}),w.jsx(Zs,{onClick:()=>{if(!o)return alert("글쓰기를 하려면 로그인이 필요합니다."),void n("/login");n("/CommunityWrite")},children:"글쓰기"})]})]}),z&&w.jsx(tc,{children:w.jsxs(nc,{children:[w.jsx(rc,{children:"게시글 삭제"}),w.jsxs(oc,{children:["정말로 이 게시글을 삭제하시겠습니까?",w.jsx("br",{}),"삭제된 게시글은 복구할 수 없습니다."]}),w.jsxs(ac,{children:[w.jsx(lc,{onClick:()=>{C(!1)},children:"취소"}),w.jsx(sc,{onClick:async()=>{var e,o;if(t)try{E(!0);const e=await(async e=>{try{return(await us.delete(`/posts/${e}`)).data}catch(v){throw console.error("게시글 삭제 오류:",v),v}})(t);console.log("삭제 성공:",e.message),r(St(t));const o=JSON.parse(localStorage.getItem("likedPosts")||"{}");delete o[t],localStorage.setItem("likedPosts",JSON.stringify(o)),alert("게시글이 삭제되었습니다."),n("/CommunityList")}catch(a){console.error("게시글 삭제 오류:",a),401===(null==(e=a.response)?void 0:e.status)?(r(gt()),localStorage.clear(),alert("로그인이 필요합니다."),n("/login")):403===(null==(o=a.response)?void 0:o.status)?alert("삭제 권한이 없습니다."):alert("게시글 삭제 중 오류가 발생했습니다.")}finally{E(!1),C(!1)}},disabled:_,children:_?"삭제 중...":"삭제"})]})]})})]}):w.jsxs(xs,{children:[w.jsxs(gs,{children:[w.jsx(bs,{children:w.jsx(Jn,{})}),w.jsx(ws,{children:"커뮤니티"})]}),w.jsxs(ys,{children:[w.jsx(ks,{children:"게시글을 찾을 수 없습니다."}),w.jsx(Xs,{children:w.jsx(Js,{onClick:G,children:"목록으로 돌아가기"})})]})]})},dc=d.create({baseURL:"https://baekend.onrender.com",headers:{"Content-Type":"application/json"}});dc.interceptors.request.use(e=>{const t=localStorage.getItem("accessToken");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));const uc=[{id:1,name:"서울특별시"},{id:2,name:"부산광역시"},{id:3,name:"대구광역시"},{id:4,name:"인천광역시"},{id:5,name:"광주광역시"},{id:6,name:"대전광역시"},{id:7,name:"울산광역시"},{id:8,name:"세종특별자치시"},{id:9,name:"경기도"},{id:10,name:"강원도"},{id:11,name:"충청북도"},{id:12,name:"충청남도"},{id:13,name:"전라북도"},{id:14,name:"전라남도"},{id:15,name:"경상북도"},{id:16,name:"경상남도"},{id:17,name:"제주특별자치도"}],pc=n.div`
  min-height: 100vh;
  background-color: #FFEFD5;
  padding: 5px 0;
`,fc=n.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 5px;
  padding: 0 10px;
  max-width: 1400px;
  margin: 0 auto 5px auto;
  
  @media (max-width: 1024px) {
    max-width: 95%;
    margin-bottom: 3px;
    padding: 0 15px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 2px;
    padding: 0 10px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1px;
    padding: 0 5px;
  }
`,mc=n.div`
  margin-top: 2px;
  margin-bottom: -50px;
  
  @media (max-width: 768px) {
    margin-top: 1px;
  }
  
  @media (max-width: 480px) {
    margin-top: 1px;
  }
`,hc=n.h1`
  font-size: 25px;
  font-weight: 700;
  color: #333;
  margin: 15px 0 0 40px;
  text-align: left;
  
  @media (max-width: 1024px) {
    font-size: 28px;
    margin: 12px 0 0 40px;
  }
  
  @media (max-width: 768px) {
    font-size: 24px;
    margin: 10px 0 0 40px;
  }
  
  @media (max-width: 480px) {
    font-size: 22px;
    margin: 8px 0 0 50px;
  }
`,xc=n.div`
  background-color: #FFEFD5;
  border-radius: 16px;
  padding: 60px;
  max-width: 1000px;
  margin: 0 auto 40px auto;
  
  @media (max-width: 1024px) {
    max-width: 90%;
    padding: 40px 30px;
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    padding: 30px 30px;
    margin: 0 40px;
  }
  
  @media (max-width: 480px) {
    padding: 25px 15px;
    margin: 0 5px;
  }
`,gc=n.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,bc=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`,wc=n.label`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`,yc=n.div`
  font-size: 12px;
  color: #666;
  text-align: right;
  margin-top: -15px;
  margin-bottom: 15px;
`,vc=n.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f9f9f9;
  color: #333;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4CAF50;
    background-color: white;
  }

  &::placeholder {
    color: #999;
  }
  
  @media (max-width: 768px) {
    font-size: 15px;
    padding: 10px 14px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px 12px;
  }
`,kc=n.div`
  font-size: 12px;
  color: #666;
  margin-top: 5px;
`,Sc=n.div`
  padding: 12px 16px;
  background-color: #e8f5e8;
  border: 2px solid #4CAF50;
  border-radius: 8px;
  font-size: 16px;
  color: #2e7d32;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 15px;
    padding: 10px 14px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px 12px;
  }
`,jc=n.div`
  font-size: 12px;
  color: #666;
  margin-top: 5px;
  font-weight: normal;
`,zc=n.div`
  color: #dc3545;
  font-size: 14px;
  margin-top: 8px;
  padding: 8px 12px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
`,Cc=n.div`
  color: #155724;
  font-size: 14px;
  margin-top: 8px;
  padding: 8px 12px;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
`,_c=n.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  position: relative;
`,Ec=n.button`
  background-color: #FBBF77;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 15px 60px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #E6AB65;
  }
  
  &:active {
    background-color: #D19B59;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    padding: 12px 50px;
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 40px;
    font-size: 14px;
  }
`,Pc=n.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`,Fc=n.div`
  width: 20px;
  height: 20px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 8px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,Tc=()=>{const t=a(),[n,r]=e.useState({title:"",content:"",tags:""}),[o,i]=e.useState({userInfo:!0,submission:!1}),[l,s]=e.useState(null),[c,d]=e.useState(null),[u,p]=e.useState(null),f=e.useCallback(e=>{var n,r,o,a,i,l,s;if(console.error("API 에러:",e),401===(null==(n=e.response)?void 0:n.status))return localStorage.removeItem("accessToken"),setTimeout(()=>t("/login"),2e3),"로그인이 만료되었습니다. 로그인 페이지로 이동합니다.";if(422===(null==(r=e.response)?void 0:r.status)){if(null==(a=null==(o=e.response)?void 0:o.data)?void 0:a.detail){if(Array.isArray(e.response.data.detail)){return`입력 데이터 오류:\n${e.response.data.detail.map(e=>{var t;return`${(null==(t=e.loc)?void 0:t[1])||"필드"}: ${e.msg||"오류"}`}).join("\n")}`}return`입력 데이터 오류: ${e.response.data.detail}`}return"입력 데이터 형식이 올바르지 않습니다. 모든 필드를 확인해주세요."}return 500===(null==(i=e.response)?void 0:i.status)?"서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해주세요.":(null==(s=null==(l=e.response)?void 0:l.data)?void 0:s.message)||e.message||"알 수 없는 오류가 발생했습니다."},[t]),m=e.useCallback(e=>{if(!e.trim())return{isValid:!0};const t=e.split(",").map(e=>e.trim()).filter(Boolean);if(t.length>5)return{isValid:!1,message:"태그는 최대 5개까지 입력 가능합니다."};return t.find(e=>e.length>20)?{isValid:!1,message:"각 태그는 20자를 초과할 수 없습니다."}:{isValid:!0}},[]),h=e.useCallback(()=>{if(!n.title||!n.content)return{isValid:!1,message:"제목과 내용을 모두 입력해주세요."};if(n.title.length<2)return{isValid:!1,message:"제목을 최소 2자 이상 입력해주세요."};if(n.content.length<10)return{isValid:!1,message:"내용을 최소 10자 이상 입력해주세요."};if(!u||!u.local_id)return{isValid:!1,message:"사용자 정보를 불러오지 못했습니다. 페이지를 새로고침해주세요."};const e=m(n.tags);return e.isValid?{isValid:!0}:{isValid:!1,message:e.message}},[n,u,m]),x=e.useMemo(()=>{if(!(null==u?void 0:u.local_id))return"";const e=uc.find(e=>e.id===u.local_id);return e?e.name:`지역 ID: ${u.local_id}`},[null==u?void 0:u.local_id]);e.useEffect(()=>{let e;return(async()=>{try{if(!localStorage.getItem("accessToken"))return s("로그인이 필요합니다. 로그인 페이지로 이동합니다."),void(e=setTimeout(()=>t("/login"),2e3));console.log("🔍 사용자 정보 가져오는 중...");const n=await(async()=>(await dc.get("/users/me")).data)();console.log("✅ 사용자 정보:",n),p(n)}catch(n){const e=f(n);s(e)}finally{i(e=>({...e,userInfo:!1}))}})(),()=>{e&&clearTimeout(e)}},[t,f]);const g=e.useCallback(e=>{e.length<=20&&r(t=>({...t,title:e})),l&&s(null)},[l]),b=e.useCallback(e=>{e.length<=2e3&&r(t=>({...t,content:e})),l&&s(null)},[l]),y=e.useCallback(e=>{r(t=>({...t,tags:e.target.value})),l&&s(null)},[l]),v=e.useCallback(async e=>{e.preventDefault();const r=h();if(!r.isValid)return void s(r.message||"입력 정보를 확인해주세요.");if(!localStorage.getItem("accessToken"))return s("로그인이 필요합니다. 로그인 페이지로 이동합니다."),void setTimeout(()=>t("/login"),2e3);i(e=>({...e,submission:!0})),s(null),d(null);try{const e=n.tags.split(",").map(e=>e.trim()).filter(e=>e.length>0),r={title:n.title,content:n.content,tags:e};console.log("전송할 게시글 데이터:",r),console.log("사용자의 지역 ID (자동 적용):",u.local_id);await(async e=>(await dc.post("/post",e)).data)(r);d("✅ 게시글이 성공적으로 등록되었습니다!"),setTimeout(()=>{t("/communityList")},2e3)}catch(o){const e=f(o);s(e)}finally{i(e=>({...e,submission:!1}))}},[n,u,h,t,f]);return o.userInfo?w.jsxs(pc,{children:[w.jsxs(fc,{children:[w.jsx(mc,{children:w.jsx(Jn,{})}),w.jsx(hc,{children:"커뮤니티 글 쓰기"})]}),w.jsx(xc,{children:w.jsxs("div",{style:{textAlign:"center",padding:"40px 0"},children:[w.jsx(Fc,{}),w.jsx("div",{children:"사용자 정보를 불러오는 중..."})]})})]}):u?w.jsxs(pc,{children:[w.jsxs(fc,{children:[w.jsx(mc,{children:w.jsx(Jn,{})}),w.jsx(hc,{children:"커뮤니티 글 쓰기"})]}),w.jsx(xc,{children:w.jsxs(gc,{onSubmit:v,children:[w.jsxs(bc,{children:[w.jsx(wc,{htmlFor:"title",children:"제목"}),w.jsx(Gr,{type:"text",value:n.title,onChange:g,placeholder:"최소 2자, 최대 20자 작성 가능",required:!0}),w.jsxs(yc,{children:[n.title.length,"/20자"]})]}),w.jsxs(bc,{children:[w.jsx(wc,{htmlFor:"content",children:"작성 내용"}),w.jsx(Gr,{type:"textarea",value:n.content,onChange:b,placeholder:"내용에 대해 자세히 적어주세요\n\n• 최소 10자, 2000자 이내 작성 가능",rows:12,required:!0}),w.jsxs(yc,{children:[n.content.length,"/2000자"]})]}),w.jsxs(bc,{children:[w.jsx(wc,{children:"작성 지역"}),w.jsxs(Sc,{children:["📍 ",x,w.jsx(jc,{children:"* 회원가입 시 설정한 지역으로 자동 등록됩니다"})]})]}),w.jsxs(bc,{children:[w.jsx(wc,{htmlFor:"tags",children:"태그 (선택사항)"}),w.jsx(vc,{type:"text",value:n.tags,onChange:y,placeholder:"태그를 쉼표로 구분해서 입력하세요 (예: 토마토, 장마, 병충해)"}),w.jsx(kc,{children:"태그는 쉼표(,)로 구분하여 입력하세요. 최대 5개, 각 태그당 20자 이내로 입력 가능합니다."})]}),l&&w.jsx(zc,{children:l}),c&&w.jsx(Cc,{children:c}),w.jsxs(_c,{children:[w.jsx(Ec,{type:"submit",disabled:o.submission,children:o.submission?"등록 중...":"등록"}),o.submission&&w.jsxs(Pc,{children:[w.jsx(Fc,{}),w.jsx("div",{children:"게시글 등록 중..."})]})]})]})})]}):w.jsxs(pc,{children:[w.jsxs(fc,{children:[w.jsx(mc,{children:w.jsx(Jn,{})}),w.jsx(hc,{children:"커뮤니티 글 쓰기"})]}),w.jsx(xc,{children:l&&w.jsx(zc,{children:l})})]})};function Ac(){return w.jsx($,{store:Ct,children:w.jsxs(l,{children:[w.jsx(_t,{}),w.jsx("div",{className:"App",children:w.jsxs(s,{children:[w.jsx(c,{path:"/",element:w.jsx($n,{})}),w.jsx(c,{path:"/login",element:w.jsx(vr,{})}),w.jsx(c,{path:"/signup",element:w.jsx(Wr,{})}),w.jsx(c,{path:"/report",element:w.jsx(ta,{})}),w.jsx(c,{path:"/Mypage",element:w.jsx(si,{})}),w.jsx(c,{path:"/ReportDetail",element:w.jsx($i,{})}),w.jsx(c,{path:"/SupportList",element:w.jsx(cl,{})}),w.jsx(c,{path:"/SupportDetail",element:w.jsx(Al,{})}),w.jsx(c,{path:"/CommunityList",element:w.jsx(os,{})}),w.jsx(c,{path:"/CommunityDetail/:id",element:w.jsx(cc,{})}),w.jsx(c,{path:"/CommunityWrite",element:w.jsx(Tc,{})})]})})]})})}E.createRoot(document.getElementById("root")).render(w.jsx(e.StrictMode,{children:w.jsx(Ac,{})}));
