(function () {
  'use strict';

  angular
    .module('app.examples', [])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('app.examples', {
          url: '/examples',
          abstract: true,
          template: '<div ui-view></div>'
        })
        .state('app.examples.profile', {
          url: '/profile',
          templateUrl: 'app/examples/profile/profile.html',
          controller: 'ExamplesProfileController',
          controllerAs: 'vm'
        })
        .state('app.examples.table', {
          url: '/table',
          templateUrl: 'app/examples/table/table.html',
          controller: 'ExamplesTableController',
          controllerAs: 'vm'
        })
        .state('app.examples.typography', {
          url: '/typography',
          templateUrl: 'app/examples/typography/typography.html',
          controller: 'ExamplesTypographyController',
          controllerAs: 'vm'
        })
        .state('app.examples.icons', {
          url: '/icons',
          templateUrl: 'app/examples/icons/icons.html',
          controller: 'ExamplesIconsController',
          controllerAs: 'vm'
        })
        .state('app.examples.notifications', {
          url: '/notifications',
          templateUrl: 'app/examples/notifications/notifications.html',
          controller: 'ExamplesNotificationsController',
          controllerAs: 'vm'
        });
    }]);
})();