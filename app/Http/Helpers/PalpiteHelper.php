<?php

namespace App\Http\Helpers;

use App\Models\Bolao;
use App\Models\Palpite;
use App\Models\Usuario;

class PalpiteHelper
{

    private $bolao;

    private $usuario;

    public function __construct(Bolao $bolao, Usuario $usuario)
    {
        $this->setBolao($bolao);
        $this->setUsuario($usuario);
    }

    public function montaPalpites()
    {
        $palpites = Palpite::where("id_usuario", $this->getUsuario()->id)->where("id_bolao", $this->getBolao()->id)->get();
        $listaPartidas = [];
        foreach ($this->getBolao()->competicao->partidas as $partida) {
            $palpite = $palpites->filter(function ($item) use ($partida) {
                return $item->id_partida == $partida->id;
            });
            $palpite = ($palpite->isEmpty()) ? new Palpite : $palpite->first();
            $dados = [
                'id_palpite' => $palpite->id,
                'id_partida' => $partida->id,
                'id_competicao' => $partida->id_competicao,
                'penalti' => ($partida->penalti) ? true : false,
                'penalti_ft' => ($partida->penalti) ? 'Sim' : 'Não',
                'id_estadio' => $partida->id_estadio,
                'local' => $partida->local->apelido,
                'data_partida' => $partida->data_partida,
                'data_partida_ft' => get_data_formatada($partida->data_partida),
                'rodada' => $partida->rodada,
                'id_equipe_casa' => $partida->id_equipe_casa,
                'equipe_casa_brasao' => $partida->equipeCasa->brasao,
                'equipe_casa_apelido' => $partida->equipeCasa->apelido,
                'equipe_casa_nome' => $partida->equipeCasa->nome,
                'equipe_casa_abreviado' => $partida->equipeCasa->abreviado,
                'resultado_casa' => $partida->placar_casa,
                'palpite_casa' => $palpite->placar_casa,
                'resultado_penalti_casa' => $partida->penalti_casa,
                'palpite_penalti_casa' => $palpite->penalti_casa,
                'id_equipe_visitante' => $partida->id_equipe_visitante,
                'equipe_visitante_brasao' => $partida->equipeVisitante->brasao,
                'equipe_visitante_apelido' => $partida->equipeVisitante->apelido,
                'equipe_visitante_nome' => $partida->equipeVisitante->nome,
                'equipe_visitante_abreviado' => $partida->equipeVisitante->abreviado,
                'resultado_visitante' => $partida->placar_visitante,
                'palpite_visitante' => $palpite->placar_visitante,
                'resultado_penalti_visitante' => $partida->penalti_visitante,
                'palpite_penalti_visitante' => $palpite->penalti_visitante,
            ];
            array_push($listaPartidas, $dados);
        }
        return $listaPartidas;
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

    /**
     * Gets the value of usuario.
     *
     * @return mixed
     */
    public function getUsuario()
    {
        return $this->usuario;
    }

    /**
     * Sets the value of usuario.
     *
     * @param mixed $usuario the usuario
     *
     * @return self
     */
    private function setUsuario($usuario)
    {
        $this->usuario = $usuario;
    }
}
