<?php

namespace App\Http\Classes;

use App\Models\UsuarioBolao;
use Auth;
use Exception;

class DetalheBolao
{

    private $bolao;

    public function __construct($bolao)
    {
        if (empty($bolao)) {
            throw new Exception("É preciso de um bolão válido para listar detalhes");
        }
        $this->setBolao($bolao);
    }

    /**
     * Gets the value of bolao.
     *
     * @return mixed
     */
    public function getBolao()
    {
        return $this->bolao;
    }

    /**
     * Sets the value of bolao.
     *
     * @param mixed $bolao the bolao
     *
     * @return self
     */
    private function setBolao($bolao)
    {
        $this->bolao = $bolao;
    }

    public function getDetalhe()
    {
        $dadosBolao = [
            "id" => $this->bolao->id,
            "admin" => $this->isAdmin(),
            "nome" => $this->bolao->nome,
            "descricao" => $this->bolao->descricao,
            "permissao" => $this->bolao->permissao,
            "permissaoNome" => trans('str_sistema.permissao.' . $this->bolao->permissao),
            "nomeTecnico" => $this->bolao->tecnico->nome,
            "loginTecnico" => $this->bolao->tecnico->login,
            "competicao" => $this->bolao->competicao->nome,
            "integrante" => $this->isIntegrante(),
            "convite" => $this->conviteEnviado(),
            "banido" => $this->banidoBolao(),
            "_token" => csrf_token(),
        ];
        $dadosBolao["participantes"] = $this->listaParticipante();
        return $dadosBolao;
    }

    /**
     * @param $bolao
     */
    private function isAdmin()
    {
        return ($this->bolao->tecnico->id === Auth::user()->id) ? true : false;
    }

    /**
     * @return mixed
     */
    private function listaParticipante()
    {
        $dadosParticipante = [];
        foreach ($this->bolao->participantes->all() as $participante) {
            $dados = [
                "nome" => $participante->nome,
                "login" => $participante->login,
                "pontos" => 0,
            ];
            array_push($dadosParticipante, $dados);
        }
        return $dadosParticipante;
    }

    /**
     * @return mixed
     */
    private function isIntegrante()
    {
        $intergante = false;
        foreach ($this->bolao->participantes->all() as $participante) {
            $intergante = ($participante->id === Auth::user()->id) ? true : false;
        }
        return $intergante;
    }

    private function conviteEnviado()
    {
        $usuarioBolao = UsuarioBolao::where("id_usuario", Auth::user()->id)
            ->where("id_bolao", $this->getBolao()->id)
            ->where("participacao", "convite")
            ->count();
        return ($usuarioBolao === 0) ? false : true;
    }

    private function banidoBolao()
    {
        $usuarioBolao = UsuarioBolao::where("id_usuario", Auth::user()->id)
            ->where("id_bolao", $this->getBolao()->id)
            ->where("participacao", "banido")
            ->count();
        return ($usuarioBolao === 0) ? false : true;
    }
}
