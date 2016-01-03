@extends('layouts.arena')

@section('titulo-pagina')
Pontos
@endsection

@section('conteudo')
<div class="container" ng-init="onLoadPalpite()">
    <div class="row">
        <div class="col-xs-24 col-md-12 col-md-offset-6">
            <form name="formSalvaResultado" method="post" accept-charset="utf-8" data-toggle="validator" role="form" ng-submit="saveResultado()">
                <input type="hidden" name="_token" id="_token" ng-model="palpite._token" ng-init="palpite._token='{{csrf_token()}}'">
                <fieldset>
                    <legend>Qual bolão deseja conferir?</legend>
                    <div class="form-group">
                        <label for="id_bolao" class="control-label">Bolão</label>
                        <select id="id_bolao" name="id_bolao" ng-model="palpite.id_bolao" class="form-control" ng-options="bolao.id as bolao.nome for bolao in meusBoloes" ng-change="carregaPartidasParaConferir()" required>
                            <option value="">Escolha uma bolão</option>
                        </select>
                    </div>
                </fieldset>
            </form>
        </div>
        <div class="col-xs-24">
            <div class="row">
                <div class="col-xs-24 text-center">
                    <dir-pagination-controls max-size="5" direction-links="true" boundary-links="true" pagination-id="idListalistaPalpites" class="sem-margin"></dir-pagination-controls>
                </div>
            </div>
            <h2 class="text-primary">Palpites e resultados</h2>
            <div id="listaVazia" class="alert alert-warning text-center alerta-oculto">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                Ainda não há resultados para conferir. Qualquer dúvida veja o regulamento <strong><a href="" title="clicando aqui" data-toggle="modal" data-target="#mdRegulamentoPalpite">clicando aqui</a></strong>
            </div>
            <div id="listaCarregando" class="alert alert-success text-center alerta-oculto">
                <h2 class="sem-margin"><i class="fa fa-refresh fa-spin"></i> Carregando partidas</h2>
            </div>
            <div dir-paginate="palpite in listaPalpites | filter:filtroPartida | itemsPerPage:palpite.itemPorPagina" pagination-id="idListalistaPalpites">
                <div class="row">
                    <div class="col-xs-24">
                        <hr>
                    </div>
                </div>
                <div>
                    <div class="clearfix">
                        <input type="hidden" name="id_palpite" ng-model="palpite.id_palpite" ng-init="palpite.id_palpite=palpite.id_palpite">
                        <input type="hidden" name="_token" ng-model="palpite._token" ng-init="palpite._token='{{csrf_token()}}'">
                        <div class="col-xs-24 text-center text-secundary"><h4>Rodada/Fase: @{{palpite.rodada}}</h4></div>
                        <div class="col-xs-24 text-center"><h4>@{{palpite.local}} - @{{palpite.data_partida_ft}}</h4></div>
                        <div class="col-xs-24">
                            <div class="row text-center">
                                <div class="col-xs-24 col-md-3"><small>Mandante</small></div>
                                <div class="col-xs-24 col-md-4"><small>Palpite</small></div>
                                <div class="col-xs-24 col-md-4"><small>Resultado</small></div>
                                <div class="col-xs-24 col-md-2">&nbsp;</div>
                                <div class="col-xs-24 col-md-4"><small>Resultado</small></div>
                                <div class="col-xs-24 col-md-4"><small>Palpite</small></div>
                                <div class="col-xs-24 col-md-3"><small>Visitante</small></div>
                            </div>
                            <br>
                        </div>
                        <div class="col-xs-24 col-md-3 text-center" title="@{{palpite.equipe_casa_nome}}"><img src="@{{palpite.equipe_casa_brasao}}" class="brasao xs"> <h3 class="abreviado-brasao">@{{palpite.equipe_casa_abreviado}}</h3></div>
                        <div class="col-xs-24 col-md-2"><input type="text" ng-model="palpite.palpite_casa" ng-init="palpite.palpite_casa=palpite.palpite_casa" class="form-control text-center" disabled="disabled"></div>
                        <div class="col-xs-24 col-md-2"><input type="text" ng-model="palpite.palpite_penalti_casa" ng-init="palpite.palpite_penalti_casa=palpite.palpite_penalti_casa" class="form-control text-center" disabled="disabled"></div>
                        <div class="col-xs-24 col-md-2"><input type="text" ng-model="palpite.resultado_casa" ng-init="palpite.resultado_casa=palpite.resultado_casa" class="form-control text-center" disabled="disabled"></div>
                        <div class="col-xs-24 col-md-2"><input type="text" maxlength="2" name="palpite_penalti_casa" ng-model="palpite.palpite_penalti_casa" ng-init="palpite.palpite_penalti_casa=palpite.palpite_penalti_casa" class="form-control text-center" disabled="disabled"></div>
                        <div class="col-xs-24 col-md-2 text-center"><i class="fa fa-times fa-2x"></i></div>
                        <div class="col-xs-24 col-md-2"><input type="text" maxlength="2" name="palpite_penalti_visitante" ng-model="palpite.palpite_penalti_visitante" ng-init="palpite.palpite_penalti_visitante=palpite.palpite_penalti_visitante" class="form-control text-center" disabled="disabled"></div>
                        <div class="col-xs-24 col-md-2"><input type="text" ng-model="palpite.resultado_visitante" ng-init="palpite.resultado_visitante=palpite.resultado_visitante" class="form-control text-center" disabled="disabled"></div>
                        <div class="col-xs-24 col-md-2"><input type="text" ng-model="palpite.palpite_penalti_visitante" ng-init="palpite.palpite_penalti_visitante=palpite.palpite_penalti_visitante" class="form-control text-center" disabled="disabled"></div>
                        <div class="col-xs-24 col-md-2"><input type="text" ng-model="palpite.palpite_visitante" ng-init="palpite.palpite_visitante=palpite.palpite_visitante" class="form-control text-center" disabled="disabled"></div>
                        <div class="col-xs-24 col-md-3 text-center" title="@{{palpite.equipe_visitante_nome}}"><h3 class="abreviado-brasao">@{{palpite.equipe_visitante_abreviado}}</h3> <img src="@{{palpite.equipe_visitante_brasao}}" class="brasao xs"></div>
                    </div>
                    <br>
                    <div class="col-xs-24 text-center"><a href="" title="Outros palpites para essa partida" ng-click="outrosPalpites(palpite)">Outros palpites para essa partida</a></div>
                    <div class="col-xs-24 text-center"><h2>Pontos: @{{palpite.pontos}}</h2></div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('modais-sistema')
