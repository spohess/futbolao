function fnSistemaController(a,e,t){a.getPartidas=function(){e.get("/ws/partidas").success(function(e){a.listaPartidas=e})},a.getPartidas(),a.getCompeticao=function(){e.get("/ws/competicoes").success(function(e){a.listaCompetioes=e})},a.getCompeticao(),a.getEstadios=function(){e.get("/ws/estadios").success(function(e){a.listaEstadios=e})},a.getEstadios(),a.carregaEquipes=function(){e.get("/ws/equipes_competicao/"+a.partida.id_competicao).success(function(e){a.listaEquipes=e})},a.cancelaPartida=function(){angular.element(".limpa-form").val("").prop("checked",!1)},a.savePartida=function(){e.post("/admin/save_partida",a.partida).success(function(e){a.partida.id=[],a.partida.id_estadio=[],a.partida.id_equipe_casa=[],a.partida.id_equipe_visitante=[],a.getPartidas(),a.avisoPartida={"class":"alert-success",mensagem:"A partida foi GRAVADA com sucesso"},a.partida.id="",angular.element("#avisoPartida").fadeIn("slow")})},a.editaPartida=function(t){t._token=a.partida._token,e.get("/ws/equipes_competicao/"+t.id_competicao).success(function(e){a.listaEquipes=e})["finally"](function(){angular.element(document).scrollTop(0),a.partida=t})},a.chamaConfirmaDelete=function(e){a.mdPartida=e,angular.element("#mdConfirmaDelete").modal("show")},a.deletePartida=function(t){e["delete"]("/admin/delete_partida/"+t.id).success(function(){angular.element("#mdConfirmaDelete").modal("hide"),a.getPartidas()})}}fnSistemaController.$inject=["$scope","$http","$filter"],angular.module("app").controller("sistemaController",fnSistemaController);