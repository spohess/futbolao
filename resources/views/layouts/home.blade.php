<!DOCTYPE html>
<html lang="pt-br" ng-app="app">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="{{url('favicon.ico')}}">
    <title>{{get_titulo_site()}} | @yield('titulo-pagina')</title>
    <meta itemprop="description" name="description" content="{{get_descricao_site()}}">

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Dosis:400,700|Open+Sans">
    <link rel="stylesheet" href="{{ elixir('css/all.css') }}">
    <link rel="stylesheet" href="{{ elixir('css/app.css') }}">
    @yield('css-especifico')

    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body ng-controller="appController">
    <div id="conteudo">
        @yield('conteudo')
    </div>

    <script src="{{ elixir('js/all.js') }}"></script>
    @yield('js-especifico')
</body>
</html>
