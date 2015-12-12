<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class NovaSenhaRequest extends Request
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
            'serial' => 'required|min:128|max:128',
            'login' => 'required|alpha_dash|max:32',
            'senha' => 'required|min:6|max:16',
            'resenha' => 'required|min:6|max:16|same:senha',
        ];
    }
}
