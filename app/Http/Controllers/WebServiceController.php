<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Helpers\PartidaHelper;
use App\Models\Competicao;
use App\Models\Equipe;
use App\Models\Estadio;
use App\Models\Partida;

class WebServiceController extends Controller
{

    public function getToken()
    {
        return ["token" => csrf_token()];
    }

    public function getCompeticoes()
    {
        $listaCompeticoes = [];
        foreach (Competicao::all()->sortBy('nome') as $competicao) {
            $dados = [
                'id' => $competicao->id,
                'nome' => $competicao->nome,
                'descricao' => $competicao->descricao,
                'modalidade' => $competicao->modalidade,
                'modalidade_ft' => trans('str_sistema.modalidade.' . $competicao->modalidade),
                'data_inicio' => $competicao->data_inicio,
                'data_fim' => $competicao->data_fim,
                'data_inicio_ft' => get_data_formatada($competicao->data_inicio),
                'data_fim_ft' => get_data_formatada($competicao->data_fim),
                'slug' => $competicao->slug,
                'equipes' => $competicao->equipes,
            ];
            array_push($listaCompeticoes, $dados);
        }
        return $listaCompeticoes;
    }

    public function getEstadios()
    {
        $listaEstadios = [];
        foreach (Estadio::all()->sortBy('apelido') as $estadio) {
            $dados = [
                'id' => $estadio->id,
                'nome' => $estadio->nome,
                'apelido' => $estadio->apelido,
                'cidade' => $estadio->cidade,
                'uf' => strtoupper($estadio->uf),
                'pais' => $estadio->pais,
            ];
            array_push($listaEstadios, $dados);
        }
        return $listaEstadios;
    }

    public function getEquipes()
    {
        $listaEquipes = [];
        foreach (Equipe::all()->sortBy('apelido') as $equipe) {
            $dados = [
                'id' => $equipe->id,
                'nome' => $equipe->nome,
                'apelido' => $equipe->apelido,
                'abreviado' => $equipe->abreviado,
                'id_estadio' => $equipe->id_estadio,
                'nomeEstadio' => $equipe->estadio->apelido,
                'brasao' => $equipe->brasao,
                'brasao_ft' => (!empty($equipe->brasao)) ? $equipe->brasao : get_brasao_generico(),
            ];
            array_push($listaEquipes, $dados);
        }
        return $listaEquipes;
    }

    public function getEquipesPorCompeticao($id)
    {
        $listaEquipes = [];
        $equipes = Competicao::find($id);
        foreach ($equipes->equipes->sortBy('apelido') as $equipe) {
            $dados = [
                'id' => $equipe->id,
                'nome' => $equipe->nome,
                'apelido' => $equipe->apelido,
                'abreviado' => $equipe->abreviado,
                'id_estadio' => $equipe->id_estadio,
                'nomeEstadio' => $equipe->estadio->apelido,
            ];
            array_push($listaEquipes, $dados);
        }
        return $listaEquipes;
    }

    public function getPartidas()
    {
        $partidas = new PartidaHelper(Partida::all()->sortBy('data_partida'));
        return $partidas->montaPartidas();
    }

    public function getRodadasCompeticao($id)
    {
        return Partida::select("rodada")->where("id_competicao", $id)->groupBy("rodada")->get()->all();
    }

    public function getPartidasRodada($idCompeticao, $rodada)
    {
        $listaPartidas = [];
        foreach (Partida::where('id_competicao', $idCompeticao)->where('rodada', $rodada)->get()->all() as $partida) {
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
}
