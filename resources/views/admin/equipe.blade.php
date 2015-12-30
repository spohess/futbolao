@extends('layouts.admin')

@section('titulo-pagina')
Equipes
@endsection

@section('conteudo')
<div class="container">
    <div class="row">
        <div class="col-xs-24">
            <div id="avisoEquipe" class="alert @{{avisoEquipe.class}} alerta-oculto">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <div>@{{avisoEquipe.mensagem}}</div>
            </div>
        </div>
        <div class="col-xs-24 col-md-12 col-md-offset-6">
            <form name="formSalvaEquipe" method="post" accept-charset="utf-8" data-toggle="validator" role="form" ng-submit="saveEquipe()">
                <input type="hidden" name="_token" id="_token" ng-model="equipe._token" ng-init="equipe._token='{{csrf_token()}}'">
                <input type="hidden" name="id" ng-model="equipe.id">
                <fieldset>
                    <legend>Nova Equipe</legend>
                    <div class="form-group">
                        <label for="nome" class="control-label">Nome</label>
                        <input type="text" name="nome" id="nome" ng-model="equipe.nome" class="form-control limpa-form" placeholder="Informe o nome da equipe" required>
                    </div>
                    <div class="row">
                        <div class="col-xs-24 col-md-19">
                            <div class="form-group">
                                <label for="apelido" class="control-label">Apelido</label>
                                <input type="text" name="apelido" id="apelido" ng-model="equipe.apelido" class="form-control limpa-form" placeholder="Informe o apelido da equipe" required>
                            </div>
                        </div>
                        <div class="col-xs-24 col-md-5">
                            <div class="form-group">
                                <label for="abreviado" class="control-label">Abreviado</label>
                                <input type="text" name="abreviado" id="abreviado" ng-model="equipe.abreviado" class="form-control limpa-form" placeholder="AAA" maxlength="3" required>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="id_estadio" class="control-label">Estádio</label>
                        <select id="id_estadio" name="id_estadio" ng-model="equipe.id_estadio" class="form-control limpa-form limpar" ng-options="estadio.id as estadio.nome + ' (' + estadio.apelido + ')' for estadio in listaEstadios" required>
                            <option value="">Escolha um estádio</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="brasao" class="control-label">Brasão (imagem base64)</label>
                        <input type="text" name="brasao" id="brasao" ng-model="equipe.brasao" class="form-control limpa-form" placeholder="Informe informe a imabem em base64">
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn btn-danger pull-left" ng-click="cancelaEquipe()"><i class="fa fa-times"></i> Cancelar</button>
                        <button type="submit" class="btn btn-primary pull-right" ng-disabled="formSalvaEquipe.$invalid"><i class="fa fa-save"></i> Salva</button>
                    </div>
                </fieldset>
            </form>
        </div>
        <div class="col-xs-24">
            <hr>
        </div>
        <div class="col-xs-24">
            <h2 class="text-primary">Equipes</h2>
            <div class="table-responsive">
                <table class="table table-striped table-hover">
                    <thead class="container-fluid">
                        <tr class="row">
                            <th class="col-xs-1">#</th>
                            <th class="col-xs-9">Nome</th>
                            <th class="col-xs-6">Apelido</th>
                            <th class="col-xs-2">Abreviado</th>
                            <th class="col-xs-5">Estádio</th>
                            <th class="col-xs-1 text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody class="container-fluid">
                        <tr class="row" ng-repeat="equipe in listaEquipes">
                            <td class="col-xs-1"><img class="brasao-tabela" src="@{{equipe.brasao_ft}}" alt="Escudo"></td>
                            <td class="col-xs-9"><a href="" ng-click="editaEquipe(equipe)">@{{equipe.nome}}</a></td>
                            <td class="col-xs-6">@{{equipe.apelido}}</td>
                            <td class="col-xs-2">@{{equipe.abreviado}}</td>
                            <td class="col-xs-5">@{{equipe.nomeEstadio}}</td>
                            <td class="col-xs-1" >
                                <span class="btn btn-link" title="Editar" ng-click="editaEquipe(equipe)"><i class="fa fa-pencil"></i></span>
                                <span class="btn btn-link pull-right" title="Excluir" ng-click="chamaConfirmaDelete(equipe)"><i class="fa fa-trash text-danger"></i></span>
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
                <h5>Deseja mesmo deletar a competição: <span class="text-danger texto-destaque">@{{mdEquipe.nome}}</span></h5>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Não</button>
                <button type="button" class="btn btn-danger pull-right" ng-click="deleteEquipe(mdEquipe)">Sim</button>
            </div>
        </div>
    </div>
</div>
@endsection

@section('js-especifico')
<script src="{{ elixir('js/all-admin_equipe.js') }}"></script>
@endsection
