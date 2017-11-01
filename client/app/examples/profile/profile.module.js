/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('app.examples.profile', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('profile', {
          url: '/profile',
          title: 'Profile',
          templateUrl: 'app/examples/profile/profile.html',
          controller: 'ProfilePageCtrl',
        });
  }

})();