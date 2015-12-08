<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class ContatoRequest extends Request {
	/**
	 * Determine if the user is authorized to make this request.
	 *
	 * @return bool
	 */
	public function authorize() {
		return true;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules() {
		return [
			'nomeContato' => 'required|min:3',
			'emailContato' => 'required|email',
			'assuntoContato' => 'required',
			'mensagemContato' => 'required|min:5',
		];
	}
}
