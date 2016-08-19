(function() {
  'use strict';

  angular
    .module('foodchain')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
