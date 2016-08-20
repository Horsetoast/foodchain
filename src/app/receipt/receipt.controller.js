(function() {
  'use strict';

  angular
    .module('foodchain')
    .controller('ReceiptController', ReceiptController);

  /** @ngInject */
  function ReceiptController($scope, $http) {
    var vm = this;

    $scope.submitReceipt = function() {
      console.log($scope.receipt);
      $http.post($scope.settings.receiptsUrl, $scope.receipt)
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
