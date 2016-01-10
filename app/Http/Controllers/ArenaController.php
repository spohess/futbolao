<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Helpers\UsuarioBolaoHelper;
use Auth;

class ArenaController extends Controller
{

    public function index()
    {
        $usuario = Auth::user();
        $usuarioBolao = new UsuarioBolaoHelper($usuario);
        $dados = [
            'id' => $usuario->id,
            'nome' => $usuario->nome,
            'usuario' => $usuario->login,
            'participacaoBolao' => $usuario->boloes->count(),
            'listaConvites' => count($usuarioBolao->listaConvitesPendentes()),
            'avatar' => (empty(Auth::user()->design->avatar)) ? get_avatar_bolao() : Auth::user()->design->avatar,
        ];
        return view('site.arena', $dados);
    }
}
