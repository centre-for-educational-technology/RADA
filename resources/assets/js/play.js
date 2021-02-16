//"use strict";

import Hammer from 'hammerjs';
import VueI18n from 'vue-i18n';

const messages = {};
messages[window.RADA.config.locale] = _.cloneDeep(window.RADA.data.translations);

const i18n = new VueI18n({
    locale: window.RADA.config.locale,
    messages: messages
});

Vue.component('game-map', require('./components/GameMap.vue').default);
Vue.component('game-tutorial-modal', require('./components/GameTutorialModal.vue').default);
Vue.component('game-information-modal', require('./components/GameInformationModal.vue').default);
Vue.component('game-results-modal', require('./components/GameResultsModal.vue').default);
Vue.component('game-rating-modal', require('./components/GameRatingModal.vue').default);
Vue.component('game-image-dialog', require('./components/GameImageDialog.vue').default);

const playGameApp = new Vue({
    i18n,
    el: '#sz-play-app',
    created: function() {
        var vm = this;

        vm.baseUrl = window.RADA.config.base_url;
        vm.exitUrl = window.RADA.config.exit_url;
        vm.isLoggedIn = window.Laravel.isLoggedIn;
        vm.userName = window.Laravel.userName;
        vm.game = window.RADA.data.game;

        window.addEventListener('beforeunload', vm.leaving);

        vm.$on('dialog:tutorial:close', () => {
            vm.setHasSeenTotorial();
        });

        if ( !vm.isGameComplete() ) {
            window.initMap = function() {
                vm.mapInitialised = true;
            };

            vm.getGeoLocation(function(position) {
                vm.latitude = position.coords.latitude;
                vm.longitude = position.coords.longitude;
            }, false, function(error) {
                vm.geoLocationErrorMessage = error.message;
            });

            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = '//maps.googleapis.com/maps/api/js?key=' + window.RADA.config.map.key + '&callback=initMap&libraries=geometry';
            document.body.appendChild(script);
        }
    },
    mounted() {
        if ( !this.isGameComplete() ) {

            if ( !this.hasSeenTutorial() ) {
                this.$refs.tutorialModal.open();
            } else {
                this.$refs.informationModal.open();
            }

            this.$watch('game.complete', () => {
                if ( this.isGameComplete() ) {
                    this.$refs.imageDialog.open();
                    this.$refs.imageDialog.$once('hidden:image:dialog', () => {
                        if(this.game.rating === null) {
                            this.$refs.ratingModal.open(() => {
                                this.$refs.resultsModal.open();
                            });
                        } else {
                            this.$refs.resultsModal.open();
                        }
                    });
                }
            });
        } else {
            if(this.game.rating === null) {
                this.$refs.ratingModal.open(() => {
                    this.$refs.resultsModal.open();
                });
            } else {
                this.$refs.resultsModal.open();
            }
        }
    },
    data() {
        return {
            baseUrl: '',
            exitUrl: '',
            mapInitialised: false,
            latitude: undefined,
            longitude: undefined,
            geoLocationErrorMessage: null,
            checkUnload: true,
            game: null,
            isLoggedIn: false,
            userName: ''
        };
    },
    methods: {
        isLoading() {
            return !(this.mapInitialised && this.latitude && this.longitude);
        },
        isGameComplete() {
            return this.game && this.game.complete;
        },
        getGeoLocation(callback, watch, handleError) {
            if ( typeof handleError !== 'function' ) {
                handleError = function(error) {
                    if ( window.console && window.console.error && typeof window.console.error === 'function' ) {
                        window.console.error('Geolocation error', error); // TODO Consider making traslatable
                    }
                };
            }

            if ( window.navigator.geolocation ) {
                const geolocationOptions = {
                    enableHighAccuracy: true
                };
                if ( watch === true ) {
                    window.navigator.geolocation.watchPosition(callback, handleError, geolocationOptions);
                } else {
                    window.navigator.geolocation.getCurrentPosition(callback, handleError, geolocationOptions);
                }
            } else {
                throw 'Geolocation is unavailable!'; // TODO Consider making translatable
            }
        },
        hasGeoLocationError() {
            return !!this.geoLocationErrorMessage;
        },
        leaving(event) {
            if ( !this.checkUnload) return false;

            const message = this.$t('exit-confirmation');

            event.returnValue = message;
            return message;
        },
        exit() {
            var confirmation = confirm(this.$t('exit-confirmation'));

            if ( confirmation ) {
                // Prevent unload check from being applied
                this.checkUnload = false;
                window.location = this.exitUrl;
            }
        },
        hasSeenTutorial() {
            if ( !window.sessionStorage ) return false;

            return window.sessionStorage.getItem('seen:game:tutorial') === 'true';
        },
        setHasSeenTotorial() {
            if ( window.sessionStorage ) {
                try {
                    window.sessionStorage.setItem('seen:game:tutorial', 'true');
                } catch (err) {
                    // Handles the QuotaExceededError in some versions of Safari on iOS
                }
            }
        }
    }
});
