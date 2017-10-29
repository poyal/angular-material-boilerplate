(function () {
  'use strict';

  angular.module('app.examples.components')
    .controller('mailListController', MailListController);

  MailListController.$inject = ['$stateParams', 'mailMessagesService'];

  function MailListController($stateParams, mailMessagesService) {
    var vm = this;
    vm.messages = mailMessagesService.getMessagesByLabel($stateParams.label);
    vm.label = $stateParams.label;
  }
})();