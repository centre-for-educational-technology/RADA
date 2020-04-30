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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/FormElementSwitch.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/FormElementSwitch.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['onSwitchChange', 'label', 'defaultValue'],
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      if (typeof _this.defaultValue !== 'undefined' && _this.defaultValue === true) {
        _this.$refs.input.checked = _this.defaultValue === true;
      }
    }, 500);
  },
  watch: {
    defaultValue: function defaultValue() {
      this.$refs.input.checked = this.defaultValue === true;
    }
  },
  methods: {
    onChange: function onChange(e) {
      if (typeof this.onSwitchChange !== 'undefined') {
        this.onSwitchChange(e.target.checked);
      }
    },
    onLabelClick: function onLabelClick() {
      this.$refs.input.click();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/GradingEdit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/GradingEdit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['answerId', 'viewType'],
  components: {
    'freeform': __webpack_require__(/*! ./QuestionTypes/Freeform.vue */ "./resources/assets/js/components/Grading/QuestionTypes/Freeform.vue")["default"],
    'photo': __webpack_require__(/*! ./QuestionTypes/Photo.vue */ "./resources/assets/js/components/Grading/QuestionTypes/Photo.vue")["default"],
    'one-correct': __webpack_require__(/*! ./QuestionTypes/OneCorrect.vue */ "./resources/assets/js/components/Grading/QuestionTypes/OneCorrect.vue")["default"],
    'missing-word': __webpack_require__(/*! ./QuestionTypes/MissingWord.vue */ "./resources/assets/js/components/Grading/QuestionTypes/MissingWord.vue")["default"],
    'multiple-correct': __webpack_require__(/*! ./QuestionTypes/MultipleCorrect.vue */ "./resources/assets/js/components/Grading/QuestionTypes/MultipleCorrect.vue")["default"],
    'match-pairs': __webpack_require__(/*! ./QuestionTypes/MatchPairs.vue */ "./resources/assets/js/components/Grading/QuestionTypes/MatchPairs.vue")["default"]
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.$nextTick(function () {
        _this.baseUrl = window.RADA.config.base_url;
        _this.answer = _this.getAnswer();
        _this.image = _this.getImage();
        setTimeout(function () {
          _this.loadOtherAnswers();
        }, 100);
      });
    });
  },
  data: function data() {
    return {
      image: null,
      baseUrl: '',
      answer: null,
      alertSuccessMessage: null,
      otherAnswers: []
    };
  },
  computed: {},
  watch: {
    answerId: function answerId() {
      var _this2 = this;

      this.answer = this.getAnswer();
      this.image = this.getImage();

      if (this.answer === null) {
        this.reset();
      } else {
        setTimeout(function () {
          _this2.loadOtherAnswers();
        }, 500);
      }
    }
  },
  methods: {
    reset: function reset() {
      this.image = null;
      this.alertSuccessMessage = null;
      this.otherAnswers = [];
    },
    showAlert: function showAlert(message) {
      this.alertSuccessMessage = message.message;
    },
    markGraded: function markGraded(answerId, grade) {
      this.$parent.markGraded(answerId, grade);
    },
    onClickGoBackToList: function onClickGoBackToList(e) {
      if (window.history.length > 1) {
        this.reset();
        e.preventDefault();
        window.history.back();
        return false;
      }
    },
    loadOtherAnswers: function loadOtherAnswers() {
      var _this3 = this;

      if (this.answer) {
        this.$http.get('/api/grading/get-other-graded-answers/' + this.answer.id).then(function (response) {
          _this3.otherAnswers = response.body;
        }, function (error) {
          _this3.otherAnswers = [];
        });
      }
    },
    getOtherAnswerAnswer: function getOtherAnswerAnswer(answer) {
      var json = JSON.parse(answer.answer);
      var type = answer.type;
      var response = '-';

      switch (type) {
        case 1:
          break;

        case 2:
        case 3:
          var responseArray = [];
          var component = null;

          if (type === 2) {
            component = this.$refs.oneCorrectComponent;
          } else {
            component = this.$refs.multipleCorrectComponent;
          }

          if (component) {
            var questionData = component.getQuestionDataFromData();
            var options = json !== null && typeof json.options !== 'undefined' ? json.options : [];

            var _loop = function _loop(i) {
              var optionId = options[i];
              var data = questionData.filter(function (item) {
                return parseInt(item.id) === parseInt(optionId);
              });

              if (data.length > 0) {
                responseArray[i] = data[0].option;
              }
            };

            for (var i = 0; i < options.length; i++) {
              _loop(i);
            }
          }

          response = responseArray.toString();
          break;

        case 4:
        case 6:
        case 8:
          response = json !== null && typeof json.text !== 'undefined' ? json.text : '';
          break;

        case 5:
          break;

        case 7:
          break;
      }

      return response;
    },
    openOtherAnswerDetail: function openOtherAnswerDetail(answerId, e) {
      e.preventDefault();
      this.reset();
      var data = this.$parent.getData();
      data.currentAnswerId = answerId;
      this.$parent.setData(data);
      this.$parent.changePage();
      return false;
    },
    getQuestionTypeTranslation: function getQuestionTypeTranslation() {
      return window.Laravel.questionTypes[this.answer.type];
    },
    isInformation: function isInformation() {
      return this.answer.type === window.Laravel.questionTypeConstants.INFORMATION;
    },
    isOneCorrectAnswer: function isOneCorrectAnswer() {
      return this.answer.type === window.Laravel.questionTypeConstants.ONE_CORRECT_ANSWER;
    },
    isMultipleCorrectAnswers: function isMultipleCorrectAnswers() {
      return this.answer.type === window.Laravel.questionTypeConstants.MULTIPLE_CORRECT_ANSWERS;
    },
    isFreeformAnswer: function isFreeformAnswer() {
      return this.answer.type === window.Laravel.questionTypeConstants.FREEFORM_ANSWER;
    },
    isMatchPairs: function isMatchPairs() {
      return this.answer.type === window.Laravel.questionTypeConstants.MATCH_PAIRS;
    },
    isEmbeddedContent: function isEmbeddedContent() {
      return this.answer.type === window.Laravel.questionTypeConstants.EMBEDDED_CONTENT;
    },
    isPhoto: function isPhoto() {
      return this.answer.type === window.Laravel.questionTypeConstants.PHOTO;
    },
    isMissingWord: function isMissingWord() {
      return this.answer.type === window.Laravel.questionTypeConstants.MISSING_WORD;
    },
    getAnswer: function getAnswer() {
      var _this4 = this;

      var answers = window.Laravel.answers.filter(function (answer) {
        return answer.id === _this4.answerId;
      });

      if (answers.length > 0) {
        return answers[0];
      }

      return null;
    },
    getImage: function getImage() {
      return this.answer && this.answer.image ? '/uploads/images/activity_items/' + this.answer.activity_item_id + '/' + this.answer.image : null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/GradingList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/GradingList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['answers'],
  components: {
    'grading-list-item': __webpack_require__(/*! ./GradingListItem.vue */ "./resources/assets/js/components/Grading/GradingListItem.vue")["default"],
    'pagination': __webpack_require__(/*! ../vue-plain-pagination.vue */ "./resources/assets/js/components/vue-plain-pagination.vue")["default"],
    'form-element-switch': __webpack_require__(/*! ../FormElementSwitch.vue */ "./resources/assets/js/components/FormElementSwitch.vue")["default"],
    'grading-edit': __webpack_require__(/*! ./GradingEdit.vue */ "./resources/assets/js/components/Grading/GradingEdit.vue")["default"]
  },
  mounted: function mounted() {
    var _this = this;

    var vm = this;
    this.$nextTick(function () {
      _this.baseUrl = window.RADA.config.base_url;

      if (_this.answers.length > 0) {
        var firstAnswer = _this.answers[0];
        _this.activityId = firstAnswer.activity_id;
      }

      if (_this.viewType === 'list' && !window.history.state) {
        _this.viewType = window.Laravel.viewType;
        var currentPage = window.Laravel.currentPage;

        if (currentPage === 0) {
          currentPage = 1;
        }

        _this.currentPage = currentPage;
        _this.paginationPage = currentPage;

        _this.changePage();
      } else {
        _this.setData(window.history.state);
      }
    });
    window.addEventListener('popstate', function (e) {
      var state = e.state;

      if (state === null) {
        vm.reset();
        vm.resetEdit();
      } else {
        vm.resetEdit();
        vm.setData(state);
      }
    });
  },
  updated: function updated() {
    var _this2 = this;

    if (this.activityId === 0 && this.answers.length > 0) {
      var firstAnswer = this.answers[0];
      this.activityId = firstAnswer.activity_id;
    }

    if (this.viewType === 'edit' && this.currentAnswerId === null) {
      var currentAnswers = this.answers.filter(function (answer) {
        return answer.id === window.Laravel.currentAnswerId;
      });

      if (currentAnswers.length > 0) {
        var answer = currentAnswers[0];
        this.currentAnswerId = answer.id;
      }
    }

    this.$nextTick(function () {
      _this2.isUpdated = true;

      _this2.calulatePaginationPosition();
    });
  },
  data: function data() {
    return {
      activityId: 0,
      itemsPerPage: 5,
      baseUrl: '',
      paginationPage: 0,
      currentPage: 0,
      showGraded: false,
      viewType: 'list',
      canUpdateEditKey: false,
      currentAnswerId: null,
      isUpdated: false,
      bootstrapPaginationClasses: {
        ul: 'pagination',
        li: 'page-item',
        liActive: 'active',
        liDisable: 'disabled',
        button: 'page-link'
      }
    };
  },
  computed: {
    filteredAnswers: function filteredAnswers() {
      var _this3 = this;

      return this.answers.filter(function (answer) {
        return _this3.showGraded === false ? answer.grade === null : true;
      });
    },
    pages: function pages() {
      return Math.ceil(this.filteredAnswers.length / this.itemsPerPage);
    },
    answersPerPage: function answersPerPage() {
      var minIndex = this.itemsPerPage * (this.currentPage - 1);
      var maxIndex = minIndex + (this.itemsPerPage - 1);
      return this.filteredAnswers.filter(function (answer, index) {
        return index >= minIndex && index <= maxIndex;
      });
    }
  },
  watch: {
    paginationPage: function paginationPage() {
      if (this.isUpdated === false) {
        return false;
      }

      if (this.currentPage !== this.paginationPage) {
        this.currentPage = this.paginationPage;
        this.changePage();
      }
    },
    showGraded: function showGraded() {
      var _this4 = this;

      this.changePage(true);
      this.$nextTick(function () {
        _this4.calulatePaginationPosition();
      });
    }
  },
  methods: {
    calulatePaginationPosition: function calulatePaginationPosition() {
      var paginations = window.document.querySelectorAll('.pagination-container .pagination');

      for (var i = 0; i < paginations.length; i++) {
        var pagination = paginations[i];
        var width = pagination.offsetWidth;
        pagination.style = 'margin-left: ' + -width / 2 + 'px';
      }
    },
    markGraded: function markGraded(answerId, grade) {
      this.$emit('update:answers', this.answers.map(function (answer) {
        if (answer.id === answerId) {
          answer.grade = grade;
        }

        return answer;
      }));
    },
    resetEdit: function resetEdit() {
      this.currentAnswerId = null;
    },
    reset: function reset() {
      this.setData({
        currentPage: 1,
        showGraded: false,
        viewType: 'list',
        currentAnswerId: null
      });
    },
    setData: function setData(data) {
      this.currentPage = data.currentPage;
      this.paginationPage = data.currentPage;
      this.showGraded = data.showGraded;
      this.viewType = data.viewType;
      this.currentAnswerId = data.currentAnswerId;
      this.$set(this, 'currentAnswerId', data.currentAnswerId);
    },
    getData: function getData() {
      return {
        currentPage: this.currentPage,
        showGraded: this.showGraded,
        viewType: this.viewType,
        currentAnswerId: this.currentAnswerId
      };
    },
    onSwitchChange: function onSwitchChange(isChecked) {
      this.showGraded = isChecked;
    },
    changePage: function changePage(replaceState) {
      var _this5 = this;

      if (this.activityId === 0) {
        if (this.answers.length > 0) {
          var firstAnswer = this.answers[0];
          this.activityId = firstAnswer.activity_id;
        } else {
          setTimeout(function () {
            _this5.changePage(replaceState);
          }, 1);
          return;
        }
      }

      var name = 'index (' + this.currentPage + ')';
      var url = '/grading/' + this.activityId + '/page/' + this.currentPage;

      if (this.viewType === 'edit' && this.currentAnswerId > 0) {
        name = this.answers.filter(function (answer) {
          return answer.id === _this5.currentAnswerId;
        })[0].title;
        url = '/grading/' + this.activityId + '/' + this.currentAnswerId + '/edit';
      }

      if (typeof window.history.state !== 'undefined' && window.history.state !== null) {
        var stateData = window.history.state;

        var _data = this.getData();

        if (stateData.viewType === _data.viewType && stateData.currentPage === _data.currentPage && stateData.showGraded === _data.showGraded && stateData.currentAnswerId === _data.currentAnswerId) {
          return false;
        }
      }

      var data = this.getData();

      if (parseInt(data.currentPage) === 0) {
        this.currentPage = 1;
        data.currentPage = 1;
      }

      if (typeof replaceState === 'undefined' || replaceState !== true) {
        window.history.pushState(data, name, url);
      } else {
        window.history.replaceState(data, name, url);
      }
    },
    generatePaginationUrl: function generatePaginationUrl(page) {
      return '/grading/' + this.activityId + '/page/' + page;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/GradingListItem.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/GradingListItem.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['answer', 'isLast'],
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.$nextTick(function () {
        _this.baseUrl = window.RADA.config.base_url;
        _this.href = '/grading/' + _this.answer.activity_id + '/' + _this.answer.id + '/edit';
      });
    });
  },
  data: function data() {
    return {
      baseUrl: '',
      href: ''
    };
  },
  methods: {
    onClickOpenEditView: function onClickOpenEditView(e) {
      e.preventDefault();
      var editUrl = '/grading/' + this.answer.activity_id + '/' + this.answer.id + '/edit';
      var data = this.$parent.getData();
      data.currentAnswerId = this.answer.id;
      data.viewType = 'edit';
      this.$emit('setData', data);
      history.pushState(data, this.answer.title, editUrl);
      return false;
    },
    getQuestionTypeImageUrl: function getQuestionTypeImageUrl() {
      var list = {
        1: 'information',
        2: 'one-correct-answer',
        3: 'multiple-correct-answers',
        4: 'freeform-answer',
        5: 'match-pairs',
        6: 'embedded-content',
        7: 'photo',
        8: 'missing-word'
      };
      var url = '/img/logos/logo-square.png';

      if (typeof list[this.answer.type] !== 'undefined') {
        url = '/img/icons/item/' + list[this.answer.type] + '.png';
      }

      return this.baseUrl + url;
    },
    getQuestionTypeTranslation: function getQuestionTypeTranslation() {
      return window.Laravel.questionTypes[this.answer.type];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/Freeform.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/QuestionTypes/Freeform.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['answer'],
  components: {
    'single-grading': __webpack_require__(/*! ./Grading/Single.vue */ "./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue")["default"]
  },
  data: function data() {
    return {
      inAjaxCall: false
    };
  },
  computed: {
    answerText: function answerText() {
      var answer = JSON.parse(this.answer.answer);

      if (answer && typeof answer.text !== 'undefined') {
        return answer.text;
      }

      return '-';
    },
    maxPoints: function maxPoints() {
      return parseInt(this.answer.max_points);
    },
    grade: function grade() {
      return this.answer.grade ? parseInt(this.answer.grade) : this.maxPoints;
    }
  },
  methods: {
    show: function show() {
      return this.$parent.isFreeformAnswer();
    },
    showAlert: function showAlert(message) {
      this.$parent.showAlert(message);
    },
    markGraded: function markGraded(answerId, grade) {
      this.$parent.markGraded(answerId, grade);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gradingMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gradingMixin */ "./resources/assets/js/components/Grading/QuestionTypes/Grading/gradingMixin.js");
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
  props: {
    maxGrade: {
      type: Number,
      required: true
    },
    answerId: {
      type: Number,
      required: true
    },
    grade: {
      type: Number,
      required: true
    }
  },
  mixins: [_gradingMixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      inputGrade: 0,
      activityId: 0
    };
  },
  watch: {
    inputGrade: function inputGrade() {
      var maxGrade = this.getMaxGrade();

      if (this.inputGrade > maxGrade) {
        this.inputGrade = maxGrade;
      } else if (this.inputGrade < 0) {
        this.inputGrade = 0;
      }
    },
    grade: function grade() {
      this.inputGrade = this.grade;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      var answer = _this.getAnswer();

      _this.activityId = answer.activity_id;

      if (_this.grade !== null) {
        _this.inputGrade = _this.grade;
      } else {
        _this.inputGrade = _this.maxGrade;
      }
    });
  },
  methods: {
    getAnswer: function getAnswer() {
      var _this2 = this;

      var answers = window.Laravel.answers.filter(function (answer) {
        return answer.id === _this2.answerId;
      });

      if (answers.length > 0) {
        return answers[0];
      }

      return null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/MatchPairs.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/QuestionTypes/MatchPairs.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['answer'],
  components: {
    'single-grading': __webpack_require__(/*! ./Grading/Single.vue */ "./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue")["default"]
  },
  data: function data() {
    return {
      inAjaxCall: false,
      questionData: null
    };
  },
  computed: {
    answerOption: function answerOption() {
      var answer = JSON.parse(this.answer.answer);

      if (answer && typeof answer.options !== 'undefined' && answer.options.length > 0) {
        return answer.options[0];
      }

      return '-';
    },
    maxPoints: function maxPoints() {
      var pointsObject = JSON.parse(this.answer.max_points);
      var maxPoints = 0;

      for (var key in pointsObject) {
        if (pointsObject.hasOwnProperty(key)) {
          maxPoints += parseInt(pointsObject[key]);
        }
      }

      return maxPoints;
    },
    grade: function grade() {
      return this.answer.grade ? parseInt(this.answer.grade) : this.maxPoints;
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.show()) {
      this.getQuestionData(this.answer.activity_item_id, function (data) {
        _this.questionData = data;
      });
    }
  },
  methods: {
    show: function show() {
      return this.$parent.isMatchPairs();
    },
    showAlert: function showAlert(message) {
      this.$parent.showAlert(message);
    },
    markGraded: function markGraded(answerId, grade) {
      this.$parent.markGraded(answerId, grade);
    },
    getQuestionData: function getQuestionData(activityItemId, callback) {
      this.$http.get('/api/grading/get-question-data/' + activityItemId).then(function (response) {
        callback(response.body);
      }, function (response) {
        callback(null);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/MissingWord.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/QuestionTypes/MissingWord.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['answer'],
  components: {
    'single-grading': __webpack_require__(/*! ./Grading/Single.vue */ "./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue")["default"]
  },
  data: function data() {
    return {
      inAjaxCall: false,
      questionMissingWords: this.getMissingWords(this.answer.missing_word),
      answerMissingWords: this.getMissingWords(this.getAnswerText())
    };
  },
  computed: {
    answerText: function answerText() {
      return this.replaceAnswerText();
    },
    maxPoints: function maxPoints() {
      return parseInt(this.answer.max_points);
    },
    grade: function grade() {
      return this.answer.grade ? parseInt(this.answer.grade) : this.maxPoints;
    }
  },
  methods: {
    show: function show() {
      return this.$parent.isMissingWord();
    },
    showAlert: function showAlert(message) {
      this.$parent.showAlert(message);
    },
    markGraded: function markGraded(answerId, grade) {
      this.$parent.markGraded(answerId, grade);
    },
    replaceAnswerText: function replaceAnswerText() {
      var answerText = this.getAnswerText();
      var questionMissingWordsLength = this.questionMissingWords.length;
      var answerMissingWordsLength = this.answerMissingWords.length;

      if (answerMissingWordsLength > 0 && questionMissingWordsLength > 0) {
        for (var i = 0; i < questionMissingWordsLength; i++) {
          var originalWord = this.questionMissingWords[i];
          var answerWord = this.answerMissingWords[i];
          var search = '{' + answerWord.word + '}';
          var replacer = '';

          if (answerWord.word !== originalWord.word) {
            replacer = '{<span style="color: red; font-weight: bold;">' + answerWord.word + '</span> | ';
            replacer += '<span style="color: green; font-weight: bold;">' + originalWord.word + '</span>}';
          } else {
            replacer = '{<span style="color: green; font-weight: bold;">' + originalWord.word + '</span>}';
          }

          answerText = answerText.replace(search, replacer);
        }
      } else {
        answerText = this.answer.missing_word;

        for (var _i = 0; _i < questionMissingWordsLength; _i++) {
          var _originalWord = this.questionMissingWords[_i];

          var _search = '{' + _originalWord.word + '}';

          var _replacer = '';
          _replacer = '{<span style="color: red; font-weight: bold;">-</span> | ';
          _replacer += '<span style="color: green; font-weight: bold;">' + _originalWord.word + '</span>}';
          answerText = answerText.replace(_search, _replacer);
        }
      }

      return answerText;
    },
    getAnswerText: function getAnswerText() {
      var answer = JSON.parse(this.answer.answer);

      if (answer && typeof answer.text !== 'undefined') {
        return answer.text;
      }

      return '-';
    },
    getMissingWords: function getMissingWords(str) {
      var regex = RegExp('\\{[A-Za-z0-9\\.\\s-]+\\}', 'g');
      var missingWords = [];
      var array;
      var index = 0;

      while ((array = regex.exec(str)) !== null) {
        var missingWord = array[0].substring(1).slice(0, -1);
        missingWords[index] = {
          word: missingWord,
          start: array.index,
          end: regex.lastIndex
        };
        index++;
      }

      return missingWords;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/MultipleCorrect.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/QuestionTypes/MultipleCorrect.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['answer'],
  components: {
    'single-grading': __webpack_require__(/*! ./Grading/Single.vue */ "./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue")["default"]
  },
  data: function data() {
    return {
      inAjaxCall: false,
      questionData: null
    };
  },
  computed: {
    answerOptions: function answerOptions() {
      var answer = JSON.parse(this.answer.answer);

      if (answer && typeof answer.options !== 'undefined' && answer.options.length > 0) {
        return answer.options;
      }

      return [];
    },
    maxPoints: function maxPoints() {
      var pointsObject = JSON.parse(this.answer.max_points);
      var maxPoints = 0;

      for (var key in pointsObject) {
        if (pointsObject.hasOwnProperty(key)) {
          maxPoints += parseInt(pointsObject[key]);
        }
      }

      return maxPoints;
    },
    grade: function grade() {
      return this.answer.grade ? parseInt(this.answer.grade) : this.maxPoints;
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.show()) {
      this.getQuestionData(this.answer.activity_item_id, function (data) {
        _this.questionData = data;
      });
    }
  },
  methods: {
    getQuestionDataFromData: function getQuestionDataFromData() {
      return this.questionData;
    },
    isAnswered: function isAnswered(id) {
      return this.answerOptions.filter(function (option) {
        return parseInt(option) === parseInt(id);
      }).length > 0;
    },
    show: function show() {
      return this.$parent.isMultipleCorrectAnswers();
    },
    showAlert: function showAlert(message) {
      this.$parent.showAlert(message);
    },
    markGraded: function markGraded(answerId, grade) {
      this.$parent.markGraded(answerId, grade);
    },
    getQuestionData: function getQuestionData(activityItemId, callback) {
      this.$http.get('/api/grading/get-question-data/' + activityItemId).then(function (response) {
        callback(response.body);
      }, function (response) {
        callback(null);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/OneCorrect.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/QuestionTypes/OneCorrect.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['answer'],
  components: {
    'single-grading': __webpack_require__(/*! ./Grading/Single.vue */ "./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue")["default"]
  },
  data: function data() {
    return {
      inAjaxCall: false,
      questionData: null
    };
  },
  computed: {
    answerOption: function answerOption() {
      var answer = JSON.parse(this.answer.answer);

      if (answer && typeof answer.options !== 'undefined' && answer.options.length > 0) {
        return answer.options[0];
      }

      return '-';
    },
    maxPoints: function maxPoints() {
      var pointsObject = JSON.parse(this.answer.max_points);

      for (var key in pointsObject) {
        if (pointsObject.hasOwnProperty(key)) {
          return parseInt(pointsObject[key]);
        }
      }

      return 0;
    },
    grade: function grade() {
      return this.answer.grade ? parseInt(this.answer.grade) : this.maxPoints;
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.show()) {
      this.getQuestionData(this.answer.activity_item_id, function (data) {
        _this.questionData = data;
      });
    }
  },
  methods: {
    getQuestionDataFromData: function getQuestionDataFromData() {
      return this.questionData;
    },
    show: function show() {
      return this.$parent.isOneCorrectAnswer();
    },
    showAlert: function showAlert(message) {
      this.$parent.showAlert(message);
    },
    markGraded: function markGraded(answerId, grade) {
      this.$parent.markGraded(answerId, grade);
    },
    getQuestionData: function getQuestionData(activityItemId, callback) {
      this.$http.get('/api/grading/get-question-data/' + activityItemId).then(function (response) {
        callback(response.body);
      }, function (response) {
        callback(null);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/Photo.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/QuestionTypes/Photo.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['answer'],
  components: {
    'single-grading': __webpack_require__(/*! ./Grading/Single.vue */ "./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue")["default"]
  },
  data: function data() {
    return {
      inAjaxCall: false,
      image: this.answer.answer_image ? '/uploads/images/activities/' + this.answer.activity_id + '/' + this.answer.game_id + '/' + this.answer.answer_image : null
    };
  },
  computed: {
    answerText: function answerText() {
      var answer = JSON.parse(this.answer.answer);

      if (answer && typeof answer.text !== 'undefined') {
        return answer.text;
      }

      return '-';
    },
    maxPoints: function maxPoints() {
      return parseInt(this.answer.max_points);
    },
    grade: function grade() {
      return this.answer.grade ? parseInt(this.answer.grade) : this.maxPoints;
    }
  },
  methods: {
    show: function show() {
      return this.$parent.isPhoto();
    },
    showAlert: function showAlert(message) {
      this.$parent.showAlert(message);
    },
    markGraded: function markGraded(answerId, grade) {
      this.$parent.markGraded(answerId, grade);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/vue-plain-pagination.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/vue-plain-pagination.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var defaultClasses = {
  ul: 'pagination',
  li: 'pagination-item',
  liActive: 'pagination-item--active',
  liDisable: 'pagination-item--disable',
  button: 'pagination-link',
  buttonActive: 'pagination-link--active',
  buttonDisable: 'pagination-link--disable'
};
var defaultLabels = {
  first: '&laquo;',
  prev: '&lsaquo;',
  next: '&rsaquo;',
  last: '&raquo;'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    value: {
      // current page
      type: Number,
      required: true
    },
    pageCount: {
      // page numbers
      type: Number,
      required: true
    },
    generateUrl: {
      type: Function,
      required: true
    },
    classes: {
      type: Object,
      required: false,
      "default": function _default() {
        return {};
      }
    },
    labels: {
      type: Object,
      required: false,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      paginationClasses: _objectSpread({}, defaultClasses, {}, this.classes),
      paginationLabels: _objectSpread({}, defaultLabels, {}, this.labels)
    };
  },
  mounted: function mounted() {
    if (this.value > this.pageCount) {
      this.$emit('input', this.pageCount);
    }
  },
  computed: {
    items: function items() {
      var valPrev = this.value > 1 ? this.value - 1 : 1; // for easier navigation - gives one previous page

      var valNext = this.value < this.pageCount ? this.value + 1 : this.pageCount; // one next page

      var extraPrev = valPrev === 3 ? 2 : null;
      var extraNext = valNext === this.pageCount - 2 ? this.pageCount - 1 : null;
      var dotsBefore = valPrev > 3 ? 2 : null;
      var dotsAfter = valNext < this.pageCount - 2 ? this.pageCount - 1 : null;
      var output = [];

      for (var i = 1; i <= this.pageCount; i += 1) {
        if ([1, this.pageCount, this.value, valPrev, valNext, extraPrev, extraNext, dotsBefore, dotsAfter].includes(i)) {
          output.push({
            label: i,
            active: this.value === i,
            disable: [dotsBefore, dotsAfter].includes(i)
          });
        }
      }

      return output;
    },
    hasFirst: function hasFirst() {
      return this.value === 1;
    },
    hasLast: function hasLast() {
      return this.value === this.pageCount;
    }
  },
  watch: {
    value: function value() {
      this.$emit('change');
    }
  },
  methods: {
    first: function first(e) {
      e.preventDefault();

      if (!this.hasFirst) {
        this.$emit('input', 1);
      }

      return false;
    },
    prev: function prev(e) {
      e.preventDefault();

      if (!this.hasFirst) {
        this.$emit('input', this.value - 1);
      }

      return false;
    },
    "goto": function goto(page, e) {
      e.preventDefault();
      this.$emit('input', page);
      return false;
    },
    next: function next(e) {
      e.preventDefault();

      if (!this.hasLast) {
        this.$emit('input', this.value + 1);
      }

      return false;
    },
    last: function last(e) {
      e.preventDefault();

      if (!this.hasLast) {
        this.$emit('input', this.pageCount);
      }

      return false;
    },
    getHref: function getHref(page) {
      return this.generateUrl(page);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/FormElementSwitch.vue?vue&type=style&index=0&id=19482fc5&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/FormElementSwitch.vue?vue&type=style&index=0&id=19482fc5&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.switch[data-v-19482fc5] {\n    position: relative;\n    display: inline-block;\n    width: 50px;\n    height: 25px;\n}\n.switch input[data-v-19482fc5] {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n.slider[data-v-19482fc5] {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n.slider[data-v-19482fc5]:before {\n    position: absolute;\n    content: \"\";\n    height: 18px;\n    width: 20px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\ninput:checked + .slider[data-v-19482fc5] {\n    background-color: #f57c35;\n}\ninput:focus + .slider[data-v-19482fc5] {\n    box-shadow: 0 0 1px #f57c35;\n}\ninput:checked + .slider[data-v-19482fc5]:before {\n    -webkit-transform: translateX(21px);\n    transform: translateX(21px);\n}\n\n/* Rounded sliders */\n.slider.round[data-v-19482fc5] {\n    border-radius: 34px;\n}\n.slider.round[data-v-19482fc5]:before {\n    border-radius: 50%;\n}\n.switch-text[data-v-19482fc5] {\n    cursor: pointer;\n    padding: 15px 5px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/GradingEdit.vue?vue&type=style&index=0&id=e6894588&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/GradingEdit.vue?vue&type=style&index=0&id=e6894588&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.question-title[data-v-e6894588] {\n    padding: 5px 0;\n    display: block;\n}\n.activity-title[data-v-e6894588] {\n    font-size: 14px;\n}\n.bottom-padding[data-v-e6894588] {\n    padding-bottom: 15px;\n}\n.image[data-v-e6894588] {\n    max-width: 100%;\n}\n.alert-text[data-v-e6894588] {\n    padding: 6px 15px 6px 6px;\n}\n.previous-grade[data-v-e6894588] {\n    float: left;\n    font-size: 25px;\n    padding: 15px;\n}\n.previous-grade-info[data-v-e6894588] {\n    float: left;\n    padding: 0 15px;\n    max-width: 75%;\n}\n.previous-grade-answer[data-v-e6894588] {\n    font-size: 18px;\n}\n.previous-grade-user[data-v-e6894588] {\n    font-size: 12px;\n}\n.previous-grade-actions[data-v-e6894588] {\n    float: right;\n    padding: 17px 0px;\n}\n@media (max-width: 600px) {\n.previous-grade[data-v-e6894588],\n    .previous-grade-info[data-v-e6894588],\n    .previous-grade-actions[data-v-e6894588],\n    .previous-grade-actions .btn[data-v-e6894588] {\n        float: none;\n        width: 100%;\n        max-width: 100%;\n}\n.previous-grade[data-v-e6894588],\n    .previous-grade-actions .btn[data-v-e6894588] {\n        text-align: center;\n}\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/GradingList.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/GradingList.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.pagination-container {\n    padding: 36px 0;\n    position: relative;\n}\n.pagination-container .pagination {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    margin-left: -95px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/GradingListItem.vue?vue&type=style&index=0&id=1b1e10fa&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/GradingListItem.vue?vue&type=style&index=0&id=1b1e10fa&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.media .media-left[data-v-1b1e10fa] {\n    position: relative;\n}\n.media .media-left .grade-container[data-v-1b1e10fa] {\n    padding-top: 15px;\n}\n.media .media-left .grade-container .grade-label[data-v-1b1e10fa] {\n    color: green;\n    font-weight: bold;\n    text-align: center;\n    text-transform: uppercase;\n}\n.media .media-left .grade-container .grade[data-v-1b1e10fa] {\n    text-align: center;\n}\n.question-title[data-v-1b1e10fa] {\n    padding: 5px 0;\n    display: block;\n}\n.activity-title[data-v-1b1e10fa] {\n    font-size: 14px;\n}\n.mdi-school[data-v-1b1e10fa] {\n    line-height: 36px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue?vue&type=style&index=0&id=3eb06a9e&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue?vue&type=style&index=0&id=3eb06a9e&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.grade-input[data-v-3eb06a9e] {\n    width: 100px;\n    margin-right: 15px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/MatchPairs.vue?vue&type=style&index=0&id=4c3f1f42&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/QuestionTypes/MatchPairs.vue?vue&type=style&index=0&id=4c3f1f42&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.image[data-v-4c3f1f42] {\n    max-width: 150px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/MultipleCorrect.vue?vue&type=style&index=0&id=9d37f208&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/QuestionTypes/MultipleCorrect.vue?vue&type=style&index=0&id=9d37f208&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.image[data-v-9d37f208] {\n    max-width: 150px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/Photo.vue?vue&type=style&index=0&id=6c172518&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/QuestionTypes/Photo.vue?vue&type=style&index=0&id=6c172518&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.image[data-v-6c172518] {\n    max-width: 100%;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/vue-plain-pagination.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/vue-plain-pagination.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css');*/\n", ""]);
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

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/FormElementSwitch.vue?vue&type=template&id=19482fc5&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/FormElementSwitch.vue?vue&type=template&id=19482fc5&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "switch-container" }, [
    typeof _vm.label !== "undefined"
      ? _c(
          "span",
          { staticClass: "switch-text", on: { click: _vm.onLabelClick } },
          [_vm._v(_vm._s(_vm.label))]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("label", { staticClass: "switch" }, [
      _c("input", {
        ref: "input",
        attrs: { type: "checkbox" },
        on: { change: _vm.onChange }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "slider round" })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/GradingEdit.vue?vue&type=template&id=e6894588&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/GradingEdit.vue?vue&type=template&id=e6894588&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.viewType === "edit" && _vm.answer != null
    ? _c("div", { staticClass: "panel panel-default" }, [
        _c("div", { staticClass: "panel-heading" }, [
          _vm._v("\n        " + _vm._s(_vm.answer.title) + "\n    ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "panel-body" }, [
          _c("div", { staticClass: "media sz-author" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "media-body" }, [
              _c("div", [
                _vm._v(_vm._s(_vm.answer.user_name || _vm.answer.nickname))
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "sz-date" }, [
                _c("i", {
                  staticClass: "mdi mdi-clock",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.answer.created_at) +
                    "\n                "
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "media-body" }, [
            _c("div", { staticClass: "media-heading" }, [
              _c("div", { staticClass: "col-xs-12" }, [
                _c("div", { staticClass: "row" }, [
                  _c("h4", { staticClass: "question-title" }, [
                    _vm._v(_vm._s(_vm.$t("pages.grading.index.question-type")))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "activity-title" }, [
                    _vm._v(_vm._s(this.getQuestionTypeTranslation()))
                  ]),
                  _vm._v(" "),
                  _vm.image != null
                    ? _c("img", {
                        staticClass: "image",
                        attrs: { src: _vm.image }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.answer.description.length > 0
                    ? _c("div", [
                        _c("h4", [
                          _vm._v(
                            _vm._s(
                              _vm.$t(
                                "pages.grading.index.heading-question-information"
                              )
                            )
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.answer.description) +
                              "\n                            "
                          )
                        ])
                      ])
                    : _vm._e()
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            [
              _vm.isFreeformAnswer()
                ? _c("freeform", { attrs: { answer: _vm.answer } })
                : _vm._e(),
              _vm._v(" "),
              _vm.isPhoto()
                ? _c("photo", { attrs: { answer: _vm.answer } })
                : _vm._e(),
              _vm._v(" "),
              _vm.isOneCorrectAnswer()
                ? _c("one-correct", {
                    ref: "oneCorrectComponent",
                    attrs: { answer: _vm.answer }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.isMissingWord()
                ? _c("missing-word", { attrs: { answer: _vm.answer } })
                : _vm._e(),
              _vm._v(" "),
              _vm.isMultipleCorrectAnswers()
                ? _c("multiple-correct", {
                    ref: "multipleCorrectComponent",
                    attrs: { answer: _vm.answer }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.isMatchPairs()
                ? _c("match-pairs", { attrs: { answer: _vm.answer } })
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _vm.alertSuccessMessage != null
            ? _c("div", { staticClass: "alert alert-success pull-left" }, [
                _c("span", { staticClass: "pull-left alert-text" }, [
                  _vm._v(_vm._s(_vm.alertSuccessMessage))
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-primary pull-left",
                    attrs: { href: "/grading" },
                    on: { click: _vm.onClickGoBackToList }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.$t("pages.grading.index.go-back-to-list")) +
                        "\n            "
                    )
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.otherAnswers.length > 0
            ? _c(
                "h4",
                {
                  staticClass: "previous-grades",
                  staticStyle: { clear: "both" }
                },
                [
                  _vm._v(
                    _vm._s(
                      _vm.$t("pages.grading.index.heading-previous-grades")
                    )
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "previous-grades-container" },
            _vm._l(_vm.otherAnswers, function(otherAnswer) {
              return _c("div", { staticClass: "panel panel-default" }, [
                _c("div", { staticClass: "panel-body" }, [
                  _c("div", { staticClass: "previous-grade" }, [
                    _vm._v(_vm._s(otherAnswer.grade))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "previous-grade-info" }, [
                    _c("p", { staticClass: "previous-grade-answer" }, [
                      _vm._v(_vm._s(_vm.getOtherAnswerAnswer(otherAnswer)))
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "previous-grade-user" }, [
                      _vm._v(_vm._s(otherAnswer.user_name))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "previous-grade-actions" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-default",
                        attrs: {
                          href:
                            "/grading/" +
                            _vm.answer.activity_id +
                            "/" +
                            otherAnswer.id +
                            "/edit"
                        },
                        on: {
                          click: function($event) {
                            return _vm.openOtherAnswerDetail(
                              otherAnswer.id,
                              this.event
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.$t("pages.grading.index.details-btn"))
                        )
                      ]
                    )
                  ])
                ])
              ])
            }),
            0
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "media-left" }, [
      _c("i", {
        staticClass: "mdi mdi-account-circle",
        attrs: { "aria-hidden": "true" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/GradingList.vue?vue&type=template&id=7d7335d0&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/GradingList.vue?vue&type=template&id=7d7335d0& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
    [
      _vm.viewType === "list"
        ? _c("div", { staticClass: "panel panel-default" }, [
            _c("div", { staticClass: "panel-heading" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-xs-12 col-md-6" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$t("pages.grading.index.heading")) +
                      "\n                "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-12 col-md-6" }, [
                  _c(
                    "div",
                    { staticClass: "pull-right" },
                    [
                      _c("form-element-switch", {
                        attrs: {
                          onSwitchChange: _vm.onSwitchChange,
                          label: _vm.$t("pages.grading.index.switch-label"),
                          defaultValue: _vm.showGraded
                        }
                      })
                    ],
                    1
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "panel-body", attrs: { id: "search-results" } },
              [
                _vm.answers.length === 0
                  ? _c("div", { staticClass: "well" }, [
                      _vm._v(_vm._s(_vm.$t("pages.grading.index.none-found")))
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.answers.length > 0
                  ? _c(
                      "div",
                      [
                        _vm._l(_vm.answersPerPage, function(answer, index) {
                          return _c("grading-list-item", {
                            key: index,
                            attrs: {
                              answer: answer,
                              isLast: index === _vm.answersPerPage.length - 1
                            },
                            on: { setData: _vm.setData }
                          })
                        }),
                        _vm._v(" "),
                        _vm.pages > 1
                          ? _c(
                              "div",
                              { staticClass: "pagination-container" },
                              [
                                _c("pagination", {
                                  attrs: {
                                    "page-count": _vm.pages,
                                    generateUrl: _vm.generatePaginationUrl,
                                    classes: _vm.bootstrapPaginationClasses,
                                    labels: _vm.paginationAnchorTexts
                                  },
                                  model: {
                                    value: _vm.paginationPage,
                                    callback: function($$v) {
                                      _vm.paginationPage = $$v
                                    },
                                    expression: "paginationPage"
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e()
                      ],
                      2
                    )
                  : _vm._e()
              ]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("grading-edit", {
        attrs: { viewType: _vm.viewType, answerId: _vm.currentAnswerId }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/GradingListItem.vue?vue&type=template&id=1b1e10fa&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/GradingListItem.vue?vue&type=template&id=1b1e10fa&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "media" }, [
    _c("div", { staticClass: "media-left" }, [
      _c("a", [
        _c("img", {
          staticClass: "media-object img-rounded sz-img-52x60",
          attrs: { src: _vm.getQuestionTypeImageUrl(), alt: "featured-image" }
        })
      ]),
      _vm._v(" "),
      _vm.answer.grade !== null
        ? _c("div", { staticClass: "grade-container" }, [
            _c("div", { staticClass: "grade-label" }, [
              _vm._v(_vm._s(_vm.$t("pages.grading.index.graded")))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "grade" }, [
              _vm._v(_vm._s(_vm.answer.grade) + "p")
            ])
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "media-body" }, [
      _c("h4", { staticClass: "media-heading" }, [
        _c("div", { staticClass: "col-xs-12 col-md-8" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "a",
              {
                staticClass: "question-title",
                attrs: { href: _vm.href },
                on: { click: _vm.onClickOpenEditView }
              },
              [_vm._v(_vm._s(_vm.answer.title))]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "activity-title" }, [
              _vm._v(_vm._s(_vm.answer.activity_title))
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-12 col-md-4" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "a",
              {
                staticClass: "pull-right btn btn-primary",
                attrs: { href: _vm.href },
                on: { click: _vm.onClickOpenEditView }
              },
              [
                _c("i", {
                  staticClass: "mdi mdi-school",
                  attrs: { "aria-hidden": "true" }
                })
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xs-12 col-sm-6" }, [
          _c("div", { staticClass: "media sz-author" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "media-body" }, [
              _c("div", [_vm._v(_vm._s(_vm.answer.user_name))]),
              _vm._v(" "),
              _c("div", { staticClass: "sz-date" }, [
                _c("i", {
                  staticClass: "mdi mdi-clock",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(
                  "\n                            " +
                    _vm._s(_vm.answer.created_at) +
                    "\n                        "
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xs-12 col-md-6" }, [
          _c("div", { staticClass: "sz-metadata" }, [
            _c("i", {
              staticClass: "mdi mdi-crosshairs",
              attrs: { "aria-hidden": "true" }
            }),
            _vm._v(
              "\n                    " +
                _vm._s(this.getQuestionTypeTranslation()) +
                "\n                "
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm.isLast === false ? _c("hr") : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "media-left" }, [
      _c("i", {
        staticClass: "mdi mdi-account-circle",
        attrs: { "aria-hidden": "true" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xs-12 col-md-6" }, [
        _c("div", { staticClass: "sz-metadata" }, [
          _c("i", {
            staticClass: "mdi mdi-translate",
            attrs: { "aria-hidden": "true" }
          }),
          _vm._v("\n                    English\n                ")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/Freeform.vue?vue&type=template&id=86cc2c44&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/QuestionTypes/Freeform.vue?vue&type=template&id=86cc2c44& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.show()
    ? _c(
        "div",
        [
          _c("h4", [
            _vm._v(_vm._s(_vm.$t("pages.grading.index.heading-answer")))
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("\n        " + _vm._s(_vm.answerText) + "\n    ")]),
          _vm._v(" "),
          _c("single-grading", {
            attrs: {
              maxGrade: _vm.maxPoints,
              answerId: _vm.answer.id,
              grade: _vm.grade
            }
          })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue?vue&type=template&id=3eb06a9e&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue?vue&type=template&id=3eb06a9e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("h4", [_vm._v(_vm._s(_vm.$t("pages.grading.index.heading-grade")))]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.inputGrade,
            expression: "inputGrade"
          }
        ],
        staticClass: "form-control pull-left grade-input",
        attrs: { type: "number", min: "1", required: "required" },
        domProps: { value: _vm.inputGrade },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.inputGrade = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c("input", {
        staticClass: "btn btn-primary",
        attrs: {
          value: _vm.$t("pages.grading.index.submit-grade"),
          type: "button"
        },
        on: { click: _vm.onButtonSubmit }
      }),
      _vm._v(" "),
      _c("div", [
        _vm._v(
          _vm._s(_vm.$t("pages.grading.index.grading-info")) +
            " " +
            _vm._s(_vm.maxGrade)
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/MatchPairs.vue?vue&type=template&id=4c3f1f42&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/QuestionTypes/MatchPairs.vue?vue&type=template&id=4c3f1f42&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.show()
    ? _c(
        "div",
        [
          _c("h4", [
            _vm._v(_vm._s(_vm.$t("pages.grading.index.heading-answer")))
          ]),
          _vm._v(" "),
          _c("table", { staticClass: "table table-bordered" }, [
            _c("thead", [
              _c("tr", [
                _c("th", [
                  _vm._v(
                    _vm._s(_vm.$t("pages.grading.index.answer_table.option"))
                  )
                ]),
                _vm._v(" "),
                _c("th", [
                  _vm._v(
                    _vm._s(_vm.$t("pages.grading.index.answer_table.image"))
                  )
                ]),
                _vm._v(" "),
                _c("th", [
                  _vm._v(
                    _vm._s(_vm.$t("pages.grading.index.answer_table.answer"))
                  )
                ]),
                _vm._v(" "),
                _c("th", [
                  _vm._v(
                    _vm._s(_vm.$t("pages.grading.index.answer_table.image"))
                  )
                ]),
                _vm._v(" "),
                _c("th", [
                  _vm._v(
                    _vm._s(_vm.$t("pages.grading.index.answer_table.points"))
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.questionData, function(data) {
                return _c("tr", [
                  _c("td", [_vm._v(_vm._s(data.option))]),
                  _vm._v(" "),
                  _c("td", [
                    data.image != null
                      ? _c("img", {
                          staticClass: "image",
                          attrs: { src: data.image_url }
                        })
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(data.option_match))]),
                  _vm._v(" "),
                  _c("td", [
                    data.image_match != null
                      ? _c("img", {
                          staticClass: "image",
                          attrs: { src: data.image_match_url }
                        })
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(data.points))])
                ])
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("single-grading", {
            attrs: {
              maxGrade: _vm.maxPoints,
              answerId: _vm.answer.id,
              grade: _vm.grade
            }
          })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/MissingWord.vue?vue&type=template&id=ca3efb5c&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/QuestionTypes/MissingWord.vue?vue&type=template&id=ca3efb5c& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.show()
    ? _c(
        "div",
        [
          _c("br"),
          _vm._v(" "),
          _c("p", [_vm._v(_vm._s(_vm.answer.missing_word))]),
          _vm._v(" "),
          _c("h4", [
            _vm._v(_vm._s(_vm.$t("pages.grading.index.heading-answer")))
          ]),
          _vm._v(" "),
          _c("p", { domProps: { innerHTML: _vm._s(_vm.answerText) } }),
          _vm._v(" "),
          _c("single-grading", {
            attrs: {
              maxGrade: _vm.maxPoints,
              answerId: _vm.answer.id,
              grade: _vm.grade
            }
          })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/MultipleCorrect.vue?vue&type=template&id=9d37f208&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/QuestionTypes/MultipleCorrect.vue?vue&type=template&id=9d37f208&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.show()
    ? _c(
        "div",
        [
          _c("h4", [
            _vm._v(_vm._s(_vm.$t("pages.grading.index.heading-answer")))
          ]),
          _vm._v(" "),
          _c("table", { staticClass: "table table-bordered" }, [
            _c("thead", [
              _c("tr", [
                _c("th", [
                  _vm._v(
                    _vm._s(_vm.$t("pages.grading.index.answer_table.option"))
                  )
                ]),
                _vm._v(" "),
                _c("th", [
                  _vm._v(
                    _vm._s(_vm.$t("pages.grading.index.answer_table.image"))
                  )
                ]),
                _vm._v(" "),
                _c("th", [
                  _vm._v(
                    _vm._s(_vm.$t("pages.grading.index.answer_table.correct"))
                  )
                ]),
                _vm._v(" "),
                _c("th", [
                  _vm._v(
                    _vm._s(_vm.$t("pages.grading.index.answer_table.answer"))
                  )
                ]),
                _vm._v(" "),
                _c("th", [
                  _vm._v(
                    _vm._s(_vm.$t("pages.grading.index.answer_table.points"))
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.questionData, function(data) {
                return _c("tr", [
                  _c("td", [_vm._v(_vm._s(data.option))]),
                  _vm._v(" "),
                  _c("td", [
                    data.image != null
                      ? _c("img", {
                          staticClass: "image",
                          attrs: { src: data.image_url }
                        })
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      attrs: {
                        type: "checkbox",
                        name: "correct",
                        tabindex: "-1",
                        disabled: "disabled"
                      },
                      domProps: { checked: data.correct }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      attrs: {
                        type: "checkbox",
                        name: "answer",
                        tabindex: "-1",
                        disabled: "disabled"
                      },
                      domProps: { checked: _vm.isAnswered(data.id) }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(data.points))])
                ])
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("single-grading", {
            attrs: {
              maxGrade: _vm.maxPoints,
              answerId: _vm.answer.id,
              grade: _vm.grade
            }
          })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/OneCorrect.vue?vue&type=template&id=748c4852&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/QuestionTypes/OneCorrect.vue?vue&type=template&id=748c4852& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.show()
    ? _c(
        "div",
        [
          _c("h4", [
            _vm._v(_vm._s(_vm.$t("pages.grading.index.heading-answer")))
          ]),
          _vm._v(" "),
          _c("table", { staticClass: "table table-bordered" }, [
            _c("thead", [
              _c("tr", [
                _c("th", [
                  _vm._v(
                    _vm._s(_vm.$t("pages.grading.index.answer_table.option"))
                  )
                ]),
                _vm._v(" "),
                _c("th", [
                  _vm._v(
                    _vm._s(_vm.$t("pages.grading.index.answer_table.correct"))
                  )
                ]),
                _vm._v(" "),
                _c("th", [
                  _vm._v(
                    _vm._s(_vm.$t("pages.grading.index.answer_table.answer"))
                  )
                ]),
                _vm._v(" "),
                _c("th", [
                  _vm._v(
                    _vm._s(_vm.$t("pages.grading.index.answer_table.points"))
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.questionData, function(data) {
                return _c("tr", [
                  _c("td", [_vm._v(_vm._s(data.option))]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      attrs: {
                        type: "checkbox",
                        name: "correct",
                        tabindex: "-1",
                        disabled: "disabled"
                      },
                      domProps: { checked: data.correct }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      attrs: {
                        type: "checkbox",
                        name: "answer",
                        tabindex: "-1",
                        disabled: "disabled"
                      },
                      domProps: { checked: data.id === _vm.answerOption }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(data.points))])
                ])
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("single-grading", {
            attrs: {
              maxGrade: _vm.maxPoints,
              answerId: _vm.answer.id,
              grade: _vm.grade
            }
          })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/Photo.vue?vue&type=template&id=6c172518&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/QuestionTypes/Photo.vue?vue&type=template&id=6c172518&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.show()
    ? _c(
        "div",
        [
          _c("h4", [
            _vm._v(_vm._s(_vm.$t("pages.grading.index.heading-answer")))
          ]),
          _vm._v(" "),
          _vm.image != null
            ? _c("img", { staticClass: "image", attrs: { src: _vm.image } })
            : _vm._e(),
          _vm._v(" "),
          _c("single-grading", {
            attrs: {
              maxGrade: _vm.maxPoints,
              answerId: _vm.answer.id,
              grade: _vm.grade
            }
          })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/vue-plain-pagination.vue?vue&type=template&id=17e0a50a&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/vue-plain-pagination.vue?vue&type=template&id=17e0a50a& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.pageCount > 0
    ? _c(
        "ul",
        { class: _vm.paginationClasses.ul, attrs: { role: "navigation" } },
        [
          _vm.paginationLabels.first
            ? _c(
                "li",
                {
                  class:
                    _vm.paginationClasses.li +
                    " " +
                    (_vm.hasFirst ? _vm.paginationClasses.liDisable : "")
                },
                [
                  _c("a", {
                    class:
                      _vm.paginationClasses.button +
                      " " +
                      (_vm.hasFirst ? _vm.paginationClasses.buttonDisable : ""),
                    attrs: { href: _vm.getHref(1), disabled: _vm.hasFirst },
                    domProps: { innerHTML: _vm._s(_vm.paginationLabels.first) },
                    on: { click: _vm.first }
                  })
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.paginationLabels.prev
            ? _c(
                "li",
                {
                  class:
                    _vm.paginationClasses.li +
                    " " +
                    (_vm.hasFirst ? _vm.paginationClasses.liDisable : "")
                },
                [
                  _c("a", {
                    class:
                      _vm.paginationClasses.button +
                      " " +
                      (_vm.hasFirst ? _vm.paginationClasses.buttonDisable : ""),
                    attrs: {
                      href: _vm.getHref(_vm.value - 1),
                      disabled: _vm.hasFirst
                    },
                    domProps: { innerHTML: _vm._s(_vm.paginationLabels.prev) },
                    on: { click: _vm.prev }
                  })
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.items, function(page) {
            return _c(
              "li",
              {
                key: page.label,
                class:
                  _vm.paginationClasses.li +
                  " " +
                  (page.active ? _vm.paginationClasses.liActive : "") +
                  " " +
                  (page.disable ? _vm.paginationClasses.liDisable : "")
              },
              [
                page.disable
                  ? _c(
                      "span",
                      {
                        class:
                          _vm.paginationClasses.button +
                          " " +
                          _vm.paginationClasses.buttonDisable
                      },
                      [_vm._v("\n    ...\n  ")]
                    )
                  : _c(
                      "a",
                      {
                        class:
                          _vm.paginationClasses.button +
                          " " +
                          (page.active
                            ? _vm.paginationClasses.buttonActive
                            : ""),
                        attrs: { href: _vm.getHref(page.label) },
                        on: {
                          click: function($event) {
                            return _vm.goto(page.label, this.event)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n            " + _vm._s(page.label) + "\n        "
                        )
                      ]
                    )
              ]
            )
          }),
          _vm._v(" "),
          _vm.paginationLabels.next
            ? _c(
                "li",
                {
                  class:
                    _vm.paginationClasses.li +
                    " " +
                    (_vm.hasLast ? _vm.paginationClasses.liDisable : "")
                },
                [
                  _c("a", {
                    class:
                      _vm.paginationClasses.button +
                      " " +
                      (_vm.hasLast ? _vm.paginationClasses.buttonDisable : ""),
                    attrs: {
                      href: _vm.getHref(parseInt(_vm.value) + 1),
                      disabled: _vm.hasLast
                    },
                    domProps: { innerHTML: _vm._s(_vm.paginationLabels.next) },
                    on: { click: _vm.next }
                  })
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.paginationLabels.last
            ? _c(
                "li",
                {
                  class:
                    _vm.paginationClasses.li +
                    " " +
                    (_vm.hasLast ? _vm.paginationClasses.liDisable : "")
                },
                [
                  _c("a", {
                    class:
                      _vm.paginationClasses.button +
                      " " +
                      (_vm.hasLast ? _vm.paginationClasses.buttonDisable : ""),
                    attrs: {
                      href: _vm.getHref(_vm.pageCount),
                      disabled: _vm.hasLast
                    },
                    domProps: { innerHTML: _vm._s(_vm.paginationLabels.last) },
                    on: { click: _vm.last }
                  })
                ]
              )
            : _vm._e()
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/FormElementSwitch.vue?vue&type=style&index=0&id=19482fc5&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/FormElementSwitch.vue?vue&type=style&index=0&id=19482fc5&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormElementSwitch.vue?vue&type=style&index=0&id=19482fc5&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/FormElementSwitch.vue?vue&type=style&index=0&id=19482fc5&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/GradingEdit.vue?vue&type=style&index=0&id=e6894588&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/GradingEdit.vue?vue&type=style&index=0&id=e6894588&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradingEdit.vue?vue&type=style&index=0&id=e6894588&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/GradingEdit.vue?vue&type=style&index=0&id=e6894588&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/GradingList.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/GradingList.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradingList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/GradingList.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/GradingListItem.vue?vue&type=style&index=0&id=1b1e10fa&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/GradingListItem.vue?vue&type=style&index=0&id=1b1e10fa&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradingListItem.vue?vue&type=style&index=0&id=1b1e10fa&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/GradingListItem.vue?vue&type=style&index=0&id=1b1e10fa&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue?vue&type=style&index=0&id=3eb06a9e&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue?vue&type=style&index=0&id=3eb06a9e&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Single.vue?vue&type=style&index=0&id=3eb06a9e&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue?vue&type=style&index=0&id=3eb06a9e&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/MatchPairs.vue?vue&type=style&index=0&id=4c3f1f42&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/QuestionTypes/MatchPairs.vue?vue&type=style&index=0&id=4c3f1f42&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MatchPairs.vue?vue&type=style&index=0&id=4c3f1f42&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/MatchPairs.vue?vue&type=style&index=0&id=4c3f1f42&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/MultipleCorrect.vue?vue&type=style&index=0&id=9d37f208&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/QuestionTypes/MultipleCorrect.vue?vue&type=style&index=0&id=9d37f208&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MultipleCorrect.vue?vue&type=style&index=0&id=9d37f208&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/MultipleCorrect.vue?vue&type=style&index=0&id=9d37f208&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/Photo.vue?vue&type=style&index=0&id=6c172518&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Grading/QuestionTypes/Photo.vue?vue&type=style&index=0&id=6c172518&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Photo.vue?vue&type=style&index=0&id=6c172518&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/Photo.vue?vue&type=style&index=0&id=6c172518&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/vue-plain-pagination.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/vue-plain-pagination.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./vue-plain-pagination.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/vue-plain-pagination.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./resources/assets/js/components/FormElementSwitch.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/js/components/FormElementSwitch.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormElementSwitch_vue_vue_type_template_id_19482fc5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormElementSwitch.vue?vue&type=template&id=19482fc5&scoped=true& */ "./resources/assets/js/components/FormElementSwitch.vue?vue&type=template&id=19482fc5&scoped=true&");
/* harmony import */ var _FormElementSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormElementSwitch.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/FormElementSwitch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FormElementSwitch_vue_vue_type_style_index_0_id_19482fc5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormElementSwitch.vue?vue&type=style&index=0&id=19482fc5&scoped=true&lang=css& */ "./resources/assets/js/components/FormElementSwitch.vue?vue&type=style&index=0&id=19482fc5&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FormElementSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormElementSwitch_vue_vue_type_template_id_19482fc5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormElementSwitch_vue_vue_type_template_id_19482fc5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "19482fc5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/FormElementSwitch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/FormElementSwitch.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/FormElementSwitch.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormElementSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormElementSwitch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/FormElementSwitch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormElementSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/FormElementSwitch.vue?vue&type=style&index=0&id=19482fc5&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/assets/js/components/FormElementSwitch.vue?vue&type=style&index=0&id=19482fc5&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormElementSwitch_vue_vue_type_style_index_0_id_19482fc5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormElementSwitch.vue?vue&type=style&index=0&id=19482fc5&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/FormElementSwitch.vue?vue&type=style&index=0&id=19482fc5&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormElementSwitch_vue_vue_type_style_index_0_id_19482fc5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormElementSwitch_vue_vue_type_style_index_0_id_19482fc5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormElementSwitch_vue_vue_type_style_index_0_id_19482fc5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormElementSwitch_vue_vue_type_style_index_0_id_19482fc5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormElementSwitch_vue_vue_type_style_index_0_id_19482fc5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/FormElementSwitch.vue?vue&type=template&id=19482fc5&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/js/components/FormElementSwitch.vue?vue&type=template&id=19482fc5&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormElementSwitch_vue_vue_type_template_id_19482fc5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormElementSwitch.vue?vue&type=template&id=19482fc5&scoped=true& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/FormElementSwitch.vue?vue&type=template&id=19482fc5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormElementSwitch_vue_vue_type_template_id_19482fc5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormElementSwitch_vue_vue_type_template_id_19482fc5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/Grading/GradingEdit.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/js/components/Grading/GradingEdit.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradingEdit_vue_vue_type_template_id_e6894588_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradingEdit.vue?vue&type=template&id=e6894588&scoped=true& */ "./resources/assets/js/components/Grading/GradingEdit.vue?vue&type=template&id=e6894588&scoped=true&");
/* harmony import */ var _GradingEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradingEdit.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Grading/GradingEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GradingEdit_vue_vue_type_style_index_0_id_e6894588_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradingEdit.vue?vue&type=style&index=0&id=e6894588&scoped=true&lang=css& */ "./resources/assets/js/components/Grading/GradingEdit.vue?vue&type=style&index=0&id=e6894588&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GradingEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GradingEdit_vue_vue_type_template_id_e6894588_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GradingEdit_vue_vue_type_template_id_e6894588_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e6894588",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Grading/GradingEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Grading/GradingEdit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/GradingEdit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradingEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/GradingEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Grading/GradingEdit.vue?vue&type=style&index=0&id=e6894588&scoped=true&lang=css&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/GradingEdit.vue?vue&type=style&index=0&id=e6894588&scoped=true&lang=css& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingEdit_vue_vue_type_style_index_0_id_e6894588_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradingEdit.vue?vue&type=style&index=0&id=e6894588&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/GradingEdit.vue?vue&type=style&index=0&id=e6894588&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingEdit_vue_vue_type_style_index_0_id_e6894588_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingEdit_vue_vue_type_style_index_0_id_e6894588_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingEdit_vue_vue_type_style_index_0_id_e6894588_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingEdit_vue_vue_type_style_index_0_id_e6894588_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingEdit_vue_vue_type_style_index_0_id_e6894588_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/Grading/GradingEdit.vue?vue&type=template&id=e6894588&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/GradingEdit.vue?vue&type=template&id=e6894588&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingEdit_vue_vue_type_template_id_e6894588_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradingEdit.vue?vue&type=template&id=e6894588&scoped=true& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/GradingEdit.vue?vue&type=template&id=e6894588&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingEdit_vue_vue_type_template_id_e6894588_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingEdit_vue_vue_type_template_id_e6894588_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/Grading/GradingList.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/js/components/Grading/GradingList.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradingList_vue_vue_type_template_id_7d7335d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradingList.vue?vue&type=template&id=7d7335d0& */ "./resources/assets/js/components/Grading/GradingList.vue?vue&type=template&id=7d7335d0&");
/* harmony import */ var _GradingList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradingList.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Grading/GradingList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GradingList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradingList.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/components/Grading/GradingList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GradingList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GradingList_vue_vue_type_template_id_7d7335d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GradingList_vue_vue_type_template_id_7d7335d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Grading/GradingList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Grading/GradingList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/GradingList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradingList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/GradingList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Grading/GradingList.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/GradingList.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradingList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/GradingList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/Grading/GradingList.vue?vue&type=template&id=7d7335d0&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/GradingList.vue?vue&type=template&id=7d7335d0& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingList_vue_vue_type_template_id_7d7335d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradingList.vue?vue&type=template&id=7d7335d0& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/GradingList.vue?vue&type=template&id=7d7335d0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingList_vue_vue_type_template_id_7d7335d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingList_vue_vue_type_template_id_7d7335d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/Grading/GradingListItem.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/components/Grading/GradingListItem.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradingListItem_vue_vue_type_template_id_1b1e10fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradingListItem.vue?vue&type=template&id=1b1e10fa&scoped=true& */ "./resources/assets/js/components/Grading/GradingListItem.vue?vue&type=template&id=1b1e10fa&scoped=true&");
/* harmony import */ var _GradingListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradingListItem.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Grading/GradingListItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GradingListItem_vue_vue_type_style_index_0_id_1b1e10fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradingListItem.vue?vue&type=style&index=0&id=1b1e10fa&scoped=true&lang=css& */ "./resources/assets/js/components/Grading/GradingListItem.vue?vue&type=style&index=0&id=1b1e10fa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GradingListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GradingListItem_vue_vue_type_template_id_1b1e10fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GradingListItem_vue_vue_type_template_id_1b1e10fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1b1e10fa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Grading/GradingListItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Grading/GradingListItem.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/GradingListItem.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradingListItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/GradingListItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Grading/GradingListItem.vue?vue&type=style&index=0&id=1b1e10fa&scoped=true&lang=css&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/GradingListItem.vue?vue&type=style&index=0&id=1b1e10fa&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingListItem_vue_vue_type_style_index_0_id_1b1e10fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradingListItem.vue?vue&type=style&index=0&id=1b1e10fa&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/GradingListItem.vue?vue&type=style&index=0&id=1b1e10fa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingListItem_vue_vue_type_style_index_0_id_1b1e10fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingListItem_vue_vue_type_style_index_0_id_1b1e10fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingListItem_vue_vue_type_style_index_0_id_1b1e10fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingListItem_vue_vue_type_style_index_0_id_1b1e10fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingListItem_vue_vue_type_style_index_0_id_1b1e10fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/Grading/GradingListItem.vue?vue&type=template&id=1b1e10fa&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/GradingListItem.vue?vue&type=template&id=1b1e10fa&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingListItem_vue_vue_type_template_id_1b1e10fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradingListItem.vue?vue&type=template&id=1b1e10fa&scoped=true& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/GradingListItem.vue?vue&type=template&id=1b1e10fa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingListItem_vue_vue_type_template_id_1b1e10fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingListItem_vue_vue_type_template_id_1b1e10fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/Grading/QuestionTypes/Freeform.vue":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/QuestionTypes/Freeform.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Freeform_vue_vue_type_template_id_86cc2c44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Freeform.vue?vue&type=template&id=86cc2c44& */ "./resources/assets/js/components/Grading/QuestionTypes/Freeform.vue?vue&type=template&id=86cc2c44&");
/* harmony import */ var _Freeform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Freeform.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Grading/QuestionTypes/Freeform.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Freeform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Freeform_vue_vue_type_template_id_86cc2c44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Freeform_vue_vue_type_template_id_86cc2c44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Grading/QuestionTypes/Freeform.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Grading/QuestionTypes/Freeform.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/QuestionTypes/Freeform.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Freeform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Freeform.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/Freeform.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Freeform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Grading/QuestionTypes/Freeform.vue?vue&type=template&id=86cc2c44&":
/*!**********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/QuestionTypes/Freeform.vue?vue&type=template&id=86cc2c44& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Freeform_vue_vue_type_template_id_86cc2c44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Freeform.vue?vue&type=template&id=86cc2c44& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/Freeform.vue?vue&type=template&id=86cc2c44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Freeform_vue_vue_type_template_id_86cc2c44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Freeform_vue_vue_type_template_id_86cc2c44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Single_vue_vue_type_template_id_3eb06a9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Single.vue?vue&type=template&id=3eb06a9e&scoped=true& */ "./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue?vue&type=template&id=3eb06a9e&scoped=true&");
/* harmony import */ var _Single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Single.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Single_vue_vue_type_style_index_0_id_3eb06a9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Single.vue?vue&type=style&index=0&id=3eb06a9e&scoped=true&lang=css& */ "./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue?vue&type=style&index=0&id=3eb06a9e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Single_vue_vue_type_template_id_3eb06a9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Single_vue_vue_type_template_id_3eb06a9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3eb06a9e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Single.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue?vue&type=style&index=0&id=3eb06a9e&scoped=true&lang=css&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue?vue&type=style&index=0&id=3eb06a9e&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Single_vue_vue_type_style_index_0_id_3eb06a9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Single.vue?vue&type=style&index=0&id=3eb06a9e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue?vue&type=style&index=0&id=3eb06a9e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Single_vue_vue_type_style_index_0_id_3eb06a9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Single_vue_vue_type_style_index_0_id_3eb06a9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Single_vue_vue_type_style_index_0_id_3eb06a9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Single_vue_vue_type_style_index_0_id_3eb06a9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Single_vue_vue_type_style_index_0_id_3eb06a9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue?vue&type=template&id=3eb06a9e&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue?vue&type=template&id=3eb06a9e&scoped=true& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Single_vue_vue_type_template_id_3eb06a9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Single.vue?vue&type=template&id=3eb06a9e&scoped=true& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/Grading/Single.vue?vue&type=template&id=3eb06a9e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Single_vue_vue_type_template_id_3eb06a9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Single_vue_vue_type_template_id_3eb06a9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/Grading/QuestionTypes/Grading/gradingMixin.js":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/QuestionTypes/Grading/gradingMixin.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    getMaxGrade: function getMaxGrade() {
      return this.maxGrade;
    },
    getFinalGrade: function getFinalGrade() {
      return this.inputGrade;
    },
    canSubmit: function canSubmit() {
      var finalGrade = this.getFinalGrade();
      var maxGrade = this.getMaxGrade();
      return finalGrade !== '' && finalGrade >= 0 && finalGrade <= maxGrade;
    },
    onButtonSubmit: function onButtonSubmit(e) {
      e.preventDefault();

      if (this.canSubmit()) {
        this.onSubmit(this.getFinalGrade());
      }

      return false;
    },
    onSubmit: function onSubmit(grade) {
      var _this = this;

      var vm = this;
      var data = {
        grade: grade
      };
      var url = '/api/grading/' + this.activityId + '/' + this.answerId + '/update';
      this.inAjaxCall = true;
      this.$http.post(url, data).then(function (response) {
        vm.inAjaxCall = false;
        vm.$parent.markGraded(_this.answerId, grade);
        vm.$parent.showAlert(response.body);
      }, function (response) {
        vm.inAjaxCall = false;
        vm.$parent.showAlert(response);
      });
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/components/Grading/QuestionTypes/MatchPairs.vue":
/*!*****************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/QuestionTypes/MatchPairs.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MatchPairs_vue_vue_type_template_id_4c3f1f42_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MatchPairs.vue?vue&type=template&id=4c3f1f42&scoped=true& */ "./resources/assets/js/components/Grading/QuestionTypes/MatchPairs.vue?vue&type=template&id=4c3f1f42&scoped=true&");
/* harmony import */ var _MatchPairs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MatchPairs.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Grading/QuestionTypes/MatchPairs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MatchPairs_vue_vue_type_style_index_0_id_4c3f1f42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MatchPairs.vue?vue&type=style&index=0&id=4c3f1f42&scoped=true&lang=css& */ "./resources/assets/js/components/Grading/QuestionTypes/MatchPairs.vue?vue&type=style&index=0&id=4c3f1f42&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MatchPairs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MatchPairs_vue_vue_type_template_id_4c3f1f42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MatchPairs_vue_vue_type_template_id_4c3f1f42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4c3f1f42",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Grading/QuestionTypes/MatchPairs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Grading/QuestionTypes/MatchPairs.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/QuestionTypes/MatchPairs.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatchPairs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MatchPairs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/MatchPairs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatchPairs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Grading/QuestionTypes/MatchPairs.vue?vue&type=style&index=0&id=4c3f1f42&scoped=true&lang=css&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/QuestionTypes/MatchPairs.vue?vue&type=style&index=0&id=4c3f1f42&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MatchPairs_vue_vue_type_style_index_0_id_4c3f1f42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MatchPairs.vue?vue&type=style&index=0&id=4c3f1f42&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/MatchPairs.vue?vue&type=style&index=0&id=4c3f1f42&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MatchPairs_vue_vue_type_style_index_0_id_4c3f1f42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MatchPairs_vue_vue_type_style_index_0_id_4c3f1f42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MatchPairs_vue_vue_type_style_index_0_id_4c3f1f42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MatchPairs_vue_vue_type_style_index_0_id_4c3f1f42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MatchPairs_vue_vue_type_style_index_0_id_4c3f1f42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/Grading/QuestionTypes/MatchPairs.vue?vue&type=template&id=4c3f1f42&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/QuestionTypes/MatchPairs.vue?vue&type=template&id=4c3f1f42&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatchPairs_vue_vue_type_template_id_4c3f1f42_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MatchPairs.vue?vue&type=template&id=4c3f1f42&scoped=true& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/MatchPairs.vue?vue&type=template&id=4c3f1f42&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatchPairs_vue_vue_type_template_id_4c3f1f42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatchPairs_vue_vue_type_template_id_4c3f1f42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/Grading/QuestionTypes/MissingWord.vue":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/QuestionTypes/MissingWord.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MissingWord_vue_vue_type_template_id_ca3efb5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MissingWord.vue?vue&type=template&id=ca3efb5c& */ "./resources/assets/js/components/Grading/QuestionTypes/MissingWord.vue?vue&type=template&id=ca3efb5c&");
/* harmony import */ var _MissingWord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MissingWord.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Grading/QuestionTypes/MissingWord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MissingWord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MissingWord_vue_vue_type_template_id_ca3efb5c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MissingWord_vue_vue_type_template_id_ca3efb5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Grading/QuestionTypes/MissingWord.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Grading/QuestionTypes/MissingWord.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/QuestionTypes/MissingWord.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MissingWord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MissingWord.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/MissingWord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MissingWord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Grading/QuestionTypes/MissingWord.vue?vue&type=template&id=ca3efb5c&":
/*!*************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/QuestionTypes/MissingWord.vue?vue&type=template&id=ca3efb5c& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MissingWord_vue_vue_type_template_id_ca3efb5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MissingWord.vue?vue&type=template&id=ca3efb5c& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/MissingWord.vue?vue&type=template&id=ca3efb5c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MissingWord_vue_vue_type_template_id_ca3efb5c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MissingWord_vue_vue_type_template_id_ca3efb5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/Grading/QuestionTypes/MultipleCorrect.vue":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/QuestionTypes/MultipleCorrect.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MultipleCorrect_vue_vue_type_template_id_9d37f208_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultipleCorrect.vue?vue&type=template&id=9d37f208&scoped=true& */ "./resources/assets/js/components/Grading/QuestionTypes/MultipleCorrect.vue?vue&type=template&id=9d37f208&scoped=true&");
/* harmony import */ var _MultipleCorrect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultipleCorrect.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Grading/QuestionTypes/MultipleCorrect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MultipleCorrect_vue_vue_type_style_index_0_id_9d37f208_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MultipleCorrect.vue?vue&type=style&index=0&id=9d37f208&scoped=true&lang=css& */ "./resources/assets/js/components/Grading/QuestionTypes/MultipleCorrect.vue?vue&type=style&index=0&id=9d37f208&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MultipleCorrect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MultipleCorrect_vue_vue_type_template_id_9d37f208_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MultipleCorrect_vue_vue_type_template_id_9d37f208_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9d37f208",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Grading/QuestionTypes/MultipleCorrect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Grading/QuestionTypes/MultipleCorrect.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/QuestionTypes/MultipleCorrect.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleCorrect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MultipleCorrect.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/MultipleCorrect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleCorrect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Grading/QuestionTypes/MultipleCorrect.vue?vue&type=style&index=0&id=9d37f208&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/QuestionTypes/MultipleCorrect.vue?vue&type=style&index=0&id=9d37f208&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleCorrect_vue_vue_type_style_index_0_id_9d37f208_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MultipleCorrect.vue?vue&type=style&index=0&id=9d37f208&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/MultipleCorrect.vue?vue&type=style&index=0&id=9d37f208&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleCorrect_vue_vue_type_style_index_0_id_9d37f208_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleCorrect_vue_vue_type_style_index_0_id_9d37f208_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleCorrect_vue_vue_type_style_index_0_id_9d37f208_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleCorrect_vue_vue_type_style_index_0_id_9d37f208_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleCorrect_vue_vue_type_style_index_0_id_9d37f208_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/Grading/QuestionTypes/MultipleCorrect.vue?vue&type=template&id=9d37f208&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/QuestionTypes/MultipleCorrect.vue?vue&type=template&id=9d37f208&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleCorrect_vue_vue_type_template_id_9d37f208_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MultipleCorrect.vue?vue&type=template&id=9d37f208&scoped=true& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/MultipleCorrect.vue?vue&type=template&id=9d37f208&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleCorrect_vue_vue_type_template_id_9d37f208_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleCorrect_vue_vue_type_template_id_9d37f208_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/Grading/QuestionTypes/OneCorrect.vue":
/*!*****************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/QuestionTypes/OneCorrect.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OneCorrect_vue_vue_type_template_id_748c4852___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OneCorrect.vue?vue&type=template&id=748c4852& */ "./resources/assets/js/components/Grading/QuestionTypes/OneCorrect.vue?vue&type=template&id=748c4852&");
/* harmony import */ var _OneCorrect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OneCorrect.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Grading/QuestionTypes/OneCorrect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OneCorrect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OneCorrect_vue_vue_type_template_id_748c4852___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OneCorrect_vue_vue_type_template_id_748c4852___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Grading/QuestionTypes/OneCorrect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Grading/QuestionTypes/OneCorrect.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/QuestionTypes/OneCorrect.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OneCorrect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OneCorrect.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/OneCorrect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OneCorrect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Grading/QuestionTypes/OneCorrect.vue?vue&type=template&id=748c4852&":
/*!************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/QuestionTypes/OneCorrect.vue?vue&type=template&id=748c4852& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OneCorrect_vue_vue_type_template_id_748c4852___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OneCorrect.vue?vue&type=template&id=748c4852& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/OneCorrect.vue?vue&type=template&id=748c4852&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OneCorrect_vue_vue_type_template_id_748c4852___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OneCorrect_vue_vue_type_template_id_748c4852___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/Grading/QuestionTypes/Photo.vue":
/*!************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/QuestionTypes/Photo.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Photo_vue_vue_type_template_id_6c172518_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Photo.vue?vue&type=template&id=6c172518&scoped=true& */ "./resources/assets/js/components/Grading/QuestionTypes/Photo.vue?vue&type=template&id=6c172518&scoped=true&");
/* harmony import */ var _Photo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Photo.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Grading/QuestionTypes/Photo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Photo_vue_vue_type_style_index_0_id_6c172518_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Photo.vue?vue&type=style&index=0&id=6c172518&scoped=true&lang=css& */ "./resources/assets/js/components/Grading/QuestionTypes/Photo.vue?vue&type=style&index=0&id=6c172518&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Photo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Photo_vue_vue_type_template_id_6c172518_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Photo_vue_vue_type_template_id_6c172518_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6c172518",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Grading/QuestionTypes/Photo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Grading/QuestionTypes/Photo.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/QuestionTypes/Photo.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Photo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Photo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/Photo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Photo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Grading/QuestionTypes/Photo.vue?vue&type=style&index=0&id=6c172518&scoped=true&lang=css&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/QuestionTypes/Photo.vue?vue&type=style&index=0&id=6c172518&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Photo_vue_vue_type_style_index_0_id_6c172518_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Photo.vue?vue&type=style&index=0&id=6c172518&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/Photo.vue?vue&type=style&index=0&id=6c172518&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Photo_vue_vue_type_style_index_0_id_6c172518_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Photo_vue_vue_type_style_index_0_id_6c172518_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Photo_vue_vue_type_style_index_0_id_6c172518_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Photo_vue_vue_type_style_index_0_id_6c172518_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Photo_vue_vue_type_style_index_0_id_6c172518_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/Grading/QuestionTypes/Photo.vue?vue&type=template&id=6c172518&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Grading/QuestionTypes/Photo.vue?vue&type=template&id=6c172518&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Photo_vue_vue_type_template_id_6c172518_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Photo.vue?vue&type=template&id=6c172518&scoped=true& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Grading/QuestionTypes/Photo.vue?vue&type=template&id=6c172518&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Photo_vue_vue_type_template_id_6c172518_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Photo_vue_vue_type_template_id_6c172518_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/vue-plain-pagination.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/vue-plain-pagination.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_plain_pagination_vue_vue_type_template_id_17e0a50a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue-plain-pagination.vue?vue&type=template&id=17e0a50a& */ "./resources/assets/js/components/vue-plain-pagination.vue?vue&type=template&id=17e0a50a&");
/* harmony import */ var _vue_plain_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vue-plain-pagination.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/vue-plain-pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_plain_pagination_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vue-plain-pagination.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/components/vue-plain-pagination.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _vue_plain_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vue_plain_pagination_vue_vue_type_template_id_17e0a50a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vue_plain_pagination_vue_vue_type_template_id_17e0a50a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/vue-plain-pagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/vue-plain-pagination.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/vue-plain-pagination.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_plain_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./vue-plain-pagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/vue-plain-pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_plain_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/vue-plain-pagination.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/vue-plain-pagination.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_plain_pagination_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./vue-plain-pagination.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/vue-plain-pagination.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_plain_pagination_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_plain_pagination_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_plain_pagination_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_plain_pagination_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_plain_pagination_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/vue-plain-pagination.vue?vue&type=template&id=17e0a50a&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/vue-plain-pagination.vue?vue&type=template&id=17e0a50a& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_plain_pagination_vue_vue_type_template_id_17e0a50a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./vue-plain-pagination.vue?vue&type=template&id=17e0a50a& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/vue-plain-pagination.vue?vue&type=template&id=17e0a50a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_plain_pagination_vue_vue_type_template_id_17e0a50a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_plain_pagination_vue_vue_type_template_id_17e0a50a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/grading.js":
/*!****************************************!*\
  !*** ./resources/assets/js/grading.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var VueI18n = __webpack_require__(/*! vue-i18n */ "./node_modules/vue-i18n/dist/vue-i18n.common.js");

Vue.use(VueI18n);
Vue.config.lang = window.Laravel.locale;
Vue.locale(window.Laravel.locale, _.cloneDeep(window.Laravel.translations));
Vue.component('grading-list', __webpack_require__(/*! ./components/Grading/GradingList.vue */ "./resources/assets/js/components/Grading/GradingList.vue")["default"]);
var activityApp = new Vue({
  el: '#grading-list-container',
  mounted: function mounted() {
    this.answers = window.Laravel.answers;
  },
  data: function data() {
    return {
      baseUrl: '/',
      answers: []
    };
  },
  methods: {}
});

/***/ }),

/***/ 15:
/*!**********************************************!*\
  !*** multi ./resources/assets/js/grading.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vagrant/code/resources/assets/js/grading.js */"./resources/assets/js/grading.js");


/***/ })

/******/ });