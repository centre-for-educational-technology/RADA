<template>
    <div ref="modal" class="modal fade" tabindex="-1" role="dialog" v-on:click.self="close()" @keyup.esc="close()">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" aria-label="Close" v-on:click="close()" v-bind:diabled="inAjaxCall">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title">{{ $t('game-messages') }}</h4>
                </div>
                <div class="modal-body">

                    <table class="messages-container table">
                        <tr :class="{'message': isManager() === true}" v-for="message in messages">
                            <td v-if="isManager() === false">
                                <div class="panel panel-default">
                                    <div class="panel-body">
                                        <p style="white-space: pre-line;">{{ message.message }}</p>
                                        <small>{{ message.created_at }}</small>
                                    </div>
                                </div>
                            </td>
                            <td v-if="isManager() === true" style="white-space: pre-line;">{{ message.message }}</td>
                            <td v-if="isManager() === true">{{ message.created_at }}</td>
                            <td v-if="isManager() === true">
                                <button v-on:click="deleteMessage(event, message.id)" class="pull-right btn btn-danger">
                                    {{ $t('delete-message') }}
                                </button>
                            </td>
                        </tr>
                    </table>

                    <div class="add-message-container" v-if="isManager() === true">
                        <textarea v-model="newMessage" ref="newMessageInput" class="form-control"></textarea>
                        <button type="button" v-on:click="addNewMessage" class="btn btn-success">
                            {{ $t('add-new-message') }}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['game_id', 'type'],
        mixins: [],
        mounted() {
            this.$nextTick(() => {
                this.getMessages();
            });
        },
        data() {
            return {
                messages: [],
                newMessage: '',
                inAjaxCall: false,
                event: null
            }
        },
        methods: {
            isManager() {
                return this.type === 'monitoring';
            },
            deleteMessage(e, id) {
                this.$http.get(window.RADA.config.base_url + '/api/games/' + this.game_id + '/delete-message/' + id).then(response => {
                    this.getMessages();
                })
            },
            addNewMessage(e) {
                if(this.newMessage.length > 0) {
                    this.$http.post(window.RADA.config.base_url + '/api/games/' + this.game_id + '/add-new-message', {
                        message: this.newMessage
                    }).then(response => {
                        this.newMessage = '';
                        this.getMessages();
                    })
                }
            },
            getMessages() {
                this.$http.get(window.RADA.config.base_url + '/api/games/' + this.game_id + '/get-all-messages').then(response => {
                    this.messages = response.body || [];
                })
            },
            open() {
                this.$nextTick(() => {
                    $(this.$refs.modal).modal('show');
                    this.getMessages();
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
    textarea {
        margin-bottom: 10px;
    }
    .message {
        border-bottom: 1px dotted #ccc;
    }
    .message td {
        padding: 10px;
    }
</style>
