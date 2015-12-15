<?php

namespace App\Http\Classes;

use App\Models\Bolao;
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
            "admin" => $this->bolao->isAdmin(),
            "nome" => $this->bolao->nome,
            "descricao" => $this->bolao->descricao,
            "permissao" => $this->bolao->permissao,
            "permissaoNome" => trans('str_sistema.permissao.' . $this->bolao->permissao),
            "nomeTecnico" => $this->bolao->tecnico->nome,
            "loginTecnico" => $this->bolao->tecnico->login,
            "competicao" => $this->bolao->competicao->nome,
            "integrante" => $this->isIntegrante(),
            "convite" => $this->conviteEnviado(),
            "listaConvite" => $this->listaConvite(),
            "banido" => $this->banidoBolao(),
            "_token" => csrf_token(),
        ];
        $dadosBolao["participantes"] = $this->listaParticipante();
        return $dadosBolao;
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

    private function listaConvite()
    {
        if (!$this->bolao->isAdmin()) {
            return false;
        }

        $listaConvite = [];
        foreach ($this->bolao->convites->all() as $convite) {
            $dados = [
                "idBolao" => $this->bolao->id,
                "idUsuario" => $convite->id,
                "nome" => $convite->nome,
                "login" => $convite->login,
                "serial" => $convite->serial,
            ];
            array_push($listaConvite, $dados);
        }

        return $listaConvite;
    }

    /**
     * @return mixed
     */
    private function isIntegrante()
    {
        foreach ($this->bolao->participantes->all() as $participante) {
            if ($participante->id === Auth::user()->id) {
                return true;
            }
        }
        return false;
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
