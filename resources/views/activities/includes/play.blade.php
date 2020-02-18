@can('startMonitoring', $activity)
    @if ($activity->is_template == false)
        <form class="sz-play-action-form">
            <button type="button" class="btn btn-play btn-sm" id="start-monitoring-button">
                <i class="mdi mdi-magnify"></i>
            </button>
            <script>
                window.document.getElementById('start-monitoring-button').addEventListener('click', function (e) {
                    e.preventDefault();
                    window.location.href = "{!! route('activity.start-monitoring', $activity->id) !!}";
                    return false;
                });
            </script>
        </form>
    @endif
@else
<form class="sz-play-action-form" action="{{ route('activity.start', $activity->id) }}" method="POST">
    {{ csrf_field() }}
    {!! Form::hidden('exit_url', url()->full(), []) !!}
    <input type="hidden" name="nickname" id="hidden-nickname" />
    <button type="submit" class="btn btn-play btn-sm" title="{{ trans('general.actions.play') }}">
      <i class="mdi mdi-play-circle-outline"></i>
    </button>
</form>
@endcan
