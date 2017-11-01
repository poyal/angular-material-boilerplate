(function () {
  'use strict';

  angular
    .module('app.examples.form')
    .directive('switch', SwitchDirective);

  SwitchDirective.$inject = [];

  function SwitchDirective() {
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        ngModel: '='
      },
      template: SwitchTemplate,
      link: SwitchLink
    };

    function SwitchLink(scope, elem, attr) {
      var input = $(elem).find('input');
      input.bootstrapSwitch({
        size: 'small',
        onColor: attr.color
      });
      input.on('switchChange.bootstrapSwitch', function (event, state) {
        scope.ngModel = state;
        scope.$apply();
      });
    }

    /**
     * @return {string}
     */
    function SwitchTemplate(el, attrs) {
      return '<div class="switch-container ' + (attrs.color || '') + '"><input type="checkbox" ng-model="ngModel"></div>';
    }
  }
})();