<?php

namespace App\Http\Helpers;

use App\Models\Bolao;
use App\Models\Usuario;
use App\Models\UsuarioBolao;
use Auth;

class UsuarioBolaoHelper
{

    private $bolao;

    private $usuario;

    public function __construct(Usuario $usuario = null, Bolao $bolao = null)
    {
        $this->setUsuario($usuario);
        $this->setBolao($bolao);
    }

    /**
     * Gets the value of bolao.
     *
     * @return mixed
     */
    public function getBolao()
    {
        return $this->bolao;
    }

    /**
     * Sets the value of bolao.
     *
     * @param mixed $bolao the bolao
     *
     * @return self
     */
    private function setBolao($bolao)
    {
        $this->bolao = (empty($bolao)) ? $this->getUsuario()->gerenciados : $bolao;
    }

    /**
     * Gets the value of usuario.
     *
     * @return mixed
     */
    public function getUsuario()
    {
        return $this->usuario;
    }

    /**
     * Sets the value of usuario.
     *
     * @param mixed $usuario the usuario
     *
     * @return self
     */
    private function setUsuario($usuario)
    {
        $this->usuario = (empty($usuario)) ? Auth::user() : $usuario;
    }

    public function listaConvitesPendentes()
    {
        $listaBolao = [];
        foreach ($this->getBolao()->all() as $bolao) {
            if (!$bolao->isAdmin()) {
                continue;
            }
            $listaConvites = [];
            $convites = UsuarioBolao::where('id_bolao', $bolao->id)
                ->where('participacao', 'convite')
                ->get();
            foreach ($convites->all() as $convite) {
                $usuarioConvite = Usuario::where("id", $convite->id_usuario)->first();
                $bolaoConvite = Bolao::where("id", $convite->id_bolao)->first();
                $dados = [
                    'idBolao' => $bolao->id,
                    'idConvite' => $convite->id,
                    'idUsuario' => $usuarioConvite->id,
                    'nomeUsuario' => $usuarioConvite->nome,
                    'loginUsuario' => $usuarioConvite->login,
                ];
                array_push($listaConvites, $dados);
            }
            if (count($listaConvites) > 0) {
                $dadosBolao = [
                    'idBolao' => $bolao->id,
                    'nomeBolao' => $bolao->nome,
                    'descBolao' => $bolao->descricao,
                    'listaConvites' => $listaConvites,
                ];
                array_push($listaBolao, $dadosBolao);
            }
        }
        return $listaBolao;
    }
}
