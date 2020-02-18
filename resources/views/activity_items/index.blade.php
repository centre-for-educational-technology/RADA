@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-xs-10 col-md-8">
                            {{ trans('pages.activity-items.index.heading') }}
                        </div>

                        <div class="col-xs-2 col-md-4">
                            <div class="pull-right">
                                @can('create', 'App\ActivityItem')
                                    <a href="{!! route('activity_item.create') !!}" class="btn btn-primary" title="{{ trans('general.actions.create') }}">
                                        <i class="mdi mdi-plus" aria-hidden="true"></i>
                                    </a>
                                @endcan
                                <a class="btn btn-primary" role="button" data-toggle="collapse" href="#search-form" aria-expanded="false" aria-controls="search-form" title="{{ trans('general.forms.buttons.search') }}">
                                    <i class="mdi mdi-search-web" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    @include('activity_items.includes.search')
                </div>

                <div class="panel-body" id="search-results">
                    @if ( count($activity_items) === 0 )
                        <div class="well">{{ trans('pages.activity-items.index.none-found') }}</div>
                    @else
                        @foreach($activity_items as $activity_item)
                            <div class="media">
                                <div class="media-left">
                                    <a href="{!! route('activity_item.show', [ 'activity_item' => $activity_item->id ]) !!}">
                                        <img class="media-object img-rounded sz-img-52x60" src="{{ $activity_item->icon_url }}" alt="featured-image">
                                    </a>
                                </div>
                                <div class="media-body">
                                    <h4 class="media-heading">
                                        <a href="{!! route('activity_item.show', ['activity_item' => $activity_item->id]) !!}">
                                            {{ $activity_item->title }}
                                        </a>
                                    </h4>
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-6">
                                            @include('includes.author', ['author' => $activity_item->user, 'date' => $activity_item->created_at])
                                        </div>
                                        <div class="col-xs-12 col-sm-6">
                                            @include('activity_items.includes.actions')
                                        </div>
                                    </div>
                                    <p class="sz-display-new-lines">{{ $activity_item->description }}</p>
                                    <div class="sz-metadata">
                                        <i class="mdi mdi-account-circle" aria-hidden="true"></i>
                                        {{ $activity_item->user->name }}
                                    </div>
                                    <div class="sz-metadata">
                                        <i class="mdi mdi-crosshairs" aria-hidden="true"></i>
                                        {{ $activity_item->getQuestionType() }}
                                    </div>
                                    <div class="sz-metadata">
                                        <i class="mdi mdi-translate" aria-hidden="true"></i>
                                        {{ $activity_item->getLanguage() }}
                                    </div>
                                    @if ( $activity_item->read_more )
                                        <div class="sz-metadata">
                                            <i class="mdi mdi-open-in-new" aria-hidden="true"></i>
                                            <a href="{{ $activity_item->read_more }}" target="_blank">{{ $activity_item->read_more }}</a>
                                        </div>
                                    @endif
                                </div>
                                @if ( !$loop->last)
                                    <hr>
                                @endif
                            </div>
                        @endforeach

                        <div class="text-center">
                            {{ $activity_items->links() }}
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
