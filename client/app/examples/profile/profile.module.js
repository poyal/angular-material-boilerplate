(function () {
  'use strict';

  angular.module('app.examples.profile', [])
    .config(['$stateProvider', routeConfig]);

  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.examples.profile', {
        url: '/profile',
        templateUrl: 'app/examples/profile/profile/profile.html',
        controller: 'profileController',
        controllerAs: 'vm',
        title: 'Profile',
        sidebarMeta: {
          order: 0
        }
      });
  }
})();