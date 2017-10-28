/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('app.examples.components')
    .config(['$stateProvider','$urlRouterProvider', routeConfig]);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('components.mail', {
          url: '/mail',
          abstract: true,
          templateUrl: 'app/examples/components/mail/mail.html',
          controller: "MailTabCtrl",
          controllerAs: "tabCtrl",
          title: 'Mail',
          sidebarMeta: {
            order: 0,
          },
        }).state('components.mail.label', {
          url: '/:label',
          templateUrl: 'app/examples/components/mail/list/mailList.html',
          title: 'Mail',
          controller: "MailListCtrl",
          controllerAs: "listCtrl"
        }).state('components.mail.detail', {
          url: '/:label/:id',
          templateUrl: 'app/examples/components/mail/detail/mailDetail.html',
          title: 'Mail',
          controller: "MailDetailCtrl",
          controllerAs: "detailCtrl"
        });
    $urlRouterProvider.when('/components/mail','/components/mail/inbox');
  }

})();
