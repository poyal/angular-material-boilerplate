(function () {
  'use strict';

  angular.module('app.examples.components')
    .controller('mailController', MailController);

  MailController.$inject = ['componentsService', 'mailMessagesService'];

  function MailController(componentsService, mailMessagesService) {
    var vm = this;
    vm.navigationCollapsed = true;

    function showCompose(subject, to, text) {
      componentsService.open({
        subject: subject,
        to: to,
        text: text
      });
    }

    vm.showCompose = showCompose;

    vm.tabs = mailMessagesService.getTabs();
  }
})();