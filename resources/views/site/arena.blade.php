@extends('layouts.arena')

@section('titulo-pagina')
Arena
@endsection

@section('conteudo')
<div class="container">
    <div class="area-usuario">
        <div class="row">
            <div class="col-xs-12 col-sm-3">
                <div class="avatar">
                    {!! file_get_contents(public_path() . "/img/avatar-homem.svg") !!}
                </div>
            </div>
            <div class="col-xs-24 col-sm-10">
                <div class="dados">
                    <h3>{{$nome}} <small>{{$usuario}}</small></h3>
                    <table class="table">
                        <tbody>
                            <tr>
                                <td>Colocação geral</td>
                                <td>1º</td>
                            </tr>
                            <tr>
                                <td>Bolões</td>
                                <td>3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-xs-12 col-sm-11 menu-perfil">
                <button type="button" class="btn btn-primary pull-right">Meus Dados</button>
            </div>
        </div>
    </div>
    <div class="bolao-pessoal">
        <div class="row">
            <div class="col-xs-24">
                <h2 class="text-primary">Meus Bolões <small>bolões que participo ou sou técnico</small></h2>
                <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-search"></i></span>
                    <input type="text" id="pessoalFiltro" name="pessoalFiltro" class="form-control" ng-model="pessoalFiltro" placeholder="Filtro de bolão (digite para pesquisar)">
                </div>
                <small>Procure por nome, quantidade, téctnico, público, moderado ou qualquer outra informação sobre o bolão que você possuir</small>
                <hr>
                <div class="table-responsive">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th class="text-center">#</th>
                                <th>Bolão</th>
                                <th>Técnico</th>
                                <th class="text-center">Participantes</th>
                                <th class="text-center">Pontuação</th>
                                <th class="text-center">Ver</th>
                            </tr>
                        </thead>
                        <tbody id="lista-questionarios" class="row">
                            <tr id="carregaMeusBoloes">
                                <td colspan="6" class="text-center"><i class="fa fa-refresh fa-spin"></i> Carregando informaçõçes</td>
                            </tr>
                            <tr id="erroMeusBoloes" class="soft-hide">
                                <td colspan="6" class="text-center"><h3 class="alert alert-warning">Não foi possível carregar os dados</h3></td>
                            </tr>
                            <tr id="vazioMeusBoloes" class="soft-hide">
                                <td colspan="6" class="text-center"><h3 class="alert alert-info">Não há informações para serem carregadas</h3></td>
                            </tr>
                            <tr dir-paginate="meuBolao in meusBoloes | filter:pessoalFiltro | itemsPerPage:pessoalLimite" pagination-id="idListaPessoalBolao">
                                <td class="text-center text-success" ng-if="meuBolao.permissao == 'publico'"><i class="fa fa-unlock-alt"></i></td>
                                <td class="text-center text-warning" ng-if="meuBolao.permissao == 'moderado'"><i class="fa fa-key"></i></td>
                                <td class="text-center text-danger" ng-if="meuBolao.permissao == 'privado'"><i class="fa fa-lock"></i></td>
                                <td><a href="" data-target="@{{meuBolao.id}}" ng-click="carregaDetalheBolao(meuBolao)">@{{meuBolao.nome}}</a></td>
                                <td>@{{meuBolao.nomeTecnico}} <small class="text-primary">@{{meuBolao.loginTecnico}}</small></td>
                                <td class="text-center">@{{meuBolao.participantes}}</td>
                                <td class="text-center">@{{meuBolao.pontuacao}}</td>
                                <td class="text-center"><a href="" data-target="@{{meuBolao.id}}" ng-click="carregaDetalheBolao(meuBolao)"><i class="fa fa-search"></i></a></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="2">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-list-ol"></i></span>
                                        <select id="pessoalLimite" name="" class="form-control" min="1" ng-model="pessoalLimite" ng-options="item.id as item.valor for item in limitesList"></select>
                                    </div>
                                </td>
                                <td colspan="4">
                                    <dir-pagination-controls max-size="5" direction-links="true" boundary-links="true" pagination-id="idListaPessoalBolao" class="pull-right sem-margin"></dir-pagination-controls>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="bolao-geral">
        <div class="row">
            <div class="col-xs-24 col-sm-19 col-md-21">
                <h2 class="text-primary">Todos os Bolões <small>bolões criados no site</small></h2>
            </div>
            <div class="col-xs-24 col-sm-5 col-md-3">
                <button type="button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#mdNovoBolao">Cria Bolão</button>
            </div>
            <div class="col-xs-24">
                <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-search"></i></span>
                    <input type="text" id="geralFiltro" name="geralFiltro" class="form-control" ng-model="geralFiltro" placeholder="Filtro de bolão (digite para pesquisar)">
                </div>
                <small>Procure por nome, quantidade, téctnico, público, moderado ou qualquer outra informação sobre o bolão que você possuir</small>
                <hr>
                <div class="table-responsive">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th class="text-center">#</th>
                                <th>Bolão</th>
                                <th>Técnico</th>
                                <th class="text-center">Participantes</th>
                                <th class="text-center">Ver</th>
                            </tr>
                        </thead>
                        <tbody id="lista-questionarios" class="row">
                            <tr id="carregaTodosBoloes">
                                <td colspan="6" class="text-center"><i class="fa fa-refresh fa-spin"></i> Carregando informaçõçes</td>
                            </tr>
                            <tr id="erroTodosBoloes" class="soft-hide">
                                <td colspan="6" class="text-center"><h3 class="alert alert-warning">Não foi possível carregar os dados</h3></td>
                            </tr>
                            <tr id="vazioTodosBoloes" class="soft-hide">
                                <td colspan="6" class="text-center"><h3 class="alert alert-info">Não há informações para serem carregadas</h3></td>
                            </tr>
                            <tr dir-paginate="itemBolao in todosBoloes | filter:geralFiltro | itemsPerPage:geralLimite" pagination-id="idListaGeralBolao">
                                <td class="text-center text-success" ng-if="itemBolao.permissao == 'publico'"><i class="fa fa-unlock-alt"></i></td>
                                <td class="text-center text-warning" ng-if="itemBolao.permissao == 'moderado'"><i class="fa fa-key"></i></td>
                                <td class="text-center text-danger" ng-if="itemBolao.permissao == 'privado'"><i class="fa fa-lock"></i></td>
                                <td><a href="" data-target="@{{itemBolao.id}}" ng-click="carregaDetalheBolao(itemBolao)">@{{itemBolao.nome}}</a></td>
                                <td>@{{itemBolao.nomeTecnico}} <small class="text-primary">@{{itemBolao.loginTecnico}}</small></td>
                                <td class="text-center">@{{itemBolao.participantes}}</td>
                                <td class="text-center"><a href="" data-target="@{{itemBolao.id}}" ng-click="carregaDetalheBolao(itemBolao)"><i class="fa fa-search"></i></a></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="2">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-list-ol"></i></span>
                                        <select id="geralLimite" name="" class="form-control" min="1" ng-model="geralLimite" ng-options="item.id as item.valor for item in limitesList"></select>
                                    </div>
                                </td>
                                <td colspan="4">
                                    <dir-pagination-controls max-size="5" direction-links="true" boundary-links="true" pagination-id="idListaGeralBolao" class="pull-right sem-margin"></dir-pagination-controls>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('modais-sistema')
