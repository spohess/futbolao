@extends('layouts.admin')

@section('titulo-pagina')
Resultados
@endsection

@section('conteudo')
<div class="container">
    <div class="row">
        <div class="col-xs-24">
            <div id="avisoResultado" class="alert @{{avisoResultado.class}} alerta-oculto">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <div>@{{avisoResultado.mensagem}}</div>
            </div>
        </div>
        <div class="col-xs-24 col-md-12 col-md-offset-6">
            <form name="formSalvaResultado" method="post" accept-charset="utf-8" data-toggle="validator" role="form" ng-submit="saveResultado()">
                <input type="hidden" name="_token" id="_token" ng-model="resultado._token" ng-init="resultado._token='{{csrf_token()}}'">
                <input type="hidden" name="id" ng-model="resultado.id">
                <fieldset>
                    <legend>Filtra Partida</legend>
                    <div class="row">
                        <div class="col-xs-24 col-md-12">
                            <div class="form-group">
                                <label for="id_competicao" class="control-label">Competição</label>
                                <select id="id_competicao" name="id_competicao" ng-model="resultado.id_competicao" class="form-control limpar" ng-options="competicao.id as competicao.nome for competicao in listaCompetioes" ng-change="carregaRodadas()" required>
                                    <option value="">Escolha uma competição</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-xs-24 col-md-12">
                            <div class="form-group">
                                <label for="rodada" class="control-label">Rodada/Fase</label>
                                <select id="rodada" name="rodada" ng-model="resultado.rodada" class="form-control limpar" ng-options="rodada.rodada as rodada.rodada + ' Rodada/Fase' for rodada in listaRodadas" ng-change="carregaPartidas()" required>
                                    <option value="">Escolha uma Rodada/Fase</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
        <div class="col-xs-24">
            <h2 class="text-primary">Partidas: @{{resultado.rodada}} Rodada/Fase</h2>
            <div class="row" ng-repeat="partida in listaPartidas">
                <hr>
                <div class="box-resultado clearfix" id="box-resultado-@{{partida.id}}" ng-class="(partida.gravado == 'GRAVADO') ? 'inserido' : ''">
                    <input type="hidden" name="id" ng-model="partida.id" value="@{{partida.id}}">
                    <input type="hidden" name="_token" ng-model="partida._token" ng-init="partida._token='{{csrf_token()}}'">
                    <div class="col-xs-24 text-center"><h3>@{{partida.data_partida_ft}}</h3></div>
                    <div class="col-xs-24 col-md-5 text-center"><p>@{{partida.equipe_casa_apelido}}</p></div>
                    <div class="col-xs-24 col-md-3"><input type="text" name="placar_casa" value="@{{partida.placar_casa}}" ng-model="partida.placar_casa" class="form-control input-sm text-center" placeholder="Placar"></div>
                    <div class="col-xs-24 col-md-3"><input type="text" name="penalti_casa" value="@{{partida.penalti_casa}}" ng-model="partida.penalti_casa" class="form-control input-sm text-center" placeholder="Pênalti" ng-disabled="!partida.penalti"></div>
                    <div class="col-xs-24 col-md-1 text-center"><i class="fa fa-times fa-2x"></i></div>
                    <div class="col-xs-24 col-md-3"><input type="text" name="penalti_visitante" value="@{{partida.penalti_visitante}}" ng-model="partida.penalti_visitante" class="form-control input-sm text-center" placeholder="Pênalti" ng-disabled="!partida.penalti"></div>
                    <div class="col-xs-24 col-md-3"><input type="text" name="placar_visitante" value="@{{partida.placar_visitante}}" ng-model="partida.placar_visitante" class="form-control input-sm text-center" placeholder="Placar"></div>
                    <div class="col-xs-24 col-md-5 text-center"><p>@{{partida.equipe_visitante_apelido}}</p></div>
                    <div class="col-xs-24 col-md-1 text-center"><button type="button" class="btn btn-success btn-sm" ng-click="gravaResultado(partida)"><i class="fa fa-check"></i></button></div>
                </div>
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
                <h5>Deseja mesmo deletar a competição: <span class="text-danger texto-destaque">@{{mdResultado.nome}}</span></h5>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Não</button>
                <button type="button" class="btn btn-danger pull-right" ng-click="deleteResultado(mdResultado)">Sim</button>
            </div>
        </div>
    </div>
</div>
@endsection

@section('js-especifico')
<script src="{{ elixir('js/all-admin_resultado.js') }}"></script>
@endsection
