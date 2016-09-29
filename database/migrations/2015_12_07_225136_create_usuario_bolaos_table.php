<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUsuarioBolaosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuarios_boloes', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->bigIncrements('id');
            $table->bigInteger('id_usuario')->unsigned();
            $table->bigInteger('id_bolao')->unsigned();
            $table->enum('participacao', ['aceito', 'convite', 'deletado', 'banido']);
            $table->timestamps();
            $table->softDeletes();
            // Index
            $table->unique(['id_usuario', 'id_bolao']);
            $table->foreign('id_usuario')->references('id')->on('usuarios')->onUpdate('cascade')->onDelete('restrict');
            $table->foreign('id_bolao')->references('id')->on('boloes')->onUpdate('cascade')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('usuarios_boloes');
    }
}
