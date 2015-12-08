<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\UsuarioRequest;
use App\Models\Usuario;
use DateTime;
use Illuminate\Http\Request;
use Mail;

class CadastroController extends AuthController
{

    public function index()
    {
        return view('site.cadastro');
    }

    public function validaEmail(Request $request)
    {
        if (!is_null($request->email)) {
            $existe = Usuario::where('email', $request->email)->count();
            if ($existe === 0) {
                return ["estado" => "valido"];
            }
            return ["estado" => "invalido"];
        }
    }

    public function validaLogin(Request $request)
    {
        if (!is_null($request->login)) {
            $existe = Usuario::where('email', $request->login)->count();
            if ($existe === 0) {
                return ["estado" => "valido"];
            }
            return ["estado" => "invalido"];
        }
    }

    public function cadastro(UsuarioRequest $request)
    {
        $usuario = new Usuario;
        $usuario->toObject($request->all());
        $usuario->deleted_at = new DateTime(date('Y-m-d H:i:s'));
        $usuario->setSerial();
        if ($usuario->save()) {

            $novoUsuario = [
                'nome' => $usuario->nome,
                'email' => $usuario->email,
                'serial' => $usuario->serial,
            ];
            $enviado = Mail::send('emails.novoCadastro', $novoUsuario, function ($message) use ($novoUsuario) {
                $message->from(env('MAIL_USERNAME', getEmailContato()), $name = 'Palpiteiros Anônimos');
                $message->to($novoUsuario['email'], $name = $novoUsuario['nome']);
                $message->subject("Confirmação de Cadastro");
            });

            if ($enviado) {
                return ["estado" => "sucesso"];
            }
            return ["estado" => "erro"];
        }
    }

    public function reenvia(Request $request)
    {
        if (is_null($request->emailReenvia)) {
            return abort(400, 'Bad Request');
        }

        $usuario = Usuario::withTrashed()->where('email', $request->emailReenvia)->first();

        if (empty($usuario)) {
            return abort(400, 'Bad Request');
        }

        if (is_null($usuario->deleted_at)) {
            return ["estado" => "confirmado"];
        }

        $usuario->setSerial();
        if ($usuario->save()) {
            $dadosUsuario = [
                'nome' => $usuario->nome,
                'email' => $usuario->email,
                'serial' => $usuario->serial,
            ];
            $enviado = Mail::send('emails.novoCadastro', $dadosUsuario, function ($message) use ($dadosUsuario) {
                $message->from(env('MAIL_USERNAME', getEmailContato()), $name = 'Palpiteiros Anônimos');
                $message->to($dadosUsuario['email'], $name = $dadosUsuario['nome']);
                $message->subject("Confirmação de Cadastro");
            });

            if ($enviado) {
                return ["estado" => "sucesso"];
            }
        }

        return ["estado" => "erro"];
    }

    public function confirma($serial)
    {

        $dados = [
            'titulo' => 'Cadastro inválido',
            'texto' => 'Não há cadastro válido para essa solicitação, por favor verifique o link de confirmação e tente novamente ou utilize a opção para reenviar e-mail de confirmação',
        ];

        $usuario = Usuario::withTrashed()->where('serial', $serial)->first();

        if (empty($usuario)) {
            return view('site.paginainfo', $dados);
        }

        if (is_null($usuario->deleted_at)) {
            return view('site.paginainfo', $dados);
        }

        $usuario->deleted_at = null;
        $usuario->setSerial();
        $usuario->save();
        $dados = [
            'titulo' => 'Cadastro confirmado',
            'texto' => 'Seu cadastro foi confirmado e agora você está pronto para palpitar as partidas dos melhores campeonatos do país!',
        ];
        return view('site.paginainfo', $dados);
    }

}
