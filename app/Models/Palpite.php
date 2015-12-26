<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Palpite extends Model
{
    use SoftDeletes;

    protected $table = 'palpites';

    protected $fillable = [
        'id_bolao',
        'id_partida',
        'id_usuario',
        'placar_casa',
        'penalti_casa',
        'placar_visitante',
        'penalti_visitante',
        'pontos',
    ];
}
