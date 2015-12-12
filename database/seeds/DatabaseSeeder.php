<?php

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $this->call(UsuarioSeeds::class);
        $this->call(CompeticaoSeeds::class);
        $this->call(BolaoSeeds::class);

        Model::reguard();
    }
}
