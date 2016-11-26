<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Helpers\UsuarioBolaoHelper;
use App\Models\Palpite;
use App\Models\Partida;
use Auth;
use Carbon\Carbon;

class ArenaController extends Controller
{

    public function index()
    {
        $usuario = Auth::user();

        $palpite = new Palpite;
        $palpitesPendentes = $palpite->getPalpitesPendentes($usuario->id);
        $palpitesPendentesQtd = count($palpitesPendentes);

        $usuarioBolao = new UsuarioBolaoHelper($usuario);
        $proximasPartidas = Partida::where('data_partida', '>=', Carbon::now())->orderBy('data_partida')->limit(20)->get();
        $ultimosResultados = Partida::where('gravado', 'GRAVADO')->orderBy('data_partida', 'desc')->limit(20)->get();
        $dados = [
            'id' => $usuario->id,
            'nome' => $usuario->nome,
            'usuario' => $usuario->login,
            'participacaoBolao' => $usuario->boloes->count(),
            'listaConvites' => count($usuarioBolao->listaConvitesPendentes()),
            'avatar' => (empty(Auth::user()->design->avatar)) ? get_avatar_bolao() : Auth::user()->design->avatar,
            'proximasPartidas' => $proximasPartidas,
            'ultimosResultados' => $ultimosResultados,
            'palpitesPendentes' => $palpitesPendentes,
            'palpitesPendentesQtd' => $palpitesPendentesQtd,
        ];
        return view('site.arena', $dados);
    }
}
