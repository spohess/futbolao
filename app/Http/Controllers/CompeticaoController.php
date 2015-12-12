<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Competicao;

class CompeticaoController extends Controller
{
    public function getListaSelect()
    {
        $listaCompeticao = [];
        $dados = [
            'id' => '',
            'valor' => 'Escolha uma competição',
        ];
        array_push($listaCompeticao, $dados);
        $competicoes = Competicao::all();
        foreach ($competicoes as $competicao) {
            $dados = [
                'id' => $competicao['id'],
                'valor' => $competicao['nome'],
            ];
            array_push($listaCompeticao, $dados);
        }
        return $listaCompeticao;
    }
}
