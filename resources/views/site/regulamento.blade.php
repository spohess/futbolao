@extends('layouts.site')

@section('titulo-pagina')
Regulamento
@endsection

@section('conteudo')
<div class="container">
    <div class="row">
        <div class="col-xs-24 col-md-18 col-md-offset-3">
            <fieldset class="col-xs-24">
                <legend id="sobre">Sobre</legend>
                <p>O FutBolão é um site para gerenciamento de bolões, onde você pode criar bolões para a sua galera ou particiar de um bolão publico qualquer.</p>
                <p>O site <strong>NÃO</strong> faz transações financeiras nem gestão de valores. O FutBolão se encarrega somente em calcular os resultados, raquear participantes, informar resultados e itens relacionado a partidas de futebol.</p>
                <p>Existe um projeto para que haja gerenaciamento financeiro onde não só o FutBolão lucre com isso, mas qualquer participante também, mas é preciso que os jogos sejam legalizados no país, enquanto isso o site continuará gerenciando somente pontuação e resultados.</p>
            </fieldset>
        </div>
        <div class="col-xs-24 col-md-18 col-md-offset-3">
            @include('subview.regulamento')
        </div>
    </div>
</div>
@endsection

@section('css-especifico')
<link rel="stylesheet" href="{{ elixir('css/palpite.css') }}">
@endsection

@section('js-especifico')
<script src="{{ elixir('js/all-auth.js') }}"></script>
@endsection
