(function () {
  'use strict';

  angular
    .module('app.core')
    .service('Util', UtilService);

  UtilService.$inject = ['Notification', 'NotificationDelay'];

  function UtilService(Notification, NotificationDelay) {
    var service = this;

    service.notification = notification;

    function notification(type, title, message, onClose) {
      var notificationOptions = {
        type: type,       //"primary", "info", "success", "warning", "error"
        title: title,
        message: message,
        onClose: onClose //닫기 콜백
      };

      if(!angular.isFunction(onClose)) {
        delete notificationOptions.onClose;
      }

      if(title === '' || title === null || title === undefined) {
        delete notificationOptions.title;
      }

      if(type !== 'primary' && type !== 'info' && type !== 'success' && type !== 'warning' && type !== 'error') {
        notificationOptions.type = 'primary';
      }

      notificationOptions.delay = NotificationDelay[notificationOptions.type];

      Notification(notificationOptions);
    }
  }
})();