function fnSistemaController($scope, $http) {

    getNotificacoes(angular, $http, $scope);

    $scope.arquivaMensagem = function(mensagem){
        arquivaMensagem(angular, $http, $scope, mensagem)
    }

}
fnSistemaController.$inject = ['$scope', '$http'];
angular.module('app').controller('sistemaController', fnSistemaController);
//# sourceMappingURL=all-bolao.js.map
