(function () {
  'use strict';

  angular.module('app.examples.charts', [])
    .config(['$stateProvider', routeConfig])
    .config(['baConfigProvider', amChartConfig])
    .config(['ChartJsProvider', 'baConfigProvider', chartJsConfig])
    .config(['baConfigProvider', morrisConfig]);

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
      .state('app.examples.charts.amCharts', {
        url: '/amCharts',
        templateUrl: 'app/examples/charts/amCharts/amCharts.html',
        controller: 'amChartsController',
        controllerAs: 'vm',
        title: 'AmCharts',
        sidebarMeta: {
          order: 0
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
      })
      .state('app.examples.charts.morris', {
        url: '/morris',
        templateUrl: 'app/examples/charts/morris/morris.html',
        controller: 'morrisController',
        controllerAs: 'vm',
        title: 'Morris',
        sidebarMeta: {
          order: 0
        }
      });
  }

  function amChartConfig(baConfigProvider) {
    var layoutColors = baConfigProvider.colors;
    AmCharts.themes.blur = {

      themeName: "blur",

      AmChart: {
        color: layoutColors.defaultText,
        backgroundColor: "#FFFFFF"
      },

      AmCoordinateChart: {
        colors: [layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.info, layoutColors.primaryDark, layoutColors.warningLight, layoutColors.successDark, layoutColors.successLight, layoutColors.primaryLight, layoutColors.warningDark]
      },

      AmStockChart: {
        colors: [layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.info, layoutColors.primaryDark, layoutColors.warningLight, layoutColors.successDark, layoutColors.successLight, layoutColors.primaryLight, layoutColors.warningDark]
      },

      AmSlicedChart: {
        colors: [layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.info, layoutColors.primaryDark, layoutColors.warningLight, layoutColors.successDark, layoutColors.successLight, layoutColors.primaryLight, layoutColors.warningDark],
        labelTickColor: "#FFFFFF",
        labelTickAlpha: 0.3
      },

      AmRectangularChart: {
        zoomOutButtonColor: '#FFFFFF',
        zoomOutButtonRollOverAlpha: 0.15,
        zoomOutButtonImage: "lens.png"
      },

      AxisBase: {
        axisColor: "#FFFFFF",
        axisAlpha: 0.3,
        gridAlpha: 0.1,
        gridColor: "#FFFFFF"
      },

      ChartScrollbar: {
        backgroundColor: "#FFFFFF",
        backgroundAlpha: 0.12,
        graphFillAlpha: 0.5,
        graphLineAlpha: 0,
        selectedBackgroundColor: "#FFFFFF",
        selectedBackgroundAlpha: 0.4,
        gridAlpha: 0.15
      },

      ChartCursor: {
        cursorColor: layoutColors.primary,
        color: "#FFFFFF",
        cursorAlpha: 0.5
      },

      AmLegend: {
        color: "#FFFFFF"
      },

      AmGraph: {
        lineAlpha: 0.9
      },
      GaugeArrow: {
        color: "#FFFFFF",
        alpha: 0.8,
        nailAlpha: 0,
        innerRadius: "40%",
        nailRadius: 15,
        startWidth: 15,
        borderAlpha: 0.8,
        nailBorderAlpha: 0
      },

      GaugeAxis: {
        tickColor: "#FFFFFF",
        tickAlpha: 1,
        tickLength: 15,
        minorTickLength: 8,
        axisThickness: 3,
        axisColor: '#FFFFFF',
        axisAlpha: 1,
        bandAlpha: 0.8
      },

      TrendLine: {
        lineColor: layoutColors.danger,
        lineAlpha: 0.8
      },

      // ammap
      AreasSettings: {
        alpha: 0.8,
        color: layoutColors.info,
        colorSolid: layoutColors.primaryDark,
        unlistedAreasAlpha: 0.4,
        unlistedAreasColor: "#FFFFFF",
        outlineColor: "#FFFFFF",
        outlineAlpha: 0.5,
        outlineThickness: 0.5,
        rollOverColor: layoutColors.primary,
        rollOverOutlineColor: "#FFFFFF",
        selectedOutlineColor: "#FFFFFF",
        selectedColor: "#f15135",
        unlistedAreasOutlineColor: "#FFFFFF",
        unlistedAreasOutlineAlpha: 0.5
      },

      LinesSettings: {
        color: "#FFFFFF",
        alpha: 0.8
      },

      ImagesSettings: {
        alpha: 0.8,
        labelColor: "#FFFFFF",
        color: "#FFFFFF",
        labelRollOverColor: layoutColors.primaryDark
      },

      ZoomControl: {
        buttonFillAlpha: 0.8,
        buttonIconColor: layoutColors.defaultText,
        buttonRollOverColor: layoutColors.danger,
        buttonFillColor: layoutColors.primaryDark,
        buttonBorderColor: layoutColors.primaryDark,
        buttonBorderAlpha: 0,
        buttonCornerRadius: 0,
        gridColor: "#FFFFFF",
        gridBackgroundColor: "#FFFFFF",
        buttonIconAlpha: 0.6,
        gridAlpha: 0.6,
        buttonSize: 20
      },

      SmallMap: {
        mapColor: "#000000",
        rectangleColor: layoutColors.danger,
        backgroundColor: "#FFFFFF",
        backgroundAlpha: 0.7,
        borderThickness: 1,
        borderAlpha: 0.8
      },

      // the defaults below are set using CSS syntax, you can use any existing css property
      // if you don't use Stock chart, you can delete lines below
      PeriodSelector: {
        color: "#FFFFFF"
      },

      PeriodButton: {
        color: "#FFFFFF",
        background: "transparent",
        opacity: 0.7,
        border: "1px solid rgba(0, 0, 0, .3)",
        MozBorderRadius: "5px",
        borderRadius: "5px",
        margin: "1px",
        outline: "none",
        boxSizing: "border-box"
      },

      PeriodButtonSelected: {
        color: "#FFFFFF",
        backgroundColor: "#b9cdf5",
        border: "1px solid rgba(0, 0, 0, .3)",
        MozBorderRadius: "5px",
        borderRadius: "5px",
        margin: "1px",
        outline: "none",
        opacity: 1,
        boxSizing: "border-box"
      },

      PeriodInputField: {
        color: "#FFFFFF",
        background: "transparent",
        border: "1px solid rgba(0, 0, 0, .3)",
        outline: "none"
      },

      DataSetSelector: {
        color: "#FFFFFF",
        selectedBackgroundColor: "#b9cdf5",
        rollOverBackgroundColor: "#a8b0e4"
      },

      DataSetCompareList: {
        color: "#FFFFFF",
        lineHeight: "100%",
        boxSizing: "initial",
        webkitBoxSizing: "initial",
        border: "1px solid rgba(0, 0, 0, .3)"
      },

      DataSetSelect: {
        border: "1px solid rgba(0, 0, 0, .3)",
        outline: "none"
      }

    };
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

  function morrisConfig(baConfigProvider) {
    var layoutColors = baConfigProvider.colors;
    Morris.Donut.prototype.defaults.backgroundColor = 'transparent';
    Morris.Donut.prototype.defaults.labelColor = layoutColors.defaultText;
    Morris.Grid.prototype.gridDefaults.gridLineColor = layoutColors.borderDark;
    Morris.Grid.prototype.gridDefaults.gridTextColor = layoutColors.defaultText;
  }
})();