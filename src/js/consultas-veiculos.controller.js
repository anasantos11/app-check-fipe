app.controller('ConsultasVeiculosController', function ($scope, checkFipeService) {

    $scope.consultasVeiculos = [];

    $scope.carregarVeiculosConsultados = function () {
        checkFipeService.carregarVeiculosConsultados()
            .then(function (response) {
                $scope.consultasVeiculos = response.data;
            }, function (error) {
                alert(error.message);
            });
    };
});