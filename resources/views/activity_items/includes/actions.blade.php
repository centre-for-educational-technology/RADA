@if(Auth::check())
    <div class="pull-right">
        @can('update', $activity_item)
            <a href="{!! route('activity_item.edit', ['activity_item' => $activity_item->id]) !!}" class="btn btn-primary btn-sm" title="{{ trans('general.actions.edit') }}">
                <i class="mdi mdi-pencil"></i>
            </a>
        @endcan
        @can('delete', $activity_item)
            <a href="#" class="btn btn-danger btn-sm" title="{{ trans('general.actions.delete') }}" data-method="delete" data-confirm="{{ trans('general.confirmations.delete') }}" data-action="{!! route('activity_item.delete', ['activity_item' => $activity_item->id]) !!}">
                <i class="mdi mdi-delete"></i>
            </a>
        @endcan
    </div>
@endif
