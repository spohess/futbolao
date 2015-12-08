<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class WebServiceController extends Controller {
	public function getToken() {
		return ["token" => csrf_token()];
	}
}
