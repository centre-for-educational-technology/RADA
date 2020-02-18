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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/FlashExercisesListModal.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/FlashExercisesListModal.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['questions', 'game_id'],
  mixins: [],
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.getActiveFlashExercise(function (id) {
        _this.startedExerciseId = id;
      });
    });
  },
  data: function data() {
    return {
      inAjaxCall: false,
      startedExerciseId: null
    };
  },
  methods: {
    openTaskInfoModal: function openTaskInfoModal(exercise) {
      this.$parent.openNewTaskInfoModal({
        name: exercise.title,
        users: exercise.users
      });
    },
    canStart: function canStart(id) {
      if (this.startedExerciseId !== null) {
        return false;
      }

      return true;
    },
    canStop: function canStop(id) {
      if (this.startedExerciseId === id) {
        return true;
      }

      return false;
    },
    startExercise: function startExercise(id) {
      this.startedExerciseId = id;
      this.startStopExercise(id, true);
    },
    stopExercise: function stopExercise(id) {
      this.startedExerciseId = null;
      this.startStopExercise(id, false);
    },
    startStopExercise: function startStopExercise(id, active) {
      this.$http.post(window.RADA.config.base_url + '/api/games/' + this.game_id + '/start-stop-flash-exercise', {
        questionId: id,
        active: active
      }).then(function (response) {}, function (error) {
        console.log(error);
      });
    },
    getActiveFlashExercise: function getActiveFlashExercise(callback) {
      this.$http.get(window.RADA.config.base_url + '/api/games/' + this.game_id + '/get-active-flash-exercise').then(function (response) {
        if (typeof response.body.id !== 'undefined') {
          callback(response.body.id);
        } else {
          callback(null);
        }
      }, function (error) {
        callback(null);
      });
    },
    title: function title() {
      return this.$t('flash-exercises-list-modal-title');
    },
    open: function open() {
      var _this2 = this;

      this.$nextTick(function () {
        $(_this2.$refs.modal).modal('show');
      });
      return $(this.$refs.modal);
    },
    close: function close() {
      var _this3 = this;

      this.$nextTick(function () {
        $(_this3.$refs.modal).modal('hide');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/GameInformationModal.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/GameInformationModal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_MarkerIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../mixins/MarkerIcon.js */ "./resources/assets/js/mixins/MarkerIcon.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['activity'],
  mixins: [_mixins_MarkerIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  mounted: function mounted() {
    this.baseUrl = window.RADA.config.base_url;
  },
  data: function data() {
    return {
      icons: ['active', 'inactive', 'correct', 'incorrect'],
      baseUrl: ''
    };
  },
  methods: {
    open: function open() {
      this.$nextTick(function () {
        $(this.$refs.modal).modal('show');
      });
    },
    close: function close() {
      this.$nextTick(function () {
        $(this.$refs.modal).modal('hide');
      });
    },
    getIconText: function getIconText(type) {
      return this.$t('icons.' + type);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/GameMessagesListModal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/GameMessagesListModal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['game_id', 'type'],
  mixins: [],
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.getMessages();
    });
  },
  data: function data() {
    return {
      messages: [],
      newMessage: '',
      inAjaxCall: false,
      event: null
    };
  },
  methods: {
    isManager: function isManager() {
      return this.type === 'monitoring';
    },
    deleteMessage: function deleteMessage(e, id) {
      var _this2 = this;

      this.$http.get(window.RADA.config.base_url + '/api/games/' + this.game_id + '/delete-message/' + id).then(function (response) {
        _this2.getMessages();
      });
    },
    addNewMessage: function addNewMessage(e) {
      var _this3 = this;

      if (this.newMessage.length > 0) {
        this.$http.post(window.RADA.config.base_url + '/api/games/' + this.game_id + '/add-new-message', {
          message: this.newMessage
        }).then(function (response) {
          _this3.newMessage = '';

          _this3.getMessages();
        });
      }
    },
    getMessages: function getMessages() {
      var _this4 = this;

      this.$http.get(window.RADA.config.base_url + '/api/games/' + this.game_id + '/get-all-messages').then(function (response) {
        _this4.messages = response.body || [];
      });
    },
    open: function open() {
      var _this5 = this;

      this.$nextTick(function () {
        $(_this5.$refs.modal).modal('show');

        _this5.getMessages();
      });
      return $(this.$refs.modal);
    },
    close: function close() {
      var _this6 = this;

      this.$nextTick(function () {
        $(_this6.$refs.modal).modal('hide');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/MonitoringMap.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/MonitoringMap.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_MarkerIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../mixins/MarkerIcon.js */ "./resources/assets/js/mixins/MarkerIcon.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
function GameControls(controlDiv, map, playerMarker, vm) {
  var mapTypeIds = _.values(google.maps.MapTypeId);

  var controlUI = document.createElement('div');
  controlUI.id = 'sz-map-controls';
  controlUI.className = 'map-controls';
  controlDiv.appendChild(controlUI);
  var userControlItem = document.createElement('i');
  userControlItem.className = 'mdi';

  if (vm.$parent.isLoggedIn) {
    userControlItem.className += ' mdi-account';
  } else {
    userControlItem.className += ' mdi-account-off';
  }

  userControlItem.title = vm.$parent.userName;
  controlUI.appendChild(userControlItem);
  var userControlTooltipVisible = false;
  userControlItem.addEventListener('click', function () {
    $(userControlItem).tooltip('toggle');
    userControlTooltipVisible = userControlTooltipVisible ? false : true;
  });
  $(userControlItem).tooltip({
    'container': 'body',
    'placement': 'bottom',
    'title': $(userControlItem).attr('title'),
    'trigger': 'manual'
  });
  $(window).on('resize', function () {
    if (userControlTooltipVisible) {
      $(userControlItem).tooltip('show');
    }
  });
  var informationControlItem = document.createElement('i');
  informationControlItem.className = 'mdi mdi-information-outline';
  informationControlItem.title = vm.$t('info');
  controlUI.appendChild(informationControlItem);
  informationControlItem.addEventListener('click', function () {
    vm.$refs.informationModal.open();
  });
  var navigationControlItem = document.createElement('i');
  navigationControlItem.className = 'mdi mdi-crosshairs';
  navigationControlItem.title = vm.$t('position-tracking');
  controlUI.appendChild(navigationControlItem);
  navigationControlItem.addEventListener('click', function () {
    if (map.szTrackingEnabled) {
      map.szTrackingEnabled = false;
      navigationControlItem.className = 'mdi mdi-crosshairs';
    } else {
      map.panTo(playerMarker.getPosition());
      google.maps.event.trigger(playerMarker, 'click');
      map.szTrackingEnabled = true;
      navigationControlItem.className = 'mdi mdi-crosshairs-gps active';
    }
  });
  var boundsControlItem = document.createElement('i');
  boundsControlItem.className = 'mdi mdi-map-marker-multiple';
  boundsControlItem.title = vm.$t('apply-item-bounds');
  controlUI.appendChild(boundsControlItem);
  boundsControlItem.addEventListener('click', function () {
    var bounds = vm.getMarkerBounds();

    if (!bounds.isEmpty()) {
      map.fitBounds(bounds);
    }
  });
  var exitControlIcon = document.createElement('i');
  exitControlIcon.className = 'mdi mdi-exit-to-app';
  exitControlIcon.title = vm.$t('exit');
  controlUI.appendChild(exitControlIcon);
  exitControlIcon.addEventListener('click', function () {
    vm.$parent.exit();
  });
  var mapTypeControlItem = document.createElement('i');
  mapTypeControlItem.className = 'mdi mdi-layers';
  mapTypeControlItem.title = vm.$t('change-map-type');
  controlUI.appendChild(mapTypeControlItem);
  mapTypeControlItem.addEventListener('click', function () {
    var nextIndex = _.indexOf(mapTypeIds, map.mapTypeId) + 1;

    if (nextIndex === mapTypeIds.length) {
      nextIndex = 0;
    }

    map.setMapTypeId(mapTypeIds[nextIndex]);
  });
  /*
   * --------- ADMIN CONTROLS
   */

  var adminControls = document.createElement('div');
  adminControls.className = 'map-controls';
  controlDiv.appendChild(adminControls); // ------------- FLASH EXERCISE ---------------------

  var flashExerciseAdminControlItem = document.createElement('i');
  flashExerciseAdminControlItem.className = 'mdi mdi-flash hidden';
  flashExerciseAdminControlItem.id = 'admin-flash-exercises-control-item';
  adminControls.appendChild(flashExerciseAdminControlItem);
  flashExerciseAdminControlItem.addEventListener('click', function () {
    vm.openFlashExercisesListModal();
  }); // ------------- MESSAGING --------------------------

  var messagingControlItem = document.createElement('i');
  messagingControlItem.className = 'mdi mdi-email-outline';
  adminControls.appendChild(messagingControlItem);
  messagingControlItem.addEventListener('click', function () {
    vm.$refs.gameMessagesListModal.open();
  }); // ------------- GRADING ----------------------------

  var gradingControlItem = document.createElement('i');
  gradingControlItem.className = 'mdi mdi-owl grading-control-item hidden';
  var gradingControlItemBadge = document.createElement('span');
  gradingControlItemBadge.className = 'badge badge-light';
  gradingControlItemBadge.innerText = '0';
  gradingControlItem.appendChild(gradingControlItemBadge);
  adminControls.appendChild(gradingControlItem);
  gradingControlItem.addEventListener('click', function () {
    window.open(vm.baseUrl + '/grading/' + vm.game.activity.id, '_blank');
  });

  function getCountOfUngradedAnswers() {
    vm.$http.get(vm.baseUrl + '/api/games/' + vm.game.id + '/get-count-of-ungraded-answers').then(function (response) {
      gradingControlItemBadge.innerText = response.body.count;

      if (response.body.count !== null) {
        if (response.body.count > 0) {
          gradingControlItemBadge.className = 'badge badge-light';
        } else {
          gradingControlItemBadge.className = 'badge badge-light hidden';
        }

        gradingControlItem.className = 'mdi mdi-owl grading-control-item';
        setTimeout(function () {
          getCountOfUngradedAnswers();
        }, 10000);
      }
    }, function (error) {
      gradingControlItemBadge.innerText = '0';
      gradingControlItemBadge.className = 'badge badge-light hidden';
    });
  }

  getCountOfUngradedAnswers(); // -------------- STATISTICS --------------------------

  var statisticsControlItem = document.createElement('i');
  statisticsControlItem.className = 'mdi mdi-chart-line';
  adminControls.appendChild(statisticsControlItem);
  statisticsControlItem.addEventListener('click', function () {
    window.open(vm.baseUrl + '/manage/game-statistics/' + vm.game.id, '_blank');
  }); // -------------- START STOP --------------------------

  var startStopControlItem = document.createElement('i');

  if (vm.game.activity.started === 1) {
    startStopControlItem.className = 'mdi mdi-stop-circle-outline start-stop';
  } else {
    startStopControlItem.className = 'mdi mdi-play-circle-outline start-stop';
  }

  adminControls.appendChild(startStopControlItem);
  startStopControlItem.addEventListener('click', function () {
    var start = vm.game.activity.started === 1 ? 0 : 1;
    vm.$http.get(vm.baseUrl + '/api/games/' + vm.game.id + '/start-stop-game?start=' + start).then(function (response) {
      vm.game.activity.started = start;

      if (vm.game.activity.started === 1) {
        startStopControlItem.className = 'mdi mdi-stop-circle-outline start-stop';
      } else {
        startStopControlItem.className = 'mdi mdi-play-circle-outline start-stop';
      }
    });
  });
}

var enableStreetView = window.RADA.config.map.enableStreetView || false;

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'flash-exercises-list-modal': __webpack_require__(/*! ./FlashExercisesListModal.vue */ "./resources/assets/js/components/FlashExercisesListModal.vue")["default"],
    'game-messages-list-modal': __webpack_require__(/*! ./GameMessagesListModal.vue */ "./resources/assets/js/components/GameMessagesListModal.vue")["default"],
    'notification-modal': __webpack_require__(/*! ./NotificationModal.vue */ "./resources/assets/js/components/NotificationModal.vue")["default"],
    'player-info-modal': __webpack_require__(/*! ./PlayerInfoModal.vue */ "./resources/assets/js/components/PlayerInfoModal.vue")["default"],
    'task-info-modal': __webpack_require__(/*! ./TaskInfoModal.vue */ "./resources/assets/js/components/TaskInfoModal.vue")["default"],
    'game-information-modal': __webpack_require__(/*! ./GameInformationModal.vue */ "./resources/assets/js/components/GameInformationModal.vue")["default"]
  },
  props: ['latitude', 'longitude', 'game', 'baseUrl'],
  mixins: [_mixins_MarkerIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  mounted: function mounted() {
    var _this2 = this;

    this.mapData = {};
    this.mapData.markers = [];
    this.mapData.mapOptions = {
      center: {
        lat: this.latitude,
        lng: this.longitude
      },
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      zoomControl: true,
      streetViewControl: enableStreetView,
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
    this.mapData.iconAnchor = new google.maps.Point(20, 20);
    this.mapData.iconSize = new google.maps.Size(60, 60);
    this.mapData.iconScaledSize = new google.maps.Size(40, 40);
    this.$nextTick(function () {
      _this2.initMap();
    });
  },
  data: function data() {
    return {
      question: null,
      answer: null,
      gpsError: false,
      position: null,
      flashExercises: [],
      activeFlashExerciseId: null,
      notificationTitle: null,
      notificationMessage: null,
      gameIsStopped: false,
      currentPlayerCompletedTasks: [],
      currentPlayerName: '',
      currentTaskName: '',
      currentTaskId: null,
      currentTaskCompletedPlayers: []
    };
  },
  watch: {
    gpsError: function gpsError(value) {
      var mapControlsElement = document.getElementById('sz-map-controls'); // Ignore any attempts to show GPS error until UI is ready

      if (!mapControlsElement) return;
      var elementId = 'sz-gps-error',
          element = document.getElementById('sz-gps-error');

      if (value === true) {
        if (!element) {
          this.initGpsErrorControl(elementId);
        } else {
          element.style.display = 'initial';
        }
      } else {
        if (element) {
          element.style.display = 'none';
        }
      }
    }
  },
  methods: {
    initMap: function initMap() {
      var _this = this;

      this.mapData.map = new google.maps.Map(document.getElementById('map'), this.mapData.mapOptions);
      this.mapData.infoWindow = new google.maps.InfoWindow({
        disableAutoPan: true
      });
      this.initGroundOverlays();
      this.initPlayerMarker();
      this.initGameControls();

      if (_this.game.activity.questions) {
        var map = _this.mapData.map,
            markers = _this.mapData.markers;

        _.each(_this.game.activity.questions, function (question) {
          if (question.is_flash) {
            _this.flashExercises.push(question);

            setTimeout(function () {
              $('#admin-flash-exercises-control-item').removeClass('hidden');
            }, 2500);
            return true;
          }

          var marker = new google.maps.Marker({
            title: question.title,
            position: {
              lat: Number(question.latitude),
              lng: Number(question.longitude)
            },
            map: map,
            animation: google.maps.Animation.DROP,
            questionId: question.id,
            questionType: question.type,
            hasAccessCode: _this.hasAccessCode(question),
            optimized: false,
            users: []
          });

          _this.$nextTick(function () {
            _this.detectAndSetMarkerIcon(marker);
          });

          markers.push(marker);
          marker.addListener('click', function () {
            _this.openNewTaskInfoModal({
              name: marker.title,
              users: marker.users,
              id: marker.questionId
            });
          });
        });
      }

      this.$parent.getGeoLocation(function (position) {
        var map = _this.mapData.map,
            playerMarker = _this.mapData.playerMarker;
        _this.gpsError = false;
        playerMarker.setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });

        if (map.szTrackingEnabled === true) {
          map.panTo(playerMarker.getPosition());
        }

        _this.setPosition(position);
      }, true, function (error) {
        _this.gpsError = true;
      });
      this.getPositionOfPlayersWhoPlayMyGame();
    },
    showNotification: function showNotification(title, message) {
      this.$refs.notificationModal.close();
      this.notificationTitle = title;
      this.notificationMessage = message;
      this.$refs.notificationModal.open();
    },
    openFlashExercisesListModal: function openFlashExercisesListModal() {
      this.$refs.flashExercisesListModal.open();
    },
    getPositionOfPlayersWhoPlayMyGame: function getPositionOfPlayersWhoPlayMyGame() {
      var _this = this;

      var data = {
        game_id: this.game.id
      };
      this.$http.post(_this.baseUrl + '/api/games/get-position-of-players-who-play-my-game', data).then(function (response) {
        var items = response.body;

        if (items === 'false') {
          return;
        }

        var itemsLength = items.length;
        var markers = _this.mapData.markers;
        var markersLength = markers.length;

        for (var i = 0; i < markersLength; i++) {
          if (typeof markers[i].isUser !== 'undefined') {
            markers[i].setMap(null);
          } else {
            markers[i].users = [];

            for (var k = 0; k < itemsLength; k++) {
              var item = items[k];
              var completedTasks = item.completed_tasks;
              var completedTasksLength = completedTasks.length;

              for (var j = 0; j < completedTasksLength; j++) {
                var completedTask = completedTasks[j];

                if (completedTask.id === markers[i].questionId) {
                  markers[i].users.push(item);
                }
              }
            }
          }
        }

        var map = _this.mapData.map;

        var _loop = function _loop(_i) {
          var item = items[_i];

          if (item.status === 'hidden') {
            return "continue";
          }

          var marker = new google.maps.Marker({
            title: item.name,
            position: {
              lat: Number(item.lat),
              lng: Number(item.lng)
            },
            map: map,
            // animation: google.maps.Animation.DROP,
            optimized: false,
            isUser: true
          });
          var circle = {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: item.status === 'active' ? 'orange' : 'gray',
            fillOpacity: 1.0,
            scale: 4.5,
            strokeColor: 'orange',
            strokeWeight: 1
          };
          marker.setIcon(circle);
          marker.addListener('click', function () {
            _this.openNewPlayerInfoModal(item);
          });
          markers.push(marker);
        };

        for (var _i = 0; _i < itemsLength; _i++) {
          var _ret = _loop(_i);

          if (_ret === "continue") continue;
        }

        setTimeout(function () {
          _this.getPositionOfPlayersWhoPlayMyGame();
        }, 60000);
      }, function (response) {
        console.log(response.body);
      });
    },
    initGroundOverlays: function initGroundOverlays() {
      this.mapData.skansenGroundOverlay = new google.maps.GroundOverlay(this.baseUrl + '/img/map/overlays/skansen.png', {
        north: 59.329167,
        south: 59.324011,
        east: 18.111242,
        west: 18.099022
      }, {
        clickable: false,
        map: this.mapData.map
      });
    },
    initGameControls: function initGameControls() {
      var map = this.mapData.map,
          playerMarker = this.mapData.playerMarker,
          gameControlsDiv = document.createElement('div'),
          gameControls = new GameControls(gameControlsDiv, map, playerMarker, this); // XXX This is a strange code pience that sends index without a reason

      gameControls.index = 1;
      map.controls[google.maps.ControlPosition.TOP_RIGHT].push(gameControlsDiv);
    },
    initGpsErrorControl: function initGpsErrorControl(elementId) {
      var element = document.createElement('div');
      element.id = elementId;
      element.innerHTML = '<span>' + this.$t('gps-error') + '</span>';
      element.style['margin-top'] = document.getElementById('sz-map-controls').offsetHeight + 'px';
      this.mapData.map.controls[google.maps.ControlPosition.TOP_LEFT].push(element);
    },
    closeInfoWindow: function closeInfoWindow() {
      var infoWindow = this.mapData.infoWindow;

      if (infoWindow && infoWindow.getMap()) {
        infoWindow.close();
      }
    },
    openNewInfoWindow: function openNewInfoWindow(infoWindow, marker, map) {
      this.closeInfoWindow();
      infoWindow.setContent(marker.title);
      infoWindow.open(map, marker);
      return true;
    },
    openNewPlayerInfoModal: function openNewPlayerInfoModal(data) {
      this.currentPlayerName = data.name;
      this.currentPlayerCompletedTasks = data.completed_tasks;
      this.$refs.playerInfoModal.open();
    },
    openNewTaskInfoModal: function openNewTaskInfoModal(data) {
      this.currentTaskName = data.name;
      this.currentTaskId = data.id;
      this.currentTaskCompletedPlayers = data.users;
      this.$refs.taskInfoModal.open();
    },
    initPlayerMarker: function initPlayerMarker() {
      var circle,
          _this = this,
          map = this.mapData.map,
          infoWindow = this.mapData.infoWindow;

      circle = {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: 'red',
        fillOpacity: 1.0,
        scale: 4.5,
        strokeColor: 'white',
        strokeWeight: 1
      };
      var playerMarker = new google.maps.Marker({
        title: this.$t('its-you'),
        position: {
          lat: this.latitude,
          lng: this.longitude
        },
        map: map,
        icon: circle
      });
      playerMarker.addListener('click', function () {
        _this.closeInfoWindow();

        infoWindow.setContent(this.title);
        infoWindow.open(map, this);
      });
      google.maps.event.trigger(playerMarker, 'click');
      this.mapData.playerMarker = playerMarker;
    },
    findQuestionById: function findQuestionById(id) {
      return _.find(this.game.activity.questions, ['id', id]);
    },
    isAnswered: function isAnswered(questionId) {
      var answer = this.getAnswer(questionId);

      if (answer === null) {
        return false;
      }

      return answer.is_answered > 0;
    },
    isCorrect: function isCorrect(questionId) {
      var answer = this.getAnswer(questionId);
      return answer && answer.correct === true;
    },
    hasAccessCode: function hasAccessCode(question) {
      return !!(question && question.access_code);
    },
    hasProximityCheck: function hasProximityCheck() {
      return this.game.activity.proximity_check;
    },
    getProximityRadius: function getProximityRadius() {
      return this.game.activity.proximity_radius || 25;
    },
    getEnforceItemsOrder: function getEnforceItemsOrder() {
      return parseInt(this.game.activity.enforce_items_order) || 0;
    },
    openAnsweringTimeModal: function openAnsweringTimeModal(question) {
      var _this3 = this;

      this.question = question;
      this.$nextTick(function () {
        _this3.$refs.answeringTimeModal.open();
      });
    },
    getAnswer: function getAnswer(questionId, defaultValue) {
      if (typeof defaultValue === 'undefined') {
        defaultValue = null;
      }

      return _.get(this.game.answers, questionId, defaultValue);
    },
    isAnswering: function isAnswering(questionId) {
      var answer = this.getAnswer(questionId);

      if (answer === null || answer.is_answered > 0) {
        return false;
      } else if (answer.answering_start_time != null) {
        return true;
      }

      return false;
    },
    detectMarkerIconState: function detectMarkerIconState(marker) {
      return 'active';
    },
    detectAndSetMarkerIcon: function detectAndSetMarkerIcon(marker) {
      if (typeof marker.isUser !== 'undefined') {
        return false;
      }

      var state = this.detectMarkerIconState(marker);
      var hasAccessCode = true;
      marker.setIcon({
        anchor: this.mapData.iconAnchor,
        size: this.mapData.iconSize,
        scaledSize: this.mapData.iconScaledSize,
        url: this.getIconUrl(state, marker.questionType, hasAccessCode)
      });
    },
    getMarkerBounds: function getMarkerBounds() {
      if (this.mapData.markerBounds) return this.mapData.markerBounds;
      this.mapData.markerBounds = new google.maps.LatLngBounds();

      if (this.mapData.markers.length > 0) {
        var vm = this;

        _.each(this.mapData.markers, function (marker) {
          vm.mapData.markerBounds.extend(marker.getPosition());
        });
      }

      return this.mapData.markerBounds;
    },
    getAnsweredQuestionsCount: function getAnsweredQuestionsCount() {
      if (_.size(this.game.activity.questions) === 0 || _.size(this.game.answers) === 0) return 0;

      var questionIds = _.map(this.game.activity.questions, function (question) {
        return question.id;
      });

      var answered = _.filter(this.game.answers, function (answer) {
        return questionIds.indexOf(answer.question) !== -1;
      });

      return _.size(answered);
    },
    setPosition: function setPosition(position) {
      this.position = position;
    },
    getPosition: function getPosition() {
      return this.position;
    },
    resetPlayerInfoModal: function resetPlayerInfoModal() {
      this.currentPlayerCompletedTasks = [];
      this.currentPlayerName = null;
    },
    resetTaskInfoModal: function resetTaskInfoModal() {
      this.currentTaskCompletedPlayers = [];
      this.currentTaskName = null;
      this.currentTaskId = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/NotificationModal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/NotificationModal.vue?vue&type=script&lang=js& ***!
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
//
//
//
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
  props: ['title', 'message'],
  data: function data() {
    return {
      inAjaxCall: false
    };
  },
  methods: {
    open: function open() {
      var _this = this;

      this.$nextTick(function () {
        $(_this.$refs.modal).modal('show');
      });
      return $(this.$refs.modal);
    },
    close: function close() {
      var _this2 = this;

      this.$nextTick(function () {
        $(_this2.$refs.modal).modal('hide');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/PlayerInfoModal.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/PlayerInfoModal.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['tasks', 'title'],
  methods: {
    open: function open() {
      var _this = this;

      this.$nextTick(function () {
        $(_this.$refs.modal).modal('show');
      });
      return $(this.$refs.modal);
    },
    close: function close() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.$parent.resetPlayerInfoModal();

        $(_this2.$refs.modal).modal('hide');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/TaskInfoModal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/TaskInfoModal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['players', 'title', 'task_id'],
  methods: {
    getUrl: function getUrl(player) {
      var tasks = player.completed_tasks;
      var tasksLength = tasks.length;

      for (var i = 0; i < tasksLength; i++) {
        var task = tasks[i];

        if (task.id === this.task_id) {
          return task.url;
        }
      }

      return null;
    },
    open: function open() {
      var _this = this;

      this.$nextTick(function () {
        $(_this.$refs.modal).modal('show');
      });
      return $(this.$refs.modal);
    },
    close: function close() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.$parent.resetTaskInfoModal();

        $(_this2.$refs.modal).modal('hide');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/FlashExercisesListModal.vue?vue&type=style&index=0&id=10e3c97d&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/FlashExercisesListModal.vue?vue&type=style&index=0&id=10e3c97d&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.flash-exercise[data-v-10e3c97d] {\n    margin-bottom: 15px;\n    height: 36px;\n    line-height: 36px;\n}\n.flash-exercise .name[data-v-10e3c97d] {\n    padding-left: 15px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/GameMessagesListModal.vue?vue&type=style&index=0&id=5266066c&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/GameMessagesListModal.vue?vue&type=style&index=0&id=5266066c&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.flash-exercise[data-v-5266066c] {\n    margin-bottom: 15px;\n    height: 36px;\n    line-height: 36px;\n}\n.flash-exercise .name[data-v-5266066c] {\n    padding-left: 15px;\n}\ntextarea[data-v-5266066c] {\n    margin-bottom: 10px;\n}\n.message[data-v-5266066c] {\n    border-bottom: 1px dotted #ccc;\n}\n.message td[data-v-5266066c] {\n    padding: 10px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/MonitoringMap.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/MonitoringMap.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.grading-control-item {\n    position: relative;\n    color: #000;\n}\n.grading-control-item .badge {\n    position: absolute;\n    top: 0;\n    right: -5px;\n    background: #3097d1;\n}\n.map-controls .start-stop.mdi-play-circle-outline {\n    color: green;\n}\n.map-controls .start-stop.mdi-stop-circle-outline {\n    color: red;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/PlayerInfoModal.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/PlayerInfoModal.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.table-row .btn {\n    margin-bottom: 10px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/TaskInfoModal.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/TaskInfoModal.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.table-row .btn {\n    margin-bottom: 10px;\n}\n", ""]);
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

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/FlashExercisesListModal.vue?vue&type=template&id=10e3c97d&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/FlashExercisesListModal.vue?vue&type=template&id=10e3c97d&scoped=true& ***!
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
  return _c(
    "div",
    {
      ref: "modal",
      staticClass: "modal fade",
      attrs: { tabindex: "-1", role: "dialog" },
      on: {
        click: function($event) {
          if ($event.target !== $event.currentTarget) {
            return null
          }
          return _vm.close()
        },
        keyup: function($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])
          ) {
            return null
          }
          return _vm.close()
        }
      }
    },
    [
      _c(
        "div",
        { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: {
                    type: "button",
                    "aria-label": "Close",
                    diabled: _vm.inAjaxCall
                  },
                  on: {
                    click: function($event) {
                      return _vm.close()
                    }
                  }
                },
                [
                  _c("span", { attrs: { "aria-hidden": "true" } }, [
                    _vm._v("×")
                  ])
                ]
              ),
              _vm._v(" "),
              _c("h4", { staticClass: "modal-title" }, [
                _vm._v(_vm._s(_vm.title()))
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "modal-body" },
              _vm._l(_vm.questions, function(exercise) {
                return _c("div", { staticClass: "flash-exercise" }, [
                  _c(
                    "span",
                    {
                      staticClass: "name",
                      on: {
                        click: function($event) {
                          return _vm.openTaskInfoModal(exercise)
                        }
                      }
                    },
                    [_vm._v(_vm._s(exercise.title))]
                  ),
                  _vm._v(" "),
                  _vm.canStop(exercise.id) === false
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-success pull-right",
                          attrs: {
                            disabled: _vm.canStart(exercise.id) === false
                          },
                          on: {
                            click: function($event) {
                              return _vm.startExercise(exercise.id)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.$t("start")) +
                              "\n                    "
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.canStop(exercise.id)
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-danger pull-right",
                          on: {
                            click: function($event) {
                              return _vm.stopExercise(exercise.id)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.$t("stop")) +
                              "\n                    "
                          )
                        ]
                      )
                    : _vm._e()
                ])
              }),
              0
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/GameInformationModal.vue?vue&type=template&id=2a6a2e2a&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/GameInformationModal.vue?vue&type=template&id=2a6a2e2a& ***!
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
  return _c(
    "div",
    {
      ref: "modal",
      staticClass: "modal fade",
      attrs: { tabindex: "-1", role: "dialog" },
      on: {
        click: function($event) {
          if ($event.target !== $event.currentTarget) {
            return null
          }
          return _vm.close()
        },
        keyup: function($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])
          ) {
            return null
          }
          return _vm.close()
        }
      }
    },
    [
      _c(
        "div",
        { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button", "aria-label": "Close" },
                  on: {
                    click: function($event) {
                      return _vm.close()
                    }
                  }
                },
                [
                  _c("span", { attrs: { "aria-hidden": "true" } }, [
                    _vm._v("×")
                  ])
                ]
              ),
              _vm._v(" "),
              _c("h4", { staticClass: "modal-title text-center" }, [
                _vm._v(_vm._s(_vm.activity.title))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "collapse", attrs: { id: "iconCodes" } },
                [
                  _c(
                    "div",
                    { staticClass: "well well-sm" },
                    [
                      _c("p", { staticClass: "help-block" }, [
                        _vm._v(_vm._s(_vm.$t("icons.help")))
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.icons, function(icon) {
                        return _c("div", { staticClass: "media" }, [
                          _c(
                            "div",
                            { staticClass: "media-left media-middle" },
                            [
                              _c("img", {
                                staticClass: "media-object",
                                staticStyle: { width: "30px", height: "30px" },
                                attrs: {
                                  alt: "icon",
                                  src: _vm.getIconUrl(icon)
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "media-body" }, [
                            _c("p", [_vm._v(_vm._s(_vm.getIconText(icon)))])
                          ])
                        ])
                      })
                    ],
                    2
                  )
                ]
              ),
              _vm._v(" "),
              _vm.activity.description
                ? _c("p", { staticClass: "sz-display-new-lines text-center" }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.activity.description) +
                        "\n                "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("h4", [_vm._v(_vm._s(_vm.$t("number-of-questions")))]),
              _vm._v(" "),
              _c("p", [_vm._v(_vm._s(_vm.activity.questions.length))]),
              _vm._v(" "),
              _c("h4", [_vm._v(_vm._s(_vm.$t("playing-time")))]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.activity.playing_time) +
                    " " +
                    _vm._s(_vm.$t("minutes")) +
                    "\n                "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _c("img", {
                  staticClass: "img-responsive center-block",
                  attrs: {
                    src: _vm.activity.featured_image,
                    alt: "featured-image"
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-lg center-block sz-go-btn",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.close()
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("go")))]
              )
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-default btn-sm pull-right",
        attrs: {
          role: "button",
          "data-toggle": "collapse",
          "data-target": "#iconCodes",
          "aria-expanded": "false",
          "aria-controls": "iconCodes"
        }
      },
      [_c("i", { staticClass: "mdi mdi-information-outline" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/GameMessagesListModal.vue?vue&type=template&id=5266066c&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/GameMessagesListModal.vue?vue&type=template&id=5266066c&scoped=true& ***!
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
  return _c(
    "div",
    {
      ref: "modal",
      staticClass: "modal fade",
      attrs: { tabindex: "-1", role: "dialog" },
      on: {
        click: function($event) {
          if ($event.target !== $event.currentTarget) {
            return null
          }
          return _vm.close()
        },
        keyup: function($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])
          ) {
            return null
          }
          return _vm.close()
        }
      }
    },
    [
      _c(
        "div",
        { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: {
                    type: "button",
                    "aria-label": "Close",
                    diabled: _vm.inAjaxCall
                  },
                  on: {
                    click: function($event) {
                      return _vm.close()
                    }
                  }
                },
                [
                  _c("span", { attrs: { "aria-hidden": "true" } }, [
                    _vm._v("×")
                  ])
                ]
              ),
              _vm._v(" "),
              _c("h4", { staticClass: "modal-title" }, [
                _vm._v(_vm._s(_vm.$t("game-messages")))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c(
                "table",
                { staticClass: "messages-container table" },
                _vm._l(_vm.messages, function(message) {
                  return _c(
                    "tr",
                    { class: { message: _vm.isManager() === true } },
                    [
                      _vm.isManager() === false
                        ? _c("td", [
                            _c("div", { staticClass: "panel panel-default" }, [
                              _c("div", { staticClass: "panel-body" }, [
                                _c(
                                  "p",
                                  {
                                    staticStyle: { "white-space": "pre-line" }
                                  },
                                  [_vm._v(_vm._s(message.message))]
                                ),
                                _vm._v(" "),
                                _c("small", [
                                  _vm._v(_vm._s(message.created_at))
                                ])
                              ])
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.isManager() === true
                        ? _c(
                            "td",
                            { staticStyle: { "white-space": "pre-line" } },
                            [_vm._v(_vm._s(message.message))]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.isManager() === true
                        ? _c("td", [_vm._v(_vm._s(message.created_at))])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.isManager() === true
                        ? _c("td", [
                            _c(
                              "button",
                              {
                                staticClass: "pull-right btn btn-danger",
                                on: {
                                  click: function($event) {
                                    return _vm.deleteMessage(
                                      _vm.event,
                                      message.id
                                    )
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.$t("delete-message")) +
                                    "\n                            "
                                )
                              ]
                            )
                          ])
                        : _vm._e()
                    ]
                  )
                }),
                0
              ),
              _vm._v(" "),
              _vm.isManager() === true
                ? _c("div", { staticClass: "add-message-container" }, [
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.newMessage,
                          expression: "newMessage"
                        }
                      ],
                      ref: "newMessageInput",
                      staticClass: "form-control",
                      domProps: { value: _vm.newMessage },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.newMessage = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { type: "button" },
                        on: { click: _vm.addNewMessage }
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.$t("add-new-message")) +
                            "\n                    "
                        )
                      ]
                    )
                  ])
                : _vm._e()
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/MonitoringMap.vue?vue&type=template&id=209ee14d&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/MonitoringMap.vue?vue&type=template&id=209ee14d& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { height: "100%", width: "100%" } },
    [
      _c("flash-exercises-list-modal", {
        ref: "flashExercisesListModal",
        attrs: { questions: _vm.flashExercises, game_id: _vm.game.id }
      }),
      _vm._v(" "),
      _c("game-messages-list-modal", {
        ref: "gameMessagesListModal",
        attrs: { game_id: _vm.game.id, type: "monitoring" }
      }),
      _vm._v(" "),
      _c("notification-modal", {
        ref: "notificationModal",
        attrs: {
          title: _vm.notificationTitle,
          message: _vm.notificationMessage
        }
      }),
      _vm._v(" "),
      _c("player-info-modal", {
        ref: "playerInfoModal",
        attrs: {
          tasks: _vm.currentPlayerCompletedTasks,
          title: _vm.currentPlayerName
        }
      }),
      _vm._v(" "),
      _c("task-info-modal", {
        ref: "taskInfoModal",
        attrs: {
          players: _vm.currentTaskCompletedPlayers,
          title: _vm.currentTaskName,
          task_id: _vm.currentTaskId
        }
      }),
      _vm._v(" "),
      _c("game-information-modal", {
        ref: "informationModal",
        attrs: { activity: _vm.game.activity }
      }),
      _vm._v(" "),
      _c("div", { attrs: { id: "map" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/NotificationModal.vue?vue&type=template&id=11b58b4a&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/NotificationModal.vue?vue&type=template&id=11b58b4a&scoped=true& ***!
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
  return _c(
    "div",
    {
      ref: "modal",
      staticClass: "modal fade",
      attrs: { tabindex: "-1", role: "dialog" },
      on: {
        click: function($event) {
          if ($event.target !== $event.currentTarget) {
            return null
          }
          return _vm.close()
        },
        keyup: function($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])
          ) {
            return null
          }
          return _vm.close()
        }
      }
    },
    [
      _c(
        "div",
        { staticClass: "modal-dialog modal-sm", attrs: { role: "document" } },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: {
                    type: "button",
                    "aria-label": "Close",
                    diabled: _vm.inAjaxCall
                  },
                  on: {
                    click: function($event) {
                      return _vm.close()
                    }
                  }
                },
                [
                  _c("span", { attrs: { "aria-hidden": "true" } }, [
                    _vm._v("×")
                  ])
                ]
              ),
              _vm._v(" "),
              _c("h4", { staticClass: "modal-title" }, [
                _vm._v(_vm._s(_vm.title))
              ])
            ]),
            _vm._v(" "),
            _c("div", {
              staticClass: "modal-body",
              domProps: { innerHTML: _vm._s(_vm.message) }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-success center-block",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.close()
                    }
                  }
                },
                [_vm._v("\n                    OK\n                ")]
              )
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/PlayerInfoModal.vue?vue&type=template&id=6a7310d7&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/PlayerInfoModal.vue?vue&type=template&id=6a7310d7& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
      ref: "modal",
      staticClass: "modal fade",
      attrs: { tabindex: "-1", role: "dialog" },
      on: {
        click: function($event) {
          if ($event.target !== $event.currentTarget) {
            return null
          }
          return _vm.close()
        },
        keyup: function($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])
          ) {
            return null
          }
          return _vm.close()
        }
      }
    },
    [
      _c(
        "div",
        { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button", "aria-label": "Close" },
                  on: {
                    click: function($event) {
                      return _vm.close()
                    }
                  }
                },
                [
                  _c("span", { attrs: { "aria-hidden": "true" } }, [
                    _vm._v("×")
                  ])
                ]
              ),
              _vm._v(" "),
              _c("h4", { staticClass: "modal-title" }, [
                _vm._v(_vm._s(_vm.title))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _vm.tasks.length > 0
                ? _c("h3", [_vm._v(_vm._s(_vm.$t("completed-tasks")) + ":")])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "table",
                { staticClass: "table" },
                _vm._l(_vm.tasks, function(task) {
                  return _c("tr", { staticClass: "table-row" }, [
                    _c("td", [_vm._v(_vm._s(task.id))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(task.title))]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-primary btn-sm pull-right",
                          attrs: {
                            type: "button",
                            href: task.url,
                            target: "_blank"
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("open")))]
                      )
                    ])
                  ])
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.close()
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                    " + _vm._s(_vm.$t("close")) + " "
                  ),
                  _c("i", { staticClass: "mdi mdi-close" })
                ]
              )
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/TaskInfoModal.vue?vue&type=template&id=0e490cf3&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/TaskInfoModal.vue?vue&type=template&id=0e490cf3& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
      ref: "modal",
      staticClass: "modal fade",
      attrs: { tabindex: "-1", role: "dialog" },
      on: {
        click: function($event) {
          if ($event.target !== $event.currentTarget) {
            return null
          }
          return _vm.close()
        },
        keyup: function($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])
          ) {
            return null
          }
          return _vm.close()
        }
      }
    },
    [
      _c(
        "div",
        { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button", "aria-label": "Close" },
                  on: {
                    click: function($event) {
                      return _vm.close()
                    }
                  }
                },
                [
                  _c("span", { attrs: { "aria-hidden": "true" } }, [
                    _vm._v("×")
                  ])
                ]
              ),
              _vm._v(" "),
              _c("h4", { staticClass: "modal-title" }, [
                _vm._v(_vm._s(_vm.title))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _vm.players.length > 0
                ? _c("h3", [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.$t("users-who-have-completed-the-task")) +
                        ":\n                "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "table",
                { staticClass: "table" },
                _vm._l(_vm.players, function(player) {
                  return _c("tr", { staticClass: "table-row" }, [
                    _c("td", [_vm._v(_vm._s(player.name))]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-primary btn-sm pull-right",
                          attrs: {
                            type: "button",
                            href: _vm.getUrl(player),
                            target: "_blank"
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("open")))]
                      )
                    ])
                  ])
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.close()
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                    " + _vm._s(_vm.$t("close")) + " "
                  ),
                  _c("i", { staticClass: "mdi mdi-close" })
                ]
              )
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/FlashExercisesListModal.vue?vue&type=style&index=0&id=10e3c97d&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/FlashExercisesListModal.vue?vue&type=style&index=0&id=10e3c97d&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./FlashExercisesListModal.vue?vue&type=style&index=0&id=10e3c97d&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/FlashExercisesListModal.vue?vue&type=style&index=0&id=10e3c97d&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/GameMessagesListModal.vue?vue&type=style&index=0&id=5266066c&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/GameMessagesListModal.vue?vue&type=style&index=0&id=5266066c&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./GameMessagesListModal.vue?vue&type=style&index=0&id=5266066c&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/GameMessagesListModal.vue?vue&type=style&index=0&id=5266066c&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/MonitoringMap.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/MonitoringMap.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./MonitoringMap.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/MonitoringMap.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/PlayerInfoModal.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/PlayerInfoModal.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PlayerInfoModal.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/PlayerInfoModal.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/TaskInfoModal.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/TaskInfoModal.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./TaskInfoModal.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/TaskInfoModal.vue?vue&type=style&index=0&lang=css&");

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
      // register for functioal component in vue file
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

/***/ "./resources/assets/js/components/FlashExercisesListModal.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/components/FlashExercisesListModal.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FlashExercisesListModal_vue_vue_type_template_id_10e3c97d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlashExercisesListModal.vue?vue&type=template&id=10e3c97d&scoped=true& */ "./resources/assets/js/components/FlashExercisesListModal.vue?vue&type=template&id=10e3c97d&scoped=true&");
/* harmony import */ var _FlashExercisesListModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlashExercisesListModal.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/FlashExercisesListModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FlashExercisesListModal_vue_vue_type_style_index_0_id_10e3c97d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FlashExercisesListModal.vue?vue&type=style&index=0&id=10e3c97d&scoped=true&lang=css& */ "./resources/assets/js/components/FlashExercisesListModal.vue?vue&type=style&index=0&id=10e3c97d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FlashExercisesListModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FlashExercisesListModal_vue_vue_type_template_id_10e3c97d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FlashExercisesListModal_vue_vue_type_template_id_10e3c97d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "10e3c97d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/FlashExercisesListModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/FlashExercisesListModal.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/FlashExercisesListModal.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashExercisesListModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FlashExercisesListModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/FlashExercisesListModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashExercisesListModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/FlashExercisesListModal.vue?vue&type=style&index=0&id=10e3c97d&scoped=true&lang=css&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/FlashExercisesListModal.vue?vue&type=style&index=0&id=10e3c97d&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashExercisesListModal_vue_vue_type_style_index_0_id_10e3c97d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./FlashExercisesListModal.vue?vue&type=style&index=0&id=10e3c97d&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/FlashExercisesListModal.vue?vue&type=style&index=0&id=10e3c97d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashExercisesListModal_vue_vue_type_style_index_0_id_10e3c97d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashExercisesListModal_vue_vue_type_style_index_0_id_10e3c97d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashExercisesListModal_vue_vue_type_style_index_0_id_10e3c97d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashExercisesListModal_vue_vue_type_style_index_0_id_10e3c97d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashExercisesListModal_vue_vue_type_style_index_0_id_10e3c97d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/FlashExercisesListModal.vue?vue&type=template&id=10e3c97d&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/assets/js/components/FlashExercisesListModal.vue?vue&type=template&id=10e3c97d&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashExercisesListModal_vue_vue_type_template_id_10e3c97d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FlashExercisesListModal.vue?vue&type=template&id=10e3c97d&scoped=true& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/FlashExercisesListModal.vue?vue&type=template&id=10e3c97d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashExercisesListModal_vue_vue_type_template_id_10e3c97d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashExercisesListModal_vue_vue_type_template_id_10e3c97d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/GameInformationModal.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/GameInformationModal.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameInformationModal_vue_vue_type_template_id_2a6a2e2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameInformationModal.vue?vue&type=template&id=2a6a2e2a& */ "./resources/assets/js/components/GameInformationModal.vue?vue&type=template&id=2a6a2e2a&");
/* harmony import */ var _GameInformationModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameInformationModal.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/GameInformationModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GameInformationModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GameInformationModal_vue_vue_type_template_id_2a6a2e2a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GameInformationModal_vue_vue_type_template_id_2a6a2e2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/GameInformationModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/GameInformationModal.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/GameInformationModal.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GameInformationModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GameInformationModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/GameInformationModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GameInformationModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/GameInformationModal.vue?vue&type=template&id=2a6a2e2a&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/GameInformationModal.vue?vue&type=template&id=2a6a2e2a& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GameInformationModal_vue_vue_type_template_id_2a6a2e2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./GameInformationModal.vue?vue&type=template&id=2a6a2e2a& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/GameInformationModal.vue?vue&type=template&id=2a6a2e2a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GameInformationModal_vue_vue_type_template_id_2a6a2e2a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GameInformationModal_vue_vue_type_template_id_2a6a2e2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/GameMessagesListModal.vue":
/*!******************************************************************!*\
  !*** ./resources/assets/js/components/GameMessagesListModal.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameMessagesListModal_vue_vue_type_template_id_5266066c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameMessagesListModal.vue?vue&type=template&id=5266066c&scoped=true& */ "./resources/assets/js/components/GameMessagesListModal.vue?vue&type=template&id=5266066c&scoped=true&");
/* harmony import */ var _GameMessagesListModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameMessagesListModal.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/GameMessagesListModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GameMessagesListModal_vue_vue_type_style_index_0_id_5266066c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameMessagesListModal.vue?vue&type=style&index=0&id=5266066c&scoped=true&lang=css& */ "./resources/assets/js/components/GameMessagesListModal.vue?vue&type=style&index=0&id=5266066c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GameMessagesListModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GameMessagesListModal_vue_vue_type_template_id_5266066c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GameMessagesListModal_vue_vue_type_template_id_5266066c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5266066c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/GameMessagesListModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/GameMessagesListModal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/components/GameMessagesListModal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessagesListModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GameMessagesListModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/GameMessagesListModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessagesListModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/GameMessagesListModal.vue?vue&type=style&index=0&id=5266066c&scoped=true&lang=css&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/GameMessagesListModal.vue?vue&type=style&index=0&id=5266066c&scoped=true&lang=css& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessagesListModal_vue_vue_type_style_index_0_id_5266066c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./GameMessagesListModal.vue?vue&type=style&index=0&id=5266066c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/GameMessagesListModal.vue?vue&type=style&index=0&id=5266066c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessagesListModal_vue_vue_type_style_index_0_id_5266066c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessagesListModal_vue_vue_type_style_index_0_id_5266066c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessagesListModal_vue_vue_type_style_index_0_id_5266066c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessagesListModal_vue_vue_type_style_index_0_id_5266066c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessagesListModal_vue_vue_type_style_index_0_id_5266066c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/GameMessagesListModal.vue?vue&type=template&id=5266066c&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/assets/js/components/GameMessagesListModal.vue?vue&type=template&id=5266066c&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessagesListModal_vue_vue_type_template_id_5266066c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./GameMessagesListModal.vue?vue&type=template&id=5266066c&scoped=true& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/GameMessagesListModal.vue?vue&type=template&id=5266066c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessagesListModal_vue_vue_type_template_id_5266066c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessagesListModal_vue_vue_type_template_id_5266066c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/MonitoringMap.vue":
/*!**********************************************************!*\
  !*** ./resources/assets/js/components/MonitoringMap.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MonitoringMap_vue_vue_type_template_id_209ee14d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonitoringMap.vue?vue&type=template&id=209ee14d& */ "./resources/assets/js/components/MonitoringMap.vue?vue&type=template&id=209ee14d&");
/* harmony import */ var _MonitoringMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MonitoringMap.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/MonitoringMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MonitoringMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MonitoringMap.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/components/MonitoringMap.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MonitoringMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MonitoringMap_vue_vue_type_template_id_209ee14d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MonitoringMap_vue_vue_type_template_id_209ee14d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/MonitoringMap.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/MonitoringMap.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/components/MonitoringMap.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MonitoringMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MonitoringMap.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/MonitoringMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MonitoringMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/MonitoringMap.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/components/MonitoringMap.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MonitoringMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./MonitoringMap.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/MonitoringMap.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MonitoringMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MonitoringMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MonitoringMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MonitoringMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MonitoringMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/MonitoringMap.vue?vue&type=template&id=209ee14d&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/components/MonitoringMap.vue?vue&type=template&id=209ee14d& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MonitoringMap_vue_vue_type_template_id_209ee14d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MonitoringMap.vue?vue&type=template&id=209ee14d& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/MonitoringMap.vue?vue&type=template&id=209ee14d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MonitoringMap_vue_vue_type_template_id_209ee14d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MonitoringMap_vue_vue_type_template_id_209ee14d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/NotificationModal.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/js/components/NotificationModal.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotificationModal_vue_vue_type_template_id_11b58b4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotificationModal.vue?vue&type=template&id=11b58b4a&scoped=true& */ "./resources/assets/js/components/NotificationModal.vue?vue&type=template&id=11b58b4a&scoped=true&");
/* harmony import */ var _NotificationModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationModal.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/NotificationModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotificationModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotificationModal_vue_vue_type_template_id_11b58b4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotificationModal_vue_vue_type_template_id_11b58b4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "11b58b4a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/NotificationModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/NotificationModal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/NotificationModal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/NotificationModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/NotificationModal.vue?vue&type=template&id=11b58b4a&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/js/components/NotificationModal.vue?vue&type=template&id=11b58b4a&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationModal_vue_vue_type_template_id_11b58b4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationModal.vue?vue&type=template&id=11b58b4a&scoped=true& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/NotificationModal.vue?vue&type=template&id=11b58b4a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationModal_vue_vue_type_template_id_11b58b4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationModal_vue_vue_type_template_id_11b58b4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/PlayerInfoModal.vue":
/*!************************************************************!*\
  !*** ./resources/assets/js/components/PlayerInfoModal.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PlayerInfoModal_vue_vue_type_template_id_6a7310d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlayerInfoModal.vue?vue&type=template&id=6a7310d7& */ "./resources/assets/js/components/PlayerInfoModal.vue?vue&type=template&id=6a7310d7&");
