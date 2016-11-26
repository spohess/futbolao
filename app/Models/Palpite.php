<?php

namespace App\Models;

use DB;
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

    public function bolao()
    {
        return $this->hasOne('App\Models\Bolao', 'id', 'id_bolao');
    }

    public function partida()
    {
        return $this->hasOne('App\Models\Partida', 'id', 'id_partida');
    }

    public function usuario()
    {
        return $this->hasOne('App\Models\Usuario', 'id', 'id_usuario');
    }

    public function getPalpitesPendentes($idUsuario)
    {
        $partidas = DB::select('SELECT p.id,
                                       b.nome AS bolao,
                                       ec.apelido AS equipe_casa,
                                       ev.apelido AS equipe_visitante
                                  FROM partidas p
                                 INNER JOIN equipes ec
                                    ON p.id_equipe_casa = ec.id
                                 INNER JOIN equipes ev
                                    ON p.id_equipe_visitante = ev.id
                                 INNER JOIN boloes b
                                    ON p.id_competicao = b.id_competicao
                                 INNER JOIN usuarios_boloes ub
                                    ON b.id = ub.id_bolao
                                  LEFT OUTER JOIN palpites pl
                                    ON p.id = pl.id_partida
                                   AND ub.id_bolao = pl.id_bolao
                                   AND ub.id_usuario = pl.id_usuario
                                 WHERE ub.id_usuario = ?
                                   AND pl.id IS NULL
                                   AND ub.deleted_at IS NULL
                                   AND p.deleted_at IS NULL
                                   AND p.gravado IS NULL
                                   AND (TIMESTAMPDIFF(DAY, CURRENT_TIMESTAMP(), data_partida) >= 0 AND TIMESTAMPDIFF(HOUR, CURRENT_TIMESTAMP(), p.data_partida) > 3)
                                   AND TIMESTAMPDIFF(DAY, CURRENT_TIMESTAMP(), data_partida) < 14
                                 ORDER BY data_partida', [$idUsuario]);

        return $partidas;
    }
}
