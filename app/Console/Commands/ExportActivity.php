<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Activity;
use Illuminate\Support\Facades\File;

class ExportActivity extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'activity:export {--id=*}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Export activities as JSON';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $ids = $this->options('id');

        $activities = Activity::whereIn('id', $ids)->with('activityItems')->get();

        $this->info(sprintf('Found %d activities.', $activities->count()));

        $path = getcwd() . '/activities.json';

        $this->info(sprintf('Writing data to %s', $path));

        File::put($path, $activities->toJSON(JSON_PRETTY_PRINT));
    }
}
