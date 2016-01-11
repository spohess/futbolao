<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Usuario;
use App\Models\UsuarioNovoEmail;
use Auth;
use Hash;
use Illuminate\Http\Request;
use Mail;

class UsuarioController extends Controller
{
    public function getDadosUsuario()
    {
        $design = Auth::user()->design;
        $design = (!empty($design)) ? $design : new UsuarioDesign;
        $avatares = [
            "bolao" => [
                "id" => "bolao",
                "class" => ($design->avatar == get_avatar_bolao()) ? "ativo" : "",
                "img" => get_avatar_bolao(),
            ],
            "homem" => [
                "id" => "homem",
                "class" => ($design->avatar == get_avatar_homem()) ? "ativo" : "",
                "img" => get_avatar_homem(),
            ],
            "mulher" => [
                "id" => "mulher",
                "class" => ($design->avatar == get_avatar_mulher()) ? "ativo" : "",
                "img" => get_avatar_mulher(),
            ],
            // "novo" => [
            //     "id" => "upload",
            //     "class" => "novo-avatar",
            //     "img" => "",
            // ],
        ];
        $dados = [
            "usuario" => Auth::user(),
            "avatares" => $avatares,
        ];
        return view('site.dadosUsuario', $dados);
    }

    public function validaEmail(Request $request)
    {
        if ($request->email === Auth::user()->email) {
            return ["estado" => "valido"];
        }

        $this->validate($request, [
            'email' => 'required|email|max:128|unique:usuarios,email',
        ]);

        return ["estado" => "valido"];
    }

    public function validaLogin(Request $request)
    {
        if ($request->login === Auth::user()->login) {
            return ["estado" => "valido"];
        }

        $this->validate($request, [
            'login' => 'required|alpha_dash|max:32|unique:usuarios,login',
        ]);

        return ["estado" => "valido"];
    }

    public function atualizaUsuario(Request $request)
    {
        if (!Hash::check($request->senhaAtual, Auth::user()->senha)) {
            return ["estado" => "senhaAtualInvalida"];
        }

        $this->validate($request, [
            'nome' => 'required|max:255',
        ]);
        Auth::user()->nome = $request->nome;

        if (!empty($request->senha)) {
            $this->validate($request, [
                'senha' => 'required|min:6|max:16',
                'resenha' => 'required|min:6|max:16|same:senha',
            ]);
            Auth::user()->senha = bcrypt($request->senha);
        }

        if ($request->login != Auth::user()->login) {
            $this->validate($request, [
                'login' => 'required|alpha_dash|max:32|unique:usuarios,login',
            ]);
            Auth::user()->login = $request->login;
        }

        if ($request->email != Auth::user()->email) {
            $this->validate($request, [
                'email' => 'required|email|max:128|unique:usuarios,email',
            ]);
            $usuarioNovoEmail = new UsuarioNovoEmail;
            $usuarioNovoEmail->id_usuario = Auth::user()->id;
            $usuarioNovoEmail->novo_email = $request->email;
            $usuarioNovoEmail->setSerial();
            $usuarioNovoEmail->save();

            $dadosUsuario = [
                'nome' => Auth::user()->nome,
                'email' => $usuarioNovoEmail->novo_email,
                'serial' => $usuarioNovoEmail->serial,
            ];
            $enviado = Mail::send('emails.novoEmail', $dadosUsuario, function ($message) use ($dadosUsuario) {
                $message->from(env('MAIL_USERNAME', get_email_contato()), $name = 'FutBolão');
                $message->to($dadosUsuario['email'], $name = $dadosUsuario['nome']);
                $message->subject("Confirmação de E-mail");
            });
        }

        if (Auth::user()->save()) {
            return ["estado" => "sucesso"];
        }
    }

    public function confirmaEmail($serial)
    {
        $usuarioNovoEmail = UsuarioNovoEmail::where('serial', $serial)->first();

        if (empty($usuarioNovoEmail)) {
            abort(404, "Page Not Found");
        }

        $usuario = Usuario::find($usuarioNovoEmail->id_usuario);

        $usuario->email = $usuarioNovoEmail->novo_email;
        $usuario->save();
        $usuarioNovoEmail->delete();
        $dados = [
            'titulo' => 'E-mail confirmado',
            'texto' => 'Sua alteração de e-mail foi confirmada com sucesso!',
        ];
        return view('site.paginainfo', $dados);
    }
}
