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
      })
      .state('app.examples.maps.leaflet', {
        url: '/leaflet',
        templateUrl: 'app/examples/maps/leaflet/leaflet.html',
        controller: 'leafletController',
        controllerAs: 'vm',
        title: 'Leaflet Maps',
        sidebarMeta: {
          order: 100
        }
      })
      .state('app.examples.maps.bubble', {
        url: '/bubble',
        templateUrl: 'app/examples/maps/bubbles/bubbles.html',
        controller: 'bubblesController',
        controllerAs: 'vm',
        title: 'Bubble Maps',
        sidebarMeta: {
          order: 200
        }
      })
      .state('app.examples.maps.lines', {
        url: '/lines',
        templateUrl: 'app/examples/maps/lines/lines.html',
        controller: 'linesController',
        controllerAs: 'vm',
        title: 'Line Maps',
        sidebarMeta: {
          order: 300
        }
      });
  }
})();