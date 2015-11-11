<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Requests\UsuarioRequest;
use App\Repositories\UsuarioRepositoryInterface;
use App\Entities\Usuario;
use DateTime;
use Mail;

class CadastroController extends AuthController
{

    protected $repository;

    public function __construct(UsuarioRepositoryInterface $repository)
    {
        parent::__construct();
        $this->repository = $repository;
    }

    public function index()
    {
        return view('site.cadastro');
    }

    public function validaEmail(Request $request)
    {
        if( !is_null($request->emailUsuario) ){
            if( $this->repository->validaEmail($request->emailUsuario) ){
                return ["estado" => "valido"];
            }
            return ["estado" => "invalido"];
        }
    }

    public function validaLogin(Request $request)
    {
        if( !is_null($request->loginUsuario) ){
            if( $this->repository->validaLogin($request->loginUsuario) ){
                return ["estado" => "valido"];
            }
            return ["estado" => "invalido"];
        }
    }

    public function cadastro(UsuarioRequest $request)
    {
        $usuario = new Usuario;
        $usuario->exchangeArray($request->all());
        $usuario->setDeletedAt(new DateTime(date('Y-m-d H:i:s')));
        if( $this->repository->save($usuario) ){

            $novoUsuario = [
                'nome' => $usuario->getNomeUsuario(),
                'email' => $usuario->getEmailUsuario(),
                'serial' => $usuario->getSerialUsuario()
            ];
            $enviado = Mail::send('emails.novoCadastro', $novoUsuario, function ($message) use ($novoUsuario) {
                $message->from(env('MAIL_USERNAME', getEmailContato()), $name = 'Palpiteiros Anônimos');
                $message->to($novoUsuario['email'], $name = $novoUsuario['nome']);
                $message->subject("Confirmação de Cadastro");
            });

            if( $enviado ){
                return ["estado" => "sucesso"];
            }
            return ["estado" => "erro"];
        }
    }

    public function reenvia(Request $request)
    {
        if( is_null($request->emailReenvia) ){
            return abort(400, 'Bad Request');
        }

        $this->repository->disableSoftDelet();
        $usuario = $this->repository->findArrayByColumn('emailUsuario',$request->emailReenvia);

        if( empty($usuario) ){
            return abort(400, 'Bad Request');
        }

        $usuario = $usuario[0];

        if( is_null($usuario->getDeletedAt()) ){
            return ["estado" => "confirmado"];
        }

        $usuario->setSerialUsuario();
        if( $this->repository->save($usuario) ){
            $dadosUsuario = [
                'nome' => $usuario->getNomeUsuario(),
                'email' => $usuario->getEmailUsuario(),
                'serial' => $usuario->getSerialUsuario()
            ];
            $enviado = Mail::send('emails.novoCadastro', $dadosUsuario, function ($message) use ($dadosUsuario) {
                $message->from(env('MAIL_USERNAME', getEmailContato()), $name = 'Palpiteiros Anônimos');
                $message->to($dadosUsuario['email'], $name = $dadosUsuario['nome']);
                $message->subject("Confirmação de Cadastro");
            });

            if( $enviado ){
                return ["estado" => "sucesso"];
            }
        }

        return ["estado" => "erro"];
    }

    public function confirma($serialUsuario)
    {

        $dados = [
            'titulo'    => 'Cadastro inválido',
            'texto'     => 'Não há cadastro válido para essa solicitação, por favor verifique o link de confirmação e tente novamente ou utilize a opção para reenviar e-mail de confirmação',
        ];

        $this->repository->disableSoftDelet();
        $usuario = $this->repository->findArrayByColumn('serialUsuario',$serialUsuario);

        if( empty($usuario) ){
            return view('site.paginainfo', $dados);
        }

        $usuario = $usuario[0];

        if( is_null($usuario->getDeletedAt()) ){
            return view('site.paginainfo', $dados);
        }

        $usuario->setDeletedAt(null);
        $usuario->setSerialUsuario();
        $this->repository->save($usuario);
        $dados = [
                'titulo'    => 'Cadastro confirmado',
                'texto'     => 'Seu cadastro foi confirmado e agora você está pronto para palpitar as partidas dos melhores campeonatos do país!',
            ];
            return view('site.paginainfo', $dados);
    }

}