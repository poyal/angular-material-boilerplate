(function () {
  'use strict';

  angular.module('app.examples', [
    'app.examples.dashboard',
    'app.examples.charts',
    'app.examples.components',
    'app.examples.form',
    'app.examples.maps',
    'app.examples.profile',
    'app.examples.tables',
    'app.examples.ui'
  ]).config(['$stateProvider', routeConfig]);
    // .config(['baSidebarServiceProvider', menuConfig])

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.examples', {
        url: '/examples',
        abstract: true,
        template: '<div ui-view></div>',
        title: 'Examples',
        sidebarMeta: {
          icon: 'ion-gear-a',
          order: 100
        }
      });
  }

  // function menuConfig(baSidebarServiceProvider) {
  //   baSidebarServiceProvider.addStaticItem({
  //     title: 'Pages',
  //     icon: 'ion-document',
  //     subMenu: [{
  //       title: 'Sign In',
  //       fixedHref: 'auth.html',
  //       blank: true
  //     }, {
  //       title: 'Sign Up',
  //       fixedHref: 'reg.html',
  //       blank: true
  //     }, {
  //       title: 'User Profile',
  //       stateRef: 'profile'
  //     }, {
  //       title: '404 Page',
  //       fixedHref: '404.html',
  //       blank: true
  //     }]
  //   });
  //   baSidebarServiceProvider.addStaticItem({
  //     title: 'Menu Level 1',
  //     icon: 'ion-ios-more',
  //     subMenu: [{
  //       title: 'Menu Level 1.1',
  //       disabled: true
  //     }, {
  //       title: 'Menu Level 1.2',
  //       subMenu: [{
  //         title: 'Menu Level 1.2.1',
  //         disabled: true
  //       }]
  //     }]
  //   });
  // }
})();
