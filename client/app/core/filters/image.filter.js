(function () {
  'use strict';

  angular.module('app.core')
    .filter('appImage', AppImageFilter)
    .filter('kameleonImg', KameleonImgFilter)
    .filter('profilePicture', ProfilePictureFilter);

  function AppImageFilter(layoutPaths) {
    return appImage;

    function appImage(input) {
      return layoutPaths.images.root + input;
    }
  }

  function KameleonImgFilter(layoutPaths) {
    return kameleonImg;

    function kameleonImg(input) {
      return layoutPaths.images.root + 'theme/icon/kameleon/' + input + '.svg';
    }
  }

  function ProfilePictureFilter(layoutPaths) {
    return profilePicture;

    function profilePicture(input, ext) {
      ext = ext || 'png';
      return layoutPaths.images.profile + input + '.' + ext;
    }
  }
})();