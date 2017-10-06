(function () {
  'use strict';

  angular.module('app.test')
    .controller('TestListController', TestListController);

  TestListController.$inject = [];

  function TestListController() {
    var vm = this;
  }
})();