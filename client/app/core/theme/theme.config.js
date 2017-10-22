/**
 * Created by k.danovsky on 13.05.2016.
 */

(function () {
  'use strict';

  angular.module('app.core')
    .config(['$provide', config])
    .run(['$timeout', '$rootScope', 'layoutPaths', 'preloader', '$q', 'baSidebarService', 'themeLayoutSettings', themeRun]);

  function config($provide) {
    $provide.decorator('$uiViewScroll', uiViewScrollDecorator);
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

  function themeRun($timeout, $rootScope, layoutPaths, preloader, $q, baSidebarService, themeLayoutSettings) {
    var whatToWait = [
      preloader.loadAmCharts(),
      $timeout(3000)
    ];

    var theme = themeLayoutSettings;
    if (theme.blur) {
      if (theme.mobile) {
        whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'blur-bg-mobile.jpg'));
      } else {
        whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'blur-bg.jpg'));
        whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'blur-bg-blurred.jpg'));
      }
    }

    $q.all(whatToWait).then(function () {
      $rootScope.$pageFinishedLoading = true;
    });

    $timeout(function () {
      if (!$rootScope.$pageFinishedLoading) {
        $rootScope.$pageFinishedLoading = true;
      }
    }, 1000);

    $rootScope.$baSidebarService = baSidebarService;
  }
})();
