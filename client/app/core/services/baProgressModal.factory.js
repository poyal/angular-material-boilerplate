(function () {
  'use strict';

  angular.module('app.core')
    .factory('baProgressModal', BaProgressModalFactory);


  BaProgressModalFactory.$inject = ['$uibModal'];

  function BaProgressModalFactory($uibModal) {
    var methods = {};
    var progress = 0;
    var max = 100;
    var opened = false;

    return {
      setProgress: function (value) {
        if (value > max) {
          throw Error('Progress can\'t be greater than max');
        }
        progress = value;
      },
      getProgress: function () {
        return progress;
      },
      open: function () {
        if (!opened) {
          methods = $uibModal.open({
            animation: true,
            templateUrl: 'app/core/components/progressModal/progressModal.html',
            controller: 'progressModalController',
            controllerAs: '$ctrl',
            size: 'sm',
            keyboard: false,
            backdrop: 'static'
          });
          opened = true;
        } else {
          throw Error('Progress modal opened now');
        }

      },
      close: function () {
        if (opened) {
          methods.close();
          opened = false;
        } else {
          throw Error('Progress modal is not active');
        }
      }
    };
  }
})();