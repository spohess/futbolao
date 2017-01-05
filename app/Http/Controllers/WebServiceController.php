<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Helpers\PartidaHelper;
use App\Models\Competicao;
use App\Models\Equipe;
use App\Models\Estadio;
use App\Models\Mensagem;
use App\Models\Partida;
use Auth;
use Carbon\Carbon;
use DB;

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
        $partidas = new PartidaHelper(Partida::all()->sortByDesc('data_partida'));
        return $partidas->montaPartidas();
    }

    public function getRodadasCompeticao($id)
    {
        return Partida::select("rodada")->where("id_competicao", $id)->groupBy("rodada")->get()->all();
    }

    public function getPartidasRodada($idCompeticao, $rodada)
    {
        $partidaHelper = new PartidaHelper(Partida::where('id_competicao', $idCompeticao)->where('rodada', $rodada)->orderBy('data_partida')->orderBy('id')->get()->all());
        return $partidaHelper->montaPartidasParaResultado();
    }

    public function getPartidasFinalizadas()
    {
        $partidaHelper = new PartidaHelper(Partida::where('data_partida', '<=', Carbon::now()->addMinutes(135))->where('gravado', null)->orderBy('data_partida')->orderBy('id')->get()->all());
        return $partidaHelper->montaPartidasParaResultado();
    }

    public function getRankUsuarios()
    {
        $usuario = DB::select("SELECT  u.login, FORMAT(AVG(ub.pontos), 0) AS pontos FROM usuarios u JOIN usuarios_boloes ub ON u.id = ub.id_usuario WHERE u.deleted_at IS NULL GROUP BY u.login ORDER BY AVG(ub.pontos) DESC");
        return $usuario;
    }

    public function getMensagens()
    {
        $mensagem = new Mensagem;
        $mensagem->setUsuario(Auth::user());
        return $mensagem->getMensagens();
    }
}
