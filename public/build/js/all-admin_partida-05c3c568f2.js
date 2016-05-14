function fnSistemaController($scope, $http) {

    $scope.getPartidas = function(){
        $http.get('/ws/partidas')
        .success(function(dados){
            $scope.listaPartidas = dados;
        });
    }
    $scope.getPartidas();

    $scope.getCompeticao = function(){
        $http.get('/ws/competicoes')
        .success(function(dados){
            $scope.listaCompetioes = dados;
        });
    }
    $scope.getCompeticao();

    $scope.getEstadios = function(){
        $http.get('/ws/estadios')
        .success(function(dados){
            $scope.listaEstadios = dados;
        });
    }
    $scope.getEstadios();

    $scope.carregaEquipes = function(){
        $http.get('/ws/equipes_competicao/' + $scope.partida.id_competicao)
        .success(function(dados){
            $scope.listaEquipes = dados;
        });
    }

    $scope.cancelaPartida = function(){
        angular.element(".limpa-form").val('').prop('checked', false);
    }

    $scope.savePartida = function(){
        console.info($scope.partida.penalti);
        $http.post('/admin/save_partida', $scope.partida)
        .success(function(dados){
            // $scope.cancelaPartida();
            $scope.partida = [];
            $scope.getPartidas();
            $scope.avisoPartida = {
                "class":"alert-success",
                "mensagem":"A partida foi GRAVADA com sucesso"
            };
            $scope.partida.id = '';
            angular.element("#avisoPartida").fadeIn('slow');
        });
    }

    $scope.editaPartida = function(partida){
        $scope.partida = partida;
        $http.get('/ws/equipes_competicao/' + $scope.partida.id_competicao)
        .success(function(dados){
            $scope.listaEquipes = dados;
            angular.element(document).scrollTop(0);
            $scope.partida = partida;
        });
    }

    $scope.chamaConfirmaDelete = function(partida){
        $scope.mdPartida = partida;
        angular.element("#mdConfirmaDelete").modal('show');
    }

    $scope.deletePartida = function(partida){
        $http.delete('/admin/delete_partida/' + partida.id)
        .success(function(){
            angular.element("#mdConfirmaDelete").modal('hide');
            $scope.getPartidas();
        });
    }

}
fnSistemaController.$inject = ['$scope', '$http'];
angular.module('app').controller('sistemaController', fnSistemaController);
//# sourceMappingURL=all-admin_partida.js.map
