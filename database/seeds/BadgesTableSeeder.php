<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Webpatser\Uuid\Uuid;
use Illuminate\Support\Facades\DB;

class BadgesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();
        $position = 1;

        DB::table('badges')->insert([
            [
                'id' => Uuid::generate(4),
                'type' => 'register',
                'name' => 'Accountant',
                'description' => 'For creating an account.',
                'position' => $position++,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id' => Uuid::generate(4),
                'type' => 'social',
                'name' => 'Socializer',
                'description' => 'For logging in with social network.',
                'position' => $position++,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id' => Uuid::generate(4),
                'type' => 'novice_gamer',
                'name' => 'Novice Gamer',
                'description' => 'For completing first Activity.',
                'position' => $position++,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id' => Uuid::generate(4),
                'type' => 'seasoned_gamer',
                'name' => 'Seasoned Gamer',
                'description' => 'For completing five Activities.',
                'position' => $position++,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id' => Uuid::generate(4),
                'type' => 'veteran_gamer',
                'name' => 'Veteran Gamer',
                'description' => 'For completing ten Activities.',
                'position' => $position++,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id' => Uuid::generate(4),
                'type' => 'pro_gamer',
                'name' => 'Professional Gamer',
                'description' => 'Become a true game master by completing twenty-five Activities.',
                'position' => $position++,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id' => Uuid::generate(4),
                'type' => 'novice_creator',
                'name' => 'Novice Creator',
                'description' => 'For creating first Activity.',
                'position' => $position++,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id' => Uuid::generate(4),
                'type' => 'seasoned_creator',
                'name' => 'Seasoned Creator',
                'description' => 'For creating five Activities.',
                'position' => $position++,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id' => Uuid::generate(4),
                'type' => 'veteran_creator',
                'name' => 'Veteran Creator',
                'description' => 'For creating ten Activities.',
                'position' => $position++,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id' => Uuid::generate(4),
                'type' => 'pro_creator',
                'name' => 'Professional Creator',
                'description' => 'Master the art of creation by bringing twenty-five Activities into existence.',
                'position' => $position++,
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);
    }
}
