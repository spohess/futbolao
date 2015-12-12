<?php

use App\Models\Usuario;
use Illuminate\Database\Seeder;

class UsuarioSeeds extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $dados = [
            [
                'nome' => 'Administrador',
                'email' => 'administrador@palpiteirosanonimos.com.br',
                'login' => 'admin',
                'senha' => bcrypt(str_random(128)),
            ],
            [
                'nome' => 'Palpiteiro Anônimo',
                'email' => 'contato@palpiteirosanonimos.com.br',
                'login' => 'palpiteiros',
                'senha' => bcrypt(str_random(128)),
            ],
            [
                'nome' => 'Louco por Palpiteiro',
                'email' => 'sergio@spohsoft.com.br',
                'login' => 'opalpiteiro',
                'senha' => bcrypt(str_random(128)),
            ],
            [
                'nome' => 'Sergio Hess',
                'email' => 'hess.sergio@gmail.com',
                'login' => 'spohess',
                'senha' => bcrypt(str_random(128)),
            ],
        ];

        foreach ($dados as $item) {
            $usuario = new Usuario();
            $usuario->toObject($item);
            $usuario->save();
        }
    }
}
