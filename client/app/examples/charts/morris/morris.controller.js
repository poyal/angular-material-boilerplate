(function () {
  'use strict';

  angular.module('app.examples.charts')
    .controller('morrisController', MorrisController);

  MorrisController.$inject = ['$window', 'baConfig'];
  /** @ngInject */
  function MorrisController($window, baConfig) {
    var vm = this;

    var layoutColors = baConfig.colors;
    vm.colors = [layoutColors.primary, layoutColors.warning, layoutColors.danger, layoutColors.info, layoutColors.success, layoutColors.primaryDark];
    vm.lineData = [
      {y: '2006', a: 100, b: 90},
      {y: '2007', a: 75, b: 65},
      {y: '2008', a: 50, b: 40},
      {y: '2009', a: 75, b: 65},
      {y: '2010', a: 50, b: 40},
      {y: '2011', a: 75, b: 65},
      {y: '2012', a: 100, b: 90}
    ];
    vm.areaData = [
      {y: '2006', a: 100, b: 90},
      {y: '2007', a: 75, b: 65},
      {y: '2008', a: 50, b: 40},
      {y: '2009', a: 75, b: 65},
      {y: '2010', a: 50, b: 40},
      {y: '2011', a: 75, b: 65},
      {y: '2012', a: 100, b: 90}
    ];
    vm.barData = [
      {y: '2006', a: 100, b: 90},
      {y: '2007', a: 75, b: 65},
      {y: '2008', a: 50, b: 40},
      {y: '2009', a: 75, b: 65},
      {y: '2010', a: 50, b: 40},
      {y: '2011', a: 75, b: 65},
      {y: '2012', a: 100, b: 90}
    ];
    vm.donutData = [
      {label: 'Download Sales', value: 12},
      {label: 'In-Store Sales', value: 30},
      {label: 'Mail-Order Sales', value: 20}
    ];

    angular.element($window).bind('resize', function () {
      //$window.Morris.Grid.prototype.redraw();
    });
  }

})();