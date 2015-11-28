(function () {

    "use strict";

    // Main controller
    var mainEngine = function (constants) {
        
        var app = this;

        // Navigation 
        app.subSites = constants.subSites;

        app.loggedInUser = {
            isUserFound: false
        };

        // Can redirect
        app.canRedirect = function (reDirectTo) {
                        
            if ((reDirectTo.isAuthRequired && constants.isUserFound) || (!reDirectTo.isAuthRequired && !constants.isUserFound)) {
                return true;
            } else {
                return false;
            }
        };

        // right side navigation 
        app.userActionClasses = constants.userActionClasses;

        app.showHideUserActions = function () {
            var index = app.userActionClasses.indexOf("slideInRightDown");
            if (index === -1) {
                app.userActionClasses.push("slideInRightDown");
            } else {
                app.userActionClasses.pop();
            }
        };
    };
    
    // Define main module
    angular.module("MyApp")
        
    // Add main controller
    .controller("mainEngine", ["constants", mainEngine]);

}());