/* harmony import */ var _PlayerInfoModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerInfoModal.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/PlayerInfoModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PlayerInfoModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayerInfoModal.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/components/PlayerInfoModal.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PlayerInfoModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PlayerInfoModal_vue_vue_type_template_id_6a7310d7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PlayerInfoModal_vue_vue_type_template_id_6a7310d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/PlayerInfoModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/PlayerInfoModal.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/components/PlayerInfoModal.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayerInfoModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PlayerInfoModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/PlayerInfoModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayerInfoModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/PlayerInfoModal.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/PlayerInfoModal.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayerInfoModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PlayerInfoModal.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/PlayerInfoModal.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayerInfoModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayerInfoModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayerInfoModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayerInfoModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayerInfoModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/PlayerInfoModal.vue?vue&type=template&id=6a7310d7&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/components/PlayerInfoModal.vue?vue&type=template&id=6a7310d7& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayerInfoModal_vue_vue_type_template_id_6a7310d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PlayerInfoModal.vue?vue&type=template&id=6a7310d7& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/PlayerInfoModal.vue?vue&type=template&id=6a7310d7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayerInfoModal_vue_vue_type_template_id_6a7310d7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayerInfoModal_vue_vue_type_template_id_6a7310d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/TaskInfoModal.vue":
/*!**********************************************************!*\
  !*** ./resources/assets/js/components/TaskInfoModal.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskInfoModal_vue_vue_type_template_id_0e490cf3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskInfoModal.vue?vue&type=template&id=0e490cf3& */ "./resources/assets/js/components/TaskInfoModal.vue?vue&type=template&id=0e490cf3&");
