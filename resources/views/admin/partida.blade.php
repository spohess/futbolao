@extends('layouts.admin')

@section('titulo-pagina')
Partidas
@endsection

@section('conteudo')
<div class="container">
    <div class="row">
        <div class="col-xs-24">
            <div id="avisoPartida" class="alert @{{avisoPartida.class}} alerta-oculto">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <div>@{{avisoPartida.mensagem}}</div>
            </div>
        </div>
        <div class="col-xs-24 col-md-12 col-md-offset-6">
            <form name="formSalvaPartida" method="post" accept-charset="utf-8" data-toggle="validator" role="form" ng-submit="savePartida()">
                <input type="hidden" name="_token" id="_token" ng-model="partida._token" ng-init="partida._token='{{csrf_token()}}'">
                <input type="hidden" name="id" ng-model="partida.id">
                <fieldset>
                    <legend>Nova Partida</legend>
                    <div class="form-group">
                        <label for="id_competicao" class="control-label">Competição</label>
                        <select id="id_competicao" name="id_competicao" ng-model="partida.id_competicao" class="form-control limpa-form" ng-options="competicao.id as competicao.nome for competicao in listaCompetioes" ng-change="carregaEquipes()" required>
                            <option value="">Escolha uma competição</option>
                        </select>
                    </div>
                    <div class="row">
                        <div class="col-xs-24 col-md-12">
                            <div class="form-group">
                                <label for="id_estadio" class="control-label">Local</label>
                                <select id="id_estadio" name="id_estadio" ng-model="partida.id_estadio" class="form-control limpa-form" ng-options="estadio.id as estadio.apelido + ' (' + estadio.cidade + ')' for estadio in listaEstadios" required>
                                    <option value="">Escolha um local</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-xs-24 col-md-12">
                            <div class="form-group">
                                <label for="data_partida" class="control-label">Data Hora</label>
                                <input type="text" name="data_partida" id="data_partida" ng-model="partida.data_partida" class="form-control agenda limpa-form" placeholder="YYYY-MM-DD HH:MI" required>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-24 col-md-12">
                            <div class="form-group">
                                <label for="id_equipe_casa" class="control-label">Equipe mandante</label>
                                <select id="id_equipe_casa" name="id_equipe_casa" ng-model="partida.id_equipe_casa" class="form-control limpa-form" ng-options="equipe.id as equipe.apelido + ' (' + equipe.nome + ')' for equipe in listaEquipes" required>
                                    <option value="">Escolha a equipe mandante</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-xs-24 col-md-12">
                            <div class="form-group">
                                <label for="id_equipe_visitante" class="control-label">Equipe visitante</label>
                                <select id="id_equipe_visitante" name="id_equipe_visitante" ng-model="partida.id_equipe_visitante" class="form-control limpa-form" ng-options="equipe.id as equipe.apelido + ' (' + equipe.nome + ')' for equipe in listaEquipes" required>
                                    <option value="">Escolha a equipe visitante</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-24 col-md-12">
                            <div class="form-group">
                                <label for="rodada" class="control-label">Rodara/Fase</label>
                                <input type="text" name="rodada" id="rodada" ng-model="partida.rodada" class="form-control limpa-form" placeholder="Informe a rodada ou fase" required>
                            </div>
                        </div>
                        <div class="col-xs-24 col-md-12">
                            <div class="form-group">
                                <br>
                                <label for="penalti" class="control-label">
                                    <input type="checkbox" id="penalti" name="penalti" ng-model="partida.penalti"> Vai aos pênaltis?
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn btn-danger pull-left" ng-click="cancelaPartida()"><i class="fa fa-times"></i> Cancelar</button>
                        <button type="submit" class="btn btn-primary pull-right" ng-disabled="formSalvaPartida.$invalid"><i class="fa fa-save"></i> Salva</button>
                    </div>
                </fieldset>
            </form>
        </div>
        <div class="col-xs-24">
            <hr>
        </div>
        <div class="col-xs-24">
            <div class="row">
                <div class="col-xs-24 col-sm-6">
                    <h2 class="text-primary sem-margin">Partidas</h2>
                </div>
                <div class="col-xs-24 col-sm-18">
                    <dir-pagination-controls max-size="5" direction-links="true" boundary-links="true" pagination-id="idListaPartidas" class="pull-right sem-margin"></dir-pagination-controls>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-striped table-hover">
                    <thead class="container-fluid">
                        <tr class="row">
                            <th class="col-xs-3">Campeonato</th>
                            <th class="col-xs-5">Casa</th>
                            <th class="col-xs-5">Visitante</th>
                            <th class="col-xs-4">Local</th>
                            <th class="col-xs-4">Data</th>
                            <th class="col-xs-1">Pênalti</th>
                            <th class="col-xs-1">Rodada</th>
                            <th class="col-xs-1 text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody class="container-fluid">
                        <tr class="row" dir-paginate="partida in listaPartidas | itemsPerPage:20" pagination-id="idListaPartidas">
                            <td class="col-xs-3">@{{partida.nome_campeonato}}</td>
                            <td class="col-xs-5">@{{partida.equipe_casa_apelido}}</td>
                            <td class="col-xs-5">@{{partida.equipe_visitante_apelido}}</td>
                            <td class="col-xs-4">@{{partida.local}}</td>
                            <td class="col-xs-4">@{{partida.data_partida_ft}}</td>
                            <td class="col-xs-1">@{{partida.penalti_ft}}</td>
                            <td class="col-xs-1">@{{partida.rodada}}</td>
                            <td class="col-xs-1" >
                                <span class="btn btn-link" title="Editar" ng-click="editaPartida(partida)"><i class="fa fa-pencil"></i></span>
                                <span class="btn btn-link pull-right" title="Excluir" ng-click="chamaConfirmaDelete(partida)"><i class="fa fa-trash text-danger"></i></span>
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
                <h5>Deseja mesmo deletar a competição: <span class="text-danger texto-destaque">@{{mdPartida.nome}}</span></h5>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Não</button>
                <button type="button" class="btn btn-danger pull-right" ng-click="deletePartida(mdPartida)">Sim</button>
            </div>
        </div>
    </div>
</div>
@endsection

@section('js-especifico')
<script src="{{ elixir('js/all-admin_partida.js') }}"></script>
@endsection
