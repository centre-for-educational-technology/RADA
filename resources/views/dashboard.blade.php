@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            @include('includes.dashboard_nav', [ 'activeTab' => 'dashboard', ])
            <div class="panel panel-default">
                <div class="panel-heading">{{ trans('pages.dashboard.heading', [ 'name' => Auth::user()->name ]) }}</div>

                <div class="panel-body">
                    <h4>{{ trans('pages.dashboard.games-and-activities') }}</h4>
                    @if ( count($games) === 0 )
                        <div class="well">{{ trans('pages.dashboard.none-found') }}</div>
                    @endif

                    @php ( $gameExitUrl = route('dashboard') )
                    @foreach($games as $game)
                        <div class="row">
                            <div class="col-xs-5 col-sm-5">
                                <strong>{{ $game->activity->title }}</strong>
                            </div>
                            <div class="col-xs-4 col-sm-5">
                                @if ( $game->isComplete() )
                                    {{ trans('pages.dashboard.finished', [ 'date' => date(trans('general.date-time.formats.medium'), strtotime($game->updated_at)) ])}}
                                @else
                                    {{ trans('pages.dashboard.started', [ 'date' => date(trans('general.date-time.formats.medium'), strtotime($game->created_at)) ])}}
                                @endif
                            </div>
                            <div class="col-xs-3 col-sm-2">
                                @php ( $gameUrl = route('game.play', ['game' => $game->id, 'exit_url' => $gameExitUrl,]) )
                                @if ( $game->isComplete() )
                                    <a href="{!! $gameUrl !!}" class="btn btn-success btn-sm pull-right" title="{{ trans('pages.dashboard.btn.view-results' )}}">
                                        <i class="mdi mdi-map-marker-circle"></i>
                                    </a>
                                @else
                                    <a href="{!! $gameUrl !!}" class="btn btn-success btn-sm pull-right" title="{{ trans('pages.dashboard.btn.continue' )}}">
                                        <i class="mdi mdi-play-circle-outline"></i>
                                    </a>
                                @endif
                            </div>
                        </div>
                        <div class="row" style="margin-top: 10px;">
                            @php ( $percentage = $game->getCompletionPercentage() )
                            <div class="col-xs-12">
                                <div class="progress">
                                    <div class="progress-bar progress-bar-{{ $game->complete ? 'success' : 'info' }}" style="min-width: 2em; width: {{ $percentage }}%;">
                                        <span class="sr-only">{{ $percentage }}</span>
                                        {{ $percentage }}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
