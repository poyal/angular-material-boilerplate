(function () {
  'use strict';

  angular.module('app.examples.ui')
    .controller('buttonsController', ButtonsController);

  ButtonsController.$inject = ['$timeout'];

  function ButtonsController($timeout) {
    var vm = this;

    function progressFunction() {
      return $timeout(function () {
      }, 3000);
    }

    vm.progressFunction = progressFunction;
  }
})();