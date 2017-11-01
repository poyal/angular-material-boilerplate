(function () {
  'use strict';

  angular.module('app.examples.tables', [])
    .config(['$stateProvider', routeConfig]);

  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.examples.tables', {
        url: '/tables',
        abstract: true,
        template: "<div ui-view  autoscroll='true' autoscroll-body-top></div>",
        title: 'Maps',
        sidebarMeta: {
          icon: 'ion-grid',
          order: 300
        }
      })
      .state('app.examples.tables.basic', {
        url: '/basic',
        templateUrl: 'app/examples/tables/basic-table/basicTable.html',
        controller: 'basicTableController',
        controllerAs: 'vm',
        title: 'Basic Tables',
        sidebarMeta: {
          order: 0
        }
      })
      .state('app.examples.tables.smart', {
        url: '/smart',
        templateUrl: 'app/examples/tables/smart-table/smartTable.html',
        controller: 'smartTableController',
        controllerAs: 'vm',
        title: 'Smart Tables',
        sidebarMeta: {
          order: 100
        }
      });
  }
})();