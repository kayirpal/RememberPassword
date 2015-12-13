(function () {
    "use strict";

    // Define  controller
    var SecretController = function (secretService) {

        // scope of the view-modal
        var secret = this;

        // encrypt and secure secret
        secret.stashSecretPhrase = function (currentStep) {

            if (secret.secretPhrase) {

                // save step data
                currentStep.message = secretService.encryptPhrase(secret.secretPhrase);

                // call step complete callback
                if (currentStep.onComplete && typeof(currentStep.onComplete) === "function") {
                    currentStep.onComplete();
                }
            }

            event.preventDefault();
        };
    };

    // Get  module
    angular.module("dashboardModule")

    // Declare controller and dependencies
    .controller("SecretController", ["secretservice", SecretController]);
}());
