<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class VerifyApiAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!(Auth::check() && Auth::user()->canMakeApiCalls())) {
            abort(403, 'User is not allowed to make any API calls.');
        }

        return $next($request);
    }
}
