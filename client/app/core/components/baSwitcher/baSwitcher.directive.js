(function () {
  'use strict';

  angular.module('app.core')
    .directive('baSwitcher', BaSwitcherDirective);

  BaSwitcherDirective.$inject = [];

  function BaSwitcherDirective() {
    return {
      templateUrl: 'app/core/components/baSwitcher/baSwitcher.html',
      scope: {
        switcherStyle: '@',
        switcherValue: '='
      }
    };
  }
})();

