import VueI18n from 'vue-i18n';

const messages = {};
messages[window.Laravel.locale] = _.cloneDeep(window.Laravel.translations);

const i18n = new VueI18n({
    locale: window.Laravel.locale,
    messages: messages
});

Vue.component('grading-list', require('./components/Grading/GradingList.vue').default);

const activityApp = new Vue({
    i18n,
    el: '#grading-list-container',
    mounted() {
        this.answers = window.Laravel.answers;
    },
    data() {
        return {
            baseUrl: '/',
            answers: []
        }
    },
    methods: {}
});
