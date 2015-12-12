<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class UsuarioRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nome' => 'required|max:255',
            'email' => 'required|email|max:128|unique:usuarios,email',
            'login' => 'required|alpha_dash|max:32|unique:usuarios,login',
            'senha' => 'required|min:6|max:16',
            'resenha' => 'required|min:6|max:16|same:senha',
            'aceite' => 'required',
        ];
    }
}
