<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
 */

// Route::any('{page?}', 'SiteController@manutencao');

Route::get('/', 'SiteController@index');
Route::get('/regulamento', 'SiteController@indexRegulamento');
Route::post('/contato', 'SiteController@enviaContato');

Route::group(['prefix' => '/cadastro'], function () {
    Route::get('/', 'Auth\CadastroController@index');
    Route::post('/validaemail', 'Auth\CadastroController@validaEmail');
    Route::post('/validalogin', 'Auth\CadastroController@validaLogin');
    Route::post('/', 'Auth\CadastroController@cadastro');
    Route::post('/reenvia', 'Auth\CadastroController@reenvia');
    Route::get('/confirma/{serialUsuario}', 'Auth\CadastroController@confirma')->where('serialUsuario', '[a-zA-Z0-9]+');
});
Route::group(['prefix' => '/entrar'], function () {
    Route::get('/', 'Auth\EntrarController@index');
    Route::post('/', 'Auth\EntrarController@entrar');
    Route::post('/reenvia', 'Auth\EntrarController@reenvia');
    Route::get('/nova_senha/{serialUsuario}', 'Auth\EntrarController@novaSenha')->where('serialUsuario', '[a-zA-Z0-9]+');
    Route::post('/nova_senha', 'Auth\EntrarController@gravaNovaSenha');
});
Route::get('/sair', 'Auth\SairController@sair');

Route::group(['prefix' => '/arena', 'middleware' => 'auth'], function () {
    Route::get('/', 'ArenaController@index')->name('arena');
});

Route::group(['prefix' => '/bolao', 'middleware' => 'auth'], function () {
    Route::get('/{id}', 'BolaoController@index')->where('id', '[0-9]+');;
    Route::post('/cria', 'BolaoController@cria');
    Route::get('/usuario_bolao', 'BolaoController@getUsuarioBolao');
    Route::get('/todos_bolao', 'BolaoController@getTodosBolao');
    Route::get('/detalhe/{id}', 'BolaoController@getDetalheBolao')->where('id', '[0-9]+');
    Route::get('/classificacao_rodada/{id}', 'BolaoController@getClassificacaoRodada')->where('id', '[0-9]+');
    Route::get('/classificacao_mensal/{id}', 'BolaoController@getClassificacaoMensal')->where('id', '[0-9]+');
    Route::delete('/delete_bolao/{id}', 'BolaoController@delete')->where('id', '[0-9]+');

    Route::post('/solicita_entrada/{id}', 'UsuarioBolaoController@solicitaEntrada')->where('id', '[0-9]+');
    Route::delete('/cancela_convite/{id}', 'UsuarioBolaoController@cancelaConvite')->where('id', '[0-9]+');
    Route::delete('/sair_bolao/{id}', 'UsuarioBolaoController@saiBolao')->where('id', '[0-9]+');
    Route::post('/resposta_convite', 'UsuarioBolaoController@respostaConvite');
    Route::post('/banir_participante', 'UsuarioBolaoController@banirParticipante');
    Route::get('/convites_pendentes', 'UsuarioBolaoController@listaConvitesPendentes');
});

Route::group(['prefix' => '/palpite', 'middleware' => 'auth'], function () {
    Route::get('/', 'PalpiteController@index');
    Route::get('/ponto', 'PalpiteController@indexPonto');
    Route::get('/para_palpitar/{id}', 'PalpiteController@getPartidasParaPalpite')->where('id', '[0-9]+');
    Route::get('/para_conferir/{id}', 'PalpiteController@getPartidasParaConferir')->where('id', '[0-9]+');
    Route::post('/save_palpite', 'PalpiteController@savePalpite');
    Route::get('/palpites_usuarios/{idBolao}/{idPartida}', 'PalpiteController@getPalpitesUsuariosBolao')->where(['idBolao', 'idPartida'], '[0-9]+');
});

Route::group(['prefix' => '/partida', 'middleware' => 'auth'], function () {
    Route::get('/partidas_bolao/{id}', 'PartidaController@getPartidasBolao')->where('id', '[0-9]+');
});

Route::group(['prefix' => '/usuario', 'middleware' => 'auth'], function () {
    Route::get('/', 'UsuarioController@getDadosUsuario');
    Route::put('/', 'UsuarioController@atualizaUsuario');
    Route::post('/validaemail', 'UsuarioController@validaEmail');
    Route::post('/validalogin', 'UsuarioController@validaLogin');
    Route::get('/confirma_email/{serial}', 'UsuarioController@confirmaEmail')->where('serial', '[a-zA-Z0-9]+');

    Route::put('/avatar', 'UsuarioDesignController@putAvatar');
});

