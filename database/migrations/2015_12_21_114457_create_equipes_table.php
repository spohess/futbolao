<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateEquipesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('equipes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nome');
            $table->string('apelido');
            $table->string('abreviado');
            $table->string('slug');
            $table->integer('id_estadio')->unsigned();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('id_estadio')->references('id')->on('estadios')->onUpdate('cascade')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('equipes');
    }
}
