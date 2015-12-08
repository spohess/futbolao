<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\BolaoRequest;
use App\Models\Bolao;
use App\Models\UsuarioBolao;
use Auth;

class BolaoController extends Controller
{

    /**
     * @param BolaoRequest $request
     * @return json
     */
    public function cria(BolaoRequest $request)
    {
        $bolao = new Bolao;
        $bolao->toObject($request->all());
        $bolao->setIdTecnico();
        if ($bolao->save()) {
            $usuarioBolao = new UsuarioBolao;
            $usuarioBolao->id_usuario = Auth::user()->id;
            $usuarioBolao->id_bolao = $bolao->id;
            if ($usuarioBolao->save()) {
                return ['estado' => 'sucesso'];
            }
        }
        return ['estado' => 'erro'];
    }

    /**
     * @param Requests $request
     * @return mixed
     */
    public function validaNomeBolao(Requests $request)
    {
        return $request;
    }

    /**
     * @return mixed
     */
    public function getUsuarioBolao()
    {
        $listaBoloes = [];
        $boloes = Auth::user()->boloes;
        foreach ($boloes as $bolao) {
            $dados = [
                "permissao" => $bolao->permissao,
                "id" => $bolao->id,
                "nome" => $bolao->nome,
                "nomeTecnico" => $bolao->tecnico->nome,
                "loginTecnico" => $bolao->tecnico->login,
                "participantes" => $bolao->participantes->count(),
                "pontuacao" => 0,
            ];
            array_push($listaBoloes, $dados);
        }
        if (empty($listaBoloes)) {
            return ['estado' => 'vazia'];
        } else {
            return ['estado' => 'sucesso', 'lista' => $listaBoloes];
        }
        return ['estado' => 'erro'];
    }

    /**
     * @return mixed
     */
    public function getTodosBolao()
    {
        $listaBoloes = [];
        $boloes = Bolao::all();
        foreach ($boloes as $bolao) {
            $dados = [
                "permissao" => $bolao->permissao,
                "id" => $bolao->id,
                "nome" => $bolao->nome,
                "nomeTecnico" => $bolao->tecnico->nome,
                "loginTecnico" => $bolao->tecnico->login,
                "participantes" => $bolao->participantes->count(),
                "pontuacao" => 0,
            ];
            array_push($listaBoloes, $dados);
        }
        if (empty($listaBoloes)) {
            return ['estado' => 'vazia'];
        } else {
            return ['estado' => 'sucesso', 'lista' => $listaBoloes];
        }
        return ['estado' => 'erro'];
    }
}
