<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PartidaProcessada extends Model
{
    protected $table = 'partidas_processadas';

    protected $fillable = [
        'id_partida',
        'quantidade_palpites',
    ];
}
