(function () {
  'use strict';

  angular.module('app')
    .constant('NotificationDelay', {
      primary: 5000,
      info: 10000,
      success: null,
      warning: null,
      error: null
    });
})();
