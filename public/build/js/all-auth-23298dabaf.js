function fnSistemaController($scope, $http) {

    $scope.validaEmail = function(){
        if( $scope.usuario.email != '' ){
            angular.element(".aviso-email").hide();

            $http.post('/cadastro/validaemail', $scope.usuario)
            .success(function(dados){
                if( dados.estado == 'invalido' ){
                    angular.element(".aviso-email").show();
                    $scope.usuario.emailValido = 'invalido';
                } else {
                    $scope.usuario.emailValido = 'valido';
                }
            });
        }
    }

    $scope.validaLogin = function(){
        if( $scope.usuario.login != '' ){
            angular.element(".aviso-login-valido").hide();
            angular.element(".aviso-login-invalido").hide();

            $http.post('/cadastro/validalogin', $scope.usuario)
            .success(function(dados){
                if( dados.estado == 'valido' ){
                    angular.element(".aviso-login-valido").show();
                    $scope.usuario.loginValido = 'valido';
                } else {
                    angular.element(".aviso-login-invalido").show();
                    $scope.usuario.loginValido = 'invalido';
                }
            });
        }
    }

    $scope.cadastroUsuario = function(){
        if( $scope.formCadastro.$invalid ){
            return false;
        }
        iconeEspera('iconeBtnCadastrar', 'fa-save', 'ativa');

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
            $http.post('/cadastro', $scope.usuario)
            .success(function(dados){
                if( dados.estado == 'sucesso' ){
                    angular.element(".aviso-oculto").hide();
                    angular.element("#avisoCadastroSucesso").show();
                    $scope.usuario = [];
                    angular.element("form[name=formCadastro]").validator('destroy');
                    angular.element(".aviso-login-valido").hide();
                    angular.element(".aviso-login-invalido").hide();
                } else {
                    angular.element(".aviso-oculto").hide();
                    angular.element("#avisoCadastroErro").show();
                }
            })
            .then(function(){
                iconeEspera('iconeBtnCadastrar', 'fa-save', 'desativa');
            });
        }
    }

    $scope.reenviaConfirmacao = function(){
        if( $scope.formReenviaConf.$invalid ){
            return false;
        }

        iconeEspera('iconeBtnReenvia', 'fa-send', 'ativa');
        $http.post('/cadastro/reenvia', $scope.reenvia)
        .success(function(dados){
            if( dados.estado == 'confirmado' ){
                angular.element(".aviso-oculto").hide();
                angular.element("#avisoReenviaErro").show();
            }
            if( dados.estado == 'sucesso' ) {
                angular.element(".aviso-oculto").hide();
                angular.element("#avisoReenviaSucesso").show();
                angular.element("#btnReenviaConfirmacao").hide();
                angular.element('#btnFechaReenviaConfirmacao').show();
                $scope.reenvia = [];
                angular.element("form[name=formReenviaConf]").validator('destroy');
            }
        })
        .error(function(dados){
            angular.element(".aviso-oculto").hide();
            angular.element("#avisoReenviaErroDesconhecido").show();
        })
        .then(function(){
            iconeEspera('iconeBtnReenvia', 'fa-send', 'desativa');
        });
    }

    $scope.entrarUsuario = function(){
        if( $scope.formEntrar.$invalid ){
            return false;
        }

        iconeEspera('iconeBtnEntrar', 'fa-sign-in', 'ativa');
        $http.post('/entrar', $scope.entrar)
        .success(function(dados){
            if( dados.estado == 'sucesso' ){
                var url = "/arena";
                angular.element(window.document.location).attr('href',url);
            }

            if( dados.estado == 'erro' ){
                angular.element("#avisoEntrarErro").html( dados.mensagem );
                angular.element("#avisoEntrarErro").show();
            }
        })
        .error(function(dados){
            angular.element("#avisoEntrarErro").html("Houve um erro interno e não foi possível validar os dados, por favor tente novamente");
            angular.element("#avisoEntrarErro").show();
            iconeEspera('iconeBtnEntrar', 'fa-sign-in', 'desativa');
        })
        .then(function(dados){
            iconeEspera('iconeBtnEntrar', 'fa-sign-in', 'desativa');
        });
    }

}
fnSistemaController.$inject = ['$scope', '$http'];
angular.module('app').controller('sistemaController', fnSistemaController);
//# sourceMappingURL=all-auth.js.map
