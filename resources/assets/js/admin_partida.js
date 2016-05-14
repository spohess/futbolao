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
        partida._token = $scope.partida._token;
        $http.get('/ws/equipes_competicao/' + partida.id_competicao)
        .success(function(dados){
            $scope.listaEquipes = dados;
        })
        .finally(function(){
            angular.element(document).scrollTop(0);
            $scope.partida.id_competicao = partida.id_competicao;
            $scope.partida.id_estadio = partida.id_estadio;
            $scope.partida.data_partida = partida.data_partida;
            $scope.partida.id_equipe_casa = partida.id_equipe_casa;
            $scope.partida.id_equipe_visitante = partida.id_equipe_visitante;
            $scope.partida.rodada = partida.rodada;
            $scope.partida.penalti = partida.penalti;
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