(function () {
  'use strict';

  angular.module('app', [
    'ui.router',
    'ngSanitize',
    'ui-notification',
    'app.core',
    // 'app.templates',
    'app.dashboard',
    'app.examples'
  ]);
})();