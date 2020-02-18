<nav class="navbar navbar-default navbar-static-top">
    <div class="container">
        <div class="navbar-header">

            <!-- Collapsed Hamburger -->
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                <span class="sr-only">Toggle Navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

            <!-- Branding Image -->
            <a class="navbar-brand" href="{{ url('/') }}">
                <img alt="{{ config('app.name', 'RADA') }}" src="{{ asset('img/logos/logo.png') }}" class="sz-navbar-brand-logo">
            </a>
        </div>

        <div class="collapse navbar-collapse" id="app-navbar-collapse">
            <!-- Left Side Of Navbar -->
            <ul class="nav navbar-nav">
                <li class="{{ Request::is('/')? 'active': '' }}">
                    <a href="{{ url('/') }}">{{ trans('navbar.home') }}</a>
                </li>
                <li class="{{ (
                (
                    Request::is('activities', 'game/*') ||
                    Request::is('activities', 'game') ||
                    Request::is('activity_items', 'tasks/*')
                ) &&
                !Request::is('activities', 'game/promoted')
                )? 'active': '' }}">
                    <a href="{{ url('/game') }}">{{ trans('navbar.activities') }}</a>
                </li>
                <li class="{{ (Request::is('activities', 'game/promoted')) ? 'active': '' }}">
                    <a href="{{ url('/game/promoted') }}">{{ trans('navbar.promoted') }}</a>
                </li>
{{--                @can('addGrades', \App\Activity::class)--}}
{{--                    <li class="{{ (Request::is('grading', 'grading') || Request::is('grading', 'grading/*')) ? 'active' : '' }}">--}}
{{--                        <a href="{{ url('/grading') }}">{{ trans('navbar.grading') }}</a>--}}
{{--                    </li>--}}
{{--                @endcan--}}
            </ul>

            <!-- Right Side Of Navbar -->
            <div class="navbar-right">
            <ul class="nav navbar-nav">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                        <i class="mdi mdi-translate" aria-hidden="true"></i>
                        {{ trans('general.language') }} <span class="caret"></span>
                    </a>

                    <ul class="dropdown-menu" role="menu">
                        @php( $currentLocale = App::getLocale() )
                        @foreach( resolve('App\Options\LanguageOptions')->options() as $key => $option)
                        <li class="{{ ( $key === $currentLocale ) ? 'active' : '' }}">
                            <a href="{{ url('locale/' . $key) }}" class="sz-set-locale">{{ $option }}</a>
                        </li>
                        @endforeach
                    </ul>
                    <form id="locale-form" action="" method="POST" style="display: none;">
                        {{ csrf_field() }}
                    </form>
                </li>
            </ul>
            <ul class="nav navbar-nav">
                <!-- Authentication Links -->
                @if (Auth::guest())
                    <li><a href="{{ url('/login') }}">{{ trans('general.forms.buttons.login-or-register') }}</a></li>
                @else
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                            <i class="mdi mdi-account-circle" aria-hidden="true"></i>
                            {{ Auth::user()->name }} <span class="caret"></span>
                        </a>

                        <ul class="dropdown-menu" role="menu">
                            <li>
                                <a href="{!! route('user.profile', [ 'user' => Auth::user()->id ]) !!}">
                                    <i class="mdi mdi-face-profile" aria-hidden="true"></i>
                                    {{ trans('pages.profile.title') }}
                                </a>
                            </li>
                            <li>
                                <a href="{!! route('dashboard') !!}">
                                    <i class="mdi mdi-view-dashboard" aria-hidden="true"></i>
                                    {{ trans('pages.dashboard.title') }}
                                </a>
                            </li>
                            @if ( Auth::user()->isAdmin() )
                                <li>
                                    <a href="{!! route('manage.users') !!}">
                                        <i class="mdi mdi-account-multiple" aria-hidden="true"></i>
                                        {{ trans('pages.manage.users.index.heading') }}
                                    </a>
                                </li>
                                <li>
                                    <a href="{!! route('manage.statistics') !!}">
                                        <i class="mdi mdi-chart-pie" aria-hidden="true"></i>
                                        {{ trans('pages.manage.statistics.heading') }}
                                    </a>
                                </li>
                            @endif
                            <li>
                                <a href="{{ url('/logout') }}"
                                    onclick="event.preventDefault();
                                             document.getElementById('logout-form').submit();">
                                    <i class="mdi mdi-logout" aria-hidden="true"></i>

                                    {{ trans('auth.logout.form.btn.logout') }}
                                </a>

                                <form id="logout-form" action="{{ url('/logout') }}" method="POST" style="display: none;">
                                    {{ csrf_field() }}
                                </form>
                            </li>
                        </ul>
                    </li>
                @endif
            </ul>
            </div>
        </div>
    </div>
</nav>