<div class="modal fade" id="mdOutrosPalpites" tabindex="-1" role="dialog" aria-labelledby="mdOutrosPalpitesLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header modal-primary">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="mdOutrosPalpitesLabel">Outros Palpites</h4>
            </div>
            <div class="modal-body">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th class="text-center text-secundary" rowspan="3">Participante</th>
                            <th class="text-center" colspan="2">@{{detalhePalpite.equipe_casa_apelido}}</th>
                            <th class="text-center" colspan="2">@{{detalhePalpite.equipe_visitante_apelido}}</th>
                            <th class="text-center text-secundary" rowspan="3">Pontos</th>
                        </tr>
                        <tr>
                            <th class="text-center">Placar</th>
                            <th class="text-center">Pênalti</th>
                            <th class="text-center">Placar</th>
                            <th class="text-center">Pênalti</th>
                        </tr>
                        <tr>
                            <th class="text-center text-primary">@{{detalhePalpite.resultado_casa}}</th>
                            <th class="text-center text-primary">@{{detalhePalpite.resultado_penalti_casa}}</th>
                            <th class="text-center text-primary">@{{detalhePalpite.resultado_visitante}}</th>
                            <th class="text-center text-primary">@{{detalhePalpite.resultado_penalti_visitante}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="listaVazia_@{{detalhePalpite.id_partida}}" class="alerta-oculto">
                            <td colspan="6">
                                <div class="alert alert-warning text-center sem-margin">
                                    Não há palpites para essa partida
                                </div>
                            </td>
                        </tr>
                        <tr ng-repeat="palpiteUsuario in listaPalpiteUsuario">
                            <td class="text-center text-secundary">@{{palpiteUsuario.usuario}}</td>
                            <td class="text-center">@{{palpiteUsuario.palpite_casa}}</td>
                            <td class="text-center">@{{palpiteUsuario.palpite_penalti_casa}}</td>
                            <td class="text-center">@{{palpiteUsuario.palpite_visitante}}</td>
                            <td class="text-center">@{{palpiteUsuario.palpite_penalti_visitante}}</td>
                            <td class="text-center text-secundary">@{{palpiteUsuario.pontos}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
            </div>
        </div>
    </div>
</div>
@endsection

@section('css-especifico')
<link rel="stylesheet" href="{{ elixir('css/palpite.css') }}">
@endsection

@section('js-especifico')
<script src="{{ elixir('js/all-arena.js') }}"></script>
@endsection
