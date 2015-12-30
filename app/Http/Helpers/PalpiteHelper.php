<?php

namespace App\Http\Helpers;

use App\Models\Palpite;

class PalpiteHelper
{

    private $partidas;

    private $palpites;

    public function __construct($partidas, $palpites)
    {
        $this->setPartidas($partidas);
        $this->setPalpites($palpites);
    }

    public function montaPalpites()
    {
        $listaPartidas = [];
        foreach ($this->getPartidas() as $partida) {
            $palpite = $this->getPalpites()->filter(function ($item) use ($partida) {
                return $item->id_partida == $partida->id;
            });
            $palpite = (!$palpite->isEmpty()) ? $palpite->first() : new Palpite;
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
                'equipe_casa_brasao' => (!empty($partida->equipeCasa->brasao)) ? $partida->equipeCasa->brasao : get_brasao_generico(),
                'equipe_casa_apelido' => $partida->equipeCasa->apelido,
                'equipe_casa_nome' => $partida->equipeCasa->nome,
                'equipe_casa_abreviado' => $partida->equipeCasa->abreviado,
                'palpite_casa' => $palpite->placar_casa,
                'palpite_penalti_casa' => $palpite->penalti_casa,
                'resultado_casa' => $partida->placar_casa,
                'resultado_penalti_casa' => $partida->penalti_casa,
                'id_equipe_visitante' => $partida->id_equipe_visitante,
                'equipe_visitante_brasao' => (!empty($partida->equipeVisitante->brasao)) ? $partida->equipeVisitante->brasao : get_brasao_generico(),
                'equipe_visitante_apelido' => $partida->equipeVisitante->apelido,
                'equipe_visitante_nome' => $partida->equipeVisitante->nome,
                'equipe_visitante_abreviado' => $partida->equipeVisitante->abreviado,
                'palpite_visitante' => $palpite->placar_visitante,
                'palpite_penalti_visitante' => $palpite->penalti_visitante,
                'resultado_visitante' => $partida->placar_visitante,
                'resultado_penalti_visitante' => $partida->penalti_visitante,
                'pontos' => (!empty($palpite->pontos)) ? $palpite->pontos : 0,
            ];
            array_push($listaPartidas, $dados);
        }
        return $listaPartidas;
    }

    public function getRodadaAtual()
    {
        return null;
    }

    /**
     * Gets the value of partidas.
     *
     * @return mixed
     */
    public function getPartidas()
    {
        return $this->partidas;
    }

    /**
     * Sets the value of partidas.
     *
     * @param mixed $partidas the partidas
     *
     * @return self
     */
    private function setPartidas($partidas)
    {
        $this->partidas = $partidas;
    }

    /**
     * Gets the value of palpites.
     *
     * @return mixed
     */
    public function getPalpites()
    {
        return $this->palpites;
    }

    /**
     * Sets the value of palpites.
     *
     * @param mixed $palpites the palpites
     *
     * @return self
     */
    private function setPalpites($palpites)
    {
        $this->palpites = $palpites;
    }
}
