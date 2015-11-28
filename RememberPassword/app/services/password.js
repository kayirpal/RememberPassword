(function () {

    "use strict";

    var passwordService = function () {

        // Get service pointer
        var service = {};
        

        // save password 
        service.encrypt = function (message) {

            // return value
            var encryptedMessage = CryptoJS.MD5(message);

            return encryptedMessage.toString();
        };

        service.savePassowrd = function (currentStep) {

            var password = currentStep.password,
                encryptedMessage = service.encrypt(password),
                iconId = currentStep.iconId,
                key = "Pass_icon_" + iconId + "_step_" + currentStep.id;

            // save the encrypted password
            localStorage.setItem(key, encryptedMessage);
        };

        service.getPasswordStrength = function (password) {

            var sIndex = 0;

            // Test for small alphabet
            if (password.search(/[a-z]/) >= 0) {
                sIndex += 1;
            }

            // test for Capital alphabet
            if (password.search(/[A-Z]/) >= 0) {
                sIndex += 1;
            }


            // Test for integer
            if (password.search(/[0-9]/) >= 0) {
                sIndex += 1;
            }


            // Test for special chars
            if (password.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\=\-\?\>\<]/) >= 0) {
                sIndex += 1;
            }

            // Test for length
            if (password.length > 5) {
                sIndex += 1;
            }

            return sIndex;
        };


        // Return service pointer
        return service;
    };

    // Define auth service module
    angular.module("services")

// Adding the service

.service("passwordservice", [passwordService]);

}());