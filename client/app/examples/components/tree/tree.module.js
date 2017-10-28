/**
 * @author a.demeshko
 * created on 12.21.2015
 */
(function () {
  'use strict';

  angular.module('app.examples.components.tree', [])
    .config(routeConfig)
    .config(function(){
      $.jstree.defaults.core.themes.url = true;
      $.jstree.defaults.core.themes.dir = "assets/img/theme/vendor/jstree/dist/themes";
    });

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('components.tree', {
          url: '/tree',
          templateUrl: 'app/examples/components/tree/tree.html',
          title: 'Tree View',
          sidebarMeta: {
            order: 200,
          },
        });
  }

})();
