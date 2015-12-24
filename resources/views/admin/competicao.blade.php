@extends('layouts.admin')

@section('titulo-pagina')
Competições
@endsection

@section('conteudo')
<div class="container">
    <div class="row">
        <div class="col-xs-24">
            <div id="avisoCompeticao" class="alert @{{avisoCompeticao.class}} alerta-oculto">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <div>@{{avisoCompeticao.mensagem}}</div>
            </div>
        </div>
        <div class="col-xs-24">
            <h2 class="text-primary">Competições</h2>
            <div class="table-responsive">
                <table class="table table-striped table-hover">
                    <thead class="container-fluid">
                        <tr class="row">
                            <th class="col-xs-10">Nome</th>
                            <th class="col-xs-4">Data início</th>
                            <th class="col-xs-4">Data fim</th>
                            <th class="col-xs-4">Modalidade</th>
                            <th class="col-xs-2 text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody class="container-fluid">
                        <tr class="row" ng-repeat="competicao in listaCompetioes">
                            <td class="col-xs-10"><a href="" ng-click="editaCompeticao(competicao)">@{{competicao.nome}}</a></td>
                            <td class="col-xs-4">@{{competicao.data_inicio_ft}}</td>
                            <td class="col-xs-4">@{{competicao.data_fim_ft}}</td>
                            <td class="col-xs-4">@{{competicao.modalidade_ft}}</td>
                            <td class="col-xs-2" >
                                <span class="btn btn-link" title="Editar" ng-click="editaCompeticao(competicao)"><i class="fa fa-pencil"></i></span>
                                <span class="btn btn-link pull-right" title="Excluir" ng-click="chamaConfirmaDelete(competicao)"><i class="fa fa-trash text-danger"></i></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-xs-24">
            <hr>
        </div>
        <div class="col-xs-24 col-md-9">
            <form name="formCriaCompeticao" method="post" accept-charset="utf-8" data-toggle="validator" role="form" ng-submit="saveCompeticao()">
                <input type="hidden" name="_token" id="_token" ng-model="competicao._token" ng-init="competicao._token='{{csrf_token()}}'">
                <input type="hidden" name="id" ng-model="competicao.id">
                <fieldset>
                    <legend>Nova Competição</legend>
                    <div class="form-group">
                        <label for="nome" class="control-label">Nome</label>
                        <input type="text" name="nome" id="nome" ng-model="competicao.nome" class="form-control" placeholder="Informe o nome da Competição" required>
                    </div>
                    <div class="form-group">
                        <label for="descricao" class="control-label">Descrição</label>
                        <textarea name="descricao" id="descricao" ng-model="competicao.descricao" class="form-control" placeholder="Dê uma descrição para a competição" rows="5" required></textarea>
                    </div>
                    <div class="row">
                        <div class="col-xs-24 col-md-12">
                            <div class="form-group">
                                <label for="data_inicio" class="control-label">Data de início</label>
                                <input type="text" name="data_inicio" id="data_inicio" ng-model="competicao.data_inicio" class="form-control agenda" value="" placeholder="Data de início" required>
                            </div>
                        </div>
                        <div class="col-xs-24 col-md-12">
                            <div class="form-group">
                                <label for="data_fim" class="control-label">Data fim</label>
                                <input type="text" name="data_fim" id="data_fim" ng-model="competicao.data_fim" class="form-control agenda" value="" placeholder="Data fim" required>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="modalidade" class="control-label">Modalidade da competição</label>
                        <select name="modalidade" id="modalidade" ng-model="competicao.modalidade" class="form-control" required>
                            <option value="">Escolha uma modalidade</option>
                            <option value="pontuacao">Pontos corrídos</option>
                            <option value="eliminatoria">Eliminatória</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn btn-danger pull-left" ng-click="cancelaCompeticao()"><i class="fa fa-times"></i> Cancelar</button>
                        <button type="submit" class="btn btn-primary pull-right" ng-disabled="formCriaCompeticao.$invalid"><i class="fa fa-save"></i> Salva</button>
                    </div>
                </fieldset>
            </form>
        </div>
        <div class="col-xs-24 col-md-15">
            <legend>Equipes Participantes</legend>
            <div class="table-responsive">
                <table class="table table-striped table-hover">
                    <thead class="container-fluid">
                        <tr class="row">
                            <th class="col-xs-1"><input type="checkbox" ng-model="todasEquipes" ng-click="checkEquipes(todasEquipes)"></th>
                            <th class="col-xs-9">Apelido</th>
                            <th class="col-xs-12">Nome</th>
                            <th class="col-xs-2">Grupo</th>
                        </tr>
                    </thead>
                    <tbody class="container-fluid">
                        <tr class="row" ng-repeat="equipe in competicao.equipes">
                            <td class="col-xs-1"><input type="checkbox" ng-model="equipe.selecionada" value="@{{equipe.id}}"></td>
                            <td class="col-xs-9">@{{equipe.apelido}}</td>
                            <td class="col-xs-12">@{{equipe.nome}}</td>
                            <td class="col-xs-2"><input type="text" ng-model="equipe.grupo" class="form-control text-center input-sm" maxlength="2"></td>
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
                <h5>Deseja mesmo deletar a competição: <span class="text-danger texto-destaque">@{{mdCompeticao.nome}}</span></h5>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Não</button>
                <button type="button" class="btn btn-danger pull-right" ng-click="deleteCompeticao(mdCompeticao)">Sim</button>
            </div>
        </div>
    </div>
</div>
@endsection

@section('js-especifico')
<script src="{{ elixir('js/all-admin_competicao.js') }}"></script>
@endsection
