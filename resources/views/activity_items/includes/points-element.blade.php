<div
        class="form-group required{{ ( $errors->has('points') || $errors->has('points') ) ? ' has-error' : '' }}"
        v-if="questionType == {{ \App\Options\QuestionTypeOptions::FREEFORM_ANSWER }} || questionType == {{ \App\Options\QuestionTypeOptions::PHOTO }} || questionType == {{ \App\Options\QuestionTypeOptions::MISSING_WORD }}"
>
    <label
            class="col-md-4 control-label"
            for="points"
    >
        {{ trans('general.forms.labels.'.$pointsText) }}
    </label>
    <div class="col-md-6">
        <input
                type="number"
                name="points"
                id="points"
                class="form-control"
                style="width: 150px"
                required="required"
                value="{{ $points }}"
                min="1"
        />
        @if (isset($pointsDescription) && $pointsDescription != '')
            <span class="help-block">
                {{ trans('general.forms.labels.'.$pointsDescription) }}
            </span>
        @endif
    </div>

    @if ($errors->has('points'))
        <span class="help-block">
            <strong>{{ trans('general.messages.error.points') }}</strong>
        </span>
    @endif
</div>