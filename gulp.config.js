module.exports = function () {
  var client = 'client';
  var clientApp = './client/app';
  var dist = 'www';
  var publish = 'html';

  var config = {
    client: client,
    dist: dist,
    publish: publish,
    index: client + "/index.html",
    alljs: [
      client + '/app/**/*.js',
      '!./client/bower_components/**'
    ],
    js: [
      clientApp + "/**/*.module.js",
      clientApp + "/**/*.js",
      client + "/css/*.css",
      '!' + clientApp + "/**/*.spec.js"
    ],
    templates: [
      client + "/app/**/*.html"
    ],
    assets: [
      client + "/assets/**/*"
    ],
    wiredep: {
      exclude: [/\/bootstrap\.js$/, /\/bootstrap-sass\/.*\.js/, /\/require\.js/],
      directory: 'bower_components'
    },
    errorHandler: function(title) {
      'use strict';

      return function (err) {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
      }
    }
  };

  return config;
};