function fnSistemaController($scope, $http) {

    $scope.meusBoloes = [];
    $scope.todosBoloes = [];
    $scope.adminBolao = [];
    $scope.adminBolao.confirmaDelete = false;

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
        $http.get('/ws/competicoes')
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
                    $scope.meusBoloes = dados.listaMeus;
                    $scope.todosBoloes = dados.listaTodos;
                    angular.element("#mdNovoBolao").modal("hide");
                    angular.element(".limpar").val('').html('').prop('checked', false);
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
                $http.get('/ws/gettoken')
                .success(function(dados){
                    $scope.novoBolao._token = dados.token;
                });
            });
        }
    }

    $scope.carregaDetalheBolao = function(bolao){
        $scope.adminBolao.confirmaDelete = false;
        angular.element("#mdDetalheBolao").modal('show');
        $http.get('/bolao/detalhe/' + bolao.id)
        .success(function(dados){
            $scope.detalheBolao = dados;
        })
    }

    $scope.entrarBolao = function(bolao){

        $http.post('/bolao/solicita_entrada/' + bolao.id)
        .success(function(dados){
            if( dados.estado === 'sucesso' ){
                $scope.detalheBolao = dados.detalheBolao;
                $scope.meusBoloes = dados.listaMeus;
            }
        });
    }

    $scope.cancelarSolicitacao = function(bolao){
        $http.delete('/bolao/cancela_convite/' + bolao.id)
        .success(function(dados){
            if( dados.estado === 'sucesso' ){
                $scope.detalheBolao = dados.detalheBolao;
                $scope.meusBoloes = dados.listaMeus;
            }
        });
    }

    $scope.sairBolao = function(bolao){
        $http.delete('/bolao/sair_bolao/' + bolao.id)
        .success(function(dados){
            if( dados.estado === 'sucesso' ){
                $scope.detalheBolao = dados.detalheBolao;
                $scope.meusBoloes = dados.listaMeus;
            }
        });
    }

    $scope.deleteBolao = function(bolao){
        $http.delete('/bolao/delete_bolao/' + bolao.id)
        .success(function(dados){
            if( dados.estado === 'sucesso' ){
                $scope.meusBoloes = dados.listaMeus;
                $scope.todosBoloes = dados.listaTodos;
            }
            angular.element("#mdDetalheBolao").modal("hide");
        });
    }

    $scope.respostaConvite = function(dados, acao){
        var dadosPost = {
            'bolao': dados,
            'acao': acao
        }
        $http.post('/bolao/resposta_convite', dadosPost)
        .success(function(dados){
            $scope.detalheBolao = dados.detalheBolao;
        });
    }

    $scope.respostaConviteGeral = function(convite, acao){
        var dadosPost = {
            'bolao': convite,
            'acao': acao
        }
        $http.post('/bolao/resposta_convite', dadosPost)
        .success(function(){
            $scope.mostraListaConvitePendente();
        });
    }

    $scope.banirParticipante = function(participante, idBolao){
        var dadosPost = {
            'participante': participante,
            'bolao': idBolao.id
        }
        $http.post('/bolao/banir_participante', dadosPost)
        .success(function(dados){
            $scope.detalheBolao = dados.detalheBolao;
        })
    }

    $scope.mostraListaConvitePendente = function(){
        angular.element("#listaConvitesPendentesVazia").hide();

        $http.get('/bolao/convites_pendentes')
        .success(function(dados){
            $scope.listaConvites = dados.length;
            $scope.listaConvitesPendentes = dados;
            if( dados.length == 0 ){
                angular.element("#listaConvitesPendentesVazia").show();
            }
        });

        angular.element("#mdListaConvites").modal("show");
    }
}
fnSistemaController.$inject = ['$scope', '$http'];
angular.module('app').controller('sistemaController', fnSistemaController);