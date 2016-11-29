function fnSistemaController($scope, $http) {

    $scope.onLoadArena = function(){
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
        $scope.geralLimite = '15';

        $scope.getUsuarioBolao();
        $scope.getTodosBoloes();
        $scope.getNotificacoes();
    }

    $scope.getUsuarioBolao = function(){
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
    }

    $scope.getTodosBoloes = function(){
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
    }

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

    $scope.onLoadPalpite = function(){
        $scope.gravado = false;
        $scope.getUsuarioBolao();
    }

    $scope.carregaPartidasParaPalpitar = function(){
        angular.element("#listaCarregando").show();
        $http.get('/palpite/para_palpitar/' + $scope.palpite.id_bolao)
        .success(function(dados){
            $scope.listaPalpites = dados.palpites;
            $scope.palpite.itemPorPagina = dados.qtd_rodada;
            if( dados.palpites.length == 0 ){
                angular.element("#listaVazia").show();
            }
        })
        .then(function(){
            angular.element("#listaCarregando").hide();
        });
    }

    $scope.carregaPartidasParaConferir = function(){
        angular.element("#listaCarregando").show();
        $http.get('/palpite/para_conferir/' + $scope.palpite.id_bolao)
        .success(function(dados){
            $scope.listaPalpites = dados.palpites;
            $scope.palpite.itemPorPagina = dados.qtd_rodada;
            if( dados.palpites.length == 0 ){
                angular.element("#listaVazia").show();
            }
        })
        .then(function(){
            angular.element("#listaCarregando").hide();
        });
    }

    $scope.gravaPalpite = function(palpite){
        if( palpite.palpite_casa == '' || palpite.palpite_visitante == '' ){
            return false;
        }

        var dadosPost = {
            "_token": palpite._token,
            "id_bolao": $scope.palpite.id_bolao,
            "id_palpite": palpite.id_palpite,
            "id_partida": palpite.id_partida,
            "id_competicao": palpite.id_competicao,
            "palpite_casa": palpite.palpite_casa,
            "palpite_penalti_casa": palpite.palpite_penalti_casa,
            "palpite_penalti_visitante": palpite.palpite_penalti_visitante,
            "palpite_visitante": palpite.palpite_visitante
        }

        $http.post('/palpite/save_palpite', dadosPost)
        .success(function(dados){
            $scope.gravado = true;
            palpite.id_palpite = dados.id_palpite;
            angular.element("#box-palpite-" + palpite.id_partida).removeClass("inserido");
            angular.element("#box-palpite-" + palpite.id_partida).addClass("gravado");
        });

    }

    $scope.outrosPalpites = function(palpite){
        $scope.detalhePalpite = palpite;
        $http.get('/palpite/palpites_usuarios/' + $scope.palpite.id_bolao + '/' + palpite.id_partida)
        .success(function(dados){
            $scope.listaPalpiteUsuario = dados;
            angular.element("#mdOutrosPalpites").modal("show");
            if(dados.length == 0){
                angular.element("#listaVazia_" + palpite.id_partida).show();
            }
        });
    }

    $scope.getNotificacoes = function(){
        $http.get('/ws/mensagens/')
        .success(function(dados){

            var quantidade = 0;
            angular.forEach(dados, function(valor) {
                if(!valor.lido){
                    quantidade++;
                }
            });
            $scope.mensagensQtd = quantidade;

            $scope.listaMensagem = dados;
            console.info(dados);
        });
    }
}
fnSistemaController.$inject = ['$scope', '$http'];
angular.module('app').controller('sistemaController', fnSistemaController);
//# sourceMappingURL=all-arena.js.map
