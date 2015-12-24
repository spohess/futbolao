<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateEquipeCompeticaosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('equipes_competicoes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('id_equipe')->unsigned();
            $table->bigInteger('id_competicao')->unsigned();
            $table->string('grupo')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->unique(['id_equipe', 'id_competicao']);
            $table->foreign('id_equipe')->references('id')->on('equipes')->onUpdate('cascade')->onDelete('restrict');
            $table->foreign('id_competicao')->references('id')->on('competicoes')->onUpdate('cascade')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('equipes_competicoes');
    }
}
