(function () {
  'use strict';

  angular.module('app.examples.charts', [])
    .config(['$stateProvider', routeConfig])
    .config(['ChartJsProvider', 'baConfigProvider', chartJsConfig])

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.examples.charts', {
        url: '/charts',
        abstract: true,
        template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
        title: 'Charts',
        sidebarMeta: {
          icon: 'ion-stats-bars',
          order: 150
        }
      })
      .state('app.examples.charts.chartist', {
        url: '/chartist',
        templateUrl: 'app/examples/charts/chartist/chartist.html',
        controller: 'chartistController',
        controllerAs: 'vm',
        title: 'Chartist',
        sidebarMeta: {
          order: 0
        }
      })

      .state('app.examples.charts.chartJs', {
        url: '/chartJs',
        templateUrl: 'app/examples/charts/chartJs/chartJs.html',
        controller: 'chartJsController',
        controllerAs: 'vm',
        title: 'Chart.js',
        sidebarMeta: {
          order: 0
        }
      });
  }

  function chartJsConfig(ChartJsProvider, baConfigProvider) {
    var layoutColors = baConfigProvider.colors;
    // Configure all charts
    ChartJsProvider.setOptions({
      chartColors: [
        layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.info, layoutColors.default, layoutColors.primaryDark, layoutColors.successDark, layoutColors.warningLight, layoutColors.successLight, layoutColors.primaryLight],
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 2500
      },
      scale: {
        gridLines: {
          color: layoutColors.border
        },
        scaleLabel: {
          fontColor: layoutColors.defaultText
        },
        ticks: {
          fontColor: layoutColors.defaultText,
          showLabelBackdrop: false
        }
      }
    });
    // Configure all line charts
    ChartJsProvider.setOptions('Line', {
      datasetFill: false
    });
    // Configure all radar charts
    ChartJsProvider.setOptions('radar', {
      scale: {
        pointLabels: {
          fontColor: layoutColors.defaultText
        },
        ticks: {
          maxTicksLimit: 5,
          display: false
        }
      }
    });
    // Configure all bar charts
    ChartJsProvider.setOptions('bar', {
      tooltips: {
        enabled: false
      }
    });
  }
})();