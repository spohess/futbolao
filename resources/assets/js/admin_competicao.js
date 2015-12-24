function fnSistemaController($scope, $http) {

    $scope.partida = [];
    $scope.competicao = $scope.competicao;

    $scope.getCompeticao = function(){
        $http.get('/ws/competicoes')
        .success(function(dados){
            $scope.listaCompetioes = dados;
        });
    }
     $scope.getCompeticao();

    $http.get('/ws/equipes')
    .success(function(dados){
        $scope.competicao.equipes = dados;
    });

    $scope.checkEquipes = function(check){
        angular.forEach($scope.competicao.equipes, function (equipe) {
            equipe.selecionada = check;
        });
    }

    $scope.cancelaCompeticao = function(){
        $http.get('/ws/equipes')
        .success(function(dados){
            angular.element(".limpa-form").val('').prop('checked', false);
            $scope.competicao.equipes = dados;
        });
    }

    $scope.saveCompeticao = function(){
        $http.post('/admin/save_competicao', $scope.competicao)
        .success(function(dados){
            angular.element(document).scrollTop(0);
            $scope.cancelaCompeticao();
            $scope.getCompeticao();
            $scope.avisoCompeticao = {
                "class":"alert-success",
                "mensagem":"A competição foi GRAVADA com sucesso"
            };
            angular.element("#avisoCompeticao").fadeIn('slow');
        });
    }

    $scope.editaCompeticao = function(competicao){
        $http.get('/ws/equipes')
        .success(function(dados){
            $scope.competicao = competicao;
            angular.forEach(dados, function (equipeTotal) {
                angular.forEach(competicao.equipes, function (equipeEdicao) {
                    if( equipeTotal.id === equipeEdicao.id ){
                        equipeTotal.selecionada = true;
                        equipeTotal.grupo = equipeEdicao.pivot.grupo;
                    }
                });
            });
            $scope.competicao.equipes = dados;
        });
    }

    $scope.chamaConfirmaDelete = function(competicao){
        $scope.mdCompeticao = competicao;
        angular.element("#mdConfirmaDelete").modal('show');
    }

    $scope.deleteCompeticao = function(competicao){
        $http.delete('/admin/delete_competicao/' + competicao.id)
        .success(function(){
            angular.element("#mdConfirmaDelete").modal('hide');
            $scope.getCopeticoes();
            $scope.avisoCompeticao = {
                "class":"alert-success",
                "mensagem":"A competição foi REMOVIDA com sucesso"
            };
            angular.element("#avisoCompeticao").fadeIn('slow');
        });
    }

}
fnSistemaController.$inject = ['$scope', '$http'];
angular.module('app').controller('sistemaController', fnSistemaController);