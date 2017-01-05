function fnAppController($scope, $http) {

    $scope.enviaContato = function(){
        if( $scope.formContato.$valid ){
            angular.element("#iconeBtnEnvia").removeClass('fa-send');
            angular.element("#iconeBtnEnvia").addClass('fa-cog fa-spin');

            $http.post('/contato', $scope.contato)
            .success(function(dados){
                if( dados.estado = 'enviado' ){
                    $scope.contato = [];
                    angular.element("form[name=formContato]").validator('destroy');
                    $http.get('/ws/gettoken')
                    .success(function(dados){
                        $scope.contato._token = dados.token;
                    });
                    angular.element("#iconeBtnEnvia").removeClass('fa-cog fa-spin');
                    angular.element("#iconeBtnEnvia").addClass('fa-send');
                    angular.element("#avisoContatoSucesso").show();
                }
            });
        }
    }

}
fnAppController.$inject = ['$scope', '$http'];
angular.module('app').controller('appController', fnAppController);
//# sourceMappingURL=all-site.js.map
