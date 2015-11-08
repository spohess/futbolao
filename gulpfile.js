var elixir = require('laravel-elixir');

// Arquivos CSS
elixir(function(mix) {
    mix.copy('resources/assets/lib/bootstrap-custom/_variables.scss', 'node_modules/bootstrap-sass/assets/stylesheets/bootstrap')
       .copy('resources/assets/lib/bootstrap-custom/_bootstrap.scss', 'node_modules/bootstrap-sass/assets/stylesheets')
       .copy('resources/assets/lib/bootstrap-datepicker/bootstrap-datepicker.css', 'resources/assets/css');
});

elixir(function(mix) {
    mix.sass(['lib.scss'],"resources/assets/css/lib.css");
});

elixir(function(mix) {
    mix.styles([
        'lib.css',
        'bootstrap-datepicker.css'
    ]);
});

elixir(function(mix) {
    mix.sass('app.scss');
});

// Arquivos JS

elixir(function(mix) {
    mix.copy('node_modules/jquery/dist/jquery.min.js', 'resources/assets/js')
       .copy('node_modules/angular/angular.min.js', 'resources/assets/js')
       .copy('node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js', 'resources/assets/js')
       .copy('resources/assets/lib/bootstrap-datepicker/bootstrap-datepicker.js', 'resources/assets/js')
       .copy('resources/assets/lib/bootstrap-validator/js/validator.js', 'resources/assets/js')
       .copy('resources/assets/lib/angular-ext-libs/dir-pagination.js', 'resources/assets/js');
});

elixir(function(mix) {
    mix.babel([
        'jquery.min.js',
        'angular.min.js',
        'bootstrap.min.js',
        'bootstrap-datepicker.js',
        'validator.js',
        'dir-pagination.js',
        'app.js',
        'site.js'
    ]);
});

elixir(function(mix) {
    mix.scripts(['auth.js'], 'public/js/all-auth.js');
});

elixir(function(mix) {
    mix.version([
        'public/css/*.css',
        'public/js/*.js',
        'public/img/*.jpg',
        'public/img/*.png'
    ]);
});

elixir(function(mix) {
    mix.copy('resources/assets/lib/font-awesome/fonts', 'public/build/fonts');
});