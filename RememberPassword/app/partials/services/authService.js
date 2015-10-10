"use strict";

/*
   Authorization constructor:
  1. location object {$location} to provide redirections
  2. defer object {$q} for returning promises for api calls 
 */
var AuthService = function ($location, $q) {

    // Get service pointer
    var service = this;

    // Other local variables
    var oAuthToken = "la2yEcwv1lz_UnaWPgTdXAzA1jg";
    
    /*
     * Login method:
     * 1. User details {name: ABC, password: ***}
     * 2. Other details [enableCache...]
     */
    service.login = function (user, other) {
    };

    /*
     * oAuth login:
     * 1. OAuthProvider: google, facebook, or other provider
     */
    service.oAuth = function (oAuthProvider) {

        // Check if oAuth service is available
        if (!OAuth || !OAuth.getVersion()) {
            console.log("oAuth is not functioning as expected");
            return false;
        }

        // Deferred response object
        var oAuthResponse = $q.defer();


        // Initialize the oAuth connection
        OAuth.initialize(oAuthToken);

        // Open browser window
        OAuth.popup(oAuthProvider, {
            cache: true
        }).done(function (result) {

            // Call api method to get user details
            result.me().done(function (response) {

                oAuthRespons.resolve(response);

            }).fail(function (error) {
                // Error at the oAuth api level
                // TODO: Implement error handling
                oAuthResponse.reject(error);
            });

        }).fail(function (error) {
            // Error at auth provider level
            // TODO: Implement error handling
            oAuthResponse.reject(error);
        });


        // return the promise 
        return oAuthResponse.promise;

    };

    // Logout method
    service.logout = function () {

    };
    // Return service pointer
    return service;
};





