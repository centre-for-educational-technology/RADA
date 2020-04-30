/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/MatchPairs.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/MatchPairs.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var _this = this;

    if (this.$parent.hasQuestionData()) {
      this.options = this.$parent.getQuestionData();
    } else {
      this.options = [{
        id: 0,
        option: '',
        image: '',
        option_match: '',
        image_match: '',
        points: ''
      }, {
        id: 0,
        option: '',
        image: '',
        option_match: '',
        image_match: '',
        points: ''
      }, {
        id: 0,
        option: '',
        image: '',
        option_match: '',
        image_match: '',
        points: ''
      }, {
        id: 0,
        option: '',
        image: '',
        option_match: '',
        image_match: '',
        points: ''
      }];
    }

    if (this.$parent.hasRemovedImagesData()) {
      this.removedImages = this.$parent.getRemovedImagesData();
    }

    if (this.$parent.hasRemovedImageMatchesData()) {
      this.removedMatchImages = this.$parent.getRemovedImageMatchesData();
    }

    this.$nextTick(function () {
      $(_this.$el).find('[data-toggle="tooltip"]').tooltip();
    });
  },
  data: function data() {
    return {
      options: [],
      removedImages: [],
      removedMatchImages: [],
      pts: this.$t('pts')
    };
  },
  methods: {
    getPoints: function getPoints(index) {
      return this.options[index].points;
    },
    addImage: function addImage(index, ref) {
      $(this.$refs[ref][index]).trigger('click');
    },
    removeOption: function removeOption(index) {
      if (this.options.length < 2) {
        return;
      }

      this.options.splice(index, 1);
    },
    addOption: function addOption() {
      var _this2 = this;

      this.options.push({
        id: 0,
        option: '',
        image: '',
        option_match: '',
        image_match: ''
      });
      this.$nextTick(function () {
        $(_this2.$el).find('[data-toggle="tooltip"]').tooltip();
      });
    },
    imageSelected: function imageSelected(event, index, ref) {
      var _this3 = this;

      if (!event.target.files.length > 0) return;

      if (ref === 'add-match-image') {
        this.options[index].imageMatchPreview = false;
        this.options[index].imageMatchSelected = true;
        this.options[index].image_match = event.target.files[0].name;
      } else {
        this.options[index].imagePreview = false;
        this.options[index].imageSelected = true;
        this.options[index].image = event.target.files[0].name;
      }

      var element = $(this.$refs[ref][index]);
      this.$nextTick(function () {
        var key = ref === 'add-match-image' ? 'image_match' : 'image';

        if (element.data && element.data('original-title')) {
          element.attr('data-original-title', element.attr('title')).removeAttr('title').tooltip('show');
        } else {
          element.attr('data-original-title', _this3.options[index][key]);
          element.attr('title', _this3.options[index][key]);
        }
      });
    },
    canRemoveSelectedImage: function canRemoveSelectedImage(index, isMatch) {
      var key = isMatch ? 'imageMatchSelected' : 'imageSelected';
      return !!this.options[index][key];
    },
    canRemoveImage: function canRemoveImage(index, isMatch) {
      var key = isMatch ? 'image_match_url' : 'image_url';
      return !!this.options[index][key] && !this.canRemoveSelectedImage(index, isMatch);
    },
    hasImageRemoved: function hasImageRemoved(index, isMatch) {
      var key = isMatch ? 'removedMatchImages' : 'removedImages';
      return this[key].indexOf(this.options[index].id) !== -1;
    },
    removeSelectedImage: function removeSelectedImage(index, isMatch) {
      if (this.canRemoveSelectedImage(index, isMatch)) {
        var option = this.options[index];
        var imageKey = isMatch ? 'image_match' : 'image';
        var imageUrlKey = isMatch ? 'image_match_url' : 'image_url';
        var imagePreviewKey = isMatch ? 'imageMatchPreview' : 'imagePreview';
        var imageSelectedkey = isMatch ? 'imageMatchSelected' : 'imageSelected';
        var imageInputRef = isMatch ? 'option-match-image' : 'option-image';
        var imageSelectRef = isMatch ? 'add-match-image' : 'add-image';

        if (option[imageUrlKey]) {
          option[imageKey] = option[imageUrlKey].split('/').pop();
          option[imagePreviewKey] = true;
        } else {
          option[imageKey] = '';
        }

        option[imageSelectedkey] = false;
        $(this.$refs[imageInputRef][index]).val('');
        var element = $(this.$refs[imageSelectRef][index]);
        this.$nextTick(function () {
          if (option[imageKey]) {
            element.attr('data-original-title', option[imageKey]);
          } else {
            element.attr('title', '');
            element.attr('data-original-title', '');
          }
        });
      }
    },
    removeImage: function removeImage(index, isMatch) {
      if (this.canRemoveImage(index, isMatch)) {
        var key = isMatch ? 'removed-option-match-images' : 'removed-option-images';
        $(this.$refs[key][index]).trigger('click');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/MultipleCorrectAnswers.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/MultipleCorrectAnswers.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_Image_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../mixins/Image.js */ "./resources/assets/js/mixins/Image.js");
/* harmony import */ var _mixins_OptionImage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../mixins/OptionImage.js */ "./resources/assets/js/mixins/OptionImage.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_Image_js__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_OptionImage_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
  mounted: function mounted() {
    var _this = this;

    if (this.$parent.hasQuestionData()) {
      this.options = this.$parent.getQuestionData();
      this.enforceCorrectOption();
    } else {
      this.options = [{
        id: 0,
        option: '',
        correct: true,
        image: '',
        points: ''
      }, {
        id: 0,
        option: '',
        correct: false,
        image: '',
        points: ''
      }, {
        id: 0,
        option: '',
        correct: false,
        image: '',
        points: ''
      }, {
        id: 0,
        option: '',
        correct: false,
        image: '',
        points: ''
      }];
    }

    if (this.$parent.hasRemovedImagesData()) {
      this.removedImages = this.$parent.getRemovedImagesData();
    }

    this.$nextTick(function () {
      $(_this.$el).find('[data-toggle="tooltip"]').tooltip();
    });
  },
  data: function data() {
    return {
      options: [],
      removedImages: [],
      pts: this.$t('pts')
    };
  },
  methods: {
    getPoints: function getPoints(index) {
      return this.options[index].points;
    },
    addImage: function addImage(index) {
      $(this.$refs['option-image'][index]).trigger('click');
    },
    canRemoveOptions: function canRemoveOptions() {
      return this.options.length > 2;
    },
    removeOption: function removeOption(index) {
      if (!this.canRemoveOptions()) {
        return;
      }

      this.options.splice(index, 1);
      this.enforceCorrectOption();
    },
    addOption: function addOption() {
      var _this2 = this;

      this.options.push({
        id: 0,
        option: '',
        correct: false,
        image: ''
      });
      this.$nextTick(function () {
        $(_this2.$el).find('[data-toggle="tooltip"]').tooltip();
      });
    },
    hasCorrectOptions: function hasCorrectOptions() {
      return _.some(this.options, ['correct', true]);
    },
    enforceCorrectOption: function enforceCorrectOption() {
      if (!this.hasCorrectOptions()) {
        this.options[0].correct = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/OneCorrectAnswer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/OneCorrectAnswer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_Image_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../mixins/Image.js */ "./resources/assets/js/mixins/Image.js");
/* harmony import */ var _mixins_OptionImage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../mixins/OptionImage.js */ "./resources/assets/js/mixins/OptionImage.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_Image_js__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_OptionImage_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
  mounted: function mounted() {
    var _this = this;

    if (this.$parent.hasQuestionData()) {
      this.options = this.$parent.getQuestionData();

      var correctIndex = _.findIndex(this.options, ['correct', true]);

      this.checkedOption = correctIndex !== -1 ? correctIndex : 0;
    } else {
      this.options = [{
        id: 0,
        option: '',
        image: '',
        points: ''
      }, {
        id: 0,
        option: '',
        image: '',
        points: ''
      }, {
        id: 0,
        option: '',
        image: '',
        points: ''
      }, {
        id: 0,
        option: '',
        image: '',
        points: ''
      }];
    }

    if (this.$parent.hasRemovedImagesData()) {
      this.removedImages = this.$parent.getRemovedImagesData();
    }

    this.$nextTick(function () {
      $(_this.$el).find('[data-toggle="tooltip"]').tooltip();
    });
  },
  data: function data() {
    return {
      options: [],
      checkedOption: 0,
      removedImages: [],
      pts: this.$t('pts')
    };
  },
  methods: {
    getPoints: function getPoints(index) {
      return this.options[index].points;
    },
    addImage: function addImage(index) {
      $(this.$refs['option-image'][index]).trigger('click');
    },
    canRemoveOptions: function canRemoveOptions() {
      return this.options.length > 2;
    },
    removeOption: function removeOption(index) {
      if (!this.canRemoveOptions()) {
        return;
      }

      this.options.splice(index, 1);

      if (this.checkedOption === index) {
        this.checkedOption = 0;
      } else if (this.checkedOption > index) {
        this.checkedOption -= 1;
      }
    },
    addOption: function addOption() {
      var _this2 = this;

      this.options.push({
        id: 0,
        option: '',
        image: ''
      });
      this.$nextTick(function () {
        $(_this2.$el).find('[data-toggle="tooltip"]').tooltip();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/MatchPairs.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/MatchPairs.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.sz-option-remove, .points-input {\n    width: 50%;\n}\n.points-input {\n    float: left;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/MultipleCorrectAnswers.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/MultipleCorrectAnswers.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.sz-option-remove, .points-input {\n    width: 50%;\n}\n.points-input {\n    float: left;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/OneCorrectAnswer.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/OneCorrectAnswer.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.sz-option-remove, .points-input {\n    width: 50%;\n}\n.points-input {\n    float: left;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/MatchPairs.vue?vue&type=template&id=3ba0b4ea&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/MatchPairs.vue?vue&type=template&id=3ba0b4ea& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "sz-question", attrs: { id: "question-type-match-pairs" } },
    [
      _vm._l(_vm.options, function(option, index) {
        return _c("div", { staticClass: "row sz-option-row" }, [
          _c("div", { staticClass: "col-xs-4" }, [
            _c("div", { staticClass: "input-group" }, [
              _vm.$parent.hasPreview(option)
                ? _c("span", { staticClass: "input-group-addon" }, [
                    _c(
                      "a",
                      {
                        attrs: {
                          target: "_blank",
                          href: _vm.$parent.getOptionImageUrl(option.image)
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "sz-option-image-small",
                          attrs: {
                            alt: "option-image",
                            src: _vm.$parent.getOptionImageUrl(option.image)
                          }
                        })
                      ]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: option.id,
                    expression: "option.id"
                  }
                ],
                attrs: { type: "hidden", name: "ids[]" },
                domProps: { value: option.id },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(option, "id", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: option.option,
                    expression: "option.option"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  name: "options[]",
                  placeholder: _vm.$t("option-text")
                },
                domProps: { value: option.option },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(option, "option", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xs-4" }, [
            _c("div", { staticClass: "input-group" }, [
              _vm.$parent.hasPreview(option, "image_match", "imageMatchPreview")
                ? _c("span", { staticClass: "input-group-addon" }, [
                    _c(
                      "a",
                      {
                        attrs: {
                          target: "_blank",
                          href: _vm.$parent.getOptionImageUrl(
                            option.image_match
                          )
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "sz-option-image-small",
                          attrs: {
                            alt: "option-match-image",
                            src: _vm.$parent.getOptionImageUrl(
                              option.image_match
                            )
                          }
                        })
                      ]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: option.option_match,
                    expression: "option.option_match"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  name: "matches[]",
                  placeholder: _vm.$t("option-text")
                },
                domProps: { value: option.option_match },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(option, "option_match", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xs-4 sz-btn-controls" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: option.points,
                  expression: "option.points"
                }
              ],
              staticClass: "form-control points-input",
              attrs: {
                type: "number",
                name: "points[" + index + "]",
                required: "required",
                placeholder: _vm.pts,
                min: "1"
              },
              domProps: { value: option.points },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(option, "points", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn sz-option-remove",
                class: { disabled: _vm.options.length < 2 },
                attrs: { href: "#", tabindex: "-1" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.removeOption(index)
                  }
                }
              },
              [
                _c("i", {
                  staticClass: "mdi mdi-close-circle-outline",
                  attrs: { "aria-hidden": "true" }
                })
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xs-4" }, [
            _c("input", {
              ref: "option-image",
              refInFor: true,
              staticStyle: { display: "none" },
              attrs: {
                type: "file",
                accept: "image/jpeg, image/png",
                capture: "camera",
                name: "option-image-" + index
              },
              on: {
                change: function($event) {
                  return _vm.imageSelected($event, index, "add-image")
                }
              }
            }),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.removedImages,
                  expression: "removedImages"
                }
              ],
              ref: "removed-option-images",
              refInFor: true,
              staticStyle: { display: "none" },
              attrs: { type: "checkbox", name: "removed-option-images[]" },
              domProps: {
                value: option.id,
                checked: Array.isArray(_vm.removedImages)
                  ? _vm._i(_vm.removedImages, option.id) > -1
                  : _vm.removedImages
              },
              on: {
                change: function($event) {
                  var $$a = _vm.removedImages,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = option.id,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.removedImages = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.removedImages = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.removedImages = $$c
                  }
                }
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "btn-group btn-group-sm",
                attrs: { role: "group" }
              },
              [
                _c(
                  "a",
                  {
                    ref: "add-image",
                    refInFor: true,
                    staticClass: "btn sz-image-add",
                    class: { "sz-option-has-image": option.image },
                    attrs: {
                      href: "#",
                      tabindex: "-1",
                      title: option.image,
                      "data-toggle": "tooltip",
                      "data-placement": "top"
                    },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.addImage(index, "option-image")
                      }
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "mdi mdi-camera",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                ),
                _vm._v(" "),
                option.id && option.image_url
                  ? _c(
                      "a",
                      {
                        staticClass: "btn btn-danger",
                        class: { disabled: !_vm.canRemoveImage(index, false) },
                        attrs: {
                          href: "#",
                          tabindex: "-1",
                          "data-toggle": "tooltip",
                          "data-placement": "top",
                          title: _vm.$t("remove-existing-image")
                        },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.removeImage(index, false)
                          }
                        }
                      },
                      [
                        !_vm.hasImageRemoved(index, false)
                          ? _c("i", {
                              staticClass: "mdi mdi-checkbox-blank-outline",
                              attrs: { "aria-hidden": "true" }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.hasImageRemoved(index, false)
                          ? _c("i", {
                              staticClass: "mdi mdi-checkbox-marked-outline",
                              attrs: { "aria-hidden": "true" }
                            })
                          : _vm._e()
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-warning",
                    class: {
                      disabled: !_vm.canRemoveSelectedImage(index, false)
                    },
                    attrs: {
                      href: "#",
                      tabindex: "-1",
                      "data-toggle": "tooltip",
                      "data-placement": "top",
                      title: _vm.$t("remove-selected-image")
                    },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.removeSelectedImage(index, false)
                      }
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "mdi mdi-delete",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xs-4" }, [
            _c("input", {
              ref: "option-match-image",
              refInFor: true,
              staticStyle: { display: "none" },
              attrs: {
                type: "file",
                accept: "image/jpeg, image/png",
                capture: "camera",
                name: "option-match-image-" + index
              },
              on: {
                change: function($event) {
                  return _vm.imageSelected($event, index, "add-match-image")
                }
              }
            }),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.removedMatchImages,
                  expression: "removedMatchImages"
                }
              ],
              ref: "removed-option-match-images",
              refInFor: true,
              staticStyle: { display: "none" },
              attrs: {
                type: "checkbox",
                name: "removed-option-match-images[]"
              },
              domProps: {
                value: option.id,
                checked: Array.isArray(_vm.removedMatchImages)
                  ? _vm._i(_vm.removedMatchImages, option.id) > -1
                  : _vm.removedMatchImages
              },
              on: {
                change: function($event) {
                  var $$a = _vm.removedMatchImages,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = option.id,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.removedMatchImages = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.removedMatchImages = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.removedMatchImages = $$c
                  }
                }
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "btn-group btn-group-sm",
                attrs: { role: "group" }
              },
              [
                _c(
                  "a",
                  {
                    ref: "add-match-image",
                    refInFor: true,
                    staticClass: "btn sz-image-add",
                    class: { "sz-option-has-image": option.image_match },
                    attrs: {
                      href: "#",
                      tabindex: "-1",
                      title: option.image_match,
                      "data-toggle": "tooltip",
                      "data-placement": "top"
                    },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.addImage(index, "option-match-image")
                      }
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "mdi mdi-camera",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                ),
                _vm._v(" "),
                option.id && option.image_match_url
                  ? _c(
                      "a",
                      {
                        staticClass: "btn btn-danger",
                        class: { disabled: !_vm.canRemoveImage(index, true) },
                        attrs: {
                          href: "#",
                          tabindex: "-1",
                          "data-toggle": "tooltip",
                          "data-placement": "top",
                          title: _vm.$t("remove-existing-image")
                        },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.removeImage(index, true)
                          }
                        }
                      },
                      [
                        !_vm.hasImageRemoved(index, true)
                          ? _c("i", {
                              staticClass: "mdi mdi-checkbox-blank-outline",
                              attrs: { "aria-hidden": "true" }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.hasImageRemoved(index, true)
                          ? _c("i", {
                              staticClass: "mdi mdi-checkbox-marked-outline",
                              attrs: { "aria-hidden": "true" }
                            })
                          : _vm._e()
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-warning",
                    class: {
                      disabled: !_vm.canRemoveSelectedImage(index, true)
                    },
                    attrs: {
                      href: "#",
                      tabindex: "-1",
                      "data-toggle": "tooltip",
                      "data-placement": "top",
                      title: _vm.$t("remove-selected-image")
                    },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.removeSelectedImage(index, true)
                      }
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "mdi mdi-delete",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                )
              ]
            )
          ])
        ])
      }),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xs-12" }, [
          _c(
            "a",
            {
              staticClass: "btn",
              attrs: { href: "#", tabindex: "-1" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.addOption($event)
                }
              }
            },
            [
              _c("i", {
                staticClass: "mdi mdi-plus-circle-outline",
                attrs: { "aria-hidden": "true", title: _vm.$t("add-option") }
              })
            ]
          )
        ])
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/MultipleCorrectAnswers.vue?vue&type=template&id=3d48e452&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/MultipleCorrectAnswers.vue?vue&type=template&id=3d48e452& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "sz-question",
      attrs: { id: "question-type-multiple-correct-answers" }
    },
    [
      _vm._l(_vm.options, function(option, index) {
        return _c("div", { staticClass: "row sz-option-row" }, [
          _c("div", { staticClass: "col-xs-8" }, [
            _c("div", { staticClass: "input-group" }, [
              _vm.$parent.hasPreview(option)
                ? _c("span", { staticClass: "input-group-addon" }, [
                    _c(
                      "a",
                      {
                        attrs: {
                          target: "_blank",
                          href: _vm.$parent.getOptionImageUrl(option.image)
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "sz-option-image-small",
                          class: { removed: _vm.hasImageRemoved(index) },
                          attrs: {
                            alt: "option-image",
                            src: _vm.$parent.getOptionImageUrl(option.image)
                          }
                        })
                      ]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: option.id,
                    expression: "option.id"
                  }
                ],
                attrs: { type: "hidden", name: "ids[]" },
                domProps: { value: option.id },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(option, "id", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: option.option,
                    expression: "option.option"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  name: "options[]",
                  placeholder: _vm.$t("option-text")
                },
                domProps: { value: option.option },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(option, "option", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "input-group-addon" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: option.correct,
                      expression: "option.correct"
                    }
                  ],
                  attrs: {
                    type: "checkbox",
                    name: "correct[]",
                    "aria-label": "Correct",
                    tabindex: "-1",
                    "data-toggle": "tooltip",
                    "data-placement": "left",
                    title: _vm.$t("mark-option-as-correct")
                  },
                  domProps: {
                    value: index,
                    checked: Array.isArray(option.correct)
                      ? _vm._i(option.correct, index) > -1
                      : option.correct
                  },
                  on: {
                    change: [
                      function($event) {
                        var $$a = option.correct,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = index,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(option, "correct", $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                option,
                                "correct",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(option, "correct", $$c)
                        }
                      },
                      function($event) {
                        return _vm.enforceCorrectOption()
                      }
                    ]
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xs-4 sz-btn-controls" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: option.points,
                  expression: "option.points"
                }
              ],
              staticClass: "form-control points-input",
              attrs: {
                type: "number",
                name: "points[" + index + "]",
                required: "required",
                placeholder: _vm.pts,
                min: "1",
                disabled: option.correct === false
              },
              domProps: { value: option.points },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(option, "points", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn sz-option-remove",
                class: { disabled: !_vm.canRemoveOptions() },
                attrs: { href: "#", tabindex: "-1" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.removeOption(index)
                  }
                }
              },
              [
                _c("i", {
                  staticClass: "mdi mdi-close-circle-outline",
                  attrs: { "aria-hidden": "true" }
                })
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xs-12" }, [
            _c("input", {
              ref: "option-image",
              refInFor: true,
              staticStyle: { display: "none" },
              attrs: {
                type: "file",
                accept: "image/jpeg, image/png",
                capture: "camera",
                name: "option-image-" + index
              },
              on: {
                change: function($event) {
                  return _vm.imageSelected($event, index)
                }
              }
            }),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.removedImages,
                  expression: "removedImages"
                }
              ],
              ref: "removed-option-images",
              refInFor: true,
              staticStyle: { display: "none" },
              attrs: { type: "checkbox", name: "removed-option-images[]" },
              domProps: {
                value: option.id,
                checked: Array.isArray(_vm.removedImages)
                  ? _vm._i(_vm.removedImages, option.id) > -1
                  : _vm.removedImages
              },
              on: {
                change: function($event) {
                  var $$a = _vm.removedImages,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = option.id,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.removedImages = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.removedImages = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.removedImages = $$c
                  }
                }
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "btn-group btn-group-sm",
                attrs: { role: "group" }
              },
              [
                _c(
                  "a",
                  {
                    ref: "add-image",
                    refInFor: true,
                    staticClass: "btn sz-image-add",
                    class: { "sz-option-has-image": option.image },
                    attrs: {
                      href: "#",
                      tabindex: "-1",
                      title: option.image,
                      "data-toggle": "tooltip",
                      "data-placement": "top"
                    },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.addImage(index)
                      }
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "mdi mdi-camera",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                ),
                _vm._v(" "),
                option.id && option.image_url
                  ? _c(
                      "a",
                      {
                        staticClass: "btn btn-danger btn-xs",
                        class: { disabled: !_vm.canRemoveImage(index) },
                        attrs: {
                          href: "#",
                          tabindex: "-1",
                          "data-toggle": "tooltip",
                          "data-placement": "top",
                          title: _vm.$t("remove-existing-image")
                        },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.removeImage(index)
                          }
                        }
                      },
                      [
                        !_vm.hasImageRemoved(index)
                          ? _c("i", {
                              staticClass: "mdi mdi-checkbox-blank-outline",
                              attrs: { "aria-hidden": "true" }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.hasImageRemoved(index)
                          ? _c("i", {
                              staticClass: "mdi mdi-checkbox-marked-outline",
                              attrs: { "aria-hidden": "true" }
                            })
                          : _vm._e()
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-warning btn-xs",
                    class: { disabled: !_vm.canRemoveSelectedImage(index) },
                    attrs: {
                      href: "#",
                      tabindex: "-1",
                      "data-toggle": "tooltip",
                      "data-placement": "top",
                      title: _vm.$t("remove-selected-image")
                    },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.removeSelectedImage(index)
                      }
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "mdi mdi-delete",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                )
              ]
            )
          ])
        ])
      }),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xs-12" }, [
          _c(
            "a",
            {
              staticClass: "btn",
              attrs: { href: "#", tabindex: "-1" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.addOption($event)
                }
              }
            },
            [
              _c("i", {
                staticClass: "mdi mdi-plus-circle-outline",
                attrs: { "aria-hidden": "true", title: _vm.$t("add-option") }
              })
            ]
          )
        ])
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/OneCorrectAnswer.vue?vue&type=template&id=b9f6e58e&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/OneCorrectAnswer.vue?vue&type=template&id=b9f6e58e& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "sz-question",
      attrs: { id: "question-type-one-correct-answer" }
    },
    [
      _vm._l(_vm.options, function(option, index) {
        return _c("div", { staticClass: "row sz-option-row" }, [
          _c("div", { staticClass: "col-xs-8" }, [
            _c("div", { staticClass: "input-group" }, [
              _vm.$parent.hasPreview(option)
                ? _c("span", { staticClass: "input-group-addon" }, [
                    _c(
                      "a",
                      {
                        attrs: {
                          target: "_blank",
                          href: _vm.$parent.getOptionImageUrl(option.image)
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "sz-option-image-small",
                          class: { removed: _vm.hasImageRemoved(index) },
                          attrs: {
                            alt: "option-image",
                            src: _vm.$parent.getOptionImageUrl(option.image)
                          }
                        })
                      ]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: option.id,
                    expression: "option.id"
                  }
                ],
                attrs: { type: "hidden", name: "ids[]" },
                domProps: { value: option.id },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(option, "id", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: option.option,
                    expression: "option.option"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  name: "options[]",
                  placeholder: _vm.$t("option-text")
                },
                domProps: { value: option.option },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(option, "option", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "input-group-addon" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.checkedOption,
                      expression: "checkedOption"
                    }
                  ],
                  attrs: {
                    type: "radio",
                    name: "correct",
                    "aria-label": "Correct",
                    tabindex: "-1",
                    "data-toggle": "tooltip",
                    "data-placement": "left",
                    title: _vm.$t("mark-option-as-correct")
                  },
                  domProps: {
                    value: index,
                    checked: _vm._q(_vm.checkedOption, index)
                  },
                  on: {
                    change: function($event) {
                      _vm.checkedOption = index
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xs-4 sz-btn-controls" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: option.points,
                  expression: "option.points"
                }
              ],
              staticClass: "form-control points-input",
              attrs: {
                type: "number",
                name: "points[" + index + "]",
                required: "required",
                placeholder: _vm.pts,
                min: "1",
                disabled: _vm.checkedOption !== index
              },
              domProps: { value: option.points },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(option, "points", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn sz-option-remove",
                class: { disabled: !_vm.canRemoveOptions() },
                attrs: { href: "#", tabindex: "-1" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.removeOption(index)
                  }
                }
              },
              [
                _c("i", {
                  staticClass: "mdi mdi-close-circle-outline",
                  attrs: { "aria-hidden": "true" }
                })
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xs-12" }, [
            _c("input", {
              ref: "option-image",
              refInFor: true,
              staticStyle: { display: "none" },
              attrs: {
                type: "file",
                accept: "image/jpeg, image/png",
                capture: "camera",
                name: "option-image-" + index
              },
              on: {
                change: function($event) {
                  return _vm.imageSelected($event, index)
                }
              }
            }),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.removedImages,
                  expression: "removedImages"
                }
              ],
              ref: "removed-option-images",
              refInFor: true,
              staticStyle: { display: "none" },
              attrs: { type: "checkbox", name: "removed-option-images[]" },
              domProps: {
                value: option.id,
                checked: Array.isArray(_vm.removedImages)
                  ? _vm._i(_vm.removedImages, option.id) > -1
                  : _vm.removedImages
              },
              on: {
                change: function($event) {
                  var $$a = _vm.removedImages,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = option.id,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.removedImages = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.removedImages = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.removedImages = $$c
                  }
                }
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "btn-group btn-group-sm",
                attrs: { role: "group" }
              },
              [
                _c(
                  "a",
                  {
                    ref: "add-image",
                    refInFor: true,
                    staticClass: "btn sz-image-add",
                    class: { "sz-option-has-image": option.image },
                    attrs: {
                      href: "#",
                      tabindex: "-1",
                      title: option.image,
                      "data-toggle": "tooltip",
                      "data-placement": "top"
                    },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.addImage(index)
                      }
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "mdi mdi-camera",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                ),
                _vm._v(" "),
                option.id && option.image_url
                  ? _c(
                      "a",
                      {
                        staticClass: "btn btn-danger",
                        class: { disabled: !_vm.canRemoveImage(index) },
                        attrs: {
                          href: "#",
                          tabindex: "-1",
                          "data-toggle": "tooltip",
                          "data-placement": "top",
                          title: _vm.$t("remove-existing-image")
                        },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.removeImage(index)
                          }
                        }
                      },
                      [
                        !_vm.hasImageRemoved(index)
                          ? _c("i", {
                              staticClass: "mdi mdi-checkbox-blank-outline",
                              attrs: { "aria-hidden": "true" }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.hasImageRemoved(index)
                          ? _c("i", {
                              staticClass: "mdi mdi-checkbox-marked-outline",
                              attrs: { "aria-hidden": "true" }
                            })
                          : _vm._e()
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-warning",
                    class: { disabled: !_vm.canRemoveSelectedImage(index) },
                    attrs: {
                      href: "#",
                      tabindex: "-1",
                      "data-toggle": "tooltip",
                      "data-placement": "top",
                      title: _vm.$t("remove-selected-image")
                    },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.removeSelectedImage(index)
                      }
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "mdi mdi-delete",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                )
              ]
            )
          ])
        ])
      }),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xs-12" }, [
          _c(
            "a",
            {
              staticClass: "btn",
              attrs: { href: "#", tabindex: "-1" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.addOption($event)
                }
              }
            },
            [
              _c("i", {
                staticClass: "mdi mdi-plus-circle-outline",
                attrs: { "aria-hidden": "true", title: _vm.$t("add-option") }
              })
            ]
          )
        ])
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/MatchPairs.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/MatchPairs.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./MatchPairs.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/MatchPairs.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/MultipleCorrectAnswers.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/MultipleCorrectAnswers.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./MultipleCorrectAnswers.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/MultipleCorrectAnswers.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/OneCorrectAnswer.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/OneCorrectAnswer.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./OneCorrectAnswer.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/OneCorrectAnswer.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/vue-i18n/dist/vue-i18n.common.js":
/*!*******************************************************!*\
  !*** ./node_modules/vue-i18n/dist/vue-i18n.common.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * vue-i18n v5.0.3 
 * (c) 2017 kazuya kawaguchi
 * Released under the MIT License.
 */


