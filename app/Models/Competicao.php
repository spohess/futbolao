<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Competicao extends Model
{
    use SoftDeletes;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'competicoes';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['nome', 'descricao', 'modalidade', 'data_inicio', 'data_fim'];

    public function equipes()
    {
        return $this->belongsToMany('App\Models\Equipe', 'equipes_competicoes', 'id_competicao', 'id_equipe')->withPivot('grupo');
    }

    public function partidas()
    {
        return $this->hasMany('App\Models\Partida', 'id_competicao', 'id');
    }

    /**
     * @param array $dados
     */
    public function toObject(array $dados)
    {
        $this->nome = $dados['nome'];
        $this->descricao = $dados['descricao'];
        $this->modalidade = $dados['modalidade'];
        $this->data_inicio = $dados['data_inicio'];
        $this->data_fim = $dados['data_fim'];
        $this->slug = str_slug($dados['nome'], "-");
    }
}
