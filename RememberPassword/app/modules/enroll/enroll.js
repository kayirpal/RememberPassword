(function () {

    "use strict";

    // Define enroll controller
    var enrollController = function ($scope, $location, $authService, constants) {

        // parent scope
        var parent = $scope.$parent;

        // Form classes
        $scope.formClasses = constants.enrollFormClasses;

        // validity indicator classes
        $scope.emailGroup = ["input-group", "emptyEmail"];
        $scope.passwordGroup = ["input-group", "emptyPassword"];

        // User
        $scope.userAuthData = {
            uName: "",
            invalidEmail: true,
            uPassword: ""
        };

        // OAuth classes
        $scope.oAuthClasses = constants.oAuthClasses;

        $scope.gotoHome = function () {
            if (!!constants.isUserFound) {
                $location.path("/Home");
                $scope.$apply();
            }
        };


        // Enroll user
        $scope.login = function (oAuthMode) {

            var validForm = true;

            // Check valid email
            if ($scope.userAuthData.invalidEmail){

                $scope.emailGroup.pop();
                // Add invalid class
                $scope.emailGroup.push("inValidEmail");

                validForm = false;
                
            }

            $scope.passwordGroup.pop();

            // Check for valid password 
            if (!$scope.userAuthData.uPassword) {


                // Add invalid class
                $scope.passwordGroup.push("inValidPassword");

                validForm = false;

                
            } else {

                // Add invalid class
                $scope.passwordGroup.push("emptyPassword");
            }

            if (validForm) {

                // Call login
                $authService.login($scope.userAuthData);

                // enroll 
                $scope.enroll();
            }
        };

        $scope.enroll = function () {
            // Update classes for the form elements
            $scope.formClasses.pop();
            $scope.oAuthClasses.pop();
            $scope.formClasses.push("fadeOutDown");
            $scope.oAuthClasses.push("zoomOutDown");
        };

        $scope.oAuthService = function (serviceProvider) {

            $authService.oAuth(serviceProvider).then(
                function (response) {
                    if (response) {

                        // Set user avatar
                        parent.loggedInUser = constants.user;

                        $scope.enroll();
                    }
                },
                function (error) {
                    console.log("Failed to authenticate using oAuth");
                });
        };

        // Add @ sign 
        $scope.appendEmailSign = function () {

            var email = $scope.userAuthData.uName;

            if (!!email && email.indexOf("@") === -1) {
                $scope.userAuthData.uName = email.concat("@");
            }
        };

        $scope.resetPasswordClasses = function () {

            $scope.passwordGroup.pop();

            // Add valid class
            $scope.passwordGroup.push("emptyPassword");
        };

            // validate email
            $scope.validateEmail = function () {

            // Set validate class
            $scope.emailGroup.pop();

            // Set invalidate class
            $scope.userAuthData.invalidEmail = true;

            // email entered
            var email = $scope.userAuthData.uName;

            // If its not empty
            if (!!email) {

                // Validate email
                if (constants.validEmail.test(email)) {

                    // Add valid class
                    $scope.emailGroup.push("validEmail");

                    // Reset invalidate flag
                    $scope.userAuthData.invalidEmail = false;
                } else {

                    // Add invalid class
                    $scope.emailGroup.push("inValidEmail");
                }

            } else {

                // Add empty class
                $scope.emailGroup.push("emptyEmail");
            }

        };

    };

    // Define enroll module
    angular.module("enrollModule", [])

    // Enroll controller
    .controller("enrollController", ['$scope', '$location', 'authService', 'constants', enrollController]);
}())