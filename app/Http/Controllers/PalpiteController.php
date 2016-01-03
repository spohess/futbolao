<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Helpers\PalpiteHelper;
use App\Models\Bolao;
use App\Models\Palpite;
use App\Models\Partida;
use Auth;
use DateInterval;
use DateTime;
use Illuminate\Http\Request;

class PalpiteController extends Controller
{
    public function index()
    {
        return view('site.palpite');
    }

    public function indexPonto()
    {
        return view('site.ponto');
    }

    public function getPartidasParaPalpite($id)
    {
        $bolao = Bolao::find($id);
        $partidas = $bolao->competicao->partidas->filter(function ($item) {
            $dataInicio = new DateTime();
            $dataInicio->add(new DateInterval("P14D"));
            $dataPartida = new DateTime(date($item->data_partida));
            if ($dataPartida < $dataInicio) {
                $dataPartida->sub(new DateInterval("PT3H"));
                $dataInicio = new DateTime();
                if ($dataPartida > $dataInicio) {
                    return $item;
                }
            }
        });
        $palpites = Palpite::where("id_usuario", Auth::user()->id)->where("id_bolao", $bolao->id)->get();
        $listaPartidaPalpite = new PalpiteHelper($partidas, $palpites);
        $dados = [
            'qtd_rodada' => Partida::select("rodada")->where("id_competicao", $bolao->competicao->id)->groupBy("rodada")->count(),
            'palpites' => $listaPartidaPalpite->montaPalpites(),
        ];
        return $dados;
    }

    public function getPartidasParaConferir($id)
    {
        $bolao = Bolao::find($id);
        $partidas = $bolao->competicao->partidas->filter(function ($item) {
            $dataAtual = new DateTime();
            $dataAtual->add(new DateInterval("PT3H"));
            $dataPartida = new DateTime(date($item->data_partida));
            if ($dataPartida < $dataAtual) {
                return $item;
            }
        });
        $palpites = Palpite::where("id_usuario", Auth::user()->id)->where("id_bolao", $bolao->id)->get();
        $listaPartidaPalpite = new PalpiteHelper($partidas, $palpites);
        $dados = [
            'qtd_rodada' => Partida::select("rodada")->where("id_competicao", $bolao->competicao->id)->groupBy("rodada")->count(),
            'palpites' => $listaPartidaPalpite->montaPalpites(),
            'rodata_atual' => $listaPartidaPalpite->getRodadaAtual(),
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

    public function getPalpitesUsuariosBolao($idBolao, $idPartida)
    {
        $palpites = Palpite::where("id_bolao", $idBolao)->where("id_partida", $idPartida)->orderBy('pontos', 'desc')->get();
        $listaPlapites = [];
        foreach ($palpites->all() as $palpite) {
            $dados = [
                'usuario' => $palpite->usuario->login,
                'palpite_casa' => $palpite->placar_casa,
                'palpite_penalti_casa' => $palpite->penalti_casa,
                'palpite_visitante' => $palpite->placar_visitante,
                'palpite_penalti_visitante' => $palpite->penalti_visitante,
                'pontos' => $palpite->pontos,
            ];
            array_push($listaPlapites, $dados);
        }
        return $listaPlapites;
    }
}
