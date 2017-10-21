(function () {
  'use strict';

  angular.module('app.core')
    .directive('baSidebarCollapseMenu', BaSidebarCollapseMenuDirective);

  BaSidebarCollapseMenuDirective.$inject = ['baSidebarService'];

  /* @ngInject */
  function BaSidebarCollapseMenuDirective(baSidebarService) {
    return {
      restrict: 'A',
      link: DaSidebarCollapseMenuLink
    };

    function DaSidebarCollapseMenuLink(scope) {
      elem.on('click', function ($evt) {
        $evt.originalEvent.$sidebarEventProcessed = true;
        if (!baSidebarService.isMenuCollapsed()) {
          scope.$apply(function () {
            baSidebarService.setMenuCollapsed(true);
          });
        }
      });
    }
  }
})();

