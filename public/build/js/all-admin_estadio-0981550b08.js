function fnSistemaController($scope, $http) {

    $scope.getEstadios = function(){
        $http.get('/ws/estadios')
        .success(function(dados){
            $scope.listaEstadios = dados;
        });
    }
    $scope.getEstadios();

    $scope.cancelaEstadio = function(){
        angular.element(".limpa-form").val('').prop('checked', false);
    }

    $scope.saveEstadio = function(){
        $http.post('/admin/save_estadio', $scope.estadio)
        .success(function(dados){
            $scope.cancelaEstadio();
            $scope.getEstadios();
            $scope.avisoEstadio = {
                "class":"alert-success",
                "mensagem":"O estádio foi GRAVADO com sucesso"
            };
            angular.element("#avisoEstadio").fadeIn('slow');
        });
    }

    $scope.editaEstadio = function(estadio){
        angular.element(document).scrollTop(0);
        $scope.estadio = estadio;
    }

    $scope.chamaConfirmaDelete = function(estadio){
        $scope.mdEstadio = estadio;
        angular.element("#mdConfirmaDelete").modal('show');
    }

    $scope.deleteEstadio = function(estadio){
        $http.delete('/admin/delete_estadio/' + estadio.id)
        .success(function(){
            angular.element("#mdConfirmaDelete").modal('hide');
            $scope.getEstadios();
        });
    }

}
fnSistemaController.$inject = ['$scope', '$http'];
angular.module('app').controller('sistemaController', fnSistemaController);
//# sourceMappingURL=all-admin_estadio.js.map
