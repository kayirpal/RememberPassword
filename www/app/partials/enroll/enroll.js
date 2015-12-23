
(function () {

    "use strict";

    // Define enroll controller
    var EnrollController = function (state, $scope, location, auth, constants) {

        // current scope
        var enroll = this,

        // parent scope
        parent = $scope.$parent;

        //#region  Email Address part of the form
        //#endregion 


        // Form classes
        enroll.formClasses = constants.enrollFormClasses;

        // validity indicator classes
        enroll.emailGroup = [];
        enroll.passwordGroup = ["input-group", "emptyPassword"];

        enroll.emailProviders = [{
            style: {
                'background-color': "rgb(168, 165, 80)",
                transform: 'rotate(-90deg) skew(50deg)'
            },
            title: "linkedin.com"
        }, {
            style: {
                'background-color': 'rgba(133, 56, 163, 0.42)',
                transform: 'rotate(-50deg) skew(50deg)'
            },
            title: "yahoo.com"
        }, {
            style: {
                'background-color': 'rgb(43, 51, 60)',
                transform: 'rotate(-10deg) skew(50deg)'
            },
            title: "icloud.com"
        }, {
            style: {
                'background-color': 'rgba(217, 220, 38, 0.42)',
                transform: 'rotate(30deg) skew(50deg)'
            },
            title: "hotmail.com"
        }, {
            style: {
                'background-color': 'rgba(234, 67, 53, 0.7)',
                transform: 'rotate(70deg) skew(50deg)'
            },
            title: "gmail.com"
        }, {
            style: {
                'background-color': 'rgba(0, 114, 198, 0.45)',
                transform: 'rotate(110deg) skew(50deg)'
            },
            title: "outlook.com"
        }, {
            style: {
                'background-color': 'rgba(49, 143, 52, 0.48)',
                transform: 'rotate(150deg) skew(50deg)'
            },
            title: "mail.com"
        }, {
            style: {
                'background-color': 'rgb(162, 130, 168)',
                transform: 'rotate(190deg) skew(50deg)'
            },
            title: "rediffmail.com"
        }];

        enroll.rotateWheelValue = {
            transform: "rotate(0deg)"
        };
        // User
        enroll.userAuthData = {};
        enroll.currentThemeColor = "rgba(234, 67, 53, 0.7)";

        var prevRotateIndex = 4,
            prevRotateDeg = 0;
        // rotate wheel
        enroll.rotateWheel = function (sectionIndex, theme) {

            // deg
            var deg = 0,
                diff;

            if (sectionIndex === prevRotateIndex) {
                return;
            }

            diff = prevRotateIndex - sectionIndex;

            deg = diff * 40;

            if (deg > 240) {

                prevRotateDeg += (deg - 360);
            } else if (deg < -240) {

                prevRotateDeg += (360 + deg);

            } else {

                prevRotateDeg += deg;
            }

            prevRotateIndex = sectionIndex;

            enroll.rotateWheelValue = {
                transform:  "rotate("+prevRotateDeg+ "deg)"
            };

            enroll.currentThemeColor = "";
            if (theme) {
                enroll.currentThemeColor = theme['background-color'];
            }
        };

        // OAuth classes
        enroll.oAuthClasses = constants.oAuthClasses;

        enroll.gotoHome = function () {
            if (!!constants.isUserFound) {
                //  location.path("/Home");
                $scope.$apply();
            }
        };

        //Check email
        enroll.checkProvidedEmail = function (userAuthData) {

            var validEmailAlias;

            // invalidate email address
            userAuthData.invalidEmail = true;

            if (userAuthData.uName && userAuthData.uName.trim()) {

                // remove any @ sign if applied 
                validEmailAlias = userAuthData.uName.split('@')[0];

                if (validEmailAlias) {

                    // set valid flag on
                    userAuthData.invalidEmail = false;
                    
                    // assume  present for now
                    enroll.showPasswordScreen = true;

                }
            }
        };

        enroll.checkPressedKey = function (userAuthData, event, isPassword) {

            if (event.which === 13) {

                if (isPassword) {
                    enroll.checkPassword(userAuthData);

                } else {
                    enroll.checkProvidedEmail(userAuthData);
                }
            }

        };

        enroll.checkPassword = function () {

            enroll.showPasswordScreen = false;

            location.path("/dashboard");
        };

        // Enroll user
        enroll.login = function () {

            var validForm = true;

            // Check valid email
            if (enroll.userAuthData.invalidEmail) {

                enroll.emailGroup.pop();
                // Add invalid class
                enroll.emailGroup.push("inValidEmail");

                validForm = false;

            }

            enroll.passwordGroup.pop();

            // Check for valid password 
            if (!enroll.userAuthData.uPassword) {


                // Add invalid class
                enroll.passwordGroup.push("inValidPassword");

                validForm = false;


            } else {

                // Add invalid class
                enroll.passwordGroup.push("emptyPassword");
            }

            if (validForm) {

                // Call login
                auth.login(enroll.userAuthData);

                // enroll 
                enroll.enroll();
            }
        };

        enroll.enroll = function () {
            // Update classes for the form elements
            enroll.formClasses.pop();
            enroll.oAuthClasses.pop();
            enroll.formClasses.push("fadeOutDown");
            enroll.oAuthClasses.push("zoomOutDown");
        };

        enroll.oAuthService = function (serviceProvider) {

            auth.oAuth(serviceProvider).then(
                function (response) {
                    if (response) {

                        // Set user avatar
                        parent.loggedInUser = constants.user;

                        enroll.enroll();
                    }
                },
                function (error) {

                    console.log("Failed to authenticate using oAuth");
                    console.log(error);
                });
        };

        // Add @ sign 
        enroll.appendEmailSign = function () {

            var email = enroll.userAuthData.uName;

            if (!!email && email.indexOf("@") === -1) {
                enroll.userAuthData.uName = email.concat("@");
            }
        };

        enroll.resetPasswordClasses = function () {

            enroll.passwordGroup.pop();

            // Add valid class
            enroll.passwordGroup.push("emptyPassword");
        };

        // validate email
        enroll.validateEmail = function () {

            // Set validate class
            enroll.emailGroup.pop();

            // Set invalidate class
            enroll.userAuthData.invalidEmail = true;

            // email entered
            var email = enroll.userAuthData.uName;

            // If its not empty
            if (!!email) {

                // Validate email
                if (constants.validEmail.test(email)) {

                    // Add valid class
                    enroll.emailGroup.push("validEmail");

                    // Reset invalidate flag
                    enroll.userAuthData.invalidEmail = false;
                } else {

                    // Add invalid class
                    enroll.emailGroup.push("inValidEmail");
                }

            } else {

                // Add empty class
                enroll.emailGroup.push("emptyEmail");
            }

        };

        return enroll;
    };

    // Define enroll module
    angular.module("enrollModule")

    // Enroll controller
    .controller("enrollController", ["$state", '$scope', '$location', 'authservice', 'constants', EnrollController]);
}());