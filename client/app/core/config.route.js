(function () {
  'use strict';

  angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'app/template/template.html',
            controller: 'AppController',
            controllerAs: '$root'
          })
          .state('404', {
            url: '/404',
            templateUrl: 'app/templates/404.html'
          });
        $urlRouterProvider.when('', '/app/examples/dashboard');
        $urlRouterProvider.when('/', '/app/examples/dashboard');
        $urlRouterProvider.otherwise('/404');
      }
    ]);
})();