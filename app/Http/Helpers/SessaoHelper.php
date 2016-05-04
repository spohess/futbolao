<?php

namespace App\Http\Helpers;

use App\Models\SessaoAppAdmin;
use App\Models\Usuario;

class SessaoHelper
{

    public function iniciaSessao(Usuario $usuario)
    {
        $sessao = SessaoAppAdmin::findOrNew($usuario->id);
        $sessao->id = $usuario->id;
        $sessao->usuario = $usuario->login;
        $sessao->senha = $usuario->senha;
        $sessao->serial = str_random(128);
        $sessao->save();
        return $sessao;
    }
}