/* harmony import */ var _TaskInfoModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskInfoModal.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/TaskInfoModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TaskInfoModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskInfoModal.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/components/TaskInfoModal.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TaskInfoModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaskInfoModal_vue_vue_type_template_id_0e490cf3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaskInfoModal_vue_vue_type_template_id_0e490cf3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/TaskInfoModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/TaskInfoModal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/components/TaskInfoModal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskInfoModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TaskInfoModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/TaskInfoModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskInfoModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/TaskInfoModal.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/components/TaskInfoModal.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskInfoModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./TaskInfoModal.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/TaskInfoModal.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskInfoModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskInfoModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskInfoModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskInfoModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskInfoModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/TaskInfoModal.vue?vue&type=template&id=0e490cf3&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/components/TaskInfoModal.vue?vue&type=template&id=0e490cf3& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskInfoModal_vue_vue_type_template_id_0e490cf3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TaskInfoModal.vue?vue&type=template&id=0e490cf3& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/TaskInfoModal.vue?vue&type=template&id=0e490cf3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskInfoModal_vue_vue_type_template_id_0e490cf3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskInfoModal_vue_vue_type_template_id_0e490cf3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/mixins/MarkerIcon.js":
/*!**************************************************!*\
  !*** ./resources/assets/js/mixins/MarkerIcon.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    getIconsBaseUrl: function getIconsBaseUrl() {
      return this.baseUrl + '/img/map/icons/';
    },
    getIconUrl: function getIconUrl(state, type, hasAccessCode) {
      return this.getIconsBaseUrl() + (type && type === 1 ? 'info_' : '') + (state !== 'active' ? state : 'default') + (hasAccessCode === true && state === 'inactive' ? '_access' : '') + '.svg';
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/monitoring.js":
/*!*******************************************!*\
  !*** ./resources/assets/js/monitoring.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//"use strict";
var VueI18n = __webpack_require__(/*! vue-i18n */ "./node_modules/vue-i18n/dist/vue-i18n.common.js");

