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
        return $this->belongsToMany('App\Models\Usuario', 'usuarios_boloes', 'id_bolao', 'id_usuario')->where('participacao', 'aceito')->withPivot('pontos');
    }

    public function convites()
    {
        return $this->belongsToMany('App\Models\Usuario', 'usuarios_boloes', 'id_bolao', 'id_usuario')->where('participacao', 'convite');
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

    public static function getBolaoFromId($id)
    {
        if (!isset($id)) {
            throw new Exception("É preciso do bolão para poder enviar solicitação de entrada");
        }

        $bolao = Bolao::where("id", $id)->first();

        if (empty($bolao)) {
            throw new Exception("Não foi encontrado nenhum bolão com o ID enviado: " . $id);
        }

        return $bolao;
    }

    /**
     * @param $bolao
     */
    public function isAdmin()
    {
        return ($this->tecnico->id === Auth::user()->id) ? true : false;
    }

    public function getUsuarioOndPoint()
    {
        return [
            'id' => $this->id,
            'nome' => $this->nome,
            'descricao' => $this->descricao,
            'permissao' => $this->permissao,
            'competicao' => $this->competicao,
            'slug' => $this->slug,
        ];
    }
}
