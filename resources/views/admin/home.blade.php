@extends('layouts.admin')

@section('titulo-pagina')
Home
@endsection

@section('conteudo')
<div class="container-fluid" ng-init="onLoadAdmin()">
    <div class="row">
        <div class="col-xs-24">
            <div class="table-responsive">
                <table class="table table-striped table-hover">
                    <caption>Resumo Usuários Cadastrados</caption>
                    <thead>
                        <tr>
                            <th>Usuários Cadastrados</th>
                            <th>Usuários Confirmados</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{$usuarios_cadastrados}}</td>
                            <td>{{$usuarios_confirmados}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-24">
            <div class="table-responsive">
                <table class="table table-striped table-hover">
                    <caption>Usuários Cadastrados</caption>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Login</th>
                            <th>E-mail</th>
                            <th>Nome</th>
                            <th>Ativo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="(chave, usuario) in listaUsuarios">
                            <td>@{{chave + 1}}</td>
                            <td>@{{usuario.login}}</td>
                            <td>@{{usuario.email}}</td>
                            <td>@{{usuario.nome}}</td>
                            <td>@{{usuario.deleted_at}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection

@section('js-especifico')
<script src="{{ elixir('js/all-admin.js') }}"></script>
@endsection
