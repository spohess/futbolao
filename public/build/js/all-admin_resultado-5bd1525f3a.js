function fnSistemaController(a,s){a.carregaPartidasFinalizadas=function(){s.get("/ws/partidas_finalizadas").success(function(s){a.listaPartidasFinalizadas=s})},a.carregaPartidasFinalizadas(),a.getCompeticao=function(){s.get("/ws/competicoes").success(function(s){a.listaCompetioes=s})},a.getCompeticao(),a.carregaRodadas=function(){s.get("/ws/rodadas_competicao/"+a.resultado.id_competicao).success(function(s){a.listaRodadas=s})},a.carregaPartidas=function(){s.get("/ws/partidas_rodada/"+a.resultado.id_competicao+"/"+a.resultado.rodada).success(function(s){a.listaPartidas=s})},a.gravaResultado=function(a){s.post("/admin/save_resultado",a).success(function(){angular.element("#box-resultado-"+a.id).removeClass("inserido"),angular.element("#box-resultado-"+a.id).addClass("gravado")})}}fnSistemaController.$inject=["$scope","$http"],angular.module("app").controller("sistemaController",fnSistemaController);