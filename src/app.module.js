'use strict';

var app = angular.module('checkFipeApp', ['ui.router']);

app.constant('constantes', {
    CONFIGURACAO: {
        urlApi: 'http://localhost:50515/api'
    },
    TIPOS_VEICULO_FIPE: [
        { codigo: 'Carros', nome: 'Carro' },
        { codigo: 'Motos', nome: 'Moto' },
        { codigo: 'Caminhoes', nome: 'Caminhão' }
    ]
});

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/buscarVeiculo');

    $stateProvider
        .state('buscarVeiculo', {
            url: '/buscarVeiculo',
            views: {
                'app': {
                    templateUrl: 'busca-veiculo.html',
                    controller: 'BuscaVeiculoController'
                }
            }
        })
        .state('consultasVeiculos', {
            url: '/consultasVeiculos',
            views: {
                'app': {
                    template: '<div> CONSULTAS VEÍCULOS</div>'
                }
            }
        })
        .state('veiculosMaisProcurados', {
            url: '/veiculosMaisProcurados',
            views: {
                'app': {
                    template: '<div> VEÍCULOS MAIS PROCURADOS</div>'
                }
            }
        })
});
