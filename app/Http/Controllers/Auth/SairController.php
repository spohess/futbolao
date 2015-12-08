<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Auth;

class SairController extends Controller
{
    public function sair()
    {
        Auth::logout();
        return redirect('/');
    }
}
