(function () {

    "use strict";

    // Define enroll controller
    var enrollController = function ($scope, location, $authService, constants) {

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
                'background-color': "rgba(199, 189, 66, 0.73)",
                transform: 'rotate(-90deg) skew(50deg)'
            },
            offset: 160,
            title: "linkedin.com"
        }, {
            style: {
                'background-color': 'rgba(133, 56, 163, 0.42)',
                transform: 'rotate(-50deg) skew(50deg)'
            },
            offset: 120,
            title: "yahoo.com"
        }, {
            style: {
                'background-color': 'rgba(0, 0, 0, 0.5)',
                transform: 'rotate(-10deg) skew(50deg)'
            },
            offset: 80,
            title: "icloud.com"
        }, {
            style: {
                'background-color': 'rgba(217, 220, 38, 0.42)',
                transform: 'rotate(30deg) skew(50deg)'
            },
            offset: 40,
            title: "hotmail.com"
        }, {
            style: {
                'background-color': 'rgba(234, 67, 53, 0.7)',
                transform: 'rotate(70deg) skew(50deg)'
            },
            offset: 0,
            title: "gmail.com"
        }, {
            style: {
                'background-color': 'rgba(0, 114, 198, 0.45)',
                transform: 'rotate(110deg) skew(50deg)'
            },
            offset: -40,
            title: "outlook.com"
        }, {
            style: {
                'background-color': 'rgba(49, 143, 52, 0.48)',
                transform: 'rotate(150deg) skew(50deg)'
            },
            offset: -80,
            title: "mail.com"
        }, {
            style: {
                'background-color': 'rgba(243, 159, 218, 0.49)',
                transform: 'rotate(190deg) skew(50deg)'
            },
            offset: -120,
            title: "rediffmail.com"
        }];
        enroll.domainOffset = 0;
        // User
        enroll.userAuthData = {};

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

                    // todo: check for user present in our system or not

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
        enroll.checkPassword = function (userAuthData) {

            enroll.showPasswordScreen = false;

            location.path("/dashboard");
        };
        // Enroll user
        enroll.login = function (oAuthMode) {

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
                $authService.login(enroll.userAuthData);

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

            $authService.oAuth(serviceProvider).then(
                function (response) {
                    if (response) {

                        // Set user avatar
                        parent.loggedInUser = constants.user;

                        enroll.enroll();
                    }
                },
                function (error) {
                    console.log("Failed to authenticate using oAuth");
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
    angular.module("enrollModule", [])

    // Enroll controller
    .controller("enrollController", ['$scope', '$location', 'authService', 'constants', enrollController]);
}())