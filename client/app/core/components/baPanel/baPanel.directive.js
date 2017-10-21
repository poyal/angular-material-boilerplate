(function () {
  'use strict';

  angular.module('app.core')
    .directive('baPanel', BaPanelDirective);

  BaPanelDirective.$inject = ['baPanel', 'baConfig'];

  /* @ngInject */
  function BaPanelDirective(baPanel, baConfig) {
    return angular.extend({}, baPanel, {
      template: function (el, attrs) {
        var res = '<div  class="panel ' + (baConfig.theme.blur ? 'panel-blur' : '') + ' full-invisible ' + (attrs.baPanelClass || '');
        res += '" zoom-in ' + (baConfig.theme.blur ? 'ba-panel-blur' : '') + '>';
        res += baPanel.template(el, attrs);
        res += '</div>';
        return res;
      }
    });
  }
})();

