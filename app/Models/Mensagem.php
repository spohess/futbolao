<?php

namespace App\Models;

use DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Mensagem extends Model
{

    use SoftDeletes;

    protected $table = 'mensagens';

    protected $fillable = ['titulo', 'mensagem', 'tipo'];

    private $usuario;

    public function setUsuario($usuario)
    {
        $this->usuario = $usuario;
    }

    public function getMensagens()
    {
        $usuario = $this->usuario;
        $mensagens = DB::select('SELECT m.*, um.id_usuario FROM mensagens m LEFT JOIN (SELECT * FROM usuarios_mensagens ui WHERE ui.id_usuario = ?) um ON m.id = um.id_mensagem WHERE um.id_usuario IS NULL', [$this->usuario->id]);

        $litaMensagens = [];

        foreach ($mensagens as $mensagem) {
            $dados = [
                'id' => $mensagem->id,
                'titulo' => $mensagem->titulo,
                'mensagem' => $mensagem->mensagem,
                'alert' => $mensagem->tipo,
                'lido' => is_null($mensagem->id_usuario) ? false : true,
            ];

            array_push($litaMensagens, $dados);
        }

        return $litaMensagens;
    }

    public function toObject(array $dados)
    {
        $this->tipo = $dados['tipo'];
        $this->titulo = $dados['titulo'];
        $this->mensagem = $dados['mensagem'];
    }

}
