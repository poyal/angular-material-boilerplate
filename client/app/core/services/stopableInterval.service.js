(function () {
  'use strict';

  angular.module('app.core')
    .service('stopableInterval', StopableIntervalService);

  StopableIntervalService.$inject = ['$window'];

  function StopableIntervalService($window) {
    var service = this;

    service.start = start;

    function start(interval, calback, time) {
      function startInterval() {
        return interval(calback, time);
      }

      var i = startInterval();

      angular.element($window).bind('focus', function () {
        if (i) interval.cancel(i);
        i = startInterval();
      });

      angular.element($window).bind('blur', function () {
        if (i) interval.cancel(i);
      });
    }
  }
})();