(function () {
  'use strict';

  angular.module('app.core')
    .directive('baPanelSelf', BaPanelSelfDirective);

  BaPanelSelfDirective.$inject = ['baPanel'];

  function BaPanelSelfDirective(baPanel) {
    return angular.extend({}, baPanel, {
      link: function (scope, el, attrs) {
        el.addClass('panel panel-white');
        if (attrs.baPanelClass) {
          el.addClass(attrs.baPanelClass);
        }
      }
    });
  }
})();