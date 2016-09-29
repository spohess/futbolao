<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePalpitesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('palpites', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->bigIncrements('id');
            $table->bigInteger('id_bolao')->unsigned();
            $table->bigInteger('id_partida')->unsigned();
            $table->bigInteger('id_usuario')->unsigned();
            $table->integer('placar_casa')->default(0);
            $table->integer('penalti_casa')->nullable();
            $table->integer('placar_visitante')->default(0);
            $table->integer('penalti_visitante')->nullable();
            $table->integer('pontos')->default(0);
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('id_bolao')->references('id')->on('boloes')->onUpdate('cascade')->onDelete('restrict');
            $table->foreign('id_partida')->references('id')->on('partidas')->onUpdate('cascade')->onDelete('restrict');
            $table->foreign('id_usuario')->references('id')->on('usuarios')->onUpdate('cascade')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('palpites');
    }
}
