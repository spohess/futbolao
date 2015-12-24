<?php

use App\Models\Equipe;
use Illuminate\Database\Seeder;

class EquipeSeeds extends Seeder
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
                'nome' => 'Esporte Clube Água Santa',
                'apelido' => 'Água Santa',
                'abreviado' => 'AST',
                'id_estadio' => 1,
            ],
            [
                'nome' => 'Grêmio Osasco Audax',
                'apelido' => 'Audax',
                'abreviado' => 'ADX',
                'id_estadio' => 2,
            ],
            [
                'nome' => 'Botafogo Futebol Clube',
                'apelido' => 'Botafogo de Ribeirão Preto',
                'abreviado' => 'BFC',
                'id_estadio' => 3,
            ],
            [
                'nome' => 'Capivariano Futebol Clube',
                'apelido' => 'Capivariano',
                'abreviado' => 'CFC',
                'id_estadio' => 4,
            ],
            [
                'nome' => 'Sport Club Corinthians Paulista',
                'apelido' => 'Corinthians',
                'abreviado' => 'COR',
                'id_estadio' => 5,
            ],
            [
                'nome' => 'Associação Ferroviária de Esportes',
                'apelido' => 'Ferroviária',
                'abreviado' => 'AFE',
                'id_estadio' => 6,
            ],
            [
                'nome' => 'Ituano Futebol Clube',
                'apelido' => 'Ituano',
                'abreviado' => 'ITU',
                'id_estadio' => 7,
            ],
            [
                'nome' => 'Clube Atlético Linense',
                'apelido' => 'Linense',
                'abreviado' => 'CAL',
                'id_estadio' => 8,
            ],
            [
                'nome' => 'Mogi Mirim Esporte Clube',
                'apelido' => 'Mogi Mirim',
                'abreviado' => 'MOG',
                'id_estadio' => 9,
            ],
            [
                'nome' => 'Grêmio Novorizontino',
                'apelido' => 'Novorizontino',
                'abreviado' => 'GNR',
                'id_estadio' => 10,
            ],
            [
                'nome' => 'Oeste Futebol Clube',
                'apelido' => 'Oeste',
                'abreviado' => 'OFC',
                'id_estadio' => 11,
            ],
            [
                'nome' => 'Sociedade Esportiva Palmeiras',
                'apelido' => 'Palmeiras',
                'abreviado' => 'Pal',
                'id_estadio' => 12,
            ],
            [
                'nome' => 'Associação Atlética Ponte Preta',
                'apelido' => 'Ponte Preta',
                'abreviado' => 'APP',
                'id_estadio' => 13,
            ],
            [
                'nome' => 'Red Bull Brasil',
                'apelido' => 'Red Bull',
                'abreviado' => 'RBB',
                'id_estadio' => 13,
            ],
            [
                'nome' => 'Rio Claro Futebol Clube',
                'apelido' => 'Rio Claro',
                'abreviado' => 'RIC',
                'id_estadio' => 14,
            ],
            [
                'nome' => 'Santos Futebol Clube',
                'apelido' => 'Santos',
                'abreviado' => 'SFC',
                'id_estadio' => 15,
            ],
            [
                'nome' => 'Esporte Clube São Bento',
                'apelido' => 'São Bento',
                'abreviado' => 'SBT',
                'id_estadio' => 16,
            ],
            [
                'nome' => 'São Bernardo Futebol Clube',
                'apelido' => 'São Bernardo',
                'abreviado' => 'SAB',
                'id_estadio' => 17,
            ],
            [
                'nome' => 'São Paulo Futebol Clube',
                'apelido' => 'São Paulo',
                'abreviado' => 'SAO',
                'id_estadio' => 18,
            ],
            [
                'nome' => 'Esporte Clube XV de Novembro',
                'apelido' => 'XV de Piracicaba',
                'abreviado' => 'XVP',
                'id_estadio' => 19,
            ],
            [
                'nome' => 'Seleção Brasileira de Futebol',
                'apelido' => 'Brasil',
                'abreviado' => 'BRA',
                'id_estadio' => 20,
            ],
            [
                'nome' => 'Seleção Nigeriana de Futebol',
                'apelido' => 'Nigéria',
                'abreviado' => 'NIG',
                'id_estadio' => 21,
            ],
            [
                'nome' => 'Seleção Argelina de Futebol',
                'apelido' => 'Argélia',
                'abreviado' => 'AGL',
                'id_estadio' => 22,
            ],
            [
                'nome' => 'Seleção Sul-Africana de Futebol',
                'apelido' => 'África do Sul',
                'abreviado' => 'ASF',
                'id_estadio' => 23,
            ],
            [
                'nome' => 'Seleção Hondurenha de Futebol',
                'apelido' => 'Honduras',
                'abreviado' => 'HND',
                'id_estadio' => 24,
            ],
            [
                'nome' => 'Seleção Mexicana de Futebol',
                'apelido' => 'México',
                'abreviado' => 'MEX',
                'id_estadio' => 25,
            ],
            [
                'nome' => 'Seleção Argentina de Futebol',
                'apelido' => 'Argentina',
                'abreviado' => 'ARG',
                'id_estadio' => 26,
            ],
            [
                'nome' => 'Seleção Fijiana de Futebol',
                'apelido' => 'Fiji',
                'abreviado' => 'FIJ',
                'id_estadio' => 27,
            ],
            [
                'nome' => 'Seleção Alemã de Futebol',
                'apelido' => 'Alemanha',
                'abreviado' => 'ALE',
                'id_estadio' => 28,
            ],
            [
                'nome' => 'Seleção Dinamarquesa de Futebol',
                'apelido' => 'Dinamarca',
                'abreviado' => 'DIN',
                'id_estadio' => 29,
            ],
            [
                'nome' => 'Seleção Portuguesa de Futebol',
                'apelido' => 'Portugal',
                'abreviado' => 'POR',
                'id_estadio' => 30,
            ],
            [
                'nome' => 'Seleção Sueca de Futebol',
                'apelido' => 'Suécia',
                'abreviado' => 'SUE',
                'id_estadio' => 31,
            ],
        ];

        foreach ($dados as $item) {
            $bolao = new Equipe();
            $bolao->toObject($item);
            $bolao->save();
        }
    }
}