/**
 * warn
 *
 * @param {String} msg
 * @param {Error} [err]
 *
 */

function warn (msg, err) {
  if (window.console) {
    console.warn('[vue-i18n] ' + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}

var Asset = function (Vue, langVM) {
  /**
   * Register or retrieve a global locale definition.
   *
   * @param {String} id
   * @param {Object | Function | Promise} definition
   * @param {Function} cb
   */

  Vue.locale = function (id, definition, cb) {
    if (definition === undefined) { // getter
      return langVM.locales[id]
    } else { // setter
      if (definition === null) {
        langVM.locales[id] = undefined;
        delete langVM.locales[id];
      } else {
        setLocale(id, definition, function (locale) {
          if (locale) {
            langVM.$set(langVM.locales, id, locale);
          } else {
            warn('failed set `' + id + '` locale');
          }
          cb && cb();
        });
      }
    }
  };
};


function setLocale (id, definition, cb) {
  if (typeof definition === 'object') { // sync
    cb(definition);
  } else {
    var future = definition.call(this);
    if (typeof future === 'function') {
      if (future.resolved) {
        // cached
        cb(future.resolved);
      } else if (future.requested) {
        // pool callbacks
        future.pendingCallbacks.push(cb);
      } else {
        future.requested = true;
        var cbs = future.pendingCallbacks = [cb];
        future(function (locale) { // resolve
          future.resolved = locale;
          for (var i = 0, l = cbs.length; i < l; i++) {
            cbs[i](locale);
          }
        }, function () { // reject
          cb();
        });
      }
    } else if (isPromise(future)) { // promise
      future.then(function (locale) { // resolve
        cb(locale);
      }, function () { // reject
        cb();
      }).catch(function (err) {
        console.error(err);
        cb();
      });
    }
  }
}

/**
 * Forgiving check for a promise
 *
 * @param {Object} p
 * @return {Boolean}
 */

function isPromise (p) {
  return p && typeof p.then === 'function'
}

var Override = function (Vue, langVM) {
  // override _init
  var init = Vue.prototype._init;
  Vue.prototype._init = function (options) {
    var this$1 = this;

    init.call(this, options);

    if (!this.$parent) { // root
      this._$lang = langVM;
      this._langUnwatch = this._$lang.$watch('$data', function (val, old) {
        this$1.$forceUpdate();
      }, { deep: true });
    }
  };

  // override _destroy
  var destroy = Vue.prototype._destroy;
  Vue.prototype._destroy = function () {
    if (!this.$parent && this._langUnwatch) {
      this._langUnwatch();
      this._langUnwatch = null;
      this._$lang = null;
    }

    destroy.apply(this, arguments);
  };
};

/**
 * Observer
 */

var Watcher;
/**
 * getWatcher
 *
 * @param {Vue} vm
 * @return {Watcher}
 */

function getWatcher (vm) {
  if (!Watcher) {
    var unwatch = vm.$watch('__watcher__', function (a) {});
    Watcher = vm._watchers[0].constructor;
    unwatch();
  }
  return Watcher
}

var Dep;
/**
 * getDep
 *
 * @param {Vue} vm
 * @return {Dep}
 */

function getDep (vm) {
  if (!Dep && vm && vm._data && vm._data.__ob__ && vm._data.__ob__.dep) {
    Dep = vm._data.__ob__.dep.constructor;
  }
  return Dep
}

/**
 * utilites
 */

/**
 * isNil
 *
 * @param {*} val
 * @return Boolean
 */
function isNil (val) {
  return val === null || val === undefined
}

/**
 * Simple bind, faster than native
 *
 * @param {Function} fn
 * @param {Object} ctx
 * @return Function
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 *
 * @param {Object} obj
 * @return Boolean
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {Object} obj
 * @return Boolean
 */
var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString.call(obj) === OBJECT_STRING
}

/**
 * Check whether the object has the property.
 *
 * @param {Object} obj
 * @param {String} key
 * @return Boolean
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

var fallback; // fallback lang
var missingHandler = null; // missing handler
var i18nFormatter = null; // custom formatter

var Config = function (Vue, langVM, lang) {
  var Watcher = getWatcher(langVM);
  var Dep = getDep(langVM);

  function makeComputedGetter (getter, owner) {
    var watcher = new Watcher(owner, getter, null, {
      lazy: true
    });

    return function computedGetter () {
      watcher.dirty && watcher.evaluate();
      Dep && Dep.target && watcher.depend();
      return watcher.value
    }
  }

  // define Vue.config.lang configration
  Object.defineProperty(Vue.config, 'lang', {
    enumerable: true,
    configurable: true,
    get: makeComputedGetter(function () { return langVM.lang }, langVM),
    set: bind(function (val) { langVM.lang = val; }, langVM)
  });

  // define Vue.config.fallbackLang configration
  fallback = lang;
  Object.defineProperty(Vue.config, 'fallbackLang', {
    enumerable: true,
    configurable: true,
    get: function () { return fallback },
    set: function (val) { fallback = val; }
  });

  // define Vue.config.missingHandler configration
  Object.defineProperty(Vue.config, 'missingHandler', {
    enumerable: true,
    configurable: true,
    get: function () { return missingHandler },
    set: function (val) { missingHandler = val; }
  });

  // define Vue.config.i18Formatter configration
  Object.defineProperty(Vue.config, 'i18nFormatter', {
    enumerable: true,
    configurable: true,
    get: function () { return i18nFormatter },
    set: function (val) { i18nFormatter = val; }
  });
};

/**
 *  String format template
 *  - Inspired:
 *    https://github.com/Matt-Esch/string-template/index.js
 */

var RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;


var Format = function (Vue) {
  /**
   * template
   *
   * @param {String} string
   * @param {Array} ...args
   * @return {String}
   */

  function template (string) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    if (args.length === 1 && typeof args[0] === 'object') {
      args = args[0];
    } else {
      args = {};
    }

    if (!args || !args.hasOwnProperty) {
      args = {};
    }

    return string.replace(RE_NARGS, function (match, prefix, i, index) {
      var result;

      if (string[index - 1] === '{' &&
        string[index + match.length] === '}') {
        return i
      } else {
        result = hasOwn(args, i) ? args[i] : match;
        if (isNil(result)) {
          return ''
        }

        return result
      }
    })
  }

  return template
};

