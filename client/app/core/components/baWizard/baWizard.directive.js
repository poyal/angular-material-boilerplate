(function () {
  'use strict';

  angular.module('app.core')
    .directive('baWizard', BaWizardDirective);

  BaWizardDirective.$inject = [];

  function BaWizardDirective() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'app/core/components/baWizard/baWizard.html',
      controllerAs: '$ctrl',
      controller: BaWizardController
    };
  }

  BaWizardController.$inject = ['$scope'];

  function BaWizardController($scope) {
    var vm = this;
    vm.tabs = [];

    vm.tabNum = 0;
    vm.progress = 0;

    function addTab(tab) {
      tab.setPrev(vm.tabs[vm.tabs.length - 1]);
      vm.tabs.push(tab);
      vm.selectTab(0);
    }

    $scope.$watch(angular.bind(vm, function () {
      return vm.tabNum;
    }), calcProgress);

    function selectTab(tabNum) {
      vm.tabs[vm.tabNum].submit();
      if (vm.tabs[tabNum].isAvailiable()) {
        vm.tabNum = tabNum;
        vm.tabs.forEach(function (tap, tIndex) {
          tIndex === vm.tabNum ? tap.select(true) : tap.select(false);
        });
      }
    }

    function isFirstTab() {
      return vm.tabNum === 0;
    }

    function isLastTab() {
      return vm.tabNum === vm.tabs.length - 1;
    }

    function nextTab() {
      vm.selectTab(vm.tabNum + 1);
    }

    function previousTab() {
      vm.selectTab(vm.tabNum - 1);
    }

    function calcProgress() {
      vm.progress = ((vm.tabNum + 1) / vm.tabs.length) * 100;
    }

    vm.addTab = addTab;
    vm.selectTab = selectTab;
    vm.isFirstTab = isFirstTab;
    vm.isLastTab = isLastTab;
    vm.nextTab = nextTab;
    vm.previousTab = previousTab;
  }
})();