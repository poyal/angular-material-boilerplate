(function () {
  'use strict';

  angular.module('app.core')
    .directive('autoExpand', AutoExpandDirective);

  AutoExpandDirective.$inject = [];

  /* @ngInject */
  function AutoExpandDirective() {
    return {
      restrict: 'A',
      link: AutoExpandLink
    };

    function AutoExpandLink(scope, elem) {
      elem.bind('keydown', function ($event) {
        var element = $event.target;
        $(element).height(0);
        var height = $(element)[0].scrollHeight;
        height = (height < 16) ? 16 : height;
        $(element).height(height);
      });

      // Expand the textarea as soon as it is added to the DOM
      setTimeout(function () {
        var element = elem;
        $(element).height(0);
        var height = $(element)[0].scrollHeight;
        height = (height < 16) ? 16 : height;
        $(element).height(height);
      }, 0);
    }
  }
})();