/**
 *  Path paerser
 *  - Inspired:
 *    Vue.js Path parser
 */

// cache
var pathCache = Object.create(null);

// actions
var APPEND = 0;
var PUSH = 1;
var INC_SUB_PATH_DEPTH = 2;
var PUSH_SUB_PATH = 3;

// states
var BEFORE_PATH = 0;
var IN_PATH = 1;
var BEFORE_IDENT = 2;
var IN_IDENT = 3;
var IN_SUB_PATH = 4;
var IN_SINGLE_QUOTE = 5;
var IN_DOUBLE_QUOTE = 6;
var AFTER_PATH = 7;
var ERROR = 8;

var pathStateMachine = [];

pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND]
};

pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [IN_SUB_PATH, PUSH],
  'eof': [AFTER_PATH, PUSH]
};

pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  ']': [IN_PATH, PUSH_SUB_PATH],
  'eof': ERROR,
  'else': [IN_SUB_PATH, APPEND]
};

pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND]
};

pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND]
};

/**
 * Check if an expression is a literal value.
 *
 * @param {String} exp
 * @return {Boolean}
 */

var literalValueRE = /^\s?(true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral (exp) {
  return literalValueRE.test(exp)
}

/**
 * Strip quotes from a string
 *
 * @param {String} str
 * @return {String | false}
 */

function stripQuotes (str) {
  var a = str.charCodeAt(0);
  var b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27)
    ? str.slice(1, -1)
    : str
}

