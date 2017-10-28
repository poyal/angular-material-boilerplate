(function () {
  'use strict';

  angular
    .module('app.examples.charts')
    .controller('chartJsController', ChartJsController);

  ChartJsController.$inject = ['baConfig', '$interval', 'stopableInterval'];

  function ChartJsController(baConfig, $interval, stopableInterval) {
    var vm = this;

    var layoutColors = baConfig.colors;

    /** D1 */
    vm.labels1D = ["Sleeping", "Designing", "Coding", "Cycling"];
    vm.data1D = [20, 40, 5, 35];
    vm.options1D = {
      elements: {
        arc: {
          borderWidth: 0
        }
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: layoutColors.defaultText
        }
      }
    };

    function changeData1D() {
      vm.data1D = shuffle(vm.data1D);
    }

    vm.changeData1D = changeData1D;

    /** WAVE */
    vm.labelsWave = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    vm.dataWave = [1, 9, 3, 4, 5, 6, 7, 8, 2].map(function (e) {
      return Math.sin(e) * 25 + 25;
    });

    stopableInterval.start($interval, function () {
      var tempArray = [];
      var lastElement = vm.dataWave[vm.dataWave.length - 1];
      for (var i = vm.dataWave.length - 1; i > 0; i--) {
        tempArray[i] = vm.dataWave[i - 1];
      }
      tempArray[0] = lastElement;
      vm.dataWave = tempArray;
    }, 400);

    /** D2 */
    vm.labelsD2 = ["May", "Jun", "Jul", "Aug", "Sep"];
    vm.dataD2 = [
      [65, 59, 90, 81, 56],
      [28, 48, 40, 19, 88]
    ];
    vm.seriesD2 = ['Product A', 'Product B'];


    function changeDataD2() {
      vm.dataD2[0] = shuffle(vm.dataD2[0]);
      vm.dataD2[1] = shuffle(vm.dataD2[1]);
    }

    function shuffle(o) {
      for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) {
      }
      return o;
    }

    vm.changeDataD2 = changeDataD2;

  }
})();