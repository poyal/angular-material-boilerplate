(function () {
  'use strict';

  angular.module('app.core')
    .service('baUtil', BaUtilService);

  BaUtilService.$inject = [];

  function BaUtilService() {
    var service = this;

    service.isDescendant = isDescendant;
    service.hexToRGB = hexToRGB;
    service.hasAttr = hasAttr;

    function isDescendant(parent, child) {
      var node = child.parentNode;
      while (node !== null) {
        if (node === parent) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    }

    function hexToRGB(hex, alpha) {
      var r = parseInt(hex.slice(1, 3), 16);
      var g = parseInt(hex.slice(3, 5), 16);
      var b = parseInt(hex.slice(5, 7), 16);
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    }

    function hasAttr(elem, attrName) {
      var attr = $(elem).attr(attrName);
      return (typeof attr !== typeof undefined && attr !== false);
    }
  }
})();