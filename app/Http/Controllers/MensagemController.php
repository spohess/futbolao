<?php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;
// use App\Http\Requests;

use App\Models\UsuarioMensagem;
use Auth;

class MensagemController extends Controller
{
    public function arquivaMensagem($idMensagem)
    {
        $usuario = Auth::user();
        $usuarioMensagem = new UsuarioMensagem;
        $usuarioMensagem->id_usuario = $usuario->id;
        $usuarioMensagem->id_mensagem = $idMensagem;

        if ($usuarioMensagem->save()) {
            return ['estado' => 'sucesso'];
        }

        return ['estado' => 'erro'];
    }
}
