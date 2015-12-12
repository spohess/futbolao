<?php

namespace App\Http\Controllers;

use App\Http\Classes\DetalheBolao;
use App\Http\Controllers\Controller;
use App\Http\Requests\BolaoRequest;
use App\Models\Bolao;
use App\Models\UsuarioBolao;
use Auth;
use Exception;
use Illuminate\Http\Request;

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
        if ($bolao->save()) {
            $usuarioBolao = new UsuarioBolao;
            $usuarioBolao->id_usuario = Auth::user()->id;
            $usuarioBolao->id_bolao = $bolao->id;
            $usuarioBolao->participacao = 'aceito';
            if ($usuarioBolao->save()) {
                $dados = [
                    "permissao" => $bolao->permissao,
                    "id" => $bolao->id,
                    "nome" => $bolao->nome,
                    "nomeTecnico" => $bolao->tecnico->nome,
                    "loginTecnico" => $bolao->tecnico->login,
                    "competicao" => $bolao->competicao->nome,
                    "participantes" => $bolao->participantes->count(),
                    "pontuacao" => 0,
                ];
                return ['estado' => 'sucesso', 'bolao' => $dados];
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
                "competicao" => $bolao->competicao->nome,
                "participantes" => $bolao->participantes->count(),
                "pontuacao" => 0,
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
            $detalheBolao = new DetalheBolao($bolao);
            return $detalheBolao->getDetalhe();
        }
        abort(400, "Bad Request");
    }

    public function solicitaEntrada(Request $request)
    {
        if (!isset($request->id)) {
            throw new Exception("É preciso do bolão para poder enviar solicitação de entrada");
        }

        $bolao = Bolao::where("id", $request->id)->first();

        if (empty($bolao)) {
            throw new Exception("Não foi encontrado nenhum bolão com o ID enviado: " . $request->id);
        }

        $this->aptoParaSolicitar($bolao);

        $usuarioBolao = new UsuarioBolao;
        $usuarioBolao->id_usuario = Auth::user()->id;
        $usuarioBolao->id_bolao = $bolao->id;
        $usuarioBolao->participacao = $this->analisaPermissaoBolao($bolao);

        if ($usuarioBolao->save()) {
            return ["estado" => "sucesso", "lista" => $this->trataRetornoBolao($usuarioBolao, $request->all())];
        }

        return ["estado" => "erro"];

    }

    private function aptoParaSolicitar($bolao)
    {
        $statusParticipacao = UsuarioBolao::where("id_usuario", Auth::user()->id)
            ->where("id_bolao", $bolao->id)
            ->first();

        if (empty($statusParticipacao)) {
            return true;
        }

        if ($statusParticipacao === 'banido') {
            throw new Exception("Usuário banido não pode enviar solicitação para um bolão");
        }

        if ($statusParticipacao === 'convite') {
            throw new Exception("Usuário já possui uma solicitação pendente");
        }

        if ($statusParticipacao === 'aceito') {
            throw new Exception("Usuário já pertence ao bolão");
        }
    }

    private function analisaPermissaoBolao(Bolao $bolao)
    {
        if ($bolao->permissao === 'privado') {
            throw new Exception("Não é possível solicitar entrada em bolão privado");
        }

        if ($bolao->permissao === 'publico') {
            return "aceito";
        }

        if ($bolao->permissao === 'moderado') {
            return "convite";
        }

        throw new Exception("Permissão inválida");
    }

    private function trataRetornoBolao($usuarioBolao, $dados)
    {
        if ($usuarioBolao->participacao === 'aceito') {
            $dados["integrante"] = true;
        }

        if ($usuarioBolao->participacao === 'convite') {
            $dados["convite"] = true;
        }

        return $dados;
    }
}
