function fnSistemaController($scope, $http) {

    $scope.meusBoloes = [];
    $scope.todosBoloes = [];


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

    $scope.carregaCompeticao = function(){
        $http.get('/competicao/lista_select')
        .success(function(dados){
            $scope.competicoes = dados;
            $scope.novoBolao.id_competicao = '';
        });
    }

    $scope.gravaNovoBolao = function(){

        angular.element('.alerta-oculto').hide();

        if($scope.formNovoBolao.$valid){
            iconeEspera('iconeBtnCria', 'fa-plus', 'ativa');

            $http.post('/bolao/cria', $scope.novoBolao)
            .success(function(dados){
                if( dados.estado === 'sucesso' ){
                    $scope.meusBoloes.push(dados.bolao);
                    $scope.todosBoloes.push(dados.bolao);
                    angular.element("#avisoCriaSucesso").show();
                    $scope.novoBolao = [];
                    angular.element("#vazioMeusBoloes").hide();
                    angular.element("#vazioTodosBoloes").hide();
                } else {
                    angular.element("#avisoCriaErro").show();
                }
            })
            .error(function(){
                angular.element("#avisoCriaErro").show();
            })
            .finally(function(){
                iconeEspera('iconeBtnCria', 'fa-plus', 'desativa');
            });
        }
    }

    $scope.carregaDetalheBolao = function(bolao){
        angular.element("#mdDetalheBolao").modal('show');
        $http.get('/bolao/detalhe/' + bolao.id)
        .success(function(dados){
            $scope.detalheBolao = dados;
        })
    }

    $scope.entrarBolao = function(bolao){

        $http.post('/bolao/solicita_entrada', bolao)
        .success(function(dados){
            if( dados.estado === 'sucesso' ){
                $scope.detalheBolao = dados.lista;
            }
        });
    }
}
fnSistemaController.$inject = ['$scope', '$http'];
angular.module('app').controller('sistemaController', fnSistemaController);
//# sourceMappingURL=all-arena.js.map
