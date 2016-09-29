<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSessaoAppAdminsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sessao_app_admins', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->bigInteger('id');
            $table->string('usuario');
            $table->string('senha');
            $table->string('serial');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('sessao_app_admins');
    }
}
