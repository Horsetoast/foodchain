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
      console.log($scope.products);
      $scope.items.push({
        id: '',
        qty: 1
      });
    }


    $scope.createReceipt = function() {
      console.log($scope.items);
      $scope.items.forEach(function(val, key) {
        var qty = val.qty;
        angular.copy($scope.productNames[val.id], val);
        val.qty = qty;
      });

      $scope.receipt = {
        buyerTaxID: $scope.taxId,
        items: $scope.items
      }
      $state.go('receipt');
    }

  }
})();
