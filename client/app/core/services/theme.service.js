(function () {
  'use strict';

  angular
    .module('app.core')
    .service('themeLayoutSettings', ThemeLayoutSettingsService);

  ThemeLayoutSettingsService.$inject = ['baConfig'];

  function ThemeLayoutSettingsService(baConfig) {
    var service = this;
    var isMobile = (/android|webos|iphone|ipad|ipod|blackberry|windows phone/).test(navigator.userAgent.toLowerCase());
    var mobileClass = isMobile ? 'mobile' : '';
    var blurClass = baConfig.theme.blur ? 'blur-theme' : '';
    angular.element(document.body).addClass(mobileClass).addClass(blurClass);

    service.blur = baConfig.theme.blur;
    service.mobile = isMobile;
  }
})();