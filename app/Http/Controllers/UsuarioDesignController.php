<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\UsuarioDesign;
use Auth;
use Illuminate\Http\Request;

class UsuarioDesignController extends Controller
{
    public function putAvatar(Request $request)
    {
        $usuarioDesign = UsuarioDesign::where("id_usuario", Auth::user()->id)->first();
        $usuarioDesign = (!empty($usuarioDesign)) ? $usuarioDesign : new UsuarioDesign;
        $usuarioDesign->id_usuario = Auth::user()->id;
        $usuarioDesign->avatar = get_avatar_por_id($request->id);
        if ($usuarioDesign->save()) {
            return ["estado" => "sucesso"];
        }
        return ["estado" => "erro"];
    }
}
