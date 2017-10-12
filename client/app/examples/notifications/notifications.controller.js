(function () {
  'use strict';

  angular.module('app.examples')
    .controller('ExamplesNotificationsController', ExamplesNotificationsController);

  ExamplesNotificationsController.$inject = ['Util'];

  function ExamplesNotificationsController(Util) {
    var vm = this;
    vm.notification = notification;

    function notification() {
      Util.notification('warning', '', 'message', function () {
        console.log('close CallBack');
      });
    }
  }
})();