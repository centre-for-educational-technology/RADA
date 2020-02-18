<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\User;
use App\Role;
use App\Game;
use App\ActivityItem;
use App\Activity;

use Auth;

use App\Options\ZooOptions;

use App\Services\OpenBadgesService;

use App\DiscountVoucher;

use Illuminate\Support\Facades\DB;

use Carbon\Carbon;

class UserController extends Controller
{
    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/login';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth', ['except' => ['spendDiscountVoucher',]]);
        $this->middleware('auth.admin', ['only' => ['index', 'removeRole', 'assignRoles', 'block', 'unblock', 'destroy',]]);
    }

    /**
     * Display a listing of Users.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, ZooOptions $zooOptions)
    {
        $q = $request->has('q') ? trim($request->get('q')) : NULL;
        $query = User::with(['social_accounts', 'roles']);

        if ( $q )
        {
            $query->where(function($query) use ($q)
            {
                $query->where('name', 'like', '%' . $q . '%')->orWhere('email', 'like', '%' . $q . '%');
            });
        }

        $users = $query->paginate( config('paginate.limit') );

        if ( $q )
        {
            $users->appends([
                'q' => $q,
            ]);
        }

        return view('manage/users/index')->with([
            'users' => $users,
            'roles' => Role::all(),
            'zooOptions' => $zooOptions->options(),
            'q' => $q,
        ]);
    }

    /**
     * Display User profile page.
     * @param  App\User $user User object
     * @return [type]         Profile view
     */
    public function show(OpenBadgesService $openBadgesService, User $user)
    {
        $this->authorize('view', $user);

        return view('profile/show')->with([
            'user' => $user,
            'openBadgesService' => $openBadgesService,
            'isCurrentUser' => Auth::check() && Auth::user()->id === $user->id,
        ]);
    }

    /**
     * Display User profile edit page.
     * @param  App\User $user User object
     * @return [type]         Profile edit page
     */
    public function edit(User $user)
    {
        $this->authorize('update', $user);

        return view('profile/edit')->with('user', $user);
    }

    /**
     * Update user profile.
     * @param  Illuminate\Http\Request $request Form data
     * @param  App\User                $user    User object
     * @return [type]                           [description]
     */
    public function update(Request $request, User $user)
    {
        $this->authorize('update', $user);

        $this->validate($request, [
            'name' => 'required|max:255',
            'password' => 'min:6|confirmed',
        ]);

        $attributes = [];

        if ( $request->has('name') )
        {
            $attributes['name'] = $request->get('name');
        }

        if ( $request->has('password') && $request->has('password_confirmation') && $request->get('password') === $request->get('password_confirmation') )
        {
            $attributes['password'] = bcrypt($request->get('password'));
        }

        if ( count($attributes) > 0 )
        {
            $user->update($attributes);
        }

        return redirect()->route('user.profile', [ 'user' => $user->id ]);
    }

    /**
     * Remove role from a user.
     * @param  App\User $user User object
     * @param  App\Role $role Role object
     * @return [type]         [description]
     */
    public function removeRole(User $user, Role $role)
    {
        if ( !$user->hasRole($role->name) || ( $role->name === 'admin' && $user->id === Auth::user()->id ) )
        {
            return response()->json(['error' => 'Forbidden.'], 403);
        }

        $user->roles()->detach($role);
        $user->load('roles');

        return response()->json(['user' => $user->id, 'role' => $role->id, 'roles' => $user->getRolesData()], 200);
    }

    /**
     * Assign roles to a user.
     * @param  Illuminate\Http\Request $request Form data
     * @param  App\User                $user    User object
     * @return [type]                           [description]
     */
    public function assignRoles(Request $request, User $user)
    {
        $roles = $request->get('roles');
        $syncableRoles = [];

        if ( $roles ) {
            foreach ( $roles as $role ) {
                $syncableRoles[$role] = [ 'zoo' => $request->get('role_' . $role . '_zoo') ];
            }
        }

        // Prevent removing Administrator role from self
        if ( $user->isAdmin() && $user->id === Auth::user()->id ) {
            $adminRole = Role::getAdminRole();
            $syncableRoles[$adminRole->id] = ['zoo' => null];
        }

        $user->roles()->sync($syncableRoles);

        $routeParams = [
            'page' => $request->get('page'),
            '#user-' . $user->id,
        ];

        if ( $request->has('q') && $request->get('q') )
        {
            $routeParams['q'] = $request->get('q');
        }

        return redirect()->route('manage.users', $routeParams);
    }

    /**
     * Spends existing Discount Voucher that user has.
     * Spends the voucher with least validity time left in case multiple are present.
     * @param  App/DiscountVoucher $voucher DiscountVoucher object
     * @return \Illuminate\Http\Response
     */
    public function spendDiscountVoucher(DiscountVoucher $voucher)
    {
        if ( !Auth::guard('web')->check() ) {
            return response()->json(['error' => 'Unauthorized.'], 401);
        }

        $user = Auth::user();

        if ( !$user->hasDiscountVoucher($voucher) ) {
            return response()->json(['error' => 'Forbidden.'], 403);
        }

        DB::table('discount_voucher_user')
            ->where('discount_voucher_id', $voucher->id)
            ->where('user_id', $user->id)
            ->where('spent', 0)
            ->where('valid_until', '>', Carbon::now())
            ->orderBy('discount_voucher_user.valid_until', 'asc')
            ->limit(1)
            ->update(['spent' => 1,]);
        activity()
            ->performedOn($voucher)
            ->withProperties([])
            ->log('spent');

        return [
            'discount_voucher_id' => $voucher->id,
        ];
    }

    /**
     * Block user.
     * @param  Illuminate\Http\Request $request Form data
     * @param  App\User                $user    User object
     * @return \Illuminate\Http\Response
     */
    public function block(Request $request, User $user)
    {
        $this->authorize('block', $user);

        if ( !$user->blocked() )
        {
            $user->blocked_at = Carbon::now();
            $user->save();
            activity()
                ->performedOn($user)
                ->withProperties([])
                ->log('blocked');
        }

        return back();
    }

    /**
     * Unblock user.
     * @param  Illuminate\Http\Request $request Form data
     * @param  App\User                $user    User object
     * @return \Illuminate\Http\Response
     */
    public function unblock(Request $request, User $user)
    {
        $this->authorize('block', $user);

        if ( $user->blocked() )
        {
            $user->blocked_at = NULL;
            $user->save();
            activity()
                ->performedOn($user)
                ->withProperties([])
                ->log('unblocked');
        }

        return back();
    }

    /**
     * Delete user.
     * @param  Illuminate\Http\Request $request Form data
     * @param  App\User                $user    User object
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, User $user)
    {
        $this->authorize('delete', $user);

        Game::where('user_id', $user->id)->chunk(50, function ($games)
        {
            foreach ( $games as $game )
            {
                $game->delete();
                $game->deleteFileStorage();
            }
        });

        ActivityItem::where('user_id', $user->id)->chunk(50, function($items)
        {
            foreach( $items as $item)
            {
                $item->delete();
                $item->deleteFileStorage();
            }
        });

        Activity::withTrashed()->where('user_id', $user->id)->chunk(50, function($activities)
        {
            foreach ( $activities as $activity )
            {
                $activity->forceDelete();
                $activity->deleteFileStorage();
            }
        });

        $user->delete();

        return back();
    }
}
