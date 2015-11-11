<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class ArenaController extends Controller
{

    public function index()
    {
        return view('site.arena');
    }

}
