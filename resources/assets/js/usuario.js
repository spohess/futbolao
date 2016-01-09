function fnSistemaController($scope, $http) {

    $scope.validaEmail = function(){
        if( $scope.formDadosUsuario.email.$invalid ){
            return false;
        }

        angular.element(".aviso-email").hide();
        $http.post('/usuario/validaemail', $scope.usuario)
        .success(function(dados){
            if( dados.estado == 'invalido' ){
                angular.element(".aviso-email").show();
                $scope.usuario.emailValido = 'invalido';
            } else {
                $scope.usuario.emailValido = 'valido';
            }
        })
        .error(function(dados){
            angular.element(".aviso-email").show();
            $scope.usuario.emailValido = 'invalido';
        });
    }

    $scope.validaLogin = function(){
        if( $scope.formDadosUsuario.login.$invalid ){
            return false;
        }
        angular.element(".aviso-login-valido").hide();
        angular.element(".aviso-login-invalido").hide();

        $http.post('/usuario/validalogin', $scope.usuario)
        .success(function(dados){
            if( dados.estado == 'valido' ){
                angular.element(".aviso-login-valido").show();
                $scope.usuario.loginValido = 'valido';
            } else {
                angular.element(".aviso-login-invalido").show();
                $scope.usuario.loginValido = 'invalido';
            }
        })
        .error(function(dados){
            angular.element(".aviso-login-invalido").show();
            $scope.usuario.loginValido = 'invalido';
        });
    }

    $scope.atualizaUsuario = function(){
        if( $scope.formDadosUsuario.$invalid ){
            return false;
        }
        iconeEspera('iconeBtnAtualiza', 'fa-save', 'ativa');

        var erro = 0
        if( $scope.usuario.emailValido == 'invalido' ){
            angular.element(".aviso-email").show();
            erro++;
        }
        if( $scope.usuario.loginValido == 'invalido' ){
            angular.element(".aviso-login-invalido").show();
            erro++;
        }
        if( erro == 0 ){

            angular.element(".alerta-oculto").hide();

            $http.post('/usuario', $scope.usuario)
            .success(function(dados){
                if( dados.estado == 'senhaAtualInvalida' ){
                    angular.element("#avisoSenhaAtualInvalida").show();
                }

                if( dados.estado == 'sucesso' ){
                    angular.element("#avisoAtualizacaoSucesso").show();
                    $scope.usuario.senha = [];
                    $scope.usuario.resenha = [];
                    $scope.usuario.senhaAtual = [];
                    angular.element("form[name=formDadosUsuario]").validator('destroy');
                }
            })
            .then(function(){
                iconeEspera('iconeBtnAtualiza', 'fa-save', 'desativa');
            });
        }
    }

    $scope.reenviaConfirmacao = function(){
        if( $scope.formReenviaConf.$invalid ){
            return false;
        }

        iconeEspera('iconeBtnReenvia', 'fa-send', 'ativa');
        $http.post('/usuario/reenvia', $scope.reenvia)
        .success(function(dados){
            if( dados.estado == 'confirmado' ){
                angular.element(".alerta-oculto").hide();
                angular.element("#avisoReenviaErro").show();
            }
            if( dados.estado == 'sucesso' ) {
                angular.element(".alerta-oculto").hide();
                angular.element("#avisoReenviaSucesso").show();
                angular.element("#btnReenviaConfirmacao").hide();
                angular.element('#btnFechaReenviaConfirmacao').show();
                $scope.reenvia = [];
                angular.element("form[name=formReenviaConf]").validator('destroy');
            }
        })
        .error(function(dados){
            angular.element(".alerta-oculto").hide();
            angular.element("#avisoReenviaErroDesconhecido").show();
        })
        .then(function(){
            iconeEspera('iconeBtnReenvia', 'fa-send', 'desativa');
        });
    }

}
fnSistemaController.$inject = ['$scope', '$http'];
angular.module('app').controller('sistemaController', fnSistemaController);