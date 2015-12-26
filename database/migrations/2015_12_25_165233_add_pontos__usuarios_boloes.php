<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddPontosUsuariosBoloes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('usuarios_boloes', function (Blueprint $table) {
            $table->integer('pontos')->after('id_bolao')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('usuarios_boloes', function (Blueprint $table) {
            $table->dropColumn('pontos');
        });
    }
}
