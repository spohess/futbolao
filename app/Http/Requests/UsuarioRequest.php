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
            'nomeUsuario'       => 'required|max:255',
            'emailUsuario'      => 'required|email|max:128',
            'loginUsuario'      => 'required|max:32',
            'senhaUsuario'      => 'required|min:6|max:16',
            'resenhaUsuario'    => 'required|min:6|max:16|same:senhaUsuario',
            'aceiteUsuario'     => 'required',
        ];
    }
}