/**
 * Determine the type of a character in a keypath.
 *
 * @param {Char} ch
 * @return {String} type
 */

function getPathCharType (ch) {
  if (ch === undefined) { return 'eof' }

  var code = ch.charCodeAt(0);

  switch (code) {
    case 0x5B: // [
    case 0x5D: // ]
    case 0x2E: // .
    case 0x22: // "
    case 0x27: // '
    case 0x30: // 0
      return ch

    case 0x5F: // _
    case 0x24: // $
    case 0x2D: // -
      return 'ident'

    case 0x20: // Space
    case 0x09: // Tab
    case 0x0A: // Newline
    case 0x0D: // Return
    case 0xA0:  // No-break space
    case 0xFEFF:  // Byte Order Mark
    case 0x2028:  // Line Separator
    case 0x2029:  // Paragraph Separator
      return 'ws'
  }

  // a-z, A-Z
  if ((code >= 0x61 && code <= 0x7A) || (code >= 0x41 && code <= 0x5A)) {
    return 'ident'
  }

  // 1-9
  if (code >= 0x31 && code <= 0x39) { return 'number' }

  return 'else'
}

/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 *
 * @param {String} path
 * @return {String}
 */

function formatSubPath (path) {
  var trimmed = path.trim();
  // invalid leading 0
  if (path.charAt(0) === '0' && isNaN(path)) { return false }

  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed
}

