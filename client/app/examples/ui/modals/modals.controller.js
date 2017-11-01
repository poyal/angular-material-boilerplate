(function () {
  'use strict';

  angular.module('app.examples.ui')
    .controller('modalsController', ModalsController);

  ModalsController.$inject = ['$uibModal', 'baProgressModal', 'toastr'];

  function ModalsController($uibModal, baProgressModal, toastr) {
    var vm = this;

    function open(page, size) {
      $uibModal.open({
        animation: true,
        templateUrl: 'app/examples/ui/modals/modals/' + page + '.html',
        size: size,
        resolve: {
          items: function () {
            return vm.items;
          }
        }
      });
    }

    function showSuccessMsg() {
      toastr.success('Your information has been saved successfully!');
    }

    function showInfoMsg() {
      toastr.info("You've got a new email!", 'Information');
    }

    function showErrorMsg() {
      toastr.error("Your information hasn't been saved!", 'Error');
    }

    function showWarningMsg() {
      toastr.warning('Your computer is about to explode!', 'Warning');
    }

    vm.open = open;
    vm.openProgressDialog = baProgressModal.open;
    vm.showSuccessMsg = showSuccessMsg;
    vm.showInfoMsg = showInfoMsg;
    vm.showErrorMsg = showErrorMsg;
    vm.showWarningMsg = showWarningMsg;
  }
})();