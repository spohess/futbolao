function fnSistemaController(a,e){a.onLoadUsuario=function(){},a.validaEmail=function(){return a.formDadosUsuario.email.$invalid?!1:(angular.element(".aviso-email").hide(),void e.post("/usuario/validaemail",a.usuario).success(function(e){"invalido"==e.estado?(angular.element(".aviso-email").show(),a.usuario.emailValido="invalido"):a.usuario.emailValido="valido"}).error(function(e){angular.element(".aviso-email").show(),a.usuario.emailValido="invalido"}))},a.validaLogin=function(){return a.formDadosUsuario.login.$invalid?!1:(angular.element(".aviso-login-valido").hide(),angular.element(".aviso-login-invalido").hide(),void e.post("/usuario/validalogin",a.usuario).success(function(e){"valido"==e.estado?(angular.element(".aviso-login-valido").show(),a.usuario.loginValido="valido"):(angular.element(".aviso-login-invalido").show(),a.usuario.loginValido="invalido")}).error(function(e){angular.element(".aviso-login-invalido").show(),a.usuario.loginValido="invalido"}))},a.atualizaUsuario=function(){if(a.formDadosUsuario.$invalid)return!1;iconeEspera("iconeBtnAtualiza","fa-save","ativa");var o=0;"invalido"==a.usuario.emailValido&&(angular.element(".aviso-email").show(),o++),"invalido"==a.usuario.loginValido&&(angular.element(".aviso-login-invalido").show(),o++),0==o&&(angular.element(".alerta-oculto").hide(),e.put("/usuario",a.usuario).success(function(e){"senhaAtualInvalida"==e.estado&&angular.element("#avisoSenhaAtualInvalida").show(),"sucesso"==e.estado&&(angular.element("#avisoAtualizacaoSucesso").show(),a.usuario.senha=[],a.usuario.resenha=[],a.usuario.senhaAtual=[],angular.element("form[name=formDadosUsuario]").validator("destroy"))}).then(function(){iconeEspera("iconeBtnAtualiza","fa-save","desativa")}))},a.reenviaConfirmacao=function(){return a.formReenviaConf.$invalid?!1:(iconeEspera("iconeBtnReenvia","fa-send","ativa"),void e.post("/usuario/reenvia",a.reenvia).success(function(e){"confirmado"==e.estado&&(angular.element(".alerta-oculto").hide(),angular.element("#avisoReenviaErro").show()),"sucesso"==e.estado&&(angular.element(".alerta-oculto").hide(),angular.element("#avisoReenviaSucesso").show(),angular.element("#btnReenviaConfirmacao").hide(),angular.element("#btnFechaReenviaConfirmacao").show(),a.reenvia=[],angular.element("form[name=formReenviaConf]").validator("destroy"))}).error(function(a){angular.element(".alerta-oculto").hide(),angular.element("#avisoReenviaErroDesconhecido").show()}).then(function(){iconeEspera("iconeBtnReenvia","fa-send","desativa")}))},a.selecionaAvatar=function(a){angular.element("#avisoGravaAvatar").show();var o={id:a};e.put("/usuario/avatar",o).success(function(e){"sucesso"==e.estado&&(angular.element(".ativo").removeClass("ativo"),angular.element(".avatar-"+a).addClass("ativo"))}).then(function(){angular.element("#avisoGravaAvatar").hide()})}}fnSistemaController.$inject=["$scope","$http"],angular.module("app").controller("sistemaController",fnSistemaController);