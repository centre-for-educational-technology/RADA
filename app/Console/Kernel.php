<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use App\User;
use App\Activity;
use Carbon\Carbon;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        Commands\AwardBadges::class,
        Commands\MigratePublicStorage::class,
        Commands\ExportActivity::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->call(function()
        {
            Activity::onlyTrashed()->where('deleted_at', '<', Carbon::now()->subHours(24))->chunk(50, function($activities)
            {
                foreach( $activities as $activity )
                {
                    $activity->forceDelete();
                    $activity->deleteFileStorage();
                }
            });
        })->daily()->name('removeTrashedActivities')->withoutOverlapping();

        $schedule->call(function()
        {
            User::where('verified', 0)->where('created_at', '<', Carbon::now()->subHours(48))->chunk(50, function($users)
            {
                foreach ( $users as $user )
                {
                    $user->delete();
                }
            });
        })->daily()->name('removeUnverifiedUsers')->withoutOverlapping();

        $schedule->command('passport:purge')->hourly();
    }

    /**
     * Register the Closure based commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        require base_path('routes/console.php');
    }
}
