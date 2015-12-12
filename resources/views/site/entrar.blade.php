@extends('layouts.site')

@section('titulo-pagina')
Entrar
@endsection

@section('conteudo')
<div class="container">
    <div class="row">
        <div class="col-xs-24 col-md-6 col-md-offset-9">
            <form ng-submit="entrarUsuario()" method="post" name="formEntrar" accept-charset="utf-8" data-toggle="validator" role="form">
                <input type="hidden" name="_token" id="_token" ng-model="entrar._token" ng-init="entrar._token='{{csrf_token()}}'">
                <fieldset>
                    <legend>Dados de Acesso</legend>
                    <div id="avisoEntrarErro" class="alert alert-danger alerta-oculto">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div id="avisoEntrarErroTexto"></div>
                    </div>
                    <div class="form-group">
                        <label for="login" class="control-label">Usuário</label>
                        <input type="text" name="login" id="login" ng-model="entrar.login" class="form-control" placeholder="Digite o usuário" required maxlength="32" data-error="Campo obrigatório">
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group">
                        <label for="senha" class="control-label">Senha</label>
                        <input type="password" name="senha" id="senha" ng-model="entrar.senha" class="form-control" placeholder="Digite a senha" required minlength="6" maxlength="16" data-error="Campo obrigatório">
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group">
                        <label for="manterConectado" class="control-label"><input type="checkbox" name="manterConectado" id="manterConectado" ng-model="entrar.manterConectado"> Manter conectado</label>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-success pull-right" ng-disabled="formEntrar.$invalid"><i id="iconeBtnEntrar" class="fa fa-sign-in"></i> Entrar</button>
                    </div>
                </fieldset>
            </form>
        </div>
        <div class="col-xs-24 text-center">
            <hr>
            <h3 type="button" class="btn btn-link" data-toggle="modal" data-target="#mdRecuperaDados">Recuperar dados de acesso</h3>
        </div>
    </div>
</div>
@endsection

@section('modais-sistema')
<div class="modal fade" id="mdRecuperaDados" tabindex="-1" role="dialog" aria-labelledby="mdRecuperaDadosLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header modal-primary">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="mdRecuperaDadosLabel">Reenviar dados de acesso</h4>
            </div>
            <form ng-submit="reenviaDadosAcesso()" method="post" name="formReenviadaddosAcesso" accept-charset="utf-8" data-toggle="validator" role="form">
                <input type="hidden" name="_token" ng-model="reenvia._token" ng-init="reenvia._token='{{csrf_token()}}'">
                <div class="modal-body">
                    <div class="alert alert-info text-center">Preencha o campo com o seu e-mail cadastrado para que possamos enviar os dados de acesso</div>
                    <div id="avisoReenviaErro" class="alert alert-danger alerta-oculto">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div>Não foi possível enviar dados de acesso</div>
                    </div>
                    <div id="avisoReenviaSucesso" class="alert alert-success alerta-oculto">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div>O e-mail com os dados de acesso foi enviado para o endereço cadastrado</div>
                    </div>
                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="email" name="email" id="email" ng-model="reenvia.email" class="form-control" placeholder="Informe seu e-mail cadastrado" required data-error="É preciso preencher o campo com um e-mail válido">
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Cancelar</button>
                    <button type="submit" id="btnEnvidaDados" class="btn btn-primary" ng-disabled="formReenviadaddosAcesso.$invalid"><i id="iconeBtnEnviaDados" class="fa fa-send"></i> Enviar</button>
                    <button type="button" id="btnFechaEnvidaDados" class="btn btn-primary hide" data-dismiss="modal">Ok</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection

@section('js-especifico')
<script src="{{ elixir('js/all-auth.js') }}"></script>
@endsection
