<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Helpers\PartidaHelper;
use App\Models\Bolao;
use App\Models\Partida;

class PartidaController extends Controller
{

    public function getPartidasBolao($id)
    {
        $bolao = Bolao::find($id);
        $partidas = new PartidaHelper($bolao->competicao->partidas);
        $dados = [
            'rodadas' => Partida::select("rodada")->where("id_competicao", $bolao->competicao->id)->groupBy("rodada")->get()->all(),
            'palpites' => $partidas->montaPartidas(),
        ];
        return $dados;
    }

}
