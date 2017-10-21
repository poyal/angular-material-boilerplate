(function () {
  'use strict';

  angular.module('app.core')
    .directive('scrollPosition', ScrollPositionDirective);

  ScrollPositionDirective.$inject = [];

  /* @ngInject */
  function ScrollPositionDirective() {
    return {
      scope: {
        scrollPosition: '=',
        maxHeight: '='
      },
      link: ScrollPositionLink
    };

    function ScrollPositionLink(scope) {
      $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop() > scope.maxHeight;
        if (scrollTop !== scope.prevScrollTop) {
          scope.$apply(function () {
            scope.scrollPosition = scrollTop;
          });
        }
        scope.prevScrollTop = scrollTop;
      });
    }
  }
})();