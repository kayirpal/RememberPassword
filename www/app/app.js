﻿(function () {
    "use strict";

    // Main controller
    var mainEngine = function (state, constants, storageService) {

        var app = this;

        // Navigation 
        app.subSites = constants.subSites;
        
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

        // goto view
        app.gotoPage = function (viewHandle) {
            if (viewHandle) {
                state.go(viewHandle);
            }
        };

        app.loginOrOut = function (viewHandle) {

            if (app.loggedInUser) {

                var key = constants.authKey;
            
                // save new settings
                storageService.set({}, key);

                app.showHideUserActions();

                app.loggedInUser = undefined;

            } else {
                app.gotoPage(viewHandle);
            }

        };

        app.shareIt = function (viewHandle) {
            if (window.socialmessage) {
                var message = {
                    text: "Best way to keep a secret, keep it to yourself. Tell no one. But what if you forgot, what was it? ",
                    subject: "Do You Remember That!",
                    url: "http://www.laprik.com/12345"
                };
                window.socialmessage.send(message);
            } else {
                app.gotoPage(viewHandle);
            }
        };

        app.gotoDashboard = function () {

            var index = app.userActionClasses.indexOf("slideInRightDown");

            if (index !== -1) {
                app.userActionClasses.splice(index, 1);
            }

            state.go("dashboard");
        };

        app.resetSiteSettings = function () {
            var key = constants.siteSettingsKey;
            app.backgroundStyle = undefined;
            app.iconStyle = undefined;

            constants.settingsToApply = undefined;

            // save new settings
            storageService.set({}, key);

            // goto dashboard
            app.gotoDashboard();
        };

        // save site settings
        app.setSiteSettings = function (settings) {

            var settingsToSave = {},
                key = constants.siteSettingsKey;

            if (settings) {

                if (settings.backgroundStyle) {
                    app.backgroundStyle = {
                        backgroundColor: settings.backgroundStyle.color
                    };
                    settingsToSave.backgroundStyle = app.backgroundStyle;
                }

                if (settings.iconStyle) {
                    app.iconStyle = settings.iconStyle;
                    settingsToSave.iconStyle = app.iconStyle;
                }

                constants.settingsToApply = settingsToSave;

                // save new settings
                storageService.set(settingsToSave, key);

            }

            app.gotoDashboard();
        };

        // init
        (function () {

            // apply site settings
            var key = constants.siteSettingsKey,
                settingsToApply;

            settingsToApply = storageService.get(key);

            if (settingsToApply) {

                if (settingsToApply.backgroundStyle) {
                    app.backgroundStyle = settingsToApply.backgroundStyle;
                }

                if (settingsToApply.iconStyle) {
                    app.iconStyle = settingsToApply.iconStyle;
                }
            }

            constants.settingsToApply = settingsToApply;

            // is user session available
            var authKey = constants.authKey,
                sessionDetails;

            sessionDetails = storageService.get(authKey);

            if (sessionDetails && sessionDetails.isLoggedIn) {

                app.loggedInUser = sessionDetails;

                app.gotoDashboard();                
            }

        }());
    };

    // Define main module
    angular.module("MyApp")

    // Add main controller
    .controller("mainEngine", ["$state", "constants", "storageservice", mainEngine]);
}());