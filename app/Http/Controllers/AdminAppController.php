<?php

namespace App\Http\Controllers;

use App\Http\Helpers\SenhaHelper;
use App\Http\Helpers\SessaoHelper;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Partida;
use Carbon\Carbon;

class AdminAppController extends Controller
{

    public function entrar(Request $request)
    {
        $dados = $request->json('entrar');
        $usuario = Usuario::where('login', $dados['usuario'])->first();

        $senhaHelper = new SenhaHelper($dados['usuario']);
        $senha = trim($senhaHelper->recuperaSenha($dados['senha']));

        if (Hash::check($senha, $usuario->senha)) {
            if ($usuario->hasRole('admin')) {

                $sessaoHelper = new SessaoHelper;
                $sessao = $sessaoHelper->iniciaSessao($usuario);
                if (!empty($sessao)) {
                    $retorno = [
                        'estado' => 'autenticado',
                        'serial' => $sessao->serial,
                    ];
                    return $retorno;
                }
            }
        }

        return ['estado' => 'desconhecido'];
    }

    public function getPartidasFinalizadas()
    {
        return Partida::whereDate('data_partida', '>', Carbon::now())->get();
    }

}
