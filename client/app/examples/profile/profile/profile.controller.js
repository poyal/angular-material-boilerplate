(function () {
  'use strict';

  angular.module('app.examples.profile')
    .controller('profileController', ProfileController);

  ProfileController.$inject = ['fileReader', '$filter', '$uibModal'];

  function ProfileController(fileReader, $filter, $uibModal) {
    var vm = this;
    vm.picture = $filter('profilePicture')('Nasta');

    function removePicture() {
      vm.picture = $filter('appImage')('theme/no-photo.png');
      vm.noPicture = true;
    }

    function uploadPicture() {
      var fileInput = document.getElementById('uploadFile');
      fileInput.click();

    }

    vm.socialProfiles = [
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/akveo/',
        icon: 'socicon-facebook'
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/akveo_inc',
        icon: 'socicon-twitter'
      },
      {
        name: 'Google',
        icon: 'socicon-google'
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/akveo',
        icon: 'socicon-linkedin'
      },
      {
        name: 'GitHub',
        href: 'https://github.com/akveo',
        icon: 'socicon-github'
      },
      {
        name: 'StackOverflow',
        icon: 'socicon-stackoverflow'
      },
      {
        name: 'Dribbble',
        icon: 'socicon-dribble'
      },
      {
        name: 'Behance',
        icon: 'socicon-behace'
      }
    ];

    function unconnect(item) {
      item.href = undefined;
    }

    function showModal(item) {
      $uibModal.open({
        animation: false,
        templateUrl: 'app/examples/profile/components/profileModal.html',
        controller: 'profileModalController',
        controllerAs: '$ctrl'
      }).result.then(function (link) {
        item.href = link;
      });
    }

    function getFile() {
      fileReader.readAsDataUrl(vm.file, vm)
        .then(function (result) {
          vm.picture = result;
        });
    }

    vm.switches = [true, true, false, true, true, false];

    vm.removePicture = removePicture;
    vm.uploadPicture = uploadPicture;
    vm.unconnect = unconnect;
    vm.showModal = showModal;
    vm.getFile = getFile;
  }
})();