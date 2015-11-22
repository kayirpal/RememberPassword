(function () {

    "use strict";

    // Main controller
    var mainEngine = function (scope, rootScope, constants) {
        
        // Navigation 
        scope.subSites = constants.subSites;

        scope.loggedInUser = {
            isUserFound: false
        };

        // Can redirect
        scope.canRedirect = function (reDirectTo) {
                        
            if ((reDirectTo.isAuthRequired && constants.isUserFound) || (!reDirectTo.isAuthRequired && !constants.isUserFound)) {
                return true;
            } else {
                return false;
            }
        };

        // right side navigation 
        scope.userActionClasses = constants.userActionClasses;

        scope.showHideUserActions = function () {
            var index = scope.userActionClasses.indexOf("slideInRightDown");
            if (index === -1) {
                scope.userActionClasses.push("slideInRightDown");
            } else {
                scope.userActionClasses.pop();
            }
        };
    };

    // Main configuration 
    var mainConfiguration = function ($routeProvider) {
        // Set site configuration

        // Splash screen
        $routeProvider.when("/", {
            controller: "dashboardController",
            templateUrl: "app/modules/dashboard/dashboard.html"
        }).when("/dashboard", {
            controller: "dashboardController",
            templateUrl: "app/modules/dashboard/dashboard.html"
        }).when("/enroll", {
            controller: "enrollController",
            controllerAs: "enroll",
            templateUrl: "app/modules/dashboard/dashboard.html"
        }).when("/checkPassword", {
            controller: "dashboardController",
            controllerAs: "enroll",
            templateUrl: "app/modules/enroll/enroll.html"
        });
    };

    // Define main module
    angular.module("MyApp", ["ngRoute", 'hmTouchEvents', 'common', "services", "directives", "enrollModule", "dashboardModule"])

    // Add main config
    .config(["$routeProvider", mainConfiguration])

    // Add main controller
    .controller("mainEngine", ["$scope", "$rootScope", "constants", mainEngine]);

}());

