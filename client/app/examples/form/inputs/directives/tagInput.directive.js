(function () {
  'use strict';

  angular
    .module('app.examples.form')
    .directive('tagInput', TagInputDirective);

  TagInputDirective.$inject = [];

  /* @ngInject */
  function TagInputDirective() {
    return {
      restrict: 'A',
      link: TagInputLink
    };

    function TagInputLink(scope, element, attr) {
      $(element).tagsinput({
        tagClass: 'label label-' + attr.tagInput
      });
    }
  }
})();