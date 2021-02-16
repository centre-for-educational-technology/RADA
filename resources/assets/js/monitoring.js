//"use strict";

import VueI18n from 'vue-i18n';

const messages = {};
messages[window.RADA.config.locale] = _.cloneDeep(window.RADA.data.translations);

const i18n = new VueI18n({
    locale: window.RADA.config.locale,
    messages: messages
});

Vue.component('game-map', require('./components/MonitoringMap.vue').default);

const monitoringGameApp = new Vue({
    i18n,
    el: '#sz-play-app',
    created: function() {
        var vm = this;

        vm.baseUrl = window.RADA.config.base_url;
        vm.exitUrl = window.RADA.config.exit_url;
        vm.isLoggedIn = window.Laravel.isLoggedIn;
        vm.userName = window.Laravel.userName;
        vm.game = window.RADA.data.game;

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
    },
    mounted() {

    },
    data() {
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
        isLoading() {
            return !(this.mapInitialised && this.latitude && this.longitude);
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
        exit() {
            window.location = this.exitUrl;
        }
    }
});
