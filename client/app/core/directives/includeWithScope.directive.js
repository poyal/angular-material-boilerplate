(function () {
  'use strict';

  angular.module('app.core')
    .directive('includeWithScope', IncludeWithScopeDirective);

  IncludeWithScopeDirective.$inject = [];

  /* @ngInject */
  function IncludeWithScopeDirective() {
    return {
      restrict: 'AE',
      templateUrl: IncludeWithScopeTemplateUrl
    };

    function IncludeWithScopeTemplateUrl(ele, attrs) {
      return attrs.includeWithScope;
    }
  }
})();