/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function () {
  'use strict';

  angular.module('app.examples.components')
    .controller('MailListCtrl', MailListCtrl);

  /** @ngInject */
  function MailListCtrl($stateParams,  mailMessagesService) {
    var vm = this;
    vm.messages = mailMessagesService.getMessagesByLabel($stateParams.label);
    vm.label = $stateParams.label;
  }

})();
