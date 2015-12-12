<?php

namespace App\Models;

use Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Bolao extends Model
{
    use SoftDeletes;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'boloes';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['nome', 'descricao', 'permissao', 'id_tecnico'];

    public function tecnico()
    {
        return $this->hasOne('App\Models\Usuario', 'id', 'id_tecnico');
    }

    public function participantes()
    {
        return $this->belongsToMany('App\Models\Usuario', 'usuarios_boloes', 'id_bolao', 'id_usuario')->where('participacao', 'aceito');
    }

    public function competicao()
    {
        return $this->hasOne('App\Models\Competicao', 'id', 'id_competicao');
    }

    public function setIdTecnico($idTecnico)
    {
        $this->id_tecnico = $idTecnico;
    }

    /**
     * @param array $dados
     */
    public function toObject(array $dados)
    {
        $this->nome = $dados['nome'];
        $this->descricao = $dados['descricao'];
        $this->permissao = $dados['permissao'];
        $idTecnico = (!isset($dados['id_tecnico'])) ? Auth::user()->id : $dados['id_tecnico'];
        $this->setIdTecnico($idTecnico);
        $this->id_competicao = $dados['id_competicao'];
        $this->slug = str_slug($dados['nome'], "-");
    }
}
