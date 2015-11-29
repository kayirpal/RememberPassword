(function () {

    "use strict";

    var secretService = function () {

        // Get service pointer
        var service = {};
        

        // encrypt
        function encrypt(message) {

            // return value
            var encryptedMessage = CryptoJS.MD5(message);

            return encryptedMessage.toString();
        };

        // encrypted message
        service.encryptPhrase = function (phrase) {

            // nothing to work with
            if(!phrase || !phrase.toString().trim()){
                return;
            }

            // just need string value 
            phrase = phrase.toString();

            // pick words in the phrase
            var phrases = phrase.replace(/[\t\n]/g, '').split(" ");

            // clean up phrases 
            phrases = phrases.filter(function (item) {
                return !!item && !!item.trim();
            });


            // encrypted  message to return
            var encryptedMessage = {};

            // encrypted phrases
            encryptedMessage.bundle = phrases.map(function (item) {

                // return encrypted part
                return encrypt(item);
            });
            
            // whole message encrypted
            encryptedMessage.encodedPhrase = encrypt(phrases.join(" "));

            // return encrypted message
            return encryptedMessage;
        };

        // Return service pointer
        return service;
    };

    // Define auth service module
    angular.module("services")

// Adding the service

.service("secretservice", [secretService]);

}());