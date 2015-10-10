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
        $routeProvider.when("/dfdfadasd", {
            controller: "homeController",
            templateUrl: "app/modules/avatar/home.html"
        }).when("/enroll", {
            controller: "enrollController",
            templateUrl: "app/modules/enroll/enroll.html"
        }).when("/home", {
            controller: "homeController",
            templateUrl: "app/modules/home/home.html"
        }).when("/avatar", {
            controller: "avatarController",
            templateUrl: "app/modules/avatar/avatar.html"
        }).when("/dashboard", {
            controller: "dashboardController",
            templateUrl: "app/modules/dashboard/dashboard.html"
        }).when("/", {
            controller: "dashboardController",
            templateUrl: "app/modules/dashboard/dashboard.html"
        });
    };

    // Define main module
    angular.module("MyApp", ["ngRoute", 'hmTouchEvents', 'Constants', "AuthServiceModule", "Directive", "enrollModule", "homeModule","dashboardModule","avatarModule","PasswordServiceModule"])

    // Add main config
    .config(["$routeProvider", mainConfiguration])

    // Add main controller
    .controller("mainEngine", ["$scope", "$rootScope", "constants", mainEngine]);

}());

