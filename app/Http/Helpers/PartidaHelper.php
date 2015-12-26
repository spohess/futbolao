<?php

namespace App\Http\Helpers;

use App\Models\Partida;

class PartidaHelper
{

    private $partidas;

    public function __construct($partidas)
    {
        $this->setPartidas($partidas);
    }

    public function montaPartidas()
    {
        $listaPartidas = [];
        foreach ($this->getPartidas() as $partida) {
            $dados = [
                'id' => $partida->id,
                'id_competicao' => $partida->id_competicao,
                'penalti' => ($partida->penalti) ? true : false,
                'penalti_ft' => ($partida->penalti) ? 'Sim' : 'Não',
                'id_estadio' => $partida->id_estadio,
                'local' => $partida->local->apelido,
                'data_partida' => $partida->data_partida,
                'data_partida_ft' => get_data_formatada($partida->data_partida),
                'rodada' => $partida->rodada,
                'id_equipe_casa' => $partida->id_equipe_casa,
                'equipe_casa_apelido' => $partida->equipeCasa->apelido,
                'placar_casa' => $partida->placar_casa,
                'penalti_casa' => $partida->penalti_casa,
                'id_equipe_visitante' => $partida->id_equipe_visitante,
                'equipe_visitante_apelido' => $partida->equipeVisitante->apelido,
                'placar_visitante' => $partida->placar_visitante,
                'penalti_visitante' => $partida->penalti_visitante,
            ];
            array_push($listaPartidas, $dados);
        }
        return $listaPartidas;
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
    public function setPartidas($partidas)
    {
        $this->partidas = $partidas;
    }
}
