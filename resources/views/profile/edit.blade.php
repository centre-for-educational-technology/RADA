@extends('layouts.app')

@section('footer-scripts')
    <script src="{{ asset(mix('js/edit_profile.js')) }}"></script>
@endsection

@section('content')
<div class="container">
    {!! Form::open([
        'url' => 'profile/' . $user->id,
        'files' => false,
        'class' => 'form-horizontal profile-edit',
        'role' => 'form',
        'method' => 'put',
        'data-unload-protection' => 'true',
    ]) !!}
        <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
            {!! Form::label('type', trans('auth.register.form.name'), [
                'class' => 'col-md-4 control-label',
            ]) !!}
            <div class="col-md-6">
                <div class="input-group col-xs-12">
                    <span class="input-group-addon">
                        <i class="mdi mdi-account" aria-hidden="true"></i>
                    </span>
                    {!! Form::text('name', $user->name, [
                        'class' => 'form-control',
                    ]) !!}
                </div>

                @if ($errors->has('name'))
                    <span class="help-block">
                        <strong>{{ $errors->first('name') }}</strong>
                    </span>
                @endif
            </div>
        </div>

        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
            {!! Form::label('type', trans('auth.general.password'), [
                'class' => 'col-md-4 control-label',
            ]) !!}
            <div class="col-md-6">
                <div class="input-group col-xs-12">
                    <span class="input-group-addon">
                        <i class="mdi mdi-account-key" aria-hidden="true"></i>
                    </span>
                    {!! Form::password('password', [
                        'class' => 'form-control',
                    ]) !!}
                </div>
                <span class="help-block">
                    {{ trans('pages.profile-edit.help.password') }}
                </span>

                @if ($errors->has('password'))
                    <span class="help-block">
                        <strong>{{ $errors->first('password') }}</strong>
                    </span>
                @endif
            </div>
        </div>

        <div class="form-group{{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
            {!! Form::label('type', trans('auth.general.confirm-password'), [
                'class' => 'col-md-4 control-label',
            ]) !!}
            <div class="col-md-6">
                <div class="input-group col-xs-12">
                    <span class="input-group-addon">
                        <i class="mdi mdi-account-key" aria-hidden="true"></i>
                    </span>
                    {!! Form::password('password_confirmation', [
                        'class' => 'form-control',
                    ]) !!}
                </div>

                @if ($errors->has('password_confirmation'))
                    <span class="help-block">
                        <strong>{{ $errors->first('password_confirmation') }}</strong>
                    </span>
                @endif
            </div>
        </div>

        <div class="form-group">
            <div class="col-md-6 col-md-offset-4">
                {!! Form::submit(trans('general.forms.buttons.save'), [
                    'class' => 'btn btn-primary btn-bypass-unload-protection',
                ])!!}
                {!! Html::link(route('user.profile', ['user' => $user->id]), trans('general.forms.buttons.cancel'), [
                    'class' => 'btn btn-default btn-bypass-unload-protection',
                ]) !!}
            </div>
        </div>
    {!! Form::close() !!}

    <div class="col-md-6 col-md-offset-4">
        <passport-authorized-clients v-bind:base-url="baseUrl"></passport-authorized-clients>

        @if ( Auth::user()->isAdmin() )
            <passport-clients v-bind:base-url="baseUrl"></passport-clients>
            <passport-personal-access-tokens v-bind:base-url="baseUrl"></passport-personal-access-tokens>
        @endif
    </div>
</div>
@endsection
