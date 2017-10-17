/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('app.pages.ui', [
    'app.pages.ui.typography',
    'app.pages.ui.buttons',
    'app.pages.ui.icons',
    'app.pages.ui.modals',
    'app.pages.ui.grid',
    'app.pages.ui.alerts',
    'app.pages.ui.progressBars',
    'app.pages.ui.notifications',
    'app.pages.ui.tabs',
    'app.pages.ui.slider',
    'app.pages.ui.panels'
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
