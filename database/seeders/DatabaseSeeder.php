<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
//    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::insert([
            [
                'name'=>'admin',
                'username'=>'admin',
                'password'=>'admin123',
                'role'=>'admin'
            ],
            [
                'name'=>'Saiful',
                'username'=>'saiful',
                'password'=>'vockompenir',
                'role'=>'admin'
            ]
        ]);
    }
}
