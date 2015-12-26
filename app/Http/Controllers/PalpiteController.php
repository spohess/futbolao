<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Helpers\PalpiteHelper;
use App\Models\Bolao;
use App\Models\Partida;
use Auth;

class PalpiteController extends Controller
{
    public function index()
    {
        return view('site.palpite');
    }

    public function getPalpitesBolao($id)
    {
        $bolao = Bolao::find($id);
        $partidas = new PalpiteHelper($bolao, Auth::user());
        $dados = [
            'qtd_rodada' => Partida::select("rodada")->where("id_competicao", $bolao->competicao->id)->groupBy("rodada")->count(),
            'palpites' => $partidas->montaPalpites(),
        ];
        return $dados;
    }
}
