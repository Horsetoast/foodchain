(function() {
  'use strict';

  angular
    .module('foodchain')
    .controller('TrackController', TrackController);

  /** @ngInject */
  function TrackController($scope, $http, $filter, $state, $stateParams) {
    var vm = this;
    var companies = {};

    $scope.companyExists = true;
    $scope.detailId = $state.params.detail;

    if(typeof $scope.detailId !== "undefined") {
      $http.get('http://hackntu-foodchain.herokuapp.com/companies/'+$scope.detailId+'/receipts')
      .then(
          function(response){
            console.log(response);
            $scope.detailReceipts = response.data;
          },
          function(response){
             console.log(response);
             $scope.companyExists = false;
          }
       );
    }

    $http.get('http://hackntu-foodchain.herokuapp.com/companies')
    .then(
        function(response){
          console.log(response);
          companies = response.data;
        },
        function(response){
           console.log(response);
        }
     );

    $scope.searchCompany = function(name) {
          var found = $filter('filter')(companies, {name: name}, true);
          if (found.length) {
            var id = found[0].id;
            $state.go('detail', {detail: id});
          } else {
              console.log('Not found');
          }
    }

  }
})();
