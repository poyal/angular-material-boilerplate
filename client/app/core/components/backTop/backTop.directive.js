(function () {
  'use strict';

  angular.module('app.core')
    .directive('backTop', BackTopDirective);

  BackTopDirective.$inject = [];

  function BackTopDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/core/components/backTop/backTop.html',
      controller: BackTopController
    };
  }

  BackTopController.$inject = [];

  function BackTopController() {
    $('#backTop').backTop({
      'position': 200,
      'speed': 100
    });
  }
})();