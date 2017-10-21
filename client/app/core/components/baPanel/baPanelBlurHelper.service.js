(function () {
  'use strict';

  angular.module('app.core')
    .service('baPanelBlurHelper', BaPanelBlurHelperService);

  BaPanelBlurHelperService.$inject = ['$q'];

  function BaPanelBlurHelperService($q) {
    var service = this;

    var res = $q.defer();
    var computedStyle = getComputedStyle(document.body, ':before');
    var image = new Image();
    image.src = computedStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
    image.onerror = function () {
      res.reject();
    };
    image.onload = function () {
      res.resolve();
    };

    function bodyBgLoad() {
      return res.promise;
    }

    function getBodyBgImageSizes() {
      var elemW = document.documentElement.clientWidth;
      var elemH = document.documentElement.clientHeight;
      if (elemW <= 640) return;
      var imgRatio = (image.height / image.width);       // original img ratio
      var containerRatio = (elemH / elemW);     // container ratio

      var finalHeight, finalWidth;
      if (containerRatio > imgRatio) {
        finalHeight = elemH;
        finalWidth = (elemH / imgRatio);
      } else {
        finalWidth = elemW;
        finalHeight = (elemW * imgRatio);
      }
      return {
        width: finalWidth,
        height: finalHeight,
        positionX: (elemW - finalWidth) / 2,
        positionY: (elemH - finalHeight) / 2
      };
    }

    service.bodyBgLoad = bodyBgLoad;
    service.getBodyBgImageSizes = getBodyBgImageSizes;
  }

})();

