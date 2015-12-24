@extends('layouts.admin')

@section('titulo-pagina')
Estádios
@endsection

@section('conteudo')
<div class="container">
    <div class="row">
        <div class="col-xs-24">
            <div id="avisoEstadio" class="alert @{{avisoEstadio.class}} alerta-oculto">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <div>@{{avisoEstadio.mensagem}}</div>
            </div>
        </div>
        <div class="col-xs-24 col-md-12 col-md-offset-6">
            <form name="formSalvaEstadio" method="post" accept-charset="utf-8" data-toggle="validator" role="form" ng-submit="saveEstadio()">
                <input type="hidden" name="_token" id="_token" ng-model="estadio._token" ng-init="estadio._token='{{csrf_token()}}'">
                <input type="hidden" name="id" ng-model="estadio.id">
                <fieldset>
                    <legend>Novo Estádio</legend>
                    <div class="form-group">
                        <label for="nome" class="control-label">Nome</label>
                        <input type="text" name="nome" id="nome" ng-model="estadio.nome" class="form-control" placeholder="Informe o nome do estádio" required>
                    </div>
                    <div class="form-group">
                        <label for="apelido" class="control-label">Apelido</label>
                        <input type="text" name="apelido" id="apelido" ng-model="estadio.apelido" class="form-control" placeholder="Informe o apelido do estádio" required>
                    </div>
                    <div class="row">
                        <div class="col-xs-24 col-md-20">
                            <div class="form-group">
                                <label for="cidade" class="control-label">Cidade</label>
                                <input type="text" name="cidade" id="cidade" ng-model="estadio.cidade" class="form-control" placeholder="Informe a cidade do estádio" required>
                            </div>
                        </div>
                        <div class="col-xs-24 col-md-4">
                            <div class="form-group">
                                <label for="uf" class="control-label">UF</label>
                                <input type="text" name="uf" id="uf" ng-model="estadio.uf" class="form-control" placeholder="UF" required>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="pais" class="control-label">País</label>
                        <input type="text" name="pais" id="pais" ng-model="estadio.pais" class="form-control" ng-init="estadio.pais='Brasil'" placeholder="Informe o país do estádio" required>
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn btn-danger pull-left" ng-click="cancelaEstadio()"><i class="fa fa-times"></i> Cancelar</button>
                        <button type="submit" class="btn btn-primary pull-right" ng-disabled="formSalvaEstadio.$invalid"><i class="fa fa-save"></i> Salva</button>
                    </div>
                </fieldset>
            </form>
        </div>
        <div class="col-xs-24">
            <hr>
        </div>
        <div class="col-xs-24">
            <h2 class="text-primary">Estádios</h2>
            <div class="table-responsive">
                <table class="table table-striped table-hover">
                    <thead class="container-fluid">
                        <tr class="row">
                            <th class="col-xs-9">Nome</th>
                            <th class="col-xs-5">Apelido</th>
                            <th class="col-xs-5">Cidade</th>
                            <th class="col-xs-1">UF</th>
                            <th class="col-xs-3">País</th>
                            <th class="col-xs-1 text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody class="container-fluid">
                        <tr class="row" ng-repeat="estadio in listaEstadios">
                            <td class="col-xs-9"><a href="" ng-click="editaEstadio(estadio)">@{{estadio.nome}}</a></td>
                            <td class="col-xs-5">@{{estadio.apelido}}</td>
                            <td class="col-xs-5">@{{estadio.cidade}}</td>
                            <td class="col-xs-1">@{{estadio.uf}}</td>
                            <td class="col-xs-3">@{{estadio.pais}}</td>
                            <td class="col-xs-1" >
                                <span class="btn btn-link" title="Editar" ng-click="editaEstadio(estadio)"><i class="fa fa-pencil"></i></span>
                                <span class="btn btn-link pull-right" title="Excluir" ng-click="chamaConfirmaDelete(estadio)"><i class="fa fa-trash text-danger"></i></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection

@section('modais-sistema')
<div class="modal fade" id="mdConfirmaDelete" tabindex="-1" role="dialog" aria-labelledby="mdConfirmaDeleteLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header modal-danger">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="mdConfirmaDeleteLabel">Confirma Exclusão</h4>
            </div>
            <div class="modal-body">
                <h5>Deseja mesmo deletar a competição: <span class="text-danger texto-destaque">@{{mdEstadio.nome}}</span></h5>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Não</button>
                <button type="button" class="btn btn-danger pull-right" ng-click="deleteEstadio(mdEstadio)">Sim</button>
            </div>
        </div>
    </div>
</div>
@endsection

@section('js-especifico')
<script src="{{ elixir('js/all-admin_estadio.js') }}"></script>
@endsection
