(function () {
  'use strict';

  angular
    .module('app.core')
    .directive('autoFocus', AutoFocusDirective);

  AutoFocusDirective.$inject = ['$timeout', '$parse'];

  /* @ngInject */
  function AutoFocusDirective($timeout, $parse) {
    return {
      link: AutoFocusLink
    };

    function AutoFocusLink(scope, element, attrs) {
      var model = $parse(attrs.autoFocus);
      scope.$watch(model, function (value) {
        if (value === true) {
          $timeout(function () {
            element[0].focus();
            element[0].select();
          });
        }
      });
      element.bind('blur', function () {
        scope.$apply(model.assign(scope, false));
      });
    }
  }
})();