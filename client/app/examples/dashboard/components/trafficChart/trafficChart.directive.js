(function () {
  'use strict';

  angular.module('app.examples.dashboard')
    .directive('trafficChart', TrafficChartDirective);

  TrafficChartDirective.$inject = [];

  function TrafficChartDirective() {
    return {
      restrict: 'E',
      controller: TrafficChartController,
      templateUrl: 'app/examples/dashboard/components/trafficChart/trafficChart.html'
    };
  }

  TrafficChartController.$inject = ['baConfig', 'colorHelper'];

  function TrafficChartController(baConfig, colorHelper) {
    var vm = this;

    vm.transparent = baConfig.theme.blur;
    var dashboardColors = baConfig.colors.dashboard;
    vm.doughnutData = {
      labels: [
        'Other',
        'Search engines',
        'Referral Traffic',
        'Direct Traffic',
        'Ad Campaigns'
      ],
      datasets: [
        {
          data: [2000, 1500, 1000, 1200, 400],
          backgroundColor: [
            dashboardColors.white,
            dashboardColors.blueStone,
            dashboardColors.surfieGreen,
            dashboardColors.silverTree,
            dashboardColors.gossip

          ],
          hoverBackgroundColor: [
            colorHelper.shade(dashboardColors.white, 15),
            colorHelper.shade(dashboardColors.blueStone, 15),
            colorHelper.shade(dashboardColors.surfieGreen, 15),
            colorHelper.shade(dashboardColors.silverTree, 15),
            colorHelper.shade(dashboardColors.gossip, 15)
          ],
          percentage: [87, 22, 70, 38, 17]
        }]
    };

    var ctx = document.getElementById('chart-area').getContext('2d');
    window.myDoughnut = new Chart(ctx, {
      type: 'doughnut',
      data: vm.doughnutData,
      options: {
        cutoutPercentage: 64,
        responsive: true,
        elements: {
          arc: {
            borderWidth: 0
          }
        }
      }
    });
  }
})();