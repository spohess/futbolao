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
                            <th>Cadastro</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php $i = 1; ?>
                        @foreach ($usuarios as $usuario)
                        <tr>
                            <td>{{$i}}</td>
                            <td class="text-info">{{$usuario->login}}</span></td>
                            <td>{{$usuario->email}}</td>
                            <td>{{$usuario->nome}}</td>
                            @if (is_null($usuario->deleted_at))
                                <td class="text-center"><span class="label label-success">CONFIRMADO</span></td>
                            @else
                                <td class="text-center"><span class="label label-danger">NÃO CONFIRMADO</span></td>
                            @endif
                            <td>{{get_data_formatada($usuario->created_at)}}</td>
                        </tr>
                        <?php $i++; ?>
                        @endforeach
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
