app.factory('fipeService', function ($http, constantes) {
    var urlBase = constantes.CONFIGURACAO.urlApi + '/Fipe';
    return {
        carregarMarcas: function (tipoVeiculo) {
            return $http
                .get(urlBase + '/CarregarMarcas/' + tipoVeiculo);
        },
        carregarModelos: function (tipoVeiculo, codigoMarca) {
            return $http
                .get(urlBase + '/CarregarModelos/' + tipoVeiculo + '/' + codigoMarca);
        },
        carregarAnos: function (tipoVeiculo, codigoMarca, codigoModelo) {
            return $http
                .get(urlBase + '/CarregarAnos/' + tipoVeiculo + '/' + codigoMarca + '/' + codigoModelo);
        },
        buscarVeiculo: function (tipoVeiculo, codigoMarca, codigoModelo, codigoAno) {
            return $http
                .get(urlBase + '/BuscarVeiculo/' + tipoVeiculo + '/' + codigoMarca + '/' + codigoModelo + '/' + codigoAno);
        }
    };
});