(function () {
  'use strict';

  angular.module('app.core')
    .directive('baPanelBlur', BaPanelBlurDirective);

  BaPanelBlurDirective.$inject = ['baPanelBlurHelper', '$window', '$rootScope'];

  /* @ngInject */
  function BaPanelBlurDirective(baPanelBlurHelper, $window, $rootScope) {
    var bodyBgSize;

    baPanelBlurHelper.bodyBgLoad().then(function () {
      bodyBgSize = baPanelBlurHelper.getBodyBgImageSizes();
    });

    $window.addEventListener('resize', function () {
      bodyBgSize = baPanelBlurHelper.getBodyBgImageSizes();
    });

    return {
      restrict: 'A',
      link: DaPanelBlurLink
    };

    function DaPanelBlurLink(scope, elem) {
      if (!$rootScope.$isMobile) {
        baPanelBlurHelper.bodyBgLoad().then(function () {
          setTimeout(recalculatePanelStyle);
        });
        $window.addEventListener('resize', recalculatePanelStyle);

        scope.$on('$destroy', function () {
          $window.removeEventListener('resize', recalculatePanelStyle);
        });
      }

      function recalculatePanelStyle() {
        if (!bodyBgSize) {
          return;
        }
        elem.css({
          backgroundSize: Math.round(bodyBgSize.width) + 'px ' + Math.round(bodyBgSize.height) + 'px',
          backgroundPosition: Math.floor(bodyBgSize.positionX) + 'px ' + Math.floor(bodyBgSize.positionY) + 'px'
        });
      }
    }
  }
})();