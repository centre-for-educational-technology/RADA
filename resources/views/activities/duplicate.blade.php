@extends('layouts.app')

@section('footer-scripts')
@include('activities.includes.locales')
@include('activities.includes.options')
<script>
    window.Laravel.activityItems = <?php echo json_encode($activity_items); ?>;
    window.Laravel.canCreateActivityItem = <?php echo json_encode(Auth::user()->can('create', 'App\Activity')); ?>;
    window.Laravel.hasFeaturedImage = <?php echo json_encode($activity->hasFeaturedImage()); ?>;
    window.Laravel.enforceItemsOrder = <?php echo $activity->enforce_items_order; ?>;
    window.Laravel.subjects = <?php echo json_encode(array_values($subjectOptions)); ?>;
</script>
<script src="{{ elixir('js/create_edit_activity.js') }}"></script>
@endsection

@section('content')
<div class="container">
    {!! Form::open([
        'url' => 'activities/' . $activity->id . '/duplicate',
        'files' => true,
        'class' => 'form-horizontal activity-edit',
        'role' => 'form',
        'method' => 'put',
        'data-unload-protection' => 'true',
    ]) !!}
        @include('includes.readd-pictures-alert', [ 'errors' => $errors, ])
        <div class="form-group required{{ $errors->has('title') ? ' has-error' : '' }}">
            {!! Form::label('title', trans('general.forms.labels.title'), [
                'class' => 'col-md-4 control-label',
            ]) !!}
            <div class="col-md-6">
                <div class="input-group col-xs-12">
                    {!! Form::text('title', $activity->title, [
                        'class' => 'form-control',
                    ]) !!}
                </div>

                @if ($errors->has('title'))
                    <span class="help-block">
                        <strong>{{ $errors->first('title') }}</strong>
                    </span>
                @endif
            </div>
        </div>

        <div class="form-group">
            {!! Form::label('description', trans('general.forms.labels.game-story-and-rules'), [
                'class' => 'col-md-4 control-label',
            ]) !!}
            <div class="col-md-6">
                <div class="input-group col-xs-12">
                    {!! Form::textarea('description', $activity->description, [
                        'class' => 'form-control',
                        'rows' => '3',
                    ]) !!}
                </div>
            </div>
        </div>

        <div class="form-group{{ $errors->has('playing_time') ? ' has-error' : '' }}">
            {!! Form::label('playing_time', trans('general.forms.labels.playing-time'), [
                'class' => 'col-md-4 control-label',
            ]) !!}
            <div class="col-md-6">
                <div class="input-group col-xs-12">
                    <span class="input-group-addon">
                        <i class="mdi mdi-timer" aria-hidden="true"></i>
                    </span>
                    {!! Form::number('playing_time', $activity->playing_time, [
                        'class' => 'form-control',
                        'min' => 0,
                    ]) !!}
                </div>

                <p class="help-block">
                    {{ trans('general.forms.help.playing-time') }}
                </p>

                @if ($errors->has('playing_time'))
                    <span class="help-block">
                        <strong>{{ $errors->first('playing_time') }}</strong>
                    </span>
                @endif
            </div>
        </div>

        <div class="form-group{{ $errors->has('language') ? ' has-error' : '' }}">
            {!! Form::label('language', trans('general.language'), [
                'class' => 'col-md-4 control-label',
            ]) !!}
            <div class="col-md-6">
                <div class="input-group col-xs-12">
                    <span class="input-group-addon">
                        <i class="mdi mdi-translate" aria-hidden="true"></i>
                    </span>
                    {!! Form::select('language', $languageOptions, $activity->language, [
                        'class' => 'form-control',
                    ]) !!}
                </div>

                @if ($errors->has('language'))
                    <span class="help-block">
                        <strong>{{ $errors->first('language') }}</strong>
                    </span>
                @endif
            </div>
        </div>

        <div class="form-group{{ $errors->has('contact_information') ? ' has-error' : '' }}">
            {!! Form::label('contact_information', trans('general.forms.labels.contact-information'), [
                'class' => 'col-md-4 control-label',
            ]) !!}
            <div class="col-md-6">
                <div class="input-group col-xs-12">
                    <span class="input-group-addon">
                        <i class="mdi mdi-contact-mail" aria-hidden="true"></i>
                    </span>
                    {!! Form::text('contact_information', $activity->contact_information, [
                        'class' => 'form-control',
                    ]) !!}
                </div>

                @if ($errors->has('contact_information'))
                    <span class="help-block">
                        <strong>{{ $errors->first('contact_information') }}</strong>
                    </span>
                @endif
            </div>
        </div>

        <div class="form-group{{ $errors->has('featured_image') ? ' has-error' : '' }}">
            {!! Form::label('featured_image', trans('general.forms.labels.featured-image'), [
                'class' => 'col-md-4 control-label',
            ]) !!}
            <div class="col-md-6">
                <div class="input-group col-xs-12">
                    <span class="input-group-addon">
                        <i class="mdi mdi-image" aria-hidden="true"></i>
                    </span>
                    {!! Form::file('featured_image', [
                        'class' => 'form-control',
                        'ref' => 'featuredImage',
                        'accept' => 'image/jpeg, image/png',
                    ]) !!}
                    <span class="input-group-addon" data-toggle="tooltip" data-placement="left" data-trigger="hover" data-container="body" title="{{ trans('general.forms.tooltips.remove-image') }}">
                        {!! Form::checkbox('remove_featured_image', 1, false, [
                            'ref' => 'removeFeaturedImage',
                            'v-bind:disabled' => 'canRemoveFeaturedImage()',
                        ]) !!}
                    </span>
                    <span class="input-group-addon">
                        <a href="#" class="btn btn-warning btn-xs" v-on:click="resetFeaturedImage" ref="removeFeaturedImage" v-on:click="resetFeaturedImage" v-bind:disabled="!canResetFeaturedImage">
                            <i class="mdi mdi-delete" aria-hidden="true"></i>
                        </a>
                    </span>
                </div>

                <p class="help-block" data-loading-text="{{ trans('general.forms.alerts.image-loading-text') }}">
                    @if ($activity->hasFeaturedImage())
                        <img src="{!! $activity->getFeaturedImageUrl() !!}" alt="featured_image" class="img-rounded pull-left sz-uploaded-image-preview">
                    @endif
                    {{ trans('general.forms.help.image') }}
                </p>

                @if ($errors->has('featured_image'))
                    <span class="help-block">
                        <strong>{{ $errors->first('featured_image') }}</strong>
                    </span>
                @endif
            </div>
        </div>

        <div class="form-group{{ ( $errors->has('proximity_radius') || $errors->has('proximity_check') ) ? ' has-error' : '' }}">
            {!! Form::label('radius', trans('general.forms.labels.proximity'), [
                'class' => 'col-md-4 control-label',
            ]) !!}
            <div class="col-md-6">
                <div class="input-group col-xs-12">
                    <span class="input-group-addon">
                        <i class="mdi mdi-radar" aria-hidden="true"></i>
                    </span>
                    {!! Form::number('proximity_radius', $activity->proximity_radius, [
                        'class' => 'form-control',
                        'min' => 25,
                        'max' => 100,
                        'ref' => 'proximityRadius',
                    ]) !!}
                    <span class="input-group-addon" data-toggle="tooltip" data-placement="left" data-trigger="hover" title="{{ trans('pages.activities.create-or-edit.tooltips.proximity-check') }}">
                        {!! Form::checkbox('proximity_check', 1, $activity->proximity_check, [
                            'ref' => 'proximityCheck',
                        ]) !!}
                    </span>
                </div>
                <p class="help-block">
                    {{ trans('pages.activities.create-or-edit.help.proximity', ['default' => config('services.maps.allowed_distance')]) }}
                </p>

                @if ($errors->has('proximity_radius'))
                    <span class="help-block">
                        <strong>{{ $errors->first('proximity_radius') }}</strong>
                    </span>
                @endif

                @if ($errors->has('proximity_check'))
                    <span class="help-block">
                        <strong>{{ $errors->first('proximity_check') }}</strong>
                    </span>
                @endif
            </div>
        </div>

        <div class="form-group{{ $errors->has('items') ? ' has-error' : '' }}">
            {!! Form::label('items', trans('general.forms.labels.activity-items'), [
                'class' => 'col-md-4 control-label',
            ]) !!}
            <div class="col-md-6">
                <div class="input-group col-xs-12" id="activity-items">
                    <activity-items v-bind:base-url="baseUrl" v-bind:api-url="apiUrl" v-bind:can-create-activity-item="canCreateActivityItem"></activity-items>
                </div>
            </div>
        </div>

        @can('changePromoted', $activity)
        <div class="form-group">
            <div class="checkbox col-md-6 col-md-offset-4">
                <label>
                    {!! Form::hidden('promoted', 0) !!}
                    {!! Form::checkbox('promoted', 1, (bool)$activity->promoted) !!}
                    {{ trans('general.forms.labels.promoted') }}
                </label>
            </div>
        </div>
        @endcan

        <div class="form-group{{ $errors->has('keywords') ? ' has-error' : '' }}">
            {!! Form::label('keywords', trans('general.forms.labels.keywords'), [
                'class' => 'col-md-4 control-label',
            ]) !!}
            <div class="col-md-6">
                <div class="input-group col-xs-12">
                    {!! Form::text('keywords', $activity->keywords, [
                        'class' => 'form-control keywords-input',
                        'min' => 0
                    ]) !!}
                </div>

                <p class="help-block">
                    {{ trans('general.forms.help.keywords') }}
                </p>

                @if ($errors->has('keywords'))
                    <span class="help-block">
                                <strong>{{ $errors->first('keywords') }}</strong>
                            </span>
                @endif
            </div>
        </div>

        <div class="form-group{{ $errors->has('subject') ? ' has-error' : '' }}">
            {!! Form::label('subject', trans('general.forms.labels.subject'), [
                'class' => 'col-md-4 control-label',
            ]) !!}
            <div class="col-md-6">
                <div class="input-group col-xs-12" id="subject">
                    <autocomplete name="subject" default-value="{{ $activity->subject  }}" :search="subjectSearch" base-class="form-control autocomplete"></autocomplete>
                </div>
            </div>
        </div>

        <div class="form-group{{ $errors->has('age_of_participants') ? ' has-error' : '' }}">
            {!! Form::label('age_of_participants', trans('general.forms.labels.age_of_participants'), [
                'class' => 'col-md-4 control-label',
            ]) !!}
            <div class="col-md-6">
                <div class="input-group col-xs-12">
                            <span class="input-group-addon">
                                <i class="mdi mdi-cake" aria-hidden="true"></i>
                            </span>
                    {!! Form::select('age_of_participants', $ageOfParticipantsOptions, $activity->getAgeOfParticipants(), [
                        'class' => 'form-control',
                        'multiple'=>'multiple',
                        'name' => 'age_of_participants[]'
                    ]) !!}
                </div>

                @if ($errors->has('age_of_participants'))
                    <span class="help-block">
                                <strong>{{ $errors->first('age_of_participants') }}</strong>
                            </span>
                @endif
            </div>
        </div>

        <div class="form-group">
            <div class="col-md-6 col-md-offset-4">
                <div class="alert alert-info hidden submit-loading-text">
                    {{ trans('general.forms.alerts.form-submit-loading-text') }}
                </div>
                {!! Form::submit(trans('general.forms.buttons.save'), [
                    'class' => 'btn btn-primary btn-bypass-unload-protection',
                ])!!}
                {!! Html::link(route('activity.index'), trans('general.forms.buttons.cancel'), [
                    'class' => 'btn btn-default btn-bypass-unload-protection',
                ]) !!}
            </div>
        </div>
    {!! Form::close() !!}
</div>
@endsection