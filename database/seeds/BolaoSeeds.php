<?php

use App\Models\Bolao;
use Illuminate\Database\Seeder;

class BolaoSeeds extends Seeder
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
                'nome' => 'Paulistão da Geral',
                'descricao' => 'Bolão do Paulistão 2016 para todos os menbros do palpiteiros anônimos',
                'permissao' => 'publico',
                'id_tecnico' => 2,
                'id_competicao' => 1,
            ],
            [
                'nome' => 'Bolão Agora Vai',
                'descricao' => 'Bolão do torneio olímpico de futebol de 2016 no Rio. Para todos so mebros do Palpiteiros Anônimos',
                'permissao' => 'publico',
                'id_tecnico' => 2,
                'id_competicao' => 2,
            ],
        ];

        foreach ($dados as $item) {
            $bolao = new Bolao();
            $bolao->toObject($item);
            $bolao->save();
        }
    }
}
