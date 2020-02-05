<template>
    <div ref="modal" class="modal fade" tabindex="-1" role="dialog" v-on:click.self="close()" @keyup.esc="close()">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" aria-label="Close" v-on:click="close()" v-bind:diabled="inAjaxCall">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title">{{ title() }}</h4>
                </div>
                <div class="modal-body">
                    <div class="flash-exercise" v-for="exercise in questions">
                        <span class="name" @click="openTaskInfoModal(exercise)">{{ exercise.title }}</span>
                        <button
                                class="btn btn-success pull-right"
                                v-if="canStop(exercise.id) === false"
                                v-bind:disabled="canStart(exercise.id) === false"
                                v-on:click="startExercise(exercise.id)"
                        >
                            {{ $t('start') }}
                        </button>
                        <button
                                class="btn btn-danger pull-right"
                                v-if="canStop(exercise.id)"
                                v-on:click="stopExercise(exercise.id)"
                        >
                            {{ $t('stop') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['questions', 'game_id'],
        mixins: [],
        mounted() {
            this.$nextTick(() => {
                this.getActiveFlashExercise(id => {
                    this.startedExerciseId = id;
                });
            });
        },
        data() {
            return {
                inAjaxCall: false,
                startedExerciseId: null
            }
        },
        methods: {
            openTaskInfoModal(exercise) {
                this.$parent.openNewTaskInfoModal({
                    name: exercise.title,
                    users: exercise.users
                });
            },
            canStart(id) {
                if (this.startedExerciseId !== null) {
                    return false;
                }
                return true;
            },
            canStop(id) {
                if (this.startedExerciseId === id) {
                    return true;
                }
                return false;
            },
            startExercise(id) {
                this.startedExerciseId = id;
                this.startStopExercise(id, true);
            },
            stopExercise(id) {
                this.startedExerciseId = null;
                this.startStopExercise(id, false);
            },
            startStopExercise(id, active) {
                this.$http.post(window.RADA.config.base_url + '/api/games/' + this.game_id + '/start-stop-flash-exercise', {
                    questionId: id,
                    active: active
                }).then(response => {

                }, error => {
                    console.log(error);
                });
            },
            getActiveFlashExercise(callback) {
                this.$http.get(window.RADA.config.base_url + '/api/games/' + this.game_id + '/get-active-flash-exercise').then(response => {
                    if (typeof response.body.id !== 'undefined') {
                        callback(response.body.id);
                    } else {
                        callback(null);
                    }
                }, error => {
                    callback(null);
                });
            },
            title() {
                return this.$t('flash-exercises-list-modal-title')
            },
            open() {
                this.$nextTick(() => {
                    $(this.$refs.modal).modal('show');
                });
                return $(this.$refs.modal);
            },
            close() {
                this.$nextTick(() => {
                    $(this.$refs.modal).modal('hide');
                });
            },
        }
    }
</script>

<style scoped>
    .flash-exercise {
        margin-bottom: 15px;
        height: 36px;
        line-height: 36px;
    }
    .flash-exercise .name {
        padding-left: 15px;
    }
</style>
