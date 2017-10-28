/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('app.examples.ui.grid', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.grid', {
          url: '/grid',
          templateUrl: 'app/examples/ui/grid/grid.html',
          title: 'Grid',
          sidebarMeta: {
            order: 400,
          },
        });
  }

})();
