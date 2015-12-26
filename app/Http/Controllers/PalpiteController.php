<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Helpers\PalpiteHelper;
use App\Models\Bolao;
use App\Models\Palpite;
use App\Models\Partida;
use Auth;
use Illuminate\Http\Request;

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

    public function savePalpite(Request $request)
    {
        if (!isset($request->palpite_casa) || !isset($request->palpite_visitante)) {
            throw new Exception("É preciso preencher os placares");
        }

        $palpite = Palpite::firstOrNew(["id" => $request->id_palpite]);
        $palpite->id_bolao = $request->id_bolao;
        $palpite->id_partida = $request->id_partida;
        $palpite->id_usuario = Auth::user()->id;
        $palpite->placar_casa = $request->palpite_casa;
        $palpite->penalti_casa = $request->palpite_penalti_casa;
        $palpite->placar_visitante = $request->palpite_visitante;
        $palpite->penalti_visitante = $request->palpite_penalti_visitante;

        if ($palpite->save()) {
            $dados = [
                "estado" => "sucesso",
                "id_palpite" => $palpite->id,
            ];
            return $dados;
        }

        return ["estado" => "erro"];
    }
}
