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
Route::group(['prefix' => '/cadastro'], function(){
    Route::get('/', 'Auth\CadastroController@index');
    Route::post('/validaemail', 'Auth\CadastroController@validaEmail');
    Route::post('/validalogin', 'Auth\CadastroController@validaLogin');
    Route::post('/', 'Auth\CadastroController@cadastro');
});

Route::post('/contato', 'SiteController@enviaContato');


/*
|--------------------------------------------------------------------------
| Rotas do Web Service
|--------------------------------------------------------------------------
*/
Route::group(['prefix' => '/ws'], function(){
    Route::get('/gettoken', 'WebServiceController@getToken');
});