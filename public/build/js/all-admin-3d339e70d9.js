function fnSistemaController(o,n){o.onLoadAdmin=function(){o.carregaUsuarios()},o.carregaUsuarios=function(){n.get("/admin/usuario/lista_usuarios").success(function(n){o.listaUsuarios=n})}}fnSistemaController.$inject=["$scope","$http"],angular.module("app").controller("sistemaController",fnSistemaController);