Route::group(['prefix' => '/mensagem', 'middleware' => 'auth'], function () {
    Route::post('/arquiva/{idMensagem}', 'MensagemController@arquivaMensagem')->where('idMensagem', '[0-9]+');
    Route::get('/get_all', 'MensagemController@getMensagens');
});

/*
|--------------------------------------------------------------------------
| Admin
|--------------------------------------------------------------------------
 */
Route::group(['prefix' => '/admin', 'middleware' => ['auth', 'needsRole'], 'is' => 'admin'], function () {
    Route::get('/', 'AdminController@index');

    Route::get('/competicao', 'AdminController@indexCompeticao');
    Route::post('/save_competicao', 'AdminController@saveCompeticao');
    Route::delete('/delete_competicao/{id}', 'AdminController@deleteCompeticao')->where('id', '[0-9]+');

    Route::get('/estadio', 'AdminController@indexEstadio');
    Route::post('/save_estadio', 'AdminController@saveEstadio');
    Route::delete('/delete_estadio/{id}', 'AdminController@deleteEstadio')->where('id', '[0-9]+');

    Route::get('/equipe', 'AdminController@indexEquipe');
    Route::post('/save_equipe', 'AdminController@saveEquipe');
    Route::delete('/delete_equipe/{id}', 'AdminController@deleteEquipe')->where('id', '[0-9]+');

    Route::get('/partida', 'AdminController@indexPartida');
    Route::post('/save_partida', 'AdminController@savePartida');
    Route::delete('/delete_partida/{id}', 'AdminController@deletePartida')->where('id', '[0-9]+');

    Route::get('/resultado', 'AdminController@indexResultado');
    Route::post('/save_resultado', 'AdminController@saveResultado');
    Route::delete('/delete_resultado/{id}', 'AdminController@deleteResultado')->where('id', '[0-9]+');
    Route::get('/calcula_pontuacao', 'AdminController@executaCalculoPontuacao');

    Route::get('/mensagem', 'AdminController@indexMensagem');
    Route::post('/save_mensagem', 'AdminController@saveMensagem');
    Route::put('/arquiva_mensagem/{id}', 'AdminController@arquivaMensagem')->where('id', '[0-9]+');

    Route::group(['prefix' => '/usuario'], function () {
        Route::get('/lista_usuarios', 'AdminController@getListaUsuarios');
    });
});

Route::group(['prefix' => '/adminapp', 'middleware' => 'adminApp'], function () {
    Route::post('/entrar', 'AdminAppController@entrar');
});

Route::group(['prefix' => '/getapp'], function () {
    Route::get('/partidasfinalizadas', 'AdminAppController@getPartidasFinalizadas');
});

/*
|--------------------------------------------------------------------------
| Rotas do Web Service
|--------------------------------------------------------------------------
 */
Route::group(['prefix' => '/ws'], function () {
    Route::get('/gettoken', 'WebServiceController@getToken');
    Route::get('/mensagens', 'WebServiceController@getMensagens');
    Route::get('/competicoes', 'WebServiceController@getCompeticoes');
    Route::get('/estadios', 'WebServiceController@getEstadios');
    Route::get('/equipes', 'WebServiceController@getEquipes');
    Route::get('/rank_usuarios', 'WebServiceController@getRankUsuarios');
    Route::get('/equipes_competicao/{id}', 'WebServiceController@getEquipesPorCompeticao')->where('id', '[0-9]+');
    Route::get('/partidas', 'WebServiceController@getPartidas');
    Route::get('/rodadas_competicao/{id}', 'WebServiceController@getRodadasCompeticao')->where('id', '[0-9]+');
    Route::get('/partidas_rodada/{idCompeticao}/{rodada}', 'WebServiceController@getPartidasRodada')->where('idCompeticao', '[0-9]+');
    Route::get('/partidas_finalizadas', 'WebServiceController@getPartidasFinalizadas');
});

Route::group(['prefix' => '/api', 'middleware' => 'allowOriginMiddleware'], function () {
    Route::get('/rank_usuarios', 'WebServiceController@getRankUsuarios');
});
