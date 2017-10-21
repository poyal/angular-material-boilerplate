(function () {
  'use strict';

  angular.module('app.core')
    .directive('baUiSrefTogglingSubmenu', BaUiSrefTogglingSubmenuDirective);

  BaUiSrefTogglingSubmenuDirective.$inject = [];

  /* @ngInject */
  function BaUiSrefTogglingSubmenuDirective() {
    return {
      restrict: 'A',
      require: '^baSidebarTogglingItem',
      link: BaUiSrefTogglingSubmenuLink
    };

    function BaUiSrefTogglingSubmenuLink(scope, el, attrs, baSidebarTogglingItem) {
      baSidebarTogglingItem.$$expandSubmenu = function () {
        el.slideDown();
      };
      baSidebarTogglingItem.$$collapseSubmenu = function () {
        el.slideUp();
      };
    }
  }
})();

