@extends('layouts.admin')

@section('titulo-pagina')
Mnesagem
@endsection

@section('conteudo')
<div class="container">
    <div class="row">
        <div class="col-xs-24">
            <div id="avisoMensagem" class="alert @{{avisoMensagem.class}} alerta-oculto">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <div>@{{avisoMensagem.mensagem}}</div>
            </div>
        </div>

        <div class="col-xs-24 col-md-12 col-md-offset-6">
            <form name="formSalvaMensagem" method="post" accept-charset="utf-8" data-toggle="validator" role="form" ng-submit="saveMensagem()">
                <input type="hidden" name="_token" id="_token" ng-model="mensagem._token" ng-init="mensagem._token='{{csrf_token()}}'">
                <input type="hidden" name="id" ng-model="mensagem.id">
                <fieldset>
                    <legend>Nova Mensagem</legend>
                    <div class="form-group">
                        <label for="tipo" class="control-label">Tipo de Mensagem</label>
                        <select id="tipo" name="tipo" ng-model="mensagem.tipo" class="form-control limpa-form" required>
                            <option value="">Escolha um tipo</option>
                            <option value="info" class="text-info">Informação</option>
                            <option value="success" class="text-success">Sucesso</option>
                            <option value="warning" class="text-warning">Aviso</option>
                            <option value="danger" class="text-danger">Erro</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="titulo" class="control-label">Título</label>
                        <input type="text" name="titulo" id="titulo" ng-model="mensagem.titulo" class="form-control limpa-form" placeholder="Informe um título para a mensagem" required>
                    </div>

                    <div class="form-group">
                        <label for="mensagem" class="control-label">Mensagem</label>
                        <textarea type="text" name="mensagem" id="mensagem" ng-model="mensagem.mensagem" class="form-control limpa-form" rows="8" placeholder="Descreva uma mensagem" required></textarea>
                    </div>

                    <div class="form-group">
                        <button type="reset" class="btn btn-danger pull-left"><i class="fa fa-eraser"></i> Limpar</button>
                        <button type="submit" class="btn btn-primary pull-right" ng-disabled="formSalvaMensagem.$invalid"><i class="fa fa-save"></i> Salva</button>
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
                    <h2 class="text-primary sem-margin">Mensagem</h2>
                </div>
                <div class="col-xs-24 col-sm-18">
                    <dir-pagination-controls max-size="5" direction-links="true" boundary-links="true" pagination-id="idListaMensagens" class="pull-right sem-margin"></dir-pagination-controls>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-striped table-hover">
                    <thead class="container-fluid">
                        <tr class="row">
                            <th class="col-xs-1">Tipo</th>
                            <th class="col-xs-5">Título</th>
                            <th class="col-xs-16">Mensagem</th>
                            <th class="col-xs-2 text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody class="container-fluid">
                        <tr class="row @{{mensagem.arquivada_class}}" dir-paginate="mensagem in listaMensagens | itemsPerPage:20" pagination-id="idListaMensagens">
                            <td class="col-xs-1"><i class="fa fa-circle text-@{{mensagem.tipo}}"></i></td>
                            <td class="col-xs-5">@{{mensagem.titulo_curto}}</td>
                            <td class="col-xs-16">@{{mensagem.mensagem_curta}}</td>
                            <td class="col-xs-2 text-right">
                                &nbsp;<span class="btn btn-link" title="Ver" ng-click="abrirMensagem(mensagem)"><i class="fa fa-search text-success"></i></span>&nbsp;
                                &nbsp;<span class="btn btn-link" title="Editar" ng-click="editaMensagem(mensagem)"><i class="fa fa-pencil"></i></span>&nbsp;
                                &nbsp;<span class="btn btn-link" title="Arquivar" ng-click="arquivaMensagem(mensagem)"><i class="fa fa-archive text-danger"></i></span>&nbsp;
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
<div class="modal fade" id="mdDetalheMensagem" tabindex="-1" role="dialog" aria-labelledby="mdDetalheMensagemLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header modal-primary">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="mdDetalheMensagemLabel">Detalhe da Mensagem</h4>
            </div>
            <div class="modal-body">
                <div class="alert alert-@{{mensagemDetalhe.tipo}}" id="mensagemDetalhe-@{{mensagemDetalhe.id}}">
                    <div>
                        <h3 class="sem-margin"><span class="label label-@{{mensagemDetalhe.tipo}}">@{{mensagemDetalhe.titulo}}</span></h3>
                    </div>
                    <div class="text-justify">
                        <hr>
                        @{{mensagemDetalhe.mensagem}}
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary pull-right" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
@endsection

@section('js-especifico')
<script src="{{ elixir('js/all-admin_mensagem.js') }}"></script>
@endsection
