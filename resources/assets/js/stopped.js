const VueI18n = require('vue-i18n');

Vue.use(VueI18n);
Vue.config.lang = window.RADA.config.locale;
Vue.locale(window.RADA.config.locale, _.cloneDeep(window.RADA.data.translations));

Vue.component('game-results-modal', require('./components/GameResultsModal.vue').default);

const stoppedGameApp = new Vue({
    el: '#sz-play-app',
    created: function () {
        var vm = this;

        vm.baseUrl = window.RADA.config.base_url;
        vm.gameUrl = window.RADA.config.game_url;
        vm.isLoggedIn = window.Laravel.isLoggedIn;
        vm.userName = window.Laravel.userName;
        vm.game = window.RADA.data.game;
    },
    mounted() {
        this.$refs.resultsModal.open();
        this.$nextTick(() => {
            this.getGameData();
        });
    },
    data() {
        return {
            baseUrl: '',
            gameUrl: '',
            exitUrl: '/',
            game: null,
            isLoggedIn: false,
            userName: ''
        };
    },
    methods: {
        exit() {
            window.location.href = this.exitUrl;
        },
        getGameData() {
            this.$http.get(this.baseUrl + '/api/games/' + this.game.id + '/get-game-data').then(response => {
                if (typeof response.body !== 'undefined') {
                    let data = response.body;
                    this.continueGame(data.start_stop);
                }
                setTimeout(() => {
                    this.getGameData();
                }, 5000);
            });
        },
        continueGame(data) {
            if (typeof data.started !== 'undefined' && data.started === 1) {
                window.location.href = this.baseUrl + '/games/' + this.game.id + '/play'
            }
        }
    }
});
