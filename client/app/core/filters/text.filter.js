(function () {
  'use strict';

  angular
    .module('app.core')
    .filter('plainText', PlainTextFilter);

  function PlainTextFilter() {
    return plainText;

    function plainText(text) {
      return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    }
  }
})();