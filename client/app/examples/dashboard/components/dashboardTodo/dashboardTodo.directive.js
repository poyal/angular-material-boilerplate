(function () {
  'use strict';

  angular.module('app.examples.dashboard')
    .directive('dashboardTodo', DashboardTodoDirective);

  DashboardTodoDirective.$inject = [];

  function DashboardTodoDirective() {
    return {
      restrict: 'EA',
      controller: DashboardTodoController,
      controllerAs: '$ctrl',
      templateUrl: 'app/examples/dashboard/components/dashboardTodo/dashboardTodo.html'
    };
  }

  DashboardTodoController.$inject = ['baConfig'];

  function DashboardTodoController(baConfig) {
    var vm = this;

    vm.transparent = baConfig.theme.blur;
    var dashboardColors = baConfig.colors.dashboard;
    var colors = [];
    for (var key in dashboardColors) {
      colors.push(dashboardColors[key]);
    }

    function getRandomColor() {
      var i = Math.floor(Math.random() * (colors.length - 1));
      return colors[i];
    }

    vm.todoList = [
      { text: 'Check me out' },
      { text: 'Lorem ipsum dolor sit amet, possit denique oportere at his, etiam corpora deseruisse te pro' },
      { text: 'Ex has semper alterum, expetenda dignissim' },
      { text: 'Vim an eius ocurreret abhorreant, id nam aeque persius ornatus.' },
      { text: 'Simul erroribus ad usu' },
      { text: 'Ei cum solet appareat, ex est graeci mediocritatem' },
      { text: 'Get in touch with akveo team' },
      { text: 'Write email to business cat' },
      { text: 'Have fun with blur admin' },
      { text: 'What do you think?' }
    ];

    vm.todoList.forEach(function(item) {
      item.color = getRandomColor();
    });

    vm.newTodoText = '';

    function addToDoItem(event, clickPlus) {
      if (clickPlus || event.which === 13) {
        vm.todoList.unshift({
          text: vm.newTodoText,
          color: getRandomColor()
        });
        vm.newTodoText = '';
      }
    }

    vm.addToDoItem = addToDoItem;
  }
})();