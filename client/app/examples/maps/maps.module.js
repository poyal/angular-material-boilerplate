(function () {
  'use strict';

  angular.module('app.examples.maps', [])
    .config(['$stateProvider', routeConfig]);

  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.examples.maps', {
        url: '/maps',
        abstract: true,
        template: "<div ui-view  autoscroll='true' autoscroll-body-top></div>",
        title: 'Maps',
        sidebarMeta: {
          icon: 'ion-ios-location-outline',
          order: 500
        }
      })
      .state('app.examples.maps.google', {
        url: '/google',
        templateUrl: 'app/examples/maps/google/google.html',
        controller: 'googleController',
        controllerAs: 'vm',
        title: 'Google Maps',
        sidebarMeta: {
          order: 0
        }
      });
  }
})();