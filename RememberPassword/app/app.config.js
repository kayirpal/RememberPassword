(function () {
    "use strict";

    // Main configuration 
    var appConfig = function (stateProvider, urlRouterProvider) {

        // Set site configuration
        
        //default route
        urlRouterProvider.otherwise("/dashboard");

        // Splash screen
        stateProvider.state("dashboard", {
            url: "/dashboard",
            controller: "dashboardController as dashboard",
            templateUrl: "app/partials/dashboard/dashboard.html"

        }).state("enroll", {
            url: "/enroll",
            controller: "enrollController as enroll",
            templateUrl: "app/partials/enroll/enroll.html"
        });
    };

    // main module
    angular.module("MyApp")

    // Add main config
    .config(["$stateProvider", "$urlRouterProvider", appConfig]);


}());