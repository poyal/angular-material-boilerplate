(function () {
  'use strict';

  angular.module('app.core')
    .directive('trackWidth', TrackWidthDirective);

  TrackWidthDirective.$inject = [];

  function TrackWidthDirective() {
    return {
      scope: {
        trackWidth: '=',
        minWidth: '='
      },
      link: TrackWidthLink
    };

    function TrackWidthLink(scope, element) {
      scope.trackWidth = $(element).width() < scope.minWidth;
      scope.prevTrackWidth = scope.trackWidth;

      $(window).resize(function () {
        var trackWidth = $(element).width() < scope.minWidth;
        if (trackWidth !== scope.prevTrackWidth) {
          scope.$apply(function () {
            scope.trackWidth = trackWidth;
          });
        }
        scope.prevTrackWidth = trackWidth;
      });
    }
  }
})();