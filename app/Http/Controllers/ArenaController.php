<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Helpers\UsuarioBolaoHelper;
use Auth;
use App\Models\Partida;
use Carbon\Carbon;

class ArenaController extends Controller
{

    public function index()
    {
        $usuario = Auth::user();
        $usuarioBolao = new UsuarioBolaoHelper($usuario);
        $proximasPartidas = Partida::whereDate('data_partida', '>', Carbon::now())->orderBy('data_partida','DESC')->limit(20)->get();
        $ultimosResultados = Partida::whereDate('data_partida', '<', Carbon::now())->where('gravado','GRAVADO')->limit(20)->get();
        $dados = [
            'id' => $usuario->id,
            'nome' => $usuario->nome,
            'usuario' => $usuario->login,
            'participacaoBolao' => $usuario->boloes->count(),
            'listaConvites' => count($usuarioBolao->listaConvitesPendentes()),
            'avatar' => (empty(Auth::user()->design->avatar)) ? get_avatar_bolao() : Auth::user()->design->avatar,
            'proximasPartidas' => $proximasPartidas,
            'ultimosResultados' => $ultimosResultados,
        ];
        return view('site.arena', $dados);
    }
}
