
(function () {
  'use strict';

  angular.module('app.examples.form', [])
    .config(['$stateProvider', routeConfig]);

  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.examples.form', {
        url: '/form',
        abstract: true,
        template: "<div ui-view  autoscroll='true' autoscroll-body-top></div>",
        title: 'Form Elements',
        sidebarMeta: {
          icon: 'ion-compose',
          order: 250
        }
      })
      .state('app.examples.form.inputs', {
        url: '/inputs',
        templateUrl: 'app/examples/form/inputs/inputs.html',
        controller: 'inputsController',
        controllerAs: 'vm',
        title: 'Form Inputs',
        sidebarMeta: {
          order: 0
        }
      })
      .state('app.examples.form.layouts', {
        url: '/layouts',
        templateUrl: 'app/examples/form/layouts/layouts.html',
        controller: 'layoutsController',
        controllerAs: 'vm',
        title: 'Form Layouts',
        sidebarMeta: {
          order: 100
        }
      })
      .state('app.examples.form.wizard', {
        url: '/wizard',
        templateUrl: 'app/examples/form/wizard/wizard.html',
        controller: 'wizardController',
        controllerAs: 'vm',
        title: 'Form Wizard',
        sidebarMeta: {
          order: 200
        }
      });
  }
})();