(function () {
  'use strict';

  angular.module('app.core')
    .directive('pageTop', PageTopDirective);

  PageTopDirective.$inject = [];

  /* @ngInject */
  function PageTopDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/core/components/pageTop/pageTop.html'
    };
  }
})();