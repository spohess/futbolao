<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Auth;

class ArenaController extends Controller
{

    public function index()
    {
        $usuario = Auth::user();
        $dados = [
            'nome' => $usuario->nome,
            'usuario' => $usuario->login,
            'participacaoBolao' => $usuario->boloes->count(),
        ];
        return view('site.arena', $dados);
    }
}
