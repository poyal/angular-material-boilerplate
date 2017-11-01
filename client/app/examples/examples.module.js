(function () {
  'use strict';

  angular.module('app.examples', [
    'app.examples.dashboard',
    'app.examples.charts',
    'app.examples.components',
    'app.examples.form',
    'app.examples.maps'

    // 'app.examples.ui',

    // 'app.examples.tables',
    //

    // 'app.examples.profile'
  ]).config(['$stateProvider', routeConfig]);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.examples', {
        url: '/examples',
        abstract: true,
        template: '<div ui-view></div>'
      });
  }
})();
