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
                        <label for="loginUsuario" class="control-label">Usuário</label>
                        <input type="text" name="loginUsuario" id="loginUsuario" ng-model="entrar.loginUsuario" class="form-control" placeholder="Digite o usuário" required maxlength="32" data-error="Campo obrigatório">
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group">
                        <label for="senhaUsuario" class="control-label">Senha</label>
                        <input type="password" name="senhaUsuario" id="senhaUsuario" ng-model="entrar.senhaUsuario" class="form-control" placeholder="Digite a senha" required minlength="6" maxlength="16" data-error="Campo obrigatório">
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
                <h4 class="modal-title" id="mdRecuperaDadosLabel">Reenviar e-mail de confirmação</h4>
            </div>
            <form ng-submit="reenviaConfirmacao()" method="post" name="formReenviaConf" accept-charset="utf-8" data-toggle="validator" role="form">
                <input type="hidden" name="_token" ng-model="reenvia._token" ng-init="reenvia._token='{{csrf_token()}}'">
                <div class="modal-body">
                    <div class="alert alert-info text-center">
                        Preencha o campo com o seu e-mail cadastrado para que possamos reenviar o link para confirmação do cadastro
                    </div>
                    <div id="avisoReenviaErro" class="alert alert-danger alerta-oculto">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div>Não foi possível reenviar o e-mail de confirmação. O e-mail informado está incorreto ou o cadastro já foi confirmado, neste caso utilize a opção de recuperar dados na página de autênticação do site.</div>
                    </div>
                    <div id="avisoReenviaErroDesconhecido" class="alert alert-danger alerta-oculto">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div>Não foi possível reenviar o e-mail de confirmação por um erro interno, por favor tente novamente e se precisar de ajuda entre em contato conosco.</div>
                    </div>
                    <div id="avisoReenviaSucesso" class="alert alert-success alerta-oculto">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div>O e-mail para confirmação do cadastro foi enviado, por favor verifique sua caixa de e-mail e não se esqueça de verificar o spam se for necessário..</div>
                    </div>
                    <div class="form-group">
                        <label for="emailReenvia">E-mail</label>
                        <input type="email" name="emailReenvia" id="emailReenvia" ng-model="reenvia.emailReenvia" class="form-control" placeholder="Informe seu e-mail cadastrado" required data-error="É preciso preencher o campo com um e-mail válido">
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Cancelar</button>
                    <button type="submit" id="btnReenviaConfirmacao" class="btn btn-primary" ng-disabled="formReenviaConf.$invalid"><i id="iconeBtnReenvia" class="fa fa-send"></i> Reenviar</button>
                    <button type="button" id="btnFechaReenviaConfirmacao" class="btn btn-primary hide" data-dismiss="modal">Ok</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection

@section('js-especifico')
<script src="{{ elixir('js/all-auth.js') }}"></script>
@endsection