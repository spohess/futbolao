<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Competicao;
use App\Models\Equipe;
use App\Models\EquipeCompeticao;
use App\Models\Estadio;
use App\Models\Partida;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        return view('admin.home');
    }

    public function indexEstadio()
    {
        return view('admin.estadio');
    }

    public function indexEquipe()
    {
        return view('admin.equipe');
    }

    public function indexCompeticao()
    {
        return view('admin.competicao');
    }

    public function indexPartida()
    {
        return view('admin.partida');
    }

    public function indexResultado()
    {
        return view('admin.resultado');
    }

    public function saveEstadio(Request $request)
    {
        $estadio = Estadio::firstOrNew(['id' => $request->id]);
        $estadio->toObject($request->all());
        $estadio->save();
    }

    public function deleteEstadio($id)
    {
        $estadio = Estadio::find($id);
        $estadio->delete();
    }

    public function saveEquipe(Request $request)
    {
        $equipe = Equipe::firstOrNew(['id' => $request->id]);
        $equipe->toObject($request->all());
        $equipe->save();
    }

    public function deleteEquipe($id)
    {
        $equipe = Equipe::find($id);
        $equipe->delete();
    }

    public function saveCompeticao(Request $request)
    {
        $competicao = Competicao::firstOrNew(['id' => $request->id]);
        $competicao->toObject($request->all());
        $competicao->save();

        $limpaEquipeCompeticao = EquipeCompeticao::where('id_competicao', $competicao->id);
        $limpaEquipeCompeticao->forceDelete();

        foreach ($request->equipes as $equipe) {
            if (isset($equipe['selecionada']) && $equipe['selecionada']) {
                $equipeCompeticao = new EquipeCompeticao;
                $equipeCompeticao->id_equipe = $equipe['id'];
                $equipeCompeticao->id_competicao = $competicao->id;
                $equipeCompeticao->grupo = (isset($equipe['grupo'])) ? $equipe['grupo'] : null;
                $equipeCompeticao->save();
            }
        }

        return ['estado' => 'sucesso', 'competicao' => $competicao];
    }

    public function deleteCompeticao($id)
    {
        $competicao = Competicao::find($id);
        $equipeCompeticao = EquipeCompeticao::where('id_competicao', $id);
        $competicao->delete();
        $equipeCompeticao->delete();
    }

    public function savePartida(Request $request)
    {
        $partida = Partida::firstOrNew(['id' => $request->id]);
        $partida->toObject($request->all());
        $partida->save();
    }

    public function deletePartida($id)
    {
        $partida = Partida::find($id);
        $partida->delete();
    }
}
