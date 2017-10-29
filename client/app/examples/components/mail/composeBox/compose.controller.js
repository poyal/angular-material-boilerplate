(function () {
  'use strict';

  angular.module('app.examples.components')
    .controller('composeController', ComposeController);

  ComposeController.$inject = ['subject', 'to', 'text'];

  /** @ngInject */
  function ComposeController(subject, to, text) {
    var vm = this;
    vm.subject = subject;
    vm.to = to;
    vm.text = text;
  }
})();