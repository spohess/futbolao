function fnSistemaController($scope, $http) {

    $scope.getEquipes = function(){
        $http.get('/ws/equipes')
        .success(function(dados){
            $scope.listaEquipes = dados;
        });
    }
    $scope.getEquipes();

    $scope.getEstadios = function(){
        $http.get('/ws/estadios')
        .success(function(dados){
            $scope.listaEstadios = dados;
        });
    }
    $scope.getEstadios();

    $scope.cancelaEquipe = function(){
        angular.element(".limpa-form").val('').prop('checked', false);
    }

    $scope.saveEquipe = function(){
        $http.post('/admin/save_equipe', $scope.equipe)
        .success(function(dados){
            $scope.cancelaEquipe();
            $scope.getEquipes();
            $scope.avisoEquipe = {
                "class":"alert-success",
                "mensagem":"A equipe foi GRAVADA com sucesso"
            };
            angular.element("#avisoEquipe").fadeIn('slow');
        });
    }

    $scope.editaEquipe = function(equipe){
        angular.element(document).scrollTop(0);
        $scope.equipe = equipe;
        $scope.equipe.id_estadio = equipe.id_estadio;
    }

    $scope.chamaConfirmaDelete = function(equipe){
        $scope.mdEquipe = equipe;
        angular.element("#mdConfirmaDelete").modal('show');
    }

    $scope.deleteEquipe = function(equipe){
        $http.delete('/admin/delete_equipe/' + equipe.id)
        .success(function(){
            angular.element("#mdConfirmaDelete").modal('hide');
            $scope.getEquipes();
        });
    }

}
fnSistemaController.$inject = ['$scope', '$http'];
angular.module('app').controller('sistemaController', fnSistemaController);