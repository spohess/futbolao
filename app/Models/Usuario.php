<?php
namespace App\Models;

use Artesaos\Defender\Traits\HasDefender;
use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\Access\Authorizable;

class Usuario extends Model implements AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable, SoftDeletes, HasDefender;

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
        return $this->belongsToMany('App\Models\Bolao', 'usuarios_boloes', 'id_usuario', 'id_bolao')->where('participacao', 'aceito');
    }

    public function novoEmail()
    {
        return $this->hasOne('App\Models\UsuarioNovoEmail', 'id_usuario', 'id');
    }

    public function setSerial()
    {
        $this->serial = str_random(128);
    }

    public function setSenha($senha)
    {
        $this->senha = bcrypt($senha);
    }

    /**
     * @param array $dados
     */
    public function toObject(array $dados)
    {
        $this->nome = $dados['nome'];
        $this->email = $dados['email'];
        $this->login = $dados['login'];
        $this->setSenha($dados['senha']);
        $this->serial = str_random(128);
    }

    public function getUsuarioOndPoint()
    {
        return [
            'id' => $this->id,
            'nome' => $this->nome,
            'login' => $this->login,
        ];
    }
}
