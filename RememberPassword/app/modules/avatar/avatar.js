/// <reference path="../../../typings/angularjs/angular.d.ts"/>
(function () {

    "use strict";

    // Define enroll controller
    var avtarController = function (scope, location, constants) {

        scope.canvasSize = {

            height: 560,
            width: 420

        };

    // Avatar url
    scope.avatarUrl = "/app/images/human_male_front_550.png";




    };
    

    // Define enroll module
    angular.module("avatarModule", [])

        // Enroll controller
        .controller("avatarController", ['$scope', '$location', "constants", avtarController]);

}());
