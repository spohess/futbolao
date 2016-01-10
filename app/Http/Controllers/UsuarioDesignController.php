<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\UsuarioDesign;
use Auth;
use Illuminate\Http\Request;

class UsuarioDesignController extends Controller
{
    public function getAvatares()
    {
        $design = Auth::user()->design;
        $design = (!empty($design)) ? $design : new UsuarioDesign;
        $dados = [
            "bolao" => [
                "id" => "bolao",
                "class" => ($design->avatar == get_avatar_bolao()) ? "ativo" : "",
                "img" => get_avatar_bolao(),
            ],
            "homem" => [
                "id" => "masculino",
                "class" => ($design->avatar == get_avatar_homem()) ? "ativo" : "",
                "img" => get_avatar_homem(),
            ],
            "mulher" => [
                "id" => "feminino",
                "class" => ($design->avatar == get_avatar_mulher()) ? "ativo" : "",
                "img" => get_avatar_mulher(),
            ],
            "novo" => [
                "id" => "upload",
                "class" => "novo-avatar",
                "img" => "",
            ],
        ];
        return $dados;
    }

    public function putAvatar(Request $request)
    {
        $usuarioDesign = UsuarioDesign::where("id_usuario", Auth::user()->id)->first();
        $usuarioDesign = (!empty($usuarioDesign)) ? $usuarioDesign : new UsuarioDesign;
        $usuarioDesign->id_usuario = Auth::user()->id;
        $usuarioDesign->avatar = $request->img;
        if ($usuarioDesign->save()) {
            return ["estado" => "sucesso"];
        }
        return ["estado" => "erro"];
    }
}