/**
 * Parse a string path into an array of segments
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parse (path) {
  var keys = [];
  var index = -1;
  var mode = BEFORE_PATH;
  var subPathDepth = 0;
  var c, newChar, key, type, transition, action, typeMap;

  var actions = [];

  actions[PUSH] = function () {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };

  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };

  actions[INC_SUB_PATH_DEPTH] = function () {
    actions[APPEND]();
    subPathDepth++;
  };

  actions[PUSH_SUB_PATH] = function () {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = IN_SUB_PATH;
      actions[APPEND]();
    } else {
      subPathDepth = 0;
      key = formatSubPath(key);
      if (key === false) {
        return false
      } else {
        actions[PUSH]();
      }
    }
  };

  function maybeUnescapeQuote () {
    var nextChar = path[index + 1];
    if ((mode === IN_SINGLE_QUOTE && nextChar === "'") ||
      (mode === IN_DOUBLE_QUOTE && nextChar === '"')) {
      index++;
      newChar = '\\' + nextChar;
      actions[APPEND]();
      return true
    }
  }

  while (mode != null) {
    index++;
    c = path[index];

    if (c === '\\' && maybeUnescapeQuote()) {
      continue
    }

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || ERROR;

    if (transition === ERROR) {
      return // parse error
    }

    mode = transition[0];
    action = actions[transition[1]];
    if (action) {
      newChar = transition[2];
      newChar = newChar === undefined
        ? c
        : newChar;
      if (action() === false) {
        return
      }
    }

    if (mode === AFTER_PATH) {
      keys.raw = path;
      return keys
    }
  }
}

/**
 * External parse that check for a cache hit first
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parsePath (path) {
  var hit = pathCache[path];
  if (!hit) {
    hit = parse(path);
    if (hit) {
      pathCache[path] = hit;
    }
  }
  return hit
}

var Path = function (Vue) {
  function empty (target) {
    if (target === null || target === undefined) { return true }

    if (Array.isArray(target)) {
      if (target.length > 0) { return false }
      if (target.length === 0) { return true }
    } else if (isPlainObject(target)) {
      /* eslint-disable prefer-const */
      for (var key in target) {
        if (hasOwn(target, key)) { return false }
      }
      /* eslint-enable prefer-const */
    }

    return true
  }

  /**
   * Get value from path string
   *
   * @param {Object} obj
   * @param {String} path
   * @return value
   */

  function getValue (obj, path) {
    if (!isObject(obj)) { return null }

    var paths = parsePath(path);
    if (empty(paths)) { return null }

    var length = paths.length;
    var ret = null;
    var last = obj;
    var i = 0;
    while (i < length) {
      var value = last[paths[i]];
      if (value === undefined) {
        last = null;
        break
      }
      last = value;
      i++;
    }

    ret = last;
    return ret
  }

  return getValue
};

/**
 * extend
 *
 * @param {Vue} Vue
 * @return {Vue}
 */

