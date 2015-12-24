<?php

namespace App\Exceptions;

use App\Exceptions\Handler as BaseExceptionHandler;
use Artesaos\Defender\Exceptions\ForbiddenException;
use Exception;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class WhoopsHandler extends BaseExceptionHandler
{
    /**
     * Render an exception into a response.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Exception $e
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function render($request, Exception $e)
    {

        if ($e instanceof ForbiddenException) {
            return response()->view('errors.forbidden');
        }

        if ($e instanceof NotFoundHttpException) {
            return response()->view('errors.404');
        }

        if (env('APP_DEBUG', false)) {
            $whoops = new \Whoops\Run;
            if ($request->ajax()) {
                $whoops->pushHandler(new \Whoops\Handler\JsonResponseHandler());
            } else {
                $whoops->pushHandler(new \Whoops\Handler\PrettyPageHandler());
            }
            return new Response($whoops->handleException($e), $e->getStatusCode(), $e->getHeaders());
        }
    }
}
