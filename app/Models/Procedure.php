<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Procedure extends Model
{

    protected $connection = 'aspro';
    protected $table = 'procedures';

    protected $primaryKey = 'Id_Procedure';

    public $timestamps = false;

    protected $fillable = [
        'Name_Procedure',
        'Name_Area',
        'Name_Tractor',
        'Item_Procedure',
        'Pic_Procedure',
    ];
}
