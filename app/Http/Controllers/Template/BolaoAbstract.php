<?php

namespace App\Http\Controllers\Template;

use App\Http\Classes\DetalheBolao;
use App\Http\Classes\MontaBolao;
use App\Http\Controllers\Controller;
use App\Models\Bolao;
use App\Models\UsuarioBolao;
use Auth;
use Exception;

abstract class BolaoAbstract extends Controller
{
    protected function processaRetorno(Bolao $bolao)
    {
        $boloes = Auth::user()->boloes;
        $detalheBolao = new DetalheBolao($bolao);
        $montaBolao = new MontaBolao($boloes);
        $listaMeus = $montaBolao->montaListaBolao();
        $montaBolao->setBolao(Bolao::get());
        $listaTodos = $montaBolao->montaListaBolao();
        $dados = [
            "estado" => "sucesso",
            "detalheBolao" => $detalheBolao->getDetalhe(),
            "listaMeus" => $listaMeus,
            "listaTodos" => $listaTodos,
        ];
        return $dados;
    }

    protected function aptoParaSolicitar($bolao)
    {
        $statusParticipacao = UsuarioBolao::where("id_usuario", Auth::user()->id)
            ->where("id_bolao", $bolao->id)
            ->first();

        if (empty($statusParticipacao)) {
            return true;
        }
        if ($statusParticipacao === 'banido') {
            throw new Exception("Usuário banido não pode enviar solicitação para um bolão");
        }
        if ($statusParticipacao === 'convite') {
            throw new Exception("Usuário já possui uma solicitação pendente");
        }
        if ($statusParticipacao === 'aceito') {
            throw new Exception("Usuário já pertence ao bolão");
        }
    }

    protected function analisaPermissaoBolao(Bolao $bolao)
    {
        if ($bolao->permissao === 'privado') {
            throw new Exception("Não é possível solicitar entrada em bolão privado");
        }
        if ($bolao->permissao === 'publico') {
            return "aceito";
        }
        if ($bolao->permissao === 'moderado') {
            return "convite";
        }
        throw new Exception("Permissão inválida");
    }
}
