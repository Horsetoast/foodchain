(function() {
  'use strict';

  angular
    .module('foodchain')
    .controller('Init', Init);

    function Init($scope, $http) {

      $scope.settings = {
        receiptsUrl: 'http://hackntu-foodchain.herokuapp.com/receipts',
        productsUrl: 'http://hackntu-foodchain.herokuapp.com/products',
      }

      $http.get($scope.settings.productsUrl)
         .then(
             function(response){
               console.log(response);
               $scope.products = response.data;
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
