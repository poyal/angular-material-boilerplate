(function () {
  'use strict';
  angular.module('app.examples.components')
    .service('componentsService', ComponentsService);

  ComponentsService.$inject = ['$uibModal'];

  function ComponentsService($uibModal) {
    this.open = function (options) {
      return $uibModal.open({
        animation: false,
        templateUrl: 'app/examples/components/mail/composeBox/compose.html',
        controller: 'composeBoxCtrl',
        controllerAs: 'boxCtrl',
        size: 'compose',
        resolve: {
          subject: function () {
            return options.subject;
          },
          to: function () {
            return options.to;
          },
          text: function () {
            return options.text;
          }
        }
      });
    };
  }
})();