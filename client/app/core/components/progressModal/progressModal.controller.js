(function () {
  'use strict';

  angular.module('app.core')
    .controller('progressModalController', ProgressModalController);

  ProgressModalController.$inject = ['$timeout', 'baProgressModal'];

  function ProgressModalController($timeout, baProgressModal) {

    baProgressModal.setProgress(0);

    (function changeValue() {
      if (baProgressModal.getProgress() >= 100) {
        baProgressModal.close();
      } else {
        baProgressModal.setProgress(baProgressModal.getProgress() + 10);
        $timeout(changeValue, 300);
      }
    })();
  }
})();