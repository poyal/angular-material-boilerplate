(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('baProgressModal', BaProgressModalFactory);

  BaProgressModalFactory.$inject = ['$uibModal'];

  /* @ngInject */
  function BaProgressModalFactory($uibModal) {
    var service = this;
    var methods = {};
    var progress = 0;
    var max = 100;
    var opened = false;

    service.setProgress = setProgress;
    service.getProgress = getProgress;
    service.open = open;
    service.close = close;

    function setProgress(value) {
      if (value > max) {
        throw Error('Progress can\'t be greater than max');
      }
      progress = value;
    }

    function getProgress() {
      return progress;
    }

    function open() {
      if (!opened) {
        methods = $uibModal.open({
          animation: true,
          templateUrl: 'app/pages/ui/modals/progressModal/progressModal.html',
          size: 'sm',
          keyboard: false,
          backdrop: 'static'
        });
        opened = true;
      } else {
        throw Error('Progress modal opened now');
      }
    }

    function close() {
      if (opened) {
        methods.close();
        opened = false;
      } else {
        throw Error('Progress modal is not active');
      }
    }
  }

})();

