(function () {
  'use strict';

  angular.module('app.core')
    .directive('widgets', WidgetsDirectove);

  WidgetsDirectove.$inject = [];

  /* @ngInject */
  function WidgetsDirectove() {
    return {
      restrict: 'EA',
      scope: {
        ngModel: '='
      },
      templateUrl: 'app/core/components/widgets/widgets.html',
      replace: true
    };
  }
})();