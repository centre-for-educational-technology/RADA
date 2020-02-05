<template>
    <div style="height:100%;width:100%;">
        <flash-exercises-list-modal
                v-bind:questions="flashExercises"
                v-bind:game_id="game.id"
                ref="flashExercisesListModal"
        ></flash-exercises-list-modal>
        <game-messages-list-modal
                v-bind:game_id="game.id"
                type="monitoring"
                ref="gameMessagesListModal"
        ></game-messages-list-modal>
        <notification-modal
                v-bind:title="notificationTitle"
                v-bind:message="notificationMessage"
                ref="notificationModal"
        ></notification-modal>
        <player-info-modal
                v-bind:tasks="currentPlayerCompletedTasks"
                v-bind:title="currentPlayerName"
                ref="playerInfoModal"
        ></player-info-modal>
        <task-info-modal
                v-bind:players="currentTaskCompletedPlayers"
                v-bind:title="currentTaskName"
                v-bind:task_id="currentTaskId"
                ref="taskInfoModal"
        ></task-info-modal>
        <game-information-modal
                v-bind:activity="game.activity"
                ref="informationModal"
        ></game-information-modal>
        <div id="map"></div>
    </div>
</template>

<script>
    function GameControls(controlDiv, map, playerMarker, vm) {
        const mapTypeIds = _.values(google.maps.MapTypeId);

        const controlUI = document.createElement('div');
        controlUI.id = 'sz-map-controls'
        controlUI.className = 'map-controls'
        controlDiv.appendChild(controlUI);

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
            vm.$refs.informationModal.open();
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


        /*
         * --------- ADMIN CONTROLS
         */

        const adminControls = document.createElement('div');
        adminControls.className = 'map-controls';
        controlDiv.appendChild(adminControls);

        // ------------- FLASH EXERCISE ---------------------

        const flashExerciseAdminControlItem = document.createElement('i');
        flashExerciseAdminControlItem.className = 'mdi mdi-flash hidden';
        flashExerciseAdminControlItem.id = 'admin-flash-exercises-control-item';
        adminControls.appendChild(flashExerciseAdminControlItem);

        flashExerciseAdminControlItem.addEventListener('click', function () {
            vm.openFlashExercisesListModal();
        });

        // ------------- MESSAGING --------------------------

        const messagingControlItem = document.createElement('i');
        messagingControlItem.className = 'mdi mdi-email-outline';
        adminControls.appendChild(messagingControlItem);

        messagingControlItem.addEventListener('click', function () {
            vm.$refs.gameMessagesListModal.open();
        });

        // ------------- GRADING ----------------------------

        const gradingControlItem = document.createElement('i');
        gradingControlItem.className = 'mdi mdi-owl grading-control-item hidden';
        const gradingControlItemBadge = document.createElement('span');
        gradingControlItemBadge.className = 'badge badge-light';
        gradingControlItemBadge.innerText = '0';
        gradingControlItem.appendChild(gradingControlItemBadge);
        adminControls.appendChild(gradingControlItem);

        gradingControlItem.addEventListener('click', function() {
            window.open(vm.baseUrl + '/grading/' + vm.game.activity.id, '_blank');
        });

        function getCountOfUngradedAnswers() {
            vm.$http.get(vm.baseUrl + '/api/games/' + vm.game.id + '/get-count-of-ungraded-answers').then(response => {
                gradingControlItemBadge.innerText = response.body.count;

                if (response.body.count !== null) {
                    if (response.body.count > 0) {
                        gradingControlItemBadge.className = 'badge badge-light';
                    } else {
                        gradingControlItemBadge.className = 'badge badge-light hidden';
                    }
                    gradingControlItem.className = 'mdi mdi-owl grading-control-item';
                    setTimeout(() => {
                        getCountOfUngradedAnswers();
                    }, 10000);
                }
            }, error => {
                gradingControlItemBadge.innerText = '0';
                gradingControlItemBadge.className = 'badge badge-light hidden';
            });
        }
        getCountOfUngradedAnswers();

        // -------------- STATISTICS --------------------------

        const statisticsControlItem = document.createElement('i');
        statisticsControlItem.className = 'mdi mdi-chart-line';
        adminControls.appendChild(statisticsControlItem);

        statisticsControlItem.addEventListener('click', function () {
            window.open(vm.baseUrl + '/manage/game-statistics/' + vm.game.id, '_blank');
        });

        // -------------- START STOP --------------------------

        const startStopControlItem = document.createElement('i');
        if (vm.game.activity.started === 1) {
            startStopControlItem.className = 'mdi mdi-stop-circle-outline start-stop';
        } else {
            startStopControlItem.className = 'mdi mdi-play-circle-outline start-stop';
        }
        adminControls.appendChild(startStopControlItem);

        startStopControlItem.addEventListener('click', function () {
            let start = vm.game.activity.started === 1 ? 0 : 1;
            vm.$http.get(vm.baseUrl + '/api/games/' + vm.game.id + '/start-stop-game?start=' + start).then(response => {
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

    import MarkerIconMixin from './../mixins/MarkerIcon.js';

    export default {
        components: {
            'flash-exercises-list-modal': require('./FlashExercisesListModal.vue').default,
            'game-messages-list-modal': require('./GameMessagesListModal.vue').default,
            'notification-modal': require('./NotificationModal.vue').default,
            'player-info-modal': require('./PlayerInfoModal.vue').default,
            'task-info-modal': require('./TaskInfoModal.vue').default,
            'game-information-modal': require('./GameInformationModal.vue').default
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
                gameIsStopped: false,
                currentPlayerCompletedTasks: [],
                currentPlayerName: '',
                currentTaskName: '',
                currentTaskId: null,
                currentTaskCompletedPlayers: []
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
                        markers = _this.mapData.markers;

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
                            optimized: false,
                            users: []
                        });

                        _this.$nextTick(function() {
                            _this.detectAndSetMarkerIcon(marker);
                        });

                        markers.push(marker);

                        marker.addListener('click', function() {
                            _this.openNewTaskInfoModal({
                                name: marker.title,
                                users: marker.users,
                                id: marker.questionId
                            });
                        });
                    });
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

                    _this.setPosition(position);
                }, true, function(error) {
                    _this.gpsError = true;
                });

                this.getPositionOfPlayersWhoPlayMyGame();
            },
            showNotification(title, message) {
                this.$refs.notificationModal.close();
                this.notificationTitle = title;
                this.notificationMessage = message;
                this.$refs.notificationModal.open();
            },
            openFlashExercisesListModal() {
                this.$refs.flashExercisesListModal.open();
            },
            getPositionOfPlayersWhoPlayMyGame() {
                let _this = this;
                let data = {
                    game_id: this.game.id
                };
                this.$http.post(_this.baseUrl + '/api/games/get-position-of-players-who-play-my-game', data).then(response => {
                    let items = response.body;
                    if (items === 'false') {
                        return ;
                    }
                    let itemsLength = items.length;
                    let markers = _this.mapData.markers;
                    let markersLength = markers.length;
                    for (let i=0; i<markersLength; i++) {
                        if (typeof markers[i].isUser !== 'undefined') {
                            markers[i].setMap(null);
                        } else {
                            markers[i].users = [];
                            for (let k=0; k<itemsLength; k++) {
                                let item = items[k];
                                let completedTasks = item.completed_tasks;
                                let completedTasksLength = completedTasks.length;
                                for (let j=0; j<completedTasksLength; j++) {
                                    let completedTask = completedTasks[j];
                                    if (completedTask.id === markers[i].questionId) {
                                        markers[i].users.push(item);
                                    }
                                }
                            }
                        }
                    }

                    let map = _this.mapData.map;
                    for (let i=0; i<itemsLength; i++) {
                        let item = items[i];
                        if (item.status === 'hidden') {
                            continue;
                        }
                        let marker = new google.maps.Marker({
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
                        let circle = {
                            path: google.maps.SymbolPath.CIRCLE,
                            fillColor: item.status === 'active' ? 'orange' : 'gray',
                            fillOpacity: 1.0,
                            scale: 4.5,
                            strokeColor: 'orange',
                            strokeWeight: 1
                        };
                        marker.setIcon(circle);
                        marker.addListener('click', function() {
                            _this.openNewPlayerInfoModal(item);
                        });
                        markers.push(marker);
                    }

                    setTimeout(() => {
                        _this.getPositionOfPlayersWhoPlayMyGame();
                    }, 60000);
                }, response => {
                    console.log(response.body);
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
            openNewPlayerInfoModal(data) {
                this.currentPlayerName = data.name;
                this.currentPlayerCompletedTasks = data.completed_tasks;
                this.$refs.playerInfoModal.open();
            },
            openNewTaskInfoModal(data) {
                this.currentTaskName = data.name;
                this.currentTaskId = data.id;
                this.currentTaskCompletedPlayers = data.users;
                this.$refs.taskInfoModal.open();
            },
            initPlayerMarker() {
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

                playerMarker.addListener('click', function() {
                    _this.closeInfoWindow();
                    infoWindow.setContent(this.title);
                    infoWindow.open(map, this);
                });

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
            detectMarkerIconState(marker) {
                return 'active';
            },
            detectAndSetMarkerIcon(marker) {
                if (typeof marker.isUser !== 'undefined') {
                    return false;
                }
                const state = this.detectMarkerIconState(marker);
                let hasAccessCode = true;

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
            setPosition(position) {
                this.position = position;
            },
            getPosition() {
                return this.position;
            },
            resetPlayerInfoModal() {
                this.currentPlayerCompletedTasks = [];
                this.currentPlayerName = null;
            },
            resetTaskInfoModal()
            {
                this.currentTaskCompletedPlayers = [];
                this.currentTaskName = null;
                this.currentTaskId = null;
            }
        }
    }
</script>
<style>
    .grading-control-item {
        position: relative;
        color: #000;
    }
    .grading-control-item .badge {
        position: absolute;
        top: 0;
        right: -5px;
        background: #3097d1;
    }
    .map-controls .start-stop.mdi-play-circle-outline {
        color: green;
    }
    .map-controls .start-stop.mdi-stop-circle-outline {
        color: red;
    }
</style>
