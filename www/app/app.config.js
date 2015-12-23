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
        }).state("settings", {
            url: "/settings",
            controller: "SettingsController as settings",
            templateUrl: "app/partials/settings/settings.html"
        }).state("share", {
            url: "/share",
            controller: "ShareController as share",
            templateUrl: "app/partials/share/share.html"
        });
    };

    var onStateChange = function (rootScope, state, stateParams) {

        rootScope.$on('$stateChangeStart', function (event, toState, fromState, extra) {


        });

        rootScope.$on("$stateChangeError", console.log.bind(console));
    };

    // main module
    angular.module("MyApp")

    // Add main config
    .config(["$stateProvider", "$urlRouterProvider", appConfig])

    // Add main config
    .run(['$rootScope', '$state', '$stateParams', onStateChange]);


}());