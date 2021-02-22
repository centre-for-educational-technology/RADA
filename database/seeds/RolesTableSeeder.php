<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();

        DB::table('roles')->insert([
            [
                'name' => 'admin',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'zooAdmin',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'zooMember',
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);
    }
}
