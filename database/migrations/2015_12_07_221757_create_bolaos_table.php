<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateBolaosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('boloes', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->bigIncrements('id');
            $table->string('nome');
            $table->string('descricao');
            $table->enum('permissao', ['publico', 'moderado', 'privado']);
            $table->bigInteger('id_tecnico')->unsigned();
            $table->bigInteger('id_competicao')->unsigned();
            $table->string('slug');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('id_tecnico')->references('id')->on('usuarios')->onUpdate('cascade')->onDelete('restrict');
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
        Schema::drop('boloes');
    }
}