Vue.use(VueI18n);
Vue.config.lang = window.RADA.config.locale;
Vue.locale(window.RADA.config.locale, _.cloneDeep(window.RADA.data.translations));
Vue.component('game-map', __webpack_require__(/*! ./components/MonitoringMap.vue */ "./resources/assets/js/components/MonitoringMap.vue")["default"]);
var monitoringGameApp = new Vue({
  el: '#sz-play-app',
  created: function created() {
    var vm = this;
    vm.baseUrl = window.RADA.config.base_url;
    vm.exitUrl = window.RADA.config.exit_url;
    vm.isLoggedIn = window.Laravel.isLoggedIn;
    vm.userName = window.Laravel.userName;
    vm.game = window.RADA.data.game;

    window.initMap = function () {
      vm.mapInitialised = true;
    };

    vm.getGeoLocation(function (position) {
      vm.latitude = position.coords.latitude;
      vm.longitude = position.coords.longitude;
    }, false, function (error) {
      vm.geoLocationErrorMessage = error.message;
    });
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//maps.googleapis.com/maps/api/js?key=' + window.RADA.config.map.key + '&callback=initMap&libraries=geometry';
    document.body.appendChild(script);
  },
  mounted: function mounted() {},
  data: function data() {
    return {
      baseUrl: '',
      exitUrl: '',
      mapInitialised: false,
      latitude: undefined,
      longitude: undefined,
      geoLocationErrorMessage: null,
      game: null,
      isLoggedIn: false,
      userName: ''
    };
  },
  methods: {
    isLoading: function isLoading() {
      return !(this.mapInitialised && this.latitude && this.longitude);
    },
    getGeoLocation: function getGeoLocation(callback, watch, handleError) {
      if (typeof handleError !== 'function') {
        handleError = function handleError(error) {
          if (window.console && window.console.error && typeof window.console.error === 'function') {
            window.console.error('Geolocation error', error); // TODO Consider making traslatable
          }
        };
      }

      if (window.navigator.geolocation) {
        var geolocationOptions = {
          enableHighAccuracy: true
        };

        if (watch === true) {
          window.navigator.geolocation.watchPosition(callback, handleError, geolocationOptions);
        } else {
          window.navigator.geolocation.getCurrentPosition(callback, handleError, geolocationOptions);
        }
      } else {
        throw 'Geolocation is unavailable!'; // TODO Consider making translatable
      }
    },
    hasGeoLocationError: function hasGeoLocationError() {
      return !!this.geoLocationErrorMessage;
    },
    exit: function exit() {
      window.location = this.exitUrl;
    }
  }
});

/***/ }),

/***/ 6:
/*!*************************************************!*\
  !*** multi ./resources/assets/js/monitoring.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vagrant/code/resources/assets/js/monitoring.js */"./resources/assets/js/monitoring.js");


/***/ })

/******/ });