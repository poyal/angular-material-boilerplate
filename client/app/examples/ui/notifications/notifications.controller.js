/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('app.examples.ui')
    .controller('notificationsController', NotificationsController);

  NotificationsController.$inject = ['$scope', 'toastr', 'toastrConfig'];

  function NotificationsController($scope, toastr, toastrConfig) {
    var vm = this;
    var defaultConfig = angular.copy(toastrConfig);

    vm.types = ['success', 'error', 'info', 'warning'];

    vm.quotes = [
      {
        title: 'Come to Freenode',
        message: 'We rock at <em>#angularjs</em>',
        options: {
          allowHtml: true
        }
      },
      {
        title: 'Looking for bootstrap?',
        message: 'Try ui-bootstrap out!'
      },
      {
        title: 'Wants a better router?',
        message: 'We have you covered with ui-router'
      },
      {
        title: 'Angular 2',
        message: 'Is gonna rock the world'
      },
      {
        title: null,
        message: 'Titles are not always needed'
      },
      {
        title: null,
        message: 'Toastr rock!'
      },
      {
        title: 'What about nice html?',
        message: '<strong>Sure you <em>can!</em></strong>',
        options: {
          allowHtml: true
        }
      },
      {
        title: 'Ionic is <em>cool</em>',
        message: 'Best mobile framework ever',
        options: {
          allowHtml: true
        }
      }
    ];

    var openedToasts = [];
    vm.options = {
      autoDismiss: false,
      positionClass: 'toast-top-right',
      type: 'info',
      timeOut: '5000',
      extendedTimeOut: '2000',
      allowHtml: false,
      closeButton: false,
      tapToDismiss: true,
      progressBar: false,
      newestOnTop: true,
      maxOpened: 0,
      preventDuplicates: false,
      preventOpenDuplicates: false,
      title: "Some title here",
      msg: "Type your message here"
    };


    function clearLastToast() {
      var toast = openedToasts.pop();
      toastr.clear(toast);
    }

    function clearToasts() {
      toastr.clear();
    }

    function openRandomToast() {
      var type = Math.floor(Math.random() * vm.types.length);
      var quote = Math.floor(Math.random() * vm.quotes.length);
      var toastType = vm.types[type];
      var toastQuote = vm.quotes[quote];
      openedToasts.push(toastr[toastType](toastQuote.message, toastQuote.title, toastQuote.options));
      vm.optionsStr = "toastr." + toastType + "(\'" + toastQuote.message + "\', \'" + toastQuote.title + "', " + JSON.stringify(toastQuote.options || {}, null, 2) + ")";
    }

    function openToast() {
      angular.extend(toastrConfig, vm.options);
      openedToasts.push(toastr[vm.options.type](vm.options.msg, vm.options.title));
      var strOptions = {};
      for (var option in  vm.options) {
        if (option !== 'msg' && option !== 'title') {
          strOptions[option] = vm.options[option];
        }
      }
      vm.optionsStr = "toastr." + vm.options.type + "(\'" + vm.options.msg + "\', \'" + vm.options.title + "\', " + JSON.stringify(strOptions, null, 2) + ")";
    }

    $scope.$on('$destroy', function iVeBeenDismissed() {
      angular.extend(toastrConfig, defaultConfig);
    });

    vm.openToast = openToast;
    vm.openRandomToast = openRandomToast;
    vm.clearToasts = clearToasts;
    vm.clearLastToast = clearLastToast;
  }

})();
