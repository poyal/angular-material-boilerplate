(function () {
  'use strict';

  angular.module('app')
    .run(appRun)
    .config(['NotificationProvider', appConfig]);

  function appRun() {

  }

  function appConfig(NotificationProvider) {
    NotificationProvider.setOptions({
      startTop: 20,
      startRight: 10,
      verticalSpacing: 20,
      horizontalSpacing: 20,
      positionX: 'right',   //"right", "left", "center"
      positionY: 'bottom',  //"top", "bottom"
      closeOnClick: true,   //클릭닫기 flag
      maxCount: 3           //숫자, null
    });
  }
})();
