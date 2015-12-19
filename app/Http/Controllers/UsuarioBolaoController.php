<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Template\BolaoAbstract;
use App\Http\Helpers\UsuarioBolaoHelper;
use App\Models\Bolao;
use App\Models\UsuarioBolao;
use Auth;
use Exception;
use Illuminate\Http\Request;

class UsuarioBolaoController extends BolaoAbstract
{
    public function solicitaEntrada($id)
    {
        $bolao = Bolao::getBolaoFromId($id);
        $this->aptoParaSolicitar($bolao);
        $usuarioBolao = new UsuarioBolao;
        $usuarioBolao->id_usuario = Auth::user()->id;
        $usuarioBolao->id_bolao = $bolao->id;
        $usuarioBolao->participacao = $this->analisaPermissaoBolao($bolao);

        try {

            if ($usuarioBolao->save()) {
                return $this->processaRetorno($bolao);
            }
        } catch (Exception $erro) {
            $usuarioBolao = UsuarioBolao::withTrashed()
                ->where("id_usuario", Auth::user()->id)
                ->where("id_bolao", $bolao->id)
                ->first();

            if (empty($usuarioBolao)) {
                throw new Exception("Não é possível processar a solicitação");
            }
            $usuarioBolao->participacao = $this->analisaPermissaoBolao($bolao);

            if ($usuarioBolao->restore()) {
                return $this->processaRetorno($bolao);
            }
        }

        return ["estado" => "erro"];
    }

    public function cancelaConvite($id)
    {
        $bolao = Bolao::getBolaoFromId($id);
        $usuarioBolao = UsuarioBolao::where("id_usuario", Auth::user()->id)
            ->where("id_bolao", $bolao->id)
            ->where("participacao", "convite")
            ->first();

        if (empty($usuarioBolao)) {
            return $this->processaRetorno($bolao);
        }

        if ($usuarioBolao->delete()) {
            return $this->processaRetorno($bolao);
        }

        return ["estado" => "erro"];
    }

    public function saiBolao($id)
    {
        $bolao = Bolao::getBolaoFromId($id);
        $usuarioBolao = UsuarioBolao::where("id_usuario", Auth::user()->id)
            ->where("id_bolao", $bolao->id)
            ->where("participacao", "aceito")
            ->first();

        if (empty($usuarioBolao)) {
            throw new Exception("Não há solicitação de convite pendênte");
        }

        $usuarioBolao->deleted_at = date('Y-m-d H:i:s');
        $usuarioBolao->participacao = 'deletado';

        if ($usuarioBolao->save()) {
            return $this->processaRetorno($bolao);
        }

        return ["estado" => "erro"];
    }

    public function respostaConvite(Request $request)
    {

        if (empty($request->all()['acao'])) {
            throw new Exception("É preciso de uma ação para responder um convite");
        }

        $usuarioBolao = UsuarioBolao::where("id_bolao", $request->all()['bolao']['idBolao'])
            ->where("id_usuario", $request->all()['bolao']['idUsuario'])
            ->where("participacao", "convite")
            ->first();

        if (empty($usuarioBolao)) {
            throw new Exception("Não existe convite pendente para o usuário/bolao");
        }

        $usuarioBolao->participacao = $request->all()['acao'];
        $usuarioBolao->deleted_at = ($request->all()['acao'] === 'deletado') ? date('Y-m-d H:i:s') : null;

        if ($usuarioBolao->save()) {
            return $this->processaRetorno(Bolao::find($request->all()['bolao']['idBolao']));
        }

        return ["estado" => "erro"];
    }

    public function banirParticipante(Request $request)
    {
        $bolao = Bolao::getBolaoFromId($request->all()['bolao']);

        if (!$bolao->isAdmin()) {
            throw new Exception("É preciso ser administrador do bolão para banir um participante");
        }

        $usuarioBolao = UsuarioBolao::where("id_bolao", $bolao->id)
            ->where("id_usuario", $request->all()['participante']['id'])
            ->first();
        $usuarioBolao->participacao = 'banido';
        $usuarioBolao->deleted_at = date('Y-m-d H:i:s');

        if ($usuarioBolao->save()) {
            return $this->processaRetorno($bolao);
        }

        return ["estado" => "erro"];
    }

    public function listaConvitesPendentes()
    {
        $usuarioBolao = new UsuarioBolaoHelper();
        return $usuarioBolao->listaConvitesPendentes();
    }
}
