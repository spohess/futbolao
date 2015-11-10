@extends('layouts.site')

@section('titulo-pagina')
Informações do site
@endsection

@section('conteudo')
<div class="container">
    <div class="row">
        <div class="col-xs-24 col-md-14 col-md-offset-5 text-center">
            <h1 class="text-primary">{{$titulo}}</h1>
            <div class="alert alert-warning">
                <p class="lead">{{$texto}}</p>
            </div>
            <hr>
            <div>
                <p class="text-secundary">Se tiver problemas ou dúvidas entre em contato conosco pelo site ou pelo e-mail: {{getEmailContato()}}</p>
            </div>
            <div class="text-right">
                <h3 class="text-primary">Equipe PA</h3>
            </div>
        </div>
    </div>
</div>
@endsection

@section('js-especifico')
<script src="{{ elixir('js/all-auth.js') }}"></script>
@endsection