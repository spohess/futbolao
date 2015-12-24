<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Equipe extends Model
{
    use SoftDeletes;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'equipes';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['nome', 'apelido', 'abreviado', 'slug', 'id_estadio'];

    public function competicoes()
    {
        return $this->belongsToMany('App\Models\Competicao', 'equipes_competicoes', 'id_equipe', 'id_competicao')->withPivot('grupo');
    }

    public function estadio()
    {
        return $this->hasOne('App\Models\Estadio', 'id', 'id_estadio');
    }

    /**
     * @param array $dados
     */
    public function toObject(array $dados)
    {
        $this->nome = $dados['nome'];
        $this->apelido = $dados['apelido'];
        $this->abreviado = strtoupper($dados['abreviado']);
        $this->slug = str_slug($dados['apelido'], "-");
        $this->id_estadio = $dados['id_estadio'];
    }
}
