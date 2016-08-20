(function() {
  'use strict';

  angular
    .module('foodchain')
    .controller('ReceiptController', ReceiptController);

  /** @ngInject */
  function ReceiptController($scope, $http) {
    var vm = this;

    $scope.receiptStatus = "none";

    if($scope.receipt.items.length > 0) {
      $scope.receiptStatus = "ready";
    }

    $scope.submitReceipt = function() {
      console.log($scope.receipt);
      if($scope.receipt.items.length == 0) {
        return;
      }
      $http.post($scope.settings.receiptsUrl, $scope.receipt)
         .then(
             function(response){
               console.log(response);
               $scope.receiptStatus = "sent";
             },
             function(response){
                console.log(response);
             }
          );
    }
  }
})();
