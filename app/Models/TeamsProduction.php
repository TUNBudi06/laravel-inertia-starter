<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TeamsProduction extends Model
{
    protected $table = 'teams_productions';

    protected $fillable = [
        'team_name',
    ];
}
