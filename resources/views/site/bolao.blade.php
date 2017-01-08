@extends('layouts.arena')

@section('titulo-pagina')
Bolão
@endsection

@section('conteudo')
<div class="container" ng-init="onLoadBolao()">
    <input type="hidden" name="id_bolao" id="id_bolao" value="{{$id}}">
    <div class="area-bolao">
        <div class="row">
            <div class="col-xs-12 col-sm-3">
                <div class="avatar">
                    <img src="{{$avatar}}" alt="Avatar">
                </div>
            </div>
            <div class="col-xs-24 col-sm-10">
                <div class="dados">
                    <h3 class="sem-margin">{{$bolaoNome}}</h3>
                    <h3><small>{{$competicao}}</small></h3>
                    <table class="table">
                        <tbody>
                            <tr>
                                <td>Participantes</td>
                                <td>{{$qtdParticipantes}}</td>
                            </tr>
                            <tr>
                                <td>Permissão</td>
                                <td>{{title_case($permissao)}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-xs-24 col-sm-11">
                <div class="well">{{$bolaoDesc}}</div>
            </div>
        </div>
    </div>
    <div class="rows">
        <div class="col-xs-24">
            <h2 class="text-primary text-center">Classificações</h2>
        </div>
        <div class="col-xs-24">
            <hr>
        </div>
        <div class="col-xs-24 col-md-8">
            <h3 class="text-secundary">Rodada</h3>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Participantes</th>
                        <th class="text-right">Pontos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="participante in classificacaoRodada" title="@{{participante.nome}}">
                        <td>@{{participante.login}}</td>
                        <td class="text-right">@{{participante.pontos}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-xs-24 col-md-8">
            <h3 class="text-secundary">Mensal</h3>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Participantes</th>
                        <th class="text-right">Pontos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="participante in classificacaoMensal" title="@{{participante.nome}}">
                        <td>@{{participante.login}}</td>
                        <td class="text-right">@{{participante.pontos}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-xs-24 col-md-8">
            <h3 class="text-secundary">Geral</h3>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Participantes</th>
                        <th class="text-right">Pontos</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($participantes as $participante)
                        <tr title="{{$participante['nome']}}">
                            <td>{{$participante['login']}}</td>
                            <td class="text-right">{{$participante['pontos']}}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>
@endsection

@section('modais-sistema')

@endsection

@section('css-especifico')
<link rel="stylesheet" href="{{ elixir('css/bolao.css') }}">
@endsection

@section('js-especifico')
<script src="{{ elixir('js/all-arena.js') }}"></script>
@endsection
