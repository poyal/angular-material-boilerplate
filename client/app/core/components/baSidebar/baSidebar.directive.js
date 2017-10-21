(function () {
  'use strict';

  angular.module('app.core')
    .directive('baSidebar', DaSidebarDirective);

  DaSidebarDirective.$inject = ['$timeout', 'baSidebarService', 'baUtil'];

  function DaSidebarDirective($timeout, baSidebarService, baUtil) {
    return {
      restrict: 'E',
      templateUrl: 'app/core/components/baSidebar/ba-sidebar.html',
      controller: 'baSidebarController',
      controllerAs: '$ctrl',
      link: DaSidebarLink
    };

    function DaSidebarLink(scope, el) {
      var jqWindow = $(window);
      scope.menuHeight = el[0].childNodes[0].clientHeight - 84;
      jqWindow.on('click', _onWindowClick);
      jqWindow.on('resize', _onWindowResize);

      scope.$on('$destroy', function () {
        jqWindow.off('click', _onWindowClick);
        jqWindow.off('resize', _onWindowResize);
      });

      function _onWindowClick($evt) {
        if (!baUtil.isDescendant(el[0], $evt.target) &&
          !$evt.originalEvent.$sidebarEventProcessed &&
          !baSidebarService.isMenuCollapsed() &&
          baSidebarService.canSidebarBeHidden()) {
          $evt.originalEvent.$sidebarEventProcessed = true;
          $timeout(function () {
            baSidebarService.setMenuCollapsed(true);
          }, 10);
        }
      }

      // watch window resize to change menu collapsed state if needed
      function _onWindowResize() {
        var newMenuCollapsed = baSidebarService.shouldMenuBeCollapsed();
        var newMenuHeight = _calculateMenuHeight();
        if (newMenuCollapsed !== baSidebarService.isMenuCollapsed() || scope.menuHeight !== newMenuHeight) {
          scope.$apply(function () {
            scope.menuHeight = newMenuHeight;
            baSidebarService.setMenuCollapsed(newMenuCollapsed);
          });
        }
      }

      function _calculateMenuHeight() {
        return el[0].childNodes[0].clientHeight - 84;
      }
    }
  }
})();