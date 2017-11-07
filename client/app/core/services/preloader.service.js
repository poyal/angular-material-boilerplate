(function () {
  'use strict';

  angular.module('app.core')
    .service('preloader', PreloaderService);

  PreloaderService.$inject = ['$q'];

  function PreloaderService($q) {
    var service = this;

    service.loadImg = loadImg;

    function loadImg(src) {
      var d = $q.defer();
      var img = new Image();
      img.src = src;
      img.onload = function () {
        d.resolve();
      };
      return d.promise;
    }
  }
})();