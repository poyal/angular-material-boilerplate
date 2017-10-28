(function () {
  'use strict';

  angular.module('app.examples.dashboard', [])
    .config(['$stateProvider', routeConfig]);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.examples.dashboard', {
        url: '/dashboard',
        templateUrl: 'app/examples/dashboard/dashboard.html',
        title: 'Dashboard',
        sidebarMeta: {
          icon: 'ion-android-home',
          order: 0
        }
      });
  }
})();
