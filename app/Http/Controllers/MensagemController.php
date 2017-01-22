<?php

namespace App\Http\Controllers;

use App\Http\Helpers\MensagemHelper;
use App\Models\Mensagem;
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

    public function getMensagens()
    {
        $mensagem = new Mensagem;
        $mensagemHelper = new MensagemHelper($mensagem);
        return $mensagemHelper->montaListaMensagem();
    }
}
