(function() {
  'use strict';

  angular
    .module('foodchain')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('products', {
        url: '/products',
        templateUrl: 'app/products/products.html',
        controller: 'ProductsController',
        controllerAs: 'main'
      })
      .state('receipt', {
        url: '/receipt',
        templateUrl: 'app/receipt/receipt.html',
        controller: 'ReceiptController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
