function fnSistemaController(e,o){e.partida=[],e.competicao=e.competicao,e.getCompeticao=function(){o.get("/ws/competicoes").success(function(o){e.listaCompetioes=o})},e.getCompeticao(),o.get("/ws/equipes").success(function(o){e.competicao.equipes=o}),e.checkEquipes=function(o){angular.forEach(e.competicao.equipes,function(e){e.selecionada=o})},e.cancelaCompeticao=function(){o.get("/ws/equipes").success(function(o){angular.element(".limpa-form").val("").prop("checked",!1),e.competicao.equipes=o})},e.saveCompeticao=function(){o.post("/admin/save_competicao",e.competicao).success(function(o){angular.element(document).scrollTop(0),e.cancelaCompeticao(),e.getCompeticao(),e.avisoCompeticao={"class":"alert-success",mensagem:"A competição foi GRAVADA com sucesso"},angular.element("#avisoCompeticao").fadeIn("slow")})},e.editaCompeticao=function(c){o.get("/ws/equipes").success(function(o){e.competicao=c,angular.forEach(o,function(e){angular.forEach(c.equipes,function(o){e.id===o.id&&(e.selecionada=!0,e.grupo=o.pivot.grupo)})}),e.competicao.equipes=o})},e.chamaConfirmaDelete=function(o){e.mdCompeticao=o,angular.element("#mdConfirmaDelete").modal("show")},e.deleteCompeticao=function(c){o["delete"]("/admin/delete_competicao/"+c.id).success(function(){angular.element("#mdConfirmaDelete").modal("hide"),e.getCopeticoes(),e.avisoCompeticao={"class":"alert-success",mensagem:"A competição foi REMOVIDA com sucesso"},angular.element("#avisoCompeticao").fadeIn("slow")})}}fnSistemaController.$inject=["$scope","$http"],angular.module("app").controller("sistemaController",fnSistemaController);