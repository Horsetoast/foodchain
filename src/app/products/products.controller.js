(function() {
  'use strict';

  angular
    .module('foodchain')
    .controller('ProductsController', ProductsController);

  /** @ngInject */
  function ProductsController($scope, $http) {
    var vm = this;
    $scope.new = {};

    $scope.newProductForm = false;

    $scope.showProductForm = function() {
      $scope.newProductForm = ! $scope.newProductForm;
    };

    $scope.submitProduct = function(product) {
      $scope.new.productionDate = (new Date($scope.new.productionDateRaw).getTime() / 1000).toFixed(0);
      $scope.new.expirationDate = (new Date($scope.new.expirationDateRaw).getTime() / 1000).toFixed(0);

      // Copy object so we can trim data we don't want to send
      var newProduct = {};
      angular.copy($scope.new, newProduct);
      delete newProduct.productionDateRaw;
      delete newProduct.expirationDateRaw;

      console.log(newProduct);

      $http.post($scope.settings.productsUrl, newProduct)
         .then(
             function(response){
               console.log(response);
             },
             function(response){
                console.log(response);
             }
          );
    };

  }
})();
