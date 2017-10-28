(function () {
  'use strict';

  angular.module('app.examples.charts')
    .controller('chartistController', ChartistController);

  ChartistController.$inject = ['$timeout', 'baConfig'];

  function ChartistController($timeout, baConfig) {
    var vm = this;

    vm.simpleLineOptions = {
      color: baConfig.colors.defaultText,
      fullWidth: true,
      height: "300px",
      chartPadding: {
        right: 40
      }
    };

    vm.simpleLineData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      series: [
        [20, 20, 12, 45, 50],
        [10, 45, 30, 14, 12],
        [34, 12, 12, 40, 50],
        [10, 43, 25, 22, 16],
        [3, 6, 30, 33, 43]
      ]
    };

    vm.areaLineData = {
      labels: [1, 2, 3, 4, 5, 6, 7, 8],
      series: [
        [5, 9, 7, 8, 5, 3, 5, 4]
      ]
    };

    vm.areaLineOptions = {
      fullWidth: true,
      height: "300px",
      low: 0,
      showArea: true
    };

    vm.biLineData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      series: [
        [1, 2, 3, 1, -2, 0, 1],
        [-2, -1, -2, -1, -2.5, -1, -2],
        [0, 0, 0, 1, 2, 2.5, 2],
        [2.5, 2, 1, 0.5, 1, 0.5, -1]
      ]
    };

    vm.biLineOptions = {
      height: "300px",
      high: 3,
      low: -3,
      showArea: true,
      showLine: false,
      showPoint: false,
      fullWidth: true,
      axisX: {
        showGrid: false
      }
    };

    vm.simpleBarData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [15, 24, 43, 27, 5, 10, 23, 44, 68, 50, 26, 8],
        [13, 22, 49, 22, 4, 6, 24, 46, 57, 48, 22, 4]
      ]
    };

    vm.simpleBarOptions = {
      fullWidth: true,
      height: "300px"
    };

    vm.multiBarData = {
      labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
      series: [
        [5, 4, 3, 7],
        [3, 2, 9, 5],
        [1, 5, 8, 4],
        [2, 3, 4, 6],
        [4, 1, 2, 1]
      ]
    };

    vm.multiBarOptions = {
      fullWidth: true,
      height: "300px",
      stackBars: true,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value.split(/\s+/).map(function (word) {
            return word[0];
          }).join('');
        }
      },
      axisY: {
        offset: 20
      }
    };

    vm.multiBarResponsive = [
      ['screen and (min-width: 400px)', {
        reverseData: true,
        horizontalBars: true,
        axisX: {
          labelInterpolationFnc: Chartist.noop
        },
        axisY: {
          offset: 60
        }
      }],
      ['screen and (min-width: 700px)', {
        stackBars: false,
        reverseData: false,
        horizontalBars: false,
        seriesBarDistance: 15
      }]
    ];

    vm.stackedBarData = {
      labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
      series: [
        [800000, 1200000, 1400000, 1300000],
        [200000, 400000, 500000, 300000],
        [100000, 200000, 400000, 600000]
      ]
    };

    vm.stackedBarOptions = {
      fullWidth: true,
      height: "300px",
      stackBars: true,
      axisY: {
        labelInterpolationFnc: function (value) {
          return (value / 1000) + 'k';
        }
      }
    };

    vm.simplePieData = {
      series: [5, 3, 4]
    };

    vm.simplePieOptions = {
      fullWidth: true,
      height: "300px",
      weight: "300px",
      labelInterpolationFnc: function (value) {
        return Math.round(value / 12 * 100) + '%';
      }
    };

    vm.labelsPieData = {
      labels: ['Bananas', 'Apples', 'Grapes'],
      series: [20, 15, 40]
    };

    vm.labelsPieOptions = {
      fullWidth: true,
      height: "300px",
      weight: "300px",
      labelDirection: 'explode',
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    };

    vm.simpleDonutData = {
      labels: ['Bananas', 'Apples', 'Grapes'],
      series: [20, 15, 40]
    };

    vm.simpleDonutOptions = {
      fullWidth: true,
      donut: true,
      height: "300px",
      weight: "300px",
      labelDirection: 'explode',
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    };

    vm.donutResponsive = getResponsive(5, 40);

    vm.pieResponsive = getResponsive(20, 80);

    function getResponsive(padding, offset) {
      return [
        ['screen and (min-width: 1550px)', {
          chartPadding: padding,
          labelOffset: offset,
          labelDirection: 'explode',
          labelInterpolationFnc: function (value) {
            return value;
          }
        }],
        ['screen and (max-width: 1200px)', {
          chartPadding: padding,
          labelOffset: offset,
          labelDirection: 'explode',
          labelInterpolationFnc: function (value) {
            return value;
          }
        }],
        ['screen and (max-width: 600px)', {
          chartPadding: 0,
          labelOffset: 0,
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }]
      ];
    }

    $timeout(function () {
      new Chartist.Line('#line-chart', vm.simpleLineData, vm.simpleLineOptions);
      new Chartist.Line('#area-chart', vm.areaLineData, vm.areaLineOptions);
      new Chartist.Line('#bi-chart', vm.biLineData, vm.biLineOptions);

      new Chartist.Bar('#simple-bar', vm.simpleBarData, vm.simpleBarOptions);
      new Chartist.Bar('#multi-bar', vm.multiBarData, vm.multiBarOptions, vm.multiBarResponsive);
      new Chartist.Bar('#stacked-bar', vm.stackedBarData, vm.stackedBarOptions);

      new Chartist.Pie('#simple-pie', vm.simplePieData, vm.simplePieOptions, vm.pieResponsive);
      new Chartist.Pie('#label-pie', vm.labelsPieData, vm.labelsPieOptions);
      new Chartist.Pie('#donut', vm.simpleDonutData, vm.simpleDonutOptions, vm.donutResponsive);
    });
  }
})();