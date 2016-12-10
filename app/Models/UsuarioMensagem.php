<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UsuarioMensagem extends Model
{

    protected $table = 'usuarios_mensagens';

    protected $fillable = ['id_usuario', 'id_mensagem'];

}
