<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Template\BolaoAbstract;
use App\Http\Helpers\BolaoHelper;
use App\Http\Requests\BolaoRequest;
use App\Models\Bolao;
use App\Models\UsuarioBolao;
use Auth;
use Illuminate\Http\Request;

class BolaoController extends BolaoAbstract
{

    /**
     * @param BolaoRequest $request
     * @return json
     */
    public function cria(BolaoRequest $request)
    {
        $bolao = new Bolao;
        $bolao->toObject($request->all());
        if ($bolao->save()) {
            $usuarioBolao = new UsuarioBolao;
            $usuarioBolao->id_usuario = Auth::user()->id;
            $usuarioBolao->id_bolao = $bolao->id;
            $usuarioBolao->participacao = 'aceito';
            if ($usuarioBolao->save()) {
                return $this->processaRetorno($bolao);
            }
        }
        return ['estado' => 'erro'];
    }

    public function delete($id)
    {
        $bolao = Bolao::getBolaoFromId($id);

        if (!$bolao->isAdmin()) {
            throw new Exception("É preciso ser administrador para excluir um bolão");
        }

        $usuarioBolao = UsuarioBolao::where("id_bolao", $bolao->id);

        if (!$usuarioBolao->delete()) {
            abort(500, "Internal Server Error");
        }

        if (!$bolao->delete()) {
            abort(500, "Internal Server Error");
        }

        return $this->processaRetorno($bolao);
    }

    /**
     * @return mixed
     */
    public function getUsuarioBolao()
    {
        $boloes = Auth::user()->boloes;
        $montaBolao = new BolaoHelper($boloes);
        $listaBoloes = $montaBolao->montaListaBolao();
        if (empty($listaBoloes)) {
            return ['estado' => 'vazio'];
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
                "competicao" => $bolao->competicao->nome,
                "participantes" => $bolao->participantes->count(),
                "pontuacao" => '-',
            ];
            array_push($listaBoloes, $dados);
        }
        if (empty($listaBoloes)) {
            return ['estado' => 'vazio'];
        } else {
            return ['estado' => 'sucesso', 'lista' => $listaBoloes];
        }
        return ['estado' => 'erro'];
    }

    /**
     * @param $id
     * @return mixed
     */
    public function getDetalheBolao($id)
    {
        if (!empty($id)) {
            $bolao = Bolao::where('id', $id)->first();
            if (empty($bolao)) {
                return ["estado" => "vazio"];
            }
            $detalheBolao = new BolaoHelper($bolao);
            return $detalheBolao->getDetalhe();
        }
        abort(400, "Bad Request");
    }

}
