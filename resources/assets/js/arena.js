function fnSistemaController($scope, $http) {

    $scope.limitesList = [
        {id:'5', valor:'5'},
        {id:'10', valor:'10'},
        {id:'15', valor:'15'},
        {id:'20', valor:'20'},
        {id:'25', valor:'25'},
        {id:'30', valor:'30'}
    ];
    $scope.pessoalLimite = '5';
    $scope.geralLimite = '5';

    $http.get('/bolao/usuario_bolao')
    .success(function(dados){
        if( dados.estado === 'sucesso' ){
            $scope.meusBoloes = dados.lista;
        }

        if( dados.estado === 'vazio' ){
            angular.element("#vazioMeusBoloes").show();    
        }

        if( dados.estado === 'erro' ){
            angular.element("#erroMeusBoloes").show();    
        }
    })
    .error(function(){
        angular.element("#erroMeusBoloes").show();
    })
    .finally(function(){
        angular.element("#carregaMeusBoloes").hide();
    });

    $http.get('/bolao/todos_bolao')
    .success(function(dados){
        if( dados.estado === 'sucesso' ){
            $scope.todosBoloes = dados.lista;
        }

        if( dados.estado === 'vazio' ){
            angular.element("#vazioTodosBoloes").show();    
        }

        if( dados.estado === 'erro' ){
            angular.element("#erroTodosBoloes").show();    
        }
    })
    .error(function(){
        angular.element("#erroTodosBoloes").show();
    })
    .finally(function(){
        angular.element("#carregaTodosBoloes").hide();
    });

    $scope.gravaNovoBolao = function(){
        if($scope.formNovoBolao.$valid){
            $http.post('/bolao/cria',$scope.novoBolao)
            .success(function(dados){
                console.info(dados);
            });
        }
    }

    $scope.carregaDetalheBolao = function(meuBolao){
        $scope.detalheBolao = meuBolao;
        angular.element("#mdDetalheBolao").modal('show');
    }
}
fnSistemaController.$inject = ['$scope', '$http'];
angular.module('app').controller('sistemaController', fnSistemaController);