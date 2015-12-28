@extends('layouts.arena')

@section('titulo-pagina')
Pontos
@endsection

@section('conteudo')
<div class="container-fluid" ng-init="onLoadPonto()">
    <div class="row">
        <div class="col-xs-24 col-md-12">
            <h3 class="text-primary">Rodada Atual</h3>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th class="text-center" colspan="4">Resultado</th>
                        <th class="text-center" colspan="4">Palpite</th>
                        <th class="text-center" rowspan="3">Pontos</th>
                    </tr>
                    <tr>
                        <th class="text-center" colspan="2">Placar</th>
                        <th class="text-center" colspan="2">Pênalti</th>
                        <th class="text-center" colspan="2">Placar</th>
                        <th class="text-center" colspan="2">Pênalti</th>
                    </tr>
                    <tr>
                        <th class="text-center" title="Mandante">MDT</th>
                        <th class="text-center" title="Visitante">VST</th>
                        <th class="text-center" title="Mandante">MDT</th>
                        <th class="text-center" title="Visitante">VST</th>
                        <th class="text-center" title="Mandante">MDT</th>
                        <th class="text-center" title="Visitante">VST</th>
                        <th class="text-center" title="Mandante">MDT</th>
                        <th class="text-center" title="Visitante">VST</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-xs-24 col-md-12">
            <h3 class="text-primary">Histórico</h3>
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

@section('css-especifico')
<link rel="stylesheet" href="{{ elixir('css/palpite.css') }}">
@endsection

@section('js-especifico')
<script src="{{ elixir('js/all-arena.js') }}"></script>
@endsection
