(function() {
  'use strict';
  
  angular
    .module('foodchain')
    .controller('Init', Init)
    .constant('config', {
      //BaseURL: 'http://localhost:4000'
      BaseURL: 'http://hackntu-foodchain.herokuapp.com'
    });
  
    function Init($scope, $http, config) {
      
      var companyId = 4711337;
      
      $scope.settings = {
        receiptsUrl: config.BaseURL+'/companies/'+companyId+'/receipts',
        productsUrl: config.BaseURL+'/companies/'+companyId+'/products',
      }

      $scope.loadProducts = function() {
        $http.get($scope.settings.productsUrl)
           .then(
               function(response){
                 console.log(response);
                 $scope.products = response.data;
                 // create new object with only id : name pair
                 $scope.productNames = {};
                 $scope.products.forEach(function(product) {
                   $scope.productNames[product.id] = product;
                 });
               },
               function(response){
                 $scope.products = [
                   {
                     name: 'Flour',
                     price: 40,
                     taxCategory: "food",
                     fdaCategory: "agriculture",
                   }
                 ];
                  console.log(response);
               }
            );
      }

      $scope.loadProducts();

      $scope.items = [];

      $scope.receipt = {
          id: 'id', // receipt id
          company: "Foodchain Inc.",
          address: "No. 1, Section 4, Roosevelt Rd, Da’an District, Taipei City, 10617",
          contact: "0912998210", //telefone?? Not sure
          sellerTaxID: 42434667,
          buyerTaxID: 24564936,
          taxQuarter: "03-04",
          items: $scope.items,
          MachineNo: 4711,
          SerialNo: 133742
        }
    }
})();
