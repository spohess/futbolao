@extends('layouts.site')

@section('titulo-pagina')
Só para autorizados
@endsection

@section('conteudo')
<div class="container">
    <div class="row">
        <div class="col-xs-24 text-center">
            <h1 class="text-primary"><strong>Sem Permissão</strong></h1>
            <h3 class="text-danger">Opsss... você não está indo para um caminho bom!</h3>
            <hr>
            <p>A página que está tentando acessar é só para autorizados, volte ao <a href="{{url('/')}}" title="início">início</a> e tente novamente.</p>
        </div>
    </div>
</div>
@endsection
