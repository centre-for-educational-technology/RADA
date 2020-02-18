@extends('layouts.app')

@section('footer-scripts')
<script src="{{ asset(mix('js/manage_users.js')) }}"></script>
@endsection

@section('content')
<div class="container">
    <div class="modal fade" tabindex="-1" role="dialog" id="rolesModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">
                        <strong></strong>:
                        {{ trans('pages.manage.users.index.modal.title') }}
                    </h4>
                </div>
                <div class="modal-body">
                    <form name="roles" action="" method="post" data-action-base="{{ url('/manage/users') }}">
                        <input type="hidden" name="page" value="{{ $users->currentPage() }}">
                        <input type="hidden" name="q" value="{{ $q }}">
                        {{ csrf_field() }}
                        <div class="form-group">
                            @foreach($roles as $role)
                                <div class="row">
                                    <div class="col-xs-6">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" name="roles[]" value="{{ $role->id }}">
                                                {{ trans( 'general.roles.' . $role->name ) }}
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-xs-6">
                                        @if ( $role->name !== 'admin' )
                                        <select name="role_{{ $role->id }}_zoo">
                                            @foreach($zooOptions as $id => $title)
                                                <option value="{{ $id }}">{{ $title }}</option>
                                            @endforeach
                                        </select>
                                        @endif
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">{{ trans('general.forms.buttons.cancel') }}</button>
                    <button type="button" class="btn btn-primary" onclick="$(this).parent().parent().find('form').submit();">{{ trans('general.forms.buttons.save') }}</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-xs-12 col-md-8">
                            {{ trans('pages.manage.users.index.heading') }}
                        </div>

                        <div class="col-xs-12 col-md-4">
                            <form class="form-inline pull-right">
                                <div class="form-group">
                                    <label class="sr-only" for="q">{{ trans('general.forms.placeholders.name-or-email') }}</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" name="q" id="q" value="{{ $q }}" placeholder="{{ trans('general.forms.placeholders.name-or-email') }}">
                                        <div class="input-group-addon">
                                            <button type="submit" class="btn btn-primary btn-xs" title="{{ trans('general.forms.buttons.search') }}">
                                                <i class="mdi mdi-search-web" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="panel-body">
                    @if ( count($users) === 0 )
                        <div class="well">{{ trans('pages.manage.users.index.none-found') }}</div>
                    @else
                        <div class="table-responsive">
                            <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>{{ trans('auth.register.form.name') }}</th>
                                        <th class="hidden-xs">{{ trans('auth.general.email') }}</th>
                                        <th class="hidden-xs">{{ trans('general.date-time.created-at') }}</th>
                                        <th class="hidden-xs">{{ trans('general.date-time.updated-at') }}</th>
                                        <th class="hidden-xs">{{ trans('pages.manage.users.index.accounts') }}</th>
                                        <th>{{ trans('pages.manage.users.index.roles') }}</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($users as $user)
                                        <tr id="user-{{ $user->id }}" class="sz-user-row">
                                            <td>
                                                <a href="{!! route('user.profile', ['user' => $user->id]) !!}" class="{{ $user->blocked() ? 'sz-blocked' : ''}}">{{ $user->name }}</a>
                                            </td>
                                            <td class="hidden-xs">
                                                <a href="mailto:{{ $user->email}}" class="{{ !$user->isVerified() ? 'sz-not-verified' : ''}}">
                                                    {{ $user->email }}
                                                </a>
                                            </td>
                                            <td class="hidden-xs">{{ date(trans('general.date-time.formats.short'), strtotime($user->created_at)) }}</td>
                                            <td class="hidden-xs">{{ date(trans('general.date-time.formats.short'), strtotime($user->updated_at)) }}</td>
                                            <td class="sz-account-types hidden-xs">
                                                <i class="mdi mdi-account-key {{ $user->password ? ' active' : 'inactive' }}"></i>
                                                @if( $user->social_accounts )
                                                    @foreach( $user->social_accounts as $social )
                                                        @if ( $social->isGoogle() )
                                                            <i class="mdi mdi-google"></i>
                                                        @elseif ( $social->isFacebook() )
                                                            <i class="mdi mdi-facebook-box"></i>
                                                        @endif
                                                    @endforeach
                                                @endif
                                            </td>
                                            <td>
                                                @if ( $user->roles )
                                                    @foreach ( $user->roles as $role)
                                                        <span class="badge sz-role-badge">
                                                            {{ trans('general.roles.' . $role->name) }}
                                                            @if ( $role->hasZoo() )
                                                                ({{ $role->pivot->zoo ? $role->getZoo() : '' }})
                                                            @endif
                                                            <i class="mdi mdi-close-circle-outline" title="{{ trans('pages.manage.users.index.remove-role') }}" data-role-id="{{ $role->id }}" data-user-id="{{ $user->id }}" data-confirm="{{ trans("pages.manage.users.index.confirmations.role") }}"></i>
                                                        </span>
                                                    @endforeach
                                                @endif
                                            </td>
                                            <td>
                                                @if ( $user->isVerified() )
                                                <button class="btn btn-primary btn-xs" title="{{ trans('pages.manage.users.index.manage-roles') }}" data-toggle="modal" data-target="#rolesModal" data-user-id="{{ $user->id }}" data-user-name="{{ $user->name }}" data-user-roles="{{ json_encode( $user->getRolesData() ) }}">
                                                    <i class="mdi mdi-account-settings"></i>
                                                </button>
                                                @endif
                                                @if ( $user->id !== Auth::user()->id )
                                                    @if ( $user->blocked() )
                                                        <button class="btn btn-warning btn-xs" title="{{ trans('pages.manage.users.index.unblock-account') }}" data-toggle="action" data-method="put" data-confirm="{{ trans('general.confirmations.unblock-account') }}" data-action="{!! route('user.unblock', ['user' => $user->id]) !!}">
                                                            <i class="mdi mdi-account"></i>
                                                        </button>
                                                    @else
                                                        <button class="btn btn-warning btn-xs" title="{{ trans('pages.manage.users.index.block-account') }}" data-toggle="action" data-method="put" data-confirm="{{ trans('general.confirmations.block-account') }}" data-action="{!! route('user.block', ['user' => $user->id]) !!}">
                                                            <i class="mdi mdi-account-off"></i>
                                                        </button>
                                                    @endif
                                                @endif
                                                @can('delete', $user)
                                                    <button class="btn btn-danger btn-xs" title="{{ trans('pages.manage.users.index.delete-account') }}" data-toggle="action" data-method="delete" data-confirm="{{ trans('general.confirmations.delete-account') }}" data-action="{!! route('user.delete', ['user' => $user->id]) !!}">
                                                        <i class="mdi mdi-delete-forever"></i>
                                                    </button>
                                                @endcan
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>

                        <div class="text-center">
                            {{ $users->links() }}
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
