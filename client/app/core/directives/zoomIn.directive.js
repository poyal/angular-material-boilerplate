(function () {
  'use strict';

  angular.module('app.core')
    .directive('zoomIn', ZoomInDirective);

  ZoomInDirective.$inject = ['$rootScope', '$timeout'];

  /* @ngInject */
  function ZoomInDirective($rootScope, $timeout) {
    return {
      restrict: 'A',
      link: ZoomInLink
    };

    function ZoomInLink(scope, elem) {
      var delay = 1000;

      $timeout(function () {
        elem.removeClass('full-invisible');
        elem.addClass('animated zoomIn');
      }, delay);
    }
  }
})();