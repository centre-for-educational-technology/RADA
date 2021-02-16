import VueI18n from 'vue-i18n';

const messages = {};
messages[window.RADA.config.locale] = _.cloneDeep(window.RADA.data.translations);

const i18n = new VueI18n({
    locale: window.RADA.config.locale,
    messages: messages
});

Vue.component('game-results-modal', require('./components/GameResultsModal.vue').default);

const stoppedGameApp = new Vue({
    i18n,
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
