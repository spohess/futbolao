<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Auth;

class UsuarioController extends Controller
{
    public function getDadosUsuario()
    {
        $dados = [
            'usuario' => Auth::user(),
        ];
        return view('site.dadosUsuario', $dados);
    }
}
