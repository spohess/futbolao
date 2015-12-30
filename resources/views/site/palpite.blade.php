@extends('layouts.arena')

@section('titulo-pagina')
Palpites
@endsection

@section('conteudo')
<div class="container" ng-init="onLoadPalpite()">
    <div class="row">
        <div class="col-xs-24">
            <div class="alert alert-info">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <div class="text-center">É iniciante? Veja o regulamento <strong><a href="" title="clicando aqui" data-toggle="modal" data-target="#mdRegulamentoPalpite">clicando aqui</a></strong></div>
            </div>
        </div>
        <div class="col-xs-24 col-md-12 col-md-offset-6">
            <form name="formSalvaResultado" method="post" accept-charset="utf-8" data-toggle="validator" role="form" ng-submit="saveResultado()">
                <input type="hidden" name="_token" id="_token" ng-model="palpite._token" ng-init="palpite._token='{{csrf_token()}}'">
                <fieldset>
                    <legend>Qual palpite irá dar?</legend>
                    <div class="form-group">
                        <label for="id_bolao" class="control-label">Bolão</label>
                        <select id="id_bolao" name="id_bolao" ng-model="palpite.id_bolao" class="form-control" ng-options="bolao.id as bolao.nome for bolao in meusBoloes" ng-change="carregaPartidasParaPalpitar()" required>
                            <option value="">Escolha uma bolão</option>
                        </select>
                    </div>
                </fieldset>
            </form>
        </div>
        <div class="col-xs-24">
            <h2 class="text-primary">Partidas <small class="pull-right"><a href="" title="clicando aqui" data-toggle="modal" data-target="#mdAjudaPalpite"><i class="fa fa-question-circle"></i> Ajuda</a></small></h2>
            <div ng-repeat="palpite in listaPalpites">
                <div class="row">
                    <div class="col-xs-24">
                        <hr>
                    </div>
                </div>
                <div class="row box-palpite" id="box-palpite-@{{palpite.id_partida}}" ng-class="(palpite.id_palpite>0 && !gravado) ? 'inserido' : ''">
                    <div class="clearfix">
                        <input type="hidden" name="id_palpite" ng-model="palpite.id_palpite" ng-init="palpite.id_palpite=palpite.id_palpite">
                        <input type="hidden" name="_token" ng-model="palpite._token" ng-init="palpite._token='{{csrf_token()}}'">
                        <div class="col-xs-24 text-center text-secundary"><h4>Rodada/Fase: @{{palpite.rodada}}</h4></div>
                        <div class="col-xs-24 text-center"><h4>@{{palpite.local}} - @{{palpite.data_partida_ft}}</h4></div>
                        <div class="col-xs-24">
                            <div class="row text-center">
                                <div class="col-xs-24 col-md-3"><small>Mandante</small></div>
                                <div class="col-xs-24 col-md-4"><small>Palpite placar</small></div>
                                <div class="col-xs-24 col-md-4"><small>Palpite pênalti</small></div>
                                <div class="col-xs-24 col-md-2">&nbsp;</div>
                                <div class="col-xs-24 col-md-4"><small>Palpite pênalti</small></div>
                                <div class="col-xs-24 col-md-4"><small>Palpite placar</small></div>
                                <div class="col-xs-24 col-md-3"><small>Visitante</small></div>
                            </div>
                            <br>
                        </div>
                        <div class="col-xs-24 col-md-3 text-center" title="@{{palpite.equipe_casa_nome}}"><img src="@{{palpite.equipe_casa_brasao}}" class="brasao xs"> <h3 class="abreviado-brasao">@{{palpite.equipe_casa_abreviado}}</h3></div>
                        <div class="col-xs-24 col-md-4"><input type="text" maxlength="2" name="palpite_casa" ng-model="palpite.palpite_casa" ng-init="palpite.palpite_casa=palpite.palpite_casa" class="form-control text-center"></div>
                        <div class="col-xs-24 col-md-4"><input type="text" maxlength="2" name="palpite_penalti_casa" ng-model="palpite.palpite_penalti_casa" ng-init="palpite.palpite_penalti_casa=palpite.palpite_penalti_casa" class="form-control text-center" ng-disabled="!palpite.penalti"></div>
                        <div class="col-xs-24 col-md-2 text-center"><i class="fa fa-times fa-2x"></i></div>
                        <div class="col-xs-24 col-md-4"><input type="text" maxlength="2" name="palpite_penalti_visitante" ng-model="palpite.palpite_penalti_visitante" ng-init="palpite.palpite_penalti_visitante=palpite.palpite_penalti_visitante" class="form-control text-center" ng-disabled="!palpite.penalti"></div>
                        <div class="col-xs-24 col-md-4"><input type="text" maxlength="2" name="palpite_visitante" ng-model="palpite.palpite_visitante" ng-init="palpite.palpite_visitante=palpite.palpite_visitante" class="form-control text-center"></div>
                        <div class="col-xs-24 col-md-3 text-center" title="@{{palpite.equipe_visitante_nome}}"><h3 class="abreviado-brasao">@{{palpite.equipe_visitante_abreviado}}</h3> <img src="@{{palpite.equipe_visitante_brasao}}" class="brasao xs"></div>
                    </div>
                    <br>
                    <div class="col-xs-24 text-center"><button type="button" class="btn btn-success btn-sm" ng-click="gravaPalpite(palpite)"><i class="fa fa-check"> Gravar</i></button></div>
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
<div class="modal fade" id="mdRegulamentoPalpite" tabindex="-1" role="dialog" aria-labelledby="mdRegulamentoPalpiteLabel">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header modal-primary">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="mdRegulamentoPalpiteLabel">Regulamento FutBolão</h4>
            </div>
            <div class="modal-body">
                @include('subview.regulamento')
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="mdAjudaPalpite" tabindex="-1" role="dialog" aria-labelledby="mdAjudaPalpiteLabel">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header modal-primary">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="mdAjudaPalpiteLabel">Ajuda</h4>
            </div>
            <div class="modal-body">
                <div class="alert alert-warning">
                    <div class="text-center">Veja o regulamento <strong><a href="" title="clicando aqui" data-dismiss="modal" data-toggle="modal" data-target="#mdRegulamentoPalpite">clicando aqui</a></strong></div>
                </div>
                <div class="figura-ajuda">
                    <small>Figura 1</small><img src="{{url('img/ajuda.jpg')}}" alt="Figura Ajuda">
                </div>
                <div class="row">
                    <div class="col-xs-24 col-md-20 col-md-offset-2">
                        <h3 class="text-primary">Como dar seu palpite <small>Figura 1</small></h3>
                        <h4 class="text-secundary">Para carregar as partidas para dar o palpite selecione um bolão no campo "Bolão" e as partidas irão ser carregadas automaticamente</h4>
                        <ol>
                            <li>Informação de local e data da partida;</li>
                            <li>Equipe mandante;</li>
                            <li>Campo para dar o seu palpite de gols da equipe mandante (preenchimento obrigatório);</li>
                            <li>Campo de palpite para os pênaltis do mandante. Este campo só estará habilitado caso a partida possa ser decidida nos pênaltis, caso contrário ficará desabilitado, quando habilitado seu preenchimento <strong>NÃO</strong> é obrigatório;</li>
                            <li>Campo para preencher os pênaltis do visitante, como item 4, só estará habilitado caso a partida possa ser decidida nos pênaltis;</li>
                            <li>Campo para dar palpite do placar do visitante (preenchimento obrigatório);</li>
                            <li>Equipe visitante;</li>
                            <li>Botão para gravar o palpite, após preencher e clicar nesse botão o fundo da linha da partida ficará verde claro para informar que foi gravado com sucesso;</li>
                        </ol>
                    </div>
                </div>
                <hr>
                <div class="figura-ajuda">
                    <small>Figura 2</small><img src="{{url('img/ajuda-gravado.jpg')}}" alt="Figura Ajuda">
                </div>
                <div class="row">
                    <div class="col-xs-24 col-md-20 col-md-offset-2">
                        <h3 class="text-primary">Palpite Gravado <small>Figura 2</small></h3>
                        <ol>
                            <li>Logo após clicar no botão gravar essa será a aparência se o palpite for gravado com sucesso;</li>
                        </ol>
                    </div>
                </div>
                <hr>
                <div class="figura-ajuda">
                    <small>Figura 3</small><img src="{{url('img/ajuda-inserido.jpg')}}" alt="Figura Ajuda">
                </div>
                <div class="row">
                    <div class="col-xs-24 col-md-20 col-md-offset-2">
                        <h3 class="text-primary">Palpite já Gravado <small>Figura 3</small></h3>
                        <ol>
                            <li>Quando as partidas forem carregadas e tiverem essa aparência é porque o palpite já está registrado no sistema;</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Ok</button>
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