var Extend = function (Vue) {
  var format = Format(Vue);
  var getValue = Path(Vue);

  function parseArgs () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var lang = Vue.config.lang;
    var fallback = Vue.config.fallbackLang;

    if (args.length === 1) {
      if (isObject(args[0]) || Array.isArray(args[0])) {
        args = args[0];
      } else if (typeof args[0] === 'string') {
        lang = args[0];
      }
    } else if (args.length === 2) {
      if (typeof args[0] === 'string') {
        lang = args[0];
      }
      if (isObject(args[1]) || Array.isArray(args[1])) {
        args = args[1];
      }
    }

    return { lang: lang, fallback: fallback, params: args }
  }

  function exist (locale, key) {
    if (!locale || !key) { return false }
    return !isNil(getValue(locale, key))
  }

  function interpolate (locale, key, args) {
    if (!locale) { return null }

    var val = getValue(locale, key);
    if (Array.isArray(val)) { return val }
    if (isNil(val)) { val = locale[key]; }
    if (isNil(val)) { return null }
    if (typeof val !== 'string') { warn("Value of key '" + key + "' is not a string!"); return null }

    // Check for the existance of links within the translated string
    if (val.indexOf('@:') >= 0) {
      // Match all the links within the local
      // We are going to replace each of
      // them with its translation
      var matches = val.match(/(@:[\w|.]+)/g);
      for (var idx in matches) {
        var link = matches[idx];
        // Remove the leading @:
        var linkPlaceholder = link.substr(2);
        // Translate the link
        var translatedstring = interpolate(locale, linkPlaceholder, args);
        // Replace the link with the translated string
        val = val.replace(link, translatedstring);
      }
    }

    return !args
      ? val
      : Vue.config.i18nFormatter
        ? Vue.config.i18nFormatter.apply(null, [val].concat(args))
        : format(val, args)
  }

  function translate (getter, lang, fallback, key, params) {
    var res = null;
    res = interpolate(getter(lang), key, params);
    if (!isNil(res)) { return res }

    res = interpolate(getter(fallback), key, params);
    if (!isNil(res)) {
      if (true) {
        warn('Fall back to translate the keypath "' + key + '" with "' +
          fallback + '" language.');
      }
      return res
    } else {
      return null
    }
  }


  function warnDefault (lang, key, vm, result) {
    if (!isNil(result)) { return result }
    if (Vue.config.missingHandler) {
      Vue.config.missingHandler.apply(null, [lang, key, vm]);
    } else {
      if (true) {
        warn('Cannot translate the value of keypath "' + key + '". ' +
          'Use the value of keypath as default');
      }
    }
    return key
  }

  function getAssetLocale (lang) {
    return Vue.locale(lang)
  }

  function getComponentLocale (lang) {
    return this.$options.locales[lang]
  }

  function getOldChoiceIndexFixed (choice) {
    return choice ? choice > 1 ? 1 : 0 : 1
  }

  function getChoiceIndex (choice, choicesLength) {
    choice = Math.abs(choice);

    if (choicesLength === 2) { return getOldChoiceIndexFixed(choice) }

    return choice ? Math.min(choice, 2) : 0
  }

  function fetchChoice (locale, choice) {
    if (!locale && typeof locale !== 'string') { return null }
    var choices = locale.split('|');

    choice = getChoiceIndex(choice, choices.length);
    if (!choices[choice]) { return locale }
    return choices[choice].trim()
  }

  /**
   * Vue.t
   *
   * @param {String} key
   * @param {Array} ...args
   * @return {String}
   */

  Vue.t = function (key) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    if (!key) { return '' }
    var ref = parseArgs.apply(void 0, args);
    var lang = ref.lang;
    var fallback = ref.fallback;
    var params = ref.params;
    return warnDefault(lang, key, null, translate(getAssetLocale, lang, fallback, key, params))
  };

  /**
   * Vue.tc
   *
   * @param {String} key
   * @param {number|undefined} choice
   * @param {Array} ...args
   * @return {String}
   */

  Vue.tc = function (key, choice) {
    var args = [], len = arguments.length - 2;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 2 ];

    return fetchChoice(Vue.t.apply(Vue, [ key ].concat( args )), choice)
  };

  /**
   * Vue.te
   *
   * @param {String} key
   * @param {Array} ...args
   * @return {Boolean}
   */

  Vue.te = function (key) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    var ref = parseArgs.apply(void 0, args);
    var lang = ref.lang;
    return exist(getAssetLocale(lang), key)
  };

  /**
   * $t
   *
   * @param {String} key
   * @param {Array} ...args
   * @return {String}
   */

  Vue.prototype.$t = function (key) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    if (!key) { return '' }
    var ref = parseArgs.apply(void 0, args);
    var lang = ref.lang;
    var fallback = ref.fallback;
    var params = ref.params;
    var res = null;
    if (this.$options.locales) {
      res = translate(
        bind(getComponentLocale, this), lang, fallback, key, params
      );
      if (res) { return res }
    }
    return warnDefault(lang, key, this, translate(getAssetLocale, lang, fallback, key, params))
  };

  /**
   * $tc
   *
   * @param {String} key
   * @param {number|undefined} choice
   * @param {Array} ...args
   * @return {String}
   */

  Vue.prototype.$tc = function (key, choice) {
    var args = [], len = arguments.length - 2;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 2 ];

    if (typeof choice !== 'number' && typeof choice !== 'undefined') {
      return key
    }
    return fetchChoice((ref = this).$t.apply(ref, [ key ].concat( args )), choice)
    var ref;
  };

  /**
   * $te
   *
   * @param {String} key
   * @param {Array} ...args
   * @return {Boolean}
   *
   */

  Vue.prototype.$te = function (key) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    var ref = parseArgs.apply(void 0, args);
    var lang = ref.lang;
    var found = false;
    if (this.$options.locales) { // exist component locale
      found = exist(bind(getComponentLocale)(lang), key);
    }
    if (!found) {
      found = exist(getAssetLocale(lang), key);
    }
    return found
  };

  Vue.mixin({
    computed: {
      $lang: function $lang () {
        return Vue.config.lang
      }
    }
  });

  return Vue
};

var langVM; // singleton


/**
 * plugin
 *
 * @param {Object} Vue
 * @param {Object} opts
 */

function plugin (Vue, opts) {
  if ( opts === void 0 ) opts = {};

  var version = (Vue.version && Number(Vue.version.split('.')[0])) || -1;

  if ( true && plugin.installed) {
    warn('already installed.');
    return
  }

  if ( true && version < 2) {
    warn(("vue-i18n (" + (plugin.version) + ") need to use Vue 2.0 or later (Vue: " + (Vue.version) + ")."));
    return
  }

  var lang = 'en';
  setupLangVM(Vue, lang);

  Asset(Vue, langVM);
  Override(Vue, langVM);
  Config(Vue, langVM, lang);
  Extend(Vue);
}

function setupLangVM (Vue, lang) {
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  if (!langVM) {
    langVM = new Vue({ data: { lang: lang, locales: {} } });
  }
  Vue.config.silent = silent;
}

plugin.version = '__VERSION__';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

module.exports = plugin;


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/assets/js/components/MatchPairs.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/js/components/MatchPairs.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MatchPairs_vue_vue_type_template_id_3ba0b4ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MatchPairs.vue?vue&type=template&id=3ba0b4ea& */ "./resources/assets/js/components/MatchPairs.vue?vue&type=template&id=3ba0b4ea&");
/* harmony import */ var _MatchPairs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MatchPairs.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/MatchPairs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MatchPairs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MatchPairs.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/components/MatchPairs.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MatchPairs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MatchPairs_vue_vue_type_template_id_3ba0b4ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MatchPairs_vue_vue_type_template_id_3ba0b4ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/MatchPairs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/MatchPairs.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/components/MatchPairs.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatchPairs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MatchPairs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/MatchPairs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatchPairs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/MatchPairs.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/MatchPairs.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MatchPairs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./MatchPairs.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/MatchPairs.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MatchPairs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MatchPairs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MatchPairs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MatchPairs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MatchPairs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/MatchPairs.vue?vue&type=template&id=3ba0b4ea&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/MatchPairs.vue?vue&type=template&id=3ba0b4ea& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatchPairs_vue_vue_type_template_id_3ba0b4ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MatchPairs.vue?vue&type=template&id=3ba0b4ea& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/MatchPairs.vue?vue&type=template&id=3ba0b4ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatchPairs_vue_vue_type_template_id_3ba0b4ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatchPairs_vue_vue_type_template_id_3ba0b4ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/MultipleCorrectAnswers.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/components/MultipleCorrectAnswers.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MultipleCorrectAnswers_vue_vue_type_template_id_3d48e452___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultipleCorrectAnswers.vue?vue&type=template&id=3d48e452& */ "./resources/assets/js/components/MultipleCorrectAnswers.vue?vue&type=template&id=3d48e452&");
/* harmony import */ var _MultipleCorrectAnswers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultipleCorrectAnswers.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/MultipleCorrectAnswers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MultipleCorrectAnswers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MultipleCorrectAnswers.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/components/MultipleCorrectAnswers.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MultipleCorrectAnswers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MultipleCorrectAnswers_vue_vue_type_template_id_3d48e452___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MultipleCorrectAnswers_vue_vue_type_template_id_3d48e452___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/MultipleCorrectAnswers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/MultipleCorrectAnswers.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/MultipleCorrectAnswers.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleCorrectAnswers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MultipleCorrectAnswers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/MultipleCorrectAnswers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleCorrectAnswers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/MultipleCorrectAnswers.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/components/MultipleCorrectAnswers.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleCorrectAnswers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./MultipleCorrectAnswers.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/MultipleCorrectAnswers.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleCorrectAnswers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleCorrectAnswers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleCorrectAnswers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleCorrectAnswers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleCorrectAnswers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/MultipleCorrectAnswers.vue?vue&type=template&id=3d48e452&":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/MultipleCorrectAnswers.vue?vue&type=template&id=3d48e452& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleCorrectAnswers_vue_vue_type_template_id_3d48e452___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MultipleCorrectAnswers.vue?vue&type=template&id=3d48e452& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/MultipleCorrectAnswers.vue?vue&type=template&id=3d48e452&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleCorrectAnswers_vue_vue_type_template_id_3d48e452___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleCorrectAnswers_vue_vue_type_template_id_3d48e452___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/OneCorrectAnswer.vue":
/*!*************************************************************!*\
  !*** ./resources/assets/js/components/OneCorrectAnswer.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OneCorrectAnswer_vue_vue_type_template_id_b9f6e58e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OneCorrectAnswer.vue?vue&type=template&id=b9f6e58e& */ "./resources/assets/js/components/OneCorrectAnswer.vue?vue&type=template&id=b9f6e58e&");
