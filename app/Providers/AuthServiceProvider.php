<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use App\Policies\ActivityItemPolicy;
use App\Policies\ActivityPolicy;
use App\Policies\UserPolicy;
use App\Policies\DiscountVoucherPolicy;
use App\Activity;
use App\ActivityItem;
use App\User;
use App\DiscountVoucher;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        Activity::class => ActivityPolicy::class,
        ActivityItem::class => ActivityItemPolicy::class,
        User::class => UserPolicy::class,
        DiscountVoucher::class => DiscountVoucherPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Passport::routes();

        Passport::tokensExpireIn(now()->addMinutes(10));

        Passport::refreshTokensExpireIn(now()->addHours(1));

        Passport::personalAccessTokensExpireIn(now()->addHours(1));
    }
}
