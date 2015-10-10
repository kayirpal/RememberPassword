(function(){

    "use strict";

    var passwordService = function ($location, $q, constants) {

    // Get service pointer
    var service = this,
    store = localStorage;


    // save password 
    service.encrypt = function(message){

        // return value
        var encryptedMessage = CryptoJS.MD5(message);

        return encryptedMessage.toString();
    };

    service.savePassowrd = function(currentStep){

        var password = currentStep.password,
            encryptedMessage = service.encrypt(password),
            iconId = currentStep.iconId,
            key = "Pass_icon_"+iconId+"_step_"+currentStep.id;

            // save the encrypted password
            store.setItem(key,encryptedMessage);


    };

    service.getPasswordStrength = function(password){

        var sIndex = 0;

        // Test for small alphabet
        if(password.search(/[a-z]/)>=0){
            sIndex++;
        }

        // test for Capital alphabet
        if(password.search(/[A-Z]/)>=0){
            sIndex++;
        }


        // Test for integer
        if(password.search(/[0-9]/)>=0){
            sIndex++;
        }


        // Test for special chars
        if(password.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\=\-\?\>\<]/)>=0){
            sIndex++;
        }

        // Test for length
        if(password.length > 5){
            sIndex++;
        }

        return sIndex;
    };


    // Return service pointer
    return service;
};

    // Define auth service module
    angular.module("PasswordServiceModule",["Constants"])

// Adding the service
.service("PasswordService", ["$location", "$q", "constants", passwordService]);

}());