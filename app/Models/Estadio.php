<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Estadio extends Model
{
    use SoftDeletes;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'estadios';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['nome', 'apelido', 'slug', 'cidade', 'uf', 'pais'];

    /**
     * @param array $dados
     */
    public function toObject(array $dados)
    {
        $this->nome = $dados['nome'];
        $this->apelido = $dados['apelido'];
        $this->slug = str_slug($dados['apelido'], "-");
        $this->cidade = $dados['cidade'];
        $this->uf = $dados['uf'];
        $this->pais = $dados['pais'];
    }
}
