<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class PalpiteController extends Controller
{
    public function index()
    {
        return view('site.palpite');
    }
}
