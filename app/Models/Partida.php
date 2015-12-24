<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Partida extends Model
{
    use SoftDeletes;

    protected $table = 'partidas';

    protected $fillable = [
        'id_competicao',
        'penalti',
        'id_estadio',
        'data_partida',
        'rodada',
        'id_equipe_casa',
        'placar_casa',
        'penalti_casa',
        'id_equipe_visitante',
        'placar_visitante',
        'penalti_visitante',
    ];

    public function competicao()
    {
        return $this->hasOne('App\Models\Competicao', 'id', 'id_competicao');
    }

    public function local()
    {
        return $this->hasOne('App\Models\Estadio', 'id', 'id_estadio');
    }

    public function equipeCasa()
    {
        return $this->hasOne('App\Models\Equipe', 'id', 'id_equipe_casa');
    }

    public function equipeVisitante()
    {
        return $this->hasOne('App\Models\Equipe', 'id', 'id_equipe_visitante');
    }

    public function toObject(array $dados)
    {
        $this->id_competicao = $dados['id_competicao'];
        $this->penalti = (isset($dados['penalti'])) ? $dados['penalti'] : false;
        $this->id_estadio = $dados['id_estadio'];
        $this->data_partida = $dados['data_partida'];
        $this->rodada = $dados['rodada'];
        $this->id_equipe_casa = $dados['id_equipe_casa'];
        $this->placar_casa = (isset($dados['placar_casa'])) ? $dados['placar_casa'] : 0;
        $this->penalti_casa = (isset($dados['penalti_casa'])) ? $dados['penalti_casa'] : null;
        $this->id_equipe_visitante = $dados['id_equipe_visitante'];
        $this->placar_visitante = (isset($dados['placar_visitante'])) ? $dados['placar_visitante'] : 0;
        $this->penalti_visitante = (isset($dados['penalti_visitante'])) ? $dados['penalti_visitante'] : null;
    }
}
