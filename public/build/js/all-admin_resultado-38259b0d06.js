function fnSistemaController(a,o){a.getCompeticao=function(){o.get("/ws/competicoes").success(function(o){a.listaCompetioes=o})},a.getCompeticao(),a.carregaRodadas=function(){o.get("/ws/rodadas_competicao/"+a.resultado.id_competicao).success(function(o){a.listaRodadas=o})},a.carregaPartidas=function(){o.get("/ws/partidas_rodada/"+a.resultado.id_competicao+"/"+a.resultado.rodada).success(function(o){a.listaPartidas=o})},a.gravaResultado=function(a){o.post("/admin/save_partida",a).success(function(){angular.element("#box-resultado-"+a.id).addClass("gravado")})}}fnSistemaController.$inject=["$scope","$http"],angular.module("app").controller("sistemaController",fnSistemaController);