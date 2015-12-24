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
        $this->call(EstadioSeeds::class);
        $this->call(EquipeSeeds::class);

        Model::reguard();
    }
}
