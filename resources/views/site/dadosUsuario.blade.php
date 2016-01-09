@extends('layouts.arena')

@section('titulo-pagina')
Dados Usuário
@endsection

@section('conteudo')
<div class="container">
    <div class="row">
        <div class="col-xs-24 col-md-8">
            <form ng-submit="atualizaUsuario()" method="post" name="formDadosUsuario" accept-charset="utf-8" data-toggle="validator" role="form">
                <input type="hidden" name="_token" id="_token" ng-model="usuario._token" ng-init="usuario._token='{{csrf_token()}}'">
                <input type="hidden" name="emailValido" ng-model="usuario.emailValido" ng-init="usuario.emailValido='valido'">
                <input type="hidden" name="loginValido" ng-model="usuario.loginValido" ng-init="usuario.loginValido='valido'">
                <fieldset>
                    <legend>Dados de Acesso</legend>
                    <div id="avisoCadastroErro" class="alert alert-danger alerta-oculto">
                        <div>Seu cadastro não pode ser efetuado por um erro desconhecido, por favor tento novamento ou entre em contato conosco.</div>
                    </div>
                    <div id="avisoAtualizacaoSucesso" class="alert alert-success alerta-oculto">
                        <div>Seus dados foram atualizados com sucesso.</div>
                    </div>
                    <div class="form-group">
                        <label for="nome" class="control-label">Nome</label>
                        <input type="text" name="nome" id="nome" ng-model="usuario.nome" ng-init="usuario.nome='{{$usuario->nome}}'" class="form-control" placeholder="Informe o seu nome" required maxlength="255" data-error="É preciso preencher este campo com o seu nome">
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group">
                        <label for="email" class="control-label">E-mail</label>
                        @if (isset($usuario->novoEmail->id))
                        <div class="alert alert-danger">
                            <div>Seu e-mail foi alterado para <strong>{{$usuario->novoEmail->novo_email}}</strong>, mas estamos aguardando confirmação para efetivar.</div>
                        </div>
                        @endif
                        <input type="email" name="email" id="email" ng-model="usuario.email" ng-init="usuario.email='{{$usuario->email}}'" ng-blur="validaEmail()" class="form-control" placeholder="Informe o seu e-mail" required maxlength="128" data-error="É preciso preencher este campo com o seu e-mail, ele será utilizado para confirmar o cadastro">
                        <div class="help-block with-errors"></div>
                        <div class="aviso-block aviso-email text-danger">Este e-mail já está sendo usado, utilize a ferramenta de recuperação de dados para resgatar seus dados</div>
                    </div>
                    <div class="form-group">
                        <label for="login" class="control-label">Usuário <small class="text-warning">Permitido: letras, númemos, '-' e '_'</small></label>
                        <div class="input-group">
                            <input type="text" name="login" id="login" ng-model="usuario.login" ng-init="usuario.login='{{$usuario->login}}'" class="form-control" placeholder="Escolha um login para autênticação" required maxlength="32" data-error="É preciso preencher este campo com nome de usuário único">
                            <span class="input-group-btn">
                                <button type="button" class="btn btn-primary" ng-click="validaLogin()">Verifica</button>
                            </span>
                        </div>
                        <div class="help-block with-errors"></div>
                        <div class="aviso-block aviso-login-invalido text-danger">Este usuário já está sendo usado, escolha outro</div>
                        <div class="aviso-block aviso-login-valido text-success">Usuário validado e disponível</div>
                    </div>
                    <div class="form-group">
                        <label for="senha" class="control-label">Nova senha</label>
                        <input type="password" name="senha" id="senha" ng-model="usuario.senha" class="form-control" placeholder="Crie uma senha forte" minlength="6" maxlength="16" data-error="É preciso preencher este campo com uma senha com pelo menos 6 caracteres">
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group">
                        <label for="resenha" class="control-label">Confirma nova senha</label>
                        <input type="password" name="resenha" id="resenha" ng-model="usuario.resenha" class="form-control" placeholder="Crie uma senha forte" data-error="É preciso preencher este campo com uma senha com pelo menos 6 caracteres" data-match="#senha" data-match-error="As senhas informadas não são iguais">
                        <div class="help-block with-errors"></div>
                    </div>
                    <hr>
                    <div class="form-group">
                        <div id="avisoSenhaAtualInvalida" class="alert alert-danger alerta-oculto">
                            <div>A senha informada não é válida, por favor tente novamente</div>
                        </div>
                        <label for="senhaAtual" class="control-label">Senha atual <small class="text-primary">Informe sua senha atual para Salvar</small></label>
                        <input type="password" name="senhaAtual" id="senhaAtual" ng-model="usuario.senhaAtual" class="form-control" placeholder="Informe sua senha atual" required minlength="6" maxlength="16" data-error="Informe sua senha para Salvar suas alterações">
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-success pull-right" ng-disabled="formDadosUsuario.$invalid"><i id="iconeBtnAtualiza" class="fa fa-save"></i> Salvar</button>
                    </div>
                </fieldset>
            </form>
        </div>
        <div class="col-xs-24 col-md-16"></div>
    </div>
</div>
@endsection

@section('css-especifico')
<link rel="stylesheet" href="{{ elixir('css/palpite.css') }}">
@endsection

@section('js-especifico')
<script src="{{ elixir('js/all-usuario.js') }}"></script>
@endsection
