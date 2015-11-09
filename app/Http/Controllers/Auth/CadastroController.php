<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Requests\UsuarioRequest;
use App\Repositories\UsuarioRepositoryInterface;
use App\Entities\Usuario;
use Mail;

class CadastroController extends AuthController
{

    protected $repository;

    public function __construct(UsuarioRepositoryInterface $repository)
    {
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
        $usuario->setAtivoUsuario(0);
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

}