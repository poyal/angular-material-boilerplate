(function () {
  'use strict';

  angular.module('app')
    .run(appRun)
    .config(['$mdThemingProvider', appConfig])
    .constant('API', {
      url: 'NONE'
    });

  function appRun() {

  }

  function appConfig($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('purple', {
        'default': '200'
      });
  }
})();
