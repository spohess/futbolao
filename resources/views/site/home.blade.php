@extends('layouts.home')

@section('titulo-pagina')
Home
@endsection

@section('conteudo')
<div id="fb-root" class="hide"></div>
<header class="hd-principal">
    <a href="{{url('/')}}">
        <img src="img/logo.svg" class="logo-header hidden-xs">
    </a>
    <nav class="clearfix menu-principal hidden-xs">
        <ul class="nav nav-pills pull-right">
            <li><a href="{{url('/regulamento')}}">Regulamento</a></li>
            <li><a href="{{url('/#contato')}}">Contato</a></li>
            @if (!Auth::check())
            <li><a href="{{url('/cadastro')}}" title="Cadastrar">Cadastrar</a></li>
            <li class="active"><a href="{{url('/entrar')}}">Entrar</a></li>
            @else
            <li class="active"><a href="{{url('/arena')}}">Arena</a></li>
            @endif
        </ul>
    </nav>
    <nav class="navbar navbar-inverse visible-xs">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#mobile-menu" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">
                    <img alt="FutBolão" src="img/icone.svg" class="brand-img">
                </a>
            </div>
            <div class="collapse navbar-collapse" id="mobile-menu">
                <ul class="nav navbar-nav">
                    <li><a href="{{url('/regulamento')}}">Regulamento</a></li>
                    <li><a href="{{url('/#contato')}}">Contato</a></li>
                    <li><a href="{{url('/cadastro')}}" title="Cadastrar">Cadastrar</a></li>
                    @if (Auth::check())
                    <li class="active"><a href="{{url('/arena')}}">Arena</a></li>
                    @else
                    <li class="active"><a href="{{url('/entrar')}}">Entrar</a></li>
                    @endif
                </ul>
            </div>
        </div>
    </nav>
    <div class="hd-bloco container">
        <div class="row">
            <div class="col-xs-24">
                <h1 class="titulo text-right"><em>FutBolão</em></h1>
                <p class="texto text-center">Divirta-se dando os seus palpites nas partidas dos maiores campeonatos do país. Torça mais ainda para o seu time ganhar e para os seus maiores adversários perderem. Explore suas habilidades e dê umas risadas daquele seu amigo que não sabe de nada. Mas faça seu cadastro logo, antes que a CBF acabe com o nosso futebol e seja tarde demais!</p>
                <blockquote>
                    <p>"Nenhuma grande descoberta foi feita sem um palpite ousado."</p>
                    <footer>Já dizia <cite title="Isaac Newton">Isaac Newton</cite></footer>
                </blockquote>
            </div>
        </div>
    </div>
</header>
<main class="site">
    <div class="container">
        <div class="row tecnico">
            <div class="col-xs-24 col-md-12 img-tecnico">
                <img src="img/tecnico.png" alt="Técnico" class="img-responsive">
            </div>
            <div class="col-xs-24 col-md-12">
                <h1 class="titulo-funcionalidade"><em>Seja o Técnico</em></h1>
            </div>
            <div class="clearfix"></div>
            <div class="col-xs-24 col-md-20 col-md-offset-2">
                <p class="text-center">Criando um bolão você se torna um técnico e além de participar dele como qualquer outro integrante, você tem a vantagem de <strong><s>nunca sair perdendo</s></strong>!!!</p>
                <p class="text-center destaque"><s>Como pode isso? É bem simples, você nunca perde porque todo lucro arrecadado no seu bolão será dividido com você! É, você entendeu bem, todo lucro será dividido com você, além de concorrer ao prêmio como qualquer outro integrante, ao final do bolão, mesmo não sendo o maior pontuador você sai com <strong>dinheiro no bolso</strong>!</s></p>
                <p class="text-center">Não perca tempo! Seja um técnico e escale a maior quantidade de integrantes que conseguir!</p>
            </div>
            <div class="col-xs-24 text-right">
                <br>
                <a href="{{url('/regulamento')}}" title="Regras">Vejas as Regras</a>
                <hr>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-24">
                <h1 class="titulo-funcionalidade simples vermelho">Categorias de Bolões</h1>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="row">
            <div class="fundo-gramado">
                <div class="tipo clearfix">
                    <div class="col-xs-24 col-md-10">
                        <div class="box-tipo esq">
                            <h2><i class="glyphicon glyphicon-credit-card"></i> ALL IN <small><s>Bolões de aposta</s></small></h2>
                            <p><s>Para você confia no seu talento, para você que está sempre com sorte, para você que acha que hoje é o seu dia ou até mesmo para você que só quer tentar a sorte! Sua opção são os bolões de aposta, dê seus palpites e invista neles!</s></p>
                        </div>
                    </div>
                    <div class="col-xs-24 col-md-4">
                        <img src="img/icone.svg" alt="FutBolão">
                    </div>
                    <div class="col-xs-24 col-md-10">
                        <div class="box-tipo dir">
                            <h2><small>Só por diversão</small> 4Fun <i class="glyphicon glyphicon-sunglasses"></i></h2>
                            <p>Você adora dar seus palpites, mas é daqueles que não gosta de apostas? Tudo bem, também temos um lugar para você aqui!</p>
                            <p>Participe dos bolões 4Fun, feitos para vocês que só querem se tivertir sem preocupações</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-xs-24">
                <h1 class="titulo-funcionalidade vermelho">Permissões de Bolões</h1>
            </div>
        </div>
        <div class="row">
            <div class="container-permissao clearfix">
                <div class="col-xs-24 col-md-8">
                    <div class="box-permissao publico">
                        <img src="img/publico.svg" alt="Público">
                        <h2>Público</h2>
                        <p>Esse é o bolão da geral, qualquer um pode ser integrante, independente se é All In ou 4Fun, todos são bem vindos!</p>
                    </div>
                </div>
                <div class="col-xs-24 col-md-8">
                    <div class="box-permissao moderado">
                        <img src="img/moderado.svg" alt="Moderado">
                        <h2>Moderado</h2>
                        <p>Você da uma espiada vê que está para você, mas não é tão fácil assim, o técnico ainda vai precisar autorizar sua entrada ;)</p>
                    </div>
                </div>
                <div class="col-xs-24 col-md-8">
                    <div class="box-permissao privado">
                        <img src="img/privado.svg" alt="Privado">
                        <h2>Privado</h2>
                        <p>Clube fechado amigo! Esse você só vê da porta quem está lá, mas só pode entrar se receber um convite do técnico!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
