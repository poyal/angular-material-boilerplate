(function () {
  'use strict';

  angular.module('app.examples.components', [])
    .config(['$stateProvider', '$urlRouterProvider', routeConfig])
    .config(jsTreeConfig);

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
      .state('app.examples.components.mail', {
        url: '/mail',
        abstract: true,
        templateUrl: 'app/examples/components/mail/mail.html',
        controller: 'mailController',
        controllerAs: '$tapRoot',
        title: 'Mail',
        sidebarMeta: {
          order: 0
        }
      })
      .state('app.examples.components.mail.label', {
        url: '/:label',
        templateUrl: 'app/examples/components/mail/list/mailList.html',
        controller: 'mailListController',
        controllerAs: 'vm',
        title: 'Mail'
      })
      .state('app.examples.components.mail.detail', {
        url: '/:label/:id',
        templateUrl: 'app/examples/components/mail/detail/mailDetail.html',
        controller: 'mailDetailController',
        controllerAs: 'vm',
        title: 'Mail'
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
      })
      .state('app.examples.components.tree', {
        url: '/tree',
        templateUrl: 'app/examples/components/tree/tree.html',
        controller: 'treeController',
        controllerAs: 'vm',
        title: 'Tree View',
        sidebarMeta: {
          order: 200
        }
      });
    $urlRouterProvider.when('app/examples/components/mail', 'app/examples/components/mail/inbox');
  }

  function jsTreeConfig() {
    $.jstree.defaults.core.themes.url = true;
    $.jstree.defaults.core.themes.dir = "assets/img/theme/vendor/jstree/dist/themes";
  }
})();