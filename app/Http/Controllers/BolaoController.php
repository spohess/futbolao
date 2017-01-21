<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Template\BolaoAbstract;
use App\Http\Helpers\BolaoHelper;
use App\Http\Requests\BolaoRequest;
use App\Models\Bolao;
use App\Models\Palpite;
use App\Models\UsuarioBolao;
use Auth;

class BolaoController extends BolaoAbstract
{

    public function index($id)
    {
        $usuario = Auth::user();
        $bolao = Bolao::find($id);

        if (is_null($bolao)) {
            return redirect()->route('arena');
        }

        $palpite = new Palpite;
        $palpitesPendentes = $palpite->getPalpitesPendentes($usuario->id);
        $palpitesPendentesQtd = count($palpitesPendentes);

        $participantes = collect([]);

        foreach ($bolao->participantes as $participante) {
            $dados = [
                'nome' => $participante->nome,
                'login' => $participante->login,
                'pontos' => $participante->pivot->pontos,
            ];
            $participantes->push($dados);
        }

        $dados = [
            'id' => $bolao->id,
            'bolao' => $bolao,
            'bolaoNome' => $bolao->nome,
            'bolaoDesc' => $bolao->descricao,
            'competicao' => $bolao->competicao->nome,
            'permissao' => $bolao->permissao,
            'qtdParticipantes' => count($bolao->participantes->all()),
            'participantes' => $participantes->sortByDesc('pontos'),
            'avatar' => get_avatar_bolao(),
        ];
        return view('site.bolao', $dados);
    }

    public function cria(BolaoRequest $request)
    {
        $bolao = new Bolao;
        $bolao->toObject($request->all());
        if ($bolao->save()) {
            $usuarioBolao = new UsuarioBolao;
            $usuarioBolao->id_usuario = Auth::user()->id;
            $usuarioBolao->id_bolao = $bolao->id;
            $usuarioBolao->participacao = 'aceito';
            if ($usuarioBolao->save()) {
                return $this->processaRetorno($bolao);
            }
        }
        return ['estado' => 'erro'];
    }

    public function delete($id)
    {
        $bolao = Bolao::getBolaoFromId($id);

        if (!$bolao->isAdmin()) {
            throw new Exception("É preciso ser administrador para excluir um bolão");
        }

        $usuarioBolao = UsuarioBolao::where("id_bolao", $bolao->id);

        if (!$usuarioBolao->delete()) {
            abort(500, "Internal Server Error");
        }

        if (!$bolao->delete()) {
            abort(500, "Internal Server Error");
        }

        return $this->processaRetorno($bolao);
    }

    /**
     * @return mixed
     */
    public function getUsuarioBolao()
    {
        $boloes = Auth::user()->boloes;
        $montaBolao = new BolaoHelper($boloes);
        $listaBoloes = $montaBolao->montaListaBolao();
        if (empty($listaBoloes)) {
            return ['estado' => 'vazio'];
        } else {
            return ['estado' => 'sucesso', 'lista' => $listaBoloes];
        }
        return ['estado' => 'erro'];
    }

    /**
     * @return mixed
     */
    public function getTodosBolao()
    {
        $listaBoloes = [];

        $boloesOficiais = Bolao::all()->filter(function ($bolao, $chave) {
            return $bolao->tecnico->id == 2;
        });

        $montaBolaoOficiais = new BolaoHelper($boloesOficiais);
        $listaBoloesOficiais = $montaBolaoOficiais->montaListaBolao();

        $boloesGeral = Bolao::all()->reject(function ($bolao, $chave) {
            return $bolao->tecnico->id == 2;
        })->shuffle();
        $montaBolao = new BolaoHelper($boloesGeral);
        $listaBoloes = $montaBolao->montaListaBolao();

        $listaUnificada = array_merge($listaBoloesOficiais, $listaBoloes);

        if (empty($listaUnificada)) {
            return ['estado' => 'vazio'];
        } else {
            return ['estado' => 'sucesso', 'lista' => $listaUnificada];
        }
        return ['estado' => 'erro'];
    }

    /**
     * @param $id
     * @return mixed
     */
    public function getDetalheBolao($id)
    {
        if (!empty($id)) {
            $bolao = Bolao::where('id', $id)->first();
            if (empty($bolao)) {
                return ["estado" => "vazio"];
            }
            $detalheBolao = new BolaoHelper($bolao);
            return $detalheBolao->getDetalhe();
        }
        abort(400, "Bad Request");
    }

    public function getClassificacaoRodada($id)
    {
        $bolao = Bolao::find($id);

        $bolaoHelper = new BolaoHelper($bolao);
        $rodada = $bolaoHelper->getRodadaAtualProcessada();

        return $bolao->getClassificacaoPorRodada($rodada);
    }

    public function getClassificacaoMensal($id)
    {
        $bolao = Bolao::find($id);

        $bolaoHelper = new BolaoHelper($bolao);
        $rodada = $bolaoHelper->getRodadaMensalProcessada();

        if ($rodada == '-1,0') {
            $rodada = $bolaoHelper->getRodadaAtualProcessada();
        }

        return $bolao->getClassificacaoPorRodada($rodada);
    }

}
