(function () {
  'use strict';

  angular
    .module('app.test', [])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('app.test', {
          url: '/test',
          abstract: true,
          template: '<div ui-view></div>'
        })
        .state('app.test.list', {
          url: '/list',
          templateUrl: 'app/test/list/list.html',
          controller: 'TestListController',
          controllerAs: 'vm'
        });
    }]);
})();