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
      .state('track', {
        url: '/track',
        templateUrl: 'app/track/track.html',
        controller: 'TrackController',
        controllerAs: 'main'
      })
      .state('detail', {
        url: '/track-detail/:detail',
        templateUrl: 'app/track/track-detail.html',
        controller: 'TrackController',
        controllerAs: 'main'
      })
      .state('receipt', {
        url: '/receipt',
        templateUrl: 'app/receipt/receipt.html',
        controller: 'ReceiptController',
        controllerAs: 'main'
      })
      .state('future-receipt', {
        url: '/future-receipt',
        templateUrl: 'app/future/receipt.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
