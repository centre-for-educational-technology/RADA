!function(n){function e(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var t={};return e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,e,t){Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=16)}([function(n,e){n.exports=function(){var n=[];return n.toString=function(){for(var n=[],e=0;e<this.length;e++){var t=this[e];t[2]?n.push("@media "+t[2]+"{"+t[1]+"}"):n.push(t[1])}return n.join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},function(n,e){n.exports=function(n,e,t,r){var i,o=n=n||{},a=typeof n["default"];"object"!==a&&"function"!==a||(i=n,o=n["default"]);var s="function"==typeof o?o.options:o;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),t&&(s._scopeId=t),r){var u=s.computed||(s.computed={});Object.keys(r).forEach(function(n){var e=r[n];u[n]=function(){return e}})}return{esModule:i,exports:o,options:s}}},function(n,e,t){function r(n){for(var e=0;e<n.length;e++){var t=n[e],r=l[t.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](t.parts[i]);for(;i<t.parts.length;i++)r.parts.push(o(t.parts[i]));r.parts.length>t.parts.length&&(r.parts.length=t.parts.length)}else{for(var a=[],i=0;i<t.parts.length;i++)a.push(o(t.parts[i]));l[t.id]={id:t.id,refs:1,parts:a}}}}function i(){var n=document.createElement("style");return n.type="text/css",f.appendChild(n),n}function o(n){var e,t,r=document.querySelector('style[data-vue-ssr-id~="'+n.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(g){var o=p++;r=d||(d=i()),e=a.bind(null,r,o,!1),t=a.bind(null,r,o,!0)}else r=i(),e=s.bind(null,r),t=function(){r.parentNode.removeChild(r)};return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else t()}}function a(n,e,t,r){var i=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=m(e,i);else{var o=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(o,a[e]):n.appendChild(o)}}function s(n,e){var t=e.css,r=e.media,i=e.sourceMap;if(r&&n.setAttribute("media",r),i&&(t+="\n/*# sourceURL="+i.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=t(15),l={},f=u&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,v=!1,h=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());n.exports=function(n,e,t){v=t;var i=c(n,e);return r(i),function(e){for(var t=[],o=0;o<i.length;o++){var a=i[o],s=l[a.id];s.refs--,t.push(s)}e?(i=c(n,e),r(i)):i=[];for(var o=0;o<t.length;o++){var s=t[o];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete l[s.id]}}}};var m=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},function(n,e,t){"use strict";(function(e){function t(n,e){window.console&&(console.warn("[vue-i18n] "+n),e&&console.warn(e.stack))}function r(n,e,t){if("object"==typeof e)t(e);else{var r=e.call(this);if("function"==typeof r)if(r.resolved)t(r.resolved);else if(r.requested)r.pendingCallbacks.push(t);else{r.requested=!0;var o=r.pendingCallbacks=[t];r(function(n){r.resolved=n;for(var e=0,t=o.length;e<t;e++)o[e](n)},function(){t()})}else i(r)&&r.then(function(n){t(n)},function(){t()})["catch"](function(n){console.error(n),t()})}}function i(n){return n&&"function"==typeof n.then}function o(n){if(!_){var e=n.$watch("__watcher__",function(n){});_=n._watchers[0].constructor,e()}return _}function a(n){return!b&&n&&n._data&&n._data.__ob__&&n._data.__ob__.dep&&(b=n._data.__ob__.dep.constructor),b}function s(n){return null===n||void 0===n}function u(n,e){function t(t){var r=arguments.length;return r?r>1?n.apply(e,arguments):n.call(e,t):n.call(e)}return t._length=n.length,t}function c(n){return null!==n&&"object"==typeof n}function l(n){return $.call(n)===k}function f(n,e){return A.call(n,e)}function d(n){return W.test(n)}function p(n){var e=n.charCodeAt(0),t=n.charCodeAt(n.length-1);return e!==t||34!==e&&39!==e?n:n.slice(1,-1)}function v(n){if(void 0===n)return"eof";var e=n.charCodeAt(0);switch(e){case 91:case 93:case 46:case 34:case 39:case 48:return n;case 95:case 36:case 45:return"ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return e>=97&&e<=122||e>=65&&e<=90?"ident":e>=49&&e<=57?"number":"else"}function h(n){var e=n.trim();return("0"!==n.charAt(0)||!isNaN(n))&&(d(e)?p(e):"*"+e)}function g(n){function e(){var e=n[l+1];if(f===q&&"'"===e||f===Q&&'"'===e)return l++,r="\\"+e,p[V](),!0}var t,r,i,o,a,s,u,c=[],l=-1,f=S,d=0,p=[];for(p[D]=function(){void 0!==i&&(c.push(i),i=void 0)},p[V]=function(){void 0===i?i=r:i+=r},p[R]=function(){p[V](),d++},p[M]=function(){if(d>0)d--,f=B,p[V]();else{if(d=0,i=h(i),i===!1)return!1;p[D]()}};null!=f;)if(l++,t=n[l],"\\"!==t||!e()){if(o=v(t),u=H[f],a=u[o]||u["else"]||G,a===G)return;if(f=a[0],s=p[a[1]],s&&(r=a[2],r=void 0===r?t:r,s()===!1))return;if(f===z)return c.raw=n,c}}function m(n){var e=L[n];return e||(e=g(n),e&&(L[n]=e)),e}function y(n,r){void 0===r&&(r={});var i=n.version&&Number(n.version.split(".")[0])||-1;if("production"!==e.env.NODE_ENV&&y.installed)return void t("already installed.");if("production"!==e.env.NODE_ENV&&i<2)return void t("vue-i18n ("+y.version+") need to use Vue 2.0 or later (Vue: "+n.version+").");var o="en";w(n,o),T(n,J),C(n,J),j(n,J,o),K(n)}function w(n,e){var t=n.config.silent;n.config.silent=!0,J||(J=new n({data:{lang:e,locales:{}}})),n.config.silent=t}var _,b,x,T=function(n,e){n.locale=function(n,i,o){return void 0===i?e.locales[n]:void(null===i?(e.locales[n]=void 0,delete e.locales[n]):r(n,i,function(r){r?e.$set(e.locales,n,r):t("failed set `"+n+"` locale"),o&&o()}))}},C=function(n,e){var t=n.prototype._init;n.prototype._init=function(n){var r=this;t.call(this,n),this.$parent||(this._$lang=e,this._langUnwatch=this._$lang.$watch("$data",function(n,e){r.$forceUpdate()},{deep:!0}))};var r=n.prototype._destroy;n.prototype._destroy=function(){!this.$parent&&this._langUnwatch&&(this._langUnwatch(),this._langUnwatch=null,this._$lang=null),r.apply(this,arguments)}},$=Object.prototype.toString,k="[object Object]",A=Object.prototype.hasOwnProperty,E=null,O=null,j=function(n,e,t){function r(n,e){var t=new i(e,n,null,{lazy:!0});return function(){return t.dirty&&t.evaluate(),s&&s.target&&t.depend(),t.value}}var i=o(e),s=a(e);Object.defineProperty(n.config,"lang",{enumerable:!0,configurable:!0,get:r(function(){return e.lang},e),set:u(function(n){e.lang=n},e)}),x=t,Object.defineProperty(n.config,"fallbackLang",{enumerable:!0,configurable:!0,get:function(){return x},set:function(n){x=n}}),Object.defineProperty(n.config,"missingHandler",{enumerable:!0,configurable:!0,get:function(){return E},set:function(n){E=n}}),Object.defineProperty(n.config,"i18nFormatter",{enumerable:!0,configurable:!0,get:function(){return O},set:function(n){O=n}})},U=/(%|)\{([0-9a-zA-Z_]+)\}/g,N=function(n){function e(n){for(var e=[],t=arguments.length-1;t-- >0;)e[t]=arguments[t+1];return e=1===e.length&&"object"==typeof e[0]?e[0]:{},e&&e.hasOwnProperty||(e={}),n.replace(U,function(t,r,i,o){var a;return"{"===n[o-1]&&"}"===n[o+t.length]?i:(a=f(e,i)?e[i]:t,s(a)?"":a)})}return e},L=Object.create(null),V=0,D=1,R=2,M=3,S=0,F=1,I=2,P=3,B=4,q=5,Q=6,z=7,G=8,H=[];H[S]={ws:[S],ident:[P,V],"[":[B],eof:[z]},H[F]={ws:[F],".":[I],"[":[B],eof:[z]},H[I]={ws:[I],ident:[P,V],0:[P,V],number:[P,V]},H[P]={ident:[P,V],0:[P,V],number:[P,V],ws:[F,D],".":[I,D],"[":[B,D],eof:[z,D]},H[B]={"'":[q,V],'"':[Q,V],"[":[B,R],"]":[F,M],eof:G,"else":[B,V]},H[q]={"'":[B,V],eof:G,"else":[q,V]},H[Q]={'"':[B,V],eof:G,"else":[Q,V]};var J,W=/^\s?(true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/,Z=function(n){function e(n){if(null===n||void 0===n)return!0;if(Array.isArray(n)){if(n.length>0)return!1;if(0===n.length)return!0}else if(l(n))for(var e in n)if(f(n,e))return!1;return!0}function t(n,t){if(!c(n))return null;var r=m(t);if(e(r))return null;for(var i=r.length,o=null,a=n,s=0;s<i;){var u=a[r[s]];if(void 0===u){a=null;break}a=u,s++}return o=a}return t},K=function(n){function r(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var r=n.config.lang,i=n.config.fallbackLang;return 1===e.length?c(e[0])||Array.isArray(e[0])?e=e[0]:"string"==typeof e[0]&&(r=e[0]):2===e.length&&("string"==typeof e[0]&&(r=e[0]),(c(e[1])||Array.isArray(e[1]))&&(e=e[1])),{lang:r,fallback:i,params:e}}function i(n,e){return!(!n||!e)&&!s(m(n,e))}function o(e,r,i){if(!e)return null;var a=m(e,r);if(Array.isArray(a))return a;if(s(a)&&(a=e[r]),s(a))return null;if("string"!=typeof a)return t("Value of key '"+r+"' is not a string!"),null;if(a.indexOf("@:")>=0){var u=a.match(/(@:[\w|.]+)/g);for(var c in u){var l=u[c],f=l.substr(2),d=o(e,f,i);a=a.replace(l,d)}}return i?n.config.i18nFormatter?n.config.i18nFormatter.apply(null,[a].concat(i)):g(a,i):a}function a(n,r,i,a,u){var c=null;return c=o(n(r),a,u),s(c)?(c=o(n(i),a,u),s(c)?null:("production"!==e.env.NODE_ENV&&t('Fall back to translate the keypath "'+a+'" with "'+i+'" language.'),c)):c}function l(r,i,o,a){return s(a)?(n.config.missingHandler?n.config.missingHandler.apply(null,[r,i,o]):"production"!==e.env.NODE_ENV&&t('Cannot translate the value of keypath "'+i+'". Use the value of keypath as default'),i):a}function f(e){return n.locale(e)}function d(n){return this.$options.locales[n]}function p(n){return n?n>1?1:0:1}function v(n,e){return n=Math.abs(n),2===e?p(n):n?Math.min(n,2):0}function h(n,e){if(!n&&"string"!=typeof n)return null;var t=n.split("|");return e=v(e,t.length),t[e]?t[e].trim():n}var g=N(n),m=Z(n);return n.t=function(n){for(var e=[],t=arguments.length-1;t-- >0;)e[t]=arguments[t+1];if(!n)return"";var i=r.apply(void 0,e),o=i.lang,s=i.fallback,u=i.params;return l(o,n,null,a(f,o,s,n,u))},n.tc=function(e,t){for(var r=[],i=arguments.length-2;i-- >0;)r[i]=arguments[i+2];return h(n.t.apply(n,[e].concat(r)),t)},n.te=function(n){for(var e=[],t=arguments.length-1;t-- >0;)e[t]=arguments[t+1];var o=r.apply(void 0,e),a=o.lang;return i(f(a),n)},n.prototype.$t=function(n){for(var e=[],t=arguments.length-1;t-- >0;)e[t]=arguments[t+1];if(!n)return"";var i=r.apply(void 0,e),o=i.lang,s=i.fallback,c=i.params,p=null;return this.$options.locales&&(p=a(u(d,this),o,s,n,c))?p:l(o,n,this,a(f,o,s,n,c))},n.prototype.$tc=function(n,e){for(var t=[],r=arguments.length-2;r-- >0;)t[r]=arguments[r+2];return"number"!=typeof e&&"undefined"!=typeof e?n:h((i=this).$t.apply(i,[n].concat(t)),e);var i},n.prototype.$te=function(n){for(var e=[],t=arguments.length-1;t-- >0;)e[t]=arguments[t+1];var o=r.apply(void 0,e),a=o.lang,s=!1;return this.$options.locales&&(s=i(u(d)(a),n)),s||(s=i(f(a),n)),s},n.mixin({computed:{$lang:function(){return n.config.lang}}}),n};y.version="__VERSION__","undefined"!=typeof window&&window.Vue&&window.Vue.use(y),n.exports=y}).call(e,t(9))},function(n,e,t){t(13);var r=t(1)(t(5),t(11),"data-v-3556f9b2",null);n.exports=r.exports},function(n,e,t){"use strict";e["default"]={props:["answers"],components:{"grading-list-item":t(10)},mounted:function(){var n=this;this.$nextTick(function(){n.$nextTick(function(){n.baseUrl=window.RADA.config.base_url})})},data:function(){return{baseUrl:""}},methods:{}}},function(n,e,t){"use strict";e["default"]={props:["answer"],mounted:function(){var n=this;this.$nextTick(function(){n.$nextTick(function(){n.baseUrl=window.RADA.config.base_url})})},data:function(){return{baseUrl:""}},methods:{getQuestionTypeImageUrl:function(){var n={1:"information",2:"one-correct-answer",3:"multiple-correct-answers",4:"freeform-answer",5:"match-pairs",6:"embedded-content",7:"photo"};return this.baseUrl+"/img/icons/item/"+n[this.answer.type]+".png"},getQuestionTypeTranslation:function(){return window.Laravel.questionTypes[this.answer.type]}}}},function(n,e,t){e=n.exports=t(0)(),e.push([n.i,"",""])},function(n,e,t){e=n.exports=t(0)(),e.push([n.i,"",""])},function(n,e){function t(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(n){if(l===setTimeout)return setTimeout(n,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function o(n){if(f===clearTimeout)return clearTimeout(n);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(n);try{return f(n)}catch(e){try{return f.call(null,n)}catch(e){return f.call(this,n)}}}function a(){h&&p&&(h=!1,p.length?v=p.concat(v):g=-1,v.length&&s())}function s(){if(!h){var n=i(a);h=!0;for(var e=v.length;e;){for(p=v,v=[];++g<e;)p&&p[g].run();g=-1,e=v.length}p=null,h=!1,o(n)}}function u(n,e){this.fun=n,this.array=e}function c(){}var l,f,d=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(n){l=t}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(n){f=r}}();var p,v=[],h=!1,g=-1;d.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];v.push(new u(n,e)),1!==v.length||h||i(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(n){return[]},d.binding=function(n){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(n){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(n,e,t){t(14);var r=t(1)(t(6),t(12),"data-v-78a47d4c",null);n.exports=r.exports},function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"panel panel-default"},[t("div",{staticClass:"panel-heading"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-xs-10 col-md-8"},[n._v("\n                "+n._s(n.$t("pages.grading.index.heading"))+"\n            ")]),n._v(" "),n._m(0)])]),n._v(" "),t("div",{staticClass:"panel-body",attrs:{id:"search-results"}},[0===n.answers.length?t("div",{staticClass:"well"},[n._v(n._s(n.$t("pages.grading.index.none-found")))]):n._e(),n._v(" "),n.answers.length>0?t("div",n._l(n.answers,function(n){return t("grading-list-item",{attrs:{answer:n}})}),1):n._e()])])},staticRenderFns:[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"col-xs-2 col-md-4"},[t("div",{staticClass:"pull-right"},[n._v("\n                    siia tuleb lyliti\n                ")])])}]}},function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"media"},[t("div",{staticClass:"media-left"},[t("a",[t("img",{staticClass:"media-object img-rounded sz-img-64x64",attrs:{src:n.getQuestionTypeImageUrl(),alt:"featured-image"}})])]),n._v(" "),t("div",{staticClass:"media-body"},[t("h4",{staticClass:"media-heading"},[n._v("\n                Title: "+n._s(n.answer.title)+"\n        ")]),t("br"),n._v("\n        ID: "+n._s(n.answer.id)),t("br"),n._v("\n        Type: "+n._s(this.getQuestionTypeTranslation())),t("br"),n._v("\n        Answer: "+n._s(n.answer.answer)),t("br"),n._v("\n        Correct: "+n._s(n.answer.correct)),t("br"),n._v("\n        Description: "+n._s(n.answer.description)),t("br"),n._v("\n        Grade: "+n._s(n.answer.grade)),t("br"),n._v("\n        Image: "+n._s(n.answer.image)),t("br"),n._v("\n        Is answered: "+n._s(n.answer.is_answered)+"\n    ")])])},staticRenderFns:[]}},function(n,e,t){var r=t(7);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);t(2)("203c53dc",r,!0)},function(n,e,t){var r=t(8);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);t(2)("1c451169",r,!0)},function(n,e){n.exports=function(n,e){for(var t=[],r={},i=0;i<e.length;i++){var o=e[i],a=o[0],s=o[1],u=o[2],c=o[3],l={id:n+":"+i,css:s,media:u,sourceMap:c};r[a]?r[a].parts.push(l):t.push(r[a]={id:a,parts:[l]})}return t}},function(n,e,t){var r=t(3);Vue.use(r),Vue.config.lang=window.Laravel.locale,Vue.locale(window.Laravel.locale,_.cloneDeep(window.Laravel.translations)),Vue.component("grading-list",t(4));new Vue({el:"#grading-list-container",mounted:function(){var n=this;this.$nextTick(function(){n.answers=window.Laravel.answers})},data:function(){return{baseUrl:"/",answers:[]}},methods:{}})}]);