(function() {
  'use strict';

  angular
    .module('foodchain')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $http, $state) {
    var vm = this;

    $scope.taxId = '';

    $scope.addItem = function() {
      $scope.items.push({
        name: '',
        qty: 1
      });
    }

    $scope.createReceipt = function() {
      $scope.receipt = {
        buyerTaxID: $scope.taxId,
        items: $scope.items
      }
      $state.go('receipt');
    }

  }
})();
