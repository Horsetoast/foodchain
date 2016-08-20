(function() {
  'use strict';

  angular
    .module('foodchain')
    .controller('ProductsController', ProductsController);

  /** @ngInject */
  function ProductsController($scope) {
    var vm = this;

    $scope.newProductForm = false;

    $scope.showProductForm = function() {
      $scope.newProductForm = ! $scope.newProductForm;
    }

  }
})();
