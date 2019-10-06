'use strict';

var app = angular.module('checkFipeApp', ['ui.router']);

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
