function fnSistemaController($scope, $http) {

    $scope.validaEmail = function(){
        if( $scope.usuario.emailUsuario != '' ){
            angular.element(".aviso-email").hide();

            $http.post('/cadastro/validaemail', $scope.usuario)
            .success(function(dados){
                if( dados.estado == 'invalido' ){
                    angular.element(".aviso-email").show();
                    $scope.usuario.emailUsuarioValido = 'invalido';
                } else {
                    $scope.usuario.emailUsuarioValido = 'valido';
                }
            });
        }
    }

    $scope.validaLogin = function(){
        if( $scope.usuario.loginUsuario != '' ){
            angular.element(".aviso-login-valido").hide();
            angular.element(".aviso-login-invalido").hide();

            $http.post('/cadastro/validalogin', $scope.usuario)
            .success(function(dados){
                if( dados.estado == 'valido' ){
                    angular.element(".aviso-login-valido").show();
                    $scope.usuario.loginUsuarioValido = 'valido';
                } else {
                    angular.element(".aviso-login-invalido").show();
                    $scope.usuario.loginUsuarioValido = 'invalido';
                }
            });
        }
    }

    $scope.cadastroUsuario = function(){
        if( $scope.formCadastro.$valid ){
            angular.element("#iconeBtnCadastrar").removeClass('fa-save');
            angular.element("#iconeBtnCadastrar").addClass('fa-cog fa-spin');

            var erro = 0
            if( $scope.usuario.emailUsuarioValido == 'invalido' ){
                angular.element(".aviso-email").show();
                erro++;
            }
            if( $scope.usuario.loginUsuarioValido == 'invalido' ){
                angular.element(".aviso-login-invalido").show();
                erro++;
            }
            if( erro == 0 ){
                $http.post('/cadastro', $scope.usuario)
                .success(function(dados){
                    if( dados.estado == 'sucesso' ){
                        angular.element("#avisoCadastroErro").hide();
                        angular.element("#avisoCadastroSucesso").show();
                        $scope.usuario = [];
                        angular.element("form[name=formCadastro]").validator('destroy');
                        angular.element(".aviso-login-valido").hide();
                        angular.element(".aviso-login-invalido").hide();
                    } else {
                        angular.element("#avisoCadastroSucesso").hide();
                        angular.element("#avisoCadastroErro").show();
                    }
                })
                .then(function(){
                    angular.element("#iconeBtnCadastrar").removeClass('fa-cog fa-spin');
                    angular.element("#iconeBtnCadastrar").addClass('fa-save');
                });
            }
        }
    }

}
fnSistemaController.$inject = ['$scope', '$http'];
angular.module('app').controller('sistemaController', fnSistemaController);