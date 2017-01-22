function fnSistemaController($scope, $http) {

    $scope.getMensagens = function(){
        $http.get('/mensagem/get_all')
        .success(function(dados){
            $scope.listaMensagens = dados;
        });
    }
    $scope.getMensagens();

    $scope.saveMensagem = function(){
        $http.post('/admin/save_mensagem', $scope.mensagem)
        .success(function(dados){
            $scope.mensagem = {};

            $scope.avisoMensagem = {
                "class":"alert-success",
                "mensagem":"A mensagem foi GRAVADA com sucesso"
            };

            angular.element("#avisoMensagem").fadeIn('slow');
        });
    }

    $scope.abrirMensagem = function(mensagem){
        $scope.mensagemDetalhe = mensagem;
        angular.element("#mdDetalheMensagem").modal('show');
    }

    $scope.editaMensagem = function(mensagem){
        angular.element(document).scrollTop(0);
        $scope.mensagem = mensagem;
        console.info(mensagem);
    }

    $scope.arquivaMensagem = function(mensagem){
        $http.put('/admin/arquiva_mensagem/' + mensagem.id)
        .success(function(dados){
            $scope.getMensagens();
        });
    }

}

fnSistemaController.$inject = ['$scope', '$http'];
angular.module('app').controller('sistemaController', fnSistemaController);