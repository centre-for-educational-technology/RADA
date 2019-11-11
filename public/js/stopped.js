!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,e,n){Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=13)}([function(t,e,n){"use strict";(function(e){function n(t,e){window.console&&(console.warn("[vue-i18n] "+t),e&&console.warn(e.stack))}function r(t,e,n){if("object"==typeof e)n(e);else{var r=e.call(this);if("function"==typeof r)if(r.resolved)n(r.resolved);else if(r.requested)r.pendingCallbacks.push(n);else{r.requested=!0;var s=r.pendingCallbacks=[n];r(function(t){r.resolved=t;for(var e=0,n=s.length;e<n;e++)s[e](t)},function(){n()})}else i(r)&&r.then(function(t){n(t)},function(){n()})["catch"](function(t){console.error(t),n()})}}function i(t){return t&&"function"==typeof t.then}function s(t){if(!w){var e=t.$watch("__watcher__",function(t){});w=t._watchers[0].constructor,e()}return w}function a(t){return!b&&t&&t._data&&t._data.__ob__&&t._data.__ob__.dep&&(b=t._data.__ob__.dep.constructor),b}function o(t){return null===t||void 0===t}function u(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function c(t){return null!==t&&"object"==typeof t}function l(t){return A.call(t)===O}function f(t,e){return $.call(t,e)}function d(t){return J.test(t)}function h(t){var e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e!==n||34!==e&&39!==e?t:t.slice(1,-1)}function p(t){if(void 0===t)return"eof";var e=t.charCodeAt(0);switch(e){case 91:case 93:case 46:case 34:case 39:case 48:return t;case 95:case 36:case 45:return"ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return e>=97&&e<=122||e>=65&&e<=90?"ident":e>=49&&e<=57?"number":"else"}function v(t){var e=t.trim();return("0"!==t.charAt(0)||!isNaN(t))&&(d(e)?h(e):"*"+e)}function g(t){function e(){var e=t[l+1];if(f===W&&"'"===e||f===F&&'"'===e)return l++,r="\\"+e,h[M](),!0}var n,r,i,s,a,o,u,c=[],l=-1,f=D,d=0,h=[];for(h[V]=function(){void 0!==i&&(c.push(i),i=void 0)},h[M]=function(){void 0===i?i=r:i+=r},h[j]=function(){h[M](),d++},h[I]=function(){if(d>0)d--,f=q,h[M]();else{if(d=0,i=v(i),i===!1)return!1;h[V]()}};null!=f;)if(l++,n=t[l],"\\"!==n||!e()){if(s=p(n),u=B[f],a=u[s]||u["else"]||H,a===H)return;if(f=a[0],o=h[a[1]],o&&(r=a[2],r=void 0===r?n:r,o()===!1))return;if(f===G)return c.raw=t,c}}function m(t){var e=L[t];return e||(e=g(t),e&&(L[t]=e)),e}function _(t,r){void 0===r&&(r={});var i=t.version&&Number(t.version.split(".")[0])||-1;if("production"!==e.env.NODE_ENV&&_.installed)return void n("already installed.");if("production"!==e.env.NODE_ENV&&i<2)return void n("vue-i18n ("+_.version+") need to use Vue 2.0 or later (Vue: "+t.version+").");var s="en";y(t,s),x(t,Q),T(t,Q),N(t,Q,s),K(t)}function y(t,e){var n=t.config.silent;t.config.silent=!0,Q||(Q=new t({data:{lang:e,locales:{}}})),t.config.silent=n}var w,b,C,x=function(t,e){t.locale=function(t,i,s){return void 0===i?e.locales[t]:void(null===i?(e.locales[t]=void 0,delete e.locales[t]):r(t,i,function(r){r?e.$set(e.locales,t,r):n("failed set `"+t+"` locale"),s&&s()}))}},T=function(t,e){var n=t.prototype._init;t.prototype._init=function(t){var r=this;n.call(this,t),this.$parent||(this._$lang=e,this._langUnwatch=this._$lang.$watch("$data",function(t,e){r.$forceUpdate()},{deep:!0}))};var r=t.prototype._destroy;t.prototype._destroy=function(){!this.$parent&&this._langUnwatch&&(this._langUnwatch(),this._langUnwatch=null,this._$lang=null),r.apply(this,arguments)}},A=Object.prototype.toString,O="[object Object]",$=Object.prototype.hasOwnProperty,E=null,k=null,N=function(t,e,n){function r(t,e){var n=new i(e,t,null,{lazy:!0});return function(){return n.dirty&&n.evaluate(),o&&o.target&&n.depend(),n.value}}var i=s(e),o=a(e);Object.defineProperty(t.config,"lang",{enumerable:!0,configurable:!0,get:r(function(){return e.lang},e),set:u(function(t){e.lang=t},e)}),C=n,Object.defineProperty(t.config,"fallbackLang",{enumerable:!0,configurable:!0,get:function(){return C},set:function(t){C=t}}),Object.defineProperty(t.config,"missingHandler",{enumerable:!0,configurable:!0,get:function(){return E},set:function(t){E=t}}),Object.defineProperty(t.config,"i18nFormatter",{enumerable:!0,configurable:!0,get:function(){return k},set:function(t){k=t}})},R=/(%|)\{([0-9a-zA-Z_]+)\}/g,U=function(t){function e(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];return e=1===e.length&&"object"==typeof e[0]?e[0]:{},e&&e.hasOwnProperty||(e={}),t.replace(R,function(n,r,i,s){var a;return"{"===t[s-1]&&"}"===t[s+n.length]?i:(a=f(e,i)?e[i]:n,o(a)?"":a)})}return e},L=Object.create(null),M=0,V=1,j=2,I=3,D=0,S=1,z=2,P=3,q=4,W=5,F=6,G=7,H=8,B=[];B[D]={ws:[D],ident:[P,M],"[":[q],eof:[G]},B[S]={ws:[S],".":[z],"[":[q],eof:[G]},B[z]={ws:[z],ident:[P,M],0:[P,M],number:[P,M]},B[P]={ident:[P,M],0:[P,M],number:[P,M],ws:[S,V],".":[z,V],"[":[q,V],eof:[G,V]},B[q]={"'":[W,M],'"':[F,M],"[":[q,j],"]":[S,I],eof:H,"else":[q,M]},B[W]={"'":[q,M],eof:H,"else":[W,M]},B[F]={'"':[q,M],eof:H,"else":[F,M]};var Q,J=/^\s?(true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/,Z=function(t){function e(t){if(null===t||void 0===t)return!0;if(Array.isArray(t)){if(t.length>0)return!1;if(0===t.length)return!0}else if(l(t))for(var e in t)if(f(t,e))return!1;return!0}function n(t,n){if(!c(t))return null;var r=m(n);if(e(r))return null;for(var i=r.length,s=null,a=t,o=0;o<i;){var u=a[r[o]];if(void 0===u){a=null;break}a=u,o++}return s=a}return n},K=function(t){function r(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=t.config.lang,i=t.config.fallbackLang;return 1===e.length?c(e[0])||Array.isArray(e[0])?e=e[0]:"string"==typeof e[0]&&(r=e[0]):2===e.length&&("string"==typeof e[0]&&(r=e[0]),(c(e[1])||Array.isArray(e[1]))&&(e=e[1])),{lang:r,fallback:i,params:e}}function i(t,e){return!(!t||!e)&&!o(m(t,e))}function s(e,r,i){if(!e)return null;var a=m(e,r);if(Array.isArray(a))return a;if(o(a)&&(a=e[r]),o(a))return null;if("string"!=typeof a)return n("Value of key '"+r+"' is not a string!"),null;if(a.indexOf("@:")>=0){var u=a.match(/(@:[\w|.]+)/g);for(var c in u){var l=u[c],f=l.substr(2),d=s(e,f,i);a=a.replace(l,d)}}return i?t.config.i18nFormatter?t.config.i18nFormatter.apply(null,[a].concat(i)):g(a,i):a}function a(t,r,i,a,u){var c=null;return c=s(t(r),a,u),o(c)?(c=s(t(i),a,u),o(c)?null:("production"!==e.env.NODE_ENV&&n('Fall back to translate the keypath "'+a+'" with "'+i+'" language.'),c)):c}function l(r,i,s,a){return o(a)?(t.config.missingHandler?t.config.missingHandler.apply(null,[r,i,s]):"production"!==e.env.NODE_ENV&&n('Cannot translate the value of keypath "'+i+'". Use the value of keypath as default'),i):a}function f(e){return t.locale(e)}function d(t){return this.$options.locales[t]}function h(t){return t?t>1?1:0:1}function p(t,e){return t=Math.abs(t),2===e?h(t):t?Math.min(t,2):0}function v(t,e){if(!t&&"string"!=typeof t)return null;var n=t.split("|");return e=p(e,n.length),n[e]?n[e].trim():t}var g=U(t),m=Z(t);return t.t=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];if(!t)return"";var i=r.apply(void 0,e),s=i.lang,o=i.fallback,u=i.params;return l(s,t,null,a(f,s,o,t,u))},t.tc=function(e,n){for(var r=[],i=arguments.length-2;i-- >0;)r[i]=arguments[i+2];return v(t.t.apply(t,[e].concat(r)),n)},t.te=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var s=r.apply(void 0,e),a=s.lang;return i(f(a),t)},t.prototype.$t=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];if(!t)return"";var i=r.apply(void 0,e),s=i.lang,o=i.fallback,c=i.params,h=null;return this.$options.locales&&(h=a(u(d,this),s,o,t,c))?h:l(s,t,this,a(f,s,o,t,c))},t.prototype.$tc=function(t,e){for(var n=[],r=arguments.length-2;r-- >0;)n[r]=arguments[r+2];return"number"!=typeof e&&"undefined"!=typeof e?t:v((i=this).$t.apply(i,[t].concat(n)),e);var i},t.prototype.$te=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var s=r.apply(void 0,e),a=s.lang,o=!1;return this.$options.locales&&(o=i(u(d)(a),t)),o||(o=i(f(a),t)),o},t.mixin({computed:{$lang:function(){return t.config.lang}}}),t};_.version="__VERSION__","undefined"!=typeof window&&window.Vue&&window.Vue.use(_),t.exports=_}).call(e,n(7))},function(t,e,n){n(10);var r=n(8)(n(4),n(9),null,null);t.exports=r.exports},function(t,e){t.exports=function(){function t(t){this.type=t.type,this.text=t.text,this.answer=t.answer,this.isCorrect=t.isCorrect}return t}()},function(t,e,n){"use strict";var r=n(2),i=n.n(r);e.a={methods:{missingWordsToArray:function(t){var e=[];if("undefined"==typeof t||t.length<=0)return e;var n=t.split("{");e.push(new i.a({type:"text",text:n.shift(),answer:"",isCorrect:!1}));for(var r=n.length,s=0;s<r;s++){var a=n[s],o=a.split("}");2===o.length&&(e.push(new i.a({type:"input",text:o.shift(),answer:"",isCorrect:!1})),e.push(new i.a({type:"text",text:o.shift(),answer:"",isCorrect:!1})))}return e},missingWordsToString:function(t){for(var e=t.length,n="",r=0;r<e;r++){var i=t[r];n+="input"===i.type?"{"+i.answer+"}":i.text}return n}}}},function(t,e,n){"use strict";var r=n(3);e["default"]={props:["game","baseUrl"],mixins:[r.a],mounted:function(){var t=this;this.$http.get(t.baseUrl+"/api/games/"+t.game.id+"/voucher",{}).then(function(e){e.body.hasVoucher&&(t.voucher=e.body.voucher)},function(t){})},data:function(){return{voucher:!1}},computed:{totalQuestionsCount:function(){return this.game.activity.questions.length},correctQuestionsCount:function(){var t=this;return _.filter(this.game.activity.questions,function(e){if(t.isCorrect(e))return e}).length},getResultQuestions:function(){if(this.game.activity.complete===!0)return this.game.activity.questions;var t=this.game.answers;return this.game.activity.questions.filter(function(e){return"undefined"!=typeof t[e.id]})}},methods:{open:function(){var t=this;this.$nextTick(function(){$(t.$refs.modal).modal("show"),setTimeout(function(){$(document).find("body").hasClass("modal-open")===!1&&$(document).find("body").addClass("modal-open")},500)})},exit:function(){this.$parent.exit()},isInformation:function(t){return!!t&&t.type==window.Laravel.questionTypeConstants.INFORMATION},isOneCorrectAnswer:function(t){return!!t&&t.type==window.Laravel.questionTypeConstants.ONE_CORRECT_ANSWER},isMultipleCorrectAnswers:function(t){return!!t&&t.type==window.Laravel.questionTypeConstants.MULTIPLE_CORRECT_ANSWERS},isFreeformAnswer:function(t){return!!t&&t.type==window.Laravel.questionTypeConstants.FREEFORM_ANSWER},isMatchPairs:function(t){return!!t&&t.type==window.Laravel.questionTypeConstants.MATCH_PAIRS},isEmbeddedContent:function(t){return!!t&&t.type==window.Laravel.questionTypeConstants.EMBEDDED_CONTENT},isPhoto:function(t){return!!t&&t.type==window.Laravel.questionTypeConstants.PHOTO},isMissingWord:function(t){return!!t&&t.type==window.Laravel.questionTypeConstants.MISSING_WORD},hasAnswer:function(t){return!(!this.game.answers||!this.game.answers[t.id])},isCorrect:function(t){return!!this.hasAnswer(t)&&this.game.answers[t.id].correct},hasGrade:function(t){return!!this.hasAnswer(t)&&null!==this.game.answers[t.id].grade},hasOptions:function(t){return!!this.hasAnswer(t)&&!!this.game.answers[t.id].answer.options},choseOption:function(t,e){return!!this.hasOptions(t)&&this.game.answers[t.id].answer.options.indexOf(e.id)!==-1},isCorrectOption:function(t){return!!t.correct},hasText:function(t){return!!this.hasAnswer(t)&&!!this.game.answers[t.id].answer.text},getText:function(t){return this.game.answers[t.id].answer.text},getMissingWordText:function(t){for(var e=this.getText(t),n=t.missing_word,r=this.missingWordsToArray(e),i=this.missingWordsToArray(n),s=i.length,a="",o=0;o<s;o++){var u=i[o],c=r[o];"text"===u.type?a+=u.text:"input"===u.type&&(c.text===u.text?(a+='<span class="correct">',a+=c.text,a+="</span>"):(a+='<span class="incorrect">',a+=c.text,a+='<span class="correct">( ',a+=u.text,a+=" )</span>",a+="</span>"))}return a},hasImage:function(t){return!!this.hasAnswer(t)&&!!this.game.answers[t.id].image},getImage:function(t){return this.game.answers[t.id].image},optionIconClass:function(t,e){var n=[],r=this.isCorrectOption(e),i=this.choseOption(t,e);return i&&(r?n.push("correct"):n.push("incorrect")),this.isOneCorrectAnswer(t)?r?n.push("mdi-checkbox-marked-circle-outline"):n.push("mdi-close-circle-outline"):this.isMultipleCorrectAnswers(t)&&(r?n.push("mdi-checkbox-marked-outline"):n.push("mdi-close-box-outline")),n},showResults:function(){this.resultsShown=!this.resultsShown},getVoucherImageUrl:function(){return this.baseUrl+"/img/vouchers/voucher.png"},getVoucherUrl:function(){return this.baseUrl+"/discount_vouchers"},gotVoucher:function(){return!!this.voucher},voucherTitle:function(){return this.gotVoucher()?this.voucher.title:""}}}},function(t,e,n){e=t.exports=n(6)(),e.push([t.i,".missing-word-container .correct,.missing-word-container .incorrect{color:#2ab27b;font-weight:700;padding:0 5px}.missing-word-container .incorrect{color:red}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var s=this[i][0];"number"==typeof s&&(r[s]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function s(t){if(f===clearTimeout)return clearTimeout(t);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){v&&h&&(v=!1,h.length?p=h.concat(p):g=-1,p.length&&o())}function o(){if(!v){var t=i(a);v=!0;for(var e=p.length;e;){for(h=p,p=[];++g<e;)h&&h[g].run();g=-1,e=p.length}h=null,v=!1,s(t)}}function u(t,e){this.fun=t,this.array=e}function c(){}var l,f,d=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(t){f=r}}();var h,p=[],v=!1,g=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];p.push(new u(t,e)),1!==p.length||v||i(o)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e){t.exports=function(t,e,n,r){var i,s=t=t||{},a=typeof t["default"];"object"!==a&&"function"!==a||(i=t,s=t["default"]);var o="function"==typeof s?s.options:s;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),n&&(o._scopeId=n),r){var u=o.computed||(o.computed={});Object.keys(r).forEach(function(t){var e=r[t];u[t]=function(){return e}})}return{esModule:i,exports:s,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"modal",staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog","data-backdrop":"static","data-keyboard":"false"}},[n("div",{staticClass:"modal-dialog modal-lg sz-game-results",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("h4",{staticClass:"modal-title"},[t._v(t._s(t.game.activity.title))])]),t._v(" "),n("div",{staticClass:"modal-body"},[n("div",{staticClass:"text-center sz-quick-results"},[n("div",{staticClass:"sz-results-count"},[t._v("\n                        "+t._s(t.correctQuestionsCount)+"/"+t._s(t.totalQuestionsCount)+"\n                    ")]),t._v(" "),n("div",{staticClass:"sz-complete-text"},[t._v("\n                        "+t._s(t.$t("complete"))+"\n                    ")])]),t._v(" "),t.gotVoucher()?n("div",{staticClass:"sz-game-voucher"},[n("h2",[t._v(t._s(t.$t("vouchers.heading")))]),t._v(" "),n("p",[t._v(t._s(t.voucherTitle()))]),t._v(" "),n("a",{staticClass:"sz-voucher-image",attrs:{href:t.getVoucherUrl(),target:"_blank"}},[n("img",{staticClass:"img-responsive",attrs:{src:t.getVoucherImageUrl(),alt:"voucher"}})]),t._v(" "),n("p",[t._v(t._s(t.$t("vouchers.details")))]),t._v(" "),n("a",{staticClass:"btn btn-default",attrs:{href:t.getVoucherUrl(),target:"_blank"}},[t._v(t._s(t.$t("vouchers.button")))])]):t._e(),t._v(" "),n("h2",{staticClass:"text-center"},[t._v(t._s(t.$t("results-heading")))]),t._v(" "),t._l(t.getResultQuestions,function(e,r){return n("div",[n("h3",[t._v(t._s(r+1)+". "+t._s(e.title))]),t._v(" "),n("p",{staticClass:"sz-display-new-lines"},[t._v(t._s(e.description))]),t._v(" "),t.hasGrade(e)===!1?n("p",{staticClass:"alert alert-info"},[t._v(t._s(t.$t("task-is-pending-an-evaluation")))]):t._e(),t._v(" "),t.isOneCorrectAnswer(e)||t.isMultipleCorrectAnswers(e)?n("div",t._l(e.options,function(r){return n("ul",{staticClass:"media-list sz-options-list"},[n("li",{staticClass:"media sz-option"},[r.image_url?n("div",{staticClass:"media-left"},[n("img",{staticClass:"media-object",attrs:{src:r.image_url,alt:"option-image"}})]):t._e(),t._v(" "),n("div",{staticClass:"media-body"},[n("h4",{staticClass:"media-heading","class":{selected:t.choseOption(e,r)}},[t._v(t._s(r.option))])]),t._v(" "),n("div",{staticClass:"media-right media-middle"},[n("i",{staticClass:"mdi","class":t.optionIconClass(e,r),attrs:{"aria-hidden":"true"}})])])])}),0):t._e(),t._v(" "),t.isEmbeddedContent(e)?n("div",[n("div",{staticClass:"embed-responsive embed-responsive-16by9",domProps:{innerHTML:t._s(e.embedded_content)}})]):t._e(),t._v(" "),t.isFreeformAnswer(e)||t.isEmbeddedContent(e)?n("div",[t.hasText(e)?n("div",{staticClass:"well well-sm sz-display-new-lines"},[t._v(t._s(t.getText(e)))]):t._e()]):t._e(),t._v(" "),t.isMissingWord(e)?n("div",[t.hasText(e)?n("div",{staticClass:"well well-sm sz-display-new-lines missing-word-container",domProps:{innerHTML:t._s(t.getMissingWordText(e))}}):t._e()]):t._e(),t._v(" "),t.isMatchPairs(e)?n("div",{staticClass:"sz-pairs-list"},t._l(e.pairs,function(e){return n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-6"},[n("div",{staticClass:"media sz-pair"},[n("div",{staticClass:"media-left"},[e.image_url?n("img",{staticClass:"media-object",attrs:{src:e.image_url,alt:"pair-image"}}):t._e()]),t._v(" "),n("div",{staticClass:"media-body"},[n("h4",{staticClass:"media-heading"},[t._v(t._s(e.option))])])])]),t._v(" "),n("div",{staticClass:"col-xs-6"},[n("div",{staticClass:"media sz-pair"},[n("div",{staticClass:"media-left"},[e.image_match_url?n("img",{staticClass:"media-object",attrs:{src:e.image_match_url,alt:"pair-image"}}):t._e()]),t._v(" "),n("div",{staticClass:"media-body"},[n("h4",{staticClass:"media-heading"},[t._v(t._s(e.option_match))])])])])])}),0):t._e(),t._v(" "),t.isPhoto(e)?n("div",{staticClass:"sz-photo"},[t.hasImage(e)?n("div",{staticClass:"well well-sm"},[n("img",{staticClass:"img-responsive center-block",attrs:{alt:"uploaded-image",src:t.getImage(e)}})]):t._e()]):t._e(),t._v(" "),n("div",[e.read_more?n("a",{staticClass:"btn btn-default btn-sm",attrs:{href:"",href:e.read_more,target:"_blank"}},[n("i",{staticClass:"mdi mdi-open-in-new",attrs:{"aria-hidden":"true"}}),t._v("\n                            "+t._s(t.$t("read-more-about"))+"\n                        ")]):t._e()])])})],2),t._v(" "),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(e){return t.exit()}}},[n("i",{staticClass:"mdi mdi-exit-to-app",attrs:{"aria-hidden":"true"}})])])])])])},staticRenderFns:[]}},function(t,e,n){var r=n(5);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(11)("5ec00753",r,!0)},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=l[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(s(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(s(n.parts[i]));l[n.id]={id:n.id,refs:1,parts:a}}}}function i(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function s(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(p)return v;r.parentNode.removeChild(r)}if(g){var s=h++;r=d||(d=i()),e=a.bind(null,r,s,!1),n=a.bind(null,r,s,!0)}else r=i(),e=o.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function a(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(e,i);else{var s=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(s,a[e]):t.appendChild(s)}}function o(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(12),l={},f=u&&(document.head||document.getElementsByTagName("head")[0]),d=null,h=0,p=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){p=n;var i=c(t,e);return r(i),function(e){for(var n=[],s=0;s<i.length;s++){var a=i[s],o=l[a.id];o.refs--,n.push(o)}e?(i=c(t,e),r(i)):i=[];for(var s=0;s<n.length;s++){var o=n[s];if(0===o.refs){for(var u=0;u<o.parts.length;u++)o.parts[u]();delete l[o.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var s=e[i],a=s[0],o=s[1],u=s[2],c=s[3],l={id:t+":"+i,css:o,media:u,sourceMap:c};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}},function(t,e,n){var r=n(0);Vue.use(r),Vue.config.lang=window.RADA.config.locale,Vue.locale(window.RADA.config.locale,_.cloneDeep(window.RADA.data.translations)),Vue.component("game-results-modal",n(1));new Vue({el:"#sz-play-app",created:function(){var t=this;t.baseUrl=window.RADA.config.base_url,t.gameUrl=window.RADA.config.game_url,t.isLoggedIn=window.Laravel.isLoggedIn,t.userName=window.Laravel.userName,t.game=window.RADA.data.game},mounted:function(){var t=this;this.$refs.resultsModal.open(),this.$nextTick(function(){t.getGameData()})},data:function(){return{baseUrl:"",gameUrl:"",exitUrl:"/",game:null,isLoggedIn:!1,userName:""}},methods:{exit:function(){window.location.href=this.exitUrl},getGameData:function(){var t=this;this.$http.get("/api/games/"+this.game.id+"/get-game-data").then(function(e){if("undefined"!=typeof e.body){var n=e.body;t.continueGame(n.start_stop)}setTimeout(function(){t.getGameData()},5e3)})},continueGame:function(t){"undefined"!=typeof t.started&&1===t.started&&(window.location.href="/games/"+this.game.id+"/play")}}})}]);