/* harmony import */ var _OneCorrectAnswer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OneCorrectAnswer.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/OneCorrectAnswer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _OneCorrectAnswer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OneCorrectAnswer.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/components/OneCorrectAnswer.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OneCorrectAnswer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OneCorrectAnswer_vue_vue_type_template_id_b9f6e58e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OneCorrectAnswer_vue_vue_type_template_id_b9f6e58e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/OneCorrectAnswer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/OneCorrectAnswer.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/OneCorrectAnswer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OneCorrectAnswer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./OneCorrectAnswer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/OneCorrectAnswer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OneCorrectAnswer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/OneCorrectAnswer.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/OneCorrectAnswer.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OneCorrectAnswer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./OneCorrectAnswer.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/OneCorrectAnswer.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OneCorrectAnswer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OneCorrectAnswer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OneCorrectAnswer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OneCorrectAnswer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OneCorrectAnswer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/OneCorrectAnswer.vue?vue&type=template&id=b9f6e58e&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/OneCorrectAnswer.vue?vue&type=template&id=b9f6e58e& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OneCorrectAnswer_vue_vue_type_template_id_b9f6e58e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./OneCorrectAnswer.vue?vue&type=template&id=b9f6e58e& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/OneCorrectAnswer.vue?vue&type=template&id=b9f6e58e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OneCorrectAnswer_vue_vue_type_template_id_b9f6e58e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OneCorrectAnswer_vue_vue_type_template_id_b9f6e58e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/create_edit_activity_item.js":
/*!**********************************************************!*\
  !*** ./resources/assets/js/create_edit_activity_item.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */
window.initMap = function () {
  var enableStreetView = window.Laravel.map.enableStreetView || false;

  function $t(key) {
    if (window.Laravel.translations && window.Laravel.translations.hasOwnProperty(key)) {
      return window.Laravel.translations[key];
    }

    console.warn('Could not find translation for: ' + key);
    return key;
  }

  function initGameControls(map, cb) {
    if (!navigator.geolocation) {
      return false;
    }

    var gameControls = document.createElement('div'),
        controlUI = document.createElement('div');
    controlUI.id = 'sz-map-controls';
    controlUI.className = 'map-controls';
    gameControls.appendChild(controlUI);
    var navigationControlItem = document.createElement('i');
    navigationControlItem.className = 'mdi mdi-target';
    navigationControlItem.title = $t('set-current-position');
    controlUI.appendChild(navigationControlItem);
    var inGeoposition = false;
    var zooSelect = document.getElementById('zoo');
    navigationControlItem.addEventListener('click', function () {
      if (inGeoposition) return;
      inGeoposition = true;
      zooSelect.disabled = true;
      navigationControlItem.style.color = '#cccccc';
      navigator.geolocation.getCurrentPosition(function (position) {
        navigationControlItem.style.color = null;
        zooSelect.disabled = false;
        inGeoposition = false;
        cb(position);
      }, function (error) {
        navigationControlItem.style.color = null;
        zooSelect.disabled = false;
        inGeoposition = false;
        alert($t('geolocation-error'));
        console.error('Geolocation error', error);
      }, {
        enableHighAccuracy: true
      });
    });
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(gameControls);
  } // TODO This code is a repatition of one from GameMap component
  // It might make sense to rewrite it into a mixin
  // This would require using a component for the map instead


  function initGroundOverlays(map) {
    return new google.maps.GroundOverlay(window.Laravel.baseUrl + '/img/map/overlays/skansen.png', {
      north: 59.329167,
      south: 59.324011,
      east: 18.111242,
      west: 18.099022
    }, {
      clickable: false,
      map: map
    });
  }

  function setLatAndLngValues(latLng) {
    document.getElementById('latitude').value = typeof latLng.lat === 'function' ? latLng.lat() : latLng.lat;
    document.getElementById('longitude').value = typeof latLng.lng === 'function' ? latLng.lng() : latLng.lng;
  }

  function initializeMarker(map, latLng) {
    var marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      title: '',
      position: latLng,
      map: map,
      draggable: true
    });
    marker.addListener('dragend', function (event) {
      setLatAndLngValues(event.latLng);
    });
    return marker;
  }

  function replayMarkerAnimation(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function () {
      marker.setAnimation(null);
    }, 500);
  }

  function repositionMarker(latLng, marker, map) {
    setLatAndLngValues(latLng);
    map.panTo(latLng);
    marker.setPosition(latLng);
    replayMarkerAnimation(marker);
  }

  function getInitialLatLng() {
    var latitude = document.getElementById('latitude').value,
        longitude = document.getElementById('longitude').value;

    if (latitude && longitude) {
      return {
        lat: Number(latitude),
        lng: Number(longitude)
      };
    }

    var defaultZoo = 3; // return window.Laravel.zooGeolocationOptions[$(document).find('select[name="zoo"]').val()];

    return window.Laravel.zooGeolocationOptions[defaultZoo];
  }

  var mapOptions, map, marker;
  var currentLatLng = getInitialLatLng();
  mapOptions = {
    center: currentLatLng,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.HYBRID,
    disableDefaultUI: true,
    zoomControl: true,
    streetViewControl: enableStreetView,
    mapTypeControl: true,
    styles: [{
      featureType: 'poi',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: 'transit.station',
      stylers: [{
        visibility: 'off'
      }]
    }]
  };
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  setLatAndLngValues(currentLatLng);
  marker = initializeMarker(map, currentLatLng);
  initGameControls(map, function (position) {
    var latLng = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    repositionMarker(latLng, marker, map);
  });
  initGroundOverlays(map);
  $(document).find('select[name="zoo"]').on('change', function () {
    var value = $(this).val(),
        latLng = window.Laravel.zooGeolocationOptions[value];
    repositionMarker(latLng, marker, map);
  });
  var longPress = false;
  var startTime;
  var endTime;
  map.addListener('mousedown', function (event) {
    startTime = new Date().getTime();
  });
  map.addListener('mouseup', function (event) {
    endTime = new Date().getTime();
    longPress = endTime - startTime < 500 ? false : true;
  });
  map.addListener('click', function (event) {
    if (longPress) {
      setLatAndLngValues(event.latLng);
      marker.setPosition(event.latLng);
      replayMarkerAnimation(marker);
    }
  });
};

var VueI18n = __webpack_require__(/*! vue-i18n */ "./node_modules/vue-i18n/dist/vue-i18n.common.js");

