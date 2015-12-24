<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePartidasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('partidas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('id_competicao')->unsigned();
            $table->boolean('penalti')->default(false);
            $table->integer('id_estadio')->unsigned();
            $table->dateTime('data_partida');
            $table->string('rodada')->nullable();
            $table->bigInteger('id_equipe_casa')->unsigned();
            $table->integer('placar_casa')->default(0);
            $table->integer('penalti_casa')->nullable();
            $table->bigInteger('id_equipe_visitante')->unsigned();
            $table->integer('placar_visitante')->default(0);
            $table->integer('penalti_visitante')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('id_competicao')->references('id')->on('competicoes')->onUpdate('cascade')->onDelete('restrict');
            $table->foreign('id_estadio')->references('id')->on('estadios')->onUpdate('cascade')->onDelete('restrict');
            $table->foreign('id_equipe_casa')->references('id')->on('equipes')->onUpdate('cascade')->onDelete('restrict');
            $table->foreign('id_equipe_visitante')->references('id')->on('equipes')->onUpdate('cascade')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('partidas');
    }
}
