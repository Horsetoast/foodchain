(function() {
  'use strict';

  angular
    .module('foodchain')
    .controller('Init', Init);

    function Init($scope, $http) {

      var companyId = 4711337;


      $scope.settings = {
        receiptsUrl: 'http://hackntu-foodchain.herokuapp.com/receipts',
        productsUrl: 'http://hackntu-foodchain.herokuapp.com/companies/'+companyId+'/products',
      }

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
