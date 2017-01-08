process.env.DISABLE_NOTIFIER = true;
var elixir = require('laravel-elixir');

// Arquivos CSS
elixir(function(mix) {
    mix.copy('resources/assets/lib/bootstrap-custom/_variables.scss', 'node_modules/bootstrap-sass/assets/stylesheets/bootstrap')
        .copy('resources/assets/lib/bootstrap-datepicker/bootstrap-datetimepicker.css', 'resources/assets/css');
});

elixir(function(mix) {
    mix.sass(['lib.scss'],"resources/assets/css/lib.css");
});

elixir(function(mix) {
    mix.styles([
        'lib.css',
        'bootstrap-datetimepicker.css'
        ]);
});

elixir(function(mix) {
    mix.sass('app.scss');
});

elixir(function(mix) {
    mix.sass('arena.scss');
});

elixir(function(mix) {
    mix.sass('bolao.scss');
});

elixir(function(mix) {
    mix.sass('palpite.scss');
});

elixir(function(mix) {
    mix.sass('admin.scss');
});

// Arquivos JS

elixir(function(mix) {
    mix.copy('node_modules/jquery/dist/jquery.min.js', 'resources/assets/js')
        .copy('node_modules/angular/angular.min.js', 'resources/assets/js')
        .copy('node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js', 'resources/assets/js')
        .copy('resources/assets/lib/bootstrap-datepicker/bootstrap-datetimepicker.js', 'resources/assets/js')
        .copy('resources/assets/lib/bootstrap-datepicker/bootstrap-datetimepicker.pt-BR.js', 'resources/assets/js')
        .copy('resources/assets/lib/bootstrap-validator/js/validator.js', 'resources/assets/js')
        .copy('resources/assets/lib/angular-ext-libs/dir-pagination.js', 'resources/assets/js');
});

elixir(function(mix) {
    mix.babel([
        'jquery.min.js',
        'angular.min.js',
        'functions.js',
        'bootstrap.min.js',
        'bootstrap-datetimepicker.js',
        'bootstrap-datetimepicker.pt-BR.js',
        'validator.js',
        'dir-pagination.js',
        'app.js'
    ]);
});

elixir(function(mix) {
    mix.scripts(['site.js'], 'public/js/all-site.js')
        .scripts(['auth.js'], 'public/js/all-auth.js')
        .scripts(['usuario.js'], 'public/js/all-usuario.js')
        .scripts(['arena.js'], 'public/js/all-arena.js')
        .scripts(['admin.js'], 'public/js/all-admin.js')
        .scripts(['admin_estadio.js'], 'public/js/all-admin_estadio.js')
        .scripts(['admin_equipe.js'], 'public/js/all-admin_equipe.js')
        .scripts(['admin_competicao.js'], 'public/js/all-admin_competicao.js')
        .scripts(['admin_partida.js'], 'public/js/all-admin_partida.js')
        .scripts(['admin_resultado.js'], 'public/js/all-admin_resultado.js');
});

elixir(function(mix) {
    mix.version([
        'public/css/*.css',
        'public/js/*.js'
    ]);
});

elixir(function(mix) {
    mix.copy('resources/assets/lib/font-awesome/fonts', 'public/build/fonts')
       .copy('node_modules/bootstrap-sass/assets/fonts', 'public/build/fonts');
});