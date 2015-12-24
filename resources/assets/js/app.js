angular.module('app', ['angularUtils.directives.dirPagination']);

$(document).ready(function() {
    $(".agenda").datetimepicker({
        language: 'pt-BR'
    });
});