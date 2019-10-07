app.controller('VeiculosMaisProcuradosController', function ($scope, checkFipeService) {

    $scope.veiculosMaisProcurados = [];

    $scope.carregarVeiculosMaisProcurados = function () {
        checkFipeService.carregarVeiculosMaisProcurados()
            .then(function (response) {
                $scope.veiculosMaisProcurados = response.data;
            }, function (error) {
                alert(error.message);
            });
    };
});