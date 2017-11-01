(function () {
  'use strict';

  angular.module('app.examples.dashboard')
    .controller('dashBoardController', DashBoardController);

  DashBoardController.$inject = [];

  function DashBoardController() {
    var vm = this;
  }
})();