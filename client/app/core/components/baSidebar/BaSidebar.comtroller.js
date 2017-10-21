(function () {
  'use strict';

  angular.module('app.core')
    .controller('baSidebarController', BaSidebarController);

  BaSidebarController.$inject = ['$scope', 'baSidebarService'];

  function BaSidebarController($scope, baSidebarService) {
    var vm = this;

    vm.menuItems = baSidebarService.getMenuItems();
    vm.defaultSidebarState = vm.menuItems[0].stateRef;

    function hoverItem($event) {
      vm.showHoverElem = true;
      vm.hoverElemHeight = $event.currentTarget.clientHeight;
      var menuTopValue = 66;
      vm.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - menuTopValue;
    }

    $scope.$on('$stateChangeSuccess', function () {
      if (baSidebarService.canSidebarBeHidden()) {
        baSidebarService.setMenuCollapsed(true);
      }
    });

    vm.hoverItem = hoverItem;
  }
})();