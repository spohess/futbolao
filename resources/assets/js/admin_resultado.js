function fnSistemaController($scope, $http) {

    $scope.carregaPartidasFinalizadas = function(){
        $http.get('/ws/partidas_finalizadas')
        .success(function(dados){
            $scope.listaPartidasFinalizadas = dados;
        });
    }
    $scope.carregaPartidasFinalizadas();

    $scope.getCompeticao = function(){
        $http.get('/ws/competicoes')
        .success(function(dados){
            $scope.listaCompetioes = dados;
        });
    }
    $scope.getCompeticao();

    $scope.carregaRodadas = function(){
        if( $scope.resultado.id_competicao != undefined ){
            $http.get('/ws/rodadas_competicao/' + $scope.resultado.id_competicao)
            .success(function(dados){
                $scope.listaRodadas = dados;
            });
        } else {
            $scope.listaRodadas = {};
        }
    }

    $scope.carregaPartidas = function(){
        $http.get('/ws/partidas_rodada/' + $scope.resultado.id_competicao + '/' + $scope.resultado.rodada)
        .success(function(dados){
            $scope.listaPartidas = dados;
        });
    }

    $scope.gravaResultado = function(partida){
        $http.post('/admin/save_resultado', partida)
        .success(function(){
            angular.element("#box-resultado-" + partida.id).removeClass("inserido");
            angular.element("#box-resultado-" + partida.id).addClass("gravado");
        });
    }

    $scope.executaCalculo = function(){
        iconeEspera('iconeBtnExecutar', 'fa-cogs', 'ativa');

        $http.get('/admin/calcula_pontuacao')
        .finally(function(){
            iconeEspera('iconeBtnExecutar', 'fa-cogs', 'desativa');
        });
    }
}
fnSistemaController.$inject = ['$scope', '$http'];
angular.module('app').controller('sistemaController', fnSistemaController);