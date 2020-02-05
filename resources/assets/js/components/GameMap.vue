<template>
    <div style="height:100%;width:100%;">
        <game-image-dialog ref="correctImageDialog" v-bind:base-url="baseUrl" v-bind:image="'answer_correct.png'" v-bind:in-animation-class="'bounceInUp'" v-bind:out-animation-class="'bounceOut'"></game-image-dialog>
        <game-image-dialog ref="incorrectImageDialog" v-bind:base-url="baseUrl" v-bind:image="'answer_incorrect.png'" v-bind:in-animation-class="'bounceInDown'" v-bind:out-animation-class="'bounceOutDown'"></game-image-dialog>
        <game-image-dialog ref="submittedImageDialog" v-bind:base-url="baseUrl" v-bind:image="'answer_submitted.png'" v-bind:in-animation-class="'bounceInRight'" v-bind:out-animation-class="'bounceOutLeft'"></game-image-dialog>
        <game-question-modal
                v-bind:question="question"
                v-bind:answer="answer"
                v-bind:game-id="game.id"
                v-bind:base-url="baseUrl"
                v-if="question"
                ref="questionModal">
        </game-question-modal>
        <game-answering-time-modal
                v-bind:question="question"
                v-bind:game-id="game.id"
                v-bind:base-url="baseUrl"
                v-if="question"
                ref="answeringTimeModal">
        </game-answering-time-modal>
        <game-answering-time-is-up-modal
                v-bind:question="question"
                ref="answeringTimeIsUpModal">
        </game-answering-time-is-up-modal>
        <game-access-code-modal v-bind:question="question" ref="accessCodeModal"></game-access-code-modal>
        <notification-modal
                v-bind:title="notificationTitle"
                v-bind:message="notificationMessage"
                ref="notificationModal"
        ></notification-modal>
        <game-messages-list-modal
                v-bind:game_id="game.id"
                type="play"
                ref="gameMessagesListModal"
        ></game-messages-list-modal>
        <div id="map"></div>
        <div id="messages-container"></div>
    </div>
</template>

