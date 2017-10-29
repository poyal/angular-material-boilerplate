(function () {
  'use strict';

  angular.module('app.examples.components')
    .controller('mailDetailController', MailDetailController);

  MailDetailController.$inject = ['$stateParams', 'mailMessagesService'];

  function MailDetailController($stateParams, mailMessagesService) {
    var vm = this;
    vm.mail = mailMessagesService.getMessageById($stateParams.id);
    vm.label = $stateParams.label;
  }
})();