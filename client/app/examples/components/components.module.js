(function () {
  'use strict';

  angular.module('app.examples.components', [])
    .config(['$stateProvider', routeConfig]);

  function routeConfig($stateProvider) {
    $stateProvider
      .state('components', {
        url: '/components',
        template: '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
        abstract: true,
        title: 'Components',
        sidebarMeta: {
          icon: 'ion-gear-a',
          order: 100
        }
      });
  }
})();