<script>
    function GameControls(controlDiv, map, playerMarker, vm) {
        const mapTypeIds = _.values(google.maps.MapTypeId);

        const controlUI = document.createElement('div');
        controlUI.id = 'sz-map-controls'
        controlUI.className = 'map-controls'
        controlDiv.appendChild(controlUI);

        const completionControlItem = document.createElement('i');
        completionControlItem.className = 'label label-success';
        completionControlItem.style.fontSize = '20px';
        completionControlItem.style.position = 'relative';
        completionControlItem.style.top = '-7px';
        completionControlItem.style.marginLeft = '5px';
        completionControlItem.style.marginRight = '5px';
        completionControlItem.textContent = vm.getAnsweredQuestionsCount() + '/' + _.size(vm.game.activity.questions);
        controlUI.appendChild(completionControlItem);

        vm.$watch('game.answers', function() {
            completionControlItem.textContent = vm.getAnsweredQuestionsCount() + '/' + _.size(vm.game.activity.questions);
        });

        // ------------- MESSAGING --------------------------

        const messagingControlItem = document.createElement('i');
        messagingControlItem.className = 'mdi mdi-email-outline';
        controlUI.appendChild(messagingControlItem);

        messagingControlItem.addEventListener('click', function () {
            vm.$refs.gameMessagesListModal.open();
        });

        const flashExerciseControlItem = document.createElement('i');
        flashExerciseControlItem.className = 'mdi mdi-flash';
        if (vm.activeFlashExerciseId === null) {
            flashExerciseControlItem.className += ' hidden';
        }
        flashExerciseControlItem.id = 'user-flash-exercise-control-item';
        controlUI.appendChild(flashExerciseControlItem);

        function toggleFlashColor() {
            setTimeout(() => {
                flashExerciseControlItem.style = 'color: #ff9800';
                setTimeout(() => {
                    flashExerciseControlItem.style = 'color: #000000';
                    toggleFlashColor();
                }, 2000);
            }, 1000);
        }
        toggleFlashColor();

        flashExerciseControlItem.addEventListener('click', function () {
            const questions = vm.game.activity.questions.filter(question => {
                return question.id === vm.activeFlashExerciseId;
            });
            if (questions.length > 0) {
                const question = questions[0];
                const answer = vm.getAnswer(question.id);
                vm.openQuestionModal(question, answer);
            }
        });

        const userControlItem = document.createElement('i');
        userControlItem.className = 'mdi';
        if ( vm.$parent.isLoggedIn ) {
            userControlItem.className += ' mdi-account';
        } else {
            userControlItem.className += ' mdi-account-off';
        }
        userControlItem.title = vm.$parent.userName;
        controlUI.appendChild(userControlItem);

        let userControlTooltipVisible = false;
        userControlItem.addEventListener('click', function() {
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
            if ( userControlTooltipVisible ) {
                $(userControlItem).tooltip('show');
            }
        });

        const informationControlItem = document.createElement('i');
        informationControlItem.className = 'mdi mdi-information-outline';
        informationControlItem.title = vm.$t('info');
        controlUI.appendChild(informationControlItem);

        informationControlItem.addEventListener('click', function() {
            vm.$parent.$refs.informationModal.open();
        });

        const navigationControlItem = document.createElement('i');
        navigationControlItem.className = 'mdi mdi-crosshairs';
        navigationControlItem.title = vm.$t('position-tracking');
        controlUI.appendChild(navigationControlItem);

        navigationControlItem.addEventListener('click', function() {
            if ( map.szTrackingEnabled ) {
                map.szTrackingEnabled = false;
                navigationControlItem.className = 'mdi mdi-crosshairs';
            } else {
                map.panTo(playerMarker.getPosition());
                google.maps.event.trigger(playerMarker, 'click');
                map.szTrackingEnabled = true;
                navigationControlItem.className = 'mdi mdi-crosshairs-gps active';
            }
        });

        const boundsControlItem = document.createElement('i');
        boundsControlItem.className = 'mdi mdi-map-marker-multiple';
        boundsControlItem.title = vm.$t('apply-item-bounds');
        controlUI.appendChild(boundsControlItem);

        boundsControlItem.addEventListener('click', function() {
            const bounds = vm.getMarkerBounds();

            if ( !bounds.isEmpty() ) {
                map.fitBounds(bounds);
            }
        });

        const exitControlIcon = document.createElement('i');
        exitControlIcon.className = 'mdi mdi-exit-to-app';
        exitControlIcon.title = vm.$t('exit');
        controlUI.appendChild(exitControlIcon);

        exitControlIcon.addEventListener('click', function() {
            vm.$parent.exit();
        });

        const mapTypeControlItem = document.createElement('i');
        mapTypeControlItem.className = 'mdi mdi-layers';
        mapTypeControlItem.title = vm.$t('change-map-type');
        controlUI.appendChild(mapTypeControlItem);

        mapTypeControlItem.addEventListener('click', function() {
            let nextIndex = _.indexOf(mapTypeIds, map.mapTypeId) + 1;

            if ( nextIndex === mapTypeIds.length ) {
                nextIndex = 0;
            }

            map.setMapTypeId(mapTypeIds[nextIndex]);
        });
    }

    var connectMarkers =  window.RADA.config.connect_markers || false;
    var enableStreetView = window.RADA.config.map.enableStreetView || false;

    import MarkerIconMixin from './../mixins/MarkerIcon.js';

    export default {
        components: {
            'game-question-modal': require('./GameQuestionModal.vue').default,
            'game-answering-time-modal': require('./GameAnsweringTimeModal.vue').default,
            'game-answering-time-is-up-modal': require('./GameAnsweringTimeIsUpModal.vue').default,
            'game-access-code-modal': require('./GameAccessCodeModal.vue').default,
            'game-image-dialog': require('./GameImageDialog.vue').default,
            'game-messages-list-modal': require('./GameMessagesListModal.vue').default,
            'notification-modal': require('./NotificationModal.vue').default
        },
        props: ['latitude', 'longitude', 'game', 'baseUrl'],
        mixins: [MarkerIconMixin],
        mounted() {
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
                styles: [
                    {
                        featureType: 'poi',
                        stylers: [{visibility: 'off'}]
                    },
                    {
                        featureType: 'transit.station',
                        stylers: [{visibility: 'off'}]
                  },
                ]
            };
            this.mapData.iconAnchor = new google.maps.Point(20, 20);
            this.mapData.iconSize = new google.maps.Size(60, 60);
            this.mapData.iconScaledSize = new google.maps.Size(40, 40);

            this.$nextTick(() => {
                this.initMap();
                this.getGameData();
            });

        },
        data() {
            return {
                question: null,
                answer: null,
                gpsError: false,
                position: null,
                flashExercises: [],
                activeFlashExerciseId: null,
                notificationTitle: null,
                notificationMessage: null,
                gameIsStopped: false
            };
        },
        watch: {
            gpsError(value) {
                const mapControlsElement = document.getElementById('sz-map-controls');

                // Ignore any attempts to show GPS error until UI is ready
                if ( !mapControlsElement ) return;

                const elementId = 'sz-gps-error',
                    element = document.getElementById('sz-gps-error');

                if ( value === true ) {
                    if ( !element ) {
                        this.initGpsErrorControl(elementId);
                    } else {
                        element.style.display = 'initial';
                    }
                } else {
                    if ( element ) {
                        element.style.display = 'none';
                    }
                }
            }
        },
        methods: {
            initMap() {
                var _this = this;

                this.mapData.map = new google.maps.Map(document.getElementById('map'), this.mapData.mapOptions);

                this.mapData.infoWindow = new google.maps.InfoWindow({
                    disableAutoPan: true
                });

                this.initGroundOverlays();

                this.initPlayerMarker();

                this.initGameControls();

                if ( _this.game.activity.questions ) {
                    var map = _this.mapData.map,
                        markers = _this.mapData.markers,
                        infoWindow = _this.mapData.infoWindow,
                        playerMarker = _this.mapData.playerMarker;

                    _.each(_this.game.activity.questions, function(question) {
                        if (question.is_flash) {
                            _this.flashExercises.push(question);
                            setTimeout(() => {
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
                            optimized: false
                        });

                        _this.$nextTick(function() {
                            _this.detectAndSetMarkerIcon(marker);
                        });

                        markers.push(marker);

                        marker.addListener('click', function() {
                            const answer = _this.getAnswer(question.id);

                            if ( _this.isAnswered(question.id) ) {
                                _this.openQuestionModal(question, answer);
                                return;
                            }

                            if (_this.getEnforceItemsOrder() > 0) {
                                let nextMarkers = _this.getNextUnansweredMarkers();
                                if (nextMarkers.length > 0) {
                                    let nextMarker = nextMarkers.find(thisMarker => {
                                        return marker.questionId === thisMarker.questionId;
                                    });
                                    if (typeof nextMarker === 'undefined') {
                                        return _this.openNewInfoWindow(infoWindow, marker, map);
                                    }
                                } else {
                                    return _this.openNewInfoWindow(infoWindow, marker, map);
                                }
                            }

                            if ( _this.hasProximityCheck() ) {
                                var distance = google.maps.geometry.spherical.computeDistanceBetween(playerMarker.getPosition(), marker.getPosition());

                                if ( distance <= _this.getProximityRadius() ) {
                                    _this.openQuestionModal(question, answer);
                                } else if ( _this.hasAccessCode(question) ) {
                                    _this.openAccessCodeModal(question);
                                } else {
                                    _this.openNewInfoWindow(infoWindow, marker, map);
                                }
                            } else {
                                _this.openQuestionModal(question, answer);
                            }
                        });
                    });

                    if ( connectMarkers ) {
                        _this.connectMarkers();
                    }

                    _this.initUpdateClosestUnansweredMarkerArrow();
                }

                this.$parent.getGeoLocation(function(position) {
                    var map = _this.mapData.map,
                        playerMarker = _this.mapData.playerMarker;

                    _this.gpsError = false;

                    playerMarker.setPosition({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                    if ( map.szTrackingEnabled === true ) {
                        map.panTo(playerMarker.getPosition());
                    }
                    _this.initUpdateClosestUnansweredMarkerArrow();
                    if ( _this.hasProximityCheck() ) {
                        // TODO Might make sense to cancel in case location
                        // does change rpidly
                        // Giving it half a second or so should be good enough
                        _.each(_this.mapData.markers, function(marker) {
                            if ( !_this.isAnswered(marker.questionId) ) {
                                _this.detectAndSetMarkerIcon(marker);
                            }
                        });
                    }

                    _this.setPosition(position);

                    _this.logPlayerPosition(_this.getPosition());
                    _this.initPlayerPositionLogging();

                }, true, function(error) {
                    _this.gpsError = true;
                });
            },
            initActiveFlashExercise() {
                this.getActiveFlashExercise();
            },
            getActiveFlashExercise() {
                this.$http.get(this.baseUrl + '/api/games/' + this.game.id + '/get-active-flash-exercise').then(response => {
                    if (typeof response.body.id !== 'undefined') {
                        $('#user-flash-exercise-control-item').removeClass('hidden');
                        if (this.activeFlashExerciseId === null) {
                            this.activeFlashExerciseId = parseInt(response.body.id);
                            this.showNotification(
                                this.$t('new-flash-exercise-title'),
                                this.$t('new-flash-exercise-message')
                            )
                        }
                    } else {
                        if (this.activeFlashExerciseId !== null) {
                            this.activeFlashExerciseId = null;
                            $('#user-flash-exercise-control-item').addClass('hidden');
                            this.$refs.questionModal.closeQuestion(
                                this.$t('flash-exercise-has-been-deactivated')
                            );
                        }
                    }
                    setTimeout(() => {
                        this.getActiveFlashExercise();
                    }, 5000);
                }, error => {

                });
            },
            getGameData() {
                this.$http.get(this.baseUrl + '/api/games/' + this.game.id + '/get-game-data').then(response => {
                    if (typeof response.body !== 'undefined') {
                        let data = response.body;
                        this.showHideFlashExercises(data.flash_exercise);
                        this.showHideGameIsStopped(data.start_stop);
                        this.showNewMessages(data.messages);
                    }
                });
                setTimeout(() => {
                    this.getGameData();
                }, 5000);
            },
            showNewMessages(messages) {
                this.showNextMessage(messages, 0);
            },
            showNextMessage(messages, index) {
                let length = messages.length;
                if (index < length) {
                    setTimeout(() => {
                        let message = messages[index];
                        this.openNewMessageModal(message);

                        if (index + 1 < length) {
                            setTimeout(() => {
                                this.showNextMessage(messages, index + 1);
                            }, 5000);
                        }
                    }, 5000);
                }
            },
            openNewMessageModal(message) {
                this.notificationTitle = this.$t('new-message');
                this.notificationMessage = message.message;
                this.$refs.notificationModal.open();
            },
            showHideFlashExercises(data) {
                if (typeof data.id !== 'undefined') {
                    $('#user-flash-exercise-control-item').removeClass('hidden');
                    if (this.activeFlashExerciseId === null) {
                        this.activeFlashExerciseId = parseInt(data.id);
                        this.showNotification(
                            this.$t('new-flash-exercise-title'),
                            this.$t('new-flash-exercise-message')
                        )
                    }
                } else {
                    if (this.activeFlashExerciseId !== null) {
                        this.activeFlashExerciseId = null;
                        this.$refs.notificationModal.close();
                        $('#user-flash-exercise-control-item').addClass('hidden');
                        this.$refs.questionModal.closeQuestion(
                            this.$t('flash-exercise-has-been-deactivated')
                        );
                    }
                }
            },
            showHideGameIsStopped(data) {
                if ((typeof data.started !== 'undefined' && data.started === 1) === false) {
                    this.$parent.checkUnload = false;
                    window.location.href = this.baseUrl + '/games/' + this.game.id + '/stopped'
                }
            },
            showNotification(title, message) {
                this.$refs.notificationModal.close();
                this.$nextTick(() => {
                    this.notificationTitle = title;
                    this.notificationMessage = message;
                    this.$refs.notificationModal.open();
                });
            },
            initGroundOverlays() {
                this.mapData.skansenGroundOverlay = new google.maps.GroundOverlay(this.baseUrl + '/img/map/overlays/skansen.png',{
                    north: 59.329167,
                    south: 59.324011,
                    east: 18.111242,
                    west: 18.099022
                }, {
                    clickable: false,
                    map: this.mapData.map
                });
            },
            initGameControls() {
                var map = this.mapData.map,
                    playerMarker = this.mapData.playerMarker,
                    gameControlsDiv = document.createElement('div'),
                    gameControls = new GameControls(gameControlsDiv, map, playerMarker, this);

                // XXX This is a strange code pience that sends index without a reason
                gameControls.index = 1;
                map.controls[google.maps.ControlPosition.TOP_RIGHT].push(gameControlsDiv);
            },
            initGpsErrorControl(elementId) {
                const element = document.createElement('div');
                element.id = elementId;
                element.innerHTML = '<span>' + this.$t('gps-error') + '</span>';
                element.style['margin-top'] = document.getElementById('sz-map-controls').offsetHeight + 'px';
                this.mapData.map.controls[google.maps.ControlPosition.TOP_LEFT].push(element);
            },
            closeInfoWindow() {
                var infoWindow = this.mapData.infoWindow;

                if ( infoWindow && infoWindow.getMap() ) {
                    infoWindow.close();
                }
            },
            openNewInfoWindow(infoWindow, marker, map) {
                this.closeInfoWindow();
                infoWindow.setContent(marker.title);
                infoWindow.open(map, marker);

                return true;
            },
            initPlayerMarker() {
                var circle,
                    playerMarker,
                    activeDistanceCircle,
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

                playerMarker.addListener('click', function() {
                    _this.closeInfoWindow();
                    infoWindow.setContent(this.title);
                    infoWindow.open(map, this);
                });

                if ( this.hasProximityCheck() ) {
                    var activeDistanceCircle = new google.maps.Circle({
                        map: map,
                        radius: this.getProximityRadius(),
                        fillColor: 'blue',
                        fillOpacity: 0.25,
                        strokeColor: 'blue',
                        strokeWeight: 1,
                        strokeOpacity: 0.5
                    });
                    activeDistanceCircle.bindTo('center', playerMarker, 'position');
                }

                google.maps.event.trigger(playerMarker, 'click');

                this.mapData.playerMarker = playerMarker;
            },
            findQuestionById(id) {
                return _.find(this.game.activity.questions, ['id', id]);
            },
            isAnswered(questionId) {
                const answer = this.getAnswer(questionId);
                if (answer === null) {
                    return false;
                }
                return answer.is_answered > 0;
            },
            isCorrect(questionId) {
                const answer = this.getAnswer(questionId);

                return answer && answer.correct === true;
            },
            hasAccessCode(question) {
                return !!( question && question.access_code );
            },
            markAnswered(id, answer) {
                this.$set(this.game.answers, id, answer);

                // TODO Might make sense to raise an error if marker can not be found
                var marker = _.find(this.mapData.markers, function(marker) { return marker.questionId === id; });

                if ( marker ) {
                    this.detectAndSetMarkerIcon(marker);
                }

                var answerIds = _.keys(this.game.answers).map(id => {
                    return _.toNumber(id);
                });
                var questionIds = _.map(this.game.activity.questions, question => {
                    return question.id;
                });

                this.initUpdateClosestUnansweredMarkerArrow();

                if ( _.intersection(questionIds, answerIds).length === questionIds.length && answer.is_answered) {
                    this.game.complete = true;
                }
            },
            connectMarkers() {
                var map = this.mapData.map,
                    markers = this.mapData.markers;

                if ( markers.length > 1 ) {
                    _.each(markers, (marker, index) => {
                        if ( index === 0 ) {
                            return;
                        }

                        var line = new google.maps.Polyline({
                            path: [
                                markers[index-1].getPosition(),
                                markers[index].getPosition()
                            ],
                            strokeWeight: 2,
                            strokeOpacity: 0.5,
                            icons: [{
                                icon: {path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW},
                                offset: '100%'
                            }],
                            geodesic: true,
                            map: map
                        });
                    });
                }
            },
            hasProximityCheck() {
                return this.game.activity.proximity_check;
            },
            getProximityRadius() {
                return this.game.activity.proximity_radius || 25;
            },
            getEnforceItemsOrder() {
                return parseInt(this.game.activity.enforce_items_order) || 0;
            },
            openAnsweringTimeModal(question) {
                this.question = question;
                this.$nextTick(() => {
                    this.$refs.answeringTimeModal.open();
                });
            },
            getAnswer(questionId, defaultValue) {
                if (typeof defaultValue === 'undefined') {
                    defaultValue = null;
                }
                return _.get(this.game.answers, questionId, defaultValue);
            },
            isAnswering(questionId) {
                let answer = this.getAnswer(questionId);
                if (answer === null || answer.is_answered > 0) {
                    return false;
                } else if (answer.answering_start_time != null) {
                    return true;
                }
                return false;
            },
            openAnsweringTimeIsUpModal(message) {
                this.$nextTick(() => {
                    this.$refs.answeringTimeIsUpModal.open(message);
                });
            },
            openQuestionModal(question, answer) {
                if (!!question.answering_time_check &&
                    this.isAnswering(question.id) === false &&
                    this.isAnswered(question.id) === false) {
                    this.openAnsweringTimeModal(question);
                } else {
                    this.question = question;
                    this.answer = answer ? answer : null;
                    this.$nextTick(() => {
                        this.$refs.questionModal.open();
                    });
                }
            },
            openAccessCodeModal(question) {
                this.question = question;
                this.answer = null;
                this.$nextTick(() => {
                    this.$refs.accessCodeModal.open();
                });
            },
            detectMarkerIconState(marker) {
                // TODO Check if we should fail in case question could not be found
                const question = this.findQuestionById(marker.questionId);
                const distance = google.maps.geometry.spherical.computeDistanceBetween(
                    this.mapData.playerMarker.getPosition(),
                    marker.getPosition()
                );

                if ( question && this.isAnswered(question.id) ) {
                    return this.isCorrect(question.id) ? 'correct' : 'incorrect';
                } else if (this.getEnforceItemsOrder() > 0) {
                    let nextMarkers = this.getNextUnansweredMarkers();
                    if (nextMarkers.length > 0) {
                        for (let nextMarkerIndex in nextMarkers) {
                            let nextMarker = nextMarkers[nextMarkerIndex];
                            if (marker.questionId === nextMarker.questionId) {
                                return 'active';
                            }
                        }
                        return 'inactive';
                    } else {
                        return 'inactive';
                    }
                } else if ( this.hasProximityCheck() && distance > this.getProximityRadius()) {
                    return 'inactive';
                }

                return 'active';
            },
            detectAndSetMarkerIcon(marker) {
                if (typeof marker.isUser !== 'undefined') {
                    return false;
                }
                const state = this.detectMarkerIconState(marker);
                let hasAccessCode = marker.hasAccessCode;
                if (this.getEnforceItemsOrder() > 0) {
                    hasAccessCode = false;
                }

                marker.setIcon({
                    anchor: this.mapData.iconAnchor,
                    size: this.mapData.iconSize,
                    scaledSize: this.mapData.iconScaledSize,
                    url: this.getIconUrl(state, marker.questionType, hasAccessCode)
                });
            },
            getMarkerBounds() {
                if ( this.mapData.markerBounds ) return this.mapData.markerBounds;

                this.mapData.markerBounds = new google.maps.LatLngBounds();

                if ( this.mapData.markers.length > 0 ) {
                    const vm = this;

                    _.each(this.mapData.markers, function(marker) {
                        vm.mapData.markerBounds.extend(marker.getPosition());
                    });
                }

                return this.mapData.markerBounds;
            },
            getAnsweredQuestionsCount() {
                if ( _.size(this.game.activity.questions) === 0 || _.size(this.game.answers) === 0 ) return 0;

                var questionIds = _.map(this.game.activity.questions, question => {
                    return question.id;
                });

                var answered = _.filter(this.game.answers, answer => {
                    return questionIds.indexOf(answer.question) !== -1;
                });

                return _.size(answered);
            },
            getUnansweredMarkers() {
                let vm = this;
                return _.filter(this.mapData.markers, marker => {
                    return typeof marker.isUser === 'undefined' && !vm.isAnswered(marker.questionId);
                });
            },
            getClosestUnansweredMarker() {
                let vm = this,
                    unansweredMarkers = vm.getUnansweredMarkers(),
                    playerMarker = this.mapData.playerMarker;

                if ( unansweredMarkers.length > 0 ) {
                    return _.minBy(unansweredMarkers, marker => {
                        return google.maps.geometry.spherical.computeDistanceBetween(playerMarker.getPosition(), marker.getPosition());
                    });
                }

                return null;
            },
            getNextUnansweredMarker() {
                let vm = this,
                    unansweredMarkers = vm.getUnansweredMarkers(),
                    playerMarker = this.mapData.playerMarker;

                if ( unansweredMarkers.length > 0 ) {
                    return _.minBy(unansweredMarkers, marker => {
                        let question = vm.findQuestionById(marker.questionId);
                        if (question) {
                            let position = parseInt(question.position);
                            let distance = google.maps.geometry.spherical.computeDistanceBetween(
                                playerMarker.getPosition(),
                                marker.getPosition()
                            );
                            return parseFloat(position + '.' + distance);
                        }
                        return 10000;
                    });
                }

                return null;
            },
            getNextUnansweredMarkers() {
                let vm = this,
                    unansweredMarkers = vm.getUnansweredMarkers(),
                    markers = [];
                if ( unansweredMarkers.length > 0 ) {
                    let nextMarker = this.getNextUnansweredMarker();
                    if (nextMarker && nextMarker.questionId) {
                        let nextQuestionId = nextMarker.questionId;
                        let nextQuestion = this.findQuestionById(nextQuestionId);
                        if (typeof nextQuestion !== 'undefined') {
                            let nextPosition = nextQuestion.position;
                            _.each(unansweredMarkers, marker => {
                                let question = vm.findQuestionById(marker.questionId);
                                if (question && question.position === nextPosition) {
                                    markers.push(marker);
                                }
                            });
                        }
                    }
                }

                return markers;
            },
            initUpdateClosestUnansweredMarkerArrow() {
                let vm = this;
                let marker = null;
                if(vm.getEnforceItemsOrder() > 0) {
                    marker = vm.getNextUnansweredMarker();
                } else {
                    marker = vm.getClosestUnansweredMarker();
                }

                if ( !marker ) {
                    if ( vm.mapData.closestUnansweredMarkerArrow ) {
                        vm.mapData.closestUnansweredMarkerArrow.setMap(null);
                    }
                    return;
                }

                if ( !vm.mapData.closestUnansweredMarkerArrow ) {
                    vm.mapData.closestUnansweredMarkerArrow = new google.maps.Polyline({
                        path: [
                            vm.mapData.playerMarker.getPosition(),
                            marker.getPosition()
                        ],
                        strokeColor: 'red',
                        strokeWeight: 2,
                        strokeOpacity: 0.4,
                        icons: [{
                            icon: {
                                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                                fillColor: 'red',
                                strokeColor: 'red',
                                fillOpacity: 0.8,
                                strokeOpacity: 0.8,
                                scale: 4
                            },
                            offset: '50px',
                        }],
                        geodesic: true,
                        map: vm.mapData.map,
                        zIndex: 2
                    });
                } else {
                    vm.mapData.closestUnansweredMarkerArrow.setPath([
                        vm.mapData.playerMarker.getPosition(),
                        marker.getPosition()
                    ]);
                }

                this.detectAndSetMarkerIcon(marker);
            },
            initPlayerPositionLogging() {
                if ( this.game.complete ) return;

                const vm = this;

                const playerPositionIntervalId = setInterval(() => {
                    vm.logPlayerPosition(vm.getPosition());
                }, 60000);

                vm.$watch('game.complete', (newVal, oldVal) => {
                    if ( newVal === true ) {
                        clearInterval(playerPositionIntervalId);
                    }
                });
            },
            setPosition(position) {
                this.position = position;
            },
            getPosition() {
                return this.position;
            },
            logPlayerPosition(position) {
                if ( !position ) return;

                var data = {
                    game_id: this.game.id,
                    position: {
                        coords: {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                            altitude: position.coords.altitude,
                            accuracy: position.coords.accuracy,
                            altitudeAccuracy: position.coords.altitudeAccuracy,
                            heading: position.coords.heading,
                            speed: position.coords.speed
                        },
                        timestamp: position.timestamp
                    },
                };

                this.$http.post(this.baseUrl + '/api/games/position', data).then(response => {
                    // Succeed silently
                }, response => {
                    // Fail silently
                });
            },
            openImageDialog(id, answer) {
                const question = this.findQuestionById(id);
                let dialog;

                // TODO Consider creating a mixin that would have methods to
                // determine question types
                if ( question.type === 2 || question.type === 3 || question.type === 8 ) {
                    if ( answer.correct === true ) {
                        dialog = this.$refs.correctImageDialog;
                    } else {
                        dialog = this.$refs.incorrectImageDialog;
                    }
                } else {
                    dialog = this.$refs.submittedImageDialog;
                }

                dialog.open();
                dialog.$once('hidden:image:dialog', () => {
                    this.markAnswered(id, answer);
                });
            }
        }
    }
</script>
<style>
    .grading-control-item {
        position: relative;
    }
    .grading-control-item .badge {
        position: absolute;
        top: 0;
        right: -5px;
        background: #3097d1;
    }
    .btn.mdi-flash {
        color: #000;
    }
    .btn.mdi-flash:hover {
        color: #FF9800;
    }
</style>
