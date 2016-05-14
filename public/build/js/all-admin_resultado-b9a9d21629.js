function fnSistemaController($scope, $http) {

    $scope.getCompeticao = function(){
        $http.get('/ws/competicoes')
        .success(function(dados){
            $scope.listaCompetioes = dados;
        });
    }
    $scope.getCompeticao();

    $scope.carregaRodadas = function(){
        $http.get('/ws/rodadas_competicao/' + $scope.resultado.id_competicao)
        .success(function(dados){
            $scope.listaRodadas = dados;
        });
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
}
fnSistemaController.$inject = ['$scope', '$http'];
angular.module('app').controller('sistemaController', fnSistemaController);
//# sourceMappingURL=all-admin_resultado.js.map
