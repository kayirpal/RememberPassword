(function () {
    "use strict";

    // Module configuration function
    var appConfig = function ($routeProvider) {

        // Splash screen
        $routeProvider.when("/", {
            controller: "enrollController",
            templateUrl: "app/partials/views/enroll.html"
        }).when("/enroll", {
            controller: "enrollController",
            templateUrl: "app/partials/views/enroll.html"
        }).when("/home", {
            controller: "homeController",
            templateUrl: "app/partials/views/home.html"
        });

    };

    // Main controller
    var mainEngine = function () {

        // Save context for 'this' 
        var self = this;

        // Navigation tiles
        self.subSites = [{
            name: "home",
            subSiteId: 1
        }, {
            name: "enroll",
            subSiteId: 2
        }];
    };


    // Define main module
    angular.module("MyApp", ["ngRoute", 'hmTouchEvents', 'app.directive'])

        // Set site configuration
        .config(['$routeProvider', appConfig])

    // Set the main controller
    .controller("mainEngine", mainEngine);
    // Register the authorization service
    app.service('authService', ['$location', '$q', AuthService]);

    app.controller("mainEngine", function () {

    });
    // Add new animationEnd directive
    app.directive('animationEnd', function () {
        return function ($scope, $element) {
            // this gives us the native JS object
            var el = $element[0];

            el.addEventListener(
                'webkitAnimationEnd',
                function (e) {

                    if (!!$scope.isUserFound) {
                        $scope.redirectToHome();
                    }

                    return false;
                },
                false
            );
        }
    });
}());
