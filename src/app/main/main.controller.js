(function() {
  'use strict';

  angular
    .module('foodchain')
    .controller('MainController', MainController);

    // {
    //     id: rid, // receipt id
    //     company: "Foodchain Inc.",
    //     address: "No. 1, Section 4, Roosevelt Rd, Da’an District, Taipei City, 10617",
    //     contact: "0912998210", //telefone?? Not sure
    //     sellerTaxID: 42434667,
    //     buyerTaxID: 24564936,
    //     taxQuarter: "03-04",
    //     items: [{
    //       name: "Red Tomatoes",
    //       qty: 10,
    //       price: 20,
    //       taxCategory: "food",
    //       fdaCategory: "agriculture",
    //       ItemProductionDate: 1471620321,
    //       ItemExpirationDate: 1471651421
    //     }],
    //     MachineNo: 4711,
    //     SerialNo: 133742
    //   }

  /** @ngInject */
  function MainController($scope, $http) {
    var vm = this;
    var url = 'http://hackntu-foodchain.herokuapp.com/receipts';

    $scope.taxId = '';
    $scope.items = [{
      name: '',
      qty: 0
    }];

    $scope.addItem = function(item = {name: '', qty: 0}) {
      $scope.items.push(item);
    }

    $scope.createReceipt = function() {
      var receipt = {
        buyerTaxID: $scope.taxId
        // items: $scope.items
      }
      console.log(receipt);
      $http.post(url, receipt)
         .then(
             function(response){
               console.log(response);
             },
             function(response){
                console.log(response);
             }
          );
    }
  }
})();
