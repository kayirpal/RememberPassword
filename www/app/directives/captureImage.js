﻿(function () {
    "use strict";

    var captureImage = function () {

        var directive = {};

        directive.restrict = "A";

        directive.scope = {
            captureImage: "="
        };

        directive.link = function (scope, element, attr) {

            var navigator = window.navigator;

            scope.captureImage = scope.captureImage || {};
            
            function onSuccess(imageURI) {
                scope.captureImage.rawFileUrl = "data:image/jpeg;base64," + imageURI;
                scope.$apply();
            }

            function onFail() {
                return;
            }

            scope.captureImage.capture = function () {

                if (navigator && navigator.camera && window.Camera) {
                    navigator.camera.getPicture(onSuccess, onFail, {
                        quality: 50,
                        destinationType: window.Camera.DestinationType.DATA_URL
                    });
                } else {
                    alert("No camera");
                }

            };

            if (scope.captureImage.autoOpen) {
                scope.captureImage.capture();
            }

        };

        return directive;
    };

    // Define directive module
    angular.module("directives")

    // Add the directive to the module
    .directive("captureImage", captureImage);
}());