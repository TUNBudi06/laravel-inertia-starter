<?php

namespace App\Http\Controllers;

use App\Models\TeamsProduction;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $teams = TeamsProduction::orderBy('team_name')->get();

        return inertia()->render("Dashboard/MainComponent", [
            'teams' => $teams,
        ]);
    }
}
