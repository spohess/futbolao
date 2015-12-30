<?php

namespace App\Http\Middleware;

use Closure;

class DateTimeMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        date_default_timezone_set(get_time_zone());
        return $next($request);
    }
}
