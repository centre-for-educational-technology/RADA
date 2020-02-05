<template>
    <div ref="modal" class="modal fade" tabindex="-1" role="dialog" v-on:click.self="close()" @keyup.esc="close()">
        <div class="modal-dialog modal-lg sz-game-question" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" aria-label="Close" v-on:click="close()" v-bind:diabled="inAjaxCall"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">
                        {{ title() }}
                        <span class="pull-right" style="padding-right: 15px;" v-if="answeringTime != null">{{ $t('remaining_time') }}: {{ answeringTime }}</span>
                    </h4>
                </div>
                <div class="modal-body">
                    <div v-if="hasImage()">
                        <img src="" class="img-responsive" alt="image" v-bind:src="image()">
                    </div>
                    <p class="sz-display-new-lines">{{ description() }}</p>

                    <div v-if="isOneCorrectAnswer()">
                        <ul class="media-list sz-one-correct-answer">
                            <li class="media" v-for="(option, index) in options()" v-on:click="triggerOptionClick(index)">
                                <div class="media-left" v-if="option.image_url">
                                    <img v-bind:src="option.image_url" class="media-object" alt="option-image">
                                </div>

                                <div class="media-body media-middle">
                                    <h4 class="media-heading" v-bind:class="{ selected: isAnswered() && isSelectedOption(option.id) }">{{ option.option }}</h4>
                                </div>

                                <div class="media-right media-middle">
                                    <input type="radio" name="option" class="form-control" v-model="selectedOptions" v-bind:value="option.id" ref="option">
                                    <i class="mdi mdi-radiobox-blank" v-if="!isSelectedOption(option.id) && !isAnswered()"></i>
                                    <i class="mdi mdi-radiobox-marked" v-if="isSelectedOption(option.id) && !isAnswered()"></i>
                                    <i class="mdi" v-bind:class="optionIconClass(option)" aria-hidden="true" v-if="isAnswered()"></i>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div v-if="isMultipleCorrectAnswers()">
                        <ul class="media-list sz-multiple-correct-answers">
                            <li class="media" v-for="(option, index) in options()" v-on:click="triggerOptionClick(index)">
                                <div class="media-left" v-if="option.image_url">
                                    <img v-bind:src="option.image_url" class="media-object" alt="option-image">
                                </div>

                                <div class="media-body media-middle">
                                    <h4 class="media-heading" v-bind:class="{ selected: isAnswered() && isSelectedOption(option.id) }">{{ option.option }}</h4>
                                </div>

                                <div class="media-right media-middle">
                                    <input type="checkbox" name="options[]" class="form-control" v-model="selectedOptions" v-bind:value="option.id" ref="option">
                                    <i class="mdi mdi-checkbox-blank-outline" v-if="!isSelectedOption(option.id) && !isAnswered()"></i>
                                    <i class="mdi mdi-checkbox-marked-outline" v-if="isSelectedOption(option.id) && !isAnswered()"></i>
                                    <i class="mdi" v-bind:class="optionIconClass(option)" aria-hidden="true" v-if="isAnswered()"></i>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div v-if="isFreeformAnswer()">
                        <div class="form-group">
                            <textarea class="form-control" v-bind:placeholder="$t('textual-answer-placeholder')" v-model="textualAnswer" v-if="!isAnswered()"></textarea>
                            <textarea class="form-control" v-bind:placeholder="$t('textual-answer-placeholder')" readonly="readonly" v-bind:value="answer.answer.text" v-if="isAnswered()"></textarea>
                        </div>
                    </div>

                    <div v-if="isMatchPairs()">
                        <div class="row sz-match-pairs">
                            <div class="col-xs-6">
                                <div class="row" v-for="pair in pairs()">
                                    <div class="col-xs-12">
                                        <div class="sz-matchable" v-on:click="choosePair(pair)" v-bind:class="{ 'chosen': isOptionChosen(pair), 'matched': isMatchedPair(pair) }" v-bind:style="matchableStyles" ref="matchable">
                                            <img v-if="pair.image_url" v-bind:src="pair.image_url" class="media-object" alt="pair-image">
                                            <div>{{ pair.option }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-6">
                                <div class="row" v-for="pair in pairs(true)">
                                    <div class="col-xs-12">
                                        <div class="sz-matchable" v-on:click="choosePairMatch(pair)" v-bind:class="{ 'chosen': isOptionMatchChosen(pair), 'matched': isMatchedPair(pair) }" v-bind:style="matchableStyles" ref="matchable">
                                            <img v-if="pair.image_match_url" v-bind:src="pair.image_match_url" class="media-object" alt="pair-image">
                                            <div>{{ pair.option_match }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="isEmbeddedContent()">
                        <div class="embed-responsive embed-responsive-16by9" v-html="embeddedContent()"></div>

                        <div class="form-group">
                            <textarea class="form-control" v-bind:placeholder="$t('textual-answer-placeholder')" v-model="textualAnswer" v-if="!isAnswered()"></textarea>
                            <textarea class="form-control" v-bind:placeholder="$t('textual-answer-placeholder')" readonly="readonly" v-bind:value="answer.answer.text" v-if="isAnswered()"></textarea>
                        </div>
                    </div>

                    <div v-if="isPhoto() && !isAnswered()" class="sz-photo">
                        <transition name="fade-in-down-out-up" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
                            <div class="alert alert-danger text-center" role="alert" v-show="incorrectImageFormat">
                                {{ $t('image-format-hint' )}}
                            </div>
                        </transition>

                        <div class="row text-center">
                            <a href="#" class="btn sz-take-image" tabindex="-1" v-on:click.prevent="triggerImageClick()" v-show="!hasImageSelected">
                                <i class="mdi mdi-camera" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div class="row" v-show="hasImageSelected">
                            <div class="col-xs-10 col-xs-offset-1">
                                <img v-bind:src="imageSrc" alt="uploadable-image" class="img-responsive center-block sz-image-taken" v-on:click.prevent="triggerImageClick()">
                            </div>
                        </div>
                        <input type="file" accept="image/jpeg, image/png" capture="camera" name="image" ref="image" v-on:change="imageSelected">
                    </div>

                    <div v-if="isPhoto() && isAnswered()" class="sz-photo">
                        <img v-bind:src="answer.image" alt="uploaded-image" class="img-responsive center-block sz-image-taken" v-if="isAnswered()">
                    </div>

                    <div v-if="isMissingWord()" class="missing-word-container">
                        <div class="form-group">
                            <span v-for="(word, index) in missingWords">
                                <span v-if="word.type === 'text'">{{ word.text }}</span>
                                <input v-if="word.type === 'input' && !isAnswered()" type="text" :data-index="index" @keyup="onMissingWordChange" />
                                <span v-if="word.type === 'input' && isAnswered()">
                                    <span v-if="word.isCorrect === false" class="incorrect">{{ word.answer }} <span class="correct">({{ word.text }})</span></span>
                                    <span v-if="word.isCorrect === true" class="correct">{{ word.answer }}</span>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <a href="" v-bind:href="readMore()" target="_blank" class="btn btn-default" v-if="hasReadMore()">
                        <i class="mdi mdi-open-in-new" aria-hidden="true"></i>
                        {{ $t('read-more-about') }}
                    </a>
                    <button type="button" class="btn btn-default" v-on:click="close()" v-bind:disabled="inAjaxCall" v-bind:title="$t('close')">
                        <i class="mdi mdi-close"></i>
                    </button>
                    <button type="button" class="btn btn-primary" v-bind:disabled="!canSubmit() || inAjaxCall" v-on:click="submit()" v-bind:title="$t('submit')" v-if="!(isPreview || isAnswered())">
                        <i class="mdi mdi-send"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ImageMixin from './../mixins/Image.js'
    import MissingWordMixin from './../mixins/MissingWord.js'
    import debounce from '../debounce';

    export default {
        props: ['question', 'answer', 'gameId', 'baseUrl', 'isPreview'],
        mixins: [ImageMixin, MissingWordMixin],
        mounted() {
            var vm = this;

            this.$nextTick(() => {
                $(this.$refs.modal).on('hide.bs.modal', e => {
                    if ( vm.inAjaxCall ) {
                        e.preventDefault();
                    }
                });
            });
        },
        data() {
            return {
                isOpen: false,
                selectedOptions: [],
                textualAnswer: '',
                hasImageSelected: false,
                imageSrc: null,
                chosenPair: {
                    option: null,
                    match: null
                },
                matchedPairs: [],
                shuffledPairs: [],
                matchableStyles: {
                    'min-height': '100px'
                },
                inAjaxCall: false,
                incorrectImageFormat: false,
                answeringTime: null,
                missingWords: [],
                isMissingWordFilled: false
            };
        },
        methods: {
            calculateRemainingAnsweringTime() {
                if (this.answer && this.answer.answering_start_time !== null && this.$parent.isAnswered(this.question.id) === false) {
                    let startTimeString = this.answer.answering_start_time;
                    let startTimeDate = new Date(startTimeString);
                    let nowDate = new Date();
                    let totalTimeInMilliseconds = 1000 * this.question.answering_time;
                    let usedTime = nowDate.getTime() - startTimeDate.getTime();
                    let usedTimeInMilliseconds = 1000 * Math.round(usedTime / 1000);
                    let remainingTimeInMilliseconds = totalTimeInMilliseconds - usedTimeInMilliseconds;
                    if (remainingTimeInMilliseconds < 0) {
                        this.$nextTick(() => {
                            this.closeQuestion();
                        });
                        return false;
                    }

                    let remainingTimeDate = new Date(remainingTimeInMilliseconds);

                    this.answeringTime = '';

                    if (remainingTimeDate.getUTCHours() > 0) {
                        this.answeringTime += ('0' + remainingTimeDate.getUTCHours()).slice(-2);
                        this.answeringTime += ':';
                    }
                    if (remainingTimeDate.getUTCMinutes() > 0) {
                        this.answeringTime += ('0' + remainingTimeDate.getUTCMinutes()).slice(-2);
                        this.answeringTime += ':';
                    } else {
                        this.answeringTime += '00:';
                    }

                    this.answeringTime += ( '0' + remainingTimeDate.getUTCSeconds()).slice(-2);

                    setTimeout(() => {
                        this.calculateRemainingAnsweringTime();
                    }, 1000);
                } else {
                    this.answeringTime = null;
                }
            },
            closeQuestion(closeMessage) {
                let vm = this;
                let data = {
                    game_id: this.gameId,
                    question_id: this.question.id
                };
                this.inAjaxCall = true;
                this.$http.post(vm.baseUrl + '/api/games/close-question', data).then(response => {
                    let isOpen = vm.isOpen;
                    vm.inAjaxCall = false;
                    vm.$parent.markAnswered(vm.question.id, response.body);
                    vm.close();
                    $('.modal-backdrop').remove();
                    vm.$parent.answer = null;
                    if (isOpen === true) {
                        vm.$nextTick(() => {
                            vm.$parent.openAnsweringTimeIsUpModal(closeMessage);
                        });
                    }
                }, response => {
                    vm.inAjaxCall = false;
                    setTimeout(() => {
                        vm.closeQuestion()
                    }, 2000);
                });
            },
            open() {
                let url = this.baseUrl + '/api/games/' + this.gameId + '/start-question/' + this.question.id;
                this.$http.get(url).then(response => {
                    this.isOpen = true;
                    this.generateMissingWords();
                    this.calculateRemainingAnsweringTime();

                    if ( this.isMatchPairs() ) {
                        if ( this.pairs().length > 0 ) {
                            if ( !this.isAnswered() ) {
                                this.question.pairs = _.shuffle(this.pairs());
                            }

                            // TODO This produces a small visible size change,
                            // might make sense to display things as invisible (not hidden)
                            // do the resize and only then show
                            $(this.$refs.modal).one('shown.bs.modal', e => {
                                var vm = this;
                                var heights = _.map(this.$refs.matchable, (matchable) => {
                                    return $(matchable).outerHeight(true);
                                });
                                var highest = _.max(heights);

                                if ( highest ) {
                                    vm.matchableStyles['min-height'] = highest + 'px';
                                }
                            });
                        }
                        if ( !this.isAnswered() ) {
                            this.shuffledPairs = _.shuffle(this.pairs());
                        } else {
                            this.shuffledPairs = this.pairs();
                        }
                    } else if ( this.isOneCorrectAnswer() || this.isMultipleCorrectAnswers() ) {
                        if ( this.options().length > 0 ) {
                            this.question.options = _.shuffle(this.options());
                        }
                    }

                    $(this.$refs.modal).modal('show');
                });

                return $(this.$refs.modal);
            },
            close() {
                this.$nextTick(() => {
                    $(this.$refs.modal).modal('hide');

                    this.isOpen = false;
                    this.selectedOptions = [];
                    this.textualAnswer = '';
                    this.hasImageSelected = false;
                    this.imageSrc = null;
                    this.chosenPair.option = null;
                    this.chosenPair.mathc = null;
                    this.matchedPairs = [];
                    this.shuffledPairs = [];
                    this.matchableStyles['min-height'] = '100px';
                    this.inAjaxCall = false;
                    $(this.$refs.image).val('');
                    this.incorrectImageFormat = false;
                    this.answeringTime = null;
                    this.missingWords = [];
                    this.isMissingWordFilled = false;
                });
            },
            submit() {
                if ( this.inAjaxCall ) return;

                var vm = this;

                this.inAjaxCall = true;

                var data = {
                    'game_id': this.gameId,
                    'question_id': this.question.id,
                };

                if ( this.isOneCorrectAnswer() || this.isMultipleCorrectAnswers() ) {
                    data.options = this.selectedOptions;
                } else if ( this.isFreeformAnswer() || this.isEmbeddedContent() ) {
                    data.text = this.textualAnswer;
                }

                if ( this.isPhoto() ) {
                    var formData = new FormData();

                    _.each(data, (item, key) => {
                        formData.append(key, item);
                    });

                    formData.append('image', this.$refs.image.files[0]);

                    data = formData;
                }

                if ( this.isMissingWord() ) {
                    data.text = this.missingWordsToString(this.missingWords);
                }

                this.$http.post(vm.baseUrl + '/api/games/answer', data).then(response => {
                    vm.inAjaxCall = false;

                    // const url = vm.baseUrl + '/api/games/' + vm.gameId + '/send-question-answer-to-lrs/' + vm.question.id;
                    // vm.$http.get(url).then(respone => {});

                    vm.$parent.openImageDialog(vm.question.id, response.body);

                    vm.close();
                }, response => {
                    vm.inAjaxCall = false;
                    console.error('Error', response);
                    // TODO Might need to notify user abut the error
                });
            },
            title() {
                return this.question ? this.question.title : '';
            },
            description() {
                return this.question ? this.question.description : '';
            },
            hasImage() {
                return this.question && this.question.image_url;
            },
            image() {
                return this.question ? this.question.image_url : '';
            },
            embeddedContent() {
                return this.question ? this.question.embedded_content : '';
            },
            hasReadMore() {
                return this.question && this.question.read_more;
            },
            readMore() {
                return this.question ? this.question.read_more : '';
            },
            options() {
                return ( this.question && this.question.options ) ? this.question.options : [];
            },
            pairs(shuffled) {
                if ( shuffled === true ) {
                    return this.shuffledPairs;
                }

                return ( this.question && this.question.pairs ) ? this.question.pairs : [];
            },
            isInformation() {
                return this.question ? this.question.type == window.Laravel.questionTypeConstants.INFORMATION : false;
            },
            isOneCorrectAnswer() {
                return this.question ? this.question.type == window.Laravel.questionTypeConstants.ONE_CORRECT_ANSWER : false;
            },
            isMultipleCorrectAnswers() {
                return this.question ? this.question.type == window.Laravel.questionTypeConstants.MULTIPLE_CORRECT_ANSWERS : false;
            },
            isFreeformAnswer() {
                return this.question ? this.question.type == window.Laravel.questionTypeConstants.FREEFORM_ANSWER : false;
            },
            isMatchPairs() {
                return this.question ? this.question.type == window.Laravel.questionTypeConstants.MATCH_PAIRS : false;
            },
            isEmbeddedContent() {
                return this.question ? this.question.type == window.Laravel.questionTypeConstants.EMBEDDED_CONTENT : false;
            },
            isPhoto() {
                return this.question ? this.question.type == window.Laravel.questionTypeConstants.PHOTO : false;
            },
            isMissingWord() {
                return this.question ? this.question.type == window.Laravel.questionTypeConstants.MISSING_WORD : false;
            },
            onMissingWordChange: debounce(function (e) {
                let input = e.target;
                let index = input.getAttribute('data-index');
                this.$set(this.missingWords[index], 'answer', input.value);
                this.$set(
                    this.missingWords[index],
                    'isCorrect',
                    input.value.trim().toLowerCase() === this.missingWords[index].text.trim().toLowerCase()
                );
                let words = this.missingWords.filter(word => {
                    return word.type === 'input' && word.answer.trim().length === 0;
                });
                this.isMissingWordFilled = words.length === 0;
            }, 100),
            generateMissingWords() {
                if (!this.isMissingWord()) {
                    return false;
                }
                let question = this.question.missing_word;
                let answer = '';
                let questionArray = this.missingWordsToArray(question);
                let answerArray = [];
                if (this.isAnswered()) {
                    answer = this.answer.answer.text;
                    answerArray = this.missingWordsToArray(answer);
                    let questionArrayLength = questionArray.length;
                    let answerArrayLength = answerArray.length;
                    if (questionArrayLength === answerArrayLength) {
                        for (let i=0; i<questionArrayLength; i++) {
                            questionArray[i].answer = answerArray[i].text;
                            questionArray[i].isCorrect = questionArray[i].text.trim().toLowerCase() === answerArray[i].text.trim().toLowerCase();
                        }
                    }
                }

                this.missingWords = questionArray;
            },
            isSelectedOption(id) {
                let options;

                if ( !this.isAnswered() ) {
                    options = this.selectedOptions;
                } else {
                    options = this.answer.answer.options;
                }

                if ( options && typeof options === 'object' ) {
                    return options.indexOf(id) !== -1;
                }

                return options === id;
            },
            triggerOptionClick(index) {
                if ( !this.isAnswered() ) {
                    $(this.$refs['option'][index]).trigger('click');
                }
            },
            triggerImageClick() {
                $(this.$refs.image).trigger('click');
            },
            imageSelected(event) {
                if ( event.target.files.length > 0 ) {
                    var file = event.target.files[0];

                    if ( !this.isValidImageFormat(file) ) {
                        $(event.target).val('');
                        this.hasImageSelected = false;
                        this.incorrectImageFormat = true;
                        return;
                    }

                    if ( window.FileReader ) {
                        var reader = new FileReader(),
                            vm = this;

                        reader.onload = (e) => {
                            vm.imageSrc = e.target.result;
                        };

                        reader.readAsDataURL(file);
                    }

                    this.hasImageSelected = true;
                    this.incorrectImageFormat = false;
                }
            },
            canSubmit() {
                if ( this.isInformation() ) {
                    return true;
                } else if ( this.isOneCorrectAnswer() || this.isMultipleCorrectAnswers() ) {
                    if ( typeof this.selectedOptions === 'object' ) {
                        return this.selectedOptions.length > 0;
                    } else {
                        return !!this.selectedOptions;
                    }
                    return !!this.selectedOptions;
                } else if ( this.isFreeformAnswer() || this.isEmbeddedContent() ) {
                    return !!this.textualAnswer.trim();
                } else if ( this.isMatchPairs() ) {
                    return this.matchedPairs.length === this.pairs().length;
                } else if ( this.isPhoto() ) {
                    return this.hasImageSelected;
                } else if (this.isMissingWord()) {
                    return this.isMissingWordFilled;
                }

                return false;
            },
            resetChosenPair() {
                this.$nextTick(() => {
                    var vm = this;
                    setTimeout(() => {
                        vm.chosenPair.option = null;
                        vm.chosenPair.match = null;
                    }, 250);
                });
            },
            choose(type, pair) {
                if ( this.isMatchedPair(pair) ) {
                    return;
                }

                this.chosenPair[type] = pair.id;

                if ( this.chosenPair.option === this.chosenPair.match ) {
                    this.matchedPairs.push(pair.id);
                    this.resetChosenPair();
                } else if ( this.chosenPair.option !== null && this.chosenPair.match !== null ) {
                    this.resetChosenPair();
                }
            },
            choosePair(pair) {
                this.choose('option', pair);
            },
            choosePairMatch(pair) {
                this.choose('match', pair);
            },
            isOptionChosen(pair) {
                return this.chosenPair.option === pair.id;
            },
            isOptionMatchChosen(pair) {
                return this.chosenPair.match === pair.id;
            },
            isMatchedPair(pair) {
                if ( this.isAnswered() ) {
                    return true;
                }
                return this.matchedPairs.indexOf(pair.id) !== -1;
            },
            isAnswered() {
                return !!this.answer && this.answer.is_answered;
            },
            isCorrectOption(option) {
                return !!option.correct;
            },
            optionIconClass(option) {
                const classes = [];
                const isCorrect = this.isCorrectOption(option);
                const isChosen = this.isSelectedOption(option.id);

                if ( isChosen ) {
                    if ( isCorrect ) {
                        classes.push('correct');
                    } else {
                        classes.push('incorrect');
                    }
                }

                if ( this.isOneCorrectAnswer() ) {
                    if ( isCorrect ) {
                        classes.push('mdi-checkbox-marked-circle-outline');
                    } else {
                        classes.push('mdi-close-circle-outline');
                    }
                } else if ( this.isMultipleCorrectAnswers() ) {
                    if ( isCorrect ) {
                        classes.push('mdi-checkbox-marked-outline');
                    } else {
                        classes.push('mdi-close-box-outline');
                    }
                }

                return classes;
            }
        }
    }
</script>
<style scoped>
    .missing-word-container span {
        line-height: 24px;
        height: 34px;
        display: inline;
        white-space: pre-line;
    }
    .missing-word-container input {
        margin: 0 10px;
        padding: 0 10px;
    }
    .missing-word-container .incorrect {
        color: red;
        font-weight: bold;
        padding: 0 5px;
    }
    .missing-word-container .correct {
        color: green;
        font-weight: bold;
        padding: 0 5px;
    }
</style>
