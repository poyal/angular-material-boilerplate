/**
 * @author v.lugovsky
 * created on 23.12.2015
 */
(function () {
  'use strict';

  angular.module('app.examples.ui.panels', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.panels', {
          url: '/panels',
          templateUrl: 'app/examples/ui/panels/panels.html',
          controller: 'NotificationsPageCtrl',
          title: 'Panels',
          sidebarMeta: {
            order: 1100,
          },
        });
  }

})();