<footer id="contato" class="rodape">
    <div class="container">
        <div class="row">
            <div class="col-xs-24 col-md-4">
                <ul class="nav nav-pills nav-stacked">
                    <li><a href="{{url('/regulamento')}}">Regulamento</a></li>
                    @if (!Auth::check())
                    <li><a href="{{url('/cadastro')}}" title="Cadastrar">Cadastrar</a></li>
                    <li class="active"><a href="{{url('/entrar')}}">Entrar</a></li>
                    @else
                    <li class="active"><a href="{{url('/arena')}}">Arena</a></li>
                    @endif
                    <li><hr></li>
                    <li class="mb-sm"><div class="fb-share-button" data-href="http://futbolao.com" data-layout="button"></div></li>
                    <li class="mb-sm"><a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=FutBol%C3%A3o%20seu%20site%20de%20%23bol%C3%A3o%20definitivo!%20Divirta-se%20dando%20seus%20pitacos%20%40fut_bolao">Tweet</a></li>
                </ul>
            </div>
            <div class="col-xs-24 col-md-6">
                <form name="formContato" method="post" accept-charset="utf-8" class="row" data-toggle="validator" role="form" ng-submit="enviaContato()">
                    {{-- <input type="hidden" name="_token" ng-model="contato._token" ng-init="contato._token='{{csrf_token()}}'"> --}}
                    <fieldset class="col-xs-24">
                        <legend>Contato</legend>
                        <p>O formulário de contato foi desativado, para entrar em contato envie um e-mail para <a href="mailto:contato@futbolao.com?subject=Suporte FutBolão">contato@futbolao.com</a></p>
                        {{-- <div id="avisoContatoSucesso" class="alert alert-success alerta-oculto">
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div>Sua mensagem foi enviada com sucesso, nós retornaremos em breve.</div>
                        </div>
                        <div class="form-group">
                            <input type="text" name="nomeContato" id="nomeContato" ng-model="contato.nomeContato" placeholder="Nome" class="form-control" required data-error="Informe o seu nome">
                            <span class="help-block with-errors"></span>
                        </div>
                        <div class="form-group">
                            <input type="email" name="emailContato" id="emailContato" ng-model="contato.emailContato" placeholder="E-mail" class="form-control" required data-error="Informe um e-mail válido">
                            <span class="help-block with-errors"></span>
                        </div>
                        <div class="form-group">
                            <select name="assuntoContato" id="assuntoContato" ng-model="contato.assuntoContato" class="form-control" required data-error="Escolha um dos assuntos da lista">
                                <option value="">Assunto</option>
                                <option value="Dúvidas">Dúvidas</option>
                                <option value="Elogios">Elogios</option>
                                <option value="Reclamações">Reclamações</option>
                                <option value="Sugestões">Sugestões</option>
                                <option value="Outros">Outros</option>
                            </select>
                            <span class="help-block with-errors"></span>
                        </div>
                        <div class="form-group">
                            <textarea name="mensagemContato" id="mensagemContato" ng-model="contato.mensagemContato" placeholder="Mensagem" class="form-control" rows="7" required data-error="Digite sua mensagem o mais detalhada possível"></textarea>
                            <span class="help-block with-errors"></span>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-default pull-right" ng-disabled="formContato.$invalid"><i id="iconeBtnEnvia" class="fa fa-send"></i> Enviar</button>
                        </div> --}}
                    </fieldset>
                </form>
            </div>
            <div class="col-xs-24 col-md-7">
                <div class="fb-page" data-href="https://www.facebook.com/futbolao" data-tabs="timeline" data-height="450px" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                    <div class="fb-xfbml-parse-ignore">
                        <blockquote cite="https://www.facebook.com/futbolao">
                            <a href="https://www.facebook.com/futbolao">FutBolão</a>
                        </blockquote>
                    </div>
                </div>
            </div>
            <div class="col-xs-24 col-md-7">
                <a class="twitter-timeline" href="https://twitter.com/fut_bolao" data-widget-id="686613167531802625">Tweets by @fut_bolao</a>
            </div>
        </div>
    </div>
    <div class="copyright">
        <small>{{get_copyright_site()}}</small>
    </div>
</footer>
@stop

@section('js-especifico')
<script src="{{ elixir('js/all-site.js') }}"></script>
<script>
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script>
<script>
window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0], t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
    t._e = [];
    t.ready = function(f) {
        t._e.push(f);
    };
    return t;
}(document, "script", "twitter-wjs"));
</script>
@endsection
