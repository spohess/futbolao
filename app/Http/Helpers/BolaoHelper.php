<?php

namespace App\Http\Helpers;

use App\Models\Bolao;
use App\Models\UsuarioBolao;
use Auth;
use DB;
use Exception;
use Illuminate\Support\Collection;

class BolaoHelper
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

    public function montaListaBolao()
    {
        $listaBoloes = [];
        foreach ($this->getBolao()->all() as $bolao) {
            $dados = [
                "permissao" => $bolao->permissao,
                "id" => $bolao->id,
                "nome" => $bolao->nome,
                "nomeTecnico" => $bolao->tecnico->nome,
                "loginTecnico" => $bolao->tecnico->login,
                "competicao" => $bolao->competicao->nome,
                "participantes" => $bolao->participantes->count(),
                "pontuacao" => $this->pontuacaoUsuario($bolao->participantes->where("id", Auth::user()->id)->first()),
            ];
            array_push($listaBoloes, $dados);
        }

        return $listaBoloes;
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
        foreach ($this->getBolao()->participantes->all() as $participante) {
            $dados = [
                "id" => $participante->id,
                "nome" => $participante->nome,
                "login" => $participante->login,
                "pontos" => $this->pontuacaoUsuario($participante),
            ];
            array_push($dadosParticipante, $dados);
        }
        // return $dadosParticipante;
        return array_values(Collection::make($dadosParticipante)->sortByDesc(function ($array) {
            return $array['pontos'];
        })->all());
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
        $usuarioBolao = UsuarioBolao::withTrashed()
            ->where("id_usuario", Auth::user()->id)
            ->where("id_bolao", $this->getBolao()->id)
            ->where("participacao", "banido")
            ->count();
        return ($usuarioBolao === 0) ? false : true;
    }

    private function pontuacaoUsuario($participante)
    {
        if (!empty($participante)) {
            return intval($participante->pivot->pontos);
        }

        return 0;
    }

    public function getRodadaAtualProcessada()
    {
        $sql = "SELECT MAX(CAST(p.rodada AS UNSIGNED)) AS 'rodada'
                  FROM partidas p
            INNER JOIN partidas_processadas pp
                    ON p.id = pp.id_partida
            INNER JOIN boloes b
                    ON p.id_competicao = b.id_competicao
                 WHERE b.id = ?";
        $rodada = DB::select($sql, [$this->bolao->id]);
        return $rodada[0]->rodada;
    }

    public function getRodadaMensalProcessada()
    {
        $sql = "SELECT IFNULL(MAX(CAST(p.rodada AS UNSIGNED)), 0) AS 'rodada'
                  FROM partidas p
            INNER JOIN partidas_processadas pp
                    ON p.id = pp.id_partida
            INNER JOIN boloes b
                    ON p.id_competicao = b.id_competicao
                 WHERE b.id = ?
                   AND p.data_partida BETWEEN DATE_SUB(CURRENT_DATE, INTERVAL DAYOFMONTH(CURRENT_DATE) - 1 DAY) AND CURRENT_DATE";
        $rodadas = DB::select($sql, [$this->bolao->id]);

        if (count($rodadas) > 0) {
            $lista = '-1';
            foreach ($rodadas as $rodada) {
                $lista .= (',' . $rodada->rodada);
            }
            return $lista;
        }

        return null;
    }
}
