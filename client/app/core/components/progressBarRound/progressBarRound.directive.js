(function () {
  'use strict';

  angular.module('app.core')
    .directive('progressBarRound', ProgressBarRoundDirective);

  ProgressBarRoundDirective.$inject = ['baProgressModal'];

  function ProgressBarRoundDirective(baProgressModal) {
    return {
      restrict: 'E',
      templateUrl: 'app/core/components/progressBarRound/progressBarRound.html',
      link: ProgressBarRoundLink
    };

    function ProgressBarRoundLink(scope, element) {
      scope.baProgressDialog = baProgressModal;
      scope.$watch(function () {
        return baProgressModal.getProgress();
      }, animateBar);

      function animateBar() {
        var circle = element.find('#loader')[0];
        circle.setAttribute("stroke-dasharray", baProgressModal.getProgress() * 180 * Math.PI / 100 + ", 20000");
        scope.progress = baProgressModal.getProgress();
      }
    }
  }
})();