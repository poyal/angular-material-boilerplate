(function () {
  'use strict';

  angular.module('app')
    .run(appRun)
    .config(['toastrConfig', toastrLibConfig]);

  function appRun() {

  }

  function toastrLibConfig(toastrConfig) {
    angular.extend(toastrConfig, {
      closeButton: true,
      closeHtml: '<button>&times;</button>',
      timeOut: 5000,
      autoDismiss: false,
      containerId: 'toast-container',
      maxOpened: 0,
      newestOnTop: true,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
      preventOpenDuplicates: false,
      target: 'body'
    });
  }
})();