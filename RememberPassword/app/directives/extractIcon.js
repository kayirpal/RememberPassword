/// <reference path="../../../typings/angularjs/angular.d.ts"/>
(function () {
    "use strict";

    var extractIcon = function () {

        return {

            scope: {
                extractIcon: "="
            },
            link: function (scope, element) {

                scope.extractIcon = scope.extractIcon || {};

                var canvas = element[0];
                var context = canvas.getContext('2d');

                var width = context.canvas.width,
                    height = context.canvas.height;

                var imageObj = new Image();
                imageObj.height = height;
                imageObj.width = width;
                imageObj.src = scope.extractIcon.rawFileUrl;
                imageObj.onload = function () {
                    context.drawImage(imageObj, 0, 0, width, height);
                    scope.extractIcon.uploadedIconUrl = context.canvas.toDataURL("image/png");
                };
            }
        };

    };


    // Define directive module
    angular.module("directives")

    .directive("extractIcon", extractIcon);
}());