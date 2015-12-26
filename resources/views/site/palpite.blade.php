@extends('layouts.arena')

@section('titulo-pagina')
Palpites
@endsection

@section('conteudo')
<div class="container" ng-init="onLoadPalpite()">
    <div class="row">
        <div class="col-xs-24">
            <div id="avisoResultado" class="alert @{{avisoResultado.class}} alerta-oculto">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <div>@{{avisoResultado.mensagem}}</div>
            </div>
        </div>
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
                        <select id="id_bolao" name="id_bolao" ng-model="palpite.id_bolao" class="form-control" ng-options="bolao.id as bolao.nome for bolao in meusBoloes" ng-change="carregaPartidas()" required>
                            <option value="">Escolha uma bolão</option>
                        </select>
                    </div>
                </fieldset>
            </form>
        </div>
        <div class="col-xs-24">
            <div class="row">
                <div class="col-xs-24 text-center">
                    <h2 class="text-primary">Rodadas/Fases</h2>
                    <dir-pagination-controls max-size="5" direction-links="true" boundary-links="true" pagination-id="idListalistaPalpites" class="sem-margin"></dir-pagination-controls>
                </div>
            </div>
            <h2 class="text-primary">Partidas</h2>
            <div class="row" dir-paginate="palpite in listaPalpites | filter:filtroPartida | itemsPerPage:palpite.itemPorPagina" pagination-id="idListalistaPalpites">
                <hr>
                <div class="box-palpite clearfix" id="box-palpite-@{{palpite.id}}">
                    <input type="hidden" name="id" ng-model="palpite.id" value="@{{palpite.id}}">
                    <input type="hidden" name="_token" ng-model="palpite._token" ng-init="palpite._token='{{csrf_token()}}'">
                    <div class="col-xs-24 text-center"><button type="button" class="btn btn-success btn-sm" ng-click="gravaResultado(palpite)"><i class="fa fa-check"> Gravar</i></button> <h4>@{{palpite.local}} - @{{palpite.data_partida_ft}}</h4></div>
                    <div class="col-xs-24 col-md-3 text-center" title="@{{palpite.equipe_casa_nome}}"><img src="@{{palpite.equipe_casa_brasao}}" class="brasao xs"> <h3 class="abreviado-brasao">@{{palpite.equipe_casa_abreviado}}</h3></div>
                    <div class="col-xs-24 col-md-2"><input type="text" name="palpite_casa" ng-model="palpite.palpite_casa" ng-init="palpite.palpite_casa=palpite.palpite_casa" class="form-control text-center" placeholder="Palpite"></div>
                    <div class="col-xs-24 col-md-2"><input type="text" name="palpite_penalti_casa" ng-model="palpite.palpite_penalti_casa" ng-init="palpite.palpite_penalti_casa=palpite.palpite_penalti_casa" class="form-control text-center" placeholder="Pênalti" ng-disabled="!palpite.penalti"></div>
                    <div class="col-xs-24 col-md-2"><input type="text" name="placar_casa" ng-model="palpite.placar_casa" ng-init="palpite.placar_casa=palpite.resultado_casa" class="form-control text-center" disabled="disabled"></div>
                    <div class="col-xs-24 col-md-2"><input type="text" name="penalti_casa" ng-model="palpite.penalti_casa" ng-init="palpite.penalti_casa=palpite.resultado_penalti_casa" class="form-control text-center" disabled="disabled"></div>
                    <div class="col-xs-24 col-md-2 text-center"><i class="fa fa-times fa-2x"></i></div>
                    <div class="col-xs-24 col-md-2"><input type="text" name="penalti_visitante" ng-model="palpite.penalti_visitante" ng-init="palpite.penalti_visitante=palpite.resultado_penalti_visitante" class="form-control text-center" disabled="disabled"></div>
                    <div class="col-xs-24 col-md-2"><input type="text" name="placar_visitante" ng-model="palpite.placar_visitante" ng-init="palpite.placar_visitante=palpite.resultado_visitante" class="form-control text-center" disabled="disabled"></div>
                    <div class="col-xs-24 col-md-2"><input type="text" name="palpite_penalti_visitante" ng-model="palpite.palpite_penalti_visitante" ng-init="palpite.palpite_penalti_visitante=palpite.palpite_penalti_visitante" class="form-control text-center" placeholder="Pênalti" ng-disabled="!palpite.penalti"></div>
                    <div class="col-xs-24 col-md-2"><input type="text" name="palpite_visitante" ng-model="palpite.palpite_visitante" ng-init="palpite.palpite_visitante=palpite.palpite_visitante" class="form-control text-center" placeholder="Palpite"></div>
                    <div class="col-xs-24 col-md-3 text-center" title="@{{palpite.equipe_visitante_nome}}"><h3 class="abreviado-brasao">@{{palpite.equipe_visitante_abreviado}}</h3> <img src="@{{palpite.equipe_visitante_brasao}}" class="brasao xs"></div>
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
                <h4 class="modal-title" id="mdRegulamentoPalpiteLabel">Regulamento Palpiteiros Anônimos</h4>
            </div>
            <div class="modal-body">
                <div class="panel-group" id="col-regulamento" role="tablist" aria-multiselectable="false">
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="regulamento-palpites">
                            <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#col-regulamento" href="#item-regulamento-palpites" aria-expanded="false" aria-controls="item-regulamento-palpites">
                                    Palpites
                                </a>
                            </h4>
                        </div>
                        <div id="item-regulamento-palpites" class="panel-collapse collapse" role="tabpanel" aria-labelledby="regulamento-palpites">
                            <div class="panel-body">
                                <dl class="lista-regulamento">
                                    <dt class="text-primary">Gravação</dt>
                                    <dd>Para inserir um novo palpite ou alterar um já inserido é utilizado o mesmo procedimento, é necessário preencher o placar do mandante e do visitante e clicar no botão gravar, caso estaja na fase eliminatória e tiver decisão por pênaltis o campo para preencher os pênaltis estará habilitado e se optar pelo empate da partida <strong>PODERÁ</strong> palpitar os pênaltis, mas se preferir não informa, não é necessário pois não é obrigatório. No formulário de Partidas há um link de "Ajuda" com os detalhes do processo de inserir um palpite.</dd>
                                    <dt class="text-primary">Tempo Limite</dt>
                                    <dd>O bloqueio para gravação/alteração de palpites é feito individualmente, por partida, e não por rodada. Os palpites devem ser inseridos/alterados até <strong>3 horas antes</strong> do início da respectiva partida, entrando no período limite, os campos para preencher os placares (e pênalti quando houver) serão desabilitados e nenhuma gravação será aceita.</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="regulamento-pontos">
                            <h4 class="panel-title">
                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#col-regulamento" href="#item-regulamento-pontos" aria-expanded="false" aria-controls="item-regulamento-pontos">
                                    Pontuação
                                </a>
                            </h4>
                        </div>
                        <div id="item-regulamento-pontos" class="panel-collapse collapse" role="tabpanel" aria-labelledby="regulamento-pontos">
                            <div class="panel-body">
                                <dl class="lista-regulamento">
                                    <dt class="text-primary">Calculo de Pontos</dt>
                                    <dd>A pontuação será dada seguindo as "Regras de Pontuação", que serão calculádos até 24 horas após o fim da rodada. Os pontos serão apresentados de forma individual (por casa partida), totalizada por bolão e pontuação geral do site.</dd>
                                    <dt class="text-primary">Regras de Pontuação</dt>
                                    <dd>
                                        <ul>
                                            <li class="mb-sm">
                                                <h4 class="sem-margin text-secundary"><strong>Tempo Normal</strong></h4>
                                                <ul>
                                                    <li><strong><span class="text-primary">(50 Pontos)</span> Placar exato:</strong> O participante que acertar o placar da partida receberá essa pontuação;
                                                        <ul>
                                                            <li><strong>Exemplo</strong></li>
                                                            <li>Palpite: <span class="exp-success">Mandante 2</span> x <span class="exp-success">1 Visitante</span></li>
                                                            <li>Placar: Mandante 2 x 1 Visitante</li>
                                                        </ul>
                                                    </li>
                                                    <li><strong><span class="text-primary">(30 Pontos)</span> Placar de um lado:</strong> Levará esses pontos o participante que acertar número de gols de uma das equipes;
                                                        <ul>
                                                            <li><strong>Exemplo</strong></li>
                                                            <li>Palpite: <span class="exp-danger">Mandante 1</span> x <span class="exp-success">2 Visitante</span></li>
                                                            <li>Placar: Mandante 4 x 2 Visitante</li>
                                                        </ul>
                                                    </li>
                                                    <li><strong><span class="text-primary">(15 Pontos)</span> Vencedor/Empate:</strong> Será pontuado com esse valor o participante que acertar o resultado (vencedor ou empate) da partida;
                                                        <ul>
                                                            <li><strong>Exemplo</strong></li>
                                                            <li>Palpite: <span class="exp-success">Mandante</span> <span class="exp-danger">3</span> x <span class="exp-danger">1</span> <span class="exp-success">Visitante</span></li>
                                                            <li>Placar: Mandante 2 x 0 Visitante</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="mb-sm">
                                                <h4 class="sem-margin text-secundary"><strong>Disputa de Pênaltis</strong></h4>
                                                <ul>
                                                    <li class="alert alert-danger sem-margin"><strong>ATENÇÃO:</strong> A pontuação dos pênaltis <strong>NÃO</strong> é somada à pontuação do <strong>Tempo Normal</strong>, pontuação de Tempo Normal será <strong>IGNORADA</strong> para dar contagem para a pontuação de pênaltis. O palpite dos pênaltis <strong>NÃO</strong> é obrigatório</li>
                                                    <li><strong><span class="text-primary">(80 Pontos)</span> Conversões exatas:</strong> O participante que acertar exatamente as conversões de pênalti para ambos os lados;
                                                        <ul>
                                                            <li><strong>Exemplo</strong></li>
                                                            <li>Palpite: <span class="exp-success">Mandante 3</span> x <span class="exp-success">2 Visitante</span></li>
                                                            <li>Placar: Mandante 3 x 2 Visitante</li>
                                                        </ul>
                                                    </li>
                                                    <li><strong><span class="text-primary">(50 Pontos)</span> Conversões de um lado:</strong> Pontos dados para o participante que acertar as conversões de uma das equipes;
                                                        <ul>
                                                            <li><strong>Exemplo</strong></li>
                                                            <li>Palpite: <span class="exp-danger">Mandante 2</span> x <span class="exp-success">3 Visitante</span></li>
                                                            <li>Placar: Mandante 1 x 3 Visitante</li>
                                                        </ul>
                                                    </li>
                                                    <li><strong><span class="text-primary">(30 Pontos)</span> Vencedor:</strong> Será pontuado com esse valor o participante que acertar quem será o vencedor da disputa de pênaltis;
                                                        <ul>
                                                            <li><strong>Exemplo</strong></li>
                                                            <li>Palpite: <span class="exp-success">Mandante</span> <span class="exp-danger">3</span> x <span class="exp-danger">2</span> <span class="exp-success">Visitante</span></li>
                                                            <li>Placar: Mandante 5 x 4 Visitante</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="mb-sm">
                                                <h4 class="sem-margin text-secundary"><strong>Pontuação Especial</strong></h4>
                                                <ul>
                                                    <li class="alert alert-danger sem-margin"><strong>ATENÇÃO:</strong> A pontuação especial só é válida para placar de <strong>Tempo Normal</strong></li>
                                                    <li><strong><span class="text-primary">(70 Pontos)</span> Goleada exata:</strong> O participante que acertar exatamente o placar de uma goleada com diferença de <strong class="text-primary">4 gols</strong>;
                                                        <ul>
                                                            <li><strong>Exemplo</strong></li>
                                                            <li>Palpite: <span class="exp-success">Mandante 1</span> x <span class="exp-success">7 Visitante</span></li>
                                                            <li>Placar: Mandante 1 x 7 Visitante</li>
                                                        </ul>
                                                    </li>
                                                    <li><strong><span class="text-primary">(50 Pontos)</span> Placar do goleador:</strong> Será premiado com essa pontuação o participante que acertar o número exato de gols de uma equipe que <strong>APLICAR</strong> uma goleada com diferença de <strong class="text-primary">4 gols</strong>;
                                                        <ul>
                                                            <li><strong>Exemplo</strong></li>
                                                            <li>Palpite: <span class="exp-danger">Mandante 3</span> x <span class="exp-success">5 Visitante</span></li>
                                                            <li>Placar: Mandante 1 x 5 Visitante</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="regulamento-ranking">
                            <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#col-regulamento" href="#item-regulamento-ranking" aria-expanded="false" aria-controls="item-regulamento-ranking">
                                    Ranking
                                </a>
                            </h4>
                        </div>
                        <div id="item-regulamento-ranking" class="panel-collapse collapse" role="tabpanel" aria-labelledby="regulamento-ranking">
                            <div class="panel-body">
                                <dl class="lista-regulamento">
                                    <dt class="text-primary">Classificação no Bolão</dt>
                                    <dd>Todos os participantes terão 0 (zero) pontos ao entrar em um bolão mesmo que o bolão já esteja correndo a mais rodadas e os outros participantes já tenham saído do 0 (zero) um novo participante entrará com 0 (zero). Para não entrar em desvantagem ou entre em bolões recém criados ou crie o seu próprio. A classificação será organizada pela pontuação que os participantes conquistarem baseados nas "Regras de Pontuação".</dd>
                                    <dt class="text-primary">Classificação Geral</dt>
                                    <dd>Para a classificação geral será acumulado os pontos dos bolões no qual o participante concorreu ou estiver concorrendo, ou seja, ao fim do bolão a pontuação do participante continuará computada no ranking geral, mas essa pontuação não valerá na entrada de novos bolões, neste caso a regra anterior prevalecerá.</dd>
                                    <dd>Participantes que concorrem a mais de um bolão do mesmo campeonato seus pontos não serão somados e sim tirado a média, ou seja, se o participante está no 3 bolões de um mesmo campeonato e seus pontos são respectivamente 150, 100, 130 no ranking geral não será computado 380 pontos e sim 127 (não é computado número fracionário). Só é acumulado pontos de bolões de campeonatos distintos, seguindo o mesmo exemplo, se o terceiro bolão fosse de um campeonato diferente dos outros a pontuação que iria para o ranking geral seria 255 pontos.</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
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