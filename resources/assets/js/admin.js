function fnSistemaController($scope, $http) {

    $scope.onLoadAdmin = function(){
        $scope.carregaUsuarios();
    }

    $scope.carregaUsuarios = function(){
        $http.get('/admin/usuario/lista_usuarios')
        .success(function(dados){
            $scope.listaUsuarios = dados;
        });
    }

}
fnSistemaController.$inject = ['$scope', '$http'];
angular.module('app').controller('sistemaController', fnSistemaController);