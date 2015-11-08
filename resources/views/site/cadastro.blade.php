@extends('layouts.site')

@section('titulo-pagina')
Cadastro
@endsection

@section('conteudo')
<div class="container">
    <div class="row">
        <div class="col-xs-24 col-md-10 col-md-offset-7">
            <form ng-submit="cadastroUsuario()" method="post" name="formCadastro" accept-charset="utf-8" data-toggle="validator" role="form">
                <input type="hidden" name="_token" id="_token" ng-model="usuario._token" ng-init="usuario._token='{{csrf_token()}}'">
                <input type="hidden" name="emailUsuarioValido" ng-model="usuario.emailUsuarioValido" ng-init="usuario.emailUsuarioValido='invalido'">
                <input type="hidden" name="loginUsuarioValido" ng-model="usuario.loginUsuarioValido" ng-init="usuario.loginUsuarioValido='invalido'">
                <fieldset>
                    <legend>Dados de Acesso</legend>
                    <div id="avisoCadastroErro" class="alert alert-danger alerta-oculto">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div>Seu cadastro não pode ser efetuado por um erro desconhecido, por favor tento novamento ou entre em contato conosco.</div>
                    </div>
                    <div id="avisoCadastroSucesso" class="alert alert-success alerta-oculto">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div>Seu cadastro foi efetuado com sucesso, lhe enviamos uma mensagem para o email cadastrado para confirmar o seu cadastro.</div>
                    </div>
                    <div class="form-group">
                        <label for="nomeUsuario" class="control-label">Nome</label>
                        <input type="text" name="nomeUsuario" id="nomeUsuario" ng-model="usuario.nomeUsuario" class="form-control" placeholder="Informe o seu nome" required maxlength="255" data-error="É preciso preencher este campo com o seu nome">
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group">
                        <label for="emailUsuario" class="control-label">E-mail</label>
                        <input type="email" name="emailUsuario" id="emailUsuario" ng-model="usuario.emailUsuario" ng-blur="validaEmail()" class="form-control" placeholder="Informe o seu e-mail" required maxlength="128" data-error="É preciso preencher este campo com o seu e-mail, ele será utilizado para confirmar o cadastro">
                        <div class="help-block with-errors"></div>
                        <div class="aviso-block aviso-email text-danger">Este e-mail já está sendo usado, utilize a ferramenta de recuperação de dados para resgatar seus dados</div>
                    </div>
                    <div class="form-group">
                        <label for="loginUsuario" class="control-label">Usuário</label>
                        <div class="input-group">
                            <input type="text" name="loginUsuario" id="loginUsuario" ng-model="usuario.loginUsuario" class="form-control" placeholder="Escolha um login para autênticação" required maxlength="32" data-error="É preciso preencher este campo com nome de usuário único">
                            <span class="input-group-btn">
                                <button type="button" class="btn btn-primary" ng-click="validaLogin()">Verifica</button>
                            </span>
                        </div>
                        <div class="help-block with-errors"></div>
                        <div class="aviso-block aviso-login-invalido text-danger">Este usuário já está sendo usado, escolha outro</div>
                        <div class="aviso-block aviso-login-valido text-success">Usuário validado e disponível</div>
                    </div>
                    <div class="form-group">
                        <label for="senhaUsuario" class="control-label">Senha</label>
                        <input type="password" name="senhaUsuario" id="senhaUsuario" ng-model="usuario.senhaUsuario" class="form-control" placeholder="Crie uma senha forte" required minlength="6" maxlength="16" data-error="É preciso preencher este campo com uma senha com pelo menos 6 caracteres">
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group">
                        <label for="resenhaUsuario" class="control-label">Confirma Senha</label>
                        <input type="password" name="resenhaUsuario" id="resenhaUsuario" ng-model="usuario.resenhaUsuario" class="form-control" placeholder="Crie uma senha forte" required data-error="É preciso preencher este campo com uma senha com pelo menos 6 caracteres" data-match="#senhaUsuario" data-match-error="As senhas informadas não são iguais">
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group">
                        <label for="aceiteUsuario" class="control-label"><input type="checkbox" name="aceiteUsuario" id="aceiteUsuario" ng-model="usuario.aceiteUsuario" required> Li e concordo com os <a href="#" title="Termos de Uso">Termos de Uso</a></label>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-success pull-right" ng-disabled="formCadastro.$invalid"><i id="iconeBtnCadastrar" class="fa fa-save"></i> Cadastrar</button>
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