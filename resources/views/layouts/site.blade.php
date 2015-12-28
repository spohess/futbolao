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
                        <a class="navbar-brand" href="{{url('/')}}">PA</a>
                    </div>

                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            <li><a href="{{url('/')}}">Home</a></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#">API</a></li>
                            <li><a href="{{url('/#contato')}}">Contato</a></li>
                            <li><a href="{{url('/cadastro')}}">Cadastro</a></li>
                            <li class="active"><a href="{{url('/entrar')}}">Entrar</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="titulo">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xs-24 col-sm-12">
                            <h2>@yield('titulo-pagina')</h2>
                        </div>
                        <div class="col-xs-24 col-sm-12">
                            <div class="logo text-center hidden-xs">
                                {!! file_get_contents(public_path() . "/img/logo.svg") !!}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main id="main">
            @yield('conteudo')
        </main>
        <footer id="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-8">
                        <ul class="social">
                            <li><a href="{{get_link_twitter()}}" title="Twitter" target="_blank"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="{{get_link_facebook()}}" title="Facebook" target="_blank"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="mailto:contato@palpiteirosanonimos.com.br?subject=Contato pelo Site" title="E-mail" target="_blank"><i class="fa fa-envelope"></i></a></li>
                        </ul>
                    </div>
                    <div class="col-xs-16 text-right">
                        <small class="hidden-xs">{{get_copyright_site()}}</small>
                        <small class="hidden-sm hidden-md hidden-lg">{{get_copyright_small_site()}}</small>
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
