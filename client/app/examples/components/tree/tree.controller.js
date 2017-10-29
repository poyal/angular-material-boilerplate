(function () {
  'use strict';

  angular.module('app.examples.components')
    .controller('treeController', TreeController);

  TreeController.$inject = ['$timeout'];

  function TreeController($timeout) {
    var vm = this;
    vm.ignoreChanges = false;
    var newId = 0;
    vm.ignoreChanges = false;
    vm.newNode = {};

    vm.basicConfig = {
      core: {
        multiple: false,
        check_callback: true,
        worker: true
      },
      types: {
        folder: {
          icon: 'ion-ios-folder'
        },
        default: {
          icon: 'ion-document-text'
        }
      },
      plugins: ['types'],
      version: 1
    };

    vm.dragConfig = {
      core: {
        check_callback: true,
        themes: {
          responsive: false
        }
      },
      types: {
        folder: {
          icon: 'ion-ios-folder'
        },
        default: {
          icon: 'ion-document-text'
        }
      },
      plugins: ['dnd', 'types']
    };

    function addNewNode() {
      vm.ignoreChanges = true;
      var selected = this.basicTree.jstree(true).get_selected()[0];
      if (selected)
        vm.treeData.push({
          id: (newId++).toString(),
          parent: selected,
          text: 'New node ' + newId,
          state: {opened: true}
        });
      vm.basicConfig.version++;
    }


    function refresh() {
      vm.ignoreChanges = true;
      newId = 0;
      vm.treeData = getDefaultData();
      vm.basicConfig.version++;
    }

    function expand() {
      vm.ignoreChanges = true;
      vm.treeData.forEach(function (n) {
        n.state.opened = true;
      });
      vm.basicConfig.version++;
    }

    function collapse() {
      vm.ignoreChanges = true;
      vm.treeData.forEach(function (n) {
        n.state.opened = false;
      });
      vm.basicConfig.version++;
    }

    function readyCB() {
      $timeout(function () {
        vm.ignoreChanges = false;
      });
    }


    function applyModelChanges() {
      return !vm.ignoreChanges;
    }

    vm.dragData = [
      {
        id: 'nd1',
        parent: '#',
        type: 'folder',
        text: 'Node 1',
        state: {
          opened: true
        }
      },
      {
        id: 'nd2',
        parent: '#',
        type: 'folder',
        text: 'Node 2',
        state: {
          opened: true
        }
      },
      {
        id: 'nd3',
        parent: '#',
        type: 'folder',
        text: 'Node 3',
        state: {
          opened: true
        }
      },
      {
        id: 'nd4',
        parent: '#',
        type: 'folder',
        text: 'Node 4',
        state: {
          opened: true
        }
      },
      {
        id: 'nd5',
        parent: 'nd1',
        text: 'Node 1.1',
        state: {
          opened: true
        }
      },
      {
        id: 'nd6',
        parent: 'nd1',
        text: 'Node 1.2',
        state: {
          opened: true
        }
      },
      {
        id: 'nd7',
        parent: 'nd1',
        text: 'Node 1.3',
        state: {
          opened: true
        }
      },
      {
        id: 'nd8',
        parent: 'nd2',
        text: 'Node 2.1',
        state: {
          opened: true
        }
      },
      {
        id: 'nd9',
        parent: 'nd2',
        text: 'Node 2.2',
        state: {
          opened: true
        }
      },
      {
        id: 'nd10',
        parent: 'nd2',
        text: 'Node 2.3',
        state: {
          opened: true
        }
      },
      {
        id: 'nd11',
        parent: 'nd3',
        text: 'Node 3.1',
        state: {
          opened: true
        }
      },
      {
        id: 'nd12',
        parent: 'nd3',
        text: 'Node 3.2',
        state: {
          opened: true
        }
      },
      {
        id: 'nd13',
        parent: 'nd3',
        text: 'Node 3.3',
        state: {
          opened: true
        }
      },
      {
        id: 'nd14',
        parent: 'nd4',
        text: 'Node 4.1',
        state: {
          opened: true
        }
      },
      {
        id: 'nd15',
        parent: 'nd4',
        text: 'Node 4.2',
        state: {
          opened: true
        }
      },
      {
        id: 'nd16',
        parent: 'nd4',
        text: 'Node 4.3',
        state: {
          opened: true
        }
      }
    ];

    function getDefaultData() {
      return [
        {
          id: 'nd1',
          parent: '#',
          type: 'folder',
          text: 'Node 1',
          state: {
            opened: true
          }
        },
        {
          id: 'nd2',
          parent: '#',
          type: 'folder',
          text: 'Node 2',
          state: {
            opened: true
          }
        },
        {
          id: 'nd3',
          parent: '#',
          type: 'folder',
          text: 'Node 3',
          state: {
            opened: true
          }
        },
        {
          id: 'nd4',
          parent: '#',
          type: 'folder',
          text: 'Node 4',
          state: {
            opened: true
          }
        },
        {
          id: 'nd5',
          parent: 'nd1',
          text: 'Node 1.1',
          state: {
            opened: true
          }
        },
        {
          id: 'nd6',
          parent: 'nd1',
          text: 'Node 1.2',
          state: {
            opened: true
          }
        },
        {
          id: 'nd7',
          parent: 'nd1',
          text: 'Node 1.3',
          state: {
            opened: true
          }
        },
        {
          id: 'nd8',
          parent: 'nd2',
          text: 'Node 2.1',
          state: {
            opened: true
          }
        },
        {
          id: 'nd9',
          parent: 'nd2',
          text: 'Node 2.2',
          state: {
            opened: true
          }
        },
        {
          id: 'nd10',
          parent: 'nd2',
          text: 'Node 2.3',
          state: {
            opened: true
          }
        },
        {
          id: 'nd11',
          parent: 'nd3',
          text: 'Node 3.1',
          state: {
            opened: true
          }
        },
        {
          id: 'nd12',
          parent: 'nd3',
          text: 'Node 3.2',
          state: {
            opened: true
          }
        },
        {
          id: 'nd13',
          parent: 'nd3',
          text: 'Node 3.3',
          state: {
            opened: true
          }
        },
        {
          id: 'nd14',
          parent: 'nd4',
          text: 'Node 4.1',
          state: {
            opened: true
          }
        },
        {
          id: 'nd15',
          parent: 'nd4',
          text: 'Node 4.2',
          state: {
            opened: true
          }
        },
        {
          id: 'nd16',
          parent: 'nd4',
          text: 'Node 4.3',
          state: {
            opened: true
          }
        }
      ];
    }

    vm.treeData = getDefaultData();
    vm.addNewNode = addNewNode;
    vm.refresh = refresh;
    vm.expand = expand;
    vm.collapse = collapse;
    vm.readyCB = readyCB;
    vm.applyModelChanges = applyModelChanges;
  }
})();