function fnSistemaController(o,e){o.onLoadArena=function(){o.meusBoloes=[],o.todosBoloes=[],o.adminBolao=[],o.adminBolao.confirmaDelete=!1,o.limitesList=[{id:"5",valor:"5"},{id:"10",valor:"10"},{id:"15",valor:"15"},{id:"20",valor:"20"},{id:"25",valor:"25"},{id:"30",valor:"30"}],o.pessoalLimite="5",o.geralLimite="5",o.getUsuarioBolao(),o.getTodosBoloes()},o.getUsuarioBolao=function(){e.get("/bolao/usuario_bolao").success(function(e){"sucesso"===e.estado&&(o.meusBoloes=e.lista),"vazio"===e.estado&&angular.element("#vazioMeusBoloes").show(),"erro"===e.estado&&angular.element("#erroMeusBoloes").show()}).error(function(){angular.element("#erroMeusBoloes").show()})["finally"](function(){angular.element("#carregaMeusBoloes").hide()})},o.getTodosBoloes=function(){e.get("/bolao/todos_bolao").success(function(e){"sucesso"===e.estado&&(o.todosBoloes=e.lista),"vazio"===e.estado&&angular.element("#vazioTodosBoloes").show(),"erro"===e.estado&&angular.element("#erroTodosBoloes").show()}).error(function(){angular.element("#erroTodosBoloes").show()})["finally"](function(){angular.element("#carregaTodosBoloes").hide()})},o.carregaCompeticao=function(){e.get("/ws/competicoes").success(function(e){o.competicoes=e,o.novoBolao.id_competicao=""})},o.gravaNovoBolao=function(){angular.element(".alerta-oculto").hide(),o.formNovoBolao.$valid&&(iconeEspera("iconeBtnCria","fa-plus","ativa"),e.post("/bolao/cria",o.novoBolao).success(function(e){"sucesso"===e.estado?(o.meusBoloes=e.listaMeus,o.todosBoloes=e.listaTodos,angular.element("#mdNovoBolao").modal("hide"),angular.element(".limpar").val("").html("").prop("checked",!1),angular.element("#vazioMeusBoloes").hide(),angular.element("#vazioTodosBoloes").hide()):angular.element("#avisoCriaErro").show()}).error(function(){angular.element("#avisoCriaErro").show()})["finally"](function(){iconeEspera("iconeBtnCria","fa-plus","desativa"),e.get("/ws/gettoken").success(function(e){o.novoBolao._token=e.token})}))},o.carregaDetalheBolao=function(a){o.adminBolao.confirmaDelete=!1,angular.element("#mdDetalheBolao").modal("show"),e.get("/bolao/detalhe/"+a.id).success(function(e){o.detalheBolao=e})},o.entrarBolao=function(a){e.post("/bolao/solicita_entrada/"+a.id).success(function(e){"sucesso"===e.estado&&(o.detalheBolao=e.detalheBolao,o.meusBoloes=e.listaMeus)})},o.cancelarSolicitacao=function(a){e["delete"]("/bolao/cancela_convite/"+a.id).success(function(e){"sucesso"===e.estado&&(o.detalheBolao=e.detalheBolao,o.meusBoloes=e.listaMeus)})},o.sairBolao=function(a){e["delete"]("/bolao/sair_bolao/"+a.id).success(function(e){"sucesso"===e.estado&&(o.detalheBolao=e.detalheBolao,o.meusBoloes=e.listaMeus)})},o.deleteBolao=function(a){e["delete"]("/bolao/delete_bolao/"+a.id).success(function(e){"sucesso"===e.estado&&(o.meusBoloes=e.listaMeus,o.todosBoloes=e.listaTodos),angular.element("#mdDetalheBolao").modal("hide")})},o.respostaConvite=function(a,t){var l={bolao:a,acao:t};e.post("/bolao/resposta_convite",l).success(function(e){o.detalheBolao=e.detalheBolao})},o.respostaConviteGeral=function(a,t){var l={bolao:a,acao:t};e.post("/bolao/resposta_convite",l).success(function(){o.mostraListaConvitePendente()})},o.banirParticipante=function(a,t){var l={participante:a,bolao:t.id};e.post("/bolao/banir_participante",l).success(function(e){o.detalheBolao=e.detalheBolao})},o.mostraListaConvitePendente=function(){angular.element("#listaConvitesPendentesVazia").hide(),e.get("/bolao/convites_pendentes").success(function(e){o.listaConvites=e.length,o.listaConvitesPendentes=e,0==e.length&&angular.element("#listaConvitesPendentesVazia").show()}),angular.element("#mdListaConvites").modal("show")},o.onLoadPalpite=function(){o.getUsuarioBolao()},o.carregaPartidas=function(){e.get("/palpite/palpites_bolao/"+o.palpite.id_bolao).success(function(e){o.listaPalpites=e.palpites,o.palpite.itemPorPagina=e.qtd_rodada})},o.gravaPalpite=function(a){if(""==a.palpite_casa||""==a.palpite_visitante)return!1;if(a.penalti&&(""!=a.palpite_penalti_casa||""!=a.palpite_penalti_visitante))return!1;var t={_token:a._token,id_bolao:o.palpite.id_bolao,id_palpite:a.id_palpite,id_partida:a.id_partida,id_competicao:a.id_competicao,palpite_casa:a.palpite_casa,palpite_penalti_casa:a.palpite_penalti_casa,palpite_penalti_visitante:a.palpite_penalti_visitante,palpite_visitante:a.palpite_visitante};e.post("/palpite/save_palpite",t).success(function(o){a.id_palpite=o.id_palpite,angular.element("#box-palpite-"+a.id_partida).addClass("gravado")})}}fnSistemaController.$inject=["$scope","$http"],angular.module("app").controller("sistemaController",fnSistemaController);