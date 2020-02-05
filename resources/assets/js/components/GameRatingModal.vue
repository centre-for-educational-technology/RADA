<template>
    <div ref="modal" class="modal fade" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-lg sz-game-results" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" aria-label="Close" v-on:click="close()"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">{{ $t('rating-heading') }}</h4>
                </div>
                <div class="modal-body text-center">
                    <a href="#"
                       class="mdi mdi-star-outline star"
                       v-for="star in stars"
                       v-on:click="addRating(event, star)"
                       v-bind:data-value="star"
                       v-on:mouseover="mouseOverStar"
                    ></a>
                </div>
                <div class="modal-footer text-center">
                    <button type="button" v-on:click="close()" class="btn btn-primary">{{ $t('show-results')}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['game', 'baseUrl'],
        data() {
            return {
                stars: [1, 2, 3, 4, 5],
                callback: null,
                event: null
            }
        },
        methods: {
            addRating(e, star) {
                this.$http.get(this.baseUrl + '/api/games/' + this.game.id + '/add-rating/' + star).then(response => {
                    this.close();
                });
            },
            mouseOverStar(e) {
                let this_value = e.target.dataset.value;
                let stars = document.getElementsByClassName('star');
                let starsLength = stars.length;
                for (let i=0; i<starsLength; i++) {
                    let star = stars[i];
                    let star_value = star.dataset.value;
                    if (star_value <= this_value) {
                        star.classList.remove('mdi-star-outline');
                        star.classList.add('mdi-star');
                    } else {
                        star.classList.remove('mdi-star');
                        star.classList.add('mdi-star-outline');
                    }
                }
            },
            open(callback) {
                this.callback = callback;
                this.$nextTick(() => {
                    $(this.$refs.modal).modal('show');
                });
            },
            close() {
                this.$nextTick(() => {
                    $(this.$refs.modal).modal('hide');
                    this.callback();
                });
            }
        }
    }
</script>

<style>
    .modal-body.text-center, .modal-footer.text-center {
        text-align: center;
    }
    .star {
        font-size: 80px;
    }
</style>
