/// <reference path="../../../typings/angularjs/angular.d.ts"/>
(function () {
    "use strict";

    var initUpload = function () {

        return {
            priority: 2,
            link: function (scope, element) {
                if (scope) {
                    element[0].click();
                }
            }
        };

    };

    // Define directive module
    angular.module("directives")

    // Add the directive to the module
    .directive("initUpload", initUpload);

}());