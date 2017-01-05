function fnSistemaController($scope, $http, $filter) {

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
        $http.post('/admin/save_partida', $scope.partida)
        .success(function(dados){

            $scope.partida.id = [];
            $scope.partida.id_estadio = [];
            $scope.partida.id_equipe_casa = [];
            $scope.partida.id_equipe_visitante = [];

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
        partida._token = $scope.partida._token;
        $http.get('/ws/equipes_competicao/' + partida.id_competicao)
        .success(function(dados){
            $scope.listaEquipes = dados;
        })
        .finally(function(){
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
fnSistemaController.$inject = ['$scope', '$http', '$filter'];
angular.module('app').controller('sistemaController', fnSistemaController);