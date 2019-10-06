'use strict';

var app = angular.module('checkFipeApp', ['ui.router']);

app.constant('constantes', {
    CONFIGURACAO: {
        urlApi: 'http://localhost:50515/api'
    },
    TIPOS_VEICULO_FIPE: [
        { codigo: "Carros", nome: 'Carro' },
        { codigo: "Motos", nome: 'Moto' },
        { codigo: "Caminhoes", nome: 'Caminhão' }
    ]
});

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/checkFipe");

    $stateProvider
        .state("checkFipe", {
            url: "/checkFipe",
            views: {
                'app': {
                    templateUrl: 'busca-veiculo.html',
                    controller: 'BuscaVeiculoController'
                }
            }

        })
});
