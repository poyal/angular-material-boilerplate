(function () {
  'use strict';

  angular.module('app.core')
    .controller('AppController', AppController);

  AppController.$inject = ['$rootScope', '$state'];

  function AppController($rootScope, $state) {
    var vm = this;
    vm.menus = [
      {state: 'app.main', name: '메인', selected: false},
      {state: 'app.test.list', name: '테스트', selected: false}
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
          value.selected = value.state.split('.')[1] === stateArr[1];
        });
      }
    });
  }
})();

