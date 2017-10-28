/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('app.examples.ui', [
    'app.examples.ui.typography',
    'app.examples.ui.buttons',
    'app.examples.ui.icons',
    'app.examples.ui.modals',
    'app.examples.ui.grid',
    'app.examples.ui.alerts',
    'app.examples.ui.progressBars',
    'app.examples.ui.notifications',
    'app.examples.ui.tabs',
    'app.examples.ui.slider',
    'app.examples.ui.panels'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui', {
          url: '/ui',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'UI Features',
          sidebarMeta: {
            icon: 'ion-android-laptop',
            order: 200
          }
        });
  }

})();
