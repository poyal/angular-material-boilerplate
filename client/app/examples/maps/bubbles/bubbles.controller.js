(function () {
  'use strict';

  angular.module('app.examples.maps')
    .controller('bubblesController', BubblesController);

  BubblesController.$inject = ['baConfig', '$timeout', 'layoutPaths'];

  function BubblesController(baConfig, $timeout, layoutPaths) {
    var vm = this;
    var layoutColors = baConfig.colors;
    var latlong = {};
    latlong.AD = {latitude: 42.5, longitude: 1.5};
    latlong.AE = {latitude: 24, longitude: 54};
    latlong.AF = {latitude: 33, longitude: 65};


    var mapData = [
      {code: 'AD', name: 'Afghanistan', value: 32358260, color: layoutColors.primaryDark},
      {code: 'AE', name: 'Albania', value: 3215988, color: layoutColors.warning},
      {code: 'AF', name: 'Algeria', value: 35980193, color: layoutColors.danger}
    ];

    var map;
    var minBulletSize = 3;
    var maxBulletSize = 70;
    var min = Infinity;
    var max = -Infinity;

    // get min and max values
    for (var cnt = 0; cnt < mapData.length; cnt++) {
      var item = mapData[cnt].value;
      if (item < min) {
        min = item;
      }
      if (item > max) {
        max = item;
      }
    }

    // build map
    AmCharts.theme = AmCharts.themes.blur;
    map = new AmCharts.AmMap();

    map.addTitle('Population of the World in 2011', 14);
    map.addTitle('source: Gapminder', 11);
    map.areasSettings = {
      unlistedAreasColor: '#000000',
      unlistedAreasAlpha: 0.1
    };
    map.imagesSettings.balloonText = '<span style="font-size:14px;"><b>[[title]]</b>: [[value]]</span>';
    map.pathToImages = layoutPaths.images.amMap;

    var dataProvider = {
      mapVar: AmCharts.maps.worldLow,
      images: []
    };

    // it's better to use circle square to show difference between values, not a radius
    var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
    var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;

    // create circle for each country
    for (var i = 0; i < mapData.length; i++) {
      var dataItem = mapData[i];
      var value = dataItem.value;
      // calculate size of a bubble
      var square = (value - min) / (max - min) * (maxSquare - minSquare) + minSquare;
      if (square < minSquare) {
        square = minSquare;
      }
      var size = Math.sqrt(square / (Math.PI * 2));
      var id = dataItem.code;

      dataProvider.images.push({
        type: 'circle',
        width: size,
        height: size,
        color: dataItem.color,
        longitude: latlong[id].longitude,
        latitude: latlong[id].latitude,
        title: dataItem.name,
        value: value
      });
    }

    map.dataProvider = dataProvider;
    map.export = {
      enabled: true
    };

    $timeout(function () {
      map.write('map-bubbles');
    }, 100);
  }
})();