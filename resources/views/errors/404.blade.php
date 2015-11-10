@extends('layouts.site')

@section('titulo-pagina')
Página não encontrada
@endsection

@section('conteudo')
<div class="container">
    <div class="row">
        <div class="col-xs-24 text-center">
            <h1 id="erro-404">404</h1>
            <h2 class="text-danger">Opsss... esse palpite não foi bom!</h2>
            <hr>
            <p>A página que procura não existe ou não está mais no ar, volte ao <a href="{{url('/')}}" title="início">início</a> e tente novamente.</p>
        </div>
    </div>
</div>
@endsection