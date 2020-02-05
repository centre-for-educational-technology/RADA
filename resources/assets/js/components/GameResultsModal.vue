<template>
    <div ref="modal" class="modal fade" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-lg sz-game-results" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">{{ game.activity.title }}</h4>
                </div>
                <div class="modal-body">
                    <div class="text-center sz-quick-results">
                        <div class="sz-results-count">
                            {{ correctQuestionsCount }}/{{ totalQuestionsCount }}
                        </div>
                        <div class="sz-complete-text">
                            {{ $t('complete') }}
                        </div>
                    </div>

                    <h2 class="text-center">{{ $t('results-heading')}}</h2>
                    <div v-for="(question, index) in getResultQuestions">
                        <h3>{{ index + 1 }}. {{ question.title }}</h3>
                        <p class="sz-display-new-lines">{{question.description}}</p>
                        <p v-if="hasGrade(question) === false" class="alert alert-info">{{ $t('task-is-pending-an-evaluation') }}</p>
                        <div v-if="isOneCorrectAnswer(question) || isMultipleCorrectAnswers(question)">
                            <ul class="media-list sz-options-list" v-for="option in question.options">
                                <li class="media sz-option">
                                        <div class="media-left" v-if="option.image_url">
                                            <img v-bind:src="option.image_url" class="media-object" alt="option-image">
                                        </div>

                                    <div class="media-body">
                                        <h4 class="media-heading" v-bind:class="{ selected: choseOption(question, option) }">{{ option.option }}</h4>
                                    </div>

                                    <div class="media-right media-middle">
                                        <i class="mdi" v-bind:class="optionIconClass(question, option)" aria-hidden="true"></i>
                                  </div>
                                </li>
                            </ul>
                        </div>

                        <div v-if="isEmbeddedContent(question)">
                            <div class="embed-responsive embed-responsive-16by9" v-html="question.embedded_content"></div>
                        </div>

                        <div v-if="isFreeformAnswer(question) || isEmbeddedContent(question)">
                            <div class="well well-sm sz-display-new-lines" v-if="hasText(question)">{{ getText(question) }}</div>
                        </div>

                        <div v-if="isMissingWord(question)">
                            <div class="well well-sm sz-display-new-lines missing-word-container" v-if="hasText(question)" v-html="getMissingWordText(question)"></div>
                        </div>

                        <div v-if="isMatchPairs(question)" class="sz-pairs-list">
                            <div v-for="pair in question.pairs" class="row">
                                <div class="col-xs-6">
                                    <div class="media sz-pair">
                                        <div class="media-left">
                                            <img v-if="pair.image_url" v-bind:src="pair.image_url" class="media-object" alt="pair-image">
                                        </div>
                                        <div class="media-body">
                                            <h4 class="media-heading">{{ pair.option }}</h4>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-6">
                                    <div class="media sz-pair">
                                        <div class="media-left">
                                            <img v-if="pair.image_match_url" v-bind:src="pair.image_match_url" class="media-object" alt="pair-image">
                                        </div>
                                        <div class="media-body">
                                            <h4 class="media-heading">{{ pair.option_match }}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="sz-photo" v-if="isPhoto(question)">
                            <div class="well well-sm" v-if="hasImage(question)">
                                <img alt="uploaded-image" class="img-responsive center-block" v-bind:src="getImage(question)">
                            </div>
                        </div>

                        <div>
                            <a href="" v-bind:href="question.read_more" target="_blank" class="btn btn-default btn-sm" v-if="question.read_more">
                                <i class="mdi mdi-open-in-new" aria-hidden="true"></i>
                                {{ $t('read-more-about') }}
                            </a>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" v-on:click="exit()">
                        <i class="mdi mdi-exit-to-app" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MissingWordMixin from './../mixins/MissingWord.js'
    export default {
        props: ['game', 'baseUrl'],
        mixins: [MissingWordMixin],
        computed: {
            totalQuestionsCount: function() {
                return this.game.activity.questions.length;
            },
            correctQuestionsCount: function() {
                const vm = this;

                return _.filter(this.game.activity.questions, function(question) {
                    if ( vm.isCorrect(question) ) {
                        return question;
                    }
                }).length;
            },
            getResultQuestions: function() {
                if (this.game.activity.complete === true) {
                    return this.game.activity.questions;
                }
                let answers = this.game.answers;
                return this.game.activity.questions.filter(question => {
                    return typeof answers[question.id] !== 'undefined';
                });
            }
        },
        methods: {
            open() {
                this.$nextTick(() => {
                    $(this.$refs.modal).modal('show');
                    setTimeout(() => {
                        if ($(document).find('body').hasClass('modal-open') === false) {
                            $(document).find('body').addClass('modal-open');
                        }
                    }, 500);
                });
            },
            exit() {
                this.$parent.exit();
            },
            isInformation(question) {
                return question ? question.type == window.Laravel.questionTypeConstants.INFORMATION : false;
            },
            isOneCorrectAnswer(question) {
                return question ? question.type == window.Laravel.questionTypeConstants.ONE_CORRECT_ANSWER : false;
            },
            isMultipleCorrectAnswers(question) {
                return question ? question.type == window.Laravel.questionTypeConstants.MULTIPLE_CORRECT_ANSWERS : false;
            },
            isFreeformAnswer(question) {
                return question ? question.type == window.Laravel.questionTypeConstants.FREEFORM_ANSWER : false;
            },
            isMatchPairs(question) {
                return question ? question.type == window.Laravel.questionTypeConstants.MATCH_PAIRS : false;
            },
            isEmbeddedContent(question) {
                return question ? question.type == window.Laravel.questionTypeConstants.EMBEDDED_CONTENT : false;
            },
            isPhoto(question) {
                return question ? question.type == window.Laravel.questionTypeConstants.PHOTO : false;
            },
            isMissingWord(question) {
                return question ? question.type == window.Laravel.questionTypeConstants.MISSING_WORD : false;
            },
            hasAnswer(question) {
                return !!(this.game.answers && this.game.answers[question.id]);
            },
            isCorrect(question) {
                if ( !this.hasAnswer(question) ) {
                    return false;
                }

                return this.game.answers[question.id].correct;
            },
            hasGrade(question) {
                if ( !this.hasAnswer(question) ) {
                    return false;
                }

                return this.game.answers[question.id].grade !== null;
            },
            hasOptions(question) {
                if ( !this.hasAnswer(question) ) {
                    return false;
                }

                return !!this.game.answers[question.id].answer.options;
            },
            choseOption(question, option) {
                if ( !this.hasOptions(question) ) {
                    return false;
                }

                return this.game.answers[question.id].answer.options.indexOf(option.id) !== -1;
            },
            isCorrectOption(option) {
                return !!option.correct;
            },
            hasText(question) {
                if ( !this.hasAnswer(question) ) {
                    return false;
                }

                return !!this.game.answers[question.id].answer.text;
            },
            getText(question) {
                return this.game.answers[question.id].answer.text;
            },
            getMissingWordText(question) {
                const answerText = this.getText(question);
                const questionText = question.missing_word;
                const answerArray = this.missingWordsToArray(answerText);
                const questionArray = this.missingWordsToArray(questionText);
                const questionArrayLength = questionArray.length;
                let text = '';

                for (let i=0; i<questionArrayLength; i++) {
                    /** @type {MissingWord} questionWord **/
                    let questionWord = questionArray[i];
                    /** @type {MissingWord} answerWord **/
                    let answerWord = answerArray[i];
                    if (questionWord.type === 'text') {
                        text += questionWord.text;
                    } else if (questionWord.type === 'input') {
                        if (answerWord.text === questionWord.text) {
                            text += '<span class="correct">';
                            text += answerWord.text;
                            text += '</span>';
                        } else {
                            text += '<span class="incorrect">';
                            text += answerWord.text;
                            text += '<span class="correct">( ';
                            text += questionWord.text;
                            text += ' )</span>';
                            text += '</span>';
                        }
                    }
                }

                return text;
            },
            hasImage(question) {
                if ( !this.hasAnswer(question) ) {
                    return false;
                }

                return !!this.game.answers[question.id].image;
            },
            getImage(question) {
                return this.game.answers[question.id].image;
            },
            optionIconClass(question, option) {
                const classes = [];
                const isCorrect = this.isCorrectOption(option);
                const isChosen = this.choseOption(question, option);

                if ( isChosen ) {
                    if ( isCorrect ) {
                        classes.push('correct');
                    } else {
                        classes.push('incorrect');
                    }
                }

                if ( this.isOneCorrectAnswer(question) ) {
                    if ( isCorrect ) {
                        classes.push('mdi-checkbox-marked-circle-outline');
                    } else {
                        classes.push('mdi-close-circle-outline');
                    }
                } else if ( this.isMultipleCorrectAnswers(question) ) {
                    if ( isCorrect ) {
                        classes.push('mdi-checkbox-marked-outline');
                    } else {
                        classes.push('mdi-close-box-outline');
                    }
                }

                return classes;
            },
            showResults() {
                this.resultsShown = !this.resultsShown;
            }
        }
    }
</script>
<style>
    .missing-word-container .correct, .missing-word-container .incorrect {
        color: #2ab27b;
        font-weight: bold;
        padding: 0 5px;
    }
    .missing-word-container .incorrect {
        color: red;
    }
</style>
