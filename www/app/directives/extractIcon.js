/// <reference path="../../../typings/angularjs/angular.d.ts"/>
(function () {
    "use strict";

    var extractIcon = function () {

        return {

            scope: {
                extractIcon: "="
            },
            link: function (scope, element, attr) {

                scope.extractIcon = scope.extractIcon || {};

                var canvas = element[0];
                var context = canvas.getContext('2d');
                // 4:3
                var width, height;

                if (!attr.noChanges) {
                    canvas.width = (window.innerWidth * canvas.width) / 500;
                    canvas.height = (window.innerHeight * canvas.height) / 500;
                }

                width = canvas.width;
                height = canvas.height;

                var imageObj = new Image();
                imageObj.height = height;
                imageObj.width = width;
                imageObj.src = scope.extractIcon.rawFileUrl;
                imageObj.onload = function () {
                    context.drawImage(imageObj, 0, 0, width, height);
                    scope.extractIcon.uploadedIconUrl = canvas.toDataURL("image/png");
                };
            }
        };

    };


    // Define directive module
    angular.module("directives")

    .directive("extractIcon", extractIcon);
}());