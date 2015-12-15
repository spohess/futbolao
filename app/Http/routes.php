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

Route::get('/', 'SiteController@index');
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
    Route::get('/', 'ArenaController@index');
});

Route::group(['prefix' => '/bolao', 'middleware' => 'auth'], function () {
    Route::post('/cria', 'BolaoController@cria');
    Route::get('/usuario_bolao', 'BolaoController@getUsuarioBolao');
    Route::get('/todos_bolao', 'BolaoController@getTodosBolao');
    Route::get('/detalhe/{id}', 'BolaoController@getDetalheBolao')->where('id', '[0-9]+');
    Route::post('/solicita_entrada/{id}', 'UsuarioBolaoController@solicitaEntrada')->where('id', '[0-9]+');
    Route::delete('/cancela_convite/{id}', 'UsuarioBolaoController@cancelaConvite')->where('id', '[0-9]+');
    Route::delete('/sair_bolao/{id}', 'UsuarioBolaoController@saiBolao')->where('id', '[0-9]+');
    Route::delete('/delete_bolao/{id}', 'BolaoController@delete')->where('id', '[0-9]+');
    Route::post('/resposta_convite', 'UsuarioBolaoController@respostaConvite');
    Route::post('/banir_participante', 'UsuarioBolaoController@banirParticipante');
});

Route::group(['prefix' => '/competicao', 'middleware' => 'auth'], function () {
    Route::get('/lista_select', 'CompeticaoController@getListaSelect');
});

/*
|--------------------------------------------------------------------------
| Rotas do Web Service
|--------------------------------------------------------------------------
 */
Route::group(['prefix' => '/ws'], function () {
    Route::get('/gettoken', 'WebServiceController@getToken');
});
