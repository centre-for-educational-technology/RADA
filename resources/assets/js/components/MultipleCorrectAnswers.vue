<template>
<div id="question-type-multiple-correct-answers" class="sz-question">
    <div class="row sz-option-row" v-for="(option, index) in options">
        <div class="col-xs-8">
            <div class="input-group">
                <span class="input-group-addon" v-if="$parent.hasPreview(option)">
                    <a target="_blank" v-bind:href="$parent.getOptionImageUrl(option.image)">
                        <img
                                class="sz-option-image-small"
                                alt="option-image"
                                v-bind:src="$parent.getOptionImageUrl(option.image)"
                                v-bind:class="{ removed: hasImageRemoved(index) }"
                        >
                    </a>
                </span>
                <input type="hidden" name="ids[]" v-model="option.id">
                <input
                        type="text"
                        class="form-control"
                        name="options[]"
                        v-model="option.option"
                        v-bind:placeholder="$t('option-text')"
                >
                <span class="input-group-addon">
                    <input
                            type="checkbox"
                            name="correct[]"
                            aria-label="Correct"
                            tabindex="-1"
                            v-bind:value="index"
                            v-model="option.correct"
                            v-on:change="enforceCorrectOption()"
                            data-toggle="tooltip"
                            data-placement="left"
                            v-bind:title="$t('mark-option-as-correct')"
                    >
                </span>
            </div>
        </div>
        <div class="col-xs-4 sz-btn-controls">
            <input
                    type="number"
                    class="form-control points-input"
                    :name="'points['+index+']'"
                    required="required"
                    :placeholder="pts"
                    min="1"
                    v-bind:disabled="option.correct === false"
                    v-model="option.points"
            >
            <a href="#"
               class="btn sz-option-remove"
               tabindex="-1"
               v-on:click.prevent="removeOption(index)"
               v-bind:class="{ disabled: !canRemoveOptions() }"
            >
                <i class="mdi mdi-close-circle-outline" aria-hidden="true"></i>
            </a>
        </div>
        <div class="col-xs-12">
            <input type="file" accept="image/jpeg, image/png" capture="camera" style="display:none;" v-bind:name="'option-image-' + index" v-on:change="imageSelected($event, index)" ref="option-image">
            <input type="checkbox" style="display:none;" v-bind:name="'removed-option-images[]'" ref="removed-option-images" v-bind:value="option.id" v-model="removedImages">

            <div class="btn-group btn-group-sm" role="group">
                <a href="#" class="btn sz-image-add" tabindex="-1" v-on:click.prevent="addImage(index)" v-bind:class="{ 'sz-option-has-image': option.image }" v-bind:title="option.image" data-toggle="tooltip" data-placement="top" ref="add-image">
                    <i class="mdi mdi-camera" aria-hidden="true"></i>
                </a>
                <a href="#" class="btn btn-danger btn-xs" tabindex="-1" v-on:click.prevent="removeImage(index)" v-bind:class="{ disabled: !canRemoveImage(index) }" v-if="option.id && option.image_url" data-toggle="tooltip" data-placement="top" v-bind:title="$t('remove-existing-image')">
                    <i class="mdi mdi-checkbox-blank-outline" aria-hidden="true" v-if="!hasImageRemoved(index)"></i>
                    <i class="mdi mdi-checkbox-marked-outline" aria-hidden="true" v-if="hasImageRemoved(index)"></i>
                </a>
                <a href="#" class="btn btn-warning btn-xs" tabindex="-1" v-on:click.prevent="removeSelectedImage(index)" v-bind:class="{ disabled: !canRemoveSelectedImage(index) }" data-toggle="tooltip" data-placement="top" v-bind:title="$t('remove-selected-image')">
                    <i class="mdi mdi-delete" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12">
            <a href="#" class="btn" tabindex="-1" v-on:click.prevent="addOption">
                <i class="mdi mdi-plus-circle-outline" aria-hidden="true" v-bind:title="$t('add-option')"></i>
            </a>
        </div>
    </div>
</div>
</template>

<script>
    import ImageMixin from './../mixins/Image.js';
    import OptionImageMixin from './../mixins/OptionImage.js';

    export default {
        mixins: [ImageMixin, OptionImageMixin],
        mounted() {
            if ( this.$parent.hasQuestionData() ) {
                this.options = this.$parent.getQuestionData();
                this.enforceCorrectOption();
            } else {
                this.options = [
                    {
                        id: 0,
                        option: '',
                        correct: true,
                        image: '',
                        points: ''
                    },
                    {
                        id: 0,
                        option: '',
                        correct: false,
                        image: '',
                        points: ''
                    },
                    {
                        id: 0,
                        option: '',
                        correct: false,
                        image: '',
                        points: ''
                    },
                    {
                        id: 0,
                        option: '',
                        correct: false,
                        image: '',
                        points: ''
                    }
                ];
            }

            if ( this.$parent.hasRemovedImagesData() ) {
                this.removedImages = this.$parent.getRemovedImagesData();
            }

            this.$nextTick(() => {
                $(this.$el).find('[data-toggle="tooltip"]').tooltip();
            });
        },
        data() {
            return  {
                options: [],
                removedImages: [],
                pts: this.$t('pts')
            };
        },
        methods: {
            getPoints: function(index) {
                return this.options[index].points;
            },
            addImage: function(index) {
                $(this.$refs['option-image'][index]).trigger('click');
            },
            canRemoveOptions: function() {
                return this.options.length > 2;
            },
            removeOption: function(index) {
                if ( !this.canRemoveOptions() ) {
                    return;
                }

                this.options.splice(index, 1);
                this.enforceCorrectOption();
            },
            addOption: function() {
                this.options.push({
                    id: 0,
                    option: '',
                    correct: false,
                    image: ''
                });
                this.$nextTick(() => {
                    $(this.$el).find('[data-toggle="tooltip"]').tooltip();
                });
            },
            hasCorrectOptions: function() {
                return _.some(this.options, ['correct', true]);
            },
            enforceCorrectOption: function() {
                if ( !this.hasCorrectOptions() ) {
                    this.options[0].correct = true;
                }
            }
        }
    }
</script>
<style>
    .sz-option-remove, .points-input {
        width: 50%;
    }
    .points-input {
        float: left;
    }
</style>