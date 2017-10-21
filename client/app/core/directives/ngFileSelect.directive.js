(function () {
  'use strict';

  angular.module('app.core')
    .directive('ngFileSelect', NgFileSelectDirective);

  NgFileSelectDirective.$inject = [];

  /* @ngInject */
  function NgFileSelectDirective() {
    return {
      link: NgFileSelectLink
    };

    function NgFileSelectLink(scope, el) {
      el.bind('change', function (e) {
        scope.file = (e.srcElement || e.target).files[0];
        scope.getFile();
      });
    }
  }
})();