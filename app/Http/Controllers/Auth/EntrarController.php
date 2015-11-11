<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Entities\Usuario;
use App\Http\Controllers\Controller;
use App\Repositories\UsuarioRepositoryInterface;
use Validator;
use Illuminate\Cache\RateLimiter;
use Auth;
use Hash;
use Lang;

class EntrarController extends AuthController
{

    protected $repository;

    public function __construct(UsuarioRepositoryInterface $repository)
    {
        parent::__construct();
        $this->repository = $repository;
    }

    /**
     * Indicador do campo de autenticação.
     *
     * @var Str
     */
    protected $username = 'loginUsuario';

    /**
     * Indicador do caminho da página de login.
     *
     * @var Str
     */
    protected $loginPath = '/entrar';

    protected $maxLoginAttempts = 5;

    protected $lockoutTime = 300;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // var_dump( Auth::user() );
        return view('site.entrar');
    }

    /**
     * Handle a login request to the application.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function entrar(Request $request)
    {
        $this->validate($request, [
            'loginUsuario' => 'required',
            'senhaUsuario' => 'required'
        ]);

        $throttles = $this->isUsingThrottlesLoginsTrait();

        if ($throttles && $this->hasTooManyLoginAttempts($request)) {
            return $this->sendLockoutResponse($request);
        }

        $usuario = $this->repository->findByLogin($request->loginUsuario);
        $manterConectado = ( is_null($request->manterConectado) ) ? false : true;

        if ( !is_null($usuario) ){
            if ( Hash::check($request->senhaUsuario, $usuario->getSenhaUsuario()) ) {
                Auth::login($usuario, $manterConectado);
                return ["estado" => "sucesso"];
            }
        }

        if ($throttles) {
            $this->incrementLoginAttempts($request);
        }

        $dados = [
            "estado" => "erro",
            "mensagem" => $this->getFailedLoginMessage()
        ];

        return $dados;
    }

    /**
     * Send the response after the user was authenticated.
     *
     * @param \Illuminate\Http\Request $request
     * @param bool $throttles
     * @return \Illuminate\Http\Response
     */
    protected function handleUserWasAuthenticated(Request $request, $throttles)
    {
        if ($throttles) {
            $this->clearLoginAttempts($request);
        }
        if (method_exists($this, 'authenticated')) {
            return $this->authenticated($request, Auth::user());
        }
        return redirect()->intended($this->redirectPath());
    }

    /**
     * Get the failed login message.
     *
     * @return string
     */
    protected function getFailedLoginMessage()
    {
        return Lang::has('auth.failed') ? Lang::get('auth.failed') : 'Usuário ou senha incorretos';
    }

    /**
     * Get the login username to be used by the controller.
     *
     * @return string
     */
    public function loginUsername()
    {
        return property_exists($this, 'username') ? $this->username : 'emailUsuario';
    }

        /**
     * Redirect the user after determining they are locked out.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    protected function sendLockoutResponse(Request $request)
    {
        $seconds = app(RateLimiter::class)->availableIn(
            $request->input($this->loginUsername()).$request->ip()
        );

        $dados = [
            "estado" => "erro",
            "mensagem" => $this->getLockoutErrorMessage($seconds)
        ];

        return $dados;
    }

}
