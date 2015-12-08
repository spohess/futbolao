<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContatoRequest;
use Mail;

class SiteController extends Controller {

	public function index() {
		return view('site.home');
	}

	public function enviaContato(ContatoRequest $request) {
		$contato = [
			'nome' => $request->nomeContato,
			'email' => $request->emailContato,
			'assunto' => $request->assuntoContato,
			'mensagem' => $request->mensagemContato,
		];
		$enviado = Mail::send('emails.novoContato', $contato, function ($message) use ($contato) {
			$message->from(env('MAIL_USERNAME', getEmailContato()), $name = 'Palpiteiros Anônimos');
			$message->to(env('MAIL_CONTATO', getEmailContato()), $name = 'Moderadores');
			$message->subject("Novo Contato pelo site: " . $contato['assunto']);
		});
		if ($enviado) {
			return ['estado' => 'enviado'];
		}
		return ['estado' => 'naoEnviado'];
	}
}
