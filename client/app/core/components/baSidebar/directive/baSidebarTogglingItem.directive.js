(function () {
  'use strict';

  angular.module('app.core')
    .directive('baSidebarTogglingItem', BaSidebarTogglingItemDirective);

  BaSidebarTogglingItemDirective.$inject = [];

  function BaSidebarTogglingItemDirective() {
    return {
      restrict: 'A',
      controller: BaSidebarTogglingItemController
    };
  }

  BaSidebarTogglingItemController.$inject = ['$scope', '$element', '$attrs', '$state', 'baSidebarService'];

  function BaSidebarTogglingItemController($scope, $element, $attrs, $state, baSidebarService) {
    var vm = this;
    var menuItem = vm.$$menuItem = $scope.$eval($attrs.baSidebarTogglingItem);
    if (menuItem && menuItem.subMenu && menuItem.subMenu.length) {
      vm.$$expandSubmenu = function () {
        console.warn('$$expandMenu should be overwritten by baUiSrefTogglingSubmenu');
      };
      vm.$$collapseSubmenu = function () {
        console.warn('$$collapseSubmenu should be overwritten by baUiSrefTogglingSubmenu');
      };

      var subItemsStateRefs = baSidebarService.getAllStateRefsRecursive(menuItem);

      vm.$expand = function () {
        vm.$$expandSubmenu();
        $element.addClass('ba-sidebar-item-expanded');
      };

      vm.$collapse = function () {
        vm.$$collapseSubmenu();
        $element.removeClass('ba-sidebar-item-expanded');
      };

      vm.$toggle = function () {
        $element.hasClass('ba-sidebar-item-expanded') ?
          vm.$collapse() :
          vm.$expand();
      };

      if (_isState($state.current)) {
        $element.addClass('ba-sidebar-item-expanded');
      }

      $scope.$on('$stateChangeStart', function (event, toState) {
        if (!_isState(toState) && $element.hasClass('ba-sidebar-item-expanded')) {
          vm.$collapse();
          $element.removeClass('ba-sidebar-item-expanded');
        }
      });

      $scope.$on('$stateChangeSuccess', function (event, toState) {
        if (_isState(toState) && !$element.hasClass('ba-sidebar-item-expanded')) {
          vm.$expand();
          $element.addClass('ba-sidebar-item-expanded');
        }
      });
    }

    function _isState(state) {
      return state && subItemsStateRefs.some(function (subItemState) {
        return state.name.indexOf(subItemState) === 0;
      });
    }
  }
})();