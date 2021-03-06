(function () {
  'use strict';

  angular.module('app.core')
    .service('fileReader', FileReaderService);

  FileReaderService.$inject = ['$q'];

  function FileReaderService($q) {
    var service = this;

    service.readAsDataUrl = readAsDataUrl;

    var onLoad = function (reader, deferred, scope) {
      return function () {
        scope.$apply(function () {
          deferred.resolve(reader.result);
        });
      };
    };

    var onError = function (reader, deferred, scope) {
      return function () {
        scope.$apply(function () {
          deferred.reject(reader.result);
        });
      };
    };

    var onProgress = function (reader, scope) {
      return function (event) {
        scope.$broadcast('fileProgress',
          {
            total: event.total,
            loaded: event.loaded
          });
      };
    };

    var getReader = function (deferred, scope) {
      var reader = new FileReader();
      reader.onload = onLoad(reader, deferred, scope);
      reader.onerror = onError(reader, deferred, scope);
      reader.onprogress = onProgress(reader, scope);
      return reader;
    };

    var readAsDataUrl = function (file, scope) {
      var deferred = $q.defer();

      var reader = getReader(deferred, scope);
      reader.readAsDataUrl(file);

      return deferred.promise;
    };
  }
})();