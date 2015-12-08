<?php
namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\Access\Authorizable;

class Usuario extends Model implements AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable, SoftDeletes;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'usuarios';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['nome', 'email', 'login', 'senha', 'serial'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['senha', 'remember_token'];

    public function gerenciados()
    {
        return $this->hasMany('App\Models\Bolao', 'id_tecnico', 'id');
    }

    public function boloes()
    {
        return $this->belongsToMany('App\Models\Bolao', 'usuarios_boloes', 'id_usuario', 'id_bolao');
    }

    public function setSerial()
    {
        $this->serial = str_random(128);
    }

    /**
     * @param array $dados
     */
    public function toObject(array $dados)
    {
        $this->nome = $dados['nome'];
        $this->email = $dados['email'];
        $this->login = $dados['login'];
        $this->senha = bcrypt($dados['senha']);
    }
}
