(function () {
  'use strict';

  angular
    .module('app.dashboard', [])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('app.dashboard', {
          url: '/dashboard',
          templateUrl: 'app/dashboard/dashboard.html',
          controller: 'DashboardController',
          controllerAs: 'vm'
        });
    }]);
})();
