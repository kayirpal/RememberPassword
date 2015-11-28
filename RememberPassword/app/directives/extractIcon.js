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
                scope.extractIcon.context = context;



            }
        };

    };


    // Define directive module
    angular.module("directives")

    .directive("extractIcon", extractIcon);
}());