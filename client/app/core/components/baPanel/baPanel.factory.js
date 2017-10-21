(function () {
  'use strict';

  angular.module('app.core')
    .factory('baPanel', BaPanelFactory);

  BaPanelFactory.$inject = [];

  function BaPanelFactory() {
    return {
      restrict: 'A',
      transclude: true,
      template: function (elem, attrs) {
        var res = '<div class="panel-body" ng-transclude></div>';
        if (attrs.baPanelTitle) {
          var titleTpl = '<div class="panel-heading clearfix"><h3 class="panel-title">' + attrs.baPanelTitle + '</h3></div>';
          res = titleTpl + res;
        }

        return res;
      }
    };
  }
})();