(function () {
  'use strict';

  angular.module('app.examples.dashboard')
    .directive('popularApp', PopularAppDirective);

  PopularAppDirective.$inject = [];

  function PopularAppDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/examples/dashboard/components/popularApp/popularApp.html'
    };
  }
})();