(function () {

    "use strict";

    // Main configuration 
    var dashboardConfig = function (stateProvider) {
        
        // Enter secret
        stateProvider.state("dashboard.secret", {
            url: "/secret",
            controller: "SecretController as secret",
            templateUrl: "app/partials/dashboard/dashboard.secret.html"            
            // Create hint
        }).state("dashboard.hint", {
            url: "/hint",
            controller: "HintController as hint",
            templateUrl: "app/partials/dashboard/dashboard.hint.html"

            // Create Icon 
        }).state("dashboard.icon", {
            url: "/icon",
            controller: "IconController as icon",
            templateUrl: "app/partials/dashboard/dashboard.icon.html"

            // guess secret
        }).state("dashboard.guess", {
            url: "/guess",
            controller: "GuessController as guess",
            templateUrl: "app/partials/dashboard/dashboard.guess.html"
        });
    };


    // Define enroll module
    angular.module("dashboardModule")

    // Add main config
    .config(["$stateProvider", "$urlRouterProvider", dashboardConfig]);
}());
