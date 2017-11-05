(function () {
  'use strict';

  angular.module('app.examples.components', [])
    .config(['$stateProvider', '$urlRouterProvider', routeConfig])

  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.examples.components', {
        url: '/components',
        abstract: true,
        template: "<div ui-view  autoscroll='true' autoscroll-body-top></div>",
        title: 'Components',
        sidebarMeta: {
          icon: 'ion-gear-a',
          order: 100
        }
      })
      .state('app.examples.components.timeline', {
        url: '/timeline',
        templateUrl: 'app/examples/components/timeline/timeline.html',
        controller: 'timeLineController',
        controllerAs: 'vm',
        title: 'Timeline',
        sidebarMeta: {
          icon: 'ion-ios-pulse',
          order: 100
        }
      });
    $urlRouterProvider.when('app/examples/components/timeline', 'app/examples/components/mail/timeline');
  }
})();