
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.initMap = function() {
    var enableStreetView = window.Laravel.map.enableStreetView || false;

    function $t(key) {
        if ( window.Laravel.translations && window.Laravel.translations.hasOwnProperty(key) ) {
            return window.Laravel.translations[key];
        }

        console.warn('Could not find translation for: ' + key);
        return key;
    }

    function initGameControls(map, cb) {
        if ( !navigator.geolocation ) {
            return false;
        }

        var gameControls = document.createElement('div'),
            controlUI = document.createElement('div');

        controlUI.id = 'sz-map-controls';
        controlUI.className = 'map-controls'
        gameControls.appendChild(controlUI);

        var navigationControlItem = document.createElement('i');
        navigationControlItem.className = 'mdi mdi-target';
        navigationControlItem.title = $t('set-current-position');
        controlUI.appendChild(navigationControlItem);

        var inGeoposition = false;
        var zooSelect = document.getElementById('zoo');
        navigationControlItem.addEventListener('click', function() {
            if ( inGeoposition ) return;
            inGeoposition = true;
            zooSelect.disabled = true;

            navigationControlItem.style.color = '#cccccc';
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    navigationControlItem.style.color = null;
                    zooSelect.disabled = false;
                    inGeoposition = false;
                    cb(position);
                },
                function(error) {
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
    }

    // TODO This code is a repatition of one from GameMap component
    // It might make sense to rewrite it into a mixin
    // This would require using a component for the map instead
    function initGroundOverlays(map) {
        return new google.maps.GroundOverlay(window.Laravel.baseUrl + '/img/map/overlays/skansen.png',{
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
        document.getElementById('latitude').value = ( typeof latLng.lat === 'function' ) ? latLng.lat() : latLng.lat;
        document.getElementById('longitude').value = ( typeof latLng.lng === 'function' ) ? latLng.lng() : latLng.lng;
    }

    function initializeMarker(map, latLng) {
      var marker = new google.maps.Marker({
          animation: google.maps.Animation.DROP,
          title: '',
          position: latLng,
          map: map,
          draggable: true,
      });

      marker.addListener('dragend', function(event) {
          setLatAndLngValues(event.latLng);
      });

      return marker;
    }

    function replayMarkerAnimation(marker) {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {
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
        if ( latitude && longitude ) {
            return {
                lat: Number(latitude),
                lng: Number(longitude)
            };
        }

        var defaultZoo = 3;
        // return window.Laravel.zooGeolocationOptions[$(document).find('select[name="zoo"]').val()];
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

    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    setLatAndLngValues(currentLatLng);

    marker = initializeMarker(map, currentLatLng);

    initGameControls(map, function(position) {
        var latLng = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        repositionMarker(latLng, marker, map);
    });

    initGroundOverlays(map);

    $(document).find('select[name="zoo"]').on('change', function() {
        var value = $(this).val(),
            latLng = window.Laravel.zooGeolocationOptions[value];

        repositionMarker(latLng, marker, map);
    });

    let longPress = false;
    let startTime;
    let endTime;

    map.addListener('mousedown', function(event) {
        startTime = new Date().getTime();
    });

    map.addListener('mouseup', function(event) {
        endTime = new Date().getTime();
        longPress = (endTime - startTime < 500) ? false : true;
    });

    map.addListener('click', function(event) {
        if ( longPress ) {
            setLatAndLngValues(event.latLng);
            marker.setPosition(event.latLng);
            replayMarkerAnimation(marker);
        }
    });
};

import VueI18n from 'vue-i18n';

const messages = {};
messages[window.Laravel.locale] = _.cloneDeep(window.Laravel.translations);

const i18n = new VueI18n({
    locale: window.Laravel.locale,
    messages: messages
});

Vue.component('one-correct-answer', require('./components/OneCorrectAnswer.vue').default);
Vue.component('multiple-correct-answers', require('./components/MultipleCorrectAnswers.vue').default);
Vue.component('match-pairs', require('./components/MatchPairs.vue').default);

const addActivityItemApp = new Vue({
    i18n,
    el: 'form#' + window.Laravel.activityItemFormId,
    mounted() {
        const vm = this;

        $('[data-toggle="tooltip"]').tooltip();

        if ( window.Laravel.hasImage ) {
            vm.hasImage = true;
        }

        $(vm.$refs.image).on('change', (e) => {
            this.canResetImage = true;
        });

        $(vm.$refs.answeringTimeCheck).on('change', (e) => {
            const isChecked = $(vm.$refs.answeringTimeCheck).prop('checked');
            $(vm.$refs.answeringTime).prop('disabled', !isChecked);
            $(vm.$refs.answeringTimeString).prop('disabled', !isChecked);
            $('.answering-time').prop('disabled', !isChecked);
            if (!isChecked) {
                $(vm.$refs.answeringTimeString).val('');
                $(vm.$refs.answeringTime).val('');
                $('.answering-time').val('');
            }
        });

        if ( !$(vm.$refs.answeringTimeCheck).prop('checked') ) {
            $(vm.$refs.answeringTime).prop('disabled', true);
            $(vm.$refs.answeringTimeString).prop('disabled', true);
            $('.answering-time').prop('disabled', true);
        }

        $('.answering-time').on('change', function () {
            let hours = $('select[name="answering_time_hour"]').val();
            let minute = $('select[name="answering_time_minute"]').val();
            let second = $('select[name="answering_time_second"]').val();
            let val = 0 + (hours * 60 * 60) + (minute * 60) + (second * 1);
            $(vm.$refs.answeringTime).val(val);
        });

        let time = $(vm.$refs.answeringTime).val();
        let hours = Math.floor(time / (60 * 60));
        time -= (hours * 60 * 60);
        let minutes = Math.floor(time / 60);
        let seconds = time - (minutes * 60);
        $('select[name="answering_time_hour"]').val(hours);
        $('select[name="answering_time_minute"]').val(minutes);
        $('select[name="answering_time_second"]').val(seconds);

        $(vm.$refs.answeringTimeString).on('keyup', function () {
            $(vm.$refs.answeringTime).val(
                vm.convertTimeStringToInt(
                    $(this).val()
                )
            );
        }).on('blur', function () {
            $(this).val(
                vm.convertTimeIntToString(
                    $(vm.$refs.answeringTime).val()
                )
            );
        }).val(
            vm.convertTimeIntToString(
                $(vm.$refs.answeringTime).val()
            )
        );
        let typeVal = parseInt($('select[name="type"]').val());
        if (typeVal === window.Laravel.questionTypeConstants.INFORMATION ||
            typeVal === window.Laravel.questionTypeConstants.EMBEDDED_CONTENT ||
            typeVal === window.Laravel.questionTypeConstants.PHOTO ||
            typeVal === 0) {
            $(vm.$refs.answeringTime).closest('.form-group').hide();
        }

        if($('.is-flash-checkbox:checked').length > 0) {
            $('.location-container').hide();
        }
        $('.is-flash-checkbox').on('change', function () {
            if($('.is-flash-checkbox:checked').length > 0) {
                $('.location-container').hide();
            } else {
                $('.location-container').show();
            }
        });
    },
    data() {
        return {
            questionType: $('select[name="type"]').val(),
            canResetImage: false,
            hasImage: false
        };
    },
    methods: {
        convertTimeStringToInt(timeString) {
            let parts = timeString.split(' ');
            let seconds = 0;
            for (let i=0; i<parts.length; i++) {
                let part = parts[i];
                let partLength = part.length;
                if (partLength < 2) {
                    continue;
                }
                let char = part.charAt(partLength-1).toLowerCase();
                let time = parseInt(part.substr(0, partLength-1));

                if (char === 's') {
                    seconds += time;
                } else if (char === 'm') {
                    seconds += (time * 60);
                } else if (char === 'h') {
                    seconds += (time * 60 * 60);
                } else if (char === 'd') {
                    seconds += (time * 60 * 60 * 24);
                }
            }

            return seconds;
        },
        convertTimeIntToString(time) {
            let oneMinute = 60;
            let oneHour = oneMinute*60;
            let oneDay = oneHour*24;
            let days = (time - (time % oneDay)) / oneDay;
            let daysInSeconds = days * oneDay;
            time -= daysInSeconds;
            let hours = (time - (time % oneHour)) / oneHour;
            let hoursInSeconds = hours * oneHour;
            time -= hoursInSeconds;
            let minutes = (time - ((time) % oneMinute)) / oneMinute;
            let minuesInSeconds = minutes * oneMinute;
            let seconds = time - minuesInSeconds;
            let str = '';

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
        hasQuestionData() {
            return window.Laravel.activityItemQuestionData && window.Laravel.activityItemQuestionData.length > 0;
        },
        getQuestionData() {
            return window.Laravel.activityItemQuestionData;
        },
        changedQuestionType(event) {
            if ( this.hasQuestionData() ) {
                delete window.Laravel.activityItemQuestionData;
            }
            let val = parseInt($(event.target).val());
            if (val === 1 || val === 6 || val === 7) {
                $(this.$refs.answeringTime).closest('.form-group').hide();
            } else {
                $(this.$refs.answeringTime).closest('.form-group').show();
            }
        },
        getOptionImageUrl(image) {
            return window.Laravel.activityItemAssetsBaseUrl + '/' + image;
        },
        hasPreview(option, imageKey, flagKey) {
            imageKey = imageKey || 'image';
            flagKey = flagKey || 'imagePreview';
            if ( option.id && option[imageKey] && option[flagKey] !== false ) {
                return true;
            }

            return false;
        },
        resetImage(e) {
            e.preventDefault();

            if ( !$(this.$refs.image).val() ) return;

            this.canResetImage = false;
            $(this.$refs.image).val('');
        },
        canRemoveImage() {
            return !this.hasImage || this.canResetImage;
        },
        hasRemovedImagesData() {
            return window.Laravel.removedImages && window.Laravel.removedImages.length > 0;
        },
        getRemovedImagesData() {
            return window.Laravel.removedImages;
        },
        hasRemovedImageMatchesData() {
            return window.Laravel.removedImageMatches && window.Laravel.removedImageMatches.length > 0;
        },
        getRemovedImageMatchesData() {
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
            self.parent().parent().find('.help-block').prepend(
                $('<div>').addClass('alert alert-info loading-text').html(loadingText)
            );
        }
        var reader = new FileReader();
        reader.onload = function(e) {
            if (self.parent().parent().find('.help-block .sz-uploaded-image-preview').length <= 0) {
                self.parent().parent().find('.help-block').prepend(
                    $('<img>').addClass('img-rounded pull-left sz-uploaded-image-preview').attr('alt', 'image')
                );
            }
            self.parent().parent().find('.help-block .sz-uploaded-image-preview').attr('src', e.target.result);
            self.parent().parent().find('.help-block .alert.loading-text').remove();
        }

        reader.readAsDataURL(input.files[0]);
    }
});

$('#edit-activity-item').on('submit', function () {
    $('.submit-loading-text').removeClass('hidden');
});
$(document).ready(function() {
    $(document).on('keypress', ':input:not(textarea):not([type=submit])', function(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            return false;
        }
    });
});
