(function () {
  'use strict';

  angular.module('app.examples.charts')
    .controller('amChartsController', AmChartsController);

  AmChartsController.$inject = ['baConfig', 'layoutPaths'];

  function AmChartsController(baConfig, layoutPaths) {
    var vm = this;

    var layoutColors = baConfig.colors;
    var areaChart = AmCharts.makeChart('areaChart', {
      type: 'serial',
      theme: 'blur',
      color: layoutColors.defaultText,
      dataProvider: [
        {
          lineColor: layoutColors.info,
          date: '2012-01-01',
          duration: 408
        },
        {
          date: '2012-01-02',
          duration: 482
        },
        {
          date: '2012-01-03',
          duration: 562
        },
        {
          date: '2012-01-04',
          duration: 379
        },
        {
          lineColor: layoutColors.warning,
          date: '2012-01-05',
          duration: 501
        },
        {
          date: '2012-01-06',
          duration: 443
        },
        {
          date: '2012-01-07',
          duration: 405
        },
        {
          date: '2012-01-08',
          duration: 309,
          lineColor: layoutColors.danger
        },
        {
          date: '2012-01-09',
          duration: 287
        },
        {
          date: '2012-01-10',
          duration: 485
        },
        {
          date: '2012-01-11',
          duration: 890
        },
        {
          date: '2012-01-12',
          duration: 810
        }
      ],
      balloon: {
        cornerRadius: 6,
        horizontalPadding: 15,
        verticalPadding: 10
      },
      valueAxes: [
        {
          duration: 'mm',
          durationUnits: {
            hh: 'h ',
            mm: 'min'
          },
          gridAlpha: 0.5,
          gridColor: layoutColors.border
        }
      ],
      graphs: [
        {
          bullet: 'square',
          bulletBorderAlpha: 1,
          bulletBorderThickness: 1,
          fillAlphas: 0.5,
          fillColorsField: 'lineColor',
          legendValueText: '[[value]]',
          lineColorField: 'lineColor',
          title: 'duration',
          valueField: 'duration'
        }
      ],

      chartCursor: {
        categoryBalloonDateFormat: 'YYYY MMM DD',
        cursorAlpha: 0,
        fullWidth: true
      },
      dataDateFormat: 'YYYY-MM-DD',
      categoryField: 'date',
      categoryAxis: {
        dateFormats: [
          {
            period: 'DD',
            format: 'DD'
          },
          {
            period: 'WW',
            format: 'MMM DD'
          },
          {
            period: 'MM',
            format: 'MMM'
          },
          {
            period: 'YYYY',
            format: 'YYYY'
          }
        ],
        parseDates: true,
        autoGridCount: false,
        gridCount: 50,
        gridAlpha: 0.5,
        gridColor: layoutColors.border
      },
      export: {
        enabled: true
      },
      pathToImages: layoutPaths.images.amChart
    });

    areaChart.addListener('dataUpdated', zoomAreaChart);

    function zoomAreaChart() {
      areaChart.zoomToDates(new Date(2012, 0, 3), new Date(2012, 0, 11));
    }

    var barChart = AmCharts.makeChart('barChart', {
      type: 'serial',
      theme: 'blur',
      color: layoutColors.defaultText,
      dataProvider: [
        {
          country: 'USA',
          visits: 3025,
          color: layoutColors.primary
        },
        {
          country: 'China',
          visits: 1882,
          color: layoutColors.danger

        },
        {
          country: 'Japan',
          visits: 1809,
          color: layoutColors.info
        },
        {
          country: 'Germany',
          visits: 1322,
          color: layoutColors.success
        },
        {
          country: 'UK',
          visits: 1122,
          color: layoutColors.warning
        },
        {
          country: 'France',
          visits: 1114,
          color: layoutColors.primaryLight
        }
      ],
      valueAxes: [
        {
          axisAlpha: 0,
          position: 'left',
          title: 'Visitors from country',
          gridAlpha: 0.5,
          gridColor: layoutColors.border
        }
      ],
      startDuration: 1,
      graphs: [
        {
          balloonText: '<b>[[category]]: [[value]]</b>',
          fillColorsField: 'color',
          fillAlphas: 0.7,
          lineAlpha: 0.2,
          type: 'column',
          valueField: 'visits'
        }
      ],
      chartCursor: {
        categoryBalloonEnabled: false,
        cursorAlpha: 0,
        zoomable: false
      },
      categoryField: 'country',
      categoryAxis: {
        gridPosition: 'start',
        labelRotation: 45,
        gridAlpha: 0.5,
        gridColor: layoutColors.border
      },
      export: {
        enabled: true
      },
      creditsPosition: 'top-right',
      pathToImages: layoutPaths.images.amChart
    });

    var chart = AmCharts.makeChart('zoomAxisChart', {
      "type": "serial",
      "theme": "none",
      "color": layoutColors.defaultText,
      "dataDateFormat": "YYYY-MM-DD",
      "precision": 2,
      "valueAxes": [{
        color: layoutColors.defaultText,
        axisColor: layoutColors.defaultText,
        gridColor: layoutColors.defaultText,
        "id": "v1",
        "title": "Sales",
        "position": "left",
        "autoGridCount": false,
        "labelFunction": function(value) {
          return "$" + Math.round(value) + "M";
        }
      }, {
        color: layoutColors.defaultText,
        axisColor: layoutColors.defaultText,
        gridColor: layoutColors.defaultText,
        "id": "v2",
        "title": "Market Days",
        "gridAlpha": 0,
        "position": "right",
        "autoGridCount": false
      }],
      "graphs": [{
        "id": "g3",
        color: layoutColors.defaultText,
        "valueAxis": "v1",
        "lineColor": layoutColors.primaryLight,
        "fillColors": layoutColors.primaryLight,
        "fillAlphas": 0.8,
        "lineAlpha": 0.8,
        "type": "column",
        "title": "Actual Sales",
        "valueField": "sales2",
        "clustered": false,
        "columnWidth": 0.5,
        "lineColorField" : layoutColors.defaultText,
        "legendValueText": "$[[value]]M",
        "balloonText": "[[title]]<br/><b style='font-size: 130%'>$[[value]]M</b>"
      }, {
        "id": "g4",
        "valueAxis": "v1",
        color: layoutColors.defaultText,
        "lineColor": layoutColors.primary,
        "fillColors": layoutColors.primary,
        "fillAlphas": 0.9,
        "lineAlpha": 0.9,
        "type": "column",
        "title": "Target Sales",
        "valueField": "sales1",
        "clustered": false,
        "columnWidth": 0.3,
        "legendValueText": "$[[value]]M",
        "balloonText": "[[title]]<br/><b style='font-size: 130%'>$[[value]]M</b>"
      }, {
        "id": "g1",
        "valueAxis": "v2",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": layoutColors.defaultText,
        color: layoutColors.defaultText,
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "lineColor": layoutColors.danger,
        "type": "smoothedLine",
        "title": "Market Days",
        "useLineColorForBulletBorder": true,
        "valueField": "market1",
        "balloonText": "[[title]]<br/><b style='font-size: 130%'>[[value]]</b>"
      }, {
        "id": "g2",
        "valueAxis": "v2",
        color: layoutColors.defaultText,
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": layoutColors.defaultText,
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "lineColor": layoutColors.warning,
        "type": "smoothedLine",
        "dashLength": 5,
        "title": "Market Days ALL",
        "useLineColorForBulletBorder": true,
        "valueField": "market2",
        "balloonText": "[[title]]<br/><b style='font-size: 130%'>[[value]]</b>"
      }],
      "chartScrollbar": {
        "graph": "g1",
        "oppositeAxis": false,
        "offset": 30,
        gridAlpha: 0,
        color: layoutColors.defaultText,
        scrollbarHeight: 50,
        backgroundAlpha: 0,
        selectedBackgroundAlpha: 0.05,
        selectedBackgroundColor: layoutColors.defaultText,
        graphFillAlpha: 0,
        autoGridCount: true,
        selectedGraphFillAlpha: 0,
        graphLineAlpha: 0.2,
        selectedGraphLineColor: layoutColors.defaultText,
        selectedGraphLineAlpha: 1
      },
      "chartCursor": {
        "pan": true,
        "cursorColor" : layoutColors.danger,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha": 0,
        "valueLineAlpha": 0.2
      },
      "categoryField": "date",
      "categoryAxis": {
        "axisColor": layoutColors.defaultText,
        "color": layoutColors.defaultText,
        "gridColor": layoutColors.defaultText,
        "parseDates": true,
        "dashLength": 1,
        "minorGridEnabled": true
      },
      "legend": {
        "useGraphSettings": true,
        "position": "top",
        "color": layoutColors.defaultText
      },
      "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
      },
      "export": {
        "enabled": true
      },
      "dataProvider": [{
        "date": "2013-01-16",
        "market1": 71,
        "market2": 75,
        "sales1": 5,
        "sales2": 8
      }, {
        "date": "2013-01-17",
        "market1": 74,
        "market2": 78,
        "sales1": 4,
        "sales2": 6
      }, {
        "date": "2013-01-18",
        "market1": 78,
        "market2": 88,
        "sales1": 5,
        "sales2": 2
      }, {
        "date": "2013-01-19",
        "market1": 85,
        "market2": 89,
        "sales1": 8,
        "sales2": 9
      }, {
        "date": "2013-01-20",
        "market1": 82,
        "market2": 89,
        "sales1": 9,
        "sales2": 6
      }, {
        "date": "2013-01-21",
        "market1": 83,
        "market2": 85,
        "sales1": 3,
        "sales2": 5
      }, {
        "date": "2013-01-22",
        "market1": 88,
        "market2": 92,
        "sales1": 5,
        "sales2": 7
      }, {
        "date": "2013-01-23",
        "market1": 85,
        "market2": 90,
        "sales1": 7,
        "sales2": 6
      }, {
        "date": "2013-01-24",
        "market1": 85,
        "market2": 91,
        "sales1": 9,
        "sales2": 5
      }, {
        "date": "2013-01-25",
        "market1": 80,
        "market2": 84,
        "sales1": 5,
        "sales2": 8
      }, {
        "date": "2013-01-26",
        "market1": 87,
        "market2": 92,
        "sales1": 4,
        "sales2": 8
      }, {
        "date": "2013-01-27",
        "market1": 84,
        "market2": 87,
        "sales1": 3,
        "sales2": 4
      }, {
        "date": "2013-01-28",
        "market1": 83,
        "market2": 88,
        "sales1": 5,
        "sales2": 7
      }, {
        "date": "2013-01-29",
        "market1": 84,
        "market2": 87,
        "sales1": 5,
        "sales2": 8
      }, {
        "date": "2013-01-30",
        "market1": 81,
        "market2": 85,
        "sales1": 4,
        "sales2": 7
      }],
      pathToImages: layoutPaths.images.amChart
    });

    var funnelChart = AmCharts.makeChart('funnelChart', {
      type: 'funnel',
      theme: 'blur',
      color: layoutColors.defaultText,
      labelTickColor: layoutColors.borderDark,
      dataProvider: [
        {
          title: 'Website visits',
          value: 300
        },
        {
          title: 'Downloads',
          value: 123
        },
        {
          title: 'Requested prices',
          value: 98
        },
        {
          title: 'Contaced',
          value: 72
        },
        {
          title: 'Purchased',
          value: 35
        },
        {
          title: 'Asked for support',
          value: 25
        },
        {
          title: 'Purchased more',
          value: 18
        }
      ],
      titleField: 'title',
      marginRight: 160,
      marginLeft: 15,
      labelPosition: 'right',
      funnelAlpha: 0.9,
      valueField: 'value',
      startX: 0,
      alpha: 0.8,
      neckWidth: '0%',
      startAlpha: 0,
      outlineThickness: 1,
      neckHeight: '0%',
      balloonText: '[[title]]:<b>[[value]]</b>',
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-left',
      pathToImages: layoutPaths
    });

    var gnattChart = AmCharts.makeChart('gnattChart', {
      type: 'gantt',
      theme: 'light',
      marginRight: 70,
      period: 'hh',
      dataDateFormat: 'YYYY-MM-DD',
      balloonDateFormat: 'JJ:NN',
      columnWidth: 0.5,
      valueAxis: {
        type: 'date',
        minimum: 7,
        maximum: 31
      },
      brightnessStep: 10,
      graph: {
        fillAlphas: 1,
        balloonText: '<b>[[task]]</b>: [[open]] [[value]]'
      },
      rotate: true,
      categoryField: 'category',
      segmentsField: 'segments',
      colorField: 'color',
      startDate: '2015-01-01',
      startField: 'start',
      endField: 'end',
      durationField: 'duration',
      dataProvider: [
        {
          category: 'John',
          segments: [{
            start: 7,
            duration: 2,
            color: '#46615e',
            task: 'Task #1'
          }, {
            duration: 2,
            color: '#727d6f',
            task: 'Task #2'
          }, {
            duration: 2,
            color: '#8dc49f',
            task: 'Task #3'
          }]
        }, {
          category: 'Smith',
          segments: [{
            start: 10,
            duration: 2,
            color: '#727d6f',
            task: 'Task #2'
          }, {
            duration: 1,
            color: '#8dc49f',
            task: 'Task #3'
          }, {
            duration: 4,
            color: '#46615e',
            task: 'Task #1'
          }]
        }, {
          category: 'Ben',
          segments: [{
            start: 12,
            duration: 2,
            color: '#727d6f',
            task: 'Task #2'
          }, {
            start: 16,
            duration: 2,
            color: '#FFE4C4',
            task: 'Task #4'
          }]
        }, {
          category: 'Mike',
          segments: [{
            start: 9,
            duration: 6,
            color: '#46615e',
            task: 'Task #1'
          }, {
            duration: 4,
            color: '#727d6f',
            task: 'Task #2'
          }]
        }, {
          category: 'Lenny',
          segments: [{
            start: 8,
            duration: 1,
            color: '#8dc49f',
            task: 'Task #3'
          }, {
            duration: 4,
            color: '#46615e',
            task: 'Task #1'
          }]
        }, {
          category: 'Scott',
          segments: [{
            start: 15,
            duration: 3,
            color: '#727d6f',
            task: 'Task #2'
          }]
        }, {
          category: 'Julia',
          segments: [{
            start: 9,
            duration: 2,
            color: '#46615e',
            task: 'Task #1'
          }, {
            duration: 1,
            color: '#727d6f',
            task: 'Task #2'
          }, {
            duration: 8,
            color: '#8dc49f',
            task: 'Task #3'
          }]
        }, {
          category: 'Bob',
          segments: [{
            start: 9,
            duration: 8,
            color: '#727d6f',
            task: 'Task #2'
          }, {
            duration: 7,
            color: '#8dc49f',
            task: 'Task #3'
          }]
        }, {
          category: 'Kendra',
          segments: [{
            start: 11,
            duration: 8,
            color: '#727d6f',
            task: 'Task #2'
          }, {
            start: 16,
            duration: 2,
            color: '#FFE4C4',
            task: 'Task #4'
          }]
        }, {
          category: 'Tom',
          segments: [{
            start: 9,
            duration: 4,
            color: '#46615e',
            task: 'Task #1'
          }, {
            duration: 3,
            color: '#727d6f',
            task: 'Task #2'
          }, {
            duration: 5,
            color: '#8dc49f',
            task: 'Task #3'
          }]
        }, {
          category: 'Kyle',
          segments: [{
            start: 6,
            duration: 3,
            color: '#727d6f',
            task: 'Task #2'
          }]
        }, {
          category: 'Anita',
          segments: [{
            start: 12,
            duration: 2,
            color: '#727d6f',
            task: 'Task #2'
          }, {
            start: 16,
            duration: 2,
            color: '#FFE4C4',
            task: 'Task #4'
          }]
        }, {
          category: 'Jack',
          segments: [{
            start: 8,
            duration: 10,
            color: '#46615e',
            task: 'Task #1'
          }, {
            duration: 2,
            color: '#727d6f',
            task: 'Task #2'
          }]
        }, {
          category: 'Kim',
          segments: [{
            start: 12,
            duration: 2,
            color: '#727d6f',
            task: 'Task #2'
          }, {
            duration: 3,
            color: '#8dc49f',
            task: 'Task #3'
          }]
        }, {
          category: 'Aaron',
          segments: [{
            start: 18,
            duration: 2,
            color: '#727d6f',
            task: 'Task #2'
          }, {
            duration: 2,
            color: '#FFE4C4',
            task: 'Task #4'
          }]
        }, {
          category: 'Alan',
          segments: [{
            start: 17,
            duration: 2,
            color: '#46615e',
            task: 'Task #1'
          }, {
            duration: 2,
            color: '#727d6f',
            task: 'Task #2'
          }, {
            duration: 2,
            color: '#8dc49f',
            task: 'Task #3'
          }]
        }, {
          category: 'Ruth',
          segments: [{
            start: 13,
            duration: 2,
            color: '#727d6f',
            task: 'Task #2'
          }, {
            duration: 1,
            color: '#8dc49f',
            task: 'Task #3'
          }, {
            duration: 4,
            color: '#46615e',
            task: 'Task #1'
          }]
        }, {
          category: 'Simon',
          segments: [{
            start: 10,
            duration: 3,
            color: '#727d6f',
            task: 'Task #2'
          }, {
            start: 17,
            duration: 4,
            color: '#FFE4C4',
            task: 'Task #4'
          }]
        }],
      valueScrollbar: {
        autoGridCount: true
      },
      chartCursor: {
        cursorColor: '#55bb76',
        valueBalloonsEnabled: false,
        cursorAlpha: 0,
        valueLineAlpha: 0.5,
        valueLineBalloonEnabled: true,
        valueLineEnabled: true,
        zoomable: false,
        valueZoomable: true
      },
      export: {
        enabled: true
      }
    });

    var lineChart = AmCharts.makeChart('lineChart', {
      type: 'serial',
      theme: 'blur',
      color: layoutColors.defaultText,
      marginTop: 0,
      marginRight: 15,
      dataProvider: [
        {
          year: '1990',
          value: -0.17
        },
        {
          year: '1991',
          value: -0.254
        },
        {
          year: '1992',
          value: 0.019
        },
        {
          year: '1993',
          value: -0.063
        },
        {
          year: '1994',
          value: 0.005
        },
        {
          year: '1995',
          value: 0.077
        },
        {
          year: '1996',
          value: 0.12
        },
        {
          year: '1997',
          value: 0.011
        },
        {
          year: '1998',
          value: 0.177
        },
        {
          year: '1999',
          value: -0.021
        },
        {
          year: '2000',
          value: -0.037
        },
        {
          year: '2001',
          value: 0.03
        },
        {
          year: '2002',
          value: 0.179
        },
        {
          year: '2003',
          value: 0.2
        },
        {
          year: '2004',
          value: 0.180
        },
        {
          year: '2005',
          value: 0.21
        }
      ],
      valueAxes: [
        {
          axisAlpha: 0,
          position: 'left',
          gridAlpha: 0.5,
          gridColor: layoutColors.border
        }
      ],
      graphs: [
        {
          id: 'g1',
          balloonText: '[[value]]',
          bullet: 'round',
          bulletSize: 8,
          lineColor: layoutColors.danger,
          lineThickness: 1,
          negativeLineColor: layoutColors.warning,
          type: 'smoothedLine',
          valueField: 'value'
        }
      ],
      chartScrollbar: {
        graph: 'g1',
        gridAlpha: 0,
        color: layoutColors.defaultText,
        scrollbarHeight: 55,
        backgroundAlpha: 0,
        selectedBackgroundAlpha: 0.05,
        selectedBackgroundColor: layoutColors.defaultText,
        graphFillAlpha: 0,
        autoGridCount: true,
        selectedGraphFillAlpha: 0,
        graphLineAlpha: 0.2,
        selectedGraphLineColor: layoutColors.defaultText,
        selectedGraphLineAlpha: 1
      },
      chartCursor: {
        categoryBalloonDateFormat: 'YYYY',
        cursorAlpha: 0,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        valueLineAlpha: 0.5,
        fullWidth: true
      },
      dataDateFormat: 'YYYY',
      categoryField: 'year',
      categoryAxis: {
        minPeriod: 'YYYY',
        parseDates: true,
        minorGridAlpha: 0.1,
        minorGridEnabled: true,
        gridAlpha: 0.5,
        gridColor: layoutColors.border
      },
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-right',
      pathToImages: layoutPaths.images.amChart
    });

    lineChart.addListener('rendered', zoomChart);
    if (lineChart.zoomChart) {
      lineChart.zoomChart();
    }

    function zoomChart() {
      lineChart.zoomToIndexes(Math.round(lineChart.dataProvider.length * 0.4), Math.round(lineChart.dataProvider.length * 0.55));
    }

    var pieChart = AmCharts.makeChart('pieChart', {
      type: 'pie',
      startDuration: 0,
      theme: 'blur',
      addClassNames: true,
      color: layoutColors.defaultText,
      labelTickColor: layoutColors.borderDark,
      legend: {
        position: 'right',
        marginRight: 100,
        autoMargins: false
      },
      innerRadius: '40%',
      defs: {
        filter: [
          {
            id: 'shadow',
            width: '200%',
            height: '200%',
            feOffset: {
              result: 'offOut',
              in: 'SourceAlpha',
              dx: 0,
              dy: 0
            },
            feGaussianBlur: {
              result: 'blurOut',
              in: 'offOut',
              stdDeviation: 5
            },
            feBlend: {
              in: 'SourceGraphic',
              in2: 'blurOut',
              mode: 'normal'
            }
          }
        ]
      },
      dataProvider: [
        {
          country: 'Lithuania',
          litres: 501.9
        },
        {
          country: 'Czech Republic',
          litres: 301.9
        },
        {
          country: 'Ireland',
          litres: 201.1
        },
        {
          country: 'Germany',
          litres: 165.8
        },
        {
          country: 'Australia',
          litres: 139.9
        },
        {
          country: 'Austria',
          litres: 128.3
        },
        {
          country: 'UK',
          litres: 99
        },
        {
          country: 'Belgium',
          litres: 60
        }
      ],
      valueField: 'litres',
      titleField: 'country',
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-left',

      autoMargins: false,
      marginTop: 10,
      alpha: 0.8,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      pullOutRadius: 0,
      pathToImages: layoutPaths.images.amChart,
      responsive: {
        enabled: true,
        rules: [
          // at 900px wide, we hide legend
          {
            maxWidth: 900,
            overrides: {
              legend: {
                enabled: false
              }
            }
          },

          // at 200 px we hide value axis labels altogether
          {
            maxWidth: 200,
            overrides: {
              valueAxes: {
                labelsEnabled: false
              },
              marginTop: 30,
              marginBottom: 30,
              marginLeft: 30,
              marginRight: 30
            }
          }
        ]
      }
    });

    pieChart.addListener('init', handleInit);

    pieChart.addListener('rollOverSlice', function (e) {
      handleRollOver(e);
    });

    function handleInit() {
      pieChart.legend.addListener('rollOverItem', handleRollOver);
    }

    function handleRollOver(e) {
      var wedge = e.dataItem.wedge.node;
      wedge.parentNode.appendChild(wedge);
    }
  }
})();