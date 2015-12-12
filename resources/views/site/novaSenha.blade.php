@extends('layouts.site')

@section('titulo-pagina')
Dados de Acesso
@endsection

@section('conteudo')
<div class="container">
    <div class="row">
        <div class="col-xs-24 col-md-6 col-md-offset-9">
            <form ng-submit="gravaNovaSenha()" method="post" name="formNovaSenha" accept-charset="utf-8" data-toggle="validator" role="form">
                <input type="hidden" name="_token" id="_token" ng-model="novaSenha._token" ng-init="novaSenha._token='{{csrf_token()}}'">
                <input type="hidden" name="serial" id="serial" ng-model="novaSenha.serial" ng-init="novaSenha.serial='{{$serial}}'">
                <fieldset>
                    <legend>Nova Senha</legend>
                    <div id="avisoGravaSenhaErro" class="alert alert-danger alerta-oculto">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div>Não foi possível alterar a senha</div>
                    </div>
                    <div id="avisoGravaSenhaSucesso" class="alert alert-success alerta-oculto">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div>Alterar senha</div>
                    </div>
                    <div class="form-group">
                        <label for="login" class="control-label">Usuário</label>
                        <input type="text" name="login" id="login" ng-model="novaSenha.login" class="form-control" placeholder="Informe seu usuário" required maxlength="32" data-error="Campo obrigatório">
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group">
                        <label for="senha" class="control-label">Senha</label>
                        <input type="password" name="senha" id="senha" ng-model="novaSenha.senha" class="form-control" placeholder="Digite a senha" required minlength="6" maxlength="16" data-error="Campo obrigatório">
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group">
                        <label for="resenha" class="control-label">Confirma senha</label>
                        <input type="password" name="resenha" id="resenha" ng-model="novaSenha.resenha" class="form-control" placeholder="Confirme a senha" required minlength="6" maxlength="16" data-error="Campo obrigatório" data-match="#senha" data-match-error="As senhas informadas não são iguais">
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-success pull-right" ng-disabled="formNovaSenha.$invalid"><i id="iconeBtnGravar" class="fa fa-sign-in"></i> Gravar</button>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
</div>
@endsection

@section('js-especifico')
<script src="{{ elixir('js/all-auth.js') }}"></script>
@endsection
