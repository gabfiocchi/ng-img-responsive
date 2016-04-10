/**!
 * ng-responsive-image - v0.0.1 - 2016-04-09
 *
 * Copyright (c) 2016 Gabriel Fiocchi - Vsyon Argentina
 * Distributed under the MIT licence
 */

angular.module('ng-img-responsive', [])

.provider('ngImgResponsiveConfig', function() {
        var limitPixelRatio, usePixelRatio, useResponsive;
        var thumbnail, small, medium, large, extraLarge;
        return {
            setLimitPixelRatio: function(value) {
                limitPixelRatio = value;
            },
            usePixelRatio: function(value) {
                usePixelRatio = value;
            },
            useResponsive: function(value) {
                useResponsive = value;
            },
            setImage: {
                thumbnail: function(value) {

                    thumbnail = value.split(":");
                },
                small: function(value) {

                    small = value.split(":");
                },
                medium: function(value) {

                    medium = value.split(":");
                },
                large: function(value) {

                    large = value.split(":");
                },
                extraLarge: function(value) {

                    extraLarge = value.split(":");
                }
            },
            $get: function() {
                return {
                    limitPixelRatio: limitPixelRatio,
                    usePixelRatio: usePixelRatio,
                    useResponsive: useResponsive,
                    setImage: [{
                        "size": thumbnail,
                        "minWidth": 1,
                        "maxWidth": 319
                    }, {
                        "size": small,
                        "minWidth": 161,
                        "maxWidth": 320
                    }, {
                        "size": medium,
                        "minWidth": 321,
                        "maxWidth": 640
                    }, {
                        "size": large,
                        "minWidth": 641,
                        "maxWidth": 1280
                    }, {
                        "size": extraLarge,
                        "minWidth": 1281,
                        "maxWidth": 5000
                    }]
                };
            }
        };
    })
    .controller("ngResponsiveCtrl", function($scope, ngImgResponsiveConfig) {
        $scope.ngImgResponsiveConfig = ngImgResponsiveConfig;
    })

.directive('ngresponsive', function() {
    return {
        restrict: 'A',
        scope: {
            'preload': '=',
            'spinner': '=',
            'ratio': '=',
            'responsive': '=',
        },
        controller: 'ngResponsiveCtrl',
        link: function(scope, element, attrs) {
            // TODO
            /*
                preload
                spinner
            */
            var provide = scope.ngImgResponsiveConfig;
            var width = window.innerWidth;
            var devicePixelRatio = Math.round(window.devicePixelRatio);

            for (var i = 0; i < provide.setImage.length; i++) {
                if (width >= provide.setImage[i].minWidth && width <= provide.setImage[i].maxWidth) {
                    var size = i;
                }
            };

            var fileSize = '';
            var subst = '';
            var re = /.\w+$/g;
            var match = re.exec(attrs.ngSrc);

            // dar importancia al atributo y no al config, por si el config esta en true, y el atributo es false

            if (provide.useResponsive === true || attrs.responsive === 'true') {
                fileSize = provide.setImage[size].size[0] + 'x' + provide.setImage[size].size[1];
            }

            if (provide.usePixelRatio === true || attrs.ratio === 'true' ) {
                if (devicePixelRatio > provide.limitPixelRatio) {
                    devicePixelRatio = provide.limitPixelRatio;
                }
                if (devicePixelRatio === 1) {
                    subst = '';
                } else {
                    subst = '@' + devicePixelRatio + 'x';
                }

            }

            result = attrs.ngSrc.replace(re, fileSize + subst);
            attrs.ngSrc = result + match[0];
            console.debug(result + match[0]);
        }
    };
});
