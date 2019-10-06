app.controller('BuscaVeiculoController', function ($scope, constantes, fipeService) {

    $scope.buscaVeiculo = {
        tiposVeiculosFipe: constantes.TIPOS_VEICULO_FIPE,
        tipoVeiculo: null,
        codigoMarca: null,
        codigoModelo: null,
        codigoAno: null,
        marcas: null,
        modelos: null,
        anos: null,
        veiculo: null
    };

    $scope.limparMarcas = function () {
        $scope.buscaVeiculo.marcas = null;
        $scope.buscaVeiculo.codigoMarca = null;
    }

    $scope.limparModelos = function () {
        $scope.buscaVeiculo.modelos = null;
        $scope.buscaVeiculo.codigoModelo = null;
    }


    $scope.limparAnos = function () {
        $scope.buscaVeiculo.anos = null;
        $scope.buscaVeiculo.codigoAno = null;
    }

    $scope.limparVeiculo = function () {
        $scope.buscaVeiculo.veiculo = null;
    }

    $scope.carregarMarcas = function () {
        $scope.limparMarcas();
        $scope.limparModelos();
        $scope.limparAnos();
        $scope.limparVeiculo();
        fipeService.carregarMarcas($scope.buscaVeiculo.tipoVeiculo)
            .then(function (response) {
                $scope.buscaVeiculo.marcas = response.data;
            })
            .catch(function (err) {
                alert(error.message);
            })
    };

    $scope.carregarModelos = function () {
        $scope.limparModelos();
        $scope.limparAnos();
        $scope.limparVeiculo();
        fipeService.carregarModelos($scope.buscaVeiculo.tipoVeiculo, $scope.buscaVeiculo.codigoMarca)
            .then(function (response) {
                $scope.buscaVeiculo.modelos = response.data;
            }, function (error) {
                alert(error.message);
            });
    };

    $scope.carregarAnos = function () {
        $scope.limparAnos();
        $scope.limparVeiculo();
        fipeService.carregarAnos($scope.buscaVeiculo.tipoVeiculo, $scope.buscaVeiculo.codigoMarca, $scope.buscaVeiculo.codigoModelo)
            .then(function (response) {
                $scope.buscaVeiculo.anos = response.data;
            }, function (error) {
                alert(error.message);
            });
    };

    $scope.buscarVeiculo = function () {
        $scope.limparVeiculo();
        fipeService.buscarVeiculo($scope.buscaVeiculo.tipoVeiculo, $scope.buscaVeiculo.codigoMarca, $scope.buscaVeiculo.codigoModelo, $scope.buscaVeiculo.codigoAno)
            .then(function (response) {
                $scope.buscaVeiculo.veiculo = response.data;
            }, function (error) {
                alert(error.message);
            });
    };
});