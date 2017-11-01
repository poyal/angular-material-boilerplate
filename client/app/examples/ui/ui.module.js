(function () {
  'use strict';

  angular.module('app.examples.ui', [])
    .config(['$stateProvider', routeConfig]);

  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.examples.ui', {
        url: '/ui',
        abstract: true,
        template: "<div ui-view  autoscroll='true' autoscroll-body-top></div>",
        title: 'UI Features',
        sidebarMeta: {
          icon: 'ion-android-laptop',
          order: 200
        }
      })
      .state('app.examples.ui.alerts', {
        url: '/alerts',
        templateUrl: 'app/examples/ui/alerts/alerts.html',
        title: 'Alerts',
        sidebarMeta: {
          order: 500
        }
      })
      .state('app.examples.ui.buttons', {
        url: '/buttons',
        templateUrl: 'app/examples/ui/buttons/buttons.html',
        controller: 'buttonsController',
        controllerAs: 'vm',
        title: 'Buttons',
        sidebarMeta: {
          order: 100
        }
      })
      .state('app.examples.ui.grid', {
        url: '/grid',
        templateUrl: 'app/examples/ui/grid/grid.html',
        title: 'Grid',
        sidebarMeta: {
          order: 400
        }
      })
      .state('app.examples.ui.icons', {
        url: '/icons',
        templateUrl: 'app/examples/ui/icons/icons.html',
        controller: 'iconsController',
        controllerAs: 'vm',
        title: 'Icons',
        sidebarMeta: {
          order: 200
        }
      })
      .state('app.examples.ui.modals', {
        url: '/modals',
        templateUrl: 'app/examples/ui/modals/modals.html',
        controller: 'modalsController',
        controllerAs: 'vm',
        title: 'Modals',
        sidebarMeta: {
          order: 300
        }
      })
      .state('app.examples.ui.notifications', {
        url: '/notifications',
        templateUrl: 'app/examples/ui/notifications/notifications.html',
        controller: 'notificationsController',
        controllerAs: 'vm',
        title: 'Notifications',
        sidebarMeta: {
          order: 700
        }
      })
      .state('app.examples.ui.panels', {
        url: '/panels',
        templateUrl: 'app/examples/ui/panels/panels.html',
        title: 'Panels',
        sidebarMeta: {
          order: 1100
        }
      })
      .state('app.examples.ui.progressBars', {
        url: '/progressBars',
        templateUrl: 'app/examples/ui/progressBars/progressBars.html',
        title: 'Progress Bars',
        sidebarMeta: {
          order: 600
        }
      })
      .state('app.examples.ui.slider', {
        url: '/slider',
        templateUrl: 'app/examples/ui/slider/slider.html',
        title: 'Sliders',
        sidebarMeta: {
          order: 1000
        }
      })
      .state('app.examples.ui.tabs', {
        url: '/tabs',
        templateUrl: 'app/examples/ui/tabs/tabs.html',
        title: 'Tabs & Accordions',
        sidebarMeta: {
          order: 800
        }
      })
      .state('app.examples.ui.typography', {
        url: '/typography',
        templateUrl: 'app/examples/ui/typography/typography.html',
        title: 'Typography',
        sidebarMeta: {
          order: 0
        }
      });
  }
})();