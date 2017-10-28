/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('app.examples.components')
      .controller('MailTabCtrl', MailTabCtrl);

  /** @ngInject */
  function MailTabCtrl(componentsService, mailMessagesService) {

    var vm = this;
    vm.navigationCollapsed = true;
    vm.showCompose = function(subject, to , text){
      componentsService.open({
        subject : subject,
        to: to,
        text: text
      });
    };

    vm.tabs = mailMessagesService.getTabs();
  }

})();
