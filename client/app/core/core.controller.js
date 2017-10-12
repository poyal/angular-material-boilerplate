(function () {
  'use strict';

  angular.module('app.core')
    .controller('AppController', AppController);

  AppController.$inject = ['$rootScope', '$state'];

  function AppController($rootScope, $state) {
    var vm = this;
    vm.menus = [
      {state: 'app.dashboard', name: '대시보드', icon: 'dashboard', active: false},
      {state: 'app.examples.profile', name: 'UserProfile', icon: 'person', active: false},
      {state: 'app.examples.table', name: 'TableList', icon: 'content_paste', active: false},
      {state: 'app.examples.typography', name: 'Typography', icon: 'library_books', active: false},
      {state: 'app.examples.icons', name: 'Icons', icon: 'bubble_chart', active: false},
      {state: 'app.examples.notifications', name: 'Notifications', icon: 'notifications', active: false}
    ];

    vm.stateGo = stateGo;

    function stateGo(state) {
      $state.go(state);
    }

    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
      var stateName = toState.name;
      var stateArr = stateName.split('.');
      if (stateArr.length > 0) {
        angular.forEach(vm.menus, function (value) {
          if (value.state.split('.')[1] !== 'examples') {
            value.active = value.state.split('.')[1] === stateArr[1];
          } else {
            value.active = value.state.split('.')[1] === stateArr[1] && value.state.split('.')[2] === stateArr[2];
          }
        });
      }
    });
  }
})();

