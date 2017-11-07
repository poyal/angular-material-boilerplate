/**
 * Created by k.danovsky on 13.05.2016.
 */

(function () {
  'use strict';

  angular.module('app.core')
    .config(['$provide', config])
    .run(['$timeout', '$rootScope', 'layoutPaths', 'preloader', '$q', 'baSidebarService', 'themeLayoutSettings', themeRun]);

  function config($provide) {
    $provide.decorator('$uiViewScroll', ['$delegate', '$anchorScroll', 'baUtil', uiViewScrollDecorator]);
  }

  function uiViewScrollDecorator($delegate, $anchorScroll, baUtil) {
    return function (uiViewElement) {
      if (baUtil.hasAttr(uiViewElement, "autoscroll-body-top")) {
        $anchorScroll();
      } else {
        $delegate(uiViewElement);
      }
    };
  }

  function themeRun($rootScope, baSidebarService) {
    $rootScope.$baSidebarService = baSidebarService;
  }
})();
