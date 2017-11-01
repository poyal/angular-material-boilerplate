(function () {
  'use strict';

  angular.module('app.examples.form')
    .directive('selectpicker', SelectPickerDirective);

  SelectPickerDirective.$inject = [];

  /* @ngInject */
  function SelectPickerDirective() {
    return {
      restrict: 'A',
      require: '?ngOptions',
      priority: 1500, // make priority bigger than ngOptions and ngRepeat
      link: {
        pre: SelectPickerLinkPre,
        post: SelectPickerLinkPost
      }
    };

    function SelectPickerLinkPre(scope, elem, attrs) {
      elem.append('<option data-hidden="true" disabled value="">' + (attrs.title || 'Select something') + '</option>');
    }

    function SelectPickerLinkPost(scope, elem, attrs) {
      function refresh() {
        elem.selectpicker('refresh');
      }

      if (attrs.ngModel) {
        scope.$watch(attrs.ngModel, refresh);
      }

      if (attrs.ngDisabled) {
        scope.$watch(attrs.ngDisabled, refresh);
      }

      elem.selectpicker({dropupAuto: false, hideDisabled: true});
    }
  }
})();