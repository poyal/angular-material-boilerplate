(function () {
  'use strict';

  angular.module('app.core')
    .directive('baSidebarToggleMenu', BaSidebarToggleMenuDirective);

  BaSidebarToggleMenuDirective.$inject = ['baSidebarService'];

  function BaSidebarToggleMenuDirective(baSidebarService) {
    return {
      restrict: 'A',
      link: BaSidebarToggleMenuLink
    };

    function BaSidebarToggleMenuLink(scope, elem) {
      elem.on('click', function ($evt) {
        $evt.originalEvent.$sidebarEventProcessed = true;
        scope.$apply(function () {
          baSidebarService.toggleMenuCollapsed();
        });
      });
    }
  }
})();

