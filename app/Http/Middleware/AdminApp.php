<?php

namespace App\Http\Middleware;

use Closure;

class AdminApp
{

    public function handle($request, Closure $next)
    {
        if (!$request->json('chave') == env('ADM_KEY', 'indefinida')) {
            throw new Exception("Invalid Request", 401);
        }
        return $next($request);
    }
}
