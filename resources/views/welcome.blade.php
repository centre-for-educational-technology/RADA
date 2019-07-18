@extends('layouts.app')

@section('footer-scripts')
<script src="{{ elixir('js/welcome.js') }}"></script>
@endsection

@section('content')
<div class="container sz-welcome-page">
    <div class="row" id="sz-quick-play">
        <div class="col-xs-12">
            <button class="btn btn-default sz-quick-play-btn">
                <i class="mdi mdi-map-marker" aria-hidden="true"></i>
                {{ trans('pages.welcome.btn.play-smart-zoos') }}
            </button>
        </div>

        <div class="col-xs-12" style="display:none;">
            <div class="text-center">
                <h2>
                    {{ trans('pages.welcome.choose-location')}}:
                </h2>
            </div>

            @foreach ( $zooOptions as $key => $option)
                <a href="{!! route('activity.index', ['zoo' => $key]) !!}" class="btn btn-default sz-quick-play-btn sz-quick-play-zoo-btn">
                    {{ $option }}
                </a>
            @endforeach
        </div>
    </div>

    <div class="row">
        <div class="jumbotron col-xs-12">
            <h1 class="text-center">{{ trans('pages.welcome.jumbotron.information.heading') }}</h1>
            <p class="text-center">{{ trans('pages.welcome.jumbotron.information.content') }}</p>
            <h2 class="text-center">{{ trans('pages.welcome.jumbotron.schools.heading')}}</h2>
            <p class="text-center">{!! trans('pages.welcome.jumbotron.schools.content') !!}</p>
            @if (Auth::guest())
                <p class="row">
                    <p class="col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3 text-center">
                        <a class="btn btn-primary btn-sm" href="{{ url('/login') }}" role="button">{{ trans('general.forms.buttons.login-or-register') }}</a>
                    </p>
                </p>
            @endif
        </div>
    </div>
</div>
@endsection
