(function() {
  'use strict';

  angular
    .module('foodchain')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
