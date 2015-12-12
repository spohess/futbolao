<!DOCTYPE html>
<html lang="pt-br" ng-app="app">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="{{url('favicon.ico')}}">
    <title>{{getTituloSite()}} | @yield('titulo-pagina')</title>

    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Montserrat|Open+Sans+Condensed:300,300italic,700'>
    <link rel="stylesheet" href="{{ elixir('css/all.css') }}">
    <link rel="stylesheet" href="{{ elixir('css/app.css') }}">
    @yield('css-especifico')

    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body ng-controller="sistemaController">
    <div id="conteudo">
        <header id="header">
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="{{url('/arena')}}">Arena</a>
                    </div>

                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="{{url('/sair')}}">Sair</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main id="main">
            @yield('conteudo')
        </main>
        <footer id="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-8">
                        <ul class="social">
                            <li><a href="{{getLinkTwitter()}}" title="Twitter" target="_blank"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="{{getLinkFacebook()}}" title="Facebook" target="_blank"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="mailto:contato@palpiteirosanonimos.com.br?subject=Contato pelo Site" title="E-mail" target="_blank"><i class="fa fa-envelope"></i></a></li>
                        </ul>
                    </div>
                    <div class="col-xs-16 text-right">
                        <small class="hidden-xs">{{getCopyrightSite()}}</small>
                        <small class="hidden-sm hidden-md hidden-lg">{{getCopyrightSmallSite()}}</small>
                    </div>
                </div>
            </div>
        </footer>
    </div>

    <div id="modais-sistema">
        @yield('modais-sistema')
    </div>

    <script src="{{ elixir('js/all.js') }}"></script>
    @yield('js-especifico')
</body>
</html>