(function () {
  'use strict';

  angular.module('app.examples.maps')
    .controller('googleController', GoogleMapsController);

  GoogleMapsController.$inject = ['$timeout'];

  function GoogleMapsController($timeout) {
    var vm = this;
    function initialize() {
      var mapCanvas = document.getElementById('google-maps');
      var mapOptions = {
        center: new google.maps.LatLng(44.5403, -78.5463),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(mapCanvas, mapOptions);
    }

    $timeout(function(){
      initialize();
    }, 100);
  }
})();