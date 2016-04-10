// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ng-img-responsive'])

.config(function(ngImgResponsiveConfigProvider) {
    ngImgResponsiveConfigProvider.setLimitPixelRatio(2);
    ngImgResponsiveConfigProvider.usePixelRatio(true);
    ngImgResponsiveConfigProvider.useResponsive(true);
    ngImgResponsiveConfigProvider.setImage.thumbnail('160:90');
    ngImgResponsiveConfigProvider.setImage.small('320:180');
    ngImgResponsiveConfigProvider.setImage.medium('640:360');
    ngImgResponsiveConfigProvider.setImage.large('1280:720');
    ngImgResponsiveConfigProvider.setImage.extraLarge('1920:1080');
    // ngImgResponsiveConfigProvider.setPreload(true);
    // ngImgResponsiveConfigProvider.setSpinner('url');
});
