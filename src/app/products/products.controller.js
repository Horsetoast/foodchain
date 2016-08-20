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

    $scope.fdaCategories = [
      {
        man: '肉類製品',
        eng: 'processed meat'
      },
      {
        man: '生鮮冷凍冷藏畜肉',
        eng: 'frozen meat'
      },
      {
        man: '冷凍魚產品',
        eng: 'frozen fish'
      },
      {
        man: '冷凍甲殼類產品',
        eng: 'Frozen crustaceans'
      },
      {
        man: '蔬果製品',
        eng: 'processed vegetable'
      },
      {
        man: '生鮮冷凍冷藏蔬菜',
        eng: 'frozen vegetable'
      },
      {
        man: '生鮮冷凍冷藏水果',
        eng: 'Fresh refrigerated fruit'
      },
      {
        man: '生鮮截切蔬果',
        eng: 'fresh cut fruit'
      },
      {
        man: '乳類製品',
        eng: 'dairy products'
      },
      {
        man: '鮮乳(不加糖)',
        eng: 'milk'
      },
    ]

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
              //  $scope.products.push(response.data[0])
              $scope.loadProducts();

             },
             function(response){
                console.log(response);
             }
          );
    };

  }
})();
