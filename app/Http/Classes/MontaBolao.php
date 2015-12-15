<?php

namespace App\Http\Classes;

class MontaBolao
{

    private $Bolao;

    public function __construct($bolao)
    {
        $this->setBolao($bolao);
    }

    public function montaListaBolao()
    {
        $listaBoloes = [];
        foreach ($this->getBolao() as $item) {
            $dados = [
                "permissao" => $item->permissao,
                "id" => $item->id,
                "nome" => $item->nome,
                "nomeTecnico" => $item->tecnico->nome,
                "loginTecnico" => $item->tecnico->login,
                "competicao" => $item->competicao->nome,
                "participantes" => $item->participantes->count(),
                "pontuacao" => 0,
            ];
            array_push($listaBoloes, $dados);
        }

        return $listaBoloes;
    }

    /**
     * Gets the value of Bolao.
     *
     * @return mixed
     */
    public function getBolao()
    {
        return $this->Bolao;
    }

    /**
     * Sets the value of Bolao.
     *
     * @param mixed $Bolao the bolao
     *
     * @return self
     */
    public function setBolao($Bolao)
    {
        $this->Bolao = $Bolao;
    }
}
