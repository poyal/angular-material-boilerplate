(function () {
  'use strict';

  angular.module('app.examples.form')
    .controller('inputsController', InputsController);

  InputsController.$inject = [];

  function InputsController() {
    var vm = this;
    vm.switches = {
      s1: true,
      s2: false,
      s3: true,
      s4: true,
      s5: false
    };

    vm.switcherValues = {
      primary: true,
      warning: true,
      danger: true,
      info: true,
      success: true
    };

    vm.dt = new Date();
    vm.opened = false;
    vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    vm.format = vm.formats[0];
    vm.options = {
      showWeeks: false
    };

    function popupOpen() {
      vm.opened = true;
    }

    vm.popupOpen = popupOpen;

    vm.disabled = undefined;
    vm.standardItem = {};
    vm.standardSelectItems = [
      {label: 'Option 1', value: 1},
      {label: 'Option 2', value: 2},
      {label: 'Option 3', value: 3},
      {label: 'Option 4', value: 4}
    ];

    vm.withSearchItem = {};

    vm.selectWithSearchItems = [
      {label: 'Hot Dog, Fries and a Soda', value: 1},
      {label: 'Burger, Shake and a Smile', value: 2},
      {label: 'Sugar, Spice and all things nice', value: 3},
      {label: 'Baby Back Ribs', value: 4}
    ];
    vm.groupedItem = {};
    vm.groupedSelectItems = [
      {label: 'Group 1 - Option 1', value: 1, group: 'Group 1'},
      {label: 'Group 2 - Option 2', value: 2, group: 'Group 2'},
      {label: 'Group 1 - Option 3', value: 3, group: 'Group 1'},
      {label: 'Group 2 - Option 4', value: 4, group: 'Group 2'}
    ];

    vm.groupedByItem = {};
    vm.groupedBySelectItems = [
      {name: 'Adam', country: 'United States'},
      {name: 'Amalie', country: 'Argentina'},
      {name: 'Estefanía', country: 'Argentina'},
      {name: 'Adrian', country: 'Ecuador'},
      {name: 'Wladimir', country: 'Ecuador'},
      {name: 'Samantha', country: 'United States'},
      {name: 'Nicole', country: 'Colombia'},
      {name: 'Natasha', country: 'Ecuador'},
      {name: 'Michael', country: 'Colombia'},
      {name: 'Nicolás', country: 'Colombia'}
    ];
    vm.someGroupFn = function (item) {

      if (item.name[0] >= 'A' && item.name[0] <= 'M')
        return 'From A - M';
      if (item.name[0] >= 'N' && item.name[0] <= 'Z')
        return 'From N - Z';
    };

    vm.disableItem = {};
    vm.disableItems = [];

    vm.multipleItem = {};
    vm.multipleSelectItems = [
      {label: 'Option 1', value: 1},
      {label: 'Option 2', value: 2},
      {label: 'Option 3', value: 3},
      {label: 'Option 4', value: 4},
      {label: 'Option 5', value: 5},
      {label: 'Option 6', value: 6},
      {label: 'Option 7', value: 7},
      {label: 'Option 8', value: 8}
    ];
    vm.withDeleteItem = {};
    vm.withDeleteSelectItems = [
      {label: 'Option 1', value: 1},
      {label: 'Option 2', value: 2},
      {label: 'Option 3', value: 3},
      {label: 'Option 4', value: 4},
      {label: 'Option 5', value: 5},
      {label: 'Option 6', value: 6},
      {label: 'Option 7', value: 7},
      {label: 'Option 8', value: 8}
    ];

    vm.standardSelectItems = [
      { label: 'Option 1', value: 1 },
      { label: 'Option 2', value: 2 },
      { label: 'Option 3', value: 3 },
      { label: 'Option 4', value: 4 }
    ];

    vm.selectWithSearchItems = [
      { label: 'Hot Dog, Fries and a Soda', value: 1 },
      { label: 'Burger, Shake and a Smile', value: 2 },
      { label: 'Sugar, Spice and all things nice', value: 3 },
      { label: 'Baby Back Ribs', value: 4 }
    ];

    vm.groupedSelectItems = [
      { label: 'Group 1 - Option 1', value: 1, group: 'Group 1' },
      { label: 'Group 2 - Option 2', value: 2, group: 'Group 2' },
      { label: 'Group 1 - Option 3', value: 3, group: 'Group 1' },
      { label: 'Group 2 - Option 4', value: 4, group: 'Group 2' }
    ];
  }
})();