<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\NovaSenhaRequest;
use App\Models\Usuario;
use Auth;
use Hash;
use Illuminate\Cache\RateLimiter;
use Illuminate\Http\Request;
use Lang;
use Mail;

class EntrarController extends AuthController
{

    /**
     * Indicador do campo de autenticação.
     *
     * @var Str
     */
    protected $username = 'login';

    /**
     * Indicador do caminho da página de login.
     *
     * @var Str
     */
    protected $loginPath = '/entrar';

    /**
     * @var int
     */
    protected $maxLoginAttempts = 5;

    /**
     * @var int
     */
    protected $lockoutTime = 300;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('site.entrar');
    }

    public function getUsuario($campo, $valor)
    {
        $usuario = Usuario::where($campo, $valor)->first();
        if (!empty($usuario)) {
            return $usuario;
        }
        abort(404, "Bad Request");

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
            'login' => 'required',
            'senha' => 'required',
        ]);
        $throttles = $this->isUsingThrottlesLoginsTrait();
        if ($throttles && $this->hasTooManyLoginAttempts($request)) {
            return $this->sendLockoutResponse($request);
        }
        $usuario = Usuario::where('login', $request->login)->first();
        $manterConectado = (is_null($request->manterConectado)) ? false : true;
        if (!is_null($usuario)) {
            if (Hash::check($request->senha, $usuario->senha)) {
                Auth::login($usuario, $manterConectado);
                return ["estado" => "sucesso"];
            }
        }
        if ($throttles) {
            $this->incrementLoginAttempts($request);
        }
        $dados = [
            "estado" => "erro",
            "mensagem" => $this->getFailedLoginMessage(),
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
        return property_exists($this, 'username') ? $this->username : 'email';
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
            $request->input($this->loginUsername()) . $request->ip()
        );
        $dados = [
            "estado" => "erro",
            "mensagem" => $this->getLockoutErrorMessage($seconds),
        ];
        return $dados;
    }

    public function reenvia(Request $request)
    {
        $usuario = $this->getUsuario("email", $request->email);
        $usuario->setSerial();
        if ($usuario->save()) {
            $dadosEmail = [
                'nome' => $usuario->nome,
                'email' => $usuario->email,
                'login' => $usuario->login,
                'serial' => $usuario->serial,
            ];
            $enviado = Mail::send('emails.novaSenha', $dadosEmail, function ($message) use ($dadosEmail) {
                $message->from(env('MAIL_USERNAME', getEmailContato()), $name = 'Palpiteiros Anônimos');
                $message->to($dadosEmail['email'], $name = $dadosEmail['nome']);
                $message->subject("Recuperar dados de acesso");
            });
            if ($enviado) {
                return ["estado" => "sucesso"];
            }
        }
        return ["estado" => "erro"];
    }

    public function novaSenha($serialUsuario)
    {
        $usuario = $this->getUsuario("serial", $serialUsuario);
        return view("site.novaSenha", ["serial" => $serialUsuario]);
    }

    public function gravaNovaSenha(NovaSenhaRequest $request)
    {
        $usuario = Usuario::where("login", $request->login)->where("serial", $request->serial)->first();
        if (empty($usuario)) {
            abort(404, "Bad Request");
        }
        $usuario->setSenha($request->senha);
        $usuario->setSerial();
        if ($usuario->save()) {
            return ["estado" => "sucesso"];
        }

        return ["estado" => "erro"];

    }

}
