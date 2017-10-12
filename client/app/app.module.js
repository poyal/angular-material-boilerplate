(function () {
  'use strict';

  angular.module('app', [
    'ui.router',
    'ngAria',
    'ngSanitize',
    'ngMaterial',
    'ui-notification',
    'app.core',
    // 'app.templates',
    'app.dashboard',
    'app.examples'
  ]);
})();