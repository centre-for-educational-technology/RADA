<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\ImageService;
use App\Services\OpenBadgesService;
use App\Services\SocialAccountService;
use Illuminate\Pagination\Paginator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Paginator::useBootstrap();
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(ImageService::class, function()
        {
            return new ImageService();
        });

        $this->app->singleton(OpenBadgesService::class, function()
        {
            return new OpenBadgesService();
        });

        $this->app->singleton(SocialAccountService::class, function()
        {
            return new SocialAccountService();
        });
    }
}
