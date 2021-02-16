import VueI18n from 'vue-i18n';

const messages = {};
messages[window.Laravel.locale] = _.cloneDeep(window.Laravel.translations);

const i18n = new VueI18n({
    locale: window.Laravel.locale,
    messages: messages
});

Vue.component('open-game-by-entering-pin-code', require('./components/OpenGameByEnteringPinCode.vue').default);

const activityApp = new Vue({
    i18n,
    el: '#sz-quick-play',
    mounted() {},
    data() {
        return {
            baseUrl: '/'
        }
    },
    methods: {}
});
