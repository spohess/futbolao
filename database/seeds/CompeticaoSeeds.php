<?php

use App\Models\Competicao;
use Illuminate\Database\Seeder;

class CompeticaoSeeds extends Seeder
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
                "nome" => "Campeonato Paulista 2016",
                "descricao" => "Edição de 2016 do campeonato regional de São Paulo",
                "modalidade" => "eliminatoria",
                "data_inicio" => "2016-02-06 00:00:00",
                "data_fim" => "2016-05-08 00:00:00",
            ],
            [
                "nome" => "Olimpíadas Rio 2016",
                "descricao" => "Edição das Olimpíadas do Rio de 2016",
                "modalidade" => "eliminatoria",
                "data_inicio" => "2016-07-02 00:00:00",
                "data_fim" => "2016-07-30 00:00:00",
            ],
        ];

        foreach ($dados as $item) {
            $competicao = new Competicao();
            $competicao->toObject($item);
            $competicao->save();
        }
    }
}
