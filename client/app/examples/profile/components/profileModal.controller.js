(function () {
  'use strict';

  angular.module('app.examples.profile')
    .controller('profileModalController', ProfileModalController);

  ProfileModalController.$inject = ['$uibModalInstance'];

  function ProfileModalController($uibModalInstance) {
    var vm = this;
    vm.link = '';

    function ok() {
      $uibModalInstance.close(vm.link);
    }

    vm.ok = ok;
  }
})();

