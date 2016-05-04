<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SessaoAppAdmin extends Model
{
    protected $table = 'sessao_app_admins';

    protected $fillable = ['id', 'usuario', 'senha', 'serial'];

}
