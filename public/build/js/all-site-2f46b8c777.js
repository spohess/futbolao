function fnAppController(n,o){n.enviaContato=function(){n.formContato.$valid&&(angular.element("#iconeBtnEnvia").removeClass("fa-send"),angular.element("#iconeBtnEnvia").addClass("fa-cog fa-spin"),o.post("/contato",n.contato).success(function(e){(e.estado="enviado")&&(n.contato=[],angular.element("form[name=formContato]").validator("destroy"),o.get("/ws/gettoken").success(function(o){n.contato._token=o.token}),angular.element("#iconeBtnEnvia").removeClass("fa-cog fa-spin"),angular.element("#iconeBtnEnvia").addClass("fa-send"),angular.element("#avisoContatoSucesso").show())}))}}fnAppController.$inject=["$scope","$http"],angular.module("app").controller("appController",fnAppController);