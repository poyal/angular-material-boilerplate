(function () {
  'use strict';

  angular.module('app.examples.form')
    .controller('wizardController', WizardController);

  WizardController.$inject = [];

  function WizardController() {
    var vm = this;

    vm.personalInfo = {};
    vm.productInfo = {};
    vm.shipment = {};

    function arePersonalInfoPasswordsEqual() {
      return vm.personalInfo.confirmPassword && vm.personalInfo.password === vm.personalInfo.confirmPassword;
    }

    vm.arePersonalInfoPasswordsEqual = arePersonalInfoPasswordsEqual;
  }
})();