<div class="modal fade" id="mdDetalheBolao" tabindex="-1" role="dialog" aria-labelledby="mdDetalheBolaoLabel">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header modal-primary">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="mdDetalheBolaoLabel">Detalhe Bolão: @{{detalheBolao.nome}}</h4>
            </div>
            <div class="modal-body">
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="mdNovoBolao" tabindex="-1" role="dialog" aria-labelledby="mdNovoBolaoLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header modal-primary">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="mdNovoBolaoLabel">Novo Bolão</h4>
            </div>
            <form id="formNovoBolao" name="formNovoBolao" method="post" ng-submit="gravaNovoBolao()" data-toggle="validator" role="form">
                <input type="hidden" name="_token" ng-model="novoBolao._token" value="" ng-init="novoBolao._token='{{ csrf_token() }}'">
                <div class="modal-body">
                    <div id="avisoCriaErro" class="alert alert-danger alerta-oculto">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div>Não foi possível criar o bolão, tente novamente ou entre em contato se o problema persistir.</div>
                    </div>
                    <div id="avisoCriaSucesso" class="alert alert-success alerta-oculto">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div>Bolão criado com sucesso.</div>
                    </div>
                    <div class="form-group">
                        <label for="nome" class="control-label">Nome do Bolão</label>
                        <input type="text" id="nome" name="nome" ng-model="novoBolao.nome" class="form-control" placeholder="Informe o nome do bolão" required>
                    </div>
                    <div class="form-group">
                        <label for="descricao" class="control-label">Descrição do Bolão</label>
                        <textarea id="descricao" name="descricao" ng-model="novoBolao.descricao" class="form-control" placeholder="Dê uma descrição para este bolão" rows="5" required></textarea>
                    </div>
                    <div class="container-fluid">
                        <div class="row text-center">
                            <div class="form-group col-xs-24 col-md-8">
                                <label for="permissao-publico" class="control-label text-success"><input type="radio" id="permissao-publico" name="permissao" ng-model="novoBolao.permissao" value="publico" required> <i class="fa fa-unlock-alt"></i> Público</label>
                            </div>
                            <div class="form-group col-xs-24 col-md-8">
                                <label for="permissao-moderado" class="control-label text-warning"><input type="radio" id="permissao-moderado" name="permissao" ng-model="novoBolao.permissao" value="moderado" required> <i class="fa fa-key"></i> Moderado</label>
                            </div>
                            <div class="form-group col-xs-24 col-md-8">
                                <label for="permissao-privado" class="control-label text-danger"><input type="radio" id="permissao-privado" name="permissao" ng-model="novoBolao.permissao" value="privado" required> <i class="fa fa-lock"></i> Privado</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger pull-left" data-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-primary" ng-disabled="formNovoBolao.$invalid"><i id="iconeBtnCria" class="fa fa-plus"></i> Criar</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection

@section('css-especifico')
<link rel="stylesheet" href="{{ elixir('css/arena.css') }}">
@endsection

@section('js-especifico')
<script src="{{ elixir('js/all-arena.js') }}"></script>
@endsection
