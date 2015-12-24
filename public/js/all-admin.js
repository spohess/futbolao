function fnSistemaController($scope, $http) {

    // Estádios

    $scope.getEstadios = function(){
        $http.get('/ws/estadios')
        .success(function(dados){
            $scope.listaEstadios = dados;
        });
    }
    $scope.getEstadios();

    $scope.cancelaEstadio = function(){
        $scope.estadio = [];
    }

    $scope.saveEstadio = function(){
        $http.post('/admin/save_estadio', $scope.estadio)
        .success(function(dados){
            $scope.cancelaEstadio();
            $scope.getEstadios();
            $scope.avisoEstadio = {
                "class":"alert-success",
                "mensagem":"O estádio foi GRAVADA com sucesso"
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
            angular.element(document).scrollTop(0);
            angular.element("#mdConfirmaDelete").modal('hide');
            $scope.getCopeticoes();
            $scope.avisoEstadio = {
                "class":"alert-success",
                "mensagem":"A competição foi REMOVIDA com sucesso"
            };
            angular.element("#avisoEstadio").fadeIn('slow');
        });
    }

    // Competições

    $scope.partida = [];
    $scope.competicao = $scope.competicao;
    $scope.competicao.equipes = [];

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
            $scope.competicao = [];
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
//# sourceMappingURL=all-admin.js.map