Vue.use(VueI18n);
Vue.config.lang = window.Laravel.locale;
Vue.locale(window.Laravel.locale, _.cloneDeep(window.Laravel.translations));
Vue.component('one-correct-answer', __webpack_require__(/*! ./components/OneCorrectAnswer.vue */ "./resources/assets/js/components/OneCorrectAnswer.vue")["default"]);
Vue.component('multiple-correct-answers', __webpack_require__(/*! ./components/MultipleCorrectAnswers.vue */ "./resources/assets/js/components/MultipleCorrectAnswers.vue")["default"]);
Vue.component('match-pairs', __webpack_require__(/*! ./components/MatchPairs.vue */ "./resources/assets/js/components/MatchPairs.vue")["default"]);
var addActivityItemApp = new Vue({
  el: 'form#' + window.Laravel.activityItemFormId,
  mounted: function mounted() {
    var _this = this;

    var vm = this;
    $('[data-toggle="tooltip"]').tooltip();

    if (window.Laravel.hasImage) {
      vm.hasImage = true;
    }

    $(vm.$refs.image).on('change', function (e) {
      _this.canResetImage = true;
    });
    $(vm.$refs.answeringTimeCheck).on('change', function (e) {
      var isChecked = $(vm.$refs.answeringTimeCheck).prop('checked');
      $(vm.$refs.answeringTime).prop('disabled', !isChecked);
      $(vm.$refs.answeringTimeString).prop('disabled', !isChecked);
      $('.answering-time').prop('disabled', !isChecked);

      if (!isChecked) {
        $(vm.$refs.answeringTimeString).val('');
        $(vm.$refs.answeringTime).val('');
        $('.answering-time').val('');
      }
    });

    if (!$(vm.$refs.answeringTimeCheck).prop('checked')) {
      $(vm.$refs.answeringTime).prop('disabled', true);
      $(vm.$refs.answeringTimeString).prop('disabled', true);
      $('.answering-time').prop('disabled', true);
    }

    $('.answering-time').on('change', function () {
      var hours = $('select[name="answering_time_hour"]').val();
      var minute = $('select[name="answering_time_minute"]').val();
      var second = $('select[name="answering_time_second"]').val();
      var val = 0 + hours * 60 * 60 + minute * 60 + second * 1;
      $(vm.$refs.answeringTime).val(val);
    });
    var time = $(vm.$refs.answeringTime).val();
    var hours = Math.floor(time / (60 * 60));
    time -= hours * 60 * 60;
    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;
    $('select[name="answering_time_hour"]').val(hours);
    $('select[name="answering_time_minute"]').val(minutes);
    $('select[name="answering_time_second"]').val(seconds);
    $(vm.$refs.answeringTimeString).on('keyup', function () {
      $(vm.$refs.answeringTime).val(vm.convertTimeStringToInt($(this).val()));
    }).on('blur', function () {
      $(this).val(vm.convertTimeIntToString($(vm.$refs.answeringTime).val()));
    }).val(vm.convertTimeIntToString($(vm.$refs.answeringTime).val()));
    var typeVal = parseInt($('select[name="type"]').val());

    if (typeVal === window.Laravel.questionTypeConstants.INFORMATION || typeVal === window.Laravel.questionTypeConstants.EMBEDDED_CONTENT || typeVal === window.Laravel.questionTypeConstants.PHOTO || typeVal === 0) {
      $(vm.$refs.answeringTime).closest('.form-group').hide();
    }

    if ($('.is-flash-checkbox:checked').length > 0) {
      $('.location-container').hide();
    }

    $('.is-flash-checkbox').on('change', function () {
      if ($('.is-flash-checkbox:checked').length > 0) {
        $('.location-container').hide();
      } else {
        $('.location-container').show();
      }
    });
  },
  data: function data() {
    return {
      questionType: $('select[name="type"]').val(),
      canResetImage: false,
      hasImage: false
    };
  },
  methods: {
    convertTimeStringToInt: function convertTimeStringToInt(timeString) {
      var parts = timeString.split(' ');
      var seconds = 0;

      for (var i = 0; i < parts.length; i++) {
        var part = parts[i];
        var partLength = part.length;

        if (partLength < 2) {
          continue;
        }

        var _char = part.charAt(partLength - 1).toLowerCase();

        var time = parseInt(part.substr(0, partLength - 1));

        if (_char === 's') {
          seconds += time;
        } else if (_char === 'm') {
          seconds += time * 60;
        } else if (_char === 'h') {
          seconds += time * 60 * 60;
        } else if (_char === 'd') {
          seconds += time * 60 * 60 * 24;
        }
      }

      return seconds;
    },
    convertTimeIntToString: function convertTimeIntToString(time) {
      var oneMinute = 60;
      var oneHour = oneMinute * 60;
      var oneDay = oneHour * 24;
      var days = (time - time % oneDay) / oneDay;
      var daysInSeconds = days * oneDay;
      time -= daysInSeconds;
      var hours = (time - time % oneHour) / oneHour;
      var hoursInSeconds = hours * oneHour;
      time -= hoursInSeconds;
      var minutes = (time - time % oneMinute) / oneMinute;
      var minuesInSeconds = minutes * oneMinute;
      var seconds = time - minuesInSeconds;
      var str = '';

      if (days > 0) {
        str += days + 'd';
      }

      if (hours > 0) {
        if (str.length > 0) {
          str += ' ';
        }

        str += hours + 'h';
      }

      if (minutes > 0) {
        if (str.length > 0) {
          str += ' ';
        }

        str += minutes + 'm';
      }

      if (seconds > 0) {
        if (str.length > 0) {
          str += ' ';
        }

        str += seconds + 's';
      }

      return str;
    },
    hasQuestionData: function hasQuestionData() {
      return window.Laravel.activityItemQuestionData && window.Laravel.activityItemQuestionData.length > 0;
    },
    getQuestionData: function getQuestionData() {
      return window.Laravel.activityItemQuestionData;
    },
    changedQuestionType: function changedQuestionType(event) {
      if (this.hasQuestionData()) {
        delete window.Laravel.activityItemQuestionData;
      }

      var val = parseInt($(event.target).val());

      if (val === 1 || val === 6 || val === 7) {
        $(this.$refs.answeringTime).closest('.form-group').hide();
      } else {
        $(this.$refs.answeringTime).closest('.form-group').show();
      }
    },
    getOptionImageUrl: function getOptionImageUrl(image) {
      return window.Laravel.activityItemAssetsBaseUrl + '/' + image;
    },
    hasPreview: function hasPreview(option, imageKey, flagKey) {
      imageKey = imageKey || 'image';
      flagKey = flagKey || 'imagePreview';

      if (option.id && option[imageKey] && option[flagKey] !== false) {
        return true;
      }

      return false;
    },
    resetImage: function resetImage(e) {
      e.preventDefault();
      if (!$(this.$refs.image).val()) return;
      this.canResetImage = false;
      $(this.$refs.image).val('');
    },
    canRemoveImage: function canRemoveImage() {
      return !this.hasImage || this.canResetImage;
    },
    hasRemovedImagesData: function hasRemovedImagesData() {
      return window.Laravel.removedImages && window.Laravel.removedImages.length > 0;
    },
    getRemovedImagesData: function getRemovedImagesData() {
      return window.Laravel.removedImages;
    },
    hasRemovedImageMatchesData: function hasRemovedImageMatchesData() {
      return window.Laravel.removedImageMatches && window.Laravel.removedImageMatches.length > 0;
    },
    getRemovedImageMatchesData: function getRemovedImageMatchesData() {
      return window.Laravel.removedImageMatches;
    }
  }
});
$('[name="image"]').on('change', function () {
  var self = $(this);
  var input = self.get(0);

  if (input.files && input.files[0]) {
    if (self.parent().parent().find('.help-block').length > 0) {
      var loadingText = self.parent().parent().find('.help-block').data('loading-text');
      self.parent().parent().find('.help-block').prepend($('<div>').addClass('alert alert-info loading-text').html(loadingText));
    }

    var reader = new FileReader();

    reader.onload = function (e) {
      if (self.parent().parent().find('.help-block .sz-uploaded-image-preview').length <= 0) {
        self.parent().parent().find('.help-block').prepend($('<img>').addClass('img-rounded pull-left sz-uploaded-image-preview').attr('alt', 'image'));
      }

      self.parent().parent().find('.help-block .sz-uploaded-image-preview').attr('src', e.target.result);
      self.parent().parent().find('.help-block .alert.loading-text').remove();
    };

    reader.readAsDataURL(input.files[0]);
  }
});
$('#edit-activity-item').on('submit', function () {
  $('.submit-loading-text').removeClass('hidden');
});
$(document).ready(function () {
  $(document).on('keypress', ':input:not(textarea):not([type=submit])', function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      return false;
    }
  });
});

/***/ }),

/***/ "./resources/assets/js/mixins/Image.js":
/*!*********************************************!*\
  !*** ./resources/assets/js/mixins/Image.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    isValidImageFormat: function isValidImageFormat(file) {
      return file.type === 'image/jpg' || file.type === 'image/jpeg' || file.type == 'image/png';
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/mixins/OptionImage.js":
/*!***************************************************!*\
  !*** ./resources/assets/js/mixins/OptionImage.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    hasFiles: function hasFiles(event) {
      return event.target.files.length > 0;
    },
    resetImageFileInput: function resetImageFileInput(event) {
      $(event.target).val('');
    },
    getImageInputElement: function getImageInputElement(index) {
      return $(this.$refs['add-image'][index]);
    },
    resetOptionImage: function resetOptionImage(index) {
      var element = this.getImageInputElement(index);
      this.options[index].image = '';
      this.options[index].imagePreview = false;
      this.$nextTick(function () {
        element.tooltip('destroy');
      });
    },
    imageSelected: function imageSelected(event, index) {
      var _this = this;

      if (!this.hasFiles(event)) return;

      if (!this.isValidImageFormat(event.target.files[0])) {
        this.resetImageFileInput(event);
        this.resetOptionImage(index);
        alert(this.$t('image-format-hint'));
        return;
      }

      this.options[index].image = event.target.files[0].name;
      this.options[index].imagePreview = false;
      this.options[index].imageSelected = true;
      var element = this.getImageInputElement(index);
      this.$nextTick(function () {
        if (element.data && element.data('original-title')) {
          element.attr('data-original-title', element.attr('title')).removeAttr('title').tooltip('show');
        } else {
          element.attr('data-original-title', _this.options[index].image);
          element.attr('title', _this.options[index].image);
        }
      });
    },
    canRemoveSelectedImage: function canRemoveSelectedImage(index) {
      return !!this.options[index].imageSelected;
    },
    removeSelectedImage: function removeSelectedImage(index) {
      if (this.canRemoveSelectedImage(index)) {
        var option = this.options[index];

        if (option.image_url) {
          option.image = option.image_url.split('/').pop();
          option.imagePreview = true;
        } else {
          option.image = '';
        }

        option.imageSelected = false;
        $(this.$refs['option-image'][index]).val('');
        var element = this.getImageInputElement(index);
        this.$nextTick(function () {
          if (option.image) {
            element.attr('data-original-title', option.image);
          } else {
            element.attr('title', '');
            element.attr('data-original-title', '');
          }
        });
      }
    },
    canRemoveImage: function canRemoveImage(index) {
      return !!this.options[index].image_url && !this.canRemoveSelectedImage(index);
    },
    removeImage: function removeImage(index) {
      if (this.canRemoveImage(index)) {
        $(this.$refs['removed-option-images'][index]).trigger('click');
      }
    },
    hasImageRemoved: function hasImageRemoved(index) {
      return this.removedImages.indexOf(this.options[index].id) !== -1;
    }
  }
});

/***/ }),

/***/ 2:
/*!****************************************************************!*\
  !*** multi ./resources/assets/js/create_edit_activity_item.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vagrant/code/resources/assets/js/create_edit_activity_item.js */"./resources/assets/js/create_edit_activity_item.js");


/***/ })

/******/ });