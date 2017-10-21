(function () {
  'use strict';

  angular.module('app.core')
    .directive('baWizardStep', BaWizardStepDirective);

  BaWizardStepDirective.$inject = [];

  function BaWizardStepDirective() {
    return {
      restrict: 'E',
      transclude: true,
      require: '^baWizard',
      scope: {
        form: '='
      },
      templateUrl: 'app/core/components/baWizard/baWizardStep.html',
      link: BaWizardStepLink
    };

    function BaWizardStepLink($scope, $element, $attrs, wizard) {
      $scope.selected = true;

      var tab = {
        title: $attrs.title,
        select: select,
        submit: submit,
        isComplete: isComplete,
        isAvailiable: isAvailiable,
        prevTab: undefined,
        setPrev: setPrev
      };

      wizard.addTab(tab);

      function select(isSelected) {
        $scope.selected = !!isSelected;
      }

      function submit() {
        $scope.form && $scope.form.$setSubmitted(true);
      }

      function isComplete() {
        return $scope.form ? $scope.form.$valid : true;
      }

      function isAvailiable() {
        return tab.prevTab ? tab.prevTab.isComplete() : true;
      }

      function setPrev(pTab) {
        tab.prevTab = pTab;
      }
    }
  }
})();