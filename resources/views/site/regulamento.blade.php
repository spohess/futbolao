@extends('layouts.site')

@section('titulo-pagina')
Regulamento
@endsection

@section('conteudo')
<div class="container">
    <div class="row">
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
