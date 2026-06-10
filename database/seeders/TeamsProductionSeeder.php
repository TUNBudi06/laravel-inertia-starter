<?php

namespace Database\Seeders;

use App\Models\TeamsProduction;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TeamsProductionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $teams = [
            ['team_name' => 'DST'],
            ['team_name' => 'LINE A'],
            ['team_name' => 'LINE B'],
            ['team_name' => 'TRANSMISI'],
            ['team_name' => 'SUB ENGINE'],
            ['team_name' => 'SUB ASSY'],
            ['team_name' => 'MAIN LINE'],
            ['team_name' => 'INSPEKSI'],
            ['team_name' => 'MOWER COLLECTOR'],
        ];

        foreach ($teams as $team) {
            TeamsProduction::insert($team);
        }
    }
}
