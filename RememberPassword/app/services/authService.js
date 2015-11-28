(function () {
    "use strict";

    /*
       Authorization constructor:
      1. location object {$location} to provide redirections
      2. defer object {$q} for returning promises for api calls 
     */
    var authService = function ( $q, constants) {

        // Get service pointer
        var service = this;

        // Other local variables
        var oAuthToken = "la2yEcwv1lz_UnaWPgTdXAzA1jg";

        /*
         * Login method:
         * 1. User details {name: ABC, password: ***}
         * 2. Other details [enableCache...]
         */
        service.login = function (userAuthData) {

            // Get previous user data from local storage
            if (localStorage) {

                // Temp data base
                var uPassword = localStorage.getItem(userAuthData.uName);

                // If user is enrolled and wrong password
                if (!!uPassword && uPassword !== userAuthData.uPassword) {

                    return false;
                    // Save password
                }

                localStorage.setItem(userAuthData.uName, userAuthData.uPassword);


                // Add dummy user data
                constants.user = {
                    name: "",
                    avatar: "",
                    gender: "male",
                    isOAuth: false,
                    age: 22,
                    height: 5.5,
                    email: userAuthData.uName,
                    weight: 68
                };

                //  user found
                constants.isUserFound = true;

                return true;
            }

            return false;
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

                    if (!!response.id) {

                        //  user found
                        constants.isUserFound = true;

                        // Add dummy user data
                        constants.user = {
                            name: response.name,
                            isUserFound: true,
                            isOAuth: true,
                            avatar: response.avatar,
                            gender: !!response.raw ? response.raw.gender : "male",
                            age: 22,
                            height: 5.5,
                            email: "",
                            weight: 68
                        };

                        oAuthResponse.resolve(true);
                    } else {
                        oAuthResponse.reject(response);
                    }


                }).fail(function (error) {
                    // Error at the oAuth api level
                    oAuthResponse.reject(error);
                });

            }).fail(function (error) {
                // Error at auth provider level
                oAuthResponse.reject(error);
            });


            // return the promise 
            return oAuthResponse.promise;

        };

        // Logout method
        service.logout = function () {
            return;
        };
        // Return service pointer
        return service;
    };

    // Define auth service module
    angular.module("services")

// Adding the service
.service("authservice", ["$q", "constants", authService]);

}());





