<?php

namespace App\Http\Helpers;

use App\Models\Mensagem;
use Exception;

class MensagemHelper
{

    private $mensagem;

    public function __construct($mensagem)
    {
        if (empty($mensagem)) {
            throw new Exception("Uma mensagem válida");
        }
        $this->setMensagem($mensagem);
    }

    public function getMensagem()
    {
        return $this->mensagem;
    }

    private function setMensagem($mensagem)
    {
        $this->mensagem = $mensagem;
    }

    public function montaListaMensagem()
    {
        $listaMensagens = [];
        foreach ($this->getMensagem()->withTrashed()->get() as $mensagem) {
            $dados = [
                'id' => $mensagem->id,
                'tipo' => $mensagem->tipo,
                'titulo_curto' => str_limit($mensagem->titulo, 20),
                'titulo' => $mensagem->titulo,
                'mensagem_curta' => str_limit($mensagem->mensagem, 100),
                'mensagem' => $mensagem->mensagem,
                'arquivada' => is_null($mensagem->deleted_at) ? false : true,
                'arquivada_class' => is_null($mensagem->deleted_at) ? 'default' : 'danger',
            ];
            array_push($listaMensagens, $dados);
        }

        return $listaMensagens;
    }
}
