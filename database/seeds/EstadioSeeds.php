<?php

use App\Models\Estadio;
use Illuminate\Database\Seeder;

class EstadioSeeds extends Seeder
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
                'nome' => 'Estádio José Batista Pereira Fernandes',
                'apelido' => 'Distrital Inamar',
                'cidade' => 'Diadema',
                'uf' => 'SP',
                'pais' => 'Brasil',
            ],
            [
                'nome' => 'Estádio Municipal Prefeito José Liberatti',
                'apelido' => 'Rochdalão',
                'cidade' => 'Osasco',
                'uf' => 'SP',
                'pais' => 'Brasil',
            ],
            [
                'nome' => 'Estádio Santa Cruz',
                'apelido' => 'Santa Cruz',
                'cidade' => 'Ribeirão Preto',
                'uf' => 'SP',
                'pais' => 'Brasil',
            ],
            [
                'nome' => 'Arena Capivari',
                'apelido' => 'Arena Capivari',
                'cidade' => 'Capivari',
                'uf' => 'SP',
                'pais' => 'Brasil',
            ],
            [
                'nome' => 'Arena Corinthians',
                'apelido' => 'Arena Corinthians',
                'cidade' => 'São Paulo',
                'uf' => 'SP',
                'pais' => 'Brasil',
            ],
            [
                'nome' => 'Estádio Doutor Adhemar de Barros',
                'apelido' => 'Arena da Fonte Luminosa',
                'cidade' => 'Araraquara',
                'uf' => 'SP',
                'pais' => 'Brasil',
            ],
            [
                'nome' => 'Estádio Municipal Doutor Novelli Júnior',
                'apelido' => 'Novelli',
                'cidade' => 'Itu',
                'uf' => 'SP',
                'pais' => 'Brasil',
            ],
            [
                'nome' => 'Estádio Municipal Gilberto Siqueira Lopes',
                'apelido' => 'Gilbertão',
                'cidade' => 'Lins',
                'uf' => 'SP',
                'pais' => 'Brasil',
            ],
            [
                'nome' => 'Estádio Vail Chaves',
                'apelido' => 'Vail Chaves',
                'cidade' => 'Mogi Mirim',
                'uf' => 'SP',
                'pais' => 'Brasil',
            ],
            [
                'nome' => 'Estádio Jorge Ismael de Biasi',
                'apelido' => 'Jorjão',
                'cidade' => 'Novo Horizonte',
                'uf' => 'SP',
                'pais' => 'Brasil',
            ],
            [
                'nome' => 'Estádio Municipal dos Amaros',
                'apelido' => 'Estádio dos Amaros',
                'cidade' => 'Itápolis',
                'uf' => 'SP',
                'pais' => 'Brasil',
            ],
            [
                'nome' => 'Allianz Parque',
                'apelido' => 'Allianz Parque',
                'cidade' => 'São Paulo',
                'uf' => 'SP',
                'pais' => 'Brasil',
            ],
            [
                'nome' => 'Estádio Moisés Lucarelli',
                'apelido' => 'Moisés Lucarelli',
                'cidade' => 'Campinas',
                'uf' => 'SP',
                'pais' => 'Brasil',
            ],
            [
                'nome' => 'Estádio Municipal Doutor Augusto Schmidt Filho',
                'apelido' => 'Schmidtão',
                'cidade' => 'Rio Claro',
                'uf' => 'SP',
                'pais' => 'Brasil',
            ],
            [
                'nome' => 'Estádio Urbano Caldeira',
                'apelido' => 'Vila Belmiro',
                'cidade' => 'Santos',
                'uf' => 'SP',
                'pais' => 'Brasil',
            ],
            [
                'nome' => 'Centro de Integração Comunitário Walter Ribeiro',
                'apelido' => 'CIC',
                'cidade' => 'Sorocaba',
                'uf' => 'SP',
                'pais' => 'Brasil',
            ],
            [
                'nome' => 'Estádio Primeiro de Maio',
                'apelido' => 'Primeirão',
                'cidade' => 'São Bernado do Campo',
                'uf' => 'SP',
                'pais' => 'Brasil',
            ],
            [
                'nome' => 'Estádio Cícero Pompeu de Toledo',
                'apelido' => 'Morumbi',
                'cidade' => 'São Paulo',
                'uf' => 'SP',
                'pais' => 'Brasil',
            ],
            [
                'nome' => 'Estádio Barão de Serra Negra',
                'apelido' => 'Barão',
                'cidade' => 'Piracicaba',
                'uf' => 'SP',
                'pais' => 'Brasil',
            ],
            [
                'nome' => 'Estádio do Maracanã',
                'apelido' => 'Maracanã',
                'cidade' => 'Rio de Janeiro',
                'uf' => 'RJ',
                'pais' => 'Brasil',
            ],
            [
                'nome' => 'Abuja National Stadium',
                'apelido' => 'Abuja National',
                'cidade' => 'Abuja',
                'uf' => 'DF',
                'pais' => 'Nigeria',
            ],
            [
                'nome' => 'Estádio 5 de Julho de 1962',
                'apelido' => '5 de Julho de 1962',
                'cidade' => 'Argel',
                'uf' => 'ND',
                'pais' => 'Argélia',
            ],
            [
                'nome' => 'Estádio FNB',
                'apelido' => 'Soccer City',
                'cidade' => 'Joanesburgo',
                'uf' => 'ND',
                'pais' => 'África do Sul',
            ],
            [
                'nome' => 'Estádio Olímpico Metropolitano',
                'apelido' => 'Olímpico Metropolitano',
                'cidade' => 'San Pedro Sula',
                'uf' => 'ND',
                'pais' => 'Honduras',
            ],
            [
                'nome' => 'Estádio Azteca',
                'apelido' => 'Coloso de Santa Ursula',
                'cidade' => 'Cidade do México',
                'uf' => 'ND',
                'pais' => 'México',
            ],
            [
                'nome' => 'Estádio Monumental Antonio Vespucio Liberti',
                'apelido' => 'Monumental de Núñez',
                'cidade' => 'Buenos Aires',
                'uf' => 'ND',
                'pais' => 'Argentina',
            ],
            [
                'nome' => 'ANZ National Stadium',
                'apelido' => 'ANZ National',
                'cidade' => 'Suva',
                'uf' => 'ND',
                'pais' => 'Fiji',
            ],
            [
                'nome' => 'Estádio Olímpico de Berlim',
                'apelido' => 'Estádio Olímpico',
                'cidade' => 'Berlin',
                'uf' => 'ND',
                'pais' => 'Alemanha',
            ],
            [
                'nome' => 'Estádio Parken',
                'apelido' => 'Parken',
                'cidade' => 'Copenhaga',
                'uf' => 'ND',
                'pais' => 'Dinamarca',
            ],
            [
                'nome' => 'Centro Desportivo Nacional do Jamor',
                'apelido' => 'Estádio de Honra',
                'cidade' => 'Lisboa',
                'uf' => 'ND',
                'pais' => 'Portugal',
            ],
            [
                'nome' => 'Friends Arena',
                'apelido' => 'Friends Arena',
                'cidade' => 'Estocolmo',
                'uf' => 'ND',
                'pais' => 'Suécia',
            ],
            [
                'nome' => 'Estádio Nacional de Brasília Mané Garrincha',
                'apelido' => 'Mané Garrincha',
                'cidade' => 'Brasília',
                'uf' => 'DF',
                'pais' => 'Brasil',
            ],
            [
                'nome' => 'Estádio Nilton Santos',
                'apelido' => 'Estádio João Havelange',
                'cidade' => 'Rio de Janeiro',
                'uf' => 'RJ',
                'pais' => 'Brasil',
            ],
            [
                'nome' => 'Estádio Governador Magalhães Pinto',
                'apelido' => 'Mineirão',
                'cidade' => 'Belo Horizonte',
                'uf' => 'MG',
                'pais' => 'Brasil',
            ],
            [
                'nome' => 'Complexo Esportivo Cultural Octávio Mangabeira',
                'apelido' => 'Arena Fonte Nova',
                'cidade' => 'Salvador',
                'uf' => 'BA',
                'pais' => 'Brasil',
            ],
            [
                'nome' => 'Arena da Amazônia Vivaldo Lima',
                'apelido' => 'Arena da Amazônia',
                'cidade' => 'Manaus',
                'uf' => 'AM',
                'pais' => 'Brasil',
            ],
        ];

        foreach ($dados as $item) {
            $bolao = new Estadio();
            $bolao->toObject($item);
            $bolao->save();
        }
    }
}
