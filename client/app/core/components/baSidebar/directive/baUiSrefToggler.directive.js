(function () {
  'use strict';

  angular.module('app.core')
    .directive('baUiSrefToggler', BaUiSrefTogglerDirective);

  BaUiSrefTogglerDirective.$inject = ['baSidebarService'];

  function BaUiSrefTogglerDirective(baSidebarService) {
    return {
      restrict: 'A',
      require: '^baSidebarTogglingItem',
      link:BaUiSrefTogglerLink
    };

    function BaUiSrefTogglerLink(scope, el, attrs, baSidebarTogglingItem) {
      el.on('click', function () {
        if (baSidebarService.isMenuCollapsed()) {
          // If the whole sidebar is collapsed and this item has submenu. We need to open sidebar.
          // This should not affect mobiles, because on mobiles sidebar should be hidden at all
          scope.$apply(function () {
            baSidebarService.setMenuCollapsed(false);
          });
          baSidebarTogglingItem.$expand();
        } else {
          baSidebarTogglingItem.$toggle();
        }
      });
    }
  }
})();