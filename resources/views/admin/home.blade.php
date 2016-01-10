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
                    <caption>Usuários Cadastrados</caption>
                    <thead>
                        <tr>
                            <th>Login</th>
                            <th>E-mail</th>
                            <th>Nome</th>
                            <th>Ativo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="usuario in listaUsuarios">
                            <th>@{{usuario.login}}</th>
                            <th>@{{usuario.email}}</th>
                            <th>@{{usuario.nome}}</th>
                            <th>@{{usuario.deleted_at}}</th>
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
