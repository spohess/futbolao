<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContatoRequest;
use Mail;

class SiteController extends Controller
{

    public function manutencao()
    {
        return view('errors.manutencao');
    }

    public function index()
    {
        return view('site.home');
    }

    public function indexRegulamento()
    {
        return view('site.regulamento');
    }

    public function enviaContato(ContatoRequest $request)
    {
        $contato = [
            'nome' => $request->nomeContato,
            'email' => $request->emailContato,
            'assunto' => $request->assuntoContato,
            'mensagem' => $request->mensagemContato,
        ];
        $enviado = Mail::send('emails.novoContato', $contato, function ($message) use ($contato) {
            $message->from(env('MAIL_USERNAME', get_email_contato()), $name = 'FutBolão');
            $message->to(env('MAIL_CONTATO', get_email_contato()), $name = 'Moderadores');
            $message->subject("Novo Contato pelo site: " . $contato['assunto']);
        });
        if ($enviado) {
            return ['estado' => 'enviado'];
        }
        return ['estado' => 'naoEnviado'];
    }
}
