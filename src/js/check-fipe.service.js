app.factory('checkFipeService', function ($http, constantes) {
    var urlBase = constantes.CONFIGURACAO.urlApi + '/CheckFipe';
    return {
        carregarVeiculosConsultados: function () {
            return $http
                .get(urlBase + '/CarregarVeiculosConsultados/');
        },
        carregarVeiculosMaisProcurados: function () {
            return $http
                .get(urlBase + '/CarregarVeiculosMaisProcurados/');
        },
    }
});