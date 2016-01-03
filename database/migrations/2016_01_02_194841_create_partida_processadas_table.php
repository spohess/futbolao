<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePartidaProcessadasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('partidas_processadas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('id_partida')->unsigned();
            $table->integer('quantidade_palpites');
            $table->timestamps();

            $table->foreign('id_partida')->references('id')->on('partidas')->onUpdate('cascade')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('partidas_processadas');
    }
}
