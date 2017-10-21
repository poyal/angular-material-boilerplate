(function () {
  'use strict';

  angular.module('app.core')
    .directive('contentTop', ContentTopDirective);

  ContentTopDirective.$inject = ['$state'];

  function ContentTopDirective($state) {
    return {
      restrict: 'E',
      templateUrl: 'app/core/components/contentTop/contentTop.html',
      link: ContentTopLink
    };

    function ContentTopLink(scope) {
      scope.$watch(function () {
        scope.activePageTitle = $state.current.title;
      });
    }
  }
})();